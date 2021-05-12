import { ConversationPicker } from "./ConversationPicker";
import { useState } from "react";
import { useConversation } from "./useConversation";
import { Button, ThreadContainer } from "./components";

function App() {
  const [conversationId, setConversationId] = useState("");
  const { tweets, isLoading, error, resetConversation } = useConversation(
    conversationId
  );

  const reset = () => {
    setConversationId("");
    resetConversation();
  };

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Error: {error.message}</>;
  }

  if (!conversationId) {
    return <ConversationPicker onPick={setConversationId} />;
  }

  return (
    <ThreadContainer>
      {tweets?.length ? (
        tweets.map((tweet) => {
          return <p key={tweet.id}>{tweet.text}</p>;
        })
      ) : (
        <p className="text-center">No tweets in this thread</p>
      )}
      <div className="flex justify-center">
        <Button onClick={reset}>Read another thread</Button>
      </div>
    </ThreadContainer>
  );
}

export default App;
