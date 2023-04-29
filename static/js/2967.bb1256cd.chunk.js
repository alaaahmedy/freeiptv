(self.webpackChunkbeacons_sup = self.webpackChunkbeacons_sup || []).push([
    [2967], {
        65764: function(e, t, n) {
            ! function(e, t) {
                "use strict";

                function n(e, t) {
                    return e(t = {
                        exports: {}
                    }, t.exports), t.exports
                }
                t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
                var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

                function o() {}

                function a() {}
                a.resetWarningCache = o;
                var c = function() {
                        function e(e, t, n, o, a, c) {
                            if (c !== r) {
                                var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                                throw u.name = "Invariant Violation", u
                            }
                        }

                        function t() {
                            return e
                        }
                        e.isRequired = e;
                        var n = {
                            array: e,
                            bool: e,
                            func: e,
                            number: e,
                            object: e,
                            string: e,
                            symbol: e,
                            any: e,
                            arrayOf: t,
                            element: e,
                            elementType: e,
                            instanceOf: t,
                            node: e,
                            objectOf: t,
                            oneOf: t,
                            oneOfType: t,
                            shape: t,
                            exact: t,
                            checkPropTypes: a,
                            resetWarningCache: o
                        };
                        return n.PropTypes = n, n
                    },
                    u = n((function(e) {
                        e.exports = c()
                    }));

                function i(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function s(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? i(Object(n), !0).forEach((function(t) {
                            p(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function l(e) {
                    return l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, l(e)
                }

                function p(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function f(e, t) {
                    return m(e) || d(e, t) || y(e, t) || v()
                }

                function m(e) {
                    if (Array.isArray(e)) return e
                }

                function d(e, t) {
                    var n = e && ("undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                    if (null != n) {
                        var r, o, a = [],
                            c = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(c = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); c = !0);
                        } catch (i) {
                            u = !0, o = i
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return a
                    }
                }

                function y(e, t) {
                    if (e) {
                        if ("string" === typeof e) return h(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(e, t) : void 0
                    }
                }

                function h(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                function v() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var g = function(e) {
                        var n = t.useRef(e);
                        return t.useEffect((function() {
                            n.current = e
                        }), [e]), n.current
                    },
                    E = function(e) {
                        return null !== e && "object" === l(e)
                    },
                    b = function(e) {
                        return E(e) && "function" === typeof e.then
                    },
                    C = function(e) {
                        return E(e) && "function" === typeof e.elements && "function" === typeof e.createToken && "function" === typeof e.createPaymentMethod && "function" === typeof e.confirmCardPayment
                    },
                    w = "[object Object]",
                    S = function e(t, n) {
                        if (!E(t) || !E(n)) return t === n;
                        var r = Array.isArray(t);
                        if (r !== Array.isArray(n)) return !1;
                        var o = Object.prototype.toString.call(t) === w;
                        if (o !== (Object.prototype.toString.call(n) === w)) return !1;
                        if (!o && !r) return t === n;
                        var a = Object.keys(t),
                            c = Object.keys(n);
                        if (a.length !== c.length) return !1;
                        for (var u = {}, i = 0; i < a.length; i += 1) u[a[i]] = !0;
                        for (var s = 0; s < c.length; s += 1) u[c[s]] = !0;
                        var l = Object.keys(u);
                        if (l.length !== a.length) return !1;
                        var p = t,
                            f = n,
                            m = function(t) {
                                return e(p[t], f[t])
                            };
                        return l.every(m)
                    },
                    j = function(e, t, n) {
                        return E(e) ? Object.keys(e).reduce((function(r, o) {
                            var a = !E(t) || !S(e[o], t[o]);
                            return n.includes(o) ? (a && console.warn("Unsupported prop change: options.".concat(o, " is not a mutable property.")), r) : a ? s(s({}, r || {}), {}, p({}, o, e[o])) : r
                        }), null) : null
                    },
                    O = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
                    k = function(e) {
                        if (null === e || C(e)) return e;
                        throw new Error(O)
                    },
                    P = function(e) {
                        if (b(e)) return {
                            tag: "async",
                            stripePromise: Promise.resolve(e).then(k)
                        };
                        var t = k(e);
                        return null === t ? {
                            tag: "empty"
                        } : {
                            tag: "sync",
                            stripe: t
                        }
                    },
                    A = t.createContext(null);
                A.displayName = "ElementsContext";
                var x = function(e, t) {
                        if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
                        return e
                    },
                    _ = t.createContext(null);
                _.displayName = "CartElementContext";
                var B = function(e, t) {
                        if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
                        return e
                    },
                    T = function(e) {
                        var n = e.stripe,
                            r = e.options,
                            o = e.children,
                            a = t.useMemo((function() {
                                return P(n)
                            }), [n]),
                            c = f(t.useState(null), 2),
                            u = c[0],
                            i = c[1],
                            s = f(t.useState(null), 2),
                            l = s[0],
                            p = s[1],
                            m = f(t.useState((function() {
                                return {
                                    stripe: "sync" === a.tag ? a.stripe : null,
                                    elements: "sync" === a.tag ? a.stripe.elements(r) : null
                                }
                            })), 2),
                            d = m[0],
                            y = m[1];
                        t.useEffect((function() {
                            var e = !0,
                                t = function(e) {
                                    y((function(t) {
                                        return t.stripe ? t : {
                                            stripe: e,
                                            elements: e.elements(r)
                                        }
                                    }))
                                };
                            return "async" !== a.tag || d.stripe ? "sync" !== a.tag || d.stripe || t(a.stripe) : a.stripePromise.then((function(n) {
                                    n && e && t(n)
                                })),
                                function() {
                                    e = !1
                                }
                        }), [a, d, r]);
                        var h = g(n);
                        t.useEffect((function() {
                            null !== h && h !== n && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")
                        }), [h, n]);
                        var v = g(r);
                        return t.useEffect((function() {
                            if (d.elements) {
                                var e = j(r, v, ["clientSecret", "fonts"]);
                                e && d.elements.update(e)
                            }
                        }), [r, v, d.elements]), t.useEffect((function() {
                            var e = d.stripe;
                            e && e._registerWrapper && e.registerAppInfo && (e._registerWrapper({
                                name: "react-stripe-js",
                                version: "1.16.1"
                            }), e.registerAppInfo({
                                name: "react-stripe-js",
                                version: "1.16.1",
                                url: "https://stripe.com/docs/stripe-js/react"
                            }))
                        }), [d.stripe]), t.createElement(A.Provider, {
                            value: d
                        }, t.createElement(_.Provider, {
                            value: {
                                cart: u,
                                setCart: i,
                                cartState: l,
                                setCartState: p
                            }
                        }, o))
                    };
                T.propTypes = {
                    stripe: u.any,
                    options: u.object
                };
                var R = function(e) {
                        var n = t.useContext(A);
                        return x(n, e)
                    },
                    I = function(e) {
                        var n = t.useContext(_);
                        return B(n, e)
                    },
                    L = function() {
                        return R("calls useElements()").elements
                    },
                    N = function() {
                        return R("calls useStripe()").stripe
                    },
                    M = function() {
                        return I("calls useCartElement()").cart
                    },
                    W = function() {
                        return I("calls useCartElementState()").cartState
                    },
                    q = function(e) {
                        return (0, e.children)(R("mounts <ElementsConsumer>"))
                    };
                q.propTypes = {
                    children: u.func.isRequired
                };
                var D = function(e, n, r) {
                        t.useEffect((function() {
                            if (!r || !e.current) return function() {};
                            var t = e.current;
                            return t.on(n, r),
                                function() {
                                    return t.off(n, r)
                                }
                        }), [r, n, e])
                    },
                    F = function(e) {
                        return e.charAt(0).toUpperCase() + e.slice(1)
                    },
                    U = function(e, n) {
                        var r = "".concat(F(e), "Element"),
                            o = n ? function(e) {
                                R("mounts <".concat(r, ">")), I("mounts <".concat(r, ">"));
                                var n = e.id,
                                    o = e.className;
                                return t.createElement("div", {
                                    id: n,
                                    className: o
                                })
                            } : function(n) {
                                var o, a = n.id,
                                    c = n.className,
                                    u = n.options,
                                    i = void 0 === u ? {} : u,
                                    s = n.onBlur,
                                    l = n.onFocus,
                                    p = n.onReady,
                                    f = n.onChange,
                                    m = n.onEscape,
                                    d = n.onClick,
                                    y = n.onLoadError,
                                    h = n.onLoaderStart,
                                    v = n.onNetworksChange,
                                    E = n.onCheckout,
                                    b = n.onLineItemClick,
                                    C = n.onConfirm,
                                    w = n.onCancel,
                                    S = n.onShippingAddressChange,
                                    O = n.onShippingRateChange,
                                    k = R("mounts <".concat(r, ">")).elements,
                                    P = t.useRef(null),
                                    A = t.useRef(null),
                                    x = I("mounts <".concat(r, ">")),
                                    _ = x.setCart,
                                    B = x.setCartState;
                                D(P, "blur", s), D(P, "focus", l), D(P, "escape", m), D(P, "click", d), D(P, "loaderror", y), D(P, "loaderstart", h), D(P, "networkschange", v), D(P, "lineitemclick", b), D(P, "confirm", C), D(P, "cancel", w), D(P, "shippingaddresschange", S), D(P, "shippingratechange", O), "cart" === e ? o = function(e) {
                                    B(e), p && p(e)
                                } : p && (o = "payButton" === e ? p : function() {
                                    p(P.current)
                                }), D(P, "ready", o), D(P, "change", "cart" === e ? function(e) {
                                    B(e), f && f(e)
                                } : f), D(P, "checkout", "cart" === e ? function(e) {
                                    B(e), E && E(e)
                                } : E), t.useLayoutEffect((function() {
                                    if (null == P.current && k && null != A.current) {
                                        var t = k.create(e, i);
                                        "cart" === e && _ && _(t), P.current = t, t.mount(A.current)
                                    }
                                }));
                                var T = g(i);
                                return t.useEffect((function() {
                                    if (P.current) {
                                        var e = j(i, T, ["paymentRequest"]);
                                        e && P.current.update(e)
                                    }
                                }), [i, T]), t.useLayoutEffect((function() {
                                    return function() {
                                        P.current && (P.current.destroy(), P.current = null)
                                    }
                                }), []), t.createElement("div", {
                                    id: a,
                                    className: c,
                                    ref: A
                                })
                            };
                        return o.propTypes = {
                            id: u.string,
                            className: u.string,
                            onChange: u.func,
                            onBlur: u.func,
                            onFocus: u.func,
                            onReady: u.func,
                            onEscape: u.func,
                            onClick: u.func,
                            onLoadError: u.func,
                            onLoaderStart: u.func,
                            onNetworksChange: u.func,
                            onCheckout: u.func,
                            onLineItemClick: u.func,
                            onConfirm: u.func,
                            onCancel: u.func,
                            onShippingAddressChange: u.func,
                            onShippingRateChange: u.func,
                            options: u.object
                        }, o.displayName = r, o.__elementType = e, o
                    },
                    Y = "undefined" === typeof window,
                    $ = U("auBankAccount", Y),
                    H = U("card", Y),
                    J = U("cardNumber", Y),
                    V = U("cardExpiry", Y),
                    z = U("cardCvc", Y),
                    G = U("fpxBank", Y),
                    K = U("iban", Y),
                    Q = U("idealBank", Y),
                    X = U("p24Bank", Y),
                    Z = U("epsBank", Y),
                    ee = U("payment", Y),
                    te = U("payButton", Y),
                    ne = U("paymentRequestButton", Y),
                    re = U("linkAuthentication", Y),
                    oe = U("address", Y),
                    ae = U("shippingAddress", Y),
                    ce = U("cart", Y),
                    ue = U("paymentMethodMessaging", Y),
                    ie = U("affirmMessage", Y),
                    se = U("afterpayClearpayMessage", Y);
                e.AddressElement = oe, e.AffirmMessageElement = ie, e.AfterpayClearpayMessageElement = se, e.AuBankAccountElement = $, e.CardCvcElement = z, e.CardElement = H, e.CardExpiryElement = V, e.CardNumberElement = J, e.CartElement = ce, e.Elements = T, e.ElementsConsumer = q, e.EpsBankElement = Z, e.FpxBankElement = G, e.IbanElement = K, e.IdealBankElement = Q, e.LinkAuthenticationElement = re, e.P24BankElement = X, e.PayButtonElement = te, e.PaymentElement = ee, e.PaymentMethodMessagingElement = ue, e.PaymentRequestButtonElement = ne, e.ShippingAddressElement = ae, e.useCartElement = M, e.useCartElementState = W, e.useElements = L, e.useStripe = N, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t, n(72791))
        },
        53473: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return p
                }
            });
            var r = "https://js.stripe.com/v3",
                o = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
                a = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
                c = null,
                u = function(e) {
                    return null !== c || (c = new Promise((function(t, n) {
                        if ("undefined" !== typeof window)
                            if (window.Stripe && e && console.warn(a), window.Stripe) t(window.Stripe);
                            else try {
                                var c = function() {
                                    for (var e = document.querySelectorAll('script[src^="'.concat(r, '"]')), t = 0; t < e.length; t++) {
                                        var n = e[t];
                                        if (o.test(n.src)) return n
                                    }
                                    return null
                                }();
                                c && e ? console.warn(a) : c || (c = function(e) {
                                    var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
                                        n = document.createElement("script");
                                    n.src = "".concat(r).concat(t);
                                    var o = document.head || document.body;
                                    if (!o) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
                                    return o.appendChild(n), n
                                }(e)), c.addEventListener("load", (function() {
                                    window.Stripe ? t(window.Stripe) : n(new Error("Stripe.js not available"))
                                })), c.addEventListener("error", (function() {
                                    n(new Error("Failed to load Stripe.js"))
                                }))
                            } catch (u) {
                                return void n(u)
                            } else t(null)
                    }))), c
                },
                i = function(e, t, n) {
                    if (null === e) return null;
                    var r = e.apply(void 0, t);
                    return function(e, t) {
                        e && e._registerWrapper && e._registerWrapper({
                            name: "stripe-js",
                            version: "1.46.0",
                            startTime: t
                        })
                    }(r, n), r
                },
                s = Promise.resolve().then((function() {
                    return u(null)
                })),
                l = !1;
            s.catch((function(e) {
                l || console.warn(e)
            }));
            var p = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                l = !0;
                var r = Date.now();
                return s.then((function(e) {
                    return i(e, t, r)
                }))
            }
        }
    }
]);
//# sourceMappingURL=2967.bb1256cd.chunk.js.map