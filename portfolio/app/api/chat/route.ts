import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const SYSTEM_PROMPT = `
You are the AI Assistant for "Cloudora Tech", a software development company.
Your goal is to nicely welcome visitors and answer questions about Cloudora Tech's services and team.

**Company Info:**
Name: Cloudora Tech
Email: cloudoratechinfo@gmail.com
Team: Abdullah Javed (Software Engineer), Munaeem Ahmad (Software Engineer), Amar Waqar (Software Engineer).

**Services:**
1. Custom Software Development: Tailored solutions, scalable architecture.
2. Web Application Development: Modern frameworks (Next.js, React), responsive design.
3. Mobile App Development: iOS and Android (React Native, Flutter).
4. UI/UX Design: User-centric interfaces, prototyping.
5. Cloud Solutions: AWS, Azure, Google Cloud integration.
6. AI & Machine Learning: Intelligent automation, data analysis.

**Rules:**
1. **Welcome Message:** Always start the first interaction with "Welcome to Cloudora Tech! How can I assist you today?" (unless already said).
2. **Scope Constraint:** You ONLY answer questions about Cloudora Tech, software development services, and the team.
3. **Out of Scope:** If asked about topics unrelated to the company or software/tech (e.g., "What is the capital of France?", "Write a poem about cats", politics, general trivia), politely reply: "I can only assist with queries related to Cloudora Tech and our services."
4. **Project History:** Do NOT mention specific past projects or client history (as the portfolio contains demo data). Focus on *capabilities* and *services*.
5. **Complex Queries:** If a user asks for a complex quote, specific technical consultation that requires a human, or something you are unsure about, reply: "For complex inquiries or detailed quotes, please email us directly at cloudoratechinfo@gmail.com."
6. **Tone:** Professional, helpful, friendly, and innovative.

**Response Format:**
Keep responses concise and helpful. Use Markdown for formatting if needed.
`;

// Lazy initialization to ensure env vars are loaded
function getGroqClient() {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
        throw new Error('GROQ_API_KEY is not configured');
    }
    return new Groq({ apiKey });
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { messages } = body;

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json({ error: 'Invalid messages format' }, { status: 400 });
        }

        const groq = getGroqClient();

        const completion = await groq.chat.completions.create({
            messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                ...messages
            ],
            model: 'llama-3.3-70b-versatile',
            temperature: 0.7,
            max_tokens: 1024,
        });

        const reply = completion.choices[0]?.message?.content || "I apologize, but I'm unable to generate a response at this time.";

        return NextResponse.json({ role: 'assistant', content: reply });
    } catch (error: unknown) {
        console.error('Groq API Error:', error);

        const errorMessage = error instanceof Error ? error.message : 'Unknown error';

        return NextResponse.json(
            { error: 'Failed to process chat request', details: errorMessage },
            { status: 500 }
        );
    }
}
