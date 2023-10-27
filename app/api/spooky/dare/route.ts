import { NextResponse } from 'next/server';
import { OpenAI } from 'langchain/llms/openai';

export const GET = async (req: Request, res: Response) => {
  const openai = new OpenAI({ temperature: 0.7 });

  console.log(req, res);

  console.log(req.body);

  const template =
    'You are a Spooky AI on Halloween night. We are in a bar downtown. Give a dare that is spooky, awesome, and fun. Make the dare related to drinking, dancing, and or flirting. Keep the dare short.';

  const result = await openai.call(template);

  console.log('result', result);

  return NextResponse.json({ data: result });
};
