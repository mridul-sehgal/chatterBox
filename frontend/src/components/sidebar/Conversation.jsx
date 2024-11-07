import useConversation from "../../zustand/useConversation"
const Conversation = ({conversation,lastIdx,emoji}) => {
  const {selectedConversation,setSelectedConversation}=useConversation()
  const isSelected=selectedConversation?._id===conversation._id;
  return (   
    <>
      <div className={`flex gap-2 items-center hover:bg-gradient-to-r from-pink-500 to-purple-500
        ${isSelected?"bg-gradient-to-r from-pink-500 to-purple-500":""}
        `}
        onClick={()=> setSelectedConversation(conversation)}
        >
        <div className=" avatar online">
          <div className="w-12 rounded-full">
            <img
              src={conversation.profilePic}
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200">{conversation.fullname}</p>
                <span className="text-xl">{emoji}</span>
            </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}

    </>
  );
};

export default Conversation;
