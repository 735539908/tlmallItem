'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control12_sVQ6Ze: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl16_fsWugq: function (data, elem) {
      if (data.eventType == 'AndroidBack') {
        ysp.customHelper.AndroidDocument = elem.ownerDocument;ysp.customHelper.AndroidName = '客户详情';ysp.customHelper.AndroidBackModel = 'clientInfo';ysp.customHelper.AndroidBackFlag = 'Client&Store';
      }if (data.eventType === 'back') {
        var doc = elem.ownerDocument;var targetEl = doc.querySelector('#clientMenu');ysp.customHelper.toPlan(targetEl, "客户详情", "clientInfo");
      }
    },
    getTemplate_uiControl16_fsWugq: function getTemplate_uiControl16_fsWugq() {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   componentDidMount(){\n    var _this = this;\n \xA0 \xA0const {customHandler} = _this.props;\n    customHandler({\n      eventType:'AndroidBack'\n    })\n  } \n   render = () => {\n       let _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:\"\u9500\u552E\u8FD4\u5229\",rightText:\"\u7B5B\u9009\"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info(\"header filter ...\")}}/>\n       );\n   }\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: "\u9500\u552E\u8FD4\u5229", rightText: "\u7B5B\u9009" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'back\'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info("header filter ...");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var _this = this;\n      var customHandler = _this.props.customHandler;\n\n      customHandler({\n        eventType: \'AndroidBack\'\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control19_nyNZgF: function getData_control19_nyNZgF(elem) {
      if (!elem) {
        return [];
      }if (elem) {
        var data = ysp.customHelper.getTableData(elem, ['返利编码', '返利状态', '生效日期', '失效日期', '返利金额', '事业部']);return data;
      }return undefined;
    },
    doAction_uiControl23_P63tW3: function doAction_uiControl23_P63tW3(data, elem) {},

    getData_control19_4hyTIt: function (elem) {
      if (!elem) {
        return [];
      }if (elem) {
        var data = ysp.customHelper.getTableData(elem, ['返利编码', '事业部', '生效日期', '失效日期', '返利金额', '可用金额', '返利状态']);return data;
      }
    },
    doAction_uiControl23_TGyKQG: function (data, elem) {},
    getTemplate_uiControl23_TGyKQG: function getTemplate_uiControl23_TGyKQG() {
      var selfTemplate = 'import {Component} from \'react\'; \nimport {CustomHeader} from \'ysp-custom-components\';\nexport default class extends Component{\n   \n   render = () => {\n       var content = this.props.customData && this.props.customData.content || [];\n     \t if(content.length == 0){\n       \t return(\n           <div className="ysp-no-datas" style={{height:\'75vh\'}}>\n            <div></div>\n            <div>\u6682\u65F6\u6CA1\u6709\u6570\u636E~</div>  \n          </div>);\n       }\n       return (\n         <div className=\'ysp-sales-rebate-tot\'>\n            {content.map((item,i)=>{\n              return(\n                <section className="ysp-sales-rebate">\n                  <header>\n                    <span className=\'ysp-normal-large-font\'>{item[0]}</span>\n                    <span>\n                      <i className=\'ysp-normal-font\'>\u8FD4\u5229\u72B6\u6001</i><i className=\'ysp-normal-font\' style={{color: item[6].indexOf(\'\u786E\u8BA4\') != -1 ? \'#428EE0\' : item[6].indexOf(\'\u672A\u786E\u8BA4\') != -1 ? \'#ef472e\' : \'#aaa\'}}>{item[6]}</i>\n                    </span>\n                  </header>\n                  <div>\n                    <span>\n                      <i className=\'ysp-normal-font\'>\u4E8B\u4E1A\u90E8</i>\n                      <i className=\'ysp-normal-font\'>{item[1]}</i>\n                    </span>\n                  </div>\n                  <div>\n                  \t<span>\n                      <i className=\'ysp-normal-font\'>\u53EF\u7528\u65E5\u671F</i>\n                      <u className={\'ysp-sales-rebate-color ysp-normal-font\'}>{item[4].substring(0,10)}\u81F3</u>\n                      <u className={\'ysp-sales-rebate-sure-red ysp-normal-font\'}>{item[5].substring(0,10)}</u>\n                    </span>\n                  </div>\n                  <div className="ysp-sales-rebate-tot-next">\n                    <div>\n                      <span>\u8FD4\u5229\u91D1\u989D(\u5143)</span>\n                      <span>{item[2]}</span>\n                    </div>\n                    <div>\n                      <span>\u53EF\u7528\u91D1\u989D(\u5143)</span>\n                      <span>{item[3]}</span>\n                    </div>\n                  </div>\n                  \n                </section>\n              );\n            })}\n          </div> \n       );\n   }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      var content = _this.props.customData && _this.props.customData.content || [];\n      if (content.length == 0) {\n        return React.createElement(\n          \'div\',\n          { className: \'ysp-no-datas\', style: { height: \'75vh\' } },\n          React.createElement(\'div\', null),\n          React.createElement(\n            \'div\',\n            null,\n            \'\\u6682\\u65F6\\u6CA1\\u6709\\u6570\\u636E~\'\n          )\n        );\n      }\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-sales-rebate-tot\' },\n        content.map(function (item, i) {\n          return React.createElement(\n            \'section\',\n            { className: \'ysp-sales-rebate\' },\n            React.createElement(\n              \'header\',\n              null,\n              React.createElement(\n                \'span\',\n                { className: \'ysp-normal-large-font\' },\n                item[0]\n              ),\n              React.createElement(\n                \'span\',\n                null,\n                React.createElement(\n                  \'i\',\n                  { className: \'ysp-normal-font\' },\n                  \'\\u8FD4\\u5229\\u72B6\\u6001\'\n                ),\n                React.createElement(\n                  \'i\',\n                  { className: \'ysp-normal-font\', style: { color: item[6].indexOf(\'\u786E\u8BA4\') != -1 ? \'#428EE0\' : item[6].indexOf(\'\u672A\u786E\u8BA4\') != -1 ? \'#ef472e\' : \'#aaa\' } },\n                  item[6]\n                )\n              )\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'span\',\n                null,\n                React.createElement(\n                  \'i\',\n                  { className: \'ysp-normal-font\' },\n                  \'\\u4E8B\\u4E1A\\u90E8\'\n                ),\n                React.createElement(\n                  \'i\',\n                  { className: \'ysp-normal-font\' },\n                  item[1]\n                )\n              )\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'span\',\n                null,\n                React.createElement(\n                  \'i\',\n                  { className: \'ysp-normal-font\' },\n                  \'\\u53EF\\u7528\\u65E5\\u671F\'\n                ),\n                React.createElement(\n                  \'u\',\n                  { className: \'ysp-sales-rebate-color ysp-normal-font\' },\n                  item[4].substring(0, 10),\n                  \'\\u81F3\'\n                ),\n                React.createElement(\n                  \'u\',\n                  { className: \'ysp-sales-rebate-sure-red ysp-normal-font\' },\n                  item[5].substring(0, 10)\n                )\n              )\n            ),\n            React.createElement(\n              \'div\',\n              { className: \'ysp-sales-rebate-tot-next\' },\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  \'\\u8FD4\\u5229\\u91D1\\u989D(\\u5143)\'\n                ),\n                React.createElement(\n                  \'span\',\n                  null,\n                  item[2]\n                )\n              ),\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  \'\\u53EF\\u7528\\u91D1\\u989D(\\u5143)\'\n                ),\n                React.createElement(\n                  \'span\',\n                  null,\n                  item[3]\n                )\n              )\n            )\n          );\n        })\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control195_XJnIGc: function (elem) {
      if (!elem) {
        return;
      }if (elem && elem.querySelectorAll("span").length == 4) {
        var data = [];data.push(elem.querySelectorAll("span")[1].textContent);data.push(elem.querySelectorAll("span")[3].textContent);return data;
      }
    },
    doAction_uiControl192_TSTZuu: function (data, elem) {},
    getTemplate_uiControl192_TSTZuu: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData || [];\n    return (\n      <div className="ysp_saleRebate_top">\n        <div className="ysp_rebateTotal">\n        \t<div className="ysp_num">{data[0]}</div>\n          <div className="ysp_word">\u8FD4\u5229\u603B\u989D</div>\n        </div>\n        <div className="ysp_rebateTotal">\n        \t<div className="ysp_num">{data[1]}</div>\n          <div className="ysp_word">\u53EF\u7528\u603B\u989D</div>\n        </div>\n        <hr style={{background:"#f2f2f2",height:"10px"}}/>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.customData || [];\n    return React.createElement(\n      "div",\n      { className: "ysp_saleRebate_top" },\n      React.createElement(\n        "div",\n        { className: "ysp_rebateTotal" },\n        React.createElement(\n          "div",\n          { className: "ysp_num" },\n          data[0]\n        ),\n        React.createElement(\n          "div",\n          { className: "ysp_word" },\n          "\\u8FD4\\u5229\\u603B\\u989D"\n        )\n      ),\n      React.createElement(\n        "div",\n        { className: "ysp_rebateTotal" },\n        React.createElement(\n          "div",\n          { className: "ysp_num" },\n          data[1]\n        ),\n        React.createElement(\n          "div",\n          { className: "ysp_word" },\n          "\\u53EF\\u7528\\u603B\\u989D"\n        )\n      ),\n      React.createElement("hr", { style: { background: "#f2f2f2", height: "10px" } })\n    );\n  }\n});';
    }
  });
})(window, ysp);