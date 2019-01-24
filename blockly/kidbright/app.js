function getCookie(c_name) {
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + '=');
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(';', c_start);
			if (c_end == -1) {
				c_end = document.cookie.length;
			}
			return unescape(document.cookie.substring(c_start, c_end));
		}
	}

	return null;
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function renderToolbox(res) {
	// construct the toolbox XML.
	var toolboxText = document.getElementById('toolbox').outerHTML;
	var toolboxXml = Blockly.Xml.textToDom(toolboxText);

//	console.log(res);

	// check plug-ins category
	if (res.categories.length > 0) {
		var plugin_str = 'Plugins';
		if (getCookie('lang') == 'th') {
			plugin_str = 'ปลั๊กอิน';
		}

		// create sperator node
		var sep_node = $(document.createElement('sep'));
		// create plugins xml node
		var plugin_node = $(document.createElement('category')).attr({
			name: plugin_str,
			colour: '290'
		});

		// add category nodes
		for (var i = 0; i < res.categories.length; i++) {
			if (res.categories[i].category != null) {
				var cat_name = res.categories[i].category.name.en;
				if (getCookie('lang') == 'th') {
					cat_name = res.categories[i].category.name.th;
				}

				var category_node = $(document.createElement('category')).attr({
					name: cat_name,
					colour: res.categories[i].category.color
				});
				// add block nodes
				for (var j = 0; j < res.categories[i].plugins.length; j++) {
					var driver = res.categories[i].plugins[j];
					for (var k = 0; k < driver.blocks.length; k++) {
						$(category_node).append($(document.createElement('block')).attr({
							type: driver.blocks[k]
						}));
					}
				}
				$(plugin_node).append(category_node);
			}
			else {
				console.error('plugins error: file ' + res.categories[i].directory + '.json not found!');
			}
		}

		// append plug-ins xml node
		$(toolboxXml).append(sep_node);
		$(toolboxXml).append(plugin_node);
	}

	// blockly render
	var workspace = Blockly.inject('blockly', {
		//collapse: false,
		grid: {
			spacing: 25,
			length: 3,
			colour: '#ccc',
			snap: true
		},
		media: 'blockly/media/',
		//rtl: rtl,
		toolbox: toolboxXml,
		zoom: {
			controls: true,
			wheel: true,
			startScale: 1,
			maxScale: 2,
			minScale: 0.3,
			scaleSpeed: 1.2
			//scrollbars: false
		}
	});

	var text = localStorage.getItem('KidBrightLastWorkspace');
	if (text != null) {
		var xml = Blockly.Xml.textToDom(text);
		Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace);
	}
}

$(document).ready(function() {
	// set default language
	if (getCookie('lang') == null) {
		setCookie('lang', 'en', 365);
	}

	var onresize = function(e) {
		var div;
		if (div = document.getElementById('blockly')) {
			div.style.width = (div.parentNode.offsetWidth - 2) + 'px';
			div.style.height = (div.parentNode.offsetHeight - 2) + 'px';
		}
	}
	onresize();
	window.addEventListener('resize', onresize);
	window.addEventListener('unload', function() {
		saveWorkspaceLocal();
	}, false);

	// override prompt function, fixed electron dialog problem
	Blockly.prompt = function(message, defaultValue, callback) {
		$('.modal-prompt #prompt-btn-ok').text(LANG_OK);
		$('.modal-prompt #prompt-btn-cancel').text(LANG_CANCEL);

		$('.modal-prompt .modal-header h4').text(message);
		$('.modal-prompt #prompt-text').val(defaultValue);
		$('.modal-prompt #prompt-btn-ok').unbind('click').click(function() {
			var new_val = $('#prompt-text').val();
			if ((new_val) && (new_val != '')) {
				callback(new_val);
			} else {
				callback(null);
			}
			$('.modal-prompt').modal('hide');
		});
		$('.modal-prompt').modal('show');
	};

	// check additional plug-ins toolboxs
	$.ajax({
		type: 'POST',
		url: '/plugins',
		error: function(e) {
			renderToolbox();
		},
		success: function(res) {
			renderToolbox(res);
		}
	});
});
