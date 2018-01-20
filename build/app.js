webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {(function () {
    var enterModule = __webpack_require__(1).enterModule;

    enterModule && enterModule(module);
})();

var _default = function _default(date) {
    var createAt = new Date(date);
    var time = new Date().getTime() - createAt.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
    if (time < 0) {
        return '';
    } else if (time / 1000 < 60) {
        return '刚刚';
    } else if (time / 60000 < 60) {
        return parseInt(time / 60000) + '分钟前';
    } else if (time / 3600000 < 24) {
        return parseInt(time / 3600000) + '小时前';
    } else if (time / 86400000 < 31) {
        return parseInt(time / 86400000) + '天前';
    } else if (time / 2592000000 < 12) {
        return parseInt(time / 2592000000) + '月前';
    } else {
        return parseInt(time / 31536000000) + '年前';
    }
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__(1).default;

    var leaveModule = __webpack_require__(1).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, 'default', 'F:/cnode/src/utils/transformDate.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_hashUrl__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_routePrefix__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_scss__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_FlatButton__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_FlatButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_FlatButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_RefreshIndicator__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_RefreshIndicator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_RefreshIndicator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_CircularProgress__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_CircularProgress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_CircularProgress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_styles_MuiThemeProvider__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_styles_MuiThemeProvider__);
(function () {
	var enterModule = __webpack_require__(1).enterModule;

	enterModule && enterModule(module);
})();













var LinkToLogin = function LinkToLogin(props) {
	var dispatch = props.dispatch;

	var masterInfo = window.localStorage.getItem('masterInfo') ? true : false;
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		{ className: __WEBPACK_IMPORTED_MODULE_6__styles_scss___default.a.linkToLogin },
		!masterInfo && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["a" /* Link */],
			{ to: __WEBPACK_IMPORTED_MODULE_3__utils_routePrefix__["a" /* default */] + '/login', className: __WEBPACK_IMPORTED_MODULE_6__styles_scss___default.a.link, onClick: function onClick() {
					dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_hashUrl__["d" /* setTransition */])({ transition: 'move' }));
					dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions__["F" /* setCurrentRouter */])('login'));
				} },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_10_material_ui_styles_MuiThemeProvider___default.a,
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_FlatButton___default.a, { label: '\u70B9\u51FB\u767B\u9646', primary: true })
			)
		),
		masterInfo && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ style: { paddingTop: 100 } },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_10_material_ui_styles_MuiThemeProvider___default.a,
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_CircularProgress___default.a, { size: 60, thickness: 7 })
			)
		)
	);
};

var _default = LinkToLogin;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__(1).default;

	var leaveModule = __webpack_require__(1).leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(LinkToLogin, 'LinkToLogin', 'F:/cnode/src/components/common/LinkToLogin/LinkToLogin.js');
	reactHotLoader.register(_default, 'default', 'F:/cnode/src/components/common/LinkToLogin/LinkToLogin.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Dialog__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_FlatButton__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_FlatButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_FlatButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_RaisedButton__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_RaisedButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles_MuiThemeProvider__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles_MuiThemeProvider__);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();


// import { hashHistory,browserHistory } from 'react-router';





var DialogExample = function DialogExample(props) {
  var handleClose = function handleClose() {
    props.close();
  };
  var handleJump = function handleJump() {
    props.close();
    if (props.link) {
      // hashHistory.push(props.link)
      // browserHistory.push(props.link)
      // pros.location = props.link
      alert('a');
    }
    if (props.action) {
      props.action();
    }
  };
  var actions = props.singleButton ? [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_FlatButton___default.a, { label: '\u786E\u5B9A', primary: true, onTouchTap: handleClose })] : [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_FlatButton___default.a, { label: '\u53D6\u6D88', primary: true, onTouchTap: handleClose }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_FlatButton___default.a, { label: '\u786E\u5B9A', primary: true, onTouchTap: handleJump })];
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_4_material_ui_styles_MuiThemeProvider___default.a,
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_material_ui_Dialog___default.a,
      {
        title: props.title || '',
        actions: actions,
        modal: false,
        open: props.isOpen,
        onRequestClose: handleClose },
      props.children
    )
  );
};

var _default = DialogExample;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DialogExample, 'DialogExample', 'F:/cnode/src/components/common/Dialog.js');
  reactHotLoader.register(_default, 'default', 'F:/cnode/src/components/common/Dialog.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles_MuiThemeProvider__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_CircularProgress__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_CircularProgress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_CircularProgress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_getSize__ = __webpack_require__(43);
(function () {
	var enterModule = __webpack_require__(1).enterModule;

	enterModule && enterModule(module);
})();






var _getSize = Object(__WEBPACK_IMPORTED_MODULE_3__utils_getSize__["a" /* default */])(),
    windowH = _getSize.windowH,
    windowW = _getSize.windowW;

var style = {
	position: 'relative',
	paddingTop: 0.5 * windowH - 40,
	textAlign: 'center'

};
var CircleLoading = function CircleLoading() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		{ style: style, id: 'circle' },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_1_material_ui_styles_MuiThemeProvider___default.a,
			null,
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_CircularProgress___default.a, { size: 60, thickness: 7 })
		)
	);
};

var _default = CircleLoading;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__(1).default;

	var leaveModule = __webpack_require__(1).leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(windowH, 'windowH', 'F:/cnode/src/components/common/CircleLoading.js');
	reactHotLoader.register(windowW, 'windowW', 'F:/cnode/src/components/common/CircleLoading.js');
	reactHotLoader.register(style, 'style', 'F:/cnode/src/components/common/CircleLoading.js');
	reactHotLoader.register(CircleLoading, 'CircleLoading', 'F:/cnode/src/components/common/CircleLoading.js');
	reactHotLoader.register(_default, 'default', 'F:/cnode/src/components/common/CircleLoading.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return REQUEST_TOPICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return RECEIVE_TOPICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SELECT_TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return RECORD_SCROLLT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return REQUEST_ARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return RECEIVE_ARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_CURRENT_TOPICID; });
/* unused harmony export CURRENT_ROUTER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOGIN_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return REQUEST_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return RECEIVE_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return SWITCH_SUPPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH_COMMENT; });
/* unused harmony export SWITCH_COLLECTED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return RECORD_ARTICLE_SCROLLT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return PUBLISH_TOPIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return MARK_ALL_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_COLLECTED_TOPICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return selectTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return fetchTopics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return recordScrollT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return recordArticleScrollT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return fetchArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return switchSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return fetchComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return switchCollected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return setCurrentRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return fetchAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return fetchProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return fetchPublishTopic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return fetchMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return markAllMessages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var REQUEST_TOPICS = 'REQUEST_TOPICS';
var RECEIVE_TOPICS = 'RECEIVE_TOPICS';
var SELECT_TAB = 'SELECT_TAB';
var RECORD_SCROLLT = 'RECORD_SCROLLT';
var REQUEST_ARTICLE = 'REQUEST_ARTICLE';
var RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
var CHANGE_CURRENT_TOPICID = 'CHANGE_CURRENT_TOPICID';
var CURRENT_ROUTER = 'CURRENT_ROUTER';
var LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGIN_FAILED = 'LOGIN_FAILED';
var LOGOUT = 'LOGOUT';
var REQUEST_PROFILE = 'REQUEST_PROFILE';
var RECEIVE_PROFILE = 'RECEIVE_PROFILE';
var SWITCH_SUPPORT = 'SWITCH_SUPPORT';
var FETCH_COMMENT = 'FETCH_COMMENT';
var SWITCH_COLLECTED = 'SWITCH_COLLECTED';
var RECORD_ARTICLE_SCROLLT = 'RECORD_ARTICLE_SCROLLT';
var PUBLISH_TOPIC = 'PUBLISH_TOPIC';
var FETCH_MESSAGE = 'FETCH_MESSAGE';
var MARK_ALL_MESSAGES = 'MARK_ALL_MESSAGES';
var GET_COLLECTED_TOPICS = 'GET_COLLECTED_TOPICS';
// HomePage
var selectTab = function selectTab(tab) {
  return {
    type: SELECT_TAB,
    tab: tab
  };
};

var requestTopics = function requestTopics(tab) {
  return {
    type: REQUEST_TOPICS,
    tab: tab
  };
};

var receiveTopics = function receiveTopics(tab, topics, page, limit) {
  return {
    type: RECEIVE_TOPICS,
    tab: tab,
    topics: topics,
    page: page,
    limit: limit
  };
};

var fetchTopics = function fetchTopics(tab) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;

  return function (dispatch) {
    dispatch(requestTopics(tab));
    __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()('https://cnodejs.org/api/v1/topics?tab=' + tab + '&page=' + page + '&limit=' + limit).then(function (response) {
      return response.json();
    }).then(function (json) {
      return dispatch(receiveTopics(tab, json.data, page, limit));
    });
  };
};

var recordScrollT = function recordScrollT(tab, scrollT) {
  return {
    type: RECORD_SCROLLT,
    tab: tab,
    scrollT: scrollT
  };
};

// Article
var requestArticle = function requestArticle(topicId) {
  return {
    type: REQUEST_ARTICLE,
    topicId: topicId
  };
};
var receiveArticle = function receiveArticle(topicId, article) {
  return {
    type: RECEIVE_ARTICLE,
    topicId: topicId,
    article: article
  };
};
var changeCurrentTopicId = function changeCurrentTopicId(topicId) {
  return {
    type: CHANGE_CURRENT_TOPICID,
    topicId: topicId
  };
};

var recordArticleScrollT = function recordArticleScrollT(topicId, scrollT) {
  return {
    type: RECORD_ARTICLE_SCROLLT,
    topicId: topicId,
    scrollT: scrollT
  };
};
var fetchArticle = function fetchArticle(topicId) {
  var request = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return function (dispatch) {
    if (request) {
      dispatch(requestArticle(topicId));
      __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()('https://cnodejs.org/api/v1/topic/' + topicId).then(function (response) {
        return response.json();
      }).then(function (json) {
        return dispatch(receiveArticle(topicId, json.data));
      });
    } else {
      dispatch(changeCurrentTopicId(topicId));
    }
  };
};

var switchSupport = function switchSupport(accessToken, replyId, index) {
  return function (dispatch) {
    __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()('https://cnodejs.org/api/v1/reply/' + replyId + '/ups', {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: 'accesstoken=' + accessToken
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      return dispatch({
        type: SWITCH_SUPPORT,
        replyId: replyId,
        index: index,
        success: json.success,
        action: json.action
      });
    });
  };
};

var fetchComment = function fetchComment(accessToken, topicId, content, replyId) {
  return function (dispatch) {
    var postConent = replyId ? 'accesstoken=' + accessToken + '&content=' + content + '&replyId=' + replyId : 'accesstoken=' + accessToken + '&content=' + content;
    __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()('https://cnodejs.org/api/v1/topic/' + topicId + '/replies', {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: postConent
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      return dispatch({
        type: FETCH_COMMENT,
        success: json.success,
        replyId: json.reply_id
      });
    });
  };
};

var switchCollected = function switchCollected(isCollected, accessToken, articleId) {
  return function (dispatch) {
    __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()('https://cnodejs.org/api/v1/topic_collect/' + (isCollected ? 'de_collect' : 'collect'), {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: 'accesstoken=' + accessToken + '&topic_Id=' + articleId
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      return dispatch({
        type: SWITCH_COLLECTED,
        success: json.success
      });
    });
  };
};

// Footer
var setCurrentRouter = function setCurrentRouter(router) {
  return {
    type: CURRENT_ROUTER,
    router: router
  };
};

// Login
var fetchAccess = function fetchAccess(accessToken) {
  return function (dispatch) {
    __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()('https://cnodejs.org/api/v1/accesstoken', {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: 'accesstoken=' + accessToken
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      if (json.success) {
        dispatch(loginSucceed(json.loginname, json.id, accessToken));
      } else {
        dispatch(loginFailed(json.error_msg));
      }
    });
  };
};

var loginSucceed = function loginSucceed(loginName, loginId, accessToken) {
  return {
    type: LOGIN_SUCCESS,
    loginName: loginName,
    loginId: loginId,
    accessToken: accessToken
  };
};

var loginFailed = function loginFailed(failedMessage) {
  return {
    type: LOGIN_FAILED,
    failedMessage: failedMessage
  };
};

var logout = function logout() {
  return {
    type: LOGOUT
  };
};

// profile
var requestProfile = function requestProfile(loginname) {
  return {
    type: REQUEST_PROFILE,
    loginname: loginname
  };
};
var receiveProfile = function receiveProfile(loginname, profile) {
  return {
    type: RECEIVE_PROFILE,
    loginname: loginname,
    profile: profile
  };
};
var getCollectedTopics = function getCollectedTopics(userName) {
  return function (dispatch) {
    __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()('https://cnodejs.org/api/v1/topic_collect/' + userName).then(function (response) {
      return response.json();
    }).then(function (json) {
      return dispatch({
        type: GET_COLLECTED_TOPICS,
        success: json.success,
        data: json.data
      });
    });
  };
};
var fetchProfile = function fetchProfile(loginname) {
  return function (dispatch) {
    dispatch(requestProfile(loginname));
    dispatch(getCollectedTopics(loginname));
    __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()('https://cnodejs.org/api/v1/user/' + loginname).then(function (response) {
      return response.json();
    }).then(function (json) {
      return dispatch(receiveProfile(loginname, json.data));
    });
  };
};

// publishTopic
var fetchPublishTopic = function fetchPublishTopic(accessToken, tab, title, content) {
  return function (dispatch) {
    var postConent = 'accesstoken=' + accessToken + '&tab=' + tab + '&content=' + content + '&title=' + title;
    __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()('https://cnodejs.org/api/v1/topics', {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: postConent
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      return dispatch({
        type: PUBLISH_TOPIC,
        success: json.success,
        topicId: json.topic_id
      });
    });
  };
};

// message
var fetchMessage = function fetchMessage(accessToken) {
  return function (dispatch) {
    __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()('https://cnodejs.org/api/v1/messages?accesstoken=' + accessToken).then(function (response) {
      return response.json();
    }).then(function (json) {
      return dispatch({
        type: FETCH_MESSAGE,
        hasReadMessage: json.data.has_read_messages,
        hasNotReadMessage: json.data.hasnot_read_messages
      });
    });
  };
};

var markAllMessages = function markAllMessages(accessToken) {
  return function (dispatch) {
    __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()('https://cnodejs.org/api/v1/message/mark_all', {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: 'accesstoken=' + accessToken
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      return dispatch({
        type: MARK_ALL_MESSAGES,
        isMarked: json.success
      });
    });
  };
};
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(REQUEST_TOPICS, 'REQUEST_TOPICS', 'F:/cnode/src/actions.js');
  reactHotLoader.register(RECEIVE_TOPICS, 'RECEIVE_TOPICS', 'F:/cnode/src/actions.js');
  reactHotLoader.register(SELECT_TAB, 'SELECT_TAB', 'F:/cnode/src/actions.js');
  reactHotLoader.register(RECORD_SCROLLT, 'RECORD_SCROLLT', 'F:/cnode/src/actions.js');
  reactHotLoader.register(REQUEST_ARTICLE, 'REQUEST_ARTICLE', 'F:/cnode/src/actions.js');
  reactHotLoader.register(RECEIVE_ARTICLE, 'RECEIVE_ARTICLE', 'F:/cnode/src/actions.js');
  reactHotLoader.register(CHANGE_CURRENT_TOPICID, 'CHANGE_CURRENT_TOPICID', 'F:/cnode/src/actions.js');
  reactHotLoader.register(CURRENT_ROUTER, 'CURRENT_ROUTER', 'F:/cnode/src/actions.js');
  reactHotLoader.register(LOGIN_SUCCESS, 'LOGIN_SUCCESS', 'F:/cnode/src/actions.js');
  reactHotLoader.register(LOGIN_FAILED, 'LOGIN_FAILED', 'F:/cnode/src/actions.js');
  reactHotLoader.register(LOGOUT, 'LOGOUT', 'F:/cnode/src/actions.js');
  reactHotLoader.register(REQUEST_PROFILE, 'REQUEST_PROFILE', 'F:/cnode/src/actions.js');
  reactHotLoader.register(RECEIVE_PROFILE, 'RECEIVE_PROFILE', 'F:/cnode/src/actions.js');
  reactHotLoader.register(SWITCH_SUPPORT, 'SWITCH_SUPPORT', 'F:/cnode/src/actions.js');
  reactHotLoader.register(FETCH_COMMENT, 'FETCH_COMMENT', 'F:/cnode/src/actions.js');
  reactHotLoader.register(SWITCH_COLLECTED, 'SWITCH_COLLECTED', 'F:/cnode/src/actions.js');
  reactHotLoader.register(RECORD_ARTICLE_SCROLLT, 'RECORD_ARTICLE_SCROLLT', 'F:/cnode/src/actions.js');
  reactHotLoader.register(PUBLISH_TOPIC, 'PUBLISH_TOPIC', 'F:/cnode/src/actions.js');
  reactHotLoader.register(FETCH_MESSAGE, 'FETCH_MESSAGE', 'F:/cnode/src/actions.js');
  reactHotLoader.register(MARK_ALL_MESSAGES, 'MARK_ALL_MESSAGES', 'F:/cnode/src/actions.js');
  reactHotLoader.register(GET_COLLECTED_TOPICS, 'GET_COLLECTED_TOPICS', 'F:/cnode/src/actions.js');
  reactHotLoader.register(selectTab, 'selectTab', 'F:/cnode/src/actions.js');
  reactHotLoader.register(requestTopics, 'requestTopics', 'F:/cnode/src/actions.js');
  reactHotLoader.register(receiveTopics, 'receiveTopics', 'F:/cnode/src/actions.js');
  reactHotLoader.register(fetchTopics, 'fetchTopics', 'F:/cnode/src/actions.js');
  reactHotLoader.register(recordScrollT, 'recordScrollT', 'F:/cnode/src/actions.js');
  reactHotLoader.register(requestArticle, 'requestArticle', 'F:/cnode/src/actions.js');
  reactHotLoader.register(receiveArticle, 'receiveArticle', 'F:/cnode/src/actions.js');
  reactHotLoader.register(changeCurrentTopicId, 'changeCurrentTopicId', 'F:/cnode/src/actions.js');
  reactHotLoader.register(recordArticleScrollT, 'recordArticleScrollT', 'F:/cnode/src/actions.js');
  reactHotLoader.register(fetchArticle, 'fetchArticle', 'F:/cnode/src/actions.js');
  reactHotLoader.register(switchSupport, 'switchSupport', 'F:/cnode/src/actions.js');
  reactHotLoader.register(fetchComment, 'fetchComment', 'F:/cnode/src/actions.js');
  reactHotLoader.register(switchCollected, 'switchCollected', 'F:/cnode/src/actions.js');
  reactHotLoader.register(setCurrentRouter, 'setCurrentRouter', 'F:/cnode/src/actions.js');
  reactHotLoader.register(fetchAccess, 'fetchAccess', 'F:/cnode/src/actions.js');
  reactHotLoader.register(loginSucceed, 'loginSucceed', 'F:/cnode/src/actions.js');
  reactHotLoader.register(loginFailed, 'loginFailed', 'F:/cnode/src/actions.js');
  reactHotLoader.register(logout, 'logout', 'F:/cnode/src/actions.js');
  reactHotLoader.register(requestProfile, 'requestProfile', 'F:/cnode/src/actions.js');
  reactHotLoader.register(receiveProfile, 'receiveProfile', 'F:/cnode/src/actions.js');
  reactHotLoader.register(getCollectedTopics, 'getCollectedTopics', 'F:/cnode/src/actions.js');
  reactHotLoader.register(fetchProfile, 'fetchProfile', 'F:/cnode/src/actions.js');
  reactHotLoader.register(fetchPublishTopic, 'fetchPublishTopic', 'F:/cnode/src/actions.js');
  reactHotLoader.register(fetchMessage, 'fetchMessage', 'F:/cnode/src/actions.js');
  reactHotLoader.register(markAllMessages, 'markAllMessages', 'F:/cnode/src/actions.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLEAR_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FETCH_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH_END; });
/* unused harmony export fetchStart */
/* unused harmony export fetchEnd */
/* unused harmony export fetchError */
/* unused harmony export clearError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_urlPrefix__ = __webpack_require__(561);
(function () {
    var enterModule = __webpack_require__(1).enterModule;

    enterModule && enterModule(module);
})();



var FETCH_ERROR = 'FETCH_ERROR';
var CLEAR_ERROR = 'CLEAR_ERROR';
var FETCH_START = 'FETCH_START';
var FETCH_END = 'FETCH_END';

var fetchStart = function fetchStart() {
    return {
        type: FETCH_START
    };
};

var fetchEnd = function fetchEnd() {
    return {
        type: FETCH_END
    };
};

var fetchError = function fetchError(e) {
    return {
        type: FETCH_ERROR,
        data: e
    };
};

var clearError = function clearError() {
    return {
        type: CLEAR_ERROR
    };
};
;

(function () {
    var reactHotLoader = __webpack_require__(1).default;

    var leaveModule = __webpack_require__(1).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(FETCH_ERROR, 'FETCH_ERROR', 'F:/cnode/src/actions/fetchError.js');
    reactHotLoader.register(CLEAR_ERROR, 'CLEAR_ERROR', 'F:/cnode/src/actions/fetchError.js');
    reactHotLoader.register(FETCH_START, 'FETCH_START', 'F:/cnode/src/actions/fetchError.js');
    reactHotLoader.register(FETCH_END, 'FETCH_END', 'F:/cnode/src/actions/fetchError.js');
    reactHotLoader.register(fetchStart, 'fetchStart', 'F:/cnode/src/actions/fetchError.js');
    reactHotLoader.register(fetchEnd, 'fetchEnd', 'F:/cnode/src/actions/fetchError.js');
    reactHotLoader.register(fetchError, 'fetchError', 'F:/cnode/src/actions/fetchError.js');
    reactHotLoader.register(clearError, 'clearError', 'F:/cnode/src/actions/fetchError.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function () {
    var enterModule = __webpack_require__(1).enterModule;

    enterModule && enterModule(module);
})();

module.exports = {
    style: {
        redbox: {
            boxSizing: 'border-box',
            fontFamily: 'sans-serif',
            position: 'fixed',
            padding: 10,
            top: '0px',
            left: '0px',
            bottom: '0px',
            right: '0px',
            width: '100%',
            background: 'rgba(0, 0, 0, 0.75)',
            color: 'red',
            zIndex: 9999,
            textAlign: 'left',
            fontSize: '16px',
            lineHeight: 1.2
        }
    }
};
;

(function () {
    var reactHotLoader = __webpack_require__(1).default;

    var leaveModule = __webpack_require__(1).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(168)(module)))

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redbox_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_routePrefix__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_hashUrl__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_scss__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_LinkToLogin_LinkToLogin__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_transformDate__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_classnames__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_List__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_Divider__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_material_ui_styles_MuiThemeProvider__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_isomorphic_fetch__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_isomorphic_fetch__);





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Content: {
		displayName: 'Content'
	}
};

var _reactTransformCatchErrors2 = __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default()({
	filename: 'F:/cnode/src/components/Article/Content/Content.js',
	components: _components,
	locals: [],
	imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_1_redbox_react___default.a, __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default.a]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformCatchErrors2(Component, id);
	};
}

(function () {
	var enterModule = __webpack_require__(1).enterModule;

	enterModule && enterModule(module);
})();
















var Content = _wrapComponent('Content')((_dec = Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["b" /* connect */])(), _dec(_class = function (_Component) {
	_inherits(Content, _Component);

	function Content() {
		_classCallCheck(this, Content);

		var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this));

		_this.state = {
			isCollected: false
		};
		return _this;
	}

	_createClass(Content, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.update(this.props);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(newProps) {
			if (this.props.collectedTopics.userName !== newProps.collectedTopics.userName) {
				this.update(newProps);
			}
		}
	}, {
		key: 'update',
		value: function update(props) {
			var article = props.article,
			    login = props.login,
			    collectedTopics = props.collectedTopics;

			if (login.succeed && collectedTopics.length !== 0) {
				var isCollected = collectedTopics.some(function (topic) {
					return article.id === topic.id;
				});
				this.setState({
					isCollected: isCollected
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    article = _props.article,
			    dispatch = _props.dispatch,
			    fetchProfile = _props.fetchProfile,
			    login = _props.login,
			    collectedTopics = _props.collectedTopics,
			    profile = _props.profile;

			return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_15_material_ui_styles_MuiThemeProvider___default.a,
				null,
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_13_material_ui_List__["List"],
					null,
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
						'div',
						{ style: { margin: '-8px 0' } },
						__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_13_material_ui_List__["ListItem"],
							null,
							__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
								'div',
								{ style: { margin: -16 } },
								__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
									'div',
									{ className: __WEBPACK_IMPORTED_MODULE_9__styles_scss___default.a.head },
									__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
										'div',
										{ className: __WEBPACK_IMPORTED_MODULE_9__styles_scss___default.a.imgbox },
										__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: article.author.avatar_url, alt: article.author.loginname })
									),
									__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
										'div',
										{ className: __WEBPACK_IMPORTED_MODULE_9__styles_scss___default.a.info },
										__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["a" /* Link */],
											{ to: __WEBPACK_IMPORTED_MODULE_6__utils_routePrefix__["a" /* default */] + '/profile', onClick: function onClick(e) {
													_this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions_hashUrl__["d" /* setTransition */])({ transition: 'move' }));
													if (profile.loginname !== article.author.loginname) {
														dispatch(fetchProfile(article.author.loginname));
													}
												} },
											__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
												'span',
												null,
												article.author.loginname
											)
										),
										__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
											'span',
											{ style: { float: 'right' } },
											'\u53D1\u8868\u4E8E',
											Object(__WEBPACK_IMPORTED_MODULE_11__utils_transformDate__["a" /* default */])(article.create_at)
										)
									),
									__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
										'div',
										{ className: __WEBPACK_IMPORTED_MODULE_9__styles_scss___default.a.info },
										login.succeed && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
											'span',
											null,
											__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
												'span',
												{ style: { marginRight: 5 } },
												'\u6536\u85CF'
											),
											__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('i', { className: 'iconfont', dangerouslySetInnerHTML: { __html: '&#xe600;' }, style: {
													height: 16, lineHeight: '16px', fontSize: '15px',
													color: this.state.isCollected ? 'red' : 'black'
												}, onClick: function onClick(e) {
													_this2.setState({
														isCollected: !_this2.state.isCollected
													});
													dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__actions__["G" /* switchCollected */])(_this2.state.isCollected, login.accessToken, article.id));
													// fetch(`https://cnodejs.org/api/v1/topic_collect/${this.state.isCollected?'de_collect':'collect'}`, {
													//         method: 'POST',
													//         headers: {
													//             "Content-Type": "application/x-www-form-urlencoded"
													//         },
													//         body: `accesstoken=${login.accessToken}&topic_Id=${article.id}`
													//     })
												} })
										),
										__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
											'span',
											{ style: { float: 'right' } },
											__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('i', { className: 'iconfont', dangerouslySetInnerHTML: { __html: '&#xe6ae;' }, style: { fontSize: '18px', color: 'grey' } }),
											article.visit_count
										),
										__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
											'span',
											{ style: { float: 'right', marginRight: 10 } },
											__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('i', { className: 'iconfont', dangerouslySetInnerHTML: { __html: '&#xe63f;' }, style: { fontSize: '14px', color: 'grey' } }),
											article.reply_count
										)
									)
								)
							)
						),
						__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_13_material_ui_List__["ListItem"],
							null,
							__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
								'div',
								{ className: __WEBPACK_IMPORTED_MODULE_9__styles_scss___default.a.title },
								article.title
							)
						),
						__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_material_ui_Divider___default.a, null),
						__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_13_material_ui_List__["ListItem"],
							{ style: { lineHeight: 'auto' } },
							__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
								'div',
								{ style: { margin: -16 } },
								__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_9__styles_scss___default.a.main + ' markdown-body', dangerouslySetInnerHTML: { __html: article.content } })
							)
						)
					)
				)
			);
		}
	}, {
		key: '__reactstandin__regenerateByEval',
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return Content;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"])) || _class));

var _default = Content;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__(1).default;

	var leaveModule = __webpack_require__(1).leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Content, 'Content', 'F:/cnode/src/components/Article/Content/Content.js');
	reactHotLoader.register(_default, 'default', 'F:/cnode/src/components/Article/Content/Content.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redbox_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_routePrefix__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_scss__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_hashUrl__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_transformDate__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_getSize__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_LinkToLogin_LinkToLogin__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_Dialog__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_classnames__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_material_ui_List__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_material_ui_Divider__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_material_ui_styles_MuiThemeProvider__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_material_ui_TextField__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_material_ui_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_material_ui_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_material_ui_RaisedButton__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_material_ui_RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_material_ui_RaisedButton__);





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Reply: {
		displayName: 'Reply'
	},
	NeedComment: {
		displayName: 'NeedComment'
	}
};

