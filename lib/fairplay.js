/*!  */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(33)('wks');
var uid = __webpack_require__(37);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var ctx = __webpack_require__(11);
var hide = __webpack_require__(5);
var has = __webpack_require__(13);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(14);
var createDesc = __webpack_require__(32);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(12)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(9);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var IE8_DOM_DEFINE = __webpack_require__(49);
var toPrimitive = __webpack_require__(70);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(9);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(62);
var enumBugKeys = __webpack_require__(26);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(14).f;
var has = __webpack_require__(13);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(33)('keys');
var uid = __webpack_require__(37);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(28);
var defined = __webpack_require__(15);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(15);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(10);
var TAG = __webpack_require__(1)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(10);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(17);
var $export = __webpack_require__(4);
var redefine = __webpack_require__(66);
var hide = __webpack_require__(5);
var Iterators = __webpack_require__(8);
var $iterCreate = __webpack_require__(53);
var setToStringTag = __webpack_require__(20);
var getPrototypeOf = __webpack_require__(61);
var ITERATOR = __webpack_require__(1)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var isObject = __webpack_require__(7);
var newPromiseCapability = __webpack_require__(18);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(17) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(3);
var aFunction = __webpack_require__(9);
var SPECIES = __webpack_require__(1)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(11);
var invoke = __webpack_require__(50);
var html = __webpack_require__(27);
var cel = __webpack_require__(16);
var global = __webpack_require__(0);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(10)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(22);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(39);

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__(40);

var _keys2 = _interopRequireDefault(_keys);

var _promise = __webpack_require__(41);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JOB_AD_URL = '/jobs';
var JOB_API_TEST = 'https://api-test-dot-fp-recruit-vquqd.appspot.com';
var JOB_API_PROD = 'https://api-dot-fp-recruit-vquqd.appspot.com';
var CLIENT_ID_TEST = '9s7vo-iiu99-b4w7s-5rxr4';
var PAGE_SIZE = 3;
var ANNUALY_ID = 1;
var MONTHLY_ID = 2;
var DAILY_ID = 3;
var HOURLY_ID = 4;
var SAMPLE_CATEGORIES = {
	5820: 'Accounting',
	5821: 'Administration',
	5823: 'Aged Care',
	5830: 'Community',
	5834: 'Disabilities',
	5835: 'Education & Training',
	5837: 'Executive',
	5840: 'Health',
	5849: 'Health',
	5842: 'HR & Recruitment',
	5843: 'IT',
	5845: 'Legal',
	5848: 'Marketing',
	5858: 'Marketing',
	5862: 'Marketing',
	5855: 'Records, Information and Archives',
	5871: 'Social Care',
	6633: 'Adelaide',
	6630: 'Brisbane',
	6636: 'Canberra',
	6635: 'Darwin',
	6631: 'Gold Coast',
	6634: 'Hobart',
	6629: 'Melbourne',
	6632: 'Perth',
	6637: 'Regional NSW',
	6638: 'Regional VIC',
	6639: 'Regional QLD',
	6640: 'Regional WA',
	6641: 'Regional SA',
	6642: 'Regional TAS',
	6643: 'Regional ACT',
	6644: 'Regional NT',
	6628: 'Sydney',
	6645: 'Other'
};

var _eventBus = new Vue({});

function _idFn(x) {
	return x;
}

function _delay(time) {
	return new _promise2.default(function (onSuccess) {
		setTimeout(onSuccess, time);
	});
}

function _idToString(ids) {
	return (ids && Array.isArray(ids) ? ids : ids ? [ids] : []).join('_');
}

function _stringToIds(str) {
	return (str || '').split('_').map(function (s) {
		return s * 1;
	});
}

function _getCategoryId(id, categories) {
	categories = categories || {};
	var mappedCategoryName = categories[id];
	if (mappedCategoryName) return (0, _keys2.default)(categories).reduce(function (acc, key) {
		if (categories[key] == mappedCategoryName) acc.push(key * 1);
		return acc;
	}, []).sort(function (a, b) {
		return a - b;
	});else return [id * 1];
}

