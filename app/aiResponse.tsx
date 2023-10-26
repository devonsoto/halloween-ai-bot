import OpenAI from "openai";

// const completion = await openai.chat.completions.create({
//   messages: [{ role: "system", content: "You are a helpful assistant." }],
//   model: "gpt-3.5-turbo",
// });

export const AIResponse = async ({ option }: { option: string }) => {
  console.log(process.env.OPENAI_API_KEY);
  const openai = new OpenAI();

  console.log("test");

  return <div>test</div>;
};