var _reactTransformCatchErrors2 = __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default()({
	filename: 'F:/cnode/src/components/Article/Reply/Reply.js',
	components: _components,
	locals: [],
	imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_1_redbox_react___default.a, __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default.a]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformCatchErrors2(Component, id);
	};
}

(function () {
	var enterModule = __webpack_require__(1).enterModule;

	enterModule && enterModule(module);
})();



















var Reply = _wrapComponent('Reply')((_dec = Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["b" /* connect */])(), _dec(_class = function (_Component) {
	_inherits(Reply, _Component);

	function Reply() {
		_classCallCheck(this, Reply);

		var _this = _possibleConstructorReturn(this, (Reply.__proto__ || Object.getPrototypeOf(Reply)).call(this));

		_this.supportState = function (replies, login) {
			var isSupported = replies.map(function (reply) {
				return reply.ups.some(function (up) {
					return up === login.loginId;
				});
			});
			var supportNum = replies.map(function (reply) {
				return reply.ups.length;
			});
			_this.setState({ isSupported: isSupported, supportNum: supportNum });
		};

		_this.closeDialog = function () {
			_this.setState({
				openDialog: false
			});
		};

		_this.state = {
			isSupported: [],
			supportNum: [],
			height: [],
			name: [],
			openDialog: false
		};
		return _this;
	}

	_createClass(Reply, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _props = this.props,
			    replies = _props.replies,
			    login = _props.login;

			this.supportState(replies, login);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(newProps) {
			var switchSupportInfo = newProps.switchSupportInfo,
			    replies = newProps.replies,
			    login = newProps.login,
			    isCommented = newProps.isCommented,
			    currentTopicId = newProps.currentTopicId,
			    dispatch = newProps.dispatch;

			if (this.state.height.length !== 0) {
				this.setState({
					height: [],
					name: []
				});
			}
			if (replies.length !== this.props.replies.length) {
				this.supportState(replies, login);
			}
			if (isCommented && this.props.isCommented !== isCommented) {
				dispatch(Object(__WEBPACK_IMPORTED_MODULE_9__actions__["u" /* fetchArticle */])(currentTopicId));
			}
			// if(switchSupportInfo){
			// 	if(!this.props.switchSupportInfo || !(this.props.switchSupportInfo.action===switchSupportInfo.action && this.props.switchSupportInfo.index===switchSupportInfo.index)){
			// 		if(switchSupportInfo.success){
			// 			let isSupported = this.state.isSupported;
			// 			let supportNum = this.state.supportNum;
			// 			isSupported[switchSupportInfo.index] = switchSupportInfo.action === 'up';
			// 			switchSupportInfo.action === 'up' ? ++supportNum[switchSupportInfo.index] : --supportNum[switchSupportInfo.index]
			// 			this.setState({
			// 				isSupported,
			// 				supportNum
			// 			})
			// 		}else{	
			// 		}
			// 	}
			// }
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props2 = this.props,
			    profile = _props2.profile,
			    replies = _props2.replies,
			    dispatch = _props2.dispatch,
			    login = _props2.login,
			    switchSupportInfo = _props2.switchSupportInfo,
			    currentTopicId = _props2.currentTopicId;

			return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
				'div',
				{ className: __WEBPACK_IMPORTED_MODULE_7__styles_scss___default.a.reply },
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_13__common_Dialog__["a" /* default */],
					{ isOpen: this.state.openDialog, close: this.closeDialog, singleButton: true },
					'\u4E0D\u80FD\u7ED9\u81EA\u5DF1\u70B9\u8D5E\uFF01'
				),
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					'div',
					{ style: { margin: '-8px 0' } },
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_17_material_ui_styles_MuiThemeProvider___default.a,
						null,
						__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_15_material_ui_List__["List"],
							null,
							__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
								__WEBPACK_IMPORTED_MODULE_15_material_ui_List__["ListItem"],
								null,
								__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
									'div',
									{ style: { margin: -16 } },
									__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
										'h2',
										null,
										'\u5171\u6709',
										replies.length,
										'\u6761\u56DE\u590D'
									)
								)
							),
							replies.map(function (reply, index) {
								return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
									'div',
									{ key: index },
									__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
										__WEBPACK_IMPORTED_MODULE_15_material_ui_List__["ListItem"],
										null,
										__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
											'div',
											{ className: __WEBPACK_IMPORTED_MODULE_7__styles_scss___default.a.author },
											__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: reply.author.avatar_url, alt: reply.author.loginname }),
											__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
												'div',
												{ style: { textAlign: 'center', paddingTop: 10 } },
												index + 1,
												'\u697C'
											)
										),
										__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
											'div',
											{ className: __WEBPACK_IMPORTED_MODULE_7__styles_scss___default.a.main },
											__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
												'div',
												{ className: __WEBPACK_IMPORTED_MODULE_7__styles_scss___default.a.item },
												__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["a" /* Link */],
													{ to: __WEBPACK_IMPORTED_MODULE_6__utils_routePrefix__["a" /* default */] + '/profile', onClick: function onClick(e) {
															_this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__actions_hashUrl__["d" /* setTransition */])({ transition: 'move' }));
															if (profile.loginname !== reply.author.loginname) {
																dispatch(Object(__WEBPACK_IMPORTED_MODULE_9__actions__["x" /* fetchProfile */])(reply.author.loginname));
															}
														} },
													reply.author.loginname
												),
												__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
													'span',
													{ style: { float: 'right' } },
													Object(__WEBPACK_IMPORTED_MODULE_10__utils_transformDate__["a" /* default */])(reply.create_at)
												)
											),
											__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_7__styles_scss___default.a.item + ' markdown-text', dangerouslySetInnerHTML: { __html: reply.content }, style: { lineHeight: '21px' } }),
											__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
												'div',
												{ className: __WEBPACK_IMPORTED_MODULE_7__styles_scss___default.a.item },
												__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
													'div',
													{ style: { float: 'right' } },
													__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
														'span',
														{ onClick: function onClick(e) {
																var heightArr = [];
																var nameArr = [];
																heightArr[index] = _this2.state.height[index] ? 0 : 120;
																nameArr[index] = '@' + reply.author.loginname + ' ';
																_this2.setState({
																	height: heightArr,
																	name: nameArr
																});
															}, style: { cursor: 'pointer', marginRight: 10 } },
														'\u56DE\u590D'
													),
													__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
														'span',
														null,
														__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('i', { className: 'iconfont', dangerouslySetInnerHTML: { __html: '&#xe610;' }, onClick: function onClick(e) {
																e.stopPropagation();
																if (login.loginId) {
																	if (reply.author.loginname !== login.loginName) {
																		var _getSize = Object(__WEBPACK_IMPORTED_MODULE_11__utils_getSize__["a" /* default */])(),
																		    scrollT = _getSize.scrollT;
																		// 点赞的时候也会发送数据请求，所以Article组件会刷新，如果不保存位置的话，Article的位置会变成上次记录的位置或者默认位置0


																		dispatch(Object(__WEBPACK_IMPORTED_MODULE_9__actions__["C" /* recordArticleScrollT */])(currentTopicId, scrollT));

																		var isSupported = _this2.state.isSupported;
																		var supportNum = _this2.state.supportNum;
																		isSupported[index] ? --supportNum[index] : ++supportNum[index];
																		isSupported[index] = !isSupported[index];
																		_this2.setState({
																			isSupported: isSupported,
																			supportNum: supportNum
																		});
																		dispatch(Object(__WEBPACK_IMPORTED_MODULE_9__actions__["H" /* switchSupport */])(login.accessToken, reply.id, index));
																	} else {
																		_this2.setState({
																			openDialog: true
																		});
																	}
																} else {
																	var heightArr = [];
																	heightArr[index] = _this2.state.height[index] ? 0 : 150;
																	_this2.setState({
																		height: heightArr
																	});
																}
															}, style: { color: _this2.state.isSupported[index] ? 'red' : 'black', cursor: 'pointer' }
														}),
														_this2.state.supportNum[index]
													)
												)
											),
											__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(NeedComment, _extends({ login: login, dispatch: dispatch, currentTopicId: currentTopicId }, {
												pHeight: _this2.state.height[index], defaultValue: _this2.state.name[index] }))
										)
									),
									__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16_material_ui_Divider___default.a, null)
								);
							})
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_17_material_ui_styles_MuiThemeProvider___default.a,
					null,
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_15_material_ui_List__["ListItem"],
						null,
						__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(NeedComment, _extends({ login: login, dispatch: dispatch, currentTopicId: currentTopicId }, { pHeight: '150px' }))
					)
				)
			);
		}
	}, {
		key: '__reactstandin__regenerateByEval',
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return Reply;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"])) || _class));

var NeedComment = _wrapComponent('NeedComment')(function (_Component2) {
	_inherits(NeedComment, _Component2);

	function NeedComment() {
		_classCallCheck(this, NeedComment);

		return _possibleConstructorReturn(this, (NeedComment.__proto__ || Object.getPrototypeOf(NeedComment)).apply(this, arguments));
	}

	_createClass(NeedComment, [{
		key: 'render',
		value: function render() {
			var _this4 = this;

			var _props3 = this.props,
			    login = _props3.login,
			    dispatch = _props3.dispatch,
			    currentTopicId = _props3.currentTopicId,
			    pHeight = _props3.pHeight;

			var sHeight = pHeight ? pHeight : 0;
			var style = pHeight ? { overflow: 'hidden', minHeight: pHeight } : { overflow: 'hidden', height: 0
				// const tail = '<b>—— —— 来自lumia2046专版客户端</b>'
			};var tail = '<p style="text-align:right"><a href="https://github.com/lumia2046/cnode"> — — 来自lumia2046-react-cnode</a></p>';
			if (login.loginId) {
				return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					'div',
					{ style: style, className: __WEBPACK_IMPORTED_MODULE_7__styles_scss___default.a.textarea },
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_17_material_ui_styles_MuiThemeProvider___default.a,
						null,
						__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
							'form',
							{ className: __WEBPACK_IMPORTED_MODULE_7__styles_scss___default.a.form },
							__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18_material_ui_TextField___default.a, { hintText: this.props.defaultValue || '请输入内容', multiLine: true, ref: 'textarea',
								underlineStyle: { color: '#00BCD4' }, onClick: function onClick(e) {
									var defaultValue = _this4.props.defaultValue || '';
									e.target.value = e.target.value || defaultValue;
								}
							}),
							__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', null),
							__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19_material_ui_RaisedButton___default.a, { label: '\u56DE\u590D', primary: true, onClick: function onClick(e) {
									e.preventDefault();
									var textarea = _this4.refs.textarea.input.refs.input.value + tail;
									if (!textarea.trim()) {
										return null;
									}

									var _getSize2 = Object(__WEBPACK_IMPORTED_MODULE_11__utils_getSize__["a" /* default */])(),
									    scrollT = _getSize2.scrollT,
									    contentH = _getSize2.contentH,
									    windowH = _getSize2.windowH;

									dispatch(Object(__WEBPACK_IMPORTED_MODULE_9__actions__["v" /* fetchComment */])(login.accessToken, currentTopicId, textarea));
									if (pHeight === 120) {
										dispatch(Object(__WEBPACK_IMPORTED_MODULE_9__actions__["C" /* recordArticleScrollT */])(currentTopicId, contentH - windowH));
									} else {
										dispatch(Object(__WEBPACK_IMPORTED_MODULE_9__actions__["C" /* recordArticleScrollT */])(currentTopicId, scrollT));
									}
									_this4.refs.textarea.input.refs.input.value = '';
								} })
						)
					)
				);
			} else {
				return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					'div',
					{ style: { overflow: 'hidden', height: sHeight, lineHeight: sHeight + 'px' }, className: __WEBPACK_IMPORTED_MODULE_7__styles_scss___default.a.textarea },
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__common_LinkToLogin_LinkToLogin__["a" /* default */], { dispatch: dispatch })
				);
			}
		}
	}, {
		key: '__reactstandin__regenerateByEval',
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return NeedComment;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]));

