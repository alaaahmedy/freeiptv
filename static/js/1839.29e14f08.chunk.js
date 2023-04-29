"use strict";
(self.webpackChunkbeacons_sup = self.webpackChunkbeacons_sup || []).push([
    [1839], {
        25191: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return i
                }
            });
            var r = t(93433),
                o = t(1413);

            function i(e) {
                var n = e.backendFollowersCounts,
                    t = e.firebaseFollowersCounts;
                if (void 0 === n || void 0 === t) return [];
                var i = (0, o.Z)({}, n),
                    a = [];
                t.forEach((function(e) {
                    var t = e.platformProfileId;
                    i[t] && (a.push((0, o.Z)((0, o.Z)({}, e), {}, {
                        count: i[t].followers_count,
                        url: n[t].url
                    })), delete i[t])
                }));
                var l = Object.keys(i).map((function(e) {
                    return {
                        platformProfileId: e,
                        platform: n[e].platform,
                        count: n[e].followers_count,
                        display: !0,
                        url: n[e].url
                    }
                }));
                return [].concat(a, (0, r.Z)(l))
            }
        },
        52730: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return c
                }
            });
            var r = t(74165),
                o = t(15861),
                i = t(29439),
                a = t(72791),
                l = t(86101),
                u = t(31631);

            function s(e) {
                var n, t = null === e || void 0 === e || null === (n = e.data) || void 0 === n ? void 0 : n.followers_counts;
                return t || {}
            }

            function c(e, n) {
                var t = (0, a.useState)(void 0),
                    c = (0, i.Z)(t, 2),
                    d = c[0],
                    f = c[1];
                return (0, a.useEffect)((function() {
                    var t;

                    function i() {
                        return (i = (0, o.Z)((0, r.Z)().mark((function n() {
                            var t;
                            return (0, r.Z)().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (e) {
                                            n.next = 2;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 2:
                                        return n.prev = 2, n.next = 5, (0, l.Z)("user_profile", {
                                            action: "get_followers_counts",
                                            firebase_uid: e
                                        });
                                    case 5:
                                        t = n.sent, f(s(t)), n.next = 11;
                                        break;
                                    case 9:
                                        n.prev = 9, n.t0 = n.catch(2);
                                    case 11:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [2, 9]
                            ])
                        })))).apply(this, arguments)
                    }!(null === n || void 0 === n || null === (t = n.socialStatistics) || void 0 === t || !t.length) && !(null !== n && void 0 !== n && n.isEmpty) && !!n.socialStatistics[0].phyllo_profile_id ? f(function(e) {
                        var n = null === e || void 0 === e ? void 0 : e.socialStatistics;
                        if (null === n || void 0 === n || !n.length) return {};
                        var t = {};
                        return n.forEach((function(e) {
                            var n = e.platform,
                                r = e.phyllo_profile_id,
                                o = e.platform_profile_url,
                                i = e.metrics,
                                a = e.isScraped,
                                l = i.find((function(e) {
                                    return e.name === u.Hy[n].FOLLOWERS
                                }));
                            Number.isFinite(null === l || void 0 === l ? void 0 : l.count) && !a && (t[r] = {
                                followers_count: l.count,
                                platform: n,
                                url: o
                            })
                        })), t
                    }(n)) : function() {
                        i.apply(this, arguments)
                    }()
                }), [e]), [d, f]
            }
        },
        24566: function(e, n, t) {
            t.d(n, {
                B: function() {
                    return o
                },
                Z: function() {
                    return i
                }
            });
            var r = t(1908);

            function o(e) {
                return e ? e.map((function(e) {
                    return {
                        platformProfileId: e.platform_profile_id,
                        platform: e.platform,
                        display: e.display
                    }
                })) : []
            }

            function i() {
                var e = (0, r.Z)("followers_counts"),
                    n = e.value,
                    t = e.setValue,
                    i = e.updateIndex;
                return {
                    firebaseFollowersCounts: o(n),
                    setFirebaseFollowersCounts: function(e) {
                        t(function(e) {
                            return e.map((function(e) {
                                return {
                                    platform_profile_id: e.platformProfileId,
                                    platform: e.platform,
                                    display: e.display
                                }
                            }))
                        }(e), !0)
                    },
                    updateFirebaseFollowersCounts: i
                }
            }
        },
        1908: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return u
                }
            });
            var r = t(1413),
                o = t(29439),
                i = t(72791),
                a = t(72301),
                l = t(54130);

            function u(e) {
                var n = (0, l.Z)(e),
                    t = (0, o.Z)(n, 3),
                    u = t[0],
                    s = t[1],
                    c = t[2],
                    d = (0, i.useCallback)((function(e) {
                        return function(n) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                                i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                                l = Array.from(u);
                            return l[e] = o ? i ? (0, a.Z)(u[e], n) : (0, r.Z)((0, r.Z)({}, u[e]), n) : n, s(l, t), l
                        }
                    }), [u, s]),
                    f = (0, i.useCallback)((function(e) {
                        return function() {
                            var n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                t = Array.from(u),
                                r = t.splice(e, 1);
                            return s(t, n), {
                                newArray: t,
                                removedValue: r
                            }
                        }
                    }), [u, s]),
                    v = (0, i.useCallback)((function(e) {
                        var n, t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        return n = Array.isArray(e) ? r ? u.concat(e) : e.concat(u) : r ? u.concat([e]) : [e].concat(u), s(n, t), n
                    }), [u, s]);
                return {
                    value: u,
                    setValue: s,
                    uploadValue: c,
                    updateIndex: d,
                    removeIndex: f,
                    append: v
                }
            }
        },
        75452: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return s
                }
            });
            var r = t(29439),
                o = t(72791),
                i = t(64880),
                a = t(56738),
                l = t(30317),
                u = t(22906);

            function s() {
                var e = (0, i.useHistory)(),
                    n = (0, o.useContext)(u.Z),
                    t = n.profileInfo,
                    s = n.pageId,
                    c = (0, o.useState)((function() {
                        var n = new URLSearchParams(window.location.search).get("b");
                        return n && t[n] || e.push("".concat(a.xV, "/").concat(s, "/").concat(l.te)), n
                    }));
                return (0, r.Z)(c, 1)[0]
            }
        },
        54130: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return c
                }
            });
            var r = t(4942),
                o = t(1413),
                i = t(72791),
                a = t(4690),
                l = t(22906),
                u = t(75452),
                s = t(50316);

            function c(e) {
                var n, t = (0, u.Z)(),
                    c = (0, s.Z)(),
                    d = (0, i.useContext)(l.Z),
                    f = d.profileInfo,
                    v = d.setProfileInfo,
                    p = null === f || void 0 === f || null === (n = f[t]) || void 0 === n ? void 0 : n.block_type,
                    Z = (0, i.useMemo)((function() {
                        var e;
                        return (0, o.Z)((0, o.Z)({}, null === a.ib || void 0 === a.ib || null === (e = a.ib[p]) || void 0 === e ? void 0 : e.defaultBlock), f[t])
                    }), [t, p, f]),
                    E = e ? null === Z || void 0 === Z ? void 0 : Z[e] : Z,
                    m = (0, i.useCallback)((function(n) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            a = e ? (0, r.Z)({}, t, (0, o.Z)((0, o.Z)({}, Z), {}, (0, r.Z)({}, e, n))) : (0, r.Z)({}, t, (0, o.Z)((0, o.Z)({}, Z), n));
                        v((function() {
                            return a
                        })), i && c(a)
                    }), [Z, t, e, v, c]),
                    _ = (0, i.useCallback)((function(n) {
                        var i = e ? (0, r.Z)({}, t, (0, o.Z)((0, o.Z)({}, Z), {}, (0, r.Z)({}, e, n))) : (0, r.Z)({}, t, (0, o.Z)((0, o.Z)({}, Z), n));
                        c(i)
                    }), [Z, t, e, c]);
                return Z ? [E, m, _] : [void 0, void 0, void 0]
            }
        },
        31631: function(e, n, t) {
            t.d(n, {
                C4: function() {
                    return h
                },
                Dt: function() {
                    return p
                },
                Hy: function() {
                    return f
                },
                IA: function() {
                    return E
                },
                OT: function() {
                    return _
                },
                h$: function() {
                    return m
                },
                i5: function() {
                    return T
                },
                vw: function() {
                    return Z
                },
                w3: function() {
                    return d
                },
                zl: function() {
                    return v
                }
            });
            var r, o, i, a, l, u, s = t(4942),
                c = t(2757),
                d = "-",
                f = (r = {}, (0, s.Z)(r, c.Z.INSTAGRAM, {
                    CONTENTS: "contents",
                    FOLLOWERS: "followers",
                    AVERAGE_STORY_VIEWS: "average_story_views",
                    AVERAGE_REELS_VIEWS: "average_reels_views"
                }), (0, s.Z)(r, c.Z.TWITTER, {
                    CONTENTS: "tweets",
                    FOLLOWERS: "followers",
                    AVERAGE_LIKES: "average_likes",
                    AVERAGE_RETWEETS: "average_retweets"
                }), (0, s.Z)(r, c.Z.TWITCH, {
                    CONTENTS: "videos",
                    SUBSCRIBERS: "subscribers",
                    FOLLOWERS: "followers"
                }), (0, s.Z)(r, c.Z.TIKTOK, {
                    CONTENTS: "contents",
                    FOLLOWERS: "followers"
                }), (0, s.Z)(r, c.Z.YOUTUBE, {
                    CONTENTS: "videos",
                    FOLLOWERS: "subscribers"
                }), (0, s.Z)(r, c.Z.FACEBOOK, {
                    FOLLOWERS: "followers"
                }), r),
                v = (o = {}, (0, s.Z)(o, c.Z.INSTAGRAM, {
                    ENGAGEMENT: "Engagement",
                    FOLLOWER_COUNT: "Followers",
                    POST_COUNT: "Total Posts",
                    AVERAGE_LIKES: "Avg Likes",
                    AVERAGE_COMMENTS: "Avg Comments",
                    AVERAGE_STORY_VIEWS: "Avg Story Views",
                    AVERAGE_REELS_VIEWS: "Avg Reels Views"
                }), (0, s.Z)(o, c.Z.TWITTER, {
                    ENGAGEMENT: "Engagement",
                    FOLLOWER_COUNT: "Followers",
                    TWEET_COUNT: "Total Tweets",
                    AVERAGE_LIKES: "Avg Likes",
                    AVERAGE_COMMENTS: "Avg Comments",
                    AVERAGE_RETWEETS: "Avg Retweets"
                }), (0, s.Z)(o, c.Z.TWITCH, {
                    FOLLOWER_COUNT: "Followers",
                    SUBSCRIBER_COUNT: "Subscribers",
                    VIDEO_COUNT: "Total Videos",
                    AVERAGE_VIDEO_VIEWS: "Avg Video Views"
                }), (0, s.Z)(o, c.Z.TIKTOK, {
                    ENGAGEMENT: "Engagement",
                    FOLLOWER_COUNT: "Followers",
                    VIDEO_COUNT: "Total Videos",
                    AVERAGE_VIEWS: "Avg Views",
                    AVERAGE_LIKES: "Avg Likes",
                    AVERAGE_COMMENTS: "Avg Comments"
                }), (0, s.Z)(o, c.Z.YOUTUBE, {
                    ENGAGEMENT: "Engagement",
                    SUBSCRIBER_COUNT: "Subscribers",
                    VIDEO_COUNT: "Total Videos",
                    AVERAGE_VIEWS: "Avg Views",
                    AVERAGE_LIKES: "Avg Likes",
                    AVERAGE_COMMENTS: "Avg Comments"
                }), (0, s.Z)(o, c.Z.FACEBOOK, {
                    ENGAGEMENT: "Engagement",
                    FOLLOWER_COUNT: "Followers",
                    AVERAGE_IMPRESSIONS: "Avg Impressions",
                    AVERAGE_REACH: "Avg Reach"
                }), o),
                p = (i = {}, (0, s.Z)(i, c.Z.INSTAGRAM, "Calculated as (Likes + Comments) / Followers"), (0, s.Z)(i, c.Z.TWITTER, "Calculated as (Likes + Comments + Retweets) / Impressions"), (0, s.Z)(i, c.Z.TIKTOK, "Calculated as (Likes + Comments + Shares) / Views"), (0, s.Z)(i, c.Z.YOUTUBE, "Calculated as (Likes + Comments) / Views"), (0, s.Z)(i, c.Z.FACEBOOK, "Calculated as (Likes + Comments + Shares) / Followers"), i),
                Z = (a = {}, (0, s.Z)(a, c.Z.TIKTOK, "Calculated as Views / Videos"), (0, s.Z)(a, c.Z.YOUTUBE, "Calculated as Views / Videos"), (0, s.Z)(a, c.Z.TWITCH, "Calculated as Views / Videos"), a),
                E = (l = {}, (0, s.Z)(l, c.Z.INSTAGRAM, "Calculated as Likes / Posts"), (0, s.Z)(l, c.Z.TWITTER, "Calculated as Total Likes per day averaged in a 30 Day Window"), (0, s.Z)(l, c.Z.TIKTOK, "Calculated as Likes / Videos"), (0, s.Z)(l, c.Z.YOUTUBE, "Calculated as Likes / Videos"), l),
                m = (u = {}, (0, s.Z)(u, c.Z.INSTAGRAM, "Calculated as Comments / Posts"), (0, s.Z)(u, c.Z.TWITTER, "Calculated as Comments / Tweets"), (0, s.Z)(u, c.Z.TIKTOK, "Calculated as Comments / Videos"), (0, s.Z)(u, c.Z.YOUTUBE, "Calculated as Comments / Videos"), u),
                _ = "Calculated as Views / Reels",
                h = "Calculated as Views / Stories",
                T = "Calculated as Total Retweets per day averaged in a 30 Day Window"
        },
        78429: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return u
                }
            });
            var r = t(74165),
                o = t(15861),
                i = t(72791),
                a = t(97246),
                l = t(64018);

            function u() {
                var e = (0, i.useContext)(a.fE),
                    n = (0, i.useCallback)(function() {
                        var e = (0, o.Z)((0, r.Z)().mark((function e(n) {
                            var t, o, i;
                            return (0, r.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        e.next = 9;
                                        break;
                                    case 3:
                                        if (t = e.sent, t.exists()) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.abrupt("return", null);
                                    case 7:
                                        return o = t.data(), e.abrupt("return", o);
                                    case 9:
                                        return i = "media_kit/".concat(n), e.abrupt("return", (0, l.Z)(i));
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }(), [e]);
                return {
                    getPublicMediaKit: n
                }
            }
        },
        26907: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return a
                }
            });
            t(72791);
            var r = t(18384),
                o = t(20068),
                i = t(80184);

            function a(e) {
                var n = e.verified;
                return e.vip ? (0, i.jsx)(l, {}) : n ? (0, i.jsx)(u, {}) : null
            }

            function l() {
                return (0, i.jsx)(o.Z, {
                    placement: "bottom",
                    title: "Beacons VIP account",
                    children: (0, i.jsx)("div", {
                        className: "Badge",
                        children: (0, i.jsx)(r.Z, {
                            className: "VipBadge"
                        })
                    })
                })
            }

            function u() {
                return (0, i.jsx)(o.Z, {
                    placement: "bottom",
                    title: "Beacons account verified",
                    children: (0, i.jsx)("div", {
                        className: "Badge",
                        children: (0, i.jsx)(r.Z, {
                            className: "VerifiedBadge"
                        })
                    })
                })
            }
        },
        10509: function(e, n, t) {
            var r = t(72791),
                o = t(91964),
                i = t(4690),
                a = t(43306),
                l = t(84579),
                u = t(23286),
                s = t(39338),
                c = t(80184);
            n.Z = function(e) {
                var n = e.title,
                    t = e.cta,
                    d = e.children,
                    f = (0, r.useContext)(l.Z);
                return f = (0, a.Ee)(i.wb, f), (0, c.jsxs)(u.Z, {
                    style: {
                        border: "2px dashed ".concat(f.text.color, "AA"),
                        position: "relative"
                    },
                    className: "cursor-pointer",
                    children: [(0, c.jsxs)("div", {
                        className: "ActionNeededButton",
                        children: [(0, c.jsx)(o.Z, {
                            style: {
                                height: 15
                            }
                        }), " Action needed"]
                    }), (0, c.jsxs)(s.Z, {
                        className: "Title MarginTopXS MarginBottomXS",
                        style: {
                            fontSize: "1.2rem",
                            color: f.text.color,
                            fontWeight: "bold"
                        },
                        tag: "center",
                        children: [n, " block placeholder"]
                    }), d, (0, c.jsxs)(s.Z, {
                        style: {
                            fontSize: "0.8rem",
                            color: f.text.color,
                            textAlign: "center"
                        },
                        children: [t, " This placeholder will not show up on your live page.", " ", (0, c.jsx)("strong", {
                            children: "Tap to edit."
                        })]
                    })]
                })
            }
        },
        23286: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return v
                }
            });
            var r = t(1413),
                o = t(45987),
                i = t(72791),
                a = t(4690),
                l = t(43306),
                u = t(84579),
                s = t(29640),
                c = t(6140),
                d = t(80184),
                f = ["style"];

            function v(e) {
                var n = e.style,
                    t = (0, o.Z)(e, f),
                    v = (0, i.useContext)(u.Z);
                return v = (0, l.Ee)(a.wb, v), (0, d.jsx)(c.Z, (0, r.Z)({
                    padding: "24px 24px 36px",
                    style: (0, r.Z)({
                        boxShadow: (0, s.Z)(v.card.shadow, v.components.opacity, v.card.background_color),
                        border: v.card.outline ? "2px solid ".concat(v.text.color) : 0
                    }, n)
                }, t))
            }
        },
        6140: function(e, n, t) {
            var r = t(1413),
                o = t(45987),
                i = t(72791),
                a = t(57621),
                l = t(72455),
                u = t(4690),
                s = t(43306),
                c = t(84579),
                d = t(80184),
                f = ["ignoreOpacity", "padding", "children"],
                v = (0, l.Z)({
                    root: {
                        borderRadius: function(e) {
                            return (0, s.wK)(e.theme)
                        },
                        backgroundColor: function(e) {
                            var n = e.ignoreOpacity ? "FF" : e.theme.components.opacity;
                            return e.theme.card.background_color + n
                        },
                        boxShadow: "none",
                        padding: function(e) {
                            return e.padding
                        }
                    }
                });
            n.Z = function(e) {
                var n = e.ignoreOpacity,
                    t = e.padding,
                    l = e.children,
                    p = (0, o.Z)(e, f),
                    Z = (0, i.useContext)(c.Z);
                Z = (0, s.Ee)(u.wb, Z);
                var E = v({
                    ignoreOpacity: n,
                    theme: Z,
                    padding: t
                });
                return (0, d.jsx)(a.Z, (0, r.Z)((0, r.Z)({
                    classes: E
                }, p), {}, {
                    children: l
                }))
            }
        },
        59348: function(e, n, t) {
            var r = t(1413),
                o = t(45987),
                i = t(72791),
                a = t(91614),
                l = t(4690),
                u = t(43306),
                s = t(84579),
                c = t(80184),
                d = ["style", "children"];
            n.Z = function(e) {
                var n = e.style,
                    t = e.children,
                    f = (0, o.Z)(e, d),
                    v = (0, i.useContext)(s.Z),
                    p = 20;
                (v = (0, u.Ee)(l.wb, v)).components.theme === l.tm.FULL_WIDTH && (p = 0);
                var Z = (0, r.Z)({
                    paddingLeft: p,
                    paddingRight: p,
                    paddingBottom: 100,
                    paddingTop: 0
                }, n);
                return (0, c.jsx)(a.Z, (0, r.Z)((0, r.Z)({
                    style: Z
                }, f), {}, {
                    children: t
                }))
            }
        },
        39338: function(e, n, t) {
            var r = t(1413),
                o = t(45987),
                i = t(72791),
                a = t(4690),
                l = t(43306),
                u = t(84579),
                s = t(80184),
                c = ["children", "style", "tag"];

            function d(e) {
                var n = e.split(",")[0];
                return function(e) {
                    return e in a.Z2
                }(n) ? a.Z2[n] : 400
            }
            n.Z = function(e) {
                var n = e.children,
                    t = e.style,
                    f = void 0 === t ? {} : t,
                    v = e.tag,
                    p = void 0 === v ? "div" : v,
                    Z = (0, o.Z)(e, c),
                    E = (0, i.useContext)(u.Z),
                    m = p,
                    _ = (E = (0, l.Ee)(a.wb, E)).text.font_family,
                    h = E.text.color,
                    T = d(_),
                    y = (0, l.wK)(E);
                return (0, s.jsx)(m, (0, r.Z)((0, r.Z)({
                    style: (0, r.Z)({
                        borderRadius: y,
                        color: h,
                        fontFamily: _,
                        fontWeight: T
                    }, f)
                }, Z), {}, {
                    children: n
                }))
            }
        },
        61277: function(e, n, t) {
            var r = t(72791),
                o = t(4690),
                i = t(90550),
                a = t(80184),
                l = {
                    Helvetica: !0,
                    "Times New Roman": !0,
                    "sans-serif": !0,
                    serif: !0,
                    monospace: !0
                };

            function u(e) {
                return e.split(",").map((function(e) {
                    if (e in l) return null;
                    var n = [400, 700];
                    return o.Z2[e] && n.push(o.Z2[e]), {
                        font: e.trim().replace(/'/g, ""),
                        weights: n
                    }
                })).filter((function(e) {
                    return !!e
                }))
            }

            function s(e) {
                var n = e.fontFamily;
                return (0, a.jsx)(i.Z, {
                    fonts: u(n)
                })
            }
            var c = function(e, n) {
                    return e.fontFamily === n.fontFamily
                },
                d = (0, r.memo)(s, c);
            n.Z = d
        },
        51054: function(e, n, t) {
            var r = t(29439),
                o = t(72791),
                i = t(63192),
                a = t(80184);

            function l(e) {
                var n = e.video,
                    t = (0, o.useReducer)((function(e) {
                        return e + 1
                    }), 0),
                    l = (0, r.Z)(t, 2)[1],
                    u = null === n || void 0 === n ? void 0 : n.src,
                    s = null === n || void 0 === n ? void 0 : n.thumbnail;
                return (0, a.jsx)(i.Z, {
                    onVideoRefReady: function(e) {
                        setTimeout((function() {
                            e.style = "position: fixed", l();
                            try {
                                e.play()
                            } catch (n) {}
                        }), 50)
                    },
                    poster: s,
                    src: u,
                    style: {
                        zIndex: -1,
                        position: "fixed",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: "url(".concat(s, ")"),
                        width: "100%",
                        height: "100%"
                    },
                    videoClassName: "VideoBackground"
                })
            }

            function u(e, n) {
                var t, r, o, i;
                return (null === (t = e.video) || void 0 === t ? void 0 : t.src) === (null === (r = n.video) || void 0 === r ? void 0 : r.src) && (null === (o = e.video) || void 0 === o ? void 0 : o.thumbnail) === (null === (i = n.video) || void 0 === i ? void 0 : i.thumbnail)
            }
            var s = (0, o.memo)(l, u);
            n.Z = s
        },
        29640: function(e, n, t) {
            function r(e, n, t) {
                return e ? "0px 8px 0px rgba(0, 0, 0, 0.2), 0px 8px 0px ".concat(t).concat(n) : "none"
            }
            t.d(n, {
                Z: function() {
                    return r
                }
            })
        },
        64018: function(e, n, t) {
            var r = t(93433),
                o = t(74165),
                i = t(15861),
                a = t(43306),
                l = t(40765),
                u = function() {
                    var e = (0, i.Z)((0, o.Z)().mark((function e(n) {
                        var t, r;
                        return (0, o.Z)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = n, e.next = 3, (0, a.UQ)({
                                        method: "get",
                                        url: "".concat("https://beacons.ai/api/", "document_service"),
                                        params: {
                                            f: s(t)
                                        }
                                    });
                                case 3:
                                    if (r = e.sent, !r.data.exists) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return", (0, l.Z)(r.data.data));
                                case 7:
                                    return e.abrupt("return", null);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }();

            function s(e) {
                var n = "".concat(window.btoa(JSON.stringify(e))).split("="),
                    t = n.length - 1,
                    o = (0, r.Z)(n[0]).reverse().join("");
                return "".concat(t).concat(o, "NmL")
            }
            n.Z = u
        },
        20032: function(e, n, t) {
            var r, o = t(4942),
                i = t(4690),
                a = (r = {}, (0, o.Z)(r, i.$W.BOOKING, (function(e, n) {
                    var t = !(null === n || void 0 === n || !n.stripe),
                        r = !(null === n || void 0 === n || !n.paypal_marketplace),
                        o = !t && !r;
                    return !!e.display && !o
                })), (0, o.Z)(r, i.$W.COMMUNITY, (function(e) {
                    return !!e.display
                })), (0, o.Z)(r, i.$W.EMAIL, (function(e) {
                    return !!e.display
                })), (0, o.Z)(r, i.$W.FOLLOWERS, (function(e) {
                    var n, t;
                    return !!e.display && !(null === (n = e.followers_counts) || void 0 === n || !n.length) && !(null === (t = e.followers_counts) || void 0 === t || !t.filter((function(e) {
                        return null === e || void 0 === e ? void 0 : e.display
                    })).length)
                })), (0, o.Z)(r, i.$W.FRIENDS, (function(e) {
                    var n;
                    return !(null === e || void 0 === e || !e.display) && !(null === e || void 0 === e || null === (n = e.friends_list) || void 0 === n || !n.length)
                })), (0, o.Z)(r, i.$W.HEADER, (function(e) {
                    return !!e.display
                })), (0, o.Z)(r, i.$W.IMAGES, (function(e) {
                    var n;
                    return !(null === e || void 0 === e || !e.display) && !(null === e || void 0 === e || null === (n = e.images) || void 0 === n || !n.length)
                })), (0, o.Z)(r, i.$W.LINKS, (function(e) {
                    var n;
                    return !(null === e || void 0 === e || !e.display) && !(null === e || void 0 === e || null === (n = e.links) || void 0 === n || !n.length) && !!e.links.filter((function(n) {
                        var t;
                        return !(null === (t = n.url) || void 0 === t || !t.length) && function(n) {
                            return e.link_type === i.RZ.ONE_COLUMN_IMAGE || e.link_type === i.RZ.MULTI_COLUMN_IMAGE || !!n.title
                        }(n) && n.display
                    })).length
                })), (0, o.Z)(r, i.$W.MARKETPLACE, (function(e) {
                    return !(null === e || void 0 === e || !e.display)
                })), (0, o.Z)(r, i.$W.MUSIC, (function(e) {
                    var n, t, r;
                    return !(null === e || void 0 === e || !e.display) && !(null === e || void 0 === e || null === (n = e.music_urls) || void 0 === n || !n.length) && !(null === e || void 0 === e || null === (t = e.music_urls) || void 0 === t || null === (r = t[0]) || void 0 === r || !r.url)
                })), (0, o.Z)(r, i.$W.REQUEST_FEED, (function(e) {
                    var n;
                    return !(null === e || void 0 === e || !e.display) && !(null === e || void 0 === e || null === (n = e.recent_requests) || void 0 === n || !n.length)
                })), (0, o.Z)(r, i.$W.REQUESTS, (function(e) {
                    var n;
                    return !(null === e || void 0 === e || !e.display) && !(null === e || void 0 === e || null === (n = e.menu) || void 0 === n || !n.length)
                })), (0, o.Z)(r, i.$W.SHOPPABLECONTENT, (function(e) {
                    var n;
                    return !(null === e || void 0 === e || !e.display) && (!(null === e || void 0 === e || !e.shop_title) || !(null === e || void 0 === e || !e.shop_subtitle) || !(null === e || void 0 === e || null === (n = e.shop_contents) || void 0 === n || !n.filter((function(e) {
                        return !1 !== (null === e || void 0 === e ? void 0 : e.display_content)
                    })).length))
                })), (0, o.Z)(r, i.$W.SPACER, (function(e) {
                    return !(null === e || void 0 === e || !e.display)
                })), (0, o.Z)(r, i.$W.SOCIAL, (function(e) {
                    var n, t, r;
                    return !(null === e || void 0 === e || !e.display) && !(null === e || void 0 === e || null === (n = e.social_urls) || void 0 === n || !n.length) && !(null === e || void 0 === e || null === (t = e.social_urls) || void 0 === t || null === (r = t[0]) || void 0 === r || !r.url) && e.social_urls[0].url.includes("twitter.com")
                })), (0, o.Z)(r, i.$W.STORE, (function(e, n) {
                    var t, r = !(null === n || void 0 === n || !n.paypal_marketplace),
                        o = !(null === n || void 0 === n || !n.stripe),
                        i = r || o;
                    return !(null === e || void 0 === e || !e.display) && !(null === e || void 0 === e || null === (t = e.store_items) || void 0 === t || !t.length) && !!e.store_items.filter((function(e) {
                        var n, t = null === (n = e.files) || void 0 === n ? void 0 : n.filter((function(e) {
                                return !(null === e || void 0 === e || !e.item_filename)
                            })),
                            r = !(null === t || void 0 === t || !t.length),
                            o = e.price >= 0 && i || 0 === e.price;
                        return e.availability && !!e.title && o && r
                    })).length
                })), (0, o.Z)(r, i.$W.SUPPORT, (function(e, n) {
                    var t = !(null === n || void 0 === n || !n.stripe),
                        r = !(null === n || void 0 === n || !n.paypal_marketplace),
                        o = !t && !r;
                    return !!e.display && !o
                })), (0, o.Z)(r, i.$W.TEXT, (function(e) {
                    return !(null === e || void 0 === e || !e.display) && !(null === e || void 0 === e || !e.description)
                })), (0, o.Z)(r, i.$W.VIDEOS, (function(e) {
                    var n, t;
                    return !(null === e || void 0 === e || !e.display) && !(null === e || void 0 === e || null === (n = e.videos) || void 0 === n || !n.length) && !(null === (t = e.videos[0]) || void 0 === t || !t.url)
                })), (0, o.Z)(r, i.$W.INTEGRATIONS, (function(e) {
                    return !(null === e || void 0 === e || !e.display) && !(null === e || void 0 === e || !e.integration_url)
                })), (0, o.Z)(r, i.$W.MEDIA_KIT_IN_LIB, (function(e) {
                    return !(null === e || void 0 === e || !e.display) && !(null === e || void 0 === e || !e.title)
                })), r);
            n.Z = a
        },
        74887: function(e, n) {
            n.Z = {
                BEACONS_USERNAME: "beaconsUsername",
                IS_BEACONS_TEAM: "isBeaconsTeam",
                MK_GATED_VISITOR_EMAILS: "_bVisitorEmails",
                MK_GATED_VISITOR_BRAND_DEAL: "_bVisitorBrandDeal",
                MK_GATED_VISITOR_APPROVED_ACCESS: "_bVisitorApprovedAccess",
                SIGNUP_SELF_REFERRAL: "_bSignupSelfRef",
                MK_VIEWED: "_bMediaKitViewed",
                LIB_VIEWED: "_bLinkInBioViewed",
                MK_GATED_HAS_ENTERED_PASSWORD: "_bVisitorHasEnteredPassword",
                SHOP_PAGE_PREVIEW: "_bShopPageIsViewedAsPreview",
                MANAGER_CONTACT_EMAIL: "_bManagerContactEmail"
            }
        },
        87420: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return o
                }
            });
            var r = t(72791);

            function o(e, n) {
                var t = (0, r.useRef)(null);
                return (0, r.useEffect)((function() {
                    var r = e.includes("/status/"),
                        o = e.split("/"),
                        i = o[o.length - 1],
                        a = document.createElement("script");
                    a.async = 1, a.src = "https://platform.twitter.com/widgets.js", a.onload = function() {
                        try {
                            if (r) {
                                if (!t.current) return;
                                window.twttr.widgets.createTweet(i, t.current, {
                                    align: "center",
                                    width: n
                                })
                            } else {
                                if (!t.current) return;
                                window.twttr.widgets.createTimeline({
                                    sourceType: "url",
                                    url: e
                                }, t.current, {
                                    height: 450,
                                    chrome: "nofooter, noborders, noheader"
                                })
                            }
                        } catch (o) {
                            console.error(o)
                        }
                    }, document.body.appendChild(a)
                }), [e, n]), {
                    ref: t
                }
            }
        },
        46735: function(e, n, t) {
            t.d(n, {
                L1: function() {
                    return a
                },
                Ye: function() {
                    return i
                }
            });
            var r = t(37762),
                o = t(75845);

            function i(e, n) {
                var t, i = "@".concat(n, " | "),
                    a = "",
                    l = e && e.page_layout ? e.page_layout : [],
                    u = (0, r.Z)(l);
                try {
                    for (u.s(); !(t = u.n()).done;) {
                        var s = t.value,
                            c = i.length < 155,
                            d = e[s.block_id];
                        try {
                            switch (d.block_type) {
                                case "text":
                                    d.description && c && (i += "".concat(d.description.replace(/\W+/g, " ").trim(), ". "));
                                    break;
                                case "requests":
                                    d.request_form_title && c && (i += "".concat(d.request_form_title.trim(), ". "));
                                    break;
                                case "support":
                                    d.support_description && c && (i += "".concat(d.support_description.trim(), ". "));
                                    break;
                                case "store":
                                    var f = "";
                                    d.store_items && function() {
                                        var e = [];
                                        d.store_items.forEach((function(n) {
                                            n && n.title && n.title.trim() && e.push(n.title.trim())
                                        })), e.length && (f = "Shop my products (".concat(e.slice(0, 3).join(", "), ")"))
                                    }(), f && c && (i += "".concat(f, ". "));
                                    break;
                                case "links":
                                    var v = "";
                                    d.links && function() {
                                        var e = [];
                                        d.links.forEach((function(n) {
                                            n && n.title && n.title.trim() && e.push(n.title.trim())
                                        })), e.length && (v = "Check out my links to (".concat(e.slice(0, 3).join(", "), ")"))
                                    }(), v && c && (i += "".concat(v, ". "));
                                    break;
                                case "videos":
                                    var p = !!d.videos && !!d.videos.length && d.videos[0].url.includes("youtu"),
                                        Z = !!d.videos && !!d.videos.length && d.videos[0].url.includes("tiktok"),
                                        E = p ? "Watch my YouTube video" : Z ? "Watch my TikTok video" : "";
                                    E && c && (i += "".concat(E, ". "));
                                    break;
                                case "email":
                                    c && (i += "Subscribe to my email list.");
                                    break;
                                case "header":
                                    if (d.social_array && d.social_array.length) {
                                        var m, _ = (0, r.Z)(d.social_array);
                                        try {
                                            for (_.s(); !(m = _.n()).done;) {
                                                var h = m.value.platform;
                                                if (["facebook", "instagram", "youtube", "tiktok", "twitter", "twitch"].includes(h)) {
                                                    a = (0, o.Z)(h);
                                                    break
                                                }
                                            }
                                        } catch (T) {
                                            _.e(T)
                                        } finally {
                                            _.f()
                                        }
                                    }
                            }
                        } catch (y) {}
                    }
                } catch (T) {
                    u.e(T)
                } finally {
                    u.f()
                }
                return i = i.trim(), a || (a = "Content"), {
                    metaTitle: "".concat(n, " - Link in Bio & Creator Tools | Beacons"),
                    metaDescription: i
                }
            }

            function a(e) {
                var n, t = e && e.page_layout ? e.page_layout : [],
                    o = [],
                    i = [],
                    a = (0, r.Z)(t);
                try {
                    for (a.s(); !(n = a.n()).done;) {
                        var l = n.value;
                        try {
                            var u = e[l.block_id];
                            switch (u.block_type) {
                                case "brand_partnerships":
                                    var s, c = (0, r.Z)(u.brands);
                                    try {
                                        for (c.s(); !(s = c.n()).done;) {
                                            var d = s.value;
                                            i.push(d.name)
                                        }
                                    } catch (_) {
                                        c.e(_)
                                    } finally {
                                        c.f()
                                    }
                                    break;
                                case "brand_logos":
                                    var f, v = (0, r.Z)(u.logos);
                                    try {
                                        for (v.s(); !(f = v.n()).done;) {
                                            var p = f.value;
                                            i.push(p.name)
                                        }
                                    } catch (_) {
                                        v.e(_)
                                    } finally {
                                        v.f()
                                    }
                                    break;
                                case "social_analytics_instagram":
                                    o.push("Instagram");
                                    break;
                                case "social_analytics_tiktok":
                                    o.push("TikTok");
                                    break;
                                case "social_analytics_youtube":
                                    o.push("YouTube");
                                    break;
                                case "social_analytics_twitter":
                                    o.push("Twitter");
                                    break;
                                case "social_analytics_twitch":
                                    o.push("Twitch");
                                    break;
                                case "social_analytics_facebook":
                                    o.push("Facebook")
                            }
                        } catch (h) {}
                    }
                } catch (_) {
                    a.e(_)
                } finally {
                    a.f()
                }
                var Z = "".concat(e.beacons_username, " - Media Kit | Beacons"),
                    E = o.slice(0, 3).join(", "),
                    m = i.slice(0, 3).join(", ");
                return {
                    metaTitle: Z,
                    metaDescription: "".concat(e.beacons_username, " Media Kit on Beacons, a digital resume for my content on ").concat(E, ". Check out my past work with brands like ").concat(m, "!")
                }
            }
        },
        84285: function(e, n, t) {
            t.d(n, {
                ZP: function() {
                    return v
                },
                f6: function() {
                    return p
                },
                kb: function() {
                    return f
                }
            });
            var r = t(74165),
                o = t(15861),
                i = t(29439),
                a = t(72791),
                l = t(43122),
                u = t(86101),
                s = t(49379),
                c = t(80184),
                d = (0, a.createContext)(null);

            function f(e) {
                var n = e.firebaseUid,
                    t = (0, a.useContext)(d),
                    l = (0, a.useState)(""),
                    c = (0, i.Z)(l, 2),
                    f = c[0],
                    v = c[1],
                    p = (0, a.useState)({
                        isLoading: !0,
                        isEmpty: !0
                    }),
                    Z = (0, i.Z)(p, 2),
                    E = Z[0],
                    m = Z[1];
                return (0, a.useEffect)((function() {
                    function e() {
                        return (e = (0, o.Z)((0, r.Z)().mark((function e() {
                            var t, o, i;
                            return (0, r.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, (0, u.Z)("user_profile", {
                                            action: "get_cross_platform_analytics",
                                            firebase_uid: n
                                        });
                                    case 3:
                                        o = e.sent, i = null === o || void 0 === o || null === (t = o.data) || void 0 === t ? void 0 : t.cpa_data, m((0, s.Z)(i)), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), m((0, s.Z)([]));
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        })))).apply(this, arguments)
                    }
                    if (n) {
                        if (!t || f !== n) return v(n), void
                        function() {
                            e.apply(this, arguments)
                        }();
                        null !== t && void 0 !== t && t.isLoading || m(t)
                    }
                }), [n]), {
                    backendCrossPlatformAnalytics: E,
                    setBackendCrossPlatformAnalytics: m
                }
            }

            function v(e) {
                var n = e.children,
                    t = f({
                        firebaseUid: (0, l.ZU)().uid
                    }).backendCrossPlatformAnalytics;
                return (0, c.jsx)(d.Provider, {
                    value: t,
                    children: n
                })
            }

            function p() {
                var e = (0, a.useContext)(d);
                if (null === e) throw new Error("useBackendCrossPlatformAnalyticsContext must be used within a BackendCrossPlatformAnalyticsProvider");
                return e
            }
        },
        45304: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return l
                }
            });
            var r = t(29439),
                o = t(72791),
                i = t(98353),
                a = t(80184);

            function l(e) {
                var n = e.children,
                    t = (0, o.useReducer)((function(e) {
                        return e + 1
                    }), 0),
                    l = (0, r.Z)(t, 2)[1];
                return (0, a.jsx)(i.Z.Provider, {
                    value: {
                        forceRefresh: l
                    },
                    children: n
                })
            }
        },
        75845: function(e, n, t) {
            function r(e) {
                return e ? e.charAt(0).toUpperCase() + e.slice(1) : ""
            }
            t.d(n, {
                Z: function() {
                    return r
                }
            })
        }
    }
]);
//# sourceMappingURL=1839.29e14f08.chunk.js.map