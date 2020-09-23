const dotenv = require('dotenv');
dotenv.config({
    path: './config.env'
});

const db = require('./models');
const app = require('./config/index')

// logging system
const bole = require('bole')

bole.output({level: 'debug', stream: process.stdout})
const log = bole('server')

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//Drop and re-sync db.
// });

log.info('server process starting')
const PORT = process.env.PORT || 3000;
log.info(PORT);
// start listening
app.listen(PORT, process.env.IP, function (error) {
  if (error) {
    log.error('Unable to listen for connections', error)
    process.exit(10)
  }
  log.info('express is listening on http://' +
  process.env.IP + ':' + PORT)
})