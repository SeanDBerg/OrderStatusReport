// Vite development server launcher
import { createServer } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function startServer() {
  const server = await createServer({
    configFile: path.join(__dirname, 'vite.config.ts'),
    root: __dirname,
    server: {
      port: 5000,
      host: '0.0.0.0'
    }
  })
  
  await server.listen()
  
  server.printUrls()
}

startServer().catch(console.error)
