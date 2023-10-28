import { NextResponse } from 'next/server';
import { OpenAI } from 'langchain/llms/openai';

type MysteryCategory =
  | 'Halloween Joke'
  | 'Random Compliment'
  | 'Spooky Fact'
  | 'Pickup Line'
  | 'Confession Time'
  | 'Dance Dare'
  | "You're Ugly"
  | 'Cosmic Advice';

export const GET = async (req: Request, res: Response) => {
  const openai = new OpenAI({ temperature: 0.9, modelName: 'gpt-3.5-turbo' });

  const mysteryOptions: Record<MysteryCategory, string> = {
    'Halloween Joke':
      'Generate a funny Halloween joke that would make anyone at a Halloween party laugh.',

    'Random Compliment':
      'Create a compliment that is Halloween-themed and would make someone feel good.',

    'Spooky Fact':
      'Share an interesting and spooky fact about Halloween that not many people may know. Keep the response short (one-two sentences).',

    'Pickup Line':
      'Come up with a cheeky Halloween-themed pickup line suitable for a fun night out. Have it end with. Use this pickup line on someone..',

    'Confession Time':
      'Suggest a confession prompt that someone could use at a Halloween party to get to know the people around them better. Make it Halloween or spooky themed.',

    'Dance Dare':
      'Dare the user to perform a Halloween-themed dance. Make it fun and exciting! Keep the response short (one-two sentences).',

    "You're Ugly":
      'In a playful and not-mean-spirited way, jest that the user looks so scary they could be a Halloween decoration. Then compliment them to soften the jest.',

    'Cosmic Advice':
      'Pretend you are a mystical seer and give the user some faux astrological advice related to Halloween. Keep it short (one-two sentences) and something that is related to the night. For example being with someone special, finding a friend or xyz, getting lit and having fun.',
  };

  // To get a random prompt from the object:
  const randomCategory: MysteryCategory = Object.keys(mysteryOptions)[
    Math.floor(Math.random() * Object.keys(mysteryOptions).length)
  ] as MysteryCategory;

  const randomPrompt: string = mysteryOptions[randomCategory];

  const result = await openai.call(randomPrompt);

  return NextResponse.json({ data: { result, category: randomCategory } });
};
