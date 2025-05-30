import { useCssVars as g, createElementBlock as i, openBlock as l, renderSlot as d, createElementVNode as r, toDisplayString as h, ref as k, Fragment as A, renderList as E, normalizeClass as $, computed as _, createCommentVNode as y, createBlock as C, resolveDynamicComponent as w, createStaticVNode as O, watch as M, nextTick as z, createVNode as B, onMounted as P, withDirectives as N, vModelText as L, unref as D, onUnmounted as V, Transition as T, withCtx as p } from "vue";
const U = {
  EVENT_OPEN: "botui-open",
  EVENT_CLOSE: "botui-close",
  EVENT_TOGGLE: "botui-toggle"
}, m = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [a, b] of t)
    s[a] = b;
  return s;
}, H = { class: "qkb-board-header" }, j = { class: "qkb-board-header__title" }, G = {
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
  setup(e) {
    return g((t) => ({
      "899703c0": e.colorScheme,
      "989fc124": e.textColor
    })), (t, s) => (l(), i("div", H, [
      d(t.$slots, "header", {}, () => [
        r("div", j, h(e.botTitle), 1)
      ], !0)
    ]));
  }
}, Z = /* @__PURE__ */ m(G, [["__scopeId", "data-v-d4de3b4f"]]), K = { class: "qkb-msg-bubble-component qkb-msg-bubble-component--single-text" }, F = { class: "qkb-msg-bubble-component__text" }, J = {
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
  setup(e) {
    return g((t) => ({
      bb7eabf4: e.isUserMessage ? e.msgBubbleBgUser : e.msgBubbleBgBot,
      "448759d8": e.isUserMessage ? e.msgBubbleColorUser : e.msgBubbleColorBot
    })), (t, s) => (l(), i("div", K, [
      r("div", F, h(e.mainData.text), 1)
    ]));
  }
}, Q = /* @__PURE__ */ m(J, [["__scopeId", "data-v-e044f48b"]]);
function R(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, s) {
    var a = e.get(t);
    a ? a.push(s) : e.set(t, [s]);
  }, off: function(t, s) {
    var a = e.get(t);
    a && (s ? a.splice(a.indexOf(s) >>> 0, 1) : e.set(t, []));
  }, emit: function(t, s) {
    var a = e.get(t);
    a && a.slice().map(function(b) {
      b(s);
    }), (a = e.get("*")) && a.slice().map(function(b) {
      b(t, s);
    });
  } };
}
const I = R(), W = { class: "qkb-msg-bubble-component qkb-msg-bubble-component--button-options" }, X = { class: "qkb-msg-bubble-component__text" }, Y = { class: "qkb-msg-bubble-component__options-wrapper" }, ee = ["onClick"], te = ["href"], oe = {
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
  setup(e) {
    g((a) => ({
      74142707: e.msgBubbleBgBot,
      e82f5502: e.msgBubbleColorBot,
      "0e796a8b": e.msgBubbleBgUser,
      "1da9e9da": e.msgBubbleColorUser
    }));
    const t = k(null), s = (a) => {
      t.value = a.value, I.emit("button-clicked", {
        action: a.action || "click",
        value: a.value,
        text: a.text,
        originalItem: a
      });
    };
    return (a, b) => (l(), i("div", W, [
      r("div", X, h(e.mainData.text), 1),
      r("div", Y, [
        (l(!0), i(A, null, E(e.mainData.options, (n, o) => (l(), i("div", {
          key: o,
          class: $([{ active: t.value === n.value }, "qkb-mb-button-options__item"])
        }, [
          n.action !== "url" ? (l(), i("button", {
            key: 0,
            class: "qkb-mb-button-options__btn",
            onClick: (f) => s(n)
          }, [
            r("span", null, h(n.text), 1)
          ], 8, ee)) : (l(), i("a", {
            key: 1,
            href: n.value,
            target: "_blank",
            class: "qkb-mb-button-options__btn qkb-mb-button-options__url"
          }, [
            r("span", null, h(n.text), 1)
          ], 8, te))
        ], 2))), 128))
      ])
    ]));
  }
}, ae = /* @__PURE__ */ m(oe, [["__scopeId", "data-v-0341e4d1"]]), se = {
  key: 0,
  class: "qkb-msg-avatar"
}, be = {
  key: 2,
  class: "qkb-msg-bubble__time"
}, le = {
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
  setup(e) {
    g((b) => ({
      "4aaf0702": e.botAvatarSize + "px",
      "4fa00e38": "url(" + e.botAvatarImg + ")"
    }));
    const t = e, s = _(
      () => t.message.agent === "bot" ? "qkb-msg-bubble--bot" : "qkb-msg-bubble--user"
    ), a = _(() => {
      switch (t.message.type) {
        case "button":
          return ae;
        default:
          return Q;
      }
    });
    return (b, n) => (l(), i("div", {
      class: $(["qkb-msg-bubble", s.value])
    }, [
      e.message.agent === "bot" ? (l(), i("div", se, n[0] || (n[0] = [
        r("div", { class: "qkb-msg-avatar__img" }, " ", -1)
      ]))) : y("", !0),
      a.value ? (l(), C(w(a.value), {
        key: 1,
        "main-data": e.message,
        "msg-bubble-bg-bot": e.msgBubbleBgBot,
        "msg-bubble-color-bot": e.msgBubbleColorBot,
        "msg-bubble-bg-user": e.msgBubbleBgUser,
        "msg-bubble-color-user": e.msgBubbleColorUser,
        "is-user-message": e.message.agent === "user"
      }, null, 8, ["main-data", "msg-bubble-bg-bot", "msg-bubble-color-bot", "msg-bubble-bg-user", "msg-bubble-color-user", "is-user-message"])) : y("", !0),
      e.message.createdAt ? (l(), i("div", be, h(e.message.createdAt), 1)) : y("", !0)
    ], 2));
  }
}, ne = /* @__PURE__ */ m(le, [["__scopeId", "data-v-9c39555b"]]), ue = { class: "qkb-msg-bubble qkb-msg-bubble--bot" }, ie = {
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
  setup(e) {
    return g((t) => ({
      "4d54dd48": e.botAvatarSize + "px",
      "4ca3d3fb": "url(" + e.botAvatarImg + ")",
      "5040f4b1": e.msgBubbleBgBot,
      e48ca0d6: e.msgBubbleColorBot
    })), (t, s) => (l(), i("div", ue, s[0] || (s[0] = [
      O('<div class="qkb-msg-avatar" data-v-e819e473><div class="qkb-msg-avatar__img" data-v-e819e473> </div></div><div class="qkb-msg-bubble-component qkb-msg-bubble-component--typing" data-v-e819e473><div class="qkb-msg-bubble-component__text" data-v-e819e473><div class="qkb-msg-bubble__typing-indicator" data-v-e819e473><span data-v-e819e473></span><span data-v-e819e473></span><span data-v-e819e473></span></div></div></div>', 2)
    ])));
  }
}, re = /* @__PURE__ */ m(ie, [["__scopeId", "data-v-e819e473"]]), ce = {
  key: 0,
  class: "qkb-board-content__bot-typing"
}, de = {
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
  setup(e) {
    g((n) => ({
      ba1b7fe8: e.boardContentBg
    }));
    const t = e, s = k(null), a = k(null), b = () => {
      const n = s.value, o = a.value.offsetHeight;
      n.scrollTop = o;
    };
    return M(() => t.mainData, () => {
      z(() => {
        b();
      });
    }), (n, o) => (l(), i("div", {
      class: "qkb-board-content",
      ref_key: "boardContent",
      ref: s
    }, [
      r("div", {
        class: "qkb-board-content__bubbles",
        ref_key: "boardBubbles",
        ref: a
      }, [
        (l(!0), i(A, null, E(e.mainData, (f, v) => (l(), C(ne, {
          key: v,
          message: f,
          "bot-avatar-size": e.botAvatarSize,
          "bot-avatar-img": e.botAvatarImg,
          "msg-bubble-bg-bot": e.msgBubbleBgBot,
          "msg-bubble-color-bot": e.msgBubbleColorBot,
          "msg-bubble-bg-user": e.msgBubbleBgUser,
          "msg-bubble-color-user": e.msgBubbleColorUser
        }, null, 8, ["message", "bot-avatar-size", "bot-avatar-img", "msg-bubble-bg-bot", "msg-bubble-color-bot", "msg-bubble-bg-user", "msg-bubble-color-user"]))), 128)),
        e.botTyping ? (l(), i("div", ce, [
          d(n.$slots, "botTyping", {}, () => [
            B(re, {
              "bot-avatar-size": e.botAvatarSize,
              "bot-avatar-img": e.botAvatarImg,
              "msg-bubble-bg-bot": e.msgBubbleBgBot,
              "msg-bubble-color-bot": e.msgBubbleColorBot
            }, null, 8, ["bot-avatar-size", "bot-avatar-img", "msg-bubble-bg-bot", "msg-bubble-color-bot"])
          ], !0)
        ])) : y("", !0)
      ], 512)
    ], 512));
  }
}, ge = /* @__PURE__ */ m(de, [["__scopeId", "data-v-946dc6df"]]), me = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  viewBox: "0 0 488.721 488.721"
};
function fe(e, t) {
  return l(), i("svg", me, t[0] || (t[0] = [
    r("path", { d: "M483.589 222.024a51.2 51.2 0 0 0-23.762-23.762L73.522 11.331C48.074-.998 17.451 9.638 5.122 35.086A51.2 51.2 0 0 0 3.669 76.44l67.174 167.902L3.669 412.261c-10.463 26.341 2.409 56.177 28.75 66.639a51.3 51.3 0 0 0 18.712 3.624c7.754 0 15.408-1.75 22.391-5.12l386.304-186.982c25.45-12.326 36.089-42.949 23.763-68.398M58.657 446.633c-8.484 4.107-18.691.559-22.798-7.925a17.07 17.07 0 0 1-.481-13.784l65.399-163.516h340.668zm42.121-219.358L35.379 63.759a16.64 16.64 0 0 1 4.215-18.773 16.54 16.54 0 0 1 19.063-2.884l382.788 185.173z" }, null, -1)
  ]));
}
const ve = { render: fe }, pe = { class: "qkb-board-action__wrapper" }, Be = { class: "qkb-board-action__msg-box" }, he = ["disabled", "placeholder"], ye = { class: "qkb-board-action__extra" }, ke = ["disabled"], xe = {
  __name: "Action",
  props: {
    inputPlaceholder: {
      type: String,
      default: "Type here..."
    },
    inputDisablePlaceholder: {
      type: String,
      default: "Hit the buttons above to respond"
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
    }
  },
  emits: ["msg-send"],
  setup(e, { emit: t }) {
    g((u) => ({
      dd375256: e.inputDisableBg,
      "6e13778b": e.msgBubbleBgUser
    }));
    const s = e, a = t, b = k(null), n = k(null), o = _(() => {
      const u = [];
      return s.inputDisable && u.push("qkb-board-action--disabled"), b.value && u.push("qkb-board-action--typing"), u;
    });
    P(() => {
      var u;
      s.inputDisable || (u = n.value) == null || u.focus(), x();
    });
    const f = () => {
      var u;
      b.value && !s.inputDisable && (a("msg-send", { text: b.value }), b.value = null, (u = n.value) == null || u.focus());
    }, v = (u) => {
      if (u.key === "Enter")
        if (u.shiftKey)
          u.preventDefault(), f();
        else
          return;
    }, x = () => {
      n.value && (n.value.style.height = "auto", n.value.style.height = n.value.scrollHeight + "px");
    };
    return M(b, () => {
      z(() => {
        x();
      });
    }), (u, q) => (l(), i("div", {
      class: $(["qkb-board-action", o.value])
    }, [
      r("div", pe, [
        r("div", Be, [
          N(r("textarea", {
            ref_key: "qkbMessageInput",
            ref: n,
            "onUpdate:modelValue": q[0] || (q[0] = (S) => b.value = S),
            class: "qkb-board-action__input",
            disabled: e.inputDisable,
            placeholder: e.inputDisablePlaceholder && e.inputDisable ? e.inputDisablePlaceholder : e.inputPlaceholder,
            onKeydown: v,
            onInput: x,
            rows: "1"
          }, null, 40, he), [
            [L, b.value]
          ])
        ]),
        r("div", ye, [
          d(u.$slots, "actions", {}, void 0, !0),
          r("button", {
            class: "qkb-action-item qkb-action-item--send",
            onClick: f,
            disabled: !b.value || e.inputDisable
          }, [
            d(u.$slots, "sendButton", {}, () => [
              (l(), C(w(D(ve)), { class: "qkb-action-icon qkb-action-icon--send" }))
            ], !0)
          ], 8, ke)
        ])
      ])
    ], 2));
  }
}, _e = /* @__PURE__ */ m(xe, [["__scopeId", "data-v-f2b47962"]]), Ce = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "511pt",
  height: "511pt",
  viewBox: "1 -31 512 511"
};
function qe(e, t) {
  return l(), i("svg", Ce, t[0] || (t[0] = [
    r("path", { d: "M128 448.5c-8.836 0-16-7.164-16-16v-80H48c-26.512 0-48-21.492-48-48v-256C0 21.988 21.488.5 48 .5h416c26.512 0 48 21.488 48 48v256c0 26.508-21.488 48-48 48H230.625l-91.312 91.313c-3 3-7.07 4.687-11.313 4.687m-80-416c-8.836 0-16 7.164-16 16v256c0 8.836 7.164 16 16 16h80c8.836 0 16 7.164 16 16v57.375l68.688-68.687c3-3 7.07-4.688 11.312-4.688h240c8.836 0 16-7.164 16-16v-256c0-8.836-7.164-16-16-16zm0 0" }, null, -1),
    r("path", { d: "M160 144.5c-17.672 0-32-14.328-32-32s14.328-32 32-32 32 14.328 32 32-14.328 32-32 32M352 144.5c-17.672 0-32-14.328-32-32s14.328-32 32-32 32 14.328 32 32-14.328 32-32 32M256 288.5c-52.996-.05-95.945-43.004-96-96 0-8.836 7.164-16 16-16s16 7.164 16 16c0 35.348 28.652 64 64 64s64-28.652 64-64c0-8.836 7.164-16 16-16s16 7.164 16 16c-.055 52.996-43.004 95.945-96 96m0 0" }, null, -1)
  ]));
}
const Se = { render: qe }, we = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  viewBox: "0 0 512.001 512.001"
};
function $e(e, t) {
  return l(), i("svg", we, t[0] || (t[0] = [
    r("path", { d: "M284.286 256.002 506.143 34.144c7.811-7.811 7.811-20.475 0-28.285s-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0s-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.94 19.94 0 0 0 14.143 5.857 19.94 19.94 0 0 0 14.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285z" }, null, -1)
  ]));
}
const Ue = { render: $e }, De = {
  key: 0,
  class: "qkb-board"
}, Ie = { class: "qkb-bot-bubble" }, Te = { class: "qkb-preload-image" }, Ae = {
  key: 0,
  class: "qkb-msg-avatar__img"
}, Ee = {
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
  setup(e, { emit: t }) {
    g((c) => ({
      12679521: o.value.windowZIndex,
      cd525d90: o.value.windowPosition.bottom || "auto",
      "4f4e26b1": o.value.windowPosition.right || "auto",
      "9eaf68ac": o.value.windowPosition.top || "auto",
      "468f3b14": o.value.windowPosition.left || "auto",
      "4080ee86": o.value.bubbleZIndex,
      "4bbaa01c": o.value.bubblePosition.bottom || "auto",
      "2382eb4d": o.value.bubblePosition.right || "auto",
      "553d8746": o.value.bubblePosition.top || "auto",
      "34a172f8": o.value.bubblePosition.left || "auto",
      "5fc606d5": o.value.bubbleBtnSize + "px",
      "233e772f": o.value.colorScheme,
      "50b3103d": o.value.textColor
    }));
    const s = e, a = t, b = k(!1), n = {
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
      inputDisablePlaceholder: null,
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
    }, o = _(() => ({ ...n, ...s.options })), f = _(() => {
      const c = [];
      return o.value.animation && c.push("qkb-bot-ui--animate"), c;
    }), v = () => {
      b.value || u();
    }, x = () => {
      b.value && u();
    }, u = () => {
      b.value = !b.value, b.value ? a("init") : a("destroy");
    }, q = (c) => {
      a("msg-send", c);
    }, S = (c) => {
      a("button-clicked", c);
    };
    return s.isOpen && (s.openDelay ? setTimeout(v, s.openDelay) : u()), P(() => {
      document.addEventListener(U.EVENT_OPEN, v), document.addEventListener(U.EVENT_CLOSE, x), document.addEventListener(U.EVENT_TOGGLE, u), I.on("button-clicked", S);
    }), V(() => {
      I.off("button-clicked", S);
    }), (c, ze) => (l(), i("div", {
      class: $(["qkb-bot-ui", f.value])
    }, [
      B(T, { name: "qkb-fadeUp" }, {
        default: p(() => [
          b.value ? (l(), i("div", De, [
            B(Z, {
              "bot-title": o.value.botTitle,
              "color-scheme": o.value.colorScheme,
              "text-color": o.value.textColor,
              onCloseBot: u
            }, {
              header: p(() => [
                d(c.$slots, "header", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["bot-title", "color-scheme", "text-color"]),
            B(ge, {
              "bot-typing": e.botTyping,
              "main-data": e.messages,
              "board-content-bg": o.value.boardContentBg,
              "bot-avatar-size": o.value.botAvatarSize,
              "bot-avatar-img": o.value.botAvatarImg,
              "msg-bubble-bg-bot": o.value.msgBubbleBgBot,
              "msg-bubble-color-bot": o.value.msgBubbleColorBot,
              "msg-bubble-bg-user": o.value.msgBubbleBgUser,
              "msg-bubble-color-user": o.value.msgBubbleColorUser
            }, {
              botTyping: p(() => [
                d(c.$slots, "botTyping", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["bot-typing", "main-data", "board-content-bg", "bot-avatar-size", "bot-avatar-img", "msg-bubble-bg-bot", "msg-bubble-color-bot", "msg-bubble-bg-user", "msg-bubble-color-user"]),
            B(_e, {
              "input-disable": e.inputDisable,
              "input-placeholder": o.value.inputPlaceholder,
              "input-disable-placeholder": o.value.inputDisablePlaceholder,
              "input-disable-bg": o.value.inputDisableBg,
              "msg-bubble-bg-user": o.value.msgBubbleBgUser,
              onMsgSend: q
            }, {
              actions: p(() => [
                d(c.$slots, "actions", {}, void 0, !0)
              ]),
              sendButton: p(() => [
                d(c.$slots, "sendButton", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["input-disable", "input-placeholder", "input-disable-placeholder", "input-disable-bg", "msg-bubble-bg-user"])
          ])) : y("", !0)
        ]),
        _: 3
      }),
      r("div", Ie, [
        r("button", {
          class: "qkb-bubble-btn",
          onClick: u
        }, [
          d(c.$slots, "bubbleButton", {}, () => [
            B(T, { name: "qkb-scaleUp" }, {
              default: p(() => [
                b.value ? (l(), C(w(D(Ue)), {
                  key: "2",
                  class: "qkb-bubble-btn-icon qkb-bubble-btn-icon--close"
                })) : (l(), C(w(D(Se)), {
                  key: "1",
                  class: "qkb-bubble-btn-icon"
                }))
              ]),
              _: 1
            })
          ], !0)
        ])
      ]),
      r("div", Te, [
        o.value.botAvatarImg ? (l(), i("div", Ae)) : y("", !0)
      ])
    ], 2));
  }
}, Me = /* @__PURE__ */ m(Ee, [["__scopeId", "data-v-b60df9e6"]]), Oe = {
  install(e, t) {
    e.component("VueBotUI", Me);
  }
};
export {
  Me as VueBotUI,
  Oe as default
};
