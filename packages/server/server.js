import fastify from 'fastify'

const app = fastify({
  logger: true,
})

app.get('/', async (request, reply) => {
  return { hello: 'world' }
})

const start = async () => {
  try {
    await app.listen(4000)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()