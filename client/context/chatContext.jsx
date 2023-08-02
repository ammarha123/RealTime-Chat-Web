import { createContext, useState, useEffect } from "react";
import { baseUrl, getRequest } from "../utils/service";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
  const [userChats, setUserChats] = useState(null);
  const [isUserChatLoading, setIsUserChatLoading] = useState(false);
  const [userChatsError, setUserChatsError] = useState(null);

  useEffect(() => {
    const getUserChats = async () => {
      if (user?._id) {
        setIsUserChatLoading(true);
        setUserChatsError(null);

        try {
          const response = await getRequest(`${baseUrl}/chats/${user?._id}`);
          setIsUserChatLoading(false);

          if (response.error) {
            return setUserChatsError(response);
          }

          setUserChats(response);
        } catch (error) {
          console.log(error);
          setIsUserChatLoading(false);
          setUserChatsError({ error: true, message: "Failed to fetch user chats." });
        }
      }
    };
    getUserChats();
  }, [user]);

  return (
    <ChatContext.Provider value={{ userChats, isUserChatLoading, userChatsError }}>
      {children}
    </ChatContext.Provider>
  );
};
