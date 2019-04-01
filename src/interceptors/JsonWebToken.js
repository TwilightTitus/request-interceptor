const JsonWebToken = function(aToken){
	this.rawToken = aToken;
	
	let fragments = aToken.split(".");
	if(fragments.length != 3)
		throw new Error("No valid json web token! - \""+aToken + "\"");
	
	this.header = JSON.parse(atob(fragments[0]));
	this.body = JSON.parse(atob(fragments[1]));
	this.signature = fragments[2];
	
};

export default JsonWebToken; 