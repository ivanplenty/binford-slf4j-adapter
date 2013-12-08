var log4js = require('log4js');

var Log4JSAdapter = function(level, name){
	this.logger = log4js.getLogger(name);
	this.level = level;
	// to avoid circular references, the mapping is done inline
	if(level == 1){
		this.logger.setLevel('ERROR');
	}
	else if(level == 2){
		this.logger.setLevel('WARN');
	}
	else if(level == 3){
		this.logger.setLevel('INFO');
	}
	else if(level == 4){
		this.logger.setLevel('DEBUG');
	}
	else if(level == 5){
		this.logger.setLevel('TRACE');
	}
	else
	{
		this.logger.setLevel('OFF');
	}
};

Log4JSAdapter.prototype.supportsSlf4j = true;

Log4JSAdapter.prototype.error = function(string){
	this.logger.error(string);

}
Log4JSAdapter.prototype.errorm = function(marker, string){
	this.logger.error(string);	
}
Log4JSAdapter.prototype.warn = function(string){
	this.logger.warn(string);
}
Log4JSAdapter.prototype.warnm = function(marker, string){
	this.logger.warn(string);
}
Log4JSAdapter.prototype.info = function(string){
	this.logger.info(string);
}
Log4JSAdapter.prototype.infom = function(marker, string){
	this.logger.info(string);
}
Log4JSAdapter.prototype.debug = function(string){
	this.logger.debug(string);
}
Log4JSAdapter.prototype.debugm = function(string){
	this.logger.debug(string);
}
Log4JSAdapter.prototype.trace = function(string){
	this.logger.trace(string);
}
Log4JSAdapter.prototype.tracem = function(string){
	this.logger.trace(string);
}

Log4JSAdapter.prototype.addAppender = function(appender, marker, level, options){
	log4js.addAppender(appender, marker);
}
Log4JSAdapter.prototype.detachAppender = function(name){

}
Log4JSAdapter.prototype.detachAndStopAllAppenders = function(){
	
}

module.exports.loggerFactory = function(level, name, options){
	return new Log4JSAdapter(level, name, options);
}