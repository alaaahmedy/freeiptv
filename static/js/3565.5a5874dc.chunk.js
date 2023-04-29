(self.webpackChunkbeacons_sup = self.webpackChunkbeacons_sup || []).push([
    [3565], {
        44281: function(e, t, n) {
            "use strict";
            var o = n(64836);
            t.Z = void 0;
            var r = o(n(45649)),
                i = n(80184),
                a = (0, r.default)((0, i.jsx)("path", {
                    d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
                }), "Email");
            t.Z = a
        },
        56120: function(e, t, n) {
            "use strict";
            var o = n(64836);
            t.Z = void 0;
            var r = o(n(45649)),
                i = n(80184),
                a = (0, r.default)((0, i.jsx)("path", {
                    d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"
                }), "FileCopy");
            t.Z = a
        },
        5536: function(e, t, n) {
            "use strict";
            var o = n(64836);
            t.Z = void 0;
            var r = o(n(45649)),
                i = n(80184),
                a = (0, r.default)((0, i.jsx)("path", {
                    d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
                }), "Launch");
            t.Z = a
        },
        91964: function(e, t, n) {
            "use strict";
            var o = n(64836);
            t.Z = void 0;
            var r = o(n(45649)),
                i = n(80184),
                a = (0, r.default)((0, i.jsx)("path", {
                    d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
                }), "Warning");
            t.Z = a
        },
        56125: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return D
                }
            });
            var o = n(4942),
                r = n(63366),
                i = n(87462),
                a = n(72791),
                s = n(28182),
                c = n(18875),
                u = n(94419),
                l = n(66934),
                d = n(31402),
                p = n(81314),
                f = n(4999),
                h = n(13967),
                v = n(42071),
                m = n(75878),
                g = n(21217);

            function y(e) {
                return (0, g.Z)("MuiCollapse", e)
            }(0, m.Z)("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
            var w = n(80184),
                x = ["addEndListener", "children", "className", "collapsedSize", "component", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"],
                E = (0, l.ZP)("div", {
                    name: "MuiCollapse",
                    slot: "Root",
                    overridesResolver: function(e, t) {
                        var n = e.ownerState;
                        return [t.root, t[n.orientation], "entered" === n.state && t.entered, "exited" === n.state && !n.in && "0px" === n.collapsedSize && t.hidden]
                    }
                })((function(e) {
                    var t = e.theme,
                        n = e.ownerState;
                    return (0, i.Z)({
                        height: 0,
                        overflow: "hidden",
                        transition: t.transitions.create("height")
                    }, "horizontal" === n.orientation && {
                        height: "auto",
                        width: 0,
                        transition: t.transitions.create("width")
                    }, "entered" === n.state && (0, i.Z)({
                        height: "auto",
                        overflow: "visible"
                    }, "horizontal" === n.orientation && {
                        width: "auto"
                    }), "exited" === n.state && !n.in && "0px" === n.collapsedSize && {
                        visibility: "hidden"
                    })
                })),
                Z = (0, l.ZP)("div", {
                    name: "MuiCollapse",
                    slot: "Wrapper",
                    overridesResolver: function(e, t) {
                        return t.wrapper
                    }
                })((function(e) {
                    var t = e.ownerState;
                    return (0, i.Z)({
                        display: "flex",
                        width: "100%"
                    }, "horizontal" === t.orientation && {
                        width: "auto",
                        height: "100%"
                    })
                })),
                C = (0, l.ZP)("div", {
                    name: "MuiCollapse",
                    slot: "WrapperInner",
                    overridesResolver: function(e, t) {
                        return t.wrapperInner
                    }
                })((function(e) {
                    var t = e.ownerState;
                    return (0, i.Z)({
                        width: "100%"
                    }, "horizontal" === t.orientation && {
                        width: "auto",
                        height: "100%"
                    })
                })),
                b = a.forwardRef((function(e, t) {
                    var n = (0, d.Z)({
                            props: e,
                            name: "MuiCollapse"
                        }),
                        l = n.addEndListener,
                        m = n.children,
                        g = n.className,
                        b = n.collapsedSize,
                        D = void 0 === b ? "0px" : b,
                        z = n.component,
                        R = n.easing,
                        S = n.in,
                        M = n.onEnter,
                        T = n.onEntered,
                        A = n.onEntering,
                        H = n.onExit,
                        k = n.onExited,
                        I = n.onExiting,
                        L = n.orientation,
                        V = void 0 === L ? "vertical" : L,
                        j = n.style,
                        N = n.timeout,
                        P = void 0 === N ? p.x9.standard : N,
                        U = n.TransitionComponent,
                        W = void 0 === U ? c.ZP : U,
                        F = (0, r.Z)(n, x),
                        _ = (0, i.Z)({}, n, {
                            orientation: V,
                            collapsedSize: D
                        }),
                        X = function(e) {
                            var t = e.orientation,
                                n = e.classes,
                                o = {
                                    root: ["root", "".concat(t)],
                                    entered: ["entered"],
                                    hidden: ["hidden"],
                                    wrapper: ["wrapper", "".concat(t)],
                                    wrapperInner: ["wrapperInner", "".concat(t)]
                                };
                            return (0, u.Z)(o, y, n)
                        }(_),
                        q = (0, h.Z)(),
                        B = a.useRef(),
                        G = a.useRef(null),
                        J = a.useRef(),
                        K = "number" === typeof D ? "".concat(D, "px") : D,
                        O = "horizontal" === V,
                        Q = O ? "width" : "height";
                    a.useEffect((function() {
                        return function() {
                            clearTimeout(B.current)
                        }
                    }), []);
                    var Y = a.useRef(null),
                        $ = (0, v.Z)(t, Y),
                        ee = function(e) {
                            return function(t) {
                                if (e) {
                                    var n = Y.current;
                                    void 0 === t ? e(n) : e(n, t)
                                }
                            }
                        },
                        te = function() {
                            return G.current ? G.current[O ? "clientWidth" : "clientHeight"] : 0
                        },
                        ne = ee((function(e, t) {
                            G.current && O && (G.current.style.position = "absolute"), e.style[Q] = K, M && M(e, t)
                        })),
                        oe = ee((function(e, t) {
                            var n = te();
                            G.current && O && (G.current.style.position = "");
                            var o = (0, f.C)({
                                    style: j,
                                    timeout: P,
                                    easing: R
                                }, {
                                    mode: "enter"
                                }),
                                r = o.duration,
                                i = o.easing;
                            if ("auto" === P) {
                                var a = q.transitions.getAutoHeightDuration(n);
                                e.style.transitionDuration = "".concat(a, "ms"), J.current = a
                            } else e.style.transitionDuration = "string" === typeof r ? r : "".concat(r, "ms");
                            e.style[Q] = "".concat(n, "px"), e.style.transitionTimingFunction = i, A && A(e, t)
                        })),
                        re = ee((function(e, t) {
                            e.style[Q] = "auto", T && T(e, t)
                        })),
                        ie = ee((function(e) {
                            e.style[Q] = "".concat(te(), "px"), H && H(e)
                        })),
                        ae = ee(k),
                        se = ee((function(e) {
                            var t = te(),
                                n = (0, f.C)({
                                    style: j,
                                    timeout: P,
                                    easing: R
                                }, {
                                    mode: "exit"
                                }),
                                o = n.duration,
                                r = n.easing;
                            if ("auto" === P) {
                                var i = q.transitions.getAutoHeightDuration(t);
                                e.style.transitionDuration = "".concat(i, "ms"), J.current = i
                            } else e.style.transitionDuration = "string" === typeof o ? o : "".concat(o, "ms");
                            e.style[Q] = K, e.style.transitionTimingFunction = r, I && I(e)
                        }));
                    return (0, w.jsx)(W, (0, i.Z)({ in: S,
                        onEnter: ne,
                        onEntered: re,
                        onEntering: oe,
                        onExit: ie,
                        onExited: ae,
                        onExiting: se,
                        addEndListener: function(e) {
                            "auto" === P && (B.current = setTimeout(e, J.current || 0)), l && l(Y.current, e)
                        },
                        nodeRef: Y,
                        timeout: "auto" === P ? null : P
                    }, F, {
                        children: function(e, t) {
                            return (0, w.jsx)(E, (0, i.Z)({
                                as: z,
                                className: (0, s.Z)(X.root, g, {
                                    entered: X.entered,
                                    exited: !S && "0px" === K && X.hidden
                                }[e]),
                                style: (0, i.Z)((0, o.Z)({}, O ? "minWidth" : "minHeight", K), j),
                                ownerState: (0, i.Z)({}, _, {
                                    state: e
                                }),
                                ref: $
                            }, t, {
                                children: (0, w.jsx)(Z, {
                                    ownerState: (0, i.Z)({}, _, {
                                        state: e
                                    }),
                                    className: X.wrapper,
                                    ref: G,
                                    children: (0, w.jsx)(C, {
                                        ownerState: (0, i.Z)({}, _, {
                                            state: e
                                        }),
                                        className: X.wrapperInner,
                                        children: m
                                    })
                                })
                            }))
                        }
                    }))
                }));
            b.muiSupportAuto = !0;
            var D = b
        },
        76998: function(e, t, n) {
            "use strict";
            var o = n(42458),
                r = {
                    "text/plain": "Text",
                    "text/html": "Url",
                    default: "Text"
                };
            e.exports = function(e, t) {
                var n, i, a, s, c, u, l = !1;
                t || (t = {}), n = t.debug || !1;
                try {
                    if (a = o(), s = document.createRange(), c = document.getSelection(), (u = document.createElement("span")).textContent = e, u.ariaHidden = "true", u.style.all = "unset", u.style.position = "fixed", u.style.top = 0, u.style.clip = "rect(0, 0, 0, 0)", u.style.whiteSpace = "pre", u.style.webkitUserSelect = "text", u.style.MozUserSelect = "text", u.style.msUserSelect = "text", u.style.userSelect = "text", u.addEventListener("copy", (function(o) {
                            if (o.stopPropagation(), t.format)
                                if (o.preventDefault(), "undefined" === typeof o.clipboardData) {
                                    n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                                    var i = r[t.format] || r.default;
                                    window.clipboardData.setData(i, e)
                                } else o.clipboardData.clearData(), o.clipboardData.setData(t.format, e);
                            t.onCopy && (o.preventDefault(), t.onCopy(o.clipboardData))
                        })), document.body.appendChild(u), s.selectNodeContents(u), c.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
                    l = !0
                } catch (d) {
                    n && console.error("unable to copy using execCommand: ", d), n && console.warn("trying IE specific stuff");
                    try {
                        window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), l = !0
                    } catch (d) {
                        n && console.error("unable to copy using clipboardData: ", d), n && console.error("falling back to prompt"), i = function(e) {
                            var t = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
                            return e.replace(/#{\s*key\s*}/g, t)
                        }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(i, e)
                    }
                } finally {
                    c && ("function" == typeof c.removeRange ? c.removeRange(s) : c.removeAllRanges()), u && document.body.removeChild(u), a()
                }
                return l
            }
        },
        42458: function(e) {
            e.exports = function() {
                var e = document.getSelection();
                if (!e.rangeCount) return function() {};
                for (var t = document.activeElement, n = [], o = 0; o < e.rangeCount; o++) n.push(e.getRangeAt(o));
                switch (t.tagName.toUpperCase()) {
                    case "INPUT":
                    case "TEXTAREA":
                        t.blur();
                        break;
                    default:
                        t = null
                }
                return e.removeAllRanges(),
                    function() {
                        "Caret" === e.type && e.removeAllRanges(), e.rangeCount || n.forEach((function(t) {
                            e.addRange(t)
                        })), t && t.focus()
                    }
            }
        }
    }
]);
//# sourceMappingURL=3565.5a5874dc.chunk.js.map