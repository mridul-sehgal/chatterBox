const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg="
            alt="chat bubble"
          />
        </div>
      </div>
      <div className="chat-bubble text-white bg-pink-500 ">Hi! How are you?</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:42 pm
      </div>
    </div>
  );
};

export default Message;
