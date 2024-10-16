import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TbMessages } from "react-icons/tb";
const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className=" bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 mb-2">
            <span className=" text-[#e7cccc]">To:</span>{" "}
            <span className="text-white font-bold">John Doe</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-lg text-white font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 Mridul Sehgal</p>
        <p>Select a chat to start messaging</p>
        <TbMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
