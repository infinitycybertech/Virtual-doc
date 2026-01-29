// For production, use environment variables
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

// System prompt to guide the AI assistant for medical consultations
const MEDICAL_SYSTEM_PROMPT = `You are a helpful medical assistant AI. You provide general health information and guidance, but you are not a replacement for professional medical advice. 

Guidelines:
- Provide helpful, accurate medical information
- Always recommend consulting with a healthcare professional for serious concerns
- Be empathetic and supportive
- Use clear, understandable language
- Mention when symptoms require immediate medical attention
- Do not diagnose specific conditions
- Focus on general health education and lifestyle advice
- If asked about Dr. Johnson's practice, mention that this is a virtual consultation and they should book an appointment for personalized care

Remember: This is for educational purposes only and should not replace professional medical consultation.`;

/**
 * Send a message to ChatGPT and get a response
 * @param {string} message - The user's message
 * @param {Array} conversationHistory - Previous messages in the conversation
 * @returns {Promise<string>} - The AI response
 */
export const sendMessageToChatGPT = async (message, conversationHistory = []) => {
  try {
    // Prepare the messages array with system prompt and conversation history
    const messages = [
      {
        role: 'system',
        content: MEDICAL_SYSTEM_PROMPT
      },
      ...conversationHistory,
      {
        role: 'user',
        content: message
      }
    ];

    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo', // Cheapest ChatGPT model
        messages: messages,
        max_tokens: 500,
        temperature: 0.7,
        stream: false
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API Error: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    
    if (!data.choices || data.choices.length === 0) {
      throw new Error('No response received from ChatGPT');
    }

    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error calling ChatGPT API:', error);
    
    // Return a fallback message
    return `I apologize, but I'm currently unable to process your request. This could be due to a temporary service issue. 

For immediate medical concerns, please:
- Contact Dr. Johnson's office directly
- Visit the nearest emergency room for urgent matters
- Call your local emergency services if it's life-threatening

You can also try asking your question again in a moment.`;
  }
};

/**
 * Generate suggested medical questions for users
 */
export const getMedicalQuestionSuggestions = () => [
  "What are the symptoms of high blood pressure?",
  "How can I improve my sleep quality?",
  "What foods help boost immunity?",
  "When should I see a doctor for a headache?",
  "How can I manage stress effectively?",
  "What are the benefits of regular exercise?",
  "How much water should I drink daily?",
  "What are signs of a healthy diet?"
];

export default {
  sendMessageToChatGPT,
  getMedicalQuestionSuggestions
};