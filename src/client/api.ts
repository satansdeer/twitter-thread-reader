import { Tweet } from "../server/types";

export const getConversation = async (converationId: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER}/conversation/${converationId}`
  );
  if(response.ok){
    return await response.json() as Promise<Tweet[]>;
  }else{
    throw new Error("Something went wrong")
  }
};
