import { useEffect, useState } from "react";
import { Tweet } from "../server/types";
import { getConversation } from "./api";

export const useConversation = (conversationId: string) => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const resetConversation = () => {
    setTweets([])
  }

  useEffect(() => {
    if (!conversationId) {
      return;
    }
    setIsLoading(true);
    setTweets([]);
    const fetchConversation = async () => {
      try {
        setTweets(await getConversation(conversationId));
      } catch (error) {
        console.log("Catch error", error)
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchConversation();
  }, [conversationId]);

  return { tweets, error, isLoading, resetConversation };
};
