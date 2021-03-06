// Global modules
import express from 'express'
// Local modules
import { permitsMiddleware } from '../utils/middlewares/userPermits'
import { config } from '../config'

function routesApi(app) {
  // Statement and Instances
  const router = express.Router()
  app.use(router)

  router.get('/assistance', permitsMiddleware, async (req, res, next) => {
    try {
      res.render('assistance/viewAssistance', { dev: config.dev, cActiveAss: true })
    } catch(err) {
      next(err)
    }
  })
}

export default routesApi
