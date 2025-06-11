import { useCssVars as N, createElementBlock as A, openBlock as y, renderSlot as O, createElementVNode as F, toDisplayString as K, ref as eu, Fragment as x0, renderList as m0, normalizeClass as Cu, computed as V, createCommentVNode as Y, createBlock as ou, resolveDynamicComponent as mu, createStaticVNode as V0, watch as Iu, nextTick as xu, onMounted as $u, createVNode as X, withDirectives as G0, vModelText as W0, unref as Pu, onUnmounted as J0, Transition as Xu, withCtx as J } from "vue";
const vu = {
  EVENT_OPEN: "botui-open",
  EVENT_CLOSE: "botui-close",
  EVENT_TOGGLE: "botui-toggle"
}, $ = (u, e) => {
  const t = u.__vccOpts || u;
  for (const [n, r] of e)
    t[n] = r;
  return t;
}, Q0 = { class: "qkb-board-header" }, X0 = { class: "qkb-board-header__title" }, K0 = {
  __name: "Header",
  props: {
    botTitle: {
      type: String,
      default: "Chatbot"
    },
    colorScheme: {
      type: String,
      default: "#1a4bff"
    },
    textColor: {
      type: String,
      default: "#fff"
    }
  },
  setup(u) {
    return N((e) => ({
      "899703c0": u.colorScheme,
      "989fc124": u.textColor
    })), (e, t) => (y(), A("div", Q0, [
      O(e.$slots, "header", {}, () => [
        F("div", X0, K(u.botTitle), 1)
      ], !0)
    ]));
  }
}, Y0 = /* @__PURE__ */ $(K0, [["__scopeId", "data-v-d4de3b4f"]]), ue = { class: "qkb-msg-bubble-component qkb-msg-bubble-component--single-text" }, ee = { class: "qkb-msg-bubble-component__text" }, te = {
  __name: "SingleText",
  props: {
    mainData: {
      type: Object,
      required: !0
    },
    msgBubbleBgBot: {
      type: String,
      default: "#f0f0f0"
    },
    msgBubbleColorBot: {
      type: String,
      default: "#000"
    },
    msgBubbleBgUser: {
      type: String,
      default: "#4356e0"
    },
    msgBubbleColorUser: {
      type: String,
      default: "#fff"
    },
    isUserMessage: {
      type: Boolean,
      default: !1
    }
  },
  setup(u) {
    return N((e) => ({
      bb7eabf4: u.isUserMessage ? u.msgBubbleBgUser : u.msgBubbleBgBot,
      "448759d8": u.isUserMessage ? u.msgBubbleColorUser : u.msgBubbleColorBot
    })), (e, t) => (y(), A("div", ue, [
      F("div", ee, K(u.mainData.text), 1)
    ]));
  }
}, ne = /* @__PURE__ */ $(te, [["__scopeId", "data-v-e044f48b"]]);
function re(u) {
  return { all: u = u || /* @__PURE__ */ new Map(), on: function(e, t) {
    var n = u.get(e);
    n ? n.push(t) : u.set(e, [t]);
  }, off: function(e, t) {
    var n = u.get(e);
    n && (t ? n.splice(n.indexOf(t) >>> 0, 1) : u.set(e, []));
  }, emit: function(e, t) {
    var n = u.get(e);
    n && n.slice().map(function(r) {
      r(t);
    }), (n = u.get("*")) && n.slice().map(function(r) {
      r(e, t);
    });
  } };
}
const Lu = re(), ce = { class: "qkb-msg-bubble-component qkb-msg-bubble-component--button-options" }, oe = { class: "qkb-msg-bubble-component__text" }, ie = { class: "qkb-msg-bubble-component__options-wrapper" }, ae = ["onClick"], se = ["href"], le = {
  __name: "ButtonOptions",
  props: {
    mainData: {
      type: Object,
      required: !0
    },
    msgBubbleBgBot: {
      type: String,
      default: "#f0f0f0"
    },
    msgBubbleColorBot: {
      type: String,
      default: "#000"
    },
    msgBubbleBgUser: {
      type: String,
      default: "#4356e0"
    },
    msgBubbleColorUser: {
      type: String,
      default: "#fff"
    },
    isUserMessage: {
      type: Boolean,
      default: !1
    }
  },
  setup(u) {
    N((n) => ({
      "3dd7affc": u.msgBubbleBgBot,
      "05872c6a": u.msgBubbleColorBot,
      "7d270036": u.msgBubbleBgUser,
      a931dcf0: u.msgBubbleColorUser
    }));
    const e = eu(null), t = (n) => {
      e.value = n.value, Lu.emit("button-clicked", {
        action: n.action || "click",
        value: n.value,
        text: n.text
      });
    };
    return (n, r) => (y(), A("div", ce, [
      F("div", oe, K(u.mainData.text), 1),
      F("div", ie, [
        (y(!0), A(x0, null, m0(u.mainData.options, (c, o) => (y(), A("div", {
          key: o,
          class: Cu([{ active: e.value === c.value }, "qkb-mb-button-options__item"])
        }, [
          c.action !== "url" ? (y(), A("button", {
            key: 0,
            class: "qkb-mb-button-options__btn",
            onClick: (i) => t(c)
          }, [
            F("span", null, K(c.text), 1)
          ], 8, ae)) : (y(), A("a", {
            key: 1,
            href: c.value,
            target: "_blank",
            class: "qkb-mb-button-options__btn qkb-mb-button-options__url"
          }, [
            F("span", null, K(c.text), 1)
          ], 8, se))
        ], 2))), 128))
      ])
    ]));
  }
}, fe = /* @__PURE__ */ $(le, [["__scopeId", "data-v-04ac8eca"]]), Ku = {};
function de(u) {
  let e = Ku[u];
  if (e)
    return e;
  e = Ku[u] = [];
  for (let t = 0; t < 128; t++) {
    const n = String.fromCharCode(t);
    e.push(n);
  }
  for (let t = 0; t < u.length; t++) {
    const n = u.charCodeAt(t);
    e[n] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
  }
  return e;
}
function tu(u, e) {
  typeof e != "string" && (e = tu.defaultChars);
  const t = de(e);
  return u.replace(/(%[a-f0-9]{2})+/gi, function(n) {
    let r = "";
    for (let c = 0, o = n.length; c < o; c += 3) {
      const i = parseInt(n.slice(c + 1, c + 3), 16);
      if (i < 128) {
        r += t[i];
        continue;
      }
      if ((i & 224) === 192 && c + 3 < o) {
        const a = parseInt(n.slice(c + 4, c + 6), 16);
        if ((a & 192) === 128) {
          const s = i << 6 & 1984 | a & 63;
          s < 128 ? r += "��" : r += String.fromCharCode(s), c += 3;
          continue;
        }
      }
      if ((i & 240) === 224 && c + 6 < o) {
        const a = parseInt(n.slice(c + 4, c + 6), 16), s = parseInt(n.slice(c + 7, c + 9), 16);
        if ((a & 192) === 128 && (s & 192) === 128) {
          const d = i << 12 & 61440 | a << 6 & 4032 | s & 63;
          d < 2048 || d >= 55296 && d <= 57343 ? r += "���" : r += String.fromCharCode(d), c += 6;
          continue;
        }
      }
      if ((i & 248) === 240 && c + 9 < o) {
        const a = parseInt(n.slice(c + 4, c + 6), 16), s = parseInt(n.slice(c + 7, c + 9), 16), d = parseInt(n.slice(c + 10, c + 12), 16);
        if ((a & 192) === 128 && (s & 192) === 128 && (d & 192) === 128) {
          let l = i << 18 & 1835008 | a << 12 & 258048 | s << 6 & 4032 | d & 63;
          l < 65536 || l > 1114111 ? r += "����" : (l -= 65536, r += String.fromCharCode(55296 + (l >> 10), 56320 + (l & 1023))), c += 9;
          continue;
        }
      }
      r += "�";
    }
    return r;
  });
}
tu.defaultChars = ";/?:@&=+$,#";
tu.componentChars = "";
const Yu = {};
function be(u) {
  let e = Yu[u];
  if (e)
    return e;
  e = Yu[u] = [];
  for (let t = 0; t < 128; t++) {
    const n = String.fromCharCode(t);
    /^[0-9a-z]$/i.test(n) ? e.push(n) : e.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
  }
  for (let t = 0; t < u.length; t++)
    e[u.charCodeAt(t)] = u[t];
  return e;
}
function fu(u, e, t) {
  typeof e != "string" && (t = e, e = fu.defaultChars), typeof t > "u" && (t = !0);
  const n = be(e);
  let r = "";
  for (let c = 0, o = u.length; c < o; c++) {
    const i = u.charCodeAt(c);
    if (t && i === 37 && c + 2 < o && /^[0-9a-f]{2}$/i.test(u.slice(c + 1, c + 3))) {
      r += u.slice(c, c + 3), c += 2;
      continue;
    }
    if (i < 128) {
      r += n[i];
      continue;
    }
    if (i >= 55296 && i <= 57343) {
      if (i >= 55296 && i <= 56319 && c + 1 < o) {
        const a = u.charCodeAt(c + 1);
        if (a >= 56320 && a <= 57343) {
          r += encodeURIComponent(u[c] + u[c + 1]), c++;
          continue;
        }
      }
      r += "%EF%BF%BD";
      continue;
    }
    r += encodeURIComponent(u[c]);
  }
  return r;
}
fu.defaultChars = ";/?:@&=+$,-_.!~*'()#";
fu.componentChars = "-_.!~*'()";
function Uu(u) {
  let e = "";
  return e += u.protocol || "", e += u.slashes ? "//" : "", e += u.auth ? u.auth + "@" : "", u.hostname && u.hostname.indexOf(":") !== -1 ? e += "[" + u.hostname + "]" : e += u.hostname || "", e += u.port ? ":" + u.port : "", e += u.pathname || "", e += u.search || "", e += u.hash || "", e;
}
function _u() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const he = /^([a-z0-9.+-]+:)/i, pe = /:[0-9]*$/, xe = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, me = ["<", ">", '"', "`", " ", "\r", `
`, "	"], _e = ["{", "}", "|", "\\", "^", "`"].concat(me), ge = ["'"].concat(_e), u0 = ["%", "/", "?", ";", "#"].concat(ge), e0 = ["/", "?", "#"], ke = 255, t0 = /^[+a-z0-9A-Z_-]{0,63}$/, Ce = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, n0 = {
  javascript: !0,
  "javascript:": !0
}, r0 = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
};
function ju(u, e) {
  if (u && u instanceof _u) return u;
  const t = new _u();
  return t.parse(u, e), t;
}
_u.prototype.parse = function(u, e) {
  let t, n, r, c = u;
  if (c = c.trim(), !e && u.split("#").length === 1) {
    const s = xe.exec(c);
    if (s)
      return this.pathname = s[1], s[2] && (this.search = s[2]), this;
  }
  let o = he.exec(c);
  if (o && (o = o[0], t = o.toLowerCase(), this.protocol = o, c = c.substr(o.length)), (e || o || c.match(/^\/\/[^@\/]+@[^@\/]+/)) && (r = c.substr(0, 2) === "//", r && !(o && n0[o]) && (c = c.substr(2), this.slashes = !0)), !n0[o] && (r || o && !r0[o])) {
    let s = -1;
    for (let f = 0; f < e0.length; f++)
      n = c.indexOf(e0[f]), n !== -1 && (s === -1 || n < s) && (s = n);
    let d, l;
    s === -1 ? l = c.lastIndexOf("@") : l = c.lastIndexOf("@", s), l !== -1 && (d = c.slice(0, l), c = c.slice(l + 1), this.auth = d), s = -1;
    for (let f = 0; f < u0.length; f++)
      n = c.indexOf(u0[f]), n !== -1 && (s === -1 || n < s) && (s = n);
    s === -1 && (s = c.length), c[s - 1] === ":" && s--;
    const h = c.slice(0, s);
    c = c.slice(s), this.parseHost(h), this.hostname = this.hostname || "";
    const b = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!b) {
      const f = this.hostname.split(/\./);
      for (let g = 0, k = f.length; g < k; g++) {
        const D = f[g];
        if (D && !D.match(t0)) {
          let p = "";
          for (let m = 0, x = D.length; m < x; m++)
            D.charCodeAt(m) > 127 ? p += "x" : p += D[m];
          if (!p.match(t0)) {
            const m = f.slice(0, g), x = f.slice(g + 1), _ = D.match(Ce);
            _ && (m.push(_[1]), x.unshift(_[2])), x.length && (c = x.join(".") + c), this.hostname = m.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > ke && (this.hostname = ""), b && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const i = c.indexOf("#");
  i !== -1 && (this.hash = c.substr(i), c = c.slice(0, i));
  const a = c.indexOf("?");
  return a !== -1 && (this.search = c.substr(a), c = c.slice(0, a)), c && (this.pathname = c), r0[t] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
_u.prototype.parseHost = function(u) {
  let e = pe.exec(u);
  e && (e = e[0], e !== ":" && (this.port = e.substr(1)), u = u.substr(0, u.length - e.length)), u && (this.hostname = u);
};
const De = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: tu,
  encode: fu,
  format: Uu,
  parse: ju
}, Symbol.toStringTag, { value: "Module" })), _0 = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, g0 = /[\0-\x1F\x7F-\x9F]/, ye = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, Hu = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, k0 = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, C0 = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, Ee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: _0,
  Cc: g0,
  Cf: ye,
  P: Hu,
  S: k0,
  Z: C0
}, Symbol.toStringTag, { value: "Module" })), Ae = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((u) => u.charCodeAt(0))
), Fe = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((u) => u.charCodeAt(0))
);
var Bu;
const ve = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), Be = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (Bu = String.fromCodePoint) !== null && Bu !== void 0 ? Bu : function(u) {
    let e = "";
    return u > 65535 && (u -= 65536, e += String.fromCharCode(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), e += String.fromCharCode(u), e;
  }
);
function we(u) {
  var e;
  return u >= 55296 && u <= 57343 || u > 1114111 ? 65533 : (e = ve.get(u)) !== null && e !== void 0 ? e : u;
}
var B;
(function(u) {
  u[u.NUM = 35] = "NUM", u[u.SEMI = 59] = "SEMI", u[u.EQUALS = 61] = "EQUALS", u[u.ZERO = 48] = "ZERO", u[u.NINE = 57] = "NINE", u[u.LOWER_A = 97] = "LOWER_A", u[u.LOWER_F = 102] = "LOWER_F", u[u.LOWER_X = 120] = "LOWER_X", u[u.LOWER_Z = 122] = "LOWER_Z", u[u.UPPER_A = 65] = "UPPER_A", u[u.UPPER_F = 70] = "UPPER_F", u[u.UPPER_Z = 90] = "UPPER_Z";
})(B || (B = {}));
const Se = 32;
var Z;
(function(u) {
  u[u.VALUE_LENGTH = 49152] = "VALUE_LENGTH", u[u.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", u[u.JUMP_TABLE = 127] = "JUMP_TABLE";
})(Z || (Z = {}));
function Ru(u) {
  return u >= B.ZERO && u <= B.NINE;
}
function Te(u) {
  return u >= B.UPPER_A && u <= B.UPPER_F || u >= B.LOWER_A && u <= B.LOWER_F;
}
function qe(u) {
  return u >= B.UPPER_A && u <= B.UPPER_Z || u >= B.LOWER_A && u <= B.LOWER_Z || Ru(u);
}
function Me(u) {
  return u === B.EQUALS || qe(u);
}
var v;
(function(u) {
  u[u.EntityStart = 0] = "EntityStart", u[u.NumericStart = 1] = "NumericStart", u[u.NumericDecimal = 2] = "NumericDecimal", u[u.NumericHex = 3] = "NumericHex", u[u.NamedEntity = 4] = "NamedEntity";
})(v || (v = {}));
var H;
(function(u) {
  u[u.Legacy = 0] = "Legacy", u[u.Strict = 1] = "Strict", u[u.Attribute = 2] = "Attribute";
})(H || (H = {}));
class ze {
  constructor(e, t, n) {
    this.decodeTree = e, this.emitCodePoint = t, this.errors = n, this.state = v.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = H.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(e) {
    this.decodeMode = e, this.state = v.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(e, t) {
    switch (this.state) {
      case v.EntityStart:
        return e.charCodeAt(t) === B.NUM ? (this.state = v.NumericStart, this.consumed += 1, this.stateNumericStart(e, t + 1)) : (this.state = v.NamedEntity, this.stateNamedEntity(e, t));
      case v.NumericStart:
        return this.stateNumericStart(e, t);
      case v.NumericDecimal:
        return this.stateNumericDecimal(e, t);
      case v.NumericHex:
        return this.stateNumericHex(e, t);
      case v.NamedEntity:
        return this.stateNamedEntity(e, t);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(e, t) {
    return t >= e.length ? -1 : (e.charCodeAt(t) | Se) === B.LOWER_X ? (this.state = v.NumericHex, this.consumed += 1, this.stateNumericHex(e, t + 1)) : (this.state = v.NumericDecimal, this.stateNumericDecimal(e, t));
  }
  addToNumericResult(e, t, n, r) {
    if (t !== n) {
      const c = n - t;
      this.result = this.result * Math.pow(r, c) + parseInt(e.substr(t, c), r), this.consumed += c;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(e, t) {
    const n = t;
    for (; t < e.length; ) {
      const r = e.charCodeAt(t);
      if (Ru(r) || Te(r))
        t += 1;
      else
        return this.addToNumericResult(e, n, t, 16), this.emitNumericEntity(r, 3);
    }
    return this.addToNumericResult(e, n, t, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(e, t) {
    const n = t;
    for (; t < e.length; ) {
      const r = e.charCodeAt(t);
      if (Ru(r))
        t += 1;
      else
        return this.addToNumericResult(e, n, t, 10), this.emitNumericEntity(r, 2);
    }
    return this.addToNumericResult(e, n, t, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(e, t) {
    var n;
    if (this.consumed <= t)
      return (n = this.errors) === null || n === void 0 || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (e === B.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === H.Strict)
      return 0;
    return this.emitCodePoint(we(this.result), this.consumed), this.errors && (e !== B.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(e, t) {
    const { decodeTree: n } = this;
    let r = n[this.treeIndex], c = (r & Z.VALUE_LENGTH) >> 14;
    for (; t < e.length; t++, this.excess++) {
      const o = e.charCodeAt(t);
      if (this.treeIndex = Ie(n, r, this.treeIndex + Math.max(1, c), o), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === H.Attribute && // We shouldn't have consumed any characters after the entity,
        (c === 0 || // And there should be no invalid characters.
        Me(o)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (r = n[this.treeIndex], c = (r & Z.VALUE_LENGTH) >> 14, c !== 0) {
        if (o === B.SEMI)
          return this.emitNamedEntityData(this.treeIndex, c, this.consumed + this.excess);
        this.decodeMode !== H.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var e;
    const { result: t, decodeTree: n } = this, r = (n[t] & Z.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(t, r, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(e, t, n) {
    const { decodeTree: r } = this;
    return this.emitCodePoint(t === 1 ? r[e] & ~Z.VALUE_LENGTH : r[e + 1], n), t === 3 && this.emitCodePoint(r[e + 2], n), n;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var e;
    switch (this.state) {
      case v.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== H.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      // Otherwise, emit a numeric entity if we have one.
      case v.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case v.NumericHex:
        return this.emitNumericEntity(0, 3);
      case v.NumericStart:
        return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case v.EntityStart:
        return 0;
    }
  }
}
function D0(u) {
  let e = "";
  const t = new ze(u, (n) => e += Be(n));
  return function(r, c) {
    let o = 0, i = 0;
    for (; (i = r.indexOf("&", i)) >= 0; ) {
      e += r.slice(o, i), t.startEntity(c);
      const s = t.write(
        r,
        // Skip the "&"
        i + 1
      );
      if (s < 0) {
        o = i + t.end();
        break;
      }
      o = i + s, i = s === 0 ? o + 1 : o;
    }
    const a = e + r.slice(o);
    return e = "", a;
  };
}
function Ie(u, e, t, n) {
  const r = (e & Z.BRANCH_LENGTH) >> 7, c = e & Z.JUMP_TABLE;
  if (r === 0)
    return c !== 0 && n === c ? t : -1;
  if (c) {
    const a = n - c;
    return a < 0 || a >= r ? -1 : u[t + a] - 1;
  }
  let o = t, i = o + r - 1;
  for (; o <= i; ) {
    const a = o + i >>> 1, s = u[a];
    if (s < n)
      o = a + 1;
    else if (s > n)
      i = a - 1;
    else
      return u[a + r];
  }
  return -1;
}
const Pe = D0(Ae);
D0(Fe);
function y0(u, e = H.Legacy) {
  return Pe(u, e);
}
function Le(u) {
  return Object.prototype.toString.call(u);
}
function Zu(u) {
  return Le(u) === "[object String]";
}
const Re = Object.prototype.hasOwnProperty;
function Oe(u, e) {
  return Re.call(u, e);
}
function Du(u) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
    if (t) {
      if (typeof t != "object")
        throw new TypeError(t + "must be object");
      Object.keys(t).forEach(function(n) {
        u[n] = t[n];
      });
    }
  }), u;
}
function E0(u, e, t) {
  return [].concat(u.slice(0, e), t, u.slice(e + 1));
}
function Vu(u) {
  return !(u >= 55296 && u <= 57343 || u >= 64976 && u <= 65007 || (u & 65535) === 65535 || (u & 65535) === 65534 || u >= 0 && u <= 8 || u === 11 || u >= 14 && u <= 31 || u >= 127 && u <= 159 || u > 1114111);
}
function gu(u) {
  if (u > 65535) {
    u -= 65536;
    const e = 55296 + (u >> 10), t = 56320 + (u & 1023);
    return String.fromCharCode(e, t);
  }
  return String.fromCharCode(u);
}
const A0 = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, Ne = /&([a-z#][a-z0-9]{1,31});/gi, $e = new RegExp(A0.source + "|" + Ne.source, "gi"), Ue = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function je(u, e) {
  if (e.charCodeAt(0) === 35 && Ue.test(e)) {
    const n = e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
    return Vu(n) ? gu(n) : u;
  }
  const t = y0(u);
  return t !== u ? t : u;
}
function He(u) {
  return u.indexOf("\\") < 0 ? u : u.replace(A0, "$1");
}
function nu(u) {
  return u.indexOf("\\") < 0 && u.indexOf("&") < 0 ? u : u.replace($e, function(e, t, n) {
    return t || je(e, n);
  });
}
const Ze = /[&<>"]/, Ve = /[&<>"]/g, Ge = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function We(u) {
  return Ge[u];
}
function G(u) {
  return Ze.test(u) ? u.replace(Ve, We) : u;
}
const Je = /[.?*+^$[\]\\(){}|-]/g;
function Qe(u) {
  return u.replace(Je, "\\$&");
}
function E(u) {
  switch (u) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function iu(u) {
  if (u >= 8192 && u <= 8202)
    return !0;
  switch (u) {
    case 9:
    // \t
    case 10:
    // \n
    case 11:
    // \v
    case 12:
    // \f
    case 13:
    // \r
    case 32:
    case 160:
    case 5760:
    case 8239:
    case 8287:
    case 12288:
      return !0;
  }
  return !1;
}
function au(u) {
  return Hu.test(u) || k0.test(u);
}
function su(u) {
  switch (u) {
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 124:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function yu(u) {
  return u = u.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (u = u.replace(/ẞ/g, "ß")), u.toLowerCase().toUpperCase();
}
const Xe = { mdurl: De, ucmicro: Ee }, Ke = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: E0,
  assign: Du,
  escapeHtml: G,
  escapeRE: Qe,
  fromCodePoint: gu,
  has: Oe,
  isMdAsciiPunct: su,
  isPunctChar: au,
  isSpace: E,
  isString: Zu,
  isValidEntityCode: Vu,
  isWhiteSpace: iu,
  lib: Xe,
  normalizeReference: yu,
  unescapeAll: nu,
  unescapeMd: He
}, Symbol.toStringTag, { value: "Module" }));
function Ye(u, e, t) {
  let n, r, c, o;
  const i = u.posMax, a = u.pos;
  for (u.pos = e + 1, n = 1; u.pos < i; ) {
    if (c = u.src.charCodeAt(u.pos), c === 93 && (n--, n === 0)) {
      r = !0;
      break;
    }
    if (o = u.pos, u.md.inline.skipToken(u), c === 91) {
      if (o === u.pos - 1)
        n++;
      else if (t)
        return u.pos = a, -1;
    }
  }
  let s = -1;
  return r && (s = u.pos), u.pos = a, s;
}
function ut(u, e, t) {
  let n, r = e;
  const c = {
    ok: !1,
    pos: 0,
    str: ""
  };
  if (u.charCodeAt(r) === 60) {
    for (r++; r < t; ) {
      if (n = u.charCodeAt(r), n === 10 || n === 60)
        return c;
      if (n === 62)
        return c.pos = r + 1, c.str = nu(u.slice(e + 1, r)), c.ok = !0, c;
      if (n === 92 && r + 1 < t) {
        r += 2;
        continue;
      }
      r++;
    }
    return c;
  }
  let o = 0;
  for (; r < t && (n = u.charCodeAt(r), !(n === 32 || n < 32 || n === 127)); ) {
    if (n === 92 && r + 1 < t) {
      if (u.charCodeAt(r + 1) === 32)
        break;
      r += 2;
      continue;
    }
    if (n === 40 && (o++, o > 32))
      return c;
    if (n === 41) {
      if (o === 0)
        break;
      o--;
    }
    r++;
  }
  return e === r || o !== 0 || (c.str = nu(u.slice(e, r)), c.pos = r, c.ok = !0), c;
}
function et(u, e, t, n) {
  let r, c = e;
  const o = {
    // if `true`, this is a valid link title
    ok: !1,
    // if `true`, this link can be continued on the next line
    can_continue: !1,
    // if `ok`, it's the position of the first character after the closing marker
    pos: 0,
    // if `ok`, it's the unescaped title
    str: "",
    // expected closing marker character code
    marker: 0
  };
  if (n)
    o.str = n.str, o.marker = n.marker;
  else {
    if (c >= t)
      return o;
    let i = u.charCodeAt(c);
    if (i !== 34 && i !== 39 && i !== 40)
      return o;
    e++, c++, i === 40 && (i = 41), o.marker = i;
  }
  for (; c < t; ) {
    if (r = u.charCodeAt(c), r === o.marker)
      return o.pos = c + 1, o.str += nu(u.slice(e, c)), o.ok = !0, o;
    if (r === 40 && o.marker === 41)
      return o;
    r === 92 && c + 1 < t && c++, c++;
  }
  return o.can_continue = !0, o.str += nu(u.slice(e, c)), o;
}
const tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: ut,
  parseLinkLabel: Ye,
  parseLinkTitle: et
}, Symbol.toStringTag, { value: "Module" })), L = {};
L.code_inline = function(u, e, t, n, r) {
  const c = u[e];
  return "<code" + r.renderAttrs(c) + ">" + G(c.content) + "</code>";
};
L.code_block = function(u, e, t, n, r) {
  const c = u[e];
  return "<pre" + r.renderAttrs(c) + "><code>" + G(u[e].content) + `</code></pre>
`;
};
L.fence = function(u, e, t, n, r) {
  const c = u[e], o = c.info ? nu(c.info).trim() : "";
  let i = "", a = "";
  if (o) {
    const d = o.split(/(\s+)/g);
    i = d[0], a = d.slice(2).join("");
  }
  let s;
  if (t.highlight ? s = t.highlight(c.content, i, a) || G(c.content) : s = G(c.content), s.indexOf("<pre") === 0)
    return s + `
`;
  if (o) {
    const d = c.attrIndex("class"), l = c.attrs ? c.attrs.slice() : [];
    d < 0 ? l.push(["class", t.langPrefix + i]) : (l[d] = l[d].slice(), l[d][1] += " " + t.langPrefix + i);
    const h = {
      attrs: l
    };
    return `<pre><code${r.renderAttrs(h)}>${s}</code></pre>
`;
  }
  return `<pre><code${r.renderAttrs(c)}>${s}</code></pre>
`;
};
L.image = function(u, e, t, n, r) {
  const c = u[e];
  return c.attrs[c.attrIndex("alt")][1] = r.renderInlineAsText(c.children, t, n), r.renderToken(u, e, t);
};
L.hardbreak = function(u, e, t) {
  return t.xhtmlOut ? `<br />
` : `<br>
`;
};
L.softbreak = function(u, e, t) {
  return t.breaks ? t.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
L.text = function(u, e) {
  return G(u[e].content);
};
L.html_block = function(u, e) {
  return u[e].content;
};
L.html_inline = function(u, e) {
  return u[e].content;
};
function ru() {
  this.rules = Du({}, L);
}
ru.prototype.renderAttrs = function(e) {
  let t, n, r;
  if (!e.attrs)
    return "";
  for (r = "", t = 0, n = e.attrs.length; t < n; t++)
    r += " " + G(e.attrs[t][0]) + '="' + G(e.attrs[t][1]) + '"';
  return r;
};
ru.prototype.renderToken = function(e, t, n) {
  const r = e[t];
  let c = "";
  if (r.hidden)
    return "";
  r.block && r.nesting !== -1 && t && e[t - 1].hidden && (c += `
`), c += (r.nesting === -1 ? "</" : "<") + r.tag, c += this.renderAttrs(r), r.nesting === 0 && n.xhtmlOut && (c += " /");
  let o = !1;
  if (r.block && (o = !0, r.nesting === 1 && t + 1 < e.length)) {
    const i = e[t + 1];
    (i.type === "inline" || i.hidden || i.nesting === -1 && i.tag === r.tag) && (o = !1);
  }
  return c += o ? `>
` : ">", c;
};
ru.prototype.renderInline = function(u, e, t) {
  let n = "";
  const r = this.rules;
  for (let c = 0, o = u.length; c < o; c++) {
    const i = u[c].type;
    typeof r[i] < "u" ? n += r[i](u, c, e, t, this) : n += this.renderToken(u, c, e);
  }
  return n;
};
ru.prototype.renderInlineAsText = function(u, e, t) {
  let n = "";
  for (let r = 0, c = u.length; r < c; r++)
    switch (u[r].type) {
      case "text":
        n += u[r].content;
        break;
      case "image":
        n += this.renderInlineAsText(u[r].children, e, t);
        break;
      case "html_inline":
      case "html_block":
        n += u[r].content;
        break;
      case "softbreak":
      case "hardbreak":
        n += `
`;
        break;
    }
  return n;
};
ru.prototype.render = function(u, e, t) {
  let n = "";
  const r = this.rules;
  for (let c = 0, o = u.length; c < o; c++) {
    const i = u[c].type;
    i === "inline" ? n += this.renderInline(u[c].children, e, t) : typeof r[i] < "u" ? n += r[i](u, c, e, t, this) : n += this.renderToken(u, c, e, t);
  }
  return n;
};
function S() {
  this.__rules__ = [], this.__cache__ = null;
}
S.prototype.__find__ = function(u) {
  for (let e = 0; e < this.__rules__.length; e++)
    if (this.__rules__[e].name === u)
      return e;
  return -1;
};
S.prototype.__compile__ = function() {
  const u = this, e = [""];
  u.__rules__.forEach(function(t) {
    t.enabled && t.alt.forEach(function(n) {
      e.indexOf(n) < 0 && e.push(n);
    });
  }), u.__cache__ = {}, e.forEach(function(t) {
    u.__cache__[t] = [], u.__rules__.forEach(function(n) {
      n.enabled && (t && n.alt.indexOf(t) < 0 || u.__cache__[t].push(n.fn));
    });
  });
};
S.prototype.at = function(u, e, t) {
  const n = this.__find__(u), r = t || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + u);
  this.__rules__[n].fn = e, this.__rules__[n].alt = r.alt || [], this.__cache__ = null;
};
S.prototype.before = function(u, e, t, n) {
  const r = this.__find__(u), c = n || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + u);
  this.__rules__.splice(r, 0, {
    name: e,
    enabled: !0,
    fn: t,
    alt: c.alt || []
  }), this.__cache__ = null;
};
S.prototype.after = function(u, e, t, n) {
  const r = this.__find__(u), c = n || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + u);
  this.__rules__.splice(r + 1, 0, {
    name: e,
    enabled: !0,
    fn: t,
    alt: c.alt || []
  }), this.__cache__ = null;
};
S.prototype.push = function(u, e, t) {
  const n = t || {};
  this.__rules__.push({
    name: u,
    enabled: !0,
    fn: e,
    alt: n.alt || []
  }), this.__cache__ = null;
};
S.prototype.enable = function(u, e) {
  Array.isArray(u) || (u = [u]);
  const t = [];
  return u.forEach(function(n) {
    const r = this.__find__(n);
    if (r < 0) {
      if (e)
        return;
      throw new Error("Rules manager: invalid rule name " + n);
    }
    this.__rules__[r].enabled = !0, t.push(n);
  }, this), this.__cache__ = null, t;
};
S.prototype.enableOnly = function(u, e) {
  Array.isArray(u) || (u = [u]), this.__rules__.forEach(function(t) {
    t.enabled = !1;
  }), this.enable(u, e);
};
S.prototype.disable = function(u, e) {
  Array.isArray(u) || (u = [u]);
  const t = [];
  return u.forEach(function(n) {
    const r = this.__find__(n);
    if (r < 0) {
      if (e)
        return;
      throw new Error("Rules manager: invalid rule name " + n);
    }
    this.__rules__[r].enabled = !1, t.push(n);
  }, this), this.__cache__ = null, t;
};
S.prototype.getRules = function(u) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[u] || [];
};
function z(u, e, t) {
  this.type = u, this.tag = e, this.attrs = null, this.map = null, this.nesting = t, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
z.prototype.attrIndex = function(e) {
  if (!this.attrs)
    return -1;
  const t = this.attrs;
  for (let n = 0, r = t.length; n < r; n++)
    if (t[n][0] === e)
      return n;
  return -1;
};
z.prototype.attrPush = function(e) {
  this.attrs ? this.attrs.push(e) : this.attrs = [e];
};
z.prototype.attrSet = function(e, t) {
  const n = this.attrIndex(e), r = [e, t];
  n < 0 ? this.attrPush(r) : this.attrs[n] = r;
};
z.prototype.attrGet = function(e) {
  const t = this.attrIndex(e);
  let n = null;
  return t >= 0 && (n = this.attrs[t][1]), n;
};
z.prototype.attrJoin = function(e, t) {
  const n = this.attrIndex(e);
  n < 0 ? this.attrPush([e, t]) : this.attrs[n][1] = this.attrs[n][1] + " " + t;
};
function F0(u, e, t) {
  this.src = u, this.env = t, this.tokens = [], this.inlineMode = !1, this.md = e;
}
F0.prototype.Token = z;
const nt = /\r\n?|\n/g, rt = /\0/g;
function ct(u) {
  let e;
  e = u.src.replace(nt, `
`), e = e.replace(rt, "�"), u.src = e;
}
function ot(u) {
  let e;
  u.inlineMode ? (e = new u.Token("inline", "", 0), e.content = u.src, e.map = [0, 1], e.children = [], u.tokens.push(e)) : u.md.block.parse(u.src, u.md, u.env, u.tokens);
}
function it(u) {
  const e = u.tokens;
  for (let t = 0, n = e.length; t < n; t++) {
    const r = e[t];
    r.type === "inline" && u.md.inline.parse(r.content, u.md, u.env, r.children);
  }
}
function at(u) {
  return /^<a[>\s]/i.test(u);
}
function st(u) {
  return /^<\/a\s*>/i.test(u);
}
function lt(u) {
  const e = u.tokens;
  if (u.md.options.linkify)
    for (let t = 0, n = e.length; t < n; t++) {
      if (e[t].type !== "inline" || !u.md.linkify.pretest(e[t].content))
        continue;
      let r = e[t].children, c = 0;
      for (let o = r.length - 1; o >= 0; o--) {
        const i = r[o];
        if (i.type === "link_close") {
          for (o--; r[o].level !== i.level && r[o].type !== "link_open"; )
            o--;
          continue;
        }
        if (i.type === "html_inline" && (at(i.content) && c > 0 && c--, st(i.content) && c++), !(c > 0) && i.type === "text" && u.md.linkify.test(i.content)) {
          const a = i.content;
          let s = u.md.linkify.match(a);
          const d = [];
          let l = i.level, h = 0;
          s.length > 0 && s[0].index === 0 && o > 0 && r[o - 1].type === "text_special" && (s = s.slice(1));
          for (let b = 0; b < s.length; b++) {
            const f = s[b].url, g = u.md.normalizeLink(f);
            if (!u.md.validateLink(g))
              continue;
            let k = s[b].text;
            s[b].schema ? s[b].schema === "mailto:" && !/^mailto:/i.test(k) ? k = u.md.normalizeLinkText("mailto:" + k).replace(/^mailto:/, "") : k = u.md.normalizeLinkText(k) : k = u.md.normalizeLinkText("http://" + k).replace(/^http:\/\//, "");
            const D = s[b].index;
            if (D > h) {
              const _ = new u.Token("text", "", 0);
              _.content = a.slice(h, D), _.level = l, d.push(_);
            }
            const p = new u.Token("link_open", "a", 1);
            p.attrs = [["href", g]], p.level = l++, p.markup = "linkify", p.info = "auto", d.push(p);
            const m = new u.Token("text", "", 0);
            m.content = k, m.level = l, d.push(m);
            const x = new u.Token("link_close", "a", -1);
            x.level = --l, x.markup = "linkify", x.info = "auto", d.push(x), h = s[b].lastIndex;
          }
          if (h < a.length) {
            const b = new u.Token("text", "", 0);
            b.content = a.slice(h), b.level = l, d.push(b);
          }
          e[t].children = r = E0(r, o, d);
        }
      }
    }
}
const v0 = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, ft = /\((c|tm|r)\)/i, dt = /\((c|tm|r)\)/ig, bt = {
  c: "©",
  r: "®",
  tm: "™"
};
function ht(u, e) {
  return bt[e.toLowerCase()];
}
function pt(u) {
  let e = 0;
  for (let t = u.length - 1; t >= 0; t--) {
    const n = u[t];
    n.type === "text" && !e && (n.content = n.content.replace(dt, ht)), n.type === "link_open" && n.info === "auto" && e--, n.type === "link_close" && n.info === "auto" && e++;
  }
}
function xt(u) {
  let e = 0;
  for (let t = u.length - 1; t >= 0; t--) {
    const n = u[t];
    n.type === "text" && !e && v0.test(n.content) && (n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), n.type === "link_open" && n.info === "auto" && e--, n.type === "link_close" && n.info === "auto" && e++;
  }
}
function mt(u) {
  let e;
  if (u.md.options.typographer)
    for (e = u.tokens.length - 1; e >= 0; e--)
      u.tokens[e].type === "inline" && (ft.test(u.tokens[e].content) && pt(u.tokens[e].children), v0.test(u.tokens[e].content) && xt(u.tokens[e].children));
}
const _t = /['"]/, c0 = /['"]/g, o0 = "’";
function hu(u, e, t) {
  return u.slice(0, e) + t + u.slice(e + 1);
}
function gt(u, e) {
  let t;
  const n = [];
  for (let r = 0; r < u.length; r++) {
    const c = u[r], o = u[r].level;
    for (t = n.length - 1; t >= 0 && !(n[t].level <= o); t--)
      ;
    if (n.length = t + 1, c.type !== "text")
      continue;
    let i = c.content, a = 0, s = i.length;
    u:
      for (; a < s; ) {
        c0.lastIndex = a;
        const d = c0.exec(i);
        if (!d)
          break;
        let l = !0, h = !0;
        a = d.index + 1;
        const b = d[0] === "'";
        let f = 32;
        if (d.index - 1 >= 0)
          f = i.charCodeAt(d.index - 1);
        else
          for (t = r - 1; t >= 0 && !(u[t].type === "softbreak" || u[t].type === "hardbreak"); t--)
            if (u[t].content) {
              f = u[t].content.charCodeAt(u[t].content.length - 1);
              break;
            }
        let g = 32;
        if (a < s)
          g = i.charCodeAt(a);
        else
          for (t = r + 1; t < u.length && !(u[t].type === "softbreak" || u[t].type === "hardbreak"); t++)
            if (u[t].content) {
              g = u[t].content.charCodeAt(0);
              break;
            }
        const k = su(f) || au(String.fromCharCode(f)), D = su(g) || au(String.fromCharCode(g)), p = iu(f), m = iu(g);
        if (m ? l = !1 : D && (p || k || (l = !1)), p ? h = !1 : k && (m || D || (h = !1)), g === 34 && d[0] === '"' && f >= 48 && f <= 57 && (h = l = !1), l && h && (l = k, h = D), !l && !h) {
          b && (c.content = hu(c.content, d.index, o0));
          continue;
        }
        if (h)
          for (t = n.length - 1; t >= 0; t--) {
            let x = n[t];
            if (n[t].level < o)
              break;
            if (x.single === b && n[t].level === o) {
              x = n[t];
              let _, C;
              b ? (_ = e.md.options.quotes[2], C = e.md.options.quotes[3]) : (_ = e.md.options.quotes[0], C = e.md.options.quotes[1]), c.content = hu(c.content, d.index, C), u[x.token].content = hu(
                u[x.token].content,
                x.pos,
                _
              ), a += C.length - 1, x.token === r && (a += _.length - 1), i = c.content, s = i.length, n.length = t;
              continue u;
            }
          }
        l ? n.push({
          token: r,
          pos: d.index,
          single: b,
          level: o
        }) : h && b && (c.content = hu(c.content, d.index, o0));
      }
  }
}
function kt(u) {
  if (u.md.options.typographer)
    for (let e = u.tokens.length - 1; e >= 0; e--)
      u.tokens[e].type !== "inline" || !_t.test(u.tokens[e].content) || gt(u.tokens[e].children, u);
}
function Ct(u) {
  let e, t;
  const n = u.tokens, r = n.length;
  for (let c = 0; c < r; c++) {
    if (n[c].type !== "inline") continue;
    const o = n[c].children, i = o.length;
    for (e = 0; e < i; e++)
      o[e].type === "text_special" && (o[e].type = "text");
    for (e = t = 0; e < i; e++)
      o[e].type === "text" && e + 1 < i && o[e + 1].type === "text" ? o[e + 1].content = o[e].content + o[e + 1].content : (e !== t && (o[t] = o[e]), t++);
    e !== t && (o.length = t);
  }
}
const wu = [
  ["normalize", ct],
  ["block", ot],
  ["inline", it],
  ["linkify", lt],
  ["replacements", mt],
  ["smartquotes", kt],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", Ct]
];
function Gu() {
  this.ruler = new S();
  for (let u = 0; u < wu.length; u++)
    this.ruler.push(wu[u][0], wu[u][1]);
}
Gu.prototype.process = function(u) {
  const e = this.ruler.getRules("");
  for (let t = 0, n = e.length; t < n; t++)
    e[t](u);
};
Gu.prototype.State = F0;
function R(u, e, t, n) {
  this.src = u, this.md = e, this.env = t, this.tokens = n, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const r = this.src;
  for (let c = 0, o = 0, i = 0, a = 0, s = r.length, d = !1; o < s; o++) {
    const l = r.charCodeAt(o);
    if (!d)
      if (E(l)) {
        i++, l === 9 ? a += 4 - a % 4 : a++;
        continue;
      } else
        d = !0;
    (l === 10 || o === s - 1) && (l !== 10 && o++, this.bMarks.push(c), this.eMarks.push(o), this.tShift.push(i), this.sCount.push(a), this.bsCount.push(0), d = !1, i = 0, a = 0, c = o + 1);
  }
  this.bMarks.push(r.length), this.eMarks.push(r.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
R.prototype.push = function(u, e, t) {
  const n = new z(u, e, t);
  return n.block = !0, t < 0 && this.level--, n.level = this.level, t > 0 && this.level++, this.tokens.push(n), n;
};
R.prototype.isEmpty = function(e) {
  return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
};
R.prototype.skipEmptyLines = function(e) {
  for (let t = this.lineMax; e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++)
    ;
  return e;
};
R.prototype.skipSpaces = function(e) {
  for (let t = this.src.length; e < t; e++) {
    const n = this.src.charCodeAt(e);
    if (!E(n))
      break;
  }
  return e;
};
R.prototype.skipSpacesBack = function(e, t) {
  if (e <= t)
    return e;
  for (; e > t; )
    if (!E(this.src.charCodeAt(--e)))
      return e + 1;
  return e;
};
R.prototype.skipChars = function(e, t) {
  for (let n = this.src.length; e < n && this.src.charCodeAt(e) === t; e++)
    ;
  return e;
};
R.prototype.skipCharsBack = function(e, t, n) {
  if (e <= n)
    return e;
  for (; e > n; )
    if (t !== this.src.charCodeAt(--e))
      return e + 1;
  return e;
};
R.prototype.getLines = function(e, t, n, r) {
  if (e >= t)
    return "";
  const c = new Array(t - e);
  for (let o = 0, i = e; i < t; i++, o++) {
    let a = 0;
    const s = this.bMarks[i];
    let d = s, l;
    for (i + 1 < t || r ? l = this.eMarks[i] + 1 : l = this.eMarks[i]; d < l && a < n; ) {
      const h = this.src.charCodeAt(d);
      if (E(h))
        h === 9 ? a += 4 - (a + this.bsCount[i]) % 4 : a++;
      else if (d - s < this.tShift[i])
        a++;
      else
        break;
      d++;
    }
    a > n ? c[o] = new Array(a - n + 1).join(" ") + this.src.slice(d, l) : c[o] = this.src.slice(d, l);
  }
  return c.join("");
};
R.prototype.Token = z;
const Dt = 65536;
function Su(u, e) {
  const t = u.bMarks[e] + u.tShift[e], n = u.eMarks[e];
  return u.src.slice(t, n);
}
function i0(u) {
  const e = [], t = u.length;
  let n = 0, r = u.charCodeAt(n), c = !1, o = 0, i = "";
  for (; n < t; )
    r === 124 && (c ? (i += u.substring(o, n - 1), o = n) : (e.push(i + u.substring(o, n)), i = "", o = n + 1)), c = r === 92, n++, r = u.charCodeAt(n);
  return e.push(i + u.substring(o)), e;
}
function yt(u, e, t, n) {
  if (e + 2 > t)
    return !1;
  let r = e + 1;
  if (u.sCount[r] < u.blkIndent || u.sCount[r] - u.blkIndent >= 4)
    return !1;
  let c = u.bMarks[r] + u.tShift[r];
  if (c >= u.eMarks[r])
    return !1;
  const o = u.src.charCodeAt(c++);
  if (o !== 124 && o !== 45 && o !== 58 || c >= u.eMarks[r])
    return !1;
  const i = u.src.charCodeAt(c++);
  if (i !== 124 && i !== 45 && i !== 58 && !E(i) || o === 45 && E(i))
    return !1;
  for (; c < u.eMarks[r]; ) {
    const x = u.src.charCodeAt(c);
    if (x !== 124 && x !== 45 && x !== 58 && !E(x))
      return !1;
    c++;
  }
  let a = Su(u, e + 1), s = a.split("|");
  const d = [];
  for (let x = 0; x < s.length; x++) {
    const _ = s[x].trim();
    if (!_) {
      if (x === 0 || x === s.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(_))
      return !1;
    _.charCodeAt(_.length - 1) === 58 ? d.push(_.charCodeAt(0) === 58 ? "center" : "right") : _.charCodeAt(0) === 58 ? d.push("left") : d.push("");
  }
  if (a = Su(u, e).trim(), a.indexOf("|") === -1 || u.sCount[e] - u.blkIndent >= 4)
    return !1;
  s = i0(a), s.length && s[0] === "" && s.shift(), s.length && s[s.length - 1] === "" && s.pop();
  const l = s.length;
  if (l === 0 || l !== d.length)
    return !1;
  if (n)
    return !0;
  const h = u.parentType;
  u.parentType = "table";
  const b = u.md.block.ruler.getRules("blockquote"), f = u.push("table_open", "table", 1), g = [e, 0];
  f.map = g;
  const k = u.push("thead_open", "thead", 1);
  k.map = [e, e + 1];
  const D = u.push("tr_open", "tr", 1);
  D.map = [e, e + 1];
  for (let x = 0; x < s.length; x++) {
    const _ = u.push("th_open", "th", 1);
    d[x] && (_.attrs = [["style", "text-align:" + d[x]]]);
    const C = u.push("inline", "", 0);
    C.content = s[x].trim(), C.children = [], u.push("th_close", "th", -1);
  }
  u.push("tr_close", "tr", -1), u.push("thead_close", "thead", -1);
  let p, m = 0;
  for (r = e + 2; r < t && !(u.sCount[r] < u.blkIndent); r++) {
    let x = !1;
    for (let C = 0, w = b.length; C < w; C++)
      if (b[C](u, r, t, !0)) {
        x = !0;
        break;
      }
    if (x || (a = Su(u, r).trim(), !a) || u.sCount[r] - u.blkIndent >= 4 || (s = i0(a), s.length && s[0] === "" && s.shift(), s.length && s[s.length - 1] === "" && s.pop(), m += l - s.length, m > Dt))
      break;
    if (r === e + 2) {
      const C = u.push("tbody_open", "tbody", 1);
      C.map = p = [e + 2, 0];
    }
    const _ = u.push("tr_open", "tr", 1);
    _.map = [r, r + 1];
    for (let C = 0; C < l; C++) {
      const w = u.push("td_open", "td", 1);
      d[C] && (w.attrs = [["style", "text-align:" + d[C]]]);
      const M = u.push("inline", "", 0);
      M.content = s[C] ? s[C].trim() : "", M.children = [], u.push("td_close", "td", -1);
    }
    u.push("tr_close", "tr", -1);
  }
  return p && (u.push("tbody_close", "tbody", -1), p[1] = r), u.push("table_close", "table", -1), g[1] = r, u.parentType = h, u.line = r, !0;
}
function Et(u, e, t) {
  if (u.sCount[e] - u.blkIndent < 4)
    return !1;
  let n = e + 1, r = n;
  for (; n < t; ) {
    if (u.isEmpty(n)) {
      n++;
      continue;
    }
    if (u.sCount[n] - u.blkIndent >= 4) {
      n++, r = n;
      continue;
    }
    break;
  }
  u.line = r;
  const c = u.push("code_block", "code", 0);
  return c.content = u.getLines(e, r, 4 + u.blkIndent, !1) + `
`, c.map = [e, u.line], !0;
}
function At(u, e, t, n) {
  let r = u.bMarks[e] + u.tShift[e], c = u.eMarks[e];
  if (u.sCount[e] - u.blkIndent >= 4 || r + 3 > c)
    return !1;
  const o = u.src.charCodeAt(r);
  if (o !== 126 && o !== 96)
    return !1;
  let i = r;
  r = u.skipChars(r, o);
  let a = r - i;
  if (a < 3)
    return !1;
  const s = u.src.slice(i, r), d = u.src.slice(r, c);
  if (o === 96 && d.indexOf(String.fromCharCode(o)) >= 0)
    return !1;
  if (n)
    return !0;
  let l = e, h = !1;
  for (; l++, !(l >= t || (r = i = u.bMarks[l] + u.tShift[l], c = u.eMarks[l], r < c && u.sCount[l] < u.blkIndent)); )
    if (u.src.charCodeAt(r) === o && !(u.sCount[l] - u.blkIndent >= 4) && (r = u.skipChars(r, o), !(r - i < a) && (r = u.skipSpaces(r), !(r < c)))) {
      h = !0;
      break;
    }
  a = u.sCount[e], u.line = l + (h ? 1 : 0);
  const b = u.push("fence", "code", 0);
  return b.info = d, b.content = u.getLines(e + 1, l, a, !0), b.markup = s, b.map = [e, u.line], !0;
}
function Ft(u, e, t, n) {
  let r = u.bMarks[e] + u.tShift[e], c = u.eMarks[e];
  const o = u.lineMax;
  if (u.sCount[e] - u.blkIndent >= 4 || u.src.charCodeAt(r) !== 62)
    return !1;
  if (n)
    return !0;
  const i = [], a = [], s = [], d = [], l = u.md.block.ruler.getRules("blockquote"), h = u.parentType;
  u.parentType = "blockquote";
  let b = !1, f;
  for (f = e; f < t; f++) {
    const m = u.sCount[f] < u.blkIndent;
    if (r = u.bMarks[f] + u.tShift[f], c = u.eMarks[f], r >= c)
      break;
    if (u.src.charCodeAt(r++) === 62 && !m) {
      let _ = u.sCount[f] + 1, C, w;
      u.src.charCodeAt(r) === 32 ? (r++, _++, w = !1, C = !0) : u.src.charCodeAt(r) === 9 ? (C = !0, (u.bsCount[f] + _) % 4 === 3 ? (r++, _++, w = !1) : w = !0) : C = !1;
      let M = _;
      for (i.push(u.bMarks[f]), u.bMarks[f] = r; r < c; ) {
        const U = u.src.charCodeAt(r);
        if (E(U))
          U === 9 ? M += 4 - (M + u.bsCount[f] + (w ? 1 : 0)) % 4 : M++;
        else
          break;
        r++;
      }
      b = r >= c, a.push(u.bsCount[f]), u.bsCount[f] = u.sCount[f] + 1 + (C ? 1 : 0), s.push(u.sCount[f]), u.sCount[f] = M - _, d.push(u.tShift[f]), u.tShift[f] = r - u.bMarks[f];
      continue;
    }
    if (b)
      break;
    let x = !1;
    for (let _ = 0, C = l.length; _ < C; _++)
      if (l[_](u, f, t, !0)) {
        x = !0;
        break;
      }
    if (x) {
      u.lineMax = f, u.blkIndent !== 0 && (i.push(u.bMarks[f]), a.push(u.bsCount[f]), d.push(u.tShift[f]), s.push(u.sCount[f]), u.sCount[f] -= u.blkIndent);
      break;
    }
    i.push(u.bMarks[f]), a.push(u.bsCount[f]), d.push(u.tShift[f]), s.push(u.sCount[f]), u.sCount[f] = -1;
  }
  const g = u.blkIndent;
  u.blkIndent = 0;
  const k = u.push("blockquote_open", "blockquote", 1);
  k.markup = ">";
  const D = [e, 0];
  k.map = D, u.md.block.tokenize(u, e, f);
  const p = u.push("blockquote_close", "blockquote", -1);
  p.markup = ">", u.lineMax = o, u.parentType = h, D[1] = u.line;
  for (let m = 0; m < d.length; m++)
    u.bMarks[m + e] = i[m], u.tShift[m + e] = d[m], u.sCount[m + e] = s[m], u.bsCount[m + e] = a[m];
  return u.blkIndent = g, !0;
}
function vt(u, e, t, n) {
  const r = u.eMarks[e];
  if (u.sCount[e] - u.blkIndent >= 4)
    return !1;
  let c = u.bMarks[e] + u.tShift[e];
  const o = u.src.charCodeAt(c++);
  if (o !== 42 && o !== 45 && o !== 95)
    return !1;
  let i = 1;
  for (; c < r; ) {
    const s = u.src.charCodeAt(c++);
    if (s !== o && !E(s))
      return !1;
    s === o && i++;
  }
  if (i < 3)
    return !1;
  if (n)
    return !0;
  u.line = e + 1;
  const a = u.push("hr", "hr", 0);
  return a.map = [e, u.line], a.markup = Array(i + 1).join(String.fromCharCode(o)), !0;
}
function a0(u, e) {
  const t = u.eMarks[e];
  let n = u.bMarks[e] + u.tShift[e];
  const r = u.src.charCodeAt(n++);
  if (r !== 42 && r !== 45 && r !== 43)
    return -1;
  if (n < t) {
    const c = u.src.charCodeAt(n);
    if (!E(c))
      return -1;
  }
  return n;
}
function s0(u, e) {
  const t = u.bMarks[e] + u.tShift[e], n = u.eMarks[e];
  let r = t;
  if (r + 1 >= n)
    return -1;
  let c = u.src.charCodeAt(r++);
  if (c < 48 || c > 57)
    return -1;
  for (; ; ) {
    if (r >= n)
      return -1;
    if (c = u.src.charCodeAt(r++), c >= 48 && c <= 57) {
      if (r - t >= 10)
        return -1;
      continue;
    }
    if (c === 41 || c === 46)
      break;
    return -1;
  }
  return r < n && (c = u.src.charCodeAt(r), !E(c)) ? -1 : r;
}
function Bt(u, e) {
  const t = u.level + 2;
  for (let n = e + 2, r = u.tokens.length - 2; n < r; n++)
    u.tokens[n].level === t && u.tokens[n].type === "paragraph_open" && (u.tokens[n + 2].hidden = !0, u.tokens[n].hidden = !0, n += 2);
}
function wt(u, e, t, n) {
  let r, c, o, i, a = e, s = !0;
  if (u.sCount[a] - u.blkIndent >= 4 || u.listIndent >= 0 && u.sCount[a] - u.listIndent >= 4 && u.sCount[a] < u.blkIndent)
    return !1;
  let d = !1;
  n && u.parentType === "paragraph" && u.sCount[a] >= u.blkIndent && (d = !0);
  let l, h, b;
  if ((b = s0(u, a)) >= 0) {
    if (l = !0, o = u.bMarks[a] + u.tShift[a], h = Number(u.src.slice(o, b - 1)), d && h !== 1) return !1;
  } else if ((b = a0(u, a)) >= 0)
    l = !1;
  else
    return !1;
  if (d && u.skipSpaces(b) >= u.eMarks[a])
    return !1;
  if (n)
    return !0;
  const f = u.src.charCodeAt(b - 1), g = u.tokens.length;
  l ? (i = u.push("ordered_list_open", "ol", 1), h !== 1 && (i.attrs = [["start", h]])) : i = u.push("bullet_list_open", "ul", 1);
  const k = [a, 0];
  i.map = k, i.markup = String.fromCharCode(f);
  let D = !1;
  const p = u.md.block.ruler.getRules("list"), m = u.parentType;
  for (u.parentType = "list"; a < t; ) {
    c = b, r = u.eMarks[a];
    const x = u.sCount[a] + b - (u.bMarks[a] + u.tShift[a]);
    let _ = x;
    for (; c < r; ) {
      const W = u.src.charCodeAt(c);
      if (W === 9)
        _ += 4 - (_ + u.bsCount[a]) % 4;
      else if (W === 32)
        _++;
      else
        break;
      c++;
    }
    const C = c;
    let w;
    C >= r ? w = 1 : w = _ - x, w > 4 && (w = 1);
    const M = x + w;
    i = u.push("list_item_open", "li", 1), i.markup = String.fromCharCode(f);
    const U = [a, 0];
    i.map = U, l && (i.info = u.src.slice(o, b - 1));
    const cu = u.tight, Fu = u.tShift[a], j0 = u.sCount[a], H0 = u.listIndent;
    if (u.listIndent = u.blkIndent, u.blkIndent = M, u.tight = !0, u.tShift[a] = C - u.bMarks[a], u.sCount[a] = _, C >= r && u.isEmpty(a + 1) ? u.line = Math.min(u.line + 2, t) : u.md.block.tokenize(u, a, t, !0), (!u.tight || D) && (s = !1), D = u.line - a > 1 && u.isEmpty(u.line - 1), u.blkIndent = u.listIndent, u.listIndent = H0, u.tShift[a] = Fu, u.sCount[a] = j0, u.tight = cu, i = u.push("list_item_close", "li", -1), i.markup = String.fromCharCode(f), a = u.line, U[1] = a, a >= t || u.sCount[a] < u.blkIndent || u.sCount[a] - u.blkIndent >= 4)
      break;
    let Qu = !1;
    for (let W = 0, Z0 = p.length; W < Z0; W++)
      if (p[W](u, a, t, !0)) {
        Qu = !0;
        break;
      }
    if (Qu)
      break;
    if (l) {
      if (b = s0(u, a), b < 0)
        break;
      o = u.bMarks[a] + u.tShift[a];
    } else if (b = a0(u, a), b < 0)
      break;
    if (f !== u.src.charCodeAt(b - 1))
      break;
  }
  return l ? i = u.push("ordered_list_close", "ol", -1) : i = u.push("bullet_list_close", "ul", -1), i.markup = String.fromCharCode(f), k[1] = a, u.line = a, u.parentType = m, s && Bt(u, g), !0;
}
function St(u, e, t, n) {
  let r = u.bMarks[e] + u.tShift[e], c = u.eMarks[e], o = e + 1;
  if (u.sCount[e] - u.blkIndent >= 4 || u.src.charCodeAt(r) !== 91)
    return !1;
  function i(p) {
    const m = u.lineMax;
    if (p >= m || u.isEmpty(p))
      return null;
    let x = !1;
    if (u.sCount[p] - u.blkIndent > 3 && (x = !0), u.sCount[p] < 0 && (x = !0), !x) {
      const w = u.md.block.ruler.getRules("reference"), M = u.parentType;
      u.parentType = "reference";
      let U = !1;
      for (let cu = 0, Fu = w.length; cu < Fu; cu++)
        if (w[cu](u, p, m, !0)) {
          U = !0;
          break;
        }
      if (u.parentType = M, U)
        return null;
    }
    const _ = u.bMarks[p] + u.tShift[p], C = u.eMarks[p];
    return u.src.slice(_, C + 1);
  }
  let a = u.src.slice(r, c + 1);
  c = a.length;
  let s = -1;
  for (r = 1; r < c; r++) {
    const p = a.charCodeAt(r);
    if (p === 91)
      return !1;
    if (p === 93) {
      s = r;
      break;
    } else if (p === 10) {
      const m = i(o);
      m !== null && (a += m, c = a.length, o++);
    } else if (p === 92 && (r++, r < c && a.charCodeAt(r) === 10)) {
      const m = i(o);
      m !== null && (a += m, c = a.length, o++);
    }
  }
  if (s < 0 || a.charCodeAt(s + 1) !== 58)
    return !1;
  for (r = s + 2; r < c; r++) {
    const p = a.charCodeAt(r);
    if (p === 10) {
      const m = i(o);
      m !== null && (a += m, c = a.length, o++);
    } else if (!E(p)) break;
  }
  const d = u.md.helpers.parseLinkDestination(a, r, c);
  if (!d.ok)
    return !1;
  const l = u.md.normalizeLink(d.str);
  if (!u.md.validateLink(l))
    return !1;
  r = d.pos;
  const h = r, b = o, f = r;
  for (; r < c; r++) {
    const p = a.charCodeAt(r);
    if (p === 10) {
      const m = i(o);
      m !== null && (a += m, c = a.length, o++);
    } else if (!E(p)) break;
  }
  let g = u.md.helpers.parseLinkTitle(a, r, c);
  for (; g.can_continue; ) {
    const p = i(o);
    if (p === null) break;
    a += p, r = c, c = a.length, o++, g = u.md.helpers.parseLinkTitle(a, r, c, g);
  }
  let k;
  for (r < c && f !== r && g.ok ? (k = g.str, r = g.pos) : (k = "", r = h, o = b); r < c; ) {
    const p = a.charCodeAt(r);
    if (!E(p))
      break;
    r++;
  }
  if (r < c && a.charCodeAt(r) !== 10 && k)
    for (k = "", r = h, o = b; r < c; ) {
      const p = a.charCodeAt(r);
      if (!E(p))
        break;
      r++;
    }
  if (r < c && a.charCodeAt(r) !== 10)
    return !1;
  const D = yu(a.slice(1, s));
  return D ? (n || (typeof u.env.references > "u" && (u.env.references = {}), typeof u.env.references[D] > "u" && (u.env.references[D] = { title: k, href: l }), u.line = o), !0) : !1;
}
const Tt = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], qt = "[a-zA-Z_:][a-zA-Z0-9:._-]*", Mt = "[^\"'=<>`\\x00-\\x20]+", zt = "'[^']*'", It = '"[^"]*"', Pt = "(?:" + Mt + "|" + zt + "|" + It + ")", Lt = "(?:\\s+" + qt + "(?:\\s*=\\s*" + Pt + ")?)", B0 = "<[A-Za-z][A-Za-z0-9\\-]*" + Lt + "*\\s*\\/?>", w0 = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", Rt = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", Ot = "<[?][\\s\\S]*?[?]>", Nt = "<![A-Za-z][^>]*>", $t = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", Ut = new RegExp("^(?:" + B0 + "|" + w0 + "|" + Rt + "|" + Ot + "|" + Nt + "|" + $t + ")"), jt = new RegExp("^(?:" + B0 + "|" + w0 + ")"), Q = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + Tt.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(jt.source + "\\s*$"), /^$/, !1]
];
function Ht(u, e, t, n) {
  let r = u.bMarks[e] + u.tShift[e], c = u.eMarks[e];
  if (u.sCount[e] - u.blkIndent >= 4 || !u.md.options.html || u.src.charCodeAt(r) !== 60)
    return !1;
  let o = u.src.slice(r, c), i = 0;
  for (; i < Q.length && !Q[i][0].test(o); i++)
    ;
  if (i === Q.length)
    return !1;
  if (n)
    return Q[i][2];
  let a = e + 1;
  if (!Q[i][1].test(o)) {
    for (; a < t && !(u.sCount[a] < u.blkIndent); a++)
      if (r = u.bMarks[a] + u.tShift[a], c = u.eMarks[a], o = u.src.slice(r, c), Q[i][1].test(o)) {
        o.length !== 0 && a++;
        break;
      }
  }
  u.line = a;
  const s = u.push("html_block", "", 0);
  return s.map = [e, a], s.content = u.getLines(e, a, u.blkIndent, !0), !0;
}
function Zt(u, e, t, n) {
  let r = u.bMarks[e] + u.tShift[e], c = u.eMarks[e];
  if (u.sCount[e] - u.blkIndent >= 4)
    return !1;
  let o = u.src.charCodeAt(r);
  if (o !== 35 || r >= c)
    return !1;
  let i = 1;
  for (o = u.src.charCodeAt(++r); o === 35 && r < c && i <= 6; )
    i++, o = u.src.charCodeAt(++r);
  if (i > 6 || r < c && !E(o))
    return !1;
  if (n)
    return !0;
  c = u.skipSpacesBack(c, r);
  const a = u.skipCharsBack(c, 35, r);
  a > r && E(u.src.charCodeAt(a - 1)) && (c = a), u.line = e + 1;
  const s = u.push("heading_open", "h" + String(i), 1);
  s.markup = "########".slice(0, i), s.map = [e, u.line];
  const d = u.push("inline", "", 0);
  d.content = u.src.slice(r, c).trim(), d.map = [e, u.line], d.children = [];
  const l = u.push("heading_close", "h" + String(i), -1);
  return l.markup = "########".slice(0, i), !0;
}
function Vt(u, e, t) {
  const n = u.md.block.ruler.getRules("paragraph");
  if (u.sCount[e] - u.blkIndent >= 4)
    return !1;
  const r = u.parentType;
  u.parentType = "paragraph";
  let c = 0, o, i = e + 1;
  for (; i < t && !u.isEmpty(i); i++) {
    if (u.sCount[i] - u.blkIndent > 3)
      continue;
    if (u.sCount[i] >= u.blkIndent) {
      let b = u.bMarks[i] + u.tShift[i];
      const f = u.eMarks[i];
      if (b < f && (o = u.src.charCodeAt(b), (o === 45 || o === 61) && (b = u.skipChars(b, o), b = u.skipSpaces(b), b >= f))) {
        c = o === 61 ? 1 : 2;
        break;
      }
    }
    if (u.sCount[i] < 0)
      continue;
    let h = !1;
    for (let b = 0, f = n.length; b < f; b++)
      if (n[b](u, i, t, !0)) {
        h = !0;
        break;
      }
    if (h)
      break;
  }
  if (!c)
    return !1;
  const a = u.getLines(e, i, u.blkIndent, !1).trim();
  u.line = i + 1;
  const s = u.push("heading_open", "h" + String(c), 1);
  s.markup = String.fromCharCode(o), s.map = [e, u.line];
  const d = u.push("inline", "", 0);
  d.content = a, d.map = [e, u.line - 1], d.children = [];
  const l = u.push("heading_close", "h" + String(c), -1);
  return l.markup = String.fromCharCode(o), u.parentType = r, !0;
}
function Gt(u, e, t) {
  const n = u.md.block.ruler.getRules("paragraph"), r = u.parentType;
  let c = e + 1;
  for (u.parentType = "paragraph"; c < t && !u.isEmpty(c); c++) {
    if (u.sCount[c] - u.blkIndent > 3 || u.sCount[c] < 0)
      continue;
    let s = !1;
    for (let d = 0, l = n.length; d < l; d++)
      if (n[d](u, c, t, !0)) {
        s = !0;
        break;
      }
    if (s)
      break;
  }
  const o = u.getLines(e, c, u.blkIndent, !1).trim();
  u.line = c;
  const i = u.push("paragraph_open", "p", 1);
  i.map = [e, u.line];
  const a = u.push("inline", "", 0);
  return a.content = o, a.map = [e, u.line], a.children = [], u.push("paragraph_close", "p", -1), u.parentType = r, !0;
}
const pu = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", yt, ["paragraph", "reference"]],
  ["code", Et],
  ["fence", At, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", Ft, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", vt, ["paragraph", "reference", "blockquote", "list"]],
  ["list", wt, ["paragraph", "reference", "blockquote"]],
  ["reference", St],
  ["html_block", Ht, ["paragraph", "reference", "blockquote"]],
  ["heading", Zt, ["paragraph", "reference", "blockquote"]],
  ["lheading", Vt],
  ["paragraph", Gt]
];
function Eu() {
  this.ruler = new S();
  for (let u = 0; u < pu.length; u++)
    this.ruler.push(pu[u][0], pu[u][1], { alt: (pu[u][2] || []).slice() });
}
Eu.prototype.tokenize = function(u, e, t) {
  const n = this.ruler.getRules(""), r = n.length, c = u.md.options.maxNesting;
  let o = e, i = !1;
  for (; o < t && (u.line = o = u.skipEmptyLines(o), !(o >= t || u.sCount[o] < u.blkIndent)); ) {
    if (u.level >= c) {
      u.line = t;
      break;
    }
    const a = u.line;
    let s = !1;
    for (let d = 0; d < r; d++)
      if (s = n[d](u, o, t, !1), s) {
        if (a >= u.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!s) throw new Error("none of the block rules matched");
    u.tight = !i, u.isEmpty(u.line - 1) && (i = !0), o = u.line, o < t && u.isEmpty(o) && (i = !0, o++, u.line = o);
  }
};
Eu.prototype.parse = function(u, e, t, n) {
  if (!u)
    return;
  const r = new this.State(u, e, t, n);
  this.tokenize(r, r.line, r.lineMax);
};
Eu.prototype.State = R;
function du(u, e, t, n) {
  this.src = u, this.env = t, this.md = e, this.tokens = n, this.tokens_meta = Array(n.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
du.prototype.pushPending = function() {
  const u = new z("text", "", 0);
  return u.content = this.pending, u.level = this.pendingLevel, this.tokens.push(u), this.pending = "", u;
};
du.prototype.push = function(u, e, t) {
  this.pending && this.pushPending();
  const n = new z(u, e, t);
  let r = null;
  return t < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), n.level = this.level, t > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], r = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(n), this.tokens_meta.push(r), n;
};
du.prototype.scanDelims = function(u, e) {
  const t = this.posMax, n = this.src.charCodeAt(u), r = u > 0 ? this.src.charCodeAt(u - 1) : 32;
  let c = u;
  for (; c < t && this.src.charCodeAt(c) === n; )
    c++;
  const o = c - u, i = c < t ? this.src.charCodeAt(c) : 32, a = su(r) || au(String.fromCharCode(r)), s = su(i) || au(String.fromCharCode(i)), d = iu(r), l = iu(i), h = !l && (!s || d || a), b = !d && (!a || l || s);
  return { can_open: h && (e || !b || a), can_close: b && (e || !h || s), length: o };
};
du.prototype.Token = z;
function Wt(u) {
  switch (u) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function Jt(u, e) {
  let t = u.pos;
  for (; t < u.posMax && !Wt(u.src.charCodeAt(t)); )
    t++;
  return t === u.pos ? !1 : (e || (u.pending += u.src.slice(u.pos, t)), u.pos = t, !0);
}
const Qt = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function Xt(u, e) {
  if (!u.md.options.linkify || u.linkLevel > 0) return !1;
  const t = u.pos, n = u.posMax;
  if (t + 3 > n || u.src.charCodeAt(t) !== 58 || u.src.charCodeAt(t + 1) !== 47 || u.src.charCodeAt(t + 2) !== 47) return !1;
  const r = u.pending.match(Qt);
  if (!r) return !1;
  const c = r[1], o = u.md.linkify.matchAtStart(u.src.slice(t - c.length));
  if (!o) return !1;
  let i = o.url;
  if (i.length <= c.length) return !1;
  i = i.replace(/\*+$/, "");
  const a = u.md.normalizeLink(i);
  if (!u.md.validateLink(a)) return !1;
  if (!e) {
    u.pending = u.pending.slice(0, -c.length);
    const s = u.push("link_open", "a", 1);
    s.attrs = [["href", a]], s.markup = "linkify", s.info = "auto";
    const d = u.push("text", "", 0);
    d.content = u.md.normalizeLinkText(i);
    const l = u.push("link_close", "a", -1);
    l.markup = "linkify", l.info = "auto";
  }
  return u.pos += i.length - c.length, !0;
}
function Kt(u, e) {
  let t = u.pos;
  if (u.src.charCodeAt(t) !== 10)
    return !1;
  const n = u.pending.length - 1, r = u.posMax;
  if (!e)
    if (n >= 0 && u.pending.charCodeAt(n) === 32)
      if (n >= 1 && u.pending.charCodeAt(n - 1) === 32) {
        let c = n - 1;
        for (; c >= 1 && u.pending.charCodeAt(c - 1) === 32; ) c--;
        u.pending = u.pending.slice(0, c), u.push("hardbreak", "br", 0);
      } else
        u.pending = u.pending.slice(0, -1), u.push("softbreak", "br", 0);
    else
      u.push("softbreak", "br", 0);
  for (t++; t < r && E(u.src.charCodeAt(t)); )
    t++;
  return u.pos = t, !0;
}
const Wu = [];
for (let u = 0; u < 256; u++)
  Wu.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(u) {
  Wu[u.charCodeAt(0)] = 1;
});
function Yt(u, e) {
  let t = u.pos;
  const n = u.posMax;
  if (u.src.charCodeAt(t) !== 92 || (t++, t >= n)) return !1;
  let r = u.src.charCodeAt(t);
  if (r === 10) {
    for (e || u.push("hardbreak", "br", 0), t++; t < n && (r = u.src.charCodeAt(t), !!E(r)); )
      t++;
    return u.pos = t, !0;
  }
  let c = u.src[t];
  if (r >= 55296 && r <= 56319 && t + 1 < n) {
    const i = u.src.charCodeAt(t + 1);
    i >= 56320 && i <= 57343 && (c += u.src[t + 1], t++);
  }
  const o = "\\" + c;
  if (!e) {
    const i = u.push("text_special", "", 0);
    r < 256 && Wu[r] !== 0 ? i.content = c : i.content = o, i.markup = o, i.info = "escape";
  }
  return u.pos = t + 1, !0;
}
function un(u, e) {
  let t = u.pos;
  if (u.src.charCodeAt(t) !== 96)
    return !1;
  const r = t;
  t++;
  const c = u.posMax;
  for (; t < c && u.src.charCodeAt(t) === 96; )
    t++;
  const o = u.src.slice(r, t), i = o.length;
  if (u.backticksScanned && (u.backticks[i] || 0) <= r)
    return e || (u.pending += o), u.pos += i, !0;
  let a = t, s;
  for (; (s = u.src.indexOf("`", a)) !== -1; ) {
    for (a = s + 1; a < c && u.src.charCodeAt(a) === 96; )
      a++;
    const d = a - s;
    if (d === i) {
      if (!e) {
        const l = u.push("code_inline", "code", 0);
        l.markup = o, l.content = u.src.slice(t, s).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      return u.pos = a, !0;
    }
    u.backticks[d] = s;
  }
  return u.backticksScanned = !0, e || (u.pending += o), u.pos += i, !0;
}
function en(u, e) {
  const t = u.pos, n = u.src.charCodeAt(t);
  if (e || n !== 126)
    return !1;
  const r = u.scanDelims(u.pos, !0);
  let c = r.length;
  const o = String.fromCharCode(n);
  if (c < 2)
    return !1;
  let i;
  c % 2 && (i = u.push("text", "", 0), i.content = o, c--);
  for (let a = 0; a < c; a += 2)
    i = u.push("text", "", 0), i.content = o + o, u.delimiters.push({
      marker: n,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: u.tokens.length - 1,
      end: -1,
      open: r.can_open,
      close: r.can_close
    });
  return u.pos += r.length, !0;
}
function l0(u, e) {
  let t;
  const n = [], r = e.length;
  for (let c = 0; c < r; c++) {
    const o = e[c];
    if (o.marker !== 126 || o.end === -1)
      continue;
    const i = e[o.end];
    t = u.tokens[o.token], t.type = "s_open", t.tag = "s", t.nesting = 1, t.markup = "~~", t.content = "", t = u.tokens[i.token], t.type = "s_close", t.tag = "s", t.nesting = -1, t.markup = "~~", t.content = "", u.tokens[i.token - 1].type === "text" && u.tokens[i.token - 1].content === "~" && n.push(i.token - 1);
  }
  for (; n.length; ) {
    const c = n.pop();
    let o = c + 1;
    for (; o < u.tokens.length && u.tokens[o].type === "s_close"; )
      o++;
    o--, c !== o && (t = u.tokens[o], u.tokens[o] = u.tokens[c], u.tokens[c] = t);
  }
}
function tn(u) {
  const e = u.tokens_meta, t = u.tokens_meta.length;
  l0(u, u.delimiters);
  for (let n = 0; n < t; n++)
    e[n] && e[n].delimiters && l0(u, e[n].delimiters);
}
const S0 = {
  tokenize: en,
  postProcess: tn
};
function nn(u, e) {
  const t = u.pos, n = u.src.charCodeAt(t);
  if (e || n !== 95 && n !== 42)
    return !1;
  const r = u.scanDelims(u.pos, n === 42);
  for (let c = 0; c < r.length; c++) {
    const o = u.push("text", "", 0);
    o.content = String.fromCharCode(n), u.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: n,
      // Total length of these series of delimiters.
      //
      length: r.length,
      // A position of the token this delimiter corresponds to.
      //
      token: u.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: r.can_open,
      close: r.can_close
    });
  }
  return u.pos += r.length, !0;
}
function f0(u, e) {
  const t = e.length;
  for (let n = t - 1; n >= 0; n--) {
    const r = e[n];
    if (r.marker !== 95 && r.marker !== 42 || r.end === -1)
      continue;
    const c = e[r.end], o = n > 0 && e[n - 1].end === r.end + 1 && // check that first two markers match and adjacent
    e[n - 1].marker === r.marker && e[n - 1].token === r.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    e[r.end + 1].token === c.token + 1, i = String.fromCharCode(r.marker), a = u.tokens[r.token];
    a.type = o ? "strong_open" : "em_open", a.tag = o ? "strong" : "em", a.nesting = 1, a.markup = o ? i + i : i, a.content = "";
    const s = u.tokens[c.token];
    s.type = o ? "strong_close" : "em_close", s.tag = o ? "strong" : "em", s.nesting = -1, s.markup = o ? i + i : i, s.content = "", o && (u.tokens[e[n - 1].token].content = "", u.tokens[e[r.end + 1].token].content = "", n--);
  }
}
function rn(u) {
  const e = u.tokens_meta, t = u.tokens_meta.length;
  f0(u, u.delimiters);
  for (let n = 0; n < t; n++)
    e[n] && e[n].delimiters && f0(u, e[n].delimiters);
}
const T0 = {
  tokenize: nn,
  postProcess: rn
};
function cn(u, e) {
  let t, n, r, c, o = "", i = "", a = u.pos, s = !0;
  if (u.src.charCodeAt(u.pos) !== 91)
    return !1;
  const d = u.pos, l = u.posMax, h = u.pos + 1, b = u.md.helpers.parseLinkLabel(u, u.pos, !0);
  if (b < 0)
    return !1;
  let f = b + 1;
  if (f < l && u.src.charCodeAt(f) === 40) {
    for (s = !1, f++; f < l && (t = u.src.charCodeAt(f), !(!E(t) && t !== 10)); f++)
      ;
    if (f >= l)
      return !1;
    if (a = f, r = u.md.helpers.parseLinkDestination(u.src, f, u.posMax), r.ok) {
      for (o = u.md.normalizeLink(r.str), u.md.validateLink(o) ? f = r.pos : o = "", a = f; f < l && (t = u.src.charCodeAt(f), !(!E(t) && t !== 10)); f++)
        ;
      if (r = u.md.helpers.parseLinkTitle(u.src, f, u.posMax), f < l && a !== f && r.ok)
        for (i = r.str, f = r.pos; f < l && (t = u.src.charCodeAt(f), !(!E(t) && t !== 10)); f++)
          ;
    }
    (f >= l || u.src.charCodeAt(f) !== 41) && (s = !0), f++;
  }
  if (s) {
    if (typeof u.env.references > "u")
      return !1;
    if (f < l && u.src.charCodeAt(f) === 91 ? (a = f + 1, f = u.md.helpers.parseLinkLabel(u, f), f >= 0 ? n = u.src.slice(a, f++) : f = b + 1) : f = b + 1, n || (n = u.src.slice(h, b)), c = u.env.references[yu(n)], !c)
      return u.pos = d, !1;
    o = c.href, i = c.title;
  }
  if (!e) {
    u.pos = h, u.posMax = b;
    const g = u.push("link_open", "a", 1), k = [["href", o]];
    g.attrs = k, i && k.push(["title", i]), u.linkLevel++, u.md.inline.tokenize(u), u.linkLevel--, u.push("link_close", "a", -1);
  }
  return u.pos = f, u.posMax = l, !0;
}
function on(u, e) {
  let t, n, r, c, o, i, a, s, d = "";
  const l = u.pos, h = u.posMax;
  if (u.src.charCodeAt(u.pos) !== 33 || u.src.charCodeAt(u.pos + 1) !== 91)
    return !1;
  const b = u.pos + 2, f = u.md.helpers.parseLinkLabel(u, u.pos + 1, !1);
  if (f < 0)
    return !1;
  if (c = f + 1, c < h && u.src.charCodeAt(c) === 40) {
    for (c++; c < h && (t = u.src.charCodeAt(c), !(!E(t) && t !== 10)); c++)
      ;
    if (c >= h)
      return !1;
    for (s = c, i = u.md.helpers.parseLinkDestination(u.src, c, u.posMax), i.ok && (d = u.md.normalizeLink(i.str), u.md.validateLink(d) ? c = i.pos : d = ""), s = c; c < h && (t = u.src.charCodeAt(c), !(!E(t) && t !== 10)); c++)
      ;
    if (i = u.md.helpers.parseLinkTitle(u.src, c, u.posMax), c < h && s !== c && i.ok)
      for (a = i.str, c = i.pos; c < h && (t = u.src.charCodeAt(c), !(!E(t) && t !== 10)); c++)
        ;
    else
      a = "";
    if (c >= h || u.src.charCodeAt(c) !== 41)
      return u.pos = l, !1;
    c++;
  } else {
    if (typeof u.env.references > "u")
      return !1;
    if (c < h && u.src.charCodeAt(c) === 91 ? (s = c + 1, c = u.md.helpers.parseLinkLabel(u, c), c >= 0 ? r = u.src.slice(s, c++) : c = f + 1) : c = f + 1, r || (r = u.src.slice(b, f)), o = u.env.references[yu(r)], !o)
      return u.pos = l, !1;
    d = o.href, a = o.title;
  }
  if (!e) {
    n = u.src.slice(b, f);
    const g = [];
    u.md.inline.parse(
      n,
      u.md,
      u.env,
      g
    );
    const k = u.push("image", "img", 0), D = [["src", d], ["alt", ""]];
    k.attrs = D, k.children = g, k.content = n, a && D.push(["title", a]);
  }
  return u.pos = c, u.posMax = h, !0;
}
const an = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, sn = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function ln(u, e) {
  let t = u.pos;
  if (u.src.charCodeAt(t) !== 60)
    return !1;
  const n = u.pos, r = u.posMax;
  for (; ; ) {
    if (++t >= r) return !1;
    const o = u.src.charCodeAt(t);
    if (o === 60) return !1;
    if (o === 62) break;
  }
  const c = u.src.slice(n + 1, t);
  if (sn.test(c)) {
    const o = u.md.normalizeLink(c);
    if (!u.md.validateLink(o))
      return !1;
    if (!e) {
      const i = u.push("link_open", "a", 1);
      i.attrs = [["href", o]], i.markup = "autolink", i.info = "auto";
      const a = u.push("text", "", 0);
      a.content = u.md.normalizeLinkText(c);
      const s = u.push("link_close", "a", -1);
      s.markup = "autolink", s.info = "auto";
    }
    return u.pos += c.length + 2, !0;
  }
  if (an.test(c)) {
    const o = u.md.normalizeLink("mailto:" + c);
    if (!u.md.validateLink(o))
      return !1;
    if (!e) {
      const i = u.push("link_open", "a", 1);
      i.attrs = [["href", o]], i.markup = "autolink", i.info = "auto";
      const a = u.push("text", "", 0);
      a.content = u.md.normalizeLinkText(c);
      const s = u.push("link_close", "a", -1);
      s.markup = "autolink", s.info = "auto";
    }
    return u.pos += c.length + 2, !0;
  }
  return !1;
}
function fn(u) {
  return /^<a[>\s]/i.test(u);
}
function dn(u) {
  return /^<\/a\s*>/i.test(u);
}
function bn(u) {
  const e = u | 32;
  return e >= 97 && e <= 122;
}
function hn(u, e) {
  if (!u.md.options.html)
    return !1;
  const t = u.posMax, n = u.pos;
  if (u.src.charCodeAt(n) !== 60 || n + 2 >= t)
    return !1;
  const r = u.src.charCodeAt(n + 1);
  if (r !== 33 && r !== 63 && r !== 47 && !bn(r))
    return !1;
  const c = u.src.slice(n).match(Ut);
  if (!c)
    return !1;
  if (!e) {
    const o = u.push("html_inline", "", 0);
    o.content = c[0], fn(o.content) && u.linkLevel++, dn(o.content) && u.linkLevel--;
  }
  return u.pos += c[0].length, !0;
}
const pn = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, xn = /^&([a-z][a-z0-9]{1,31});/i;
function mn(u, e) {
  const t = u.pos, n = u.posMax;
  if (u.src.charCodeAt(t) !== 38 || t + 1 >= n) return !1;
  if (u.src.charCodeAt(t + 1) === 35) {
    const c = u.src.slice(t).match(pn);
    if (c) {
      if (!e) {
        const o = c[1][0].toLowerCase() === "x" ? parseInt(c[1].slice(1), 16) : parseInt(c[1], 10), i = u.push("text_special", "", 0);
        i.content = Vu(o) ? gu(o) : gu(65533), i.markup = c[0], i.info = "entity";
      }
      return u.pos += c[0].length, !0;
    }
  } else {
    const c = u.src.slice(t).match(xn);
    if (c) {
      const o = y0(c[0]);
      if (o !== c[0]) {
        if (!e) {
          const i = u.push("text_special", "", 0);
          i.content = o, i.markup = c[0], i.info = "entity";
        }
        return u.pos += c[0].length, !0;
      }
    }
  }
  return !1;
}
function d0(u) {
  const e = {}, t = u.length;
  if (!t) return;
  let n = 0, r = -2;
  const c = [];
  for (let o = 0; o < t; o++) {
    const i = u[o];
    if (c.push(0), (u[n].marker !== i.marker || r !== i.token - 1) && (n = o), r = i.token, i.length = i.length || 0, !i.close) continue;
    e.hasOwnProperty(i.marker) || (e[i.marker] = [-1, -1, -1, -1, -1, -1]);
    const a = e[i.marker][(i.open ? 3 : 0) + i.length % 3];
    let s = n - c[n] - 1, d = s;
    for (; s > a; s -= c[s] + 1) {
      const l = u[s];
      if (l.marker === i.marker && l.open && l.end < 0) {
        let h = !1;
        if ((l.close || i.open) && (l.length + i.length) % 3 === 0 && (l.length % 3 !== 0 || i.length % 3 !== 0) && (h = !0), !h) {
          const b = s > 0 && !u[s - 1].open ? c[s - 1] + 1 : 0;
          c[o] = o - s + b, c[s] = b, i.open = !1, l.end = o, l.close = !1, d = -1, r = -2;
          break;
        }
      }
    }
    d !== -1 && (e[i.marker][(i.open ? 3 : 0) + (i.length || 0) % 3] = d);
  }
}
function _n(u) {
  const e = u.tokens_meta, t = u.tokens_meta.length;
  d0(u.delimiters);
  for (let n = 0; n < t; n++)
    e[n] && e[n].delimiters && d0(e[n].delimiters);
}
function gn(u) {
  let e, t, n = 0;
  const r = u.tokens, c = u.tokens.length;
  for (e = t = 0; e < c; e++)
    r[e].nesting < 0 && n--, r[e].level = n, r[e].nesting > 0 && n++, r[e].type === "text" && e + 1 < c && r[e + 1].type === "text" ? r[e + 1].content = r[e].content + r[e + 1].content : (e !== t && (r[t] = r[e]), t++);
  e !== t && (r.length = t);
}
const Tu = [
  ["text", Jt],
  ["linkify", Xt],
  ["newline", Kt],
  ["escape", Yt],
  ["backticks", un],
  ["strikethrough", S0.tokenize],
  ["emphasis", T0.tokenize],
  ["link", cn],
  ["image", on],
  ["autolink", ln],
  ["html_inline", hn],
  ["entity", mn]
], qu = [
  ["balance_pairs", _n],
  ["strikethrough", S0.postProcess],
  ["emphasis", T0.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", gn]
];
function bu() {
  this.ruler = new S();
  for (let u = 0; u < Tu.length; u++)
    this.ruler.push(Tu[u][0], Tu[u][1]);
  this.ruler2 = new S();
  for (let u = 0; u < qu.length; u++)
    this.ruler2.push(qu[u][0], qu[u][1]);
}
bu.prototype.skipToken = function(u) {
  const e = u.pos, t = this.ruler.getRules(""), n = t.length, r = u.md.options.maxNesting, c = u.cache;
  if (typeof c[e] < "u") {
    u.pos = c[e];
    return;
  }
  let o = !1;
  if (u.level < r) {
    for (let i = 0; i < n; i++)
      if (u.level++, o = t[i](u, !0), u.level--, o) {
        if (e >= u.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    u.pos = u.posMax;
  o || u.pos++, c[e] = u.pos;
};
bu.prototype.tokenize = function(u) {
  const e = this.ruler.getRules(""), t = e.length, n = u.posMax, r = u.md.options.maxNesting;
  for (; u.pos < n; ) {
    const c = u.pos;
    let o = !1;
    if (u.level < r) {
      for (let i = 0; i < t; i++)
        if (o = e[i](u, !1), o) {
          if (c >= u.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    }
    if (o) {
      if (u.pos >= n)
        break;
      continue;
    }
    u.pending += u.src[u.pos++];
  }
  u.pending && u.pushPending();
};
bu.prototype.parse = function(u, e, t, n) {
  const r = new this.State(u, e, t, n);
  this.tokenize(r);
  const c = this.ruler2.getRules(""), o = c.length;
  for (let i = 0; i < o; i++)
    c[i](r);
};
bu.prototype.State = du;
function kn(u) {
  const e = {};
  u = u || {}, e.src_Any = _0.source, e.src_Cc = g0.source, e.src_Z = C0.source, e.src_P = Hu.source, e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|"), e.src_ZCc = [e.src_Z, e.src_Cc].join("|");
  const t = "[><｜]";
  return e.src_pseudo_letter = "(?:(?!" + t + "|" + e.src_ZPCc + ")" + e.src_Any + ")", e.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?", e.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", e.src_host_terminator = "(?=$|" + t + "|" + e.src_ZPCc + ")(?!" + (u["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + e.src_ZPCc + "))", e.src_path = "(?:[/?#](?:(?!" + e.src_ZCc + "|" + t + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + e.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + e.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + e.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + e.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + e.src_ZCc + "|[']).)+\\'|\\'(?=" + e.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + e.src_ZCc + "|[.]|$)|" + (u["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + e.src_ZCc + "|$)|;(?!" + e.src_ZCc + "|$)|\\!+(?!" + e.src_ZCc + "|[!]|$)|\\?(?!" + e.src_ZCc + "|[?]|$))+|\\/)?", e.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', e.src_xn = "xn--[a-z0-9\\-]{1,59}", e.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})", e.src_domain = "(?:" + e.src_xn + "|(?:" + e.src_pseudo_letter + ")|(?:" + e.src_pseudo_letter + "(?:-|" + e.src_pseudo_letter + "){0,61}" + e.src_pseudo_letter + "))", e.src_host = "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))", e.tpl_host_fuzzy = "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))", e.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))", e.src_host_strict = e.src_host + e.src_host_terminator, e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator, e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator, e.tpl_host_port_fuzzy_strict = e.tpl_host_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_port_no_ip_fuzzy_strict = e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + e.src_ZPCc + "|>|$))", e.tpl_email_fuzzy = "(^|" + t + '|"|\\(|' + e.src_ZCc + ")(" + e.src_email_name + "@" + e.tpl_host_fuzzy_strict + ")", e.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_fuzzy_strict + e.src_path + ")", e.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_no_ip_fuzzy_strict + e.src_path + ")", e;
}
function Ou(u) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
    t && Object.keys(t).forEach(function(n) {
      u[n] = t[n];
    });
  }), u;
}
function Au(u) {
  return Object.prototype.toString.call(u);
}
function Cn(u) {
  return Au(u) === "[object String]";
}
function Dn(u) {
  return Au(u) === "[object Object]";
}
function yn(u) {
  return Au(u) === "[object RegExp]";
}
function b0(u) {
  return Au(u) === "[object Function]";
}
function En(u) {
  return u.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const q0 = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function An(u) {
  return Object.keys(u || {}).reduce(function(e, t) {
    return e || q0.hasOwnProperty(t);
  }, !1);
}
const Fn = {
  "http:": {
    validate: function(u, e, t) {
      const n = u.slice(e);
      return t.re.http || (t.re.http = new RegExp(
        "^\\/\\/" + t.re.src_auth + t.re.src_host_port_strict + t.re.src_path,
        "i"
      )), t.re.http.test(n) ? n.match(t.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(u, e, t) {
      const n = u.slice(e);
      return t.re.no_http || (t.re.no_http = new RegExp(
        "^" + t.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + t.re.src_domain + ")\\.)+" + t.re.src_domain_root + ")" + t.re.src_port + t.re.src_host_terminator + t.re.src_path,
        "i"
      )), t.re.no_http.test(n) ? e >= 3 && u[e - 3] === ":" || e >= 3 && u[e - 3] === "/" ? 0 : n.match(t.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(u, e, t) {
      const n = u.slice(e);
      return t.re.mailto || (t.re.mailto = new RegExp(
        "^" + t.re.src_email_name + "@" + t.re.src_host_strict,
        "i"
      )), t.re.mailto.test(n) ? n.match(t.re.mailto)[0].length : 0;
    }
  }
}, vn = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", Bn = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function wn(u) {
  u.__index__ = -1, u.__text_cache__ = "";
}
function Sn(u) {
  return function(e, t) {
    const n = e.slice(t);
    return u.test(n) ? n.match(u)[0].length : 0;
  };
}
function h0() {
  return function(u, e) {
    e.normalize(u);
  };
}
function ku(u) {
  const e = u.re = kn(u.__opts__), t = u.__tlds__.slice();
  u.onCompile(), u.__tlds_replaced__ || t.push(vn), t.push(e.src_xn), e.src_tlds = t.join("|");
  function n(i) {
    return i.replace("%TLDS%", e.src_tlds);
  }
  e.email_fuzzy = RegExp(n(e.tpl_email_fuzzy), "i"), e.link_fuzzy = RegExp(n(e.tpl_link_fuzzy), "i"), e.link_no_ip_fuzzy = RegExp(n(e.tpl_link_no_ip_fuzzy), "i"), e.host_fuzzy_test = RegExp(n(e.tpl_host_fuzzy_test), "i");
  const r = [];
  u.__compiled__ = {};
  function c(i, a) {
    throw new Error('(LinkifyIt) Invalid schema "' + i + '": ' + a);
  }
  Object.keys(u.__schemas__).forEach(function(i) {
    const a = u.__schemas__[i];
    if (a === null)
      return;
    const s = { validate: null, link: null };
    if (u.__compiled__[i] = s, Dn(a)) {
      yn(a.validate) ? s.validate = Sn(a.validate) : b0(a.validate) ? s.validate = a.validate : c(i, a), b0(a.normalize) ? s.normalize = a.normalize : a.normalize ? c(i, a) : s.normalize = h0();
      return;
    }
    if (Cn(a)) {
      r.push(i);
      return;
    }
    c(i, a);
  }), r.forEach(function(i) {
    u.__compiled__[u.__schemas__[i]] && (u.__compiled__[i].validate = u.__compiled__[u.__schemas__[i]].validate, u.__compiled__[i].normalize = u.__compiled__[u.__schemas__[i]].normalize);
  }), u.__compiled__[""] = { validate: null, normalize: h0() };
  const o = Object.keys(u.__compiled__).filter(function(i) {
    return i.length > 0 && u.__compiled__[i];
  }).map(En).join("|");
  u.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + o + ")", "i"), u.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + o + ")", "ig"), u.re.schema_at_start = RegExp("^" + u.re.schema_search.source, "i"), u.re.pretest = RegExp(
    "(" + u.re.schema_test.source + ")|(" + u.re.host_fuzzy_test.source + ")|@",
    "i"
  ), wn(u);
}
function Tn(u, e) {
  const t = u.__index__, n = u.__last_index__, r = u.__text_cache__.slice(t, n);
  this.schema = u.__schema__.toLowerCase(), this.index = t + e, this.lastIndex = n + e, this.raw = r, this.text = r, this.url = r;
}
function Nu(u, e) {
  const t = new Tn(u, e);
  return u.__compiled__[t.schema].normalize(t, u), t;
}
function T(u, e) {
  if (!(this instanceof T))
    return new T(u, e);
  e || An(u) && (e = u, u = {}), this.__opts__ = Ou({}, q0, e), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = Ou({}, Fn, u), this.__compiled__ = {}, this.__tlds__ = Bn, this.__tlds_replaced__ = !1, this.re = {}, ku(this);
}
T.prototype.add = function(e, t) {
  return this.__schemas__[e] = t, ku(this), this;
};
T.prototype.set = function(e) {
  return this.__opts__ = Ou(this.__opts__, e), this;
};
T.prototype.test = function(e) {
  if (this.__text_cache__ = e, this.__index__ = -1, !e.length)
    return !1;
  let t, n, r, c, o, i, a, s, d;
  if (this.re.schema_test.test(e)) {
    for (a = this.re.schema_search, a.lastIndex = 0; (t = a.exec(e)) !== null; )
      if (c = this.testSchemaAt(e, t[2], a.lastIndex), c) {
        this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + c;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (s = e.search(this.re.host_fuzzy_test), s >= 0 && (this.__index__ < 0 || s < this.__index__) && (n = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (o = n.index + n[1].length, (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "", this.__index__ = o, this.__last_index__ = n.index + n[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (d = e.indexOf("@"), d >= 0 && (r = e.match(this.re.email_fuzzy)) !== null && (o = r.index + r[1].length, i = r.index + r[0].length, (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = o, this.__last_index__ = i))), this.__index__ >= 0;
};
T.prototype.pretest = function(e) {
  return this.re.pretest.test(e);
};
T.prototype.testSchemaAt = function(e, t, n) {
  return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, n, this) : 0;
};
T.prototype.match = function(e) {
  const t = [];
  let n = 0;
  this.__index__ >= 0 && this.__text_cache__ === e && (t.push(Nu(this, n)), n = this.__last_index__);
  let r = n ? e.slice(n) : e;
  for (; this.test(r); )
    t.push(Nu(this, n)), r = r.slice(this.__last_index__), n += this.__last_index__;
  return t.length ? t : null;
};
T.prototype.matchAtStart = function(e) {
  if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return null;
  const t = this.re.schema_at_start.exec(e);
  if (!t) return null;
  const n = this.testSchemaAt(e, t[2], t[0].length);
  return n ? (this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + n, Nu(this, 0)) : null;
};
T.prototype.tlds = function(e, t) {
  return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter(function(n, r, c) {
    return n !== c[r - 1];
  }).reverse(), ku(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, ku(this), this);
};
T.prototype.normalize = function(e) {
  e.schema || (e.url = "http://" + e.url), e.schema === "mailto:" && !/^mailto:/i.test(e.url) && (e.url = "mailto:" + e.url);
};
T.prototype.onCompile = function() {
};
const uu = 2147483647, I = 36, Ju = 1, lu = 26, qn = 38, Mn = 700, M0 = 72, z0 = 128, I0 = "-", zn = /^xn--/, In = /[^\0-\x7F]/, Pn = /[\x2E\u3002\uFF0E\uFF61]/g, Ln = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, Mu = I - Ju, P = Math.floor, zu = String.fromCharCode;
function j(u) {
  throw new RangeError(Ln[u]);
}
function Rn(u, e) {
  const t = [];
  let n = u.length;
  for (; n--; )
    t[n] = e(u[n]);
  return t;
}
function P0(u, e) {
  const t = u.split("@");
  let n = "";
  t.length > 1 && (n = t[0] + "@", u = t[1]), u = u.replace(Pn, ".");
  const r = u.split("."), c = Rn(r, e).join(".");
  return n + c;
}
function L0(u) {
  const e = [];
  let t = 0;
  const n = u.length;
  for (; t < n; ) {
    const r = u.charCodeAt(t++);
    if (r >= 55296 && r <= 56319 && t < n) {
      const c = u.charCodeAt(t++);
      (c & 64512) == 56320 ? e.push(((r & 1023) << 10) + (c & 1023) + 65536) : (e.push(r), t--);
    } else
      e.push(r);
  }
  return e;
}
const On = (u) => String.fromCodePoint(...u), Nn = function(u) {
  return u >= 48 && u < 58 ? 26 + (u - 48) : u >= 65 && u < 91 ? u - 65 : u >= 97 && u < 123 ? u - 97 : I;
}, p0 = function(u, e) {
  return u + 22 + 75 * (u < 26) - ((e != 0) << 5);
}, R0 = function(u, e, t) {
  let n = 0;
  for (u = t ? P(u / Mn) : u >> 1, u += P(u / e); u > Mu * lu >> 1; n += I)
    u = P(u / Mu);
  return P(n + (Mu + 1) * u / (u + qn));
}, O0 = function(u) {
  const e = [], t = u.length;
  let n = 0, r = z0, c = M0, o = u.lastIndexOf(I0);
  o < 0 && (o = 0);
  for (let i = 0; i < o; ++i)
    u.charCodeAt(i) >= 128 && j("not-basic"), e.push(u.charCodeAt(i));
  for (let i = o > 0 ? o + 1 : 0; i < t; ) {
    const a = n;
    for (let d = 1, l = I; ; l += I) {
      i >= t && j("invalid-input");
      const h = Nn(u.charCodeAt(i++));
      h >= I && j("invalid-input"), h > P((uu - n) / d) && j("overflow"), n += h * d;
      const b = l <= c ? Ju : l >= c + lu ? lu : l - c;
      if (h < b)
        break;
      const f = I - b;
      d > P(uu / f) && j("overflow"), d *= f;
    }
    const s = e.length + 1;
    c = R0(n - a, s, a == 0), P(n / s) > uu - r && j("overflow"), r += P(n / s), n %= s, e.splice(n++, 0, r);
  }
  return String.fromCodePoint(...e);
}, N0 = function(u) {
  const e = [];
  u = L0(u);
  const t = u.length;
  let n = z0, r = 0, c = M0;
  for (const a of u)
    a < 128 && e.push(zu(a));
  const o = e.length;
  let i = o;
  for (o && e.push(I0); i < t; ) {
    let a = uu;
    for (const d of u)
      d >= n && d < a && (a = d);
    const s = i + 1;
    a - n > P((uu - r) / s) && j("overflow"), r += (a - n) * s, n = a;
    for (const d of u)
      if (d < n && ++r > uu && j("overflow"), d === n) {
        let l = r;
        for (let h = I; ; h += I) {
          const b = h <= c ? Ju : h >= c + lu ? lu : h - c;
          if (l < b)
            break;
          const f = l - b, g = I - b;
          e.push(
            zu(p0(b + f % g, 0))
          ), l = P(f / g);
        }
        e.push(zu(p0(l, 0))), c = R0(r, s, i === o), r = 0, ++i;
      }
    ++r, ++n;
  }
  return e.join("");
}, $n = function(u) {
  return P0(u, function(e) {
    return zn.test(e) ? O0(e.slice(4).toLowerCase()) : e;
  });
}, Un = function(u) {
  return P0(u, function(e) {
    return In.test(e) ? "xn--" + N0(e) : e;
  });
}, $0 = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: L0,
    encode: On
  },
  decode: O0,
  encode: N0,
  toASCII: Un,
  toUnicode: $n
}, jn = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 100
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
}, Hn = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
}, Zn = {
  options: {
    // Enable HTML tags in source
    html: !0,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !0,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
}, Vn = {
  default: jn,
  zero: Hn,
  commonmark: Zn
}, Gn = /^(vbscript|javascript|file|data):/, Wn = /^data:image\/(gif|png|jpeg|webp);/;
function Jn(u) {
  const e = u.trim().toLowerCase();
  return Gn.test(e) ? Wn.test(e) : !0;
}
const U0 = ["http:", "https:", "mailto:"];
function Qn(u) {
  const e = ju(u, !0);
  if (e.hostname && (!e.protocol || U0.indexOf(e.protocol) >= 0))
    try {
      e.hostname = $0.toASCII(e.hostname);
    } catch {
    }
  return fu(Uu(e));
}
function Xn(u) {
  const e = ju(u, !0);
  if (e.hostname && (!e.protocol || U0.indexOf(e.protocol) >= 0))
    try {
      e.hostname = $0.toUnicode(e.hostname);
    } catch {
    }
  return tu(Uu(e), tu.defaultChars + "%");
}
function q(u, e) {
  if (!(this instanceof q))
    return new q(u, e);
  e || Zu(u) || (e = u || {}, u = "default"), this.inline = new bu(), this.block = new Eu(), this.core = new Gu(), this.renderer = new ru(), this.linkify = new T(), this.validateLink = Jn, this.normalizeLink = Qn, this.normalizeLinkText = Xn, this.utils = Ke, this.helpers = Du({}, tt), this.options = {}, this.configure(u), e && this.set(e);
}
q.prototype.set = function(u) {
  return Du(this.options, u), this;
};
q.prototype.configure = function(u) {
  const e = this;
  if (Zu(u)) {
    const t = u;
    if (u = Vn[t], !u)
      throw new Error('Wrong `markdown-it` preset "' + t + '", check name');
  }
  if (!u)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return u.options && e.set(u.options), u.components && Object.keys(u.components).forEach(function(t) {
    u.components[t].rules && e[t].ruler.enableOnly(u.components[t].rules), u.components[t].rules2 && e[t].ruler2.enableOnly(u.components[t].rules2);
  }), this;
};
q.prototype.enable = function(u, e) {
  let t = [];
  Array.isArray(u) || (u = [u]), ["core", "block", "inline"].forEach(function(r) {
    t = t.concat(this[r].ruler.enable(u, !0));
  }, this), t = t.concat(this.inline.ruler2.enable(u, !0));
  const n = u.filter(function(r) {
    return t.indexOf(r) < 0;
  });
  if (n.length && !e)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + n);
  return this;
};
q.prototype.disable = function(u, e) {
  let t = [];
  Array.isArray(u) || (u = [u]), ["core", "block", "inline"].forEach(function(r) {
    t = t.concat(this[r].ruler.disable(u, !0));
  }, this), t = t.concat(this.inline.ruler2.disable(u, !0));
  const n = u.filter(function(r) {
    return t.indexOf(r) < 0;
  });
  if (n.length && !e)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + n);
  return this;
};
q.prototype.use = function(u) {
  const e = [this].concat(Array.prototype.slice.call(arguments, 1));
  return u.apply(u, e), this;
};
q.prototype.parse = function(u, e) {
  if (typeof u != "string")
    throw new Error("Input data should be a String");
  const t = new this.core.State(u, this, e);
  return this.core.process(t), t.tokens;
};
q.prototype.render = function(u, e) {
  return e = e || {}, this.renderer.render(this.parse(u, e), this.options, e);
};
q.prototype.parseInline = function(u, e) {
  const t = new this.core.State(u, this, e);
  return t.inlineMode = !0, this.core.process(t), t.tokens;
};
q.prototype.renderInline = function(u, e) {
  return e = e || {}, this.renderer.render(this.parseInline(u, e), this.options, e);
};
const Kn = { class: "qkb-msg-bubble-component qkb-msg-bubble-component--markdown" }, Yn = ["innerHTML"], ur = {
  __name: "MarkdownMessage",
  props: {
    mainData: {
      type: Object,
      required: !0
    },
    msgBubbleBgBot: {
      type: String,
      default: "#f0f0f0"
    },
    msgBubbleColorBot: {
      type: String,
      default: "#000"
    },
    msgBubbleBgUser: {
      type: String,
      default: "#4356e0"
    },
    msgBubbleColorUser: {
      type: String,
      default: "#fff"
    },
    isUserMessage: {
      type: Boolean,
      default: !1
    }
  },
  setup(u) {
    N((r) => ({
      "1af9e08e": u.isUserMessage ? u.msgBubbleBgUser : u.msgBubbleBgBot,
      "5af6f8c8": u.isUserMessage ? u.msgBubbleColorUser : u.msgBubbleColorBot
    }));
    const e = u, t = new q({
      html: !1,
      // Disable HTML tags in source
      breaks: !0,
      // Convert '\n' in paragraphs into <br>
      linkify: !0,
      // Autoconvert URL-like text to links
      typographer: !0
      // Enable some language-neutral replacement + quotes beautification
    }), n = V(() => t.render(e.mainData.text));
    return (r, c) => (y(), A("div", Kn, [
      F("div", {
        class: "qkb-msg-bubble-component__text",
        innerHTML: n.value
      }, null, 8, Yn)
    ]));
  }
}, er = /* @__PURE__ */ $(ur, [["__scopeId", "data-v-5dd27cdf"]]), tr = {
  key: 0,
  class: "qkb-msg-avatar"
}, nr = {
  key: 2,
  class: "qkb-msg-bubble__time"
}, rr = {
  __name: "Main",
  props: {
    message: {
      type: Object,
      required: !0
    },
    botAvatarSize: {
      type: Number,
      default: 32
    },
    botAvatarImg: {
      type: String,
      default: "http://placehold.it/200x200"
    },
    msgBubbleBgBot: {
      type: String,
      default: "#f0f0f0"
    },
    msgBubbleColorBot: {
      type: String,
      default: "#000"
    },
    msgBubbleBgUser: {
      type: String,
      default: "#4356e0"
    },
    msgBubbleColorUser: {
      type: String,
      default: "#fff"
    }
  },
  setup(u) {
    N((r) => ({
      "8f8ca8da": u.botAvatarSize + "px",
      "3a536b50": "url(" + u.botAvatarImg + ")"
    }));
    const e = u, t = V(
      () => e.message.agent === "bot" ? "qkb-msg-bubble--bot" : "qkb-msg-bubble--user"
    ), n = V(() => {
      switch (e.message.type) {
        case "button":
          return fe;
        case "mrkdwn":
          return er;
        default:
          return ne;
      }
    });
    return (r, c) => (y(), A("div", {
      class: Cu(["qkb-msg-bubble", t.value])
    }, [
      u.message.agent === "bot" ? (y(), A("div", tr, c[0] || (c[0] = [
        F("div", { class: "qkb-msg-avatar__img" }, " ", -1)
      ]))) : Y("", !0),
      n.value ? (y(), ou(mu(n.value), {
        key: 1,
        "main-data": u.message,
        "msg-bubble-bg-bot": u.msgBubbleBgBot,
        "msg-bubble-color-bot": u.msgBubbleColorBot,
        "msg-bubble-bg-user": u.msgBubbleBgUser,
        "msg-bubble-color-user": u.msgBubbleColorUser,
        "is-user-message": u.message.agent === "user"
      }, null, 8, ["main-data", "msg-bubble-bg-bot", "msg-bubble-color-bot", "msg-bubble-bg-user", "msg-bubble-color-user", "is-user-message"])) : Y("", !0),
      u.message.createdAt ? (y(), A("div", nr, K(u.message.createdAt), 1)) : Y("", !0)
    ], 2));
  }
}, cr = /* @__PURE__ */ $(rr, [["__scopeId", "data-v-95d31953"]]), or = { class: "qkb-msg-bubble qkb-msg-bubble--bot" }, ir = {
  __name: "Typing",
  props: {
    botAvatarSize: {
      type: Number,
      default: 32
    },
    botAvatarImg: {
      type: String,
      default: "http://placehold.it/200x200"
    },
    msgBubbleBgBot: {
      type: String,
      default: "#f0f0f0"
    },
    msgBubbleColorBot: {
      type: String,
      default: "#000"
    }
  },
  setup(u) {
    return N((e) => ({
      "4d54dd48": u.botAvatarSize + "px",
      "4ca3d3fb": "url(" + u.botAvatarImg + ")",
      "5040f4b1": u.msgBubbleBgBot,
      e48ca0d6: u.msgBubbleColorBot
    })), (e, t) => (y(), A("div", or, t[0] || (t[0] = [
      V0('<div class="qkb-msg-avatar" data-v-e819e473><div class="qkb-msg-avatar__img" data-v-e819e473> </div></div><div class="qkb-msg-bubble-component qkb-msg-bubble-component--typing" data-v-e819e473><div class="qkb-msg-bubble-component__text" data-v-e819e473><div class="qkb-msg-bubble__typing-indicator" data-v-e819e473><span data-v-e819e473></span><span data-v-e819e473></span><span data-v-e819e473></span></div></div></div>', 2)
    ])));
  }
}, ar = /* @__PURE__ */ $(ir, [["__scopeId", "data-v-e819e473"]]), sr = {
  key: 0,
  class: "qkb-board-content__bot-typing"
}, lr = {
  __name: "Content",
  props: {
    mainData: {
      type: Array,
      required: !0
    },
    botTyping: {
      type: Boolean,
      default: !1
    },
    boardContentBg: {
      type: String,
      default: "#fff"
    },
    botAvatarSize: {
      type: Number,
      default: 32
    },
    botAvatarImg: {
      type: String,
      default: "http://placehold.it/200x200"
    },
    msgBubbleBgBot: {
      type: String,
      default: "#f0f0f0"
    },
    msgBubbleColorBot: {
      type: String,
      default: "#000"
    },
    msgBubbleBgUser: {
      type: String,
      default: "#4356e0"
    },
    msgBubbleColorUser: {
      type: String,
      default: "#fff"
    }
  },
  setup(u) {
    N((c) => ({
      "38bada9a": u.boardContentBg
    }));
    const e = u, t = eu(null), n = eu(null), r = (c = "smooth") => {
      if (!t.value || !n.value) return;
      const o = t.value, i = n.value.offsetHeight;
      o.scrollTo({
        top: i,
        behavior: c
      });
    };
    return Iu(() => e.mainData, () => {
      xu(() => {
        r();
      });
    }, { deep: !0 }), Iu(() => e.botTyping, (c) => {
      c && xu(() => {
        r();
      });
    }), $u(() => {
      xu(() => {
        r("auto");
      });
    }), (c, o) => (y(), A("div", {
      class: "qkb-board-content",
      ref_key: "boardContent",
      ref: t
    }, [
      F("div", {
        class: "qkb-board-content__bubbles",
        ref_key: "boardBubbles",
        ref: n
      }, [
        (y(!0), A(x0, null, m0(u.mainData, (i, a) => (y(), ou(cr, {
          key: a,
          message: i,
          "bot-avatar-size": u.botAvatarSize,
          "bot-avatar-img": u.botAvatarImg,
          "msg-bubble-bg-bot": u.msgBubbleBgBot,
          "msg-bubble-color-bot": u.msgBubbleColorBot,
          "msg-bubble-bg-user": u.msgBubbleBgUser,
          "msg-bubble-color-user": u.msgBubbleColorUser
        }, null, 8, ["message", "bot-avatar-size", "bot-avatar-img", "msg-bubble-bg-bot", "msg-bubble-color-bot", "msg-bubble-bg-user", "msg-bubble-color-user"]))), 128)),
        u.botTyping ? (y(), A("div", sr, [
          O(c.$slots, "botTyping", {}, () => [
            X(ar, {
              "bot-avatar-size": u.botAvatarSize,
              "bot-avatar-img": u.botAvatarImg,
              "msg-bubble-bg-bot": u.msgBubbleBgBot,
              "msg-bubble-color-bot": u.msgBubbleColorBot
            }, null, 8, ["bot-avatar-size", "bot-avatar-img", "msg-bubble-bg-bot", "msg-bubble-color-bot"])
          ], !0)
        ])) : Y("", !0)
      ], 512)
    ], 512));
  }
}, fr = /* @__PURE__ */ $(lr, [["__scopeId", "data-v-7bdfcc98"]]), dr = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  viewBox: "0 0 488.721 488.721"
};
function br(u, e) {
  return y(), A("svg", dr, e[0] || (e[0] = [
    F("path", { d: "M483.589 222.024a51.2 51.2 0 0 0-23.762-23.762L73.522 11.331C48.074-.998 17.451 9.638 5.122 35.086A51.2 51.2 0 0 0 3.669 76.44l67.174 167.902L3.669 412.261c-10.463 26.341 2.409 56.177 28.75 66.639a51.3 51.3 0 0 0 18.712 3.624c7.754 0 15.408-1.75 22.391-5.12l386.304-186.982c25.45-12.326 36.089-42.949 23.763-68.398M58.657 446.633c-8.484 4.107-18.691.559-22.798-7.925a17.07 17.07 0 0 1-.481-13.784l65.399-163.516h340.668zm42.121-219.358L35.379 63.759a16.64 16.64 0 0 1 4.215-18.773 16.54 16.54 0 0 1 19.063-2.884l382.788 185.173z" }, null, -1)
  ]));
}
const hr = { render: br }, pr = { class: "qkb-board-action__wrapper" }, xr = { class: "qkb-board-action__msg-box" }, mr = ["disabled", "placeholder"], _r = { class: "qkb-board-action__extra" }, gr = ["disabled"], kr = {
  __name: "Action",
  props: {
    inputPlaceholder: {
      type: String,
      default: "Type here..."
    },
    inputDisablePlaceholder: {
      type: String,
      default: "Please wait for bot response"
    },
    inputDisableButtonPlaceholder: {
      type: String,
      default: "Please select an option above"
    },
    inputDisable: {
      type: Boolean,
      default: !1
    },
    inputDisableBg: {
      type: String,
      default: "#fff"
    },
    msgBubbleBgUser: {
      type: String,
      default: "#4356e0"
    },
    lastMessageType: {
      type: String,
      default: null
    }
  },
  emits: ["msg-send"],
  setup(u, { emit: e }) {
    N((l) => ({
      "7cc90618": u.inputDisableBg,
      "21769eb0": u.msgBubbleBgUser
    }));
    const t = u, n = e, r = eu(null), c = eu(null), o = V(() => {
      const l = [];
      return t.inputDisable && l.push("qkb-board-action--disabled"), r.value && l.push("qkb-board-action--typing"), l;
    }), i = V(() => t.inputDisable ? t.lastMessageType === "button" && t.inputDisableButtonPlaceholder ? t.inputDisableButtonPlaceholder : t.inputDisablePlaceholder : t.inputPlaceholder);
    $u(() => {
      var l;
      t.inputDisable || (l = c.value) == null || l.focus(), d();
    });
    const a = () => {
      var l;
      r.value && !t.inputDisable && (n("msg-send", { text: r.value }), r.value = null, (l = c.value) == null || l.focus());
    }, s = (l) => {
      if (l.key === "Enter")
        if (l.shiftKey)
          l.preventDefault(), a();
        else
          return;
    }, d = () => {
      c.value && (c.value.style.height = "auto", c.value.style.height = c.value.scrollHeight + "px");
    };
    return Iu(r, () => {
      xu(() => {
        d();
      });
    }), (l, h) => (y(), A("div", {
      class: Cu(["qkb-board-action", o.value])
    }, [
      F("div", pr, [
        F("div", xr, [
          G0(F("textarea", {
            ref_key: "qkbMessageInput",
            ref: c,
            "onUpdate:modelValue": h[0] || (h[0] = (b) => r.value = b),
            class: "qkb-board-action__input",
            disabled: u.inputDisable,
            placeholder: i.value,
            onKeydown: s,
            onInput: d,
            rows: "1"
          }, null, 40, mr), [
            [W0, r.value]
          ])
        ]),
        F("div", _r, [
          O(l.$slots, "actions", {}, void 0, !0),
          F("button", {
            class: "qkb-action-item qkb-action-item--send",
            onClick: a,
            disabled: !r.value || u.inputDisable
          }, [
            O(l.$slots, "sendButton", {}, () => [
              (y(), ou(mu(Pu(hr)), { class: "qkb-action-icon qkb-action-icon--send" }))
            ], !0)
          ], 8, gr)
        ])
      ])
    ], 2));
  }
}, Cr = /* @__PURE__ */ $(kr, [["__scopeId", "data-v-34bdd47c"]]), Dr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "511pt",
  height: "511pt",
  viewBox: "1 -31 512 511"
};
function yr(u, e) {
  return y(), A("svg", Dr, e[0] || (e[0] = [
    F("path", { d: "M128 448.5c-8.836 0-16-7.164-16-16v-80H48c-26.512 0-48-21.492-48-48v-256C0 21.988 21.488.5 48 .5h416c26.512 0 48 21.488 48 48v256c0 26.508-21.488 48-48 48H230.625l-91.312 91.313c-3 3-7.07 4.687-11.313 4.687m-80-416c-8.836 0-16 7.164-16 16v256c0 8.836 7.164 16 16 16h80c8.836 0 16 7.164 16 16v57.375l68.688-68.687c3-3 7.07-4.688 11.312-4.688h240c8.836 0 16-7.164 16-16v-256c0-8.836-7.164-16-16-16zm0 0" }, null, -1),
    F("path", { d: "M160 144.5c-17.672 0-32-14.328-32-32s14.328-32 32-32 32 14.328 32 32-14.328 32-32 32M352 144.5c-17.672 0-32-14.328-32-32s14.328-32 32-32 32 14.328 32 32-14.328 32-32 32M256 288.5c-52.996-.05-95.945-43.004-96-96 0-8.836 7.164-16 16-16s16 7.164 16 16c0 35.348 28.652 64 64 64s64-28.652 64-64c0-8.836 7.164-16 16-16s16 7.164 16 16c-.055 52.996-43.004 95.945-96 96m0 0" }, null, -1)
  ]));
}
const Er = { render: yr }, Ar = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  viewBox: "0 0 512.001 512.001"
};
function Fr(u, e) {
  return y(), A("svg", Ar, e[0] || (e[0] = [
    F("path", { d: "M284.286 256.002 506.143 34.144c7.811-7.811 7.811-20.475 0-28.285s-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0s-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.94 19.94 0 0 0 14.143 5.857 19.94 19.94 0 0 0 14.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285z" }, null, -1)
  ]));
}
const vr = { render: Fr }, Br = {
  key: 0,
  class: "qkb-board"
}, wr = { class: "qkb-bot-bubble" }, Sr = { class: "qkb-preload-image" }, Tr = {
  key: 0,
  class: "qkb-msg-avatar__img"
}, qr = {
  __name: "BotUI",
  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    messages: {
      type: Array
    },
    botTyping: {
      type: Boolean,
      default: !1
    },
    inputDisable: {
      type: Boolean,
      default: !1
    },
    isOpen: {
      type: Boolean,
      default: !1
    },
    openDelay: {
      type: Number
    }
  },
  emits: ["init", "destroy", "msg-send", "button-clicked"],
  setup(u, { emit: e }) {
    N((f) => ({
      "73579c8e": o.value.windowZIndex,
      "3f2bb0ab": o.value.windowPosition.bottom || "auto",
      e313e644: o.value.windowPosition.right || "auto",
      "2efdd917": o.value.windowPosition.top || "auto",
      da294972: o.value.windowPosition.left || "auto",
      "40af902a": o.value.bubbleZIndex,
      "1ce100e2": o.value.bubblePosition.bottom || "auto",
      "62aad17a": o.value.bubblePosition.right || "auto",
      "58d9d69a": o.value.bubblePosition.top || "auto",
      fe04d9aa: o.value.bubblePosition.left || "auto",
      "5e3b5d7c": o.value.bubbleBtnSize + "px",
      "4fa94e22": o.value.colorScheme,
      "17bd07f0": o.value.textColor
    }));
    const t = u, n = e, r = eu(!1), c = {
      botTitle: "Chatbot",
      colorScheme: "#1b53d0",
      textColor: "#fff",
      bubbleBtnSize: 56,
      animation: !0,
      boardContentBg: "#fff",
      botAvatarSize: 32,
      botAvatarImg: "http://placehold.it/200x200",
      msgBubbleBgBot: "#f0f0f0",
      msgBubbleColorBot: "#000",
      msgBubbleBgUser: "#4356e0",
      msgBubbleColorUser: "#fff",
      inputPlaceholder: "Message",
      inputDisableBg: "#fff",
      inputDisablePlaceholder: "Please wait for bot response",
      inputDisableButtonPlaceholder: null,
      bubbleZIndex: 9998,
      bubblePosition: {
        bottom: "20px",
        right: "20px",
        top: null,
        left: null
      },
      windowZIndex: 9999,
      windowPosition: {
        bottom: "80px",
        right: "20px",
        top: null,
        left: null
      }
    }, o = V(() => ({ ...c, ...t.options })), i = V(() => {
      const f = [];
      return o.value.animation && f.push("qkb-bot-ui--animate"), f;
    }), a = V(() => !t.messages || t.messages.length === 0 ? null : t.messages[t.messages.length - 1].type || null), s = () => {
      r.value || l();
    }, d = () => {
      r.value && l();
    }, l = () => {
      r.value = !r.value, r.value ? n("init") : n("destroy");
    }, h = (f) => {
      n("msg-send", f);
    }, b = (f) => {
      n("button-clicked", f);
    };
    return t.isOpen && (t.openDelay ? setTimeout(s, t.openDelay) : l()), $u(() => {
      document.addEventListener(vu.EVENT_OPEN, s), document.addEventListener(vu.EVENT_CLOSE, d), document.addEventListener(vu.EVENT_TOGGLE, l), Lu.on("button-clicked", b);
    }), J0(() => {
      Lu.off("button-clicked", b);
    }), (f, g) => (y(), A("div", {
      class: Cu(["qkb-bot-ui", i.value])
    }, [
      X(Xu, { name: "qkb-fadeUp" }, {
        default: J(() => [
          r.value ? (y(), A("div", Br, [
            X(Y0, {
              "bot-title": o.value.botTitle,
              "color-scheme": o.value.colorScheme,
              "text-color": o.value.textColor,
              onCloseBot: l
            }, {
              header: J(() => [
                O(f.$slots, "header", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["bot-title", "color-scheme", "text-color"]),
            X(fr, {
              "bot-typing": u.botTyping,
              "main-data": u.messages,
              "board-content-bg": o.value.boardContentBg,
              "bot-avatar-size": o.value.botAvatarSize,
              "bot-avatar-img": o.value.botAvatarImg,
              "msg-bubble-bg-bot": o.value.msgBubbleBgBot,
              "msg-bubble-color-bot": o.value.msgBubbleColorBot,
              "msg-bubble-bg-user": o.value.msgBubbleBgUser,
              "msg-bubble-color-user": o.value.msgBubbleColorUser
            }, {
              botTyping: J(() => [
                O(f.$slots, "botTyping", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["bot-typing", "main-data", "board-content-bg", "bot-avatar-size", "bot-avatar-img", "msg-bubble-bg-bot", "msg-bubble-color-bot", "msg-bubble-bg-user", "msg-bubble-color-user"]),
            X(Cr, {
              "input-disable": u.inputDisable,
              "input-placeholder": o.value.inputPlaceholder,
              "input-disable-placeholder": o.value.inputDisablePlaceholder,
              "input-disable-button-placeholder": o.value.inputDisableButtonPlaceholder,
              "input-disable-bg": o.value.inputDisableBg,
              "msg-bubble-bg-user": o.value.msgBubbleBgUser,
              "last-message-type": a.value,
              onMsgSend: h
            }, {
              actions: J(() => [
                O(f.$slots, "actions", {}, void 0, !0)
              ]),
              sendButton: J(() => [
                O(f.$slots, "sendButton", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["input-disable", "input-placeholder", "input-disable-placeholder", "input-disable-button-placeholder", "input-disable-bg", "msg-bubble-bg-user", "last-message-type"])
          ])) : Y("", !0)
        ]),
        _: 3
      }),
      F("div", wr, [
        F("button", {
          class: "qkb-bubble-btn",
          onClick: l
        }, [
          O(f.$slots, "bubbleButton", {}, () => [
            X(Xu, { name: "qkb-scaleUp" }, {
              default: J(() => [
                r.value ? (y(), ou(mu(Pu(vr)), {
                  key: "2",
                  class: "qkb-bubble-btn-icon qkb-bubble-btn-icon--close"
                })) : (y(), ou(mu(Pu(Er)), {
                  key: "1",
                  class: "qkb-bubble-btn-icon"
                }))
              ]),
              _: 1
            })
          ], !0)
        ])
      ]),
      F("div", Sr, [
        o.value.botAvatarImg ? (y(), A("div", Tr)) : Y("", !0)
      ])
    ], 2));
  }
}, Mr = /* @__PURE__ */ $(qr, [["__scopeId", "data-v-0ec5aa0b"]]), Ir = {
  install(u, e) {
    u.component("VueBotUI", Mr);
  }
};
export {
  Mr as VueBotUI,
  Ir as default
};