var _default = Reply;

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__(1).default;

	var leaveModule = __webpack_require__(1).leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Reply, 'Reply', 'F:/cnode/src/components/Article/Reply/Reply.js');
	reactHotLoader.register(NeedComment, 'NeedComment', 'F:/cnode/src/components/Article/Reply/Reply.js');
	reactHotLoader.register(_default, 'default', 'F:/cnode/src/components/Article/Reply/Reply.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_routePrefix__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_scss__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_hashUrl__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_transformDate__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_styles_MuiThemeProvider__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Avatar__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_List__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Subheader__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Subheader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Subheader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Divider__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_Divider__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
	var enterModule = __webpack_require__(1).enterModule;

	enterModule && enterModule(module);
})();













var Profile = function Profile(props) {
	var collectedTopics = props.collectedTopics,
	    profile = props.profile;
	var avatar_url = profile.avatar_url,
	    create_at = profile.create_at,
	    loginname = profile.loginname,
	    recent_replies = profile.recent_replies,
	    recent_topics = profile.recent_topics,
	    score = profile.score;

	recent_replies = recent_replies ? recent_replies : [];
	recent_topics = recent_topics ? recent_topics : [];

	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		{ className: __WEBPACK_IMPORTED_MODULE_3__styles_scss___default.a.profile },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: __WEBPACK_IMPORTED_MODULE_3__styles_scss___default.a.header },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: avatar_url, alt: loginname }),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'p',
				null,
				loginname
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'p',
				null,
				'\u79EF\u5206:',
				score
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'p',
				null,
				'\u6CE8\u518C\u4E8E:',
				Object(__WEBPACK_IMPORTED_MODULE_5__utils_transformDate__["a" /* default */])(create_at)
			)
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: __WEBPACK_IMPORTED_MODULE_3__styles_scss___default.a.boxs },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: __WEBPACK_IMPORTED_MODULE_3__styles_scss___default.a.box },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_6_material_ui_styles_MuiThemeProvider___default.a,
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_8_material_ui_List__["List"],
						null,
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_9_material_ui_Subheader___default.a,
							null,
							'\u6536\u85CF\u7684\u8BDD\u9898'
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Divider___default.a, null),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TopicList, _extends({}, props, { topics: collectedTopics }))
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: __WEBPACK_IMPORTED_MODULE_3__styles_scss___default.a.box },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_6_material_ui_styles_MuiThemeProvider___default.a,
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_8_material_ui_List__["List"],
						null,
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_9_material_ui_Subheader___default.a,
							null,
							'\u6700\u8FD1\u53C2\u4E0E\u7684\u8BDD\u9898'
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Divider___default.a, null),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TopicList, _extends({}, props, { topics: recent_replies }))
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: __WEBPACK_IMPORTED_MODULE_3__styles_scss___default.a.box },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_6_material_ui_styles_MuiThemeProvider___default.a,
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_8_material_ui_List__["List"],
						null,
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_9_material_ui_Subheader___default.a,
							null,
							'\u6700\u8FD1\u521B\u5EFA\u7684\u8BDD\u9898'
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Divider___default.a, null),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TopicList, _extends({}, props, { topics: recent_topics }))
					)
				)
			)
		)
	);
};

var TopicList = function TopicList(props) {
	var dispatch = props.dispatch,
	    article = props.article,
	    fetchArticle = props.fetchArticle,
	    topics = props.topics;


	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		null,
		topics.length === 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_List__["ListItem"], { primaryText: '\u8FD8\u6CA1\u6709\u76F8\u5173\u8BDD\u9898' }),
		topics.length > 0 && topics.map(function (topic, index) {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["a" /* Link */],
				{ key: index, to: __WEBPACK_IMPORTED_MODULE_2__utils_routePrefix__["a" /* default */] + '/topic/' + topic.id, className: __WEBPACK_IMPORTED_MODULE_3__styles_scss___default.a.link, onClick: function onClick() {
						dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actions_hashUrl__["d" /* setTransition */])({ transition: 'move' }));
						if (!article[topic.id]) {
							dispatch(fetchArticle(topic.id));
						} else if (article.currentTopicId !== topic.id) {
							dispatch(fetchArticle(topic.id, false));
						}
					} },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_List__["ListItem"], { primaryText: topic.title, leftAvatar: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Avatar___default.a, { src: topic.author.avatar_url }) }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Divider___default.a, null)
			);
		})
	);
};

var ListExampleChat = function ListExampleChat() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		__WEBPACK_IMPORTED_MODULE_8_material_ui_List__["List"],
		null,
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_9_material_ui_Subheader___default.a,
			null,
			'Recent chats'
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_List__["ListItem"], {
			primaryText: 'Brendan Lim',
			leftAvatar: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Avatar___default.a, { src: 'images/ok-128.jpg' })
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Divider___default.a, null)
	);
};

var _default = Profile;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__(1).default;

	var leaveModule = __webpack_require__(1).leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Profile, 'Profile', 'F:/cnode/src/components/common/Profile/Profile.js');
	reactHotLoader.register(TopicList, 'TopicList', 'F:/cnode/src/components/common/Profile/Profile.js');
	reactHotLoader.register(ListExampleChat, 'ListExampleChat', 'F:/cnode/src/components/common/Profile/Profile.js');
	reactHotLoader.register(_default, 'default', 'F:/cnode/src/components/common/Profile/Profile.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(312);


/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configureStore__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Routes__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_index_css__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__styles_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_hot_loader__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_hot_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_hot_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_tap_event_plugin__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_tap_event_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_tap_event_plugin__);
(function () {
    var enterModule = __webpack_require__(1).enterModule;

    enterModule && enterModule(module);
})();






// import { Router,hashHistory } from 'react-router'





__WEBPACK_IMPORTED_MODULE_8_react_tap_event_plugin___default()();

var render = function render(Component) {
    __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_react_hot_loader__["AppContainer"],
        null,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_react_redux__["a" /* Provider */],
            { store: __WEBPACK_IMPORTED_MODULE_3__configureStore__["a" /* default */] },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, null)
        )
    ), document.getElementById('root'));
};

render(__WEBPACK_IMPORTED_MODULE_5__Routes__["a" /* default */]);

if (false) {
    module.hot.accept('./Routes', function () {
        render(Routes);
    });
}

// ReactDOM.render(
// 	<AppContainer>
//     	<Provider store={store}>
//     	    <div>aaaaaaaa</div>
//     	</Provider>
//     </AppContainer>,
//     document.getElementById('root')
// )

;

(function () {
    var reactHotLoader = __webpack_require__(1).default;

    var leaveModule = __webpack_require__(1).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(render, 'render', 'F:/cnode/src/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_TRANSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_HASH_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setHashUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setTransition; });
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var SET_TRANSITION = 'SET_TRANSITION';
var SET_HASH_URL = 'SET_HASH_URL';

var setHashUrl = function setHashUrl(hashUrl) {
  return {
    type: SET_HASH_URL,
    data: hashUrl
  };
};

var setTransition = function setTransition(transiton) {
  return {
    type: SET_TRANSITION,
    data: transiton
  };
};
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SET_TRANSITION, 'SET_TRANSITION', 'F:/cnode/src/actions/hashUrl.js');
  reactHotLoader.register(SET_HASH_URL, 'SET_HASH_URL', 'F:/cnode/src/actions/hashUrl.js');
  reactHotLoader.register(setHashUrl, 'setHashUrl', 'F:/cnode/src/actions/hashUrl.js');
  reactHotLoader.register(setTransition, 'setTransition', 'F:/cnode/src/actions/hashUrl.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {(function () {
	var enterModule = __webpack_require__(1).enterModule;

	enterModule && enterModule(module);
})();

var getSize = function getSize() {
	var windowW = void 0,
	    windowH = void 0,
	    contentH = void 0,
	    contentW = void 0,
	    scrollT = void 0;
	windowH = window.innerHeight;
	windowW = window.innerWidth;
	scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	contentH = document.documentElement.scrollHeight > document.body.scrollHeight ? document.documentElement.scrollHeight : document.body.scrollHeight;
	contentW = document.documentElement.scrollWidth > document.body.scrollWidth ? document.documentElement.scrollWidth : document.body.scrollWidth;
	return { windowW: windowW, windowH: windowH, contentH: contentH, contentW: contentW, scrollT: scrollT };
};

var _default = getSize;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__(1).default;

	var leaveModule = __webpack_require__(1).leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(getSize, "getSize", "F:/cnode/src/utils/getSize.js");
	reactHotLoader.register(_default, "default", "F:/cnode/src/utils/getSize.js");
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

// 使用browserHistory需要进行判断,在生产环境下，如果编译的文件不是根目录文件,而是在子文件夹内,子文件夹的地址部分会被browserHistory解析成路由
// 比如：编译的文件放在站点www文件夹的cnode文件夹里,访问时用github.com/cnode/,但是此时cnode/被browserHistory解析成路由,这个路由不存在所以会出问题
// let prefix = process.env.NODE_ENV === 'production' ? '/cnode' : '';

// 使用hashHistory则不需要这样的判断，因为router被放在hash中，而浏览器能正确解析hash
var prefix = '';
var _default = prefix;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(prefix, 'prefix', 'F:/cnode/src/utils/routePrefix.js');
  reactHotLoader.register(_default, 'default', 'F:/cnode/src/utils/routePrefix.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_logger__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_history_createBrowserHistory__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_history_createBrowserHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducers_index__ = __webpack_require__(551);
(function () {
    var enterModule = __webpack_require__(1).enterModule;

    enterModule && enterModule(module);
})();









var history = __WEBPACK_IMPORTED_MODULE_5_history_createBrowserHistory___default()();
var middleware = Object(__WEBPACK_IMPORTED_MODULE_4_react_router_redux__["routerMiddleware"])(history);
var logger = Object(__WEBPACK_IMPORTED_MODULE_3_redux_logger__["createLogger"])({ collapsed: true });
var middlewares = [__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a, middleware];

if (false) {
    middlewares.push(logger);
}
var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_6__reducers_index__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__["composeWithDevTools"])(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"].apply(undefined, middlewares)));

var _default = store;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__(1).default;

    var leaveModule = __webpack_require__(1).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(history, 'history', 'F:/cnode/src/configureStore.js');
    reactHotLoader.register(middleware, 'middleware', 'F:/cnode/src/configureStore.js');
    reactHotLoader.register(logger, 'logger', 'F:/cnode/src/configureStore.js');
    reactHotLoader.register(middlewares, 'middlewares', 'F:/cnode/src/configureStore.js');
    reactHotLoader.register(store, 'store', 'F:/cnode/src/configureStore.js');
    reactHotLoader.register(_default, 'default', 'F:/cnode/src/configureStore.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__homePage__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__publishTopic__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hashUrl__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fetchError__ = __webpack_require__(560);
(function () {
    var enterModule = __webpack_require__(1).enterModule;

    enterModule && enterModule(module);
})();











var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    homePage: __WEBPACK_IMPORTED_MODULE_1__homePage__["a" /* default */],
    article: __WEBPACK_IMPORTED_MODULE_2__article__["a" /* default */],
    login: __WEBPACK_IMPORTED_MODULE_3__login__["a" /* default */],
    profile: __WEBPACK_IMPORTED_MODULE_4__profile__["a" /* default */],
    publishTopic: __WEBPACK_IMPORTED_MODULE_6__publishTopic__["a" /* default */],
    message: __WEBPACK_IMPORTED_MODULE_5__message__["a" /* default */],
    hashUrl: __WEBPACK_IMPORTED_MODULE_7__hashUrl__["a" /* default */],
    fetchError: __WEBPACK_IMPORTED_MODULE_8__fetchError__["a" /* default */]
});

var _default = rootReducer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__(1).default;

    var leaveModule = __webpack_require__(1).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(rootReducer, 'rootReducer', 'F:/cnode/src/reducers/index.js');
    reactHotLoader.register(_default, 'default', 'F:/cnode/src/reducers/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(25);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var selectedTab = function selectedTab(state, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions__["r" /* SELECT_TAB */]:
      return action.tab;
    default:
      return state;
  }
};

