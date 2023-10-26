import { NextResponse } from "next/server";
import OpenAI from "openai";

export const GET = async (req: Request, res: Response) => {
  const openai = new OpenAI();

  return NextResponse.json({});
};
