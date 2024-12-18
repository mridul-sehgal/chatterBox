import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation"
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
const SearchInput = () => {
  const[search,setSearch]=useState("")
  const {setSelectedConversation}=useConversation()
  const {conversations}=useGetConversations();
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!search)return;
    if(search.length<3){
      return toast.error("Search term must be atleast 3 characters long");
    } 
    const conversation=conversations.find((c)=> c.fullname.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelectedConversation(conversation)
      setSearch("");
    }else{
      toast.error("No such user found")
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        className="input input-bordered rounded-full"
      />
      <button
        type="submit"
        className="btn btn-circle text-lg bg-gradient-to-r from-pink-600 to-purple-500 text-white"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchInput;
