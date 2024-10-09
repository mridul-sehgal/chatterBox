import User from "../models/user.model.js";

export const getUserForSidebar=async(req,res)=>{
    try {
        const loggedInUserId=req.user._id;
        const filteredUsers=await User.find({_id:{$ne:loggedInUserId}}).select("-password")
        res.status(200).json(filteredUsers)
    } catch (error) {
        console.log("Error at GetUserForSidebar function",error.message)
        res.status(500).json({error:"Internal Server error "})
    }
}

// {_id:{$ne:loggedInUserId} this line filters the current user logged in
// basically it is added so that when a user logs in he/she does not see themaselves in the sidebar