function _getLeftMenuData(ads, categories) {
	ads = ads || [];
	categories = categories || {};
	var data = ads.reduce(function (acc, ad) {
		// 1. Extract 'professions' & 'roles'
		if (ad.profession && ad.profession.id) {
			var professionIds = _getCategoryId(ad.profession.id, categories);
			var professionName = categories[ad.profession.id] || ad.profession.name;
			var professionStrIds = professionIds.join('_');
			if (acc._professions[professionStrIds]) acc._professions[professionStrIds].count++;else {
				acc._professions[professionStrIds] = { id: professionIds, name: professionName, count: 1, roles: [] };
				acc.menu.professions.push(acc._professions[professionStrIds]);
			}

			if (ad.profession && ad.profession.role && ad.profession.role.id) {
				var roleIds = _getCategoryId(ad.profession.role.id, categories);
				var roleName = categories[ad.profession.role.id] || ad.profession.role.name;
				var roleStrIds = roleIds.join('_');
				if (acc._roles[roleStrIds]) acc._roles[roleStrIds].count++;else {
					acc._roles[roleStrIds] = { id: roleIds, name: roleName, count: 1 };
					acc._professions[professionStrIds].roles.push(acc._roles[roleStrIds]);
				}
			}
		}

		// 2. Extract 'locations' & 'areas'
		if (ad.location && ad.location.id) {
			var locationIds = _getCategoryId(ad.location.id, categories);
			var locationName = categories[ad.location.id] || ad.location.name;
			var locationStrIds = locationIds.join('_');
			if (acc._locations[locationStrIds]) acc._locations[locationStrIds].count++;else {
				acc._locations[locationStrIds] = { id: locationIds, name: locationName, count: 1, areas: [] };
				acc.menu.locations.push(acc._locations[locationStrIds]);
			}

			if (ad.location && ad.location.area && ad.location.area.id) {
				var areaIds = _getCategoryId(ad.location.area.id, categories);
				var areaName = categories[ad.location.area.id] || ad.location.area.name;
				var areaStrIds = areaIds.join('_');
				if (acc._areas[areaStrIds]) acc._areas[areaStrIds].count++;else {
					acc._areas[areaStrIds] = { id: areaIds, name: areaName, count: 1 };
					acc._locations[locationStrIds].areas.push(acc._areas[areaStrIds]);
				}
			}
		}

		// 3. Extract 'workTypes'
		if (ad.workType && ad.workType.id) {
			var workTypeIds = _getCategoryId(ad.workType.id, categories);
			var workTypeName = categories[ad.workType.id] || ad.workType.name;
			var workTypeStrIds = workTypeIds.join('_');
			if (acc._workTypes[workTypeStrIds]) acc._workTypes[workTypeStrIds].count++;else {
				acc._workTypes[workTypeStrIds] = { id: workTypeIds, name: workTypeName, count: 1, roles: [] };
				acc.menu.workTypes.push(acc._workTypes[workTypeStrIds]);
			}
		}

		// 4. Extract 'salaryTypes'
		ad.salary = ad.salary || {};
		if (ad.salary.per == 'Year' && !acc._salaryTypes.year) {
			acc._salaryTypes.year = true;
			acc.menu.salaryTypes.push({ id: ANNUALY_ID, name: 'Annual Salary' });
		}
		if (ad.salary.per == 'Hour' && !acc._salaryTypes.hour) {
			acc._salaryTypes.hour = true;
			acc.menu.salaryTypes.push({ id: HOURLY_ID, name: 'Hourly Rate' });
		}
		if (ad.salary.per == 'Month' && !acc._salaryTypes.month) {
			acc._salaryTypes.month = true;
			acc.menu.salaryTypes.push({ id: MONTHLY_ID, name: 'Monthly Salary' });
		}
		if (ad.salary.per == 'Day' && !acc._salaryTypes.day) {
			acc._salaryTypes.day = true;
			acc.menu.salaryTypes.push({ id: DAILY_ID, name: 'Daily Rate' });
		}

		return acc;
	}, { menu: { professions: [], locations: [], workTypes: [], salaryTypes: [] }, _salaryTypes: {}, _professions: {}, _locations: {}, _workTypes: {}, _roles: {}, _areas: {} });

	var menu = data.menu;

	menu.professions = menu.professions || [];
	menu.professions.forEach(function (x) {
		x.strId = _idToString(x.id);
		x.roles = x.roles || [];
		x.roles.forEach(function (y) {
			y.strId = _idToString(y.id);
		});
	});
	menu.locations = menu.locations || [];
	menu.locations.forEach(function (x) {
		x.strId = _idToString(x.id);
		x.areas = x.areas || [];
		x.areas.forEach(function (y) {
			y.strId = _idToString(y.id);
		});
	});
	menu.workTypes = menu.workTypes || [];
	menu.workTypes.forEach(function (x) {
		x.strId = _idToString(x.id);
	});

	return menu;
}

function _formatMoney(number) {
	return number ? '$' + number.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').slice(0, -2) : '$0';
}

function _escapeJobCategoriesName(name) {
	return encodeURIComponent((name || '').toLowerCase().trim().replace(/^\s+|\s+$/g, '').replace(/&/g, 'and').replace(/[^a-zA-Z0-9]/g, '-').replace(/(-)\1+/, '-'));
}

function _fetchJobAds(_ref) {
	var jobApi = _ref.jobApi,
	    clientId = _ref.clientId,
	    categories = _ref.categories,
	    mode = _ref.mode;

	if (mode == 'dev') {
		jobApi = JOB_API_TEST;
		clientId = CLIENT_ID_TEST;
	} else jobApi = JOB_API_PROD;

	if (!clientId) throw new Error('Missing required argument \'clientId\'');

	categories = categories || {};

	return new _promise2.default(function (onSuccess, onFailure) {
		var xmlhttp = new XMLHttpRequest();

		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState == XMLHttpRequest.DONE) {
				// XMLHttpRequest.DONE == 4
				if (xmlhttp.status < 400) {
					var data = JSON.parse(xmlhttp.responseText) || {};
					var ads = (((data.data || {}).jobAds || {}).data || []).map(function (ad) {
						// 1. Format salary
						var money = [];
						var paidFreq = '';
						ad.salary = ad.salary || {};
						var lower = (ad.salary.lowest || 0) * 1;
						var upper = (ad.salary.highest || 0) * 1;
						ad.salary.lower = lower;
						ad.salary.upper = upper;
						if (ad.salary.per == 'Year') {
							paidFreq = 'per annum';
							ad.salary.id = ANNUALY_ID;
						} else if (ad.salary.per == 'Hour') {
							paidFreq = 'per hour';
							ad.salary.id = HOURLY_ID;
						} else if (ad.salary.per == 'Day') {
							paidFreq = 'per day';
							ad.salary.id = DAILY_ID;
						} else if (ad.salary.per == 'Month') {
							paidFreq = 'per month';
							ad.salary.id = MONTHLY_ID;
						}

						if (lower > 0 || upper > 0) {
							if (lower > 0) money.push(_formatMoney(lower));
							if (upper > 0) money.push(_formatMoney(upper));

							ad.salary.description = money.join(' - ') + ' ' + paidFreq;
						} else ad.salary.description = '';

						// 2. Add new 'date' property and format it:
						ad.date = new Date(ad.created).toJSON().slice(0, 10).split('-').reverse().join('/');

						// 3. Apply custom category mappings:
						if (ad.profession && ad.profession.id && categories[ad.profession.id]) ad.profession.name = categories[ad.profession.id];
						if (ad.profession && ad.profession.role && ad.profession.role.id && categories[ad.profession.role.id]) ad.profession.role.name = categories[ad.profession.role.id];
						if (ad.location && ad.location.id && categories[ad.location.id]) ad.location.name = categories[ad.location.id];
						if (ad.location && ad.location.area && ad.location.area.id && categories[ad.location.area.id]) ad.location.area.name = categories[ad.location.area.id];
						if (ad.workType && ad.workType.id && categories[ad.workType.id]) ad.workType.name = categories[ad.workType.id];

						// 3. Create a job ad link:
						var pathname = [];
						if (ad.profession && ad.profession.name) pathname.push(_escapeJobCategoriesName(ad.profession.name));
						if (ad.title) pathname.push(_escapeJobCategoriesName(ad.title));
						pathname.push(ad.id);
						ad.link = JOB_AD_URL + '/' + pathname.join('/');

						// 4. Create a profession search link:
						if (ad.profession && ad.profession.id && ad.profession.name) {
							var proIds = _getCategoryId(ad.profession.id, categories);
							ad.profession.link = '?professions=' + encodeURIComponent(ad.profession.name) + '-' + proIds.join('_');
							if (ad.profession.role && ad.profession.role.id && ad.profession.role.name) {
								var roleIds = _getCategoryId(ad.profession.role.id, categories);
								ad.profession.role.link = ad.profession.link + '&roles=' + encodeURIComponent(ad.profession.role.name) + '-' + roleIds.join('_');
							}
						}

						return ad;
					}).reverse();
					onSuccess({ status: xmlhttp.status, data: ads });
				} else onFailure({ status: xmlhttp.status, message: xmlhttp.responseText });
			}
		};

		var api_url = jobApi + '?query=' + encodeURIComponent('{ \n' + 'jobAds(where:{clientId:"' + clientId + '"}) { \n' + 'data{ \n' + 'id \n' + 'title \n' + 'summary \n' + 'bulletPoints \n' + 'created \n' + 'profession{ \n' + 'id \n' + 'name \n' + 'role{ \n' + 'id \n' + 'name \n' + '} \n' + '} \n' + 'location{ \n' + 'id \n' + 'name \n' + 'area{ \n' + 'id \n' + 'name \n' + '} \n' + '} \n' + 'workType{ \n' + 'id \n' + 'name \n' + '} \n' + 'salary { \n' + 'per \n' + 'lowest \n' + 'highest \n' + '} \n' + '} \n' + '} \n' + '}');

		xmlhttp.open('GET', api_url, true);
		xmlhttp.send();
	});
}

