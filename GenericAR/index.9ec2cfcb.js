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
})({"g9YSt":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a6b4915d9ec2cfcb";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
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
    bundle.hotData = {};
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

},{}],"7FMHY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _loadJSON = require("./loadJSON");
var _loadJSONDefault = parcelHelpers.interopDefault(_loadJSON);
var _model = require("./object/Model");
var _modelDefault = parcelHelpers.interopDefault(_model);
var _sidepanel = require("./object/Sidepanel");
var _sidepanelDefault = parcelHelpers.interopDefault(_sidepanel);
var _route = require("./object/Route");
var _routeDefault = parcelHelpers.interopDefault(_route);
function displayModel(id) {
    const json = (0, _loadJSONDefault.default)(id);
    if (json) {
        const model = new (0, _modelDefault.default)(json);
        document.body.appendChild(model.toHTML());
    }
}
function main() {
    globalThis.defaultRessourcesPath = "default";
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    displayModel((0, _routeDefault.default).chooseRoute());
}
function closeNav() {
    (0, _sidepanelDefault.default).hideAllSidepanels();
}
main();

},{"./loadJSON":"jpGlc","./object/Model":"lwyQj","./object/Sidepanel":"8vxsk","./object/Route":"cJRl7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jpGlc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _modelType = require("./interface/modelType");
var _json = require("../../static/json/*.json");
function fileExtension(filename) {
    return filename.split(".").pop();
}
function validateModelFile(modelName) {
    const autorizedExtensions = [
        "glb",
        "gltf"
    ];
    return autorizedExtensions.includes(fileExtension(modelName));
}
function validateIosSrc(iosSrc) {
    const autorizedExtensions = [
        "usdz"
    ];
    return !iosSrc || autorizedExtensions.includes(fileExtension(iosSrc));
}
function validateEnvironment(environment) {
    const autorizedExtensions = [
        "hdr",
        "jpg",
        "jpeg"
    ];
    return !environment || environment == "neutral" || autorizedExtensions.includes(fileExtension(environment));
}
function validatePoster(poster) {
    const autorizedExtensions = [
        "webp",
        "png",
        "jpg",
        "jpeg"
    ];
    return !poster || autorizedExtensions.includes(fileExtension(poster));
}
function validateData(data) {
    return validateModelFile(data.modelName) && validateIosSrc(data.iosSrc) && validateEnvironment(data.environment) && validatePoster(data.posters);
}
function loadJSON(id) {
    const data = _json[id];
    if (data && (0, _modelType.instanceOfModelType)(data) && validateData(data)) return data;
    return null;
}
exports.default = loadJSON;

},{"./interface/modelType":"5UGjl","../../static/json/*.json":"7DHOe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5UGjl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "instanceOfModelType", ()=>instanceOfModelType);
function instanceOfModelType(object) {
    let isModelType = "modelName" in object;
    if (isModelType && "targets" in object) {
        let i = 0;
        while(isModelType && i < object.targets.length){
            isModelType = isModelType && "position" in object.targets[i] && "x" in object.targets[i].position && "y" in object.targets[i].position && "z" in object.targets[i].position;
            i++;
        }
    }
    return isModelType;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7DHOe":[function(require,module,exports) {
const _temp0 = require("./cargo.json");
module.exports = {
    "cargo": _temp0
};

},{"./cargo.json":"2SGQG"}],"2SGQG":[function(require,module,exports) {
module.exports = JSON.parse('{"modelName":"cargo/cargo ship.glb","environment":"cargo/aircraft_workshop_01_1k.hdr","skybox":"true","poster":"cargo/poster.webp","hotspots":[{"label":"H\xe9lice","position":{"x":-0.42,"y":-0.1,"z":0.46},"normal":{"x":0,"y":0,"z":1},"orbit":{"x":-90,"y":90,"z":0},"content":"Avec cette h\xe9lice, le bateau peut avancer."},{"label":"Conteneurs","position":{"x":0,"y":0.11,"z":0.45},"orbit":{"x":20,"y":70,"z":0},"content":"Les conteneurs permettent de transporter de la marchandise. \\n Ils peuvent contenir plusieurs tonnes de marchandise. \\n C\'est le moyen le plus r\xe9pandu pour transporter de grosses quantit\xe9s sur de longues distances."},{"position":{"x":0.1,"y":-0.07,"z":0.48},"normal":{"x":0,"y":0,"z":1},"orbit":{"x":-20,"y":100,"z":0},"target":{"x":-0.1,"y":0,"z":0.3},"content":"La coque permet au bateau de ne pas couler"}]}');

},{}],"lwyQj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hotspot = require("./Hotspot");
var _hotspotDefault = parcelHelpers.interopDefault(_hotspot);
var _sidepanel = require("./Sidepanel");
var _sidepanelDefault = parcelHelpers.interopDefault(_sidepanel);
var _vector3 = require("./Vector3");
var _vector3Default = parcelHelpers.interopDefault(_vector3);
class Model {
    constructor(json){
        this.modelName = json.modelName;
        this.hotspots = [];
        json.hotspots.forEach((target)=>{
            this.hotspots.push(new (0, _hotspotDefault.default)((0, _vector3Default.default).fromJSON(target.position), target.normal ? (0, _vector3Default.default).fromJSON(target.normal) : null, target.orbit ? (0, _vector3Default.default).fromJSON(target.orbit) : null, target.target ? (0, _vector3Default.default).fromJSON(target.target) : null, target.label, target.content));
        });
        this.poster = json.poster;
        this.arIcon = json.arIcon;
        this.arPrompt = json.arPrompt;
        this.environment = json.environment;
        this.skybox = json.skybox == "true";
        this.animation = json.animation;
    }
    createModelViewer() {
        const mv = document.createElement("model-viewer");
        mv.setAttribute("bounds", "tight");
        mv.setAttribute("enable-pan", "");
        mv.setAttribute("shadow-intensity", "1");
        // Load model
        mv.setAttribute("src", this.modelName);
        // Enable AR
        mv.setAttribute("ar", "");
        mv.setAttribute("ar-modes", "webxr scene-viewer quick-look");
        // AR for iOS
        mv.setAttribute("quick-look-browsers", "safari, chrome");
        if (this.iosSrc) mv.setAttribute("ios-src", this.iosSrc);
        // Camera Controls
        mv.setAttribute("camera-controls", "");
        // Set poster
        if (this.poster) mv.setAttribute("poster", this.poster);
        // Set environment and skybox
        if (this.environment) {
            mv.setAttribute("environment-image", this.environment);
            if (this.environment != "neutral" && this.skybox) mv.setAttribute("skybox-image", this.environment);
        }
        return mv;
    }
    toHTML() {
        const mv = this.createModelViewer();
        const hotspots = this.getHotspots(mv);
        hotspots.forEach((hs)=>{
            mv.appendChild(hs);
        });
        if ((0, _hotspotDefault.default).counter > 0) mv.appendChild(this.JourneyButton("\uD83D\uDE80 Start your journey!"));
        mv.appendChild(this.ARButton("View in your space"));
        mv.appendChild(this.ARPrompt());
        mv.appendChild(this.progressBar());
        return mv;
    }
    JourneyButton(text) {
        const btn = document.createElement("button");
        btn.innerText = text;
        btn.classList.add("circuit-button");
        btn.innerText = text;
        btn.addEventListener("click", (event)=>{
            (0, _sidepanelDefault.default).showSidepanel("hotspot-0");
        });
        return btn;
    }
    ARButton(text) {
        const imgSrc = this.arIcon ? this.arIcon : `${globalThis.defaultRessourcesPath}/ar_icon.png`;
        const btn = document.createElement("button");
        btn.setAttribute("id", "ar-button");
        btn.setAttribute("slot", "ar-button");
        btn.setAttribute("style", `background-image: url(${imgSrc});`);
        btn.innerText = text;
        return btn;
    }
    addNoARButton(text) {
        return `<button id="ar-failure">
        ${text}
      </button>`;
    }
    getHotspots(modelViewer) {
        const hotspots = [];
        this.hotspots.forEach((target)=>{
            hotspots.push(target.toHTML(modelViewer));
        });
        return hotspots;
    }
    ARPrompt() {
        const src = this.arPrompt ? this.arPrompt : `${globalThis.defaultRessourcesPath}/ar_hand_prompt.png`;
        const prompt = document.createElement("div");
        prompt.setAttribute("id", "ar-prompt");
        const img = document.createElement("img");
        img.setAttribute("src", src);
        prompt.appendChild(img);
        return prompt;
    }
    progressBar() {
        const progressBar = document.createElement("div");
        progressBar.classList.add("progress-bar");
        progressBar.classList.add("hide");
        progressBar.setAttribute("slot", "progress-bar");
        const updateBar = document.createElement("div");
        updateBar.classList.add("update-bar");
        progressBar.appendChild(updateBar);
        return progressBar;
    }
}
exports.default = Model;

},{"./Hotspot":"dS52v","./Vector3":"hZaYN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./Sidepanel":"8vxsk"}],"dS52v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sidepanel = require("./Sidepanel");
var _sidepanelDefault = parcelHelpers.interopDefault(_sidepanel);
class Hotspot {
    static counter = 0;
    constructor(position, normal, orbit, target, label, content){
        this.position = position;
        this.normal = normal;
        this.label = label;
        this.orbit = orbit;
        this.target = target;
        this.slot = Hotspot.counter++;
        this.content = content;
    }
    toHTML(parent) {
        const btn = document.createElement("button");
        btn.classList.add("Hotspot");
        btn.setAttribute("slot", `hotspot-${this.slot}`);
        btn.setAttribute("data-position", this.position.toStringDim());
        if (this.normal) btn.setAttribute("data-normal", this.normal.toStringDim());
        btn.setAttribute("data-visibility-attribute", "visible");
        if (this.orbit) {
            btn.setAttribute("data-orbit", this.orbit.toStringAngle());
            btn.setAttribute("data-target", (this.target ? this.target : this.position).toStringDim());
            btn.addEventListener("click", function displayContent(event) {
                const modelViewer = document.querySelector("model-viewer");
                modelViewer.setAttribute("camera-target", event.target.getAttribute("data-target"));
                modelViewer.setAttribute("camera-orbit", event.target.getAttribute("data-orbit"));
            });
        }
        if (this.label) {
            const label = document.createElement("div");
            label.innerText = this.label;
            label.classList.add("HotspotAnnotation");
            btn.appendChild(label);
        }
        if (this.content) {
            new (0, _sidepanelDefault.default)(this.content, this.slot, parent);
            btn.addEventListener("click", function displayContent(event) {
                const id = this.slot;
                (0, _sidepanelDefault.default).showSidepanel(id);
            });
        }
        return btn;
    }
}
exports.default = Hotspot;

},{"./Sidepanel":"8vxsk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8vxsk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hotspot = require("./Hotspot");
var _hotspotDefault = parcelHelpers.interopDefault(_hotspot);
class Sidepanel {
    constructor(content, slot, parent){
        this.content = content;
        this.slot = slot;
        this.addContentAsSidepanel(parent);
    }
    addContentAsSidepanel(parent) {
        const sidepanel = document.createElement("div");
        sidepanel.classList.add("sidepanel");
        sidepanel.id = `content-hotspot-${this.slot}`;
        sidepanel.addEventListener("click", (event)=>Sidepanel.hideAllSidepanels());
        const btn = document.createElement("a");
        btn.classList.add("closebtn");
        btn.addEventListener("click", (event)=>Sidepanel.hideAllSidepanels());
        btn.href = "javascript: void(0)";
        btn.innerText = "\xd7";
        sidepanel?.appendChild(btn);
        this.addArrows(sidepanel);
        const p = document.createElement("p");
        p.innerText = this.content;
        sidepanel?.appendChild(p);
        parent.appendChild(sidepanel);
    }
    addArrows(sidepanel) {
        if (this.slot != (0, _hotspotDefault.default).counter - 1) {
            const right = document.createElement("a");
            right.classList.add("rightarrow");
            right.addEventListener("click", (event)=>Sidepanel.Next(event));
            right.href = "javascript: void(0)";
            right.innerText = "\u2192";
            sidepanel?.appendChild(right);
        }
        if (this.slot != 0) {
            const left = document.createElement("a");
            left.classList.add("leftarrow");
            left.addEventListener("click", (event)=>Sidepanel.Prev(event));
            left.href = "javascript: void(0)";
            left.innerText = "\u2190";
            sidepanel?.appendChild(left);
        }
    }
    static Next(event) {
        event.stopPropagation();
        const elmt = event.target;
        const id = elmt?.parentElement?.getAttribute("id")?.split("-").pop();
        const hotspot = document.querySelector(`button[slot="hotspot-${+id + 1}"]`);
        if (hotspot) hotspot.click();
    }
    static Prev(event) {
        event.stopPropagation();
        const elmt = event.target;
        const id = elmt?.parentElement?.getAttribute("id")?.split("-").pop();
        const hotspot = document.querySelector(`button[slot="hotspot-${+id - 1}"]`);
        if (hotspot) hotspot.click();
    }
    static hideAllSidepanels() {
        const sidepanels = document.querySelectorAll(".show");
        Array.from(sidepanels).forEach((element)=>{
            if (element) {
                element.classList.remove("transition");
                element.classList.remove("show");
            }
        });
        document.querySelector(".circuit-button").classList.remove("hide");
        return sidepanels.length == 0;
    }
    static showSidepanel(id) {
        const panel = document.getElementById(`content-${id}`);
        const show = panel && !panel.classList.contains("show");
        const transition = Sidepanel.hideAllSidepanels();
        const journeyBtn = document.querySelector(".circuit-button");
        if (show) {
            panel.classList.add("show");
            if (transition) panel.classList.add("transition");
            journeyBtn.classList.add("hide");
        }
    }
}
exports.default = Sidepanel;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./Hotspot":"dS52v"}],"hZaYN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Vector3 {
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static fromJSON({ x , y , z  }) {
        return new Vector3(x, y, z);
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getZ() {
        return this.z;
    }
    setX(x) {
        this.x = x;
        return this;
    }
    setY(y) {
        this.y = y;
        return this;
    }
    setZ(z) {
        this.z = z;
        return this;
    }
    toStringDim() {
        return `${this.x}m ${this.y}m ${this.z}m`;
    }
    toStringAngle() {
        return `${this.x}deg ${this.y}deg ${this.z}m`;
    }
}
exports.default = Vector3;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cJRl7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _json = require("../../../static/json/*.json");
class Route {
    static defaultRoute = "cargo";
    static validRoute(id) {
        return id && _json[id] != null;
    }
    static chooseRoute() {
        const route = Route.getPathname();
        if (Route.validRoute(route)) return route;
        else if (Route.hasName() && Route.validRoute(Route.getName())) return Route.getName();
        else return Route.defaultRoute;
    }
    static getName() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get("name");
    }
    static hasName() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.has("name");
    }
    static getPathname() {
        return window.location.pathname.split("/").pop();
    }
}
exports.default = Route;

},{"../../../static/json/*.json":"7DHOe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["g9YSt","7FMHY"], "7FMHY", "parcelRequire94c2")

//# sourceMappingURL=index.9ec2cfcb.js.map
