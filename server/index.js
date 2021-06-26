import app from './app'
import { config } from './config'
import { createServer } from 'http'

const server = createServer( app )

// Server
server.listen(config.port, _ => console.log(`Listening http://localhost:${ server.address().port }`))
