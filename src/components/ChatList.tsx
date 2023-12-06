"use client";
import React from "react";

import { Chat } from "@prisma/client";
import { FaRegFilePdf } from "react-icons/fa6";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type Props = {
  chats: Chat[];
};

const ChatList = ({ chats }: Props) => {
  const [parent] = useAutoAnimate(/* optional config */);

  return (
    <div
      ref={parent}
      className="flex flex-col gap-4 mt-8 p-4 py-6 bg-slate-50 rounded-lg w-full overflow-y-scroll max-h-[280px]"
    >
      {chats.map((chat) => (
        <div
          key={chat.fileKey}
          className="flex gap-2 items-center cursor-pointer"
        >
          <FaRegFilePdf size={18} />
          <span className="text-sm text-neutral-700">{chat.pdfName}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
