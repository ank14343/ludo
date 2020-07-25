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
    ctx.beginPath();
    ctx.rect(exports.CANVAS_ATTRIBUTES.X_COORD, exports.CANVAS_ATTRIBUTES.Y_COORD, exports.CANVAS_ATTRIBUTES.WIDTH, exports.CANVAS_ATTRIBUTES.HEIGHT);
    ctx.strokeStyle = "rgba(0, 0, 0, 1)";
    ctx.stroke();
    ctx.closePath();
    // console.log(ctx)
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { id: "ludo", style: { width: exports.CANVAS_ATTRIBUTES.WIDTH, height: exports.CANVAS_ATTRIBUTES.HEIGHT, paddingLeft: (window.innerWidth - exports.CANVAS_ATTRIBUTES.WIDTH) / 2 } },
            react_1.default.createElement(PlayerHome_1.default, { playerHomeID: "box1", x_coord: exports.CANVAS_ATTRIBUTES.X_COORD, y_coord: exports.CANVAS_ATTRIBUTES.Y_COORD, width: exports.CANVAS_ATTRIBUTES.CHILD_WIDTH, height: exports.CANVAS_ATTRIBUTES.CHILD_HEIGTH }),
            react_1.default.createElement(PlayerHome_1.default, { playerHomeID: "box2", x_coord: exports.CANVAS_ATTRIBUTES.X_COORD + exports.CANVAS_ATTRIBUTES.CHILD_X_COORD, y_coord: exports.CANVAS_ATTRIBUTES.Y_COORD, width: exports.CANVAS_ATTRIBUTES.CHILD_WIDTH, height: exports.CANVAS_ATTRIBUTES.CHILD_HEIGTH }),
            react_1.default.createElement(PlayerHome_1.default, { playerHomeID: "box3", x_coord: exports.CANVAS_ATTRIBUTES.X_COORD + exports.CANVAS_ATTRIBUTES.CHILD_X_COORD, y_coord: exports.CANVAS_ATTRIBUTES.Y_COORD + exports.CANVAS_ATTRIBUTES.CHILD_Y_COORD, width: exports.CANVAS_ATTRIBUTES.CHILD_WIDTH, height: exports.CANVAS_ATTRIBUTES.CHILD_HEIGTH }),
            react_1.default.createElement(PlayerHome_1.default, { playerHomeID: "box4", x_coord: exports.CANVAS_ATTRIBUTES.X_COORD, y_coord: exports.CANVAS_ATTRIBUTES.Y_COORD + exports.CANVAS_ATTRIBUTES.CHILD_Y_COORD, width: exports.CANVAS_ATTRIBUTES.CHILD_WIDTH, height: exports.CANVAS_ATTRIBUTES.CHILD_HEIGTH }),
            react_1.default.createElement(HorizontalPath_1.default, { hPathID: "hPath1", x_coord: exports.CANVAS_ATTRIBUTES.X_COORD, y_coord: exports.CANVAS_ATTRIBUTES.CHILD_HEIGTH, width: exports.CANVAS_ATTRIBUTES.CHILD_WIDTH, height: exports.CANVAS_ATTRIBUTES.CHILD_Y_COORD - exports.CANVAS_ATTRIBUTES.CHILD_HEIGTH }),
            react_1.default.createElement(HorizontalPath_1.default, { hPathID: "hPath2", x_coord: exports.CANVAS_ATTRIBUTES.X_COORD + exports.CANVAS_ATTRIBUTES.CHILD_X_COORD, y_coord: exports.CANVAS_ATTRIBUTES.CHILD_HEIGTH, width: exports.CANVAS_ATTRIBUTES.CHILD_WIDTH, height: exports.CANVAS_ATTRIBUTES.CHILD_Y_COORD - exports.CANVAS_ATTRIBUTES.CHILD_HEIGTH }),
            react_1.default.createElement(VerticalPath_1.default, { vPathID: "vPath1", x_coord: exports.CANVAS_ATTRIBUTES.CHILD_WIDTH, y_coord: exports.CANVAS_ATTRIBUTES.Y_COORD, width: exports.CANVAS_ATTRIBUTES.CHILD_X_COORD - exports.CANVAS_ATTRIBUTES.CHILD_WIDTH, height: exports.CANVAS_ATTRIBUTES.CHILD_HEIGTH }),
            react_1.default.createElement(VerticalPath_1.default, { vPathID: "vPath2", x_coord: exports.CANVAS_ATTRIBUTES.X_COORD + exports.CANVAS_ATTRIBUTES.CHILD_WIDTH, y_coord: exports.CANVAS_ATTRIBUTES.CHILD_Y_COORD, width: exports.CANVAS_ATTRIBUTES.CHILD_X_COORD - exports.CANVAS_ATTRIBUTES.CHILD_WIDTH, height: exports.CANVAS_ATTRIBUTES.CHILD_HEIGTH }))));
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
var react_1 = __importStar(__webpack_require__(1));
function PlayerHome(_a) {
    var playerHomeID = _a.playerHomeID, x_coord = _a.x_coord, y_coord = _a.y_coord, width = _a.width, height = _a.height;
    var PLAYER_MAIN_AREA = {
        homeX_coord: (width * 1 / 3) / 2,
        homeY_coord: (height * 1 / 3) / 2,
        homeWidth: width * 2 / 3,
        homeHeight: height * 2 / 3,
        playersHomeAreaWidth: (width * 2 / 3) * 3 / 8,
        playersHomeAreaHeight: (height * 2 / 3) * 3 / 8
    };
    react_1.useEffect(function () {
        var _a, _b;
        // drawing players main area in home
        var homeHTML = document.createElement("div");
        homeHTML.setAttribute("id", "home_" + playerHomeID);
        homeHTML.style.width = PLAYER_MAIN_AREA.homeWidth + "px";
        homeHTML.style.height = PLAYER_MAIN_AREA.homeHeight + "px";
        homeHTML.style.position = "absolute";
        homeHTML.style.paddingLeft = PLAYER_MAIN_AREA.homeX_coord + "px";
        homeHTML.style.paddingTop = PLAYER_MAIN_AREA.homeY_coord + "px";
        // console.log(homeHTML)
        (_a = document.getElementById(playerHomeID)) === null || _a === void 0 ? void 0 : _a.appendChild(homeHTML);
        ctx.beginPath();
        ctx.rect(x_coord + PLAYER_MAIN_AREA.homeX_coord, y_coord + PLAYER_MAIN_AREA.homeY_coord, PLAYER_MAIN_AREA.homeWidth, PLAYER_MAIN_AREA.homeHeight);
        ctx.strokeStyle = "rgba(0, 255, 0, 0.8)";
        ctx.stroke();
        ctx.closePath();
        // drawing all four players in home
        // console.log(JSON.stringify(PLAYER_MAIN_AREA))
        var playerNo = 1;
        for (var col = 0; col < 2; col++) {
            for (var row = 0; row < 2; row++) {
                var playerHomeHTML = document.createElement("div");
                playerHomeHTML.setAttribute("id", "home_" + playerHomeID + "_player" + playerNo);
                playerHomeHTML.style.width = PLAYER_MAIN_AREA.playersHomeAreaWidth + "px";
                playerHomeHTML.style.height = PLAYER_MAIN_AREA.playersHomeAreaHeight + "px";
                playerHomeHTML.style.position = "absolute";
                playerHomeHTML.style.paddingLeft = row * (PLAYER_MAIN_AREA.homeWidth - PLAYER_MAIN_AREA.playersHomeAreaWidth) + "px";
                playerHomeHTML.style.paddingTop = col * (PLAYER_MAIN_AREA.homeHeight - PLAYER_MAIN_AREA.playersHomeAreaHeight) + "px";
                // console.log(playerHomeHTML)
                (_b = document.getElementById("home_" + playerHomeID)) === null || _b === void 0 ? void 0 : _b.appendChild(playerHomeHTML);
                playerNo++;
            }
        }
    }, []);
    // drawing players home
    ctx.beginPath();
    ctx.rect(x_coord, y_coord, width, height);
    ctx.strokeStyle = "rgba(0, 0, 0, 0.8)";
    ctx.stroke();
    ctx.closePath();
    // console.log(playerHomeID, x_coord, y_coord, width, height)
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { id: playerHomeID, style: { width: width, height: height, position: "absolute", paddingLeft: x_coord, paddingTop: y_coord } })));
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
                var box = document.createElement("div");
                box.setAttribute("id", hPathID + '_box_' + col + '' + row);
                box.style.width = smallBox.width + "px";
                box.style.height = smallBox.height + "px";
                box.style.position = "absolute";
                box.style.paddingLeft = row * smallBox.width + "px";
                box.style.paddingTop = col * smallBox.height + "px";
                box.innerHTML = col + '' + row;
                boxHTML.appendChild(box);
                // console.log(x_coord + row*smallBox.width, y_coord + col*smallBox.height, smallBox.width, smallBox.height);
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
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { id: hPathID, style: { width: width, height: height, position: "absolute", paddingLeft: x_coord, paddingTop: y_coord } })));
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
                var box = document.createElement("div");
                box.setAttribute("id", vPathID + '_box_' + col + '' + row);
                box.style.width = smallBox.width + "px";
                box.style.height = smallBox.height + "px";
                box.style.position = "absolute";
                box.style.paddingLeft = row * smallBox.width + "px";
                box.style.paddingTop = col * smallBox.height + "px";
                box.innerHTML = col + '' + row;
                boxHTML.appendChild(box);
                // console.log(x_coord + row*smallBox.width, y_coord + col*smallBox.height, smallBox.width, smallBox.height);
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
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { id: vPathID, style: { width: width, height: height, position: "absolute", paddingLeft: x_coord, paddingTop: y_coord } })));
}
exports.default = VerticalPath;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map