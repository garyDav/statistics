function permitsMiddleware(req, res, next) {
  try {
    next()
  } catch(err) {
    next(err)
  }
}

module.exports = {
  permitsMiddleware
}

