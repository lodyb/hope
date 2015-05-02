
/**
 * pretty print to console
 */
function debug(text, type) {
	var pill_theme = "";
	var text_theme = "background:none;color:#333;font-size:10pt";

	/* default parameters */
	if (type === undefined) {
		type = "msg";
	}

	if (type == "msg") {
		pill_theme = "background:#478;color:#fff;border:1pt solid #fff;" +
				"padding:0pt 6pt;border-radius:16pt;font-size:10pt";
	}
	else if (type == "success") {
		pill_theme = "background:#495;color:#fff;border:1pt solid #fff;" +
				"padding:0pt 6pt;border-radius:16pt;font-size:10pt";
	}
	else if (type == "warning") {
		pill_theme = "background:#995588;color:#fff;" +
				"border:1pt solid #fff;padding:0pt 6pt;" +
				"border-radius:16pt;font-size:10pt";
	}
	else if (type == "error") {
		pill_theme = "background:#ff0033;color:#fff;" +
				"border:1pt solid #fff;padding:0pt 6pt;" +
				"border-radius:16pt;font-size:10pt";
	}
	else { }

	console.log("%c%s%c", pill_theme, type, text_theme,text);
}
