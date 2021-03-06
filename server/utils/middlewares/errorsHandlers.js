import boom from 'boom'
import { config } from '../../config'
import isRequestAjaxOrAPI from '../isRequestAjaxOrAPI'

function withErrorStack(err, stack) {
  if(config.dev) {
    return { ...err, stack } // Object.assign({}, err, stack)
  }
}

function logErrors(err, req, res, next) {
  console.log(err.stack)
  next(err)
}

function wrapErrors(err, req, res, next) {
  if(!err.isBoom) {
    next(boom.badImplementation(err))
  }

  next(err)
}

function clientErrorHandler(err, req, res, next) {
  const {
    output: { statusCode, payload }
  } = err
  // catch errors for AJAX request or if an error ocurrs while streaming
  if(isRequestAjaxOrAPI(req) || res.headersSent) {
    res.status(statusCode).json(withErrorStack(payload, err.stack))
  } else {
    next(err)
  }
}

function errorHandler(err, req, res, next) {
  const {
    output: { statusCode, payload}
  } = err

  res.status(statusCode)
  res.render("error", { dev: config.dev, error: withErrorStack(payload, err.stack) })
}

module.exports = {
  logErrors,
  wrapErrors,
  clientErrorHandler,
  errorHandler
}
