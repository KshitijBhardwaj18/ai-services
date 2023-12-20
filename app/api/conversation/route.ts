import { Configuration, OpenAIApi } from "openai";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if(!configuration.apiKey){
        return new NextResponse("OpenAi API Key not configured", {status: 500})
      }

      if(!messages) {
        return new NextResponse("Message are required", {status: 400});
      }


  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }

  if(!configuration.apiKey){
    return new NextResponse("OpenAi API Key not configured", {status: 401})
  }
}
