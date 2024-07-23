# Example app using Next.js and Hono

After cloning the repo, install and start dev with npm.
```
npm install
npm run dev
```

The project has an index page visible at localhost:3000 which displays the output of a serverless function. The serverless function json output can be seen at localhost:3000/api/hello and its code at `pages/api/[...route].ts` demonstrates how a util file can be imported. The corresponding pages can be seen on the deployed site at https://hono-nextjs-zeta.vercel.app/ and https://hono-nextjs-zeta.vercel.app/api/hello
