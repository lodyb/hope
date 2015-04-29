function debug(text, type){
	var pill_theme = "";
	var text_theme = "background:none;color:#333;font-size:10pt"
	if(type === undefined){
		type = "msg";
	}
	if(type == "msg"){
		pill_theme = "background:#def;color:#556;border:1pt solid #556;padding:0pt 6pt;border-radius:16pt;font-size:10pt";
	} else if (type == "success"){
		pill_theme = "background:#cfc;color:#363;border:1pt solid #363;padding:0pt 6pt;border-radius:16pt;font-size:10pt";

	} else if (type == "warning"){
		pill_theme = "background:#ffeecc;color:#888833;border:1pt solid #888833;padding:0pt 6pt;border-radius:16pt;font-size:10pt";

	} else if (type == "error"){
		pill_theme = "background:#fcc;color:#ff0033;border:1pt solid #ff0033;padding:0pt 6pt;border-radius:16pt;font-size:10pt";

	} else {

	}
	console.log("%c%s%c",pill_theme,type,text_theme,text);
}
+function(){
	debug('DOM ready', 'success');
	var game = document.getElementsByTagName('main')[0];
	debug(game);
}()