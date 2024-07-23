import { Hono } from 'hono'
import { handle } from '@hono/node-server/vercel'
// import { handle } from 'hono/vercel'
import type { PageConfig } from 'next'
import { myName } from './test'

export const config: PageConfig = {
  api: {
    bodyParser: false
  }
}

const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
  return c.json({
    message: `Hello from ${myName} and everyone!`
  })
})

export default handle(app)
