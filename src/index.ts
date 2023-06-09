import axios from "axios";
import Reddit = require("reddit");
import schedule from "node-schedule";
import dotenv from "dotenv";

dotenv.config();

const username = process.env.REDDIT_USERNAME!;
const password = process.env.REDDIT_PASSWORD!;
const appId = process.env.APP_ID!;
const appSecret = process.env.APP_SECRET!;
const subreddit = process.env.SUBREDDIT!;

const reddit = new Reddit({
  username,
  password,
  appId,
  appSecret,
  userAgent: "repost/1.0.0 (https://social.qwq.sh)",
});

schedule.scheduleJob("0 */8 * * *", async () => {
  reddit.get(`/r/${subreddit}/hot`).then((result: any) => {
    for (let i = 0; i < result.data.children.length; i++) {
      const post = result.data.children[i].data;
      if (post.post_hint === "image") {
        const url = post.url;
        const title = post.title;

        axios
          .post(`https://ping.qwq.sh/posts/${subreddit}`, {
            thumb_url: url,
            content: title,
            username: `r/${subreddit}`,
          })
          .then((response: any) => {
            console.log(response.data);
          })
          .catch((error: any) => {
            console.log(error);
          });

        break;
      }
    }
  });
});
