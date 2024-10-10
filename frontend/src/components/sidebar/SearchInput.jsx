import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2" >
        <input type="text" placeholder="Search" className="input input-bordered rounded-full" />
        <button type="submit" className="btn btn-circle text-lg bg-gradient-to-r from-pink-600 to-purple-500 text-white">
        <FaSearch />
        </button>
    </form>
  )
}

export default SearchInput