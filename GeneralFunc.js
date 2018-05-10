function GeneralFunc(obj){	
	this.value=obj;
	this.isArray=GeneralFunc.prototype.isArrayFunc.call(this);
	this.isString=GeneralFunc.prototype.isStringFunc.call(this);
	this.isObject=GeneralFunc.prototype.isObjectFunc.call(this);
	this.isNull=GeneralFunc.prototype.isNullFunc.call(this);
	this.isUndefined=GeneralFunc.prototype.isUndefinedFunc.call(this);
	this.isNumber=GeneralFunc.prototype.isNumberFunc.call(this);
	this.isBool=GeneralFunc.prototype.isBoolFunc.call(this);
	this.isEmpty=GeneralFunc.prototype.isEmptyFunc.call(this);
}

GeneralFunc.prototype={
	isArrayFunc:function(){
		return	Object.prototype.toString.call(this.value)==='[object Array]';
	},
	isStringFunc:function(){
		return	Object.prototype.toString.call(this.value)==='[object String]';
	},
	isObjectFunc:function(){
		return	Object.prototype.toString.call(this.value)==='[object Object]';
	},
	isNumberFunc:function(){
		return	Object.prototype.toString.call(this.value)==='[object Number]';
	},
	isBoolFunc:function(){
		return	Object.prototype.toString.call(this.value)==='[object Boolean]';
	},
	isNullFunc:function(){
		return	this.value===null;
	},
	isUndefinedFunc:function(){
		return	this.value===undefined;
	},
	isEmptyFunc:function(){
		if(this.isNull || this.isUndefined){
			return true;			
		}
		if(this.isString && this.value==='')
		{
			return true;
		}
		if(this.isNumber && this.value===NaN)
		{
			return true;
		}	
	    return false;
	},
}