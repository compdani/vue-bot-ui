import { createElementBlock as l, openBlock as a, renderSlot as m, createElementVNode as c, toDisplayString as h, ref as y, Fragment as O, renderList as I, normalizeClass as D, computed as $, createCommentVNode as q, createBlock as B, resolveDynamicComponent as T, createStaticVNode as A, watch as N, nextTick as V, createVNode as v, onMounted as S, withDirectives as P, withKeys as U, vModelText as z, unref as E, onBeforeUnmount as H, Transition as M, withCtx as k } from "vue";
function j(t) {
  return { all: t = t || /* @__PURE__ */ new Map(), on: function(e, n) {
    var o = t.get(e);
    o ? o.push(n) : t.set(e, [n]);
  }, off: function(e, n) {
    var o = t.get(e);
    o && (n ? o.splice(o.indexOf(n) >>> 0, 1) : t.set(e, []));
  }, emit: function(e, n) {
    var o = t.get(e);
    o && o.slice().map(function(s) {
      s(n);
    }), (o = t.get("*")) && o.slice().map(function(s) {
      s(e, n);
    });
  } };
}
const C = j(), w = {
  EVENT_OPEN: "botui-open",
  EVENT_CLOSE: "botui-close",
  EVENT_TOGGLE: "botui-toggle"
}, _ = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, s] of e)
    n[o] = s;
  return n;
}, G = { class: "qkb-board-header" }, K = { class: "qkb-board-header__title" }, F = {
  __name: "Header",
  props: {
    botTitle: {
      type: String,
      default: "Chatbot"
    }
  },
  setup(t) {
    return (e, n) => (a(), l("div", G, [
      m(e.$slots, "header", {}, () => [
        c("div", K, h(t.botTitle), 1)
      ], !0)
    ]));
  }
}, J = /* @__PURE__ */ _(F, [["__scopeId", "data-v-f9138795"]]), Q = { class: "qkb-msg-bubble-component qkb-msg-bubble-component--single-text" }, R = { class: "qkb-msg-bubble-component__text" }, W = {
  __name: "SingleText",
  props: {
    mainData: {
      type: Object,
      required: !0
    }
  },
  setup(t) {
    return (e, n) => (a(), l("div", Q, [
      c("div", R, h(t.mainData.text), 1)
    ]));
  }
}, X = /* @__PURE__ */ _(W, [["__scopeId", "data-v-5c6137b5"]]), Y = { class: "qkb-msg-bubble-component qkb-msg-bubble-component--button-options" }, Z = { class: "qkb-msg-bubble-component__text" }, tt = { class: "qkb-msg-bubble-component__options-wrapper" }, et = ["onClick"], ot = ["href"], nt = {
  __name: "ButtonOptions",
  props: {
    mainData: {
      type: Object,
      required: !0
    }
  },
  setup(t) {
    const e = y(null), n = (o) => {
      e.value = o, C.emit("select-button-option", o);
    };
    return (o, s) => (a(), l("div", Y, [
      c("div", Z, h(t.mainData.text), 1),
      c("div", tt, [
        (a(!0), l(O, null, I(t.mainData.options, (b, r) => (a(), l("div", {
          key: r,
          class: D([{ active: e.value === b.value }, "qkb-mb-button-options__item"])
        }, [
          b.action === "postback" ? (a(), l("button", {
            key: 0,
            class: "qkb-mb-button-options__btn",
            onClick: (d) => n(b)
          }, [
            c("span", null, h(b.text), 1)
          ], 8, et)) : (a(), l("a", {
            key: 1,
            href: b.value,
            target: "_blank",
            class: "qkb-mb-button-options__btn qkb-mb-button-options__url"
          }, [
            c("span", null, h(b.text), 1)
          ], 8, ot))
        ], 2))), 128))
      ])
    ]));
  }
}, st = /* @__PURE__ */ _(nt, [["__scopeId", "data-v-d9b43897"]]), at = {
  key: 0,
  class: "qkb-msg-avatar"
}, lt = {
  key: 2,
  class: "qkb-msg-bubble__time"
}, bt = {
  __name: "Main",
  props: {
    message: {
      type: Object,
      required: !0
    }
  },
  setup(t) {
    const e = t, n = $(
      () => e.message.agent === "bot" ? "qkb-msg-bubble--bot" : "qkb-msg-bubble--user"
    ), o = $(() => {
      switch (e.message.type) {
        case "button":
          return st;
        default:
          return X;
      }
    });
    return (s, b) => (a(), l("div", {
      class: D(["qkb-msg-bubble", n.value])
    }, [
      t.message.agent === "bot" ? (a(), l("div", at, b[0] || (b[0] = [
        c("div", { class: "qkb-msg-avatar__img" }, " ", -1)
      ]))) : q("", !0),
      o.value ? (a(), B(T(o.value), {
        key: 1,
        "main-data": t.message
      }, null, 8, ["main-data"])) : q("", !0),
      t.message.createdAt ? (a(), l("div", lt, h(t.message.createdAt), 1)) : q("", !0)
    ], 2));
  }
}, it = /* @__PURE__ */ _(bt, [["__scopeId", "data-v-8ffb9570"]]), ct = {}, rt = { class: "qkb-msg-bubble qkb-msg-bubble--bot" };
function ut(t, e) {
  return a(), l("div", rt, e[0] || (e[0] = [
    A('<div class="qkb-msg-avatar" data-v-f53a7844><div class="qkb-msg-avatar__img" data-v-f53a7844> </div></div><div class="qkb-msg-bubble-component qkb-msg-bubble-component--typing" data-v-f53a7844><div class="qkb-msg-bubble-component__text" data-v-f53a7844><div class="qkb-msg-bubble__typing-indicator" data-v-f53a7844><span data-v-f53a7844></span><span data-v-f53a7844></span><span data-v-f53a7844></span></div></div></div>', 2)
  ]));
}
const dt = /* @__PURE__ */ _(ct, [["render", ut], ["__scopeId", "data-v-f53a7844"]]), pt = {
  key: 0,
  class: "qkb-board-content__bot-typing"
}, mt = {
  __name: "Content",
  props: {
    mainData: {
      type: Array,
      required: !0
    },
    botTyping: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const e = t, n = y(null), o = y(null), s = () => {
      const b = n.value, r = o.value.offsetHeight;
      b.scrollTop = r;
    };
    return N(() => e.mainData, () => {
      V(() => {
        s();
      });
    }), (b, r) => (a(), l("div", {
      class: "qkb-board-content",
      ref_key: "boardContent",
      ref: n
    }, [
      c("div", {
        class: "qkb-board-content__bubbles",
        ref_key: "boardBubbles",
        ref: o
      }, [
        (a(!0), l(O, null, I(t.mainData, (d, i) => (a(), B(it, {
          key: i,
          message: d
        }, null, 8, ["message"]))), 128)),
        t.botTyping ? (a(), l("div", pt, [
          m(b.$slots, "botTyping", {}, () => [
            v(dt)
          ], !0)
        ])) : q("", !0)
      ], 512)
    ], 512));
  }
}, _t = /* @__PURE__ */ _(mt, [["__scopeId", "data-v-2e77dfb2"]]), gt = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  viewBox: "0 0 488.721 488.721"
};
function vt(t, e) {
  return a(), l("svg", gt, e[0] || (e[0] = [
    c("path", { d: "M483.589 222.024a51.2 51.2 0 0 0-23.762-23.762L73.522 11.331C48.074-.998 17.451 9.638 5.122 35.086A51.2 51.2 0 0 0 3.669 76.44l67.174 167.902L3.669 412.261c-10.463 26.341 2.409 56.177 28.75 66.639a51.3 51.3 0 0 0 18.712 3.624c7.754 0 15.408-1.75 22.391-5.12l386.304-186.982c25.45-12.326 36.089-42.949 23.763-68.398M58.657 446.633c-8.484 4.107-18.691.559-22.798-7.925a17.07 17.07 0 0 1-.481-13.784l65.399-163.516h340.668zm42.121-219.358L35.379 63.759a16.64 16.64 0 0 1 4.215-18.773 16.54 16.54 0 0 1 19.063-2.884l382.788 185.173z" }, null, -1)
  ]));
}
const ft = { render: vt }, kt = { class: "qkb-board-action__wrapper" }, ht = { class: "qkb-board-action__msg-box" }, qt = ["disabled", "placeholder"], yt = { class: "qkb-board-action__extra" }, $t = ["disabled"], Bt = {
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
    }
  },
  emits: ["msg-send"],
  setup(t, { emit: e }) {
    const n = t, o = e, s = y(null), b = y(null), r = $(() => {
      const i = [];
      return n.inputDisable && i.push("qkb-board-action--disabled"), s.value && i.push("qkb-board-action--typing"), i;
    });
    S(() => {
      var i;
      n.inputDisable || (i = b.value) == null || i.focus();
    });
    const d = () => {
      var i;
      s.value && !n.inputDisable && (o("msg-send", { text: s.value }), s.value = null, (i = b.value) == null || i.focus());
    };
    return (i, f) => (a(), l("div", {
      class: D(["qkb-board-action", r.value])
    }, [
      c("div", kt, [
        c("div", ht, [
          P(c("input", {
            ref_key: "qkbMessageInput",
            ref: b,
            "onUpdate:modelValue": f[0] || (f[0] = (p) => s.value = p),
            type: "text",
            class: "qkb-board-action__input",
            disabled: t.inputDisable,
            placeholder: t.inputDisablePlaceholder && t.inputDisable ? t.inputDisablePlaceholder : t.inputPlaceholder,
            onKeydown: U(d, ["enter"])
          }, null, 40, qt), [
            [z, s.value]
          ])
        ]),
        c("div", yt, [
          m(i.$slots, "actions", {}, void 0, !0),
          c("button", {
            class: "qkb-action-item qkb-action-item--send",
            onClick: d,
            disabled: !s.value || t.inputDisable
          }, [
            m(i.$slots, "sendButton", {}, () => [
              (a(), B(T(E(ft)), { class: "qkb-action-icon qkb-action-icon--send" }))
            ], !0)
          ], 8, $t)
        ])
      ])
    ], 2));
  }
}, xt = /* @__PURE__ */ _(Bt, [["__scopeId", "data-v-a21acb61"]]), Ct = ["innerHTML"], Tt = {
  __name: "AppStyle",
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(t) {
    const e = t, n = $(() => {
      if (!e.options)
        return "";
      const {
        colorScheme: o,
        textColor: s,
        boardContentBg: b,
        bubbleBtnSize: r,
        botAvatarImg: d,
        botAvatarSize: i,
        inputDisableBg: f,
        msgBubbleBgBot: p,
        msgBubbleColorBot: x,
        msgBubbleBgUser: g,
        msgBubbleColorUser: u
      } = e.options;
      return `
<style type="text/css" id="qkb-bot-style">
.qkb-bubble-btn {
  background-color: ${o};
  width: ${r}px;
  height: ${r}px;
}
.qkb-bubble-btn-icon {
  fill: ${s};
  color: ${s};
}
.qkb-board {
  bottom: ${r}px;
}
.qkb-board-header {
  background-color: ${o};
}
.qkb-board-header__title {
  color: ${s};
}
.qkb-board-content {
  background-color: ${b};
}
${d ? `.qkb-msg-avatar {
      width: ${i}px;
      height: ${i}px;
    }
    .qkb-msg-avatar__img {
      background-image: url(${d});
    }` : ""}
.qkb-msg-bubble--bot .qkb-msg-bubble-component__text {
  color: ${x};
  background-color: ${p};
}
.qkb-msg-bubble__typing-indicator span,
.qkb-msg-bubble__typing-indicator::before,
.qkb-msg-bubble__typing-indicator::after {
  background-color: ${x};
}
.qkb-mb-button-options__btn::before {
  background-color: ${g};
}
.qkb-msg-bubble--user .qkb-msg-bubble-component__text {
  color: ${u};
  background-color: ${g};
}
.qkb-mb-button-options__btn {
  color: ${g};
  border-color: ${g};
}
.qkb-mb-button-options__btn:hover {
  color: ${u};
  background-color: ${g};
}
.qkb-board-action--disabled::before {
  background-color: ${f};
}
</style>
  `;
    });
    return (o, s) => (a(), l("div", {
      class: "qkb-bot-style",
      innerHTML: n.value,
      style: { display: "none" }
    }, null, 8, Ct));
  }
}, Dt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "511pt",
  height: "511pt",
  viewBox: "1 -31 512 511"
};
function wt(t, e) {
  return a(), l("svg", Dt, e[0] || (e[0] = [
    c("path", { d: "M128 448.5c-8.836 0-16-7.164-16-16v-80H48c-26.512 0-48-21.492-48-48v-256C0 21.988 21.488.5 48 .5h416c26.512 0 48 21.488 48 48v256c0 26.508-21.488 48-48 48H230.625l-91.312 91.313c-3 3-7.07 4.687-11.313 4.687m-80-416c-8.836 0-16 7.164-16 16v256c0 8.836 7.164 16 16 16h80c8.836 0 16 7.164 16 16v57.375l68.688-68.687c3-3 7.07-4.688 11.312-4.688h240c8.836 0 16-7.164 16-16v-256c0-8.836-7.164-16-16-16zm0 0" }, null, -1),
    c("path", { d: "M160 144.5c-17.672 0-32-14.328-32-32s14.328-32 32-32 32 14.328 32 32-14.328 32-32 32M352 144.5c-17.672 0-32-14.328-32-32s14.328-32 32-32 32 14.328 32 32-14.328 32-32 32M256 288.5c-52.996-.05-95.945-43.004-96-96 0-8.836 7.164-16 16-16s16 7.164 16 16c0 35.348 28.652 64 64 64s64-28.652 64-64c0-8.836 7.164-16 16-16s16 7.164 16 16c-.055 52.996-43.004 95.945-96 96m0 0" }, null, -1)
  ]));
}
const Et = { render: wt }, Mt = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  viewBox: "0 0 512.001 512.001"
};
function Ot(t, e) {
  return a(), l("svg", Mt, e[0] || (e[0] = [
    c("path", { d: "M284.286 256.002 506.143 34.144c7.811-7.811 7.811-20.475 0-28.285s-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0s-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.94 19.94 0 0 0 14.143 5.857 19.94 19.94 0 0 0 14.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285z" }, null, -1)
  ]));
}
const It = { render: Ot }, St = {
  key: 0,
  class: "qkb-board"
}, Lt = { class: "qkb-bot-bubble" }, At = { class: "qkb-preload-image" }, Nt = {
  key: 0,
  class: "qkb-msg-avatar__img"
}, Vt = {
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
  setup(t, { emit: e }) {
    const n = t, o = e, s = y(!1), b = {
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
      inputDisablePlaceholder: null
    }, r = $(() => ({ ...b, ...n.options })), d = $(() => {
      const u = [];
      return r.value.animation && u.push("qkb-bot-ui--animate"), u;
    }), i = () => {
      s.value || p();
    }, f = () => {
      s.value && p();
    }, p = () => {
      s.value = !s.value, s.value ? (C.on("select-button-option", g), o("init")) : (C.off("select-button-option"), o("destroy"));
    }, x = (u) => {
      o("msg-send", u);
    }, g = (u) => {
      o("msg-send", u);
    };
    return n.isOpen && (n.openDelay ? setTimeout(i, n.openDelay) : p()), S(() => {
      document.addEventListener(w.EVENT_OPEN, i), document.addEventListener(w.EVENT_CLOSE, f), document.addEventListener(w.EVENT_TOGGLE, p);
    }), H(() => {
      C.off("select-button-option");
    }), (u, L) => (a(), l("div", {
      class: D(["qkb-bot-ui", d.value])
    }, [
      v(M, { name: "qkb-fadeUp" }, {
        default: k(() => [
          s.value ? (a(), l("div", St, [
            v(J, {
              "bot-title": r.value.botTitle,
              onCloseBot: p
            }, {
              header: k(() => [
                m(u.$slots, "header", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["bot-title"]),
            v(_t, {
              "bot-typing": t.botTyping,
              "main-data": t.messages
            }, {
              botTyping: k(() => [
                m(u.$slots, "botTyping", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["bot-typing", "main-data"]),
            v(xt, {
              "input-disable": t.inputDisable,
              "input-placeholder": r.value.inputPlaceholder,
              "input-disable-placeholder": r.value.inputDisablePlaceholder,
              onMsgSend: x
            }, {
              actions: k(() => [
                m(u.$slots, "actions", {}, void 0, !0)
              ]),
              sendButton: k(() => [
                m(u.$slots, "sendButton", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["input-disable", "input-placeholder", "input-disable-placeholder"])
          ])) : q("", !0)
        ]),
        _: 3
      }),
      c("div", Lt, [
        c("button", {
          class: "qkb-bubble-btn",
          onClick: p
        }, [
          m(u.$slots, "bubbleButton", {}, () => [
            v(M, { name: "qkb-scaleUp" }, {
              default: k(() => [
                s.value ? (a(), B(T(E(It)), {
                  key: "2",
                  class: "qkb-bubble-btn-icon qkb-bubble-btn-icon--close"
                })) : (a(), B(T(E(Et)), {
                  key: "1",
                  class: "qkb-bubble-btn-icon"
                }))
              ]),
              _: 1
            })
          ], !0)
        ])
      ]),
      v(Tt, { options: r.value }, null, 8, ["options"]),
      c("div", At, [
        r.value.botAvatarImg ? (a(), l("div", Nt)) : q("", !0)
      ])
    ], 2));
  }
}, Pt = /* @__PURE__ */ _(Vt, [["__scopeId", "data-v-e685da56"]]), zt = {
  install(t, e) {
    t.component("VueBotUI", Pt);
  }
};
export {
  Pt as VueBotUI,
  zt as default
};