function _getJobAds(options) {
	options = options || {};
	return _fetchJobAds(options).then(function (res) {
		return res.data;
	})
	// retry attempt 1
	.catch(function (err1) {
		console.log('Error while fetching jobs from the server (1st attempt): ' + err1.status + ' - ' + err1.message);
		return _delay(1000).then(function () {
			return _fetchJobAds(options).then(function (res) {
				return res.data;
			})
			// retry attempt 2
			.catch(function (err2) {
				console.log('Error while fetching jobs from the server (2nd attempt): ' + err2.status + ' - ' + err2.message);
				return _delay(2000).then(function () {
					return _fetchJobAds(options).then(function (res) {
						return res.data;
					})
					// retry attempt 2
					.catch(function (err3) {
						console.log('Error while fetching jobs from the server (3rd attempt): ' + err3.status + ' - ' + err3.message);
						return _delay(3000).then(function () {
							return _fetchJobAds(options).then(function (res) {
								return res.data;
							}).catch(function () {
								return [];
							});
						});
					});
				});
			});
		});
	});
}

function _getQueryStringFilters() {
	var q = _getQueryString() || {};
	var filters = [];
	var stdTypes = ['professions', 'roles', 'locations', 'areas', 'workTypes'];
	stdTypes.forEach(function (stdType) {
		var parts = (q[stdType] || '').split('-');
		if (parts.length > 0) {
			var strId = parts.slice(-1)[0];
			var id = _stringToIds(strId);
			var name = parts.slice(0, -1).map(function (n) {
				return decodeURIComponent(n);
			}).join('-');
			if (name) filters.push({ id: id, strId: strId, name: name, type: stdType });
		}
	});
	if (q.keywords) {
		var keywords = decodeURIComponent(q.keywords);
		filters.push({ id: [0], strId: '0', name: keywords, type: 'keywords' });
	}
	var salaryRange = q.annualy || q.hourly || q.daily || q.monthly;
	if (salaryRange) {
		var parts = salaryRange.split('-');
		var lower = parts[0] * 1;
		var upper = parts[1] * 1;
		var salaryTypeId = q.annualy ? ANNUALY_ID : q.hourly ? HOURLY_ID : q.daily ? DAILY_ID : MONTHLY_ID;
		filters.push({ id: [0], strId: '0', name: null, type: 'salary', salaryTypeId: salaryTypeId, lower: lower, upper: upper });
	}

	var page = q.page >= 1 ? q.page : 1;

	return { filters: filters, page: page };
}

function _getQueryString() {
	return (window.location.search || '').replace(/^\?/, '').split('&').reduce(function (acc, keyValue) {
		var parts = keyValue.split('=');
		acc[parts[0]] = decodeURIComponent(parts[1]);
		return acc;
	}, {});
}

function _updateQueryString(queryString) {
	var currentQuery = _getQueryString() || {};
	var updatedQuery = (0, _assign2.default)(currentQuery, queryString || {});
	var q = (0, _keys2.default)(updatedQuery).filter(function (x) {
		return x;
	}).map(function (key) {
		var val = updatedQuery[key];
		return val ? key + '=' + encodeURIComponent(updatedQuery[key] || '') : null;
	}).filter(function (x) {
		return x;
	}).join('&');

	var newUrl = q ? '?' + q : window.location.pathname;
	if (window.history && window.history.pushState) window.history.pushState('', '', newUrl);else // Adds support for older browser which do not support window.history (e.g. IE < 10)
		window.location.replace(newUrl);
}

