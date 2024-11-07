import useConversation from "../../zustand/useConversation";
import {useAuthContext}from "../../context/AuthContext"
import { extractTime } from "../../utils/extractTime";
const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation}=useConversation()
  const fromMe=message.senderId===authUser._id;
  const chatClassName=fromMe?"chat-end":"chat-start"
  const formattedDate=extractTime(message.createdAt)
  const profilePic=fromMe?authUser.profilePic:selectedConversation.profilePic
  const bubbleBgColor=fromMe?"bg-pink-500":""
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
          src={profilePic}
            alt="chat bubble"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} `}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedDate}
      </div>
    </div>
  );
};

export default Message;
