(self.webpackChunkbeacons_sup = self.webpackChunkbeacons_sup || []).push([
    [5179], {
        1588: function(e, t, n) {
            "use strict";
            var r = n(64836);
            t.Z = void 0;
            var o = r(n(45649)),
                a = n(80184),
                i = (0, o.default)((0, a.jsx)("path", {
                    d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                }), "LocationOn");
            t.Z = i
        },
        91614: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return w
                }
            });
            var r = n(4942),
                o = n(63366),
                a = n(87462),
                i = n(72791),
                c = n(28182),
                u = n(27312),
                l = n(21217),
                s = n(94419),
                f = n(86083),
                p = (0, n(44046).ZP)(),
                d = n(85080),
                m = n(80184),
                h = ["className", "component", "disableGutters", "fixed", "maxWidth", "classes"],
                g = (0, d.Z)(),
                y = p("div", {
                    name: "MuiContainer",
                    slot: "Root",
                    overridesResolver: function(e, t) {
                        var n = e.ownerState;
                        return [t.root, t["maxWidth".concat((0, u.Z)(String(n.maxWidth)))], n.fixed && t.fixed, n.disableGutters && t.disableGutters]
                    }
                }),
                v = function(e) {
                    return (0, f.Z)({
                        props: e,
                        name: "MuiContainer",
                        defaultTheme: g
                    })
                },
                k = function(e, t) {
                    var n = e.classes,
                        r = e.fixed,
                        o = e.disableGutters,
                        a = e.maxWidth,
                        i = {
                            root: ["root", a && "maxWidth".concat((0, u.Z)(String(a))), r && "fixed", o && "disableGutters"]
                        };
                    return (0, s.Z)(i, (function(e) {
                        return (0, l.Z)(t, e)
                    }), n)
                };
            var b = n(14036),
                x = n(66934),
                S = n(31402),
                _ = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.createStyledComponent,
                        n = void 0 === t ? y : t,
                        u = e.useThemeProps,
                        l = void 0 === u ? v : u,
                        s = e.componentName,
                        f = void 0 === s ? "MuiContainer" : s,
                        p = n((function(e) {
                            var t = e.theme,
                                n = e.ownerState;
                            return (0, a.Z)({
                                width: "100%",
                                marginLeft: "auto",
                                boxSizing: "border-box",
                                marginRight: "auto",
                                display: "block"
                            }, !n.disableGutters && (0, r.Z)({
                                paddingLeft: t.spacing(2),
                                paddingRight: t.spacing(2)
                            }, t.breakpoints.up("sm"), {
                                paddingLeft: t.spacing(3),
                                paddingRight: t.spacing(3)
                            }))
                        }), (function(e) {
                            var t = e.theme;
                            return e.ownerState.fixed && Object.keys(t.breakpoints.values).reduce((function(e, n) {
                                var r = n,
                                    o = t.breakpoints.values[r];
                                return 0 !== o && (e[t.breakpoints.up(r)] = {
                                    maxWidth: "".concat(o).concat(t.breakpoints.unit)
                                }), e
                            }), {})
                        }), (function(e) {
                            var t = e.theme,
                                n = e.ownerState;
                            return (0, a.Z)({}, "xs" === n.maxWidth && (0, r.Z)({}, t.breakpoints.up("xs"), {
                                maxWidth: Math.max(t.breakpoints.values.xs, 444)
                            }), n.maxWidth && "xs" !== n.maxWidth && (0, r.Z)({}, t.breakpoints.up(n.maxWidth), {
                                maxWidth: "".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)
                            }))
                        })),
                        d = i.forwardRef((function(e, t) {
                            var n = l(e),
                                r = n.className,
                                i = n.component,
                                u = void 0 === i ? "div" : i,
                                s = n.disableGutters,
                                d = void 0 !== s && s,
                                g = n.fixed,
                                y = void 0 !== g && g,
                                v = n.maxWidth,
                                b = void 0 === v ? "lg" : v,
                                x = (0, o.Z)(n, h),
                                S = (0, a.Z)({}, n, {
                                    component: u,
                                    disableGutters: d,
                                    fixed: y,
                                    maxWidth: b
                                }),
                                _ = k(S, f);
                            return (0, m.jsx)(p, (0, a.Z)({
                                as: u,
                                ownerState: S,
                                className: (0, c.Z)(_.root, r),
                                ref: t
                            }, x))
                        }));
                    return d
                }({
                    createStyledComponent: (0, x.ZP)("div", {
                        name: "MuiContainer",
                        slot: "Root",
                        overridesResolver: function(e, t) {
                            var n = e.ownerState;
                            return [t.root, t["maxWidth".concat((0, b.Z)(String(n.maxWidth)))], n.fixed && t.fixed, n.disableGutters && t.disableGutters]
                        }
                    }),
                    useThemeProps: function(e) {
                        return (0, S.Z)({
                            props: e,
                            name: "MuiContainer"
                        })
                    }
                }),
                w = _
        },
        69919: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return qe
                }
            });
            var r = n(72791),
                o = n(75809),
                a = n.n(o),
                i = Object.assign || function(e) {
                    for (var t, n = 1; n < arguments.length; n++)
                        for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                },
                c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
            var u = {
                    accesskey: "accessKey",
                    allowfullscreen: "allowFullScreen",
                    allowtransparency: "allowTransparency",
                    autocomplete: "autoComplete",
                    autofocus: "autoFocus",
                    autoplay: "autoPlay",
                    cellpadding: "cellPadding",
                    cellspacing: "cellSpacing",
                    charset: "charSet",
                    class: "className",
                    classid: "classId",
                    colspan: "colSpan",
                    contenteditable: "contentEditable",
                    contextmenu: "contextMenu",
                    crossorigin: "crossOrigin",
                    enctype: "encType",
                    for: "htmlFor",
                    formaction: "formAction",
                    formenctype: "formEncType",
                    formmethod: "formMethod",
                    formnovalidate: "formNoValidate",
                    formtarget: "formTarget",
                    frameborder: "frameBorder",
                    hreflang: "hrefLang",
                    inputmode: "inputMode",
                    keyparams: "keyParams",
                    keytype: "keyType",
                    marginheight: "marginHeight",
                    marginwidth: "marginWidth",
                    maxlength: "maxLength",
                    mediagroup: "mediaGroup",
                    minlength: "minLength",
                    novalidate: "noValidate",
                    radiogroup: "radioGroup",
                    readonly: "readOnly",
                    rowspan: "rowSpan",
                    spellcheck: "spellCheck",
                    srcdoc: "srcDoc",
                    srclang: "srcLang",
                    srcset: "srcSet",
                    tabindex: "tabIndex",
                    usemap: "useMap"
                },
                l = {
                    amp: "&",
                    apos: "'",
                    gt: ">",
                    lt: "<",
                    nbsp: "\xa0",
                    quot: "\u201c"
                },
                s = ["style", "script"],
                f = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
                p = /mailto:/i,
                d = /\n{2,}$/,
                m = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
                h = /^ *> ?/gm,
                g = /^ {2,}\n/,
                y = /^(?:( *[-*_]) *){3,}(?:\n *)+\n/,
                v = /^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,
                k = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
                b = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
                x = /^(?:\n *)*\n/,
                S = /\r\n?/g,
                _ = /^\[\^([^\]]+)](:.*)\n/,
                w = /^\[\^([^\]]+)]/,
                C = /\f/g,
                Z = /^\s*?\[(x|\s)\]/,
                O = /^ *(#{1,6}) *([^\n]+)\n{0,2}/,
                T = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
                $ = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
                j = /&([a-z]+);/g,
                A = /^<!--.*?-->/,
                W = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
                z = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
                M = /^\{.*\}$/,
                L = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
                R = /^<([^ >]+@[^ >]+)>/,
                q = /^<([^ >]+:\/[^ >]+)>/,
                E = / *\n+$/,
                P = /(?:^|\n)( *)$/,
                G = /-([a-z])?/gi,
                I = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
                N = /^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,
                U = /^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,
                B = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
                D = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
                F = /(\[|\])/g,
                H = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
                V = /\t/g,
                K = /^ *\| */,
                Q = /(^ *\||\| *$)/g,
                J = / *$/,
                X = /^ *:-+: *$/,
                Y = /^ *:-+ *$/,
                ee = /^ *-+: *$/,
                te = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
                ne = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,
                re = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
                oe = /^\\([^0-9A-Za-z\s])/,
                ae = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
                ie = /(^\n+|\n+$|\s+$)/g,
                ce = /^([ \t]*)/,
                ue = /\\([^0-9A-Z\s])/gi,
                le = /^( *)((?:[*+-]|\d+\.)) +/,
                se = /( *)((?:[*+-]|\d+\.)) +[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*(\n|$)/gm,
                fe = /^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) (?!(?:[*+-]|\d+\.) ))\n*|\s*\n*$)/,
                pe = /^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,
                de = /^!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,
                me = [m, k, v, O, T, $, A, z, se, fe, I, N];

            function he(e) {
                return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g, "a").replace(/[\xe7\xc7]/g, "c").replace(/[\xf0\xd0]/g, "d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g, "e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g, "i").replace(/[\xd1\xf1]/g, "n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g, "o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g, "u").replace(/[\u0178\xff\xdd\xfd]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase()
            }

            function ge(e) {
                return ee.test(e) ? "right" : X.test(e) ? "center" : Y.test(e) ? "left" : null
            }

            function ye(e, t, n) {
                var r = n.inTable;
                n.inTable = !0;
                var o = t(e.trim(), n);
                n.inTable = r;
                var a = [
                    []
                ];
                return o.forEach((function(e, t) {
                    "tableSeparator" === e.type ? 0 !== t && t !== o.length - 1 && a.push([]) : ("text" === e.type && (null == o[t + 1] || "tableSeparator" === o[t + 1].type) && (e.content = e.content.replace(J, "")), a[a.length - 1].push(e))
                })), a
            }

            function ve(e, t, n) {
                n.inline = !0;
                var r = ye(e[1], t, n),
                    o = function(e) {
                        return e.replace(Q, "").split("|").map(ge)
                    }(e[2]),
                    a = function(e, t, n) {
                        return e.trim().split("\n").map((function(e) {
                            return ye(e, t, n)
                        }))
                    }(e[3], t, n);
                return n.inline = !1, {
                    align: o,
                    cells: a,
                    header: r,
                    type: "table"
                }
            }

            function ke(e, t) {
                return null == e.align[t] ? {} : {
                    textAlign: e.align[t]
                }
            }

            function be(e) {
                function t(r, o) {
                    for (var a = [], i = ""; r;)
                        for (var c = 0; c < n.length;) {
                            var u = n[c],
                                l = e[u],
                                s = l.match(r, o, i);
                            if (s) {
                                var f = s[0];
                                r = r.substring(f.length);
                                var p = l.parse(s, t, o);
                                null == p.type && (p.type = u), a.push(p), i = f;
                                break
                            }
                            c++
                        }
                    return a
                }
                var n = Object.keys(e);
                return n.sort((function(t, n) {
                        var r = e[t].order,
                            o = e[n].order;
                        return r === o ? t < n ? -1 : 1 : r - o
                    })),
                    function(e, n) {
                        return t(function(e) {
                            return e.replace(S, "\n").replace(C, "").replace(V, "    ")
                        }(e), n)
                    }
            }

            function xe(e) {
                return function(t, n) {
                    return n.inline ? e.exec(t) : null
                }
            }

            function Se(e) {
                return function(t, n) {
                    return n.inline || n.simple ? e.exec(t) : null
                }
            }

            function _e(e) {
                return function(t, n) {
                    return n.inline || n.simple ? null : e.exec(t)
                }
            }

            function we(e) {
                return function(t) {
                    return e.exec(t)
                }
            }

            function Ce(e) {
                try {
                    if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data):/i)) return null
                } catch (t) {
                    return null
                }
                return e
            }

            function Ze(e) {
                return e.replace(ue, "$1")
            }

            function Oe(e, t, n) {
                var r = n.inline || !1,
                    o = n.simple || !1;
                n.inline = !0, n.simple = !0;
                var a = e(t, n);
                return n.inline = r, n.simple = o, a
            }

            function Te(e, t, n) {
                var r = n.inline || !1,
                    o = n.simple || !1;
                n.inline = !1, n.simple = !0;
                var a = e(t, n);
                return n.inline = r, n.simple = o, a
            }

            function $e(e, t, n) {
                return n.inline = !1, e(t + "\n\n", n)
            }

            function je(e, t, n) {
                return {
                    content: Oe(t, e[1], n)
                }
            }

            function Ae() {
                return {}
            }

            function We() {
                return null
            }

            function ze() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t.filter(Boolean).join(" ")
            }

            function Me(e, t, n) {
                for (var r = e, o = t.split("."); o.length && void 0 !== (r = r[o[0]]);) o.shift();
                return r || n
            }

            function Le(e, t) {
                var n = Me(t, e);
                return n ? "function" == typeof n || "object" === ("undefined" == typeof n ? "undefined" : c(n)) && "render" in n ? n : Me(t, e + ".component", e) : e
            }

            function Re(e, t) {
                function n(e, n) {
                    for (var r = Me(t.overrides, e + ".props", {}), o = arguments.length, a = Array(o > 2 ? o - 2 : 0), c = 2; c < o; c++) a[c - 2] = arguments[c];
                    return S.apply(void 0, [Le(e, t.overrides), i({}, n, r, {
                        className: ze(n && n.className, r.className) || void 0
                    })].concat(a))
                }

                function o(e) {
                    var r = !1;
                    t.forceInline ? r = !0 : !t.forceBlock && (r = !1 === H.test(e));
                    var o = X(J(r ? e : e.replace(ie, "") + "\n\n", {
                            inline: r
                        })),
                        a = void 0;
                    return o.length > 1 ? a = n(r ? "span" : "div", {
                        key: "outer"
                    }, o) : 1 === o.length ? "string" == typeof(a = o[0]) && (a = n("span", {
                        key: "outer"
                    }, a)) : a = n("span", {
                        key: "outer"
                    }), a
                }

                function c(e) {
                    var t = e.match(f);
                    return t ? t.reduce((function(e, t, n) {
                        var i = t.indexOf("=");
                        if (-1 !== i) {
                            var c = function(e) {
                                    return -1 !== e.indexOf("-") && null === e.match(W) && (e = e.replace(G, (function(e, t) {
                                        return t.toUpperCase()
                                    }))), e
                                }(t.slice(0, i)).trim(),
                                l = a()(t.slice(i + 1).trim()),
                                s = u[c] || c,
                                f = e[s] = function(e, t) {
                                    return "style" === e ? t.split(/;\s?/).reduce((function(e, t) {
                                        var n = t.slice(0, t.indexOf(":")),
                                            r = n.replace(/(-[a-z])/g, (function(e) {
                                                return e[1].toUpperCase()
                                            }));
                                        return e[r] = t.slice(n.length + 1).trim(), e
                                    }), {}) : "href" === e ? Ce(t) : (t.match(M) && (t = t.slice(1, t.length - 1)), "true" === t || "false" !== t && t)
                                }(c, l);
                            ($.test(f) || z.test(f)) && (e[s] = r.cloneElement(o(f.trim()), {
                                key: n
                            }))
                        } else "style" !== t && (e[u[t] || t] = !0);
                        return e
                    }), {}) : void 0
                }(t = t || {}).overrides = t.overrides || {}, t.slugify = t.slugify || he, t.namedCodesToUnicode = t.namedCodesToUnicode ? i({}, l, t.namedCodesToUnicode) : l;
                var S = t.createElement || r.createElement;
                var C = [],
                    V = {},
                    Q = {
                        blockQuote: {
                            match: _e(m),
                            order: 2,
                            parse: function(e, t, n) {
                                return {
                                    content: t(e[0].replace(h, ""), n)
                                }
                            },
                            react: function(e, t, r) {
                                return n("blockquote", {
                                    key: r.key
                                }, t(e.content, r))
                            }
                        },
                        breakLine: {
                            match: we(g),
                            order: 2,
                            parse: Ae,
                            react: function(e, t, r) {
                                return n("br", {
                                    key: r.key
                                })
                            }
                        },
                        breakThematic: {
                            match: _e(y),
                            order: 2,
                            parse: Ae,
                            react: function(e, t, r) {
                                return n("hr", {
                                    key: r.key
                                })
                            }
                        },
                        codeBlock: {
                            match: _e(k),
                            order: 1,
                            parse: function(e) {
                                return {
                                    content: e[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""),
                                    lang: void 0
                                }
                            },
                            react: function(e, t, r) {
                                return n("pre", {
                                    key: r.key
                                }, n("code", {
                                    className: e.lang ? "lang-" + e.lang : ""
                                }, e.content))
                            }
                        },
                        codeFenced: {
                            match: _e(v),
                            order: 1,
                            parse: function(e) {
                                return {
                                    content: e[3],
                                    lang: e[2] || void 0,
                                    type: "codeBlock"
                                }
                            }
                        },
                        codeInline: {
                            match: Se(b),
                            order: 4,
                            parse: function(e) {
                                return {
                                    content: e[2]
                                }
                            },
                            react: function(e, t, r) {
                                return n("code", {
                                    key: r.key
                                }, e.content)
                            }
                        },
                        footnote: {
                            match: _e(_),
                            order: 1,
                            parse: function(e) {
                                return C.push({
                                    footnote: e[2],
                                    identifier: e[1]
                                }), {}
                            },
                            react: We
                        },
                        footnoteReference: {
                            match: xe(w),
                            order: 2,
                            parse: function(e) {
                                return {
                                    content: e[1],
                                    target: "#" + t.slugify(e[1])
                                }
                            },
                            react: function(e, t, r) {
                                return n("a", {
                                    key: r.key,
                                    href: Ce(e.target)
                                }, n("sup", {
                                    key: r.key
                                }, e.content))
                            }
                        },
                        gfmTask: {
                            match: xe(Z),
                            order: 2,
                            parse: function(e) {
                                return {
                                    completed: "x" === e[1].toLowerCase()
                                }
                            },
                            react: function(e, t, r) {
                                return n("input", {
                                    checked: e.completed,
                                    key: r.key,
                                    readOnly: !0,
                                    type: "checkbox"
                                })
                            }
                        },
                        heading: {
                            match: _e(O),
                            order: 2,
                            parse: function(e, n, r) {
                                return {
                                    content: Oe(n, e[2], r),
                                    id: t.slugify(e[2]),
                                    level: e[1].length
                                }
                            },
                            react: function(e, t, r) {
                                return n("h" + e.level, {
                                    id: e.id,
                                    key: r.key
                                }, t(e.content, r))
                            }
                        },
                        headingSetext: {
                            match: _e(T),
                            order: 1,
                            parse: function(e, t, n) {
                                return {
                                    content: Oe(t, e[1], n),
                                    level: "=" === e[2] ? 1 : 2,
                                    type: "heading"
                                }
                            }
                        },
                        htmlComment: {
                            match: we(A),
                            order: 2,
                            parse: function() {
                                return {}
                            },
                            react: We
                        },
                        image: {
                            match: Se(de),
                            order: 2,
                            parse: function(e) {
                                return {
                                    alt: e[1],
                                    target: Ze(e[2]),
                                    title: e[3]
                                }
                            },
                            react: function(e, t, r) {
                                return n("img", {
                                    key: r.key,
                                    alt: e.alt || void 0,
                                    title: e.title || void 0,
                                    src: Ce(e.target)
                                })
                            }
                        },
                        link: {
                            match: xe(pe),
                            order: 4,
                            parse: function(e, t, n) {
                                return {
                                    content: Te(t, e[1], n),
                                    target: Ze(e[2]),
                                    title: e[3]
                                }
                            },
                            react: function(e, t, r) {
                                return n("a", {
                                    key: r.key,
                                    href: Ce(e.target),
                                    title: e.title
                                }, t(e.content, r))
                            }
                        },
                        linkAngleBraceStyleDetector: {
                            match: xe(q),
                            order: 1,
                            parse: function(e) {
                                return {
                                    content: [{
                                        content: e[1],
                                        type: "text"
                                    }],
                                    target: e[1],
                                    type: "link"
                                }
                            }
                        },
                        linkBareUrlDetector: {
                            match: xe(L),
                            order: 1,
                            parse: function(e) {
                                return {
                                    content: [{
                                        content: e[1],
                                        type: "text"
                                    }],
                                    target: e[1],
                                    title: void 0,
                                    type: "link"
                                }
                            }
                        },
                        linkMailtoDetector: {
                            match: xe(R),
                            order: 1,
                            parse: function(e) {
                                var t = e[1],
                                    n = e[1];
                                return p.test(n) || (n = "mailto:" + n), {
                                    content: [{
                                        content: t.replace("mailto:", ""),
                                        type: "text"
                                    }],
                                    target: n,
                                    type: "link"
                                }
                            }
                        },
                        list: {
                            match: function(e, t, n) {
                                var r = P.exec(n),
                                    o = t._list || !t.inline;
                                return r && o ? (e = r[1] + e, fe.exec(e)) : null
                            },
                            order: 2,
                            parse: function(e, t, n) {
                                var r = e[2],
                                    o = r.length > 1,
                                    a = o ? +r : void 0,
                                    i = e[0].replace(d, "\n").match(se),
                                    c = !1,
                                    u = i.map((function(e, r) {
                                        var o = le.exec(e)[0].length,
                                            a = new RegExp("^ {1," + o + "}", "gm"),
                                            u = e.replace(a, "").replace(le, ""),
                                            l = r === i.length - 1,
                                            s = -1 !== u.indexOf("\n\n") || l && c;
                                        c = s;
                                        var f, p = n.inline,
                                            d = n._list;
                                        n._list = !0, s ? (n.inline = !1, f = u.replace(E, "\n\n")) : (n.inline = !0, f = u.replace(E, ""));
                                        var m = t(f, n);
                                        return n.inline = p, n._list = d, m
                                    }));
                                return {
                                    items: u,
                                    ordered: o,
                                    start: a
                                }
                            },
                            react: function(e, t, r) {
                                return n(e.ordered ? "ol" : "ul", {
                                    key: r.key,
                                    start: e.start
                                }, e.items.map((function(e, o) {
                                    return n("li", {
                                        key: o
                                    }, t(e, r))
                                })))
                            }
                        },
                        newlineCoalescer: {
                            match: _e(x),
                            order: 4,
                            parse: Ae,
                            react: function() {
                                return "\n"
                            }
                        },
                        paragraph: {
                            match: _e(N),
                            order: 4,
                            parse: je,
                            react: function(e, t, r) {
                                return n("p", {
                                    key: r.key
                                }, t(e.content, r))
                            }
                        },
                        ref: {
                            match: xe(U),
                            order: 1,
                            parse: function(e) {
                                return V[e[1]] = {
                                    target: e[2],
                                    title: e[4]
                                }, {}
                            },
                            react: We
                        },
                        refImage: {
                            match: Se(B),
                            order: 1,
                            parse: function(e) {
                                return {
                                    alt: e[1] || void 0,
                                    ref: e[2]
                                }
                            },
                            react: function(e, t, r) {
                                return n("img", {
                                    key: r.key,
                                    alt: e.alt,
                                    src: Ce(V[e.ref].target),
                                    title: V[e.ref].title
                                })
                            }
                        },
                        refLink: {
                            match: xe(D),
                            order: 1,
                            parse: function(e, t, n) {
                                return {
                                    content: t(e[1], n),
                                    fallbackContent: t(e[0].replace(F, "\\$1"), n),
                                    ref: e[2]
                                }
                            },
                            react: function(e, t, r) {
                                return V[e.ref] ? n("a", {
                                    key: r.key,
                                    href: Ce(V[e.ref].target),
                                    title: V[e.ref].title
                                }, t(e.content, r)) : n("span", {
                                    key: r.key
                                }, t(e.fallbackContent, r))
                            }
                        },
                        table: {
                            match: _e(I),
                            order: 2,
                            parse: ve,
                            react: function(e, t, r) {
                                return n("table", {
                                    key: r.key
                                }, n("thead", null, n("tr", null, e.header.map((function(o, a) {
                                    return n("th", {
                                        key: a,
                                        style: ke(e, a)
                                    }, t(o, r))
                                })))), n("tbody", null, e.cells.map((function(o, a) {
                                    return n("tr", {
                                        key: a
                                    }, o.map((function(o, a) {
                                        return n("td", {
                                            key: a,
                                            style: ke(e, a)
                                        }, t(o, r))
                                    })))
                                }))))
                            }
                        },
                        tableSeparator: {
                            match: function(e, t) {
                                return t.inTable ? K.exec(e) : null
                            },
                            order: 2,
                            parse: function() {
                                return {
                                    type: "tableSeparator"
                                }
                            },
                            react: function() {
                                return " | "
                            }
                        },
                        text: {
                            match: we(ae),
                            order: 5,
                            parse: function(e) {
                                return {
                                    content: e[0].replace(j, (function(e, n) {
                                        return t.namedCodesToUnicode[n] ? t.namedCodesToUnicode[n] : e
                                    }))
                                }
                            },
                            react: function(e) {
                                return e.content
                            }
                        },
                        textBolded: {
                            match: Se(te),
                            order: 3,
                            parse: function(e, t, n) {
                                return {
                                    content: t(e[2], n)
                                }
                            },
                            react: function(e, t, r) {
                                return n("strong", {
                                    key: r.key
                                }, t(e.content, r))
                            }
                        },
                        textEmphasized: {
                            match: Se(ne),
                            order: 4,
                            parse: function(e, t, n) {
                                return {
                                    content: t(e[2], n)
                                }
                            },
                            react: function(e, t, r) {
                                return n("em", {
                                    key: r.key
                                }, t(e.content, r))
                            }
                        },
                        textEscaped: {
                            match: Se(oe),
                            order: 2,
                            parse: function(e) {
                                return {
                                    content: e[1],
                                    type: "text"
                                }
                            }
                        },
                        textStrikethroughed: {
                            match: Se(re),
                            order: 4,
                            parse: je,
                            react: function(e, t, r) {
                                return n("del", {
                                    key: r.key
                                }, t(e.content, r))
                            }
                        }
                    };
                !0 !== t.disableParsingRawHTML && (Q.htmlBlock = {
                    match: we($),
                    order: 2,
                    parse: function(e, t, n) {
                        var r = e[3].match(ce)[1],
                            o = new RegExp("^" + r, "gm"),
                            a = e[3].replace(o, ""),
                            i = function(e) {
                                return me.some((function(t) {
                                    return t.test(e)
                                }))
                            }(a) ? $e : Oe,
                            u = e[1].toLowerCase(),
                            l = -1 !== s.indexOf(u);
                        return {
                            attrs: c(e[2]),
                            content: l ? e[3] : i(t, a, n),
                            noInnerParse: l,
                            tag: l ? u : e[1]
                        }
                    },
                    react: function(e, t, r) {
                        return n(e.tag, i({
                            key: r.key
                        }, e.attrs), e.noInnerParse ? e.content : t(e.content, r))
                    }
                }, Q.htmlSelfClosing = {
                    match: we(z),
                    order: 2,
                    parse: function(e) {
                        return {
                            attrs: c(e[2] || ""),
                            tag: e[1]
                        }
                    },
                    react: function(e, t, r) {
                        return n(e.tag, i({}, e.attrs, {
                            key: r.key
                        }))
                    }
                });
                var J = be(Q),
                    X = function(e) {
                        return function t(n, r) {
                            if (r = r || {}, Array.isArray(n)) {
                                for (var o = r.key, a = [], i = !1, c = 0; c < n.length; c++) {
                                    r.key = c;
                                    var u = t(n[c], r),
                                        l = "string" == typeof u;
                                    l && i ? a[a.length - 1] += u : a.push(u), i = l
                                }
                                return r.key = o, a
                            }
                            return e(n, t, r)
                        }
                    }(function(e) {
                        return function(t, n, r) {
                            return e[t.type].react(t, n, r)
                        }
                    }(Q)),
                    Y = o(function(e) {
                        return e.replace(/<!--[\s\S]*?(?:-->)/g, "")
                    }(e));
                return C.length && Y.props.children.push(n("footer", {
                    key: "footer"
                }, C.map((function(e) {
                    return n("div", {
                        id: t.slugify(e.identifier),
                        key: e.identifier
                    }, e.identifier, X(J(e.footnote, {
                        inline: !0
                    })))
                })))), Y
            }

            function qe(e) {
                var t = e.children,
                    n = e.options,
                    o = function(e, t) {
                        var n = {};
                        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }(e, ["children", "options"]);
                return r.cloneElement(Re(t, n), o)
            }
        },
        75809: function(e) {
            var t = /[\'\"]/;
            e.exports = function(e) {
                return e ? (t.test(e.charAt(0)) && (e = e.substr(1)), t.test(e.charAt(e.length - 1)) && (e = e.substr(0, e.length - 1)), e) : ""
            }
        },
        6088: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                if ((0, r.default)(e), !e || /[\s<>]/.test(e)) return !1;
                if (0 === e.indexOf("mailto:")) return !1;
                if ((t = (0, i.default)(t, l)).validate_length && e.length >= 2083) return !1;
                if (!t.allow_fragments && e.includes("#")) return !1;
                if (!t.allow_query_components && (e.includes("?") || e.includes("&"))) return !1;
                var n, c, p, d, m, h, g, y;
                if (g = e.split("#"), e = g.shift(), g = e.split("?"), e = g.shift(), (g = e.split("://")).length > 1) {
                    if (n = g.shift().toLowerCase(), t.require_valid_protocol && -1 === t.protocols.indexOf(n)) return !1
                } else {
                    if (t.require_protocol) return !1;
                    if ("//" === e.substr(0, 2)) {
                        if (!t.allow_protocol_relative_urls) return !1;
                        g[0] = e.substr(2)
                    }
                }
                if ("" === (e = g.join("://"))) return !1;
                if (g = e.split("/"), "" === (e = g.shift()) && !t.require_host) return !0;
                if ((g = e.split("@")).length > 1) {
                    if (t.disallow_auth) return !1;
                    if ("" === g[0]) return !1;
                    if ((c = g.shift()).indexOf(":") >= 0 && c.split(":").length > 2) return !1;
                    var v = c.split(":"),
                        k = (_ = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(S = v) || function(e, t) {
                            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = [],
                                    r = !0,
                                    o = !1,
                                    a = void 0;
                                try {
                                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                                } catch (u) {
                                    o = !0, a = u
                                } finally {
                                    try {
                                        r || null == c.return || c.return()
                                    } finally {
                                        if (o) throw a
                                    }
                                }
                                return n
                            }
                        }(S, _) || function(e, t) {
                            if (e) {
                                if ("string" === typeof e) return u(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0
                            }
                        }(S, _) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        b = k[0],
                        x = k[1];
                    if ("" === b && "" === x) return !1
                }
                var S, _;
                d = g.join("@"), h = null, y = null;
                var w = d.match(s);
                w ? (p = "", y = w[1], h = w[2] || null) : (p = (g = d.split(":")).shift(), g.length && (h = g.join(":")));
                if (null !== h && h.length > 0) {
                    if (m = parseInt(h, 10), !/^[0-9]+$/.test(h) || m <= 0 || m > 65535) return !1
                } else if (t.require_port) return !1;
                if (t.host_whitelist) return f(p, t.host_whitelist);
                if (!(0, a.default)(p) && !(0, o.default)(p, t) && (!y || !(0, a.default)(y, 6))) return !1;
                if (p = p || y, t.host_blacklist && f(p, t.host_blacklist)) return !1;
                return !0
            };
            var r = c(n(51292)),
                o = c(n(10464)),
                a = c(n(90672)),
                i = c(n(79086));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var l = {
                    protocols: ["http", "https", "ftp"],
                    require_tld: !0,
                    require_protocol: !1,
                    require_host: !0,
                    require_port: !1,
                    require_valid_protocol: !0,
                    allow_underscores: !1,
                    allow_trailing_dot: !1,
                    allow_protocol_relative_urls: !1,
                    allow_fragments: !0,
                    allow_query_components: !0,
                    validate_length: !0
                },
                s = /^\[([^\]]+)\](?::([0-9]+))?$/;

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (e === r || (o = r, "[object RegExp]" === Object.prototype.toString.call(o) && r.test(e))) return !0
                }
                var o;
                return !1
            }
            e.exports = t.default, e.exports.default = t.default
        }
    }
]);
//# sourceMappingURL=5179.9e328b18.chunk.js.map