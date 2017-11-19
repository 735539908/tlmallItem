"use strict";

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control9_Ks2mo3: function getData_control9_Ks2mo3(elem) {
      if (!elem) {
        return;
      }if (elem) {
        return elem.textContent;
      }
    },
    doAction_uiControl9_TJh8bp: function doAction_uiControl9_TJh8bp(data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }
    },
    getTemplate_uiControl9_TJh8bp: function getTemplate_uiControl9_TJh8bp() {
      var selfTemplate = "import {Component} from 'react'; \nimport {CommonHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render(){\n    return (\n    \t<CommonHeader \n       data={{centerText:this.props.customData}} \n       backIsShow = {true}\n        back={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'click'\n            })\n          }\n        }}\n        />\n    )\t\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(_yspCustomComponents.CommonHeader, {\n        data: { centerText: this.props.customData },\n        backIsShow: true,\n        back: function back(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'click'\n            });\n          }\n        }\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control24_It6bP6: function (elem) {
      if (!elem) {
        return;
      }var data = {};var title = ["日常工作", "公文管理", "合同管理", "固定资产", "人事考勤", "财务管理", '人力资源费用管理'];var listBox = '';var header = [];var content, imgFlag;var href, Thref;var newList = {};var contents = [];if (elem.querySelectorAll('.listbox2').length > 0) {
        listBox = elem.querySelectorAll('.listbox2');
      } else if (elem.querySelectorAll('.listbox').length > 0) {
        listBox = elem.querySelectorAll('.listbox');
      }[].forEach.call(listBox, function (item, index) {
        var Titles;var Title = ysp.customHelper.trim(item.querySelector('table').querySelector('.title_1').textContent);Titles = Title.substring(0, 4);for (var i = 0; i < title.length; i++) {
          if (title[i].indexOf(Titles) != -1) {
            newList.index = index;content = [];href = [];Thref = [];imgFlag = [];if (item.querySelector('table').querySelector('.title_1').querySelector('a')) {
              Thref.push(item.querySelector('table').querySelector('.title_1').querySelector('a').href);
            } //var lists = item.querySelector('ul').querySelectorAll('a'); 
            var lists = item.querySelector('ul').querySelectorAll('li');newList.title = Title;header.push(Title);for (var k = 0; k < lists.length; k++) {
              //console.log(lists[k])
              //var string = ysp.customHelper.trim(lists[k].textContent); 
              var string = lists[k].textContent.trim().replace(/\s*/g, '');if (string.length > 3) {
                //content.push(ysp.customHelper.trim(lists[k].textContent));
                content.push(lists[k].textContent.trim().replace(/\s*/g, '')); //href.push(lists[k].href); 
                href.push(lists[k].querySelector('a').href);
              }newList.context = content;newList.href = href; //new图片标识
              if (lists[k].querySelector('img') == null) {
                imgFlag.push('noImgpicture');
              } else {
                imgFlag.push('yesImgpicture');
              }newList.imgFlag = imgFlag;
            }contents.push({ title: newList.title, titleHref: Thref, content: newList.context, href: newList.href, index: newList.index, //new图片标识
              imgpicture: newList.imgFlag });break;
          }
        }
      });data.contents = contents;return data;
    },
    doAction_uiControl24_E03y0k: function (data, elem) {
      if (data.eventType == 'click') {
        var num = data.dataCustom.aEls;num++;var index = data.dataCustom.divs;var title = data.dataCustom.title;title = ysp.customHelper.trim(title);if (elem.querySelectorAll('.listbox2').length > 0) {
          var aEls = elem.querySelectorAll('.listbox2')[index].querySelector('ul').querySelectorAll('a');
        } else if (elem.querySelectorAll('.listbox').length > 0) {
          var aEls = elem.querySelectorAll('.listbox')[index].querySelector('ul').querySelectorAll('a');
        }for (var i = 0, k = 0; i < aEls.length; i++) {
          var string = ysp.customHelper.trim(aEls[i].textContent);if (string.length > 3) {
            k++;if (title.indexOf(string) !== -1) {
              aEls[i].click();ysp.appMain.showLoading();
            }
          }
        }
      }
    },
    getTemplate_uiControl24_E03y0k: function getTemplate_uiControl24_E03y0k() {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  constructor(props){\n    super(props);\n    this.state={\n      show:true,\n      index:0,\n      open:false,\n      array:['01\u5185\u90E8\u6C9F\u901A','02\u81EA\u7531\u6D41\u7A0B','02\u516C\u6587\u5BA1\u6279\u6D41\u7A0B-\u8463\u4E8B\u957F\u7B7E\u6838','03\u516C\u6587\u5BA1\u6279\u6D41\u7A0B-\u4E3B\u7BA1\u9886\u5BFC\u7B7E\u6838','06\u516C\u6587\u5BA1\u6279\u6D41\u7A0B-\u62A5\u544A\u9605\u77E5\u7C7B\uFF08\u540C\u9001\u603B\u7ECF\u7406\u8463\u4E8B\u957F\uFF09','\u672A\u8003\u52E4\u7533\u62A5\u5BA1\u6279\u6D41\u7A0B\uFF08\u65B0\uFF09','01\u516C\u6587\u5BA1\u6279\u6D41\u7A0B-\u603B\u7ECF\u7406\u7B7E\u6838','\u8BF7\u5047/\u516C\u51FA\u6D41\u7A0B(\u65B0)','01\u5408\u540C\u4F1A\u7B7E\u6D41\u7A0B'],\n    }\n  }\n  // serchValue(string){\n  //   string = '\u516C\u6587'\n  //   var data = this.props.customData.contents;\n  //   [].forEach.call(data,function(item,index){\n  //     \tvar flag = item.some(function(str,index,arr){\n  //       if(str.indexOf(string)){\n  //         return {flag:true,num:index,arr:arr,};\n  //       }\n  //     }) \n  //   })\n  // }\n  onClick=(e)=>{\n    // this.serchValue()\n    if(e.target.nodeName != 'DIV'){\n      e.target = e.target.parentElement;\n    }\n    var num = e.target.dataset.index;\n    this.setState({\n      index:num,\n      open:!this.state.open\n    })\n    if(e.target.dataset.flag == 'false'){\n      e.target.dataset.flag = 'true';\n      this.setState({\n      \tshow:true\n    \t})\n    }else if(e.target.dataset.flag == 'true'){\n      e.target.dataset.flag = 'false';\n      this.setState({\n      \tshow:false\n    \t})\n    }\n    // if(e.target.querySelector('ul').querySelector('li')[num].classList.contains('unactive')){\n    //   e.target.querySelector('ul').querySelector('li')[num].className = 'active';\n    // }else{\n    //   e.target.querySelector('ul').querySelector('li')[num].className = 'unactive';\n    // }\n  }\n  handlerClick=(e)=>{\n    if(e.target.nodeName != 'LI'){\n      e.target = e.target.parentElement;\n    }\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{aEls:e.target.dataset.index,divs:e.target.parentElement.previousSibling.dataset.num,title:e.target.dataset.title},\n        eventType:'click'\n      })\n    }\n  }\n  render(){\n    var _this = this;\n    var  array = this.state.array;\n    var data = this.props.customData.contents || false;\n    [].forEach.call(data,function(item,index){\n      var alist = [];\n      [].forEach.call(item.content,function(content,index){\n        var so = function(value,k,arr){\n          for(var i = 0;i<array.length;i++){\n            if(content.indexOf(array[i]) !== -1){\n            \treturn true;\n          \t}\n          }\n        }\n        var flag = item.content.some(so);\n        if(flag){\n          alist.push(content);\n        }\n      })\n      item.content = alist;\n    })\n    return (\n    \t<div className='ysp-list-content'>\n        \n        {data && data.map((item,index)=>{\n          return(\n          \t<div className='ysp-list-card'>\n            \t<div data-index={index} data-num={item.index} data-flag = 'false' onClick={_this.onClick.bind(_this)} className='ysp-list-card-Title'><span>{item.title}</span><i className='unactive'></i></div>{\n                 <ul className='ysp-list-card-ul'>          \t\n              \t{ item.content.map((d,i)=>{ \n                    if(item.imgpicture[i]=='noImgpicture'){\n\t\t\t\t\t\t\t\t\t\t\treturn (\n                       <li data-title = {d}data-index={i} className='ysp-list-card-lis' onClick={_this.handlerClick.bind(_this)}><a data-href={item.href[i]} className='ysp-list-card-content '>{d}</a></li>\n                     )\n                  }else if(item.imgpicture[i]=='yesImgpicture'){\n                      return (\n                       <li data-title = {d} data-index={i} className='ysp-list-card-lis ' onClick={_this.handlerClick.bind(_this)}><a data-href={item.href[i]} className='ysp-list-card-content '>{d}</a><i className='ysp-list-card-content-img'></i></li>\n                     )     \n                \t}  \n                 })\n                }</ul>\n              }\n            </div>\n          )\n        })}\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.onClick = function (e) {\n      // this.serchValue()\n      if (e.target.nodeName != 'DIV') {\n        e.target = e.target.parentElement;\n      }\n      var num = e.target.dataset.index;\n      _this2.setState({\n        index: num,\n        open: !_this2.state.open\n      });\n      if (e.target.dataset.flag == 'false') {\n        e.target.dataset.flag = 'true';\n        _this2.setState({\n          show: true\n        });\n      } else if (e.target.dataset.flag == 'true') {\n        e.target.dataset.flag = 'false';\n        _this2.setState({\n          show: false\n        });\n      }\n      // if(e.target.querySelector('ul').querySelector('li')[num].classList.contains('unactive')){\n      //   e.target.querySelector('ul').querySelector('li')[num].className = 'active';\n      // }else{\n      //   e.target.querySelector('ul').querySelector('li')[num].className = 'unactive';\n      // }\n    };\n\n    _this2.handlerClick = function (e) {\n      if (e.target.nodeName != 'LI') {\n        e.target = e.target.parentElement;\n      }\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: { aEls: e.target.dataset.index, divs: e.target.parentElement.previousSibling.dataset.num, title: e.target.dataset.title },\n          eventType: 'click'\n        });\n      }\n    };\n\n    _this2.state = {\n      show: true,\n      index: 0,\n      open: false,\n      array: ['01\u5185\u90E8\u6C9F\u901A', '02\u81EA\u7531\u6D41\u7A0B', '02\u516C\u6587\u5BA1\u6279\u6D41\u7A0B-\u8463\u4E8B\u957F\u7B7E\u6838', '03\u516C\u6587\u5BA1\u6279\u6D41\u7A0B-\u4E3B\u7BA1\u9886\u5BFC\u7B7E\u6838', '06\u516C\u6587\u5BA1\u6279\u6D41\u7A0B-\u62A5\u544A\u9605\u77E5\u7C7B\uFF08\u540C\u9001\u603B\u7ECF\u7406\u8463\u4E8B\u957F\uFF09', '\u672A\u8003\u52E4\u7533\u62A5\u5BA1\u6279\u6D41\u7A0B\uFF08\u65B0\uFF09', '01\u516C\u6587\u5BA1\u6279\u6D41\u7A0B-\u603B\u7ECF\u7406\u7B7E\u6838', '\u8BF7\u5047/\u516C\u51FA\u6D41\u7A0B(\u65B0)', '01\u5408\u540C\u4F1A\u7B7E\u6D41\u7A0B']\n    };\n    return _this2;\n  }\n  // serchValue(string){\n  //   string = '\u516C\u6587'\n  //   var data = this.props.customData.contents;\n  //   [].forEach.call(data,function(item,index){\n  //     \tvar flag = item.some(function(str,index,arr){\n  //       if(str.indexOf(string)){\n  //         return {flag:true,num:index,arr:arr,};\n  //       }\n  //     }) \n  //   })\n  // }\n\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var array = this.state.array;\n      var data = this.props.customData.contents || false;\n      [].forEach.call(data, function (item, index) {\n        var alist = [];\n        [].forEach.call(item.content, function (content, index) {\n          var so = function so(value, k, arr) {\n            for (var i = 0; i < array.length; i++) {\n              if (content.indexOf(array[i]) !== -1) {\n                return true;\n              }\n            }\n          };\n          var flag = item.content.some(so);\n          if (flag) {\n            alist.push(content);\n          }\n        });\n        item.content = alist;\n      });\n      return React.createElement(\n        'div',\n        { className: 'ysp-list-content' },\n        data && data.map(function (item, index) {\n          return React.createElement(\n            'div',\n            { className: 'ysp-list-card' },\n            React.createElement(\n              'div',\n              { 'data-index': index, 'data-num': item.index, 'data-flag': 'false', onClick: _this.onClick.bind(_this), className: 'ysp-list-card-Title' },\n              React.createElement(\n                'span',\n                null,\n                item.title\n              ),\n              React.createElement('i', { className: 'unactive' })\n            ),\n            React.createElement(\n              'ul',\n              { className: 'ysp-list-card-ul' },\n              item.content.map(function (d, i) {\n                if (item.imgpicture[i] == 'noImgpicture') {\n                  return React.createElement(\n                    'li',\n                    { 'data-title': d, 'data-index': i, className: 'ysp-list-card-lis', onClick: _this.handlerClick.bind(_this) },\n                    React.createElement(\n                      'a',\n                      { 'data-href': item.href[i], className: 'ysp-list-card-content ' },\n                      d\n                    )\n                  );\n                } else if (item.imgpicture[i] == 'yesImgpicture') {\n                  return React.createElement(\n                    'li',\n                    { 'data-title': d, 'data-index': i, className: 'ysp-list-card-lis ', onClick: _this.handlerClick.bind(_this) },\n                    React.createElement(\n                      'a',\n                      { 'data-href': item.href[i], className: 'ysp-list-card-content ' },\n                      d\n                    ),\n                    React.createElement('i', { className: 'ysp-list-card-content-img' })\n                  );\n                }\n              })\n            )\n          );\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control12_vQC1zM: function getData_control12_vQC1zM(elem) {},

    getData_control13_A4MAN5: function getData_control13_A4MAN5(elem) {},
    doAction_uiControl13_2inZqR: function doAction_uiControl13_2inZqR(data, elem) {},
    getTemplate_uiControl13_2inZqR: function getTemplate_uiControl13_2inZqR() {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div className='background-gray'>\n        \n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    return React.createElement('div', { className: 'background-gray' });\n  }\n});";
    },
    getData_control18_uCPsfD: function (elem) {},
    doAction_uiControl12_DFr8z9: function (data, elem) {},
    getTemplate_uiControl12_DFr8z9: function getTemplate_uiControl12_DFr8z9() {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div className='ysp-list-search'>\n        <input type='text' placeholder='\u8BF7\u8F93\u5165\u5173\u952E\u5B57'/>\n        <i className='ysp-list-search-icon'></i>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      { className: 'ysp-list-search' },\n      React.createElement('input', { type: 'text', placeholder: '\\u8BF7\\u8F93\\u5165\\u5173\\u952E\\u5B57' }),\n      React.createElement('i', { className: 'ysp-list-search-icon' })\n    );\n  }\n});";
    }
  });
})(window, ysp);