import { useContext } from "react";
import { ChatContext } from "../context/chatContext";

const Chat = () => {
    const {userChats, isUserChatLoading, userChatsError} = useContext(ChatContext)

    console.log("UserChats", userChats)

    return <>Chat</>
}
 
export default Chat;