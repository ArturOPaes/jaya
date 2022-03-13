
export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/jaya-test',
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET || 'tj67O!==5H',
  basicAuth: {
    user: process.env.BASICH_AUTH_USER || 'jaya',
    password: process.env.BASICH_AUTH_PASSWORD || 'test'
  },
  secretWebhook: process.env.SECRET_WEBHOOK || '123jayatest456'
}
