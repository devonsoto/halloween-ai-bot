import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import { OpenAI as langchainOpenAI } from 'langchain/llms/openai';

export const POST = async (req: Request, res: Response) => {
  const openai = new OpenAI();
  const textOpenAI = new langchainOpenAI({
    temperature: 0.8,
    modelName: 'gpt-3.5-turbo',
  });

  const prompt = `You are a Spooky AI on Halloween night. We are in a bar downtown. The user clicked a button called 'Scare'. Create a prompt that we will submit to a text-to-image generate to scare the user. Think fantasy creatures, spiders and scary scenes. The prompt should be less that 20 words.`;
  const result = await textOpenAI.call(prompt);
  console.log('result', result);

  const response = await openai.images.generate({
    prompt: result,
    size: '1024x1024',
  });

  console.log(response.data);

  return NextResponse.json({
    data: { url: response.data[0].url, prompt: result },
  });
  // return NextResponse.json({});
};
