const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const sharesRouter = jsonServer.router('shares.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.get('/api/beneficiaryLTI/balances', (req, res) => {
    const db = router.db;
    const data = db.get('api.beneficiaryLTI.balances').value();
    res.json(data);
  });

server.get('/api/sharesPortfolio', (req, res) => {
    const db = sharesRouter.db;
    const data = db.get('api.sharesPortfolio').value();
    res.json(data);
  });
  

server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

module.exports = server