// 当组件第一次发出REQUEST_TOPICS后，需要对其返回的state进行初始化，否则没有topics等属性会报错
function tabDataItem() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { isFetching: false, page: 0, scrollT: 0, topics: [] };
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions__["q" /* REQUEST_TOPICS */]:
      return _extends({}, state, {
        isFetching: true
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions__["l" /* RECEIVE_TOPICS */]:
      if (state.page < action.page) {
        var topics = state.topics;
        action.topics = topics.concat(action.topics);
      }
      return _extends({}, state, {
        isFetching: false,
        page: action.page,
        topics: action.topics,
        limit: action.limit
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions__["n" /* RECORD_SCROLLT */]:
      return _extends({}, state, {
        scrollT: action.scrollT
      });
    default:
      return state;
  }
}

var tabData = function tabData() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions__["l" /* RECEIVE_TOPICS */]:
    case __WEBPACK_IMPORTED_MODULE_0__actions__["q" /* REQUEST_TOPICS */]:
    case __WEBPACK_IMPORTED_MODULE_0__actions__["n" /* RECORD_SCROLLT */]:
      return _extends({}, state, _defineProperty({}, action.tab, tabDataItem(state[action.tab], action)));
    default:
      return state;
  }
};

var initState = sessionStorage.getItem('store') ? JSON.parse(sessionStorage.getItem('store')).homePage : {
  selectedTab: 'all', tabData: {}
};

var homePage = function homePage() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  if (state) {
    var sTab = selectedTab(state.selectedTab, action);
    var tData = tabData(state.tabData, action);
    // 返回的一定要是一个新的对象，如果只是改变原来的state,返回的还是原来的state对象,就无法被store.subscribe监听到，从而不会对组件状态进行更新
    return _extends({}, state, { selectedTab: sTab, tabData: tData });
  }
  return state;
};

var _default = homePage;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(selectedTab, 'selectedTab', 'F:/cnode/src/reducers/homePage.js');
  reactHotLoader.register(tabDataItem, 'tabDataItem', 'F:/cnode/src/reducers/homePage.js');
  reactHotLoader.register(tabData, 'tabData', 'F:/cnode/src/reducers/homePage.js');
  reactHotLoader.register(initState, 'initState', 'F:/cnode/src/reducers/homePage.js');
  reactHotLoader.register(homePage, 'homePage', 'F:/cnode/src/reducers/homePage.js');
  reactHotLoader.register(_default, 'default', 'F:/cnode/src/reducers/homePage.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(25);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
	var enterModule = __webpack_require__(1).enterModule;

	enterModule && enterModule(module);
})();



var initState = sessionStorage.getItem('store') ? JSON.parse(sessionStorage.getItem('store')).article : {
	currentTopicId: ''
};

var article = function article() {
	var _extends2, _extends3;

	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];

	var stateItem = state[action.topicId] || {};
	switch (action.type) {
		case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* CHANGE_CURRENT_TOPICID */]:
			return _extends({}, state, { currentTopicId: action.topicId });
		case __WEBPACK_IMPORTED_MODULE_0__actions__["s" /* SWITCH_SUPPORT */]:
			return _extends({}, state, { switchSupportInfo: { replyId: action.replyId, index: action.index, success: action.success, action: action.action } });
		case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* FETCH_COMMENT */]:
			return _extends({}, state, { isCommented: action.success });
		case __WEBPACK_IMPORTED_MODULE_0__actions__["m" /* RECORD_ARTICLE_SCROLLT */]:
			stateItem = _extends({}, stateItem, { scrollT: action.scrollT });
			return _extends({}, state, (_extends2 = {}, _defineProperty(_extends2, action.topicId, stateItem), _defineProperty(_extends2, 'currentTopicId', action.topicId), _extends2));
		case __WEBPACK_IMPORTED_MODULE_0__actions__["o" /* REQUEST_ARTICLE */]:
			stateItem = _extends({}, stateItem, { isFetching: true });
			return _extends({}, state, (_extends3 = {}, _defineProperty(_extends3, action.topicId, stateItem), _defineProperty(_extends3, 'currentTopicId', action.topicId), _defineProperty(_extends3, 'isCommented', false), _extends3));
		case __WEBPACK_IMPORTED_MODULE_0__actions__["j" /* RECEIVE_ARTICLE */]:
			stateItem = _extends({}, stateItem, { isFetching: false, article: action.article });
			return _extends({}, state, _defineProperty({}, action.topicId, stateItem));
		default:
			return state;
	}
};

var _default = article;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__(1).default;

	var leaveModule = __webpack_require__(1).leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(initState, 'initState', 'F:/cnode/src/reducers/article.js');
	reactHotLoader.register(article, 'article', 'F:/cnode/src/reducers/article.js');
	reactHotLoader.register(_default, 'default', 'F:/cnode/src/reducers/article.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(25);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
	var enterModule = __webpack_require__(1).enterModule;

	enterModule && enterModule(module);
})();



var initState = sessionStorage.getItem('store') ? JSON.parse(sessionStorage.getItem('store')).login : {
	succeed: false
};

var login = function login() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];

	switch (action.type) {
		case __WEBPACK_IMPORTED_MODULE_0__actions__["f" /* LOGIN_SUCCESS */]:
			return _extends({}, state, { succeed: true, loginName: action.loginName, loginId: action.loginId, accessToken: action.accessToken });
		case __WEBPACK_IMPORTED_MODULE_0__actions__["e" /* LOGIN_FAILED */]:
			return _extends({}, state, { succeed: false, failedMessage: action.failedMessage });
		case __WEBPACK_IMPORTED_MODULE_0__actions__["g" /* LOGOUT */]:
			return { succeed: false };
		default:
			return state;
	}
};

var _default = login;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__(1).default;

	var leaveModule = __webpack_require__(1).leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(initState, 'initState', 'F:/cnode/src/reducers/login.js');
	reactHotLoader.register(login, 'login', 'F:/cnode/src/reducers/login.js');
	reactHotLoader.register(_default, 'default', 'F:/cnode/src/reducers/login.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(25);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
	var enterModule = __webpack_require__(1).enterModule;

	enterModule && enterModule(module);
})();



var initState = sessionStorage.getItem('store') ? JSON.parse(sessionStorage.getItem('store')).profile : {
	isFetching: false, collectedTopics: []
};

var profile = function profile() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];

	switch (action.type) {
		case __WEBPACK_IMPORTED_MODULE_0__actions__["p" /* REQUEST_PROFILE */]:
			return _extends({}, state, { isFetching: true });
		case __WEBPACK_IMPORTED_MODULE_0__actions__["k" /* RECEIVE_PROFILE */]:
			return _extends({}, state, action.profile, { isFetching: false });
		case __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* GET_COLLECTED_TOPICS */]:
			return _extends({}, state, { collectedTopics: action.data });
		default:
			return state;
	}
};

var _default = profile;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__(1).default;

	var leaveModule = __webpack_require__(1).leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(initState, 'initState', 'F:/cnode/src/reducers/profile.js');
	reactHotLoader.register(profile, 'profile', 'F:/cnode/src/reducers/profile.js');
	reactHotLoader.register(_default, 'default', 'F:/cnode/src/reducers/profile.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(25);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
	var enterModule = __webpack_require__(1).enterModule;

	enterModule && enterModule(module);
})();



var initState = sessionStorage.getItem('store') ? JSON.parse(sessionStorage.getItem('store')).message : {
	isMarked: false, hasReadMessage: [], hasNotReadMessage: []
};

var message = function message() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];

	switch (action.type) {
		case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* FETCH_MESSAGE */]:
			return _extends({}, state, { hasReadMessage: action.hasReadMessage, hasNotReadMessage: action.hasNotReadMessage });
		case __WEBPACK_IMPORTED_MODULE_0__actions__["h" /* MARK_ALL_MESSAGES */]:
			return _extends({}, state, { isMarked: action.isMarked });
		default:
			return state;
	}
};

var _default = message;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__(1).default;

	var leaveModule = __webpack_require__(1).leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(initState, 'initState', 'F:/cnode/src/reducers/message.js');
	reactHotLoader.register(message, 'message', 'F:/cnode/src/reducers/message.js');
	reactHotLoader.register(_default, 'default', 'F:/cnode/src/reducers/message.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(25);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
	var enterModule = __webpack_require__(1).enterModule;

	enterModule && enterModule(module);
})();



var initState = sessionStorage.getItem('store') ? JSON.parse(sessionStorage.getItem('store')).publishTopic : {
	success: false
};

var publishTopic = function publishTopic() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];

	switch (action.type) {
		case __WEBPACK_IMPORTED_MODULE_0__actions__["i" /* PUBLISH_TOPIC */]:
			return _extends({}, state, { success: action.success, topicId: action.topicId });
		default:
			return state;
	}
};

var _default = publishTopic;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__(1).default;

	var leaveModule = __webpack_require__(1).leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(initState, 'initState', 'F:/cnode/src/reducers/publishTopic.js');
	reactHotLoader.register(publishTopic, 'publishTopic', 'F:/cnode/src/reducers/publishTopic.js');
	reactHotLoader.register(_default, 'default', 'F:/cnode/src/reducers/publishTopic.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_hashUrl__ = __webpack_require__(37);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var initState = sessionStorage.getItem('store') ? JSON.parse(sessionStorage.getItem('store')).hashUrl : {
  oldUrl: '/', currentUrl: '/', transition: 'none'
};

var hashUrl = function hashUrl() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_hashUrl__["a" /* SET_HASH_URL */]:
    case __WEBPACK_IMPORTED_MODULE_0__actions_hashUrl__["b" /* SET_TRANSITION */]:
      return _extends({}, state, action.data);
    default:
      return state;
  }
};

var _default = hashUrl;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initState, 'initState', 'F:/cnode/src/reducers/hashUrl.js');
  reactHotLoader.register(hashUrl, 'hashUrl', 'F:/cnode/src/reducers/hashUrl.js');
  reactHotLoader.register(_default, 'default', 'F:/cnode/src/reducers/hashUrl.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_fetchError__ = __webpack_require__(252);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var initState = sessionStorage.getItem('store') ? JSON.parse(sessionStorage.getItem('store')).fetchError : {
  error: null, fetched: null
};

var fetchError = function fetchError() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_fetchError__["d" /* FETCH_START */]:
      return _extends({}, state, { fetched: 'start' });
    case __WEBPACK_IMPORTED_MODULE_0__actions_fetchError__["b" /* FETCH_END */]:
      return _extends({}, state, { fetched: 'end' });
    case __WEBPACK_IMPORTED_MODULE_0__actions_fetchError__["c" /* FETCH_ERROR */]:
      return _extends({}, state, { error: action.data, fetched: 'failed' });
    case __WEBPACK_IMPORTED_MODULE_0__actions_fetchError__["a" /* CLEAR_ERROR */]:
      return _extends({}, state, { error: null });
    default:
      return state;
  }
};

var _default = fetchError;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initState, 'initState', 'F:/cnode/src/reducers/fetchError.js');
  reactHotLoader.register(fetchError, 'fetchError', 'F:/cnode/src/reducers/fetchError.js');
  reactHotLoader.register(_default, 'default', 'F:/cnode/src/reducers/fetchError.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getOS__ = __webpack_require__(562);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var prefix = __WEBPACK_IMPORTED_MODULE_0__getOS__["a" /* os */] == 'win32' ? 'http://localhost:8081' : '/api';
// let prefix = 'http://192.168.30.90:8080/s';

// let prefix = '/api'

var _default = prefix;
/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(prefix, 'prefix', 'F:/cnode/src/utils/urlPrefix.js');
  reactHotLoader.register(_default, 'default', 'F:/cnode/src/utils/urlPrefix.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return os; });
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var os = 'win32';
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(os, 'os', 'F:/cnode/src/utils/getOS.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redbox_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_history_createHashHistory__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_history_createHashHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_history_createHashHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_App__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_HomePage__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__containers_Article__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers_Message__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__containers_Login__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__containers_Profile__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__containers_PublishTopic__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_routePrefix__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_getSize__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__actions_hashUrl__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__actions_fetchError__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_react_transition_group_Transition__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_react_transition_group_Transition___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_react_transition_group_Transition__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_react_transition_group__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_react_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_react_transition_group__);





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Routes: {
        displayName: 'Routes'
    }
};

var _reactTransformCatchErrors2 = __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default()({
    filename: 'F:/cnode/src/Routes.js',
    components: _components,
    locals: [],
    imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_1_redbox_react___default.a, __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default.a]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
}

(function () {
    var enterModule = __webpack_require__(1).enterModule;

    enterModule && enterModule(module);
})();















// import { clearUserInfo } from './actions/login'



var history = __WEBPACK_IMPORTED_MODULE_6_history_createHashHistory___default()();

var Routes = _wrapComponent('Routes')((_dec = Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["b" /* connect */])(function (store) {
    return { store: store };
}), _dec(_class = function (_Component) {
    _inherits(Routes, _Component);

    function Routes() {
        _classCallCheck(this, Routes);

        var _this = _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).call(this));

        _this.hashChange = function (ev) {
            if (_this.props.store.hashUrl.oldURL != '/') {
                _this.setState({ overflow: 'hidden' });
                setTimeout(function () {
                    return _this.setState({ overflow: 'visible' });
                }, 500);
            }

            var dispatch = _this.props.dispatch;
            var hashUrl = null;
            if (ev.oldURL) {
                hashUrl = { oldUrl: ev.oldURL.split('#')[1], currentUrl: ev.newURL.split('#')[1] };
            } else {
                _this.oldUrl = _this.currentUrl;
                _this.currentUrl = window.location.href.split('#')[1];
                hashUrl = { oldUrl: _this.oldUrl, currentUrl: _this.currentUrl };
            }
            dispatch(Object(__WEBPACK_IMPORTED_MODULE_16__actions_hashUrl__["c" /* setHashUrl */])(hashUrl));

            // if (this.props.hashUrl.transition != 'none') {
            //     clearTimeout(this.transitionTimeOut)
            //     this.transitionTimeOut = setTimeout(() => {
            //         dispatch(setTransition({ transition: 'none' }))
            //     }, 50)
            // }
        };

        _this.oldUrl = '/';
        _this.currentUrl = '/';

        _this.saveState = function () {
            var store = _this.props.store;
            sessionStorage.setItem('store', JSON.stringify(store));
        };

        _this.state = {};
        return _this;
    }

    _createClass(Routes, [{
        key: 'componentWillMount',


        // changeTransition = (transition) => {
        //     this.setState({ transition: transition })
        // }

        value: function componentWillMount() {
            var dispatch = this.props.dispatch;
            window.myDispatch = dispatch;
            var menu = window.location.href.split('#')[1].split('/');
            if (menu[1]) {
                this.currentUrl = window.location.href.split('#')[1];
                dispatch(Object(__WEBPACK_IMPORTED_MODULE_16__actions_hashUrl__["c" /* setHashUrl */])({ oldUrl: this.oldUrl, currentUrl: window.location.href.split('#')[1] }));
            } else {
                dispatch(Object(__WEBPACK_IMPORTED_MODULE_16__actions_hashUrl__["c" /* setHashUrl */])({ oldUrl: this.oldUrl, currentUrl: this.currentUrl }));
            }
            window.addEventListener('hashchange', this.hashChange);
            // 由于头部组件fix定位，在路由切换时，width:100%在手机上的判定会有问题，暂时采取全局变量储存页面加载时的宽度
            // window.width = document.getElementById('root').offsetWidth
            // console.log('****************',document.getElementById('root').offsetWidth)
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps) {
            // if (this.props.store.hashUrl.oldUrl == nextProps.store.hashUrl.currentUrl) {
            //     this.props.dispatch(setTransition({ transition: 'left' }))
            // }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["d" /* Router */],
                { path: __WEBPACK_IMPORTED_MODULE_14__utils_routePrefix__["a" /* default */] + '/', history: history },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["c" /* Route */], { render: function render(_ref) {
                        var location = _ref.location;
                        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            { style: { position: 'relative', height: Object(__WEBPACK_IMPORTED_MODULE_15__utils_getSize__["a" /* default */])().windowH, width: '100%', overflow: _this2.state.overflow || 'visible' } },
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_19_react_transition_group__["TransitionGroup"],
                                null,
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_19_react_transition_group__["CSSTransition"],
                                    { key: location.pathname, timeout: 500, classNames: _this2.props.store.hashUrl.transition },
                                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["e" /* Switch */],
                                        { location: location, key: location.pathname },
                                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["c" /* Route */], { exact: true, path: '/', render: function render() {
                                                return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["b" /* Redirect */], { to: '/home' });
                                            } }),
                                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["c" /* Route */], { path: '/home', render: function render() {
                                                return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__containers_HomePage__["a" /* default */], null);
                                            } }),
                                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["c" /* Route */], { path: '/topic/:id', render: function render() {
                                                return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__containers_Article__["a" /* default */], null);
                                            } }),
                                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["c" /* Route */], { path: '/message', render: function render() {
                                                return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__containers_Message__["a" /* default */], null);
                                            } }),
                                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["c" /* Route */], { path: '/login', render: function render() {
                                                return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__containers_Login__["a" /* default */], null);
                                            } }),
                                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["c" /* Route */], { path: '/profile', render: function render() {
                                                return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__containers_Profile__["a" /* default */], null);
                                            } }),
                                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["c" /* Route */], { path: '/publishTopic', render: function render() {
                                                return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__containers_PublishTopic__["a" /* default */], null);
                                            } })
                                    )
                                )
                            )
                        );
                    } })
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener('beforeunload', this.saveState);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('beforeunload', this.saveState);
            window.removeEventListener('hashchange', function () {});
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Routes;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"])) || _class));

// const Routes = ({ props }) => (
//     <Router path={`${prefix}/`} history={history}>
//         <Route render={({ location }) => (
//             <Switch>
//                 <Route exact path='/' render={() => <HomePage />} />
//                 <Route path='/topic/:id' render={() => <Article />} />
//                 <Route path='/message' render={() => <Message />} />
//                 <Route path='/login' render={() => <Login />} />
//                 <Route path='/profile' render={() => <Profile />} />
//                 <Route path='/publishTopic' render={() => <PublishTopic />} />
//             </Switch>
//         )} />
//     </Router>
// )

