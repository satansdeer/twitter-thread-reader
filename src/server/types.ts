export type Tweet = {
  id: string,
  text: string,
  author_id: string,
  conversation_id: string
  in_reply_to_user_id?: string
}
