/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(1));
var react_dom_1 = __importDefault(__webpack_require__(2));
var App_1 = __importDefault(__webpack_require__(3));
react_dom_1.default.render(react_1.default.createElement(App_1.default, null), document.getElementById("App"));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CANVAS_ATTRIBUTES = void 0;
var react_1 = __importDefault(__webpack_require__(1));
var PlayerHome_1 = __importDefault(__webpack_require__(4));
var HorizontalPath_1 = __importDefault(__webpack_require__(5));
var VerticalPath_1 = __importDefault(__webpack_require__(6));
var map_1 = __webpack_require__(7);
__webpack_require__(8);
exports.CANVAS_ATTRIBUTES = {
    X_COORD: 0,
    Y_COORD: 0,
    WIDTH: canvas.width,
    HEIGHT: canvas.height,
    CHILD_X_COORD: (canvas.width) * 3 / 5,
    CHILD_Y_COORD: (canvas.height) * 3 / 5,
    CHILD_WIDTH: (canvas.width) * 2 / 5,
    CHILD_HEIGTH: (canvas.height) * 2 / 5
};
function App() {
    canvas.onclick = map_1.handleCanvasClicks;
    ctx.beginPath();
    ctx.rect(exports.CANVAS_ATTRIBUTES.X_COORD, exports.CANVAS_ATTRIBUTES.Y_COORD, exports.CANVAS_ATTRIBUTES.WIDTH, exports.CANVAS_ATTRIBUTES.HEIGHT);
    ctx.strokeStyle = "rgba(0, 0, 0, 1)";
    ctx.stroke();
    ctx.closePath();
    // console.log(ctx)
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(PlayerHome_1.default, { playerHomeID: "box1", x_coord: exports.CANVAS_ATTRIBUTES.X_COORD, y_coord: exports.CANVAS_ATTRIBUTES.Y_COORD, width: exports.CANVAS_ATTRIBUTES.CHILD_WIDTH, height: exports.CANVAS_ATTRIBUTES.CHILD_HEIGTH }),
        react_1.default.createElement(PlayerHome_1.default, { playerHomeID: "box2", x_coord: exports.CANVAS_ATTRIBUTES.X_COORD + exports.CANVAS_ATTRIBUTES.CHILD_X_COORD, y_coord: exports.CANVAS_ATTRIBUTES.Y_COORD, width: exports.CANVAS_ATTRIBUTES.CHILD_WIDTH, height: exports.CANVAS_ATTRIBUTES.CHILD_HEIGTH }),
        react_1.default.createElement(PlayerHome_1.default, { playerHomeID: "box3", x_coord: exports.CANVAS_ATTRIBUTES.X_COORD + exports.CANVAS_ATTRIBUTES.CHILD_X_COORD, y_coord: exports.CANVAS_ATTRIBUTES.Y_COORD + exports.CANVAS_ATTRIBUTES.CHILD_Y_COORD, width: exports.CANVAS_ATTRIBUTES.CHILD_WIDTH, height: exports.CANVAS_ATTRIBUTES.CHILD_HEIGTH }),
        react_1.default.createElement(PlayerHome_1.default, { playerHomeID: "box4", x_coord: exports.CANVAS_ATTRIBUTES.X_COORD, y_coord: exports.CANVAS_ATTRIBUTES.Y_COORD + exports.CANVAS_ATTRIBUTES.CHILD_Y_COORD, width: exports.CANVAS_ATTRIBUTES.CHILD_WIDTH, height: exports.CANVAS_ATTRIBUTES.CHILD_HEIGTH }),
        react_1.default.createElement(HorizontalPath_1.default, { hPathID: "hPath1", x_coord: exports.CANVAS_ATTRIBUTES.X_COORD, y_coord: exports.CANVAS_ATTRIBUTES.CHILD_HEIGTH, width: exports.CANVAS_ATTRIBUTES.CHILD_WIDTH, height: exports.CANVAS_ATTRIBUTES.CHILD_Y_COORD - exports.CANVAS_ATTRIBUTES.CHILD_HEIGTH }),
        react_1.default.createElement(HorizontalPath_1.default, { hPathID: "hPath2", x_coord: exports.CANVAS_ATTRIBUTES.X_COORD + exports.CANVAS_ATTRIBUTES.CHILD_X_COORD, y_coord: exports.CANVAS_ATTRIBUTES.CHILD_HEIGTH, width: exports.CANVAS_ATTRIBUTES.CHILD_WIDTH, height: exports.CANVAS_ATTRIBUTES.CHILD_Y_COORD - exports.CANVAS_ATTRIBUTES.CHILD_HEIGTH }),
        react_1.default.createElement(VerticalPath_1.default, { vPathID: "vPath1", x_coord: exports.CANVAS_ATTRIBUTES.CHILD_WIDTH, y_coord: exports.CANVAS_ATTRIBUTES.Y_COORD, width: exports.CANVAS_ATTRIBUTES.CHILD_X_COORD - exports.CANVAS_ATTRIBUTES.CHILD_WIDTH, height: exports.CANVAS_ATTRIBUTES.CHILD_HEIGTH }),
        react_1.default.createElement(VerticalPath_1.default, { vPathID: "vPath2", x_coord: exports.CANVAS_ATTRIBUTES.X_COORD + exports.CANVAS_ATTRIBUTES.CHILD_WIDTH, y_coord: exports.CANVAS_ATTRIBUTES.CHILD_Y_COORD, width: exports.CANVAS_ATTRIBUTES.CHILD_X_COORD - exports.CANVAS_ATTRIBUTES.CHILD_WIDTH, height: exports.CANVAS_ATTRIBUTES.CHILD_HEIGTH })));
}
exports.default = App;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DICE = exports.PLAYER_MAIN_AREA = void 0;
var react_1 = __importStar(__webpack_require__(1));
function PlayerHome(_a) {
    var playerHomeID = _a.playerHomeID, x_coord = _a.x_coord, y_coord = _a.y_coord, width = _a.width, height = _a.height;
    exports.PLAYER_MAIN_AREA = {
        homeX_coord: (width * 1 / 3) / 2,
        homeY_coord: (height * 1 / 3) / 2,
        homeWidth: width * 2 / 3,
        homeHeight: height * 2 / 3,
        playersHomeAreaWidth: (width * 2 / 3) * 5 / 16,
        playersHomeAreaHeight: (height * 2 / 3) * 5 / 16
    };
    exports.DICE = {
        x_coord: exports.PLAYER_MAIN_AREA.playersHomeAreaWidth + exports.PLAYER_MAIN_AREA.homeX_coord,
        y_coord: exports.PLAYER_MAIN_AREA.playersHomeAreaHeight + exports.PLAYER_MAIN_AREA.homeY_coord,
        width: exports.PLAYER_MAIN_AREA.homeWidth - 2 * exports.PLAYER_MAIN_AREA.playersHomeAreaWidth,
        height: exports.PLAYER_MAIN_AREA.homeHeight - 2 * exports.PLAYER_MAIN_AREA.playersHomeAreaHeight
    };
    react_1.useEffect(function () {
        // drawing players main area in home
        drawingPlayersHomeMainArea();
        // drawing all four players in home
        drawingPlayersInHome();
        // drawing dice area
        drawingDiceArea();
    }, []);
    var drawingDiceArea = function () {
        // var diceAreaHTML: HTMLElement = document.createElement("div");
        // diceAreaHTML.setAttribute("id", "dice_" + playerHomeID);
        // diceAreaHTML.style.width = DICE.width + "px";
        // diceAreaHTML.style.height = DICE.height + "px";
        // diceAreaHTML.style.position = "absolute";
        // diceAreaHTML.style.paddingLeft = PLAYER_MAIN_AREA.playersHomeAreaWidth + "px";
        // diceAreaHTML.style.paddingTop = PLAYER_MAIN_AREA.playersHomeAreaHeight + "px";
        // // console.log(diceAreaHTML)
        // document.getElementById("home_" + playerHomeID)?.appendChild(diceAreaHTML);
        // // console.log(JSON.stringify(DICE))
        ctx.beginPath();
        ctx.rect(x_coord + exports.DICE.x_coord, y_coord + exports.DICE.y_coord, exports.DICE.width, exports.DICE.height);
        ctx.strokeStyle = "rgba(0, 0, 255, 0.8)";
        ctx.stroke();
        ctx.closePath();
    };
    var drawingPlayersInHome = function () {
        // console.log(JSON.stringify(PLAYER_MAIN_AREA))
        var playerNo = 1;
        for (var col = 0; col < 2; col++) {
            for (var row = 0; row < 2; row++) {
                // var playerHomeHTML: HTMLElement = document.createElement("div");
                // playerHomeHTML.setAttribute("id", "home_" + playerHomeID + "_player" + playerNo);
                // playerHomeHTML.style.width = PLAYER_MAIN_AREA.playersHomeAreaWidth + "px";
                // playerHomeHTML.style.height = PLAYER_MAIN_AREA.playersHomeAreaHeight + "px";
                // playerHomeHTML.style.position = "absolute";
                // playerHomeHTML.style.paddingLeft = row*(PLAYER_MAIN_AREA.homeWidth - PLAYER_MAIN_AREA.playersHomeAreaWidth) + "px";
                // playerHomeHTML.style.paddingTop = col*(PLAYER_MAIN_AREA.homeHeight - PLAYER_MAIN_AREA.playersHomeAreaHeight) + "px";
                // // console.log(playerHomeHTML)
                // document.getElementById("home_" + playerHomeID)?.appendChild(playerHomeHTML);
                // playerNo++;
                ctx.beginPath();
                ctx.rect(x_coord + exports.PLAYER_MAIN_AREA.homeX_coord + row * (exports.PLAYER_MAIN_AREA.homeWidth - exports.PLAYER_MAIN_AREA.playersHomeAreaWidth), y_coord + exports.PLAYER_MAIN_AREA.homeY_coord + col * (exports.PLAYER_MAIN_AREA.homeHeight - exports.PLAYER_MAIN_AREA.playersHomeAreaHeight), exports.PLAYER_MAIN_AREA.playersHomeAreaWidth, exports.PLAYER_MAIN_AREA.playersHomeAreaHeight);
                ctx.strokeStyle = "rgba(0, 0, 0, 0.8)";
                ctx.stroke();
                ctx.closePath();
            }
        }
    };
    var drawingPlayersHomeMainArea = function () {
        // var homeHTML: HTMLElement = document.createElement("div");
        // homeHTML.setAttribute("id", "home_" + playerHomeID);
        // homeHTML.style.width = PLAYER_MAIN_AREA.homeWidth + "px";
        // homeHTML.style.height = PLAYER_MAIN_AREA.homeHeight + "px";
        // homeHTML.style.position = "absolute";
        // homeHTML.style.paddingLeft = PLAYER_MAIN_AREA.homeX_coord + "px";
        // homeHTML.style.paddingTop = PLAYER_MAIN_AREA.homeY_coord + "px";
        // // console.log(homeHTML)
        // document.getElementById(playerHomeID)?.appendChild(homeHTML);
        ctx.beginPath();
        ctx.rect(x_coord + exports.PLAYER_MAIN_AREA.homeX_coord, y_coord + exports.PLAYER_MAIN_AREA.homeY_coord, exports.PLAYER_MAIN_AREA.homeWidth, exports.PLAYER_MAIN_AREA.homeHeight);
        ctx.strokeStyle = "rgba(0, 255, 0, 0.8)";
        ctx.stroke();
        ctx.closePath();
    };
    // drawing players home
    ctx.beginPath();
    ctx.rect(x_coord, y_coord, width, height);
    ctx.strokeStyle = "rgba(0, 0, 0, 0.8)";
    ctx.stroke();
    ctx.closePath();
    // console.log(playerHomeID, x_coord, y_coord, width, height)
    return (react_1.default.createElement(react_1.default.Fragment, null));
}
exports.default = PlayerHome;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(1));
function HorizontalPath(_a) {
    var hPathID = _a.hPathID, x_coord = _a.x_coord, y_coord = _a.y_coord, width = _a.width, height = _a.height;
    var boxHTML = document.createElement("div");
    // each small box attr...
    var smallBox = {
        width: width / 6,
        height: height / 3
    };
    react_1.useEffect(function () {
        var _a;
        for (var col = 0; col < 3; col++) {
            for (var row = 0; row < 6; row++) {
                // var box: HTMLElement = document.createElement("div");
                // box.setAttribute("id", hPathID+'_box_'+col +''+ row);
                // box.style.width = smallBox.width+"px";
                // box.style.height = smallBox.height+"px";
                // box.style.position = "absolute";
                // box.style.paddingLeft = row*smallBox.width+"px";
                // box.style.paddingTop = col*smallBox.height+"px";
                // box.innerHTML = col +''+ row;
                // boxHTML.appendChild(box)
                // // console.log(x_coord + row*smallBox.width, y_coord + col*smallBox.height, smallBox.width, smallBox.height);
                ctx.beginPath();
                ctx.rect(x_coord + row * smallBox.width, y_coord + col * smallBox.height, smallBox.width, smallBox.height);
                ctx.strokeStyle = 'rgba(' + (50 + col * 30) + ', ' + (50 + row * 30) + ', ' + (50 + row * 30) + ', 1)';
                ctx.stroke();
                ctx.closePath();
            }
        }
        (_a = document.getElementById(hPathID)) === null || _a === void 0 ? void 0 : _a.appendChild(boxHTML);
    }, []);
    ctx.beginPath();
    ctx.rect(x_coord, y_coord, width, height);
    ctx.strokeStyle = "rgba(255, 0, 0, 1)";
    ctx.stroke();
    ctx.closePath();
    // console.log(hPathID);
    return (react_1.default.createElement(react_1.default.Fragment, null));
}
exports.default = HorizontalPath;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(1));
function VerticalPath(_a) {
    var vPathID = _a.vPathID, x_coord = _a.x_coord, y_coord = _a.y_coord, width = _a.width, height = _a.height;
    var boxHTML = document.createElement("div");
    // each small box attr...
    var smallBox = {
        width: width / 3,
        height: height / 6
    };
    react_1.useEffect(function () {
        var _a;
        for (var col = 0; col < 6; col++) {
            for (var row = 0; row < 3; row++) {
                // var box: HTMLElement = document.createElement("div");
                // box.setAttribute("id", vPathID+'_box_'+col +''+ row);
                // box.style.width = smallBox.width+"px";
                // box.style.height = smallBox.height+"px";
                // box.style.position = "absolute";
                // box.style.paddingLeft = row*smallBox.width+"px";
                // box.style.paddingTop = col*smallBox.height+"px";
                // box.innerHTML = col +''+ row;
                // boxHTML.appendChild(box)
                // // console.log(x_coord + row*smallBox.width, y_coord + col*smallBox.height, smallBox.width, smallBox.height);
                ctx.beginPath();
                ctx.rect(x_coord + row * smallBox.width, y_coord + col * smallBox.height, smallBox.width, smallBox.height);
                ctx.strokeStyle = 'rgba(' + (50 + col * 30) + ', ' + (50 + row * 30) + ', ' + (50 + row * 30) + ', 1)';
                ctx.stroke();
                ctx.closePath();
            }
        }
        (_a = document.getElementById(vPathID)) === null || _a === void 0 ? void 0 : _a.appendChild(boxHTML);
    }, []);
    ctx.beginPath();
    ctx.rect(x_coord, y_coord, width, height);
    ctx.strokeStyle = "rgba(255, 0, 0, 1)";
    ctx.stroke();
    ctx.closePath();
    // console.log(vPathID);
    return (react_1.default.createElement(react_1.default.Fragment, null));
}
exports.default = VerticalPath;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCanvasClicks = void 0;
var browserViewableCanvasScreen = {
    width: (window.innerWidth - canvas.width) / 2,
    height: Math.ceil((window.innerHeight - canvas.height) / 2)
};
window.onresize = function (e) {
    // console.log(e)
    canvas.style.paddingTop = (window.innerHeight - canvas.height) / 2 + "px";
    browserViewableCanvasScreen = {
        width: Math.ceil((window.innerWidth - canvas.width) / 2),
        height: Math.ceil((window.innerHeight - canvas.height) / 2)
    };
};
function handleCanvasClicks(event) {
    // console.log(event)
    console.log(event.clientX - browserViewableCanvasScreen.width, event.clientY - browserViewableCanvasScreen.height);
}
exports.handleCanvasClicks = handleCanvasClicks;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(10);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\r\n    background-color: aqua;\r\n}", "",{"version":3,"sources":["index.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B","file":"index.css","sourcesContent":["body {\r\n    background-color: aqua;\r\n}"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map