"use strict";
(self.webpackChunkbeacons_sup = self.webpackChunkbeacons_sup || []).push([
    [9400], {
        90269: function(a, o, e) {
            e.d(o, {
                r: function() {
                    return d
                }
            });
            var c, s, i, t, n, r = e(72791),
                l = ["title", "titleId"];

            function m() {
                return m = Object.assign ? Object.assign.bind() : function(a) {
                    for (var o = 1; o < arguments.length; o++) {
                        var e = arguments[o];
                        for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c])
                    }
                    return a
                }, m.apply(this, arguments)
            }

            function p(a, o) {
                if (null == a) return {};
                var e, c, s = function(a, o) {
                    if (null == a) return {};
                    var e, c, s = {},
                        i = Object.keys(a);
                    for (c = 0; c < i.length; c++) e = i[c], o.indexOf(e) >= 0 || (s[e] = a[e]);
                    return s
                }(a, o);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(a);
                    for (c = 0; c < i.length; c++) e = i[c], o.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(a, e) && (s[e] = a[e])
                }
                return s
            }

            function g(a, o) {
                var e = a.title,
                    g = a.titleId,
                    d = p(a, l);
                return r.createElement("svg", m({
                    width: 201,
                    height: 200,
                    viewBox: "0 0 201 200",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: o,
                    "aria-labelledby": g
                }, d), e ? r.createElement("title", {
                    id: g
                }, e) : null, c || (c = r.createElement("path", {
                    d: "M77.7416 98.5094C99.3336 98.5094 116.837 81.0409 116.837 59.4928C116.837 37.9445 99.3336 20.4761 77.7416 20.4761C56.1496 20.4761 38.6459 37.9445 38.6459 59.4928C38.6459 81.0409 56.1496 98.5094 77.7416 98.5094Z"
                })), s || (s = r.createElement("path", {
                    d: "M148 73.6295C158.848 73.6295 167.642 64.853 167.642 54.0268C167.642 43.2006 158.848 34.4243 148 34.4243C137.152 34.4243 128.358 43.2006 128.358 54.0268C128.358 64.853 137.152 73.6295 148 73.6295Z"
                })), i || (i = r.createElement("path", {
                    d: "M36.7572 131.494C47.6053 131.494 56.3994 122.718 56.3994 111.892C56.3994 101.066 47.6053 92.2893 36.7572 92.2893C25.9091 92.2893 17.115 101.066 17.115 111.892C17.115 122.718 25.9091 131.494 36.7572 131.494Z"
                })), t || (t = r.createElement("path", {
                    d: "M143.09 165.611C165.62 165.611 183.885 147.383 183.885 124.897C183.885 102.412 165.62 84.1843 143.09 84.1843C120.559 84.1843 102.294 102.412 102.294 124.897C102.294 147.383 120.559 165.611 143.09 165.611Z"
                })), n || (n = r.createElement("path", {
                    d: "M73.3977 179.747C86.9575 179.747 97.9505 168.776 97.9505 155.244C97.9505 141.711 86.9575 130.741 73.3977 130.741C59.8375 130.741 48.8448 141.711 48.8448 155.244C48.8448 168.776 59.8375 179.747 73.3977 179.747Z"
                })))
            }
            var d = r.forwardRef(g);
            e.p
        },
        63271: function(a, o, e) {
            e.d(o, {
                Z: function() {
                    return l
                }
            });
            var c = e(1413),
                s = e(4942),
                i = e(45987),
                t = (e(72791), e(28182)),
                n = e(80184),
                r = ["className", "halfThick", "fullWidth"];

            function l(a) {
                var o, e = a.className,
                    l = void 0 === e ? "" : e,
                    m = a.halfThick,
                    p = void 0 !== m && m,
                    g = a.fullWidth,
                    d = void 0 === g || g,
                    h = (0, i.Z)(a, r);
                return (0, n.jsx)("div", (0, c.Z)({
                    className: (0, t.Z)((o = {
                        Divider: !0
                    }, (0, s.Z)(o, l, !0), (0, s.Z)(o, "FullWidth", d), (0, s.Z)(o, "HalfThick", p), o))
                }, h))
            }
        },
        2757: function(a, o, e) {
            e.d(o, {
                C: function() {
                    return t
                }
            });
            var c, s = e(4942),
                i = {
                    APPLE: "apple",
                    APPLEMUSIC: "applemusic",
                    AMAZON: "amazon",
                    ANCHORFM: "anchorfm",
                    BANDCAMP: "bandcamp",
                    BEACONS: "beacons",
                    BEHANCE: "behance",
                    BITLY: "bitly",
                    CALENDLY: "calendly",
                    CAMEO: "cameo",
                    CANVA: "canva",
                    CASHAPP: "cashapp",
                    CLAPPER: "clapper",
                    COLDEST: "coldest",
                    CURRENTUS: "currentus",
                    DEPOP: "depop",
                    DISCORD: "discord",
                    DISTROKID: "distrokid",
                    ETSY: "etsy",
                    FACEBOOK: "facebook",
                    FANSLY: "fansly",
                    GOFUNDME: "gofundme",
                    GOODREADS: "goodreads",
                    GOOGLE: "google",
                    GOOGLEDOCS: "googledocs",
                    GOOGLEDRIVE: "googledrive",
                    GOOGLEFORM: "googleform",
                    GOOGLEPLAY: "googleplay",
                    HONEYGAIN: "honeygain",
                    HOTMART: "hotmart",
                    INSTAGRAM: "instagram",
                    JOTFORM: "jotform",
                    KOFI: "kofi",
                    LIKETOKNOW: "liketoknow",
                    LINKEDIN: "linkedin",
                    LINKTREE: "linktree",
                    MAILCHIMP: "mailchimp",
                    MANYVIDS: "manyvids",
                    MESSENGER: "messenger",
                    MILKSHAKE: "milkshake",
                    ONELINK: "onelink",
                    ONLYFANS: "onlylink",
                    OTHER: "other",
                    PATREON: "patreon",
                    PAYPAL: "paypal",
                    PINTEREST: "pinterest",
                    POCKETSTARS: "pocketstars",
                    PORNHUB: "pornhub",
                    REDBUBBLE: "redbubble",
                    REDDIT: "reddit",
                    SHOPEE: "shopee",
                    SNAPCHAT: "snapchat",
                    SOUNDCLOUD: "soundcloud",
                    SPOTIFY: "spotify",
                    TEESPRING: "teespring",
                    TELEGRAM: "telegram",
                    TELLONYM: "tellonym",
                    TIKTOK: "tiktok",
                    TINYYURL: "tinyurl",
                    TOKOPEDIA: "tokopedia",
                    TWITCH: "twitch",
                    TWITTER: "twitter",
                    VENMO: "venmo",
                    VIMEO: "vimeo",
                    VSCO: "vsco",
                    WATTPAD: "wattpad",
                    WHATSAPP: "whatsapp",
                    YOUTUBE: "youtube",
                    YOUTUBEMUSIC: "youtubemusic"
                },
                t = (c = {}, (0, s.Z)(c, i.APPLE, {
                    displayName: "Apple",
                    color: "#000000",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/apple.png",
                    urlMatchers: ["apps.apple.com", "podcasts.apple.com", "music.apple.com"]
                }), (0, s.Z)(c, i.APPLEMUSIC, {
                    displayName: "Apple Music",
                    color: "#000000",
                    imageUrl: "https://cdn.beacons.ai/images/block_icons/music-block-apple-music.png",
                    urlMatchers: ["music.apple.com"]
                }), (0, s.Z)(c, i.AMAZON, {
                    displayName: "Amazon",
                    color: "#F9A51B",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/amazon.png",
                    urlMatchers: ["amazon.com", "amzn.to", "amazon.co.uk", "amazon.ca", "amazon.de"]
                }), (0, s.Z)(c, i.ANCHORFM, {
                    displayName: "Anchor",
                    color: "#5000B9",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/anchorfm.png",
                    urlMatchers: ["anchor.fm"]
                }), (0, s.Z)(c, i.BANDCAMP, {
                    displayName: "Bandcamp",
                    color: "#000000",
                    imageUrl: "https://cdn.beacons.ai/images/block_icons/music-block-bandcamp.png",
                    urlMatchers: ["bandcamp.com"]
                }), (0, s.Z)(c, i.BEACONS, {
                    displayName: "Beacons",
                    color: "#000000",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/beacons.png",
                    urlMatchers: ["beacons.ai", "beacons.page"]
                }), (0, s.Z)(c, i.BEHANCE, {
                    displayName: "Behance",
                    color: "#0057FF",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/behance.png",
                    urlMatchers: ["behance.net"]
                }), (0, s.Z)(c, i.BITLY, {
                    displayName: "Bitly",
                    color: "#EE4E1D",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/bitly.png",
                    urlMatchers: ["bit.ly"]
                }), (0, s.Z)(c, i.CALENDLY, {
                    displayName: "Calendly",
                    color: "#006BFF",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/calendly.png",
                    urlMatchers: ["calendly.com", "calend.ly"]
                }), (0, s.Z)(c, i.CAMEO, {
                    displayName: "Cameo",
                    color: "#F8005B",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/cameo.png",
                    urlMatchers: ["cameo"]
                }), (0, s.Z)(c, i.CANVA, {
                    displayName: "Canva",
                    color: "#7D2AE8",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/canva.png",
                    urlMatchers: ["canva.com"]
                }), (0, s.Z)(c, i.CASHAPP, {
                    displayName: "Cash App",
                    color: "#00D54B",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/cashapp.png",
                    urlMatchers: ["cash.app"]
                }), (0, s.Z)(c, i.CLAPPER, {
                    displayName: "Clapper",
                    color: "#FF6500",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/clapper.png",
                    urlMatchers: ["newsclapper.com"]
                }), (0, s.Z)(c, i.COLDEST, {
                    displayName: "The Coldest Water",
                    color: "#6FBCDF",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/coldest.png",
                    urlMatchers: ["thecoldestwater.com"]
                }), (0, s.Z)(c, i.CURRENTUS, {
                    displayName: "Current",
                    color: "#662D91",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/currentus.png",
                    urlMatchers: ["crrnt.me"]
                }), (0, s.Z)(c, i.DEPOP, {
                    displayName: "Depop",
                    color: "#FF2300",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/depop.png",
                    urlMatchers: ["depop.com"]
                }), (0, s.Z)(c, i.DISCORD, {
                    displayName: "Discord",
                    color: "#5865F2",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/discord.png",
                    urlMatchers: ["discord.gg", "discord.com"]
                }), (0, s.Z)(c, i.DISTROKID, {
                    displayName: "DistroKid",
                    color: "#000000",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/distrokid.png",
                    urlMatchers: ["distrokid.com"]
                }), (0, s.Z)(c, i.ETSY, {
                    displayName: "Etsy",
                    color: "#F1641E",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/etsy.png",
                    urlMatchers: ["etsy.com", "etsy.me"]
                }), (0, s.Z)(c, i.FACEBOOK, {
                    displayName: "Facebook",
                    color: "#2D6DF5",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/facebook.png",
                    urlMatchers: ["facebook.com"]
                }), (0, s.Z)(c, i.FANSLY, {
                    displayName: "Fansly",
                    color: "#2799F6",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/fansly.png",
                    urlMatchers: ["fans.ly", "fansly.com"]
                }), (0, s.Z)(c, i.GOFUNDME, {
                    displayName: "GoFundMe",
                    color: "#00B964",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/gofundme.png",
                    urlMatchers: ["gofund.me"]
                }), (0, s.Z)(c, i.GOODREADS, {
                    displayName: "Goodreads",
                    color: "#7A450F",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/goodreads.png",
                    urlMatchers: ["goodreads.com"]
                }), (0, s.Z)(c, i.GOOGLE, {
                    displayName: "Google",
                    color: "#4285F4",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/google.png",
                    urlMatchers: ["goo.gl", "google.com", "sites.google.com", "g.page"]
                }), (0, s.Z)(c, i.GOOGLEDOCS, {
                    displayName: "Google Docs",
                    color: "#518FF5",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/googledocs.png",
                    urlMatchers: ["docs.google.com"]
                }), (0, s.Z)(c, i.GOOGLEDRIVE, {
                    displayName: "Google Drive",
                    color: "#FFBA00",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/googledrive.png",
                    urlMatchers: ["drive.google.com"]
                }), (0, s.Z)(c, i.GOOGLEFORM, {
                    displayName: "Google Forms",
                    color: "#703DB4",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/googleforms.png",
                    urlMatchers: ["forms.gle"]
                }), (0, s.Z)(c, i.GOOGLEPLAY, {
                    displayName: "Google Play",
                    color: "#01D6FF",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/googleplay.png",
                    urlMatchers: ["play.google.com"]
                }), (0, s.Z)(c, i.HONEYGAIN, {
                    displayName: "Honeygain",
                    color: "#F9C900",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/honeygain.png",
                    urlMatchers: ["r.honeygain.me"]
                }), (0, s.Z)(c, i.HOTMART, {
                    displayName: "Hotmart",
                    color: "#F04E23",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/hotmart.png",
                    urlMatchers: ["go.hotmart.com"]
                }), (0, s.Z)(c, i.INSTAGRAM, {
                    displayName: "Instagram",
                    color: "#DF4D6C",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/instagram.png",
                    urlMatchers: ["instagram.com"]
                }), (0, s.Z)(c, i.JOTFORM, {
                    displayName: "Jotform",
                    color: "#0A1551",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/jotform.png",
                    urlMatchers: ["form.jotform.com"]
                }), (0, s.Z)(c, i.KOFI, {
                    displayName: "Ko-fi",
                    color: "#00B9FE",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/kofi.png",
                    urlMatchers: ["ko-fi.com"]
                }), (0, s.Z)(c, i.LIKETOKNOW, {
                    displayName: "LikeToKnowIt",
                    color: "#E94B44",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/liketoknow.png",
                    urlMatchers: ["liketoknow.it"]
                }), (0, s.Z)(c, i.LINKEDIN, {
                    displayName: "LinkedIn",
                    color: "#0073B1",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/linkedin.png",
                    urlMatchers: ["linkedin.com"]
                }), (0, s.Z)(c, i.LINKTREE, {
                    displayName: "Linktree",
                    color: "#39E09B",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/linktree.png",
                    urlMatchers: ["linktr.ee"]
                }), (0, s.Z)(c, i.MAILCHIMP, {
                    displayName: "Mailchimp",
                    color: "#FFE01B",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/mailchimp.png",
                    urlMatchers: ["mailchi.mp"]
                }), (0, s.Z)(c, i.MANYVIDS, {
                    displayName: "ManyVids",
                    color: "#000000",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/manyvids.png",
                    urlMatchers: ["manyvids.com"]
                }), (0, s.Z)(c, i.MESSENGER, {
                    displayName: "Messenger",
                    color: "#2782FF",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/messenger.png",
                    urlMatchers: ["m.me"]
                }), (0, s.Z)(c, i.MILKSHAKE, {
                    displayName: "Milkshake",
                    color: "#FF4716",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/milkshake.png",
                    urlMatchers: ["msha.ke"]
                }), (0, s.Z)(c, i.ONELINK, {
                    displayName: "Onelink",
                    color: "#4BDC96",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/onelink.png",
                    urlMatchers: ["onelink"]
                }), (0, s.Z)(c, i.ONLYFANS, {
                    displayName: "OnlyFans",
                    color: "#00AFF0",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/onlyfans.png",
                    urlMatchers: ["onlyfans.com"]
                }), (0, s.Z)(c, i.OTHER, {
                    displayName: "Other",
                    color: "#7048E8",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/globepurple.png"
                }), (0, s.Z)(c, i.PATREON, {
                    displayName: "Patreon",
                    color: "#FF424D",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/patreon.png",
                    urlMatchers: ["patreon.com"]
                }), (0, s.Z)(c, i.PAYPAL, {
                    displayName: "PayPal",
                    color: "#2790C3",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/paypal.png",
                    urlMatchers: ["paypal.com", "paypal.me"]
                }), (0, s.Z)(c, i.PINTEREST, {
                    displayName: "Pinterest",
                    color: "#E60023",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/pinterest.png",
                    urlMatchers: ["pinterest.com", "pin.it"]
                }), (0, s.Z)(c, i.POCKETSTARS, {
                    displayName: "PocketStars",
                    color: "#FF595A",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/pocketstars.png",
                    urlMatchers: ["pocketstars.com"]
                }), (0, s.Z)(c, i.PORNHUB, {
                    displayName: "Pornhub",
                    color: "#FF9000",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/pornhub.png",
                    urlMatchers: ["pornhub.com"]
                }), (0, s.Z)(c, i.REDBUBBLE, {
                    displayName: "Redbubble",
                    color: "#E41321",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/redbubble.png",
                    urlMatchers: ["redbubble.com"]
                }), (0, s.Z)(c, i.REDDIT, {
                    displayName: "Reddit",
                    color: "#FF4500",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/reddit.png",
                    urlMatchers: ["reddit.com"]
                }), (0, s.Z)(c, i.SHOPEE, {
                    displayName: "Shopee",
                    color: "#EE4D2D",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/shopee.png",
                    urlMatchers: ["shp.ee", "shopee.ph", "shopee.vn", "shopee.com.my", "shopee.co.id", "shopee.com.br"]
                }), (0, s.Z)(c, i.SNAPCHAT, {
                    displayName: "Snapchat",
                    color: "#FFFC00",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/snapchat.png",
                    urlMatchers: ["snapchat.com"]
                }), (0, s.Z)(c, i.SOUNDCLOUD, {
                    displayName: "SoundCloud",
                    color: "#F37722",
                    imageUrl: "https://cdn.beacons.ai/images/block_icons/music-block-soundcloud.png",
                    urlMatchers: ["soundcloud.com"]
                }), (0, s.Z)(c, i.SPOTIFY, {
                    displayName: "Spotify",
                    color: "#1ED760",
                    imageUrl: "https://cdn.beacons.ai/images/block_icons/music-block-spotify.png",
                    urlMatchers: ["open.spotify.com", "spotify.com"]
                }), (0, s.Z)(c, i.TEESPRING, {
                    displayName: "Teespring",
                    color: "#282562",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/teespring.png",
                    urlMatchers: ["teespring.com"]
                }), (0, s.Z)(c, i.TELEGRAM, {
                    displayName: "Telegram",
                    color: "#26A4E2",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/telegram.png",
                    urlMatchers: ["t.me"]
                }), (0, s.Z)(c, i.TELLONYM, {
                    displayName: "Tellonym",
                    color: "#FC1375",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/tellonym.png",
                    urlMatchers: ["tellonym.me"]
                }), (0, s.Z)(c, i.TIKTOK, {
                    displayName: "TikTok",
                    color: "#222222",
                    imageUrl: "https://cdn.beacons.ai/images/block_icons/videos-block-tiktok.png",
                    urlMatchers: ["tiktok.com"]
                }), (0, s.Z)(c, i.TINYYURL, {
                    displayName: "TinyURL",
                    color: "#17527D",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/tinyurl.png",
                    urlMatchers: ["tinyurl.com"]
                }), (0, s.Z)(c, i.TOKOPEDIA, {
                    displayName: "Tokopedia",
                    color: "#03AC0E",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/tokopedia.png",
                    urlMatchers: ["tokopedia.com"]
                }), (0, s.Z)(c, i.TWITCH, {
                    displayName: "Twitch",
                    color: "#9147FF",
                    imageUrl: "https://cdn.beacons.ai/images/block_icons/videos-block-twitch.png",
                    urlMatchers: ["twitch.tv", "m.twitch.tv"]
                }), (0, s.Z)(c, i.TWITTER, {
                    displayName: "Twitter",
                    color: "#1D9BF0",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/twitter.png",
                    urlMatchers: ["twitter.com"]
                }), (0, s.Z)(c, i.VENMO, {
                    displayName: "Venmo",
                    color: "#008CFF",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/venmo.png",
                    urlMatchers: ["venmo.com"]
                }), (0, s.Z)(c, i.VIMEO, {
                    displayName: "Vimeo",
                    color: "#008CFF",
                    imageUrl: "https://cdn.beacons.ai/images/block_icons/videos-block-vimeo.png",
                    urlMatchers: ["vimeo.com"]
                }), (0, s.Z)(c, i.VSCO, {
                    displayName: "VSCO",
                    color: "#000000",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/vsco.png",
                    urlMatchers: ["vsco.co"]
                }), (0, s.Z)(c, i.WATTPAD, {
                    displayName: "Wattpad",
                    color: "#FF500A",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/wattpad.png",
                    urlMatchers: ["wattpad.com"]
                }), (0, s.Z)(c, i.WHATSAPP, {
                    displayName: "WhatsApp",
                    color: "#128C7E",
                    imageUrl: "https://cdn.beacons.ai/images/platform_icons/whatsapp.png",
                    urlMatchers: ["api.whatsapp.com", "wa.me", "wa.link", "chat.whatsapp.com"]
                }), (0, s.Z)(c, i.YOUTUBE, {
                    displayName: "YouTube",
                    color: "#FF0000",
                    imageUrl: "https://cdn.beacons.ai/images/block_icons/videos-block-youtube.png",
                    urlMatchers: ["youtube.com", "youtu.be"]
                }), (0, s.Z)(c, i.YOUTUBEMUSIC, {
                    displayName: "YouTube Music",
                    color: "#FF0000",
                    imageUrl: "https://cdn.beacons.ai/images/block_icons/music-block-youtube-music.png",
                    urlMatchers: ["music.youtube.com"]
                }), c);
            o.Z = i
        },
        59542: function(a, o) {
            var e;
            ! function(a) {
                a.AI_BRAND_OUTREACH = "ai-brand-outreach", a.AUDIENCE_MANAGER = "audience-manager", a.EARLY_PAY = "early-pay", a.EMAIL_MARKETING = "email-marketing", a.INCOME_DASHBOARD = "income-dashboard", a.INVOICING = "invoicing", a.LAB = "lab", a.LINK_IN_BIO = "link-in-bio", a.LINK_SHORTENER = "link-shortener", a.MEDIA_KIT = "media-kit", a.POST_ACTIVITY = "post-activity", a.PRICING_CALCULATOR = "pricing-calculator", a.W_9_GENERATOR = "w-9-generator", a.STORE = "store", a.QR_CODE_GENERATOR = "qr-code-generator"
            }(e || (e = {})), o.Z = e
        },
        94265: function(a, o, e) {
            e.d(o, {
                $3: function() {
                    return r
                },
                BF: function() {
                    return t
                },
                Cq: function() {
                    return m
                },
                N0: function() {
                    return l
                },
                Zt: function() {
                    return s
                },
                et: function() {
                    return n
                },
                ju: function() {
                    return i
                }
            });
            var c = "https://cdn.beacons.ai",
                s = "".concat(c, "/images"),
                i = "".concat(s, "/logos"),
                t = "".concat(s, "/beacons_assets"),
                n = "".concat(c, "/profile_pictures"),
                r = "".concat(s, "/ui_icons"),
                l = "".concat(s, "/navigation_icons"),
                m = "".concat(s, "/social_icons")
        }
    }
]);
//# sourceMappingURL=9400.b415a715.chunk.js.map