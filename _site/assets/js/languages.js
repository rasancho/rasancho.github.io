(function(){	
	var LanguageManager = function(){
		this.Select = function(culture){
			if(!window.LanguageEntries[culture])
				return;
			
			
			var elements = $("[lang-key]");
			$.each(elements, function(idx,item){
				var key = item.getAttribute('lang-key');
				var text = window.LanguageEntries[culture][key];
				if(text)
					item.innerHTML = window.LanguageEntries[culture][key];
			});
		};
		return this;
	};
	
	window.Languages = LanguageManager();
})();