
import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {
  const {loading,logout}=useLogout();
  return (
    <div className="mt-auto">
        <RiLogoutBoxLine className="text-3xl" onClick={logout} />
    </div>
  )
}

export default LogoutButton