Vue.component('neap-widget', {
	props: ['jobads'],
	template: '\n\t<div class="fairplay-container">\n\t\t<div id="side-left" class="col-sm-4 col-md-3" :class="sideMenuClass">\n\t\t\t<left-menu-status></left-menu-status>\n\t\t\t<left-menu></left-menu>\n\t\t</div>\n\t\t\n\t\t<div id="content" class="col-sm-8 col-md-9 col-xs-12" :class="contentClass">\n\t\t\t<div class="content-holder">\n\t\t\t\t<job-search-header></job-search-header>\n\t\t\t\t<jobads v-bind:jobads="jobads"></jobads>\n\t\t\t\t<page-buttons></page-buttons>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t',
	data: function data() {
		return {
			sideMenuClass: 'hidden-xs', // by default the side menu is not visible in mobile
			contentClass: '' // by default the content is visible
		};
	},

	methods: {
		showMenu: function showMenu() {
			this.contentClass = 'hidden-xs';
			this.sideMenuClass = '';
		},
		hideMenu: function hideMenu() {
			this.sideMenuClass = 'hidden-xs';
			this.contentClass = '';
		}
	},
	created: function created() {
		_eventBus.$on('neap-widget.show-menu', this.showMenu);
		_eventBus.$on('neap-widget.hide-menu', this.hideMenu);
	}
});

