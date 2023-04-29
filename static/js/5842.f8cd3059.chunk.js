"use strict";
(self.webpackChunkbeacons_sup = self.webpackChunkbeacons_sup || []).push([
    [5842], {
        90105: function(e, t, n) {
            n(72791);
            var r = n(95857),
                o = n(20068),
                i = n(46996),
                a = n(80184);
            t.Z = function(e) {
                var t = e.state,
                    n = e.text,
                    l = e.onChange,
                    s = e.toolTip,
                    c = e.nowrap,
                    u = void 0 === c || c,
                    d = e.switchDataTestId;
                return (0, a.jsxs)("div", {
                    className: "FlexCenter JustifySpaceBetween",
                    children: [(0, a.jsxs)("div", {
                        className: "FlexCenter",
                        style: {
                            whiteSpace: u ? "nowrap" : "normal"
                        },
                        children: [n, !!s && (0, a.jsx)(o.Z, {
                            title: s,
                            arrow: !0,
                            children: (0, a.jsx)(r.Z, {
                                style: {
                                    marginLeft: 4,
                                    fontSize: 14
                                }
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        "aria-label": "text and toggle switch - ".concat(n),
                        children: (0, a.jsx)(i.Z, {
                            color: "primary",
                            checked: t,
                            onChange: l,
                            "data-testid": d
                        })
                    })]
                })
            }
        },
        87771: function(e, t) {
            t.Z = {
                COLLAPSIBLE: "collapsible",
                EXPOSED: "exposed"
            }
        },
        54361: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return d
                }
            });
            var r = n(1413),
                o = n(45987),
                i = (n(72791), n(91614)),
                a = n(90550),
                l = n(89797),
                s = n(80184);

            function c(e) {
                var t = e.minWidth,
                    n = void 0 === t ? "980px" : t,
                    r = (0, l.Z)();
                return (0, s.jsx)("div", {
                    children: r ? (0, s.jsx)("div", {
                        className: "BackgroundImage Mobile",
                        children: (0, s.jsx)("img", {
                            src: "/images/background_mobile.png",
                            alt: "background_mobile"
                        })
                    }) : (0, s.jsxs)("div", {
                        style: {
                            minWidth: n
                        },
                        children: [(0, s.jsx)("div", {
                            className: "BackgroundImage Left",
                            children: (0, s.jsx)("img", {
                                src: "/images/background_left.png",
                                alt: "background_left"
                            })
                        }), (0, s.jsx)("div", {
                            className: "BackgroundImage Right",
                            children: (0, s.jsx)("img", {
                                src: "/images/background_right.png",
                                alt: "background_right"
                            })
                        })]
                    })
                })
            }
            var u = ["children", "minWidth", "showCircles", "mobileContainerStyle", "containerStyle"];

            function d(e) {
                var t = e.children,
                    n = e.minWidth,
                    d = void 0 === n ? "1130px" : n,
                    p = e.showCircles,
                    m = void 0 === p || p,
                    f = e.mobileContainerStyle,
                    h = void 0 === f ? {} : f,
                    b = e.containerStyle,
                    x = (0, o.Z)(e, u),
                    g = (0, l.Z)();
                return (0, s.jsxs)("div", (0, r.Z)((0, r.Z)({
                    className: "Home"
                }, x), {}, {
                    children: [(0, s.jsx)(a.Z, {
                        fonts: [{
                            font: "Poppins",
                            weights: [400, 600, 700]
                        }]
                    }), m && (0, s.jsx)(c, {
                        minWidth: d
                    }), (0, s.jsx)(i.Z, {
                        maxWidth: "lg",
                        style: g ? (0, r.Z)((0, r.Z)({}, b), h) : (0, r.Z)({
                            paddingLeft: 80,
                            paddingRight: 80,
                            minWidth: d
                        }, b),
                        children: t
                    })]
                }))
            }
        },
        97809: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return C
                }
            });
            var r = n(1413),
                o = n(74165),
                i = n(15861),
                a = n(29439),
                l = n(72791),
                s = n(65764),
                c = n(53473),
                u = n(86101),
                d = n(64517),
                p = n(45987),
                m = n(13967),
                f = n(80184),
                h = ["component", "options"],
                b = ["InputLabelProps", "InputProps", "inputProps", "helperText"],
                x = (0, l.forwardRef)((function(e, t) {
                    var n = e.component,
                        o = e.options,
                        i = (0, p.Z)(e, h),
                        s = (0, m.Z)(),
                        c = (0, l.useState)(null),
                        u = (0, a.Z)(c, 2),
                        d = u[0],
                        b = u[1];
                    return (0, l.useImperativeHandle)(t, (function() {
                        return {
                            focus: function() {
                                null !== d && d.focus()
                            }
                        }
                    }), [d]), (0, f.jsx)(n, (0, r.Z)({
                        onReady: b,
                        options: (0, r.Z)((0, r.Z)({}, o), {}, {
                            iconStyle: "solid",
                            style: {
                                base: {
                                    iconColor: "#c4f0ff",
                                    color: "#424770",
                                    fontSize: "16px",
                                    fontFamily: s.typography.fontFamily,
                                    "::placeholder": {
                                        color: "#aab7c4"
                                    }
                                },
                                invalid: {
                                    iconColor: s.palette.error.main,
                                    color: s.palette.error.main
                                }
                            }
                        })
                    }, i))
                }));

            function g(e) {
                var t = e.InputLabelProps,
                    n = e.InputProps,
                    o = void 0 === n ? {} : n,
                    i = e.inputProps,
                    a = e.helperText,
                    l = (0, p.Z)(e, b);
                return (0, f.jsx)(d.Z, (0, r.Z)({
                    fullWidth: !0,
                    InputLabelProps: (0, r.Z)((0, r.Z)({}, t), {}, {
                        shrink: !0
                    }),
                    InputProps: (0, r.Z)((0, r.Z)({}, o), {}, {
                        inputProps: (0, r.Z)((0, r.Z)((0, r.Z)({}, i), o.inputProps), {}, {
                            component: s.CardElement
                        }),
                        inputComponent: x
                    }),
                    helperText: a,
                    error: !!a
                }, l))
            }
            var v = n(66015),
                y = n(85389),
                k = n(55454),
                _ = n(93154),
                Z = "create_request_stripe";

            function j(e) {
                var t = e.order,
                    n = e.setSuccessfullyPaid,
                    c = e.allowPay,
                    p = e.beaconsOrigin,
                    m = e.paymentSuccessEndpoint,
                    h = e.retrievePaymentIntent,
                    b = e.setSuccessfulPaymentCallback,
                    x = e.uploadProgress,
                    _ = e.dynamicHidePayment,
                    j = e.isPreview,
                    C = (0, l.useContext)(v.Z),
                    w = C.paymentProperties,
                    S = C.socialReferrer,
                    I = (0, s.useStripe)(),
                    P = (0, s.useElements)(),
                    T = (0, l.useState)(""),
                    N = (0, a.Z)(T, 2),
                    L = N[0],
                    E = N[1],
                    R = (0, l.useState)(""),
                    O = (0, a.Z)(R, 2),
                    B = O[0],
                    M = O[1],
                    A = (0, l.useState)(""),
                    U = (0, a.Z)(A, 2),
                    F = U[0],
                    W = U[1],
                    D = (0, l.useState)(""),
                    z = (0, a.Z)(D, 2),
                    q = z[0],
                    H = z[1],
                    $ = (0, l.useState)(!1),
                    V = (0, a.Z)($, 2),
                    G = V[0],
                    K = V[1],
                    Y = (0, l.useState)(null),
                    X = (0, a.Z)(Y, 2),
                    J = X[0],
                    Q = X[1],
                    ee = c && (!!L && !!B || 0 === t.bid || 0 === t.discounted_bid),
                    te = null === w || void 0 === w ? void 0 : w.stripe_account;
                (0, l.useEffect)((function() {
                    if (t && m && I && !j) {
                        var e = function() {
                            var e = (0, i.Z)((0, o.Z)().mark((function e() {
                                var t;
                                return (0, o.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = I.paymentRequest({
                                                country: "US",
                                                currency: "usd",
                                                total: {
                                                    label: "Beacons",
                                                    amount: 100
                                                },
                                                requestPayerName: !0,
                                                requestPayerEmail: !0,
                                                requestPayerPhone: !0
                                            }), e.next = 3, t.canMakePayment();
                                        case 3:
                                            e.sent && Q(t);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }
                }), [I]);
                var ne = function() {
                        var e = (0, i.Z)((0, o.Z)().mark((function e(i) {
                            var a;
                            return (0, o.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, (0, u.Z)("manage_order", (0, r.Z)({
                                            action: m,
                                            timestamp: (new Date).getTime(),
                                            charge: i,
                                            origin_platform: S,
                                            stripe_account: te,
                                            beacons_origin: p
                                        }, t));
                                    case 3:
                                        (a = e.sent).data.error_message ? (n(!1), H("Payment was not successful.")) : (n(!0), void 0 !== b && b(a.data)), e.next = 11;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), n(!1), H("Payment unsuccessful.");
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    re = function() {
                        var e = (0, i.Z)((0, o.Z)().mark((function e(n) {
                            var r, i, a, l, c;
                            return (0, o.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return K(!0), n.preventDefault(), e.next = 4, h(n);
                                    case 4:
                                        if (r = e.sent) {
                                            e.next = 9;
                                            break
                                        }
                                        return W("This user has not set up their payment information. We have notified them to set it up."), K(!1), e.abrupt("return");
                                    case 9:
                                        if ("deny" !== r) {
                                            e.next = 13;
                                            break
                                        }
                                        return W("There was an error with the payment. Ask the page owner to contact us for help."), K(!1), e.abrupt("return");
                                    case 13:
                                        if (!(t.bid > 0 && 0 !== t.discounted_bid)) {
                                            e.next = 20;
                                            break
                                        }
                                        return a = P.getElement(s.CardElement), e.next = 17, I.confirmCardPayment(r, {
                                            payment_method: {
                                                card: a,
                                                billing_details: {
                                                    name: L,
                                                    phone: B,
                                                    email: t.email
                                                }
                                            }
                                        });
                                    case 17:
                                        i = e.sent, e.next = 21;
                                        break;
                                    case 20:
                                        i = {
                                            paymentIntent: {
                                                amount: 0,
                                                status: "succeeded",
                                                id: null
                                            }
                                        };
                                    case 21:
                                        if (!i.error) {
                                            e.next = 26;
                                            break
                                        }(0, u.Z)("manage_order", {
                                            action: "track_order_status",
                                            firebase_uid: t.firebase_uid,
                                            beacons_username: t.creator_username,
                                            oid: Math.floor(1e13 * Math.random())
                                        }), W("Payment not successful."), e.next = 31;
                                        break;
                                    case 26:
                                        if (l = "succeeded" === i.paymentIntent.status, c = "requires_capture" === i.paymentIntent.status && m === Z, !l && !c) {
                                            e.next = 31;
                                            break
                                        }
                                        return e.next = 31, ne(i.paymentIntent);
                                    case 31:
                                        K(!1);
                                    case 32:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, f.jsxs)("form", {
                    onSubmit: function(e) {
                        return re(e)
                    },
                    children: [(0, f.jsxs)("div", {
                        style: {
                            display: 0 !== t.bid && 0 !== t.discounted_bid || !_ ? "initial" : "none"
                        },
                        children: [(0, f.jsx)("div", {
                            style: {
                                marginTop: "15px"
                            },
                            children: !!J && (0, f.jsxs)("div", {
                                children: [(0, f.jsx)(s.PaymentRequestButtonElement, {
                                    options: {
                                        style: {
                                            paymentRequestButton: {
                                                type: "default",
                                                theme: "dark",
                                                height: "40px"
                                            }
                                        },
                                        paymentRequest: J
                                    },
                                    className: "PaymentRequestButton",
                                    onClick: function() {
                                        J.update({
                                            total: {
                                                label: m,
                                                amount: t.bid
                                            }
                                        }), J.on("paymentmethod", function() {
                                            var e = (0, i.Z)((0, o.Z)().mark((function e(t) {
                                                var n, r, i, a;
                                                return (0, o.Z)().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (c) {
                                                                e.next = 4;
                                                                break
                                                            }
                                                            return t.complete("fail"), W("Please fill all required fields."), e.abrupt("return");
                                                        case 4:
                                                            return e.next = 6, h(t);
                                                        case 6:
                                                            return n = e.sent, e.next = 9, I.confirmCardPayment(n, {
                                                                payment_method: t.paymentMethod.id
                                                            }, {
                                                                handleActions: !1
                                                            });
                                                        case 9:
                                                            (r = e.sent).error ? (t.complete("fail"), H("Payment unsuccessful."), W("Payment did not succeed.")) : (t.complete("success"), i = "succeeded" === r.paymentIntent.status, a = "requires_capture" === r.paymentIntent.status && m === Z, (i || a) && ne(r.paymentIntent)), K(!1);
                                                        case 12:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }())
                                    }
                                }), (0, f.jsx)("div", {
                                    className: "mt-4 text-center text-14 font-semibold",
                                    children: "or pay with card"
                                })]
                            })
                        }), (0, f.jsx)("div", {
                            className: "mt-4",
                            children: (0, f.jsx)(d.Z, {
                                label: "Name on card",
                                id: "Name on card",
                                value: L,
                                onChange: function(e) {
                                    return E(e.target.value)
                                },
                                placeholder: "Full Name",
                                autoComplete: "name",
                                InputProps: {
                                    startAdornment: " "
                                },
                                fullWidth: !0
                            })
                        }), (0, f.jsx)("div", {
                            className: "mt-3",
                            children: (0, f.jsx)(d.Z, {
                                value: B,
                                label: "Cardholder phone",
                                id: "Cardholder phone",
                                onChange: function(e) {
                                    return M(e.target.value)
                                },
                                placeholder: "941-555-0123",
                                type: "tel",
                                autoComplete: "tel",
                                InputProps: {
                                    startAdornment: " "
                                },
                                fullWidth: !0
                            })
                        }), (0, f.jsx)("div", {
                            className: "mt-3",
                            children: (0, f.jsx)(g, {
                                onChange: function(e) {
                                    var t;
                                    null !== e && void 0 !== e && null !== (t = e.error) && void 0 !== t && t.message ? W(e.error.message) : W("")
                                },
                                label: "Credit Card",
                                helperText: F
                            })
                        })]
                    }), (0, f.jsx)("div", {
                        className: "mt-3",
                        children: (0, f.jsx)(k.Z, {
                            order: t,
                            payErrorMessage: q,
                            paymentMethod: y.Z.CARD,
                            buttonDisabled: !!F || !ee,
                            sendingPayment: G,
                            uploadProgress: x
                        })
                    })]
                })
            }
            var C = function(e) {
                var t = e.order,
                    n = e.setSuccessfullyPaid,
                    r = e.allowPay,
                    o = void 0 === r || r,
                    i = e.retrievePaymentIntent,
                    a = e.beaconsOrigin,
                    u = void 0 === a ? _.Z.LINK_IN_BIO : a,
                    d = e.paymentSuccessEndpoint,
                    p = void 0 === d ? "pay_for_order" : d,
                    m = e.setSuccessfulPaymentCallback,
                    h = void 0 === m ? void 0 : m,
                    b = e.uploadProgress,
                    x = void 0 === b ? void 0 : b,
                    g = e.dynamicHidePayment,
                    y = void 0 !== g && g,
                    k = e.isPreview,
                    Z = void 0 !== k && k,
                    C = (0, l.useContext)(v.Z).paymentProperties,
                    w = !(null === C || void 0 === C || !C.stripe),
                    S = null === C || void 0 === C ? void 0 : C.stripe_account,
                    I = (0, l.useMemo)((function() {
                        return S ? (0, c.J)("pk_live_KK0oDptvu4DEJVZB0cAyVFTc00IIHAc1Y4", {
                            stripeAccount: S
                        }) : (0, c.J)("pk_live_KK0oDptvu4DEJVZB0cAyVFTc00IIHAc1Y4")
                    }), [S]);
                return !w && t.bid > 0 ? (0, f.jsx)("div", {
                    style: {
                        textAlign: "center",
                        color: "#999999",
                        fontSize: 12,
                        marginTop: 8
                    },
                    children: "Credit card, Apple Pay, Google Pay not available."
                }) : (0, f.jsx)(s.Elements, {
                    stripe: I,
                    children: (0, f.jsx)(j, {
                        order: t,
                        setSuccessfullyPaid: n,
                        allowPay: o,
                        beaconsOrigin: u,
                        paymentSuccessEndpoint: p,
                        retrievePaymentIntent: i,
                        setSuccessfulPaymentCallback: h,
                        uploadProgress: x,
                        dynamicHidePayment: y,
                        isPreview: Z
                    })
                })
            }
        },
        39257: function(e, t, n) {
            var r = n(1413),
                o = n(29439),
                i = n(45987),
                a = n(72791),
                l = n(24518),
                s = n(4690),
                c = n(43306),
                u = n(84579),
                d = n(80184),
                p = ["style", "children", "onMouseEnter", "onMouseLeave", "disabled", "allowOpacity", "invert"];
            t.Z = function(e) {
                var t = e.style,
                    n = e.children,
                    m = e.onMouseEnter,
                    f = e.onMouseLeave,
                    h = e.disabled,
                    b = e.allowOpacity,
                    x = void 0 !== b && b,
                    g = e.invert,
                    v = void 0 !== g && g,
                    y = (0, i.Z)(e, p),
                    k = (0, a.useState)(!1),
                    _ = (0, o.Z)(k, 2),
                    Z = _[0],
                    j = _[1],
                    C = (0, a.useContext)(u.Z);
                C = (0, c.Ee)(s.wb, C);
                var w, S = x ? C.components.opacity : "";
                w = "00" !== S ? C.button.hover_background_color + S : "".concat(C.button.hover_background_color, "BB");
                var I = C.text.hover_color,
                    P = C.button.background_color + S,
                    T = C.text.color,
                    N = C.text.font_family;
                if (v) {
                    var L = I,
                        E = P;
                    I = T, T = L, P = w, w = E
                }
                var R = {
                        borderRadius: (0, c.wK)(C),
                        backgroundColor: P,
                        color: T,
                        fontFamily: N,
                        textTransform: "none",
                        opacity: h && .5,
                        boxShadow: Z ? "0px 2px 10px rgba(0, 0, 0, 0.25)" : "none",
                        transform: Z && "scale(1.02)"
                    },
                    O = (0, r.Z)((0, r.Z)({}, R), t);
                return (0, d.jsx)(l.Z, (0, r.Z)((0, r.Z)({
                    style: O,
                    onMouseEnter: function() {
                        j(!0), m && m()
                    },
                    onMouseLeave: function() {
                        j(!1), f && f()
                    },
                    disabled: h
                }, y), {}, {
                    children: n
                }))
            }
        },
        91786: function(e, t, n) {
            var r = n(1413),
                o = n(45987),
                i = n(72791),
                a = n(27391),
                l = n(4690),
                s = n(43306),
                c = n(84579),
                u = n(80184),
                d = ["style", "InputProps"];
            t.Z = function(e) {
                var t = e.style,
                    n = e.InputProps,
                    p = (0, o.Z)(e, d),
                    m = (0, i.useContext)(c.Z),
                    f = (m = (0, s.Ee)(l.wb, m)).components.opacity,
                    h = m.card.background_color + f,
                    b = m.text.color,
                    x = m.text.font_family,
                    g = {
                        borderRadius: (0, s.wK)(m),
                        backgroundColor: h
                    },
                    v = {
                        fontFamily: x,
                        color: b
                    },
                    y = (0, r.Z)({}, n);
                return y.style = (0, r.Z)((0, r.Z)({}, v), y.style), (0, u.jsx)(a.Z, (0, r.Z)({
                    variant: "standard",
                    style: (0, r.Z)((0, r.Z)({}, g), t),
                    InputProps: y
                }, p))
            }
        },
        70750: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return r
                }
            });
            var r = {
                STORE_ITEM_ID_SEARCH_PARAM: "storeItemId",
                STORE_SCREEN_SEARCH_PARAM: "storeScreen",
                PAGE_VIEW_SOURCE: "pageViewSource",
                REFERRER: "referrer"
            }
        },
        7780: function(e, t) {
            t.Z = {
                LIB_STORE_BLOCK: "lib_view",
                DIRECT: "direct_view"
            }
        },
        92157: function(e, t, n) {
            n.d(t, {
                Hx: function() {
                    return b
                },
                Kp: function() {
                    return h
                },
                ZP: function() {
                    return v
                }
            });
            var r = n(4942),
                o = n(72791),
                i = n(28182),
                a = n(92249),
                l = n(43166),
                s = n(34310),
                c = n(64494),
                u = n(39257),
                d = n(39338),
                p = n(66015),
                m = n(7780),
                f = n(80184),
                h = {
                    LARGE: "large",
                    SMALL: "small",
                    CAROUSEL: "carousel",
                    TEXT_LEFT: "text-left",
                    TEXT_RIGHT: "text-right"
                };

            function b(e) {
                var t = e.price,
                    n = e.strikethroughPrice,
                    o = e.inline,
                    a = void 0 === o || o,
                    l = e.className,
                    s = "$".concat(t / 100);
                if (n) {
                    var c = Math.round(100 * (1 - t / n));
                    return (0, f.jsxs)("div", {
                        className: (0, i.Z)("flex gap-1", (0, r.Z)({
                            "flex-col": !a
                        }, l, !!l)),
                        children: [(0, f.jsx)("div", {
                            className: "font-bold text-16",
                            children: s
                        }), (0, f.jsxs)("div", {
                            className: "opacity-70 flex gap-2 items-center",
                            children: [(0, f.jsxs)("span", {
                                className: "line-through",
                                children: ["$", n / 100]
                            }), (0, f.jsxs)("span", {
                                children: ["(", c, "% off)"]
                            })]
                        })]
                    })
                }
                return (0, f.jsx)("div", {
                    className: (0, i.Z)("font-bold text-16", (0, r.Z)({}, l, !!l)),
                    children: s
                })
            }

            function x(e) {
                var t = e.borderRadius,
                    n = e.backgroundImage,
                    r = e.variant,
                    o = e.enableBorder,
                    a = g({
                        variant: r
                    }),
                    l = a.isLargeCard,
                    s = a.isCarouselCard,
                    c = a.isSmallCard,
                    u = a.isTextLeftCard,
                    d = a.isTextRightCard,
                    p = a.isHorizontalCard;
                return o ? (0, f.jsx)("div", {
                    role: "figure",
                    style: {
                        backgroundImage: n,
                        borderRadius: t ? "".concat(t, "px") : null
                    },
                    className: (0, i.Z)("bg-cover bg-center", {
                        "m-4 w-[calc(80%_-_16px)] pt-[calc(45%_-_10px)]": p,
                        "order-2 ml-0": u,
                        "order-1": !u,
                        "mr-0": d,
                        "m-4 mb-0 w-auto pt-[calc(100%_-_32px)]": l || s || c
                    })
                }) : (0, f.jsx)("div", {
                    role: "figure",
                    style: {
                        backgroundImage: n
                    },
                    className: (0, i.Z)("bg-cover bg-center", {
                        "pt-[45%] w-[80%]": p,
                        "pt-[100%] w-full": !p,
                        "order-2": u,
                        "order-1": !u
                    })
                })
            }

            function g(e) {
                var t = e.variant,
                    n = t === h.LARGE,
                    r = t === h.CAROUSEL,
                    o = t === h.SMALL,
                    i = t === h.TEXT_LEFT,
                    a = t === h.TEXT_RIGHT;
                return {
                    isLargeCard: n,
                    isCarouselCard: r,
                    isSmallCard: o,
                    isTextLeftCard: i,
                    isTextRightCard: a,
                    isHorizontalCard: i || a
                }
            }

            function v(e) {
                var t, n = e.borderRadius,
                    r = e.enableBorder,
                    v = e.item,
                    y = e.blockBackgroundColor,
                    k = e.variant,
                    _ = void 0 === k ? h.LARGE : k,
                    Z = (0, o.useContext)(p.Z).isComponent,
                    j = (0, a.Z)({
                        storeItemId: v.id,
                        beaconsUsername: v.beacons_username,
                        pageViewSource: m.Z.LIB_STORE_BLOCK,
                        referrer: window.location
                    }),
                    C = Z ? null : j,
                    w = v.title,
                    S = v.checkout_images,
                    I = v.poster_image_url,
                    P = v.price,
                    T = v.strikethrough_price,
                    N = "url(".concat(I || (null === S || void 0 === S || null === (t = S[0]) || void 0 === t ? void 0 : t.image_url) || s.Z.POSTER_IMAGE, ")"),
                    L = (0, c.m7)(v),
                    E = g({
                        variant: _
                    }),
                    R = E.isLargeCard,
                    O = E.isCarouselCard,
                    B = E.isSmallCard,
                    M = E.isTextLeftCard,
                    A = E.isHorizontalCard;
                return (0, f.jsxs)(d.Z, {
                    className: (0, i.Z)("relative cursor-pointer mt-4 flex overflow-hidden", {
                        "col-span-1": B,
                        "flex-col": !A,
                        "w-48 shrink-0 mr-4 last:mr-0": O
                    }),
                    tag: "center",
                    role: "button",
                    tabIndex: 0,
                    onClick: function() {
                        C && window.open(C, "_blank")
                    },
                    style: {
                        backgroundColor: y
                    },
                    children: [(0, f.jsx)(x, {
                        borderRadius: n,
                        variant: _,
                        backgroundImage: N,
                        enableBorder: r
                    }), (0, f.jsx)("div", {
                        className: (0, i.Z)("w-full text-left", {
                            "order-1": M,
                            "order-2": !M,
                            "h-auto": A,
                            "h-full": !A
                        }),
                        children: (0, f.jsxs)("div", {
                            className: "flex flex-col justify-between h-full box-border p-4",
                            children: [(0, f.jsx)(d.Z, {
                                style: {
                                    wordBreak: "break-word"
                                },
                                className: (0, i.Z)({
                                    "mb-4": R || O,
                                    "mb-3": B
                                }),
                                children: (0, f.jsx)(d.Z, {
                                    className: "cursor-pointer LineClamp2 text-16 !rounded-none",
                                    children: w
                                })
                            }), (0, f.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, f.jsx)(b, {
                                    price: P,
                                    strikethroughPrice: T,
                                    inline: R || A,
                                    className: (0, i.Z)({
                                        "mb-3": R || O,
                                        "mb-2": B || A
                                    })
                                }), (0, f.jsx)(u.Z, {
                                    variant: "contained",
                                    className: (0, i.Z)("CardButton font-bold", {
                                        "h-10": R || O,
                                        "h-8": B || A
                                    }),
                                    href: C,
                                    invert: !0,
                                    "aria-label": L,
                                    children: (0, f.jsx)(l.Z, {
                                        storeItem: v
                                    })
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        9002: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var r = n(74165),
                o = n(15861),
                i = n(23239);

            function a(e) {
                return l.apply(this, arguments)
            }

            function l() {
                return (l = (0, o.Z)((0, r.Z)().mark((function e(t) {
                    var n, o, a, l, s, c, u, d, p, m, f;
                    return (0, r.Z)().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = t.initialUsername, o = t.isCreatorPage, a = t.history, l = t.getPublicProfileInfo, n || o) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", null);
                            case 3:
                                return s = n, o ? s = window.location.hostname.split(".")[0] : (c = s.split("@")[0], (u = s.split("@")[1]) ? (u = u.toLowerCase(), s = "".concat(c.toLowerCase(), "@").concat(u)) : s = s.toLowerCase()), e.next = 7, (0, i.Z)();
                            case 7:
                                if (!(m = e.sent)) {
                                    e.next = 13;
                                    break
                                }
                                d = m, p = !0, e.next = 25;
                                break;
                            case 13:
                                return e.next = 15, l(s);
                            case 15:
                                if (f = e.sent, p = !!f, !f) {
                                    e.next = 24;
                                    break
                                }
                                if (!f.beacons_username || f.beacons_username === s) {
                                    e.next = 24;
                                    break
                                }
                                return a.push(f.beacons_username), s = f.beacons_username, e.next = 23, l(s);
                            case 23:
                                f = e.sent;
                            case 24:
                                d = f;
                            case 25:
                                return e.abrupt("return", {
                                    profileInfoDocData: d,
                                    profileInfoDocExists: p,
                                    usernameString: s
                                });
                            case 26:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        35842: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return Di
                }
            });
            var r = n(4942),
                o = n(1413),
                i = n(74165),
                a = n(29439),
                l = n(15861),
                s = n(72791),
                c = n(61889),
                u = n(54270),
                d = n(64880),
                p = n(28363),
                m = n.n(p),
                f = n(98190),
                h = n(56738),
                b = n(26287),
                x = n(58169),
                g = n(4690),
                v = n(68058),
                y = n(24015),
                k = n(45304),
                _ = n(43306),
                Z = n(86101),
                j = n(54679),
                C = n(33126),
                w = n(97836),
                S = n(44682),
                I = n(45251),
                P = n(89797),
                T = n(71358),
                N = n(30317),
                L = n(54361),
                E = n(74887);
            var R = n(46735),
                O = n(20165),
                B = n(73542),
                M = n(24518),
                A = n(66015),
                U = n(84579),
                F = n(80184);

            function W(e) {
                var t, n, r = e.headerTextColor,
                    o = e.profileTheme;
                return r || ("#ffffff" === (null === o || void 0 === o || null === (t = o.background) || void 0 === t ? void 0 : t.background_color1) || (null !== o && void 0 !== o && null !== (n = o.background) && void 0 !== n && n.filter ? "light" === o.background.filter : g.wb.background.filter) ? "var(--beacons-gray-900)" : "white")
            }

            function D(e) {
                var t, n = e.color,
                    r = (0, s.useContext)(U.Z),
                    o = (0, s.useContext)(A.Z) || {},
                    i = o.displayUsername,
                    a = o.headerTextColor,
                    l = o.isComponent,
                    c = o.subscriptionPlanIds;
                if ((0, T.ZP)(T.h6.BRANDING, c) && !(null !== r && void 0 !== r && null !== (t = r.page) && void 0 !== t && t.show_logo)) return null;
                var u = new URLSearchParams({
                    referral_type: "footer_logo",
                    referring_user: i,
                    utm_source: "beacons_user",
                    utm_medium: "lib_footer_logo",
                    utm_campaign: i
                });
                return (0, F.jsx)("div", {
                    className: "FlexCenterCenter ProfileLogo",
                    children: (0, F.jsx)("a", {
                        href: l ? "#logo" : "".concat("https://beacons.ai", "/?").concat(u),
                        "aria-label": "home",
                        children: (0, F.jsx)(v.r, {
                            style: {
                                fill: n || W({
                                    headerTextColor: a,
                                    profileTheme: r
                                }),
                                height: 35
                            }
                        })
                    })
                })
            }

            function z(e) {
                var t = e.ageVerification,
                    n = e.setAgeVerification,
                    r = "Confirm that you are willing to see potentially sensitive content.",
                    o = "I confirm",
                    i = "Go back";
                return "on" !== t.age && (r = "Confirm that you are of legal age to view this content.", o = "I am ".concat(t.age, " or older"), i = "I am under ".concat(t.age)), (0, F.jsx)(B.Z, {
                    fullScreen: !0,
                    open: !!t,
                    children: (0, F.jsxs)("div", {
                        className: "bg-gray-900 flex flex-col items-center justify-between h-full w-screen pb-16",
                        children: [(0, F.jsxs)("div", {
                            className: "mt-12 px-6 text-center text-white",
                            children: [(0, F.jsx)(O.Z, {
                                className: "fill-white"
                            }), (0, F.jsx)("div", {
                                className: "font-bold text-28 mt-6",
                                children: "Sensitive Content"
                            }), (0, F.jsx)("div", {
                                className: "mt-6",
                                children: r
                            }), (0, F.jsx)(M.Z, {
                                className: "border border-white border-solid font-bold mt-6 normal-case rounded-full text-16",
                                color: "inherit",
                                fullWidth: !0,
                                onClick: function() {
                                    return n(!1)
                                },
                                variant: "outlined",
                                children: o
                            }), (0, F.jsx)(M.Z, {
                                className: "font-bold mt-6 normal-case text-16",
                                color: "inherit",
                                fullWidth: !0,
                                href: "https://beacons.ai",
                                children: i
                            })]
                        }), (0, F.jsx)(D, {
                            color: "#ffffff"
                        })]
                    })
                })
            }
            var q = n(27197),
                H = n(28182),
                $ = n(69919),
                V = n(92810),
                G = n(36046),
                K = n.n(G),
                Y = n(26203),
                X = n(64517),
                J = n(97809),
                Q = n(20032),
                ee = n(16480),
                te = n(10509),
                ne = n(61536),
                re = n(23286),
                oe = n(39257),
                ie = n(39338),
                ae = n(90550),
                le = n(89821);

            function se(e) {
                var t = e.open,
                    n = e.setOpen,
                    r = e.mainCta,
                    i = e.additionalInformation,
                    a = e.children,
                    l = e.acquisitionChannel,
                    c = (0, s.useContext)(A.Z),
                    u = c.profilePicUrl,
                    d = c.setCommunityDialogState;
                return (0, F.jsxs)(Y.Z, {
                    open: t,
                    onClose: function() {
                        return n(!1)
                    },
                    title: r,
                    children: [(0, F.jsx)(ae.Z, {
                        fonts: [{
                            font: "Poppins",
                            weights: [400, 600, 700]
                        }]
                    }), !!u && (0, F.jsx)("div", {
                        style: {
                            textAlign: "center"
                        },
                        children: (0, F.jsx)("img", {
                            className: "MarginM",
                            src: u,
                            onError: function(e) {
                                e.target.src = x.Z
                            },
                            alt: "profile",
                            style: {
                                height: 100,
                                borderRadius: "50%"
                            }
                        })
                    }), (0, F.jsx)("div", {
                        className: "Caption MarginBottomM",
                        children: i
                    }), a, (0, F.jsx)("div", {
                        children: (0, F.jsx)(le.Z, {
                            intent: "primary",
                            fullWidth: !0,
                            onClick: function() {
                                d((function(e) {
                                    return (0, o.Z)((0, o.Z)({}, e), {}, {
                                        open: !0,
                                        acquisitionChannel: l
                                    })
                                })), n(!1)
                            },
                            children: "Join community"
                        })
                    }), (0, F.jsx)("div", {
                        className: "MarginTopS",
                        children: (0, F.jsx)(le.Z, {
                            onClick: function() {
                                return n(!1)
                            },
                            fullWidth: !0,
                            intent: "secondary",
                            children: "Done"
                        })
                    })]
                })
            }

            function ce(e) {
                var t = e.block,
                    n = e.blockId,
                    r = (0, s.useContext)(A.Z),
                    o = r.isComponent,
                    i = r.paymentProperties,
                    l = (0, s.useState)(!1),
                    c = (0, a.Z)(l, 2),
                    u = c[0],
                    d = c[1],
                    p = Q.Z[g.$W.BOOKING](t, i);
                return p || o !== g.w6 ? p ? (0, F.jsxs)(re.Z, {
                    "data-testid": n,
                    children: [!!t.cover_image && (0, F.jsx)("div", {
                        children: (0, F.jsx)("div", {
                            style: {
                                backgroundImage: "url(".concat(t.cover_image, ")"),
                                height: 0,
                                paddingTop: "66%",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                margin: "-24px -24px 0px"
                            }
                        })
                    }), (0, F.jsx)(ie.Z, {
                        className: (0, H.Z)({
                            h2Text: !0,
                            MarginTopM: !!t.cover_image
                        }),
                        children: t.session_title
                    }), (0, F.jsx)(ie.Z, {
                        className: "mt-3",
                        children: (0, F.jsx)($.Z, {
                            children: t.session_description
                        })
                    }), (0, F.jsxs)(ie.Z, {
                        className: "flex items-center mt-3 text-16",
                        children: [(0, F.jsx)(q.Z, {
                            style: {
                                height: 20
                            }
                        }), t.session_length, (0, F.jsx)("div", {
                            className: "ml-6",
                            children: 0 === Number(t.price) ? "Free" : "$".concat(t.price)
                        })]
                    }), (0, F.jsx)("div", {
                        className: "mt-4",
                        children: (0, F.jsx)(oe.Z, {
                            invert: !0,
                            fullWidth: !0,
                            variant: "contained",
                            className: "EmailButton CardStyle",
                            onClick: function() {
                                o || d(!0)
                            },
                            "aria-label": t.button_title,
                            children: t.button_title
                        })
                    }), (0, F.jsx)(ue, {
                        open: u,
                        setOpen: d,
                        block: t,
                        blockId: n
                    })]
                }) : null : (0, F.jsx)(te.Z, {
                    title: "Appointments",
                    cta: "Set up payments to remove this temporary placeholder."
                })
            }

            function ue(e) {
                var t, n = e.open,
                    r = e.setOpen,
                    o = e.block,
                    c = e.blockId,
                    u = (0, s.useContext)(A.Z),
                    d = u.disablePayments,
                    p = u.displayUsername,
                    m = u.firebaseUid,
                    f = (0, _.Xo)({
                        email: "",
                        id: (0, V.Z)(),
                        bid: 100 * o.price,
                        status: "booking",
                        name: "",
                        instructions: "",
                        creator_username: p,
                        firebase_uid: m,
                        booking_method: o.booking_method,
                        calendly_event_uri: o.calendly_event_uri,
                        session_title: o.session_title,
                        session_description: o.session_description,
                        session_length: o.session_length,
                        block_id: c
                    }),
                    h = f.value,
                    b = f.updateValue,
                    x = (0, s.useState)(!1),
                    v = (0, a.Z)(x, 2),
                    y = v[0],
                    k = v[1],
                    j = (0, s.useState)(void 0),
                    C = (0, a.Z)(j, 2),
                    w = C[0],
                    S = C[1],
                    I = (0, s.useState)(!1),
                    P = (0, a.Z)(I, 2),
                    T = P[0],
                    N = P[1],
                    L = (0, s.useMemo)((function() {
                        return T && h.email && !K()(h.email) ? "Email invalid" : ""
                    }), [T, h.email]),
                    E = K()(h.email) && h.bid <= g.lr,
                    R = (0, s.useCallback)((function(e) {
                        return (0, l.Z)((0, i.Z)().mark((function t() {
                            var n;
                            return (0, i.Z)().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!d) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.next = 3, (0, _._v)(1e4);
                                    case 3:
                                        return t.abrupt("return", "deny");
                                    case 4:
                                        if (!(h.bid > 0)) {
                                            t.next = 9;
                                            break
                                        }
                                        return t.next = 7, (0, Z.Z)("manage_order", {
                                            action: "create_payment_intent",
                                            order: e,
                                            order_type: "booking"
                                        });
                                    case 7:
                                        return n = t.sent, t.abrupt("return", n.data.client_secret);
                                    case 9:
                                        return t.abrupt("return", "freeOrder");
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))
                    }), [d, h]),
                    O = (0, s.useCallback)((function(e) {
                        S(e), window.gtag && window.gtag("event", "purchase", {
                            value: h.bid,
                            currency: "USD",
                            transaction_id: h.id,
                            affiliation: "Booking",
                            items: [{
                                name: "Booking"
                            }]
                        })
                    }), [h]),
                    B = "Thank you for supporting ".concat(p, "!"),
                    M = "You will get an email at ".concat(h.email, " with instructions on how to book your appointment.");
                return y ? (0, F.jsx)(se, {
                    open: n,
                    setOpen: r,
                    mainCta: B,
                    additionalInformation: M,
                    acquisitionChannel: "booking_block",
                    children: !(null === w || void 0 === w || null === (t = w.item) || void 0 === t || !t.calendly_link) && (0, F.jsx)("div", {
                        className: "MarginTopM MarginBottomM",
                        children: (0, F.jsx)("a", {
                            href: w.item.calendly_link,
                            target: "_blank",
                            rel: "noreferrer",
                            style: {
                                color: "initial"
                            },
                            children: "Click here to book now."
                        })
                    })
                }) : (0, F.jsxs)(Y.Z, {
                    open: n,
                    onClose: function() {
                        return r(!1)
                    },
                    scroll: "body",
                    children: [(0, F.jsx)("div", {
                        children: (0, F.jsx)(X.Z, {
                            label: "Your email",
                            id: "Your email",
                            placeholder: "name@example.com",
                            value: h.email,
                            onChange: function(e) {
                                return b({
                                    email: e.target.value
                                })
                            },
                            onBlur: function() {
                                return N(!0)
                            },
                            error: !!L,
                            helperText: L,
                            autoFocus: !0,
                            type: "email",
                            autoComplete: "email",
                            InputProps: {
                                startAdornment: " "
                            },
                            fullWidth: !0
                        })
                    }), (0, F.jsx)("div", {
                        className: "mt-3",
                        children: (0, F.jsx)(X.Z, {
                            label: "Your name",
                            id: "Your name",
                            placeholder: "Jane Doe",
                            value: h.name,
                            onChange: function(e) {
                                return b({
                                    name: e.target.value
                                })
                            },
                            InputProps: {
                                startAdornment: " "
                            },
                            autoComplete: "name",
                            fullWidth: !0
                        })
                    }), (0, F.jsx)("div", {
                        className: "mt-3",
                        children: (0, F.jsx)(X.Z, {
                            label: "Your message",
                            id: "Your message",
                            value: h.instructions,
                            onChange: function(e) {
                                h.instructions.length > 250 || b({
                                    instructions: e.target.value
                                })
                            },
                            helperText: "".concat(h.instructions.length, "/250"),
                            InputProps: {
                                startAdornment: " "
                            },
                            fullWidth: !0,
                            multiline: !0
                        })
                    }), (0, F.jsxs)("div", {
                        className: "mt-6",
                        children: [(0, F.jsx)(ne.Z, {
                            orderInfo: h,
                            allowPay: E,
                            orderType: ee.Z.BOOKING,
                            paymentSuccessEndpoint: "complete_booking_purchase_paypal",
                            setSuccessfullyPaid: k,
                            setSuccessfulPaymentCallback: O,
                            dynamicHidePayment: !0
                        }), (0, F.jsx)(J.Z, {
                            order: h,
                            setSuccessfullyPaid: k,
                            allowPay: E,
                            paymentSuccessEndpoint: "complete_booking_purchase_stripe",
                            setSuccessfulPaymentCallback: O,
                            retrievePaymentIntent: R(h),
                            dynamicHidePayment: !0
                        })]
                    })]
                })
            }
            var de = n(93433),
                pe = n(72455),
                me = n(91786);
            var fe = (0, pe.Z)({
                underline: {
                    "&&&:before": {
                        borderBottom: "none"
                    },
                    "&&:after": {
                        borderBottom: "none"
                    }
                },
                input: {
                    paddingLeft: 16,
                    paddingRight: 16
                }
            });

            function he(e) {
                var t = e.joinCommunityNote,
                    n = e.setJoinCommunityNote,
                    r = e.notePlaceholder,
                    o = (0, s.useContext)(U.Z),
                    i = (0, _.wK)(o),
                    a = fe();
                return (0, F.jsx)(me.Z, {
                    placeholder: r || "Leave a note here...",
                    value: t,
                    multiline: !0,
                    onChange: function(e) {
                        e.target.value.length <= 140 && n(e.target.value)
                    },
                    InputProps: {
                        classes: a,
                        inputProps: {
                            "aria-label": r
                        }
                    },
                    style: {
                        borderRadius: i,
                        border: "2px solid ".concat(o.text.color),
                        padding: "5px 0px",
                        marginRight: 1,
                        width: "calc(100% - 5px)"
                    }
                })
            }

            function be(e) {
                var t = e.joinCommunityNote,
                    n = (0, s.useContext)(A.Z),
                    r = n.beaconsUsername,
                    i = n.isComponent,
                    a = n.setCommunityDialogState;
                return (0, F.jsx)(oe.Z, {
                    invert: !0,
                    className: "EmailButton CardStyle",
                    variant: "contained",
                    type: "submit",
                    onClick: function() {
                        i || a((function(e) {
                            return (0, o.Z)((0, o.Z)({}, e), {}, {
                                open: !0,
                                cta: "Get featured on ".concat(r, "'s page."),
                                acquisitionChannel: "community_block",
                                joinCommunityNote: t
                            })
                        }))
                    },
                    children: "Join community"
                })
            }
            var xe = ["Top supporter \ud83c\udf81", "Top advocate \ud83d\udd25", "Top believer \ud83d\udc98"];

            function ge(e) {
                var t = e.featuredMembers;
                return t ? t.map((function(e, t) {
                    return (0, F.jsx)(ve, {
                        communityMember: e,
                        badge: xe[t]
                    }, t)
                })) : null
            }

            function ve(e) {
                var t = e.communityMember,
                    n = e.badge,
                    r = (0, s.useContext)(A.Z).isComponent,
                    o = (0, s.useContext)(U.Z);
                o = (0, _.Ee)(g.wb, o);
                var i, a = r ? null : "".concat("https://beacons.ai", "/").concat(t.beacons_username);
                return t.note && (i = t.display_note ? '"'.concat(t.note, '"') : t.note), (0, F.jsxs)("div", {
                    children: [(0, F.jsx)("div", {
                        children: (0, F.jsxs)("div", {
                            className: "CommunityMemberContainer MarginTopM MarginBottomS",
                            children: [(0, F.jsx)("a", {
                                target: "_blank",
                                rel: "noreferrer",
                                href: a,
                                style: {
                                    textDecoration: "none",
                                    cursor: "pointer"
                                },
                                children: (0, F.jsx)("img", {
                                    className: "CommunityMemberProfPic",
                                    src: t.profile_picture_url,
                                    alt: "Community member",
                                    onError: function(e) {
                                        e.target.src = x.Z
                                    }
                                })
                            }), (0, F.jsxs)("div", {
                                className: "CommunityMemberInfo",
                                children: [(0, F.jsxs)("div", {
                                    className: "FlexCenter",
                                    children: [(0, F.jsx)(ie.Z, {
                                        style: {
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap"
                                        },
                                        children: t.beacons_username
                                    }), !!n && (0, F.jsx)(ie.Z, {
                                        className: "MarginLeftXS",
                                        style: {
                                            fontSize: 12,
                                            color: o.text.hover_color,
                                            backgroundColor: o.button.hover_background_color,
                                            whiteSpace: "nowrap",
                                            padding: "0px 4px",
                                            marginBottom: 4
                                        },
                                        children: n
                                    })]
                                }), (0, F.jsx)(ie.Z, {
                                    children: i || (0, F.jsx)("span", {
                                        style: {
                                            opacity: .75,
                                            fontStyle: "italic"
                                        },
                                        children: "Joined community"
                                    })
                                })]
                            })]
                        })
                    }), (0, F.jsx)("div", {
                        style: {
                            height: 1,
                            borderTop: "1px solid ".concat(o.text.color)
                        }
                    })]
                })
            }
            var ye = function(e) {
                    var t = e.block,
                        n = e.blockId,
                        r = (0, d.useLocation)(),
                        o = (0, s.useContext)(A.Z).firebaseUid,
                        c = (0, s.useContext)(U.Z);
                    c = (0, _.Ee)(g.wb, c);
                    var u = (0, s.useState)(void 0),
                        p = (0, a.Z)(u, 2),
                        m = p[0],
                        f = p[1],
                        h = (0, s.useState)(void 0),
                        b = (0, a.Z)(h, 2),
                        x = b[0],
                        v = b[1],
                        y = (0, s.useState)(""),
                        k = (0, a.Z)(y, 2),
                        j = k[0],
                        C = k[1],
                        w = (0, s.useState)(!0),
                        S = (0, a.Z)(w, 2),
                        I = S[0],
                        P = S[1];
                    (0, s.useEffect)((function() {
                        var e = function() {
                            var e = (0, l.Z)((0, i.Z)().mark((function e() {
                                var n;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, (0, Z.Z)("user_profile", {
                                                action: "get_community_members",
                                                firebase_uid: o,
                                                show_leaderboard: !(null === t || void 0 === t || !t.show_leaderboard)
                                            });
                                        case 2:
                                            n = e.sent, f(n.data.most_recent_members), v(n.data.member_leaderboard);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), []), (0, s.useEffect)((function() {
                        var e = new URLSearchParams(r.search),
                            n = e.get("community_picture"),
                            o = e.get("community_username"),
                            i = e.get("community_note");
                        if (!i || null !== t && void 0 !== t && t.show_new_comments_by_default || (i = "Left a note \ud83d\udc8c"), n && o)
                            if (P(!1), m) {
                                var a = (0, de.Z)(m);
                                if (!!a.find((function(e) {
                                        return e.beacons_username === o
                                    }))) return;
                                a = [{
                                    beacons_username: o,
                                    profile_picture_url: n,
                                    note: i,
                                    display_note: !(null === t || void 0 === t || !t.show_new_comments_by_default)
                                }].concat(a), f(a)
                            } else f([{
                                beacons_username: o,
                                profile_picture_url: n
                            }])
                    }), [r]);
                    var T = Q.Z[g.$W.COMMUNITY](t);
                    return m && T ? (0, F.jsxs)(re.Z, {
                        "data-testid": n,
                        children: [!!t.community_title && (0, F.jsx)(ie.Z, {
                            tag: "center",
                            style: {
                                fontSize: 18,
                                fontWeight: "bold"
                            },
                            children: t.community_title
                        }), (0, F.jsx)(ie.Z, {
                            tag: "center",
                            className: "MarginTopS",
                            style: {
                                fontSize: 14
                            },
                            children: null !== m && void 0 !== m && m.length || null !== x && void 0 !== x && x.length ? "Recently joined" : "Be the first to get featured on this page"
                        }), !!m.length && (0, F.jsx)("div", {
                            style: {
                                height: 1,
                                borderTop: "1px solid ".concat(c.text.color)
                            }
                        }), !(null === t || void 0 === t || !t.show_leaderboard) && (0, F.jsx)(ge, {
                            featuredMembers: x
                        }), m.map((function(e) {
                            return (0, F.jsx)(ve, {
                                communityMember: e
                            }, e.beacons_username)
                        })), I && (0, F.jsxs)(F.Fragment, {
                            children: [(0, F.jsx)("div", {
                                className: "MarginTopM",
                                children: (0, F.jsx)(he, {
                                    joinCommunityNote: j,
                                    setJoinCommunityNote: C,
                                    notePlaceholder: t.note_placeholder
                                })
                            }), (0, F.jsx)("div", {
                                className: "MarginTopS",
                                children: (0, F.jsx)(be, {
                                    setJoinCommunityNote: C,
                                    joinCommunityNote: j
                                })
                            })]
                        })]
                    }) : null
                },
                ke = n(29823),
                _e = n(13400);

            function Ze(e) {
                var t = e.dialogState,
                    n = e.setDialogState,
                    r = (0, d.useHistory)(),
                    i = (0, s.useContext)(A.Z),
                    l = i.beaconsUsername,
                    c = i.firebaseUid,
                    u = i.profilePicUrl,
                    p = i.socialReferrer,
                    m = (0, s.useState)(""),
                    f = (0, a.Z)(m, 2),
                    b = f[0],
                    x = f[1],
                    g = (0, s.useState)(""),
                    v = (0, a.Z)(g, 2),
                    y = v[0],
                    k = v[1];
                (0, s.useEffect)((function() {
                    var e = new URLSearchParams(window.location.search).get("community");
                    x(e)
                }), []);
                var _ = (0, s.useCallback)((function() {
                    n((function(e) {
                        return (0, o.Z)((0, o.Z)({}, e), {}, {
                            open: !1
                        })
                    }))
                }), [n]);
                return (0, s.useEffect)((function() {
                    var e = function(e) {
                        if ("string" === typeof e.data && e.data.startsWith("closeCommunityDialog")) {
                            _();
                            var t = e.data.split(";")[1];
                            if (t) {
                                t = window.encodeURIComponent(t);
                                var n = e.data.split(";")[2],
                                    o = e.data.split(";")[3],
                                    i = "".concat(window.location.pathname, "?community_picture=").concat(t, "&community_username=").concat(n);
                                o && (i += "&community_note=".concat(o)), r.push(i)
                            }
                        }
                    };
                    return window.addEventListener("message", e),
                        function() {
                            return window.removeEventListener("message", e)
                        }
                }), [_, r, n]), (0, s.useEffect)((function() {
                    var e = new URLSearchParams({
                        community: b,
                        f: c,
                        op: p,
                        p: u,
                        u: l,
                        utm_source: "beacons_user",
                        utm_medium: "lib_community",
                        utm_campaign: l,
                        utm_content: t.acquisitionChannel
                    });
                    t.title && e.set("t", t.title), t.cta && e.set("cta", t.cta), t.acquisitionChannel && e.set("a", t.acquisitionChannel), t.joinCommunityNote && e.set("cn", t.joinCommunityNote);
                    var n = "".concat("https://account.beacons.ai").concat(h.qD, "?").concat(e);
                    k(n)
                }), [l, b, t, c, u, p]), y ? (0, F.jsxs)(B.Z, {
                    open: t.open,
                    onClose: _,
                    children: [(0, F.jsx)("div", {
                        style: {
                            textAlign: "end"
                        },
                        children: (0, F.jsx)(_e.Z, {
                            onClick: _,
                            size: "small",
                            children: (0, F.jsx)(ke.Z, {})
                        })
                    }), (0, F.jsx)("div", {
                        children: (0, F.jsx)("iframe", {
                            referrerPolicy: "origin",
                            src: y,
                            title: "community",
                            frameBorder: "no",
                            style: {
                                width: "100%",
                                border: "none",
                                height: 425
                            }
                        })
                    })]
                }) : null
            }
            var je = n(81131),
                Ce = n(56125),
                we = n(36571),
                Se = n(66888),
                Ie = n(7792),
                Pe = n(70113),
                Te = n(59542),
                Ne = n(6140);

            function Le(e) {
                return (0, F.jsx)(Ne.Z, (0, o.Z)({
                    padding: "24px"
                }, e))
            }
            var Ee = n(45987),
                Re = n(84795),
                Oe = ["children", "onChange", "options", "style", "value"];

            function Be(e) {
                var t = e.children,
                    n = e.onChange,
                    r = (e.options, e.style, e.value),
                    i = (0, Ee.Z)(e, Oe),
                    a = (0, s.useContext)(U.Z),
                    l = (a = (0, _.Ee)(g.wb, a)).components.opacity,
                    c = a.card.background_color + l,
                    u = a.text.color,
                    d = a.text.font_family,
                    p = (0, _.wK)(a);
                return (0, F.jsx)("div", {
                    style: {
                        borderRadius: p,
                        border: "2px solid ".concat(a.text.color)
                    },
                    children: (0, F.jsx)(Re.Z, (0, o.Z)((0, o.Z)({
                        sx: {
                            "& .MuiNativeSelect-select": {
                                backgroundColor: c,
                                fontFamily: d,
                                color: r ? u : "".concat(u, "80")
                            }
                        },
                        onChange: n,
                        value: r,
                        inputProps: {
                            className: "!bg-transparent p-3"
                        }
                    }, i), {}, {
                        children: t
                    }))
                })
            }
            var Me = n(29640),
                Ae = (0, pe.Z)({
                    underline: {
                        "&&&:before": {
                            borderBottom: "none"
                        },
                        "&&:after": {
                            borderBottom: "none"
                        }
                    }
                });

            function Ue(e) {
                return e.replace(/[^0-9]/g, "").length >= 15
            }

            function Fe(e) {
                var t = e.block,
                    n = e.email,
                    r = e.setEmail,
                    o = e.phoneNumber,
                    i = e.setPhoneNumber,
                    l = e.emailError,
                    c = e.phoneNumberError,
                    u = e.onSubmit,
                    d = e.submitted,
                    p = e.blockId,
                    m = (0, s.useContext)(A.Z).displayUsername,
                    f = (0, s.useContext)(U.Z),
                    h = (0, _.wK)(f),
                    b = (0, s.useState)(!1),
                    x = (0, a.Z)(b, 2),
                    v = x[0],
                    y = x[1],
                    k = Ae(),
                    Z = "You're all set! Be sure to look out for my emails from: ".concat(m, "@my.beacons.mail. Or add me as a contact!");
                if (d) return (0, F.jsx)(ie.Z, {
                    className: "FlexCenterCenter",
                    tag: "center",
                    style: {
                        height: 65,
                        fontWeight: "bold"
                    },
                    children: t.success_message || Z
                });
                var j = f.card.outline ? "2px solid ".concat(f.text.color) : 0,
                    C = t.information_type,
                    w = t.show_email_field,
                    S = C ? C === g.I1.EMAIL : w;
                return (0, F.jsxs)("center", {
                    "data-testid": p,
                    style: f.components.theme === g.tm.FULL_WIDTH ? {
                        paddingLeft: 20,
                        paddingRight: 20
                    } : {},
                    children: [(0, F.jsxs)("form", {
                        onSubmit: function(e) {
                            e.preventDefault(), u()
                        },
                        children: [(0, F.jsx)(me.Z, {
                            placeholder: t.placeholder_text || g.MW,
                            value: S ? n : o,
                            onChange: function(e) {
                                S ? r(e.target.value) : i(e.target.value)
                            },
                            error: S ? l : c,
                            InputProps: {
                                classes: k,
                                inputProps: {
                                    "aria-label": S ? "email input" : "phone number input"
                                }
                            },
                            className: "EmailTextField LinkStyle",
                            style: {
                                height: f.card.outline ? 42 : 46,
                                borderRadius: "".concat(h, "px 0px 0px ").concat(h, "px"),
                                borderLeft: j,
                                borderTop: j,
                                borderBottom: j,
                                boxShadow: (0, Me.Z)(f.card.shadow, f.components.opacity, f.card.background_color)
                            },
                            onFocus: function() {
                                return y(!0)
                            },
                            onBlur: function() {
                                return y(!1)
                            }
                        }), (0, F.jsx)(oe.Z, {
                            variant: "contained",
                            type: "submit",
                            className: "EmailButton LinkStyle",
                            style: {
                                borderRadius: "0px ".concat(h, "px ").concat(h, "px 0px"),
                                borderLeft: "2px solid ".concat(f.text.color),
                                borderTop: j,
                                borderBottom: j,
                                borderRight: j,
                                boxShadow: (0, Me.Z)(f.card.shadow, f.components.opacity, f.card.background_color)
                            },
                            children: t.submit_text || g.gb
                        })]
                    }), l && (0, F.jsx)(ie.Z, {
                        style: {
                            marginTop: 6
                        },
                        children: "Please enter a valid email."
                    }), c && (0, F.jsx)(ie.Z, {
                        style: {
                            marginTop: 6
                        },
                        children: "Please enter a valid phone number."
                    }), t.legal_enabled && !!t.legal_text && (v || !!n) && (0, F.jsx)(ie.Z, {
                        tag: "center",
                        style: {
                            fontSize: 12,
                            marginTop: 8
                        },
                        children: (0, F.jsx)(ie.Z, {
                            tag: t.legal_url ? "a" : "div",
                            href: t.legal_url,
                            target: "_blank",
                            rel: "noreferrer",
                            children: t.legal_text
                        })
                    })]
                })
            }

            function We(e) {
                var t = e.block,
                    n = e.email,
                    r = e.setEmail,
                    o = e.phoneNumber,
                    i = e.setPhoneNumber,
                    a = e.emailError,
                    l = e.onSubmit,
                    c = e.submitted,
                    u = e.fullName,
                    d = e.setFullName,
                    p = e.firstName,
                    m = e.setFirstName,
                    f = e.lastName,
                    h = e.setLastName,
                    b = e.addressLine1,
                    x = e.setAddressLine1,
                    v = e.addressLine2,
                    y = e.setAddressLine2,
                    k = e.city,
                    _ = e.setCity,
                    Z = e.region,
                    j = e.setRegion,
                    C = e.postalCode,
                    w = e.setPostalCode,
                    S = e.country,
                    I = e.setCountry,
                    P = e.birthdate,
                    T = e.setBirthdate,
                    N = e.customFieldValue,
                    L = e.setCustomFieldValue,
                    E = e.nameError,
                    R = e.customFieldError,
                    O = e.phoneNumberError,
                    B = e.blockId,
                    M = (0, s.useContext)(A.Z).displayUsername,
                    U = "You're all set! Be sure to look out for my emails from: ".concat(M, "@my.beacons.mail. Or add me as a contact!");
                return c ? (0, F.jsx)(Le, {
                    children: (0, F.jsx)(ie.Z, {
                        tag: "center",
                        style: {
                            fontSize: 20,
                            fontWeight: "bold"
                        },
                        children: (0, F.jsx)($.Z, {
                            children: t.success_message || U
                        })
                    })
                }) : t.collapse_style === g.Mo.COLLAPSED ? (0, F.jsx)("div", {
                    "data-testid": B,
                    children: (0, F.jsx)(De, {
                        title: t.placeholder_text || g.MW,
                        children: (0, F.jsx)(ze, {
                            block: t,
                            email: n,
                            setEmail: r,
                            emailError: a,
                            phoneNumber: o,
                            setPhoneNumber: i,
                            onSubmit: l,
                            submitted: c,
                            fullName: u,
                            setFullName: d,
                            firstName: p,
                            setFirstName: m,
                            lastName: f,
                            setLastName: h,
                            addressLine1: b,
                            setAddressLine1: x,
                            addressLine2: v,
                            setAddressLine2: y,
                            city: k,
                            setCity: _,
                            region: Z,
                            setRegion: j,
                            postalCode: C,
                            setPostalCode: w,
                            country: S,
                            setCountry: I,
                            birthdate: P,
                            setBirthdate: T,
                            customFieldValue: N,
                            setCustomFieldValue: L,
                            nameError: E,
                            customFieldError: R,
                            phoneNumberError: O
                        })
                    })
                }) : (0, F.jsxs)(re.Z, {
                    "data-testid": B,
                    children: [(0, F.jsx)(ie.Z, {
                        tag: "center",
                        style: {
                            fontSize: 18,
                            fontWeight: "bold"
                        },
                        children: t.placeholder_text || g.MW
                    }), (0, F.jsx)(ze, {
                        block: t,
                        email: n,
                        setEmail: r,
                        phoneNumber: o,
                        setPhoneNumber: i,
                        emailError: a,
                        onSubmit: l,
                        submitted: c,
                        fullName: u,
                        setFullName: d,
                        firstName: p,
                        setFirstName: m,
                        lastName: f,
                        setLastName: h,
                        addressLine1: b,
                        setAddressLine1: x,
                        addressLine2: v,
                        setAddressLine2: y,
                        city: k,
                        setCity: _,
                        region: Z,
                        setRegion: j,
                        postalCode: C,
                        setPostalCode: w,
                        country: S,
                        setCountry: I,
                        birthdate: P,
                        setBirthdate: T,
                        customFieldValue: N,
                        setCustomFieldValue: L,
                        nameError: E,
                        customFieldError: R,
                        phoneNumberError: O
                    })]
                })
            }

            function De(e) {
                var t = e.children,
                    n = e.title,
                    r = (0, s.useState)(!1),
                    o = (0, a.Z)(r, 2),
                    i = o[0],
                    l = o[1];
                return (0, F.jsxs)(re.Z, {
                    className: "relative transition-all",
                    padding: 16,
                    children: [(0, F.jsx)(ie.Z, {
                        children: (0, F.jsxs)("div", {
                            className: "cursor-pointer flex items-center justify-center",
                            onClick: function() {
                                return l((function(e) {
                                    return !e
                                }))
                            },
                            role: "button",
                            tabIndex: "0",
                            children: [(0, F.jsx)("div", {
                                className: "title",
                                children: n
                            }), (0, F.jsx)("div", {
                                className: (0, H.Z)("absolute right-4 flex items-center transition-transform", {
                                    "rotate-180": i
                                }),
                                children: (0, F.jsx)(je.Z, {})
                            })]
                        })
                    }), (0, F.jsx)(Ce.Z, { in: i,
                        timeout: "auto",
                        children: t
                    })]
                })
            }

            function ze(e) {
                var t = e.block,
                    n = e.email,
                    r = e.setEmail,
                    i = e.phoneNumber,
                    a = e.setPhoneNumber,
                    l = e.emailError,
                    c = e.onSubmit,
                    u = e.fullName,
                    d = e.setFullName,
                    p = e.firstName,
                    m = e.setFirstName,
                    f = e.lastName,
                    h = e.setLastName,
                    b = e.addressLine1,
                    x = e.setAddressLine1,
                    v = e.addressLine2,
                    y = e.setAddressLine2,
                    k = e.city,
                    Z = e.setCity,
                    j = e.region,
                    C = e.setRegion,
                    w = e.postalCode,
                    S = e.setPostalCode,
                    I = e.country,
                    P = e.setCountry,
                    T = e.birthdate,
                    N = e.setBirthdate,
                    L = e.customFieldValue,
                    E = e.setCustomFieldValue,
                    R = e.nameError,
                    O = e.customFieldError,
                    B = e.phoneNumberError,
                    M = (0, s.useContext)(A.Z).isComponent,
                    W = (0, s.useContext)(U.Z),
                    D = (0, _.wK)(W),
                    z = Ae(),
                    q = t.information_type,
                    H = t.show_email_field,
                    $ = t.show_phone_number_field,
                    V = q ? q === g.I1.EMAIL : H,
                    G = q ? q === g.I1.SMS : $,
                    K = "United States" === I,
                    Y = "Canada" === I;
                return (0, F.jsxs)(F.Fragment, {
                    children: [(0, F.jsx)(ie.Z, {
                        tag: "center",
                        className: "mt-3",
                        children: t.description || g.ZA
                    }), (0, F.jsx)("form", {
                        onSubmit: function(e) {
                            e.preventDefault(), c()
                        },
                        children: (0, F.jsxs)("center", {
                            className: "mt-4",
                            children: [t.show_name_field && (0, F.jsx)("div", {
                                className: "mt-3",
                                children: (0, F.jsx)(me.Z, {
                                    placeholder: "Full Name",
                                    value: u,
                                    onChange: function(e) {
                                        return d(e.target.value)
                                    },
                                    error: R,
                                    InputProps: {
                                        classes: z,
                                        inputProps: {
                                            "aria-label": "email name input"
                                        }
                                    },
                                    className: "EmailTextField CardStyle",
                                    style: {
                                        borderRadius: D,
                                        border: "2px solid ".concat(W.text.color)
                                    }
                                })
                            }), t.show_first_name_field && (0, F.jsx)("div", {
                                className: "mt-3",
                                children: (0, F.jsx)(me.Z, {
                                    placeholder: "First Name",
                                    value: p,
                                    onChange: function(e) {
                                        return m(e.target.value)
                                    },
                                    error: R,
                                    InputProps: {
                                        classes: z,
                                        inputProps: {
                                            "aria-label": "email first name input"
                                        }
                                    },
                                    className: "EmailTextField CardStyle",
                                    style: {
                                        borderRadius: D,
                                        border: "2px solid ".concat(W.text.color)
                                    }
                                })
                            }), t.show_last_name_field && (0, F.jsx)("div", {
                                className: "mt-3",
                                children: (0, F.jsx)(me.Z, {
                                    placeholder: "Last Name",
                                    value: f,
                                    onChange: function(e) {
                                        return h(e.target.value)
                                    },
                                    error: R,
                                    InputProps: {
                                        classes: z,
                                        inputProps: {
                                            "aria-label": "email last name input"
                                        }
                                    },
                                    className: "EmailTextField CardStyle",
                                    style: {
                                        borderRadius: D,
                                        border: "2px solid ".concat(W.text.color)
                                    }
                                })
                            }), R && (0, F.jsx)(ie.Z, {
                                tag: "center",
                                style: {
                                    marginTop: 6
                                },
                                children: "Name field cannot be blank."
                            }), V && (0, F.jsx)("div", {
                                className: "mt-3",
                                children: (0, F.jsx)(me.Z, {
                                    placeholder: "Email",
                                    value: n,
                                    onChange: function(e) {
                                        return r(e.target.value)
                                    },
                                    error: l,
                                    InputProps: {
                                        classes: z,
                                        inputProps: {
                                            "aria-label": "email input"
                                        }
                                    },
                                    className: "EmailTextField CardStyle",
                                    style: {
                                        borderRadius: D,
                                        border: "2px solid ".concat(W.text.color)
                                    }
                                })
                            }), l && (0, F.jsx)(ie.Z, {
                                tag: "center",
                                style: {
                                    marginTop: 6
                                },
                                children: "Please enter a valid email."
                            }), G && (0, F.jsx)("div", {
                                className: "mt-3",
                                children: (0, F.jsx)(me.Z, {
                                    placeholder: "Phone Number",
                                    value: i,
                                    onChange: function(e) {
                                        return a(e.target.value)
                                    },
                                    error: B,
                                    InputProps: {
                                        classes: z,
                                        inputProps: {
                                            "aria-label": "phone number input"
                                        }
                                    },
                                    className: "EmailTextField CardStyle",
                                    style: {
                                        borderRadius: D,
                                        border: "2px solid ".concat(W.text.color)
                                    }
                                })
                            }), B && (0, F.jsx)(ie.Z, {
                                tag: "center",
                                style: {
                                    marginTop: 6
                                },
                                children: "Please enter a valid phone number."
                            }), t.show_address_line_1_field && (0, F.jsx)("div", {
                                className: "mt-3",
                                children: (0, F.jsx)(me.Z, {
                                    placeholder: "Address",
                                    value: b,
                                    onChange: function(e) {
                                        return x(e.target.value)
                                    },
                                    InputProps: {
                                        classes: z,
                                        inputProps: {
                                            "aria-label": "email address line 1 input"
                                        }
                                    },
                                    className: "EmailTextField CardStyle",
                                    style: {
                                        borderRadius: D,
                                        border: "2px solid ".concat(W.text.color)
                                    }
                                })
                            }), t.show_address_line_2_field && (0, F.jsx)("div", {
                                className: "mt-3",
                                children: (0, F.jsx)(me.Z, {
                                    placeholder: "Apt. / Suite (optional)",
                                    value: v,
                                    onChange: function(e) {
                                        return y(e.target.value)
                                    },
                                    InputProps: {
                                        classes: z,
                                        inputProps: {
                                            "aria-label": "email address line 2 input"
                                        }
                                    },
                                    className: "EmailTextField CardStyle",
                                    style: {
                                        borderRadius: D,
                                        border: "2px solid ".concat(W.text.color)
                                    }
                                })
                            }), t.show_city_field && (0, F.jsx)("div", {
                                className: "mt-3",
                                children: (0, F.jsx)(me.Z, {
                                    placeholder: "City / Town",
                                    value: k,
                                    onChange: function(e) {
                                        return Z(e.target.value)
                                    },
                                    InputProps: {
                                        classes: z,
                                        inputProps: {
                                            "aria-label": "email city input"
                                        }
                                    },
                                    className: "EmailTextField CardStyle",
                                    style: {
                                        borderRadius: D,
                                        border: "2px solid ".concat(W.text.color)
                                    }
                                })
                            }), t.show_region_field && (0, F.jsx)("div", {
                                children: K || Y ? (0, F.jsx)("div", {
                                    className: "mt-3",
                                    children: (0, F.jsx)(Be, {
                                        fullWidth: !0,
                                        disableUnderline: !0,
                                        value: j,
                                        onChange: function(e) {
                                            C(e.target.value)
                                        },
                                        children: K ? (0, F.jsxs)(F.Fragment, {
                                            children: [(0, F.jsx)("option", {
                                                hidden: !0,
                                                children: "Select State"
                                            }), Pe.xv.map((function(e) {
                                                return (0, F.jsx)("option", {
                                                    value: e.label,
                                                    children: e.label
                                                }, e.code)
                                            }))]
                                        }) : (0, F.jsxs)(F.Fragment, {
                                            children: [(0, F.jsx)("option", {
                                                hidden: !0,
                                                children: "Select Province"
                                            }), Pe.eX.map((function(e) {
                                                return (0, F.jsx)("option", {
                                                    value: e.label,
                                                    children: e.label
                                                }, e.code)
                                            }))]
                                        })
                                    })
                                }) : (0, F.jsx)("div", {
                                    className: "mt-3",
                                    children: (0, F.jsx)(me.Z, {
                                        placeholder: "State / Province / Region",
                                        value: j,
                                        onChange: function(e) {
                                            return C(e.target.value)
                                        },
                                        InputProps: {
                                            classes: z,
                                            inputProps: {
                                                "aria-label": "email region input"
                                            }
                                        },
                                        className: "EmailTextField CardStyle",
                                        style: {
                                            borderRadius: D,
                                            border: "2px solid ".concat(W.text.color)
                                        }
                                    })
                                })
                            }), t.show_postal_code_field && (0, F.jsx)("div", {
                                className: "mt-3",
                                children: (0, F.jsx)(me.Z, {
                                    placeholder: "Zip / Postal Code",
                                    value: w,
                                    onChange: function(e) {
                                        return S(e.target.value)
                                    },
                                    InputProps: {
                                        classes: z,
                                        inputProps: {
                                            "aria-label": "email postal code input"
                                        }
                                    },
                                    className: "EmailTextField CardStyle",
                                    style: {
                                        border: "2px solid ".concat(W.text.color)
                                    }
                                })
                            }), t.show_country_field && (0, F.jsx)("div", {
                                className: "mt-3",
                                children: (0, F.jsxs)(Be, {
                                    fullWidth: !0,
                                    disableUnderline: !0,
                                    name: "country",
                                    value: I,
                                    onChange: function(e) {
                                        P(e.target.value)
                                    },
                                    children: [(0, F.jsx)("option", {
                                        hidden: !0,
                                        children: "Select Country"
                                    }), Pe.od.map((function(e) {
                                        return (0, F.jsx)("option", {
                                            value: e.label,
                                            children: e.label
                                        }, "option-".concat(e.code))
                                    }))]
                                })
                            }), t.show_birthdate_field && (0, F.jsx)(we._, {
                                dateAdapter: Ie.y,
                                children: (0, F.jsx)("div", {
                                    className: "mt-3 ",
                                    children: (0, F.jsx)(Se.M, {
                                        value: T,
                                        onChange: function(e) {
                                            if (!M) {
                                                var t = new Date(e);
                                                N(t)
                                            }
                                        },
                                        disableFuture: !0,
                                        renderInput: function(e) {
                                            return e.inputProps.placeholder = "Birthday", (0, F.jsx)(me.Z, (0, o.Z)((0, o.Z)({}, e), {}, {
                                                className: "EmailTextField CardStyle !pr-3 !box-border !h-full",
                                                style: {
                                                    borderRadius: D,
                                                    border: "2px solid ".concat(W.text.color)
                                                },
                                                InputProps: (0, o.Z)((0, o.Z)({}, e.InputProps), {}, {
                                                    classes: z
                                                })
                                            }))
                                        },
                                        inputProps: {
                                            readOnly: !0
                                        }
                                    })
                                })
                            }), t.show_custom_field && !!t.custom_field_text && (0, F.jsx)("div", {
                                className: "mt-3 ",
                                children: (0, F.jsx)(me.Z, {
                                    placeholder: t.custom_field_text,
                                    value: L,
                                    onChange: function(e) {
                                        return E(e.target.value)
                                    },
                                    InputProps: {
                                        classes: z,
                                        inputProps: {
                                            "aria-label": "email custom input"
                                        }
                                    },
                                    className: "EmailTextField CardStyle",
                                    style: {
                                        borderRadius: D,
                                        border: "2px solid ".concat(W.text.color)
                                    }
                                })
                            }), O && (0, F.jsx)(ie.Z, {
                                tag: "center",
                                style: {
                                    marginTop: 6
                                },
                                children: "Field cannot be blank."
                            }), (0, F.jsx)("div", {
                                className: "mt-4",
                                children: (0, F.jsx)(oe.Z, {
                                    variant: "contained",
                                    type: "submit",
                                    className: "EmailButton CardStyle",
                                    invert: !0,
                                    style: {
                                        borderRadius: D
                                    },
                                    children: t.submit_text || g.gb
                                })
                            })]
                        })
                    }), t.legal_enabled && !!t.legal_text && (0, F.jsx)(ie.Z, {
                        tag: "center",
                        className: "mt-2 text-12",
                        children: (0, F.jsx)(ie.Z, {
                            tag: t.legal_url ? "a" : "div",
                            href: M ? "#" : t.legal_url,
                            target: M ? void 0 : "_blank",
                            rel: M ? void 0 : "noreferrer",
                            children: t.legal_text
                        })
                    })]
                })
            }
            var qe = function(e) {
                    var t = e.block,
                        n = e.blockId,
                        r = (0, s.useContext)(A.Z),
                        o = r.currentPageId,
                        c = r.isComponent,
                        u = r.firebaseUid,
                        d = r.setCommunityDialogState,
                        p = r.socialReferrer,
                        m = r.subscriptionPlanIds,
                        f = (0, s.useState)(!1),
                        h = (0, a.Z)(f, 2),
                        b = h[0],
                        x = h[1],
                        v = (0, s.useState)(""),
                        y = (0, a.Z)(v, 2),
                        k = y[0],
                        _ = y[1],
                        j = (0, s.useState)(""),
                        C = (0, a.Z)(j, 2),
                        w = C[0],
                        S = C[1],
                        I = (0, s.useState)(!1),
                        P = (0, a.Z)(I, 2),
                        N = P[0],
                        L = P[1],
                        E = (0, s.useState)(""),
                        R = (0, a.Z)(E, 2),
                        O = R[0],
                        B = R[1],
                        M = (0, s.useState)(""),
                        U = (0, a.Z)(M, 2),
                        W = U[0],
                        D = U[1],
                        z = (0, s.useState)(""),
                        q = (0, a.Z)(z, 2),
                        H = q[0],
                        $ = q[1],
                        V = (0, s.useState)(""),
                        G = (0, a.Z)(V, 2),
                        Y = G[0],
                        X = G[1],
                        J = (0, s.useState)(""),
                        ee = (0, a.Z)(J, 2),
                        te = ee[0],
                        ne = ee[1],
                        re = (0, s.useState)(""),
                        oe = (0, a.Z)(re, 2),
                        ie = oe[0],
                        ae = oe[1],
                        le = (0, s.useState)(""),
                        se = (0, a.Z)(le, 2),
                        ce = se[0],
                        ue = se[1],
                        de = (0, s.useState)(""),
                        pe = (0, a.Z)(de, 2),
                        me = pe[0],
                        fe = pe[1],
                        he = (0, s.useState)(Pe.od[0].label),
                        be = (0, a.Z)(he, 2),
                        xe = be[0],
                        ge = be[1],
                        ve = (0, s.useState)(""),
                        ye = (0, a.Z)(ve, 2),
                        ke = ye[0],
                        _e = ye[1],
                        Ze = (0, s.useState)(""),
                        je = (0, a.Z)(Ze, 2),
                        Ce = je[0],
                        we = je[1],
                        Se = (0, s.useState)(!1),
                        Ie = (0, a.Z)(Se, 2),
                        Ne = Ie[0],
                        Le = Ie[1],
                        Ee = (0, s.useState)(!1),
                        Re = (0, a.Z)(Ee, 2),
                        Oe = Re[0],
                        Be = Re[1],
                        Me = (0, s.useState)(!1),
                        Ae = (0, a.Z)(Me, 2),
                        De = Ae[0],
                        ze = Ae[1],
                        qe = (0, s.useCallback)((0, l.Z)((0, i.Z)().mark((function e() {
                            var r, a, l, s, f, h, b, v, y, _, j, C, S, I, P;
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!c) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (r = t.information_type, a = t.show_email_field, l = t.show_phone_number_field, s = r ? r === g.I1.EMAIL : a, f = r ? r === g.I1.SMS : l, h = t.form_style === g.jz.LINK, b = !s || s && K()(k), v = !f || f && (!/[a-zA-Z]/g.test(i = w) && i.length >= 7), y = h || !t.show_name_field || t.show_name_field && !!O, _ = h || !t.show_first_name_field || t.show_first_name_field && !!W, j = h || !t.show_last_name_field || t.show_last_name_field && !!H, C = h || !t.show_custom_field || !t.custom_field_text || t.show_custom_field && !!ke, S = !1, b ? L(!1) : (L(!0), S = !0), v ? ze(!1) : (ze(!0), S = !0), y && _ && j ? Le(!1) : (Le(!0), S = !0), C ? Be(!1) : (Be(!0), S = !0), !S) {
                                            e.next = 19;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 19:
                                        if (!(Ue(O) || Ue(k) || Ue(ke))) {
                                            e.next = 23;
                                            break
                                        }
                                        return x(!0), null !== t && void 0 !== t && t.join_community_prompt_enabled && d((function() {
                                            return {
                                                title: t.success_message,
                                                open: !0,
                                                acquisitionChannel: "email_sms_block"
                                            }
                                        })), e.abrupt("return");
                                    case 23:
                                        if ("mailchimp" !== t.email_destination) {
                                            e.next = 28;
                                            break
                                        }
                                        return e.next = 26, (0, Z.Z)("user_profile", {
                                            action: "add_mailchimp_email",
                                            firebase_uid: u,
                                            list_id: t.mailchimp.id,
                                            email: k,
                                            full_name: O || null,
                                            custom: ke || null
                                        });
                                    case 26:
                                        e.next = 36;
                                        break;
                                    case 28:
                                        if ("zapier" !== t.email_destination || !t.zapier_webhook_url || !(0, T.ZP)(T.h6.ZAPIER, m)) {
                                            e.next = 33;
                                            break
                                        }
                                        return e.next = 31, (0, Z.Z)("user_profile", {
                                            action: "send_email_sms_to_zapier_webhook",
                                            webhook_url: t.zapier_webhook_url,
                                            email: s ? k : null,
                                            sms: f ? w : null,
                                            full_name: O || null,
                                            custom: ke || null,
                                            title: t.placeholder_text ? t.placeholder_text : null,
                                            block_id: n
                                        });
                                    case 31:
                                        e.next = 36;
                                        break;
                                    case 33:
                                        if ("substack" !== t.email_destination || !t.substack_url) {
                                            e.next = 36;
                                            break
                                        }
                                        return e.next = 36, (0, Z.Z)("user_profile", {
                                            action: "subscribe_to_substack",
                                            substack_url: t.substack_url,
                                            email: k
                                        });
                                    case 36:
                                        return I = (new Date).getTime() / 1e3, P = O || "".concat(W, " ").concat(H).trim(), e.next = 40, (0, Z.Z)("link_actions", {
                                            action: "add_email_to_list",
                                            email: k || null,
                                            time_added: I,
                                            firebase_uid: u,
                                            full_name: P || null,
                                            birthdate: Ce || null,
                                            address_line_1: Y || null,
                                            address_line_2: te || null,
                                            city: ie || null,
                                            region: ce || null,
                                            country: xe || null,
                                            postal_code: me || null,
                                            custom: ke || null,
                                            phone_number: w || null,
                                            origin_platform: p,
                                            source_app: Te.Z.LINK_IN_BIO,
                                            source_item_id: o,
                                            source_sub_item_id: n
                                        });
                                    case 40:
                                        x(!0), null !== t && void 0 !== t && t.join_community_prompt_enabled && d((function() {
                                            return {
                                                title: t.success_message,
                                                open: !0,
                                                acquisitionChannel: "email_sms_block"
                                            }
                                        }));
                                    case 42:
                                    case "end":
                                        return e.stop()
                                }
                                var i
                            }), e)
                        }))), [Y, te, Ce, t, n, ie, xe, o, ke, k, u, W, O, c, H, w, me, d, p, ce, m]);
                    return Q.Z[g.$W.EMAIL](t) ? t.form_style === g.jz.LINK ? (0, F.jsx)(Fe, {
                        block: t,
                        email: k,
                        setEmail: _,
                        phoneNumber: w,
                        setPhoneNumber: S,
                        emailError: N,
                        phoneNumberError: De,
                        onSubmit: qe,
                        submitted: b,
                        blockId: n
                    }) : (0, F.jsx)(We, {
                        block: t,
                        email: k,
                        setEmail: _,
                        phoneNumber: w,
                        setPhoneNumber: S,
                        emailError: N,
                        onSubmit: qe,
                        submitted: b,
                        fullName: O,
                        setFullName: B,
                        firstName: W,
                        setFirstName: D,
                        lastName: H,
                        setLastName: $,
                        addressLine1: Y,
                        setAddressLine1: X,
                        addressLine2: te,
                        setAddressLine2: ne,
                        city: ie,
                        setCity: ae,
                        region: ce,
                        setRegion: ue,
                        postalCode: me,
                        setPostalCode: fe,
                        country: xe,
                        setCountry: ge,
                        birthdate: Ce,
                        setBirthdate: we,
                        customFieldValue: ke,
                        setCustomFieldValue: _e,
                        nameError: Ne,
                        customFieldError: Oe,
                        phoneNumberError: De,
                        blockId: n
                    }) : null
                },
                He = n(25191),
                $e = n(52730),
                Ve = n(24566),
                Ge = n(61035);

            function Ke(e) {
                var t = e.block,
                    n = (0, s.useContext)(U.Z),
                    r = (0, s.useContext)(A.Z),
                    o = r.firebaseUid,
                    i = r.isComponent,
                    l = (0, $e.Z)(o),
                    c = (0, a.Z)(l, 1)[0],
                    u = (0, Ve.B)(t.followers_counts),
                    d = (0, He.Z)({
                        firebaseFollowersCounts: u,
                        backendFollowersCounts: c
                    });
                return null !== d && void 0 !== d && d.length || i !== g.w6 ? null !== d && void 0 !== d && d.length ? (0, F.jsx)("div", {
                    className: "flex items-center gap-2",
                    children: d.filter((function(e) {
                        var t = e.display,
                            n = e.count;
                        return !!t && null !== n && void 0 !== n
                    })).map((function(e) {
                        var t = e.count,
                            r = e.platform,
                            o = e.url,
                            i = Ge.Z[r].Icon;
                        return (0, F.jsx)("a", {
                            "aria-label": "profile followers ".concat(r, " - link"),
                            href: o,
                            rel: "noreferrer",
                            target: "_blank",
                            className: (0, H.Z)({
                                "cursor-pointer": !!o
                            }, "flex-1 text-center no-underline"),
                            children: (0, F.jsx)(re.Z, {
                                className: "!p-2",
                                children: (0, F.jsxs)(ie.Z, {
                                    children: [(0, F.jsx)(i, {
                                        fill: n.text.color,
                                        "aria-label": "profile followers ".concat(r, " logo"),
                                        className: "h-6 w-6"
                                    }), (0, F.jsx)("div", {
                                        children: (0, _.CE)(t)
                                    })]
                                })
                            })
                        }, r)
                    }))
                }) : null : (0, F.jsx)(te.Z, {
                    title: "Follower count",
                    cta: "Connect a social account to remove this temporary placeholder."
                })
            }
            var Ye = n(74668),
                Xe = n(96874),
                Je = ["title", "titleId"];

            function Qe() {
                return Qe = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, Qe.apply(this, arguments)
            }

            function et(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }

            function tt(e, t) {
                var n = e.title,
                    r = e.titleId,
                    o = et(e, Je);
                return s.createElement("svg", Qe({
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    width: "24pt",
                    height: "24pt",
                    viewBox: "0 0 24 24",
                    ref: t,
                    "aria-labelledby": r
                }, o), n ? s.createElement("title", {
                    id: r
                }, n) : null, s.createElement("defs", null, s.createElement("radialGradient", {
                    id: "radial0",
                    gradientUnits: "userSpaceOnUse",
                    cx: 69.445,
                    cy: 150.625427,
                    fx: 69.445,
                    fy: 150.625427,
                    r: 160.888077,
                    gradientTransform: "matrix(1,0,0,1,0.000000000000000111,0.000000000000000111)"
                }, s.createElement("stop", {
                    offset: 0,
                    style: {
                        stopColor: "rgb(100%,86.666667%,33.333334%)",
                        stopOpacity: 1
                    }
                }), s.createElement("stop", {
                    offset: .328,
                    style: {
                        stopColor: "rgb(100%,32.941177%,24.705882%)",
                        stopOpacity: 1
                    }
                }), s.createElement("stop", {
                    offset: .348,
                    style: {
                        stopColor: "rgb(98.823529%,32.156864%,27.058825%)",
                        stopOpacity: 1
                    }
                }), s.createElement("stop", {
                    offset: .504,
                    style: {
                        stopColor: "rgb(90.196079%,27.843139%,44.313726%)",
                        stopOpacity: 1
                    }
                }), s.createElement("stop", {
                    offset: .643,
                    style: {
                        stopColor: "rgb(83.529413%,24.313726%,56.862748%)",
                        stopOpacity: 1
                    }
                }), s.createElement("stop", {
                    offset: .761,
                    style: {
                        stopColor: "rgb(80.000001%,22.352941%,64.313728%)",
                        stopOpacity: 1
                    }
                }), s.createElement("stop", {
                    offset: .841,
                    style: {
                        stopColor: "rgb(78.431374%,21.568628%,67.058825%)",
                        stopOpacity: 1
                    }
                })), s.createElement("radialGradient", {
                    id: "radial1",
                    gradientUnits: "userSpaceOnUse",
                    cx: 42.23317,
                    cy: 19.852751,
                    fx: 42.23317,
                    fy: 19.852751,
                    r: 106.829918,
                    gradientTransform: "matrix(1,0,0,1,0.000000000000000111,0.000000000000000111)"
                }, s.createElement("stop", {
                    offset: 0,
                    style: {
                        stopColor: "rgb(25.490198%,40.784314%,78.823531%)",
                        stopOpacity: 1
                    }
                }), s.createElement("stop", {
                    offset: .999,
                    style: {
                        stopColor: "rgb(25.490198%,40.784314%,78.823531%)",
                        stopOpacity: 0
                    }
                })), s.createElement("radialGradient", {
                    id: "radial2",
                    gradientUnits: "userSpaceOnUse",
                    cx: 69.445,
                    cy: 150.625427,
                    fx: 69.445,
                    fy: 150.625427,
                    r: 160.888077,
                    gradientTransform: "matrix(0.138698,0,0,0.138698,0.072,0.072)"
                }, s.createElement("stop", {
                    offset: 0,
                    style: {
                        stopColor: "rgb(100%,86.666667%,33.333334%)",
                        stopOpacity: 1
                    }
                }), s.createElement("stop", {
                    offset: .328,
                    style: {
                        stopColor: "rgb(100%,32.941177%,24.705882%)",
                        stopOpacity: 1
                    }
                }), s.createElement("stop", {
                    offset: .348,
                    style: {
                        stopColor: "rgb(98.823529%,32.156864%,27.058825%)",
                        stopOpacity: 1
                    }
                }), s.createElement("stop", {
                    offset: .504,
                    style: {
                        stopColor: "rgb(90.196079%,27.843139%,44.313726%)",
                        stopOpacity: 1
                    }
                }), s.createElement("stop", {
                    offset: .643,
                    style: {
                        stopColor: "rgb(83.529413%,24.313726%,56.862748%)",
                        stopOpacity: 1
                    }
                }), s.createElement("stop", {
                    offset: .761,
                    style: {
                        stopColor: "rgb(80.000001%,22.352941%,64.313728%)",
                        stopOpacity: 1
                    }
                }), s.createElement("stop", {
                    offset: .841,
                    style: {
                        stopColor: "rgb(78.431374%,21.568628%,67.058825%)",
                        stopOpacity: 1
                    }
                })), s.createElement("radialGradient", {
                    id: "radial3",
                    gradientUnits: "userSpaceOnUse",
                    cx: 42.23317,
                    cy: 19.852751,
                    fx: 42.23317,
                    fy: 19.852751,
                    r: 106.829918,
                    gradientTransform: "matrix(0.138698,0,0,0.138698,0.072,0.072)"
                }, s.createElement("stop", {
                    offset: 0,
                    style: {
                        stopColor: "rgb(25.490198%,40.784314%,78.823531%)",
                        stopOpacity: 1
                    }
                }), s.createElement("stop", {
                    offset: .999,
                    style: {
                        stopColor: "rgb(25.490198%,40.784314%,78.823531%)",
                        stopOpacity: 0
                    }
                }))), s.createElement("g", {
                    id: "surface3533300"
                }, s.createElement("path", {
                    style: {
                        fillRule: "nonzero",
                        fill: "url(#radial0)",
                        strokeWidth: 10,
                        strokeLinecap: "butt",
                        strokeLinejoin: "round",
                        stroke: "rgb(100%,100%,100%)",
                        strokeOpacity: 1,
                        strokeMiterlimit: 10
                    },
                    d: "M 121.880646 150.466877 L 50.232006 150.523204 C 34.460292 150.551368 21.561284 137.65236 21.53312 121.880646 L 21.476793 50.232006 C 21.448629 34.460292 34.347637 21.561284 50.091187 21.53312 L 121.767991 21.476793 C 137.539705 21.448629 150.438713 34.347637 150.466877 50.091187 L 150.523204 121.767991 C 150.551368 137.539705 137.65236 150.438713 121.880646 150.466877 Z M 121.880646 150.466877 ",
                    transform: "matrix(0.138698,0,0,0.138698,0.072,0.072)"
                }), s.createElement("path", {
                    style: {
                        fillRule: "nonzero",
                        fill: "url(#radial1)",
                        strokeWidth: 10,
                        strokeLinecap: "butt",
                        strokeLinejoin: "round",
                        stroke: "rgb(100%,100%,100%)",
                        strokeOpacity: 1,
                        strokeMiterlimit: 10
                    },
                    d: "M 121.880646 150.466877 L 50.232006 150.523204 C 34.460292 150.551368 21.561284 137.65236 21.53312 121.880646 L 21.476793 50.232006 C 21.448629 34.460292 34.347637 21.561284 50.091187 21.53312 L 121.767991 21.476793 C 137.539705 21.448629 150.438713 34.347637 150.466877 50.091187 L 150.523204 121.767991 C 150.551368 137.539705 137.65236 150.438713 121.880646 150.466877 Z M 121.880646 150.466877 ",
                    transform: "matrix(0.138698,0,0,0.138698,0.072,0.072)"
                }), s.createElement("path", {
                    style: {
                        fillRule: "nonzero",
                        fill: "rgb(100%,100%,100%)",
                        fillOpacity: 1,
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "round",
                        stroke: "rgb(100%,100%,100%)",
                        strokeOpacity: 1,
                        strokeMiterlimit: 10
                    },
                    d: "M 85.999999 111.093921 C 72.171586 111.093921 60.906076 99.828411 60.906076 85.999999 C 60.906076 72.171586 72.171586 60.906076 85.999999 60.906076 C 99.828411 60.906076 111.093921 72.171586 111.093921 85.999999 C 111.093921 99.828411 99.828411 111.093921 85.999999 111.093921 Z M 85.999999 68.087838 C 76.114514 68.087838 68.087838 76.114514 68.087838 85.999999 C 68.087838 95.885483 76.114514 103.912159 85.999999 103.912159 C 95.885483 103.912159 103.912159 95.885483 103.912159 85.999999 C 103.912159 76.114514 95.885483 68.087838 85.999999 68.087838 Z M 85.999999 68.087838 ",
                    transform: "matrix(0.138698,0,0,0.138698,0.072,0.072)"
                }), s.createElement("path", {
                    style: {
                        fillRule: "nonzero",
                        fill: "rgb(100%,100%,100%)",
                        fillOpacity: 1,
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "round",
                        stroke: "rgb(100%,100%,100%)",
                        strokeOpacity: 1,
                        strokeMiterlimit: 10
                    },
                    d: "M 107.488958 59.131758 C 107.488958 56.146398 109.911042 53.752477 112.868239 53.752477 C 115.853599 53.752477 118.24752 56.146398 118.24752 59.131758 C 118.24752 62.088955 115.853599 64.511039 112.868239 64.511039 C 109.911042 64.511039 107.488958 62.088955 107.488958 59.131758 Z M 107.488958 59.131758 ",
                    transform: "matrix(0.138698,0,0,0.138698,0.072,0.072)"
                }), s.createElement("path", {
                    style: {
                        fillRule: "nonzero",
                        fill: "rgb(100%,100%,100%)",
                        fillOpacity: 1,
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeLinejoin: "round",
                        stroke: "rgb(100%,100%,100%)",
                        strokeOpacity: 1,
                        strokeMiterlimit: 10
                    },
                    d: "M 107.488958 132.58288 L 64.511039 132.58288 C 50.682626 132.58288 39.417117 121.345535 39.417117 107.488958 L 39.417117 64.511039 C 39.417117 50.654462 50.682626 39.417117 64.511039 39.417117 L 107.488958 39.417117 C 121.317371 39.417117 132.58288 50.654462 132.58288 64.511039 L 132.58288 107.488958 C 132.58288 121.345535 121.317371 132.58288 107.488958 132.58288 Z M 64.511039 46.570715 C 54.625554 46.570715 46.570715 54.625554 46.570715 64.511039 L 46.570715 107.488958 C 46.570715 117.374443 54.625554 125.429282 64.511039 125.429282 L 107.488958 125.429282 C 117.374443 125.429282 125.429282 117.374443 125.429282 107.488958 L 125.429282 64.511039 C 125.429282 54.625554 117.374443 46.570715 107.488958 46.570715 Z M 64.511039 46.570715 ",
                    transform: "matrix(0.138698,0,0,0.138698,0.072,0.072)"
                }), s.createElement("path", {
                    style: {
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "url(#radial2)"
                    },
                    d: "M 16.976562 20.941406 L 7.039062 20.949219 C 4.851562 20.953125 3.0625 19.164062 3.058594 16.976562 L 3.050781 7.039062 C 3.046875 4.851562 4.835938 3.0625 7.019531 3.058594 L 16.960938 3.050781 C 19.148438 3.046875 20.9375 4.835938 20.941406 7.019531 L 20.949219 16.960938 C 20.953125 19.148438 19.164062 20.9375 16.976562 20.941406 Z M 16.976562 20.941406 "
                }), s.createElement("path", {
                    style: {
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "url(#radial3)"
                    },
                    d: "M 16.976562 20.941406 L 7.039062 20.949219 C 4.851562 20.953125 3.0625 19.164062 3.058594 16.976562 L 3.050781 7.039062 C 3.046875 4.851562 4.835938 3.0625 7.019531 3.058594 L 16.960938 3.050781 C 19.148438 3.046875 20.9375 4.835938 20.941406 7.019531 L 20.949219 16.960938 C 20.953125 19.148438 19.164062 20.9375 16.976562 20.941406 Z M 16.976562 20.941406 "
                }), s.createElement("path", {
                    style: {
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "rgb(100%,100%,100%)",
                        fillOpacity: 1
                    },
                    d: "M 12 15.480469 C 10.082031 15.480469 8.519531 13.917969 8.519531 12 C 8.519531 10.082031 10.082031 8.519531 12 8.519531 C 13.917969 8.519531 15.480469 10.082031 15.480469 12 C 15.480469 13.917969 13.917969 15.480469 12 15.480469 Z M 12 9.515625 C 10.628906 9.515625 9.515625 10.628906 9.515625 12 C 9.515625 13.371094 10.628906 14.484375 12 14.484375 C 13.371094 14.484375 14.484375 13.371094 14.484375 12 C 14.484375 10.628906 13.371094 9.515625 12 9.515625 Z M 12 9.515625 "
                }), s.createElement("path", {
                    style: {
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "rgb(100%,100%,100%)",
                        fillOpacity: 1
                    },
                    d: "M 16.472656 8.273438 C 16.472656 8.683594 16.140625 9.019531 15.726562 9.019531 C 15.316406 9.019531 14.980469 8.683594 14.980469 8.273438 C 14.980469 7.859375 15.316406 7.527344 15.726562 7.527344 C 16.140625 7.527344 16.472656 7.859375 16.472656 8.273438 Z M 16.472656 8.273438 "
                }), s.createElement("path", {
                    style: {
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "rgb(100%,100%,100%)",
                        fillOpacity: 1
                    },
                    d: "M 14.980469 18.460938 L 9.019531 18.460938 C 7.101562 18.460938 5.539062 16.902344 5.539062 14.980469 L 5.539062 9.019531 C 5.539062 7.097656 7.101562 5.539062 9.019531 5.539062 L 14.980469 5.539062 C 16.898438 5.539062 18.460938 7.097656 18.460938 9.019531 L 18.460938 14.980469 C 18.460938 16.902344 16.898438 18.460938 14.980469 18.460938 Z M 9.019531 6.53125 C 7.648438 6.53125 6.53125 7.648438 6.53125 9.019531 L 6.53125 14.980469 C 6.53125 16.351562 7.648438 17.46875 9.019531 17.46875 L 14.980469 17.46875 C 16.351562 17.46875 17.46875 16.351562 17.46875 14.980469 L 17.46875 9.019531 C 17.46875 7.648438 16.351562 6.53125 14.980469 6.53125 Z M 9.019531 6.53125 "
                })))
            }
            var nt = s.forwardRef(tt),
                rt = (n.p, n(90322)),
                ot = n(26907);

            function it(e) {
                var t = e.friend,
                    n = e.userFriend,
                    r = (0, s.useContext)(A.Z).isComponent,
                    o = (0, s.useState)(!1),
                    u = (0, a.Z)(o, 2),
                    d = u[0],
                    p = u[1],
                    m = (0, s.useCallback)(function() {
                        var e = (0, l.Z)((0, i.Z)().mark((function e(o) {
                            var a;
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!r && !d && o) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return p(!0), a = ["twitter", "instagram", "tiktok"], (t.firebase_uid || n.firebase_uid || a.includes(n.platform) && n.platform_verified) && (0, Z.Z)("user_profile", {
                                            action: "track_friends_link_click",
                                            friend_id: t.id ? t.id : n.id
                                        }), e.next = 7, (0, _._v)(250);
                                    case 7:
                                        window.location.href = o;
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [t, n, r, d]);
                if (!t || !n) return null;
                var f = t.profile_picture_url;
                f || (f = n.profile_picture_url), f || (f = x.Z);
                var h = n.nickname;
                h || (h = null === t || void 0 === t ? void 0 : t.beacons_username), h || (h = null === n || void 0 === n ? void 0 : n.beacons_username), h || (h = null === n || void 0 === n ? void 0 : n.platform_username), h || (h = "");
                var b = null;
                r || (t.firebase_uid || n.firebase_uid ? b = "".concat("https://beacons.ai", "/").concat(t.beacons_username) : "twitter" === n.platform && n.platform_verified ? b = "https://twitter.com/".concat(n.platform_username) : "instagram" === n.platform && n.platform_verified ? b = "https://instagram.com/".concat(n.platform_username) : "tiktok" === n.platform && n.platform_verified && (b = "https://tiktok.com/@".concat(n.platform_username)));
                var g = null;
                t.firebase_uid ? g = (0, F.jsx)(ot.Z, {
                    verified: !!t.firebase_uid
                }) : n.firebase_uid ? g = (0, F.jsx)(ot.Z, {
                    verified: !!n.firebase_uid
                }) : "twitter" === n.platform && n.platform_verified ? g = (0, F.jsx)(Ye.Z, {
                    style: {
                        fill: "#1DA1F2",
                        color: "#1DA1F2",
                        height: 20.21
                    },
                    stroke: "white",
                    strokeWidth: 1
                }) : "instagram" === n.platform && n.platform_verified ? g = (0, F.jsx)(nt, {
                    style: {
                        height: 19
                    }
                }) : "tiktok" === n.platform && n.platform_verified && (g = (0, F.jsx)(rt.r, {
                    style: {
                        height: 17,
                        width: 17,
                        stroke: "white",
                        strokeWidth: 10
                    }
                }));
                return (0, F.jsx)(c.ZP, {
                    item: !0,
                    children: (0, F.jsx)("a", {
                        href: null,
                        style: {
                            textDecoration: "none",
                            cursor: "pointer"
                        },
                        onClick: function() {
                            return m(b)
                        },
                        onAuxClick: function() {
                            return m(b)
                        },
                        children: (0, F.jsxs)("div", {
                            children: [(0, F.jsx)("div", {
                                children: (0, F.jsx)(Xe.Z, {
                                    overlap: "circular",
                                    badgeContent: g,
                                    children: (0, F.jsx)("img", {
                                        src: f,
                                        style: {
                                            width: 80,
                                            height: 80,
                                            borderRadius: 1e4
                                        },
                                        alt: "friend"
                                    })
                                })
                            }), (0, F.jsx)("div", {
                                children: (0, F.jsx)(ie.Z, {
                                    style: {
                                        maxWidth: 90,
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        borderRadius: 0,
                                        textAlign: "center"
                                    },
                                    children: h
                                })
                            })]
                        })
                    })
                })
            }
            var at = function(e) {
                    var t = e.block,
                        n = e.blockId,
                        r = (0, s.useContext)(A.Z).isComponent,
                        o = (0, s.useState)([]),
                        u = (0, a.Z)(o, 2),
                        d = u[0],
                        p = u[1],
                        m = (0, s.useRef)(void 0);
                    (0, s.useEffect)((function() {
                        var e = function() {
                            var e = (0, l.Z)((0, i.Z)().mark((function e() {
                                var n, r;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (n = !0, null !== m && void 0 !== m && m.current && t.friends_list.length === m.current.length && (n = t.friends_list.some((function(e, t) {
                                                    return !!e.firebase_uid && m.current.findIndex((function(t) {
                                                        return e.firebase_uid === t.firebase_uid
                                                    })) !== t
                                                }))), n) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            return e.next = 6, (0, Z.Z)("user_profile", {
                                                action: "get_friends_list_info",
                                                friends_list: t.friends_list
                                            });
                                        case 6:
                                            r = e.sent, p(r.data.info), m.current = r.data.info;
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [t.friends_list, r]);
                    var f = Q.Z[g.$W.FRIENDS](t),
                        h = !!d && !!d.length || f;
                    return h || r !== g.w6 ? h ? (0, F.jsxs)(re.Z, {
                        "data-testid": n,
                        children: [!!t.friends_title && (0, F.jsx)(ie.Z, {
                            tag: "center",
                            style: {
                                fontSize: 18,
                                fontWeight: "bold"
                            },
                            children: t.friends_title
                        }), !!t.friends_subtitle && (0, F.jsx)(ie.Z, {
                            tag: "center",
                            className: "MarginTopS",
                            style: {
                                fontSize: 14
                            },
                            children: t.friends_subtitle
                        }), (0, F.jsx)("div", {
                            className: "MarginTopM",
                            children: (0, F.jsx)(c.ZP, {
                                container: !0,
                                direction: "row",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                spacing: 2,
                                children: d.map((function(e, n) {
                                    return (0, F.jsx)(it, {
                                        friend: e,
                                        userFriend: t.friends_list[n]
                                    }, n)
                                }))
                            })
                        })]
                    }) : null : (0, F.jsx)(te.Z, {
                        title: "Friends",
                        cta: "Add a friend to remove this temporary placeholder."
                    })
                },
                lt = n(54440);

            function st() {
                var e = (0, s.useContext)(A.Z),
                    t = e.cookie_notice,
                    n = e.isComponent,
                    r = (0, s.useContext)(U.Z),
                    o = (0, P.Z)(),
                    i = (0, s.useState)(!0),
                    l = (0, a.Z)(i, 2),
                    c = l[0],
                    u = l[1];
                return n || null === t || void 0 === t || !t.display ? null : (0, F.jsx)(lt.Z, {
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                    },
                    open: c,
                    children: (0, F.jsx)("div", {
                        children: (0, F.jsx)(Le, {
                            ignoreOpacity: !0,
                            children: (0, F.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: o ? "flex-start" : "center"
                                },
                                children: [(0, F.jsxs)(ie.Z, {
                                    children: ["We use cookies to provide you with a great user experience. By using this website, you agree to our", " ", (0, F.jsx)("a", {
                                        href: "https://beacons.ai/i/cookie-notice",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        style: {
                                            color: "inherit"
                                        },
                                        children: "use of cookies."
                                    })]
                                }), (0, F.jsx)(_e.Z, {
                                    size: "small",
                                    onClick: function() {
                                        return u(!1)
                                    },
                                    children: (0, F.jsx)(ke.Z, {
                                        style: {
                                            fill: r.text.color
                                        }
                                    })
                                })]
                            })
                        })
                    })
                })
            }
            var ct = n(9002),
                ut = n(1588),
                dt = n(20890);
            var pt = function(e) {
                    var t = e.profilePicture,
                        n = e.defaultOpacity,
                        r = void 0 === n ? 1 : n,
                        o = e.verified,
                        i = e.width,
                        l = e.fontSize,
                        c = void 0 === l ? "inherit" : l,
                        u = e.username,
                        d = void 0 === u ? "" : u,
                        p = e.num_followers,
                        m = void 0 === p ? -1 : p,
                        f = e.vip,
                        h = e.headerProfilePictureBorderRadius,
                        b = e.headerProfilePictureBorder,
                        x = e.headerProfilePictureColor1,
                        g = (0, s.useState)(r),
                        v = (0, a.Z)(g, 2),
                        y = v[0],
                        k = v[1],
                        Z = "none" === b ? "".concat(x, "00") : x,
                        j = {
                            width: i,
                            height: i,
                            borderRadius: h,
                            opacity: r ? y : "2px solid white",
                            border: "2px solid ".concat(Z)
                        };
                    if (void 0 === o || void 0 === t) return null;
                    var C = "1e4px" === h || 100 === h ? "circular" : "rectangular";
                    return (0, F.jsxs)("div", {
                        children: [(0, F.jsx)(Xe.Z, {
                            overlap: C,
                            badgeContent: (0, F.jsx)(ot.Z, {
                                verified: o,
                                vip: f
                            }),
                            children: (0, F.jsx)("img", {
                                alt: "profile",
                                src: t,
                                style: j,
                                onMouseEnter: function() {
                                    return k(1)
                                },
                                onMouseLeave: function() {
                                    return k(r)
                                }
                            })
                        }), d && (0, F.jsx)("div", {
                            style: {
                                color: "white",
                                opacity: y,
                                marginTop: 5
                            },
                            children: (0, F.jsx)(dt.Z, {
                                variant: "caption",
                                style: {
                                    fontSize: c
                                },
                                children: (0, F.jsx)("strong", {
                                    children: d.split("@")[0]
                                })
                            })
                        }), -1 !== m && (0, F.jsx)("div", {
                            style: {
                                color: "white",
                                opacity: y,
                                marginBottom: 10
                            },
                            children: (0, F.jsx)(dt.Z, {
                                variant: "caption",
                                style: {
                                    fontSize: c
                                },
                                children: "".concat((0, _.CE)(m), " followers")
                            })
                        })]
                    })
                },
                mt = n(38206),
                ft = n(18746),
                ht = n(51247),
                bt = n(47410),
                xt = n(13818),
                gt = n(74425),
                vt = n(90343),
                yt = n(34456),
                kt = n(71129),
                _t = n(1159),
                Zt = n(78274),
                jt = n(91495),
                Ct = n(37088),
                wt = n(31211),
                St = n(37433),
                It = n(28858),
                Pt = n(97637),
                Tt = n(26100),
                Nt = n(20585),
                Lt = n(89907),
                Et = n(78700),
                Rt = n(60385),
                Ot = n(75529),
                Bt = n(80396),
                Mt = n(14264),
                At = n(23684),
                Ut = n(79493),
                Ft = n(38991),
                Wt = n(36615),
                Dt = n(17752),
                zt = n(204),
                qt = n(55223),
                Ht = n(76032),
                $t = n(16251),
                Vt = n(37361),
                Gt = n(59335),
                Kt = n(50671),
                Yt = n(73388),
                Xt = n(39768),
                Jt = n(95790),
                Qt = n(85450),
                en = n(66841),
                tn = n(50141),
                nn = n(80790);

            function rn(e) {
                var t = e.open,
                    n = e.setOpen;
                return (0, F.jsx)(Y.Z, {
                    title: "Sensitive content",
                    subtitle: "User safety is very important to us at Beacons, so we only enable links that are appropriate for all viewers. As a result of our user safety policy, we have not enabled access to this link. Please note that this message may appear differently depending on which platform you were referred from.",
                    open: t,
                    onClose: function() {
                        return n(!1)
                    },
                    primaryButton: {
                        children: "Done",
                        onClick: function() {
                            return n(!1)
                        },
                        intent: "primary"
                    },
                    secondaryButton: {
                        children: "Learn more",
                        href: "https://beacons.notion.site/Beacons-Sensitive-Content-fe752870c74d477b8b7e999272752ef9",
                        target: "_blank",
                        rel: "noreferrer",
                        intent: "secondary"
                    }
                })
            }
            var on = {
                instagram: {
                    label: "Instagram",
                    baseUrl: "instagram.com/",
                    socialIcon: function(e) {
                        return (0, F.jsx)(Tt.r, {
                            style: e
                        })
                    }
                },
                tiktok: {
                    label: "TikTok",
                    baseUrl: "tiktok.com/@",
                    socialIcon: function(e) {
                        return (0, F.jsx)(rt.r, {
                            style: e
                        })
                    }
                },
                youtube: {
                    label: "YouTube",
                    baseUrl: "youtube.com/",
                    socialIcon: function(e) {
                        return (0, F.jsx)(nn.r, {
                            style: e
                        })
                    }
                },
                twitter: {
                    label: "Twitter",
                    baseUrl: "twitter.com/",
                    socialIcon: function(e) {
                        return (0, F.jsx)(Jt.r, {
                            style: e
                        })
                    }
                },
                facebook: {
                    label: "Facebook",
                    baseUrl: "facebook.com/",
                    socialIcon: function(e) {
                        return (0, F.jsx)(kt.r, {
                            style: e
                        })
                    }
                },
                twitch: {
                    label: "Twitch",
                    baseUrl: "twitch.tv/",
                    socialIcon: function(e) {
                        return (0, F.jsx)(Xt.r, {
                            style: e
                        })
                    }
                },
                snapchat: {
                    label: "Snapchat",
                    baseUrl: "snapchat.com/add/",
                    socialIcon: function(e) {
                        return (0, F.jsx)(zt.r, {
                            style: e
                        })
                    }
                },
                pinterest: {
                    label: "Pinterest",
                    baseUrl: "pinterest.com/",
                    socialIcon: function(e) {
                        return (0, F.jsx)(Ft.r, {
                            style: e
                        })
                    }
                },
                spotify: {
                    label: "Spotify",
                    baseUrl: "",
                    socialIcon: function(e) {
                        return (0, F.jsx)(Ht.r, {
                            style: e
                        })
                    }
                },
                soundcloud: {
                    label: "SoundCloud",
                    baseUrl: "soundcloud.com/",
                    socialIcon: function(e) {
                        return (0, F.jsx)(qt.r, {
                            style: e
                        })
                    }
                },
                applemusic: {
                    label: "Apple Music",
                    baseUrl: "",
                    socialIcon: function(e) {
                        return (0, F.jsx)(Lt.r, {
                            style: e
                        })
                    }
                },
                vimeo: {
                    label: "Vimeo",
                    baseUrl: "vimeo.com/",
                    socialIcon: function(e) {
                        return (0, F.jsx)(en.r, {
                            style: e
                        })
                    }
                },
                reddit: {
                    label: "Reddit",
                    baseUrl: "reddit.com/",
                    socialIcon: function(e) {
                        return (0, F.jsx)(Dt.r, {
                            style: e
                        })
                    }
                },
                patreon: {
                    label: "Patreon",
                    baseUrl: "patreon.com/",
                    socialIcon: function(e) {
                        return (0, F.jsx)(At.r, {
                            style: e
                        })
                    }
                },
                whatsapp: {
                    label: "WhatsApp",
                    baseUrl: "wa.me/",
                    socialIcon: function(e) {
                        return (0, F.jsx)(tn.r, {
                            style: e
                        })
                    }
                },
                linkedin: {
                    label: "LinkedIn",
                    baseUrl: "linkedin.com/in/",
                    socialIcon: function(e) {
                        return (0, F.jsx)(Et.r, {
                            style: e
                        })
                    }
                },
                github: {
                    label: "GitHub",
                    baseUrl: "github.com/",
                    socialIcon: function(e) {
                        return (0, F.jsx)(Ct.r, {
                            style: e
                        })
                    }
                },
                gitlab: {
                    label: "GitLab",
                    baseUrl: "https://gitlab.com/",
                    socialIcon: function(e) {
                        return (0, F.jsx)(wt.r, {
                            style: e
                        })
                    }
                },
                substack: {
                    label: "Substack",
                    baseUrl: "",
                    socialIcon: function(e) {
                        return (0, F.jsx)(Vt.r, {
                            style: e
                        })
                    }
                },
                beehiiv: {
                    label: "Beehiiv",
                    baseUrl: "",
                    socialIcon: function(e) {
                        return (0, F.jsx)(ht.r, {
                            style: e
                        })
                    }
                },
                onlyfans: {
                    label: "Onlyfans",
                    baseUrl: "onlyfans.com/",
                    socialIcon: function(e) {
                        return (0, F.jsx)(Bt.r, {
                            style: e
                        })
                    }
                },
                cashapp: {
                    label: "CashApp",
                    baseUrl: "cash.app/$",
                    socialIcon: function(e) {
                        return (0, F.jsx)(bt.r, {
                            style: e
                        })
                    }
                },
                discord: {
                    label: "Discord",
                    baseUrl: "",
                    socialIcon: function(e) {
                        return (0, F.jsx)(vt.r, {
                            style: e
                        })
                    }
                },
                venmo: {
                    label: "Venmo",
                    baseUrl: "venmo.com/",
                    socialIcon: function(e) {
                        return (0, F.jsx)(Qt.r, {
                            style: e
                        })
                    }
                },
                amazon: {
                    label: "Amazon",
                    baseUrl: "",
                    socialIcon: function(e) {
                        return (0, F.jsx)(mt.r, {
                            style: e
                        })
                    }
                },
                pandora: {
                    label: "Pandora",
                    baseUrl: "",
                    socialIcon: function(e) {
                        return (0, F.jsx)(Mt.r, {
                            style: e
                        })
                    }
                },
                deezer: {
                    label: "Deezer",
                    baseUrl: "deezer.com/",
                    socialIcon: function(e) {
                        return (0, F.jsx)(gt.r, {
                            style: e
                        })
                    }
                },
                tidal: {
                    label: "Tidal",
                    baseUrl: "",
                    socialIcon: function(e) {
                        return (0, F.jsx)(Kt.r, {
                            style: e
                        })
                    }
                },
                bandcamp: {
                    label: "Bandcamp",
                    baseUrl: "",
                    socialIcon: function(e) {
                        return (0, F.jsx)(ft.r, {
                            style: e
                        })
                    }
                },
                google_play_store: {
                    label: "Google Play",
                    baseUrl: "",
                    socialIcon: function(e) {
                        return (0, F.jsx)(It.r, {
                            style: e
                        })
                    }
                },
                ios_app_store: {
                    label: "App Store",
                    baseUrl: "",
                    socialIcon: function(e) {
                        return (0, F.jsx)(Nt.r, {
                            style: e
                        })
                    }
                },
                medium: {
                    label: "Medium",
                    baseUrl: "",
                    socialIcon: function(e) {
                        return (0, F.jsx)(Ot.r, {
                            style: e
                        })
                    }
                },
                phone: {
                    label: "SMS",
                    baseUrl: "",
                    socialIcon: function(e) {
                        return (0, F.jsx)(Ut.r, {
                            style: e
                        })
                    }
                },
                telegram: {
                    label: "Telegram",
                    baseUrl: "",
                    socialIcon: function(e) {
                        return (0, F.jsx)(Gt.r, {
                            style: e
                        })
                    }
                },
                quikplace: {
                    label: "QuikPlace",
                    baseUrl: "",
                    socialIcon: function(e) {
                        return (0, F.jsx)(Wt.r, {
                            style: e
                        })
                    }
                },
                fanhouse: {
                    label: "Fanhouse",
                    baseUrl: "",
                    socialIcon: function(e) {
                        return (0, F.jsx)(Zt.r, {
                            style: e
                        })
                    }
                },
                clubhouse: {
                    label: "Clubhouse",
                    baseUrl: "",
                    socialIcon: function(e) {
                        return (0, F.jsx)(xt.r, {
                            style: e
                        })
                    }
                },
                famous_birthdays: {
                    label: "Famous Birthdays",
                    baseUrl: "",
                    socialIcon: function(e) {
                        return (0, F.jsx)(_t.r, {
                            style: e
                        })
                    }
                },
                flipboard: {
                    label: "Flipboard",
                    baseUrl: "flipboard.com/@",
                    socialIcon: function(e) {
                        return (0, F.jsx)(jt.r, {
                            style: e
                        })
                    }
                },
                goodreads: {
                    label: "Goodreads",
                    baseUrl: "",
                    socialIcon: function(e) {
                        return (0, F.jsx)(St.r, {
                            style: e
                        })
                    }
                },
                mastodon: {
                    label: "Mastodon",
                    baseUrl: "https://mastodon.social/@",
                    socialIcon: function(e) {
                        return (0, F.jsx)(Rt.r, {
                            style: e
                        })
                    }
                },
                steam: {
                    label: "Steam",
                    baseUrl: "steamcommunity.com/id/",
                    socialIcon: function(e) {
                        return (0, F.jsx)($t.r, {
                            style: e
                        })
                    }
                },
                tumblr: {
                    label: "Tumblr",
                    baseUrl: "tumblr.com/",
                    socialIcon: function(e) {
                        return (0, F.jsx)(Yt.r, {
                            style: e
                        })
                    }
                },
                imdb: {
                    label: "IMDb",
                    baseUrl: "https://www.imdb.com/name/nm",
                    socialIcon: function(e) {
                        return (0, F.jsx)(Pt.r, {
                            style: e
                        })
                    }
                }
            };

            function an(e) {
                var t, n = e.social,
                    r = e.iconStyle,
                    o = e.setOpen,
                    i = (0, s.useContext)(A.Z),
                    a = i.isComponent,
                    l = i.isTikTok,
                    c = i.firebaseUid,
                    u = on[n.platform],
                    d = (0, s.useMemo)((function() {
                        var e = n.value;
                        e.startsWith("https://") || e.startsWith("http://") || !u || (e.toLowerCase().includes(u.baseUrl) || (e = u.baseUrl + e), e.toLowerCase().startsWith("http") || (e = "https://".concat(e)));
                        var t = {
                                url: e
                            },
                            r = l && (0, _.bM)(t);
                        return (a || r) && (e = "#"), {
                            url: e,
                            isRestrictedLink: r
                        }
                    }), [a, l, u, n]),
                    p = d.url,
                    m = d.isRestrictedLink,
                    f = (0, s.useCallback)((function(e) {
                        if (c) try {
                            (0, Z.Z)("link_actions", {
                                action: "social_link_clicked",
                                platform: e,
                                firebase_uid: c
                            })
                        } catch (t) {}
                    }), [c]),
                    h = (0, s.useCallback)((function() {
                        if (!a)
                            if (m) o(!0);
                            else {
                                f("email");
                                var e = "mailto:".concat(n.value);
                                window.location.href = e
                            }
                    }), [a, m, f, o, n]),
                    b = (0, s.useCallback)((function() {
                        if (!a)
                            if (m) o(!0);
                            else {
                                f("phone");
                                var e = "sms:".concat(n.value);
                                window.location.href = e
                            }
                    }), [a, m, f, o, n]),
                    x = (0, s.useCallback)((function(e) {
                        a || (m ? o(!0) : f(e))
                    }), [a, m, f, o]);
                return null !== n && void 0 !== n && null !== (t = n.value) && void 0 !== t && t.trim() ? "email" === n.platform ? (0, F.jsxs)("a", {
                    href: "#email",
                    onClick: h,
                    onAuxClick: h,
                    "aria-label": "email",
                    children: [(0, F.jsx)("title", {
                        children: "email"
                    }), (0, F.jsx)(yt.r, {
                        style: r
                    })]
                }) : "phone" === n.platform ? (0, F.jsxs)("a", {
                    href: "#phone",
                    onClick: b,
                    onAuxClick: b,
                    "aria-label": "phone",
                    children: [(0, F.jsx)("title", {
                        children: "phone"
                    }), (0, F.jsx)(Ut.r, {
                        style: r
                    })]
                }) : (0, F.jsxs)("a", {
                    href: p,
                    "aria-label": u.baseUrl,
                    onClick: function() {
                        return x(n.platform)
                    },
                    onAuxClick: function() {
                        return x(n.platform)
                    },
                    children: [(0, F.jsx)("title", {
                        children: u.baseUrl
                    }), u.socialIcon(r)]
                }) : null
            }
            var ln = function(e) {
                    var t = e.socialLinks,
                        n = e.headerSize,
                        r = e.headerType,
                        o = e.color,
                        i = void 0 === o ? "#ffffff" : o,
                        l = e.display,
                        c = void 0 === l ? null : l,
                        u = (0, P.Z)(),
                        d = (0, s.useState)(!1),
                        p = (0, a.Z)(d, 2),
                        m = p[0],
                        f = p[1],
                        h = r;
                    "responsive" === r && (h = u ? "compact" : "full");
                    var b = g.DJ[h][n].iconSize,
                        x = {
                            fill: i,
                            width: b,
                            height: b,
                            padding: g.DJ[h][n].iconPadding,
                            filter: "#ffffff" === i.toLowerCase() ? "drop-shadow(0px 0.5px 1px rgba(0,0,0,0.25))" : void 0
                        };
                    return t ? (0, F.jsxs)("div", {
                        className: "TextAlignCenter",
                        style: {
                            display: c,
                            flexFlow: "row wrap",
                            alignItems: "center"
                        },
                        children: [t.map((function(e) {
                            return (0, F.jsx)(an, {
                                social: e,
                                iconStyle: x,
                                setOpen: f
                            }, e.platform)
                        })), (0, F.jsx)(rn, {
                            open: m,
                            setOpen: f
                        })]
                    }) : null
                },
                sn = ["email", "instagram", "tiktok", "youtube", "twitter", "facebook", "twitch", "snapchat", "pinterest", "spotify", "applemusic", "soundcloud", "vimeo", "patreon", "whatsapp", "linkedin"];

            function cn(e) {
                var t = e.profilePicUrl,
                    n = e.headerSize,
                    r = e.headerType,
                    o = e.headerColor,
                    i = e.headerBio,
                    a = e.headerLocation,
                    l = e.headerProfilePictureBorderRadius,
                    c = e.headerProfilePictureBorder,
                    u = e.headerProfilePictureColor1,
                    d = e.headerProfilePictureWidth,
                    p = e.socialLinks,
                    m = e.verified,
                    f = e.displayUsername,
                    h = e.vip,
                    b = e.blockId,
                    x = (0, s.useContext)(U.Z);
                x = (0, _.Ee)(g.wb, x);
                var v = !i && !a;
                return (0, F.jsxs)("div", {
                    style: x.components.theme === g.tm.FULL_WIDTH ? {
                        marginLeft: 20,
                        marginRight: 20
                    } : {},
                    "data-testid": b,
                    children: [(0, F.jsxs)("div", {
                        className: "HeaderContainer",
                        children: [(0, F.jsx)("div", {
                            style: {
                                marginRight: g.DJ.compact[n].profPicMarginRight
                            },
                            children: (0, F.jsx)(mn, {
                                profilePicUrl: t,
                                headerSize: n,
                                headerProfilePictureBorderRadius: l,
                                headerProfilePictureBorder: c,
                                headerProfilePictureColor1: u,
                                headerProfilePictureWidth: d
                            })
                        }), (0, F.jsxs)("div", {
                            children: [(0, F.jsxs)("div", {
                                children: [(0, F.jsx)(hn, {
                                    displayUsername: f,
                                    verified: m,
                                    headerColor: o,
                                    headerSize: n,
                                    vip: h
                                }), (0, F.jsx)(un, {
                                    headerColor: o,
                                    headerLocation: a,
                                    headerBio: i,
                                    headerSize: n,
                                    headerType: r
                                })]
                            }), v && (0, F.jsx)("div", {
                                style: {
                                    marginTop: g.DJ.compact[n].spaceBelowUsername
                                },
                                children: (0, F.jsx)(ln, {
                                    socialLinks: p,
                                    color: o,
                                    display: "flex",
                                    headerSize: n,
                                    headerType: r
                                })
                            })]
                        })]
                    }), !v && (0, F.jsx)(ln, {
                        socialLinks: p,
                        color: o,
                        display: "flex",
                        headerSize: n,
                        headerType: r
                    })]
                })
            }

            function un(e) {
                var t = e.headerColor,
                    n = e.headerSize,
                    r = e.headerType,
                    o = e.headerLocation,
                    i = e.headerBio,
                    a = (0, P.Z)(),
                    l = (0, s.useContext)(A.Z).isComponent,
                    c = "#ffffff" === (null === t || void 0 === t ? void 0 : t.toLowerCase()) ? "0px 0.5px 1px rgba(0,0,0,0.25)" : void 0,
                    u = "compact" === r || "responsive" === r && (a || l) ? "compact" : "full",
                    d = "full" === u ? 40 : 0,
                    p = {
                        color: t,
                        fontSize: g.DJ[u][n].bioAndLocationFontSize,
                        marginBottom: g.DJ[u][n].spaceBelowBio,
                        textShadow: c,
                        paddingLeft: d,
                        paddingRight: d
                    },
                    m = {
                        color: t,
                        fontSize: g.DJ[u][n].bioAndLocationFontSize,
                        opacity: g.DJ[u][n].locationOpacity,
                        marginBottom: g.DJ[u][n].spaceBelowLocation,
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textShadow: c,
                        borderRadius: 0,
                        width: "compact" === u ? 220 : null,
                        paddingLeft: d,
                        paddingRight: d
                    };
                return "compact" === u ? (0, F.jsxs)("div", {
                    style: {
                        marginTop: g.DJ.compact[n].bioAndLocationMarginTop,
                        marginLeft: g.DJ.compact[n].bioAndLocationMarginLeft
                    },
                    children: [(0, F.jsx)(pn, {
                        style: p,
                        headerBio: i
                    }), (0, F.jsx)(dn, {
                        style: m,
                        headerLocation: o
                    })]
                }) : (0, F.jsxs)("div", {
                    style: {
                        marginTop: g.DJ.full[n].bioAndLocationMarginTop
                    },
                    children: [(0, F.jsx)(dn, {
                        style: m,
                        headerLocation: o
                    }), (0, F.jsx)(pn, {
                        style: p,
                        headerBio: i
                    })]
                })
            }

            function dn(e) {
                var t = e.headerLocation,
                    n = e.style;
                return t ? (0, F.jsxs)(ie.Z, {
                    style: n,
                    children: [(0, F.jsx)(ut.Z, {
                        style: {
                            marginRight: 2,
                            marginBottom: -2
                        },
                        fontSize: "inherit"
                    }), t]
                }) : null
            }

            function pn(e) {
                var t = e.headerBio,
                    n = e.style;
                return t ? (0, F.jsx)(ie.Z, {
                    style: n,
                    children: t
                }) : null
            }

            function mn(e) {
                var t = e.profilePicUrl,
                    n = e.headerProfilePictureBorderRadius,
                    r = e.headerProfilePictureBorder,
                    o = e.headerProfilePictureColor1,
                    i = e.headerProfilePictureWidth,
                    a = "none" === r ? "".concat(o, "00") : o,
                    l = {
                        width: i,
                        borderRadius: n,
                        border: "2px solid ".concat(a)
                    };
                return void 0 === t ? null : (0, F.jsx)("img", {
                    alt: "profile",
                    src: t,
                    style: l
                })
            }

            function fn(e) {
                var t = e.profilePicUrl,
                    n = e.headerSize,
                    r = e.headerType,
                    o = e.headerColor,
                    i = e.headerBio,
                    a = e.headerLocation,
                    l = e.headerProfilePictureBorderRadius,
                    s = e.headerProfilePictureBorder,
                    c = e.headerProfilePictureColor1,
                    u = e.headerProfilePictureWidth,
                    d = e.socialLinks,
                    p = e.verified,
                    m = e.displayUsername,
                    f = e.vip,
                    h = e.blockId,
                    b = m || void 0,
                    x = g.DJ.full[n].fontSize,
                    v = "#ffffff" === (null === o || void 0 === o ? void 0 : o.toLowerCase()) ? "0px 0.5px 1px rgba(0,0,0,0.25)" : void 0;
                return (0, F.jsxs)("center", {
                    "data-testid": h,
                    children: [(0, F.jsx)(pt, {
                        opacity: 1,
                        width: u,
                        verified: p,
                        profilePicture: t,
                        border: !1,
                        vip: f,
                        headerProfilePictureBorderRadius: l,
                        headerProfilePictureBorder: s,
                        headerProfilePictureColor1: c
                    }), (0, F.jsx)(ie.Z, {
                        style: {
                            fontSize: x,
                            color: o,
                            marginTop: g.DJ.full[n].spaceAboveUsername,
                            textShadow: v
                        },
                        children: !!b && b
                    }), (0, F.jsx)(un, {
                        headerColor: o,
                        headerLocation: a,
                        headerBio: i,
                        headerSize: n,
                        headerType: r
                    }), !!d && (0, F.jsx)("div", {
                        style: {
                            marginTop: g.DJ.full[n].spaceBelowUsername
                        },
                        children: (0, F.jsx)(ln, {
                            color: o,
                            socialLinks: d,
                            headerSize: n,
                            headerType: r
                        })
                    })]
                })
            }

            function hn(e) {
                var t = e.displayUsername,
                    n = e.headerColor,
                    r = e.verified,
                    o = e.headerSize,
                    i = e.vip,
                    l = (0, s.useContext)(U.Z);
                l = (0, _.Ee)(g.wb, l);
                var c = g.DJ.compact[o].fontSize,
                    u = (0, s.useState)(c),
                    d = (0, a.Z)(u, 2),
                    p = d[0],
                    m = d[1],
                    f = l.text.font_family,
                    h = "#ffffff" === (null === n || void 0 === n ? void 0 : n.toLowerCase()) ? "0px 0.5px 1px rgba(0,0,0,0.25)" : void 0;
                return (0, s.useEffect)((function() {
                    if (void 0 !== t) {
                        var e = document.createElement("canvas").getContext("2d"),
                            n = c + 1,
                            r = 8,
                            i = Math.ceil((r + n) / 2),
                            a = "small" === o ? 240 : 230;
                        if (e.font = "".concat(n - 1, "px ").concat(f), null === e || void 0 === e || !e.measureText(t) || e.measureText(t).width < a) m(n - 1);
                        else {
                            for (; r !== n;) {
                                i = Math.ceil((r + n) / 2), e.font = "".concat(i, "px ").concat(f), e.measureText(t).width > a ? n = i - 1 : r = i
                            }
                            m(i - 1)
                        }
                    }
                }), [t, l]), void 0 === t ? null : (0, F.jsxs)(ie.Z, {
                    style: {
                        fontSize: p,
                        color: n
                    },
                    children: [!!t && (0, F.jsx)("span", {
                        style: {
                            marginLeft: "big" === o ? 8 : void 0,
                            textShadow: h
                        },
                        children: t
                    }), (0, F.jsx)(ot.Z, {
                        verified: r,
                        vip: i
                    })]
                })
            }
            var bn = function(e) {
                var t = e.block,
                    n = e.blockId,
                    r = (0, P.Z)(),
                    o = (0, s.useContext)(A.Z),
                    i = o.isComponent,
                    a = o.profilePicUrl,
                    l = o.displayUsername,
                    c = o.verified,
                    u = o.vip,
                    d = (0, s.useContext)(U.Z);
                d = (0, _.Ee)(g.wb, d);
                var p = t.header_type,
                    m = t.social_array,
                    f = t.social_links,
                    h = t.header_size,
                    b = t.nickname,
                    x = t.header_bio,
                    v = t.header_location,
                    y = t.header_profile_picture_border_radius,
                    k = t.header_profile_picture_border,
                    Z = t.header_profile_picture_width_compact,
                    j = t.header_profile_picture_width_full,
                    C = b || "@".concat(l),
                    w = m,
                    S = "compact" === p || "responsive" === p && (r || i) ? Z : j;
                if (null === m && f && (w = sn.map((function(e) {
                        return {
                            platform: e,
                            value: f[e] ? f[e] : ""
                        }
                    }))), !Q.Z[g.$W.HEADER](t)) return null;
                var I = d.text.header_text_color || t.header_color,
                    T = d.text.header_text_color || t.header_profile_picture_color1;
                return "compact" === p || "responsive" === p && (r || i) ? (0, F.jsx)(cn, {
                    profilePicUrl: a,
                    socialLinks: w,
                    headerSize: h,
                    headerType: p,
                    headerColor: I,
                    headerBio: x,
                    headerLocation: v,
                    displayUsername: C,
                    verified: c,
                    headerProfilePictureBorderRadius: y,
                    headerProfilePictureBorder: k,
                    headerProfilePictureColor1: T,
                    headerProfilePictureWidth: S,
                    vip: u,
                    blockId: n
                }) : (0, F.jsx)(fn, {
                    profilePicUrl: a,
                    socialLinks: w,
                    headerSize: h,
                    headerType: p,
                    headerColor: I,
                    headerBio: x,
                    headerLocation: v,
                    displayUsername: C,
                    verified: c,
                    headerProfilePictureBorderRadius: y,
                    headerProfilePictureBorder: k,
                    headerProfilePictureColor1: T,
                    headerProfilePictureWidth: S,
                    vip: u,
                    blockId: n
                })
            };

            function xn(e) {
                var t = e.image,
                    n = e.blockId,
                    r = e.fullWidth,
                    i = (0, s.useContext)(U.Z),
                    l = (0, s.useMemo)((function() {
                        return t.aspect_ratio ? t.aspect_ratio.split(":") : []
                    }), [t.aspect_ratio]),
                    c = (0, a.Z)(l, 2),
                    u = c[0],
                    d = c[1],
                    p = (0, s.useMemo)((function() {
                        return {
                            margin: r && i.components.theme !== g.tm.FULL_WIDTH ? "0 -20px" : "0"
                        }
                    }), [r, i]),
                    m = (0, s.useMemo)((function() {
                        return {
                            paddingTop: "".concat(d / u * 100, "%"),
                            borderRadius: i.components.theme !== g.tm.ROUND || r ? "0" : "25px",
                            width: "100%"
                        }
                    }), [d, u, r, i.components.theme]);
                return (0, F.jsx)("div", {
                    "data-testid": n,
                    style: p,
                    children: t.aspect_ratio ? (0, F.jsx)("div", {
                        style: (0, o.Z)((0, o.Z)({}, m), {}, {
                            backgroundImage: "url(".concat(t.source, ")"),
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                        })
                    }) : (0, F.jsx)("img", {
                        src: t.source,
                        alt: "image_block upload",
                        className: "w-full object-cover",
                        style: m
                    })
                })
            }

            function gn(e) {
                var t = e.block,
                    n = e.blockId,
                    r = (0, s.useContext)(A.Z).isComponent,
                    o = Q.Z[g.$W.IMAGES](t);
                return o || r !== g.w6 ? o ? (0, F.jsx)(xn, {
                    blockId: n,
                    image: t.images[0],
                    fullWidth: t.full_width
                }) : null : (0, F.jsx)(te.Z, {
                    title: "Image",
                    cta: "Upload an image to remove this temporary placeholder."
                })
            }
            var vn = n(75683);

            function yn(e) {
                var t = e.block,
                    n = e.blockId,
                    r = (0, s.useContext)(A.Z).isComponent,
                    o = (0, s.useMemo)((function() {
                        var e, n = 250;
                        return "developer" === (null === t || void 0 === t ? void 0 : t.integration_type) && null !== t && void 0 !== t && t.developer_height ? n = t.developer_height : null !== (e = vn.Z[null === t || void 0 === t ? void 0 : t.integration_type]) && void 0 !== e && e.height && (n = vn.Z[t.integration_type].height), n
                    }), [t]),
                    i = (0, s.useMemo)((function() {
                        var e;
                        return null !== (e = vn.Z[t.integration_type]) && void 0 !== e && e.additionalOptions && t.additional_values ? vn.Z[t.integration_type].additionalOptions.reduce((function(e, n) {
                            var r = t.additional_values[n.value];
                            return r ? n.updater(e, r) : e
                        }), t.integration_url) : t.integration_url
                    }), [t]),
                    a = Q.Z[g.$W.INTEGRATIONS](t);
                return a || r !== g.w6 ? a ? null !== t && void 0 !== t && t.integration_url.includes("opensea.io") ? (0, F.jsx)(kn, {
                    blockId: n,
                    url: t.integration_url
                }) : (0, F.jsx)(Ne.Z, {
                    "data-testid": n,
                    style: {
                        backgroundColor: "#FFFFFF00",
                        position: "relative",
                        pointerEvents: !!r && "none"
                    },
                    children: (0, F.jsx)("iframe", {
                        src: i,
                        title: "integration",
                        style: {
                            border: "none",
                            width: "100%",
                            display: "block",
                            height: o
                        },
                        scrolling: "no"
                    })
                }) : null : (0, F.jsx)(te.Z, {
                    title: "Integrations",
                    cta: "Select and configure an integration to remove this temporary placeholder."
                })
            }

            function kn(e) {
                var t = e.url,
                    n = e.blockId,
                    r = (0, s.useContext)(A.Z).isComponent,
                    o = t.split("/"),
                    i = o[o.length - 2],
                    a = o[o.length - 1];
                return (0, s.useEffect)((function() {
                    var e = document.createElement("script");
                    e.src = "https://unpkg.com/embeddable-nfts/dist/nft-card.min.js", document.body.appendChild(e)
                }), []), (0, F.jsx)(Ne.Z, {
                    "data-testid": n,
                    style: {
                        padding: 0,
                        backgroundColor: "#FFFFFF00",
                        position: "relative"
                    },
                    children: (0, F.jsx)("nft-card", {
                        contractAddress: i,
                        tokenId: a,
                        width: "100%",
                        horizontal: "true",
                        style: {
                            pointerEvents: !!r && "none"
                        }
                    })
                })
            }
            var _n = n(6088),
                Zn = n.n(_n),
                jn = n(39581);

            function Cn(e) {
                var t = e.remainingTime;
                return t ? (0, F.jsx)("div", {
                    className: "LinkSubtitle",
                    children: "".concat(t.days, ":").concat(t.hours, ":").concat(t.minutes, ":").concat(t.seconds)
                }) : null
            }

            function wn(e) {
                return "number" === typeof e && e >= Date.now()
            }
            var Sn = n(34071);

            function In(e) {
                var t = e.linkType,
                    n = e.picture,
                    r = void 0 === n ? "" : n,
                    o = e.iconBackground,
                    i = e.iconFillColor,
                    a = e.backgroundImage,
                    l = null === r || void 0 === r ? void 0 : r.split(";source=")[0];
                if (Object.values(Sn.Z).includes(l)) {
                    var s = Ge.Z[l].Icon;
                    return (0, F.jsx)(s, {
                        "aria-label": "icon ".concat(r, " ").concat(t),
                        fill: i,
                        style: {
                            background: o
                        },
                        className: (0, H.Z)({
                            "w-full h-fit\tblock cursor-pointer": t === g.RZ.CAROUSEL
                        })
                    })
                }
                return (0, F.jsx)("div", {
                    role: "figure",
                    "aria-label": "image ".concat(r, " ").concat(t),
                    className: (0, H.Z)("BackgroundImage bg-center", {
                        "h-0 pb-[100%] bg-cover cursor-pointer": t === g.RZ.CAROUSEL
                    }),
                    style: {
                        backgroundImage: a
                    }
                })
            }

            function Pn(e) {
                var t = e.href,
                    n = e.linkProperties,
                    r = e.handleLinkClick,
                    o = e.children;
                return (0, F.jsx)("a", {
                    href: t,
                    target: null !== n && void 0 !== n && n.open_in_new_tab ? "_blank" : void 0,
                    onClick: r,
                    onAuxClick: r,
                    rel: (0, H.Z)({
                        nofollow: !0,
                        noopener: !0,
                        noreferrer: !(null === n || void 0 === n || !n.open_in_new_tab)
                    }),
                    className: "no-underline",
                    children: o
                })
            }

            function Tn(e) {
                var t = e.initialTextColor,
                    n = e.hasOpacity,
                    r = void 0 !== n && n,
                    o = (0, s.useContext)(U.Z),
                    i = (0, s.useState)(!1),
                    l = (0, a.Z)(i, 2),
                    c = l[0],
                    u = l[1];
                o = (0, s.useMemo)((function() {
                    return (0, _.Ee)(g.wb, o)
                }), [o]);
                var d = (0, s.useMemo)((function() {
                        return c ? o.text.hover_color : t || o.text.color
                    }), [t, c, o.text.color, o.text.hover_color]),
                    p = (0, s.useMemo)((function() {
                        return r ? c ? o.button.hover_background_color + o.components.opacity : o.button.background_color + o.components.opacity : c ? o.button.hover_background_color : o.button.background_color
                    }), [r, c, o.button.background_color, o.button.hover_background_color, o.components.opacity]),
                    m = (0, s.useCallback)((function(e) {
                        var t = e.picture,
                            n = e.usingColorFilter,
                            o = void 0 !== n && n,
                            i = e.imagePlaceholderStyle,
                            a = t ? "url(".concat(t, ")") : i;
                        if (c || o && t) {
                            var l = p;
                            r && (l = l.slice(0, 7)), a = "linear-gradient(".concat(l, "88, ").concat(l, "CC), ").concat(a)
                        }
                        return a
                    }), [p, r, c]),
                    f = (0, s.useMemo)((function() {
                        if (r) {
                            var e = p.slice(0, 7);
                            return c ? "linear-gradient(".concat(e, "88, ").concat(e, "CC)") : "none"
                        }
                        return c ? "linear-gradient(".concat(p, "88, ").concat(p, "CC)") : "none"
                    }), [p, r, c]);
                return {
                    backgroundColor: p,
                    getBackgroundImage: m,
                    iconBackground: f,
                    setIsHovering: u,
                    textColor: d
                }
            }

            function Nn(e) {
                var t, n = e.href,
                    r = e.isLastLink,
                    o = e.animationClassname,
                    i = e.linkProperties,
                    a = e.handleLinkClick,
                    l = e.imagePlaceholderStyle,
                    s = e.usingColorFilter,
                    c = e.remainingTime,
                    u = e.linkTextColor,
                    d = e.linkBackgroundColor,
                    p = Tn({
                        hasOpacity: !0,
                        initialTextColor: u
                    }),
                    m = p.iconBackground,
                    f = p.getBackgroundImage,
                    h = p.textColor,
                    b = null === i || void 0 === i ? void 0 : i.picture,
                    x = f({
                        picture: b,
                        usingColorFilter: s,
                        imagePlaceholderStyle: l
                    });
                return (0, F.jsx)("div", {
                    className: (0, H.Z)("w-48 inline-block break-words shrink-0", {
                        "mr-4": !r
                    }),
                    children: (0, F.jsx)(Pn, {
                        href: n,
                        linkProperties: i,
                        handleLinkClick: a,
                        children: (0, F.jsxs)(ie.Z, {
                            className: "".concat(o, " overflow-hidden mb-2 h-full hover:scale-[1.02]"),
                            children: [(0, F.jsx)(In, {
                                linkType: g.RZ.CAROUSEL,
                                picture: b,
                                backgroundImage: x,
                                iconBackground: m,
                                iconFillColor: h
                            }), (0, F.jsx)("div", {
                                className: "whitespace-pre-line w-full h-full",
                                style: {
                                    backgroundColor: d
                                },
                                children: (0, F.jsxs)(ie.Z, {
                                    className: "title-small cursor-pointer px-4 py-3",
                                    style: {
                                        color: u
                                    },
                                    children: [i.title, wn(null === i || void 0 === i || null === (t = i.countdown) || void 0 === t ? void 0 : t.unix_time) ? (0, F.jsx)(Cn, {
                                        remainingTime: c
                                    }) : (0, F.jsx)("div", {
                                        className: "text-small mt-2",
                                        children: i.subtitle
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
            var Ln = n(80098),
                En = ["amazon.com", "amazon.ca", "amazon.fr", "amazon.de", "amazon.it", "amazon.es", "amazon.co.uk"];

            function Rn(e, t, n, r, o, i, a) {
                var l, s = null;
                if (o || i) return s;
                if (!e)
                    if (K()(t.url) && !t.url.includes("/")) s = "mailto:".concat(t.url);
                    else if (t.url.startsWith("mailto:") || t.url.startsWith("sms:") || t.url.startsWith("tel:") || t.url.startsWith("data:text/")) s = t.url;
                else if (s = t.url.toLowerCase().startsWith("http") ? t.url : "http://".concat(t.url), n || r) {
                    var c = encodeURIComponent(t.title),
                        u = n ? "&utm_medium=".concat(encodeURIComponent(n)) : "",
                        d = r ? "&utm_source=".concat(encodeURIComponent(r)) : "",
                        p = "utm_campaign=".concat(c).concat(u).concat(d),
                        m = new URL(s);
                    m.search ? m.search += "&".concat(p) : m.search = "?".concat(p), s = m.href
                }
                if (s === "https://beacons.ai/signup?c=".concat(a)) {
                    var f = new URLSearchParams({
                        utm_source: "beacons_user",
                        utm_medium: "lib_referral_program",
                        utm_campaign: a
                    });
                    s += "&".concat(f)
                }
                return s = (l = s) && En.some((function(e) {
                    return l.includes(e)
                })) && !l.includes("tag=") && l.includes("/dp/") ? (0, Ln.Z)(l, "tag", "beaconsai-20") : l
            }

            function On(e) {
                var t, n = e.href,
                    r = e.animationClassname,
                    o = e.linkProperties,
                    i = e.handleLinkClick,
                    a = e.rightImage,
                    l = e.shouldAddTopMargin,
                    s = e.imagePlaceholderStyle,
                    c = e.centerLeftRightText,
                    u = e.remainingTime,
                    d = Tn({
                        hasOpacity: !0,
                        initialTextColor: e.linkTextColor
                    }),
                    p = d.backgroundColor,
                    m = d.iconBackground,
                    f = d.getBackgroundImage,
                    h = d.textColor,
                    b = f({
                        picture: null === o || void 0 === o ? void 0 : o.picture,
                        imagePlaceholderStyle: s
                    }),
                    x = (0, _.bL)(c, "center", a, "flex-end", "flex-start"),
                    v = (0, _.bL)(c, "center", a, "right", "left");
                return (0, F.jsx)(Pn, {
                    href: n,
                    linkProperties: o,
                    handleLinkClick: i,
                    children: (0, F.jsxs)(ie.Z, {
                        className: "".concat(r, " LeftRightImageLink hover:scale-[1.02]"),
                        style: {
                            flexDirection: a ? "row-reverse" : "row",
                            marginTop: l && 16
                        },
                        children: [(0, F.jsx)(In, {
                            linkType: g.RZ.LEFT_RIGHT_IMAGE_TEXT,
                            picture: o.picture,
                            backgroundImage: b,
                            iconBackground: m,
                            iconFillColor: h
                        }), (0, F.jsx)("div", {
                            className: "TextSideWrapper",
                            style: {
                                backgroundColor: p,
                                justifyContent: x,
                                width: "100%"
                            },
                            children: (0, F.jsxs)(ie.Z, {
                                className: "TextSide",
                                style: {
                                    textAlign: v,
                                    color: h,
                                    wordBreak: "break-word"
                                },
                                children: [o.title, wn(null === o || void 0 === o || null === (t = o.countdown) || void 0 === t ? void 0 : t.unix_time) ? (0, F.jsx)(Cn, {
                                    remainingTime: u
                                }) : (0, F.jsx)("div", {
                                    className: "LinkSubtitle",
                                    children: o.subtitle
                                })]
                            })
                        })]
                    })
                })
            }

            function Bn(e) {
                var t, n = e.href,
                    r = e.animationClassname,
                    o = e.linkProperties,
                    i = e.handleLinkClick,
                    a = e.imagePlaceholderStyle,
                    l = e.usingColorFilter,
                    s = e.multiColumnImageLinkNumColumns,
                    c = e.remainingTime,
                    u = Tn({
                        initialTextColor: e.linkTextColor
                    }),
                    d = u.iconBackground,
                    p = u.getBackgroundImage,
                    m = u.textColor,
                    f = null === o || void 0 === o ? void 0 : o.picture,
                    h = p({
                        picture: f,
                        usingColorFilter: l,
                        imagePlaceholderStyle: a
                    });
                return (0, F.jsx)(Pn, {
                    href: n,
                    linkProperties: o,
                    handleLinkClick: i,
                    children: (0, F.jsxs)(ie.Z, {
                        className: "".concat(r, " ImageOverlay twoColumnImage hover:scale-[1.02]"),
                        tag: "center",
                        style: {
                            height: 0,
                            paddingTop: "50%",
                            paddingBottom: "50%"
                        },
                        children: [(0, F.jsx)(In, {
                            linkType: g.RZ.MULTI_COLUMN_IMAGE,
                            picture: f,
                            iconBackground: d,
                            backgroundImage: h,
                            iconFillColor: m
                        }), (0, F.jsxs)(ie.Z, {
                            className: "LinkTitleWrapper",
                            style: {
                                color: m,
                                padding: 18 - 4 * s,
                                wordBreak: "break-word"
                            },
                            children: [(0, F.jsx)("div", {
                                className: "LinkTitle",
                                children: o.title
                            }), wn(null === o || void 0 === o || null === (t = o.countdown) || void 0 === t ? void 0 : t.unix_time) ? (0, F.jsx)(Cn, {
                                remainingTime: c
                            }) : (0, F.jsx)("div", {
                                className: "LinkSubtitle",
                                children: o.subtitle
                            })]
                        })]
                    })
                })
            }

            function Mn(e) {
                var t = e.picture,
                    n = void 0 === t ? "" : t,
                    r = e.iconBackground,
                    o = e.iconFillColor,
                    i = e.aspectRatioPercentage,
                    a = e.backgroundImage,
                    l = null === n || void 0 === n ? void 0 : n.split(";source=")[0];
                if (Object.values(Sn.Z).includes(l)) {
                    var s = Ge.Z[l].Icon;
                    return (0, F.jsx)("div", {
                        style: {
                            background: r,
                            borderRadius: "inherit"
                        },
                        children: (0, F.jsx)(s, {
                            "aria-label": "icon ".concat(n, " ").concat(g.RZ.ONE_COLUMN_IMAGE),
                            fill: o,
                            style: {
                                width: i,
                                height: "100%"
                            }
                        })
                    })
                }
                return (0, F.jsx)("div", {
                    role: "figure",
                    "aria-label": "image ".concat(n, " ").concat(g.RZ.ONE_COLUMN_IMAGE),
                    style: {
                        backgroundImage: a,
                        paddingTop: i,
                        width: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "inherit"
                    }
                })
            }

            function An(e) {
                var t, n = e.href,
                    r = e.animationClassname,
                    o = e.linkProperties,
                    i = e.handleLinkClick,
                    l = e.shouldAddTopMargin,
                    s = e.imagePlaceholderStyle,
                    c = e.usingColorFilter,
                    u = e.remainingTime,
                    d = e.imageAspectRatio,
                    p = Tn({
                        initialTextColor: e.linkTextColor
                    }),
                    m = p.iconBackground,
                    f = p.getBackgroundImage,
                    h = p.textColor,
                    b = null === o || void 0 === o ? void 0 : o.picture,
                    x = f({
                        picture: b,
                        usingColorFilter: c,
                        imagePlaceholderStyle: s
                    }),
                    g = 16,
                    v = 9;
                if (d) {
                    var y = d.split(":"),
                        k = (0, a.Z)(y, 2);
                    g = k[0], v = k[1]
                }
                var _ = "".concat(v / g * 100, "%");
                return (0, F.jsx)(Pn, {
                    href: n,
                    linkProperties: o,
                    handleLinkClick: i,
                    children: (0, F.jsxs)(ie.Z, {
                        className: "".concat(r, " hover:scale-[1.02]"),
                        tag: "center",
                        style: {
                            marginTop: l && 16,
                            position: "relative",
                            cursor: "pointer"
                        },
                        children: [(0, F.jsx)(Mn, {
                            picture: b,
                            iconFillColor: h,
                            backgroundImage: x,
                            iconBackground: m,
                            aspectRatioPercentage: _
                        }), (0, F.jsx)("div", {
                            className: "PaddingL",
                            style: {
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                width: "fit-content"
                            },
                            children: (0, F.jsxs)(ie.Z, {
                                style: {
                                    color: h,
                                    wordBreak: "break-word"
                                },
                                children: [(0, F.jsx)("div", {
                                    className: "LinkTitle",
                                    children: o.title
                                }), wn(null === o || void 0 === o || null === (t = o.countdown) || void 0 === t ? void 0 : t.unix_time) ? (0, F.jsx)(Cn, {
                                    remainingTime: u
                                }) : (0, F.jsx)("div", {
                                    className: "LinkSubtitle",
                                    children: o.subtitle
                                })]
                            })
                        })]
                    })
                })
            }

            function Un(e) {
                var t, n = e.href,
                    r = e.animationClassname,
                    o = e.linkProperties,
                    i = e.handleLinkClick,
                    l = e.shouldAddTopMargin,
                    s = e.imagePlaceholderStyle,
                    c = e.usingColorFilter,
                    u = e.remainingTime,
                    d = e.imageAspectRatio,
                    p = Tn({
                        initialTextColor: e.linkTextColor
                    }),
                    m = p.iconBackground,
                    f = p.getBackgroundImage,
                    h = p.textColor,
                    b = null === o || void 0 === o ? void 0 : o.picture,
                    x = f({
                        picture: b,
                        usingColorFilter: c,
                        imagePlaceholderStyle: s
                    }),
                    g = 16,
                    v = 9;
                if (d) {
                    var y = d.split(":"),
                        k = (0, a.Z)(y, 2);
                    g = k[0], v = k[1]
                }
                var _ = "".concat(v / g * 100, "%");
                return (0, F.jsx)(Pn, {
                    href: n,
                    linkProperties: o,
                    handleLinkClick: i,
                    children: (0, F.jsxs)(ie.Z, {
                        className: (0, H.Z)("".concat(r, " cursor-pointer overflow-hidden relative hover:scale-[1.02]"), {
                            "mt-4": l
                        }),
                        tag: "center",
                        children: [(0, F.jsx)(Mn, {
                            picture: b,
                            iconFillColor: h,
                            backgroundImage: x,
                            iconBackground: m,
                            aspectRatioPercentage: _
                        }), (0, F.jsx)("div", {
                            className: "w-full h-[30%] absolute bottom-0",
                            style: {
                                background: "linear-gradient(0deg, black, transparent)"
                            }
                        }), (0, F.jsx)("div", {
                            className: "absolute left-1/2 bottom-6 translate-x-[-50%] box-border",
                            children: (0, F.jsxs)(ie.Z, {
                                style: {
                                    wordBreak: "break-word"
                                },
                                children: [(0, F.jsx)("div", {
                                    className: "text-18 font-bold !text-white",
                                    children: o.title
                                }), wn(null === o || void 0 === o || null === (t = o.countdown) || void 0 === t ? void 0 : t.unix_time) ? (0, F.jsx)(Cn, {
                                    remainingTime: u
                                }) : (0, F.jsx)("div", {
                                    className: "text-12 whitespace-pre-wrap !text-white",
                                    children: o.subtitle
                                })]
                            })
                        })]
                    })
                })
            }

            function Fn(e) {
                var t = e.picture,
                    n = e.imageStyle,
                    r = e.iconFillColor,
                    o = (0, s.useContext)(U.Z),
                    i = null === t || void 0 === t ? void 0 : t.split(";source=")[0];
                if (Object.values(Sn.Z).includes(i)) {
                    var a = Ge.Z[i].Icon;
                    return (0, F.jsx)(a, {
                        fill: r || o.text.color,
                        height: "65%",
                        width: "65%",
                        "aria-label": "".concat(t, " classic")
                    })
                }
                return (0, F.jsx)("img", {
                    style: n,
                    width: 45,
                    height: 45,
                    alt: "link",
                    src: t
                })
            }

            function Wn(e) {
                var t, n = e.href,
                    r = e.animationClassname,
                    i = e.handleLinkClick,
                    a = e.linkProperties,
                    l = e.isLastLink,
                    s = e.clickDisabled,
                    c = e.isShadowOn,
                    u = e.linkOutline,
                    d = e.theme,
                    p = e.remainingTime,
                    m = e.linkTextColor,
                    f = (0, P.Z)(),
                    h = {
                        color: m,
                        fontSize: "15px",
                        textTransform: "none",
                        boxShadow: (0, Me.Z)(c, d.components.opacity, d.button.background_color)
                    },
                    b = {
                        objectFit: "cover"
                    },
                    x = u ? m : "#FFFFFF00";
                switch (d.components.theme) {
                    case g.tm.SQUARE:
                        h = (0, o.Z)((0, o.Z)({}, h), {}, {
                            minHeight: 65,
                            margin: "16px 0px",
                            border: "2px solid ".concat(x)
                        });
                        break;
                    case g.tm.ROUND:
                        h = (0, o.Z)((0, o.Z)({}, h), {}, {
                            minHeight: 65,
                            margin: "16px 0px",
                            border: "2px solid ".concat(x)
                        }), b = (0, o.Z)((0, o.Z)({}, b), {}, {
                            borderRadius: "50%"
                        });
                        break;
                    case g.tm.FULL_WIDTH:
                        "#FFFFFF00" === x && (x = "#BBBBBB"), h = (0, o.Z)((0, o.Z)({}, h), {}, {
                            minHeight: 64,
                            borderTop: "1px solid ".concat(x),
                            borderBottom: l && "1px solid ".concat(x),
                            borderRight: f || s ? void 0 : "1px solid ".concat(x),
                            borderLeft: f || s ? void 0 : "1px solid ".concat(x),
                            boxShadow: "none"
                        });
                        break;
                    case g.tm.CUSTOM:
                        h = (0, o.Z)((0, o.Z)({}, h), {}, {
                            minHeight: 65,
                            margin: "16px 0px",
                            border: "2px solid ".concat(x)
                        }), b = (0, o.Z)((0, o.Z)({}, b), {}, {
                            borderRadius: d.components.custom_border_radius
                        })
                }
                return (0, F.jsx)("center", {
                    className: "".concat(r, " RowLink"),
                    style: {
                        position: "relative"
                    },
                    children: (0, F.jsxs)(oe.Z, {
                        variant: "contained",
                        size: "large",
                        fullWidth: !0,
                        style: (0, o.Z)((0, o.Z)({}, h), {}, {
                            display: "flex",
                            paddingLeft: 0,
                            paddingRight: 0
                        }),
                        href: n,
                        target: null !== a && void 0 !== a && a.open_in_new_tab ? "_blank" : void 0,
                        onClick: i,
                        onAuxClick: i,
                        allowOpacity: !0,
                        "aria-label": a.title,
                        rel: (0, H.Z)({
                            nofollow: !0,
                            noopener: !0,
                            noreferrer: !(null === a || void 0 === a || !a.open_in_new_tab)
                        }),
                        children: [(0, F.jsx)("div", {
                            className: "flex items-center justify-center",
                            style: {
                                width: 55,
                                minWidth: 55
                            },
                            children: !!a.picture && (0, F.jsx)(Fn, {
                                picture: a.picture,
                                iconFillColor: m,
                                imageStyle: b
                            })
                        }), (0, F.jsxs)("div", {
                            style: {
                                paddingRight: 55,
                                width: "100%",
                                minWidth: 0
                            },
                            children: [(0, F.jsx)("div", {
                                style: {
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"
                                },
                                children: a.title
                            }), wn(null === a || void 0 === a || null === (t = a.countdown) || void 0 === t ? void 0 : t.unix_time) ? (0, F.jsx)(Cn, {
                                remainingTime: p
                            }) : (0, F.jsx)("div", {
                                className: "LinkSubtitle",
                                style: {
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"
                                },
                                children: a.subtitle
                            })]
                        })]
                    })
                })
            }

            function Dn(e) {
                var t, n = e.href,
                    r = e.animationClassname,
                    i = e.handleLinkClick,
                    a = e.linkProperties,
                    l = e.isLastLink,
                    s = e.clickDisabled,
                    c = e.isShadowOn,
                    u = e.linkOutline,
                    d = e.theme,
                    p = e.remainingTime,
                    m = e.linkTextColor,
                    f = (0, P.Z)(),
                    h = {
                        color: m,
                        fontSize: "15px",
                        textTransform: "none",
                        boxShadow: (0, Me.Z)(c, d.components.opacity, d.button.background_color)
                    },
                    b = {
                        width: "100%",
                        height: "auto",
                        objectFit: "cover"
                    },
                    x = u ? m : "#FFFFFF00";
                switch (d.components.theme) {
                    case g.tm.SQUARE:
                        h = (0, o.Z)((0, o.Z)({}, h), {}, {
                            minHeight: 65,
                            margin: "16px 0px",
                            border: "2px solid ".concat(x)
                        });
                        break;
                    case g.tm.ROUND:
                        h = (0, o.Z)((0, o.Z)({}, h), {}, {
                            minHeight: 65,
                            margin: "16px 0px",
                            border: "2px solid ".concat(x)
                        }), b = (0, o.Z)((0, o.Z)({}, b), {}, {
                            borderRadius: "50%"
                        });
                        break;
                    case g.tm.FULL_WIDTH:
                        "#FFFFFF00" === x && (x = "#BBBBBB"), h = (0, o.Z)((0, o.Z)({}, h), {}, {
                            minHeight: 65,
                            borderTop: "1px solid ".concat(x),
                            borderBottom: l && "1px solid ".concat(x),
                            borderRight: f || s ? void 0 : "1px solid ".concat(x),
                            borderLeft: f || s ? void 0 : "1px solid ".concat(x),
                            boxShadow: "none"
                        });
                        break;
                    case g.tm.CUSTOM:
                        h = (0, o.Z)((0, o.Z)({}, h), {}, {
                            minHeight: 65,
                            margin: "16px 0px",
                            border: "2px solid ".concat(x)
                        }), b = (0, o.Z)((0, o.Z)({}, b), {}, {
                            borderRadius: d.components.custom_border_radius
                        })
                }
                return (0, F.jsx)("center", {
                    className: "".concat(r, " RowLink relative"),
                    children: (0, F.jsxs)(oe.Z, {
                        variant: "contained",
                        size: "large",
                        fullWidth: !0,
                        style: (0, o.Z)((0, o.Z)({}, h), {}, {
                            display: "flex",
                            paddingLeft: 0,
                            paddingRight: 0
                        }),
                        href: n,
                        target: null !== a && void 0 !== a && a.open_in_new_tab ? "_blank" : void 0,
                        onClick: i,
                        onAuxClick: i,
                        allowOpacity: !0,
                        "aria-label": a.title,
                        rel: (0, H.Z)({
                            nofollow: !0,
                            noopener: !0,
                            noreferrer: !(null === a || void 0 === a || !a.open_in_new_tab)
                        }),
                        children: [(0, F.jsx)("div", {
                            className: "w-24 h-24 box-border overflow-hidden flex items-center justify-center ml-4",
                            children: !(null === a || void 0 === a || !a.picture) && (0, F.jsx)(Fn, {
                                picture: a.picture,
                                iconFillColor: m,
                                imageStyle: b
                            })
                        }), (0, F.jsxs)("div", {
                            className: "flex flex-col justify-end text-right w-full min-w-0 px-4",
                            children: [(0, F.jsx)("div", {
                                className: "overflow-hidden truncate font-bold",
                                children: a.title
                            }), wn(null === a || void 0 === a || null === (t = a.countdown) || void 0 === t ? void 0 : t.unix_time) ? (0, F.jsx)(Cn, {
                                remainingTime: p
                            }) : (0, F.jsx)("div", {
                                className: "text-[.8em] whitespace-pre-wrap break-words",
                                children: a.subtitle
                            })]
                        })]
                    })
                })
            }

            function zn(e, t) {
                var n = (t - e) / 1e3,
                    r = Math.floor(n / 86400),
                    o = Math.floor(n % 86400 / 3600),
                    i = Math.floor(n % 3600 / 60),
                    a = Math.floor(n % 60),
                    l = function(e) {
                        return e.toString().padStart(2, "0")
                    };
                return {
                    days: l(r),
                    hours: l(o),
                    minutes: l(i),
                    seconds: l(a)
                }
            }

            function qn(e) {
                var t, n = e.linkProperties,
                    r = e.clickDisabled,
                    o = e.utmMedium,
                    c = e.utmSource,
                    u = e.index,
                    d = e.block,
                    p = e.isTikTok,
                    m = e.onRestrictedLinkClick,
                    f = e.isLastLink,
                    h = void 0 !== f && f,
                    x = (0, P.Z)(),
                    v = d.box_shadow,
                    y = !(null === d || void 0 === d || !d.center_left_right_text),
                    k = d.link_outline,
                    j = d.link_type,
                    C = d.placeholder_color1,
                    w = d.placeholder_color2,
                    S = d.placeholder_gradient_style,
                    I = !(null === d || void 0 === d || !d.using_color_filter),
                    T = null === d || void 0 === d ? void 0 : d.multi_column_image_link_num_columns,
                    N = null === d || void 0 === d ? void 0 : d.one_column_image_aspect_ratio,
                    L = (0, s.useContext)(U.Z);
                L = (0, _.Ee)(g.wb, L);
                var E = (0, s.useContext)(A.Z),
                    R = E.socialReferrer,
                    O = E.displayUsername,
                    B = null === n || void 0 === n || null === (t = n.countdown) || void 0 === t ? void 0 : t.unix_time,
                    M = function(e) {
                        var t = (0, s.useState)(wn(e) ? zn(Date.now(), e) : null),
                            n = (0, a.Z)(t, 2),
                            r = n[0],
                            o = n[1];
                        return (0, s.useEffect)((function() {
                            var t = setInterval((function() {
                                wn(e) ? requestAnimationFrame((function() {
                                    o(zn(Date.now(), e))
                                })) : (o(null), clearInterval(t))
                            }), 1e3);
                            return function() {
                                return clearInterval(t)
                            }
                        }), [e]), {
                            remainingTime: r
                        }
                    }(B),
                    W = M.remainingTime,
                    D = function() {
                        var e = window.location.hostname;
                        return ["beacons.ai", "beacons.page"].includes(e)
                    }(),
                    z = !!p && (0, _.bM)(n) && !D,
                    q = Rn(r, n, o, c, z, W, O),
                    H = (0, s.useCallback)(function() {
                        var e = (0, l.Z)((0, i.Z)().mark((function e(t) {
                            var o;
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (2 !== t.button) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if ((o = x && 0 === t.button) && t.preventDefault(), r || wn(B)) {
                                            e.next = 13;
                                            break
                                        }
                                        try {
                                            (0, Z.Z)("link_actions", {
                                                id: n.id,
                                                action: "link_click",
                                                social_referrer: R
                                            }), (0, _.UQ)({
                                                method: "post",
                                                url: "".concat("https://beacons.ai/api/", "rtanalytics/link_click"),
                                                data: {
                                                    linkId: n.id,
                                                    referrer: window.document.referrer
                                                },
                                                headers: {
                                                    "X-Beacons-Release": "10.24.0"
                                                }
                                            })
                                        } catch (i) {}
                                        if (m(z), !q || !o) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.next = 10, (0, _._v)(200);
                                    case 10:
                                        (0, jn.Z)(q);
                                    case 11:
                                        e.next = 14;
                                        break;
                                    case 13:
                                        t.preventDefault();
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [z, r, q, x, n.id, m, B, R]),
                    $ = function(e) {
                        return e && e.animation ? "".concat(e.animation, "_small_infinite") : ""
                    }(n),
                    V = function(e, t, n) {
                        var r = "linear-gradient(".concat(e, ", ").concat(e, ")");
                        return n === b.Z.LINEAR ? r = "linear-gradient(".concat(e, ", ").concat(t, ")") : n === b.Z.RADIAL ? r = "radial-gradient(".concat(t, ", ").concat(e, ")") : n === b.Z.DIAGONAL && (r = "linear-gradient(to bottom right, ".concat(e, ", ").concat(t, ")")), r
                    }(C, w, S),
                    G = L.text.link_text_color || L.text.color,
                    K = L.button.background_color,
                    Y = u > 0 && L.components.theme !== g.tm.FULL_WIDTH;
                switch (j) {
                    case g.RZ.LEFT_RIGHT_IMAGE_TEXT:
                        return (0, F.jsx)(On, {
                            href: q,
                            animationClassname: $,
                            linkProperties: n,
                            handleLinkClick: H,
                            rightImage: !!(u % 2),
                            shouldAddTopMargin: Y,
                            imagePlaceholderStyle: V,
                            theme: L,
                            centerLeftRightText: y,
                            remainingTime: W,
                            linkTextColor: G
                        });
                    case g.RZ.IMAGE_AND_TEXT_RIGHT:
                        return (0, F.jsx)(On, {
                            href: q,
                            animationClassname: $,
                            linkProperties: n,
                            handleLinkClick: H,
                            rightImage: !1,
                            shouldAddTopMargin: Y,
                            imagePlaceholderStyle: V,
                            theme: L,
                            centerLeftRightText: y,
                            remainingTime: W,
                            linkTextColor: G
                        });
                    case g.RZ.IMAGE_AND_TEXT_LEFT:
                        return (0, F.jsx)(On, {
                            href: q,
                            animationClassname: $,
                            linkProperties: n,
                            handleLinkClick: H,
                            rightImage: !0,
                            shouldAddTopMargin: Y,
                            imagePlaceholderStyle: V,
                            theme: L,
                            centerLeftRightText: y,
                            remainingTime: W,
                            linkTextColor: G
                        });
                    case g.RZ.ONE_COLUMN_IMAGE:
                        return (0, F.jsx)(An, {
                            href: q,
                            animationClassname: $,
                            linkProperties: n,
                            handleLinkClick: H,
                            shouldAddTopMargin: Y,
                            imagePlaceholderStyle: V,
                            usingColorFilter: I,
                            remainingTime: W,
                            imageAspectRatio: N,
                            linkTextColor: G
                        });
                    case g.RZ.MULTI_COLUMN_IMAGE:
                        return (0, F.jsx)(Bn, {
                            href: q,
                            animationClassname: $,
                            linkProperties: n,
                            handleLinkClick: H,
                            imagePlaceholderStyle: V,
                            usingColorFilter: I,
                            multiColumnImageLinkNumColumns: T,
                            remainingTime: W,
                            linkTextColor: G
                        });
                    case g.RZ.CLASSIC_LARGE:
                        return (0, F.jsx)(Dn, {
                            href: q,
                            animationClassname: $,
                            handleLinkClick: H,
                            isLastLink: h,
                            linkProperties: n,
                            clickDisabled: r,
                            isShadowOn: v,
                            linkOutline: k,
                            theme: L,
                            remainingTime: W,
                            imagePlaceholderStyle: V,
                            linkTextColor: G
                        });
                    case g.RZ.IMAGE_CARD:
                        return (0, F.jsx)(Un, {
                            href: q,
                            animationClassname: $,
                            linkProperties: n,
                            handleLinkClick: H,
                            shouldAddTopMargin: Y,
                            imagePlaceholderStyle: V,
                            usingColorFilter: I,
                            remainingTime: W,
                            imageAspectRatio: N,
                            linkTextColor: G
                        });
                    case g.RZ.CAROUSEL:
                        return (0, F.jsx)(Nn, {
                            href: q,
                            isLastLink: h,
                            animationClassname: $,
                            linkProperties: n,
                            handleLinkClick: H,
                            imagePlaceholderStyle: V,
                            usingColorFilter: I,
                            remainingTime: W,
                            linkTextColor: G,
                            linkBackgroundColor: K
                        });
                    default:
                        return (0, F.jsx)(Wn, {
                            href: q,
                            animationClassname: $,
                            handleLinkClick: H,
                            isLastLink: h,
                            linkProperties: n,
                            clickDisabled: r,
                            isShadowOn: v,
                            linkOutline: k,
                            theme: L,
                            remainingTime: W,
                            linkTextColor: G
                        })
                }
            }

            function Hn(e) {
                var t = e.children,
                    n = e.description,
                    r = e.headline,
                    o = e.isFullWidth,
                    i = (0, s.useState)(!1),
                    l = (0, a.Z)(i, 2),
                    c = l[0],
                    u = l[1],
                    d = c && o ? "16px 0 0" : 16;
                return (0, F.jsxs)(F.Fragment, {
                    children: [(0, F.jsx)(re.Z, {
                        className: "relative transition-all",
                        padding: d,
                        children: (0, F.jsxs)(ie.Z, {
                            children: [(0, F.jsxs)("div", {
                                className: "cursor-pointer flex items-center justify-center",
                                onClick: function() {
                                    return u((function(e) {
                                        return !e
                                    }))
                                },
                                role: "button",
                                tabIndex: "0",
                                children: [(0, F.jsx)("div", {
                                    className: "title",
                                    children: r || "Links"
                                }), (0, F.jsx)("div", {
                                    className: (0, H.Z)("absolute right-4 flex items-center transition-transform", {
                                        "rotate-180": c
                                    }),
                                    children: (0, F.jsx)(je.Z, {})
                                })]
                            }), (0, F.jsx)(Ce.Z, { in: c,
                                timeout: "auto",
                                children: !!n && (0, F.jsx)("div", {
                                    className: "text-16 text-center mt-4",
                                    children: n
                                })
                            })]
                        })
                    }), (0, F.jsx)(Ce.Z, { in: c,
                        timeout: "auto",
                        children: t
                    })]
                })
            }

            function $n(e) {
                var t = e.block,
                    n = e.blockId,
                    r = (0, s.useContext)(A.Z),
                    o = r.headerTextColor,
                    i = r.isComponent,
                    l = r.isTikTok,
                    c = r.utmMedium,
                    u = r.utmSource,
                    d = (0, s.useContext)(U.Z),
                    p = (0, s.useState)(!1),
                    m = (0, a.Z)(p, 2),
                    f = m[0],
                    h = m[1],
                    b = t.links,
                    x = t.link_type,
                    v = null === t || void 0 === t ? void 0 : t.multi_column_image_link_num_columns,
                    y = i ? "Component" : "",
                    k = (0, s.useCallback)((function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = x === g.RZ.ONE_COLUMN_IMAGE || x === g.RZ.MULTI_COLUMN_IMAGE || !(null === e || void 0 === e || !e.title),
                            r = !(null === e || void 0 === e || !e.url) && (Zn()(e.url, {
                                allow_underscores: !0
                            }) || K()(e.url) || (0, _.uA)(e.url) || e.url.startsWith("sms:") || e.url.startsWith("tel:") || e.url.startsWith("data:text/"));
                        return !!(t || !e || n && r && e.display && (0, _.MA)(e.scheduling)) || null
                    }), [x]),
                    Z = (0, s.useCallback)((function(e) {
                        e && h(!0)
                    }), []),
                    j = Q.Z[g.$W.LINKS](t);
                if (!j && i === g.w6) return (0, F.jsx)(te.Z, {
                    title: "Links",
                    cta: "Add a link to remove this temporary placeholder."
                });
                var C = d.components.theme === g.tm.FULL_WIDTH,
                    w = {};
                if (x === g.RZ.MULTI_COLUMN_IMAGE && (w = {
                        gridTemplateColumns: "repeat(".concat(v, ", minmax(0, 1fr))")
                    }, C || (w.gridGap = 20 - 4 * v)), !j) return null;
                var S = b.filter((function(e) {
                        return k(e)
                    })),
                    I = null === t || void 0 === t ? void 0 : t.description,
                    P = null === t || void 0 === t ? void 0 : t.headline;
                return (null === t || void 0 === t ? void 0 : t.collapse_style) === g.Aq.COLLAPSED ? (0, F.jsxs)("div", {
                    "data-testid": n,
                    children: [(0, F.jsx)(Hn, {
                        description: I,
                        headline: P,
                        isFullWidth: C,
                        children: (0, F.jsx)("div", {
                            "aria-label": "links block link buttons",
                            className: (0, H.Z)("Links", x, y, {
                                "mt-4": !!I
                            }),
                            style: w,
                            children: !!S && S.map((function(e, n) {
                                return (0, F.jsx)(qn, {
                                    linkProperties: e,
                                    isLastLink: n === S.length - 1,
                                    clickDisabled: i,
                                    utmMedium: c,
                                    utmSource: u,
                                    index: n,
                                    block: t,
                                    isTikTok: l,
                                    onRestrictedLinkClick: Z
                                }, e.id)
                            }))
                        })
                    }), (0, F.jsx)(rn, {
                        open: f,
                        setOpen: h
                    })]
                }) : (0, F.jsxs)("div", {
                    "data-testid": n,
                    children: [!!P && (0, F.jsx)(ie.Z, {
                        className: "text-center",
                        style: {
                            color: o
                        },
                        children: (0, F.jsx)("div", {
                            className: "title",
                            children: P
                        })
                    }), !!I && (0, F.jsx)(ie.Z, {
                        className: (0, H.Z)("text-16 text-center", {
                            "mt-1": !!P
                        }),
                        style: {
                            color: o
                        },
                        children: I
                    }), (0, F.jsxs)("div", {
                        "aria-label": "links block link buttons",
                        className: (0, H.Z)("Links", x, y, {
                            "mt-3": !!I || !!P
                        }),
                        style: w,
                        children: [!!S && S.map((function(e, n) {
                            return (0, F.jsx)(qn, {
                                linkProperties: e,
                                isLastLink: n === S.length - 1,
                                clickDisabled: i,
                                utmMedium: c,
                                utmSource: u,
                                index: n,
                                block: t,
                                isTikTok: l,
                                onRestrictedLinkClick: Z
                            }, e.id)
                        })), (0, F.jsx)(rn, {
                            open: f,
                            setOpen: h
                        })]
                    })]
                })
            }

            function Vn(e) {
                var t = e.pixelId;
                return (0, s.useEffect)((function() {
                    if (t) {
                        var e = document.createElement("script");
                        e.type = "text/javascript", e.text = "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '".concat(t, "');fbq('track', 'PageView');"), document.head.appendChild(e);
                        var n = document.createElement("noscript"),
                            r = document.createElement("img");
                        r.height = "1", r.width = "1";
                        try {
                            r.style = "display:none"
                        } catch (o) {}
                        r.src = "https://www.facebook.com/tr?id=".concat(t, "&ev=PageView&noscript=1"), n.appendChild(r), document.head.appendChild(n)
                    }
                }), [t]), null
            }
            var Gn = n(78991);

            function Kn(e) {
                var t = e.tiktokPixelId;
                return (0, s.useEffect)((function() {
                    if (t) {
                        var e = document.createElement("script");
                        e.type = "text/javascript", e.text = '!function (w, d, t) {\n      w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};\n      ttq.load(\''.concat(t, "');\n      ttq.page();\n    }(window, document, 'ttq');"), document.head.appendChild(e)
                    }
                }), [t]), null
            }
            var Yn = n(84285),
                Xn = n(79858),
                Jn = n(77864),
                Qn = n(97246),
                er = n(78429),
                tr = n(30508),
                nr = n(64786);

            function rr(e) {
                var t, n, r = e.block,
                    o = e.blockId,
                    c = (0, s.useContext)(Qn.fE),
                    u = (0, s.useContext)(A.Z),
                    d = u.isComponent,
                    p = u.beaconsUsername,
                    m = u.firebaseUid,
                    f = (0, er.Z)().getPublicMediaKit,
                    h = (0, s.useState)(),
                    b = (0, a.Z)(h, 2),
                    x = b[0],
                    v = b[1],
                    y = m || (null === c || void 0 === c || null === (t = c.mediaKitData) || void 0 === t ? void 0 : t.firebase_uid),
                    k = (0, Yn.kb)({
                        firebaseUid: y
                    }).backendCrossPlatformAnalytics,
                    _ = null === k || void 0 === k ? void 0 : k.isLoading,
                    Z = !!k && !(null !== k && void 0 !== k && k.isEmpty),
                    j = (0, s.useMemo)((function() {
                        return (0, nr.G)(tr.w$.HEADER, x)
                    }), [x]);
                (0, s.useEffect)((function() {
                    function e() {
                        return (e = (0, l.Z)((0, i.Z)().mark((function e() {
                            var t;
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, f(p);
                                    case 2:
                                        t = e.sent, v(t);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }! function() {
                        e.apply(this, arguments)
                    }()
                }), [p, f]);
                var C = !(null === x || void 0 === x || null === (n = x.setup_wizard_completed_steps) || void 0 === n || !n.includes(Xn.LB.SETUP_COMPLETE)),
                    w = Jn.Z.filter((function(e) {
                        return !!x && !!x["scraped_data_".concat(e)]
                    })).length > 0,
                    S = !!j && C && (w || Z) && !_,
                    I = d === g.w6,
                    P = (0, s.useMemo)((function() {
                        var e = window.location.origin,
                            t = "https://beacons.ai" === e ? "".concat(e, "/").concat(p, "/mediakit") : "".concat(e, "/mediakit");
                        return (0, Ln.Z)(t, "origin", "lib")
                    }), [p]);
                return !S && I ? (0, F.jsx)(te.Z, {
                    title: "Media Kit",
                    cta: "Create your media kit to remove this temporary placeholder."
                }) : S || I ? (0, F.jsx)(re.Z, {
                    "data-testid": o,
                    className: (0, H.Z)("relative hover:opacity-70", {
                        "pointer-events-none": !!d
                    }),
                    padding: 0,
                    children: (0, F.jsxs)("a", {
                        href: P,
                        style: {
                            textDecoration: "none"
                        },
                        children: [(0, F.jsx)("div", {
                            className: "w-full h-48 bg-black",
                            children: !(null === j || void 0 === j || !j.header_background_image_url) && (0, F.jsx)("img", {
                                className: "w-full h-48 opacity-30",
                                alt: "media kit background",
                                src: j.header_background_image_url
                            })
                        }), (0, F.jsx)(ie.Z, {
                            className: "absolute w-full top-6",
                            children: (0, F.jsxs)("div", {
                                className: "flex flex-col items-center text-white",
                                children: [(0, F.jsx)("div", {
                                    className: "card-title",
                                    children: r.title
                                }), (0, F.jsx)("div", {
                                    className: "number-headline",
                                    children: r.title_display_name || (null === j || void 0 === j ? void 0 : j.nickname)
                                }), !(null === j || void 0 === j || !j.header_creator_categories) && (0, F.jsx)("div", {
                                    className: "flex flex-wrap items-center justify-center max-w-md mt-2",
                                    children: j.header_creator_categories.map((function(e) {
                                        var t = e.value;
                                        return (0, F.jsx)("span", {
                                            className: "px-3 py-2 mt-1 ml-2 border border-white border-solid rounded-full detail",
                                            children: t
                                        }, t)
                                    }))
                                })]
                            })
                        }), (0, F.jsxs)(ie.Z, {
                            className: "p-6",
                            children: [(0, F.jsx)("span", {
                                className: "uppercase opacity-50 text-12",
                                children: r.call_to_action
                            }), (0, F.jsx)("div", {
                                className: "mt-2 font-bold text-22",
                                children: "View My Media Kit \u2192"
                            })]
                        })]
                    })
                }) : null
            }
            var or = 380,
                ir = 351,
                ar = 450,
                lr = 380;

            function sr(e) {
                var t = e.url,
                    n = e.blockId,
                    r = e.customHeight,
                    o = (0, s.useContext)(A.Z).isComponent,
                    i = r || or;
                return (0, F.jsx)(Ne.Z, {
                    style: {
                        backgroundColor: "#FFFFFF00",
                        position: "relative",
                        pointerEvents: o && "none"
                    },
                    "data-testid": n,
                    children: (0, F.jsx)("iframe", {
                        className: "w-full",
                        style: {
                            height: i
                        },
                        src: t,
                        frameBorder: "0",
                        allow: "encrypted-media",
                        title: "spotify"
                    })
                })
            }

            function cr(e) {
                var t = e.url,
                    n = e.blockId,
                    r = e.customHeight,
                    o = (0, s.useContext)(A.Z).isComponent,
                    i = r || ir;
                return (0, F.jsx)(Ne.Z, {
                    style: {
                        backgroundColor: "#FFFFFF00",
                        position: "relative",
                        pointerEvents: o && "none"
                    },
                    "data-testid": n,
                    children: (0, F.jsx)("iframe", {
                        className: "w-full",
                        style: {
                            height: i
                        },
                        scrolling: "no",
                        frameBorder: "no",
                        src: t,
                        title: "soundcloud"
                    })
                })
            }

            function ur(e) {
                var t = e.url,
                    n = e.blockId,
                    r = e.customHeight,
                    o = (0, s.useContext)(A.Z).isComponent,
                    i = r || ar;
                return (0, F.jsx)(Ne.Z, {
                    style: {
                        backgroundColor: "#f8f8f8",
                        pointerEvents: o && "none"
                    },
                    "data-testid": n,
                    children: (0, F.jsx)("iframe", {
                        className: "w-full",
                        style: {
                            height: i
                        },
                        allow: "autoplay *; encrypted-media *;",
                        frameBorder: "0",
                        sandbox: "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation",
                        src: t,
                        title: "applemusic"
                    })
                })
            }

            function dr(e) {
                var t = e.url,
                    n = e.blockId,
                    r = e.customHeight,
                    o = (0, s.useContext)(A.Z).isComponent,
                    i = r || lr;
                return (0, F.jsx)("div", {
                    style: {
                        pointerEvents: o && "none"
                    },
                    "data-testid": n,
                    children: (0, F.jsx)("iframe", {
                        className: "w-full border-0",
                        style: {
                            height: i
                        },
                        src: t,
                        seamless: !0,
                        title: "bandcamp"
                    })
                })
            }
            var pr = function(e) {
                var t, n, r, o, i = e.block,
                    a = e.blockId,
                    l = (0, s.useContext)(A.Z).isComponent,
                    c = Q.Z[g.$W.MUSIC](i);
                if (!c && l === g.w6) return (0, F.jsx)(te.Z, {
                    title: "Music",
                    cta: "Add a music embed URL to remove this temporary placeholder."
                });
                if (!c) return null;
                var u = null === (t = i.music_urls) || void 0 === t || null === (n = t[0]) || void 0 === n ? void 0 : n.url,
                    d = null === (r = i.music_urls) || void 0 === r || null === (o = r[0]) || void 0 === o ? void 0 : o.custom_height;
                return u.includes("spotify.com") ? (0, F.jsx)(sr, {
                    url: u,
                    blockId: a,
                    customHeight: d
                }) : u.includes("soundcloud.com") ? (0, F.jsx)(cr, {
                    url: u,
                    blockId: a,
                    customHeight: d
                }) : u.includes("music.apple.com") || u.includes("podcasts.apple.com") ? (0, F.jsx)(ur, {
                    url: u,
                    blockId: a,
                    customHeight: d
                }) : u.includes("bandcamp.com") ? (0, F.jsx)(dr, {
                    url: u,
                    blockId: a,
                    customHeight: d
                }) : null
            };

            function mr(e) {
                var t, n, r = e.block,
                    o = (0, s.useContext)(A.Z).isComponent,
                    i = null === (t = r.nft_urls) || void 0 === t || null === (n = t[0]) || void 0 === n ? void 0 : n.url;
                return i || o !== g.w6 ? i && i.includes("opensea.io") ? (0, F.jsx)(fr, {
                    url: i
                }) : null : (0, F.jsx)(te.Z, {
                    title: "NFT",
                    cta: "Add a NFT embed URL to remove this temporary placeholder."
                })
            }

            function fr(e) {
                var t = e.url,
                    n = (0, s.useContext)(A.Z).isComponent,
                    r = t.split("/"),
                    o = r[r.length - 2],
                    i = r[r.length - 1];
                return (0, s.useEffect)((function() {
                    var e = document.createElement("script");
                    e.src = "https://unpkg.com/embeddable-nfts/dist/nft-card.min.js", document.body.appendChild(e)
                }), []), (0, F.jsx)(Ne.Z, {
                    style: {
                        backgroundColor: "#FFFFFF00",
                        position: "relative"
                    },
                    children: (0, F.jsx)("nft-card", {
                        contractAddress: o,
                        tokenId: i,
                        width: "100%",
                        horizontal: "true",
                        style: {
                            pointerEvents: n && "none"
                        }
                    })
                })
            }
            var hr = n(98008),
                br = n(73974),
                xr = n(43896),
                gr = n(2101),
                vr = n(59348);

            function yr(e) {
                var t, n = e.pages,
                    r = (0, d.useRouteMatch)("".concat(h.xV, "/:page/:panel?")),
                    o = (0, d.useRouteMatch)("/:username/:page?"),
                    i = (0, d.useRouteMatch)("/:page?"),
                    a = (0, s.useContext)(U.Z);
                a = (0, _.Ee)(g.wb, a);
                var l = (0, s.useContext)(A.Z),
                    c = l.isComponent,
                    u = l.isCreatorPage;
                if (!n || n.length < 2) return (0, F.jsx)("div", {
                    style: {
                        paddingTop: 36
                    }
                });
                var p = "home";
                if (c) {
                    var m, f = null === r || void 0 === r || null === (m = r.params) || void 0 === m ? void 0 : m.page,
                        b = n.find((function(e) {
                            return e.page_id === f
                        }));
                    b && (p = b.page_title)
                } else if (u) {
                    var x;
                    null !== i && void 0 !== i && null !== (x = i.params) && void 0 !== x && x.page && (p = i.params.page)
                } else null !== o && void 0 !== o && null !== (t = o.params) && void 0 !== t && t.page && (p = o.params.page);
                if (n.reduce((function(e, t) {
                        return t.display ? e + 1 : e
                    }), 0) < 2) return (0, F.jsx)("div", {
                    style: {
                        paddingTop: 36
                    }
                });
                switch (a.page.navigation) {
                    case "toptabs":
                        return (0, F.jsx)(kr, {
                            accountMatch: r,
                            pages: n,
                            theme: a,
                            pageTitle: p
                        });
                    case "bottomtabs":
                        return (0, F.jsxs)(F.Fragment, {
                            children: [(0, F.jsx)("div", {
                                style: {
                                    paddingTop: 36
                                }
                            }), (0, F.jsx)(kr, {
                                accountMatch: r,
                                pages: n,
                                theme: a,
                                pageTitle: p,
                                paddingTop: 36,
                                isTop: !1
                            })]
                        });
                    default:
                        return (0, F.jsx)(_r, {
                            accountMatch: r,
                            pages: n,
                            pageTitle: p,
                            theme: a
                        })
                }
            }

            function kr(e) {
                var t = e.accountMatch,
                    n = e.pages,
                    r = e.pageTitle,
                    o = e.theme,
                    i = e.paddingTop,
                    a = e.isTop,
                    l = void 0 === a || a,
                    c = (0, d.useHistory)(),
                    u = (0, P.Z)(),
                    p = (0, s.useContext)(A.Z),
                    m = p.displayUsername,
                    f = p.isComponent,
                    b = p.isCreatorPage,
                    x = l ? o.components.opacity : "ff",
                    g = o.card.background_color + x,
                    v = u && f ? "#ffffff00" : o.text.color,
                    y = (0, S.Z)(r);
                return n.find((function(e) {
                    return (0, S.Z)(e.page_title) === y && e.display
                })) || (y = !1), (0, F.jsxs)(vr.Z, {
                    maxWidth: "sm",
                    className: (0, H.Z)("translate-x-[-50%] ml-[50%] !py-0 h-12", {
                        "fixed bottom-9 z-[1000] left-0 !px-0": !l,
                        "mb-6": l,
                        "max-w-full": !!f
                    }),
                    style: {
                        paddingLeft: f && 0,
                        paddingRight: f && 0
                    },
                    children: [!l && (0, F.jsx)("div", {
                        style: {
                            height: i
                        }
                    }), (0, F.jsx)(gr.Z, {
                        value: y,
                        scrollButtons: !f && "auto",
                        variant: u || f ? "scrollable" : "fullWidth",
                        onChange: function(e, r) {
                            if (f) {
                                var o, i = "home";
                                if (!(null === t || void 0 === t || null === (o = t.params) || void 0 === o || !o.page)) {
                                    var a = n.filter((function(e) {
                                        return (0, S.Z)(e.page_title) === (0, S.Z)(r)
                                    }));
                                    null !== a && void 0 !== a && a.length && (i = a[0].page_id)
                                }
                                c.push("".concat(h.xV, "/").concat(i, "/home"))
                            } else b ? c.push("/".concat((0, S.Z)(r))) : c.push("/".concat(m, "/").concat((0, S.Z)(r)))
                        },
                        style: {
                            backgroundColor: g,
                            width: "100%"
                        },
                        TabIndicatorProps: {
                            style: {
                                height: 4,
                                backgroundColor: v
                            }
                        },
                        children: n.map((function(e, t) {
                            return e.display ? (0, F.jsx)(xr.Z, {
                                className: (0, H.Z)("normal-case max-w-[150px] max-h-[75px] min-w-[72px] border-b-4 border-solid border-transparent", {
                                    "!pr-12": l && t === n.length - 1 && u
                                }),
                                value: (0, S.Z)(e.page_title),
                                href: "/".concat(m, "/").concat((0, S.Z)(e.page_title)),
                                onClick: function(e) {
                                    return e.preventDefault()
                                },
                                label: e.page_title,
                                style: {
                                    color: o.text.color,
                                    fontFamily: o.text.font_family
                                }
                            }, e.page_id) : null
                        }))
                    })]
                })
            }

            function _r(e) {
                var t = e.accountMatch,
                    n = e.pages,
                    r = e.theme,
                    o = (0, d.useHistory)(),
                    i = (0, s.useContext)(A.Z),
                    l = i.displayUsername,
                    c = i.isComponent,
                    u = i.isCreatorPage,
                    p = i.headerTextColor,
                    m = (0, s.useState)(!1),
                    f = (0, a.Z)(m, 2),
                    b = f[0],
                    x = f[1];
                return (0, F.jsxs)("div", {
                    children: [(0, F.jsx)(_e.Z, {
                        onClick: function() {
                            if (c) {
                                var e, n = "home";
                                null !== t && void 0 !== t && null !== (e = t.params) && void 0 !== e && e.page && (n = t.params.page), o.push("".concat(h.xV, "/").concat(n, "/home?pageManagement=1"))
                            } else x(!0)
                        },
                        children: (0, F.jsx)(hr.Z, {
                            style: {
                                fill: p
                            },
                            className: "h-8 w-8"
                        })
                    }), (0, F.jsx)(br.ZP, {
                        anchor: "left",
                        open: b,
                        onClose: function() {
                            return x(!1)
                        },
                        children: (0, F.jsxs)("div", {
                            className: "ProfileHamburgerNavigation",
                            style: {
                                backgroundColor: r.button.background_color,
                                height: "100vh"
                            },
                            children: [(0, F.jsx)("div", {
                                onClick: function() {
                                    return x(!1)
                                },
                                style: {
                                    display: "flex",
                                    flexDirection: "row-reverse"
                                },
                                role: "button",
                                tabIndex: "0",
                                children: (0, F.jsx)(ke.Z, {
                                    style: {
                                        fill: r.text.color
                                    }
                                })
                            }), n.map((function(e) {
                                return e.display ? (0, F.jsx)(ie.Z, {
                                    onClick: function() {
                                        u ? o.push("/".concat((0, S.Z)(e.page_title))) : o.push("/".concat(l, "/").concat((0, S.Z)(e.page_title))), x(!1)
                                    },
                                    children: e.page_title
                                }, e.page_id) : null
                            }))]
                        })
                    })]
                })
            }
            var Zr = n(3505),
                jr = n(90580),
                Cr = n(44281),
                wr = n(56120),
                Sr = n(46152),
                Ir = n(5536),
                Pr = n(76998),
                Tr = n.n(Pr),
                Nr = n(2757),
                Lr = "https://www.facebook.com/sharer.php?u=",
                Er = "https://www.linkedin.com/sharing/share-offsite/?url=",
                Rr = "https://twitter.com/intent/tweet?text=Check%20out%20this%20Beacons%20page!%20-%20",
                Or = "https://wa.me/?text=Check%20out%20this%20Beacons%20page!%20-%20",
                Br = "https://www.messenger.com/new",
                Mr = "mailto:?subject= Check out this Beacons page! &body= Check out this Beacons page! - ";

            function Ar(e) {
                var t = e.children,
                    n = e.platform,
                    r = e.href;
                return (0, F.jsx)("a", {
                    onClick: function() {
                        var e;
                        null === (e = window.dataLayer) || void 0 === e || e.push({
                            event: "Share Profile To Platform Clicked",
                            platform: n
                        })
                    },
                    "aria-label": "".concat(n, " share dialog link"),
                    href: r,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "w-full hover:bg-gray-200 no-underline text-black flex items-center box-border p-2 border border-gray-200 border-solid rounded-8",
                    children: t
                })
            }

            function Ur(e) {
                var t = e.open,
                    n = e.onClose,
                    r = e.displayUsername,
                    o = e.profilePicUrl,
                    i = (0, y.Z)().sendToastMessage,
                    a = window.location,
                    l = "".concat(a.host).concat(a.pathname),
                    s = "".concat(a.protocol, "//").concat(l),
                    c = [{
                        platform: Nr.Z.FACEBOOK,
                        content: "Share on Facebook",
                        href: "".concat(Lr).concat(s)
                    }, {
                        platform: Nr.Z.LINKEDIN,
                        content: "Share on LinkedIn",
                        href: "".concat(Er).concat(s)
                    }, {
                        platform: Nr.Z.TWITTER,
                        content: "Share on Twitter",
                        href: "".concat(Rr).concat(s)
                    }, {
                        platform: Nr.Z.WHATSAPP,
                        content: "Share via WhatsApp",
                        href: "".concat(Or).concat(s)
                    }, {
                        platform: Nr.Z.MESSENGER,
                        content: "Share via Messenger",
                        href: "".concat(Br)
                    }];
                return (0, F.jsxs)(Y.Z, {
                    open: t,
                    onClose: n,
                    primaryButton: {
                        children: "Close",
                        intent: "primary",
                        onClick: n
                    },
                    hideX: !0,
                    maxWidth: "xs",
                    fullWidth: !0,
                    children: [(0, F.jsxs)("center", {
                        className: "pb-4",
                        children: [(0, F.jsx)("img", {
                            src: o,
                            alt: "profile",
                            style: {
                                height: 48,
                                width: 48
                            },
                            className: "rounded-full"
                        }), (0, F.jsx)("div", {
                            className: "truncate font-semibold uppercase pt-2",
                            children: "Share @".concat(r, "'s Beacons")
                        })]
                    }), (0, F.jsx)(_e.Z, {
                        size: "small",
                        edge: "end",
                        onClick: n,
                        "aria-label": "close dialog",
                        style: {
                            position: "absolute",
                            top: 12,
                            right: 12
                        },
                        children: (0, F.jsx)(ke.Z, {})
                    }), (0, F.jsxs)("div", {
                        "aria-label": "copy to clipboard share dialog button",
                        role: "button",
                        tabIndex: "0",
                        onClick: function() {
                            var e;
                            null === (e = window.dataLayer) || void 0 === e || e.push({
                                event: "Share Profile URL Copied"
                            }), i("Link copied!"), Tr()(s)
                        },
                        className: "cursor-pointer hover:bg-gray-200 no-underline font-bold flex items-center p-2 py-3 border border-gray-200 border-solid rounded-8",
                        children: [(0, F.jsx)("img", {
                            alt: "".concat(Nr.C[Nr.Z.BEACONS].displayName, " share dialog icon"),
                            className: "rounded-4 mx-0.5 my-0 h-6 w-6 border border-gray-100 border-solid",
                            src: Nr.C[Nr.Z.BEACONS].imageUrl
                        }), (0, F.jsx)("div", {
                            className: "max-w-full truncate mx-2",
                            children: l
                        }), (0, F.jsx)(wr.Z, {
                            color: "disabled",
                            className: "ml-auto !w-5 !h-5"
                        })]
                    }), (0, F.jsx)("hr", {
                        className: "border border-gray-200 border-solid"
                    }), (0, F.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [c.map((function(e) {
                            var t = e.platform,
                                n = e.content,
                                r = e.href,
                                o = Nr.C[t],
                                i = o.displayName,
                                a = o.imageUrl;
                            return (0, F.jsxs)(Ar, {
                                platform: t,
                                href: r,
                                children: [(0, F.jsx)("img", {
                                    alt: "".concat(i, " share dialog icon"),
                                    className: "rounded-4 mx-0.5 my-0 h-6 w-6 border border-gray-100 border-solid",
                                    src: a
                                }), (0, F.jsx)("div", {
                                    className: "mx-2",
                                    children: n
                                }), (0, F.jsx)(Ir.Z, {
                                    color: "disabled",
                                    className: "ml-auto !w-5 !h-5"
                                })]
                            }, t)
                        })), (0, F.jsxs)(Ar, {
                            platform: "email",
                            href: "".concat(Mr).concat(s),
                            children: [(0, F.jsx)(Cr.Z, {
                                className: "rounded-4 mx-0.5 my-0 h-6 w-6 border border-gray-100 border-solid"
                            }), (0, F.jsx)("div", {
                                className: "mx-2",
                                children: "Share via Email"
                            }), (0, F.jsx)(Ir.Z, {
                                color: "disabled",
                                className: "ml-auto !w-5 !h-5"
                            })]
                        }), (0, F.jsxs)(Ar, {
                            platform: "report",
                            href: "https://beacons.ai/i/report-violation",
                            children: [(0, F.jsx)(Sr.Z, {
                                className: "rounded-4 mx-0.5 my-0 h-6 w-6 border border-gray-100 border-solid !fill-red"
                            }), (0, F.jsx)("div", {
                                className: "mx-2",
                                children: "Report page"
                            }), (0, F.jsx)(Ir.Z, {
                                color: "disabled",
                                className: "ml-auto !w-5 !h-5"
                            })]
                        })]
                    })]
                })
            }

            function Fr(e) {
                var t = e.borderRadius,
                    n = e.isMobile,
                    r = e.displayUsername,
                    o = e.hasFixedShareButton,
                    c = e.profilePicUrl,
                    u = (0, s.useState)(!1),
                    d = (0, a.Z)(u, 2),
                    p = d[0],
                    m = d[1],
                    f = (0, s.useContext)(A.Z).isComponent,
                    h = function() {
                        var e = (0, l.Z)((0, i.Z)().mark((function e() {
                            var t, r, o;
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!navigator.share || !n) {
                                            e.next = 12;
                                            break
                                        }
                                        return null === (t = window.dataLayer) || void 0 === t || t.push({
                                            event: "Share Profile Button Clicked",
                                            method: "draw"
                                        }), e.prev = 2, r = window.location, e.next = 6, navigator.share({
                                            url: r.href
                                        });
                                    case 6:
                                        e.next = 10;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(2);
                                    case 10:
                                        e.next = 14;
                                        break;
                                    case 12:
                                        null === (o = window.dataLayer) || void 0 === o || o.push({
                                            event: "Share Profile Button Clicked",
                                            method: "modal"
                                        }), m(!0);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 8]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    b = (0, s.useCallback)((function() {
                        var e;
                        null === (e = window.dataLayer) || void 0 === e || e.push({
                            event: "Share Profile Menu Closed"
                        }), m(!1)
                    }), []),
                    x = function() {
                        var e = navigator.userAgent || navigator.vendor || window.opera;
                        return !!e && (/iPad|iPhone|iPod/.test(e) && !window.MSStream || e.includes("Mac"))
                    }(),
                    g = !n && !f;
                return (0, F.jsxs)(F.Fragment, {
                    children: [(0, F.jsx)(_e.Z, {
                        size: "small",
                        onClick: h,
                        "aria-label": "launch share profile dialog",
                        className: (0, H.Z)("w-8 h-8 z-50 bg-gray-100 flex items-center justify-center hover:bg-gray-100 hover:opacity-70", {
                            "absolute top-1 -right-16": g && o,
                            "fixed top-[6.5px] right-[6px]": !g && o
                        }),
                        style: {
                            borderRadius: t
                        },
                        children: x || f ? (0, F.jsx)(Zr.Z, {
                            alt: "share dialog icon",
                            className: "h-5 w-5 text-gray-700"
                        }) : (0, F.jsx)(jr.Z, {
                            alt: "share dialog icon",
                            className: "h-5 w-5 text-gray-700"
                        })
                    }), (0, F.jsx)(Ur, {
                        open: p,
                        onClose: b,
                        displayUsername: r,
                        profilePicUrl: c
                    })]
                })
            }
            var Wr = n(52571),
                Dr = n(16396),
                zr = n(35460);

            function qr(e) {
                var t = e.baseProfileInfo,
                    n = e.borderRadius,
                    r = e.displayUsername,
                    i = e.profilePicUrl,
                    l = (0, s.useContext)(U.Z),
                    c = (0, s.useState)(!1),
                    u = (0, a.Z)(c, 2),
                    d = u[0],
                    p = u[1],
                    m = (0, s.useMemo)((function() {
                        var e;
                        return null === t || void 0 === t || null === (e = t.page_layout.find((function(e) {
                            var n = null === e || void 0 === e ? void 0 : e.block_id,
                                r = t[n];
                            return (null === r || void 0 === r ? void 0 : r.block_type) === g.$W.EMAIL && (null === r || void 0 === r ? void 0 : r.display)
                        }))) || void 0 === e ? void 0 : e.block_id
                    }), [t]),
                    f = null === t || void 0 === t ? void 0 : t[m],
                    h = f ? (0, o.Z)((0, o.Z)((0, o.Z)({}, g.ib[g.$W.EMAIL].defaultBlock), f), {}, {
                        collapse_style: g.Mo.EXPOSED
                    }) : (0, o.Z)((0, o.Z)({}, g.ib[g.$W.EMAIL].defaultBlock), {}, {
                        display: !0,
                        show_name_field: !0
                    });
                return (0, F.jsxs)(F.Fragment, {
                    children: [(0, F.jsx)(Dr.Z, {
                        variant: "secondary",
                        size: "tiny",
                        preIcon: (0, F.jsx)(Wr.Z, {
                            className: "text-gray-700 text-18"
                        }),
                        className: "!bg-gray-100",
                        onClick: function() {
                            return p(!0)
                        },
                        style: {
                            borderRadius: n
                        },
                        children: (0, F.jsx)("div", {
                            className: "text-gray-700 text-small-bold",
                            children: "Subscribe"
                        })
                    }), (0, F.jsxs)(zr.Z, {
                        open: d,
                        onClose: function() {
                            return p(!1)
                        },
                        fullWidth: !0,
                        largeMaxWidth: !0,
                        className: "Profile",
                        children: [(0, F.jsxs)("div", {
                            className: "flex flex-col items-center mb-4",
                            children: [(0, F.jsx)("img", {
                                src: i,
                                alt: "profile",
                                style: {
                                    height: 80,
                                    width: 80
                                },
                                className: "rounded-full"
                            }), (0, F.jsx)("div", {
                                className: "title mt-4 text-center",
                                children: "Subscribe to ".concat(r)
                            })]
                        }), (0, F.jsx)(U.Z.Provider, {
                            value: (0, o.Z)((0, o.Z)({}, g.wb), {}, {
                                card: (0, o.Z)((0, o.Z)({}, g.wb.card), {}, {
                                    outline: !0
                                }),
                                components: (0, o.Z)((0, o.Z)({}, g.wb.components), {}, {
                                    custom_border_radius: n,
                                    theme: l.components.theme
                                })
                            }),
                            children: (0, F.jsx)(qe, {
                                block: h,
                                blockId: m
                            })
                        })]
                    })]
                })
            }

            function Hr(e) {
                var t = e.baseProfileInfo,
                    n = e.isMobile,
                    r = e.displayUsername,
                    o = e.profilePicUrl,
                    i = (0, s.useContext)(U.Z),
                    a = (0, _.wK)(i);
                return i.show_subscribe_button ? (0, F.jsxs)("div", {
                    className: "py-4 flex justify-between",
                    children: [(0, F.jsx)(qr, {
                        baseProfileInfo: t,
                        borderRadius: a,
                        displayUsername: r,
                        profilePicUrl: o
                    }), i.show_share_button && (0, F.jsx)(Fr, {
                        borderRadius: a,
                        isMobile: n,
                        displayUsername: r,
                        profilePicUrl: o
                    })]
                }) : i.show_share_button ? (0, F.jsx)(Fr, {
                    borderRadius: a,
                    isMobile: n,
                    displayUsername: r,
                    hasFixedShareButton: !0,
                    profilePicUrl: o
                }) : null
            }
            var $r, Vr, Gr = n(61277),
                Kr = ["title", "titleId"];

            function Yr() {
                return Yr = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, Yr.apply(this, arguments)
            }

            function Xr(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }

            function Jr(e, t) {
                var n = e.title,
                    r = e.titleId,
                    o = Xr(e, Kr);
                return s.createElement("svg", Yr({
                    width: 17,
                    height: 21,
                    viewBox: "0 0 17 21",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, o), n ? s.createElement("title", {
                    id: r
                }, n) : null, $r || ($r = s.createElement("path", {
                    d: "M1 13.9078C1.00001 13.5518 1.02953 13.2273 1.08687 12.9316C1.60967 9.76976 4.45905 4.86813 8.73361 1.3182C8.9391 1.14755 9.24332 1.31968 9.21695 1.58548C8.81313 5.65538 9.41132 8.14833 10.2264 9.429C10.6841 10.1481 11.6772 10.4098 12.3579 9.8968C13.1139 9.32712 13.1784 8.3488 13.2444 7.3483C13.249 7.27831 13.2536 7.20822 13.2585 7.13814C13.2701 6.97114 13.4687 6.89882 13.5826 7.02143C15.7503 9.35322 15.7503 12.2654 15.7503 13.9078C15.7503 13.9077 15.7503 13.9078 15.7503 13.9078C15.7503 17.4004 12.4484 20.2318 8.37516 20.2318C4.30197 20.2318 1 17.4004 1 13.9078C1 13.9078 1 13.9077 1 13.9078Z",
                    fill: "#FF5C00"
                })), Vr || (Vr = s.createElement("path", {
                    d: "M1 13.9078C1.00001 13.5518 1.02953 13.2273 1.08687 12.9316C1.60967 9.76976 4.45905 4.86813 8.73361 1.3182C8.9391 1.14755 9.24332 1.31968 9.21695 1.58548C8.81313 5.65538 9.41132 8.14833 10.2264 9.429C10.6841 10.1481 11.6772 10.4098 12.3579 9.8968C13.1139 9.32712 13.1784 8.3488 13.2444 7.3483C13.249 7.27831 13.2536 7.20822 13.2585 7.13814C13.2701 6.97114 13.4687 6.89882 13.5826 7.02143C15.7503 9.35322 15.7503 12.2654 15.7503 13.9078M1 13.9078C1 17.4004 4.30197 20.2318 8.37516 20.2318C12.4484 20.2318 15.7503 17.4004 15.7503 13.9078M1 13.9078C1 13.9077 1 13.9078 1 13.9078ZM15.7503 13.9078C15.7503 13.9078 15.7503 13.9077 15.7503 13.9078Z",
                    stroke: "#FF5C00",
                    strokeWidth: 1.5
                })))
            }
            var Qr, eo = s.forwardRef(Jr),
                to = (n.p, ["title", "titleId"]);

            function no() {
                return no = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, no.apply(this, arguments)
            }

            function ro(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }

            function oo(e, t) {
                var n = e.title,
                    r = e.titleId,
                    o = ro(e, to);
                return s.createElement("svg", no({
                    width: 19,
                    height: 17,
                    viewBox: "0 0 19 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, o), n ? s.createElement("title", {
                    id: r
                }, n) : null, Qr || (Qr = s.createElement("path", {
                    d: "M15.7201 2.07555C13.5201 0.575545 10.8034 1.27555 9.33677 2.99221C7.8701 1.27555 5.15343 0.567212 2.95343 2.07555C1.78677 2.87555 1.05343 4.22554 1.00343 5.65055C0.886766 8.88388 3.75343 11.4755 8.12843 15.4505L8.21177 15.5255C8.8451 16.1005 9.8201 16.1005 10.4534 15.5172L10.5451 15.4339C14.9201 11.4672 17.7784 8.87555 17.6701 5.64221C17.6201 4.22555 16.8868 2.87555 15.7201 2.07555Z",
                    fill: "#FF0000",
                    stroke: "#FF0000",
                    strokeWidth: 1.5
                })))
            }
            var io, ao = s.forwardRef(oo),
                lo = (n.p, ["title", "titleId"]);

            function so() {
                return so = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, so.apply(this, arguments)
            }

            function co(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }

            function uo(e, t) {
                var n = e.title,
                    r = e.titleId,
                    o = co(e, lo);
                return s.createElement("svg", so({
                    width: 21,
                    height: 19,
                    viewBox: "0 0 21 19",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, o), n ? s.createElement("title", {
                    id: r
                }, n) : null, io || (io = s.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.34085 6.23646L10.9575 1.6198C11.4408 1.12813 12.2242 1.12813 12.7158 1.61147C13.0158 1.91147 13.1408 2.33647 13.0575 2.75313L12.2658 6.5698H16.9742C18.7658 6.5698 19.9742 8.40313 19.2742 10.0531L16.5575 16.3948C16.2908 17.0031 15.6908 17.4031 15.0242 17.4031H7.52418C6.60751 17.4031 5.85751 16.6531 5.85751 15.7365V7.41147C5.85751 6.9698 6.03251 6.5448 6.34085 6.23646ZM1.46969 17.0843C1.45232 17.0838 1.43462 17.0833 1.41667 17.0833C1.39871 17.0833 1.38102 17.0838 1.36365 17.0843C1.15927 17.0903 1 17.0949 1 16.25V7.91666C1 7.07181 1.15927 7.07641 1.36364 7.08232C1.38102 7.08282 1.39871 7.08333 1.41667 7.08333C1.43462 7.08333 1.45232 7.08282 1.46969 7.08232C1.67406 7.07641 1.83333 7.07181 1.83333 7.91666V16.25C1.83333 17.0949 1.67406 17.0903 1.46969 17.0843Z",
                    fill: "#0085FF",
                    stroke: "#0085FF",
                    strokeWidth: 1.5
                })))
            }
            var po = s.forwardRef(uo),
                mo = (n.p, ["style", "src", "alt", "poster"]);
            var fo = function(e) {
                var t = e.style,
                    n = e.src,
                    r = e.alt,
                    i = e.poster,
                    a = void 0 === i ? void 0 : i,
                    l = (0, Ee.Z)(e, mo),
                    c = (0, s.useContext)(U.Z);
                c = (0, _.Ee)(g.wb, c);
                var u, d = (0, _.wK)(c),
                    p = (0, o.Z)({
                        borderRadius: d,
                        maxWidth: "100%"
                    }, t);
                return u = a || !(0, _.T3)(n, "video") ? n : "".concat(n, "#t=0.1"), (0, _.T3)(u, "video") ? (0, F.jsxs)("video", (0, o.Z)((0, o.Z)({
                    style: p,
                    poster: a
                }, l), {}, {
                    children: [(0, F.jsx)("source", {
                        src: u,
                        type: "video/mp4"
                    }), (0, F.jsx)("track", {
                        kind: "captions",
                        srcLang: "en",
                        label: "english_captions"
                    })]
                })) : (0, F.jsx)("img", (0, o.Z)({
                    src: u,
                    alt: r,
                    style: p
                }, l))
            };

            function ho(e) {
                var t = e.order,
                    n = e.orderReactions,
                    r = e.reactionSetter;
                return (0, F.jsxs)("div", {
                    style: {
                        maxWidth: "450px"
                    },
                    children: [(0, F.jsx)(bo, {
                        order: t,
                        orderReactions: n,
                        reactionSetter: r
                    }), (0, F.jsx)(go, {
                        order: t,
                        orderReactions: n,
                        reactionSetter: r
                    })]
                })
            }

            function bo(e) {
                var t = e.order,
                    n = e.orderReactions,
                    r = e.reactionSetter,
                    o = (0, s.useContext)(U.Z);
                o = (0, _.Ee)(g.wb, o);
                return t.media_instructions ? (0, F.jsxs)(ie.Z, {
                    style: {
                        marginTop: 15,
                        borderTop: "1px solid ".concat(o.text.color, "33"),
                        borderRadius: 0
                    },
                    tag: "center",
                    children: [(0, F.jsxs)(ie.Z, {
                        style: {
                            marginTop: 10
                        },
                        children: [t.name && (0, F.jsxs)("span", {
                            children: [t.name.split(" ")[0], "'s request: "]
                        }), (0, F.jsx)(ie.Z, {
                            style: {
                                marginTop: 5,
                                marginBottom: 5
                            },
                            tag: "p",
                            children: t.instructions
                        })]
                    }), (0, F.jsx)(fo, {
                        controls: !0,
                        src: "".concat(t.media_instructions, "?alt=media"),
                        alt: "media instructions",
                        autoPlay: !1
                    }), !!n && n.length && (0, F.jsx)(ie.Z, {
                        children: (0, F.jsx)(vo, {
                            reactions: n[0],
                            reactionSetter: r(0)
                        })
                    })]
                }) : null
            }
            var xo = function(e, t) {
                var n = e.split(".");
                return n.pop(), n[n.length - 1] = n[n.length - 1] + t, n.join(".")
            };

            function go(e) {
                var t = e.order,
                    n = e.orderReactions,
                    r = e.reactionSetter,
                    o = (0, s.useContext)(A.Z).displayUsername,
                    i = xo(t.video_url, "_stitched.mp4?alt=media"),
                    a = xo(t.video_url, "_poster.png?alt=media");
                t.media_instructions && (i = t.video_url, a = null);
                var l = t.media_instructions ? null : "2px solid";
                return (0, F.jsxs)(ie.Z, {
                    style: {
                        marginTop: 10,
                        borderTop: l,
                        borderRadius: 0
                    },
                    tag: "center",
                    children: [(0, F.jsx)(ie.Z, {
                        style: {
                            marginBottom: 5,
                            marginTop: 5
                        },
                        children: t.media_instructions ? (0, F.jsxs)("span", {
                            children: [o.split("@")[0], "'s response: "]
                        }) : t.name && (0, F.jsxs)("span", {
                            children: [t.name.split(" ")[0], "'s request: "]
                        })
                    }), (0, F.jsx)(fo, {
                        controls: !0,
                        src: i,
                        autoPlay: !1,
                        poster: a,
                        alt: "response"
                    }), !!n && n.length && (0, F.jsx)(vo, {
                        reactions: n[1],
                        reactionSetter: r(1)
                    })]
                })
            }

            function vo(e) {
                var t = e.reactions,
                    n = e.reactionSetter,
                    r = {
                        like: (0, F.jsx)(po, {}),
                        love: (0, F.jsx)(ao, {}),
                        fire: (0, F.jsx)(eo, {})
                    };
                return (0, F.jsx)("center", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        maxWidth: 250
                    },
                    children: t.map((function(e, t) {
                        var o = e.toggled ? "bold" : "normal",
                            i = e.toggled ? "rgb(0,0,0,0.1)" : null;
                        return (0, F.jsxs)(oe.Z, {
                            variant: "text",
                            onClick: function() {
                                return n(t)
                            },
                            style: {
                                fontWeight: o,
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: i
                            },
                            children: [r[e.reaction_type], " ", !!e.reaction_count && (0, F.jsx)("span", {
                                style: {
                                    marginLeft: 5
                                },
                                children: e.reaction_count
                            })]
                        }, e.reaction_type)
                    }))
                })
            }
            var yo = function() {
                    var e = (0, s.useContext)(A.Z).recentVideoInteractions,
                        t = (0, s.useState)([]),
                        n = (0, a.Z)(t, 2),
                        r = n[0],
                        o = n[1];

                    function c(e, t) {
                        return t.filter((function(t) {
                            return t.content_id === e
                        }))
                    }

                    function u(e, t) {
                        var n = [],
                            r = t.map((function(e) {
                                n.push(e.reaction_type);
                                var t = "true" === localStorage.getItem(e.content_id + e.reaction_type);
                                return {
                                    reaction_count: e.reaction_count,
                                    reaction_type: e.reaction_type,
                                    content_id: e.content_id,
                                    toggled: t || !1
                                }
                            })),
                            o = ["like", "fire", "love"].filter((function(e) {
                                return !n.includes(e)
                            })).map((function(t) {
                                return {
                                    reaction_count: 0,
                                    reaction_type: t,
                                    content_id: e,
                                    toggled: !1
                                }
                            }));
                        return r.concat(o).sort((function(e, t) {
                            return e.reaction_type.localeCompare(t.reaction_type)
                        }))
                    }

                    function d() {
                        return (d = (0, l.Z)((0, i.Z)().mark((function e(t) {
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, (0, Z.Z)("manage_order", {
                                            action: "set_reactions",
                                            content_id: t.content_id,
                                            reaction_type: t.reaction_type,
                                            should_increment: t.toggled
                                        });
                                    case 3:
                                        e.next = 8;
                                        break;
                                    case 5:
                                        e.prev = 5, e.t0 = e.catch(0), console.log(e.t0);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 5]
                            ])
                        })))).apply(this, arguments)
                    }(0, s.useEffect)((function() {
                        function t() {
                            return (t = (0, l.Z)((0, i.Z)().mark((function t() {
                                var n, a, l, s;
                                return (0, i.Z)().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!e || r.length) {
                                                t.next = 16;
                                                break
                                            }
                                            if ((n = e.flatMap((function(e) {
                                                    return [e.request_content_id, e.response_content_id]
                                                }))).length) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 4:
                                            return t.prev = 4, t.next = 7, (0, Z.Z)("manage_order", {
                                                action: "get_reactions",
                                                content_ids: n
                                            });
                                        case 7:
                                            a = t.sent, l = a.data.content_reaction_info, s = e.map((function(e) {
                                                var t = c(e.request_content_id, l),
                                                    n = c(e.response_content_id, l);
                                                return [u(e.request_content_id, t), u(e.response_content_id, n)]
                                            })), o(s), t.next = 16;
                                            break;
                                        case 13:
                                            t.prev = 13, t.t0 = t.catch(4), console.log(t.t0);
                                        case 16:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [4, 13]
                                ])
                            })))).apply(this, arguments)
                        }! function() {
                            t.apply(this, arguments)
                        }()
                    }), [e]);
                    var p = function(e) {
                        return function(t) {
                            return function(n) {
                                var i = (0, de.Z)(r),
                                    a = i[e][t][n],
                                    l = a.toggled,
                                    s = a.reaction_count;
                                a.reaction_count = l ? s - 1 : s + 1, a.toggled = !l, localStorage.setItem(a.content_id + a.reaction_type, a.toggled), i[e][t][n] = a, o(i),
                                    function(e) {
                                        d.apply(this, arguments)
                                    }(a)
                            }
                        }
                    };
                    if (!e || 0 === e.length) return null;
                    var m = e.slice(0, 3);
                    return (0, F.jsx)("center", {
                        children: (0, F.jsxs)(Ne.Z, {
                            style: {
                                maxWidth: 450,
                                paddingBottom: 15
                            },
                            children: [(0, F.jsx)(ie.Z, {
                                tag: "center",
                                style: {
                                    marginTop: "15px",
                                    fontSize: 18,
                                    fontWeight: "bold"
                                },
                                children: "My recent requests"
                            }), m.map((function(e, t) {
                                return (0, F.jsx)(ho, {
                                    order: e,
                                    orderReactions: r[t],
                                    reactionSetter: p(t)
                                }, e.id)
                            }))]
                        })
                    })
                },
                ko = n(32791),
                _o = n(16378),
                Zo = n(90105);

            function jo(e) {
                var t = e.orderInfo,
                    n = e.setOrderInfo,
                    r = (0, s.useContext)(A.Z).isComponent;
                return "object" === typeof t.media_instructions ? (0, F.jsx)(le.Z, {
                    intent: "primary",
                    fullWidth: !0,
                    onClick: function() {
                        return n({
                            media_instructions: ""
                        })
                    },
                    children: "Reupload video/image"
                }) : (0, F.jsxs)("label", {
                    htmlFor: "mediaUpload",
                    children: [(0, F.jsx)("input", {
                        accept: "video/mp4,video/x-m4v,video/*,image/*",
                        id: "mediaUpload",
                        style: {
                            display: "none"
                        },
                        disabled: r,
                        type: "file",
                        onChange: function(e) {
                            e.target.files[0] && n({
                                media_instructions: e.target.files[0]
                            })
                        }
                    }), (0, F.jsx)(le.Z, {
                        intent: "primary",
                        component: "span",
                        fullWidth: !0,
                        normalHeight: !0,
                        children: "Upload video or image"
                    })]
                })
            }

            function Co(e) {
                var t = e.minBid,
                    n = e.orderInfo,
                    r = e.setOrderInfo,
                    o = (0, s.useState)(void 0),
                    i = (0, a.Z)(o, 2),
                    l = i[0],
                    c = i[1],
                    u = (0, s.useState)(""),
                    d = (0, a.Z)(u, 2),
                    p = d[0],
                    m = d[1];
                return (0, s.useEffect)((function() {
                    c(n.bid), m(0 === t ? "optional" : "minimum  $".concat(t / 100))
                }), [t, n.bid]), (0, F.jsx)(X.Z, {
                    label: "Request cost (".concat(p, ")"),
                    id: "Request cost (".concat(p, ")"),
                    value: "".concat(l / 100),
                    onChange: function(e) {
                        if ("" === e.target.value || /^[0-9\b]+$/.test(e.target.value)) {
                            var t = 100 * Number(e.target.value);
                            c(t)
                        }
                    },
                    onBlur: function() {
                        l >= t ? (r({
                            bid: l
                        }), 0 !== t && m((0, F.jsxs)("span", {
                            style: {
                                color: "#1c1c1c"
                            },
                            children: ["minimum $", t / 100]
                        }))) : (r({
                            bid: t
                        }), c(t), m((0, F.jsxs)("span", {
                            style: {
                                color: "red",
                                fontWeight: "bold"
                            },
                            children: ["minimum $", t / 100]
                        })))
                    },
                    InputProps: {
                        startAdornment: "$",
                        inputProps: {
                            pattern: "[0-9]*",
                            inputMode: "numeric"
                        }
                    },
                    fullWidth: !0
                })
            }

            function wo(e) {
                var t = e.orderInfo,
                    n = e.open,
                    r = e.setOpen,
                    o = "Thank you for ".concat(0 === t.bid ? "your request" : "supporting ".concat(t.creator_username), "!"),
                    i = (0, F.jsxs)("span", {
                        children: ["You will get a confirmation email at ", (0, F.jsx)("strong", {
                            children: t.email
                        }), ". Please make sure to check your spam and promotions folders in case it gets misplaced.", " ", t.bid > 0 && (0, F.jsxs)("span", {
                            children: ["Your card will only be charged once", " ", (0, F.jsx)("strong", {
                                children: t.creator_username
                            }), " responds. Otherwise, the", " ", (0, F.jsxs)("strong", {
                                children: ["$", t.bid / 100]
                            }), " hold on your card will be removed.", " "]
                        }), "Join ", (0, F.jsx)("strong", {
                            children: t.creator_username
                        }), "'s community to receive future updates."]
                    });
                return (0, F.jsx)(se, {
                    open: n,
                    setOpen: r,
                    mainCta: o,
                    additionalInformation: i,
                    acquisitionChannel: "requests_block"
                })
            }
            var So = function(e) {
                var t = e.minBid,
                    n = e.setMinBid,
                    r = e.orderInfo,
                    c = e.open,
                    u = e.setOpen,
                    d = e.setOrderInfo,
                    p = e.setSuccessfullyPaid,
                    m = (0, s.useContext)(Qn.fE),
                    f = (0, s.useContext)(A.Z).disablePayments,
                    h = (0, s.useState)(!1),
                    b = (0, a.Z)(h, 2),
                    x = b[0],
                    v = b[1],
                    y = (0, s.useState)(""),
                    k = (0, a.Z)(y, 2),
                    j = k[0],
                    C = k[1],
                    w = (0, s.useState)(0),
                    S = (0, a.Z)(w, 2),
                    I = S[0],
                    P = S[1],
                    T = (0, s.useMemo)((function() {
                        return x && r.email && !K()(r.email) ? "Email invalid" : ""
                    }), [x, r.email]);
                (0, s.useEffect)((function() {
                    void 0 === t && n(r.bid)
                }), [t, n, r]);
                var N = (0, s.useCallback)(function() {
                        var e = (0, l.Z)((0, i.Z)().mark((function e(t) {
                            var n, o, a, l, s;
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.name.split(".").pop().toLowerCase(), o = "requests/".concat(r.id, ".").concat(n), console.log(o), a = {
                                            contentType: t.type
                                        }, l = m.getStorageRef(o), s = m.uploadBytesResumable(l, t, a), e.abrupt("return", new Promise((function(e, t) {
                                            s.on("state_changed", (function(e) {
                                                var t = e.bytesTransferred / e.totalBytes * 100;
                                                P(t), console.log("Upload is ".concat(t, "% done"))
                                            }), (function(e) {
                                                console.log("Unsuccessful upload"), t(e)
                                            }), (function() {
                                                e("")
                                            }))
                                        })));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [m, r]),
                    L = (0, s.useCallback)(function() {
                        var e = (0, l.Z)((0, i.Z)().mark((function e(t) {
                            var n;
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (null !== t && void 0 !== t && t.preventDefault && t.preventDefault(), !f) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 4, (0, _._v)(1e4);
                                    case 4:
                                        return e.abrupt("return", "deny");
                                    case 5:
                                        if ("object" !== typeof r.media_instructions) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 8, N(r.media_instructions);
                                    case 8:
                                        if (!(r.bid > 0)) {
                                            e.next = 14;
                                            break
                                        }
                                        return e.next = 11, (0, Z.Z)("manage_order", {
                                            action: "create_payment_intent",
                                            order: r,
                                            order_type: "request"
                                        });
                                    case 11:
                                        return n = e.sent, console.log(n), e.abrupt("return", n.data.client_secret);
                                    case 14:
                                        return e.abrupt("return", "freeOrder");
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [f, r, N]),
                    E = (0, s.useCallback)((function() {
                        window.gtag && window.gtag("event", "purchase", {
                            value: r.bid,
                            currency: "USD",
                            transaction_id: r.id,
                            affiliation: "Requests",
                            items: [{
                                name: "Requests"
                            }]
                        })
                    }), [r]);
                if (!r || !r.instructions || void 0 === t) return null;
                var R = r.instructions.split("[Request prompt: ")[1].split("]")[0],
                    O = r.creator_username.length > 0 && r.instructions.length > R.length + 18 && r.name.length > 0 && K()(r.email) && r.bid <= g.lr;
                return (0, F.jsxs)(Y.Z, {
                    title: "Send ".concat(r.creator_username, " a request"),
                    open: c,
                    onClose: function() {
                        return u(!1)
                    },
                    scroll: "body",
                    children: [(0, F.jsx)("div", {
                        children: R
                    }), (0, F.jsx)("div", {
                        className: "MarginTopM",
                        children: (0, F.jsx)(X.Z, {
                            label: "Your email",
                            id: "Your email",
                            placeholder: "jane@example.com",
                            InputProps: {
                                startAdornment: " "
                            },
                            value: r.email,
                            onChange: function(e) {
                                return d({
                                    email: e.target.value
                                })
                            },
                            onBlur: function() {
                                return v(!0)
                            },
                            error: !!T,
                            helperText: T,
                            type: "email",
                            autoComplete: "email",
                            fullWidth: !0
                        })
                    }), (0, F.jsx)("div", {
                        className: "MarginTopS",
                        children: (0, F.jsx)(X.Z, {
                            label: "Your name",
                            id: "Your name",
                            placeholder: "Jane Doe",
                            InputProps: {
                                startAdornment: " "
                            },
                            value: r.name,
                            onChange: function(e) {
                                return d({
                                    name: e.target.value
                                })
                            },
                            autoComplete: "name",
                            fullWidth: !0
                        })
                    }), (0, F.jsx)("div", {
                        className: "MarginTopS",
                        children: (0, F.jsx)(X.Z, {
                            label: "Your request",
                            id: "Your request",
                            placeholder: "I would like...",
                            InputProps: {
                                startAdornment: " "
                            },
                            value: j,
                            onChange: function(e) {
                                j.length <= 250 && C(e.target.value.slice(0, 250))
                            },
                            onBlur: function() {
                                d({
                                    instructions: "[Request prompt: ".concat(R, "] ").concat(j)
                                })
                            },
                            helperText: "".concat(j.length, "/250"),
                            multiline: !0,
                            fullWidth: !0
                        })
                    }), (0, F.jsx)("div", {
                        className: "MarginTopS",
                        children: (0, F.jsx)(jo, {
                            orderInfo: r,
                            setOrderInfo: d
                        })
                    }), 0 !== t && (0, F.jsx)("div", {
                        className: "MarginTopL",
                        children: (0, F.jsx)(Zo.Z, {
                            state: r.make_private,
                            text: "Make request private",
                            onChange: function() {
                                return d({
                                    make_private: !r.make_private
                                })
                            }
                        })
                    }), (0, F.jsx)("div", {
                        className: "MarginTopL",
                        children: (0, F.jsx)(Co, {
                            minBid: t,
                            orderInfo: r,
                            setOrderInfo: d
                        })
                    }), (0, F.jsx)("div", {
                        className: "MarginTopL",
                        children: (0, F.jsx)(ne.Z, {
                            orderInfo: (0, o.Z)((0, o.Z)({}, r), {}, {
                                media_instructions: "object" === typeof r.media_instructions ? "https://".concat("cdn.beacons.ai", "/requests/").concat(r.id, ".").concat(r.media_instructions.name.split(".").pop().toLowerCase()) : ""
                            }),
                            allowPay: O,
                            orderType: ee.Z.REQUEST,
                            paymentSuccessEndpoint: "create_request_paypal",
                            setSuccessfullyPaid: p,
                            isRequest: !0,
                            dynamicHidePayment: !0,
                            setSuccessfulPaymentCallback: E
                        })
                    }), (0, F.jsx)(J.Z, {
                        order: (0, o.Z)((0, o.Z)({}, r), {}, {
                            media_instructions: "object" === typeof r.media_instructions ? "https://".concat("cdn.beacons.ai", "/requests/").concat(r.id, ".").concat(r.media_instructions.name.split(".").pop().toLowerCase()) : ""
                        }),
                        retrievePaymentIntent: L,
                        setSuccessfullyPaid: p,
                        allowPay: O,
                        paymentSuccessEndpoint: "create_request_stripe",
                        uploadProgress: I,
                        dynamicHidePayment: !0,
                        setSuccessfulPaymentCallback: E
                    })]
                })
            };

            function Io(e) {
                var t = e.setMinBid,
                    n = e.setOrderInfo,
                    r = e.menu,
                    o = e.selected,
                    i = e.setSelected,
                    a = (0, s.useContext)(U.Z);
                a = (0, _.Ee)(g.wb, a);
                var l = (0, s.useCallback)((function(e) {
                    n({
                        bid: 100 * r[e].fee,
                        instructions: "[Request prompt: ".concat(r[e].service, "]"),
                        request_id: r[e].request_id
                    }), t(100 * r[e].fee), i(e)
                }), [r, n, t, i]);
                return 1 === r.length ? (0, F.jsx)(ie.Z, {
                    className: "TextAlignCenter",
                    "aria-label": "single request service",
                    children: (0, F.jsx)($.Z, {
                        children: r[0].service
                    })
                }) : (0, F.jsx)(ie.Z, {
                    children: r.map((function(e, t) {
                        return (0, F.jsx)("div", {
                            style: {
                                borderTop: 0 === t && "1px solid ".concat(a.text.color, "33"),
                                borderBottom: "1px solid ".concat(a.text.color, "33")
                            },
                            className: "RequestForm",
                            children: (0, F.jsxs)("div", {
                                className: "FlexStart JustifySpaceBetween CursorPointer MarginTopS MarginBottomS",
                                onClick: function() {
                                    return l(t)
                                },
                                role: "button",
                                tabIndex: "0",
                                children: [(0, F.jsx)("span", {
                                    children: t === o ? (0, F.jsx)(ko.Z, {
                                        style: {
                                            fontSize: 20,
                                            fill: a.text.color
                                        }
                                    }) : (0, F.jsx)(_o.Z, {
                                        style: {
                                            fontSize: 20,
                                            fill: a.text.color
                                        }
                                    })
                                }), (0, F.jsx)("span", {
                                    style: {
                                        marginLeft: 8,
                                        marginRight: 8,
                                        flex: "1 1 auto"
                                    },
                                    "aria-label": "multiple request service ".concat(t),
                                    children: (0, F.jsx)($.Z, {
                                        children: e.service
                                    })
                                }), (0, F.jsxs)("span", {
                                    "aria-label": "multiple request fee ".concat(t),
                                    children: ["$", e.fee]
                                })]
                            })
                        }, e.service)
                    }))
                })
            }

            function Po(e) {
                var t = e.minBid,
                    n = e.setMinBid,
                    r = e.orderInfo,
                    o = e.setOrderInfo,
                    i = e.open,
                    l = e.setOpen,
                    c = (0, s.useState)(!1),
                    u = (0, a.Z)(c, 2),
                    d = u[0],
                    p = u[1];
                return i ? d ? (0, F.jsx)(wo, {
                    orderInfo: r,
                    open: i,
                    setOpen: l
                }) : (0, F.jsx)(So, {
                    minBid: t,
                    setMinBid: n,
                    orderInfo: r,
                    setOrderInfo: o,
                    open: i,
                    setOpen: l,
                    setSuccessfullyPaid: p
                }) : null
            }
            var To = function(e) {
                    var t = e.block,
                        n = e.blockId,
                        r = (0, s.useContext)(A.Z),
                        o = r.isComponent,
                        i = r.displayUsername,
                        l = r.firebaseUid,
                        c = t.request_form_title,
                        u = t.menu,
                        d = t.skip_manual_approval_of_requests,
                        p = (0, s.useState)((0, V.Z)()),
                        m = (0, a.Z)(p, 1)[0],
                        f = (0, _.Xo)((function() {
                            var e, t, n, r = Date.now() / 1e3,
                                o = null !== (e = u[0]) && void 0 !== e && e.fee ? 100 * u[0].fee : 0,
                                a = null !== (t = u[0]) && void 0 !== t && t.service ? u[0].service : "Ask anything!",
                                s = null !== (n = u[0]) && void 0 !== n && n.request_id ? u[0].request_id : null;
                            return {
                                bid: o,
                                instructions: "[Request prompt: ".concat(a, "]"),
                                creator_username: i,
                                firebase_uid: l,
                                time_created: r,
                                request_content_id: (0, V.Z)(),
                                media_url: "",
                                name: "",
                                status: d ? "open" : "created",
                                make_private: !1,
                                email: "",
                                request_id: s
                            }
                        })),
                        h = f.value,
                        b = f.updateValue,
                        x = (0, s.useState)(void 0),
                        v = (0, a.Z)(x, 2),
                        y = v[0],
                        k = v[1],
                        Z = (0, s.useState)(!1),
                        j = (0, a.Z)(Z, 2),
                        C = j[0],
                        w = j[1],
                        S = (0, s.useState)(0),
                        I = (0, a.Z)(S, 2),
                        P = I[0],
                        T = I[1];
                    (0, s.useEffect)((function() {
                        b({
                            id: m
                        })
                    }), [m]), (0, s.useEffect)((function() {
                        var e;
                        b({
                            bid: 100 * (null === (e = u[0]) || void 0 === e ? void 0 : e.fee)
                        }), T(0)
                    }), [u]);
                    var N = Q.Z[g.$W.REQUESTS](t);
                    return h && N ? (0, F.jsxs)(re.Z, {
                        "data-testid": n,
                        children: [(0, F.jsx)(ie.Z, {
                            tag: "center",
                            style: {
                                fontSize: 18,
                                fontWeight: "bold"
                            },
                            "aria-label": "requests title",
                            children: c
                        }), (0, F.jsx)("div", {
                            className: "MarginTopM",
                            children: (0, F.jsx)(Io, {
                                menu: u,
                                setMinBid: k,
                                setOrderInfo: b,
                                selected: P,
                                setSelected: T
                            })
                        }), (0, F.jsx)("div", {
                            className: "MarginTopM",
                            children: (0, F.jsx)(oe.Z, {
                                variant: "contained",
                                className: "CardButton",
                                onClick: function() {
                                    o || w(!0)
                                },
                                invert: !0,
                                fullWidth: !0,
                                "aria-label": "Start ".concat(0 === h.bid ? "Free" : "$".concat(h.bid / 100), " Request"),
                                children: (0, F.jsxs)("span", {
                                    style: {
                                        padding: 6
                                    },
                                    children: ["Start ", 0 === h.bid ? "Free" : "$".concat(h.bid / 100), " Request"]
                                })
                            })
                        }), (0, F.jsx)(Po, {
                            minBid: y,
                            setMinBid: k,
                            orderInfo: h,
                            setOrderInfo: b,
                            open: C,
                            setOpen: w
                        })]
                    }) : null
                },
                No = n(82271),
                Lo = n(2156),
                Eo = n(98333),
                Ro = n(24940),
                Oo = n(30151),
                Bo = n(57621),
                Mo = n(78703),
                Ao = n.n(Mo),
                Uo = n(62307),
                Fo = n.n(Uo),
                Wo = n(36676);
            n(80444);

            function Do() {
                var e = (0, s.useContext)(A.Z).marketplaceItems;
                if (!e) return null;
                var t = e.filter((function(e) {
                    return e.is_selling
                }));
                if (!t || !t.length) return null;
                var n = t.length > 1;
                return (0, F.jsx)(c.ZP, {
                    container: !0,
                    justifyContent: "space-between",
                    children: t.map((function(e, t) {
                        return (0, F.jsx)(zo, {
                            firebaseProduct: e,
                            twoItemsPerRow: n,
                            i: t
                        }, e.product_id)
                    }))
                })
            }

            function zo(e) {
                var t = e.firebaseProduct,
                    n = e.twoItemsPerRow,
                    r = e.i,
                    o = (0, s.useContext)(A.Z),
                    u = o.displayUsername,
                    d = o.firebaseUid,
                    p = o.isComponent,
                    m = (0, s.useState)(!1),
                    f = (0, a.Z)(m, 2),
                    h = f[0],
                    b = f[1],
                    x = (0, s.useState)(void 0),
                    g = (0, a.Z)(x, 2),
                    v = g[0],
                    y = g[1],
                    k = Fo().buildClient({
                        domain: t.shop,
                        storefrontAccessToken: t.storefront_access_token
                    }),
                    j = n ? "49%" : "100%";
                (0, s.useEffect)((function() {
                    var e = function() {
                        var e = (0, l.Z)((0, i.Z)().mark((function e() {
                            var n, r;
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = (0, _.jB)(t.product_id), e.prev = 1, e.next = 4, k.product.fetch(n);
                                    case 4:
                                        (r = e.sent) && y(r), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), console.log(e.t0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 8]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    t.enabled && e()
                }), []);
                var C = null,
                    w = null,
                    S = null;
                v && t && (t.content && (C = t.content), t.user_description && (w = t.user_description), t.inset_content && (S = {
                    src: t.inset_content.poster_url,
                    srcContent: t.inset_content.url,
                    altText: v.title
                }));
                var I = (0, s.useCallback)((function(e) {
                    return (0, l.Z)((0, i.Z)().mark((function t() {
                        var n, r;
                        return (0, i.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, k.checkout.create({
                                        note: "Bought from ".concat("https://beacons.ai", "/").concat(u),
                                        customAttributes: [{
                                            key: "beaconsId",
                                            value: d
                                        }]
                                    });
                                case 2:
                                    return n = t.sent, r = [{
                                        variantId: e.id,
                                        quantity: 1
                                    }], t.next = 6, k.checkout.addLineItems(n.id, r);
                                case 6:
                                    n = t.sent, window.location.href = n.webUrl;
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }), [k.checkout, u, d]);
                if (!v || !v.variants) return null;
                var P, T = {
                        info: {
                            shop: t.shop,
                            shop_name: t.shop_name,
                            beacons_username: u,
                            product_id: (0, _.UX)(v.id),
                            product_title: v.title
                        },
                        identifier: d
                    },
                    N = function() {
                        var e = (0, l.Z)((0, i.Z)().mark((function e(t, n, r) {
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, Z.Z)("user_profile", {
                                            action: "track_product_card_actions",
                                            event_name: r,
                                            firebase_uid: n,
                                            tracking_info: t
                                        });
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    L = t && t.thumbnail_content && t.thumbnail_content.url ? t.thumbnail_content.url : v.images[0].src,
                    E = n ? 80 : 100,
                    R = n ? 200 : 300,
                    O = n ? 6 : 10,
                    B = function() {
                        p || (b(!0), N(T.info, T.identifier, "Product Details Viewed"))
                    };
                return (0, F.jsx)(c.ZP, {
                    item: !0,
                    style: {
                        width: j,
                        marginTop: n ? "5px" : "15px"
                    },
                    children: (0, F.jsxs)("center", {
                        style: {
                            marginBottom: 15
                        },
                        children: [(0, F.jsxs)("div", {
                            className: "ShopifyPictureButton",
                            style: {
                                height: R
                            },
                            onClick: B,
                            role: "button",
                            tabIndex: "0",
                            children: [(0, F.jsx)(ie.Z, {
                                className: "Title",
                                onClick: B,
                                style: {
                                    color: "#1c1c1c",
                                    bottom: O,
                                    left: O,
                                    width: "calc(100% - ".concat(12 + 2 * O, "px)"),
                                    padding: 6
                                },
                                children: (P = v.title, P.length > 50 && n ? "".concat(P.slice(0, 50), "...") : P.length > 100 ? "".concat(P.slice(0, 100), "...") : P)
                            }), (0, F.jsx)(fo, {
                                className: "Image",
                                src: L,
                                alt: v.images[0].altText,
                                style: {
                                    height: R,
                                    width: "100%"
                                }
                            }), (0, F.jsx)(qo, {
                                insetContent: S,
                                delay: 300 + 1e3 * r,
                                maxWidth: E,
                                maxHeight: R / 1.5,
                                padding: O
                            })]
                        }), (0, F.jsxs)(oe.Z, {
                            className: "BuyNowButton",
                            style: {
                                marginTop: 5
                            },
                            onClick: B,
                            fullWidth: !0,
                            children: ["Buy for ", "$".concat(Number(v.variants[0].priceV2.amount).toFixed(2))]
                        }), (0, F.jsx)(Ho, {
                            open: h,
                            onClose: function() {
                                return b(!1)
                            },
                            product: v,
                            renderButton: function(e) {
                                return (0, F.jsx)(Vo, {
                                    variant: e,
                                    buyNow: I(e),
                                    trackProductInfo: N,
                                    productTrackingInfo: T
                                })
                            },
                            userContent: C,
                            userDescription: w,
                            firebaseProduct: t
                        })]
                    })
                })
            }

            function qo(e) {
                var t = e.insetContent,
                    n = e.delay,
                    r = e.maxWidth,
                    o = void 0 === r ? "25%" : r,
                    c = e.maxHeight,
                    u = void 0 === c ? 100 : c,
                    d = e.padding,
                    p = void 0 === d ? 8 : d,
                    m = (0, s.useState)(!1),
                    f = (0, a.Z)(m, 2),
                    h = f[0],
                    b = f[1],
                    x = {
                        maxWidth: o,
                        maxHeight: u,
                        right: p,
                        top: p
                    };
                return (0, s.useEffect)((function() {
                    var e = function() {
                        var e = (0, l.Z)((0, i.Z)().mark((function e() {
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, _._v)(n);
                                    case 2:
                                        b(!0);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    e()
                }), [n]), t && t.srcContent && h ? (0, _.T3)(t.srcContent, "video") ? (0, F.jsx)(fo, {
                    autoPlay: !0,
                    muted: !0,
                    alt: t.altText,
                    poster: t.src,
                    src: t.srcContent,
                    loop: !0,
                    style: x
                }) : (0, F.jsx)(fo, {
                    className: "PreviewImage",
                    src: t.src,
                    alt: t.altText,
                    style: x
                }) : null
            }

            function Ho(e) {
                var t = e.open,
                    n = e.onClose,
                    r = e.product,
                    o = e.renderButton,
                    i = e.userContent,
                    a = e.inCreatorAccount,
                    l = void 0 !== a && a,
                    s = e.onContentDelete,
                    c = e.userDescription,
                    u = e.toggleInsetContent,
                    d = e.isInsetContent,
                    p = e.beaconsPercentage,
                    m = e.setThumbnailContent,
                    f = e.firebaseProduct,
                    h = (0, P.Z)();
                return (0, F.jsx)(B.Z, {
                    open: t,
                    onClose: n,
                    scroll: "body",
                    className: "Shop",
                    children: (0, F.jsx)(Bo.Z, {
                        style: {
                            width: h ? "300px" : "500px",
                            padding: !h && 16,
                            paddingBottom: 16
                        },
                        children: (0, F.jsxs)("div", {
                            style: {
                                textAlign: "right",
                                paddingRight: h ? 5 : 2
                            },
                            className: "Shop",
                            children: [(0, F.jsx)(_e.Z, {
                                size: "small",
                                edge: "end",
                                onClick: n,
                                children: (0, F.jsx)(ke.Z, {})
                            }), (0, F.jsx)("div", {
                                children: (0, F.jsx)($o, {
                                    product: r,
                                    renderButton: o,
                                    userContent: i,
                                    inCreatorAccount: l,
                                    onContentDelete: s,
                                    userDescription: c,
                                    toggleInsetContent: u,
                                    isInsetContent: d,
                                    beaconsPercentage: p,
                                    setThumbnailContent: m,
                                    firebaseProduct: f
                                })
                            })]
                        })
                    })
                })
            }

            function $o(e) {
                var t = e.product,
                    n = e.renderButton,
                    r = e.userContent,
                    o = e.inCreatorAccount,
                    i = void 0 !== o && o,
                    l = e.onContentDelete,
                    c = e.userDescription,
                    u = e.toggleInsetContent,
                    d = e.isInsetContent,
                    p = e.beaconsPercentage,
                    m = e.setThumbnailContent,
                    f = e.firebaseProduct,
                    h = (0, s.useState)(void 0),
                    b = (0, a.Z)(h, 2),
                    x = b[0],
                    g = b[1],
                    v = (0, s.useState)(void 0),
                    y = (0, a.Z)(v, 2),
                    k = y[0],
                    _ = y[1],
                    Z = (0, s.useState)(""),
                    j = (0, a.Z)(Z, 2),
                    C = j[0],
                    w = j[1],
                    S = (0, s.useState)(void 0),
                    I = (0, a.Z)(S, 2),
                    P = I[0],
                    T = I[1],
                    N = (0, s.useState)(0),
                    L = (0, a.Z)(N, 2),
                    E = L[0],
                    R = L[1];
                (0, s.useEffect)((function() {
                    g(t.variants[0]), _(t.variants[0].selectedOptions);
                    var e = t.images.map((function(e) {
                        return {
                            src: e.src,
                            altText: e.altText,
                            content_id: null
                        }
                    }));
                    if (r) {
                        var n = [];
                        r.forEach((function(e) {
                            if (e.url && e.poster_url) {
                                var r = {
                                    srcContent: e.url,
                                    src: e.poster_url,
                                    altText: t.title,
                                    content_id: e.content_id
                                };
                                n.push(r)
                            }
                        })), e = n.concat(e), w(e[0])
                    } else w(t.images[0]);
                    T(e), R(0)
                }), [r, t]);
                var O = (0, s.useCallback)((function(e) {
                        var t = P.map((function(e) {
                            return e.src
                        })).indexOf(C.src);
                        (t += e) >= P.length ? t = 0 : t < 0 && (t = P.length - 1), w(P[t]), R(t)
                    }), [C.src, P]),
                    B = (0, s.useCallback)((function(e) {
                        var n = t.variants.filter((function(t) {
                            return n = t.selectedOptions, r = e, n.sort((function(e, t) {
                                return r.indexOf(e.name) - r.indexOf(t.name)
                            })).reduce((function(e, t, n) {
                                return e && r[n].value === t.value
                            }), !0);
                            var n, r
                        }));
                        return g(n[0]), n[0]
                    }), [t.variants]),
                    M = (0, s.useCallback)((function(e) {
                        if (e) {
                            var n = t.images.filter((function(t) {
                                return t.src === e.image.src
                            }));
                            w(n[0])
                        }
                    }), [t.images]),
                    A = (0, s.useCallback)((function(e) {
                        return function(t, n) {
                            var r = (0, de.Z)(k);
                            r[e] = {
                                name: t,
                                value: n
                            }, _(r);
                            var o = B(r);
                            M(o)
                        }
                    }), [M, B, k]);
                if (!t || !k || !C || !P) return null;
                var U = P.length > 1;
                return (0, F.jsxs)("center", {
                    style: {
                        padding: 10
                    },
                    children: [(0, F.jsx)(Yo, {
                        mainImage: C,
                        imageCarouselShift: O,
                        showArrows: U,
                        inCreatorAccount: i,
                        onContentDelete: i ? l(E) : null,
                        toggleInsetContent: i ? u(E) : null,
                        isInsetContent: i ? d(E) : null,
                        setThumbnailContent: m,
                        firebaseProduct: f
                    }), (0, F.jsx)("div", {
                        style: {
                            marginTop: 15
                        },
                        children: (0, F.jsx)(Xo, {
                            images: P,
                            mainImage: C,
                            setMainImage: w,
                            setMainImageInd: R,
                            inCreatorAccount: i,
                            isInsetContent: d
                        })
                    }), (0, F.jsxs)("div", {
                        style: {
                            marginTop: 20,
                            paddingRight: 5,
                            paddingLeft: 5
                        },
                        children: [(0, F.jsx)(Jo, {
                            userDescription: c,
                            product: t,
                            variant: x,
                            beaconsPercentage: p,
                            firebaseProduct: f
                        }), (0, F.jsx)("div", {
                            style: {
                                marginTop: 20
                            },
                            children: (0, F.jsx)(Go, {
                                product: t,
                                selectedOptions: k,
                                onNewOption: A
                            })
                        }), (0, F.jsx)("div", {
                            style: {
                                marginTop: 15
                            },
                            children: n(x)
                        })]
                    })]
                })
            }

            function Vo(e) {
                var t, n, r = e.variant,
                    i = e.buyNow,
                    l = e.trackProductInfo,
                    c = void 0 === l ? null : l,
                    u = e.productTrackingInfo,
                    d = void 0 === u ? null : u,
                    p = (0, s.useState)(!1),
                    f = (0, a.Z)(p, 2),
                    h = f[0],
                    b = f[1],
                    x = !0;
                return r ? r.available ? (t = i, n = "Buy now", x = !1) : n = "Out of stock" : n = "Unavailable", (0, F.jsx)(M.Z, {
                    variant: "contained",
                    color: "primary",
                    disabled: x || h,
                    fullWidth: !0,
                    style: {
                        fontWeight: "bold",
                        marginBottom: "5px",
                        opacity: x && .5
                    },
                    onClick: function() {
                        d && c && c((0, o.Z)((0, o.Z)({}, d.info), {}, {
                            variant_title: r.title,
                            variant_price: r.price
                        }), d.identifier, "Buy Button Clicked"), t(), b((function() {
                            return !0
                        }))
                    },
                    children: h ? (0, F.jsx)(m(), {
                        size: 10,
                        color: "white"
                    }) : n
                })
            }

            function Go(e) {
                var t = e.product,
                    n = e.selectedOptions,
                    r = e.onNewOption;
                return t.variants.length <= 1 ? null : (0, F.jsx)("div", {
                    children: t.options.map((function(e, t) {
                        return (0, F.jsx)("div", {
                            style: {
                                marginTop: 0 !== t && 10
                            },
                            children: (0, F.jsx)(Ko, {
                                label: e.name,
                                allOptions: e.values,
                                selectedOption: n[t],
                                onNewOption: r(t)
                            })
                        }, e.id)
                    }))
                })
            }

            function Ko(e) {
                var t = e.label,
                    n = e.allOptions,
                    r = e.selectedOption,
                    o = e.onNewOption;
                return (0, F.jsxs)("div", {
                    className: "OptionSelect",
                    children: [(0, F.jsx)("div", {
                        className: "OptionSelectLabel",
                        children: t
                    }), (0, F.jsx)("div", {
                        children: (0, F.jsx)(Re.Z, {
                            className: "OptionSelectSelect",
                            value: r.value,
                            onChange: function(e) {
                                return o(t, e.target.value)
                            },
                            children: n.map((function(e) {
                                return (0, F.jsx)("option", {
                                    value: e.value,
                                    children: e.value
                                }, e.value)
                            }))
                        })
                    })]
                })
            }

            function Yo(e) {
                var t = e.mainImage,
                    n = e.imageCarouselShift,
                    r = e.showArrows,
                    o = e.inCreatorAccount,
                    i = e.onContentDelete,
                    l = e.toggleInsetContent,
                    c = e.isInsetContent,
                    u = e.setThumbnailContent,
                    d = e.firebaseProduct,
                    p = (0, s.useState)(!1),
                    m = (0, a.Z)(p, 2),
                    f = m[0],
                    h = m[1],
                    b = (0, F.jsxs)("span", {
                        children: ["Are you sure you want to delete this content? ", (0, F.jsx)("b", {
                            children: "This action cannot be undone."
                        })]
                    }),
                    x = !!d && !!d.thumbnail_content && d.thumbnail_content.url === t.src;
                return r ? (0, F.jsxs)("center", {
                    className: "MainImage",
                    children: [(0, F.jsx)("div", {
                        className: "NavigateLeft",
                        onClick: function() {
                            return n(-1)
                        },
                        role: "button",
                        tabIndex: "0",
                        children: (0, F.jsx)(Lo.Z, {
                            className: "Icon"
                        })
                    }), (0, F.jsxs)("div", {
                        className: "ShopifyDialogImage img-wrap",
                        children: [o && (0, F.jsxs)("span", {
                            children: [!!t.content_id && (0, F.jsx)(_e.Z, {
                                style: {
                                    color: c ? "#FFD700" : null
                                },
                                className: "mainStar",
                                size: "small",
                                edge: "start",
                                onClick: function() {
                                    return l()
                                },
                                children: (0, F.jsx)(Oo.Z, {})
                            }), (0, F.jsx)(_e.Z, {
                                style: {
                                    color: x ? "#4dc74d" : null
                                },
                                className: "thumbnail-button",
                                size: "small",
                                edge: "start",
                                onClick: function() {
                                    return u(t.src)
                                },
                                children: (0, F.jsx)(Ro.Z, {})
                            }), !!t.content_id && (0, F.jsx)(_e.Z, {
                                className: "delete",
                                size: "small",
                                edge: "end",
                                onClick: function() {
                                    return h(!0)
                                },
                                children: (0, F.jsx)(No.Z, {})
                            })]
                        }), t.srcContent && (0, _.T3)(t.srcContent, "video") ? (0, F.jsx)("video", {
                            controls: !0,
                            autoPlay: !0,
                            muted: !0,
                            poster: t.src,
                            src: t.srcContent,
                            style: {
                                maxHeight: 400,
                                maxWidth: 350
                            }
                        }) : (0, F.jsx)("img", {
                            src: t.src,
                            alt: t.altText,
                            style: {
                                maxHeight: 400,
                                maxWidth: 350
                            }
                        })]
                    }), (0, F.jsx)("div", {
                        className: "NavigateRight",
                        onClick: function() {
                            return n(1)
                        },
                        role: "button",
                        tabIndex: "0",
                        children: (0, F.jsx)(Eo.Z, {
                            className: "Icon"
                        })
                    }), (0, F.jsx)(B.Z, {
                        open: f,
                        onClose: function() {
                            return h(!1)
                        },
                        children: (0, F.jsxs)("div", {
                            style: {
                                width: 250,
                                padding: 10
                            },
                            children: [b, (0, F.jsxs)("div", {
                                style: {
                                    marginTop: 20,
                                    textAlign: "right"
                                },
                                children: [(0, F.jsx)(M.Z, {
                                    id: "cancelButton",
                                    variant: "outlined",
                                    onClick: function() {
                                        return h(!1)
                                    },
                                    size: "small",
                                    children: (0, F.jsx)("b", {
                                        children: "Cancel"
                                    })
                                }), (0, F.jsx)(M.Z, {
                                    id: "contentDeleteButton",
                                    variant: "contained",
                                    size: "small",
                                    onClick: function() {
                                        i(), h(!1)
                                    },
                                    children: (0, F.jsx)("b", {
                                        children: "Delete"
                                    })
                                })]
                            })]
                        })
                    })]
                }) : (0, F.jsx)("div", {
                    className: "ShopifyDialogImage",
                    children: (0, F.jsx)("img", {
                        src: t.src,
                        alt: t.altText
                    })
                })
            }

            function Xo(e) {
                var t = e.images,
                    n = e.mainImage,
                    r = e.setMainImage,
                    o = e.setMainImageInd,
                    i = e.inCreatorAccount,
                    a = e.isInsetContent;
                return t.length <= 1 ? null : (0, F.jsx)(c.ZP, {
                    container: !0,
                    direction: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    style: {
                        maxWidth: "".concat(80 * t.length, "px")
                    },
                    children: t.map((function(e, t) {
                        return (0, F.jsx)(c.ZP, {
                            item: !0,
                            children: (0, F.jsxs)("div", {
                                className: "GalleryImage img-wrap",
                                children: [(0, F.jsx)("button", {
                                    onClick: function() {
                                        r(e), o(t)
                                    },
                                    type: "button",
                                    children: (0, F.jsx)("img", {
                                        src: e.src,
                                        alt: e.altText,
                                        style: {
                                            opacity: e.src === n.src ? .4 : 1
                                        }
                                    })
                                }), i && a(t) && (0, F.jsx)(Oo.Z, {
                                    className: "galleryStar",
                                    size: "small",
                                    edge: "end"
                                })]
                            })
                        }, e.src)
                    }))
                })
            }

            function Jo(e) {
                var t = e.product,
                    n = e.variant,
                    r = e.userDescription,
                    o = e.beaconsPercentage,
                    i = e.firebaseProduct,
                    a = (0, Wo.ZU)(),
                    l = t.variants.length > 1 && n.title ? "(".concat(n.title, ")") : "";
                return (0, F.jsxs)("div", {
                    style: {
                        textAlign: "left"
                    },
                    children: [(0, F.jsx)("div", {
                        style: {
                            fontWeight: "bold",
                            fontSize: "1.2rem",
                            marginBottom: 15
                        },
                        children: "".concat(t.title, " ").concat(l)
                    }), !!i && !!i.shop_name && (0, F.jsxs)("div", {
                        style: {
                            marginBottom: 25
                        },
                        children: [(0, F.jsx)("div", {
                            className: "SoldBy",
                            children: "Sold by"
                        }), (0, F.jsx)("div", {
                            className: "ProductMerchant",
                            children: (0, F.jsx)("a", {
                                href: "https://".concat(i.shop),
                                children: i.shop_name
                            })
                        })]
                    }), r && r !== t.description ? (0, F.jsx)("div", {
                        style: {
                            fontSize: "0.9rem",
                            fontWeight: 400,
                            marginBottom: 15
                        },
                        children: (0, F.jsx)($.Z, {
                            children: r
                        })
                    }) : (0, F.jsx)("div", {
                        style: {
                            fontSize: "0.9rem",
                            fontWeight: 400,
                            marginBottom: 15
                        },
                        dangerouslySetInnerHTML: {
                            __html: Ao().sanitize(t.descriptionHtml)
                        }
                    }), !!n && (0, F.jsxs)("div", {
                        children: [(0, F.jsxs)("div", {
                            className: "PriceWrapper",
                            children: [(0, F.jsx)("div", {
                                children: "Price"
                            }), (0, F.jsxs)("div", {
                                children: ["$".concat(Number(n.priceV2.amount).toFixed(2)), !!n.compareAtPriceV2 && (0, F.jsx)("span", {
                                    style: {
                                        textDecoration: "line-through",
                                        fontSize: "0.75rem",
                                        marginLeft: 5
                                    },
                                    children: "$".concat(Number(n.compareAtPriceV2.amount).toFixed(2))
                                })]
                            })]
                        }), !!o && !!a && (0, F.jsxs)("div", {
                            className: "EarningsWrapper",
                            style: {
                                color: "#00AB6C"
                            },
                            children: [(0, F.jsx)("div", {
                                children: "You earn"
                            }), (0, F.jsxs)("div", {
                                children: ["$", (Number(n.priceV2.amount) * o * .75).toFixed(2)]
                            })]
                        })]
                    })]
                })
            }
            var Qo = (0, s.memo)(Do),
                ei = n(8248),
                ti = n(55931),
                ni = "https://cdn.beacons.ai/images/file_icons/image.svg";

            function ri(e) {
                var t = e.block,
                    n = e.blockId,
                    r = (0, s.useContext)(A.Z).isComponent,
                    o = (0, s.useContext)(U.Z),
                    c = (o = (0, _.Ee)(g.wb, o)).components.theme === g.tm.FULL_WIDTH,
                    u = (0, s.useState)(-1),
                    d = (0, a.Z)(u, 2),
                    p = d[0],
                    m = d[1],
                    f = (0, s.useState)([]),
                    h = (0, a.Z)(f, 2),
                    b = h[0],
                    x = h[1],
                    v = (0, s.useRef)(void 0);
                (0, s.useEffect)((function() {
                    var e = function() {
                        var e = (0, l.Z)((0, i.Z)().mark((function e() {
                            var n, r, o, a;
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.shop_contents.flatMap((function(e) {
                                                return e.shop_products
                                            })), (r = (0, de.Z)(new Set(n)).sort()).length) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        if (o = !0, null !== v && void 0 !== v && v.current && r.length === v.current.length && (o = !v.current.every((function(e, t) {
                                                return e === r[t]
                                            }))), o) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 8:
                                        return v.current = r, e.next = 11, (0, Z.Z)("user_profile", {
                                            action: "get_profile_content_shopping_products",
                                            product_ids: r
                                        });
                                    case 11:
                                        a = e.sent, x(a.data.products);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    e()
                }), [t]);
                var y = "8px 12px";
                c && (y = "0px");
                var k = (0, s.useCallback)((function(e) {
                        (0, Z.Z)("user_profile", {
                            action: "content_shopping_content_click",
                            content_id: e
                        })
                    }), []),
                    j = Q.Z[g.$W.SHOPPABLECONTENT](t);
                return j || r !== g.w6 ? j ? (0, F.jsxs)(ie.Z, {
                    "data-testid": n,
                    children: [(!!t.shop_title || !!t.shop_subtitle) && (0, F.jsxs)(Le, {
                        className: (0, H.Z)({
                            MarginBottomS: !c
                        }),
                        children: [!!t.shop_title && (0, F.jsx)(ie.Z, {
                            tag: "center",
                            style: {
                                fontSize: 18,
                                fontWeight: "bold"
                            },
                            children: t.shop_title
                        }), !!t.shop_subtitle && (0, F.jsx)(ie.Z, {
                            tag: "center",
                            style: {
                                fontSize: 16,
                                marginTop: 8
                            },
                            children: t.shop_subtitle
                        })]
                    }), (0, F.jsx)("div", {
                        className: "Grid2",
                        style: {
                            gap: y
                        },
                        children: t.shop_contents.map((function(e, t) {
                            return !1 === e.display_content ? null : (0, F.jsxs)("div", {
                                className: "ProfileShoppableContent",
                                onClick: function() {
                                    r || (m(t), k(e.content_id))
                                },
                                role: "button",
                                tabIndex: "0",
                                children: [(0, F.jsx)(ie.Z, {
                                    className: "ProfileShoppableContentImage",
                                    style: {
                                        backgroundImage: "url(".concat(e.thumbnail, "), url(").concat(ni, ")")
                                    },
                                    tag: "center"
                                }), (0, F.jsx)(ei.Z, {
                                    style: {
                                        position: "absolute",
                                        bottom: "5%",
                                        left: "6%",
                                        zIndex: 100,
                                        fill: "white"
                                    }
                                })]
                            }, e.content_id)
                        }))
                    }), (0, F.jsx)(ii, {
                        open: p,
                        setOpen: m,
                        products: b,
                        currentContent: t.shop_contents[p],
                        title: t.shop_title
                    })]
                }) : null : (0, F.jsx)(te.Z, {
                    title: "TikTok shopping",
                    cta: "Add a title, subtitle, or TikTok video remove this temporary placeholder."
                })
            }
            var oi = s.forwardRef((function(e, t) {
                return (0, F.jsx)(ti.Z, (0, o.Z)({
                    direction: "down",
                    ref: t
                }, e))
            }));

            function ii(e) {
                var t = e.open,
                    n = e.setOpen,
                    r = e.products,
                    o = e.currentContent,
                    i = e.title,
                    l = (0, P.Z)(),
                    c = (0, s.useState)([]),
                    u = (0, a.Z)(c, 2),
                    d = u[0],
                    p = u[1];
                (0, s.useEffect)((function() {
                    if (r && r.length && o) {
                        var e = o.shop_products.map((function(e) {
                            return r.findIndex((function(t) {
                                return t.product_id === e
                            }))
                        })).map((function(e) {
                            return e < 0 ? null : r[e]
                        }));
                        p(e)
                    }
                }), [r, o]);
                var m = (0, s.useCallback)((function(e) {
                    return function() {
                        e && (0, Z.Z)("user_profile", {
                            action: "content_shopping_product_click",
                            content_id: o.content_id,
                            product_id: e
                        })
                    }
                }), [o]);
                return r && o ? (0, F.jsx)(B.Z, {
                    open: t >= 0,
                    onClose: function() {
                        return n(-1)
                    },
                    fullScreen: l,
                    TransitionComponent: oi,
                    children: (0, F.jsxs)(Ne.Z, {
                        style: {
                            maxWidth: !l && 400,
                            borderRadius: 0,
                            height: "100%",
                            overflow: "auto"
                        },
                        children: [(0, F.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            },
                            children: [(0, F.jsx)(ie.Z, {
                                style: {
                                    fontSize: 16,
                                    marginLeft: 4
                                },
                                children: i
                            }), (0, F.jsx)(_e.Z, {
                                onClick: function() {
                                    return n(-1)
                                },
                                size: "large",
                                children: (0, F.jsx)(ke.Z, {})
                            })]
                        }), (0, F.jsxs)("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
                                justifyItems: "center"
                            },
                            children: [(0, F.jsx)("div", {
                                style: {
                                    gridRow: "auto / span 2",
                                    marginTop: -120
                                },
                                children: (0, F.jsx)(li, {
                                    videoId: o.tiktok_video_id
                                })
                            }), d.map((function(e) {
                                return (0, F.jsx)(ai, {
                                    product: e,
                                    trackProductClick: m(null === e || void 0 === e ? void 0 : e.product_id)
                                }, null === e || void 0 === e ? void 0 : e.product_id)
                            }))]
                        }), (0, F.jsx)("div", {
                            style: {
                                height: "1vh"
                            }
                        })]
                    })
                }) : null
            }

            function ai(e) {
                var t = e.product,
                    n = e.trackProductClick,
                    r = (0, s.useContext)(U.Z),
                    i = {
                        margin: "0px 4px 4px"
                    },
                    a = {};
                if ((r = (0, _.Ee)(g.wb, r)).components.theme === g.tm.FULL_WIDTH && (i = {}, a = {
                        margin: "0px 4px"
                    }), !t) return null;
                var l = t.product_url.trim() ? t.product_url : null;
                return (0, F.jsxs)("a", {
                    href: l,
                    className: "ProfileShoppableProduct",
                    onClick: n,
                    onAuxClick: n,
                    children: [(0, F.jsx)(ie.Z, {
                        className: "ProfileShoppableProductImage",
                        style: (0, o.Z)({
                            backgroundImage: "url(".concat((null === t || void 0 === t ? void 0 : t.product_photo_url) || ni, ")")
                        }, i),
                        tag: "center"
                    }), (0, F.jsxs)("div", {
                        className: "ProfileShoppableProductTextContainer",
                        children: [(0, F.jsx)(ie.Z, {
                            style: (0, o.Z)((0, o.Z)({
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis"
                            }, a), i),
                            children: t.product_title
                        }), (0, F.jsxs)(ie.Z, {
                            style: (0, o.Z)((0, o.Z)({}, i), a),
                            children: ["$", t.product_price]
                        })]
                    })]
                })
            }

            function li(e) {
                var t = e.videoId,
                    n = (0, s.useContext)(A.Z).isTikTok,
                    r = (0, s.useContext)(U.Z);
                if (n) return null;
                var o = "https://tiktok.com/embed/".concat(t),
                    i = {
                        margin: "0px 4px 4px"
                    };
                return (r = (0, _.Ee)(g.wb, r)).components.theme === g.tm.FULL_WIDTH && (i = {}), t ? (0, F.jsx)(ie.Z, {
                    className: "ShoppingTiktokWrapper",
                    style: i,
                    children: (0, F.jsx)("iframe", {
                        style: {
                            height: "100%",
                            marginLeft: 5,
                            width: "95%",
                            overflow: "hidden",
                            transform: "scale(.95)",
                            borderRadius: 8
                        },
                        title: "tiktok",
                        src: o,
                        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                        allowFullScreen: 1,
                        frameBorder: "0",
                        scrolling: "no"
                    })
                }) : null
            }
            var si = n(87420);

            function ci(e) {
                var t, n, r, o = e.url,
                    i = e.blockId,
                    a = (0, s.useContext)(U.Z),
                    l = (0, s.useContext)(A.Z).isComponent,
                    c = (0, si.Z)(o, 650).ref,
                    u = o.includes("/status/"),
                    d = l ? "Component" : "",
                    p = u ? "TwitterTweetWrapper" : "TwitterTimelineWrapper";
                return (0, F.jsx)("center", {
                    "data-testid": i,
                    children: (0, F.jsx)(Ne.Z, {
                        className: "".concat(p, " ").concat(a.components.theme, " ").concat(d),
                        style: {
                            pointerEvents: l && "none",
                            borderRadius: (null === a || void 0 === a || null === (t = a.components) || void 0 === t ? void 0 : t.theme) !== g.tm.ROUND ? 14 : 25,
                            marginLeft: (null === a || void 0 === a || null === (n = a.components) || void 0 === n ? void 0 : n.theme) === g.tm.FULL_WIDTH && 20,
                            marginRight: (null === a || void 0 === a || null === (r = a.components) || void 0 === r ? void 0 : r.theme) === g.tm.FULL_WIDTH && 20
                        },
                        children: (0, F.jsx)("div", {
                            ref: c,
                            className: u ? "TwitterTweetEmbed" : "TwitterTimelineEmbed"
                        })
                    })
                })
            }
            var ui = function(e) {
                var t, n, r = e.block,
                    o = e.blockId,
                    c = (0, s.useContext)(A.Z).isComponent,
                    u = null === (t = r.social_urls) || void 0 === t || null === (n = t[0]) || void 0 === n ? void 0 : n.url,
                    d = (0, s.useState)(!0),
                    p = (0, a.Z)(d, 2),
                    m = p[0],
                    f = p[1];
                (0, s.useEffect)((function() {
                    var e = function() {
                        var e = (0, l.Z)((0, i.Z)().mark((function e() {
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return f(!1), e.next = 3, (0, _._v)(500);
                                    case 3:
                                        f(!0);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    e()
                }), [u]);
                var h = Q.Z[g.$W.SOCIAL](r);
                return h || c !== g.w6 ? h && m ? (0, F.jsx)(ci, {
                    blockId: o,
                    url: u
                }) : null : (0, F.jsx)(te.Z, {
                    title: "Twitter",
                    cta: "Add a Twitter URL to remove this temporary placeholder."
                })
            };
            var di = function(e) {
                    var t, n = e.block,
                        r = e.blockId,
                        o = Q.Z[g.$W.SPACER](n),
                        i = (0, s.useContext)(A.Z).headerTextColor;
                    if (!o) return null;
                    var a = n.height,
                        l = i;
                    switch (null !== (t = null === n || void 0 === n ? void 0 : n.seperator_style) && void 0 !== t ? t : g.c$.NONE) {
                        case g.c$.THIN:
                            return (0, F.jsx)("div", {
                                "data-testid": r,
                                style: {
                                    height: a
                                },
                                className: "flex items-center",
                                children: (0, F.jsx)("div", {
                                    className: "h-px w-full",
                                    style: {
                                        backgroundColor: l
                                    }
                                })
                            });
                        case g.c$.THICK:
                            return (0, F.jsx)("div", {
                                "data-testid": r,
                                style: {
                                    height: a
                                },
                                className: "flex items-center",
                                children: (0, F.jsx)("div", {
                                    className: "h-1 w-full",
                                    style: {
                                        backgroundColor: l
                                    }
                                })
                            });
                        case g.c$.DASHED:
                            return (0, F.jsx)("div", {
                                "data-testid": r,
                                style: {
                                    height: a
                                },
                                className: "flex items-center",
                                children: (0, F.jsx)("div", {
                                    className: "w-full h-px border-0 border-b-2 border-dashed border-separate",
                                    style: {
                                        backgroundColor: l
                                    }
                                })
                            });
                        case g.c$.ELLIPSES:
                            return (0, F.jsx)("div", {
                                "data-testid": r,
                                style: {
                                    height: a
                                },
                                className: "flex items-center",
                                children: (0, F.jsxs)("div", {
                                    className: "flex items-center justify-center w-full",
                                    children: [(0, F.jsx)("div", {
                                        className: "w-3 h-3 rounded-full",
                                        style: {
                                            backgroundColor: l
                                        }
                                    }), (0, F.jsx)("div", {
                                        className: "w-3 h-3 rounded-full mx-2",
                                        style: {
                                            backgroundColor: l
                                        }
                                    }), (0, F.jsx)("div", {
                                        className: "w-3 h-3 rounded-full",
                                        style: {
                                            backgroundColor: l
                                        }
                                    })]
                                })
                            });
                        default:
                            return (0, F.jsx)("div", {
                                "data-testid": r,
                                style: {
                                    height: a
                                }
                            })
                    }
                },
                pi = n(92157),
                mi = n(82138),
                fi = n(92249),
                hi = n(43166),
                bi = n(64494),
                xi = n(7780);

            function gi(e) {
                var t, n = e.item,
                    r = (0, s.useContext)(A.Z).isComponent,
                    o = (0, P.Z)(),
                    i = (0, fi.Z)({
                        storeItemId: n.id,
                        beaconsUsername: n.beacons_username,
                        pageViewSource: xi.Z.LIB_STORE_BLOCK,
                        referrer: window.location
                    }),
                    l = (0, s.useState)(0),
                    c = (0, a.Z)(l, 2),
                    u = c[0],
                    d = c[1],
                    p = r ? null : i,
                    m = n.title,
                    f = n.checkout_images,
                    h = n.poster_image_url,
                    b = n.price,
                    x = n.strikethrough_price,
                    g = (0, bi.m7)(n),
                    v = r || o,
                    y = (null === f || void 0 === f || null === (t = f[u]) || void 0 === t ? void 0 : t.image_url) || h;
                return (0, F.jsxs)(ie.Z, {
                    tag: "center",
                    className: "w-full flex flex-col gap-3 p-5 box-border relative overflow-hidden mt-4",
                    style: {
                        background: "linear-gradient(180deg, #E5E5E5 0%, rgba(0, 0, 0, 0.8) 100%)"
                    },
                    children: [(0, F.jsx)("div", {
                        className: "bg-cover opacity-30 absolute top-0 left-0 h-full w-full bg-gray-700 z-0 bg-center blur-lg",
                        style: {
                            backgroundImage: "url(".concat(y, ")")
                        }
                    }), (null === f || void 0 === f ? void 0 : f.length) > 1 && (0, F.jsx)(mi.Z, {
                        variant: "progress",
                        steps: (null === f || void 0 === f ? void 0 : f.length) + 1,
                        position: "static",
                        activeStep: u + 1,
                        sx: {
                            background: "none !important",
                            paddingLeft: 0,
                            paddingRight: 0,
                            "& .MuiMobileStepper-progress": {
                                width: "100%",
                                background: "rgba(255, 255, 255, 0.5)"
                            },
                            "& .MuiLinearProgress-barColorPrimary": {
                                background: "white"
                            }
                        }
                    }), (0, F.jsx)("div", {
                        className: (0, H.Z)("flex items-center justify-center z-10 max-w-full cursor-pointer", {
                            "h-[400px]": v,
                            "h-[600px]": !v
                        }),
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            (null === f || void 0 === f ? void 0 : f.length) > 1 && d((u + 1) % (null === f || void 0 === f ? void 0 : f.length))
                        },
                        children: (0, F.jsx)("img", {
                            src: y,
                            alt: "Checkout preview",
                            className: (0, H.Z)("max-w-full", {
                                "max-h-[400px]": v,
                                "max-h-[600px]": !v
                            })
                        })
                    }), (0, F.jsxs)("div", {
                        className: "flex flex-col h-full box-border gap-4 z-10",
                        children: [(0, F.jsx)(ie.Z, {
                            style: {
                                wordBreak: "break-word"
                            },
                            children: (0, F.jsx)(ie.Z, {
                                className: "cursor-pointer LineClamp2 text-16 !rounded-none text-left",
                                children: m
                            })
                        }), (0, F.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, F.jsx)(pi.Hx, {
                                price: b,
                                strikethroughPrice: x,
                                inline: !1,
                                className: "items-start"
                            }), (0, F.jsx)(oe.Z, {
                                variant: "contained",
                                className: "CardButton font-bold h-10",
                                href: p,
                                invert: !0,
                                "aria-label": g,
                                children: (0, F.jsx)(hi.Z, {
                                    storeItem: n
                                })
                            })]
                        })]
                    })]
                })
            }

            function vi(e) {
                var t, n = e.enableBorder,
                    r = e.layoutType,
                    o = e.item,
                    i = e.index,
                    a = (0, s.useContext)(U.Z),
                    l = (a = (0, _.Ee)(g.wb, a)).card.background_color + a.components.opacity;
                switch (a.components.theme !== g.tm.ROUND && a.components.theme !== g.tm.CUSTOM || (t = a.components.custom_border_radius), r) {
                    case g.F1.IMAGE_AND_TEXT_RIGHT:
                        return (0, F.jsx)(pi.ZP, {
                            borderRadius: t,
                            enableBorder: n,
                            item: o,
                            blockBackgroundColor: l,
                            variant: pi.Kp.TEXT_RIGHT
                        });
                    case g.F1.ALTERNATING_IMAGE_TEXT:
                        return (0, F.jsx)(pi.ZP, {
                            borderRadius: t,
                            enableBorder: n,
                            item: o,
                            blockBackgroundColor: l,
                            variant: i % 2 === 0 ? pi.Kp.TEXT_RIGHT : pi.Kp.TEXT_LEFT
                        });
                    case g.F1.CAROUSEL:
                        return (0, F.jsx)(pi.ZP, {
                            borderRadius: t,
                            enableBorder: n,
                            item: o,
                            blockBackgroundColor: l,
                            variant: pi.Kp.CAROUSEL
                        });
                    case g.F1.ONE_COLUMN_IMAGE:
                        return (0, F.jsx)(pi.ZP, {
                            borderRadius: t,
                            enableBorder: n,
                            item: o,
                            blockBackgroundColor: l
                        });
                    case g.F1.GRID:
                        return (0, F.jsx)(pi.ZP, {
                            borderRadius: t,
                            enableBorder: n,
                            item: o,
                            blockBackgroundColor: l,
                            variant: pi.Kp.SMALL
                        });
                    case g.F1.STORY_CARD:
                        return (0, F.jsx)(gi, {
                            item: o
                        });
                    default:
                        return (0, F.jsx)(pi.ZP, {
                            borderRadius: t,
                            enableBorder: n,
                            item: o,
                            blockBackgroundColor: l,
                            variant: pi.Kp.TEXT_LEFT
                        })
                }
            }

            function yi(e) {
                var t = e.block,
                    n = e.blockId,
                    r = (0, s.useContext)(A.Z),
                    o = r.isComponent,
                    i = r.paymentProperties,
                    a = r.headerTextColor,
                    l = (0, s.useContext)(U.Z),
                    c = t.store_items,
                    u = t.layout_type,
                    d = !!t.enable_border,
                    p = (0, s.useCallback)((function(e) {
                        var t, n = !(null === i || void 0 === i || !i.paypal_marketplace),
                            r = !(null === i || void 0 === i || !i.stripe),
                            o = n || r,
                            a = null === (t = e.files) || void 0 === t ? void 0 : t.filter((function(e) {
                                return !(null === e || void 0 === e || !e.item_filename)
                            })),
                            l = !(null === a || void 0 === a || !a.length),
                            s = e.price >= 0 && o || 0 === e.price;
                        return e.availability && !!e.title && l && s
                    }), [i]),
                    m = Q.Z[g.$W.STORE](t, i);
                if (!m && o === g.w6) return (0, F.jsx)(te.Z, {
                    title: "Store",
                    cta: "Add a store item to remove this temporary placeholder."
                });
                if (!m) return null;
                var f = l.components.theme === g.tm.FULL_WIDTH,
                    h = (null === t || void 0 === t ? void 0 : t.collapse_style) === g.Aq.COLLAPSED,
                    b = (null === t || void 0 === t ? void 0 : t.store_title) || "Products",
                    x = null === t || void 0 === t ? void 0 : t.store_subtitle,
                    v = (0, H.Z)({
                        "carousel mt-4": u === g.F1.CAROUSEL,
                        "grid grid-cols-2 gap-3": u === g.F1.GRID,
                        "flex flex-col gap-3": u === g.F1.STORY_CARD
                    });
                return h ? (0, F.jsx)(Hn, {
                    description: x,
                    headline: b,
                    isFullWidth: f,
                    children: (0, F.jsx)("div", {
                        className: "mt-4",
                        children: (0, F.jsx)("div", {
                            className: v,
                            children: c.map((function(e, t) {
                                return p(e) ? (0, F.jsx)(vi, {
                                    item: e,
                                    layoutType: u,
                                    index: t
                                }, e.id) : null
                            }))
                        })
                    })
                }) : (0, F.jsxs)("center", {
                    children: [(!!t.store_title || !!t.store_subtitle) && (0, F.jsxs)("div", {
                        "data-testid": n,
                        children: [!!t.store_title && (0, F.jsx)(ie.Z, {
                            tag: "center",
                            className: "text-18 !font-bold",
                            style: {
                                color: a
                            },
                            children: t.store_title
                        }), !!t.store_subtitle && (0, F.jsx)(ie.Z, {
                            tag: "center",
                            className: "mt-3 text-14",
                            style: {
                                color: a
                            },
                            children: t.store_subtitle
                        })]
                    }), (0, F.jsx)("div", {
                        className: v,
                        children: c.map((function(e, t) {
                            return p(e) ? (0, F.jsx)(vi, {
                                enableBorder: d,
                                item: e,
                                layoutType: u,
                                index: t
                            }, e.id) : null
                        }))
                    })]
                })
            }

            function ki(e) {
                var t = e.block,
                    n = e.blockId,
                    r = e.cardMode,
                    o = (0, s.useContext)(U.Z),
                    i = (0, s.useContext)(A.Z).isComponent,
                    l = (0, s.useState)(!1),
                    c = (0, a.Z)(l, 2),
                    u = c[0],
                    d = c[1];
                return (0, F.jsxs)("div", {
                    style: r || o.components.theme !== g.tm.FULL_WIDTH ? {} : {
                        paddingLeft: 20,
                        paddingRight: 20
                    },
                    children: [(0, F.jsx)(oe.Z, {
                        "data-testid": n,
                        variant: "contained",
                        className: r && "CardButton",
                        fullWidth: !0,
                        onClick: function() {
                            i || (d(!0), window.gtag && window.gtag("event", "begin_checkout", {
                                currency: "USD",
                                items: [{
                                    name: "Support"
                                }]
                            }))
                        },
                        style: r ? {} : {
                            height: 65,
                            fontSize: "15px",
                            boxShadow: (0, Me.Z)(o.card.shadow, o.components.opacity, o.card.background_color),
                            border: o.card.outline ? "2px solid ".concat(o.text.color) : 0
                        },
                        allowOpacity: !r,
                        invert: r,
                        "aria-label": t.button_text,
                        children: (0, F.jsx)("span", {
                            style: {
                                padding: r && 6
                            },
                            children: t.button_text
                        })
                    }), (0, F.jsx)(_i, {
                        open: u,
                        setOpen: d,
                        block: t
                    })]
                })
            }

            function _i(e) {
                var t = e.open,
                    n = e.setOpen,
                    r = e.block,
                    o = (0, s.useContext)(A.Z),
                    c = o.disablePayments,
                    u = o.displayUsername,
                    d = o.firebaseUid,
                    p = (0, s.useState)(g.VB),
                    m = (0, a.Z)(p, 2),
                    f = m[0],
                    h = m[1],
                    b = (0, s.useState)(!1),
                    x = (0, a.Z)(b, 2),
                    v = x[0],
                    y = x[1];
                (0, s.useEffect)((function() {
                    h({
                        bid: 100 * r.unit_price,
                        creator_username: u,
                        id: (0, V.Z)(),
                        status: "donation",
                        firebase_uid: d,
                        name: "",
                        email: "",
                        instructions: ""
                    })
                }), []);
                var k = (0, s.useCallback)((0, l.Z)((0, i.Z)().mark((function e() {
                    var t;
                    return (0, i.Z)().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!c) {
                                    e.next = 4;
                                    break
                                }
                                return e.next = 3, (0, _._v)(1e4);
                            case 3:
                                return e.abrupt("return", "deny");
                            case 4:
                                return e.next = 6, (0, Z.Z)("manage_order", {
                                    action: "create_payment_intent",
                                    order: f,
                                    order_type: "support"
                                });
                            case 6:
                                return t = e.sent, console.log(t), e.abrupt("return", t.data.client_secret);
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), [c, f]);
                return v ? (0, F.jsx)(ji, {
                    email: f.email,
                    open: t,
                    setOpen: n
                }) : (0, F.jsx)(Zi, {
                    orderInfo: f,
                    open: t,
                    setOpen: n,
                    setOrderInfo: h,
                    setSuccessfullyPaid: y,
                    createPaymentIntent: k,
                    block: r
                })
            }

            function Zi(e) {
                var t = e.orderInfo,
                    n = e.setOrderInfo,
                    r = e.open,
                    i = e.setOpen,
                    l = e.setSuccessfullyPaid,
                    c = e.createPaymentIntent,
                    u = e.block,
                    d = (0, s.useContext)(A.Z).displayUsername,
                    p = (0, s.useState)(1),
                    m = (0, a.Z)(p, 2),
                    f = m[0],
                    h = m[1],
                    b = (0, s.useState)(!1),
                    x = (0, a.Z)(b, 2),
                    v = x[0],
                    y = x[1],
                    k = (0, s.useMemo)((function() {
                        return v && t.email && !K()(t.email) ? "Email invalid" : ""
                    }), [v, t.email]),
                    _ = (0, s.useMemo)((function() {
                        return !!t.email && 0 !== t.email.length && K()(t.email) && t.bid > 0 && t.bid <= g.lr
                    }), [t.email, t.bid]),
                    Z = (0, s.useCallback)((function() {
                        window.gtag && window.gtag("event", "purchase", {
                            value: t.bid,
                            currency: "USD",
                            transaction_id: t.id,
                            affiliation: "Support",
                            items: [{
                                name: "Support"
                            }]
                        })
                    }), [t]);
                return (0, F.jsxs)(Y.Z, {
                    title: "Buy ".concat(d, " a ").concat(u.support_item),
                    open: r,
                    onClose: function() {
                        return i(!1)
                    },
                    scroll: "body",
                    children: [!!u.support_description && (0, F.jsx)("div", {
                        children: u.support_description
                    }), (0, F.jsxs)("div", {
                        className: "FlexCenter MarginTopS",
                        children: [(0, F.jsx)(X.Z, {
                            value: f,
                            onChange: function(e) {
                                ("" === e.target.value || /^[0-9\b]+$/.test(e.target.value)) && h(Number(e.target.value))
                            },
                            onBlur: function(e) {
                                ("" === e.target.value || /^[0-9\b]+$/.test(e.target.value)) && n((0, o.Z)((0, o.Z)({}, t), {}, {
                                    bid: u.unit_price * Number(e.target.value) * 100
                                }))
                            },
                            InputProps: {
                                startAdornment: "#",
                                inputProps: {
                                    pattern: "[0-9]*",
                                    inputMode: "numeric",
                                    "aria-label": "support item quantity"
                                }
                            },
                            error: !f,
                            style: {
                                width: 72
                            }
                        }), (0, F.jsxs)("span", {
                            className: "MarginLeftXS",
                            children: ["x ", "$".concat(u.unit_price, " each = $").concat(t.bid / 100, " Total")]
                        })]
                    }), 0 === f && (0, F.jsx)("div", {
                        style: {
                            marginTop: 2,
                            color: "red",
                            fontSize: "0.8rem"
                        },
                        children: "Minimum is 1 item."
                    }), (0, F.jsx)("div", {
                        className: "MarginTopS",
                        children: (0, F.jsx)(X.Z, {
                            label: "Your email",
                            id: "Your email",
                            placeholder: "john@example.com",
                            InputProps: {
                                startAdornment: " "
                            },
                            value: t.email,
                            onChange: function(e) {
                                n((0, o.Z)((0, o.Z)({}, t), {}, {
                                    email: e.target.value
                                }))
                            },
                            onBlur: function() {
                                return y(!0)
                            },
                            type: "email",
                            autoComplete: "email",
                            error: !!k,
                            helperText: k,
                            fullWidth: !0
                        })
                    }), (0, F.jsx)("div", {
                        className: "MarginTopS",
                        children: (0, F.jsx)(X.Z, {
                            label: "Your name (optional)",
                            id: "Your name (optional)",
                            value: t.name,
                            InputProps: {
                                startAdornment: " "
                            },
                            onChange: function(e) {
                                n((0, o.Z)((0, o.Z)({}, t), {}, {
                                    name: e.target.value
                                }))
                            },
                            fullWidth: !0,
                            autoComplete: "name"
                        })
                    }), (0, F.jsx)("div", {
                        className: "MarginTopS",
                        children: (0, F.jsx)(X.Z, {
                            label: "Your message (optional)",
                            id: "Your message (optional)",
                            value: t.instructions,
                            InputProps: {
                                startAdornment: " "
                            },
                            onChange: function(e) {
                                n((0, o.Z)((0, o.Z)({}, t), {}, {
                                    instructions: e.target.value
                                }))
                            },
                            fullWidth: !0,
                            multiline: !0
                        })
                    }), (0, F.jsxs)("div", {
                        className: "MarginTopL",
                        children: [(0, F.jsx)(ne.Z, {
                            orderInfo: t,
                            allowPay: _,
                            orderType: ee.Z.SUPPORT,
                            paymentSuccessEndpoint: "complete_support_payment_paypal",
                            setSuccessfullyPaid: l,
                            retrievePaymentIntent: c,
                            setSuccessfulPaymentCallback: Z
                        }), (0, F.jsx)(J.Z, {
                            order: t,
                            setSuccessfullyPaid: l,
                            allowPay: _,
                            paymentSuccessEndpoint: "successful_support_payment_stripe",
                            retrievePaymentIntent: c,
                            setSuccessfulPaymentCallback: Z
                        })]
                    })]
                })
            }

            function ji(e) {
                var t = e.email,
                    n = e.open,
                    r = e.setOpen,
                    o = (0, s.useContext)(A.Z).displayUsername,
                    i = "Thank you for supporting ".concat(o, "!"),
                    a = (0, F.jsxs)("span", {
                        children: ["You will get an email at ", (0, F.jsx)("strong", {
                            children: t
                        }), " to confirm your transaction. Please make sure to check your spam and promotions folders in case it gets misplaced. Join ", (0, F.jsx)("strong", {
                            children: o
                        }), "'s community to receive future updates."]
                    });
                return (0, F.jsx)(se, {
                    open: n,
                    setOpen: r,
                    mainCta: i,
                    additionalInformation: a,
                    acquisitionChannel: "support_block"
                })
            }
            var Ci = function(e) {
                var t = e.block,
                    n = e.blockId,
                    r = t.form_style,
                    o = t.support_description,
                    i = (0, s.useContext)(A.Z),
                    a = i.isComponent,
                    l = i.paymentProperties,
                    c = Q.Z[g.$W.SUPPORT](t, l);
                return c || a !== g.w6 ? c ? r === g.C4.BUTTON.value ? (0, F.jsx)(ki, {
                    block: t,
                    blockId: n
                }) : (0, F.jsxs)(re.Z, {
                    children: [(0, F.jsx)(ie.Z, {
                        tag: "center",
                        style: {
                            fontSize: 18,
                            fontWeight: "bold"
                        },
                        children: t.card_title
                    }), !!o && (0, F.jsx)("div", {
                        className: "MarginTopS TextAlignCenter",
                        children: (0, F.jsx)(ie.Z, {
                            style: {
                                fontSize: 14
                            },
                            children: o
                        })
                    }), (0, F.jsx)("div", {
                        className: "MarginTopM",
                        children: (0, F.jsx)(ki, {
                            block: t,
                            blockId: n,
                            cardMode: !0
                        })
                    })]
                }) : null : (0, F.jsx)(te.Z, {
                    title: "Support",
                    cta: "Set up payments to remove this temporary placeholder."
                })
            };
            var wi = function(e) {
                    var t = e.block,
                        n = e.blockId,
                        r = (0, s.useContext)(A.Z).isComponent,
                        o = Q.Z[g.$W.TEXT](t);
                    return o || r !== g.w6 ? o ? (0, F.jsxs)(re.Z, {
                        "data-testid": n,
                        children: [!(null === t || void 0 === t || !t.title) && (0, F.jsx)(ie.Z, {
                            "aria-label": "text title - ".concat(t.title),
                            className: "!font-semibold uppercase text-10",
                            tag: "center",
                            children: t.title
                        }), (0, F.jsx)(ie.Z, {
                            children: (0, F.jsx)("div", {
                                className: (0, H.Z)({
                                    "mt-4": !(null === t || void 0 === t || !t.title),
                                    "text-center": !(null === t || void 0 === t || !t.center_text)
                                }),
                                children: (0, F.jsx)($.Z, {
                                    "aria-label": "text description ".concat(t.description),
                                    children: t.description
                                })
                            })
                        })]
                    }) : null : (0, F.jsx)(te.Z, {
                        title: "Text",
                        cta: "Type some text to remove this temporary placeholder."
                    })
                },
                Si = n(77988),
                Ii = n(51054),
                Pi = n(87771);
            var Ti = "YoutubeVideo",
                Ni = "TiktokVideo",
                Li = "VimeoVideo",
                Ei = "TwitchVideo";

            function Ri(e) {
                var t = e.url,
                    n = (0, s.useContext)(A.Z).isComponent,
                    r = (0, s.useContext)(A.Z).isTikTok,
                    i = function(e) {
                        return e.includes("youtu") ? Ti : e.includes("tiktok") ? Ni : e.includes("vimeo") ? Li : e.includes("twitch") ? Ei : ""
                    }(t);
                if (r && i === Ni || "" === t) return null;
                var a = function(e) {
                        var t = {};
                        return e === Ni && (t = {
                            transform: "scale(0.96)",
                            marginTop: -14
                        }), t
                    }(i),
                    l = t;
                return l.includes("twitch.tv") && (l += "&parent=".concat(window.location.hostname, "&autoplay=false")), (0, F.jsx)(Ne.Z, {
                    className: "".concat(i, "Wrapper ").concat(n),
                    style: {
                        pointerEvents: n && "none",
                        backgroundColor: "#FFFFFF00"
                    },
                    children: (0, F.jsx)("iframe", {
                        title: "url",
                        className: i,
                        style: (0, o.Z)({
                            overflow: "hidden"
                        }, a),
                        src: l,
                        frameBorder: "0",
                        scrolling: "no",
                        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                        allowFullScreen: 1
                    })
                })
            }
            var Oi = function(e) {
                    var t = e.block,
                        n = e.blockId,
                        r = (0, s.useContext)(A.Z),
                        o = r.isComponent,
                        i = r.headerTextColor,
                        l = (0, s.useContext)(U.Z);
                    l = (0, _.Ee)(g.wb, l);
                    var c = t.videos,
                        u = t.layout,
                        d = t.headline,
                        p = t.description,
                        m = (0, s.useState)(!1),
                        f = (0, a.Z)(m, 2),
                        h = f[0],
                        b = f[1],
                        x = Q.Z[g.$W.VIDEOS](t);
                    if (!x && o === g.w6) {
                        var v = {
                                backgroundColor: l.text.color
                            },
                            y = {
                                fill: l.card.background_color,
                                height: 20,
                                width: 20
                            };
                        return (0, F.jsx)(te.Z, {
                            title: "Video",
                            cta: "Add a video embed URL to remove this temporary placeholder.",
                            children: (0, F.jsxs)("div", {
                                className: "MarginBottomS",
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                children: [(0, F.jsx)("div", {
                                    className: "IconBackgroundCircle",
                                    style: v,
                                    children: (0, F.jsx)(rt.r, {
                                        style: y
                                    })
                                }), (0, F.jsx)("div", {
                                    className: "IconBackgroundCircle",
                                    style: v,
                                    children: (0, F.jsx)(nn.r, {
                                        style: y
                                    })
                                }), (0, F.jsx)("div", {
                                    className: "IconBackgroundCircle",
                                    style: v,
                                    children: (0, F.jsx)(en.r, {
                                        style: y
                                    })
                                }), (0, F.jsx)("div", {
                                    className: "IconBackgroundCircle",
                                    style: v,
                                    children: (0, F.jsx)(Xt.r, {
                                        style: y
                                    })
                                })]
                            })
                        })
                    }
                    return x ? (0, F.jsx)("center", {
                        children: c.map((function(e) {
                            return u === Pi.Z.COLLAPSIBLE ? (0, F.jsxs)("div", {
                                "data-testid": n,
                                children: [(0, F.jsxs)(re.Z, {
                                    className: "!p-4",
                                    children: [(0, F.jsxs)(ie.Z, {
                                        className: "cursor-pointer flex items-center justify-between gap-2 relative",
                                        onClick: function() {
                                            return b((function(e) {
                                                return !e
                                            }))
                                        },
                                        role: "button",
                                        tabIndex: 0,
                                        children: [null !== e && void 0 !== e && e.thumbnail ? (0, F.jsx)("img", {
                                            className: "h-12 w-12 flex-none object-cover overflow-hidden rounded-8",
                                            alt: "video thumbnail",
                                            src: e.thumbnail
                                        }) : (0, F.jsx)("div", {
                                            className: "w-12"
                                        }), (0, F.jsx)("div", {
                                            className: "title",
                                            children: d || "Video"
                                        }), (0, F.jsx)("div", {
                                            className: "w-12"
                                        }), (0, F.jsx)(je.Z, {
                                            className: (0, H.Z)("absolute right-0 flex items-center transition-all", {
                                                "rotate-180": h
                                            })
                                        })]
                                    }), (0, F.jsx)(Ce.Z, { in: h,
                                        timeout: "auto",
                                        children: !!p && (0, F.jsx)(ie.Z, {
                                            className: "!font-normal text-16 mt-3",
                                            children: p
                                        })
                                    })]
                                }), (0, F.jsxs)(Ce.Z, { in: h,
                                    timeout: "auto",
                                    children: [(0, F.jsx)("div", {
                                        className: "mt-3"
                                    }), (0, F.jsx)(Ri, {
                                        url: e.url
                                    })]
                                })]
                            }, e.url) : (0, F.jsxs)("div", {
                                "data-testid": n,
                                children: [(0, F.jsxs)(ie.Z, {
                                    style: {
                                        color: i
                                    },
                                    children: [(0, F.jsx)("div", {
                                        className: "font-semibold text-18",
                                        children: d
                                    }), (0, F.jsx)("div", {
                                        className: "mt-4",
                                        children: p
                                    })]
                                }), (0, F.jsx)("div", {
                                    className: "mt-3"
                                }), (0, F.jsx)(Ri, {
                                    url: e.url
                                })]
                            }, e)
                        }))
                    }) : null
                },
                Bi = new f.Z;

            function Mi() {
                return (Mi = (0, l.Z)((0, i.Z)().mark((function e(t, n) {
                    var r, o, a, l, s, c;
                    return (0, i.Z)().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (30, r = Date.now(), o = t.email_verification_last_checked, a = (r - o) / 1e3, o && !(a > 30)) {
                                    e.next = 10;
                                    break
                                }
                                return e.next = 7, (0, Z.Z)("user_profile", {
                                    action: "check_email_verification_from_profile",
                                    firebase_uid: t.firebase_uid,
                                    beacons_username: t.beacons_username
                                });
                            case 7:
                                s = e.sent, c = !(null === s || void 0 === s || null === (l = s.data) || void 0 === l || !l.email_verified), n(!c);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Ai(e) {
                var t = e.username;
                return t ? (0, F.jsxs)(L.Z, {
                    children: [(0, F.jsxs)("center", {
                        style: {
                            marginTop: 50
                        },
                        children: ["The page for ", (0, F.jsxs)("strong", {
                            children: [t, " "]
                        }), "has been set to private until the email address of the owner is verified."]
                    }), (0, F.jsx)("center", {
                        style: {
                            marginTop: 50
                        },
                        children: (0, F.jsx)("a", {
                            href: "https://beacons.ai",
                            "aria-label": "home",
                            children: (0, F.jsx)(v.r, {
                                fill: "#1c1c1c",
                                height: 35
                            })
                        })
                    })]
                }) : null
            }

            function Ui(e) {
                var t = e.username,
                    n = e.message;
                return t ? (0, F.jsxs)(L.Z, {
                    children: [(0, F.jsxs)("center", {
                        style: {
                            marginTop: 50
                        },
                        children: ["No Beacons account associated with ", (0, F.jsx)("strong", {
                            children: t
                        }), "."]
                    }), (0, F.jsx)("a", {
                        href: "https://airtable.com/shrxCTVQxzNkWOiK9",
                        "aria-label": "home",
                        children: !!n && (0, F.jsx)("center", {
                            style: {
                                marginTop: 32
                            },
                            children: n
                        })
                    }), (0, F.jsx)("center", {
                        style: {
                            marginTop: 50
                        },
                        children: (0, F.jsx)("a", {
                            href: "https://beacons.ai",
                            "aria-label": "home",
                            children: (0, F.jsx)(v.r, {
                                fill: "#1c1c1c",
                                height: 35
                            })
                        })
                    })]
                }) : null
            }

            function Fi(e) {
                var t = e.block,
                    n = e.blockId;
                switch (t.block_type) {
                    case g.$W.BOOKING:
                        return (0, F.jsx)(ce, {
                            block: (0, o.Z)((0, o.Z)({}, g.ib[g.$W.BOOKING].defaultBlock), t),
                            blockId: n
                        });
                    case g.$W.COMMUNITY:
                        return (0, F.jsx)(ye, {
                            block: (0, o.Z)((0, o.Z)({}, g.ib[g.$W.COMMUNITY].defaultBlock), t),
                            blockId: n
                        });
                    case g.$W.EMAIL:
                        return (0, F.jsx)(qe, {
                            block: (0, o.Z)((0, o.Z)({}, g.ib[g.$W.EMAIL].defaultBlock), t),
                            blockId: n
                        });
                    case g.$W.FOLLOWERS:
                        return (0, F.jsx)(Ke, {
                            block: (0, o.Z)((0, o.Z)({}, g.ib[g.$W.FOLLOWERS].defaultBlock), t),
                            blockId: n
                        });
                    case g.$W.FRIENDS:
                        return (0, F.jsx)(at, {
                            block: (0, o.Z)((0, o.Z)({}, g.ib[g.$W.FRIENDS].defaultBlock), t),
                            blockId: n
                        });
                    case g.$W.HEADER:
                        return (0, F.jsx)(bn, {
                            block: (0, o.Z)((0, o.Z)({}, g.ib[g.$W.HEADER].defaultBlock), t),
                            blockId: n
                        });
                    case g.$W.IMAGES:
                        return (0, F.jsx)(gn, {
                            block: (0, o.Z)((0, o.Z)({}, g.ib[g.$W.IMAGES].defaultBlock), t),
                            blockId: n
                        });
                    case g.$W.INTEGRATIONS:
                        return (0, F.jsx)(yn, {
                            block: (0, o.Z)((0, o.Z)({}, g.ib[g.$W.INTEGRATIONS].defaultBlock), t),
                            blockId: n
                        });
                    case g.$W.LINKS:
                        return (0, F.jsx)($n, {
                            block: (0, o.Z)((0, o.Z)({}, g.ib[g.$W.LINKS].defaultBlock), t),
                            blockId: n
                        });
                    case g.$W.MARKETPLACE:
                        return (0, F.jsx)(Qo, {
                            block: (0, o.Z)((0, o.Z)({}, g.ib[g.$W.MARKETPLACE].defaultBlock), t)
                        });
                    case g.$W.MUSIC:
                        return (0, F.jsx)(pr, {
                            block: (0, o.Z)((0, o.Z)({}, g.ib[g.$W.MUSIC].defaultBlock), t),
                            blockId: n
                        });
                    case g.$W.NFT:
                        return (0, F.jsx)(mr, {
                            block: (0, o.Z)((0, o.Z)({}, g.ib[g.$W.NFT].defaultBlock), t)
                        });
                    case g.$W.REQUEST_FEED:
                        return (0, F.jsx)(yo, {});
                    case g.$W.REQUESTS:
                        return (0, F.jsx)(To, {
                            block: (0, o.Z)((0, o.Z)({}, g.ib[g.$W.REQUESTS].defaultBlock), t),
                            blockId: n
                        });
                    case g.$W.SHOPPABLECONTENT:
                        return (0, F.jsx)(ri, {
                            block: (0, o.Z)((0, o.Z)({}, g.ib[g.$W.SHOPPABLECONTENT].defaultBlock), t),
                            blockId: n
                        });
                    case g.$W.SOCIAL:
                        return (0, F.jsx)(ui, {
                            block: (0, o.Z)((0, o.Z)({}, g.ib[g.$W.SOCIAL].defaultBlock), t),
                            blockId: n
                        });
                    case g.$W.SPACER:
                        return (0, F.jsx)(di, {
                            block: (0, o.Z)((0, o.Z)({}, g.ib[g.$W.SPACER].defaultBlock), t),
                            blockId: n
                        });
                    case g.$W.STORE:
                        return (0, F.jsx)(yi, {
                            block: (0, o.Z)((0, o.Z)({}, g.ib[g.$W.STORE].defaultBlock), t),
                            blockId: n
                        });
                    case g.$W.SUPPORT:
                        return (0, F.jsx)(Ci, {
                            block: (0, o.Z)((0, o.Z)({}, g.ib[g.$W.SUPPORT].defaultBlock), t),
                            blockId: n
                        });
                    case g.$W.TEXT:
                        return (0, F.jsx)(wi, {
                            block: (0, o.Z)((0, o.Z)({}, g.ib[g.$W.TEXT].defaultBlock), t),
                            blockId: n
                        });
                    case g.$W.VIDEOS:
                        return (0, F.jsx)(Oi, {
                            block: (0, o.Z)((0, o.Z)({}, g.ib[g.$W.VIDEOS].defaultBlock), t),
                            blockId: n
                        });
                    case g.$W.MEDIA_KIT_IN_LIB:
                        return (0, F.jsx)(rr, {
                            block: (0, o.Z)((0, o.Z)({}, g.ib[g.$W.MEDIA_KIT_IN_LIB].defaultBlock), t),
                            blockId: n
                        });
                    default:
                        return null
                }
            }

            function Wi(e, t, n, r) {
                var o, i, a, l = window.location.hostname;
                a = e ? "https://".concat(l) : "https://".concat(l, "/").concat(t), "home" !== n && (a += "/".concat(r)), null === (o = window.document.querySelector('meta[property="og:url"]')) || void 0 === o || o.setAttribute("content", a), null === (i = window.document.querySelector('link[rel="canonical"]')) || void 0 === i || i.setAttribute("href", a)
            }
            var Di = (0, d.withRouter)((function(e) {
                var t, n, p, f = e.match,
                    v = e.history,
                    L = e.accountInformation,
                    O = e.baseAccountInformation,
                    B = e.highlightBlockId,
                    M = e.isComponent,
                    W = void 0 !== M && M,
                    q = e.isCreatorPage,
                    H = void 0 !== q && q,
                    $ = e.allowVerticalScroll,
                    V = void 0 === $ || $,
                    G = e.onSelectHighlightBlock,
                    K = e.blockGallery,
                    Y = void 0 !== K && K,
                    X = e.shouldShowToastMessages,
                    J = void 0 === X || X,
                    Q = (0, y.Z)().sendToastMessage,
                    ee = (0, Si.Z)(),
                    te = ee.getPublicProfileInfo,
                    ne = ee.getPublicProfileInfoPage,
                    re = (0, P.Z)(),
                    oe = (0, d.useRouteMatch)("".concat(h.xV, "/:page/:panel?")),
                    ie = (0, s.useState)(void 0),
                    ae = (0, a.Z)(ie, 2),
                    le = ae[0],
                    se = ae[1],
                    ce = (0, s.useState)(void 0),
                    ue = (0, a.Z)(ce, 2),
                    de = ue[0],
                    pe = ue[1],
                    me = (0, s.useState)(!0),
                    fe = (0, a.Z)(me, 2),
                    he = fe[0],
                    be = fe[1],
                    xe = (0, s.useState)({
                        open: !1,
                        title: ""
                    }),
                    ge = (0, a.Z)(xe, 2),
                    ve = ge[0],
                    ye = ge[1],
                    ke = (0, s.useState)(!1),
                    _e = (0, a.Z)(ke, 2),
                    je = _e[0],
                    Ce = _e[1],
                    we = (0, s.useState)(void 0),
                    Se = (0, a.Z)(we, 2),
                    Ie = Se[0],
                    Pe = Se[1],
                    Te = (0, I.Z)({}),
                    Ne = Te.value,
                    Le = Te.updateValue,
                    Ee = (0, s.useState)(void 0),
                    Re = (0, a.Z)(Ee, 2),
                    Oe = Re[0],
                    Be = Re[1],
                    Me = (0, s.useState)(void 0),
                    Ae = (0, a.Z)(Me, 2),
                    Ue = Ae[0],
                    Fe = Ae[1],
                    We = (0, s.useState)(void 0),
                    De = (0, a.Z)(We, 2),
                    ze = De[0],
                    qe = De[1],
                    He = (0, s.useState)(void 0),
                    $e = (0, a.Z)(He, 2),
                    Ve = $e[0],
                    Ge = $e[1],
                    Ke = (0, s.useState)(void 0),
                    Ye = (0, a.Z)(Ke, 2),
                    Xe = Ye[0],
                    Je = Ye[1],
                    Qe = (0, s.useState)(""),
                    et = (0, a.Z)(Qe, 2),
                    tt = et[0],
                    nt = et[1],
                    rt = (0, s.useState)(void 0),
                    ot = (0, a.Z)(rt, 2),
                    it = ot[0],
                    at = ot[1],
                    lt = (0, s.useState)(void 0),
                    ut = (0, a.Z)(lt, 2),
                    dt = ut[0],
                    pt = ut[1],
                    mt = (0, s.useState)(void 0),
                    ft = (0, a.Z)(mt, 2),
                    ht = ft[0],
                    bt = ft[1],
                    xt = (0, s.useState)(""),
                    gt = (0, a.Z)(xt, 2),
                    vt = gt[0],
                    yt = gt[1],
                    kt = (0, s.useState)(""),
                    _t = (0, a.Z)(kt, 2),
                    Zt = _t[0],
                    jt = _t[1],
                    Ct = (0, s.useState)(""),
                    wt = (0, a.Z)(Ct, 2),
                    St = wt[0],
                    It = wt[1],
                    Pt = (0, s.useState)(void 0),
                    Tt = (0, a.Z)(Pt, 2),
                    Nt = Tt[0],
                    Lt = Tt[1],
                    Et = (0, s.useState)(void 0),
                    Rt = (0, a.Z)(Et, 2),
                    Ot = Rt[0],
                    Bt = Rt[1],
                    Mt = (0, s.useState)(void 0),
                    At = (0, a.Z)(Mt, 2),
                    Ut = At[0],
                    Ft = At[1],
                    Wt = (0, s.useState)(void 0),
                    Dt = (0, a.Z)(Wt, 2),
                    zt = Dt[0],
                    qt = Dt[1],
                    Ht = (0, I.Z)(void 0),
                    $t = Ht.value,
                    Vt = Ht.updateValue,
                    Gt = (0, s.useState)(void 0),
                    Kt = (0, a.Z)(Gt, 1)[0],
                    Yt = (0, s.useRef)(null),
                    Xt = s.useMemo((function() {
                        return $t ? $t.page_layout.reduce((function(e, t) {
                            return e[t.block_id] = s.createRef(), e
                        }), {}) : null
                    }), [$t]);
                (0, s.useEffect)((function() {
                    var e;
                    (null === Yt || void 0 === Yt ? void 0 : Yt.current) !== B && (Yt.current = B, B && null !== Xt && void 0 !== Xt && null !== (e = Xt[B]) && void 0 !== e && e.current && !re && Xt[B].current.scrollIntoView({
                        behavior: "smooth",
                        block: Y ? "end" : "center"
                    }))
                }), [Y, Xt, B, re]);
                var Jt = (0, s.useCallback)((function(e, t) {
                        return (0, l.Z)((0, i.Z)().mark((function n() {
                            var r, o, a, l, s;
                            return (0, i.Z)().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (W === g.w6 && t.block_id !== B) {
                                            n.next = 2;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 2:
                                        if (a = B ? null === $t || void 0 === $t || null === (r = $t[B]) || void 0 === r ? void 0 : r.block_type : null, l = "home", null !== oe && void 0 !== oe && null !== (o = oe.params) && void 0 !== o && o.page && (l = oe.params.page), !a || a !== e.block_type) {
                                            n.next = 9;
                                            break
                                        }
                                        return v.push("".concat(h.xV, "/").concat(l)), n.next = 9, (0, _._v)(100);
                                    case 9:
                                        G && G(), s = "".concat(e.block_type, "?b=").concat(t.block_id), v.push("".concat(h.xV, "/").concat(l, "/").concat(s)), window.scrollTo({
                                            top: 0,
                                            behavior: "smooth"
                                        }), J && Q((function() {
                                            return "Now editing ".concat(e.block_type, " block")
                                        }));
                                    case 14:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))
                    }), [W, B, $t, null === oe || void 0 === oe || null === (t = oe.params) || void 0 === t ? void 0 : t.page, G, v, J, Q]),
                    Qt = (0, s.useCallback)((function(e, t) {
                        var n, r, i, a, l, s;
                        qe(!!e.verified), "off" !== (null === e || void 0 === e || null === (n = e.sensitive_content) || void 0 === n ? void 0 : n.age) && Je(null === e || void 0 === e ? void 0 : e.sensitive_content), e.pages && at(e.pages), e.suspend_account && pt(!0), null !== e && void 0 !== e && e.email_verification_start_time_unix_ms && (0, _.dS)(e.email_verification_start_time_unix_ms) <= 0 && (bt(!0), W || function(e, t) {
                            Mi.apply(this, arguments)
                        }(e, bt)), e.page_appearance ? s = (0, _.Ee)(g.wb, e.page_appearance) : e.link_colors ? (s = function(e) {
                            var t = (0, o.Z)((0, o.Z)({}, g.QP), e);
                            return {
                                header: {
                                    color: t.headerTextColor,
                                    type: "full",
                                    size: "small"
                                },
                                text: {
                                    color: t.buttonTextColor,
                                    hover_color: t.buttonTextHoverColor,
                                    font_family: "Roboto,sans-serif"
                                },
                                button: {
                                    background_color: t.buttonBackgroundColor.substring(0, 7),
                                    hover_background_color: t.buttonBackgroundHoverColor.substring(0, 7)
                                },
                                card: {
                                    background_color: t.buttonBackgroundColor.substring(0, 7)
                                },
                                background: {
                                    image: t.backgroundStyle.split("@")[1] ? t.backgroundStyle.split("@")[1] : "",
                                    background_color1: t.backgroundColor,
                                    background_color2: t.backgroundColor2,
                                    filter: "none",
                                    type: t.backgroundStyle.split("@")[0]
                                },
                                links: {
                                    border_color: !0
                                },
                                components: {
                                    theme: "square",
                                    opacity: 9 === t.buttonBackgroundColor.length && t.buttonBackgroundColor.endsWith("BB") ? "BB" : ""
                                }
                            }
                        }(e.link_colors), s = (0, _.Ee)(g.wb, s)) : s = g.wb, se(s), nt(s.text.font_family);
                        var c, u, d = (0, T.ZP)(T.h6.MARKETING_FEATURES, e.subscription_plan_ids);
                        d && (null !== e && void 0 !== e && null !== (r = e.marketing) && void 0 !== r && r.utm_medium || null !== e && void 0 !== e && null !== (i = e.marketing) && void 0 !== i && i.utm_source) && (c = e.marketing.utm_medium, u = e.marketing.utm_source);
                        var p = null !== e && void 0 !== e && e.socialReferrer && "direct" !== (null === e || void 0 === e ? void 0 : e.socialReferrer) ? e.socialReferrer : (0, w.Z)(),
                            m = {
                                beaconsUsername: e.beacons_username,
                                firebaseUid: e.firebase_uid,
                                profilePicUrl: e.profile_picture_url,
                                recentVideoInteractions: e.recent_video_interactions,
                                subscriptionPlanIds: e.subscription_plan_ids,
                                utmMedium: c,
                                utmSource: u,
                                vip: "is_reserved" in e,
                                cookie_notice: e.cookie_notice,
                                paymentProperties: e.payment_properties,
                                isTikTok: !(null === e || void 0 === e || !e.isTikTok),
                                socialReferrer: p
                            };
                        pe(m);
                        var f, h, b, x, v = (0, R.Ye)(e, t);
                        if (d && null !== e && void 0 !== e && null !== (a = e.marketing) && void 0 !== a && a.meta_description) It(e.marketing.meta_description);
                        else {
                            var y = v.metaDescription;
                            It(y)
                        }(d && null !== e && void 0 !== e && null !== (l = e.marketing) && void 0 !== l && l.meta_title ? jt(e.marketing.meta_title) : jt(v.metaTitle), d) && (null !== e && void 0 !== e && null !== (f = e.marketing) && void 0 !== f && f.facebook_pixel && Lt(e.marketing.facebook_pixel), null !== e && void 0 !== e && null !== (h = e.marketing) && void 0 !== h && h.tiktok_pixel && Bt(e.marketing.tiktok_pixel), null !== e && void 0 !== e && null !== (b = e.marketing) && void 0 !== b && b.google_analytics && Ft(e.marketing.google_analytics), null !== e && void 0 !== e && null !== (x = e.marketing) && void 0 !== x && x.google_analytics_4 && qt(e.marketing.google_analytics_4))
                    }), [W]);
                (0, s.useEffect)((function() {
                    function e() {
                        return (e = (0, l.Z)((0, i.Z)().mark((function e() {
                            var t, n, r, l, s, c, u, d, p, m, h, b, y, k, j, S, I;
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = function() {
                                            Fe(!1), be(!1), Ge(f.params.username.split("@")[0])
                                        }, e.next = 3, (0, ct.Z)({
                                            initialUsername: null === (t = f.params) || void 0 === t ? void 0 : t.username,
                                            isCreatorPage: H,
                                            history: v,
                                            getPublicProfileInfo: te
                                        });
                                    case 3:
                                        if (n = e.sent) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 6:
                                        if (l = n.profileInfoDocData, s = n.profileInfoDocExists, c = n.usernameString, u = c.split("@"), d = (0, a.Z)(u, 2), p = d[0], m = d[1], s || m) {
                                            e.next = 11;
                                            break
                                        }
                                        return r(), e.abrupt("return");
                                    case 11:
                                        if (m && (m = m.toLowerCase()), p = p.toLowerCase(), !s) {
                                            e.next = 25;
                                            break
                                        }
                                        l.profile_picture_url ? Be(l.profile_picture_url) : Be(x.Z), l.beacons_username ? Ge(l.beacons_username.split("@")[0]) : Ge(p), Fe(!0), h = (0, o.Z)((0, o.Z)({}, g.vW), l), Pe(h), Qt(h, p), b = new URLSearchParams(window.location.search), b.get("community") && ye((function(e) {
                                            return (0, o.Z)((0, o.Z)({}, e), {}, {
                                                open: !0,
                                                acquisitionChannel: "deeplink"
                                            })
                                        })), e.next = 28;
                                        break;
                                    case 25:
                                        return qe(!1), r(), e.abrupt("return");
                                    case 28:
                                        if (be(!1), null !== l && void 0 !== l && l.firebase_uid) {
                                            if (y = null !== l && void 0 !== l && l.socialReferrer && "direct" !== (null === l || void 0 === l ? void 0 : l.socialReferrer) ? l.socialReferrer : (0, w.Z)(), !!(null === l || void 0 === l || !l.suspend_account)) {
                                                k = (0, C.Z)(), j = k.language, S = k.countryCode;
                                                try {
                                                    (0, Z.Z)("link_actions", {
                                                        action: "page_visit",
                                                        country_code: S,
                                                        firebase_uid: l.firebase_uid,
                                                        language: j,
                                                        social_referrer: y
                                                    }), (0, _.UQ)({
                                                        method: "post",
                                                        url: "".concat("https://beacons.ai/api/", "rtanalytics/page_visit"),
                                                        data: {
                                                            firebaseUid: L.firebase_uid,
                                                            referrer: window.document.referrer
                                                        },
                                                        headers: {
                                                            "X-Beacons-Release": "10.24.0"
                                                        }
                                                    })
                                                } catch (i) {}
                                            }
                                        } else l && !l.firebase_uid && (0, Z.Z)("link_actions", {
                                            action: "track_unclaimed_page_visit",
                                            beacons_username: l.beacons_username ? l.beacons_username : window.location.href
                                        });
                                        I = new URLSearchParams(window.location.search), yt(!!I.get("qa_view"));
                                    case 32:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }
                    W || L || function() {
                        e.apply(this, arguments)
                    }()
                }), []), (0, s.useEffect)((function() {
                    var e = function() {
                        var e = (0, l.Z)((0, i.Z)().mark((function e() {
                            var t, n, a, l;
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (Ie && Ve) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (t = Ie, !f.params.page || !Ie.pages) {
                                            e.next = 16;
                                            break
                                        }
                                        if (n = Ie.pages.find((function(e) {
                                                return (0, S.Z)(e.page_title) === (0, S.Z)(f.params.page)
                                            })), !(a = null === n || void 0 === n ? void 0 : n.page_id) || "home" === a) {
                                            e.next = 15;
                                            break
                                        }
                                        if (!Ne[a]) {
                                            e.next = 11;
                                            break
                                        }
                                        t = Ne[a], e.next = 15;
                                        break;
                                    case 11:
                                        return e.next = 13, ne(Ve, a);
                                    case 13:
                                        (t = e.sent) && Le((0, r.Z)({}, a, t));
                                    case 15:
                                        Wi(H, Ve, a, (0, S.Z)(f.params.page));
                                    case 16:
                                        if (l = (0, o.Z)((0, o.Z)({}, g.vW), t), !(0, j.Z)(l, Ie, Ce)) {
                                            e.next = 20;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 20:
                                        Vt(l, !1);
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    e()
                }), [Ie, Ve, f.params.page]), (0, s.useEffect)((function() {
                    if (void 0 !== L && void 0 !== O) {
                        if (!W && L.firebase_uid) {
                            var e = null !== O && void 0 !== O && O.socialReferrer && "direct" !== (null === O || void 0 === O ? void 0 : O.socialReferrer) ? O.socialReferrer : (0, w.Z)(),
                                t = (0, C.Z)(),
                                n = t.language,
                                r = t.countryCode;
                            try {
                                (0, Z.Z)("link_actions", {
                                    action: "page_visit",
                                    country_code: r,
                                    firebase_uid: L.firebase_uid,
                                    language: n,
                                    social_referrer: e
                                }), (0, _.UQ)({
                                    method: "post",
                                    url: "".concat("https://beacons.ai/api/", "rtanalytics/page_visit"),
                                    data: {
                                        firebaseUid: L.firebase_uid,
                                        referrer: window.document.referrer
                                    },
                                    headers: {
                                        "X-Beacons-Release": "10.24.0"
                                    }
                                })
                            } catch (l) {}
                            if ((0, j.Z)(L, O, Ce)) return
                        }
                        var i = (0, o.Z)((0, o.Z)({}, g.vW), L),
                            a = (0, o.Z)((0, o.Z)({}, g.vW), O);
                        Vt(i, !1), Qt(a, a.beacons_username), H && Pe(a), Be(i.profile_picture_url), Ge(i.beacons_username.split("@")[0]), Fe(!0), be(!1)
                    }
                }), [L, O]), (0, s.useEffect)((function() {
                    de && window.navigator.cookieEnabled && (Bi.set(E.Z.SIGNUP_SELF_REFERRAL, de.beaconsUsername, {
                        httpOnly: !1,
                        secure: !1,
                        expires: new Date((new Date).setDate((new Date).getDate() + 7))
                    }), Bi.set(E.Z.LIB_VIEWED, de.beaconsUsername, {
                        httpOnly: !1,
                        secure: !1
                    }))
                }), [de]);
                var en, tn = function(e) {
                    var t = e.allowVerticalScroll,
                        n = e.isComponent,
                        r = e.isMobile;
                    return (0, s.useCallback)((function(e) {
                        var i;
                        i = n ? {
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            overflowY: t ? "auto" : "hidden",
                            overflowX: "hidden",
                            backgroundAttachment: "scroll",
                            backgroundPosition: "center",
                            maxHeight: 812
                        } : r ? {
                            content: "",
                            display: "block",
                            position: "fixed",
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: -10,
                            backgroundPosition: "center",
                            WebkitBackgroundSize: "cover",
                            MozBackgroundSize: "cover",
                            OBackgroundSize: "cover",
                            backgroundSize: "cover"
                        } : {
                            backgroundPosition: "50% 15%",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundAttachment: "scroll",
                            overflow: "hidden auto",
                            maxHeight: "100%"
                        };
                        var a = "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))";
                        switch (e.background.type) {
                            case b.Z.SOLID:
                                var l = "linear-gradient(".concat(e.background.background_color1, ", ").concat(e.background.background_color1, ")"),
                                    s = "".concat(a, ", ").concat(l);
                                i = (0, o.Z)((0, o.Z)({}, i), {}, {
                                    backgroundImage: l,
                                    desktopBackground: s
                                });
                                break;
                            case b.Z.GRADIENT_DOWN:
                                var c = "linear-gradient(".concat(e.background.background_color1, ", ").concat(e.background.background_color2, ")"),
                                    u = "".concat(a, ", ").concat(c);
                                i = (0, o.Z)((0, o.Z)({}, i), {}, {
                                    backgroundImage: c,
                                    desktopBackground: u
                                });
                                break;
                            case b.Z.GRADIENT_UP:
                                var d = "linear-gradient(".concat(e.background.background_color2, ", ").concat(e.background.background_color1, ")"),
                                    p = "".concat(a, ", ").concat(d);
                                i = (0, o.Z)((0, o.Z)({}, i), {}, {
                                    backgroundImage: d,
                                    desktopBackground: p
                                });
                                break;
                            case b.Z.DIAGONAL:
                                var m = "linear-gradient(to bottom right, ".concat(e.background.background_color1, ", ").concat(e.background.background_color2, ")"),
                                    f = "".concat(a, ", ").concat(m);
                                i = (0, o.Z)((0, o.Z)({}, i), {}, {
                                    backgroundImage: m,
                                    desktopBackground: f
                                });
                                break;
                            case b.Z.RADIAL:
                                var h = "radial-gradient(".concat(e.background.background_color1, ", ").concat(e.background.background_color2, ")"),
                                    x = "".concat(a, ", ").concat(h);
                                i = (0, o.Z)((0, o.Z)({}, i), {}, {
                                    backgroundImage: h,
                                    desktopBackground: x
                                });
                                break;
                            case b.Z.IMAGE:
                                var g = e.background.image;
                                g.includes("unsplash") ? g += r || n ? "&q=80&fm=jpg&crop=entropy&fit=max&h=900" : "&q=80&fm=jpg&crop=entropy&fit=max&h=1080" : (r || n) && e.background.mobile_image && (g = e.background.mobile_image);
                                var v = "",
                                    y = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),";
                                "dark" === e.background.filter ? (v = "linear-gradient(".concat("rgba(0, 0, 0, 0.4)", ",").concat("rgba(0, 0, 0, 0.88)", "),"), y = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),") : "light" === e.background.filter && (v = "linear-gradient(".concat("rgba(255, 255, 255, 0.4)", ",").concat("rgba(255, 255, 255, 0.88)", "),"));
                                var k = "".concat(y, ' url("').concat(g, '")');
                                i = (0, o.Z)((0, o.Z)({}, i), {}, {
                                    backgroundImage: "".concat(v, ' url("').concat(g, '")'),
                                    desktopBackground: k
                                });
                                break;
                            case b.Z.VIDEO:
                                break;
                            default:
                                return {
                                    backgroundColor: "#1c1c1c"
                                }
                        }
                        return n || !r ? [i, {}] : [{}, i]
                    }), [t, n, r])
                }({
                    allowVerticalScroll: V,
                    isComponent: W,
                    isMobile: re
                });
                if (!Ue && void 0 !== Ue) return (0, F.jsx)(Ui, {
                    username: Ve
                });
                if (!W && dt && !vt) return (0, F.jsx)(Ui, {
                    username: Ve,
                    message: "Contact us for support."
                });
                if (!W && ht) return (0, F.jsx)(Ai, {
                    username: Ve
                });
                var nn = {};
                if (le) {
                    var on = tn(le),
                        an = (0, a.Z)(on, 2);
                    en = an[0], nn = an[1]
                } else en = {
                    backgroundColor: "#1c1c1c"
                };
                if (he || !$t) return (0, F.jsx)("center", {
                    style: {
                        paddingTop: 50,
                        background: "#f2f2f2",
                        height: "100vh"
                    },
                    children: (0, F.jsx)(m(), {
                        size: 10,
                        color: "#1c1c1c"
                    })
                });
                var ln = !re && !W,
                    sn = "100%";
                ln && "portrait" === le.background.desktop_mode && le.background.type !== b.Z.VIDEO && (sn = 1024);
                var cn = le.text.header_text_color;
                if (!cn) {
                    var un = Object.values($t).find((function(e) {
                        return (null === e || void 0 === e ? void 0 : e.block_type) === g.$W.HEADER
                    }));
                    cn = (null === un || void 0 === un ? void 0 : un.header_color) || le.text.color
                }
                var dn = null === Ie || void 0 === Ie || null === (n = Ie.pages) || void 0 === n ? void 0 : n.find((function(e) {
                        return !(null === e || void 0 === e || !e.page_title || null === f || void 0 === f || !f.params.page) && (0, S.Z)(e.page_title) === (0, S.Z)(f.params.page)
                    })),
                    pn = (null === dn || void 0 === dn ? void 0 : dn.page_id) || N.te;
                return (0, F.jsx)("div", {
                    className: ln ? "PageFrameWrapper" : void 0,
                    style: {
                        backgroundImage: ln && en.desktopBackground
                    },
                    children: (0, F.jsx)("div", {
                        className: ln ? "PageFrame" : void 0,
                        style: {
                            width: sn
                        },
                        children: (0, F.jsxs)("div", {
                            className: "Profile ".concat(W),
                            style: (0, o.Z)({}, en),
                            children: [re && (0, F.jsx)("div", {
                                style: nn
                            }), !W && (0, F.jsxs)(u.q, {
                                children: [(0, F.jsx)("title", {
                                    children: Zt
                                }), (0, F.jsx)("meta", {
                                    name: "description",
                                    content: St
                                }), (0, F.jsx)("meta", {
                                    property: "og:title",
                                    content: Zt
                                }), (0, F.jsx)("meta", {
                                    property: "og:type",
                                    content: "profile"
                                }), (0, F.jsx)("meta", {
                                    property: "profile:username",
                                    content: Ve
                                }), (0, F.jsx)("meta", {
                                    property: "og:description",
                                    content: St
                                }), (0, F.jsx)("meta", {
                                    property: "og:image",
                                    content: Oe
                                }), (0, F.jsx)("link", {
                                    rel: "shortcut icon",
                                    href: null !== (p = le.page) && void 0 !== p && p.favicon ? le.page.favicon : "/favicon.ico"
                                })]
                            }), le.background.type === b.Z.VIDEO && (0, F.jsx)(Ii.Z, {
                                video: le.background.video
                            }), (0, F.jsx)(Gr.Z, {
                                fontFamily: tt
                            }), (0, F.jsx)(k.Z, {
                                children: (0, F.jsx)(U.Z.Provider, {
                                    value: le,
                                    children: (0, F.jsx)(A.Z.Provider, {
                                        value: (0, o.Z)((0, o.Z)({}, de), {}, {
                                            isComponent: W,
                                            marketplaceItems: Kt,
                                            displayUsername: Ve,
                                            verified: ze,
                                            isCreatorPage: H,
                                            setCommunityDialogState: ye,
                                            headerTextColor: cn,
                                            currentPageId: pn
                                        }),
                                        children: (0, F.jsxs)(vr.Z, {
                                            maxWidth: "sm",
                                            style: {
                                                minHeight: !W && "100vh"
                                            },
                                            children: [!!Xe && !W && (0, F.jsx)(z, {
                                                ageVerification: Xe,
                                                setAgeVerification: Je
                                            }), (0, F.jsxs)("div", {
                                                role: "region",
                                                "aria-label": "profile page",
                                                className: "relative",
                                                children: [(0, F.jsx)(Hr, {
                                                    baseProfileInfo: Ie,
                                                    isMobile: re,
                                                    displayUsername: Ve,
                                                    profilePicUrl: Oe
                                                }), (0, F.jsx)(yr, {
                                                    pages: it
                                                }), (0, F.jsx)(c.ZP, {
                                                    container: !0,
                                                    children: $t.page_layout.map((function(e) {
                                                        var t = e.block_id,
                                                            n = $t[t],
                                                            r = t === B ? "HighlightBlock" : "";
                                                        return null !== n && void 0 !== n && n.display ? (0, F.jsx)(c.ZP, {
                                                            item: !0,
                                                            className: "Section ".concat(r, " ").concat(Y && "Infinite"),
                                                            ref: Xt[t],
                                                            onClick: Jt(n, e),
                                                            children: (0, F.jsx)(Fi, {
                                                                block: n,
                                                                blockId: t
                                                            })
                                                        }, t) : null
                                                    }))
                                                }), (0, F.jsx)(D, {
                                                    style: {
                                                        marginTop: 50
                                                    }
                                                }), (0, F.jsx)(st, {}), (0, F.jsx)(Ze, {
                                                    dialogState: ve,
                                                    setDialogState: ye
                                                })]
                                            })]
                                        })
                                    })
                                })
                            }), !!Ut && !vt && (0, F.jsx)(Gn.Z, {
                                trackingId: Ut
                            }), !!zt && !vt && (0, F.jsx)(Gn.Z, {
                                trackingId: zt
                            }), (0, F.jsx)(rn, {
                                open: je,
                                setOpen: Ce
                            }), !!Nt && (0, F.jsx)(Vn, {
                                pixelId: Nt
                            }), !!Ot && (0, F.jsx)(Kn, {
                                tiktokPixelId: Ot
                            })]
                        })
                    })
                })
            }))
        },
        77988: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = n(74165),
                o = n(15861),
                i = n(72791),
                a = n(97246),
                l = n(64018);

            function s() {
                var e = (0, i.useContext)(a.fE),
                    t = (0, i.useCallback)(function() {
                        var e = (0, o.Z)((0, r.Z)().mark((function e(t) {
                            var n, o, i;
                            return (0, r.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        e.next = 9;
                                        break;
                                    case 3:
                                        if (n = e.sent, n.exists()) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.abrupt("return", null);
                                    case 7:
                                        return o = n.data(), e.abrupt("return", o);
                                    case 9:
                                        return i = "profile_info/".concat(t), e.abrupt("return", (0, l.Z)(i));
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [e]),
                    n = (0, i.useCallback)(function() {
                        var e = (0, o.Z)((0, r.Z)().mark((function e(t, n) {
                            var o, i;
                            return (0, r.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        e.next = 8;
                                        break;
                                    case 4:
                                        if (!(o = e.sent).exists()) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.abrupt("return", o.data());
                                    case 7:
                                        return e.abrupt("return", null);
                                    case 8:
                                        return i = "profile_info/".concat(t, "/pages/").concat(n), e.abrupt("return", (0, l.Z)(i));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }(), [e]);
                return {
                    getPublicProfileInfo: t,
                    getPublicProfileInfoPage: n
                }
            }
        },
        34310: function(e, t, n) {
            var r = n(94265),
                o = {
                    POSTER_IMAGE: "".concat(r.Zt, "/beacons_assets/store_product_empty_state.webp"),
                    POST_PURCHASE_MESSAGE: "Hope this product can spark joy in your life! \u2728",
                    TITLE: "Untitled Awesome Product",
                    PRICE_MINOR_UNITS: 0,
                    PRICE_FREE_CTA: "Get for Free"
                };
            t.Z = o
        },
        92249: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var r = n(80098),
                o = n(70750),
                i = n(7780);

            function a(e) {
                var t = e.storeItemId,
                    n = e.beaconsUsername,
                    a = e.pageViewSource,
                    l = void 0 === a ? i.Z.DIRECT : a,
                    s = e.referrer,
                    c = "".concat("https://shop.beacons.ai", "/").concat(n, "/").concat(t);
                return l === i.Z.DIRECT || (c = (0, r.Z)(c, o.A.PAGE_VIEW_SOURCE, l)), s && (c = (0, r.Z)(c, o.A.REFERRER, encodeURIComponent(s))), c.toString()
            }
        },
        43166: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            n(72791);
            var r = n(34310),
                o = n(80184);

            function i(e) {
                var t = e.storeItem,
                    n = t.price,
                    i = t.preview_call_to_action;
                return i ? (0, o.jsxs)("div", {
                    children: [" ", i]
                }) : n ? (0, o.jsx)("div", {
                    children: "Buy now"
                }) : (0, o.jsx)("div", {
                    children: r.Z.PRICE_FREE_CTA
                })
            }
        },
        64494: function(e, t, n) {
            n.d(t, {
                Mb: function() {
                    return l
                },
                f4: function() {
                    return o
                },
                m7: function() {
                    return i
                }
            });
            var r = n(34310);

            function o(e) {
                var t, n = e.files,
                    r = e.title;
                return !(null === n || void 0 === n || null === (t = n.filter((function(e) {
                    return !(null === e || void 0 === e || !e.item_filename)
                }))) || void 0 === t || !t.length) && !!r
            }

            function i(e) {
                var t = e.price,
                    n = e.preview_call_to_action;
                return n || (t ? "Buy $".concat(t / 100) : r.Z.PRICE_FREE_CTA)
            }
            var a = ["", "K", "M", "G"];

            function l(e) {
                var t = a.findIndex((function(t, n) {
                        return e / Math.pow(1e3, n + 1) < 1
                    })),
                    n = e / Math.pow(1e3, t),
                    r = "".concat(a[t], "B");
                return "".concat(null === n || void 0 === n ? void 0 : n.toFixed(2), " ").concat(r)
            }
        },
        75683: function(e, t, n) {
            n.d(t, {
                $: function() {
                    return a
                }
            });
            var r, o = n(4942),
                i = n(80098),
                a = {
                    BUYMEACOFFEE: "buymeacoffee",
                    KIT: "kit",
                    KOFI: "kofi",
                    LAYLO: "laylo",
                    OPENSEA: "opensea",
                    PIETRA: "pietra",
                    PROVECHO: "provecho",
                    PROXI: "proxi",
                    QUIKPLACE: "quikplace",
                    RUNTHEWORLD: "runtheworld",
                    SPLIT: "split",
                    WHYM: "whym",
                    SHOPMYSHELF: "shopmyshelf",
                    BOOKVID: "bookvid",
                    TREND: "trend",
                    OASIS: "oasis",
                    TOPMATE: "topmate",
                    DEVELOPER: "developer"
                },
                l = (r = {}, (0, o.Z)(r, a.KOFI, {
                    name: a.KOFI,
                    label: "Ko-fi",
                    image: "https://cdn.beacons.ai/images/block_icons/integrations-block-kofi.png",
                    subtitle: "Accept donations and memberships.",
                    helpLink: "https://ko-fi.com",
                    longDescription: "Feature your Ko-fi donation panel to have all donations go directly to your Ko-fi account.",
                    textfieldLabel: "Ko-fi username or profile URL",
                    height: 247,
                    textTransform: function(e) {
                        if (e.includes("ko-fi.com/") && e.includes("embed=true")) return e;
                        var t = e.includes("ko-fi.com/") ? e.split("ko-fi.com/")[1].split("?")[0].split("#")[0] : e.trim();
                        return "https://ko-fi.com/".concat(t, "/?compact=true&hidefeed=true&widget=true&embed=true")
                    }
                }), (0, o.Z)(r, a.OPENSEA, {
                    name: a.OPENSEA,
                    label: "OpenSea",
                    image: "https://cdn.beacons.ai/images/block_icons/integrations-block-opensea.png",
                    subtitle: "Showcase your OpenSea NFT collection.",
                    helpLink: "https://help.beacons.ai/en/articles/6439803-find-nft-embed-urls",
                    longDescription: "Showcase and promote your OpenSea NFT collections",
                    textfieldLabel: "OpenSea URL",
                    height: 200,
                    textTransform: function(e) {
                        return e.includes("opensea.io/") ? e : ""
                    }
                }), (0, o.Z)(r, a.LAYLO, {
                    name: a.LAYLO,
                    label: "Laylo",
                    image: "https://cdn.beacons.ai/images/block_icons/integrations-block-laylo.png",
                    subtitle: "Promote new content to your fans.",
                    helpLink: "https://laylo.com",
                    longDescription: "Capture your fans' contact info and message them anytime you drop content, merch, or events.",
                    textfieldLabel: "Laylo username or profile URL",
                    height: 200,
                    additionalOptions: [{
                        label: "Theme",
                        value: "theme",
                        defaultValue: "light",
                        updater: function(e, t) {
                            return (0, i.Z)(e, "theme", t)
                        },
                        options: [{
                            label: "Light",
                            value: "light"
                        }, {
                            label: "Dark",
                            value: "dark"
                        }]
                    }],
                    textTransform: function(e) {
                        if (e.includes("laylo.com") && e.includes("profile/embed")) return e;
                        var t = e.includes("laylo.com/") ? e.split("laylo.com/")[1].split("?")[0].split("#")[0] : e.trim();
                        return "https://laylo.com/".concat(t, "/profile/embed")
                    }
                }), (0, o.Z)(r, a.SPLIT, {
                    name: a.SPLIT,
                    label: "Split",
                    image: "https://cdn.beacons.ai/images/block_icons/integrations-block-split.png",
                    subtitle: "Split product profits with your audience.",
                    helpLink: "https://www.split.co/?utm_source=beacons_splitblock",
                    longDescription: "Showcase commissionable products and 'split' the commission with your audience.",
                    textfieldLabel: "Split username or SplitPage URL",
                    height: 300,
                    textTransform: function(e) {
                        if (e.includes("split.co/splitblock/")) return e;
                        var t = e.includes("split.co/") ? e.split("split.co/")[1].split("?")[0].split("#")[0] : e.trim();
                        return "https://www.split.co/splitblock/".concat(t)
                    }
                }), (0, o.Z)(r, a.QUIKPLACE, {
                    name: a.QUIKPLACE,
                    label: "QuikPlace",
                    image: "https://cdn.beacons.ai/images/block_icons/integrations-block-quikplace.png",
                    subtitle: "Display your QuikPlace profile.",
                    helpLink: "https://quikplace.io/apply-influencer",
                    longDescription: "Display your QuikPlace influencer profile, including your promotional offerings and price points.",
                    textfieldLabel: "QuikPlace profile URL",
                    height: 350,
                    textTransform: function(e) {
                        if (e.includes("quikplace.io") && e.includes("embed?id=")) return e;
                        var t = e.includes("quikplace.io") ? e.split("quikplace.io/influencer/")[1].split("?")[0].split("#")[0] : e.trim();
                        return "https://quikplace.io/embed?id=".concat(t)
                    }
                }), (0, o.Z)(r, a.PIETRA, {
                    name: a.PIETRA,
                    label: "Pietra",
                    image: "https://cdn.beacons.ai/images/block_icons/integrations-block-pietra.png",
                    subtitle: "Display your Pietra shop. ",
                    helpLink: "https://pietrastudio.com/sell-on-pietra/register",
                    longDescription: "Display your Pietra shop",
                    textfieldLabel: "Pietra shop URL",
                    height: 400,
                    textTransform: function(e) {
                        var t = e.includes("www.pietrastudio.com");
                        if (t && e.includes("/embed/shop")) return e;
                        var n = t ? e.split("pietrastudio.com/designers/")[1].split("?")[0].split("#")[0] : e.trim();
                        return "https://www.pietrastudio.com/embed/shop/".concat(n)
                    }
                }), (0, o.Z)(r, a.RUNTHEWORLD, {
                    name: a.RUNTHEWORLD,
                    label: "RunTheWorld",
                    image: "https://cdn.beacons.ai/images/block_icons/integrations-block-runtheworld.png",
                    subtitle: "Promote a RunTheWorld event.",
                    helpLink: "https://www.runtheworld.today/app/get-started?from=organizer_center",
                    longDescription: "Feature and promote an upcoming RunTheWorld event.",
                    textfieldLabel: "Event page URL",
                    height: 300,
                    textTransform: function(e) {
                        if (e.includes("runtheworld.today") && e.includes("/integration/")) return e;
                        var t = e.includes("runtheworld.today/app/invitation/") ? e.split("runtheworld.today/app/invitation/")[1].split("?")[0].split("#")[0] : e;
                        return "https://www.runtheworld.today/app/integration/".concat(t)
                    }
                }), (0, o.Z)(r, a.KIT, {
                    name: a.KIT,
                    label: "Kit",
                    image: "https://cdn.beacons.ai/images/block_icons/integrations-block-kit.png",
                    subtitle: "Display your Kit collection.",
                    helpLink: "https://kit.co/",
                    longDescription: "Display your Kit collection.",
                    textfieldLabel: "Kit collection URL",
                    height: 300,
                    textTransform: function(e) {
                        if (e.includes("kit.co/v2/embed")) return e;
                        if (e.includes("kit.co")) {
                            var t = encodeURIComponent(e);
                            return "https://kit.co/v2/embed?url=".concat(t)
                        }
                        return ""
                    }
                }), (0, o.Z)(r, a.WHYM, {
                    name: a.WHYM,
                    label: "WHYM.",
                    image: "https://cdn.beacons.ai/images/block_icons/integrations-block-whym.png",
                    subtitle: "Sell one-page product collections.",
                    helpLink: "https://www.whymwallet.com/seller",
                    longDescription: "Let customers browse & buy from one-page product collections. Speed up your sales with Whym.",
                    textfieldLabel: "Whym link URL",
                    height: 400,
                    textTransform: function(e) {
                        if (e.includes("whymwallet.com/beaconsai")) return e;
                        var t = e;
                        return e.includes("whym.cc/buy/") && (t = e.split("whym.cc/buy/")[1].split("?")[0].split("#")[0]), e.includes("whymwallet.com/buy/") && (t = e.split("whymwallet.com/buy/")[1].split("?")[0].split("#")[0]), "https://my.whymwallet.com/beaconsai/".concat(t)
                    }
                }), (0, o.Z)(r, a.PROVECHO, {
                    name: a.PROVECHO,
                    label: "Provecho",
                    image: "https://cdn.beacons.ai/images/block_icons/integrations-block-provecho.png",
                    subtitle: "Display your recipes.",
                    helpLink: "https://www.provecho.bio/waitlist/user",
                    longDescription: "Display your recipes",
                    textfieldLabel: "Provecho username or profile URL",
                    height: 360,
                    textTransform: function(e) {
                        if (e.includes("www.provecho.bio/beacons/")) return e;
                        var t = e.includes("provecho.bio/") ? e.split("provecho.bio/")[1].split("?")[0].split("#")[0] : e;
                        return "https://www.provecho.bio/beacons/".concat(t)
                    }
                }), (0, o.Z)(r, a.BUYMEACOFFEE, {
                    name: a.BUYMEACOFFEE,
                    label: "Buy Me a Coffee",
                    image: "https://cdn.beacons.ai/images/block_icons/integrations-block-buymeacoffee.png",
                    subtitle: "Display your Buy Me a Coffee donation panel.",
                    helpLink: "https://www.buymeacoffee.com/",
                    longDescription: "Feature your Buy Me a Coffee donation panel",
                    textfieldLabel: "BMC username",
                    height: 290,
                    textTransform: function(e) {
                        var t = e.includes("buymeacoffee.com/widget/page/") ? e.split("buymeacoffee.com/widget/page/")[1].split("?")[0].split("#")[0] : e;
                        return "https://www.buymeacoffee.com/widget/page/".concat(t, "?compact=true&hide_recents=true")
                    }
                }), (0, o.Z)(r, a.PROXI, {
                    name: a.PROXI,
                    label: "Proxi",
                    image: "https://cdn.beacons.ai/images/block_icons/integrations-block-proxi.png",
                    subtitle: "Highlight your favorite spots.",
                    helpLink: "https://www.proxi.co/templates",
                    longDescription: "Highlight your favorite spots.",
                    textfieldLabel: "Map embed url",
                    height: 350,
                    textTransform: function(e) {
                        return e
                    }
                }), (0, o.Z)(r, a.SHOPMYSHELF, {
                    name: a.SHOPMYSHELF,
                    label: "Shop My Shelf",
                    image: "https://cdn.beacons.ai/images/integration_icons/shopmyshelf_logo.png",
                    subtitle: "Copy the URL to a specific list.",
                    helpLink: "https://shoplist.us/welcome#apply",
                    longDescription: "Share your favorite products in beauty & fashion and earn when your audience buys",
                    textfieldLabel: "URL for a specific list",
                    height: 360,
                    textTransform: function(e) {
                        var t, n = null === (t = e.split("://")[1] || e) || void 0 === t ? void 0 : t.split("/")[0],
                            r = e.replace(/[^0-9]+/g, "");
                        return "https://".concat(n, "/collections/embed/").concat(r)
                    }
                }), (0, o.Z)(r, a.BOOKVID, {
                    name: a.BOOKVID,
                    label: "Bookvid",
                    image: "https://cdn.beacons.ai/images/block_icons/integrations-block-bookvid.png",
                    subtitle: "Display your Bookvid booking page.",
                    helpLink: " https://bookvid.com/",
                    longDescription: "Feature your Bookvid booking page and get paid for Zoom calls with Venmo.",
                    textfieldLabel: "Bookvid username",
                    height: 300,
                    textTransform: function(e) {
                        var t = e.includes("bookvid.com/") ? e.split("bookvid.com/")[1].split("?")[0].split("#")[0].split("/")[0] : e;
                        return "https://bookvid.com/".concat(t, "/embed")
                    }
                }), (0, o.Z)(r, a.TREND, {
                    name: a.TREND,
                    label: "Trend",
                    image: "https://cdn.beacons.ai/images/block_icons/integrations-block-trend.png",
                    subtitle: "Display your creator portfolio.",
                    helpLink: "https://creators.trend.io/",
                    longDescription: "Feature your Trend creator portfolio and get hired by brands.",
                    textfieldLabel: "Username or Profile URL",
                    height: 360,
                    textTransform: function(e) {
                        var t = !(null === e || void 0 === e || !e.includes("creators.trend.io/")) ? e.split("creators.trend.io/")[1].split("?")[0].split("#")[0].split("/").pop() : e;
                        return "https://creators.trend.io/beacons-embed/".concat(t)
                    }
                }), (0, o.Z)(r, a.OASIS, {
                    name: a.OASIS,
                    label: "Oasis",
                    image: "https://cdn.beacons.ai/images/block_icons/integrations-block-oasis.png",
                    subtitle: "Get booked for social collabs and manage all your campaigns!",
                    helpLink: "https://www.thisisoasis.com",
                    longDescription: "Get booked for social collabs with one click and manage all your campaigns in one place.",
                    textfieldLabel: "Enter Oasis Profile URL",
                    height: 280,
                    textTransform: function(e) {
                        var t, n = null !== e && void 0 !== e && e.includes("thisisoasis.com/") ? null === (t = e.split("thisisoasis.com/")[1]) || void 0 === t ? void 0 : t.split("/")[0] : e;
                        return "https://thisisoasis.com/".concat(n, "/beacon")
                    }
                }), (0, o.Z)(r, a.TOPMATE, {
                    name: a.TOPMATE,
                    label: "Topmate",
                    image: "https://cdn.beacons.ai/images/block_icons/integrations-block-topmate.png",
                    subtitle: "Let followers book paid calls with you.",
                    helpLink: "https://topmate.click/beacons",
                    longDescription: "Let your followers book paid 1:1 sessions with you!",
                    textfieldLabel: "Enter Topmate Profile URL",
                    height: 400,
                    textTransform: function(e) {
                        var t = null !== e && void 0 !== e && e.includes("topmate.io/") ? e.split("topmate.io/")[1].split("?")[0].split("#")[0].split("/").pop() : e;
                        return "https://topmate.io/beacons/".concat(t)
                    }
                }), (0, o.Z)(r, a.DEVELOPER, {
                    name: a.DEVELOPER,
                    label: "Developer",
                    image: "https://cdn.beacons.ai/images/block_icons/tablet-pen.svg",
                    subtitle: "The iframe URL is passed straight through.",
                    longDescription: "Developer block for cool developers like you!",
                    textfieldLabel: "iframe URL",
                    height: 350,
                    textTransform: function(e) {
                        return e
                    }
                }), r);
            t.Z = l
        },
        55004: function(e, t, n) {
            function r() {
                var e = navigator.userAgent || "";
                return !!e && (e.toLowerCase().includes("musical_ly") || e.toLowerCase().includes("bytelocale") || e.toLowerCase().includes("bytefulllocale") || e.toLowerCase().includes("bytedance") || e.toLowerCase().includes("trill") || e.toLowerCase().includes("tiktok"))
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        54679: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var r = n(43306),
                o = n(86101),
                i = n(39581);

            function a(e, t, n) {
                var a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    l = t.isTikTok;
                if (null !== t && void 0 !== t && t.suspend_account) return !1;
                if (null !== e && void 0 !== e && e.selected_smart_link && (0, r.MA)(e.selected_smart_link.smart_link_scheduling)) {
                    var s, c = e.selected_smart_link;
                    if (null === c || void 0 === c || !c.id || null === c || void 0 === c || null === (s = c.url) || void 0 === s || !s.trim()) return !1;
                    var u = !!l && (0, r.bM)(c);
                    if (u) return n(!0), !1;
                    if (a) {
                        var d = c.url;
                        d.startsWith("http") || (d = "http://".concat(d));
                        try {
                            new URL(d), (0, o.Z)("link_actions", {
                                id: c.id,
                                action: "link_click"
                            }), (0, r.UQ)({
                                method: "post",
                                url: "".concat("https://beacons.ai/api/", "rtanalytics/link_click"),
                                data: {
                                    linkId: c.id,
                                    referrer: window.document.referrer
                                },
                                headers: {
                                    "X-Beacons-Release": "10.24.0"
                                }
                            }), (0, i.Z)(d)
                        } catch (p) {
                            return !1
                        }
                    }
                    return !0
                }
                return !1
            }
        },
        97836: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(55004);

            function o() {
                var e = document.referrer || "",
                    t = navigator.userAgent || "";
                return t.toLowerCase().includes("instagram") ? "instagram" : (0, r.Z)(t) ? "tiktok" : t.toLowerCase().includes("fb") ? "facebook" : e.includes("instagram.com") ? "instagram" : e.includes("tiktok.com") ? "tiktok" : e.includes("t.co") ? "twitter" : e.includes("facebook.com") ? "facebook" : e.includes("youtube.com") ? "youtube" : "direct"
            }
        },
        44682: function(e, t, n) {
            function r(e) {
                return e.toLowerCase().replace(/[^a-z0-9-]/g, "")
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        }
    }
]);
//# sourceMappingURL=5842.f8cd3059.chunk.js.map