// const Routes = <div>bbbbbbbb</div>


var _default = Routes;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__(1).default;

    var leaveModule = __webpack_require__(1).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(history, 'history', 'F:/cnode/src/Routes.js');
    reactHotLoader.register(Routes, 'Routes', 'F:/cnode/src/Routes.js');
    reactHotLoader.register(_default, 'default', 'F:/cnode/src/Routes.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redbox_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_common_Header_Header__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Article_Content_Content__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Article_Reply_Reply__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_getSize__ = __webpack_require__(43);





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  App: {
    displayName: 'App'
  }
};

var _reactTransformCatchErrors2 = __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default()({
  filename: 'F:/cnode/src/containers/App.js',
  components: _components,
  locals: [],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_1_redbox_react___default.a, __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();









var App = _wrapComponent('App')(function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // console.log('componentWillMount')
      var dispatch = this.props.dispatch;

      var LoadingAction = function LoadingAction(accessToken, loginName) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions__["t" /* fetchAccess */])(accessToken));
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions__["w" /* fetchMessage */])(accessToken));
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions__["x" /* fetchProfile */])(loginName));
      };
      if (window.localStorage.getItem('masterInfo')) {
        var masterInfo = window.localStorage.getItem('masterInfo');
        masterInfo = JSON.parse(masterInfo);
        var accessToken = masterInfo.accessToken;
        var loginName = masterInfo.loginName;
        LoadingAction(accessToken, loginName);
      } else {
        var _accessToken = '1cbc2a58-6c1b-426f-971d-070676fb849d';
        var _loginName = 'lumia2046';
        LoadingAction(_accessToken, _loginName);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      // console.log(newProps)
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // console.log('componentWillUnmount')
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]));

App.propTypes = {
  // currentTopicId: PropTypes.string.isRequired,
  // article: PropTypes.object.isRequired,
  // isFetching: PropTypes.bool.isRequired,
  // dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  var login = state.login,
      profile = state.profile;

  return { login: login, profile: profile };
}

var _default = Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(mapStateToProps)(App);

/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, 'App', 'F:/cnode/src/containers/App.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'F:/cnode/src/containers/App.js');
  reactHotLoader.register(_default, 'default', 'F:/cnode/src/containers/App.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 603:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"components-common-Header-styles-header-KVlF1","title":"components-common-Header-styles-title-2JhZH"};

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"head":"components-Article-Content-styles-head-2PvuJ","imgbox":"components-Article-Content-styles-imgbox-pCP1W","info":"components-Article-Content-styles-info-1mUO9","title":"components-Article-Content-styles-title-2xk8o","main":"components-Article-Content-styles-main-25kdq"};

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"linkToLogin":"components-common-LinkToLogin-styles-linkToLogin-35ulQ"};

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"reply":"components-Article-Reply-styles-reply-3YcCh","author":"components-Article-Reply-styles-author-1X8xp","main":"components-Article-Reply-styles-main-1ENPS","item":"components-Article-Reply-styles-item-3oq-F","form":"components-Article-Reply-styles-form-36sHc","textarea":"components-Article-Reply-styles-textarea-3idHq"};

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redbox_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_HomePage_Header_Header__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_HomePage_FloatingActionButton__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_common_CircleLoading__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_HomePage_Drawer_Drawer__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_HomePage_Lists_Lists__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_common_Snackbar__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_getSize__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__actions_hashUrl__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_common_react_pullrefresh__ = __webpack_require__(767);





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  HomePage: {
    displayName: 'HomePage'
  }
};

var _reactTransformCatchErrors2 = __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default()({
  filename: 'F:/cnode/src/containers/HomePage.js',
  components: _components,
  locals: [],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_1_redbox_react___default.a, __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();














var HomePage = _wrapComponent('HomePage')(function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this));

    _this.onRefresh = function (next) {
      if (!_this.state.isFreshing) {
        _this.setState({
          isFreshing: true
        });
        _this.fresh();
        setTimeout(function (_) {
          next();
          _this.openSnackbar();
          _this.setState({
            isFreshing: false
          });
        }, 3000);
      }
    };

    _this.fresh = function () {
      var _this$props = _this.props,
          selectedTab = _this$props.selectedTab,
          login = _this$props.login,
          dispatch = _this$props.dispatch;

      dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions__["z" /* fetchTopics */])(selectedTab, 1));
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions__["w" /* fetchMessage */])(login.accessToken));
    };

    _this.openSnackbar = function () {
      _this.setState({
        openSnackbar: true
      });
      setTimeout(function () {
        _this.setState({
          openSnackbar: false
        });
      }, 2500);
    };

    _this.handleClick = function (tab) {
      var _getSize = Object(__WEBPACK_IMPORTED_MODULE_12__utils_getSize__["a" /* default */])(),
          scrollT = _getSize.scrollT;

      var _this$props2 = _this.props,
          selectedTab = _this$props2.selectedTab,
          dispatch = _this$props2.dispatch,
          tabData = _this$props2.tabData;

      dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions__["D" /* recordScrollT */])(selectedTab, scrollT));
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions__["E" /* selectTab */])(tab));

      var ua = navigator.userAgent;
      if (!tabData[tab] && ua.indexOf('Mobile') === -1) {
        if (scrollT >= 64) {
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions__["D" /* recordScrollT */])(tab, 64));
          _this.setState({
            scrollT: 64
          });
        } else {
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions__["D" /* recordScrollT */])(tab, scrollT));
          _this.setState({
            scrollT: scrollT
          });
        }
      }

      // 在事件的回调函数中的action，是将action都发送并改变state完毕，再更新state
      // 也就是说事件回调函数中发送多个不带异步的action,只在最后一个action更新完state进行一次状态更新
      // 要想每次action更新state后，都更新一次状态(方便在更新时做一些操作)，就要把action封装成异步操作
      // 但是在react生命周期里的一个函数里发送多个action,每个action更新state都会对相应组件进行一次状态更新，不需要封装成异步操作
      // let asyncDispatch = async function(){
      //   await dispatch(recordScrollT(selectedTab,scrollT))
      //   await dispatch(selectTab(tab))
      // }
      // asyncDispatch()
    };

    _this.loadMore = function () {
      var _this$props3 = _this.props,
          selectedTab = _this$props3.selectedTab,
          page = _this$props3.page,
          isFetching = _this$props3.isFetching,
          dispatch = _this$props3.dispatch;

      var ipage = page;
      if (!isFetching) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions__["z" /* fetchTopics */])(selectedTab, ++ipage));
      }
    };

    _this.toggleDrawer = function () {
      _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_13__actions_hashUrl__["d" /* setTransition */])({ transition: 'none' }));
      _this.setState({
        openDrawer: !_this.state.openDrawer
      });
    };

    _this.tabs = [{
      title: '全部',
      filter: 'all'
    }, {
      title: '精华',
      filter: 'good'
    }, {
      title: '分享',
      filter: 'share'
    }, {
      title: '问答',
      filter: 'ask'
    }, {
      title: '招聘',
      filter: 'job'
    }];

    _this.state = {
      fadeIn: true,
      openDrawer: false,
      openSnackbar: false,
      isFreshing: false,
      fixedTop: 0,
      scrollT: 0
    };
    return _this;
  }

  _createClass(HomePage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // console.log(this.props)
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      // console.log('componentWillReceiveProps',getSize().scrollT)
      var topics = newProps.topics,
          isFetching = newProps.isFetching,
          selectedTab = newProps.selectedTab,
          scrollT = newProps.scrollT,
          dispatch = newProps.dispatch;
      // 去除刷新时记住的滚动条位置

      if (topics.length === 0 && this.props.scrollT === 0) {
        window.scrollTo(0, 0);
      }
      // fetchTopics开始后会先发送一个request的action,这个ation也会改变state从而触发该方法。如果不对isFetching进行判断，会再次进行fetchTopics从而进行了不必要的重复数据请求
      if (!isFetching && topics.length === 0) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions__["z" /* fetchTopics */])(selectedTab));
      }
      if (selectedTab !== this.props.selectedTab) {
        if (scrollT) {
          window.scrollTo(0, scrollT);
        }
      }
    }
    // componentWillUpdate(newProps,newState){
    //   console.log('componentWillUpdate',getSize().scrollT,newState)
    // }

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          selectedTab = _props.selectedTab,
          isFetching = _props.isFetching,
          page = _props.page,
          topics = _props.topics,
          dispatch = _props.dispatch,
          article = _props.article,
          currentRouter = _props.currentRouter,
          login = _props.login,
          profile = _props.profile,
          unreadMessageCount = _props.unreadMessageCount,
          tabData = _props.tabData;

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        { style: { width: '100%', overflowX: 'hidden' } },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6__components_HomePage_Header_Header__["a" /* default */],
          { filter: selectedTab, onClick: this.handleClick, toggleDrawer: this.toggleDrawer,
            fixedTop: this.state.fixedTop, unreadMessageCount: unreadMessageCount, tabs: this.tabs },
          this.tabs.map(function (tab, index) {
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              { key: index },
              (isFetching && page === 0 || tab.filter !== selectedTab && !tabData[tab.filter]) && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_common_CircleLoading__["a" /* default */], null),
              tab.filter === selectedTab && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                { style: { opacity: !isFetching || page >= 1 ? 1 : 0 } },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_HomePage_Lists_Lists__["a" /* default */], { topics: topics, fetchArticle: __WEBPACK_IMPORTED_MODULE_5__actions__["u" /* fetchArticle */], dispatch: dispatch, article: article, isFetching: isFetching })
              )
            );
          })
        ),
        !isFetching && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_HomePage_FloatingActionButton__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_HomePage_Drawer_Drawer__["a" /* default */], _extends({ toggleDrawer: this.toggleDrawer, openDrawer: this.state.openDrawer
        }, { login: login, dispatch: dispatch, profile: profile })),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_common_Snackbar__["a" /* default */], { isOpened: this.state.openSnackbar, message: '\u5237\u65B0\u6210\u529F' })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props2 = this.props,
          selectedTab = _props2.selectedTab,
          page = _props2.page,
          scrollT = _props2.scrollT,
          dispatch = _props2.dispatch;

      if (page === 0) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions__["z" /* fetchTopics */])(selectedTab));
      }
      if (scrollT) {
        window.scrollTo(0, scrollT);
      }
      var lastScrollY = this.lastScrollY;
      // window.onmousedown = () => {
      //   console.log('a')
      //   let {windowH,contentH,scrollT} = getSize()
      // }
      // window.onload = () => {
      // 	window.scrollTo(0,0)
      // }
      window.onscroll = function () {
        var _getSize2 = Object(__WEBPACK_IMPORTED_MODULE_12__utils_getSize__["a" /* default */])(),
            windowH = _getSize2.windowH,
            contentH = _getSize2.contentH,
            scrollT = _getSize2.scrollT;

        if (windowH + scrollT + 100 > contentH) {
          _this2.loadMore();
        }

        // 由于下面的操作比较费cpu,所以进行判断是否为手机端
        var ua = navigator.userAgent;
        if (ua.indexOf('Mobile') === -1) {
          if (!lastScrollY || !scrollT) {
            lastScrollY = scrollT;
          }
          var diff = scrollT - lastScrollY;
          if (diff >= 0) {
            if (scrollT > 64 && _this2.state.fixedTop !== 64) {
              _this2.setState({
                fixedTop: 64
              });
            }
            if (scrollT <= 64) {
              _this2.setState({
                fixedTop: scrollT
              });
            }
          } else {
            _this2.setState({
              scrollT: 0
            });
            if (scrollT > 64 && _this2.state.fixedTop !== 0) {
              _this2.setState({
                fixedTop: 0
              });
            }
          }
          lastScrollY = scrollT;
        }
      };
      // console.log('componentDidMount',getSize().scrollT)
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _getSize3 = Object(__WEBPACK_IMPORTED_MODULE_12__utils_getSize__["a" /* default */])(),
          windowH = _getSize3.windowH,
          contentH = _getSize3.contentH,
          scrollT = _getSize3.scrollT;

      var topics = this.props.topics;
      // console.log(scrollT)
      // 第一次切换到没有加载数据的tab时，在willReceiveProp中已经将页面滚动了一定距离，在render中打印scrollT也不为0
      // 但是一进入这个函数scrollT就变为0,而且也未触发onscroll事件（问题待解决），所以目前只能去重新判断这种情况

      if (scrollT === 0 && this.state.scrollT > 0) {}
      // window.scrollTo(0, this.state.scrollT)


      // 判断内容加载后，内容的高度是否填满屏幕，若网页太高，加载一次内容的高度不能填满整个网页，则继续请求数据
      if (topics.length > 0 && windowH + 200 > contentH) {}
      // this.loadMore()

      // console.log('componentDidUpdate',getSize().scrollT)
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _getSize4 = Object(__WEBPACK_IMPORTED_MODULE_12__utils_getSize__["a" /* default */])(),
          scrollT = _getSize4.scrollT;

      var _props3 = this.props,
          selectedTab = _props3.selectedTab,
          dispatch = _props3.dispatch;

      dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions__["D" /* recordScrollT */])(selectedTab, scrollT));
      // 必须解绑事件，否则当组件再次被加载时，该事件会监听两个组件
      window.onscroll = null;
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return HomePage;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]));

function mapStateToProps(state) {
  var homePage = state.homePage,
      article = state.article,
      login = state.login,
      profile = state.profile,
      message = state.message;
  var selectedTab = homePage.selectedTab,
      tabData = homePage.tabData;

  var unreadMessageCount = message.hasNotReadMessage.length;
  // 当组件第一次render时,还未进行任何action,初始化的state里没有tabData[selectedTab]，所以这里需要初始化

  var _ref = tabData[selectedTab] || { isFetching: false, page: 0, scrollT: 0, topics: [] },
      isFetching = _ref.isFetching,
      page = _ref.page,
      scrollT = _ref.scrollT,
      topics = _ref.topics;

  return { isFetching: isFetching, page: page, scrollT: scrollT, topics: topics, selectedTab: selectedTab, article: article, login: login, profile: profile, tabData: tabData, unreadMessageCount: unreadMessageCount };
}

// 用connect方法连接HomePage组件，实际上是在HomePage组件上加上了Connect(HomePage)这个父组件，HomePage里有关Connect的state变化的props就是通过mapStateToProps设置的
// connect方法的第二个参数如果不传的话就会默认将store.dispatch默认作为了dispatch参数传进HomePage的props，所以HomePage的props里就有一个dispatch

var _default = Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(mapStateToProps)(HomePage);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HomePage, 'HomePage', 'F:/cnode/src/containers/HomePage.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'F:/cnode/src/containers/HomePage.js');
  reactHotLoader.register(_default, 'default', 'F:/cnode/src/containers/HomePage.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redbox_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_scss__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_hashUrl__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_routePrefix__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Tabs__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_styles_MuiThemeProvider__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_AppBar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Badge__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Badge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_Badge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_svg_icons_social_notifications__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_svg_icons_social_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_material_ui_svg_icons_social_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_IconButton__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react_swipeable_views__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react_swipeable_views___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_react_swipeable_views__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_getSize__ = __webpack_require__(43);





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Header: {
    displayName: 'Header'
  }
};

var _reactTransformCatchErrors2 = __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default()({
  filename: 'F:/cnode/src/components/HomePage/Header/Header.js',
  components: _components,
  locals: [],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_1_redbox_react___default.a, __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();
















var Header = _wrapComponent('Header')((_dec = Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(), _dec(_class = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.handleChange = function (value) {
      _this.setState({
        slideIndex: value
      });
      _this.props.onClick(_this.props.tabs[value].filter);
    };

    _this.state = {
      slideIndex: 0
    };

    return _this;
  }

  _createClass(Header, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          tabs = _props.tabs,
          filter = _props.filter;

      var slideIndex = void 0;
      tabs.forEach(function (tab, index) {
        if (tab.filter === filter) {
          slideIndex = index;
        }
      });
      this.setState({
        slideIndex: slideIndex
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      // this.props.tabs.forEach(tab => {
      //     tab.cn = classnames({[styles.active] : tab.filter === this.props.filter})
      // })
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_10_material_ui_styles_MuiThemeProvider___default.a,
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_5__styles_scss___default.a.header, style: { top: -this.props.fixedTop, width: window.width || '100%' } },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_AppBar___default.a, { title: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'p',
                { style: { textAlign: 'center' } },
                'NodeJS\u8BBA\u575B'
              ), onLeftIconButtonClick: this.props.toggleDrawer,
              iconElementRight: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                { style: { marginTop: -8 } },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_12_material_ui_Badge___default.a,
                  { badgeContent: this.props.unreadMessageCount, secondary: true, style: { top: 3 } },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_react_router_dom__["a" /* Link */],
                    { to: __WEBPACK_IMPORTED_MODULE_8__utils_routePrefix__["a" /* default */] + '/message', onClick: function onClick() {
                        return _this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__actions_hashUrl__["d" /* setTransition */])({ transition: 'move' }));
                      } },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_14_material_ui_IconButton___default.a,
                      { tooltip: '\u672A\u8BFB\u6D88\u606F', style: { padding: 0, width: 25, height: 25 } },
                      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        null,
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_material_ui_svg_icons_social_notifications___default.a, { style: { color: 'white' } })
                      )
                    )
                  )
                )
              ) }),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_9_material_ui_Tabs__["Tabs"],
              { onChange: this.handleChange, value: this.state.slideIndex },
              this.props.tabs.map(function (tab, i) {
                return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Tabs__["Tab"], { key: i, label: tab.title, value: i });
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_15_react_swipeable_views___default.a,
            { index: this.state.slideIndex, onChangeIndex: this.handleChange },
            this.props.children
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"])) || _class));
// Header.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired
// }

var _default = Header;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, 'Header', 'F:/cnode/src/components/HomePage/Header/Header.js');
  reactHotLoader.register(_default, 'default', 'F:/cnode/src/components/HomePage/Header/Header.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"components-HomePage-Header-styles-header-2efCu"};

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redbox_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_hashUrl__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_FloatingActionButton__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_FloatingActionButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_FloatingActionButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_svg_icons_content_add__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_svg_icons_content_add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_svg_icons_content_add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_styles_MuiThemeProvider__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router_dom__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_routePrefix__ = __webpack_require__(50);





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  FloatActionButton: {
    displayName: 'FloatActionButton'
  }
};

