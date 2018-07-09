(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control306_KJXe8f: function (elem) {
      if (!elem) {
        return;
      }var data = {};var span = elem.querySelector('span');data.title = span.nextSibling.nextSibling.textContent.trim();return data;
    },
    doAction_uiControl306_VmQcfl: function (data, elem) {},
    getTemplate_uiControl306_VmQcfl: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className='titleH1'>\n          <Header title={data.title}>\n    \t\t\t\t<HeaderLeft>\n      \t\t\t\t<span></span><button onClick={back}>\u8FD4\u56DE</button>\n    \t\t\t\t</HeaderLeft>\n  \t\t\t\t</Header>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'titleH1' },\n      React.createElement(\n        _yspInteriorComponents.Header,\n        { title: data.title },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement('span', null),\n          React.createElement(\n            'button',\n            { onClick: _appRenderer.back },\n            '\\u8FD4\\u56DE'\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control307_zgW0ML: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.title = elem.querySelector("div.title").textContent.trim();data.content = [];var trs = elem.querySelector('table').querySelector('tbody').querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          data.content.push({ leftval: tds[k].querySelector('label').textContent.trim(), rightval: tds[k].querySelector('input').value });
        }
      }return data;
    },
    doAction_uiControl307_n1Nu7X: function (data, elem) {},
    getTemplate_uiControl307_n1Nu7X: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    var target = e.target;\n    if(target.parentElement.parentElement.nextElementSibling.className == 'content disnone'){\n      target.className = 'zhankai';\n      target.parentElement.parentElement.nextElementSibling.className = 'content';\n    }else{\n      target.className = 'shouqi';\n      target.parentElement.parentElement.nextElementSibling.className = 'content disnone'\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function(ele,index){\n      return(\n      \t<div className='contenttit'>\n        \t<div className='contentitem'>{ele.leftval}</div>\n          <div className='contentitem'>{ele.rightval}</div>\n        </div>\n      )\n    })\n    return (\n      <div className='initiator'>\n        <div className='contenttitle'><span></span><p>{data.title}<i className='shouqi' onClick={_this.click}></i></p></div>\n        <div className='content disnone'>{lis}</div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var target = e.target;\n    if (target.parentElement.parentElement.nextElementSibling.className == 'content disnone') {\n      target.className = 'zhankai';\n      target.parentElement.parentElement.nextElementSibling.className = 'content';\n    } else {\n      target.className = 'shouqi';\n      target.parentElement.parentElement.nextElementSibling.className = 'content disnone';\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function (ele, index) {\n      return React.createElement(\n        'div',\n        { className: 'contenttit' },\n        React.createElement(\n          'div',\n          { className: 'contentitem' },\n          ele.leftval\n        ),\n        React.createElement(\n          'div',\n          { className: 'contentitem' },\n          ele.rightval\n        )\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'initiator' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          data.title,\n          React.createElement('i', { className: 'shouqi', onClick: _this.click })\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'content disnone' },\n        lis\n      )\n    );\n  }\n});";
    },

    getData_control310_VRtGWM: function (elem) {
      if (!elem) {
        return;
      }var data = ysp.customHelper.getTableData(elem, ['员工姓名', '工号', '工时类别', '日期', '开始时间', '结束时间', '合计(小时)']);data.title = '加班明细';return data;
    },
    doAction_uiControl310_QPDxJ3: function (data, elem) {},
    getTemplate_uiControl310_QPDxJ3: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var ths = data.titles.map(function(d,i){\n      return(\n      \t<th>{d}</th>\n      )\n    })\n    var trs = data.content.map(function(d,i){\n      var lis = d.map(function(ele,index){\n        return(\n        \t<td>{ele}</td>\n        )\n      })\n      return(\n      \t<tr>{lis}</tr>\n      )\n    })\n    return (\n      <div className='examination'>\n        <div className='contenttitle'><span></span><p>{data.title}</p></div>\n        <div className='contentitem'>\n        \t<table>\n            <thead><tr>{ths}</tr></thead>\n            <tbody>{trs}</tbody>\n          </table>\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    var ths = data.titles.map(function (d, i) {\n      return React.createElement(\n        'th',\n        null,\n        d\n      );\n    });\n    var trs = data.content.map(function (d, i) {\n      var lis = d.map(function (ele, index) {\n        return React.createElement(\n          'td',\n          null,\n          ele\n        );\n      });\n      return React.createElement(\n        'tr',\n        null,\n        lis\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'examination' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'contentitem' },\n        React.createElement(\n          'table',\n          null,\n          React.createElement(\n            'thead',\n            null,\n            React.createElement(\n              'tr',\n              null,\n              ths\n            )\n          ),\n          React.createElement(\n            'tbody',\n            null,\n            trs\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control309_iG4NNI: function (elem) {
      if (!elem) {
        return;
      }var data = {}; // var table = elem.querySelectorAll('table')[0];
      var trs = elem.querySelectorAll('tr');data.title = '基本信息';data.content = [];for (var i = 0; i < trs.length; i++) {
        var arr = [];var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          if (tds[k].querySelector("input[type='text']")) {
            arr.push({ left: tds[k].querySelector('label').textContent.trim(), right: tds[k].querySelector('input').value, readyState: tds[k].querySelector('input').readOnly });
          }if (tds[k].querySelector('textarea')) {
            arr.push({ left: tds[k].querySelector('label').textContent.replace(/\s+/g, ''), right: tds[k].querySelector('textarea').value, type: 'textarea' });
          }if (tds[k].querySelector("input[type='radio']")) {
            arr.push({ left: tds[k].querySelector('label').textContent.replace(/\s+/g, ''), right: [tds[k].querySelectorAll("input[type='radio']")[0] && tds[k].querySelectorAll("input[type='radio']")[0].checked, tds[k].querySelectorAll("input[type='radio']")[1] && tds[k].querySelectorAll("input[type='radio']")[1].checked, tds[k].querySelectorAll("input[type='radio']")[2] && tds[k].querySelectorAll("input[type='radio']")[2].checked], type: 'radio' });
          }
        }data.content.push(arr);
      }return data;
    },
    doAction_uiControl309_otTnUS: function (data, elem) {
      if (data.eventType == 'clickRadio') {
        var check = data.dataCustom[0];var index = data.dataCustom[1];var target = elem.querySelectorAll("input[type='radio']")[index];target.checked = check;
      } else if (data.eventType == 'blur') {
        var index = parseInt(data.dataCustom[0]);var val = data.dataCustom[1];var target = elem.querySelectorAll('tr')[index].querySelectorAll("input");for (var i = 0; i < target.length; i++) {
          if (target[i].readOnly == false) {
            target[i].value = val;
          }
        }
      }
    },
    getTemplate_uiControl309_otTnUS: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function(ele,index){\n      var lisele = ele.map(function(d,i){\n          return(\n          \t<div className='contenttit'>\n            \t<div className='contentitem'>{d.left}</div>\n              {\n                d.right && d.left && d.left == \"\u52A0\u73ED\u5C5E\u4E8E\" ? \n                  <div className='contentitem'>\n                    <span className={d.right[0] == true ? \"ysp-radius-overTime\" : \"\"}\n                      style ={{\"marginRight\": \"8px\" ,\"fontSize\":\"14px\"}}>\n                      \u4E2A\u4EBA\u52A0\u73ED\n                    </span>\n                    <span className={d.right[1] == true ? \"ysp-radius-overTime\" : \"\"}\n                      style={{\"fontSize\":\"14px\"}}>\u96C6\u4F53\u52A0\u73ED</span>\n                  </div>\n                  : d.right && d.left && d.left == \"\u52A0\u73ED\u7C7B\u578B\" ?\n                \t<div className='contentitem'>\n                    <span className={d.right[0] == true ? \"ysp-radius-overTime\" : \"\"} \n                      style ={{\"marginRight\": \"8px\",\"fontSize\":\"14px\"}}>\n                      \u5EF6\u65F6\u52A0\u73ED\n                    </span>\n                    <span className={d.right[1] == true ? \"ysp-radius-overTime\" : \"\"}\n                      style ={{\"marginRight\": \"8px\",\"fontSize\":\"14px\"}}>\u5468\u672B\u52A0\u73ED</span>\n                    <span className={d.right[2] == true ? \"ysp-radius-overTime\" : \"\"}\n                      style={{\"fontSize\":\"14px\"}}>\u6CD5\u5B9A\u8282\u5047\u65E5\u52A0\u73ED</span>\n                  </div>\n                  :\n                \t<div className='contentitem'>\n                  \t<span className={d.right[0] == true ? \"ysp-radius-overTime\" : \"\"}\n                      style ={{\"marginRight\": \"8px\",\"fontSize\":\"14px\"}}>\u662F</span>\n                  \t<span className={d.right[1] == true ? \"ysp-radius-overTime\" : \"\"}\n                      style={{\"fontSize\":\"14px\"}}>\u5426</span>\n                \t</div>\n              }\n              \n            </div>\n          )\n        })\n        return(\n        \t<div>{lisele}</div>\n        )\n    })\n    return (\n      <div className='information'>\n       \t<div className='contenttitle'>\n          <span></span>\n          <p>{data.title}</p>\n        </div>\n        <div className='content'>\n          {lis}</div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function (ele, index) {\n      var lisele = ele.map(function (d, i) {\n        return React.createElement(\n          'div',\n          { className: 'contenttit' },\n          React.createElement(\n            'div',\n            { className: 'contentitem' },\n            d.left\n          ),\n          d.right && d.left && d.left == \"\u52A0\u73ED\u5C5E\u4E8E\" ? React.createElement(\n            'div',\n            { className: 'contentitem' },\n            React.createElement(\n              'span',\n              { className: d.right[0] == true ? \"ysp-radius-overTime\" : \"\",\n                style: { \"marginRight\": \"8px\", \"fontSize\": \"14px\" } },\n              '\\u4E2A\\u4EBA\\u52A0\\u73ED'\n            ),\n            React.createElement(\n              'span',\n              { className: d.right[1] == true ? \"ysp-radius-overTime\" : \"\",\n                style: { \"fontSize\": \"14px\" } },\n              '\\u96C6\\u4F53\\u52A0\\u73ED'\n            )\n          ) : d.right && d.left && d.left == \"\u52A0\u73ED\u7C7B\u578B\" ? React.createElement(\n            'div',\n            { className: 'contentitem' },\n            React.createElement(\n              'span',\n              { className: d.right[0] == true ? \"ysp-radius-overTime\" : \"\",\n                style: { \"marginRight\": \"8px\", \"fontSize\": \"14px\" } },\n              '\\u5EF6\\u65F6\\u52A0\\u73ED'\n            ),\n            React.createElement(\n              'span',\n              { className: d.right[1] == true ? \"ysp-radius-overTime\" : \"\",\n                style: { \"marginRight\": \"8px\", \"fontSize\": \"14px\" } },\n              '\\u5468\\u672B\\u52A0\\u73ED'\n            ),\n            React.createElement(\n              'span',\n              { className: d.right[2] == true ? \"ysp-radius-overTime\" : \"\",\n                style: { \"fontSize\": \"14px\" } },\n              '\\u6CD5\\u5B9A\\u8282\\u5047\\u65E5\\u52A0\\u73ED'\n            )\n          ) : React.createElement(\n            'div',\n            { className: 'contentitem' },\n            React.createElement(\n              'span',\n              { className: d.right[0] == true ? \"ysp-radius-overTime\" : \"\",\n                style: { \"marginRight\": \"8px\", \"fontSize\": \"14px\" } },\n              '\\u662F'\n            ),\n            React.createElement(\n              'span',\n              { className: d.right[1] == true ? \"ysp-radius-overTime\" : \"\",\n                style: { \"fontSize\": \"14px\" } },\n              '\\u5426'\n            )\n          )\n        );\n      });\n      return React.createElement(\n        'div',\n        null,\n        lisele\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'information' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'content' },\n        lis\n      )\n    );\n  }\n});";
    },
    getData_control311_R2OmVR: function (elem) {
      if (!elem) {
        return;
      }var data = ysp.customHelper.getTabledata(elem, ['文件名', '上传人', '上传时间', '版本', '操作']);data.id = elem.nextElementSibling.nextElementSibling.id;data.title = '附件';return data;
    },
    doAction_uiControl311_QaD1sF: function (data, elem) {
      var type = data.eventType;var data = data.customData;if (type == 'commit') {
        // debugger;
        elem.ownerDocument.querySelector("#" + data).click();setTimeout(function () {
          elem.ownerDocument.defaultView.InitAttachmentList();
        }, 1000); // setTimeout(function () {
        //   var url = ysp.appMain.getActiveUrl();
        //   ysp.appMain.reloadPage(url);
        // }, 2000);
      }if (type == 'add') {
        elem.ownerDocument.querySelector("#" + data).previousElementSibling.querySelector('input').click();
      }if (type == 'updel') {
        var tds = elem.querySelectorAll('tbody')[1].querySelectorAll('tr')[data.index].querySelectorAll('td');tds[tds.length - 1].querySelectorAll('a')[data.i].click();
      }
    },
    getTemplate_uiControl311_QaD1sF: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,\n        type = '',\n        data = '';\n    if(target.tagName.toLowerCase() == 'button'){\n      console.log(target.id);\n      if(target.id == 'uploadDiv' ){\n        type = 'commit';\n        data = 'btnFileUpload';\n      }else{\n        type = 'add';\n        data = 'btnFileUpload';\n      }\n    }\n    if(target.tagName.toLowerCase() == 'p'){\n      type = 'updel';\n      data = {\n        index:target.getAttribute('data-index'),\n        i:target.className=='xiazai'?0:1\n      }\n    }\n    if(handler){\n      handler({\n        eventType:type,\n        data:data\n      })\n    }\n  },\n  click:function(e){\n    var target = e.target;\n    if(target.className == 'shang'){\n      target.className = 'xia';\n      var divs = target.parentElement.parentElement.querySelectorAll('div.displnone');\n      for(var i=0;i<divs.length;i++){\n        divs[i].className = 'displblock';\n      }\n    }else{\n      target.className = 'shang';\n      var divs = target.parentElement.parentElement.querySelectorAll('div.displblock');\n      for(var i=0;i<divs.length;i++){\n        divs[i].className = 'displnone';\n      }\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function(ele,index){\n      var list = ele.map(function(d,i){\n        if(i==0){\n          return(\n          \t<div className='titlediv'>\n            \t<div>{'0'+(index+1)}</div>\n              <div>{d}</div>\n              <div onClick={_this.click} className='shang'></div>\n            </div>\n          )\n        }\n        if(i == ele.length-1){\n          if(d.length>2){\n              return(\n              <div className='displnone'>\n                <div className='contentitem contentspan' style={{'width':'100%','text-align-last':'auto','text-align':'center'}}><p className='shanchu' data-index={index} onClick={_this.onClick.bind(_this)}><span></span>{d[2]+d[3]}</p><p data-index={index} className='xiazai' onClick={_this.onClick.bind(_this)}><span></span>{d.length>2?d[0]+d[1]:''}</p></div>\n              </div>\n            )\n          }else{\n             return(\n              <div className='displnone'>\n                <div className='contentitem'><p className='xiazai' data-index={index} onClick={_this.onClick.bind(_this)}><span></span>{d[0]+d[1]}</p></div>\n              </div>\n            )\n          }\n        }\n        return(\n        \t<div className='displnone'>\n          \t<div className='contentitem'>{data.titles[i]}</div>\n            <div className='contentitem'>{d}</div>\n          </div>\n        )\n      })\n      return(\n      \t<div className='contentit'>{list}</div>\n      )\n    })\n    \n    return (\n      <div className='Enclosure'>\n        <div className='contenttitle'>\n          <span className='xia'></span>\n          <p>{data.title}\n            <div>\n              <button onClick={_this.onClick.bind(_this)}>\u9009\u62E9\u6587\u4EF6</button>\n              <button id={data.id} onClick={_this.onClick.bind(_this)}>\u4E0A\u4F20\u6587\u4EF6</button>\n            </div>\n          </p>\n        </div>\n        <div className='content'>\n    \t\t\t{lis}\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        type = '',\n        data = '';\n    if (target.tagName.toLowerCase() == 'button') {\n      console.log(target.id);\n      if (target.id == 'uploadDiv') {\n        type = 'commit';\n        data = 'btnFileUpload';\n      } else {\n        type = 'add';\n        data = 'btnFileUpload';\n      }\n    }\n    if (target.tagName.toLowerCase() == 'p') {\n      type = 'updel';\n      data = {\n        index: target.getAttribute('data-index'),\n        i: target.className == 'xiazai' ? 0 : 1\n      };\n    }\n    if (handler) {\n      handler({\n        eventType: type,\n        data: data\n      });\n    }\n  },\n  click: function click(e) {\n    var target = e.target;\n    if (target.className == 'shang') {\n      target.className = 'xia';\n      var divs = target.parentElement.parentElement.querySelectorAll('div.displnone');\n      for (var i = 0; i < divs.length; i++) {\n        divs[i].className = 'displblock';\n      }\n    } else {\n      target.className = 'shang';\n      var divs = target.parentElement.parentElement.querySelectorAll('div.displblock');\n      for (var i = 0; i < divs.length; i++) {\n        divs[i].className = 'displnone';\n      }\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function (ele, index) {\n      var list = ele.map(function (d, i) {\n        if (i == 0) {\n          return React.createElement(\n            'div',\n            { className: 'titlediv' },\n            React.createElement(\n              'div',\n              null,\n              '0' + (index + 1)\n            ),\n            React.createElement(\n              'div',\n              null,\n              d\n            ),\n            React.createElement('div', { onClick: _this.click, className: 'shang' })\n          );\n        }\n        if (i == ele.length - 1) {\n          if (d.length > 2) {\n            return React.createElement(\n              'div',\n              { className: 'displnone' },\n              React.createElement(\n                'div',\n                { className: 'contentitem contentspan', style: { 'width': '100%', 'text-align-last': 'auto', 'text-align': 'center' } },\n                React.createElement(\n                  'p',\n                  { className: 'shanchu', 'data-index': index, onClick: _this.onClick.bind(_this) },\n                  React.createElement('span', null),\n                  d[2] + d[3]\n                ),\n                React.createElement(\n                  'p',\n                  { 'data-index': index, className: 'xiazai', onClick: _this.onClick.bind(_this) },\n                  React.createElement('span', null),\n                  d.length > 2 ? d[0] + d[1] : ''\n                )\n              )\n            );\n          } else {\n            return React.createElement(\n              'div',\n              { className: 'displnone' },\n              React.createElement(\n                'div',\n                { className: 'contentitem' },\n                React.createElement(\n                  'p',\n                  { className: 'xiazai', 'data-index': index, onClick: _this.onClick.bind(_this) },\n                  React.createElement('span', null),\n                  d[0] + d[1]\n                )\n              )\n            );\n          }\n        }\n        return React.createElement(\n          'div',\n          { className: 'displnone' },\n          React.createElement(\n            'div',\n            { className: 'contentitem' },\n            data.titles[i]\n          ),\n          React.createElement(\n            'div',\n            { className: 'contentitem' },\n            d\n          )\n        );\n      });\n      return React.createElement(\n        'div',\n        { className: 'contentit' },\n        list\n      );\n    });\n\n    return React.createElement(\n      'div',\n      { className: 'Enclosure' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', { className: 'xia' }),\n        React.createElement(\n          'p',\n          null,\n          data.title,\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'button',\n              { onClick: _this.onClick.bind(_this) },\n              '\\u9009\\u62E9\\u6587\\u4EF6'\n            ),\n            React.createElement(\n              'button',\n              { id: data.id, onClick: _this.onClick.bind(_this) },\n              '\\u4E0A\\u4F20\\u6587\\u4EF6'\n            )\n          )\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'content' },\n        lis\n      )\n    );\n  }\n});";
    },
    getData_control312_doZd85: function (elem) {
      if (!elem) {
        return;
      }var data = ysp.customHelper.getTableData(elem, ['环节名称', '人员姓名', '人员公司', '人员部门', '人员职位', '审批操作', '审批时间', '意见']);data.title = '审批日志';return data;
    },
    doAction_uiControl312_3CQlqf: function (data, elem) {},
    getTemplate_uiControl312_3CQlqf: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var ths = data.titles.map(function(d,i){\n      return(\n      \t<th>{d}</th>\n      )\n    })\n    var trs = data.content.map(function(d,i){\n      var lis = d.map(function(ele,index){\n        return(\n        \t<td>{ele}</td>\n        )\n      })\n      return(\n      \t<tr>{lis}</tr>\n      )\n    })\n    return (\n      <div className='examination'>\n        <div className='contenttitle'><span></span><p>{data.title}</p></div>\n        <div className='contentitem'>\n        \t<table>\n            <thead><tr>{ths}</tr></thead>\n            <tbody>{trs}</tbody>\n          </table>\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    var ths = data.titles.map(function (d, i) {\n      return React.createElement(\n        'th',\n        null,\n        d\n      );\n    });\n    var trs = data.content.map(function (d, i) {\n      var lis = d.map(function (ele, index) {\n        return React.createElement(\n          'td',\n          null,\n          ele\n        );\n      });\n      return React.createElement(\n        'tr',\n        null,\n        lis\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'examination' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'contentitem' },\n        React.createElement(\n          'table',\n          null,\n          React.createElement(\n            'thead',\n            null,\n            React.createElement(\n              'tr',\n              null,\n              ths\n            )\n          ),\n          React.createElement(\n            'tbody',\n            null,\n            trs\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control313_z0DXJw: function (elem) {
      if (!elem) {
        return;
      }return elem.textContent;
    },
    doAction_uiControl313_3xQ9CS: function (data, elem) {
      if (data.eventType == 'close') {
        elem.click();
      }
    },
    getTemplate_uiControl313_3xQ9CS: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onclickClose:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'close'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className='ysp-closeBtn-tt'>\n        <button onClick={this.onclickClose.bind(this)}>{this.props.customData}</button>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onclickClose: function onclickClose(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'close'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      'div',\n      { className: 'ysp-closeBtn-tt' },\n      React.createElement(\n        'button',\n        { onClick: this.onclickClose.bind(this) },\n        this.props.customData\n      )\n    );\n  }\n});";
    },
    getData_control314_22NuPa: function (elem) {
      if (!elem) {
        return;
      }var data = {}; // var table = elem.querySelectorAll('table')[0];
      var trs = elem.querySelectorAll('tr');data.title = '';data.content = [];for (var i = 0; i < trs.length; i++) {
        var arr = [];var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          if (tds[k].querySelector("input[type='text']")) {
            arr.push({ left: tds[k].querySelector('label').textContent.trim(), right: tds[k].querySelector('input').value, readyState: tds[k].querySelector('input').readOnly });
          }if (tds[k].querySelector('textarea')) {
            arr.push({ left: tds[k].querySelector('label').textContent.replace(/\s+/g, ''), right: tds[k].querySelector('textarea').value, readyState: tds[k].querySelector('textarea').readOnly, type: 'textarea' });
          }if (tds[k].querySelector("input[type='radio']")) {
            arr.push({ left: tds[k].querySelector('label').textContent.replace(/\s+/g, ''), right: [tds[k].querySelectorAll("input[type='radio']")[0].checked, tds[k].querySelectorAll("input[type='radio']")[1].checked], type: 'radio' });
          }
        }data.content.push(arr);
      }return data;
    },
    doAction_uiControl314_hliO5T: function (data, elem) {
      if (data.eventType == 'blur') {
        var index = parseInt(data.dataCustom[0]);var val = data.dataCustom[1];var target = elem.querySelectorAll('tr')[index].querySelectorAll("input");for (var i = 0; i < target.length; i++) {
          if (target[i].readOnly == false) {
            target[i].value = val;
          }
        }
      }
    },
    getTemplate_uiControl314_hliO5T: function () {
      var selfTemplate = "module.exports = React.createClass({\n  \n  onblur:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'blur',\n        data:[target.dataset.index,target.value]\n      })\n    }\n  },\n \n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n \n    var list = data.content.map(function(ele,index){\n     \n        var lisele = ele.map(function(d,i){\n         if(d.type == 'textarea'){\n              return(\n              \t<div className='contenttit'>\n                \t<div className='contentitem'>{d.left}</div>\n                  <div className='contentitem'><textarea value={d.right} readOnly={d.readyState}></textarea></div>\n                </div>\n              )\n            }else {\n            return(\n                  <div className='contenttit'>\n                    <div className='contentitem'>{d.left}</div>\n                    <div className='contentitem'>\n\n                      {d.readyState==true?<AInput value={d.right} readOnly={d.readyState}/>:<AInput value={d.right} readOnly={d.readyState} onBlur={_this.onblur.bind(_this)} data-index={index}/>}\n\n                    </div>\n                  </div>\n              )\n            }\n        })\n        return(\n        \t<div>{lisele}</div>\n        )\n      \n    })\n    return (\n      <div className='information'>\n        <div className='content'>\n          {list}\n        </div>\n        \n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n\n  onblur: function onblur(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'blur',\n        data: [target.dataset.index, target.value]\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n\n    var list = data.content.map(function (ele, index) {\n\n      var lisele = ele.map(function (d, i) {\n        if (d.type == 'textarea') {\n          return React.createElement(\n            'div',\n            { className: 'contenttit' },\n            React.createElement(\n              'div',\n              { className: 'contentitem' },\n              d.left\n            ),\n            React.createElement(\n              'div',\n              { className: 'contentitem' },\n              React.createElement('textarea', { value: d.right, readOnly: d.readyState })\n            )\n          );\n        } else {\n          return React.createElement(\n            'div',\n            { className: 'contenttit' },\n            React.createElement(\n              'div',\n              { className: 'contentitem' },\n              d.left\n            ),\n            React.createElement(\n              'div',\n              { className: 'contentitem' },\n              d.readyState == true ? React.createElement(AInput, { value: d.right, readOnly: d.readyState }) : React.createElement(AInput, { value: d.right, readOnly: d.readyState, onBlur: _this.onblur.bind(_this), 'data-index': index })\n            )\n          );\n        }\n      });\n      return React.createElement(\n        'div',\n        null,\n        lisele\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'information' },\n      React.createElement(\n        'div',\n        { className: 'content' },\n        list\n      )\n    );\n  }\n});";
    }
  }, "haveDoneOverTime");
})(window, ysp);