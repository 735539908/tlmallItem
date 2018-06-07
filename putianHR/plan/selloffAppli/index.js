(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control37_MvS3h7: function (elem) {},
    doAction_uiControl37_tWrnRr: function (data, elem) {
      var type = data.eventType;if (type == "back") {
        ysp.appMain.back();
      }
    },
    getTemplate_uiControl37_tWrnRr: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render () {\n    var _this=this;\n    return(\n      <div>\n      \t<CustomHeader \n           data={{centerText:\"\u9500\u5047\u7533\u8BF7\",rightText:\"\"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false}\n        \t />\n      \t<div style={{height:\"2.7rem\"}}></div>\n      </div>\n      )\n    }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(_yspCustomComponents.CustomHeader, {\n          data: { centerText: \"\u9500\u5047\u7533\u8BF7\", rightText: \"\" },\n          backIsShow: true,\n          back: function back() {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: 'back'\n              });\n            }\n          },\n          filterIsShow: false\n        }),\n        React.createElement('div', { style: { height: \"2.7rem\" } })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control38_uf5CpS: function (elem) {
      if (elem) {
        return ysp.customHelper.tableData(elem);
      } else {
        return;
      }
    },
    doAction_uiControl38_B0mpHW: function (data, elem) {
      if (data.eventType == "checkClick") {
        var d = data.dataCustom;var tr = elem.querySelectorAll("input[type='checkbox']")[d];tr.click();tr.dispatchEvent(new Event("click"));
      }
    },
    getTemplate_uiControl38_B0mpHW: function () {
      var selfTemplate = "import {Component} from 'react'; \nexport default class extends Component{\n  checkClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.dataset.index,\n        eventType:\"checkClick\"\n      })\n    }\n  }\n  render(){\n    var data=this.props.customData;\n    var _this=this;\n    return(<div className=\"ysp-selloff\">\n      {data && data.content && data.content.map(function(item,index){\n          return(\n            <div className=\"ysp-selloff-li\">\n              {item[1].select==\"true\"?\n              <label><input type=\"checkbox\" name=\"checkall\" onClick={_this.checkClick.bind(_this)} data-index={index} checked/><i></i></label>\n                :\n              <label><input type=\"checkbox\" name=\"checkall\" onClick={_this.checkClick.bind(_this)} data-index={index}/><i></i></label>\n                }\n              <div className=\"selloff-li-con\"><p>{item[2].text}</p><p>\u4F11\u5047\u65F6\u95F4\uFF1A{item[4].text}-{item[5].text}</p></div>\n              <div className=\"selloff-li-time\">\u4F11\u5047\u65F6\u95F4\uFF1A{item[6].text}{item[7].text}</div>\n              \n            </div>)\n        })}\n      </div>)\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"checkClick\",\n    value: function checkClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.dataset.index,\n          eventType: \"checkClick\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        \"div\",\n        { className: \"ysp-selloff\" },\n        data && data.content && data.content.map(function (item, index) {\n          return React.createElement(\n            \"div\",\n            { className: \"ysp-selloff-li\" },\n            item[1].select == \"true\" ? React.createElement(\n              \"label\",\n              null,\n              React.createElement(\"input\", { type: \"checkbox\", name: \"checkall\", onClick: _this.checkClick.bind(_this), \"data-index\": index, checked: true }),\n              React.createElement(\"i\", null)\n            ) : React.createElement(\n              \"label\",\n              null,\n              React.createElement(\"input\", { type: \"checkbox\", name: \"checkall\", onClick: _this.checkClick.bind(_this), \"data-index\": index }),\n              React.createElement(\"i\", null)\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"selloff-li-con\" },\n              React.createElement(\n                \"p\",\n                null,\n                item[2].text\n              ),\n              React.createElement(\n                \"p\",\n                null,\n                \"\\u4F11\\u5047\\u65F6\\u95F4\\uFF1A\",\n                item[4].text,\n                \"-\",\n                item[5].text\n              )\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"selloff-li-time\" },\n              \"\\u4F11\\u5047\\u65F6\\u95F4\\uFF1A\",\n              item[6].text,\n              item[7].text\n            )\n          );\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },

    getData_control39_r1kE9L: function (elem) {},
    doAction_uiControl39_7ntMFo: function (data, elem) {
      if (data.eventType == "checkclick") {
        var d = data.dataCustom;var btn1 = elem.querySelector("#win4divHPS_AWE_WRK_SELECT_ALL").querySelector("a");var btn2 = elem.querySelector("#win4divHPS_AWE_WRK_DESELECT_ALL").querySelector("a"); // btn1.click();
        // btn2.click();
        if (this.checked == true) {
          alert(2);btn2.click();
        } else {
          alert(1);btn1.click();
        }
      }
    },
    getTemplate_uiControl39_7ntMFo: function () {
      var selfTemplate = "\nimport {Component} from 'react';\n\nexport default class extends React.Component{\n  checkClick(e) {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"checkclick\"\n      })\n    }\n  }\n\n  render(){\n    var data = this.props.data.customData;\n    var _this = this;\n    return (\n      <div className=\"ysp-selloff-sel\">\n        <label><AInput type=\"checkbox\" onClick={_this.checkClick.bind(_this)}/>\u5168\u9009</label>\n        <span className=\"sel-reason\">\u63D0\u4EA4\u539F\u56E0</span>\n      </div>\n    )\n  }\n};";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"checkClick\",\n    value: function checkClick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"checkclick\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.data.customData;\n      var _this = this;\n      return React.createElement(\n        \"div\",\n        { className: \"ysp-selloff-sel\" },\n        React.createElement(\n          \"label\",\n          null,\n          React.createElement(AInput, { type: \"checkbox\", onClick: _this.checkClick.bind(_this) }),\n          \"\\u5168\\u9009\"\n        ),\n        React.createElement(\n          \"span\",\n          { className: \"sel-reason\" },\n          \"\\u63D0\\u4EA4\\u539F\\u56E0\"\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;";
    }
  }, "selloffAppli");
})(window, ysp);