var _reactTransformCatchErrors2 = __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default()({
  filename: 'F:/cnode/src/components/HomePage/FloatingActionButton.js',
  components: _components,
  locals: [],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_1_redbox_react___default.a, __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();










var style = {
  position: 'fixed',
  bottom: 50,
  right: 50
};

var FloatActionButton = _wrapComponent('FloatActionButton')((_dec = Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(), _dec(_class = function (_React$Component) {
  _inherits(FloatActionButton, _React$Component);

  function FloatActionButton() {
    _classCallCheck(this, FloatActionButton);

    return _possibleConstructorReturn(this, (FloatActionButton.__proto__ || Object.getPrototypeOf(FloatActionButton)).apply(this, arguments));
  }

  _createClass(FloatActionButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_9_react_router_dom__["a" /* Link */],
        { to: __WEBPACK_IMPORTED_MODULE_10__utils_routePrefix__["a" /* default */] + '/publishTopic', onClick: function onClick() {
            return _this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions_hashUrl__["d" /* setTransition */])({ transition: 'up' }));
          } },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_material_ui_styles_MuiThemeProvider___default.a,
          null,
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_material_ui_FloatingActionButton___default.a,
            { style: style, secondary: true,
              onMouseEnter: function onMouseEnter() {
                return _this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions_hashUrl__["d" /* setTransition */])({ transition: 'none' }));
              },
              onTouchStart: function onTouchStart() {
                _this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions_hashUrl__["d" /* setTransition */])({ transition: 'none' }));
              } },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_svg_icons_content_add___default.a, null)
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return FloatActionButton;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component)) || _class));

var _default = FloatActionButton;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(style, 'style', 'F:/cnode/src/components/HomePage/FloatingActionButton.js');
  reactHotLoader.register(FloatActionButton, 'FloatActionButton', 'F:/cnode/src/components/HomePage/FloatingActionButton.js');
  reactHotLoader.register(_default, 'default', 'F:/cnode/src/components/HomePage/FloatingActionButton.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redbox_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_routePrefix__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Drawer__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Drawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Drawer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_MenuItem__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_MenuItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_RaisedButton__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_RaisedButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_styles_MuiThemeProvider__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Divider__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Avatar__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_Avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__actions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__actions_hashUrl__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__styles_scss__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_getSize__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__utils_transformDate__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_Dialog__ = __webpack_require__(136);





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  myDrawer: {
    displayName: 'myDrawer'
  }
};

var _reactTransformCatchErrors2 = __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default()({
  filename: 'F:/cnode/src/components/HomePage/Drawer/Drawer.js',
  components: _components,
  locals: [],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_1_redbox_react___default.a, __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();


















var myDrawer = _wrapComponent('myDrawer')((_dec = Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["b" /* connect */])(), _dec(_class = function (_React$Component) {
  _inherits(myDrawer, _React$Component);

  function myDrawer() {
    _classCallCheck(this, myDrawer);

    var _this = _possibleConstructorReturn(this, (myDrawer.__proto__ || Object.getPrototypeOf(myDrawer)).call(this));

    _this.excuteLogout = function () {
      var dispatch = _this.props.dispatch;

      window.localStorage.removeItem('masterInfo');
      window.sessionStorage.removeItem('masterProfile');
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_13__actions__["A" /* logout */])());
    };

    _this.close = function () {
      _this.setState({
        isOpen: false
      });
    };

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(myDrawer, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _getSize = Object(__WEBPACK_IMPORTED_MODULE_16__utils_getSize__["a" /* default */])(),
          contentW = _getSize.contentW;

      if (contentW > 800) {
        contentW = 640;
      } else {
        contentW = 0.8 * contentW;
      }
      var _props = this.props,
          login = _props.login,
          profile = _props.profile;
      var succeed = login.succeed;

      if (login.loginName !== profile.loginname && window.sessionStorage.masterProfile) {
        profile = JSON.parse(window.sessionStorage.masterProfile);
      }
      var _profile = profile,
          avatar_url = _profile.avatar_url,
          loginname = _profile.loginname,
          score = _profile.score,
          create_at = _profile.create_at;

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_10_material_ui_styles_MuiThemeProvider___default.a,
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_material_ui_Drawer___default.a,
          {
            docked: false,
            width: contentW,
            open: this.props.openDrawer,
            onRequestChange: this.props.toggleDrawer
          },
          succeed && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_15__styles_scss___default.a.header },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["a" /* Link */],
                { to: __WEBPACK_IMPORTED_MODULE_6__utils_routePrefix__["a" /* default */] + '/login', className: __WEBPACK_IMPORTED_MODULE_15__styles_scss___default.a.link },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Avatar___default.a, { src: avatar_url, size: 80 }),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'p',
                  null,
                  loginname
                )
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'p',
                null,
                '\u79EF\u5206:',
                score
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'p',
                null,
                '\u6CE8\u518C\u4E8E:',
                Object(__WEBPACK_IMPORTED_MODULE_17__utils_transformDate__["a" /* default */])(create_at)
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_RaisedButton___default.a, { label: '\u6CE8\u9500\u767B\u9646', primary: true, onClick: function onClick() {
                  _this2.setState({
                    isOpen: true
                  });
                } }),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_18__common_Dialog__["a" /* default */],
                { isOpen: this.state.isOpen, action: this.excuteLogout, close: this.close },
                '\u786E\u5B9A\u8981\u6CE8\u9500\u767B\u9646\uFF1F'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8_material_ui_MenuItem___default.a,
              { onTouchTap: this.props.toggleDrawer },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["a" /* Link */],
                { to: __WEBPACK_IMPORTED_MODULE_6__utils_routePrefix__["a" /* default */] + '/login', className: __WEBPACK_IMPORTED_MODULE_15__styles_scss___default.a.link },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('i', { className: 'iconfont', dangerouslySetInnerHTML: { __html: '&#xe60f;' }, style: { color: '#00BCD4' } }),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'span',
                  { style: { color: '#00BCD4' } },
                  ' \u4E2A\u4EBA\u4E3B\u9875'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Divider___default.a, null),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8_material_ui_MenuItem___default.a,
              { onTouchTap: this.props.toggleDrawer },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["a" /* Link */],
                { to: __WEBPACK_IMPORTED_MODULE_6__utils_routePrefix__["a" /* default */] + '/message', className: __WEBPACK_IMPORTED_MODULE_15__styles_scss___default.a.link },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('i', { className: 'iconfont', dangerouslySetInnerHTML: { __html: '&#xe617;' }, style: { color: '#00BCD4' } }),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'span',
                  { style: { color: '#00BCD4' } },
                  ' \u6D88\u606F'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Divider___default.a, null)
          ),
          !succeed && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_15__styles_scss___default.a.header },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["a" /* Link */],
              { to: __WEBPACK_IMPORTED_MODULE_6__utils_routePrefix__["a" /* default */] + '/login', className: __WEBPACK_IMPORTED_MODULE_15__styles_scss___default.a.link, onClick: function onClick() {
                  return _this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_14__actions_hashUrl__["d" /* setTransition */])({ transition: 'up' }));
                } },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_12_material_ui_Avatar___default.a,
                { backgroundColor: 'rgb(0,188,212)', size: 80 },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('i', { className: 'iconfont', dangerouslySetInnerHTML: { __html: '&#xe60f;' } })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'p',
              null,
              '\u70B9\u51FB\u5934\u50CF\u767B\u9646'
            )
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return myDrawer;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component)) || _class));

var _default = myDrawer;

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(myDrawer, 'myDrawer', 'F:/cnode/src/components/HomePage/Drawer/Drawer.js');
  reactHotLoader.register(_default, 'default', 'F:/cnode/src/components/HomePage/Drawer/Drawer.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 758:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"components-HomePage-Drawer-styles-header-1ss7F","link":"components-HomePage-Drawer-styles-link-1VIhX"};

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_flip_move__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_transformDate__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_scss__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_hashUrl__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_routePrefix__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_styles_MuiThemeProvider__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_List__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Divider__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Avatar__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_Avatar__);
(function () {
	var enterModule = __webpack_require__(1).enterModule;

	enterModule && enterModule(module);
})();













var Lists = function Lists(props) {
	var tabChn = { all: '全部', good: '精华', share: '分享', ask: '问答', job: '招聘' };
	var topics = props.topics,
	    fetchArticle = props.fetchArticle,
	    dispatch = props.dispatch,
	    article = props.article,
	    isFetching = props.isFetching;

	var disableAllAnimations = topics.length === 20 ? false : true;
	// disableAllAnimations从启用到禁用时enterAnimation设定的动画会不起作用，原因不明。
	var enterAnimation = {
		from: { transform: 'translateY(-80px)', opacity: 0 },
		to: { transform: 'translateY(0)', opacity: 1 }
	};
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		{ style: { position: 'relative' } },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: __WEBPACK_IMPORTED_MODULE_3__styles_scss___default.a.lists },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_7_material_ui_styles_MuiThemeProvider___default.a,
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_8_material_ui_List__["List"],
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_1_react_flip_move__["a" /* default */],
						{ disableAllAnimations: disableAllAnimations, enterAnimation: enterAnimation,
							easing: 'ease-out', duration: '400', staggerDelayBy: '40', staggerDurationBy: '4' },
						topics.map(function (topic, i) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								__WEBPACK_IMPORTED_MODULE_5_react_router_dom__["a" /* Link */],
								{ key: i, to: __WEBPACK_IMPORTED_MODULE_6__utils_routePrefix__["a" /* default */] + '/topic/' + topic.id, className: __WEBPACK_IMPORTED_MODULE_3__styles_scss___default.a.link, onClick: function onClick() {
										dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actions_hashUrl__["d" /* setTransition */])({ transition: 'move' }));
										if (!article[topic.id]) {
											dispatch(fetchArticle(topic.id));
										} else if (article.currentTopicId !== topic.id) {
											dispatch(fetchArticle(topic.id, false));
										}
									} },
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_List__["ListItem"], {
									leftAvatar: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Avatar___default.a, { src: topic.author.avatar_url }),
									primaryText: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
										'div',
										{ className: __WEBPACK_IMPORTED_MODULE_3__styles_scss___default.a.text },
										topic.top && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
											'span',
											{ style: { color: 'blue' } },
											'\u9876'
										),
										topic.good && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
											'span',
											{ style: { color: 'red' } },
											'\u7CBE'
										),
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
											'span',
											{ className: __WEBPACK_IMPORTED_MODULE_3__styles_scss___default.a.title },
											topic.title
										)
									),
									secondaryText: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
										'div',
										{ className: __WEBPACK_IMPORTED_MODULE_3__styles_scss___default.a.text },
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
											'span',
											null,
											topic.reply_count + '/' + topic.visit_count
										),
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
											'span',
											null,
											tabChn[topic.tab]
										),
										__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
											'span',
											{ style: { float: 'right' } },
											Object(__WEBPACK_IMPORTED_MODULE_2__utils_transformDate__["a" /* default */])(topic.create_at)
										)
									)
								}),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Divider___default.a, { inset: true })
							);
						})
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: __WEBPACK_IMPORTED_MODULE_3__styles_scss___default.a.spinner },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_3__styles_scss___default.a.bounce1 }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_3__styles_scss___default.a.bounce2 }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_3__styles_scss___default.a.bounce3 })
			)
		)
	);
};

// Lists.propTypes = {
//   topics: PropTypes.array.isRequired,
//   fetchArticle: PropTypes.func.isRequired
// }

var _default = Lists;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__(1).default;

	var leaveModule = __webpack_require__(1).leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Lists, 'Lists', 'F:/cnode/src/components/HomePage/Lists/Lists.js');
	reactHotLoader.register(_default, 'default', 'F:/cnode/src/components/HomePage/Lists/Lists.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 761:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"lists":"components-HomePage-Lists-styles-lists-yUW71","li":"components-HomePage-Lists-styles-li-3vpS1","link":"components-HomePage-Lists-styles-link-2bOde","text":"components-HomePage-Lists-styles-text-1W55W","title":"components-HomePage-Lists-styles-title-2KCD2","spinner":"components-HomePage-Lists-styles-spinner-1fpsP","bouncedelay":"components-HomePage-Lists-styles-bouncedelay-1_G2W","bounce1":"components-HomePage-Lists-styles-bounce1-Bue9V","bounce2":"components-HomePage-Lists-styles-bounce2-2mBBc"};

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Snackbar__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_RaisedButton__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_RaisedButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_MuiThemeProvider__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles_MuiThemeProvider__);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();






var SnackbarExample = function SnackbarExample(props) {

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_MuiThemeProvider___default.a,
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_Snackbar___default.a, {
      open: props.isOpened,
      message: props.message,
      autoHideDuration: 3000,
      style: { textAlign: 'center' }
    })
  );
};

var _default = SnackbarExample;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SnackbarExample, 'SnackbarExample', 'F:/cnode/src/components/common/Snackbar.js');
  reactHotLoader.register(_default, 'default', 'F:/cnode/src/components/common/Snackbar.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redbox_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_RefreshIndicator__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_RefreshIndicator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_RefreshIndicator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_styles_MuiThemeProvider__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_styles_MuiThemeProvider__);





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Pull: {
    displayName: 'Pull'
  }
};

var _reactTransformCatchErrors2 = __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default()({
  filename: 'F:/cnode/src/components/common/react-pullrefresh.js',
  components: _components,
  locals: [],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_1_redbox_react___default.a, __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();




// import './rotate.less'
// import image from './pull.svg'

var MAX_DEFAULT = 100;

var Pull = _wrapComponent('Pull')((_temp = _class = function (_Component) {
  _inherits(Pull, _Component);

  function Pull(props) {
    _classCallCheck(this, Pull);

    var _this = _possibleConstructorReturn(this, (Pull.__proto__ || Object.getPrototypeOf(Pull)).call(this, props));

    _this.state = {
      pulled: 0
    };
    return _this;
  }

  _createClass(Pull, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.pullhelper = __webpack_require__(768);

      var _props = this.props,
          disabled = _props.disabled,
          onRefresh = _props.onRefresh,
          max = _props.max;

      var maxPull = max || MAX_DEFAULT;
      var that = this;

      this.pullhelper.on('start', function (pulled) {
        that.setState({
          pulling: true
        });
      }).on('stepback', function (pulled, next) {
        that.setState({
          pulled: pulled
        });
        var nextPulled = Math.min(pulled - Math.min(pulled / 2, 10), max);
        next(nextPulled);
      }).on('step', function (pulled) {
        that.setState({
          pulled: pulled
        });
      }).on('pull', function (pulled, next) {
        that.setState({
          pulling: false
        });
        if (!onRefresh || pulled < maxPull) {
          next();
          return;
        }
        that.setState({
          loading: true
        });
        onRefresh(function (_) {
          that.setState({
            loading: false
          });
          next();
        });
      }).load();
      if (disabled) {
        this.pullhelper.pause();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var disabled = this.props.disabled;

      if (disabled !== nextProps.disabled) {
        if (nextProps.disabled) {
          this.pullhelper.pause();
        } else {
          this.pullhelper.resume();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.pullhelper.unload();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          pulling = _state.pulling,
          loading = _state.loading,
          pulled = _state.pulled;

      var maxPull = this.props.max || MAX_DEFAULT;
      var size = this.props.size || 30;
      var color = this.props.color || '#00BCD4';
      var style = this.props.style || {};
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('div', { style: {
            display: pulling ? 'block' : 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: this.props.zIndex,
            userSelect: 'none'
          } }),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          { style: Object.assign({
              background: 'white',
              width: size,
              height: size,
              position: 'fixed',
              zIndex: this.props.zIndex,
              top: -size + Math.min(pulled, maxPull),
              left: '50%',
              borderRadius: size / 2,
              transform: 'translate(-50%,-50%)',
              boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)',
              userSelect: 'none'
            }, style) },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_material_ui_styles_MuiThemeProvider___default.a,
            null,
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_RefreshIndicator___default.a, {
              percentage: 80,
              size: size,
              left: 0,
              top: 0,
              color: color,
              loadingColor: color,
              status: pulled / maxPull > 0.9999 ? 'loading' : 'ready',
              style: { display: 'inline-block',
                position: 'relative',
                opacity: pulled / maxPull }
            })
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Pull;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]), _class.defaultProps = {
  max: MAX_DEFAULT
}, _temp));

var _default = Pull;


/* unused harmony default export */ var _unused_webpack_default_export = (_default);

// <i style={{
//   display:'block',
//   width:'100%',
//   height:'100%',
//   lineHeight:`${size}px`,
//   fontSize:`${size*0.6}px`,
//   color: color,
//   opacity:pulled/maxPull,
//   textAlign:'center',
//   transform:`rotate(${pulled/maxPull*360}deg)`,
//   animation:'rotating 2s linear infinite'
// }} className="iconfont" dangerouslySetInnerHTML={{__html: '&#xe603;'}}> 
// </i>

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MAX_DEFAULT, 'MAX_DEFAULT', 'F:/cnode/src/components/common/react-pullrefresh.js');
  reactHotLoader.register(Pull, 'Pull', 'F:/cnode/src/components/common/react-pullrefresh.js');
  reactHotLoader.register(_default, 'default', 'F:/cnode/src/components/common/react-pullrefresh.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redbox_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_common_Header_Header__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_common_CircleLoading__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Article_Content_Content__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Article_Reply_Reply__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_getSize__ = __webpack_require__(43);





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Article: {
    displayName: 'Article'
  }
};

var _reactTransformCatchErrors2 = __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default()({
  filename: 'F:/cnode/src/containers/Article.js',
  components: _components,
  locals: [],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_1_redbox_react___default.a, __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();










var Article = _wrapComponent('Article')(function (_Component) {
  _inherits(Article, _Component);

  function Article() {
    _classCallCheck(this, Article);

    var _this = _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this));

    _this.state = {
      fadeIn: true
    };
    return _this;
  }

  _createClass(Article, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          scrollT = _props.scrollT,
          dispatch = _props.dispatch,
          article = _props.article,
          isFetching = _props.isFetching;

      if (scrollT) {
        window.scrollTo(0, scrollT);
      }
      if (!article.author && !isFetching) {
        var topicId = window.location.href.split('topic/')[1].split('?_')[0];
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions__["u" /* fetchArticle */])(topicId));
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var scrollT = newProps.scrollT;

      window.scrollTo(0, scrollT);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.setState({
        fadeIn: false
      });

      var _getSize = Object(__WEBPACK_IMPORTED_MODULE_10__utils_getSize__["a" /* default */])(),
          scrollT = _getSize.scrollT;

      var _props2 = this.props,
          currentTopicId = _props2.currentTopicId,
          dispatch = _props2.dispatch,
          profile = _props2.profile,
          login = _props2.login;

      dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions__["C" /* recordArticleScrollT */])(currentTopicId, scrollT));
      if (!window.sessionStorage.masterProfile && login.loginName === profile.loginname) {
        window.sessionStorage.masterProfile = JSON.stringify(profile);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          isFetching = _props3.isFetching,
          article = _props3.article,
          currentTopicId = _props3.currentTopicId,
          login = _props3.login,
          switchSupportInfo = _props3.switchSupportInfo,
          isCommented = _props3.isCommented,
          dispatch = _props3.dispatch,
          collectedTopics = _props3.collectedTopics,
          profile = _props3.profile;

      if (login.loginName !== profile.loginname && window.sessionStorage.masterProfile) {
        collectedTopics = JSON.parse(window.sessionStorage.masterProfile).collectedTopics;
      }
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        { className: this.state.fadeIn ? 'fade-in' : '' },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_common_Header_Header__["a" /* default */], { isFetching: isFetching, title: '\u8BE6\u60C5', showBack: true }),
          Object.keys(article).length === 0 && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_common_CircleLoading__["a" /* default */], null),
          Object.keys(article).length !== 0 && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Article_Content_Content__["a" /* default */], { article: article, dispatch: dispatch, fetchProfile: __WEBPACK_IMPORTED_MODULE_5__actions__["x" /* fetchProfile */], login: login, collectedTopics: collectedTopics, profile: profile }),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Article_Reply_Reply__["a" /* default */], _extends({ replies: article.replies
            }, { login: login, dispatch: dispatch, switchSupportInfo: switchSupportInfo, currentTopicId: currentTopicId, profile: profile, isCommented: isCommented }))
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Article;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]));

