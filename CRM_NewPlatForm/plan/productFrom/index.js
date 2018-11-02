'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0_kqy6Dz: function getData_control0_kqy6Dz(elem) {},
    doAction_uiControl0_t3rhII: function doAction_uiControl0_t3rhII(data, elem) {
      if (data.eventType === 'change') {
        var value = data.dataCustom;var btn = elem.querySelector('input[type="text"]');btn.value = value;
      }if (data.eventType === 'click') {
        var btn = elem.querySelector('input[type="button"]');btn.focus();setTimeout(function () {
          btn.click();
        }, 1000);
      }
    },
    getTemplate_uiControl0_t3rhII: function getTemplate_uiControl0_t3rhII() {
      var selfTemplate = 'export default class extends React.Component {\n  handlerChange(e){\n  \tvar value = e.target.value;\n    const handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \tdata: value,\n        eventType: \'change\'\n      })\n    }\n  }\n  handlerClick(){\n  \tconst handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n      \teventType: \'click\'\n      })\n    }\n  }\n\trender(){\n  \treturn (\n    \t<div className=\'ysp-search-custom\'>\n        <div>\n        \t<input type=\'text\' placeholder=\'\u641C\u7D22SKU\u540D\u79F0\' onChange={this.handlerChange.bind(this)} style={{textAlign:\'center\'}}/>\n        \t<span onClick={this.handlerClick.bind(this)}>\u641C\u7D22</span>\n        </div>\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'handlerChange\',\n    value: function handlerChange(e) {\n      var value = e.target.value;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: value,\n          eventType: \'change\'\n        });\n      }\n    }\n  }, {\n    key: \'handlerClick\',\n    value: function handlerClick() {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \'click\'\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-search-custom\' },\n        React.createElement(\n          \'div\',\n          null,\n          React.createElement(\'input\', { type: \'text\', placeholder: \'\\u641C\\u7D22SKU\\u540D\\u79F0\', onChange: this.handlerChange.bind(this), style: { textAlign: \'center\' } }),\n          React.createElement(\n            \'span\',\n            { onClick: this.handlerClick.bind(this) },\n            \'\\u641C\\u7D22\'\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control1_TxCyA1: function (elem) {
      if (!elem) {
        return { data: [], subData: [] };
      }if (elem) {
        var data = elem && ysp.customHelper.getDataInInformation(elem, ['SKU名称', '分公司', '零售价', '大盘价', '可售数量', '发货仓库', '项目', '机型俗称', '颜色']);var subData = elem && ysp.customHelper.getDataInInformation(elem, ['SKU编码', 'SKU名称', '零售价', '大盘价', '可售数量', '上架时间', '下架时间', '发货仓库', '最大购买量', '最小购买量', '最大机型购买', '最小机型购买', '支持使用额度', '是否商城展示']);return { data: data, subData: subData };
      }return undefined;
    },
    doAction_uiControl2_3THdUi: function (data, elem) {
      if (data.eventType === 'click') {
        var index = +data.customData;var table = elem.ownerDocument.querySelector('table[class="l-grid-body-table"]');var trs = table.querySelectorAll('tbody tr');trs[index].click();
      }
    },
    getTemplate_uiControl2_3THdUi: function getTemplate_uiControl2_3THdUi() {
      var selfTemplate = "import {CustomHeader,Dialog} from 'ysp-custom-components';\nexport default class extends React.Component{\n \n  constructor(props){\n  \tsuper(props);\n    this.state = {\n    \topen: false,\n      index:''\n    }\n  }\n \n   handlerClick(e){\n    var index = e.currentTarget.dataset.index;\n     this.setState({open: true,index:index});\n    const handler = this.props.customHandler;\n      if(handler){\n      \thandler({\n          data:index,\n          eventType: 'click'\n        })\n      }\n  }\n  \n  renderSubContent(){\n    var index = +this.state.index;\n    var itemData = this.props.customData.subData[index];\n  \treturn(\n      <div className='ysp-product'>\n        <div className='subContent'>\n        <div className='SKUName'>\n        \t<span className='SKUText'>SKU\u540D\u79F0</span>\n          <span className='itemName'>{itemData[1]}</span>\n        </div>\n        <div className='det'>\n        \t<span>\u8BE6\u60C5</span>\n        </div>\n\t\t\t\t<div className='itemDetail'>\n        \t<span className='textDetail'>SKU\u7F16\u7801</span>\n        \t<span className='details'>{itemData[0]}</span>\n      \t</div>\n\t\t\t\t<div className='itemDetail'>\n        \t<span className='textDetail'>\u96F6\u552E\u4EF7</span>\n        \t<span className='details'>{itemData[2]}</span>\n      \t</div>\n        \n        <div className='itemDetail'>\n        \t<span className='textDetail'>\u5927\u76D8\u4EF7</span>\n        \t<span className='details'>{itemData[3]}</span>\n      \t</div>\n        \n        <div className='itemDetail'>\n        \t<span className='textDetail'>\u53EF\u552E\u6570\u91CF</span>\n        \t<span className='details'>{itemData[4]}</span>\n      \t</div>\n        \n        <div className='itemDetail'>\n        \t<span className='textDetail'>\u4E0A\u67B6\u65F6\u95F4</span>\n        \t<span className='details'>{itemData[5]}</span>\n      \t</div>\n        \n        <div className='itemDetail'>\n        \t<span className='textDetail'>\u4E0B\u67B6\u65F6\u95F4</span>\n        \t<span className='details'>{itemData[6]}</span>\n      \t</div>\n        \n        <div className='itemDetail'>\n        \t<span className='textDetail'>\u53D1\u8D27\u4ED3\u5E93</span>\n        \t<span className='details'>{itemData[7]}</span>\n      \t</div>\n        \n        <div className='itemDetail'>\n        \t<td className='textDetail' style={{width:'100px'}}>\u6700\u5927\u8D2D\u4E70\u91CF</td>\n        \t<td className='details'>{itemData[8]}</td>\n      \t</div>\n        \n        <div className='itemDetail'>\n        \t<span className='textDetail' >\u6700\u5C0F\u8D2D\u4E70\u91CF</span>\n          <span className='details'>{itemData[9]}</span>\n      \t</div>\n        \n        <div className='itemDetail'>\n        \t<td className='textDetail' >\u6700\u5927\u673A\u578B\u8D2D\u4E70</td>\n        \t<td className='details'>{itemData[10]}</td>\n      \t</div>\n        \n        <div className='itemDetail'>\n        \t<span className='textDetail' >\u6700\u5C0F\u673A\u578B\u8D2D\u4E70</span>\n        \t<span className='details'>{itemData[11]}</span>\n      \t</div>\n        \n        <div className='itemDetail'>\n        \t<span className='textDetail' >\u652F\u6301\u4F7F\u7528\u989D\u5EA6</span>\n        \t<span className='details'>{itemData[12]}</span>\n      \t</div>\n        \n        <div className='itemDetail'>\n        \t<span className='textDetail' >\u662F\u5426\u5546\u57CE\u5C55\u793A</span>\n        \t<span className='details'>{itemData[13]}</span>\n      \t</div>\n          <div></div>\n        </div>\n      </div>\n    \t\n      \n    )\n  }\n  \n  renderCardList(){\n  \tvar data = this.props.customData && this.props.customData.data;\n    let _this = this;\n    if(data.length == 0){\n    \treturn (<div className=\"ysp-no-datas\">\n          \t\t\t<div></div>\n          \t\t\t<div>\u6682\u65F6\u6CA1\u6709\u6570\u636E~</div>\n        \t\t\t</div>);\n    }\n    return data.map(function(item,index){\n    \treturn(\n         <div className='ysp-product' onClick={_this.handlerClick.bind(_this)} data-index={index}>\n        \t<div className='flexStyle'>\n            <div>\n            \t <span>{item[6]}{item[7]}{item[8]}</span>\n            </div>\n            \n            <div>\n              <div className='items'>\n            \t\t<div className='itemFont'>\n            \t\t\t<span className='colorItem' >\u96F6\u552E\u4EF7\uFF1A</span>\n            \t\t\t<span>{item[2]}</span>\n            \t\t</div>\n            \t\t<div className='itemFont'>\n                  <span className='colorItem'>\u53EF\u552E\u6570\u91CF\uFF1A</span>\n            \t\t\t<span >{item[4]}</span>\n            \t\t</div>\n          \t\t</div>\n          \n          \t\t<div className='items'>\n           \t \t\t<div className='itemFont'>\n            \t\t\t<span className='colorItem' >\u5927\u76D8\u4EF7\uFF1A</span>\n            \t\t\t<span>{item[3]}</span>\n            \t\t</div>\n            \t\t<div className='itemFont'>\n            \t\t\t<span className='colorItem'>\u53D1\u8D27\u4ED3\u5E93\uFF1A</span>\n            \t\t\t<span>{item[5]}</span>\n            \t\t</div>\n          \t\t</div>\n          \t\n          \t\t<div className='items'>\n          \t\t\t<div className='itemImage'>\n            \t\t</div>\n          \t\t</div>\n            \n        \t\t</div>\n            \n          </div>\n        </div>\n      )\n    })\n  }\n  render(){\n    return (\n      <div>\n        {this.renderCardList()}\n        {this.state.open && \n            <Dialog>\n             <div>\n                <div onClick={()=>{this.setState({open: false})}}>\n               <CustomHeader\n               data={{centerText:\"\u4EA7\u54C1\u4E0A\u4E0B\u67B6\u8BE6\u60C5\",rightText:\"\u7B5B\u9009\"}}\n               backIsShow={true}\n               back={()=>{this.setState({open: false})}}\n                 filterIsShow={false}/></div>\n                <div>\n                 {this.renderSubContent()}\n                </div>\n              </div>\n            </Dialog>\n          }\n      </div>\n    )\n  }\n};";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      open: false,\n      index: \'\'\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'handlerClick\',\n    value: function handlerClick(e) {\n      var index = e.currentTarget.dataset.index;\n      this.setState({ open: true, index: index });\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: index,\n          eventType: \'click\'\n        });\n      }\n    }\n  }, {\n    key: \'renderSubContent\',\n    value: function renderSubContent() {\n      var index = +this.state.index;\n      var itemData = this.props.customData.subData[index];\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-product\' },\n        React.createElement(\n          \'div\',\n          { className: \'subContent\' },\n          React.createElement(\n            \'div\',\n            { className: \'SKUName\' },\n            React.createElement(\n              \'span\',\n              { className: \'SKUText\' },\n              \'SKU\\u540D\\u79F0\'\n            ),\n            React.createElement(\n              \'span\',\n              { className: \'itemName\' },\n              itemData[1]\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'det\' },\n            React.createElement(\n              \'span\',\n              null,\n              \'\\u8BE6\\u60C5\'\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'itemDetail\' },\n            React.createElement(\n              \'span\',\n              { className: \'textDetail\' },\n              \'SKU\\u7F16\\u7801\'\n            ),\n            React.createElement(\n              \'span\',\n              { className: \'details\' },\n              itemData[0]\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'itemDetail\' },\n            React.createElement(\n              \'span\',\n              { className: \'textDetail\' },\n              \'\\u96F6\\u552E\\u4EF7\'\n            ),\n            React.createElement(\n              \'span\',\n              { className: \'details\' },\n              itemData[2]\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'itemDetail\' },\n            React.createElement(\n              \'span\',\n              { className: \'textDetail\' },\n              \'\\u5927\\u76D8\\u4EF7\'\n            ),\n            React.createElement(\n              \'span\',\n              { className: \'details\' },\n              itemData[3]\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'itemDetail\' },\n            React.createElement(\n              \'span\',\n              { className: \'textDetail\' },\n              \'\\u53EF\\u552E\\u6570\\u91CF\'\n            ),\n            React.createElement(\n              \'span\',\n              { className: \'details\' },\n              itemData[4]\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'itemDetail\' },\n            React.createElement(\n              \'span\',\n              { className: \'textDetail\' },\n              \'\\u4E0A\\u67B6\\u65F6\\u95F4\'\n            ),\n            React.createElement(\n              \'span\',\n              { className: \'details\' },\n              itemData[5]\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'itemDetail\' },\n            React.createElement(\n              \'span\',\n              { className: \'textDetail\' },\n              \'\\u4E0B\\u67B6\\u65F6\\u95F4\'\n            ),\n            React.createElement(\n              \'span\',\n              { className: \'details\' },\n              itemData[6]\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'itemDetail\' },\n            React.createElement(\n              \'span\',\n              { className: \'textDetail\' },\n              \'\\u53D1\\u8D27\\u4ED3\\u5E93\'\n            ),\n            React.createElement(\n              \'span\',\n              { className: \'details\' },\n              itemData[7]\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'itemDetail\' },\n            React.createElement(\n              \'td\',\n              { className: \'textDetail\', style: { width: \'100px\' } },\n              \'\\u6700\\u5927\\u8D2D\\u4E70\\u91CF\'\n            ),\n            React.createElement(\n              \'td\',\n              { className: \'details\' },\n              itemData[8]\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'itemDetail\' },\n            React.createElement(\n              \'span\',\n              { className: \'textDetail\' },\n              \'\\u6700\\u5C0F\\u8D2D\\u4E70\\u91CF\'\n            ),\n            React.createElement(\n              \'span\',\n              { className: \'details\' },\n              itemData[9]\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'itemDetail\' },\n            React.createElement(\n              \'td\',\n              { className: \'textDetail\' },\n              \'\\u6700\\u5927\\u673A\\u578B\\u8D2D\\u4E70\'\n            ),\n            React.createElement(\n              \'td\',\n              { className: \'details\' },\n              itemData[10]\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'itemDetail\' },\n            React.createElement(\n              \'span\',\n              { className: \'textDetail\' },\n              \'\\u6700\\u5C0F\\u673A\\u578B\\u8D2D\\u4E70\'\n            ),\n            React.createElement(\n              \'span\',\n              { className: \'details\' },\n              itemData[11]\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'itemDetail\' },\n            React.createElement(\n              \'span\',\n              { className: \'textDetail\' },\n              \'\\u652F\\u6301\\u4F7F\\u7528\\u989D\\u5EA6\'\n            ),\n            React.createElement(\n              \'span\',\n              { className: \'details\' },\n              itemData[12]\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'itemDetail\' },\n            React.createElement(\n              \'span\',\n              { className: \'textDetail\' },\n              \'\\u662F\\u5426\\u5546\\u57CE\\u5C55\\u793A\'\n            ),\n            React.createElement(\n              \'span\',\n              { className: \'details\' },\n              itemData[13]\n            )\n          ),\n          React.createElement(\'div\', null)\n        )\n      );\n    }\n  }, {\n    key: \'renderCardList\',\n    value: function renderCardList() {\n      var data = this.props.customData && this.props.customData.data;\n      var _this = this;\n      if (data.length == 0) {\n        return React.createElement(\n          \'div\',\n          { className: \'ysp-no-datas\' },\n          React.createElement(\'div\', null),\n          React.createElement(\n            \'div\',\n            null,\n            \'\\u6682\\u65F6\\u6CA1\\u6709\\u6570\\u636E~\'\n          )\n        );\n      }\n      return data.map(function (item, index) {\n        return React.createElement(\n          \'div\',\n          { className: \'ysp-product\', onClick: _this.handlerClick.bind(_this), \'data-index\': index },\n          React.createElement(\n            \'div\',\n            { className: \'flexStyle\' },\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'span\',\n                null,\n                item[6],\n                item[7],\n                item[8]\n              )\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'div\',\n                { className: \'items\' },\n                React.createElement(\n                  \'div\',\n                  { className: \'itemFont\' },\n                  React.createElement(\n                    \'span\',\n                    { className: \'colorItem\' },\n                    \'\\u96F6\\u552E\\u4EF7\\uFF1A\'\n                  ),\n                  React.createElement(\n                    \'span\',\n                    null,\n                    item[2]\n                  )\n                ),\n                React.createElement(\n                  \'div\',\n                  { className: \'itemFont\' },\n                  React.createElement(\n                    \'span\',\n                    { className: \'colorItem\' },\n                    \'\\u53EF\\u552E\\u6570\\u91CF\\uFF1A\'\n                  ),\n                  React.createElement(\n                    \'span\',\n                    null,\n                    item[4]\n                  )\n                )\n              ),\n              React.createElement(\n                \'div\',\n                { className: \'items\' },\n                React.createElement(\n                  \'div\',\n                  { className: \'itemFont\' },\n                  React.createElement(\n                    \'span\',\n                    { className: \'colorItem\' },\n                    \'\\u5927\\u76D8\\u4EF7\\uFF1A\'\n                  ),\n                  React.createElement(\n                    \'span\',\n                    null,\n                    item[3]\n                  )\n                ),\n                React.createElement(\n                  \'div\',\n                  { className: \'itemFont\' },\n                  React.createElement(\n                    \'span\',\n                    { className: \'colorItem\' },\n                    \'\\u53D1\\u8D27\\u4ED3\\u5E93\\uFF1A\'\n                  ),\n                  React.createElement(\n                    \'span\',\n                    null,\n                    item[5]\n                  )\n                )\n              ),\n              React.createElement(\n                \'div\',\n                { className: \'items\' },\n                React.createElement(\'div\', { className: \'itemImage\' })\n              )\n            )\n          )\n        );\n      });\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this3 = this;\n\n      return React.createElement(\n        \'div\',\n        null,\n        this.renderCardList(),\n        this.state.open && React.createElement(\n          _yspCustomComponents.Dialog,\n          null,\n          React.createElement(\n            \'div\',\n            null,\n            React.createElement(\n              \'div\',\n              { onClick: function onClick() {\n                  _this3.setState({ open: false });\n                } },\n              React.createElement(_yspCustomComponents.CustomHeader, {\n                data: { centerText: "\u4EA7\u54C1\u4E0A\u4E0B\u67B6\u8BE6\u60C5", rightText: "\u7B5B\u9009" },\n                backIsShow: true,\n                back: function back() {\n                  _this3.setState({ open: false });\n                },\n                filterIsShow: false })\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              this.renderSubContent()\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;';
    },

    getData_control156_dm2GwB: function (elem) {
      if (!elem) {
        return { name: [], content: [] };
      }var content = elem.ownerDocument.querySelector('#content');var row = content.querySelector('.row');var menuDiv = row.querySelector('.sxtj');var buttons = menuDiv.querySelectorAll('button');var contentDiv = row.querySelector('.optionBox');var optionLine = contentDiv.querySelectorAll('.optionLine');var menu = [];var headerChoose = [];var content = [];for (var i = 0; i < buttons.length; i++) {
        menu.push(buttons[i].textContent);if (buttons[i].style.color) {
          headerChoose.push(true);
        } else {
          headerChoose.push(false);
        }
      }var head = { menu: menu, headerChoose: headerChoose };for (var _i = 0; _i < optionLine.length; _i++) {
        var nameDiv = optionLine[_i].querySelector('.optionName');var name = nameDiv.textContent.replace(/ |\n|\t/g, '');var value = [];var isChoose = [];var valueDiv = optionLine[_i].querySelector('.optionValue');var spans = valueDiv.querySelectorAll('span');for (var j = 0; j < spans.length; j++) {
          if (spans[j].textContent != '') {
            value.push(spans[j].textContent);if (spans[j].style.color) {
              isChoose.push(true);
            } else {
              isChoose.push(false);
            }
          }
        }content.push({ name: name, value: value, isChoose: isChoose });
      }return { head: head, content: content };
    },
    doAction_uiControl152_EOvPu9: function (data, elem) {
      if (data.eventType === 'back') {
        ysp.appMain.back();
      }if (data.eventType == 'AndroidBack') {
        ysp.customHelper.AndroidBackFlag = 'PageClose';
      }if (!elem) {
        return undefined;
      }var content = elem.ownerDocument.querySelector('#content');var row = content.querySelector('.row');var menuDiv = row.querySelector('.sxtj');var buttons = menuDiv.querySelectorAll('button');var contentDiv = row.querySelector('.optionBox');var optionLine = contentDiv.querySelectorAll('.optionLine');if (data.eventType === 'choose') {
        var handlerData = data.dataCustom;var index = handlerData.index;var subindex = handlerData.subindex;var type = handlerData.type;if (type === 'menu') {
          buttons[subindex].click();
        } else if (type === 'content') {
          var optionValue = optionLine[index].querySelector('.optionValue');var spans = optionValue.querySelectorAll('span');spans[subindex].click();
        } else {
          console.warn('type undefined');
        }
      }
    },
    getTemplate_uiControl152_EOvPu9: function getTemplate_uiControl152_EOvPu9() {
      var selfTemplate = 'import {Component} from \'react\'; \nimport {CustomHeader} from \'ysp-custom-components\';\nimport {FilterModal} from \'ysp-custom-components\';\nexport default class extends Component{\n  componentDidMount(){\n    var _this = this;\n    ysp.customHelper.AndroidBackFlag = \'PageClose\';\n    const {customHandler} = _this.props;\n    customHandler({eventType:\'AndroidBack\'});\n  }\n   constructor(props){\n   \tsuper(props);\n     this.state = {\n     \tshow: false,\n      open:false\n     }\n   }\n  handlerChoose(e){\n    this.setState({\n      \topen:true\n      })\n  \tvar target = e.target;\n    var index = target.dataset.index;\n    var subindex = target.dataset.subindex;\n    var type = target.dataset.type;\n    const handler = this.props.customHandler;\n \t\tif(handler){\n      handler({\n        data: {\n          index: index,\n          subindex: subindex,\n          type: type\n        },\n        eventType: \'choose\'\n      \t})\n    \t}\n  }\n  handlerDone(){\n  \tthis.setState({\n    \tshow: false\n    })\n  }\n   render = () => {\n       let _this = this;\n     var data = this.props.customData;\n       return (\n         <div>\n           <CustomHeader \n \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 data={{centerText:"\u4EA7\u54C1\u4E0A\u4E0B\u67B6",rightText:"\u7B5B\u9009"}} \n             backIsShow={true} \n             back={()=>{ \n                let handler = _this.props.customHandler;\n                if (handler) {\n                  handler({\n                    eventType: \'back\'\n                  });\n                }\n             }} \n             filterIsShow={true}\n             filter={()=>{this.setState({show: !this.state.show})}}/>\n           <div className=\'stockInquire-fixed\'>\n             {this.state.show ? \n               <FilterModal head={data.head} content={data.content} handlerDone={this.handlerDone.bind(this)} choose={this.handlerChoose.bind(this)} open = {this.state.open}></FilterModal> : undefined}\n           </div>\n          </div>\n       );\n   }\n}\n';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var _this = this;\n      ysp.customHelper.AndroidBackFlag = \'PageClose\';\n      var customHandler = _this.props.customHandler;\n\n      customHandler({ eventType: \'AndroidBack\' });\n    }\n  }]);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.render = function () {\n      var _this = _this2;\n      var data = _this2.props.customData;\n      return React.createElement(\n        \'div\',\n        null,\n        React.createElement(_yspCustomComponents.CustomHeader, {\n          data: { centerText: "\u4EA7\u54C1\u4E0A\u4E0B\u67B6", rightText: "\u7B5B\u9009" },\n          backIsShow: true,\n          back: function back() {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \'back\'\n              });\n            }\n          },\n          filterIsShow: true,\n          filter: function filter() {\n            _this2.setState({ show: !_this2.state.show });\n          } }),\n        React.createElement(\n          \'div\',\n          { className: \'stockInquire-fixed\' },\n          _this2.state.show ? React.createElement(_yspCustomComponents.FilterModal, { head: data.head, content: data.content, handlerDone: _this2.handlerDone.bind(_this2), choose: _this2.handlerChoose.bind(_this2), open: _this2.state.open }) : undefined\n        )\n      );\n    };\n\n    _this2.state = {\n      show: false,\n      open: false\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'handlerChoose\',\n    value: function handlerChoose(e) {\n      this.setState({\n        open: true\n      });\n      var target = e.target;\n      var index = target.dataset.index;\n      var subindex = target.dataset.subindex;\n      var type = target.dataset.type;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: {\n            index: index,\n            subindex: subindex,\n            type: type\n          },\n          eventType: \'choose\'\n        });\n      }\n    }\n  }, {\n    key: \'handlerDone\',\n    value: function handlerDone() {\n      this.setState({\n        show: false\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },

    getData_control44_f9HT0Z: function (elem) {
      if (elem) {
        var data = elem.ownerDocument.querySelector('.l-panel-bar');var prev = data.querySelector('.l-bar-btnprev').querySelector('span').classList.contains('l-disabled');var next = data.querySelector('.l-bar-btnnext').querySelector('span').classList.contains('l-disabled');var trs = elem.ownerDocument.querySelector('.l-scroll').textContent;return { prev: prev, next: next, trs: trs };
      }return -1;
    },
    doAction_uiControl48_gToCLU: function (data, elem) {
      if (data.eventType == 'prevpage') {
        elem.ownerDocument.querySelector('.l-bar-btnprev span').click();
      }if (data.eventType == 'nextpage') {
        elem.ownerDocument.querySelector('.l-bar-btnnext span').click();
      }
    },
    getTemplate_uiControl48_gToCLU: function () {
      var selfTemplate = 'import { Pagination } from \'ysp-custom-components\';\nexport default class extends React.Component {\n  constructor(props){\n    super(props);\n    this.state={\n      nprev:props.customData.prev || false,\n      nnext:props.customData.next || false\n    }\n  }\n  componentWillReceiveProps(nextProps){\n    this.setState({\n      nprev:nextProps.customData.prev,\n      nnext:nextProps.customData.next\n    })\n  }\n  render(){\n    return (\n      <div style={{display: (this.props.customData.trs == "") ? \'none\' : \'block\'}}>\n        <Pagination \n          prev={()=>{\n            const handler = this.props.customHandler;\n            if(handler){\n              handler({\n                eventType: \'prevpage\'\n              });\n            }\n          }}\n          disabledPrev={this.props.customData.prev}\n          next={()=>{\n            const handler = this.props.customHandler;\n            if(handler){\n              handler({\n                eventType: \'nextpage\'\n              })\n            }\n          }}\n           disabledNext={this.props.customData.next}\n          />\n      </div>\n    )\n  }\n}\n\n\n';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.state = {\n      nprev: props.customData.prev || false,\n      nnext: props.customData.next || false\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: \'componentWillReceiveProps\',\n    value: function componentWillReceiveProps(nextProps) {\n      this.setState({\n        nprev: nextProps.customData.prev,\n        nnext: nextProps.customData.next\n      });\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(\n        \'div\',\n        { style: { display: this.props.customData.trs == "" ? \'none\' : \'block\' } },\n        React.createElement(_yspCustomComponents.Pagination, {\n          prev: function prev() {\n            var handler = _this2.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \'prevpage\'\n              });\n            }\n          },\n          disabledPrev: this.props.customData.prev,\n          next: function next() {\n            var handler = _this2.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \'nextpage\'\n              });\n            }\n          },\n          disabledNext: this.props.customData.next\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    }
  }, 'productFrom');
})(window, ysp);