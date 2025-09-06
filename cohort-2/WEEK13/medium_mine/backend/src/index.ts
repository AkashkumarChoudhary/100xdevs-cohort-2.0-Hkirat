import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
const app = new Hono<{
  Bindings:{
    DATABASE_URL:string
  }
}>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/singup',(c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
  return c.text("signup is here")
})
app.post('/api/v1/singin',(c)=>{
  return c.text("signin is here")
})
app.post('/api/v1/blog',(c)=>{
  return c.text("blog is here")
})
app.put('/api/v1/blog',(c)=>{
  return c.text("blog is here")
})
app.get('/api/v1/blog:id',(c)=>{
  return c.text("blog:id is here")
})
export default app