Article.propTypes = {
  // currentTopicId: PropTypes.string.isRequired,
  // article: PropTypes.object.isRequired,
  // isFetching: PropTypes.bool.isRequired,
  // dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  var currentRouter = state.currentRouter,
      login = state.login,
      profile = state.profile;
  var _state$article = state.article,
      currentTopicId = _state$article.currentTopicId,
      switchSupportInfo = _state$article.switchSupportInfo,
      isCommented = _state$article.isCommented;
  var collectedTopics = profile.collectedTopics;

  var isFetching = state.article[currentTopicId] ? state.article[currentTopicId].isFetching : false;
  var scrollT = state.article[currentTopicId] ? state.article[currentTopicId].scrollT : '0';
  var article = state.article[currentTopicId] && state.article[currentTopicId].article ? state.article[currentTopicId].article : {};
  return { isFetching: isFetching, scrollT: scrollT, article: article, currentTopicId: currentTopicId, login: login, switchSupportInfo: switchSupportInfo, currentRouter: currentRouter, collectedTopics: collectedTopics, profile: profile, isCommented: isCommented };
}

var _default = Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(mapStateToProps)(Article);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Article, 'Article', 'F:/cnode/src/containers/Article.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'F:/cnode/src/containers/Article.js');
  reactHotLoader.register(_default, 'default', 'F:/cnode/src/containers/Article.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redbox_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Message_Content_Content__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_common_LinkToLogin_LinkToLogin__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_common_Header_Header__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_getSize__ = __webpack_require__(43);





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Message: {
    displayName: 'Message'
  }
};

var _reactTransformCatchErrors2 = __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default()({
  filename: 'F:/cnode/src/containers/Message.js',
  components: _components,
  locals: [],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_1_redbox_react___default.a, __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();









var Message = _wrapComponent('Message')(function (_Component) {
  _inherits(Message, _Component);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).apply(this, arguments));
  }

  _createClass(Message, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          login = _props.login,
          dispatch = _props.dispatch,
          message = _props.message;

      if (login.accessToken && message.hasReadMessage.length === 0) {
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions__["w" /* fetchMessage */])(login.accessToken));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          dispatch = _props2.dispatch,
          currentRouter = _props2.currentRouter,
          message = _props2.message,
          article = _props2.article,
          login = _props2.login;

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_common_Header_Header__["a" /* default */], { title: '\u8BE6\u60C5' }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            { style: { paddingTop: 64 } },
            login.succeed && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Message_Content_Content__["a" /* default */], _extends({}, message, { dispatch: dispatch, fetchArticle: __WEBPACK_IMPORTED_MODULE_5__actions__["u" /* fetchArticle */], article: article, login: login })),
            !login.succeed && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_common_LinkToLogin_LinkToLogin__["a" /* default */], { dispatch: dispatch })
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Message;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]));

function mapStateToProps(state) {
  var login = state.login,
      message = state.message,
      article = state.article;

  return { login: login, message: message, article: article };
}

var _default = Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(mapStateToProps)(Message);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Message, 'Message', 'F:/cnode/src/containers/Message.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'F:/cnode/src/containers/Message.js');
  reactHotLoader.register(_default, 'default', 'F:/cnode/src/containers/Message.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redbox_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_transformDate__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_scss__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_dom__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_hashUrl__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_routePrefix__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Tabs__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_Tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_swipeable_views__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_swipeable_views___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_swipeable_views__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_styles_MuiThemeProvider__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_List__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_material_ui_Divider__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_material_ui_Avatar__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_material_ui_Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_material_ui_Avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_material_ui_RaisedButton__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_material_ui_RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_material_ui_RaisedButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_Dialog__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_CircleLoading__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__actions__ = __webpack_require__(25);





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Content: {
		displayName: 'Content'
	}
};

var _reactTransformCatchErrors2 = __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default()({
	filename: 'F:/cnode/src/components/Message/Content/Content.js',
	components: _components,
	locals: [],
	imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_1_redbox_react___default.a, __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default.a]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformCatchErrors2(Component, id);
	};
}

(function () {
	var enterModule = __webpack_require__(1).enterModule;

	enterModule && enterModule(module);
})();




















var Content = _wrapComponent('Content')((_dec = Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(), _dec(_class = function (_Component) {
	_inherits(Content, _Component);

	function Content(props) {
		_classCallCheck(this, Content);

		var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

		_this.handleChange = function (value) {
			_this.setState({
				slideIndex: value
			});
		};

		_this.markMessages = function () {
			var _this$props = _this.props,
			    dispatch = _this$props.dispatch,
			    login = _this$props.login;

			var accessToken = login.accessToken;
			dispatch(Object(__WEBPACK_IMPORTED_MODULE_20__actions__["B" /* markAllMessages */])(accessToken));
			_this.setState({
				isUpdating: true
			});
		};

		_this.close = function () {
			_this.setState({
				isOpen: false
			});
		};

		_this.state = {
			slideIndex: 0,
			isOpen: false,
			isUpdating: false
		};
		return _this;
	}

	_createClass(Content, [{
		key: 'componentWillUpdate',
		value: function componentWillUpdate(newProps) {
			var dispatch = newProps.dispatch,
			    login = newProps.login,
			    isMarked = newProps.isMarked,
			    hasNotReadMessage = newProps.hasNotReadMessage;

			var accessToken = login.accessToken;
			if (isMarked && isMarked !== this.props.isMarked) {
				dispatch(Object(__WEBPACK_IMPORTED_MODULE_20__actions__["w" /* fetchMessage */])(accessToken));
			}
			if (isMarked && hasNotReadMessage.length === 0 && hasNotReadMessage.length !== this.props.hasNotReadMessage.length) {
				this.setState({
					isUpdating: false
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    dispatch = _props.dispatch,
			    hasNotReadMessage = _props.hasNotReadMessage,
			    hasReadMessage = _props.hasReadMessage,
			    article = _props.article,
			    fetchArticle = _props.fetchArticle;

			return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
				'div',
				null,
				this.state.isUpdating && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					'div',
					null,
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__common_CircleLoading__["a" /* default */], null)
				),
				!this.state.isUpdating && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_13_material_ui_styles_MuiThemeProvider___default.a,
					null,
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
						'div',
						null,
						__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_11_material_ui_Tabs__["Tabs"],
							{ onChange: this.handleChange, value: this.state.slideIndex },
							__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Tabs__["Tab"], { label: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
									'h2',
									null,
									'\u672A\u8BFB\u6D88\u606F:',
									hasNotReadMessage && hasNotReadMessage.length
								), value: 0 }),
							__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Tabs__["Tab"], { label: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
									'h2',
									null,
									'\u5DF2\u8BFB\u6D88\u606F:',
									hasReadMessage && hasReadMessage.length
								), value: 1 })
						),
						__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_12_react_swipeable_views___default.a,
							{ index: this.state.slideIndex, onChangeIndex: this.handleChange },
							__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
								'div',
								null,
								hasNotReadMessage && hasNotReadMessage.length === 0 && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
									'div',
									null,
									__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
										'div',
										{ className: __WEBPACK_IMPORTED_MODULE_6__styles_scss___default.a.msg },
										'\u6682\u65E0\u672A\u8BFB\u6D88\u606F'
									)
								),
								hasNotReadMessage.length > 0 && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
									'div',
									null,
									__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
										__WEBPACK_IMPORTED_MODULE_14_material_ui_List__["List"],
										null,
										hasNotReadMessage.map(function (msg, index) {
											return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_8_react_router_dom__["a" /* Link */],
												{ key: index, to: __WEBPACK_IMPORTED_MODULE_10__utils_routePrefix__["a" /* default */] + '/topic/' + msg.topic.id, className: __WEBPACK_IMPORTED_MODULE_6__styles_scss___default.a.link, onClick: function onClick(e) {
														dispatch(Object(__WEBPACK_IMPORTED_MODULE_9__actions_hashUrl__["d" /* setTransition */])({ transition: 'move' }));
														if (!article[msg.topic.id]) {
															dispatch(fetchArticle(msg.topic.id));
														} else if (article.currentTopicId !== topic.id) {
															dispatch(fetchArticle(msg.topic.id, false));
														}
													} },
												__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_material_ui_List__["ListItem"], {
													leftAvatar: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16_material_ui_Avatar___default.a, { src: msg.author.avatar_url }),
													primaryText: msg.author.loginname,
													secondaryText: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
														'div',
														null,
														__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_6__styles_scss___default.a.oneline, dangerouslySetInnerHTML: { __html: msg.reply.content } }),
														__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
															'p',
															{ style: { fontSize: '14px' } },
															__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
																'span',
																null,
																'\u6765\u81EA:',
																msg.topic.title
															),
															__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
																'span',
																{ style: { float: 'right' } },
																Object(__WEBPACK_IMPORTED_MODULE_5__utils_transformDate__["a" /* default */])(msg.reply.create_at)
															)
														)
													),
													secondaryTextLines: 2
												}),
												__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15_material_ui_Divider___default.a, { inset: true })
											);
										})
									),
									__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
										'div',
										{ style: { textAlign: 'center' } },
										__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17_material_ui_RaisedButton___default.a, { label: '\u6E05\u7A7A\u672A\u8BFB\u6D88\u606F', primary: true, onClick: function onClick(e) {
												_this2.setState({
													isOpen: true
												});
											} })
									),
									__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
										__WEBPACK_IMPORTED_MODULE_18__common_Dialog__["a" /* default */],
										{ isOpen: this.state.isOpen, title: '\u6CE8\u610F', action: this.markMessages, close: this.close },
										'\u662F\u5426\u5C06\u6240\u6709\u672A\u8BFB\u6D88\u606F\u6807\u8BB0\u4E3A\u5DF2\u8BFB\uFF1F'
									)
								)
							),
							__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
								'div',
								null,
								hasReadMessage.length === 0 && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
									'div',
									{ className: __WEBPACK_IMPORTED_MODULE_6__styles_scss___default.a.msg },
									'\u60A8\u8FD8\u6CA1\u6709\u67E5\u770B\u8FC7\u4EFB\u4F55\u6D88\u606F\u54E6'
								),
								hasReadMessage.length > 0 && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
									__WEBPACK_IMPORTED_MODULE_14_material_ui_List__["List"],
									null,
									hasReadMessage.map(function (msg, index) {
										return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_8_react_router_dom__["a" /* Link */],
											{ key: index, to: __WEBPACK_IMPORTED_MODULE_10__utils_routePrefix__["a" /* default */] + '/topic/' + msg.topic.id, className: __WEBPACK_IMPORTED_MODULE_6__styles_scss___default.a.link, onClick: function onClick(e) {
													dispatch(Object(__WEBPACK_IMPORTED_MODULE_9__actions_hashUrl__["d" /* setTransition */])({ transition: 'move' }));
													if (!article[msg.topic.id]) {
														dispatch(fetchArticle(msg.topic.id));
													} else if (article.currentTopicId !== topic.id) {
														dispatch(fetchArticle(msg.topic.id, false));
													}
												} },
											__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_material_ui_List__["ListItem"], {
												leftAvatar: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16_material_ui_Avatar___default.a, { src: msg.author.avatar_url }),
												primaryText: msg.author.loginname,
												secondaryText: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
													'div',
													null,
													__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_6__styles_scss___default.a.oneline, dangerouslySetInnerHTML: { __html: msg.reply.content } }),
													__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
														'p',
														{ style: { fontSize: '14px' } },
														__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
															'span',
															null,
															'\u6765\u81EA:',
															msg.topic.title
														),
														__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
															'span',
															{ style: { float: 'right' } },
															Object(__WEBPACK_IMPORTED_MODULE_5__utils_transformDate__["a" /* default */])(msg.reply.create_at)
														)
													)
												),
												secondaryTextLines: 2
											}),
											__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15_material_ui_Divider___default.a, { inset: true })
										);
									})
								)
							)
						)
					)
				)
			);
		}
	}, {
		key: '__reactstandin__regenerateByEval',
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return Content;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"])) || _class));

var _default = Content;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__(1).default;

	var leaveModule = __webpack_require__(1).leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Content, 'Content', 'F:/cnode/src/components/Message/Content/Content.js');
	reactHotLoader.register(_default, 'default', 'F:/cnode/src/components/Message/Content/Content.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"content":"components-Message-Content-styles-content-1lvAg","link":"components-Message-Content-styles-link-PuXBJ","msg":"components-Message-Content-styles-msg-1VGaD","oneline":"components-Message-Content-styles-oneline-V4J8p"};

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redbox_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_common_Header_Header__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_common_Profile_Profile__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_getSize__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_styles_MuiThemeProvider__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_CircularProgress__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_CircularProgress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_CircularProgress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_RaisedButton__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_RaisedButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_TextField__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_Toggle__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_Toggle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_material_ui_Toggle__);





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Login: {
    displayName: 'Login'
  }
};

var _reactTransformCatchErrors2 = __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default()({
  filename: 'F:/cnode/src/containers/Login.js',
  components: _components,
  locals: [],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_1_redbox_react___default.a, __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();













var Login = _wrapComponent('Login')(function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));

    _this.onToggle = function () {
      _this.setState({
        toggleOn: !_this.state.toggleOn
      });
    };

    _this.state = {
      toggleOn: true
    };
    return _this;
  }

  _createClass(Login, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var succeed = newProps.succeed,
          loginName = newProps.loginName,
          accessToken = newProps.accessToken,
          dispatch = newProps.dispatch,
          profile = newProps.profile;

      if (succeed && !profile.isFetching && profile.loginname !== loginName) {
        if (this.state.toggleOn && !window.localStorage.getItem('masterInfo')) {
          accessToken = accessToken.trim();
          loginName = loginName.trim();
          var masterInfo = { accessToken: accessToken, loginName: loginName };
          masterInfo = JSON.stringify(masterInfo);
          window.localStorage.setItem('masterInfo', masterInfo);
        }
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions__["x" /* fetchProfile */])(loginName));
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions__["w" /* fetchMessage */])(accessToken));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          dispatch = _props.dispatch,
          article = _props.article,
          profile = _props.profile,
          failedMessage = _props.failedMessage,
          succeed = _props.succeed,
          loginName = _props.loginName,
          loginId = _props.loginId,
          accessToken = _props.accessToken,
          collectedTopics = _props.collectedTopics;

      if (loginName !== profile.loginname && window.sessionStorage.masterProfile) {
        profile = JSON.parse(window.sessionStorage.masterProfile);
        collectedTopics = profile.collectedTopics;
      }
      var masterInfo = window.localStorage.getItem('masterInfo') ? true : false;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_common_Header_Header__["a" /* default */], { isFetching: profile.loginname ? false : true, title: '\u4E2A\u4EBA\u4E2D\u5FC3', showBack: false }),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          { style: { textAlign: 'center', paddingTop: 100 } },
          !masterInfo && !succeed && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9_material_ui_styles_MuiThemeProvider___default.a,
            null,
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_TextField___default.a, { hintText: '\u8BF7\u8F93\u5165Access Token', floatingLabelText: '\u8BF7\u8F93\u5165Access Token', ref: 'input' })
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                { style: { display: 'inline-block', margin: '0 auto' } },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_material_ui_Toggle___default.a, { label: '\u8BB0\u4F4F\u767B\u9646\u4FE1\u606F', defaultToggled: true, onToggle: this.onToggle, style: { maxWidth: 200 } })
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_RaisedButton___default.a, { label: '\u767B\u9646', primary: true, onClick: function onClick() {
                    var input = _this2.refs.input.input.value;
                    if (!input.trim()) {
                      return null;
                    }
                    dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions__["t" /* fetchAccess */])(input));
                  } })
              )
            )
          ),
          !succeed && failedMessage && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'h2',
            { style: { color: 'red' } },
            failedMessage
          ),
          succeed && !profile.loginname && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9_material_ui_styles_MuiThemeProvider___default.a,
            null,
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_CircularProgress___default.a, { size: 60, thickness: 7 })
          ),
          succeed && profile.loginname && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_common_Profile_Profile__["a" /* default */], { collectedTopics: collectedTopics, profile: profile, dispatch: dispatch, fetchArticle: __WEBPACK_IMPORTED_MODULE_5__actions__["u" /* fetchArticle */], article: article })
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]));

