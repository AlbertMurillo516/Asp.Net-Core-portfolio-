var $jscomp = $jscomp || {}; $jscomp.scope = {}; $jscomp.ASSUME_ES5 = !1; $jscomp.ASSUME_NO_NATIVE_MAP = !1; $jscomp.ASSUME_NO_NATIVE_SET = !1; $jscomp.SIMPLE_FROUND_POLYFILL = !1; $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, d, b) { a != Array.prototype && a != Object.prototype && (a[d] = b.value) }; $jscomp.getGlobal = function (a) { return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a }; $jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (a, d, b, e) { if (d) { b = $jscomp.global; a = a.split("."); for (e = 0; e < a.length - 1; e++) { var g = a[e]; g in b || (b[g] = {}); b = b[g] } a = a[a.length - 1]; e = b[a]; d = d(e); d != e && null != d && $jscomp.defineProperty(b, a, { configurable: !0, writable: !0, value: d }) } };
$jscomp.polyfill("Array.from", function (a) { return a ? a : function (a, b, e) { b = null != b ? b : function (a) { return a }; var d = [], l = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator]; if ("function" == typeof l) { a = l.call(a); for (var q = 0; !(l = a.next()).done;)d.push(b.call(e, l.value, q++)) } else for (l = a.length, q = 0; q < l; q++)d.push(b.call(e, a[q], q)); return d } }, "es6", "es3"); $jscomp.arrayIteratorImpl = function (a) { var d = 0; return function () { return d < a.length ? { done: !1, value: a[d++] } : { done: !0 } } }; $jscomp.arrayIterator = function (a) { return { next: $jscomp.arrayIteratorImpl(a) } };
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_"; $jscomp.initSymbol = function () { $jscomp.initSymbol = function () { }; $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol) }; $jscomp.SymbolClass = function (a, d) { this.$jscomp$symbol$id_ = a; $jscomp.defineProperty(this, "description", { configurable: !0, writable: !0, value: d }) }; $jscomp.SymbolClass.prototype.toString = function () { return this.$jscomp$symbol$id_ };
$jscomp.Symbol = function () { function a(b) { if (this instanceof a) throw new TypeError("Symbol is not a constructor"); return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (b || "") + "_" + d++, b) } var d = 0; return a }();
$jscomp.initSymbolIterator = function () { $jscomp.initSymbol(); var a = $jscomp.global.Symbol.iterator; a || (a = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator")); "function" != typeof Array.prototype[a] && $jscomp.defineProperty(Array.prototype, a, { configurable: !0, writable: !0, value: function () { return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this)) } }); $jscomp.initSymbolIterator = function () { } };
$jscomp.initSymbolAsyncIterator = function () { $jscomp.initSymbol(); var a = $jscomp.global.Symbol.asyncIterator; a || (a = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator")); $jscomp.initSymbolAsyncIterator = function () { } }; $jscomp.iteratorPrototype = function (a) { $jscomp.initSymbolIterator(); a = { next: a }; a[$jscomp.global.Symbol.iterator] = function () { return this }; return a };
$jscomp.iteratorFromArray = function (a, d) { $jscomp.initSymbolIterator(); a instanceof String && (a += ""); var b = 0, e = { next: function () { if (b < a.length) { var g = b++; return { value: d(g, a[g]), done: !1 } } e.next = function () { return { done: !0, value: void 0 } }; return e.next() } }; e[Symbol.iterator] = function () { return e }; return e }; $jscomp.polyfill("Array.prototype.keys", function (a) { return a ? a : function () { return $jscomp.iteratorFromArray(this, function (a) { return a }) } }, "es6", "es3");
(function (a) {
    function d(e) { if (b[e]) return b[e].exports; var g = b[e] = { i: e, l: !1, exports: {} }; a[e].call(g.exports, g, g.exports, d); g.l = !0; return g.exports } var b = {}; d.m = a; d.c = b; d.d = function (a, b, l) { d.o(a, b) || Object.defineProperty(a, b, { enumerable: !0, get: l }) }; d.r = function (a) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }); Object.defineProperty(a, "__esModule", { value: !0 }) }; d.t = function (a, b) {
        b & 1 && (a = d(a)); if (b & 8 || b & 4 && "object" === typeof a && a && a.__esModule) return a;
        var g = Object.create(null); d.r(g); Object.defineProperty(g, "default", { enumerable: !0, value: a }); if (b & 2 && "string" != typeof a) for (var e in a) d.d(g, e, function (b) { return a[b] }.bind(null, e)); return g
    }; d.n = function (a) { var b = a && a.__esModule ? function () { return a["default"] } : function () { return a }; d.d(b, "a", b); return b }; d.o = function (a, b) { return Object.prototype.hasOwnProperty.call(a, b) }; d.p = ""; return d(d.s = 10)
})([, , function (a, d) {
    a.exports = function (a) {
        "complete" === document.readyState || "interactive" === document.readyState ?
            a.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function () { "interactive" === document.readyState && a.call() }) : document.addEventListener && document.addEventListener("DOMContentLoaded", a)
    }
}, function (a, d, b) { d = b(4); a.exports = "undefined" !== typeof window ? window : "undefined" !== typeof d ? d : "undefined" !== typeof self ? self : {} }, function (a, d) {
    function b(a) {
        "@babel/helpers - typeof"; b = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (a) { return typeof a } : function (a) {
            return a &&
                "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        }; return b(a)
    } d = function () { return this }(); try { d = d || (new Function("return this"))() } catch (e) { "object" === ("undefined" === typeof window ? "undefined" : b(window)) && (d = window) } a.exports = d
}, , , , , , function (a, d, b) { a.exports = b(11) }, function (a, d, b) {
    function e(a) {
        "@babel/helpers - typeof"; e = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (a) { return typeof a } : function (a) {
            return a && "function" === typeof Symbol &&
                a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        }; return e(a)
    } b.r(d); a = b(2); a = b.n(a); var g = b(3); b.n(g); var l = b(12), q = g.window.jarallax; g.window.jarallax = l["default"]; g.window.jarallax.noConflict = function () { g.window.jarallax = q; return this }; if ("undefined" !== typeof g.jQuery) {
        b = function () { for (var a = arguments.length, b = Array(a), d = 0; d < a; d++)b[d] = arguments[d]; Array.prototype.unshift.call(b, this); a = l["default"].apply(g.window, b); return "object" !== e(a) ? a : this }; b.constructor = l["default"].constructor;
        var v = g.jQuery.fn.jarallax; g.jQuery.fn.jarallax = b; g.jQuery.fn.jarallax.noConflict = function () { g.jQuery.fn.jarallax = v; return this }
    } a()(function () { Object(l["default"])(document.querySelectorAll("[data-jarallax]")) })
}, function (a, d, b) {
    function e(a, f) {
        var h = Array.isArray(a) ? a : void 0; if (!h) if (h = a && ("undefined" !== typeof Symbol && a[Symbol.iterator] || a["@@iterator"]), null == h) h = void 0; else {
            var c = [], b = !0, d = !1, m; try { for (h = h.call(a); !(b = (m = h.next()).done) && (c.push(m.value), !f || c.length !== f); b = !0); } catch (B) {
                d = !0;
                var e = B
            } finally { try { if (!b && null != h["return"]) h["return"]() } finally { if (d) throw e; } } h = c
        } if (!(m = h)) a: { if (a) { if ("string" === typeof a) { m = g(a, f); break a } m = Object.prototype.toString.call(a).slice(8, -1); "Object" === m && a.constructor && (m = a.constructor.name); if ("Map" === m || "Set" === m) { m = Array.from(a); break a } if ("Arguments" === m || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)) { m = g(a, f); break a } } m = void 0 } if (!(a = m)) throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        return a
    } function g(a, f) { if (null == f || f > a.length) f = a.length; for (var h = 0, c = Array(f); h < f; h++)c[h] = a[h]; return c } function l(a) { "@babel/helpers - typeof"; l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (a) { return typeof a } : function (a) { return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a }; return l(a) } function q(a, f) {
        for (var h = 0; h < f.length; h++) {
            var c = f[h]; c.enumerable = c.enumerable || !1; c.configurable = !0; "value" in c && (c.writable = !0); Object.defineProperty(a,
                c.key, c)
        }
    } function v(a, f, h) { f && q(a.prototype, f); h && q(a, h); return a } function u() { C ? (!t && document.body && (t = document.createElement("div"), t.style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;", document.body.appendChild(t)), k = (t ? t.clientHeight : 0) || p.window.innerHeight || document.documentElement.clientHeight) : k = p.window.innerHeight || document.documentElement.clientHeight } function A(a) { for (var f = []; null !== a.parentElement;)a = a.parentElement, 1 === a.nodeType && f.push(a); return f } function x() {
        r.length &&
            (r.forEach(function (a, f) { var h = a.instance; a = a.oldData; var c = h.$item.getBoundingClientRect(); c = { width: c.width, height: c.height, top: c.top, bottom: c.bottom, wndW: p.window.innerWidth, wndH: k }; var b = !a || a.wndW !== c.wndW || a.wndH !== c.wndH || a.width !== c.width || a.height !== c.height; a = b || !a || a.top !== c.top || a.bottom !== c.bottom; r[f].oldData = c; if (b) h.onResize(); if (a) h.onScroll() }), p.window.requestAnimationFrame(x))
    } b.r(d); a = b(2); a = b.n(a); var p = b(3); b.n(p); var n = p.window.navigator, D = -1 < n.userAgent.indexOf("MSIE ") || -1 <
        n.userAgent.indexOf("Trident/") || -1 < n.userAgent.indexOf("Edge/"), C = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(n.userAgent), w = function () { for (var a = ["transform", "WebkitTransform", "MozTransform"], f = document.createElement("div"), h = 0; h < a.length; h += 1)if (f && void 0 !== f.style[a[h]]) return a[h]; return !1 }(), t, k; u(); p.window.addEventListener("resize", u); p.window.addEventListener("orientationchange", u); p.window.addEventListener("load", u); a()(function () { u({ type: "dom-loaded" }) }); var r =
            [], y = 0, z = function () {
                function a(f, h) {
                    if (!(this instanceof a)) throw new TypeError("Cannot call a class as a function"); var c = this; c.instanceID = y; y += 1; c.$item = f; c.defaults = {
                        type: "scroll", speed: .5, imgSrc: null, imgElement: ".jarallax-img", imgSize: "cover", imgPosition: "50% 50%", imgRepeat: "no-repeat", keepImg: !1, elementInViewport: null, zIndex: -100, disableParallax: !1, disableVideo: !1, videoSrc: null, videoStartTime: 0, videoEndTime: 0, videoVolume: 0, videoLoop: !0, videoPlayOnlyVisible: !0, videoLazyLoading: !0, onScroll: null,
                        onInit: null, onDestroy: null, onCoverImage: null
                    }; var b = c.$item.dataset || {}, d = {}; Object.keys(b).forEach(function (a) { var f = a.substr(0, 1).toLowerCase() + a.substr(1); f && "undefined" !== typeof c.defaults[f] && (d[f] = b[a]) }); c.options = c.extend({}, c.defaults, d, h); c.pureOptions = c.extend({}, c.options); Object.keys(c.options).forEach(function (a) { "true" === c.options[a] ? c.options[a] = !0 : "false" === c.options[a] && (c.options[a] = !1) }); c.options.speed = Math.min(2, Math.max(-1, parseFloat(c.options.speed))); "string" === typeof c.options.disableParallax &&
                        (c.options.disableParallax = new RegExp(c.options.disableParallax)); if (c.options.disableParallax instanceof RegExp) { var g = c.options.disableParallax; c.options.disableParallax = function () { return g.test(n.userAgent) } } "function" !== typeof c.options.disableParallax && (c.options.disableParallax = function () { return !1 }); "string" === typeof c.options.disableVideo && (c.options.disableVideo = new RegExp(c.options.disableVideo)); if (c.options.disableVideo instanceof RegExp) {
                            var m = c.options.disableVideo; c.options.disableVideo =
                                function () { return m.test(n.userAgent) }
                        } "function" !== typeof c.options.disableVideo && (c.options.disableVideo = function () { return !1 }); (f = c.options.elementInViewport) && "object" === l(f) && "undefined" !== typeof f.length && (f = e(f, 1)[0]); f instanceof Element || (f = null); c.options.elementInViewport = f; c.image = { src: c.options.imgSrc || null, $container: null, useImgTag: !1, position: /iPad|iPhone|iPod|Android/.test(n.userAgent) ? "absolute" : "fixed" }; c.initImg() && c.canInitParallax() && c.init()
                } v(a, [{
                    key: "css", value: function (a, b) {
                        if ("string" ===
                            typeof b) return p.window.getComputedStyle(a).getPropertyValue(b); b.transform && w && (b[w] = b.transform); Object.keys(b).forEach(function (c) { a.style[c] = b[c] }); return a
                    }
                }, { key: "extend", value: function (a) { for (var b = arguments.length, c = Array(1 < b ? b - 1 : 0), f = 1; f < b; f++)c[f - 1] = arguments[f]; a = a || {}; Object.keys(c).forEach(function (b) { c[b] && Object.keys(c[b]).forEach(function (f) { a[f] = c[b][f] }) }); return a } }, {
                    key: "getWindowData", value: function () {
                        return {
                            width: p.window.innerWidth || document.documentElement.clientWidth, height: k,
                            y: document.documentElement.scrollTop
                        }
                    }
                }, {
                    key: "initImg", value: function () {
                        var a = this.options.imgElement; a && "string" === typeof a && (a = this.$item.querySelector(a)); a instanceof Element || (this.options.imgSrc ? (a = new Image, a.src = this.options.imgSrc) : a = null); a && (this.options.keepImg ? this.image.$item = a.cloneNode(!0) : (this.image.$item = a, this.image.$itemParent = a.parentNode), this.image.useImgTag = !0); if (this.image.$item) return !0; null === this.image.src && (this.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                            this.image.bgImage = this.css(this.$item, "background-image")); return !(!this.image.bgImage || "none" === this.image.bgImage)
                    }
                }, { key: "canInitParallax", value: function () { return w && !this.options.disableParallax() } }, {
                    key: "init", value: function () {
                        var a = { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden" }, b = { pointerEvents: "none", transformStyle: "preserve-3d", backfaceVisibility: "hidden", willChange: "transform,opacity" }; if (!this.options.keepImg) {
                            var c = this.$item.getAttribute("style"); c && this.$item.setAttribute("data-jarallax-original-styles",
                                c); this.image.useImgTag && (c = this.image.$item.getAttribute("style")) && this.image.$item.setAttribute("data-jarallax-original-styles", c)
                        } "static" === this.css(this.$item, "position") && this.css(this.$item, { position: "relative" }); "auto" === this.css(this.$item, "z-index") && this.css(this.$item, { zIndex: 0 }); this.image.$container = document.createElement("div"); this.css(this.image.$container, a); this.css(this.image.$container, { "z-index": this.options.zIndex }); D && this.css(this.image.$container, { opacity: .9999 }); this.image.$container.setAttribute("id",
                            "jarallax-container-".concat(this.instanceID)); this.$item.appendChild(this.image.$container); this.image.useImgTag ? b = this.extend({ "object-fit": this.options.imgSize, "object-position": this.options.imgPosition, "font-family": "object-fit: ".concat(this.options.imgSize, "; object-position: ").concat(this.options.imgPosition, ";"), "max-width": "none" }, a, b) : (this.image.$item = document.createElement("div"), this.image.src && (b = this.extend({
                                "background-position": this.options.imgPosition, "background-size": this.options.imgSize,
                                "background-repeat": this.options.imgRepeat, "background-image": this.image.bgImage || 'url("'.concat(this.image.src, '")')
                            }, a, b))); if ("opacity" === this.options.type || "scale" === this.options.type || "scale-opacity" === this.options.type || 1 === this.options.speed) this.image.position = "absolute"; "fixed" === this.image.position && (a = A(this.$item).filter(function (a) {
                                a = p.window.getComputedStyle(a); var c = a["-webkit-transform"] || a["-moz-transform"] || a.transform, b = /(auto|scroll)/; return c && "none" !== c || b.test(a.overflow + a["overflow-y"] +
                                    a["overflow-x"])
                            }), this.image.position = a.length ? "absolute" : "fixed"); b.position = this.image.position; this.css(this.image.$item, b); this.image.$container.appendChild(this.image.$item); this.onResize(); this.onScroll(!0); this.options.onInit && this.options.onInit.call(this); "none" !== this.css(this.$item, "background-image") && this.css(this.$item, { "background-image": "none" }); this.addToParallaxList()
                    }
                }, { key: "addToParallaxList", value: function () { r.push({ instance: this }); 1 === r.length && p.window.requestAnimationFrame(x) } },
                { key: "removeFromParallaxList", value: function () { var a = this; r.forEach(function (b, c) { b.instance.instanceID === a.instanceID && r.splice(c, 1) }) } }, {
                    key: "destroy", value: function () {
                        this.removeFromParallaxList(); var a = this.$item.getAttribute("data-jarallax-original-styles"); this.$item.removeAttribute("data-jarallax-original-styles"); a ? this.$item.setAttribute("style", a) : this.$item.removeAttribute("style"); if (this.image.useImgTag) {
                            var b = this.image.$item.getAttribute("data-jarallax-original-styles"); this.image.$item.removeAttribute("data-jarallax-original-styles");
                            b ? this.image.$item.setAttribute("style", a) : this.image.$item.removeAttribute("style"); this.image.$itemParent && this.image.$itemParent.appendChild(this.image.$item)
                        } this.$clipStyles && this.$clipStyles.parentNode.removeChild(this.$clipStyles); this.image.$container && this.image.$container.parentNode.removeChild(this.image.$container); this.options.onDestroy && this.options.onDestroy.call(this); delete this.$item.jarallax
                    }
                }, {
                    key: "clipContainer", value: function () {
                        if ("fixed" === this.image.position) {
                            var a = this.image.$container.getBoundingClientRect(),
                                b = a.width; a = a.height; this.$clipStyles || (this.$clipStyles = document.createElement("style"), this.$clipStyles.setAttribute("type", "text/css"), this.$clipStyles.setAttribute("id", "jarallax-clip-".concat(this.instanceID)), (document.head || document.getElementsByTagName("head")[0]).appendChild(this.$clipStyles)); b = "#jarallax-container-".concat(this.instanceID, " {\n            clip: rect(0 ").concat(b, "px ").concat(a, "px 0);\n            clip: rect(0, ").concat(b, "px, ").concat(a, "px, 0);\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        }");
                            this.$clipStyles.styleSheet ? this.$clipStyles.styleSheet.cssText = b : this.$clipStyles.innerHTML = b
                        }
                    }
                }, {
                    key: "coverImage", value: function () {
                        var a = this.image.$container.getBoundingClientRect(), b = a.height, c = this.options.speed, d = "scroll" === this.options.type || "scroll-opacity" === this.options.type, e = 0, g = b; d && (0 > c ? (e = c * Math.max(b, k), k < b && (e -= c * (b - k))) : e = c * (b + k), g = 1 < c ? Math.abs(e - k) : 0 > c ? e / c + Math.abs(e) : g + (k - b) * (1 - c), e /= 2); this.parallaxScrollDistance = e; b = d ? (k - g) / 2 : (b - g) / 2; this.css(this.image.$item, {
                            height: "".concat(g,
                                "px"), marginTop: "".concat(b, "px"), left: "fixed" === this.image.position ? "".concat(a.left, "px") : "0", width: "".concat(a.width, "px")
                        }); this.options.onCoverImage && this.options.onCoverImage.call(this); return { image: { height: g, marginTop: b }, container: a }
                    }
                }, { key: "isVisible", value: function () { return this.isElementInViewport || !1 } }, {
                    key: "onScroll", value: function (a) {
                        var b = this.$item.getBoundingClientRect(), c = b.top, d = b.height, f = {}, e = b; this.options.elementInViewport && (e = this.options.elementInViewport.getBoundingClientRect());
                        this.isElementInViewport = 0 <= e.bottom && 0 <= e.right && e.top <= k && e.left <= p.window.innerWidth; if (a || this.isElementInViewport) {
                            a = Math.max(0, c); e = Math.max(0, d + c); var g = Math.max(0, -c), m = Math.max(0, c + d - k), l = Math.max(0, d - (c + d - k)), q = Math.max(0, -c + k - d), r = 1 - (k - c) / (k + d) * 2, n = 1; d < k ? n = 1 - (g || m) / d : e <= k ? n = e / k : l <= k && (n = l / k); if ("opacity" === this.options.type || "scale-opacity" === this.options.type || "scroll-opacity" === this.options.type) f.transform = "translate3d(0,0,0)", f.opacity = n; if ("scale" === this.options.type || "scale-opacity" ===
                                this.options.type) d = 1, d = 0 > this.options.speed ? d - this.options.speed * n : d + this.options.speed * (1 - n), f.transform = "scale(".concat(d, ") translate3d(0,0,0)"); if ("scroll" === this.options.type || "scroll-opacity" === this.options.type) d = this.parallaxScrollDistance * r, "absolute" === this.image.position && (d -= c), f.transform = "translate3d(0,".concat(d, "px,0)"); this.css(this.image.$item, f); this.options.onScroll && this.options.onScroll.call(this, {
                                    section: b, beforeTop: a, beforeTopEnd: e, afterTop: g, beforeBottom: m, beforeBottomEnd: l,
                                    afterBottom: q, visiblePercent: n, fromViewportCenter: r
                                })
                        }
                    }
                }, { key: "onResize", value: function () { this.coverImage(); this.clipContainer() } }]); return a
            }(); b = function (a, b) {
                if ("object" === ("undefined" === typeof HTMLElement ? "undefined" : l(HTMLElement)) ? a instanceof HTMLElement : a && "object" === l(a) && null !== a && 1 === a.nodeType && "string" === typeof a.nodeName) a = [a]; for (var d = a.length, c = 0, e, f = arguments.length, g = Array(2 < f ? f - 2 : 0), k = 2; k < f; k++)g[k - 2] = arguments[k]; for (c; c < d; c += 1)if ("object" === l(b) || "undefined" === typeof b ? a[c].jarallax ||
                    (a[c].jarallax = new z(a[c], b)) : a[c].jarallax && (e = a[c].jarallax[b].apply(a[c].jarallax, g)), "undefined" !== typeof e) return e; return a
            }; b.constructor = z; d["default"] = b
}]);
