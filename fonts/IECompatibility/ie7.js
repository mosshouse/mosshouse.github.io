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
		el.innerHTML = '<span style="font-family: \'sosa\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-uni34sosa': '&#x34;',
		'icon-uni35sosa': '&#x35;',
		'icon-uni56sosa': '&#x56;',
		'icon-uni57sosa': '&#x57;',
		'icon-uni58sosa': '&#x58;',
		'icon-uni59sosa': '&#x59;',
		'icon-uni5Bsosa': '&#x5b;',
		'icon-uni5Csosa': '&#x5c;',
		'icon-uni5Dsosa': '&#x5d;',
		'icon-uni69sosa': '&#x69;',
		'icon-uni6Esosa': '&#x6e;',
		'icon-uni6Fsosa': '&#x6f;',
		'icon-uniC9sosa': '&#xc9;',
		'icon-uni120sosa': '&#x120;',
		'icon-uni127sosa': '&#x127;',
		'icon-uni20ACsosa': '&#x20ac;',
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
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
