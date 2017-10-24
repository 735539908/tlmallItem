(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control18_V20gx9: function (elem) {
      if (!elem) {
        return [];
      }if (elem) {
        var data = { tabs: [], tabsNum: [],
          key: {} };var _tabs = elem.querySelectorAll('.mini-tabs-scrollCt .mini-tabs-header span');[].map.call(_tabs, function (item, i) {
          var key = item.parentElement.classList.contains('mini-tab-active');var num = item.parentElement.getAttribute("index");if (item.innerHTML != '流程监控') {
            if (key == true) {
              data.tabs.push(item.innerHTML);data.tabsNum.push(num);data.key = i;
            } else {
              data.tabs.push(item.innerHTML);data.tabsNum.push(num);
            }
          }
        });return data;
      }
    },
    doAction_uiControl18_h8MkBq: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;
        if (d[0] == 'ysp-tabs') {
          var _tab = elem.querySelectorAll('.mini-tabs-scrollCt .mini-tabs-header span');_tab[d[1]].click();
        }
      }
    },
    getTemplate_uiControl18_h8MkBq: function () {
      var selfTemplate = 'import {Tabs} from \'ysp-custom-components\';\nimport {Component} from \'react\';\nexport\tdefault\tclass\textends\tReact.Component{\n\tconstructor(props){\n    super(props);\n    this.state={\n      show:this.props.customData.key\n    }\n  }\n   componentDidMount(){\n    var outer=this.refs.outerWrapper.ownerDocument.querySelector(\'.view-wrapper\')\n    \n    setTimeout(function(){\n      outer.scrollTop=0\n    },500)\n  }\n  tabsClick(e){\n  \tvar handler=this.props.customHandler;\n    var e=e.target;\n    this.setState({\n      show: parseInt(e.dataset.id)\n    })\n     if(handler) {                                    \n       handler({\n         data:[e.className,e.dataset.id],\n         eventType:\'click\'                         \n       })\n     }\n  }\n  render(){\n    var data = this.props.customData || [];\n    if(data){\n    \treturn(\n      \t<div ref="outerWrapper">\n      \t\t<Tabs\tPassedCustomData={data}\ttabsClick={this.tabsClick.bind(this)}\tstateShow={this.state.show}\t/>\n      \t</div>\n    \t)    \n    }else{\n      return(<div style={{display:\'none\'}}></div>)\n    }\n  }\n} ';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.state = {\n      show: _this.props.customData.key\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var outer = this.refs.outerWrapper.ownerDocument.querySelector(\'.view-wrapper\');\n\n      setTimeout(function () {\n        outer.scrollTop = 0;\n      }, 500);\n    }\n  }, {\n    key: \'tabsClick\',\n    value: function tabsClick(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      this.setState({\n        show: parseInt(e.dataset.id)\n      });\n      if (handler) {\n        handler({\n          data: [e.className, e.dataset.id],\n          eventType: \'click\'\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          \'div\',\n          { ref: \'outerWrapper\' },\n          React.createElement(_yspCustomComponents.Tabs, { PassedCustomData: data, tabsClick: this.tabsClick.bind(this), stateShow: this.state.show })\n        );\n      } else {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control20_y0QdaI: function (elem) {
      if (!elem) {
        return;
      }if (elem.contentWindow && elem.contentWindow.document) {
        var data = { onePartTitle: [], onePartCont: [], twoPartTitle: [], twoPartCont: [] };var signOne = elem.contentWindow.document.querySelectorAll('.mini-panel-viewport');if (typeof signOne != 'undefined' && signOne.length > 0) {
          var key = elem.contentWindow.document.querySelectorAll('.mini-panel-viewport	.mini-grid-columns-view .mini-grid-table');var _key = elem.contentWindow.document.querySelectorAll('.mini-panel-viewport .mini-grid-rows-view .mini-grid-table');if (typeof key != 'undefined' && key.length > 0) {
            var sheep = elem.contentWindow.document.querySelectorAll('.mini-panel-viewport	.mini-grid-columns-view	.mini-grid-table	tr')[1].querySelectorAll('td');typeof sheep != 'undefined' && [].forEach.call(sheep, function (item, i) {
              var children = {};children.title = item.textContent.trim();data.twoPartTitle.push(children);
            });data.twoPartTitle.shift();
          }if (typeof _key != 'undefined' && _key.length > 0) {
            var sheep = elem.contentWindow.document.querySelectorAll('.mini-panel-viewport .mini-grid-rows-view .mini-grid-table	.mini-grid-row');typeof sheep != 'undefined' && [].forEach.call(sheep, function (item, i) {
              var bridge = item.querySelectorAll('td');var children = [];[].forEach.call(bridge, function (val, index) {
                children.push(val.textContent);
              });data.twoPartCont.push(children);data.twoPartCont[i].shift();
            });var _PagesMessage = elem.contentWindow.document.querySelector('.mini-pager-right').textContent;data.PagesMessage = _PagesMessage;var _PageNumber = elem.contentWindow.document.querySelector('.mini-pager-num').value;data.PageNumber = _PageNumber;var _PageCount = elem.contentWindow.document.querySelector('.mini-pager-pages').textContent;data.PageCount = _PageCount;
          }
        }return data;
      }
    },
    doAction_uiControl23_imbH0L: function (data, elem) {
      if (data.eventType == "click") {
        var d = data.dataCustom;switch (d) {case 'ysp-PagesMessage-leftBM-icon':
            var btnId = elem.contentWindow.document.querySelector('#mini-9');console.log(btnId);btnId.click();break;case 'ysp-PagesMessage-left-icon':
            var btnId = elem.contentWindow.document.querySelector('#mini-10');btnId.click();break;case 'ysp-PagesMessage-right-icon':
            var btnId = elem.contentWindow.document.querySelector('#mini-11');btnId.click();break;case 'ysp-PagesMessage-rightBM-icon':
            var btnId = elem.contentWindow.document.querySelector('#mini-12');btnId.click();break;}
      } else if (data.eventType == "selectChange") {
        elem.contentWindow.document.querySelector(".mini-buttonedit-input").focus();elem.contentWindow.document.querySelector(".mini-buttonedit-input").click();setTimeout(function () {
          elem.contentWindow.document.querySelector(".mini-listbox-items").querySelectorAll("tr")[data.dataCustom.ind].click();
        }, 50);
      } else if (data.eventType == "inputChange") {
        elem.contentWindow.document.querySelector(".mini-pager-num").value = data.dataCustom;elem.contentWindow.document.querySelector(".mini-pager-num").dispatchEvent(new Event('change'));
      }
    },
    getTemplate_uiControl23_imbH0L: function () {
      var selfTemplate = "import {Page} from 'ysp-custom-components';\nimport {Component} from 'react';\nexport default class extends React.Component{\n  pagesClick(e){\n    var\t_this=this;\n    var handler=_this.props.customHandler;\n    var target=e.target;\n     if(handler) {                                    \n       handler({\n         data:target.className,\n         eventType:'click'                         \n       })\n     }\n  }\n  selectChange(e){\n    var\t_this=this;\n    var handler=_this.props.customHandler;\n    var target=e.target;\n     if(handler) {                                    \n       handler({\n         data:{ind:target.selectedIndex,val:target.value},\n         eventType:'selectChange'                         \n       })\n     }\n  }\n  inputChange(e){\n    var\t_this=this;\n    var handler=_this.props.customHandler;\n    var target=e.target;\n     if(handler) {                                    \n       handler({\n         data:target.value,\n         eventType:'inputChange'                         \n       })\n     }\n  }\n  render(){\n    var data=this.props.customData\t||\t[];\n    var _this=this;\n    if(data){\n      return(\n        <div className='ysp-ExamineAndApprove'>\n          <div\tclassName='ysp-ExamineAndApprove-cardBody'>\n            {data.twoPartCont&&data.twoPartCont.length>0\t?\n              data.twoPartCont.map(function(item,index){\n              return(\n                <div className=\"ysp-ExamineAndApprove-card\">\n                  <div className='ysp-ExamineAndApprove-first'>\n                    <label className='ysp-OperationLink'>\n                      <i></i>\n                      <span>{data.twoPartTitle[0].title}:</span>\n                      {item[0]}\n                    </label>\n                   \n                  </div>\n                  <div>\n                    <label>\n                      <span>{data.twoPartTitle[2].title}:</span>\n                      {item[2]}\n                    </label>\n                     <b className='ysp-ExamineAndApprove-name'>{item[1]}</b>\n                  </div>\n                  <div>\n                    <label>\n                      <span>{data.twoPartTitle[3].title}:</span>\n                      {item[3]}\n                    </label>\n                  </div>\n                  <div>\n                    <label>\n                      <span>{data.twoPartTitle[4].title}:</span>\n                      {item[4]}\n                    </label>\n                  </div>\n                </div>  \n              )\n            })\t:\t<div\tstyle={{padding:'10px'}}>\u6682\u65E0\u6570\u636E\u3002\u3002\u3002</div>\n          }\n          </div>\n          <div>\n          \t<Page\tPassedCustomData={data}\tpagesClick={_this.pagesClick.bind(_this)} inputChange={_this.inputChange.bind(_this)} selectChange={_this.selectChange.bind(_this)} />\n        \t</div>\n        </div>\n      )\n    }else{\n      return(\n        <div>\u6682\u65E0\u6570\u636E\u3002\u3002</div>\n      )\n    }\n  }\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'pagesClick\',\n    value: function pagesClick(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: target.className,\n          eventType: \'click\'\n        });\n      }\n    }\n  }, {\n    key: \'selectChange\',\n    value: function selectChange(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: { ind: target.selectedIndex, val: target.value },\n          eventType: \'selectChange\'\n        });\n      }\n    }\n  }, {\n    key: \'inputChange\',\n    value: function inputChange(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: \'inputChange\'\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      var _this = this;\n      if (data) {\n        return React.createElement(\n          \'div\',\n          { className: \'ysp-ExamineAndApprove\' },\n          React.createElement(\n            \'div\',\n            { className: \'ysp-ExamineAndApprove-cardBody\' },\n            data.twoPartCont && data.twoPartCont.length > 0 ? data.twoPartCont.map(function (item, index) {\n              return React.createElement(\n                \'div\',\n                { className: \'ysp-ExamineAndApprove-card\' },\n                React.createElement(\n                  \'div\',\n                  { className: \'ysp-ExamineAndApprove-first\' },\n                  React.createElement(\n                    \'label\',\n                    { className: \'ysp-OperationLink\' },\n                    React.createElement(\'i\', null),\n                    React.createElement(\n                      \'span\',\n                      null,\n                      data.twoPartTitle[0].title,\n                      \':\'\n                    ),\n                    item[0]\n                  )\n                ),\n                React.createElement(\n                  \'div\',\n                  null,\n                  React.createElement(\n                    \'label\',\n                    null,\n                    React.createElement(\n                      \'span\',\n                      null,\n                      data.twoPartTitle[2].title,\n                      \':\'\n                    ),\n                    item[2]\n                  ),\n                  React.createElement(\n                    \'b\',\n                    { className: \'ysp-ExamineAndApprove-name\' },\n                    item[1]\n                  )\n                ),\n                React.createElement(\n                  \'div\',\n                  null,\n                  React.createElement(\n                    \'label\',\n                    null,\n                    React.createElement(\n                      \'span\',\n                      null,\n                      data.twoPartTitle[3].title,\n                      \':\'\n                    ),\n                    item[3]\n                  )\n                ),\n                React.createElement(\n                  \'div\',\n                  null,\n                  React.createElement(\n                    \'label\',\n                    null,\n                    React.createElement(\n                      \'span\',\n                      null,\n                      data.twoPartTitle[4].title,\n                      \':\'\n                    ),\n                    item[4]\n                  )\n                )\n              );\n            }) : React.createElement(\n              \'div\',\n              { style: { padding: \'10px\' } },\n              \'\\u6682\\u65E0\\u6570\\u636E\\u3002\\u3002\\u3002\'\n            )\n          ),\n          React.createElement(\n            \'div\',\n            null,\n            React.createElement(_yspCustomComponents.Page, { PassedCustomData: data, pagesClick: _this.pagesClick.bind(_this), inputChange: _this.inputChange.bind(_this), selectChange: _this.selectChange.bind(_this) })\n          )\n        );\n      } else {\n        return React.createElement(\n          \'div\',\n          null,\n          \'\\u6682\\u65E0\\u6570\\u636E\\u3002\\u3002\'\n        );\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control40_HdrWi4: function (elem) {
      if (!elem) {
        return [];
      }if (elem) {
        var data = [];var receive = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_2');var _receive = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_2	a');var noReceive = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_3');if (receive && _receive.style.display != 'none') {
          data.push(receive.textContent);
        } else if (noReceive) {
          data.push(noReceive.textContent);
        }return data;
      }
    },
    doAction_uiControl41_AceN2k: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;var btn = elem.ownerDocument.querySelector('.mini-tools-close');if (d == '领取') {
          var _click = elem.contentWindow.document.querySelector('#td_0_2').querySelector("a");_click.click();
        } else if (d == '取消领取') {
          var _click = elem.contentWindow.document.querySelector('#td_0_3');if (_click) {
            var _icon = _click.querySelector('a');var _innerHTML = _click.querySelector('span').textContent;_innerHTML == '取消领取' && _icon.click();var json = { time: new Date().getTime() };ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
          } else {
            var _click = elem.contentWindow.document.querySelector('#td_0_2').querySelector("a");var _innerHTML = _click.querySelector('span').textContent;_click.click();var json = { time: new Date().getTime() };ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
          }
        } else {
          var _click = elem.contentWindow.document.querySelector('#td_0_2').querySelector("a");_click.click();var json = { time: new Date().getTime() };ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
        }
      } else if (data.eventType == 'back') {
        //待办里面#dataForm1里面的第一个input的class里没有mini-disabled
        //   var dataForm1 = elem.contentWindow.document.querySelectorAll("iframe")[0].contentDocument.querySelector('#dataform1');
        //   if (dataForm1) {
        //     var disable = dataForm1.querySelector("#uuid");
        //   } 
        //待办里面#form1里含有#status和#statusApprove
        //   var status = elem.contentWindow.document.querySelectorAll("iframe")[0].contentDocument.querySelector('#status');
        //   var approveStatus = elem.contentWindow.document.querySelectorAll("iframe")[0].contentDocument.querySelector('#approveStatus');
        //   if (disable && disable.className.indexOf("mini-disabled") == -1 || status || approveStatus) {
        //     console.log("aa");
        //     var json = {
        //       time: new Date().getTime()
        //     }; 
        //     var btn = elem.ownerDocument.querySelector('.mini-tools-close');
        //     if (btn) {
        //       btn.click();
        //       ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
        //     }
        //   } else {
        //     console.log("bbb");
        //     var json = {
        //       time: new Date().getTime()
        //     };
        //     var btn = elem.ownerDocument.querySelector('.mini-tools-close');
        //     if (btn) {
        //       btn.click();
        //       ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp?");
        //     }
        //   }
        var btns = elem.contentDocument.querySelector("#btn");if (btns && btns.style.display != "none") {
          var json = { time: new Date().getTime() };var btn = elem.ownerDocument.querySelector('.mini-tools-close');if (btn) {
            btn.click();ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
          }
        } else {
          var json = { time: new Date().getTime() };var btn = elem.ownerDocument.querySelector('.mini-tools-close');if (btn) {
            btn.click();ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp?");
          }
        }
      }
    },
    getTemplate_uiControl41_AceN2k: function () {
      var selfTemplate = 'import {\n  Header,\n  HeaderLeft,\n  HeaderRight\n} from \'ysp-interior-components\';\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  onClick=(e)=>{\n    var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         data:this.props.customData,\n         eventType:\'click\'                         \n       })\n     }\n  }\n  render() {\n    var  _this = this;\n    var data=this.props.customData\t||\t[];\n    if(data){\n      return (\n      <Header amStyle="primary" title="\u5DE5\u4F5C\u9879\u6267\u884C">\n        <HeaderLeft>\n          <AMUI.Button amStyle="primary" style={{ margin: 0 }} onClick={()=>{\n              const handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  data:data,\n                  eventType: \'back\'\n                });\n              }\n            }}>\n            <span className=\'icon icon-left-nav\'></span>\n          </AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          {\tdata ? <AMUI.Button amStyle="primary" style={{ margin: 0 }} onClick={_this.onClick} className=\'ysp-Receive\'>{data}</AMUI.Button>\t: <div style={{display:\'none\'}}></div>\t}\n          \n        </HeaderRight>\n      </Header>\n    \t);\n    }else{\n      return(<div style={{display:\'none\'}}></div>)\n    }\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require(\'ysp-interior-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.onClick = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: _this2.props.customData,\n          eventType: \'click\'\n        });\n      }\n    };\n\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          _yspInteriorComponents.Header,\n          { amStyle: \'primary\', title: \'\\u5DE5\\u4F5C\\u9879\\u6267\\u884C\' },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: \'primary\', style: { margin: 0 }, onClick: function onClick() {\n                  var handler = _this.props.customHandler;\n                  if (handler) {\n                    handler({\n                      data: data,\n                      eventType: \'back\'\n                    });\n                  }\n                } },\n              React.createElement(\'span\', { className: \'icon icon-left-nav\' })\n            )\n          ),\n          React.createElement(\n            _yspInteriorComponents.HeaderRight,\n            null,\n            data ? React.createElement(\n              AMUI.Button,\n              { amStyle: \'primary\', style: { margin: 0 }, onClick: _this.onClick, className: \'ysp-Receive\' },\n              data\n            ) : React.createElement(\'div\', { style: { display: \'none\' } })\n          )\n        );\n      } else {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control45_gS7NTD: function (elem) {
      if (!elem) {
        return;
      }if (elem && elem.querySelector("#toast") && elem.querySelector("#toast").style.display != "none") {
        return elem.querySelector("#toast").textContent;
      }
    },
    doAction_uiControl44_omUo0p: function (data, elem) {},
    getTemplate_uiControl44_omUo0p: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends React.Component{\n  \n  render() {\n    var data=this.props.customData||[]\n    return (\n      <div className=\"ysp_alert_tips\" ref=\"yspToast\" onClick={(e)=>{e.target.style.display=\"none\"}}>\n        {data==\"\"? \"\":<div className=\"ysp_alert_words\"><span style={{height:\"40px\"}}>{data}</span></div>}\n      </div>\n    )\n  }\n};";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData || [];\n      return React.createElement(\n        \"div\",\n        { className: \"ysp_alert_tips\", ref: \"yspToast\", onClick: function onClick(e) {\n            e.target.style.display = \"none\";\n          } },\n        data == \"\" ? \"\" : React.createElement(\n          \"div\",\n          { className: \"ysp_alert_words\" },\n          React.createElement(\n            \"span\",\n            { style: { height: \"40px\" } },\n            data\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;";
    }
  });
})(window, ysp);