Vue.component('left-menu', {
	template: '\n\t<ul id="side-drop-menu" class="side-menu-cursor">\n\t\t<li :class="menu.professions.hidden">\n\t\t\t<a @click="expandMenu(\'professions\')">Classification</a>\n\t\t\t<ul :class="menu.professions.expand">\n\t\t\t\t<li v-for="item in menu.professions.items">\n\t\t\t\t\t<a @click="filterBy(item.strId, item.name, \'professions\')">{{ item.name }} <span>({{ item.count }})</span></a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</li>\n\t\t<li :class="menu.roles.hidden">\n\t\t\t<a @click="expandMenu(\'roles\')">Sub-classification</a>\n\t\t\t<ul :class="menu.roles.expand">\n\t\t\t\t<li v-for="item in menu.roles.items">\n\t\t\t\t\t<a @click="filterBy(item.strId, item.name, \'roles\')">{{ item.name }} <span>({{ item.count }})</span></a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</li>\n\t\t<li :class="menu.locations.hidden">\n\t\t\t<a @click="expandMenu(\'locations\')">Location</a>\n\t\t\t<ul :class="menu.locations.expand">\n\t\t\t\t<li v-for="item in menu.locations.items">\n\t\t\t\t\t<a @click="filterBy(item.strId, item.name, \'locations\')">{{ item.name }} <span>({{ item.count }})</span></a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</li>\n\t\t<li :class="menu.areas.hidden">\n\t\t\t<a @click="expandMenu(\'areas\')">Area</a>\n\t\t\t<ul :class="menu.areas.expand">\n\t\t\t\t<li v-for="item in menu.areas.items">\n\t\t\t\t\t<a @click="filterBy(item.strId, item.name, \'areas\')">{{ item.name }} <span>({{ item.count }})</span></a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</li>\n\t\t<li :class="menu.workTypes.hidden">\n\t\t\t<a @click="expandMenu(\'workTypes\')">Work type</a>\n\t\t\t<ul :class="menu.workTypes.expand">\n\t\t\t\t<li v-for="item in menu.workTypes.items">\n\t\t\t\t\t<a @click="filterBy(item.strId, item.name, \'workTypes\')">{{ item.name }} <span>({{ item.count }})</span></a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</li>\n\t\t<li v-if="menu.salaryTypes && menu.salaryTypes.length > 0">\n\t\t\t<a href="#">Salary</a>\n\t\t\t<div class="neap-salary-type">\n\t\t\t\t<select name="salary-type" v-model="menu.salary.id" class="form-control">\n\t\t\t\t\t<option v-for="(item,idx) in menu.salaryTypes" :value="item.id" :selected="idx == 0">{{ item.name }}</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class="neap-salary-bands">\n\t\t\t\t<div class="neap-salary-min">\n\t\t\t\t\t<label for="txtSalaryLowerBand">Minimum Salary</label>\n\t\t\t\t\t<div class="neap-salary-input">\n\t\t\t\t\t\t<span class="neap-salary-currency"></span>\n\t\t\t\t\t\t<input name="salary-lower-band" type="text" v-model="menu.salary.lower" class="form-control" placeholder="Min." @keypress="isNumber">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="neap-salary-to">to</div>\n\t\t\t\t<div class="neap-salary-max">\n\t\t\t\t\t<label for="txtSalaryUpperBand">Maximum Salary</label>\n\t\t\t\t\t<div class="neap-salary-input">\n\t\t\t\t\t\t<span class="neap-salary-currency"></span>\n\t\t\t\t\t\t<input name="salary-upper-band" type="text" v-model="menu.salary.upper" class="form-control" placeholder="Max." @keypress="isNumber">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="neap-salary-bands-error" v-if="showSalaryError">Please enter at least one min. or max. salary greater than zero</div>\n\n\t\t\t<div class="neap-salary-submit">\n\t\t\t\t<input type="submit" name="salary-submit-button" value="Submit" @click="filterBySalary" class="mini-new-buttons btn btn-primary">\n\t\t\t</div>\n\t\t</li>\n\t</ul>',
	data: function data() {
		return {
			showSalaryError: false,
			all: {},
			menu: {
				professions: {
					hidden: '',
					expand: 'expand-menu',
					items: [],
					selectedIds: null
				},
				roles: {
					hidden: 'hidden',
					expand: 'collapse-menu',
					items: [],
					selectedIds: null
				},
				locations: {
					hidden: '',
					expand: 'collapse-menu',
					items: [],
					selectedIds: null
				},
				areas: {
					hidden: 'hidden',
					expand: 'collapse-menu',
					items: [],
					selectedIds: null
				},
				workTypes: {
					hidden: '',
					expand: 'collapse-menu',
					items: [],
					selectedIds: null
				},
				salaryTypes: [],
				salary: {
					id: 1,
					lower: null,
					upper: null
				}
			}
		};
	},

	methods: {
		isNumber: function isNumber(evt) {
			evt = evt ? evt : window.event;
			var charCode = evt.which ? evt.which : evt.keyCode;
			if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
				evt.preventDefault();
			} else {
				return true;
			}
		},
		filterBy: function filterBy(strId, name, type) {
			var filters = [{ strId: strId, type: type, name: name }];
			this.toggleFilters(filters);
		},
		filterByKeywords: function filterByKeywords(keywords) {
			var filters = [{ strId: null, type: 'keywords', name: keywords }];
			this.toggleFilters(filters);
		},
		filterBySalary: function filterBySalary() {
			// 1. Clean & Validate the data
			var lower = this.menu.salary.lower * 1;
			var upper = this.menu.salary.upper * 1;

			if (upper < lower) {
				this.menu.salary.upper = this.menu.salary.lower;
				upper = lower;
			}

			if (lower == 0 && upper > 0) this.menu.salary.lower = 0;

			this.showSalaryError = !(this.menu.salary.id && upper > 0);

			// 2. If no error, broadcast event
			if (!this.showSalaryError) {
				var filters = [{
					strId: '0',
					id: 0,
					type: 'salary',
					name: null,
					salaryTypeId: this.menu.salary.id,
					lower: lower,
					upper: upper
				}];
				this.toggleFilters(filters);
			}
		},
		toggleFilters: function toggleFilters(filters) {
			var vm = this;
			filters = (filters || []).filter(_idFn);
			filters.forEach(function (filter) {
				var ids = _stringToIds(filter.strId).reduce(function (acc, id) {
					acc[id] = true;
					return acc;
				}, {});
				var type = filter.type;

				if (type == 'professions') {
					vm.menu.professions.hidden = 'hidden';
					vm.menu.professions.selectedIds = ids;

					if (!filters.some(function (f) {
						return f.type == 'roles';
					})) vm.expandMenu('roles');
				} else if (type == 'locations') {
					vm.menu.locations.hidden = 'hidden';
					vm.menu.locations.selectedIds = ids;

					if (!filters.some(function (f) {
						return f.type == 'areas';
					})) vm.expandMenu('areas');
				} else if (type == 'workTypes') {
					vm.menu.workTypes.hidden = 'hidden';
					vm.menu.workTypes.selectedIds = ids;
				} else if (type == 'areas') {
					vm.menu.areas.hidden = 'hidden';
					vm.menu.areas.selectedIds = ids;
				} else if (type == 'roles') {
					vm.menu.roles.hidden = 'hidden';
					vm.menu.roles.selectedIds = ids;
				}
			});
			this.updateSubMenus();

			// 3. Let all other components know
			_eventBus.$emit('filterBy', filters);
		},
		untoggleFilter: function untoggleFilter(filter) {
			if (filter && filter.type) {
				var type = filter.type;

				if (type == 'professions') {
					this.menu.professions.hidden = '';
					this.menu.professions.selectedIds = null;
					this.menu.roles.hidden = 'hidden';
				} else if (type == 'locations') {
					this.menu.locations.hidden = '';
					this.menu.locations.selectedIds = null;
					this.menu.areas.hidden = 'hidden';
				} else if (type == 'workTypes') {
					this.menu.workTypes.hidden = '';
					this.menu.workTypes.selectedIds = null;
				} else if (type == 'areas') {
					this.menu.areas.hidden = '';
					this.menu.areas.selectedIds = null;
				} else if (type == 'roles') {
					this.menu.roles.hidden = '';
					this.menu.roles.selectedIds = null;
				}

				this.updateSubMenus();
			}
		},
		update: function update(jobAds, options) {
			options = options || {};
			jobAds = jobAds || [];
			var leftMenuData = _getLeftMenuData(jobAds, options.categories);
			this.all = leftMenuData;
			this.menu.professions.items = (leftMenuData || {}).professions || [];
			this.menu.locations.items = (leftMenuData || {}).locations || [];
			this.menu.workTypes.items = (leftMenuData || {}).workTypes || [];
			this.menu.salaryTypes = (leftMenuData.salaryTypes || []).sort(function (a, b) {
				return a.id - b.id;
			});
			var id = (this.menu.salaryTypes[0] || {}).id;
			if (id) this.menu.salary.id = id;
		},
		updateSubMenus: function updateSubMenus() {
			var vm = this;
			// 1. Update the 'roles' based on the selected profession
			if (vm.menu.professions.selectedIds) {
				var _containsProIds = function _containsProIds(itemIds) {
					itemIds = itemIds || [];
					return itemIds.some(function (id) {
						return vm.menu.professions.selectedIds[id];
					});
				};
				vm.menu.roles.items = vm.all.professions.reduce(function (acc, item) {
					if (item && _containsProIds(item.id)) {
						var roles = item.roles || [];
						roles.forEach(function (r) {
							acc.push(r);
						});
					}
					return acc;
				}, []);
			}

			// 2. Update the 'areas' based on the selected location
			if (vm.menu.locations.selectedIds) {
				var _containsLocIds = function _containsLocIds(itemIds) {
					itemIds = itemIds || [];
					return itemIds.some(function (id) {
						return vm.menu.locations.selectedIds[id];
					});
				};
				vm.menu.areas.items = vm.all.locations.reduce(function (acc, item) {
					if (item && _containsLocIds(item.id)) {
						var areas = item.areas || [];
						areas.forEach(function (r) {
							acc.push(r);
						});
					}
					return acc;
				}, []);
			}
		},
		expandMenu: function expandMenu(menuName) {
			//_eventBus.$emit('expandMenu', menuName)
			var vm = this;
			this.menu[menuName].hidden = '';
			// This menu is not expanded, so expand it
			if (this.menu[menuName].expand == 'collapse-menu') {
				var allMenus = ['professions', 'roles', 'locations', 'areas', 'workTypes'];
				var hideMenus = allMenus.filter(function (name) {
					return name != menuName;
				});
				hideMenus.forEach(function (name) {
					vm.menu[name].expand = 'collapse-menu';
				});
				this.menu[menuName].expand = 'expand-menu';
			} else // This menu is already expanded, so collapse it
				this.menu[menuName].expand = 'collapse-menu';
		}
	},
	created: function created() {
		_eventBus.$on('left-menu.untoggle-filter', this.untoggleFilter);
		_eventBus.$on('left-menu.toggle-filters', this.toggleFilters);
		_eventBus.$on('left-menu.update', this.update);
	}
});

