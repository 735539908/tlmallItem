(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control239_raN8C4: function (elem) {},
    doAction_uiControl233_u6mByb: function (data, elem) {
      if (data.eventType == 'AndroidBack') {
        ysp.customHelper.AndroidDocument = elem.ownerDocument;ysp.customHelper.AndroidName = '门店详情';ysp.customHelper.AndroidBackModel = 'storeDetails';ysp.customHelper.AndroidBackFlag = 'Client&Store';
      }if (data.eventType === 'back') {
        var doc = elem.ownerDocument;var targetEl = doc.querySelector('#clientMenu');ysp.customHelper.toPlan(targetEl, "门店详情", "storeDetails");
      }
    },
    getTemplate_uiControl233_u6mByb: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   componentDidMount(){\n    var _this = this;\n \xA0 \xA0const {customHandler} = _this.props;\n    customHandler({\n      eventType:'AndroidBack'\n    })\n  }\n   render = () => {\n       let _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:\"\u5E97\u5956\u4FE1\u606F\",rightText:\"\u7B5B\u9009\"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info(\"header filter ...\")}}/>\n       );\n   }\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: "\u5E97\u5956\u4FE1\u606F", rightText: "\u7B5B\u9009" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'back\'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info("header filter ...");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var _this = this;\n      var customHandler = _this.props.customHandler;\n\n      customHandler({\n        eventType: \'AndroidBack\'\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control118_52d0F8: function (elem) {
      if (!elem) {
        return [];
      }var data = { dataContent: [], dataLoading: [] };var content = ysp.customHelper.getTableData(elem, ["年度", "月度", "项目", "机型", "店员编号", "店员姓名", "店奖兑付销量", "店奖兑付金额"]);data.dataContent.push(content);var loading = ysp.customHelper.tipMsg.getLoading();data.dataLoading.push(loading);return data;
    },
    doAction_uiControl115_J6htvF: function (data, elem) {},
    getTemplate_uiControl115_J6htvF: function () {
      var selfTemplate = 'import {\n  Component\n} from \'react\';\nimport {\n  CustomHeader\n} from \'ysp-custom-components\';\nexport default class extends Component {\n  render = () => {\n    var  _this = this;\n    var data = (this.props.customData && this.props.customData.dataContent && this.props.customData.dataContent[0].content) || [];\n    var dataLoading = (this.props.customData && this.props.customData.dataLoading[0])\n    if (data.length == 0 && dataLoading == null) {\n      return (<div className="ysp-no-data">\n          \t\t\t<div></div>\n          \t\t\t<div>\u6682\u65F6\u6CA1\u6709\u6570\u636E~</div>\n        \t\t\t</div>);\n    }\n    return (\n      <div className="ysp-award-message-wrapper">\n         {data.map((item,index)=>{\n             return (\n                <div className="ysp-award-message-content-wrapper">\n                 <div>\n                   <div>{item[2]}</div>\n                   <div>{item[0]}-{item[1]}</div>\n                 </div>\n                 <div>{item[3]}</div>\n                 <div>\n                   <div>\n                     <span>\u5E97\u5458\u7F16\u53F7:</span>\n                     <span>{item[4]}</span>\n                   </div>\n                   <div>\n                     <span>\u5E97\u5458\u59D3\u540D:</span>\n                     <span>{item[5]}</span>\n                   </div>\n                 </div>\n                 <div>\n                   <div>\n                     <span>\u5E97\u5956\u5151\u4ED8\u9500\u91CF:</span>\n                     <span>{item[6]}</span>\n                   </div>\n                   <div>\n                     <span>\u5E97\u5956\u5151\u4ED8\u91D1\u989D:</span>\n                     <span>{item[7]}</span>\n                   </div>\n                 </div>\n                </div>\n             );\n           }) \n         }  \n    </div>\n    );\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      var data = _this2.props.customData && _this2.props.customData.dataContent && _this2.props.customData.dataContent[0].content || [];\n      var dataLoading = _this2.props.customData && _this2.props.customData.dataLoading[0];\n      if (data.length == 0 && dataLoading == null) {\n        return React.createElement(\n          \'div\',\n          { className: \'ysp-no-data\' },\n          React.createElement(\'div\', null),\n          React.createElement(\n            \'div\',\n            null,\n            \'\\u6682\\u65F6\\u6CA1\\u6709\\u6570\\u636E~\'\n          )\n        );\n      }\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-award-message-wrapper\' },\n        data.map(function (item, index) {\n          return React.createElement(\n            \'div\',\n            { className: \'ysp-award-message-content-wrapper\' },\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'div\',\n                null,\n                item[2]\n              ),\n              React.createElement(\n                \'div\',\n                null,\n                item[0],\n                \'-\',\n                item[1]\n              )\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              item[3]\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  \'\\u5E97\\u5458\\u7F16\\u53F7:\'\n                ),\n                React.createElement(\n                  \'span\',\n                  null,\n                  item[4]\n                )\n              ),\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  \'\\u5E97\\u5458\\u59D3\\u540D:\'\n                ),\n                React.createElement(\n                  \'span\',\n                  null,\n                  item[5]\n                )\n              )\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  \'\\u5E97\\u5956\\u5151\\u4ED8\\u9500\\u91CF:\'\n                ),\n                React.createElement(\n                  \'span\',\n                  null,\n                  item[6]\n                )\n              ),\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  \'\\u5E97\\u5956\\u5151\\u4ED8\\u91D1\\u989D:\'\n                ),\n                React.createElement(\n                  \'span\',\n                  null,\n                  item[7]\n                )\n              )\n            )\n          );\n        })\n      );\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control154_TpitCg: function (elem) {
      if (!elem) return;var data = {};var item = [];data.prev = false;data.next = false;if (elem.querySelector('.skip')) {
        data.numberTaotal = (elem.querySelector('.skip').querySelectorAll('span')[0] && elem.querySelector('.skip').querySelectorAll('span')[0].textContent).replace(/[^0-9]/g, '');
      }var lis = elem.querySelectorAll('li');for (var i = 0; i < lis.length; i++) {
        var as = lis[i].querySelectorAll('a');for (var j = 0; j < as.length; j++) {
          switch (as[j].getAttribute('title')) {case 'Go to previous page':
              data.prev = true;break;case 'Go to next page':
              data.next = true;;break;}
        }
      }var liss = elem.querySelectorAll('li');for (var k = 0; k < liss.length; k++) {
        var active = liss[k].className;if (active == 'active') {
          data.currentPage = liss[k].querySelector('a').textContent;
        }
      }data.page = elem.ownerDocument.querySelector('#tbodyContent').textContent != '' ? true : false;return data;
    },
    doAction_uiControl150_TT1MuP: function (data, elem) {
      switch (data.eventType) {case 'prev':
          prevtitle(data.dataCustom);break;case 'next':
          prevtitle(data.dataCustom);break;case 'click':
          click(data.dataCustom);break;}function click(data) {
        var input = elem.ownerDocument.querySelector('.skip-num');input.value = data;input.blur();elem.ownerDocument.querySelector('#Page').querySelector('.skip_right_goto').querySelector('.skip-right-icon').click();
      }function prevtitle(data) {
        var lis = elem.querySelectorAll('li');for (var i = 0; i < lis.length; i++) {
          var as = lis[i].querySelectorAll('a');for (var j = 0; j < as.length; j++) {
            if (data == 'prev' && as[j].getAttribute('title') == 'Go to previous page') {
              as[j].click();
            } else if (data == 'next' && as[j].getAttribute('title') == 'Go to next page') {
              as[j].click();
            }
          }
        }
      }
    },
    getTemplate_uiControl150_TT1MuP: function () {
      var selfTemplate = 'import {\n  Component\n} from \'react\';\nimport {\n  Page\n} from \'ysp-custom-components\';\nexport default class extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      prevState:props.customData && props.customData.prev,\n      pageState:props.customData && props.customData.page,\n      nextState:props.customData && props.customData.next\n    }\n  }\n  componentWillReceiveProps(nextProps){\n    this.setState({\n      prevState: nextProps.customData && nextProps.customData.prev,\n      pageState: nextProps.customData && nextProps.customData.page,\n      nextState: nextProps.customData && nextProps.customData.next\n    })\n  }\n  render() {\n    let _this = this;\n    return (\n      <div>\n      \t<Page \n          pageState = {this.state.pageState}\n      \t  prevState = {this.state.prevState}\n          nextState = {this.state.nextState}\n        \tprev={(e)=>{\n          var handler = _this.props.customHandler;\n          if(handler){\n            handler({\n              data:"prev",\n              eventType:\'prev\'\n            })\n          }\n            e.target.parentElement.querySelector(\'.input-serch\').querySelector(\'input\').value = \'\';\n        }}\n          currentPage = {this.props.customData && this.props.customData.currentPage}\n        \tpageNumber={this.props.customData && this.props.customData.numberTaotal}\n        \tnext={(e)=>{\n          var handler = _this.props.customHandler;\n          if(handler){\n            handler({\n              data:"next",\n              eventType:"next"\n            })\n          }\n            e.target.previousSibling.querySelector(\'input\').value = \'\';\n        }}\n          Click={(e)=>{\n            var handler = this.props.customHandler;\n            var target = e.target;\n            // target.value = target.value.replace(/[^0-9]/g,\'\')\n            var value = target.parentElement.querySelector(\'input\').value;\n            value = value.replace(/[^0-9]/g,\'\');\n            if(handler){\n              handler({\n                data:value,\n                eventType:\'click\'\n              })\n            }\n          }}\n          Change={(e)=>{\n            var target = e.target;\n            target.value = target.value.replace(/[^0-9]/g,\'\');\n          }}\n      />\n    </div>\n    )\n  }\n}\n';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      prevState: props.customData && props.customData.prev,\n      pageState: props.customData && props.customData.page,\n      nextState: props.customData && props.customData.next\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'componentWillReceiveProps\',\n    value: function componentWillReceiveProps(nextProps) {\n      this.setState({\n        prevState: nextProps.customData && nextProps.customData.prev,\n        pageState: nextProps.customData && nextProps.customData.page,\n        nextState: nextProps.customData && nextProps.customData.next\n      });\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this3 = this;\n\n      var _this = this;\n      return React.createElement(\n        \'div\',\n        null,\n        React.createElement(_yspCustomComponents.Page, {\n          pageState: this.state.pageState,\n          prevState: this.state.prevState,\n          nextState: this.state.nextState,\n          prev: function prev(e) {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                data: "prev",\n                eventType: \'prev\'\n              });\n            }\n            e.target.parentElement.querySelector(\'.input-serch\').querySelector(\'input\').value = \'\';\n          },\n          currentPage: this.props.customData && this.props.customData.currentPage,\n          pageNumber: this.props.customData && this.props.customData.numberTaotal,\n          next: function next(e) {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                data: "next",\n                eventType: "next"\n              });\n            }\n            e.target.previousSibling.querySelector(\'input\').value = \'\';\n          },\n          Click: function Click(e) {\n            var handler = _this3.props.customHandler;\n            var target = e.target;\n            // target.value = target.value.replace(/[^0-9]/g,\'\')\n            var value = target.parentElement.querySelector(\'input\').value;\n            value = value.replace(/[^0-9]/g, \'\');\n            if (handler) {\n              handler({\n                data: value,\n                eventType: \'click\'\n              });\n            }\n          },\n          Change: function Change(e) {\n            var target = e.target;\n            target.value = target.value.replace(/[^0-9]/g, \'\');\n          }\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);