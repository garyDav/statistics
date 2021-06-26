import dotenv from 'dotenv'

dotenv.config()

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT
}

export { config }
