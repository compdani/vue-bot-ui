import { useCssVars as g, createElementBlock as u, openBlock as s, renderSlot as d, createElementVNode as i, toDisplayString as h, ref as k, Fragment as U, renderList as I, normalizeClass as w, computed as x, createCommentVNode as y, createBlock as C, resolveDynamicComponent as S, createStaticVNode as z, watch as A, nextTick as E, createVNode as p, onMounted as M, withDirectives as P, vModelText as O, unref as D, Transition as T, withCtx as B } from "vue";
const $ = {
  EVENT_OPEN: "botui-open",
  EVENT_CLOSE: "botui-close",
  EVENT_TOGGLE: "botui-toggle"
}, m = (e, o) => {
  const l = e.__vccOpts || e;
  for (const [r, n] of o)
    l[r] = n;
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
    return g((o) => ({
      "899703c0": e.colorScheme,
      "989fc124": e.textColor
    })), (o, l) => (s(), u("div", N, [
      d(o.$slots, "header", {}, () => [
        i("div", L, h(e.botTitle), 1)
      ], !0)
    ]));
  }
}, H = /* @__PURE__ */ m(V, [["__scopeId", "data-v-d4de3b4f"]]), j = { class: "qkb-msg-bubble-component qkb-msg-bubble-component--single-text" }, G = { class: "qkb-msg-bubble-component__text" }, Z = {
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
    return g((o) => ({
      bb7eabf4: e.isUserMessage ? e.msgBubbleBgUser : e.msgBubbleBgBot,
      "448759d8": e.isUserMessage ? e.msgBubbleColorUser : e.msgBubbleColorBot
    })), (o, l) => (s(), u("div", j, [
      i("div", G, h(e.mainData.text), 1)
    ]));
  }
}, K = /* @__PURE__ */ m(Z, [["__scopeId", "data-v-e044f48b"]]), F = { class: "qkb-msg-bubble-component qkb-msg-bubble-component--button-options" }, J = { class: "qkb-msg-bubble-component__text" }, Q = { class: "qkb-msg-bubble-component__options-wrapper" }, R = ["onClick"], W = ["href"], X = {
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
    g((r) => ({
      "6a9bd88a": e.msgBubbleBgBot,
      "3fc4bc4b": e.msgBubbleColorBot,
      e8cdd752: e.msgBubbleBgUser,
      "8e490472": e.msgBubbleColorUser
    }));
    const o = k(null), l = (r) => !!(typeof r == "object" && r.onClick);
    return (r, n) => (s(), u("div", F, [
      i("div", J, h(e.mainData.text), 1),
      i("div", Q, [
        (s(!0), u(U, null, I(e.mainData.options, (a, t) => (s(), u("div", {
          key: t,
          class: w([{ active: o.value === a.value }, "qkb-mb-button-options__item"])
        }, [
          l(a) ? (s(), u("button", {
            key: 0,
            class: "qkb-mb-button-options__btn",
            onClick: (f) => a.onClick(a.value)
          }, [
            i("span", null, h(a.text), 1)
          ], 8, R)) : (s(), u("a", {
            key: 1,
            href: a.value,
            target: "_blank",
            class: "qkb-mb-button-options__btn qkb-mb-button-options__url"
          }, [
            i("span", null, h(a.text), 1)
          ], 8, W))
        ], 2))), 128))
      ])
    ]));
  }
}, Y = /* @__PURE__ */ m(X, [["__scopeId", "data-v-dd76e5ab"]]), ee = {
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
    g((n) => ({
      "4aaf0702": e.botAvatarSize + "px",
      "4fa00e38": "url(" + e.botAvatarImg + ")"
    }));
    const o = e, l = x(
      () => o.message.agent === "bot" ? "qkb-msg-bubble--bot" : "qkb-msg-bubble--user"
    ), r = x(() => {
      switch (o.message.type) {
        case "button":
          return Y;
        default:
          return K;
      }
    });
    return (n, a) => (s(), u("div", {
      class: w(["qkb-msg-bubble", l.value])
    }, [
      e.message.agent === "bot" ? (s(), u("div", ee, a[0] || (a[0] = [
        i("div", { class: "qkb-msg-avatar__img" }, " ", -1)
      ]))) : y("", !0),
      r.value ? (s(), C(S(r.value), {
        key: 1,
        "main-data": e.message,
        "msg-bubble-bg-bot": e.msgBubbleBgBot,
        "msg-bubble-color-bot": e.msgBubbleColorBot,
        "msg-bubble-bg-user": e.msgBubbleBgUser,
        "msg-bubble-color-user": e.msgBubbleColorUser,
        "is-user-message": e.message.agent === "user"
      }, null, 8, ["main-data", "msg-bubble-bg-bot", "msg-bubble-color-bot", "msg-bubble-bg-user", "msg-bubble-color-user", "is-user-message"])) : y("", !0),
      e.message.createdAt ? (s(), u("div", te, h(e.message.createdAt), 1)) : y("", !0)
    ], 2));
  }
}, se = /* @__PURE__ */ m(oe, [["__scopeId", "data-v-9c39555b"]]), ae = { class: "qkb-msg-bubble qkb-msg-bubble--bot" }, be = {
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
    return g((o) => ({
      "4d54dd48": e.botAvatarSize + "px",
      "4ca3d3fb": "url(" + e.botAvatarImg + ")",
      "5040f4b1": e.msgBubbleBgBot,
      e48ca0d6: e.msgBubbleColorBot
    })), (o, l) => (s(), u("div", ae, l[0] || (l[0] = [
      z('<div class="qkb-msg-avatar" data-v-e819e473><div class="qkb-msg-avatar__img" data-v-e819e473> </div></div><div class="qkb-msg-bubble-component qkb-msg-bubble-component--typing" data-v-e819e473><div class="qkb-msg-bubble-component__text" data-v-e819e473><div class="qkb-msg-bubble__typing-indicator" data-v-e819e473><span data-v-e819e473></span><span data-v-e819e473></span><span data-v-e819e473></span></div></div></div>', 2)
    ])));
  }
}, le = /* @__PURE__ */ m(be, [["__scopeId", "data-v-e819e473"]]), ne = {
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
    g((a) => ({
      ba1b7fe8: e.boardContentBg
    }));
    const o = e, l = k(null), r = k(null), n = () => {
      const a = l.value, t = r.value.offsetHeight;
      a.scrollTop = t;
    };
    return A(() => o.mainData, () => {
      E(() => {
        n();
      });
    }), (a, t) => (s(), u("div", {
      class: "qkb-board-content",
      ref_key: "boardContent",
      ref: l
    }, [
      i("div", {
        class: "qkb-board-content__bubbles",
        ref_key: "boardBubbles",
        ref: r
      }, [
        (s(!0), u(U, null, I(e.mainData, (f, v) => (s(), C(se, {
          key: v,
          message: f,
          "bot-avatar-size": e.botAvatarSize,
          "bot-avatar-img": e.botAvatarImg,
          "msg-bubble-bg-bot": e.msgBubbleBgBot,
          "msg-bubble-color-bot": e.msgBubbleColorBot,
          "msg-bubble-bg-user": e.msgBubbleBgUser,
          "msg-bubble-color-user": e.msgBubbleColorUser
        }, null, 8, ["message", "bot-avatar-size", "bot-avatar-img", "msg-bubble-bg-bot", "msg-bubble-color-bot", "msg-bubble-bg-user", "msg-bubble-color-user"]))), 128)),
        e.botTyping ? (s(), u("div", ne, [
          d(a.$slots, "botTyping", {}, () => [
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
}, ie = /* @__PURE__ */ m(ue, [["__scopeId", "data-v-946dc6df"]]), re = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  viewBox: "0 0 488.721 488.721"
};
function ce(e, o) {
  return s(), u("svg", re, o[0] || (o[0] = [
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
    g((b) => ({
      dd375256: e.inputDisableBg,
      "6e13778b": e.msgBubbleBgUser
    }));
    const l = e, r = o, n = k(null), a = k(null), t = x(() => {
      const b = [];
      return l.inputDisable && b.push("qkb-board-action--disabled"), n.value && b.push("qkb-board-action--typing"), b;
    });
    M(() => {
      var b;
      l.inputDisable || (b = a.value) == null || b.focus(), _();
    });
    const f = () => {
      var b;
      n.value && !l.inputDisable && (r("msg-send", { text: n.value }), n.value = null, (b = a.value) == null || b.focus());
    }, v = (b) => {
      if (b.key === "Enter")
        if (b.shiftKey)
          b.preventDefault(), f();
        else
          return;
    }, _ = () => {
      a.value && (a.value.style.height = "auto", a.value.style.height = a.value.scrollHeight + "px");
    };
    return A(n, () => {
      E(() => {
        _();
      });
    }), (b, q) => (s(), u("div", {
      class: w(["qkb-board-action", t.value])
    }, [
      i("div", ge, [
        i("div", me, [
          P(i("textarea", {
            ref_key: "qkbMessageInput",
            ref: a,
            "onUpdate:modelValue": q[0] || (q[0] = (c) => n.value = c),
            class: "qkb-board-action__input",
            disabled: e.inputDisable,
            placeholder: e.inputDisablePlaceholder && e.inputDisable ? e.inputDisablePlaceholder : e.inputPlaceholder,
            onKeydown: v,
            onInput: _,
            rows: "1"
          }, null, 40, fe), [
            [O, n.value]
          ])
        ]),
        i("div", ve, [
          d(b.$slots, "actions", {}, void 0, !0),
          i("button", {
            class: "qkb-action-item qkb-action-item--send",
            onClick: f,
            disabled: !n.value || e.inputDisable
          }, [
            d(b.$slots, "sendButton", {}, () => [
              (s(), C(S(D(de)), { class: "qkb-action-icon qkb-action-icon--send" }))
            ], !0)
          ], 8, Be)
        ])
      ])
    ], 2));
  }
}, he = /* @__PURE__ */ m(pe, [["__scopeId", "data-v-f2b47962"]]), ye = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "511pt",
  height: "511pt",
  viewBox: "1 -31 512 511"
};
function ke(e, o) {
  return s(), u("svg", ye, o[0] || (o[0] = [
    i("path", { d: "M128 448.5c-8.836 0-16-7.164-16-16v-80H48c-26.512 0-48-21.492-48-48v-256C0 21.988 21.488.5 48 .5h416c26.512 0 48 21.488 48 48v256c0 26.508-21.488 48-48 48H230.625l-91.312 91.313c-3 3-7.07 4.687-11.313 4.687m-80-416c-8.836 0-16 7.164-16 16v256c0 8.836 7.164 16 16 16h80c8.836 0 16 7.164 16 16v57.375l68.688-68.687c3-3 7.07-4.688 11.312-4.688h240c8.836 0 16-7.164 16-16v-256c0-8.836-7.164-16-16-16zm0 0" }, null, -1),
    i("path", { d: "M160 144.5c-17.672 0-32-14.328-32-32s14.328-32 32-32 32 14.328 32 32-14.328 32-32 32M352 144.5c-17.672 0-32-14.328-32-32s14.328-32 32-32 32 14.328 32 32-14.328 32-32 32M256 288.5c-52.996-.05-95.945-43.004-96-96 0-8.836 7.164-16 16-16s16 7.164 16 16c0 35.348 28.652 64 64 64s64-28.652 64-64c0-8.836 7.164-16 16-16s16 7.164 16 16c-.055 52.996-43.004 95.945-96 96m0 0" }, null, -1)
  ]));
}
const _e = { render: ke }, xe = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  viewBox: "0 0 512.001 512.001"
};
function Ce(e, o) {
  return s(), u("svg", xe, o[0] || (o[0] = [
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
    g((c) => ({
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
    const l = e, r = o, n = k(!1), a = {
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
    }, t = x(() => ({ ...a, ...l.options })), f = x(() => {
      const c = [];
      return t.value.animation && c.push("qkb-bot-ui--animate"), c;
    }), v = () => {
      n.value || b();
    }, _ = () => {
      n.value && b();
    }, b = () => {
      n.value = !n.value, n.value ? r("init") : r("destroy");
    }, q = (c) => {
      r("msg-send", c);
    };
    return l.isOpen && (l.openDelay ? setTimeout(v, l.openDelay) : b()), M(() => {
      document.addEventListener($.EVENT_OPEN, v), document.addEventListener($.EVENT_CLOSE, _), document.addEventListener($.EVENT_TOGGLE, b);
    }), (c, Ie) => (s(), u("div", {
      class: w(["qkb-bot-ui", f.value])
    }, [
      p(T, { name: "qkb-fadeUp" }, {
        default: B(() => [
          n.value ? (s(), u("div", Se, [
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
      i("div", we, [
        i("button", {
          class: "qkb-bubble-btn",
          onClick: b
        }, [
          d(c.$slots, "bubbleButton", {}, () => [
            p(T, { name: "qkb-scaleUp" }, {
              default: B(() => [
                n.value ? (s(), C(S(D(qe)), {
                  key: "2",
                  class: "qkb-bubble-btn-icon qkb-bubble-btn-icon--close"
                })) : (s(), C(S(D(_e)), {
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
        t.value.botAvatarImg ? (s(), u("div", De)) : y("", !0)
      ])
    ], 2));
  }
}, Ue = /* @__PURE__ */ m(Te, [["__scopeId", "data-v-cb88ad08"]]), Ee = {
  install(e, o) {
    e.component("VueBotUI", Ue);
  }
};
export {
  Ue as VueBotUI,
  Ee as default
};
