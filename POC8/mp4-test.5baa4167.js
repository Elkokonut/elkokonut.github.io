// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"da5dG":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "138b6a135baa4167";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"igcvL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _arJs = require("./ar.js");
var _arJsDefault = parcelHelpers.interopDefault(_arJs);
var _iaJs = require("./ia.js");
var _iaJsDefault = parcelHelpers.interopDefault(_iaJs);
var _iphoneInlineVideo = require("iphone-inline-video");
var _iphoneInlineVideoDefault = parcelHelpers.interopDefault(_iphoneInlineVideo);
var webcam = true;
var video = document.querySelector('#webcam');
if (!video) {
    video = document.querySelector('#fancam');
    webcam = false;
    require("url:./fancam.mp4");
}
_iphoneInlineVideoDefault.default(video);
video.style.display = "none";
if (webcam) {
    if (navigator.mediaDevices.getUserMedia) navigator.mediaDevices.getUserMedia({
        video: true
    }).then(async function(localMediaStream) {
        video.setAttribute('autoplay', 'autoplay');
        video.srcObject = localMediaStream;
    }).catch(function(error) {
        console.log("Something went wrong!", error);
    });
    else console.log('Ce navigateur ne supporte pas la méthode getUserMedia');
}
var initialisation = false;
video.addEventListener('canplay', async function() {
    console.log("canplay fired");
    if (!initialisation) {
        initialisation = true;
        await initPage();
    }
    video.play();
});
video.addEventListener('playing', async function() {
    console.log("playing fired");
    if (!initialisation) {
        initialisation = true;
        await initPage();
    }
});
video.addEventListener('pause', async function() {
    console.log("pause fired");
    if (!initialisation) {
        initialisation = true;
        await initPage();
    }
    video.play();
});
async function initPage() {
    var scene = new _arJsDefault.default(video);
    await scene.init();
    var promise = video.play();
    if (promise !== undefined) promise.catch((error)=>{
        console.log("Create Button: " + error);
        // Auto-play was prevented
        // Show a UI element to let the user manually start playback
        createButton();
    }).then(()=>{
        // Auto-play started
        console.log("Autoplay!");
    });
    document.querySelector('canvas').style = 'width: 100%; \
                                          max-width: 100%; \
                                          height: 100%;';
    if (webcam) document.querySelector('canvas').style = ' -moz-transform: scale(-1, 1); \
                                          -webkit-transform: scale(-1, 1); \
                                          -o-transform: scale(-1, 1); \
                                          transform: scale(-1, 1); \
                                          filter: FlipH; \
                                          width: 100%; \
                                          max-width: 100%; \
                                          height: 100%;';
    var pose_detector = new _iaJsDefault.default(video);
    await pose_detector.init();
    await pose_detector.mainLoop(scene);
}
function createButton() {
    let btn = document.createElement("button");
    document.querySelector('canvas').style.display = "none";
    btn.innerHTML = "Start";
    document.body.appendChild(btn);
    btn.addEventListener('click', function() {
        video.play();
        document.querySelector('canvas').style.display = null;
        btn.style.display = "none";
    });
}

},{"./ar.js":"4Pk5T","./ia.js":"9K5XS","iphone-inline-video":"4FZmc","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8","url:./fancam.mp4":"1O9YG"}],"4FZmc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*! npm.im/iphone-inline-video 2.2.2 */ var _intervalometer = require("intervalometer");
function preventEvent(element, eventName, test) {
    function handler(e) {
        if (!test || test(element, eventName)) e.stopImmediatePropagation();
    }
    element.addEventListener(eventName, handler);
    // Return handler to allow to disable the prevention. Usage:
    // const preventionHandler = preventEvent(el, 'click');
    // el.removeEventHandler('click', preventionHandler);
    return handler;
}
function proxyProperty(object, propertyName, sourceObject, copyFirst) {
    function get() {
        return sourceObject[propertyName];
    }
    function set(value) {
        sourceObject[propertyName] = value;
    }
    if (copyFirst) set(object[propertyName]);
    Object.defineProperty(object, propertyName, {
        get: get,
        set: set
    });
}
function proxyEvent(object, eventName, sourceObject) {
    sourceObject.addEventListener(eventName, function() {
        return object.dispatchEvent(new Event(eventName));
    });
}
function dispatchEventAsync(element, type) {
    Promise.resolve().then(function() {
        element.dispatchEvent(new Event(type));
    });
}
var iOS8or9 = typeof document === 'object' && 'object-fit' in document.head.style && !matchMedia('(-webkit-video-playable-inline)').matches;
var IIV = 'bfred-it:iphone-inline-video';
var IIVEvent = 'bfred-it:iphone-inline-video:event';
var IIVPlay = 'bfred-it:iphone-inline-video:nativeplay';
var IIVPause = 'bfred-it:iphone-inline-video:nativepause';
/**
 * UTILS
 */ function getAudioFromVideo(video) {
    var audio = new Audio();
    proxyEvent(video, 'play', audio);
    proxyEvent(video, 'playing', audio);
    proxyEvent(video, 'pause', audio);
    audio.crossOrigin = video.crossOrigin;
    // 'data:' causes audio.networkState > 0
    // which then allows to keep <audio> in a resumable playing state
    // i.e. once you set a real src it will keep playing if it was if .play() was called
    audio.src = video.src || video.currentSrc || 'data:';
    // // if (audio.src === 'data:') {
    //   TODO: wait for video to be selected
    // // }
    return audio;
}
var lastRequests = [];
var requestIndex = 0;
var lastTimeupdateEvent;
function setTime(video, time, rememberOnly) {
    // Allow one timeupdate event every 200+ ms
    if ((lastTimeupdateEvent || 0) + 200 < Date.now()) {
        video[IIVEvent] = true;
        lastTimeupdateEvent = Date.now();
    }
    if (!rememberOnly) video.currentTime = time;
    lastRequests[++requestIndex % 3] = time * 100 | 0;
}
function isPlayerEnded(player) {
    return player.driver.currentTime >= player.video.duration;
}
function update(timeDiff) {
    var player = this;
    // // console.log('update', player.video.readyState, player.video.networkState, player.driver.readyState, player.driver.networkState, player.driver.paused);
    if (player.video.readyState >= player.video.HAVE_FUTURE_DATA) {
        if (!player.hasAudio) {
            player.driver.currentTime = player.video.currentTime + timeDiff * player.video.playbackRate / 1000;
            if (player.video.loop && isPlayerEnded(player)) player.driver.currentTime = 0;
        }
        setTime(player.video, player.driver.currentTime);
    } else if (player.video.networkState === player.video.NETWORK_IDLE && player.video.buffered.length === 0) // This should happen when the source is available but:
    // - it's potentially playing (.paused === false)
    // - it's not ready to play
    // - it's not loading
    // If it hasAudio, that will be loaded in the 'emptied' handler below
    player.video.load();
    // // console.assert(player.video.currentTime === player.driver.currentTime, 'Video not updating!');
    if (player.video.ended) {
        delete player.video[IIVEvent]; // Allow timeupdate event
        player.video.pause(true);
    }
}
/**
 * METHODS
 */ function play() {
    // // console.log('play');
    var video = this;
    var player = video[IIV];
    // If it's fullscreen, use the native player
    if (video.webkitDisplayingFullscreen) {
        video[IIVPlay]();
        return;
    }
    if (player.driver.src !== 'data:' && player.driver.src !== video.src) {
        // // console.log('src changed on play', video.src);
        setTime(video, 0, true);
        player.driver.src = video.src;
    }
    if (!video.paused) return;
    player.paused = false;
    if (video.buffered.length === 0) // .load() causes the emptied event
    // the alternative is .play()+.pause() but that triggers play/pause events, even worse
    // possibly the alternative is preventing this event only once
    video.load();
    player.driver.play();
    player.updater.start();
    if (!player.hasAudio) {
        dispatchEventAsync(video, 'play');
        if (player.video.readyState >= player.video.HAVE_ENOUGH_DATA) // // console.log('onplay');
        dispatchEventAsync(video, 'playing');
    }
}
function pause(forceEvents) {
    // // console.log('pause');
    var video = this;
    var player = video[IIV];
    player.driver.pause();
    player.updater.stop();
    // If it's fullscreen, the developer the native player.pause()
    // This is at the end of pause() because it also
    // needs to make sure that the simulation is paused
    if (video.webkitDisplayingFullscreen) video[IIVPause]();
    if (player.paused && !forceEvents) return;
    player.paused = true;
    if (!player.hasAudio) dispatchEventAsync(video, 'pause');
    // Handle the 'ended' event only if it's not fullscreen
    if (video.ended && !video.webkitDisplayingFullscreen) {
        video[IIVEvent] = true;
        dispatchEventAsync(video, 'ended');
    }
}
/**
 * SETUP
 */ function addPlayer(video, hasAudio) {
    var player = {
    };
    video[IIV] = player;
    player.paused = true; // Track whether 'pause' events have been fired
    player.hasAudio = hasAudio;
    player.video = video;
    player.updater = _intervalometer.frameIntervalometer(update.bind(player));
    if (hasAudio) player.driver = getAudioFromVideo(video);
    else {
        video.addEventListener('canplay', function() {
            if (!video.paused) // // console.log('oncanplay');
            dispatchEventAsync(video, 'playing');
        });
        player.driver = {
            src: video.src || video.currentSrc || 'data:',
            muted: true,
            paused: true,
            pause: function() {
                player.driver.paused = true;
            },
            play: function() {
                player.driver.paused = false;
                // Media automatically goes to 0 if .play() is called when it's done
                if (isPlayerEnded(player)) setTime(video, 0);
            },
            get ended () {
                return isPlayerEnded(player);
            }
        };
    }
    // .load() causes the emptied event
    video.addEventListener('emptied', function() {
        // // console.log('driver src is', player.driver.src);
        var wasEmpty = !player.driver.src || player.driver.src === 'data:';
        if (player.driver.src && player.driver.src !== video.src) {
            // // console.log('src changed to', video.src);
            setTime(video, 0, true);
            player.driver.src = video.src;
            // Playing videos will only keep playing if no src was present when .play()’ed
            if (wasEmpty || !hasAudio && video.autoplay) player.driver.play();
            else player.updater.stop();
        }
    }, false);
    // Stop programmatic player when OS takes over
    video.addEventListener('webkitbeginfullscreen', function() {
        if (!video.paused) {
            // Make sure that the <audio> and the syncer/updater are stopped
            video.pause();
            // Play video natively
            video[IIVPlay]();
        } else if (hasAudio && player.driver.buffered.length === 0) // If the first play is native,
        // the <audio> needs to be buffered manually
        // so when the fullscreen ends, it can be set to the same current time
        player.driver.load();
    });
    if (hasAudio) {
        video.addEventListener('webkitendfullscreen', function() {
            // Sync audio to new video position
            player.driver.currentTime = video.currentTime;
        // // console.assert(player.driver.currentTime === video.currentTime, 'Audio not synced');
        });
        // Allow seeking
        video.addEventListener('seeking', function() {
            if (lastRequests.indexOf(video.currentTime * 100 | 0) < 0) // // console.log('User-requested seeking');
            player.driver.currentTime = video.currentTime;
        });
    }
}
function preventWithPropOrFullscreen(el) {
    var isAllowed = el[IIVEvent];
    delete el[IIVEvent];
    return !el.webkitDisplayingFullscreen && !isAllowed;
}
function overloadAPI(video) {
    var player = video[IIV];
    video[IIVPlay] = video.play;
    video[IIVPause] = video.pause;
    video.play = play;
    video.pause = pause;
    proxyProperty(video, 'paused', player.driver);
    proxyProperty(video, 'muted', player.driver, true);
    proxyProperty(video, 'playbackRate', player.driver, true);
    proxyProperty(video, 'ended', player.driver);
    proxyProperty(video, 'loop', player.driver, true);
    // IIV works by seeking 60 times per second.
    // These events are now useless.
    preventEvent(video, 'seeking', function(el) {
        return !el.webkitDisplayingFullscreen;
    });
    preventEvent(video, 'seeked', function(el) {
        return !el.webkitDisplayingFullscreen;
    });
    // Limit timeupdate events
    preventEvent(video, 'timeupdate', preventWithPropOrFullscreen);
    // Prevent occasional native ended events
    preventEvent(video, 'ended', preventWithPropOrFullscreen);
}
function enableInlineVideo(video, opts) {
    if (opts === void 0) opts = {
    };
    // Stop if already enabled
    if (video[IIV]) return;
    // Allow the user to skip detection
    if (!opts.everywhere) {
        // Only iOS8 and 9 are supported
        if (!iOS8or9) return;
        // Stop if it's not an allowed device
        if (!(opts.iPad || opts.ipad ? /iPhone|iPod|iPad/ : /iPhone|iPod/).test(navigator.userAgent)) return;
    }
    // Try to pause
    video.pause();
    // Prevent autoplay.
    // An non-started autoplaying video can't be .pause()'d
    var willAutoplay = video.autoplay;
    video.autoplay = false;
    addPlayer(video, !video.muted);
    overloadAPI(video);
    video.classList.add('IIV');
    // Autoplay
    if (video.muted && willAutoplay) {
        video.play();
        video.addEventListener('playing', function restoreAutoplay() {
            video.autoplay = true;
            video.removeEventListener('playing', restoreAutoplay);
        });
    }
    if (!/iPhone|iPod|iPad/.test(navigator.platform)) console.warn('iphone-inline-video is not guaranteed to work in emulated environments');
}
exports.default = enableInlineVideo;

},{"intervalometer":"ilx75","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"ilx75":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "intervalometer", ()=>intervalometer
);
parcelHelpers.export(exports, "frameIntervalometer", ()=>frameIntervalometer
);
parcelHelpers.export(exports, "timerIntervalometer", ()=>timerIntervalometer
);
/*! npm.im/intervalometer */ function intervalometer(cb, request, cancel, requestParameter) {
    var requestId;
    var previousLoopTime;
    function loop(now) {
        // Must be requested before cb() because that might call .stop()
        requestId = request(loop, requestParameter);
        // Called with "ms since last call". 0 on start()
        cb(now - (previousLoopTime || now));
        previousLoopTime = now;
    }
    return {
        start: function start() {
            if (!requestId) loop(0);
        },
        stop: function stop() {
            cancel(requestId);
            requestId = null;
            previousLoopTime = 0;
        }
    };
}
function frameIntervalometer(cb) {
    return intervalometer(cb, requestAnimationFrame, cancelAnimationFrame);
}
function timerIntervalometer(cb, delay) {
    return intervalometer(cb, setTimeout, clearTimeout, delay);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"1O9YG":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1G2bZ') + "fancam.32c9766e.mp4" + "?" + Date.now();

},{"./helpers/bundle-url":"jMDco"}],"jMDco":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}]},["da5dG","igcvL"], "igcvL", "parcelRequire94c2")

//# sourceMappingURL=mp4-test.5baa4167.js.map