function mapStateToProps(state) {
  var article = state.article,
      profile = state.profile,
      login = state.login,
      currentRouter = state.currentRouter;
  var failedMessage = login.failedMessage,
      succeed = login.succeed,
      loginName = login.loginName,
      loginId = login.loginId,
      accessToken = login.accessToken;
  var collectedTopics = profile.collectedTopics;

  return { article: article, profile: profile, succeed: succeed, loginName: loginName, loginId: loginId, accessToken: accessToken, failedMessage: failedMessage, collectedTopics: collectedTopics };
}

// 用connect方法连接HomePage组件，实际上是在HomePage组件上加上了Connect(HomePage)这个父组件，HomePage里有关Connect的state变化的props就是通过mapStateToProps设置的
// connect方法的第二个参数如果不传的话就会默认将store.dispatch默认作为了dispatch参数传进HomePage的props，所以HomePage的props里就有一个dispatch

var _default = Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(mapStateToProps)(Login);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Login, 'Login', 'F:/cnode/src/containers/Login.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'F:/cnode/src/containers/Login.js');
  reactHotLoader.register(_default, 'default', 'F:/cnode/src/containers/Login.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"components-common-Profile-styles-header-MY9RG","boxs":"components-common-Profile-styles-boxs-1zVgO","box":"components-common-Profile-styles-box-1z0N6","title":"components-common-Profile-styles-title-3YN3p","link":"components-common-Profile-styles-link-3MV6P"};

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redbox_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_common_Header_Header__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_common_Profile_Profile__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_getSize__ = __webpack_require__(43);





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Profile: {
    displayName: 'Profile'
  }
};

var _reactTransformCatchErrors2 = __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default()({
  filename: 'F:/cnode/src/containers/Profile.js',
  components: _components,
  locals: [],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_1_redbox_react___default.a, __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();








var Profile = _wrapComponent('Profile')(function (_Component) {
  _inherits(Profile, _Component);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
  }

  _createClass(Profile, [{
    key: 'render',
    value: function render() {
      var profile = this.props.profile;

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_common_Header_Header__["a" /* default */], { title: '\u8BE6\u60C5', showBack: true }),
          profile.loginname && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            { style: { paddingTop: 100 } },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_common_Profile_Profile__["a" /* default */], _extends({}, this.props, { fetchArticle: __WEBPACK_IMPORTED_MODULE_5__actions__["u" /* fetchArticle */] }))
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Profile;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]));

// HomePage.propTypes = {
//   selectedTab: PropTypes.string.isRequired,
//   topics: PropTypes.array.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   page:PropTypes.number.isRequired,
//   scrollT:PropTypes.number.isRequired,
//   dispatch: PropTypes.func.isRequired
// }

function mapStateToProps(state) {
  var profile = state.profile,
      article = state.article;
  var collectedTopics = profile.collectedTopics;

  return { profile: profile, article: article, collectedTopics: collectedTopics };
}

var _default = Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(mapStateToProps)(Profile);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Profile, 'Profile', 'F:/cnode/src/containers/Profile.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'F:/cnode/src/containers/Profile.js');
  reactHotLoader.register(_default, 'default', 'F:/cnode/src/containers/Profile.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redbox_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_routePrefix__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_common_Header_Header__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_common_Dialog__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_common_LinkToLogin_LinkToLogin__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_PublishTopic_Form_Form__ = __webpack_require__(780);





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  PublishTopic: {
    displayName: 'PublishTopic'
  }
};

var _reactTransformCatchErrors2 = __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default()({
  filename: 'F:/cnode/src/containers/PublishTopic.js',
  components: _components,
  locals: [],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_1_redbox_react___default.a, __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();











var PublishTopic = _wrapComponent('PublishTopic')(function (_Component) {
  _inherits(PublishTopic, _Component);

  function PublishTopic() {
    _classCallCheck(this, PublishTopic);

    var _this = _possibleConstructorReturn(this, (PublishTopic.__proto__ || Object.getPrototypeOf(PublishTopic)).call(this));

    _this.close = function () {
      _this.setState({
        isOpen: false
      });
    };

    _this.state = {
      isOpen: false,
      isFetching: false,
      titleErr: false,
      contentErr: false
    };
    return _this;
  }

  _createClass(PublishTopic, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var publishTopic = newProps.publishTopic,
          dispatch = newProps.dispatch;

      if (!this.props.publishTopic.topicId || this.props.publishTopic.topicId !== publishTopic.topicId) {
        this.setState({ isFetching: false });
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions__["u" /* fetchArticle */])(publishTopic.topicId));
      }
    }
  }, {
    key: 'showDialog',
    value: function showDialog() {
      this.setState({
        isOpen: true,
        isFetching: true
      });
    }
  }, {
    key: 'ifTitleErr',
    value: function ifTitleErr(boolean) {
      this.setState({
        titleErr: boolean
      });
    }
  }, {
    key: 'ifContentErr',
    value: function ifContentErr(boolean) {
      this.setState({
        contentErr: boolean
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          dispatch = _props.dispatch,
          publishTopic = _props.publishTopic,
          currentRouter = _props.currentRouter,
          login = _props.login;

      var ifTitleErr = this.ifTitleErr.bind(this);
      var ifContentErr = this.ifContentErr.bind(this);
      var showDialog = this.showDialog.bind(this);
      var state = this.state;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_common_Header_Header__["a" /* default */], { title: '\u53D1\u5E03\u65B0\u8BDD\u9898' }),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          { style: { paddingTop: 100 } },
          login.succeed && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_PublishTopic_Form_Form__["a" /* default */], { ifTitleErr: ifTitleErr, ifContentErr: ifContentErr, showDialog: showDialog, fetchPublishTopic: __WEBPACK_IMPORTED_MODULE_7__actions__["y" /* fetchPublishTopic */], dispatch: dispatch, login: login, state: state }),
          !login.succeed && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_common_LinkToLogin_LinkToLogin__["a" /* default */], { dispatch: dispatch })
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9__components_common_Dialog__["a" /* default */],
          { isOpen: this.state.isOpen, link: __WEBPACK_IMPORTED_MODULE_6__utils_routePrefix__["a" /* default */] + '/topic/' + publishTopic.topicId, close: this.close },
          state.isFetching && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            null,
            '\u52A0\u8F7D\u4E2D'
          ),
          !state.isFetching && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            null,
            '\u53D1\u9001\u6210\u529F\uFF0C\u53BB\u67E5\u770B'
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return PublishTopic;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]));

// HomePage.propTypes = {
//   selectedTab: PropTypes.string.isRequired,
//   topics: PropTypes.array.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   page:PropTypes.number.isRequired,
//   scrollT:PropTypes.number.isRequired,
//   dispatch: PropTypes.func.isRequired
// }

function mapStateToProps(state) {
  var publishTopic = state.publishTopic,
      login = state.login;
  // const {selectedTab,tabData} = state.homePage;
  // // 当组件第一次render时,还未进行任何action,初始化的state里没有tabData[selectedTab]，所以这里需要初始化
  // const {isFetching,page,scrollT,topics} = tabData[selectedTab] || {isFetching:false,page:0,scrollT:0,topics:[]}

  return { publishTopic: publishTopic, login: login };
}

// 用connect方法连接HomePage组件，实际上是在HomePage组件上加上了Connect(HomePage)这个父组件，HomePage里有关Connect的state变化的props就是通过mapStateToProps设置的
// connect方法的第二个参数如果不传的话就会默认将store.dispatch默认作为了dispatch参数传进HomePage的props，所以HomePage的props里就有一个dispatch

var _default = Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(mapStateToProps)(PublishTopic);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PublishTopic, 'PublishTopic', 'F:/cnode/src/containers/PublishTopic.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'F:/cnode/src/containers/PublishTopic.js');
  reactHotLoader.register(_default, 'default', 'F:/cnode/src/containers/PublishTopic.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redbox_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_getStrLength__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_scss__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_TextField__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_styles_MuiThemeProvider__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_RaisedButton__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_RaisedButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_DropDownMenu__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_DropDownMenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_DropDownMenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_MenuItem__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_MenuItem__);





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Form: {
		displayName: 'Form'
	}
};

var _reactTransformCatchErrors2 = __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default()({
	filename: 'F:/cnode/src/components/PublishTopic/Form/Form.js',
	components: _components,
	locals: [],
	imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_1_redbox_react___default.a, __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default.a]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformCatchErrors2(Component, id);
	};
}

(function () {
	var enterModule = __webpack_require__(1).enterModule;

	enterModule && enterModule(module);
})();











var Form = _wrapComponent('Form')(function (_Component) {
	_inherits(Form, _Component);

	function Form(props) {
		_classCallCheck(this, Form);

		var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

		_this.handleChange = function (event, index, value) {
			return _this.setState({ value: value });
		};

		_this.state = { value: "ask" };
		return _this;
	}

	_createClass(Form, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    ifTitleErr = _props.ifTitleErr,
			    ifContentErr = _props.ifContentErr,
			    showDialog = _props.showDialog,
			    fetchPublishTopic = _props.fetchPublishTopic,
			    dispatch = _props.dispatch,
			    login = _props.login,
			    state = _props.state;

			return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_8_material_ui_styles_MuiThemeProvider___default.a,
				null,
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					'form',
					{ className: __WEBPACK_IMPORTED_MODULE_5__styles_scss___default.a.form },
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
						'div',
						{ className: __WEBPACK_IMPORTED_MODULE_5__styles_scss___default.a.content },
						__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
							'span',
							{ className: __WEBPACK_IMPORTED_MODULE_5__styles_scss___default.a.title },
							'\u8BF7\u9009\u62E9\u4E3B\u9898\u7C7B\u522B:'
						),
						__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_10_material_ui_DropDownMenu___default.a,
							{ value: this.state.value, onChange: this.handleChange, ref: 'select' },
							__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_MenuItem___default.a, { value: 'ask', primaryText: '\u95EE\u7B54' }),
							__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_MenuItem___default.a, { value: 'share', primaryText: '\u5206\u4EAB' }),
							__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_MenuItem___default.a, { value: 'job', primaryText: '\u62DB\u8058' })
						)
					),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
						'div',
						{ className: __WEBPACK_IMPORTED_MODULE_5__styles_scss___default.a.content },
						__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_TextField___default.a, { ref: 'input', hintText: ' \u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u4E0D\u5C11\u4E8E\u5341\u4E2A\u5B57\u7B26', floatingLabelText: ' \u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u4E0D\u5C11\u4E8E\u5341\u4E2A\u5B57\u7B26', onChange: function onChange(e) {
								var titleErr = Object(__WEBPACK_IMPORTED_MODULE_4__utils_getStrLength__["a" /* default */])(e.target.value) < 10 ? true : false;
								ifTitleErr(titleErr);
							} }),
						__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
							'div',
							{ style: { height: state.titleErr ? 20 : 0 }, className: __WEBPACK_IMPORTED_MODULE_5__styles_scss___default.a.errorInfo },
							'\u6807\u9898\u4E0D\u5F97\u5C11\u4E8E\u5341\u4E2A\u5B57\u7B26\uFF01'
						)
					),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
						'div',
						{ className: __WEBPACK_IMPORTED_MODULE_5__styles_scss___default.a.content },
						__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_TextField___default.a, { ref: 'textarea', hintText: ' \u8BF7\u8F93\u5165\u5185\u5BB9', floatingLabelText: '\u8BF7\u8F93\u5165\u5185\u5BB9', style: { textAlign: 'left' },
							multiLine: true, rows: 2, onChange: function onChange(e) {
								var contentErr = Object(__WEBPACK_IMPORTED_MODULE_4__utils_getStrLength__["a" /* default */])(e.target.value) === 0 ? true : false;
								ifContentErr(contentErr);
							} }),
						__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
							'div',
							{ style: { height: state.contentErr ? 20 : 0 }, className: __WEBPACK_IMPORTED_MODULE_5__styles_scss___default.a.errorInfo },
							'\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A\uFF01'
						)
					),
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_RaisedButton___default.a, { label: '\u63D0\u4EA4', primary: true, onClick: function onClick(e) {
							e.preventDefault();
							var input = _this2.refs.input.input.value;
							var textarea = _this2.refs.textarea.input.refs.input.value;
							var select = _this2.refs.select.props.value;
							if (Object(__WEBPACK_IMPORTED_MODULE_4__utils_getStrLength__["a" /* default */])(input) < 10 || !textarea.trim()) {
								return null;
							}
							dispatch(fetchPublishTopic(login.accessToken, select, input, textarea));
							showDialog();
						} })
				)
			);
		}
	}, {
		key: '__reactstandin__regenerateByEval',
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return Form;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]));

var _default = Form;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__(1).default;

	var leaveModule = __webpack_require__(1).leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Form, 'Form', 'F:/cnode/src/components/PublishTopic/Form/Form.js');
	reactHotLoader.register(_default, 'default', 'F:/cnode/src/components/PublishTopic/Form/Form.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {(function () {
    var enterModule = __webpack_require__(1).enterModule;

    enterModule && enterModule(module);
})();

// GBK字符集实际长度计算
var getStrLength = function getStrLength(str) {
    var realLength = 0;
    var len = str.length;
    var charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) {
            realLength += 1;
        } else {
            // 如果是中文则长度加2
            realLength += 2;
        }
    }
    return realLength;
};

var _default = getStrLength;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__(1).default;

    var leaveModule = __webpack_require__(1).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(getStrLength, "getStrLength", "F:/cnode/src/utils/getStrLength.js");
    reactHotLoader.register(_default, "default", "F:/cnode/src/utils/getStrLength.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ }),

/***/ 782:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"form":"components-PublishTopic-Form-styles-form-1ob0X","errorInfo":"components-PublishTopic-Form-styles-errorInfo-2aEd_","content":"components-PublishTopic-Form-styles-content-1XyF4","title":"components-PublishTopic-Form-styles-title-1taud"};

/***/ }),

/***/ 796:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redbox_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redbox_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_hashUrl__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_scss__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_AppBar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_IconButton__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_styles_MuiThemeProvider__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_getSize__ = __webpack_require__(43);





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Header: {
		displayName: 'Header'
	}
};

var _reactTransformCatchErrors2 = __WEBPACK_IMPORTED_MODULE_3_react_transform_catch_errors___default()({
	filename: 'F:/cnode/src/components/common/Header/Header.js',
	components: _components,
	locals: [],
	imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_1_redbox_react___default.a, __WEBPACK_IMPORTED_MODULE_0_redBoxBlackStyle___default.a]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformCatchErrors2(Component, id);
	};
}

(function () {
	var enterModule = __webpack_require__(1).enterModule;

	enterModule && enterModule(module);
})();











// @withRouter

var Header = _wrapComponent('Header')((_dec = Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(function (store) {
	return { hashUrl: store.hashUrl };
}), _dec(_class = function (_Component) {
	_inherits(Header, _Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    isFetching = _props.isFetching,
			    title = _props.title,
			    history = _props.history,
			    hashUrl = _props.hashUrl;

			console.log(this.props.history);
			return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
				'div',
				{ className: __WEBPACK_IMPORTED_MODULE_7__styles_scss___default.a.header, style: { width: window.width || '100%' } },
				__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_10_material_ui_styles_MuiThemeProvider___default.a,
					null,
					__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_AppBar___default.a, {
						title: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
							'p',
							{ className: __WEBPACK_IMPORTED_MODULE_7__styles_scss___default.a.title },
							isFetching ? '加载中' : title
						),
						iconElementLeft: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_9_material_ui_IconButton___default.a,
							null,
							__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('i', { className: 'iconfont', dangerouslySetInnerHTML: { __html: '&#xe611;' } })
						),
						onLeftIconButtonClick: function onLeftIconButtonClick() {
							_this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__actions_hashUrl__["d" /* setTransition */])({ transition: 'left' }));
							history.goBack();
							// window.location.href = `${window.location.href.split('#')[0]}#${hashUrl.oldUrl}`
						}
					})
				)
			);
		}
	}, {
		key: '__reactstandin__regenerateByEval',
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return Header;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"])) || _class));

var _default = Object(__WEBPACK_IMPORTED_MODULE_5_react_router_dom__["f" /* withRouter */])(Header);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__(1).default;

	var leaveModule = __webpack_require__(1).leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Header, 'Header', 'F:/cnode/src/components/common/Header/Header.js');
	reactHotLoader.register(_default, 'default', 'F:/cnode/src/components/common/Header/Header.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)(module)))

/***/ })

},[311]);
//# sourceMappingURL=app.js.map