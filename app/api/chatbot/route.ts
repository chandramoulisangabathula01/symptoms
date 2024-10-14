// // app/api/chatbot/route.ts
// import axios from 'axios';
// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//   const { userInput } = await req.json();

//   try {
//     const response = await axios.post(
//       `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest/generateContent?key=${process.env.VITE_GEMINI_API_KEY}`,
//       {
//         contents: [
//           {
//             parts: [{ text: userInput }],
//           },
//         ],
//       }
//     );
    
//     const botResponse = response.data.candidates[0].content.parts[0].text;
//     return NextResponse.json({ botResponse });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }



// app/api/chatbot/route.ts
import axios from 'axios';
import { NextResponse } from 'next/server';

import { GEMINI_API_KEY, GEMINI_ENDPOINT } from '@/config/constants';

export async function POST(req: Request) {
  try {
    const { userInput } = await req.json();
    
    if (!userInput) {
      return NextResponse.json({ error: 'User input is required' }, { status: 400 });
    }

    const response = await axios.post(
      `${GEMINI_ENDPOINT}/generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: userInput }],
          },
        ],
      }
    );
    
    if (!response.data.candidates || response.data.candidates.length === 0) {
      return NextResponse.json({ error: 'No response from the API' }, { status: 500 });
    }

    const botResponse = response.data.candidates[0].content.parts[0].text;
    return NextResponse.json({ botResponse });
    
  } catch (error: any) {
    console.error('Error in chatbot API:', error);  // Log the error for debugging
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
