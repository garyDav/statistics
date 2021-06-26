import express from 'express'
import path from 'path'
import boom from 'boom'
import {
  assistanceRouter
} from './routes'
import isRequestAjaxOrAPI from './utils/isRequestAjaxOrAPI'
import { permitsMiddleware } from './utils/middlewares/userPermits'
import { config } from './config'
import livereload from 'livereload'
import connectLivereload from 'connect-livereload'

import {
  logErrors,
  wrapErrors,
  clientErrorHandler,
  errorHandler
} from './utils/middlewares/errorsHandlers'

const publicDirectory = path.join(__dirname, 'public')

// Livereload
const liveReloadServer = livereload.createServer()
liveReloadServer.watch(publicDirectory)
liveReloadServer.server.once('connection', _ => {
  setTimeout(_ => {
    liveReloadServer.refresh('/')
  }, 100)
})

// App
const app = express()

// Middlewares
app.use(connectLivereload())

// Static files
app.use('/static', express.static(publicDirectory))

// View engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Routes
assistanceRouter(app)

// Main Route
app.get('/', permitsMiddleware, (req, res, next) => {
  const { menu, sub_menu } = req
  try {
    // throw new Error("I'm Evil")
    res.render('layout', { dev: config.dev, menu, sub_menu })
  } catch(err) {
    next(err)
  }
})

app.use((req, res, next) => {
  if(isRequestAjaxOrAPI(req)) {
    const {
      output: { statusCode, payload }
    } = boom.notFound()

    res.status(statusCode).json(payload)
  }
  res.status(404).render('404', { dev: config.dev, error: true })
})

// Error handlers 
app.use(logErrors)
app.use(wrapErrors)
app.use(clientErrorHandler)
app.use(errorHandler)

export default app
