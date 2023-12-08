import prisma from '@/lib/prismadb'
import { Chat } from '@prisma/client';

type Props = {
  chatId?: string;
}

export default async function getChatById(params?: Props): Promise<Chat | null> {

  let query: any = {}

  if (params?.chatId)
    query.chatId = params.chatId;
  else return null;

  try {
    const chat = await prisma.chat.findFirst({
      where: query
    });

    console.log('found chat', chat)
    return chat;

  } catch (error: any) {
    throw new Error(error);
  }
}