Vue.component('jobads', {
	props: ['jobads'],
	template: '\n\t<div>\n\t\t<div v-for="jobad in jobads" v-bind:key="jobad.id" class="job-holder">\n\t\t\t<div class="job-toplink">\n\t\t\t\t<a :href="jobad.link">{{ jobad.title }}</a>\n\t\t\t\t<div class="nameofcompany">abrs</div>\n\t\t\t</div>\n\t\t\t<div class="job-rightlinks">\n\t\t\t\t<span class="dateText">{{ jobad.date }}</span>\n\t\t\t</div>\n\t\t\t<div class="description-holder">\n\t\t\t\t<div class="locandsalary">\n\t\t\t\t\t<span>{{ jobad.location.name }}</span>\n\t\t\t\t\t<span class="neap-result-area">{{ jobad.location.area.name }}</span>\n\t\t\t\t\t<span class="neap-result-salary">{{ jobad.salary.description }}</span>\n\t\t\t\t\t<span>{{ jobad.workType.name }}</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="description-text">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li v-for="item in jobad.bulletPoints">{{ item }}</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="description-holder">\n\t\t\t\t<div class="short-description-text">{{ jobad.summary }}</div>\n\t\t\t</div>\n\t\t\t<br/>\n\t\t\t<div class="job-breadcrumbs">\n\t\t\t\t<a v-bind:href="jobad.profession.link">{{ jobad.profession.name }}</a> &gt; <a v-bind:href="jobad.profession.role.link">{{ jobad.profession.role.name }}</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>'
});

Vue.component('left-menu-status', {
	template: '\n\t<div id=\'side-left-status\'>\n\t\t<div v-for="filter in filters" v-bind:key="filter.id" class="search-query side-menu-cursor">\n\t\t\t<p>\n\t\t\t\t<span>{{ filter.name }}</span>\n\t\t\t\t<span class="red-remove">(<a @click="removeFilter(filter)">Remove</a>)</span>\n\t\t\t</p>\n\t\t</div>\n\t</div>',
	data: function data() {
		return { filters: [] };
	},

	methods: {
		addFilters: function addFilters(filters) {
			var vm = this;
			filters = filters || [];
			var updatedFilters = filters.filter(_idFn).reduce(function (acc, filter) {
				var id = filter.strId;
				var type = filter.type;
				var name = filter.name;
				var salaryTypeNames = {};
				salaryTypeNames[ANNUALY_ID] = 'Annual Salary';
				salaryTypeNames[MONTHLY_ID] = 'Monthly Salary';
				salaryTypeNames[DAILY_ID] = 'Daily Rate';
				salaryTypeNames[HOURLY_ID] = 'Hourly Rate';
				var lower = filter.salaryTypeId == ANNUALY_ID || filter.salaryTypeId == MONTHLY_ID ? Math.round((filter.lower || 0) / 1000) + 'K' : filter.lower;
				var upper = filter.salaryTypeId == ANNUALY_ID || filter.salaryTypeId == MONTHLY_ID ? Math.round((filter.upper || 0) / 1000) + 'K' : filter.upper;
				var filterName = type == 'salary' ? salaryTypeNames[filter.salaryTypeId] + ' (' + lower + ' to ' + upper + ')' : name;
				var newFilter = {
					id: Date.now() + Math.round(Math.random() * 10000),
					itemId: id,
					type: type,
					name: filterName
					// There is already one salary filter. Replace it with the new one
				};if (type == 'salary' && acc.some(function (f) {
					return f.type == type;
				})) {
					var newFilters = acc.filter(function (f) {
						return f.type != type;
					});
					newFilters.push(newFilter);
					acc = newFilters;
				} else if (!acc.some(function (_ref2) {
					var itemId = _ref2.itemId;
					return itemId == newFilter.itemId;
				})) acc.push(newFilter);

				return acc;
			}, vm.filters.map(_idFn));

			this.filters = updatedFilters;
		},
		removeFilter: function removeFilter(filter) {
			// 1. Remove the filter
			var newFilters = this.filters.filter(function (f) {
				return f.id != filter.id;
			});
			// 2. If the filter is a parent filter (i.e., 'professions' or 'locations'), then also remove their child
			if (filter.type == 'professions') newFilters = newFilters.filter(function (f) {
				return f.type != 'roles';
			});
			if (filter.type == 'locations') newFilters = newFilters.filter(function (f) {
				return f.type != 'areas';
			});

			this.filters = newFilters;

			// 3. Let all other components know
			_eventBus.$emit('removeFilter', filter);
		}
	},
	created: function created() {
		_eventBus.$on('left-menu-status.add-filters', this.addFilters);
	}
});

