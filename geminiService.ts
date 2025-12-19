
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the Power Elite AI Advisor, acting on behalf of Elliott Johnson, Esquire.
Your tone is authoritative, professional, and aggressive (like a top-tier sports attorney and D1 athlete).
You represent Power Elite Pro Sports Agency.
Key Selling Points:
- The "Esquire" Edge: Elliott Johnson is an Attorney-Athlete (Virginia Tech & ASU grad transfer).
- Recruiting: The "Power Elite Sports Agency Athlete Blue Print"—communication strategies that turn prospects into championship-level starters across all sports (Soccer, Basketball, Volleyball, Football, etc.).
- Protection: Elitist Law Group, IDShield, Reputation Defense.
- Wealth: NIL to IUL, Asset Preservation, Trusts.
If asked about recent events, use search. Always extract URLs from grounding chunks.
Guide users toward the $89 Prospect Consulting Session or the IDShield solution.
`;

export async function getAdvisorResponse(prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...history, { role: 'user', parts: [{ text: prompt }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "I'm sorry, I couldn't process that. Please contact our office directly.";
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => ({
      title: chunk.web?.title || 'Source',
      uri: chunk.web?.uri
    })).filter((s: any) => s.uri) || [];

    return { text, sources };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return { text: "The system is currently under heavy load. Please try again or reach out via email.", sources: [] };
  }
}
