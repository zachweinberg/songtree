# Song Tree

A database of songs backed by the Spotify API. Read and leave comments on your favorite songs!

### Motivation

I started this project as a way to practice using [Next.js](https://nextjs.org/) by building a non-trivial webapp.

### Run this locally

You will need a Spotify developer app to use the song search feature of the app.
Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications) and create an app.
You will need a client ID and client secret for your `.env` file:

```
SPOTIFY_CLIENT_SECRET=XXX
SPOTIFY_CLIENT_ID=XXX
```

1. `$ npm install`
2. `$ npm run dev`
3. View the running app in your browser at `http://localhost:3000`
