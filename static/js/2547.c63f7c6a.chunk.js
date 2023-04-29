"use strict";
(self.webpackChunkbeacons_sup = self.webpackChunkbeacons_sup || []).push([
    [2547], {
        77864: function(e, t, n) {
            var a = n(2757),
                i = [a.Z.TIKTOK, a.Z.INSTAGRAM];
            t.Z = i
        },
        79858: function(e, t, n) {
            n.d(t, {
                LB: function() {
                    return h
                },
                V9: function() {
                    return v
                },
                YP: function() {
                    return p
                },
                kw: function() {
                    return g
                }
            });
            var a, i = n(4942),
                r = n(94265),
                c = "".concat(r.BF, "/mk-setup-intro-screen-1.png"),
                o = "".concat(r.BF, "/mk-setup-intro-screen-2.png"),
                s = "".concat(r.BF, "/mk-setup-intro-screen-3.png"),
                l = "".concat(r.BF, "/mk-setup-phyllo-setup.png"),
                d = "".concat(r.BF, "/mk-setup-next-steps-1.png"),
                u = "".concat(r.BF, "/mk-setup-next-steps-2.png"),
                m = "".concat(r.BF, "/mk-setup-next-steps-3.png"),
                p = {
                    INTRO_STARTED: "Media Kit Wizard Started",
                    AUTO_SETUP_COMPLETED: "Media Kit Wizard Auto Setup Completed",
                    BRAND_PARTNERSHIPS_BLOCK_FIRST_BRAND: "Media Kit Wizard Brand Partnerships First Brand Completed",
                    PLATFORM_SELECTED: "Media Kit Wizard Platform Selected",
                    CONNECTION_METHOD_SELECTED: "Media Kit Wizard Connection Method Selected",
                    SCRAPE_STARTED: "Media Kit Scrape Started",
                    WARM_STARTUP_FAILED: "Media Kit Warm Startup Failed",
                    PARALLEL_SCRAPE_COMPLETED: "Media Kit Wizard Parallel Scrape Completed"
                },
                g = {
                    PHYLLO: "phyllo",
                    SCRAPE: "scrape"
                },
                h = {
                    INTRO: "intro",
                    PHYLLO_CONNECTION: "phyllo-connection",
                    SETUP_COMPLETE: "setup-complete"
                },
                v = (a = {}, (0, i.Z)(a, h.INTRO, {
                    title: "Setting up your Media Kit",
                    description: "Automatically building your customized media kit.",
                    imageSrcList: [c, o, s]
                }), (0, i.Z)(a, h.PHYLLO_CONNECTION, {
                    title: "Connect your analytics",
                    description: "Authenticate your socials to show detailed live statistics.",
                    imageSrc: l
                }), (0, i.Z)(a, h.SETUP_COMPLETE, {
                    title: "Setup Complete!",
                    description: "Your Media Kit is live:",
                    imageSrcList: [d, u, m]
                }), a)
        },
        35460: function(e, t, n) {
            var a = n(4942),
                i = n(1413),
                r = n(45987),
                c = (n(72791), n(67394)),
                o = n(29823),
                s = n(73542),
                l = n(13400),
                d = n(28182),
                u = (n(82690), n(16396)),
                m = n(63271),
                p = n(80184),
                g = ["open", "onBackClick", "onClose", "dialogStyle", "dialogClassName", "children", "className", "hideX", "intent", "largeMaxWidth", "title", "subtitle", "primaryButton", "primaryButtonComponent", "secondaryButton", "lowerContentComponent"],
                h = "primary",
                v = "primaryInverted";
            t.Z = function(e) {
                var t, n = e.open,
                    f = e.onBackClick,
                    x = e.onClose,
                    C = e.dialogStyle,
                    w = void 0 === C ? {} : C,
                    N = e.dialogClassName,
                    M = void 0 === N ? "" : N,
                    y = e.children,
                    j = e.className,
                    Z = void 0 === j ? "" : j,
                    R = e.hideX,
                    E = void 0 !== R && R,
                    T = e.intent,
                    b = void 0 === T ? h : T,
                    S = e.largeMaxWidth,
                    k = void 0 !== S && S,
                    P = e.title,
                    A = void 0 === P ? "" : P,
                    B = e.subtitle,
                    _ = void 0 === B ? "" : B,
                    L = e.primaryButton,
                    I = void 0 === L ? void 0 : L,
                    O = e.primaryButtonComponent,
                    F = void 0 === O ? void 0 : O,
                    D = e.secondaryButton,
                    K = void 0 === D ? void 0 : D,
                    W = e.lowerContentComponent,
                    Y = void 0 === W ? void 0 : W,
                    z = (0, r.Z)(e, g),
                    H = !!I || !!F || !!K;
                return (0, p.jsx)(s.Z, (0, i.Z)((0, i.Z)({
                    className: "Account ".concat(Z),
                    open: n,
                    onClose: x
                }, z), {}, {
                    children: (0, p.jsxs)("div", {
                        style: (0, i.Z)({}, w),
                        className: (0, d.Z)("p-4", (t = {
                            "bg-black text-white": b === v
                        }, (0, a.Z)(t, M, !!M), (0, a.Z)(t, "max-w-[600px]", k), (0, a.Z)(t, "max-w-[380px]", !k), t)),
                        children: [(0, p.jsxs)("div", {
                            className: "flex justify-between items-start mb-4 box-border",
                            children: [(0, p.jsxs)("div", {
                                className: "flex items-start gap-2",
                                children: [!!f && (0, p.jsx)(l.Z, {
                                    size: "small",
                                    edge: "end",
                                    onClick: f,
                                    "aria-label": "dialog back button",
                                    className: "p-0 mt-[1px]",
                                    children: (0, p.jsx)(c.Z, {
                                        className: "text-gray-600"
                                    })
                                }), (0, p.jsx)("div", {
                                    children: !!A && (0, p.jsx)("div", {
                                        className: "title mr-1",
                                        children: A
                                    })
                                })]
                            }), !E && (0, p.jsx)(l.Z, {
                                size: "small",
                                edge: "end",
                                onClick: x,
                                "aria-label": "close dialog",
                                className: "p-0 mt-[1px]",
                                children: (0, p.jsx)(o.Z, {
                                    style: {
                                        fill: b === v && "var(--beacons-brand-white)"
                                    }
                                })
                            })]
                        }), !!A && (!!_ || !!y) && (0, p.jsx)(m.Z, {
                            fullWidth: !1,
                            className: "my-4"
                        }), !!_ && (0, p.jsx)("div", {
                            className: "mt-4",
                            children: _
                        }), !!y && (0, p.jsx)("div", {
                            className: "mt-4",
                            children: y
                        }), H && (0, p.jsxs)("div", {
                            className: "flex items-center justify-center gap-3 mt-4",
                            children: [!!K && (0, p.jsx)("div", {
                                className: "flex-1",
                                children: (0, p.jsx)(u.Z, (0, i.Z)({
                                    variant: "outlined",
                                    fullWidth: !0
                                }, K))
                            }), (0, p.jsxs)("div", {
                                className: "flex-1",
                                children: [!F && !!I && (0, p.jsx)(u.Z, (0, i.Z)({
                                    fullWidth: !0
                                }, I)), !!F && F]
                            })]
                        }), !!Y && (0, p.jsx)("div", {
                            className: "mt-4",
                            children: Y
                        })]
                    })
                }))
            }
        },
        46996: function(e, t, n) {
            n.d(t, {
                f: function() {
                    return d
                }
            });
            var a = n(1413),
                i = n(45987),
                r = n(72791),
                c = n(89891),
                o = n(72455),
                s = n(80184),
                l = ["forwardedRef", "classes", "intent"],
                d = {
                    PRIMARY: "primary",
                    PRIMARY_INVERTED: "primaryInverted"
                },
                u = (0, o.Z)((function(e) {
                    var t = function(t) {
                        return t.intent === d.PRIMARY_INVERTED ? "".concat(e.palette.common.black, " !important") : "".concat(e.palette.common.white, " !important")
                    };
                    return {
                        root: {
                            width: 28,
                            height: 16,
                            padding: 0,
                            display: "flex"
                        },
                        switchBase: {
                            color: t,
                            padding: 2,
                            "&$checked": {
                                transform: "translateX(12px)",
                                "& + $track": {
                                    opacity: 1
                                }
                            }
                        },
                        checked: {
                            color: t
                        },
                        thumb: {
                            width: 12,
                            height: 12,
                            boxShadow: "none"
                        },
                        track: {
                            backgroundColor: function(t) {
                                return t.intent === d.PRIMARY_INVERTED ? "".concat(e.palette.common.white, " !important") : "".concat(e.palette.common.black, " !important")
                            },
                            borderRadius: 1e4
                        }
                    }
                }));

            function m(e) {
                var t = e.forwardedRef,
                    n = e.classes,
                    r = e.intent,
                    o = void 0 === r ? d.PRIMARY : r,
                    m = (0, i.Z)(e, l),
                    p = u({
                        intent: o
                    });
                return (0, s.jsx)(c.Z, (0, a.Z)({
                    classes: (0, a.Z)((0, a.Z)({}, p), n),
                    ref: t
                }, m))
            }
            t.Z = (0, r.forwardRef)((function(e, t) {
                return (0, s.jsx)(m, (0, a.Z)((0, a.Z)({}, e), {}, {
                    forwardedRef: t
                }))
            }))
        },
        77832: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            n(72791);
            var a = n(28182),
                i = n(94265),
                r = n(80184),
                c = [{
                    name: "visa",
                    src: "".concat(i.ju, "/visa.png"),
                    width: 12,
                    useMargin: !1
                }, {
                    name: "mastercard",
                    src: "".concat(i.ju, "/mastercard.png"),
                    width: 12,
                    useMargin: !1
                }, {
                    name: "american express",
                    src: "".concat(i.ju, "/amex.png"),
                    width: 12,
                    useMargin: !1
                }, {
                    name: "discover",
                    src: "".concat(i.ju, "/discover.webp"),
                    width: 12,
                    useMargin: !0
                }, {
                    name: "union",
                    src: "".concat(i.ju, "/unionpay.png"),
                    width: 8,
                    useMargin: !0
                }, {
                    name: "jcb",
                    src: "".concat(i.ju, "/jcb.webp"),
                    width: 8,
                    useMargin: !0
                }],
                o = [{
                    name: "mastercard",
                    src: "".concat(i.ju, "/mastercard.png"),
                    width: 12,
                    useMargin: !1
                }, {
                    name: "visa",
                    src: "".concat(i.ju, "/visa.png"),
                    width: 12,
                    useMargin: !1
                }, {
                    name: "american express",
                    src: "".concat(i.ju, "/amex.png"),
                    width: 12,
                    useMargin: !1
                }, {
                    name: "apple pay",
                    src: "".concat(i.BF, "/apple-pay.svg"),
                    width: 8,
                    useMargin: !0
                }, {
                    name: "google pay",
                    src: "".concat(i.BF, "/google-pay.svg"),
                    width: 12,
                    useMargin: !0
                }, {
                    name: "ach",
                    src: "".concat(i.BF, "/ach.svg"),
                    width: 8,
                    useMargin: !0
                }];

            function s(e) {
                var t = e.centered,
                    n = void 0 !== t && t,
                    i = e.labelPrefix,
                    s = e.oldLogos,
                    l = void 0 !== s && s ? c : o;
                return (0, r.jsx)("div", {
                    "aria-label": "".concat(i, " stripe credit card logos"),
                    className: (0, a.Z)("flex flex-wrap items-center", {
                        "justify-center": n
                    }),
                    children: l.map((function(e) {
                        var t = e.name,
                            n = e.src,
                            a = e.width,
                            i = e.useMargin;
                        return (0, r.jsx)("img", {
                            className: "w-".concat(a, " ").concat(!!i && "ml-2"),
                            alt: "".concat(t, " logo"),
                            src: n
                        }, t)
                    }))
                })
            }
        },
        33126: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return a
                }
            });

            function a() {
                var e, t, n = null === (e = window) || void 0 === e || null === (t = e.navigator) || void 0 === t ? void 0 : t.language;
                if (!n) return {
                    language: null,
                    countryCode: null
                };
                if (n.length < 4) return {
                    language: null,
                    countryCode: null
                };
                var a = n.split("-").map((function(e) {
                    return e.toLowerCase()
                }));
                return {
                    language: a[0],
                    countryCode: a[a.length - 1]
                }
            }
        }
    }
]);
//# sourceMappingURL=2547.c63f7c6a.chunk.js.map