var winston = require('winston');
allLogs()
function allLogs(){
	global.logger = new (winston.Logger)({
    transports: [
      new (winston.transports.File)({ filename: 'logs.log' })
    ]
  });
}

module.exports = winston;