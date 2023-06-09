# repost
 Repost hot posts from subreddits directly to social.qwq.sh.

## Usage with Docker
1. Create a .env file with the following content:
```
REDDIT_USERNAME=
REDDIT_PASSWORD=
APP_ID=
APP_SECRET=
SUBREDDIT=
```
2. Run `docker pull ghcr.io/angelsflyinhell/repost`
3. Run `docker run -d --env-file ENV_FILE_PATH ghcr.io/angelsflyinhell/repost`
