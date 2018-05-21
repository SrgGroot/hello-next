'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\hello-next\\pages\\post.js?entry';

exports.default = function (props) {
  return _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('h1', {
    'data-jsx': 1238997497,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, props.url.query.title), _react2.default.createElement('div', { className: 'markdown', 'data-jsx': 1238997497,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_reactMarkdown2.default, { source: '\nThis is our blog post.\nYes. We can have a [link](/link).\nAnd we can have a title as well.\n\n### This is a title\n\nAnd here\'s the content.\n     ', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: 1238997497,
    css: '.markdown{font-family:\'Arial\'}.markdown a{text-decoration:none;color:blue}.markdown a:hover{opacity:0.6}.markdown h3{margin:0;padding:0;text-transform:uppercase}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb3N0LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCc0IsQUFHNEIsQUFJQyxBQUtULEFBSUgsU0FDQyxHQUpaLE9BSzJCLENBZDNCLENBSWEsV0FDYixZQVVBIiwiZmlsZSI6InBhZ2VzXFxwb3N0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L1Byb2plY3RzL2hlbGxvLW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXHJcbmltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxyXG4gIDxMYXlvdXQ+XHJcbiAgIDxoMT57cHJvcHMudXJsLnF1ZXJ5LnRpdGxlfTwvaDE+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2Rvd25cIj5cclxuICAgICA8TWFya2Rvd24gc291cmNlPXtgXHJcblRoaXMgaXMgb3VyIGJsb2cgcG9zdC5cclxuWWVzLiBXZSBjYW4gaGF2ZSBhIFtsaW5rXSgvbGluaykuXHJcbkFuZCB3ZSBjYW4gaGF2ZSBhIHRpdGxlIGFzIHdlbGwuXHJcblxyXG4jIyMgVGhpcyBpcyBhIHRpdGxlXHJcblxyXG5BbmQgaGVyZSdzIHRoZSBjb250ZW50LlxyXG4gICAgIGB9Lz5cclxuICAgPC9kaXY+XHJcbiAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgLm1hcmtkb3duIHtcclxuICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xyXG4gICAgIH1cclxuXHJcbiAgICAgLm1hcmtkb3duIGEge1xyXG4gICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgfVxyXG5cclxuICAgICAubWFya2Rvd24gYTpob3ZlciB7XHJcbiAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgfVxyXG5cclxuICAgICAubWFya2Rvd24gaDMge1xyXG4gICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgcGFkZGluZzogMDtcclxuICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgfVxyXG4gIGB9PC9zdHlsZT5cclxuICA8L0xheW91dD5cclxuKSJdfQ== */\n/*@ sourceURL=pages\\post.js?entry */'
  }));
};