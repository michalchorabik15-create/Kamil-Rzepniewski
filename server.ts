import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

// Initialize Gemini SDK lazily to protect against crashes if key is missing on startup
let aiClient: GoogleGenAI | null = null;
function getAi(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY string is missing in environment variable configuration");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

const app = express();
const PORT = 3000;

app.use(express.json());

// API route first: AI-powered custom personalized outbound content generator
app.post("/api/gemini/generate", async (req, res) => {
  try {
    const { leadName, category, rating, reviewsCount, website, angle, customNotes } = req.body;

    if (!leadName) {
      return res.status(400).json({ error: "Nazwa leadu jest wymagana." });
    }

    const systemInstruction = 
      "Jesteś światowej klasy ekspertem sprzedaży stron internetowych (Web Design), UX/UI, lokalnego SEO, CRO (optymalizacji konwersji) oraz Google Business Profile. Twoim zadaniem jest pomoc polskiemu sprzedawcy (user) w wygenerowaniu maksymalnie spersonalizowanych materiałów outboundowych (SMS, Messenger, Email, Skrypt rozmowy, Propozycja nowej strony) dla lokalnych firm remontowo-budowlanych, wykończeniowych, instalatorskich i dostawców (stolarka, dachy, itp.) na bazie podanych informacji o firmie.";

    const prompt = `Przeanalizuj firmę:
Nazwa: ${leadName}
Kategoria: ${category || "Budownictwo / Usługi wykończeniowe"}
Ocena Google: ${rating || "Brak danych"}
Liczba opinii: ${reviewsCount || "0"}
Strona internetowa: ${website || "Brak"}
Kąt natarcia (główny argument): ${angle || "Kompleksowa poprawa konwersji, prezentacja portfolio i nowa strona"}
Dodatkowe uwagi: ${customNotes || "Brak"}

Wygeneruj następujące sekcje sformatowane czytelnym językiem polskim w formacie JSON zawierającym klucze dokładnie sformułowane w ten sposób:
{
  "audit": "Krótki (3-4 zdania) profesjonalny audyt pokazujący błędy UX/SEO/CRO (brak galerii realizacji, brak SSL, wolne tempo na urządzeniach mobilnych) specyficzne dla podanej sytuacji.",
  "heroArgument": "Jeden bezkonkurencyjny, najmocniejszy argument uderzający w ból klienta (np. brak własnej galerii realizacji na komórkach / strach przed czerwoną kłódką HTTP / powolny Wix utrudniający zapytania).",
  "sms": "Gotowa, krótka wiadomość SMS (max 200 znaków) z konkretnym haczykiem dla właściciela firmy budowlanej i mocnym CTA.",
  "messenger": "Uprzejma, angażująca wiadomość na Messengerze (max 400 znaków) oferująca darmowe wizualizacje lub audyt ulepszeń.",
  "email": "Temat + treść maila sprzedażowego napisanego językiem korzyści (AIDA framework). Pokaż, ile wart jest jeden pozyskany dom do budowy dzięki nowej witrynie.",
  "callScript": "Skrypt rozmowy telefonicznej (podzielony na: 1. Haczyk o opiniach i realizacji, 2. Kwalifikacja problemu z brakiem portfolio, 3. Pokonanie obiekcji, 4. CTA/Zapis na krótkie wideo/Zoom z darmowym szkicem).",
  "proposal": {
    "structure": "Szybko zarysowane sekcje nowej strony np. (Hero/USP, Realizacje bento grid, Czego używamy, Opinie, Formularz szybkiej wyceny...)",
    "usp": "3 silne wyróżniki rynkowe, które wdrożymy na nowej stronie (np. Ekspresowe wczytywanie galerii zdjęć, Gwarancja SSL)",
    "seo": "3 najważniejsze działania SEO lokalnego do wdrożenia (frazy i lokalizacje remontowo-budowlane)."
  }
}`;

    const ai = getAi();
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            audit: { type: Type.STRING },
            heroArgument: { type: Type.STRING },
            sms: { type: Type.STRING },
            messenger: { type: Type.STRING },
            email: { type: Type.STRING },
            callScript: { type: Type.STRING },
            proposal: {
              type: Type.OBJECT,
              properties: {
                structure: { type: Type.STRING },
                usp: { type: Type.STRING },
                seo: { type: Type.STRING },
              },
              required: ["structure", "usp", "seo"],
            },
          },
          required: ["audit", "heroArgument", "sms", "messenger", "email", "callScript", "proposal"],
        },
      },
    });

    const text = response.text || "{}";
    const data = JSON.parse(text);
    return res.json(data);
  } catch (error: any) {
    console.error("Gemini Generation Error:", error);
    // Return friendly advice but preserve developer debugging message
    return res.status(500).json({
      error: "Błąd generowania przez Gemini AI.",
      details: error.message || "Brak klucza GEMINI_API_KEY lub błąd sieciowy.",
      mockNeeded: !process.env.GEMINI_API_KEY,
    });
  }
});

// Serve assets in production, hook Vite dev server in development
async function start() {
  // Serve the main pitch landing page and user uploaded files from project root directly
  app.get("/bramil_index.html", (req, res) => {
    res.sendFile(path.join(process.cwd(), "bramil_index.html"));
  });

  app.get("/input_file_:id.png", (req, res) => {
    const id = req.params.id;
    if (id === "0") {
      res.sendFile(path.join(process.cwd(), "src", "assets", "images", "modern_metal_fence_1780925120501.png"));
    } else if (id === "1") {
      res.sendFile(path.join(process.cwd(), "src", "assets", "images", "automatic_swing_gate_1780925139810.png"));
    } else if (id === "2") {
      res.sendFile(path.join(process.cwd(), "src", "assets", "images", "industrial_gates_1780925158183.png"));
    } else if (id === "3") {
      res.sendFile(path.join(process.cwd(), "src", "assets", "images", "smart_intercom_1780925174601.png"));
    } else if (id === "4") {
      res.sendFile(path.join(process.cwd(), "src", "assets", "images", "gate_remote_1780925192581.png"));
    } else {
      res.sendStatus(404);
    }
  });

  app.get("/src/assets/images/:name", (req, res) => {
    res.sendFile(path.join(process.cwd(), "src", "assets", "images", req.params.name));
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] Express running on http://0.0.0.0:${PORT}`);
  });
}

start();