Vue.component('page-buttons', {
	template: '\n\t<div id="fairplay-pagination" v-bind:style="page.style">\n\t\t<a @click="pageChange(1)">&lt;&lt;</a>\n\t\t<a @click="pageChange(page.current-1)" class="disabled_tnt_pagination search-previous-button">Prev</a>\n\t\t<a v-for="number in page.numbers" @click="pageChange(number)" :class="page[number]" >\n\t\t\t{{ number }}\n\t\t</a>\n\t\t<a @click="pageChange(page.current+1)" class="search-next-button">Next</a>\n\t\t<a @click="pageChange(page.numbers.length)">&gt;&gt;</a>\n\t</div>',
	data: function data() {
		return {
			page: {
				id: 0,
				style: 'display:none;',
				numbers: [1],
				current: 1,
				max: 1
			}
		};
	},

	methods: {
		pageChange: function pageChange(pos) {
			var newPos = pos < 1 ? 1 : pos > this.page.max ? this.page.max : pos;

			this.page.current = pos;
			var vm = this;
			(0, _keys2.default)(this.page).forEach(function (key) {
				if (vm.page[key] == 'active') Vue.set(vm.page, key, '');
			});
			Vue.set(this.page, pos, 'active');

			_eventBus.$emit('pageChange', newPos);
		},
		update: function update(jobAds, page) {
			var vm = this;
			page = page || 1;
			jobAds = jobAds || [];
			var pageNumbers = Math.ceil(jobAds.length / PAGE_SIZE);
			if (jobAds.length == 0 || pageNumbers == 1) this.page.style = 'display:none;';else {
				this.page.max = pageNumbers;
				this.page.style = 'display:block;';
				this.page.numbers = Array.apply(null, Array(pageNumbers)).map(function (_, idx) {
					return idx + 1;
				});
			}

			(0, _keys2.default)(this.page).forEach(function (key) {
				if (vm.page[key] == 'active') Vue.set(vm.page, key, '');
			});
			Vue.set(this.page, page, 'active');
		}
	},
	created: function created() {
		_eventBus.$on('page-buttons.page-change', this.pageChange);
		_eventBus.$on('page-buttons.update', this.update);
	}
});

Vue.component('job-search-header', {
	template: '\n\t<div class="num-results" v-if="jobads">\n\t\tYour search resulted in: <span class="searchresult-number">{{ jobads.length }}</span> position{{ jobads.length > 1 ? \'s\' : \'\' }}<span class="new-search-link side-menu-cursor"><a @click="showSearch" class="boardy-back-to-search">New Search</a></span>\n\t</div>\n\t<div class="num-results" v-else>\n\t\tSearching jobs...\n\t</div>',
	data: function data() {
		return { jobads: null };
	},

	methods: {
		showSearch: function showSearch() {
			_eventBus.$emit('showSearch');
		},
		update: function update(jobAds) {
			jobAds = jobAds || [];
			this.jobads = jobAds;
		}
	},
	created: function created() {
		_eventBus.$on('job-search-header.update', this.update);
	}
});

var fairplay = {
	start: function start(options) {
		options = options || {};
		options.categories = SAMPLE_CATEGORIES;
		new Vue({
			el: '#container',
			data: {
				allJobAds: [],
				allFilteredJobAds: [],
				jobads: []
			},
			created: function created() {
				var vm = this;

				var filterJobAds = function filterJobAds() {
					var queryFilter = _getQueryStringFilters() || {};
					var filters = queryFilter.filters || [];
					var page = queryFilter.page;

					var filteredJobAds = vm.allJobAds.map(_idFn);
					filters.forEach(function (filter) {
						var filterIds = (filter.id || []).reduce(function (acc, id) {
							acc[id] = true;
							return acc;
						}, {});
						if (filter.type == 'professions') filteredJobAds = filteredJobAds.filter(function (jobAd) {
							return jobAd.profession && filterIds[jobAd.profession.id];
						});else if (filter.type == 'roles') filteredJobAds = filteredJobAds.filter(function (jobAd) {
							return jobAd.profession && jobAd.profession.role && filterIds[jobAd.profession.role.id];
						});else if (filter.type == 'locations') filteredJobAds = filteredJobAds.filter(function (jobAd) {
							return jobAd.location && filterIds[jobAd.location.id];
						});else if (filter.type == 'areas') filteredJobAds = filteredJobAds.filter(function (jobAd) {
							return jobAd.location && jobAd.location.area && filterIds[jobAd.location.area.id];
						});else if (filter.type == 'workTypes') filteredJobAds = filteredJobAds.filter(function (jobAd) {
							return jobAd.workType && filterIds[jobAd.workType.id];
						});else if (filter.type == 'salary') {
							filteredJobAds = filteredJobAds.filter(function (jobAd) {
								return jobAd.salary && jobAd.salary.id == filter.salaryTypeId && (jobAd.salary.lower <= filter.lower && filter.lower <= jobAd.salary.upper || jobAd.salary.lower <= filter.upper && filter.upper <= jobAd.salary.upper || filter.lower <= jobAd.salary.lower && jobAd.salary.lower <= filter.upper || filter.lower <= jobAd.salary.upper && jobAd.salary.upper <= filter.upper);
							});
						} else if (filter.type == 'keywords' && filter.name) {
							var k = filter.name.toLowerCase().trim();
							filteredJobAds = filteredJobAds.filter(function (jobAd) {
								return jobAd.title && jobAd.title.toLowerCase().indexOf(k) >= 0 || jobAd.profession && jobAd.profession.name && jobAd.profession.name.toLowerCase().indexOf(k) >= 0 || jobAd.profession && jobAd.profession.role && jobAd.profession.role.name && jobAd.profession.role.name.toLowerCase().indexOf(k) >= 0 || jobAd.location && jobAd.location.name && jobAd.location.name.toLowerCase().indexOf(k) >= 0 || jobAd.location && jobAd.location.area && jobAd.location.area.name && jobAd.location.area.name.toLowerCase().indexOf(k) >= 0 || jobAd.workType && jobAd.workType.name && jobAd.workType.name.toLowerCase().indexOf(k) >= 0 || jobAd.summary && jobAd.summary.toLowerCase().indexOf(k) >= 0;
							});
						}
					});

					vm.allFilteredJobAds = filteredJobAds;
					vm.jobads = filteredJobAds.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

					_eventBus.$emit('job-search-header.update', filteredJobAds, page);
					_eventBus.$emit('page-buttons.update', filteredJobAds, page);
					_eventBus.$emit('left-menu.update', filteredJobAds, options);
					_eventBus.$emit('neap-widget.hide-menu');
				};

				_eventBus.$on('pageChange', function (pos) {
					// 1. Update query string
					_updateQueryString({ page: pos });

					// 2. Update all components accordingly
					var start = pos - 1 >= 0 ? pos - 1 : 0;
					var next = start + 1;
					vm.jobads = vm.allFilteredJobAds.slice(start * PAGE_SIZE, next * PAGE_SIZE);
				});

				_eventBus.$on('filterBy', function (filters, page, origin) {
					// 1. Update query string
					if (origin != 'querystring') {
						var q = {};
						filters = filters || [];
						filters.forEach(function (filter) {
							if (filter.type == 'salary') {
								var labels = {};
								labels[ANNUALY_ID] = 'annualy';
								labels[MONTHLY_ID] = 'monthly';
								labels[DAILY_ID] = 'daily';
								labels[HOURLY_ID] = 'hourly';
								(0, _keys2.default)(labels).forEach(function (key) {
									if (key == filter.salaryTypeId) q[labels[key]] = filter.lower + '-' + filter.upper;else q[labels[key]] = null;
								});
							} else if (filter.type == 'keywords') q[filter.type] = encodeURIComponent(filter.name);else q[filter.type] = encodeURIComponent(filter.name) + '-' + filter.strId;
						});
						q.page = 1;
						_updateQueryString(q);
					}

					// 2. Update all components accordingly
					filterJobAds();
					_eventBus.$emit('left-menu-status.add-filters', filters);
					if (page || origin) // that means that this event does not come from the 'left-menu' itself
						_eventBus.$emit('left-menu.toggle-filters', filters);
				});

				_eventBus.$on('removeFilter', function (filter) {
					// 1. Update query string. If the filter is a parent filter ('professions' or 'locations'), then also remove their resp. child
					var q = {};
					if (filter.type == 'professions') q = { professions: null, roles: null };else if (filter.type == 'locations') q = { locations: null, areas: null };else if (filter.type == 'salary') q = { annualy: null, hourly: null, monthly: null, daily: null };else q[filter.type] = null;
					q.page = 1;
					_updateQueryString(q);

					// 2. Update all components accordingly
					filterJobAds();
					_eventBus.$emit('page-buttons.page-change', 1);
					_eventBus.$emit('left-menu.untoggle-filter', filter);
				});

				_eventBus.$on('showSearch', function () {
					_eventBus.$emit('neap-widget.show-menu');
				});

				_getJobAds(options).then(function (jobs) {
					vm.allJobAds = jobs;
					vm.allFilteredJobAds = jobs;
					var queryFilter = _getQueryStringFilters() || {};
					_eventBus.$emit('filterBy', queryFilter.filters, queryFilter.page, 'querystring');
				});
			}
		});
	}
};

