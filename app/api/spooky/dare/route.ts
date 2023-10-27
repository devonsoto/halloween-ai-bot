import { NextResponse } from 'next/server';
import { OpenAI } from 'langchain/llms/openai';

export const GET = async (req: Request, res: Response) => {
  const openai = new OpenAI({ temperature: 0.7, modelName: 'gpt-3.5-turbo' });

  console.log(req, res);

  console.log(req.body);

  const template =
    'You are a Spooky AI on Halloween night. We are in a bar downtown. Give a dare that is spooky, awesome, and fun. Make the dare related to drinking, dancing, and or flirting. Keep the dare short.';

  const template2 =
    'You are a Spooky AI daremaster on Halloween night, tasked with creating dares for a bar setting. The dares should involve drinking, dancing, or flirting and be both spooky and fun. Provide a dare that is short and to the point. It should start with, I dare you to...';

  const result = await openai.call(template2);

  return NextResponse.json({ data: result });
};
