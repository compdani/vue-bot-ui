import { createElementBlock as b, openBlock as a, renderSlot as g, createElementVNode as u, toDisplayString as q, ref as x, Fragment as P, renderList as A, normalizeClass as I, computed as _, createCommentVNode as $, createBlock as B, resolveDynamicComponent as D, createStaticVNode as V, watch as z, nextTick as U, createVNode as f, onMounted as N, withDirectives as H, withKeys as j, vModelText as G, unref as M, onBeforeUnmount as Z, normalizeStyle as O, Transition as L, withCtx as y } from "vue";
function K(t) {
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
const T = K(), E = {
  EVENT_OPEN: "botui-open",
  EVENT_CLOSE: "botui-close",
  EVENT_TOGGLE: "botui-toggle"
}, v = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, s] of e)
    n[o] = s;
  return n;
}, F = { class: "qkb-board-header" }, J = { class: "qkb-board-header__title" }, Q = {
  __name: "Header",
  props: {
    botTitle: {
      type: String,
      default: "Chatbot"
    }
  },
  setup(t) {
    return (e, n) => (a(), b("div", F, [
      g(e.$slots, "header", {}, () => [
        u("div", J, q(t.botTitle), 1)
      ], !0)
    ]));
  }
}, R = /* @__PURE__ */ v(Q, [["__scopeId", "data-v-f9138795"]]), W = { class: "qkb-msg-bubble-component qkb-msg-bubble-component--single-text" }, X = { class: "qkb-msg-bubble-component__text" }, Y = {
  __name: "SingleText",
  props: {
    mainData: {
      type: Object,
      required: !0
    }
  },
  setup(t) {
    return (e, n) => (a(), b("div", W, [
      u("div", X, q(t.mainData.text), 1)
    ]));
  }
}, tt = /* @__PURE__ */ v(Y, [["__scopeId", "data-v-5c6137b5"]]), et = { class: "qkb-msg-bubble-component qkb-msg-bubble-component--button-options" }, ot = { class: "qkb-msg-bubble-component__text" }, nt = { class: "qkb-msg-bubble-component__options-wrapper" }, st = ["onClick"], at = ["href"], lt = {
  __name: "ButtonOptions",
  props: {
    mainData: {
      type: Object,
      required: !0
    }
  },
  setup(t) {
    const e = x(null), n = (o) => {
      e.value = o, T.emit("select-button-option", o);
    };
    return (o, s) => (a(), b("div", et, [
      u("div", ot, q(t.mainData.text), 1),
      u("div", nt, [
        (a(!0), b(P, null, A(t.mainData.options, (i, c) => (a(), b("div", {
          key: c,
          class: I([{ active: e.value === i.value }, "qkb-mb-button-options__item"])
        }, [
          i.action === "postback" ? (a(), b("button", {
            key: 0,
            class: "qkb-mb-button-options__btn",
            onClick: (m) => n(i)
          }, [
            u("span", null, q(i.text), 1)
          ], 8, st)) : (a(), b("a", {
            key: 1,
            href: i.value,
            target: "_blank",
            class: "qkb-mb-button-options__btn qkb-mb-button-options__url"
          }, [
            u("span", null, q(i.text), 1)
          ], 8, at))
        ], 2))), 128))
      ])
    ]));
  }
}, bt = /* @__PURE__ */ v(lt, [["__scopeId", "data-v-d9b43897"]]), it = {
  key: 0,
  class: "qkb-msg-avatar"
}, ct = {
  key: 2,
  class: "qkb-msg-bubble__time"
}, ut = {
  __name: "Main",
  props: {
    message: {
      type: Object,
      required: !0
    }
  },
  setup(t) {
    const e = t, n = _(
      () => e.message.agent === "bot" ? "qkb-msg-bubble--bot" : "qkb-msg-bubble--user"
    ), o = _(() => {
      switch (e.message.type) {
        case "button":
          return bt;
        default:
          return tt;
      }
    });
    return (s, i) => (a(), b("div", {
      class: I(["qkb-msg-bubble", n.value])
    }, [
      t.message.agent === "bot" ? (a(), b("div", it, i[0] || (i[0] = [
        u("div", { class: "qkb-msg-avatar__img" }, " ", -1)
      ]))) : $("", !0),
      o.value ? (a(), B(D(o.value), {
        key: 1,
        "main-data": t.message
      }, null, 8, ["main-data"])) : $("", !0),
      t.message.createdAt ? (a(), b("div", ct, q(t.message.createdAt), 1)) : $("", !0)
    ], 2));
  }
}, rt = /* @__PURE__ */ v(ut, [["__scopeId", "data-v-8ffb9570"]]), dt = {}, pt = { class: "qkb-msg-bubble qkb-msg-bubble--bot" };
function mt(t, e) {
  return a(), b("div", pt, e[0] || (e[0] = [
    V('<div class="qkb-msg-avatar" data-v-f53a7844><div class="qkb-msg-avatar__img" data-v-f53a7844> </div></div><div class="qkb-msg-bubble-component qkb-msg-bubble-component--typing" data-v-f53a7844><div class="qkb-msg-bubble-component__text" data-v-f53a7844><div class="qkb-msg-bubble__typing-indicator" data-v-f53a7844><span data-v-f53a7844></span><span data-v-f53a7844></span><span data-v-f53a7844></span></div></div></div>', 2)
  ]));
}
const gt = /* @__PURE__ */ v(dt, [["render", mt], ["__scopeId", "data-v-f53a7844"]]), _t = {
  key: 0,
  class: "qkb-board-content__bot-typing"
}, vt = {
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
    const e = t, n = x(null), o = x(null), s = () => {
      const i = n.value, c = o.value.offsetHeight;
      i.scrollTop = c;
    };
    return z(() => e.mainData, () => {
      U(() => {
        s();
      });
    }), (i, c) => (a(), b("div", {
      class: "qkb-board-content",
      ref_key: "boardContent",
      ref: n
    }, [
      u("div", {
        class: "qkb-board-content__bubbles",
        ref_key: "boardBubbles",
        ref: o
      }, [
        (a(!0), b(P, null, A(t.mainData, (m, r) => (a(), B(rt, {
          key: r,
          message: m
        }, null, 8, ["message"]))), 128)),
        t.botTyping ? (a(), b("div", _t, [
          g(i.$slots, "botTyping", {}, () => [
            f(gt)
          ], !0)
        ])) : $("", !0)
      ], 512)
    ], 512));
  }
}, ft = /* @__PURE__ */ v(vt, [["__scopeId", "data-v-2e77dfb2"]]), kt = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  viewBox: "0 0 488.721 488.721"
};
function ht(t, e) {
  return a(), b("svg", kt, e[0] || (e[0] = [
    u("path", { d: "M483.589 222.024a51.2 51.2 0 0 0-23.762-23.762L73.522 11.331C48.074-.998 17.451 9.638 5.122 35.086A51.2 51.2 0 0 0 3.669 76.44l67.174 167.902L3.669 412.261c-10.463 26.341 2.409 56.177 28.75 66.639a51.3 51.3 0 0 0 18.712 3.624c7.754 0 15.408-1.75 22.391-5.12l386.304-186.982c25.45-12.326 36.089-42.949 23.763-68.398M58.657 446.633c-8.484 4.107-18.691.559-22.798-7.925a17.07 17.07 0 0 1-.481-13.784l65.399-163.516h340.668zm42.121-219.358L35.379 63.759a16.64 16.64 0 0 1 4.215-18.773 16.54 16.54 0 0 1 19.063-2.884l382.788 185.173z" }, null, -1)
  ]));
}
const yt = { render: ht }, qt = { class: "qkb-board-action__wrapper" }, $t = { class: "qkb-board-action__msg-box" }, xt = ["disabled", "placeholder"], Bt = { class: "qkb-board-action__extra" }, wt = ["disabled"], Ct = {
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
    const n = t, o = e, s = x(null), i = x(null), c = _(() => {
      const r = [];
      return n.inputDisable && r.push("qkb-board-action--disabled"), s.value && r.push("qkb-board-action--typing"), r;
    });
    N(() => {
      var r;
      n.inputDisable || (r = i.value) == null || r.focus();
    });
    const m = () => {
      var r;
      s.value && !n.inputDisable && (o("msg-send", { text: s.value }), s.value = null, (r = i.value) == null || r.focus());
    };
    return (r, k) => (a(), b("div", {
      class: I(["qkb-board-action", c.value])
    }, [
      u("div", qt, [
        u("div", $t, [
          H(u("input", {
            ref_key: "qkbMessageInput",
            ref: i,
            "onUpdate:modelValue": k[0] || (k[0] = (h) => s.value = h),
            type: "text",
            class: "qkb-board-action__input",
            disabled: t.inputDisable,
            placeholder: t.inputDisablePlaceholder && t.inputDisable ? t.inputDisablePlaceholder : t.inputPlaceholder,
            onKeydown: j(m, ["enter"])
          }, null, 40, xt), [
            [G, s.value]
          ])
        ]),
        u("div", Bt, [
          g(r.$slots, "actions", {}, void 0, !0),
          u("button", {
            class: "qkb-action-item qkb-action-item--send",
            onClick: m,
            disabled: !s.value || t.inputDisable
          }, [
            g(r.$slots, "sendButton", {}, () => [
              (a(), B(D(M(yt)), { class: "qkb-action-icon qkb-action-icon--send" }))
            ], !0)
          ], 8, wt)
        ])
      ])
    ], 2));
  }
}, Tt = /* @__PURE__ */ v(Ct, [["__scopeId", "data-v-a21acb61"]]), Dt = ["innerHTML"], It = {
  __name: "AppStyle",
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(t) {
    const e = t, n = _(() => {
      if (!e.options)
        return "";
      const {
        colorScheme: o,
        textColor: s,
        boardContentBg: i,
        bubbleBtnSize: c,
        botAvatarImg: m,
        botAvatarSize: r,
        inputDisableBg: k,
        msgBubbleBgBot: h,
        msgBubbleColorBot: w,
        msgBubbleBgUser: p,
        msgBubbleColorUser: C
      } = e.options;
      return `
<style type="text/css" id="qkb-bot-style">
.qkb-bubble-btn {
  background-color: ${o};
  width: ${c}px;
  height: ${c}px;
}
.qkb-bubble-btn-icon {
  fill: ${s};
  color: ${s};
}
.qkb-board {
  bottom: ${c}px;
}
.qkb-board-header {
  background-color: ${o};
}
.qkb-board-header__title {
  color: ${s};
}
.qkb-board-content {
  background-color: ${i};
}
${m ? `.qkb-msg-avatar {
      width: ${r}px;
      height: ${r}px;
    }
    .qkb-msg-avatar__img {
      background-image: url(${m});
    }` : ""}
.qkb-msg-bubble--bot .qkb-msg-bubble-component__text {
  color: ${w};
  background-color: ${h};
}
.qkb-msg-bubble__typing-indicator span,
.qkb-msg-bubble__typing-indicator::before,
.qkb-msg-bubble__typing-indicator::after {
  background-color: ${w};
}
.qkb-mb-button-options__btn::before {
  background-color: ${p};
}
.qkb-msg-bubble--user .qkb-msg-bubble-component__text {
  color: ${C};
  background-color: ${p};
}
.qkb-mb-button-options__btn {
  color: ${p};
  border-color: ${p};
}
.qkb-mb-button-options__btn:hover {
  color: ${C};
  background-color: ${p};
}
.qkb-board-action--disabled::before {
  background-color: ${k};
}
</style>
  `;
    });
    return (o, s) => (a(), b("div", {
      class: "qkb-bot-style",
      innerHTML: n.value,
      style: { display: "none" }
    }, null, 8, Dt));
  }
}, Et = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "511pt",
  height: "511pt",
  viewBox: "1 -31 512 511"
};
function Mt(t, e) {
  return a(), b("svg", Et, e[0] || (e[0] = [
    u("path", { d: "M128 448.5c-8.836 0-16-7.164-16-16v-80H48c-26.512 0-48-21.492-48-48v-256C0 21.988 21.488.5 48 .5h416c26.512 0 48 21.488 48 48v256c0 26.508-21.488 48-48 48H230.625l-91.312 91.313c-3 3-7.07 4.687-11.313 4.687m-80-416c-8.836 0-16 7.164-16 16v256c0 8.836 7.164 16 16 16h80c8.836 0 16 7.164 16 16v57.375l68.688-68.687c3-3 7.07-4.688 11.312-4.688h240c8.836 0 16-7.164 16-16v-256c0-8.836-7.164-16-16-16zm0 0" }, null, -1),
    u("path", { d: "M160 144.5c-17.672 0-32-14.328-32-32s14.328-32 32-32 32 14.328 32 32-14.328 32-32 32M352 144.5c-17.672 0-32-14.328-32-32s14.328-32 32-32 32 14.328 32 32-14.328 32-32 32M256 288.5c-52.996-.05-95.945-43.004-96-96 0-8.836 7.164-16 16-16s16 7.164 16 16c0 35.348 28.652 64 64 64s64-28.652 64-64c0-8.836 7.164-16 16-16s16 7.164 16 16c-.055 52.996-43.004 95.945-96 96m0 0" }, null, -1)
  ]));
}
const St = { render: Mt }, Ot = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  viewBox: "0 0 512.001 512.001"
};
function Lt(t, e) {
  return a(), b("svg", Ot, e[0] || (e[0] = [
    u("path", { d: "M284.286 256.002 506.143 34.144c7.811-7.811 7.811-20.475 0-28.285s-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0s-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.94 19.94 0 0 0 14.143 5.857 19.94 19.94 0 0 0 14.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285z" }, null, -1)
  ]));
}
const Pt = { render: Lt }, At = {
  key: 0,
  class: "qkb-board"
}, Nt = { class: "qkb-preload-image" }, Vt = {
  key: 0,
  class: "qkb-msg-avatar__img"
}, zt = {
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
    const n = t, o = e, s = x(!1), i = {
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
      bubbleZIndex: 9999,
      bubblePosition: {
        bottom: "20px",
        right: "20px",
        top: null,
        left: null
      },
      windowZIndex: 9999,
      windowPosition: {
        bottom: "20px",
        right: "20px",
        top: null,
        left: null
      }
    }, c = _(() => ({ ...i, ...n.options })), m = _(() => {
      const l = [];
      return c.value.animation && l.push("qkb-bot-ui--animate"), l;
    }), r = _(() => {
      const l = {
        zIndex: c.value.windowZIndex
      }, d = c.value.windowPosition;
      return d.bottom !== null && (l.bottom = d.bottom), d.right !== null && (l.right = d.right), d.top !== null && (l.top = d.top), d.left !== null && (l.left = d.left), l;
    }), k = _(() => {
      const l = {
        zIndex: c.value.bubbleZIndex
      }, d = c.value.bubblePosition;
      return d.bottom !== null && (l.bottom = d.bottom), d.right !== null && (l.right = d.right), d.top !== null && (l.top = d.top), d.left !== null && (l.left = d.left), l;
    }), h = () => {
      s.value || p();
    }, w = () => {
      s.value && p();
    }, p = () => {
      s.value = !s.value, s.value ? (T.on("select-button-option", S), o("init")) : (T.off("select-button-option"), o("destroy"));
    }, C = (l) => {
      o("msg-send", l);
    }, S = (l) => {
      o("msg-send", l);
    };
    return n.isOpen && (n.openDelay ? setTimeout(h, n.openDelay) : p()), N(() => {
      document.addEventListener(E.EVENT_OPEN, h), document.addEventListener(E.EVENT_CLOSE, w), document.addEventListener(E.EVENT_TOGGLE, p);
    }), Z(() => {
      T.off("select-button-option");
    }), (l, d) => (a(), b("div", {
      class: I(["qkb-bot-ui", m.value]),
      style: O(r.value)
    }, [
      f(L, { name: "qkb-fadeUp" }, {
        default: y(() => [
          s.value ? (a(), b("div", At, [
            f(R, {
              "bot-title": c.value.botTitle,
              onCloseBot: p
            }, {
              header: y(() => [
                g(l.$slots, "header", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["bot-title"]),
            f(ft, {
              "bot-typing": t.botTyping,
              "main-data": t.messages
            }, {
              botTyping: y(() => [
                g(l.$slots, "botTyping", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["bot-typing", "main-data"]),
            f(Tt, {
              "input-disable": t.inputDisable,
              "input-placeholder": c.value.inputPlaceholder,
              "input-disable-placeholder": c.value.inputDisablePlaceholder,
              onMsgSend: C
            }, {
              actions: y(() => [
                g(l.$slots, "actions", {}, void 0, !0)
              ]),
              sendButton: y(() => [
                g(l.$slots, "sendButton", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["input-disable", "input-placeholder", "input-disable-placeholder"])
          ])) : $("", !0)
        ]),
        _: 3
      }),
      u("div", {
        class: "qkb-bot-bubble",
        style: O(k.value)
      }, [
        u("button", {
          class: "qkb-bubble-btn",
          onClick: p
        }, [
          g(l.$slots, "bubbleButton", {}, () => [
            f(L, { name: "qkb-scaleUp" }, {
              default: y(() => [
                s.value ? (a(), B(D(M(Pt)), {
                  key: "2",
                  class: "qkb-bubble-btn-icon qkb-bubble-btn-icon--close"
                })) : (a(), B(D(M(St)), {
                  key: "1",
                  class: "qkb-bubble-btn-icon"
                }))
              ]),
              _: 1
            })
          ], !0)
        ])
      ], 4),
      f(It, { options: c.value }, null, 8, ["options"]),
      u("div", Nt, [
        c.value.botAvatarImg ? (a(), b("div", Vt)) : $("", !0)
      ])
    ], 6));
  }
}, Ut = /* @__PURE__ */ v(zt, [["__scopeId", "data-v-5c97b7d6"]]), jt = {
  install(t, e) {
    t.component("VueBotUI", Ut);
  }
};
export {
  Ut as VueBotUI,
  jt as default
};
