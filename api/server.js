// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.get('/api/beneficiaryLTI/balances', (req, res) => {
    const db = router.db;
    const data = db.get('api.beneficiaryLTI.balances').value();
    res.json(data);
  });
  
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
