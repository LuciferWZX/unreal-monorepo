import * as g from "react";
import Z, { useContext as St, useCallback as et, useState as Gt, useRef as qe, useReducer as im, useMemo as Xt, useEffect as Ft, createContext as Wr, useLayoutEffect as sm, Component as Tb, memo as Nb, forwardRef as hr, isValidElement as Ib, Children as Mb, createRef as _b, useImperativeHandle as Ba, cloneElement as jb, createElement as ml } from "react";
import * as Lb from "react-dom";
import um, { createPortal as kb, unstable_batchedUpdates as zb, flushSync as Vb } from "react-dom";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Lf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function rr(e) {
  var t, r;
  return Lf(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (r = t.prototype, !(Lf(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
var lm = Symbol.for("immer-nothing"), kf = Symbol.for("immer-draftable"), Pr = Symbol.for("immer-state"), Hb = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function Cr(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = Hb[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var uo = Object.getPrototypeOf;
function Sa(e) {
  return !!e && !!e[Pr];
}
function xa(e) {
  var t;
  return e ? cm(e) || Array.isArray(e) || !!e[kf] || !!((t = e.constructor) != null && t[kf]) || qs(e) || Us(e) : !1;
}
var Wb = Object.prototype.constructor.toString();
function cm(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = uo(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === Wb;
}
function ri(e, t) {
  Ks(e) === 0 ? Object.entries(e).forEach(([r, n]) => {
    t(r, n, e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function Ks(e) {
  const t = e[Pr];
  return t ? t.type_ : Array.isArray(e) ? 1 : qs(e) ? 2 : Us(e) ? 3 : 0;
}
function hl(e, t) {
  return Ks(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function fm(e, t, r) {
  const n = Ks(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function Kb(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function qs(e) {
  return e instanceof Map;
}
function Us(e) {
  return e instanceof Set;
}
function ua(e) {
  return e.copy_ || e.base_;
}
function pl(e, t) {
  if (qs(e))
    return new Map(e);
  if (Us(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && cm(e))
    return uo(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const r = Object.getOwnPropertyDescriptors(e);
  delete r[Pr];
  let n = Reflect.ownKeys(r);
  for (let a = 0; a < n.length; a++) {
    const o = n[a], i = r[o];
    i.writable === !1 && (i.writable = !0, i.configurable = !0), (i.get || i.set) && (r[o] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: i.enumerable,
      value: e[o]
    });
  }
  return Object.create(uo(e), r);
}
function Tc(e, t = !1) {
  return Gs(e) || Sa(e) || !xa(e) || (Ks(e) > 1 && (e.set = e.add = e.clear = e.delete = qb), Object.freeze(e), t && ri(e, (r, n) => Tc(n, !0))), e;
}
function qb() {
  Cr(2);
}
function Gs(e) {
  return Object.isFrozen(e);
}
var Ub = {};
function Oa(e) {
  const t = Ub[e];
  return t || Cr(0, e), t;
}
var ni;
function dm() {
  return ni;
}
function Gb(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function zf(e, t) {
  t && (Oa("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function bl(e) {
  yl(e), e.drafts_.forEach(Xb), e.drafts_ = null;
}
function yl(e) {
  e === ni && (ni = e.parent_);
}
function Vf(e) {
  return ni = Gb(ni, e);
}
function Xb(e) {
  const t = e[Pr];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Hf(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[Pr].modified_ && (bl(t), Cr(4)), xa(e) && (e = Cs(t, e), t.parent_ || Es(t, e)), t.patches_ && Oa("Patches").generateReplacementPatches_(
    r[Pr].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Cs(t, r, []), bl(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== lm ? e : void 0;
}
function Cs(e, t, r) {
  if (Gs(t))
    return t;
  const n = t[Pr];
  if (!n)
    return ri(
      t,
      (a, o) => Wf(e, n, t, a, o, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return Es(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const a = n.copy_;
    let o = a, i = !1;
    n.type_ === 3 && (o = new Set(a), a.clear(), i = !0), ri(
      o,
      (s, u) => Wf(e, n, a, s, u, r, i)
    ), Es(e, a, !1), r && e.patches_ && Oa("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function Wf(e, t, r, n, a, o, i) {
  if (process.env.NODE_ENV !== "production" && a === r && Cr(5), Sa(a)) {
    const s = o && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !hl(t.assigned_, n) ? o.concat(n) : void 0, u = Cs(e, a, s);
    if (fm(r, n, u), Sa(u))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    i && r.add(a);
  if (xa(a) && !Gs(a)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Cs(e, a), (!t || !t.scope_.parent_) && Es(e, a);
  }
}
function Es(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Tc(t, r);
}
function Yb(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : dm(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let a = n, o = Nc;
  r && (a = [n], o = ai);
  const { revoke: i, proxy: s } = Proxy.revocable(a, o);
  return n.draft_ = s, n.revoke_ = i, s;
}
var Nc = {
  get(e, t) {
    if (t === Pr)
      return e;
    const r = ua(e);
    if (!hl(r, t))
      return Zb(e, r, t);
    const n = r[t];
    return e.finalized_ || !xa(n) ? n : n === xu(e.base_, t) ? (Ou(e), e.copy_[t] = El(n, e)) : n;
  },
  has(e, t) {
    return t in ua(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(ua(e));
  },
  set(e, t, r) {
    const n = vm(ua(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const a = xu(ua(e), t), o = a == null ? void 0 : a[Pr];
      if (o && o.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (Kb(r, a) && (r !== void 0 || hl(e.base_, t)))
        return !0;
      Ou(e), Cl(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return xu(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Ou(e), Cl(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = ua(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    Cr(11);
  },
  getPrototypeOf(e) {
    return uo(e.base_);
  },
  setPrototypeOf() {
    Cr(12);
  }
}, ai = {};
ri(Nc, (e, t) => {
  ai[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
ai.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Cr(13), ai.set.call(this, e, t, void 0);
};
ai.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Cr(14), Nc.set.call(this, e[0], t, r, e[0]);
};
function xu(e, t) {
  const r = e[Pr];
  return (r ? ua(r) : e)[t];
}
function Zb(e, t, r) {
  var a;
  const n = vm(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (a = n.get) == null ? void 0 : a.call(e.draft_)
  ) : void 0;
}
function vm(e, t) {
  if (!(t in e))
    return;
  let r = uo(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = uo(r);
  }
}
function Cl(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Cl(e.parent_));
}
function Ou(e) {
  e.copy_ || (e.copy_ = pl(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Qb = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const o = r;
        r = t;
        const i = this;
        return function(u = o, ...l) {
          return i.produce(u, (c) => r.call(this, c, ...l));
        };
      }
      typeof r != "function" && Cr(6), n !== void 0 && typeof n != "function" && Cr(7);
      let a;
      if (xa(t)) {
        const o = Vf(this), i = El(t, void 0);
        let s = !0;
        try {
          a = r(i), s = !1;
        } finally {
          s ? bl(o) : yl(o);
        }
        return zf(o, n), Hf(a, o);
      } else if (!t || typeof t != "object") {
        if (a = r(t), a === void 0 && (a = t), a === lm && (a = void 0), this.autoFreeze_ && Tc(a, !0), n) {
          const o = [], i = [];
          Oa("Patches").generateReplacementPatches_(t, a, o, i), n(o, i);
        }
        return a;
      } else
        Cr(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (i, ...s) => this.produceWithPatches(i, (u) => t(u, ...s));
      let n, a;
      return [this.produce(t, r, (i, s) => {
        n = i, a = s;
      }), n, a];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    xa(e) || Cr(8), Sa(e) && (e = Jb(e));
    const t = Vf(this), r = El(e, void 0);
    return r[Pr].isManual_ = !0, yl(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[Pr];
    (!r || !r.isManual_) && Cr(9);
    const { scope_: n } = r;
    return zf(n, t), Hf(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const a = t[r];
      if (a.path.length === 0 && a.op === "replace") {
        e = a.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = Oa("Patches").applyPatches_;
    return Sa(e) ? n(e, t) : this.produce(
      e,
      (a) => n(a, t)
    );
  }
};
function El(e, t) {
  const r = qs(e) ? Oa("MapSet").proxyMap_(e, t) : Us(e) ? Oa("MapSet").proxySet_(e, t) : Yb(e, t);
  return (t ? t.scope_ : dm()).drafts_.push(r), r;
}
function Jb(e) {
  return Sa(e) || Cr(10, e), gm(e);
}
function gm(e) {
  if (!xa(e) || Gs(e))
    return e;
  const t = e[Pr];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = pl(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = pl(e, !0);
  return ri(r, (n, a) => {
    fm(r, n, gm(a));
  }), t && (t.finalized_ = !1), r;
}
var Rr = new Qb(), Ic = Rr.produce;
Rr.produceWithPatches.bind(
  Rr
);
Rr.setAutoFreeze.bind(Rr);
Rr.setUseStrictShallowCopy.bind(Rr);
Rr.applyPatches.bind(Rr);
var Kf = Rr.createDraft.bind(Rr), qf = Rr.finishDraft.bind(Rr), ey = {
  transform(e, t) {
    var {
      current: r,
      affinity: n
    } = e;
    if (r != null) {
      var a = L.transform(r, t, {
        affinity: n
      });
      e.current = a, a == null && e.unref();
    }
  }
}, ty = {
  transform(e, t) {
    var {
      current: r,
      affinity: n
    } = e;
    if (r != null) {
      var a = Ge.transform(r, t, {
        affinity: n
      });
      e.current = a, a == null && e.unref();
    }
  }
}, ry = {
  transform(e, t) {
    var {
      current: r,
      affinity: n
    } = e;
    if (r != null) {
      var a = X.transform(r, t, {
        affinity: n
      });
      e.current = a, a == null && e.unref();
    }
  }
}, ws = /* @__PURE__ */ new WeakMap(), Ds = /* @__PURE__ */ new WeakMap(), Uo = /* @__PURE__ */ new WeakMap(), mm = /* @__PURE__ */ new WeakMap(), Uf = /* @__PURE__ */ new WeakMap(), Gf = /* @__PURE__ */ new WeakMap(), Xf = /* @__PURE__ */ new WeakMap(), L = {
  ancestors(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: r = !1
    } = t, n = L.levels(e, t);
    return r ? n = n.slice(1) : n = n.slice(0, -1), n;
  },
  common(e, t) {
    for (var r = [], n = 0; n < e.length && n < t.length; n++) {
      var a = e[n], o = t[n];
      if (a !== o)
        break;
      r.push(a);
    }
    return r;
  },
  compare(e, t) {
    for (var r = Math.min(e.length, t.length), n = 0; n < r; n++) {
      if (e[n] < t[n])
        return -1;
      if (e[n] > t[n])
        return 1;
    }
    return 0;
  },
  endsAfter(e, t) {
    var r = e.length - 1, n = e.slice(0, r), a = t.slice(0, r), o = e[r], i = t[r];
    return L.equals(n, a) && o > i;
  },
  endsAt(e, t) {
    var r = e.length, n = e.slice(0, r), a = t.slice(0, r);
    return L.equals(n, a);
  },
  endsBefore(e, t) {
    var r = e.length - 1, n = e.slice(0, r), a = t.slice(0, r), o = e[r], i = t[r];
    return L.equals(n, a) && o < i;
  },
  equals(e, t) {
    return e.length === t.length && e.every((r, n) => r === t[n]);
  },
  hasPrevious(e) {
    return e[e.length - 1] > 0;
  },
  isAfter(e, t) {
    return L.compare(e, t) === 1;
  },
  isAncestor(e, t) {
    return e.length < t.length && L.compare(e, t) === 0;
  },
  isBefore(e, t) {
    return L.compare(e, t) === -1;
  },
  isChild(e, t) {
    return e.length === t.length + 1 && L.compare(e, t) === 0;
  },
  isCommon(e, t) {
    return e.length <= t.length && L.compare(e, t) === 0;
  },
  isDescendant(e, t) {
    return e.length > t.length && L.compare(e, t) === 0;
  },
  isParent(e, t) {
    return e.length + 1 === t.length && L.compare(e, t) === 0;
  },
  isPath(e) {
    return Array.isArray(e) && (e.length === 0 || typeof e[0] == "number");
  },
  isSibling(e, t) {
    if (e.length !== t.length)
      return !1;
    var r = e.slice(0, -1), n = t.slice(0, -1), a = e[e.length - 1], o = t[t.length - 1];
    return a !== o && L.equals(r, n);
  },
  levels(e) {
    for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: r = !1
    } = t, n = [], a = 0; a <= e.length; a++)
      n.push(e.slice(0, a));
    return r && n.reverse(), n;
  },
  next(e) {
    if (e.length === 0)
      throw new Error("Cannot get the next path of a root path [".concat(e, "], because it has no next index."));
    var t = e[e.length - 1];
    return e.slice(0, -1).concat(t + 1);
  },
  operationCanTransformPath(e) {
    switch (e.type) {
      case "insert_node":
      case "remove_node":
      case "merge_node":
      case "split_node":
      case "move_node":
        return !0;
      default:
        return !1;
    }
  },
  parent(e) {
    if (e.length === 0)
      throw new Error("Cannot get the parent path of the root path [".concat(e, "]."));
    return e.slice(0, -1);
  },
  previous(e) {
    if (e.length === 0)
      throw new Error("Cannot get the previous path of a root path [".concat(e, "], because it has no previous index."));
    var t = e[e.length - 1];
    if (t <= 0)
      throw new Error("Cannot get the previous path of a first child path [".concat(e, "] because it would result in a negative index."));
    return e.slice(0, -1).concat(t - 1);
  },
  relative(e, t) {
    if (!L.isAncestor(t, e) && !L.equals(e, t))
      throw new Error("Cannot get the relative path of [".concat(e, "] inside ancestor [").concat(t, "], because it is not above or equal to the path."));
    return e.slice(t.length);
  },
  transform(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!e)
      return null;
    var n = [...e], {
      affinity: a = "forward"
    } = r;
    if (e.length === 0)
      return n;
    switch (t.type) {
      case "insert_node": {
        var {
          path: o
        } = t;
        (L.equals(o, n) || L.endsBefore(o, n) || L.isAncestor(o, n)) && (n[o.length - 1] += 1);
        break;
      }
      case "remove_node": {
        var {
          path: i
        } = t;
        if (L.equals(i, n) || L.isAncestor(i, n))
          return null;
        L.endsBefore(i, n) && (n[i.length - 1] -= 1);
        break;
      }
      case "merge_node": {
        var {
          path: s,
          position: u
        } = t;
        L.equals(s, n) || L.endsBefore(s, n) ? n[s.length - 1] -= 1 : L.isAncestor(s, n) && (n[s.length - 1] -= 1, n[s.length] += u);
        break;
      }
      case "split_node": {
        var {
          path: l,
          position: c
        } = t;
        if (L.equals(l, n)) {
          if (a === "forward")
            n[n.length - 1] += 1;
          else if (a !== "backward")
            return null;
        } else
          L.endsBefore(l, n) ? n[l.length - 1] += 1 : L.isAncestor(l, n) && e[l.length] >= c && (n[l.length - 1] += 1, n[l.length] -= c);
        break;
      }
      case "move_node": {
        var {
          path: d,
          newPath: v
        } = t;
        if (L.equals(d, v))
          return n;
        if (L.isAncestor(d, n) || L.equals(d, n)) {
          var p = v.slice();
          return L.endsBefore(d, v) && d.length < v.length && (p[d.length - 1] -= 1), p.concat(n.slice(d.length));
        } else
          L.isSibling(d, v) && (L.isAncestor(v, n) || L.equals(v, n)) ? L.endsBefore(d, n) ? n[d.length - 1] -= 1 : n[d.length - 1] += 1 : L.endsBefore(v, n) || L.equals(v, n) || L.isAncestor(v, n) ? (L.endsBefore(d, n) && (n[d.length - 1] -= 1), n[v.length - 1] += 1) : L.endsBefore(d, n) && (L.equals(v, n) && (n[v.length - 1] += 1), n[d.length - 1] -= 1);
        break;
      }
    }
    return n;
  }
};
function oi(e) {
  "@babel/helpers - typeof";
  return oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oi(e);
}
function ny(e, t) {
  if (oi(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (oi(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ay(e) {
  var t = ny(e, "string");
  return oi(t) === "symbol" ? t : String(t);
}
function pr(e, t, r) {
  return t = ay(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Yf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function To(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yf(Object(r), !0).forEach(function(n) {
      pr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var oy = (e, t, r) => {
  switch (r.type) {
    case "insert_node": {
      var {
        path: n,
        node: a
      } = r, o = me.parent(e, n), i = n[n.length - 1];
      if (i > o.children.length)
        throw new Error('Cannot apply an "insert_node" operation at path ['.concat(n, "] because the destination is past the end of the node."));
      if (o.children.splice(i, 0, a), t)
        for (var [s, u] of X.points(t))
          t[u] = Ge.transform(s, r);
      break;
    }
    case "insert_text": {
      var {
        path: l,
        offset: c,
        text: d
      } = r;
      if (d.length === 0)
        break;
      var v = me.leaf(e, l), p = v.text.slice(0, c), h = v.text.slice(c);
      if (v.text = p + d + h, t)
        for (var [f, m] of X.points(t))
          t[m] = Ge.transform(f, r);
      break;
    }
    case "merge_node": {
      var {
        path: b
      } = r, E = me.get(e, b), y = L.previous(b), w = me.get(e, y), S = me.parent(e, b), D = b[b.length - 1];
      if (Oe.isText(E) && Oe.isText(w))
        w.text += E.text;
      else if (!Oe.isText(E) && !Oe.isText(w))
        w.children.push(...E.children);
      else
        throw new Error('Cannot apply a "merge_node" operation at path ['.concat(b, "] to nodes of different interfaces: ").concat(Qt.stringify(E), " ").concat(Qt.stringify(w)));
      if (S.children.splice(D, 1), t)
        for (var [x, A] of X.points(t))
          t[A] = Ge.transform(x, r);
      break;
    }
    case "move_node": {
      var {
        path: O,
        newPath: B
      } = r;
      if (L.isAncestor(O, B))
        throw new Error("Cannot move a path [".concat(O, "] to new path [").concat(B, "] because the destination is inside itself."));
      var j = me.get(e, O), T = me.parent(e, O), $ = O[O.length - 1];
      T.children.splice($, 1);
      var P = L.transform(O, r), R = me.get(e, L.parent(P)), M = P[P.length - 1];
      if (R.children.splice(M, 0, j), t)
        for (var [F, N] of X.points(t))
          t[N] = Ge.transform(F, r);
      break;
    }
    case "remove_node": {
      var {
        path: V
      } = r, k = V[V.length - 1], W = me.parent(e, V);
      if (W.children.splice(k, 1), t)
        for (var [U, Q] of X.points(t)) {
          var I = Ge.transform(U, r);
          if (t != null && I != null)
            t[Q] = I;
          else {
            var z = void 0, H = void 0;
            for (var [G, re] of me.texts(e))
              if (L.compare(re, V) === -1)
                z = [G, re];
              else {
                H = [G, re];
                break;
              }
            var te = !1;
            z && H && (L.equals(H[1], V) ? te = !L.hasPrevious(H[1]) : te = L.common(z[1], V).length < L.common(H[1], V).length), z && !te ? (U.path = z[1], U.offset = z[0].text.length) : H ? (U.path = H[1], U.offset = 0) : t = null;
          }
        }
      break;
    }
    case "remove_text": {
      var {
        path: de,
        offset: se,
        text: he
      } = r;
      if (he.length === 0)
        break;
      var ce = me.leaf(e, de), q = ce.text.slice(0, se), pe = ce.text.slice(se + he.length);
      if (ce.text = q + pe, t)
        for (var [De, Ce] of X.points(t))
          t[Ce] = Ge.transform(De, r);
      break;
    }
    case "set_node": {
      var {
        path: Ee,
        properties: oe,
        newProperties: ue
      } = r;
      if (Ee.length === 0)
        throw new Error("Cannot set properties on the root node!");
      var ge = me.get(e, Ee);
      for (var be in ue) {
        if (be === "children" || be === "text")
          throw new Error('Cannot set the "'.concat(be, '" property of nodes!'));
        var ye = ue[be];
        ye == null ? delete ge[be] : ge[be] = ye;
      }
      for (var Ne in oe)
        ue.hasOwnProperty(Ne) || delete ge[Ne];
      break;
    }
    case "set_selection": {
      var {
        newProperties: $e
      } = r;
      if ($e == null)
        t = $e;
      else {
        if (t == null) {
          if (!X.isRange($e))
            throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(Qt.stringify($e), " when there is no current selection."));
          t = To({}, $e);
        }
        for (var je in $e) {
          var yt = $e[je];
          if (yt == null) {
            if (je === "anchor" || je === "focus")
              throw new Error('Cannot remove the "'.concat(je, '" selection property'));
            delete t[je];
          } else
            t[je] = yt;
        }
      }
      break;
    }
    case "split_node": {
      var {
        path: Le,
        position: we,
        properties: ze
      } = r;
      if (Le.length === 0)
        throw new Error('Cannot apply a "split_node" operation at path ['.concat(Le, "] because the root node cannot be split."));
      var Ve = me.get(e, Le), kt = me.parent(e, Le), tt = Le[Le.length - 1], Bt;
      if (Oe.isText(Ve)) {
        var ht = Ve.text.slice(0, we), Qe = Ve.text.slice(we);
        Ve.text = ht, Bt = To(To({}, ze), {}, {
          text: Qe
        });
      } else {
        var st = Ve.children.slice(0, we), Wt = Ve.children.slice(we);
        Ve.children = st, Bt = To(To({}, ze), {}, {
          children: Wt
        });
      }
      if (kt.children.splice(tt + 1, 0, Bt), t)
        for (var [wt, fe] of X.points(t))
          t[fe] = Ge.transform(wt, r);
      break;
    }
  }
  return t;
}, iy = {
  transform(e, t) {
    e.children = Kf(e.children);
    var r = e.selection && Kf(e.selection);
    try {
      r = oy(e, r, t);
    } finally {
      e.children = qf(e.children), r ? e.selection = Sa(r) ? qf(r) : r : e.selection = null;
    }
  }
}, sy = {
  insertNodes(e, t, r) {
    e.insertNodes(t, r);
  },
  liftNodes(e, t) {
    e.liftNodes(t);
  },
  mergeNodes(e, t) {
    e.mergeNodes(t);
  },
  moveNodes(e, t) {
    e.moveNodes(t);
  },
  removeNodes(e, t) {
    e.removeNodes(t);
  },
  setNodes(e, t, r) {
    e.setNodes(t, r);
  },
  splitNodes(e, t) {
    e.splitNodes(t);
  },
  unsetNodes(e, t, r) {
    e.unsetNodes(t, r);
  },
  unwrapNodes(e, t) {
    e.unwrapNodes(t);
  },
  wrapNodes(e, t, r) {
    e.wrapNodes(t, r);
  }
}, uy = {
  collapse(e, t) {
    e.collapse(t);
  },
  deselect(e) {
    e.deselect();
  },
  move(e, t) {
    e.move(t);
  },
  select(e, t) {
    e.select(t);
  },
  setPoint(e, t, r) {
    e.setPoint(t, r);
  },
  setSelection(e, t) {
    e.setSelection(t);
  }
}, hm = (e, t) => {
  for (var r in e) {
    var n = e[r], a = t[r];
    if (rr(n) && rr(a)) {
      if (!hm(n, a))
        return !1;
    } else if (Array.isArray(n) && Array.isArray(a)) {
      if (n.length !== a.length)
        return !1;
      for (var o = 0; o < n.length; o++)
        if (n[o] !== a[o])
          return !1;
    } else if (n !== a)
      return !1;
  }
  for (var i in t)
    if (e[i] === void 0 && t[i] !== void 0)
      return !1;
  return !0;
};
function ly(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Rn(e, t) {
  if (e == null)
    return {};
  var r = ly(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
var cy = ["anchor", "focus"];
function Zf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zf(Object(r), !0).forEach(function(n) {
      pr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var X = {
  edges(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: r = !1
    } = t, {
      anchor: n,
      focus: a
    } = e;
    return X.isBackward(e) === r ? [n, a] : [a, n];
  },
  end(e) {
    var [, t] = X.edges(e);
    return t;
  },
  equals(e, t) {
    return Ge.equals(e.anchor, t.anchor) && Ge.equals(e.focus, t.focus);
  },
  includes(e, t) {
    if (X.isRange(t)) {
      if (X.includes(e, t.anchor) || X.includes(e, t.focus))
        return !0;
      var [r, n] = X.edges(e), [a, o] = X.edges(t);
      return Ge.isBefore(r, a) && Ge.isAfter(n, o);
    }
    var [i, s] = X.edges(e), u = !1, l = !1;
    return Ge.isPoint(t) ? (u = Ge.compare(t, i) >= 0, l = Ge.compare(t, s) <= 0) : (u = L.compare(t, i.path) >= 0, l = L.compare(t, s.path) <= 0), u && l;
  },
  intersection(e, t) {
    var r = Rn(e, cy), [n, a] = X.edges(e), [o, i] = X.edges(t), s = Ge.isBefore(n, o) ? o : n, u = Ge.isBefore(a, i) ? a : i;
    return Ge.isBefore(u, s) ? null : fy({
      anchor: s,
      focus: u
    }, r);
  },
  isBackward(e) {
    var {
      anchor: t,
      focus: r
    } = e;
    return Ge.isAfter(t, r);
  },
  isCollapsed(e) {
    var {
      anchor: t,
      focus: r
    } = e;
    return Ge.equals(t, r);
  },
  isExpanded(e) {
    return !X.isCollapsed(e);
  },
  isForward(e) {
    return !X.isBackward(e);
  },
  isRange(e) {
    return rr(e) && Ge.isPoint(e.anchor) && Ge.isPoint(e.focus);
  },
  *points(e) {
    yield [e.anchor, "anchor"], yield [e.focus, "focus"];
  },
  start(e) {
    var [t] = X.edges(e);
    return t;
  },
  transform(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return Ic(e, (n) => {
      if (n === null)
        return null;
      var {
        affinity: a = "inward"
      } = r, o, i;
      if (a === "inward") {
        var s = X.isCollapsed(n);
        X.isForward(n) ? (o = "forward", i = s ? o : "backward") : (o = "backward", i = s ? o : "forward");
      } else
        a === "outward" ? X.isForward(n) ? (o = "backward", i = "forward") : (o = "forward", i = "backward") : (o = a, i = a);
      var u = Ge.transform(n.anchor, t, {
        affinity: o
      }), l = Ge.transform(n.focus, t, {
        affinity: i
      });
      if (!u || !l)
        return null;
      n.anchor = u, n.focus = l;
    });
  }
}, Qf = (e) => rr(e) && me.isNodeList(e.children) && !C.isEditor(e), le = {
  isAncestor(e) {
    return rr(e) && me.isNodeList(e.children);
  },
  isElement: Qf,
  isElementList(e) {
    return Array.isArray(e) && e.every((t) => le.isElement(t));
  },
  isElementProps(e) {
    return e.children !== void 0;
  },
  isElementType: function(t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
    return Qf(t) && t[n] === r;
  },
  matches(e, t) {
    for (var r in t)
      if (r !== "children" && e[r] !== t[r])
        return !1;
    return !0;
  }
}, dy = ["children"], vy = ["text"], Jf = /* @__PURE__ */ new WeakMap(), me = {
  ancestor(e, t) {
    var r = me.get(e, t);
    if (Oe.isText(r))
      throw new Error("Cannot get the ancestor node at path [".concat(t, "] because it refers to a text node instead: ").concat(Qt.stringify(r)));
    return r;
  },
  ancestors(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var n of L.ancestors(t, r)) {
        var a = me.ancestor(e, n), o = [a, n];
        yield o;
      }
    }();
  },
  child(e, t) {
    if (Oe.isText(e))
      throw new Error("Cannot get the child of a text node: ".concat(Qt.stringify(e)));
    var r = e.children[t];
    if (r == null)
      throw new Error("Cannot get child at index `".concat(t, "` in node: ").concat(Qt.stringify(e)));
    return r;
  },
  children(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var {
        reverse: n = !1
      } = r, a = me.ancestor(e, t), {
        children: o
      } = a, i = n ? o.length - 1 : 0; n ? i >= 0 : i < o.length; ) {
        var s = me.child(a, i), u = t.concat(i);
        yield [s, u], i = n ? i - 1 : i + 1;
      }
    }();
  },
  common(e, t, r) {
    var n = L.common(t, r), a = me.get(e, n);
    return [a, n];
  },
  descendant(e, t) {
    var r = me.get(e, t);
    if (C.isEditor(r))
      throw new Error("Cannot get the descendant node at path [".concat(t, "] because it refers to the root editor node instead: ").concat(Qt.stringify(r)));
    return r;
  },
  descendants(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of me.nodes(e, t))
        n.length !== 0 && (yield [r, n]);
    }();
  },
  elements(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of me.nodes(e, t))
        le.isElement(r) && (yield [r, n]);
    }();
  },
  extractProps(e) {
    if (le.isAncestor(e)) {
      var t = Rn(e, dy);
      return t;
    } else {
      var t = Rn(e, vy);
      return t;
    }
  },
  first(e, t) {
    for (var r = t.slice(), n = me.get(e, r); n && !(Oe.isText(n) || n.children.length === 0); )
      n = n.children[0], r.push(0);
    return [n, r];
  },
  fragment(e, t) {
    if (Oe.isText(e))
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(Qt.stringify(e)));
    var r = Ic({
      children: e.children
    }, (n) => {
      var [a, o] = X.edges(t), i = me.nodes(n, {
        reverse: !0,
        pass: (v) => {
          var [, p] = v;
          return !X.includes(t, p);
        }
      });
      for (var [, s] of i) {
        if (!X.includes(t, s)) {
          var u = me.parent(n, s), l = s[s.length - 1];
          u.children.splice(l, 1);
        }
        if (L.equals(s, o.path)) {
          var c = me.leaf(n, s);
          c.text = c.text.slice(0, o.offset);
        }
        if (L.equals(s, a.path)) {
          var d = me.leaf(n, s);
          d.text = d.text.slice(a.offset);
        }
      }
      C.isEditor(n) && (n.selection = null);
    });
    return r.children;
  },
  get(e, t) {
    for (var r = e, n = 0; n < t.length; n++) {
      var a = t[n];
      if (Oe.isText(r) || !r.children[a])
        throw new Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(Qt.stringify(e)));
      r = r.children[a];
    }
    return r;
  },
  has(e, t) {
    for (var r = e, n = 0; n < t.length; n++) {
      var a = t[n];
      if (Oe.isText(r) || !r.children[a])
        return !1;
      r = r.children[a];
    }
    return !0;
  },
  isNode(e) {
    return Oe.isText(e) || le.isElement(e) || C.isEditor(e);
  },
  isNodeList(e) {
    if (!Array.isArray(e))
      return !1;
    var t = Jf.get(e);
    if (t !== void 0)
      return t;
    var r = e.every((n) => me.isNode(n));
    return Jf.set(e, r), r;
  },
  last(e, t) {
    for (var r = t.slice(), n = me.get(e, r); n && !(Oe.isText(n) || n.children.length === 0); ) {
      var a = n.children.length - 1;
      n = n.children[a], r.push(a);
    }
    return [n, r];
  },
  leaf(e, t) {
    var r = me.get(e, t);
    if (!Oe.isText(r))
      throw new Error("Cannot get the leaf node at path [".concat(t, "] because it refers to a non-leaf node: ").concat(Qt.stringify(r)));
    return r;
  },
  levels(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var n of L.levels(t, r)) {
        var a = me.get(e, n);
        yield [a, n];
      }
    }();
  },
  matches(e, t) {
    return le.isElement(e) && le.isElementProps(t) && le.matches(e, t) || Oe.isText(e) && Oe.isTextProps(t) && Oe.matches(e, t);
  },
  nodes(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var {
        pass: r,
        reverse: n = !1
      } = t, {
        from: a = [],
        to: o
      } = t, i = /* @__PURE__ */ new Set(), s = [], u = e; !(o && (n ? L.isBefore(s, o) : L.isAfter(s, o))); ) {
        if (i.has(u) || (yield [u, s]), !i.has(u) && !Oe.isText(u) && u.children.length !== 0 && (r == null || r([u, s]) === !1)) {
          i.add(u);
          var l = n ? u.children.length - 1 : 0;
          L.isAncestor(s, a) && (l = a[s.length]), s = s.concat(l), u = me.get(e, s);
          continue;
        }
        if (s.length === 0)
          break;
        if (!n) {
          var c = L.next(s);
          if (me.has(e, c)) {
            s = c, u = me.get(e, s);
            continue;
          }
        }
        if (n && s[s.length - 1] !== 0) {
          var d = L.previous(s);
          s = d, u = me.get(e, s);
          continue;
        }
        s = L.parent(s), u = me.get(e, s), i.add(u);
      }
    }();
  },
  parent(e, t) {
    var r = L.parent(t), n = me.get(e, r);
    if (Oe.isText(n))
      throw new Error("Cannot get the parent of path [".concat(t, "] because it does not exist in the root."));
    return n;
  },
  string(e) {
    return Oe.isText(e) ? e.text : e.children.map(me.string).join("");
  },
  texts(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of me.nodes(e, t))
        Oe.isText(r) && (yield [r, n]);
    }();
  }
};
function ed(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ed(Object(r), !0).forEach(function(n) {
      pr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ed(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Kn = {
  isNodeOperation(e) {
    return Kn.isOperation(e) && e.type.endsWith("_node");
  },
  isOperation(e) {
    if (!rr(e))
      return !1;
    switch (e.type) {
      case "insert_node":
        return L.isPath(e.path) && me.isNode(e.node);
      case "insert_text":
        return typeof e.offset == "number" && typeof e.text == "string" && L.isPath(e.path);
      case "merge_node":
        return typeof e.position == "number" && L.isPath(e.path) && rr(e.properties);
      case "move_node":
        return L.isPath(e.path) && L.isPath(e.newPath);
      case "remove_node":
        return L.isPath(e.path) && me.isNode(e.node);
      case "remove_text":
        return typeof e.offset == "number" && typeof e.text == "string" && L.isPath(e.path);
      case "set_node":
        return L.isPath(e.path) && rr(e.properties) && rr(e.newProperties);
      case "set_selection":
        return e.properties === null && X.isRange(e.newProperties) || e.newProperties === null && X.isRange(e.properties) || rr(e.properties) && rr(e.newProperties);
      case "split_node":
        return L.isPath(e.path) && typeof e.position == "number" && rr(e.properties);
      default:
        return !1;
    }
  },
  isOperationList(e) {
    return Array.isArray(e) && e.every((t) => Kn.isOperation(t));
  },
  isSelectionOperation(e) {
    return Kn.isOperation(e) && e.type.endsWith("_selection");
  },
  isTextOperation(e) {
    return Kn.isOperation(e) && e.type.endsWith("_text");
  },
  inverse(e) {
    switch (e.type) {
      case "insert_node":
        return Pt(Pt({}, e), {}, {
          type: "remove_node"
        });
      case "insert_text":
        return Pt(Pt({}, e), {}, {
          type: "remove_text"
        });
      case "merge_node":
        return Pt(Pt({}, e), {}, {
          type: "split_node",
          path: L.previous(e.path)
        });
      case "move_node": {
        var {
          newPath: t,
          path: r
        } = e;
        if (L.equals(t, r))
          return e;
        if (L.isSibling(r, t))
          return Pt(Pt({}, e), {}, {
            path: t,
            newPath: r
          });
        var n = L.transform(r, e), a = L.transform(L.next(r), e);
        return Pt(Pt({}, e), {}, {
          path: n,
          newPath: a
        });
      }
      case "remove_node":
        return Pt(Pt({}, e), {}, {
          type: "insert_node"
        });
      case "remove_text":
        return Pt(Pt({}, e), {}, {
          type: "insert_text"
        });
      case "set_node": {
        var {
          properties: o,
          newProperties: i
        } = e;
        return Pt(Pt({}, e), {}, {
          properties: i,
          newProperties: o
        });
      }
      case "set_selection": {
        var {
          properties: s,
          newProperties: u
        } = e;
        return s == null ? Pt(Pt({}, e), {}, {
          properties: u,
          newProperties: null
        }) : u == null ? Pt(Pt({}, e), {}, {
          properties: null,
          newProperties: s
        }) : Pt(Pt({}, e), {}, {
          properties: u,
          newProperties: s
        });
      }
      case "split_node":
        return Pt(Pt({}, e), {}, {
          type: "merge_node",
          path: L.next(e.path)
        });
    }
  }
}, td = /* @__PURE__ */ new WeakMap(), gy = (e) => {
  var t = td.get(e);
  if (t !== void 0)
    return t;
  if (!rr(e))
    return !1;
  var r = typeof e.addMark == "function" && typeof e.apply == "function" && typeof e.deleteFragment == "function" && typeof e.insertBreak == "function" && typeof e.insertSoftBreak == "function" && typeof e.insertFragment == "function" && typeof e.insertNode == "function" && typeof e.insertText == "function" && typeof e.isElementReadOnly == "function" && typeof e.isInline == "function" && typeof e.isSelectable == "function" && typeof e.isVoid == "function" && typeof e.normalizeNode == "function" && typeof e.onChange == "function" && typeof e.removeMark == "function" && typeof e.getDirtyPaths == "function" && (e.marks === null || rr(e.marks)) && (e.selection === null || X.isRange(e.selection)) && me.isNodeList(e.children) && Kn.isOperationList(e.operations);
  return td.set(e, r), r;
}, C = {
  above(e, t) {
    return e.above(t);
  },
  addMark(e, t, r) {
    e.addMark(t, r);
  },
  after(e, t, r) {
    return e.after(t, r);
  },
  before(e, t, r) {
    return e.before(t, r);
  },
  deleteBackward(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      unit: r = "character"
    } = t;
    e.deleteBackward(r);
  },
  deleteForward(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      unit: r = "character"
    } = t;
    e.deleteForward(r);
  },
  deleteFragment(e, t) {
    e.deleteFragment(t);
  },
  edges(e, t) {
    return e.edges(t);
  },
  elementReadOnly(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.elementReadOnly(t);
  },
  end(e, t) {
    return e.end(t);
  },
  first(e, t) {
    return e.first(t);
  },
  fragment(e, t) {
    return e.fragment(t);
  },
  hasBlocks(e, t) {
    return e.hasBlocks(t);
  },
  hasInlines(e, t) {
    return e.hasInlines(t);
  },
  hasPath(e, t) {
    return e.hasPath(t);
  },
  hasTexts(e, t) {
    return e.hasTexts(t);
  },
  insertBreak(e) {
    e.insertBreak();
  },
  insertFragment(e, t, r) {
    e.insertFragment(t, r);
  },
  insertNode(e, t) {
    e.insertNode(t);
  },
  insertSoftBreak(e) {
    e.insertSoftBreak();
  },
  insertText(e, t) {
    e.insertText(t);
  },
  isBlock(e, t) {
    return e.isBlock(t);
  },
  isEdge(e, t, r) {
    return e.isEdge(t, r);
  },
  isEditor(e) {
    return gy(e);
  },
  isElementReadOnly(e, t) {
    return e.isElementReadOnly(t);
  },
  isEmpty(e, t) {
    return e.isEmpty(t);
  },
  isEnd(e, t, r) {
    return e.isEnd(t, r);
  },
  isInline(e, t) {
    return e.isInline(t);
  },
  isNormalizing(e) {
    return e.isNormalizing();
  },
  isSelectable(e, t) {
    return e.isSelectable(t);
  },
  isStart(e, t, r) {
    return e.isStart(t, r);
  },
  isVoid(e, t) {
    return e.isVoid(t);
  },
  last(e, t) {
    return e.last(t);
  },
  leaf(e, t, r) {
    return e.leaf(t, r);
  },
  levels(e, t) {
    return e.levels(t);
  },
  marks(e) {
    return e.getMarks();
  },
  next(e, t) {
    return e.next(t);
  },
  node(e, t, r) {
    return e.node(t, r);
  },
  nodes(e, t) {
    return e.nodes(t);
  },
  normalize(e, t) {
    e.normalize(t);
  },
  parent(e, t, r) {
    return e.parent(t, r);
  },
  path(e, t, r) {
    return e.path(t, r);
  },
  pathRef(e, t, r) {
    return e.pathRef(t, r);
  },
  pathRefs(e) {
    return e.pathRefs();
  },
  point(e, t, r) {
    return e.point(t, r);
  },
  pointRef(e, t, r) {
    return e.pointRef(t, r);
  },
  pointRefs(e) {
    return e.pointRefs();
  },
  positions(e, t) {
    return e.positions(t);
  },
  previous(e, t) {
    return e.previous(t);
  },
  range(e, t, r) {
    return e.range(t, r);
  },
  rangeRef(e, t, r) {
    return e.rangeRef(t, r);
  },
  rangeRefs(e) {
    return e.rangeRefs();
  },
  removeMark(e, t) {
    e.removeMark(t);
  },
  setNormalizing(e, t) {
    e.setNormalizing(t);
  },
  start(e, t) {
    return e.start(t);
  },
  string(e, t, r) {
    return e.string(t, r);
  },
  unhangRange(e, t, r) {
    return e.unhangRange(t, r);
  },
  void(e, t) {
    return e.void(t);
  },
  withoutNormalizing(e, t) {
    e.withoutNormalizing(t);
  }
}, GI = {
  isLocation(e) {
    return L.isPath(e) || Ge.isPoint(e) || X.isRange(e);
  }
}, my = {
  isSpan(e) {
    return Array.isArray(e) && e.length === 2 && e.every(L.isPath);
  }
};
function rd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rd(Object(r), !0).forEach(function(n) {
      pr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Ge = {
  compare(e, t) {
    var r = L.compare(e.path, t.path);
    return r === 0 ? e.offset < t.offset ? -1 : e.offset > t.offset ? 1 : 0 : r;
  },
  isAfter(e, t) {
    return Ge.compare(e, t) === 1;
  },
  isBefore(e, t) {
    return Ge.compare(e, t) === -1;
  },
  equals(e, t) {
    return e.offset === t.offset && L.equals(e.path, t.path);
  },
  isPoint(e) {
    return rr(e) && typeof e.offset == "number" && L.isPath(e.path);
  },
  transform(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return Ic(e, (n) => {
      if (n === null)
        return null;
      var {
        affinity: a = "forward"
      } = r, {
        path: o,
        offset: i
      } = n;
      switch (t.type) {
        case "insert_node":
        case "move_node": {
          n.path = L.transform(o, t, r);
          break;
        }
        case "insert_text": {
          L.equals(t.path, o) && (t.offset < i || t.offset === i && a === "forward") && (n.offset += t.text.length);
          break;
        }
        case "merge_node": {
          L.equals(t.path, o) && (n.offset += t.position), n.path = L.transform(o, t, r);
          break;
        }
        case "remove_text": {
          L.equals(t.path, o) && t.offset <= i && (n.offset -= Math.min(i - t.offset, t.text.length));
          break;
        }
        case "remove_node": {
          if (L.equals(t.path, o) || L.isAncestor(t.path, o))
            return null;
          n.path = L.transform(o, t, r);
          break;
        }
        case "split_node": {
          if (L.equals(t.path, o)) {
            if (t.position === i && a == null)
              return null;
            (t.position < i || t.position === i && a === "forward") && (n.offset -= t.position, n.path = L.transform(o, t, nd(nd({}, r), {}, {
              affinity: "forward"
            })));
          } else
            n.path = L.transform(o, t, r);
          break;
        }
      }
    });
  }
}, ad = void 0, Qt = {
  setScrubber(e) {
    ad = e;
  },
  stringify(e) {
    return JSON.stringify(e, ad);
  }
}, hy = ["text"], py = ["anchor", "focus"];
function od(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? od(Object(r), !0).forEach(function(n) {
      pr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : od(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Oe = {
  equals(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      loose: n = !1
    } = r;
    function a(o) {
      var i = Rn(o, hy);
      return i;
    }
    return hm(n ? a(e) : e, n ? a(t) : t);
  },
  isText(e) {
    return rr(e) && typeof e.text == "string";
  },
  isTextList(e) {
    return Array.isArray(e) && e.every((t) => Oe.isText(t));
  },
  isTextProps(e) {
    return e.text !== void 0;
  },
  matches(e, t) {
    for (var r in t)
      if (r !== "text" && (!e.hasOwnProperty(r) || e[r] !== t[r]))
        return !1;
    return !0;
  },
  decorations(e, t) {
    var r = [wn({}, e)];
    for (var n of t) {
      var a = Rn(n, py), [o, i] = X.edges(n), s = [], u = 0, l = o.offset, c = i.offset;
      for (var d of r) {
        var {
          length: v
        } = d.text, p = u;
        if (u += v, l <= p && u <= c) {
          Object.assign(d, a), s.push(d);
          continue;
        }
        if (l !== c && (l === u || c === p) || l > u || c < p || c === p && p !== 0) {
          s.push(d);
          continue;
        }
        var h = d, f = void 0, m = void 0;
        if (c < u) {
          var b = c - p;
          m = wn(wn({}, h), {}, {
            text: h.text.slice(b)
          }), h = wn(wn({}, h), {}, {
            text: h.text.slice(0, b)
          });
        }
        if (l > p) {
          var E = l - p;
          f = wn(wn({}, h), {}, {
            text: h.text.slice(0, E)
          }), h = wn(wn({}, h), {}, {
            text: h.text.slice(E)
          });
        }
        Object.assign(h, a), f && s.push(f), s.push(h), m && s.push(m);
      }
      r = s;
    }
    return r;
  }
}, Mc = (e) => e.selection ? e.selection : e.children.length > 0 ? C.end(e, []) : [0], Eo = (e, t) => {
  var [r] = C.node(e, t);
  return (n) => n === r;
}, _c = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = !r, a = r ? Dy(t) : t, o = Ke.None, i = Ke.None, s = 0, u = null, l = null;
  for (var c of a) {
    var d = c.codePointAt(0);
    if (!d)
      break;
    var v = Iy(c, d);
    if ([o, i] = n ? [i, v] : [v, o], Ja(o, Ke.ZWJ) && Ja(i, Ke.ExtPict) && (n ? u = id(t.substring(0, s)) : u = id(t.substring(0, t.length - s)), !u) || Ja(o, Ke.RI) && Ja(i, Ke.RI) && (l !== null ? l = !l : n ? l = !0 : l = ky(t.substring(0, t.length - s)), !l) || o !== Ke.None && i !== Ke.None && _y(o, i))
      break;
    s += c.length;
  }
  return s || 1;
}, by = /\s/, yy = /[\u002B\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, Cy = /['\u2018\u2019]/, Ey = function(t) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = 0, a = !1; t.length > 0; ) {
    var o = _c(t, r), [i, s] = jc(t, o, r);
    if (wy(i, s, r))
      a = !0, n += o;
    else if (!a)
      n += o;
    else
      break;
    t = s;
  }
  return n;
}, jc = (e, t, r) => {
  if (r) {
    var n = e.length - t;
    return [e.slice(n, e.length), e.slice(0, n)];
  }
  return [e.slice(0, t), e.slice(t)];
}, wy = function e(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  if (by.test(t))
    return !1;
  if (Cy.test(t)) {
    var a = _c(r, n), [o, i] = jc(r, a, n);
    if (e(o, i, n))
      return !0;
  }
  return !yy.test(t);
}, Dy = function* (t) {
  for (var r = t.length - 1, n = 0; n < t.length; n++) {
    var a = t.charAt(r - n);
    if (xy(a.charCodeAt(0))) {
      var o = t.charAt(r - n - 1);
      if (Sy(o.charCodeAt(0))) {
        yield o + a, n++;
        continue;
      }
    }
    yield a;
  }
}, Sy = (e) => e >= 55296 && e <= 56319, xy = (e) => e >= 56320 && e <= 57343, Ke;
(function(e) {
  e[e.None = 0] = "None", e[e.Extend = 1] = "Extend", e[e.ZWJ = 2] = "ZWJ", e[e.RI = 4] = "RI", e[e.Prepend = 8] = "Prepend", e[e.SpacingMark = 16] = "SpacingMark", e[e.L = 32] = "L", e[e.V = 64] = "V", e[e.T = 128] = "T", e[e.LV = 256] = "LV", e[e.LVT = 512] = "LVT", e[e.ExtPict = 1024] = "ExtPict", e[e.Any = 2048] = "Any";
})(Ke || (Ke = {}));
var Oy = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/, Ay = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/, By = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/, $y = /^[\u1100-\u115F\uA960-\uA97C]$/, Fy = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/, Py = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/, Ry = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/, Ty = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/, Ny = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/, Iy = (e, t) => {
  var r = Ke.Any;
  return e.search(Oy) !== -1 && (r |= Ke.Extend), t === 8205 && (r |= Ke.ZWJ), t >= 127462 && t <= 127487 && (r |= Ke.RI), e.search(Ay) !== -1 && (r |= Ke.Prepend), e.search(By) !== -1 && (r |= Ke.SpacingMark), e.search($y) !== -1 && (r |= Ke.L), e.search(Fy) !== -1 && (r |= Ke.V), e.search(Py) !== -1 && (r |= Ke.T), e.search(Ry) !== -1 && (r |= Ke.LV), e.search(Ty) !== -1 && (r |= Ke.LVT), e.search(Ny) !== -1 && (r |= Ke.ExtPict), r;
};
function Ja(e, t) {
  return (e & t) !== 0;
}
var My = [
  // GB6
  [Ke.L, Ke.L | Ke.V | Ke.LV | Ke.LVT],
  // GB7
  [Ke.LV | Ke.V, Ke.V | Ke.T],
  // GB8
  [Ke.LVT | Ke.T, Ke.T],
  // GB9
  [Ke.Any, Ke.Extend | Ke.ZWJ],
  // GB9a
  [Ke.Any, Ke.SpacingMark],
  // GB9b
  [Ke.Prepend, Ke.Any],
  // GB11
  [Ke.ZWJ, Ke.ExtPict],
  // GB12 and GB13
  [Ke.RI, Ke.RI]
];
function _y(e, t) {
  return My.findIndex((r) => Ja(e, r[0]) && Ja(t, r[1])) === -1;
}
var jy = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/, id = (e) => e.search(jy) !== -1, Ly = /(?:\uD83C[\uDDE6-\uDDFF])+$/g, ky = (e) => {
  var t = e.match(Ly);
  if (t === null)
    return !1;
  var r = t[0].length / 2;
  return r % 2 === 1;
}, zy = {
  delete(e, t) {
    e.delete(t);
  },
  insertFragment(e, t, r) {
    e.insertFragment(t, r);
  },
  insertText(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    C.withoutNormalizing(e, () => {
      var {
        voids: n = !1
      } = r, {
        at: a = Mc(e)
      } = r;
      if (L.isPath(a) && (a = C.range(e, a)), X.isRange(a))
        if (X.isCollapsed(a))
          a = a.anchor;
        else {
          var o = X.end(a);
          if (!n && C.void(e, {
            at: o
          }))
            return;
          var i = X.start(a), s = C.pointRef(e, i), u = C.pointRef(e, o);
          ee.delete(e, {
            at: a,
            voids: n
          });
          var l = s.unref(), c = u.unref();
          a = l || c, ee.setSelection(e, {
            anchor: a,
            focus: a
          });
        }
      if (!(!n && C.void(e, {
        at: a
      }) || C.elementReadOnly(e, {
        at: a
      }))) {
        var {
          path: d,
          offset: v
        } = a;
        t.length > 0 && e.apply({
          type: "insert_text",
          path: d,
          offset: v,
          text: t
        });
      }
    });
  }
};
function sd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ii(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sd(Object(r), !0).forEach(function(n) {
      pr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var ee = Ii(Ii(Ii(Ii({}, iy), sy), uy), zy), os = /* @__PURE__ */ new WeakMap(), Vy = (e) => os.get(e) || !1, Hy = (e, t, r) => {
  var n = os.get(e) || !1;
  os.set(e, !0);
  try {
    t(), r();
  } finally {
    os.set(e, n);
  }
};
function pm(e, t, r) {
  var n = ws.get(e) || [], a = Ds.get(e) || /* @__PURE__ */ new Set(), o, i, s = (d) => {
    if (d) {
      var v = d.join(",");
      i.has(v) || (i.add(v), o.push(d));
    }
  };
  if (r) {
    o = [], i = /* @__PURE__ */ new Set();
    for (var u of n) {
      var l = r(u);
      s(l);
    }
  } else
    o = n, i = a;
  for (var c of t)
    s(c);
  ws.set(e, o), Ds.set(e, i);
}
var Wy = (e, t) => {
  for (var r of C.pathRefs(e))
    ey.transform(r, t);
  for (var n of C.pointRefs(e))
    ty.transform(n, t);
  for (var a of C.rangeRefs(e))
    ry.transform(a, t);
  if (!Vy(e)) {
    var o = L.operationCanTransformPath(t) ? (i) => L.transform(i, t) : void 0;
    pm(e, e.getDirtyPaths(t), o);
  }
  ee.transform(e, t), e.operations.push(t), C.normalize(e, {
    operation: t
  }), t.type === "set_selection" && (e.marks = null), Uo.get(e) || (Uo.set(e, !0), Promise.resolve().then(() => {
    Uo.set(e, !1), e.onChange({
      operation: t
    }), e.operations = [];
  }));
}, Ky = (e, t) => {
  switch (t.type) {
    case "insert_text":
    case "remove_text":
    case "set_node": {
      var {
        path: r
      } = t;
      return L.levels(r);
    }
    case "insert_node": {
      var {
        node: n,
        path: a
      } = t, o = L.levels(a), i = Oe.isText(n) ? [] : Array.from(me.nodes(n), (B) => {
        var [, j] = B;
        return a.concat(j);
      });
      return [...o, ...i];
    }
    case "merge_node": {
      var {
        path: s
      } = t, u = L.ancestors(s), l = L.previous(s);
      return [...u, l];
    }
    case "move_node": {
      var {
        path: c,
        newPath: d
      } = t;
      if (L.equals(c, d))
        return [];
      var v = [], p = [];
      for (var h of L.ancestors(c)) {
        var f = L.transform(h, t);
        v.push(f);
      }
      for (var m of L.ancestors(d)) {
        var b = L.transform(m, t);
        p.push(b);
      }
      var E = p[p.length - 1], y = d[d.length - 1], w = E.concat(y);
      return [...v, ...p, w];
    }
    case "remove_node": {
      var {
        path: S
      } = t, D = L.ancestors(S);
      return [...D];
    }
    case "split_node": {
      var {
        path: x
      } = t, A = L.levels(x), O = L.next(x);
      return [...A, O];
    }
    default:
      return [];
  }
}, qy = (e) => {
  var {
    selection: t
  } = e;
  return t ? me.fragment(e, t) : [];
}, Uy = (e, t) => {
  var [r, n] = t;
  if (!Oe.isText(r)) {
    if (le.isElement(r) && r.children.length === 0) {
      var a = {
        text: ""
      };
      ee.insertNodes(e, a, {
        at: n.concat(0),
        voids: !0
      });
      return;
    }
    for (var o = C.isEditor(r) ? !1 : le.isElement(r) && (e.isInline(r) || r.children.length === 0 || Oe.isText(r.children[0]) || e.isInline(r.children[0])), i = 0, s = 0; s < r.children.length; s++, i++) {
      var u = me.get(e, n);
      if (!Oe.isText(u)) {
        var l = u.children[i], c = u.children[i - 1], d = s === r.children.length - 1, v = Oe.isText(l) || le.isElement(l) && e.isInline(l);
        if (v !== o)
          ee.removeNodes(e, {
            at: n.concat(i),
            voids: !0
          }), i--;
        else if (le.isElement(l)) {
          if (e.isInline(l)) {
            if (c == null || !Oe.isText(c)) {
              var p = {
                text: ""
              };
              ee.insertNodes(e, p, {
                at: n.concat(i),
                voids: !0
              }), i++;
            } else if (d) {
              var h = {
                text: ""
              };
              ee.insertNodes(e, h, {
                at: n.concat(i + 1),
                voids: !0
              }), i++;
            }
          }
        } else
          c != null && Oe.isText(c) && (Oe.equals(l, c, {
            loose: !0
          }) ? (ee.mergeNodes(e, {
            at: n.concat(i),
            voids: !0
          }), i--) : c.text === "" ? (ee.removeNodes(e, {
            at: n.concat(i - 1),
            voids: !0
          }), i--) : l.text === "" && (ee.removeNodes(e, {
            at: n.concat(i),
            voids: !0
          }), i--));
      }
    }
  }
}, Gy = (e, t) => {
  var {
    iteration: r,
    initialDirtyPathsLength: n
  } = t, a = n * 42;
  if (r > a)
    throw new Error("Could not completely normalize the editor after ".concat(a, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state."));
  return !0;
}, Xy = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    voids: n = !1,
    mode: a = "lowest",
    at: o = t.selection,
    match: i
  } = r;
  if (o) {
    var s = C.path(t, o), u = a === "lowest";
    for (var [l, c] of C.levels(t, {
      at: s,
      voids: n,
      match: i,
      reverse: u
    }))
      if (!Oe.isText(l)) {
        if (X.isRange(o)) {
          if (L.isAncestor(c, o.anchor.path) && L.isAncestor(c, o.focus.path))
            return [l, c];
        } else if (!L.equals(s, c))
          return [l, c];
      }
  }
};
function ud(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ld(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ud(Object(r), !0).forEach(function(n) {
      pr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ud(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Yy = (e, t, r) => {
  var {
    selection: n
  } = e;
  if (n) {
    var a = (d, v) => {
      if (!Oe.isText(d))
        return !1;
      var [p, h] = C.parent(e, v);
      return !e.isVoid(p) || e.markableVoid(p);
    }, o = X.isExpanded(n), i = !1;
    if (!o) {
      var [s, u] = C.node(e, n);
      if (s && a(s, u)) {
        var [l] = C.parent(e, u);
        i = l && e.markableVoid(l);
      }
    }
    if (o || i)
      ee.setNodes(e, {
        [t]: r
      }, {
        match: a,
        split: !0,
        voids: !0
      });
    else {
      var c = ld(ld({}, C.marks(e) || {}), {}, {
        [t]: r
      });
      e.marks = c, Uo.get(e) || e.onChange();
    }
  }
};
function cd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cd(Object(r), !0).forEach(function(n) {
      pr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Zy = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = C.point(t, r, {
    edge: "end"
  }), o = C.end(t, []), i = {
    anchor: a,
    focus: o
  }, {
    distance: s = 1
  } = n, u = 0, l;
  for (var c of C.positions(t, fd(fd({}, n), {}, {
    at: i
  }))) {
    if (u > s)
      break;
    u !== 0 && (l = c), u++;
  }
  return l;
};
function dd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dd(Object(r), !0).forEach(function(n) {
      pr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Qy = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = C.start(t, []), o = C.point(t, r, {
    edge: "start"
  }), i = {
    anchor: a,
    focus: o
  }, {
    distance: s = 1
  } = n, u = 0, l;
  for (var c of C.positions(t, vd(vd({}, n), {}, {
    at: i,
    reverse: !0
  }))) {
    if (u > s)
      break;
    u !== 0 && (l = c), u++;
  }
  return l;
}, Jy = (e, t) => {
  var {
    selection: r
  } = e;
  r && X.isCollapsed(r) && ee.delete(e, {
    unit: t,
    reverse: !0
  });
}, eC = (e, t) => {
  var {
    selection: r
  } = e;
  r && X.isCollapsed(r) && ee.delete(e, {
    unit: t
  });
}, tC = function(t) {
  var {
    direction: r = "forward"
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    selection: n
  } = t;
  n && X.isExpanded(n) && ee.delete(t, {
    reverse: r === "backward"
  });
}, rC = (e, t) => [C.start(e, t), C.end(e, t)];
function gd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function md(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gd(Object(r), !0).forEach(function(n) {
      pr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var nC = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return C.above(t, md(md({}, r), {}, {
    match: (n) => le.isElement(n) && C.isElementReadOnly(t, n)
  }));
}, aC = (e, t) => C.point(e, t, {
  edge: "end"
}), oC = (e, t) => {
  var r = C.path(e, t, {
    edge: "start"
  });
  return C.node(e, r);
}, iC = (e, t) => {
  var r = C.range(e, t);
  return me.fragment(e, r);
};
function hd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hd(Object(r), !0).forEach(function(n) {
      pr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var sC = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return C.above(t, pd(pd({}, r), {}, {
    match: (n) => le.isElement(n) && C.isVoid(t, n)
  }));
}, uC = (e, t) => t.children.some((r) => le.isElement(r) && C.isBlock(e, r)), lC = (e, t) => t.children.some((r) => Oe.isText(r) || C.isInline(e, r)), cC = (e, t) => me.has(e, t), fC = (e, t) => t.children.every((r) => Oe.isText(r)), dC = (e) => {
  ee.splitNodes(e, {
    always: !0
  });
}, vC = (e, t, r) => {
  ee.insertNodes(e, t, r);
}, gC = (e) => {
  ee.splitNodes(e, {
    always: !0
  });
};
function bd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bd(Object(r), !0).forEach(function(n) {
      pr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var hC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    selection: a,
    marks: o
  } = t;
  if (a) {
    if (o) {
      var i = mC({
        text: r
      }, o);
      ee.insertNodes(t, i, {
        at: n.at,
        voids: n.voids
      });
    } else
      ee.insertText(t, r, n);
    t.marks = null;
  }
}, pC = (e, t) => !e.isInline(t), bC = (e, t, r) => C.isStart(e, t, r) || C.isEnd(e, t, r), yC = (e, t) => {
  var {
    children: r
  } = t, [n] = r;
  return r.length === 0 || r.length === 1 && Oe.isText(n) && n.text === "" && !e.isVoid(t);
}, CC = (e, t, r) => {
  var n = C.end(e, r);
  return Ge.equals(t, n);
}, EC = (e) => {
  var t = mm.get(e);
  return t === void 0 ? !0 : t;
}, wC = (e, t, r) => {
  if (t.offset !== 0)
    return !1;
  var n = C.start(e, r);
  return Ge.equals(t, n);
}, DC = (e, t) => {
  var r = C.path(e, t, {
    edge: "end"
  });
  return C.node(e, r);
}, SC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = C.path(t, r, n), o = me.leaf(t, a);
  return [o, a];
};
function xC(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: r = e.selection,
      reverse: n = !1,
      voids: a = !1
    } = t, {
      match: o
    } = t;
    if (o == null && (o = () => !0), !!r) {
      var i = [], s = C.path(e, r);
      for (var [u, l] of me.levels(e, s))
        if (o(u, l) && (i.push([u, l]), !a && le.isElement(u) && C.isVoid(e, u)))
          break;
      n && i.reverse(), yield* i;
    }
  }();
}
var OC = ["text"], AC = ["text"], BC = function(t) {
  var {
    marks: r,
    selection: n
  } = t;
  if (!n)
    return null;
  var {
    anchor: a,
    focus: o
  } = n;
  if (r)
    return r;
  if (X.isExpanded(n)) {
    var i = C.isEnd(t, a, a.path);
    if (i) {
      var s = C.after(t, a);
      s && (a = s);
    }
    var [u] = C.nodes(t, {
      match: Oe.isText,
      at: {
        anchor: a,
        focus: o
      }
    });
    if (u) {
      var [l] = u, c = Rn(l, OC);
      return c;
    } else
      return {};
  }
  var {
    path: d
  } = a, [v] = C.leaf(t, d);
  if (a.offset === 0) {
    var p = C.previous(t, {
      at: d,
      match: Oe.isText
    }), h = C.above(t, {
      match: (w) => le.isElement(w) && C.isVoid(t, w) && t.markableVoid(w)
    });
    if (!h) {
      var f = C.above(t, {
        match: (w) => le.isElement(w) && C.isBlock(t, w)
      });
      if (p && f) {
        var [m, b] = p, [, E] = f;
        L.isAncestor(E, b) && (v = m);
      }
    }
  }
  var y = Rn(v, AC);
  return y;
}, $C = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    mode: n = "lowest",
    voids: a = !1
  } = r, {
    match: o,
    at: i = t.selection
  } = r;
  if (i) {
    var s = C.after(t, i, {
      voids: a
    });
    if (s) {
      var [, u] = C.last(t, []), l = [s.path, u];
      if (L.isPath(i) && i.length === 0)
        throw new Error("Cannot get the next node from the root node!");
      if (o == null)
        if (L.isPath(i)) {
          var [c] = C.parent(t, i);
          o = (v) => c.children.includes(v);
        } else
          o = () => !0;
      var [d] = C.nodes(t, {
        at: l,
        match: o,
        mode: n,
        voids: a
      });
      return d;
    }
  }
}, FC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = C.path(t, r, n), o = me.get(t, a);
  return [o, a];
};
function PC(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: r = e.selection,
      mode: n = "all",
      universal: a = !1,
      reverse: o = !1,
      voids: i = !1,
      ignoreNonSelectable: s = !1
    } = t, {
      match: u
    } = t;
    if (u || (u = () => !0), !!r) {
      var l, c;
      if (my.isSpan(r))
        l = r[0], c = r[1];
      else {
        var d = C.path(e, r, {
          edge: "start"
        }), v = C.path(e, r, {
          edge: "end"
        });
        l = o ? v : d, c = o ? d : v;
      }
      var p = me.nodes(e, {
        reverse: o,
        from: l,
        to: c,
        pass: (w) => {
          var [S] = w;
          return le.isElement(S) ? !!(!i && (C.isVoid(e, S) || C.isElementReadOnly(e, S)) || s && !C.isSelectable(e, S)) : !1;
        }
      }), h = [], f;
      for (var [m, b] of p)
        if (!(s && le.isElement(m) && !C.isSelectable(e, m))) {
          var E = f && L.compare(b, f[1]) === 0;
          if (!(n === "highest" && E)) {
            if (!u(m, b)) {
              if (a && !E && Oe.isText(m))
                return;
              continue;
            }
            if (n === "lowest" && E) {
              f = [m, b];
              continue;
            }
            var y = n === "lowest" ? f : [m, b];
            y && (a ? h.push(y) : yield y), f = [m, b];
          }
        }
      n === "lowest" && f && (a ? h.push(f) : yield f), a && (yield* h);
    }
  }();
}
var RC = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    force: n = !1,
    operation: a
  } = r, o = (c) => ws.get(c) || [], i = (c) => Ds.get(c) || /* @__PURE__ */ new Set(), s = (c) => {
    var d = o(c).pop(), v = d.join(",");
    return i(c).delete(v), d;
  };
  if (C.isNormalizing(t)) {
    if (n) {
      var u = Array.from(me.nodes(t), (c) => {
        var [, d] = c;
        return d;
      }), l = new Set(u.map((c) => c.join(",")));
      ws.set(t, u), Ds.set(t, l);
    }
    o(t).length !== 0 && C.withoutNormalizing(t, () => {
      for (var c of o(t))
        if (me.has(t, c)) {
          var d = C.node(t, c), [v, p] = d;
          le.isElement(v) && v.children.length === 0 && t.normalizeNode(d, {
            operation: a
          });
        }
      for (var h = o(t), f = h.length, m = 0; h.length !== 0; ) {
        if (!t.shouldNormalize({
          dirtyPaths: h,
          iteration: m,
          initialDirtyPathsLength: f,
          operation: a
        }))
          return;
        var b = s(t);
        if (me.has(t, b)) {
          var E = C.node(t, b);
          t.normalizeNode(E, {
            operation: a
          });
        }
        m++, h = o(t);
      }
    });
  }
}, TC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = C.path(t, r, n), o = L.parent(a), i = C.node(t, o);
  return i;
}, NC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, o = {
    current: r,
    affinity: a,
    unref() {
      var {
        current: s
      } = o, u = C.pathRefs(t);
      return u.delete(o), o.current = null, s;
    }
  }, i = C.pathRefs(t);
  return i.add(o), o;
}, IC = (e) => {
  var t = Uf.get(e);
  return t || (t = /* @__PURE__ */ new Set(), Uf.set(e, t)), t;
}, MC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    depth: a,
    edge: o
  } = n;
  if (L.isPath(r)) {
    if (o === "start") {
      var [, i] = me.first(t, r);
      r = i;
    } else if (o === "end") {
      var [, s] = me.last(t, r);
      r = s;
    }
  }
  return X.isRange(r) && (o === "start" ? r = X.start(r) : o === "end" ? r = X.end(r) : r = L.common(r.anchor.path, r.focus.path)), Ge.isPoint(r) && (r = r.path), a != null && (r = r.slice(0, a)), r;
}, _C = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, o = {
    current: r,
    affinity: a,
    unref() {
      var {
        current: s
      } = o, u = C.pointRefs(t);
      return u.delete(o), o.current = null, s;
    }
  }, i = C.pointRefs(t);
  return i.add(o), o;
}, jC = (e) => {
  var t = Gf.get(e);
  return t || (t = /* @__PURE__ */ new Set(), Gf.set(e, t)), t;
}, LC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    edge: a = "start"
  } = n;
  if (L.isPath(r)) {
    var o;
    if (a === "end") {
      var [, i] = me.last(t, r);
      o = i;
    } else {
      var [, s] = me.first(t, r);
      o = s;
    }
    var u = me.get(t, o);
    if (!Oe.isText(u))
      throw new Error("Cannot get the ".concat(a, " point in the node at path [").concat(r, "] because it has no ").concat(a, " text node."));
    return {
      path: o,
      offset: a === "end" ? u.text.length : 0
    };
  }
  if (X.isRange(r)) {
    var [l, c] = X.edges(r);
    return a === "start" ? l : c;
  }
  return r;
};
function kC(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: r = e.selection,
      unit: n = "offset",
      reverse: a = !1,
      voids: o = !1,
      ignoreNonSelectable: i = !1
    } = t;
    if (!r)
      return;
    var s = C.range(e, r), [u, l] = X.edges(s), c = a ? l : u, d = !1, v = "", p = 0, h = 0, f = 0;
    for (var [m, b] of C.nodes(e, {
      at: r,
      reverse: a,
      voids: o,
      ignoreNonSelectable: i
    })) {
      if (le.isElement(m)) {
        if (!o && (e.isVoid(m) || e.isElementReadOnly(m))) {
          yield C.start(e, b);
          continue;
        }
        if (e.isInline(m))
          continue;
        if (C.hasInlines(e, m)) {
          var E = L.isAncestor(b, l.path) ? l : C.end(e, b), y = L.isAncestor(b, u.path) ? u : C.start(e, b);
          v = C.string(e, {
            anchor: y,
            focus: E
          }, {
            voids: o
          }), d = !0;
        }
      }
      if (Oe.isText(m)) {
        var w = L.equals(b, c.path);
        for (w ? (h = a ? c.offset : m.text.length - c.offset, f = c.offset) : (h = m.text.length, f = a ? h : 0), (w || d || n === "offset") && (yield {
          path: b,
          offset: f
        }, d = !1); ; ) {
          if (p === 0) {
            if (v === "")
              break;
            p = S(v, n, a), v = jc(v, p, a)[1];
          }
          if (f = a ? f - p : f + p, h = h - p, h < 0) {
            p = -h;
            break;
          }
          p = 0, yield {
            path: b,
            offset: f
          };
        }
      }
    }
    function S(D, x, A) {
      return x === "character" ? _c(D, A) : x === "word" ? Ey(D, A) : x === "line" || x === "block" ? D.length : 1;
    }
  }();
}
var zC = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    mode: n = "lowest",
    voids: a = !1
  } = r, {
    match: o,
    at: i = t.selection
  } = r;
  if (i) {
    var s = C.before(t, i, {
      voids: a
    });
    if (s) {
      var [, u] = C.first(t, []), l = [s.path, u];
      if (L.isPath(i) && i.length === 0)
        throw new Error("Cannot get the previous node from the root node!");
      if (o == null)
        if (L.isPath(i)) {
          var [c] = C.parent(t, i);
          o = (v) => c.children.includes(v);
        } else
          o = () => !0;
      var [d] = C.nodes(t, {
        reverse: !0,
        at: l,
        match: o,
        mode: n,
        voids: a
      });
      return d;
    }
  }
}, VC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, o = {
    current: r,
    affinity: a,
    unref() {
      var {
        current: s
      } = o, u = C.rangeRefs(t);
      return u.delete(o), o.current = null, s;
    }
  }, i = C.rangeRefs(t);
  return i.add(o), o;
}, HC = (e) => {
  var t = Xf.get(e);
  return t || (t = /* @__PURE__ */ new Set(), Xf.set(e, t)), t;
}, WC = (e, t, r) => {
  if (X.isRange(t) && !r)
    return t;
  var n = C.start(e, t), a = C.end(e, r || t);
  return {
    anchor: n,
    focus: a
  };
};
function yd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function KC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yd(Object(r), !0).forEach(function(n) {
      pr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var qC = (e, t) => {
  var {
    selection: r
  } = e;
  if (r) {
    var n = (c, d) => {
      if (!Oe.isText(c))
        return !1;
      var [v, p] = C.parent(e, d);
      return !e.isVoid(v) || e.markableVoid(v);
    }, a = X.isExpanded(r), o = !1;
    if (!a) {
      var [i, s] = C.node(e, r);
      if (i && n(i, s)) {
        var [u] = C.parent(e, s);
        o = u && e.markableVoid(u);
      }
    }
    if (a || o)
      ee.unsetNodes(e, t, {
        match: n,
        split: !0,
        voids: !0
      });
    else {
      var l = KC({}, C.marks(e) || {});
      delete l[t], e.marks = l, Uo.get(e) || e.onChange();
    }
  }
}, UC = (e, t) => {
  mm.set(e, t);
}, GC = (e, t) => C.point(e, t, {
  edge: "start"
}), XC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: a = !1
  } = n, o = C.range(t, r), [i, s] = X.edges(o), u = "";
  for (var [l, c] of C.nodes(t, {
    at: o,
    match: Oe.isText,
    voids: a
  })) {
    var d = l.text;
    L.equals(c, s.path) && (d = d.slice(0, s.offset)), L.equals(c, i.path) && (d = d.slice(i.offset)), u += d;
  }
  return u;
}, YC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: a = !1
  } = n, [o, i] = X.edges(r);
  if (o.offset !== 0 || i.offset !== 0 || X.isCollapsed(r) || L.hasPrevious(i.path))
    return r;
  var s = C.above(t, {
    at: i,
    match: (h) => le.isElement(h) && C.isBlock(t, h),
    voids: a
  }), u = s ? s[1] : [], l = C.start(t, o), c = {
    anchor: l,
    focus: i
  }, d = !0;
  for (var [v, p] of C.nodes(t, {
    at: c,
    match: Oe.isText,
    reverse: !0,
    voids: a
  })) {
    if (d) {
      d = !1;
      continue;
    }
    if (v.text !== "" || L.isBefore(p, u)) {
      i = {
        path: p,
        offset: v.text.length
      };
      break;
    }
  }
  return {
    anchor: o,
    focus: i
  };
}, ZC = (e, t) => {
  var r = C.isNormalizing(e);
  C.setNormalizing(e, !1);
  try {
    t();
  } finally {
    C.setNormalizing(e, r);
  }
  C.normalize(e);
}, QC = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  C.withoutNormalizing(t, () => {
    var n, a, {
      reverse: o = !1,
      unit: i = "character",
      distance: s = 1,
      voids: u = !1
    } = r, {
      at: l = t.selection,
      hanging: c = !1
    } = r;
    if (l) {
      var d = !1;
      if (X.isRange(l) && X.isCollapsed(l) && (d = !0, l = l.anchor), Ge.isPoint(l)) {
        var v = C.void(t, {
          at: l,
          mode: "highest"
        });
        if (!u && v) {
          var [, p] = v;
          l = p;
        } else {
          var h = {
            unit: i,
            distance: s
          }, f = o ? C.before(t, l, h) || C.start(t, []) : C.after(t, l, h) || C.end(t, []);
          l = {
            anchor: l,
            focus: f
          }, c = !0;
        }
      }
      if (L.isPath(l)) {
        ee.removeNodes(t, {
          at: l,
          voids: u
        });
        return;
      }
      if (!X.isCollapsed(l)) {
        if (!c) {
          var [, m] = X.edges(l), b = C.end(t, []);
          Ge.equals(m, b) || (l = C.unhangRange(t, l, {
            voids: u
          }));
        }
        var [E, y] = X.edges(l), w = C.above(t, {
          match: (q) => le.isElement(q) && C.isBlock(t, q),
          at: E,
          voids: u
        }), S = C.above(t, {
          match: (q) => le.isElement(q) && C.isBlock(t, q),
          at: y,
          voids: u
        }), D = w && S && !L.equals(w[1], S[1]), x = L.equals(E.path, y.path), A = u ? null : (n = C.void(t, {
          at: E,
          mode: "highest"
        })) !== null && n !== void 0 ? n : C.elementReadOnly(t, {
          at: E,
          mode: "highest"
        }), O = u ? null : (a = C.void(t, {
          at: y,
          mode: "highest"
        })) !== null && a !== void 0 ? a : C.elementReadOnly(t, {
          at: y,
          mode: "highest"
        });
        if (A) {
          var B = C.before(t, E);
          B && w && L.isAncestor(w[1], B.path) && (E = B);
        }
        if (O) {
          var j = C.after(t, y);
          j && S && L.isAncestor(S[1], j.path) && (y = j);
        }
        var T = [], $;
        for (var P of C.nodes(t, {
          at: l,
          voids: u
        })) {
          var [R, M] = P;
          $ && L.compare(M, $) === 0 || (!u && le.isElement(R) && (C.isVoid(t, R) || C.isElementReadOnly(t, R)) || !L.isCommon(M, E.path) && !L.isCommon(M, y.path)) && (T.push(P), $ = M);
        }
        var F = Array.from(T, (q) => {
          var [, pe] = q;
          return C.pathRef(t, pe);
        }), N = C.pointRef(t, E), V = C.pointRef(t, y), k = "";
        if (!x && !A) {
          var W = N.current, [U] = C.leaf(t, W), {
            path: Q
          } = W, {
            offset: I
          } = E, z = U.text.slice(I);
          z.length > 0 && (t.apply({
            type: "remove_text",
            path: Q,
            offset: I,
            text: z
          }), k = z);
        }
        if (F.reverse().map((q) => q.unref()).filter((q) => q !== null).forEach((q) => ee.removeNodes(t, {
          at: q,
          voids: u
        })), !O) {
          var H = V.current, [G] = C.leaf(t, H), {
            path: re
          } = H, te = x ? E.offset : 0, de = G.text.slice(te, y.offset);
          de.length > 0 && (t.apply({
            type: "remove_text",
            path: re,
            offset: te,
            text: de
          }), k = de);
        }
        !x && D && V.current && N.current && ee.mergeNodes(t, {
          at: V.current,
          hanging: !0,
          voids: u
        }), d && o && i === "character" && k.length > 1 && k.match(/[\u0E00-\u0E7F]+/) && ee.insertText(t, k.slice(0, k.length - s));
        var se = N.unref(), he = V.unref(), ce = o ? se || he : he || se;
        r.at == null && ce && ee.select(t, ce);
      }
    }
  });
}, JC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  C.withoutNormalizing(t, () => {
    var {
      hanging: a = !1,
      voids: o = !1
    } = n, {
      at: i = Mc(t),
      batchDirty: s = !0
    } = n;
    if (r.length) {
      if (X.isRange(i))
        if (a || (i = C.unhangRange(t, i, {
          voids: o
        })), X.isCollapsed(i))
          i = i.anchor;
        else {
          var [, u] = X.edges(i);
          if (!o && C.void(t, {
            at: u
          }))
            return;
          var l = C.pointRef(t, u);
          ee.delete(t, {
            at: i
          }), i = l.unref();
        }
      else
        L.isPath(i) && (i = C.start(t, i));
      if (!(!o && C.void(t, {
        at: i
      }))) {
        var c = C.above(t, {
          at: i,
          match: (z) => le.isElement(z) && C.isInline(t, z),
          mode: "highest",
          voids: o
        });
        if (c) {
          var [, d] = c;
          if (C.isEnd(t, i, d)) {
            var v = C.after(t, d);
            i = v;
          } else if (C.isStart(t, i, d)) {
            var p = C.before(t, d);
            i = p;
          }
        }
        var h = C.above(t, {
          match: (z) => le.isElement(z) && C.isBlock(t, z),
          at: i,
          voids: o
        }), [, f] = h, m = C.isStart(t, i, f), b = C.isEnd(t, i, f), E = m && b, y = !m || m && b, w = !b, [, S] = me.first({
          children: r
        }, []), [, D] = me.last({
          children: r
        }, []), x = [], A = (z) => {
          var [H, G] = z, re = G.length === 0;
          return re ? !1 : E ? !0 : !(y && L.isAncestor(G, S) && le.isElement(H) && !t.isVoid(H) && !t.isInline(H) || w && L.isAncestor(G, D) && le.isElement(H) && !t.isVoid(H) && !t.isInline(H));
        };
        for (var O of me.nodes({
          children: r
        }, {
          pass: A
        }))
          A(O) && x.push(O);
        var B = [], j = [], T = [], $ = !0, P = !1;
        for (var [R] of x)
          le.isElement(R) && !t.isInline(R) ? ($ = !1, P = !0, j.push(R)) : $ ? B.push(R) : T.push(R);
        var [M] = C.nodes(t, {
          at: i,
          match: (z) => Oe.isText(z) || C.isInline(t, z),
          mode: "highest",
          voids: o
        }), [, F] = M, N = C.isStart(t, i, F), V = C.isEnd(t, i, F), k = C.pathRef(t, b && !T.length ? L.next(f) : f), W = C.pathRef(t, V ? L.next(F) : F);
        ee.splitNodes(t, {
          at: i,
          match: (z) => P ? le.isElement(z) && C.isBlock(t, z) : Oe.isText(z) || C.isInline(t, z),
          mode: P ? "lowest" : "highest",
          always: P && (!m || B.length > 0) && (!b || T.length > 0),
          voids: o
        });
        var U = C.pathRef(t, !N || N && V ? L.next(F) : F);
        if (ee.insertNodes(t, B, {
          at: U.current,
          match: (z) => Oe.isText(z) || C.isInline(t, z),
          mode: "highest",
          voids: o,
          batchDirty: s
        }), E && !B.length && j.length && !T.length && ee.delete(t, {
          at: f,
          voids: o
        }), ee.insertNodes(t, j, {
          at: k.current,
          match: (z) => le.isElement(z) && C.isBlock(t, z),
          mode: "lowest",
          voids: o,
          batchDirty: s
        }), ee.insertNodes(t, T, {
          at: W.current,
          match: (z) => Oe.isText(z) || C.isInline(t, z),
          mode: "highest",
          voids: o,
          batchDirty: s
        }), !n.at) {
          var Q;
          if (T.length > 0 && W.current ? Q = L.previous(W.current) : j.length > 0 && k.current ? Q = L.previous(k.current) : U.current && (Q = L.previous(U.current)), Q) {
            var I = C.end(t, Q);
            ee.select(t, I);
          }
        }
        U.unref(), k.unref(), W.unref();
      }
    }
  });
}, e1 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    edge: n = "anchor"
  } = r, {
    selection: a
  } = t;
  if (a) {
    if (n === "anchor")
      ee.select(t, a.anchor);
    else if (n === "focus")
      ee.select(t, a.focus);
    else if (n === "start") {
      var [o] = X.edges(a);
      ee.select(t, o);
    } else if (n === "end") {
      var [, i] = X.edges(a);
      ee.select(t, i);
    }
  } else
    return;
}, t1 = (e) => {
  var {
    selection: t
  } = e;
  t && e.apply({
    type: "set_selection",
    properties: t,
    newProperties: null
  });
}, r1 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    selection: n
  } = t, {
    distance: a = 1,
    unit: o = "character",
    reverse: i = !1
  } = r, {
    edge: s = null
  } = r;
  if (n) {
    s === "start" && (s = X.isBackward(n) ? "focus" : "anchor"), s === "end" && (s = X.isBackward(n) ? "anchor" : "focus");
    var {
      anchor: u,
      focus: l
    } = n, c = {
      distance: a,
      unit: o,
      ignoreNonSelectable: !0
    }, d = {};
    if (s == null || s === "anchor") {
      var v = i ? C.before(t, u, c) : C.after(t, u, c);
      v && (d.anchor = v);
    }
    if (s == null || s === "focus") {
      var p = i ? C.before(t, l, c) : C.after(t, l, c);
      p && (d.focus = p);
    }
    ee.setSelection(t, d);
  }
}, n1 = (e, t) => {
  var {
    selection: r
  } = e;
  if (t = C.range(e, t), r) {
    ee.setSelection(e, t);
    return;
  }
  if (!X.isRange(t))
    throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(Qt.stringify(t)));
  e.apply({
    type: "set_selection",
    properties: r,
    newProperties: t
  });
};
function Cd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ed(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cd(Object(r), !0).forEach(function(n) {
      pr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var a1 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    selection: a
  } = t, {
    edge: o = "both"
  } = n;
  if (a) {
    o === "start" && (o = X.isBackward(a) ? "focus" : "anchor"), o === "end" && (o = X.isBackward(a) ? "anchor" : "focus");
    var {
      anchor: i,
      focus: s
    } = a, u = o === "anchor" ? i : s;
    ee.setSelection(t, {
      [o === "anchor" ? "anchor" : "focus"]: Ed(Ed({}, u), r)
    });
  }
}, o1 = (e, t) => {
  var {
    selection: r
  } = e, n = {}, a = {};
  if (r) {
    for (var o in t)
      (o === "anchor" && t.anchor != null && !Ge.equals(t.anchor, r.anchor) || o === "focus" && t.focus != null && !Ge.equals(t.focus, r.focus) || o !== "anchor" && o !== "focus" && t[o] !== r[o]) && (n[o] = r[o], a[o] = t[o]);
    Object.keys(n).length > 0 && e.apply({
      type: "set_selection",
      properties: n,
      newProperties: a
    });
  }
}, i1 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  C.withoutNormalizing(t, () => {
    var {
      hanging: a = !1,
      voids: o = !1,
      mode: i = "lowest",
      batchDirty: s = !0
    } = n, {
      at: u,
      match: l,
      select: c
    } = n;
    if (me.isNode(r) && (r = [r]), r.length !== 0) {
      var [d] = r;
      if (u || (u = Mc(t), c !== !1 && (c = !0)), c == null && (c = !1), X.isRange(u))
        if (a || (u = C.unhangRange(t, u, {
          voids: o
        })), X.isCollapsed(u))
          u = u.anchor;
        else {
          var [, v] = X.edges(u), p = C.pointRef(t, v);
          ee.delete(t, {
            at: u
          }), u = p.unref();
        }
      if (Ge.isPoint(u)) {
        l == null && (Oe.isText(d) ? l = (B) => Oe.isText(B) : t.isInline(d) ? l = (B) => Oe.isText(B) || C.isInline(t, B) : l = (B) => le.isElement(B) && C.isBlock(t, B));
        var [h] = C.nodes(t, {
          at: u.path,
          match: l,
          mode: i,
          voids: o
        });
        if (h) {
          var [, f] = h, m = C.pathRef(t, f), b = C.isEnd(t, u, f);
          ee.splitNodes(t, {
            at: u,
            match: l,
            mode: i,
            voids: o
          });
          var E = m.unref();
          u = b ? L.next(E) : E;
        } else
          return;
      }
      var y = L.parent(u), w = u[u.length - 1];
      if (!(!o && C.void(t, {
        at: y
      }))) {
        if (s) {
          var S = [], D = L.levels(y);
          Hy(t, () => {
            var B = function() {
              var $ = y.concat(w);
              w++;
              var P = {
                type: "insert_node",
                path: $,
                node: j
              };
              t.apply(P), u = L.next(u), S.push(P), Oe.isText ? D.push(...Array.from(me.nodes(j), (R) => {
                var [, M] = R;
                return $.concat(M);
              })) : D.push($);
            };
            for (var j of r)
              B();
          }, () => {
            pm(t, D, (B) => {
              var j = B;
              for (var T of S)
                if (L.operationCanTransformPath(T) && (j = L.transform(j, T), !j))
                  return null;
              return j;
            });
          });
        } else
          for (var x of r) {
            var A = y.concat(w);
            w++, t.apply({
              type: "insert_node",
              path: A,
              node: x
            }), u = L.next(u);
          }
        if (u = L.previous(u), c) {
          var O = C.end(t, u);
          O && ee.select(t, O);
        }
      }
    }
  });
}, s1 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  C.withoutNormalizing(t, () => {
    var {
      at: n = t.selection,
      mode: a = "lowest",
      voids: o = !1
    } = r, {
      match: i
    } = r;
    if (i == null && (i = L.isPath(n) ? Eo(t, n) : (w) => le.isElement(w) && C.isBlock(t, w)), !!n) {
      var s = C.nodes(t, {
        at: n,
        match: i,
        mode: a,
        voids: o
      }), u = Array.from(s, (w) => {
        var [, S] = w;
        return C.pathRef(t, S);
      });
      for (var l of u) {
        var c = l.unref();
        if (c.length < 2)
          throw new Error("Cannot lift node at a path [".concat(c, "] because it has a depth of less than `2`."));
        var d = C.node(t, L.parent(c)), [v, p] = d, h = c[c.length - 1], {
          length: f
        } = v.children;
        if (f === 1) {
          var m = L.next(p);
          ee.moveNodes(t, {
            at: c,
            to: m,
            voids: o
          }), ee.removeNodes(t, {
            at: p,
            voids: o
          });
        } else if (h === 0)
          ee.moveNodes(t, {
            at: c,
            to: p,
            voids: o
          });
        else if (h === f - 1) {
          var b = L.next(p);
          ee.moveNodes(t, {
            at: c,
            to: b,
            voids: o
          });
        } else {
          var E = L.next(c), y = L.next(p);
          ee.splitNodes(t, {
            at: E,
            voids: o
          }), ee.moveNodes(t, {
            at: c,
            to: y,
            voids: o
          });
        }
      }
    }
  });
}, u1 = ["text"], l1 = ["children"], bm = (e, t) => {
  if (le.isElement(t)) {
    var r = t;
    return C.isVoid(e, t) ? !0 : r.children.length === 1 ? bm(e, r.children[0]) : !1;
  } else
    return !C.isEditor(t);
}, c1 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  C.withoutNormalizing(t, () => {
    var {
      match: n,
      at: a = t.selection
    } = r, {
      hanging: o = !1,
      voids: i = !1,
      mode: s = "lowest"
    } = r;
    if (a) {
      if (n == null)
        if (L.isPath(a)) {
          var [u] = C.parent(t, a);
          n = (B) => u.children.includes(B);
        } else
          n = (B) => le.isElement(B) && C.isBlock(t, B);
      if (!o && X.isRange(a) && (a = C.unhangRange(t, a, {
        voids: i
      })), X.isRange(a))
        if (X.isCollapsed(a))
          a = a.anchor;
        else {
          var [, l] = X.edges(a), c = C.pointRef(t, l);
          ee.delete(t, {
            at: a
          }), a = c.unref(), r.at == null && ee.select(t, a);
        }
      var [d] = C.nodes(t, {
        at: a,
        match: n,
        voids: i,
        mode: s
      }), v = C.previous(t, {
        at: a,
        match: n,
        voids: i,
        mode: s
      });
      if (!(!d || !v)) {
        var [p, h] = d, [f, m] = v;
        if (!(h.length === 0 || m.length === 0)) {
          var b = L.next(m), E = L.common(h, m), y = L.isSibling(h, m), w = Array.from(C.levels(t, {
            at: h
          }), (B) => {
            var [j] = B;
            return j;
          }).slice(E.length).slice(0, -1), S = C.above(t, {
            at: h,
            mode: "highest",
            match: (B) => w.includes(B) && bm(t, B)
          }), D = S && C.pathRef(t, S[1]), x, A;
          if (Oe.isText(p) && Oe.isText(f)) {
            var O = Rn(p, u1);
            A = f.text.length, x = O;
          } else if (le.isElement(p) && le.isElement(f)) {
            var O = Rn(p, l1);
            A = f.children.length, x = O;
          } else
            throw new Error("Cannot merge the node at path [".concat(h, "] with the previous sibling because it is not the same kind: ").concat(Qt.stringify(p), " ").concat(Qt.stringify(f)));
          y || ee.moveNodes(t, {
            at: h,
            to: b,
            voids: i
          }), D && ee.removeNodes(t, {
            at: D.current,
            voids: i
          }), le.isElement(f) && C.isEmpty(t, f) || Oe.isText(f) && f.text === "" && m[m.length - 1] !== 0 ? ee.removeNodes(t, {
            at: m,
            voids: i
          }) : t.apply({
            type: "merge_node",
            path: b,
            position: A,
            properties: x
          }), D && D.unref();
        }
      }
    }
  });
}, f1 = (e, t) => {
  C.withoutNormalizing(e, () => {
    var {
      to: r,
      at: n = e.selection,
      mode: a = "lowest",
      voids: o = !1
    } = t, {
      match: i
    } = t;
    if (n) {
      i == null && (i = L.isPath(n) ? Eo(e, n) : (p) => le.isElement(p) && C.isBlock(e, p));
      var s = C.pathRef(e, r), u = C.nodes(e, {
        at: n,
        match: i,
        mode: a,
        voids: o
      }), l = Array.from(u, (p) => {
        var [, h] = p;
        return C.pathRef(e, h);
      });
      for (var c of l) {
        var d = c.unref(), v = s.current;
        d.length !== 0 && e.apply({
          type: "move_node",
          path: d,
          newPath: v
        }), s.current && L.isSibling(v, d) && L.isAfter(v, d) && (s.current = L.next(s.current));
      }
      s.unref();
    }
  });
}, d1 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  C.withoutNormalizing(t, () => {
    var {
      hanging: n = !1,
      voids: a = !1,
      mode: o = "lowest"
    } = r, {
      at: i = t.selection,
      match: s
    } = r;
    if (i) {
      s == null && (s = L.isPath(i) ? Eo(t, i) : (p) => le.isElement(p) && C.isBlock(t, p)), !n && X.isRange(i) && (i = C.unhangRange(t, i, {
        voids: a
      }));
      var u = C.nodes(t, {
        at: i,
        match: s,
        mode: o,
        voids: a
      }), l = Array.from(u, (p) => {
        var [, h] = p;
        return C.pathRef(t, h);
      });
      for (var c of l) {
        var d = c.unref();
        if (d) {
          var [v] = C.node(t, d);
          t.apply({
            type: "remove_node",
            path: d,
            node: v
          });
        }
      }
    }
  });
}, v1 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  C.withoutNormalizing(t, () => {
    var {
      match: a,
      at: o = t.selection,
      compare: i,
      merge: s
    } = n, {
      hanging: u = !1,
      mode: l = "lowest",
      split: c = !1,
      voids: d = !1
    } = n;
    if (o) {
      if (a == null && (a = L.isPath(o) ? Eo(t, o) : (A) => le.isElement(A) && C.isBlock(t, A)), !u && X.isRange(o) && (o = C.unhangRange(t, o, {
        voids: d
      })), c && X.isRange(o)) {
        if (X.isCollapsed(o) && C.leaf(t, o.anchor)[0].text.length > 0)
          return;
        var v = C.rangeRef(t, o, {
          affinity: "inward"
        }), [p, h] = X.edges(o), f = l === "lowest" ? "lowest" : "highest", m = C.isEnd(t, h, h.path);
        ee.splitNodes(t, {
          at: h,
          match: a,
          mode: f,
          voids: d,
          always: !m
        });
        var b = C.isStart(t, p, p.path);
        ee.splitNodes(t, {
          at: p,
          match: a,
          mode: f,
          voids: d,
          always: !b
        }), o = v.unref(), n.at == null && ee.select(t, o);
      }
      i || (i = (A, O) => A !== O);
      for (var [E, y] of C.nodes(t, {
        at: o,
        match: a,
        mode: l,
        voids: d
      })) {
        var w = {}, S = {};
        if (y.length !== 0) {
          var D = !1;
          for (var x in r)
            x === "children" || x === "text" || i(r[x], E[x]) && (D = !0, E.hasOwnProperty(x) && (w[x] = E[x]), s ? r[x] != null && (S[x] = s(E[x], r[x])) : r[x] != null && (S[x] = r[x]));
          D && t.apply({
            type: "set_node",
            path: y,
            properties: w,
            newProperties: S
          });
        }
      }
    }
  });
}, g1 = (e, t) => {
  if (X.isCollapsed(t))
    return t.anchor;
  var [, r] = X.edges(t), n = C.pointRef(e, r);
  return ee.delete(e, {
    at: t
  }), n.unref();
}, m1 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  C.withoutNormalizing(t, () => {
    var {
      mode: n = "lowest",
      voids: a = !1
    } = r, {
      match: o,
      at: i = t.selection,
      height: s = 0,
      always: u = !1
    } = r;
    if (o == null && (o = (V) => le.isElement(V) && C.isBlock(t, V)), X.isRange(i) && (i = g1(t, i)), L.isPath(i)) {
      var l = i, c = C.point(t, l), [d] = C.parent(t, l);
      o = (V) => V === d, s = c.path.length - l.length + 1, i = c, u = !0;
    }
    if (i) {
      var v = C.pointRef(t, i, {
        affinity: "backward"
      }), p;
      try {
        var [h] = C.nodes(t, {
          at: i,
          match: o,
          mode: n,
          voids: a
        });
        if (!h)
          return;
        var f = C.void(t, {
          at: i,
          mode: "highest"
        }), m = 0;
        if (!a && f) {
          var [b, E] = f;
          if (le.isElement(b) && t.isInline(b)) {
            var y = C.after(t, E);
            if (!y) {
              var w = {
                text: ""
              }, S = L.next(E);
              ee.insertNodes(t, w, {
                at: S,
                voids: a
              }), y = C.point(t, S);
            }
            i = y, u = !0;
          }
          var D = i.path.length - E.length;
          s = D + 1, u = !0;
        }
        p = C.pointRef(t, i);
        var x = i.path.length - s, [, A] = h, O = i.path.slice(0, x), B = s === 0 ? i.offset : i.path[x] + m;
        for (var [j, T] of C.levels(t, {
          at: O,
          reverse: !0,
          voids: a
        })) {
          var $ = !1;
          if (T.length < A.length || T.length === 0 || !a && le.isElement(j) && C.isVoid(t, j))
            break;
          var P = v.current, R = C.isEnd(t, P, T);
          if (u || !v || !C.isEdge(t, P, T)) {
            $ = !0;
            var M = me.extractProps(j);
            t.apply({
              type: "split_node",
              path: T,
              position: B,
              properties: M
            });
          }
          B = T[T.length - 1] + ($ || R ? 1 : 0);
        }
        if (r.at == null) {
          var F = p.current || C.end(t, []);
          ee.select(t, F);
        }
      } finally {
        var N;
        v.unref(), (N = p) === null || N === void 0 || N.unref();
      }
    }
  });
}, h1 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  Array.isArray(r) || (r = [r]);
  var a = {};
  for (var o of r)
    a[o] = null;
  ee.setNodes(t, a, n);
}, p1 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  C.withoutNormalizing(t, () => {
    var {
      mode: n = "lowest",
      split: a = !1,
      voids: o = !1
    } = r, {
      at: i = t.selection,
      match: s
    } = r;
    if (i) {
      s == null && (s = L.isPath(i) ? Eo(t, i) : (p) => le.isElement(p) && C.isBlock(t, p)), L.isPath(i) && (i = C.range(t, i));
      var u = X.isRange(i) ? C.rangeRef(t, i) : null, l = C.nodes(t, {
        at: i,
        match: s,
        mode: n,
        voids: o
      }), c = Array.from(
        l,
        (p) => {
          var [, h] = p;
          return C.pathRef(t, h);
        }
        // unwrapNode will call liftNode which does not support splitting the node when nested.
        // If we do not reverse the order and call it from top to the bottom, it will remove all blocks
        // that wrap target node. So we reverse the order.
      ).reverse(), d = function() {
        var h = v.unref(), [f] = C.node(t, h), m = C.range(t, h);
        a && u && (m = X.intersection(u.current, m)), ee.liftNodes(t, {
          at: m,
          match: (b) => le.isAncestor(f) && f.children.includes(b),
          voids: o
        });
      };
      for (var v of c)
        d();
      u && u.unref();
    }
  });
};
function wd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Dd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wd(Object(r), !0).forEach(function(n) {
      pr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var b1 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  C.withoutNormalizing(t, () => {
    var {
      mode: a = "lowest",
      split: o = !1,
      voids: i = !1
    } = n, {
      match: s,
      at: u = t.selection
    } = n;
    if (u) {
      if (s == null && (L.isPath(u) ? s = Eo(t, u) : t.isInline(r) ? s = (m) => le.isElement(m) && C.isInline(t, m) || Oe.isText(m) : s = (m) => le.isElement(m) && C.isBlock(t, m)), o && X.isRange(u)) {
        var [l, c] = X.edges(u), d = C.rangeRef(t, u, {
          affinity: "inward"
        });
        ee.splitNodes(t, {
          at: c,
          match: s,
          voids: i
        }), ee.splitNodes(t, {
          at: l,
          match: s,
          voids: i
        }), u = d.unref(), n.at == null && ee.select(t, u);
      }
      var v = Array.from(C.nodes(t, {
        at: u,
        match: t.isInline(r) ? (m) => le.isElement(m) && C.isBlock(t, m) : (m) => C.isEditor(m),
        mode: "lowest",
        voids: i
      })), p = function() {
        var b = X.isRange(u) ? X.intersection(u, C.range(t, f)) : u;
        if (!b)
          return 0;
        var E = Array.from(C.nodes(t, {
          at: b,
          match: s,
          mode: a,
          voids: i
        }));
        if (E.length > 0) {
          var [y] = E, w = E[E.length - 1], [, S] = y, [, D] = w;
          if (S.length === 0 && D.length === 0)
            return 0;
          var x = L.equals(S, D) ? L.parent(S) : L.common(S, D), A = C.range(t, S, D), O = C.node(t, x), [B] = O, j = x.length + 1, T = L.next(D.slice(0, j)), $ = Dd(Dd({}, r), {}, {
            children: []
          });
          ee.insertNodes(t, $, {
            at: T,
            voids: i
          }), ee.moveNodes(t, {
            at: A,
            match: (P) => le.isAncestor(B) && B.children.includes(P),
            to: T.concat(0),
            voids: i
          });
        }
      }, h;
      for (var [, f] of v)
        h = p();
    }
  });
}, y1 = () => {
  var e = {
    children: [],
    operations: [],
    selection: null,
    marks: null,
    isElementReadOnly: () => !1,
    isInline: () => !1,
    isSelectable: () => !0,
    isVoid: () => !1,
    markableVoid: () => !1,
    onChange: () => {
    },
    // Core
    apply: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Wy(e, ...n);
    },
    // Editor
    addMark: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Yy(e, ...n);
    },
    deleteBackward: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Jy(e, ...n);
    },
    deleteForward: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return eC(e, ...n);
    },
    deleteFragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return tC(e, ...n);
    },
    getFragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return qy(e, ...n);
    },
    insertBreak: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return dC(e, ...n);
    },
    insertSoftBreak: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return gC(e, ...n);
    },
    insertFragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return JC(e, ...n);
    },
    insertNode: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return vC(e, ...n);
    },
    insertText: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return hC(e, ...n);
    },
    normalizeNode: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Uy(e, ...n);
    },
    removeMark: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return qC(e, ...n);
    },
    getDirtyPaths: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Ky(e, ...n);
    },
    shouldNormalize: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Gy(e, ...n);
    },
    // Editor interface
    above: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Xy(e, ...n);
    },
    after: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Zy(e, ...n);
    },
    before: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Qy(e, ...n);
    },
    collapse: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return e1(e, ...n);
    },
    delete: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return QC(e, ...n);
    },
    deselect: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return t1(e, ...n);
    },
    edges: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return rC(e, ...n);
    },
    elementReadOnly: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return nC(e, ...n);
    },
    end: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return aC(e, ...n);
    },
    first: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return oC(e, ...n);
    },
    fragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return iC(e, ...n);
    },
    getMarks: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return BC(e, ...n);
    },
    hasBlocks: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return uC(e, ...n);
    },
    hasInlines: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return lC(e, ...n);
    },
    hasPath: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return cC(e, ...n);
    },
    hasTexts: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return fC(e, ...n);
    },
    insertNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return i1(e, ...n);
    },
    isBlock: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return pC(e, ...n);
    },
    isEdge: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return bC(e, ...n);
    },
    isEmpty: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return yC(e, ...n);
    },
    isEnd: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return CC(e, ...n);
    },
    isNormalizing: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return EC(e, ...n);
    },
    isStart: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return wC(e, ...n);
    },
    last: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return DC(e, ...n);
    },
    leaf: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return SC(e, ...n);
    },
    levels: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return xC(e, ...n);
    },
    liftNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return s1(e, ...n);
    },
    mergeNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return c1(e, ...n);
    },
    move: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return r1(e, ...n);
    },
    moveNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return f1(e, ...n);
    },
    next: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return $C(e, ...n);
    },
    node: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return FC(e, ...n);
    },
    nodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return PC(e, ...n);
    },
    normalize: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return RC(e, ...n);
    },
    parent: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return TC(e, ...n);
    },
    path: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return MC(e, ...n);
    },
    pathRef: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return NC(e, ...n);
    },
    pathRefs: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return IC(e, ...n);
    },
    point: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return LC(e, ...n);
    },
    pointRef: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return _C(e, ...n);
    },
    pointRefs: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return jC(e, ...n);
    },
    positions: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return kC(e, ...n);
    },
    previous: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return zC(e, ...n);
    },
    range: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return WC(e, ...n);
    },
    rangeRef: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return VC(e, ...n);
    },
    rangeRefs: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return HC(e, ...n);
    },
    removeNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return d1(e, ...n);
    },
    select: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return n1(e, ...n);
    },
    setNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return v1(e, ...n);
    },
    setNormalizing: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return UC(e, ...n);
    },
    setPoint: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return a1(e, ...n);
    },
    setSelection: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return o1(e, ...n);
    },
    splitNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return m1(e, ...n);
    },
    start: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return GC(e, ...n);
    },
    string: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return XC(e, ...n);
    },
    unhangRange: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return YC(e, ...n);
    },
    unsetNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return h1(e, ...n);
    },
    unwrapNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return p1(e, ...n);
    },
    void: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return sC(e, ...n);
    },
    withoutNormalizing: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return ZC(e, ...n);
    },
    wrapNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return b1(e, ...n);
    }
  };
  return e;
}, Mi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function wo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var C1 = D1, ym = "֑-߿יִ-﷽ﹰ-ﻼ", Cm = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿", E1 = new RegExp("^[^" + Cm + "]*[" + ym + "]"), w1 = new RegExp("^[^" + ym + "]*[" + Cm + "]");
function D1(e) {
  return e = String(e || ""), E1.test(e) ? "rtl" : w1.test(e) ? "ltr" : "neutral";
}
const Em = /* @__PURE__ */ wo(C1);
function S1(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Lc = S1, x1 = typeof Mi == "object" && Mi && Mi.Object === Object && Mi, O1 = x1, A1 = O1, B1 = typeof self == "object" && self && self.Object === Object && self, $1 = A1 || B1 || Function("return this")(), wm = $1, F1 = wm, P1 = function() {
  return F1.Date.now();
}, R1 = P1, T1 = /\s/;
function N1(e) {
  for (var t = e.length; t-- && T1.test(e.charAt(t)); )
    ;
  return t;
}
var I1 = N1, M1 = I1, _1 = /^\s+/;
function j1(e) {
  return e && e.slice(0, M1(e) + 1).replace(_1, "");
}
var L1 = j1, k1 = wm, z1 = k1.Symbol, Dm = z1, Sd = Dm, Sm = Object.prototype, V1 = Sm.hasOwnProperty, H1 = Sm.toString, No = Sd ? Sd.toStringTag : void 0;
function W1(e) {
  var t = V1.call(e, No), r = e[No];
  try {
    e[No] = void 0;
    var n = !0;
  } catch {
  }
  var a = H1.call(e);
  return n && (t ? e[No] = r : delete e[No]), a;
}
var K1 = W1, q1 = Object.prototype, U1 = q1.toString;
function G1(e) {
  return U1.call(e);
}
var X1 = G1, xd = Dm, Y1 = K1, Z1 = X1, Q1 = "[object Null]", J1 = "[object Undefined]", Od = xd ? xd.toStringTag : void 0;
function eE(e) {
  return e == null ? e === void 0 ? J1 : Q1 : Od && Od in Object(e) ? Y1(e) : Z1(e);
}
var tE = eE;
function rE(e) {
  return e != null && typeof e == "object";
}
var nE = rE, aE = tE, oE = nE, iE = "[object Symbol]";
function sE(e) {
  return typeof e == "symbol" || oE(e) && aE(e) == iE;
}
var uE = sE, lE = L1, Ad = Lc, cE = uE, Bd = NaN, fE = /^[-+]0x[0-9a-f]+$/i, dE = /^0b[01]+$/i, vE = /^0o[0-7]+$/i, gE = parseInt;
function mE(e) {
  if (typeof e == "number")
    return e;
  if (cE(e))
    return Bd;
  if (Ad(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ad(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = lE(e);
  var r = dE.test(e);
  return r || vE.test(e) ? gE(e.slice(2), r ? 2 : 8) : fE.test(e) ? Bd : +e;
}
var hE = mE, pE = Lc, Au = R1, $d = hE, bE = "Expected a function", yE = Math.max, CE = Math.min;
function EE(e, t, r) {
  var n, a, o, i, s, u, l = 0, c = !1, d = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(bE);
  t = $d(t) || 0, pE(r) && (c = !!r.leading, d = "maxWait" in r, o = d ? yE($d(r.maxWait) || 0, t) : o, v = "trailing" in r ? !!r.trailing : v);
  function p(D) {
    var x = n, A = a;
    return n = a = void 0, l = D, i = e.apply(A, x), i;
  }
  function h(D) {
    return l = D, s = setTimeout(b, t), c ? p(D) : i;
  }
  function f(D) {
    var x = D - u, A = D - l, O = t - x;
    return d ? CE(O, o - A) : O;
  }
  function m(D) {
    var x = D - u, A = D - l;
    return u === void 0 || x >= t || x < 0 || d && A >= o;
  }
  function b() {
    var D = Au();
    if (m(D))
      return E(D);
    s = setTimeout(b, f(D));
  }
  function E(D) {
    return s = void 0, v && n ? p(D) : (n = a = void 0, i);
  }
  function y() {
    s !== void 0 && clearTimeout(s), l = 0, n = u = a = s = void 0;
  }
  function w() {
    return s === void 0 ? i : E(Au());
  }
  function S() {
    var D = Au(), x = m(D);
    if (n = arguments, a = this, u = D, x) {
      if (s === void 0)
        return h(u);
      if (d)
        return clearTimeout(s), s = setTimeout(b, t), p(u);
    }
    return s === void 0 && (s = setTimeout(b, t)), i;
  }
  return S.cancel = y, S.flush = w, S;
}
var xm = EE;
const wE = /* @__PURE__ */ wo(xm);
var DE = xm, SE = Lc, xE = "Expected a function";
function OE(e, t, r) {
  var n = !0, a = !0;
  if (typeof e != "function")
    throw new TypeError(xE);
  return SE(r) && (n = "leading" in r ? !!r.leading : n, a = "trailing" in r ? !!r.trailing : a), DE(e, t, {
    leading: n,
    maxWait: t,
    trailing: a
  });
}
var AE = OE;
const BE = /* @__PURE__ */ wo(AE), Fd = (e) => typeof e == "object" && e != null && e.nodeType === 1, Pd = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", Bu = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const r = getComputedStyle(e, null);
    return Pd(r.overflowY, t) || Pd(r.overflowX, t) || ((n) => {
      const a = ((o) => {
        if (!o.ownerDocument || !o.ownerDocument.defaultView)
          return null;
        try {
          return o.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(n);
      return !!a && (a.clientHeight < n.scrollHeight || a.clientWidth < n.scrollWidth);
    })(e);
  }
  return !1;
}, _i = (e, t, r, n, a, o, i, s) => o < e && i > t || o > e && i < t ? 0 : o <= e && s <= r || i >= t && s >= r ? o - e - n : i > t && s < r || o < e && s > r ? i - t + a : 0, $E = (e) => {
  const t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, Rd = (e, t) => {
  var r, n, a, o;
  if (typeof document > "u")
    return [];
  const { scrollMode: i, block: s, inline: u, boundary: l, skipOverflowHiddenElements: c } = t, d = typeof l == "function" ? l : (M) => M !== l;
  if (!Fd(e))
    throw new TypeError("Invalid target");
  const v = document.scrollingElement || document.documentElement, p = [];
  let h = e;
  for (; Fd(h) && d(h); ) {
    if (h = $E(h), h === v) {
      p.push(h);
      break;
    }
    h != null && h === document.body && Bu(h) && !Bu(document.documentElement) || h != null && Bu(h, c) && p.push(h);
  }
  const f = (n = (r = window.visualViewport) == null ? void 0 : r.width) != null ? n : innerWidth, m = (o = (a = window.visualViewport) == null ? void 0 : a.height) != null ? o : innerHeight, { scrollX: b, scrollY: E } = window, { height: y, width: w, top: S, right: D, bottom: x, left: A } = e.getBoundingClientRect(), { top: O, right: B, bottom: j, left: T } = ((M) => {
    const F = window.getComputedStyle(M);
    return { top: parseFloat(F.scrollMarginTop) || 0, right: parseFloat(F.scrollMarginRight) || 0, bottom: parseFloat(F.scrollMarginBottom) || 0, left: parseFloat(F.scrollMarginLeft) || 0 };
  })(e);
  let $ = s === "start" || s === "nearest" ? S - O : s === "end" ? x + j : S + y / 2 - O + j, P = u === "center" ? A + w / 2 - T + B : u === "end" ? D + B : A - T;
  const R = [];
  for (let M = 0; M < p.length; M++) {
    const F = p[M], { height: N, width: V, top: k, right: W, bottom: U, left: Q } = F.getBoundingClientRect();
    if (i === "if-needed" && S >= 0 && A >= 0 && x <= m && D <= f && S >= k && x <= U && A >= Q && D <= W)
      return R;
    const I = getComputedStyle(F), z = parseInt(I.borderLeftWidth, 10), H = parseInt(I.borderTopWidth, 10), G = parseInt(I.borderRightWidth, 10), re = parseInt(I.borderBottomWidth, 10);
    let te = 0, de = 0;
    const se = "offsetWidth" in F ? F.offsetWidth - F.clientWidth - z - G : 0, he = "offsetHeight" in F ? F.offsetHeight - F.clientHeight - H - re : 0, ce = "offsetWidth" in F ? F.offsetWidth === 0 ? 0 : V / F.offsetWidth : 0, q = "offsetHeight" in F ? F.offsetHeight === 0 ? 0 : N / F.offsetHeight : 0;
    if (v === F)
      te = s === "start" ? $ : s === "end" ? $ - m : s === "nearest" ? _i(E, E + m, m, H, re, E + $, E + $ + y, y) : $ - m / 2, de = u === "start" ? P : u === "center" ? P - f / 2 : u === "end" ? P - f : _i(b, b + f, f, z, G, b + P, b + P + w, w), te = Math.max(0, te + E), de = Math.max(0, de + b);
    else {
      te = s === "start" ? $ - k - H : s === "end" ? $ - U + re + he : s === "nearest" ? _i(k, U, N, H, re + he, $, $ + y, y) : $ - (k + N / 2) + he / 2, de = u === "start" ? P - Q - z : u === "center" ? P - (Q + V / 2) + se / 2 : u === "end" ? P - W + G + se : _i(Q, W, V, z, G + se, P, P + w, w);
      const { scrollLeft: pe, scrollTop: De } = F;
      te = q === 0 ? 0 : Math.max(0, Math.min(De + te / q, F.scrollHeight - N / q + he)), de = ce === 0 ? 0 : Math.max(0, Math.min(pe + de / ce, F.scrollWidth - V / ce + se)), $ += De - te, P += pe - de;
    }
    R.push({ el: F, top: te, left: de });
  }
  return R;
}, FE = (e) => e === !1 ? { block: "end", inline: "nearest" } : ((t) => t === Object(t) && Object.keys(t).length !== 0)(e) ? e : { block: "start", inline: "nearest" };
function PE(e, t) {
  if (!e.isConnected || !((a) => {
    let o = a;
    for (; o && o.parentNode; ) {
      if (o.parentNode === document)
        return !0;
      o = o.parentNode instanceof ShadowRoot ? o.parentNode.host : o.parentNode;
    }
    return !1;
  })(e))
    return;
  const r = ((a) => {
    const o = window.getComputedStyle(a);
    return { top: parseFloat(o.scrollMarginTop) || 0, right: parseFloat(o.scrollMarginRight) || 0, bottom: parseFloat(o.scrollMarginBottom) || 0, left: parseFloat(o.scrollMarginLeft) || 0 };
  })(e);
  if (((a) => typeof a == "object" && typeof a.behavior == "function")(t))
    return t.behavior(Rd(e, t));
  const n = typeof t == "boolean" || t == null ? void 0 : t.behavior;
  for (const { el: a, top: o, left: i } of Rd(e, FE(t))) {
    const s = o - r.top + r.bottom, u = i - r.left + r.right;
    a.scroll({ top: s, left: u, behavior: n });
  }
}
var ya = [], RE = function() {
  return ya.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, TE = function() {
  return ya.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Td = "ResizeObserver loop completed with undelivered notifications.", NE = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Td
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Td), window.dispatchEvent(e);
}, ii;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ii || (ii = {}));
var Ca = function(e) {
  return Object.freeze(e);
}, IE = /* @__PURE__ */ function() {
  function e(t, r) {
    this.inlineSize = t, this.blockSize = r, Ca(this);
  }
  return e;
}(), Om = function() {
  function e(t, r, n, a) {
    return this.x = t, this.y = r, this.width = n, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Ca(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, r = t.x, n = t.y, a = t.top, o = t.right, i = t.bottom, s = t.left, u = t.width, l = t.height;
    return { x: r, y: n, top: a, right: o, bottom: i, left: s, width: u, height: l };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), kc = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Am = function(e) {
  if (kc(e)) {
    var t = e.getBBox(), r = t.width, n = t.height;
    return !r && !n;
  }
  var a = e, o = a.offsetWidth, i = a.offsetHeight;
  return !(o || i || e.getClientRects().length);
}, Nd = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var r = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(r && e instanceof r.Element);
}, ME = function(e) {
  switch (e.tagName) {
    case "INPUT":
      if (e.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return !0;
  }
  return !1;
}, Go = typeof window < "u" ? window : {}, ji = /* @__PURE__ */ new WeakMap(), Id = /auto|scroll/, _E = /^tb|vertical/, jE = /msie|trident/i.test(Go.navigator && Go.navigator.userAgent), ln = function(e) {
  return parseFloat(e || "0");
}, oo = function(e, t, r) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = !1), new IE((r ? t : e) || 0, (r ? e : t) || 0);
}, Md = Ca({
  devicePixelContentBoxSize: oo(),
  borderBoxSize: oo(),
  contentBoxSize: oo(),
  contentRect: new Om(0, 0, 0, 0)
}), Bm = function(e, t) {
  if (t === void 0 && (t = !1), ji.has(e) && !t)
    return ji.get(e);
  if (Am(e))
    return ji.set(e, Md), Md;
  var r = getComputedStyle(e), n = kc(e) && e.ownerSVGElement && e.getBBox(), a = !jE && r.boxSizing === "border-box", o = _E.test(r.writingMode || ""), i = !n && Id.test(r.overflowY || ""), s = !n && Id.test(r.overflowX || ""), u = n ? 0 : ln(r.paddingTop), l = n ? 0 : ln(r.paddingRight), c = n ? 0 : ln(r.paddingBottom), d = n ? 0 : ln(r.paddingLeft), v = n ? 0 : ln(r.borderTopWidth), p = n ? 0 : ln(r.borderRightWidth), h = n ? 0 : ln(r.borderBottomWidth), f = n ? 0 : ln(r.borderLeftWidth), m = d + l, b = u + c, E = f + p, y = v + h, w = s ? e.offsetHeight - y - e.clientHeight : 0, S = i ? e.offsetWidth - E - e.clientWidth : 0, D = a ? m + E : 0, x = a ? b + y : 0, A = n ? n.width : ln(r.width) - D - S, O = n ? n.height : ln(r.height) - x - w, B = A + m + S + E, j = O + b + w + y, T = Ca({
    devicePixelContentBoxSize: oo(Math.round(A * devicePixelRatio), Math.round(O * devicePixelRatio), o),
    borderBoxSize: oo(B, j, o),
    contentBoxSize: oo(A, O, o),
    contentRect: new Om(d, u, A, O)
  });
  return ji.set(e, T), T;
}, $m = function(e, t, r) {
  var n = Bm(e, r), a = n.borderBoxSize, o = n.contentBoxSize, i = n.devicePixelContentBoxSize;
  switch (t) {
    case ii.DEVICE_PIXEL_CONTENT_BOX:
      return i;
    case ii.BORDER_BOX:
      return a;
    default:
      return o;
  }
}, LE = /* @__PURE__ */ function() {
  function e(t) {
    var r = Bm(t);
    this.target = t, this.contentRect = r.contentRect, this.borderBoxSize = Ca([r.borderBoxSize]), this.contentBoxSize = Ca([r.contentBoxSize]), this.devicePixelContentBoxSize = Ca([r.devicePixelContentBoxSize]);
  }
  return e;
}(), Fm = function(e) {
  if (Am(e))
    return 1 / 0;
  for (var t = 0, r = e.parentNode; r; )
    t += 1, r = r.parentNode;
  return t;
}, kE = function() {
  var e = 1 / 0, t = [];
  ya.forEach(function(i) {
    if (i.activeTargets.length !== 0) {
      var s = [];
      i.activeTargets.forEach(function(l) {
        var c = new LE(l.target), d = Fm(l.target);
        s.push(c), l.lastReportedSize = $m(l.target, l.observedBox), d < e && (e = d);
      }), t.push(function() {
        i.callback.call(i.observer, s, i.observer);
      }), i.activeTargets.splice(0, i.activeTargets.length);
    }
  });
  for (var r = 0, n = t; r < n.length; r++) {
    var a = n[r];
    a();
  }
  return e;
}, _d = function(e) {
  ya.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(a) {
      a.isActive() && (Fm(a.target) > e ? r.activeTargets.push(a) : r.skippedTargets.push(a));
    });
  });
}, zE = function() {
  var e = 0;
  for (_d(e); RE(); )
    e = kE(), _d(e);
  return TE() && NE(), e > 0;
}, $u, Pm = [], VE = function() {
  return Pm.splice(0).forEach(function(e) {
    return e();
  });
}, HE = function(e) {
  if (!$u) {
    var t = 0, r = document.createTextNode(""), n = { characterData: !0 };
    new MutationObserver(function() {
      return VE();
    }).observe(r, n), $u = function() {
      r.textContent = "".concat(t ? t-- : t++);
    };
  }
  Pm.push(e), $u();
}, WE = function(e) {
  HE(function() {
    requestAnimationFrame(e);
  });
}, is = 0, KE = function() {
  return !!is;
}, qE = 250, UE = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, jd = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
], Ld = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Fu = !1, GE = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var r = this;
    if (t === void 0 && (t = qE), !Fu) {
      Fu = !0;
      var n = Ld(t);
      WE(function() {
        var a = !1;
        try {
          a = zE();
        } finally {
          if (Fu = !1, t = n - Ld(), !KE())
            return;
          a ? r.run(1e3) : t > 0 ? r.run(t) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, r = function() {
      return t.observer && t.observer.observe(document.body, UE);
    };
    document.body ? r() : Go.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), jd.forEach(function(r) {
      return Go.addEventListener(r, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), jd.forEach(function(r) {
      return Go.removeEventListener(r, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), wl = new GE(), kd = function(e) {
  !is && e > 0 && wl.start(), is += e, !is && wl.stop();
}, XE = function(e) {
  return !kc(e) && !ME(e) && getComputedStyle(e).display === "inline";
}, YE = function() {
  function e(t, r) {
    this.target = t, this.observedBox = r || ii.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = $m(this.target, this.observedBox, !0);
    return XE(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), ZE = /* @__PURE__ */ function() {
  function e(t, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = r;
  }
  return e;
}(), Li = /* @__PURE__ */ new WeakMap(), zd = function(e, t) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === t)
      return r;
  return -1;
}, ki = function() {
  function e() {
  }
  return e.connect = function(t, r) {
    var n = new ZE(t, r);
    Li.set(t, n);
  }, e.observe = function(t, r, n) {
    var a = Li.get(t), o = a.observationTargets.length === 0;
    zd(a.observationTargets, r) < 0 && (o && ya.push(a), a.observationTargets.push(new YE(r, n && n.box)), kd(1), wl.schedule());
  }, e.unobserve = function(t, r) {
    var n = Li.get(t), a = zd(n.observationTargets, r), o = n.observationTargets.length === 1;
    a >= 0 && (o && ya.splice(ya.indexOf(n), 1), n.observationTargets.splice(a, 1), kd(-1));
  }, e.disconnect = function(t) {
    var r = this, n = Li.get(t);
    n.observationTargets.slice().forEach(function(a) {
      return r.unobserve(t, a.target);
    }), n.activeTargets.splice(0, n.activeTargets.length);
  }, e;
}(), QE = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    ki.connect(this, t);
  }
  return e.prototype.observe = function(t, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Nd(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    ki.observe(this, t, r);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Nd(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    ki.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    ki.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}(), In = {};
Object.defineProperty(In, "__esModule", {
  value: !0
});
var JE = typeof window < "u" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), Pu = {
  alt: "altKey",
  control: "ctrlKey",
  meta: "metaKey",
  shift: "shiftKey"
}, Rm = {
  add: "+",
  break: "pause",
  cmd: "meta",
  command: "meta",
  ctl: "control",
  ctrl: "control",
  del: "delete",
  down: "arrowdown",
  esc: "escape",
  ins: "insert",
  left: "arrowleft",
  mod: JE ? "meta" : "control",
  opt: "alt",
  option: "alt",
  return: "enter",
  right: "arrowright",
  space: " ",
  spacebar: " ",
  up: "arrowup",
  win: "meta",
  windows: "meta"
}, zc = {
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  control: 17,
  alt: 18,
  pause: 19,
  capslock: 20,
  escape: 27,
  " ": 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36,
  arrowleft: 37,
  arrowup: 38,
  arrowright: 39,
  arrowdown: 40,
  insert: 45,
  delete: 46,
  meta: 91,
  numlock: 144,
  scrolllock: 145,
  ";": 186,
  "=": 187,
  ",": 188,
  "-": 189,
  ".": 190,
  "/": 191,
  "`": 192,
  "[": 219,
  "\\": 220,
  "]": 221,
  "'": 222
};
for (var zi = 1; zi < 20; zi++)
  zc["f" + zi] = 111 + zi;
function Xs(e, t, r) {
  t && !("byKey" in t) && (r = t, t = null), Array.isArray(e) || (e = [e]);
  var n = e.map(function(i) {
    return Tm(i, t);
  }), a = function(s) {
    return n.some(function(u) {
      return Nm(u, s);
    });
  }, o = r == null ? a : a(r);
  return o;
}
function ew(e, t) {
  return Xs(e, t);
}
function tw(e, t) {
  return Xs(e, { byKey: !0 }, t);
}
function Tm(e, t) {
  var r = t && t.byKey, n = {};
  e = e.replace("++", "+add");
  var a = e.split("+"), o = a.length;
  for (var i in Pu)
    n[Pu[i]] = !1;
  var s = !0, u = !1, l = void 0;
  try {
    for (var c = a[Symbol.iterator](), d; !(s = (d = c.next()).done); s = !0) {
      var v = d.value, p = v.endsWith("?") && v.length > 1;
      p && (v = v.slice(0, -1));
      var h = Vc(v), f = Pu[h];
      if (v.length > 1 && !f && !Rm[v] && !zc[h])
        throw new TypeError('Unknown modifier: "' + v + '"');
      (o === 1 || !f) && (r ? n.key = h : n.which = Im(v)), f && (n[f] = p ? null : !0);
    }
  } catch (m) {
    u = !0, l = m;
  } finally {
    try {
      !s && c.return && c.return();
    } finally {
      if (u)
        throw l;
    }
  }
  return n;
}
function Nm(e, t) {
  for (var r in e) {
    var n = e[r], a = void 0;
    if (n != null && (r === "key" && t.key != null ? a = t.key.toLowerCase() : r === "which" ? a = n === 91 && t.which === 93 ? 91 : t.which : a = t[r], !(a == null && n === !1) && a !== n))
      return !1;
  }
  return !0;
}
function Im(e) {
  e = Vc(e);
  var t = zc[e] || e.toUpperCase().charCodeAt(0);
  return t;
}
function Vc(e) {
  return e = e.toLowerCase(), e = Rm[e] || e, e;
}
In.default = Xs;
var Ru = In.isHotkey = Xs;
In.isCodeHotkey = ew;
In.isKeyHotkey = tw;
In.parseHotkey = Tm;
In.compareHotkey = Nm;
In.toKeyCode = Im;
In.toKeyName = Vc;
function rw(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function lo(e, t) {
  if (e == null)
    return {};
  var r = rw(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function si(e) {
  "@babel/helpers - typeof";
  return si = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, si(e);
}
function nw(e, t) {
  if (si(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (si(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function aw(e) {
  var t = nw(e, "string");
  return si(t) === "symbol" ? t : String(t);
}
function kr(e, t, r) {
  return t = aw(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var Ys = /* @__PURE__ */ Wr(null), Jt = () => {
  var e = St(Ys);
  if (!e)
    throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
  return e;
}, Mm = parseInt(Z.version.split(".")[0], 10), ow = typeof navigator < "u" && typeof window < "u" && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, Vd = typeof navigator < "u" && /Mac OS X/.test(navigator.userAgent), vr = typeof navigator < "u" && /Android/.test(navigator.userAgent), eo = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), Ho = typeof navigator < "u" && /AppleWebKit(?!.*Chrome)/i.test(navigator.userAgent), iw = typeof navigator < "u" && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent), _m = typeof navigator < "u" && /Chrome/i.test(navigator.userAgent), sw = typeof navigator < "u" && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent), uw = vr && typeof navigator < "u" && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent), lw = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent), cw = typeof navigator < "u" && /.*UCBrowser/.test(navigator.userAgent), fw = typeof navigator < "u" && /.*Wechat/.test(navigator.userAgent) && !/.*MacWechat/.test(navigator.userAgent), ss = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ln = (!sw || !uw) && !iw && // globalThis is undefined in older browsers
typeof globalThis < "u" && globalThis.InputEvent && // @ts-ignore The `getTargetRanges` property isn't recognized.
typeof globalThis.InputEvent.prototype.getTargetRanges == "function", Hc = /* @__PURE__ */ new WeakMap(), Wc = /* @__PURE__ */ new WeakMap(), jm = /* @__PURE__ */ new WeakMap(), us = /* @__PURE__ */ new WeakMap(), Dl = /* @__PURE__ */ new WeakMap(), ui = /* @__PURE__ */ new WeakMap(), Ea = /* @__PURE__ */ new WeakMap(), Ss = /* @__PURE__ */ new WeakMap(), Zs = /* @__PURE__ */ new WeakMap(), Sl = /* @__PURE__ */ new WeakMap(), qn = /* @__PURE__ */ new WeakMap(), ga = /* @__PURE__ */ new WeakMap(), Xo = /* @__PURE__ */ new WeakMap(), xl = /* @__PURE__ */ new WeakMap(), Kc = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap(), Bn = /* @__PURE__ */ new WeakMap(), yr = /* @__PURE__ */ new WeakMap(), Hn = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ new WeakMap(), Lm = /* @__PURE__ */ new WeakMap(), co = Symbol("placeholder"), km = Symbol("mark-placeholder"), dw = globalThis.Text, qc = (e) => e && e.ownerDocument && e.ownerDocument.defaultView || null, vw = (e) => Zn(e) && e.nodeType === 8, Lr = (e) => Zn(e) && e.nodeType === 1, Zn = (e) => {
  var t = qc(e);
  return !!t && e instanceof t.Node;
}, Ol = (e) => {
  var t = e && e.anchorNode && qc(e.anchorNode);
  return !!t && e instanceof t.Selection;
}, zm = (e) => Zn(e) && e.nodeType === 3, gw = (e) => e.clipboardData && e.clipboardData.getData("text/plain") !== "" && e.clipboardData.types.length === 1, mw = (e) => {
  var [t, r] = e;
  if (Lr(t) && t.childNodes.length) {
    var n = r === t.childNodes.length, a = n ? r - 1 : r;
    for ([t, a] = Vm(t, a, n ? "backward" : "forward"), n = a < r; Lr(t) && t.childNodes.length; ) {
      var o = n ? t.childNodes.length - 1 : 0;
      t = pw(t, o, n ? "backward" : "forward");
    }
    r = n && t.textContent != null ? t.textContent.length : 0;
  }
  return [t, r];
}, hw = (e) => {
  for (var t = e && e.parentNode; t; ) {
    if (t.toString() === "[object ShadowRoot]")
      return !0;
    t = t.parentNode;
  }
  return !1;
}, Vm = (e, t, r) => {
  for (var {
    childNodes: n
  } = e, a = n[t], o = t, i = !1, s = !1; (vw(a) || Lr(a) && a.childNodes.length === 0 || Lr(a) && a.getAttribute("contenteditable") === "false") && !(i && s); ) {
    if (o >= n.length) {
      i = !0, o = t - 1, r = "backward";
      continue;
    }
    if (o < 0) {
      s = !0, o = t + 1, r = "forward";
      continue;
    }
    a = n[o], t = o, o += r === "forward" ? 1 : -1;
  }
  return [a, t];
}, pw = (e, t, r) => {
  var [n] = Vm(e, t, r);
  return n;
}, Hm = (e) => {
  var t = "";
  if (zm(e) && e.nodeValue)
    return e.nodeValue;
  if (Lr(e)) {
    for (var r of Array.from(e.childNodes))
      t += Hm(r);
    var n = getComputedStyle(e).getPropertyValue("display");
    (n === "block" || n === "list" || e.tagName === "BR") && (t += `
`);
  }
  return t;
}, bw = /data-slate-fragment="(.+?)"/m, yw = (e) => {
  var t = e.getData("text/html"), [, r] = t.match(bw) || [];
  return r;
}, Uc = (e, t, r) => {
  var {
    target: n
  } = t;
  if (Lr(n) && n.matches('[contentEditable="false"]'))
    return !1;
  var {
    document: a
  } = J.getWindow(e);
  if (a.contains(n))
    return J.hasDOMNode(e, n, {
      editable: !0
    });
  var o = r.find((i) => {
    var {
      addedNodes: s,
      removedNodes: u
    } = i;
    for (var l of s)
      if (l === n || l.contains(n))
        return !0;
    for (var c of u)
      if (c === n || c.contains(n))
        return !0;
  });
  return !o || o === t ? !1 : Uc(e, o, r);
}, Cw = 0;
class Ew {
  constructor() {
    kr(this, "id", void 0), this.id = "".concat(Cw++);
  }
}
var J = {
  androidPendingDiffs: (e) => yr.get(e),
  androidScheduleFlush: (e) => {
    var t;
    (t = Kc.get(e)) === null || t === void 0 || t();
  },
  blur: (e) => {
    var t = J.toDOMNode(e, e), r = J.findDocumentOrShadowRoot(e);
    qn.set(e, !1), r.activeElement === t && t.blur();
  },
  deselect: (e) => {
    var {
      selection: t
    } = e, r = J.findDocumentOrShadowRoot(e), n = r.getSelection();
    n && n.rangeCount > 0 && n.removeAllRanges(), t && ee.deselect(e);
  },
  findDocumentOrShadowRoot: (e) => {
    var t = J.toDOMNode(e, e), r = t.getRootNode();
    return (r instanceof Document || r instanceof ShadowRoot) && r.getSelection != null ? r : t.ownerDocument;
  },
  findEventRange: (e, t) => {
    "nativeEvent" in t && (t = t.nativeEvent);
    var {
      clientX: r,
      clientY: n,
      target: a
    } = t;
    if (r == null || n == null)
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
    var o = J.toSlateNode(e, t.target), i = J.findPath(e, o);
    if (le.isElement(o) && C.isVoid(e, o)) {
      var s = a.getBoundingClientRect(), u = e.isInline(o) ? r - s.left < s.left + s.width - r : n - s.top < s.top + s.height - n, l = C.point(e, i, {
        edge: u ? "start" : "end"
      }), c = u ? C.before(e, l) : C.after(e, l);
      if (c) {
        var d = C.range(e, c);
        return d;
      }
    }
    var v, {
      document: p
    } = J.getWindow(e);
    if (p.caretRangeFromPoint)
      v = p.caretRangeFromPoint(r, n);
    else {
      var h = p.caretPositionFromPoint(r, n);
      h && (v = p.createRange(), v.setStart(h.offsetNode, h.offset), v.setEnd(h.offsetNode, h.offset));
    }
    if (!v)
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
    var f = J.toSlateRange(e, v, {
      exactMatch: !1,
      suppressThrow: !1
    });
    return f;
  },
  findKey: (e, t) => {
    var r = Ss.get(t);
    return r || (r = new Ew(), Ss.set(t, r)), r;
  },
  findPath: (e, t) => {
    for (var r = [], n = t; ; ) {
      var a = Wc.get(n);
      if (a == null) {
        if (C.isEditor(n))
          return r;
        break;
      }
      var o = Hc.get(n);
      if (o == null)
        break;
      r.unshift(o), n = a;
    }
    throw new Error("Unable to find the path for Slate node: ".concat(Qt.stringify(t)));
  },
  focus: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      retries: 5
    };
    if (!qn.get(t)) {
      if (r.retries <= 0)
        throw new Error("Could not set focus, editor seems stuck with pending operations");
      if (t.operations.length > 0) {
        setTimeout(() => {
          J.focus(t, {
            retries: r.retries - 1
          });
        }, 10);
        return;
      }
      var n = J.toDOMNode(t, t), a = J.findDocumentOrShadowRoot(t);
      if (a.activeElement !== n) {
        if (t.selection && a instanceof Document) {
          var o = a.getSelection(), i = J.toDOMRange(t, t.selection);
          o == null || o.removeAllRanges(), o == null || o.addRange(i);
        }
        t.selection || (ee.select(t, C.start(t, [])), t.onChange()), qn.set(t, !0), n.focus({
          preventScroll: !0
        });
      }
    }
  },
  getWindow: (e) => {
    var t = jm.get(e);
    if (!t)
      throw new Error("Unable to find a host window element for this editor");
    return t;
  },
  hasDOMNode: function(t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      editable: a = !1
    } = n, o = J.toDOMNode(t, t), i;
    try {
      i = Lr(r) ? r : r.parentElement;
    } catch (s) {
      if (s instanceof Error && !s.message.includes('Permission denied to access property "nodeType"'))
        throw s;
    }
    return i ? i.closest("[data-slate-editor]") === o && (!a || i.isContentEditable ? !0 : typeof i.isContentEditable == "boolean" && // isContentEditable exists only on HTMLElement, and on other nodes it will be undefined
    // this is the core logic that lets you know you got the right editor.selection instead of null when editor is contenteditable="false"(readOnly)
    i.closest('[contenteditable="false"]') === o || !!i.getAttribute("data-slate-zero-width")) : !1;
  },
  hasEditableTarget: (e, t) => Zn(t) && J.hasDOMNode(e, t, {
    editable: !0
  }),
  hasRange: (e, t) => {
    var {
      anchor: r,
      focus: n
    } = t;
    return C.hasPath(e, r.path) && C.hasPath(e, n.path);
  },
  hasSelectableTarget: (e, t) => J.hasEditableTarget(e, t) || J.isTargetInsideNonReadonlyVoid(e, t),
  hasTarget: (e, t) => Zn(t) && J.hasDOMNode(e, t),
  insertData: (e, t) => {
    e.insertData(t);
  },
  insertFragmentData: (e, t) => e.insertFragmentData(t),
  insertTextData: (e, t) => e.insertTextData(t),
  isComposing: (e) => !!ga.get(e),
  isFocused: (e) => !!qn.get(e),
  isReadOnly: (e) => !!Sl.get(e),
  isTargetInsideNonReadonlyVoid: (e, t) => {
    if (Sl.get(e))
      return !1;
    var r = J.hasTarget(e, t) && J.toSlateNode(e, t);
    return le.isElement(r) && C.isVoid(e, r);
  },
  setFragmentData: (e, t, r) => e.setFragmentData(t, r),
  toDOMNode: (e, t) => {
    var r = Zs.get(e), n = C.isEditor(t) ? us.get(e) : r == null ? void 0 : r.get(J.findKey(e, t));
    if (!n)
      throw new Error("Cannot resolve a DOM node from Slate node: ".concat(Qt.stringify(t)));
    return n;
  },
  toDOMPoint: (e, t) => {
    var [r] = C.node(e, t.path), n = J.toDOMNode(e, r), a;
    C.void(e, {
      at: t
    }) && (t = {
      path: t.path,
      offset: 0
    });
    for (var o = "[data-slate-string], [data-slate-zero-width]", i = Array.from(n.querySelectorAll(o)), s = 0, u = 0; u < i.length; u++) {
      var l = i[u], c = l.childNodes[0];
      if (!(c == null || c.textContent == null)) {
        var {
          length: d
        } = c.textContent, v = l.getAttribute("data-slate-length"), p = v == null ? d : parseInt(v, 10), h = s + p, f = i[u + 1];
        if (t.offset === h && f !== null && f !== void 0 && f.hasAttribute("data-slate-mark-placeholder")) {
          var m, b = f.childNodes[0];
          a = [
            // COMPAT: If we don't explicity set the dom point to be on the actual
            // dom text element, chrome will put the selection behind the actual dom
            // text element, causing domRange.getBoundingClientRect() calls on a collapsed
            // selection to return incorrect zero values (https://bugs.chromium.org/p/chromium/issues/detail?id=435438)
            // which will cause issues when scrolling to it.
            b instanceof dw ? b : f,
            (m = f.textContent) !== null && m !== void 0 && m.startsWith("\uFEFF") ? 1 : 0
          ];
          break;
        }
        if (t.offset <= h) {
          var E = Math.min(d, Math.max(0, t.offset - s));
          a = [c, E];
          break;
        }
        s = h;
      }
    }
    if (!a)
      throw new Error("Cannot resolve a DOM point from Slate point: ".concat(Qt.stringify(t)));
    return a;
  },
  toDOMRange: (e, t) => {
    var {
      anchor: r,
      focus: n
    } = t, a = X.isBackward(t), o = J.toDOMPoint(e, r), i = X.isCollapsed(t) ? o : J.toDOMPoint(e, n), s = J.getWindow(e), u = s.document.createRange(), [l, c] = a ? i : o, [d, v] = a ? o : i, p = Lr(l) ? l : l.parentElement, h = !!p.getAttribute("data-slate-zero-width"), f = Lr(d) ? d : d.parentElement, m = !!f.getAttribute("data-slate-zero-width");
    return u.setStart(l, h ? 1 : c), u.setEnd(d, m ? 1 : v), u;
  },
  toSlateNode: (e, t) => {
    var r = Lr(t) ? t : t.parentElement;
    r && !r.hasAttribute("data-slate-node") && (r = r.closest("[data-slate-node]"));
    var n = r ? ui.get(r) : null;
    if (!n)
      throw new Error("Cannot resolve a Slate node from DOM node: ".concat(r));
    return n;
  },
  toSlatePoint: (e, t, r) => {
    var {
      exactMatch: n,
      suppressThrow: a
    } = r, [o, i] = n ? t : mw(t), s = o.parentNode, u = null, l = 0;
    if (s) {
      var c, d, v = J.toDOMNode(e, e), p = s.closest('[data-slate-void="true"]'), h = p && v.contains(p) ? p : null, f = s.closest("[data-slate-leaf]"), m = null;
      if (f) {
        if (u = f.closest('[data-slate-node="text"]'), u) {
          var b = J.getWindow(e), E = b.document.createRange();
          E.setStart(u, 0), E.setEnd(o, i);
          var y = E.cloneContents(), w = [...Array.prototype.slice.call(y.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(y.querySelectorAll("[contenteditable=false]"))];
          w.forEach((P) => {
            if (vr && !n && P.hasAttribute("data-slate-zero-width") && P.textContent.length > 0 && P.textContext !== "\uFEFF") {
              P.textContent.startsWith("\uFEFF") && (P.textContent = P.textContent.slice(1));
              return;
            }
            P.parentNode.removeChild(P);
          }), l = y.textContent.length, m = u;
        }
      } else if (h) {
        for (var S = h.querySelectorAll("[data-slate-leaf]"), D = 0; D < S.length; D++) {
          var x = S[D];
          if (J.hasDOMNode(e, x)) {
            f = x;
            break;
          }
        }
        f ? (u = f.closest('[data-slate-node="text"]'), m = f, l = m.textContent.length, m.querySelectorAll("[data-slate-zero-width]").forEach((P) => {
          l -= P.textContent.length;
        })) : l = 1;
      }
      m && l === m.textContent.length && // COMPAT: Android IMEs might remove the zero width space while composing,
      // and we don't add it for line-breaks.
      vr && m.getAttribute("data-slate-zero-width") === "z" && (c = m.textContent) !== null && c !== void 0 && c.startsWith("\uFEFF") && // COMPAT: If the parent node is a Slate zero-width space, editor is
      // because the text node should have no characters. However, during IME
      // composition the ASCII characters will be prepended to the zero-width
      // space, so subtract 1 from the offset to account for the zero-width
      // space character.
      (s.hasAttribute("data-slate-zero-width") || // COMPAT: In Firefox, `range.cloneContents()` returns an extra trailing '\n'
      // when the document ends with a new-line character. This results in the offset
      // length being off by one, so we need to subtract one to account for this.
      eo && (d = m.textContent) !== null && d !== void 0 && d.endsWith(`

`)) && l--;
    }
    if (vr && !u && !n) {
      var A = s.hasAttribute("data-slate-node") ? s : s.closest("[data-slate-node]");
      if (A && J.hasDOMNode(e, A, {
        editable: !0
      })) {
        var O = J.toSlateNode(e, A), {
          path: B,
          offset: j
        } = C.start(e, J.findPath(e, O));
        return A.querySelector("[data-slate-leaf]") || (j = i), {
          path: B,
          offset: j
        };
      }
    }
    if (!u) {
      if (a)
        return null;
      throw new Error("Cannot resolve a Slate point from DOM point: ".concat(t));
    }
    var T = J.toSlateNode(e, u), $ = J.findPath(e, T);
    return {
      path: $,
      offset: l
    };
  },
  toSlateRange: (e, t, r) => {
    var n, {
      exactMatch: a,
      suppressThrow: o
    } = r, i = Ol(t) ? t.anchorNode : t.startContainer, s, u, l, c, d;
    if (i)
      if (Ol(t)) {
        if (eo && t.rangeCount > 1) {
          l = t.focusNode;
          var v = t.getRangeAt(0), p = t.getRangeAt(t.rangeCount - 1);
          if (l instanceof HTMLTableRowElement && v.startContainer instanceof HTMLTableRowElement && p.startContainer instanceof HTMLTableRowElement) {
            let D = function(x) {
              return x.childElementCount > 0 ? D(x.children[0]) : x;
            };
            var h = v.startContainer, f = p.startContainer, m = D(h.children[v.startOffset]), b = D(f.children[p.startOffset]);
            c = 0, b.childNodes.length > 0 ? s = b.childNodes[0] : s = b, m.childNodes.length > 0 ? l = m.childNodes[0] : l = m, b instanceof HTMLElement ? u = b.innerHTML.length : u = 0;
          } else
            v.startContainer === l ? (s = p.endContainer, u = p.endOffset, c = v.startOffset) : (s = v.startContainer, u = v.endOffset, c = p.startOffset);
        } else
          s = t.anchorNode, u = t.anchorOffset, l = t.focusNode, c = t.focusOffset;
        _m && hw(s) || eo ? d = t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : d = t.isCollapsed;
      } else
        s = t.startContainer, u = t.startOffset, l = t.endContainer, c = t.endOffset, d = t.collapsed;
    if (s == null || l == null || u == null || c == null)
      throw new Error("Cannot resolve a Slate range from DOM range: ".concat(t));
    if (eo && (n = l.textContent) !== null && n !== void 0 && n.endsWith(`

`) && c === l.textContent.length && c--, "getAttribute" in l && l.getAttribute("contenteditable") === "false" && l.getAttribute("data-slate-void") !== "true") {
      var E;
      l = s, c = ((E = s.textContent) === null || E === void 0 ? void 0 : E.length) || 0;
    }
    var y = J.toSlatePoint(e, [s, u], {
      exactMatch: a,
      suppressThrow: o
    });
    if (!y)
      return null;
    var w = d ? y : J.toSlatePoint(e, [l, c], {
      exactMatch: a,
      suppressThrow: o
    });
    if (!w)
      return null;
    var S = {
      anchor: y,
      focus: w
    };
    return X.isExpanded(S) && X.isForward(S) && Lr(l) && C.void(e, {
      at: S.focus,
      mode: "highest"
    }) && (S = C.unhangRange(e, S, {
      voids: !0
    })), S;
  }
};
function ww(e, t) {
  var {
    path: r,
    diff: n
  } = t;
  if (!C.hasPath(e, r))
    return !1;
  var a = me.get(e, r);
  if (!Oe.isText(a))
    return !1;
  if (n.start !== a.text.length || n.text.length === 0)
    return a.text.slice(n.start, n.start + n.text.length) === n.text;
  var o = L.next(r);
  if (!C.hasPath(e, o))
    return !1;
  var i = me.get(e, o);
  return Oe.isText(i) && i.text.startsWith(n.text);
}
function Wm(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return r.reduce((a, o) => a.slice(0, o.start) + o.text + a.slice(o.end), e);
}
function Dw(e, t) {
  for (var r = Math.min(e.length, t.length), n = 0; n < r; n++)
    if (e.charAt(n) !== t.charAt(n))
      return n;
  return r;
}
function Sw(e, t, r) {
  for (var n = Math.min(e.length, t.length, r), a = 0; a < n; a++)
    if (e.charAt(e.length - a - 1) !== t.charAt(t.length - a - 1))
      return a;
  return n;
}
function Km(e, t) {
  var {
    start: r,
    end: n,
    text: a
  } = t, o = e.slice(r, n), i = Dw(o, a), s = Math.min(o.length - i, a.length - i), u = Sw(o, a, s), l = {
    start: r + i,
    end: n - u,
    text: a.slice(i, a.length - u)
  };
  return l.start === l.end && l.text.length === 0 ? null : l;
}
function xw(e, t, r) {
  var n = Math.min(t.start, r.start), a = Math.max(0, Math.min(t.start + t.text.length, r.end) - r.start), o = Wm(e, t, r), i = Math.max(r.start + r.text.length, t.start + t.text.length + (t.start + t.text.length > r.start ? r.text.length : 0) - a), s = o.slice(n, i), u = Math.max(t.end, r.end - t.text.length + (t.end - t.start));
  return Km(e, {
    start: n,
    end: u,
    text: s
  });
}
function Ow(e) {
  var {
    path: t,
    diff: r
  } = e;
  return {
    anchor: {
      path: t,
      offset: r.start
    },
    focus: {
      path: t,
      offset: r.end
    }
  };
}
function Al(e, t) {
  var {
    path: r,
    offset: n
  } = t;
  if (!C.hasPath(e, r))
    return null;
  var a = me.get(e, r);
  if (!Oe.isText(a))
    return null;
  var o = C.above(e, {
    match: (s) => le.isElement(s) && C.isBlock(e, s),
    at: r
  });
  if (!o)
    return null;
  for (; n > a.text.length; ) {
    var i = C.next(e, {
      at: r,
      match: Oe.isText
    });
    if (!i || !L.isDescendant(i[1], o[1]))
      return null;
    n -= a.text.length, a = i[0], r = i[1];
  }
  return {
    path: r,
    offset: n
  };
}
function Hd(e, t) {
  var r = Al(e, t.anchor);
  if (!r)
    return null;
  if (X.isCollapsed(t))
    return {
      anchor: r,
      focus: r
    };
  var n = Al(e, t.focus);
  return n ? {
    anchor: r,
    focus: n
  } : null;
}
function Bl(e, t, r) {
  var n = yr.get(e), a = n == null ? void 0 : n.find((c) => {
    var {
      path: d
    } = c;
    return L.equals(d, t.path);
  });
  if (!a || t.offset <= a.diff.start)
    return Ge.transform(t, r, {
      affinity: "backward"
    });
  var {
    diff: o
  } = a;
  if (t.offset <= o.start + o.text.length) {
    var i = {
      path: t.path,
      offset: o.start
    }, s = Ge.transform(i, r, {
      affinity: "backward"
    });
    return s ? {
      path: s.path,
      offset: s.offset + t.offset - o.start
    } : null;
  }
  var u = {
    path: t.path,
    offset: t.offset - o.text.length + o.end - o.start
  }, l = Ge.transform(u, r, {
    affinity: "backward"
  });
  return l ? r.type === "split_node" && L.equals(r.path, t.path) && u.offset < r.position && o.start < r.position ? l : {
    path: l.path,
    offset: l.offset + o.text.length - o.end + o.start
  } : null;
}
function Wd(e, t, r) {
  var n = Bl(e, t.anchor, r);
  if (!n)
    return null;
  if (X.isCollapsed(t))
    return {
      anchor: n,
      focus: n
    };
  var a = Bl(e, t.focus, r);
  return a ? {
    anchor: n,
    focus: a
  } : null;
}
function Aw(e, t) {
  var {
    path: r,
    diff: n,
    id: a
  } = e;
  switch (t.type) {
    case "insert_text":
      return !L.equals(t.path, r) || t.offset >= n.end ? e : t.offset <= n.start ? {
        diff: {
          start: t.text.length + n.start,
          end: t.text.length + n.end,
          text: n.text
        },
        id: a,
        path: r
      } : {
        diff: {
          start: n.start,
          end: n.end + t.text.length,
          text: n.text
        },
        id: a,
        path: r
      };
    case "remove_text":
      return !L.equals(t.path, r) || t.offset >= n.end ? e : t.offset + t.text.length <= n.start ? {
        diff: {
          start: n.start - t.text.length,
          end: n.end - t.text.length,
          text: n.text
        },
        id: a,
        path: r
      } : {
        diff: {
          start: n.start,
          end: n.end - t.text.length,
          text: n.text
        },
        id: a,
        path: r
      };
    case "split_node":
      return !L.equals(t.path, r) || t.position >= n.end ? {
        diff: n,
        id: a,
        path: L.transform(r, t, {
          affinity: "backward"
        })
      } : t.position > n.start ? {
        diff: {
          start: n.start,
          end: Math.min(t.position, n.end),
          text: n.text
        },
        id: a,
        path: r
      } : {
        diff: {
          start: n.start - t.position,
          end: n.end - t.position,
          text: n.text
        },
        id: a,
        path: L.transform(r, t, {
          affinity: "forward"
        })
      };
    case "merge_node":
      return L.equals(t.path, r) ? {
        diff: {
          start: n.start + t.position,
          end: n.end + t.position,
          text: n.text
        },
        id: a,
        path: L.transform(r, t)
      } : {
        diff: n,
        id: a,
        path: L.transform(r, t)
      };
  }
  var o = L.transform(r, t);
  return o ? {
    diff: n,
    path: o,
    id: a
  } : null;
}
function Kd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kd(Object(r), !0).forEach(function(n) {
      kr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Bw = 25, $w = 200, Fw = function() {
}, Pw = (e) => (e == null ? void 0 : e.constructor.name) === "DataTransfer";
function Rw(e) {
  var {
    editor: t,
    scheduleOnDOMSelectionChange: r,
    onDOMSelectionChange: n
  } = e, a = !1, o = null, i = null, s = null, u = 0, l = !1, c = () => {
    var T = Wn.get(t);
    if (Wn.delete(t), T) {
      var {
        selection: $
      } = t, P = Hd(t, T);
      P && (!$ || !X.equals(P, $)) && ee.select(t, P);
    }
  }, d = () => {
    var T = Hn.get(t);
    if (Hn.delete(t), !!T) {
      if (T.at) {
        var $ = Ge.isPoint(T.at) ? Al(t, T.at) : Hd(t, T.at);
        if (!$)
          return;
        var P = C.range(t, $);
        (!t.selection || !X.equals(t.selection, P)) && ee.select(t, $);
      }
      T.run();
    }
  }, v = () => {
    if (i && (clearTimeout(i), i = null), s && (clearTimeout(s), s = null), !w() && !y()) {
      c();
      return;
    }
    a || (a = !0, setTimeout(() => a = !1)), y() && (a = "action");
    var T = t.selection && C.rangeRef(t, t.selection, {
      affinity: "forward"
    });
    Bn.set(t, t.marks), Fw("flush", Hn.get(t), yr.get(t));
    for (var $ = w(), P; P = (R = yr.get(t)) === null || R === void 0 ? void 0 : R[0]; ) {
      var R, M, F = Qr.get(t);
      F !== void 0 && (Qr.delete(t), t.marks = F), F && l === !1 && (l = null);
      var N = Ow(P);
      (!t.selection || !X.equals(t.selection, N)) && ee.select(t, N), P.diff.text ? C.insertText(t, P.diff.text) : C.deleteFragment(t), yr.set(t, (M = yr.get(t)) === null || M === void 0 ? void 0 : M.filter((W) => {
        var {
          id: U
        } = W;
        return U !== P.id;
      })), ww(t, P) || ($ = !1, Hn.delete(t), Bn.delete(t), a = "action", Wn.delete(t), r.cancel(), n.cancel(), T == null || T.unref());
    }
    var V = T == null ? void 0 : T.unref();
    if (V && !Wn.get(t) && (!t.selection || !X.equals(V, t.selection)) && ee.select(t, V), y()) {
      d();
      return;
    }
    $ && r(), r.flush(), n.flush(), c();
    var k = Bn.get(t);
    Bn.delete(t), k !== void 0 && (t.marks = k, t.onChange());
  }, p = (T) => {
    o && clearTimeout(o), o = setTimeout(() => {
      ga.set(t, !1), v();
    }, Bw);
  }, h = (T) => {
    ga.set(t, !0), o && (clearTimeout(o), o = null);
  }, f = function() {
    var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, P = Dl.get(t);
    if (P) {
      if (w() || $) {
        P.style.display = "none";
        return;
      }
      P.style.removeProperty("display");
    }
  }, m = (T, $) => {
    var P, R = (P = yr.get(t)) !== null && P !== void 0 ? P : [];
    yr.set(t, R);
    var M = me.leaf(t, T), F = R.findIndex((k) => L.equals(k.path, T));
    if (F < 0) {
      var N = Km(M.text, $);
      N && R.push({
        path: T,
        diff: $,
        id: u++
      }), f();
      return;
    }
    var V = xw(M.text, R[F].diff, $);
    if (!V) {
      R.splice(F, 1), f();
      return;
    }
    R[F] = Vi(Vi({}, R[F]), {}, {
      diff: V
    });
  }, b = function($) {
    var {
      at: P
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    l = !1, Wn.delete(t), r.cancel(), n.cancel(), y() && v(), Hn.set(t, {
      at: P,
      run: $
    }), s = setTimeout(v);
  }, E = (T) => {
    var $;
    i && (clearTimeout(i), i = null);
    var {
      inputType: P
    } = T, R = null, M = T.dataTransfer || T.data || void 0;
    l !== !1 && P !== "insertText" && P !== "insertCompositionText" && (l = !1);
    var [F] = T.getTargetRanges();
    F && (R = J.toSlateRange(t, F, {
      exactMatch: !1,
      suppressThrow: !0
    }));
    var N = J.getWindow(t), V = N.getSelection();
    if (!R && V && (F = V, R = J.toSlateRange(t, V, {
      exactMatch: !1,
      suppressThrow: !0
    })), R = ($ = R) !== null && $ !== void 0 ? $ : t.selection, !!R) {
      var k = !0;
      if (P.startsWith("delete")) {
        if (X.isExpanded(R)) {
          var [W, U] = X.edges(R), Q = me.leaf(t, W.path);
          if (Q.text.length === W.offset && U.offset === 0) {
            var I = C.next(t, {
              at: W.path,
              match: Oe.isText
            });
            I && L.equals(I[1], U.path) && (R = {
              anchor: U,
              focus: U
            });
          }
        }
        var z = P.endsWith("Backward") ? "backward" : "forward", [H, G] = X.edges(R), [re, te] = C.leaf(t, H.path), de = {
          text: "",
          start: H.offset,
          end: G.offset
        }, se = yr.get(t), he = se == null ? void 0 : se.find((Le) => L.equals(Le.path, te)), ce = he ? [he.diff, de] : [de], q = Wm(re.text, ...ce);
        if (q.length === 0 && (k = !1), X.isExpanded(R)) {
          if (k && L.equals(R.anchor.path, R.focus.path)) {
            var pe = {
              path: R.anchor.path,
              offset: H.offset
            }, De = C.range(t, pe, pe);
            return x(De), m(R.anchor.path, {
              text: "",
              end: G.offset,
              start: H.offset
            });
          }
          return b(() => C.deleteFragment(t, {
            direction: z
          }), {
            at: R
          });
        }
      }
      switch (P) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag":
          return b(() => C.deleteFragment(t), {
            at: R
          });
        case "deleteContent":
        case "deleteContentForward": {
          var {
            anchor: Ce
          } = R;
          if (k && X.isCollapsed(R)) {
            var Ee = me.leaf(t, Ce.path);
            if (Ce.offset < Ee.text.length)
              return m(Ce.path, {
                text: "",
                start: Ce.offset,
                end: Ce.offset + 1
              });
          }
          return b(() => C.deleteForward(t), {
            at: R
          });
        }
        case "deleteContentBackward": {
          var oe, {
            anchor: ue
          } = R, ge = Ol(F) ? F.isCollapsed : !!((oe = F) !== null && oe !== void 0 && oe.collapsed);
          return k && ge && X.isCollapsed(R) && ue.offset > 0 ? m(ue.path, {
            text: "",
            start: ue.offset - 1,
            end: ue.offset
          }) : b(() => C.deleteBackward(t), {
            at: R
          });
        }
        case "deleteEntireSoftLine":
          return b(() => {
            C.deleteBackward(t, {
              unit: "line"
            }), C.deleteForward(t, {
              unit: "line"
            });
          }, {
            at: R
          });
        case "deleteHardLineBackward":
          return b(() => C.deleteBackward(t, {
            unit: "block"
          }), {
            at: R
          });
        case "deleteSoftLineBackward":
          return b(() => C.deleteBackward(t, {
            unit: "line"
          }), {
            at: R
          });
        case "deleteHardLineForward":
          return b(() => C.deleteForward(t, {
            unit: "block"
          }), {
            at: R
          });
        case "deleteSoftLineForward":
          return b(() => C.deleteForward(t, {
            unit: "line"
          }), {
            at: R
          });
        case "deleteWordBackward":
          return b(() => C.deleteBackward(t, {
            unit: "word"
          }), {
            at: R
          });
        case "deleteWordForward":
          return b(() => C.deleteForward(t, {
            unit: "word"
          }), {
            at: R
          });
        case "insertLineBreak":
          return b(() => C.insertSoftBreak(t), {
            at: R
          });
        case "insertParagraph":
          return b(() => C.insertBreak(t), {
            at: R
          });
        case "insertCompositionText":
        case "deleteCompositionText":
        case "insertFromComposition":
        case "insertFromDrop":
        case "insertFromPaste":
        case "insertFromYank":
        case "insertReplacementText":
        case "insertText": {
          if (Pw(M))
            return b(() => J.insertData(t, M), {
              at: R
            });
          var be = M ?? "";
          if (Qr.get(t) && (be = be.replace("\uFEFF", "")), P === "insertText" && /.*\n.*\n$/.test(be) && (be = be.slice(0, -1)), be.includes(`
`))
            return b(() => {
              var Le = be.split(`
`);
              Le.forEach((we, ze) => {
                we && C.insertText(t, we), ze !== Le.length - 1 && C.insertSoftBreak(t);
              });
            }, {
              at: R
            });
          if (L.equals(R.anchor.path, R.focus.path)) {
            var [ye, Ne] = X.edges(R), $e = {
              start: ye.offset,
              end: Ne.offset,
              text: be
            };
            if (be && l && P === "insertCompositionText") {
              var je = l.start + l.text.search(/\S|$/), yt = $e.start + $e.text.search(/\S|$/);
              yt === je + 1 && $e.end === l.start + l.text.length ? ($e.start -= 1, l = null, B()) : l = !1;
            } else
              P === "insertText" ? l === null ? l = $e : l && X.isCollapsed(R) && l.end + l.text.length === ye.offset ? l = Vi(Vi({}, l), {}, {
                text: l.text + be
              }) : l = !1 : l = !1;
            if (k) {
              m(ye.path, $e);
              return;
            }
          }
          return b(() => C.insertText(t, be), {
            at: R
          });
        }
      }
    }
  }, y = () => !!Hn.get(t), w = () => {
    var T;
    return !!((T = yr.get(t)) !== null && T !== void 0 && T.length);
  }, S = () => y() || w(), D = () => a, x = (T) => {
    Wn.set(t, T), i && (clearTimeout(i), i = null);
    var {
      selection: $
    } = t;
    if (T) {
      var P = !$ || !L.equals($.anchor.path, T.anchor.path), R = !$ || !L.equals($.anchor.path.slice(0, -1), T.anchor.path.slice(0, -1));
      (P && l || R) && (l = !1), (P || w()) && (i = setTimeout(v, $w));
    }
  }, A = () => {
    (y() || !w()) && v();
  }, O = (T) => {
    w() || (f(!0), setTimeout(f));
  }, B = () => {
    y() || (s = setTimeout(v));
  }, j = (T) => {
    if (!(w() || y()) && T.some((P) => Uc(t, P, T))) {
      var $;
      ($ = Lm.get(t)) === null || $ === void 0 || $();
    }
  };
  return {
    flush: v,
    scheduleFlush: B,
    hasPendingDiffs: w,
    hasPendingAction: y,
    hasPendingChanges: S,
    isFlushing: D,
    handleUserSelect: x,
    handleCompositionEnd: p,
    handleCompositionStart: h,
    handleDOMBeforeInput: E,
    handleKeyDown: O,
    handleDomMutations: j,
    handleInput: A
  };
}
function Tw() {
  var e = qe(!1);
  return Ft(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e.current;
}
var Aa = ss ? sm : Ft;
function Nw(e, t, r) {
  var [n] = Gt(() => new MutationObserver(t));
  Aa(() => {
    n.takeRecords();
  }), Ft(() => {
    if (!e.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    return n.observe(e.current, r), () => n.disconnect();
  }, [n, e, r]);
}
var Iw = ["node"];
function qd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qd(Object(r), !0).forEach(function(n) {
      kr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var _w = {
  subtree: !0,
  childList: !0,
  characterData: !0
}, jw = vr ? (e) => {
  var {
    node: t
  } = e, r = lo(e, Iw);
  if (!vr)
    return null;
  var n = Jt(), a = Tw(), [o] = Gt(() => Rw(Mw({
    editor: n
  }, r)));
  return Nw(t, o.handleDomMutations, _w), Kc.set(n, o.scheduleFlush), a && o.flush(), o;
} : () => null, Lw = ["anchor", "focus"], kw = ["anchor", "focus"], zw = (e, t) => Object.keys(e).length === Object.keys(t).length && Object.keys(e).every((r) => t.hasOwnProperty(r) && e[r] === t[r]), qm = (e, t) => {
  var r = lo(e, Lw), n = lo(t, kw);
  return e[co] === t[co] && zw(r, n);
}, Vw = (e, t) => {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++) {
    var n = e[r], a = t[r];
    if (!X.equals(n, a) || !qm(n, a))
      return !1;
  }
  return !0;
}, Hw = (e, t) => {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++) {
    var n = e[r], a = t[r];
    if (n.anchor.offset !== a.anchor.offset || n.focus.offset !== a.focus.offset || !qm(n, a))
      return !1;
  }
  return !0;
};
function Ud(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ww(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ud(Object(r), !0).forEach(function(n) {
      kr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ud(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Kw = (e) => {
  var {
    isLast: t,
    leaf: r,
    parent: n,
    text: a
  } = e, o = Jt(), i = J.findPath(o, a), s = L.parent(i), u = !!r[km];
  return o.isVoid(n) ? /* @__PURE__ */ Z.createElement(Tu, {
    length: me.string(n).length
  }) : r.text === "" && n.children[n.children.length - 1] === a && !o.isInline(n) && C.string(o, s) === "" ? /* @__PURE__ */ Z.createElement(Tu, {
    isLineBreak: !0,
    isMarkPlaceholder: u
  }) : r.text === "" ? /* @__PURE__ */ Z.createElement(Tu, {
    isMarkPlaceholder: u
  }) : t && r.text.slice(-1) === `
` ? /* @__PURE__ */ Z.createElement(Gd, {
    isTrailing: !0,
    text: r.text
  }) : /* @__PURE__ */ Z.createElement(Gd, {
    text: r.text
  });
}, Gd = (e) => {
  var {
    text: t,
    isTrailing: r = !1
  } = e, n = qe(null), a = () => "".concat(t ?? "").concat(r ? `
` : ""), [o] = Gt(a);
  return Aa(() => {
    var i = a();
    n.current && n.current.textContent !== i && (n.current.textContent = i);
  }), /* @__PURE__ */ Z.createElement(qw, {
    ref: n
  }, o);
}, qw = /* @__PURE__ */ Nb(/* @__PURE__ */ hr((e, t) => /* @__PURE__ */ Z.createElement("span", {
  "data-slate-string": !0,
  ref: t
}, e.children))), Tu = (e) => {
  var {
    length: t = 0,
    isLineBreak: r = !1,
    isMarkPlaceholder: n = !1
  } = e, a = {
    "data-slate-zero-width": r ? "n" : "z",
    "data-slate-length": t
  };
  return n && (a["data-slate-mark-placeholder"] = !0), /* @__PURE__ */ Z.createElement("span", Ww({}, a), !vr || !r ? "\uFEFF" : null, r ? /* @__PURE__ */ Z.createElement("br", null) : null);
};
function Xd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Um(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xd(Object(r), !0).forEach(function(n) {
      kr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Uw = vr ? 300 : 0;
function Gw(e, t) {
  e.current && (e.current.disconnect(), t && (e.current = null));
}
function Yd(e) {
  e.current && (clearTimeout(e.current), e.current = null);
}
var Xw = (e) => {
  var {
    leaf: t,
    isLast: r,
    text: n,
    parent: a,
    renderPlaceholder: o,
    renderLeaf: i = (E) => /* @__PURE__ */ Z.createElement(Zw, Um({}, E))
  } = e, s = Jt(), u = qe(null), l = qe(null), [c, d] = Gt(!1), v = qe(null), p = et((E) => {
    if (Gw(u, E == null), E == null) {
      var y;
      Dl.delete(s), (y = t.onPlaceholderResize) === null || y === void 0 || y.call(t, null);
    } else {
      if (Dl.set(s, E), !u.current) {
        var w = window.ResizeObserver || QE;
        u.current = new w(() => {
          var S;
          (S = t.onPlaceholderResize) === null || S === void 0 || S.call(t, E);
        });
      }
      u.current.observe(E), l.current = E;
    }
  }, [l, t, s]), h = /* @__PURE__ */ Z.createElement(Kw, {
    isLast: r,
    leaf: t,
    parent: a,
    text: n
  }), f = !!t[co];
  if (Ft(() => (f ? v.current || (v.current = setTimeout(() => {
    d(!0), v.current = null;
  }, Uw)) : (Yd(v), d(!1)), () => Yd(v)), [f, d]), f && c) {
    var m = {
      children: t.placeholder,
      attributes: {
        "data-slate-placeholder": !0,
        style: {
          position: "absolute",
          top: 0,
          pointerEvents: "none",
          width: "100%",
          maxWidth: "100%",
          display: "block",
          opacity: "0.333",
          userSelect: "none",
          textDecoration: "none",
          // Fixes https://github.com/udecode/plate/issues/2315
          WebkitUserModify: Ho ? "inherit" : void 0
        },
        contentEditable: !1,
        ref: p
      }
    };
    h = /* @__PURE__ */ Z.createElement(Z.Fragment, null, o(m), h);
  }
  var b = {
    "data-slate-leaf": !0
  };
  return i({
    attributes: b,
    children: h,
    leaf: t,
    text: n
  });
}, Yw = /* @__PURE__ */ Z.memo(Xw, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && Oe.equals(t.leaf, e.leaf) && t.leaf[co] === e.leaf[co]), Zw = (e) => {
  var {
    attributes: t,
    children: r
  } = e;
  return /* @__PURE__ */ Z.createElement("span", Um({}, t), r);
}, Qw = (e) => {
  for (var {
    decorations: t,
    isLast: r,
    parent: n,
    renderPlaceholder: a,
    renderLeaf: o,
    text: i
  } = e, s = Jt(), u = qe(null), l = Oe.decorations(i, t), c = J.findKey(s, i), d = [], v = 0; v < l.length; v++) {
    var p = l[v];
    d.push(/* @__PURE__ */ Z.createElement(Yw, {
      isLast: r && v === l.length - 1,
      key: "".concat(c.id, "-").concat(v),
      renderPlaceholder: a,
      leaf: p,
      text: i,
      parent: n,
      renderLeaf: o
    }));
  }
  var h = et((f) => {
    var m = Zs.get(s);
    f ? (m == null || m.set(c, f), Ea.set(i, f), ui.set(f, i)) : (m == null || m.delete(c), Ea.delete(i), u.current && ui.delete(u.current)), u.current = f;
  }, [u, s, c, i]);
  return /* @__PURE__ */ Z.createElement("span", {
    "data-slate-node": "text",
    ref: h
  }, d);
}, Gm = /* @__PURE__ */ Z.memo(Qw, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && Hw(t.decorations, e.decorations));
function Zd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zd(Object(r), !0).forEach(function(n) {
      kr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Jw = (e) => {
  var {
    decorations: t,
    element: r,
    renderElement: n = (E) => /* @__PURE__ */ Z.createElement(tD, $l({}, E)),
    renderPlaceholder: a,
    renderLeaf: o,
    selection: i
  } = e, s = Jt(), u = Gc(), l = s.isInline(r), c = J.findKey(s, r), d = et((E) => {
    var y = Zs.get(s);
    E ? (y == null || y.set(c, E), Ea.set(r, E), ui.set(E, r)) : (y == null || y.delete(c), Ea.delete(r));
  }, [s, c, r]), v = Zm({
    decorations: t,
    node: r,
    renderElement: n,
    renderPlaceholder: a,
    renderLeaf: o,
    selection: i
  }), p = {
    "data-slate-node": "element",
    ref: d
  };
  if (l && (p["data-slate-inline"] = !0), !l && C.hasInlines(s, r)) {
    var h = me.string(r), f = Em(h);
    f === "rtl" && (p.dir = f);
  }
  if (C.isVoid(s, r)) {
    p["data-slate-void"] = !0, !u && l && (p.contentEditable = !1);
    var m = l ? "span" : "div", [[b]] = me.texts(r);
    v = /* @__PURE__ */ Z.createElement(m, {
      "data-slate-spacer": !0,
      style: {
        height: "0",
        color: "transparent",
        outline: "none",
        position: "absolute"
      }
    }, /* @__PURE__ */ Z.createElement(Gm, {
      renderPlaceholder: a,
      decorations: [],
      isLast: !1,
      parent: r,
      text: b
    })), Hc.set(b, 0), Wc.set(b, r);
  }
  return n({
    attributes: p,
    children: v,
    element: r
  });
}, eD = /* @__PURE__ */ Z.memo(Jw, (e, t) => e.element === t.element && e.renderElement === t.renderElement && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && Vw(e.decorations, t.decorations) && (e.selection === t.selection || !!e.selection && !!t.selection && X.equals(e.selection, t.selection))), tD = (e) => {
  var {
    attributes: t,
    children: r,
    element: n
  } = e, a = Jt(), o = a.isInline(n) ? "span" : "div";
  return /* @__PURE__ */ Z.createElement(o, $l($l({}, t), {}, {
    style: {
      position: "relative"
    }
  }), r);
}, Xm = /* @__PURE__ */ Wr(() => []), rD = () => St(Xm), Ym = /* @__PURE__ */ Wr(!1), XI = () => St(Ym), Zm = (e) => {
  for (var {
    decorations: t,
    node: r,
    renderElement: n,
    renderPlaceholder: a,
    renderLeaf: o,
    selection: i
  } = e, s = rD(), u = Jt(), l = J.findPath(u, r), c = [], d = le.isElement(r) && !u.isInline(r) && C.hasInlines(u, r), v = 0; v < r.children.length; v++) {
    var p = l.concat(v), h = r.children[v], f = J.findKey(u, h), m = C.range(u, p), b = i && X.intersection(m, i), E = s([h, p]);
    for (var y of t) {
      var w = X.intersection(y, m);
      w && E.push(w);
    }
    le.isElement(h) ? c.push(/* @__PURE__ */ Z.createElement(Ym.Provider, {
      key: "provider-".concat(f.id),
      value: !!b
    }, /* @__PURE__ */ Z.createElement(eD, {
      decorations: E,
      element: h,
      key: f.id,
      renderElement: n,
      renderPlaceholder: a,
      renderLeaf: o,
      selection: b
    }))) : c.push(/* @__PURE__ */ Z.createElement(Gm, {
      decorations: E,
      key: f.id,
      isLast: d && v === r.children.length - 1,
      parent: r,
      renderPlaceholder: a,
      renderLeaf: o,
      text: h
    })), Hc.set(h, v), Wc.set(h, r);
  }
  return c;
}, Qm = /* @__PURE__ */ Wr(!1), Gc = () => St(Qm), Xc = /* @__PURE__ */ Wr(null), nD = () => {
  var e = St(Xc);
  if (!e)
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  var {
    editor: t
  } = e;
  return t;
}, YI = () => {
  var e = St(Xc);
  if (!e)
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  return e;
};
function aD() {
  var e = Jt(), t = qe(!1), r = qe(0), n = et(() => {
    if (!t.current) {
      t.current = !0;
      var a = J.getWindow(e);
      a.cancelAnimationFrame(r.current), r.current = a.requestAnimationFrame(() => {
        t.current = !1;
      });
    }
  }, [e]);
  return Ft(() => () => cancelAnimationFrame(r.current), []), {
    receivedUserInput: t,
    onUserInput: n
  };
}
var oD = 3, iD = {
  bold: "mod+b",
  compose: ["down", "left", "right", "up", "backspace", "enter"],
  moveBackward: "left",
  moveForward: "right",
  moveWordBackward: "ctrl+left",
  moveWordForward: "ctrl+right",
  deleteBackward: "shift?+backspace",
  deleteForward: "shift?+delete",
  extendBackward: "shift+left",
  extendForward: "shift+right",
  italic: "mod+i",
  insertSoftBreak: "shift+enter",
  splitBlock: "enter",
  undo: "mod+z"
}, sD = {
  moveLineBackward: "opt+up",
  moveLineForward: "opt+down",
  moveWordBackward: "opt+left",
  moveWordForward: "opt+right",
  deleteBackward: ["ctrl+backspace", "ctrl+h"],
  deleteForward: ["ctrl+delete", "ctrl+d"],
  deleteLineBackward: "cmd+shift?+backspace",
  deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
  deleteWordBackward: "opt+shift?+backspace",
  deleteWordForward: "opt+shift?+delete",
  extendLineBackward: "opt+shift+up",
  extendLineForward: "opt+shift+down",
  redo: "cmd+shift+z",
  transposeCharacter: "ctrl+t"
}, uD = {
  deleteWordBackward: "ctrl+shift?+backspace",
  deleteWordForward: "ctrl+shift?+delete",
  redo: ["ctrl+y", "ctrl+shift+z"]
}, Rt = (e) => {
  var t = iD[e], r = sD[e], n = uD[e], a = t && Ru(t), o = r && Ru(r), i = n && Ru(n);
  return (s) => !!(a && a(s) || Vd && o && o(s) || !Vd && i && i(s));
}, It = {
  isBold: Rt("bold"),
  isCompose: Rt("compose"),
  isMoveBackward: Rt("moveBackward"),
  isMoveForward: Rt("moveForward"),
  isDeleteBackward: Rt("deleteBackward"),
  isDeleteForward: Rt("deleteForward"),
  isDeleteLineBackward: Rt("deleteLineBackward"),
  isDeleteLineForward: Rt("deleteLineForward"),
  isDeleteWordBackward: Rt("deleteWordBackward"),
  isDeleteWordForward: Rt("deleteWordForward"),
  isExtendBackward: Rt("extendBackward"),
  isExtendForward: Rt("extendForward"),
  isExtendLineBackward: Rt("extendLineBackward"),
  isExtendLineForward: Rt("extendLineForward"),
  isItalic: Rt("italic"),
  isMoveLineBackward: Rt("moveLineBackward"),
  isMoveLineForward: Rt("moveLineForward"),
  isMoveWordBackward: Rt("moveWordBackward"),
  isMoveWordForward: Rt("moveWordForward"),
  isRedo: Rt("redo"),
  isSoftBreak: Rt("insertSoftBreak"),
  isSplitBlock: Rt("splitBlock"),
  isTransposeCharacter: Rt("transposeCharacter"),
  isUndo: Rt("undo")
}, lD = (e, t) => {
  var r = [], n = () => {
    r = [];
  }, a = (i) => {
    if (t.current) {
      var s = i.filter((u) => Uc(e, u, i));
      r.push(...s);
    }
  };
  function o() {
    r.length > 0 && (r.reverse().forEach((i) => {
      i.type !== "characterData" && (i.removedNodes.forEach((s) => {
        i.target.insertBefore(s, i.nextSibling);
      }), i.addedNodes.forEach((s) => {
        i.target.removeChild(s);
      }));
    }), n());
  }
  return {
    registerMutations: a,
    restoreDOM: o,
    clear: n
  };
}, cD = {
  subtree: !0,
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0
};
class Jm extends Tb {
  constructor() {
    super(...arguments), kr(this, "context", null), kr(this, "manager", null), kr(this, "mutationObserver", null);
  }
  observe() {
    var t, {
      node: r
    } = this.props;
    if (!r.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    (t = this.mutationObserver) === null || t === void 0 || t.observe(r.current, cD);
  }
  componentDidMount() {
    var {
      receivedUserInput: t
    } = this.props, r = this.context;
    this.manager = lD(r, t), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe();
  }
  getSnapshotBeforeUpdate() {
    var t, r, n, a = (t = this.mutationObserver) === null || t === void 0 ? void 0 : t.takeRecords();
    if (a != null && a.length) {
      var o;
      (o = this.manager) === null || o === void 0 || o.registerMutations(a);
    }
    return (r = this.mutationObserver) === null || r === void 0 || r.disconnect(), (n = this.manager) === null || n === void 0 || n.restoreDOM(), null;
  }
  componentDidUpdate() {
    var t;
    (t = this.manager) === null || t === void 0 || t.clear(), this.observe();
  }
  componentWillUnmount() {
    var t;
    (t = this.mutationObserver) === null || t === void 0 || t.disconnect();
  }
  render() {
    return this.props.children;
  }
}
kr(Jm, "contextType", Ys);
var fD = vr ? Jm : (e) => {
  var {
    children: t
  } = e;
  return /* @__PURE__ */ Z.createElement(Z.Fragment, null, t);
}, dD = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"], vD = ["text"];
function Qd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qd(Object(r), !0).forEach(function(n) {
      kr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var gD = (e) => /* @__PURE__ */ Z.createElement(Z.Fragment, null, Zm(e)), mD = (e) => {
  var t = et((I) => /* @__PURE__ */ Z.createElement(hD, cn({}, I)), []), {
    autoFocus: r,
    decorate: n = pD,
    onDOMBeforeInput: a,
    placeholder: o,
    readOnly: i = !1,
    renderElement: s,
    renderLeaf: u,
    renderPlaceholder: l = t,
    scrollSelectionIntoView: c = bD,
    style: d = {},
    as: v = "div",
    disableDefaultStyles: p = !1
  } = e, h = lo(e, dD), f = nD(), [m, b] = Gt(!1), E = qe(null), y = qe([]), [w, S] = Gt(), {
    onUserInput: D,
    receivedUserInput: x
  } = aD(), [, A] = im((I) => I + 1, 0);
  Lm.set(f, A), Sl.set(f, i);
  var O = Xt(() => ({
    isDraggingInternally: !1,
    isUpdatingSelection: !1,
    latestElement: null,
    hasMarkPlaceholder: !1
  }), []);
  Ft(() => {
    E.current && r && E.current.focus();
  }, [r]);
  var B = qe(), j = Xt(() => BE(() => {
    var I = B.current;
    if ((vr || !J.isComposing(f)) && (!O.isUpdatingSelection || I != null && I.isFlushing()) && !O.isDraggingInternally) {
      var z = J.findDocumentOrShadowRoot(f), {
        activeElement: H
      } = z, G = J.toDOMNode(f, f), re = z.getSelection();
      if (H === G ? (O.latestElement = H, qn.set(f, !0)) : qn.delete(f), !re)
        return ee.deselect(f);
      var {
        anchorNode: te,
        focusNode: de
      } = re, se = J.hasEditableTarget(f, te) || J.isTargetInsideNonReadonlyVoid(f, te), he = J.hasEditableTarget(f, de) || J.isTargetInsideNonReadonlyVoid(f, de);
      if (se && he) {
        var ce = J.toSlateRange(f, re, {
          exactMatch: !1,
          suppressThrow: !0
        });
        ce && (!J.isComposing(f) && !(I != null && I.hasPendingChanges()) && !(I != null && I.isFlushing()) ? ee.select(f, ce) : I == null || I.handleUserSelect(ce));
      }
      i && (!se || !he) && ee.deselect(f);
    }
  }, 100), [f, i, O]), T = Xt(() => wE(j, 0), [j]);
  B.current = jw({
    node: E,
    onDOMSelectionChange: j,
    scheduleOnDOMSelectionChange: T
  }), Aa(() => {
    var I, z, H;
    E.current && (H = qc(E.current)) ? (jm.set(f, H), us.set(f, E.current), Ea.set(f, E.current), ui.set(E.current, f)) : Ea.delete(f);
    var {
      selection: G
    } = f, re = J.findDocumentOrShadowRoot(f), te = re.getSelection();
    if (!(!te || !J.isFocused(f) || (I = B.current) !== null && I !== void 0 && I.hasPendingAction())) {
      var de = (q) => {
        var pe = te.type !== "None";
        if (!(!G && !pe)) {
          var De = te.focusNode, Ce;
          if (eo && te.rangeCount > 1) {
            var Ee = te.getRangeAt(0), oe = te.getRangeAt(te.rangeCount - 1);
            Ee.startContainer === De ? Ce = oe.endContainer : Ce = Ee.startContainer;
          } else
            Ce = te.anchorNode;
          var ue = us.get(f), ge = !1;
          if (ue.contains(Ce) && ue.contains(De) && (ge = !0), pe && ge && G && !q) {
            var be = J.toSlateRange(f, te, {
              exactMatch: !0,
              // domSelection is not necessarily a valid Slate range
              // (e.g. when clicking on contentEditable:false element)
              suppressThrow: !0
            });
            if (be && X.equals(be, G)) {
              var ye;
              if (!O.hasMarkPlaceholder || (ye = Ce) !== null && ye !== void 0 && (ye = ye.parentElement) !== null && ye !== void 0 && ye.hasAttribute("data-slate-mark-placeholder"))
                return;
            }
          }
          if (G && !J.hasRange(f, G)) {
            f.selection = J.toSlateRange(f, te, {
              exactMatch: !1,
              suppressThrow: !0
            });
            return;
          }
          O.isUpdatingSelection = !0;
          var Ne = G && J.toDOMRange(f, G);
          return Ne ? (J.isComposing(f) && !vr ? te.collapseToEnd() : X.isBackward(G) ? te.setBaseAndExtent(Ne.endContainer, Ne.endOffset, Ne.startContainer, Ne.startOffset) : te.setBaseAndExtent(Ne.startContainer, Ne.startOffset, Ne.endContainer, Ne.endOffset), c(f, Ne)) : te.removeAllRanges(), Ne;
        }
      };
      te.rangeCount <= 1 && de();
      var se = ((z = B.current) === null || z === void 0 ? void 0 : z.isFlushing()) === "action";
      if (!vr || !se) {
        setTimeout(() => {
          O.isUpdatingSelection = !1;
        });
        return;
      }
      var he = null, ce = requestAnimationFrame(() => {
        if (se) {
          var q = (pe) => {
            try {
              var De = J.toDOMNode(f, f);
              De.focus(), de(pe);
            } catch {
            }
          };
          q(), he = setTimeout(() => {
            q(!0), O.isUpdatingSelection = !1;
          });
        }
      });
      return () => {
        cancelAnimationFrame(ce), he && clearTimeout(he);
      };
    }
  });
  var $ = et((I) => {
    if (D(), !i && J.hasEditableTarget(f, I.target) && !yD(I, a)) {
      var z;
      if (B.current)
        return B.current.handleDOMBeforeInput(I);
      T.flush(), j.flush();
      var {
        selection: H
      } = f, {
        inputType: G
      } = I, re = I.dataTransfer || I.data || void 0, te = G === "insertCompositionText" || G === "deleteCompositionText";
      if (te && J.isComposing(f))
        return;
      var de = !1;
      if (G === "insertText" && H && X.isCollapsed(H) && // Only use native character insertion for single characters a-z or space for now.
      // Long-press events (hold a + press 4 = ä) to choose a special character otherwise
      // causes duplicate inserts.
      I.data && I.data.length === 1 && /[a-z ]/i.test(I.data) && // Chrome has issues correctly editing the start of nodes: https://bugs.chromium.org/p/chromium/issues/detail?id=1249405
      // When there is an inline element, e.g. a link, and you select
      // right after it (the start of the next node).
      H.anchor.offset !== 0) {
        var se, he;
        de = !0, f.marks && (de = !1);
        var {
          anchor: ce
        } = H, [q, pe] = J.toDOMPoint(f, ce), De = (se = q.parentElement) === null || se === void 0 ? void 0 : se.closest("a"), Ce = J.getWindow(f);
        if (de && De && J.hasDOMNode(f, De)) {
          var Ee, oe = Ce == null ? void 0 : Ce.document.createTreeWalker(De, NodeFilter.SHOW_TEXT).lastChild();
          oe === q && ((Ee = oe.textContent) === null || Ee === void 0 ? void 0 : Ee.length) === pe && (de = !1);
        }
        if (de && q.parentElement && (Ce == null || (he = Ce.getComputedStyle(q.parentElement)) === null || he === void 0 ? void 0 : he.whiteSpace) === "pre") {
          var ue = C.above(f, {
            at: ce.path,
            match: (je) => le.isElement(je) && C.isBlock(f, je)
          });
          ue && me.string(ue[0]).includes("	") && (de = !1);
        }
      }
      if (!G.startsWith("delete") || G.startsWith("deleteBy")) {
        var [ge] = I.getTargetRanges();
        if (ge) {
          var be = J.toSlateRange(f, ge, {
            exactMatch: !1,
            suppressThrow: !1
          });
          if (!H || !X.equals(H, be)) {
            de = !1;
            var ye = !te && f.selection && C.rangeRef(f, f.selection);
            ee.select(f, be), ye && Xo.set(f, ye);
          }
        }
      }
      if (te)
        return;
      if (de || I.preventDefault(), H && X.isExpanded(H) && G.startsWith("delete")) {
        var Ne = G.endsWith("Backward") ? "backward" : "forward";
        C.deleteFragment(f, {
          direction: Ne
        });
        return;
      }
      switch (G) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag": {
          C.deleteFragment(f);
          break;
        }
        case "deleteContent":
        case "deleteContentForward": {
          C.deleteForward(f);
          break;
        }
        case "deleteContentBackward": {
          C.deleteBackward(f);
          break;
        }
        case "deleteEntireSoftLine": {
          C.deleteBackward(f, {
            unit: "line"
          }), C.deleteForward(f, {
            unit: "line"
          });
          break;
        }
        case "deleteHardLineBackward": {
          C.deleteBackward(f, {
            unit: "block"
          });
          break;
        }
        case "deleteSoftLineBackward": {
          C.deleteBackward(f, {
            unit: "line"
          });
          break;
        }
        case "deleteHardLineForward": {
          C.deleteForward(f, {
            unit: "block"
          });
          break;
        }
        case "deleteSoftLineForward": {
          C.deleteForward(f, {
            unit: "line"
          });
          break;
        }
        case "deleteWordBackward": {
          C.deleteBackward(f, {
            unit: "word"
          });
          break;
        }
        case "deleteWordForward": {
          C.deleteForward(f, {
            unit: "word"
          });
          break;
        }
        case "insertLineBreak":
          C.insertSoftBreak(f);
          break;
        case "insertParagraph": {
          C.insertBreak(f);
          break;
        }
        case "insertFromComposition":
        case "insertFromDrop":
        case "insertFromPaste":
        case "insertFromYank":
        case "insertReplacementText":
        case "insertText": {
          G === "insertFromComposition" && J.isComposing(f) && (b(!1), ga.set(f, !1)), (re == null ? void 0 : re.constructor.name) === "DataTransfer" ? J.insertData(f, re) : typeof re == "string" && (de ? y.current.push(() => C.insertText(f, re)) : C.insertText(f, re));
          break;
        }
      }
      var $e = (z = Xo.get(f)) === null || z === void 0 ? void 0 : z.unref();
      Xo.delete(f), $e && (!f.selection || !X.equals(f.selection, $e)) && ee.select(f, $e);
    }
  }, [f, j, D, a, i, T]), P = et((I) => {
    I == null ? (j.cancel(), T.cancel(), us.delete(f), Ea.delete(f), E.current && Ln && E.current.removeEventListener("beforeinput", $)) : Ln && I.addEventListener("beforeinput", $), E.current = I;
  }, [j, T, f, $]);
  Aa(() => {
    var I = J.getWindow(f);
    return I.document.addEventListener("selectionchange", T), () => {
      I.document.removeEventListener("selectionchange", T);
    };
  }, [T]);
  var R = n([f, []]), M = o && f.children.length === 1 && Array.from(me.texts(f)).length === 1 && me.string(f) === "" && !m, F = et((I) => {
    if (I && M) {
      var z;
      S((z = I.getBoundingClientRect()) === null || z === void 0 ? void 0 : z.height);
    } else
      S(void 0);
  }, [M]);
  if (M) {
    var N = C.start(f, []);
    R.push({
      [co]: !0,
      placeholder: o,
      onPlaceholderResize: F,
      anchor: N,
      focus: N
    });
  }
  var {
    marks: V
  } = f;
  if (O.hasMarkPlaceholder = !1, f.selection && X.isCollapsed(f.selection) && V) {
    var {
      anchor: k
    } = f.selection, W = me.leaf(f, k.path), U = lo(W, vD);
    if (!Oe.equals(W, V, {
      loose: !0
    })) {
      O.hasMarkPlaceholder = !0;
      var Q = Object.fromEntries(Object.keys(U).map((I) => [I, null]));
      R.push(cn(cn(cn({
        [km]: !0
      }, Q), V), {}, {
        anchor: k,
        focus: k
      }));
    }
  }
  return Ft(() => {
    setTimeout(() => {
      var {
        selection: I
      } = f;
      if (I) {
        var {
          anchor: z
        } = I, H = me.leaf(f, z.path);
        if (V && !Oe.equals(H, V, {
          loose: !0
        })) {
          Qr.set(f, V);
          return;
        }
      }
      Qr.delete(f);
    });
  }), /* @__PURE__ */ Z.createElement(Qm.Provider, {
    value: i
  }, /* @__PURE__ */ Z.createElement(Xm.Provider, {
    value: n
  }, /* @__PURE__ */ Z.createElement(fD, {
    node: E,
    receivedUserInput: x
  }, /* @__PURE__ */ Z.createElement(v, cn(cn({
    role: i ? void 0 : "textbox",
    "aria-multiline": i ? void 0 : !0
  }, h), {}, {
    // COMPAT: Certain browsers don't support the `beforeinput` event, so we'd
    // have to use hacks to make these replacement-based features work.
    // For SSR situations HAS_BEFORE_INPUT_SUPPORT is false and results in prop
    // mismatch warning app moves to browser. Pass-through consumer props when
    // not CAN_USE_DOM (SSR) and default to falsy value
    spellCheck: Ln || !ss ? h.spellCheck : !1,
    autoCorrect: Ln || !ss ? h.autoCorrect : "false",
    autoCapitalize: Ln || !ss ? h.autoCapitalize : "false",
    "data-slate-editor": !0,
    "data-slate-node": "value",
    // explicitly set this
    contentEditable: !i,
    // in some cases, a decoration needs access to the range / selection to decorate a text node,
    // then you will select the whole text node when you select part the of text
    // this magic zIndex="-1" will fix it
    zindex: -1,
    suppressContentEditableWarning: !0,
    ref: P,
    style: cn(cn({}, p ? {} : cn({
      // Allow positioning relative to the editable element.
      position: "relative",
      // Preserve adjacent whitespace and new lines.
      whiteSpace: "pre-wrap",
      // Allow words to break if they are too long.
      wordWrap: "break-word"
    }, w ? {
      minHeight: w
    } : {})), d),
    onBeforeInput: et((I) => {
      if (!Ln && !i && !dr(I, h.onBeforeInput) && J.hasSelectableTarget(f, I.target) && (I.preventDefault(), !J.isComposing(f))) {
        var z = I.data;
        C.insertText(f, z);
      }
    }, [h.onBeforeInput, f, i]),
    onInput: et((I) => {
      if (!dr(I, h.onInput)) {
        if (B.current) {
          B.current.handleInput();
          return;
        }
        for (var z of y.current)
          z();
        y.current = [];
      }
    }, [h.onInput]),
    onBlur: et((I) => {
      if (!(i || O.isUpdatingSelection || !J.hasSelectableTarget(f, I.target) || dr(I, h.onBlur))) {
        var z = J.findDocumentOrShadowRoot(f);
        if (O.latestElement !== z.activeElement) {
          var {
            relatedTarget: H
          } = I, G = J.toDOMNode(f, f);
          if (H !== G && !(Lr(H) && H.hasAttribute("data-slate-spacer"))) {
            if (H != null && Zn(H) && J.hasDOMNode(f, H)) {
              var re = J.toSlateNode(f, H);
              if (le.isElement(re) && !f.isVoid(re))
                return;
            }
            if (Ho) {
              var te = z.getSelection();
              te == null || te.removeAllRanges();
            }
            qn.delete(f);
          }
        }
      }
    }, [i, O.isUpdatingSelection, O.latestElement, f, h.onBlur]),
    onClick: et((I) => {
      if (J.hasTarget(f, I.target) && !dr(I, h.onClick) && Zn(I.target)) {
        var z = J.toSlateNode(f, I.target), H = J.findPath(f, z);
        if (!C.hasPath(f, H) || me.get(f, H) !== z)
          return;
        if (I.detail === oD && H.length >= 1) {
          var G = H;
          if (!(le.isElement(z) && C.isBlock(f, z))) {
            var re, te = C.above(f, {
              match: (De) => le.isElement(De) && C.isBlock(f, De),
              at: H
            });
            G = (re = te == null ? void 0 : te[1]) !== null && re !== void 0 ? re : H.slice(0, 1);
          }
          var de = C.range(f, G);
          ee.select(f, de);
          return;
        }
        if (i)
          return;
        var se = C.start(f, H), he = C.end(f, H), ce = C.void(f, {
          at: se
        }), q = C.void(f, {
          at: he
        });
        if (ce && q && L.equals(ce[1], q[1])) {
          var pe = C.range(f, se);
          ee.select(f, pe);
        }
      }
    }, [f, h.onClick, i]),
    onCompositionEnd: et((I) => {
      if (J.hasSelectableTarget(f, I.target)) {
        var z;
        if (J.isComposing(f) && Promise.resolve().then(() => {
          b(!1), ga.set(f, !1);
        }), (z = B.current) === null || z === void 0 || z.handleCompositionEnd(I), dr(I, h.onCompositionEnd) || vr)
          return;
        if (!Ho && !lw && !ow && !fw && !cw && I.data) {
          var H = Qr.get(f);
          Qr.delete(f), H !== void 0 && (Bn.set(f, f.marks), f.marks = H), C.insertText(f, I.data);
          var G = Bn.get(f);
          Bn.delete(f), G !== void 0 && (f.marks = G);
        }
      }
    }, [h.onCompositionEnd, f]),
    onCompositionUpdate: et((I) => {
      J.hasSelectableTarget(f, I.target) && !dr(I, h.onCompositionUpdate) && (J.isComposing(f) || (b(!0), ga.set(f, !0)));
    }, [h.onCompositionUpdate, f]),
    onCompositionStart: et((I) => {
      if (J.hasSelectableTarget(f, I.target)) {
        var z;
        if ((z = B.current) === null || z === void 0 || z.handleCompositionStart(I), dr(I, h.onCompositionStart) || vr)
          return;
        b(!0);
        var {
          selection: H
        } = f;
        if (H && X.isExpanded(H)) {
          C.deleteFragment(f);
          return;
        }
      }
    }, [h.onCompositionStart, f]),
    onCopy: et((I) => {
      J.hasSelectableTarget(f, I.target) && !dr(I, h.onCopy) && !Jd(I) && (I.preventDefault(), J.setFragmentData(f, I.clipboardData, "copy"));
    }, [h.onCopy, f]),
    onCut: et((I) => {
      if (!i && J.hasSelectableTarget(f, I.target) && !dr(I, h.onCut) && !Jd(I)) {
        I.preventDefault(), J.setFragmentData(f, I.clipboardData, "cut");
        var {
          selection: z
        } = f;
        if (z)
          if (X.isExpanded(z))
            C.deleteFragment(f);
          else {
            var H = me.parent(f, z.anchor.path);
            C.isVoid(f, H) && ee.delete(f);
          }
      }
    }, [i, f, h.onCut]),
    onDragOver: et((I) => {
      if (J.hasTarget(f, I.target) && !dr(I, h.onDragOver)) {
        var z = J.toSlateNode(f, I.target);
        le.isElement(z) && C.isVoid(f, z) && I.preventDefault();
      }
    }, [h.onDragOver, f]),
    onDragStart: et((I) => {
      if (!i && J.hasTarget(f, I.target) && !dr(I, h.onDragStart)) {
        var z = J.toSlateNode(f, I.target), H = J.findPath(f, z), G = le.isElement(z) && C.isVoid(f, z) || C.void(f, {
          at: H,
          voids: !0
        });
        if (G) {
          var re = C.range(f, H);
          ee.select(f, re);
        }
        O.isDraggingInternally = !0, J.setFragmentData(f, I.dataTransfer, "drag");
      }
    }, [i, f, h.onDragStart, O]),
    onDrop: et((I) => {
      if (!i && J.hasTarget(f, I.target) && !dr(I, h.onDrop)) {
        I.preventDefault();
        var z = f.selection, H = J.findEventRange(f, I), G = I.dataTransfer;
        ee.select(f, H), O.isDraggingInternally && z && !X.equals(z, H) && !C.void(f, {
          at: H,
          voids: !0
        }) && ee.delete(f, {
          at: z
        }), J.insertData(f, G), J.isFocused(f) || J.focus(f);
      }
      O.isDraggingInternally = !1;
    }, [i, f, h.onDrop, O]),
    onDragEnd: et((I) => {
      !i && O.isDraggingInternally && h.onDragEnd && J.hasTarget(f, I.target) && h.onDragEnd(I), O.isDraggingInternally = !1;
    }, [i, O, h, f]),
    onFocus: et((I) => {
      if (!i && !O.isUpdatingSelection && J.hasEditableTarget(f, I.target) && !dr(I, h.onFocus)) {
        var z = J.toDOMNode(f, f), H = J.findDocumentOrShadowRoot(f);
        if (O.latestElement = H.activeElement, eo && I.target !== z) {
          z.focus();
          return;
        }
        qn.set(f, !0);
      }
    }, [i, O, f, h.onFocus]),
    onKeyDown: et((I) => {
      if (!i && J.hasEditableTarget(f, I.target)) {
        var z;
        (z = B.current) === null || z === void 0 || z.handleKeyDown(I);
        var {
          nativeEvent: H
        } = I;
        if (J.isComposing(f) && H.isComposing === !1 && (ga.set(f, !1), b(!1)), dr(I, h.onKeyDown) || J.isComposing(f))
          return;
        var {
          selection: G
        } = f, re = f.children[G !== null ? G.focus.path[0] : 0], te = Em(me.string(re)) === "rtl";
        if (It.isRedo(H)) {
          I.preventDefault();
          var de = f;
          typeof de.redo == "function" && de.redo();
          return;
        }
        if (It.isUndo(H)) {
          I.preventDefault();
          var se = f;
          typeof se.undo == "function" && se.undo();
          return;
        }
        if (It.isMoveLineBackward(H)) {
          I.preventDefault(), ee.move(f, {
            unit: "line",
            reverse: !0
          });
          return;
        }
        if (It.isMoveLineForward(H)) {
          I.preventDefault(), ee.move(f, {
            unit: "line"
          });
          return;
        }
        if (It.isExtendLineBackward(H)) {
          I.preventDefault(), ee.move(f, {
            unit: "line",
            edge: "focus",
            reverse: !0
          });
          return;
        }
        if (It.isExtendLineForward(H)) {
          I.preventDefault(), ee.move(f, {
            unit: "line",
            edge: "focus"
          });
          return;
        }
        if (It.isMoveBackward(H)) {
          I.preventDefault(), G && X.isCollapsed(G) ? ee.move(f, {
            reverse: !te
          }) : ee.collapse(f, {
            edge: te ? "end" : "start"
          });
          return;
        }
        if (It.isMoveForward(H)) {
          I.preventDefault(), G && X.isCollapsed(G) ? ee.move(f, {
            reverse: te
          }) : ee.collapse(f, {
            edge: te ? "start" : "end"
          });
          return;
        }
        if (It.isMoveWordBackward(H)) {
          I.preventDefault(), G && X.isExpanded(G) && ee.collapse(f, {
            edge: "focus"
          }), ee.move(f, {
            unit: "word",
            reverse: !te
          });
          return;
        }
        if (It.isMoveWordForward(H)) {
          I.preventDefault(), G && X.isExpanded(G) && ee.collapse(f, {
            edge: "focus"
          }), ee.move(f, {
            unit: "word",
            reverse: te
          });
          return;
        }
        if (Ln) {
          if ((_m || Ho) && G && (It.isDeleteBackward(H) || It.isDeleteForward(H)) && X.isCollapsed(G)) {
            var he = me.parent(f, G.anchor.path);
            if (le.isElement(he) && C.isVoid(f, he) && (C.isInline(f, he) || C.isBlock(f, he))) {
              I.preventDefault(), C.deleteBackward(f, {
                unit: "block"
              });
              return;
            }
          }
        } else {
          if (It.isBold(H) || It.isItalic(H) || It.isTransposeCharacter(H)) {
            I.preventDefault();
            return;
          }
          if (It.isSoftBreak(H)) {
            I.preventDefault(), C.insertSoftBreak(f);
            return;
          }
          if (It.isSplitBlock(H)) {
            I.preventDefault(), C.insertBreak(f);
            return;
          }
          if (It.isDeleteBackward(H)) {
            I.preventDefault(), G && X.isExpanded(G) ? C.deleteFragment(f, {
              direction: "backward"
            }) : C.deleteBackward(f);
            return;
          }
          if (It.isDeleteForward(H)) {
            I.preventDefault(), G && X.isExpanded(G) ? C.deleteFragment(f, {
              direction: "forward"
            }) : C.deleteForward(f);
            return;
          }
          if (It.isDeleteLineBackward(H)) {
            I.preventDefault(), G && X.isExpanded(G) ? C.deleteFragment(f, {
              direction: "backward"
            }) : C.deleteBackward(f, {
              unit: "line"
            });
            return;
          }
          if (It.isDeleteLineForward(H)) {
            I.preventDefault(), G && X.isExpanded(G) ? C.deleteFragment(f, {
              direction: "forward"
            }) : C.deleteForward(f, {
              unit: "line"
            });
            return;
          }
          if (It.isDeleteWordBackward(H)) {
            I.preventDefault(), G && X.isExpanded(G) ? C.deleteFragment(f, {
              direction: "backward"
            }) : C.deleteBackward(f, {
              unit: "word"
            });
            return;
          }
          if (It.isDeleteWordForward(H)) {
            I.preventDefault(), G && X.isExpanded(G) ? C.deleteFragment(f, {
              direction: "forward"
            }) : C.deleteForward(f, {
              unit: "word"
            });
            return;
          }
        }
      }
    }, [i, f, h.onKeyDown]),
    onPaste: et((I) => {
      !i && J.hasEditableTarget(f, I.target) && !dr(I, h.onPaste) && (!Ln || gw(I.nativeEvent) || Ho) && (I.preventDefault(), J.insertData(f, I.clipboardData));
    }, [i, f, h.onPaste])
  }), /* @__PURE__ */ Z.createElement(gD, {
    decorations: R,
    node: f,
    renderElement: s,
    renderPlaceholder: l,
    renderLeaf: u,
    selection: f.selection
  })))));
}, hD = (e) => {
  var {
    attributes: t,
    children: r
  } = e;
  return (
    // COMPAT: Artificially add a line-break to the end on the placeholder element
    // to prevent Android IMEs to pick up its content in autocorrect and to auto-capitalize the first letter
    /* @__PURE__ */ Z.createElement("span", cn({}, t), r, vr && /* @__PURE__ */ Z.createElement("br", null))
  );
}, pD = () => [], bD = (e, t) => {
  if (t.getBoundingClientRect && (!e.selection || e.selection && X.isCollapsed(e.selection))) {
    var r = t.startContainer.parentElement;
    r.getBoundingClientRect = t.getBoundingClientRect.bind(t), PE(r, {
      scrollMode: "if-needed"
    }), delete r.getBoundingClientRect;
  }
}, dr = (e, t) => {
  if (!t)
    return !1;
  var r = t(e);
  return r ?? (e.isDefaultPrevented() || e.isPropagationStopped());
}, Jd = (e) => Zn(e.target) && (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement), yD = (e, t) => {
  if (!t)
    return !1;
  var r = t(e);
  return r ?? e.defaultPrevented;
}, eh = /* @__PURE__ */ Wr(!1), ZI = () => St(eh);
function CD(e) {
  return e instanceof Error;
}
var th = /* @__PURE__ */ Wr({}), ED = (e, t) => e === t;
function ta(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ED, [, r] = im((c) => c + 1, 0), n = St(th);
  if (!n)
    throw new Error("The `useSlateSelector` hook must be used inside the <Slate> component's context.");
  var {
    getSlate: a,
    addEventListener: o
  } = n, i = qe(), s = qe(() => null), u = qe(null), l;
  try {
    e !== s.current || i.current ? l = e(a()) : l = u.current;
  } catch (c) {
    throw i.current && CD(c) && (c.message += `
The error may be correlated with this previous error:
`.concat(i.current.stack, `

`)), c;
  }
  return Aa(() => {
    s.current = e, u.current = l, i.current = void 0;
  }), Aa(
    () => {
      function c() {
        try {
          var v = s.current(a());
          if (t(v, u.current))
            return;
          u.current = v;
        } catch (p) {
          p instanceof Error ? i.current = p : i.current = new Error(String(p));
        }
        r();
      }
      var d = o(c);
      return c(), () => d();
    },
    // don't rerender on equalityFn change since we want to be able to define it inline
    [o, a]
  ), l;
}
function wD(e) {
  var t = qe([]).current, r = qe({
    editor: e
  }).current, n = et((o) => {
    r.editor = o, t.forEach((i) => i(o));
  }, [t, r]), a = Xt(() => ({
    getSlate: () => r.editor,
    addEventListener: (o) => (t.push(o), () => {
      t.splice(t.indexOf(o), 1);
    })
  }), [t, r]);
  return {
    selectorContext: a,
    onChange: n
  };
}
var DD = ["editor", "children", "onChange", "onSelectionChange", "onValueChange", "initialValue"], SD = (e) => {
  var {
    editor: t,
    children: r,
    onChange: n,
    onSelectionChange: a,
    onValueChange: o,
    initialValue: i
  } = e, s = lo(e, DD), [u, l] = Z.useState(() => {
    if (!me.isNodeList(i))
      throw new Error("[Slate] initialValue is invalid! Expected a list of elements but got: ".concat(Qt.stringify(i)));
    if (!C.isEditor(t))
      throw new Error("[Slate] editor is invalid! You passed: ".concat(Qt.stringify(t)));
    return t.children = i, Object.assign(t, s), {
      v: 0,
      editor: t
    };
  }), {
    selectorContext: c,
    onChange: d
  } = wD(t), v = et((f) => {
    var m;
    switch (n && n(t.children), f == null || (m = f.operation) === null || m === void 0 ? void 0 : m.type) {
      case "set_selection":
        a == null || a(t.selection);
        break;
      default:
        o == null || o(t.children);
    }
    l((b) => ({
      v: b.v + 1,
      editor: t
    })), d(t);
  }, [t, d, n, a, o]);
  Ft(() => (xl.set(t, v), () => {
    xl.set(t, () => {
    });
  }), [t, v]);
  var [p, h] = Gt(J.isFocused(t));
  return Ft(() => {
    h(J.isFocused(t));
  }, [t]), Aa(() => {
    var f = () => h(J.isFocused(t));
    return Mm >= 17 ? (document.addEventListener("focusin", f), document.addEventListener("focusout", f), () => {
      document.removeEventListener("focusin", f), document.removeEventListener("focusout", f);
    }) : (document.addEventListener("focus", f, !0), document.addEventListener("blur", f, !0), () => {
      document.removeEventListener("focus", f, !0), document.removeEventListener("blur", f, !0);
    });
  }, []), /* @__PURE__ */ Z.createElement(th.Provider, {
    value: c
  }, /* @__PURE__ */ Z.createElement(Xc.Provider, {
    value: u
  }, /* @__PURE__ */ Z.createElement(Ys.Provider, {
    value: u.editor
  }, /* @__PURE__ */ Z.createElement(eh.Provider, {
    value: p
  }, r))));
}, QI = () => {
  var e = St(Ys);
  if (!e)
    throw new Error("The `useEditor` hook must be used inside the <Slate> component's context.");
  return e;
}, JI = () => ta((e) => e.selection, xD), xD = (e, t) => !e && !t ? !0 : !e || !t ? !1 : X.equals(e, t), ev = (e, t) => {
  var r = (t.top + t.bottom) / 2;
  return e.top <= r && e.bottom >= r;
}, tv = (e, t, r) => {
  var n = J.toDOMRange(e, t).getBoundingClientRect(), a = J.toDOMRange(e, r).getBoundingClientRect();
  return ev(n, a) && ev(a, n);
}, OD = (e, t) => {
  var r = C.range(e, X.end(t)), n = Array.from(C.positions(e, {
    at: t
  })), a = 0, o = n.length, i = Math.floor(o / 2);
  if (tv(e, C.range(e, n[a]), r))
    return C.range(e, n[a], r);
  if (n.length < 2)
    return C.range(e, n[n.length - 1], r);
  for (; i !== n.length && i !== a; )
    tv(e, C.range(e, n[i]), r) ? o = i : a = i, i = Math.floor((a + o) / 2);
  return C.range(e, n[o], r);
};
function rv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rv(Object(r), !0).forEach(function(n) {
      kr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var AD = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x-slate-fragment", n = t, {
    apply: a,
    onChange: o,
    deleteBackward: i,
    addMark: s,
    removeMark: u
  } = n;
  return Zs.set(n, /* @__PURE__ */ new WeakMap()), n.addMark = (l, c) => {
    var d, v;
    (d = Kc.get(n)) === null || d === void 0 || d(), !Qr.get(n) && (v = yr.get(n)) !== null && v !== void 0 && v.length && Qr.set(n, null), Bn.delete(n), s(l, c);
  }, n.removeMark = (l) => {
    var c;
    !Qr.get(n) && (c = yr.get(n)) !== null && c !== void 0 && c.length && Qr.set(n, null), Bn.delete(n), u(l);
  }, n.deleteBackward = (l) => {
    if (l !== "line")
      return i(l);
    if (n.selection && X.isCollapsed(n.selection)) {
      var c = C.above(n, {
        match: (h) => le.isElement(h) && C.isBlock(n, h),
        at: n.selection
      });
      if (c) {
        var [, d] = c, v = C.range(n, d, n.selection.anchor), p = OD(n, v);
        X.isCollapsed(p) || ee.delete(n, {
          at: p
        });
      }
    }
  }, n.apply = (l) => {
    var c = [], d = [], v = yr.get(n);
    if (v != null && v.length) {
      var p = v.map((P) => Aw(P, l)).filter(Boolean);
      yr.set(n, p);
    }
    var h = Wn.get(n);
    h && Wn.set(n, Wd(n, h, l));
    var f = Hn.get(n);
    if (f != null && f.at) {
      var m = Ge.isPoint(f == null ? void 0 : f.at) ? Bl(n, f.at, l) : Wd(n, f.at, l);
      Hn.set(n, m ? nv(nv({}, f), {}, {
        at: m
      }) : null);
    }
    switch (l.type) {
      case "insert_text":
      case "remove_text":
      case "set_node":
      case "split_node": {
        c.push(...La(n, l.path));
        break;
      }
      case "set_selection": {
        var b;
        (b = Xo.get(n)) === null || b === void 0 || b.unref(), Xo.delete(n);
        break;
      }
      case "insert_node":
      case "remove_node": {
        c.push(...La(n, L.parent(l.path)));
        break;
      }
      case "merge_node": {
        var E = L.previous(l.path);
        c.push(...La(n, E));
        break;
      }
      case "move_node": {
        var y = L.common(L.parent(l.path), L.parent(l.newPath));
        c.push(...La(n, y));
        var w;
        L.isBefore(l.path, l.newPath) ? (c.push(...La(n, L.parent(l.path))), w = l.newPath) : (c.push(...La(n, L.parent(l.newPath))), w = l.path);
        var S = me.get(t, L.parent(w)), D = J.findKey(n, S), x = C.pathRef(n, L.parent(w));
        d.push([x, D]);
        break;
      }
    }
    a(l);
    for (var [A, O] of c) {
      var [B] = C.node(n, A);
      Ss.set(B, O);
    }
    for (var [j, T] of d)
      if (j.current) {
        var [$] = C.node(n, j.current);
        Ss.set($, T);
      }
  }, n.setFragmentData = (l) => {
    var {
      selection: c
    } = n;
    if (c) {
      var [d, v] = X.edges(c), p = C.void(n, {
        at: d.path
      }), h = C.void(n, {
        at: v.path
      });
      if (!(X.isCollapsed(c) && !p)) {
        var f = J.toDOMRange(n, c), m = f.cloneContents(), b = m.childNodes[0];
        if (m.childNodes.forEach((B) => {
          B.textContent && B.textContent.trim() !== "" && (b = B);
        }), h) {
          var [E] = h, y = f.cloneRange(), w = J.toDOMNode(n, E);
          y.setEndAfter(w), m = y.cloneContents();
        }
        if (p && (b = m.querySelector("[data-slate-spacer]")), Array.from(m.querySelectorAll("[data-slate-zero-width]")).forEach((B) => {
          var j = B.getAttribute("data-slate-zero-width") === "n";
          B.textContent = j ? `
` : "";
        }), zm(b)) {
          var S = b.ownerDocument.createElement("span");
          S.style.whiteSpace = "pre", S.appendChild(b), m.appendChild(S), b = S;
        }
        var D = n.getFragment(), x = JSON.stringify(D), A = window.btoa(encodeURIComponent(x));
        b.setAttribute("data-slate-fragment", A), l.setData("application/".concat(r), A);
        var O = m.ownerDocument.createElement("div");
        return O.appendChild(m), O.setAttribute("hidden", "true"), m.ownerDocument.body.appendChild(O), l.setData("text/html", O.innerHTML), l.setData("text/plain", Hm(O)), m.ownerDocument.body.removeChild(O), l;
      }
    }
  }, n.insertData = (l) => {
    n.insertFragmentData(l) || n.insertTextData(l);
  }, n.insertFragmentData = (l) => {
    var c = l.getData("application/".concat(r)) || yw(l);
    if (c) {
      var d = decodeURIComponent(window.atob(c)), v = JSON.parse(d);
      return n.insertFragment(v), !0;
    }
    return !1;
  }, n.insertTextData = (l) => {
    var c = l.getData("text/plain");
    if (c) {
      var d = c.split(/\r\n|\r|\n/), v = !1;
      for (var p of d)
        v && ee.splitNodes(n, {
          always: !0
        }), n.insertText(p), v = !0;
      return !0;
    }
    return !1;
  }, n.onChange = (l) => {
    var c = Mm < 18 ? um.unstable_batchedUpdates : (d) => d();
    c(() => {
      var d = xl.get(n);
      d && d(l), o(l);
    });
  }, n;
}, La = (e, t) => {
  var r = [];
  for (var [n, a] of C.levels(e, {
    at: t
  })) {
    var o = J.findKey(e, n);
    r.push([a, o]);
  }
  return r;
}, Fl = { exports: {} }, Io = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var av;
function BD() {
  if (av)
    return Io;
  av = 1;
  var e = Z, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, u, l) {
    var c, d = {}, v = null, p = null;
    l !== void 0 && (v = "" + l), u.key !== void 0 && (v = "" + u.key), u.ref !== void 0 && (p = u.ref);
    for (c in u)
      n.call(u, c) && !o.hasOwnProperty(c) && (d[c] = u[c]);
    if (s && s.defaultProps)
      for (c in u = s.defaultProps, u)
        d[c] === void 0 && (d[c] = u[c]);
    return { $$typeof: t, type: s, key: v, ref: p, props: d, _owner: a.current };
  }
  return Io.Fragment = r, Io.jsx = i, Io.jsxs = i, Io;
}
var Mo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ov;
function $D() {
  return ov || (ov = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Z, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h = Symbol.iterator, f = "@@iterator";
    function m(_) {
      if (_ === null || typeof _ != "object")
        return null;
      var ae = h && _[h] || _[f];
      return typeof ae == "function" ? ae : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(_) {
      {
        for (var ae = arguments.length, ve = new Array(ae > 1 ? ae - 1 : 0), Ie = 1; Ie < ae; Ie++)
          ve[Ie - 1] = arguments[Ie];
        y("error", _, ve);
      }
    }
    function y(_, ae, ve) {
      {
        var Ie = b.ReactDebugCurrentFrame, Xe = Ie.getStackAddendum();
        Xe !== "" && (ae += "%s", ve = ve.concat([Xe]));
        var it = ve.map(function(Ue) {
          return String(Ue);
        });
        it.unshift("Warning: " + ae), Function.prototype.apply.call(console[_], console, it);
      }
    }
    var w = !1, S = !1, D = !1, x = !1, A = !1, O;
    O = Symbol.for("react.module.reference");
    function B(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === n || _ === o || A || _ === a || _ === l || _ === c || x || _ === p || w || S || D || typeof _ == "object" && _ !== null && (_.$$typeof === v || _.$$typeof === d || _.$$typeof === i || _.$$typeof === s || _.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === O || _.getModuleId !== void 0));
    }
    function j(_, ae, ve) {
      var Ie = _.displayName;
      if (Ie)
        return Ie;
      var Xe = ae.displayName || ae.name || "";
      return Xe !== "" ? ve + "(" + Xe + ")" : ve;
    }
    function T(_) {
      return _.displayName || "Context";
    }
    function $(_) {
      if (_ == null)
        return null;
      if (typeof _.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof _ == "function")
        return _.displayName || _.name || null;
      if (typeof _ == "string")
        return _;
      switch (_) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case a:
          return "StrictMode";
        case l:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case s:
            var ae = _;
            return T(ae) + ".Consumer";
          case i:
            var ve = _;
            return T(ve._context) + ".Provider";
          case u:
            return j(_, _.render, "ForwardRef");
          case d:
            var Ie = _.displayName || null;
            return Ie !== null ? Ie : $(_.type) || "Memo";
          case v: {
            var Xe = _, it = Xe._payload, Ue = Xe._init;
            try {
              return $(Ue(it));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, R = 0, M, F, N, V, k, W, U;
    function Q() {
    }
    Q.__reactDisabledLog = !0;
    function I() {
      {
        if (R === 0) {
          M = console.log, F = console.info, N = console.warn, V = console.error, k = console.group, W = console.groupCollapsed, U = console.groupEnd;
          var _ = {
            configurable: !0,
            enumerable: !0,
            value: Q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: _,
            log: _,
            warn: _,
            error: _,
            group: _,
            groupCollapsed: _,
            groupEnd: _
          });
        }
        R++;
      }
    }
    function z() {
      {
        if (R--, R === 0) {
          var _ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, _, {
              value: M
            }),
            info: P({}, _, {
              value: F
            }),
            warn: P({}, _, {
              value: N
            }),
            error: P({}, _, {
              value: V
            }),
            group: P({}, _, {
              value: k
            }),
            groupCollapsed: P({}, _, {
              value: W
            }),
            groupEnd: P({}, _, {
              value: U
            })
          });
        }
        R < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = b.ReactCurrentDispatcher, G;
    function re(_, ae, ve) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (Xe) {
            var Ie = Xe.stack.trim().match(/\n( *(at )?)/);
            G = Ie && Ie[1] || "";
          }
        return `
` + G + _;
      }
    }
    var te = !1, de;
    {
      var se = typeof WeakMap == "function" ? WeakMap : Map;
      de = new se();
    }
    function he(_, ae) {
      if (!_ || te)
        return "";
      {
        var ve = de.get(_);
        if (ve !== void 0)
          return ve;
      }
      var Ie;
      te = !0;
      var Xe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var it;
      it = H.current, H.current = null, I();
      try {
        if (ae) {
          var Ue = function() {
            throw Error();
          };
          if (Object.defineProperty(Ue.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ue, []);
            } catch (Vt) {
              Ie = Vt;
            }
            Reflect.construct(_, [], Ue);
          } else {
            try {
              Ue.call();
            } catch (Vt) {
              Ie = Vt;
            }
            _.call(Ue.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Vt) {
            Ie = Vt;
          }
          _();
        }
      } catch (Vt) {
        if (Vt && Ie && typeof Vt.stack == "string") {
          for (var He = Vt.stack.split(`
`), Ot = Ie.stack.split(`
`), Dt = He.length - 1, Ye = Ot.length - 1; Dt >= 1 && Ye >= 0 && He[Dt] !== Ot[Ye]; )
            Ye--;
          for (; Dt >= 1 && Ye >= 0; Dt--, Ye--)
            if (He[Dt] !== Ot[Ye]) {
              if (Dt !== 1 || Ye !== 1)
                do
                  if (Dt--, Ye--, Ye < 0 || He[Dt] !== Ot[Ye]) {
                    var qt = `
` + He[Dt].replace(" at new ", " at ");
                    return _.displayName && qt.includes("<anonymous>") && (qt = qt.replace("<anonymous>", _.displayName)), typeof _ == "function" && de.set(_, qt), qt;
                  }
                while (Dt >= 1 && Ye >= 0);
              break;
            }
        }
      } finally {
        te = !1, H.current = it, z(), Error.prepareStackTrace = Xe;
      }
      var Ir = _ ? _.displayName || _.name : "", sn = Ir ? re(Ir) : "";
      return typeof _ == "function" && de.set(_, sn), sn;
    }
    function ce(_, ae, ve) {
      return he(_, !1);
    }
    function q(_) {
      var ae = _.prototype;
      return !!(ae && ae.isReactComponent);
    }
    function pe(_, ae, ve) {
      if (_ == null)
        return "";
      if (typeof _ == "function")
        return he(_, q(_));
      if (typeof _ == "string")
        return re(_);
      switch (_) {
        case l:
          return re("Suspense");
        case c:
          return re("SuspenseList");
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case u:
            return ce(_.render);
          case d:
            return pe(_.type, ae, ve);
          case v: {
            var Ie = _, Xe = Ie._payload, it = Ie._init;
            try {
              return pe(it(Xe), ae, ve);
            } catch {
            }
          }
        }
      return "";
    }
    var De = Object.prototype.hasOwnProperty, Ce = {}, Ee = b.ReactDebugCurrentFrame;
    function oe(_) {
      if (_) {
        var ae = _._owner, ve = pe(_.type, _._source, ae ? ae.type : null);
        Ee.setExtraStackFrame(ve);
      } else
        Ee.setExtraStackFrame(null);
    }
    function ue(_, ae, ve, Ie, Xe) {
      {
        var it = Function.call.bind(De);
        for (var Ue in _)
          if (it(_, Ue)) {
            var He = void 0;
            try {
              if (typeof _[Ue] != "function") {
                var Ot = Error((Ie || "React class") + ": " + ve + " type `" + Ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[Ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ot.name = "Invariant Violation", Ot;
              }
              He = _[Ue](ae, Ue, Ie, ve, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Dt) {
              He = Dt;
            }
            He && !(He instanceof Error) && (oe(Xe), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ie || "React class", ve, Ue, typeof He), oe(null)), He instanceof Error && !(He.message in Ce) && (Ce[He.message] = !0, oe(Xe), E("Failed %s type: %s", ve, He.message), oe(null));
          }
      }
    }
    var ge = Array.isArray;
    function be(_) {
      return ge(_);
    }
    function ye(_) {
      {
        var ae = typeof Symbol == "function" && Symbol.toStringTag, ve = ae && _[Symbol.toStringTag] || _.constructor.name || "Object";
        return ve;
      }
    }
    function Ne(_) {
      try {
        return $e(_), !1;
      } catch {
        return !0;
      }
    }
    function $e(_) {
      return "" + _;
    }
    function je(_) {
      if (Ne(_))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ye(_)), $e(_);
    }
    var yt = b.ReactCurrentOwner, Le = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, ze, Ve;
    Ve = {};
    function kt(_) {
      if (De.call(_, "ref")) {
        var ae = Object.getOwnPropertyDescriptor(_, "ref").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return _.ref !== void 0;
    }
    function tt(_) {
      if (De.call(_, "key")) {
        var ae = Object.getOwnPropertyDescriptor(_, "key").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return _.key !== void 0;
    }
    function Bt(_, ae) {
      if (typeof _.ref == "string" && yt.current && ae && yt.current.stateNode !== ae) {
        var ve = $(yt.current.type);
        Ve[ve] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(yt.current.type), _.ref), Ve[ve] = !0);
      }
    }
    function ht(_, ae) {
      {
        var ve = function() {
          we || (we = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        ve.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: ve,
          configurable: !0
        });
      }
    }
    function Qe(_, ae) {
      {
        var ve = function() {
          ze || (ze = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        ve.isReactWarning = !0, Object.defineProperty(_, "ref", {
          get: ve,
          configurable: !0
        });
      }
    }
    var st = function(_, ae, ve, Ie, Xe, it, Ue) {
      var He = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: _,
        key: ae,
        ref: ve,
        props: Ue,
        // Record the component responsible for creating this element.
        _owner: it
      };
      return He._store = {}, Object.defineProperty(He._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(He, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ie
      }), Object.defineProperty(He, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Xe
      }), Object.freeze && (Object.freeze(He.props), Object.freeze(He)), He;
    };
    function Wt(_, ae, ve, Ie, Xe) {
      {
        var it, Ue = {}, He = null, Ot = null;
        ve !== void 0 && (je(ve), He = "" + ve), tt(ae) && (je(ae.key), He = "" + ae.key), kt(ae) && (Ot = ae.ref, Bt(ae, Xe));
        for (it in ae)
          De.call(ae, it) && !Le.hasOwnProperty(it) && (Ue[it] = ae[it]);
        if (_ && _.defaultProps) {
          var Dt = _.defaultProps;
          for (it in Dt)
            Ue[it] === void 0 && (Ue[it] = Dt[it]);
        }
        if (He || Ot) {
          var Ye = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          He && ht(Ue, Ye), Ot && Qe(Ue, Ye);
        }
        return st(_, He, Ot, Xe, Ie, yt.current, Ue);
      }
    }
    var wt = b.ReactCurrentOwner, fe = b.ReactDebugCurrentFrame;
    function Fe(_) {
      if (_) {
        var ae = _._owner, ve = pe(_.type, _._source, ae ? ae.type : null);
        fe.setExtraStackFrame(ve);
      } else
        fe.setExtraStackFrame(null);
    }
    var ke;
    ke = !1;
    function rt(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function Je() {
      {
        if (wt.current) {
          var _ = $(wt.current.type);
          if (_)
            return `

Check the render method of \`` + _ + "`.";
        }
        return "";
      }
    }
    function Pe(_) {
      {
        if (_ !== void 0) {
          var ae = _.fileName.replace(/^.*[\\\/]/, ""), ve = _.lineNumber;
          return `

Check your code at ` + ae + ":" + ve + ".";
        }
        return "";
      }
    }
    var Ze = {};
    function xe(_) {
      {
        var ae = Je();
        if (!ae) {
          var ve = typeof _ == "string" ? _ : _.displayName || _.name;
          ve && (ae = `

Check the top-level render call using <` + ve + ">.");
        }
        return ae;
      }
    }
    function Te(_, ae) {
      {
        if (!_._store || _._store.validated || _.key != null)
          return;
        _._store.validated = !0;
        var ve = xe(ae);
        if (Ze[ve])
          return;
        Ze[ve] = !0;
        var Ie = "";
        _ && _._owner && _._owner !== wt.current && (Ie = " It was passed a child from " + $(_._owner.type) + "."), Fe(_), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ve, Ie), Fe(null);
      }
    }
    function ut(_, ae) {
      {
        if (typeof _ != "object")
          return;
        if (be(_))
          for (var ve = 0; ve < _.length; ve++) {
            var Ie = _[ve];
            rt(Ie) && Te(Ie, ae);
          }
        else if (rt(_))
          _._store && (_._store.validated = !0);
        else if (_) {
          var Xe = m(_);
          if (typeof Xe == "function" && Xe !== _.entries)
            for (var it = Xe.call(_), Ue; !(Ue = it.next()).done; )
              rt(Ue.value) && Te(Ue.value, ae);
        }
      }
    }
    function Mt(_) {
      {
        var ae = _.type;
        if (ae == null || typeof ae == "string")
          return;
        var ve;
        if (typeof ae == "function")
          ve = ae.propTypes;
        else if (typeof ae == "object" && (ae.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ae.$$typeof === d))
          ve = ae.propTypes;
        else
          return;
        if (ve) {
          var Ie = $(ae);
          ue(ve, _.props, "prop", Ie, _);
        } else if (ae.PropTypes !== void 0 && !ke) {
          ke = !0;
          var Xe = $(ae);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Xe || "Unknown");
        }
        typeof ae.getDefaultProps == "function" && !ae.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Kt(_) {
      {
        for (var ae = Object.keys(_.props), ve = 0; ve < ae.length; ve++) {
          var Ie = ae[ve];
          if (Ie !== "children" && Ie !== "key") {
            Fe(_), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ie), Fe(null);
            break;
          }
        }
        _.ref !== null && (Fe(_), E("Invalid attribute `ref` supplied to `React.Fragment`."), Fe(null));
      }
    }
    function Nt(_, ae, ve, Ie, Xe, it) {
      {
        var Ue = B(_);
        if (!Ue) {
          var He = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (He += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ot = Pe(Xe);
          Ot ? He += Ot : He += Je();
          var Dt;
          _ === null ? Dt = "null" : be(_) ? Dt = "array" : _ !== void 0 && _.$$typeof === t ? (Dt = "<" + ($(_.type) || "Unknown") + " />", He = " Did you accidentally export a JSX literal instead of a component?") : Dt = typeof _, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Dt, He);
        }
        var Ye = Wt(_, ae, ve, Xe, it);
        if (Ye == null)
          return Ye;
        if (Ue) {
          var qt = ae.children;
          if (qt !== void 0)
            if (Ie)
              if (be(qt)) {
                for (var Ir = 0; Ir < qt.length; Ir++)
                  ut(qt[Ir], _);
                Object.freeze && Object.freeze(qt);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ut(qt, _);
        }
        return _ === n ? Kt(Ye) : Mt(Ye), Ye;
      }
    }
    function an(_, ae, ve) {
      return Nt(_, ae, ve, !0);
    }
    function on(_, ae, ve) {
      return Nt(_, ae, ve, !1);
    }
    var Sr = on, br = an;
    Mo.Fragment = n, Mo.jsx = Sr, Mo.jsxs = br;
  }()), Mo;
}
process.env.NODE_ENV === "production" ? Fl.exports = BD() : Fl.exports = $D();
var Be = Fl.exports, FD = {
  /**
   * Check if a value is a `History` object.
   */
  isHistory(e) {
    return rr(e) && Array.isArray(e.redos) && Array.isArray(e.undos) && (e.redos.length === 0 || Kn.isOperationList(e.redos[0].operations)) && (e.undos.length === 0 || Kn.isOperationList(e.undos[0].operations));
  }
}, Nu = /* @__PURE__ */ new WeakMap(), Iu = /* @__PURE__ */ new WeakMap(), ma = {
  /**
   * Check if a value is a `HistoryEditor` object.
   */
  isHistoryEditor(e) {
    return FD.isHistory(e.history) && C.isEditor(e);
  },
  /**
   * Get the merge flag's current value.
   */
  isMerging(e) {
    return Iu.get(e);
  },
  /**
   * Get the saving flag's current value.
   */
  isSaving(e) {
    return Nu.get(e);
  },
  /**
   * Redo to the previous saved state.
   */
  redo(e) {
    e.redo();
  },
  /**
   * Undo to the previous saved state.
   */
  undo(e) {
    e.undo();
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, without merging any of
   * the new operations into previous save point in the history.
   */
  withoutMerging(e, t) {
    var r = ma.isMerging(e);
    Iu.set(e, !1), t(), Iu.set(e, r);
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, without saving any of
   * their operations into the history.
   */
  withoutSaving(e, t) {
    var r = ma.isSaving(e);
    Nu.set(e, !1), t(), Nu.set(e, r);
  }
}, PD = (e) => {
  var t = e, {
    apply: r
  } = t;
  return t.history = {
    undos: [],
    redos: []
  }, t.redo = () => {
    var {
      history: n
    } = t, {
      redos: a
    } = n;
    if (a.length > 0) {
      var o = a[a.length - 1];
      o.selectionBefore && ee.setSelection(t, o.selectionBefore), ma.withoutSaving(t, () => {
        C.withoutNormalizing(t, () => {
          for (var i of o.operations)
            t.apply(i);
        });
      }), n.redos.pop(), t.writeHistory("undos", o);
    }
  }, t.undo = () => {
    var {
      history: n
    } = t, {
      undos: a
    } = n;
    if (a.length > 0) {
      var o = a[a.length - 1];
      ma.withoutSaving(t, () => {
        C.withoutNormalizing(t, () => {
          var i = o.operations.map(Kn.inverse).reverse();
          for (var s of i)
            t.apply(s);
          o.selectionBefore && ee.setSelection(t, o.selectionBefore);
        });
      }), t.writeHistory("redos", o), n.undos.pop();
    }
  }, t.apply = (n) => {
    var {
      operations: a,
      history: o
    } = t, {
      undos: i
    } = o, s = i[i.length - 1], u = s && s.operations[s.operations.length - 1], l = ma.isSaving(t), c = ma.isMerging(t);
    if (l == null && (l = TD(n)), l) {
      if (c == null && (s == null ? c = !1 : a.length !== 0 ? c = !0 : c = RD(n, u)), s && c)
        s.operations.push(n);
      else {
        var d = {
          operations: [n],
          selectionBefore: t.selection
        };
        t.writeHistory("undos", d);
      }
      for (; i.length > 100; )
        i.shift();
      o.redos = [];
    }
    r(n);
  }, t.writeHistory = (n, a) => {
    t.history[n].push(a);
  }, t;
}, RD = (e, t) => !!(t && e.type === "insert_text" && t.type === "insert_text" && e.offset === t.offset + t.text.length && L.equals(e.path, t.path) || t && e.type === "remove_text" && t.type === "remove_text" && e.offset + e.text.length === t.offset && L.equals(e.path, t.path)), TD = (e, t) => e.type !== "set_selection", nt = /* @__PURE__ */ ((e) => (e.Paragraph = "paragraph", e.Heading = "heading", e.Bold = "bold", e.Code = "code", e.CheckList = "check-list", e.OrderedList = "ordered-list", e))(nt || {}), Xn = /* @__PURE__ */ ((e) => (e.Start = "start", e.Center = "center", e.End = "end", e))(Xn || {}), Za = /* @__PURE__ */ ((e) => (e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e))(Za || {});
function to() {
  return [
    {
      type: nt.Paragraph,
      children: [{ text: "" }]
    }
  ];
}
function ND(e, t) {
  const { selection: r } = e, [n] = J.findPath(e, t), [a] = C.nodes(e, {
    match: (o) => le.isElement(o) && C.isBlock(e, o)
  });
  if (a[0] !== t) {
    const o = r ? r.focus.offset : 0;
    ee.select(e, {
      focus: {
        offset: o,
        path: [n, 0]
      },
      anchor: {
        offset: o,
        path: [n, 0]
      }
    });
  }
  J.blur(e), J.focus(e);
}
function rh(e) {
  return {
    ...e,
    ...{
      textAlign: void 0,
      heading: void 0
    }
  };
}
const nh = (e, t, r) => {
  const n = C.node(e, r), a = C.next(e, {
    at: n[1],
    match: (o) => le.isElement(o) && o.type === nt.OrderedList
  });
  if (a) {
    const o = t + 1;
    ee.setNodes(
      e,
      {
        index: o
      },
      {
        at: a[1]
      }
    ), nh(e, o, a[1]);
  }
};
function ah(e) {
  const { selection: t } = e;
  return !!(t && X.isCollapsed(t));
}
const Er = Symbol.for("@ts-pattern/matcher"), oh = Symbol.for("@ts-pattern/isVariadic"), xs = "@ts-pattern/anonymous-select-key", Pl = (e) => !!(e && typeof e == "object"), ls = (e) => e && !!e[Er], nr = (e, t, r) => {
  if (ls(e)) {
    const n = e[Er](), { matched: a, selections: o } = n.match(t);
    return a && o && Object.keys(o).forEach((i) => r(i, o[i])), a;
  }
  if (Pl(e)) {
    if (!Pl(t))
      return !1;
    if (Array.isArray(e)) {
      if (!Array.isArray(t))
        return !1;
      let n = [], a = [], o = [];
      for (const i of e.keys()) {
        const s = e[i];
        ls(s) && s[oh] ? o.push(s) : o.length ? a.push(s) : n.push(s);
      }
      if (o.length) {
        if (o.length > 1)
          throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
        if (t.length < n.length + a.length)
          return !1;
        const i = t.slice(0, n.length), s = a.length === 0 ? [] : t.slice(-a.length), u = t.slice(n.length, a.length === 0 ? 1 / 0 : -a.length);
        return n.every((l, c) => nr(l, i[c], r)) && a.every((l, c) => nr(l, s[c], r)) && (o.length === 0 || nr(o[0], u, r));
      }
      return e.length === t.length && e.every((i, s) => nr(i, t[s], r));
    }
    return Object.keys(e).every((n) => {
      const a = e[n];
      return (n in t || ls(o = a) && o[Er]().matcherType === "optional") && nr(a, t[n], r);
      var o;
    });
  }
  return Object.is(t, e);
}, $r = (e) => {
  var t, r, n;
  return Pl(e) ? ls(e) ? (t = (r = (n = e[Er]()).getSelectionKeys) == null ? void 0 : r.call(n)) != null ? t : [] : Array.isArray(e) ? li(e, $r) : li(Object.values(e), $r) : [];
}, li = (e, t) => e.reduce((r, n) => r.concat(t(n)), []);
function ID(...e) {
  if (e.length === 1) {
    const [t] = e;
    return (r) => nr(t, r, () => {
    });
  }
  if (e.length === 2) {
    const [t, r] = e;
    return nr(t, r, () => {
    });
  }
  throw new Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${e.length}.`);
}
function ar(e) {
  return Object.assign(e, { optional: () => Yc(e), and: (t) => Tt(e, t), or: (t) => ih(e, t), select: (t) => t === void 0 ? ci(e) : ci(t, e) });
}
function Rl(e) {
  return Object.assign(((t) => Object.assign(t, { [Symbol.iterator]() {
    let r = 0;
    const n = [{ value: Object.assign(t, { [oh]: !0 }), done: !1 }, { done: !0, value: void 0 }];
    return { next: () => {
      var a;
      return (a = n[r++]) != null ? a : n.at(-1);
    } };
  } }))(e), { optional: () => Rl(Yc(e)), select: (t) => Rl(t === void 0 ? ci(e) : ci(t, e)) });
}
function Yc(e) {
  return ar({ [Er]: () => ({ match: (t) => {
    let r = {};
    const n = (a, o) => {
      r[a] = o;
    };
    return t === void 0 ? ($r(e).forEach((a) => n(a, void 0)), { matched: !0, selections: r }) : { matched: nr(e, t, n), selections: r };
  }, getSelectionKeys: () => $r(e), matcherType: "optional" }) });
}
const MD = (e, t) => {
  for (const r of e)
    if (!t(r))
      return !1;
  return !0;
}, _D = (e, t) => {
  for (const [r, n] of e.entries())
    if (!t(n, r))
      return !1;
  return !0;
};
function Tt(...e) {
  return ar({ [Er]: () => ({ match: (t) => {
    let r = {};
    const n = (a, o) => {
      r[a] = o;
    };
    return { matched: e.every((a) => nr(a, t, n)), selections: r };
  }, getSelectionKeys: () => li(e, $r), matcherType: "and" }) });
}
function ih(...e) {
  return ar({ [Er]: () => ({ match: (t) => {
    let r = {};
    const n = (a, o) => {
      r[a] = o;
    };
    return li(e, $r).forEach((a) => n(a, void 0)), { matched: e.some((a) => nr(a, t, n)), selections: r };
  }, getSelectionKeys: () => li(e, $r), matcherType: "or" }) });
}
function dt(e) {
  return { [Er]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function ci(...e) {
  const t = typeof e[0] == "string" ? e[0] : void 0, r = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
  return ar({ [Er]: () => ({ match: (n) => {
    let a = { [t ?? xs]: n };
    return { matched: r === void 0 || nr(r, n, (o, i) => {
      a[o] = i;
    }), selections: a };
  }, getSelectionKeys: () => [t ?? xs].concat(r === void 0 ? [] : $r(r)) }) });
}
function fn(e) {
  return typeof e == "number";
}
function la(e) {
  return typeof e == "string";
}
function zn(e) {
  return typeof e == "bigint";
}
const sh = ar(dt(function(e) {
  return !0;
})), jD = sh, ca = (e) => Object.assign(ar(e), { startsWith: (t) => {
  return ca(Tt(e, (r = t, dt((n) => la(n) && n.startsWith(r)))));
  var r;
}, endsWith: (t) => {
  return ca(Tt(e, (r = t, dt((n) => la(n) && n.endsWith(r)))));
  var r;
}, minLength: (t) => ca(Tt(e, ((r) => dt((n) => la(n) && n.length >= r))(t))), maxLength: (t) => ca(Tt(e, ((r) => dt((n) => la(n) && n.length <= r))(t))), includes: (t) => {
  return ca(Tt(e, (r = t, dt((n) => la(n) && n.includes(r)))));
  var r;
}, regex: (t) => {
  return ca(Tt(e, (r = t, dt((n) => la(n) && !!n.match(r)))));
  var r;
} }), LD = ca(dt(la)), dn = (e) => Object.assign(ar(e), { between: (t, r) => dn(Tt(e, ((n, a) => dt((o) => fn(o) && n <= o && a >= o))(t, r))), lt: (t) => dn(Tt(e, ((r) => dt((n) => fn(n) && n < r))(t))), gt: (t) => dn(Tt(e, ((r) => dt((n) => fn(n) && n > r))(t))), lte: (t) => dn(Tt(e, ((r) => dt((n) => fn(n) && n <= r))(t))), gte: (t) => dn(Tt(e, ((r) => dt((n) => fn(n) && n >= r))(t))), int: () => dn(Tt(e, dt((t) => fn(t) && Number.isInteger(t)))), finite: () => dn(Tt(e, dt((t) => fn(t) && Number.isFinite(t)))), positive: () => dn(Tt(e, dt((t) => fn(t) && t > 0))), negative: () => dn(Tt(e, dt((t) => fn(t) && t < 0))) }), kD = dn(dt(fn)), Vn = (e) => Object.assign(ar(e), { between: (t, r) => Vn(Tt(e, ((n, a) => dt((o) => zn(o) && n <= o && a >= o))(t, r))), lt: (t) => Vn(Tt(e, ((r) => dt((n) => zn(n) && n < r))(t))), gt: (t) => Vn(Tt(e, ((r) => dt((n) => zn(n) && n > r))(t))), lte: (t) => Vn(Tt(e, ((r) => dt((n) => zn(n) && n <= r))(t))), gte: (t) => Vn(Tt(e, ((r) => dt((n) => zn(n) && n >= r))(t))), positive: () => Vn(Tt(e, dt((t) => zn(t) && t > 0))), negative: () => Vn(Tt(e, dt((t) => zn(t) && t < 0))) }), zD = Vn(dt(zn)), VD = ar(dt(function(e) {
  return typeof e == "boolean";
})), HD = ar(dt(function(e) {
  return typeof e == "symbol";
})), WD = ar(dt(function(e) {
  return e == null;
})), KD = ar(dt(function(e) {
  return e != null;
}));
var iv = { __proto__: null, matcher: Er, optional: Yc, array: function(...e) {
  return Rl({ [Er]: () => ({ match: (t) => {
    if (!Array.isArray(t))
      return { matched: !1 };
    if (e.length === 0)
      return { matched: !0 };
    const r = e[0];
    let n = {};
    if (t.length === 0)
      return $r(r).forEach((o) => {
        n[o] = [];
      }), { matched: !0, selections: n };
    const a = (o, i) => {
      n[o] = (n[o] || []).concat([i]);
    };
    return { matched: t.every((o) => nr(r, o, a)), selections: n };
  }, getSelectionKeys: () => e.length === 0 ? [] : $r(e[0]) }) });
}, set: function(...e) {
  return ar({ [Er]: () => ({ match: (t) => {
    if (!(t instanceof Set))
      return { matched: !1 };
    let r = {};
    if (t.size === 0)
      return { matched: !0, selections: r };
    if (e.length === 0)
      return { matched: !0 };
    const n = (o, i) => {
      r[o] = (r[o] || []).concat([i]);
    }, a = e[0];
    return { matched: MD(t, (o) => nr(a, o, n)), selections: r };
  }, getSelectionKeys: () => e.length === 0 ? [] : $r(e[0]) }) });
}, map: function(...e) {
  return ar({ [Er]: () => ({ match: (t) => {
    if (!(t instanceof Map))
      return { matched: !1 };
    let r = {};
    if (t.size === 0)
      return { matched: !0, selections: r };
    const n = (s, u) => {
      r[s] = (r[s] || []).concat([u]);
    };
    if (e.length === 0)
      return { matched: !0 };
    var a;
    if (e.length === 1)
      throw new Error(`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${(a = e[0]) == null ? void 0 : a.toString()}`);
    const [o, i] = e;
    return { matched: _D(t, (s, u) => {
      const l = nr(o, u, n), c = nr(i, s, n);
      return l && c;
    }), selections: r };
  }, getSelectionKeys: () => e.length === 0 ? [] : [...$r(e[0]), ...$r(e[1])] }) });
}, intersection: Tt, union: ih, not: function(e) {
  return ar({ [Er]: () => ({ match: (t) => ({ matched: !nr(e, t, () => {
  }) }), getSelectionKeys: () => [], matcherType: "not" }) });
}, when: dt, select: ci, any: sh, _: jD, string: LD, number: kD, bigint: zD, boolean: VD, symbol: HD, nullish: WD, nonNullable: KD, instanceOf: function(e) {
  return ar(dt(/* @__PURE__ */ function(t) {
    return (r) => r instanceof t;
  }(e)));
}, shape: function(e) {
  return ar(dt(ID(e)));
} };
const Tl = { matched: !1, value: void 0 };
function $t(e) {
  return new Os(e, Tl);
}
class Os {
  constructor(t, r) {
    this.input = void 0, this.state = void 0, this.input = t, this.state = r;
  }
  with(...t) {
    if (this.state.matched)
      return this;
    const r = t[t.length - 1], n = [t[0]];
    let a;
    t.length === 3 && typeof t[1] == "function" ? a = t[1] : t.length > 2 && n.push(...t.slice(1, t.length - 1));
    let o = !1, i = {};
    const s = (l, c) => {
      o = !0, i[l] = c;
    }, u = !n.some((l) => nr(l, this.input, s)) || a && !a(this.input) ? Tl : { matched: !0, value: r(o ? xs in i ? i[xs] : i : this.input, this.input) };
    return new Os(this.input, u);
  }
  when(t, r) {
    if (this.state.matched)
      return this;
    const n = !!t(this.input);
    return new Os(this.input, n ? { matched: !0, value: r(this.input, this.input) } : Tl);
  }
  otherwise(t) {
    return this.state.matched ? this.state.value : t(this.input);
  }
  exhaustive() {
    if (this.state.matched)
      return this.state.value;
    let t;
    try {
      t = JSON.stringify(this.input);
    } catch {
      t = this.input;
    }
    throw new Error(`Pattern matching error: no pattern matches value ${t}`);
  }
  run() {
    return this.exhaustive();
  }
  returnType() {
    return this;
  }
}
const at = {
  selectAllInModule(e) {
    const { selection: t } = e;
    if (!t)
      throw Error("selection is undefined");
    const [r, n] = C.edges(e, t);
    if (r.path[0] === n.path[0]) {
      const [a] = C.nodes(e, {
        match: (o) => le.isElement(o)
      });
      return ee.select(e, {
        anchor: C.start(e, a[1]),
        focus: C.end(e, a[1])
      }), !0;
    }
  },
  //加粗
  isBoldMarkActive(e) {
    const t = C.marks(e);
    return $t(t).with({ bold: !0 }, () => !0).otherwise(() => !1);
  },
  toggleBoldMark(e) {
    const t = at.isBoldMarkActive(e);
    $t(t).with(!0, () => {
      C.removeMark(e, "bold");
    }).otherwise(() => {
      C.addMark(e, "bold", !0);
    });
  },
  //斜体
  isItalicMarkActive(e) {
    const t = C.marks(e);
    return $t(t).with({ italic: !0 }, () => !0).otherwise(() => !1);
  },
  toggleItalicMark(e) {
    const t = at.isItalicMarkActive(e);
    $t(t).with(!0, () => {
      C.removeMark(e, "italic");
    }).otherwise(() => {
      C.addMark(e, "italic", !0);
    });
  },
  //下划线
  isUnderlineMarkActive(e) {
    const t = C.marks(e);
    return $t(t).with({ underline: !0 }, () => !0).otherwise(() => !1);
  },
  toggleUnderlineMark(e) {
    const t = at.isUnderlineMarkActive(e);
    $t(t).with(!0, () => {
      C.removeMark(e, "underline");
    }).otherwise(() => {
      C.addMark(e, "underline", !0);
    });
  },
  //文本位置
  isTextAlignMarkActive(e) {
    const { selection: t } = e;
    if (!t)
      return !1;
    const [r] = C.nodes(e, {
      at: t,
      match: (n) => le.isElement(n) && C.isBlock(e, n)
    });
    return $t(r[0]).with({ textAlign: iv.not(void 0) }, (n) => n.textAlign).otherwise(() => !1);
  },
  toggleTextAlignMark(e, t) {
    $t(t).with(void 0, () => {
      at.isTextAlignMarkActive(e) && ee.setNodes(
        e,
        { textAlign: void 0 },
        { match: (n) => le.isElement(n) && C.isBlock(e, n) }
      );
    }).otherwise((r) => {
      ee.setNodes(
        e,
        { textAlign: r },
        { match: (n) => le.isElement(n) && C.isBlock(e, n) }
      );
    });
  },
  //文本的heading
  isTextHeadingMarkActive(e) {
    const { selection: t } = e;
    if (!t)
      return !1;
    const [r] = C.nodes(e, {
      at: t,
      match: (n) => le.isElement(n) && C.isBlock(e, n)
    });
    return $t(r[0]).with({ heading: iv.not(void 0) }, (n) => n.heading).otherwise(() => !1);
  },
  toggleTextHeadingMark(e, t) {
    $t(t).with(void 0, () => {
      at.isTextHeadingMarkActive(e) && ee.setNodes(
        e,
        { heading: void 0 },
        { match: (n) => le.isElement(n) && C.isBlock(e, n) }
      );
    }).otherwise((r) => {
      ee.setNodes(
        e,
        { heading: t },
        { match: (n) => le.isElement(n) && C.isBlock(e, n) }
      );
    });
  },
  //任务
  isCheckListNode(e) {
    const [t] = C.nodes(e, {
      match: (r) => r.type === nt.CheckList
    });
    return !!t;
  },
  toggleCheckListNode(e) {
    const t = at.isCheckListNode(e);
    let r = !1, n = !1;
    $t(t).with(!0, () => {
      ee.setNodes(
        e,
        { type: nt.Paragraph },
        { match: (a) => le.isElement(a) && C.isBlock(e, a) }
      );
    }).with(!1, () => {
      const { selection: a } = e;
      if (!a)
        throw Error("selection is undefined");
      const o = C.start(e, a), [, i] = C.node(e, o), s = C.end(e, a), [, u] = C.node(e, s), l = C.previous(e, {
        at: i,
        match: (d) => le.isElement(d)
      });
      if ((!l || l && l[1][0] === 0) && i[0] === 0 && (r = !0), C.next(e, {
        at: u,
        match: (d) => le.isElement(d)
      }) || (n = !0), !n && !r)
        ee.setNodes(
          e,
          { type: nt.CheckList },
          { match: (d) => le.isElement(d) && C.isBlock(e, d) }
        );
      else if (ee.setNodes(
        e,
        { type: nt.CheckList },
        { match: (d) => le.isElement(d) && C.isBlock(e, d) }
      ), r && ee.insertNodes(e, to(), {
        at: [i[0]]
      }), n) {
        let d = 1;
        r && (d = 2), ee.insertNodes(e, to(), {
          at: [u[0] + d]
        });
      }
    });
  },
  //有序列表
  isOrderedListNode(e) {
    const [t] = C.nodes(e, {
      match: (r) => r.type === nt.OrderedList
    });
    return !!t;
  },
  toggleOrderedListNode(e) {
    const t = at.isOrderedListNode(e);
    let r = !1, n = !1;
    $t(t).with(!0, () => {
      ee.setNodes(
        e,
        { type: nt.Paragraph },
        { match: (a) => le.isElement(a) && C.isBlock(e, a) }
      );
    }).with(!1, () => {
      const { selection: a } = e;
      if (!a)
        throw Error("selection is undefined");
      const o = C.start(e, a), [, i] = C.node(e, o), s = C.end(e, a), [, u] = C.node(e, s), l = C.previous(e, {
        at: i,
        match: (d) => le.isElement(d)
      });
      if ((!l || l && l[1][0] === 0) && i[0] === 0 && (r = !0), C.next(e, {
        at: u,
        match: (d) => le.isElement(d)
      }) || (n = !0), console.log(1, n), console.log(2, r), console.log(3, !n && !r), !n && !r) {
        const d = C.previous(e, {
          match: (p) => le.isElement(p) && p.type === nt.OrderedList
        });
        console.log("preNodeEntry:", d);
        let v = 1;
        d && (v = d[0].index + 1), ee.setNodes(
          e,
          { type: nt.OrderedList, index: v },
          { match: (p) => le.isElement(p) && C.isBlock(e, p) }
        );
      } else {
        let d = 1;
        if (console.log("previousNode:", l), r && l && l[0].type === nt.OrderedList) {
          const v = l[0].index;
          d = v + 1, console.info("前面也是order-list：", v);
        }
        if (ee.setNodes(
          e,
          { type: nt.OrderedList, index: d },
          { match: (v) => le.isElement(v) && C.isBlock(e, v) }
        ), r && ee.insertNodes(e, to(), {
          at: [i[0]]
        }), n) {
          let v = 1;
          r && (v = 2), ee.insertNodes(e, to(), {
            at: [u[0] + v]
          });
        }
      }
    });
  },
  indent(e) {
    ee.insertText(e, " ".repeat(8));
  },
  restoreNormal(e) {
    const t = ["bold", "italic", "underline"];
    for (let r = 0; r < t.length; r++)
      C.removeMark(e, t[r]);
  },
  isParagraphNode(e) {
    const [t] = C.nodes(e, {
      match: (r) => r.type === nt.Paragraph
    });
    return !!t;
  },
  isOrderedNode(e) {
    const [t] = C.nodes(e, {
      match: (r) => r.type === nt.OrderedList
    });
    return !!t;
  },
  toggleOrderedNode(e) {
    const [t] = C.nodes(e, {
      match: (r) => r.type === nt.OrderedList
    });
    return !!t;
  }
};
var Wo = /* @__PURE__ */ ((e) => (e.Bold = "b", e.Italic = "i", e.Underline = "u", e.Restore = "r", e.Tab = "Tab", e))(Wo || {});
const qD = (e) => {
  const { deleteBackward: t, insertBreak: r } = e;
  return e.deleteBackward = (...n) => {
    const { selection: a } = e;
    if (a && ah(e)) {
      const [o] = C.nodes(e, {
        match: (i) => !C.isEditor(i) && le.isElement(i) && i.type === nt.CheckList
      });
      if (o) {
        const [, i] = o, s = C.start(e, i);
        if (Ge.equals(a.anchor, s)) {
          const u = {
            type: nt.Paragraph
          };
          ee.setNodes(e, u, {
            match: (l) => !C.isEditor(l) && le.isElement(l) && l.type === nt.CheckList
          });
          return;
        }
      }
    }
    t(...n);
  }, e.insertBreak = () => {
    const [n] = C.nodes(e, {
      match: (a) => !C.isEditor(a) && le.isElement(a) && a.type === nt.CheckList
    });
    if (n) {
      const [, a] = n;
      if (!C.string(e, a)) {
        const i = rh({
          type: nt.Paragraph
        });
        at.restoreNormal(e), ee.setNodes(e, i, {
          match: (s) => !C.isEditor(s) && le.isElement(s) && s.type === nt.CheckList
        });
        return;
      }
    }
    r();
  }, e;
}, UD = (e) => {
  const { deleteBackward: t, insertBreak: r } = e;
  return e.deleteBackward = (...n) => {
    const { selection: a } = e;
    if (a && ah(e)) {
      const [o] = C.nodes(e, {
        match: (i) => !C.isEditor(i) && le.isElement(i) && i.type === nt.OrderedList
      });
      if (o) {
        const [, i] = o, s = C.start(e, i);
        if (Ge.equals(a.anchor, s)) {
          const u = {
            type: nt.Paragraph
          };
          ee.setNodes(e, u, {
            match: (l) => !C.isEditor(l) && le.isElement(l) && l.type === nt.OrderedList
          });
          return;
        }
      }
    }
    t(...n);
  }, e.insertBreak = () => {
    const [n] = C.nodes(e, {
      match: (a) => !C.isEditor(a) && le.isElement(a) && a.type === nt.OrderedList
    });
    if (n) {
      const [, a] = n, o = C.string(e, a);
      return $t(o).with("", () => {
        const i = rh({
          type: nt.Paragraph
        });
        at.restoreNormal(e), ee.setNodes(e, i, {
          match: (s) => !C.isEditor(s) && le.isElement(s) && s.type === nt.OrderedList
        });
      }).otherwise(() => {
        r();
        let i = 1;
        const { selection: s } = e;
        if (!s)
          throw Error("selection is undefined");
        const u = C.node(e, s), l = C.previous(e, {
          at: u[1],
          match: (v) => le.isElement(v) && v.type === nt.OrderedList
        });
        l && (i = l[0].index + 1), ee.setNodes(
          e,
          {
            index: i
          },
          {
            match: (v) => !C.isEditor(v) && le.isElement(v) && v.type === nt.OrderedList
          }
        );
        const { selection: c } = e;
        if (!c)
          throw Error("selection is undefined");
        const d = C.node(e, c);
        nh(e, i, d[1]);
      });
    }
    r();
  }, e;
}, GD = (e) => {
  const { insertBreak: t } = e;
  return e.insertBreak = () => {
    const [r] = C.nodes(e, {
      match: (n) => !C.isEditor(n) && le.isElement(n) && n.heading !== void 0 && n.type === nt.Paragraph
    });
    if (r) {
      const n = {
        type: nt.Paragraph,
        children: [{ text: "" }]
      };
      ee.insertNodes(e, n);
      return;
    }
    t();
  }, e;
}, XD = () => {
  const [e, t] = Gt(!0);
  return [Xt(
    () => GD(UD(qD(AD(PD(y1()))))),
    []
  ), { showPlaceholder: e, handlePlaceholder: (a) => {
    a.length === 1 && JSON.stringify(a) === JSON.stringify(to()) ? t(!0) : t(!1);
  } }];
};
var uh = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var o = "", i = 0; i < arguments.length; i++) {
        var s = arguments[i];
        s && (o = a(o, n(s)));
      }
      return o;
    }
    function n(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return r.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var i = "";
      for (var s in o)
        t.call(o, s) && o[s] && (i = a(i, s));
      return i;
    }
    function a(o, i) {
      return i ? o ? o + " " + i : o + i : o;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(uh);
var YD = uh.exports;
const ne = /* @__PURE__ */ wo(YD);
function _e() {
  return _e = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _e.apply(this, arguments);
}
var Nl = { exports: {} }, gt = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sv;
function ZD() {
  if (sv)
    return gt;
  sv = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function f(m) {
    if (typeof m == "object" && m !== null) {
      var b = m.$$typeof;
      switch (b) {
        case e:
          switch (m = m.type, m) {
            case r:
            case a:
            case n:
            case l:
            case c:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case i:
                case u:
                case v:
                case d:
                case o:
                  return m;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return gt.ContextConsumer = i, gt.ContextProvider = o, gt.Element = e, gt.ForwardRef = u, gt.Fragment = r, gt.Lazy = v, gt.Memo = d, gt.Portal = t, gt.Profiler = a, gt.StrictMode = n, gt.Suspense = l, gt.SuspenseList = c, gt.isAsyncMode = function() {
    return !1;
  }, gt.isConcurrentMode = function() {
    return !1;
  }, gt.isContextConsumer = function(m) {
    return f(m) === i;
  }, gt.isContextProvider = function(m) {
    return f(m) === o;
  }, gt.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, gt.isForwardRef = function(m) {
    return f(m) === u;
  }, gt.isFragment = function(m) {
    return f(m) === r;
  }, gt.isLazy = function(m) {
    return f(m) === v;
  }, gt.isMemo = function(m) {
    return f(m) === d;
  }, gt.isPortal = function(m) {
    return f(m) === t;
  }, gt.isProfiler = function(m) {
    return f(m) === a;
  }, gt.isStrictMode = function(m) {
    return f(m) === n;
  }, gt.isSuspense = function(m) {
    return f(m) === l;
  }, gt.isSuspenseList = function(m) {
    return f(m) === c;
  }, gt.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === a || m === n || m === l || m === c || m === p || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === d || m.$$typeof === o || m.$$typeof === i || m.$$typeof === u || m.$$typeof === h || m.getModuleId !== void 0);
  }, gt.typeOf = f, gt;
}
var mt = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uv;
function QD() {
  return uv || (uv = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h = !1, f = !1, m = !1, b = !1, E = !1, y;
    y = Symbol.for("react.module.reference");
    function w(q) {
      return !!(typeof q == "string" || typeof q == "function" || q === r || q === a || E || q === n || q === l || q === c || b || q === p || h || f || m || typeof q == "object" && q !== null && (q.$$typeof === v || q.$$typeof === d || q.$$typeof === o || q.$$typeof === i || q.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      q.$$typeof === y || q.getModuleId !== void 0));
    }
    function S(q) {
      if (typeof q == "object" && q !== null) {
        var pe = q.$$typeof;
        switch (pe) {
          case e:
            var De = q.type;
            switch (De) {
              case r:
              case a:
              case n:
              case l:
              case c:
                return De;
              default:
                var Ce = De && De.$$typeof;
                switch (Ce) {
                  case s:
                  case i:
                  case u:
                  case v:
                  case d:
                  case o:
                    return Ce;
                  default:
                    return pe;
                }
            }
          case t:
            return pe;
        }
      }
    }
    var D = i, x = o, A = e, O = u, B = r, j = v, T = d, $ = t, P = a, R = n, M = l, F = c, N = !1, V = !1;
    function k(q) {
      return N || (N = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(q) {
      return V || (V = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(q) {
      return S(q) === i;
    }
    function Q(q) {
      return S(q) === o;
    }
    function I(q) {
      return typeof q == "object" && q !== null && q.$$typeof === e;
    }
    function z(q) {
      return S(q) === u;
    }
    function H(q) {
      return S(q) === r;
    }
    function G(q) {
      return S(q) === v;
    }
    function re(q) {
      return S(q) === d;
    }
    function te(q) {
      return S(q) === t;
    }
    function de(q) {
      return S(q) === a;
    }
    function se(q) {
      return S(q) === n;
    }
    function he(q) {
      return S(q) === l;
    }
    function ce(q) {
      return S(q) === c;
    }
    mt.ContextConsumer = D, mt.ContextProvider = x, mt.Element = A, mt.ForwardRef = O, mt.Fragment = B, mt.Lazy = j, mt.Memo = T, mt.Portal = $, mt.Profiler = P, mt.StrictMode = R, mt.Suspense = M, mt.SuspenseList = F, mt.isAsyncMode = k, mt.isConcurrentMode = W, mt.isContextConsumer = U, mt.isContextProvider = Q, mt.isElement = I, mt.isForwardRef = z, mt.isFragment = H, mt.isLazy = G, mt.isMemo = re, mt.isPortal = te, mt.isProfiler = de, mt.isStrictMode = se, mt.isSuspense = he, mt.isSuspenseList = ce, mt.isValidElementType = w, mt.typeOf = S;
  }()), mt;
}
process.env.NODE_ENV === "production" ? Nl.exports = ZD() : Nl.exports = QD();
var Yo = Nl.exports;
function gn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return Z.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(gn(n)) : Yo.isFragment(n) && n.props ? r = r.concat(gn(n.props.children, t)) : r.push(n));
  }), r;
}
var Il = {}, Zc = [], JD = function(t) {
  Zc.push(t);
};
function fo(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Zc.reduce(function(n, a) {
      return a(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function eS(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Zc.reduce(function(n, a) {
      return a(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function lh() {
  Il = {};
}
function ch(e, t, r) {
  !t && !Il[r] && (e(!1, r), Il[r] = !0);
}
function bt(e, t) {
  ch(fo, e, t);
}
function tS(e, t) {
  ch(eS, e, t);
}
bt.preMessage = JD;
bt.resetWarned = lh;
bt.noteOnce = tS;
function lt(e) {
  "@babel/helpers - typeof";
  return lt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lt(e);
}
function rS(e, t) {
  if (lt(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (lt(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fh(e) {
  var t = rS(e, "string");
  return lt(t) == "symbol" ? t : String(t);
}
function K(e, t, r) {
  return t = fh(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function lv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lv(Object(r), !0).forEach(function(n) {
      K(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function As(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function cs(e) {
  return As(e) ? e : e instanceof Z.Component ? um.findDOMNode(e) : null;
}
function Ci(e, t, r) {
  var n = g.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
function Qc(e, t) {
  typeof e == "function" ? e(t) : lt(e) === "object" && e && "current" in e && (e.current = t);
}
function nn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t.filter(function(a) {
    return a;
  });
  return n.length <= 1 ? n[0] : function(a) {
    t.forEach(function(o) {
      Qc(o, a);
    });
  };
}
function Ei() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Ci(function() {
    return nn.apply(void 0, t);
  }, t, function(n, a) {
    return n.length !== a.length || n.every(function(o, i) {
      return o !== a[i];
    });
  });
}
function ra(e) {
  var t, r, n = Yo.isMemo(e) ? e.type.type : e.type;
  return !(typeof n == "function" && !((t = n.prototype) !== null && t !== void 0 && t.render) && n.$$typeof !== Yo.ForwardRef || typeof e == "function" && !((r = e.prototype) !== null && r !== void 0 && r.render) && e.$$typeof !== Yo.ForwardRef);
}
function nS(e) {
  return !/* @__PURE__ */ Ib(e) || Yo.isFragment(e) ? !1 : ra(e);
}
var Ml = /* @__PURE__ */ g.createContext(null);
function aS(e) {
  var t = e.children, r = e.onBatchResize, n = g.useRef(0), a = g.useRef([]), o = g.useContext(Ml), i = g.useCallback(function(s, u, l) {
    n.current += 1;
    var c = n.current;
    a.current.push({
      size: s,
      element: u,
      data: l
    }), Promise.resolve().then(function() {
      c === n.current && (r == null || r(a.current), a.current = []);
    }), o == null || o(s, u, l);
  }, [r, o]);
  return /* @__PURE__ */ g.createElement(Ml.Provider, {
    value: i
  }, t);
}
var dh = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, r) {
    var n = -1;
    return t.some(function(a, o) {
      return a[0] === r ? (n = o, !0) : !1;
    }), n;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(r) {
        var n = e(this.__entries__, r), a = this.__entries__[n];
        return a && a[1];
      }, t.prototype.set = function(r, n) {
        var a = e(this.__entries__, r);
        ~a ? this.__entries__[a][1] = n : this.__entries__.push([r, n]);
      }, t.prototype.delete = function(r) {
        var n = this.__entries__, a = e(n, r);
        ~a && n.splice(a, 1);
      }, t.prototype.has = function(r) {
        return !!~e(this.__entries__, r);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(r, n) {
        n === void 0 && (n = null);
        for (var a = 0, o = this.__entries__; a < o.length; a++) {
          var i = o[a];
          r.call(n, i[1], i[0]);
        }
      }, t;
    }()
  );
}(), _l = typeof window < "u" && typeof document < "u" && window.document === document, Bs = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), oS = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Bs) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), iS = 2;
function sS(e, t) {
  var r = !1, n = !1, a = 0;
  function o() {
    r && (r = !1, e()), n && s();
  }
  function i() {
    oS(o);
  }
  function s() {
    var u = Date.now();
    if (r) {
      if (u - a < iS)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(i, t);
    a = u;
  }
  return s;
}
var uS = 20, lS = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], cS = typeof MutationObserver < "u", fS = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = sS(this.refresh.bind(this), uS);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var r = this.observers_, n = r.indexOf(t);
      ~n && r.splice(n, 1), !r.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(r) {
        return r.gatherActive(), r.hasActive();
      });
      return t.forEach(function(r) {
        return r.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !_l || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), cS ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !_l || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, a = lS.some(function(o) {
        return !!~n.indexOf(o);
      });
      a && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), vh = function(e, t) {
  for (var r = 0, n = Object.keys(t); r < n.length; r++) {
    var a = n[r];
    Object.defineProperty(e, a, {
      value: t[a],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, vo = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Bs;
}, gh = Qs(0, 0, 0, 0);
function $s(e) {
  return parseFloat(e) || 0;
}
function cv(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, a) {
    var o = e["border-" + a + "-width"];
    return n + $s(o);
  }, 0);
}
function dS(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, a = t; n < a.length; n++) {
    var o = a[n], i = e["padding-" + o];
    r[o] = $s(i);
  }
  return r;
}
function vS(e) {
  var t = e.getBBox();
  return Qs(0, 0, t.width, t.height);
}
function gS(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return gh;
  var n = vo(e).getComputedStyle(e), a = dS(n), o = a.left + a.right, i = a.top + a.bottom, s = $s(n.width), u = $s(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + o) !== t && (s -= cv(n, "left", "right") + o), Math.round(u + i) !== r && (u -= cv(n, "top", "bottom") + i)), !hS(e)) {
    var l = Math.round(s + o) - t, c = Math.round(u + i) - r;
    Math.abs(l) !== 1 && (s -= l), Math.abs(c) !== 1 && (u -= c);
  }
  return Qs(a.left, a.top, s, u);
}
var mS = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof vo(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof vo(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function hS(e) {
  return e === vo(e).document.documentElement;
}
function pS(e) {
  return _l ? mS(e) ? vS(e) : gS(e) : gh;
}
function bS(e) {
  var t = e.x, r = e.y, n = e.width, a = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(o.prototype);
  return vh(i, {
    x: t,
    y: r,
    width: n,
    height: a,
    top: r,
    right: t + n,
    bottom: a + r,
    left: t
  }), i;
}
function Qs(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var yS = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Qs(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = pS(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), CS = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, r) {
      var n = bS(r);
      vh(this, { target: t, contentRect: n });
    }
    return e;
  }()
), ES = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new dh(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof vo(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new yS(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof vo(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) && (r.delete(t), r.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(r) {
        r.isActive() && t.activeObservations_.push(r);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, r = this.activeObservations_.map(function(n) {
          return new CS(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), mh = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new dh(), hh = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = fS.getInstance(), n = new ES(t, r, this);
      mh.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  hh.prototype[e] = function() {
    var t;
    return (t = mh.get(this))[e].apply(t, arguments);
  };
});
var wS = function() {
  return typeof Bs.ResizeObserver < "u" ? Bs.ResizeObserver : hh;
}(), $n = /* @__PURE__ */ new Map();
function ph(e) {
  e.forEach(function(t) {
    var r, n = t.target;
    (r = $n.get(n)) === null || r === void 0 || r.forEach(function(a) {
      return a(n);
    });
  });
}
var bh = new wS(ph);
process.env.NODE_ENV;
process.env.NODE_ENV;
function DS(e, t) {
  $n.has(e) || ($n.set(e, /* @__PURE__ */ new Set()), bh.observe(e)), $n.get(e).add(t);
}
function SS(e, t) {
  $n.has(e) && ($n.get(e).delete(t), $n.get(e).size || (bh.unobserve(e), $n.delete(e)));
}
function wr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fv(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, fh(n.key), n);
  }
}
function Dr(e, t, r) {
  return t && fv(e.prototype, t), r && fv(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function jl(e, t) {
  return jl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, jl(e, t);
}
function $a(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && jl(e, t);
}
function Qn(e) {
  return Qn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Qn(e);
}
function Js() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Js = function() {
    return !!e;
  })();
}
function ft(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jc(e, t) {
  if (t && (lt(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ft(e);
}
function wi(e) {
  var t = Js();
  return function() {
    var n = Qn(e), a;
    if (t) {
      var o = Qn(this).constructor;
      a = Reflect.construct(n, arguments, o);
    } else
      a = n.apply(this, arguments);
    return Jc(this, a);
  };
}
var xS = /* @__PURE__ */ function(e) {
  $a(r, e);
  var t = wi(r);
  function r() {
    return wr(this, r), t.apply(this, arguments);
  }
  return Dr(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(g.Component);
function OS(e, t) {
  var r = e.children, n = e.disabled, a = g.useRef(null), o = g.useRef(null), i = g.useContext(Ml), s = typeof r == "function", u = s ? r(a) : r, l = g.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), c = !s && /* @__PURE__ */ g.isValidElement(u) && ra(u), d = c ? u.ref : null, v = Ei(d, a), p = function() {
    var b;
    return cs(a.current) || // Support `nativeElement` format
    (a.current && lt(a.current) === "object" ? cs((b = a.current) === null || b === void 0 ? void 0 : b.nativeElement) : null) || cs(o.current);
  };
  g.useImperativeHandle(t, function() {
    return p();
  });
  var h = g.useRef(e);
  h.current = e;
  var f = g.useCallback(function(m) {
    var b = h.current, E = b.onResize, y = b.data, w = m.getBoundingClientRect(), S = w.width, D = w.height, x = m.offsetWidth, A = m.offsetHeight, O = Math.floor(S), B = Math.floor(D);
    if (l.current.width !== O || l.current.height !== B || l.current.offsetWidth !== x || l.current.offsetHeight !== A) {
      var j = {
        width: O,
        height: B,
        offsetWidth: x,
        offsetHeight: A
      };
      l.current = j;
      var T = x === Math.round(S) ? S : x, $ = A === Math.round(D) ? D : A, P = Y(Y({}, j), {}, {
        offsetWidth: T,
        offsetHeight: $
      });
      i == null || i(P, m, y), E && Promise.resolve().then(function() {
        E(P, m);
      });
    }
  }, []);
  return g.useEffect(function() {
    var m = p();
    return m && !n && DS(m, f), function() {
      return SS(m, f);
    };
  }, [a.current, n]), /* @__PURE__ */ g.createElement(xS, {
    ref: o
  }, c ? /* @__PURE__ */ g.cloneElement(u, {
    ref: v
  }) : u);
}
var yh = /* @__PURE__ */ g.forwardRef(OS);
process.env.NODE_ENV !== "production" && (yh.displayName = "SingleObserver");
var AS = "rc-observer-key";
function BS(e, t) {
  var r = e.children, n = typeof r == "function" ? [r] : gn(r);
  return process.env.NODE_ENV !== "production" && (n.length > 1 ? fo(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && fo(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(a, o) {
    var i = (a == null ? void 0 : a.key) || "".concat(AS, "-").concat(o);
    return /* @__PURE__ */ g.createElement(yh, _e({}, e, {
      key: i,
      ref: o === 0 ? t : void 0
    }), a);
  });
}
var na = /* @__PURE__ */ g.forwardRef(BS);
process.env.NODE_ENV !== "production" && (na.displayName = "ResizeObserver");
na.Collection = aS;
function Tr(e, t) {
  var r = Y({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
function Ll(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function $S(e) {
  if (Array.isArray(e))
    return Ll(e);
}
function Ch(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function ef(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ll(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ll(e, t);
  }
}
function FS() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Me(e) {
  return $S(e) || Ch(e) || ef(e) || FS();
}
var Eh = function(t) {
  return +setTimeout(t, 16);
}, wh = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Eh = function(t) {
  return window.requestAnimationFrame(t);
}, wh = function(t) {
  return window.cancelAnimationFrame(t);
});
var dv = 0, eu = /* @__PURE__ */ new Map();
function Dh(e) {
  eu.delete(e);
}
var Yt = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  dv += 1;
  var n = dv;
  function a(o) {
    if (o === 0)
      Dh(n), t();
    else {
      var i = Eh(function() {
        a(o - 1);
      });
      eu.set(n, i);
    }
  }
  return a(r), n;
};
Yt.cancel = function(e) {
  var t = eu.get(e);
  return Dh(e), wh(t);
};
process.env.NODE_ENV !== "production" && (Yt.ids = function() {
  return eu;
});
function Sh(e) {
  if (Array.isArray(e))
    return e;
}
function PS(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, o, i, s = [], u = !0, l = !1;
    try {
      if (o = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        u = !1;
      } else
        for (; !(u = (n = o.call(r)).done) && (s.push(n.value), s.length !== t); u = !0)
          ;
    } catch (c) {
      l = !0, a = c;
    } finally {
      try {
        if (!u && r.return != null && (i = r.return(), Object(i) !== i))
          return;
      } finally {
        if (l)
          throw a;
      }
    }
    return s;
  }
}
function xh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ie(e, t) {
  return Sh(e) || PS(e, t) || ef(e, t) || xh();
}
function fi(e) {
  for (var t = 0, r, n = 0, a = e.length; a >= 4; ++n, a -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function gr() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function RS(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var r = t; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var vv = "data-rc-order", gv = "data-rc-priority", TS = "rc-util-key", kl = /* @__PURE__ */ new Map();
function Oh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : TS;
}
function tu(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function NS(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function tf(e) {
  return Array.from((kl.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Ah(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!gr())
    return null;
  var r = t.csp, n = t.prepend, a = t.priority, o = a === void 0 ? 0 : a, i = NS(n), s = i === "prependQueue", u = document.createElement("style");
  u.setAttribute(vv, i), s && o && u.setAttribute(gv, "".concat(o)), r != null && r.nonce && (u.nonce = r == null ? void 0 : r.nonce), u.innerHTML = e;
  var l = tu(t), c = l.firstChild;
  if (n) {
    if (s) {
      var d = (t.styles || tf(l)).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(vv)))
          return !1;
        var p = Number(v.getAttribute(gv) || 0);
        return o >= p;
      });
      if (d.length)
        return l.insertBefore(u, d[d.length - 1].nextSibling), u;
    }
    l.insertBefore(u, c);
  } else
    l.appendChild(u);
  return u;
}
function Bh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = tu(t);
  return (t.styles || tf(r)).find(function(n) {
    return n.getAttribute(Oh(t)) === e;
  });
}
function di(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Bh(e, t);
  if (r) {
    var n = tu(t);
    n.removeChild(r);
  }
}
function IS(e, t) {
  var r = kl.get(e);
  if (!r || !RS(document, r)) {
    var n = Ah("", t), a = n.parentNode;
    kl.set(e, a), e.removeChild(n);
  }
}
function Fn(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = tu(r), a = tf(n), o = Y(Y({}, r), {}, {
    styles: a
  });
  IS(n, o);
  var i = Bh(t, o);
  if (i) {
    var s, u;
    if ((s = o.csp) !== null && s !== void 0 && s.nonce && i.nonce !== ((u = o.csp) === null || u === void 0 ? void 0 : u.nonce)) {
      var l;
      i.nonce = (l = o.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var c = Ah(e, o);
  return c.setAttribute(Oh(o), t), c;
}
function MS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function ct(e, t) {
  if (e == null)
    return {};
  var r = MS(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function go(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function a(o, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, u = n.has(o);
    if (bt(!u, "Warning: There may be circular references"), u)
      return !1;
    if (o === i)
      return !0;
    if (r && s > 1)
      return !1;
    n.add(o);
    var l = s + 1;
    if (Array.isArray(o)) {
      if (!Array.isArray(i) || o.length !== i.length)
        return !1;
      for (var c = 0; c < o.length; c++)
        if (!a(o[c], i[c], l))
          return !1;
      return !0;
    }
    if (o && i && lt(o) === "object" && lt(i) === "object") {
      var d = Object.keys(o);
      return d.length !== Object.keys(i).length ? !1 : d.every(function(v) {
        return a(o[v], i[v], l);
      });
    }
    return !1;
  }
  return a(e, t);
}
var _S = "%";
function zl(e) {
  return e.join(_S);
}
var jS = /* @__PURE__ */ function() {
  function e(t) {
    wr(this, e), K(this, "instanceId", void 0), K(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return Dr(e, [{
    key: "get",
    value: function(r) {
      return this.opGet(zl(r));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(r) {
      return this.cache.get(r) || null;
    }
  }, {
    key: "update",
    value: function(r, n) {
      return this.opUpdate(zl(r), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(r, n) {
      var a = this.cache.get(r), o = n(a);
      o === null ? this.cache.delete(r) : this.cache.set(r, o);
    }
  }]), e;
}(), LS = ["children"], mo = "data-token-hash", Jr = "data-css-hash", kS = "data-cache-path", Un = "__cssinjs_instance__";
function $h() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(Jr, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(a) {
      a[Un] = a[Un] || e, a[Un] === e && document.head.insertBefore(a, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(Jr, "]"))).forEach(function(a) {
      var o = a.getAttribute(Jr);
      if (n[o]) {
        if (a[Un] === e) {
          var i;
          (i = a.parentNode) === null || i === void 0 || i.removeChild(a);
        }
      } else
        n[o] = !0;
    });
  }
  return new jS(e);
}
var ho = /* @__PURE__ */ g.createContext({
  hashPriority: "low",
  cache: $h(),
  defaultCache: !0
}), zS = function(t) {
  var r = t.children, n = ct(t, LS), a = g.useContext(ho), o = Ci(function() {
    var i = Y({}, a);
    Object.keys(n).forEach(function(u) {
      var l = n[u];
      n[u] !== void 0 && (i[u] = l);
    });
    var s = n.cache;
    return i.cache = i.cache || $h(), i.defaultCache = !s && a.defaultCache, i;
  }, [a, n], function(i, s) {
    return !go(i[0], s[0], !0) || !go(i[1], s[1], !0);
  });
  return /* @__PURE__ */ g.createElement(ho.Provider, {
    value: o
  }, r);
};
function VS(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var rf = /* @__PURE__ */ function() {
  function e() {
    wr(this, e), K(this, "cache", void 0), K(this, "keys", void 0), K(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Dr(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(r) {
      var n, a, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = {
        map: this.cache
      };
      return r.forEach(function(s) {
        if (!i)
          i = void 0;
        else {
          var u;
          i = (u = i) === null || u === void 0 || (u = u.map) === null || u === void 0 ? void 0 : u.get(s);
        }
      }), (n = i) !== null && n !== void 0 && n.value && o && (i.value[1] = this.cacheCallTimes++), (a = i) === null || a === void 0 ? void 0 : a.value;
    }
  }, {
    key: "get",
    value: function(r) {
      var n;
      return (n = this.internalGet(r, !0)) === null || n === void 0 ? void 0 : n[0];
    }
  }, {
    key: "has",
    value: function(r) {
      return !!this.internalGet(r);
    }
  }, {
    key: "set",
    value: function(r, n) {
      var a = this;
      if (!this.has(r)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var o = this.keys.reduce(function(l, c) {
            var d = ie(l, 2), v = d[1];
            return a.internalGet(c)[1] < v ? [c, a.internalGet(c)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), i = ie(o, 1), s = i[0];
          this.delete(s);
        }
        this.keys.push(r);
      }
      var u = this.cache;
      r.forEach(function(l, c) {
        if (c === r.length - 1)
          u.set(l, {
            value: [n, a.cacheCallTimes++]
          });
        else {
          var d = u.get(l);
          d ? d.map || (d.map = /* @__PURE__ */ new Map()) : u.set(l, {
            map: /* @__PURE__ */ new Map()
          }), u = u.get(l).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(r, n) {
      var a = r.get(n[0]);
      if (n.length === 1) {
        var o;
        return a.map ? r.set(n[0], {
          map: a.map
        }) : r.delete(n[0]), (o = a.value) === null || o === void 0 ? void 0 : o[0];
      }
      var i = this.deleteByPath(a.map, n.slice(1));
      return (!a.map || a.map.size === 0) && !a.value && r.delete(n[0]), i;
    }
  }, {
    key: "delete",
    value: function(r) {
      if (this.has(r))
        return this.keys = this.keys.filter(function(n) {
          return !VS(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
K(rf, "MAX_CACHE_SIZE", 20);
K(rf, "MAX_CACHE_OFFSET", 5);
var mv = 0, Fh = /* @__PURE__ */ function() {
  function e(t) {
    wr(this, e), K(this, "derivatives", void 0), K(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = mv, t.length === 0 && fo(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), mv += 1;
  }
  return Dr(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, a) {
        return a(r, n);
      }, void 0);
    }
  }]), e;
}(), Mu = new rf();
function vi(e) {
  var t = Array.isArray(e) ? e : [e];
  return Mu.has(t) || Mu.set(t, new Fh(t)), Mu.get(t);
}
var HS = /* @__PURE__ */ new WeakMap(), _u = {};
function WS(e, t) {
  for (var r = HS, n = 0; n < t.length; n += 1) {
    var a = t[n];
    r.has(a) || r.set(a, /* @__PURE__ */ new WeakMap()), r = r.get(a);
  }
  return r.has(_u) || r.set(_u, e()), r.get(_u);
}
var hv = /* @__PURE__ */ new WeakMap();
function Zo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = hv.get(e) || "";
  return r || (Object.keys(e).forEach(function(n) {
    var a = e[n];
    r += n, a instanceof Fh ? r += a.id : a && lt(a) === "object" ? r += Zo(a, t) : r += a;
  }), t && (r = fi(r)), hv.set(e, r)), r;
}
function pv(e, t) {
  return fi("".concat(t, "_").concat(Zo(e, !0)));
}
var Vl = gr();
function Se(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Fs(e, t, r) {
  var n, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (o)
    return e;
  var i = Y(Y({}, a), {}, (n = {}, K(n, mo, t), K(n, Jr, r), n)), s = Object.keys(i).map(function(u) {
    var l = i[u];
    return l ? "".concat(u, '="').concat(l, '"') : null;
  }).filter(function(u) {
    return u;
  }).join(" ");
  return "<style ".concat(s, ">").concat(e, "</style>");
}
var Ph = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(r ? "".concat(r, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, KS = function(t, r, n) {
  return Object.keys(t).length ? ".".concat(r).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(a) {
    var o = ie(a, 2), i = o[0], s = o[1];
    return "".concat(i, ":").concat(s, ";");
  }).join(""), "}") : "";
}, Rh = function(t, r, n) {
  var a = {}, o = {};
  return Object.entries(t).forEach(function(i) {
    var s, u, l = ie(i, 2), c = l[0], d = l[1];
    if (n != null && (s = n.preserve) !== null && s !== void 0 && s[c])
      o[c] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(n != null && (u = n.ignore) !== null && u !== void 0 && u[c])) {
      var v, p = Ph(c, n == null ? void 0 : n.prefix);
      a[p] = typeof d == "number" && !(n != null && (v = n.unitless) !== null && v !== void 0 && v[c]) ? "".concat(d, "px") : String(d), o[c] = "var(".concat(p, ")");
    }
  }), [o, KS(a, r, {
    scope: n == null ? void 0 : n.scope
  })];
}, bv = process.env.NODE_ENV !== "test" && gr() ? g.useLayoutEffect : g.useEffect, Lt = function(t, r) {
  var n = g.useRef(!0);
  bv(function() {
    return t(n.current);
  }, r), bv(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, yv = function(t, r) {
  Lt(function(n) {
    if (!n)
      return t();
  }, r);
}, qS = Y({}, g), Cv = qS.useInsertionEffect, US = function(t, r, n) {
  g.useMemo(t, n), Lt(function() {
    return r(!0);
  }, n);
}, GS = Cv ? function(e, t, r) {
  return Cv(function() {
    return e(), t();
  }, r);
} : US, XS = Y({}, g), YS = XS.useInsertionEffect, ZS = function(t) {
  var r = [], n = !1;
  function a(o) {
    if (n) {
      process.env.NODE_ENV !== "production" && fo(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    r.push(o);
  }
  return g.useEffect(function() {
    return n = !1, function() {
      n = !0, r.length && r.forEach(function(o) {
        return o();
      });
    };
  }, t), a;
}, QS = function() {
  return function(t) {
    t();
  };
}, JS = typeof YS < "u" ? ZS : QS;
function ex() {
  return !1;
}
var Hl = !1;
function tx() {
  return Hl;
}
const rx = process.env.NODE_ENV === "production" ? ex : tx;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var ju = window;
  if (typeof ju.webpackHotUpdate == "function") {
    var nx = ju.webpackHotUpdate;
    ju.webpackHotUpdate = function() {
      return Hl = !0, setTimeout(function() {
        Hl = !1;
      }, 0), nx.apply(void 0, arguments);
    };
  }
}
function nf(e, t, r, n, a) {
  var o = g.useContext(ho), i = o.cache, s = [e].concat(Me(t)), u = zl(s), l = JS([u]), c = rx(), d = function(f) {
    i.opUpdate(u, function(m) {
      var b = m || [void 0, void 0], E = ie(b, 2), y = E[0], w = y === void 0 ? 0 : y, S = E[1], D = S;
      process.env.NODE_ENV !== "production" && S && c && (n == null || n(D, c), D = null);
      var x = D || r(), A = [w, x];
      return f ? f(A) : A;
    });
  };
  g.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [u]
    /* eslint-enable */
  );
  var v = i.opGet(u);
  process.env.NODE_ENV !== "production" && !v && (d(), v = i.opGet(u));
  var p = v[1];
  return GS(function() {
    a == null || a(p);
  }, function(h) {
    return d(function(f) {
      var m = ie(f, 2), b = m[0], E = m[1];
      return h && b === 0 && (a == null || a(p)), [b + 1, E];
    }), function() {
      i.opUpdate(u, function(f) {
        var m = f || [], b = ie(m, 2), E = b[0], y = E === void 0 ? 0 : E, w = b[1], S = y - 1;
        return S === 0 ? (l(function() {
          (h || !i.opGet(u)) && (n == null || n(w, !1));
        }), null) : [y - 1, w];
      });
    };
  }, [u]), p;
}
var ax = {}, ox = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", va = /* @__PURE__ */ new Map();
function ix(e) {
  va.set(e, (va.get(e) || 0) + 1);
}
function sx(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(mo, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[Un] === t) {
        var a;
        (a = n.parentNode) === null || a === void 0 || a.removeChild(n);
      }
    });
  }
}
var ux = 0;
function lx(e, t) {
  va.set(e, (va.get(e) || 0) - 1);
  var r = Array.from(va.keys()), n = r.filter(function(a) {
    var o = va.get(a) || 0;
    return o <= 0;
  });
  r.length - n.length > ux && n.forEach(function(a) {
    sx(a, t), va.delete(a);
  });
}
var Th = function(t, r, n, a) {
  var o = n.getDerivativeToken(t), i = Y(Y({}, o), r);
  return a && (i = a(i)), i;
}, Nh = "token";
function cx(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = St(ho), a = n.cache.instanceId, o = n.container, i = r.salt, s = i === void 0 ? "" : i, u = r.override, l = u === void 0 ? ax : u, c = r.formatToken, d = r.getComputedToken, v = r.cssVar, p = WS(function() {
    return Object.assign.apply(Object, [{}].concat(Me(t)));
  }, t), h = Zo(p), f = Zo(l), m = v ? Zo(v) : "", b = nf(Nh, [s, e.id, h, f, m], function() {
    var E, y = d ? d(p, l, e) : Th(p, l, e, c), w = Y({}, y), S = "";
    if (v) {
      var D = Rh(y, v.key, {
        prefix: v.prefix,
        ignore: v.ignore,
        unitless: v.unitless,
        preserve: v.preserve
      }), x = ie(D, 2);
      y = x[0], S = x[1];
    }
    var A = pv(y, s);
    y._tokenKey = A, w._tokenKey = pv(w, s);
    var O = (E = v == null ? void 0 : v.key) !== null && E !== void 0 ? E : A;
    y._themeKey = O, ix(O);
    var B = "".concat(ox, "-").concat(fi(A));
    return y._hashId = B, [y, B, w, S, (v == null ? void 0 : v.key) || ""];
  }, function(E) {
    lx(E[0]._themeKey, a);
  }, function(E) {
    var y = ie(E, 4), w = y[0], S = y[3];
    if (v && S) {
      var D = Fn(S, fi("css-variables-".concat(w._themeKey)), {
        mark: Jr,
        prepend: "queue",
        attachTo: o,
        priority: -999
      });
      D[Un] = a, D.setAttribute(mo, w._themeKey);
    }
  });
  return b;
}
var fx = function(t, r, n) {
  var a = ie(t, 5), o = a[2], i = a[3], s = a[4], u = n || {}, l = u.plain;
  if (!i)
    return null;
  var c = o._tokenKey, d = -999, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, p = Fs(i, s, c, v, l);
  return [d, c, p];
}, dx = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ih = "comm", Mh = "rule", _h = "decl", vx = "@import", gx = "@keyframes", mx = "@layer", jh = Math.abs, af = String.fromCharCode;
function Lh(e) {
  return e.trim();
}
function fs(e, t, r) {
  return e.replace(t, r);
}
function hx(e, t, r) {
  return e.indexOf(t, r);
}
function gi(e, t) {
  return e.charCodeAt(t) | 0;
}
function mi(e, t, r) {
  return e.slice(t, r);
}
function An(e) {
  return e.length;
}
function px(e) {
  return e.length;
}
function Hi(e, t) {
  return t.push(e), e;
}
var ru = 1, po = 1, kh = 0, Vr = 0, Ht = 0, Do = "";
function of(e, t, r, n, a, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: a, children: o, line: ru, column: po, length: i, return: "", siblings: s };
}
function bx() {
  return Ht;
}
function yx() {
  return Ht = Vr > 0 ? gi(Do, --Vr) : 0, po--, Ht === 10 && (po = 1, ru--), Ht;
}
function en() {
  return Ht = Vr < kh ? gi(Do, Vr++) : 0, po++, Ht === 10 && (po = 1, ru++), Ht;
}
function wa() {
  return gi(Do, Vr);
}
function ds() {
  return Vr;
}
function nu(e, t) {
  return mi(Do, e, t);
}
function Wl(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Cx(e) {
  return ru = po = 1, kh = An(Do = e), Vr = 0, [];
}
function Ex(e) {
  return Do = "", e;
}
function Lu(e) {
  return Lh(nu(Vr - 1, Kl(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function wx(e) {
  for (; (Ht = wa()) && Ht < 33; )
    en();
  return Wl(e) > 2 || Wl(Ht) > 3 ? "" : " ";
}
function Dx(e, t) {
  for (; --t && en() && !(Ht < 48 || Ht > 102 || Ht > 57 && Ht < 65 || Ht > 70 && Ht < 97); )
    ;
  return nu(e, ds() + (t < 6 && wa() == 32 && en() == 32));
}
function Kl(e) {
  for (; en(); )
    switch (Ht) {
      case e:
        return Vr;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Kl(Ht);
        break;
      case 40:
        e === 41 && Kl(e);
        break;
      case 92:
        en();
        break;
    }
  return Vr;
}
function Sx(e, t) {
  for (; en() && e + Ht !== 57; )
    if (e + Ht === 84 && wa() === 47)
      break;
  return "/*" + nu(t, Vr - 1) + "*" + af(e === 47 ? e : en());
}
function xx(e) {
  for (; !Wl(wa()); )
    en();
  return nu(e, Vr);
}
function Ox(e) {
  return Ex(vs("", null, null, null, [""], e = Cx(e), 0, [0], e));
}
function vs(e, t, r, n, a, o, i, s, u) {
  for (var l = 0, c = 0, d = i, v = 0, p = 0, h = 0, f = 1, m = 1, b = 1, E = 0, y = "", w = a, S = o, D = n, x = y; m; )
    switch (h = E, E = en()) {
      case 40:
        if (h != 108 && gi(x, d - 1) == 58) {
          hx(x += fs(Lu(E), "&", "&\f"), "&\f", jh(l ? s[l - 1] : 0)) != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Lu(E);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += wx(h);
        break;
      case 92:
        x += Dx(ds() - 1, 7);
        continue;
      case 47:
        switch (wa()) {
          case 42:
          case 47:
            Hi(Ax(Sx(en(), ds()), t, r, u), u);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * f:
        s[l++] = An(x) * b;
      case 125 * f:
      case 59:
      case 0:
        switch (E) {
          case 0:
          case 125:
            m = 0;
          case 59 + c:
            b == -1 && (x = fs(x, /\f/g, "")), p > 0 && An(x) - d && Hi(p > 32 ? wv(x + ";", n, r, d - 1, u) : wv(fs(x, " ", "") + ";", n, r, d - 2, u), u);
            break;
          case 59:
            x += ";";
          default:
            if (Hi(D = Ev(x, t, r, l, c, a, s, y, w = [], S = [], d, o), o), E === 123)
              if (c === 0)
                vs(x, t, D, D, w, o, d, s, S);
              else
                switch (v === 99 && gi(x, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    vs(e, D, D, n && Hi(Ev(e, D, D, 0, 0, a, s, y, a, w = [], d, S), S), a, S, d, s, n ? w : S);
                    break;
                  default:
                    vs(x, D, D, D, [""], S, 0, s, S);
                }
        }
        l = c = p = 0, f = b = 1, y = x = "", d = i;
        break;
      case 58:
        d = 1 + An(x), p = h;
      default:
        if (f < 1) {
          if (E == 123)
            --f;
          else if (E == 125 && f++ == 0 && yx() == 125)
            continue;
        }
        switch (x += af(E), E * f) {
          case 38:
            b = c > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            s[l++] = (An(x) - 1) * b, b = 1;
            break;
          case 64:
            wa() === 45 && (x += Lu(en())), v = wa(), c = d = An(y = x += xx(ds())), E++;
            break;
          case 45:
            h === 45 && An(x) == 2 && (f = 0);
        }
    }
  return o;
}
function Ev(e, t, r, n, a, o, i, s, u, l, c, d) {
  for (var v = a - 1, p = a === 0 ? o : [""], h = px(p), f = 0, m = 0, b = 0; f < n; ++f)
    for (var E = 0, y = mi(e, v + 1, v = jh(m = i[f])), w = e; E < h; ++E)
      (w = Lh(m > 0 ? p[E] + " " + y : fs(y, /&\f/g, p[E]))) && (u[b++] = w);
  return of(e, t, r, a === 0 ? Mh : s, u, l, c, d);
}
function Ax(e, t, r, n) {
  return of(e, t, r, Ih, af(bx()), mi(e, 2, -2), 0, n);
}
function wv(e, t, r, n, a) {
  return of(e, t, r, _h, mi(e, 0, n), mi(e, n + 1, -1), n, a);
}
function ql(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Bx(e, t, r, n) {
  switch (e.type) {
    case mx:
      if (e.children.length)
        break;
    case vx:
    case _h:
      return e.return = e.return || e.value;
    case Ih:
      return "";
    case gx:
      return e.return = e.value + "{" + ql(e.children, n) + "}";
    case Mh:
      if (!An(e.value = e.props.join(",")))
        return "";
  }
  return An(r = ql(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function zh(e, t) {
  var r = t.path, n = t.parentSelectors;
  bt(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var $x = function(t, r, n) {
  if (t === "content") {
    var a = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, o = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || o.indexOf(r) === -1 && !a.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && zh("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, Fx = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && zh("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, Dv = "data-ant-cssinjs-cache-path", Vh = "_FILE_STYLE__", Da, Hh = !0;
function Px() {
  if (!Da && (Da = {}, gr())) {
    var e = document.createElement("div");
    e.className = Dv, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(a) {
      var o = a.split(":"), i = ie(o, 2), s = i[0], u = i[1];
      Da[s] = u;
    });
    var r = document.querySelector("style[".concat(Dv, "]"));
    if (r) {
      var n;
      Hh = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function Rx(e) {
  return Px(), !!Da[e];
}
function Tx(e) {
  var t = Da[e], r = null;
  if (t && gr())
    if (Hh)
      r = Vh;
    else {
      var n = document.querySelector("style[".concat(Jr, '="').concat(Da[e], '"]'));
      n ? r = n.innerHTML : delete Da[e];
    }
  return [r, t];
}
var Wh = "_skip_check_", Kh = "_multi_value_";
function gs(e) {
  var t = ql(Ox(e), Bx);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Nx(e) {
  return lt(e) === "object" && e && (Wh in e || Kh in e);
}
function Ix(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), a = r === "low" ? ":where(".concat(n, ")") : n, o = e.split(",").map(function(i) {
    var s, u = i.trim().split(/\s+/), l = u[0] || "", c = ((s = l.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return l = "".concat(c).concat(a).concat(l.slice(c.length)), [l].concat(Me(u.slice(1))).join(" ");
  });
  return o.join(",");
}
var Mx = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = n.root, o = n.injectHash, i = n.parentSelectors, s = r.hashId, u = r.layer, l = r.path, c = r.hashPriority, d = r.transformers, v = d === void 0 ? [] : d, p = r.linters, h = p === void 0 ? [] : p, f = "", m = {};
  function b(w) {
    var S = w.getName(s);
    if (!m[S]) {
      var D = e(w.style, r, {
        root: !1,
        parentSelectors: i
      }), x = ie(D, 1), A = x[0];
      m[S] = "@keyframes ".concat(w.getName(s)).concat(A);
    }
  }
  function E(w) {
    var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return w.forEach(function(D) {
      Array.isArray(D) ? E(D, S) : D && S.push(D);
    }), S;
  }
  var y = E(Array.isArray(t) ? t : [t]);
  return y.forEach(function(w) {
    var S = typeof w == "string" && !a ? {} : w;
    if (typeof S == "string")
      f += "".concat(S, `
`);
    else if (S._keyframe)
      b(S);
    else {
      var D = v.reduce(function(x, A) {
        var O;
        return (A == null || (O = A.visit) === null || O === void 0 ? void 0 : O.call(A, x)) || x;
      }, S);
      Object.keys(D).forEach(function(x) {
        var A = D[x];
        if (lt(A) === "object" && A && (x !== "animationName" || !A._keyframe) && !Nx(A)) {
          var O = !1, B = x.trim(), j = !1;
          (a || o) && s ? B.startsWith("@") ? O = !0 : B = Ix(x, s, c) : a && !s && (B === "&" || B === "") && (B = "", j = !0);
          var T = e(A, r, {
            root: j,
            injectHash: O,
            parentSelectors: [].concat(Me(i), [B])
          }), $ = ie(T, 2), P = $[0], R = $[1];
          m = Y(Y({}, m), R), f += "".concat(B).concat(P);
        } else {
          let N = function(V, k) {
            process.env.NODE_ENV !== "production" && (lt(A) !== "object" || !(A != null && A[Wh])) && [$x, Fx].concat(Me(h)).forEach(function(Q) {
              return Q(V, k, {
                path: l,
                hashId: s,
                parentSelectors: i
              });
            });
            var W = V.replace(/[A-Z]/g, function(Q) {
              return "-".concat(Q.toLowerCase());
            }), U = k;
            !dx[V] && typeof U == "number" && U !== 0 && (U = "".concat(U, "px")), V === "animationName" && k !== null && k !== void 0 && k._keyframe && (b(k), U = k.getName(s)), f += "".concat(W, ":").concat(U, ";");
          };
          var M, F = (M = A == null ? void 0 : A.value) !== null && M !== void 0 ? M : A;
          lt(A) === "object" && A !== null && A !== void 0 && A[Kh] && Array.isArray(F) ? F.forEach(function(V) {
            N(x, V);
          }) : N(x, F);
        }
      });
    }
  }), a ? u && (f = "@layer ".concat(u.name, " {").concat(f, "}"), u.dependencies && (m["@layer ".concat(u.name)] = u.dependencies.map(function(w) {
    return "@layer ".concat(w, ", ").concat(u.name, ";");
  }).join(`
`))) : f = "{".concat(f, "}"), [f, m];
};
function qh(e, t) {
  return fi("".concat(e.join("%")).concat(t));
}
function _x() {
  return null;
}
var Uh = "style";
function Ul(e, t) {
  var r = e.token, n = e.path, a = e.hashId, o = e.layer, i = e.nonce, s = e.clientOnly, u = e.order, l = u === void 0 ? 0 : u, c = g.useContext(ho), d = c.autoClear, v = c.mock, p = c.defaultCache, h = c.hashPriority, f = c.container, m = c.ssrInline, b = c.transformers, E = c.linters, y = c.cache, w = c.layer, S = r._tokenKey, D = [S];
  w && D.push("layer"), D.push.apply(D, Me(n));
  var x = Vl;
  process.env.NODE_ENV !== "production" && v !== void 0 && (x = v === "client");
  var A = nf(
    Uh,
    D,
    // Create cache if needed
    function() {
      var $ = D.join("|");
      if (Rx($)) {
        var P = Tx($), R = ie(P, 2), M = R[0], F = R[1];
        if (M)
          return [M, S, F, {}, s, l];
      }
      var N = t(), V = Mx(N, {
        hashId: a,
        hashPriority: h,
        layer: w ? o : void 0,
        path: n.join("-"),
        transformers: b,
        linters: E
      }), k = ie(V, 2), W = k[0], U = k[1], Q = gs(W), I = qh(D, Q);
      return [Q, S, I, U, s, l];
    },
    // Remove cache if no need
    function($, P) {
      var R = ie($, 3), M = R[2];
      (P || d) && Vl && di(M, {
        mark: Jr
      });
    },
    // Effect: Inject style here
    function($) {
      var P = ie($, 4), R = P[0];
      P[1];
      var M = P[2], F = P[3];
      if (x && R !== Vh) {
        var N = {
          mark: Jr,
          prepend: w ? !1 : "queue",
          attachTo: f,
          priority: l
        }, V = typeof i == "function" ? i() : i;
        V && (N.csp = {
          nonce: V
        });
        var k = [], W = [];
        Object.keys(F).forEach(function(Q) {
          Q.startsWith("@layer") ? k.push(Q) : W.push(Q);
        }), k.forEach(function(Q) {
          Fn(gs(F[Q]), "_layer-".concat(Q), Y(Y({}, N), {}, {
            prepend: !0
          }));
        });
        var U = Fn(R, M, N);
        U[Un] = y.instanceId, U.setAttribute(mo, S), process.env.NODE_ENV !== "production" && U.setAttribute(kS, D.join("|")), W.forEach(function(Q) {
          Fn(gs(F[Q]), "_effect-".concat(Q), N);
        });
      }
    }
  ), O = ie(A, 3), B = O[0], j = O[1], T = O[2];
  return function($) {
    var P;
    if (!m || x || !p)
      P = /* @__PURE__ */ g.createElement(_x, null);
    else {
      var R;
      P = /* @__PURE__ */ g.createElement("style", _e({}, (R = {}, K(R, mo, j), K(R, Jr, T), R), {
        dangerouslySetInnerHTML: {
          __html: B
        }
      }));
    }
    return /* @__PURE__ */ g.createElement(g.Fragment, null, P, $);
  };
}
var jx = function(t, r, n) {
  var a = ie(t, 6), o = a[0], i = a[1], s = a[2], u = a[3], l = a[4], c = a[5], d = n || {}, v = d.plain;
  if (l)
    return null;
  var p = o, h = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(c)
  };
  return p = Fs(o, i, s, h, v), u && Object.keys(u).forEach(function(f) {
    if (!r[f]) {
      r[f] = !0;
      var m = gs(u[f]), b = Fs(m, i, "_effect-".concat(f), h, v);
      f.startsWith("@layer") ? p = b + p : p += b;
    }
  }), [c, s, p];
}, Gh = "cssVar", Lx = function(t, r) {
  var n = t.key, a = t.prefix, o = t.unitless, i = t.ignore, s = t.token, u = t.scope, l = u === void 0 ? "" : u, c = St(ho), d = c.cache.instanceId, v = c.container, p = s._tokenKey, h = [].concat(Me(t.path), [n, l, p]), f = nf(Gh, h, function() {
    var m = r(), b = Rh(m, n, {
      prefix: a,
      unitless: o,
      ignore: i,
      scope: l
    }), E = ie(b, 2), y = E[0], w = E[1], S = qh(h, w);
    return [y, w, S, n];
  }, function(m) {
    var b = ie(m, 3), E = b[2];
    Vl && di(E, {
      mark: Jr
    });
  }, function(m) {
    var b = ie(m, 3), E = b[1], y = b[2];
    if (E) {
      var w = Fn(E, y, {
        mark: Jr,
        prepend: "queue",
        attachTo: v,
        priority: -999
      });
      w[Un] = d, w.setAttribute(mo, n);
    }
  });
  return f;
}, kx = function(t, r, n) {
  var a = ie(t, 4), o = a[1], i = a[2], s = a[3], u = n || {}, l = u.plain;
  if (!o)
    return null;
  var c = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(c)
  }, v = Fs(o, s, i, d, l);
  return [c, i, v];
}, _o;
_o = {}, K(_o, Uh, jx), K(_o, Nh, fx), K(_o, Gh, kx);
var Et = /* @__PURE__ */ function() {
  function e(t, r) {
    wr(this, e), K(this, "name", void 0), K(this, "style", void 0), K(this, "_keyframe", !0), this.name = t, this.style = r;
  }
  return Dr(e, [{
    key: "getName",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return r ? "".concat(r, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function ka(e) {
  return e.notSplit = !0, e;
}
ka(["borderTop", "borderBottom"]), ka(["borderTop"]), ka(["borderBottom"]), ka(["borderLeft", "borderRight"]), ka(["borderLeft"]), ka(["borderRight"]);
var sf = /* @__PURE__ */ Wr({});
function zx(e) {
  return Sh(e) || Ch(e) || ef(e) || xh();
}
function vn(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function Xh(e, t, r, n) {
  if (!t.length)
    return r;
  var a = zx(t), o = a[0], i = a.slice(1), s;
  return !e && typeof o == "number" ? s = [] : Array.isArray(e) ? s = Me(e) : s = Y({}, e), n && r === void 0 && i.length === 1 ? delete s[o][i[0]] : s[o] = Xh(s[o], i, r, n), s;
}
function Yr(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !vn(e, t.slice(0, -1)) ? e : Xh(e, t, r, n);
}
function Vx(e) {
  return lt(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Sv(e) {
  return Array.isArray(e) ? [] : {};
}
var Hx = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function ro() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = Sv(t[0]);
  return t.forEach(function(a) {
    function o(i, s) {
      var u = new Set(s), l = vn(a, i), c = Array.isArray(l);
      if (c || Vx(l)) {
        if (!u.has(l)) {
          u.add(l);
          var d = vn(n, i);
          c ? n = Yr(n, i, []) : (!d || lt(d) !== "object") && (n = Yr(n, i, Sv(l))), Hx(l).forEach(function(v) {
            o([].concat(Me(i), [v]), u);
          });
        }
      } else
        n = Yr(n, i, l);
    }
    o([]);
  }), n;
}
function Yh() {
}
let On = null;
function Wx() {
  On = null, lh();
}
let uf = Yh;
process.env.NODE_ENV !== "production" && (uf = (e, t, r) => {
  bt(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && Wx();
});
const Zh = /* @__PURE__ */ g.createContext({}), sr = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = g.useContext(Zh), r = (n, a, o) => {
    if (!n)
      if (t === !1 && a === "deprecated") {
        const i = On;
        On || (On = {}), On[e] = On[e] || [], On[e].includes(o || "") || On[e].push(o || ""), i || console.warn("[antd] There exists deprecated usage in your code:", On);
      } else
        process.env.NODE_ENV !== "production" && uf(n, e, o);
  };
  return r.deprecated = (n, a, o, i) => {
    r(n, "deprecated", `\`${a}\` is deprecated. Please use \`${o}\` instead.${i ? ` ${i}` : ""}`);
  }, r;
} : () => {
  const e = () => {
  };
  return e.deprecated = Yh, e;
}, au = uf, Kx = /* @__PURE__ */ Wr(void 0);
var qx = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
}, Ux = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
const Gx = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Qh = Gx, Xx = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, Ux),
  timePickerLocale: Object.assign({}, Qh)
}, xv = Xx, xr = "${label} is not a valid ${type}", bo = {
  locale: "en",
  Pagination: qx,
  DatePicker: xv,
  TimePicker: Qh,
  Calendar: xv,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: xr,
        method: xr,
        array: xr,
        object: xr,
        number: xr,
        date: xr,
        boolean: xr,
        integer: xr,
        float: xr,
        regexp: xr,
        email: xr,
        url: xr,
        hex: xr
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty"
  }
};
Object.assign({}, bo.Modal);
let ms = [];
const Ov = () => ms.reduce((e, t) => Object.assign(Object.assign({}, e), t), bo.Modal);
function Yx(e) {
  if (e) {
    const t = Object.assign({}, e);
    return ms.push(t), Ov(), () => {
      ms = ms.filter((r) => r !== t), Ov();
    };
  }
  Object.assign({}, bo.Modal);
}
const Zx = /* @__PURE__ */ Wr(void 0), lf = Zx, Qx = (e, t) => {
  const r = g.useContext(lf), n = g.useMemo(() => {
    var o;
    const i = t || bo[e], s = (o = r == null ? void 0 : r[e]) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, typeof i == "function" ? i() : i), s || {});
  }, [e, t, r]), a = g.useMemo(() => {
    const o = r == null ? void 0 : r.locale;
    return r != null && r.exist && !o ? bo.locale : o;
  }, [r]);
  return [n, a];
}, Jh = "internalMark", ep = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const o = sr("LocaleProvider");
    process.env.NODE_ENV !== "production" && o(n === Jh, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  g.useEffect(() => Yx(t && t.Modal), [t]);
  const a = g.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ g.createElement(lf.Provider, {
    value: a
  }, r);
};
process.env.NODE_ENV !== "production" && (ep.displayName = "LocaleProvider");
const Jx = ep;
function ir(e, t) {
  eO(e) && (e = "100%");
  var r = tO(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Wi(e) {
  return Math.min(1, Math.max(0, e));
}
function eO(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function tO(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function tp(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Ki(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function ha(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function rO(e, t, r) {
  return {
    r: ir(e, 255) * 255,
    g: ir(t, 255) * 255,
    b: ir(r, 255) * 255
  };
}
function Av(e, t, r) {
  e = ir(e, 255), t = ir(t, 255), r = ir(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), o = 0, i = 0, s = (n + a) / 2;
  if (n === a)
    i = 0, o = 0;
  else {
    var u = n - a;
    switch (i = s > 0.5 ? u / (2 - n - a) : u / (n + a), n) {
      case e:
        o = (t - r) / u + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / u + 2;
        break;
      case r:
        o = (e - t) / u + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: i, l: s };
}
function ku(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function nO(e, t, r) {
  var n, a, o;
  if (e = ir(e, 360), t = ir(t, 100), r = ir(r, 100), t === 0)
    a = r, o = r, n = r;
  else {
    var i = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - i;
    n = ku(s, i, e + 1 / 3), a = ku(s, i, e), o = ku(s, i, e - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: o * 255 };
}
function Gl(e, t, r) {
  e = ir(e, 255), t = ir(t, 255), r = ir(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), o = 0, i = n, s = n - a, u = n === 0 ? 0 : s / n;
  if (n === a)
    o = 0;
  else {
    switch (n) {
      case e:
        o = (t - r) / s + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / s + 2;
        break;
      case r:
        o = (e - t) / s + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: u, v: i };
}
function aO(e, t, r) {
  e = ir(e, 360) * 6, t = ir(t, 100), r = ir(r, 100);
  var n = Math.floor(e), a = e - n, o = r * (1 - t), i = r * (1 - a * t), s = r * (1 - (1 - a) * t), u = n % 6, l = [r, i, o, o, s, r][u], c = [s, r, r, i, o, o][u], d = [o, o, s, r, r, i][u];
  return { r: l * 255, g: c * 255, b: d * 255 };
}
function Xl(e, t, r, n) {
  var a = [
    ha(Math.round(e).toString(16)),
    ha(Math.round(t).toString(16)),
    ha(Math.round(r).toString(16))
  ];
  return n && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function oO(e, t, r, n, a) {
  var o = [
    ha(Math.round(e).toString(16)),
    ha(Math.round(t).toString(16)),
    ha(Math.round(r).toString(16)),
    ha(iO(n))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function iO(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Bv(e) {
  return Ar(e) / 255;
}
function Ar(e) {
  return parseInt(e, 16);
}
function sO(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Yl = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function Qa(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, a = null, o = null, i = !1, s = !1;
  return typeof e == "string" && (e = cO(e)), typeof e == "object" && (Dn(e.r) && Dn(e.g) && Dn(e.b) ? (t = rO(e.r, e.g, e.b), i = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Dn(e.h) && Dn(e.s) && Dn(e.v) ? (n = Ki(e.s), a = Ki(e.v), t = aO(e.h, n, a), i = !0, s = "hsv") : Dn(e.h) && Dn(e.s) && Dn(e.l) && (n = Ki(e.s), o = Ki(e.l), t = nO(e.h, n, o), i = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = tp(r), {
    ok: i,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var uO = "[-\\+]?\\d+%?", lO = "[-\\+]?\\d*\\.\\d+%?", Gn = "(?:".concat(lO, ")|(?:").concat(uO, ")"), zu = "[\\s|\\(]+(".concat(Gn, ")[,|\\s]+(").concat(Gn, ")[,|\\s]+(").concat(Gn, ")\\s*\\)?"), Vu = "[\\s|\\(]+(".concat(Gn, ")[,|\\s]+(").concat(Gn, ")[,|\\s]+(").concat(Gn, ")[,|\\s]+(").concat(Gn, ")\\s*\\)?"), Xr = {
  CSS_UNIT: new RegExp(Gn),
  rgb: new RegExp("rgb" + zu),
  rgba: new RegExp("rgba" + Vu),
  hsl: new RegExp("hsl" + zu),
  hsla: new RegExp("hsla" + Vu),
  hsv: new RegExp("hsv" + zu),
  hsva: new RegExp("hsva" + Vu),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function cO(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Yl[e])
    e = Yl[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = Xr.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = Xr.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = Xr.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = Xr.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = Xr.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = Xr.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = Xr.hex8.exec(e), r ? {
    r: Ar(r[1]),
    g: Ar(r[2]),
    b: Ar(r[3]),
    a: Bv(r[4]),
    format: t ? "name" : "hex8"
  } : (r = Xr.hex6.exec(e), r ? {
    r: Ar(r[1]),
    g: Ar(r[2]),
    b: Ar(r[3]),
    format: t ? "name" : "hex"
  } : (r = Xr.hex4.exec(e), r ? {
    r: Ar(r[1] + r[1]),
    g: Ar(r[2] + r[2]),
    b: Ar(r[3] + r[3]),
    a: Bv(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = Xr.hex3.exec(e), r ? {
    r: Ar(r[1] + r[1]),
    g: Ar(r[2] + r[2]),
    b: Ar(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Dn(e) {
  return !!Xr.CSS_UNIT.exec(String(e));
}
var or = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = ""), r === void 0 && (r = {});
      var n;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = sO(t)), this.originalInput = t;
      var a = Qa(t);
      this.originalInput = t, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = r.format) !== null && n !== void 0 ? n : a.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), r, n, a, o = t.r / 255, i = t.g / 255, s = t.b / 255;
      return o <= 0.03928 ? r = o / 12.92 : r = Math.pow((o + 0.055) / 1.055, 2.4), i <= 0.03928 ? n = i / 12.92 : n = Math.pow((i + 0.055) / 1.055, 2.4), s <= 0.03928 ? a = s / 12.92 : a = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * n + 0.0722 * a;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = tp(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Gl(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Gl(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Av(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Av(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), Xl(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), oO(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), r = Math.round(this.g), n = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(r, ", ").concat(n, ")") : "rgba(".concat(t, ", ").concat(r, ", ").concat(n, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(r) {
        return "".concat(Math.round(ir(r, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(r) {
        return Math.round(ir(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + Xl(this.r, this.g, this.b, !1), r = 0, n = Object.entries(Yl); r < n.length; r++) {
        var a = n[r], o = a[0], i = a[1];
        if (t === i)
          return o;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var r = !!t;
      t = t ?? this.format;
      var n = !1, a = this.a < 1 && this.a >= 0, o = !r && a && (t.startsWith("hex") || t === "name");
      return o ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l += t / 100, r.l = Wi(r.l), new e(r);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l -= t / 100, r.l = Wi(r.l), new e(r);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s -= t / 100, r.s = Wi(r.s), new e(r);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s += t / 100, r.s = Wi(r.s), new e(r);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var r = this.toHsl(), n = (r.h + t) % 360;
      return r.h = n < 0 ? 360 + n : n, new e(r);
    }, e.prototype.mix = function(t, r) {
      r === void 0 && (r = 50);
      var n = this.toRgb(), a = new e(t).toRgb(), o = r / 100, i = {
        r: (a.r - n.r) * o + n.r,
        g: (a.g - n.g) * o + n.g,
        b: (a.b - n.b) * o + n.b,
        a: (a.a - n.a) * o + n.a
      };
      return new e(i);
    }, e.prototype.analogous = function(t, r) {
      t === void 0 && (t = 6), r === void 0 && (r = 30);
      var n = this.toHsl(), a = 360 / r, o = [this];
      for (n.h = (n.h - (a * t >> 1) + 720) % 360; --t; )
        n.h = (n.h + a) % 360, o.push(new e(n));
      return o;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var r = this.toHsv(), n = r.h, a = r.s, o = r.v, i = [], s = 1 / t; t--; )
        i.push(new e({ h: n, s: a, v: o })), o = (o + s) % 1;
      return i;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), r = t.h;
      return [
        this,
        new e({ h: (r + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (r + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var r = this.toRgb(), n = new e(t).toRgb(), a = r.a + n.a * (1 - r.a);
      return new e({
        r: (r.r * r.a + n.r * n.a * (1 - r.a)) / a,
        g: (r.g * r.a + n.g * n.a * (1 - r.a)) / a,
        b: (r.b * r.a + n.b * n.a * (1 - r.a)) / a,
        a
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var r = this.toHsl(), n = r.h, a = [this], o = 360 / t, i = 1; i < t; i++)
        a.push(new e({ h: (n + i * o) % 360, s: r.s, l: r.l }));
      return a;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), qi = 2, $v = 0.16, fO = 0.05, dO = 0.05, vO = 0.15, rp = 5, np = 4, gO = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function Fv(e) {
  var t = e.r, r = e.g, n = e.b, a = Gl(t, r, n);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function Ui(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(Xl(t, r, n, !1));
}
function mO(e, t, r) {
  var n = r / 100, a = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return a;
}
function Pv(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - qi * t : Math.round(e.h) + qi * t : n = r ? Math.round(e.h) + qi * t : Math.round(e.h) - qi * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Rv(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - $v * t : t === np ? n = e.s + $v : n = e.s + fO * t, n > 1 && (n = 1), r && t === rp && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Tv(e, t, r) {
  var n;
  return r ? n = e.v + dO * t : n = e.v - vO * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function Tn(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = Qa(e), a = rp; a > 0; a -= 1) {
    var o = Fv(n), i = Ui(Qa({
      h: Pv(o, a, !0),
      s: Rv(o, a, !0),
      v: Tv(o, a, !0)
    }));
    r.push(i);
  }
  r.push(Ui(n));
  for (var s = 1; s <= np; s += 1) {
    var u = Fv(n), l = Ui(Qa({
      h: Pv(u, s),
      s: Rv(u, s),
      v: Tv(u, s)
    }));
    r.push(l);
  }
  return t.theme === "dark" ? gO.map(function(c) {
    var d = c.index, v = c.opacity, p = Ui(mO(Qa(t.backgroundColor || "#141414"), Qa(r[d]), v * 100));
    return p;
  }) : r;
}
var Hu = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Qo = {}, Wu = {};
Object.keys(Hu).forEach(function(e) {
  Qo[e] = Tn(Hu[e]), Qo[e].primary = Qo[e][5], Wu[e] = Tn(Hu[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Wu[e].primary = Wu[e][5];
});
var hO = Qo.gold, pO = Qo.blue;
const ap = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function bO(e) {
  const {
    sizeUnit: t,
    sizeStep: r
  } = e;
  return {
    sizeXXL: t * (r + 8),
    // 48
    sizeXL: t * (r + 4),
    // 32
    sizeLG: t * (r + 2),
    // 24
    sizeMD: t * (r + 1),
    // 20
    sizeMS: t * r,
    // 16
    size: t * r,
    // 16
    sizeSM: t * (r - 1),
    // 12
    sizeXS: t * (r - 2),
    // 8
    sizeXXS: t * (r - 3)
    // 4
  };
}
const cf = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, yo = Object.assign(Object.assign({}, cf), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
});
function op(e, t) {
  let {
    generateColorPalettes: r,
    generateNeutralColorPalettes: n
  } = t;
  const {
    colorSuccess: a,
    colorWarning: o,
    colorError: i,
    colorInfo: s,
    colorPrimary: u,
    colorBgBase: l,
    colorTextBase: c
  } = e, d = r(u), v = r(a), p = r(o), h = r(i), f = r(s), m = n(l, c), b = e.colorLink || e.colorInfo, E = r(b);
  return Object.assign(Object.assign({}, m), {
    colorPrimaryBg: d[1],
    colorPrimaryBgHover: d[2],
    colorPrimaryBorder: d[3],
    colorPrimaryBorderHover: d[4],
    colorPrimaryHover: d[5],
    colorPrimary: d[6],
    colorPrimaryActive: d[7],
    colorPrimaryTextHover: d[8],
    colorPrimaryText: d[9],
    colorPrimaryTextActive: d[10],
    colorSuccessBg: v[1],
    colorSuccessBgHover: v[2],
    colorSuccessBorder: v[3],
    colorSuccessBorderHover: v[4],
    colorSuccessHover: v[4],
    colorSuccess: v[6],
    colorSuccessActive: v[7],
    colorSuccessTextHover: v[8],
    colorSuccessText: v[9],
    colorSuccessTextActive: v[10],
    colorErrorBg: h[1],
    colorErrorBgHover: h[2],
    colorErrorBorder: h[3],
    colorErrorBorderHover: h[4],
    colorErrorHover: h[5],
    colorError: h[6],
    colorErrorActive: h[7],
    colorErrorTextHover: h[8],
    colorErrorText: h[9],
    colorErrorTextActive: h[10],
    colorWarningBg: p[1],
    colorWarningBgHover: p[2],
    colorWarningBorder: p[3],
    colorWarningBorderHover: p[4],
    colorWarningHover: p[4],
    colorWarning: p[6],
    colorWarningActive: p[7],
    colorWarningTextHover: p[8],
    colorWarningText: p[9],
    colorWarningTextActive: p[10],
    colorInfoBg: f[1],
    colorInfoBgHover: f[2],
    colorInfoBorder: f[3],
    colorInfoBorderHover: f[4],
    colorInfoHover: f[4],
    colorInfo: f[6],
    colorInfoActive: f[7],
    colorInfoTextHover: f[8],
    colorInfoText: f[9],
    colorInfoTextActive: f[10],
    colorLinkHover: E[4],
    colorLink: E[6],
    colorLinkActive: E[7],
    colorBgMask: new or("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const yO = (e) => {
  let t = e, r = e, n = e, a = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? a = 4 : e >= 8 && (a = 6), {
    borderRadius: e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: a
  };
};
function CO(e) {
  const {
    motionUnit: t,
    motionBase: r,
    borderRadius: n,
    lineWidth: a
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(r + t).toFixed(1)}s`,
    motionDurationMid: `${(r + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(r + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: a + 1
  }, yO(n));
}
const Sn = (e, t) => new or(e).setAlpha(t).toRgbString(), jo = (e, t) => new or(e).darken(t).toHexString(), EO = (e) => {
  const t = Tn(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, wO = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: Sn(n, 0.88),
    colorTextSecondary: Sn(n, 0.65),
    colorTextTertiary: Sn(n, 0.45),
    colorTextQuaternary: Sn(n, 0.25),
    colorFill: Sn(n, 0.15),
    colorFillSecondary: Sn(n, 0.06),
    colorFillTertiary: Sn(n, 0.04),
    colorFillQuaternary: Sn(n, 0.02),
    colorBgLayout: jo(r, 4),
    colorBgContainer: jo(r, 0),
    colorBgElevated: jo(r, 0),
    colorBgSpotlight: Sn(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: jo(r, 15),
    colorBorderSecondary: jo(r, 6)
  };
};
function hs(e) {
  return (e + 8) / e;
}
function DO(e) {
  const t = new Array(10).fill(null).map((r, n) => {
    const a = n - 1, o = e * Math.pow(2.71828, a / 5), i = n > 1 ? Math.floor(o) : Math.ceil(o);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((r) => ({
    size: r,
    lineHeight: hs(r)
  }));
}
const ip = (e) => {
  const t = DO(e), r = t.map((c) => c.size), n = t.map((c) => c.lineHeight), a = r[1], o = r[0], i = r[2], s = n[1], u = n[0], l = n[2];
  return {
    fontSizeSM: o,
    fontSize: a,
    fontSizeLG: i,
    fontSizeXL: r[3],
    fontSizeHeading1: r[6],
    fontSizeHeading2: r[5],
    fontSizeHeading3: r[4],
    fontSizeHeading4: r[3],
    fontSizeHeading5: r[2],
    lineHeight: s,
    lineHeightLG: l,
    lineHeightSM: u,
    fontHeight: Math.round(s * a),
    fontHeightLG: Math.round(l * i),
    fontHeightSM: Math.round(u * o),
    lineHeightHeading1: n[6],
    lineHeightHeading2: n[5],
    lineHeightHeading3: n[4],
    lineHeightHeading4: n[3],
    lineHeightHeading5: n[2]
  };
};
function Di(e) {
  const t = Object.keys(cf).map((r) => {
    const n = Tn(e[r]);
    return new Array(10).fill(1).reduce((a, o, i) => (a[`${r}-${i + 1}`] = n[i], a[`${r}${i + 1}`] = n[i], a), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), op(e, {
    generateColorPalettes: EO,
    generateNeutralColorPalettes: wO
  })), ip(e.fontSize)), bO(e)), ap(e)), CO(e));
}
const sp = vi(Di), Ps = {
  token: yo,
  override: {
    override: yo
  },
  hashed: !0
}, up = /* @__PURE__ */ Z.createContext(Ps), lp = "anticon", SO = (e, t) => t || (e ? `ant-${e}` : "ant"), xt = /* @__PURE__ */ g.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: SO,
  iconPrefixCls: lp
}), xO = `-ant-${Date.now()}-${Math.random()}`;
function OO(e, t) {
  const r = {}, n = (i, s) => {
    let u = i.clone();
    return u = (s == null ? void 0 : s(u)) || u, u.toRgbString();
  }, a = (i, s) => {
    const u = new or(i), l = Tn(u.toRgbString());
    r[`${s}-color`] = n(u), r[`${s}-color-disabled`] = l[1], r[`${s}-color-hover`] = l[4], r[`${s}-color-active`] = l[6], r[`${s}-color-outline`] = u.clone().setAlpha(0.2).toRgbString(), r[`${s}-color-deprecated-bg`] = l[0], r[`${s}-color-deprecated-border`] = l[2];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    const i = new or(t.primaryColor), s = Tn(i.toRgbString());
    s.forEach((l, c) => {
      r[`primary-${c + 1}`] = l;
    }), r["primary-color-deprecated-l-35"] = n(i, (l) => l.lighten(35)), r["primary-color-deprecated-l-20"] = n(i, (l) => l.lighten(20)), r["primary-color-deprecated-t-20"] = n(i, (l) => l.tint(20)), r["primary-color-deprecated-t-50"] = n(i, (l) => l.tint(50)), r["primary-color-deprecated-f-12"] = n(i, (l) => l.setAlpha(l.getAlpha() * 0.12));
    const u = new or(s[0]);
    r["primary-color-active-deprecated-f-30"] = n(u, (l) => l.setAlpha(l.getAlpha() * 0.3)), r["primary-color-active-deprecated-d-02"] = n(u, (l) => l.darken(2));
  }
  return t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((i) => `--${e}-${i}: ${r[i]};`).join(`
`)}
  }
  `.trim();
}
function AO(e, t) {
  const r = OO(e, t);
  gr() ? Fn(r, `${xO}-dynamic-theme`) : process.env.NODE_ENV !== "production" && au(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Zl = /* @__PURE__ */ g.createContext(!1), BO = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = g.useContext(Zl);
  return /* @__PURE__ */ g.createElement(Zl.Provider, {
    value: r ?? n
  }, t);
}, Si = Zl, Ql = /* @__PURE__ */ g.createContext(void 0), $O = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = g.useContext(Ql);
  return /* @__PURE__ */ g.createElement(Ql.Provider, {
    value: r || n
  }, t);
}, ou = Ql;
function FO() {
  const e = St(Si), t = St(ou);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
const Rs = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], PO = "5.13.3";
function Ku(e) {
  return e >= 0 && e <= 255;
}
function Gi(e, t) {
  const {
    r,
    g: n,
    b: a,
    a: o
  } = new or(e).toRgb();
  if (o < 1)
    return e;
  const {
    r: i,
    g: s,
    b: u
  } = new or(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const c = Math.round((r - i * (1 - l)) / l), d = Math.round((n - s * (1 - l)) / l), v = Math.round((a - u * (1 - l)) / l);
    if (Ku(c) && Ku(d) && Ku(v))
      return new or({
        r: c,
        g: d,
        b: v,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new or({
    r,
    g: n,
    b: a,
    a: 1
  }).toRgbString();
}
var RO = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function ff(e) {
  const {
    override: t
  } = e, r = RO(e, ["override"]), n = Object.assign({}, t);
  Object.keys(yo).forEach((v) => {
    delete n[v];
  });
  const a = Object.assign(Object.assign({}, r), n), o = 480, i = 576, s = 768, u = 992, l = 1200, c = 1600;
  if (a.motion === !1) {
    const v = "0s";
    a.motionDurationFast = v, a.motionDurationMid = v, a.motionDurationSlow = v;
  }
  return Object.assign(Object.assign(Object.assign({}, a), {
    // ============== Background ============== //
    colorFillContent: a.colorFillSecondary,
    colorFillContentHover: a.colorFill,
    colorFillAlter: a.colorFillQuaternary,
    colorBgContainerDisabled: a.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: a.colorBgContainer,
    colorSplit: Gi(a.colorBorderSecondary, a.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: a.colorTextQuaternary,
    colorTextDisabled: a.colorTextQuaternary,
    colorTextHeading: a.colorText,
    colorTextLabel: a.colorTextSecondary,
    colorTextDescription: a.colorTextTertiary,
    colorTextLightSolid: a.colorWhite,
    colorHighlight: a.colorError,
    colorBgTextHover: a.colorFillSecondary,
    colorBgTextActive: a.colorFill,
    colorIcon: a.colorTextTertiary,
    colorIconHover: a.colorText,
    colorErrorOutline: Gi(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: Gi(a.colorWarningBg, a.colorBgContainer),
    // Font
    fontSizeIcon: a.fontSizeSM,
    // Line
    lineWidthFocus: a.lineWidth * 4,
    // Control
    lineWidth: a.lineWidth,
    controlOutlineWidth: a.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: a.controlHeight / 2,
    controlItemBgHover: a.colorFillTertiary,
    controlItemBgActive: a.colorPrimaryBg,
    controlItemBgActiveHover: a.colorPrimaryBgHover,
    controlItemBgActiveDisabled: a.colorFill,
    controlTmpOutline: a.colorFillQuaternary,
    controlOutline: Gi(a.colorPrimaryBg, a.colorBgContainer),
    lineType: a.lineType,
    borderRadius: a.borderRadius,
    borderRadiusXS: a.borderRadiusXS,
    borderRadiusSM: a.borderRadiusSM,
    borderRadiusLG: a.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: a.sizeXXS,
    paddingXS: a.sizeXS,
    paddingSM: a.sizeSM,
    padding: a.size,
    paddingMD: a.sizeMD,
    paddingLG: a.sizeLG,
    paddingXL: a.sizeXL,
    paddingContentHorizontalLG: a.sizeLG,
    paddingContentVerticalLG: a.sizeMS,
    paddingContentHorizontal: a.sizeMS,
    paddingContentVertical: a.sizeSM,
    paddingContentHorizontalSM: a.size,
    paddingContentVerticalSM: a.sizeXS,
    marginXXS: a.sizeXXS,
    marginXS: a.sizeXS,
    marginSM: a.sizeSM,
    margin: a.size,
    marginMD: a.sizeMD,
    marginLG: a.sizeLG,
    marginXL: a.sizeXL,
    marginXXL: a.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: o,
    screenXSMin: o,
    screenXSMax: i - 1,
    screenSM: i,
    screenSMMin: i,
    screenSMMax: s - 1,
    screenMD: s,
    screenMDMin: s,
    screenMDMax: u - 1,
    screenLG: u,
    screenLGMin: u,
    screenLGMax: l - 1,
    screenXL: l,
    screenXLMin: l,
    screenXLMax: c - 1,
    screenXXL: c,
    screenXXLMin: c,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new or("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new or("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new or("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), n);
}
var Nv = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const cp = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0
}, fp = {
  size: !0,
  sizeSM: !0,
  sizeLG: !0,
  sizeMD: !0,
  sizeXS: !0,
  sizeXXS: !0,
  sizeMS: !0,
  sizeXL: !0,
  sizeXXL: !0,
  sizeUnit: !0,
  sizeStep: !0,
  motionBase: !0,
  motionUnit: !0
}, TO = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, dp = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: a
  } = t, o = Nv(t, ["override"]);
  let i = Object.assign(Object.assign({}, n), {
    override: a
  });
  return i = ff(i), o && Object.entries(o).forEach((s) => {
    let [u, l] = s;
    const {
      theme: c
    } = l, d = Nv(l, ["theme"]);
    let v = d;
    c && (v = dp(Object.assign(Object.assign({}, i), d), {
      override: d
    }, c)), i[u] = v;
  }), i;
};
function Hr() {
  const {
    token: e,
    hashed: t,
    theme: r,
    override: n,
    cssVar: a
  } = Z.useContext(up), o = `${PO}-${t || ""}`, i = r || sp, [s, u, l] = cx(i, [yo, e], {
    salt: o,
    override: n,
    getComputedToken: dp,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: ff,
    cssVar: a && {
      prefix: a.prefix,
      key: a.key,
      unitless: cp,
      ignore: fp,
      preserve: TO
    }
  });
  return [i, l, t ? u : "", s, a];
}
function Br(e) {
  var t = g.useRef();
  t.current = e;
  var r = g.useCallback(function() {
    for (var n, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(o));
  }, []);
  return r;
}
function io(e) {
  var t = g.useRef(!1), r = g.useState(e), n = ie(r, 2), a = n[0], o = n[1];
  g.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function i(s, u) {
    u && t.current || o(s);
  }
  return [a, i];
}
function qu(e) {
  return e !== void 0;
}
function zr(e, t) {
  var r = t || {}, n = r.defaultValue, a = r.value, o = r.onChange, i = r.postState, s = io(function() {
    return qu(a) ? a : qu(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), u = ie(s, 2), l = u[0], c = u[1], d = a !== void 0 ? a : l, v = i ? i(d) : d, p = Br(o), h = io([d]), f = ie(h, 2), m = f[0], b = f[1];
  yv(function() {
    var y = m[0];
    l !== y && p(l, y);
  }, [m]), yv(function() {
    qu(a) || c(a);
  }, [a]);
  var E = Br(function(y, w) {
    c(y, w), b([d], w);
  });
  return [v, E];
}
const vp = (e) => ({
  // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
  // And Typography use this to generate link style which should not do this.
  color: e.colorLink,
  textDecoration: "none",
  outline: "none",
  cursor: "pointer",
  transition: `color ${e.motionDurationSlow}`,
  "&:focus, &:hover": {
    color: e.colorLinkHover
  },
  "&:active": {
    color: e.colorLinkActive
  }
}), NO = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, Yn = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: e.colorText,
    fontSize: e.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: e.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: t ? "inherit" : e.fontFamily
  };
}, gp = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), Jl = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
}), IO = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active,\n  &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), MO = (e, t) => {
  const {
    fontFamily: r,
    fontSize: n
  } = e, a = `[class^="${t}"], [class*=" ${t}"]`;
  return {
    [a]: {
      fontFamily: r,
      fontSize: n,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [a]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
}, df = (e) => ({
  outline: `${Se(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), ec = (e) => ({
  "&:focus-visible": Object.assign({}, df(e))
});
let _O = /* @__PURE__ */ Dr(function e() {
  wr(this, e);
});
const mp = _O;
function jO(e, t, r) {
  return t = Qn(t), Jc(e, Js() ? Reflect.construct(t, r || [], Qn(e).constructor) : t.apply(e, r));
}
let LO = /* @__PURE__ */ function(e) {
  $a(t, e);
  function t(r) {
    var n;
    return wr(this, t), n = jO(this, t), n.result = 0, r instanceof t ? n.result = r.result : typeof r == "number" && (n.result = r), n;
  }
  return Dr(t, [{
    key: "add",
    value: function(n) {
      return n instanceof t ? this.result += n.result : typeof n == "number" && (this.result += n), this;
    }
  }, {
    key: "sub",
    value: function(n) {
      return n instanceof t ? this.result -= n.result : typeof n == "number" && (this.result -= n), this;
    }
  }, {
    key: "mul",
    value: function(n) {
      return n instanceof t ? this.result *= n.result : typeof n == "number" && (this.result *= n), this;
    }
  }, {
    key: "div",
    value: function(n) {
      return n instanceof t ? this.result /= n.result : typeof n == "number" && (this.result /= n), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), t;
}(mp);
function kO(e, t, r) {
  return t = Qn(t), Jc(e, Js() ? Reflect.construct(t, r || [], Qn(e).constructor) : t.apply(e, r));
}
const hp = "CALC_UNIT";
function Uu(e) {
  return typeof e == "number" ? `${e}${hp}` : e;
}
let zO = /* @__PURE__ */ function(e) {
  $a(t, e);
  function t(r) {
    var n;
    return wr(this, t), n = kO(this, t), n.result = "", r instanceof t ? n.result = `(${r.result})` : typeof r == "number" ? n.result = Uu(r) : typeof r == "string" && (n.result = r), n;
  }
  return Dr(t, [{
    key: "add",
    value: function(n) {
      return n instanceof t ? this.result = `${this.result} + ${n.getResult()}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} + ${Uu(n)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(n) {
      return n instanceof t ? this.result = `${this.result} - ${n.getResult()}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} - ${Uu(n)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(n) {
      return this.lowPriority && (this.result = `(${this.result})`), n instanceof t ? this.result = `${this.result} * ${n.getResult(!0)}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} * ${n}`), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(n) {
      return this.lowPriority && (this.result = `(${this.result})`), n instanceof t ? this.result = `${this.result} / ${n.getResult(!0)}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} / ${n}`), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(n) {
      return this.lowPriority || n ? `(${this.result})` : this.result;
    }
  }, {
    key: "equal",
    value: function(n) {
      const {
        unit: a = !0
      } = n || {}, o = new RegExp(`${hp}`, "g");
      return this.result = this.result.replace(o, a ? "px" : ""), typeof this.lowPriority < "u" ? `calc(${this.result})` : this.result;
    }
  }]), t;
}(mp);
const VO = (e) => {
  const t = e === "css" ? zO : LO;
  return (r) => new t(r);
};
function HO(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return `max(${r.map((a) => Se(a)).join(",")})`;
    },
    min: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return `min(${r.map((a) => Se(a)).join(",")})`;
    }
  };
}
const pp = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let tc = !0;
function cr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!pp)
    return Object.assign.apply(Object, [{}].concat(t));
  tc = !1;
  const n = {};
  return t.forEach((a) => {
    Object.keys(a).forEach((i) => {
      Object.defineProperty(n, i, {
        configurable: !0,
        enumerable: !0,
        get: () => a[i]
      });
    });
  }), tc = !0, n;
}
const Iv = {};
function WO() {
}
const KO = (e) => {
  let t, r = e, n = WO;
  return pp && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), r = new Proxy(e, {
    get(a, o) {
      return tc && t.add(o), a[o];
    }
  }), n = (a, o) => {
    var i;
    Iv[a] = {
      global: Array.from(t),
      component: Object.assign(Object.assign({}, (i = Iv[a]) === null || i === void 0 ? void 0 : i.component), o)
    };
  }), {
    token: r,
    keys: t,
    flush: n
  };
}, bp = (e, t) => {
  const [r, n] = Hr();
  return Ul({
    theme: r,
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, gp()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, yp = (e, t, r) => {
  var n;
  return typeof r == "function" ? r(cr(t, (n = t[e]) !== null && n !== void 0 ? n : {})) : r ?? {};
}, Cp = (e, t, r, n) => {
  const a = Object.assign({}, t[e]);
  if (n != null && n.deprecatedTokens) {
    const {
      deprecatedTokens: i
    } = n;
    i.forEach((s) => {
      let [u, l] = s;
      var c;
      process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && bt(!(a != null && a[u]), `Component Token \`${String(u)}\` of ${e} is deprecated. Please use \`${String(l)}\` instead.`), (a != null && a[u] || a != null && a[l]) && ((c = a[l]) !== null && c !== void 0 || (a[l] = a == null ? void 0 : a[u]));
    });
  }
  const o = Object.assign(Object.assign({}, r), a);
  return Object.keys(o).forEach((i) => {
    o[i] === t[i] && delete o[i];
  }), o;
}, qO = (e, t) => `${[t, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
function vf(e, t, r) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const a = Array.isArray(e) ? e : [e, e], [o] = a, i = a.join("-");
  return (s) => {
    const [u, l, c, d, v] = Hr(), {
      getPrefixCls: p,
      iconPrefixCls: h,
      csp: f
    } = St(xt), m = p(), b = v ? "css" : "js", E = VO(b), {
      max: y,
      min: w
    } = HO(b), S = {
      theme: u,
      token: d,
      hashId: c,
      nonce: () => f == null ? void 0 : f.nonce,
      clientOnly: n.clientOnly,
      // antd is always at top of styles
      order: n.order || -999
    };
    return Ul(Object.assign(Object.assign({}, S), {
      clientOnly: !1,
      path: ["Shared", m]
    }), () => [{
      // Link
      "&": IO(d)
    }]), bp(h, f), [Ul(Object.assign(Object.assign({}, S), {
      path: [i, s, h]
    }), () => {
      if (n.injectStyle === !1)
        return [];
      const {
        token: x,
        flush: A
      } = KO(d), O = yp(o, l, r), B = `.${s}`, j = Cp(o, l, O, {
        deprecatedTokens: n.deprecatedTokens
      });
      v && Object.keys(O).forEach((P) => {
        O[P] = `var(${Ph(P, qO(o, v.prefix))})`;
      });
      const T = cr(x, {
        componentCls: B,
        prefixCls: s,
        iconCls: `.${h}`,
        antCls: `.${m}`,
        calc: E,
        max: y,
        min: w
      }, v ? O : j), $ = t(T, {
        hashId: c,
        prefixCls: s,
        rootPrefixCls: m,
        iconPrefixCls: h
      });
      return A(o, j), [n.resetStyle === !1 ? null : MO(T, s), $];
    }), c];
  };
}
const UO = (e, t, r, n) => {
  const a = vf(e, t, r, Object.assign({
    resetStyle: !1,
    // Sub Style should default after root one
    order: -998
  }, n)), o = (i) => {
    let {
      prefixCls: s
    } = i;
    return a(s), null;
  };
  return process.env.NODE_ENV !== "production" && (o.displayName = `SubStyle_${Array.isArray(e) ? e.join(".") : e}`), o;
}, GO = (e, t, r) => {
  function n(l) {
    return `${e}${l.slice(0, 1).toUpperCase()}${l.slice(1)}`;
  }
  const {
    unitless: a = {},
    injectStyle: o = !0
  } = r ?? {}, i = {
    [n("zIndexPopup")]: !0
  };
  Object.keys(a).forEach((l) => {
    i[n(l)] = a[l];
  });
  const s = (l) => {
    let {
      rootCls: c,
      cssVar: d
    } = l;
    const [, v] = Hr();
    return Lx({
      path: [e],
      prefix: d.prefix,
      key: d == null ? void 0 : d.key,
      unitless: Object.assign(Object.assign({}, cp), i),
      ignore: fp,
      token: v,
      scope: c
    }, () => {
      const p = yp(e, v, t), h = Cp(e, v, p, {
        deprecatedTokens: r == null ? void 0 : r.deprecatedTokens
      });
      return Object.keys(p).forEach((f) => {
        h[n(f)] = h[f], delete h[f];
      }), h;
    }), null;
  };
  return (l) => {
    const [, , , , c] = Hr();
    return [(d) => o && c ? /* @__PURE__ */ Z.createElement(Z.Fragment, null, /* @__PURE__ */ Z.createElement(s, {
      rootCls: l,
      cssVar: c,
      component: e
    }), d) : d, c == null ? void 0 : c.key];
  };
}, aa = (e, t, r, n) => {
  const a = vf(e, t, r, n), o = GO(Array.isArray(e) ? e[0] : e, r, n);
  return function(i) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i;
    const [, u] = a(i), [l, c] = o(s);
    return [l, u, c];
  };
};
function XO(e, t) {
  return Rs.reduce((r, n) => {
    const a = e[`${n}1`], o = e[`${n}3`], i = e[`${n}6`], s = e[`${n}7`];
    return Object.assign(Object.assign({}, r), t(n, {
      lightColor: a,
      lightBorderColor: o,
      darkColor: i,
      textColor: s
    }));
  }, {});
}
const YO = Object.assign({}, g), {
  useId: Mv
} = YO, ZO = () => "", QO = typeof Mv > "u" ? ZO : Mv;
function JO(e, t) {
  var r;
  const n = sr("ConfigProvider"), a = e || {}, o = a.inherit === !1 || !t ? Ps : t, i = QO();
  if (process.env.NODE_ENV !== "production") {
    const s = a.cssVar || o.cssVar, u = !!(typeof a.cssVar == "object" && (!((r = a.cssVar) === null || r === void 0) && r.key) || i);
    process.env.NODE_ENV !== "production" && n(!s || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Ci(() => {
    var s, u;
    if (!e)
      return t;
    const l = Object.assign({}, o.components);
    Object.keys(e.components || {}).forEach((v) => {
      l[v] = Object.assign(Object.assign({}, l[v]), e.components[v]);
    });
    const c = `css-var-${i.replace(/:/g, "")}`, d = ((s = a.cssVar) !== null && s !== void 0 ? s : o.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: "ant"
    }, typeof o.cssVar == "object" ? o.cssVar : {}), typeof a.cssVar == "object" ? a.cssVar : {}), {
      key: typeof a.cssVar == "object" && ((u = a.cssVar) === null || u === void 0 ? void 0 : u.key) || c
    });
    return Object.assign(Object.assign(Object.assign({}, o), a), {
      token: Object.assign(Object.assign({}, o.token), a.token),
      components: l,
      cssVar: d
    });
  }, [a, o], (s, u) => s.some((l, c) => {
    const d = u[c];
    return !go(l, d, !0);
  }));
}
var eA = ["children"], Ep = /* @__PURE__ */ g.createContext({});
function tA(e) {
  var t = e.children, r = ct(e, eA);
  return /* @__PURE__ */ g.createElement(Ep.Provider, {
    value: r
  }, t);
}
var rA = /* @__PURE__ */ function(e) {
  $a(r, e);
  var t = wi(r);
  function r() {
    return wr(this, r), t.apply(this, arguments);
  }
  return Dr(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(g.Component), fa = "none", Xi = "appear", Yi = "enter", Zi = "leave", _v = "none", Zr = "prepare", no = "start", ao = "active", gf = "end", wp = "prepared";
function jv(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function nA(e, t) {
  var r = {
    animationend: jv("Animation", "AnimationEnd"),
    transitionend: jv("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var aA = nA(gr(), typeof window < "u" ? window : {}), Dp = {};
if (gr()) {
  var oA = document.createElement("div");
  Dp = oA.style;
}
var Qi = {};
function Sp(e) {
  if (Qi[e])
    return Qi[e];
  var t = aA[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, a = 0; a < n; a += 1) {
      var o = r[a];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in Dp)
        return Qi[e] = t[o], Qi[e];
    }
  return "";
}
var xp = Sp("animationend"), Op = Sp("transitionend"), Ap = !!(xp && Op), Lv = xp || "animationend", kv = Op || "transitionend";
function zv(e, t) {
  if (!e)
    return null;
  if (lt(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const iA = function(e) {
  var t = qe(), r = qe(e);
  r.current = e;
  var n = g.useCallback(function(i) {
    r.current(i);
  }, []);
  function a(i) {
    i && (i.removeEventListener(kv, n), i.removeEventListener(Lv, n));
  }
  function o(i) {
    t.current && t.current !== i && a(t.current), i && i !== t.current && (i.addEventListener(kv, n), i.addEventListener(Lv, n), t.current = i);
  }
  return g.useEffect(function() {
    return function() {
      a(t.current);
    };
  }, []), [o, a];
};
var Bp = gr() ? sm : Ft;
const sA = function() {
  var e = g.useRef(null);
  function t() {
    Yt.cancel(e.current);
  }
  function r(n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var o = Yt(function() {
      a <= 1 ? n({
        isCanceled: function() {
          return o !== e.current;
        }
      }) : r(n, a - 1);
    });
    e.current = o;
  }
  return g.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
};
var uA = [Zr, no, ao, gf], lA = [Zr, wp], $p = !1, cA = !0;
function Fp(e) {
  return e === ao || e === gf;
}
const fA = function(e, t, r) {
  var n = io(_v), a = ie(n, 2), o = a[0], i = a[1], s = sA(), u = ie(s, 2), l = u[0], c = u[1];
  function d() {
    i(Zr, !0);
  }
  var v = t ? lA : uA;
  return Bp(function() {
    if (o !== _v && o !== gf) {
      var p = v.indexOf(o), h = v[p + 1], f = r(o);
      f === $p ? i(h, !0) : h && l(function(m) {
        function b() {
          m.isCanceled() || i(h, !0);
        }
        f === !0 ? b() : Promise.resolve(f).then(b);
      });
    }
  }, [e, o]), g.useEffect(function() {
    return function() {
      c();
    };
  }, []), [d, o];
};
function dA(e, t, r, n) {
  var a = n.motionEnter, o = a === void 0 ? !0 : a, i = n.motionAppear, s = i === void 0 ? !0 : i, u = n.motionLeave, l = u === void 0 ? !0 : u, c = n.motionDeadline, d = n.motionLeaveImmediately, v = n.onAppearPrepare, p = n.onEnterPrepare, h = n.onLeavePrepare, f = n.onAppearStart, m = n.onEnterStart, b = n.onLeaveStart, E = n.onAppearActive, y = n.onEnterActive, w = n.onLeaveActive, S = n.onAppearEnd, D = n.onEnterEnd, x = n.onLeaveEnd, A = n.onVisibleChanged, O = io(), B = ie(O, 2), j = B[0], T = B[1], $ = io(fa), P = ie($, 2), R = P[0], M = P[1], F = io(null), N = ie(F, 2), V = N[0], k = N[1], W = qe(!1), U = qe(null);
  function Q() {
    return r();
  }
  var I = qe(!1);
  function z() {
    M(fa, !0), k(null, !0);
  }
  function H(oe) {
    var ue = Q();
    if (!(oe && !oe.deadline && oe.target !== ue)) {
      var ge = I.current, be;
      R === Xi && ge ? be = S == null ? void 0 : S(ue, oe) : R === Yi && ge ? be = D == null ? void 0 : D(ue, oe) : R === Zi && ge && (be = x == null ? void 0 : x(ue, oe)), R !== fa && ge && be !== !1 && z();
    }
  }
  var G = iA(H), re = ie(G, 1), te = re[0], de = function(ue) {
    var ge, be, ye;
    switch (ue) {
      case Xi:
        return ge = {}, K(ge, Zr, v), K(ge, no, f), K(ge, ao, E), ge;
      case Yi:
        return be = {}, K(be, Zr, p), K(be, no, m), K(be, ao, y), be;
      case Zi:
        return ye = {}, K(ye, Zr, h), K(ye, no, b), K(ye, ao, w), ye;
      default:
        return {};
    }
  }, se = g.useMemo(function() {
    return de(R);
  }, [R]), he = fA(R, !e, function(oe) {
    if (oe === Zr) {
      var ue = se[Zr];
      return ue ? ue(Q()) : $p;
    }
    if (pe in se) {
      var ge;
      k(((ge = se[pe]) === null || ge === void 0 ? void 0 : ge.call(se, Q(), null)) || null);
    }
    return pe === ao && (te(Q()), c > 0 && (clearTimeout(U.current), U.current = setTimeout(function() {
      H({
        deadline: !0
      });
    }, c))), pe === wp && z(), cA;
  }), ce = ie(he, 2), q = ce[0], pe = ce[1], De = Fp(pe);
  I.current = De, Bp(function() {
    T(t);
    var oe = W.current;
    W.current = !0;
    var ue;
    !oe && t && s && (ue = Xi), oe && t && o && (ue = Yi), (oe && !t && l || !oe && d && !t && l) && (ue = Zi);
    var ge = de(ue);
    ue && (e || ge[Zr]) ? (M(ue), q()) : M(fa);
  }, [t]), Ft(function() {
    // Cancel appear
    (R === Xi && !s || // Cancel enter
    R === Yi && !o || // Cancel leave
    R === Zi && !l) && M(fa);
  }, [s, o, l]), Ft(function() {
    return function() {
      W.current = !1, clearTimeout(U.current);
    };
  }, []);
  var Ce = g.useRef(!1);
  Ft(function() {
    j && (Ce.current = !0), j !== void 0 && R === fa && ((Ce.current || j) && (A == null || A(j)), Ce.current = !0);
  }, [j, R]);
  var Ee = V;
  return se[Zr] && pe === no && (Ee = Y({
    transition: "none"
  }, Ee)), [R, pe, Ee, j ?? t];
}
function vA(e) {
  var t = e;
  lt(e) === "object" && (t = e.transitionSupport);
  function r(a, o) {
    return !!(a.motionName && t && o !== !1);
  }
  var n = /* @__PURE__ */ g.forwardRef(function(a, o) {
    var i = a.visible, s = i === void 0 ? !0 : i, u = a.removeOnLeave, l = u === void 0 ? !0 : u, c = a.forceRender, d = a.children, v = a.motionName, p = a.leavedClassName, h = a.eventProps, f = g.useContext(Ep), m = f.motion, b = r(a, m), E = qe(), y = qe();
    function w() {
      try {
        return E.current instanceof HTMLElement ? E.current : cs(y.current);
      } catch {
        return null;
      }
    }
    var S = dA(b, s, w, a), D = ie(S, 4), x = D[0], A = D[1], O = D[2], B = D[3], j = g.useRef(B);
    B && (j.current = !0);
    var T = g.useCallback(function(k) {
      E.current = k, Qc(o, k);
    }, [o]), $, P = Y(Y({}, h), {}, {
      visible: s
    });
    if (!d)
      $ = null;
    else if (x === fa)
      B ? $ = d(Y({}, P), T) : !l && j.current && p ? $ = d(Y(Y({}, P), {}, {
        className: p
      }), T) : c || !l && !p ? $ = d(Y(Y({}, P), {}, {
        style: {
          display: "none"
        }
      }), T) : $ = null;
    else {
      var R, M;
      A === Zr ? M = "prepare" : Fp(A) ? M = "active" : A === no && (M = "start");
      var F = zv(v, "".concat(x, "-").concat(M));
      $ = d(Y(Y({}, P), {}, {
        className: ne(zv(v, x), (R = {}, K(R, F, F && M), K(R, v, typeof v == "string"), R)),
        style: O
      }), T);
    }
    if (/* @__PURE__ */ g.isValidElement($) && ra($)) {
      var N = $, V = N.ref;
      V || ($ = /* @__PURE__ */ g.cloneElement($, {
        ref: T
      }));
    }
    return /* @__PURE__ */ g.createElement(rA, {
      ref: y
    }, $);
  });
  return n.displayName = "CSSMotion", n;
}
const So = vA(Ap);
var rc = "add", nc = "keep", ac = "remove", Gu = "removed";
function gA(e) {
  var t;
  return e && lt(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, Y(Y({}, t), {}, {
    key: String(t.key)
  });
}
function oc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(gA);
}
function mA() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, a = t.length, o = oc(e), i = oc(t);
  o.forEach(function(l) {
    for (var c = !1, d = n; d < a; d += 1) {
      var v = i[d];
      if (v.key === l.key) {
        n < d && (r = r.concat(i.slice(n, d).map(function(p) {
          return Y(Y({}, p), {}, {
            status: rc
          });
        })), n = d), r.push(Y(Y({}, v), {}, {
          status: nc
        })), n += 1, c = !0;
        break;
      }
    }
    c || r.push(Y(Y({}, l), {}, {
      status: ac
    }));
  }), n < a && (r = r.concat(i.slice(n).map(function(l) {
    return Y(Y({}, l), {}, {
      status: rc
    });
  })));
  var s = {};
  r.forEach(function(l) {
    var c = l.key;
    s[c] = (s[c] || 0) + 1;
  });
  var u = Object.keys(s).filter(function(l) {
    return s[l] > 1;
  });
  return u.forEach(function(l) {
    r = r.filter(function(c) {
      var d = c.key, v = c.status;
      return d !== l || v !== ac;
    }), r.forEach(function(c) {
      c.key === l && (c.status = nc);
    });
  }), r;
}
var hA = ["component", "children", "onVisibleChanged", "onAllRemoved"], pA = ["status"], bA = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function yA(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : So, r = /* @__PURE__ */ function(n) {
    $a(o, n);
    var a = wi(o);
    function o() {
      var i;
      wr(this, o);
      for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++)
        u[l] = arguments[l];
      return i = a.call.apply(a, [this].concat(u)), K(ft(i), "state", {
        keyEntities: []
      }), K(ft(i), "removeKey", function(c) {
        var d = i.state.keyEntities, v = d.map(function(p) {
          return p.key !== c ? p : Y(Y({}, p), {}, {
            status: Gu
          });
        });
        return i.setState({
          keyEntities: v
        }), v.filter(function(p) {
          var h = p.status;
          return h !== Gu;
        }).length;
      }), i;
    }
    return Dr(o, [{
      key: "render",
      value: function() {
        var s = this, u = this.state.keyEntities, l = this.props, c = l.component, d = l.children, v = l.onVisibleChanged, p = l.onAllRemoved, h = ct(l, hA), f = c || g.Fragment, m = {};
        return bA.forEach(function(b) {
          m[b] = h[b], delete h[b];
        }), delete h.keys, /* @__PURE__ */ g.createElement(f, h, u.map(function(b, E) {
          var y = b.status, w = ct(b, pA), S = y === rc || y === nc;
          return /* @__PURE__ */ g.createElement(t, _e({}, m, {
            key: w.key,
            visible: S,
            eventProps: w,
            onVisibleChanged: function(x) {
              if (v == null || v(x, {
                key: w.key
              }), !x) {
                var A = s.removeKey(w.key);
                A === 0 && p && p();
              }
            }
          }), function(D, x) {
            return d(Y(Y({}, D), {}, {
              index: E
            }), x);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, u) {
        var l = s.keys, c = u.keyEntities, d = oc(l), v = mA(c, d);
        return {
          keyEntities: v.filter(function(p) {
            var h = c.find(function(f) {
              var m = f.key;
              return p.key === m;
            });
            return !(h && h.status === Gu && p.status === ac);
          })
        };
      }
    }]), o;
  }(g.Component);
  return K(r, "defaultProps", {
    component: "div"
  }), r;
}
yA(Ap);
function CA(e) {
  const {
    children: t
  } = e, [, r] = Hr(), {
    motion: n
  } = r, a = g.useRef(!1);
  return a.current = a.current || n === !1, a.current ? /* @__PURE__ */ g.createElement(tA, {
    motion: n
  }, t) : t;
}
const Pp = /* @__PURE__ */ g.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return sr("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (Pp.displayName = "PropWarning");
const EA = process.env.NODE_ENV !== "production" ? Pp : () => null;
var wA = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
let ic = !1;
process.env.NODE_ENV;
const DA = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"], SA = "ant";
let Rp;
function xA() {
  return Rp || SA;
}
function OA(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const AA = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n,
    holderRender: a
  } = e;
  t !== void 0 && (Rp = t), n && OA(n) && (process.env.NODE_ENV !== "production" && au(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), AO(xA(), n));
}, BA = (e) => {
  const {
    children: t,
    csp: r,
    autoInsertSpaceInButton: n,
    alert: a,
    anchor: o,
    form: i,
    locale: s,
    componentSize: u,
    direction: l,
    space: c,
    virtual: d,
    dropdownMatchSelectWidth: v,
    popupMatchSelectWidth: p,
    popupOverflow: h,
    legacyLocale: f,
    parentContext: m,
    iconPrefixCls: b,
    theme: E,
    componentDisabled: y,
    segmented: w,
    statistic: S,
    spin: D,
    calendar: x,
    carousel: A,
    cascader: O,
    collapse: B,
    typography: j,
    checkbox: T,
    descriptions: $,
    divider: P,
    drawer: R,
    skeleton: M,
    steps: F,
    image: N,
    layout: V,
    list: k,
    mentions: W,
    modal: U,
    progress: Q,
    result: I,
    slider: z,
    breadcrumb: H,
    menu: G,
    pagination: re,
    input: te,
    empty: de,
    badge: se,
    radio: he,
    rate: ce,
    switch: q,
    transfer: pe,
    avatar: De,
    message: Ce,
    tag: Ee,
    table: oe,
    card: ue,
    tabs: ge,
    timeline: be,
    timePicker: ye,
    upload: Ne,
    notification: $e,
    tree: je,
    colorPicker: yt,
    datePicker: Le,
    rangePicker: we,
    flex: ze,
    wave: Ve,
    dropdown: kt,
    warning: tt
  } = e, Bt = g.useCallback((Pe, Ze) => {
    const {
      prefixCls: xe
    } = e;
    if (Ze)
      return Ze;
    const Te = xe || m.getPrefixCls("");
    return Pe ? `${Te}-${Pe}` : Te;
  }, [m.getPrefixCls, e.prefixCls]), ht = b || m.iconPrefixCls || lp, Qe = r || m.csp;
  bp(ht, Qe);
  const st = JO(E, m.theme);
  process.env.NODE_ENV !== "production" && (ic = ic || !!st);
  const Wt = {
    csp: Qe,
    autoInsertSpaceInButton: n,
    alert: a,
    anchor: o,
    locale: s || f,
    direction: l,
    space: c,
    virtual: d,
    popupMatchSelectWidth: p ?? v,
    popupOverflow: h,
    getPrefixCls: Bt,
    iconPrefixCls: ht,
    theme: st,
    segmented: w,
    statistic: S,
    spin: D,
    calendar: x,
    carousel: A,
    cascader: O,
    collapse: B,
    typography: j,
    checkbox: T,
    descriptions: $,
    divider: P,
    drawer: R,
    skeleton: M,
    steps: F,
    image: N,
    input: te,
    layout: V,
    list: k,
    mentions: W,
    modal: U,
    progress: Q,
    result: I,
    slider: z,
    breadcrumb: H,
    menu: G,
    pagination: re,
    empty: de,
    badge: se,
    radio: he,
    rate: ce,
    switch: q,
    transfer: pe,
    avatar: De,
    message: Ce,
    tag: Ee,
    table: oe,
    card: ue,
    tabs: ge,
    timeline: be,
    timePicker: ye,
    upload: Ne,
    notification: $e,
    tree: je,
    colorPicker: yt,
    datePicker: Le,
    rangePicker: we,
    flex: ze,
    wave: Ve,
    dropdown: kt,
    warning: tt
  }, wt = Object.assign({}, m);
  Object.keys(Wt).forEach((Pe) => {
    Wt[Pe] !== void 0 && (wt[Pe] = Wt[Pe]);
  }), DA.forEach((Pe) => {
    const Ze = e[Pe];
    Ze && (wt[Pe] = Ze);
  });
  const fe = Ci(() => wt, wt, (Pe, Ze) => {
    const xe = Object.keys(Pe), Te = Object.keys(Ze);
    return xe.length !== Te.length || xe.some((ut) => Pe[ut] !== Ze[ut]);
  }), Fe = g.useMemo(() => ({
    prefixCls: ht,
    csp: Qe
  }), [ht, Qe]);
  let ke = /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(EA, {
    dropdownMatchSelectWidth: v
  }), t);
  const rt = g.useMemo(() => {
    var Pe, Ze, xe, Te;
    return ro(((Pe = bo.Form) === null || Pe === void 0 ? void 0 : Pe.defaultValidateMessages) || {}, ((xe = (Ze = fe.locale) === null || Ze === void 0 ? void 0 : Ze.Form) === null || xe === void 0 ? void 0 : xe.defaultValidateMessages) || {}, ((Te = fe.form) === null || Te === void 0 ? void 0 : Te.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [fe, i == null ? void 0 : i.validateMessages]);
  Object.keys(rt).length > 0 && (ke = /* @__PURE__ */ g.createElement(Kx.Provider, {
    value: rt
  }, ke)), s && (ke = /* @__PURE__ */ g.createElement(Jx, {
    locale: s,
    _ANT_MARK__: Jh
  }, ke)), (ht || Qe) && (ke = /* @__PURE__ */ g.createElement(sf.Provider, {
    value: Fe
  }, ke)), u && (ke = /* @__PURE__ */ g.createElement($O, {
    size: u
  }, ke)), ke = /* @__PURE__ */ g.createElement(CA, null, ke);
  const Je = g.useMemo(() => {
    const Pe = st || {}, {
      algorithm: Ze,
      token: xe,
      components: Te,
      cssVar: ut
    } = Pe, Mt = wA(Pe, ["algorithm", "token", "components", "cssVar"]), Kt = Ze && (!Array.isArray(Ze) || Ze.length > 0) ? vi(Ze) : sp, Nt = {};
    Object.entries(Te || {}).forEach((on) => {
      let [Sr, br] = on;
      const _ = Object.assign({}, br);
      "algorithm" in _ && (_.algorithm === !0 ? _.theme = Kt : (Array.isArray(_.algorithm) || typeof _.algorithm == "function") && (_.theme = vi(_.algorithm)), delete _.algorithm), Nt[Sr] = _;
    });
    const an = Object.assign(Object.assign({}, yo), xe);
    return Object.assign(Object.assign({}, Mt), {
      theme: Kt,
      token: an,
      components: Nt,
      override: Object.assign({
        override: an
      }, Nt),
      cssVar: ut
    });
  }, [st]);
  return E && (ke = /* @__PURE__ */ g.createElement(up.Provider, {
    value: Je
  }, ke)), fe.warning && (ke = /* @__PURE__ */ g.createElement(Zh.Provider, {
    value: fe.warning
  }, ke)), y !== void 0 && (ke = /* @__PURE__ */ g.createElement(BO, {
    disabled: y
  }, ke)), /* @__PURE__ */ g.createElement(xt.Provider, {
    value: fe
  }, ke);
}, Fa = (e) => {
  const t = g.useContext(xt), r = g.useContext(lf);
  return /* @__PURE__ */ g.createElement(BA, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
Fa.ConfigContext = xt;
Fa.SizeContext = ou;
Fa.config = AA;
Fa.useConfig = FO;
Object.defineProperty(Fa, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && au(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), ou)
});
process.env.NODE_ENV !== "production" && (Fa.displayName = "ConfigProvider");
const Tp = Fa;
function Np(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function $A(e) {
  return Np(e) instanceof ShadowRoot;
}
function Ts(e) {
  return $A(e) ? Np(e) : null;
}
function FA(e) {
  return e.replace(/-(.)/g, function(t, r) {
    return r.toUpperCase();
  });
}
function PA(e, t) {
  bt(e, "[@ant-design/icons] ".concat(t));
}
function Vv(e) {
  return lt(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (lt(e.icon) === "object" || typeof e.icon == "function");
}
function Hv() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        delete t[r], t[FA(r)] = n;
    }
    return t;
  }, {});
}
function sc(e, t, r) {
  return r ? /* @__PURE__ */ Z.createElement(e.tag, Y(Y({
    key: t
  }, Hv(e.attrs)), r), (e.children || []).map(function(n, a) {
    return sc(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ Z.createElement(e.tag, Y({
    key: t
  }, Hv(e.attrs)), (e.children || []).map(function(n, a) {
    return sc(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function Ip(e) {
  return Tn(e)[0];
}
function Mp(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var RA = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, TA = function(t) {
  var r = St(sf), n = r.csp, a = r.prefixCls, o = RA;
  a && (o = o.replace(/anticon/g, a)), Ft(function() {
    var i = t.current, s = Ts(i);
    Fn(o, "@ant-design-icons", {
      prepend: !0,
      csp: n,
      attachTo: s
    });
  }, []);
}, NA = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Jo = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function IA(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  Jo.primaryColor = t, Jo.secondaryColor = r || Ip(t), Jo.calculated = !!r;
}
function MA() {
  return Y({}, Jo);
}
var iu = function(t) {
  var r = t.icon, n = t.className, a = t.onClick, o = t.style, i = t.primaryColor, s = t.secondaryColor, u = ct(t, NA), l = g.useRef(), c = Jo;
  if (i && (c = {
    primaryColor: i,
    secondaryColor: s || Ip(i)
  }), TA(l), PA(Vv(r), "icon should be icon definiton, but got ".concat(r)), !Vv(r))
    return null;
  var d = r;
  return d && typeof d.icon == "function" && (d = Y(Y({}, d), {}, {
    icon: d.icon(c.primaryColor, c.secondaryColor)
  })), sc(d.icon, "svg-".concat(d.name), Y(Y({
    className: n,
    onClick: a,
    style: o,
    "data-icon": d.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, u), {}, {
    ref: l
  }));
};
iu.displayName = "IconReact";
iu.getTwoToneColors = MA;
iu.setTwoToneColors = IA;
const mf = iu;
function _p(e) {
  var t = Mp(e), r = ie(t, 2), n = r[0], a = r[1];
  return mf.setTwoToneColors({
    primaryColor: n,
    secondaryColor: a
  });
}
function _A() {
  var e = mf.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var jA = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
_p(pO.primary);
var su = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var r = e.className, n = e.icon, a = e.spin, o = e.rotate, i = e.tabIndex, s = e.onClick, u = e.twoToneColor, l = ct(e, jA), c = g.useContext(sf), d = c.prefixCls, v = d === void 0 ? "anticon" : d, p = c.rootClassName, h = ne(p, v, K(K({}, "".concat(v, "-").concat(n.name), !!n.name), "".concat(v, "-spin"), !!a || n.name === "loading"), r), f = i;
  f === void 0 && s && (f = -1);
  var m = o ? {
    msTransform: "rotate(".concat(o, "deg)"),
    transform: "rotate(".concat(o, "deg)")
  } : void 0, b = Mp(u), E = ie(b, 2), y = E[0], w = E[1];
  return /* @__PURE__ */ g.createElement("span", _e({
    role: "img",
    "aria-label": n.name
  }, l, {
    ref: t,
    tabIndex: f,
    onClick: s,
    className: h
  }), /* @__PURE__ */ g.createElement(mf, {
    icon: n,
    primaryColor: y,
    secondaryColor: w,
    style: m
  }));
});
su.displayName = "AntdIcon";
su.getTwoToneColor = _A;
su.setTwoToneColor = _p;
const Nr = su;
var LA = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
const kA = LA;
var zA = function(t, r) {
  return /* @__PURE__ */ g.createElement(Nr, _e({}, t, {
    ref: r,
    icon: kA
  }));
}, jp = /* @__PURE__ */ g.forwardRef(zA);
process.env.NODE_ENV !== "production" && (jp.displayName = "CloseCircleFilled");
const Lp = jp, {
  isValidElement: Jn
} = g;
function kp(e) {
  return e && Jn(e) && e.type === g.Fragment;
}
function VA(e, t, r) {
  return Jn(e) ? /* @__PURE__ */ g.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
}
function mn(e, t) {
  return VA(e, e, t);
}
const xo = (e) => {
  const [, , , , t] = Hr();
  return t ? `${e}-css-var` : "";
};
var Ae = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function(t) {
    var r = t.keyCode;
    if (t.altKey && !t.ctrlKey || t.metaKey || // Function keys don't generate text
    r >= Ae.F1 && r <= Ae.F12)
      return !1;
    switch (r) {
      case Ae.ALT:
      case Ae.CAPS_LOCK:
      case Ae.CONTEXT_MENU:
      case Ae.CTRL:
      case Ae.DOWN:
      case Ae.END:
      case Ae.ESC:
      case Ae.HOME:
      case Ae.INSERT:
      case Ae.LEFT:
      case Ae.MAC_FF_META:
      case Ae.META:
      case Ae.NUMLOCK:
      case Ae.NUM_CENTER:
      case Ae.PAGE_DOWN:
      case Ae.PAGE_UP:
      case Ae.PAUSE:
      case Ae.PRINT_SCREEN:
      case Ae.RIGHT:
      case Ae.SHIFT:
      case Ae.UP:
      case Ae.WIN_KEY:
      case Ae.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= Ae.ZERO && t <= Ae.NINE || t >= Ae.NUM_ZERO && t <= Ae.NUM_MULTIPLY || t >= Ae.A && t <= Ae.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case Ae.SPACE:
      case Ae.QUESTION_MARK:
      case Ae.NUM_PLUS:
      case Ae.NUM_MINUS:
      case Ae.NUM_PERIOD:
      case Ae.NUM_DIVISION:
      case Ae.SEMICOLON:
      case Ae.DASH:
      case Ae.EQUALS:
      case Ae.COMMA:
      case Ae.PERIOD:
      case Ae.SLASH:
      case Ae.APOSTROPHE:
      case Ae.SINGLE_QUOTE:
      case Ae.OPEN_SQUARE_BRACKET:
      case Ae.BACKSLASH:
      case Ae.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, HA = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const WA = HA;
var KA = function(t, r) {
  return /* @__PURE__ */ g.createElement(Nr, _e({}, t, {
    ref: r,
    icon: WA
  }));
}, zp = /* @__PURE__ */ g.forwardRef(KA);
process.env.NODE_ENV !== "production" && (zp.displayName = "LoadingOutlined");
const qA = zp, uu = /* @__PURE__ */ Z.createContext(void 0);
process.env.NODE_ENV !== "production" && (uu.displayName = "zIndexContext");
const da = 100, UA = 10, GA = da * UA, Vp = {
  Modal: da,
  Drawer: da,
  Popover: da,
  Popconfirm: da,
  Tooltip: da,
  Tour: da
}, XA = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function YA(e) {
  return e in Vp;
}
function hf(e, t) {
  const [, r] = Hr(), n = Z.useContext(uu), a = YA(e);
  if (t !== void 0)
    return [t, t];
  let o = n ?? 0;
  return a ? (o += // Use preset token zIndex by default but not stack when has parent container
  (n ? 0 : r.zIndexPopupBase) + // Container offset
  Vp[e], o = Math.min(o, r.zIndexPopupBase + GA)) : o += XA[e], [n === void 0 ? t : o, o];
}
function mr() {
  mr = function() {
    return t;
  };
  var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, a = Object.defineProperty || function(M, F, N) {
    M[F] = N.value;
  }, o = typeof Symbol == "function" ? Symbol : {}, i = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag";
  function l(M, F, N) {
    return Object.defineProperty(M, F, {
      value: N,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), M[F];
  }
  try {
    l({}, "");
  } catch {
    l = function(N, V, k) {
      return N[V] = k;
    };
  }
  function c(M, F, N, V) {
    var k = F && F.prototype instanceof b ? F : b, W = Object.create(k.prototype), U = new P(V || []);
    return a(W, "_invoke", {
      value: B(M, N, U)
    }), W;
  }
  function d(M, F, N) {
    try {
      return {
        type: "normal",
        arg: M.call(F, N)
      };
    } catch (V) {
      return {
        type: "throw",
        arg: V
      };
    }
  }
  t.wrap = c;
  var v = "suspendedStart", p = "suspendedYield", h = "executing", f = "completed", m = {};
  function b() {
  }
  function E() {
  }
  function y() {
  }
  var w = {};
  l(w, i, function() {
    return this;
  });
  var S = Object.getPrototypeOf, D = S && S(S(R([])));
  D && D !== r && n.call(D, i) && (w = D);
  var x = y.prototype = b.prototype = Object.create(w);
  function A(M) {
    ["next", "throw", "return"].forEach(function(F) {
      l(M, F, function(N) {
        return this._invoke(F, N);
      });
    });
  }
  function O(M, F) {
    function N(k, W, U, Q) {
      var I = d(M[k], M, W);
      if (I.type !== "throw") {
        var z = I.arg, H = z.value;
        return H && lt(H) == "object" && n.call(H, "__await") ? F.resolve(H.__await).then(function(G) {
          N("next", G, U, Q);
        }, function(G) {
          N("throw", G, U, Q);
        }) : F.resolve(H).then(function(G) {
          z.value = G, U(z);
        }, function(G) {
          return N("throw", G, U, Q);
        });
      }
      Q(I.arg);
    }
    var V;
    a(this, "_invoke", {
      value: function(W, U) {
        function Q() {
          return new F(function(I, z) {
            N(W, U, I, z);
          });
        }
        return V = V ? V.then(Q, Q) : Q();
      }
    });
  }
  function B(M, F, N) {
    var V = v;
    return function(k, W) {
      if (V === h)
        throw new Error("Generator is already running");
      if (V === f) {
        if (k === "throw")
          throw W;
        return {
          value: e,
          done: !0
        };
      }
      for (N.method = k, N.arg = W; ; ) {
        var U = N.delegate;
        if (U) {
          var Q = j(U, N);
          if (Q) {
            if (Q === m)
              continue;
            return Q;
          }
        }
        if (N.method === "next")
          N.sent = N._sent = N.arg;
        else if (N.method === "throw") {
          if (V === v)
            throw V = f, N.arg;
          N.dispatchException(N.arg);
        } else
          N.method === "return" && N.abrupt("return", N.arg);
        V = h;
        var I = d(M, F, N);
        if (I.type === "normal") {
          if (V = N.done ? f : p, I.arg === m)
            continue;
          return {
            value: I.arg,
            done: N.done
          };
        }
        I.type === "throw" && (V = f, N.method = "throw", N.arg = I.arg);
      }
    };
  }
  function j(M, F) {
    var N = F.method, V = M.iterator[N];
    if (V === e)
      return F.delegate = null, N === "throw" && M.iterator.return && (F.method = "return", F.arg = e, j(M, F), F.method === "throw") || N !== "return" && (F.method = "throw", F.arg = new TypeError("The iterator does not provide a '" + N + "' method")), m;
    var k = d(V, M.iterator, F.arg);
    if (k.type === "throw")
      return F.method = "throw", F.arg = k.arg, F.delegate = null, m;
    var W = k.arg;
    return W ? W.done ? (F[M.resultName] = W.value, F.next = M.nextLoc, F.method !== "return" && (F.method = "next", F.arg = e), F.delegate = null, m) : W : (F.method = "throw", F.arg = new TypeError("iterator result is not an object"), F.delegate = null, m);
  }
  function T(M) {
    var F = {
      tryLoc: M[0]
    };
    1 in M && (F.catchLoc = M[1]), 2 in M && (F.finallyLoc = M[2], F.afterLoc = M[3]), this.tryEntries.push(F);
  }
  function $(M) {
    var F = M.completion || {};
    F.type = "normal", delete F.arg, M.completion = F;
  }
  function P(M) {
    this.tryEntries = [{
      tryLoc: "root"
    }], M.forEach(T, this), this.reset(!0);
  }
  function R(M) {
    if (M || M === "") {
      var F = M[i];
      if (F)
        return F.call(M);
      if (typeof M.next == "function")
        return M;
      if (!isNaN(M.length)) {
        var N = -1, V = function k() {
          for (; ++N < M.length; )
            if (n.call(M, N))
              return k.value = M[N], k.done = !1, k;
          return k.value = e, k.done = !0, k;
        };
        return V.next = V;
      }
    }
    throw new TypeError(lt(M) + " is not iterable");
  }
  return E.prototype = y, a(x, "constructor", {
    value: y,
    configurable: !0
  }), a(y, "constructor", {
    value: E,
    configurable: !0
  }), E.displayName = l(y, u, "GeneratorFunction"), t.isGeneratorFunction = function(M) {
    var F = typeof M == "function" && M.constructor;
    return !!F && (F === E || (F.displayName || F.name) === "GeneratorFunction");
  }, t.mark = function(M) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(M, y) : (M.__proto__ = y, l(M, u, "GeneratorFunction")), M.prototype = Object.create(x), M;
  }, t.awrap = function(M) {
    return {
      __await: M
    };
  }, A(O.prototype), l(O.prototype, s, function() {
    return this;
  }), t.AsyncIterator = O, t.async = function(M, F, N, V, k) {
    k === void 0 && (k = Promise);
    var W = new O(c(M, F, N, V), k);
    return t.isGeneratorFunction(F) ? W : W.next().then(function(U) {
      return U.done ? U.value : W.next();
    });
  }, A(x), l(x, u, "Generator"), l(x, i, function() {
    return this;
  }), l(x, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(M) {
    var F = Object(M), N = [];
    for (var V in F)
      N.push(V);
    return N.reverse(), function k() {
      for (; N.length; ) {
        var W = N.pop();
        if (W in F)
          return k.value = W, k.done = !1, k;
      }
      return k.done = !0, k;
    };
  }, t.values = R, P.prototype = {
    constructor: P,
    reset: function(F) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach($), !F)
        for (var N in this)
          N.charAt(0) === "t" && n.call(this, N) && !isNaN(+N.slice(1)) && (this[N] = e);
    },
    stop: function() {
      this.done = !0;
      var F = this.tryEntries[0].completion;
      if (F.type === "throw")
        throw F.arg;
      return this.rval;
    },
    dispatchException: function(F) {
      if (this.done)
        throw F;
      var N = this;
      function V(z, H) {
        return U.type = "throw", U.arg = F, N.next = z, H && (N.method = "next", N.arg = e), !!H;
      }
      for (var k = this.tryEntries.length - 1; k >= 0; --k) {
        var W = this.tryEntries[k], U = W.completion;
        if (W.tryLoc === "root")
          return V("end");
        if (W.tryLoc <= this.prev) {
          var Q = n.call(W, "catchLoc"), I = n.call(W, "finallyLoc");
          if (Q && I) {
            if (this.prev < W.catchLoc)
              return V(W.catchLoc, !0);
            if (this.prev < W.finallyLoc)
              return V(W.finallyLoc);
          } else if (Q) {
            if (this.prev < W.catchLoc)
              return V(W.catchLoc, !0);
          } else {
            if (!I)
              throw new Error("try statement without catch or finally");
            if (this.prev < W.finallyLoc)
              return V(W.finallyLoc);
          }
        }
      }
    },
    abrupt: function(F, N) {
      for (var V = this.tryEntries.length - 1; V >= 0; --V) {
        var k = this.tryEntries[V];
        if (k.tryLoc <= this.prev && n.call(k, "finallyLoc") && this.prev < k.finallyLoc) {
          var W = k;
          break;
        }
      }
      W && (F === "break" || F === "continue") && W.tryLoc <= N && N <= W.finallyLoc && (W = null);
      var U = W ? W.completion : {};
      return U.type = F, U.arg = N, W ? (this.method = "next", this.next = W.finallyLoc, m) : this.complete(U);
    },
    complete: function(F, N) {
      if (F.type === "throw")
        throw F.arg;
      return F.type === "break" || F.type === "continue" ? this.next = F.arg : F.type === "return" ? (this.rval = this.arg = F.arg, this.method = "return", this.next = "end") : F.type === "normal" && N && (this.next = N), m;
    },
    finish: function(F) {
      for (var N = this.tryEntries.length - 1; N >= 0; --N) {
        var V = this.tryEntries[N];
        if (V.finallyLoc === F)
          return this.complete(V.completion, V.afterLoc), $(V), m;
      }
    },
    catch: function(F) {
      for (var N = this.tryEntries.length - 1; N >= 0; --N) {
        var V = this.tryEntries[N];
        if (V.tryLoc === F) {
          var k = V.completion;
          if (k.type === "throw") {
            var W = k.arg;
            $(V);
          }
          return W;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(F, N, V) {
      return this.delegate = {
        iterator: R(F),
        resultName: N,
        nextLoc: V
      }, this.method === "next" && (this.arg = e), m;
    }
  }, t;
}
function Wv(e, t, r, n, a, o, i) {
  try {
    var s = e[o](i), u = s.value;
  } catch (l) {
    r(l);
    return;
  }
  s.done ? t(u) : Promise.resolve(u).then(n, a);
}
function Pa(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, a) {
      var o = e.apply(t, r);
      function i(u) {
        Wv(o, n, a, i, s, "next", u);
      }
      function s(u) {
        Wv(o, n, a, i, s, "throw", u);
      }
      i(void 0);
    });
  };
}
var xi = Y({}, Lb), ZA = xi.version, QA = xi.render, JA = xi.unmountComponentAtNode, lu;
try {
  var eB = Number((ZA || "").split(".")[0]);
  eB >= 18 && (lu = xi.createRoot);
} catch {
}
function Kv(e) {
  var t = xi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && lt(t) === "object" && (t.usingClientEntryPoint = e);
}
var Ns = "__rc_react_root__";
function tB(e, t) {
  Kv(!0);
  var r = t[Ns] || lu(t);
  Kv(!1), r.render(e), t[Ns] = r;
}
function rB(e, t) {
  QA(e, t);
}
function nB(e, t) {
  if (lu) {
    tB(e, t);
    return;
  }
  rB(e, t);
}
function aB(e) {
  return uc.apply(this, arguments);
}
function uc() {
  return uc = Pa(/* @__PURE__ */ mr().mark(function e(t) {
    return mr().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.resolve().then(function() {
              var a;
              (a = t[Ns]) === null || a === void 0 || a.unmount(), delete t[Ns];
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), uc.apply(this, arguments);
}
function oB(e) {
  JA(e);
}
function iB(e) {
  return lc.apply(this, arguments);
}
function lc() {
  return lc = Pa(/* @__PURE__ */ mr().mark(function e(t) {
    return mr().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            if (lu === void 0) {
              n.next = 2;
              break;
            }
            return n.abrupt("return", aB(t));
          case 2:
            oB(t);
          case 3:
          case "end":
            return n.stop();
        }
    }, e);
  })), lc.apply(this, arguments);
}
const Xu = () => ({
  height: 0,
  opacity: 0
}), qv = (e) => {
  const {
    scrollHeight: t
  } = e;
  return {
    height: t,
    opacity: 1
  };
}, sB = (e) => ({
  height: e ? e.offsetHeight : 0
}), Yu = (e, t) => (t == null ? void 0 : t.deadline) === !0 || t.propertyName === "height", uB = function() {
  return {
    motionName: `${arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant"}-motion-collapse`,
    onAppearStart: Xu,
    onEnterStart: Xu,
    onAppearActive: qv,
    onEnterActive: qv,
    onLeaveStart: sB,
    onLeaveActive: Xu,
    onAppearEnd: Yu,
    onEnterEnd: Yu,
    onLeaveEnd: Yu,
    motionDeadline: 500
  };
}, lB = (e, t, r) => r !== void 0 ? r : `${e}-${t}`, cB = uB, pf = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), r = t.width, n = t.height;
      if (r || n)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var a = e.getBoundingClientRect(), o = a.width, i = a.height;
      if (o || i)
        return !0;
    }
  }
  return !1;
}, fB = (e) => {
  const {
    componentCls: t,
    colorPrimary: r
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${r})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        },
        "&.wave-quick": {
          transition: [`box-shadow 0.3s ${e.motionEaseInOut}`, `opacity 0.35s ${e.motionEaseInOut}`].join(",")
        }
      }
    }
  };
}, dB = vf("Wave", (e) => [fB(e)]);
function vB(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function Zu(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && vB(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function gB(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(e);
  return Zu(t) ? t : Zu(r) ? r : Zu(n) ? n : null;
}
const bf = "ant-wave-target";
function Qu(e) {
  return Number.isNaN(e) ? 0 : e;
}
const mB = (e) => {
  const {
    className: t,
    target: r,
    component: n
  } = e, a = g.useRef(null), [o, i] = g.useState(null), [s, u] = g.useState([]), [l, c] = g.useState(0), [d, v] = g.useState(0), [p, h] = g.useState(0), [f, m] = g.useState(0), [b, E] = g.useState(!1), y = {
    left: l,
    top: d,
    width: p,
    height: f,
    borderRadius: s.map((D) => `${D}px`).join(" ")
  };
  o && (y["--wave-color"] = o);
  function w() {
    const D = getComputedStyle(r);
    i(gB(r));
    const x = D.position === "static", {
      borderLeftWidth: A,
      borderTopWidth: O
    } = D;
    c(x ? r.offsetLeft : Qu(-parseFloat(A))), v(x ? r.offsetTop : Qu(-parseFloat(O))), h(r.offsetWidth), m(r.offsetHeight);
    const {
      borderTopLeftRadius: B,
      borderTopRightRadius: j,
      borderBottomLeftRadius: T,
      borderBottomRightRadius: $
    } = D;
    u([B, j, $, T].map((P) => Qu(parseFloat(P))));
  }
  if (g.useEffect(() => {
    if (r) {
      const D = Yt(() => {
        w(), E(!0);
      });
      let x;
      return typeof ResizeObserver < "u" && (x = new ResizeObserver(w), x.observe(r)), () => {
        Yt.cancel(D), x == null || x.disconnect();
      };
    }
  }, []), !b)
    return null;
  const S = (n === "Checkbox" || n === "Radio") && (r == null ? void 0 : r.classList.contains(bf));
  return /* @__PURE__ */ g.createElement(So, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (D, x) => {
      var A;
      if (x.deadline || x.propertyName === "opacity") {
        const O = (A = a.current) === null || A === void 0 ? void 0 : A.parentElement;
        iB(O).then(() => {
          O == null || O.remove();
        });
      }
      return !1;
    }
  }, (D) => {
    let {
      className: x
    } = D;
    return /* @__PURE__ */ g.createElement("div", {
      ref: a,
      className: ne(t, {
        "wave-quick": S
      }, x),
      style: y
    });
  });
}, hB = (e, t) => {
  var r;
  const {
    component: n
  } = t;
  if (n === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked))
    return;
  const a = document.createElement("div");
  a.style.position = "absolute", a.style.left = "0px", a.style.top = "0px", e == null || e.insertBefore(a, e == null ? void 0 : e.firstChild), nB(/* @__PURE__ */ g.createElement(mB, Object.assign({}, t, {
    target: e
  })), a);
}, pB = hB;
function bB(e, t, r) {
  const {
    wave: n
  } = g.useContext(xt), [, a, o] = Hr(), i = Br((l) => {
    const c = e.current;
    if (n != null && n.disabled || !c)
      return;
    const d = c.querySelector(`.${bf}`) || c, {
      showEffect: v
    } = n || {};
    (v || pB)(d, {
      className: t,
      token: a,
      component: r,
      event: l,
      hashId: o
    });
  }), s = g.useRef();
  return (l) => {
    Yt.cancel(s.current), s.current = Yt(() => {
      i(l);
    });
  };
}
const Hp = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: a
  } = St(xt), o = qe(null), i = a("wave"), [, s] = dB(i), u = bB(o, ne(i, s), n);
  if (Z.useEffect(() => {
    const c = o.current;
    if (!c || c.nodeType !== 1 || r)
      return;
    const d = (v) => {
      !pf(v.target) || // No need wave
      !c.getAttribute || c.getAttribute("disabled") || c.disabled || c.className.includes("disabled") || c.className.includes("-leave") || u(v);
    };
    return c.addEventListener("click", d, !0), () => {
      c.removeEventListener("click", d, !0);
    };
  }, [r]), !/* @__PURE__ */ Z.isValidElement(t))
    return t ?? null;
  const l = ra(t) ? nn(t.ref, o) : o;
  return mn(t, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (Hp.displayName = "Wave");
const Wp = Hp, Oi = (e) => {
  const t = Z.useContext(ou);
  return Z.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, yB = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
}, CB = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${t}-item:empty`]: {
        display: "none"
      }
    }
  };
}, EB = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      "&-gap-row-small": {
        rowGap: e.spaceGapSmallSize
      },
      "&-gap-row-middle": {
        rowGap: e.spaceGapMiddleSize
      },
      "&-gap-row-large": {
        rowGap: e.spaceGapLargeSize
      },
      "&-gap-col-small": {
        columnGap: e.spaceGapSmallSize
      },
      "&-gap-col-middle": {
        columnGap: e.spaceGapMiddleSize
      },
      "&-gap-col-large": {
        columnGap: e.spaceGapLargeSize
      }
    }
  };
}, Kp = aa("Space", (e) => {
  const t = cr(e, {
    spaceGapSmallSize: e.paddingXS,
    spaceGapMiddleSize: e.padding,
    spaceGapLargeSize: e.paddingLG
  });
  return [CB(t), EB(t), yB(t)];
}, () => ({}), {
  // Space component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/40315
  resetStyle: !1
});
var qp = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const cu = /* @__PURE__ */ g.createContext(null), fu = (e, t) => {
  const r = g.useContext(cu), n = g.useMemo(() => {
    if (!r)
      return "";
    const {
      compactDirection: a,
      isFirstItem: o,
      isLastItem: i
    } = r, s = a === "vertical" ? "-vertical-" : "-";
    return ne(`${e}-compact${s}item`, {
      [`${e}-compact${s}first-item`]: o,
      [`${e}-compact${s}last-item`]: i,
      [`${e}-compact${s}item-rtl`]: t === "rtl"
    });
  }, [e, t, r]);
  return {
    compactSize: r == null ? void 0 : r.compactSize,
    compactDirection: r == null ? void 0 : r.compactDirection,
    compactItemClassnames: n
  };
}, Is = (e) => {
  let {
    children: t
  } = e;
  return /* @__PURE__ */ g.createElement(cu.Provider, {
    value: null
  }, t);
}, wB = (e) => {
  var {
    children: t
  } = e, r = qp(e, ["children"]);
  return /* @__PURE__ */ g.createElement(cu.Provider, {
    value: r
  }, t);
}, DB = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = g.useContext(xt), {
    size: n,
    direction: a,
    block: o,
    prefixCls: i,
    className: s,
    rootClassName: u,
    children: l
  } = e, c = qp(e, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]), d = Oi((y) => n ?? y), v = t("space-compact", i), [p, h] = Kp(v), f = ne(v, h, {
    [`${v}-rtl`]: r === "rtl",
    [`${v}-block`]: o,
    [`${v}-vertical`]: a === "vertical"
  }, s, u), m = g.useContext(cu), b = gn(l), E = g.useMemo(() => b.map((y, w) => {
    const S = y && y.key || `${v}-item-${w}`;
    return /* @__PURE__ */ g.createElement(wB, {
      key: S,
      compactSize: d,
      compactDirection: a,
      isFirstItem: w === 0 && (!m || (m == null ? void 0 : m.isFirstItem)),
      isLastItem: w === b.length - 1 && (!m || (m == null ? void 0 : m.isLastItem))
    }, y);
  }), [n, b, m]);
  return b.length === 0 ? null : p(/* @__PURE__ */ g.createElement("div", Object.assign({
    className: f
  }, c), E));
}, SB = DB;
var xB = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Up = /* @__PURE__ */ g.createContext(void 0), OB = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = g.useContext(xt), {
    prefixCls: n,
    size: a,
    className: o
  } = e, i = xB(e, ["prefixCls", "size", "className"]), s = t("btn-group", n), [, , u] = Hr();
  let l = "";
  switch (a) {
    case "large":
      l = "lg";
      break;
    case "small":
      l = "sm";
      break;
  }
  if (process.env.NODE_ENV !== "production") {
    const d = sr("Button.Group");
    process.env.NODE_ENV !== "production" && d(!a || ["large", "small", "middle"].includes(a), "usage", "Invalid prop `size`.");
  }
  const c = ne(s, {
    [`${s}-${l}`]: l,
    [`${s}-rtl`]: r === "rtl"
  }, o, u);
  return /* @__PURE__ */ g.createElement(Up.Provider, {
    value: a
  }, /* @__PURE__ */ g.createElement("div", Object.assign({}, i, {
    className: c
  })));
}, AB = OB, Uv = /^[\u4e00-\u9fa5]{2}$/, cc = Uv.test.bind(Uv);
function Gv(e) {
  return typeof e == "string";
}
function Ji(e) {
  return e === "text" || e === "link";
}
function BB(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && Gv(e.type) && cc(e.props.children) ? mn(e, {
    children: e.props.children.split("").join(r)
  }) : Gv(e) ? cc(e) ? /* @__PURE__ */ Z.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ Z.createElement("span", null, e) : kp(e) ? /* @__PURE__ */ Z.createElement("span", null, e) : e;
}
function $B(e, t) {
  let r = !1;
  const n = [];
  return Z.Children.forEach(e, (a) => {
    const o = typeof a, i = o === "string" || o === "number";
    if (r && i) {
      const s = n.length - 1, u = n[s];
      n[s] = `${u}${a}`;
    } else
      n.push(a);
    r = i;
  }), Z.Children.map(n, (a) => BB(a, t));
}
const FB = /* @__PURE__ */ hr((e, t) => {
  const {
    className: r,
    style: n,
    children: a,
    prefixCls: o
  } = e, i = ne(`${o}-icon`, r);
  return /* @__PURE__ */ Z.createElement("span", {
    ref: t,
    className: i,
    style: n
  }, a);
}), Gp = FB, Xv = /* @__PURE__ */ hr((e, t) => {
  let {
    prefixCls: r,
    className: n,
    style: a,
    iconClassName: o
  } = e;
  const i = ne(`${r}-loading-icon`, n);
  return /* @__PURE__ */ Z.createElement(Gp, {
    prefixCls: r,
    className: i,
    style: a,
    ref: t
  }, /* @__PURE__ */ Z.createElement(qA, {
    className: o
  }));
}), Ju = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), el = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), PB = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: a,
    style: o
  } = e, i = !!r;
  return n ? /* @__PURE__ */ Z.createElement(Xv, {
    prefixCls: t,
    className: a,
    style: o
  }) : /* @__PURE__ */ Z.createElement(So, {
    visible: i,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    motionLeave: i,
    removeOnLeave: !0,
    onAppearStart: Ju,
    onAppearActive: el,
    onEnterStart: Ju,
    onEnterActive: el,
    onLeaveStart: el,
    onLeaveActive: Ju
  }, (s, u) => {
    let {
      className: l,
      style: c
    } = s;
    return /* @__PURE__ */ Z.createElement(Xv, {
      prefixCls: t,
      className: a,
      style: Object.assign(Object.assign({}, o), c),
      ref: u,
      iconClassName: l
    });
  });
}, RB = PB, Yv = (e, t) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: t
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: t
        }
      }
    }
  }
}), TB = (e) => {
  const {
    componentCls: t,
    fontSize: r,
    lineWidth: n,
    groupBorderColor: a,
    colorErrorHover: o
  } = e;
  return {
    [`${t}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: e.calc(n).mul(-1).equal(),
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover,\n          &:focus,\n          &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: r
        }
      },
      // Border Color
      Yv(`${t}-primary`, a),
      Yv(`${t}-danger`, o)
    ]
  };
}, Xp = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: r,
    paddingBlock: n
  } = e;
  return cr(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: n,
    buttonIconOnlyFontSize: r
  });
}, Yp = (e) => {
  var t, r, n, a, o, i;
  const s = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, u = (r = e.contentFontSizeSM) !== null && r !== void 0 ? r : e.fontSize, l = (n = e.contentFontSizeLG) !== null && n !== void 0 ? n : e.fontSizeLG, c = (a = e.contentLineHeight) !== null && a !== void 0 ? a : hs(s), d = (o = e.contentLineHeightSM) !== null && o !== void 0 ? o : hs(u), v = (i = e.contentLineHeightLG) !== null && i !== void 0 ? i : hs(l);
  return {
    fontWeight: 400,
    defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
    primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
    dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
    primaryColor: e.colorTextLightSolid,
    dangerColor: e.colorTextLightSolid,
    borderColorDisabled: e.colorBorder,
    defaultGhostColor: e.colorBgContainer,
    ghostBg: "transparent",
    defaultGhostBorderColor: e.colorBgContainer,
    paddingInline: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineSM: 8 - e.lineWidth,
    onlyIconSize: e.fontSizeLG,
    onlyIconSizeSM: e.fontSizeLG - 2,
    onlyIconSizeLG: e.fontSizeLG + 2,
    groupBorderColor: e.colorPrimaryHover,
    linkHoverBg: "transparent",
    textHoverBg: e.colorBgTextHover,
    defaultColor: e.colorText,
    defaultBg: e.colorBgContainer,
    defaultBorderColor: e.colorBorder,
    defaultBorderColorDisabled: e.colorBorder,
    contentFontSize: s,
    contentFontSizeSM: u,
    contentFontSizeLG: l,
    contentLineHeight: c,
    contentLineHeightSM: d,
    contentLineHeightLG: v,
    paddingBlock: Math.max((e.controlHeight - s * c) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - u * d) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - l * v) / 2 - e.lineWidth, 0)
  };
}, NB = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    fontWeight: n
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-block",
      fontWeight: n,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${Se(e.lineWidth)} ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      "> span": {
        display: "inline-block"
      },
      [`${t}-icon`]: {
        lineHeight: 0
      },
      // Leave a space between icon and text.
      [`> ${r} + span, > span + ${r}`]: {
        marginInlineStart: e.marginXS
      },
      [`&:not(${t}-icon-only) > ${t}-icon`]: {
        [`&${t}-loading-icon, &:not(:last-child)`]: {
          marginInlineEnd: e.marginXS
        }
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": Object.assign({}, ec(e)),
      [`&${t}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${t}-two-chinese-chars > *:not(${r})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      // make `btn-icon-only` not too narrow
      [`&-icon-only${t}-compact-item`]: {
        flex: "none"
      }
    }
  };
}, Nn = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), IB = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), MB = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), _B = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), hi = (e, t, r, n, a, o, i, s) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: r || void 0,
    background: t,
    borderColor: n || void 0,
    boxShadow: "none"
  }, Nn(e, Object.assign({
    background: t
  }, i), Object.assign({
    background: t
  }, s))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: a || void 0,
      borderColor: o || void 0
    }
  })
}), yf = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, _B(e))
}), Zp = (e) => Object.assign({}, yf(e)), Ms = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), Qp = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Zp(e)), {
  background: e.defaultBg,
  borderColor: e.defaultBorderColor,
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}), Nn(e.componentCls, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), hi(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: e.colorError,
    borderColor: e.colorError
  }, Nn(e.componentCls, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), hi(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), yf(e))
}), jB = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Zp(e)), {
  color: e.primaryColor,
  background: e.colorPrimary,
  boxShadow: e.primaryShadow
}), Nn(e.componentCls, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryActive
})), hi(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    background: e.colorError,
    boxShadow: e.dangerShadow,
    color: e.dangerColor
  }, Nn(e.componentCls, {
    background: e.colorErrorHover
  }, {
    background: e.colorErrorActive
  })), hi(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), yf(e))
}), LB = (e) => Object.assign(Object.assign({}, Qp(e)), {
  borderStyle: "dashed"
}), kB = (e) => Object.assign(Object.assign(Object.assign({
  color: e.colorLink
}, Nn(e.componentCls, {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Ms(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, Nn(e.componentCls, {
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), Ms(e))
}), zB = (e) => Object.assign(Object.assign(Object.assign({}, Nn(e.componentCls, {
  color: e.colorText,
  background: e.textHoverBg
}, {
  color: e.colorText,
  background: e.colorBgTextActive
})), Ms(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, Ms(e)), Nn(e.componentCls, {
    color: e.colorErrorHover,
    background: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    background: e.colorErrorBg
  }))
}), VB = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: Qp(e),
    [`${t}-primary`]: jB(e),
    [`${t}-dashed`]: LB(e),
    [`${t}-link`]: kB(e),
    [`${t}-text`]: zB(e),
    [`${t}-ghost`]: hi(e.componentCls, e.ghostBg, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
  };
}, Cf = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: r,
    controlHeight: n,
    fontSize: a,
    lineHeight: o,
    borderRadius: i,
    buttonPaddingHorizontal: s,
    iconCls: u,
    buttonPaddingVertical: l
  } = e, c = `${r}-icon-only`;
  return [
    {
      [`${t}`]: {
        fontSize: a,
        lineHeight: o,
        height: n,
        padding: `${Se(l)} ${Se(s)}`,
        borderRadius: i,
        [`&${c}`]: {
          width: n,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${r}-round`]: {
            width: "auto"
          },
          [u]: {
            fontSize: e.buttonIconOnlyFontSize
          }
        },
        // Loading
        [`&${r}-loading`]: {
          opacity: e.opacityLoading,
          cursor: "default"
        },
        [`${r}-loading-icon`]: {
          transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${r}${r}-circle${t}`]: IB(e)
    },
    {
      [`${r}${r}-round${t}`]: MB(e)
    }
  ];
}, HB = (e) => {
  const t = cr(e, {
    fontSize: e.contentFontSize,
    lineHeight: e.contentLineHeight
  });
  return Cf(t, e.componentCls);
}, WB = (e) => {
  const t = cr(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    lineHeight: e.contentLineHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: e.paddingBlockSM,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return Cf(t, `${e.componentCls}-sm`);
}, KB = (e) => {
  const t = cr(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    lineHeight: e.contentLineHeightLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: e.paddingBlockLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return Cf(t, `${e.componentCls}-lg`);
}, qB = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`&${t}-block`]: {
        width: "100%"
      }
    }
  };
}, UB = aa("Button", (e) => {
  const t = Xp(e);
  return [
    // Shared
    NB(t),
    // Size
    HB(t),
    WB(t),
    KB(t),
    // Block
    qB(t),
    // Group (type, ghost, danger, loading)
    VB(t),
    // Button Group
    TB(t)
  ];
}, Yp, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function GB(e, t, r) {
  const {
    focusElCls: n,
    focus: a,
    borderElCls: o
  } = r, i = o ? "> *" : "", s = ["hover", a ? "focus" : null, "active"].filter(Boolean).map((u) => `&:${u} ${i}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": Object.assign(Object.assign({
      [s]: {
        zIndex: 2
      }
    }, n ? {
      [`&${n}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${i}`]: {
        zIndex: 0
      }
    })
  };
}
function XB(e, t, r) {
  const {
    borderElCls: n
  } = r, a = n ? `> ${n}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${a}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${a}, &${e}-sm ${a}, &${e}-lg ${a}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${a}, &${e}-sm ${a}, &${e}-lg ${a}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function Jp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, GB(e, n, t)), XB(r, n, t))
  };
}
function YB(e, t) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function ZB(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function QB(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, YB(e, t)), ZB(e.componentCls, t))
  };
}
const JB = (e) => {
  const {
    componentCls: t,
    calc: r
  } = e;
  return {
    [t]: {
      // Special styles for Primary Button
      [`&-compact-item${t}-primary`]: {
        [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: r(e.lineWidth).mul(-1).equal(),
            insetInlineStart: r(e.lineWidth).mul(-1).equal(),
            display: "inline-block",
            width: e.lineWidth,
            height: `calc(100% + ${Se(e.lineWidth)} * 2)`,
            backgroundColor: e.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: r(e.lineWidth).mul(-1).equal(),
              insetInlineStart: r(e.lineWidth).mul(-1).equal(),
              display: "inline-block",
              width: `calc(100% + ${Se(e.lineWidth)} * 2)`,
              height: e.lineWidth,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, e$ = UO(["Button", "compact"], (e) => {
  const t = Xp(e);
  return [
    // Space Compact
    Jp(t),
    QB(t),
    JB(t)
  ];
}, Yp);
var t$ = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function r$(e) {
  if (typeof e == "object" && e) {
    let t = e == null ? void 0 : e.delay;
    return t = !Number.isNaN(t) && typeof t == "number" ? t : 0, {
      loading: t <= 0,
      delay: t
    };
  }
  return {
    loading: !!e,
    delay: 0
  };
}
const n$ = (e, t) => {
  var r, n;
  const {
    loading: a = !1,
    prefixCls: o,
    type: i = "default",
    danger: s,
    shape: u = "default",
    size: l,
    styles: c,
    disabled: d,
    className: v,
    rootClassName: p,
    children: h,
    icon: f,
    ghost: m = !1,
    block: b = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: E = "button",
    classNames: y,
    style: w = {}
  } = e, S = t$(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]), {
    getPrefixCls: D,
    autoInsertSpaceInButton: x,
    direction: A,
    button: O
  } = St(xt), B = D("btn", o), [j, T, $] = UB(B), P = St(Si), R = d ?? P, M = St(Up), F = Xt(() => r$(a), [a]), [N, V] = Gt(F.loading), [k, W] = Gt(!1), Q = nn(t, /* @__PURE__ */ _b()), I = Mb.count(h) === 1 && !f && !Ji(i);
  Ft(() => {
    let ge = null;
    F.delay > 0 ? ge = setTimeout(() => {
      ge = null, V(!0);
    }, F.delay) : V(F.loading);
    function be() {
      ge && (clearTimeout(ge), ge = null);
    }
    return be;
  }, [F]), Ft(() => {
    if (!Q || !Q.current || x === !1)
      return;
    const ge = Q.current.textContent;
    I && cc(ge) ? k || W(!0) : k && W(!1);
  }, [Q]);
  const z = (ge) => {
    const {
      onClick: be
    } = e;
    if (N || R) {
      ge.preventDefault();
      return;
    }
    be == null || be(ge);
  };
  if (process.env.NODE_ENV !== "production") {
    const ge = sr("Button");
    process.env.NODE_ENV !== "production" && ge(!(typeof f == "string" && f.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${f}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && ge(!(m && Ji(i)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const H = x !== !1, {
    compactSize: G,
    compactItemClassnames: re
  } = fu(B, A), te = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, de = Oi((ge) => {
    var be, ye;
    return (ye = (be = l ?? G) !== null && be !== void 0 ? be : M) !== null && ye !== void 0 ? ye : ge;
  }), se = de && te[de] || "", he = N ? "loading" : f, ce = Tr(S, ["navigate"]), q = ne(B, T, $, {
    [`${B}-${u}`]: u !== "default" && u,
    [`${B}-${i}`]: i,
    [`${B}-${se}`]: se,
    [`${B}-icon-only`]: !h && h !== 0 && !!he,
    [`${B}-background-ghost`]: m && !Ji(i),
    [`${B}-loading`]: N,
    [`${B}-two-chinese-chars`]: k && H && !N,
    [`${B}-block`]: b,
    [`${B}-dangerous`]: !!s,
    [`${B}-rtl`]: A === "rtl"
  }, re, v, p, O == null ? void 0 : O.className), pe = Object.assign(Object.assign({}, O == null ? void 0 : O.style), w), De = ne(y == null ? void 0 : y.icon, (r = O == null ? void 0 : O.classNames) === null || r === void 0 ? void 0 : r.icon), Ce = Object.assign(Object.assign({}, (c == null ? void 0 : c.icon) || {}), ((n = O == null ? void 0 : O.styles) === null || n === void 0 ? void 0 : n.icon) || {}), Ee = f && !N ? /* @__PURE__ */ Z.createElement(Gp, {
    prefixCls: B,
    className: De,
    style: Ce
  }, f) : /* @__PURE__ */ Z.createElement(RB, {
    existIcon: !!f,
    prefixCls: B,
    loading: !!N
  }), oe = h || h === 0 ? $B(h, I && H) : null;
  if (ce.href !== void 0)
    return j(/* @__PURE__ */ Z.createElement("a", Object.assign({}, ce, {
      className: ne(q, {
        [`${B}-disabled`]: R
      }),
      href: R ? void 0 : ce.href,
      style: pe,
      onClick: z,
      ref: Q,
      tabIndex: R ? -1 : 0
    }), Ee, oe));
  let ue = /* @__PURE__ */ Z.createElement("button", Object.assign({}, S, {
    type: E,
    className: q,
    style: pe,
    onClick: z,
    disabled: R,
    ref: Q
  }), Ee, oe, !!re && /* @__PURE__ */ Z.createElement(e$, {
    key: "compact",
    prefixCls: B
  }));
  return Ji(i) || (ue = /* @__PURE__ */ Z.createElement(Wp, {
    component: "Button",
    disabled: !!N
  }, ue)), j(ue);
}, du = /* @__PURE__ */ hr(n$);
process.env.NODE_ENV !== "production" && (du.displayName = "Button");
du.Group = AB;
du.__ANT_BUTTON = !0;
const tn = du;
var e0 = /* @__PURE__ */ g.createContext(null), Zv = [];
function a$(e, t) {
  var r = g.useState(function() {
    if (!gr())
      return null;
    var h = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && h.setAttribute("data-debug", t), h;
  }), n = ie(r, 1), a = n[0], o = g.useRef(!1), i = g.useContext(e0), s = g.useState(Zv), u = ie(s, 2), l = u[0], c = u[1], d = i || (o.current ? void 0 : function(h) {
    c(function(f) {
      var m = [h].concat(Me(f));
      return m;
    });
  });
  function v() {
    a.parentElement || document.body.appendChild(a), o.current = !0;
  }
  function p() {
    var h;
    (h = a.parentElement) === null || h === void 0 || h.removeChild(a), o.current = !1;
  }
  return Lt(function() {
    return e ? i ? i(v) : v() : p(), p;
  }, [e]), Lt(function() {
    l.length && (l.forEach(function(h) {
      return h();
    }), c(Zv));
  }, [l]), [a, d];
}
function o$(e) {
  var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), r = document.createElement("div");
  r.id = t;
  var n = r.style;
  n.position = "absolute", n.left = "0", n.top = "0", n.width = "100px", n.height = "100px", n.overflow = "scroll";
  var a, o;
  if (e) {
    var i = getComputedStyle(e);
    n.scrollbarColor = i.scrollbarColor, n.scrollbarWidth = i.scrollbarWidth;
    var s = getComputedStyle(e, "::-webkit-scrollbar"), u = parseInt(s.width, 10), l = parseInt(s.height, 10);
    try {
      var c = u ? "width: ".concat(s.width, ";") : "", d = l ? "height: ".concat(s.height, ";") : "";
      Fn(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(c, `
`).concat(d, `
}`), t);
    } catch (h) {
      console.error(h), a = u, o = l;
    }
  }
  document.body.appendChild(r);
  var v = e && a && !isNaN(a) ? a : r.offsetWidth - r.clientWidth, p = e && o && !isNaN(o) ? o : r.offsetHeight - r.clientHeight;
  return document.body.removeChild(r), di(t), {
    width: v,
    height: p
  };
}
function i$(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : o$(e);
}
function s$() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var u$ = "rc-util-locker-".concat(Date.now()), Qv = 0;
function l$(e) {
  var t = !!e, r = g.useState(function() {
    return Qv += 1, "".concat(u$, "_").concat(Qv);
  }), n = ie(r, 1), a = n[0];
  Lt(function() {
    if (t) {
      var o = i$(document.body).width, i = s$();
      Fn(`
html body {
  overflow-y: hidden;
  `.concat(i ? "width: calc(100% - ".concat(o, "px);") : "", `
}`), a);
    } else
      di(a);
    return function() {
      di(a);
    };
  }, [t, a]);
}
var Jv = !1;
function c$(e) {
  return typeof e == "boolean" && (Jv = e), Jv;
}
var eg = function(t) {
  return t === !1 ? !1 : !gr() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, Ef = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var r = e.open, n = e.autoLock, a = e.getContainer, o = e.debug, i = e.autoDestroy, s = i === void 0 ? !0 : i, u = e.children, l = g.useState(r), c = ie(l, 2), d = c[0], v = c[1], p = d || r;
  process.env.NODE_ENV !== "production" && bt(gr() || !r, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), g.useEffect(function() {
    (s || r) && v(r);
  }, [r, s]);
  var h = g.useState(function() {
    return eg(a);
  }), f = ie(h, 2), m = f[0], b = f[1];
  g.useEffect(function() {
    var T = eg(a);
    b(T ?? null);
  });
  var E = a$(p && !m, o), y = ie(E, 2), w = y[0], S = y[1], D = m ?? w;
  l$(n && r && gr() && (D === w || D === document.body));
  var x = null;
  if (u && ra(u) && t) {
    var A = u;
    x = A.ref;
  }
  var O = Ei(x, t);
  if (!p || !gr() || m === void 0)
    return null;
  var B = D === !1 || c$(), j = u;
  return t && (j = /* @__PURE__ */ g.cloneElement(u, {
    ref: O
  })), /* @__PURE__ */ g.createElement(e0.Provider, {
    value: S
  }, B ? j : /* @__PURE__ */ kb(j, D));
});
process.env.NODE_ENV !== "production" && (Ef.displayName = "Portal");
function f$() {
  var e = Y({}, g);
  return e.useId;
}
var tg = 0, rg = f$();
const d$ = rg ? (
  // Use React `useId`
  function(t) {
    var r = rg();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : r);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var r = g.useState("ssr-id"), n = ie(r, 2), a = n[0], o = n[1];
    return g.useEffect(function() {
      var i = tg;
      tg += 1, o("rc_unique_".concat(i));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : a);
  }
);
var t0 = function(t) {
  if (gr() && window.document.documentElement) {
    var r = Array.isArray(t) ? t : [t], n = window.document.documentElement;
    return r.some(function(a) {
      return a in n.style;
    });
  }
  return !1;
}, v$ = function(t, r) {
  if (!t0(t))
    return !1;
  var n = document.createElement("div"), a = n.style[t];
  return n.style[t] = r, n.style[t] !== a;
};
function ng(e, t) {
  return !Array.isArray(e) && t !== void 0 ? v$(e, t) : t0(e);
}
var pa = "RC_FORM_INTERNAL_HOOKS", Ct = function() {
  bt(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, Co = /* @__PURE__ */ g.createContext({
  getFieldValue: Ct,
  getFieldsValue: Ct,
  getFieldError: Ct,
  getFieldWarning: Ct,
  getFieldsError: Ct,
  isFieldsTouched: Ct,
  isFieldTouched: Ct,
  isFieldValidating: Ct,
  isFieldsValidating: Ct,
  resetFields: Ct,
  setFields: Ct,
  setFieldValue: Ct,
  setFieldsValue: Ct,
  validateFields: Ct,
  submit: Ct,
  getInternalHooks: function() {
    return Ct(), {
      dispatch: Ct,
      initEntityValue: Ct,
      registerField: Ct,
      useSubscribe: Ct,
      setInitialValues: Ct,
      destroyForm: Ct,
      setCallbacks: Ct,
      registerWatch: Ct,
      getFields: Ct,
      setValidateMessages: Ct,
      setPreserve: Ct,
      getInitialValue: Ct
    };
  }
}), _s = /* @__PURE__ */ g.createContext(null);
function fc(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function g$(e) {
  return e && !!e._init;
}
function ba() {
  return ba = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ba.apply(this, arguments);
}
function m$(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, pi(e, t);
}
function dc(e) {
  return dc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, dc(e);
}
function pi(e, t) {
  return pi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, pi(e, t);
}
function h$() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ps(e, t, r) {
  return h$() ? ps = Reflect.construct.bind() : ps = function(a, o, i) {
    var s = [null];
    s.push.apply(s, o);
    var u = Function.bind.apply(a, s), l = new u();
    return i && pi(l, i.prototype), l;
  }, ps.apply(null, arguments);
}
function p$(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function vc(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return vc = function(n) {
    if (n === null || !p$(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(n))
        return t.get(n);
      t.set(n, a);
    }
    function a() {
      return ps(n, arguments, dc(this).constructor);
    }
    return a.prototype = Object.create(n.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), pi(a, n);
  }, vc(e);
}
var b$ = /%[sdj%]/g, r0 = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (r0 = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, r);
});
function gc(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(r) {
    var n = r.field;
    t[n] = t[n] || [], t[n].push(r);
  }), t;
}
function Fr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var a = 0, o = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var i = e.replace(b$, function(s) {
      if (s === "%%")
        return "%";
      if (a >= o)
        return s;
      switch (s) {
        case "%s":
          return String(r[a++]);
        case "%d":
          return Number(r[a++]);
        case "%j":
          try {
            return JSON.stringify(r[a++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return i;
  }
  return e;
}
function y$(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Zt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || y$(t) && typeof e == "string" && !e);
}
function C$(e, t, r) {
  var n = [], a = 0, o = e.length;
  function i(s) {
    n.push.apply(n, s || []), a++, a === o && r(n);
  }
  e.forEach(function(s) {
    t(s, i);
  });
}
function ag(e, t, r) {
  var n = 0, a = e.length;
  function o(i) {
    if (i && i.length) {
      r(i);
      return;
    }
    var s = n;
    n = n + 1, s < a ? t(e[s], o) : r([]);
  }
  o([]);
}
function E$(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, e[r] || []);
  }), t;
}
var og = /* @__PURE__ */ function(e) {
  m$(t, e);
  function t(r, n) {
    var a;
    return a = e.call(this, "Async Validation Error") || this, a.errors = r, a.fields = n, a;
  }
  return t;
}(/* @__PURE__ */ vc(Error));
function w$(e, t, r, n, a) {
  if (t.first) {
    var o = new Promise(function(v, p) {
      var h = function(b) {
        return n(b), b.length ? p(new og(b, gc(b))) : v(a);
      }, f = E$(e);
      ag(f, r, h);
    });
    return o.catch(function(v) {
      return v;
    }), o;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), u = s.length, l = 0, c = [], d = new Promise(function(v, p) {
    var h = function(m) {
      if (c.push.apply(c, m), l++, l === u)
        return n(c), c.length ? p(new og(c, gc(c))) : v(a);
    };
    s.length || (n(c), v(a)), s.forEach(function(f) {
      var m = e[f];
      i.indexOf(f) !== -1 ? ag(m, r, h) : C$(m, r, h);
    });
  });
  return d.catch(function(v) {
    return v;
  }), d;
}
function D$(e) {
  return !!(e && e.message !== void 0);
}
function S$(e, t) {
  for (var r = e, n = 0; n < t.length; n++) {
    if (r == null)
      return r;
    r = r[t[n]];
  }
  return r;
}
function ig(e, t) {
  return function(r) {
    var n;
    return e.fullFields ? n = S$(t, e.fullFields) : n = t[r.field || e.fullField], D$(r) ? (r.field = r.field || e.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || e.fullField
    };
  };
}
function sg(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = t[r];
        typeof n == "object" && typeof e[r] == "object" ? e[r] = ba({}, e[r], n) : e[r] = n;
      }
  }
  return e;
}
var n0 = function(t, r, n, a, o, i) {
  t.required && (!n.hasOwnProperty(t.field) || Zt(r, i || t.type)) && a.push(Fr(o.messages.required, t.fullField));
}, x$ = function(t, r, n, a, o) {
  (/^\s+$/.test(r) || r === "") && a.push(Fr(o.messages.whitespace, t.fullField));
}, es, O$ = function() {
  if (es)
    return es;
  var e = "[a-fA-F\\d:]", t = function(w) {
    return w && w.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", n = "[a-fA-F\\d]{1,4}", a = (`
(?:
(?:` + n + ":){7}(?:" + n + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + n + ":){6}(?:" + r + "|:" + n + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + n + ":){5}(?::" + r + "|(?::" + n + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + n + ":){4}(?:(?::" + n + "){0,1}:" + r + "|(?::" + n + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + n + ":){3}(?:(?::" + n + "){0,2}:" + r + "|(?::" + n + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + n + ":){2}(?:(?::" + n + "){0,3}:" + r + "|(?::" + n + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + n + ":){1}(?:(?::" + n + "){0,4}:" + r + "|(?::" + n + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + n + "){0,5}:" + r + "|(?::" + n + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), o = new RegExp("(?:^" + r + "$)|(?:^" + a + "$)"), i = new RegExp("^" + r + "$"), s = new RegExp("^" + a + "$"), u = function(w) {
    return w && w.exact ? o : new RegExp("(?:" + t(w) + r + t(w) + ")|(?:" + t(w) + a + t(w) + ")", "g");
  };
  u.v4 = function(y) {
    return y && y.exact ? i : new RegExp("" + t(y) + r + t(y), "g");
  }, u.v6 = function(y) {
    return y && y.exact ? s : new RegExp("" + t(y) + a + t(y), "g");
  };
  var l = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", d = u.v4().source, v = u.v6().source, p = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", h = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", f = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", m = "(?::\\d{2,5})?", b = '(?:[/?#][^\\s"]*)?', E = "(?:" + l + "|www\\.)" + c + "(?:localhost|" + d + "|" + v + "|" + p + h + f + ")" + m + b;
  return es = new RegExp("(?:^" + E + "$)", "i"), es;
}, ug = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Ko = {
  integer: function(t) {
    return Ko.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Ko.number(t) && !Ko.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !Ko.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(ug.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(O$());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(ug.hex);
  }
}, A$ = function(t, r, n, a, o) {
  if (t.required && r === void 0) {
    n0(t, r, n, a, o);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? Ko[s](r) || a.push(Fr(o.messages.types[s], t.fullField, t.type)) : s && typeof r !== t.type && a.push(Fr(o.messages.types[s], t.fullField, t.type));
}, B$ = function(t, r, n, a, o) {
  var i = typeof t.len == "number", s = typeof t.min == "number", u = typeof t.max == "number", l = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = r, d = null, v = typeof r == "number", p = typeof r == "string", h = Array.isArray(r);
  if (v ? d = "number" : p ? d = "string" : h && (d = "array"), !d)
    return !1;
  h && (c = r.length), p && (c = r.replace(l, "_").length), i ? c !== t.len && a.push(Fr(o.messages[d].len, t.fullField, t.len)) : s && !u && c < t.min ? a.push(Fr(o.messages[d].min, t.fullField, t.min)) : u && !s && c > t.max ? a.push(Fr(o.messages[d].max, t.fullField, t.max)) : s && u && (c < t.min || c > t.max) && a.push(Fr(o.messages[d].range, t.fullField, t.min, t.max));
}, za = "enum", $$ = function(t, r, n, a, o) {
  t[za] = Array.isArray(t[za]) ? t[za] : [], t[za].indexOf(r) === -1 && a.push(Fr(o.messages[za], t.fullField, t[za].join(", ")));
}, F$ = function(t, r, n, a, o) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || a.push(Fr(o.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(r) || a.push(Fr(o.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, ot = {
  required: n0,
  whitespace: x$,
  type: A$,
  range: B$,
  enum: $$,
  pattern: F$
}, P$ = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Zt(r, "string") && !t.required)
      return n();
    ot.required(t, r, a, i, o, "string"), Zt(r, "string") || (ot.type(t, r, a, i, o), ot.range(t, r, a, i, o), ot.pattern(t, r, a, i, o), t.whitespace === !0 && ot.whitespace(t, r, a, i, o));
  }
  n(i);
}, R$ = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Zt(r) && !t.required)
      return n();
    ot.required(t, r, a, i, o), r !== void 0 && ot.type(t, r, a, i, o);
  }
  n(i);
}, T$ = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (r === "" && (r = void 0), Zt(r) && !t.required)
      return n();
    ot.required(t, r, a, i, o), r !== void 0 && (ot.type(t, r, a, i, o), ot.range(t, r, a, i, o));
  }
  n(i);
}, N$ = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Zt(r) && !t.required)
      return n();
    ot.required(t, r, a, i, o), r !== void 0 && ot.type(t, r, a, i, o);
  }
  n(i);
}, I$ = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Zt(r) && !t.required)
      return n();
    ot.required(t, r, a, i, o), Zt(r) || ot.type(t, r, a, i, o);
  }
  n(i);
}, M$ = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Zt(r) && !t.required)
      return n();
    ot.required(t, r, a, i, o), r !== void 0 && (ot.type(t, r, a, i, o), ot.range(t, r, a, i, o));
  }
  n(i);
}, _$ = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Zt(r) && !t.required)
      return n();
    ot.required(t, r, a, i, o), r !== void 0 && (ot.type(t, r, a, i, o), ot.range(t, r, a, i, o));
  }
  n(i);
}, j$ = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (r == null && !t.required)
      return n();
    ot.required(t, r, a, i, o, "array"), r != null && (ot.type(t, r, a, i, o), ot.range(t, r, a, i, o));
  }
  n(i);
}, L$ = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Zt(r) && !t.required)
      return n();
    ot.required(t, r, a, i, o), r !== void 0 && ot.type(t, r, a, i, o);
  }
  n(i);
}, k$ = "enum", z$ = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Zt(r) && !t.required)
      return n();
    ot.required(t, r, a, i, o), r !== void 0 && ot[k$](t, r, a, i, o);
  }
  n(i);
}, V$ = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Zt(r, "string") && !t.required)
      return n();
    ot.required(t, r, a, i, o), Zt(r, "string") || ot.pattern(t, r, a, i, o);
  }
  n(i);
}, H$ = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Zt(r, "date") && !t.required)
      return n();
    if (ot.required(t, r, a, i, o), !Zt(r, "date")) {
      var u;
      r instanceof Date ? u = r : u = new Date(r), ot.type(t, u, a, i, o), u && ot.range(t, u.getTime(), a, i, o);
    }
  }
  n(i);
}, W$ = function(t, r, n, a, o) {
  var i = [], s = Array.isArray(r) ? "array" : typeof r;
  ot.required(t, r, a, i, o, s), n(i);
}, tl = function(t, r, n, a, o) {
  var i = t.type, s = [], u = t.required || !t.required && a.hasOwnProperty(t.field);
  if (u) {
    if (Zt(r, i) && !t.required)
      return n();
    ot.required(t, r, a, s, o, i), Zt(r, i) || ot.type(t, r, a, s, o);
  }
  n(s);
}, K$ = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Zt(r) && !t.required)
      return n();
    ot.required(t, r, a, i, o);
  }
  n(i);
}, ei = {
  string: P$,
  method: R$,
  number: T$,
  boolean: N$,
  regexp: I$,
  integer: M$,
  float: _$,
  array: j$,
  object: L$,
  enum: z$,
  pattern: V$,
  date: H$,
  url: tl,
  hex: tl,
  email: tl,
  required: W$,
  any: K$
};
function mc() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var hc = mc(), Ai = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = hc, this.define(r);
  }
  var t = e.prototype;
  return t.define = function(n) {
    var a = this;
    if (!n)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof n != "object" || Array.isArray(n))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(n).forEach(function(o) {
      var i = n[o];
      a.rules[o] = Array.isArray(i) ? i : [i];
    });
  }, t.messages = function(n) {
    return n && (this._messages = sg(mc(), n)), this._messages;
  }, t.validate = function(n, a, o) {
    var i = this;
    a === void 0 && (a = {}), o === void 0 && (o = function() {
    });
    var s = n, u = a, l = o;
    if (typeof u == "function" && (l = u, u = {}), !this.rules || Object.keys(this.rules).length === 0)
      return l && l(null, s), Promise.resolve(s);
    function c(f) {
      var m = [], b = {};
      function E(w) {
        if (Array.isArray(w)) {
          var S;
          m = (S = m).concat.apply(S, w);
        } else
          m.push(w);
      }
      for (var y = 0; y < f.length; y++)
        E(f[y]);
      m.length ? (b = gc(m), l(m, b)) : l(null, s);
    }
    if (u.messages) {
      var d = this.messages();
      d === hc && (d = mc()), sg(d, u.messages), u.messages = d;
    } else
      u.messages = this.messages();
    var v = {}, p = u.keys || Object.keys(this.rules);
    p.forEach(function(f) {
      var m = i.rules[f], b = s[f];
      m.forEach(function(E) {
        var y = E;
        typeof y.transform == "function" && (s === n && (s = ba({}, s)), b = s[f] = y.transform(b)), typeof y == "function" ? y = {
          validator: y
        } : y = ba({}, y), y.validator = i.getValidationMethod(y), y.validator && (y.field = f, y.fullField = y.fullField || f, y.type = i.getType(y), v[f] = v[f] || [], v[f].push({
          rule: y,
          value: b,
          source: s,
          field: f
        }));
      });
    });
    var h = {};
    return w$(v, u, function(f, m) {
      var b = f.rule, E = (b.type === "object" || b.type === "array") && (typeof b.fields == "object" || typeof b.defaultField == "object");
      E = E && (b.required || !b.required && f.value), b.field = f.field;
      function y(D, x) {
        return ba({}, x, {
          fullField: b.fullField + "." + D,
          fullFields: b.fullFields ? [].concat(b.fullFields, [D]) : [D]
        });
      }
      function w(D) {
        D === void 0 && (D = []);
        var x = Array.isArray(D) ? D : [D];
        !u.suppressWarning && x.length && e.warning("async-validator:", x), x.length && b.message !== void 0 && (x = [].concat(b.message));
        var A = x.map(ig(b, s));
        if (u.first && A.length)
          return h[b.field] = 1, m(A);
        if (!E)
          m(A);
        else {
          if (b.required && !f.value)
            return b.message !== void 0 ? A = [].concat(b.message).map(ig(b, s)) : u.error && (A = [u.error(b, Fr(u.messages.required, b.field))]), m(A);
          var O = {};
          b.defaultField && Object.keys(f.value).map(function(T) {
            O[T] = b.defaultField;
          }), O = ba({}, O, f.rule.fields);
          var B = {};
          Object.keys(O).forEach(function(T) {
            var $ = O[T], P = Array.isArray($) ? $ : [$];
            B[T] = P.map(y.bind(null, T));
          });
          var j = new e(B);
          j.messages(u.messages), f.rule.options && (f.rule.options.messages = u.messages, f.rule.options.error = u.error), j.validate(f.value, f.rule.options || u, function(T) {
            var $ = [];
            A && A.length && $.push.apply($, A), T && T.length && $.push.apply($, T), m($.length ? $ : null);
          });
        }
      }
      var S;
      if (b.asyncValidator)
        S = b.asyncValidator(b, f.value, w, f.source, u);
      else if (b.validator) {
        try {
          S = b.validator(b, f.value, w, f.source, u);
        } catch (D) {
          console.error == null || console.error(D), u.suppressValidatorError || setTimeout(function() {
            throw D;
          }, 0), w(D.message);
        }
        S === !0 ? w() : S === !1 ? w(typeof b.message == "function" ? b.message(b.fullField || b.field) : b.message || (b.fullField || b.field) + " fails") : S instanceof Array ? w(S) : S instanceof Error && w(S.message);
      }
      S && S.then && S.then(function() {
        return w();
      }, function(D) {
        return w(D);
      });
    }, function(f) {
      c(f);
    }, s);
  }, t.getType = function(n) {
    if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !ei.hasOwnProperty(n.type))
      throw new Error(Fr("Unknown rule type %s", n.type));
    return n.type || "string";
  }, t.getValidationMethod = function(n) {
    if (typeof n.validator == "function")
      return n.validator;
    var a = Object.keys(n), o = a.indexOf("message");
    return o !== -1 && a.splice(o, 1), a.length === 1 && a[0] === "required" ? ei.required : ei[this.getType(n)] || void 0;
  }, e;
}();
Ai.register = function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  ei[t] = r;
};
Ai.warning = r0;
Ai.messages = hc;
Ai.validators = ei;
var Or = "'${name}' is not a valid ${type}", a0 = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: Or,
    method: Or,
    array: Or,
    object: Or,
    number: Or,
    date: Or,
    boolean: Or,
    integer: Or,
    float: Or,
    regexp: Or,
    email: Or,
    url: Or,
    hex: Or
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}, lg = Ai;
function q$(e, t) {
  return e.replace(/\$\{\w+\}/g, function(r) {
    var n = r.slice(2, -1);
    return t[n];
  });
}
var cg = "CODE_LOGIC_ERROR";
function pc(e, t, r, n, a) {
  return bc.apply(this, arguments);
}
function bc() {
  return bc = Pa(/* @__PURE__ */ mr().mark(function e(t, r, n, a, o) {
    var i, s, u, l, c, d, v, p, h;
    return mr().wrap(function(m) {
      for (; ; )
        switch (m.prev = m.next) {
          case 0:
            return i = Y({}, n), delete i.ruleIndex, lg.warning = function() {
            }, i.validator && (s = i.validator, i.validator = function() {
              try {
                return s.apply(void 0, arguments);
              } catch (b) {
                return console.error(b), Promise.reject(cg);
              }
            }), u = null, i && i.type === "array" && i.defaultField && (u = i.defaultField, delete i.defaultField), l = new lg(K({}, t, [i])), c = ro(a0, a.validateMessages), l.messages(c), d = [], m.prev = 10, m.next = 13, Promise.resolve(l.validate(K({}, t, r), Y({}, a)));
          case 13:
            m.next = 18;
            break;
          case 15:
            m.prev = 15, m.t0 = m.catch(10), m.t0.errors && (d = m.t0.errors.map(function(b, E) {
              var y = b.message, w = y === cg ? c.default : y;
              return /* @__PURE__ */ g.isValidElement(w) ? (
                // Wrap ReactNode with `key`
                /* @__PURE__ */ g.cloneElement(w, {
                  key: "error_".concat(E)
                })
              ) : w;
            }));
          case 18:
            if (!(!d.length && u)) {
              m.next = 23;
              break;
            }
            return m.next = 21, Promise.all(r.map(function(b, E) {
              return pc("".concat(t, ".").concat(E), b, u, a, o);
            }));
          case 21:
            return v = m.sent, m.abrupt("return", v.reduce(function(b, E) {
              return [].concat(Me(b), Me(E));
            }, []));
          case 23:
            return p = Y(Y({}, n), {}, {
              name: t,
              enum: (n.enum || []).join(", ")
            }, o), h = d.map(function(b) {
              return typeof b == "string" ? q$(b, p) : b;
            }), m.abrupt("return", h);
          case 26:
          case "end":
            return m.stop();
        }
    }, e, null, [[10, 15]]);
  })), bc.apply(this, arguments);
}
function U$(e, t, r, n, a, o) {
  var i = e.join("."), s = r.map(function(c, d) {
    var v = c.validator, p = Y(Y({}, c), {}, {
      ruleIndex: d
    });
    return v && (p.validator = function(h, f, m) {
      var b = !1, E = function() {
        for (var S = arguments.length, D = new Array(S), x = 0; x < S; x++)
          D[x] = arguments[x];
        Promise.resolve().then(function() {
          bt(!b, "Your validator function has already return a promise. `callback` will be ignored."), b || m.apply(void 0, D);
        });
      }, y = v(h, f, E);
      b = y && typeof y.then == "function" && typeof y.catch == "function", bt(b, "`callback` is deprecated. Please return a promise instead."), b && y.then(function() {
        m();
      }).catch(function(w) {
        m(w || " ");
      });
    }), p;
  }).sort(function(c, d) {
    var v = c.warningOnly, p = c.ruleIndex, h = d.warningOnly, f = d.ruleIndex;
    return !!v == !!h ? p - f : v ? 1 : -1;
  }), u;
  if (a === !0)
    u = new Promise(/* @__PURE__ */ function() {
      var c = Pa(/* @__PURE__ */ mr().mark(function d(v, p) {
        var h, f, m;
        return mr().wrap(function(E) {
          for (; ; )
            switch (E.prev = E.next) {
              case 0:
                h = 0;
              case 1:
                if (!(h < s.length)) {
                  E.next = 12;
                  break;
                }
                return f = s[h], E.next = 5, pc(i, t, f, n, o);
              case 5:
                if (m = E.sent, !m.length) {
                  E.next = 9;
                  break;
                }
                return p([{
                  errors: m,
                  rule: f
                }]), E.abrupt("return");
              case 9:
                h += 1, E.next = 1;
                break;
              case 12:
                v([]);
              case 13:
              case "end":
                return E.stop();
            }
        }, d);
      }));
      return function(d, v) {
        return c.apply(this, arguments);
      };
    }());
  else {
    var l = s.map(function(c) {
      return pc(i, t, c, n, o).then(function(d) {
        return {
          errors: d,
          rule: c
        };
      });
    });
    u = (a ? X$(l) : G$(l)).then(function(c) {
      return Promise.reject(c);
    });
  }
  return u.catch(function(c) {
    return c;
  }), u;
}
function G$(e) {
  return yc.apply(this, arguments);
}
function yc() {
  return yc = Pa(/* @__PURE__ */ mr().mark(function e(t) {
    return mr().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.all(t).then(function(a) {
              var o, i = (o = []).concat.apply(o, Me(a));
              return i;
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), yc.apply(this, arguments);
}
function X$(e) {
  return Cc.apply(this, arguments);
}
function Cc() {
  return Cc = Pa(/* @__PURE__ */ mr().mark(function e(t) {
    var r;
    return mr().wrap(function(a) {
      for (; ; )
        switch (a.prev = a.next) {
          case 0:
            return r = 0, a.abrupt("return", new Promise(function(o) {
              t.forEach(function(i) {
                i.then(function(s) {
                  s.errors.length && o([s]), r += 1, r === t.length && o([]);
                });
              });
            }));
          case 2:
          case "end":
            return a.stop();
        }
    }, e);
  })), Cc.apply(this, arguments);
}
function zt(e) {
  return fc(e);
}
function fg(e, t) {
  var r = {};
  return t.forEach(function(n) {
    var a = vn(e, n);
    r = Yr(r, n, a);
  }), r;
}
function so(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(n) {
    return o0(t, n, r);
  });
}
function o0(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !r && e.length !== t.length ? !1 : t.every(function(n, a) {
    return e[a] === n;
  });
}
function Y$(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || lt(e) !== "object" || lt(t) !== "object")
    return !1;
  var r = Object.keys(e), n = Object.keys(t), a = new Set([].concat(r, n));
  return Me(a).every(function(o) {
    var i = e[o], s = t[o];
    return typeof i == "function" && typeof s == "function" ? !0 : i === s;
  });
}
function Z$(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && lt(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function dg(e, t, r) {
  var n = e.length;
  if (t < 0 || t >= n || r < 0 || r >= n)
    return e;
  var a = e[t], o = t - r;
  return o > 0 ? [].concat(Me(e.slice(0, r)), [a], Me(e.slice(r, t)), Me(e.slice(t + 1, n))) : o < 0 ? [].concat(Me(e.slice(0, t)), Me(e.slice(t + 1, r + 1)), [a], Me(e.slice(r + 1, n))) : e;
}
var Q$ = ["name"], Mr = [];
function vg(e, t, r, n, a, o) {
  return typeof e == "function" ? e(t, r, "source" in o ? {
    source: o.source
  } : {}) : n !== a;
}
var wf = /* @__PURE__ */ function(e) {
  $a(r, e);
  var t = wi(r);
  function r(n) {
    var a;
    if (wr(this, r), a = t.call(this, n), K(ft(a), "state", {
      resetCount: 0
    }), K(ft(a), "cancelRegisterFunc", null), K(ft(a), "mounted", !1), K(ft(a), "touched", !1), K(ft(a), "dirty", !1), K(ft(a), "validatePromise", void 0), K(ft(a), "prevValidating", void 0), K(ft(a), "errors", Mr), K(ft(a), "warnings", Mr), K(ft(a), "cancelRegister", function() {
      var u = a.props, l = u.preserve, c = u.isListField, d = u.name;
      a.cancelRegisterFunc && a.cancelRegisterFunc(c, l, zt(d)), a.cancelRegisterFunc = null;
    }), K(ft(a), "getNamePath", function() {
      var u = a.props, l = u.name, c = u.fieldContext, d = c.prefixName, v = d === void 0 ? [] : d;
      return l !== void 0 ? [].concat(Me(v), Me(l)) : [];
    }), K(ft(a), "getRules", function() {
      var u = a.props, l = u.rules, c = l === void 0 ? [] : l, d = u.fieldContext;
      return c.map(function(v) {
        return typeof v == "function" ? v(d) : v;
      });
    }), K(ft(a), "refresh", function() {
      a.mounted && a.setState(function(u) {
        var l = u.resetCount;
        return {
          resetCount: l + 1
        };
      });
    }), K(ft(a), "metaCache", null), K(ft(a), "triggerMetaEvent", function(u) {
      var l = a.props.onMetaChange;
      if (l) {
        var c = Y(Y({}, a.getMeta()), {}, {
          destroy: u
        });
        go(a.metaCache, c) || l(c), a.metaCache = c;
      } else
        a.metaCache = null;
    }), K(ft(a), "onStoreChange", function(u, l, c) {
      var d = a.props, v = d.shouldUpdate, p = d.dependencies, h = p === void 0 ? [] : p, f = d.onReset, m = c.store, b = a.getNamePath(), E = a.getValue(u), y = a.getValue(m), w = l && so(l, b);
      switch (c.type === "valueUpdate" && c.source === "external" && E !== y && (a.touched = !0, a.dirty = !0, a.validatePromise = null, a.errors = Mr, a.warnings = Mr, a.triggerMetaEvent()), c.type) {
        case "reset":
          if (!l || w) {
            a.touched = !1, a.dirty = !1, a.validatePromise = void 0, a.errors = Mr, a.warnings = Mr, a.triggerMetaEvent(), f == null || f(), a.refresh();
            return;
          }
          break;
        case "remove": {
          if (v) {
            a.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var S = c.data;
          if (w) {
            "touched" in S && (a.touched = S.touched), "validating" in S && !("originRCField" in S) && (a.validatePromise = S.validating ? Promise.resolve([]) : null), "errors" in S && (a.errors = S.errors || Mr), "warnings" in S && (a.warnings = S.warnings || Mr), a.dirty = !0, a.triggerMetaEvent(), a.reRender();
            return;
          } else if ("value" in S && so(l, b, !0)) {
            a.reRender();
            return;
          }
          if (v && !b.length && vg(v, u, m, E, y, c)) {
            a.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var D = h.map(zt);
          if (D.some(function(x) {
            return so(c.relatedFields, x);
          })) {
            a.reRender();
            return;
          }
          break;
        }
        default:
          if (w || (!h.length || b.length || v) && vg(v, u, m, E, y, c)) {
            a.reRender();
            return;
          }
          break;
      }
      v === !0 && a.reRender();
    }), K(ft(a), "validateRules", function(u) {
      var l = a.getNamePath(), c = a.getValue(), d = u || {}, v = d.triggerName, p = d.validateOnly, h = p === void 0 ? !1 : p, f = Promise.resolve().then(/* @__PURE__ */ Pa(/* @__PURE__ */ mr().mark(function m() {
        var b, E, y, w, S, D, x;
        return mr().wrap(function(O) {
          for (; ; )
            switch (O.prev = O.next) {
              case 0:
                if (a.mounted) {
                  O.next = 2;
                  break;
                }
                return O.abrupt("return", []);
              case 2:
                if (b = a.props, E = b.validateFirst, y = E === void 0 ? !1 : E, w = b.messageVariables, S = b.validateDebounce, D = a.getRules(), v && (D = D.filter(function(B) {
                  return B;
                }).filter(function(B) {
                  var j = B.validateTrigger;
                  if (!j)
                    return !0;
                  var T = fc(j);
                  return T.includes(v);
                })), !(S && v)) {
                  O.next = 10;
                  break;
                }
                return O.next = 8, new Promise(function(B) {
                  setTimeout(B, S);
                });
              case 8:
                if (a.validatePromise === f) {
                  O.next = 10;
                  break;
                }
                return O.abrupt("return", []);
              case 10:
                return x = U$(l, c, D, u, y, w), x.catch(function(B) {
                  return B;
                }).then(function() {
                  var B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Mr;
                  if (a.validatePromise === f) {
                    var j;
                    a.validatePromise = null;
                    var T = [], $ = [];
                    (j = B.forEach) === null || j === void 0 || j.call(B, function(P) {
                      var R = P.rule.warningOnly, M = P.errors, F = M === void 0 ? Mr : M;
                      R ? $.push.apply($, Me(F)) : T.push.apply(T, Me(F));
                    }), a.errors = T, a.warnings = $, a.triggerMetaEvent(), a.reRender();
                  }
                }), O.abrupt("return", x);
              case 13:
              case "end":
                return O.stop();
            }
        }, m);
      })));
      return h || (a.validatePromise = f, a.dirty = !0, a.errors = Mr, a.warnings = Mr, a.triggerMetaEvent(), a.reRender()), f;
    }), K(ft(a), "isFieldValidating", function() {
      return !!a.validatePromise;
    }), K(ft(a), "isFieldTouched", function() {
      return a.touched;
    }), K(ft(a), "isFieldDirty", function() {
      if (a.dirty || a.props.initialValue !== void 0)
        return !0;
      var u = a.props.fieldContext, l = u.getInternalHooks(pa), c = l.getInitialValue;
      return c(a.getNamePath()) !== void 0;
    }), K(ft(a), "getErrors", function() {
      return a.errors;
    }), K(ft(a), "getWarnings", function() {
      return a.warnings;
    }), K(ft(a), "isListField", function() {
      return a.props.isListField;
    }), K(ft(a), "isList", function() {
      return a.props.isList;
    }), K(ft(a), "isPreserve", function() {
      return a.props.preserve;
    }), K(ft(a), "getMeta", function() {
      a.prevValidating = a.isFieldValidating();
      var u = {
        touched: a.isFieldTouched(),
        validating: a.prevValidating,
        errors: a.errors,
        warnings: a.warnings,
        name: a.getNamePath(),
        validated: a.validatePromise === null
      };
      return u;
    }), K(ft(a), "getOnlyChild", function(u) {
      if (typeof u == "function") {
        var l = a.getMeta();
        return Y(Y({}, a.getOnlyChild(u(a.getControlled(), l, a.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var c = gn(u);
      return c.length !== 1 || !/* @__PURE__ */ g.isValidElement(c[0]) ? {
        child: c,
        isFunction: !1
      } : {
        child: c[0],
        isFunction: !1
      };
    }), K(ft(a), "getValue", function(u) {
      var l = a.props.fieldContext.getFieldsValue, c = a.getNamePath();
      return vn(u || l(!0), c);
    }), K(ft(a), "getControlled", function() {
      var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = a.props, c = l.trigger, d = l.validateTrigger, v = l.getValueFromEvent, p = l.normalize, h = l.valuePropName, f = l.getValueProps, m = l.fieldContext, b = d !== void 0 ? d : m.validateTrigger, E = a.getNamePath(), y = m.getInternalHooks, w = m.getFieldsValue, S = y(pa), D = S.dispatch, x = a.getValue(), A = f || function(T) {
        return K({}, h, T);
      }, O = u[c], B = Y(Y({}, u), A(x));
      B[c] = function() {
        a.touched = !0, a.dirty = !0, a.triggerMetaEvent();
        for (var T, $ = arguments.length, P = new Array($), R = 0; R < $; R++)
          P[R] = arguments[R];
        v ? T = v.apply(void 0, P) : T = Z$.apply(void 0, [h].concat(P)), p && (T = p(T, x, w(!0))), D({
          type: "updateValue",
          namePath: E,
          value: T
        }), O && O.apply(void 0, P);
      };
      var j = fc(b || []);
      return j.forEach(function(T) {
        var $ = B[T];
        B[T] = function() {
          $ && $.apply(void 0, arguments);
          var P = a.props.rules;
          P && P.length && D({
            type: "validateField",
            namePath: E,
            triggerName: T
          });
        };
      }), B;
    }), n.fieldContext) {
      var o = n.fieldContext.getInternalHooks, i = o(pa), s = i.initEntityValue;
      s(ft(a));
    }
    return a;
  }
  return Dr(r, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, o = a.shouldUpdate, i = a.fieldContext;
      if (this.mounted = !0, i) {
        var s = i.getInternalHooks, u = s(pa), l = u.registerField;
        this.cancelRegisterFunc = l(this);
      }
      o === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var a = this.state.resetCount, o = this.props.children, i = this.getOnlyChild(o), s = i.child, u = i.isFunction, l;
      return u ? l = s : /* @__PURE__ */ g.isValidElement(s) ? l = /* @__PURE__ */ g.cloneElement(s, this.getControlled(s.props)) : (bt(!s, "`children` of Field is not validate ReactElement."), l = s), /* @__PURE__ */ g.createElement(g.Fragment, {
        key: a
      }, l);
    }
  }]), r;
}(g.Component);
K(wf, "contextType", Co);
K(wf, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function i0(e) {
  var t = e.name, r = ct(e, Q$), n = g.useContext(Co), a = g.useContext(_s), o = t !== void 0 ? zt(t) : void 0, i = "keep";
  return r.isListField || (i = "_".concat((o || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && r.isListField && o.length <= 1 && bt(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ g.createElement(wf, _e({
    key: i,
    name: o,
    isListField: !!a
  }, r, {
    fieldContext: n
  }));
}
function J$(e) {
  var t = e.name, r = e.initialValue, n = e.children, a = e.rules, o = e.validateTrigger, i = e.isListField, s = g.useContext(Co), u = g.useContext(_s), l = g.useRef({
    keys: [],
    id: 0
  }), c = l.current, d = g.useMemo(function() {
    var f = zt(s.prefixName) || [];
    return [].concat(Me(f), Me(zt(t)));
  }, [s.prefixName, t]), v = g.useMemo(function() {
    return Y(Y({}, s), {}, {
      prefixName: d
    });
  }, [s, d]), p = g.useMemo(function() {
    return {
      getKey: function(m) {
        var b = d.length, E = m[b];
        return [c.keys[E], m.slice(b + 1)];
      }
    };
  }, [d]);
  if (typeof n != "function")
    return bt(!1, "Form.List only accepts function as children."), null;
  var h = function(m, b, E) {
    var y = E.source;
    return y === "internal" ? !1 : m !== b;
  };
  return /* @__PURE__ */ g.createElement(_s.Provider, {
    value: p
  }, /* @__PURE__ */ g.createElement(Co.Provider, {
    value: v
  }, /* @__PURE__ */ g.createElement(i0, {
    name: [],
    shouldUpdate: h,
    rules: a,
    validateTrigger: o,
    initialValue: r,
    isList: !0,
    isListField: i ?? !!u
  }, function(f, m) {
    var b = f.value, E = b === void 0 ? [] : b, y = f.onChange, w = s.getFieldValue, S = function() {
      var O = w(d || []);
      return O || [];
    }, D = {
      add: function(O, B) {
        var j = S();
        B >= 0 && B <= j.length ? (c.keys = [].concat(Me(c.keys.slice(0, B)), [c.id], Me(c.keys.slice(B))), y([].concat(Me(j.slice(0, B)), [O], Me(j.slice(B))))) : (process.env.NODE_ENV !== "production" && (B < 0 || B > j.length) && bt(!1, "The second parameter of the add function should be a valid positive number."), c.keys = [].concat(Me(c.keys), [c.id]), y([].concat(Me(j), [O]))), c.id += 1;
      },
      remove: function(O) {
        var B = S(), j = new Set(Array.isArray(O) ? O : [O]);
        j.size <= 0 || (c.keys = c.keys.filter(function(T, $) {
          return !j.has($);
        }), y(B.filter(function(T, $) {
          return !j.has($);
        })));
      },
      move: function(O, B) {
        if (O !== B) {
          var j = S();
          O < 0 || O >= j.length || B < 0 || B >= j.length || (c.keys = dg(c.keys, O, B), y(dg(j, O, B)));
        }
      }
    }, x = E || [];
    return Array.isArray(x) || (x = [], process.env.NODE_ENV !== "production" && bt(!1, "Current value of '".concat(d.join(" > "), "' is not an array type."))), n(x.map(function(A, O) {
      var B = c.keys[O];
      return B === void 0 && (c.keys[O] = c.id, B = c.keys[O], c.id += 1), {
        name: O,
        key: B,
        isListField: !0
      };
    }), D, m);
  })));
}
function e2(e) {
  var t = !1, r = e.length, n = [];
  return e.length ? new Promise(function(a, o) {
    e.forEach(function(i, s) {
      i.catch(function(u) {
        return t = !0, u;
      }).then(function(u) {
        r -= 1, n[s] = u, !(r > 0) && (t && o(n), a(n));
      });
    });
  }) : Promise.resolve([]);
}
var s0 = "__@field_split__";
function rl(e) {
  return e.map(function(t) {
    return "".concat(lt(t), ":").concat(t);
  }).join(s0);
}
var Va = /* @__PURE__ */ function() {
  function e() {
    wr(this, e), K(this, "kvs", /* @__PURE__ */ new Map());
  }
  return Dr(e, [{
    key: "set",
    value: function(r, n) {
      this.kvs.set(rl(r), n);
    }
  }, {
    key: "get",
    value: function(r) {
      return this.kvs.get(rl(r));
    }
  }, {
    key: "update",
    value: function(r, n) {
      var a = this.get(r), o = n(a);
      o ? this.set(r, o) : this.delete(r);
    }
  }, {
    key: "delete",
    value: function(r) {
      this.kvs.delete(rl(r));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(r) {
      return Me(this.kvs.entries()).map(function(n) {
        var a = ie(n, 2), o = a[0], i = a[1], s = o.split(s0);
        return r({
          key: s.map(function(u) {
            var l = u.match(/^([^:]*):(.*)$/), c = ie(l, 3), d = c[1], v = c[2];
            return d === "number" ? Number(v) : v;
          }),
          value: i
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var r = {};
      return this.map(function(n) {
        var a = n.key, o = n.value;
        return r[a.join(".")] = o, null;
      }), r;
    }
  }]), e;
}(), t2 = ["name"], r2 = /* @__PURE__ */ Dr(function e(t) {
  var r = this;
  wr(this, e), K(this, "formHooked", !1), K(this, "forceRootUpdate", void 0), K(this, "subscribable", !0), K(this, "store", {}), K(this, "fieldEntities", []), K(this, "initialValues", {}), K(this, "callbacks", {}), K(this, "validateMessages", null), K(this, "preserve", null), K(this, "lastValidatePromise", null), K(this, "getForm", function() {
    return {
      getFieldValue: r.getFieldValue,
      getFieldsValue: r.getFieldsValue,
      getFieldError: r.getFieldError,
      getFieldWarning: r.getFieldWarning,
      getFieldsError: r.getFieldsError,
      isFieldsTouched: r.isFieldsTouched,
      isFieldTouched: r.isFieldTouched,
      isFieldValidating: r.isFieldValidating,
      isFieldsValidating: r.isFieldsValidating,
      resetFields: r.resetFields,
      setFields: r.setFields,
      setFieldValue: r.setFieldValue,
      setFieldsValue: r.setFieldsValue,
      validateFields: r.validateFields,
      submit: r.submit,
      _init: !0,
      getInternalHooks: r.getInternalHooks
    };
  }), K(this, "getInternalHooks", function(n) {
    return n === pa ? (r.formHooked = !0, {
      dispatch: r.dispatch,
      initEntityValue: r.initEntityValue,
      registerField: r.registerField,
      useSubscribe: r.useSubscribe,
      setInitialValues: r.setInitialValues,
      destroyForm: r.destroyForm,
      setCallbacks: r.setCallbacks,
      setValidateMessages: r.setValidateMessages,
      getFields: r.getFields,
      setPreserve: r.setPreserve,
      getInitialValue: r.getInitialValue,
      registerWatch: r.registerWatch
    }) : (bt(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), K(this, "useSubscribe", function(n) {
    r.subscribable = n;
  }), K(this, "prevWithoutPreserves", null), K(this, "setInitialValues", function(n, a) {
    if (r.initialValues = n || {}, a) {
      var o, i = ro(n, r.store);
      (o = r.prevWithoutPreserves) === null || o === void 0 || o.map(function(s) {
        var u = s.key;
        i = Yr(i, u, vn(n, u));
      }), r.prevWithoutPreserves = null, r.updateStore(i);
    }
  }), K(this, "destroyForm", function() {
    var n = new Va();
    r.getFieldEntities(!0).forEach(function(a) {
      r.isMergedPreserve(a.isPreserve()) || n.set(a.getNamePath(), !0);
    }), r.prevWithoutPreserves = n;
  }), K(this, "getInitialValue", function(n) {
    var a = vn(r.initialValues, n);
    return n.length ? ro(a) : a;
  }), K(this, "setCallbacks", function(n) {
    r.callbacks = n;
  }), K(this, "setValidateMessages", function(n) {
    r.validateMessages = n;
  }), K(this, "setPreserve", function(n) {
    r.preserve = n;
  }), K(this, "watchList", []), K(this, "registerWatch", function(n) {
    return r.watchList.push(n), function() {
      r.watchList = r.watchList.filter(function(a) {
        return a !== n;
      });
    };
  }), K(this, "notifyWatch", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (r.watchList.length) {
      var a = r.getFieldsValue(), o = r.getFieldsValue(!0);
      r.watchList.forEach(function(i) {
        i(a, o, n);
      });
    }
  }), K(this, "timeoutId", null), K(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !r.timeoutId && typeof window < "u" && (r.timeoutId = setTimeout(function() {
      r.timeoutId = null, r.formHooked || bt(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), K(this, "updateStore", function(n) {
    r.store = n;
  }), K(this, "getFieldEntities", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? r.fieldEntities.filter(function(a) {
      return a.getNamePath().length;
    }) : r.fieldEntities;
  }), K(this, "getFieldsMap", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, a = new Va();
    return r.getFieldEntities(n).forEach(function(o) {
      var i = o.getNamePath();
      a.set(i, o);
    }), a;
  }), K(this, "getFieldEntitiesForNamePathList", function(n) {
    if (!n)
      return r.getFieldEntities(!0);
    var a = r.getFieldsMap(!0);
    return n.map(function(o) {
      var i = zt(o);
      return a.get(i) || {
        INVALIDATE_NAME_PATH: zt(o)
      };
    });
  }), K(this, "getFieldsValue", function(n, a) {
    r.warningUnhooked();
    var o, i, s;
    if (n === !0 || Array.isArray(n) ? (o = n, i = a) : n && lt(n) === "object" && (s = n.strict, i = n.filter), o === !0 && !i)
      return r.store;
    var u = r.getFieldEntitiesForNamePathList(Array.isArray(o) ? o : null), l = [];
    return u.forEach(function(c) {
      var d, v, p = "INVALIDATE_NAME_PATH" in c ? c.INVALIDATE_NAME_PATH : c.getNamePath();
      if (s) {
        var h, f;
        if ((h = (f = c).isList) !== null && h !== void 0 && h.call(f))
          return;
      } else if (!o && (d = (v = c).isListField) !== null && d !== void 0 && d.call(v))
        return;
      if (!i)
        l.push(p);
      else {
        var m = "getMeta" in c ? c.getMeta() : null;
        i(m) && l.push(p);
      }
    }), fg(r.store, l.map(zt));
  }), K(this, "getFieldValue", function(n) {
    r.warningUnhooked();
    var a = zt(n);
    return vn(r.store, a);
  }), K(this, "getFieldsError", function(n) {
    r.warningUnhooked();
    var a = r.getFieldEntitiesForNamePathList(n);
    return a.map(function(o, i) {
      return o && !("INVALIDATE_NAME_PATH" in o) ? {
        name: o.getNamePath(),
        errors: o.getErrors(),
        warnings: o.getWarnings()
      } : {
        name: zt(n[i]),
        errors: [],
        warnings: []
      };
    });
  }), K(this, "getFieldError", function(n) {
    r.warningUnhooked();
    var a = zt(n), o = r.getFieldsError([a])[0];
    return o.errors;
  }), K(this, "getFieldWarning", function(n) {
    r.warningUnhooked();
    var a = zt(n), o = r.getFieldsError([a])[0];
    return o.warnings;
  }), K(this, "isFieldsTouched", function() {
    r.warningUnhooked();
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
      a[o] = arguments[o];
    var i = a[0], s = a[1], u, l = !1;
    a.length === 0 ? u = null : a.length === 1 ? Array.isArray(i) ? (u = i.map(zt), l = !1) : (u = null, l = i) : (u = i.map(zt), l = s);
    var c = r.getFieldEntities(!0), d = function(m) {
      return m.isFieldTouched();
    };
    if (!u)
      return l ? c.every(d) : c.some(d);
    var v = new Va();
    u.forEach(function(f) {
      v.set(f, []);
    }), c.forEach(function(f) {
      var m = f.getNamePath();
      u.forEach(function(b) {
        b.every(function(E, y) {
          return m[y] === E;
        }) && v.update(b, function(E) {
          return [].concat(Me(E), [f]);
        });
      });
    });
    var p = function(m) {
      return m.some(d);
    }, h = v.map(function(f) {
      var m = f.value;
      return m;
    });
    return l ? h.every(p) : h.some(p);
  }), K(this, "isFieldTouched", function(n) {
    return r.warningUnhooked(), r.isFieldsTouched([n]);
  }), K(this, "isFieldsValidating", function(n) {
    r.warningUnhooked();
    var a = r.getFieldEntities();
    if (!n)
      return a.some(function(i) {
        return i.isFieldValidating();
      });
    var o = n.map(zt);
    return a.some(function(i) {
      var s = i.getNamePath();
      return so(o, s) && i.isFieldValidating();
    });
  }), K(this, "isFieldValidating", function(n) {
    return r.warningUnhooked(), r.isFieldsValidating([n]);
  }), K(this, "resetWithFieldInitialValue", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = new Va(), o = r.getFieldEntities(!0);
    o.forEach(function(u) {
      var l = u.props.initialValue, c = u.getNamePath();
      if (l !== void 0) {
        var d = a.get(c) || /* @__PURE__ */ new Set();
        d.add({
          entity: u,
          value: l
        }), a.set(c, d);
      }
    });
    var i = function(l) {
      l.forEach(function(c) {
        var d = c.props.initialValue;
        if (d !== void 0) {
          var v = c.getNamePath(), p = r.getInitialValue(v);
          if (p !== void 0)
            bt(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var h = a.get(v);
            if (h && h.size > 1)
              bt(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (h) {
              var f = r.getFieldValue(v), m = c.isListField();
              !m && (!n.skipExist || f === void 0) && r.updateStore(Yr(r.store, v, Me(h)[0].value));
            }
          }
        }
      });
    }, s;
    n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(u) {
      var l = a.get(u);
      if (l) {
        var c;
        (c = s).push.apply(c, Me(Me(l).map(function(d) {
          return d.entity;
        })));
      }
    })) : s = o, i(s);
  }), K(this, "resetFields", function(n) {
    r.warningUnhooked();
    var a = r.store;
    if (!n) {
      r.updateStore(ro(r.initialValues)), r.resetWithFieldInitialValue(), r.notifyObservers(a, null, {
        type: "reset"
      }), r.notifyWatch();
      return;
    }
    var o = n.map(zt);
    o.forEach(function(i) {
      var s = r.getInitialValue(i);
      r.updateStore(Yr(r.store, i, s));
    }), r.resetWithFieldInitialValue({
      namePathList: o
    }), r.notifyObservers(a, o, {
      type: "reset"
    }), r.notifyWatch(o);
  }), K(this, "setFields", function(n) {
    r.warningUnhooked();
    var a = r.store, o = [];
    n.forEach(function(i) {
      var s = i.name, u = ct(i, t2), l = zt(s);
      o.push(l), "value" in u && r.updateStore(Yr(r.store, l, u.value)), r.notifyObservers(a, [l], {
        type: "setField",
        data: i
      });
    }), r.notifyWatch(o);
  }), K(this, "getFields", function() {
    var n = r.getFieldEntities(!0), a = n.map(function(o) {
      var i = o.getNamePath(), s = o.getMeta(), u = Y(Y({}, s), {}, {
        name: i,
        value: r.getFieldValue(i)
      });
      return Object.defineProperty(u, "originRCField", {
        value: !0
      }), u;
    });
    return a;
  }), K(this, "initEntityValue", function(n) {
    var a = n.props.initialValue;
    if (a !== void 0) {
      var o = n.getNamePath(), i = vn(r.store, o);
      i === void 0 && r.updateStore(Yr(r.store, o, a));
    }
  }), K(this, "isMergedPreserve", function(n) {
    var a = n !== void 0 ? n : r.preserve;
    return a ?? !0;
  }), K(this, "registerField", function(n) {
    r.fieldEntities.push(n);
    var a = n.getNamePath();
    if (r.notifyWatch([a]), n.props.initialValue !== void 0) {
      var o = r.store;
      r.resetWithFieldInitialValue({
        entities: [n],
        skipExist: !0
      }), r.notifyObservers(o, [n.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(i, s) {
      var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (r.fieldEntities = r.fieldEntities.filter(function(d) {
        return d !== n;
      }), !r.isMergedPreserve(s) && (!i || u.length > 1)) {
        var l = i ? void 0 : r.getInitialValue(a);
        if (a.length && r.getFieldValue(a) !== l && r.fieldEntities.every(function(d) {
          return (
            // Only reset when no namePath exist
            !o0(d.getNamePath(), a)
          );
        })) {
          var c = r.store;
          r.updateStore(Yr(c, a, l, !0)), r.notifyObservers(c, [a], {
            type: "remove"
          }), r.triggerDependenciesUpdate(c, a);
        }
      }
      r.notifyWatch([a]);
    };
  }), K(this, "dispatch", function(n) {
    switch (n.type) {
      case "updateValue": {
        var a = n.namePath, o = n.value;
        r.updateValue(a, o);
        break;
      }
      case "validateField": {
        var i = n.namePath, s = n.triggerName;
        r.validateFields([i], {
          triggerName: s
        });
        break;
      }
    }
  }), K(this, "notifyObservers", function(n, a, o) {
    if (r.subscribable) {
      var i = Y(Y({}, o), {}, {
        store: r.getFieldsValue(!0)
      });
      r.getFieldEntities().forEach(function(s) {
        var u = s.onStoreChange;
        u(n, a, i);
      });
    } else
      r.forceRootUpdate();
  }), K(this, "triggerDependenciesUpdate", function(n, a) {
    var o = r.getDependencyChildrenFields(a);
    return o.length && r.validateFields(o), r.notifyObservers(n, o, {
      type: "dependenciesUpdate",
      relatedFields: [a].concat(Me(o))
    }), o;
  }), K(this, "updateValue", function(n, a) {
    var o = zt(n), i = r.store;
    r.updateStore(Yr(r.store, o, a)), r.notifyObservers(i, [o], {
      type: "valueUpdate",
      source: "internal"
    }), r.notifyWatch([o]);
    var s = r.triggerDependenciesUpdate(i, o), u = r.callbacks.onValuesChange;
    if (u) {
      var l = fg(r.store, [o]);
      u(l, r.getFieldsValue());
    }
    r.triggerOnFieldsChange([o].concat(Me(s)));
  }), K(this, "setFieldsValue", function(n) {
    r.warningUnhooked();
    var a = r.store;
    if (n) {
      var o = ro(r.store, n);
      r.updateStore(o);
    }
    r.notifyObservers(a, null, {
      type: "valueUpdate",
      source: "external"
    }), r.notifyWatch();
  }), K(this, "setFieldValue", function(n, a) {
    r.setFields([{
      name: n,
      value: a
    }]);
  }), K(this, "getDependencyChildrenFields", function(n) {
    var a = /* @__PURE__ */ new Set(), o = [], i = new Va();
    r.getFieldEntities().forEach(function(u) {
      var l = u.props.dependencies;
      (l || []).forEach(function(c) {
        var d = zt(c);
        i.update(d, function() {
          var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return v.add(u), v;
        });
      });
    });
    var s = function u(l) {
      var c = i.get(l) || /* @__PURE__ */ new Set();
      c.forEach(function(d) {
        if (!a.has(d)) {
          a.add(d);
          var v = d.getNamePath();
          d.isFieldDirty() && v.length && (o.push(v), u(v));
        }
      });
    };
    return s(n), o;
  }), K(this, "triggerOnFieldsChange", function(n, a) {
    var o = r.callbacks.onFieldsChange;
    if (o) {
      var i = r.getFields();
      if (a) {
        var s = new Va();
        a.forEach(function(l) {
          var c = l.name, d = l.errors;
          s.set(c, d);
        }), i.forEach(function(l) {
          l.errors = s.get(l.name) || l.errors;
        });
      }
      var u = i.filter(function(l) {
        var c = l.name;
        return so(n, c);
      });
      u.length && o(u, i);
    }
  }), K(this, "validateFields", function(n, a) {
    r.warningUnhooked();
    var o, i;
    Array.isArray(n) || typeof n == "string" || typeof a == "string" ? (o = n, i = a) : i = n;
    var s = !!o, u = s ? o.map(zt) : [], l = [], c = String(Date.now()), d = /* @__PURE__ */ new Set(), v = i || {}, p = v.recursive, h = v.dirty;
    r.getFieldEntities(!0).forEach(function(E) {
      if (s || u.push(E.getNamePath()), !(!E.props.rules || !E.props.rules.length) && !(h && !E.isFieldDirty())) {
        var y = E.getNamePath();
        if (d.add(y.join(c)), !s || so(u, y, p)) {
          var w = E.validateRules(Y({
            validateMessages: Y(Y({}, a0), r.validateMessages)
          }, i));
          l.push(w.then(function() {
            return {
              name: y,
              errors: [],
              warnings: []
            };
          }).catch(function(S) {
            var D, x = [], A = [];
            return (D = S.forEach) === null || D === void 0 || D.call(S, function(O) {
              var B = O.rule.warningOnly, j = O.errors;
              B ? A.push.apply(A, Me(j)) : x.push.apply(x, Me(j));
            }), x.length ? Promise.reject({
              name: y,
              errors: x,
              warnings: A
            }) : {
              name: y,
              errors: x,
              warnings: A
            };
          }));
        }
      }
    });
    var f = e2(l);
    r.lastValidatePromise = f, f.catch(function(E) {
      return E;
    }).then(function(E) {
      var y = E.map(function(w) {
        var S = w.name;
        return S;
      });
      r.notifyObservers(r.store, y, {
        type: "validateFinish"
      }), r.triggerOnFieldsChange(y, E);
    });
    var m = f.then(function() {
      return r.lastValidatePromise === f ? Promise.resolve(r.getFieldsValue(u)) : Promise.reject([]);
    }).catch(function(E) {
      var y = E.filter(function(w) {
        return w && w.errors.length;
      });
      return Promise.reject({
        values: r.getFieldsValue(u),
        errorFields: y,
        outOfDate: r.lastValidatePromise !== f
      });
    });
    m.catch(function(E) {
      return E;
    });
    var b = u.filter(function(E) {
      return d.has(E.join(c));
    });
    return r.triggerOnFieldsChange(b), m;
  }), K(this, "submit", function() {
    r.warningUnhooked(), r.validateFields().then(function(n) {
      var a = r.callbacks.onFinish;
      if (a)
        try {
          a(n);
        } catch (o) {
          console.error(o);
        }
    }).catch(function(n) {
      var a = r.callbacks.onFinishFailed;
      a && a(n);
    });
  }), this.forceRootUpdate = t;
});
function u0(e) {
  var t = g.useRef(), r = g.useState({}), n = ie(r, 2), a = n[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var o = function() {
        a({});
      }, i = new r2(o);
      t.current = i.getForm();
    }
  return [t.current];
}
var Ec = /* @__PURE__ */ g.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), n2 = function(t) {
  var r = t.validateMessages, n = t.onFormChange, a = t.onFormFinish, o = t.children, i = g.useContext(Ec), s = g.useRef({});
  return /* @__PURE__ */ g.createElement(Ec.Provider, {
    value: Y(Y({}, i), {}, {
      validateMessages: Y(Y({}, i.validateMessages), r),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(l, c) {
        n && n(l, {
          changedFields: c,
          forms: s.current
        }), i.triggerFormChange(l, c);
      },
      triggerFormFinish: function(l, c) {
        a && a(l, {
          values: c,
          forms: s.current
        }), i.triggerFormFinish(l, c);
      },
      registerForm: function(l, c) {
        l && (s.current = Y(Y({}, s.current), {}, K({}, l, c))), i.registerForm(l, c);
      },
      unregisterForm: function(l) {
        var c = Y({}, s.current);
        delete c[l], s.current = c, i.unregisterForm(l);
      }
    })
  }, o);
}, a2 = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"], o2 = function(t, r) {
  var n = t.name, a = t.initialValues, o = t.fields, i = t.form, s = t.preserve, u = t.children, l = t.component, c = l === void 0 ? "form" : l, d = t.validateMessages, v = t.validateTrigger, p = v === void 0 ? "onChange" : v, h = t.onValuesChange, f = t.onFieldsChange, m = t.onFinish, b = t.onFinishFailed, E = ct(t, a2), y = g.useContext(Ec), w = u0(i), S = ie(w, 1), D = S[0], x = D.getInternalHooks(pa), A = x.useSubscribe, O = x.setInitialValues, B = x.setCallbacks, j = x.setValidateMessages, T = x.setPreserve, $ = x.destroyForm;
  g.useImperativeHandle(r, function() {
    return D;
  }), g.useEffect(function() {
    return y.registerForm(n, D), function() {
      y.unregisterForm(n);
    };
  }, [y, D, n]), j(Y(Y({}, y.validateMessages), d)), B({
    onValuesChange: h,
    onFieldsChange: function(U) {
      if (y.triggerFormChange(n, U), f) {
        for (var Q = arguments.length, I = new Array(Q > 1 ? Q - 1 : 0), z = 1; z < Q; z++)
          I[z - 1] = arguments[z];
        f.apply(void 0, [U].concat(I));
      }
    },
    onFinish: function(U) {
      y.triggerFormFinish(n, U), m && m(U);
    },
    onFinishFailed: b
  }), T(s);
  var P = g.useRef(null);
  O(a, !P.current), P.current || (P.current = !0), g.useEffect(
    function() {
      return $;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var R, M = typeof u == "function";
  if (M) {
    var F = D.getFieldsValue(!0);
    R = u(F, D);
  } else
    R = u;
  A(!M);
  var N = g.useRef();
  g.useEffect(function() {
    Y$(N.current || [], o || []) || D.setFields(o || []), N.current = o;
  }, [o, D]);
  var V = g.useMemo(function() {
    return Y(Y({}, D), {}, {
      validateTrigger: p
    });
  }, [D, p]), k = /* @__PURE__ */ g.createElement(_s.Provider, {
    value: null
  }, /* @__PURE__ */ g.createElement(Co.Provider, {
    value: V
  }, R));
  return c === !1 ? k : /* @__PURE__ */ g.createElement(c, _e({}, E, {
    onSubmit: function(U) {
      U.preventDefault(), U.stopPropagation(), D.submit();
    },
    onReset: function(U) {
      var Q;
      U.preventDefault(), D.resetFields(), (Q = E.onReset) === null || Q === void 0 || Q.call(E, U);
    }
  }), k);
};
function gg(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var i2 = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), r = qe(t);
  bt(r.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function s2() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], a = t[1], o = a === void 0 ? {} : a, i = g$(o) ? {
    form: o
  } : o, s = i.form, u = Gt(), l = ie(u, 2), c = l[0], d = l[1], v = Xt(function() {
    return gg(c);
  }, [c]), p = qe(v);
  p.current = v;
  var h = St(Co), f = s || h, m = f && f._init;
  process.env.NODE_ENV !== "production" && bt(t.length === 2 ? s ? m : !0 : m, "useWatch requires a form instance since it can not auto detect from context.");
  var b = zt(n), E = qe(b);
  return E.current = b, i2(b), Ft(
    function() {
      if (m) {
        var y = f.getFieldsValue, w = f.getInternalHooks, S = w(pa), D = S.registerWatch, x = function(j, T) {
          var $ = i.preserve ? T : j;
          return typeof n == "function" ? n($) : vn($, E.current);
        }, A = D(function(B, j) {
          var T = x(B, j), $ = gg(T);
          p.current !== $ && (p.current = $, d(T));
        }), O = x(y(), y(!0));
        return c !== O && d(O), A;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [m]
  ), c;
}
var u2 = /* @__PURE__ */ g.forwardRef(o2), Bi = u2;
Bi.FormProvider = n2;
Bi.Field = i0;
Bi.List = J$;
Bi.useForm = u0;
Bi.useWatch = s2;
const ea = /* @__PURE__ */ g.createContext({});
process.env.NODE_ENV !== "production" && (ea.displayName = "FormItemInputContext");
const mg = (e) => {
  let {
    children: t,
    status: r,
    override: n
  } = e;
  const a = St(ea), o = Xt(() => {
    const i = Object.assign({}, a);
    return n && delete i.isFormItemInput, r && (delete i.status, delete i.hasFeedback, delete i.feedbackIcon), i;
  }, [r, n, a]);
  return /* @__PURE__ */ g.createElement(ea.Provider, {
    value: o
  }, t);
}, l2 = /* @__PURE__ */ Wr(void 0), c2 = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), f2 = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Df = function(e, t, r, n) {
  const o = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]: Object.assign(Object.assign({}, c2(n)), {
      animationPlayState: "paused"
    }),
    [`${o}${e}-leave`]: Object.assign(Object.assign({}, f2(n)), {
      animationPlayState: "paused"
    }),
    [`
      ${o}${e}-enter${e}-enter-active,
      ${o}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${o}${e}-leave${e}-leave-active`]: {
      animationName: r,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, d2 = new Et("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), v2 = new Et("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), g2 = new Et("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), m2 = new Et("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), h2 = new Et("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), p2 = new Et("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), b2 = new Et("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), y2 = new Et("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), C2 = {
  "move-up": {
    inKeyframes: b2,
    outKeyframes: y2
  },
  "move-down": {
    inKeyframes: d2,
    outKeyframes: v2
  },
  "move-left": {
    inKeyframes: g2,
    outKeyframes: m2
  },
  "move-right": {
    inKeyframes: h2,
    outKeyframes: p2
  }
}, hg = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = C2[t];
  return [Df(n, a, o, e.motionDurationMid), {
    [`
        ${n}-enter,
        ${n}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc
    },
    [`${n}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, l0 = new Et("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), c0 = new Et("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), f0 = new Et("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
}), d0 = new Et("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
}), E2 = new Et("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), w2 = new Et("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), D2 = new Et("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
}), S2 = new Et("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
}), x2 = {
  "slide-up": {
    inKeyframes: l0,
    outKeyframes: c0
  },
  "slide-down": {
    inKeyframes: f0,
    outKeyframes: d0
  },
  "slide-left": {
    inKeyframes: E2,
    outKeyframes: w2
  },
  "slide-right": {
    inKeyframes: D2,
    outKeyframes: S2
  }
}, js = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = x2[t];
  return [Df(n, a, o, e.motionDurationMid), {
    [`
      ${n}-enter,
      ${n}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutQuint,
      "&-prepare": {
        transform: "scale(1)"
      }
    },
    [`${n}-leave`]: {
      animationTimingFunction: e.motionEaseInQuint
    }
  }];
}, O2 = new Et("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), A2 = new Et("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), pg = new Et("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), bg = new Et("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), B2 = new Et("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), $2 = new Et("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), F2 = new Et("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), P2 = new Et("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), R2 = new Et("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), T2 = new Et("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), N2 = new Et("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), I2 = new Et("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), M2 = {
  zoom: {
    inKeyframes: O2,
    outKeyframes: A2
  },
  "zoom-big": {
    inKeyframes: pg,
    outKeyframes: bg
  },
  "zoom-big-fast": {
    inKeyframes: pg,
    outKeyframes: bg
  },
  "zoom-left": {
    inKeyframes: F2,
    outKeyframes: P2
  },
  "zoom-right": {
    inKeyframes: R2,
    outKeyframes: T2
  },
  "zoom-up": {
    inKeyframes: B2,
    outKeyframes: $2
  },
  "zoom-down": {
    inKeyframes: N2,
    outKeyframes: I2
  }
}, Sf = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = M2[t];
  return [Df(n, a, o, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
    [`
        ${n}-enter,
        ${n}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${n}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, _2 = (e) => ({
  [e.componentCls]: {
    // For common/openAnimation
    [`${e.antCls}-motion-collapse-legacy`]: {
      overflow: "hidden",
      "&-active": {
        transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
      }
    },
    [`${e.antCls}-motion-collapse`]: {
      overflow: "hidden",
      transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
    }
  }
});
function j2(e) {
  return (t) => /* @__PURE__ */ g.createElement(Tp, {
    theme: {
      token: {
        motion: !1,
        zIndexPopupBase: 0
      }
    }
  }, /* @__PURE__ */ g.createElement(e, Object.assign({}, t)));
}
const L2 = (e, t, r, n) => j2((o) => {
  const {
    prefixCls: i,
    style: s
  } = o, u = g.useRef(null), [l, c] = g.useState(0), [d, v] = g.useState(0), [p, h] = zr(!1, {
    value: o.open
  }), {
    getPrefixCls: f
  } = g.useContext(xt), m = f(t || "select", i);
  g.useEffect(() => {
    if (h(!0), typeof ResizeObserver < "u") {
      const y = new ResizeObserver((S) => {
        const D = S[0].target;
        c(D.offsetHeight + 8), v(D.offsetWidth);
      }), w = setInterval(() => {
        var S;
        const D = r ? `.${r(m)}` : `.${m}-dropdown`, x = (S = u.current) === null || S === void 0 ? void 0 : S.querySelector(D);
        x && (clearInterval(w), y.observe(x));
      }, 10);
      return () => {
        clearInterval(w), y.disconnect();
      };
    }
  }, []);
  let b = Object.assign(Object.assign({}, o), {
    style: Object.assign(Object.assign({}, s), {
      margin: 0
    }),
    open: p,
    visible: p,
    getPopupContainer: () => u.current
  });
  n && (b = n(b));
  const E = {
    paddingBottom: l,
    position: "relative",
    minWidth: d
  };
  return /* @__PURE__ */ g.createElement("div", {
    ref: u,
    style: E
  }, /* @__PURE__ */ g.createElement(e, Object.assign({}, b)));
}), k2 = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
};
var z2 = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Ha = void 0;
function V2(e, t) {
  var r = e.prefixCls, n = e.invalidate, a = e.item, o = e.renderItem, i = e.responsive, s = e.responsiveDisabled, u = e.registerSize, l = e.itemKey, c = e.className, d = e.style, v = e.children, p = e.display, h = e.order, f = e.component, m = f === void 0 ? "div" : f, b = ct(e, z2), E = i && !p;
  function y(A) {
    u(l, A);
  }
  g.useEffect(function() {
    return function() {
      y(null);
    };
  }, []);
  var w = o && a !== Ha ? o(a) : v, S;
  n || (S = {
    opacity: E ? 0 : 1,
    height: E ? 0 : Ha,
    overflowY: E ? "hidden" : Ha,
    order: i ? h : Ha,
    pointerEvents: E ? "none" : Ha,
    position: E ? "absolute" : Ha
  });
  var D = {};
  E && (D["aria-hidden"] = !0);
  var x = /* @__PURE__ */ g.createElement(m, _e({
    className: ne(!n && r, c),
    style: Y(Y({}, S), d)
  }, D, b, {
    ref: t
  }), w);
  return i && (x = /* @__PURE__ */ g.createElement(na, {
    onResize: function(O) {
      var B = O.offsetWidth;
      y(B);
    },
    disabled: s
  }, x)), x;
}
var ti = /* @__PURE__ */ g.forwardRef(V2);
ti.displayName = "Item";
function H2(e) {
  if (typeof MessageChannel > "u")
    Yt(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function W2() {
  var e = g.useRef(null), t = function(n) {
    e.current || (e.current = [], H2(function() {
      zb(function() {
        e.current.forEach(function(a) {
          a();
        }), e.current = null;
      });
    })), e.current.push(n);
  };
  return t;
}
function Lo(e, t) {
  var r = g.useState(t), n = ie(r, 2), a = n[0], o = n[1], i = Br(function(s) {
    e(function() {
      o(s);
    });
  });
  return [a, i];
}
var Ls = /* @__PURE__ */ Z.createContext(null), K2 = ["component"], q2 = ["className"], U2 = ["className"], G2 = function(t, r) {
  var n = g.useContext(Ls);
  if (!n) {
    var a = t.component, o = a === void 0 ? "div" : a, i = ct(t, K2);
    return /* @__PURE__ */ g.createElement(o, _e({}, i, {
      ref: r
    }));
  }
  var s = n.className, u = ct(n, q2), l = t.className, c = ct(t, U2);
  return /* @__PURE__ */ g.createElement(Ls.Provider, {
    value: null
  }, /* @__PURE__ */ g.createElement(ti, _e({
    ref: r,
    className: ne(s, l)
  }, u, c)));
}, v0 = /* @__PURE__ */ g.forwardRef(G2);
v0.displayName = "RawItem";
var X2 = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], g0 = "responsive", m0 = "invalidate";
function Y2(e) {
  return "+ ".concat(e.length, " ...");
}
function Z2(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-overflow" : r, a = e.data, o = a === void 0 ? [] : a, i = e.renderItem, s = e.renderRawItem, u = e.itemKey, l = e.itemWidth, c = l === void 0 ? 10 : l, d = e.ssr, v = e.style, p = e.className, h = e.maxCount, f = e.renderRest, m = e.renderRawRest, b = e.suffix, E = e.component, y = E === void 0 ? "div" : E, w = e.itemComponent, S = e.onVisibleChange, D = ct(e, X2), x = d === "full", A = W2(), O = Lo(A, null), B = ie(O, 2), j = B[0], T = B[1], $ = j || 0, P = Lo(A, /* @__PURE__ */ new Map()), R = ie(P, 2), M = R[0], F = R[1], N = Lo(A, 0), V = ie(N, 2), k = V[0], W = V[1], U = Lo(A, 0), Q = ie(U, 2), I = Q[0], z = Q[1], H = Lo(A, 0), G = ie(H, 2), re = G[0], te = G[1], de = Gt(null), se = ie(de, 2), he = se[0], ce = se[1], q = Gt(null), pe = ie(q, 2), De = pe[0], Ce = pe[1], Ee = g.useMemo(function() {
    return De === null && x ? Number.MAX_SAFE_INTEGER : De || 0;
  }, [De, j]), oe = Gt(!1), ue = ie(oe, 2), ge = ue[0], be = ue[1], ye = "".concat(n, "-item"), Ne = Math.max(k, I), $e = h === g0, je = o.length && $e, yt = h === m0, Le = je || typeof h == "number" && o.length > h, we = Xt(function() {
    var xe = o;
    return je ? j === null && x ? xe = o : xe = o.slice(0, Math.min(o.length, $ / c)) : typeof h == "number" && (xe = o.slice(0, h)), xe;
  }, [o, c, j, h, je]), ze = Xt(function() {
    return je ? o.slice(Ee + 1) : o.slice(we.length);
  }, [o, we, je, Ee]), Ve = et(function(xe, Te) {
    var ut;
    return typeof u == "function" ? u(xe) : (ut = u && (xe == null ? void 0 : xe[u])) !== null && ut !== void 0 ? ut : Te;
  }, [u]), kt = et(i || function(xe) {
    return xe;
  }, [i]);
  function tt(xe, Te, ut) {
    De === xe && (Te === void 0 || Te === he) || (Ce(xe), ut || (be(xe < o.length - 1), S == null || S(xe)), Te !== void 0 && ce(Te));
  }
  function Bt(xe, Te) {
    T(Te.clientWidth);
  }
  function ht(xe, Te) {
    F(function(ut) {
      var Mt = new Map(ut);
      return Te === null ? Mt.delete(xe) : Mt.set(xe, Te), Mt;
    });
  }
  function Qe(xe, Te) {
    z(Te), W(I);
  }
  function st(xe, Te) {
    te(Te);
  }
  function Wt(xe) {
    return M.get(Ve(we[xe], xe));
  }
  Lt(function() {
    if ($ && typeof Ne == "number" && we) {
      var xe = re, Te = we.length, ut = Te - 1;
      if (!Te) {
        tt(0, null);
        return;
      }
      for (var Mt = 0; Mt < Te; Mt += 1) {
        var Kt = Wt(Mt);
        if (x && (Kt = Kt || 0), Kt === void 0) {
          tt(Mt - 1, void 0, !0);
          break;
        }
        if (xe += Kt, // Only one means `totalWidth` is the final width
        ut === 0 && xe <= $ || // Last two width will be the final width
        Mt === ut - 1 && xe + Wt(ut) <= $) {
          tt(ut, null);
          break;
        } else if (xe + Ne > $) {
          tt(Mt - 1, xe - Kt - re + I);
          break;
        }
      }
      b && Wt(0) + re > $ && ce(null);
    }
  }, [$, M, I, re, Ve, we]);
  var wt = ge && !!ze.length, fe = {};
  he !== null && je && (fe = {
    position: "absolute",
    left: he,
    top: 0
  });
  var Fe = {
    prefixCls: ye,
    responsive: je,
    component: w,
    invalidate: yt
  }, ke = s ? function(xe, Te) {
    var ut = Ve(xe, Te);
    return /* @__PURE__ */ g.createElement(Ls.Provider, {
      key: ut,
      value: Y(Y({}, Fe), {}, {
        order: Te,
        item: xe,
        itemKey: ut,
        registerSize: ht,
        display: Te <= Ee
      })
    }, s(xe, Te));
  } : function(xe, Te) {
    var ut = Ve(xe, Te);
    return /* @__PURE__ */ g.createElement(ti, _e({}, Fe, {
      order: Te,
      key: ut,
      item: xe,
      renderItem: kt,
      itemKey: ut,
      registerSize: ht,
      display: Te <= Ee
    }));
  }, rt, Je = {
    order: wt ? Ee : Number.MAX_SAFE_INTEGER,
    className: "".concat(ye, "-rest"),
    registerSize: Qe,
    display: wt
  };
  if (m)
    m && (rt = /* @__PURE__ */ g.createElement(Ls.Provider, {
      value: Y(Y({}, Fe), Je)
    }, m(ze)));
  else {
    var Pe = f || Y2;
    rt = /* @__PURE__ */ g.createElement(ti, _e({}, Fe, Je), typeof Pe == "function" ? Pe(ze) : Pe);
  }
  var Ze = /* @__PURE__ */ g.createElement(y, _e({
    className: ne(!yt && n, p),
    style: v,
    ref: t
  }, D), we.map(ke), Le ? rt : null, b && /* @__PURE__ */ g.createElement(ti, _e({}, Fe, {
    responsive: $e,
    responsiveDisabled: !je,
    order: Ee,
    className: "".concat(ye, "-suffix"),
    registerSize: st,
    display: !0,
    style: fe
  }), b));
  return $e && (Ze = /* @__PURE__ */ g.createElement(na, {
    onResize: Bt,
    disabled: !je
  }, Ze)), Ze;
}
var Pn = /* @__PURE__ */ g.forwardRef(Z2);
Pn.displayName = "Overflow";
Pn.Item = v0;
Pn.RESPONSIVE = g0;
Pn.INVALIDATE = m0;
function Q2(e) {
  var t = e.prefixCls, r = e.align, n = e.arrow, a = e.arrowPos, o = n || {}, i = o.className, s = o.content, u = a.x, l = u === void 0 ? 0 : u, c = a.y, d = c === void 0 ? 0 : c, v = g.useRef();
  if (!r || !r.points)
    return null;
  var p = {
    position: "absolute"
  };
  if (r.autoArrow !== !1) {
    var h = r.points[0], f = r.points[1], m = h[0], b = h[1], E = f[0], y = f[1];
    m === E || !["t", "b"].includes(m) ? p.top = d : m === "t" ? p.top = 0 : p.bottom = 0, b === y || !["l", "r"].includes(b) ? p.left = l : b === "l" ? p.left = 0 : p.right = 0;
  }
  return /* @__PURE__ */ g.createElement("div", {
    ref: v,
    className: ne("".concat(t, "-arrow"), i),
    style: p
  }, s);
}
function J2(e) {
  var t = e.prefixCls, r = e.open, n = e.zIndex, a = e.mask, o = e.motion;
  return a ? /* @__PURE__ */ g.createElement(So, _e({}, o, {
    motionAppear: !0,
    visible: r,
    removeOnLeave: !0
  }), function(i) {
    var s = i.className;
    return /* @__PURE__ */ g.createElement("div", {
      style: {
        zIndex: n
      },
      className: ne("".concat(t, "-mask"), s)
    });
  }) : null;
}
var h0 = /* @__PURE__ */ g.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (h0.displayName = "PopupContent");
var p0 = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var r = e.popup, n = e.className, a = e.prefixCls, o = e.style, i = e.target, s = e.onVisibleChanged, u = e.open, l = e.keepDom, c = e.fresh, d = e.onClick, v = e.mask, p = e.arrow, h = e.arrowPos, f = e.align, m = e.motion, b = e.maskMotion, E = e.forceRender, y = e.getPopupContainer, w = e.autoDestroy, S = e.portal, D = e.zIndex, x = e.onMouseEnter, A = e.onMouseLeave, O = e.onPointerEnter, B = e.ready, j = e.offsetX, T = e.offsetY, $ = e.offsetR, P = e.offsetB, R = e.onAlign, M = e.onPrepare, F = e.stretch, N = e.targetWidth, V = e.targetHeight, k = typeof r == "function" ? r() : r, W = u || l, U = (y == null ? void 0 : y.length) > 0, Q = g.useState(!y || !U), I = ie(Q, 2), z = I[0], H = I[1];
  if (Lt(function() {
    !z && U && i && H(!0);
  }, [z, U, i]), !z)
    return null;
  var G = "auto", re = {
    left: "-1000vw",
    top: "-1000vh",
    right: G,
    bottom: G
  };
  if (B || !u) {
    var te, de = f.points, se = f.dynamicInset || ((te = f._experimental) === null || te === void 0 ? void 0 : te.dynamicInset), he = se && de[0][1] === "r", ce = se && de[0][0] === "b";
    he ? (re.right = $, re.left = G) : (re.left = j, re.right = G), ce ? (re.bottom = P, re.top = G) : (re.top = T, re.bottom = G);
  }
  var q = {};
  return F && (F.includes("height") && V ? q.height = V : F.includes("minHeight") && V && (q.minHeight = V), F.includes("width") && N ? q.width = N : F.includes("minWidth") && N && (q.minWidth = N)), u || (q.pointerEvents = "none"), /* @__PURE__ */ g.createElement(S, {
    open: E || W,
    getContainer: y && function() {
      return y(i);
    },
    autoDestroy: w
  }, /* @__PURE__ */ g.createElement(J2, {
    prefixCls: a,
    open: u,
    zIndex: D,
    mask: v,
    motion: b
  }), /* @__PURE__ */ g.createElement(na, {
    onResize: R,
    disabled: !u
  }, function(pe) {
    return /* @__PURE__ */ g.createElement(So, _e({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: E,
      leavedClassName: "".concat(a, "-hidden")
    }, m, {
      onAppearPrepare: M,
      onEnterPrepare: M,
      visible: u,
      onVisibleChanged: function(Ce) {
        var Ee;
        m == null || (Ee = m.onVisibleChanged) === null || Ee === void 0 || Ee.call(m, Ce), s(Ce);
      }
    }), function(De, Ce) {
      var Ee = De.className, oe = De.style, ue = ne(a, Ee, n);
      return /* @__PURE__ */ g.createElement("div", {
        ref: nn(pe, t, Ce),
        className: ue,
        style: Y(Y(Y(Y({
          "--arrow-x": "".concat(h.x || 0, "px"),
          "--arrow-y": "".concat(h.y || 0, "px")
        }, re), q), oe), {}, {
          boxSizing: "border-box",
          zIndex: D
        }, o),
        onMouseEnter: x,
        onMouseLeave: A,
        onPointerEnter: O,
        onClick: d
      }, p && /* @__PURE__ */ g.createElement(Q2, {
        prefixCls: a,
        arrow: p,
        arrowPos: h,
        align: f
      }), /* @__PURE__ */ g.createElement(h0, {
        cache: !u && !c
      }, k));
    });
  }));
});
process.env.NODE_ENV !== "production" && (p0.displayName = "Popup");
var b0 = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var r = e.children, n = e.getTriggerDOMNode, a = ra(r), o = g.useCallback(function(s) {
    Qc(t, n ? n(s) : s);
  }, [n]), i = Ei(o, r.ref);
  return a ? /* @__PURE__ */ g.cloneElement(r, {
    ref: i
  }) : r;
});
process.env.NODE_ENV !== "production" && (b0.displayName = "TriggerWrapper");
var yg = /* @__PURE__ */ g.createContext(null);
function Cg(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function eF(e, t, r, n) {
  return g.useMemo(function() {
    var a = Cg(r ?? t), o = Cg(n ?? t), i = new Set(a), s = new Set(o);
    return e && (i.has("hover") && (i.delete("hover"), i.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [i, s];
  }, [e, t, r, n]);
}
function tF() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
  return r ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function rF(e, t, r, n) {
  for (var a = r.points, o = Object.keys(e), i = 0; i < o.length; i += 1) {
    var s, u = o[i];
    if (tF((s = e[u]) === null || s === void 0 ? void 0 : s.points, a, n))
      return "".concat(t, "-placement-").concat(u);
  }
  return "";
}
function Eg(e, t, r, n) {
  return t || (r ? {
    motionName: "".concat(e, "-").concat(r)
  } : n ? {
    motionName: n
  } : null);
}
function $i(e) {
  return e.ownerDocument.defaultView;
}
function wc(e) {
  for (var t = [], r = e == null ? void 0 : e.parentElement, n = ["hidden", "scroll", "clip", "auto"]; r; ) {
    var a = $i(r).getComputedStyle(r), o = a.overflowX, i = a.overflowY, s = a.overflow;
    [o, i, s].some(function(u) {
      return n.includes(u);
    }) && t.push(r), r = r.parentElement;
  }
  return t;
}
function bi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function ko(e) {
  return bi(parseFloat(e), 0);
}
function wg(e, t) {
  var r = Y({}, e);
  return (t || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement || n instanceof HTMLHtmlElement)) {
      var a = $i(n).getComputedStyle(n), o = a.overflow, i = a.overflowClipMargin, s = a.borderTopWidth, u = a.borderBottomWidth, l = a.borderLeftWidth, c = a.borderRightWidth, d = n.getBoundingClientRect(), v = n.offsetHeight, p = n.clientHeight, h = n.offsetWidth, f = n.clientWidth, m = ko(s), b = ko(u), E = ko(l), y = ko(c), w = bi(Math.round(d.width / h * 1e3) / 1e3), S = bi(Math.round(d.height / v * 1e3) / 1e3), D = (h - f - E - y) * w, x = (v - p - m - b) * S, A = m * S, O = b * S, B = E * w, j = y * w, T = 0, $ = 0;
      if (o === "clip") {
        var P = ko(i);
        T = P * w, $ = P * S;
      }
      var R = d.x + B - T, M = d.y + A - $, F = R + d.width + 2 * T - B - j - D, N = M + d.height + 2 * $ - A - O - x;
      r.left = Math.max(r.left, R), r.top = Math.max(r.top, M), r.right = Math.min(r.right, F), r.bottom = Math.min(r.bottom, N);
    }
  }), r;
}
function Dg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = "".concat(t), n = r.match(/^(.*)\%$/);
  return n ? e * (parseFloat(n[1]) / 100) : parseFloat(r);
}
function Sg(e, t) {
  var r = t || [], n = ie(r, 2), a = n[0], o = n[1];
  return [Dg(e.width, a), Dg(e.height, o)];
}
function xg() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function Wa(e, t) {
  var r = t[0], n = t[1], a, o;
  return r === "t" ? o = e.y : r === "b" ? o = e.y + e.height : o = e.y + e.height / 2, n === "l" ? a = e.x : n === "r" ? a = e.x + e.width : a = e.x + e.width / 2, {
    x: a,
    y: o
  };
}
function kn(e, t) {
  var r = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(n, a) {
    return a === t ? r[n] || "c" : n;
  }).join("");
}
function nF(e, t, r, n, a, o, i) {
  var s = g.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: a[n] || {}
  }), u = ie(s, 2), l = u[0], c = u[1], d = g.useRef(0), v = g.useMemo(function() {
    return t ? wc(t) : [];
  }, [t]), p = g.useRef({}), h = function() {
    p.current = {};
  };
  e || h();
  var f = Br(function() {
    if (t && r && e) {
      let ur = function(En, sa) {
        var _a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ue, ja = k.x + En, Po = k.y + sa, Ro = ja + te, Ri = Po + re, Cu = Math.max(ja, _a.left), Eu = Math.max(Po, _a.top), wu = Math.min(Ro, _a.right), Du = Math.min(Ri, _a.bottom);
        return Math.max(0, (wu - Cu) * (Du - Eu));
      }, Ma = function() {
        ae = k.y + Pe, ve = ae + re, Ie = k.x + Je, Xe = Ie + te;
      };
      var E, y, w = t, S = w.ownerDocument, D = $i(w), x = D.getComputedStyle(w), A = x.width, O = x.height, B = x.position, j = w.style.left, T = w.style.top, $ = w.style.right, P = w.style.bottom, R = w.style.overflow, M = Y(Y({}, a[n]), o), F = S.createElement("div");
      (E = w.parentElement) === null || E === void 0 || E.appendChild(F), F.style.left = "".concat(w.offsetLeft, "px"), F.style.top = "".concat(w.offsetTop, "px"), F.style.position = B, F.style.height = "".concat(w.offsetHeight, "px"), F.style.width = "".concat(w.offsetWidth, "px"), w.style.left = "0", w.style.top = "0", w.style.right = "auto", w.style.bottom = "auto", w.style.overflow = "hidden";
      var N;
      if (Array.isArray(r))
        N = {
          x: r[0],
          y: r[1],
          width: 0,
          height: 0
        };
      else {
        var V = r.getBoundingClientRect();
        N = {
          x: V.x,
          y: V.y,
          width: V.width,
          height: V.height
        };
      }
      var k = w.getBoundingClientRect(), W = S.documentElement, U = W.clientWidth, Q = W.clientHeight, I = W.scrollWidth, z = W.scrollHeight, H = W.scrollTop, G = W.scrollLeft, re = k.height, te = k.width, de = N.height, se = N.width, he = {
        left: 0,
        top: 0,
        right: U,
        bottom: Q
      }, ce = {
        left: -G,
        top: -H,
        right: I - G,
        bottom: z - H
      }, q = M.htmlRegion, pe = "visible", De = "visibleFirst";
      q !== "scroll" && q !== De && (q = pe);
      var Ce = q === De, Ee = wg(ce, v), oe = wg(he, v), ue = q === pe ? oe : Ee, ge = Ce ? oe : ue;
      w.style.left = "auto", w.style.top = "auto", w.style.right = "0", w.style.bottom = "0";
      var be = w.getBoundingClientRect();
      w.style.left = j, w.style.top = T, w.style.right = $, w.style.bottom = P, w.style.overflow = R, (y = w.parentElement) === null || y === void 0 || y.removeChild(F);
      var ye = bi(Math.round(te / parseFloat(A) * 1e3) / 1e3), Ne = bi(Math.round(re / parseFloat(O) * 1e3) / 1e3);
      if (ye === 0 || Ne === 0 || As(r) && !pf(r))
        return;
      var $e = M.offset, je = M.targetOffset, yt = Sg(k, $e), Le = ie(yt, 2), we = Le[0], ze = Le[1], Ve = Sg(N, je), kt = ie(Ve, 2), tt = kt[0], Bt = kt[1];
      N.x -= tt, N.y -= Bt;
      var ht = M.points || [], Qe = ie(ht, 2), st = Qe[0], Wt = Qe[1], wt = xg(Wt), fe = xg(st), Fe = Wa(N, wt), ke = Wa(k, fe), rt = Y({}, M), Je = Fe.x - ke.x + we, Pe = Fe.y - ke.y + ze, Ze = ur(Je, Pe), xe = ur(Je, Pe, oe), Te = Wa(N, ["t", "l"]), ut = Wa(k, ["t", "l"]), Mt = Wa(N, ["b", "r"]), Kt = Wa(k, ["b", "r"]), Nt = M.overflow || {}, an = Nt.adjustX, on = Nt.adjustY, Sr = Nt.shiftX, br = Nt.shiftY, _ = function(sa) {
        return typeof sa == "boolean" ? sa : sa >= 0;
      }, ae, ve, Ie, Xe;
      Ma();
      var it = _(on), Ue = fe[0] === wt[0];
      if (it && fe[0] === "t" && (ve > ge.bottom || p.current.bt)) {
        var He = Pe;
        Ue ? He -= re - de : He = Te.y - Kt.y - ze;
        var Ot = ur(Je, He), Dt = ur(Je, He, oe);
        // Of course use larger one
        Ot > Ze || Ot === Ze && (!Ce || // Choose recommend one
        Dt >= xe) ? (p.current.bt = !0, Pe = He, ze = -ze, rt.points = [kn(fe, 0), kn(wt, 0)]) : p.current.bt = !1;
      }
      if (it && fe[0] === "b" && (ae < ge.top || p.current.tb)) {
        var Ye = Pe;
        Ue ? Ye += re - de : Ye = Mt.y - ut.y - ze;
        var qt = ur(Je, Ye), Ir = ur(Je, Ye, oe);
        // Of course use larger one
        qt > Ze || qt === Ze && (!Ce || // Choose recommend one
        Ir >= xe) ? (p.current.tb = !0, Pe = Ye, ze = -ze, rt.points = [kn(fe, 0), kn(wt, 0)]) : p.current.tb = !1;
      }
      var sn = _(an), Vt = fe[1] === wt[1];
      if (sn && fe[1] === "l" && (Xe > ge.right || p.current.rl)) {
        var Kr = Je;
        Vt ? Kr -= te - se : Kr = Te.x - Kt.x - we;
        var Ra = ur(Kr, Pe), $o = ur(Kr, Pe, oe);
        // Of course use larger one
        Ra > Ze || Ra === Ze && (!Ce || // Choose recommend one
        $o >= xe) ? (p.current.rl = !0, Je = Kr, we = -we, rt.points = [kn(fe, 1), kn(wt, 1)]) : p.current.rl = !1;
      }
      if (sn && fe[1] === "r" && (Ie < ge.left || p.current.lr)) {
        var hn = Je;
        Vt ? hn += te - se : hn = Mt.x - ut.x - we;
        var oa = ur(hn, Pe), qr = ur(hn, Pe, oe);
        // Of course use larger one
        oa > Ze || oa === Ze && (!Ce || // Choose recommend one
        qr >= xe) ? (p.current.lr = !0, Je = hn, we = -we, rt.points = [kn(fe, 1), kn(wt, 1)]) : p.current.lr = !1;
      }
      Ma();
      var Ur = Sr === !0 ? 0 : Sr;
      typeof Ur == "number" && (Ie < oe.left && (Je -= Ie - oe.left - we, N.x + se < oe.left + Ur && (Je += N.x - oe.left + se - Ur)), Xe > oe.right && (Je -= Xe - oe.right - we, N.x > oe.right - Ur && (Je += N.x - oe.right + Ur)));
      var pn = br === !0 ? 0 : br;
      typeof pn == "number" && (ae < oe.top && (Pe -= ae - oe.top - ze, N.y + de < oe.top + pn && (Pe += N.y - oe.top + de - pn)), ve > oe.bottom && (Pe -= ve - oe.bottom - ze, N.y > oe.bottom - pn && (Pe += N.y - oe.bottom + pn)));
      var Mn = k.x + Je, bn = Mn + te, Gr = k.y + Pe, Ta = Gr + re, yn = N.x, un = yn + se, Na = N.y, At = Na + de, vt = Math.max(Mn, yn), pt = Math.min(bn, un), er = (vt + pt) / 2, tr = er - Mn, _n = Math.max(Gr, Na), jn = Math.min(Ta, At), Fo = (_n + jn) / 2, Ia = Fo - Gr;
      i == null || i(t, rt);
      var ia = be.right - k.x - (Je + k.width), Cn = be.bottom - k.y - (Pe + k.height);
      c({
        ready: !0,
        offsetX: Je / ye,
        offsetY: Pe / Ne,
        offsetR: ia / ye,
        offsetB: Cn / Ne,
        arrowX: tr / ye,
        arrowY: Ia / Ne,
        scaleX: ye,
        scaleY: Ne,
        align: rt
      });
    }
  }), m = function() {
    d.current += 1;
    var y = d.current;
    Promise.resolve().then(function() {
      d.current === y && f();
    });
  }, b = function() {
    c(function(y) {
      return Y(Y({}, y), {}, {
        ready: !1
      });
    });
  };
  return Lt(b, [n]), Lt(function() {
    e || b();
  }, [e]), [l.ready, l.offsetX, l.offsetY, l.offsetR, l.offsetB, l.arrowX, l.arrowY, l.scaleX, l.scaleY, l.align, m];
}
function aF(e, t, r, n, a) {
  Lt(function() {
    if (e && t && r) {
      let d = function() {
        n(), a();
      };
      var o = t, i = r, s = wc(o), u = wc(i), l = $i(i), c = new Set([l].concat(Me(s), Me(u)));
      return c.forEach(function(v) {
        v.addEventListener("scroll", d, {
          passive: !0
        });
      }), l.addEventListener("resize", d, {
        passive: !0
      }), n(), function() {
        c.forEach(function(v) {
          v.removeEventListener("scroll", d), l.removeEventListener("resize", d);
        });
      };
    }
  }, [e, t, r]);
}
function oF(e, t, r, n, a, o, i, s) {
  var u = g.useRef(e), l = g.useRef(!1);
  u.current !== e && (l.current = !0, u.current = e), g.useEffect(function() {
    var c = Yt(function() {
      l.current = !1;
    });
    return function() {
      Yt.cancel(c);
    };
  }, [e]), g.useEffect(function() {
    if (t && n && (!a || o)) {
      var c = function() {
        var B = !1, j = function(P) {
          var R = P.target;
          B = i(R);
        }, T = function(P) {
          var R = P.target;
          !l.current && u.current && !B && !i(R) && s(!1);
        };
        return [j, T];
      }, d = c(), v = ie(d, 2), p = v[0], h = v[1], f = c(), m = ie(f, 2), b = m[0], E = m[1], y = $i(n);
      y.addEventListener("mousedown", p, !0), y.addEventListener("click", h, !0), y.addEventListener("contextmenu", h, !0);
      var w = Ts(r);
      if (w && (w.addEventListener("mousedown", b, !0), w.addEventListener("click", E, !0), w.addEventListener("contextmenu", E, !0)), process.env.NODE_ENV !== "production") {
        var S, D, x = r == null || (S = r.getRootNode) === null || S === void 0 ? void 0 : S.call(r), A = (D = n.getRootNode) === null || D === void 0 ? void 0 : D.call(n);
        fo(x === A, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        y.removeEventListener("mousedown", p, !0), y.removeEventListener("click", h, !0), y.removeEventListener("contextmenu", h, !0), w && (w.removeEventListener("mousedown", b, !0), w.removeEventListener("click", E, !0), w.removeEventListener("contextmenu", E, !0));
      };
    }
  }, [t, r, n, a, o]);
}
var iF = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function sF() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ef, t = /* @__PURE__ */ g.forwardRef(function(r, n) {
    var a = r.prefixCls, o = a === void 0 ? "rc-trigger-popup" : a, i = r.children, s = r.action, u = s === void 0 ? "hover" : s, l = r.showAction, c = r.hideAction, d = r.popupVisible, v = r.defaultPopupVisible, p = r.onPopupVisibleChange, h = r.afterPopupVisibleChange, f = r.mouseEnterDelay, m = r.mouseLeaveDelay, b = m === void 0 ? 0.1 : m, E = r.focusDelay, y = r.blurDelay, w = r.mask, S = r.maskClosable, D = S === void 0 ? !0 : S, x = r.getPopupContainer, A = r.forceRender, O = r.autoDestroy, B = r.destroyPopupOnHide, j = r.popup, T = r.popupClassName, $ = r.popupStyle, P = r.popupPlacement, R = r.builtinPlacements, M = R === void 0 ? {} : R, F = r.popupAlign, N = r.zIndex, V = r.stretch, k = r.getPopupClassNameFromAlign, W = r.fresh, U = r.alignPoint, Q = r.onPopupClick, I = r.onPopupAlign, z = r.arrow, H = r.popupMotion, G = r.maskMotion, re = r.popupTransitionName, te = r.popupAnimation, de = r.maskTransitionName, se = r.maskAnimation, he = r.className, ce = r.getTriggerDOMNode, q = ct(r, iF), pe = O || B || !1, De = g.useState(!1), Ce = ie(De, 2), Ee = Ce[0], oe = Ce[1];
    Lt(function() {
      oe(k2());
    }, []);
    var ue = g.useRef({}), ge = g.useContext(yg), be = g.useMemo(function() {
      return {
        registerSubPopup: function(We, _t) {
          ue.current[We] = _t, ge == null || ge.registerSubPopup(We, _t);
        }
      };
    }, [ge]), ye = d$(), Ne = g.useState(null), $e = ie(Ne, 2), je = $e[0], yt = $e[1], Le = Br(function(Re) {
      As(Re) && je !== Re && yt(Re), ge == null || ge.registerSubPopup(ye, Re);
    }), we = g.useState(null), ze = ie(we, 2), Ve = ze[0], kt = ze[1], tt = g.useRef(null), Bt = Br(function(Re) {
      As(Re) && Ve !== Re && (kt(Re), tt.current = Re);
    }), ht = g.Children.only(i), Qe = (ht == null ? void 0 : ht.props) || {}, st = {}, Wt = Br(function(Re) {
      var We, _t, Ut = Ve;
      return (Ut == null ? void 0 : Ut.contains(Re)) || ((We = Ts(Ut)) === null || We === void 0 ? void 0 : We.host) === Re || Re === Ut || (je == null ? void 0 : je.contains(Re)) || ((_t = Ts(je)) === null || _t === void 0 ? void 0 : _t.host) === Re || Re === je || Object.values(ue.current).some(function(jt) {
        return (jt == null ? void 0 : jt.contains(Re)) || Re === jt;
      });
    }), wt = Eg(o, H, te, re), fe = Eg(o, G, se, de), Fe = g.useState(v || !1), ke = ie(Fe, 2), rt = ke[0], Je = ke[1], Pe = d ?? rt, Ze = Br(function(Re) {
      d === void 0 && Je(Re);
    });
    Lt(function() {
      Je(d || !1);
    }, [d]);
    var xe = g.useRef(Pe);
    xe.current = Pe;
    var Te = g.useRef([]);
    Te.current = [];
    var ut = Br(function(Re) {
      var We;
      Ze(Re), ((We = Te.current[Te.current.length - 1]) !== null && We !== void 0 ? We : Pe) !== Re && (Te.current.push(Re), p == null || p(Re));
    }), Mt = g.useRef(), Kt = function() {
      clearTimeout(Mt.current);
    }, Nt = function(We) {
      var _t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      Kt(), _t === 0 ? ut(We) : Mt.current = setTimeout(function() {
        ut(We);
      }, _t * 1e3);
    };
    g.useEffect(function() {
      return Kt;
    }, []);
    var an = g.useState(!1), on = ie(an, 2), Sr = on[0], br = on[1];
    Lt(function(Re) {
      (!Re || Pe) && br(!0);
    }, [Pe]);
    var _ = g.useState(null), ae = ie(_, 2), ve = ae[0], Ie = ae[1], Xe = g.useState([0, 0]), it = ie(Xe, 2), Ue = it[0], He = it[1], Ot = function(We) {
      He([We.clientX, We.clientY]);
    }, Dt = nF(Pe, je, U ? Ue : Ve, P, M, F, I), Ye = ie(Dt, 11), qt = Ye[0], Ir = Ye[1], sn = Ye[2], Vt = Ye[3], Kr = Ye[4], Ra = Ye[5], $o = Ye[6], hn = Ye[7], oa = Ye[8], qr = Ye[9], Ur = Ye[10], pn = eF(Ee, u, l, c), Mn = ie(pn, 2), bn = Mn[0], Gr = Mn[1], Ta = bn.has("click"), yn = Gr.has("click") || Gr.has("contextMenu"), un = Br(function() {
      Sr || Ur();
    }), Na = function() {
      xe.current && U && yn && Nt(!1);
    };
    aF(Pe, Ve, je, un, Na), Lt(function() {
      un();
    }, [Ue, P]), Lt(function() {
      Pe && !(M != null && M[P]) && un();
    }, [JSON.stringify(F)]);
    var At = g.useMemo(function() {
      var Re = rF(M, o, qr, U);
      return ne(Re, k == null ? void 0 : k(qr));
    }, [qr, k, M, o, U]);
    g.useImperativeHandle(n, function() {
      return {
        nativeElement: tt.current,
        forceAlign: un
      };
    });
    var vt = g.useState(0), pt = ie(vt, 2), er = pt[0], tr = pt[1], _n = g.useState(0), jn = ie(_n, 2), Fo = jn[0], Ia = jn[1], ia = function() {
      if (V && Ve) {
        var We = Ve.getBoundingClientRect();
        tr(We.width), Ia(We.height);
      }
    }, Cn = function() {
      ia(), un();
    }, ur = function(We) {
      br(!1), Ur(), h == null || h(We);
    }, Ma = function() {
      return new Promise(function(We) {
        ia(), Ie(function() {
          return We;
        });
      });
    };
    Lt(function() {
      ve && (Ur(), ve(), Ie(null));
    }, [ve]);
    function En(Re, We, _t, Ut) {
      st[Re] = function(jt) {
        var Ti;
        Ut == null || Ut(jt), Nt(We, _t);
        for (var Su = arguments.length, jf = new Array(Su > 1 ? Su - 1 : 0), Ni = 1; Ni < Su; Ni++)
          jf[Ni - 1] = arguments[Ni];
        (Ti = Qe[Re]) === null || Ti === void 0 || Ti.call.apply(Ti, [Qe, jt].concat(jf));
      };
    }
    (Ta || yn) && (st.onClick = function(Re) {
      var We;
      xe.current && yn ? Nt(!1) : !xe.current && Ta && (Ot(Re), Nt(!0));
      for (var _t = arguments.length, Ut = new Array(_t > 1 ? _t - 1 : 0), jt = 1; jt < _t; jt++)
        Ut[jt - 1] = arguments[jt];
      (We = Qe.onClick) === null || We === void 0 || We.call.apply(We, [Qe, Re].concat(Ut));
    }), oF(Pe, yn, Ve, je, w, D, Wt, Nt);
    var sa = bn.has("hover"), _a = Gr.has("hover"), ja, Po;
    sa && (En("onMouseEnter", !0, f, function(Re) {
      Ot(Re);
    }), En("onPointerEnter", !0, f, function(Re) {
      Ot(Re);
    }), ja = function(We) {
      (Pe || Sr) && je !== null && je !== void 0 && je.contains(We.target) && Nt(!0, f);
    }, U && (st.onMouseMove = function(Re) {
      var We;
      (We = Qe.onMouseMove) === null || We === void 0 || We.call(Qe, Re);
    })), _a && (En("onMouseLeave", !1, b), En("onPointerLeave", !1, b), Po = function() {
      Nt(!1, b);
    }), bn.has("focus") && En("onFocus", !0, E), Gr.has("focus") && En("onBlur", !1, y), bn.has("contextMenu") && (st.onContextMenu = function(Re) {
      var We;
      xe.current && Gr.has("contextMenu") ? Nt(!1) : (Ot(Re), Nt(!0)), Re.preventDefault();
      for (var _t = arguments.length, Ut = new Array(_t > 1 ? _t - 1 : 0), jt = 1; jt < _t; jt++)
        Ut[jt - 1] = arguments[jt];
      (We = Qe.onContextMenu) === null || We === void 0 || We.call.apply(We, [Qe, Re].concat(Ut));
    }), he && (st.className = ne(Qe.className, he));
    var Ro = Y(Y({}, Qe), st), Ri = {}, Cu = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Cu.forEach(function(Re) {
      q[Re] && (Ri[Re] = function() {
        for (var We, _t = arguments.length, Ut = new Array(_t), jt = 0; jt < _t; jt++)
          Ut[jt] = arguments[jt];
        (We = Ro[Re]) === null || We === void 0 || We.call.apply(We, [Ro].concat(Ut)), q[Re].apply(q, Ut);
      });
    });
    var Eu = /* @__PURE__ */ g.cloneElement(ht, Y(Y({}, Ro), Ri)), wu = {
      x: Ra,
      y: $o
    }, Du = z ? Y({}, z !== !0 ? z : {}) : null;
    return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(na, {
      disabled: !Pe,
      ref: Bt,
      onResize: Cn
    }, /* @__PURE__ */ g.createElement(b0, {
      getTriggerDOMNode: ce
    }, Eu)), /* @__PURE__ */ g.createElement(yg.Provider, {
      value: be
    }, /* @__PURE__ */ g.createElement(p0, {
      portal: e,
      ref: Le,
      prefixCls: o,
      popup: j,
      className: ne(T, At),
      style: $,
      target: Ve,
      onMouseEnter: ja,
      onMouseLeave: Po,
      onPointerEnter: ja,
      zIndex: N,
      open: Pe,
      keepDom: Sr,
      fresh: W,
      onClick: Q,
      mask: w,
      motion: wt,
      maskMotion: fe,
      onVisibleChanged: ur,
      onPrepare: Ma,
      forceRender: A,
      autoDestroy: pe,
      getPopupContainer: x,
      align: qr,
      arrow: Du,
      arrowPos: wu,
      ready: qt,
      offsetX: Ir,
      offsetY: sn,
      offsetR: Vt,
      offsetB: Kr,
      onAlign: un,
      stretch: V,
      targetWidth: er / hn,
      targetHeight: Fo / oa
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const xf = sF(Ef);
function Dc(e, t, r) {
  return ne({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: r
  });
}
const y0 = (e, t) => t || e, uF = ["outlined", "borderless", "filled"], C0 = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
  const r = St(l2);
  let n;
  typeof e < "u" ? n = e : t === !1 ? n = "borderless" : n = r ?? "outlined";
  const a = uF.includes(n);
  return [n, a];
};
var lF = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" };
const cF = lF;
var fF = function(t, r) {
  return /* @__PURE__ */ g.createElement(Nr, _e({}, t, {
    ref: r,
    icon: cF
  }));
}, E0 = /* @__PURE__ */ g.forwardRef(fF);
process.env.NODE_ENV !== "production" && (E0.displayName = "CheckOutlined");
const dF = E0;
var vF = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" };
const gF = vF;
var mF = function(t, r) {
  return /* @__PURE__ */ g.createElement(Nr, _e({}, t, {
    ref: r,
    icon: gF
  }));
}, w0 = /* @__PURE__ */ g.forwardRef(mF);
process.env.NODE_ENV !== "production" && (w0.displayName = "SearchOutlined");
const hF = w0;
function D0(e) {
  var t = e.children, r = e.prefixCls, n = e.id, a = e.overlayInnerStyle, o = e.className, i = e.style;
  return /* @__PURE__ */ g.createElement("div", {
    className: ne("".concat(r, "-content"), o),
    style: i
  }, /* @__PURE__ */ g.createElement("div", {
    className: "".concat(r, "-inner"),
    id: n,
    role: "tooltip",
    style: a
  }, typeof t == "function" ? t() : t));
}
var Ka = {
  shiftX: 64,
  adjustY: 1
}, qa = {
  adjustX: 1,
  shiftY: !0
}, _r = [0, 0], pF = {
  left: {
    points: ["cr", "cl"],
    overflow: qa,
    offset: [-4, 0],
    targetOffset: _r
  },
  right: {
    points: ["cl", "cr"],
    overflow: qa,
    offset: [4, 0],
    targetOffset: _r
  },
  top: {
    points: ["bc", "tc"],
    overflow: Ka,
    offset: [0, -4],
    targetOffset: _r
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Ka,
    offset: [0, 4],
    targetOffset: _r
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: Ka,
    offset: [0, -4],
    targetOffset: _r
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: qa,
    offset: [-4, 0],
    targetOffset: _r
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Ka,
    offset: [0, -4],
    targetOffset: _r
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: qa,
    offset: [4, 0],
    targetOffset: _r
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Ka,
    offset: [0, 4],
    targetOffset: _r
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: qa,
    offset: [4, 0],
    targetOffset: _r
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Ka,
    offset: [0, 4],
    targetOffset: _r
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: qa,
    offset: [-4, 0],
    targetOffset: _r
  }
}, bF = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"], yF = function(t, r) {
  var n = t.overlayClassName, a = t.trigger, o = a === void 0 ? ["hover"] : a, i = t.mouseEnterDelay, s = i === void 0 ? 0 : i, u = t.mouseLeaveDelay, l = u === void 0 ? 0.1 : u, c = t.overlayStyle, d = t.prefixCls, v = d === void 0 ? "rc-tooltip" : d, p = t.children, h = t.onVisibleChange, f = t.afterVisibleChange, m = t.transitionName, b = t.animation, E = t.motion, y = t.placement, w = y === void 0 ? "right" : y, S = t.align, D = S === void 0 ? {} : S, x = t.destroyTooltipOnHide, A = x === void 0 ? !1 : x, O = t.defaultVisible, B = t.getTooltipContainer, j = t.overlayInnerStyle;
  t.arrowContent;
  var T = t.overlay, $ = t.id, P = t.showArrow, R = P === void 0 ? !0 : P, M = ct(t, bF), F = qe(null);
  Ba(r, function() {
    return F.current;
  });
  var N = Y({}, M);
  "visible" in t && (N.popupVisible = t.visible);
  var V = function() {
    return /* @__PURE__ */ g.createElement(D0, {
      key: "content",
      prefixCls: v,
      id: $,
      overlayInnerStyle: j
    }, T);
  };
  return /* @__PURE__ */ g.createElement(xf, _e({
    popupClassName: n,
    prefixCls: v,
    popup: V,
    action: o,
    builtinPlacements: pF,
    popupPlacement: w,
    ref: F,
    popupAlign: D,
    getPopupContainer: B,
    onPopupVisibleChange: h,
    afterPopupVisibleChange: f,
    popupTransitionName: m,
    popupAnimation: b,
    popupMotion: E,
    defaultPopupVisible: O,
    autoDestroy: A,
    mouseLeaveDelay: l,
    popupStyle: c,
    mouseEnterDelay: s,
    arrow: R
  }, N), p);
};
const CF = /* @__PURE__ */ hr(yF);
function S0(e) {
  const {
    sizePopupArrow: t,
    borderRadiusXS: r,
    borderRadiusOuter: n
  } = e, a = t / 2, o = 0, i = a, s = n * 1 / Math.sqrt(2), u = a - n * (1 - 1 / Math.sqrt(2)), l = a - r * (1 / Math.sqrt(2)), c = n * (Math.sqrt(2) - 1) + r * (1 / Math.sqrt(2)), d = 2 * a - l, v = c, p = 2 * a - s, h = u, f = 2 * a - o, m = i, b = a * Math.sqrt(2) + n * (Math.sqrt(2) - 2), E = n * (Math.sqrt(2) - 1), y = `polygon(${E}px 100%, 50% ${E}px, ${2 * a - E}px 100%, ${E}px 100%)`, w = `path('M ${o} ${i} A ${n} ${n} 0 0 0 ${s} ${u} L ${l} ${c} A ${r} ${r} 0 0 1 ${d} ${v} L ${p} ${h} A ${n} ${n} 0 0 0 ${f} ${m} Z')`;
  return {
    arrowShadowWidth: b,
    arrowPath: w,
    arrowPolygon: y
  };
}
const EF = (e, t, r) => {
  const {
    sizePopupArrow: n,
    arrowPolygon: a,
    arrowPath: o,
    arrowShadowWidth: i,
    borderRadiusXS: s,
    calc: u
  } = e;
  return {
    pointerEvents: "none",
    width: n,
    height: n,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: n,
      height: u(n).div(2).equal(),
      background: t,
      clipPath: {
        _multi_value_: !0,
        value: [a, o]
      },
      content: '""'
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: i,
      height: i,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: !0,
        value: `0 0 ${Se(s)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: r,
      zIndex: 0,
      background: "transparent"
    }
  };
}, x0 = 8;
function Of(e) {
  const {
    contentRadius: t,
    limitVerticalRadius: r
  } = e, n = t > 12 ? t + 2 : 12;
  return {
    arrowOffsetHorizontal: n,
    arrowOffsetVertical: r ? x0 : n
  };
}
function ts(e, t) {
  return e ? t : {};
}
function O0(e, t, r) {
  const {
    componentCls: n,
    boxShadowPopoverArrow: a,
    arrowOffsetVertical: o,
    arrowOffsetHorizontal: i
  } = e, {
    arrowDistance: s = 0,
    arrowPlacement: u = {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }
  } = r || {};
  return {
    [n]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${n}-arrow`]: [Object.assign(Object.assign({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, EF(e, t, a)), {
        "&:before": {
          background: t
        }
      })]
    }, ts(!!u.top, {
      [[`&-placement-top > ${n}-arrow`, `&-placement-topLeft > ${n}-arrow`, `&-placement-topRight > ${n}-arrow`].join(",")]: {
        bottom: s,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top > ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      [`&-placement-topLeft > ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: i
        }
      },
      [`&-placement-topRight > ${n}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: i
        }
      }
    })), ts(!!u.bottom, {
      [[`&-placement-bottom > ${n}-arrow`, `&-placement-bottomLeft > ${n}-arrow`, `&-placement-bottomRight > ${n}-arrow`].join(",")]: {
        top: s,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom > ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      [`&-placement-bottomLeft > ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: i
        }
      },
      [`&-placement-bottomRight > ${n}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: i
        }
      }
    })), ts(!!u.left, {
      [[`&-placement-left > ${n}-arrow`, `&-placement-leftTop > ${n}-arrow`, `&-placement-leftBottom > ${n}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: s
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left > ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop > ${n}-arrow`]: {
        top: o
      },
      [`&-placement-leftBottom > ${n}-arrow`]: {
        bottom: o
      }
    })), ts(!!u.right, {
      [[`&-placement-right > ${n}-arrow`, `&-placement-rightTop > ${n}-arrow`, `&-placement-rightBottom > ${n}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: s
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right > ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop > ${n}-arrow`]: {
        top: o
      },
      [`&-placement-rightBottom > ${n}-arrow`]: {
        bottom: o
      }
    }))
  };
}
function wF(e, t, r, n) {
  if (n === !1)
    return {
      adjustX: !1,
      adjustY: !1
    };
  const a = n && typeof n == "object" ? n : {}, o = {};
  switch (e) {
    case "top":
    case "bottom":
      o.shiftX = t.arrowOffsetHorizontal * 2 + r, o.shiftY = !0, o.adjustY = !0;
      break;
    case "left":
    case "right":
      o.shiftY = t.arrowOffsetVertical * 2 + r, o.shiftX = !0, o.adjustX = !0;
      break;
  }
  const i = Object.assign(Object.assign({}, o), a);
  return i.shiftX || (i.adjustX = !0), i.shiftY || (i.adjustY = !0), i;
}
const Og = {
  left: {
    points: ["cr", "cl"]
  },
  right: {
    points: ["cl", "cr"]
  },
  top: {
    points: ["bc", "tc"]
  },
  bottom: {
    points: ["tc", "bc"]
  },
  topLeft: {
    points: ["bl", "tl"]
  },
  leftTop: {
    points: ["tr", "tl"]
  },
  topRight: {
    points: ["br", "tr"]
  },
  rightTop: {
    points: ["tl", "tr"]
  },
  bottomRight: {
    points: ["tr", "br"]
  },
  rightBottom: {
    points: ["bl", "br"]
  },
  bottomLeft: {
    points: ["tl", "bl"]
  },
  leftBottom: {
    points: ["br", "bl"]
  }
}, DF = {
  topLeft: {
    points: ["bl", "tc"]
  },
  leftTop: {
    points: ["tr", "cl"]
  },
  topRight: {
    points: ["br", "tc"]
  },
  rightTop: {
    points: ["tl", "cr"]
  },
  bottomRight: {
    points: ["tr", "bc"]
  },
  rightBottom: {
    points: ["bl", "cr"]
  },
  bottomLeft: {
    points: ["tl", "bc"]
  },
  leftBottom: {
    points: ["br", "cl"]
  }
}, SF = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function A0(e) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: r,
    arrowPointAtCenter: n,
    offset: a,
    borderRadius: o,
    visibleFirst: i
  } = e, s = t / 2, u = {};
  return Object.keys(Og).forEach((l) => {
    const c = n && DF[l] || Og[l], d = Object.assign(Object.assign({}, c), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (u[l] = d, SF.has(l) && (d.autoArrow = !1), l) {
      case "top":
      case "topLeft":
      case "topRight":
        d.offset[1] = -s - a;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        d.offset[1] = s + a;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        d.offset[0] = -s - a;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        d.offset[0] = s + a;
        break;
    }
    const v = Of({
      contentRadius: o,
      limitVerticalRadius: !0
    });
    if (n)
      switch (l) {
        case "topLeft":
        case "bottomLeft":
          d.offset[0] = -v.arrowOffsetHorizontal - s;
          break;
        case "topRight":
        case "bottomRight":
          d.offset[0] = v.arrowOffsetHorizontal + s;
          break;
        case "leftTop":
        case "rightTop":
          d.offset[1] = -v.arrowOffsetHorizontal - s;
          break;
        case "leftBottom":
        case "rightBottom":
          d.offset[1] = v.arrowOffsetHorizontal + s;
          break;
      }
    d.overflow = wF(l, v, t, r), i && (d.htmlRegion = "visibleFirst");
  }), u;
}
const xF = (e) => {
  const {
    componentCls: t,
    // ant-tooltip
    tooltipMaxWidth: r,
    tooltipColor: n,
    tooltipBg: a,
    tooltipBorderRadius: o,
    zIndexPopup: i,
    controlHeight: s,
    boxShadowSecondary: u,
    paddingSM: l,
    paddingXS: c
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, Yn(e)), {
        position: "absolute",
        zIndex: i,
        display: "block",
        width: "max-content",
        maxWidth: r,
        visibility: "visible",
        transformOrigin: "var(--arrow-x, 50%) var(--arrow-y, 50%)",
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": a,
        // Wrapper for the tooltip content
        [`${t}-inner`]: {
          minWidth: s,
          minHeight: s,
          padding: `${Se(e.calc(l).div(2).equal())} ${Se(c)}`,
          color: n,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: a,
          borderRadius: o,
          boxShadow: u,
          boxSizing: "border-box"
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${t}-inner`]: {
            borderRadius: e.min(o, x0)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), XO(e, (d, v) => {
        let {
          darkColor: p
        } = v;
        return {
          [`&${t}-${d}`]: {
            [`${t}-inner`]: {
              backgroundColor: p
            },
            [`${t}-arrow`]: {
              "--antd-arrow-background-color": p
            }
          }
        };
      })), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    O0(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow
      }
    }
  ];
}, OF = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 70
}, Of({
  contentRadius: e.borderRadius,
  limitVerticalRadius: !0
})), S0(cr(e, {
  borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
}))), B0 = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return aa("Tooltip", (n) => {
    const {
      borderRadius: a,
      colorTextLightSolid: o,
      colorBgSpotlight: i
    } = n, s = cr(n, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: o,
      tooltipBorderRadius: a,
      tooltipBg: i
    });
    return [xF(s), Sf(n, "zoom-big-fast")];
  }, OF, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: t
  })(e);
}, AF = Rs.map((e) => `${e}-inverse`);
function BF(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(Me(AF), Me(Rs)).includes(e) : Rs.includes(e);
}
function $0(e, t) {
  const r = BF(t), n = ne({
    [`${e}-${t}`]: t && r
  }), a = {}, o = {};
  return t && !r && (a.background = t, o["--antd-arrow-background-color"] = t), {
    className: n,
    overlayStyle: a,
    arrowStyle: o
  };
}
const $F = (e) => {
  const {
    prefixCls: t,
    className: r,
    placement: n = "top",
    title: a,
    color: o,
    overlayInnerStyle: i
  } = e, {
    getPrefixCls: s
  } = g.useContext(xt), u = s("tooltip", t), [l, c, d] = B0(u), v = $0(u, o), p = v.arrowStyle, h = Object.assign(Object.assign({}, i), v.overlayStyle), f = ne(c, d, u, `${u}-pure`, `${u}-placement-${n}`, r, v.className);
  return l(/* @__PURE__ */ g.createElement("div", {
    className: f,
    style: p
  }, /* @__PURE__ */ g.createElement("div", {
    className: `${u}-arrow`
  }), /* @__PURE__ */ g.createElement(D0, Object.assign({}, e, {
    className: c,
    prefixCls: u,
    overlayInnerStyle: h
  }), a)));
}, FF = $F;
var PF = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Af = /* @__PURE__ */ g.forwardRef((e, t) => {
  var r, n;
  const {
    prefixCls: a,
    openClassName: o,
    getTooltipContainer: i,
    overlayClassName: s,
    color: u,
    overlayInnerStyle: l,
    children: c,
    afterOpenChange: d,
    afterVisibleChange: v,
    destroyTooltipOnHide: p,
    arrow: h = !0,
    title: f,
    overlay: m,
    builtinPlacements: b,
    arrowPointAtCenter: E = !1,
    autoAdjustOverflow: y = !0
  } = e, w = !!h, [, S] = Hr(), {
    getPopupContainer: D,
    getPrefixCls: x,
    direction: A
  } = g.useContext(xt), O = sr("Tooltip"), B = g.useRef(null), j = () => {
    var ye;
    (ye = B.current) === null || ye === void 0 || ye.forceAlign();
  };
  g.useImperativeHandle(t, () => ({
    forceAlign: j,
    forcePopupAlign: () => {
      O.deprecated(!1, "forcePopupAlign", "forceAlign"), j();
    }
  })), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"]].forEach((ye) => {
    let [Ne, $e] = ye;
    O.deprecated(!(Ne in e), Ne, $e);
  }), process.env.NODE_ENV !== "production" && O(!p || typeof p == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && O(!h || typeof h == "boolean" || !("arrowPointAtCenter" in h), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [T, $] = zr(!1, {
    value: (r = e.open) !== null && r !== void 0 ? r : e.visible,
    defaultValue: (n = e.defaultOpen) !== null && n !== void 0 ? n : e.defaultVisible
  }), P = !f && !m && f !== 0, R = (ye) => {
    var Ne, $e;
    $(P ? !1 : ye), P || ((Ne = e.onOpenChange) === null || Ne === void 0 || Ne.call(e, ye), ($e = e.onVisibleChange) === null || $e === void 0 || $e.call(e, ye));
  }, M = g.useMemo(() => {
    var ye, Ne;
    let $e = E;
    return typeof h == "object" && ($e = (Ne = (ye = h.pointAtCenter) !== null && ye !== void 0 ? ye : h.arrowPointAtCenter) !== null && Ne !== void 0 ? Ne : E), b || A0({
      arrowPointAtCenter: $e,
      autoAdjustOverflow: y,
      arrowWidth: w ? S.sizePopupArrow : 0,
      borderRadius: S.borderRadius,
      offset: S.marginXXS,
      visibleFirst: !0
    });
  }, [E, h, b, S]), F = g.useMemo(() => f === 0 ? f : m || f || "", [m, f]), N = /* @__PURE__ */ g.createElement(Is, null, typeof F == "function" ? F() : F), {
    getPopupContainer: V,
    placement: k = "top",
    mouseEnterDelay: W = 0.1,
    mouseLeaveDelay: U = 0.1,
    overlayStyle: Q,
    rootClassName: I
  } = e, z = PF(e, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), H = x("tooltip", a), G = x(), re = e["data-popover-inject"];
  let te = T;
  !("open" in e) && !("visible" in e) && P && (te = !1);
  const de = Jn(c) && !kp(c) ? c : /* @__PURE__ */ g.createElement("span", null, c), se = de.props, he = !se.className || typeof se.className == "string" ? ne(se.className, o || `${H}-open`) : se.className, [ce, q, pe] = B0(H, !re), De = $0(H, u), Ce = De.arrowStyle, Ee = Object.assign(Object.assign({}, l), De.overlayStyle), oe = ne(s, {
    [`${H}-rtl`]: A === "rtl"
  }, De.className, I, q, pe), [ue, ge] = hf("Tooltip", z.zIndex), be = /* @__PURE__ */ g.createElement(CF, Object.assign({}, z, {
    zIndex: ue,
    showArrow: w,
    placement: k,
    mouseEnterDelay: W,
    mouseLeaveDelay: U,
    prefixCls: H,
    overlayClassName: oe,
    overlayStyle: Object.assign(Object.assign({}, Ce), Q),
    getTooltipContainer: V || i || D,
    ref: B,
    builtinPlacements: M,
    overlay: N,
    visible: te,
    onVisibleChange: R,
    afterVisibleChange: d ?? v,
    overlayInnerStyle: Ee,
    arrowContent: /* @__PURE__ */ g.createElement("span", {
      className: `${H}-arrow-content`
    }),
    motion: {
      motionName: lB(G, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!p
  }), te ? mn(de, {
    className: he
  }) : de);
  return ce(/* @__PURE__ */ g.createElement(uu.Provider, {
    value: ge
  }, be));
});
process.env.NODE_ENV !== "production" && (Af.displayName = "Tooltip");
Af._InternalPanelDoNotUseOrYouWillBeFired = FF;
const ks = Af;
var RF = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" };
const TF = RF;
var NF = function(t, r) {
  return /* @__PURE__ */ g.createElement(Nr, _e({}, t, {
    ref: r,
    icon: TF
  }));
}, F0 = /* @__PURE__ */ g.forwardRef(NF);
process.env.NODE_ENV !== "production" && (F0.displayName = "RightOutlined");
const Sc = F0;
var IF = Ae.ESC, MF = Ae.TAB;
function _F(e) {
  var t = e.visible, r = e.triggerRef, n = e.onVisibleChange, a = e.autoFocus, o = e.overlayRef, i = g.useRef(!1), s = function() {
    if (t) {
      var d, v;
      (d = r.current) === null || d === void 0 || (v = d.focus) === null || v === void 0 || v.call(d), n == null || n(!1);
    }
  }, u = function() {
    var d;
    return (d = o.current) !== null && d !== void 0 && d.focus ? (o.current.focus(), i.current = !0, !0) : !1;
  }, l = function(d) {
    switch (d.keyCode) {
      case IF:
        s();
        break;
      case MF: {
        var v = !1;
        i.current || (v = u()), v ? d.preventDefault() : s();
        break;
      }
    }
  };
  g.useEffect(function() {
    return t ? (window.addEventListener("keydown", l), a && Yt(u, 3), function() {
      window.removeEventListener("keydown", l), i.current = !1;
    }) : function() {
      i.current = !1;
    };
  }, [t]);
}
var jF = /* @__PURE__ */ hr(function(e, t) {
  var r = e.overlay, n = e.arrow, a = e.prefixCls, o = Xt(function() {
    var s;
    return typeof r == "function" ? s = r() : s = r, s;
  }, [r]), i = nn(t, o == null ? void 0 : o.ref);
  return /* @__PURE__ */ Z.createElement(Z.Fragment, null, n && /* @__PURE__ */ Z.createElement("div", {
    className: "".concat(a, "-arrow")
  }), /* @__PURE__ */ Z.cloneElement(o, {
    ref: ra(o) ? i : void 0
  }));
}), Ua = {
  adjustX: 1,
  adjustY: 1
}, Ga = [0, 0], LF = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: Ua,
    offset: [0, -4],
    targetOffset: Ga
  },
  top: {
    points: ["bc", "tc"],
    overflow: Ua,
    offset: [0, -4],
    targetOffset: Ga
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Ua,
    offset: [0, -4],
    targetOffset: Ga
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Ua,
    offset: [0, 4],
    targetOffset: Ga
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Ua,
    offset: [0, 4],
    targetOffset: Ga
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Ua,
    offset: [0, 4],
    targetOffset: Ga
  }
}, kF = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus", "overlay", "children", "onVisibleChange"];
function zF(e, t) {
  var r, n = e.arrow, a = n === void 0 ? !1 : n, o = e.prefixCls, i = o === void 0 ? "rc-dropdown" : o, s = e.transitionName, u = e.animation, l = e.align, c = e.placement, d = c === void 0 ? "bottomLeft" : c, v = e.placements, p = v === void 0 ? LF : v, h = e.getPopupContainer, f = e.showAction, m = e.hideAction, b = e.overlayClassName, E = e.overlayStyle, y = e.visible, w = e.trigger, S = w === void 0 ? ["hover"] : w, D = e.autoFocus, x = e.overlay, A = e.children, O = e.onVisibleChange, B = ct(e, kF), j = Z.useState(), T = ie(j, 2), $ = T[0], P = T[1], R = "visible" in e ? y : $, M = Z.useRef(null), F = Z.useRef(null), N = Z.useRef(null);
  Z.useImperativeHandle(t, function() {
    return M.current;
  });
  var V = function(re) {
    P(re), O == null || O(re);
  };
  _F({
    visible: R,
    triggerRef: N,
    onVisibleChange: V,
    autoFocus: D,
    overlayRef: F
  });
  var k = function(re) {
    var te = e.onOverlayClick;
    P(!1), te && te(re);
  }, W = function() {
    return /* @__PURE__ */ Z.createElement(jF, {
      ref: F,
      overlay: x,
      prefixCls: i,
      arrow: a
    });
  }, U = function() {
    return typeof x == "function" ? W : W();
  }, Q = function() {
    var re = e.minOverlayWidthMatchTrigger, te = e.alignPoint;
    return "minOverlayWidthMatchTrigger" in e ? re : !te;
  }, I = function() {
    var re = e.openClassName;
    return re !== void 0 ? re : "".concat(i, "-open");
  }, z = /* @__PURE__ */ Z.cloneElement(A, {
    className: ne((r = A.props) === null || r === void 0 ? void 0 : r.className, R && I()),
    ref: ra(A) ? nn(N, A.ref) : void 0
  }), H = m;
  return !H && S.indexOf("contextMenu") !== -1 && (H = ["click"]), /* @__PURE__ */ Z.createElement(xf, _e({
    builtinPlacements: p
  }, B, {
    prefixCls: i,
    ref: M,
    popupClassName: ne(b, K({}, "".concat(i, "-show-arrow"), a)),
    popupStyle: E,
    action: S,
    showAction: f,
    hideAction: H,
    popupPlacement: d,
    popupAlign: l,
    popupTransitionName: s,
    popupAnimation: u,
    popupVisible: R,
    stretch: Q() ? "minWidth" : "",
    popup: U(),
    onPopupVisibleChange: V,
    onPopupClick: k,
    getPopupContainer: h
  }), z);
}
const VF = /* @__PURE__ */ Z.forwardRef(zF);
var P0 = /* @__PURE__ */ g.createContext(null);
function R0(e, t) {
  return e === void 0 ? null : "".concat(e, "-").concat(t);
}
function T0(e) {
  var t = g.useContext(P0);
  return R0(t, e);
}
var HF = ["children", "locked"], rn = /* @__PURE__ */ g.createContext(null);
function WF(e, t) {
  var r = Y({}, e);
  return Object.keys(t).forEach(function(n) {
    var a = t[n];
    a !== void 0 && (r[n] = a);
  }), r;
}
function yi(e) {
  var t = e.children, r = e.locked, n = ct(e, HF), a = g.useContext(rn), o = Ci(function() {
    return WF(a, n);
  }, [a, n], function(i, s) {
    return !r && (i[0] !== s[0] || !go(i[1], s[1], !0));
  });
  return /* @__PURE__ */ g.createElement(rn.Provider, {
    value: o
  }, t);
}
var KF = [], N0 = /* @__PURE__ */ g.createContext(null);
function vu() {
  return g.useContext(N0);
}
var I0 = /* @__PURE__ */ g.createContext(KF);
function Oo(e) {
  var t = g.useContext(I0);
  return g.useMemo(function() {
    return e !== void 0 ? [].concat(Me(t), [e]) : t;
  }, [t, e]);
}
var M0 = /* @__PURE__ */ g.createContext(null), Bf = /* @__PURE__ */ g.createContext({});
function Ag(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (pf(e)) {
    var r = e.nodeName.toLowerCase(), n = (
      // Focusable element
      ["input", "select", "textarea", "button"].includes(r) || // Editable element
      e.isContentEditable || // Anchor with href element
      r === "a" && !!e.getAttribute("href")
    ), a = e.getAttribute("tabindex"), o = Number(a), i = null;
    return a && !Number.isNaN(o) ? i = o : n && i === null && (i = 0), n && e.disabled && (i = null), i !== null && (i >= 0 || t && i < 0);
  }
  return !1;
}
function qF(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = Me(e.querySelectorAll("*")).filter(function(n) {
    return Ag(n, t);
  });
  return Ag(e, t) && r.unshift(e), r;
}
var xc = Ae.LEFT, Oc = Ae.RIGHT, Ac = Ae.UP, bs = Ae.DOWN, ys = Ae.ENTER, _0 = Ae.ESC, zo = Ae.HOME, Vo = Ae.END, Bg = [Ac, bs, xc, Oc];
function UF(e, t, r, n) {
  var a, o, i, s, u = "prev", l = "next", c = "children", d = "parent";
  if (e === "inline" && n === ys)
    return {
      inlineTrigger: !0
    };
  var v = (a = {}, K(a, Ac, u), K(a, bs, l), a), p = (o = {}, K(o, xc, r ? l : u), K(o, Oc, r ? u : l), K(o, bs, c), K(o, ys, c), o), h = (i = {}, K(i, Ac, u), K(i, bs, l), K(i, ys, c), K(i, _0, d), K(i, xc, r ? c : d), K(i, Oc, r ? d : c), i), f = {
    inline: v,
    horizontal: p,
    vertical: h,
    inlineSub: v,
    horizontalSub: h,
    verticalSub: h
  }, m = (s = f["".concat(e).concat(t ? "" : "Sub")]) === null || s === void 0 ? void 0 : s[n];
  switch (m) {
    case u:
      return {
        offset: -1,
        sibling: !0
      };
    case l:
      return {
        offset: 1,
        sibling: !0
      };
    case d:
      return {
        offset: -1,
        sibling: !1
      };
    case c:
      return {
        offset: 1,
        sibling: !1
      };
    default:
      return null;
  }
}
function GF(e) {
  for (var t = e; t; ) {
    if (t.getAttribute("data-menu-list"))
      return t;
    t = t.parentElement;
  }
  return null;
}
function XF(e, t) {
  for (var r = e || document.activeElement; r; ) {
    if (t.has(r))
      return r;
    r = r.parentElement;
  }
  return null;
}
function $f(e, t) {
  var r = qF(e, !0);
  return r.filter(function(n) {
    return t.has(n);
  });
}
function $g(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!e)
    return null;
  var a = $f(e, t), o = a.length, i = a.findIndex(function(s) {
    return r === s;
  });
  return n < 0 ? i === -1 ? i = o - 1 : i -= 1 : n > 0 && (i += 1), i = (i + o) % o, a[i];
}
var Bc = function(t, r) {
  var n = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  return t.forEach(function(i) {
    var s = document.querySelector("[data-menu-id='".concat(R0(r, i), "']"));
    s && (n.add(s), o.set(s, i), a.set(i, s));
  }), {
    elements: n,
    key2element: a,
    element2key: o
  };
};
function YF(e, t, r, n, a, o, i, s, u, l) {
  var c = g.useRef(), d = g.useRef();
  d.current = t;
  var v = function() {
    Yt.cancel(c.current);
  };
  return g.useEffect(function() {
    return function() {
      v();
    };
  }, []), function(p) {
    var h = p.which;
    if ([].concat(Bg, [ys, _0, zo, Vo]).includes(h)) {
      var f = o(), m = Bc(f, n), b = m, E = b.elements, y = b.key2element, w = b.element2key, S = y.get(t), D = XF(S, E), x = w.get(D), A = UF(e, i(x, !0).length === 1, r, h);
      if (!A && h !== zo && h !== Vo)
        return;
      (Bg.includes(h) || [zo, Vo].includes(h)) && p.preventDefault();
      var O = function(F) {
        if (F) {
          var N = F, V = F.querySelector("a");
          V != null && V.getAttribute("href") && (N = V);
          var k = w.get(F);
          s(k), v(), c.current = Yt(function() {
            d.current === k && N.focus();
          });
        }
      };
      if ([zo, Vo].includes(h) || A.sibling || !D) {
        var B;
        !D || e === "inline" ? B = a.current : B = GF(D);
        var j, T = $f(B, E);
        h === zo ? j = T[0] : h === Vo ? j = T[T.length - 1] : j = $g(B, E, D, A.offset), O(j);
      } else if (A.inlineTrigger)
        u(x);
      else if (A.offset > 0)
        u(x, !0), v(), c.current = Yt(function() {
          m = Bc(f, n);
          var M = D.getAttribute("aria-controls"), F = document.getElementById(M), N = $g(F, m.elements);
          O(N);
        }, 5);
      else if (A.offset < 0) {
        var $ = i(x, !0), P = $[$.length - 2], R = y.get(P);
        u(P, !1), O(R);
      }
    }
    l == null || l(p);
  };
}
function ZF(e) {
  Promise.resolve().then(e);
}
var Ff = "__RC_UTIL_PATH_SPLIT__", Fg = function(t) {
  return t.join(Ff);
}, QF = function(t) {
  return t.split(Ff);
}, $c = "rc-menu-more";
function JF() {
  var e = g.useState({}), t = ie(e, 2), r = t[1], n = qe(/* @__PURE__ */ new Map()), a = qe(/* @__PURE__ */ new Map()), o = g.useState([]), i = ie(o, 2), s = i[0], u = i[1], l = qe(0), c = qe(!1), d = function() {
    c.current || r({});
  }, v = et(function(y, w) {
    process.env.NODE_ENV !== "production" && bt(!n.current.has(y), "Duplicated key '".concat(y, "' used in Menu by path [").concat(w.join(" > "), "]"));
    var S = Fg(w);
    a.current.set(S, y), n.current.set(y, S), l.current += 1;
    var D = l.current;
    ZF(function() {
      D === l.current && d();
    });
  }, []), p = et(function(y, w) {
    var S = Fg(w);
    a.current.delete(S), n.current.delete(y);
  }, []), h = et(function(y) {
    u(y);
  }, []), f = et(function(y, w) {
    var S = n.current.get(y) || "", D = QF(S);
    return w && s.includes(D[0]) && D.unshift($c), D;
  }, [s]), m = et(function(y, w) {
    return y.some(function(S) {
      var D = f(S, !0);
      return D.includes(w);
    });
  }, [f]), b = function() {
    var w = Me(n.current.keys());
    return s.length && w.push($c), w;
  }, E = et(function(y) {
    var w = "".concat(n.current.get(y)).concat(Ff), S = /* @__PURE__ */ new Set();
    return Me(a.current.keys()).forEach(function(D) {
      D.startsWith(w) && S.add(a.current.get(D));
    }), S;
  }, []);
  return g.useEffect(function() {
    return function() {
      c.current = !0;
    };
  }, []), {
    // Register
    registerPath: v,
    unregisterPath: p,
    refreshOverflowKeys: h,
    // Util
    isSubPathKey: m,
    getKeyPath: f,
    getKeys: b,
    getSubPathKeys: E
  };
}
function qo(e) {
  var t = g.useRef(e);
  t.current = e;
  var r = g.useCallback(function() {
    for (var n, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(o));
  }, []);
  return e ? r : void 0;
}
var eP = Math.random().toFixed(5).toString().slice(2), Pg = 0;
function tP(e) {
  var t = zr(e, {
    value: e
  }), r = ie(t, 2), n = r[0], a = r[1];
  return g.useEffect(function() {
    Pg += 1;
    var o = process.env.NODE_ENV === "test" ? "test" : "".concat(eP, "-").concat(Pg);
    a("rc-menu-uuid-".concat(o));
  }, []), n;
}
function j0(e, t, r, n) {
  var a = g.useContext(rn), o = a.activeKey, i = a.onActive, s = a.onInactive, u = {
    active: o === e
  };
  return t || (u.onMouseEnter = function(l) {
    r == null || r({
      key: e,
      domEvent: l
    }), i(e);
  }, u.onMouseLeave = function(l) {
    n == null || n({
      key: e,
      domEvent: l
    }), s(e);
  }), u;
}
function L0(e) {
  var t = g.useContext(rn), r = t.mode, n = t.rtl, a = t.inlineIndent;
  if (r !== "inline")
    return null;
  var o = e;
  return n ? {
    paddingRight: o * a
  } : {
    paddingLeft: o * a
  };
}
function k0(e) {
  var t = e.icon, r = e.props, n = e.children, a;
  return t === null || t === !1 ? null : (typeof t == "function" ? a = /* @__PURE__ */ g.createElement(t, Y({}, r)) : typeof t != "boolean" && (a = t), a || n || null);
}
var rP = ["item"];
function zs(e) {
  var t = e.item, r = ct(e, rP);
  return Object.defineProperty(r, "item", {
    get: function() {
      return bt(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), t;
    }
  }), r;
}
var nP = ["title", "attribute", "elementRef"], aP = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"], oP = ["active"], iP = /* @__PURE__ */ function(e) {
  $a(r, e);
  var t = wi(r);
  function r() {
    return wr(this, r), t.apply(this, arguments);
  }
  return Dr(r, [{
    key: "render",
    value: function() {
      var a = this.props, o = a.title, i = a.attribute, s = a.elementRef, u = ct(a, nP), l = Tr(u, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
      return bt(!i, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), /* @__PURE__ */ g.createElement(Pn.Item, _e({}, i, {
        title: typeof o == "string" ? o : void 0
      }, l, {
        ref: s
      }));
    }
  }]), r;
}(g.Component), sP = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var r, n = e.style, a = e.className, o = e.eventKey, i = e.warnKey, s = e.disabled, u = e.itemIcon, l = e.children, c = e.role, d = e.onMouseEnter, v = e.onMouseLeave, p = e.onClick, h = e.onKeyDown, f = e.onFocus, m = ct(e, aP), b = T0(o), E = g.useContext(rn), y = E.prefixCls, w = E.onItemClick, S = E.disabled, D = E.overflowDisabled, x = E.itemIcon, A = E.selectedKeys, O = E.onActive, B = g.useContext(Bf), j = B._internalRenderMenuItem, T = "".concat(y, "-item"), $ = g.useRef(), P = g.useRef(), R = S || s, M = Ei(t, P), F = Oo(o);
  process.env.NODE_ENV !== "production" && i && bt(!1, "MenuItem should not leave undefined `key`.");
  var N = function(se) {
    return {
      key: o,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: Me(F).reverse(),
      item: $.current,
      domEvent: se
    };
  }, V = u || x, k = j0(o, R, d, v), W = k.active, U = ct(k, oP), Q = A.includes(o), I = L0(F.length), z = function(se) {
    if (!R) {
      var he = N(se);
      p == null || p(zs(he)), w(he);
    }
  }, H = function(se) {
    if (h == null || h(se), se.which === Ae.ENTER) {
      var he = N(se);
      p == null || p(zs(he)), w(he);
    }
  }, G = function(se) {
    O(o), f == null || f(se);
  }, re = {};
  e.role === "option" && (re["aria-selected"] = Q);
  var te = /* @__PURE__ */ g.createElement(iP, _e({
    ref: $,
    elementRef: M,
    role: c === null ? "none" : c || "menuitem",
    tabIndex: s ? null : -1,
    "data-menu-id": D && b ? null : b
  }, m, U, re, {
    component: "li",
    "aria-disabled": s,
    style: Y(Y({}, I), n),
    className: ne(T, (r = {}, K(r, "".concat(T, "-active"), W), K(r, "".concat(T, "-selected"), Q), K(r, "".concat(T, "-disabled"), R), r), a),
    onClick: z,
    onKeyDown: H,
    onFocus: G
  }), l, /* @__PURE__ */ g.createElement(k0, {
    props: Y(Y({}, e), {}, {
      isSelected: Q
    }),
    icon: V
  }));
  return j && (te = j(te, e, {
    selected: Q
  })), te;
});
function uP(e, t) {
  var r = e.eventKey, n = vu(), a = Oo(r);
  return g.useEffect(function() {
    if (n)
      return n.registerPath(r, a), function() {
        n.unregisterPath(r, a);
      };
  }, [a]), n ? null : /* @__PURE__ */ g.createElement(sP, _e({}, e, {
    ref: t
  }));
}
const gu = /* @__PURE__ */ g.forwardRef(uP);
var lP = ["className", "children"], cP = function(t, r) {
  var n = t.className, a = t.children, o = ct(t, lP), i = g.useContext(rn), s = i.prefixCls, u = i.mode, l = i.rtl;
  return /* @__PURE__ */ g.createElement("ul", _e({
    className: ne(s, l && "".concat(s, "-rtl"), "".concat(s, "-sub"), "".concat(s, "-").concat(u === "inline" ? "inline" : "vertical"), n),
    role: "menu"
  }, o, {
    "data-menu-list": !0,
    ref: r
  }), a);
}, Pf = /* @__PURE__ */ g.forwardRef(cP);
Pf.displayName = "SubMenuList";
function Rf(e, t) {
  return gn(e).map(function(r, n) {
    if (/* @__PURE__ */ g.isValidElement(r)) {
      var a, o, i = r.key, s = (a = (o = r.props) === null || o === void 0 ? void 0 : o.eventKey) !== null && a !== void 0 ? a : i, u = s == null;
      u && (s = "tmp_key-".concat([].concat(Me(t), [n]).join("-")));
      var l = {
        key: s,
        eventKey: s
      };
      return process.env.NODE_ENV !== "production" && u && (l.warnKey = !0), /* @__PURE__ */ g.cloneElement(r, l);
    }
    return r;
  });
}
var lr = {
  adjustX: 1,
  adjustY: 1
}, fP = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: lr
  },
  topRight: {
    points: ["br", "tr"],
    overflow: lr
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: lr
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: lr
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: lr
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: lr
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: lr
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: lr
  }
}, dP = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: lr
  },
  topRight: {
    points: ["br", "tr"],
    overflow: lr
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: lr
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: lr
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: lr
  },
  rightBottom: {
    points: ["br", "bl"],
    overflow: lr
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: lr
  },
  leftBottom: {
    points: ["bl", "br"],
    overflow: lr
  }
};
function z0(e, t, r) {
  if (t)
    return t;
  if (r)
    return r[e] || r.other;
}
var vP = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function gP(e) {
  var t = e.prefixCls, r = e.visible, n = e.children, a = e.popup, o = e.popupStyle, i = e.popupClassName, s = e.popupOffset, u = e.disabled, l = e.mode, c = e.onVisibleChange, d = g.useContext(rn), v = d.getPopupContainer, p = d.rtl, h = d.subMenuOpenDelay, f = d.subMenuCloseDelay, m = d.builtinPlacements, b = d.triggerSubMenuAction, E = d.forceSubMenuRender, y = d.rootClassName, w = d.motion, S = d.defaultMotions, D = g.useState(!1), x = ie(D, 2), A = x[0], O = x[1], B = Y(p ? Y({}, dP) : Y({}, fP), m), j = vP[l], T = z0(l, w, S), $ = g.useRef(T);
  l !== "inline" && ($.current = T);
  var P = Y(Y({}, $.current), {}, {
    leavedClassName: "".concat(t, "-hidden"),
    removeOnLeave: !1,
    motionAppear: !0
  }), R = g.useRef();
  return g.useEffect(function() {
    return R.current = Yt(function() {
      O(r);
    }), function() {
      Yt.cancel(R.current);
    };
  }, [r]), /* @__PURE__ */ g.createElement(xf, {
    prefixCls: t,
    popupClassName: ne("".concat(t, "-popup"), K({}, "".concat(t, "-rtl"), p), i, y),
    stretch: l === "horizontal" ? "minWidth" : null,
    getPopupContainer: v,
    builtinPlacements: B,
    popupPlacement: j,
    popupVisible: A,
    popup: a,
    popupStyle: o,
    popupAlign: s && {
      offset: s
    },
    action: u ? [] : [b],
    mouseEnterDelay: h,
    mouseLeaveDelay: f,
    onPopupVisibleChange: c,
    forceRender: E,
    popupMotion: P,
    fresh: !0
  }, n);
}
function mP(e) {
  var t = e.id, r = e.open, n = e.keyPath, a = e.children, o = "inline", i = g.useContext(rn), s = i.prefixCls, u = i.forceSubMenuRender, l = i.motion, c = i.defaultMotions, d = i.mode, v = g.useRef(!1);
  v.current = d === o;
  var p = g.useState(!v.current), h = ie(p, 2), f = h[0], m = h[1], b = v.current ? r : !1;
  g.useEffect(function() {
    v.current && m(!1);
  }, [d]);
  var E = Y({}, z0(o, l, c));
  n.length > 1 && (E.motionAppear = !1);
  var y = E.onVisibleChanged;
  return E.onVisibleChanged = function(w) {
    return !v.current && !w && m(!0), y == null ? void 0 : y(w);
  }, f ? null : /* @__PURE__ */ g.createElement(yi, {
    mode: o,
    locked: !v.current
  }, /* @__PURE__ */ g.createElement(So, _e({
    visible: b
  }, E, {
    forceRender: u,
    removeOnLeave: !1,
    leavedClassName: "".concat(s, "-hidden")
  }), function(w) {
    var S = w.className, D = w.style;
    return /* @__PURE__ */ g.createElement(Pf, {
      id: t,
      className: S,
      style: D
    }, a);
  }));
}
var hP = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "popupStyle", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"], pP = ["active"], bP = function(t) {
  var r, n = t.style, a = t.className, o = t.title, i = t.eventKey, s = t.warnKey, u = t.disabled, l = t.internalPopupClose, c = t.children, d = t.itemIcon, v = t.expandIcon, p = t.popupClassName, h = t.popupOffset, f = t.popupStyle, m = t.onClick, b = t.onMouseEnter, E = t.onMouseLeave, y = t.onTitleClick, w = t.onTitleMouseEnter, S = t.onTitleMouseLeave, D = ct(t, hP), x = T0(i), A = g.useContext(rn), O = A.prefixCls, B = A.mode, j = A.openKeys, T = A.disabled, $ = A.overflowDisabled, P = A.activeKey, R = A.selectedKeys, M = A.itemIcon, F = A.expandIcon, N = A.onItemClick, V = A.onOpenChange, k = A.onActive, W = g.useContext(Bf), U = W._internalRenderSubMenuItem, Q = g.useContext(M0), I = Q.isSubPathKey, z = Oo(), H = "".concat(O, "-submenu"), G = T || u, re = g.useRef(), te = g.useRef();
  process.env.NODE_ENV !== "production" && s && bt(!1, "SubMenu should not leave undefined `key`.");
  var de = d ?? M, se = v ?? F, he = j.includes(i), ce = !$ && he, q = I(R, i), pe = j0(i, G, w, S), De = pe.active, Ce = ct(pe, pP), Ee = g.useState(!1), oe = ie(Ee, 2), ue = oe[0], ge = oe[1], be = function(st) {
    G || ge(st);
  }, ye = function(st) {
    be(!0), b == null || b({
      key: i,
      domEvent: st
    });
  }, Ne = function(st) {
    be(!1), E == null || E({
      key: i,
      domEvent: st
    });
  }, $e = g.useMemo(function() {
    return De || (B !== "inline" ? ue || I([P], i) : !1);
  }, [B, De, P, ue, i, I]), je = L0(z.length), yt = function(st) {
    G || (y == null || y({
      key: i,
      domEvent: st
    }), B === "inline" && V(i, !he));
  }, Le = qo(function(Qe) {
    m == null || m(zs(Qe)), N(Qe);
  }), we = function(st) {
    B !== "inline" && V(i, st);
  }, ze = function() {
    k(i);
  }, Ve = x && "".concat(x, "-popup"), kt = /* @__PURE__ */ g.createElement("div", _e({
    role: "menuitem",
    style: je,
    className: "".concat(H, "-title"),
    tabIndex: G ? null : -1,
    ref: re,
    title: typeof o == "string" ? o : null,
    "data-menu-id": $ && x ? null : x,
    "aria-expanded": ce,
    "aria-haspopup": !0,
    "aria-controls": Ve,
    "aria-disabled": G,
    onClick: yt,
    onFocus: ze
  }, Ce), o, /* @__PURE__ */ g.createElement(k0, {
    icon: B !== "horizontal" ? se : void 0,
    props: Y(Y({}, t), {}, {
      isOpen: ce,
      // [Legacy] Not sure why need this mark
      isSubMenu: !0
    })
  }, /* @__PURE__ */ g.createElement("i", {
    className: "".concat(H, "-arrow")
  }))), tt = g.useRef(B);
  if (B !== "inline" && z.length > 1 ? tt.current = "vertical" : tt.current = B, !$) {
    var Bt = tt.current;
    kt = /* @__PURE__ */ g.createElement(gP, {
      mode: Bt,
      prefixCls: H,
      visible: !l && ce && B !== "inline",
      popupClassName: p,
      popupOffset: h,
      popupStyle: f,
      popup: /* @__PURE__ */ g.createElement(
        yi,
        {
          mode: Bt === "horizontal" ? "vertical" : Bt
        },
        /* @__PURE__ */ g.createElement(Pf, {
          id: Ve,
          ref: te
        }, c)
      ),
      disabled: G,
      onVisibleChange: we
    }, kt);
  }
  var ht = /* @__PURE__ */ g.createElement(Pn.Item, _e({
    role: "none"
  }, D, {
    component: "li",
    style: n,
    className: ne(H, "".concat(H, "-").concat(B), a, (r = {}, K(r, "".concat(H, "-open"), ce), K(r, "".concat(H, "-active"), $e), K(r, "".concat(H, "-selected"), q), K(r, "".concat(H, "-disabled"), G), r)),
    onMouseEnter: ye,
    onMouseLeave: Ne
  }), kt, !$ && /* @__PURE__ */ g.createElement(mP, {
    id: Ve,
    open: ce,
    keyPath: z
  }, c));
  return U && (ht = U(ht, t, {
    selected: q,
    active: $e,
    open: ce,
    disabled: G
  })), /* @__PURE__ */ g.createElement(yi, {
    onItemClick: Le,
    mode: B === "horizontal" ? "vertical" : B,
    itemIcon: de,
    expandIcon: se
  }, ht);
};
function mu(e) {
  var t = e.eventKey, r = e.children, n = Oo(t), a = Rf(r, n), o = vu();
  g.useEffect(function() {
    if (o)
      return o.registerPath(t, n), function() {
        o.unregisterPath(t, n);
      };
  }, [n]);
  var i;
  return o ? i = a : i = /* @__PURE__ */ g.createElement(bP, e, a), /* @__PURE__ */ g.createElement(I0.Provider, {
    value: n
  }, i);
}
var yP = ["className", "title", "eventKey", "children"], CP = ["children"], EP = function(t) {
  var r = t.className, n = t.title;
  t.eventKey;
  var a = t.children, o = ct(t, yP), i = g.useContext(rn), s = i.prefixCls, u = "".concat(s, "-item-group");
  return /* @__PURE__ */ g.createElement("li", _e({
    role: "presentation"
  }, o, {
    onClick: function(c) {
      return c.stopPropagation();
    },
    className: ne(u, r)
  }), /* @__PURE__ */ g.createElement("div", {
    role: "presentation",
    className: "".concat(u, "-title"),
    title: typeof n == "string" ? n : void 0
  }, n), /* @__PURE__ */ g.createElement("ul", {
    role: "group",
    className: "".concat(u, "-list")
  }, a));
};
function hu(e) {
  var t = e.children, r = ct(e, CP), n = Oo(r.eventKey), a = Rf(t, n), o = vu();
  return o ? a : /* @__PURE__ */ g.createElement(EP, Tr(r, ["warnKey"]), a);
}
function Tf(e) {
  var t = e.className, r = e.style, n = g.useContext(rn), a = n.prefixCls, o = vu();
  return o ? null : /* @__PURE__ */ g.createElement("li", {
    role: "separator",
    className: ne("".concat(a, "-item-divider"), t),
    style: r
  });
}
var wP = ["label", "children", "key", "type"];
function Fc(e) {
  return (e || []).map(function(t, r) {
    if (t && lt(t) === "object") {
      var n = t, a = n.label, o = n.children, i = n.key, s = n.type, u = ct(n, wP), l = i ?? "tmp-".concat(r);
      return o || s === "group" ? s === "group" ? /* @__PURE__ */ g.createElement(hu, _e({
        key: l
      }, u, {
        title: a
      }), Fc(o)) : /* @__PURE__ */ g.createElement(mu, _e({
        key: l
      }, u, {
        title: a
      }), Fc(o)) : s === "divider" ? /* @__PURE__ */ g.createElement(Tf, _e({
        key: l
      }, u)) : /* @__PURE__ */ g.createElement(gu, _e({
        key: l
      }, u), a);
    }
    return null;
  }).filter(function(t) {
    return t;
  });
}
function DP(e, t, r) {
  var n = e;
  return t && (n = Fc(t)), Rf(n, r);
}
var SP = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem"], Xa = [], xP = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var r, n, a = e, o = a.prefixCls, i = o === void 0 ? "rc-menu" : o, s = a.rootClassName, u = a.style, l = a.className, c = a.tabIndex, d = c === void 0 ? 0 : c, v = a.items, p = a.children, h = a.direction, f = a.id, m = a.mode, b = m === void 0 ? "vertical" : m, E = a.inlineCollapsed, y = a.disabled, w = a.disabledOverflow, S = a.subMenuOpenDelay, D = S === void 0 ? 0.1 : S, x = a.subMenuCloseDelay, A = x === void 0 ? 0.1 : x, O = a.forceSubMenuRender, B = a.defaultOpenKeys, j = a.openKeys, T = a.activeKey, $ = a.defaultActiveFirst, P = a.selectable, R = P === void 0 ? !0 : P, M = a.multiple, F = M === void 0 ? !1 : M, N = a.defaultSelectedKeys, V = a.selectedKeys, k = a.onSelect, W = a.onDeselect, U = a.inlineIndent, Q = U === void 0 ? 24 : U, I = a.motion, z = a.defaultMotions, H = a.triggerSubMenuAction, G = H === void 0 ? "hover" : H, re = a.builtinPlacements, te = a.itemIcon, de = a.expandIcon, se = a.overflowedIndicator, he = se === void 0 ? "..." : se, ce = a.overflowedIndicatorPopupClassName, q = a.getPopupContainer, pe = a.onClick, De = a.onOpenChange, Ce = a.onKeyDown, Ee = a.openAnimation, oe = a.openTransitionName, ue = a._internalRenderMenuItem, ge = a._internalRenderSubMenuItem, be = ct(a, SP), ye = g.useMemo(function() {
    return DP(p, v, Xa);
  }, [p, v]), Ne = g.useState(!1), $e = ie(Ne, 2), je = $e[0], yt = $e[1], Le = g.useRef(), we = tP(f), ze = h === "rtl";
  process.env.NODE_ENV !== "production" && bt(!Ee && !oe, "`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.");
  var Ve = zr(B, {
    value: j,
    postState: function(vt) {
      return vt || Xa;
    }
  }), kt = ie(Ve, 2), tt = kt[0], Bt = kt[1], ht = function(vt) {
    var pt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    function er() {
      Bt(vt), De == null || De(vt);
    }
    pt ? Vb(er) : er();
  }, Qe = g.useState(tt), st = ie(Qe, 2), Wt = st[0], wt = st[1], fe = g.useRef(!1), Fe = g.useMemo(function() {
    return (b === "inline" || b === "vertical") && E ? ["vertical", E] : [b, !1];
  }, [b, E]), ke = ie(Fe, 2), rt = ke[0], Je = ke[1], Pe = rt === "inline", Ze = g.useState(rt), xe = ie(Ze, 2), Te = xe[0], ut = xe[1], Mt = g.useState(Je), Kt = ie(Mt, 2), Nt = Kt[0], an = Kt[1];
  g.useEffect(function() {
    ut(rt), an(Je), fe.current && (Pe ? Bt(Wt) : ht(Xa));
  }, [rt, Je]);
  var on = g.useState(0), Sr = ie(on, 2), br = Sr[0], _ = Sr[1], ae = br >= ye.length - 1 || Te !== "horizontal" || w;
  g.useEffect(function() {
    Pe && wt(tt);
  }, [tt]), g.useEffect(function() {
    return fe.current = !0, function() {
      fe.current = !1;
    };
  }, []);
  var ve = JF(), Ie = ve.registerPath, Xe = ve.unregisterPath, it = ve.refreshOverflowKeys, Ue = ve.isSubPathKey, He = ve.getKeyPath, Ot = ve.getKeys, Dt = ve.getSubPathKeys, Ye = g.useMemo(function() {
    return {
      registerPath: Ie,
      unregisterPath: Xe
    };
  }, [Ie, Xe]), qt = g.useMemo(function() {
    return {
      isSubPathKey: Ue
    };
  }, [Ue]);
  g.useEffect(function() {
    it(ae ? Xa : ye.slice(br + 1).map(function(At) {
      return At.key;
    }));
  }, [br, ae]);
  var Ir = zr(T || $ && ((r = ye[0]) === null || r === void 0 ? void 0 : r.key), {
    value: T
  }), sn = ie(Ir, 2), Vt = sn[0], Kr = sn[1], Ra = qo(function(At) {
    Kr(At);
  }), $o = qo(function() {
    Kr(void 0);
  });
  Ba(t, function() {
    return {
      list: Le.current,
      focus: function(vt) {
        var pt, er = Ot(), tr = Bc(er, we), _n = tr.elements, jn = tr.key2element, Fo = tr.element2key, Ia = $f(Le.current, _n), ia = Vt ?? (Ia[0] ? Fo.get(Ia[0]) : (pt = ye.find(function(Ma) {
          return !Ma.props.disabled;
        })) === null || pt === void 0 ? void 0 : pt.key), Cn = jn.get(ia);
        if (ia && Cn) {
          var ur;
          Cn == null || (ur = Cn.focus) === null || ur === void 0 || ur.call(Cn, vt);
        }
      }
    };
  });
  var hn = zr(N || [], {
    value: V,
    // Legacy convert key to array
    postState: function(vt) {
      return Array.isArray(vt) ? vt : vt == null ? Xa : [vt];
    }
  }), oa = ie(hn, 2), qr = oa[0], Ur = oa[1], pn = function(vt) {
    if (R) {
      var pt = vt.key, er = qr.includes(pt), tr;
      F ? er ? tr = qr.filter(function(jn) {
        return jn !== pt;
      }) : tr = [].concat(Me(qr), [pt]) : tr = [pt], Ur(tr);
      var _n = Y(Y({}, vt), {}, {
        selectedKeys: tr
      });
      er ? W == null || W(_n) : k == null || k(_n);
    }
    !F && tt.length && Te !== "inline" && ht(Xa);
  }, Mn = qo(function(At) {
    pe == null || pe(zs(At)), pn(At);
  }), bn = qo(function(At, vt) {
    var pt = tt.filter(function(tr) {
      return tr !== At;
    });
    if (vt)
      pt.push(At);
    else if (Te !== "inline") {
      var er = Dt(At);
      pt = pt.filter(function(tr) {
        return !er.has(tr);
      });
    }
    go(tt, pt, !0) || ht(pt, !0);
  }), Gr = function(vt, pt) {
    var er = pt ?? !tt.includes(vt);
    bn(vt, er);
  }, Ta = YF(Te, Vt, ze, we, Le, Ot, He, Kr, Gr, Ce);
  g.useEffect(function() {
    yt(!0);
  }, []);
  var yn = g.useMemo(function() {
    return {
      _internalRenderMenuItem: ue,
      _internalRenderSubMenuItem: ge
    };
  }, [ue, ge]), un = Te !== "horizontal" || w ? ye : (
    // Need wrap for overflow dropdown that do not response for open
    ye.map(function(At, vt) {
      return (
        // Always wrap provider to avoid sub node re-mount
        /* @__PURE__ */ g.createElement(yi, {
          key: At.key,
          overflowDisabled: vt > br
        }, At)
      );
    })
  ), Na = /* @__PURE__ */ g.createElement(Pn, _e({
    id: f,
    ref: Le,
    prefixCls: "".concat(i, "-overflow"),
    component: "ul",
    itemComponent: gu,
    className: ne(i, "".concat(i, "-root"), "".concat(i, "-").concat(Te), l, (n = {}, K(n, "".concat(i, "-inline-collapsed"), Nt), K(n, "".concat(i, "-rtl"), ze), n), s),
    dir: h,
    style: u,
    role: "menu",
    tabIndex: d,
    data: un,
    renderRawItem: function(vt) {
      return vt;
    },
    renderRawRest: function(vt) {
      var pt = vt.length, er = pt ? ye.slice(-pt) : null;
      return /* @__PURE__ */ g.createElement(mu, {
        eventKey: $c,
        title: he,
        disabled: ae,
        internalPopupClose: pt === 0,
        popupClassName: ce
      }, er);
    },
    maxCount: Te !== "horizontal" || w ? Pn.INVALIDATE : Pn.RESPONSIVE,
    ssr: "full",
    "data-menu-list": !0,
    onVisibleChange: function(vt) {
      _(vt);
    },
    onKeyDown: Ta
  }, be));
  return /* @__PURE__ */ g.createElement(Bf.Provider, {
    value: yn
  }, /* @__PURE__ */ g.createElement(P0.Provider, {
    value: we
  }, /* @__PURE__ */ g.createElement(yi, {
    prefixCls: i,
    rootClassName: s,
    mode: Te,
    openKeys: tt,
    rtl: ze,
    disabled: y,
    motion: je ? I : null,
    defaultMotions: je ? z : null,
    activeKey: Vt,
    onActive: Ra,
    onInactive: $o,
    selectedKeys: qr,
    inlineIndent: Q,
    subMenuOpenDelay: D,
    subMenuCloseDelay: A,
    forceSubMenuRender: O,
    builtinPlacements: re,
    triggerSubMenuAction: G,
    getPopupContainer: q,
    itemIcon: te,
    expandIcon: de,
    onItemClick: Mn,
    onOpenChange: bn
  }, /* @__PURE__ */ g.createElement(M0.Provider, {
    value: qt
  }, Na), /* @__PURE__ */ g.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": !0
  }, /* @__PURE__ */ g.createElement(N0.Provider, {
    value: Ye
  }, ye)))));
}), Fi = xP;
Fi.Item = gu;
Fi.SubMenu = mu;
Fi.ItemGroup = hu;
Fi.Divider = Tf;
var OP = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "bars", theme: "outlined" };
const AP = OP;
var BP = function(t, r) {
  return /* @__PURE__ */ g.createElement(Nr, _e({}, t, {
    ref: r,
    icon: AP
  }));
}, V0 = /* @__PURE__ */ g.forwardRef(BP);
process.env.NODE_ENV !== "production" && (V0.displayName = "BarsOutlined");
const $P = V0;
var FP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" };
const PP = FP;
var RP = function(t, r) {
  return /* @__PURE__ */ g.createElement(Nr, _e({}, t, {
    ref: r,
    icon: PP
  }));
}, H0 = /* @__PURE__ */ g.forwardRef(RP);
process.env.NODE_ENV !== "production" && (H0.displayName = "LeftOutlined");
const Rg = H0, TP = (e) => !isNaN(parseFloat(e)) && isFinite(e), NP = /* @__PURE__ */ g.createContext({
  siderHook: {
    addSider: () => null,
    removeSider: () => null
  }
});
var IP = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Tg = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px"
}, Nf = /* @__PURE__ */ g.createContext({}), MP = /* @__PURE__ */ (() => {
  let e = 0;
  return function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return e += 1, `${t}${e}`;
  };
})(), _P = /* @__PURE__ */ g.forwardRef((e, t) => {
  const {
    prefixCls: r,
    className: n,
    trigger: a,
    children: o,
    defaultCollapsed: i = !1,
    theme: s = "dark",
    style: u = {},
    collapsible: l = !1,
    reverseArrow: c = !1,
    width: d = 200,
    collapsedWidth: v = 80,
    zeroWidthTriggerStyle: p,
    breakpoint: h,
    onCollapse: f,
    onBreakpoint: m
  } = e, b = IP(e, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]), {
    siderHook: E
  } = St(NP), [y, w] = Gt("collapsed" in e ? e.collapsed : i), [S, D] = Gt(!1);
  Ft(() => {
    "collapsed" in e && w(e.collapsed);
  }, [e.collapsed]);
  const x = ($, P) => {
    "collapsed" in e || w($), f == null || f($, P);
  }, A = qe();
  A.current = ($) => {
    D($.matches), m == null || m($.matches), y !== $.matches && x($.matches, "responsive");
  }, Ft(() => {
    function $(R) {
      return A.current(R);
    }
    let P;
    if (typeof window < "u") {
      const {
        matchMedia: R
      } = window;
      if (R && h && h in Tg) {
        P = R(`screen and (max-width: ${Tg[h]})`);
        try {
          P.addEventListener("change", $);
        } catch {
          P.addListener($);
        }
        $(P);
      }
    }
    return () => {
      try {
        P == null || P.removeEventListener("change", $);
      } catch {
        P == null || P.removeListener($);
      }
    };
  }, [h]), Ft(() => {
    const $ = MP("ant-sider-");
    return E.addSider($), () => E.removeSider($);
  }, []);
  const O = () => {
    x(!y, "clickTrigger");
  }, {
    getPrefixCls: B
  } = St(xt), j = () => {
    const $ = B("layout-sider", r), P = Tr(b, ["collapsed"]), R = y ? v : d, M = TP(R) ? `${R}px` : String(R), F = parseFloat(String(v || 0)) === 0 ? /* @__PURE__ */ g.createElement("span", {
      onClick: O,
      className: ne(`${$}-zero-width-trigger`, `${$}-zero-width-trigger-${c ? "right" : "left"}`),
      style: p
    }, a || /* @__PURE__ */ g.createElement($P, null)) : null, k = {
      expanded: c ? /* @__PURE__ */ g.createElement(Sc, null) : /* @__PURE__ */ g.createElement(Rg, null),
      collapsed: c ? /* @__PURE__ */ g.createElement(Rg, null) : /* @__PURE__ */ g.createElement(Sc, null)
    }[y ? "collapsed" : "expanded"], W = a !== null ? F || /* @__PURE__ */ g.createElement("div", {
      className: `${$}-trigger`,
      onClick: O,
      style: {
        width: M
      }
    }, a || k) : null, U = Object.assign(Object.assign({}, u), {
      flex: `0 0 ${M}`,
      maxWidth: M,
      minWidth: M,
      width: M
    }), Q = ne($, `${$}-${s}`, {
      [`${$}-collapsed`]: !!y,
      [`${$}-has-trigger`]: l && a !== null && !F,
      [`${$}-below`]: !!S,
      [`${$}-zero-width`]: parseFloat(M) === 0
    }, n);
    return /* @__PURE__ */ g.createElement("aside", Object.assign({
      className: Q
    }, P, {
      style: U,
      ref: t
    }), /* @__PURE__ */ g.createElement("div", {
      className: `${$}-children`
    }, o), l || S && F ? W : null);
  }, T = g.useMemo(() => ({
    siderCollapsed: y
  }), [y]);
  return /* @__PURE__ */ g.createElement(Nf.Provider, {
    value: T
  }, j());
});
process.env.NODE_ENV !== "production" && (_P.displayName = "Sider");
var jP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "ellipsis", theme: "outlined" };
const LP = jP;
var kP = function(t, r) {
  return /* @__PURE__ */ g.createElement(Nr, _e({}, t, {
    ref: r,
    icon: LP
  }));
}, W0 = /* @__PURE__ */ g.forwardRef(kP);
process.env.NODE_ENV !== "production" && (W0.displayName = "EllipsisOutlined");
const K0 = W0;
var zP = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const VP = (e) => {
  const {
    prefixCls: t,
    className: r,
    dashed: n
  } = e, a = zP(e, ["prefixCls", "className", "dashed"]), {
    getPrefixCls: o
  } = g.useContext(xt), i = o("menu", t), s = ne({
    [`${i}-item-divider-dashed`]: !!n
  }, r);
  return /* @__PURE__ */ g.createElement(Tf, Object.assign({
    className: s
  }, a));
}, q0 = VP, HP = /* @__PURE__ */ Wr({
  prefixCls: "",
  firstLevel: !0,
  inlineCollapsed: !1
}), Vs = HP, WP = (e) => {
  var t;
  const {
    className: r,
    children: n,
    icon: a,
    title: o,
    danger: i
  } = e, {
    prefixCls: s,
    firstLevel: u,
    direction: l,
    disableMenuItemTitleTooltip: c,
    inlineCollapsed: d
  } = g.useContext(Vs), v = (E) => {
    const y = /* @__PURE__ */ g.createElement("span", {
      className: `${s}-title-content`
    }, n);
    return (!a || Jn(n) && n.type === "span") && n && E && u && typeof n == "string" ? /* @__PURE__ */ g.createElement("div", {
      className: `${s}-inline-collapsed-noicon`
    }, n.charAt(0)) : y;
  }, {
    siderCollapsed: p
  } = g.useContext(Nf);
  let h = o;
  typeof o > "u" ? h = u ? n : "" : o === !1 && (h = "");
  const f = {
    title: h
  };
  !p && !d && (f.title = null, f.open = !1);
  const m = gn(n).length;
  let b = /* @__PURE__ */ g.createElement(gu, Object.assign({}, Tr(e, ["title", "icon", "danger"]), {
    className: ne({
      [`${s}-item-danger`]: i,
      [`${s}-item-only-child`]: (a ? m + 1 : m) === 1
    }, r),
    title: typeof o == "string" ? o : void 0
  }), mn(a, {
    className: ne(Jn(a) ? (t = a.props) === null || t === void 0 ? void 0 : t.className : "", `${s}-item-icon`)
  }), v(d));
  return c || (b = /* @__PURE__ */ g.createElement(ks, Object.assign({}, f, {
    placement: l === "rtl" ? "left" : "right",
    overlayClassName: `${s}-inline-collapsed-tooltip`
  }), b)), b;
}, U0 = WP, KP = (e) => {
  var t;
  const {
    popupClassName: r,
    icon: n,
    title: a,
    theme: o
  } = e, i = g.useContext(Vs), {
    prefixCls: s,
    inlineCollapsed: u,
    theme: l
  } = i, c = Oo();
  let d;
  if (!n)
    d = u && !c.length && a && typeof a == "string" ? /* @__PURE__ */ g.createElement("div", {
      className: `${s}-inline-collapsed-noicon`
    }, a.charAt(0)) : /* @__PURE__ */ g.createElement("span", {
      className: `${s}-title-content`
    }, a);
  else {
    const h = Jn(a) && a.type === "span";
    d = /* @__PURE__ */ g.createElement(g.Fragment, null, mn(n, {
      className: ne(Jn(n) ? (t = n.props) === null || t === void 0 ? void 0 : t.className : "", `${s}-item-icon`)
    }), h ? a : /* @__PURE__ */ g.createElement("span", {
      className: `${s}-title-content`
    }, a));
  }
  const v = g.useMemo(() => Object.assign(Object.assign({}, i), {
    firstLevel: !1
  }), [i]), [p] = hf("Menu");
  return /* @__PURE__ */ g.createElement(Vs.Provider, {
    value: v
  }, /* @__PURE__ */ g.createElement(mu, Object.assign({}, Tr(e, ["icon"]), {
    title: d,
    popupClassName: ne(s, r, `${s}-${o || l}`),
    popupStyle: {
      zIndex: p
    }
  })));
}, G0 = KP;
var qP = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function Pc(e) {
  return (e || []).map((t, r) => {
    if (t && typeof t == "object") {
      const n = t, {
        label: a,
        children: o,
        key: i,
        type: s
      } = n, u = qP(n, ["label", "children", "key", "type"]), l = i ?? `tmp-${r}`;
      return o || s === "group" ? s === "group" ? /* @__PURE__ */ g.createElement(hu, Object.assign({
        key: l
      }, u, {
        title: a
      }), Pc(o)) : /* @__PURE__ */ g.createElement(G0, Object.assign({
        key: l
      }, u, {
        title: a
      }), Pc(o)) : s === "divider" ? /* @__PURE__ */ g.createElement(q0, Object.assign({
        key: l
      }, u)) : /* @__PURE__ */ g.createElement(U0, Object.assign({
        key: l
      }, u), a);
    }
    return null;
  }).filter((t) => t);
}
function UP(e) {
  return g.useMemo(() => e && Pc(e), [e]);
}
var GP = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Hs = /* @__PURE__ */ g.createContext(null), XP = /* @__PURE__ */ g.forwardRef((e, t) => {
  const {
    children: r
  } = e, n = GP(e, ["children"]), a = g.useContext(Hs), o = g.useMemo(() => Object.assign(Object.assign({}, a), n), [
    a,
    n.prefixCls,
    // restProps.expandIcon, Not mark as deps since this is a ReactNode
    n.mode,
    n.selectable,
    n.rootClassName
    // restProps.validator, Not mark as deps since this is a function
  ]), i = nS(r), s = Ei(t, i ? r.ref : null);
  return /* @__PURE__ */ g.createElement(Hs.Provider, {
    value: o
  }, /* @__PURE__ */ g.createElement(Is, null, i ? /* @__PURE__ */ g.cloneElement(r, {
    ref: s
  }) : r));
}), YP = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: r,
    horizontalLineHeight: n,
    colorSplit: a,
    lineWidth: o,
    lineType: i,
    itemPaddingInline: s
  } = e;
  return {
    [`${t}-horizontal`]: {
      lineHeight: n,
      border: 0,
      borderBottom: `${Se(o)} ${i} ${a}`,
      boxShadow: "none",
      "&::after": {
        display: "block",
        clear: "both",
        height: 0,
        content: '"\\20"'
      },
      // ======================= Item =======================
      [`${t}-item, ${t}-submenu`]: {
        position: "relative",
        display: "inline-block",
        verticalAlign: "bottom",
        paddingInline: s
      },
      [`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]: {
        backgroundColor: "transparent"
      },
      [`${t}-item, ${t}-submenu-title`]: {
        transition: [`border-color ${r}`, `background ${r}`].join(",")
      },
      // ===================== Sub Menu =====================
      [`${t}-submenu-arrow`]: {
        display: "none"
      }
    }
  };
}, ZP = (e) => {
  let {
    componentCls: t,
    menuArrowOffset: r,
    calc: n
  } = e;
  return {
    [`${t}-rtl`]: {
      direction: "rtl"
    },
    [`${t}-submenu-rtl`]: {
      transformOrigin: "100% 0"
    },
    // Vertical Arrow
    [`${t}-rtl${t}-vertical,
    ${t}-submenu-rtl ${t}-vertical`]: {
      [`${t}-submenu-arrow`]: {
        "&::before": {
          transform: `rotate(-45deg) translateY(${Se(n(r).mul(-1).equal())})`
        },
        "&::after": {
          transform: `rotate(45deg) translateY(${Se(r)})`
        }
      }
    }
  };
}, Ng = (e) => Object.assign({}, df(e)), Ig = (e, t) => {
  const {
    componentCls: r,
    itemColor: n,
    itemSelectedColor: a,
    groupTitleColor: o,
    itemBg: i,
    subMenuItemBg: s,
    itemSelectedBg: u,
    activeBarHeight: l,
    activeBarWidth: c,
    activeBarBorderWidth: d,
    motionDurationSlow: v,
    motionEaseInOut: p,
    motionEaseOut: h,
    itemPaddingInline: f,
    motionDurationMid: m,
    itemHoverColor: b,
    lineType: E,
    colorSplit: y,
    // Disabled
    itemDisabledColor: w,
    // Danger
    dangerItemColor: S,
    dangerItemHoverColor: D,
    dangerItemSelectedColor: x,
    dangerItemActiveBg: A,
    dangerItemSelectedBg: O,
    // Bg
    popupBg: B,
    itemHoverBg: j,
    itemActiveBg: T,
    menuSubMenuBg: $,
    // Horizontal
    horizontalItemSelectedColor: P,
    horizontalItemSelectedBg: R,
    horizontalItemBorderRadius: M,
    horizontalItemHoverBg: F
  } = e;
  return {
    [`${r}-${t}, ${r}-${t} > ${r}`]: {
      color: n,
      background: i,
      [`&${r}-root:focus-visible`]: Object.assign({}, Ng(e)),
      // ======================== Item ========================
      [`${r}-item-group-title`]: {
        color: o
      },
      [`${r}-submenu-selected`]: {
        [`> ${r}-submenu-title`]: {
          color: a
        }
      },
      // Disabled
      [`${r}-item-disabled, ${r}-submenu-disabled`]: {
        color: `${w} !important`
      },
      // Hover
      [`${r}-item:not(${r}-item-selected):not(${r}-submenu-selected)`]: {
        [`&:hover, > ${r}-submenu-title:hover`]: {
          color: b
        }
      },
      [`&:not(${r}-horizontal)`]: {
        [`${r}-item:not(${r}-item-selected)`]: {
          "&:hover": {
            backgroundColor: j
          },
          "&:active": {
            backgroundColor: T
          }
        },
        [`${r}-submenu-title`]: {
          "&:hover": {
            backgroundColor: j
          },
          "&:active": {
            backgroundColor: T
          }
        }
      },
      // Danger - only Item has
      [`${r}-item-danger`]: {
        color: S,
        [`&${r}-item:hover`]: {
          [`&:not(${r}-item-selected):not(${r}-submenu-selected)`]: {
            color: D
          }
        },
        [`&${r}-item:active`]: {
          background: A
        }
      },
      [`${r}-item a`]: {
        "&, &:hover": {
          color: "inherit"
        }
      },
      [`${r}-item-selected`]: {
        color: a,
        // Danger
        [`&${r}-item-danger`]: {
          color: x
        },
        "a, a:hover": {
          color: "inherit"
        }
      },
      [`& ${r}-item-selected`]: {
        backgroundColor: u,
        // Danger
        [`&${r}-item-danger`]: {
          backgroundColor: O
        }
      },
      [`${r}-item, ${r}-submenu-title`]: {
        [`&:not(${r}-item-disabled):focus-visible`]: Object.assign({}, Ng(e))
      },
      [`&${r}-submenu > ${r}`]: {
        backgroundColor: $
      },
      // ===== 设置浮层的颜色 =======
      // ！dark 模式会被popupBg 会被rest 为 darkPopupBg
      [`&${r}-popup > ${r}`]: {
        backgroundColor: B
      },
      [`&${r}-submenu-popup > ${r}`]: {
        backgroundColor: B
      },
      // ===== 设置浮层的颜色 end =======
      // ====================== Horizontal ======================
      [`&${r}-horizontal`]: Object.assign(Object.assign({}, t === "dark" ? {
        borderBottom: 0
      } : {}), {
        [`> ${r}-item, > ${r}-submenu`]: {
          top: d,
          marginTop: e.calc(d).mul(-1).equal(),
          marginBottom: 0,
          borderRadius: M,
          "&::after": {
            position: "absolute",
            insetInline: f,
            bottom: 0,
            borderBottom: `${Se(l)} solid transparent`,
            transition: `border-color ${v} ${p}`,
            content: '""'
          },
          "&:hover, &-active, &-open": {
            background: F,
            "&::after": {
              borderBottomWidth: l,
              borderBottomColor: P
            }
          },
          "&-selected": {
            color: P,
            backgroundColor: R,
            "&:hover": {
              backgroundColor: R
            },
            "&::after": {
              borderBottomWidth: l,
              borderBottomColor: P
            }
          }
        }
      }),
      // ================== Inline & Vertical ===================
      //
      [`&${r}-root`]: {
        [`&${r}-inline, &${r}-vertical`]: {
          borderInlineEnd: `${Se(d)} ${E} ${y}`
        }
      },
      // ======================== Inline ========================
      [`&${r}-inline`]: {
        // Sub
        [`${r}-sub${r}-inline`]: {
          background: s
        },
        [`${r}-item`]: {
          position: "relative",
          "&::after": {
            position: "absolute",
            insetBlock: 0,
            insetInlineEnd: 0,
            borderInlineEnd: `${Se(c)} solid ${a}`,
            transform: "scaleY(0.0001)",
            opacity: 0,
            transition: [`transform ${m} ${h}`, `opacity ${m} ${h}`].join(","),
            content: '""'
          },
          // Danger
          [`&${r}-item-danger`]: {
            "&::after": {
              borderInlineEndColor: x
            }
          }
        },
        [`${r}-selected, ${r}-item-selected`]: {
          "&::after": {
            transform: "scaleY(1)",
            opacity: 1,
            transition: [`transform ${m} ${p}`, `opacity ${m} ${p}`].join(",")
          }
        }
      }
    }
  };
}, Mg = (e) => {
  const {
    componentCls: t,
    itemHeight: r,
    itemMarginInline: n,
    padding: a,
    menuArrowSize: o,
    marginXS: i,
    itemMarginBlock: s,
    itemWidth: u
  } = e, l = e.calc(o).add(a).add(i).equal();
  return {
    [`${t}-item`]: {
      position: "relative",
      overflow: "hidden"
    },
    [`${t}-item, ${t}-submenu-title`]: {
      height: r,
      lineHeight: Se(r),
      paddingInline: a,
      overflow: "hidden",
      textOverflow: "ellipsis",
      marginInline: n,
      marginBlock: s,
      width: u
    },
    [`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]: {
      height: r,
      lineHeight: Se(r)
    },
    [`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]: {
      paddingInlineEnd: l
    }
  };
}, QP = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    itemHeight: n,
    colorTextLightSolid: a,
    dropdownWidth: o,
    controlHeightLG: i,
    motionDurationMid: s,
    motionEaseOut: u,
    paddingXL: l,
    itemMarginInline: c,
    fontSizeLG: d,
    motionDurationSlow: v,
    paddingXS: p,
    boxShadowSecondary: h,
    collapsedWidth: f,
    collapsedIconSize: m
  } = e, b = {
    height: n,
    lineHeight: Se(n),
    listStylePosition: "inside",
    listStyleType: "disc"
  };
  return [
    {
      [t]: {
        "&-inline, &-vertical": Object.assign({
          [`&${t}-root`]: {
            boxShadow: "none"
          }
        }, Mg(e))
      },
      [`${t}-submenu-popup`]: {
        [`${t}-vertical`]: Object.assign(Object.assign({}, Mg(e)), {
          boxShadow: h
        })
      }
    },
    // Vertical only
    {
      [`${t}-submenu-popup ${t}-vertical${t}-sub`]: {
        minWidth: o,
        maxHeight: `calc(100vh - ${Se(e.calc(i).mul(2.5).equal())})`,
        padding: "0",
        overflow: "hidden",
        borderInlineEnd: 0,
        // https://github.com/ant-design/ant-design/issues/22244
        // https://github.com/ant-design/ant-design/issues/26812
        "&:not([class*='-active'])": {
          overflowX: "hidden",
          overflowY: "auto"
        }
      }
    },
    // Inline Only
    {
      [`${t}-inline`]: {
        width: "100%",
        // Motion enhance for first level
        [`&${t}-root`]: {
          [`${t}-item, ${t}-submenu-title`]: {
            display: "flex",
            alignItems: "center",
            transition: [`border-color ${v}`, `background ${v}`, `padding ${s} ${u}`].join(","),
            [`> ${t}-title-content`]: {
              flex: "auto",
              minWidth: 0,
              overflow: "hidden",
              textOverflow: "ellipsis"
            },
            "> *": {
              flex: "none"
            }
          }
        },
        // >>>>> Sub
        [`${t}-sub${t}-inline`]: {
          padding: 0,
          border: 0,
          borderRadius: 0,
          boxShadow: "none",
          [`& > ${t}-submenu > ${t}-submenu-title`]: b,
          [`& ${t}-item-group-title`]: {
            paddingInlineStart: l
          }
        },
        // >>>>> Item
        [`${t}-item`]: b
      }
    },
    // Inline Collapse Only
    {
      [`${t}-inline-collapsed`]: {
        width: f,
        [`&${t}-root`]: {
          [`${t}-item, ${t}-submenu ${t}-submenu-title`]: {
            [`> ${t}-inline-collapsed-noicon`]: {
              fontSize: d,
              textAlign: "center"
            }
          }
        },
        [`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]: {
          insetInlineStart: 0,
          paddingInline: `calc(50% - ${Se(e.calc(d).div(2).equal())} - ${Se(c)})`,
          textOverflow: "clip",
          [`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]: {
            opacity: 0
          },
          [`${t}-item-icon, ${r}`]: {
            margin: 0,
            fontSize: m,
            lineHeight: Se(n),
            "+ span": {
              display: "inline-block",
              opacity: 0
            }
          }
        },
        [`${t}-item-icon, ${r}`]: {
          display: "inline-block"
        },
        "&-tooltip": {
          pointerEvents: "none",
          [`${t}-item-icon, ${r}`]: {
            display: "none"
          },
          "a, a:hover": {
            color: a
          }
        },
        [`${t}-item-group-title`]: Object.assign(Object.assign({}, NO), {
          paddingInline: p
        })
      }
    }
  ];
}, _g = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: r,
    motionDurationMid: n,
    motionEaseInOut: a,
    motionEaseOut: o,
    iconCls: i,
    iconSize: s,
    iconMarginInlineEnd: u
  } = e;
  return {
    // >>>>> Item
    [`${t}-item, ${t}-submenu-title`]: {
      position: "relative",
      display: "block",
      margin: 0,
      whiteSpace: "nowrap",
      cursor: "pointer",
      transition: [`border-color ${r}`, `background ${r}`, `padding ${r} ${a}`].join(","),
      [`${t}-item-icon, ${i}`]: {
        minWidth: s,
        fontSize: s,
        transition: [`font-size ${n} ${o}`, `margin ${r} ${a}`, `color ${r}`].join(","),
        "+ span": {
          marginInlineStart: u,
          opacity: 1,
          transition: [`opacity ${r} ${a}`, `margin ${r}`, `color ${r}`].join(",")
        }
      },
      [`${t}-item-icon`]: Object.assign({}, gp()),
      [`&${t}-item-only-child`]: {
        [`> ${i}, > ${t}-item-icon`]: {
          marginInlineEnd: 0
        }
      }
    },
    // Disabled state sets text to gray and nukes hover/tab effects
    [`${t}-item-disabled, ${t}-submenu-disabled`]: {
      background: "none !important",
      cursor: "not-allowed",
      "&::after": {
        borderColor: "transparent !important"
      },
      a: {
        color: "inherit !important"
      },
      [`> ${t}-submenu-title`]: {
        color: "inherit !important",
        cursor: "not-allowed"
      }
    }
  };
}, jg = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: r,
    motionEaseInOut: n,
    borderRadius: a,
    menuArrowSize: o,
    menuArrowOffset: i
  } = e;
  return {
    [`${t}-submenu`]: {
      "&-expand-icon, &-arrow": {
        position: "absolute",
        top: "50%",
        insetInlineEnd: e.margin,
        width: o,
        color: "currentcolor",
        transform: "translateY(-50%)",
        transition: `transform ${r} ${n}, opacity ${r}`
      },
      "&-arrow": {
        // →
        "&::before, &::after": {
          position: "absolute",
          width: e.calc(o).mul(0.6).equal(),
          height: e.calc(o).mul(0.15).equal(),
          backgroundColor: "currentcolor",
          borderRadius: a,
          transition: [`background ${r} ${n}`, `transform ${r} ${n}`, `top ${r} ${n}`, `color ${r} ${n}`].join(","),
          content: '""'
        },
        "&::before": {
          transform: `rotate(45deg) translateY(${Se(e.calc(i).mul(-1).equal())})`
        },
        "&::after": {
          transform: `rotate(-45deg) translateY(${Se(i)})`
        }
      }
    }
  };
}, JP = (e) => {
  const {
    antCls: t,
    componentCls: r,
    fontSize: n,
    motionDurationSlow: a,
    motionDurationMid: o,
    motionEaseInOut: i,
    paddingXS: s,
    padding: u,
    colorSplit: l,
    lineWidth: c,
    zIndexPopup: d,
    borderRadiusLG: v,
    subMenuItemBorderRadius: p,
    menuArrowSize: h,
    menuArrowOffset: f,
    lineType: m,
    menuPanelMaskInset: b,
    groupTitleLineHeight: E,
    groupTitleFontSize: y
  } = e;
  return [
    // Misc
    {
      "": {
        [`${r}`]: Object.assign(Object.assign({}, Jl()), {
          // Hidden
          "&-hidden": {
            display: "none"
          }
        })
      },
      [`${r}-submenu-hidden`]: {
        display: "none"
      }
    },
    {
      [r]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Yn(e)), Jl()), {
        marginBottom: 0,
        paddingInlineStart: 0,
        // Override default ul/ol
        fontSize: n,
        lineHeight: 0,
        listStyle: "none",
        outline: "none",
        // Magic cubic here but smooth transition
        transition: `width ${a} cubic-bezier(0.2, 0, 0, 1) 0s`,
        "ul, ol": {
          margin: 0,
          padding: 0,
          listStyle: "none"
        },
        // Overflow ellipsis
        "&-overflow": {
          display: "flex",
          [`${r}-item`]: {
            flex: "none"
          }
        },
        [`${r}-item, ${r}-submenu, ${r}-submenu-title`]: {
          borderRadius: e.itemBorderRadius
        },
        [`${r}-item-group-title`]: {
          padding: `${Se(s)} ${Se(u)}`,
          fontSize: y,
          lineHeight: E,
          transition: `all ${a}`
        },
        [`&-horizontal ${r}-submenu`]: {
          transition: [`border-color ${a} ${i}`, `background ${a} ${i}`].join(",")
        },
        [`${r}-submenu, ${r}-submenu-inline`]: {
          transition: [`border-color ${a} ${i}`, `background ${a} ${i}`, `padding ${o} ${i}`].join(",")
        },
        [`${r}-submenu ${r}-sub`]: {
          cursor: "initial",
          transition: [`background ${a} ${i}`, `padding ${a} ${i}`].join(",")
        },
        [`${r}-title-content`]: {
          transition: `color ${a}`,
          // https://github.com/ant-design/ant-design/issues/41143
          [`> ${t}-typography-ellipsis-single-line`]: {
            display: "inline",
            verticalAlign: "unset"
          }
        },
        [`${r}-item a`]: {
          "&::before": {
            position: "absolute",
            inset: 0,
            backgroundColor: "transparent",
            content: '""'
          }
        },
        // Removed a Badge related style seems it's safe
        // https://github.com/ant-design/ant-design/issues/19809
        // >>>>> Divider
        [`${r}-item-divider`]: {
          overflow: "hidden",
          lineHeight: 0,
          borderColor: l,
          borderStyle: m,
          borderWidth: 0,
          borderTopWidth: c,
          marginBlock: c,
          padding: 0,
          "&-dashed": {
            borderStyle: "dashed"
          }
        }
      }), _g(e)), {
        [`${r}-item-group`]: {
          [`${r}-item-group-list`]: {
            margin: 0,
            padding: 0,
            [`${r}-item, ${r}-submenu-title`]: {
              paddingInline: `${Se(e.calc(n).mul(2).equal())} ${Se(u)}`
            }
          }
        },
        // ======================= Sub Menu =======================
        "&-submenu": {
          "&-popup": {
            position: "absolute",
            zIndex: d,
            borderRadius: v,
            boxShadow: "none",
            transformOrigin: "0 0",
            [`&${r}-submenu`]: {
              background: "transparent"
            },
            // https://github.com/ant-design/ant-design/issues/13955
            "&::before": {
              position: "absolute",
              inset: `${Se(b)} 0 0`,
              zIndex: -1,
              width: "100%",
              height: "100%",
              opacity: 0,
              content: '""'
            }
          },
          // https://github.com/ant-design/ant-design/issues/13955
          "&-placement-rightTop::before": {
            top: 0,
            insetInlineStart: b
          },
          "\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ": {
            transformOrigin: "100% 0"
          },
          "\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ": {
            transformOrigin: "100% 100%"
          },
          "\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ": {
            transformOrigin: "0 100%"
          },
          "\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ": {
            transformOrigin: "0 0"
          },
          "\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ": {
            paddingInlineEnd: e.paddingXS
          },
          "\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ": {
            paddingInlineStart: e.paddingXS
          },
          "\n          &-placement-topRight,\n          &-placement-topLeft\n          ": {
            paddingBottom: e.paddingXS
          },
          "\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ": {
            paddingTop: e.paddingXS
          },
          [`> ${r}`]: Object.assign(Object.assign(Object.assign({
            borderRadius: v
          }, _g(e)), jg(e)), {
            [`${r}-item, ${r}-submenu > ${r}-submenu-title`]: {
              borderRadius: p
            },
            [`${r}-submenu-title::after`]: {
              transition: `transform ${a} ${i}`
            }
          })
        }
      }), jg(e)), {
        [`&-inline-collapsed ${r}-submenu-arrow,
        &-inline ${r}-submenu-arrow`]: {
          // ↓
          "&::before": {
            transform: `rotate(-45deg) translateX(${Se(f)})`
          },
          "&::after": {
            transform: `rotate(45deg) translateX(${Se(e.calc(f).mul(-1).equal())})`
          }
        },
        [`${r}-submenu-open${r}-submenu-inline > ${r}-submenu-title > ${r}-submenu-arrow`]: {
          // ↑
          transform: `translateY(${Se(e.calc(h).mul(0.2).mul(-1).equal())})`,
          "&::after": {
            transform: `rotate(-45deg) translateX(${Se(e.calc(f).mul(-1).equal())})`
          },
          "&::before": {
            transform: `rotate(45deg) translateX(${Se(f)})`
          }
        }
      })
    },
    // Integration with header element so menu items have the same height
    {
      [`${t}-layout-header`]: {
        [r]: {
          lineHeight: "inherit"
        }
      }
    }
  ];
}, eR = (e) => {
  var t, r, n;
  const {
    colorPrimary: a,
    colorError: o,
    colorTextDisabled: i,
    colorErrorBg: s,
    colorText: u,
    colorTextDescription: l,
    colorBgContainer: c,
    colorFillAlter: d,
    colorFillContent: v,
    lineWidth: p,
    lineWidthBold: h,
    controlItemBgActive: f,
    colorBgTextHover: m,
    controlHeightLG: b,
    lineHeight: E,
    colorBgElevated: y,
    marginXXS: w,
    padding: S,
    fontSize: D,
    controlHeightSM: x,
    fontSizeLG: A,
    colorTextLightSolid: O,
    colorErrorHover: B
  } = e, j = (t = e.activeBarWidth) !== null && t !== void 0 ? t : 0, T = (r = e.activeBarBorderWidth) !== null && r !== void 0 ? r : p, $ = (n = e.itemMarginInline) !== null && n !== void 0 ? n : e.marginXXS, P = new or(O).setAlpha(0.65).toRgbString();
  return {
    dropdownWidth: 160,
    zIndexPopup: e.zIndexPopupBase + 50,
    radiusItem: e.borderRadiusLG,
    itemBorderRadius: e.borderRadiusLG,
    radiusSubMenuItem: e.borderRadiusSM,
    subMenuItemBorderRadius: e.borderRadiusSM,
    colorItemText: u,
    itemColor: u,
    colorItemTextHover: u,
    itemHoverColor: u,
    colorItemTextHoverHorizontal: a,
    horizontalItemHoverColor: a,
    colorGroupTitle: l,
    groupTitleColor: l,
    colorItemTextSelected: a,
    itemSelectedColor: a,
    colorItemTextSelectedHorizontal: a,
    horizontalItemSelectedColor: a,
    colorItemBg: c,
    itemBg: c,
    colorItemBgHover: m,
    itemHoverBg: m,
    colorItemBgActive: v,
    itemActiveBg: f,
    colorSubItemBg: d,
    subMenuItemBg: d,
    colorItemBgSelected: f,
    itemSelectedBg: f,
    colorItemBgSelectedHorizontal: "transparent",
    horizontalItemSelectedBg: "transparent",
    colorActiveBarWidth: 0,
    activeBarWidth: j,
    colorActiveBarHeight: h,
    activeBarHeight: h,
    colorActiveBarBorderSize: p,
    activeBarBorderWidth: T,
    // Disabled
    colorItemTextDisabled: i,
    itemDisabledColor: i,
    // Danger
    colorDangerItemText: o,
    dangerItemColor: o,
    colorDangerItemTextHover: o,
    dangerItemHoverColor: o,
    colorDangerItemTextSelected: o,
    dangerItemSelectedColor: o,
    colorDangerItemBgActive: s,
    dangerItemActiveBg: s,
    colorDangerItemBgSelected: s,
    dangerItemSelectedBg: s,
    itemMarginInline: $,
    horizontalItemBorderRadius: 0,
    horizontalItemHoverBg: "transparent",
    itemHeight: b,
    groupTitleLineHeight: E,
    collapsedWidth: b * 2,
    popupBg: y,
    itemMarginBlock: w,
    itemPaddingInline: S,
    horizontalLineHeight: `${b * 1.15}px`,
    iconSize: D,
    iconMarginInlineEnd: x - D,
    collapsedIconSize: A,
    groupTitleFontSize: D,
    // Disabled
    darkItemDisabledColor: new or(O).setAlpha(0.25).toRgbString(),
    // Dark
    darkItemColor: P,
    darkDangerItemColor: o,
    darkItemBg: "#001529",
    darkPopupBg: "#001529",
    darkSubMenuItemBg: "#000c17",
    darkItemSelectedColor: O,
    darkItemSelectedBg: a,
    darkDangerItemSelectedBg: o,
    darkItemHoverBg: "transparent",
    darkGroupTitleColor: P,
    darkItemHoverColor: O,
    darkDangerItemHoverColor: B,
    darkDangerItemSelectedColor: O,
    darkDangerItemActiveBg: o,
    // internal
    itemWidth: j ? `calc(100% + ${T}px)` : `calc(100% - ${$ * 2}px)`
  };
}, tR = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  return aa("Menu", (a) => {
    const {
      colorBgElevated: o,
      colorPrimary: i,
      colorTextLightSolid: s,
      controlHeightLG: u,
      fontSize: l,
      darkItemColor: c,
      darkDangerItemColor: d,
      darkItemBg: v,
      darkSubMenuItemBg: p,
      darkItemSelectedColor: h,
      darkItemSelectedBg: f,
      darkDangerItemSelectedBg: m,
      darkItemHoverBg: b,
      darkGroupTitleColor: E,
      darkItemHoverColor: y,
      darkItemDisabledColor: w,
      darkDangerItemHoverColor: S,
      darkDangerItemSelectedColor: D,
      darkDangerItemActiveBg: x,
      popupBg: A,
      darkPopupBg: O
    } = a, B = a.calc(l).div(7).mul(5).equal(), j = cr(a, {
      menuArrowSize: B,
      menuHorizontalHeight: a.calc(u).mul(1.15).equal(),
      menuArrowOffset: a.calc(B).mul(0.25).equal(),
      menuPanelMaskInset: -7,
      // Still a hardcode here since it's offset by rc-align
      menuSubMenuBg: o,
      calc: a.calc,
      popupBg: A
    }), T = cr(j, {
      itemColor: c,
      itemHoverColor: y,
      groupTitleColor: E,
      itemSelectedColor: h,
      itemBg: v,
      popupBg: O,
      subMenuItemBg: p,
      itemActiveBg: "transparent",
      itemSelectedBg: f,
      activeBarHeight: 0,
      activeBarBorderWidth: 0,
      itemHoverBg: b,
      // Disabled
      itemDisabledColor: w,
      // Danger
      dangerItemColor: d,
      dangerItemHoverColor: S,
      dangerItemSelectedColor: D,
      dangerItemActiveBg: x,
      dangerItemSelectedBg: m,
      menuSubMenuBg: p,
      // Horizontal
      horizontalItemSelectedColor: s,
      horizontalItemSelectedBg: i
    });
    return [
      // Basic
      JP(j),
      // Horizontal
      YP(j),
      // Hard code for some light style
      // Vertical
      QP(j),
      // Hard code for some light style
      // Theme
      Ig(j, "light"),
      Ig(T, "dark"),
      // RTL
      ZP(j),
      // Motion
      _2(j),
      js(j, "slide-up"),
      js(j, "slide-down"),
      Sf(j, "zoom-big")
    ];
  }, eR, {
    deprecatedTokens: [["colorGroupTitle", "groupTitleColor"], ["radiusItem", "itemBorderRadius"], ["radiusSubMenuItem", "subMenuItemBorderRadius"], ["colorItemText", "itemColor"], ["colorItemTextHover", "itemHoverColor"], ["colorItemTextHoverHorizontal", "horizontalItemHoverColor"], ["colorItemTextSelected", "itemSelectedColor"], ["colorItemTextSelectedHorizontal", "horizontalItemSelectedColor"], ["colorItemTextDisabled", "itemDisabledColor"], ["colorDangerItemText", "dangerItemColor"], ["colorDangerItemTextHover", "dangerItemHoverColor"], ["colorDangerItemTextSelected", "dangerItemSelectedColor"], ["colorDangerItemBgActive", "dangerItemActiveBg"], ["colorDangerItemBgSelected", "dangerItemSelectedBg"], ["colorItemBg", "itemBg"], ["colorItemBgHover", "itemHoverBg"], ["colorSubItemBg", "subMenuItemBg"], ["colorItemBgActive", "itemActiveBg"], ["colorItemBgSelectedHorizontal", "horizontalItemSelectedBg"], ["colorActiveBarWidth", "activeBarWidth"], ["colorActiveBarHeight", "activeBarHeight"], ["colorActiveBarBorderSize", "activeBarBorderWidth"], ["colorItemBgSelected", "itemSelectedBg"]],
    // Dropdown will handle menu style self. We do not need to handle this.
    injectStyle: r,
    unitless: {
      groupTitleLineHeight: !0
    }
  })(e, t);
};
var rR = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const nR = /* @__PURE__ */ hr((e, t) => {
  var r, n;
  const a = g.useContext(Hs), o = a || {}, {
    getPrefixCls: i,
    getPopupContainer: s,
    direction: u,
    menu: l
  } = g.useContext(xt), c = i(), {
    prefixCls: d,
    className: v,
    style: p,
    theme: h = "light",
    expandIcon: f,
    _internalDisableMenuItemTitleTooltip: m,
    inlineCollapsed: b,
    siderCollapsed: E,
    items: y,
    children: w,
    rootClassName: S,
    mode: D,
    selectable: x,
    onClick: A,
    overflowedIndicatorPopupClassName: O
  } = e, B = rR(e, ["prefixCls", "className", "style", "theme", "expandIcon", "_internalDisableMenuItemTitleTooltip", "inlineCollapsed", "siderCollapsed", "items", "children", "rootClassName", "mode", "selectable", "onClick", "overflowedIndicatorPopupClassName"]), j = Tr(B, ["collapsedWidth"]), T = UP(y) || w;
  if (process.env.NODE_ENV !== "production") {
    const H = sr("Menu");
    process.env.NODE_ENV !== "production" && H(!("inlineCollapsed" in e && D !== "inline"), "usage", "`inlineCollapsed` should only be used when `mode` is inline."), process.env.NODE_ENV !== "production" && H(!(e.siderCollapsed !== void 0 && "inlineCollapsed" in e), "usage", "`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead."), H.deprecated("items" in e && !w, "children", "items");
  }
  (r = o.validator) === null || r === void 0 || r.call(o, {
    mode: D
  });
  const $ = Br(function() {
    var H;
    A == null || A.apply(void 0, arguments), (H = o.onClick) === null || H === void 0 || H.call(o);
  }), P = o.mode || D, R = x ?? o.selectable, M = g.useMemo(() => E !== void 0 ? E : b, [b, E]), F = {
    horizontal: {
      motionName: `${c}-slide-up`
    },
    inline: cB(c),
    other: {
      motionName: `${c}-zoom-big`
    }
  }, N = i("menu", d || o.prefixCls), V = xo(N), [k, W, U] = tR(N, V, !a), Q = ne(`${N}-${h}`, l == null ? void 0 : l.className, v);
  let I;
  if (typeof f == "function")
    I = f;
  else if (f === null || f === !1)
    I = null;
  else if (o.expandIcon === null || o.expandIcon === !1)
    I = null;
  else {
    const H = f ?? o.expandIcon;
    I = mn(H, {
      className: ne(`${N}-submenu-expand-icon`, Jn(H) ? (n = H.props) === null || n === void 0 ? void 0 : n.className : "")
    });
  }
  const z = g.useMemo(() => ({
    prefixCls: N,
    inlineCollapsed: M || !1,
    direction: u,
    firstLevel: !0,
    theme: h,
    mode: P,
    disableMenuItemTitleTooltip: m
  }), [N, M, u, m, h]);
  return k(/* @__PURE__ */ g.createElement(Hs.Provider, {
    value: null
  }, /* @__PURE__ */ g.createElement(Vs.Provider, {
    value: z
  }, /* @__PURE__ */ g.createElement(Fi, Object.assign({
    getPopupContainer: s,
    overflowedIndicator: /* @__PURE__ */ g.createElement(K0, null),
    overflowedIndicatorPopupClassName: ne(N, `${N}-${h}`, O),
    mode: P,
    selectable: R,
    onClick: $
  }, j, {
    inlineCollapsed: M,
    style: Object.assign(Object.assign({}, l == null ? void 0 : l.style), p),
    className: Q,
    prefixCls: N,
    direction: u,
    defaultMotions: F,
    expandIcon: I,
    ref: t,
    rootClassName: ne(S, W, o.rootClassName, U, V)
  }), T))));
}), aR = nR, Ao = /* @__PURE__ */ hr((e, t) => {
  const r = qe(null), n = g.useContext(Nf);
  return Ba(t, () => ({
    menu: r.current,
    focus: (a) => {
      var o;
      (o = r.current) === null || o === void 0 || o.focus(a);
    }
  })), /* @__PURE__ */ g.createElement(aR, Object.assign({
    ref: r
  }, e, n));
});
Ao.Item = U0;
Ao.SubMenu = G0;
Ao.Divider = q0;
Ao.ItemGroup = hu;
process.env.NODE_ENV !== "production" && (Ao.displayName = "Menu");
const oR = Ao, iR = (e) => {
  const {
    componentCls: t,
    menuCls: r,
    colorError: n,
    colorTextLightSolid: a
  } = e, o = `${r}-item`;
  return {
    [`${t}, ${t}-menu-submenu`]: {
      [`${r} ${o}`]: {
        [`&${o}-danger:not(${o}-disabled)`]: {
          color: n,
          "&:hover": {
            color: a,
            backgroundColor: n
          }
        }
      }
    }
  };
}, sR = (e) => {
  const {
    componentCls: t,
    menuCls: r,
    zIndexPopup: n,
    dropdownArrowDistance: a,
    sizePopupArrow: o,
    antCls: i,
    iconCls: s,
    motionDurationMid: u,
    paddingBlock: l,
    fontSize: c,
    dropdownEdgeChildPadding: d,
    colorTextDisabled: v,
    fontSizeIcon: p,
    controlPaddingHorizontal: h,
    colorBgElevated: f
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign({}, Yn(e)), {
        position: "absolute",
        top: -9999,
        left: {
          _skip_check_: !0,
          value: -9999
        },
        zIndex: n,
        display: "block",
        // A placeholder out of dropdown visible range to avoid close when user moving
        "&::before": {
          position: "absolute",
          insetBlock: e.calc(o).div(2).sub(a).equal(),
          // insetInlineStart: -7, // FIXME: Seems not work for hidden element
          zIndex: -9999,
          opacity: 1e-4,
          content: '""'
        },
        [`&-trigger${i}-btn`]: {
          [`& > ${s}-down, & > ${i}-btn-icon > ${s}-down`]: {
            fontSize: p
          }
        },
        [`${t}-wrap`]: {
          position: "relative",
          [`${i}-btn > ${s}-down`]: {
            fontSize: p
          },
          [`${s}-down::before`]: {
            transition: `transform ${u}`
          }
        },
        [`${t}-wrap-open`]: {
          [`${s}-down::before`]: {
            transform: "rotate(180deg)"
          }
        },
        "\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ": {
          display: "none"
        },
        // =============================================================
        // ==                         Motion                          ==
        // =============================================================
        // When position is not enough for dropdown, the placement will revert.
        // We will handle this with revert motion name.
        [`&${i}-slide-down-enter${i}-slide-down-enter-active${t}-placement-bottomLeft,
          &${i}-slide-down-appear${i}-slide-down-appear-active${t}-placement-bottomLeft,
          &${i}-slide-down-enter${i}-slide-down-enter-active${t}-placement-bottom,
          &${i}-slide-down-appear${i}-slide-down-appear-active${t}-placement-bottom,
          &${i}-slide-down-enter${i}-slide-down-enter-active${t}-placement-bottomRight,
          &${i}-slide-down-appear${i}-slide-down-appear-active${t}-placement-bottomRight`]: {
          animationName: l0
        },
        [`&${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-topLeft,
          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-topLeft,
          &${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-top,
          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-top,
          &${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-topRight,
          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-topRight`]: {
          animationName: f0
        },
        [`&${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottomLeft,
          &${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottom,
          &${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottomRight`]: {
          animationName: c0
        },
        [`&${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-topLeft,
          &${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-top,
          &${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-topRight`]: {
          animationName: d0
        }
      })
    },
    // =============================================================
    // ==                        Arrow style                      ==
    // =============================================================
    O0(e, f, {
      arrowPlacement: {
        top: !0,
        bottom: !0
      }
    }),
    {
      // =============================================================
      // ==                          Menu                           ==
      // =============================================================
      [`${t} ${r}`]: {
        position: "relative",
        margin: 0
      },
      [`${r}-submenu-popup`]: {
        position: "absolute",
        zIndex: n,
        background: "transparent",
        boxShadow: "none",
        transformOrigin: "0 0",
        "ul, li": {
          listStyle: "none",
          margin: 0
        }
      },
      [`${t}, ${t}-menu-submenu`]: {
        [r]: Object.assign(Object.assign({
          padding: d,
          listStyleType: "none",
          backgroundColor: f,
          backgroundClip: "padding-box",
          borderRadius: e.borderRadiusLG,
          outline: "none",
          boxShadow: e.boxShadowSecondary
        }, ec(e)), {
          [`${r}-item-group-title`]: {
            padding: `${Se(l)} ${Se(h)}`,
            color: e.colorTextDescription,
            transition: `all ${u}`
          },
          // ======================= Item Content =======================
          [`${r}-item`]: {
            position: "relative",
            display: "flex",
            alignItems: "center"
          },
          [`${r}-item-icon`]: {
            minWidth: c,
            marginInlineEnd: e.marginXS,
            fontSize: e.fontSizeSM
          },
          [`${r}-title-content`]: {
            flex: "auto",
            "> a": {
              color: "inherit",
              transition: `all ${u}`,
              "&:hover": {
                color: "inherit"
              },
              "&::after": {
                position: "absolute",
                inset: 0,
                content: '""'
              }
            }
          },
          // =========================== Item ===========================
          [`${r}-item, ${r}-submenu-title`]: Object.assign(Object.assign({
            clear: "both",
            margin: 0,
            padding: `${Se(l)} ${Se(h)}`,
            color: e.colorText,
            fontWeight: "normal",
            fontSize: c,
            lineHeight: e.lineHeight,
            cursor: "pointer",
            transition: `all ${u}`,
            borderRadius: e.borderRadiusSM,
            "&:hover, &-active": {
              backgroundColor: e.controlItemBgHover
            }
          }, ec(e)), {
            "&-selected": {
              color: e.colorPrimary,
              backgroundColor: e.controlItemBgActive,
              "&:hover, &-active": {
                backgroundColor: e.controlItemBgActiveHover
              }
            },
            "&-disabled": {
              color: v,
              cursor: "not-allowed",
              "&:hover": {
                color: v,
                backgroundColor: f,
                cursor: "not-allowed"
              },
              a: {
                pointerEvents: "none"
              }
            },
            "&-divider": {
              height: 1,
              // By design
              margin: `${Se(e.marginXXS)} 0`,
              overflow: "hidden",
              lineHeight: 0,
              backgroundColor: e.colorSplit
            },
            [`${t}-menu-submenu-expand-icon`]: {
              position: "absolute",
              insetInlineEnd: e.paddingXS,
              [`${t}-menu-submenu-arrow-icon`]: {
                marginInlineEnd: "0 !important",
                color: e.colorTextDescription,
                fontSize: p,
                fontStyle: "normal"
              }
            }
          }),
          [`${r}-item-group-list`]: {
            margin: `0 ${Se(e.marginXS)}`,
            padding: 0,
            listStyle: "none"
          },
          [`${r}-submenu-title`]: {
            paddingInlineEnd: e.calc(h).add(e.fontSizeSM).equal()
          },
          [`${r}-submenu-vertical`]: {
            position: "relative"
          },
          [`${r}-submenu${r}-submenu-disabled ${t}-menu-submenu-title`]: {
            [`&, ${t}-menu-submenu-arrow-icon`]: {
              color: v,
              backgroundColor: f,
              cursor: "not-allowed"
            }
          },
          // https://github.com/ant-design/ant-design/issues/19264
          [`${r}-submenu-selected ${t}-menu-submenu-title`]: {
            color: e.colorPrimary
          }
        })
      }
    },
    // Follow code may reuse in other components
    [js(e, "slide-up"), js(e, "slide-down"), hg(e, "move-up"), hg(e, "move-down"), Sf(e, "zoom-big")]
  ];
}, uR = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 50,
  paddingBlock: (e.controlHeight - e.fontSize * e.lineHeight) / 2
}, Of({
  contentRadius: e.borderRadiusLG,
  limitVerticalRadius: !0
})), S0(e)), lR = aa("Dropdown", (e) => {
  const {
    marginXXS: t,
    sizePopupArrow: r,
    paddingXXS: n,
    componentCls: a
  } = e, o = cr(e, {
    menuCls: `${a}-menu`,
    dropdownArrowDistance: e.calc(r).div(2).add(t).equal(),
    dropdownEdgeChildPadding: n
  });
  return [sR(o), iR(o)];
}, uR), pu = (e) => {
  const {
    menu: t,
    arrow: r,
    prefixCls: n,
    children: a,
    trigger: o,
    disabled: i,
    dropdownRender: s,
    getPopupContainer: u,
    overlayClassName: l,
    rootClassName: c,
    overlayStyle: d,
    open: v,
    onOpenChange: p,
    // Deprecated
    visible: h,
    onVisibleChange: f,
    mouseEnterDelay: m = 0.15,
    mouseLeaveDelay: b = 0.1,
    autoAdjustOverflow: E = !0,
    placement: y = "",
    overlay: w,
    transitionName: S
  } = e, {
    getPopupContainer: D,
    getPrefixCls: x,
    direction: A,
    dropdown: O
  } = g.useContext(xt), B = sr("Dropdown");
  process.env.NODE_ENV !== "production" && ([["visible", "open"], ["onVisibleChange", "onOpenChange"]].forEach((ce) => {
    let [q, pe] = ce;
    B.deprecated(!(q in e), q, pe);
  }), B.deprecated(!("overlay" in e), "overlay", "menu"));
  const j = g.useMemo(() => {
    const ce = x();
    return S !== void 0 ? S : y.includes("top") ? `${ce}-slide-down` : `${ce}-slide-up`;
  }, [x, y, S]), T = g.useMemo(() => y ? y.includes("Center") ? y.slice(0, y.indexOf("Center")) : y : A === "rtl" ? "bottomRight" : "bottomLeft", [y, A]);
  if (process.env.NODE_ENV !== "production") {
    if (y.includes("Center")) {
      const ce = y.slice(0, y.indexOf("Center"));
      process.env.NODE_ENV !== "production" && B(!y.includes("Center"), "deprecated", `You are using '${y}' placement in Dropdown, which is deprecated. Try to use '${ce}' instead.`);
    }
    [["visible", "open"], ["onVisibleChange", "onOpenChange"]].forEach((ce) => {
      let [q, pe] = ce;
      B.deprecated(!(q in e), q, pe);
    });
  }
  const $ = x("dropdown", n), P = xo($), [R, M, F] = lR($, P), [, N] = Hr(), V = g.Children.only(a), k = mn(V, {
    className: ne(`${$}-trigger`, {
      [`${$}-rtl`]: A === "rtl"
    }, V.props.className),
    disabled: i
  }), W = i ? [] : o;
  let U;
  W && W.includes("contextMenu") && (U = !0);
  const [Q, I] = zr(!1, {
    value: v ?? h
  }), z = Br((ce) => {
    p == null || p(ce, {
      source: "trigger"
    }), f == null || f(ce), I(ce);
  }), H = ne(l, c, M, F, P, O == null ? void 0 : O.className, {
    [`${$}-rtl`]: A === "rtl"
  }), G = A0({
    arrowPointAtCenter: typeof r == "object" && r.pointAtCenter,
    autoAdjustOverflow: E,
    offset: N.marginXXS,
    arrowWidth: r ? N.sizePopupArrow : 0,
    borderRadius: N.borderRadius
  }), re = g.useCallback(() => {
    t != null && t.selectable && (t != null && t.multiple) || (p == null || p(!1, {
      source: "menu"
    }), I(!1));
  }, [t == null ? void 0 : t.selectable, t == null ? void 0 : t.multiple]), te = () => {
    let ce;
    return t != null && t.items ? ce = /* @__PURE__ */ g.createElement(oR, Object.assign({}, t)) : typeof w == "function" ? ce = w() : ce = w, s && (ce = s(ce)), ce = g.Children.only(typeof ce == "string" ? /* @__PURE__ */ g.createElement("span", null, ce) : ce), /* @__PURE__ */ g.createElement(XP, {
      prefixCls: `${$}-menu`,
      rootClassName: ne(F, P),
      expandIcon: /* @__PURE__ */ g.createElement("span", {
        className: `${$}-menu-submenu-arrow`
      }, /* @__PURE__ */ g.createElement(Sc, {
        className: `${$}-menu-submenu-arrow-icon`
      })),
      mode: "vertical",
      selectable: !1,
      onClick: re,
      validator: (q) => {
        let {
          mode: pe
        } = q;
        process.env.NODE_ENV !== "production" && B(!pe || pe === "vertical", "usage", `mode="${pe}" is not supported for Dropdown's Menu.`);
      }
    }, ce);
  }, [de, se] = hf("Dropdown", d == null ? void 0 : d.zIndex);
  let he = /* @__PURE__ */ g.createElement(VF, Object.assign({
    alignPoint: U
  }, Tr(e, ["rootClassName"]), {
    mouseEnterDelay: m,
    mouseLeaveDelay: b,
    visible: Q,
    builtinPlacements: G,
    arrow: !!r,
    overlayClassName: H,
    prefixCls: $,
    getPopupContainer: u || D,
    transitionName: j,
    trigger: W,
    overlay: te,
    placement: T,
    onVisibleChange: z,
    overlayStyle: Object.assign(Object.assign(Object.assign({}, O == null ? void 0 : O.style), d), {
      zIndex: de
    })
  }), k);
  return de && (he = /* @__PURE__ */ g.createElement(uu.Provider, {
    value: se
  }, he)), R(he);
};
function cR(e) {
  return Object.assign(Object.assign({}, e), {
    align: {
      overflow: {
        adjustX: !1,
        adjustY: !1
      }
    }
  });
}
const fR = L2(pu, "dropdown", (e) => e, cR), dR = (e) => /* @__PURE__ */ g.createElement(fR, Object.assign({}, e), /* @__PURE__ */ g.createElement("span", null));
pu._InternalPanelDoNotUseOrYouWillBeFired = dR;
process.env.NODE_ENV !== "production" && (pu.displayName = "Dropdown");
const X0 = pu;
var vR = ["prefixCls", "className", "style", "checked", "disabled", "defaultChecked", "type", "title", "onChange"], gR = /* @__PURE__ */ hr(function(e, t) {
  var r, n = e.prefixCls, a = n === void 0 ? "rc-checkbox" : n, o = e.className, i = e.style, s = e.checked, u = e.disabled, l = e.defaultChecked, c = l === void 0 ? !1 : l, d = e.type, v = d === void 0 ? "checkbox" : d, p = e.title, h = e.onChange, f = ct(e, vR), m = qe(null), b = zr(c, {
    value: s
  }), E = ie(b, 2), y = E[0], w = E[1];
  Ba(t, function() {
    return {
      focus: function() {
        var A;
        (A = m.current) === null || A === void 0 || A.focus();
      },
      blur: function() {
        var A;
        (A = m.current) === null || A === void 0 || A.blur();
      },
      input: m.current
    };
  });
  var S = ne(a, o, (r = {}, K(r, "".concat(a, "-checked"), y), K(r, "".concat(a, "-disabled"), u), r)), D = function(A) {
    u || ("checked" in e || w(A.target.checked), h == null || h({
      target: Y(Y({}, e), {}, {
        type: v,
        checked: A.target.checked
      }),
      stopPropagation: function() {
        A.stopPropagation();
      },
      preventDefault: function() {
        A.preventDefault();
      },
      nativeEvent: A.nativeEvent
    }));
  };
  return /* @__PURE__ */ g.createElement("span", {
    className: S,
    title: p,
    style: i
  }, /* @__PURE__ */ g.createElement("input", _e({}, f, {
    className: "".concat(a, "-input"),
    ref: m,
    onChange: D,
    disabled: u,
    checked: !!y,
    type: v
  })), /* @__PURE__ */ g.createElement("span", {
    className: "".concat(a, "-inner")
  }));
});
function mR(e) {
  return cr(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const hR = (e) => {
  const {
    controlHeight: t,
    fontSize: r,
    lineHeight: n,
    lineWidth: a,
    controlHeightSM: o,
    controlHeightLG: i,
    fontSizeLG: s,
    lineHeightLG: u,
    paddingSM: l,
    controlPaddingHorizontalSM: c,
    controlPaddingHorizontal: d,
    colorFillAlter: v,
    colorPrimaryHover: p,
    colorPrimary: h,
    controlOutlineWidth: f,
    controlOutline: m,
    colorErrorOutline: b,
    colorWarningOutline: E,
    colorBgContainer: y
  } = e;
  return {
    paddingBlock: Math.max(Math.round((t - r * n) / 2 * 10) / 10 - a, 0),
    paddingBlockSM: Math.max(Math.round((o - r * n) / 2 * 10) / 10 - a, 0),
    paddingBlockLG: Math.ceil((i - s * u) / 2 * 10) / 10 - a,
    paddingInline: l - a,
    paddingInlineSM: c - a,
    paddingInlineLG: d - a,
    addonBg: v,
    activeBorderColor: h,
    hoverBorderColor: p,
    activeShadow: `0 0 0 ${f}px ${m}`,
    errorActiveShadow: `0 0 0 ${f}px ${b}`,
    warningActiveShadow: `0 0 0 ${f}px ${E}`,
    hoverBg: y,
    activeBg: y,
    inputFontSize: r,
    inputFontSizeLG: s,
    inputFontSizeSM: r
  };
}, pR = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), If = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "&:hover:not([disabled])": Object.assign({}, pR(cr(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), Y0 = (e, t) => ({
  background: e.colorBgContainer,
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: t.borderColor,
  "&:hover": {
    borderColor: t.hoverBorderColor,
    backgroundColor: e.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: t.activeBorderColor,
    boxShadow: t.activeShadow,
    outline: 0,
    backgroundColor: e.activeBg
  }
}), Lg = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Y0(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), bR = (e, t) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Y0(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.colorPrimaryHover,
    activeBorderColor: e.colorPrimary,
    activeShadow: e.activeShadow
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, If(e))
  }), Lg(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), Lg(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), kg = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      borderColor: t.addonBorderColor,
      color: t.addonColor
    }
  }
}), yR = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.addonBg,
        border: `${Se(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    }
  }, kg(e, {
    status: "error",
    addonBorderColor: e.colorError,
    addonColor: e.colorErrorText
  })), kg(e, {
    status: "warning",
    addonBorderColor: e.colorWarning,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group-addon`]: Object.assign({}, If(e))
    }
  })
}), CR = (e, t) => ({
  "&-borderless": Object.assign({
    background: "transparent",
    border: "none",
    "&:focus, &:focus-within": {
      outline: "none"
    },
    [`&${e.componentCls}-disabled, &[disabled]`]: {
      color: e.colorTextDisabled
    }
  }, t)
}), Z0 = (e, t) => ({
  background: t.bg,
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: "transparent",
  "input&, & input, textarea&, & textarea": {
    color: t == null ? void 0 : t.inputColor
  },
  "&:hover": {
    background: t.hoverBg
  },
  "&:focus, &:focus-within": {
    outline: 0,
    borderColor: t.activeBorderColor,
    backgroundColor: e.activeBg
  }
}), zg = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Z0(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), ER = (e, t) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Z0(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.colorPrimary
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, If(e))
  }), zg(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    inputColor: e.colorErrorText,
    affixColor: e.colorError
  })), zg(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    inputColor: e.colorWarningText,
    affixColor: e.colorWarning
  })), t)
}), Vg = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      background: t.addonBg,
      color: t.addonColor
    }
  }
}), wR = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.colorFillTertiary
      },
      [`${e.componentCls}-filled:not(:focus):not(:focus-within)`]: {
        "&:not(:first-child)": {
          borderInlineStart: `${Se(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        },
        "&:not(:last-child)": {
          borderInlineEnd: `${Se(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        }
      }
    }
  }, Vg(e, {
    status: "error",
    addonBg: e.colorErrorBg,
    addonColor: e.colorErrorText
  })), Vg(e, {
    status: "warning",
    addonBg: e.colorWarningBg,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group`]: {
        "&-addon": {
          background: e.colorFillTertiary,
          color: e.colorTextDisabled
        },
        "&-addon:first-child": {
          borderInlineStart: `${Se(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${Se(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${Se(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${Se(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${Se(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${Se(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        }
      }
    }
  })
}), DR = (e) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color: e,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
}), Q0 = (e) => {
  const {
    paddingBlockLG: t,
    lineHeightLG: r,
    borderRadiusLG: n,
    paddingInlineLG: a
  } = e;
  return {
    padding: `${Se(t)} ${Se(a)}`,
    fontSize: e.inputFontSizeLG,
    lineHeight: r,
    borderRadius: n
  };
}, J0 = (e) => ({
  padding: `${Se(e.paddingBlockSM)} ${Se(e.paddingInlineSM)}`,
  fontSize: e.inputFontSizeSM,
  borderRadius: e.borderRadiusSM
}), eb = (e) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${Se(e.paddingBlock)} ${Se(e.paddingInline)}`,
  color: e.colorText,
  fontSize: e.inputFontSize,
  lineHeight: e.lineHeight,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, DR(e.colorTextPlaceholder)), {
  // Reset height for `textarea`s
  "textarea&": {
    maxWidth: "100%",
    // prevent textarea resize from coming out of its container
    height: "auto",
    minHeight: e.controlHeight,
    lineHeight: e.lineHeight,
    verticalAlign: "bottom",
    transition: `all ${e.motionDurationSlow}, height 0s`,
    resize: "vertical"
  },
  // Size
  "&-lg": Object.assign({}, Q0(e)),
  "&-sm": Object.assign({}, J0(e)),
  // RTL
  "&-rtl": {
    direction: "rtl"
  },
  "&-textarea-rtl": {
    direction: "rtl"
  }
}), SR = (e) => {
  const {
    componentCls: t,
    antCls: r
  } = e;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: e.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, Q0(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, J0(e)),
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${r}-select-single ${r}-select-selector`]: {
      height: e.controlHeightLG
    },
    [`&-sm ${r}-select-single ${r}-select-selector`]: {
      height: e.controlHeightSM
    },
    [`> ${t}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${t}-group`]: {
      "&-addon, &-wrap": {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${Se(e.paddingInline)}`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.inputFontSize,
        textAlign: "center",
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${r}-select`]: {
          margin: `${Se(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${Se(e.calc(e.paddingInline).mul(-1).equal())}`,
          [`&${r}-select-single:not(${r}-select-customize-input):not(${r}-pagination-size-changer)`]: {
            [`${r}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${Se(e.lineWidth)} ${e.lineType} transparent`,
              boxShadow: "none"
            }
          },
          "&-open, &-focused": {
            [`${r}-select-selector`]: {
              color: e.colorPrimary
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${r}-cascader-picker`]: {
          margin: `-9px ${Se(e.calc(e.paddingInline).mul(-1).equal())}`,
          backgroundColor: "transparent",
          [`${r}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      }
    },
    [`${t}`]: {
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${r}-select ${r}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}-affix-wrapper`]: {
      [`&:not(:first-child) ${t}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${t}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${r}-select ${r}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${t}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${t}-search &`]: {
          borderStartStartRadius: e.borderRadius,
          borderEndStartRadius: e.borderRadius
        }
      },
      [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${t}-group-compact`]: Object.assign(Object.assign({
      display: "block"
    }, Jl()), {
      [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: e.lineWidth,
          "&:hover": {
            zIndex: 1
          },
          "&:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-block",
        float: "none",
        verticalAlign: "top",
        // https://github.com/ant-design/ant-design-pro/issues/139
        borderRadius: 0
      },
      [`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${r}-picker-range
      `]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
        borderInlineEndWidth: e.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [`${t}`]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${r}-select > ${r}-select-selector,
      & > ${r}-select-auto-complete ${t},
      & > ${r}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderRadius: 0,
        "&:hover": {
          zIndex: 1
        },
        "&:focus": {
          zIndex: 1
        }
      },
      [`& > ${r}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${r}-select > ${r}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${r}-select:first-child > ${r}-select-selector,
      & > ${r}-select-auto-complete:first-child ${t},
      & > ${r}-cascader-picker:first-child ${t}`]: {
        borderStartStartRadius: e.borderRadius,
        borderEndStartRadius: e.borderRadius
      },
      [`& > *:last-child,
      & > ${r}-select:last-child > ${r}-select-selector,
      & > ${r}-cascader-picker:last-child ${t},
      & > ${r}-cascader-picker-focused:last-child ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderStartEndRadius: e.borderRadius,
        borderEndEndRadius: e.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${r}-select-auto-complete ${t}`]: {
        verticalAlign: "top"
      },
      [`${t}-group-wrapper + ${t}-group-wrapper`]: {
        marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
        [`${t}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${t}-group-wrapper:not(:last-child)`]: {
        [`&${t}-search > ${t}-group`]: {
          [`& > ${t}-group-addon > ${t}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${t}`]: {
            borderStartStartRadius: e.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: e.borderRadius
          }
        }
      }
    })
  };
}, xR = (e) => {
  const {
    componentCls: t,
    controlHeightSM: r,
    lineWidth: n,
    calc: a
  } = e, i = a(r).sub(a(n).mul(2)).sub(16).div(2).equal();
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Yn(e)), eb(e)), bR(e)), ER(e)), CR(e)), {
      '&[type="color"]': {
        height: e.controlHeight,
        [`&${t}-lg`]: {
          height: e.controlHeightLG
        },
        [`&${t}-sm`]: {
          height: r,
          paddingTop: i,
          paddingBottom: i
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        "-webkit-appearance": "none"
      }
    })
  };
}, OR = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // ========================= Input =========================
    [`${t}-clear-icon`]: {
      margin: 0,
      color: e.colorTextQuaternary,
      fontSize: e.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      "&:hover": {
        color: e.colorTextTertiary
      },
      "&:active": {
        color: e.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${Se(e.inputAffixPadding)}`
      }
    }
  };
}, AR = (e) => {
  const {
    componentCls: t,
    inputAffixPadding: r,
    colorTextDescription: n,
    motionDurationSlow: a,
    colorIcon: o,
    colorIconHover: i,
    iconCls: s
  } = e;
  return {
    [`${t}-affix-wrapper`]: Object.assign(Object.assign(Object.assign(Object.assign({}, eb(e)), {
      display: "inline-flex",
      [`&:not(${t}-disabled):hover`]: {
        zIndex: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      },
      "&-focused, &:focus": {
        zIndex: 1
      },
      [`> input${t}`]: {
        padding: 0,
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        background: "transparent",
        color: "inherit",
        "&::-ms-reveal": {
          display: "none"
        },
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [`${t}`]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: e.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: n
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: e.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: r
        },
        "&-suffix": {
          marginInlineStart: r
        }
      }
    }), OR(e)), {
      // password
      [`${s}${t}-password-icon`]: {
        color: o,
        cursor: "pointer",
        transition: `all ${a}`,
        "&:hover": {
          color: i
        }
      }
    })
  };
}, BR = (e) => {
  const {
    componentCls: t,
    borderRadiusLG: r,
    borderRadiusSM: n
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, Yn(e)), SR(e)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": Object.assign(Object.assign(Object.assign({
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${t}-group-addon`]: {
            borderRadius: r,
            fontSize: e.inputFontSizeLG
          }
        },
        "&-sm": {
          [`${t}-group-addon`]: {
            borderRadius: n
          }
        }
      }, yR(e)), wR(e)), {
        // '&-disabled': {
        //   [`${componentCls}-group-addon`]: {
        //     ...genDisabledStyle(token),
        //   },
        // },
        // Fix the issue of using icons in Space Compact mode
        // https://github.com/ant-design/ant-design/issues/42122
        [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderRadius: 0
          }
        },
        [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        },
        // Fix the issue of input use show-count param in space compact mode
        // https://github.com/ant-design/ant-design/issues/46872
        [`&:not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}-affix-wrapper`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        }
      })
    })
  };
}, $R = (e) => {
  const {
    componentCls: t,
    antCls: r
  } = e, n = `${t}-search`;
  return {
    [n]: {
      [`${t}`]: {
        "&:hover, &:focus": {
          borderColor: e.colorPrimaryHover,
          [`+ ${t}-group-addon ${n}-button:not(${r}-btn-primary)`]: {
            borderInlineStartColor: e.colorPrimaryHover
          }
        }
      },
      [`${t}-affix-wrapper`]: {
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#components-auto-complete-demo-certain-category
      [`${t}-lg`]: {
        lineHeight: e.calc(e.lineHeightLG).sub(2e-4).equal({
          unit: !1
        })
      },
      [`> ${t}-group`]: {
        [`> ${t}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${n}-button`]: {
            // Fix https://github.com/ant-design/ant-design/issues/47150
            marginInlineEnd: -1,
            paddingTop: 0,
            paddingBottom: 0,
            borderStartStartRadius: 0,
            borderStartEndRadius: e.borderRadius,
            borderEndEndRadius: e.borderRadius,
            borderEndStartRadius: 0,
            boxShadow: "none"
          },
          [`${n}-button:not(${r}-btn-primary)`]: {
            color: e.colorTextDescription,
            "&:hover": {
              color: e.colorPrimaryHover
            },
            "&:active": {
              color: e.colorPrimaryActive
            },
            [`&${r}-btn-loading::before`]: {
              insetInlineStart: 0,
              insetInlineEnd: 0,
              insetBlockStart: 0,
              insetBlockEnd: 0
            }
          }
        }
      },
      [`${n}-button`]: {
        height: e.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`&-large ${n}-button`]: {
        height: e.controlHeightLG
      },
      [`&-small ${n}-button`]: {
        height: e.controlHeightSM
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${t}-compact-item`]: {
        [`&:not(${t}-compact-last-item)`]: {
          [`${t}-group-addon`]: {
            [`${t}-search-button`]: {
              marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
              borderRadius: 0
            }
          }
        },
        [`&:not(${t}-compact-first-item)`]: {
          [`${t},${t}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: {
          "&:hover,&:focus,&:active": {
            zIndex: 2
          }
        },
        [`> ${t}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
}, FR = (e) => {
  const {
    componentCls: t,
    paddingLG: r
  } = e, n = `${t}-textarea`;
  return {
    [n]: {
      position: "relative",
      "&-show-count": {
        // https://github.com/ant-design/ant-design/issues/33049
        [`> ${t}`]: {
          height: "100%"
        },
        [`${t}-data-count`]: {
          position: "absolute",
          bottom: e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),
          insetInlineEnd: 0,
          color: e.colorTextDescription,
          whiteSpace: "nowrap",
          pointerEvents: "none"
        }
      },
      "&-allow-clear": {
        [`> ${t}`]: {
          paddingInlineEnd: r
        }
      },
      [`&-affix-wrapper${n}-has-feedback`]: {
        [`${t}`]: {
          paddingInlineEnd: r
        }
      },
      [`&-affix-wrapper${t}-affix-wrapper`]: {
        padding: 0,
        [`> textarea${t}`]: {
          fontSize: "inherit",
          border: "none",
          outline: "none",
          background: "transparent",
          "&:focus": {
            boxShadow: "none !important"
          }
        },
        [`${t}-suffix`]: {
          margin: 0,
          "> *:not(:last-child)": {
            marginInline: 0
          },
          // Clear Icon
          [`${t}-clear-icon`]: {
            position: "absolute",
            insetInlineEnd: e.paddingXS,
            insetBlockStart: e.paddingXS
          },
          // Feedback Icon
          [`${n}-suffix`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: e.paddingInline,
            bottom: 0,
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            margin: "auto",
            pointerEvents: "none"
          }
        }
      }
    }
  };
}, PR = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-out-of-range`]: {
      [`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]: {
        color: e.colorError
      }
    }
  };
}, Mf = aa("Input", (e) => {
  const t = cr(e, mR(e));
  return [
    xR(t),
    FR(t),
    AR(t),
    BR(t),
    $R(t),
    PR(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Jp(t)
  ];
}, hR), RR = (e) => {
  const {
    checkboxCls: t
  } = e, r = `${t}-wrapper`;
  return [
    // ===================== Basic =====================
    {
      // Group
      [`${t}-group`]: Object.assign(Object.assign({}, Yn(e)), {
        display: "inline-flex",
        flexWrap: "wrap",
        columnGap: e.marginXS,
        // Group > Grid
        [`> ${e.antCls}-row`]: {
          flex: 1
        }
      }),
      // Wrapper
      [r]: Object.assign(Object.assign({}, Yn(e)), {
        display: "inline-flex",
        alignItems: "baseline",
        cursor: "pointer",
        // Fix checkbox & radio in flex align #30260
        "&:after": {
          display: "inline-block",
          width: 0,
          overflow: "hidden",
          content: "'\\a0'"
        },
        // Checkbox near checkbox
        [`& + ${r}`]: {
          marginInlineStart: 0
        },
        [`&${r}-in-form-item`]: {
          'input[type="checkbox"]': {
            width: 14,
            // FIXME: magic
            height: 14
            // FIXME: magic
          }
        }
      }),
      // Wrapper > Checkbox
      [t]: Object.assign(Object.assign({}, Yn(e)), {
        position: "relative",
        whiteSpace: "nowrap",
        lineHeight: 1,
        cursor: "pointer",
        borderRadius: e.borderRadiusSM,
        // To make alignment right when `controlHeight` is changed
        // Ref: https://github.com/ant-design/ant-design/issues/41564
        alignSelf: "center",
        // Wrapper > Checkbox > input
        [`${t}-input`]: {
          position: "absolute",
          // Since baseline align will get additional space offset,
          // we need to move input to top to make it align with text.
          // Ref: https://github.com/ant-design/ant-design/issues/38926#issuecomment-1486137799
          inset: 0,
          zIndex: 1,
          cursor: "pointer",
          opacity: 0,
          margin: 0,
          [`&:focus-visible + ${t}-inner`]: Object.assign({}, df(e))
        },
        // Wrapper > Checkbox > inner
        [`${t}-inner`]: {
          boxSizing: "border-box",
          display: "block",
          width: e.checkboxSize,
          height: e.checkboxSize,
          direction: "ltr",
          backgroundColor: e.colorBgContainer,
          border: `${Se(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderRadius: e.borderRadiusSM,
          borderCollapse: "separate",
          transition: `all ${e.motionDurationSlow}`,
          "&:after": {
            boxSizing: "border-box",
            position: "absolute",
            top: "50%",
            insetInlineStart: "25%",
            display: "table",
            width: e.calc(e.checkboxSize).div(14).mul(5).equal(),
            height: e.calc(e.checkboxSize).div(14).mul(8).equal(),
            border: `${Se(e.lineWidthBold)} solid ${e.colorWhite}`,
            borderTop: 0,
            borderInlineStart: 0,
            transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
            opacity: 0,
            content: '""',
            transition: `all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`
          }
        },
        // Wrapper > Checkbox + Text
        "& + span": {
          paddingInlineStart: e.paddingXS,
          paddingInlineEnd: e.paddingXS
        }
      })
    },
    // ===================== Hover =====================
    {
      // Wrapper & Wrapper > Checkbox
      [`
        ${r}:not(${r}-disabled),
        ${t}:not(${t}-disabled)
      `]: {
        [`&:hover ${t}-inner`]: {
          borderColor: e.colorPrimary
        }
      },
      [`${r}:not(${r}-disabled)`]: {
        [`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]: {
          backgroundColor: e.colorPrimaryHover,
          borderColor: "transparent"
        },
        [`&:hover ${t}-checked:not(${t}-disabled):after`]: {
          borderColor: e.colorPrimaryHover
        }
      }
    },
    // ==================== Checked ====================
    {
      // Wrapper > Checkbox
      [`${t}-checked`]: {
        [`${t}-inner`]: {
          backgroundColor: e.colorPrimary,
          borderColor: e.colorPrimary,
          "&:after": {
            opacity: 1,
            transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
            transition: `all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`
          }
        }
      },
      [`
        ${r}-checked:not(${r}-disabled),
        ${t}-checked:not(${t}-disabled)
      `]: {
        [`&:hover ${t}-inner`]: {
          backgroundColor: e.colorPrimaryHover,
          borderColor: "transparent"
        }
      }
    },
    // ================= Indeterminate =================
    {
      [t]: {
        "&-indeterminate": {
          // Wrapper > Checkbox > inner
          [`${t}-inner`]: {
            backgroundColor: e.colorBgContainer,
            borderColor: e.colorBorder,
            "&:after": {
              top: "50%",
              insetInlineStart: "50%",
              width: e.calc(e.fontSizeLG).div(2).equal(),
              height: e.calc(e.fontSizeLG).div(2).equal(),
              backgroundColor: e.colorPrimary,
              border: 0,
              transform: "translate(-50%, -50%) scale(1)",
              opacity: 1,
              content: '""'
            }
          }
        }
      }
    },
    // ==================== Disable ====================
    {
      // Wrapper
      [`${r}-disabled`]: {
        cursor: "not-allowed"
      },
      // Wrapper > Checkbox
      [`${t}-disabled`]: {
        // Wrapper > Checkbox > input
        [`&, ${t}-input`]: {
          cursor: "not-allowed",
          // Disabled for native input to enable Tooltip event handler
          // ref: https://github.com/ant-design/ant-design/issues/39822#issuecomment-1365075901
          pointerEvents: "none"
        },
        // Wrapper > Checkbox > inner
        [`${t}-inner`]: {
          background: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          "&:after": {
            borderColor: e.colorTextDisabled
          }
        },
        "&:after": {
          display: "none"
        },
        "& + span": {
          color: e.colorTextDisabled
        },
        [`&${t}-indeterminate ${t}-inner::after`]: {
          background: e.colorTextDisabled
        }
      }
    }
  ];
};
function TR(e, t) {
  const r = cr(t, {
    checkboxCls: `.${e}`,
    checkboxSize: t.controlInteractiveSize
  });
  return [RR(r)];
}
const tb = aa("Checkbox", (e, t) => {
  let {
    prefixCls: r
  } = t;
  return [TR(r, e)];
}), NR = /* @__PURE__ */ Z.createContext(null), rb = NR;
var IR = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const MR = (e, t) => {
  var r;
  const {
    prefixCls: n,
    className: a,
    rootClassName: o,
    children: i,
    indeterminate: s = !1,
    style: u,
    onMouseEnter: l,
    onMouseLeave: c,
    skipGroup: d = !1,
    disabled: v
  } = e, p = IR(e, ["prefixCls", "className", "rootClassName", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave", "skipGroup", "disabled"]), {
    getPrefixCls: h,
    direction: f,
    checkbox: m
  } = g.useContext(xt), b = g.useContext(rb), {
    isFormItemInput: E
  } = g.useContext(ea), y = g.useContext(Si), w = (r = (b == null ? void 0 : b.disabled) || v) !== null && r !== void 0 ? r : y, S = g.useRef(p.value);
  if (process.env.NODE_ENV !== "production") {
    const R = sr("Checkbox");
    process.env.NODE_ENV !== "production" && R("checked" in p || !!b || !("value" in p), "usage", "`value` is not a valid prop, do you mean `checked`?");
  }
  g.useEffect(() => {
    b == null || b.registerValue(p.value);
  }, []), g.useEffect(() => {
    if (!d)
      return p.value !== S.current && (b == null || b.cancelValue(S.current), b == null || b.registerValue(p.value), S.current = p.value), () => b == null ? void 0 : b.cancelValue(p.value);
  }, [p.value]);
  const D = h("checkbox", n), x = xo(D), [A, O, B] = tb(D, x), j = Object.assign({}, p);
  b && !d && (j.onChange = function() {
    p.onChange && p.onChange.apply(p, arguments), b.toggleOption && b.toggleOption({
      label: i,
      value: p.value
    });
  }, j.name = b.name, j.checked = b.value.includes(p.value));
  const T = ne(`${D}-wrapper`, {
    [`${D}-rtl`]: f === "rtl",
    [`${D}-wrapper-checked`]: j.checked,
    [`${D}-wrapper-disabled`]: w,
    [`${D}-wrapper-in-form-item`]: E
  }, m == null ? void 0 : m.className, a, o, B, x, O), $ = ne({
    [`${D}-indeterminate`]: s
  }, bf, O), P = s ? "mixed" : void 0;
  return A(/* @__PURE__ */ g.createElement(Wp, {
    component: "Checkbox",
    disabled: w
  }, /* @__PURE__ */ g.createElement("label", {
    className: T,
    style: Object.assign(Object.assign({}, m == null ? void 0 : m.style), u),
    onMouseEnter: l,
    onMouseLeave: c
  }, /* @__PURE__ */ g.createElement(gR, Object.assign({
    "aria-checked": P
  }, j, {
    prefixCls: D,
    className: $,
    disabled: w,
    ref: t
  })), i !== void 0 && /* @__PURE__ */ g.createElement("span", null, i))));
}, nb = /* @__PURE__ */ g.forwardRef(MR);
process.env.NODE_ENV !== "production" && (nb.displayName = "Checkbox");
const ab = nb;
var _R = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const jR = /* @__PURE__ */ g.forwardRef((e, t) => {
  const {
    defaultValue: r,
    children: n,
    options: a = [],
    prefixCls: o,
    className: i,
    rootClassName: s,
    style: u,
    onChange: l
  } = e, c = _R(e, ["defaultValue", "children", "options", "prefixCls", "className", "rootClassName", "style", "onChange"]), {
    getPrefixCls: d,
    direction: v
  } = g.useContext(xt), [p, h] = g.useState(c.value || r || []), [f, m] = g.useState([]);
  g.useEffect(() => {
    "value" in c && h(c.value || []);
  }, [c.value]);
  const b = g.useMemo(() => a.map((R) => typeof R == "string" || typeof R == "number" ? {
    label: R,
    value: R
  } : R), [a]), E = (R) => {
    m((M) => M.filter((F) => F !== R));
  }, y = (R) => {
    m((M) => [].concat(Me(M), [R]));
  }, w = (R) => {
    const M = p.indexOf(R.value), F = Me(p);
    M === -1 ? F.push(R.value) : F.splice(M, 1), "value" in c || h(F), l == null || l(F.filter((N) => f.includes(N)).sort((N, V) => {
      const k = b.findIndex((U) => U.value === N), W = b.findIndex((U) => U.value === V);
      return k - W;
    }));
  }, S = d("checkbox", o), D = `${S}-group`, x = xo(S), [A, O, B] = tb(S, x), j = Tr(c, ["value", "disabled"]), T = a.length ? b.map((R) => /* @__PURE__ */ g.createElement(ab, {
    prefixCls: S,
    key: R.value.toString(),
    disabled: "disabled" in R ? R.disabled : c.disabled,
    value: R.value,
    checked: p.includes(R.value),
    onChange: R.onChange,
    className: `${D}-item`,
    style: R.style,
    title: R.title,
    id: R.id,
    required: R.required
  }, R.label)) : n, $ = {
    toggleOption: w,
    value: p,
    disabled: c.disabled,
    name: c.name,
    // https://github.com/ant-design/ant-design/issues/16376
    registerValue: y,
    cancelValue: E
  }, P = ne(D, {
    [`${D}-rtl`]: v === "rtl"
  }, i, s, B, x, O);
  return A(/* @__PURE__ */ g.createElement("div", Object.assign({
    className: P,
    style: u
  }, j, {
    ref: t
  }), /* @__PURE__ */ g.createElement(rb.Provider, {
    value: $
  }, T)));
}), LR = jR, bu = ab;
bu.Group = LR;
bu.__ANT_CHECKBOX = !0;
process.env.NODE_ENV !== "production" && (bu.displayName = "Checkbox");
const kR = bu;
function zR(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function VR(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function Hg(e, t, r) {
  var n = t.cloneNode(!0), a = Object.create(e, {
    target: {
      value: n
    },
    currentTarget: {
      value: n
    }
  });
  return n.value = r, n.selectionStart = t.selectionStart, n.selectionEnd = t.selectionEnd, a;
}
function Ws(e, t, r, n) {
  if (r) {
    var a = t;
    if (t.type === "click") {
      a = Hg(t, e, ""), r(a);
      return;
    }
    if (e.type !== "file" && n !== void 0) {
      a = Hg(t, e, n), r(a);
      return;
    }
    r(a);
  }
}
function HR(e, t) {
  if (e) {
    e.focus(t);
    var r = t || {}, n = r.cursor;
    if (n) {
      var a = e.value.length;
      switch (n) {
        case "start":
          e.setSelectionRange(0, 0);
          break;
        case "end":
          e.setSelectionRange(a, a);
          break;
        default:
          e.setSelectionRange(0, a);
      }
    }
  }
}
var ob = function(t) {
  var r, n, a = t.inputElement, o = t.children, i = t.prefixCls, s = t.prefix, u = t.suffix, l = t.addonBefore, c = t.addonAfter, d = t.className, v = t.style, p = t.disabled, h = t.readOnly, f = t.focused, m = t.triggerFocus, b = t.allowClear, E = t.value, y = t.handleReset, w = t.hidden, S = t.classes, D = t.classNames, x = t.dataAttrs, A = t.styles, O = t.components, B = o ?? a, j = (O == null ? void 0 : O.affixWrapper) || "span", T = (O == null ? void 0 : O.groupWrapper) || "span", $ = (O == null ? void 0 : O.wrapper) || "span", P = (O == null ? void 0 : O.groupAddon) || "span", R = qe(null), M = function(q) {
    var pe;
    (pe = R.current) !== null && pe !== void 0 && pe.contains(q.target) && (m == null || m());
  }, F = VR(t), N = /* @__PURE__ */ jb(B, {
    value: E,
    className: ne(B.props.className, !F && (D == null ? void 0 : D.variant)) || null
  });
  if (F) {
    var V, k = null;
    if (b) {
      var W, U = !p && !h && E, Q = "".concat(i, "-clear-icon"), I = lt(b) === "object" && b !== null && b !== void 0 && b.clearIcon ? b.clearIcon : "✖";
      k = /* @__PURE__ */ Z.createElement("span", {
        onClick: y,
        onMouseDown: function(q) {
          return q.preventDefault();
        },
        className: ne(Q, (W = {}, K(W, "".concat(Q, "-hidden"), !U), K(W, "".concat(Q, "-has-suffix"), !!u), W)),
        role: "button",
        tabIndex: -1
      }, I);
    }
    var z = "".concat(i, "-affix-wrapper"), H = ne(z, (V = {}, K(V, "".concat(i, "-disabled"), p), K(V, "".concat(z, "-disabled"), p), K(V, "".concat(z, "-focused"), f), K(V, "".concat(z, "-readonly"), h), K(V, "".concat(z, "-input-with-clear-btn"), u && b && E), V), S == null ? void 0 : S.affixWrapper, D == null ? void 0 : D.affixWrapper, D == null ? void 0 : D.variant), G = (u || b) && /* @__PURE__ */ Z.createElement("span", {
      className: ne("".concat(i, "-suffix"), D == null ? void 0 : D.suffix),
      style: A == null ? void 0 : A.suffix
    }, k, u);
    N = /* @__PURE__ */ Z.createElement(j, _e({
      className: H,
      style: A == null ? void 0 : A.affixWrapper,
      onClick: M
    }, x == null ? void 0 : x.affixWrapper, {
      ref: R
    }), s && /* @__PURE__ */ Z.createElement("span", {
      className: ne("".concat(i, "-prefix"), D == null ? void 0 : D.prefix),
      style: A == null ? void 0 : A.prefix
    }, s), N, G);
  }
  if (zR(t)) {
    var re = "".concat(i, "-group"), te = "".concat(re, "-addon"), de = "".concat(re, "-wrapper"), se = ne("".concat(i, "-wrapper"), re, S == null ? void 0 : S.wrapper, D == null ? void 0 : D.wrapper), he = ne(de, K({}, "".concat(de, "-disabled"), p), S == null ? void 0 : S.group, D == null ? void 0 : D.groupWrapper);
    N = /* @__PURE__ */ Z.createElement(T, {
      className: he
    }, /* @__PURE__ */ Z.createElement($, {
      className: se
    }, l && /* @__PURE__ */ Z.createElement(P, {
      className: te
    }, l), N, c && /* @__PURE__ */ Z.createElement(P, {
      className: te
    }, c)));
  }
  return /* @__PURE__ */ Z.cloneElement(N, {
    className: ne((r = N.props) === null || r === void 0 ? void 0 : r.className, d) || null,
    style: Y(Y({}, (n = N.props) === null || n === void 0 ? void 0 : n.style), v),
    hidden: w
  });
}, WR = ["show"];
function ib(e, t) {
  return g.useMemo(function() {
    var r = {};
    t && (r.show = lt(t) === "object" && t.formatter ? t.formatter : !!t), r = Y(Y({}, r), e);
    var n = r, a = n.show, o = ct(n, WR);
    return Y(Y({}, o), {}, {
      show: !!a,
      showFormatter: typeof a == "function" ? a : void 0,
      strategy: o.strategy || function(i) {
        return i.length;
      }
    });
  }, [e, t]);
}
var KR = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"], qR = /* @__PURE__ */ hr(function(e, t) {
  var r = e.autoComplete, n = e.onChange, a = e.onFocus, o = e.onBlur, i = e.onPressEnter, s = e.onKeyDown, u = e.prefixCls, l = u === void 0 ? "rc-input" : u, c = e.disabled, d = e.htmlSize, v = e.className, p = e.maxLength, h = e.suffix, f = e.showCount, m = e.count, b = e.type, E = b === void 0 ? "text" : b, y = e.classes, w = e.classNames, S = e.styles, D = e.onCompositionStart, x = e.onCompositionEnd, A = ct(e, KR), O = Gt(!1), B = ie(O, 2), j = B[0], T = B[1], $ = qe(!1), P = qe(null), R = function(ue) {
    P.current && HR(P.current, ue);
  }, M = zr(e.defaultValue, {
    value: e.value
  }), F = ie(M, 2), N = F[0], V = F[1], k = N == null ? "" : String(N), W = Gt(null), U = ie(W, 2), Q = U[0], I = U[1], z = ib(m, f), H = z.max || p, G = z.strategy(k), re = !!H && G > H;
  Ba(t, function() {
    return {
      focus: R,
      blur: function() {
        var ue;
        (ue = P.current) === null || ue === void 0 || ue.blur();
      },
      setSelectionRange: function(ue, ge, be) {
        var ye;
        (ye = P.current) === null || ye === void 0 || ye.setSelectionRange(ue, ge, be);
      },
      select: function() {
        var ue;
        (ue = P.current) === null || ue === void 0 || ue.select();
      },
      input: P.current
    };
  }), Ft(function() {
    T(function(oe) {
      return oe && c ? !1 : oe;
    });
  }, [c]);
  var te = function(ue, ge, be) {
    var ye = ge;
    if (!$.current && z.exceedFormatter && z.max && z.strategy(ge) > z.max) {
      if (ye = z.exceedFormatter(ge, {
        max: z.max
      }), ge !== ye) {
        var Ne, $e;
        I([((Ne = P.current) === null || Ne === void 0 ? void 0 : Ne.selectionStart) || 0, (($e = P.current) === null || $e === void 0 ? void 0 : $e.selectionEnd) || 0]);
      }
    } else if (be.source === "compositionEnd")
      return;
    V(ye), P.current && Ws(P.current, ue, n, ye);
  };
  Ft(function() {
    if (Q) {
      var oe;
      (oe = P.current) === null || oe === void 0 || oe.setSelectionRange.apply(oe, Me(Q));
    }
  }, [Q]);
  var de = function(ue) {
    te(ue, ue.target.value, {
      source: "change"
    });
  }, se = function(ue) {
    $.current = !1, te(ue, ue.currentTarget.value, {
      source: "compositionEnd"
    }), x == null || x(ue);
  }, he = function(ue) {
    i && ue.key === "Enter" && i(ue), s == null || s(ue);
  }, ce = function(ue) {
    T(!0), a == null || a(ue);
  }, q = function(ue) {
    T(!1), o == null || o(ue);
  }, pe = function(ue) {
    V(""), R(), P.current && Ws(P.current, ue, n);
  }, De = re && "".concat(l, "-out-of-range"), Ce = function() {
    var ue = Tr(e, [
      "prefixCls",
      "onPressEnter",
      "addonBefore",
      "addonAfter",
      "prefix",
      "suffix",
      "allowClear",
      // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      "defaultValue",
      "showCount",
      "count",
      "classes",
      "htmlSize",
      "styles",
      "classNames"
    ]);
    return /* @__PURE__ */ Z.createElement("input", _e({
      autoComplete: r
    }, ue, {
      onChange: de,
      onFocus: ce,
      onBlur: q,
      onKeyDown: he,
      className: ne(l, K({}, "".concat(l, "-disabled"), c), w == null ? void 0 : w.input),
      style: S == null ? void 0 : S.input,
      ref: P,
      size: d,
      type: E,
      onCompositionStart: function(be) {
        $.current = !0, D == null || D(be);
      },
      onCompositionEnd: se
    }));
  }, Ee = function() {
    var ue = Number(H) > 0;
    if (h || z.show) {
      var ge = z.showFormatter ? z.showFormatter({
        value: k,
        count: G,
        maxLength: H
      }) : "".concat(G).concat(ue ? " / ".concat(H) : "");
      return /* @__PURE__ */ Z.createElement(Z.Fragment, null, z.show && /* @__PURE__ */ Z.createElement("span", {
        className: ne("".concat(l, "-show-count-suffix"), K({}, "".concat(l, "-show-count-has-suffix"), !!h), w == null ? void 0 : w.count),
        style: Y({}, S == null ? void 0 : S.count)
      }, ge), h);
    }
    return null;
  };
  return /* @__PURE__ */ Z.createElement(ob, _e({}, A, {
    prefixCls: l,
    className: ne(v, De),
    handleReset: pe,
    value: k,
    focused: j,
    triggerFocus: R,
    suffix: Ee(),
    disabled: c,
    classes: y,
    classNames: w,
    styles: S
  }), Ce());
});
const UR = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = St(xt), {
    prefixCls: n,
    className: a
  } = e, o = t("input-group", n), i = t("input"), [s, u] = Mf(i), l = ne(o, {
    [`${o}-lg`]: e.size === "large",
    [`${o}-sm`]: e.size === "small",
    [`${o}-compact`]: e.compact,
    [`${o}-rtl`]: r === "rtl"
  }, u, a), c = St(ea), d = Xt(() => Object.assign(Object.assign({}, c), {
    isFormItemInput: !1
  }), [c]);
  return process.env.NODE_ENV !== "production" && sr("Input.Group").deprecated(!1, "Input.Group", "Space.Compact"), s(/* @__PURE__ */ g.createElement("span", {
    className: l,
    style: e.style,
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave,
    onFocus: e.onFocus,
    onBlur: e.onBlur
  }, /* @__PURE__ */ g.createElement(ea.Provider, {
    value: d
  }, e.children)));
}, GR = UR;
function sb(e, t) {
  const r = qe([]), n = () => {
    r.current.push(setTimeout(() => {
      var a, o, i, s;
      !((a = e.current) === null || a === void 0) && a.input && ((o = e.current) === null || o === void 0 ? void 0 : o.input.getAttribute("type")) === "password" && (!((i = e.current) === null || i === void 0) && i.input.hasAttribute("value")) && ((s = e.current) === null || s === void 0 || s.input.removeAttribute("value"));
    }));
  };
  return Ft(() => (t && n(), () => r.current.forEach((a) => {
    a && clearTimeout(a);
  })), []), n;
}
function XR(e) {
  return !!(e.prefix || e.suffix || e.allowClear || e.showCount);
}
const YR = (e) => {
  let t;
  return typeof e == "object" && (e != null && e.clearIcon) ? t = e : e && (t = {
    clearIcon: /* @__PURE__ */ Z.createElement(Lp, null)
  }), t;
};
var ZR = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function QR(e, t) {
  if (!e)
    return;
  e.focus(t);
  const {
    cursor: r
  } = t || {};
  if (r) {
    const n = e.value.length;
    switch (r) {
      case "start":
        e.setSelectionRange(0, 0);
        break;
      case "end":
        e.setSelectionRange(n, n);
        break;
      default:
        e.setSelectionRange(0, n);
        break;
    }
  }
}
const JR = /* @__PURE__ */ hr((e, t) => {
  var r;
  const {
    prefixCls: n,
    bordered: a = !0,
    status: o,
    size: i,
    disabled: s,
    onBlur: u,
    onFocus: l,
    suffix: c,
    allowClear: d,
    addonAfter: v,
    addonBefore: p,
    className: h,
    style: f,
    styles: m,
    rootClassName: b,
    onChange: E,
    classNames: y,
    variant: w
  } = e, S = ZR(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames", "variant"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: q
    } = sr("Input");
    q(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: D,
    direction: x,
    input: A
  } = Z.useContext(xt), O = D("input", n), B = qe(null), j = xo(O), [T, $, P] = Mf(O, j), {
    compactSize: R,
    compactItemClassnames: M
  } = fu(O, x), F = Oi((q) => {
    var pe;
    return (pe = i ?? R) !== null && pe !== void 0 ? pe : q;
  }), N = Z.useContext(Si), V = s ?? N, {
    status: k,
    hasFeedback: W,
    feedbackIcon: U
  } = St(ea), Q = y0(k, o), I = XR(e) || !!W, z = qe(I);
  if (process.env.NODE_ENV !== "production") {
    const q = sr("Input");
    Ft(() => {
      var pe;
      I && !z.current && process.env.NODE_ENV !== "production" && q(document.activeElement === ((pe = B.current) === null || pe === void 0 ? void 0 : pe.input), "usage", "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"), z.current = I;
    }, [I]);
  }
  const H = sb(B, !0), G = (q) => {
    H(), u == null || u(q);
  }, re = (q) => {
    H(), l == null || l(q);
  }, te = (q) => {
    H(), E == null || E(q);
  }, de = (W || c) && /* @__PURE__ */ Z.createElement(Z.Fragment, null, c, W && U), se = YR(d), [he, ce] = C0(w, a);
  return T(/* @__PURE__ */ Z.createElement(qR, Object.assign({
    ref: nn(t, B),
    prefixCls: O,
    autoComplete: A == null ? void 0 : A.autoComplete
  }, S, {
    disabled: V,
    onBlur: G,
    onFocus: re,
    style: Object.assign(Object.assign({}, A == null ? void 0 : A.style), f),
    styles: Object.assign(Object.assign({}, A == null ? void 0 : A.styles), m),
    suffix: de,
    allowClear: se,
    className: ne(h, b, P, j, M, A == null ? void 0 : A.className),
    onChange: te,
    addonAfter: v && /* @__PURE__ */ Z.createElement(Is, null, /* @__PURE__ */ Z.createElement(mg, {
      override: !0,
      status: !0
    }, v)),
    addonBefore: p && /* @__PURE__ */ Z.createElement(Is, null, /* @__PURE__ */ Z.createElement(mg, {
      override: !0,
      status: !0
    }, p)),
    classNames: Object.assign(Object.assign(Object.assign({}, y), A == null ? void 0 : A.classNames), {
      input: ne({
        [`${O}-sm`]: F === "small",
        [`${O}-lg`]: F === "large",
        [`${O}-rtl`]: x === "rtl"
      }, y == null ? void 0 : y.input, (r = A == null ? void 0 : A.classNames) === null || r === void 0 ? void 0 : r.input, $),
      variant: ne({
        [`${O}-${he}`]: ce
      }, Dc(O, Q)),
      affixWrapper: ne({
        [`${O}-affix-wrapper-sm`]: F === "small",
        [`${O}-affix-wrapper-lg`]: F === "large",
        [`${O}-affix-wrapper-rtl`]: x === "rtl"
      }, $),
      wrapper: ne({
        [`${O}-group-rtl`]: x === "rtl"
      }, $),
      groupWrapper: ne({
        [`${O}-group-wrapper-sm`]: F === "small",
        [`${O}-group-wrapper-lg`]: F === "large",
        [`${O}-group-wrapper-rtl`]: x === "rtl",
        [`${O}-group-wrapper-${he}`]: ce
      }, Dc(`${O}-group-wrapper`, Q, W), $)
    })
  })));
}), _f = JR;
var eT = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { tag: "path", attrs: { d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, name: "eye-invisible", theme: "outlined" };
const tT = eT;
var rT = function(t, r) {
  return /* @__PURE__ */ g.createElement(Nr, _e({}, t, {
    ref: r,
    icon: tT
  }));
}, ub = /* @__PURE__ */ g.forwardRef(rT);
process.env.NODE_ENV !== "production" && (ub.displayName = "EyeInvisibleOutlined");
const nT = ub;
var aT = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, name: "eye", theme: "outlined" };
const oT = aT;
var iT = function(t, r) {
  return /* @__PURE__ */ g.createElement(Nr, _e({}, t, {
    ref: r,
    icon: oT
  }));
}, lb = /* @__PURE__ */ g.forwardRef(iT);
process.env.NODE_ENV !== "production" && (lb.displayName = "EyeOutlined");
const sT = lb;
var uT = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const lT = (e) => e ? /* @__PURE__ */ g.createElement(sT, null) : /* @__PURE__ */ g.createElement(nT, null), cT = {
  click: "onClick",
  hover: "onMouseOver"
}, cb = /* @__PURE__ */ g.forwardRef((e, t) => {
  const {
    visibilityToggle: r = !0
  } = e, n = typeof r == "object" && r.visible !== void 0, [a, o] = Gt(() => n ? r.visible : !1), i = qe(null);
  g.useEffect(() => {
    n && o(r.visible);
  }, [n, r]);
  const s = sb(i), u = () => {
    const {
      disabled: S
    } = e;
    S || (a && s(), o((D) => {
      var x;
      const A = !D;
      return typeof r == "object" && ((x = r.onVisibleChange) === null || x === void 0 || x.call(r, A)), A;
    }));
  }, l = (S) => {
    const {
      action: D = "click",
      iconRender: x = lT
    } = e, A = cT[D] || "", O = x(a), B = {
      [A]: u,
      className: `${S}-icon`,
      key: "passwordIcon",
      onMouseDown: (j) => {
        j.preventDefault();
      },
      onMouseUp: (j) => {
        j.preventDefault();
      }
    };
    return /* @__PURE__ */ g.cloneElement(/* @__PURE__ */ g.isValidElement(O) ? O : /* @__PURE__ */ g.createElement("span", null, O), B);
  }, {
    className: c,
    prefixCls: d,
    inputPrefixCls: v,
    size: p
  } = e, h = uT(e, ["className", "prefixCls", "inputPrefixCls", "size"]), {
    getPrefixCls: f
  } = g.useContext(xt), m = f("input", v), b = f("input-password", d), E = r && l(b), y = ne(b, c, {
    [`${b}-${p}`]: !!p
  }), w = Object.assign(Object.assign({}, Tr(h, ["suffix", "iconRender", "visibilityToggle"])), {
    type: a ? "text" : "password",
    className: y,
    prefixCls: m,
    suffix: E
  });
  return p && (w.size = p), /* @__PURE__ */ g.createElement(_f, Object.assign({
    ref: nn(t, i)
  }, w));
});
process.env.NODE_ENV !== "production" && (cb.displayName = "Input.Password");
const fT = cb;
var dT = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const fb = /* @__PURE__ */ g.forwardRef((e, t) => {
  const {
    prefixCls: r,
    inputPrefixCls: n,
    className: a,
    size: o,
    suffix: i,
    enterButton: s = !1,
    addonAfter: u,
    loading: l,
    disabled: c,
    onSearch: d,
    onChange: v,
    onCompositionStart: p,
    onCompositionEnd: h
  } = e, f = dT(e, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd"]), {
    getPrefixCls: m,
    direction: b
  } = g.useContext(xt), E = g.useRef(!1), y = m("input-search", r), w = m("input", n), {
    compactSize: S
  } = fu(y, b), D = Oi((k) => {
    var W;
    return (W = o ?? S) !== null && W !== void 0 ? W : k;
  }), x = g.useRef(null), A = (k) => {
    k && k.target && k.type === "click" && d && d(k.target.value, k, {
      source: "clear"
    }), v && v(k);
  }, O = (k) => {
    var W;
    document.activeElement === ((W = x.current) === null || W === void 0 ? void 0 : W.input) && k.preventDefault();
  }, B = (k) => {
    var W, U;
    d && d((U = (W = x.current) === null || W === void 0 ? void 0 : W.input) === null || U === void 0 ? void 0 : U.value, k, {
      source: "input"
    });
  }, j = (k) => {
    E.current || l || B(k);
  }, T = typeof s == "boolean" ? /* @__PURE__ */ g.createElement(hF, null) : null, $ = `${y}-button`;
  let P;
  const R = s || {}, M = R.type && R.type.__ANT_BUTTON === !0;
  M || R.type === "button" ? P = mn(R, Object.assign({
    onMouseDown: O,
    onClick: (k) => {
      var W, U;
      (U = (W = R == null ? void 0 : R.props) === null || W === void 0 ? void 0 : W.onClick) === null || U === void 0 || U.call(W, k), B(k);
    },
    key: "enterButton"
  }, M ? {
    className: $,
    size: D
  } : {})) : P = /* @__PURE__ */ g.createElement(tn, {
    className: $,
    type: s ? "primary" : void 0,
    size: D,
    disabled: c,
    key: "enterButton",
    onMouseDown: O,
    onClick: B,
    loading: l,
    icon: T
  }, s), u && (P = [P, mn(u, {
    key: "addonAfter"
  })]);
  const F = ne(y, {
    [`${y}-rtl`]: b === "rtl",
    [`${y}-${D}`]: !!D,
    [`${y}-with-button`]: !!s
  }, a), N = (k) => {
    E.current = !0, p == null || p(k);
  }, V = (k) => {
    E.current = !1, h == null || h(k);
  };
  return /* @__PURE__ */ g.createElement(_f, Object.assign({
    ref: nn(x, t),
    onPressEnter: j
  }, f, {
    size: D,
    onCompositionStart: N,
    onCompositionEnd: V,
    prefixCls: w,
    addonAfter: P,
    suffix: i,
    onChange: A,
    className: F,
    disabled: c
  }));
});
process.env.NODE_ENV !== "production" && (fb.displayName = "Search");
const vT = fb;
var gT = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`, mT = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], nl = {}, jr;
function hT(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && nl[r])
    return nl[r];
  var n = window.getComputedStyle(e), a = n.getPropertyValue("box-sizing") || n.getPropertyValue("-moz-box-sizing") || n.getPropertyValue("-webkit-box-sizing"), o = parseFloat(n.getPropertyValue("padding-bottom")) + parseFloat(n.getPropertyValue("padding-top")), i = parseFloat(n.getPropertyValue("border-bottom-width")) + parseFloat(n.getPropertyValue("border-top-width")), s = mT.map(function(l) {
    return "".concat(l, ":").concat(n.getPropertyValue(l));
  }).join(";"), u = {
    sizingStyle: s,
    paddingSize: o,
    borderSize: i,
    boxSizing: a
  };
  return t && r && (nl[r] = u), u;
}
function pT(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  jr || (jr = document.createElement("textarea"), jr.setAttribute("tab-index", "-1"), jr.setAttribute("aria-hidden", "true"), document.body.appendChild(jr)), e.getAttribute("wrap") ? jr.setAttribute("wrap", e.getAttribute("wrap")) : jr.removeAttribute("wrap");
  var a = hT(e, t), o = a.paddingSize, i = a.borderSize, s = a.boxSizing, u = a.sizingStyle;
  jr.setAttribute("style", "".concat(u, ";").concat(gT)), jr.value = e.value || e.placeholder || "";
  var l = void 0, c = void 0, d, v = jr.scrollHeight;
  if (s === "border-box" ? v += i : s === "content-box" && (v -= o), r !== null || n !== null) {
    jr.value = " ";
    var p = jr.scrollHeight - o;
    r !== null && (l = p * r, s === "border-box" && (l = l + o + i), v = Math.max(l, v)), n !== null && (c = p * n, s === "border-box" && (c = c + o + i), d = v > c ? "" : "hidden", v = Math.min(c, v));
  }
  var h = {
    height: v,
    overflowY: d,
    resize: "none"
  };
  return l && (h.minHeight = l), c && (h.maxHeight = c), h;
}
var bT = ["prefixCls", "onPressEnter", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"], al = 0, ol = 1, il = 2, yT = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var r = e, n = r.prefixCls;
  r.onPressEnter;
  var a = r.defaultValue, o = r.value, i = r.autoSize, s = r.onResize, u = r.className, l = r.style, c = r.disabled, d = r.onChange, v = r.onInternalAutoSize, p = ct(r, bT), h = zr(a, {
    value: o,
    postState: function(z) {
      return z ?? "";
    }
  }), f = ie(h, 2), m = f[0], b = f[1], E = function(z) {
    b(z.target.value), d == null || d(z);
  }, y = g.useRef();
  g.useImperativeHandle(t, function() {
    return {
      textArea: y.current
    };
  });
  var w = g.useMemo(function() {
    return i && lt(i) === "object" ? [i.minRows, i.maxRows] : [];
  }, [i]), S = ie(w, 2), D = S[0], x = S[1], A = !!i, O = function() {
    try {
      if (document.activeElement === y.current) {
        var z = y.current, H = z.selectionStart, G = z.selectionEnd, re = z.scrollTop;
        y.current.setSelectionRange(H, G), y.current.scrollTop = re;
      }
    } catch {
    }
  }, B = g.useState(il), j = ie(B, 2), T = j[0], $ = j[1], P = g.useState(), R = ie(P, 2), M = R[0], F = R[1], N = function() {
    $(al), process.env.NODE_ENV === "test" && (v == null || v());
  };
  Lt(function() {
    A && N();
  }, [o, D, x, A]), Lt(function() {
    if (T === al)
      $(ol);
    else if (T === ol) {
      var I = pT(y.current, !1, D, x);
      $(il), F(I);
    } else
      O();
  }, [T]);
  var V = g.useRef(), k = function() {
    Yt.cancel(V.current);
  }, W = function(z) {
    T === il && (s == null || s(z), i && (k(), V.current = Yt(function() {
      N();
    })));
  };
  g.useEffect(function() {
    return k;
  }, []);
  var U = A ? M : null, Q = Y(Y({}, l), U);
  return (T === al || T === ol) && (Q.overflowY = "hidden", Q.overflowX = "hidden"), /* @__PURE__ */ g.createElement(na, {
    onResize: W,
    disabled: !(i || s)
  }, /* @__PURE__ */ g.createElement("textarea", _e({}, p, {
    ref: y,
    style: Q,
    className: ne(n, u, K({}, "".concat(n, "-disabled"), c)),
    disabled: c,
    value: m,
    onChange: E
  })));
}), CT = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize"], ET = /* @__PURE__ */ Z.forwardRef(function(e, t) {
  var r, n, a = e.defaultValue, o = e.value, i = e.onFocus, s = e.onBlur, u = e.onChange, l = e.allowClear, c = e.maxLength, d = e.onCompositionStart, v = e.onCompositionEnd, p = e.suffix, h = e.prefixCls, f = h === void 0 ? "rc-textarea" : h, m = e.showCount, b = e.count, E = e.className, y = e.style, w = e.disabled, S = e.hidden, D = e.classNames, x = e.styles, A = e.onResize, O = ct(e, CT), B = zr(a, {
    value: o,
    defaultValue: a
  }), j = ie(B, 2), T = j[0], $ = j[1], P = T == null ? "" : String(T), R = Z.useState(!1), M = ie(R, 2), F = M[0], N = M[1], V = Z.useRef(!1), k = Z.useState(null), W = ie(k, 2), U = W[0], Q = W[1], I = qe(null), z = function() {
    var we;
    return (we = I.current) === null || we === void 0 ? void 0 : we.textArea;
  }, H = function() {
    z().focus();
  };
  Ba(t, function() {
    return {
      resizableTextArea: I.current,
      focus: H,
      blur: function() {
        z().blur();
      }
    };
  }), Ft(function() {
    N(function(Le) {
      return !w && Le;
    });
  }, [w]);
  var G = Z.useState(null), re = ie(G, 2), te = re[0], de = re[1];
  Z.useEffect(function() {
    if (te) {
      var Le;
      (Le = z()).setSelectionRange.apply(Le, Me(te));
    }
  }, [te]);
  var se = ib(b, m), he = (r = se.max) !== null && r !== void 0 ? r : c, ce = Number(he) > 0, q = se.strategy(P), pe = !!he && q > he, De = function(we, ze) {
    var Ve = ze;
    !V.current && se.exceedFormatter && se.max && se.strategy(ze) > se.max && (Ve = se.exceedFormatter(ze, {
      max: se.max
    }), ze !== Ve && de([z().selectionStart || 0, z().selectionEnd || 0])), $(Ve), Ws(we.currentTarget, we, u, Ve);
  }, Ce = function(we) {
    V.current = !0, d == null || d(we);
  }, Ee = function(we) {
    V.current = !1, De(we, we.currentTarget.value), v == null || v(we);
  }, oe = function(we) {
    De(we, we.target.value);
  }, ue = function(we) {
    var ze = O.onPressEnter, Ve = O.onKeyDown;
    we.key === "Enter" && ze && ze(we), Ve == null || Ve(we);
  }, ge = function(we) {
    N(!0), i == null || i(we);
  }, be = function(we) {
    N(!1), s == null || s(we);
  }, ye = function(we) {
    $(""), H(), Ws(z(), we, u);
  }, Ne = p, $e;
  se.show && (se.showFormatter ? $e = se.showFormatter({
    value: P,
    count: q,
    maxLength: he
  }) : $e = "".concat(q).concat(ce ? " / ".concat(he) : ""), Ne = /* @__PURE__ */ Z.createElement(Z.Fragment, null, Ne, /* @__PURE__ */ Z.createElement("span", {
    className: ne("".concat(f, "-data-count"), D == null ? void 0 : D.count),
    style: x == null ? void 0 : x.count
  }, $e)));
  var je = function(we) {
    var ze;
    A == null || A(we), (ze = z()) !== null && ze !== void 0 && ze.style.height && Q(!0);
  }, yt = !O.autoSize && !m && !l;
  return /* @__PURE__ */ Z.createElement(ob, {
    value: P,
    allowClear: l,
    handleReset: ye,
    suffix: Ne,
    prefixCls: f,
    classNames: Y(Y({}, D), {}, {
      affixWrapper: ne(D == null ? void 0 : D.affixWrapper, (n = {}, K(n, "".concat(f, "-show-count"), m), K(n, "".concat(f, "-textarea-allow-clear"), l), n))
    }),
    disabled: w,
    focused: F,
    className: ne(E, pe && "".concat(f, "-out-of-range")),
    style: Y(Y({}, y), U && !yt ? {
      height: "auto"
    } : {}),
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof $e == "string" ? $e : void 0
      }
    },
    hidden: S
  }, /* @__PURE__ */ Z.createElement(yT, _e({}, O, {
    maxLength: c,
    onKeyDown: ue,
    onChange: oe,
    onFocus: ge,
    onBlur: be,
    onCompositionStart: Ce,
    onCompositionEnd: Ee,
    className: ne(D == null ? void 0 : D.textarea),
    style: Y(Y({}, x == null ? void 0 : x.textarea), {}, {
      resize: y == null ? void 0 : y.resize
    }),
    disabled: w,
    prefixCls: f,
    onResize: je,
    ref: I
  })));
}), wT = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const DT = /* @__PURE__ */ hr((e, t) => {
  var r;
  const {
    prefixCls: n,
    bordered: a = !0,
    size: o,
    disabled: i,
    status: s,
    allowClear: u,
    classNames: l,
    rootClassName: c,
    className: d,
    variant: v
  } = e, p = wT(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className", "variant"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: M
    } = sr("TextArea");
    M(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: h,
    direction: f
  } = g.useContext(xt), m = Oi(o), b = g.useContext(Si), E = i ?? b, {
    status: y,
    hasFeedback: w,
    feedbackIcon: S
  } = g.useContext(ea), D = y0(y, s), x = g.useRef(null);
  g.useImperativeHandle(t, () => {
    var M;
    return {
      resizableTextArea: (M = x.current) === null || M === void 0 ? void 0 : M.resizableTextArea,
      focus: (F) => {
        var N, V;
        QR((V = (N = x.current) === null || N === void 0 ? void 0 : N.resizableTextArea) === null || V === void 0 ? void 0 : V.textArea, F);
      },
      blur: () => {
        var F;
        return (F = x.current) === null || F === void 0 ? void 0 : F.blur();
      }
    };
  });
  const A = h("input", n);
  let O;
  typeof u == "object" && (u != null && u.clearIcon) ? O = u : u && (O = {
    clearIcon: /* @__PURE__ */ g.createElement(Lp, null)
  });
  const B = xo(A), [j, T, $] = Mf(A, B), [P, R] = C0(v, a);
  return j(/* @__PURE__ */ g.createElement(ET, Object.assign({}, p, {
    disabled: E,
    allowClear: O,
    className: ne($, B, d, c),
    classNames: Object.assign(Object.assign({}, l), {
      textarea: ne({
        [`${A}-sm`]: m === "small",
        [`${A}-lg`]: m === "large"
      }, T, l == null ? void 0 : l.textarea),
      variant: ne({
        [`${A}-${P}`]: R
      }, Dc(A, D)),
      affixWrapper: ne(`${A}-textarea-affix-wrapper`, {
        [`${A}-affix-wrapper-rtl`]: f === "rtl",
        [`${A}-affix-wrapper-sm`]: m === "small",
        [`${A}-affix-wrapper-lg`]: m === "large",
        [`${A}-textarea-show-count`]: e.showCount || ((r = e.count) === null || r === void 0 ? void 0 : r.show)
      }, T)
    }),
    prefixCls: A,
    suffix: w && /* @__PURE__ */ g.createElement("span", {
      className: `${A}-textarea-suffix`
    }, S),
    ref: x
  })));
}), db = DT, Bo = _f;
process.env.NODE_ENV !== "production" && (Bo.displayName = "Input");
Bo.Group = GR;
Bo.Search = vT;
Bo.TextArea = db;
Bo.Password = fT;
const ST = Bo;
function Wg(e) {
  return ["small", "middle", "large"].includes(e);
}
function Kg(e) {
  return e ? typeof e == "number" && !Number.isNaN(e) : !1;
}
const vb = /* @__PURE__ */ Z.createContext({
  latestIndex: 0
}), xT = vb.Provider, OT = (e) => {
  let {
    className: t,
    index: r,
    children: n,
    split: a,
    style: o
  } = e;
  const {
    latestIndex: i
  } = g.useContext(vb);
  return n == null ? null : /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("div", {
    className: t,
    style: o
  }, n), r < i && a && /* @__PURE__ */ g.createElement("span", {
    className: `${t}-split`
  }, a));
}, AT = OT;
var BT = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const gb = /* @__PURE__ */ g.forwardRef((e, t) => {
  var r, n;
  const {
    getPrefixCls: a,
    space: o,
    direction: i
  } = g.useContext(xt), {
    size: s = (o == null ? void 0 : o.size) || "small",
    align: u,
    className: l,
    rootClassName: c,
    children: d,
    direction: v = "horizontal",
    prefixCls: p,
    split: h,
    style: f,
    wrap: m = !1,
    classNames: b,
    styles: E
  } = e, y = BT(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]), [w, S] = Array.isArray(s) ? s : [s, s], D = Wg(S), x = Wg(w), A = Kg(S), O = Kg(w), B = gn(d, {
    keepEmpty: !0
  }), j = u === void 0 && v === "horizontal" ? "center" : u, T = a("space", p), [$, P, R] = Kp(T), M = ne(T, o == null ? void 0 : o.className, P, `${T}-${v}`, {
    [`${T}-rtl`]: i === "rtl",
    [`${T}-align-${j}`]: j,
    [`${T}-gap-row-${S}`]: D,
    [`${T}-gap-col-${w}`]: x
  }, l, c, R), F = ne(`${T}-item`, (r = b == null ? void 0 : b.item) !== null && r !== void 0 ? r : (n = o == null ? void 0 : o.classNames) === null || n === void 0 ? void 0 : n.item);
  let N = 0;
  const V = B.map((U, Q) => {
    var I, z;
    U != null && (N = Q);
    const H = U && U.key || `${F}-${Q}`;
    return /* @__PURE__ */ g.createElement(AT, {
      className: F,
      key: H,
      index: Q,
      split: h,
      style: (I = E == null ? void 0 : E.item) !== null && I !== void 0 ? I : (z = o == null ? void 0 : o.styles) === null || z === void 0 ? void 0 : z.item
    }, U);
  }), k = g.useMemo(() => ({
    latestIndex: N
  }), [N]);
  if (B.length === 0)
    return null;
  const W = {};
  return m && (W.flexWrap = "wrap"), !x && O && (W.columnGap = w), !D && A && (W.rowGap = S), $(/* @__PURE__ */ g.createElement("div", Object.assign({
    ref: t,
    className: M,
    style: Object.assign(Object.assign(Object.assign({}, W), o == null ? void 0 : o.style), f)
  }, y), /* @__PURE__ */ g.createElement(xT, {
    value: k
  }, V)));
});
process.env.NODE_ENV !== "production" && (gb.displayName = "Space");
const mb = gb;
mb.Compact = SB;
const hb = mb;
var $T = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const pb = (e) => {
  const {
    getPopupContainer: t,
    getPrefixCls: r,
    direction: n
  } = g.useContext(xt), {
    prefixCls: a,
    type: o = "default",
    danger: i,
    disabled: s,
    loading: u,
    onClick: l,
    htmlType: c,
    children: d,
    className: v,
    menu: p,
    arrow: h,
    autoFocus: f,
    overlay: m,
    trigger: b,
    align: E,
    open: y,
    onOpenChange: w,
    placement: S,
    getPopupContainer: D,
    href: x,
    icon: A = /* @__PURE__ */ g.createElement(K0, null),
    title: O,
    buttonsRender: B = (re) => re,
    mouseEnterDelay: j,
    mouseLeaveDelay: T,
    overlayClassName: $,
    overlayStyle: P,
    destroyPopupOnHide: R,
    dropdownRender: M
  } = e, F = $T(e, ["prefixCls", "type", "danger", "disabled", "loading", "onClick", "htmlType", "children", "className", "menu", "arrow", "autoFocus", "overlay", "trigger", "align", "open", "onOpenChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide", "dropdownRender"]), N = r("dropdown", a), V = `${N}-button`, k = {
    menu: p,
    arrow: h,
    autoFocus: f,
    align: E,
    disabled: s,
    trigger: s ? [] : b,
    onOpenChange: w,
    getPopupContainer: D || t,
    mouseEnterDelay: j,
    mouseLeaveDelay: T,
    overlayClassName: $,
    overlayStyle: P,
    destroyPopupOnHide: R,
    dropdownRender: M
  }, {
    compactSize: W,
    compactItemClassnames: U
  } = fu(N, n), Q = ne(V, U, v);
  "overlay" in e && (k.overlay = m), "open" in e && (k.open = y), "placement" in e ? k.placement = S : k.placement = n === "rtl" ? "bottomLeft" : "bottomRight";
  const I = /* @__PURE__ */ g.createElement(tn, {
    type: o,
    danger: i,
    disabled: s,
    loading: u,
    onClick: l,
    htmlType: c,
    href: x,
    title: O
  }, d), z = /* @__PURE__ */ g.createElement(tn, {
    type: o,
    danger: i,
    icon: A
  }), [H, G] = B([I, z]);
  return /* @__PURE__ */ g.createElement(hb.Compact, Object.assign({
    className: Q,
    size: W,
    block: !0
  }, F), H, /* @__PURE__ */ g.createElement(X0, Object.assign({}, k), G));
};
pb.__ANT_BUTTON = !0;
const FT = pb, bb = X0;
bb.Button = FT;
const yb = bb, PT = (e) => {
  const t = e != null && e.algorithm ? vi(e.algorithm) : vi(Di), r = Object.assign(Object.assign({}, yo), e == null ? void 0 : e.token);
  return Th(r, {
    override: e == null ? void 0 : e.token
  }, t, ff);
}, RT = PT;
function TT(e) {
  const {
    sizeUnit: t,
    sizeStep: r
  } = e, n = r - 2;
  return {
    sizeXXL: t * (n + 10),
    sizeXL: t * (n + 6),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 2),
    sizeMS: t * (n + 1),
    size: t * n,
    sizeSM: t * n,
    sizeXS: t * (n - 1),
    sizeXXS: t * (n - 1)
  };
}
const NT = (e, t) => {
  const r = t ?? Di(e), n = r.fontSizeSM, a = r.controlHeight - 4;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, r), TT(t ?? e)), ip(n)), {
    // controlHeight
    controlHeight: a
  }), ap(Object.assign(Object.assign({}, r), {
    controlHeight: a
  })));
}, IT = NT, xn = (e, t) => new or(e).setAlpha(t).toRgbString(), Ya = (e, t) => new or(e).lighten(t).toHexString(), MT = (e) => {
  const t = Tn(e, {
    theme: "dark"
  });
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[6],
    6: t[5],
    7: t[4],
    8: t[6],
    9: t[5],
    10: t[4]
    // 8: colors[9],
    // 9: colors[8],
    // 10: colors[7],
  };
}, _T = (e, t) => {
  const r = e || "#000", n = t || "#fff";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: xn(n, 0.85),
    colorTextSecondary: xn(n, 0.65),
    colorTextTertiary: xn(n, 0.45),
    colorTextQuaternary: xn(n, 0.25),
    colorFill: xn(n, 0.18),
    colorFillSecondary: xn(n, 0.12),
    colorFillTertiary: xn(n, 0.08),
    colorFillQuaternary: xn(n, 0.04),
    colorBgElevated: Ya(r, 12),
    colorBgContainer: Ya(r, 8),
    colorBgLayout: Ya(r, 0),
    colorBgSpotlight: Ya(r, 26),
    colorBgBlur: xn(n, 0.04),
    colorBorder: Ya(r, 26),
    colorBorderSecondary: Ya(r, 19)
  };
}, jT = (e, t) => {
  const r = Object.keys(cf).map((a) => {
    const o = Tn(e[a], {
      theme: "dark"
    });
    return new Array(10).fill(1).reduce((i, s, u) => (i[`${a}-${u + 1}`] = o[u], i[`${a}${u + 1}`] = o[u], i), {});
  }).reduce((a, o) => (a = Object.assign(Object.assign({}, a), o), a), {}), n = t ?? Di(e);
  return Object.assign(Object.assign(Object.assign({}, n), r), op(e, {
    generateColorPalettes: MT,
    generateNeutralColorPalettes: _T
  }));
}, LT = jT;
function kT() {
  const [e, t, r] = Hr();
  return {
    theme: e,
    token: t,
    hashId: r
  };
}
const zT = {
  /** @private Test Usage. Do not use in production. */
  defaultConfig: Ps,
  /** Default seedToken */
  defaultSeed: Ps.token,
  useToken: kT,
  defaultAlgorithm: Di,
  darkAlgorithm: LT,
  compactAlgorithm: IT,
  getDesignToken: RT
};
var VT = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const HT = {
  border: 0,
  background: "transparent",
  padding: 0,
  lineHeight: "inherit",
  display: "inline-block"
}, WT = /* @__PURE__ */ g.forwardRef((e, t) => {
  const r = (l) => {
    const {
      keyCode: c
    } = l;
    c === Ae.ENTER && l.preventDefault();
  }, n = (l) => {
    const {
      keyCode: c
    } = l, {
      onClick: d
    } = e;
    c === Ae.ENTER && d && d();
  }, {
    style: a,
    noStyle: o,
    disabled: i
  } = e, s = VT(e, ["style", "noStyle", "disabled"]);
  let u = {};
  return o || (u = Object.assign({}, HT)), i && (u.pointerEvents = "none"), u = Object.assign(Object.assign({}, u), a), /* @__PURE__ */ g.createElement("div", Object.assign({
    role: "button",
    tabIndex: 0,
    ref: t
  }, s, {
    onKeyDown: r,
    onKeyUp: n,
    style: u
  }));
}), qg = WT;
var KT = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, name: "copy", theme: "outlined" };
const qT = KT;
var UT = function(t, r) {
  return /* @__PURE__ */ g.createElement(Nr, _e({}, t, {
    ref: r,
    icon: qT
  }));
}, Cb = /* @__PURE__ */ g.forwardRef(UT);
process.env.NODE_ENV !== "production" && (Cb.displayName = "CopyOutlined");
const GT = Cb;
var XT = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, name: "edit", theme: "outlined" };
const YT = XT;
var ZT = function(t, r) {
  return /* @__PURE__ */ g.createElement(Nr, _e({}, t, {
    ref: r,
    icon: YT
  }));
}, Eb = /* @__PURE__ */ g.forwardRef(ZT);
process.env.NODE_ENV !== "production" && (Eb.displayName = "EditOutlined");
const QT = Eb;
var JT = function() {
  var e = document.getSelection();
  if (!e.rangeCount)
    return function() {
    };
  for (var t = document.activeElement, r = [], n = 0; n < e.rangeCount; n++)
    r.push(e.getRangeAt(n));
  switch (t.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      t.blur();
      break;
    default:
      t = null;
      break;
  }
  return e.removeAllRanges(), function() {
    e.type === "Caret" && e.removeAllRanges(), e.rangeCount || r.forEach(function(a) {
      e.addRange(a);
    }), t && t.focus();
  };
}, eN = JT, Ug = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, tN = "Copy to clipboard: #{key}, Enter";
function rN(e) {
  var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return e.replace(/#{\s*key\s*}/g, t);
}
function nN(e, t) {
  var r, n, a, o, i, s, u = !1;
  t || (t = {}), r = t.debug || !1;
  try {
    a = eN(), o = document.createRange(), i = document.getSelection(), s = document.createElement("span"), s.textContent = e, s.ariaHidden = "true", s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", function(c) {
      if (c.stopPropagation(), t.format)
        if (c.preventDefault(), typeof c.clipboardData > "u") {
          r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var d = Ug[t.format] || Ug.default;
          window.clipboardData.setData(d, e);
        } else
          c.clipboardData.clearData(), c.clipboardData.setData(t.format, e);
      t.onCopy && (c.preventDefault(), t.onCopy(c.clipboardData));
    }), document.body.appendChild(s), o.selectNodeContents(s), i.addRange(o);
    var l = document.execCommand("copy");
    if (!l)
      throw new Error("copy command was unsuccessful");
    u = !0;
  } catch (c) {
    r && console.error("unable to copy using execCommand: ", c), r && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0;
    } catch (d) {
      r && console.error("unable to copy using clipboardData: ", d), r && console.error("falling back to prompt"), n = rN("message" in t ? t.message : tN), window.prompt(n, e);
    }
  } finally {
    i && (typeof i.removeRange == "function" ? i.removeRange(o) : i.removeAllRanges()), s && document.body.removeChild(s), a();
  }
  return u;
}
var aN = nN;
const oN = /* @__PURE__ */ wo(aN);
var iN = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z" } }] }, name: "enter", theme: "outlined" };
const sN = iN;
var uN = function(t, r) {
  return /* @__PURE__ */ g.createElement(Nr, _e({}, t, {
    ref: r,
    icon: sN
  }));
}, wb = /* @__PURE__ */ g.forwardRef(uN);
process.env.NODE_ENV !== "production" && (wb.displayName = "EnterOutlined");
const lN = wb, cN = (e, t, r, n) => {
  const {
    titleMarginBottom: a,
    fontWeightStrong: o
  } = n;
  return {
    marginBottom: a,
    color: r,
    fontWeight: o,
    fontSize: e,
    lineHeight: t
  };
}, fN = (e) => {
  const t = [1, 2, 3, 4, 5], r = {};
  return t.forEach((n) => {
    r[`
      h${n}&,
      div&-h${n},
      div&-h${n} > textarea,
      h${n}
    `] = cN(e[`fontSizeHeading${n}`], e[`lineHeightHeading${n}`], e.colorTextHeading, e);
  }), r;
}, dN = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    "a&, a": Object.assign(Object.assign({}, vp(e)), {
      textDecoration: e.linkDecoration,
      "&:active, &:hover": {
        textDecoration: e.linkHoverDecoration
      },
      [`&[disabled], &${t}-disabled`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed",
        "&:active, &:hover": {
          color: e.colorTextDisabled
        },
        "&:active": {
          pointerEvents: "none"
        }
      }
    })
  };
}, vN = (e) => ({
  code: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.2em 0.1em",
    fontSize: "85%",
    fontFamily: e.fontFamilyCode,
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3
  },
  kbd: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.15em 0.1em",
    fontSize: "90%",
    fontFamily: e.fontFamilyCode,
    background: "rgba(150, 150, 150, 0.06)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderBottomWidth: 2,
    borderRadius: 3
  },
  mark: {
    padding: 0,
    // FIXME hardcode in v4
    backgroundColor: hO[2]
  },
  "u, ins": {
    textDecoration: "underline",
    textDecorationSkipInk: "auto"
  },
  "s, del": {
    textDecoration: "line-through"
  },
  strong: {
    fontWeight: 600
  },
  // list
  "ul, ol": {
    marginInline: 0,
    marginBlock: "0 1em",
    padding: 0,
    li: {
      marginInline: "20px 0",
      marginBlock: 0,
      paddingInline: "4px 0",
      paddingBlock: 0
    }
  },
  ul: {
    listStyleType: "circle",
    ul: {
      listStyleType: "disc"
    }
  },
  ol: {
    listStyleType: "decimal"
  },
  // pre & block
  "pre, blockquote": {
    margin: "1em 0"
  },
  pre: {
    padding: "0.4em 0.6em",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3,
    fontFamily: e.fontFamilyCode,
    // Compatible for marked
    code: {
      display: "inline",
      margin: 0,
      padding: 0,
      fontSize: "inherit",
      fontFamily: "inherit",
      background: "transparent",
      border: 0
    }
  },
  blockquote: {
    paddingInline: "0.6em 0",
    paddingBlock: 0,
    borderInlineStart: "4px solid rgba(100, 100, 100, 0.2)",
    opacity: 0.85
  }
}), gN = (e) => {
  const {
    componentCls: t,
    paddingSM: r
  } = e, n = r;
  return {
    "&-edit-content": {
      position: "relative",
      "div&": {
        insetInlineStart: e.calc(e.paddingSM).mul(-1).equal(),
        marginTop: e.calc(n).mul(-1).equal(),
        marginBottom: `calc(1em - ${Se(n)})`
      },
      [`${t}-edit-content-confirm`]: {
        position: "absolute",
        insetInlineEnd: e.calc(e.marginXS).add(2).equal(),
        insetBlockEnd: e.marginXS,
        color: e.colorTextDescription,
        // default style
        fontWeight: "normal",
        fontSize: e.fontSize,
        fontStyle: "normal",
        pointerEvents: "none"
      },
      textarea: {
        margin: "0!important",
        // Fix Editable Textarea flash in Firefox
        MozTransition: "none",
        height: "1em"
      }
    }
  };
}, mN = (e) => ({
  [`${e.componentCls}-copy-success`]: {
    "\n    &,\n    &:hover,\n    &:focus": {
      color: e.colorSuccess
    }
  },
  [`${e.componentCls}-copy-icon-only`]: {
    marginInlineStart: 0
  }
}), hN = () => ({
  "\n  a&-ellipsis,\n  span&-ellipsis\n  ": {
    display: "inline-block",
    maxWidth: "100%"
  },
  "&-single-line": {
    whiteSpace: "nowrap"
  },
  "&-ellipsis-single-line": {
    overflow: "hidden",
    textOverflow: "ellipsis",
    // https://blog.csdn.net/iefreer/article/details/50421025
    "a&, span&": {
      verticalAlign: "bottom"
    },
    "> code": {
      paddingBlock: 0,
      maxWidth: "calc(100% - 1.2em)",
      display: "inline-block",
      overflow: "hidden",
      textOverflow: "ellipsis",
      verticalAlign: "bottom",
      // https://github.com/ant-design/ant-design/issues/45953
      boxSizing: "content-box"
    }
  },
  "&-ellipsis-multiple-line": {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical"
  }
}), pN = (e) => {
  const {
    componentCls: t,
    titleMarginTop: r
  } = e;
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
      color: e.colorText,
      wordBreak: "break-word",
      lineHeight: e.lineHeight,
      [`&${t}-secondary`]: {
        color: e.colorTextDescription
      },
      [`&${t}-success`]: {
        color: e.colorSuccess
      },
      [`&${t}-warning`]: {
        color: e.colorWarning
      },
      [`&${t}-danger`]: {
        color: e.colorError,
        "a&:active, a&:focus": {
          color: e.colorErrorActive
        },
        "a&:hover": {
          color: e.colorErrorHover
        }
      },
      [`&${t}-disabled`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed",
        userSelect: "none"
      },
      "\n        div&,\n        p\n      ": {
        marginBottom: "1em"
      }
    }, fN(e)), {
      [`
      & + h1${t},
      & + h2${t},
      & + h3${t},
      & + h4${t},
      & + h5${t}
      `]: {
        marginTop: r
      },
      "\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5": {
        "\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ": {
          marginTop: r
        }
      }
    }), vN(e)), dN(e)), {
      // Operation
      [`
        ${t}-expand,
        ${t}-edit,
        ${t}-copy
      `]: Object.assign(Object.assign({}, vp(e)), {
        marginInlineStart: e.marginXXS
      })
    }), gN(e)), mN(e)), hN()), {
      "&-rtl": {
        direction: "rtl"
      }
    })
  };
}, bN = () => ({
  titleMarginTop: "1.2em",
  titleMarginBottom: "0.5em"
}), Db = aa("Typography", (e) => [pN(e)], bN), yN = (e) => {
  const {
    prefixCls: t,
    "aria-label": r,
    className: n,
    style: a,
    direction: o,
    maxLength: i,
    autoSize: s = !0,
    value: u,
    onSave: l,
    onCancel: c,
    onEnd: d,
    component: v,
    enterIcon: p = /* @__PURE__ */ g.createElement(lN, null)
  } = e, h = g.useRef(null), f = g.useRef(!1), m = g.useRef(), [b, E] = g.useState(u);
  g.useEffect(() => {
    E(u);
  }, [u]), g.useEffect(() => {
    if (h.current && h.current.resizableTextArea) {
      const {
        textArea: R
      } = h.current.resizableTextArea;
      R.focus();
      const {
        length: M
      } = R.value;
      R.setSelectionRange(M, M);
    }
  }, []);
  const y = (R) => {
    let {
      target: M
    } = R;
    E(M.value.replace(/[\n\r]/g, ""));
  }, w = () => {
    f.current = !0;
  }, S = () => {
    f.current = !1;
  }, D = (R) => {
    let {
      keyCode: M
    } = R;
    f.current || (m.current = M);
  }, x = () => {
    l(b.trim());
  }, A = (R) => {
    let {
      keyCode: M,
      ctrlKey: F,
      altKey: N,
      metaKey: V,
      shiftKey: k
    } = R;
    m.current === M && !f.current && !F && !N && !V && !k && (M === Ae.ENTER ? (x(), d == null || d()) : M === Ae.ESC && c());
  }, O = () => {
    x();
  }, B = v ? `${t}-${v}` : "", [j, T, $] = Db(t), P = ne(t, `${t}-edit-content`, {
    [`${t}-rtl`]: o === "rtl"
  }, n, B, T, $);
  return j(/* @__PURE__ */ g.createElement("div", {
    className: P,
    style: a
  }, /* @__PURE__ */ g.createElement(db, {
    ref: h,
    maxLength: i,
    value: b,
    onChange: y,
    onKeyDown: D,
    onKeyUp: A,
    onCompositionStart: w,
    onCompositionEnd: S,
    onBlur: O,
    "aria-label": r,
    rows: 1,
    autoSize: s
  }), p !== null ? mn(p, {
    className: `${t}-edit-content-confirm`
  }) : null));
}, CN = yN;
function sl(e, t) {
  return g.useMemo(() => {
    const r = !!e;
    return [r, Object.assign(Object.assign({}, t), r && typeof e == "object" ? e : null)];
  }, [e]);
}
const EN = (e, t) => {
  const r = g.useRef(!1);
  g.useEffect(() => {
    r.current ? e() : r.current = !0;
  }, t);
};
var wN = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Sb = /* @__PURE__ */ g.forwardRef((e, t) => {
  const {
    prefixCls: r,
    component: n = "article",
    className: a,
    rootClassName: o,
    setContentRef: i,
    children: s,
    direction: u,
    style: l
  } = e, c = wN(e, ["prefixCls", "component", "className", "rootClassName", "setContentRef", "children", "direction", "style"]), {
    getPrefixCls: d,
    direction: v,
    typography: p
  } = g.useContext(xt), h = u ?? v;
  let f = t;
  i && (f = nn(t, i)), process.env.NODE_ENV !== "production" && sr("Typography").deprecated(!i, "setContentRef", "ref");
  const m = d("typography", r), [b, E, y] = Db(m), w = ne(m, p == null ? void 0 : p.className, {
    [`${m}-rtl`]: h === "rtl"
  }, a, o, E, y), S = Object.assign(Object.assign({}, p == null ? void 0 : p.style), l);
  return b(
    // @ts-expect-error: Expression produces a union type that is too complex to represent.
    /* @__PURE__ */ g.createElement(n, Object.assign({
      className: w,
      style: S,
      ref: f
    }, c), s)
  );
});
process.env.NODE_ENV !== "production" && (Sb.displayName = "Typography");
const xb = Sb;
function Ob(e) {
  const t = typeof e;
  return t === "string" || t === "number";
}
function DN(e) {
  let t = 0;
  return e.forEach((r) => {
    Ob(r) ? t += String(r).length : t += 1;
  }), t;
}
function ul(e, t) {
  let r = 0;
  const n = [];
  for (let a = 0; a < e.length; a += 1) {
    if (r === t)
      return n;
    const o = e[a], s = Ob(o) ? String(o).length : 1, u = r + s;
    if (u > t) {
      const l = t - r;
      return n.push(String(o).slice(0, l)), n;
    }
    n.push(o), r = u;
  }
  return e;
}
const SN = 0, rs = 1, Gg = 2, ll = 3, cl = 4, Ab = (e) => {
  let {
    enabledMeasure: t,
    children: r,
    text: n,
    width: a,
    fontSize: o,
    rows: i,
    onEllipsis: s
  } = e;
  const [[u, l, c], d] = g.useState([0, 0, 0]), [v, p] = g.useState(0), [h, f] = g.useState(SN), [m, b] = g.useState(0), E = g.useRef(null), y = g.useRef(null), w = g.useMemo(() => gn(n), [n]), S = g.useMemo(() => DN(w), [w]), D = g.useMemo(() => !t || h !== ll ? v && h !== cl && t ? r(ul(w, v), v < S) : r(w, !1) : r(ul(w, l), l < S), [t, h, r, w, l, S]);
  Lt(() => {
    t && a && o && S && (f(rs), d([0, Math.ceil(S / 2), S]));
  }, [t, a, o, n, S, i]), Lt(() => {
    var B;
    h === rs && b(((B = E.current) === null || B === void 0 ? void 0 : B.offsetHeight) || 0);
  }, [h]), Lt(() => {
    var B, j;
    if (m) {
      if (h === rs) {
        const T = ((B = y.current) === null || B === void 0 ? void 0 : B.offsetHeight) || 0, $ = i * m;
        T <= $ ? (f(cl), s(!1)) : f(Gg);
      } else if (h === Gg)
        if (u !== c) {
          const T = ((j = y.current) === null || j === void 0 ? void 0 : j.offsetHeight) || 0, $ = i * m;
          let P = u, R = c;
          u === c - 1 ? R = u : T <= $ ? P = l : R = l;
          const M = Math.ceil((P + R) / 2);
          d([P, M, R]);
        } else
          f(ll), p(l), s(!0);
    }
  }, [h, u, c, i, m]);
  const x = {
    width: a,
    whiteSpace: "normal",
    margin: 0,
    padding: 0
  }, A = (B, j, T) => /* @__PURE__ */ g.createElement("span", {
    "aria-hidden": !0,
    ref: j,
    style: Object.assign({
      position: "fixed",
      display: "block",
      left: 0,
      top: 0,
      zIndex: -9999,
      visibility: "hidden",
      pointerEvents: "none",
      fontSize: Math.ceil(o / 2) * 2
    }, T)
  }, B), O = (B, j) => {
    const T = ul(w, B);
    return A(r(T, !0), j, x);
  };
  return /* @__PURE__ */ g.createElement(g.Fragment, null, D, t && h !== ll && h !== cl && /* @__PURE__ */ g.createElement(g.Fragment, null, A("lg", E, {
    wordBreak: "keep-all",
    whiteSpace: "nowrap"
  }), h === rs ? A(r(w, !1), y, x) : O(l, y)));
};
process.env.NODE_ENV !== "production" && (Ab.displayName = "Ellipsis");
const xN = Ab, Bb = (e) => {
  let {
    enabledEllipsis: t,
    isEllipsis: r,
    children: n,
    tooltipProps: a
  } = e;
  return !(a != null && a.title) || !t ? n : /* @__PURE__ */ g.createElement(ks, Object.assign({
    open: r ? void 0 : !1
  }, a), n);
};
process.env.NODE_ENV !== "production" && (Bb.displayName = "EllipsisTooltip");
const ON = Bb;
var AN = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function BN(e, t) {
  let {
    mark: r,
    code: n,
    underline: a,
    delete: o,
    strong: i,
    keyboard: s,
    italic: u
  } = e, l = t;
  function c(d, v) {
    v && (l = /* @__PURE__ */ g.createElement(d, {}, l));
  }
  return c("strong", i), c("u", a), c("del", o), c("code", n), c("mark", r), c("kbd", s), c("i", u), l;
}
function ns(e, t, r) {
  return e === !0 || e === void 0 ? t : e || r && t;
}
function Xg(e) {
  return e === !1 ? [!1, !1] : Array.isArray(e) ? e : [e];
}
const $N = "...", FN = /* @__PURE__ */ g.forwardRef((e, t) => {
  var r, n, a;
  const {
    prefixCls: o,
    className: i,
    style: s,
    type: u,
    disabled: l,
    children: c,
    ellipsis: d,
    editable: v,
    copyable: p,
    component: h,
    title: f
  } = e, m = AN(e, ["prefixCls", "className", "style", "type", "disabled", "children", "ellipsis", "editable", "copyable", "component", "title"]), {
    getPrefixCls: b,
    direction: E
  } = g.useContext(xt), [y] = Qx("Text"), w = g.useRef(null), S = g.useRef(null), D = b("typography", o), x = Tr(m, ["mark", "code", "delete", "underline", "strong", "keyboard", "italic"]), [A, O] = sl(v), [B, j] = zr(!1, {
    value: O.editing
  }), {
    triggerType: T = ["icon"]
  } = O, $ = (fe) => {
    var Fe;
    fe && ((Fe = O.onStart) === null || Fe === void 0 || Fe.call(O)), j(fe);
  };
  EN(() => {
    var fe;
    B || (fe = S.current) === null || fe === void 0 || fe.focus();
  }, [B]);
  const P = (fe) => {
    fe == null || fe.preventDefault(), $(!0);
  }, R = (fe) => {
    var Fe;
    (Fe = O.onChange) === null || Fe === void 0 || Fe.call(O, fe), $(!1);
  }, M = () => {
    var fe;
    (fe = O.onCancel) === null || fe === void 0 || fe.call(O), $(!1);
  }, [F, N] = sl(p), [V, k] = g.useState(!1), W = g.useRef(null), U = {};
  N.format && (U.format = N.format);
  const Q = () => {
    W.current && clearTimeout(W.current);
  }, I = (fe) => {
    var Fe;
    fe == null || fe.preventDefault(), fe == null || fe.stopPropagation(), oN(N.text || String(c) || "", U), k(!0), Q(), W.current = setTimeout(() => {
      k(!1);
    }, 3e3), (Fe = N.onCopy) === null || Fe === void 0 || Fe.call(N, fe);
  };
  g.useEffect(() => Q, []);
  const [z, H] = g.useState(!1), [G, re] = g.useState(!1), [te, de] = g.useState(!1), [se, he] = g.useState(!1), [ce, q] = g.useState(!1), [pe, De] = g.useState(!0), [Ce, Ee] = sl(d, {
    expandable: !1
  }), oe = Ce && !te, {
    rows: ue = 1
  } = Ee, ge = g.useMemo(() => (
    // Disable ellipsis
    !oe || // Provide suffix
    Ee.suffix !== void 0 || Ee.onEllipsis || // Can't use css ellipsis since we need to provide the place for button
    Ee.expandable || A || F
  ), [oe, Ee, A, F]);
  Lt(() => {
    Ce && !ge && (H(ng("webkitLineClamp")), re(ng("textOverflow")));
  }, [ge, Ce]);
  const be = g.useMemo(() => ge ? !1 : ue === 1 ? G : z, [ge, G, z]), ye = oe && (be ? ce : se), Ne = oe && ue === 1 && be, $e = oe && ue > 1 && be, je = (fe) => {
    var Fe;
    de(!0), (Fe = Ee.onExpand) === null || Fe === void 0 || Fe.call(Ee, fe);
  }, [yt, Le] = g.useState(0), [we, ze] = g.useState(0), Ve = (fe, Fe) => {
    let {
      offsetWidth: ke
    } = fe;
    var rt;
    Le(ke), ze(parseInt((rt = window.getComputedStyle) === null || rt === void 0 ? void 0 : rt.call(window, Fe).fontSize, 10) || 0);
  }, kt = (fe) => {
    var Fe;
    he(fe), se !== fe && ((Fe = Ee.onEllipsis) === null || Fe === void 0 || Fe.call(Ee, fe));
  };
  g.useEffect(() => {
    const fe = w.current;
    if (Ce && be && fe) {
      const Fe = $e ? fe.offsetHeight < fe.scrollHeight : fe.offsetWidth < fe.scrollWidth;
      ce !== Fe && q(Fe);
    }
  }, [Ce, be, c, $e, pe, yt]), g.useEffect(() => {
    const fe = w.current;
    if (typeof IntersectionObserver > "u" || !fe || !be || !oe)
      return;
    const Fe = new IntersectionObserver(() => {
      De(!!fe.offsetParent);
    });
    return Fe.observe(fe), () => {
      Fe.disconnect();
    };
  }, [be, oe]);
  let tt = {};
  Ee.tooltip === !0 ? tt = {
    title: (r = O.text) !== null && r !== void 0 ? r : c
  } : /* @__PURE__ */ g.isValidElement(Ee.tooltip) ? tt = {
    title: Ee.tooltip
  } : typeof Ee.tooltip == "object" ? tt = Object.assign({
    title: (n = O.text) !== null && n !== void 0 ? n : c
  }, Ee.tooltip) : tt = {
    title: Ee.tooltip
  };
  const Bt = g.useMemo(() => {
    const fe = (Fe) => ["string", "number"].includes(typeof Fe);
    if (!(!Ce || be)) {
      if (fe(O.text))
        return O.text;
      if (fe(c))
        return c;
      if (fe(f))
        return f;
      if (fe(tt.title))
        return tt.title;
    }
  }, [Ce, be, f, tt.title, ye]);
  if (B)
    return /* @__PURE__ */ g.createElement(CN, {
      value: (a = O.text) !== null && a !== void 0 ? a : typeof c == "string" ? c : "",
      onSave: R,
      onCancel: M,
      onEnd: O.onEnd,
      prefixCls: D,
      className: i,
      style: s,
      direction: E,
      component: h,
      maxLength: O.maxLength,
      autoSize: O.autoSize,
      enterIcon: O.enterIcon
    });
  const ht = () => {
    const {
      expandable: fe,
      symbol: Fe
    } = Ee;
    if (!fe)
      return null;
    let ke;
    return Fe ? ke = Fe : ke = y == null ? void 0 : y.expand, /* @__PURE__ */ g.createElement("a", {
      key: "expand",
      className: `${D}-expand`,
      onClick: je,
      "aria-label": y == null ? void 0 : y.expand
    }, ke);
  }, Qe = () => {
    if (!A)
      return;
    const {
      icon: fe,
      tooltip: Fe
    } = O, ke = gn(Fe)[0] || (y == null ? void 0 : y.edit), rt = typeof ke == "string" ? ke : "";
    return T.includes("icon") ? /* @__PURE__ */ g.createElement(ks, {
      key: "edit",
      title: Fe === !1 ? "" : ke
    }, /* @__PURE__ */ g.createElement(qg, {
      ref: S,
      className: `${D}-edit`,
      onClick: P,
      "aria-label": rt
    }, fe || /* @__PURE__ */ g.createElement(QT, {
      role: "button"
    }))) : null;
  }, st = () => {
    if (!F)
      return null;
    const {
      tooltips: fe,
      icon: Fe
    } = N, ke = Xg(fe), rt = Xg(Fe), Je = V ? ns(ke[1], y == null ? void 0 : y.copied) : ns(ke[0], y == null ? void 0 : y.copy), Pe = V ? y == null ? void 0 : y.copied : y == null ? void 0 : y.copy, Ze = typeof Je == "string" ? Je : Pe;
    return /* @__PURE__ */ g.createElement(ks, {
      key: "copy",
      title: Je
    }, /* @__PURE__ */ g.createElement(qg, {
      className: ne(`${D}-copy`, {
        [`${D}-copy-success`]: V,
        [`${D}-copy-icon-only`]: c == null
      }),
      onClick: I,
      "aria-label": Ze
    }, V ? ns(rt[1], /* @__PURE__ */ g.createElement(dF, null), !0) : ns(rt[0], /* @__PURE__ */ g.createElement(GT, null), !0)));
  }, Wt = (fe) => [fe && ht(), Qe(), st()], wt = (fe) => [fe && /* @__PURE__ */ g.createElement("span", {
    "aria-hidden": !0,
    key: "ellipsis"
  }, $N), Ee.suffix, Wt(fe)];
  return /* @__PURE__ */ g.createElement(na, {
    onResize: Ve,
    disabled: !oe
  }, (fe) => /* @__PURE__ */ g.createElement(ON, {
    tooltipProps: tt,
    enabledEllipsis: oe,
    isEllipsis: ye
  }, /* @__PURE__ */ g.createElement(xb, Object.assign({
    className: ne({
      [`${D}-${u}`]: u,
      [`${D}-disabled`]: l,
      [`${D}-ellipsis`]: Ce,
      [`${D}-single-line`]: oe && ue === 1,
      [`${D}-ellipsis-single-line`]: Ne,
      [`${D}-ellipsis-multiple-line`]: $e
    }, i),
    prefixCls: o,
    style: Object.assign(Object.assign({}, s), {
      WebkitLineClamp: $e ? ue : void 0
    }),
    component: h,
    ref: nn(fe, w, t),
    direction: E,
    onClick: T.includes("text") ? P : void 0,
    "aria-label": Bt == null ? void 0 : Bt.toString(),
    title: f
  }, x), /* @__PURE__ */ g.createElement(xN, {
    enabledMeasure: oe && !be,
    text: c,
    rows: ue,
    width: yt,
    fontSize: we,
    onEllipsis: kt
  }, (Fe, ke) => {
    let rt = Fe;
    return Fe.length && ke && Bt && (rt = /* @__PURE__ */ g.createElement("span", {
      key: "show-content",
      "aria-hidden": !0
    }, rt)), BN(e, /* @__PURE__ */ g.createElement(g.Fragment, null, rt, wt(ke)));
  }))));
}), yu = FN;
var PN = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const RN = /* @__PURE__ */ g.forwardRef((e, t) => {
  var {
    ellipsis: r,
    rel: n
  } = e, a = PN(e, ["ellipsis", "rel"]);
  if (process.env.NODE_ENV !== "production") {
    const i = sr("Typography.Link");
    process.env.NODE_ENV !== "production" && i(typeof r != "object", "usage", "`ellipsis` only supports boolean value.");
  }
  const o = Object.assign(Object.assign({}, a), {
    rel: n === void 0 && a.target === "_blank" ? "noopener noreferrer" : n
  });
  return delete o.navigate, /* @__PURE__ */ g.createElement(yu, Object.assign({}, o, {
    ref: t,
    ellipsis: !!r,
    component: "a"
  }));
}), TN = RN, NN = /* @__PURE__ */ g.forwardRef((e, t) => /* @__PURE__ */ g.createElement(yu, Object.assign({
  ref: t
}, e, {
  component: "div"
}))), IN = NN;
var MN = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const _N = (e, t) => {
  var {
    ellipsis: r
  } = e, n = MN(e, ["ellipsis"]);
  const a = g.useMemo(() => r && typeof r == "object" ? Tr(r, ["expandable", "rows"]) : r, [r]);
  if (process.env.NODE_ENV !== "production") {
    const o = sr("Typography.Text");
    process.env.NODE_ENV !== "production" && o(typeof r != "object" || !r || !("expandable" in r) && !("rows" in r), "usage", "`ellipsis` do not support `expandable` or `rows` props.");
  }
  return /* @__PURE__ */ g.createElement(yu, Object.assign({
    ref: t
  }, n, {
    ellipsis: a,
    component: "span"
  }));
}, jN = /* @__PURE__ */ g.forwardRef(_N);
var LN = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Yg = [1, 2, 3, 4, 5], kN = /* @__PURE__ */ g.forwardRef((e, t) => {
  const {
    level: r = 1
  } = e, n = LN(e, ["level"]);
  let a;
  if (process.env.NODE_ENV !== "production") {
    const o = sr("Typography.Title");
    process.env.NODE_ENV !== "production" && o(Yg.includes(r), "usage", "Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version.");
  }
  return Yg.includes(r) ? a = `h${r}` : a = "h1", /* @__PURE__ */ g.createElement(yu, Object.assign({
    ref: t
  }, n, {
    component: a
  }));
}), zN = kN, Pi = xb;
Pi.Text = jN;
Pi.Link = TN;
Pi.Title = zN;
Pi.Paragraph = IN;
const VN = Pi, HN = (e) => {
  const { attributes: t, children: r, element: n } = e, { disabled: a, checked: o, textAlign: i } = n, s = Jt(), u = Gc(), l = u || a, c = ne("wu_check_list"), d = {
    justifyContent: i ? i === Xn.Center ? "center" : `flex-${i}` : void 0
  };
  return /* @__PURE__ */ Be.jsxs(
    "div",
    {
      className: c,
      style: d,
      ...t,
      onClick: () => {
        ND(s, n);
      },
      children: [
        /* @__PURE__ */ Be.jsx("span", { contentEditable: !1, className: "wu_check_list_box", children: /* @__PURE__ */ Be.jsx(
          kR,
          {
            disabled: l,
            checked: o,
            onChange: (v) => {
              const p = J.findPath(s, n), h = {
                checked: v.target.checked
              };
              ee.setNodes(s, h, { at: p });
            }
          }
        ) }),
        /* @__PURE__ */ Be.jsx(
          "span",
          {
            className: ne("wu_check_list_label", {
              wu_check_list_checked: o
            }),
            onClick: (v) => v.stopPropagation(),
            suppressContentEditableWarning: !0,
            contentEditable: !u,
            children: r
          }
        )
      ]
    }
  );
}, WN = (e) => {
  const { attributes: t, children: r, element: n } = e, { index: a } = n;
  Jt();
  const o = Gc();
  return /* @__PURE__ */ Be.jsxs("div", { className: "wu_ordered_list", ...t, children: [
    /* @__PURE__ */ Be.jsxs("span", { contentEditable: !1, className: "wu_ordered_index", children: [
      a,
      "."
    ] }),
    /* @__PURE__ */ Be.jsx(
      "span",
      {
        className: ne("wu_ordered_label"),
        suppressContentEditableWarning: !0,
        contentEditable: !o,
        children: r
      }
    )
  ] });
}, KN = (e) => {
  const { attributes: t, children: r } = e;
  return /* @__PURE__ */ Be.jsx("span", { ...t, children: r });
}, qN = (e) => {
  const { attributes: t, element: r, children: n } = e, { textAlign: a, heading: o } = r, i = {
    textAlign: a
  };
  return o ? /* @__PURE__ */ Be.jsx(VN.Title, { level: o, style: i, ...t, children: n }) : /* @__PURE__ */ Be.jsx("p", { style: i, ...t, children: n });
}, UN = (e) => {
  const { attributes: t, children: r } = e;
  return /* @__PURE__ */ Be.jsx("pre", { ...t, children: /* @__PURE__ */ Be.jsx("code", { children: r }) });
}, GN = (e) => {
  const { attributes: t, leaf: r, children: n } = e, a = ne({
    "wu-font-bold": r.bold,
    "wu-underline": r.underline,
    "wu-italic": r.italic,
    "wu-keyword-highlight": r.highlight
  });
  return /* @__PURE__ */ Be.jsx("span", { className: a, ...t, children: n });
}, XN = () => {
  const e = et((n) => {
    const { children: a, ...o } = n, i = n.element.type;
    return $t(i).with(nt.Bold, () => /* @__PURE__ */ Be.jsx(UN, { ...o, children: a })).with(nt.Code, () => /* @__PURE__ */ Be.jsx(KN, { ...o, children: a })).with(nt.CheckList, () => /* @__PURE__ */ Be.jsx(HN, { ...o, children: a })).with(nt.OrderedList, () => /* @__PURE__ */ Be.jsx(WN, { ...o, children: a })).otherwise(() => /* @__PURE__ */ Be.jsx(qN, { ...o, children: a }));
  }, []), t = et((n) => {
    const { children: a, ...o } = n;
    return /* @__PURE__ */ Be.jsx(GN, { ...o, children: a });
  }, []), r = et((n) => {
    const { children: a, attributes: o } = n;
    return /* @__PURE__ */ Be.jsx(
      "span",
      {
        ...o,
        style: { fontStyle: "italic", color: "gray", position: "absolute", left: 3, zIndex: -1 },
        children: a
      }
    );
  }, []);
  return { renderElement: e, renderLeaf: t, renderPlaceholder: r };
}, YN = (e) => {
  const t = qe(!1);
  return [(n) => {
    const a = n.ctrlKey || n.metaKey;
    $t(a).with(!0, () => {
      $t(n).with({ shiftKey: !0 }, (o) => {
        $t(o).with({ key: "T" }, () => {
          console.info("切换CheckList"), n.preventDefault(), at.toggleCheckListNode(e);
        }), $t(o).with({ key: "L" }, () => {
          console.info("切换align-left"), n.preventDefault(), at.toggleTextAlignMark(e, Xn.Start);
        }), $t(o).with({ key: "C" }, () => {
          console.info("切换align-center"), n.preventDefault(), at.toggleTextAlignMark(e, Xn.Center);
        }), $t(o).with({ key: "R" }, () => {
          console.info("切换align-right"), n.preventDefault(), at.toggleTextAlignMark(e, Xn.End);
        });
      }).with({ altKey: !0 }, (o) => {
        $t(o).with({ key: "R" }, () => {
          console.info("还原"), o.preventDefault(), at.restoreNormal(e);
        });
      }).with({ key: "a" }, () => {
        t.current ? (console.info("编辑器全选"), t.current = !1) : (console.info("模块内全选"), t.current = !0, at.selectAllInModule(e) && n.preventDefault(), setTimeout(() => {
          t.current = !1;
        }, 400));
      }).with({ key: Wo.Bold }, () => {
        console.info("切换加粗"), n.preventDefault(), at.toggleBoldMark(e);
      }).with({ key: Wo.Italic }, () => {
        console.info("切换斜体"), n.preventDefault(), at.toggleItalicMark(e);
      }).with({ key: Wo.Underline }, () => {
        console.info("切换下划线"), n.preventDefault(), at.toggleUnderlineMark(e);
      });
    }).otherwise(() => {
      const { altKey: o, shiftKey: i } = n;
      $t(!o && !i).with(!0, () => {
        $t(n.key).with(Wo.Tab, () => {
          console.info("缩进"), n.preventDefault(), ma.withoutMerging(e, () => {
            at.indent(e);
          });
        });
      });
    });
  }];
}, { darkAlgorithm: ZN, compactAlgorithm: Zg } = zT, QN = (e) => {
  const { theme: t, children: r } = e;
  return /* @__PURE__ */ Be.jsx(zS, { hashPriority: "high", children: /* @__PURE__ */ Be.jsx(
    Tp,
    {
      theme: {
        algorithm: t === "dark" ? [ZN, Zg] : [Zg]
      },
      children: r
    }
  ) });
};
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JN = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), $b = (...e) => e.filter((t, r, n) => !!t && n.indexOf(t) === r).join(" ");
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var eI = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tI = hr(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: a = "",
    children: o,
    iconNode: i,
    ...s
  }, u) => ml(
    "svg",
    {
      ref: u,
      ...eI,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: $b("lucide", a),
      ...s
    },
    [
      ...i.map(([l, c]) => ml(l, c)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fr = (e, t) => {
  const r = hr(
    ({ className: n, ...a }, o) => ml(tI, {
      ref: o,
      iconNode: t,
      className: $b(`lucide-${JN(e)}`, n),
      ...a
    })
  );
  return r.displayName = `${e}`, r;
};
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rI = fr("AlignCenter", [
  ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
  ["line", { x1: "17", x2: "7", y1: "12", y2: "12", key: "rsh8ii" }],
  ["line", { x1: "19", x2: "5", y1: "18", y2: "18", key: "1t0tuv" }]
]);
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nI = fr("AlignJustify", [
  ["line", { x1: "3", x2: "21", y1: "6", y2: "6", key: "4m8b97" }],
  ["line", { x1: "3", x2: "21", y1: "12", y2: "12", key: "10d38w" }],
  ["line", { x1: "3", x2: "21", y1: "18", y2: "18", key: "kwyyxn" }]
]);
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aI = fr("AlignLeft", [
  ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
  ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
  ["line", { x1: "17", x2: "3", y1: "18", y2: "18", key: "1awlsn" }]
]);
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oI = fr("AlignRight", [
  ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
  ["line", { x1: "21", x2: "7", y1: "18", y2: "18", key: "1g9eri" }]
]);
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iI = fr("Bold", [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
]);
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sI = fr("Eraser", [
  [
    "path",
    {
      d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
      key: "182aya"
    }
  ],
  ["path", { d: "M22 21H7", key: "t4ddhn" }],
  ["path", { d: "m5 11 9 9", key: "1mo9qw" }]
]);
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uI = fr("Heading1", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
]);
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lI = fr("Heading2", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
]);
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cI = fr("Heading3", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
]);
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fI = fr("Heading4", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17 10v4h4", key: "13sv97" }],
  ["path", { d: "M21 10v8", key: "1kdml4" }]
]);
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dI = fr("Heading5", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17 13v-3h4", key: "1nvgqp" }],
  [
    "path",
    { d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17", key: "2nebdn" }
  ]
]);
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vI = fr("Heading", [
  ["path", { d: "M6 12h12", key: "8npq4p" }],
  ["path", { d: "M6 20V4", key: "1w1bmo" }],
  ["path", { d: "M18 20V4", key: "o2hl4u" }]
]);
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gI = fr("Italic", [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
]);
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mI = fr("ListOrdered", [
  ["line", { x1: "10", x2: "21", y1: "6", y2: "6", key: "76qw6h" }],
  ["line", { x1: "10", x2: "21", y1: "12", y2: "12", key: "16nom4" }],
  ["line", { x1: "10", x2: "21", y1: "18", y2: "18", key: "u3jurt" }],
  ["path", { d: "M4 6h1v4", key: "cnovpq" }],
  ["path", { d: "M4 10h2", key: "16xx2s" }],
  ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1", key: "m9a95d" }]
]);
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hI = fr("ListTodo", [
  ["rect", { x: "3", y: "5", width: "6", height: "6", rx: "1", key: "1defrl" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "M13 6h8", key: "15sg57" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 18h8", key: "oe0vm4" }]
]);
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pI = fr("Underline", [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
]), bI = () => {
  const e = ta((n) => at.isBoldMarkActive(n)), t = Jt(), r = Xt(() => e ? "primary" : "text", [e]);
  return /* @__PURE__ */ Be.jsx(
    tn,
    {
      type: r,
      onClick: () => {
        J.focus(t), at.toggleBoldMark(t);
      },
      className: ne("wu_toolbar_icon_btn"),
      icon: /* @__PURE__ */ Be.jsx(iI, { className: ne("wu_toolbar_icon_btn_icon") })
    }
  );
}, yI = () => {
  const e = ta((n) => at.isItalicMarkActive(n)), t = Jt(), r = Xt(() => e ? "primary" : "text", [e]);
  return /* @__PURE__ */ Be.jsx(
    tn,
    {
      type: r,
      onClick: () => {
        J.focus(t), at.toggleItalicMark(t);
      },
      className: ne("wu_toolbar_icon_btn"),
      icon: /* @__PURE__ */ Be.jsx(gI, { className: ne("wu_toolbar_icon_btn_icon") })
    }
  );
}, CI = () => {
  const e = ta(
    (n) => at.isUnderlineMarkActive(n)
  ), t = Jt(), r = Xt(() => e ? "primary" : "text", [e]);
  return /* @__PURE__ */ Be.jsx(
    tn,
    {
      type: r,
      onClick: () => {
        J.focus(t), at.toggleUnderlineMark(t);
      },
      className: ne("wu_toolbar_icon_btn"),
      icon: /* @__PURE__ */ Be.jsx(pI, { className: ne("wu_toolbar_icon_btn_icon") })
    }
  );
}, EI = () => {
  const e = Jt();
  return /* @__PURE__ */ Be.jsx(
    tn,
    {
      type: "text",
      onClick: () => {
        J.focus(e), at.restoreNormal(e);
      },
      className: ne("wu_toolbar_icon_btn"),
      icon: /* @__PURE__ */ Be.jsx(sI, { className: ne("wu_toolbar_icon_btn_icon") })
    }
  );
}, wI = () => {
  const e = ta((i) => at.isTextAlignMarkActive(i)), t = Jt(), r = Xt(() => e ? "primary" : "text", [e]), n = (i) => {
    J.focus(t), $t(e === i.key).with(!0, () => {
      at.toggleTextAlignMark(t);
    }).otherwise(() => {
      at.toggleTextAlignMark(t, i.key);
    });
  }, a = ne("wu_toolbar_icon_btn_icon"), o = [
    {
      label: "左对齐",
      key: Xn.Start,
      icon: /* @__PURE__ */ Be.jsx(aI, { className: a })
    },
    {
      label: "居中对齐",
      key: Xn.Center,
      icon: /* @__PURE__ */ Be.jsx(rI, { className: a })
    },
    {
      label: "右对齐",
      key: Xn.End,
      icon: /* @__PURE__ */ Be.jsx(oI, { className: a })
    }
  ];
  return /* @__PURE__ */ Be.jsx(
    yb,
    {
      menu: {
        items: o,
        selectable: !0,
        selectedKeys: e ? [e] : [],
        onClick: n
      },
      children: /* @__PURE__ */ Be.jsx(
        tn,
        {
          type: r,
          className: ne("wu_toolbar_icon_btn"),
          icon: /* @__PURE__ */ Be.jsx(nI, { className: a })
        }
      )
    }
  );
}, DI = () => {
  const e = ta((n) => at.isCheckListNode(n)), t = Jt(), r = Xt(() => e ? "primary" : "text", [e]);
  return /* @__PURE__ */ Be.jsx(
    tn,
    {
      type: r,
      className: ne("wu_toolbar_icon_btn"),
      onClick: () => {
        J.focus(t), at.toggleCheckListNode(t);
      },
      icon: /* @__PURE__ */ Be.jsx(hI, { className: ne("wu_toolbar_icon_btn_icon") })
    }
  );
}, SI = () => {
  const e = ta(
    (i) => at.isTextHeadingMarkActive(i)
  ), t = Jt(), r = Xt(() => e ? "primary" : "text", [e]), n = (i) => {
    J.focus(t), $t((e == null ? void 0 : e.toString()) === i.key).with(!0, () => {
      at.toggleTextHeadingMark(t);
    }).otherwise(() => {
      at.toggleTextHeadingMark(t, Number(i.key));
    });
  }, a = ne("wu_toolbar_icon_btn_icon"), o = [
    {
      label: "一级标题",
      key: Za.H1.toString(),
      icon: /* @__PURE__ */ Be.jsx(uI, { className: a })
    },
    {
      label: "二级标题",
      key: Za.H2.toString(),
      icon: /* @__PURE__ */ Be.jsx(lI, { className: a })
    },
    {
      label: "三级标题",
      key: Za.H3.toString(),
      icon: /* @__PURE__ */ Be.jsx(cI, { className: a })
    },
    {
      label: "四级标题",
      key: Za.H4.toString(),
      icon: /* @__PURE__ */ Be.jsx(fI, { className: a })
    },
    {
      label: "五级标题",
      key: Za.H5.toString(),
      icon: /* @__PURE__ */ Be.jsx(dI, { className: a })
    }
  ];
  return /* @__PURE__ */ Be.jsx(
    yb,
    {
      menu: {
        items: o,
        selectable: !0,
        selectedKeys: e ? [e.toString()] : [],
        onClick: n
      },
      children: /* @__PURE__ */ Be.jsx(
        tn,
        {
          type: r,
          className: ne("wu_toolbar_icon_btn"),
          icon: /* @__PURE__ */ Be.jsx(vI, { className: a })
        }
      )
    }
  );
}, xI = () => {
  const e = ta((n) => at.isOrderedListNode(n)), t = Jt(), r = Xt(() => e ? "primary" : "text", [e]);
  return /* @__PURE__ */ Be.jsx(
    tn,
    {
      type: r,
      className: ne("wu_toolbar_icon_btn"),
      onClick: () => {
        J.focus(t), at.toggleOrderedListNode(t);
      },
      icon: /* @__PURE__ */ Be.jsx(mI, { className: ne("wu_toolbar_icon_btn_icon") })
    }
  );
};
var OI = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Qg = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (c, d) => {
    const v = typeof c == "function" ? c(t) : c;
    if (!Object.is(v, t)) {
      const p = t;
      t = d ?? (typeof v != "object" || v === null) ? v : Object.assign({}, t, v), r.forEach((h) => h(t, p));
    }
  }, a = () => t, u = { setState: n, getState: a, getInitialState: () => l, subscribe: (c) => (r.add(c), () => r.delete(c)), destroy: () => {
    (OI ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } }, l = t = e(n, a, u);
  return u;
}, AI = (e) => e ? Qg(e) : Qg;
var Rc = { exports: {} }, fl = {}, as = { exports: {} }, dl = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jg;
function BI() {
  if (Jg)
    return dl;
  Jg = 1;
  var e = Z;
  function t(d, v) {
    return d === v && (d !== 0 || 1 / d === 1 / v) || d !== d && v !== v;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, a = e.useEffect, o = e.useLayoutEffect, i = e.useDebugValue;
  function s(d, v) {
    var p = v(), h = n({ inst: { value: p, getSnapshot: v } }), f = h[0].inst, m = h[1];
    return o(function() {
      f.value = p, f.getSnapshot = v, u(f) && m({ inst: f });
    }, [d, p, v]), a(function() {
      return u(f) && m({ inst: f }), d(function() {
        u(f) && m({ inst: f });
      });
    }, [d]), i(p), p;
  }
  function u(d) {
    var v = d.getSnapshot;
    d = d.value;
    try {
      var p = v();
      return !r(d, p);
    } catch {
      return !0;
    }
  }
  function l(d, v) {
    return v();
  }
  var c = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : s;
  return dl.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : c, dl;
}
var vl = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var em;
function $I() {
  return em || (em = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Z, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(y) {
      {
        for (var w = arguments.length, S = new Array(w > 1 ? w - 1 : 0), D = 1; D < w; D++)
          S[D - 1] = arguments[D];
        n("error", y, S);
      }
    }
    function n(y, w, S) {
      {
        var D = t.ReactDebugCurrentFrame, x = D.getStackAddendum();
        x !== "" && (w += "%s", S = S.concat([x]));
        var A = S.map(function(O) {
          return String(O);
        });
        A.unshift("Warning: " + w), Function.prototype.apply.call(console[y], console, A);
      }
    }
    function a(y, w) {
      return y === w && (y !== 0 || 1 / y === 1 / w) || y !== y && w !== w;
    }
    var o = typeof Object.is == "function" ? Object.is : a, i = e.useState, s = e.useEffect, u = e.useLayoutEffect, l = e.useDebugValue, c = !1, d = !1;
    function v(y, w, S) {
      c || e.startTransition !== void 0 && (c = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var D = w();
      if (!d) {
        var x = w();
        o(D, x) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var A = i({
        inst: {
          value: D,
          getSnapshot: w
        }
      }), O = A[0].inst, B = A[1];
      return u(function() {
        O.value = D, O.getSnapshot = w, p(O) && B({
          inst: O
        });
      }, [y, D, w]), s(function() {
        p(O) && B({
          inst: O
        });
        var j = function() {
          p(O) && B({
            inst: O
          });
        };
        return y(j);
      }, [y]), l(D), D;
    }
    function p(y) {
      var w = y.getSnapshot, S = y.value;
      try {
        var D = w();
        return !o(S, D);
      } catch {
        return !0;
      }
    }
    function h(y, w, S) {
      return w();
    }
    var f = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", m = !f, b = m ? h : v, E = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : b;
    vl.useSyncExternalStore = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), vl;
}
var tm;
function Fb() {
  return tm || (tm = 1, process.env.NODE_ENV === "production" ? as.exports = BI() : as.exports = $I()), as.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rm;
function FI() {
  if (rm)
    return fl;
  rm = 1;
  var e = Z, t = Fb();
  function r(l, c) {
    return l === c && (l !== 0 || 1 / l === 1 / c) || l !== l && c !== c;
  }
  var n = typeof Object.is == "function" ? Object.is : r, a = t.useSyncExternalStore, o = e.useRef, i = e.useEffect, s = e.useMemo, u = e.useDebugValue;
  return fl.useSyncExternalStoreWithSelector = function(l, c, d, v, p) {
    var h = o(null);
    if (h.current === null) {
      var f = { hasValue: !1, value: null };
      h.current = f;
    } else
      f = h.current;
    h = s(function() {
      function b(D) {
        if (!E) {
          if (E = !0, y = D, D = v(D), p !== void 0 && f.hasValue) {
            var x = f.value;
            if (p(x, D))
              return w = x;
          }
          return w = D;
        }
        if (x = w, n(y, D))
          return x;
        var A = v(D);
        return p !== void 0 && p(x, A) ? x : (y = D, w = A);
      }
      var E = !1, y, w, S = d === void 0 ? null : d;
      return [function() {
        return b(c());
      }, S === null ? void 0 : function() {
        return b(S());
      }];
    }, [c, d, v, p]);
    var m = a(l, h[0], h[1]);
    return i(function() {
      f.hasValue = !0, f.value = m;
    }, [m]), u(m), m;
  }, fl;
}
var gl = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nm;
function PI() {
  return nm || (nm = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Z, t = Fb();
    function r(c, d) {
      return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
    }
    var n = typeof Object.is == "function" ? Object.is : r, a = t.useSyncExternalStore, o = e.useRef, i = e.useEffect, s = e.useMemo, u = e.useDebugValue;
    function l(c, d, v, p, h) {
      var f = o(null), m;
      f.current === null ? (m = {
        hasValue: !1,
        value: null
      }, f.current = m) : m = f.current;
      var b = s(function() {
        var S = !1, D, x, A = function(T) {
          if (!S) {
            S = !0, D = T;
            var $ = p(T);
            if (h !== void 0 && m.hasValue) {
              var P = m.value;
              if (h(P, $))
                return x = P, P;
            }
            return x = $, $;
          }
          var R = D, M = x;
          if (n(R, T))
            return M;
          var F = p(T);
          return h !== void 0 && h(M, F) ? M : (D = T, x = F, F);
        }, O = v === void 0 ? null : v, B = function() {
          return A(d());
        }, j = O === null ? void 0 : function() {
          return A(O());
        };
        return [B, j];
      }, [d, v, p, h]), E = b[0], y = b[1], w = a(c, E, y);
      return i(function() {
        m.hasValue = !0, m.value = w;
      }, [w]), u(w), w;
    }
    gl.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), gl;
}
process.env.NODE_ENV === "production" ? Rc.exports = FI() : Rc.exports = PI();
var RI = Rc.exports;
const TI = /* @__PURE__ */ wo(RI);
var Pb = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: NI } = Z, { useSyncExternalStoreWithSelector: II } = TI;
let am = !1;
const MI = (e) => e;
function _I(e, t = MI, r) {
  (Pb ? "production" : void 0) !== "production" && r && !am && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), am = !0);
  const n = II(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    r
  );
  return NI(n), n;
}
const om = (e) => {
  (Pb ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? AI(e) : e, r = (n, a) => _I(t, n, a);
  return Object.assign(r, t), r;
}, jI = (e) => e ? om(e) : om, LI = {
  keywords: []
}, Rb = jI((e) => ({
  ...LI
})), kI = () => /* @__PURE__ */ Be.jsx(
  ST,
  {
    onChange: (e) => {
      const t = e.target.value;
      Rb.setState({ keywords: t ? [t] : [] });
    },
    allowClear: !0,
    placeholder: "请输入"
  }
), zI = (e) => {
  const { className: t } = e;
  return /* @__PURE__ */ Be.jsxs(hb, { className: ne("wu_toolbar", t), children: [
    /* @__PURE__ */ Be.jsx(kI, {}),
    /* @__PURE__ */ Be.jsx(SI, {}),
    /* @__PURE__ */ Be.jsx(DI, {}),
    /* @__PURE__ */ Be.jsx(bI, {}),
    /* @__PURE__ */ Be.jsx(yI, {}),
    /* @__PURE__ */ Be.jsx(CI, {}),
    /* @__PURE__ */ Be.jsx(EI, {}),
    /* @__PURE__ */ Be.jsx(wI, {}),
    /* @__PURE__ */ Be.jsx(xI, {})
  ] });
};
function VI(e, t) {
  if (Object.is(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size)
      return !1;
    for (const [n, a] of e)
      if (!Object.is(a, t.get(n)))
        return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size)
      return !1;
    for (const n of e)
      if (!t.has(n))
        return !1;
    return !0;
  }
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Object.is(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const { useRef: HI } = Z;
function WI(e) {
  const t = HI();
  return (r) => {
    const n = e(r);
    return VI(t.current, n) ? t.current : t.current = n;
  };
}
const KI = () => {
  const e = Rb(WI((r) => r.keywords));
  return {
    decorate: et(
      (r) => {
        const n = (e == null ? void 0 : e[0]) || "", [a, o] = r, i = [];
        if (n && Oe.isText(a)) {
          const { text: s } = a, u = s.split(n);
          console.log("parts:", u);
          let l = 0;
          return u.forEach((c, d) => {
            d !== 0 && i.push({
              anchor: { path: o, offset: l - n.length },
              focus: {
                path: o,
                offset: l
              },
              highlight: !0
            }), l = l + c.length + n.length;
          }), console.log(111, i), i;
        }
        return [];
      },
      [e]
    )
  };
}, eM = hr((e, t) => {
  const { theme: r, placeholder: n, classes: a, initialValue: o = to() } = e, [i, { showPlaceholder: s, handlePlaceholder: u }] = XD();
  Ba(t, () => ({
    editor: i
  }));
  const { renderElement: l, renderLeaf: c, renderPlaceholder: d } = XN(), [v] = YN(i), { decorate: p } = KI();
  return /* @__PURE__ */ Be.jsx(QN, { theme: r, children: /* @__PURE__ */ Be.jsxs(
    SD,
    {
      editor: i,
      onValueChange: (h) => {
        console.log("val", h), u(h);
      },
      onSelectionChange: (h) => {
        console.log("selection:", h);
      },
      initialValue: o,
      children: [
        /* @__PURE__ */ Be.jsx(zI, { className: ne(a == null ? void 0 : a.toolbar) }),
        /* @__PURE__ */ Be.jsx(
          mD,
          {
            decorate: p,
            className: ne("wu_editable", a == null ? void 0 : a.editor),
            renderElement: l,
            renderLeaf: c,
            renderPlaceholder: d,
            spellCheck: !0,
            placeholder: s ? n : void 0,
            onKeyDown: v
          }
        )
      ]
    }
  ) });
});
export {
  tD as DefaultElement,
  Zw as DefaultLeaf,
  hD as DefaultPlaceholder,
  mD as Editable,
  C as Editor,
  le as Element,
  GI as Location,
  me as Node,
  Kn as Operation,
  L as Path,
  ey as PathRef,
  Ge as Point,
  ty as PointRef,
  X as Range,
  ry as RangeRef,
  J as ReactEditor,
  Qt as Scrubber,
  SD as Slate,
  my as Span,
  Oe as Text,
  ee as Transforms,
  eM as WuEditor,
  Xy as above,
  Yy as addMark,
  Zy as after,
  Wy as apply,
  Qy as before,
  e1 as collapse,
  y1 as createEditor,
  Jy as deleteBackward,
  eC as deleteForward,
  tC as deleteFragment,
  QC as deleteText,
  t1 as deselect,
  rC as edges,
  nC as elementReadOnly,
  aC as end,
  oC as first,
  iC as fragment,
  Ky as getDirtyPaths,
  qy as getFragment,
  sC as getVoid,
  uC as hasBlocks,
  lC as hasInlines,
  cC as hasPath,
  fC as hasTexts,
  dC as insertBreak,
  JC as insertFragment,
  vC as insertNode,
  i1 as insertNodes,
  gC as insertSoftBreak,
  hC as insertText,
  pC as isBlock,
  bC as isEdge,
  gy as isEditor,
  yC as isEmpty,
  CC as isEnd,
  EC as isNormalizing,
  wC as isStart,
  DC as last,
  SC as leaf,
  xC as levels,
  s1 as liftNodes,
  BC as marks,
  c1 as mergeNodes,
  r1 as move,
  f1 as moveNodes,
  $C as next,
  FC as node,
  PC as nodes,
  RC as normalize,
  Uy as normalizeNode,
  TC as parent,
  MC as path,
  NC as pathRef,
  IC as pathRefs,
  LC as point,
  _C as pointRef,
  jC as pointRefs,
  kC as positions,
  zC as previous,
  WC as range,
  VC as rangeRef,
  HC as rangeRefs,
  qC as removeMark,
  d1 as removeNodes,
  n1 as select,
  v1 as setNodes,
  UC as setNormalizing,
  a1 as setPoint,
  o1 as setSelection,
  Gy as shouldNormalize,
  m1 as splitNodes,
  GC as start,
  XC as string,
  YC as unhangRange,
  h1 as unsetNodes,
  p1 as unwrapNodes,
  QI as useEditor,
  ZI as useFocused,
  Gc as useReadOnly,
  XI as useSelected,
  nD as useSlate,
  JI as useSlateSelection,
  ta as useSlateSelector,
  Jt as useSlateStatic,
  YI as useSlateWithV,
  AD as withReact,
  ZC as withoutNormalizing,
  b1 as wrapNodes
};
