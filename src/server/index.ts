import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";
import { Tweet } from "./types";

const PORT = process.env.PORT || 4000;

type TweetLookupResponse = {
  data: Tweet[];
};

export type Thread = Tweet[];

dotenv.config();

const client = axios.create({
  baseURL: "https://api.twitter.com/2/",
  timeout: 1000,
  headers: {
    Authorization:
      `Bearer ${process.env.BEARER_TOKEN}`
  },
});

const app = express();
app.use(cors());

async function getTweet(id: string) {
  const { data } = await client.get<TweetLookupResponse>(`tweets`, {
    params: { ids: id, "tweet.fields": "conversation_id,author_id" },
  });
  return data?.data?.[0];
}

async function getConversation(id: string, author_id: string) {
  const { data } = await client.get<TweetLookupResponse>(
    "tweets/search/recent",
    {
      params: {
        query: `conversation_id: ${id} and from: ${author_id}`,
        "tweet.fields": "author_id,in_reply_to_user_id",
        max_results: 99,
      },
    }
  );

  return data?.data?.reverse();
}

// https://expressjs.com/en/guide/error-handling.html

app.get("/conversation/:id", async (req, res, next) => {
  try {
    const firstTweet = await getTweet(req.params.id);
    const conversation = await getConversation(
      firstTweet.id,
      firstTweet.author_id
    );
    const thread =
      conversation?.filter(
        (tweet: any) => tweet.in_reply_to_user_id == firstTweet.author_id
      ) || [];
    res.send([firstTweet, ...thread]);
  } catch (error) {
    res.status(500).send("Could not fetch conversation")
  }
});

app.listen(PORT, () => {
  console.log(`The application is listening on port ${PORT}!`);
});
