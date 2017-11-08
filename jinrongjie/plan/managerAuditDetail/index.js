(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({

    getData_control25_PhAtSh: function (elem) {
      if (!elem) {
        return;
      }var doc = elem.ownerDocument;var data = {};var title = doc.querySelector('p.bt').textContent;var numbering = doc.querySelector('p.bh span').textContent;data.title = title;data.numbering = numbering;var ddddsadf = 0;return data;
    },
    doAction_uiControl25_U9iq0i: function (data, elem) {},
    getTemplate_uiControl25_U9iq0i: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.data.customData||{};\n    var title = data.title||"";\n    var numbering = data.numbering||"";\n    return (\n      <div>\n        <div className="ysp-manager-audit-title">\n        \t<div className="ysp-manager-audit-main-title">{title}</div>\n          <div className="ysp-manager-audit-subtitle">\n            <span>\u7F16\u53F7\uFF1A</span>\n            <span>{numbering}</span>\n          </div>\n        </div>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.data.customData || {};\n    var title = data.title || "";\n    var numbering = data.numbering || "";\n    return React.createElement(\n      "div",\n      null,\n      React.createElement(\n        "div",\n        { className: "ysp-manager-audit-title" },\n        React.createElement(\n          "div",\n          { className: "ysp-manager-audit-main-title" },\n          title\n        ),\n        React.createElement(\n          "div",\n          { className: "ysp-manager-audit-subtitle" },\n          React.createElement(\n            "span",\n            null,\n            "\\u7F16\\u53F7\\uFF1A"\n          ),\n          React.createElement(\n            "span",\n            null,\n            numbering\n          )\n        )\n      )\n    );\n  }\n});';
    },
    getData_control23_nAAQod: function (elem) {
      // if (!elem) {
      //   return;
      // }
      // var data = {};
      // var content = [];
      // var titles = [];
      // var fileSize = [];
      // if (!elem.querySelector('tbody')) {
      //   return;
      // } 
      // var tbody = $(elem).children('tbody');
      // var tbodyTrs = $(tbody).children('tr');
      // if (tbodyTrs.length < 1) {
      //   return;
      // }
      // [].forEach.call(tbodyTrs, function (trItem, trIndex) {
      //   var tds = $(trItem).children('td'); // 	采集第一行：申请人单位
      //   // 	申请人单位
      //   if (trIndex == 0) {
      //     [].forEach.call(tds, function (tdItem, tdIndex) {
      //       if (!tdItem.querySelector('span')) {
      //         titles.push(tdItem.textContent);
      //       } else {
      //         content.push(tdItem.textContent);
      //       }
      //     });
      //   } // 	文件缓急
      //   if (trIndex == 1) {
      //     [].forEach.call(tds, function (tdItem, tdIndex) {
      //       if (!tdItem.querySelector('select') && !tdItem.querySelector('span')) {
      //         titles.push(tdItem.textContent);
      //       } else {
      //         if (tdItem.querySelector('select')) {
      //           var optionIndex = tdItem.querySelector('select').selectedIndex;
      //           content.push(tdItem.querySelector('select').options[optionIndex].textContent.trim());
      //         } else {
      //           content.push(tdItem.textContent);
      //         }
      //       }
      //     });
      //   } // 	标题
      //   if (trIndex == 2) {
      //     [].forEach.call(tds, function (tdItem, tdIndex) {
      //       if (!tdItem.querySelector('input')) {
      //         titles.push(tdItem.textContent);
      //       } else {
      //         content.push(tdItem.querySelector('input').value);
      //       }
      //     });
      //   } // 	摘要
      //   if (trIndex == 3) {
      //     [].forEach.call(tds, function (tdItem, tdIndex) {
      //       if (!tdItem.querySelector('textarea')) {
      //         titles.push(tdItem.textContent.trim());
      //       } else {
      //         content.push(tdItem.querySelector('textarea').value.trim());
      //       }
      //     });
      //   } // 	附件
      //   if (trIndex == 5) {
      //     titles.push(tds[0].textContent);
      //     var files = tds[1].querySelectorAll('a');
      //     var fileName = [];
      //     if (files.length > 0) {
      //       [].forEach.call(files, function (fileItem, fileIndex) {
      //         if (fileItem.parentElement.parentElement.querySelector('#selectDownload')) {
      //           fileName.push(fileItem.textContent.trim());
      //           var tmpSizeData = fileItem.parentElement.parentElement.querySelector('#selectDownload').textContent.trim();
      //           fileSize.push(tmpSizeData.slice(tmpSizeData.lastIndexOf('(')));
      //         }
      //       });
      //     }
      //     content.push(fileName);
      //   } // 	相关流程
      //   if (trIndex == 6) {
      //     [].forEach.call(tds, function (tdItem, tdIndex) {
      //       if (tdIndex == 0) {
      //         titles.push(tdItem.textContent.trim());
      //       } else {
      //         content.push(tdItem.textContent.trim());
      //       }
      //     });
      //   }
      //   if (trIndex == 7 || trIndex == 8) {
      //     [].forEach.call(tds, function (tdItem, tdIndex) {
      //       if (tdIndex == 0) {
      //         titles.push(tdItem.textContent.trim());
      //       } else {
      //         content.push(tdItem.textContent.trim());
      //       }
      //     });
      //   }
      //   if (trIndex == 9) {
      //     [].forEach.call(tds, function (tdItem, tdIndex) {
      //       if (tdItem.textContent.trim().indexOf('主管领导') !== -1) {
      //         if (tdIndex == 0) {
      //           titles.push(tdItem.textContent.replace(/\s/g).trim());
      //         } else {
      //           content.push(tdItem.textContent.replace(/\s/g).trim());
      //         }
      //       }
      //     });
      //   }
      //   if (trIndex == 10) {
      //     [].forEach.call(tds, function (tdItem, tdIndex) {
      //       if (tdItem.textContent.replace(/\s/g).trim().startsWith('领导审批')) {
      //         if (tdIndex == 0) {
      //           titles.push(tdItem.textContent.replace(/\s/g).trim());
      //         } else {
      //           content.push(tdItem.textContent.replace(/\s/g).trim());
      //         }

      //       }
      //     });
      //   }
      //   if (trIndex == 11 || trIndex == 12 || trIndex == 13) {
      //     [].forEach.call(tds, function (tdItem, tdIndex) {
      //       if (tdIndex == 0) {
      //         titles.push(tdItem.textContent.trim());
      //       } else {
      //         content.push(tdItem.textContent.trim());
      //       }
      //     });
      //   }
      // });
      // data.titles = titles;
      // data.content = content;
      // data.fileSize = fileSize.slice(fileSize.lastIndexOf('\('));
      // return data;
      if (!elem) {
        return;
      }
      if (elem) {
        var data = {};var content = [];var titles = [];var fileSize = [];var trs = $(elem.querySelector('tbody')).children('tr');[].forEach.call(trs, function (trItem, trIndex) {
          var rows = [[], []];$(trItem).children("td:nth-child(odd)").each(function (idx, dt) {
            if (dt.textContent.indexOf('签字意见') == -1) {
              titles.push(dt.textContent.replace(/\s/g, "").trim());
            }
          });$(trItem).children("td:nth-child(even)").each(function (idx, dt) {
            if (dt.querySelector("select")) {
              var optionIndex = dt.querySelector('select').selectedIndex;content.push(dt.querySelector("select").querySelectorAll('option')[optionIndex].textContent.replace(/\s/g, "").trim());
            } else if (dt.querySelector("span") && dt.querySelector("input[type='hidden']")) {
              if (dt.querySelector("span").textContent.indexOf('编辑器工具') == -1) {
                if (trIndex == 5) {
                  var files = dt.querySelectorAll('a');var fileName = [];if (files.length > 0) {
                    [].forEach.call(files, function (fileItem, fileIndex) {
                      if (fileItem.parentElement.parentElement.querySelector('#selectDownload')) {
                        fileName.push(fileItem.textContent.trim());var tmpSizeData = fileItem.parentElement.parentElement.querySelector('#selectDownload').textContent.trim();fileSize.push(tmpSizeData.slice(tmpSizeData.lastIndexOf('(')));
                      }
                    });content.push(fileName);
                  }
                } else {
                  content.push(dt.querySelector("span").textContent.replace(/\s/g, "").trim());
                }
              }
            } else if (dt.querySelector("input[type='text']")) {
              content.push(dt.querySelector("input").value.replace(/\s/g, "").trim());
            } else if (dt.querySelector("textarea")) {
              content.push(dt.querySelector("textarea").value.replace(/\s/g, "").trim());
            } else {
              content.push('暂无数据');
            }
          });
        });data.titles = titles;data.content = content;data.fileSize = fileSize;return data;
      }
    }, doAction_uiControl23_PUM7iP: function (data, elem) {
      var clickType = data.eventType;var downLoadIndex = data.dataCustom;var buttonList = elem.querySelector('#selectDownload').querySelectorAll('button');if (clickType == 'downLoad') {
        buttonList[downLoadIndex].click();
      }
    },
    getTemplate_uiControl23_PUM7iP: function () {
      var selfTemplate = "import {\n\tComponent\n} from 'react';\nimport {\n\tCustomHeader, Dialog\n} from 'ysp-custom-components';\nexport default class extends Component {\n\tconstructor(props) {\n    super(props);\n\t\tthis.state = {\n\t\t\tdisplayFlg: false\n\t\t}\n\t}\n\n\tbtnClick() {\n\t\tthis.setState((prevState, props) => ({\n\t\t\tdisplayFlg: !prevState.displayFlg\n\t\t}));\n\t}\n\n\tdownLoadClick(e) {\n\t\tlet handler = this.props.customHandler;\n\t\tvar target = e.target;\n\t\tif (handler) {\n\t\t\thandler({\n\t\t\t\tdata: target.getAttribute('data-index'),\n\t\t\t\teventType: \"downLoad\"\n\t\t\t})\n\t\t}\n\t}\n\n\trender() {\n\t\tvar _this = this;\n\t\tvar data = this.props.data.customData || {};\n\t\tvar titles = data.titles || [];\n\t\tvar content = data.content || [];\n\t\tvar fileSize = data.fileSize || [];\n\t\t\n\t\treturn (\n\t\t\t<div className=\"ysp-manager-audit-wrapper\">\n\t\t\t\t<span className=\"left-border\"></span><span>\u57FA\u672C\u4FE1\u606F</span>\n\t\t\t\t{titles ? titles.map((item, index) => {\n\t\t\t\t\tif (!this.state.displayFlg && index > 4) {\n\t\t\t\t\t\treturn null;\n\t\t\t\t\t}\n\t\t\t\t\tif (item === '\u6B63\u6587') {\n\t\t\t\t\t\treturn null;\n\t\t\t\t\t}\n\t\t\t\t\treturn (\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t{item==='\u9644\u4EF6' &&\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<div className=\"title\">{item}</div>\n\t\t\t\t\t\t\t\t\t{content[index] instanceof Array&&content[index].length > 0 ?\n\t\t\t\t\t\t\t\t\t\tcontent[index].map((fileItem, fileIndex) => {\n\t\t\t\t\t\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t\t\t\t\t\t<div className=\"annex-download\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{fileItem}\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span className=\"download-log\" data-index={fileIndex} onClick={_this.downLoadClick.bind(_this)}></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{fileSize[fileIndex]}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t\t:'\u6682\u65E0\u6570\u636E'}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t{item !== '\u9644\u4EF6' &&\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<div className=\"title\">{item}</div>\n\t\t\t\t\t\t\t\t\t<div className=\"content\">{content[index]}</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t);\n\t\t\t\t}) : '\u65E0\u6570\u636E'}\n\t\t\t\t<div className={_this.state.displayFlg ? \"load-up-arrow\" : \"load-more-arrow\"} onClick={_this.btnClick.bind(_this)}>\n\t\t\t\t\t{_this.state.displayFlg ? '\u6536\u8D77\u5168\u90E8\u5185\u5BB9' : '\u663E\u793A\u66F4\u591A'}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t);\n\t}\n\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n\t_inherits(_class, _Component);\n\n\tfunction _class(props) {\n\t\t_classCallCheck(this, _class);\n\n\t\tvar _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n\t\t_this2.state = {\n\t\t\tdisplayFlg: false\n\t\t};\n\t\treturn _this2;\n\t}\n\n\t_createClass(_class, [{\n\t\tkey: \'btnClick\',\n\t\tvalue: function btnClick() {\n\t\t\tthis.setState(function (prevState, props) {\n\t\t\t\treturn {\n\t\t\t\t\tdisplayFlg: !prevState.displayFlg\n\t\t\t\t};\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: \'downLoadClick\',\n\t\tvalue: function downLoadClick(e) {\n\t\t\tvar handler = this.props.customHandler;\n\t\t\tvar target = e.target;\n\t\t\tif (handler) {\n\t\t\t\thandler({\n\t\t\t\t\tdata: target.getAttribute(\'data-index\'),\n\t\t\t\t\teventType: "downLoad"\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: \'render\',\n\t\tvalue: function render() {\n\t\t\tvar _this3 = this;\n\n\t\t\tvar _this = this;\n\t\t\tvar data = this.props.data.customData || {};\n\t\t\tvar titles = data.titles || [];\n\t\t\tvar content = data.content || [];\n\t\t\tvar fileSize = data.fileSize || [];\n\n\t\t\treturn React.createElement(\n\t\t\t\t\'div\',\n\t\t\t\t{ className: \'ysp-manager-audit-wrapper\' },\n\t\t\t\tReact.createElement(\'span\', { className: \'left-border\' }),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\'span\',\n\t\t\t\t\tnull,\n\t\t\t\t\t\'\\u57FA\\u672C\\u4FE1\\u606F\'\n\t\t\t\t),\n\t\t\t\ttitles ? titles.map(function (item, index) {\n\t\t\t\t\tif (!_this3.state.displayFlg && index > 4) {\n\t\t\t\t\t\treturn null;\n\t\t\t\t\t}\n\t\t\t\t\tif (item === \'\u6B63\u6587\') {\n\t\t\t\t\t\treturn null;\n\t\t\t\t\t}\n\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\titem === \'\u9644\u4EF6\' && React.createElement(\n\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t{ className: \'title\' },\n\t\t\t\t\t\t\t\titem\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\tcontent[index] instanceof Array && content[index].length > 0 ? content[index].map(function (fileItem, fileIndex) {\n\t\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t\t{ className: \'annex-download\' },\n\t\t\t\t\t\t\t\t\tfileItem,\n\t\t\t\t\t\t\t\t\tReact.createElement(\'span\', { className: \'download-log\', \'data-index\': fileIndex, onClick: _this.downLoadClick.bind(_this) }),\n\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\tfileSize[fileIndex]\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t}) : \'\u6682\u65E0\u6570\u636E\'\n\t\t\t\t\t\t),\n\t\t\t\t\t\titem !== \'\u9644\u4EF6\' && React.createElement(\n\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t{ className: \'title\' },\n\t\t\t\t\t\t\t\titem\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t{ className: \'content\' },\n\t\t\t\t\t\t\t\tcontent[index]\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t);\n\t\t\t\t}) : \'\u65E0\u6570\u636E\',\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\'div\',\n\t\t\t\t\t{ className: _this.state.displayFlg ? "load-up-arrow" : "load-more-arrow", onClick: _this.btnClick.bind(_this) },\n\t\t\t\t\t_this.state.displayFlg ? \'\u6536\u8D77\u5168\u90E8\u5185\u5BB9\' : \'\u663E\u793A\u66F4\u591A\'\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control24_s2hR81: function (elem) {
      if (!elem) {
        return;
      } // var data = {};
      // var tds = elem.querySelectorAll('td');
      // [].forEach.call(tds, function (item, index) {
      //   if (item.querySelector('input')) {
      //     data.title = item.querySelector('input').value || [];
      //   }
      // });
      // return data;
      if (elem.querySelector('td')) {
        return elem.querySelectorAll('td')[1].textContent.trim();
      }
    },
    doAction_uiControl24_s3lOQh: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }if (data.eventType == 'save1') {
        elem.ownerDocument.defaultView.parent.document.querySelector('#toolbarmenudiv').querySelector('.btn_wfSave').click();
      }
    },
    getTemplate_uiControl24_s3lOQh: function () {
      var selfTemplate = '\n\nimport {Component} from \'react\'; \nimport {CommonHeader} from \'ysp-custom-components\';\nexport default class extends Component{\n  render(){\n    var title = this.props.customData||"";\n    return (\n    \t<CommonHeader \n       data={{centerText:title}}\n        backIsShow = {true}\n        editIsShow={true}\n        rightText = \'\u4FDD\u5B58\'\n        save={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:\'save1\'\n            })\n          }\n        }}\n        back={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:\'click\'\n            })\n          }\n        }}\n        />\n    )\t\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var _this2 = this;\n\n      var title = this.props.customData || "";\n      return React.createElement(_yspCustomComponents.CommonHeader, {\n        data: { centerText: title },\n        backIsShow: true,\n        editIsShow: true,\n        rightText: \'\\u4FDD\\u5B58\',\n        save: function save(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'save1\'\n            });\n          }\n        },\n        back: function back(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'click\'\n            });\n          }\n        }\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },

    getData_control28_hPr3qu: function (elem) {
      if (!elem) {
        return;
      }var data = {};var tds = elem.querySelectorAll('td');if (tds.length < 1) {
        return;
      }[].forEach.call(tds, function (item, index) {
        if (index == 0) {
          data.title = item.textContent.trim();
        }
      });return data;
    },
    doAction_uiControl27_VCIGbH: function (data, elem) {
      var clickType = data.eventType;if (clickType === 'docClick') {
        // elem.querySelector('.Browser').click();
        elem.ownerDocument.defaultView.eval(elem.querySelector('.Browser').onclick());elem.querySelector('.Browser').onclick();
      }
    },
    getTemplate_uiControl27_VCIGbH: function () {
      var selfTemplate = 'import {\n  Component\n} from \'react\';\nimport {\n\tCommonHeader,Dialog\n} from \'ysp-custom-components\';\nexport default class extends Component {\n  constructor(props){\n    super(props);\n  }\n  btnClick(e){//\u5BA2\u6237\u4FE1\u606F\u548C\u5BA2\u6237\u7ECF\u8425\u4FE1\u606F\u5207\u6362\n    let handler=this.props.customHandler;\n    var target=e.target;\n    if(handler){\n      handler({\n        eventType:"docClick"\n      })\n    }\n  }\n  render() {\n    var _this = this;\n    var data = this.props.data.customData;\n    return (\n      <div className="ysp-manageraudit-relate-doc">\n        <span>{data&&data.title}</span>\n        <div className="border-bottom"><span onClick={_this.btnClick.bind(_this)} className="ysp-search-icon"></span></div>\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: \'btnClick\',\n    value: function btnClick(e) {\n      //\u5BA2\u6237\u4FE1\u606F\u548C\u5BA2\u6237\u7ECF\u8425\u4FE1\u606F\u5207\u6362\n      var handler = this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          eventType: "docClick"\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      var data = this.props.data.customData;\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-manageraudit-relate-doc\' },\n        React.createElement(\n          \'span\',\n          null,\n          data && data.title\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'border-bottom\' },\n          React.createElement(\'span\', { onClick: _this.btnClick.bind(_this), className: \'ysp-search-icon\' })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control29_tXFBoh: function (elem) {
      if (!elem) {
        return;
      }var data = {};var tds = elem.querySelectorAll('td');if (tds.length < 1) {
        return;
      }[].forEach.call(tds, function (item, index) {
        if (index == 0) {
          data.title = item.textContent.trim();
        }
      });return data;
    },
    doAction_uiControl28_xQOJEl: function (data, elem) {
      var clickType = data.eventType;if (clickType === 'docClick') {
        elem.ownerDocument.defaultView.eval(elem.querySelector('.fvalue').querySelector('button[title="相关流程"]').onclick());elem.querySelector('.fvalue').querySelector('button[title="相关流程"]').onclick();
      }
    },
    getTemplate_uiControl28_xQOJEl: function () {
      var selfTemplate = 'import {\n  Component\n} from \'react\';\nimport {\n\tCustomHeader,Dialog,Alert\n} from \'ysp-custom-components\';\nexport default class extends Component {\n  constructor(props){\n    super(props);\n  }\n  btnClick(e){//\u5BA2\u6237\u4FE1\u606F\u548C\u5BA2\u6237\u7ECF\u8425\u4FE1\u606F\u5207\u6362\n    let handler=this.props.customHandler;\n    var target=e.target;\n    if(handler){\n      handler({\n        eventType:"docClick"\n      })\n    }\n  }\n  render() {\n    var _this = this;\n    var data = this.props.data.customData;\n    return (\n      <div className="ysp-manageraudit-relate-doc">\n        <span>{data&&data.title}</span>\n        <span><span onClick={_this.btnClick.bind(_this)} className="ysp-search-icon"></span></span>\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: \'btnClick\',\n    value: function btnClick(e) {\n      //\u5BA2\u6237\u4FE1\u606F\u548C\u5BA2\u6237\u7ECF\u8425\u4FE1\u606F\u5207\u6362\n      var handler = this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          eventType: "docClick"\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      var data = this.props.data.customData;\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-manageraudit-relate-doc\' },\n        React.createElement(\n          \'span\',\n          null,\n          data && data.title\n        ),\n        React.createElement(\n          \'span\',\n          null,\n          React.createElement(\'span\', { onClick: _this.btnClick.bind(_this), className: \'ysp-search-icon\' })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },

    getData_control16_TqnDIo: function (elem) {
      if (!elem) {
        return;
      }var data = {};var leftData = [];var rightData = [];var title = [];var content = [];if (!elem.querySelector('#requestlogappednDiv')) {
        data.leftData = leftData;data.rightData = rightData;return data;
      }var divData = elem.querySelector('#requestlogappednDiv');var tableData = $(divData).children('table');var tbody = $(tableData).children('tbody');var trs = $(tbody).children('tr');if (trs.length > 1) {
        for (var i = 0; i < trs.length; i++) {
          if (i == 0) {
            var ths = trs[0].querySelectorAll('th');[].forEach.call(ths, function (item, index) {
              if (index !== 1) {
                title.push(item.textContent.trim());
              }
            });
          } else {
            var tds = $(trs[i]).children('td');var trContent = [];[].forEach.call(tds, function (item, index) {
              if (item.querySelector('table')) {// trContent.push(item.querySelector('p').textContent);意见
              } else {
                if (item.querySelector('script')) {
                  trContent.push(item.childNodes[2].textContent);
                } else {
                  trContent.push(item.textContent.trim());
                }
              }
            });content.push(trContent);
          }
        }
      }for (var i = 0; i < content.length; i++) {
        var innerContent = content[i];var lSingleData = [];var rSingleData = [];for (var j = 0; j < title.length; j++) {
          if (j == 0) {
            lSingleData.push(title[j]);lSingleData.push(innerContent[j]);
          } else {
            if (j == title.length - 1) {
              rSingleData.push(innerContent[j]);
            } else {
              rSingleData.push(title[j] + "：" + innerContent[j]);
            }
          }
        }leftData.push(lSingleData);rightData.push(rSingleData);
      }data['leftData'] = leftData;data['rightData'] = rightData;return data;
    },
    doAction_uiControl14_pxz0nM: function (data, elem) {
      var eventType = data.eventType;var index = parseInt(data.dataCustom.index) + 1;var tbody = elem.querySelector('#requestlogappednDiv').querySelector('table').querySelector('tbody');if (eventType == 'showReceiver') {
        var tr = $(tbody).children('tr')[index];$(tr).children('td').eq(5).find('span').click();
      }
    },
    getTemplate_uiControl14_pxz0nM: function () {
      var selfTemplate = 'import {\n\tComponent\n} from \'react\';\nimport {\n\tCommonHeader, ADialog\n} from \'ysp-custom-components\';\nexport default class extends Component {\n\n\tconstructor(props) {// \u6784\u9020\u51FD\u6570-->\u521D\u59CB\u5316\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tactiveTab: 0,\n\t\t\topen: false\n\t\t}\n\t}\n\n\tbtnClick(e) {//\u6D41\u8F6C\u610F\u89C1\u5207\u6362\n\t\tvar target = e.target;\n\t\tvar index = target.getAttribute("data-index");\n\t\tthis.setState(\n\t\t\tfunction (prevState) {\n\t\t\t\tif (prevState.activeTab == 0 && index == 1) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tactiveTab: 1\n\t\t\t\t\t}\n\t\t\t\t} else if (prevState.activeTab == 1 && index == 0) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tactiveTab: 0\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t);\n\t}\n\n\tshowReceiver(e) {\n\t\tvar handler = this.props.customHandler;\n\t\tvar dataIndex = e.target.getAttribute(\'data-index\');\n\t\tif (handler) {\n\t\t\thandler({\n\t\t\t\tdata: { index: dataIndex },\n\t\t\t\teventType: "showReceiver"\n\t\t\t})\n\t\t}\n\t}\n\n\t// render\u65B9\u6CD5-->\u6E32\u67D3\n\trender() {\n\t\tvar _this = this;\n\t\tvar data = _this.props.customData||[];\n\t\tvar leftData = data.leftData||[];\n\t\tvar rightData = data.rightData||[];\n\t\treturn (\n\t\t\t<div className="ysp-manager-audit-header-tab">\n\t\t\t\t<div className="left-div" data-index="0" onClick={_this.btnClick.bind(_this)}><i data-index="0"></i><span data-index="0" className={_this.state.activeTab == 0 ? "active_tab" : ""} onClick={(e) => {\n\t\t\t\t\tthis.setState({\n\t\t\t\t\t\topen: false\n\t\t\t\t\t})\n\t\t\t\t}} >\u6D41\u7A0B\u8868\u5355</span></div>\n\t\t\t\t<div className="left-div" data-index="1" onClick={_this.btnClick.bind(_this)}><i data-index="1"></i><span onClick={(e) => {\n\t\t\t\t\tthis.setState({\n\t\t\t\t\t\topen: true\n\t\t\t\t\t})\n\t\t\t\t}} data-index="1" className={_this.state.activeTab == 1 ? "active_tab" : ""}>\u6D41\u8F6C\u610F\u89C1</span></div>\n\t\t\t\t<div className="border-bottom"></div>\n\t\t\t\t{this.state.open && <ADialog>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t{leftData ? leftData.map((litem, lindex) => {\n\t\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t\t<div className="approval-node-info">\n\t\t\t\t\t\t\t\t\t<div className="approval-node-info-left-div">\n\t\t\t\t\t\t\t\t\t\t{litem.map((innerLitem) => {\n\t\t\t\t\t\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t{innerLitem}\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t\t\t})}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div className="approval-node-info-right-div">\n\t\t\t\t\t\t\t\t\t\t{rightData[lindex].map((ritem, rindex) => {\n\t\t\t\t\t\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t{rightData[lindex].length == (parseInt(rindex )+1) ? <span>\u63A5\u6536\u4EBA:<span data-index={lindex} onClick={_this.showReceiver.bind(_this)}>{ritem.indexOf(\'\u663E\u793A\') >= 0 ? \'\u663E\u793A\' : ritem}</span></span> : ritem}\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t\t\t})}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t}) : <div></div>}\n\t\t\t\t\t</div>\n\t\t\t\t</ADialog>}\n\t\t\t\t<p className="bottom"></p>\n\t\t\t</div>\n\t\t)\n\t}\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n\t_inherits(_class, _Component);\n\n\tfunction _class(props) {\n\t\t_classCallCheck(this, _class);\n\n\t\tvar _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props)); // \u6784\u9020\u51FD\u6570-->\u521D\u59CB\u5316\n\n\n\t\t_this2.state = {\n\t\t\tactiveTab: 0,\n\t\t\topen: false\n\t\t};\n\t\treturn _this2;\n\t}\n\n\t_createClass(_class, [{\n\t\tkey: \'btnClick\',\n\t\tvalue: function btnClick(e) {\n\t\t\t//\u6D41\u8F6C\u610F\u89C1\u5207\u6362\n\t\t\tvar target = e.target;\n\t\t\tvar index = target.getAttribute("data-index");\n\t\t\tthis.setState(function (prevState) {\n\t\t\t\tif (prevState.activeTab == 0 && index == 1) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tactiveTab: 1\n\t\t\t\t\t};\n\t\t\t\t} else if (prevState.activeTab == 1 && index == 0) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tactiveTab: 0\n\t\t\t\t\t};\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: \'showReceiver\',\n\t\tvalue: function showReceiver(e) {\n\t\t\tvar handler = this.props.customHandler;\n\t\t\tvar dataIndex = e.target.getAttribute(\'data-index\');\n\t\t\tif (handler) {\n\t\t\t\thandler({\n\t\t\t\t\tdata: { index: dataIndex },\n\t\t\t\t\teventType: "showReceiver"\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\n\t\t// render\u65B9\u6CD5-->\u6E32\u67D3\n\n\t}, {\n\t\tkey: \'render\',\n\t\tvalue: function render() {\n\t\t\tvar _this3 = this;\n\n\t\t\tvar _this = this;\n\t\t\tvar data = _this.props.customData || [];\n\t\t\tvar leftData = data.leftData || [];\n\t\t\tvar rightData = data.rightData || [];\n\t\t\treturn React.createElement(\n\t\t\t\t\'div\',\n\t\t\t\t{ className: \'ysp-manager-audit-header-tab\' },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\'div\',\n\t\t\t\t\t{ className: \'left-div\', \'data-index\': \'0\', onClick: _this.btnClick.bind(_this) },\n\t\t\t\t\tReact.createElement(\'i\', { \'data-index\': \'0\' }),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t{ \'data-index\': \'0\', className: _this.state.activeTab == 0 ? "active_tab" : "", onClick: function onClick(e) {\n\t\t\t\t\t\t\t\t_this3.setState({\n\t\t\t\t\t\t\t\t\topen: false\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t} },\n\t\t\t\t\t\t\'\\u6D41\\u7A0B\\u8868\\u5355\'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\'div\',\n\t\t\t\t\t{ className: \'left-div\', \'data-index\': \'1\', onClick: _this.btnClick.bind(_this) },\n\t\t\t\t\tReact.createElement(\'i\', { \'data-index\': \'1\' }),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t{ onClick: function onClick(e) {\n\t\t\t\t\t\t\t\t_this3.setState({\n\t\t\t\t\t\t\t\t\topen: true\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t}, \'data-index\': \'1\', className: _this.state.activeTab == 1 ? "active_tab" : "" },\n\t\t\t\t\t\t\'\\u6D41\\u8F6C\\u610F\\u89C1\'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tReact.createElement(\'div\', { className: \'border-bottom\' }),\n\t\t\t\tthis.state.open && React.createElement(\n\t\t\t\t\t_yspCustomComponents.ADialog,\n\t\t\t\t\tnull,\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tleftData ? leftData.map(function (litem, lindex) {\n\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t{ className: \'approval-node-info\' },\n\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t\t{ className: \'approval-node-info-left-div\' },\n\t\t\t\t\t\t\t\t\tlitem.map(function (innerLitem) {\n\t\t\t\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\tinnerLitem\n\t\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t\t{ className: \'approval-node-info-right-div\' },\n\t\t\t\t\t\t\t\t\trightData[lindex].map(function (ritem, rindex) {\n\t\t\t\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\trightData[lindex].length == parseInt(rindex) + 1 ? React.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\t\t\'\\u63A5\\u6536\\u4EBA:\',\n\t\t\t\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\t\t\t\t\t\t\t{ \'data-index\': lindex, onClick: _this.showReceiver.bind(_this) },\n\t\t\t\t\t\t\t\t\t\t\t\t\tritem.indexOf(\'\u663E\u793A\') >= 0 ? \'\u663E\u793A\' : ritem\n\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t) : ritem\n\t\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t}) : React.createElement(\'div\', null)\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tReact.createElement(\'p\', { className: \'bottom\' })\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control45_TLCCf5: function (elem) {
      if (!elem) {
        return;
      }var data = [];var showData = [];var moreData = [];var doc = elem.querySelector('#toolbarmenu');if (doc) {
        //   showData.push(doc.querySelector('.btn_subnobackName').textContent.trim()); //批准
        //   showData.push(doc.querySelector('.btn_subbackName').textContent.trim()); //提交
        //   [].forEach.call(doc.querySelectorAll('.btn_edit'), function (item, index) {//前插 后插
        //     moreData.push(item.textContent.trim());
        //   });
        //   moreData.push(doc.querySelector('.btn_rejectName').textContent.trim()); //退回
        //   moreData.push(doc.querySelector('.btn_forward').textContent.trim()); //送阅
        //   moreData.push(doc.querySelector('.btn_back').textContent.trim()); //返回
        [].forEach.call(doc.querySelectorAll('button'), (btnItem, tdIndex) => {
          data.push(btnItem.textContent.trim());
        });
      } // data.showData = showData;
      // data.moreData = moreData;
      return data;
    },
    doAction_uiControl43_lpdLEi: function (data, elem) {
      var eventType = data.eventType;var btnIndex = data.dataCustom.num;if (eventType == 'click') {
        elem.querySelectorAll('button')[btnIndex].click(); // ysp.customHelper.openWindow('http://192.168.200.63/workflow/request/Remark.jsp?requestid=118465&workflowRequestLogId=-1', 'sy');
      }
    },
    getTemplate_uiControl43_lpdLEi: function () {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CustomHeader } from \'ysp-custom-components\';\n\nexport default class extends Component {\n  constructor(props){\n    super(props);\n    this.state={\n      isMoreOpen: false,\n      isShowBottom: true\n    }\n  }\n  \n  btnClick=(e)=>{\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{num:e.target.dataset.num},\n        eventType:\'click\'\n      })\n    }\n  }\n  \n  showMoreButton=(e)=>{\n    this.setState((prevState) => {\n  \t\treturn {\n        isMoreOpen: !prevState.isMoreOpen,\n      \tisShowBottom: !prevState.isShowBottom\n      };\n\t\t});\n  }\n  \n  render(){\n    var _this = this;\n    var data = this.props.customData;\n    if(data == null || data == undefined){\n      return null;\n    }\n    return (\n    \t<div className="ysp-process-form-wrapper">\n        {_this.state.isShowBottom&&\n      \t<div className="ysp-process-form-bottom-button">\n          <div>\n            <span data-num="1" onClick={_this.btnClick.bind(_this)}>{data[1]}</span>\n            <span data-num="0" onClick={_this.btnClick.bind(_this)}>{data[0]}</span>\n            <span onClick={_this.showMoreButton.bind(_this)}></span>\n          </div>\n          \n        </div>\n        }\n        {_this.state.isMoreOpen &&\n          <div className="load-more-coverlayer">\n          \t<div className="load-more-data">\n              <section>\n                <div data-num="2" onClick={_this.btnClick.bind(_this)}>{data[2]}</div>\n                <div data-num="3" onClick={_this.btnClick.bind(_this)}>{data[3]}</div>\n                <div data-num="5" onClick={_this.btnClick.bind(_this)}>{data[5]}</div>\n                <div data-num="6" onClick={_this.btnClick.bind(_this)}>{data[6]}</div>\n              </section>\n              <div data-num="7" onClick={_this.showMoreButton.bind(_this)}>{data[7]}</div>\n            </div>\n          </div>\n        }\n      </div>\n      \n    );\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.btnClick = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: { num: e.target.dataset.num },\n          eventType: \'click\'\n        });\n      }\n    };\n\n    _this2.showMoreButton = function (e) {\n      _this2.setState(function (prevState) {\n        return {\n          isMoreOpen: !prevState.isMoreOpen,\n          isShowBottom: !prevState.isShowBottom\n        };\n      });\n    };\n\n    _this2.state = {\n      isMoreOpen: false,\n      isShowBottom: true\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData;\n      if (data == null || data == undefined) {\n        return null;\n      }\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-process-form-wrapper\' },\n        _this.state.isShowBottom && React.createElement(\n          \'div\',\n          { className: \'ysp-process-form-bottom-button\' },\n          React.createElement(\n            \'div\',\n            null,\n            React.createElement(\n              \'span\',\n              { \'data-num\': \'1\', onClick: _this.btnClick.bind(_this) },\n              data[1]\n            ),\n            React.createElement(\n              \'span\',\n              { \'data-num\': \'0\', onClick: _this.btnClick.bind(_this) },\n              data[0]\n            ),\n            React.createElement(\'span\', { onClick: _this.showMoreButton.bind(_this) })\n          )\n        ),\n        _this.state.isMoreOpen && React.createElement(\n          \'div\',\n          { className: \'load-more-coverlayer\' },\n          React.createElement(\n            \'div\',\n            { className: \'load-more-data\' },\n            React.createElement(\n              \'section\',\n              null,\n              React.createElement(\n                \'div\',\n                { \'data-num\': \'2\', onClick: _this.btnClick.bind(_this) },\n                data[2]\n              ),\n              React.createElement(\n                \'div\',\n                { \'data-num\': \'3\', onClick: _this.btnClick.bind(_this) },\n                data[3]\n              ),\n              React.createElement(\n                \'div\',\n                { \'data-num\': \'5\', onClick: _this.btnClick.bind(_this) },\n                data[5]\n              ),\n              React.createElement(\n                \'div\',\n                { \'data-num\': \'6\', onClick: _this.btnClick.bind(_this) },\n                data[6]\n              )\n            ),\n            React.createElement(\n              \'div\',\n              { \'data-num\': \'7\', onClick: _this.showMoreButton.bind(_this) },\n              data[7]\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },

    getData_control31_eeZIHZ: function (elem) {},
    doAction_uiControl42_3fvgmQ: function (data, elem) {
      var eventType = data.eventType;if (eventType == 'dataChange') {
        var p = document.createElement('p');elem.contentDocument.querySelector('body').innerHTML = "";elem.contentDocument.querySelector('body').appendChild(p).textContent = data.dataCustom;
      }
    },
    getTemplate_uiControl42_3fvgmQ: function () {
      var selfTemplate = "import { Component } from 'react';\nimport { CustomHeader } from 'ysp-custom-components';\n\nexport default class extends Component {\n  constructor(){\n    super();\n  }\n\n  onChange=(e)=>{\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:e.target.value,\n        eventType:'dataChange'\n      })\n    }\n  }\n\n  render(){\n    var _this = this;\n    return (\n      <div className=\"ysp-manager-audit-sign\">\n        <span>\u7B7E\u5B57\u610F\u89C1</span>\n        <div><textarea onBlur={_this.onChange.bind(_this)}></textarea></div>\n      </div>\n    )\n  }\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.onChange = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: e.target.value,\n          eventType: \'dataChange\'\n        });\n      }\n    };\n\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-manager-audit-sign\' },\n        React.createElement(\n          \'span\',\n          null,\n          \'\\u7B7E\\u5B57\\u610F\\u89C1\'\n        ),\n        React.createElement(\n          \'div\',\n          null,\n          React.createElement(\'textarea\', { onBlur: _this.onChange.bind(_this) })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control54_tKcIkL: function (elem) {},
    doAction_uiControl51_V4IX3G: function (data, elem) {},
    getTemplate_uiControl51_V4IX3G: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div className="background-gray"></div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    return React.createElement("div", { className: "background-gray" });\n  }\n});';
    },
    getData_control56_BTf16A: function (elem) {
      if (!elem) {
        return;
      }var z = elem.ownerDocument.defaultView.check_form.toString();if (z) {
        var reg = /userid=[0-9]{1,}/;var value = z.match(reg)[0] && z.match(reg)[0].split("=")[1];
      }return { name: elem.querySelector('td').textContent.trim(), value: value || "" };
    },
    doAction_uiControl53_WgB6r3: function (data, elem) {},
    getTemplate_uiControl53_WgB6r3: function () {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CustomHeader } from \'ysp-custom-components\';\n\nexport default class extends Component {\n  constructor(z){\n    super(z)\n    this.state = {\n      arrFlag:"",\n      addFlag: true\n    }\n  }\n\n  click (){\n    if(this.state.addFlag) {\n      this.setState({addFlag: false})\n      this.setState({arrFlag:this.state.arrFlag+"1"})\n    } else {\n      this.componentDidUpdate()\n    }\n  }\n  \n  componentDidUpdate(){\n    var forms = this.refs.div.querySelectorAll("form")\n    var activeForm = forms[forms.length-1]\n    activeForm.Filedata.click()\n  }\n  \n   handleChange(e) {\n    this.setState({addFlag: true})\n    var fileData = e.target;//\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u7D20\n    var form = fileData.parentElement.parentElement;//\u627E\u5230\u5BF9\u5E94\u7684form\n    var fileName = form.Filename;//\u627E\u5230input name=filename\u7684\u5143\u7D20\uFF0C\n    fileName.value = fileData.files[0].name; //\u5C06\u8FD9\u4E2A\u5143\u7D20\u7684value\u8BBE\u4E3A\u521A\u521A\u4E0A\u4F20\u7684\u6587\u4EF6\u540D\n     var valueDiv = form.previousElementSibling;\n    valueDiv.innerHTML = fileData.files[0].name;\n     valueDiv.style.display = "block"\n\t\tvar xhr = new XMLHttpRequest();//\u521B\u5EFAajax\u5BF9\u8C61\n    xhr.open(\'post\', \'http://192.168.200.63/docs/docupload/MultiDocUploadByWorkflow.jsp\');//\u53D1\u9001\u8BF7\u6C42\n    var formData = new FormData(form);//\u683C\u5F0F\u5316form\u7684\u6570\u636E\n    xhr.send(formData);//\u53D1\u9001\u6570\u636E\n    var responseT = "";\n\t\t\n    xhr.onreadystatechange = function() {\n      if (xhr.readyState == 4 && xhr.status == 200) {\n        // debugger\n        responseT = xhr.responseText;//\u5F97\u5230\u8BF7\u6C42\u56DE\u6765\u7684\u5185\u5BB9\n        // if (handler) {\n        //   handler({  //\u5C06\u5185\u5BB9\u4F20\u9012\u7ED9\u56DE\u8C03\n        //     eventType: \'click\',\n        //     data: responseT\n        //   });\n        // }\n      }\n    }\n\t}\n  \n  render(){\n    \t\n      var data = this.props.customData;\n      return (\n      <div className="ysp-manager-audit-title-icon">\n        <span>{data.name}</span>\n        <i className="relate-files" onClick={this.click.bind(this)}></i>\n        <div ref=\'div\'>\n             { [].map.call(this.state.arrFlag,(()=>{\n                return  (\n                  <div>\n                    \t<div  style={{display:"none"}}></div>\n                    \t<form style={{display:"none"}}>\n                        <div>\n                          <span>\u4E0A\u4F20</span>\n                          <input type="file" onChange={this.handleChange.bind(this)} name="Filedata"/>\n                        </div>\n                        <input type="hidden" value="Submit Query" name="Upload"/>\n                        <input type="hidden" name="Filename"/>\n                        <input type="hidden" name="subId" value="5"/>\n                        <input type="hidden" name="logintype" value="1"/>\n                        <input type="hidden" name="secId" value="106"/>\n                        <input type="hidden" name="userid" value={data.value}/>\n                        <input type="hidden" name="mainId" value="3"/>\n                      </form>\n                    \t\n                  </div>\n                )\n    })\n             )}\n        </div>\n      </div>\n      )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(z) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, z));\n\n    _this.state = {\n      arrFlag: "",\n      addFlag: true\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: \'click\',\n    value: function click() {\n      if (this.state.addFlag) {\n        this.setState({ addFlag: false });\n        this.setState({ arrFlag: this.state.arrFlag + "1" });\n      } else {\n        this.componentDidUpdate();\n      }\n    }\n  }, {\n    key: \'componentDidUpdate\',\n    value: function componentDidUpdate() {\n      var forms = this.refs.div.querySelectorAll("form");\n      var activeForm = forms[forms.length - 1];\n      activeForm.Filedata.click();\n    }\n  }, {\n    key: \'handleChange\',\n    value: function handleChange(e) {\n      this.setState({ addFlag: true });\n      var fileData = e.target; //\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u7D20\n      var form = fileData.parentElement.parentElement; //\u627E\u5230\u5BF9\u5E94\u7684form\n      var fileName = form.Filename; //\u627E\u5230input name=filename\u7684\u5143\u7D20\uFF0C\n      fileName.value = fileData.files[0].name; //\u5C06\u8FD9\u4E2A\u5143\u7D20\u7684value\u8BBE\u4E3A\u521A\u521A\u4E0A\u4F20\u7684\u6587\u4EF6\u540D\n      var valueDiv = form.previousElementSibling;\n      valueDiv.innerHTML = fileData.files[0].name;\n      valueDiv.style.display = "block";\n      var xhr = new XMLHttpRequest(); //\u521B\u5EFAajax\u5BF9\u8C61\n      xhr.open(\'post\', \'http://192.168.200.63/docs/docupload/MultiDocUploadByWorkflow.jsp\'); //\u53D1\u9001\u8BF7\u6C42\n      var formData = new FormData(form); //\u683C\u5F0F\u5316form\u7684\u6570\u636E\n      xhr.send(formData); //\u53D1\u9001\u6570\u636E\n      var responseT = "";\n\n      xhr.onreadystatechange = function () {\n        if (xhr.readyState == 4 && xhr.status == 200) {\n          // debugger\n          responseT = xhr.responseText; //\u5F97\u5230\u8BF7\u6C42\u56DE\u6765\u7684\u5185\u5BB9\n          // if (handler) {\n          //   handler({  //\u5C06\u5185\u5BB9\u4F20\u9012\u7ED9\u56DE\u8C03\n          //     eventType: \'click\',\n          //     data: responseT\n          //   });\n          // }\n        }\n      };\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this2 = this;\n\n      var data = this.props.customData;\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-manager-audit-title-icon\' },\n        React.createElement(\n          \'span\',\n          null,\n          data.name\n        ),\n        React.createElement(\'i\', { className: \'relate-files\', onClick: this.click.bind(this) }),\n        React.createElement(\n          \'div\',\n          { ref: \'div\' },\n          [].map.call(this.state.arrFlag, function () {\n            return React.createElement(\n              \'div\',\n              null,\n              React.createElement(\'div\', { style: { display: "none" } }),\n              React.createElement(\n                \'form\',\n                { style: { display: "none" } },\n                React.createElement(\n                  \'div\',\n                  null,\n                  React.createElement(\n                    \'span\',\n                    null,\n                    \'\\u4E0A\\u4F20\'\n                  ),\n                  React.createElement(\'input\', { type: \'file\', onChange: _this2.handleChange.bind(_this2), name: \'Filedata\' })\n                ),\n                React.createElement(\'input\', { type: \'hidden\', value: \'Submit Query\', name: \'Upload\' }),\n                React.createElement(\'input\', { type: \'hidden\', name: \'Filename\' }),\n                React.createElement(\'input\', { type: \'hidden\', name: \'subId\', value: \'5\' }),\n                React.createElement(\'input\', { type: \'hidden\', name: \'logintype\', value: \'1\' }),\n                React.createElement(\'input\', { type: \'hidden\', name: \'secId\', value: \'106\' }),\n                React.createElement(\'input\', { type: \'hidden\', name: \'userid\', value: data.value }),\n                React.createElement(\'input\', { type: \'hidden\', name: \'mainId\', value: \'3\' })\n              )\n            );\n          })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control57_gQMeSo: function (elem) {},
    doAction_uiControl54_f241s1: function (data, elem) {},
    getTemplate_uiControl54_f241s1: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div className="background-gray"></div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    return React.createElement("div", { className: "background-gray" });\n  }\n});';
    },
    getData_control58_T9FLu4: function (elem) {},
    doAction_uiControl55_kuzLnG: function (data, elem) {},
    getTemplate_uiControl55_kuzLnG: function () {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CustomHeader } from \'ysp-custom-components\';\n\nexport default class extends Component {\n  \n  render(){\n      var data = this.props.customData;\n      return (\n        <div className="ysp-manager-audit-title-icon">\n          <span>\u76F8\u5173\u6D41\u7A0B</span>\n          <i className="arrow-right"></i>\n        </div>\n      )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-manager-audit-title-icon\' },\n        React.createElement(\n          \'span\',\n          null,\n          \'\\u76F8\\u5173\\u6D41\\u7A0B\'\n        ),\n        React.createElement(\'i\', { className: \'arrow-right\' })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control59_JQESHT: function (elem) {},
    doAction_uiControl56_NvTH1u: function (data, elem) {},
    getTemplate_uiControl56_NvTH1u: function () {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CustomHeader } from \'ysp-custom-components\';\n\nexport default class extends Component {\n  \n  render(){\n      var data = this.props.customData;\n      return (\n      <div className="ysp-manager-audit-title-icon">\n        <span>\u76F8\u5173\u6587\u6863</span>\n        <i className="arrow-right"></i>\n      </div>);\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-manager-audit-title-icon\' },\n        React.createElement(\n          \'span\',\n          null,\n          \'\\u76F8\\u5173\\u6587\\u6863\'\n        ),\n        React.createElement(\'i\', { className: \'arrow-right\' })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control60_pHbEeO: function (elem) {},
    doAction_uiControl57_paZHVD: function (data, elem) {},
    getTemplate_uiControl57_paZHVD: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div className="background-gray"></div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    return React.createElement("div", { className: "background-gray" });\n  }\n});';
    },
    getData_control61_eSpTT1: function (elem) {},
    doAction_uiControl58_TK1I7S: function (data, elem) {},
    getTemplate_uiControl58_TK1I7S: function () {
      var selfTemplate = "import { Component } from 'react';\nimport { CustomHeader } from 'ysp-custom-components';\n\nexport default class extends Component {\n  \n  render(){\n      var data = this.props.customData;\n      return (\n        <div className=\"ysp-manager-audit-title-icon\">\n          <span>\u76F8\u5173\u9644\u4EF6</span>\n          <i className=\"arrow-right\"></i>\n        </div>\n      )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(\n        'div',\n        { className: 'ysp-manager-audit-title-icon' },\n        React.createElement(\n          'span',\n          null,\n          '\\u76F8\\u5173\\u9644\\u4EF6'\n        ),\n        React.createElement('i', { className: 'arrow-right' })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control62_7sJo6r: function (elem) {},
    doAction_uiControl59_yb8Jcb: function (data, elem) {},
    getTemplate_uiControl59_yb8Jcb: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div className="background-gray"></div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    return React.createElement("div", { className: "background-gray" });\n  }\n});';
    },
    getData_control37_TGCNSA: function (elem) {},
    doAction_uiControl35_NVoS8U: function (data, elem) {},
    getTemplate_uiControl35_NVoS8U: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div className="background-gray"></div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    return React.createElement("div", { className: "background-gray" });\n  }\n});';
    }
  });
})(window, ysp);