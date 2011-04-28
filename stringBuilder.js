function stringBuilder() {
	this.buffer = [];
}

stringBuilder.prototype = {
	cat: function(str) {
		this.buffer.push(str);
		
		return this;
	},
	catIf: function(str, cond) {
		var args = arguments;
		
		if (arguments[arguments.length-1]) {
			for (var i = 0; i < arguments.length - 1; i++) {
				this.cat(arguments[i]);
			}
		}
			
		return this;
	},
	rep: function(str, count) {
		for (var i = 0; i < count; i++)
			this.cat(str);
		
		return this;
	},
	string: function() {
		return this.buffer.join('');
	}
};