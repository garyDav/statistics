// Global modules
import express from 'express'
// Local modules
import { permitsMiddleware } from '../utils/middlewares/userPermits'
import { config } from '../config'

function routesApi(app) {
  // Statement and Instances
  const router = express.Router()
  app.use(router)

  router.get('/register', permitsMiddleware, async (req, res, next) => {
    try {
      res.render('register/viewRegister', { dev: config.dev, cActiveReg: true })
    } catch(err) {
      next(err)
    }
  })
}

export default routesApi