module.exports.fairplay = fairplay;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(42), __esModule: true };

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(43), __esModule: true };

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(44), __esModule: true };

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);
module.exports = __webpack_require__(2).Object.keys;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(76);
__webpack_require__(78);
__webpack_require__(81);
__webpack_require__(77);
__webpack_require__(79);
__webpack_require__(80);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(23);
var toLength = __webpack_require__(36);
var toAbsoluteIndex = __webpack_require__(69);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(11);
var call = __webpack_require__(52);
var isArrayIter = __webpack_require__(51);
var anObject = __webpack_require__(3);
var toLength = __webpack_require__(36);
var getIterFn = __webpack_require__(72);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(12)(function () {
  return Object.defineProperty(__webpack_require__(16)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 50 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(8);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(3);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(58);
var descriptor = __webpack_require__(32);
var setToStringTag = __webpack_require__(20);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(5)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(1)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var macrotask = __webpack_require__(35).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(10)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(19);
var gOPS = __webpack_require__(60);
var pIE = __webpack_require__(63);
var toObject = __webpack_require__(24);
var IObject = __webpack_require__(28);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(12)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(3);
var dPs = __webpack_require__(59);
var enumBugKeys = __webpack_require__(26);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(16)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(27).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(14);
var anObject = __webpack_require__(3);
var getKeys = __webpack_require__(19);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 60 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(13);
var toObject = __webpack_require__(24);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(13);
var toIObject = __webpack_require__(23);
var arrayIndexOf = __webpack_require__(47)(false);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(4);
var core = __webpack_require__(2);
var fails = __webpack_require__(12);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(5);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var dP = __webpack_require__(14);
var DESCRIPTORS = __webpack_require__(6);
var SPECIES = __webpack_require__(1)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22);
var defined = __webpack_require__(15);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(7);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(25);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(8);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(45);
var step = __webpack_require__(55);
var Iterators = __webpack_require__(8);
var toIObject = __webpack_require__(23);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(29)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(4);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(57) });


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(24);
var $keys = __webpack_require__(19);

__webpack_require__(64)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 76 */
/***/ (function(module, exports) {



/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(17);
var global = __webpack_require__(0);
var ctx = __webpack_require__(11);
var classof = __webpack_require__(25);
var $export = __webpack_require__(4);
var isObject = __webpack_require__(7);
var aFunction = __webpack_require__(9);
var anInstance = __webpack_require__(46);
var forOf = __webpack_require__(48);
var speciesConstructor = __webpack_require__(34);
var task = __webpack_require__(35).set;
var microtask = __webpack_require__(56)();
var newPromiseCapabilityModule = __webpack_require__(18);
var perform = __webpack_require__(30);
var userAgent = __webpack_require__(71);
var promiseResolve = __webpack_require__(31);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(65)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(20)($Promise, PROMISE);
__webpack_require__(67)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(54)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(68)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(29)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(4);
var core = __webpack_require__(2);
var global = __webpack_require__(0);
var speciesConstructor = __webpack_require__(34);
var promiseResolve = __webpack_require__(31);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(4);
var newPromiseCapability = __webpack_require__(18);
var perform = __webpack_require__(30);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73);
var global = __webpack_require__(0);
var hide = __webpack_require__(5);
var Iterators = __webpack_require__(8);
var TO_STRING_TAG = __webpack_require__(1)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(38);


/***/ })
/******/ ]);
});
//# sourceMappingURL=fairplay.js.map