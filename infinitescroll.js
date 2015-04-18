var InfiniteScroll = (function(document) {
	"use strict";

	function InfiniteScroll(element, callback) {
		var _out = this._out = document.createElement('div'),
			_in = this._in = document.createElement('div'),
			_outStyle = _out.style,
			_inStyle = _in.style;

		callback = callback || function() {};

		_outStyle.height = element.clientHeight + 'px';
		_outStyle.widtht = element.clientWidth + 'px';
		_outStyle.overflow = 'auto';

		//setup style of inner element
		_inStyle.minHeight = '1000%';
		_inStyle.minWidth = '1000%';
		_inStyle['-webkit-transition'] = '1s';
		_inStyle.transition = '1s';

		_out.onscroll = function() {
			var totalHeight = _out.scrollTop + _out.clientHeight,
				totalWidth = _out.scrollLeft + _out.clientWidth;

			if (totalHeight >= (_in.clientHeight - (_out.clientHeight / 2))) {
				_inStyle.height = (_in.clientHeight + (_out.clientHeight * 2)) + 'px';
			}

			if (totalWidth >= (_in.clientWidth - (_out.clientWidth / 2))) {
				_inStyle.width = (_in.clientWidth + (_out.clientWidth * 2)) + 'px';
			}

			callback();
		};

		_out.appendChild(_in);
	}

	InfiniteScroll.prototype = {

	};

	return InfiniteScroll;
})(document);