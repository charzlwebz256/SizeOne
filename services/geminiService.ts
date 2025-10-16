
import { GoogleGenAI } from "@google/genai";
import { Message, Sender } from "../types";

// IMPORTANT: This application requires the API_KEY to be set in the environment variables.
const apiKey = process.env.API_KEY;
if (!apiKey) {
    console.error("API_KEY environment variable not set. Please set it to use the Gemini API.");
}
const ai = new GoogleGenAI({ apiKey: apiKey || '' });

export const getFactualResponse = async (prompt: string): Promise<string> => {
    if (!apiKey) return "API Key not configured. Factual search is disabled.";
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Based on a web search, provide a concise and factual answer to the following question: "${prompt}"`,
            config: {
                tools: [{ googleSearch: {} }],
            },
        });
        return response.text;
    } catch (error) {
        console.error("Error fetching factual response:", error);
        return "Sorry, I couldn't perform a web search at the moment.";
    }
};

export const getCreativeResponse = async (prompt: string, temperature: number): Promise<string> => {
    if (!apiKey) return "API Key not configured. Creative generation is disabled.";
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                systemInstruction: "You are a thoughtful and creative AI assistant. Provide an answer that is conversational, engaging, and exhibits emotional awareness. Avoid being overly factual or dry.",
                temperature: temperature,
            }
        });
        return response.text;
    } catch (error) {
        console.error("Error fetching creative response:", error);
        return "Sorry, my creative circuits are a bit fuzzy right now.";
    }
};

export const getHybridResponse = async (prompt: string, factualContext: string, creativeContext: string): Promise<string> => {
    if (!apiKey) return "API Key not configured. Hybrid response is disabled.";
    const hybridPrompt = `
      User's original question: "${prompt}"

      I have two perspectives to answer this question.

      Perspective 1 (Factual, Search-based):
      "${factualContext}"

      Perspective 2 (Creative, Conversational):
      "${creativeContext}"

      Your task is to synthesize these two perspectives into a single, unified, and natural-sounding response. The final answer should be:
      - Factually accurate, drawing from Perspective 1.
      - Conversationally engaging and easy to understand, drawing from the tone of Perspective 2.
      - A seamless blend of both, not just a concatenation.
      - Directly answer the user's question. Do not mention the two perspectives in your final response.
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: hybridPrompt,
        });
        return response.text;
    } catch (error) {
        console.error("Error fetching hybrid response:", error);
        return "Sorry, I'm having trouble combining my thoughts right now.";
    }
};
