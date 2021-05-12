import { ChangeEvent, FormEvent, useState } from "react";
import { SearchInput } from "./components";

type ConversationPickerProps = {
  onPick(conversationId: string): void;
};

export const ConversationPicker = ({ onPick }: ConversationPickerProps) => {
  const [conversationId, setConversationId] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onPick(conversationId);
    setConversationId("");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setConversationId(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchInput
        placeholder="Read Thread..."
        value={conversationId}
        onChange={handleInputChange}
        autoComplete="off"
      />
    </form>
  );
};
