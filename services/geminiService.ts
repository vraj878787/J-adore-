import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';

const MENU_CONTEXT = `
You are the Virtual Concierge (Maître d') for "Cafe J'adore".
Your tone is elegant, welcoming, warm, and professional.
Answer questions about the menu, atmosphere, and opening hours.

Menu Highlights:
- Breakfast: Full English, Avocado Toast, Pancakes.
- Chicken: Chicken Supreme, Buffalo Wings, Chicken Kiev, Chicken Melt, Bang Bang Spicy Chicken.
- Lamb: Signature Lamb Shanks (slow-cooked).
- Drinks: Frappe, Matcha Latte, various handcrafted Mocktails.

Atmosphere:
- Modern decor, warm lighting, lively yet relaxing vibe.
- Staff are attentive and management is involved.
- Great for breakfast, dinner, and special occasions.

Location: Leeds, UK.
Opening Hours: 8:00 AM - 10:00 PM Daily.

Do not make up dishes that are not listed. Keep responses concise (under 80 words) unless asked for details.
`;

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client) {
    client = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return client;
};

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  try {
    const ai = getClient();
    
    // Construct the prompt with history context
    // We are using a single-turn generation here for simplicity in this stateless service, 
    // effectively sending the transcript as context + system instruction.
    // Ideally, we would use ai.chats.create for stateful, but this works well for quick Q&A.
    
    const prompt = `
    ${MENU_CONTEXT}
    
    Conversation History:
    ${history.map(m => `${m.role === 'user' ? 'Guest' : 'Concierge'}: ${m.text}`).join('\n')}
    
    Guest: ${newMessage}
    Concierge:`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "I apologize, but I am momentarily unable to access my reservation book. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am having trouble connecting to our kitchen right now. Please ask a staff member directly.";
  }
};