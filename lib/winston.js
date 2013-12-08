var WinstonAdapter = function(level){
	this.logger = require('winston');
	this.level = level;
};

WinstonAdapter.prototype.supportsSlf4j = true;

WinstonAdapter.prototype.error = function(string){
	if(this.level >= 1)
	{
		this.logger.error(string);
	}
}
WinstonAdapter.prototype.errorm = function(marker, string){
	if(this.level >= 1)
	{
		this.logger.error(string);
	}
}
WinstonAdapter.prototype.warn = function(string){
	if(this.level >= 2)
	{
		this.logger.warn(string);
	}
}
WinstonAdapter.prototype.warnm = function(marker, string){
	if(this.level >= 2)
	{
		this.logger.warn(string);
	}
}
WinstonAdapter.prototype.info = function(string){
	if(this.level >= 3)
	{
		this.logger.info(string);
	}
}
WinstonAdapter.prototype.infom = function(marker, string){
	if(this.level >= 3)
	{
		this.logger.info(string);
	}
}
WinstonAdapter.prototype.debug = function(string){
	if(this.level >= 4)
	{
		this.logger.info(string);
	}
}
WinstonAdapter.prototype.debugm = function(string){
	if(this.level >= 4)
	{
		this.logger.info(string);
	}
}
WinstonAdapter.prototype.trace = function(string){
	if(this.level >= 5)
	{
		this.logger.info(string);
	}
}
WinstonAdapter.prototype.tracem = function(string){
	if(this.level >= 5)
	{
		this.logger.info(string);
	}
}

WinstonAdapter.prototype.addAppender = function(appender, marker, level, options){
	this.logger.add(appender, options);
}
WinstonAdapter.prototype.detachAppender = function(name){

}
WinstonAdapter.prototype.detachAndStopAllAppenders = function(){
	
}

module.exports.loggerFactory = function(level, name, options){
	return new WinstonAdapter(level, name, options);
}