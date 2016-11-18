/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'flaticon_painter\'">' + entity + '</span>' + html;
	}
	var icons = {
		'paintroller1': '&#xe60a;',
		'business133': '&#xe600;',
		'male108': '&#xe601;',
		'paint25': '&#xe602;',
		'paint32': '&#xe603;',
		'paint62': '&#xe604;',
		'paint100': '&#xe605;',
		'painter5': '&#xe606;',
		'painting46': '&#xe607;',
		'painting59': '&#xe608;',
		'roller-brush': '&#xe609;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
