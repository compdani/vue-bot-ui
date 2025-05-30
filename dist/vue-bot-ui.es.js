import { useCssVars as m, createElementBlock as n, openBlock as a, renderSlot as d, createElementVNode as u, toDisplayString as h, ref as k, Fragment as U, renderList as I, normalizeClass as w, computed as x, createCommentVNode as y, createBlock as C, resolveDynamicComponent as S, createStaticVNode as z, watch as A, nextTick as E, createVNode as p, onMounted as M, withDirectives as P, vModelText as O, unref as D, Transition as T, withCtx as B } from "vue";
const $ = {
  EVENT_OPEN: "botui-open",
  EVENT_CLOSE: "botui-close",
  EVENT_TOGGLE: "botui-toggle"
}, f = (e, s) => {
  const l = e.__vccOpts || e;
  for (const [r, o] of s)
    l[r] = o;
  return l;
}, N = { class: "qkb-board-header" }, L = { class: "qkb-board-header__title" }, V = {
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
    return m((s) => ({
      "899703c0": e.colorScheme,
      "989fc124": e.textColor
    })), (s, l) => (a(), n("div", N, [
      d(s.$slots, "header", {}, () => [
        u("div", L, h(e.botTitle), 1)
      ], !0)
    ]));
  }
}, H = /* @__PURE__ */ f(V, [["__scopeId", "data-v-d4de3b4f"]]), j = { class: "qkb-msg-bubble-component qkb-msg-bubble-component--single-text" }, G = { class: "qkb-msg-bubble-component__text" }, Z = {
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
    return m((s) => ({
      bb7eabf4: e.isUserMessage ? e.msgBubbleBgUser : e.msgBubbleBgBot,
      "448759d8": e.isUserMessage ? e.msgBubbleColorUser : e.msgBubbleColorBot
    })), (s, l) => (a(), n("div", j, [
      u("div", G, h(e.mainData.text), 1)
    ]));
  }
}, K = /* @__PURE__ */ f(Z, [["__scopeId", "data-v-e044f48b"]]), F = { class: "qkb-msg-bubble-component qkb-msg-bubble-component--button-options" }, J = { class: "qkb-msg-bubble-component__text" }, Q = { class: "qkb-msg-bubble-component__options-wrapper" }, R = ["onClick"], W = ["href"], X = {
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
    m((o) => ({
      f1171a66: e.msgBubbleBgBot,
      "5efa2bf9": e.msgBubbleColorBot,
      67229785: e.msgBubbleBgUser,
      ff57f84e: e.msgBubbleColorUser
    }));
    const s = k(null), l = (o) => {
      if (s.value = o.value, r(o)) {
        o.onClick(o.value);
        return;
      }
      console.log("Error: option.onClick is not a function");
    }, r = (o) => !!(typeof o == "object" && o.onClick);
    return (o, i) => (a(), n("div", F, [
      u("div", J, h(e.mainData.text), 1),
      u("div", Q, [
        (a(!0), n(U, null, I(e.mainData.options, (t, g) => (a(), n("div", {
          key: g,
          class: w([{ active: s.value === t.value }, "qkb-mb-button-options__item"])
        }, [
          r(t) ? (a(), n("button", {
            key: 0,
            class: "qkb-mb-button-options__btn",
            onClick: (v) => l(t)
          }, [
            u("span", null, h(t.text), 1)
          ], 8, R)) : (a(), n("a", {
            key: 1,
            href: t.value,
            target: "_blank",
            class: "qkb-mb-button-options__btn qkb-mb-button-options__url"
          }, [
            u("span", null, h(t.text), 1)
          ], 8, W))
        ], 2))), 128))
      ])
    ]));
  }
}, Y = /* @__PURE__ */ f(X, [["__scopeId", "data-v-100fccf3"]]), ee = {
  key: 0,
  class: "qkb-msg-avatar"
}, te = {
  key: 2,
  class: "qkb-msg-bubble__time"
}, oe = {
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
    m((o) => ({
      "4aaf0702": e.botAvatarSize + "px",
      "4fa00e38": "url(" + e.botAvatarImg + ")"
    }));
    const s = e, l = x(
      () => s.message.agent === "bot" ? "qkb-msg-bubble--bot" : "qkb-msg-bubble--user"
    ), r = x(() => {
      switch (s.message.type) {
        case "button":
          return Y;
        default:
          return K;
      }
    });
    return (o, i) => (a(), n("div", {
      class: w(["qkb-msg-bubble", l.value])
    }, [
      e.message.agent === "bot" ? (a(), n("div", ee, i[0] || (i[0] = [
        u("div", { class: "qkb-msg-avatar__img" }, " ", -1)
      ]))) : y("", !0),
      r.value ? (a(), C(S(r.value), {
        key: 1,
        "main-data": e.message,
        "msg-bubble-bg-bot": e.msgBubbleBgBot,
        "msg-bubble-color-bot": e.msgBubbleColorBot,
        "msg-bubble-bg-user": e.msgBubbleBgUser,
        "msg-bubble-color-user": e.msgBubbleColorUser,
        "is-user-message": e.message.agent === "user"
      }, null, 8, ["main-data", "msg-bubble-bg-bot", "msg-bubble-color-bot", "msg-bubble-bg-user", "msg-bubble-color-user", "is-user-message"])) : y("", !0),
      e.message.createdAt ? (a(), n("div", te, h(e.message.createdAt), 1)) : y("", !0)
    ], 2));
  }
}, se = /* @__PURE__ */ f(oe, [["__scopeId", "data-v-9c39555b"]]), ae = { class: "qkb-msg-bubble qkb-msg-bubble--bot" }, be = {
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
    return m((s) => ({
      "4d54dd48": e.botAvatarSize + "px",
      "4ca3d3fb": "url(" + e.botAvatarImg + ")",
      "5040f4b1": e.msgBubbleBgBot,
      e48ca0d6: e.msgBubbleColorBot
    })), (s, l) => (a(), n("div", ae, l[0] || (l[0] = [
      z('<div class="qkb-msg-avatar" data-v-e819e473><div class="qkb-msg-avatar__img" data-v-e819e473> </div></div><div class="qkb-msg-bubble-component qkb-msg-bubble-component--typing" data-v-e819e473><div class="qkb-msg-bubble-component__text" data-v-e819e473><div class="qkb-msg-bubble__typing-indicator" data-v-e819e473><span data-v-e819e473></span><span data-v-e819e473></span><span data-v-e819e473></span></div></div></div>', 2)
    ])));
  }
}, le = /* @__PURE__ */ f(be, [["__scopeId", "data-v-e819e473"]]), ne = {
  key: 0,
  class: "qkb-board-content__bot-typing"
}, ue = {
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
    m((i) => ({
      ba1b7fe8: e.boardContentBg
    }));
    const s = e, l = k(null), r = k(null), o = () => {
      const i = l.value, t = r.value.offsetHeight;
      i.scrollTop = t;
    };
    return A(() => s.mainData, () => {
      E(() => {
        o();
      });
    }), (i, t) => (a(), n("div", {
      class: "qkb-board-content",
      ref_key: "boardContent",
      ref: l
    }, [
      u("div", {
        class: "qkb-board-content__bubbles",
        ref_key: "boardBubbles",
        ref: r
      }, [
        (a(!0), n(U, null, I(e.mainData, (g, v) => (a(), C(se, {
          key: v,
          message: g,
          "bot-avatar-size": e.botAvatarSize,
          "bot-avatar-img": e.botAvatarImg,
          "msg-bubble-bg-bot": e.msgBubbleBgBot,
          "msg-bubble-color-bot": e.msgBubbleColorBot,
          "msg-bubble-bg-user": e.msgBubbleBgUser,
          "msg-bubble-color-user": e.msgBubbleColorUser
        }, null, 8, ["message", "bot-avatar-size", "bot-avatar-img", "msg-bubble-bg-bot", "msg-bubble-color-bot", "msg-bubble-bg-user", "msg-bubble-color-user"]))), 128)),
        e.botTyping ? (a(), n("div", ne, [
          d(i.$slots, "botTyping", {}, () => [
            p(le, {
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
}, ie = /* @__PURE__ */ f(ue, [["__scopeId", "data-v-946dc6df"]]), re = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  viewBox: "0 0 488.721 488.721"
};
function ce(e, s) {
  return a(), n("svg", re, s[0] || (s[0] = [
    u("path", { d: "M483.589 222.024a51.2 51.2 0 0 0-23.762-23.762L73.522 11.331C48.074-.998 17.451 9.638 5.122 35.086A51.2 51.2 0 0 0 3.669 76.44l67.174 167.902L3.669 412.261c-10.463 26.341 2.409 56.177 28.75 66.639a51.3 51.3 0 0 0 18.712 3.624c7.754 0 15.408-1.75 22.391-5.12l386.304-186.982c25.45-12.326 36.089-42.949 23.763-68.398M58.657 446.633c-8.484 4.107-18.691.559-22.798-7.925a17.07 17.07 0 0 1-.481-13.784l65.399-163.516h340.668zm42.121-219.358L35.379 63.759a16.64 16.64 0 0 1 4.215-18.773 16.54 16.54 0 0 1 19.063-2.884l382.788 185.173z" }, null, -1)
  ]));
}
const de = { render: ce }, ge = { class: "qkb-board-action__wrapper" }, me = { class: "qkb-board-action__msg-box" }, fe = ["disabled", "placeholder"], ve = { class: "qkb-board-action__extra" }, Be = ["disabled"], pe = {
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
  setup(e, { emit: s }) {
    m((b) => ({
      dd375256: e.inputDisableBg,
      "6e13778b": e.msgBubbleBgUser
    }));
    const l = e, r = s, o = k(null), i = k(null), t = x(() => {
      const b = [];
      return l.inputDisable && b.push("qkb-board-action--disabled"), o.value && b.push("qkb-board-action--typing"), b;
    });
    M(() => {
      var b;
      l.inputDisable || (b = i.value) == null || b.focus(), _();
    });
    const g = () => {
      var b;
      o.value && !l.inputDisable && (r("msg-send", { text: o.value }), o.value = null, (b = i.value) == null || b.focus());
    }, v = (b) => {
      if (b.key === "Enter")
        if (b.shiftKey)
          b.preventDefault(), g();
        else
          return;
    }, _ = () => {
      i.value && (i.value.style.height = "auto", i.value.style.height = i.value.scrollHeight + "px");
    };
    return A(o, () => {
      E(() => {
        _();
      });
    }), (b, q) => (a(), n("div", {
      class: w(["qkb-board-action", t.value])
    }, [
      u("div", ge, [
        u("div", me, [
          P(u("textarea", {
            ref_key: "qkbMessageInput",
            ref: i,
            "onUpdate:modelValue": q[0] || (q[0] = (c) => o.value = c),
            class: "qkb-board-action__input",
            disabled: e.inputDisable,
            placeholder: e.inputDisablePlaceholder && e.inputDisable ? e.inputDisablePlaceholder : e.inputPlaceholder,
            onKeydown: v,
            onInput: _,
            rows: "1"
          }, null, 40, fe), [
            [O, o.value]
          ])
        ]),
        u("div", ve, [
          d(b.$slots, "actions", {}, void 0, !0),
          u("button", {
            class: "qkb-action-item qkb-action-item--send",
            onClick: g,
            disabled: !o.value || e.inputDisable
          }, [
            d(b.$slots, "sendButton", {}, () => [
              (a(), C(S(D(de)), { class: "qkb-action-icon qkb-action-icon--send" }))
            ], !0)
          ], 8, Be)
        ])
      ])
    ], 2));
  }
}, he = /* @__PURE__ */ f(pe, [["__scopeId", "data-v-f2b47962"]]), ye = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "511pt",
  height: "511pt",
  viewBox: "1 -31 512 511"
};
function ke(e, s) {
  return a(), n("svg", ye, s[0] || (s[0] = [
    u("path", { d: "M128 448.5c-8.836 0-16-7.164-16-16v-80H48c-26.512 0-48-21.492-48-48v-256C0 21.988 21.488.5 48 .5h416c26.512 0 48 21.488 48 48v256c0 26.508-21.488 48-48 48H230.625l-91.312 91.313c-3 3-7.07 4.687-11.313 4.687m-80-416c-8.836 0-16 7.164-16 16v256c0 8.836 7.164 16 16 16h80c8.836 0 16 7.164 16 16v57.375l68.688-68.687c3-3 7.07-4.688 11.312-4.688h240c8.836 0 16-7.164 16-16v-256c0-8.836-7.164-16-16-16zm0 0" }, null, -1),
    u("path", { d: "M160 144.5c-17.672 0-32-14.328-32-32s14.328-32 32-32 32 14.328 32 32-14.328 32-32 32M352 144.5c-17.672 0-32-14.328-32-32s14.328-32 32-32 32 14.328 32 32-14.328 32-32 32M256 288.5c-52.996-.05-95.945-43.004-96-96 0-8.836 7.164-16 16-16s16 7.164 16 16c0 35.348 28.652 64 64 64s64-28.652 64-64c0-8.836 7.164-16 16-16s16 7.164 16 16c-.055 52.996-43.004 95.945-96 96m0 0" }, null, -1)
  ]));
}
const _e = { render: ke }, xe = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  viewBox: "0 0 512.001 512.001"
};
function Ce(e, s) {
  return a(), n("svg", xe, s[0] || (s[0] = [
    u("path", { d: "M284.286 256.002 506.143 34.144c7.811-7.811 7.811-20.475 0-28.285s-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0s-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.94 19.94 0 0 0 14.143 5.857 19.94 19.94 0 0 0 14.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285z" }, null, -1)
  ]));
}
const qe = { render: Ce }, Se = {
  key: 0,
  class: "qkb-board"
}, we = { class: "qkb-bot-bubble" }, $e = { class: "qkb-preload-image" }, De = {
  key: 0,
  class: "qkb-msg-avatar__img"
}, Te = {
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
  emits: ["init", "destroy", "msg-send"],
  setup(e, { emit: s }) {
    m((c) => ({
      "9da131c2": t.value.windowZIndex,
      "5c73db0c": t.value.windowPosition.bottom || "auto",
      d99e95a2: t.value.windowPosition.right || "auto",
      cf8f3cb0: t.value.windowPosition.top || "auto",
      "5101e4d6": t.value.windowPosition.left || "auto",
      "7e875abb": t.value.bubbleZIndex,
      f7ac3d44: t.value.bubblePosition.bottom || "auto",
      "676579cb": t.value.bubblePosition.right || "auto",
      "3ccd9d44": t.value.bubblePosition.top || "auto",
      "3f141cba": t.value.bubblePosition.left || "auto",
      "4212fad3": t.value.bubbleBtnSize + "px",
      "07556d71": t.value.colorScheme,
      "7192a202": t.value.textColor
    }));
    const l = e, r = s, o = k(!1), i = {
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
    }, t = x(() => ({ ...i, ...l.options })), g = x(() => {
      const c = [];
      return t.value.animation && c.push("qkb-bot-ui--animate"), c;
    }), v = () => {
      o.value || b();
    }, _ = () => {
      o.value && b();
    }, b = () => {
      o.value = !o.value, o.value ? r("init") : r("destroy");
    }, q = (c) => {
      r("msg-send", c);
    };
    return l.isOpen && (l.openDelay ? setTimeout(v, l.openDelay) : b()), M(() => {
      document.addEventListener($.EVENT_OPEN, v), document.addEventListener($.EVENT_CLOSE, _), document.addEventListener($.EVENT_TOGGLE, b);
    }), (c, Ie) => (a(), n("div", {
      class: w(["qkb-bot-ui", g.value])
    }, [
      p(T, { name: "qkb-fadeUp" }, {
        default: B(() => [
          o.value ? (a(), n("div", Se, [
            p(H, {
              "bot-title": t.value.botTitle,
              "color-scheme": t.value.colorScheme,
              "text-color": t.value.textColor,
              onCloseBot: b
            }, {
              header: B(() => [
                d(c.$slots, "header", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["bot-title", "color-scheme", "text-color"]),
            p(ie, {
              "bot-typing": e.botTyping,
              "main-data": e.messages,
              "board-content-bg": t.value.boardContentBg,
              "bot-avatar-size": t.value.botAvatarSize,
              "bot-avatar-img": t.value.botAvatarImg,
              "msg-bubble-bg-bot": t.value.msgBubbleBgBot,
              "msg-bubble-color-bot": t.value.msgBubbleColorBot,
              "msg-bubble-bg-user": t.value.msgBubbleBgUser,
              "msg-bubble-color-user": t.value.msgBubbleColorUser
            }, {
              botTyping: B(() => [
                d(c.$slots, "botTyping", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["bot-typing", "main-data", "board-content-bg", "bot-avatar-size", "bot-avatar-img", "msg-bubble-bg-bot", "msg-bubble-color-bot", "msg-bubble-bg-user", "msg-bubble-color-user"]),
            p(he, {
              "input-disable": e.inputDisable,
              "input-placeholder": t.value.inputPlaceholder,
              "input-disable-placeholder": t.value.inputDisablePlaceholder,
              "input-disable-bg": t.value.inputDisableBg,
              "msg-bubble-bg-user": t.value.msgBubbleBgUser,
              onMsgSend: q
            }, {
              actions: B(() => [
                d(c.$slots, "actions", {}, void 0, !0)
              ]),
              sendButton: B(() => [
                d(c.$slots, "sendButton", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["input-disable", "input-placeholder", "input-disable-placeholder", "input-disable-bg", "msg-bubble-bg-user"])
          ])) : y("", !0)
        ]),
        _: 3
      }),
      u("div", we, [
        u("button", {
          class: "qkb-bubble-btn",
          onClick: b
        }, [
          d(c.$slots, "bubbleButton", {}, () => [
            p(T, { name: "qkb-scaleUp" }, {
              default: B(() => [
                o.value ? (a(), C(S(D(qe)), {
                  key: "2",
                  class: "qkb-bubble-btn-icon qkb-bubble-btn-icon--close"
                })) : (a(), C(S(D(_e)), {
                  key: "1",
                  class: "qkb-bubble-btn-icon"
                }))
              ]),
              _: 1
            })
          ], !0)
        ])
      ]),
      u("div", $e, [
        t.value.botAvatarImg ? (a(), n("div", De)) : y("", !0)
      ])
    ], 2));
  }
}, Ue = /* @__PURE__ */ f(Te, [["__scopeId", "data-v-cb88ad08"]]), Ee = {
  install(e, s) {
    e.component("VueBotUI", Ue);
  }
};
export {
  Ue as VueBotUI,
  Ee as default
};
