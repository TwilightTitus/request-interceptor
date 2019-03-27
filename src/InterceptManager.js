const InterceptManager = window.InterceptManager = {	
	
	handles : {},	
	doIntercept : function(aData, aRequest, aCallback){
		console.log("doIntercept (", arguments, ")");
		return aCallback();
	},
	addInterception : function(aFilter, aHandle){
		
	}
};
export default InterceptManager; 


