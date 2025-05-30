import { useCssVars as f, createElementBlock as u, openBlock as a, renderSlot as g, createElementVNode as i, toDisplayString as k, ref as B, onMounted as T, Fragment as I, renderList as A, normalizeClass as w, computed as _, createCommentVNode as x, createBlock as C, resolveDynamicComponent as S, createStaticVNode as z, watch as E, nextTick as M, createVNode as y, withDirectives as P, vModelText as O, unref as D, Transition as U, withCtx as h } from "vue";
const $ = {
  EVENT_OPEN: "botui-open",
  EVENT_CLOSE: "botui-close",
  EVENT_TOGGLE: "botui-toggle"
}, v = (e, o) => {
  const s = e.__vccOpts || e;
  for (const [r, b] of o)
    s[r] = b;
  return s;
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
    return f((o) => ({
      "899703c0": e.colorScheme,
      "989fc124": e.textColor
    })), (o, s) => (a(), u("div", N, [
      g(o.$slots, "header", {}, () => [
        i("div", L, k(e.botTitle), 1)
      ], !0)
    ]));
  }
}, H = /* @__PURE__ */ v(V, [["__scopeId", "data-v-d4de3b4f"]]), j = { class: "qkb-msg-bubble-component qkb-msg-bubble-component--single-text" }, G = { class: "qkb-msg-bubble-component__text" }, Z = {
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
    return f((o) => ({
      bb7eabf4: e.isUserMessage ? e.msgBubbleBgUser : e.msgBubbleBgBot,
      "448759d8": e.isUserMessage ? e.msgBubbleColorUser : e.msgBubbleColorBot
    })), (o, s) => (a(), u("div", j, [
      i("div", G, k(e.mainData.text), 1)
    ]));
  }
}, K = /* @__PURE__ */ v(Z, [["__scopeId", "data-v-e044f48b"]]), F = { class: "qkb-msg-bubble-component qkb-msg-bubble-component--button-options" }, J = { class: "qkb-msg-bubble-component__text" }, Q = { class: "qkb-msg-bubble-component__options-wrapper" }, R = ["onClick"], W = ["href"], X = {
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
    f((n) => ({
      "4d816267": e.msgBubbleBgBot,
      "8b4e43c2": e.msgBubbleColorBot,
      "62b39b2b": e.msgBubbleBgUser,
      de68d31a: e.msgBubbleColorUser
    }));
    const o = B(!1);
    T(() => {
      o.value = typeof s.mainData.onClick == "function";
    });
    const s = e, r = B(null), b = (n) => {
      r.value = n.value, o.value && s.mainData.onClick(n);
    };
    return (n, t) => (a(), u("div", F, [
      i("div", J, k(e.mainData.text), 1),
      i("div", Q, [
        (a(!0), u(I, null, A(e.mainData.options, (d, m) => (a(), u("div", {
          key: m,
          class: w([{ active: r.value === d.value }, "qkb-mb-button-options__item"])
        }, [
          o.value ? (a(), u("button", {
            key: 0,
            class: "qkb-mb-button-options__btn",
            onClick: (p) => b(d)
          }, [
            i("span", null, k(d.text), 1)
          ], 8, R)) : (a(), u("a", {
            key: 1,
            href: d.value,
            target: "_blank",
            class: "qkb-mb-button-options__btn qkb-mb-button-options__url"
          }, [
            i("span", null, k(d.text), 1)
          ], 8, W))
        ], 2))), 128))
      ])
    ]));
  }
}, Y = /* @__PURE__ */ v(X, [["__scopeId", "data-v-04d638ef"]]), ee = {
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
    f((b) => ({
      "4aaf0702": e.botAvatarSize + "px",
      "4fa00e38": "url(" + e.botAvatarImg + ")"
    }));
    const o = e, s = _(
      () => o.message.agent === "bot" ? "qkb-msg-bubble--bot" : "qkb-msg-bubble--user"
    ), r = _(() => {
      switch (o.message.type) {
        case "button":
          return Y;
        default:
          return K;
      }
    });
    return (b, n) => (a(), u("div", {
      class: w(["qkb-msg-bubble", s.value])
    }, [
      e.message.agent === "bot" ? (a(), u("div", ee, n[0] || (n[0] = [
        i("div", { class: "qkb-msg-avatar__img" }, " ", -1)
      ]))) : x("", !0),
      r.value ? (a(), C(S(r.value), {
        key: 1,
        "main-data": e.message,
        "msg-bubble-bg-bot": e.msgBubbleBgBot,
        "msg-bubble-color-bot": e.msgBubbleColorBot,
        "msg-bubble-bg-user": e.msgBubbleBgUser,
        "msg-bubble-color-user": e.msgBubbleColorUser,
        "is-user-message": e.message.agent === "user"
      }, null, 8, ["main-data", "msg-bubble-bg-bot", "msg-bubble-color-bot", "msg-bubble-bg-user", "msg-bubble-color-user", "is-user-message"])) : x("", !0),
      e.message.createdAt ? (a(), u("div", te, k(e.message.createdAt), 1)) : x("", !0)
    ], 2));
  }
}, ae = /* @__PURE__ */ v(oe, [["__scopeId", "data-v-9c39555b"]]), se = { class: "qkb-msg-bubble qkb-msg-bubble--bot" }, be = {
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
    return f((o) => ({
      "4d54dd48": e.botAvatarSize + "px",
      "4ca3d3fb": "url(" + e.botAvatarImg + ")",
      "5040f4b1": e.msgBubbleBgBot,
      e48ca0d6: e.msgBubbleColorBot
    })), (o, s) => (a(), u("div", se, s[0] || (s[0] = [
      z('<div class="qkb-msg-avatar" data-v-e819e473><div class="qkb-msg-avatar__img" data-v-e819e473> </div></div><div class="qkb-msg-bubble-component qkb-msg-bubble-component--typing" data-v-e819e473><div class="qkb-msg-bubble-component__text" data-v-e819e473><div class="qkb-msg-bubble__typing-indicator" data-v-e819e473><span data-v-e819e473></span><span data-v-e819e473></span><span data-v-e819e473></span></div></div></div>', 2)
    ])));
  }
}, le = /* @__PURE__ */ v(be, [["__scopeId", "data-v-e819e473"]]), ne = {
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
    f((n) => ({
      ba1b7fe8: e.boardContentBg
    }));
    const o = e, s = B(null), r = B(null), b = () => {
      const n = s.value, t = r.value.offsetHeight;
      n.scrollTop = t;
    };
    return E(() => o.mainData, () => {
      M(() => {
        b();
      });
    }), (n, t) => (a(), u("div", {
      class: "qkb-board-content",
      ref_key: "boardContent",
      ref: s
    }, [
      i("div", {
        class: "qkb-board-content__bubbles",
        ref_key: "boardBubbles",
        ref: r
      }, [
        (a(!0), u(I, null, A(e.mainData, (d, m) => (a(), C(ae, {
          key: m,
          message: d,
          "bot-avatar-size": e.botAvatarSize,
          "bot-avatar-img": e.botAvatarImg,
          "msg-bubble-bg-bot": e.msgBubbleBgBot,
          "msg-bubble-color-bot": e.msgBubbleColorBot,
          "msg-bubble-bg-user": e.msgBubbleBgUser,
          "msg-bubble-color-user": e.msgBubbleColorUser
        }, null, 8, ["message", "bot-avatar-size", "bot-avatar-img", "msg-bubble-bg-bot", "msg-bubble-color-bot", "msg-bubble-bg-user", "msg-bubble-color-user"]))), 128)),
        e.botTyping ? (a(), u("div", ne, [
          g(n.$slots, "botTyping", {}, () => [
            y(le, {
              "bot-avatar-size": e.botAvatarSize,
              "bot-avatar-img": e.botAvatarImg,
              "msg-bubble-bg-bot": e.msgBubbleBgBot,
              "msg-bubble-color-bot": e.msgBubbleColorBot
            }, null, 8, ["bot-avatar-size", "bot-avatar-img", "msg-bubble-bg-bot", "msg-bubble-color-bot"])
          ], !0)
        ])) : x("", !0)
      ], 512)
    ], 512));
  }
}, ie = /* @__PURE__ */ v(ue, [["__scopeId", "data-v-946dc6df"]]), re = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  viewBox: "0 0 488.721 488.721"
};
function ce(e, o) {
  return a(), u("svg", re, o[0] || (o[0] = [
    i("path", { d: "M483.589 222.024a51.2 51.2 0 0 0-23.762-23.762L73.522 11.331C48.074-.998 17.451 9.638 5.122 35.086A51.2 51.2 0 0 0 3.669 76.44l67.174 167.902L3.669 412.261c-10.463 26.341 2.409 56.177 28.75 66.639a51.3 51.3 0 0 0 18.712 3.624c7.754 0 15.408-1.75 22.391-5.12l386.304-186.982c25.45-12.326 36.089-42.949 23.763-68.398M58.657 446.633c-8.484 4.107-18.691.559-22.798-7.925a17.07 17.07 0 0 1-.481-13.784l65.399-163.516h340.668zm42.121-219.358L35.379 63.759a16.64 16.64 0 0 1 4.215-18.773 16.54 16.54 0 0 1 19.063-2.884l382.788 185.173z" }, null, -1)
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
  setup(e, { emit: o }) {
    f((l) => ({
      dd375256: e.inputDisableBg,
      "6e13778b": e.msgBubbleBgUser
    }));
    const s = e, r = o, b = B(null), n = B(null), t = _(() => {
      const l = [];
      return s.inputDisable && l.push("qkb-board-action--disabled"), b.value && l.push("qkb-board-action--typing"), l;
    });
    T(() => {
      var l;
      s.inputDisable || (l = n.value) == null || l.focus(), p();
    });
    const d = () => {
      var l;
      b.value && !s.inputDisable && (r("msg-send", { text: b.value }), b.value = null, (l = n.value) == null || l.focus());
    }, m = (l) => {
      if (l.key === "Enter")
        if (l.shiftKey)
          l.preventDefault(), d();
        else
          return;
    }, p = () => {
      n.value && (n.value.style.height = "auto", n.value.style.height = n.value.scrollHeight + "px");
    };
    return E(b, () => {
      M(() => {
        p();
      });
    }), (l, q) => (a(), u("div", {
      class: w(["qkb-board-action", t.value])
    }, [
      i("div", ge, [
        i("div", me, [
          P(i("textarea", {
            ref_key: "qkbMessageInput",
            ref: n,
            "onUpdate:modelValue": q[0] || (q[0] = (c) => b.value = c),
            class: "qkb-board-action__input",
            disabled: e.inputDisable,
            placeholder: e.inputDisablePlaceholder && e.inputDisable ? e.inputDisablePlaceholder : e.inputPlaceholder,
            onKeydown: m,
            onInput: p,
            rows: "1"
          }, null, 40, fe), [
            [O, b.value]
          ])
        ]),
        i("div", ve, [
          g(l.$slots, "actions", {}, void 0, !0),
          i("button", {
            class: "qkb-action-item qkb-action-item--send",
            onClick: d,
            disabled: !b.value || e.inputDisable
          }, [
            g(l.$slots, "sendButton", {}, () => [
              (a(), C(S(D(de)), { class: "qkb-action-icon qkb-action-icon--send" }))
            ], !0)
          ], 8, Be)
        ])
      ])
    ], 2));
  }
}, he = /* @__PURE__ */ v(pe, [["__scopeId", "data-v-f2b47962"]]), ye = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "511pt",
  height: "511pt",
  viewBox: "1 -31 512 511"
};
function ke(e, o) {
  return a(), u("svg", ye, o[0] || (o[0] = [
    i("path", { d: "M128 448.5c-8.836 0-16-7.164-16-16v-80H48c-26.512 0-48-21.492-48-48v-256C0 21.988 21.488.5 48 .5h416c26.512 0 48 21.488 48 48v256c0 26.508-21.488 48-48 48H230.625l-91.312 91.313c-3 3-7.07 4.687-11.313 4.687m-80-416c-8.836 0-16 7.164-16 16v256c0 8.836 7.164 16 16 16h80c8.836 0 16 7.164 16 16v57.375l68.688-68.687c3-3 7.07-4.688 11.312-4.688h240c8.836 0 16-7.164 16-16v-256c0-8.836-7.164-16-16-16zm0 0" }, null, -1),
    i("path", { d: "M160 144.5c-17.672 0-32-14.328-32-32s14.328-32 32-32 32 14.328 32 32-14.328 32-32 32M352 144.5c-17.672 0-32-14.328-32-32s14.328-32 32-32 32 14.328 32 32-14.328 32-32 32M256 288.5c-52.996-.05-95.945-43.004-96-96 0-8.836 7.164-16 16-16s16 7.164 16 16c0 35.348 28.652 64 64 64s64-28.652 64-64c0-8.836 7.164-16 16-16s16 7.164 16 16c-.055 52.996-43.004 95.945-96 96m0 0" }, null, -1)
  ]));
}
const xe = { render: ke }, _e = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  viewBox: "0 0 512.001 512.001"
};
function Ce(e, o) {
  return a(), u("svg", _e, o[0] || (o[0] = [
    i("path", { d: "M284.286 256.002 506.143 34.144c7.811-7.811 7.811-20.475 0-28.285s-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0s-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.94 19.94 0 0 0 14.143 5.857 19.94 19.94 0 0 0 14.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285z" }, null, -1)
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
  setup(e, { emit: o }) {
    f((c) => ({
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
    const s = e, r = o, b = B(!1), n = {
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
    }, t = _(() => ({ ...n, ...s.options })), d = _(() => {
      const c = [];
      return t.value.animation && c.push("qkb-bot-ui--animate"), c;
    }), m = () => {
      b.value || l();
    }, p = () => {
      b.value && l();
    }, l = () => {
      b.value = !b.value, b.value ? r("init") : r("destroy");
    }, q = (c) => {
      r("msg-send", c);
    };
    return s.isOpen && (s.openDelay ? setTimeout(m, s.openDelay) : l()), T(() => {
      document.addEventListener($.EVENT_OPEN, m), document.addEventListener($.EVENT_CLOSE, p), document.addEventListener($.EVENT_TOGGLE, l);
    }), (c, Ie) => (a(), u("div", {
      class: w(["qkb-bot-ui", d.value])
    }, [
      y(U, { name: "qkb-fadeUp" }, {
        default: h(() => [
          b.value ? (a(), u("div", Se, [
            y(H, {
              "bot-title": t.value.botTitle,
              "color-scheme": t.value.colorScheme,
              "text-color": t.value.textColor,
              onCloseBot: l
            }, {
              header: h(() => [
                g(c.$slots, "header", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["bot-title", "color-scheme", "text-color"]),
            y(ie, {
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
              botTyping: h(() => [
                g(c.$slots, "botTyping", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["bot-typing", "main-data", "board-content-bg", "bot-avatar-size", "bot-avatar-img", "msg-bubble-bg-bot", "msg-bubble-color-bot", "msg-bubble-bg-user", "msg-bubble-color-user"]),
            y(he, {
              "input-disable": e.inputDisable,
              "input-placeholder": t.value.inputPlaceholder,
              "input-disable-placeholder": t.value.inputDisablePlaceholder,
              "input-disable-bg": t.value.inputDisableBg,
              "msg-bubble-bg-user": t.value.msgBubbleBgUser,
              onMsgSend: q
            }, {
              actions: h(() => [
                g(c.$slots, "actions", {}, void 0, !0)
              ]),
              sendButton: h(() => [
                g(c.$slots, "sendButton", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["input-disable", "input-placeholder", "input-disable-placeholder", "input-disable-bg", "msg-bubble-bg-user"])
          ])) : x("", !0)
        ]),
        _: 3
      }),
      i("div", we, [
        i("button", {
          class: "qkb-bubble-btn",
          onClick: l
        }, [
          g(c.$slots, "bubbleButton", {}, () => [
            y(U, { name: "qkb-scaleUp" }, {
              default: h(() => [
                b.value ? (a(), C(S(D(qe)), {
                  key: "2",
                  class: "qkb-bubble-btn-icon qkb-bubble-btn-icon--close"
                })) : (a(), C(S(D(xe)), {
                  key: "1",
                  class: "qkb-bubble-btn-icon"
                }))
              ]),
              _: 1
            })
          ], !0)
        ])
      ]),
      i("div", $e, [
        t.value.botAvatarImg ? (a(), u("div", De)) : x("", !0)
      ])
    ], 2));
  }
}, Ue = /* @__PURE__ */ v(Te, [["__scopeId", "data-v-cb88ad08"]]), Ee = {
  install(e, o) {
    e.component("VueBotUI", Ue);
  }
};
export {
  Ue as VueBotUI,
  Ee as default
};
