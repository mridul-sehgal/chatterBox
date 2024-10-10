const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-gradient-to-r from-pink-500 to-purple-500">
        <div className=" avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg="
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200">Mridul Sehgal</p>
                <span className="text-xl">😂</span>
            </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default Conversation;
