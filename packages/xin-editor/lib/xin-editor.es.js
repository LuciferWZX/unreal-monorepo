import * as v from "react";
import ee, { useContext as Rt, useCallback as rt, useState as ir, useRef as Je, useReducer as _g, useMemo as sr, useEffect as zt, createContext as zr, useLayoutEffect as Lg, Component as Y0, memo as Z0, forwardRef as Rr, isValidElement as Q0, Children as J0, createRef as eb, useImperativeHandle as bo, cloneElement as tb, createElement as nl } from "react";
import * as rb from "react-dom";
import kg, { createPortal as nb, unstable_batchedUpdates as ab, flushSync as ob } from "react-dom";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function xf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Jt(e) {
  var t, r;
  return xf(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (r = t.prototype, !(xf(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
var zg = Symbol.for("immer-nothing"), Of = Symbol.for("immer-draftable"), Fr = Symbol.for("immer-state"), ib = process.env.NODE_ENV !== "production" ? [
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
function br(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = ib[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var oo = Object.getPrototypeOf;
function wa(e) {
  return !!e && !!e[Fr];
}
function Da(e) {
  var t;
  return e ? Vg(e) || Array.isArray(e) || !!e[Of] || !!((t = e.constructor) != null && t[Of]) || _s(e) || Ls(e) : !1;
}
var sb = Object.prototype.constructor.toString();
function Vg(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = oo(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === sb;
}
function Zo(e, t) {
  js(e) === 0 ? Object.entries(e).forEach(([r, n]) => {
    t(r, n, e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function js(e) {
  const t = e[Fr];
  return t ? t.type_ : Array.isArray(e) ? 1 : _s(e) ? 2 : Ls(e) ? 3 : 0;
}
function al(e, t) {
  return js(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Hg(e, t, r) {
  const n = js(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function ub(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function _s(e) {
  return e instanceof Map;
}
function Ls(e) {
  return e instanceof Set;
}
function ia(e) {
  return e.copy_ || e.base_;
}
function ol(e, t) {
  if (_s(e))
    return new Map(e);
  if (Ls(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && Vg(e))
    return oo(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const r = Object.getOwnPropertyDescriptors(e);
  delete r[Fr];
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
  return Object.create(oo(e), r);
}
function Cc(e, t = !1) {
  return ks(e) || wa(e) || !Da(e) || (js(e) > 1 && (e.set = e.add = e.clear = e.delete = lb), Object.freeze(e), t && Zo(e, (r, n) => Cc(n, !0))), e;
}
function lb() {
  br(2);
}
function ks(e) {
  return Object.isFrozen(e);
}
var cb = {};
function Sa(e) {
  const t = cb[e];
  return t || br(0, e), t;
}
var Qo;
function Wg() {
  return Qo;
}
function fb(e, t) {
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
function Bf(e, t) {
  t && (Sa("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function il(e) {
  sl(e), e.drafts_.forEach(db), e.drafts_ = null;
}
function sl(e) {
  e === Qo && (Qo = e.parent_);
}
function Af(e) {
  return Qo = fb(Qo, e);
}
function db(e) {
  const t = e[Fr];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function $f(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[Fr].modified_ && (il(t), br(4)), Da(e) && (e = gs(t, e), t.parent_ || ms(t, e)), t.patches_ && Sa("Patches").generateReplacementPatches_(
    r[Fr].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = gs(t, r, []), il(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== zg ? e : void 0;
}
function gs(e, t, r) {
  if (ks(t))
    return t;
  const n = t[Fr];
  if (!n)
    return Zo(
      t,
      (a, o) => Ff(e, n, t, a, o, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return ms(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const a = n.copy_;
    let o = a, i = !1;
    n.type_ === 3 && (o = new Set(a), a.clear(), i = !0), Zo(
      o,
      (s, u) => Ff(e, n, a, s, u, r, i)
    ), ms(e, a, !1), r && e.patches_ && Sa("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function Ff(e, t, r, n, a, o, i) {
  if (process.env.NODE_ENV !== "production" && a === r && br(5), wa(a)) {
    const s = o && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !al(t.assigned_, n) ? o.concat(n) : void 0, u = gs(e, a, s);
    if (Hg(r, n, u), wa(u))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    i && r.add(a);
  if (Da(a) && !ks(a)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    gs(e, a), (!t || !t.scope_.parent_) && ms(e, a);
  }
}
function ms(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Cc(t, r);
}
function vb(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Wg(),
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
  let a = n, o = Ec;
  r && (a = [n], o = Jo);
  const { revoke: i, proxy: s } = Proxy.revocable(a, o);
  return n.draft_ = s, n.revoke_ = i, s;
}
var Ec = {
  get(e, t) {
    if (t === Fr)
      return e;
    const r = ia(e);
    if (!al(r, t))
      return gb(e, r, t);
    const n = r[t];
    return e.finalized_ || !Da(n) ? n : n === pu(e.base_, t) ? (bu(e), e.copy_[t] = ll(n, e)) : n;
  },
  has(e, t) {
    return t in ia(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(ia(e));
  },
  set(e, t, r) {
    const n = Kg(ia(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const a = pu(ia(e), t), o = a == null ? void 0 : a[Fr];
      if (o && o.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (ub(r, a) && (r !== void 0 || al(e.base_, t)))
        return !0;
      bu(e), ul(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return pu(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, bu(e), ul(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = ia(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    br(11);
  },
  getPrototypeOf(e) {
    return oo(e.base_);
  },
  setPrototypeOf() {
    br(12);
  }
}, Jo = {};
Zo(Ec, (e, t) => {
  Jo[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Jo.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && br(13), Jo.set.call(this, e, t, void 0);
};
Jo.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && br(14), Ec.set.call(this, e[0], t, r, e[0]);
};
function pu(e, t) {
  const r = e[Fr];
  return (r ? ia(r) : e)[t];
}
function gb(e, t, r) {
  var a;
  const n = Kg(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (a = n.get) == null ? void 0 : a.call(e.draft_)
  ) : void 0;
}
function Kg(e, t) {
  if (!(t in e))
    return;
  let r = oo(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = oo(r);
  }
}
function ul(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && ul(e.parent_));
}
function bu(e) {
  e.copy_ || (e.copy_ = ol(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var mb = class {
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
      typeof r != "function" && br(6), n !== void 0 && typeof n != "function" && br(7);
      let a;
      if (Da(t)) {
        const o = Af(this), i = ll(t, void 0);
        let s = !0;
        try {
          a = r(i), s = !1;
        } finally {
          s ? il(o) : sl(o);
        }
        return Bf(o, n), $f(a, o);
      } else if (!t || typeof t != "object") {
        if (a = r(t), a === void 0 && (a = t), a === zg && (a = void 0), this.autoFreeze_ && Cc(a, !0), n) {
          const o = [], i = [];
          Sa("Patches").generateReplacementPatches_(t, a, o, i), n(o, i);
        }
        return a;
      } else
        br(1, t);
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
    Da(e) || br(8), wa(e) && (e = hb(e));
    const t = Af(this), r = ll(e, void 0);
    return r[Fr].isManual_ = !0, sl(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[Fr];
    (!r || !r.isManual_) && br(9);
    const { scope_: n } = r;
    return Bf(n, t), $f(void 0, n);
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
    const n = Sa("Patches").applyPatches_;
    return wa(e) ? n(e, t) : this.produce(
      e,
      (a) => n(a, t)
    );
  }
};
function ll(e, t) {
  const r = _s(e) ? Sa("MapSet").proxyMap_(e, t) : Ls(e) ? Sa("MapSet").proxySet_(e, t) : vb(e, t);
  return (t ? t.scope_ : Wg()).drafts_.push(r), r;
}
function hb(e) {
  return wa(e) || br(10, e), qg(e);
}
function qg(e) {
  if (!Da(e) || ks(e))
    return e;
  const t = e[Fr];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = ol(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = ol(e, !0);
  return Zo(r, (n, a) => {
    Hg(r, n, qg(a));
  }), t && (t.finalized_ = !1), r;
}
var Pr = new mb(), wc = Pr.produce;
Pr.produceWithPatches.bind(
  Pr
);
Pr.setAutoFreeze.bind(Pr);
Pr.setUseStrictShallowCopy.bind(Pr);
Pr.applyPatches.bind(Pr);
var Pf = Pr.createDraft.bind(Pr), Rf = Pr.finishDraft.bind(Pr), pb = {
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
}, bb = {
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
}, yb = {
  transform(e, t) {
    var {
      current: r,
      affinity: n
    } = e;
    if (r != null) {
      var a = U.transform(r, t, {
        affinity: n
      });
      e.current = a, a == null && e.unref();
    }
  }
}, hs = /* @__PURE__ */ new WeakMap(), ps = /* @__PURE__ */ new WeakMap(), Vo = /* @__PURE__ */ new WeakMap(), Ug = /* @__PURE__ */ new WeakMap(), Tf = /* @__PURE__ */ new WeakMap(), Nf = /* @__PURE__ */ new WeakMap(), If = /* @__PURE__ */ new WeakMap(), L = {
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
          newPath: g
        } = t;
        if (L.equals(d, g))
          return n;
        if (L.isAncestor(d, n) || L.equals(d, n)) {
          var p = g.slice();
          return L.endsBefore(d, g) && d.length < g.length && (p[d.length - 1] -= 1), p.concat(n.slice(d.length));
        } else
          L.isSibling(d, g) && (L.isAncestor(g, n) || L.equals(g, n)) ? L.endsBefore(d, n) ? n[d.length - 1] -= 1 : n[d.length - 1] += 1 : L.endsBefore(g, n) || L.equals(g, n) || L.isAncestor(g, n) ? (L.endsBefore(d, n) && (n[d.length - 1] -= 1), n[g.length - 1] += 1) : L.endsBefore(d, n) && (L.equals(g, n) && (n[g.length - 1] += 1), n[d.length - 1] -= 1);
        break;
      }
    }
    return n;
  }
};
function ei(e) {
  "@babel/helpers - typeof";
  return ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ei(e);
}
function Cb(e, t) {
  if (ei(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ei(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Eb(e) {
  var t = Cb(e, "string");
  return ei(t) === "symbol" ? t : String(t);
}
function gr(e, t, r) {
  return t = Eb(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Mf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ao(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mf(Object(r), !0).forEach(function(n) {
      gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var wb = (e, t, r) => {
  switch (r.type) {
    case "insert_node": {
      var {
        path: n,
        node: a
      } = r, o = fe.parent(e, n), i = n[n.length - 1];
      if (i > o.children.length)
        throw new Error('Cannot apply an "insert_node" operation at path ['.concat(n, "] because the destination is past the end of the node."));
      if (o.children.splice(i, 0, a), t)
        for (var [s, u] of U.points(t))
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
      var g = fe.leaf(e, l), p = g.text.slice(0, c), h = g.text.slice(c);
      if (g.text = p + d + h, t)
        for (var [f, m] of U.points(t))
          t[m] = Ge.transform(f, r);
      break;
    }
    case "merge_node": {
      var {
        path: b
      } = r, E = fe.get(e, b), y = L.previous(b), w = fe.get(e, y), S = fe.parent(e, b), D = b[b.length - 1];
      if (Oe.isText(E) && Oe.isText(w))
        w.text += E.text;
      else if (!Oe.isText(E) && !Oe.isText(w))
        w.children.push(...E.children);
      else
        throw new Error('Cannot apply a "merge_node" operation at path ['.concat(b, "] to nodes of different interfaces: ").concat(Yt.stringify(E), " ").concat(Yt.stringify(w)));
      if (S.children.splice(D, 1), t)
        for (var [x, B] of U.points(t))
          t[B] = Ge.transform(x, r);
      break;
    }
    case "move_node": {
      var {
        path: O,
        newPath: A
      } = r;
      if (L.isAncestor(O, A))
        throw new Error("Cannot move a path [".concat(O, "] to new path [").concat(A, "] because the destination is inside itself."));
      var _ = fe.get(e, O), P = fe.parent(e, O), $ = O[O.length - 1];
      P.children.splice($, 1);
      var N = L.transform(O, r), R = fe.get(e, L.parent(N)), M = N[N.length - 1];
      if (R.children.splice(M, 0, _), t)
        for (var [F, T] of U.points(t))
          t[T] = Ge.transform(F, r);
      break;
    }
    case "remove_node": {
      var {
        path: k
      } = r, H = k[k.length - 1], K = fe.parent(e, k);
      if (K.children.splice(H, 1), t)
        for (var [X, Q] of U.points(t)) {
          var I = Ge.transform(X, r);
          if (t != null && I != null)
            t[Q] = I;
          else {
            var z = void 0, V = void 0;
            for (var [q, te] of fe.texts(e))
              if (L.compare(te, k) === -1)
                z = [q, te];
              else {
                V = [q, te];
                break;
              }
            var re = !1;
            z && V && (L.equals(V[1], k) ? re = !L.hasPrevious(V[1]) : re = L.common(z[1], k).length < L.common(V[1], k).length), z && !re ? (X.path = z[1], X.offset = z[0].text.length) : V ? (X.path = V[1], X.offset = 0) : t = null;
          }
        }
      break;
    }
    case "remove_text": {
      var {
        path: le,
        offset: oe,
        text: ge
      } = r;
      if (ge.length === 0)
        break;
      var ce = fe.leaf(e, le), Y = ce.text.slice(0, oe), pe = ce.text.slice(oe + ge.length);
      if (ce.text = Y + pe, t)
        for (var [Se, ye] of U.points(t))
          t[ye] = Ge.transform(Se, r);
      break;
    }
    case "set_node": {
      var {
        path: we,
        properties: de,
        newProperties: Ee
      } = r;
      if (we.length === 0)
        throw new Error("Cannot set properties on the root node!");
      var he = fe.get(e, we);
      for (var me in Ee) {
        if (me === "children" || me === "text")
          throw new Error('Cannot set the "'.concat(me, '" property of nodes!'));
        var be = Ee[me];
        be == null ? delete he[me] : he[me] = be;
      }
      for (var Ie in de)
        Ee.hasOwnProperty(Ie) || delete he[Ie];
      break;
    }
    case "set_selection": {
      var {
        newProperties: Re
      } = r;
      if (Re == null)
        t = Re;
      else {
        if (t == null) {
          if (!U.isRange(Re))
            throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(Yt.stringify(Re), " when there is no current selection."));
          t = Ao({}, Re);
        }
        for (var je in Re) {
          var bt = Re[je];
          if (bt == null) {
            if (je === "anchor" || je === "focus")
              throw new Error('Cannot remove the "'.concat(je, '" selection property'));
            delete t[je];
          } else
            t[je] = bt;
        }
      }
      break;
    }
    case "split_node": {
      var {
        path: _e,
        position: Ce,
        properties: ke
      } = r;
      if (_e.length === 0)
        throw new Error('Cannot apply a "split_node" operation at path ['.concat(_e, "] because the root node cannot be split."));
      var ze = fe.get(e, _e), _t = fe.parent(e, _e), et = _e[_e.length - 1], xt;
      if (Oe.isText(ze)) {
        var mt = ze.text.slice(0, Ce), Ze = ze.text.slice(Ce);
        ze.text = mt, xt = Ao(Ao({}, ke), {}, {
          text: Ze
        });
      } else {
        var ot = ze.children.slice(0, Ce), Wt = ze.children.slice(Ce);
        ze.children = ot, xt = Ao(Ao({}, ke), {}, {
          children: Wt
        });
      }
      if (_t.children.splice(et + 1, 0, xt), t)
        for (var [Et, se] of U.points(t))
          t[se] = Ge.transform(Et, r);
      break;
    }
  }
  return t;
}, Db = {
  transform(e, t) {
    e.children = Pf(e.children);
    var r = e.selection && Pf(e.selection);
    try {
      r = wb(e, r, t);
    } finally {
      e.children = Rf(e.children), r ? e.selection = wa(r) ? Rf(r) : r : e.selection = null;
    }
  }
}, Sb = {
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
}, xb = {
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
}, Gg = (e, t) => {
  for (var r in e) {
    var n = e[r], a = t[r];
    if (Jt(n) && Jt(a)) {
      if (!Gg(n, a))
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
function Ob(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function $n(e, t) {
  if (e == null)
    return {};
  var r = Ob(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
var Bb = ["anchor", "focus"];
function jf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ab(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jf(Object(r), !0).forEach(function(n) {
      gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var U = {
  edges(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: r = !1
    } = t, {
      anchor: n,
      focus: a
    } = e;
    return U.isBackward(e) === r ? [n, a] : [a, n];
  },
  end(e) {
    var [, t] = U.edges(e);
    return t;
  },
  equals(e, t) {
    return Ge.equals(e.anchor, t.anchor) && Ge.equals(e.focus, t.focus);
  },
  includes(e, t) {
    if (U.isRange(t)) {
      if (U.includes(e, t.anchor) || U.includes(e, t.focus))
        return !0;
      var [r, n] = U.edges(e), [a, o] = U.edges(t);
      return Ge.isBefore(r, a) && Ge.isAfter(n, o);
    }
    var [i, s] = U.edges(e), u = !1, l = !1;
    return Ge.isPoint(t) ? (u = Ge.compare(t, i) >= 0, l = Ge.compare(t, s) <= 0) : (u = L.compare(t, i.path) >= 0, l = L.compare(t, s.path) <= 0), u && l;
  },
  intersection(e, t) {
    var r = $n(e, Bb), [n, a] = U.edges(e), [o, i] = U.edges(t), s = Ge.isBefore(n, o) ? o : n, u = Ge.isBefore(a, i) ? a : i;
    return Ge.isBefore(u, s) ? null : Ab({
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
    return !U.isCollapsed(e);
  },
  isForward(e) {
    return !U.isBackward(e);
  },
  isRange(e) {
    return Jt(e) && Ge.isPoint(e.anchor) && Ge.isPoint(e.focus);
  },
  *points(e) {
    yield [e.anchor, "anchor"], yield [e.focus, "focus"];
  },
  start(e) {
    var [t] = U.edges(e);
    return t;
  },
  transform(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return wc(e, (n) => {
      if (n === null)
        return null;
      var {
        affinity: a = "inward"
      } = r, o, i;
      if (a === "inward") {
        var s = U.isCollapsed(n);
        U.isForward(n) ? (o = "forward", i = s ? o : "backward") : (o = "backward", i = s ? o : "forward");
      } else
        a === "outward" ? U.isForward(n) ? (o = "backward", i = "forward") : (o = "forward", i = "backward") : (o = a, i = a);
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
}, _f = (e) => Jt(e) && fe.isNodeList(e.children) && !C.isEditor(e), ve = {
  isAncestor(e) {
    return Jt(e) && fe.isNodeList(e.children);
  },
  isElement: _f,
  isElementList(e) {
    return Array.isArray(e) && e.every((t) => ve.isElement(t));
  },
  isElementProps(e) {
    return e.children !== void 0;
  },
  isElementType: function(t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
    return _f(t) && t[n] === r;
  },
  matches(e, t) {
    for (var r in t)
      if (r !== "children" && e[r] !== t[r])
        return !1;
    return !0;
  }
}, $b = ["children"], Fb = ["text"], Lf = /* @__PURE__ */ new WeakMap(), fe = {
  ancestor(e, t) {
    var r = fe.get(e, t);
    if (Oe.isText(r))
      throw new Error("Cannot get the ancestor node at path [".concat(t, "] because it refers to a text node instead: ").concat(Yt.stringify(r)));
    return r;
  },
  ancestors(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var n of L.ancestors(t, r)) {
        var a = fe.ancestor(e, n), o = [a, n];
        yield o;
      }
    }();
  },
  child(e, t) {
    if (Oe.isText(e))
      throw new Error("Cannot get the child of a text node: ".concat(Yt.stringify(e)));
    var r = e.children[t];
    if (r == null)
      throw new Error("Cannot get child at index `".concat(t, "` in node: ").concat(Yt.stringify(e)));
    return r;
  },
  children(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var {
        reverse: n = !1
      } = r, a = fe.ancestor(e, t), {
        children: o
      } = a, i = n ? o.length - 1 : 0; n ? i >= 0 : i < o.length; ) {
        var s = fe.child(a, i), u = t.concat(i);
        yield [s, u], i = n ? i - 1 : i + 1;
      }
    }();
  },
  common(e, t, r) {
    var n = L.common(t, r), a = fe.get(e, n);
    return [a, n];
  },
  descendant(e, t) {
    var r = fe.get(e, t);
    if (C.isEditor(r))
      throw new Error("Cannot get the descendant node at path [".concat(t, "] because it refers to the root editor node instead: ").concat(Yt.stringify(r)));
    return r;
  },
  descendants(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of fe.nodes(e, t))
        n.length !== 0 && (yield [r, n]);
    }();
  },
  elements(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of fe.nodes(e, t))
        ve.isElement(r) && (yield [r, n]);
    }();
  },
  extractProps(e) {
    if (ve.isAncestor(e)) {
      var t = $n(e, $b);
      return t;
    } else {
      var t = $n(e, Fb);
      return t;
    }
  },
  first(e, t) {
    for (var r = t.slice(), n = fe.get(e, r); n && !(Oe.isText(n) || n.children.length === 0); )
      n = n.children[0], r.push(0);
    return [n, r];
  },
  fragment(e, t) {
    if (Oe.isText(e))
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(Yt.stringify(e)));
    var r = wc({
      children: e.children
    }, (n) => {
      var [a, o] = U.edges(t), i = fe.nodes(n, {
        reverse: !0,
        pass: (g) => {
          var [, p] = g;
          return !U.includes(t, p);
        }
      });
      for (var [, s] of i) {
        if (!U.includes(t, s)) {
          var u = fe.parent(n, s), l = s[s.length - 1];
          u.children.splice(l, 1);
        }
        if (L.equals(s, o.path)) {
          var c = fe.leaf(n, s);
          c.text = c.text.slice(0, o.offset);
        }
        if (L.equals(s, a.path)) {
          var d = fe.leaf(n, s);
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
        throw new Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(Yt.stringify(e)));
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
    return Oe.isText(e) || ve.isElement(e) || C.isEditor(e);
  },
  isNodeList(e) {
    if (!Array.isArray(e))
      return !1;
    var t = Lf.get(e);
    if (t !== void 0)
      return t;
    var r = e.every((n) => fe.isNode(n));
    return Lf.set(e, r), r;
  },
  last(e, t) {
    for (var r = t.slice(), n = fe.get(e, r); n && !(Oe.isText(n) || n.children.length === 0); ) {
      var a = n.children.length - 1;
      n = n.children[a], r.push(a);
    }
    return [n, r];
  },
  leaf(e, t) {
    var r = fe.get(e, t);
    if (!Oe.isText(r))
      throw new Error("Cannot get the leaf node at path [".concat(t, "] because it refers to a non-leaf node: ").concat(Yt.stringify(r)));
    return r;
  },
  levels(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var n of L.levels(t, r)) {
        var a = fe.get(e, n);
        yield [a, n];
      }
    }();
  },
  matches(e, t) {
    return ve.isElement(e) && ve.isElementProps(t) && ve.matches(e, t) || Oe.isText(e) && Oe.isTextProps(t) && Oe.matches(e, t);
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
          L.isAncestor(s, a) && (l = a[s.length]), s = s.concat(l), u = fe.get(e, s);
          continue;
        }
        if (s.length === 0)
          break;
        if (!n) {
          var c = L.next(s);
          if (fe.has(e, c)) {
            s = c, u = fe.get(e, s);
            continue;
          }
        }
        if (n && s[s.length - 1] !== 0) {
          var d = L.previous(s);
          s = d, u = fe.get(e, s);
          continue;
        }
        s = L.parent(s), u = fe.get(e, s), i.add(u);
      }
    }();
  },
  parent(e, t) {
    var r = L.parent(t), n = fe.get(e, r);
    if (Oe.isText(n))
      throw new Error("Cannot get the parent of path [".concat(t, "] because it does not exist in the root."));
    return n;
  },
  string(e) {
    return Oe.isText(e) ? e.text : e.children.map(fe.string).join("");
  },
  texts(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of fe.nodes(e, t))
        Oe.isText(r) && (yield [r, n]);
    }();
  }
};
function kf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kf(Object(r), !0).forEach(function(n) {
      gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Hn = {
  isNodeOperation(e) {
    return Hn.isOperation(e) && e.type.endsWith("_node");
  },
  isOperation(e) {
    if (!Jt(e))
      return !1;
    switch (e.type) {
      case "insert_node":
        return L.isPath(e.path) && fe.isNode(e.node);
      case "insert_text":
        return typeof e.offset == "number" && typeof e.text == "string" && L.isPath(e.path);
      case "merge_node":
        return typeof e.position == "number" && L.isPath(e.path) && Jt(e.properties);
      case "move_node":
        return L.isPath(e.path) && L.isPath(e.newPath);
      case "remove_node":
        return L.isPath(e.path) && fe.isNode(e.node);
      case "remove_text":
        return typeof e.offset == "number" && typeof e.text == "string" && L.isPath(e.path);
      case "set_node":
        return L.isPath(e.path) && Jt(e.properties) && Jt(e.newProperties);
      case "set_selection":
        return e.properties === null && U.isRange(e.newProperties) || e.newProperties === null && U.isRange(e.properties) || Jt(e.properties) && Jt(e.newProperties);
      case "split_node":
        return L.isPath(e.path) && typeof e.position == "number" && Jt(e.properties);
      default:
        return !1;
    }
  },
  isOperationList(e) {
    return Array.isArray(e) && e.every((t) => Hn.isOperation(t));
  },
  isSelectionOperation(e) {
    return Hn.isOperation(e) && e.type.endsWith("_selection");
  },
  isTextOperation(e) {
    return Hn.isOperation(e) && e.type.endsWith("_text");
  },
  inverse(e) {
    switch (e.type) {
      case "insert_node":
        return Ot(Ot({}, e), {}, {
          type: "remove_node"
        });
      case "insert_text":
        return Ot(Ot({}, e), {}, {
          type: "remove_text"
        });
      case "merge_node":
        return Ot(Ot({}, e), {}, {
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
          return Ot(Ot({}, e), {}, {
            path: t,
            newPath: r
          });
        var n = L.transform(r, e), a = L.transform(L.next(r), e);
        return Ot(Ot({}, e), {}, {
          path: n,
          newPath: a
        });
      }
      case "remove_node":
        return Ot(Ot({}, e), {}, {
          type: "insert_node"
        });
      case "remove_text":
        return Ot(Ot({}, e), {}, {
          type: "insert_text"
        });
      case "set_node": {
        var {
          properties: o,
          newProperties: i
        } = e;
        return Ot(Ot({}, e), {}, {
          properties: i,
          newProperties: o
        });
      }
      case "set_selection": {
        var {
          properties: s,
          newProperties: u
        } = e;
        return s == null ? Ot(Ot({}, e), {}, {
          properties: u,
          newProperties: null
        }) : u == null ? Ot(Ot({}, e), {}, {
          properties: null,
          newProperties: s
        }) : Ot(Ot({}, e), {}, {
          properties: u,
          newProperties: s
        });
      }
      case "split_node":
        return Ot(Ot({}, e), {}, {
          type: "merge_node",
          path: L.next(e.path)
        });
    }
  }
}, zf = /* @__PURE__ */ new WeakMap(), Pb = (e) => {
  var t = zf.get(e);
  if (t !== void 0)
    return t;
  if (!Jt(e))
    return !1;
  var r = typeof e.addMark == "function" && typeof e.apply == "function" && typeof e.deleteFragment == "function" && typeof e.insertBreak == "function" && typeof e.insertSoftBreak == "function" && typeof e.insertFragment == "function" && typeof e.insertNode == "function" && typeof e.insertText == "function" && typeof e.isElementReadOnly == "function" && typeof e.isInline == "function" && typeof e.isSelectable == "function" && typeof e.isVoid == "function" && typeof e.normalizeNode == "function" && typeof e.onChange == "function" && typeof e.removeMark == "function" && typeof e.getDirtyPaths == "function" && (e.marks === null || Jt(e.marks)) && (e.selection === null || U.isRange(e.selection)) && fe.isNodeList(e.children) && Hn.isOperationList(e.operations);
  return zf.set(e, r), r;
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
    return Pb(e);
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
}, SN = {
  isLocation(e) {
    return L.isPath(e) || Ge.isPoint(e) || U.isRange(e);
  }
}, Rb = {
  isSpan(e) {
    return Array.isArray(e) && e.length === 2 && e.every(L.isPath);
  }
};
function Vf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vf(Object(r), !0).forEach(function(n) {
      gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vf(Object(r)).forEach(function(n) {
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
    return Jt(e) && typeof e.offset == "number" && L.isPath(e.path);
  },
  transform(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return wc(e, (n) => {
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
            (t.position < i || t.position === i && a === "forward") && (n.offset -= t.position, n.path = L.transform(o, t, Hf(Hf({}, r), {}, {
              affinity: "forward"
            })));
          } else
            n.path = L.transform(o, t, r);
          break;
        }
      }
    });
  }
}, Wf = void 0, Yt = {
  setScrubber(e) {
    Wf = e;
  },
  stringify(e) {
    return JSON.stringify(e, Wf);
  }
}, Tb = ["text"], Nb = ["anchor", "focus"];
function Kf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kf(Object(r), !0).forEach(function(n) {
      gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kf(Object(r)).forEach(function(n) {
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
      var i = $n(o, Tb);
      return i;
    }
    return Gg(n ? a(e) : e, n ? a(t) : t);
  },
  isText(e) {
    return Jt(e) && typeof e.text == "string";
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
    var r = [yn({}, e)];
    for (var n of t) {
      var a = $n(n, Nb), [o, i] = U.edges(n), s = [], u = 0, l = o.offset, c = i.offset;
      for (var d of r) {
        var {
          length: g
        } = d.text, p = u;
        if (u += g, l <= p && u <= c) {
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
          m = yn(yn({}, h), {}, {
            text: h.text.slice(b)
          }), h = yn(yn({}, h), {}, {
            text: h.text.slice(0, b)
          });
        }
        if (l > p) {
          var E = l - p;
          f = yn(yn({}, h), {}, {
            text: h.text.slice(0, E)
          }), h = yn(yn({}, h), {}, {
            text: h.text.slice(E)
          });
        }
        Object.assign(h, a), f && s.push(f), s.push(h), m && s.push(m);
      }
      r = s;
    }
    return r;
  }
}, Dc = (e) => e.selection ? e.selection : e.children.length > 0 ? C.end(e, []) : [0], yo = (e, t) => {
  var [r] = C.node(e, t);
  return (n) => n === r;
}, Sc = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = !r, a = r ? kb(t) : t, o = Ke.None, i = Ke.None, s = 0, u = null, l = null;
  for (var c of a) {
    var d = c.codePointAt(0);
    if (!d)
      break;
    var g = Qb(c, d);
    if ([o, i] = n ? [i, g] : [g, o], Za(o, Ke.ZWJ) && Za(i, Ke.ExtPict) && (n ? u = qf(t.substring(0, s)) : u = qf(t.substring(0, t.length - s)), !u) || Za(o, Ke.RI) && Za(i, Ke.RI) && (l !== null ? l = !l : n ? l = !0 : l = ny(t.substring(0, t.length - s)), !l) || o !== Ke.None && i !== Ke.None && ey(o, i))
      break;
    s += c.length;
  }
  return s || 1;
}, Ib = /\s/, Mb = /[\u002B\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, jb = /['\u2018\u2019]/, _b = function(t) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = 0, a = !1; t.length > 0; ) {
    var o = Sc(t, r), [i, s] = xc(t, o, r);
    if (Lb(i, s, r))
      a = !0, n += o;
    else if (!a)
      n += o;
    else
      break;
    t = s;
  }
  return n;
}, xc = (e, t, r) => {
  if (r) {
    var n = e.length - t;
    return [e.slice(n, e.length), e.slice(0, n)];
  }
  return [e.slice(0, t), e.slice(t)];
}, Lb = function e(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  if (Ib.test(t))
    return !1;
  if (jb.test(t)) {
    var a = Sc(r, n), [o, i] = xc(r, a, n);
    if (e(o, i, n))
      return !0;
  }
  return !Mb.test(t);
}, kb = function* (t) {
  for (var r = t.length - 1, n = 0; n < t.length; n++) {
    var a = t.charAt(r - n);
    if (Vb(a.charCodeAt(0))) {
      var o = t.charAt(r - n - 1);
      if (zb(o.charCodeAt(0))) {
        yield o + a, n++;
        continue;
      }
    }
    yield a;
  }
}, zb = (e) => e >= 55296 && e <= 56319, Vb = (e) => e >= 56320 && e <= 57343, Ke;
(function(e) {
  e[e.None = 0] = "None", e[e.Extend = 1] = "Extend", e[e.ZWJ = 2] = "ZWJ", e[e.RI = 4] = "RI", e[e.Prepend = 8] = "Prepend", e[e.SpacingMark = 16] = "SpacingMark", e[e.L = 32] = "L", e[e.V = 64] = "V", e[e.T = 128] = "T", e[e.LV = 256] = "LV", e[e.LVT = 512] = "LVT", e[e.ExtPict = 1024] = "ExtPict", e[e.Any = 2048] = "Any";
})(Ke || (Ke = {}));
var Hb = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/, Wb = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/, Kb = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/, qb = /^[\u1100-\u115F\uA960-\uA97C]$/, Ub = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/, Gb = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/, Xb = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/, Yb = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/, Zb = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/, Qb = (e, t) => {
  var r = Ke.Any;
  return e.search(Hb) !== -1 && (r |= Ke.Extend), t === 8205 && (r |= Ke.ZWJ), t >= 127462 && t <= 127487 && (r |= Ke.RI), e.search(Wb) !== -1 && (r |= Ke.Prepend), e.search(Kb) !== -1 && (r |= Ke.SpacingMark), e.search(qb) !== -1 && (r |= Ke.L), e.search(Ub) !== -1 && (r |= Ke.V), e.search(Gb) !== -1 && (r |= Ke.T), e.search(Xb) !== -1 && (r |= Ke.LV), e.search(Yb) !== -1 && (r |= Ke.LVT), e.search(Zb) !== -1 && (r |= Ke.ExtPict), r;
};
function Za(e, t) {
  return (e & t) !== 0;
}
var Jb = [
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
function ey(e, t) {
  return Jb.findIndex((r) => Za(e, r[0]) && Za(t, r[1])) === -1;
}
var ty = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/, qf = (e) => e.search(ty) !== -1, ry = /(?:\uD83C[\uDDE6-\uDDFF])+$/g, ny = (e) => {
  var t = e.match(ry);
  if (t === null)
    return !1;
  var r = t[0].length / 2;
  return r % 2 === 1;
}, ay = {
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
        at: a = Dc(e)
      } = r;
      if (L.isPath(a) && (a = C.range(e, a)), U.isRange(a))
        if (U.isCollapsed(a))
          a = a.anchor;
        else {
          var o = U.end(a);
          if (!n && C.void(e, {
            at: o
          }))
            return;
          var i = U.start(a), s = C.pointRef(e, i), u = C.pointRef(e, o);
          J.delete(e, {
            at: a,
            voids: n
          });
          var l = s.unref(), c = u.unref();
          a = l || c, J.setSelection(e, {
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
          offset: g
        } = a;
        t.length > 0 && e.apply({
          type: "insert_text",
          path: d,
          offset: g,
          text: t
        });
      }
    });
  }
};
function Uf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uf(Object(r), !0).forEach(function(n) {
      gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var J = Fi(Fi(Fi(Fi({}, Db), Sb), xb), ay), Ji = /* @__PURE__ */ new WeakMap(), oy = (e) => Ji.get(e) || !1, iy = (e, t, r) => {
  var n = Ji.get(e) || !1;
  Ji.set(e, !0);
  try {
    t(), r();
  } finally {
    Ji.set(e, n);
  }
};
function Xg(e, t, r) {
  var n = hs.get(e) || [], a = ps.get(e) || /* @__PURE__ */ new Set(), o, i, s = (d) => {
    if (d) {
      var g = d.join(",");
      i.has(g) || (i.add(g), o.push(d));
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
  hs.set(e, o), ps.set(e, i);
}
var sy = (e, t) => {
  for (var r of C.pathRefs(e))
    pb.transform(r, t);
  for (var n of C.pointRefs(e))
    bb.transform(n, t);
  for (var a of C.rangeRefs(e))
    yb.transform(a, t);
  if (!oy(e)) {
    var o = L.operationCanTransformPath(t) ? (i) => L.transform(i, t) : void 0;
    Xg(e, e.getDirtyPaths(t), o);
  }
  J.transform(e, t), e.operations.push(t), C.normalize(e, {
    operation: t
  }), t.type === "set_selection" && (e.marks = null), Vo.get(e) || (Vo.set(e, !0), Promise.resolve().then(() => {
    Vo.set(e, !1), e.onChange({
      operation: t
    }), e.operations = [];
  }));
}, uy = (e, t) => {
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
      } = t, o = L.levels(a), i = Oe.isText(n) ? [] : Array.from(fe.nodes(n), (A) => {
        var [, _] = A;
        return a.concat(_);
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
      var g = [], p = [];
      for (var h of L.ancestors(c)) {
        var f = L.transform(h, t);
        g.push(f);
      }
      for (var m of L.ancestors(d)) {
        var b = L.transform(m, t);
        p.push(b);
      }
      var E = p[p.length - 1], y = d[d.length - 1], w = E.concat(y);
      return [...g, ...p, w];
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
      } = t, B = L.levels(x), O = L.next(x);
      return [...B, O];
    }
    default:
      return [];
  }
}, ly = (e) => {
  var {
    selection: t
  } = e;
  return t ? fe.fragment(e, t) : [];
}, cy = (e, t) => {
  var [r, n] = t;
  if (!Oe.isText(r)) {
    if (ve.isElement(r) && r.children.length === 0) {
      var a = {
        text: ""
      };
      J.insertNodes(e, a, {
        at: n.concat(0),
        voids: !0
      });
      return;
    }
    for (var o = C.isEditor(r) ? !1 : ve.isElement(r) && (e.isInline(r) || r.children.length === 0 || Oe.isText(r.children[0]) || e.isInline(r.children[0])), i = 0, s = 0; s < r.children.length; s++, i++) {
      var u = fe.get(e, n);
      if (!Oe.isText(u)) {
        var l = u.children[i], c = u.children[i - 1], d = s === r.children.length - 1, g = Oe.isText(l) || ve.isElement(l) && e.isInline(l);
        if (g !== o)
          J.removeNodes(e, {
            at: n.concat(i),
            voids: !0
          }), i--;
        else if (ve.isElement(l)) {
          if (e.isInline(l)) {
            if (c == null || !Oe.isText(c)) {
              var p = {
                text: ""
              };
              J.insertNodes(e, p, {
                at: n.concat(i),
                voids: !0
              }), i++;
            } else if (d) {
              var h = {
                text: ""
              };
              J.insertNodes(e, h, {
                at: n.concat(i + 1),
                voids: !0
              }), i++;
            }
          }
        } else
          c != null && Oe.isText(c) && (Oe.equals(l, c, {
            loose: !0
          }) ? (J.mergeNodes(e, {
            at: n.concat(i),
            voids: !0
          }), i--) : c.text === "" ? (J.removeNodes(e, {
            at: n.concat(i - 1),
            voids: !0
          }), i--) : l.text === "" && (J.removeNodes(e, {
            at: n.concat(i),
            voids: !0
          }), i--));
      }
    }
  }
}, fy = (e, t) => {
  var {
    iteration: r,
    initialDirtyPathsLength: n
  } = t, a = n * 42;
  if (r > a)
    throw new Error("Could not completely normalize the editor after ".concat(a, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state."));
  return !0;
}, dy = function(t) {
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
        if (U.isRange(o)) {
          if (L.isAncestor(c, o.anchor.path) && L.isAncestor(c, o.focus.path))
            return [l, c];
        } else if (!L.equals(s, c))
          return [l, c];
      }
  }
};
function Gf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gf(Object(r), !0).forEach(function(n) {
      gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var vy = (e, t, r) => {
  var {
    selection: n
  } = e;
  if (n) {
    var a = (d, g) => {
      if (!Oe.isText(d))
        return !1;
      var [p, h] = C.parent(e, g);
      return !e.isVoid(p) || e.markableVoid(p);
    }, o = U.isExpanded(n), i = !1;
    if (!o) {
      var [s, u] = C.node(e, n);
      if (s && a(s, u)) {
        var [l] = C.parent(e, u);
        i = l && e.markableVoid(l);
      }
    }
    if (o || i)
      J.setNodes(e, {
        [t]: r
      }, {
        match: a,
        split: !0,
        voids: !0
      });
    else {
      var c = Xf(Xf({}, C.marks(e) || {}), {}, {
        [t]: r
      });
      e.marks = c, Vo.get(e) || e.onChange();
    }
  }
};
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
function Zf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yf(Object(r), !0).forEach(function(n) {
      gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var gy = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = C.point(t, r, {
    edge: "end"
  }), o = C.end(t, []), i = {
    anchor: a,
    focus: o
  }, {
    distance: s = 1
  } = n, u = 0, l;
  for (var c of C.positions(t, Zf(Zf({}, n), {}, {
    at: i
  }))) {
    if (u > s)
      break;
    u !== 0 && (l = c), u++;
  }
  return l;
};
function Qf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qf(Object(r), !0).forEach(function(n) {
      gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var my = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = C.start(t, []), o = C.point(t, r, {
    edge: "start"
  }), i = {
    anchor: a,
    focus: o
  }, {
    distance: s = 1
  } = n, u = 0, l;
  for (var c of C.positions(t, Jf(Jf({}, n), {}, {
    at: i,
    reverse: !0
  }))) {
    if (u > s)
      break;
    u !== 0 && (l = c), u++;
  }
  return l;
}, hy = (e, t) => {
  var {
    selection: r
  } = e;
  r && U.isCollapsed(r) && J.delete(e, {
    unit: t,
    reverse: !0
  });
}, py = (e, t) => {
  var {
    selection: r
  } = e;
  r && U.isCollapsed(r) && J.delete(e, {
    unit: t
  });
}, by = function(t) {
  var {
    direction: r = "forward"
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    selection: n
  } = t;
  n && U.isExpanded(n) && J.delete(t, {
    reverse: r === "backward"
  });
}, yy = (e, t) => [C.start(e, t), C.end(e, t)];
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
function td(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ed(Object(r), !0).forEach(function(n) {
      gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ed(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Cy = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return C.above(t, td(td({}, r), {}, {
    match: (n) => ve.isElement(n) && C.isElementReadOnly(t, n)
  }));
}, Ey = (e, t) => C.point(e, t, {
  edge: "end"
}), wy = (e, t) => {
  var r = C.path(e, t, {
    edge: "start"
  });
  return C.node(e, r);
}, Dy = (e, t) => {
  var r = C.range(e, t);
  return fe.fragment(e, r);
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
      gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Sy = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return C.above(t, nd(nd({}, r), {}, {
    match: (n) => ve.isElement(n) && C.isVoid(t, n)
  }));
}, xy = (e, t) => t.children.some((r) => ve.isElement(r) && C.isBlock(e, r)), Oy = (e, t) => t.children.some((r) => Oe.isText(r) || C.isInline(e, r)), By = (e, t) => fe.has(e, t), Ay = (e, t) => t.children.every((r) => Oe.isText(r)), $y = (e) => {
  J.splitNodes(e, {
    always: !0
  });
}, Fy = (e, t, r) => {
  J.insertNodes(e, t, r);
}, Py = (e) => {
  J.splitNodes(e, {
    always: !0
  });
};
function ad(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ry(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ad(Object(r), !0).forEach(function(n) {
      gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ad(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Ty = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    selection: a,
    marks: o
  } = t;
  if (a) {
    if (o) {
      var i = Ry({
        text: r
      }, o);
      J.insertNodes(t, i, {
        at: n.at,
        voids: n.voids
      });
    } else
      J.insertText(t, r, n);
    t.marks = null;
  }
}, Ny = (e, t) => !e.isInline(t), Iy = (e, t, r) => C.isStart(e, t, r) || C.isEnd(e, t, r), My = (e, t) => {
  var {
    children: r
  } = t, [n] = r;
  return r.length === 0 || r.length === 1 && Oe.isText(n) && n.text === "" && !e.isVoid(t);
}, jy = (e, t, r) => {
  var n = C.end(e, r);
  return Ge.equals(t, n);
}, _y = (e) => {
  var t = Ug.get(e);
  return t === void 0 ? !0 : t;
}, Ly = (e, t, r) => {
  if (t.offset !== 0)
    return !1;
  var n = C.start(e, r);
  return Ge.equals(t, n);
}, ky = (e, t) => {
  var r = C.path(e, t, {
    edge: "end"
  });
  return C.node(e, r);
}, zy = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = C.path(t, r, n), o = fe.leaf(t, a);
  return [o, a];
};
function Vy(e) {
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
      for (var [u, l] of fe.levels(e, s))
        if (o(u, l) && (i.push([u, l]), !a && ve.isElement(u) && C.isVoid(e, u)))
          break;
      n && i.reverse(), yield* i;
    }
  }();
}
var Hy = ["text"], Wy = ["text"], Ky = function(t) {
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
  if (U.isExpanded(n)) {
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
      var [l] = u, c = $n(l, Hy);
      return c;
    } else
      return {};
  }
  var {
    path: d
  } = a, [g] = C.leaf(t, d);
  if (a.offset === 0) {
    var p = C.previous(t, {
      at: d,
      match: Oe.isText
    }), h = C.above(t, {
      match: (w) => ve.isElement(w) && C.isVoid(t, w) && t.markableVoid(w)
    });
    if (!h) {
      var f = C.above(t, {
        match: (w) => ve.isElement(w) && C.isBlock(t, w)
      });
      if (p && f) {
        var [m, b] = p, [, E] = f;
        L.isAncestor(E, b) && (g = m);
      }
    }
  }
  var y = $n(g, Wy);
  return y;
}, qy = function(t) {
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
          o = (g) => c.children.includes(g);
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
}, Uy = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = C.path(t, r, n), o = fe.get(t, a);
  return [o, a];
};
function Gy(e) {
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
      if (Rb.isSpan(r))
        l = r[0], c = r[1];
      else {
        var d = C.path(e, r, {
          edge: "start"
        }), g = C.path(e, r, {
          edge: "end"
        });
        l = o ? g : d, c = o ? d : g;
      }
      var p = fe.nodes(e, {
        reverse: o,
        from: l,
        to: c,
        pass: (w) => {
          var [S] = w;
          return ve.isElement(S) ? !!(!i && (C.isVoid(e, S) || C.isElementReadOnly(e, S)) || s && !C.isSelectable(e, S)) : !1;
        }
      }), h = [], f;
      for (var [m, b] of p)
        if (!(s && ve.isElement(m) && !C.isSelectable(e, m))) {
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
var Xy = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    force: n = !1,
    operation: a
  } = r, o = (c) => hs.get(c) || [], i = (c) => ps.get(c) || /* @__PURE__ */ new Set(), s = (c) => {
    var d = o(c).pop(), g = d.join(",");
    return i(c).delete(g), d;
  };
  if (C.isNormalizing(t)) {
    if (n) {
      var u = Array.from(fe.nodes(t), (c) => {
        var [, d] = c;
        return d;
      }), l = new Set(u.map((c) => c.join(",")));
      hs.set(t, u), ps.set(t, l);
    }
    o(t).length !== 0 && C.withoutNormalizing(t, () => {
      for (var c of o(t))
        if (fe.has(t, c)) {
          var d = C.node(t, c), [g, p] = d;
          ve.isElement(g) && g.children.length === 0 && t.normalizeNode(d, {
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
        if (fe.has(t, b)) {
          var E = C.node(t, b);
          t.normalizeNode(E, {
            operation: a
          });
        }
        m++, h = o(t);
      }
    });
  }
}, Yy = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = C.path(t, r, n), o = L.parent(a), i = C.node(t, o);
  return i;
}, Zy = function(t, r) {
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
}, Qy = (e) => {
  var t = Tf.get(e);
  return t || (t = /* @__PURE__ */ new Set(), Tf.set(e, t)), t;
}, Jy = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    depth: a,
    edge: o
  } = n;
  if (L.isPath(r)) {
    if (o === "start") {
      var [, i] = fe.first(t, r);
      r = i;
    } else if (o === "end") {
      var [, s] = fe.last(t, r);
      r = s;
    }
  }
  return U.isRange(r) && (o === "start" ? r = U.start(r) : o === "end" ? r = U.end(r) : r = L.common(r.anchor.path, r.focus.path)), Ge.isPoint(r) && (r = r.path), a != null && (r = r.slice(0, a)), r;
}, eC = function(t, r) {
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
}, tC = (e) => {
  var t = Nf.get(e);
  return t || (t = /* @__PURE__ */ new Set(), Nf.set(e, t)), t;
}, rC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    edge: a = "start"
  } = n;
  if (L.isPath(r)) {
    var o;
    if (a === "end") {
      var [, i] = fe.last(t, r);
      o = i;
    } else {
      var [, s] = fe.first(t, r);
      o = s;
    }
    var u = fe.get(t, o);
    if (!Oe.isText(u))
      throw new Error("Cannot get the ".concat(a, " point in the node at path [").concat(r, "] because it has no ").concat(a, " text node."));
    return {
      path: o,
      offset: a === "end" ? u.text.length : 0
    };
  }
  if (U.isRange(r)) {
    var [l, c] = U.edges(r);
    return a === "start" ? l : c;
  }
  return r;
};
function nC(e) {
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
    var s = C.range(e, r), [u, l] = U.edges(s), c = a ? l : u, d = !1, g = "", p = 0, h = 0, f = 0;
    for (var [m, b] of C.nodes(e, {
      at: r,
      reverse: a,
      voids: o,
      ignoreNonSelectable: i
    })) {
      if (ve.isElement(m)) {
        if (!o && (e.isVoid(m) || e.isElementReadOnly(m))) {
          yield C.start(e, b);
          continue;
        }
        if (e.isInline(m))
          continue;
        if (C.hasInlines(e, m)) {
          var E = L.isAncestor(b, l.path) ? l : C.end(e, b), y = L.isAncestor(b, u.path) ? u : C.start(e, b);
          g = C.string(e, {
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
            if (g === "")
              break;
            p = S(g, n, a), g = xc(g, p, a)[1];
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
    function S(D, x, B) {
      return x === "character" ? Sc(D, B) : x === "word" ? _b(D, B) : x === "line" || x === "block" ? D.length : 1;
    }
  }();
}
var aC = function(t) {
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
          o = (g) => c.children.includes(g);
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
}, oC = function(t, r) {
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
}, iC = (e) => {
  var t = If.get(e);
  return t || (t = /* @__PURE__ */ new Set(), If.set(e, t)), t;
}, sC = (e, t, r) => {
  if (U.isRange(t) && !r)
    return t;
  var n = C.start(e, t), a = C.end(e, r || t);
  return {
    anchor: n,
    focus: a
  };
};
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
function uC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? od(Object(r), !0).forEach(function(n) {
      gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : od(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var lC = (e, t) => {
  var {
    selection: r
  } = e;
  if (r) {
    var n = (c, d) => {
      if (!Oe.isText(c))
        return !1;
      var [g, p] = C.parent(e, d);
      return !e.isVoid(g) || e.markableVoid(g);
    }, a = U.isExpanded(r), o = !1;
    if (!a) {
      var [i, s] = C.node(e, r);
      if (i && n(i, s)) {
        var [u] = C.parent(e, s);
        o = u && e.markableVoid(u);
      }
    }
    if (a || o)
      J.unsetNodes(e, t, {
        match: n,
        split: !0,
        voids: !0
      });
    else {
      var l = uC({}, C.marks(e) || {});
      delete l[t], e.marks = l, Vo.get(e) || e.onChange();
    }
  }
}, cC = (e, t) => {
  Ug.set(e, t);
}, fC = (e, t) => C.point(e, t, {
  edge: "start"
}), dC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: a = !1
  } = n, o = C.range(t, r), [i, s] = U.edges(o), u = "";
  for (var [l, c] of C.nodes(t, {
    at: o,
    match: Oe.isText,
    voids: a
  })) {
    var d = l.text;
    L.equals(c, s.path) && (d = d.slice(0, s.offset)), L.equals(c, i.path) && (d = d.slice(i.offset)), u += d;
  }
  return u;
}, vC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: a = !1
  } = n, [o, i] = U.edges(r);
  if (o.offset !== 0 || i.offset !== 0 || U.isCollapsed(r) || L.hasPrevious(i.path))
    return r;
  var s = C.above(t, {
    at: i,
    match: (h) => ve.isElement(h) && C.isBlock(t, h),
    voids: a
  }), u = s ? s[1] : [], l = C.start(t, o), c = {
    anchor: l,
    focus: i
  }, d = !0;
  for (var [g, p] of C.nodes(t, {
    at: c,
    match: Oe.isText,
    reverse: !0,
    voids: a
  })) {
    if (d) {
      d = !1;
      continue;
    }
    if (g.text !== "" || L.isBefore(p, u)) {
      i = {
        path: p,
        offset: g.text.length
      };
      break;
    }
  }
  return {
    anchor: o,
    focus: i
  };
}, gC = (e, t) => {
  var r = C.isNormalizing(e);
  C.setNormalizing(e, !1);
  try {
    t();
  } finally {
    C.setNormalizing(e, r);
  }
  C.normalize(e);
}, mC = function(t) {
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
      if (U.isRange(l) && U.isCollapsed(l) && (d = !0, l = l.anchor), Ge.isPoint(l)) {
        var g = C.void(t, {
          at: l,
          mode: "highest"
        });
        if (!u && g) {
          var [, p] = g;
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
        J.removeNodes(t, {
          at: l,
          voids: u
        });
        return;
      }
      if (!U.isCollapsed(l)) {
        if (!c) {
          var [, m] = U.edges(l), b = C.end(t, []);
          Ge.equals(m, b) || (l = C.unhangRange(t, l, {
            voids: u
          }));
        }
        var [E, y] = U.edges(l), w = C.above(t, {
          match: (Y) => ve.isElement(Y) && C.isBlock(t, Y),
          at: E,
          voids: u
        }), S = C.above(t, {
          match: (Y) => ve.isElement(Y) && C.isBlock(t, Y),
          at: y,
          voids: u
        }), D = w && S && !L.equals(w[1], S[1]), x = L.equals(E.path, y.path), B = u ? null : (n = C.void(t, {
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
        if (B) {
          var A = C.before(t, E);
          A && w && L.isAncestor(w[1], A.path) && (E = A);
        }
        if (O) {
          var _ = C.after(t, y);
          _ && S && L.isAncestor(S[1], _.path) && (y = _);
        }
        var P = [], $;
        for (var N of C.nodes(t, {
          at: l,
          voids: u
        })) {
          var [R, M] = N;
          $ && L.compare(M, $) === 0 || (!u && ve.isElement(R) && (C.isVoid(t, R) || C.isElementReadOnly(t, R)) || !L.isCommon(M, E.path) && !L.isCommon(M, y.path)) && (P.push(N), $ = M);
        }
        var F = Array.from(P, (Y) => {
          var [, pe] = Y;
          return C.pathRef(t, pe);
        }), T = C.pointRef(t, E), k = C.pointRef(t, y), H = "";
        if (!x && !B) {
          var K = T.current, [X] = C.leaf(t, K), {
            path: Q
          } = K, {
            offset: I
          } = E, z = X.text.slice(I);
          z.length > 0 && (t.apply({
            type: "remove_text",
            path: Q,
            offset: I,
            text: z
          }), H = z);
        }
        if (F.reverse().map((Y) => Y.unref()).filter((Y) => Y !== null).forEach((Y) => J.removeNodes(t, {
          at: Y,
          voids: u
        })), !O) {
          var V = k.current, [q] = C.leaf(t, V), {
            path: te
          } = V, re = x ? E.offset : 0, le = q.text.slice(re, y.offset);
          le.length > 0 && (t.apply({
            type: "remove_text",
            path: te,
            offset: re,
            text: le
          }), H = le);
        }
        !x && D && k.current && T.current && J.mergeNodes(t, {
          at: k.current,
          hanging: !0,
          voids: u
        }), d && o && i === "character" && H.length > 1 && H.match(/[\u0E00-\u0E7F]+/) && J.insertText(t, H.slice(0, H.length - s));
        var oe = T.unref(), ge = k.unref(), ce = o ? oe || ge : ge || oe;
        r.at == null && ce && J.select(t, ce);
      }
    }
  });
}, hC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  C.withoutNormalizing(t, () => {
    var {
      hanging: a = !1,
      voids: o = !1
    } = n, {
      at: i = Dc(t),
      batchDirty: s = !0
    } = n;
    if (r.length) {
      if (U.isRange(i))
        if (a || (i = C.unhangRange(t, i, {
          voids: o
        })), U.isCollapsed(i))
          i = i.anchor;
        else {
          var [, u] = U.edges(i);
          if (!o && C.void(t, {
            at: u
          }))
            return;
          var l = C.pointRef(t, u);
          J.delete(t, {
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
          match: (z) => ve.isElement(z) && C.isInline(t, z),
          mode: "highest",
          voids: o
        });
        if (c) {
          var [, d] = c;
          if (C.isEnd(t, i, d)) {
            var g = C.after(t, d);
            i = g;
          } else if (C.isStart(t, i, d)) {
            var p = C.before(t, d);
            i = p;
          }
        }
        var h = C.above(t, {
          match: (z) => ve.isElement(z) && C.isBlock(t, z),
          at: i,
          voids: o
        }), [, f] = h, m = C.isStart(t, i, f), b = C.isEnd(t, i, f), E = m && b, y = !m || m && b, w = !b, [, S] = fe.first({
          children: r
        }, []), [, D] = fe.last({
          children: r
        }, []), x = [], B = (z) => {
          var [V, q] = z, te = q.length === 0;
          return te ? !1 : E ? !0 : !(y && L.isAncestor(q, S) && ve.isElement(V) && !t.isVoid(V) && !t.isInline(V) || w && L.isAncestor(q, D) && ve.isElement(V) && !t.isVoid(V) && !t.isInline(V));
        };
        for (var O of fe.nodes({
          children: r
        }, {
          pass: B
        }))
          B(O) && x.push(O);
        var A = [], _ = [], P = [], $ = !0, N = !1;
        for (var [R] of x)
          ve.isElement(R) && !t.isInline(R) ? ($ = !1, N = !0, _.push(R)) : $ ? A.push(R) : P.push(R);
        var [M] = C.nodes(t, {
          at: i,
          match: (z) => Oe.isText(z) || C.isInline(t, z),
          mode: "highest",
          voids: o
        }), [, F] = M, T = C.isStart(t, i, F), k = C.isEnd(t, i, F), H = C.pathRef(t, b && !P.length ? L.next(f) : f), K = C.pathRef(t, k ? L.next(F) : F);
        J.splitNodes(t, {
          at: i,
          match: (z) => N ? ve.isElement(z) && C.isBlock(t, z) : Oe.isText(z) || C.isInline(t, z),
          mode: N ? "lowest" : "highest",
          always: N && (!m || A.length > 0) && (!b || P.length > 0),
          voids: o
        });
        var X = C.pathRef(t, !T || T && k ? L.next(F) : F);
        if (J.insertNodes(t, A, {
          at: X.current,
          match: (z) => Oe.isText(z) || C.isInline(t, z),
          mode: "highest",
          voids: o,
          batchDirty: s
        }), E && !A.length && _.length && !P.length && J.delete(t, {
          at: f,
          voids: o
        }), J.insertNodes(t, _, {
          at: H.current,
          match: (z) => ve.isElement(z) && C.isBlock(t, z),
          mode: "lowest",
          voids: o,
          batchDirty: s
        }), J.insertNodes(t, P, {
          at: K.current,
          match: (z) => Oe.isText(z) || C.isInline(t, z),
          mode: "highest",
          voids: o,
          batchDirty: s
        }), !n.at) {
          var Q;
          if (P.length > 0 && K.current ? Q = L.previous(K.current) : _.length > 0 && H.current ? Q = L.previous(H.current) : X.current && (Q = L.previous(X.current)), Q) {
            var I = C.end(t, Q);
            J.select(t, I);
          }
        }
        X.unref(), H.unref(), K.unref();
      }
    }
  });
}, pC = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    edge: n = "anchor"
  } = r, {
    selection: a
  } = t;
  if (a) {
    if (n === "anchor")
      J.select(t, a.anchor);
    else if (n === "focus")
      J.select(t, a.focus);
    else if (n === "start") {
      var [o] = U.edges(a);
      J.select(t, o);
    } else if (n === "end") {
      var [, i] = U.edges(a);
      J.select(t, i);
    }
  } else
    return;
}, bC = (e) => {
  var {
    selection: t
  } = e;
  t && e.apply({
    type: "set_selection",
    properties: t,
    newProperties: null
  });
}, yC = function(t) {
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
    s === "start" && (s = U.isBackward(n) ? "focus" : "anchor"), s === "end" && (s = U.isBackward(n) ? "anchor" : "focus");
    var {
      anchor: u,
      focus: l
    } = n, c = {
      distance: a,
      unit: o,
      ignoreNonSelectable: !0
    }, d = {};
    if (s == null || s === "anchor") {
      var g = i ? C.before(t, u, c) : C.after(t, u, c);
      g && (d.anchor = g);
    }
    if (s == null || s === "focus") {
      var p = i ? C.before(t, l, c) : C.after(t, l, c);
      p && (d.focus = p);
    }
    J.setSelection(t, d);
  }
}, CC = (e, t) => {
  var {
    selection: r
  } = e;
  if (t = C.range(e, t), r) {
    J.setSelection(e, t);
    return;
  }
  if (!U.isRange(t))
    throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(Yt.stringify(t)));
  e.apply({
    type: "set_selection",
    properties: r,
    newProperties: t
  });
};
function id(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? id(Object(r), !0).forEach(function(n) {
      gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : id(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var EC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    selection: a
  } = t, {
    edge: o = "both"
  } = n;
  if (a) {
    o === "start" && (o = U.isBackward(a) ? "focus" : "anchor"), o === "end" && (o = U.isBackward(a) ? "anchor" : "focus");
    var {
      anchor: i,
      focus: s
    } = a, u = o === "anchor" ? i : s;
    J.setSelection(t, {
      [o === "anchor" ? "anchor" : "focus"]: sd(sd({}, u), r)
    });
  }
}, wC = (e, t) => {
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
}, DC = function(t, r) {
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
    if (fe.isNode(r) && (r = [r]), r.length !== 0) {
      var [d] = r;
      if (u || (u = Dc(t), c !== !1 && (c = !0)), c == null && (c = !1), U.isRange(u))
        if (a || (u = C.unhangRange(t, u, {
          voids: o
        })), U.isCollapsed(u))
          u = u.anchor;
        else {
          var [, g] = U.edges(u), p = C.pointRef(t, g);
          J.delete(t, {
            at: u
          }), u = p.unref();
        }
      if (Ge.isPoint(u)) {
        l == null && (Oe.isText(d) ? l = (A) => Oe.isText(A) : t.isInline(d) ? l = (A) => Oe.isText(A) || C.isInline(t, A) : l = (A) => ve.isElement(A) && C.isBlock(t, A));
        var [h] = C.nodes(t, {
          at: u.path,
          match: l,
          mode: i,
          voids: o
        });
        if (h) {
          var [, f] = h, m = C.pathRef(t, f), b = C.isEnd(t, u, f);
          J.splitNodes(t, {
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
          iy(t, () => {
            var A = function() {
              var $ = y.concat(w);
              w++;
              var N = {
                type: "insert_node",
                path: $,
                node: _
              };
              t.apply(N), u = L.next(u), S.push(N), Oe.isText ? D.push(...Array.from(fe.nodes(_), (R) => {
                var [, M] = R;
                return $.concat(M);
              })) : D.push($);
            };
            for (var _ of r)
              A();
          }, () => {
            Xg(t, D, (A) => {
              var _ = A;
              for (var P of S)
                if (L.operationCanTransformPath(P) && (_ = L.transform(_, P), !_))
                  return null;
              return _;
            });
          });
        } else
          for (var x of r) {
            var B = y.concat(w);
            w++, t.apply({
              type: "insert_node",
              path: B,
              node: x
            }), u = L.next(u);
          }
        if (u = L.previous(u), c) {
          var O = C.end(t, u);
          O && J.select(t, O);
        }
      }
    }
  });
}, SC = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  C.withoutNormalizing(t, () => {
    var {
      at: n = t.selection,
      mode: a = "lowest",
      voids: o = !1
    } = r, {
      match: i
    } = r;
    if (i == null && (i = L.isPath(n) ? yo(t, n) : (w) => ve.isElement(w) && C.isBlock(t, w)), !!n) {
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
        var d = C.node(t, L.parent(c)), [g, p] = d, h = c[c.length - 1], {
          length: f
        } = g.children;
        if (f === 1) {
          var m = L.next(p);
          J.moveNodes(t, {
            at: c,
            to: m,
            voids: o
          }), J.removeNodes(t, {
            at: p,
            voids: o
          });
        } else if (h === 0)
          J.moveNodes(t, {
            at: c,
            to: p,
            voids: o
          });
        else if (h === f - 1) {
          var b = L.next(p);
          J.moveNodes(t, {
            at: c,
            to: b,
            voids: o
          });
        } else {
          var E = L.next(c), y = L.next(p);
          J.splitNodes(t, {
            at: E,
            voids: o
          }), J.moveNodes(t, {
            at: c,
            to: y,
            voids: o
          });
        }
      }
    }
  });
}, xC = ["text"], OC = ["children"], Yg = (e, t) => {
  if (ve.isElement(t)) {
    var r = t;
    return C.isVoid(e, t) ? !0 : r.children.length === 1 ? Yg(e, r.children[0]) : !1;
  } else
    return !C.isEditor(t);
}, BC = function(t) {
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
          n = (A) => u.children.includes(A);
        } else
          n = (A) => ve.isElement(A) && C.isBlock(t, A);
      if (!o && U.isRange(a) && (a = C.unhangRange(t, a, {
        voids: i
      })), U.isRange(a))
        if (U.isCollapsed(a))
          a = a.anchor;
        else {
          var [, l] = U.edges(a), c = C.pointRef(t, l);
          J.delete(t, {
            at: a
          }), a = c.unref(), r.at == null && J.select(t, a);
        }
      var [d] = C.nodes(t, {
        at: a,
        match: n,
        voids: i,
        mode: s
      }), g = C.previous(t, {
        at: a,
        match: n,
        voids: i,
        mode: s
      });
      if (!(!d || !g)) {
        var [p, h] = d, [f, m] = g;
        if (!(h.length === 0 || m.length === 0)) {
          var b = L.next(m), E = L.common(h, m), y = L.isSibling(h, m), w = Array.from(C.levels(t, {
            at: h
          }), (A) => {
            var [_] = A;
            return _;
          }).slice(E.length).slice(0, -1), S = C.above(t, {
            at: h,
            mode: "highest",
            match: (A) => w.includes(A) && Yg(t, A)
          }), D = S && C.pathRef(t, S[1]), x, B;
          if (Oe.isText(p) && Oe.isText(f)) {
            var O = $n(p, xC);
            B = f.text.length, x = O;
          } else if (ve.isElement(p) && ve.isElement(f)) {
            var O = $n(p, OC);
            B = f.children.length, x = O;
          } else
            throw new Error("Cannot merge the node at path [".concat(h, "] with the previous sibling because it is not the same kind: ").concat(Yt.stringify(p), " ").concat(Yt.stringify(f)));
          y || J.moveNodes(t, {
            at: h,
            to: b,
            voids: i
          }), D && J.removeNodes(t, {
            at: D.current,
            voids: i
          }), ve.isElement(f) && C.isEmpty(t, f) || Oe.isText(f) && f.text === "" && m[m.length - 1] !== 0 ? J.removeNodes(t, {
            at: m,
            voids: i
          }) : t.apply({
            type: "merge_node",
            path: b,
            position: B,
            properties: x
          }), D && D.unref();
        }
      }
    }
  });
}, AC = (e, t) => {
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
      i == null && (i = L.isPath(n) ? yo(e, n) : (p) => ve.isElement(p) && C.isBlock(e, p));
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
        var d = c.unref(), g = s.current;
        d.length !== 0 && e.apply({
          type: "move_node",
          path: d,
          newPath: g
        }), s.current && L.isSibling(g, d) && L.isAfter(g, d) && (s.current = L.next(s.current));
      }
      s.unref();
    }
  });
}, $C = function(t) {
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
      s == null && (s = L.isPath(i) ? yo(t, i) : (p) => ve.isElement(p) && C.isBlock(t, p)), !n && U.isRange(i) && (i = C.unhangRange(t, i, {
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
          var [g] = C.node(t, d);
          t.apply({
            type: "remove_node",
            path: d,
            node: g
          });
        }
      }
    }
  });
}, FC = function(t, r) {
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
      if (a == null && (a = L.isPath(o) ? yo(t, o) : (B) => ve.isElement(B) && C.isBlock(t, B)), !u && U.isRange(o) && (o = C.unhangRange(t, o, {
        voids: d
      })), c && U.isRange(o)) {
        if (U.isCollapsed(o) && C.leaf(t, o.anchor)[0].text.length > 0)
          return;
        var g = C.rangeRef(t, o, {
          affinity: "inward"
        }), [p, h] = U.edges(o), f = l === "lowest" ? "lowest" : "highest", m = C.isEnd(t, h, h.path);
        J.splitNodes(t, {
          at: h,
          match: a,
          mode: f,
          voids: d,
          always: !m
        });
        var b = C.isStart(t, p, p.path);
        J.splitNodes(t, {
          at: p,
          match: a,
          mode: f,
          voids: d,
          always: !b
        }), o = g.unref(), n.at == null && J.select(t, o);
      }
      i || (i = (B, O) => B !== O);
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
}, PC = (e, t) => {
  if (U.isCollapsed(t))
    return t.anchor;
  var [, r] = U.edges(t), n = C.pointRef(e, r);
  return J.delete(e, {
    at: t
  }), n.unref();
}, RC = function(t) {
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
    if (o == null && (o = (k) => ve.isElement(k) && C.isBlock(t, k)), U.isRange(i) && (i = PC(t, i)), L.isPath(i)) {
      var l = i, c = C.point(t, l), [d] = C.parent(t, l);
      o = (k) => k === d, s = c.path.length - l.length + 1, i = c, u = !0;
    }
    if (i) {
      var g = C.pointRef(t, i, {
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
          if (ve.isElement(b) && t.isInline(b)) {
            var y = C.after(t, E);
            if (!y) {
              var w = {
                text: ""
              }, S = L.next(E);
              J.insertNodes(t, w, {
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
        var x = i.path.length - s, [, B] = h, O = i.path.slice(0, x), A = s === 0 ? i.offset : i.path[x] + m;
        for (var [_, P] of C.levels(t, {
          at: O,
          reverse: !0,
          voids: a
        })) {
          var $ = !1;
          if (P.length < B.length || P.length === 0 || !a && ve.isElement(_) && C.isVoid(t, _))
            break;
          var N = g.current, R = C.isEnd(t, N, P);
          if (u || !g || !C.isEdge(t, N, P)) {
            $ = !0;
            var M = fe.extractProps(_);
            t.apply({
              type: "split_node",
              path: P,
              position: A,
              properties: M
            });
          }
          A = P[P.length - 1] + ($ || R ? 1 : 0);
        }
        if (r.at == null) {
          var F = p.current || C.end(t, []);
          J.select(t, F);
        }
      } finally {
        var T;
        g.unref(), (T = p) === null || T === void 0 || T.unref();
      }
    }
  });
}, TC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  Array.isArray(r) || (r = [r]);
  var a = {};
  for (var o of r)
    a[o] = null;
  J.setNodes(t, a, n);
}, NC = function(t) {
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
      s == null && (s = L.isPath(i) ? yo(t, i) : (p) => ve.isElement(p) && C.isBlock(t, p)), L.isPath(i) && (i = C.range(t, i));
      var u = U.isRange(i) ? C.rangeRef(t, i) : null, l = C.nodes(t, {
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
        var h = g.unref(), [f] = C.node(t, h), m = C.range(t, h);
        a && u && (m = U.intersection(u.current, m)), J.liftNodes(t, {
          at: m,
          match: (b) => ve.isAncestor(f) && f.children.includes(b),
          voids: o
        });
      };
      for (var g of c)
        d();
      u && u.unref();
    }
  });
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
      gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ud(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var IC = function(t, r) {
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
      if (s == null && (L.isPath(u) ? s = yo(t, u) : t.isInline(r) ? s = (m) => ve.isElement(m) && C.isInline(t, m) || Oe.isText(m) : s = (m) => ve.isElement(m) && C.isBlock(t, m)), o && U.isRange(u)) {
        var [l, c] = U.edges(u), d = C.rangeRef(t, u, {
          affinity: "inward"
        });
        J.splitNodes(t, {
          at: c,
          match: s,
          voids: i
        }), J.splitNodes(t, {
          at: l,
          match: s,
          voids: i
        }), u = d.unref(), n.at == null && J.select(t, u);
      }
      var g = Array.from(C.nodes(t, {
        at: u,
        match: t.isInline(r) ? (m) => ve.isElement(m) && C.isBlock(t, m) : (m) => C.isEditor(m),
        mode: "lowest",
        voids: i
      })), p = function() {
        var b = U.isRange(u) ? U.intersection(u, C.range(t, f)) : u;
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
          var x = L.equals(S, D) ? L.parent(S) : L.common(S, D), B = C.range(t, S, D), O = C.node(t, x), [A] = O, _ = x.length + 1, P = L.next(D.slice(0, _)), $ = ld(ld({}, r), {}, {
            children: []
          });
          J.insertNodes(t, $, {
            at: P,
            voids: i
          }), J.moveNodes(t, {
            at: B,
            match: (N) => ve.isAncestor(A) && A.children.includes(N),
            to: P.concat(0),
            voids: i
          });
        }
      }, h;
      for (var [, f] of g)
        h = p();
    }
  });
}, MC = () => {
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
      return sy(e, ...n);
    },
    // Editor
    addMark: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return vy(e, ...n);
    },
    deleteBackward: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return hy(e, ...n);
    },
    deleteForward: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return py(e, ...n);
    },
    deleteFragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return by(e, ...n);
    },
    getFragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return ly(e, ...n);
    },
    insertBreak: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return $y(e, ...n);
    },
    insertSoftBreak: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Py(e, ...n);
    },
    insertFragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return hC(e, ...n);
    },
    insertNode: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Fy(e, ...n);
    },
    insertText: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Ty(e, ...n);
    },
    normalizeNode: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return cy(e, ...n);
    },
    removeMark: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return lC(e, ...n);
    },
    getDirtyPaths: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return uy(e, ...n);
    },
    shouldNormalize: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return fy(e, ...n);
    },
    // Editor interface
    above: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return dy(e, ...n);
    },
    after: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return gy(e, ...n);
    },
    before: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return my(e, ...n);
    },
    collapse: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return pC(e, ...n);
    },
    delete: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return mC(e, ...n);
    },
    deselect: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return bC(e, ...n);
    },
    edges: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return yy(e, ...n);
    },
    elementReadOnly: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Cy(e, ...n);
    },
    end: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Ey(e, ...n);
    },
    first: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return wy(e, ...n);
    },
    fragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Dy(e, ...n);
    },
    getMarks: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Ky(e, ...n);
    },
    hasBlocks: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return xy(e, ...n);
    },
    hasInlines: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Oy(e, ...n);
    },
    hasPath: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return By(e, ...n);
    },
    hasTexts: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Ay(e, ...n);
    },
    insertNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return DC(e, ...n);
    },
    isBlock: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Ny(e, ...n);
    },
    isEdge: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Iy(e, ...n);
    },
    isEmpty: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return My(e, ...n);
    },
    isEnd: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return jy(e, ...n);
    },
    isNormalizing: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return _y(e, ...n);
    },
    isStart: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Ly(e, ...n);
    },
    last: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return ky(e, ...n);
    },
    leaf: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return zy(e, ...n);
    },
    levels: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Vy(e, ...n);
    },
    liftNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return SC(e, ...n);
    },
    mergeNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return BC(e, ...n);
    },
    move: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return yC(e, ...n);
    },
    moveNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return AC(e, ...n);
    },
    next: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return qy(e, ...n);
    },
    node: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Uy(e, ...n);
    },
    nodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Gy(e, ...n);
    },
    normalize: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Xy(e, ...n);
    },
    parent: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Yy(e, ...n);
    },
    path: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Jy(e, ...n);
    },
    pathRef: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Zy(e, ...n);
    },
    pathRefs: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Qy(e, ...n);
    },
    point: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return rC(e, ...n);
    },
    pointRef: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return eC(e, ...n);
    },
    pointRefs: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return tC(e, ...n);
    },
    positions: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return nC(e, ...n);
    },
    previous: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return aC(e, ...n);
    },
    range: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return sC(e, ...n);
    },
    rangeRef: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return oC(e, ...n);
    },
    rangeRefs: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return iC(e, ...n);
    },
    removeNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return $C(e, ...n);
    },
    select: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return CC(e, ...n);
    },
    setNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return FC(e, ...n);
    },
    setNormalizing: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return cC(e, ...n);
    },
    setPoint: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return EC(e, ...n);
    },
    setSelection: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return wC(e, ...n);
    },
    splitNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return RC(e, ...n);
    },
    start: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return fC(e, ...n);
    },
    string: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return dC(e, ...n);
    },
    unhangRange: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return vC(e, ...n);
    },
    unsetNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return TC(e, ...n);
    },
    unwrapNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return NC(e, ...n);
    },
    void: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Sy(e, ...n);
    },
    withoutNormalizing: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return gC(e, ...n);
    },
    wrapNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return IC(e, ...n);
    }
  };
  return e;
}, Pi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function mi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jC = kC, Zg = "֑-߿יִ-﷽ﹰ-ﻼ", Qg = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿", _C = new RegExp("^[^" + Qg + "]*[" + Zg + "]"), LC = new RegExp("^[^" + Zg + "]*[" + Qg + "]");
function kC(e) {
  return e = String(e || ""), _C.test(e) ? "rtl" : LC.test(e) ? "ltr" : "neutral";
}
const Jg = /* @__PURE__ */ mi(jC);
function zC(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Oc = zC, VC = typeof Pi == "object" && Pi && Pi.Object === Object && Pi, HC = VC, WC = HC, KC = typeof self == "object" && self && self.Object === Object && self, qC = WC || KC || Function("return this")(), em = qC, UC = em, GC = function() {
  return UC.Date.now();
}, XC = GC, YC = /\s/;
function ZC(e) {
  for (var t = e.length; t-- && YC.test(e.charAt(t)); )
    ;
  return t;
}
var QC = ZC, JC = QC, e1 = /^\s+/;
function t1(e) {
  return e && e.slice(0, JC(e) + 1).replace(e1, "");
}
var r1 = t1, n1 = em, a1 = n1.Symbol, tm = a1, cd = tm, rm = Object.prototype, o1 = rm.hasOwnProperty, i1 = rm.toString, $o = cd ? cd.toStringTag : void 0;
function s1(e) {
  var t = o1.call(e, $o), r = e[$o];
  try {
    e[$o] = void 0;
    var n = !0;
  } catch {
  }
  var a = i1.call(e);
  return n && (t ? e[$o] = r : delete e[$o]), a;
}
var u1 = s1, l1 = Object.prototype, c1 = l1.toString;
function f1(e) {
  return c1.call(e);
}
var d1 = f1, fd = tm, v1 = u1, g1 = d1, m1 = "[object Null]", h1 = "[object Undefined]", dd = fd ? fd.toStringTag : void 0;
function p1(e) {
  return e == null ? e === void 0 ? h1 : m1 : dd && dd in Object(e) ? v1(e) : g1(e);
}
var b1 = p1;
function y1(e) {
  return e != null && typeof e == "object";
}
var C1 = y1, E1 = b1, w1 = C1, D1 = "[object Symbol]";
function S1(e) {
  return typeof e == "symbol" || w1(e) && E1(e) == D1;
}
var x1 = S1, O1 = r1, vd = Oc, B1 = x1, gd = NaN, A1 = /^[-+]0x[0-9a-f]+$/i, $1 = /^0b[01]+$/i, F1 = /^0o[0-7]+$/i, P1 = parseInt;
function R1(e) {
  if (typeof e == "number")
    return e;
  if (B1(e))
    return gd;
  if (vd(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = vd(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = O1(e);
  var r = $1.test(e);
  return r || F1.test(e) ? P1(e.slice(2), r ? 2 : 8) : A1.test(e) ? gd : +e;
}
var T1 = R1, N1 = Oc, yu = XC, md = T1, I1 = "Expected a function", M1 = Math.max, j1 = Math.min;
function _1(e, t, r) {
  var n, a, o, i, s, u, l = 0, c = !1, d = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(I1);
  t = md(t) || 0, N1(r) && (c = !!r.leading, d = "maxWait" in r, o = d ? M1(md(r.maxWait) || 0, t) : o, g = "trailing" in r ? !!r.trailing : g);
  function p(D) {
    var x = n, B = a;
    return n = a = void 0, l = D, i = e.apply(B, x), i;
  }
  function h(D) {
    return l = D, s = setTimeout(b, t), c ? p(D) : i;
  }
  function f(D) {
    var x = D - u, B = D - l, O = t - x;
    return d ? j1(O, o - B) : O;
  }
  function m(D) {
    var x = D - u, B = D - l;
    return u === void 0 || x >= t || x < 0 || d && B >= o;
  }
  function b() {
    var D = yu();
    if (m(D))
      return E(D);
    s = setTimeout(b, f(D));
  }
  function E(D) {
    return s = void 0, g && n ? p(D) : (n = a = void 0, i);
  }
  function y() {
    s !== void 0 && clearTimeout(s), l = 0, n = u = a = s = void 0;
  }
  function w() {
    return s === void 0 ? i : E(yu());
  }
  function S() {
    var D = yu(), x = m(D);
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
var nm = _1;
const L1 = /* @__PURE__ */ mi(nm);
var k1 = nm, z1 = Oc, V1 = "Expected a function";
function H1(e, t, r) {
  var n = !0, a = !0;
  if (typeof e != "function")
    throw new TypeError(V1);
  return z1(r) && (n = "leading" in r ? !!r.leading : n, a = "trailing" in r ? !!r.trailing : a), k1(e, t, {
    leading: n,
    maxWait: t,
    trailing: a
  });
}
var W1 = H1;
const K1 = /* @__PURE__ */ mi(W1), hd = (e) => typeof e == "object" && e != null && e.nodeType === 1, pd = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", Cu = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const r = getComputedStyle(e, null);
    return pd(r.overflowY, t) || pd(r.overflowX, t) || ((n) => {
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
}, Ri = (e, t, r, n, a, o, i, s) => o < e && i > t || o > e && i < t ? 0 : o <= e && s <= r || i >= t && s >= r ? o - e - n : i > t && s < r || o < e && s > r ? i - t + a : 0, q1 = (e) => {
  const t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, bd = (e, t) => {
  var r, n, a, o;
  if (typeof document > "u")
    return [];
  const { scrollMode: i, block: s, inline: u, boundary: l, skipOverflowHiddenElements: c } = t, d = typeof l == "function" ? l : (M) => M !== l;
  if (!hd(e))
    throw new TypeError("Invalid target");
  const g = document.scrollingElement || document.documentElement, p = [];
  let h = e;
  for (; hd(h) && d(h); ) {
    if (h = q1(h), h === g) {
      p.push(h);
      break;
    }
    h != null && h === document.body && Cu(h) && !Cu(document.documentElement) || h != null && Cu(h, c) && p.push(h);
  }
  const f = (n = (r = window.visualViewport) == null ? void 0 : r.width) != null ? n : innerWidth, m = (o = (a = window.visualViewport) == null ? void 0 : a.height) != null ? o : innerHeight, { scrollX: b, scrollY: E } = window, { height: y, width: w, top: S, right: D, bottom: x, left: B } = e.getBoundingClientRect(), { top: O, right: A, bottom: _, left: P } = ((M) => {
    const F = window.getComputedStyle(M);
    return { top: parseFloat(F.scrollMarginTop) || 0, right: parseFloat(F.scrollMarginRight) || 0, bottom: parseFloat(F.scrollMarginBottom) || 0, left: parseFloat(F.scrollMarginLeft) || 0 };
  })(e);
  let $ = s === "start" || s === "nearest" ? S - O : s === "end" ? x + _ : S + y / 2 - O + _, N = u === "center" ? B + w / 2 - P + A : u === "end" ? D + A : B - P;
  const R = [];
  for (let M = 0; M < p.length; M++) {
    const F = p[M], { height: T, width: k, top: H, right: K, bottom: X, left: Q } = F.getBoundingClientRect();
    if (i === "if-needed" && S >= 0 && B >= 0 && x <= m && D <= f && S >= H && x <= X && B >= Q && D <= K)
      return R;
    const I = getComputedStyle(F), z = parseInt(I.borderLeftWidth, 10), V = parseInt(I.borderTopWidth, 10), q = parseInt(I.borderRightWidth, 10), te = parseInt(I.borderBottomWidth, 10);
    let re = 0, le = 0;
    const oe = "offsetWidth" in F ? F.offsetWidth - F.clientWidth - z - q : 0, ge = "offsetHeight" in F ? F.offsetHeight - F.clientHeight - V - te : 0, ce = "offsetWidth" in F ? F.offsetWidth === 0 ? 0 : k / F.offsetWidth : 0, Y = "offsetHeight" in F ? F.offsetHeight === 0 ? 0 : T / F.offsetHeight : 0;
    if (g === F)
      re = s === "start" ? $ : s === "end" ? $ - m : s === "nearest" ? Ri(E, E + m, m, V, te, E + $, E + $ + y, y) : $ - m / 2, le = u === "start" ? N : u === "center" ? N - f / 2 : u === "end" ? N - f : Ri(b, b + f, f, z, q, b + N, b + N + w, w), re = Math.max(0, re + E), le = Math.max(0, le + b);
    else {
      re = s === "start" ? $ - H - V : s === "end" ? $ - X + te + ge : s === "nearest" ? Ri(H, X, T, V, te + ge, $, $ + y, y) : $ - (H + T / 2) + ge / 2, le = u === "start" ? N - Q - z : u === "center" ? N - (Q + k / 2) + oe / 2 : u === "end" ? N - K + q + oe : Ri(Q, K, k, z, q + oe, N, N + w, w);
      const { scrollLeft: pe, scrollTop: Se } = F;
      re = Y === 0 ? 0 : Math.max(0, Math.min(Se + re / Y, F.scrollHeight - T / Y + ge)), le = ce === 0 ? 0 : Math.max(0, Math.min(pe + le / ce, F.scrollWidth - k / ce + oe)), $ += Se - re, N += pe - le;
    }
    R.push({ el: F, top: re, left: le });
  }
  return R;
}, U1 = (e) => e === !1 ? { block: "end", inline: "nearest" } : ((t) => t === Object(t) && Object.keys(t).length !== 0)(e) ? e : { block: "start", inline: "nearest" };
function G1(e, t) {
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
    return t.behavior(bd(e, t));
  const n = typeof t == "boolean" || t == null ? void 0 : t.behavior;
  for (const { el: a, top: o, left: i } of bd(e, U1(t))) {
    const s = o - r.top + r.bottom, u = i - r.left + r.right;
    a.scroll({ top: s, left: u, behavior: n });
  }
}
var pa = [], X1 = function() {
  return pa.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Y1 = function() {
  return pa.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, yd = "ResizeObserver loop completed with undelivered notifications.", Z1 = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: yd
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = yd), window.dispatchEvent(e);
}, ti;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ti || (ti = {}));
var ba = function(e) {
  return Object.freeze(e);
}, Q1 = /* @__PURE__ */ function() {
  function e(t, r) {
    this.inlineSize = t, this.blockSize = r, ba(this);
  }
  return e;
}(), am = function() {
  function e(t, r, n, a) {
    return this.x = t, this.y = r, this.width = n, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, ba(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, r = t.x, n = t.y, a = t.top, o = t.right, i = t.bottom, s = t.left, u = t.width, l = t.height;
    return { x: r, y: n, top: a, right: o, bottom: i, left: s, width: u, height: l };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Bc = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, om = function(e) {
  if (Bc(e)) {
    var t = e.getBBox(), r = t.width, n = t.height;
    return !r && !n;
  }
  var a = e, o = a.offsetWidth, i = a.offsetHeight;
  return !(o || i || e.getClientRects().length);
}, Cd = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var r = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(r && e instanceof r.Element);
}, J1 = function(e) {
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
}, Ho = typeof window < "u" ? window : {}, Ti = /* @__PURE__ */ new WeakMap(), Ed = /auto|scroll/, eE = /^tb|vertical/, tE = /msie|trident/i.test(Ho.navigator && Ho.navigator.userAgent), on = function(e) {
  return parseFloat(e || "0");
}, ro = function(e, t, r) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = !1), new Q1((r ? t : e) || 0, (r ? e : t) || 0);
}, wd = ba({
  devicePixelContentBoxSize: ro(),
  borderBoxSize: ro(),
  contentBoxSize: ro(),
  contentRect: new am(0, 0, 0, 0)
}), im = function(e, t) {
  if (t === void 0 && (t = !1), Ti.has(e) && !t)
    return Ti.get(e);
  if (om(e))
    return Ti.set(e, wd), wd;
  var r = getComputedStyle(e), n = Bc(e) && e.ownerSVGElement && e.getBBox(), a = !tE && r.boxSizing === "border-box", o = eE.test(r.writingMode || ""), i = !n && Ed.test(r.overflowY || ""), s = !n && Ed.test(r.overflowX || ""), u = n ? 0 : on(r.paddingTop), l = n ? 0 : on(r.paddingRight), c = n ? 0 : on(r.paddingBottom), d = n ? 0 : on(r.paddingLeft), g = n ? 0 : on(r.borderTopWidth), p = n ? 0 : on(r.borderRightWidth), h = n ? 0 : on(r.borderBottomWidth), f = n ? 0 : on(r.borderLeftWidth), m = d + l, b = u + c, E = f + p, y = g + h, w = s ? e.offsetHeight - y - e.clientHeight : 0, S = i ? e.offsetWidth - E - e.clientWidth : 0, D = a ? m + E : 0, x = a ? b + y : 0, B = n ? n.width : on(r.width) - D - S, O = n ? n.height : on(r.height) - x - w, A = B + m + S + E, _ = O + b + w + y, P = ba({
    devicePixelContentBoxSize: ro(Math.round(B * devicePixelRatio), Math.round(O * devicePixelRatio), o),
    borderBoxSize: ro(A, _, o),
    contentBoxSize: ro(B, O, o),
    contentRect: new am(d, u, B, O)
  });
  return Ti.set(e, P), P;
}, sm = function(e, t, r) {
  var n = im(e, r), a = n.borderBoxSize, o = n.contentBoxSize, i = n.devicePixelContentBoxSize;
  switch (t) {
    case ti.DEVICE_PIXEL_CONTENT_BOX:
      return i;
    case ti.BORDER_BOX:
      return a;
    default:
      return o;
  }
}, rE = /* @__PURE__ */ function() {
  function e(t) {
    var r = im(t);
    this.target = t, this.contentRect = r.contentRect, this.borderBoxSize = ba([r.borderBoxSize]), this.contentBoxSize = ba([r.contentBoxSize]), this.devicePixelContentBoxSize = ba([r.devicePixelContentBoxSize]);
  }
  return e;
}(), um = function(e) {
  if (om(e))
    return 1 / 0;
  for (var t = 0, r = e.parentNode; r; )
    t += 1, r = r.parentNode;
  return t;
}, nE = function() {
  var e = 1 / 0, t = [];
  pa.forEach(function(i) {
    if (i.activeTargets.length !== 0) {
      var s = [];
      i.activeTargets.forEach(function(l) {
        var c = new rE(l.target), d = um(l.target);
        s.push(c), l.lastReportedSize = sm(l.target, l.observedBox), d < e && (e = d);
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
}, Dd = function(e) {
  pa.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(a) {
      a.isActive() && (um(a.target) > e ? r.activeTargets.push(a) : r.skippedTargets.push(a));
    });
  });
}, aE = function() {
  var e = 0;
  for (Dd(e); X1(); )
    e = nE(), Dd(e);
  return Y1() && Z1(), e > 0;
}, Eu, lm = [], oE = function() {
  return lm.splice(0).forEach(function(e) {
    return e();
  });
}, iE = function(e) {
  if (!Eu) {
    var t = 0, r = document.createTextNode(""), n = { characterData: !0 };
    new MutationObserver(function() {
      return oE();
    }).observe(r, n), Eu = function() {
      r.textContent = "".concat(t ? t-- : t++);
    };
  }
  lm.push(e), Eu();
}, sE = function(e) {
  iE(function() {
    requestAnimationFrame(e);
  });
}, es = 0, uE = function() {
  return !!es;
}, lE = 250, cE = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Sd = [
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
], xd = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, wu = !1, fE = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var r = this;
    if (t === void 0 && (t = lE), !wu) {
      wu = !0;
      var n = xd(t);
      sE(function() {
        var a = !1;
        try {
          a = aE();
        } finally {
          if (wu = !1, t = n - xd(), !uE())
            return;
          a ? r.run(1e3) : t > 0 ? r.run(t) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, r = function() {
      return t.observer && t.observer.observe(document.body, cE);
    };
    document.body ? r() : Ho.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Sd.forEach(function(r) {
      return Ho.addEventListener(r, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), Sd.forEach(function(r) {
      return Ho.removeEventListener(r, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), cl = new fE(), Od = function(e) {
  !es && e > 0 && cl.start(), es += e, !es && cl.stop();
}, dE = function(e) {
  return !Bc(e) && !J1(e) && getComputedStyle(e).display === "inline";
}, vE = function() {
  function e(t, r) {
    this.target = t, this.observedBox = r || ti.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = sm(this.target, this.observedBox, !0);
    return dE(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), gE = /* @__PURE__ */ function() {
  function e(t, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = r;
  }
  return e;
}(), Ni = /* @__PURE__ */ new WeakMap(), Bd = function(e, t) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === t)
      return r;
  return -1;
}, Ii = function() {
  function e() {
  }
  return e.connect = function(t, r) {
    var n = new gE(t, r);
    Ni.set(t, n);
  }, e.observe = function(t, r, n) {
    var a = Ni.get(t), o = a.observationTargets.length === 0;
    Bd(a.observationTargets, r) < 0 && (o && pa.push(a), a.observationTargets.push(new vE(r, n && n.box)), Od(1), cl.schedule());
  }, e.unobserve = function(t, r) {
    var n = Ni.get(t), a = Bd(n.observationTargets, r), o = n.observationTargets.length === 1;
    a >= 0 && (o && pa.splice(pa.indexOf(n), 1), n.observationTargets.splice(a, 1), Od(-1));
  }, e.disconnect = function(t) {
    var r = this, n = Ni.get(t);
    n.observationTargets.slice().forEach(function(a) {
      return r.unobserve(t, a.target);
    }), n.activeTargets.splice(0, n.activeTargets.length);
  }, e;
}(), mE = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Ii.connect(this, t);
  }
  return e.prototype.observe = function(t, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Cd(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Ii.observe(this, t, r);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Cd(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Ii.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    Ii.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}(), Tn = {};
Object.defineProperty(Tn, "__esModule", {
  value: !0
});
var hE = typeof window < "u" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), Du = {
  alt: "altKey",
  control: "ctrlKey",
  meta: "metaKey",
  shift: "shiftKey"
}, cm = {
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
  mod: hE ? "meta" : "control",
  opt: "alt",
  option: "alt",
  return: "enter",
  right: "arrowright",
  space: " ",
  spacebar: " ",
  up: "arrowup",
  win: "meta",
  windows: "meta"
}, Ac = {
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
for (var Mi = 1; Mi < 20; Mi++)
  Ac["f" + Mi] = 111 + Mi;
function zs(e, t, r) {
  t && !("byKey" in t) && (r = t, t = null), Array.isArray(e) || (e = [e]);
  var n = e.map(function(i) {
    return fm(i, t);
  }), a = function(s) {
    return n.some(function(u) {
      return dm(u, s);
    });
  }, o = r == null ? a : a(r);
  return o;
}
function pE(e, t) {
  return zs(e, t);
}
function bE(e, t) {
  return zs(e, { byKey: !0 }, t);
}
function fm(e, t) {
  var r = t && t.byKey, n = {};
  e = e.replace("++", "+add");
  var a = e.split("+"), o = a.length;
  for (var i in Du)
    n[Du[i]] = !1;
  var s = !0, u = !1, l = void 0;
  try {
    for (var c = a[Symbol.iterator](), d; !(s = (d = c.next()).done); s = !0) {
      var g = d.value, p = g.endsWith("?") && g.length > 1;
      p && (g = g.slice(0, -1));
      var h = $c(g), f = Du[h];
      if (g.length > 1 && !f && !cm[g] && !Ac[h])
        throw new TypeError('Unknown modifier: "' + g + '"');
      (o === 1 || !f) && (r ? n.key = h : n.which = vm(g)), f && (n[f] = p ? null : !0);
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
function dm(e, t) {
  for (var r in e) {
    var n = e[r], a = void 0;
    if (n != null && (r === "key" && t.key != null ? a = t.key.toLowerCase() : r === "which" ? a = n === 91 && t.which === 93 ? 91 : t.which : a = t[r], !(a == null && n === !1) && a !== n))
      return !1;
  }
  return !0;
}
function vm(e) {
  e = $c(e);
  var t = Ac[e] || e.toUpperCase().charCodeAt(0);
  return t;
}
function $c(e) {
  return e = e.toLowerCase(), e = cm[e] || e, e;
}
Tn.default = zs;
var Su = Tn.isHotkey = zs;
Tn.isCodeHotkey = pE;
Tn.isKeyHotkey = bE;
Tn.parseHotkey = fm;
Tn.compareHotkey = dm;
Tn.toKeyCode = vm;
Tn.toKeyName = $c;
function yE(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function io(e, t) {
  if (e == null)
    return {};
  var r = yE(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function ri(e) {
  "@babel/helpers - typeof";
  return ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ri(e);
}
function CE(e, t) {
  if (ri(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ri(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function EE(e) {
  var t = CE(e, "string");
  return ri(t) === "symbol" ? t : String(t);
}
function _r(e, t, r) {
  return t = EE(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var Vs = /* @__PURE__ */ zr(null), lr = () => {
  var e = Rt(Vs);
  if (!e)
    throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
  return e;
}, gm = parseInt(ee.version.split(".")[0], 10), wE = typeof navigator < "u" && typeof window < "u" && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, Ad = typeof navigator < "u" && /Mac OS X/.test(navigator.userAgent), fr = typeof navigator < "u" && /Android/.test(navigator.userAgent), Qa = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), _o = typeof navigator < "u" && /AppleWebKit(?!.*Chrome)/i.test(navigator.userAgent), DE = typeof navigator < "u" && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent), mm = typeof navigator < "u" && /Chrome/i.test(navigator.userAgent), SE = typeof navigator < "u" && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent), xE = fr && typeof navigator < "u" && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent), OE = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent), BE = typeof navigator < "u" && /.*UCBrowser/.test(navigator.userAgent), AE = typeof navigator < "u" && /.*Wechat/.test(navigator.userAgent) && !/.*MacWechat/.test(navigator.userAgent), ts = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", jn = (!SE || !xE) && !DE && // globalThis is undefined in older browsers
typeof globalThis < "u" && globalThis.InputEvent && // @ts-ignore The `getTargetRanges` property isn't recognized.
typeof globalThis.InputEvent.prototype.getTargetRanges == "function", Fc = /* @__PURE__ */ new WeakMap(), Pc = /* @__PURE__ */ new WeakMap(), hm = /* @__PURE__ */ new WeakMap(), rs = /* @__PURE__ */ new WeakMap(), fl = /* @__PURE__ */ new WeakMap(), ni = /* @__PURE__ */ new WeakMap(), ya = /* @__PURE__ */ new WeakMap(), bs = /* @__PURE__ */ new WeakMap(), Hs = /* @__PURE__ */ new WeakMap(), dl = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap(), Wo = /* @__PURE__ */ new WeakMap(), vl = /* @__PURE__ */ new WeakMap(), Rc = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), xn = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap(), zn = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ new WeakMap(), pm = /* @__PURE__ */ new WeakMap(), so = Symbol("placeholder"), bm = Symbol("mark-placeholder"), $E = globalThis.Text, Tc = (e) => e && e.ownerDocument && e.ownerDocument.defaultView || null, FE = (e) => Xn(e) && e.nodeType === 8, jr = (e) => Xn(e) && e.nodeType === 1, Xn = (e) => {
  var t = Tc(e);
  return !!t && e instanceof t.Node;
}, gl = (e) => {
  var t = e && e.anchorNode && Tc(e.anchorNode);
  return !!t && e instanceof t.Selection;
}, ym = (e) => Xn(e) && e.nodeType === 3, PE = (e) => e.clipboardData && e.clipboardData.getData("text/plain") !== "" && e.clipboardData.types.length === 1, RE = (e) => {
  var [t, r] = e;
  if (jr(t) && t.childNodes.length) {
    var n = r === t.childNodes.length, a = n ? r - 1 : r;
    for ([t, a] = Cm(t, a, n ? "backward" : "forward"), n = a < r; jr(t) && t.childNodes.length; ) {
      var o = n ? t.childNodes.length - 1 : 0;
      t = NE(t, o, n ? "backward" : "forward");
    }
    r = n && t.textContent != null ? t.textContent.length : 0;
  }
  return [t, r];
}, TE = (e) => {
  for (var t = e && e.parentNode; t; ) {
    if (t.toString() === "[object ShadowRoot]")
      return !0;
    t = t.parentNode;
  }
  return !1;
}, Cm = (e, t, r) => {
  for (var {
    childNodes: n
  } = e, a = n[t], o = t, i = !1, s = !1; (FE(a) || jr(a) && a.childNodes.length === 0 || jr(a) && a.getAttribute("contenteditable") === "false") && !(i && s); ) {
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
}, NE = (e, t, r) => {
  var [n] = Cm(e, t, r);
  return n;
}, Em = (e) => {
  var t = "";
  if (ym(e) && e.nodeValue)
    return e.nodeValue;
  if (jr(e)) {
    for (var r of Array.from(e.childNodes))
      t += Em(r);
    var n = getComputedStyle(e).getPropertyValue("display");
    (n === "block" || n === "list" || e.tagName === "BR") && (t += `
`);
  }
  return t;
}, IE = /data-slate-fragment="(.+?)"/m, ME = (e) => {
  var t = e.getData("text/html"), [, r] = t.match(IE) || [];
  return r;
}, Nc = (e, t, r) => {
  var {
    target: n
  } = t;
  if (jr(n) && n.matches('[contentEditable="false"]'))
    return !1;
  var {
    document: a
  } = Z.getWindow(e);
  if (a.contains(n))
    return Z.hasDOMNode(e, n, {
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
  return !o || o === t ? !1 : Nc(e, o, r);
}, jE = 0;
class _E {
  constructor() {
    _r(this, "id", void 0), this.id = "".concat(jE++);
  }
}
var Z = {
  androidPendingDiffs: (e) => pr.get(e),
  androidScheduleFlush: (e) => {
    var t;
    (t = Rc.get(e)) === null || t === void 0 || t();
  },
  blur: (e) => {
    var t = Z.toDOMNode(e, e), r = Z.findDocumentOrShadowRoot(e);
    Wn.set(e, !1), r.activeElement === t && t.blur();
  },
  deselect: (e) => {
    var {
      selection: t
    } = e, r = Z.findDocumentOrShadowRoot(e), n = r.getSelection();
    n && n.rangeCount > 0 && n.removeAllRanges(), t && J.deselect(e);
  },
  findDocumentOrShadowRoot: (e) => {
    var t = Z.toDOMNode(e, e), r = t.getRootNode();
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
    var o = Z.toSlateNode(e, t.target), i = Z.findPath(e, o);
    if (ve.isElement(o) && C.isVoid(e, o)) {
      var s = a.getBoundingClientRect(), u = e.isInline(o) ? r - s.left < s.left + s.width - r : n - s.top < s.top + s.height - n, l = C.point(e, i, {
        edge: u ? "start" : "end"
      }), c = u ? C.before(e, l) : C.after(e, l);
      if (c) {
        var d = C.range(e, c);
        return d;
      }
    }
    var g, {
      document: p
    } = Z.getWindow(e);
    if (p.caretRangeFromPoint)
      g = p.caretRangeFromPoint(r, n);
    else {
      var h = p.caretPositionFromPoint(r, n);
      h && (g = p.createRange(), g.setStart(h.offsetNode, h.offset), g.setEnd(h.offsetNode, h.offset));
    }
    if (!g)
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
    var f = Z.toSlateRange(e, g, {
      exactMatch: !1,
      suppressThrow: !1
    });
    return f;
  },
  findKey: (e, t) => {
    var r = bs.get(t);
    return r || (r = new _E(), bs.set(t, r)), r;
  },
  findPath: (e, t) => {
    for (var r = [], n = t; ; ) {
      var a = Pc.get(n);
      if (a == null) {
        if (C.isEditor(n))
          return r;
        break;
      }
      var o = Fc.get(n);
      if (o == null)
        break;
      r.unshift(o), n = a;
    }
    throw new Error("Unable to find the path for Slate node: ".concat(Yt.stringify(t)));
  },
  focus: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      retries: 5
    };
    if (!Wn.get(t)) {
      if (r.retries <= 0)
        throw new Error("Could not set focus, editor seems stuck with pending operations");
      if (t.operations.length > 0) {
        setTimeout(() => {
          Z.focus(t, {
            retries: r.retries - 1
          });
        }, 10);
        return;
      }
      var n = Z.toDOMNode(t, t), a = Z.findDocumentOrShadowRoot(t);
      if (a.activeElement !== n) {
        if (t.selection && a instanceof Document) {
          var o = a.getSelection(), i = Z.toDOMRange(t, t.selection);
          o == null || o.removeAllRanges(), o == null || o.addRange(i);
        }
        t.selection || (J.select(t, C.start(t, [])), t.onChange()), Wn.set(t, !0), n.focus({
          preventScroll: !0
        });
      }
    }
  },
  getWindow: (e) => {
    var t = hm.get(e);
    if (!t)
      throw new Error("Unable to find a host window element for this editor");
    return t;
  },
  hasDOMNode: function(t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      editable: a = !1
    } = n, o = Z.toDOMNode(t, t), i;
    try {
      i = jr(r) ? r : r.parentElement;
    } catch (s) {
      if (s instanceof Error && !s.message.includes('Permission denied to access property "nodeType"'))
        throw s;
    }
    return i ? i.closest("[data-slate-editor]") === o && (!a || i.isContentEditable ? !0 : typeof i.isContentEditable == "boolean" && // isContentEditable exists only on HTMLElement, and on other nodes it will be undefined
    // this is the core logic that lets you know you got the right editor.selection instead of null when editor is contenteditable="false"(readOnly)
    i.closest('[contenteditable="false"]') === o || !!i.getAttribute("data-slate-zero-width")) : !1;
  },
  hasEditableTarget: (e, t) => Xn(t) && Z.hasDOMNode(e, t, {
    editable: !0
  }),
  hasRange: (e, t) => {
    var {
      anchor: r,
      focus: n
    } = t;
    return C.hasPath(e, r.path) && C.hasPath(e, n.path);
  },
  hasSelectableTarget: (e, t) => Z.hasEditableTarget(e, t) || Z.isTargetInsideNonReadonlyVoid(e, t),
  hasTarget: (e, t) => Xn(t) && Z.hasDOMNode(e, t),
  insertData: (e, t) => {
    e.insertData(t);
  },
  insertFragmentData: (e, t) => e.insertFragmentData(t),
  insertTextData: (e, t) => e.insertTextData(t),
  isComposing: (e) => !!da.get(e),
  isFocused: (e) => !!Wn.get(e),
  isReadOnly: (e) => !!dl.get(e),
  isTargetInsideNonReadonlyVoid: (e, t) => {
    if (dl.get(e))
      return !1;
    var r = Z.hasTarget(e, t) && Z.toSlateNode(e, t);
    return ve.isElement(r) && C.isVoid(e, r);
  },
  setFragmentData: (e, t, r) => e.setFragmentData(t, r),
  toDOMNode: (e, t) => {
    var r = Hs.get(e), n = C.isEditor(t) ? rs.get(e) : r == null ? void 0 : r.get(Z.findKey(e, t));
    if (!n)
      throw new Error("Cannot resolve a DOM node from Slate node: ".concat(Yt.stringify(t)));
    return n;
  },
  toDOMPoint: (e, t) => {
    var [r] = C.node(e, t.path), n = Z.toDOMNode(e, r), a;
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
        } = c.textContent, g = l.getAttribute("data-slate-length"), p = g == null ? d : parseInt(g, 10), h = s + p, f = i[u + 1];
        if (t.offset === h && f !== null && f !== void 0 && f.hasAttribute("data-slate-mark-placeholder")) {
          var m, b = f.childNodes[0];
          a = [
            // COMPAT: If we don't explicity set the dom point to be on the actual
            // dom text element, chrome will put the selection behind the actual dom
            // text element, causing domRange.getBoundingClientRect() calls on a collapsed
            // selection to return incorrect zero values (https://bugs.chromium.org/p/chromium/issues/detail?id=435438)
            // which will cause issues when scrolling to it.
            b instanceof $E ? b : f,
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
      throw new Error("Cannot resolve a DOM point from Slate point: ".concat(Yt.stringify(t)));
    return a;
  },
  toDOMRange: (e, t) => {
    var {
      anchor: r,
      focus: n
    } = t, a = U.isBackward(t), o = Z.toDOMPoint(e, r), i = U.isCollapsed(t) ? o : Z.toDOMPoint(e, n), s = Z.getWindow(e), u = s.document.createRange(), [l, c] = a ? i : o, [d, g] = a ? o : i, p = jr(l) ? l : l.parentElement, h = !!p.getAttribute("data-slate-zero-width"), f = jr(d) ? d : d.parentElement, m = !!f.getAttribute("data-slate-zero-width");
    return u.setStart(l, h ? 1 : c), u.setEnd(d, m ? 1 : g), u;
  },
  toSlateNode: (e, t) => {
    var r = jr(t) ? t : t.parentElement;
    r && !r.hasAttribute("data-slate-node") && (r = r.closest("[data-slate-node]"));
    var n = r ? ni.get(r) : null;
    if (!n)
      throw new Error("Cannot resolve a Slate node from DOM node: ".concat(r));
    return n;
  },
  toSlatePoint: (e, t, r) => {
    var {
      exactMatch: n,
      suppressThrow: a
    } = r, [o, i] = n ? t : RE(t), s = o.parentNode, u = null, l = 0;
    if (s) {
      var c, d, g = Z.toDOMNode(e, e), p = s.closest('[data-slate-void="true"]'), h = p && g.contains(p) ? p : null, f = s.closest("[data-slate-leaf]"), m = null;
      if (f) {
        if (u = f.closest('[data-slate-node="text"]'), u) {
          var b = Z.getWindow(e), E = b.document.createRange();
          E.setStart(u, 0), E.setEnd(o, i);
          var y = E.cloneContents(), w = [...Array.prototype.slice.call(y.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(y.querySelectorAll("[contenteditable=false]"))];
          w.forEach((N) => {
            if (fr && !n && N.hasAttribute("data-slate-zero-width") && N.textContent.length > 0 && N.textContext !== "\uFEFF") {
              N.textContent.startsWith("\uFEFF") && (N.textContent = N.textContent.slice(1));
              return;
            }
            N.parentNode.removeChild(N);
          }), l = y.textContent.length, m = u;
        }
      } else if (h) {
        for (var S = h.querySelectorAll("[data-slate-leaf]"), D = 0; D < S.length; D++) {
          var x = S[D];
          if (Z.hasDOMNode(e, x)) {
            f = x;
            break;
          }
        }
        f ? (u = f.closest('[data-slate-node="text"]'), m = f, l = m.textContent.length, m.querySelectorAll("[data-slate-zero-width]").forEach((N) => {
          l -= N.textContent.length;
        })) : l = 1;
      }
      m && l === m.textContent.length && // COMPAT: Android IMEs might remove the zero width space while composing,
      // and we don't add it for line-breaks.
      fr && m.getAttribute("data-slate-zero-width") === "z" && (c = m.textContent) !== null && c !== void 0 && c.startsWith("\uFEFF") && // COMPAT: If the parent node is a Slate zero-width space, editor is
      // because the text node should have no characters. However, during IME
      // composition the ASCII characters will be prepended to the zero-width
      // space, so subtract 1 from the offset to account for the zero-width
      // space character.
      (s.hasAttribute("data-slate-zero-width") || // COMPAT: In Firefox, `range.cloneContents()` returns an extra trailing '\n'
      // when the document ends with a new-line character. This results in the offset
      // length being off by one, so we need to subtract one to account for this.
      Qa && (d = m.textContent) !== null && d !== void 0 && d.endsWith(`

`)) && l--;
    }
    if (fr && !u && !n) {
      var B = s.hasAttribute("data-slate-node") ? s : s.closest("[data-slate-node]");
      if (B && Z.hasDOMNode(e, B, {
        editable: !0
      })) {
        var O = Z.toSlateNode(e, B), {
          path: A,
          offset: _
        } = C.start(e, Z.findPath(e, O));
        return B.querySelector("[data-slate-leaf]") || (_ = i), {
          path: A,
          offset: _
        };
      }
    }
    if (!u) {
      if (a)
        return null;
      throw new Error("Cannot resolve a Slate point from DOM point: ".concat(t));
    }
    var P = Z.toSlateNode(e, u), $ = Z.findPath(e, P);
    return {
      path: $,
      offset: l
    };
  },
  toSlateRange: (e, t, r) => {
    var n, {
      exactMatch: a,
      suppressThrow: o
    } = r, i = gl(t) ? t.anchorNode : t.startContainer, s, u, l, c, d;
    if (i)
      if (gl(t)) {
        if (Qa && t.rangeCount > 1) {
          l = t.focusNode;
          var g = t.getRangeAt(0), p = t.getRangeAt(t.rangeCount - 1);
          if (l instanceof HTMLTableRowElement && g.startContainer instanceof HTMLTableRowElement && p.startContainer instanceof HTMLTableRowElement) {
            let D = function(x) {
              return x.childElementCount > 0 ? D(x.children[0]) : x;
            };
            var h = g.startContainer, f = p.startContainer, m = D(h.children[g.startOffset]), b = D(f.children[p.startOffset]);
            c = 0, b.childNodes.length > 0 ? s = b.childNodes[0] : s = b, m.childNodes.length > 0 ? l = m.childNodes[0] : l = m, b instanceof HTMLElement ? u = b.innerHTML.length : u = 0;
          } else
            g.startContainer === l ? (s = p.endContainer, u = p.endOffset, c = g.startOffset) : (s = g.startContainer, u = g.endOffset, c = p.startOffset);
        } else
          s = t.anchorNode, u = t.anchorOffset, l = t.focusNode, c = t.focusOffset;
        mm && TE(s) || Qa ? d = t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : d = t.isCollapsed;
      } else
        s = t.startContainer, u = t.startOffset, l = t.endContainer, c = t.endOffset, d = t.collapsed;
    if (s == null || l == null || u == null || c == null)
      throw new Error("Cannot resolve a Slate range from DOM range: ".concat(t));
    if (Qa && (n = l.textContent) !== null && n !== void 0 && n.endsWith(`

`) && c === l.textContent.length && c--, "getAttribute" in l && l.getAttribute("contenteditable") === "false" && l.getAttribute("data-slate-void") !== "true") {
      var E;
      l = s, c = ((E = s.textContent) === null || E === void 0 ? void 0 : E.length) || 0;
    }
    var y = Z.toSlatePoint(e, [s, u], {
      exactMatch: a,
      suppressThrow: o
    });
    if (!y)
      return null;
    var w = d ? y : Z.toSlatePoint(e, [l, c], {
      exactMatch: a,
      suppressThrow: o
    });
    if (!w)
      return null;
    var S = {
      anchor: y,
      focus: w
    };
    return U.isExpanded(S) && U.isForward(S) && jr(l) && C.void(e, {
      at: S.focus,
      mode: "highest"
    }) && (S = C.unhangRange(e, S, {
      voids: !0
    })), S;
  }
};
function LE(e, t) {
  var {
    path: r,
    diff: n
  } = t;
  if (!C.hasPath(e, r))
    return !1;
  var a = fe.get(e, r);
  if (!Oe.isText(a))
    return !1;
  if (n.start !== a.text.length || n.text.length === 0)
    return a.text.slice(n.start, n.start + n.text.length) === n.text;
  var o = L.next(r);
  if (!C.hasPath(e, o))
    return !1;
  var i = fe.get(e, o);
  return Oe.isText(i) && i.text.startsWith(n.text);
}
function wm(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return r.reduce((a, o) => a.slice(0, o.start) + o.text + a.slice(o.end), e);
}
function kE(e, t) {
  for (var r = Math.min(e.length, t.length), n = 0; n < r; n++)
    if (e.charAt(n) !== t.charAt(n))
      return n;
  return r;
}
function zE(e, t, r) {
  for (var n = Math.min(e.length, t.length, r), a = 0; a < n; a++)
    if (e.charAt(e.length - a - 1) !== t.charAt(t.length - a - 1))
      return a;
  return n;
}
function Dm(e, t) {
  var {
    start: r,
    end: n,
    text: a
  } = t, o = e.slice(r, n), i = kE(o, a), s = Math.min(o.length - i, a.length - i), u = zE(o, a, s), l = {
    start: r + i,
    end: n - u,
    text: a.slice(i, a.length - u)
  };
  return l.start === l.end && l.text.length === 0 ? null : l;
}
function VE(e, t, r) {
  var n = Math.min(t.start, r.start), a = Math.max(0, Math.min(t.start + t.text.length, r.end) - r.start), o = wm(e, t, r), i = Math.max(r.start + r.text.length, t.start + t.text.length + (t.start + t.text.length > r.start ? r.text.length : 0) - a), s = o.slice(n, i), u = Math.max(t.end, r.end - t.text.length + (t.end - t.start));
  return Dm(e, {
    start: n,
    end: u,
    text: s
  });
}
function HE(e) {
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
function ml(e, t) {
  var {
    path: r,
    offset: n
  } = t;
  if (!C.hasPath(e, r))
    return null;
  var a = fe.get(e, r);
  if (!Oe.isText(a))
    return null;
  var o = C.above(e, {
    match: (s) => ve.isElement(s) && C.isBlock(e, s),
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
function $d(e, t) {
  var r = ml(e, t.anchor);
  if (!r)
    return null;
  if (U.isCollapsed(t))
    return {
      anchor: r,
      focus: r
    };
  var n = ml(e, t.focus);
  return n ? {
    anchor: r,
    focus: n
  } : null;
}
function hl(e, t, r) {
  var n = pr.get(e), a = n == null ? void 0 : n.find((c) => {
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
function Fd(e, t, r) {
  var n = hl(e, t.anchor, r);
  if (!n)
    return null;
  if (U.isCollapsed(t))
    return {
      anchor: n,
      focus: n
    };
  var a = hl(e, t.focus, r);
  return a ? {
    anchor: n,
    focus: a
  } : null;
}
function WE(e, t) {
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
function Pd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ji(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pd(Object(r), !0).forEach(function(n) {
      _r(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var KE = 25, qE = 200, UE = function() {
}, GE = (e) => (e == null ? void 0 : e.constructor.name) === "DataTransfer";
function XE(e) {
  var {
    editor: t,
    scheduleOnDOMSelectionChange: r,
    onDOMSelectionChange: n
  } = e, a = !1, o = null, i = null, s = null, u = 0, l = !1, c = () => {
    var P = Vn.get(t);
    if (Vn.delete(t), P) {
      var {
        selection: $
      } = t, N = $d(t, P);
      N && (!$ || !U.equals(N, $)) && J.select(t, N);
    }
  }, d = () => {
    var P = zn.get(t);
    if (zn.delete(t), !!P) {
      if (P.at) {
        var $ = Ge.isPoint(P.at) ? ml(t, P.at) : $d(t, P.at);
        if (!$)
          return;
        var N = C.range(t, $);
        (!t.selection || !U.equals(t.selection, N)) && J.select(t, $);
      }
      P.run();
    }
  }, g = () => {
    if (i && (clearTimeout(i), i = null), s && (clearTimeout(s), s = null), !w() && !y()) {
      c();
      return;
    }
    a || (a = !0, setTimeout(() => a = !1)), y() && (a = "action");
    var P = t.selection && C.rangeRef(t, t.selection, {
      affinity: "forward"
    });
    xn.set(t, t.marks), UE("flush", zn.get(t), pr.get(t));
    for (var $ = w(), N; N = (R = pr.get(t)) === null || R === void 0 ? void 0 : R[0]; ) {
      var R, M, F = Xr.get(t);
      F !== void 0 && (Xr.delete(t), t.marks = F), F && l === !1 && (l = null);
      var T = HE(N);
      (!t.selection || !U.equals(t.selection, T)) && J.select(t, T), N.diff.text ? C.insertText(t, N.diff.text) : C.deleteFragment(t), pr.set(t, (M = pr.get(t)) === null || M === void 0 ? void 0 : M.filter((K) => {
        var {
          id: X
        } = K;
        return X !== N.id;
      })), LE(t, N) || ($ = !1, zn.delete(t), xn.delete(t), a = "action", Vn.delete(t), r.cancel(), n.cancel(), P == null || P.unref());
    }
    var k = P == null ? void 0 : P.unref();
    if (k && !Vn.get(t) && (!t.selection || !U.equals(k, t.selection)) && J.select(t, k), y()) {
      d();
      return;
    }
    $ && r(), r.flush(), n.flush(), c();
    var H = xn.get(t);
    xn.delete(t), H !== void 0 && (t.marks = H, t.onChange());
  }, p = (P) => {
    o && clearTimeout(o), o = setTimeout(() => {
      da.set(t, !1), g();
    }, KE);
  }, h = (P) => {
    da.set(t, !0), o && (clearTimeout(o), o = null);
  }, f = function() {
    var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, N = fl.get(t);
    if (N) {
      if (w() || $) {
        N.style.display = "none";
        return;
      }
      N.style.removeProperty("display");
    }
  }, m = (P, $) => {
    var N, R = (N = pr.get(t)) !== null && N !== void 0 ? N : [];
    pr.set(t, R);
    var M = fe.leaf(t, P), F = R.findIndex((H) => L.equals(H.path, P));
    if (F < 0) {
      var T = Dm(M.text, $);
      T && R.push({
        path: P,
        diff: $,
        id: u++
      }), f();
      return;
    }
    var k = VE(M.text, R[F].diff, $);
    if (!k) {
      R.splice(F, 1), f();
      return;
    }
    R[F] = ji(ji({}, R[F]), {}, {
      diff: k
    });
  }, b = function($) {
    var {
      at: N
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    l = !1, Vn.delete(t), r.cancel(), n.cancel(), y() && g(), zn.set(t, {
      at: N,
      run: $
    }), s = setTimeout(g);
  }, E = (P) => {
    var $;
    i && (clearTimeout(i), i = null);
    var {
      inputType: N
    } = P, R = null, M = P.dataTransfer || P.data || void 0;
    l !== !1 && N !== "insertText" && N !== "insertCompositionText" && (l = !1);
    var [F] = P.getTargetRanges();
    F && (R = Z.toSlateRange(t, F, {
      exactMatch: !1,
      suppressThrow: !0
    }));
    var T = Z.getWindow(t), k = T.getSelection();
    if (!R && k && (F = k, R = Z.toSlateRange(t, k, {
      exactMatch: !1,
      suppressThrow: !0
    })), R = ($ = R) !== null && $ !== void 0 ? $ : t.selection, !!R) {
      var H = !0;
      if (N.startsWith("delete")) {
        if (U.isExpanded(R)) {
          var [K, X] = U.edges(R), Q = fe.leaf(t, K.path);
          if (Q.text.length === K.offset && X.offset === 0) {
            var I = C.next(t, {
              at: K.path,
              match: Oe.isText
            });
            I && L.equals(I[1], X.path) && (R = {
              anchor: X,
              focus: X
            });
          }
        }
        var z = N.endsWith("Backward") ? "backward" : "forward", [V, q] = U.edges(R), [te, re] = C.leaf(t, V.path), le = {
          text: "",
          start: V.offset,
          end: q.offset
        }, oe = pr.get(t), ge = oe == null ? void 0 : oe.find((_e) => L.equals(_e.path, re)), ce = ge ? [ge.diff, le] : [le], Y = wm(te.text, ...ce);
        if (Y.length === 0 && (H = !1), U.isExpanded(R)) {
          if (H && L.equals(R.anchor.path, R.focus.path)) {
            var pe = {
              path: R.anchor.path,
              offset: V.offset
            }, Se = C.range(t, pe, pe);
            return x(Se), m(R.anchor.path, {
              text: "",
              end: q.offset,
              start: V.offset
            });
          }
          return b(() => C.deleteFragment(t, {
            direction: z
          }), {
            at: R
          });
        }
      }
      switch (N) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag":
          return b(() => C.deleteFragment(t), {
            at: R
          });
        case "deleteContent":
        case "deleteContentForward": {
          var {
            anchor: ye
          } = R;
          if (H && U.isCollapsed(R)) {
            var we = fe.leaf(t, ye.path);
            if (ye.offset < we.text.length)
              return m(ye.path, {
                text: "",
                start: ye.offset,
                end: ye.offset + 1
              });
          }
          return b(() => C.deleteForward(t), {
            at: R
          });
        }
        case "deleteContentBackward": {
          var de, {
            anchor: Ee
          } = R, he = gl(F) ? F.isCollapsed : !!((de = F) !== null && de !== void 0 && de.collapsed);
          return H && he && U.isCollapsed(R) && Ee.offset > 0 ? m(Ee.path, {
            text: "",
            start: Ee.offset - 1,
            end: Ee.offset
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
          if (GE(M))
            return b(() => Z.insertData(t, M), {
              at: R
            });
          var me = M ?? "";
          if (Xr.get(t) && (me = me.replace("\uFEFF", "")), N === "insertText" && /.*\n.*\n$/.test(me) && (me = me.slice(0, -1)), me.includes(`
`))
            return b(() => {
              var _e = me.split(`
`);
              _e.forEach((Ce, ke) => {
                Ce && C.insertText(t, Ce), ke !== _e.length - 1 && C.insertSoftBreak(t);
              });
            }, {
              at: R
            });
          if (L.equals(R.anchor.path, R.focus.path)) {
            var [be, Ie] = U.edges(R), Re = {
              start: be.offset,
              end: Ie.offset,
              text: me
            };
            if (me && l && N === "insertCompositionText") {
              var je = l.start + l.text.search(/\S|$/), bt = Re.start + Re.text.search(/\S|$/);
              bt === je + 1 && Re.end === l.start + l.text.length ? (Re.start -= 1, l = null, A()) : l = !1;
            } else
              N === "insertText" ? l === null ? l = Re : l && U.isCollapsed(R) && l.end + l.text.length === be.offset ? l = ji(ji({}, l), {}, {
                text: l.text + me
              }) : l = !1 : l = !1;
            if (H) {
              m(be.path, Re);
              return;
            }
          }
          return b(() => C.insertText(t, me), {
            at: R
          });
        }
      }
    }
  }, y = () => !!zn.get(t), w = () => {
    var P;
    return !!((P = pr.get(t)) !== null && P !== void 0 && P.length);
  }, S = () => y() || w(), D = () => a, x = (P) => {
    Vn.set(t, P), i && (clearTimeout(i), i = null);
    var {
      selection: $
    } = t;
    if (P) {
      var N = !$ || !L.equals($.anchor.path, P.anchor.path), R = !$ || !L.equals($.anchor.path.slice(0, -1), P.anchor.path.slice(0, -1));
      (N && l || R) && (l = !1), (N || w()) && (i = setTimeout(g, qE));
    }
  }, B = () => {
    (y() || !w()) && g();
  }, O = (P) => {
    w() || (f(!0), setTimeout(f));
  }, A = () => {
    y() || (s = setTimeout(g));
  }, _ = (P) => {
    if (!(w() || y()) && P.some((N) => Nc(t, N, P))) {
      var $;
      ($ = pm.get(t)) === null || $ === void 0 || $();
    }
  };
  return {
    flush: g,
    scheduleFlush: A,
    hasPendingDiffs: w,
    hasPendingAction: y,
    hasPendingChanges: S,
    isFlushing: D,
    handleUserSelect: x,
    handleCompositionEnd: p,
    handleCompositionStart: h,
    handleDOMBeforeInput: E,
    handleKeyDown: O,
    handleDomMutations: _,
    handleInput: B
  };
}
function YE() {
  var e = Je(!1);
  return zt(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e.current;
}
var xa = ts ? Lg : zt;
function ZE(e, t, r) {
  var [n] = ir(() => new MutationObserver(t));
  xa(() => {
    n.takeRecords();
  }), zt(() => {
    if (!e.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    return n.observe(e.current, r), () => n.disconnect();
  }, [n, e, r]);
}
var QE = ["node"];
function Rd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function JE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rd(Object(r), !0).forEach(function(n) {
      _r(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var ew = {
  subtree: !0,
  childList: !0,
  characterData: !0
}, tw = fr ? (e) => {
  var {
    node: t
  } = e, r = io(e, QE);
  if (!fr)
    return null;
  var n = lr(), a = YE(), [o] = ir(() => XE(JE({
    editor: n
  }, r)));
  return ZE(t, o.handleDomMutations, ew), Rc.set(n, o.scheduleFlush), a && o.flush(), o;
} : () => null, rw = ["anchor", "focus"], nw = ["anchor", "focus"], aw = (e, t) => Object.keys(e).length === Object.keys(t).length && Object.keys(e).every((r) => t.hasOwnProperty(r) && e[r] === t[r]), Sm = (e, t) => {
  var r = io(e, rw), n = io(t, nw);
  return e[so] === t[so] && aw(r, n);
}, ow = (e, t) => {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++) {
    var n = e[r], a = t[r];
    if (!U.equals(n, a) || !Sm(n, a))
      return !1;
  }
  return !0;
}, iw = (e, t) => {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++) {
    var n = e[r], a = t[r];
    if (n.anchor.offset !== a.anchor.offset || n.focus.offset !== a.focus.offset || !Sm(n, a))
      return !1;
  }
  return !0;
};
function Td(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Td(Object(r), !0).forEach(function(n) {
      _r(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Td(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var uw = (e) => {
  var {
    isLast: t,
    leaf: r,
    parent: n,
    text: a
  } = e, o = lr(), i = Z.findPath(o, a), s = L.parent(i), u = !!r[bm];
  return o.isVoid(n) ? /* @__PURE__ */ ee.createElement(xu, {
    length: fe.string(n).length
  }) : r.text === "" && n.children[n.children.length - 1] === a && !o.isInline(n) && C.string(o, s) === "" ? /* @__PURE__ */ ee.createElement(xu, {
    isLineBreak: !0,
    isMarkPlaceholder: u
  }) : r.text === "" ? /* @__PURE__ */ ee.createElement(xu, {
    isMarkPlaceholder: u
  }) : t && r.text.slice(-1) === `
` ? /* @__PURE__ */ ee.createElement(Nd, {
    isTrailing: !0,
    text: r.text
  }) : /* @__PURE__ */ ee.createElement(Nd, {
    text: r.text
  });
}, Nd = (e) => {
  var {
    text: t,
    isTrailing: r = !1
  } = e, n = Je(null), a = () => "".concat(t ?? "").concat(r ? `
` : ""), [o] = ir(a);
  return xa(() => {
    var i = a();
    n.current && n.current.textContent !== i && (n.current.textContent = i);
  }), /* @__PURE__ */ ee.createElement(lw, {
    ref: n
  }, o);
}, lw = /* @__PURE__ */ Z0(/* @__PURE__ */ Rr((e, t) => /* @__PURE__ */ ee.createElement("span", {
  "data-slate-string": !0,
  ref: t
}, e.children))), xu = (e) => {
  var {
    length: t = 0,
    isLineBreak: r = !1,
    isMarkPlaceholder: n = !1
  } = e, a = {
    "data-slate-zero-width": r ? "n" : "z",
    "data-slate-length": t
  };
  return n && (a["data-slate-mark-placeholder"] = !0), /* @__PURE__ */ ee.createElement("span", sw({}, a), !fr || !r ? "\uFEFF" : null, r ? /* @__PURE__ */ ee.createElement("br", null) : null);
};
function Id(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Id(Object(r), !0).forEach(function(n) {
      _r(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Id(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var cw = fr ? 300 : 0;
function fw(e, t) {
  e.current && (e.current.disconnect(), t && (e.current = null));
}
function Md(e) {
  e.current && (clearTimeout(e.current), e.current = null);
}
var dw = (e) => {
  var {
    leaf: t,
    isLast: r,
    text: n,
    parent: a,
    renderPlaceholder: o,
    renderLeaf: i = (E) => /* @__PURE__ */ ee.createElement(gw, xm({}, E))
  } = e, s = lr(), u = Je(null), l = Je(null), [c, d] = ir(!1), g = Je(null), p = rt((E) => {
    if (fw(u, E == null), E == null) {
      var y;
      fl.delete(s), (y = t.onPlaceholderResize) === null || y === void 0 || y.call(t, null);
    } else {
      if (fl.set(s, E), !u.current) {
        var w = window.ResizeObserver || mE;
        u.current = new w(() => {
          var S;
          (S = t.onPlaceholderResize) === null || S === void 0 || S.call(t, E);
        });
      }
      u.current.observe(E), l.current = E;
    }
  }, [l, t, s]), h = /* @__PURE__ */ ee.createElement(uw, {
    isLast: r,
    leaf: t,
    parent: a,
    text: n
  }), f = !!t[so];
  if (zt(() => (f ? g.current || (g.current = setTimeout(() => {
    d(!0), g.current = null;
  }, cw)) : (Md(g), d(!1)), () => Md(g)), [f, d]), f && c) {
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
          WebkitUserModify: _o ? "inherit" : void 0
        },
        contentEditable: !1,
        ref: p
      }
    };
    h = /* @__PURE__ */ ee.createElement(ee.Fragment, null, o(m), h);
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
}, vw = /* @__PURE__ */ ee.memo(dw, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && Oe.equals(t.leaf, e.leaf) && t.leaf[so] === e.leaf[so]), gw = (e) => {
  var {
    attributes: t,
    children: r
  } = e;
  return /* @__PURE__ */ ee.createElement("span", xm({}, t), r);
}, mw = (e) => {
  for (var {
    decorations: t,
    isLast: r,
    parent: n,
    renderPlaceholder: a,
    renderLeaf: o,
    text: i
  } = e, s = lr(), u = Je(null), l = Oe.decorations(i, t), c = Z.findKey(s, i), d = [], g = 0; g < l.length; g++) {
    var p = l[g];
    d.push(/* @__PURE__ */ ee.createElement(vw, {
      isLast: r && g === l.length - 1,
      key: "".concat(c.id, "-").concat(g),
      renderPlaceholder: a,
      leaf: p,
      text: i,
      parent: n,
      renderLeaf: o
    }));
  }
  var h = rt((f) => {
    var m = Hs.get(s);
    f ? (m == null || m.set(c, f), ya.set(i, f), ni.set(f, i)) : (m == null || m.delete(c), ya.delete(i), u.current && ni.delete(u.current)), u.current = f;
  }, [u, s, c, i]);
  return /* @__PURE__ */ ee.createElement("span", {
    "data-slate-node": "text",
    ref: h
  }, d);
}, Om = /* @__PURE__ */ ee.memo(mw, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && iw(t.decorations, e.decorations));
function jd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jd(Object(r), !0).forEach(function(n) {
      _r(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var hw = (e) => {
  var {
    decorations: t,
    element: r,
    renderElement: n = (E) => /* @__PURE__ */ ee.createElement(bw, pl({}, E)),
    renderPlaceholder: a,
    renderLeaf: o,
    selection: i
  } = e, s = lr(), u = Pm(), l = s.isInline(r), c = Z.findKey(s, r), d = rt((E) => {
    var y = Hs.get(s);
    E ? (y == null || y.set(c, E), ya.set(r, E), ni.set(E, r)) : (y == null || y.delete(c), ya.delete(r));
  }, [s, c, r]), g = $m({
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
    var h = fe.string(r), f = Jg(h);
    f === "rtl" && (p.dir = f);
  }
  if (C.isVoid(s, r)) {
    p["data-slate-void"] = !0, !u && l && (p.contentEditable = !1);
    var m = l ? "span" : "div", [[b]] = fe.texts(r);
    g = /* @__PURE__ */ ee.createElement(m, {
      "data-slate-spacer": !0,
      style: {
        height: "0",
        color: "transparent",
        outline: "none",
        position: "absolute"
      }
    }, /* @__PURE__ */ ee.createElement(Om, {
      renderPlaceholder: a,
      decorations: [],
      isLast: !1,
      parent: r,
      text: b
    })), Fc.set(b, 0), Pc.set(b, r);
  }
  return n({
    attributes: p,
    children: g,
    element: r
  });
}, pw = /* @__PURE__ */ ee.memo(hw, (e, t) => e.element === t.element && e.renderElement === t.renderElement && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && ow(e.decorations, t.decorations) && (e.selection === t.selection || !!e.selection && !!t.selection && U.equals(e.selection, t.selection))), bw = (e) => {
  var {
    attributes: t,
    children: r,
    element: n
  } = e, a = lr(), o = a.isInline(n) ? "span" : "div";
  return /* @__PURE__ */ ee.createElement(o, pl(pl({}, t), {}, {
    style: {
      position: "relative"
    }
  }), r);
}, Bm = /* @__PURE__ */ zr(() => []), yw = () => Rt(Bm), Am = /* @__PURE__ */ zr(!1), xN = () => Rt(Am), $m = (e) => {
  for (var {
    decorations: t,
    node: r,
    renderElement: n,
    renderPlaceholder: a,
    renderLeaf: o,
    selection: i
  } = e, s = yw(), u = lr(), l = Z.findPath(u, r), c = [], d = ve.isElement(r) && !u.isInline(r) && C.hasInlines(u, r), g = 0; g < r.children.length; g++) {
    var p = l.concat(g), h = r.children[g], f = Z.findKey(u, h), m = C.range(u, p), b = i && U.intersection(m, i), E = s([h, p]);
    for (var y of t) {
      var w = U.intersection(y, m);
      w && E.push(w);
    }
    ve.isElement(h) ? c.push(/* @__PURE__ */ ee.createElement(Am.Provider, {
      key: "provider-".concat(f.id),
      value: !!b
    }, /* @__PURE__ */ ee.createElement(pw, {
      decorations: E,
      element: h,
      key: f.id,
      renderElement: n,
      renderPlaceholder: a,
      renderLeaf: o,
      selection: b
    }))) : c.push(/* @__PURE__ */ ee.createElement(Om, {
      decorations: E,
      key: f.id,
      isLast: d && g === r.children.length - 1,
      parent: r,
      renderPlaceholder: a,
      renderLeaf: o,
      text: h
    })), Fc.set(h, g), Pc.set(h, r);
  }
  return c;
}, Fm = /* @__PURE__ */ zr(!1), Pm = () => Rt(Fm), Ic = /* @__PURE__ */ zr(null), Cw = () => {
  var e = Rt(Ic);
  if (!e)
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  var {
    editor: t
  } = e;
  return t;
}, ON = () => {
  var e = Rt(Ic);
  if (!e)
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  return e;
};
function Ew() {
  var e = lr(), t = Je(!1), r = Je(0), n = rt(() => {
    if (!t.current) {
      t.current = !0;
      var a = Z.getWindow(e);
      a.cancelAnimationFrame(r.current), r.current = a.requestAnimationFrame(() => {
        t.current = !1;
      });
    }
  }, [e]);
  return zt(() => () => cancelAnimationFrame(r.current), []), {
    receivedUserInput: t,
    onUserInput: n
  };
}
var ww = 3, Dw = {
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
}, Sw = {
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
}, xw = {
  deleteWordBackward: "ctrl+shift?+backspace",
  deleteWordForward: "ctrl+shift?+delete",
  redo: ["ctrl+y", "ctrl+shift+z"]
}, Bt = (e) => {
  var t = Dw[e], r = Sw[e], n = xw[e], a = t && Su(t), o = r && Su(r), i = n && Su(n);
  return (s) => !!(a && a(s) || Ad && o && o(s) || !Ad && i && i(s));
}, Ft = {
  isBold: Bt("bold"),
  isCompose: Bt("compose"),
  isMoveBackward: Bt("moveBackward"),
  isMoveForward: Bt("moveForward"),
  isDeleteBackward: Bt("deleteBackward"),
  isDeleteForward: Bt("deleteForward"),
  isDeleteLineBackward: Bt("deleteLineBackward"),
  isDeleteLineForward: Bt("deleteLineForward"),
  isDeleteWordBackward: Bt("deleteWordBackward"),
  isDeleteWordForward: Bt("deleteWordForward"),
  isExtendBackward: Bt("extendBackward"),
  isExtendForward: Bt("extendForward"),
  isExtendLineBackward: Bt("extendLineBackward"),
  isExtendLineForward: Bt("extendLineForward"),
  isItalic: Bt("italic"),
  isMoveLineBackward: Bt("moveLineBackward"),
  isMoveLineForward: Bt("moveLineForward"),
  isMoveWordBackward: Bt("moveWordBackward"),
  isMoveWordForward: Bt("moveWordForward"),
  isRedo: Bt("redo"),
  isSoftBreak: Bt("insertSoftBreak"),
  isSplitBlock: Bt("splitBlock"),
  isTransposeCharacter: Bt("transposeCharacter"),
  isUndo: Bt("undo")
}, Ow = (e, t) => {
  var r = [], n = () => {
    r = [];
  }, a = (i) => {
    if (t.current) {
      var s = i.filter((u) => Nc(e, u, i));
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
}, Bw = {
  subtree: !0,
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0
};
class Rm extends Y0 {
  constructor() {
    super(...arguments), _r(this, "context", null), _r(this, "manager", null), _r(this, "mutationObserver", null);
  }
  observe() {
    var t, {
      node: r
    } = this.props;
    if (!r.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    (t = this.mutationObserver) === null || t === void 0 || t.observe(r.current, Bw);
  }
  componentDidMount() {
    var {
      receivedUserInput: t
    } = this.props, r = this.context;
    this.manager = Ow(r, t), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe();
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
_r(Rm, "contextType", Vs);
var Aw = fr ? Rm : (e) => {
  var {
    children: t
  } = e;
  return /* @__PURE__ */ ee.createElement(ee.Fragment, null, t);
}, $w = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"], Fw = ["text"];
function _d(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _d(Object(r), !0).forEach(function(n) {
      _r(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _d(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Pw = (e) => /* @__PURE__ */ ee.createElement(ee.Fragment, null, $m(e)), Rw = (e) => {
  var t = rt((I) => /* @__PURE__ */ ee.createElement(Tw, sn({}, I)), []), {
    autoFocus: r,
    decorate: n = Nw,
    onDOMBeforeInput: a,
    placeholder: o,
    readOnly: i = !1,
    renderElement: s,
    renderLeaf: u,
    renderPlaceholder: l = t,
    scrollSelectionIntoView: c = Iw,
    style: d = {},
    as: g = "div",
    disableDefaultStyles: p = !1
  } = e, h = io(e, $w), f = Cw(), [m, b] = ir(!1), E = Je(null), y = Je([]), [w, S] = ir(), {
    onUserInput: D,
    receivedUserInput: x
  } = Ew(), [, B] = _g((I) => I + 1, 0);
  pm.set(f, B), dl.set(f, i);
  var O = sr(() => ({
    isDraggingInternally: !1,
    isUpdatingSelection: !1,
    latestElement: null,
    hasMarkPlaceholder: !1
  }), []);
  zt(() => {
    E.current && r && E.current.focus();
  }, [r]);
  var A = Je(), _ = sr(() => K1(() => {
    var I = A.current;
    if ((fr || !Z.isComposing(f)) && (!O.isUpdatingSelection || I != null && I.isFlushing()) && !O.isDraggingInternally) {
      var z = Z.findDocumentOrShadowRoot(f), {
        activeElement: V
      } = z, q = Z.toDOMNode(f, f), te = z.getSelection();
      if (V === q ? (O.latestElement = V, Wn.set(f, !0)) : Wn.delete(f), !te)
        return J.deselect(f);
      var {
        anchorNode: re,
        focusNode: le
      } = te, oe = Z.hasEditableTarget(f, re) || Z.isTargetInsideNonReadonlyVoid(f, re), ge = Z.hasEditableTarget(f, le) || Z.isTargetInsideNonReadonlyVoid(f, le);
      if (oe && ge) {
        var ce = Z.toSlateRange(f, te, {
          exactMatch: !1,
          suppressThrow: !0
        });
        ce && (!Z.isComposing(f) && !(I != null && I.hasPendingChanges()) && !(I != null && I.isFlushing()) ? J.select(f, ce) : I == null || I.handleUserSelect(ce));
      }
      i && (!oe || !ge) && J.deselect(f);
    }
  }, 100), [f, i, O]), P = sr(() => L1(_, 0), [_]);
  A.current = tw({
    node: E,
    onDOMSelectionChange: _,
    scheduleOnDOMSelectionChange: P
  }), xa(() => {
    var I, z, V;
    E.current && (V = Tc(E.current)) ? (hm.set(f, V), rs.set(f, E.current), ya.set(f, E.current), ni.set(E.current, f)) : ya.delete(f);
    var {
      selection: q
    } = f, te = Z.findDocumentOrShadowRoot(f), re = te.getSelection();
    if (!(!re || !Z.isFocused(f) || (I = A.current) !== null && I !== void 0 && I.hasPendingAction())) {
      var le = (Y) => {
        var pe = re.type !== "None";
        if (!(!q && !pe)) {
          var Se = re.focusNode, ye;
          if (Qa && re.rangeCount > 1) {
            var we = re.getRangeAt(0), de = re.getRangeAt(re.rangeCount - 1);
            we.startContainer === Se ? ye = de.endContainer : ye = we.startContainer;
          } else
            ye = re.anchorNode;
          var Ee = rs.get(f), he = !1;
          if (Ee.contains(ye) && Ee.contains(Se) && (he = !0), pe && he && q && !Y) {
            var me = Z.toSlateRange(f, re, {
              exactMatch: !0,
              // domSelection is not necessarily a valid Slate range
              // (e.g. when clicking on contentEditable:false element)
              suppressThrow: !0
            });
            if (me && U.equals(me, q)) {
              var be;
              if (!O.hasMarkPlaceholder || (be = ye) !== null && be !== void 0 && (be = be.parentElement) !== null && be !== void 0 && be.hasAttribute("data-slate-mark-placeholder"))
                return;
            }
          }
          if (q && !Z.hasRange(f, q)) {
            f.selection = Z.toSlateRange(f, re, {
              exactMatch: !1,
              suppressThrow: !0
            });
            return;
          }
          O.isUpdatingSelection = !0;
          var Ie = q && Z.toDOMRange(f, q);
          return Ie ? (Z.isComposing(f) && !fr ? re.collapseToEnd() : U.isBackward(q) ? re.setBaseAndExtent(Ie.endContainer, Ie.endOffset, Ie.startContainer, Ie.startOffset) : re.setBaseAndExtent(Ie.startContainer, Ie.startOffset, Ie.endContainer, Ie.endOffset), c(f, Ie)) : re.removeAllRanges(), Ie;
        }
      };
      re.rangeCount <= 1 && le();
      var oe = ((z = A.current) === null || z === void 0 ? void 0 : z.isFlushing()) === "action";
      if (!fr || !oe) {
        setTimeout(() => {
          O.isUpdatingSelection = !1;
        });
        return;
      }
      var ge = null, ce = requestAnimationFrame(() => {
        if (oe) {
          var Y = (pe) => {
            try {
              var Se = Z.toDOMNode(f, f);
              Se.focus(), le(pe);
            } catch {
            }
          };
          Y(), ge = setTimeout(() => {
            Y(!0), O.isUpdatingSelection = !1;
          });
        }
      });
      return () => {
        cancelAnimationFrame(ce), ge && clearTimeout(ge);
      };
    }
  });
  var $ = rt((I) => {
    if (D(), !i && Z.hasEditableTarget(f, I.target) && !Mw(I, a)) {
      var z;
      if (A.current)
        return A.current.handleDOMBeforeInput(I);
      P.flush(), _.flush();
      var {
        selection: V
      } = f, {
        inputType: q
      } = I, te = I.dataTransfer || I.data || void 0, re = q === "insertCompositionText" || q === "deleteCompositionText";
      if (re && Z.isComposing(f))
        return;
      var le = !1;
      if (q === "insertText" && V && U.isCollapsed(V) && // Only use native character insertion for single characters a-z or space for now.
      // Long-press events (hold a + press 4 = ä) to choose a special character otherwise
      // causes duplicate inserts.
      I.data && I.data.length === 1 && /[a-z ]/i.test(I.data) && // Chrome has issues correctly editing the start of nodes: https://bugs.chromium.org/p/chromium/issues/detail?id=1249405
      // When there is an inline element, e.g. a link, and you select
      // right after it (the start of the next node).
      V.anchor.offset !== 0) {
        var oe, ge;
        le = !0, f.marks && (le = !1);
        var {
          anchor: ce
        } = V, [Y, pe] = Z.toDOMPoint(f, ce), Se = (oe = Y.parentElement) === null || oe === void 0 ? void 0 : oe.closest("a"), ye = Z.getWindow(f);
        if (le && Se && Z.hasDOMNode(f, Se)) {
          var we, de = ye == null ? void 0 : ye.document.createTreeWalker(Se, NodeFilter.SHOW_TEXT).lastChild();
          de === Y && ((we = de.textContent) === null || we === void 0 ? void 0 : we.length) === pe && (le = !1);
        }
        if (le && Y.parentElement && (ye == null || (ge = ye.getComputedStyle(Y.parentElement)) === null || ge === void 0 ? void 0 : ge.whiteSpace) === "pre") {
          var Ee = C.above(f, {
            at: ce.path,
            match: (je) => ve.isElement(je) && C.isBlock(f, je)
          });
          Ee && fe.string(Ee[0]).includes("	") && (le = !1);
        }
      }
      if (!q.startsWith("delete") || q.startsWith("deleteBy")) {
        var [he] = I.getTargetRanges();
        if (he) {
          var me = Z.toSlateRange(f, he, {
            exactMatch: !1,
            suppressThrow: !1
          });
          if (!V || !U.equals(V, me)) {
            le = !1;
            var be = !re && f.selection && C.rangeRef(f, f.selection);
            J.select(f, me), be && Wo.set(f, be);
          }
        }
      }
      if (re)
        return;
      if (le || I.preventDefault(), V && U.isExpanded(V) && q.startsWith("delete")) {
        var Ie = q.endsWith("Backward") ? "backward" : "forward";
        C.deleteFragment(f, {
          direction: Ie
        });
        return;
      }
      switch (q) {
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
          q === "insertFromComposition" && Z.isComposing(f) && (b(!1), da.set(f, !1)), (te == null ? void 0 : te.constructor.name) === "DataTransfer" ? Z.insertData(f, te) : typeof te == "string" && (le ? y.current.push(() => C.insertText(f, te)) : C.insertText(f, te));
          break;
        }
      }
      var Re = (z = Wo.get(f)) === null || z === void 0 ? void 0 : z.unref();
      Wo.delete(f), Re && (!f.selection || !U.equals(f.selection, Re)) && J.select(f, Re);
    }
  }, [f, _, D, a, i, P]), N = rt((I) => {
    I == null ? (_.cancel(), P.cancel(), rs.delete(f), ya.delete(f), E.current && jn && E.current.removeEventListener("beforeinput", $)) : jn && I.addEventListener("beforeinput", $), E.current = I;
  }, [_, P, f, $]);
  xa(() => {
    var I = Z.getWindow(f);
    return I.document.addEventListener("selectionchange", P), () => {
      I.document.removeEventListener("selectionchange", P);
    };
  }, [P]);
  var R = n([f, []]), M = o && f.children.length === 1 && Array.from(fe.texts(f)).length === 1 && fe.string(f) === "" && !m, F = rt((I) => {
    if (I && M) {
      var z;
      S((z = I.getBoundingClientRect()) === null || z === void 0 ? void 0 : z.height);
    } else
      S(void 0);
  }, [M]);
  if (M) {
    var T = C.start(f, []);
    R.push({
      [so]: !0,
      placeholder: o,
      onPlaceholderResize: F,
      anchor: T,
      focus: T
    });
  }
  var {
    marks: k
  } = f;
  if (O.hasMarkPlaceholder = !1, f.selection && U.isCollapsed(f.selection) && k) {
    var {
      anchor: H
    } = f.selection, K = fe.leaf(f, H.path), X = io(K, Fw);
    if (!Oe.equals(K, k, {
      loose: !0
    })) {
      O.hasMarkPlaceholder = !0;
      var Q = Object.fromEntries(Object.keys(X).map((I) => [I, null]));
      R.push(sn(sn(sn({
        [bm]: !0
      }, Q), k), {}, {
        anchor: H,
        focus: H
      }));
    }
  }
  return zt(() => {
    setTimeout(() => {
      var {
        selection: I
      } = f;
      if (I) {
        var {
          anchor: z
        } = I, V = fe.leaf(f, z.path);
        if (k && !Oe.equals(V, k, {
          loose: !0
        })) {
          Xr.set(f, k);
          return;
        }
      }
      Xr.delete(f);
    });
  }), /* @__PURE__ */ ee.createElement(Fm.Provider, {
    value: i
  }, /* @__PURE__ */ ee.createElement(Bm.Provider, {
    value: n
  }, /* @__PURE__ */ ee.createElement(Aw, {
    node: E,
    receivedUserInput: x
  }, /* @__PURE__ */ ee.createElement(g, sn(sn({
    role: i ? void 0 : "textbox",
    "aria-multiline": i ? void 0 : !0
  }, h), {}, {
    // COMPAT: Certain browsers don't support the `beforeinput` event, so we'd
    // have to use hacks to make these replacement-based features work.
    // For SSR situations HAS_BEFORE_INPUT_SUPPORT is false and results in prop
    // mismatch warning app moves to browser. Pass-through consumer props when
    // not CAN_USE_DOM (SSR) and default to falsy value
    spellCheck: jn || !ts ? h.spellCheck : !1,
    autoCorrect: jn || !ts ? h.autoCorrect : "false",
    autoCapitalize: jn || !ts ? h.autoCapitalize : "false",
    "data-slate-editor": !0,
    "data-slate-node": "value",
    // explicitly set this
    contentEditable: !i,
    // in some cases, a decoration needs access to the range / selection to decorate a text node,
    // then you will select the whole text node when you select part the of text
    // this magic zIndex="-1" will fix it
    zindex: -1,
    suppressContentEditableWarning: !0,
    ref: N,
    style: sn(sn({}, p ? {} : sn({
      // Allow positioning relative to the editable element.
      position: "relative",
      // Preserve adjacent whitespace and new lines.
      whiteSpace: "pre-wrap",
      // Allow words to break if they are too long.
      wordWrap: "break-word"
    }, w ? {
      minHeight: w
    } : {})), d),
    onBeforeInput: rt((I) => {
      if (!jn && !i && !cr(I, h.onBeforeInput) && Z.hasSelectableTarget(f, I.target) && (I.preventDefault(), !Z.isComposing(f))) {
        var z = I.data;
        C.insertText(f, z);
      }
    }, [h.onBeforeInput, f, i]),
    onInput: rt((I) => {
      if (!cr(I, h.onInput)) {
        if (A.current) {
          A.current.handleInput();
          return;
        }
        for (var z of y.current)
          z();
        y.current = [];
      }
    }, [h.onInput]),
    onBlur: rt((I) => {
      if (!(i || O.isUpdatingSelection || !Z.hasSelectableTarget(f, I.target) || cr(I, h.onBlur))) {
        var z = Z.findDocumentOrShadowRoot(f);
        if (O.latestElement !== z.activeElement) {
          var {
            relatedTarget: V
          } = I, q = Z.toDOMNode(f, f);
          if (V !== q && !(jr(V) && V.hasAttribute("data-slate-spacer"))) {
            if (V != null && Xn(V) && Z.hasDOMNode(f, V)) {
              var te = Z.toSlateNode(f, V);
              if (ve.isElement(te) && !f.isVoid(te))
                return;
            }
            if (_o) {
              var re = z.getSelection();
              re == null || re.removeAllRanges();
            }
            Wn.delete(f);
          }
        }
      }
    }, [i, O.isUpdatingSelection, O.latestElement, f, h.onBlur]),
    onClick: rt((I) => {
      if (Z.hasTarget(f, I.target) && !cr(I, h.onClick) && Xn(I.target)) {
        var z = Z.toSlateNode(f, I.target), V = Z.findPath(f, z);
        if (!C.hasPath(f, V) || fe.get(f, V) !== z)
          return;
        if (I.detail === ww && V.length >= 1) {
          var q = V;
          if (!(ve.isElement(z) && C.isBlock(f, z))) {
            var te, re = C.above(f, {
              match: (Se) => ve.isElement(Se) && C.isBlock(f, Se),
              at: V
            });
            q = (te = re == null ? void 0 : re[1]) !== null && te !== void 0 ? te : V.slice(0, 1);
          }
          var le = C.range(f, q);
          J.select(f, le);
          return;
        }
        if (i)
          return;
        var oe = C.start(f, V), ge = C.end(f, V), ce = C.void(f, {
          at: oe
        }), Y = C.void(f, {
          at: ge
        });
        if (ce && Y && L.equals(ce[1], Y[1])) {
          var pe = C.range(f, oe);
          J.select(f, pe);
        }
      }
    }, [f, h.onClick, i]),
    onCompositionEnd: rt((I) => {
      if (Z.hasSelectableTarget(f, I.target)) {
        var z;
        if (Z.isComposing(f) && Promise.resolve().then(() => {
          b(!1), da.set(f, !1);
        }), (z = A.current) === null || z === void 0 || z.handleCompositionEnd(I), cr(I, h.onCompositionEnd) || fr)
          return;
        if (!_o && !OE && !wE && !AE && !BE && I.data) {
          var V = Xr.get(f);
          Xr.delete(f), V !== void 0 && (xn.set(f, f.marks), f.marks = V), C.insertText(f, I.data);
          var q = xn.get(f);
          xn.delete(f), q !== void 0 && (f.marks = q);
        }
      }
    }, [h.onCompositionEnd, f]),
    onCompositionUpdate: rt((I) => {
      Z.hasSelectableTarget(f, I.target) && !cr(I, h.onCompositionUpdate) && (Z.isComposing(f) || (b(!0), da.set(f, !0)));
    }, [h.onCompositionUpdate, f]),
    onCompositionStart: rt((I) => {
      if (Z.hasSelectableTarget(f, I.target)) {
        var z;
        if ((z = A.current) === null || z === void 0 || z.handleCompositionStart(I), cr(I, h.onCompositionStart) || fr)
          return;
        b(!0);
        var {
          selection: V
        } = f;
        if (V && U.isExpanded(V)) {
          C.deleteFragment(f);
          return;
        }
      }
    }, [h.onCompositionStart, f]),
    onCopy: rt((I) => {
      Z.hasSelectableTarget(f, I.target) && !cr(I, h.onCopy) && !Ld(I) && (I.preventDefault(), Z.setFragmentData(f, I.clipboardData, "copy"));
    }, [h.onCopy, f]),
    onCut: rt((I) => {
      if (!i && Z.hasSelectableTarget(f, I.target) && !cr(I, h.onCut) && !Ld(I)) {
        I.preventDefault(), Z.setFragmentData(f, I.clipboardData, "cut");
        var {
          selection: z
        } = f;
        if (z)
          if (U.isExpanded(z))
            C.deleteFragment(f);
          else {
            var V = fe.parent(f, z.anchor.path);
            C.isVoid(f, V) && J.delete(f);
          }
      }
    }, [i, f, h.onCut]),
    onDragOver: rt((I) => {
      if (Z.hasTarget(f, I.target) && !cr(I, h.onDragOver)) {
        var z = Z.toSlateNode(f, I.target);
        ve.isElement(z) && C.isVoid(f, z) && I.preventDefault();
      }
    }, [h.onDragOver, f]),
    onDragStart: rt((I) => {
      if (!i && Z.hasTarget(f, I.target) && !cr(I, h.onDragStart)) {
        var z = Z.toSlateNode(f, I.target), V = Z.findPath(f, z), q = ve.isElement(z) && C.isVoid(f, z) || C.void(f, {
          at: V,
          voids: !0
        });
        if (q) {
          var te = C.range(f, V);
          J.select(f, te);
        }
        O.isDraggingInternally = !0, Z.setFragmentData(f, I.dataTransfer, "drag");
      }
    }, [i, f, h.onDragStart, O]),
    onDrop: rt((I) => {
      if (!i && Z.hasTarget(f, I.target) && !cr(I, h.onDrop)) {
        I.preventDefault();
        var z = f.selection, V = Z.findEventRange(f, I), q = I.dataTransfer;
        J.select(f, V), O.isDraggingInternally && z && !U.equals(z, V) && !C.void(f, {
          at: V,
          voids: !0
        }) && J.delete(f, {
          at: z
        }), Z.insertData(f, q), Z.isFocused(f) || Z.focus(f);
      }
      O.isDraggingInternally = !1;
    }, [i, f, h.onDrop, O]),
    onDragEnd: rt((I) => {
      !i && O.isDraggingInternally && h.onDragEnd && Z.hasTarget(f, I.target) && h.onDragEnd(I), O.isDraggingInternally = !1;
    }, [i, O, h, f]),
    onFocus: rt((I) => {
      if (!i && !O.isUpdatingSelection && Z.hasEditableTarget(f, I.target) && !cr(I, h.onFocus)) {
        var z = Z.toDOMNode(f, f), V = Z.findDocumentOrShadowRoot(f);
        if (O.latestElement = V.activeElement, Qa && I.target !== z) {
          z.focus();
          return;
        }
        Wn.set(f, !0);
      }
    }, [i, O, f, h.onFocus]),
    onKeyDown: rt((I) => {
      if (!i && Z.hasEditableTarget(f, I.target)) {
        var z;
        (z = A.current) === null || z === void 0 || z.handleKeyDown(I);
        var {
          nativeEvent: V
        } = I;
        if (Z.isComposing(f) && V.isComposing === !1 && (da.set(f, !1), b(!1)), cr(I, h.onKeyDown) || Z.isComposing(f))
          return;
        var {
          selection: q
        } = f, te = f.children[q !== null ? q.focus.path[0] : 0], re = Jg(fe.string(te)) === "rtl";
        if (Ft.isRedo(V)) {
          I.preventDefault();
          var le = f;
          typeof le.redo == "function" && le.redo();
          return;
        }
        if (Ft.isUndo(V)) {
          I.preventDefault();
          var oe = f;
          typeof oe.undo == "function" && oe.undo();
          return;
        }
        if (Ft.isMoveLineBackward(V)) {
          I.preventDefault(), J.move(f, {
            unit: "line",
            reverse: !0
          });
          return;
        }
        if (Ft.isMoveLineForward(V)) {
          I.preventDefault(), J.move(f, {
            unit: "line"
          });
          return;
        }
        if (Ft.isExtendLineBackward(V)) {
          I.preventDefault(), J.move(f, {
            unit: "line",
            edge: "focus",
            reverse: !0
          });
          return;
        }
        if (Ft.isExtendLineForward(V)) {
          I.preventDefault(), J.move(f, {
            unit: "line",
            edge: "focus"
          });
          return;
        }
        if (Ft.isMoveBackward(V)) {
          I.preventDefault(), q && U.isCollapsed(q) ? J.move(f, {
            reverse: !re
          }) : J.collapse(f, {
            edge: re ? "end" : "start"
          });
          return;
        }
        if (Ft.isMoveForward(V)) {
          I.preventDefault(), q && U.isCollapsed(q) ? J.move(f, {
            reverse: re
          }) : J.collapse(f, {
            edge: re ? "start" : "end"
          });
          return;
        }
        if (Ft.isMoveWordBackward(V)) {
          I.preventDefault(), q && U.isExpanded(q) && J.collapse(f, {
            edge: "focus"
          }), J.move(f, {
            unit: "word",
            reverse: !re
          });
          return;
        }
        if (Ft.isMoveWordForward(V)) {
          I.preventDefault(), q && U.isExpanded(q) && J.collapse(f, {
            edge: "focus"
          }), J.move(f, {
            unit: "word",
            reverse: re
          });
          return;
        }
        if (jn) {
          if ((mm || _o) && q && (Ft.isDeleteBackward(V) || Ft.isDeleteForward(V)) && U.isCollapsed(q)) {
            var ge = fe.parent(f, q.anchor.path);
            if (ve.isElement(ge) && C.isVoid(f, ge) && (C.isInline(f, ge) || C.isBlock(f, ge))) {
              I.preventDefault(), C.deleteBackward(f, {
                unit: "block"
              });
              return;
            }
          }
        } else {
          if (Ft.isBold(V) || Ft.isItalic(V) || Ft.isTransposeCharacter(V)) {
            I.preventDefault();
            return;
          }
          if (Ft.isSoftBreak(V)) {
            I.preventDefault(), C.insertSoftBreak(f);
            return;
          }
          if (Ft.isSplitBlock(V)) {
            I.preventDefault(), C.insertBreak(f);
            return;
          }
          if (Ft.isDeleteBackward(V)) {
            I.preventDefault(), q && U.isExpanded(q) ? C.deleteFragment(f, {
              direction: "backward"
            }) : C.deleteBackward(f);
            return;
          }
          if (Ft.isDeleteForward(V)) {
            I.preventDefault(), q && U.isExpanded(q) ? C.deleteFragment(f, {
              direction: "forward"
            }) : C.deleteForward(f);
            return;
          }
          if (Ft.isDeleteLineBackward(V)) {
            I.preventDefault(), q && U.isExpanded(q) ? C.deleteFragment(f, {
              direction: "backward"
            }) : C.deleteBackward(f, {
              unit: "line"
            });
            return;
          }
          if (Ft.isDeleteLineForward(V)) {
            I.preventDefault(), q && U.isExpanded(q) ? C.deleteFragment(f, {
              direction: "forward"
            }) : C.deleteForward(f, {
              unit: "line"
            });
            return;
          }
          if (Ft.isDeleteWordBackward(V)) {
            I.preventDefault(), q && U.isExpanded(q) ? C.deleteFragment(f, {
              direction: "backward"
            }) : C.deleteBackward(f, {
              unit: "word"
            });
            return;
          }
          if (Ft.isDeleteWordForward(V)) {
            I.preventDefault(), q && U.isExpanded(q) ? C.deleteFragment(f, {
              direction: "forward"
            }) : C.deleteForward(f, {
              unit: "word"
            });
            return;
          }
        }
      }
    }, [i, f, h.onKeyDown]),
    onPaste: rt((I) => {
      !i && Z.hasEditableTarget(f, I.target) && !cr(I, h.onPaste) && (!jn || PE(I.nativeEvent) || _o) && (I.preventDefault(), Z.insertData(f, I.clipboardData));
    }, [i, f, h.onPaste])
  }), /* @__PURE__ */ ee.createElement(Pw, {
    decorations: R,
    node: f,
    renderElement: s,
    renderPlaceholder: l,
    renderLeaf: u,
    selection: f.selection
  })))));
}, Tw = (e) => {
  var {
    attributes: t,
    children: r
  } = e;
  return (
    // COMPAT: Artificially add a line-break to the end on the placeholder element
    // to prevent Android IMEs to pick up its content in autocorrect and to auto-capitalize the first letter
    /* @__PURE__ */ ee.createElement("span", sn({}, t), r, fr && /* @__PURE__ */ ee.createElement("br", null))
  );
}, Nw = () => [], Iw = (e, t) => {
  if (t.getBoundingClientRect && (!e.selection || e.selection && U.isCollapsed(e.selection))) {
    var r = t.startContainer.parentElement;
    r.getBoundingClientRect = t.getBoundingClientRect.bind(t), G1(r, {
      scrollMode: "if-needed"
    }), delete r.getBoundingClientRect;
  }
}, cr = (e, t) => {
  if (!t)
    return !1;
  var r = t(e);
  return r ?? (e.isDefaultPrevented() || e.isPropagationStopped());
}, Ld = (e) => Xn(e.target) && (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement), Mw = (e, t) => {
  if (!t)
    return !1;
  var r = t(e);
  return r ?? e.defaultPrevented;
}, Tm = /* @__PURE__ */ zr(!1), BN = () => Rt(Tm);
function jw(e) {
  return e instanceof Error;
}
var Nm = /* @__PURE__ */ zr({}), _w = (e, t) => e === t;
function Oa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _w, [, r] = _g((c) => c + 1, 0), n = Rt(Nm);
  if (!n)
    throw new Error("The `useSlateSelector` hook must be used inside the <Slate> component's context.");
  var {
    getSlate: a,
    addEventListener: o
  } = n, i = Je(), s = Je(() => null), u = Je(null), l;
  try {
    e !== s.current || i.current ? l = e(a()) : l = u.current;
  } catch (c) {
    throw i.current && jw(c) && (c.message += `
The error may be correlated with this previous error:
`.concat(i.current.stack, `

`)), c;
  }
  return xa(() => {
    s.current = e, u.current = l, i.current = void 0;
  }), xa(
    () => {
      function c() {
        try {
          var g = s.current(a());
          if (t(g, u.current))
            return;
          u.current = g;
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
function Lw(e) {
  var t = Je([]).current, r = Je({
    editor: e
  }).current, n = rt((o) => {
    r.editor = o, t.forEach((i) => i(o));
  }, [t, r]), a = sr(() => ({
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
var kw = ["editor", "children", "onChange", "onSelectionChange", "onValueChange", "initialValue"], zw = (e) => {
  var {
    editor: t,
    children: r,
    onChange: n,
    onSelectionChange: a,
    onValueChange: o,
    initialValue: i
  } = e, s = io(e, kw), [u, l] = ee.useState(() => {
    if (!fe.isNodeList(i))
      throw new Error("[Slate] initialValue is invalid! Expected a list of elements but got: ".concat(Yt.stringify(i)));
    if (!C.isEditor(t))
      throw new Error("[Slate] editor is invalid! You passed: ".concat(Yt.stringify(t)));
    return t.children = i, Object.assign(t, s), {
      v: 0,
      editor: t
    };
  }), {
    selectorContext: c,
    onChange: d
  } = Lw(t), g = rt((f) => {
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
  zt(() => (vl.set(t, g), () => {
    vl.set(t, () => {
    });
  }), [t, g]);
  var [p, h] = ir(Z.isFocused(t));
  return zt(() => {
    h(Z.isFocused(t));
  }, [t]), xa(() => {
    var f = () => h(Z.isFocused(t));
    return gm >= 17 ? (document.addEventListener("focusin", f), document.addEventListener("focusout", f), () => {
      document.removeEventListener("focusin", f), document.removeEventListener("focusout", f);
    }) : (document.addEventListener("focus", f, !0), document.addEventListener("blur", f, !0), () => {
      document.removeEventListener("focus", f, !0), document.removeEventListener("blur", f, !0);
    });
  }, []), /* @__PURE__ */ ee.createElement(Nm.Provider, {
    value: c
  }, /* @__PURE__ */ ee.createElement(Ic.Provider, {
    value: u
  }, /* @__PURE__ */ ee.createElement(Vs.Provider, {
    value: u.editor
  }, /* @__PURE__ */ ee.createElement(Tm.Provider, {
    value: p
  }, r))));
}, AN = () => {
  var e = Rt(Vs);
  if (!e)
    throw new Error("The `useEditor` hook must be used inside the <Slate> component's context.");
  return e;
}, $N = () => Oa((e) => e.selection, Vw), Vw = (e, t) => !e && !t ? !0 : !e || !t ? !1 : U.equals(e, t), kd = (e, t) => {
  var r = (t.top + t.bottom) / 2;
  return e.top <= r && e.bottom >= r;
}, zd = (e, t, r) => {
  var n = Z.toDOMRange(e, t).getBoundingClientRect(), a = Z.toDOMRange(e, r).getBoundingClientRect();
  return kd(n, a) && kd(a, n);
}, Hw = (e, t) => {
  var r = C.range(e, U.end(t)), n = Array.from(C.positions(e, {
    at: t
  })), a = 0, o = n.length, i = Math.floor(o / 2);
  if (zd(e, C.range(e, n[a]), r))
    return C.range(e, n[a], r);
  if (n.length < 2)
    return C.range(e, n[n.length - 1], r);
  for (; i !== n.length && i !== a; )
    zd(e, C.range(e, n[i]), r) ? o = i : a = i, i = Math.floor((a + o) / 2);
  return C.range(e, n[o], r);
};
function Vd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vd(Object(r), !0).forEach(function(n) {
      _r(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Ww = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x-slate-fragment", n = t, {
    apply: a,
    onChange: o,
    deleteBackward: i,
    addMark: s,
    removeMark: u
  } = n;
  return Hs.set(n, /* @__PURE__ */ new WeakMap()), n.addMark = (l, c) => {
    var d, g;
    (d = Rc.get(n)) === null || d === void 0 || d(), !Xr.get(n) && (g = pr.get(n)) !== null && g !== void 0 && g.length && Xr.set(n, null), xn.delete(n), s(l, c);
  }, n.removeMark = (l) => {
    var c;
    !Xr.get(n) && (c = pr.get(n)) !== null && c !== void 0 && c.length && Xr.set(n, null), xn.delete(n), u(l);
  }, n.deleteBackward = (l) => {
    if (l !== "line")
      return i(l);
    if (n.selection && U.isCollapsed(n.selection)) {
      var c = C.above(n, {
        match: (h) => ve.isElement(h) && C.isBlock(n, h),
        at: n.selection
      });
      if (c) {
        var [, d] = c, g = C.range(n, d, n.selection.anchor), p = Hw(n, g);
        U.isCollapsed(p) || J.delete(n, {
          at: p
        });
      }
    }
  }, n.apply = (l) => {
    var c = [], d = [], g = pr.get(n);
    if (g != null && g.length) {
      var p = g.map((N) => WE(N, l)).filter(Boolean);
      pr.set(n, p);
    }
    var h = Vn.get(n);
    h && Vn.set(n, Fd(n, h, l));
    var f = zn.get(n);
    if (f != null && f.at) {
      var m = Ge.isPoint(f == null ? void 0 : f.at) ? hl(n, f.at, l) : Fd(n, f.at, l);
      zn.set(n, m ? Hd(Hd({}, f), {}, {
        at: m
      }) : null);
    }
    switch (l.type) {
      case "insert_text":
      case "remove_text":
      case "set_node":
      case "split_node": {
        c.push(...ja(n, l.path));
        break;
      }
      case "set_selection": {
        var b;
        (b = Wo.get(n)) === null || b === void 0 || b.unref(), Wo.delete(n);
        break;
      }
      case "insert_node":
      case "remove_node": {
        c.push(...ja(n, L.parent(l.path)));
        break;
      }
      case "merge_node": {
        var E = L.previous(l.path);
        c.push(...ja(n, E));
        break;
      }
      case "move_node": {
        var y = L.common(L.parent(l.path), L.parent(l.newPath));
        c.push(...ja(n, y));
        var w;
        L.isBefore(l.path, l.newPath) ? (c.push(...ja(n, L.parent(l.path))), w = l.newPath) : (c.push(...ja(n, L.parent(l.newPath))), w = l.path);
        var S = fe.get(t, L.parent(w)), D = Z.findKey(n, S), x = C.pathRef(n, L.parent(w));
        d.push([x, D]);
        break;
      }
    }
    a(l);
    for (var [B, O] of c) {
      var [A] = C.node(n, B);
      bs.set(A, O);
    }
    for (var [_, P] of d)
      if (_.current) {
        var [$] = C.node(n, _.current);
        bs.set($, P);
      }
  }, n.setFragmentData = (l) => {
    var {
      selection: c
    } = n;
    if (c) {
      var [d, g] = U.edges(c), p = C.void(n, {
        at: d.path
      }), h = C.void(n, {
        at: g.path
      });
      if (!(U.isCollapsed(c) && !p)) {
        var f = Z.toDOMRange(n, c), m = f.cloneContents(), b = m.childNodes[0];
        if (m.childNodes.forEach((A) => {
          A.textContent && A.textContent.trim() !== "" && (b = A);
        }), h) {
          var [E] = h, y = f.cloneRange(), w = Z.toDOMNode(n, E);
          y.setEndAfter(w), m = y.cloneContents();
        }
        if (p && (b = m.querySelector("[data-slate-spacer]")), Array.from(m.querySelectorAll("[data-slate-zero-width]")).forEach((A) => {
          var _ = A.getAttribute("data-slate-zero-width") === "n";
          A.textContent = _ ? `
` : "";
        }), ym(b)) {
          var S = b.ownerDocument.createElement("span");
          S.style.whiteSpace = "pre", S.appendChild(b), m.appendChild(S), b = S;
        }
        var D = n.getFragment(), x = JSON.stringify(D), B = window.btoa(encodeURIComponent(x));
        b.setAttribute("data-slate-fragment", B), l.setData("application/".concat(r), B);
        var O = m.ownerDocument.createElement("div");
        return O.appendChild(m), O.setAttribute("hidden", "true"), m.ownerDocument.body.appendChild(O), l.setData("text/html", O.innerHTML), l.setData("text/plain", Em(O)), m.ownerDocument.body.removeChild(O), l;
      }
    }
  }, n.insertData = (l) => {
    n.insertFragmentData(l) || n.insertTextData(l);
  }, n.insertFragmentData = (l) => {
    var c = l.getData("application/".concat(r)) || ME(l);
    if (c) {
      var d = decodeURIComponent(window.atob(c)), g = JSON.parse(d);
      return n.insertFragment(g), !0;
    }
    return !1;
  }, n.insertTextData = (l) => {
    var c = l.getData("text/plain");
    if (c) {
      var d = c.split(/\r\n|\r|\n/), g = !1;
      for (var p of d)
        g && J.splitNodes(n, {
          always: !0
        }), n.insertText(p), g = !0;
      return !0;
    }
    return !1;
  }, n.onChange = (l) => {
    var c = gm < 18 ? kg.unstable_batchedUpdates : (d) => d();
    c(() => {
      var d = vl.get(n);
      d && d(l), o(l);
    });
  }, n;
}, ja = (e, t) => {
  var r = [];
  for (var [n, a] of C.levels(e, {
    at: t
  })) {
    var o = Z.findKey(e, n);
    r.push([a, o]);
  }
  return r;
}, bl = { exports: {} }, Fo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wd;
function Kw() {
  if (Wd)
    return Fo;
  Wd = 1;
  var e = ee, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, u, l) {
    var c, d = {}, g = null, p = null;
    l !== void 0 && (g = "" + l), u.key !== void 0 && (g = "" + u.key), u.ref !== void 0 && (p = u.ref);
    for (c in u)
      n.call(u, c) && !o.hasOwnProperty(c) && (d[c] = u[c]);
    if (s && s.defaultProps)
      for (c in u = s.defaultProps, u)
        d[c] === void 0 && (d[c] = u[c]);
    return { $$typeof: t, type: s, key: g, ref: p, props: d, _owner: a.current };
  }
  return Fo.Fragment = r, Fo.jsx = i, Fo.jsxs = i, Fo;
}
var Po = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kd;
function qw() {
  return Kd || (Kd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ee, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h = Symbol.iterator, f = "@@iterator";
    function m(j) {
      if (j === null || typeof j != "object")
        return null;
      var ne = h && j[h] || j[f];
      return typeof ne == "function" ? ne : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(j) {
      {
        for (var ne = arguments.length, ue = new Array(ne > 1 ? ne - 1 : 0), Te = 1; Te < ne; Te++)
          ue[Te - 1] = arguments[Te];
        y("error", j, ue);
      }
    }
    function y(j, ne, ue) {
      {
        var Te = b.ReactDebugCurrentFrame, Ue = Te.getStackAddendum();
        Ue !== "" && (ne += "%s", ue = ue.concat([Ue]));
        var at = ue.map(function(qe) {
          return String(qe);
        });
        at.unshift("Warning: " + ne), Function.prototype.apply.call(console[j], console, at);
      }
    }
    var w = !1, S = !1, D = !1, x = !1, B = !1, O;
    O = Symbol.for("react.module.reference");
    function A(j) {
      return !!(typeof j == "string" || typeof j == "function" || j === n || j === o || B || j === a || j === l || j === c || x || j === p || w || S || D || typeof j == "object" && j !== null && (j.$$typeof === g || j.$$typeof === d || j.$$typeof === i || j.$$typeof === s || j.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      j.$$typeof === O || j.getModuleId !== void 0));
    }
    function _(j, ne, ue) {
      var Te = j.displayName;
      if (Te)
        return Te;
      var Ue = ne.displayName || ne.name || "";
      return Ue !== "" ? ue + "(" + Ue + ")" : ue;
    }
    function P(j) {
      return j.displayName || "Context";
    }
    function $(j) {
      if (j == null)
        return null;
      if (typeof j.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof j == "function")
        return j.displayName || j.name || null;
      if (typeof j == "string")
        return j;
      switch (j) {
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
      if (typeof j == "object")
        switch (j.$$typeof) {
          case s:
            var ne = j;
            return P(ne) + ".Consumer";
          case i:
            var ue = j;
            return P(ue._context) + ".Provider";
          case u:
            return _(j, j.render, "ForwardRef");
          case d:
            var Te = j.displayName || null;
            return Te !== null ? Te : $(j.type) || "Memo";
          case g: {
            var Ue = j, at = Ue._payload, qe = Ue._init;
            try {
              return $(qe(at));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, R = 0, M, F, T, k, H, K, X;
    function Q() {
    }
    Q.__reactDisabledLog = !0;
    function I() {
      {
        if (R === 0) {
          M = console.log, F = console.info, T = console.warn, k = console.error, H = console.group, K = console.groupCollapsed, X = console.groupEnd;
          var j = {
            configurable: !0,
            enumerable: !0,
            value: Q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: j,
            log: j,
            warn: j,
            error: j,
            group: j,
            groupCollapsed: j,
            groupEnd: j
          });
        }
        R++;
      }
    }
    function z() {
      {
        if (R--, R === 0) {
          var j = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, j, {
              value: M
            }),
            info: N({}, j, {
              value: F
            }),
            warn: N({}, j, {
              value: T
            }),
            error: N({}, j, {
              value: k
            }),
            group: N({}, j, {
              value: H
            }),
            groupCollapsed: N({}, j, {
              value: K
            }),
            groupEnd: N({}, j, {
              value: X
            })
          });
        }
        R < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = b.ReactCurrentDispatcher, q;
    function te(j, ne, ue) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (Ue) {
            var Te = Ue.stack.trim().match(/\n( *(at )?)/);
            q = Te && Te[1] || "";
          }
        return `
` + q + j;
      }
    }
    var re = !1, le;
    {
      var oe = typeof WeakMap == "function" ? WeakMap : Map;
      le = new oe();
    }
    function ge(j, ne) {
      if (!j || re)
        return "";
      {
        var ue = le.get(j);
        if (ue !== void 0)
          return ue;
      }
      var Te;
      re = !0;
      var Ue = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var at;
      at = V.current, V.current = null, I();
      try {
        if (ne) {
          var qe = function() {
            throw Error();
          };
          if (Object.defineProperty(qe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(qe, []);
            } catch (Vt) {
              Te = Vt;
            }
            Reflect.construct(j, [], qe);
          } else {
            try {
              qe.call();
            } catch (Vt) {
              Te = Vt;
            }
            j.call(qe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Vt) {
            Te = Vt;
          }
          j();
        }
      } catch (Vt) {
        if (Vt && Te && typeof Vt.stack == "string") {
          for (var Ve = Vt.stack.split(`
`), Dt = Te.stack.split(`
`), wt = Ve.length - 1, Xe = Dt.length - 1; wt >= 1 && Xe >= 0 && Ve[wt] !== Dt[Xe]; )
            Xe--;
          for (; wt >= 1 && Xe >= 0; wt--, Xe--)
            if (Ve[wt] !== Dt[Xe]) {
              if (wt !== 1 || Xe !== 1)
                do
                  if (wt--, Xe--, Xe < 0 || Ve[wt] !== Dt[Xe]) {
                    var qt = `
` + Ve[wt].replace(" at new ", " at ");
                    return j.displayName && qt.includes("<anonymous>") && (qt = qt.replace("<anonymous>", j.displayName)), typeof j == "function" && le.set(j, qt), qt;
                  }
                while (wt >= 1 && Xe >= 0);
              break;
            }
        }
      } finally {
        re = !1, V.current = at, z(), Error.prepareStackTrace = Ue;
      }
      var Tr = j ? j.displayName || j.name : "", nn = Tr ? te(Tr) : "";
      return typeof j == "function" && le.set(j, nn), nn;
    }
    function ce(j, ne, ue) {
      return ge(j, !1);
    }
    function Y(j) {
      var ne = j.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function pe(j, ne, ue) {
      if (j == null)
        return "";
      if (typeof j == "function")
        return ge(j, Y(j));
      if (typeof j == "string")
        return te(j);
      switch (j) {
        case l:
          return te("Suspense");
        case c:
          return te("SuspenseList");
      }
      if (typeof j == "object")
        switch (j.$$typeof) {
          case u:
            return ce(j.render);
          case d:
            return pe(j.type, ne, ue);
          case g: {
            var Te = j, Ue = Te._payload, at = Te._init;
            try {
              return pe(at(Ue), ne, ue);
            } catch {
            }
          }
        }
      return "";
    }
    var Se = Object.prototype.hasOwnProperty, ye = {}, we = b.ReactDebugCurrentFrame;
    function de(j) {
      if (j) {
        var ne = j._owner, ue = pe(j.type, j._source, ne ? ne.type : null);
        we.setExtraStackFrame(ue);
      } else
        we.setExtraStackFrame(null);
    }
    function Ee(j, ne, ue, Te, Ue) {
      {
        var at = Function.call.bind(Se);
        for (var qe in j)
          if (at(j, qe)) {
            var Ve = void 0;
            try {
              if (typeof j[qe] != "function") {
                var Dt = Error((Te || "React class") + ": " + ue + " type `" + qe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof j[qe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Dt.name = "Invariant Violation", Dt;
              }
              Ve = j[qe](ne, qe, Te, ue, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (wt) {
              Ve = wt;
            }
            Ve && !(Ve instanceof Error) && (de(Ue), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Te || "React class", ue, qe, typeof Ve), de(null)), Ve instanceof Error && !(Ve.message in ye) && (ye[Ve.message] = !0, de(Ue), E("Failed %s type: %s", ue, Ve.message), de(null));
          }
      }
    }
    var he = Array.isArray;
    function me(j) {
      return he(j);
    }
    function be(j) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, ue = ne && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return ue;
      }
    }
    function Ie(j) {
      try {
        return Re(j), !1;
      } catch {
        return !0;
      }
    }
    function Re(j) {
      return "" + j;
    }
    function je(j) {
      if (Ie(j))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", be(j)), Re(j);
    }
    var bt = b.ReactCurrentOwner, _e = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, ke, ze;
    ze = {};
    function _t(j) {
      if (Se.call(j, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(j, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return j.ref !== void 0;
    }
    function et(j) {
      if (Se.call(j, "key")) {
        var ne = Object.getOwnPropertyDescriptor(j, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return j.key !== void 0;
    }
    function xt(j, ne) {
      if (typeof j.ref == "string" && bt.current && ne && bt.current.stateNode !== ne) {
        var ue = $(bt.current.type);
        ze[ue] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(bt.current.type), j.ref), ze[ue] = !0);
      }
    }
    function mt(j, ne) {
      {
        var ue = function() {
          Ce || (Ce = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        ue.isReactWarning = !0, Object.defineProperty(j, "key", {
          get: ue,
          configurable: !0
        });
      }
    }
    function Ze(j, ne) {
      {
        var ue = function() {
          ke || (ke = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        ue.isReactWarning = !0, Object.defineProperty(j, "ref", {
          get: ue,
          configurable: !0
        });
      }
    }
    var ot = function(j, ne, ue, Te, Ue, at, qe) {
      var Ve = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: j,
        key: ne,
        ref: ue,
        props: qe,
        // Record the component responsible for creating this element.
        _owner: at
      };
      return Ve._store = {}, Object.defineProperty(Ve._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ve, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Te
      }), Object.defineProperty(Ve, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ue
      }), Object.freeze && (Object.freeze(Ve.props), Object.freeze(Ve)), Ve;
    };
    function Wt(j, ne, ue, Te, Ue) {
      {
        var at, qe = {}, Ve = null, Dt = null;
        ue !== void 0 && (je(ue), Ve = "" + ue), et(ne) && (je(ne.key), Ve = "" + ne.key), _t(ne) && (Dt = ne.ref, xt(ne, Ue));
        for (at in ne)
          Se.call(ne, at) && !_e.hasOwnProperty(at) && (qe[at] = ne[at]);
        if (j && j.defaultProps) {
          var wt = j.defaultProps;
          for (at in wt)
            qe[at] === void 0 && (qe[at] = wt[at]);
        }
        if (Ve || Dt) {
          var Xe = typeof j == "function" ? j.displayName || j.name || "Unknown" : j;
          Ve && mt(qe, Xe), Dt && Ze(qe, Xe);
        }
        return ot(j, Ve, Dt, Ue, Te, bt.current, qe);
      }
    }
    var Et = b.ReactCurrentOwner, se = b.ReactDebugCurrentFrame;
    function Ae(j) {
      if (j) {
        var ne = j._owner, ue = pe(j.type, j._source, ne ? ne.type : null);
        se.setExtraStackFrame(ue);
      } else
        se.setExtraStackFrame(null);
    }
    var Le;
    Le = !1;
    function tt(j) {
      return typeof j == "object" && j !== null && j.$$typeof === t;
    }
    function Qe() {
      {
        if (Et.current) {
          var j = $(Et.current.type);
          if (j)
            return `

Check the render method of \`` + j + "`.";
        }
        return "";
      }
    }
    function $e(j) {
      {
        if (j !== void 0) {
          var ne = j.fileName.replace(/^.*[\\\/]/, ""), ue = j.lineNumber;
          return `

Check your code at ` + ne + ":" + ue + ".";
        }
        return "";
      }
    }
    var Ye = {};
    function xe(j) {
      {
        var ne = Qe();
        if (!ne) {
          var ue = typeof j == "string" ? j : j.displayName || j.name;
          ue && (ne = `

Check the top-level render call using <` + ue + ">.");
        }
        return ne;
      }
    }
    function Pe(j, ne) {
      {
        if (!j._store || j._store.validated || j.key != null)
          return;
        j._store.validated = !0;
        var ue = xe(ne);
        if (Ye[ue])
          return;
        Ye[ue] = !0;
        var Te = "";
        j && j._owner && j._owner !== Et.current && (Te = " It was passed a child from " + $(j._owner.type) + "."), Ae(j), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ue, Te), Ae(null);
      }
    }
    function it(j, ne) {
      {
        if (typeof j != "object")
          return;
        if (me(j))
          for (var ue = 0; ue < j.length; ue++) {
            var Te = j[ue];
            tt(Te) && Pe(Te, ne);
          }
        else if (tt(j))
          j._store && (j._store.validated = !0);
        else if (j) {
          var Ue = m(j);
          if (typeof Ue == "function" && Ue !== j.entries)
            for (var at = Ue.call(j), qe; !(qe = at.next()).done; )
              tt(qe.value) && Pe(qe.value, ne);
        }
      }
    }
    function Nt(j) {
      {
        var ne = j.type;
        if (ne == null || typeof ne == "string")
          return;
        var ue;
        if (typeof ne == "function")
          ue = ne.propTypes;
        else if (typeof ne == "object" && (ne.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ne.$$typeof === d))
          ue = ne.propTypes;
        else
          return;
        if (ue) {
          var Te = $(ne);
          Ee(ue, j.props, "prop", Te, j);
        } else if (ne.PropTypes !== void 0 && !Le) {
          Le = !0;
          var Ue = $(ne);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ue || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Kt(j) {
      {
        for (var ne = Object.keys(j.props), ue = 0; ue < ne.length; ue++) {
          var Te = ne[ue];
          if (Te !== "children" && Te !== "key") {
            Ae(j), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Te), Ae(null);
            break;
          }
        }
        j.ref !== null && (Ae(j), E("Invalid attribute `ref` supplied to `React.Fragment`."), Ae(null));
      }
    }
    function $t(j, ne, ue, Te, Ue, at) {
      {
        var qe = A(j);
        if (!qe) {
          var Ve = "";
          (j === void 0 || typeof j == "object" && j !== null && Object.keys(j).length === 0) && (Ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Dt = $e(Ue);
          Dt ? Ve += Dt : Ve += Qe();
          var wt;
          j === null ? wt = "null" : me(j) ? wt = "array" : j !== void 0 && j.$$typeof === t ? (wt = "<" + ($(j.type) || "Unknown") + " />", Ve = " Did you accidentally export a JSX literal instead of a component?") : wt = typeof j, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", wt, Ve);
        }
        var Xe = Wt(j, ne, ue, Ue, at);
        if (Xe == null)
          return Xe;
        if (qe) {
          var qt = ne.children;
          if (qt !== void 0)
            if (Te)
              if (me(qt)) {
                for (var Tr = 0; Tr < qt.length; Tr++)
                  it(qt[Tr], j);
                Object.freeze && Object.freeze(qt);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              it(qt, j);
        }
        return j === n ? Kt(Xe) : Nt(Xe), Xe;
      }
    }
    function tn(j, ne, ue) {
      return $t(j, ne, ue, !0);
    }
    function rn(j, ne, ue) {
      return $t(j, ne, ue, !1);
    }
    var Dr = rn, hr = tn;
    Po.Fragment = n, Po.jsx = Dr, Po.jsxs = hr;
  }()), Po;
}
process.env.NODE_ENV === "production" ? bl.exports = Kw() : bl.exports = qw();
var Me = bl.exports, Uw = {
  /**
   * Check if a value is a `History` object.
   */
  isHistory(e) {
    return Jt(e) && Array.isArray(e.redos) && Array.isArray(e.undos) && (e.redos.length === 0 || Hn.isOperationList(e.redos[0].operations)) && (e.undos.length === 0 || Hn.isOperationList(e.undos[0].operations));
  }
}, Ou = /* @__PURE__ */ new WeakMap(), Bu = /* @__PURE__ */ new WeakMap(), va = {
  /**
   * Check if a value is a `HistoryEditor` object.
   */
  isHistoryEditor(e) {
    return Uw.isHistory(e.history) && C.isEditor(e);
  },
  /**
   * Get the merge flag's current value.
   */
  isMerging(e) {
    return Bu.get(e);
  },
  /**
   * Get the saving flag's current value.
   */
  isSaving(e) {
    return Ou.get(e);
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
    var r = va.isMerging(e);
    Bu.set(e, !1), t(), Bu.set(e, r);
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, without saving any of
   * their operations into the history.
   */
  withoutSaving(e, t) {
    var r = va.isSaving(e);
    Ou.set(e, !1), t(), Ou.set(e, r);
  }
}, Gw = (e) => {
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
      o.selectionBefore && J.setSelection(t, o.selectionBefore), va.withoutSaving(t, () => {
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
      va.withoutSaving(t, () => {
        C.withoutNormalizing(t, () => {
          var i = o.operations.map(Hn.inverse).reverse();
          for (var s of i)
            t.apply(s);
          o.selectionBefore && J.setSelection(t, o.selectionBefore);
        });
      }), t.writeHistory("redos", o), n.undos.pop();
    }
  }, t.apply = (n) => {
    var {
      operations: a,
      history: o
    } = t, {
      undos: i
    } = o, s = i[i.length - 1], u = s && s.operations[s.operations.length - 1], l = va.isSaving(t), c = va.isMerging(t);
    if (l == null && (l = Yw(n)), l) {
      if (c == null && (s == null ? c = !1 : a.length !== 0 ? c = !0 : c = Xw(n, u)), s && c)
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
}, Xw = (e, t) => !!(t && e.type === "insert_text" && t.type === "insert_text" && e.offset === t.offset + t.text.length && L.equals(e.path, t.path) || t && e.type === "remove_text" && t.type === "remove_text" && e.offset + e.text.length === t.offset && L.equals(e.path, t.path)), Yw = (e, t) => e.type !== "set_selection", kt = /* @__PURE__ */ ((e) => (e.Paragraph = "paragraph", e.Heading = "heading", e.Bold = "bold", e.Code = "code", e.CheckList = "check-list", e.OrderedList = "ordered-list", e))(kt || {}), Un = /* @__PURE__ */ ((e) => (e.Start = "start", e.Center = "center", e.End = "end", e))(Un || {}), Xa = /* @__PURE__ */ ((e) => (e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e))(Xa || {});
function yl() {
  return [
    {
      type: kt.Paragraph,
      children: [{ text: "" }]
    }
  ];
}
function Zw(e, t) {
  const { selection: r } = e, [n] = Z.findPath(e, t), [a] = C.nodes(e, {
    match: (o) => ve.isElement(o) && C.isBlock(e, o)
  });
  if (a[0] !== t) {
    const o = r ? r.focus.offset : 0;
    J.select(e, {
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
  Z.blur(e), Z.focus(e);
}
function Qw(e) {
  return {
    ...e,
    ...{
      textAlign: void 0,
      heading: void 0
    }
  };
}
function Jw(e) {
  const { selection: t } = e;
  return !!(t && U.isCollapsed(t));
}
const yr = Symbol.for("@ts-pattern/matcher"), Im = Symbol.for("@ts-pattern/isVariadic"), ys = "@ts-pattern/anonymous-select-key", Cl = (e) => !!(e && typeof e == "object"), ns = (e) => e && !!e[yr], er = (e, t, r) => {
  if (ns(e)) {
    const n = e[yr](), { matched: a, selections: o } = n.match(t);
    return a && o && Object.keys(o).forEach((i) => r(i, o[i])), a;
  }
  if (Cl(e)) {
    if (!Cl(t))
      return !1;
    if (Array.isArray(e)) {
      if (!Array.isArray(t))
        return !1;
      let n = [], a = [], o = [];
      for (const i of e.keys()) {
        const s = e[i];
        ns(s) && s[Im] ? o.push(s) : o.length ? a.push(s) : n.push(s);
      }
      if (o.length) {
        if (o.length > 1)
          throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
        if (t.length < n.length + a.length)
          return !1;
        const i = t.slice(0, n.length), s = a.length === 0 ? [] : t.slice(-a.length), u = t.slice(n.length, a.length === 0 ? 1 / 0 : -a.length);
        return n.every((l, c) => er(l, i[c], r)) && a.every((l, c) => er(l, s[c], r)) && (o.length === 0 || er(o[0], u, r));
      }
      return e.length === t.length && e.every((i, s) => er(i, t[s], r));
    }
    return Object.keys(e).every((n) => {
      const a = e[n];
      return (n in t || ns(o = a) && o[yr]().matcherType === "optional") && er(a, t[n], r);
      var o;
    });
  }
  return Object.is(t, e);
}, Ar = (e) => {
  var t, r, n;
  return Cl(e) ? ns(e) ? (t = (r = (n = e[yr]()).getSelectionKeys) == null ? void 0 : r.call(n)) != null ? t : [] : Array.isArray(e) ? ai(e, Ar) : ai(Object.values(e), Ar) : [];
}, ai = (e, t) => e.reduce((r, n) => r.concat(t(n)), []);
function eD(...e) {
  if (e.length === 1) {
    const [t] = e;
    return (r) => er(t, r, () => {
    });
  }
  if (e.length === 2) {
    const [t, r] = e;
    return er(t, r, () => {
    });
  }
  throw new Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${e.length}.`);
}
function tr(e) {
  return Object.assign(e, { optional: () => Mc(e), and: (t) => At(e, t), or: (t) => Mm(e, t), select: (t) => t === void 0 ? oi(e) : oi(t, e) });
}
function El(e) {
  return Object.assign(((t) => Object.assign(t, { [Symbol.iterator]() {
    let r = 0;
    const n = [{ value: Object.assign(t, { [Im]: !0 }), done: !1 }, { done: !0, value: void 0 }];
    return { next: () => {
      var a;
      return (a = n[r++]) != null ? a : n.at(-1);
    } };
  } }))(e), { optional: () => El(Mc(e)), select: (t) => El(t === void 0 ? oi(e) : oi(t, e)) });
}
function Mc(e) {
  return tr({ [yr]: () => ({ match: (t) => {
    let r = {};
    const n = (a, o) => {
      r[a] = o;
    };
    return t === void 0 ? (Ar(e).forEach((a) => n(a, void 0)), { matched: !0, selections: r }) : { matched: er(e, t, n), selections: r };
  }, getSelectionKeys: () => Ar(e), matcherType: "optional" }) });
}
const tD = (e, t) => {
  for (const r of e)
    if (!t(r))
      return !1;
  return !0;
}, rD = (e, t) => {
  for (const [r, n] of e.entries())
    if (!t(n, r))
      return !1;
  return !0;
};
function At(...e) {
  return tr({ [yr]: () => ({ match: (t) => {
    let r = {};
    const n = (a, o) => {
      r[a] = o;
    };
    return { matched: e.every((a) => er(a, t, n)), selections: r };
  }, getSelectionKeys: () => ai(e, Ar), matcherType: "and" }) });
}
function Mm(...e) {
  return tr({ [yr]: () => ({ match: (t) => {
    let r = {};
    const n = (a, o) => {
      r[a] = o;
    };
    return ai(e, Ar).forEach((a) => n(a, void 0)), { matched: e.some((a) => er(a, t, n)), selections: r };
  }, getSelectionKeys: () => ai(e, Ar), matcherType: "or" }) });
}
function lt(e) {
  return { [yr]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function oi(...e) {
  const t = typeof e[0] == "string" ? e[0] : void 0, r = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
  return tr({ [yr]: () => ({ match: (n) => {
    let a = { [t ?? ys]: n };
    return { matched: r === void 0 || er(r, n, (o, i) => {
      a[o] = i;
    }), selections: a };
  }, getSelectionKeys: () => [t ?? ys].concat(r === void 0 ? [] : Ar(r)) }) });
}
function un(e) {
  return typeof e == "number";
}
function sa(e) {
  return typeof e == "string";
}
function Ln(e) {
  return typeof e == "bigint";
}
const jm = tr(lt(function(e) {
  return !0;
})), nD = jm, ua = (e) => Object.assign(tr(e), { startsWith: (t) => {
  return ua(At(e, (r = t, lt((n) => sa(n) && n.startsWith(r)))));
  var r;
}, endsWith: (t) => {
  return ua(At(e, (r = t, lt((n) => sa(n) && n.endsWith(r)))));
  var r;
}, minLength: (t) => ua(At(e, ((r) => lt((n) => sa(n) && n.length >= r))(t))), maxLength: (t) => ua(At(e, ((r) => lt((n) => sa(n) && n.length <= r))(t))), includes: (t) => {
  return ua(At(e, (r = t, lt((n) => sa(n) && n.includes(r)))));
  var r;
}, regex: (t) => {
  return ua(At(e, (r = t, lt((n) => sa(n) && !!n.match(r)))));
  var r;
} }), aD = ua(lt(sa)), ln = (e) => Object.assign(tr(e), { between: (t, r) => ln(At(e, ((n, a) => lt((o) => un(o) && n <= o && a >= o))(t, r))), lt: (t) => ln(At(e, ((r) => lt((n) => un(n) && n < r))(t))), gt: (t) => ln(At(e, ((r) => lt((n) => un(n) && n > r))(t))), lte: (t) => ln(At(e, ((r) => lt((n) => un(n) && n <= r))(t))), gte: (t) => ln(At(e, ((r) => lt((n) => un(n) && n >= r))(t))), int: () => ln(At(e, lt((t) => un(t) && Number.isInteger(t)))), finite: () => ln(At(e, lt((t) => un(t) && Number.isFinite(t)))), positive: () => ln(At(e, lt((t) => un(t) && t > 0))), negative: () => ln(At(e, lt((t) => un(t) && t < 0))) }), oD = ln(lt(un)), kn = (e) => Object.assign(tr(e), { between: (t, r) => kn(At(e, ((n, a) => lt((o) => Ln(o) && n <= o && a >= o))(t, r))), lt: (t) => kn(At(e, ((r) => lt((n) => Ln(n) && n < r))(t))), gt: (t) => kn(At(e, ((r) => lt((n) => Ln(n) && n > r))(t))), lte: (t) => kn(At(e, ((r) => lt((n) => Ln(n) && n <= r))(t))), gte: (t) => kn(At(e, ((r) => lt((n) => Ln(n) && n >= r))(t))), positive: () => kn(At(e, lt((t) => Ln(t) && t > 0))), negative: () => kn(At(e, lt((t) => Ln(t) && t < 0))) }), iD = kn(lt(Ln)), sD = tr(lt(function(e) {
  return typeof e == "boolean";
})), uD = tr(lt(function(e) {
  return typeof e == "symbol";
})), lD = tr(lt(function(e) {
  return e == null;
})), cD = tr(lt(function(e) {
  return e != null;
}));
var qd = { __proto__: null, matcher: yr, optional: Mc, array: function(...e) {
  return El({ [yr]: () => ({ match: (t) => {
    if (!Array.isArray(t))
      return { matched: !1 };
    if (e.length === 0)
      return { matched: !0 };
    const r = e[0];
    let n = {};
    if (t.length === 0)
      return Ar(r).forEach((o) => {
        n[o] = [];
      }), { matched: !0, selections: n };
    const a = (o, i) => {
      n[o] = (n[o] || []).concat([i]);
    };
    return { matched: t.every((o) => er(r, o, a)), selections: n };
  }, getSelectionKeys: () => e.length === 0 ? [] : Ar(e[0]) }) });
}, set: function(...e) {
  return tr({ [yr]: () => ({ match: (t) => {
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
    return { matched: tD(t, (o) => er(a, o, n)), selections: r };
  }, getSelectionKeys: () => e.length === 0 ? [] : Ar(e[0]) }) });
}, map: function(...e) {
  return tr({ [yr]: () => ({ match: (t) => {
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
    return { matched: rD(t, (s, u) => {
      const l = er(o, u, n), c = er(i, s, n);
      return l && c;
    }), selections: r };
  }, getSelectionKeys: () => e.length === 0 ? [] : [...Ar(e[0]), ...Ar(e[1])] }) });
}, intersection: At, union: Mm, not: function(e) {
  return tr({ [yr]: () => ({ match: (t) => ({ matched: !er(e, t, () => {
  }) }), getSelectionKeys: () => [], matcherType: "not" }) });
}, when: lt, select: oi, any: jm, _: nD, string: aD, number: oD, bigint: iD, boolean: sD, symbol: uD, nullish: lD, nonNullable: cD, instanceOf: function(e) {
  return tr(lt(/* @__PURE__ */ function(t) {
    return (r) => r instanceof t;
  }(e)));
}, shape: function(e) {
  return tr(lt(eD(e)));
} };
const wl = { matched: !1, value: void 0 };
function Pt(e) {
  return new Cs(e, wl);
}
class Cs {
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
    }, u = !n.some((l) => er(l, this.input, s)) || a && !a(this.input) ? wl : { matched: !0, value: r(o ? ys in i ? i[ys] : i : this.input, this.input) };
    return new Cs(this.input, u);
  }
  when(t, r) {
    if (this.state.matched)
      return this;
    const n = !!t(this.input);
    return new Cs(this.input, n ? { matched: !0, value: r(this.input, this.input) } : wl);
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
const dt = {
  selectAllInModule(e) {
    const { selection: t } = e;
    if (!t)
      throw Error("selection is undefined");
    const [r, n] = C.edges(e, t);
    if (r.path[0] === n.path[0]) {
      const [a] = C.nodes(e, {
        match: (o) => ve.isElement(o)
      });
      return J.select(e, {
        anchor: C.start(e, a[1]),
        focus: C.end(e, a[1])
      }), !0;
    }
  },
  //加粗
  isBoldMarkActive(e) {
    const t = C.marks(e);
    return Pt(t).with({ bold: !0 }, () => !0).otherwise(() => !1);
  },
  toggleBoldMark(e) {
    const t = dt.isBoldMarkActive(e);
    Pt(t).with(!0, () => {
      C.removeMark(e, "bold");
    }).otherwise(() => {
      C.addMark(e, "bold", !0);
    });
  },
  //斜体
  isItalicMarkActive(e) {
    const t = C.marks(e);
    return Pt(t).with({ italic: !0 }, () => !0).otherwise(() => !1);
  },
  toggleItalicMark(e) {
    const t = dt.isItalicMarkActive(e);
    Pt(t).with(!0, () => {
      C.removeMark(e, "italic");
    }).otherwise(() => {
      C.addMark(e, "italic", !0);
    });
  },
  //下划线
  isUnderlineMarkActive(e) {
    const t = C.marks(e);
    return Pt(t).with({ underline: !0 }, () => !0).otherwise(() => !1);
  },
  toggleUnderlineMark(e) {
    const t = dt.isUnderlineMarkActive(e);
    Pt(t).with(!0, () => {
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
      match: (n) => ve.isElement(n) && C.isBlock(e, n)
    });
    return Pt(r[0]).with({ textAlign: qd.not(void 0) }, (n) => n.textAlign).otherwise(() => !1);
  },
  toggleTextAlignMark(e, t) {
    Pt(t).with(void 0, () => {
      dt.isTextAlignMarkActive(e) && J.setNodes(
        e,
        { textAlign: void 0 },
        { match: (n) => ve.isElement(n) && C.isBlock(e, n) }
      );
    }).otherwise((r) => {
      J.setNodes(
        e,
        { textAlign: r },
        { match: (n) => ve.isElement(n) && C.isBlock(e, n) }
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
      match: (n) => ve.isElement(n) && C.isBlock(e, n)
    });
    return Pt(r[0]).with({ heading: qd.not(void 0) }, (n) => n.heading).otherwise(() => !1);
  },
  toggleTextHeadingMark(e, t) {
    Pt(t).with(void 0, () => {
      dt.isTextHeadingMarkActive(e) && J.setNodes(
        e,
        { heading: void 0 },
        { match: (n) => ve.isElement(n) && C.isBlock(e, n) }
      );
    }).otherwise((r) => {
      J.setNodes(
        e,
        { heading: t },
        { match: (n) => ve.isElement(n) && C.isBlock(e, n) }
      );
    });
  },
  //任务
  isCheckListNode(e) {
    const [t] = C.nodes(e, {
      match: (r) => r.type === kt.CheckList
    });
    return !!t;
  },
  toggleCheckListNode(e) {
    const t = dt.isCheckListNode(e);
    let r = !1, n = !1;
    Pt(t).with(!0, () => {
      J.setNodes(
        e,
        { type: kt.Paragraph },
        { match: (a) => ve.isElement(a) && C.isBlock(e, a) }
      );
    }).with(!1, () => {
      const { selection: a } = e;
      if (!a)
        throw Error("selection is undefined");
      const o = C.start(e, a), [, i] = C.node(e, o), s = C.end(e, a), [, u] = C.node(e, s), l = C.previous(e, {
        at: i,
        match: (d) => ve.isElement(d)
      });
      if ((!l || l && l[1][0] === 0) && i[0] === 0 && (r = !0), C.next(e, {
        at: u,
        match: (d) => ve.isElement(d)
      }) || (n = !0), !n && !r)
        J.setNodes(
          e,
          { type: kt.CheckList },
          { match: (d) => ve.isElement(d) && C.isBlock(e, d) }
        );
      else if (J.setNodes(
        e,
        { type: kt.CheckList },
        { match: (d) => ve.isElement(d) && C.isBlock(e, d) }
      ), r && J.insertNodes(e, yl(), {
        at: [i[0]]
      }), n) {
        let d = 1;
        r && (d = 2), J.insertNodes(e, yl(), {
          at: [u[0] + d]
        });
      }
    });
  },
  indent(e) {
    J.insertText(e, " ".repeat(8));
  },
  restoreNormal(e) {
    const t = ["bold", "italic", "underline"];
    for (let r = 0; r < t.length; r++)
      C.removeMark(e, t[r]);
  },
  isParagraphNode(e) {
    const [t] = C.nodes(e, {
      match: (r) => r.type === kt.Paragraph
    });
    return !!t;
  },
  isOrderedNode(e) {
    const [t] = C.nodes(e, {
      match: (r) => r.type === kt.OrderedList
    });
    return !!t;
  },
  toggleOrderedNode(e) {
    const [t] = C.nodes(e, {
      match: (r) => r.type === kt.OrderedList
    });
    return !!t;
  }
};
var Lo = /* @__PURE__ */ ((e) => (e.Bold = "b", e.Italic = "i", e.Underline = "u", e.Restore = "r", e.Tab = "Tab", e))(Lo || {});
const fD = (e) => {
  const { deleteBackward: t, insertBreak: r } = e;
  return e.deleteBackward = (...n) => {
    const { selection: a } = e;
    if (a && Jw(e)) {
      const [o] = C.nodes(e, {
        match: (i) => !C.isEditor(i) && ve.isElement(i) && i.type === kt.CheckList
      });
      if (o) {
        const [, i] = o, s = C.start(e, i);
        if (Ge.equals(a.anchor, s)) {
          const u = {
            type: kt.Paragraph
          };
          J.setNodes(e, u, {
            match: (l) => !C.isEditor(l) && ve.isElement(l) && l.type === kt.CheckList
          });
          return;
        }
      }
    }
    t(...n);
  }, e.insertBreak = () => {
    const [n] = C.nodes(e, {
      match: (a) => !C.isEditor(a) && ve.isElement(a) && a.type === kt.CheckList
    });
    if (n) {
      const [, a] = n;
      if (!C.string(e, a)) {
        const i = Qw({
          type: kt.Paragraph
        });
        dt.restoreNormal(e), J.setNodes(e, i, {
          match: (s) => !C.isEditor(s) && ve.isElement(s) && s.type === kt.CheckList
        });
        return;
      }
    }
    r();
  }, e;
}, dD = (e) => {
  const { insertBreak: t } = e;
  return e.insertBreak = () => {
    const [r] = C.nodes(e, {
      match: (n) => !C.isEditor(n) && ve.isElement(n) && n.heading !== void 0 && n.type === kt.Paragraph
    });
    if (r) {
      const n = {
        type: kt.Paragraph,
        children: [{ text: "" }]
      };
      J.insertNodes(e, n);
      return;
    }
    t();
  }, e;
}, vD = () => {
  const [e, t] = ir(!0);
  return [sr(
    () => dD(fD(Ww(Gw(MC())))),
    []
  ), { showPlaceholder: e, handlePlaceholder: (a) => {
    var o, i;
    a.length === 1 && a[0].type === kt.Paragraph && ((i = (o = a[0]) == null ? void 0 : o.children) == null ? void 0 : i[0].text) === "" ? t(!0) : t(!1);
  } }];
};
var _m = { exports: {} };
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
})(_m);
var gD = _m.exports;
const ie = /* @__PURE__ */ mi(gD);
function We() {
  return We = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, We.apply(this, arguments);
}
var Dl = { exports: {} }, vt = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ud;
function mD() {
  if (Ud)
    return vt;
  Ud = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h;
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
                case g:
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
  return vt.ContextConsumer = i, vt.ContextProvider = o, vt.Element = e, vt.ForwardRef = u, vt.Fragment = r, vt.Lazy = g, vt.Memo = d, vt.Portal = t, vt.Profiler = a, vt.StrictMode = n, vt.Suspense = l, vt.SuspenseList = c, vt.isAsyncMode = function() {
    return !1;
  }, vt.isConcurrentMode = function() {
    return !1;
  }, vt.isContextConsumer = function(m) {
    return f(m) === i;
  }, vt.isContextProvider = function(m) {
    return f(m) === o;
  }, vt.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, vt.isForwardRef = function(m) {
    return f(m) === u;
  }, vt.isFragment = function(m) {
    return f(m) === r;
  }, vt.isLazy = function(m) {
    return f(m) === g;
  }, vt.isMemo = function(m) {
    return f(m) === d;
  }, vt.isPortal = function(m) {
    return f(m) === t;
  }, vt.isProfiler = function(m) {
    return f(m) === a;
  }, vt.isStrictMode = function(m) {
    return f(m) === n;
  }, vt.isSuspense = function(m) {
    return f(m) === l;
  }, vt.isSuspenseList = function(m) {
    return f(m) === c;
  }, vt.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === a || m === n || m === l || m === c || m === p || typeof m == "object" && m !== null && (m.$$typeof === g || m.$$typeof === d || m.$$typeof === o || m.$$typeof === i || m.$$typeof === u || m.$$typeof === h || m.getModuleId !== void 0);
  }, vt.typeOf = f, vt;
}
var gt = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gd;
function hD() {
  return Gd || (Gd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h = !1, f = !1, m = !1, b = !1, E = !1, y;
    y = Symbol.for("react.module.reference");
    function w(Y) {
      return !!(typeof Y == "string" || typeof Y == "function" || Y === r || Y === a || E || Y === n || Y === l || Y === c || b || Y === p || h || f || m || typeof Y == "object" && Y !== null && (Y.$$typeof === g || Y.$$typeof === d || Y.$$typeof === o || Y.$$typeof === i || Y.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Y.$$typeof === y || Y.getModuleId !== void 0));
    }
    function S(Y) {
      if (typeof Y == "object" && Y !== null) {
        var pe = Y.$$typeof;
        switch (pe) {
          case e:
            var Se = Y.type;
            switch (Se) {
              case r:
              case a:
              case n:
              case l:
              case c:
                return Se;
              default:
                var ye = Se && Se.$$typeof;
                switch (ye) {
                  case s:
                  case i:
                  case u:
                  case g:
                  case d:
                  case o:
                    return ye;
                  default:
                    return pe;
                }
            }
          case t:
            return pe;
        }
      }
    }
    var D = i, x = o, B = e, O = u, A = r, _ = g, P = d, $ = t, N = a, R = n, M = l, F = c, T = !1, k = !1;
    function H(Y) {
      return T || (T = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(Y) {
      return k || (k = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function X(Y) {
      return S(Y) === i;
    }
    function Q(Y) {
      return S(Y) === o;
    }
    function I(Y) {
      return typeof Y == "object" && Y !== null && Y.$$typeof === e;
    }
    function z(Y) {
      return S(Y) === u;
    }
    function V(Y) {
      return S(Y) === r;
    }
    function q(Y) {
      return S(Y) === g;
    }
    function te(Y) {
      return S(Y) === d;
    }
    function re(Y) {
      return S(Y) === t;
    }
    function le(Y) {
      return S(Y) === a;
    }
    function oe(Y) {
      return S(Y) === n;
    }
    function ge(Y) {
      return S(Y) === l;
    }
    function ce(Y) {
      return S(Y) === c;
    }
    gt.ContextConsumer = D, gt.ContextProvider = x, gt.Element = B, gt.ForwardRef = O, gt.Fragment = A, gt.Lazy = _, gt.Memo = P, gt.Portal = $, gt.Profiler = N, gt.StrictMode = R, gt.Suspense = M, gt.SuspenseList = F, gt.isAsyncMode = H, gt.isConcurrentMode = K, gt.isContextConsumer = X, gt.isContextProvider = Q, gt.isElement = I, gt.isForwardRef = z, gt.isFragment = V, gt.isLazy = q, gt.isMemo = te, gt.isPortal = re, gt.isProfiler = le, gt.isStrictMode = oe, gt.isSuspense = ge, gt.isSuspenseList = ce, gt.isValidElementType = w, gt.typeOf = S;
  }()), gt;
}
process.env.NODE_ENV === "production" ? Dl.exports = mD() : Dl.exports = hD();
var Ko = Dl.exports;
function fn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return ee.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(fn(n)) : Ko.isFragment(n) && n.props ? r = r.concat(fn(n.props.children, t)) : r.push(n));
  }), r;
}
var Sl = {}, jc = [], pD = function(t) {
  jc.push(t);
};
function uo(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = jc.reduce(function(n, a) {
      return a(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function bD(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = jc.reduce(function(n, a) {
      return a(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function Lm() {
  Sl = {};
}
function km(e, t, r) {
  !t && !Sl[r] && (e(!1, r), Sl[r] = !0);
}
function pt(e, t) {
  km(uo, e, t);
}
function yD(e, t) {
  km(bD, e, t);
}
pt.preMessage = pD;
pt.resetWarned = Lm;
pt.noteOnce = yD;
function st(e) {
  "@babel/helpers - typeof";
  return st = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, st(e);
}
function CD(e, t) {
  if (st(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (st(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zm(e) {
  var t = CD(e, "string");
  return st(t) == "symbol" ? t : String(t);
}
function W(e, t, r) {
  return t = zm(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
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
function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xd(Object(r), !0).forEach(function(n) {
      W(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Es(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function as(e) {
  return Es(e) ? e : e instanceof ee.Component ? kg.findDOMNode(e) : null;
}
function hi(e, t, r) {
  var n = v.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
function _c(e, t) {
  typeof e == "function" ? e(t) : st(e) === "object" && e && "current" in e && (e.current = t);
}
function Qn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t.filter(function(a) {
    return a;
  });
  return n.length <= 1 ? n[0] : function(a) {
    t.forEach(function(o) {
      _c(o, a);
    });
  };
}
function pi() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return hi(function() {
    return Qn.apply(void 0, t);
  }, t, function(n, a) {
    return n.length !== a.length || n.every(function(o, i) {
      return o !== a[i];
    });
  });
}
function Jn(e) {
  var t, r, n = Ko.isMemo(e) ? e.type.type : e.type;
  return !(typeof n == "function" && !((t = n.prototype) !== null && t !== void 0 && t.render) && n.$$typeof !== Ko.ForwardRef || typeof e == "function" && !((r = e.prototype) !== null && r !== void 0 && r.render) && e.$$typeof !== Ko.ForwardRef);
}
function ED(e) {
  return !/* @__PURE__ */ Q0(e) || Ko.isFragment(e) ? !1 : Jn(e);
}
var xl = /* @__PURE__ */ v.createContext(null);
function wD(e) {
  var t = e.children, r = e.onBatchResize, n = v.useRef(0), a = v.useRef([]), o = v.useContext(xl), i = v.useCallback(function(s, u, l) {
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
  return /* @__PURE__ */ v.createElement(xl.Provider, {
    value: i
  }, t);
}
var Vm = function() {
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
}(), Ol = typeof window < "u" && typeof document < "u" && window.document === document, ws = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), DD = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(ws) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), SD = 2;
function xD(e, t) {
  var r = !1, n = !1, a = 0;
  function o() {
    r && (r = !1, e()), n && s();
  }
  function i() {
    DD(o);
  }
  function s() {
    var u = Date.now();
    if (r) {
      if (u - a < SD)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(i, t);
    a = u;
  }
  return s;
}
var OD = 20, BD = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], AD = typeof MutationObserver < "u", $D = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = xD(this.refresh.bind(this), OD);
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
      !Ol || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), AD ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Ol || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, a = BD.some(function(o) {
        return !!~n.indexOf(o);
      });
      a && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Hm = function(e, t) {
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
}, lo = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || ws;
}, Wm = Ws(0, 0, 0, 0);
function Ds(e) {
  return parseFloat(e) || 0;
}
function Yd(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, a) {
    var o = e["border-" + a + "-width"];
    return n + Ds(o);
  }, 0);
}
function FD(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, a = t; n < a.length; n++) {
    var o = a[n], i = e["padding-" + o];
    r[o] = Ds(i);
  }
  return r;
}
function PD(e) {
  var t = e.getBBox();
  return Ws(0, 0, t.width, t.height);
}
function RD(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return Wm;
  var n = lo(e).getComputedStyle(e), a = FD(n), o = a.left + a.right, i = a.top + a.bottom, s = Ds(n.width), u = Ds(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + o) !== t && (s -= Yd(n, "left", "right") + o), Math.round(u + i) !== r && (u -= Yd(n, "top", "bottom") + i)), !ND(e)) {
    var l = Math.round(s + o) - t, c = Math.round(u + i) - r;
    Math.abs(l) !== 1 && (s -= l), Math.abs(c) !== 1 && (u -= c);
  }
  return Ws(a.left, a.top, s, u);
}
var TD = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof lo(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof lo(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function ND(e) {
  return e === lo(e).document.documentElement;
}
function ID(e) {
  return Ol ? TD(e) ? PD(e) : RD(e) : Wm;
}
function MD(e) {
  var t = e.x, r = e.y, n = e.width, a = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(o.prototype);
  return Hm(i, {
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
function Ws(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var jD = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ws(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = ID(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), _D = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, r) {
      var n = MD(r);
      Hm(this, { target: t, contentRect: n });
    }
    return e;
  }()
), LD = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new Vm(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof lo(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new jD(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof lo(t).Element))
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
          return new _D(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Km = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Vm(), qm = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = $D.getInstance(), n = new LD(t, r, this);
      Km.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  qm.prototype[e] = function() {
    var t;
    return (t = Km.get(this))[e].apply(t, arguments);
  };
});
var kD = function() {
  return typeof ws.ResizeObserver < "u" ? ws.ResizeObserver : qm;
}(), On = /* @__PURE__ */ new Map();
function Um(e) {
  e.forEach(function(t) {
    var r, n = t.target;
    (r = On.get(n)) === null || r === void 0 || r.forEach(function(a) {
      return a(n);
    });
  });
}
var Gm = new kD(Um);
process.env.NODE_ENV;
process.env.NODE_ENV;
function zD(e, t) {
  On.has(e) || (On.set(e, /* @__PURE__ */ new Set()), Gm.observe(e)), On.get(e).add(t);
}
function VD(e, t) {
  On.has(e) && (On.get(e).delete(t), On.get(e).size || (Gm.unobserve(e), On.delete(e)));
}
function Cr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, zm(n.key), n);
  }
}
function Er(e, t, r) {
  return t && Zd(e.prototype, t), r && Zd(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Bl(e, t) {
  return Bl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Bl(e, t);
}
function Ba(e, t) {
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
  }), t && Bl(e, t);
}
function Yn(e) {
  return Yn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Yn(e);
}
function Ks() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ks = function() {
    return !!e;
  })();
}
function ut(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Lc(e, t) {
  if (t && (st(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ut(e);
}
function bi(e) {
  var t = Ks();
  return function() {
    var n = Yn(e), a;
    if (t) {
      var o = Yn(this).constructor;
      a = Reflect.construct(n, arguments, o);
    } else
      a = n.apply(this, arguments);
    return Lc(this, a);
  };
}
var HD = /* @__PURE__ */ function(e) {
  Ba(r, e);
  var t = bi(r);
  function r() {
    return Cr(this, r), t.apply(this, arguments);
  }
  return Er(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(v.Component);
function WD(e, t) {
  var r = e.children, n = e.disabled, a = v.useRef(null), o = v.useRef(null), i = v.useContext(xl), s = typeof r == "function", u = s ? r(a) : r, l = v.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), c = !s && /* @__PURE__ */ v.isValidElement(u) && Jn(u), d = c ? u.ref : null, g = pi(d, a), p = function() {
    var b;
    return as(a.current) || // Support `nativeElement` format
    (a.current && st(a.current) === "object" ? as((b = a.current) === null || b === void 0 ? void 0 : b.nativeElement) : null) || as(o.current);
  };
  v.useImperativeHandle(t, function() {
    return p();
  });
  var h = v.useRef(e);
  h.current = e;
  var f = v.useCallback(function(m) {
    var b = h.current, E = b.onResize, y = b.data, w = m.getBoundingClientRect(), S = w.width, D = w.height, x = m.offsetWidth, B = m.offsetHeight, O = Math.floor(S), A = Math.floor(D);
    if (l.current.width !== O || l.current.height !== A || l.current.offsetWidth !== x || l.current.offsetHeight !== B) {
      var _ = {
        width: O,
        height: A,
        offsetWidth: x,
        offsetHeight: B
      };
      l.current = _;
      var P = x === Math.round(S) ? S : x, $ = B === Math.round(D) ? D : B, N = G(G({}, _), {}, {
        offsetWidth: P,
        offsetHeight: $
      });
      i == null || i(N, m, y), E && Promise.resolve().then(function() {
        E(N, m);
      });
    }
  }, []);
  return v.useEffect(function() {
    var m = p();
    return m && !n && zD(m, f), function() {
      return VD(m, f);
    };
  }, [a.current, n]), /* @__PURE__ */ v.createElement(HD, {
    ref: o
  }, c ? /* @__PURE__ */ v.cloneElement(u, {
    ref: g
  }) : u);
}
var Xm = /* @__PURE__ */ v.forwardRef(WD);
process.env.NODE_ENV !== "production" && (Xm.displayName = "SingleObserver");
var KD = "rc-observer-key";
function qD(e, t) {
  var r = e.children, n = typeof r == "function" ? [r] : fn(r);
  return process.env.NODE_ENV !== "production" && (n.length > 1 ? uo(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && uo(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(a, o) {
    var i = (a == null ? void 0 : a.key) || "".concat(KD, "-").concat(o);
    return /* @__PURE__ */ v.createElement(Xm, We({}, e, {
      key: i,
      ref: o === 0 ? t : void 0
    }), a);
  });
}
var ea = /* @__PURE__ */ v.forwardRef(qD);
process.env.NODE_ENV !== "production" && (ea.displayName = "ResizeObserver");
ea.Collection = wD;
function en(e, t) {
  var r = G({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
function Al(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function UD(e) {
  if (Array.isArray(e))
    return Al(e);
}
function Ym(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function kc(e, t) {
  if (e) {
    if (typeof e == "string")
      return Al(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Al(e, t);
  }
}
function GD() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ne(e) {
  return UD(e) || Ym(e) || kc(e) || GD();
}
var Zm = function(t) {
  return +setTimeout(t, 16);
}, Qm = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Zm = function(t) {
  return window.requestAnimationFrame(t);
}, Qm = function(t) {
  return window.cancelAnimationFrame(t);
});
var Qd = 0, qs = /* @__PURE__ */ new Map();
function Jm(e) {
  qs.delete(e);
}
var Gt = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Qd += 1;
  var n = Qd;
  function a(o) {
    if (o === 0)
      Jm(n), t();
    else {
      var i = Zm(function() {
        a(o - 1);
      });
      qs.set(n, i);
    }
  }
  return a(r), n;
};
Gt.cancel = function(e) {
  var t = qs.get(e);
  return Jm(e), Qm(t);
};
process.env.NODE_ENV !== "production" && (Gt.ids = function() {
  return qs;
});
function eh(e) {
  if (Array.isArray(e))
    return e;
}
function XD(e, t) {
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
function th() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ae(e, t) {
  return eh(e) || XD(e, t) || kc(e, t) || th();
}
function ii(e) {
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
function dr() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function YD(e, t) {
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
var Jd = "data-rc-order", ev = "data-rc-priority", ZD = "rc-util-key", $l = /* @__PURE__ */ new Map();
function rh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : ZD;
}
function Us(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function QD(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function zc(e) {
  return Array.from(($l.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function nh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!dr())
    return null;
  var r = t.csp, n = t.prepend, a = t.priority, o = a === void 0 ? 0 : a, i = QD(n), s = i === "prependQueue", u = document.createElement("style");
  u.setAttribute(Jd, i), s && o && u.setAttribute(ev, "".concat(o)), r != null && r.nonce && (u.nonce = r == null ? void 0 : r.nonce), u.innerHTML = e;
  var l = Us(t), c = l.firstChild;
  if (n) {
    if (s) {
      var d = (t.styles || zc(l)).filter(function(g) {
        if (!["prepend", "prependQueue"].includes(g.getAttribute(Jd)))
          return !1;
        var p = Number(g.getAttribute(ev) || 0);
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
function ah(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Us(t);
  return (t.styles || zc(r)).find(function(n) {
    return n.getAttribute(rh(t)) === e;
  });
}
function si(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = ah(e, t);
  if (r) {
    var n = Us(t);
    n.removeChild(r);
  }
}
function JD(e, t) {
  var r = $l.get(e);
  if (!r || !YD(document, r)) {
    var n = nh("", t), a = n.parentNode;
    $l.set(e, a), e.removeChild(n);
  }
}
function Bn(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Us(r), a = zc(n), o = G(G({}, r), {}, {
    styles: a
  });
  JD(n, o);
  var i = ah(t, o);
  if (i) {
    var s, u;
    if ((s = o.csp) !== null && s !== void 0 && s.nonce && i.nonce !== ((u = o.csp) === null || u === void 0 ? void 0 : u.nonce)) {
      var l;
      i.nonce = (l = o.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var c = nh(e, o);
  return c.setAttribute(rh(o), t), c;
}
function eS(e, t) {
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
  var r = eS(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function co(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function a(o, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, u = n.has(o);
    if (pt(!u, "Warning: There may be circular references"), u)
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
    if (o && i && st(o) === "object" && st(i) === "object") {
      var d = Object.keys(o);
      return d.length !== Object.keys(i).length ? !1 : d.every(function(g) {
        return a(o[g], i[g], l);
      });
    }
    return !1;
  }
  return a(e, t);
}
var tS = "%";
function Fl(e) {
  return e.join(tS);
}
var rS = /* @__PURE__ */ function() {
  function e(t) {
    Cr(this, e), W(this, "instanceId", void 0), W(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return Er(e, [{
    key: "get",
    value: function(r) {
      return this.opGet(Fl(r));
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
      return this.opUpdate(Fl(r), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(r, n) {
      var a = this.cache.get(r), o = n(a);
      o === null ? this.cache.delete(r) : this.cache.set(r, o);
    }
  }]), e;
}(), nS = ["children"], fo = "data-token-hash", Yr = "data-css-hash", aS = "data-cache-path", Kn = "__cssinjs_instance__";
function oh() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(Yr, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(a) {
      a[Kn] = a[Kn] || e, a[Kn] === e && document.head.insertBefore(a, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(Yr, "]"))).forEach(function(a) {
      var o = a.getAttribute(Yr);
      if (n[o]) {
        if (a[Kn] === e) {
          var i;
          (i = a.parentNode) === null || i === void 0 || i.removeChild(a);
        }
      } else
        n[o] = !0;
    });
  }
  return new rS(e);
}
var vo = /* @__PURE__ */ v.createContext({
  hashPriority: "low",
  cache: oh(),
  defaultCache: !0
}), oS = function(t) {
  var r = t.children, n = ct(t, nS), a = v.useContext(vo), o = hi(function() {
    var i = G({}, a);
    Object.keys(n).forEach(function(u) {
      var l = n[u];
      n[u] !== void 0 && (i[u] = l);
    });
    var s = n.cache;
    return i.cache = i.cache || oh(), i.defaultCache = !s && a.defaultCache, i;
  }, [a, n], function(i, s) {
    return !co(i[0], s[0], !0) || !co(i[1], s[1], !0);
  });
  return /* @__PURE__ */ v.createElement(vo.Provider, {
    value: o
  }, r);
};
function iS(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var Vc = /* @__PURE__ */ function() {
  function e() {
    Cr(this, e), W(this, "cache", void 0), W(this, "keys", void 0), W(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Er(e, [{
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
            var d = ae(l, 2), g = d[1];
            return a.internalGet(c)[1] < g ? [c, a.internalGet(c)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), i = ae(o, 1), s = i[0];
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
          return !iS(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
W(Vc, "MAX_CACHE_SIZE", 20);
W(Vc, "MAX_CACHE_OFFSET", 5);
var tv = 0, ih = /* @__PURE__ */ function() {
  function e(t) {
    Cr(this, e), W(this, "derivatives", void 0), W(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = tv, t.length === 0 && uo(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), tv += 1;
  }
  return Er(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, a) {
        return a(r, n);
      }, void 0);
    }
  }]), e;
}(), Au = new Vc();
function ui(e) {
  var t = Array.isArray(e) ? e : [e];
  return Au.has(t) || Au.set(t, new ih(t)), Au.get(t);
}
var sS = /* @__PURE__ */ new WeakMap(), $u = {};
function uS(e, t) {
  for (var r = sS, n = 0; n < t.length; n += 1) {
    var a = t[n];
    r.has(a) || r.set(a, /* @__PURE__ */ new WeakMap()), r = r.get(a);
  }
  return r.has($u) || r.set($u, e()), r.get($u);
}
var rv = /* @__PURE__ */ new WeakMap();
function qo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = rv.get(e) || "";
  return r || (Object.keys(e).forEach(function(n) {
    var a = e[n];
    r += n, a instanceof ih ? r += a.id : a && st(a) === "object" ? r += qo(a, t) : r += a;
  }), t && (r = ii(r)), rv.set(e, r)), r;
}
function nv(e, t) {
  return ii("".concat(t, "_").concat(qo(e, !0)));
}
var Pl = dr();
function De(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Ss(e, t, r) {
  var n, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (o)
    return e;
  var i = G(G({}, a), {}, (n = {}, W(n, fo, t), W(n, Yr, r), n)), s = Object.keys(i).map(function(u) {
    var l = i[u];
    return l ? "".concat(u, '="').concat(l, '"') : null;
  }).filter(function(u) {
    return u;
  }).join(" ");
  return "<style ".concat(s, ">").concat(e, "</style>");
}
var sh = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(r ? "".concat(r, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, lS = function(t, r, n) {
  return Object.keys(t).length ? ".".concat(r).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(a) {
    var o = ae(a, 2), i = o[0], s = o[1];
    return "".concat(i, ":").concat(s, ";");
  }).join(""), "}") : "";
}, uh = function(t, r, n) {
  var a = {}, o = {};
  return Object.entries(t).forEach(function(i) {
    var s, u, l = ae(i, 2), c = l[0], d = l[1];
    if (n != null && (s = n.preserve) !== null && s !== void 0 && s[c])
      o[c] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(n != null && (u = n.ignore) !== null && u !== void 0 && u[c])) {
      var g, p = sh(c, n == null ? void 0 : n.prefix);
      a[p] = typeof d == "number" && !(n != null && (g = n.unitless) !== null && g !== void 0 && g[c]) ? "".concat(d, "px") : String(d), o[c] = "var(".concat(p, ")");
    }
  }), [o, lS(a, r, {
    scope: n == null ? void 0 : n.scope
  })];
}, av = process.env.NODE_ENV !== "test" && dr() ? v.useLayoutEffect : v.useEffect, jt = function(t, r) {
  var n = v.useRef(!0);
  av(function() {
    return t(n.current);
  }, r), av(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, ov = function(t, r) {
  jt(function(n) {
    if (!n)
      return t();
  }, r);
}, cS = G({}, v), iv = cS.useInsertionEffect, fS = function(t, r, n) {
  v.useMemo(t, n), jt(function() {
    return r(!0);
  }, n);
}, dS = iv ? function(e, t, r) {
  return iv(function() {
    return e(), t();
  }, r);
} : fS, vS = G({}, v), gS = vS.useInsertionEffect, mS = function(t) {
  var r = [], n = !1;
  function a(o) {
    if (n) {
      process.env.NODE_ENV !== "production" && uo(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    r.push(o);
  }
  return v.useEffect(function() {
    return n = !1, function() {
      n = !0, r.length && r.forEach(function(o) {
        return o();
      });
    };
  }, t), a;
}, hS = function() {
  return function(t) {
    t();
  };
}, pS = typeof gS < "u" ? mS : hS;
function bS() {
  return !1;
}
var Rl = !1;
function yS() {
  return Rl;
}
const CS = process.env.NODE_ENV === "production" ? bS : yS;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Fu = window;
  if (typeof Fu.webpackHotUpdate == "function") {
    var ES = Fu.webpackHotUpdate;
    Fu.webpackHotUpdate = function() {
      return Rl = !0, setTimeout(function() {
        Rl = !1;
      }, 0), ES.apply(void 0, arguments);
    };
  }
}
function Hc(e, t, r, n, a) {
  var o = v.useContext(vo), i = o.cache, s = [e].concat(Ne(t)), u = Fl(s), l = pS([u]), c = CS(), d = function(f) {
    i.opUpdate(u, function(m) {
      var b = m || [void 0, void 0], E = ae(b, 2), y = E[0], w = y === void 0 ? 0 : y, S = E[1], D = S;
      process.env.NODE_ENV !== "production" && S && c && (n == null || n(D, c), D = null);
      var x = D || r(), B = [w, x];
      return f ? f(B) : B;
    });
  };
  v.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [u]
    /* eslint-enable */
  );
  var g = i.opGet(u);
  process.env.NODE_ENV !== "production" && !g && (d(), g = i.opGet(u));
  var p = g[1];
  return dS(function() {
    a == null || a(p);
  }, function(h) {
    return d(function(f) {
      var m = ae(f, 2), b = m[0], E = m[1];
      return h && b === 0 && (a == null || a(p)), [b + 1, E];
    }), function() {
      i.opUpdate(u, function(f) {
        var m = f || [], b = ae(m, 2), E = b[0], y = E === void 0 ? 0 : E, w = b[1], S = y - 1;
        return S === 0 ? (l(function() {
          (h || !i.opGet(u)) && (n == null || n(w, !1));
        }), null) : [y - 1, w];
      });
    };
  }, [u]), p;
}
var wS = {}, DS = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", fa = /* @__PURE__ */ new Map();
function SS(e) {
  fa.set(e, (fa.get(e) || 0) + 1);
}
function xS(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(fo, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[Kn] === t) {
        var a;
        (a = n.parentNode) === null || a === void 0 || a.removeChild(n);
      }
    });
  }
}
var OS = 0;
function BS(e, t) {
  fa.set(e, (fa.get(e) || 0) - 1);
  var r = Array.from(fa.keys()), n = r.filter(function(a) {
    var o = fa.get(a) || 0;
    return o <= 0;
  });
  r.length - n.length > OS && n.forEach(function(a) {
    xS(a, t), fa.delete(a);
  });
}
var lh = function(t, r, n, a) {
  var o = n.getDerivativeToken(t), i = G(G({}, o), r);
  return a && (i = a(i)), i;
}, ch = "token";
function AS(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Rt(vo), a = n.cache.instanceId, o = n.container, i = r.salt, s = i === void 0 ? "" : i, u = r.override, l = u === void 0 ? wS : u, c = r.formatToken, d = r.getComputedToken, g = r.cssVar, p = uS(function() {
    return Object.assign.apply(Object, [{}].concat(Ne(t)));
  }, t), h = qo(p), f = qo(l), m = g ? qo(g) : "", b = Hc(ch, [s, e.id, h, f, m], function() {
    var E, y = d ? d(p, l, e) : lh(p, l, e, c), w = G({}, y), S = "";
    if (g) {
      var D = uh(y, g.key, {
        prefix: g.prefix,
        ignore: g.ignore,
        unitless: g.unitless,
        preserve: g.preserve
      }), x = ae(D, 2);
      y = x[0], S = x[1];
    }
    var B = nv(y, s);
    y._tokenKey = B, w._tokenKey = nv(w, s);
    var O = (E = g == null ? void 0 : g.key) !== null && E !== void 0 ? E : B;
    y._themeKey = O, SS(O);
    var A = "".concat(DS, "-").concat(ii(B));
    return y._hashId = A, [y, A, w, S, (g == null ? void 0 : g.key) || ""];
  }, function(E) {
    BS(E[0]._themeKey, a);
  }, function(E) {
    var y = ae(E, 4), w = y[0], S = y[3];
    if (g && S) {
      var D = Bn(S, ii("css-variables-".concat(w._themeKey)), {
        mark: Yr,
        prepend: "queue",
        attachTo: o,
        priority: -999
      });
      D[Kn] = a, D.setAttribute(fo, w._themeKey);
    }
  });
  return b;
}
var $S = function(t, r, n) {
  var a = ae(t, 5), o = a[2], i = a[3], s = a[4], u = n || {}, l = u.plain;
  if (!i)
    return null;
  var c = o._tokenKey, d = -999, g = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, p = Ss(i, s, c, g, l);
  return [d, c, p];
}, FS = {
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
}, fh = "comm", dh = "rule", vh = "decl", PS = "@import", RS = "@keyframes", TS = "@layer", gh = Math.abs, Wc = String.fromCharCode;
function mh(e) {
  return e.trim();
}
function os(e, t, r) {
  return e.replace(t, r);
}
function NS(e, t, r) {
  return e.indexOf(t, r);
}
function li(e, t) {
  return e.charCodeAt(t) | 0;
}
function ci(e, t, r) {
  return e.slice(t, r);
}
function Sn(e) {
  return e.length;
}
function IS(e) {
  return e.length;
}
function _i(e, t) {
  return t.push(e), e;
}
var Gs = 1, go = 1, hh = 0, Lr = 0, Ht = 0, Co = "";
function Kc(e, t, r, n, a, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: a, children: o, line: Gs, column: go, length: i, return: "", siblings: s };
}
function MS() {
  return Ht;
}
function jS() {
  return Ht = Lr > 0 ? li(Co, --Lr) : 0, go--, Ht === 10 && (go = 1, Gs--), Ht;
}
function Zr() {
  return Ht = Lr < hh ? li(Co, Lr++) : 0, go++, Ht === 10 && (go = 1, Gs++), Ht;
}
function Ca() {
  return li(Co, Lr);
}
function is() {
  return Lr;
}
function Xs(e, t) {
  return ci(Co, e, t);
}
function Tl(e) {
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
function _S(e) {
  return Gs = go = 1, hh = Sn(Co = e), Lr = 0, [];
}
function LS(e) {
  return Co = "", e;
}
function Pu(e) {
  return mh(Xs(Lr - 1, Nl(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function kS(e) {
  for (; (Ht = Ca()) && Ht < 33; )
    Zr();
  return Tl(e) > 2 || Tl(Ht) > 3 ? "" : " ";
}
function zS(e, t) {
  for (; --t && Zr() && !(Ht < 48 || Ht > 102 || Ht > 57 && Ht < 65 || Ht > 70 && Ht < 97); )
    ;
  return Xs(e, is() + (t < 6 && Ca() == 32 && Zr() == 32));
}
function Nl(e) {
  for (; Zr(); )
    switch (Ht) {
      case e:
        return Lr;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Nl(Ht);
        break;
      case 40:
        e === 41 && Nl(e);
        break;
      case 92:
        Zr();
        break;
    }
  return Lr;
}
function VS(e, t) {
  for (; Zr() && e + Ht !== 57; )
    if (e + Ht === 84 && Ca() === 47)
      break;
  return "/*" + Xs(t, Lr - 1) + "*" + Wc(e === 47 ? e : Zr());
}
function HS(e) {
  for (; !Tl(Ca()); )
    Zr();
  return Xs(e, Lr);
}
function WS(e) {
  return LS(ss("", null, null, null, [""], e = _S(e), 0, [0], e));
}
function ss(e, t, r, n, a, o, i, s, u) {
  for (var l = 0, c = 0, d = i, g = 0, p = 0, h = 0, f = 1, m = 1, b = 1, E = 0, y = "", w = a, S = o, D = n, x = y; m; )
    switch (h = E, E = Zr()) {
      case 40:
        if (h != 108 && li(x, d - 1) == 58) {
          NS(x += os(Pu(E), "&", "&\f"), "&\f", gh(l ? s[l - 1] : 0)) != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Pu(E);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += kS(h);
        break;
      case 92:
        x += zS(is() - 1, 7);
        continue;
      case 47:
        switch (Ca()) {
          case 42:
          case 47:
            _i(KS(VS(Zr(), is()), t, r, u), u);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * f:
        s[l++] = Sn(x) * b;
      case 125 * f:
      case 59:
      case 0:
        switch (E) {
          case 0:
          case 125:
            m = 0;
          case 59 + c:
            b == -1 && (x = os(x, /\f/g, "")), p > 0 && Sn(x) - d && _i(p > 32 ? uv(x + ";", n, r, d - 1, u) : uv(os(x, " ", "") + ";", n, r, d - 2, u), u);
            break;
          case 59:
            x += ";";
          default:
            if (_i(D = sv(x, t, r, l, c, a, s, y, w = [], S = [], d, o), o), E === 123)
              if (c === 0)
                ss(x, t, D, D, w, o, d, s, S);
              else
                switch (g === 99 && li(x, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ss(e, D, D, n && _i(sv(e, D, D, 0, 0, a, s, y, a, w = [], d, S), S), a, S, d, s, n ? w : S);
                    break;
                  default:
                    ss(x, D, D, D, [""], S, 0, s, S);
                }
        }
        l = c = p = 0, f = b = 1, y = x = "", d = i;
        break;
      case 58:
        d = 1 + Sn(x), p = h;
      default:
        if (f < 1) {
          if (E == 123)
            --f;
          else if (E == 125 && f++ == 0 && jS() == 125)
            continue;
        }
        switch (x += Wc(E), E * f) {
          case 38:
            b = c > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            s[l++] = (Sn(x) - 1) * b, b = 1;
            break;
          case 64:
            Ca() === 45 && (x += Pu(Zr())), g = Ca(), c = d = Sn(y = x += HS(is())), E++;
            break;
          case 45:
            h === 45 && Sn(x) == 2 && (f = 0);
        }
    }
  return o;
}
function sv(e, t, r, n, a, o, i, s, u, l, c, d) {
  for (var g = a - 1, p = a === 0 ? o : [""], h = IS(p), f = 0, m = 0, b = 0; f < n; ++f)
    for (var E = 0, y = ci(e, g + 1, g = gh(m = i[f])), w = e; E < h; ++E)
      (w = mh(m > 0 ? p[E] + " " + y : os(y, /&\f/g, p[E]))) && (u[b++] = w);
  return Kc(e, t, r, a === 0 ? dh : s, u, l, c, d);
}
function KS(e, t, r, n) {
  return Kc(e, t, r, fh, Wc(MS()), ci(e, 2, -2), 0, n);
}
function uv(e, t, r, n, a) {
  return Kc(e, t, r, vh, ci(e, 0, n), ci(e, n + 1, -1), n, a);
}
function Il(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function qS(e, t, r, n) {
  switch (e.type) {
    case TS:
      if (e.children.length)
        break;
    case PS:
    case vh:
      return e.return = e.return || e.value;
    case fh:
      return "";
    case RS:
      return e.return = e.value + "{" + Il(e.children, n) + "}";
    case dh:
      if (!Sn(e.value = e.props.join(",")))
        return "";
  }
  return Sn(r = Il(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function ph(e, t) {
  var r = t.path, n = t.parentSelectors;
  pt(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var US = function(t, r, n) {
  if (t === "content") {
    var a = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, o = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || o.indexOf(r) === -1 && !a.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && ph("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, GS = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && ph("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, lv = "data-ant-cssinjs-cache-path", bh = "_FILE_STYLE__", Ea, yh = !0;
function XS() {
  if (!Ea && (Ea = {}, dr())) {
    var e = document.createElement("div");
    e.className = lv, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(a) {
      var o = a.split(":"), i = ae(o, 2), s = i[0], u = i[1];
      Ea[s] = u;
    });
    var r = document.querySelector("style[".concat(lv, "]"));
    if (r) {
      var n;
      yh = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function YS(e) {
  return XS(), !!Ea[e];
}
function ZS(e) {
  var t = Ea[e], r = null;
  if (t && dr())
    if (yh)
      r = bh;
    else {
      var n = document.querySelector("style[".concat(Yr, '="').concat(Ea[e], '"]'));
      n ? r = n.innerHTML : delete Ea[e];
    }
  return [r, t];
}
var Ch = "_skip_check_", Eh = "_multi_value_";
function us(e) {
  var t = Il(WS(e), qS);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function QS(e) {
  return st(e) === "object" && e && (Ch in e || Eh in e);
}
function JS(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), a = r === "low" ? ":where(".concat(n, ")") : n, o = e.split(",").map(function(i) {
    var s, u = i.trim().split(/\s+/), l = u[0] || "", c = ((s = l.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return l = "".concat(c).concat(a).concat(l.slice(c.length)), [l].concat(Ne(u.slice(1))).join(" ");
  });
  return o.join(",");
}
var ex = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = n.root, o = n.injectHash, i = n.parentSelectors, s = r.hashId, u = r.layer, l = r.path, c = r.hashPriority, d = r.transformers, g = d === void 0 ? [] : d, p = r.linters, h = p === void 0 ? [] : p, f = "", m = {};
  function b(w) {
    var S = w.getName(s);
    if (!m[S]) {
      var D = e(w.style, r, {
        root: !1,
        parentSelectors: i
      }), x = ae(D, 1), B = x[0];
      m[S] = "@keyframes ".concat(w.getName(s)).concat(B);
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
      var D = g.reduce(function(x, B) {
        var O;
        return (B == null || (O = B.visit) === null || O === void 0 ? void 0 : O.call(B, x)) || x;
      }, S);
      Object.keys(D).forEach(function(x) {
        var B = D[x];
        if (st(B) === "object" && B && (x !== "animationName" || !B._keyframe) && !QS(B)) {
          var O = !1, A = x.trim(), _ = !1;
          (a || o) && s ? A.startsWith("@") ? O = !0 : A = JS(x, s, c) : a && !s && (A === "&" || A === "") && (A = "", _ = !0);
          var P = e(B, r, {
            root: _,
            injectHash: O,
            parentSelectors: [].concat(Ne(i), [A])
          }), $ = ae(P, 2), N = $[0], R = $[1];
          m = G(G({}, m), R), f += "".concat(A).concat(N);
        } else {
          let T = function(k, H) {
            process.env.NODE_ENV !== "production" && (st(B) !== "object" || !(B != null && B[Ch])) && [US, GS].concat(Ne(h)).forEach(function(Q) {
              return Q(k, H, {
                path: l,
                hashId: s,
                parentSelectors: i
              });
            });
            var K = k.replace(/[A-Z]/g, function(Q) {
              return "-".concat(Q.toLowerCase());
            }), X = H;
            !FS[k] && typeof X == "number" && X !== 0 && (X = "".concat(X, "px")), k === "animationName" && H !== null && H !== void 0 && H._keyframe && (b(H), X = H.getName(s)), f += "".concat(K, ":").concat(X, ";");
          };
          var M, F = (M = B == null ? void 0 : B.value) !== null && M !== void 0 ? M : B;
          st(B) === "object" && B !== null && B !== void 0 && B[Eh] && Array.isArray(F) ? F.forEach(function(k) {
            T(x, k);
          }) : T(x, F);
        }
      });
    }
  }), a ? u && (f = "@layer ".concat(u.name, " {").concat(f, "}"), u.dependencies && (m["@layer ".concat(u.name)] = u.dependencies.map(function(w) {
    return "@layer ".concat(w, ", ").concat(u.name, ";");
  }).join(`
`))) : f = "{".concat(f, "}"), [f, m];
};
function wh(e, t) {
  return ii("".concat(e.join("%")).concat(t));
}
function tx() {
  return null;
}
var Dh = "style";
function Ml(e, t) {
  var r = e.token, n = e.path, a = e.hashId, o = e.layer, i = e.nonce, s = e.clientOnly, u = e.order, l = u === void 0 ? 0 : u, c = v.useContext(vo), d = c.autoClear, g = c.mock, p = c.defaultCache, h = c.hashPriority, f = c.container, m = c.ssrInline, b = c.transformers, E = c.linters, y = c.cache, w = c.layer, S = r._tokenKey, D = [S];
  w && D.push("layer"), D.push.apply(D, Ne(n));
  var x = Pl;
  process.env.NODE_ENV !== "production" && g !== void 0 && (x = g === "client");
  var B = Hc(
    Dh,
    D,
    // Create cache if needed
    function() {
      var $ = D.join("|");
      if (YS($)) {
        var N = ZS($), R = ae(N, 2), M = R[0], F = R[1];
        if (M)
          return [M, S, F, {}, s, l];
      }
      var T = t(), k = ex(T, {
        hashId: a,
        hashPriority: h,
        layer: w ? o : void 0,
        path: n.join("-"),
        transformers: b,
        linters: E
      }), H = ae(k, 2), K = H[0], X = H[1], Q = us(K), I = wh(D, Q);
      return [Q, S, I, X, s, l];
    },
    // Remove cache if no need
    function($, N) {
      var R = ae($, 3), M = R[2];
      (N || d) && Pl && si(M, {
        mark: Yr
      });
    },
    // Effect: Inject style here
    function($) {
      var N = ae($, 4), R = N[0];
      N[1];
      var M = N[2], F = N[3];
      if (x && R !== bh) {
        var T = {
          mark: Yr,
          prepend: w ? !1 : "queue",
          attachTo: f,
          priority: l
        }, k = typeof i == "function" ? i() : i;
        k && (T.csp = {
          nonce: k
        });
        var H = [], K = [];
        Object.keys(F).forEach(function(Q) {
          Q.startsWith("@layer") ? H.push(Q) : K.push(Q);
        }), H.forEach(function(Q) {
          Bn(us(F[Q]), "_layer-".concat(Q), G(G({}, T), {}, {
            prepend: !0
          }));
        });
        var X = Bn(R, M, T);
        X[Kn] = y.instanceId, X.setAttribute(fo, S), process.env.NODE_ENV !== "production" && X.setAttribute(aS, D.join("|")), K.forEach(function(Q) {
          Bn(us(F[Q]), "_effect-".concat(Q), T);
        });
      }
    }
  ), O = ae(B, 3), A = O[0], _ = O[1], P = O[2];
  return function($) {
    var N;
    if (!m || x || !p)
      N = /* @__PURE__ */ v.createElement(tx, null);
    else {
      var R;
      N = /* @__PURE__ */ v.createElement("style", We({}, (R = {}, W(R, fo, _), W(R, Yr, P), R), {
        dangerouslySetInnerHTML: {
          __html: A
        }
      }));
    }
    return /* @__PURE__ */ v.createElement(v.Fragment, null, N, $);
  };
}
var rx = function(t, r, n) {
  var a = ae(t, 6), o = a[0], i = a[1], s = a[2], u = a[3], l = a[4], c = a[5], d = n || {}, g = d.plain;
  if (l)
    return null;
  var p = o, h = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(c)
  };
  return p = Ss(o, i, s, h, g), u && Object.keys(u).forEach(function(f) {
    if (!r[f]) {
      r[f] = !0;
      var m = us(u[f]), b = Ss(m, i, "_effect-".concat(f), h, g);
      f.startsWith("@layer") ? p = b + p : p += b;
    }
  }), [c, s, p];
}, Sh = "cssVar", nx = function(t, r) {
  var n = t.key, a = t.prefix, o = t.unitless, i = t.ignore, s = t.token, u = t.scope, l = u === void 0 ? "" : u, c = Rt(vo), d = c.cache.instanceId, g = c.container, p = s._tokenKey, h = [].concat(Ne(t.path), [n, l, p]), f = Hc(Sh, h, function() {
    var m = r(), b = uh(m, n, {
      prefix: a,
      unitless: o,
      ignore: i,
      scope: l
    }), E = ae(b, 2), y = E[0], w = E[1], S = wh(h, w);
    return [y, w, S, n];
  }, function(m) {
    var b = ae(m, 3), E = b[2];
    Pl && si(E, {
      mark: Yr
    });
  }, function(m) {
    var b = ae(m, 3), E = b[1], y = b[2];
    if (E) {
      var w = Bn(E, y, {
        mark: Yr,
        prepend: "queue",
        attachTo: g,
        priority: -999
      });
      w[Kn] = d, w.setAttribute(fo, n);
    }
  });
  return f;
}, ax = function(t, r, n) {
  var a = ae(t, 4), o = a[1], i = a[2], s = a[3], u = n || {}, l = u.plain;
  if (!o)
    return null;
  var c = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(c)
  }, g = Ss(o, s, i, d, l);
  return [c, i, g];
}, Ro;
Ro = {}, W(Ro, Dh, rx), W(Ro, ch, $S), W(Ro, Sh, ax);
var Ct = /* @__PURE__ */ function() {
  function e(t, r) {
    Cr(this, e), W(this, "name", void 0), W(this, "style", void 0), W(this, "_keyframe", !0), this.name = t, this.style = r;
  }
  return Er(e, [{
    key: "getName",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return r ? "".concat(r, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function _a(e) {
  return e.notSplit = !0, e;
}
_a(["borderTop", "borderBottom"]), _a(["borderTop"]), _a(["borderBottom"]), _a(["borderLeft", "borderRight"]), _a(["borderLeft"]), _a(["borderRight"]);
var qc = /* @__PURE__ */ zr({});
function ox(e) {
  return eh(e) || Ym(e) || kc(e) || th();
}
function cn(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function xh(e, t, r, n) {
  if (!t.length)
    return r;
  var a = ox(t), o = a[0], i = a.slice(1), s;
  return !e && typeof o == "number" ? s = [] : Array.isArray(e) ? s = Ne(e) : s = G({}, e), n && r === void 0 && i.length === 1 ? delete s[o][i[0]] : s[o] = xh(s[o], i, r, n), s;
}
function Ur(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !cn(e, t.slice(0, -1)) ? e : xh(e, t, r, n);
}
function ix(e) {
  return st(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function cv(e) {
  return Array.isArray(e) ? [] : {};
}
var sx = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Ja() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = cv(t[0]);
  return t.forEach(function(a) {
    function o(i, s) {
      var u = new Set(s), l = cn(a, i), c = Array.isArray(l);
      if (c || ix(l)) {
        if (!u.has(l)) {
          u.add(l);
          var d = cn(n, i);
          c ? n = Ur(n, i, []) : (!d || st(d) !== "object") && (n = Ur(n, i, cv(l))), sx(l).forEach(function(g) {
            o([].concat(Ne(i), [g]), u);
          });
        }
      } else
        n = Ur(n, i, l);
    }
    o([]);
  }), n;
}
function Oh() {
}
let Dn = null;
function ux() {
  Dn = null, Lm();
}
let Uc = Oh;
process.env.NODE_ENV !== "production" && (Uc = (e, t, r) => {
  pt(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && ux();
});
const Bh = /* @__PURE__ */ v.createContext({}), wr = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = v.useContext(Bh), r = (n, a, o) => {
    if (!n)
      if (t === !1 && a === "deprecated") {
        const i = Dn;
        Dn || (Dn = {}), Dn[e] = Dn[e] || [], Dn[e].includes(o || "") || Dn[e].push(o || ""), i || console.warn("[antd] There exists deprecated usage in your code:", Dn);
      } else
        process.env.NODE_ENV !== "production" && Uc(n, e, o);
  };
  return r.deprecated = (n, a, o, i) => {
    r(n, "deprecated", `\`${a}\` is deprecated. Please use \`${o}\` instead.${i ? ` ${i}` : ""}`);
  }, r;
} : () => {
  const e = () => {
  };
  return e.deprecated = Oh, e;
}, Ys = Uc, lx = /* @__PURE__ */ zr(void 0);
var cx = {
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
}, fx = {
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
const dx = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Ah = dx, vx = {
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
  }, fx),
  timePickerLocale: Object.assign({}, Ah)
}, fv = vx, Sr = "${label} is not a valid ${type}", mo = {
  locale: "en",
  Pagination: cx,
  DatePicker: fv,
  TimePicker: Ah,
  Calendar: fv,
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
        string: Sr,
        method: Sr,
        array: Sr,
        object: Sr,
        number: Sr,
        date: Sr,
        boolean: Sr,
        integer: Sr,
        float: Sr,
        regexp: Sr,
        email: Sr,
        url: Sr,
        hex: Sr
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
Object.assign({}, mo.Modal);
let ls = [];
const dv = () => ls.reduce((e, t) => Object.assign(Object.assign({}, e), t), mo.Modal);
function gx(e) {
  if (e) {
    const t = Object.assign({}, e);
    return ls.push(t), dv(), () => {
      ls = ls.filter((r) => r !== t), dv();
    };
  }
  Object.assign({}, mo.Modal);
}
const mx = /* @__PURE__ */ zr(void 0), Gc = mx, hx = (e, t) => {
  const r = v.useContext(Gc), n = v.useMemo(() => {
    var o;
    const i = t || mo[e], s = (o = r == null ? void 0 : r[e]) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, typeof i == "function" ? i() : i), s || {});
  }, [e, t, r]), a = v.useMemo(() => {
    const o = r == null ? void 0 : r.locale;
    return r != null && r.exist && !o ? mo.locale : o;
  }, [r]);
  return [n, a];
}, $h = "internalMark", Fh = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const o = wr("LocaleProvider");
    process.env.NODE_ENV !== "production" && o(n === $h, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  v.useEffect(() => gx(t && t.Modal), [t]);
  const a = v.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ v.createElement(Gc.Provider, {
    value: a
  }, r);
};
process.env.NODE_ENV !== "production" && (Fh.displayName = "LocaleProvider");
const px = Fh;
function nr(e, t) {
  bx(e) && (e = "100%");
  var r = yx(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Li(e) {
  return Math.min(1, Math.max(0, e));
}
function bx(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function yx(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Ph(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function ki(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function ga(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Cx(e, t, r) {
  return {
    r: nr(e, 255) * 255,
    g: nr(t, 255) * 255,
    b: nr(r, 255) * 255
  };
}
function vv(e, t, r) {
  e = nr(e, 255), t = nr(t, 255), r = nr(r, 255);
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
function Ru(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function Ex(e, t, r) {
  var n, a, o;
  if (e = nr(e, 360), t = nr(t, 100), r = nr(r, 100), t === 0)
    a = r, o = r, n = r;
  else {
    var i = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - i;
    n = Ru(s, i, e + 1 / 3), a = Ru(s, i, e), o = Ru(s, i, e - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: o * 255 };
}
function jl(e, t, r) {
  e = nr(e, 255), t = nr(t, 255), r = nr(r, 255);
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
function wx(e, t, r) {
  e = nr(e, 360) * 6, t = nr(t, 100), r = nr(r, 100);
  var n = Math.floor(e), a = e - n, o = r * (1 - t), i = r * (1 - a * t), s = r * (1 - (1 - a) * t), u = n % 6, l = [r, i, o, o, s, r][u], c = [s, r, r, i, o, o][u], d = [o, o, s, r, r, i][u];
  return { r: l * 255, g: c * 255, b: d * 255 };
}
function _l(e, t, r, n) {
  var a = [
    ga(Math.round(e).toString(16)),
    ga(Math.round(t).toString(16)),
    ga(Math.round(r).toString(16))
  ];
  return n && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function Dx(e, t, r, n, a) {
  var o = [
    ga(Math.round(e).toString(16)),
    ga(Math.round(t).toString(16)),
    ga(Math.round(r).toString(16)),
    ga(Sx(n))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function Sx(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function gv(e) {
  return Or(e) / 255;
}
function Or(e) {
  return parseInt(e, 16);
}
function xx(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Ll = {
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
function Ya(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, a = null, o = null, i = !1, s = !1;
  return typeof e == "string" && (e = Ax(e)), typeof e == "object" && (Cn(e.r) && Cn(e.g) && Cn(e.b) ? (t = Cx(e.r, e.g, e.b), i = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Cn(e.h) && Cn(e.s) && Cn(e.v) ? (n = ki(e.s), a = ki(e.v), t = wx(e.h, n, a), i = !0, s = "hsv") : Cn(e.h) && Cn(e.s) && Cn(e.l) && (n = ki(e.s), o = ki(e.l), t = Ex(e.h, n, o), i = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = Ph(r), {
    ok: i,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var Ox = "[-\\+]?\\d+%?", Bx = "[-\\+]?\\d*\\.\\d+%?", qn = "(?:".concat(Bx, ")|(?:").concat(Ox, ")"), Tu = "[\\s|\\(]+(".concat(qn, ")[,|\\s]+(").concat(qn, ")[,|\\s]+(").concat(qn, ")\\s*\\)?"), Nu = "[\\s|\\(]+(".concat(qn, ")[,|\\s]+(").concat(qn, ")[,|\\s]+(").concat(qn, ")[,|\\s]+(").concat(qn, ")\\s*\\)?"), qr = {
  CSS_UNIT: new RegExp(qn),
  rgb: new RegExp("rgb" + Tu),
  rgba: new RegExp("rgba" + Nu),
  hsl: new RegExp("hsl" + Tu),
  hsla: new RegExp("hsla" + Nu),
  hsv: new RegExp("hsv" + Tu),
  hsva: new RegExp("hsva" + Nu),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Ax(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Ll[e])
    e = Ll[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = qr.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = qr.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = qr.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = qr.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = qr.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = qr.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = qr.hex8.exec(e), r ? {
    r: Or(r[1]),
    g: Or(r[2]),
    b: Or(r[3]),
    a: gv(r[4]),
    format: t ? "name" : "hex8"
  } : (r = qr.hex6.exec(e), r ? {
    r: Or(r[1]),
    g: Or(r[2]),
    b: Or(r[3]),
    format: t ? "name" : "hex"
  } : (r = qr.hex4.exec(e), r ? {
    r: Or(r[1] + r[1]),
    g: Or(r[2] + r[2]),
    b: Or(r[3] + r[3]),
    a: gv(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = qr.hex3.exec(e), r ? {
    r: Or(r[1] + r[1]),
    g: Or(r[2] + r[2]),
    b: Or(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Cn(e) {
  return !!qr.CSS_UNIT.exec(String(e));
}
var rr = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = ""), r === void 0 && (r = {});
      var n;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = xx(t)), this.originalInput = t;
      var a = Ya(t);
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
      return this.a = Ph(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = jl(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = jl(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = vv(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = vv(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), _l(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Dx(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(nr(r, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(r) {
        return Math.round(nr(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + _l(this.r, this.g, this.b, !1), r = 0, n = Object.entries(Ll); r < n.length; r++) {
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
      return r.l += t / 100, r.l = Li(r.l), new e(r);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l -= t / 100, r.l = Li(r.l), new e(r);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s -= t / 100, r.s = Li(r.s), new e(r);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s += t / 100, r.s = Li(r.s), new e(r);
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
), zi = 2, mv = 0.16, $x = 0.05, Fx = 0.05, Px = 0.15, Rh = 5, Th = 4, Rx = [{
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
function hv(e) {
  var t = e.r, r = e.g, n = e.b, a = jl(t, r, n);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function Vi(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(_l(t, r, n, !1));
}
function Tx(e, t, r) {
  var n = r / 100, a = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return a;
}
function pv(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - zi * t : Math.round(e.h) + zi * t : n = r ? Math.round(e.h) + zi * t : Math.round(e.h) - zi * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function bv(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - mv * t : t === Th ? n = e.s + mv : n = e.s + $x * t, n > 1 && (n = 1), r && t === Rh && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function yv(e, t, r) {
  var n;
  return r ? n = e.v + Fx * t : n = e.v - Px * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function Fn(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = Ya(e), a = Rh; a > 0; a -= 1) {
    var o = hv(n), i = Vi(Ya({
      h: pv(o, a, !0),
      s: bv(o, a, !0),
      v: yv(o, a, !0)
    }));
    r.push(i);
  }
  r.push(Vi(n));
  for (var s = 1; s <= Th; s += 1) {
    var u = hv(n), l = Vi(Ya({
      h: pv(u, s),
      s: bv(u, s),
      v: yv(u, s)
    }));
    r.push(l);
  }
  return t.theme === "dark" ? Rx.map(function(c) {
    var d = c.index, g = c.opacity, p = Vi(Tx(Ya(t.backgroundColor || "#141414"), Ya(r[d]), g * 100));
    return p;
  }) : r;
}
var Iu = {
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
}, Uo = {}, Mu = {};
Object.keys(Iu).forEach(function(e) {
  Uo[e] = Fn(Iu[e]), Uo[e].primary = Uo[e][5], Mu[e] = Fn(Iu[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Mu[e].primary = Mu[e][5];
});
var Nx = Uo.gold, Ix = Uo.blue;
const Nh = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function Mx(e) {
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
const Xc = {
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
}, ho = Object.assign(Object.assign({}, Xc), {
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
function Ih(e, t) {
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
  } = e, d = r(u), g = r(a), p = r(o), h = r(i), f = r(s), m = n(l, c), b = e.colorLink || e.colorInfo, E = r(b);
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
    colorSuccessBg: g[1],
    colorSuccessBgHover: g[2],
    colorSuccessBorder: g[3],
    colorSuccessBorderHover: g[4],
    colorSuccessHover: g[4],
    colorSuccess: g[6],
    colorSuccessActive: g[7],
    colorSuccessTextHover: g[8],
    colorSuccessText: g[9],
    colorSuccessTextActive: g[10],
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
    colorBgMask: new rr("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const jx = (e) => {
  let t = e, r = e, n = e, a = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? a = 4 : e >= 8 && (a = 6), {
    borderRadius: e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: a
  };
};
function _x(e) {
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
  }, jx(n));
}
const En = (e, t) => new rr(e).setAlpha(t).toRgbString(), To = (e, t) => new rr(e).darken(t).toHexString(), Lx = (e) => {
  const t = Fn(e);
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
}, kx = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: En(n, 0.88),
    colorTextSecondary: En(n, 0.65),
    colorTextTertiary: En(n, 0.45),
    colorTextQuaternary: En(n, 0.25),
    colorFill: En(n, 0.15),
    colorFillSecondary: En(n, 0.06),
    colorFillTertiary: En(n, 0.04),
    colorFillQuaternary: En(n, 0.02),
    colorBgLayout: To(r, 4),
    colorBgContainer: To(r, 0),
    colorBgElevated: To(r, 0),
    colorBgSpotlight: En(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: To(r, 15),
    colorBorderSecondary: To(r, 6)
  };
};
function cs(e) {
  return (e + 8) / e;
}
function zx(e) {
  const t = new Array(10).fill(null).map((r, n) => {
    const a = n - 1, o = e * Math.pow(2.71828, a / 5), i = n > 1 ? Math.floor(o) : Math.ceil(o);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((r) => ({
    size: r,
    lineHeight: cs(r)
  }));
}
const Mh = (e) => {
  const t = zx(e), r = t.map((c) => c.size), n = t.map((c) => c.lineHeight), a = r[1], o = r[0], i = r[2], s = n[1], u = n[0], l = n[2];
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
function yi(e) {
  const t = Object.keys(Xc).map((r) => {
    const n = Fn(e[r]);
    return new Array(10).fill(1).reduce((a, o, i) => (a[`${r}-${i + 1}`] = n[i], a[`${r}${i + 1}`] = n[i], a), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Ih(e, {
    generateColorPalettes: Lx,
    generateNeutralColorPalettes: kx
  })), Mh(e.fontSize)), Mx(e)), Nh(e)), _x(e));
}
const jh = ui(yi), xs = {
  token: ho,
  override: {
    override: ho
  },
  hashed: !0
}, _h = /* @__PURE__ */ ee.createContext(xs), Lh = "anticon", Vx = (e, t) => t || (e ? `ant-${e}` : "ant"), Tt = /* @__PURE__ */ v.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Vx,
  iconPrefixCls: Lh
}), Hx = `-ant-${Date.now()}-${Math.random()}`;
function Wx(e, t) {
  const r = {}, n = (i, s) => {
    let u = i.clone();
    return u = (s == null ? void 0 : s(u)) || u, u.toRgbString();
  }, a = (i, s) => {
    const u = new rr(i), l = Fn(u.toRgbString());
    r[`${s}-color`] = n(u), r[`${s}-color-disabled`] = l[1], r[`${s}-color-hover`] = l[4], r[`${s}-color-active`] = l[6], r[`${s}-color-outline`] = u.clone().setAlpha(0.2).toRgbString(), r[`${s}-color-deprecated-bg`] = l[0], r[`${s}-color-deprecated-border`] = l[2];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    const i = new rr(t.primaryColor), s = Fn(i.toRgbString());
    s.forEach((l, c) => {
      r[`primary-${c + 1}`] = l;
    }), r["primary-color-deprecated-l-35"] = n(i, (l) => l.lighten(35)), r["primary-color-deprecated-l-20"] = n(i, (l) => l.lighten(20)), r["primary-color-deprecated-t-20"] = n(i, (l) => l.tint(20)), r["primary-color-deprecated-t-50"] = n(i, (l) => l.tint(50)), r["primary-color-deprecated-f-12"] = n(i, (l) => l.setAlpha(l.getAlpha() * 0.12));
    const u = new rr(s[0]);
    r["primary-color-active-deprecated-f-30"] = n(u, (l) => l.setAlpha(l.getAlpha() * 0.3)), r["primary-color-active-deprecated-d-02"] = n(u, (l) => l.darken(2));
  }
  return t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((i) => `--${e}-${i}: ${r[i]};`).join(`
`)}
  }
  `.trim();
}
function Kx(e, t) {
  const r = Wx(e, t);
  dr() ? Bn(r, `${Hx}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Ys(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const kl = /* @__PURE__ */ v.createContext(!1), qx = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = v.useContext(kl);
  return /* @__PURE__ */ v.createElement(kl.Provider, {
    value: r ?? n
  }, t);
}, Zs = kl, zl = /* @__PURE__ */ v.createContext(void 0), Ux = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = v.useContext(zl);
  return /* @__PURE__ */ v.createElement(zl.Provider, {
    value: r || n
  }, t);
}, Qs = zl;
function Gx() {
  const e = Rt(Zs), t = Rt(Qs);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
const Os = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], Xx = "5.13.3";
function ju(e) {
  return e >= 0 && e <= 255;
}
function Hi(e, t) {
  const {
    r,
    g: n,
    b: a,
    a: o
  } = new rr(e).toRgb();
  if (o < 1)
    return e;
  const {
    r: i,
    g: s,
    b: u
  } = new rr(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const c = Math.round((r - i * (1 - l)) / l), d = Math.round((n - s * (1 - l)) / l), g = Math.round((a - u * (1 - l)) / l);
    if (ju(c) && ju(d) && ju(g))
      return new rr({
        r: c,
        g: d,
        b: g,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new rr({
    r,
    g: n,
    b: a,
    a: 1
  }).toRgbString();
}
var Yx = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function Yc(e) {
  const {
    override: t
  } = e, r = Yx(e, ["override"]), n = Object.assign({}, t);
  Object.keys(ho).forEach((g) => {
    delete n[g];
  });
  const a = Object.assign(Object.assign({}, r), n), o = 480, i = 576, s = 768, u = 992, l = 1200, c = 1600;
  if (a.motion === !1) {
    const g = "0s";
    a.motionDurationFast = g, a.motionDurationMid = g, a.motionDurationSlow = g;
  }
  return Object.assign(Object.assign(Object.assign({}, a), {
    // ============== Background ============== //
    colorFillContent: a.colorFillSecondary,
    colorFillContentHover: a.colorFill,
    colorFillAlter: a.colorFillQuaternary,
    colorBgContainerDisabled: a.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: a.colorBgContainer,
    colorSplit: Hi(a.colorBorderSecondary, a.colorBgContainer),
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
    colorErrorOutline: Hi(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: Hi(a.colorWarningBg, a.colorBgContainer),
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
    controlOutline: Hi(a.colorPrimaryBg, a.colorBgContainer),
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
      0 1px 2px -2px ${new rr("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new rr("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new rr("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var Cv = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const kh = {
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
}, zh = {
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
}, Zx = {
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
}, Vh = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: a
  } = t, o = Cv(t, ["override"]);
  let i = Object.assign(Object.assign({}, n), {
    override: a
  });
  return i = Yc(i), o && Object.entries(o).forEach((s) => {
    let [u, l] = s;
    const {
      theme: c
    } = l, d = Cv(l, ["theme"]);
    let g = d;
    c && (g = Vh(Object.assign(Object.assign({}, i), d), {
      override: d
    }, c)), i[u] = g;
  }), i;
};
function kr() {
  const {
    token: e,
    hashed: t,
    theme: r,
    override: n,
    cssVar: a
  } = ee.useContext(_h), o = `${Xx}-${t || ""}`, i = r || jh, [s, u, l] = AS(i, [ho, e], {
    salt: o,
    override: n,
    getComputedToken: Vh,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Yc,
    cssVar: a && {
      prefix: a.prefix,
      key: a.key,
      unitless: kh,
      ignore: zh,
      preserve: Zx
    }
  });
  return [i, l, t ? u : "", s, a];
}
function Br(e) {
  var t = v.useRef();
  t.current = e;
  var r = v.useCallback(function() {
    for (var n, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(o));
  }, []);
  return r;
}
function no(e) {
  var t = v.useRef(!1), r = v.useState(e), n = ae(r, 2), a = n[0], o = n[1];
  v.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function i(s, u) {
    u && t.current || o(s);
  }
  return [a, i];
}
function _u(e) {
  return e !== void 0;
}
function Qr(e, t) {
  var r = t || {}, n = r.defaultValue, a = r.value, o = r.onChange, i = r.postState, s = no(function() {
    return _u(a) ? a : _u(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), u = ae(s, 2), l = u[0], c = u[1], d = a !== void 0 ? a : l, g = i ? i(d) : d, p = Br(o), h = no([d]), f = ae(h, 2), m = f[0], b = f[1];
  ov(function() {
    var y = m[0];
    l !== y && p(l, y);
  }, [m]), ov(function() {
    _u(a) || c(a);
  }, [a]);
  var E = Br(function(y, w) {
    c(y, w), b([d], w);
  });
  return [g, E];
}
const Hh = (e) => ({
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
}), Qx = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, Gn = function(e) {
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
}, Wh = () => ({
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
}), Vl = () => ({
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
}), Jx = (e) => ({
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
}), eO = (e, t) => {
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
}, Zc = (e) => ({
  outline: `${De(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), Hl = (e) => ({
  "&:focus-visible": Object.assign({}, Zc(e))
});
let tO = /* @__PURE__ */ Er(function e() {
  Cr(this, e);
});
const Kh = tO;
function rO(e, t, r) {
  return t = Yn(t), Lc(e, Ks() ? Reflect.construct(t, r || [], Yn(e).constructor) : t.apply(e, r));
}
let nO = /* @__PURE__ */ function(e) {
  Ba(t, e);
  function t(r) {
    var n;
    return Cr(this, t), n = rO(this, t), n.result = 0, r instanceof t ? n.result = r.result : typeof r == "number" && (n.result = r), n;
  }
  return Er(t, [{
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
}(Kh);
function aO(e, t, r) {
  return t = Yn(t), Lc(e, Ks() ? Reflect.construct(t, r || [], Yn(e).constructor) : t.apply(e, r));
}
const qh = "CALC_UNIT";
function Lu(e) {
  return typeof e == "number" ? `${e}${qh}` : e;
}
let oO = /* @__PURE__ */ function(e) {
  Ba(t, e);
  function t(r) {
    var n;
    return Cr(this, t), n = aO(this, t), n.result = "", r instanceof t ? n.result = `(${r.result})` : typeof r == "number" ? n.result = Lu(r) : typeof r == "string" && (n.result = r), n;
  }
  return Er(t, [{
    key: "add",
    value: function(n) {
      return n instanceof t ? this.result = `${this.result} + ${n.getResult()}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} + ${Lu(n)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(n) {
      return n instanceof t ? this.result = `${this.result} - ${n.getResult()}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} - ${Lu(n)}`), this.lowPriority = !0, this;
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
      } = n || {}, o = new RegExp(`${qh}`, "g");
      return this.result = this.result.replace(o, a ? "px" : ""), typeof this.lowPriority < "u" ? `calc(${this.result})` : this.result;
    }
  }]), t;
}(Kh);
const iO = (e) => {
  const t = e === "css" ? oO : nO;
  return (r) => new t(r);
};
function sO(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return `max(${r.map((a) => De(a)).join(",")})`;
    },
    min: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return `min(${r.map((a) => De(a)).join(",")})`;
    }
  };
}
const Uh = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let Wl = !0;
function ur() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!Uh)
    return Object.assign.apply(Object, [{}].concat(t));
  Wl = !1;
  const n = {};
  return t.forEach((a) => {
    Object.keys(a).forEach((i) => {
      Object.defineProperty(n, i, {
        configurable: !0,
        enumerable: !0,
        get: () => a[i]
      });
    });
  }), Wl = !0, n;
}
const Ev = {};
function uO() {
}
const lO = (e) => {
  let t, r = e, n = uO;
  return Uh && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), r = new Proxy(e, {
    get(a, o) {
      return Wl && t.add(o), a[o];
    }
  }), n = (a, o) => {
    var i;
    Ev[a] = {
      global: Array.from(t),
      component: Object.assign(Object.assign({}, (i = Ev[a]) === null || i === void 0 ? void 0 : i.component), o)
    };
  }), {
    token: r,
    keys: t,
    flush: n
  };
}, Gh = (e, t) => {
  const [r, n] = kr();
  return Ml({
    theme: r,
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, Wh()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, Xh = (e, t, r) => {
  var n;
  return typeof r == "function" ? r(ur(t, (n = t[e]) !== null && n !== void 0 ? n : {})) : r ?? {};
}, Yh = (e, t, r, n) => {
  const a = Object.assign({}, t[e]);
  if (n != null && n.deprecatedTokens) {
    const {
      deprecatedTokens: i
    } = n;
    i.forEach((s) => {
      let [u, l] = s;
      var c;
      process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && pt(!(a != null && a[u]), `Component Token \`${String(u)}\` of ${e} is deprecated. Please use \`${String(l)}\` instead.`), (a != null && a[u] || a != null && a[l]) && ((c = a[l]) !== null && c !== void 0 || (a[l] = a == null ? void 0 : a[u]));
    });
  }
  const o = Object.assign(Object.assign({}, r), a);
  return Object.keys(o).forEach((i) => {
    o[i] === t[i] && delete o[i];
  }), o;
}, cO = (e, t) => `${[t, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
function Qc(e, t, r) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const a = Array.isArray(e) ? e : [e, e], [o] = a, i = a.join("-");
  return (s) => {
    const [u, l, c, d, g] = kr(), {
      getPrefixCls: p,
      iconPrefixCls: h,
      csp: f
    } = Rt(Tt), m = p(), b = g ? "css" : "js", E = iO(b), {
      max: y,
      min: w
    } = sO(b), S = {
      theme: u,
      token: d,
      hashId: c,
      nonce: () => f == null ? void 0 : f.nonce,
      clientOnly: n.clientOnly,
      // antd is always at top of styles
      order: n.order || -999
    };
    return Ml(Object.assign(Object.assign({}, S), {
      clientOnly: !1,
      path: ["Shared", m]
    }), () => [{
      // Link
      "&": Jx(d)
    }]), Gh(h, f), [Ml(Object.assign(Object.assign({}, S), {
      path: [i, s, h]
    }), () => {
      if (n.injectStyle === !1)
        return [];
      const {
        token: x,
        flush: B
      } = lO(d), O = Xh(o, l, r), A = `.${s}`, _ = Yh(o, l, O, {
        deprecatedTokens: n.deprecatedTokens
      });
      g && Object.keys(O).forEach((N) => {
        O[N] = `var(${sh(N, cO(o, g.prefix))})`;
      });
      const P = ur(x, {
        componentCls: A,
        prefixCls: s,
        iconCls: `.${h}`,
        antCls: `.${m}`,
        calc: E,
        max: y,
        min: w
      }, g ? O : _), $ = t(P, {
        hashId: c,
        prefixCls: s,
        rootPrefixCls: m,
        iconPrefixCls: h
      });
      return B(o, _), [n.resetStyle === !1 ? null : eO(P, s), $];
    }), c];
  };
}
const fO = (e, t, r, n) => {
  const a = Qc(e, t, r, Object.assign({
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
}, dO = (e, t, r) => {
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
    const [, g] = kr();
    return nx({
      path: [e],
      prefix: d.prefix,
      key: d == null ? void 0 : d.key,
      unitless: Object.assign(Object.assign({}, kh), i),
      ignore: zh,
      token: g,
      scope: c
    }, () => {
      const p = Xh(e, g, t), h = Yh(e, g, p, {
        deprecatedTokens: r == null ? void 0 : r.deprecatedTokens
      });
      return Object.keys(p).forEach((f) => {
        h[n(f)] = h[f], delete h[f];
      }), h;
    }), null;
  };
  return (l) => {
    const [, , , , c] = kr();
    return [(d) => o && c ? /* @__PURE__ */ ee.createElement(ee.Fragment, null, /* @__PURE__ */ ee.createElement(s, {
      rootCls: l,
      cssVar: c,
      component: e
    }), d) : d, c == null ? void 0 : c.key];
  };
}, ta = (e, t, r, n) => {
  const a = Qc(e, t, r, n), o = dO(Array.isArray(e) ? e[0] : e, r, n);
  return function(i) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i;
    const [, u] = a(i), [l, c] = o(s);
    return [l, u, c];
  };
};
function vO(e, t) {
  return Os.reduce((r, n) => {
    const a = e[`${n}1`], o = e[`${n}3`], i = e[`${n}6`], s = e[`${n}7`];
    return Object.assign(Object.assign({}, r), t(n, {
      lightColor: a,
      lightBorderColor: o,
      darkColor: i,
      textColor: s
    }));
  }, {});
}
const gO = Object.assign({}, v), {
  useId: wv
} = gO, mO = () => "", hO = typeof wv > "u" ? mO : wv;
function pO(e, t) {
  var r;
  const n = wr("ConfigProvider"), a = e || {}, o = a.inherit === !1 || !t ? xs : t, i = hO();
  if (process.env.NODE_ENV !== "production") {
    const s = a.cssVar || o.cssVar, u = !!(typeof a.cssVar == "object" && (!((r = a.cssVar) === null || r === void 0) && r.key) || i);
    process.env.NODE_ENV !== "production" && n(!s || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return hi(() => {
    var s, u;
    if (!e)
      return t;
    const l = Object.assign({}, o.components);
    Object.keys(e.components || {}).forEach((g) => {
      l[g] = Object.assign(Object.assign({}, l[g]), e.components[g]);
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
    return !co(l, d, !0);
  }));
}
var bO = ["children"], Zh = /* @__PURE__ */ v.createContext({});
function yO(e) {
  var t = e.children, r = ct(e, bO);
  return /* @__PURE__ */ v.createElement(Zh.Provider, {
    value: r
  }, t);
}
var CO = /* @__PURE__ */ function(e) {
  Ba(r, e);
  var t = bi(r);
  function r() {
    return Cr(this, r), t.apply(this, arguments);
  }
  return Er(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(v.Component), la = "none", Wi = "appear", Ki = "enter", qi = "leave", Dv = "none", Gr = "prepare", eo = "start", to = "active", Jc = "end", Qh = "prepared";
function Sv(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function EO(e, t) {
  var r = {
    animationend: Sv("Animation", "AnimationEnd"),
    transitionend: Sv("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var wO = EO(dr(), typeof window < "u" ? window : {}), Jh = {};
if (dr()) {
  var DO = document.createElement("div");
  Jh = DO.style;
}
var Ui = {};
function ep(e) {
  if (Ui[e])
    return Ui[e];
  var t = wO[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, a = 0; a < n; a += 1) {
      var o = r[a];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in Jh)
        return Ui[e] = t[o], Ui[e];
    }
  return "";
}
var tp = ep("animationend"), rp = ep("transitionend"), np = !!(tp && rp), xv = tp || "animationend", Ov = rp || "transitionend";
function Bv(e, t) {
  if (!e)
    return null;
  if (st(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const SO = function(e) {
  var t = Je(), r = Je(e);
  r.current = e;
  var n = v.useCallback(function(i) {
    r.current(i);
  }, []);
  function a(i) {
    i && (i.removeEventListener(Ov, n), i.removeEventListener(xv, n));
  }
  function o(i) {
    t.current && t.current !== i && a(t.current), i && i !== t.current && (i.addEventListener(Ov, n), i.addEventListener(xv, n), t.current = i);
  }
  return v.useEffect(function() {
    return function() {
      a(t.current);
    };
  }, []), [o, a];
};
var ap = dr() ? Lg : zt;
const xO = function() {
  var e = v.useRef(null);
  function t() {
    Gt.cancel(e.current);
  }
  function r(n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var o = Gt(function() {
      a <= 1 ? n({
        isCanceled: function() {
          return o !== e.current;
        }
      }) : r(n, a - 1);
    });
    e.current = o;
  }
  return v.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
};
var OO = [Gr, eo, to, Jc], BO = [Gr, Qh], op = !1, AO = !0;
function ip(e) {
  return e === to || e === Jc;
}
const $O = function(e, t, r) {
  var n = no(Dv), a = ae(n, 2), o = a[0], i = a[1], s = xO(), u = ae(s, 2), l = u[0], c = u[1];
  function d() {
    i(Gr, !0);
  }
  var g = t ? BO : OO;
  return ap(function() {
    if (o !== Dv && o !== Jc) {
      var p = g.indexOf(o), h = g[p + 1], f = r(o);
      f === op ? i(h, !0) : h && l(function(m) {
        function b() {
          m.isCanceled() || i(h, !0);
        }
        f === !0 ? b() : Promise.resolve(f).then(b);
      });
    }
  }, [e, o]), v.useEffect(function() {
    return function() {
      c();
    };
  }, []), [d, o];
};
function FO(e, t, r, n) {
  var a = n.motionEnter, o = a === void 0 ? !0 : a, i = n.motionAppear, s = i === void 0 ? !0 : i, u = n.motionLeave, l = u === void 0 ? !0 : u, c = n.motionDeadline, d = n.motionLeaveImmediately, g = n.onAppearPrepare, p = n.onEnterPrepare, h = n.onLeavePrepare, f = n.onAppearStart, m = n.onEnterStart, b = n.onLeaveStart, E = n.onAppearActive, y = n.onEnterActive, w = n.onLeaveActive, S = n.onAppearEnd, D = n.onEnterEnd, x = n.onLeaveEnd, B = n.onVisibleChanged, O = no(), A = ae(O, 2), _ = A[0], P = A[1], $ = no(la), N = ae($, 2), R = N[0], M = N[1], F = no(null), T = ae(F, 2), k = T[0], H = T[1], K = Je(!1), X = Je(null);
  function Q() {
    return r();
  }
  var I = Je(!1);
  function z() {
    M(la, !0), H(null, !0);
  }
  function V(de) {
    var Ee = Q();
    if (!(de && !de.deadline && de.target !== Ee)) {
      var he = I.current, me;
      R === Wi && he ? me = S == null ? void 0 : S(Ee, de) : R === Ki && he ? me = D == null ? void 0 : D(Ee, de) : R === qi && he && (me = x == null ? void 0 : x(Ee, de)), R !== la && he && me !== !1 && z();
    }
  }
  var q = SO(V), te = ae(q, 1), re = te[0], le = function(Ee) {
    var he, me, be;
    switch (Ee) {
      case Wi:
        return he = {}, W(he, Gr, g), W(he, eo, f), W(he, to, E), he;
      case Ki:
        return me = {}, W(me, Gr, p), W(me, eo, m), W(me, to, y), me;
      case qi:
        return be = {}, W(be, Gr, h), W(be, eo, b), W(be, to, w), be;
      default:
        return {};
    }
  }, oe = v.useMemo(function() {
    return le(R);
  }, [R]), ge = $O(R, !e, function(de) {
    if (de === Gr) {
      var Ee = oe[Gr];
      return Ee ? Ee(Q()) : op;
    }
    if (pe in oe) {
      var he;
      H(((he = oe[pe]) === null || he === void 0 ? void 0 : he.call(oe, Q(), null)) || null);
    }
    return pe === to && (re(Q()), c > 0 && (clearTimeout(X.current), X.current = setTimeout(function() {
      V({
        deadline: !0
      });
    }, c))), pe === Qh && z(), AO;
  }), ce = ae(ge, 2), Y = ce[0], pe = ce[1], Se = ip(pe);
  I.current = Se, ap(function() {
    P(t);
    var de = K.current;
    K.current = !0;
    var Ee;
    !de && t && s && (Ee = Wi), de && t && o && (Ee = Ki), (de && !t && l || !de && d && !t && l) && (Ee = qi);
    var he = le(Ee);
    Ee && (e || he[Gr]) ? (M(Ee), Y()) : M(la);
  }, [t]), zt(function() {
    // Cancel appear
    (R === Wi && !s || // Cancel enter
    R === Ki && !o || // Cancel leave
    R === qi && !l) && M(la);
  }, [s, o, l]), zt(function() {
    return function() {
      K.current = !1, clearTimeout(X.current);
    };
  }, []);
  var ye = v.useRef(!1);
  zt(function() {
    _ && (ye.current = !0), _ !== void 0 && R === la && ((ye.current || _) && (B == null || B(_)), ye.current = !0);
  }, [_, R]);
  var we = k;
  return oe[Gr] && pe === eo && (we = G({
    transition: "none"
  }, we)), [R, pe, we, _ ?? t];
}
function PO(e) {
  var t = e;
  st(e) === "object" && (t = e.transitionSupport);
  function r(a, o) {
    return !!(a.motionName && t && o !== !1);
  }
  var n = /* @__PURE__ */ v.forwardRef(function(a, o) {
    var i = a.visible, s = i === void 0 ? !0 : i, u = a.removeOnLeave, l = u === void 0 ? !0 : u, c = a.forceRender, d = a.children, g = a.motionName, p = a.leavedClassName, h = a.eventProps, f = v.useContext(Zh), m = f.motion, b = r(a, m), E = Je(), y = Je();
    function w() {
      try {
        return E.current instanceof HTMLElement ? E.current : as(y.current);
      } catch {
        return null;
      }
    }
    var S = FO(b, s, w, a), D = ae(S, 4), x = D[0], B = D[1], O = D[2], A = D[3], _ = v.useRef(A);
    A && (_.current = !0);
    var P = v.useCallback(function(H) {
      E.current = H, _c(o, H);
    }, [o]), $, N = G(G({}, h), {}, {
      visible: s
    });
    if (!d)
      $ = null;
    else if (x === la)
      A ? $ = d(G({}, N), P) : !l && _.current && p ? $ = d(G(G({}, N), {}, {
        className: p
      }), P) : c || !l && !p ? $ = d(G(G({}, N), {}, {
        style: {
          display: "none"
        }
      }), P) : $ = null;
    else {
      var R, M;
      B === Gr ? M = "prepare" : ip(B) ? M = "active" : B === eo && (M = "start");
      var F = Bv(g, "".concat(x, "-").concat(M));
      $ = d(G(G({}, N), {}, {
        className: ie(Bv(g, x), (R = {}, W(R, F, F && M), W(R, g, typeof g == "string"), R)),
        style: O
      }), P);
    }
    if (/* @__PURE__ */ v.isValidElement($) && Jn($)) {
      var T = $, k = T.ref;
      k || ($ = /* @__PURE__ */ v.cloneElement($, {
        ref: P
      }));
    }
    return /* @__PURE__ */ v.createElement(CO, {
      ref: y
    }, $);
  });
  return n.displayName = "CSSMotion", n;
}
const Eo = PO(np);
var Kl = "add", ql = "keep", Ul = "remove", ku = "removed";
function RO(e) {
  var t;
  return e && st(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, G(G({}, t), {}, {
    key: String(t.key)
  });
}
function Gl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(RO);
}
function TO() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, a = t.length, o = Gl(e), i = Gl(t);
  o.forEach(function(l) {
    for (var c = !1, d = n; d < a; d += 1) {
      var g = i[d];
      if (g.key === l.key) {
        n < d && (r = r.concat(i.slice(n, d).map(function(p) {
          return G(G({}, p), {}, {
            status: Kl
          });
        })), n = d), r.push(G(G({}, g), {}, {
          status: ql
        })), n += 1, c = !0;
        break;
      }
    }
    c || r.push(G(G({}, l), {}, {
      status: Ul
    }));
  }), n < a && (r = r.concat(i.slice(n).map(function(l) {
    return G(G({}, l), {}, {
      status: Kl
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
      var d = c.key, g = c.status;
      return d !== l || g !== Ul;
    }), r.forEach(function(c) {
      c.key === l && (c.status = ql);
    });
  }), r;
}
var NO = ["component", "children", "onVisibleChanged", "onAllRemoved"], IO = ["status"], MO = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function jO(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Eo, r = /* @__PURE__ */ function(n) {
    Ba(o, n);
    var a = bi(o);
    function o() {
      var i;
      Cr(this, o);
      for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++)
        u[l] = arguments[l];
      return i = a.call.apply(a, [this].concat(u)), W(ut(i), "state", {
        keyEntities: []
      }), W(ut(i), "removeKey", function(c) {
        var d = i.state.keyEntities, g = d.map(function(p) {
          return p.key !== c ? p : G(G({}, p), {}, {
            status: ku
          });
        });
        return i.setState({
          keyEntities: g
        }), g.filter(function(p) {
          var h = p.status;
          return h !== ku;
        }).length;
      }), i;
    }
    return Er(o, [{
      key: "render",
      value: function() {
        var s = this, u = this.state.keyEntities, l = this.props, c = l.component, d = l.children, g = l.onVisibleChanged, p = l.onAllRemoved, h = ct(l, NO), f = c || v.Fragment, m = {};
        return MO.forEach(function(b) {
          m[b] = h[b], delete h[b];
        }), delete h.keys, /* @__PURE__ */ v.createElement(f, h, u.map(function(b, E) {
          var y = b.status, w = ct(b, IO), S = y === Kl || y === ql;
          return /* @__PURE__ */ v.createElement(t, We({}, m, {
            key: w.key,
            visible: S,
            eventProps: w,
            onVisibleChanged: function(x) {
              if (g == null || g(x, {
                key: w.key
              }), !x) {
                var B = s.removeKey(w.key);
                B === 0 && p && p();
              }
            }
          }), function(D, x) {
            return d(G(G({}, D), {}, {
              index: E
            }), x);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, u) {
        var l = s.keys, c = u.keyEntities, d = Gl(l), g = TO(c, d);
        return {
          keyEntities: g.filter(function(p) {
            var h = c.find(function(f) {
              var m = f.key;
              return p.key === m;
            });
            return !(h && h.status === ku && p.status === Ul);
          })
        };
      }
    }]), o;
  }(v.Component);
  return W(r, "defaultProps", {
    component: "div"
  }), r;
}
jO(np);
function _O(e) {
  const {
    children: t
  } = e, [, r] = kr(), {
    motion: n
  } = r, a = v.useRef(!1);
  return a.current = a.current || n === !1, a.current ? /* @__PURE__ */ v.createElement(yO, {
    motion: n
  }, t) : t;
}
const sp = /* @__PURE__ */ v.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return wr("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (sp.displayName = "PropWarning");
const LO = process.env.NODE_ENV !== "production" ? sp : () => null;
var kO = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
let Xl = !1;
process.env.NODE_ENV;
const zO = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"], VO = "ant";
let up;
function HO() {
  return up || VO;
}
function WO(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const KO = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n,
    holderRender: a
  } = e;
  t !== void 0 && (up = t), n && WO(n) && (process.env.NODE_ENV !== "production" && Ys(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Kx(HO(), n));
}, qO = (e) => {
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
    dropdownMatchSelectWidth: g,
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
    carousel: B,
    cascader: O,
    collapse: A,
    typography: _,
    checkbox: P,
    descriptions: $,
    divider: N,
    drawer: R,
    skeleton: M,
    steps: F,
    image: T,
    layout: k,
    list: H,
    mentions: K,
    modal: X,
    progress: Q,
    result: I,
    slider: z,
    breadcrumb: V,
    menu: q,
    pagination: te,
    input: re,
    empty: le,
    badge: oe,
    radio: ge,
    rate: ce,
    switch: Y,
    transfer: pe,
    avatar: Se,
    message: ye,
    tag: we,
    table: de,
    card: Ee,
    tabs: he,
    timeline: me,
    timePicker: be,
    upload: Ie,
    notification: Re,
    tree: je,
    colorPicker: bt,
    datePicker: _e,
    rangePicker: Ce,
    flex: ke,
    wave: ze,
    dropdown: _t,
    warning: et
  } = e, xt = v.useCallback(($e, Ye) => {
    const {
      prefixCls: xe
    } = e;
    if (Ye)
      return Ye;
    const Pe = xe || m.getPrefixCls("");
    return $e ? `${Pe}-${$e}` : Pe;
  }, [m.getPrefixCls, e.prefixCls]), mt = b || m.iconPrefixCls || Lh, Ze = r || m.csp;
  Gh(mt, Ze);
  const ot = pO(E, m.theme);
  process.env.NODE_ENV !== "production" && (Xl = Xl || !!ot);
  const Wt = {
    csp: Ze,
    autoInsertSpaceInButton: n,
    alert: a,
    anchor: o,
    locale: s || f,
    direction: l,
    space: c,
    virtual: d,
    popupMatchSelectWidth: p ?? g,
    popupOverflow: h,
    getPrefixCls: xt,
    iconPrefixCls: mt,
    theme: ot,
    segmented: w,
    statistic: S,
    spin: D,
    calendar: x,
    carousel: B,
    cascader: O,
    collapse: A,
    typography: _,
    checkbox: P,
    descriptions: $,
    divider: N,
    drawer: R,
    skeleton: M,
    steps: F,
    image: T,
    input: re,
    layout: k,
    list: H,
    mentions: K,
    modal: X,
    progress: Q,
    result: I,
    slider: z,
    breadcrumb: V,
    menu: q,
    pagination: te,
    empty: le,
    badge: oe,
    radio: ge,
    rate: ce,
    switch: Y,
    transfer: pe,
    avatar: Se,
    message: ye,
    tag: we,
    table: de,
    card: Ee,
    tabs: he,
    timeline: me,
    timePicker: be,
    upload: Ie,
    notification: Re,
    tree: je,
    colorPicker: bt,
    datePicker: _e,
    rangePicker: Ce,
    flex: ke,
    wave: ze,
    dropdown: _t,
    warning: et
  }, Et = Object.assign({}, m);
  Object.keys(Wt).forEach(($e) => {
    Wt[$e] !== void 0 && (Et[$e] = Wt[$e]);
  }), zO.forEach(($e) => {
    const Ye = e[$e];
    Ye && (Et[$e] = Ye);
  });
  const se = hi(() => Et, Et, ($e, Ye) => {
    const xe = Object.keys($e), Pe = Object.keys(Ye);
    return xe.length !== Pe.length || xe.some((it) => $e[it] !== Ye[it]);
  }), Ae = v.useMemo(() => ({
    prefixCls: mt,
    csp: Ze
  }), [mt, Ze]);
  let Le = /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(LO, {
    dropdownMatchSelectWidth: g
  }), t);
  const tt = v.useMemo(() => {
    var $e, Ye, xe, Pe;
    return Ja((($e = mo.Form) === null || $e === void 0 ? void 0 : $e.defaultValidateMessages) || {}, ((xe = (Ye = se.locale) === null || Ye === void 0 ? void 0 : Ye.Form) === null || xe === void 0 ? void 0 : xe.defaultValidateMessages) || {}, ((Pe = se.form) === null || Pe === void 0 ? void 0 : Pe.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [se, i == null ? void 0 : i.validateMessages]);
  Object.keys(tt).length > 0 && (Le = /* @__PURE__ */ v.createElement(lx.Provider, {
    value: tt
  }, Le)), s && (Le = /* @__PURE__ */ v.createElement(px, {
    locale: s,
    _ANT_MARK__: $h
  }, Le)), (mt || Ze) && (Le = /* @__PURE__ */ v.createElement(qc.Provider, {
    value: Ae
  }, Le)), u && (Le = /* @__PURE__ */ v.createElement(Ux, {
    size: u
  }, Le)), Le = /* @__PURE__ */ v.createElement(_O, null, Le);
  const Qe = v.useMemo(() => {
    const $e = ot || {}, {
      algorithm: Ye,
      token: xe,
      components: Pe,
      cssVar: it
    } = $e, Nt = kO($e, ["algorithm", "token", "components", "cssVar"]), Kt = Ye && (!Array.isArray(Ye) || Ye.length > 0) ? ui(Ye) : jh, $t = {};
    Object.entries(Pe || {}).forEach((rn) => {
      let [Dr, hr] = rn;
      const j = Object.assign({}, hr);
      "algorithm" in j && (j.algorithm === !0 ? j.theme = Kt : (Array.isArray(j.algorithm) || typeof j.algorithm == "function") && (j.theme = ui(j.algorithm)), delete j.algorithm), $t[Dr] = j;
    });
    const tn = Object.assign(Object.assign({}, ho), xe);
    return Object.assign(Object.assign({}, Nt), {
      theme: Kt,
      token: tn,
      components: $t,
      override: Object.assign({
        override: tn
      }, $t),
      cssVar: it
    });
  }, [ot]);
  return E && (Le = /* @__PURE__ */ v.createElement(_h.Provider, {
    value: Qe
  }, Le)), se.warning && (Le = /* @__PURE__ */ v.createElement(Bh.Provider, {
    value: se.warning
  }, Le)), y !== void 0 && (Le = /* @__PURE__ */ v.createElement(qx, {
    disabled: y
  }, Le)), /* @__PURE__ */ v.createElement(Tt.Provider, {
    value: se
  }, Le);
}, Aa = (e) => {
  const t = v.useContext(Tt), r = v.useContext(Gc);
  return /* @__PURE__ */ v.createElement(qO, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
Aa.ConfigContext = Tt;
Aa.SizeContext = Qs;
Aa.config = KO;
Aa.useConfig = Gx;
Object.defineProperty(Aa, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Ys(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Qs)
});
process.env.NODE_ENV !== "production" && (Aa.displayName = "ConfigProvider");
const lp = Aa;
function cp(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function UO(e) {
  return cp(e) instanceof ShadowRoot;
}
function Bs(e) {
  return UO(e) ? cp(e) : null;
}
function GO(e) {
  return e.replace(/-(.)/g, function(t, r) {
    return r.toUpperCase();
  });
}
function XO(e, t) {
  pt(e, "[@ant-design/icons] ".concat(t));
}
function Av(e) {
  return st(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (st(e.icon) === "object" || typeof e.icon == "function");
}
function $v() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        delete t[r], t[GO(r)] = n;
    }
    return t;
  }, {});
}
function Yl(e, t, r) {
  return r ? /* @__PURE__ */ ee.createElement(e.tag, G(G({
    key: t
  }, $v(e.attrs)), r), (e.children || []).map(function(n, a) {
    return Yl(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ ee.createElement(e.tag, G({
    key: t
  }, $v(e.attrs)), (e.children || []).map(function(n, a) {
    return Yl(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function fp(e) {
  return Fn(e)[0];
}
function dp(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var YO = `
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
`, ZO = function(t) {
  var r = Rt(qc), n = r.csp, a = r.prefixCls, o = YO;
  a && (o = o.replace(/anticon/g, a)), zt(function() {
    var i = t.current, s = Bs(i);
    Bn(o, "@ant-design-icons", {
      prepend: !0,
      csp: n,
      attachTo: s
    });
  }, []);
}, QO = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Go = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function JO(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  Go.primaryColor = t, Go.secondaryColor = r || fp(t), Go.calculated = !!r;
}
function eB() {
  return G({}, Go);
}
var Js = function(t) {
  var r = t.icon, n = t.className, a = t.onClick, o = t.style, i = t.primaryColor, s = t.secondaryColor, u = ct(t, QO), l = v.useRef(), c = Go;
  if (i && (c = {
    primaryColor: i,
    secondaryColor: s || fp(i)
  }), ZO(l), XO(Av(r), "icon should be icon definiton, but got ".concat(r)), !Av(r))
    return null;
  var d = r;
  return d && typeof d.icon == "function" && (d = G(G({}, d), {}, {
    icon: d.icon(c.primaryColor, c.secondaryColor)
  })), Yl(d.icon, "svg-".concat(d.name), G(G({
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
Js.displayName = "IconReact";
Js.getTwoToneColors = eB;
Js.setTwoToneColors = JO;
const ef = Js;
function vp(e) {
  var t = dp(e), r = ae(t, 2), n = r[0], a = r[1];
  return ef.setTwoToneColors({
    primaryColor: n,
    secondaryColor: a
  });
}
function tB() {
  var e = ef.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var rB = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
vp(Ix.primary);
var eu = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.className, n = e.icon, a = e.spin, o = e.rotate, i = e.tabIndex, s = e.onClick, u = e.twoToneColor, l = ct(e, rB), c = v.useContext(qc), d = c.prefixCls, g = d === void 0 ? "anticon" : d, p = c.rootClassName, h = ie(p, g, W(W({}, "".concat(g, "-").concat(n.name), !!n.name), "".concat(g, "-spin"), !!a || n.name === "loading"), r), f = i;
  f === void 0 && s && (f = -1);
  var m = o ? {
    msTransform: "rotate(".concat(o, "deg)"),
    transform: "rotate(".concat(o, "deg)")
  } : void 0, b = dp(u), E = ae(b, 2), y = E[0], w = E[1];
  return /* @__PURE__ */ v.createElement("span", We({
    role: "img",
    "aria-label": n.name
  }, l, {
    ref: t,
    tabIndex: f,
    onClick: s,
    className: h
  }), /* @__PURE__ */ v.createElement(ef, {
    icon: n,
    primaryColor: y,
    secondaryColor: w,
    style: m
  }));
});
eu.displayName = "AntdIcon";
eu.getTwoToneColor = tB;
eu.setTwoToneColor = vp;
const dn = eu;
var nB = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
const aB = nB;
var oB = function(t, r) {
  return /* @__PURE__ */ v.createElement(dn, We({}, t, {
    ref: r,
    icon: aB
  }));
}, gp = /* @__PURE__ */ v.forwardRef(oB);
process.env.NODE_ENV !== "production" && (gp.displayName = "CloseCircleFilled");
const iB = gp, {
  isValidElement: Zn
} = v;
function mp(e) {
  return e && Zn(e) && e.type === v.Fragment;
}
function sB(e, t, r) {
  return Zn(e) ? /* @__PURE__ */ v.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
}
function ra(e, t) {
  return sB(e, e, t);
}
const Ci = (e) => {
  const [, , , , t] = kr();
  return t ? `${e}-css-var` : "";
};
var Be = {
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
    r >= Be.F1 && r <= Be.F12)
      return !1;
    switch (r) {
      case Be.ALT:
      case Be.CAPS_LOCK:
      case Be.CONTEXT_MENU:
      case Be.CTRL:
      case Be.DOWN:
      case Be.END:
      case Be.ESC:
      case Be.HOME:
      case Be.INSERT:
      case Be.LEFT:
      case Be.MAC_FF_META:
      case Be.META:
      case Be.NUMLOCK:
      case Be.NUM_CENTER:
      case Be.PAGE_DOWN:
      case Be.PAGE_UP:
      case Be.PAUSE:
      case Be.PRINT_SCREEN:
      case Be.RIGHT:
      case Be.SHIFT:
      case Be.UP:
      case Be.WIN_KEY:
      case Be.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= Be.ZERO && t <= Be.NINE || t >= Be.NUM_ZERO && t <= Be.NUM_MULTIPLY || t >= Be.A && t <= Be.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case Be.SPACE:
      case Be.QUESTION_MARK:
      case Be.NUM_PLUS:
      case Be.NUM_MINUS:
      case Be.NUM_PERIOD:
      case Be.NUM_DIVISION:
      case Be.SEMICOLON:
      case Be.DASH:
      case Be.EQUALS:
      case Be.COMMA:
      case Be.PERIOD:
      case Be.SLASH:
      case Be.APOSTROPHE:
      case Be.SINGLE_QUOTE:
      case Be.OPEN_SQUARE_BRACKET:
      case Be.BACKSLASH:
      case Be.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, uB = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const lB = uB;
var cB = function(t, r) {
  return /* @__PURE__ */ v.createElement(dn, We({}, t, {
    ref: r,
    icon: lB
  }));
}, hp = /* @__PURE__ */ v.forwardRef(cB);
process.env.NODE_ENV !== "production" && (hp.displayName = "LoadingOutlined");
const fB = hp, tu = /* @__PURE__ */ ee.createContext(void 0);
process.env.NODE_ENV !== "production" && (tu.displayName = "zIndexContext");
const ca = 100, dB = 10, vB = ca * dB, pp = {
  Modal: ca,
  Drawer: ca,
  Popover: ca,
  Popconfirm: ca,
  Tooltip: ca,
  Tour: ca
}, gB = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function mB(e) {
  return e in pp;
}
function tf(e, t) {
  const [, r] = kr(), n = ee.useContext(tu), a = mB(e);
  if (t !== void 0)
    return [t, t];
  let o = n ?? 0;
  return a ? (o += // Use preset token zIndex by default but not stack when has parent container
  (n ? 0 : r.zIndexPopupBase) + // Container offset
  pp[e], o = Math.min(o, r.zIndexPopupBase + vB)) : o += gB[e], [n === void 0 ? t : o, o];
}
function vr() {
  vr = function() {
    return t;
  };
  var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, a = Object.defineProperty || function(M, F, T) {
    M[F] = T.value;
  }, o = typeof Symbol == "function" ? Symbol : {}, i = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag";
  function l(M, F, T) {
    return Object.defineProperty(M, F, {
      value: T,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), M[F];
  }
  try {
    l({}, "");
  } catch {
    l = function(T, k, H) {
      return T[k] = H;
    };
  }
  function c(M, F, T, k) {
    var H = F && F.prototype instanceof b ? F : b, K = Object.create(H.prototype), X = new N(k || []);
    return a(K, "_invoke", {
      value: A(M, T, X)
    }), K;
  }
  function d(M, F, T) {
    try {
      return {
        type: "normal",
        arg: M.call(F, T)
      };
    } catch (k) {
      return {
        type: "throw",
        arg: k
      };
    }
  }
  t.wrap = c;
  var g = "suspendedStart", p = "suspendedYield", h = "executing", f = "completed", m = {};
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
  function B(M) {
    ["next", "throw", "return"].forEach(function(F) {
      l(M, F, function(T) {
        return this._invoke(F, T);
      });
    });
  }
  function O(M, F) {
    function T(H, K, X, Q) {
      var I = d(M[H], M, K);
      if (I.type !== "throw") {
        var z = I.arg, V = z.value;
        return V && st(V) == "object" && n.call(V, "__await") ? F.resolve(V.__await).then(function(q) {
          T("next", q, X, Q);
        }, function(q) {
          T("throw", q, X, Q);
        }) : F.resolve(V).then(function(q) {
          z.value = q, X(z);
        }, function(q) {
          return T("throw", q, X, Q);
        });
      }
      Q(I.arg);
    }
    var k;
    a(this, "_invoke", {
      value: function(K, X) {
        function Q() {
          return new F(function(I, z) {
            T(K, X, I, z);
          });
        }
        return k = k ? k.then(Q, Q) : Q();
      }
    });
  }
  function A(M, F, T) {
    var k = g;
    return function(H, K) {
      if (k === h)
        throw new Error("Generator is already running");
      if (k === f) {
        if (H === "throw")
          throw K;
        return {
          value: e,
          done: !0
        };
      }
      for (T.method = H, T.arg = K; ; ) {
        var X = T.delegate;
        if (X) {
          var Q = _(X, T);
          if (Q) {
            if (Q === m)
              continue;
            return Q;
          }
        }
        if (T.method === "next")
          T.sent = T._sent = T.arg;
        else if (T.method === "throw") {
          if (k === g)
            throw k = f, T.arg;
          T.dispatchException(T.arg);
        } else
          T.method === "return" && T.abrupt("return", T.arg);
        k = h;
        var I = d(M, F, T);
        if (I.type === "normal") {
          if (k = T.done ? f : p, I.arg === m)
            continue;
          return {
            value: I.arg,
            done: T.done
          };
        }
        I.type === "throw" && (k = f, T.method = "throw", T.arg = I.arg);
      }
    };
  }
  function _(M, F) {
    var T = F.method, k = M.iterator[T];
    if (k === e)
      return F.delegate = null, T === "throw" && M.iterator.return && (F.method = "return", F.arg = e, _(M, F), F.method === "throw") || T !== "return" && (F.method = "throw", F.arg = new TypeError("The iterator does not provide a '" + T + "' method")), m;
    var H = d(k, M.iterator, F.arg);
    if (H.type === "throw")
      return F.method = "throw", F.arg = H.arg, F.delegate = null, m;
    var K = H.arg;
    return K ? K.done ? (F[M.resultName] = K.value, F.next = M.nextLoc, F.method !== "return" && (F.method = "next", F.arg = e), F.delegate = null, m) : K : (F.method = "throw", F.arg = new TypeError("iterator result is not an object"), F.delegate = null, m);
  }
  function P(M) {
    var F = {
      tryLoc: M[0]
    };
    1 in M && (F.catchLoc = M[1]), 2 in M && (F.finallyLoc = M[2], F.afterLoc = M[3]), this.tryEntries.push(F);
  }
  function $(M) {
    var F = M.completion || {};
    F.type = "normal", delete F.arg, M.completion = F;
  }
  function N(M) {
    this.tryEntries = [{
      tryLoc: "root"
    }], M.forEach(P, this), this.reset(!0);
  }
  function R(M) {
    if (M || M === "") {
      var F = M[i];
      if (F)
        return F.call(M);
      if (typeof M.next == "function")
        return M;
      if (!isNaN(M.length)) {
        var T = -1, k = function H() {
          for (; ++T < M.length; )
            if (n.call(M, T))
              return H.value = M[T], H.done = !1, H;
          return H.value = e, H.done = !0, H;
        };
        return k.next = k;
      }
    }
    throw new TypeError(st(M) + " is not iterable");
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
  }, B(O.prototype), l(O.prototype, s, function() {
    return this;
  }), t.AsyncIterator = O, t.async = function(M, F, T, k, H) {
    H === void 0 && (H = Promise);
    var K = new O(c(M, F, T, k), H);
    return t.isGeneratorFunction(F) ? K : K.next().then(function(X) {
      return X.done ? X.value : K.next();
    });
  }, B(x), l(x, u, "Generator"), l(x, i, function() {
    return this;
  }), l(x, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(M) {
    var F = Object(M), T = [];
    for (var k in F)
      T.push(k);
    return T.reverse(), function H() {
      for (; T.length; ) {
        var K = T.pop();
        if (K in F)
          return H.value = K, H.done = !1, H;
      }
      return H.done = !0, H;
    };
  }, t.values = R, N.prototype = {
    constructor: N,
    reset: function(F) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach($), !F)
        for (var T in this)
          T.charAt(0) === "t" && n.call(this, T) && !isNaN(+T.slice(1)) && (this[T] = e);
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
      var T = this;
      function k(z, V) {
        return X.type = "throw", X.arg = F, T.next = z, V && (T.method = "next", T.arg = e), !!V;
      }
      for (var H = this.tryEntries.length - 1; H >= 0; --H) {
        var K = this.tryEntries[H], X = K.completion;
        if (K.tryLoc === "root")
          return k("end");
        if (K.tryLoc <= this.prev) {
          var Q = n.call(K, "catchLoc"), I = n.call(K, "finallyLoc");
          if (Q && I) {
            if (this.prev < K.catchLoc)
              return k(K.catchLoc, !0);
            if (this.prev < K.finallyLoc)
              return k(K.finallyLoc);
          } else if (Q) {
            if (this.prev < K.catchLoc)
              return k(K.catchLoc, !0);
          } else {
            if (!I)
              throw new Error("try statement without catch or finally");
            if (this.prev < K.finallyLoc)
              return k(K.finallyLoc);
          }
        }
      }
    },
    abrupt: function(F, T) {
      for (var k = this.tryEntries.length - 1; k >= 0; --k) {
        var H = this.tryEntries[k];
        if (H.tryLoc <= this.prev && n.call(H, "finallyLoc") && this.prev < H.finallyLoc) {
          var K = H;
          break;
        }
      }
      K && (F === "break" || F === "continue") && K.tryLoc <= T && T <= K.finallyLoc && (K = null);
      var X = K ? K.completion : {};
      return X.type = F, X.arg = T, K ? (this.method = "next", this.next = K.finallyLoc, m) : this.complete(X);
    },
    complete: function(F, T) {
      if (F.type === "throw")
        throw F.arg;
      return F.type === "break" || F.type === "continue" ? this.next = F.arg : F.type === "return" ? (this.rval = this.arg = F.arg, this.method = "return", this.next = "end") : F.type === "normal" && T && (this.next = T), m;
    },
    finish: function(F) {
      for (var T = this.tryEntries.length - 1; T >= 0; --T) {
        var k = this.tryEntries[T];
        if (k.finallyLoc === F)
          return this.complete(k.completion, k.afterLoc), $(k), m;
      }
    },
    catch: function(F) {
      for (var T = this.tryEntries.length - 1; T >= 0; --T) {
        var k = this.tryEntries[T];
        if (k.tryLoc === F) {
          var H = k.completion;
          if (H.type === "throw") {
            var K = H.arg;
            $(k);
          }
          return K;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(F, T, k) {
      return this.delegate = {
        iterator: R(F),
        resultName: T,
        nextLoc: k
      }, this.method === "next" && (this.arg = e), m;
    }
  }, t;
}
function Fv(e, t, r, n, a, o, i) {
  try {
    var s = e[o](i), u = s.value;
  } catch (l) {
    r(l);
    return;
  }
  s.done ? t(u) : Promise.resolve(u).then(n, a);
}
function $a(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, a) {
      var o = e.apply(t, r);
      function i(u) {
        Fv(o, n, a, i, s, "next", u);
      }
      function s(u) {
        Fv(o, n, a, i, s, "throw", u);
      }
      i(void 0);
    });
  };
}
var Ei = G({}, rb), hB = Ei.version, pB = Ei.render, bB = Ei.unmountComponentAtNode, ru;
try {
  var yB = Number((hB || "").split(".")[0]);
  yB >= 18 && (ru = Ei.createRoot);
} catch {
}
function Pv(e) {
  var t = Ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && st(t) === "object" && (t.usingClientEntryPoint = e);
}
var As = "__rc_react_root__";
function CB(e, t) {
  Pv(!0);
  var r = t[As] || ru(t);
  Pv(!1), r.render(e), t[As] = r;
}
function EB(e, t) {
  pB(e, t);
}
function wB(e, t) {
  if (ru) {
    CB(e, t);
    return;
  }
  EB(e, t);
}
function DB(e) {
  return Zl.apply(this, arguments);
}
function Zl() {
  return Zl = $a(/* @__PURE__ */ vr().mark(function e(t) {
    return vr().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.resolve().then(function() {
              var a;
              (a = t[As]) === null || a === void 0 || a.unmount(), delete t[As];
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), Zl.apply(this, arguments);
}
function SB(e) {
  bB(e);
}
function xB(e) {
  return Ql.apply(this, arguments);
}
function Ql() {
  return Ql = $a(/* @__PURE__ */ vr().mark(function e(t) {
    return vr().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            if (ru === void 0) {
              n.next = 2;
              break;
            }
            return n.abrupt("return", DB(t));
          case 2:
            SB(t);
          case 3:
          case "end":
            return n.stop();
        }
    }, e);
  })), Ql.apply(this, arguments);
}
const zu = () => ({
  height: 0,
  opacity: 0
}), Rv = (e) => {
  const {
    scrollHeight: t
  } = e;
  return {
    height: t,
    opacity: 1
  };
}, OB = (e) => ({
  height: e ? e.offsetHeight : 0
}), Vu = (e, t) => (t == null ? void 0 : t.deadline) === !0 || t.propertyName === "height", BB = function() {
  return {
    motionName: `${arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant"}-motion-collapse`,
    onAppearStart: zu,
    onEnterStart: zu,
    onAppearActive: Rv,
    onEnterActive: Rv,
    onLeaveStart: OB,
    onLeaveActive: zu,
    onAppearEnd: Vu,
    onEnterEnd: Vu,
    onLeaveEnd: Vu,
    motionDeadline: 500
  };
}, AB = (e, t, r) => r !== void 0 ? r : `${e}-${t}`, $B = BB, rf = function(e) {
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
}, FB = (e) => {
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
}, PB = Qc("Wave", (e) => [FB(e)]);
function RB(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function Hu(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && RB(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function TB(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(e);
  return Hu(t) ? t : Hu(r) ? r : Hu(n) ? n : null;
}
const nf = "ant-wave-target";
function Wu(e) {
  return Number.isNaN(e) ? 0 : e;
}
const NB = (e) => {
  const {
    className: t,
    target: r,
    component: n
  } = e, a = v.useRef(null), [o, i] = v.useState(null), [s, u] = v.useState([]), [l, c] = v.useState(0), [d, g] = v.useState(0), [p, h] = v.useState(0), [f, m] = v.useState(0), [b, E] = v.useState(!1), y = {
    left: l,
    top: d,
    width: p,
    height: f,
    borderRadius: s.map((D) => `${D}px`).join(" ")
  };
  o && (y["--wave-color"] = o);
  function w() {
    const D = getComputedStyle(r);
    i(TB(r));
    const x = D.position === "static", {
      borderLeftWidth: B,
      borderTopWidth: O
    } = D;
    c(x ? r.offsetLeft : Wu(-parseFloat(B))), g(x ? r.offsetTop : Wu(-parseFloat(O))), h(r.offsetWidth), m(r.offsetHeight);
    const {
      borderTopLeftRadius: A,
      borderTopRightRadius: _,
      borderBottomLeftRadius: P,
      borderBottomRightRadius: $
    } = D;
    u([A, _, $, P].map((N) => Wu(parseFloat(N))));
  }
  if (v.useEffect(() => {
    if (r) {
      const D = Gt(() => {
        w(), E(!0);
      });
      let x;
      return typeof ResizeObserver < "u" && (x = new ResizeObserver(w), x.observe(r)), () => {
        Gt.cancel(D), x == null || x.disconnect();
      };
    }
  }, []), !b)
    return null;
  const S = (n === "Checkbox" || n === "Radio") && (r == null ? void 0 : r.classList.contains(nf));
  return /* @__PURE__ */ v.createElement(Eo, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (D, x) => {
      var B;
      if (x.deadline || x.propertyName === "opacity") {
        const O = (B = a.current) === null || B === void 0 ? void 0 : B.parentElement;
        xB(O).then(() => {
          O == null || O.remove();
        });
      }
      return !1;
    }
  }, (D) => {
    let {
      className: x
    } = D;
    return /* @__PURE__ */ v.createElement("div", {
      ref: a,
      className: ie(t, {
        "wave-quick": S
      }, x),
      style: y
    });
  });
}, IB = (e, t) => {
  var r;
  const {
    component: n
  } = t;
  if (n === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked))
    return;
  const a = document.createElement("div");
  a.style.position = "absolute", a.style.left = "0px", a.style.top = "0px", e == null || e.insertBefore(a, e == null ? void 0 : e.firstChild), wB(/* @__PURE__ */ v.createElement(NB, Object.assign({}, t, {
    target: e
  })), a);
}, MB = IB;
function jB(e, t, r) {
  const {
    wave: n
  } = v.useContext(Tt), [, a, o] = kr(), i = Br((l) => {
    const c = e.current;
    if (n != null && n.disabled || !c)
      return;
    const d = c.querySelector(`.${nf}`) || c, {
      showEffect: g
    } = n || {};
    (g || MB)(d, {
      className: t,
      token: a,
      component: r,
      event: l,
      hashId: o
    });
  }), s = v.useRef();
  return (l) => {
    Gt.cancel(s.current), s.current = Gt(() => {
      i(l);
    });
  };
}
const bp = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: a
  } = Rt(Tt), o = Je(null), i = a("wave"), [, s] = PB(i), u = jB(o, ie(i, s), n);
  if (ee.useEffect(() => {
    const c = o.current;
    if (!c || c.nodeType !== 1 || r)
      return;
    const d = (g) => {
      !rf(g.target) || // No need wave
      !c.getAttribute || c.getAttribute("disabled") || c.disabled || c.className.includes("disabled") || c.className.includes("-leave") || u(g);
    };
    return c.addEventListener("click", d, !0), () => {
      c.removeEventListener("click", d, !0);
    };
  }, [r]), !/* @__PURE__ */ ee.isValidElement(t))
    return t ?? null;
  const l = Jn(t) ? Qn(t.ref, o) : o;
  return ra(t, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (bp.displayName = "Wave");
const yp = bp, af = (e) => {
  const t = ee.useContext(Qs);
  return ee.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, _B = (e) => {
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
}, LB = (e) => {
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
}, kB = (e) => {
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
}, Cp = ta("Space", (e) => {
  const t = ur(e, {
    spaceGapSmallSize: e.paddingXS,
    spaceGapMiddleSize: e.padding,
    spaceGapLargeSize: e.paddingLG
  });
  return [LB(t), kB(t), _B(t)];
}, () => ({}), {
  // Space component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/40315
  resetStyle: !1
});
var Ep = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const nu = /* @__PURE__ */ v.createContext(null), wp = (e, t) => {
  const r = v.useContext(nu), n = v.useMemo(() => {
    if (!r)
      return "";
    const {
      compactDirection: a,
      isFirstItem: o,
      isLastItem: i
    } = r, s = a === "vertical" ? "-vertical-" : "-";
    return ie(`${e}-compact${s}item`, {
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
}, Dp = (e) => {
  let {
    children: t
  } = e;
  return /* @__PURE__ */ v.createElement(nu.Provider, {
    value: null
  }, t);
}, zB = (e) => {
  var {
    children: t
  } = e, r = Ep(e, ["children"]);
  return /* @__PURE__ */ v.createElement(nu.Provider, {
    value: r
  }, t);
}, VB = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = v.useContext(Tt), {
    size: n,
    direction: a,
    block: o,
    prefixCls: i,
    className: s,
    rootClassName: u,
    children: l
  } = e, c = Ep(e, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]), d = af((y) => n ?? y), g = t("space-compact", i), [p, h] = Cp(g), f = ie(g, h, {
    [`${g}-rtl`]: r === "rtl",
    [`${g}-block`]: o,
    [`${g}-vertical`]: a === "vertical"
  }, s, u), m = v.useContext(nu), b = fn(l), E = v.useMemo(() => b.map((y, w) => {
    const S = y && y.key || `${g}-item-${w}`;
    return /* @__PURE__ */ v.createElement(zB, {
      key: S,
      compactSize: d,
      compactDirection: a,
      isFirstItem: w === 0 && (!m || (m == null ? void 0 : m.isFirstItem)),
      isLastItem: w === b.length - 1 && (!m || (m == null ? void 0 : m.isLastItem))
    }, y);
  }), [n, b, m]);
  return b.length === 0 ? null : p(/* @__PURE__ */ v.createElement("div", Object.assign({
    className: f
  }, c), E));
}, HB = VB;
var WB = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Sp = /* @__PURE__ */ v.createContext(void 0), KB = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = v.useContext(Tt), {
    prefixCls: n,
    size: a,
    className: o
  } = e, i = WB(e, ["prefixCls", "size", "className"]), s = t("btn-group", n), [, , u] = kr();
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
    const d = wr("Button.Group");
    process.env.NODE_ENV !== "production" && d(!a || ["large", "small", "middle"].includes(a), "usage", "Invalid prop `size`.");
  }
  const c = ie(s, {
    [`${s}-${l}`]: l,
    [`${s}-rtl`]: r === "rtl"
  }, o, u);
  return /* @__PURE__ */ v.createElement(Sp.Provider, {
    value: a
  }, /* @__PURE__ */ v.createElement("div", Object.assign({}, i, {
    className: c
  })));
}, qB = KB, Tv = /^[\u4e00-\u9fa5]{2}$/, Jl = Tv.test.bind(Tv);
function Nv(e) {
  return typeof e == "string";
}
function Gi(e) {
  return e === "text" || e === "link";
}
function UB(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && Nv(e.type) && Jl(e.props.children) ? ra(e, {
    children: e.props.children.split("").join(r)
  }) : Nv(e) ? Jl(e) ? /* @__PURE__ */ ee.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ ee.createElement("span", null, e) : mp(e) ? /* @__PURE__ */ ee.createElement("span", null, e) : e;
}
function GB(e, t) {
  let r = !1;
  const n = [];
  return ee.Children.forEach(e, (a) => {
    const o = typeof a, i = o === "string" || o === "number";
    if (r && i) {
      const s = n.length - 1, u = n[s];
      n[s] = `${u}${a}`;
    } else
      n.push(a);
    r = i;
  }), ee.Children.map(n, (a) => UB(a, t));
}
const XB = /* @__PURE__ */ Rr((e, t) => {
  const {
    className: r,
    style: n,
    children: a,
    prefixCls: o
  } = e, i = ie(`${o}-icon`, r);
  return /* @__PURE__ */ ee.createElement("span", {
    ref: t,
    className: i,
    style: n
  }, a);
}), xp = XB, Iv = /* @__PURE__ */ Rr((e, t) => {
  let {
    prefixCls: r,
    className: n,
    style: a,
    iconClassName: o
  } = e;
  const i = ie(`${r}-loading-icon`, n);
  return /* @__PURE__ */ ee.createElement(xp, {
    prefixCls: r,
    className: i,
    style: a,
    ref: t
  }, /* @__PURE__ */ ee.createElement(fB, {
    className: o
  }));
}), Ku = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), qu = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), YB = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: a,
    style: o
  } = e, i = !!r;
  return n ? /* @__PURE__ */ ee.createElement(Iv, {
    prefixCls: t,
    className: a,
    style: o
  }) : /* @__PURE__ */ ee.createElement(Eo, {
    visible: i,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    motionLeave: i,
    removeOnLeave: !0,
    onAppearStart: Ku,
    onAppearActive: qu,
    onEnterStart: Ku,
    onEnterActive: qu,
    onLeaveStart: qu,
    onLeaveActive: Ku
  }, (s, u) => {
    let {
      className: l,
      style: c
    } = s;
    return /* @__PURE__ */ ee.createElement(Iv, {
      prefixCls: t,
      className: a,
      style: Object.assign(Object.assign({}, o), c),
      ref: u,
      iconClassName: l
    });
  });
}, ZB = YB, Mv = (e, t) => ({
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
}), QB = (e) => {
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
      Mv(`${t}-primary`, a),
      Mv(`${t}-danger`, o)
    ]
  };
}, Op = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: r,
    paddingBlock: n
  } = e;
  return ur(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: n,
    buttonIconOnlyFontSize: r
  });
}, Bp = (e) => {
  var t, r, n, a, o, i;
  const s = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, u = (r = e.contentFontSizeSM) !== null && r !== void 0 ? r : e.fontSize, l = (n = e.contentFontSizeLG) !== null && n !== void 0 ? n : e.fontSizeLG, c = (a = e.contentLineHeight) !== null && a !== void 0 ? a : cs(s), d = (o = e.contentLineHeightSM) !== null && o !== void 0 ? o : cs(u), g = (i = e.contentLineHeightLG) !== null && i !== void 0 ? i : cs(l);
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
    contentLineHeightLG: g,
    paddingBlock: Math.max((e.controlHeight - s * c) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - u * d) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - l * g) / 2 - e.lineWidth, 0)
  };
}, JB = (e) => {
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
      border: `${De(e.lineWidth)} ${e.lineType} transparent`,
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
      "&:not(:disabled)": Object.assign({}, Hl(e)),
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
}, Pn = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), eA = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), tA = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), rA = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), fi = (e, t, r, n, a, o, i, s) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: r || void 0,
    background: t,
    borderColor: n || void 0,
    boxShadow: "none"
  }, Pn(e, Object.assign({
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
}), of = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, rA(e))
}), Ap = (e) => Object.assign({}, of(e)), $s = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), $p = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ap(e)), {
  background: e.defaultBg,
  borderColor: e.defaultBorderColor,
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}), Pn(e.componentCls, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), fi(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: e.colorError,
    borderColor: e.colorError
  }, Pn(e.componentCls, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), fi(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), of(e))
}), nA = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ap(e)), {
  color: e.primaryColor,
  background: e.colorPrimary,
  boxShadow: e.primaryShadow
}), Pn(e.componentCls, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryActive
})), fi(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
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
  }, Pn(e.componentCls, {
    background: e.colorErrorHover
  }, {
    background: e.colorErrorActive
  })), fi(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), of(e))
}), aA = (e) => Object.assign(Object.assign({}, $p(e)), {
  borderStyle: "dashed"
}), oA = (e) => Object.assign(Object.assign(Object.assign({
  color: e.colorLink
}, Pn(e.componentCls, {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), $s(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, Pn(e.componentCls, {
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), $s(e))
}), iA = (e) => Object.assign(Object.assign(Object.assign({}, Pn(e.componentCls, {
  color: e.colorText,
  background: e.textHoverBg
}, {
  color: e.colorText,
  background: e.colorBgTextActive
})), $s(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, $s(e)), Pn(e.componentCls, {
    color: e.colorErrorHover,
    background: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    background: e.colorErrorBg
  }))
}), sA = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: $p(e),
    [`${t}-primary`]: nA(e),
    [`${t}-dashed`]: aA(e),
    [`${t}-link`]: oA(e),
    [`${t}-text`]: iA(e),
    [`${t}-ghost`]: fi(e.componentCls, e.ghostBg, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
  };
}, sf = function(e) {
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
        padding: `${De(l)} ${De(s)}`,
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
      [`${r}${r}-circle${t}`]: eA(e)
    },
    {
      [`${r}${r}-round${t}`]: tA(e)
    }
  ];
}, uA = (e) => {
  const t = ur(e, {
    fontSize: e.contentFontSize,
    lineHeight: e.contentLineHeight
  });
  return sf(t, e.componentCls);
}, lA = (e) => {
  const t = ur(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    lineHeight: e.contentLineHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: e.paddingBlockSM,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return sf(t, `${e.componentCls}-sm`);
}, cA = (e) => {
  const t = ur(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    lineHeight: e.contentLineHeightLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: e.paddingBlockLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return sf(t, `${e.componentCls}-lg`);
}, fA = (e) => {
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
}, dA = ta("Button", (e) => {
  const t = Op(e);
  return [
    // Shared
    JB(t),
    // Size
    uA(t),
    lA(t),
    cA(t),
    // Block
    fA(t),
    // Group (type, ghost, danger, loading)
    sA(t),
    // Button Group
    QB(t)
  ];
}, Bp, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function vA(e, t, r) {
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
function gA(e, t, r) {
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
function Fp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, vA(e, n, t)), gA(r, n, t))
  };
}
function mA(e, t) {
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
function hA(e, t) {
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
function pA(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, mA(e, t)), hA(e.componentCls, t))
  };
}
const bA = (e) => {
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
            height: `calc(100% + ${De(e.lineWidth)} * 2)`,
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
              width: `calc(100% + ${De(e.lineWidth)} * 2)`,
              height: e.lineWidth,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, yA = fO(["Button", "compact"], (e) => {
  const t = Op(e);
  return [
    // Space Compact
    Fp(t),
    pA(t),
    bA(t)
  ];
}, Bp);
var CA = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function EA(e) {
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
const wA = (e, t) => {
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
    className: g,
    rootClassName: p,
    children: h,
    icon: f,
    ghost: m = !1,
    block: b = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: E = "button",
    classNames: y,
    style: w = {}
  } = e, S = CA(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]), {
    getPrefixCls: D,
    autoInsertSpaceInButton: x,
    direction: B,
    button: O
  } = Rt(Tt), A = D("btn", o), [_, P, $] = dA(A), N = Rt(Zs), R = d ?? N, M = Rt(Sp), F = sr(() => EA(a), [a]), [T, k] = ir(F.loading), [H, K] = ir(!1), Q = Qn(t, /* @__PURE__ */ eb()), I = J0.count(h) === 1 && !f && !Gi(i);
  zt(() => {
    let he = null;
    F.delay > 0 ? he = setTimeout(() => {
      he = null, k(!0);
    }, F.delay) : k(F.loading);
    function me() {
      he && (clearTimeout(he), he = null);
    }
    return me;
  }, [F]), zt(() => {
    if (!Q || !Q.current || x === !1)
      return;
    const he = Q.current.textContent;
    I && Jl(he) ? H || K(!0) : H && K(!1);
  }, [Q]);
  const z = (he) => {
    const {
      onClick: me
    } = e;
    if (T || R) {
      he.preventDefault();
      return;
    }
    me == null || me(he);
  };
  if (process.env.NODE_ENV !== "production") {
    const he = wr("Button");
    process.env.NODE_ENV !== "production" && he(!(typeof f == "string" && f.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${f}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && he(!(m && Gi(i)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const V = x !== !1, {
    compactSize: q,
    compactItemClassnames: te
  } = wp(A, B), re = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, le = af((he) => {
    var me, be;
    return (be = (me = l ?? q) !== null && me !== void 0 ? me : M) !== null && be !== void 0 ? be : he;
  }), oe = le && re[le] || "", ge = T ? "loading" : f, ce = en(S, ["navigate"]), Y = ie(A, P, $, {
    [`${A}-${u}`]: u !== "default" && u,
    [`${A}-${i}`]: i,
    [`${A}-${oe}`]: oe,
    [`${A}-icon-only`]: !h && h !== 0 && !!ge,
    [`${A}-background-ghost`]: m && !Gi(i),
    [`${A}-loading`]: T,
    [`${A}-two-chinese-chars`]: H && V && !T,
    [`${A}-block`]: b,
    [`${A}-dangerous`]: !!s,
    [`${A}-rtl`]: B === "rtl"
  }, te, g, p, O == null ? void 0 : O.className), pe = Object.assign(Object.assign({}, O == null ? void 0 : O.style), w), Se = ie(y == null ? void 0 : y.icon, (r = O == null ? void 0 : O.classNames) === null || r === void 0 ? void 0 : r.icon), ye = Object.assign(Object.assign({}, (c == null ? void 0 : c.icon) || {}), ((n = O == null ? void 0 : O.styles) === null || n === void 0 ? void 0 : n.icon) || {}), we = f && !T ? /* @__PURE__ */ ee.createElement(xp, {
    prefixCls: A,
    className: Se,
    style: ye
  }, f) : /* @__PURE__ */ ee.createElement(ZB, {
    existIcon: !!f,
    prefixCls: A,
    loading: !!T
  }), de = h || h === 0 ? GB(h, I && V) : null;
  if (ce.href !== void 0)
    return _(/* @__PURE__ */ ee.createElement("a", Object.assign({}, ce, {
      className: ie(Y, {
        [`${A}-disabled`]: R
      }),
      href: R ? void 0 : ce.href,
      style: pe,
      onClick: z,
      ref: Q,
      tabIndex: R ? -1 : 0
    }), we, de));
  let Ee = /* @__PURE__ */ ee.createElement("button", Object.assign({}, S, {
    type: E,
    className: Y,
    style: pe,
    onClick: z,
    disabled: R,
    ref: Q
  }), we, de, !!te && /* @__PURE__ */ ee.createElement(yA, {
    key: "compact",
    prefixCls: A
  }));
  return Gi(i) || (Ee = /* @__PURE__ */ ee.createElement(yp, {
    component: "Button",
    disabled: !!T
  }, Ee)), _(Ee);
}, au = /* @__PURE__ */ Rr(wA);
process.env.NODE_ENV !== "production" && (au.displayName = "Button");
au.Group = qB;
au.__ANT_BUTTON = !0;
const Rn = au;
var Pp = /* @__PURE__ */ v.createContext(null), jv = [];
function DA(e, t) {
  var r = v.useState(function() {
    if (!dr())
      return null;
    var h = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && h.setAttribute("data-debug", t), h;
  }), n = ae(r, 1), a = n[0], o = v.useRef(!1), i = v.useContext(Pp), s = v.useState(jv), u = ae(s, 2), l = u[0], c = u[1], d = i || (o.current ? void 0 : function(h) {
    c(function(f) {
      var m = [h].concat(Ne(f));
      return m;
    });
  });
  function g() {
    a.parentElement || document.body.appendChild(a), o.current = !0;
  }
  function p() {
    var h;
    (h = a.parentElement) === null || h === void 0 || h.removeChild(a), o.current = !1;
  }
  return jt(function() {
    return e ? i ? i(g) : g() : p(), p;
  }, [e]), jt(function() {
    l.length && (l.forEach(function(h) {
      return h();
    }), c(jv));
  }, [l]), [a, d];
}
function SA(e) {
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
      Bn(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(c, `
`).concat(d, `
}`), t);
    } catch (h) {
      console.error(h), a = u, o = l;
    }
  }
  document.body.appendChild(r);
  var g = e && a && !isNaN(a) ? a : r.offsetWidth - r.clientWidth, p = e && o && !isNaN(o) ? o : r.offsetHeight - r.clientHeight;
  return document.body.removeChild(r), si(t), {
    width: g,
    height: p
  };
}
function xA(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : SA(e);
}
function OA() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var BA = "rc-util-locker-".concat(Date.now()), _v = 0;
function AA(e) {
  var t = !!e, r = v.useState(function() {
    return _v += 1, "".concat(BA, "_").concat(_v);
  }), n = ae(r, 1), a = n[0];
  jt(function() {
    if (t) {
      var o = xA(document.body).width, i = OA();
      Bn(`
html body {
  overflow-y: hidden;
  `.concat(i ? "width: calc(100% - ".concat(o, "px);") : "", `
}`), a);
    } else
      si(a);
    return function() {
      si(a);
    };
  }, [t, a]);
}
var Lv = !1;
function $A(e) {
  return typeof e == "boolean" && (Lv = e), Lv;
}
var kv = function(t) {
  return t === !1 ? !1 : !dr() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, uf = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.open, n = e.autoLock, a = e.getContainer, o = e.debug, i = e.autoDestroy, s = i === void 0 ? !0 : i, u = e.children, l = v.useState(r), c = ae(l, 2), d = c[0], g = c[1], p = d || r;
  process.env.NODE_ENV !== "production" && pt(dr() || !r, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), v.useEffect(function() {
    (s || r) && g(r);
  }, [r, s]);
  var h = v.useState(function() {
    return kv(a);
  }), f = ae(h, 2), m = f[0], b = f[1];
  v.useEffect(function() {
    var P = kv(a);
    b(P ?? null);
  });
  var E = DA(p && !m, o), y = ae(E, 2), w = y[0], S = y[1], D = m ?? w;
  AA(n && r && dr() && (D === w || D === document.body));
  var x = null;
  if (u && Jn(u) && t) {
    var B = u;
    x = B.ref;
  }
  var O = pi(x, t);
  if (!p || !dr() || m === void 0)
    return null;
  var A = D === !1 || $A(), _ = u;
  return t && (_ = /* @__PURE__ */ v.cloneElement(u, {
    ref: O
  })), /* @__PURE__ */ v.createElement(Pp.Provider, {
    value: S
  }, A ? _ : /* @__PURE__ */ nb(_, D));
});
process.env.NODE_ENV !== "production" && (uf.displayName = "Portal");
function FA() {
  var e = G({}, v);
  return e.useId;
}
var zv = 0, Vv = FA();
const PA = Vv ? (
  // Use React `useId`
  function(t) {
    var r = Vv();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : r);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var r = v.useState("ssr-id"), n = ae(r, 2), a = n[0], o = n[1];
    return v.useEffect(function() {
      var i = zv;
      zv += 1, o("rc_unique_".concat(i));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : a);
  }
);
var Rp = function(t) {
  if (dr() && window.document.documentElement) {
    var r = Array.isArray(t) ? t : [t], n = window.document.documentElement;
    return r.some(function(a) {
      return a in n.style;
    });
  }
  return !1;
}, RA = function(t, r) {
  if (!Rp(t))
    return !1;
  var n = document.createElement("div"), a = n.style[t];
  return n.style[t] = r, n.style[t] !== a;
};
function Hv(e, t) {
  return !Array.isArray(e) && t !== void 0 ? RA(e, t) : Rp(e);
}
var ma = "RC_FORM_INTERNAL_HOOKS", yt = function() {
  pt(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, po = /* @__PURE__ */ v.createContext({
  getFieldValue: yt,
  getFieldsValue: yt,
  getFieldError: yt,
  getFieldWarning: yt,
  getFieldsError: yt,
  isFieldsTouched: yt,
  isFieldTouched: yt,
  isFieldValidating: yt,
  isFieldsValidating: yt,
  resetFields: yt,
  setFields: yt,
  setFieldValue: yt,
  setFieldsValue: yt,
  validateFields: yt,
  submit: yt,
  getInternalHooks: function() {
    return yt(), {
      dispatch: yt,
      initEntityValue: yt,
      registerField: yt,
      useSubscribe: yt,
      setInitialValues: yt,
      destroyForm: yt,
      setCallbacks: yt,
      registerWatch: yt,
      getFields: yt,
      setValidateMessages: yt,
      setPreserve: yt,
      getInitialValue: yt
    };
  }
}), Fs = /* @__PURE__ */ v.createContext(null);
function ec(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function TA(e) {
  return e && !!e._init;
}
function ha() {
  return ha = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ha.apply(this, arguments);
}
function NA(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, di(e, t);
}
function tc(e) {
  return tc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, tc(e);
}
function di(e, t) {
  return di = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, di(e, t);
}
function IA() {
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
function fs(e, t, r) {
  return IA() ? fs = Reflect.construct.bind() : fs = function(a, o, i) {
    var s = [null];
    s.push.apply(s, o);
    var u = Function.bind.apply(a, s), l = new u();
    return i && di(l, i.prototype), l;
  }, fs.apply(null, arguments);
}
function MA(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function rc(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return rc = function(n) {
    if (n === null || !MA(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(n))
        return t.get(n);
      t.set(n, a);
    }
    function a() {
      return fs(n, arguments, tc(this).constructor);
    }
    return a.prototype = Object.create(n.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), di(a, n);
  }, rc(e);
}
var jA = /%[sdj%]/g, Tp = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Tp = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, r);
});
function nc(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(r) {
    var n = r.field;
    t[n] = t[n] || [], t[n].push(r);
  }), t;
}
function $r(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var a = 0, o = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var i = e.replace(jA, function(s) {
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
function _A(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Xt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || _A(t) && typeof e == "string" && !e);
}
function LA(e, t, r) {
  var n = [], a = 0, o = e.length;
  function i(s) {
    n.push.apply(n, s || []), a++, a === o && r(n);
  }
  e.forEach(function(s) {
    t(s, i);
  });
}
function Wv(e, t, r) {
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
function kA(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, e[r] || []);
  }), t;
}
var Kv = /* @__PURE__ */ function(e) {
  NA(t, e);
  function t(r, n) {
    var a;
    return a = e.call(this, "Async Validation Error") || this, a.errors = r, a.fields = n, a;
  }
  return t;
}(/* @__PURE__ */ rc(Error));
function zA(e, t, r, n, a) {
  if (t.first) {
    var o = new Promise(function(g, p) {
      var h = function(b) {
        return n(b), b.length ? p(new Kv(b, nc(b))) : g(a);
      }, f = kA(e);
      Wv(f, r, h);
    });
    return o.catch(function(g) {
      return g;
    }), o;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), u = s.length, l = 0, c = [], d = new Promise(function(g, p) {
    var h = function(m) {
      if (c.push.apply(c, m), l++, l === u)
        return n(c), c.length ? p(new Kv(c, nc(c))) : g(a);
    };
    s.length || (n(c), g(a)), s.forEach(function(f) {
      var m = e[f];
      i.indexOf(f) !== -1 ? Wv(m, r, h) : LA(m, r, h);
    });
  });
  return d.catch(function(g) {
    return g;
  }), d;
}
function VA(e) {
  return !!(e && e.message !== void 0);
}
function HA(e, t) {
  for (var r = e, n = 0; n < t.length; n++) {
    if (r == null)
      return r;
    r = r[t[n]];
  }
  return r;
}
function qv(e, t) {
  return function(r) {
    var n;
    return e.fullFields ? n = HA(t, e.fullFields) : n = t[r.field || e.fullField], VA(r) ? (r.field = r.field || e.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || e.fullField
    };
  };
}
function Uv(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = t[r];
        typeof n == "object" && typeof e[r] == "object" ? e[r] = ha({}, e[r], n) : e[r] = n;
      }
  }
  return e;
}
var Np = function(t, r, n, a, o, i) {
  t.required && (!n.hasOwnProperty(t.field) || Xt(r, i || t.type)) && a.push($r(o.messages.required, t.fullField));
}, WA = function(t, r, n, a, o) {
  (/^\s+$/.test(r) || r === "") && a.push($r(o.messages.whitespace, t.fullField));
}, Xi, KA = function() {
  if (Xi)
    return Xi;
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
  var l = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", d = u.v4().source, g = u.v6().source, p = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", h = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", f = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", m = "(?::\\d{2,5})?", b = '(?:[/?#][^\\s"]*)?', E = "(?:" + l + "|www\\.)" + c + "(?:localhost|" + d + "|" + g + "|" + p + h + f + ")" + m + b;
  return Xi = new RegExp("(?:^" + E + "$)", "i"), Xi;
}, Gv = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, ko = {
  integer: function(t) {
    return ko.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return ko.number(t) && !ko.integer(t);
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
    return typeof t == "object" && !ko.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Gv.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(KA());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Gv.hex);
  }
}, qA = function(t, r, n, a, o) {
  if (t.required && r === void 0) {
    Np(t, r, n, a, o);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? ko[s](r) || a.push($r(o.messages.types[s], t.fullField, t.type)) : s && typeof r !== t.type && a.push($r(o.messages.types[s], t.fullField, t.type));
}, UA = function(t, r, n, a, o) {
  var i = typeof t.len == "number", s = typeof t.min == "number", u = typeof t.max == "number", l = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = r, d = null, g = typeof r == "number", p = typeof r == "string", h = Array.isArray(r);
  if (g ? d = "number" : p ? d = "string" : h && (d = "array"), !d)
    return !1;
  h && (c = r.length), p && (c = r.replace(l, "_").length), i ? c !== t.len && a.push($r(o.messages[d].len, t.fullField, t.len)) : s && !u && c < t.min ? a.push($r(o.messages[d].min, t.fullField, t.min)) : u && !s && c > t.max ? a.push($r(o.messages[d].max, t.fullField, t.max)) : s && u && (c < t.min || c > t.max) && a.push($r(o.messages[d].range, t.fullField, t.min, t.max));
}, La = "enum", GA = function(t, r, n, a, o) {
  t[La] = Array.isArray(t[La]) ? t[La] : [], t[La].indexOf(r) === -1 && a.push($r(o.messages[La], t.fullField, t[La].join(", ")));
}, XA = function(t, r, n, a, o) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || a.push($r(o.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(r) || a.push($r(o.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, nt = {
  required: Np,
  whitespace: WA,
  type: qA,
  range: UA,
  enum: GA,
  pattern: XA
}, YA = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Xt(r, "string") && !t.required)
      return n();
    nt.required(t, r, a, i, o, "string"), Xt(r, "string") || (nt.type(t, r, a, i, o), nt.range(t, r, a, i, o), nt.pattern(t, r, a, i, o), t.whitespace === !0 && nt.whitespace(t, r, a, i, o));
  }
  n(i);
}, ZA = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Xt(r) && !t.required)
      return n();
    nt.required(t, r, a, i, o), r !== void 0 && nt.type(t, r, a, i, o);
  }
  n(i);
}, QA = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (r === "" && (r = void 0), Xt(r) && !t.required)
      return n();
    nt.required(t, r, a, i, o), r !== void 0 && (nt.type(t, r, a, i, o), nt.range(t, r, a, i, o));
  }
  n(i);
}, JA = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Xt(r) && !t.required)
      return n();
    nt.required(t, r, a, i, o), r !== void 0 && nt.type(t, r, a, i, o);
  }
  n(i);
}, e$ = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Xt(r) && !t.required)
      return n();
    nt.required(t, r, a, i, o), Xt(r) || nt.type(t, r, a, i, o);
  }
  n(i);
}, t$ = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Xt(r) && !t.required)
      return n();
    nt.required(t, r, a, i, o), r !== void 0 && (nt.type(t, r, a, i, o), nt.range(t, r, a, i, o));
  }
  n(i);
}, r$ = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Xt(r) && !t.required)
      return n();
    nt.required(t, r, a, i, o), r !== void 0 && (nt.type(t, r, a, i, o), nt.range(t, r, a, i, o));
  }
  n(i);
}, n$ = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (r == null && !t.required)
      return n();
    nt.required(t, r, a, i, o, "array"), r != null && (nt.type(t, r, a, i, o), nt.range(t, r, a, i, o));
  }
  n(i);
}, a$ = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Xt(r) && !t.required)
      return n();
    nt.required(t, r, a, i, o), r !== void 0 && nt.type(t, r, a, i, o);
  }
  n(i);
}, o$ = "enum", i$ = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Xt(r) && !t.required)
      return n();
    nt.required(t, r, a, i, o), r !== void 0 && nt[o$](t, r, a, i, o);
  }
  n(i);
}, s$ = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Xt(r, "string") && !t.required)
      return n();
    nt.required(t, r, a, i, o), Xt(r, "string") || nt.pattern(t, r, a, i, o);
  }
  n(i);
}, u$ = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Xt(r, "date") && !t.required)
      return n();
    if (nt.required(t, r, a, i, o), !Xt(r, "date")) {
      var u;
      r instanceof Date ? u = r : u = new Date(r), nt.type(t, u, a, i, o), u && nt.range(t, u.getTime(), a, i, o);
    }
  }
  n(i);
}, l$ = function(t, r, n, a, o) {
  var i = [], s = Array.isArray(r) ? "array" : typeof r;
  nt.required(t, r, a, i, o, s), n(i);
}, Uu = function(t, r, n, a, o) {
  var i = t.type, s = [], u = t.required || !t.required && a.hasOwnProperty(t.field);
  if (u) {
    if (Xt(r, i) && !t.required)
      return n();
    nt.required(t, r, a, s, o, i), Xt(r, i) || nt.type(t, r, a, s, o);
  }
  n(s);
}, c$ = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Xt(r) && !t.required)
      return n();
    nt.required(t, r, a, i, o);
  }
  n(i);
}, Xo = {
  string: YA,
  method: ZA,
  number: QA,
  boolean: JA,
  regexp: e$,
  integer: t$,
  float: r$,
  array: n$,
  object: a$,
  enum: i$,
  pattern: s$,
  date: u$,
  url: Uu,
  hex: Uu,
  email: Uu,
  required: l$,
  any: c$
};
function ac() {
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
var oc = ac(), wi = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = oc, this.define(r);
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
    return n && (this._messages = Uv(ac(), n)), this._messages;
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
      m.length ? (b = nc(m), l(m, b)) : l(null, s);
    }
    if (u.messages) {
      var d = this.messages();
      d === oc && (d = ac()), Uv(d, u.messages), u.messages = d;
    } else
      u.messages = this.messages();
    var g = {}, p = u.keys || Object.keys(this.rules);
    p.forEach(function(f) {
      var m = i.rules[f], b = s[f];
      m.forEach(function(E) {
        var y = E;
        typeof y.transform == "function" && (s === n && (s = ha({}, s)), b = s[f] = y.transform(b)), typeof y == "function" ? y = {
          validator: y
        } : y = ha({}, y), y.validator = i.getValidationMethod(y), y.validator && (y.field = f, y.fullField = y.fullField || f, y.type = i.getType(y), g[f] = g[f] || [], g[f].push({
          rule: y,
          value: b,
          source: s,
          field: f
        }));
      });
    });
    var h = {};
    return zA(g, u, function(f, m) {
      var b = f.rule, E = (b.type === "object" || b.type === "array") && (typeof b.fields == "object" || typeof b.defaultField == "object");
      E = E && (b.required || !b.required && f.value), b.field = f.field;
      function y(D, x) {
        return ha({}, x, {
          fullField: b.fullField + "." + D,
          fullFields: b.fullFields ? [].concat(b.fullFields, [D]) : [D]
        });
      }
      function w(D) {
        D === void 0 && (D = []);
        var x = Array.isArray(D) ? D : [D];
        !u.suppressWarning && x.length && e.warning("async-validator:", x), x.length && b.message !== void 0 && (x = [].concat(b.message));
        var B = x.map(qv(b, s));
        if (u.first && B.length)
          return h[b.field] = 1, m(B);
        if (!E)
          m(B);
        else {
          if (b.required && !f.value)
            return b.message !== void 0 ? B = [].concat(b.message).map(qv(b, s)) : u.error && (B = [u.error(b, $r(u.messages.required, b.field))]), m(B);
          var O = {};
          b.defaultField && Object.keys(f.value).map(function(P) {
            O[P] = b.defaultField;
          }), O = ha({}, O, f.rule.fields);
          var A = {};
          Object.keys(O).forEach(function(P) {
            var $ = O[P], N = Array.isArray($) ? $ : [$];
            A[P] = N.map(y.bind(null, P));
          });
          var _ = new e(A);
          _.messages(u.messages), f.rule.options && (f.rule.options.messages = u.messages, f.rule.options.error = u.error), _.validate(f.value, f.rule.options || u, function(P) {
            var $ = [];
            B && B.length && $.push.apply($, B), P && P.length && $.push.apply($, P), m($.length ? $ : null);
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
    if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !Xo.hasOwnProperty(n.type))
      throw new Error($r("Unknown rule type %s", n.type));
    return n.type || "string";
  }, t.getValidationMethod = function(n) {
    if (typeof n.validator == "function")
      return n.validator;
    var a = Object.keys(n), o = a.indexOf("message");
    return o !== -1 && a.splice(o, 1), a.length === 1 && a[0] === "required" ? Xo.required : Xo[this.getType(n)] || void 0;
  }, e;
}();
wi.register = function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Xo[t] = r;
};
wi.warning = Tp;
wi.messages = oc;
wi.validators = Xo;
var xr = "'${name}' is not a valid ${type}", Ip = {
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
}, Xv = wi;
function f$(e, t) {
  return e.replace(/\$\{\w+\}/g, function(r) {
    var n = r.slice(2, -1);
    return t[n];
  });
}
var Yv = "CODE_LOGIC_ERROR";
function ic(e, t, r, n, a) {
  return sc.apply(this, arguments);
}
function sc() {
  return sc = $a(/* @__PURE__ */ vr().mark(function e(t, r, n, a, o) {
    var i, s, u, l, c, d, g, p, h;
    return vr().wrap(function(m) {
      for (; ; )
        switch (m.prev = m.next) {
          case 0:
            return i = G({}, n), delete i.ruleIndex, Xv.warning = function() {
            }, i.validator && (s = i.validator, i.validator = function() {
              try {
                return s.apply(void 0, arguments);
              } catch (b) {
                return console.error(b), Promise.reject(Yv);
              }
            }), u = null, i && i.type === "array" && i.defaultField && (u = i.defaultField, delete i.defaultField), l = new Xv(W({}, t, [i])), c = Ja(Ip, a.validateMessages), l.messages(c), d = [], m.prev = 10, m.next = 13, Promise.resolve(l.validate(W({}, t, r), G({}, a)));
          case 13:
            m.next = 18;
            break;
          case 15:
            m.prev = 15, m.t0 = m.catch(10), m.t0.errors && (d = m.t0.errors.map(function(b, E) {
              var y = b.message, w = y === Yv ? c.default : y;
              return /* @__PURE__ */ v.isValidElement(w) ? (
                // Wrap ReactNode with `key`
                /* @__PURE__ */ v.cloneElement(w, {
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
              return ic("".concat(t, ".").concat(E), b, u, a, o);
            }));
          case 21:
            return g = m.sent, m.abrupt("return", g.reduce(function(b, E) {
              return [].concat(Ne(b), Ne(E));
            }, []));
          case 23:
            return p = G(G({}, n), {}, {
              name: t,
              enum: (n.enum || []).join(", ")
            }, o), h = d.map(function(b) {
              return typeof b == "string" ? f$(b, p) : b;
            }), m.abrupt("return", h);
          case 26:
          case "end":
            return m.stop();
        }
    }, e, null, [[10, 15]]);
  })), sc.apply(this, arguments);
}
function d$(e, t, r, n, a, o) {
  var i = e.join("."), s = r.map(function(c, d) {
    var g = c.validator, p = G(G({}, c), {}, {
      ruleIndex: d
    });
    return g && (p.validator = function(h, f, m) {
      var b = !1, E = function() {
        for (var S = arguments.length, D = new Array(S), x = 0; x < S; x++)
          D[x] = arguments[x];
        Promise.resolve().then(function() {
          pt(!b, "Your validator function has already return a promise. `callback` will be ignored."), b || m.apply(void 0, D);
        });
      }, y = g(h, f, E);
      b = y && typeof y.then == "function" && typeof y.catch == "function", pt(b, "`callback` is deprecated. Please return a promise instead."), b && y.then(function() {
        m();
      }).catch(function(w) {
        m(w || " ");
      });
    }), p;
  }).sort(function(c, d) {
    var g = c.warningOnly, p = c.ruleIndex, h = d.warningOnly, f = d.ruleIndex;
    return !!g == !!h ? p - f : g ? 1 : -1;
  }), u;
  if (a === !0)
    u = new Promise(/* @__PURE__ */ function() {
      var c = $a(/* @__PURE__ */ vr().mark(function d(g, p) {
        var h, f, m;
        return vr().wrap(function(E) {
          for (; ; )
            switch (E.prev = E.next) {
              case 0:
                h = 0;
              case 1:
                if (!(h < s.length)) {
                  E.next = 12;
                  break;
                }
                return f = s[h], E.next = 5, ic(i, t, f, n, o);
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
                g([]);
              case 13:
              case "end":
                return E.stop();
            }
        }, d);
      }));
      return function(d, g) {
        return c.apply(this, arguments);
      };
    }());
  else {
    var l = s.map(function(c) {
      return ic(i, t, c, n, o).then(function(d) {
        return {
          errors: d,
          rule: c
        };
      });
    });
    u = (a ? g$(l) : v$(l)).then(function(c) {
      return Promise.reject(c);
    });
  }
  return u.catch(function(c) {
    return c;
  }), u;
}
function v$(e) {
  return uc.apply(this, arguments);
}
function uc() {
  return uc = $a(/* @__PURE__ */ vr().mark(function e(t) {
    return vr().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.all(t).then(function(a) {
              var o, i = (o = []).concat.apply(o, Ne(a));
              return i;
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), uc.apply(this, arguments);
}
function g$(e) {
  return lc.apply(this, arguments);
}
function lc() {
  return lc = $a(/* @__PURE__ */ vr().mark(function e(t) {
    var r;
    return vr().wrap(function(a) {
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
  })), lc.apply(this, arguments);
}
function Lt(e) {
  return ec(e);
}
function Zv(e, t) {
  var r = {};
  return t.forEach(function(n) {
    var a = cn(e, n);
    r = Ur(r, n, a);
  }), r;
}
function ao(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(n) {
    return Mp(t, n, r);
  });
}
function Mp(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !r && e.length !== t.length ? !1 : t.every(function(n, a) {
    return e[a] === n;
  });
}
function m$(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || st(e) !== "object" || st(t) !== "object")
    return !1;
  var r = Object.keys(e), n = Object.keys(t), a = new Set([].concat(r, n));
  return Ne(a).every(function(o) {
    var i = e[o], s = t[o];
    return typeof i == "function" && typeof s == "function" ? !0 : i === s;
  });
}
function h$(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && st(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function Qv(e, t, r) {
  var n = e.length;
  if (t < 0 || t >= n || r < 0 || r >= n)
    return e;
  var a = e[t], o = t - r;
  return o > 0 ? [].concat(Ne(e.slice(0, r)), [a], Ne(e.slice(r, t)), Ne(e.slice(t + 1, n))) : o < 0 ? [].concat(Ne(e.slice(0, t)), Ne(e.slice(t + 1, r + 1)), [a], Ne(e.slice(r + 1, n))) : e;
}
var p$ = ["name"], Nr = [];
function Jv(e, t, r, n, a, o) {
  return typeof e == "function" ? e(t, r, "source" in o ? {
    source: o.source
  } : {}) : n !== a;
}
var lf = /* @__PURE__ */ function(e) {
  Ba(r, e);
  var t = bi(r);
  function r(n) {
    var a;
    if (Cr(this, r), a = t.call(this, n), W(ut(a), "state", {
      resetCount: 0
    }), W(ut(a), "cancelRegisterFunc", null), W(ut(a), "mounted", !1), W(ut(a), "touched", !1), W(ut(a), "dirty", !1), W(ut(a), "validatePromise", void 0), W(ut(a), "prevValidating", void 0), W(ut(a), "errors", Nr), W(ut(a), "warnings", Nr), W(ut(a), "cancelRegister", function() {
      var u = a.props, l = u.preserve, c = u.isListField, d = u.name;
      a.cancelRegisterFunc && a.cancelRegisterFunc(c, l, Lt(d)), a.cancelRegisterFunc = null;
    }), W(ut(a), "getNamePath", function() {
      var u = a.props, l = u.name, c = u.fieldContext, d = c.prefixName, g = d === void 0 ? [] : d;
      return l !== void 0 ? [].concat(Ne(g), Ne(l)) : [];
    }), W(ut(a), "getRules", function() {
      var u = a.props, l = u.rules, c = l === void 0 ? [] : l, d = u.fieldContext;
      return c.map(function(g) {
        return typeof g == "function" ? g(d) : g;
      });
    }), W(ut(a), "refresh", function() {
      a.mounted && a.setState(function(u) {
        var l = u.resetCount;
        return {
          resetCount: l + 1
        };
      });
    }), W(ut(a), "metaCache", null), W(ut(a), "triggerMetaEvent", function(u) {
      var l = a.props.onMetaChange;
      if (l) {
        var c = G(G({}, a.getMeta()), {}, {
          destroy: u
        });
        co(a.metaCache, c) || l(c), a.metaCache = c;
      } else
        a.metaCache = null;
    }), W(ut(a), "onStoreChange", function(u, l, c) {
      var d = a.props, g = d.shouldUpdate, p = d.dependencies, h = p === void 0 ? [] : p, f = d.onReset, m = c.store, b = a.getNamePath(), E = a.getValue(u), y = a.getValue(m), w = l && ao(l, b);
      switch (c.type === "valueUpdate" && c.source === "external" && E !== y && (a.touched = !0, a.dirty = !0, a.validatePromise = null, a.errors = Nr, a.warnings = Nr, a.triggerMetaEvent()), c.type) {
        case "reset":
          if (!l || w) {
            a.touched = !1, a.dirty = !1, a.validatePromise = void 0, a.errors = Nr, a.warnings = Nr, a.triggerMetaEvent(), f == null || f(), a.refresh();
            return;
          }
          break;
        case "remove": {
          if (g) {
            a.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var S = c.data;
          if (w) {
            "touched" in S && (a.touched = S.touched), "validating" in S && !("originRCField" in S) && (a.validatePromise = S.validating ? Promise.resolve([]) : null), "errors" in S && (a.errors = S.errors || Nr), "warnings" in S && (a.warnings = S.warnings || Nr), a.dirty = !0, a.triggerMetaEvent(), a.reRender();
            return;
          } else if ("value" in S && ao(l, b, !0)) {
            a.reRender();
            return;
          }
          if (g && !b.length && Jv(g, u, m, E, y, c)) {
            a.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var D = h.map(Lt);
          if (D.some(function(x) {
            return ao(c.relatedFields, x);
          })) {
            a.reRender();
            return;
          }
          break;
        }
        default:
          if (w || (!h.length || b.length || g) && Jv(g, u, m, E, y, c)) {
            a.reRender();
            return;
          }
          break;
      }
      g === !0 && a.reRender();
    }), W(ut(a), "validateRules", function(u) {
      var l = a.getNamePath(), c = a.getValue(), d = u || {}, g = d.triggerName, p = d.validateOnly, h = p === void 0 ? !1 : p, f = Promise.resolve().then(/* @__PURE__ */ $a(/* @__PURE__ */ vr().mark(function m() {
        var b, E, y, w, S, D, x;
        return vr().wrap(function(O) {
          for (; ; )
            switch (O.prev = O.next) {
              case 0:
                if (a.mounted) {
                  O.next = 2;
                  break;
                }
                return O.abrupt("return", []);
              case 2:
                if (b = a.props, E = b.validateFirst, y = E === void 0 ? !1 : E, w = b.messageVariables, S = b.validateDebounce, D = a.getRules(), g && (D = D.filter(function(A) {
                  return A;
                }).filter(function(A) {
                  var _ = A.validateTrigger;
                  if (!_)
                    return !0;
                  var P = ec(_);
                  return P.includes(g);
                })), !(S && g)) {
                  O.next = 10;
                  break;
                }
                return O.next = 8, new Promise(function(A) {
                  setTimeout(A, S);
                });
              case 8:
                if (a.validatePromise === f) {
                  O.next = 10;
                  break;
                }
                return O.abrupt("return", []);
              case 10:
                return x = d$(l, c, D, u, y, w), x.catch(function(A) {
                  return A;
                }).then(function() {
                  var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Nr;
                  if (a.validatePromise === f) {
                    var _;
                    a.validatePromise = null;
                    var P = [], $ = [];
                    (_ = A.forEach) === null || _ === void 0 || _.call(A, function(N) {
                      var R = N.rule.warningOnly, M = N.errors, F = M === void 0 ? Nr : M;
                      R ? $.push.apply($, Ne(F)) : P.push.apply(P, Ne(F));
                    }), a.errors = P, a.warnings = $, a.triggerMetaEvent(), a.reRender();
                  }
                }), O.abrupt("return", x);
              case 13:
              case "end":
                return O.stop();
            }
        }, m);
      })));
      return h || (a.validatePromise = f, a.dirty = !0, a.errors = Nr, a.warnings = Nr, a.triggerMetaEvent(), a.reRender()), f;
    }), W(ut(a), "isFieldValidating", function() {
      return !!a.validatePromise;
    }), W(ut(a), "isFieldTouched", function() {
      return a.touched;
    }), W(ut(a), "isFieldDirty", function() {
      if (a.dirty || a.props.initialValue !== void 0)
        return !0;
      var u = a.props.fieldContext, l = u.getInternalHooks(ma), c = l.getInitialValue;
      return c(a.getNamePath()) !== void 0;
    }), W(ut(a), "getErrors", function() {
      return a.errors;
    }), W(ut(a), "getWarnings", function() {
      return a.warnings;
    }), W(ut(a), "isListField", function() {
      return a.props.isListField;
    }), W(ut(a), "isList", function() {
      return a.props.isList;
    }), W(ut(a), "isPreserve", function() {
      return a.props.preserve;
    }), W(ut(a), "getMeta", function() {
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
    }), W(ut(a), "getOnlyChild", function(u) {
      if (typeof u == "function") {
        var l = a.getMeta();
        return G(G({}, a.getOnlyChild(u(a.getControlled(), l, a.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var c = fn(u);
      return c.length !== 1 || !/* @__PURE__ */ v.isValidElement(c[0]) ? {
        child: c,
        isFunction: !1
      } : {
        child: c[0],
        isFunction: !1
      };
    }), W(ut(a), "getValue", function(u) {
      var l = a.props.fieldContext.getFieldsValue, c = a.getNamePath();
      return cn(u || l(!0), c);
    }), W(ut(a), "getControlled", function() {
      var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = a.props, c = l.trigger, d = l.validateTrigger, g = l.getValueFromEvent, p = l.normalize, h = l.valuePropName, f = l.getValueProps, m = l.fieldContext, b = d !== void 0 ? d : m.validateTrigger, E = a.getNamePath(), y = m.getInternalHooks, w = m.getFieldsValue, S = y(ma), D = S.dispatch, x = a.getValue(), B = f || function(P) {
        return W({}, h, P);
      }, O = u[c], A = G(G({}, u), B(x));
      A[c] = function() {
        a.touched = !0, a.dirty = !0, a.triggerMetaEvent();
        for (var P, $ = arguments.length, N = new Array($), R = 0; R < $; R++)
          N[R] = arguments[R];
        g ? P = g.apply(void 0, N) : P = h$.apply(void 0, [h].concat(N)), p && (P = p(P, x, w(!0))), D({
          type: "updateValue",
          namePath: E,
          value: P
        }), O && O.apply(void 0, N);
      };
      var _ = ec(b || []);
      return _.forEach(function(P) {
        var $ = A[P];
        A[P] = function() {
          $ && $.apply(void 0, arguments);
          var N = a.props.rules;
          N && N.length && D({
            type: "validateField",
            namePath: E,
            triggerName: P
          });
        };
      }), A;
    }), n.fieldContext) {
      var o = n.fieldContext.getInternalHooks, i = o(ma), s = i.initEntityValue;
      s(ut(a));
    }
    return a;
  }
  return Er(r, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, o = a.shouldUpdate, i = a.fieldContext;
      if (this.mounted = !0, i) {
        var s = i.getInternalHooks, u = s(ma), l = u.registerField;
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
      return u ? l = s : /* @__PURE__ */ v.isValidElement(s) ? l = /* @__PURE__ */ v.cloneElement(s, this.getControlled(s.props)) : (pt(!s, "`children` of Field is not validate ReactElement."), l = s), /* @__PURE__ */ v.createElement(v.Fragment, {
        key: a
      }, l);
    }
  }]), r;
}(v.Component);
W(lf, "contextType", po);
W(lf, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function jp(e) {
  var t = e.name, r = ct(e, p$), n = v.useContext(po), a = v.useContext(Fs), o = t !== void 0 ? Lt(t) : void 0, i = "keep";
  return r.isListField || (i = "_".concat((o || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && r.isListField && o.length <= 1 && pt(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ v.createElement(lf, We({
    key: i,
    name: o,
    isListField: !!a
  }, r, {
    fieldContext: n
  }));
}
function b$(e) {
  var t = e.name, r = e.initialValue, n = e.children, a = e.rules, o = e.validateTrigger, i = e.isListField, s = v.useContext(po), u = v.useContext(Fs), l = v.useRef({
    keys: [],
    id: 0
  }), c = l.current, d = v.useMemo(function() {
    var f = Lt(s.prefixName) || [];
    return [].concat(Ne(f), Ne(Lt(t)));
  }, [s.prefixName, t]), g = v.useMemo(function() {
    return G(G({}, s), {}, {
      prefixName: d
    });
  }, [s, d]), p = v.useMemo(function() {
    return {
      getKey: function(m) {
        var b = d.length, E = m[b];
        return [c.keys[E], m.slice(b + 1)];
      }
    };
  }, [d]);
  if (typeof n != "function")
    return pt(!1, "Form.List only accepts function as children."), null;
  var h = function(m, b, E) {
    var y = E.source;
    return y === "internal" ? !1 : m !== b;
  };
  return /* @__PURE__ */ v.createElement(Fs.Provider, {
    value: p
  }, /* @__PURE__ */ v.createElement(po.Provider, {
    value: g
  }, /* @__PURE__ */ v.createElement(jp, {
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
      add: function(O, A) {
        var _ = S();
        A >= 0 && A <= _.length ? (c.keys = [].concat(Ne(c.keys.slice(0, A)), [c.id], Ne(c.keys.slice(A))), y([].concat(Ne(_.slice(0, A)), [O], Ne(_.slice(A))))) : (process.env.NODE_ENV !== "production" && (A < 0 || A > _.length) && pt(!1, "The second parameter of the add function should be a valid positive number."), c.keys = [].concat(Ne(c.keys), [c.id]), y([].concat(Ne(_), [O]))), c.id += 1;
      },
      remove: function(O) {
        var A = S(), _ = new Set(Array.isArray(O) ? O : [O]);
        _.size <= 0 || (c.keys = c.keys.filter(function(P, $) {
          return !_.has($);
        }), y(A.filter(function(P, $) {
          return !_.has($);
        })));
      },
      move: function(O, A) {
        if (O !== A) {
          var _ = S();
          O < 0 || O >= _.length || A < 0 || A >= _.length || (c.keys = Qv(c.keys, O, A), y(Qv(_, O, A)));
        }
      }
    }, x = E || [];
    return Array.isArray(x) || (x = [], process.env.NODE_ENV !== "production" && pt(!1, "Current value of '".concat(d.join(" > "), "' is not an array type."))), n(x.map(function(B, O) {
      var A = c.keys[O];
      return A === void 0 && (c.keys[O] = c.id, A = c.keys[O], c.id += 1), {
        name: O,
        key: A,
        isListField: !0
      };
    }), D, m);
  })));
}
function y$(e) {
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
var _p = "__@field_split__";
function Gu(e) {
  return e.map(function(t) {
    return "".concat(st(t), ":").concat(t);
  }).join(_p);
}
var ka = /* @__PURE__ */ function() {
  function e() {
    Cr(this, e), W(this, "kvs", /* @__PURE__ */ new Map());
  }
  return Er(e, [{
    key: "set",
    value: function(r, n) {
      this.kvs.set(Gu(r), n);
    }
  }, {
    key: "get",
    value: function(r) {
      return this.kvs.get(Gu(r));
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
      this.kvs.delete(Gu(r));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(r) {
      return Ne(this.kvs.entries()).map(function(n) {
        var a = ae(n, 2), o = a[0], i = a[1], s = o.split(_p);
        return r({
          key: s.map(function(u) {
            var l = u.match(/^([^:]*):(.*)$/), c = ae(l, 3), d = c[1], g = c[2];
            return d === "number" ? Number(g) : g;
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
}(), C$ = ["name"], E$ = /* @__PURE__ */ Er(function e(t) {
  var r = this;
  Cr(this, e), W(this, "formHooked", !1), W(this, "forceRootUpdate", void 0), W(this, "subscribable", !0), W(this, "store", {}), W(this, "fieldEntities", []), W(this, "initialValues", {}), W(this, "callbacks", {}), W(this, "validateMessages", null), W(this, "preserve", null), W(this, "lastValidatePromise", null), W(this, "getForm", function() {
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
  }), W(this, "getInternalHooks", function(n) {
    return n === ma ? (r.formHooked = !0, {
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
    }) : (pt(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), W(this, "useSubscribe", function(n) {
    r.subscribable = n;
  }), W(this, "prevWithoutPreserves", null), W(this, "setInitialValues", function(n, a) {
    if (r.initialValues = n || {}, a) {
      var o, i = Ja(n, r.store);
      (o = r.prevWithoutPreserves) === null || o === void 0 || o.map(function(s) {
        var u = s.key;
        i = Ur(i, u, cn(n, u));
      }), r.prevWithoutPreserves = null, r.updateStore(i);
    }
  }), W(this, "destroyForm", function() {
    var n = new ka();
    r.getFieldEntities(!0).forEach(function(a) {
      r.isMergedPreserve(a.isPreserve()) || n.set(a.getNamePath(), !0);
    }), r.prevWithoutPreserves = n;
  }), W(this, "getInitialValue", function(n) {
    var a = cn(r.initialValues, n);
    return n.length ? Ja(a) : a;
  }), W(this, "setCallbacks", function(n) {
    r.callbacks = n;
  }), W(this, "setValidateMessages", function(n) {
    r.validateMessages = n;
  }), W(this, "setPreserve", function(n) {
    r.preserve = n;
  }), W(this, "watchList", []), W(this, "registerWatch", function(n) {
    return r.watchList.push(n), function() {
      r.watchList = r.watchList.filter(function(a) {
        return a !== n;
      });
    };
  }), W(this, "notifyWatch", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (r.watchList.length) {
      var a = r.getFieldsValue(), o = r.getFieldsValue(!0);
      r.watchList.forEach(function(i) {
        i(a, o, n);
      });
    }
  }), W(this, "timeoutId", null), W(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !r.timeoutId && typeof window < "u" && (r.timeoutId = setTimeout(function() {
      r.timeoutId = null, r.formHooked || pt(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), W(this, "updateStore", function(n) {
    r.store = n;
  }), W(this, "getFieldEntities", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? r.fieldEntities.filter(function(a) {
      return a.getNamePath().length;
    }) : r.fieldEntities;
  }), W(this, "getFieldsMap", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, a = new ka();
    return r.getFieldEntities(n).forEach(function(o) {
      var i = o.getNamePath();
      a.set(i, o);
    }), a;
  }), W(this, "getFieldEntitiesForNamePathList", function(n) {
    if (!n)
      return r.getFieldEntities(!0);
    var a = r.getFieldsMap(!0);
    return n.map(function(o) {
      var i = Lt(o);
      return a.get(i) || {
        INVALIDATE_NAME_PATH: Lt(o)
      };
    });
  }), W(this, "getFieldsValue", function(n, a) {
    r.warningUnhooked();
    var o, i, s;
    if (n === !0 || Array.isArray(n) ? (o = n, i = a) : n && st(n) === "object" && (s = n.strict, i = n.filter), o === !0 && !i)
      return r.store;
    var u = r.getFieldEntitiesForNamePathList(Array.isArray(o) ? o : null), l = [];
    return u.forEach(function(c) {
      var d, g, p = "INVALIDATE_NAME_PATH" in c ? c.INVALIDATE_NAME_PATH : c.getNamePath();
      if (s) {
        var h, f;
        if ((h = (f = c).isList) !== null && h !== void 0 && h.call(f))
          return;
      } else if (!o && (d = (g = c).isListField) !== null && d !== void 0 && d.call(g))
        return;
      if (!i)
        l.push(p);
      else {
        var m = "getMeta" in c ? c.getMeta() : null;
        i(m) && l.push(p);
      }
    }), Zv(r.store, l.map(Lt));
  }), W(this, "getFieldValue", function(n) {
    r.warningUnhooked();
    var a = Lt(n);
    return cn(r.store, a);
  }), W(this, "getFieldsError", function(n) {
    r.warningUnhooked();
    var a = r.getFieldEntitiesForNamePathList(n);
    return a.map(function(o, i) {
      return o && !("INVALIDATE_NAME_PATH" in o) ? {
        name: o.getNamePath(),
        errors: o.getErrors(),
        warnings: o.getWarnings()
      } : {
        name: Lt(n[i]),
        errors: [],
        warnings: []
      };
    });
  }), W(this, "getFieldError", function(n) {
    r.warningUnhooked();
    var a = Lt(n), o = r.getFieldsError([a])[0];
    return o.errors;
  }), W(this, "getFieldWarning", function(n) {
    r.warningUnhooked();
    var a = Lt(n), o = r.getFieldsError([a])[0];
    return o.warnings;
  }), W(this, "isFieldsTouched", function() {
    r.warningUnhooked();
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
      a[o] = arguments[o];
    var i = a[0], s = a[1], u, l = !1;
    a.length === 0 ? u = null : a.length === 1 ? Array.isArray(i) ? (u = i.map(Lt), l = !1) : (u = null, l = i) : (u = i.map(Lt), l = s);
    var c = r.getFieldEntities(!0), d = function(m) {
      return m.isFieldTouched();
    };
    if (!u)
      return l ? c.every(d) : c.some(d);
    var g = new ka();
    u.forEach(function(f) {
      g.set(f, []);
    }), c.forEach(function(f) {
      var m = f.getNamePath();
      u.forEach(function(b) {
        b.every(function(E, y) {
          return m[y] === E;
        }) && g.update(b, function(E) {
          return [].concat(Ne(E), [f]);
        });
      });
    });
    var p = function(m) {
      return m.some(d);
    }, h = g.map(function(f) {
      var m = f.value;
      return m;
    });
    return l ? h.every(p) : h.some(p);
  }), W(this, "isFieldTouched", function(n) {
    return r.warningUnhooked(), r.isFieldsTouched([n]);
  }), W(this, "isFieldsValidating", function(n) {
    r.warningUnhooked();
    var a = r.getFieldEntities();
    if (!n)
      return a.some(function(i) {
        return i.isFieldValidating();
      });
    var o = n.map(Lt);
    return a.some(function(i) {
      var s = i.getNamePath();
      return ao(o, s) && i.isFieldValidating();
    });
  }), W(this, "isFieldValidating", function(n) {
    return r.warningUnhooked(), r.isFieldsValidating([n]);
  }), W(this, "resetWithFieldInitialValue", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = new ka(), o = r.getFieldEntities(!0);
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
          var g = c.getNamePath(), p = r.getInitialValue(g);
          if (p !== void 0)
            pt(!1, "Form already set 'initialValues' with path '".concat(g.join("."), "'. Field can not overwrite it."));
          else {
            var h = a.get(g);
            if (h && h.size > 1)
              pt(!1, "Multiple Field with path '".concat(g.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (h) {
              var f = r.getFieldValue(g), m = c.isListField();
              !m && (!n.skipExist || f === void 0) && r.updateStore(Ur(r.store, g, Ne(h)[0].value));
            }
          }
        }
      });
    }, s;
    n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(u) {
      var l = a.get(u);
      if (l) {
        var c;
        (c = s).push.apply(c, Ne(Ne(l).map(function(d) {
          return d.entity;
        })));
      }
    })) : s = o, i(s);
  }), W(this, "resetFields", function(n) {
    r.warningUnhooked();
    var a = r.store;
    if (!n) {
      r.updateStore(Ja(r.initialValues)), r.resetWithFieldInitialValue(), r.notifyObservers(a, null, {
        type: "reset"
      }), r.notifyWatch();
      return;
    }
    var o = n.map(Lt);
    o.forEach(function(i) {
      var s = r.getInitialValue(i);
      r.updateStore(Ur(r.store, i, s));
    }), r.resetWithFieldInitialValue({
      namePathList: o
    }), r.notifyObservers(a, o, {
      type: "reset"
    }), r.notifyWatch(o);
  }), W(this, "setFields", function(n) {
    r.warningUnhooked();
    var a = r.store, o = [];
    n.forEach(function(i) {
      var s = i.name, u = ct(i, C$), l = Lt(s);
      o.push(l), "value" in u && r.updateStore(Ur(r.store, l, u.value)), r.notifyObservers(a, [l], {
        type: "setField",
        data: i
      });
    }), r.notifyWatch(o);
  }), W(this, "getFields", function() {
    var n = r.getFieldEntities(!0), a = n.map(function(o) {
      var i = o.getNamePath(), s = o.getMeta(), u = G(G({}, s), {}, {
        name: i,
        value: r.getFieldValue(i)
      });
      return Object.defineProperty(u, "originRCField", {
        value: !0
      }), u;
    });
    return a;
  }), W(this, "initEntityValue", function(n) {
    var a = n.props.initialValue;
    if (a !== void 0) {
      var o = n.getNamePath(), i = cn(r.store, o);
      i === void 0 && r.updateStore(Ur(r.store, o, a));
    }
  }), W(this, "isMergedPreserve", function(n) {
    var a = n !== void 0 ? n : r.preserve;
    return a ?? !0;
  }), W(this, "registerField", function(n) {
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
            !Mp(d.getNamePath(), a)
          );
        })) {
          var c = r.store;
          r.updateStore(Ur(c, a, l, !0)), r.notifyObservers(c, [a], {
            type: "remove"
          }), r.triggerDependenciesUpdate(c, a);
        }
      }
      r.notifyWatch([a]);
    };
  }), W(this, "dispatch", function(n) {
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
  }), W(this, "notifyObservers", function(n, a, o) {
    if (r.subscribable) {
      var i = G(G({}, o), {}, {
        store: r.getFieldsValue(!0)
      });
      r.getFieldEntities().forEach(function(s) {
        var u = s.onStoreChange;
        u(n, a, i);
      });
    } else
      r.forceRootUpdate();
  }), W(this, "triggerDependenciesUpdate", function(n, a) {
    var o = r.getDependencyChildrenFields(a);
    return o.length && r.validateFields(o), r.notifyObservers(n, o, {
      type: "dependenciesUpdate",
      relatedFields: [a].concat(Ne(o))
    }), o;
  }), W(this, "updateValue", function(n, a) {
    var o = Lt(n), i = r.store;
    r.updateStore(Ur(r.store, o, a)), r.notifyObservers(i, [o], {
      type: "valueUpdate",
      source: "internal"
    }), r.notifyWatch([o]);
    var s = r.triggerDependenciesUpdate(i, o), u = r.callbacks.onValuesChange;
    if (u) {
      var l = Zv(r.store, [o]);
      u(l, r.getFieldsValue());
    }
    r.triggerOnFieldsChange([o].concat(Ne(s)));
  }), W(this, "setFieldsValue", function(n) {
    r.warningUnhooked();
    var a = r.store;
    if (n) {
      var o = Ja(r.store, n);
      r.updateStore(o);
    }
    r.notifyObservers(a, null, {
      type: "valueUpdate",
      source: "external"
    }), r.notifyWatch();
  }), W(this, "setFieldValue", function(n, a) {
    r.setFields([{
      name: n,
      value: a
    }]);
  }), W(this, "getDependencyChildrenFields", function(n) {
    var a = /* @__PURE__ */ new Set(), o = [], i = new ka();
    r.getFieldEntities().forEach(function(u) {
      var l = u.props.dependencies;
      (l || []).forEach(function(c) {
        var d = Lt(c);
        i.update(d, function() {
          var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return g.add(u), g;
        });
      });
    });
    var s = function u(l) {
      var c = i.get(l) || /* @__PURE__ */ new Set();
      c.forEach(function(d) {
        if (!a.has(d)) {
          a.add(d);
          var g = d.getNamePath();
          d.isFieldDirty() && g.length && (o.push(g), u(g));
        }
      });
    };
    return s(n), o;
  }), W(this, "triggerOnFieldsChange", function(n, a) {
    var o = r.callbacks.onFieldsChange;
    if (o) {
      var i = r.getFields();
      if (a) {
        var s = new ka();
        a.forEach(function(l) {
          var c = l.name, d = l.errors;
          s.set(c, d);
        }), i.forEach(function(l) {
          l.errors = s.get(l.name) || l.errors;
        });
      }
      var u = i.filter(function(l) {
        var c = l.name;
        return ao(n, c);
      });
      u.length && o(u, i);
    }
  }), W(this, "validateFields", function(n, a) {
    r.warningUnhooked();
    var o, i;
    Array.isArray(n) || typeof n == "string" || typeof a == "string" ? (o = n, i = a) : i = n;
    var s = !!o, u = s ? o.map(Lt) : [], l = [], c = String(Date.now()), d = /* @__PURE__ */ new Set(), g = i || {}, p = g.recursive, h = g.dirty;
    r.getFieldEntities(!0).forEach(function(E) {
      if (s || u.push(E.getNamePath()), !(!E.props.rules || !E.props.rules.length) && !(h && !E.isFieldDirty())) {
        var y = E.getNamePath();
        if (d.add(y.join(c)), !s || ao(u, y, p)) {
          var w = E.validateRules(G({
            validateMessages: G(G({}, Ip), r.validateMessages)
          }, i));
          l.push(w.then(function() {
            return {
              name: y,
              errors: [],
              warnings: []
            };
          }).catch(function(S) {
            var D, x = [], B = [];
            return (D = S.forEach) === null || D === void 0 || D.call(S, function(O) {
              var A = O.rule.warningOnly, _ = O.errors;
              A ? B.push.apply(B, Ne(_)) : x.push.apply(x, Ne(_));
            }), x.length ? Promise.reject({
              name: y,
              errors: x,
              warnings: B
            }) : {
              name: y,
              errors: x,
              warnings: B
            };
          }));
        }
      }
    });
    var f = y$(l);
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
  }), W(this, "submit", function() {
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
function Lp(e) {
  var t = v.useRef(), r = v.useState({}), n = ae(r, 2), a = n[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var o = function() {
        a({});
      }, i = new E$(o);
      t.current = i.getForm();
    }
  return [t.current];
}
var cc = /* @__PURE__ */ v.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), w$ = function(t) {
  var r = t.validateMessages, n = t.onFormChange, a = t.onFormFinish, o = t.children, i = v.useContext(cc), s = v.useRef({});
  return /* @__PURE__ */ v.createElement(cc.Provider, {
    value: G(G({}, i), {}, {
      validateMessages: G(G({}, i.validateMessages), r),
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
        l && (s.current = G(G({}, s.current), {}, W({}, l, c))), i.registerForm(l, c);
      },
      unregisterForm: function(l) {
        var c = G({}, s.current);
        delete c[l], s.current = c, i.unregisterForm(l);
      }
    })
  }, o);
}, D$ = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"], S$ = function(t, r) {
  var n = t.name, a = t.initialValues, o = t.fields, i = t.form, s = t.preserve, u = t.children, l = t.component, c = l === void 0 ? "form" : l, d = t.validateMessages, g = t.validateTrigger, p = g === void 0 ? "onChange" : g, h = t.onValuesChange, f = t.onFieldsChange, m = t.onFinish, b = t.onFinishFailed, E = ct(t, D$), y = v.useContext(cc), w = Lp(i), S = ae(w, 1), D = S[0], x = D.getInternalHooks(ma), B = x.useSubscribe, O = x.setInitialValues, A = x.setCallbacks, _ = x.setValidateMessages, P = x.setPreserve, $ = x.destroyForm;
  v.useImperativeHandle(r, function() {
    return D;
  }), v.useEffect(function() {
    return y.registerForm(n, D), function() {
      y.unregisterForm(n);
    };
  }, [y, D, n]), _(G(G({}, y.validateMessages), d)), A({
    onValuesChange: h,
    onFieldsChange: function(X) {
      if (y.triggerFormChange(n, X), f) {
        for (var Q = arguments.length, I = new Array(Q > 1 ? Q - 1 : 0), z = 1; z < Q; z++)
          I[z - 1] = arguments[z];
        f.apply(void 0, [X].concat(I));
      }
    },
    onFinish: function(X) {
      y.triggerFormFinish(n, X), m && m(X);
    },
    onFinishFailed: b
  }), P(s);
  var N = v.useRef(null);
  O(a, !N.current), N.current || (N.current = !0), v.useEffect(
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
  B(!M);
  var T = v.useRef();
  v.useEffect(function() {
    m$(T.current || [], o || []) || D.setFields(o || []), T.current = o;
  }, [o, D]);
  var k = v.useMemo(function() {
    return G(G({}, D), {}, {
      validateTrigger: p
    });
  }, [D, p]), H = /* @__PURE__ */ v.createElement(Fs.Provider, {
    value: null
  }, /* @__PURE__ */ v.createElement(po.Provider, {
    value: k
  }, R));
  return c === !1 ? H : /* @__PURE__ */ v.createElement(c, We({}, E, {
    onSubmit: function(X) {
      X.preventDefault(), X.stopPropagation(), D.submit();
    },
    onReset: function(X) {
      var Q;
      X.preventDefault(), D.resetFields(), (Q = E.onReset) === null || Q === void 0 || Q.call(E, X);
    }
  }), H);
};
function eg(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var x$ = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), r = Je(t);
  pt(r.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function O$() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], a = t[1], o = a === void 0 ? {} : a, i = TA(o) ? {
    form: o
  } : o, s = i.form, u = ir(), l = ae(u, 2), c = l[0], d = l[1], g = sr(function() {
    return eg(c);
  }, [c]), p = Je(g);
  p.current = g;
  var h = Rt(po), f = s || h, m = f && f._init;
  process.env.NODE_ENV !== "production" && pt(t.length === 2 ? s ? m : !0 : m, "useWatch requires a form instance since it can not auto detect from context.");
  var b = Lt(n), E = Je(b);
  return E.current = b, x$(b), zt(
    function() {
      if (m) {
        var y = f.getFieldsValue, w = f.getInternalHooks, S = w(ma), D = S.registerWatch, x = function(_, P) {
          var $ = i.preserve ? P : _;
          return typeof n == "function" ? n($) : cn($, E.current);
        }, B = D(function(A, _) {
          var P = x(A, _), $ = eg(P);
          p.current !== $ && (p.current = $, d(P));
        }), O = x(y(), y(!0));
        return c !== O && d(O), B;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [m]
  ), c;
}
var B$ = /* @__PURE__ */ v.forwardRef(S$), Di = B$;
Di.FormProvider = w$;
Di.Field = jp;
Di.List = b$;
Di.useForm = Lp;
Di.useWatch = O$;
const cf = /* @__PURE__ */ v.createContext({});
process.env.NODE_ENV !== "production" && (cf.displayName = "FormItemInputContext");
const A$ = /* @__PURE__ */ zr(void 0), $$ = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), F$ = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), ff = function(e, t, r, n) {
  const o = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]: Object.assign(Object.assign({}, $$(n)), {
      animationPlayState: "paused"
    }),
    [`${o}${e}-leave`]: Object.assign(Object.assign({}, F$(n)), {
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
}, P$ = new Ct("antMoveDownIn", {
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
}), R$ = new Ct("antMoveDownOut", {
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
}), T$ = new Ct("antMoveLeftIn", {
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
}), N$ = new Ct("antMoveLeftOut", {
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
}), I$ = new Ct("antMoveRightIn", {
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
}), M$ = new Ct("antMoveRightOut", {
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
}), j$ = new Ct("antMoveUpIn", {
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
}), _$ = new Ct("antMoveUpOut", {
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
}), L$ = {
  "move-up": {
    inKeyframes: j$,
    outKeyframes: _$
  },
  "move-down": {
    inKeyframes: P$,
    outKeyframes: R$
  },
  "move-left": {
    inKeyframes: T$,
    outKeyframes: N$
  },
  "move-right": {
    inKeyframes: I$,
    outKeyframes: M$
  }
}, tg = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = L$[t];
  return [ff(n, a, o, e.motionDurationMid), {
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
}, kp = new Ct("antSlideUpIn", {
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
}), zp = new Ct("antSlideUpOut", {
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
}), Vp = new Ct("antSlideDownIn", {
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
}), Hp = new Ct("antSlideDownOut", {
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
}), k$ = new Ct("antSlideLeftIn", {
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
}), z$ = new Ct("antSlideLeftOut", {
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
}), V$ = new Ct("antSlideRightIn", {
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
}), H$ = new Ct("antSlideRightOut", {
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
}), W$ = {
  "slide-up": {
    inKeyframes: kp,
    outKeyframes: zp
  },
  "slide-down": {
    inKeyframes: Vp,
    outKeyframes: Hp
  },
  "slide-left": {
    inKeyframes: k$,
    outKeyframes: z$
  },
  "slide-right": {
    inKeyframes: V$,
    outKeyframes: H$
  }
}, Ps = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = W$[t];
  return [ff(n, a, o, e.motionDurationMid), {
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
}, K$ = new Ct("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), q$ = new Ct("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), rg = new Ct("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), ng = new Ct("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), U$ = new Ct("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), G$ = new Ct("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), X$ = new Ct("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), Y$ = new Ct("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), Z$ = new Ct("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), Q$ = new Ct("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), J$ = new Ct("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), eF = new Ct("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), tF = {
  zoom: {
    inKeyframes: K$,
    outKeyframes: q$
  },
  "zoom-big": {
    inKeyframes: rg,
    outKeyframes: ng
  },
  "zoom-big-fast": {
    inKeyframes: rg,
    outKeyframes: ng
  },
  "zoom-left": {
    inKeyframes: X$,
    outKeyframes: Y$
  },
  "zoom-right": {
    inKeyframes: Z$,
    outKeyframes: Q$
  },
  "zoom-up": {
    inKeyframes: U$,
    outKeyframes: G$
  },
  "zoom-down": {
    inKeyframes: J$,
    outKeyframes: eF
  }
}, df = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = tF[t];
  return [ff(n, a, o, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
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
}, rF = (e) => ({
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
function nF(e) {
  return (t) => /* @__PURE__ */ v.createElement(lp, {
    theme: {
      token: {
        motion: !1,
        zIndexPopupBase: 0
      }
    }
  }, /* @__PURE__ */ v.createElement(e, Object.assign({}, t)));
}
const aF = (e, t, r, n) => nF((o) => {
  const {
    prefixCls: i,
    style: s
  } = o, u = v.useRef(null), [l, c] = v.useState(0), [d, g] = v.useState(0), [p, h] = Qr(!1, {
    value: o.open
  }), {
    getPrefixCls: f
  } = v.useContext(Tt), m = f(t || "select", i);
  v.useEffect(() => {
    if (h(!0), typeof ResizeObserver < "u") {
      const y = new ResizeObserver((S) => {
        const D = S[0].target;
        c(D.offsetHeight + 8), g(D.offsetWidth);
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
  return /* @__PURE__ */ v.createElement("div", {
    ref: u,
    style: E
  }, /* @__PURE__ */ v.createElement(e, Object.assign({}, b)));
}), oF = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
};
var iF = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], za = void 0;
function sF(e, t) {
  var r = e.prefixCls, n = e.invalidate, a = e.item, o = e.renderItem, i = e.responsive, s = e.responsiveDisabled, u = e.registerSize, l = e.itemKey, c = e.className, d = e.style, g = e.children, p = e.display, h = e.order, f = e.component, m = f === void 0 ? "div" : f, b = ct(e, iF), E = i && !p;
  function y(B) {
    u(l, B);
  }
  v.useEffect(function() {
    return function() {
      y(null);
    };
  }, []);
  var w = o && a !== za ? o(a) : g, S;
  n || (S = {
    opacity: E ? 0 : 1,
    height: E ? 0 : za,
    overflowY: E ? "hidden" : za,
    order: i ? h : za,
    pointerEvents: E ? "none" : za,
    position: E ? "absolute" : za
  });
  var D = {};
  E && (D["aria-hidden"] = !0);
  var x = /* @__PURE__ */ v.createElement(m, We({
    className: ie(!n && r, c),
    style: G(G({}, S), d)
  }, D, b, {
    ref: t
  }), w);
  return i && (x = /* @__PURE__ */ v.createElement(ea, {
    onResize: function(O) {
      var A = O.offsetWidth;
      y(A);
    },
    disabled: s
  }, x)), x;
}
var Yo = /* @__PURE__ */ v.forwardRef(sF);
Yo.displayName = "Item";
function uF(e) {
  if (typeof MessageChannel > "u")
    Gt(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function lF() {
  var e = v.useRef(null), t = function(n) {
    e.current || (e.current = [], uF(function() {
      ab(function() {
        e.current.forEach(function(a) {
          a();
        }), e.current = null;
      });
    })), e.current.push(n);
  };
  return t;
}
function No(e, t) {
  var r = v.useState(t), n = ae(r, 2), a = n[0], o = n[1], i = Br(function(s) {
    e(function() {
      o(s);
    });
  });
  return [a, i];
}
var Rs = /* @__PURE__ */ ee.createContext(null), cF = ["component"], fF = ["className"], dF = ["className"], vF = function(t, r) {
  var n = v.useContext(Rs);
  if (!n) {
    var a = t.component, o = a === void 0 ? "div" : a, i = ct(t, cF);
    return /* @__PURE__ */ v.createElement(o, We({}, i, {
      ref: r
    }));
  }
  var s = n.className, u = ct(n, fF), l = t.className, c = ct(t, dF);
  return /* @__PURE__ */ v.createElement(Rs.Provider, {
    value: null
  }, /* @__PURE__ */ v.createElement(Yo, We({
    ref: r,
    className: ie(s, l)
  }, u, c)));
}, Wp = /* @__PURE__ */ v.forwardRef(vF);
Wp.displayName = "RawItem";
var gF = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], Kp = "responsive", qp = "invalidate";
function mF(e) {
  return "+ ".concat(e.length, " ...");
}
function hF(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-overflow" : r, a = e.data, o = a === void 0 ? [] : a, i = e.renderItem, s = e.renderRawItem, u = e.itemKey, l = e.itemWidth, c = l === void 0 ? 10 : l, d = e.ssr, g = e.style, p = e.className, h = e.maxCount, f = e.renderRest, m = e.renderRawRest, b = e.suffix, E = e.component, y = E === void 0 ? "div" : E, w = e.itemComponent, S = e.onVisibleChange, D = ct(e, gF), x = d === "full", B = lF(), O = No(B, null), A = ae(O, 2), _ = A[0], P = A[1], $ = _ || 0, N = No(B, /* @__PURE__ */ new Map()), R = ae(N, 2), M = R[0], F = R[1], T = No(B, 0), k = ae(T, 2), H = k[0], K = k[1], X = No(B, 0), Q = ae(X, 2), I = Q[0], z = Q[1], V = No(B, 0), q = ae(V, 2), te = q[0], re = q[1], le = ir(null), oe = ae(le, 2), ge = oe[0], ce = oe[1], Y = ir(null), pe = ae(Y, 2), Se = pe[0], ye = pe[1], we = v.useMemo(function() {
    return Se === null && x ? Number.MAX_SAFE_INTEGER : Se || 0;
  }, [Se, _]), de = ir(!1), Ee = ae(de, 2), he = Ee[0], me = Ee[1], be = "".concat(n, "-item"), Ie = Math.max(H, I), Re = h === Kp, je = o.length && Re, bt = h === qp, _e = je || typeof h == "number" && o.length > h, Ce = sr(function() {
    var xe = o;
    return je ? _ === null && x ? xe = o : xe = o.slice(0, Math.min(o.length, $ / c)) : typeof h == "number" && (xe = o.slice(0, h)), xe;
  }, [o, c, _, h, je]), ke = sr(function() {
    return je ? o.slice(we + 1) : o.slice(Ce.length);
  }, [o, Ce, je, we]), ze = rt(function(xe, Pe) {
    var it;
    return typeof u == "function" ? u(xe) : (it = u && (xe == null ? void 0 : xe[u])) !== null && it !== void 0 ? it : Pe;
  }, [u]), _t = rt(i || function(xe) {
    return xe;
  }, [i]);
  function et(xe, Pe, it) {
    Se === xe && (Pe === void 0 || Pe === ge) || (ye(xe), it || (me(xe < o.length - 1), S == null || S(xe)), Pe !== void 0 && ce(Pe));
  }
  function xt(xe, Pe) {
    P(Pe.clientWidth);
  }
  function mt(xe, Pe) {
    F(function(it) {
      var Nt = new Map(it);
      return Pe === null ? Nt.delete(xe) : Nt.set(xe, Pe), Nt;
    });
  }
  function Ze(xe, Pe) {
    z(Pe), K(I);
  }
  function ot(xe, Pe) {
    re(Pe);
  }
  function Wt(xe) {
    return M.get(ze(Ce[xe], xe));
  }
  jt(function() {
    if ($ && typeof Ie == "number" && Ce) {
      var xe = te, Pe = Ce.length, it = Pe - 1;
      if (!Pe) {
        et(0, null);
        return;
      }
      for (var Nt = 0; Nt < Pe; Nt += 1) {
        var Kt = Wt(Nt);
        if (x && (Kt = Kt || 0), Kt === void 0) {
          et(Nt - 1, void 0, !0);
          break;
        }
        if (xe += Kt, // Only one means `totalWidth` is the final width
        it === 0 && xe <= $ || // Last two width will be the final width
        Nt === it - 1 && xe + Wt(it) <= $) {
          et(it, null);
          break;
        } else if (xe + Ie > $) {
          et(Nt - 1, xe - Kt - te + I);
          break;
        }
      }
      b && Wt(0) + te > $ && ce(null);
    }
  }, [$, M, I, te, ze, Ce]);
  var Et = he && !!ke.length, se = {};
  ge !== null && je && (se = {
    position: "absolute",
    left: ge,
    top: 0
  });
  var Ae = {
    prefixCls: be,
    responsive: je,
    component: w,
    invalidate: bt
  }, Le = s ? function(xe, Pe) {
    var it = ze(xe, Pe);
    return /* @__PURE__ */ v.createElement(Rs.Provider, {
      key: it,
      value: G(G({}, Ae), {}, {
        order: Pe,
        item: xe,
        itemKey: it,
        registerSize: mt,
        display: Pe <= we
      })
    }, s(xe, Pe));
  } : function(xe, Pe) {
    var it = ze(xe, Pe);
    return /* @__PURE__ */ v.createElement(Yo, We({}, Ae, {
      order: Pe,
      key: it,
      item: xe,
      renderItem: _t,
      itemKey: it,
      registerSize: mt,
      display: Pe <= we
    }));
  }, tt, Qe = {
    order: Et ? we : Number.MAX_SAFE_INTEGER,
    className: "".concat(be, "-rest"),
    registerSize: Ze,
    display: Et
  };
  if (m)
    m && (tt = /* @__PURE__ */ v.createElement(Rs.Provider, {
      value: G(G({}, Ae), Qe)
    }, m(ke)));
  else {
    var $e = f || mF;
    tt = /* @__PURE__ */ v.createElement(Yo, We({}, Ae, Qe), typeof $e == "function" ? $e(ke) : $e);
  }
  var Ye = /* @__PURE__ */ v.createElement(y, We({
    className: ie(!bt && n, p),
    style: g,
    ref: t
  }, D), Ce.map(Le), _e ? tt : null, b && /* @__PURE__ */ v.createElement(Yo, We({}, Ae, {
    responsive: Re,
    responsiveDisabled: !je,
    order: we,
    className: "".concat(be, "-suffix"),
    registerSize: ot,
    display: !0,
    style: se
  }), b));
  return Re && (Ye = /* @__PURE__ */ v.createElement(ea, {
    onResize: xt,
    disabled: !je
  }, Ye)), Ye;
}
var An = /* @__PURE__ */ v.forwardRef(hF);
An.displayName = "Overflow";
An.Item = Wp;
An.RESPONSIVE = Kp;
An.INVALIDATE = qp;
function pF(e) {
  var t = e.prefixCls, r = e.align, n = e.arrow, a = e.arrowPos, o = n || {}, i = o.className, s = o.content, u = a.x, l = u === void 0 ? 0 : u, c = a.y, d = c === void 0 ? 0 : c, g = v.useRef();
  if (!r || !r.points)
    return null;
  var p = {
    position: "absolute"
  };
  if (r.autoArrow !== !1) {
    var h = r.points[0], f = r.points[1], m = h[0], b = h[1], E = f[0], y = f[1];
    m === E || !["t", "b"].includes(m) ? p.top = d : m === "t" ? p.top = 0 : p.bottom = 0, b === y || !["l", "r"].includes(b) ? p.left = l : b === "l" ? p.left = 0 : p.right = 0;
  }
  return /* @__PURE__ */ v.createElement("div", {
    ref: g,
    className: ie("".concat(t, "-arrow"), i),
    style: p
  }, s);
}
function bF(e) {
  var t = e.prefixCls, r = e.open, n = e.zIndex, a = e.mask, o = e.motion;
  return a ? /* @__PURE__ */ v.createElement(Eo, We({}, o, {
    motionAppear: !0,
    visible: r,
    removeOnLeave: !0
  }), function(i) {
    var s = i.className;
    return /* @__PURE__ */ v.createElement("div", {
      style: {
        zIndex: n
      },
      className: ie("".concat(t, "-mask"), s)
    });
  }) : null;
}
var Up = /* @__PURE__ */ v.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (Up.displayName = "PopupContent");
var Gp = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.popup, n = e.className, a = e.prefixCls, o = e.style, i = e.target, s = e.onVisibleChanged, u = e.open, l = e.keepDom, c = e.fresh, d = e.onClick, g = e.mask, p = e.arrow, h = e.arrowPos, f = e.align, m = e.motion, b = e.maskMotion, E = e.forceRender, y = e.getPopupContainer, w = e.autoDestroy, S = e.portal, D = e.zIndex, x = e.onMouseEnter, B = e.onMouseLeave, O = e.onPointerEnter, A = e.ready, _ = e.offsetX, P = e.offsetY, $ = e.offsetR, N = e.offsetB, R = e.onAlign, M = e.onPrepare, F = e.stretch, T = e.targetWidth, k = e.targetHeight, H = typeof r == "function" ? r() : r, K = u || l, X = (y == null ? void 0 : y.length) > 0, Q = v.useState(!y || !X), I = ae(Q, 2), z = I[0], V = I[1];
  if (jt(function() {
    !z && X && i && V(!0);
  }, [z, X, i]), !z)
    return null;
  var q = "auto", te = {
    left: "-1000vw",
    top: "-1000vh",
    right: q,
    bottom: q
  };
  if (A || !u) {
    var re, le = f.points, oe = f.dynamicInset || ((re = f._experimental) === null || re === void 0 ? void 0 : re.dynamicInset), ge = oe && le[0][1] === "r", ce = oe && le[0][0] === "b";
    ge ? (te.right = $, te.left = q) : (te.left = _, te.right = q), ce ? (te.bottom = N, te.top = q) : (te.top = P, te.bottom = q);
  }
  var Y = {};
  return F && (F.includes("height") && k ? Y.height = k : F.includes("minHeight") && k && (Y.minHeight = k), F.includes("width") && T ? Y.width = T : F.includes("minWidth") && T && (Y.minWidth = T)), u || (Y.pointerEvents = "none"), /* @__PURE__ */ v.createElement(S, {
    open: E || K,
    getContainer: y && function() {
      return y(i);
    },
    autoDestroy: w
  }, /* @__PURE__ */ v.createElement(bF, {
    prefixCls: a,
    open: u,
    zIndex: D,
    mask: g,
    motion: b
  }), /* @__PURE__ */ v.createElement(ea, {
    onResize: R,
    disabled: !u
  }, function(pe) {
    return /* @__PURE__ */ v.createElement(Eo, We({
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
      onVisibleChanged: function(ye) {
        var we;
        m == null || (we = m.onVisibleChanged) === null || we === void 0 || we.call(m, ye), s(ye);
      }
    }), function(Se, ye) {
      var we = Se.className, de = Se.style, Ee = ie(a, we, n);
      return /* @__PURE__ */ v.createElement("div", {
        ref: Qn(pe, t, ye),
        className: Ee,
        style: G(G(G(G({
          "--arrow-x": "".concat(h.x || 0, "px"),
          "--arrow-y": "".concat(h.y || 0, "px")
        }, te), Y), de), {}, {
          boxSizing: "border-box",
          zIndex: D
        }, o),
        onMouseEnter: x,
        onMouseLeave: B,
        onPointerEnter: O,
        onClick: d
      }, p && /* @__PURE__ */ v.createElement(pF, {
        prefixCls: a,
        arrow: p,
        arrowPos: h,
        align: f
      }), /* @__PURE__ */ v.createElement(Up, {
        cache: !u && !c
      }, H));
    });
  }));
});
process.env.NODE_ENV !== "production" && (Gp.displayName = "Popup");
var Xp = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.children, n = e.getTriggerDOMNode, a = Jn(r), o = v.useCallback(function(s) {
    _c(t, n ? n(s) : s);
  }, [n]), i = pi(o, r.ref);
  return a ? /* @__PURE__ */ v.cloneElement(r, {
    ref: i
  }) : r;
});
process.env.NODE_ENV !== "production" && (Xp.displayName = "TriggerWrapper");
var ag = /* @__PURE__ */ v.createContext(null);
function og(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function yF(e, t, r, n) {
  return v.useMemo(function() {
    var a = og(r ?? t), o = og(n ?? t), i = new Set(a), s = new Set(o);
    return e && (i.has("hover") && (i.delete("hover"), i.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [i, s];
  }, [e, t, r, n]);
}
function CF() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
  return r ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function EF(e, t, r, n) {
  for (var a = r.points, o = Object.keys(e), i = 0; i < o.length; i += 1) {
    var s, u = o[i];
    if (CF((s = e[u]) === null || s === void 0 ? void 0 : s.points, a, n))
      return "".concat(t, "-placement-").concat(u);
  }
  return "";
}
function ig(e, t, r, n) {
  return t || (r ? {
    motionName: "".concat(e, "-").concat(r)
  } : n ? {
    motionName: n
  } : null);
}
function Si(e) {
  return e.ownerDocument.defaultView;
}
function fc(e) {
  for (var t = [], r = e == null ? void 0 : e.parentElement, n = ["hidden", "scroll", "clip", "auto"]; r; ) {
    var a = Si(r).getComputedStyle(r), o = a.overflowX, i = a.overflowY, s = a.overflow;
    [o, i, s].some(function(u) {
      return n.includes(u);
    }) && t.push(r), r = r.parentElement;
  }
  return t;
}
function vi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function Io(e) {
  return vi(parseFloat(e), 0);
}
function sg(e, t) {
  var r = G({}, e);
  return (t || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement || n instanceof HTMLHtmlElement)) {
      var a = Si(n).getComputedStyle(n), o = a.overflow, i = a.overflowClipMargin, s = a.borderTopWidth, u = a.borderBottomWidth, l = a.borderLeftWidth, c = a.borderRightWidth, d = n.getBoundingClientRect(), g = n.offsetHeight, p = n.clientHeight, h = n.offsetWidth, f = n.clientWidth, m = Io(s), b = Io(u), E = Io(l), y = Io(c), w = vi(Math.round(d.width / h * 1e3) / 1e3), S = vi(Math.round(d.height / g * 1e3) / 1e3), D = (h - f - E - y) * w, x = (g - p - m - b) * S, B = m * S, O = b * S, A = E * w, _ = y * w, P = 0, $ = 0;
      if (o === "clip") {
        var N = Io(i);
        P = N * w, $ = N * S;
      }
      var R = d.x + A - P, M = d.y + B - $, F = R + d.width + 2 * P - A - _ - D, T = M + d.height + 2 * $ - B - O - x;
      r.left = Math.max(r.left, R), r.top = Math.max(r.top, M), r.right = Math.min(r.right, F), r.bottom = Math.min(r.bottom, T);
    }
  }), r;
}
function ug(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = "".concat(t), n = r.match(/^(.*)\%$/);
  return n ? e * (parseFloat(n[1]) / 100) : parseFloat(r);
}
function lg(e, t) {
  var r = t || [], n = ae(r, 2), a = n[0], o = n[1];
  return [ug(e.width, a), ug(e.height, o)];
}
function cg() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function Va(e, t) {
  var r = t[0], n = t[1], a, o;
  return r === "t" ? o = e.y : r === "b" ? o = e.y + e.height : o = e.y + e.height / 2, n === "l" ? a = e.x : n === "r" ? a = e.x + e.width : a = e.x + e.width / 2, {
    x: a,
    y: o
  };
}
function _n(e, t) {
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
function wF(e, t, r, n, a, o, i) {
  var s = v.useState({
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
  }), u = ae(s, 2), l = u[0], c = u[1], d = v.useRef(0), g = v.useMemo(function() {
    return t ? fc(t) : [];
  }, [t]), p = v.useRef({}), h = function() {
    p.current = {};
  };
  e || h();
  var f = Br(function() {
    if (t && r && e) {
      let ar = function(bn, oa) {
        var Ia = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ee, Ma = H.x + bn, Oo = H.y + oa, Bo = Ma + re, Bi = Oo + te, du = Math.max(Ma, Ia.left), vu = Math.max(Oo, Ia.top), gu = Math.min(Bo, Ia.right), mu = Math.min(Bi, Ia.bottom);
        return Math.max(0, (gu - du) * (mu - vu));
      }, Na = function() {
        ne = H.y + $e, ue = ne + te, Te = H.x + Qe, Ue = Te + re;
      };
      var E, y, w = t, S = w.ownerDocument, D = Si(w), x = D.getComputedStyle(w), B = x.width, O = x.height, A = x.position, _ = w.style.left, P = w.style.top, $ = w.style.right, N = w.style.bottom, R = w.style.overflow, M = G(G({}, a[n]), o), F = S.createElement("div");
      (E = w.parentElement) === null || E === void 0 || E.appendChild(F), F.style.left = "".concat(w.offsetLeft, "px"), F.style.top = "".concat(w.offsetTop, "px"), F.style.position = A, F.style.height = "".concat(w.offsetHeight, "px"), F.style.width = "".concat(w.offsetWidth, "px"), w.style.left = "0", w.style.top = "0", w.style.right = "auto", w.style.bottom = "auto", w.style.overflow = "hidden";
      var T;
      if (Array.isArray(r))
        T = {
          x: r[0],
          y: r[1],
          width: 0,
          height: 0
        };
      else {
        var k = r.getBoundingClientRect();
        T = {
          x: k.x,
          y: k.y,
          width: k.width,
          height: k.height
        };
      }
      var H = w.getBoundingClientRect(), K = S.documentElement, X = K.clientWidth, Q = K.clientHeight, I = K.scrollWidth, z = K.scrollHeight, V = K.scrollTop, q = K.scrollLeft, te = H.height, re = H.width, le = T.height, oe = T.width, ge = {
        left: 0,
        top: 0,
        right: X,
        bottom: Q
      }, ce = {
        left: -q,
        top: -V,
        right: I - q,
        bottom: z - V
      }, Y = M.htmlRegion, pe = "visible", Se = "visibleFirst";
      Y !== "scroll" && Y !== Se && (Y = pe);
      var ye = Y === Se, we = sg(ce, g), de = sg(ge, g), Ee = Y === pe ? de : we, he = ye ? de : Ee;
      w.style.left = "auto", w.style.top = "auto", w.style.right = "0", w.style.bottom = "0";
      var me = w.getBoundingClientRect();
      w.style.left = _, w.style.top = P, w.style.right = $, w.style.bottom = N, w.style.overflow = R, (y = w.parentElement) === null || y === void 0 || y.removeChild(F);
      var be = vi(Math.round(re / parseFloat(B) * 1e3) / 1e3), Ie = vi(Math.round(te / parseFloat(O) * 1e3) / 1e3);
      if (be === 0 || Ie === 0 || Es(r) && !rf(r))
        return;
      var Re = M.offset, je = M.targetOffset, bt = lg(H, Re), _e = ae(bt, 2), Ce = _e[0], ke = _e[1], ze = lg(T, je), _t = ae(ze, 2), et = _t[0], xt = _t[1];
      T.x -= et, T.y -= xt;
      var mt = M.points || [], Ze = ae(mt, 2), ot = Ze[0], Wt = Ze[1], Et = cg(Wt), se = cg(ot), Ae = Va(T, Et), Le = Va(H, se), tt = G({}, M), Qe = Ae.x - Le.x + Ce, $e = Ae.y - Le.y + ke, Ye = ar(Qe, $e), xe = ar(Qe, $e, de), Pe = Va(T, ["t", "l"]), it = Va(H, ["t", "l"]), Nt = Va(T, ["b", "r"]), Kt = Va(H, ["b", "r"]), $t = M.overflow || {}, tn = $t.adjustX, rn = $t.adjustY, Dr = $t.shiftX, hr = $t.shiftY, j = function(oa) {
        return typeof oa == "boolean" ? oa : oa >= 0;
      }, ne, ue, Te, Ue;
      Na();
      var at = j(rn), qe = se[0] === Et[0];
      if (at && se[0] === "t" && (ue > he.bottom || p.current.bt)) {
        var Ve = $e;
        qe ? Ve -= te - le : Ve = Pe.y - Kt.y - ke;
        var Dt = ar(Qe, Ve), wt = ar(Qe, Ve, de);
        // Of course use larger one
        Dt > Ye || Dt === Ye && (!ye || // Choose recommend one
        wt >= xe) ? (p.current.bt = !0, $e = Ve, ke = -ke, tt.points = [_n(se, 0), _n(Et, 0)]) : p.current.bt = !1;
      }
      if (at && se[0] === "b" && (ne < he.top || p.current.tb)) {
        var Xe = $e;
        qe ? Xe += te - le : Xe = Nt.y - it.y - ke;
        var qt = ar(Qe, Xe), Tr = ar(Qe, Xe, de);
        // Of course use larger one
        qt > Ye || qt === Ye && (!ye || // Choose recommend one
        Tr >= xe) ? (p.current.tb = !0, $e = Xe, ke = -ke, tt.points = [_n(se, 0), _n(Et, 0)]) : p.current.tb = !1;
      }
      var nn = j(tn), Vt = se[1] === Et[1];
      if (nn && se[1] === "l" && (Ue > he.right || p.current.rl)) {
        var Vr = Qe;
        Vt ? Vr -= re - oe : Vr = Pe.x - Kt.x - Ce;
        var Fa = ar(Vr, $e), So = ar(Vr, $e, de);
        // Of course use larger one
        Fa > Ye || Fa === Ye && (!ye || // Choose recommend one
        So >= xe) ? (p.current.rl = !0, Qe = Vr, Ce = -Ce, tt.points = [_n(se, 1), _n(Et, 1)]) : p.current.rl = !1;
      }
      if (nn && se[1] === "r" && (Te < he.left || p.current.lr)) {
        var vn = Qe;
        Vt ? vn += re - oe : vn = Nt.x - it.x - Ce;
        var na = ar(vn, $e), Hr = ar(vn, $e, de);
        // Of course use larger one
        na > Ye || na === Ye && (!ye || // Choose recommend one
        Hr >= xe) ? (p.current.lr = !0, Qe = vn, Ce = -Ce, tt.points = [_n(se, 1), _n(Et, 1)]) : p.current.lr = !1;
      }
      Na();
      var Wr = Dr === !0 ? 0 : Dr;
      typeof Wr == "number" && (Te < de.left && (Qe -= Te - de.left - Ce, T.x + oe < de.left + Wr && (Qe += T.x - de.left + oe - Wr)), Ue > de.right && (Qe -= Ue - de.right - Ce, T.x > de.right - Wr && (Qe += T.x - de.right + Wr)));
      var gn = hr === !0 ? 0 : hr;
      typeof gn == "number" && (ne < de.top && ($e -= ne - de.top - ke, T.y + le < de.top + gn && ($e += T.y - de.top + le - gn)), ue > de.bottom && ($e -= ue - de.bottom - ke, T.y > de.bottom - gn && ($e += T.y - de.bottom + gn)));
      var Nn = H.x + Qe, mn = Nn + re, Kr = H.y + $e, Pa = Kr + te, hn = T.x, an = hn + oe, Ra = T.y, St = Ra + le, ft = Math.max(Nn, hn), ht = Math.min(mn, an), Zt = (ft + ht) / 2, Qt = Zt - Nn, In = Math.max(Kr, Ra), Mn = Math.min(Pa, St), xo = (In + Mn) / 2, Ta = xo - Kr;
      i == null || i(t, tt);
      var aa = me.right - H.x - (Qe + H.width), pn = me.bottom - H.y - ($e + H.height);
      c({
        ready: !0,
        offsetX: Qe / be,
        offsetY: $e / Ie,
        offsetR: aa / be,
        offsetB: pn / Ie,
        arrowX: Qt / be,
        arrowY: Ta / Ie,
        scaleX: be,
        scaleY: Ie,
        align: tt
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
      return G(G({}, y), {}, {
        ready: !1
      });
    });
  };
  return jt(b, [n]), jt(function() {
    e || b();
  }, [e]), [l.ready, l.offsetX, l.offsetY, l.offsetR, l.offsetB, l.arrowX, l.arrowY, l.scaleX, l.scaleY, l.align, m];
}
function DF(e, t, r, n, a) {
  jt(function() {
    if (e && t && r) {
      let d = function() {
        n(), a();
      };
      var o = t, i = r, s = fc(o), u = fc(i), l = Si(i), c = new Set([l].concat(Ne(s), Ne(u)));
      return c.forEach(function(g) {
        g.addEventListener("scroll", d, {
          passive: !0
        });
      }), l.addEventListener("resize", d, {
        passive: !0
      }), n(), function() {
        c.forEach(function(g) {
          g.removeEventListener("scroll", d), l.removeEventListener("resize", d);
        });
      };
    }
  }, [e, t, r]);
}
function SF(e, t, r, n, a, o, i, s) {
  var u = v.useRef(e), l = v.useRef(!1);
  u.current !== e && (l.current = !0, u.current = e), v.useEffect(function() {
    var c = Gt(function() {
      l.current = !1;
    });
    return function() {
      Gt.cancel(c);
    };
  }, [e]), v.useEffect(function() {
    if (t && n && (!a || o)) {
      var c = function() {
        var A = !1, _ = function(N) {
          var R = N.target;
          A = i(R);
        }, P = function(N) {
          var R = N.target;
          !l.current && u.current && !A && !i(R) && s(!1);
        };
        return [_, P];
      }, d = c(), g = ae(d, 2), p = g[0], h = g[1], f = c(), m = ae(f, 2), b = m[0], E = m[1], y = Si(n);
      y.addEventListener("mousedown", p, !0), y.addEventListener("click", h, !0), y.addEventListener("contextmenu", h, !0);
      var w = Bs(r);
      if (w && (w.addEventListener("mousedown", b, !0), w.addEventListener("click", E, !0), w.addEventListener("contextmenu", E, !0)), process.env.NODE_ENV !== "production") {
        var S, D, x = r == null || (S = r.getRootNode) === null || S === void 0 ? void 0 : S.call(r), B = (D = n.getRootNode) === null || D === void 0 ? void 0 : D.call(n);
        uo(x === B, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        y.removeEventListener("mousedown", p, !0), y.removeEventListener("click", h, !0), y.removeEventListener("contextmenu", h, !0), w && (w.removeEventListener("mousedown", b, !0), w.removeEventListener("click", E, !0), w.removeEventListener("contextmenu", E, !0));
      };
    }
  }, [t, r, n, a, o]);
}
var xF = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function OF() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : uf, t = /* @__PURE__ */ v.forwardRef(function(r, n) {
    var a = r.prefixCls, o = a === void 0 ? "rc-trigger-popup" : a, i = r.children, s = r.action, u = s === void 0 ? "hover" : s, l = r.showAction, c = r.hideAction, d = r.popupVisible, g = r.defaultPopupVisible, p = r.onPopupVisibleChange, h = r.afterPopupVisibleChange, f = r.mouseEnterDelay, m = r.mouseLeaveDelay, b = m === void 0 ? 0.1 : m, E = r.focusDelay, y = r.blurDelay, w = r.mask, S = r.maskClosable, D = S === void 0 ? !0 : S, x = r.getPopupContainer, B = r.forceRender, O = r.autoDestroy, A = r.destroyPopupOnHide, _ = r.popup, P = r.popupClassName, $ = r.popupStyle, N = r.popupPlacement, R = r.builtinPlacements, M = R === void 0 ? {} : R, F = r.popupAlign, T = r.zIndex, k = r.stretch, H = r.getPopupClassNameFromAlign, K = r.fresh, X = r.alignPoint, Q = r.onPopupClick, I = r.onPopupAlign, z = r.arrow, V = r.popupMotion, q = r.maskMotion, te = r.popupTransitionName, re = r.popupAnimation, le = r.maskTransitionName, oe = r.maskAnimation, ge = r.className, ce = r.getTriggerDOMNode, Y = ct(r, xF), pe = O || A || !1, Se = v.useState(!1), ye = ae(Se, 2), we = ye[0], de = ye[1];
    jt(function() {
      de(oF());
    }, []);
    var Ee = v.useRef({}), he = v.useContext(ag), me = v.useMemo(function() {
      return {
        registerSubPopup: function(He, It) {
          Ee.current[He] = It, he == null || he.registerSubPopup(He, It);
        }
      };
    }, [he]), be = PA(), Ie = v.useState(null), Re = ae(Ie, 2), je = Re[0], bt = Re[1], _e = Br(function(Fe) {
      Es(Fe) && je !== Fe && bt(Fe), he == null || he.registerSubPopup(be, Fe);
    }), Ce = v.useState(null), ke = ae(Ce, 2), ze = ke[0], _t = ke[1], et = v.useRef(null), xt = Br(function(Fe) {
      Es(Fe) && ze !== Fe && (_t(Fe), et.current = Fe);
    }), mt = v.Children.only(i), Ze = (mt == null ? void 0 : mt.props) || {}, ot = {}, Wt = Br(function(Fe) {
      var He, It, Ut = ze;
      return (Ut == null ? void 0 : Ut.contains(Fe)) || ((He = Bs(Ut)) === null || He === void 0 ? void 0 : He.host) === Fe || Fe === Ut || (je == null ? void 0 : je.contains(Fe)) || ((It = Bs(je)) === null || It === void 0 ? void 0 : It.host) === Fe || Fe === je || Object.values(Ee.current).some(function(Mt) {
        return (Mt == null ? void 0 : Mt.contains(Fe)) || Fe === Mt;
      });
    }), Et = ig(o, V, re, te), se = ig(o, q, oe, le), Ae = v.useState(g || !1), Le = ae(Ae, 2), tt = Le[0], Qe = Le[1], $e = d ?? tt, Ye = Br(function(Fe) {
      d === void 0 && Qe(Fe);
    });
    jt(function() {
      Qe(d || !1);
    }, [d]);
    var xe = v.useRef($e);
    xe.current = $e;
    var Pe = v.useRef([]);
    Pe.current = [];
    var it = Br(function(Fe) {
      var He;
      Ye(Fe), ((He = Pe.current[Pe.current.length - 1]) !== null && He !== void 0 ? He : $e) !== Fe && (Pe.current.push(Fe), p == null || p(Fe));
    }), Nt = v.useRef(), Kt = function() {
      clearTimeout(Nt.current);
    }, $t = function(He) {
      var It = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      Kt(), It === 0 ? it(He) : Nt.current = setTimeout(function() {
        it(He);
      }, It * 1e3);
    };
    v.useEffect(function() {
      return Kt;
    }, []);
    var tn = v.useState(!1), rn = ae(tn, 2), Dr = rn[0], hr = rn[1];
    jt(function(Fe) {
      (!Fe || $e) && hr(!0);
    }, [$e]);
    var j = v.useState(null), ne = ae(j, 2), ue = ne[0], Te = ne[1], Ue = v.useState([0, 0]), at = ae(Ue, 2), qe = at[0], Ve = at[1], Dt = function(He) {
      Ve([He.clientX, He.clientY]);
    }, wt = wF($e, je, X ? qe : ze, N, M, F, I), Xe = ae(wt, 11), qt = Xe[0], Tr = Xe[1], nn = Xe[2], Vt = Xe[3], Vr = Xe[4], Fa = Xe[5], So = Xe[6], vn = Xe[7], na = Xe[8], Hr = Xe[9], Wr = Xe[10], gn = yF(we, u, l, c), Nn = ae(gn, 2), mn = Nn[0], Kr = Nn[1], Pa = mn.has("click"), hn = Kr.has("click") || Kr.has("contextMenu"), an = Br(function() {
      Dr || Wr();
    }), Ra = function() {
      xe.current && X && hn && $t(!1);
    };
    DF($e, ze, je, an, Ra), jt(function() {
      an();
    }, [qe, N]), jt(function() {
      $e && !(M != null && M[N]) && an();
    }, [JSON.stringify(F)]);
    var St = v.useMemo(function() {
      var Fe = EF(M, o, Hr, X);
      return ie(Fe, H == null ? void 0 : H(Hr));
    }, [Hr, H, M, o, X]);
    v.useImperativeHandle(n, function() {
      return {
        nativeElement: et.current,
        forceAlign: an
      };
    });
    var ft = v.useState(0), ht = ae(ft, 2), Zt = ht[0], Qt = ht[1], In = v.useState(0), Mn = ae(In, 2), xo = Mn[0], Ta = Mn[1], aa = function() {
      if (k && ze) {
        var He = ze.getBoundingClientRect();
        Qt(He.width), Ta(He.height);
      }
    }, pn = function() {
      aa(), an();
    }, ar = function(He) {
      hr(!1), Wr(), h == null || h(He);
    }, Na = function() {
      return new Promise(function(He) {
        aa(), Te(function() {
          return He;
        });
      });
    };
    jt(function() {
      ue && (Wr(), ue(), Te(null));
    }, [ue]);
    function bn(Fe, He, It, Ut) {
      ot[Fe] = function(Mt) {
        var Ai;
        Ut == null || Ut(Mt), $t(He, It);
        for (var hu = arguments.length, Sf = new Array(hu > 1 ? hu - 1 : 0), $i = 1; $i < hu; $i++)
          Sf[$i - 1] = arguments[$i];
        (Ai = Ze[Fe]) === null || Ai === void 0 || Ai.call.apply(Ai, [Ze, Mt].concat(Sf));
      };
    }
    (Pa || hn) && (ot.onClick = function(Fe) {
      var He;
      xe.current && hn ? $t(!1) : !xe.current && Pa && (Dt(Fe), $t(!0));
      for (var It = arguments.length, Ut = new Array(It > 1 ? It - 1 : 0), Mt = 1; Mt < It; Mt++)
        Ut[Mt - 1] = arguments[Mt];
      (He = Ze.onClick) === null || He === void 0 || He.call.apply(He, [Ze, Fe].concat(Ut));
    }), SF($e, hn, ze, je, w, D, Wt, $t);
    var oa = mn.has("hover"), Ia = Kr.has("hover"), Ma, Oo;
    oa && (bn("onMouseEnter", !0, f, function(Fe) {
      Dt(Fe);
    }), bn("onPointerEnter", !0, f, function(Fe) {
      Dt(Fe);
    }), Ma = function(He) {
      ($e || Dr) && je !== null && je !== void 0 && je.contains(He.target) && $t(!0, f);
    }, X && (ot.onMouseMove = function(Fe) {
      var He;
      (He = Ze.onMouseMove) === null || He === void 0 || He.call(Ze, Fe);
    })), Ia && (bn("onMouseLeave", !1, b), bn("onPointerLeave", !1, b), Oo = function() {
      $t(!1, b);
    }), mn.has("focus") && bn("onFocus", !0, E), Kr.has("focus") && bn("onBlur", !1, y), mn.has("contextMenu") && (ot.onContextMenu = function(Fe) {
      var He;
      xe.current && Kr.has("contextMenu") ? $t(!1) : (Dt(Fe), $t(!0)), Fe.preventDefault();
      for (var It = arguments.length, Ut = new Array(It > 1 ? It - 1 : 0), Mt = 1; Mt < It; Mt++)
        Ut[Mt - 1] = arguments[Mt];
      (He = Ze.onContextMenu) === null || He === void 0 || He.call.apply(He, [Ze, Fe].concat(Ut));
    }), ge && (ot.className = ie(Ze.className, ge));
    var Bo = G(G({}, Ze), ot), Bi = {}, du = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    du.forEach(function(Fe) {
      Y[Fe] && (Bi[Fe] = function() {
        for (var He, It = arguments.length, Ut = new Array(It), Mt = 0; Mt < It; Mt++)
          Ut[Mt] = arguments[Mt];
        (He = Bo[Fe]) === null || He === void 0 || He.call.apply(He, [Bo].concat(Ut)), Y[Fe].apply(Y, Ut);
      });
    });
    var vu = /* @__PURE__ */ v.cloneElement(mt, G(G({}, Bo), Bi)), gu = {
      x: Fa,
      y: So
    }, mu = z ? G({}, z !== !0 ? z : {}) : null;
    return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(ea, {
      disabled: !$e,
      ref: xt,
      onResize: pn
    }, /* @__PURE__ */ v.createElement(Xp, {
      getTriggerDOMNode: ce
    }, vu)), /* @__PURE__ */ v.createElement(ag.Provider, {
      value: me
    }, /* @__PURE__ */ v.createElement(Gp, {
      portal: e,
      ref: _e,
      prefixCls: o,
      popup: _,
      className: ie(P, St),
      style: $,
      target: ze,
      onMouseEnter: Ma,
      onMouseLeave: Oo,
      onPointerEnter: Ma,
      zIndex: T,
      open: $e,
      keepDom: Dr,
      fresh: K,
      onClick: Q,
      mask: w,
      motion: Et,
      maskMotion: se,
      onVisibleChanged: ar,
      onPrepare: Na,
      forceRender: B,
      autoDestroy: pe,
      getPopupContainer: x,
      align: Hr,
      arrow: mu,
      arrowPos: gu,
      ready: qt,
      offsetX: Tr,
      offsetY: nn,
      offsetR: Vt,
      offsetB: Vr,
      onAlign: an,
      stretch: k,
      targetWidth: Zt / vn,
      targetHeight: xo / na
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const vf = OF(uf);
function BF(e, t, r) {
  return ie({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: r
  });
}
const AF = (e, t) => t || e, $F = ["outlined", "borderless", "filled"], FF = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
  const r = Rt(A$);
  let n;
  typeof e < "u" ? n = e : t === !1 ? n = "borderless" : n = r ?? "outlined";
  const a = $F.includes(n);
  return [n, a];
};
var PF = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" };
const RF = PF;
var TF = function(t, r) {
  return /* @__PURE__ */ v.createElement(dn, We({}, t, {
    ref: r,
    icon: RF
  }));
}, Yp = /* @__PURE__ */ v.forwardRef(TF);
process.env.NODE_ENV !== "production" && (Yp.displayName = "CheckOutlined");
const NF = Yp;
function Zp(e) {
  var t = e.children, r = e.prefixCls, n = e.id, a = e.overlayInnerStyle, o = e.className, i = e.style;
  return /* @__PURE__ */ v.createElement("div", {
    className: ie("".concat(r, "-content"), o),
    style: i
  }, /* @__PURE__ */ v.createElement("div", {
    className: "".concat(r, "-inner"),
    id: n,
    role: "tooltip",
    style: a
  }, typeof t == "function" ? t() : t));
}
var Ha = {
  shiftX: 64,
  adjustY: 1
}, Wa = {
  adjustX: 1,
  shiftY: !0
}, Ir = [0, 0], IF = {
  left: {
    points: ["cr", "cl"],
    overflow: Wa,
    offset: [-4, 0],
    targetOffset: Ir
  },
  right: {
    points: ["cl", "cr"],
    overflow: Wa,
    offset: [4, 0],
    targetOffset: Ir
  },
  top: {
    points: ["bc", "tc"],
    overflow: Ha,
    offset: [0, -4],
    targetOffset: Ir
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Ha,
    offset: [0, 4],
    targetOffset: Ir
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: Ha,
    offset: [0, -4],
    targetOffset: Ir
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Wa,
    offset: [-4, 0],
    targetOffset: Ir
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Ha,
    offset: [0, -4],
    targetOffset: Ir
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Wa,
    offset: [4, 0],
    targetOffset: Ir
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Ha,
    offset: [0, 4],
    targetOffset: Ir
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Wa,
    offset: [4, 0],
    targetOffset: Ir
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Ha,
    offset: [0, 4],
    targetOffset: Ir
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Wa,
    offset: [-4, 0],
    targetOffset: Ir
  }
}, MF = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"], jF = function(t, r) {
  var n = t.overlayClassName, a = t.trigger, o = a === void 0 ? ["hover"] : a, i = t.mouseEnterDelay, s = i === void 0 ? 0 : i, u = t.mouseLeaveDelay, l = u === void 0 ? 0.1 : u, c = t.overlayStyle, d = t.prefixCls, g = d === void 0 ? "rc-tooltip" : d, p = t.children, h = t.onVisibleChange, f = t.afterVisibleChange, m = t.transitionName, b = t.animation, E = t.motion, y = t.placement, w = y === void 0 ? "right" : y, S = t.align, D = S === void 0 ? {} : S, x = t.destroyTooltipOnHide, B = x === void 0 ? !1 : x, O = t.defaultVisible, A = t.getTooltipContainer, _ = t.overlayInnerStyle;
  t.arrowContent;
  var P = t.overlay, $ = t.id, N = t.showArrow, R = N === void 0 ? !0 : N, M = ct(t, MF), F = Je(null);
  bo(r, function() {
    return F.current;
  });
  var T = G({}, M);
  "visible" in t && (T.popupVisible = t.visible);
  var k = function() {
    return /* @__PURE__ */ v.createElement(Zp, {
      key: "content",
      prefixCls: g,
      id: $,
      overlayInnerStyle: _
    }, P);
  };
  return /* @__PURE__ */ v.createElement(vf, We({
    popupClassName: n,
    prefixCls: g,
    popup: k,
    action: o,
    builtinPlacements: IF,
    popupPlacement: w,
    ref: F,
    popupAlign: D,
    getPopupContainer: A,
    onPopupVisibleChange: h,
    afterPopupVisibleChange: f,
    popupTransitionName: m,
    popupAnimation: b,
    popupMotion: E,
    defaultPopupVisible: O,
    autoDestroy: B,
    mouseLeaveDelay: l,
    popupStyle: c,
    mouseEnterDelay: s,
    arrow: R
  }, T), p);
};
const _F = /* @__PURE__ */ Rr(jF);
function Qp(e) {
  const {
    sizePopupArrow: t,
    borderRadiusXS: r,
    borderRadiusOuter: n
  } = e, a = t / 2, o = 0, i = a, s = n * 1 / Math.sqrt(2), u = a - n * (1 - 1 / Math.sqrt(2)), l = a - r * (1 / Math.sqrt(2)), c = n * (Math.sqrt(2) - 1) + r * (1 / Math.sqrt(2)), d = 2 * a - l, g = c, p = 2 * a - s, h = u, f = 2 * a - o, m = i, b = a * Math.sqrt(2) + n * (Math.sqrt(2) - 2), E = n * (Math.sqrt(2) - 1), y = `polygon(${E}px 100%, 50% ${E}px, ${2 * a - E}px 100%, ${E}px 100%)`, w = `path('M ${o} ${i} A ${n} ${n} 0 0 0 ${s} ${u} L ${l} ${c} A ${r} ${r} 0 0 1 ${d} ${g} L ${p} ${h} A ${n} ${n} 0 0 0 ${f} ${m} Z')`;
  return {
    arrowShadowWidth: b,
    arrowPath: w,
    arrowPolygon: y
  };
}
const LF = (e, t, r) => {
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
        value: `0 0 ${De(s)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: r,
      zIndex: 0,
      background: "transparent"
    }
  };
}, Jp = 8;
function gf(e) {
  const {
    contentRadius: t,
    limitVerticalRadius: r
  } = e, n = t > 12 ? t + 2 : 12;
  return {
    arrowOffsetHorizontal: n,
    arrowOffsetVertical: r ? Jp : n
  };
}
function Yi(e, t) {
  return e ? t : {};
}
function e0(e, t, r) {
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
      }, LF(e, t, a)), {
        "&:before": {
          background: t
        }
      })]
    }, Yi(!!u.top, {
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
    })), Yi(!!u.bottom, {
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
    })), Yi(!!u.left, {
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
    })), Yi(!!u.right, {
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
function kF(e, t, r, n) {
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
const fg = {
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
}, zF = {
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
}, VF = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function t0(e) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: r,
    arrowPointAtCenter: n,
    offset: a,
    borderRadius: o,
    visibleFirst: i
  } = e, s = t / 2, u = {};
  return Object.keys(fg).forEach((l) => {
    const c = n && zF[l] || fg[l], d = Object.assign(Object.assign({}, c), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (u[l] = d, VF.has(l) && (d.autoArrow = !1), l) {
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
    const g = gf({
      contentRadius: o,
      limitVerticalRadius: !0
    });
    if (n)
      switch (l) {
        case "topLeft":
        case "bottomLeft":
          d.offset[0] = -g.arrowOffsetHorizontal - s;
          break;
        case "topRight":
        case "bottomRight":
          d.offset[0] = g.arrowOffsetHorizontal + s;
          break;
        case "leftTop":
        case "rightTop":
          d.offset[1] = -g.arrowOffsetHorizontal - s;
          break;
        case "leftBottom":
        case "rightBottom":
          d.offset[1] = g.arrowOffsetHorizontal + s;
          break;
      }
    d.overflow = kF(l, g, t, r), i && (d.htmlRegion = "visibleFirst");
  }), u;
}
const HF = (e) => {
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
      [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, Gn(e)), {
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
          padding: `${De(e.calc(l).div(2).equal())} ${De(c)}`,
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
            borderRadius: e.min(o, Jp)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), vO(e, (d, g) => {
        let {
          darkColor: p
        } = g;
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
    e0(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow
      }
    }
  ];
}, WF = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 70
}, gf({
  contentRadius: e.borderRadius,
  limitVerticalRadius: !0
})), Qp(ur(e, {
  borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
}))), r0 = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return ta("Tooltip", (n) => {
    const {
      borderRadius: a,
      colorTextLightSolid: o,
      colorBgSpotlight: i
    } = n, s = ur(n, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: o,
      tooltipBorderRadius: a,
      tooltipBg: i
    });
    return [HF(s), df(n, "zoom-big-fast")];
  }, WF, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: t
  })(e);
}, KF = Os.map((e) => `${e}-inverse`);
function qF(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(Ne(KF), Ne(Os)).includes(e) : Os.includes(e);
}
function n0(e, t) {
  const r = qF(t), n = ie({
    [`${e}-${t}`]: t && r
  }), a = {}, o = {};
  return t && !r && (a.background = t, o["--antd-arrow-background-color"] = t), {
    className: n,
    overlayStyle: a,
    arrowStyle: o
  };
}
const UF = (e) => {
  const {
    prefixCls: t,
    className: r,
    placement: n = "top",
    title: a,
    color: o,
    overlayInnerStyle: i
  } = e, {
    getPrefixCls: s
  } = v.useContext(Tt), u = s("tooltip", t), [l, c, d] = r0(u), g = n0(u, o), p = g.arrowStyle, h = Object.assign(Object.assign({}, i), g.overlayStyle), f = ie(c, d, u, `${u}-pure`, `${u}-placement-${n}`, r, g.className);
  return l(/* @__PURE__ */ v.createElement("div", {
    className: f,
    style: p
  }, /* @__PURE__ */ v.createElement("div", {
    className: `${u}-arrow`
  }), /* @__PURE__ */ v.createElement(Zp, Object.assign({}, e, {
    className: c,
    prefixCls: u,
    overlayInnerStyle: h
  }), a)));
}, GF = UF;
var XF = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const mf = /* @__PURE__ */ v.forwardRef((e, t) => {
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
    afterVisibleChange: g,
    destroyTooltipOnHide: p,
    arrow: h = !0,
    title: f,
    overlay: m,
    builtinPlacements: b,
    arrowPointAtCenter: E = !1,
    autoAdjustOverflow: y = !0
  } = e, w = !!h, [, S] = kr(), {
    getPopupContainer: D,
    getPrefixCls: x,
    direction: B
  } = v.useContext(Tt), O = wr("Tooltip"), A = v.useRef(null), _ = () => {
    var be;
    (be = A.current) === null || be === void 0 || be.forceAlign();
  };
  v.useImperativeHandle(t, () => ({
    forceAlign: _,
    forcePopupAlign: () => {
      O.deprecated(!1, "forcePopupAlign", "forceAlign"), _();
    }
  })), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"]].forEach((be) => {
    let [Ie, Re] = be;
    O.deprecated(!(Ie in e), Ie, Re);
  }), process.env.NODE_ENV !== "production" && O(!p || typeof p == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && O(!h || typeof h == "boolean" || !("arrowPointAtCenter" in h), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [P, $] = Qr(!1, {
    value: (r = e.open) !== null && r !== void 0 ? r : e.visible,
    defaultValue: (n = e.defaultOpen) !== null && n !== void 0 ? n : e.defaultVisible
  }), N = !f && !m && f !== 0, R = (be) => {
    var Ie, Re;
    $(N ? !1 : be), N || ((Ie = e.onOpenChange) === null || Ie === void 0 || Ie.call(e, be), (Re = e.onVisibleChange) === null || Re === void 0 || Re.call(e, be));
  }, M = v.useMemo(() => {
    var be, Ie;
    let Re = E;
    return typeof h == "object" && (Re = (Ie = (be = h.pointAtCenter) !== null && be !== void 0 ? be : h.arrowPointAtCenter) !== null && Ie !== void 0 ? Ie : E), b || t0({
      arrowPointAtCenter: Re,
      autoAdjustOverflow: y,
      arrowWidth: w ? S.sizePopupArrow : 0,
      borderRadius: S.borderRadius,
      offset: S.marginXXS,
      visibleFirst: !0
    });
  }, [E, h, b, S]), F = v.useMemo(() => f === 0 ? f : m || f || "", [m, f]), T = /* @__PURE__ */ v.createElement(Dp, null, typeof F == "function" ? F() : F), {
    getPopupContainer: k,
    placement: H = "top",
    mouseEnterDelay: K = 0.1,
    mouseLeaveDelay: X = 0.1,
    overlayStyle: Q,
    rootClassName: I
  } = e, z = XF(e, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), V = x("tooltip", a), q = x(), te = e["data-popover-inject"];
  let re = P;
  !("open" in e) && !("visible" in e) && N && (re = !1);
  const le = Zn(c) && !mp(c) ? c : /* @__PURE__ */ v.createElement("span", null, c), oe = le.props, ge = !oe.className || typeof oe.className == "string" ? ie(oe.className, o || `${V}-open`) : oe.className, [ce, Y, pe] = r0(V, !te), Se = n0(V, u), ye = Se.arrowStyle, we = Object.assign(Object.assign({}, l), Se.overlayStyle), de = ie(s, {
    [`${V}-rtl`]: B === "rtl"
  }, Se.className, I, Y, pe), [Ee, he] = tf("Tooltip", z.zIndex), me = /* @__PURE__ */ v.createElement(_F, Object.assign({}, z, {
    zIndex: Ee,
    showArrow: w,
    placement: H,
    mouseEnterDelay: K,
    mouseLeaveDelay: X,
    prefixCls: V,
    overlayClassName: de,
    overlayStyle: Object.assign(Object.assign({}, ye), Q),
    getTooltipContainer: k || i || D,
    ref: A,
    builtinPlacements: M,
    overlay: T,
    visible: re,
    onVisibleChange: R,
    afterVisibleChange: d ?? g,
    overlayInnerStyle: we,
    arrowContent: /* @__PURE__ */ v.createElement("span", {
      className: `${V}-arrow-content`
    }),
    motion: {
      motionName: AB(q, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!p
  }), re ? ra(le, {
    className: ge
  }) : le);
  return ce(/* @__PURE__ */ v.createElement(tu.Provider, {
    value: he
  }, me));
});
process.env.NODE_ENV !== "production" && (mf.displayName = "Tooltip");
mf._InternalPanelDoNotUseOrYouWillBeFired = GF;
const Ts = mf;
var YF = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" };
const ZF = YF;
var QF = function(t, r) {
  return /* @__PURE__ */ v.createElement(dn, We({}, t, {
    ref: r,
    icon: ZF
  }));
}, a0 = /* @__PURE__ */ v.forwardRef(QF);
process.env.NODE_ENV !== "production" && (a0.displayName = "RightOutlined");
const dc = a0;
var JF = Be.ESC, e2 = Be.TAB;
function t2(e) {
  var t = e.visible, r = e.triggerRef, n = e.onVisibleChange, a = e.autoFocus, o = e.overlayRef, i = v.useRef(!1), s = function() {
    if (t) {
      var d, g;
      (d = r.current) === null || d === void 0 || (g = d.focus) === null || g === void 0 || g.call(d), n == null || n(!1);
    }
  }, u = function() {
    var d;
    return (d = o.current) !== null && d !== void 0 && d.focus ? (o.current.focus(), i.current = !0, !0) : !1;
  }, l = function(d) {
    switch (d.keyCode) {
      case JF:
        s();
        break;
      case e2: {
        var g = !1;
        i.current || (g = u()), g ? d.preventDefault() : s();
        break;
      }
    }
  };
  v.useEffect(function() {
    return t ? (window.addEventListener("keydown", l), a && Gt(u, 3), function() {
      window.removeEventListener("keydown", l), i.current = !1;
    }) : function() {
      i.current = !1;
    };
  }, [t]);
}
var r2 = /* @__PURE__ */ Rr(function(e, t) {
  var r = e.overlay, n = e.arrow, a = e.prefixCls, o = sr(function() {
    var s;
    return typeof r == "function" ? s = r() : s = r, s;
  }, [r]), i = Qn(t, o == null ? void 0 : o.ref);
  return /* @__PURE__ */ ee.createElement(ee.Fragment, null, n && /* @__PURE__ */ ee.createElement("div", {
    className: "".concat(a, "-arrow")
  }), /* @__PURE__ */ ee.cloneElement(o, {
    ref: Jn(o) ? i : void 0
  }));
}), Ka = {
  adjustX: 1,
  adjustY: 1
}, qa = [0, 0], n2 = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: Ka,
    offset: [0, -4],
    targetOffset: qa
  },
  top: {
    points: ["bc", "tc"],
    overflow: Ka,
    offset: [0, -4],
    targetOffset: qa
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Ka,
    offset: [0, -4],
    targetOffset: qa
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Ka,
    offset: [0, 4],
    targetOffset: qa
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Ka,
    offset: [0, 4],
    targetOffset: qa
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Ka,
    offset: [0, 4],
    targetOffset: qa
  }
}, a2 = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus", "overlay", "children", "onVisibleChange"];
function o2(e, t) {
  var r, n = e.arrow, a = n === void 0 ? !1 : n, o = e.prefixCls, i = o === void 0 ? "rc-dropdown" : o, s = e.transitionName, u = e.animation, l = e.align, c = e.placement, d = c === void 0 ? "bottomLeft" : c, g = e.placements, p = g === void 0 ? n2 : g, h = e.getPopupContainer, f = e.showAction, m = e.hideAction, b = e.overlayClassName, E = e.overlayStyle, y = e.visible, w = e.trigger, S = w === void 0 ? ["hover"] : w, D = e.autoFocus, x = e.overlay, B = e.children, O = e.onVisibleChange, A = ct(e, a2), _ = ee.useState(), P = ae(_, 2), $ = P[0], N = P[1], R = "visible" in e ? y : $, M = ee.useRef(null), F = ee.useRef(null), T = ee.useRef(null);
  ee.useImperativeHandle(t, function() {
    return M.current;
  });
  var k = function(te) {
    N(te), O == null || O(te);
  };
  t2({
    visible: R,
    triggerRef: T,
    onVisibleChange: k,
    autoFocus: D,
    overlayRef: F
  });
  var H = function(te) {
    var re = e.onOverlayClick;
    N(!1), re && re(te);
  }, K = function() {
    return /* @__PURE__ */ ee.createElement(r2, {
      ref: F,
      overlay: x,
      prefixCls: i,
      arrow: a
    });
  }, X = function() {
    return typeof x == "function" ? K : K();
  }, Q = function() {
    var te = e.minOverlayWidthMatchTrigger, re = e.alignPoint;
    return "minOverlayWidthMatchTrigger" in e ? te : !re;
  }, I = function() {
    var te = e.openClassName;
    return te !== void 0 ? te : "".concat(i, "-open");
  }, z = /* @__PURE__ */ ee.cloneElement(B, {
    className: ie((r = B.props) === null || r === void 0 ? void 0 : r.className, R && I()),
    ref: Jn(B) ? Qn(T, B.ref) : void 0
  }), V = m;
  return !V && S.indexOf("contextMenu") !== -1 && (V = ["click"]), /* @__PURE__ */ ee.createElement(vf, We({
    builtinPlacements: p
  }, A, {
    prefixCls: i,
    ref: M,
    popupClassName: ie(b, W({}, "".concat(i, "-show-arrow"), a)),
    popupStyle: E,
    action: S,
    showAction: f,
    hideAction: V,
    popupPlacement: d,
    popupAlign: l,
    popupTransitionName: s,
    popupAnimation: u,
    popupVisible: R,
    stretch: Q() ? "minWidth" : "",
    popup: X(),
    onPopupVisibleChange: k,
    onPopupClick: H,
    getPopupContainer: h
  }), z);
}
const i2 = /* @__PURE__ */ ee.forwardRef(o2);
var o0 = /* @__PURE__ */ v.createContext(null);
function i0(e, t) {
  return e === void 0 ? null : "".concat(e, "-").concat(t);
}
function s0(e) {
  var t = v.useContext(o0);
  return i0(t, e);
}
var s2 = ["children", "locked"], Jr = /* @__PURE__ */ v.createContext(null);
function u2(e, t) {
  var r = G({}, e);
  return Object.keys(t).forEach(function(n) {
    var a = t[n];
    a !== void 0 && (r[n] = a);
  }), r;
}
function gi(e) {
  var t = e.children, r = e.locked, n = ct(e, s2), a = v.useContext(Jr), o = hi(function() {
    return u2(a, n);
  }, [a, n], function(i, s) {
    return !r && (i[0] !== s[0] || !co(i[1], s[1], !0));
  });
  return /* @__PURE__ */ v.createElement(Jr.Provider, {
    value: o
  }, t);
}
var l2 = [], u0 = /* @__PURE__ */ v.createContext(null);
function ou() {
  return v.useContext(u0);
}
var l0 = /* @__PURE__ */ v.createContext(l2);
function wo(e) {
  var t = v.useContext(l0);
  return v.useMemo(function() {
    return e !== void 0 ? [].concat(Ne(t), [e]) : t;
  }, [t, e]);
}
var c0 = /* @__PURE__ */ v.createContext(null), hf = /* @__PURE__ */ v.createContext({});
function dg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (rf(e)) {
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
function c2(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = Ne(e.querySelectorAll("*")).filter(function(n) {
    return dg(n, t);
  });
  return dg(e, t) && r.unshift(e), r;
}
var vc = Be.LEFT, gc = Be.RIGHT, mc = Be.UP, ds = Be.DOWN, vs = Be.ENTER, f0 = Be.ESC, Mo = Be.HOME, jo = Be.END, vg = [mc, ds, vc, gc];
function f2(e, t, r, n) {
  var a, o, i, s, u = "prev", l = "next", c = "children", d = "parent";
  if (e === "inline" && n === vs)
    return {
      inlineTrigger: !0
    };
  var g = (a = {}, W(a, mc, u), W(a, ds, l), a), p = (o = {}, W(o, vc, r ? l : u), W(o, gc, r ? u : l), W(o, ds, c), W(o, vs, c), o), h = (i = {}, W(i, mc, u), W(i, ds, l), W(i, vs, c), W(i, f0, d), W(i, vc, r ? c : d), W(i, gc, r ? d : c), i), f = {
    inline: g,
    horizontal: p,
    vertical: h,
    inlineSub: g,
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
function d2(e) {
  for (var t = e; t; ) {
    if (t.getAttribute("data-menu-list"))
      return t;
    t = t.parentElement;
  }
  return null;
}
function v2(e, t) {
  for (var r = e || document.activeElement; r; ) {
    if (t.has(r))
      return r;
    r = r.parentElement;
  }
  return null;
}
function pf(e, t) {
  var r = c2(e, !0);
  return r.filter(function(n) {
    return t.has(n);
  });
}
function gg(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!e)
    return null;
  var a = pf(e, t), o = a.length, i = a.findIndex(function(s) {
    return r === s;
  });
  return n < 0 ? i === -1 ? i = o - 1 : i -= 1 : n > 0 && (i += 1), i = (i + o) % o, a[i];
}
var hc = function(t, r) {
  var n = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  return t.forEach(function(i) {
    var s = document.querySelector("[data-menu-id='".concat(i0(r, i), "']"));
    s && (n.add(s), o.set(s, i), a.set(i, s));
  }), {
    elements: n,
    key2element: a,
    element2key: o
  };
};
function g2(e, t, r, n, a, o, i, s, u, l) {
  var c = v.useRef(), d = v.useRef();
  d.current = t;
  var g = function() {
    Gt.cancel(c.current);
  };
  return v.useEffect(function() {
    return function() {
      g();
    };
  }, []), function(p) {
    var h = p.which;
    if ([].concat(vg, [vs, f0, Mo, jo]).includes(h)) {
      var f = o(), m = hc(f, n), b = m, E = b.elements, y = b.key2element, w = b.element2key, S = y.get(t), D = v2(S, E), x = w.get(D), B = f2(e, i(x, !0).length === 1, r, h);
      if (!B && h !== Mo && h !== jo)
        return;
      (vg.includes(h) || [Mo, jo].includes(h)) && p.preventDefault();
      var O = function(F) {
        if (F) {
          var T = F, k = F.querySelector("a");
          k != null && k.getAttribute("href") && (T = k);
          var H = w.get(F);
          s(H), g(), c.current = Gt(function() {
            d.current === H && T.focus();
          });
        }
      };
      if ([Mo, jo].includes(h) || B.sibling || !D) {
        var A;
        !D || e === "inline" ? A = a.current : A = d2(D);
        var _, P = pf(A, E);
        h === Mo ? _ = P[0] : h === jo ? _ = P[P.length - 1] : _ = gg(A, E, D, B.offset), O(_);
      } else if (B.inlineTrigger)
        u(x);
      else if (B.offset > 0)
        u(x, !0), g(), c.current = Gt(function() {
          m = hc(f, n);
          var M = D.getAttribute("aria-controls"), F = document.getElementById(M), T = gg(F, m.elements);
          O(T);
        }, 5);
      else if (B.offset < 0) {
        var $ = i(x, !0), N = $[$.length - 2], R = y.get(N);
        u(N, !1), O(R);
      }
    }
    l == null || l(p);
  };
}
function m2(e) {
  Promise.resolve().then(e);
}
var bf = "__RC_UTIL_PATH_SPLIT__", mg = function(t) {
  return t.join(bf);
}, h2 = function(t) {
  return t.split(bf);
}, pc = "rc-menu-more";
function p2() {
  var e = v.useState({}), t = ae(e, 2), r = t[1], n = Je(/* @__PURE__ */ new Map()), a = Je(/* @__PURE__ */ new Map()), o = v.useState([]), i = ae(o, 2), s = i[0], u = i[1], l = Je(0), c = Je(!1), d = function() {
    c.current || r({});
  }, g = rt(function(y, w) {
    process.env.NODE_ENV !== "production" && pt(!n.current.has(y), "Duplicated key '".concat(y, "' used in Menu by path [").concat(w.join(" > "), "]"));
    var S = mg(w);
    a.current.set(S, y), n.current.set(y, S), l.current += 1;
    var D = l.current;
    m2(function() {
      D === l.current && d();
    });
  }, []), p = rt(function(y, w) {
    var S = mg(w);
    a.current.delete(S), n.current.delete(y);
  }, []), h = rt(function(y) {
    u(y);
  }, []), f = rt(function(y, w) {
    var S = n.current.get(y) || "", D = h2(S);
    return w && s.includes(D[0]) && D.unshift(pc), D;
  }, [s]), m = rt(function(y, w) {
    return y.some(function(S) {
      var D = f(S, !0);
      return D.includes(w);
    });
  }, [f]), b = function() {
    var w = Ne(n.current.keys());
    return s.length && w.push(pc), w;
  }, E = rt(function(y) {
    var w = "".concat(n.current.get(y)).concat(bf), S = /* @__PURE__ */ new Set();
    return Ne(a.current.keys()).forEach(function(D) {
      D.startsWith(w) && S.add(a.current.get(D));
    }), S;
  }, []);
  return v.useEffect(function() {
    return function() {
      c.current = !0;
    };
  }, []), {
    // Register
    registerPath: g,
    unregisterPath: p,
    refreshOverflowKeys: h,
    // Util
    isSubPathKey: m,
    getKeyPath: f,
    getKeys: b,
    getSubPathKeys: E
  };
}
function zo(e) {
  var t = v.useRef(e);
  t.current = e;
  var r = v.useCallback(function() {
    for (var n, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(o));
  }, []);
  return e ? r : void 0;
}
var b2 = Math.random().toFixed(5).toString().slice(2), hg = 0;
function y2(e) {
  var t = Qr(e, {
    value: e
  }), r = ae(t, 2), n = r[0], a = r[1];
  return v.useEffect(function() {
    hg += 1;
    var o = process.env.NODE_ENV === "test" ? "test" : "".concat(b2, "-").concat(hg);
    a("rc-menu-uuid-".concat(o));
  }, []), n;
}
function d0(e, t, r, n) {
  var a = v.useContext(Jr), o = a.activeKey, i = a.onActive, s = a.onInactive, u = {
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
function v0(e) {
  var t = v.useContext(Jr), r = t.mode, n = t.rtl, a = t.inlineIndent;
  if (r !== "inline")
    return null;
  var o = e;
  return n ? {
    paddingRight: o * a
  } : {
    paddingLeft: o * a
  };
}
function g0(e) {
  var t = e.icon, r = e.props, n = e.children, a;
  return t === null || t === !1 ? null : (typeof t == "function" ? a = /* @__PURE__ */ v.createElement(t, G({}, r)) : typeof t != "boolean" && (a = t), a || n || null);
}
var C2 = ["item"];
function Ns(e) {
  var t = e.item, r = ct(e, C2);
  return Object.defineProperty(r, "item", {
    get: function() {
      return pt(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), t;
    }
  }), r;
}
var E2 = ["title", "attribute", "elementRef"], w2 = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"], D2 = ["active"], S2 = /* @__PURE__ */ function(e) {
  Ba(r, e);
  var t = bi(r);
  function r() {
    return Cr(this, r), t.apply(this, arguments);
  }
  return Er(r, [{
    key: "render",
    value: function() {
      var a = this.props, o = a.title, i = a.attribute, s = a.elementRef, u = ct(a, E2), l = en(u, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
      return pt(!i, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), /* @__PURE__ */ v.createElement(An.Item, We({}, i, {
        title: typeof o == "string" ? o : void 0
      }, l, {
        ref: s
      }));
    }
  }]), r;
}(v.Component), x2 = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r, n = e.style, a = e.className, o = e.eventKey, i = e.warnKey, s = e.disabled, u = e.itemIcon, l = e.children, c = e.role, d = e.onMouseEnter, g = e.onMouseLeave, p = e.onClick, h = e.onKeyDown, f = e.onFocus, m = ct(e, w2), b = s0(o), E = v.useContext(Jr), y = E.prefixCls, w = E.onItemClick, S = E.disabled, D = E.overflowDisabled, x = E.itemIcon, B = E.selectedKeys, O = E.onActive, A = v.useContext(hf), _ = A._internalRenderMenuItem, P = "".concat(y, "-item"), $ = v.useRef(), N = v.useRef(), R = S || s, M = pi(t, N), F = wo(o);
  process.env.NODE_ENV !== "production" && i && pt(!1, "MenuItem should not leave undefined `key`.");
  var T = function(oe) {
    return {
      key: o,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: Ne(F).reverse(),
      item: $.current,
      domEvent: oe
    };
  }, k = u || x, H = d0(o, R, d, g), K = H.active, X = ct(H, D2), Q = B.includes(o), I = v0(F.length), z = function(oe) {
    if (!R) {
      var ge = T(oe);
      p == null || p(Ns(ge)), w(ge);
    }
  }, V = function(oe) {
    if (h == null || h(oe), oe.which === Be.ENTER) {
      var ge = T(oe);
      p == null || p(Ns(ge)), w(ge);
    }
  }, q = function(oe) {
    O(o), f == null || f(oe);
  }, te = {};
  e.role === "option" && (te["aria-selected"] = Q);
  var re = /* @__PURE__ */ v.createElement(S2, We({
    ref: $,
    elementRef: M,
    role: c === null ? "none" : c || "menuitem",
    tabIndex: s ? null : -1,
    "data-menu-id": D && b ? null : b
  }, m, X, te, {
    component: "li",
    "aria-disabled": s,
    style: G(G({}, I), n),
    className: ie(P, (r = {}, W(r, "".concat(P, "-active"), K), W(r, "".concat(P, "-selected"), Q), W(r, "".concat(P, "-disabled"), R), r), a),
    onClick: z,
    onKeyDown: V,
    onFocus: q
  }), l, /* @__PURE__ */ v.createElement(g0, {
    props: G(G({}, e), {}, {
      isSelected: Q
    }),
    icon: k
  }));
  return _ && (re = _(re, e, {
    selected: Q
  })), re;
});
function O2(e, t) {
  var r = e.eventKey, n = ou(), a = wo(r);
  return v.useEffect(function() {
    if (n)
      return n.registerPath(r, a), function() {
        n.unregisterPath(r, a);
      };
  }, [a]), n ? null : /* @__PURE__ */ v.createElement(x2, We({}, e, {
    ref: t
  }));
}
const iu = /* @__PURE__ */ v.forwardRef(O2);
var B2 = ["className", "children"], A2 = function(t, r) {
  var n = t.className, a = t.children, o = ct(t, B2), i = v.useContext(Jr), s = i.prefixCls, u = i.mode, l = i.rtl;
  return /* @__PURE__ */ v.createElement("ul", We({
    className: ie(s, l && "".concat(s, "-rtl"), "".concat(s, "-sub"), "".concat(s, "-").concat(u === "inline" ? "inline" : "vertical"), n),
    role: "menu"
  }, o, {
    "data-menu-list": !0,
    ref: r
  }), a);
}, yf = /* @__PURE__ */ v.forwardRef(A2);
yf.displayName = "SubMenuList";
function Cf(e, t) {
  return fn(e).map(function(r, n) {
    if (/* @__PURE__ */ v.isValidElement(r)) {
      var a, o, i = r.key, s = (a = (o = r.props) === null || o === void 0 ? void 0 : o.eventKey) !== null && a !== void 0 ? a : i, u = s == null;
      u && (s = "tmp_key-".concat([].concat(Ne(t), [n]).join("-")));
      var l = {
        key: s,
        eventKey: s
      };
      return process.env.NODE_ENV !== "production" && u && (l.warnKey = !0), /* @__PURE__ */ v.cloneElement(r, l);
    }
    return r;
  });
}
var or = {
  adjustX: 1,
  adjustY: 1
}, $2 = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: or
  },
  topRight: {
    points: ["br", "tr"],
    overflow: or
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: or
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: or
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: or
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: or
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: or
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: or
  }
}, F2 = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: or
  },
  topRight: {
    points: ["br", "tr"],
    overflow: or
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: or
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: or
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: or
  },
  rightBottom: {
    points: ["br", "bl"],
    overflow: or
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: or
  },
  leftBottom: {
    points: ["bl", "br"],
    overflow: or
  }
};
function m0(e, t, r) {
  if (t)
    return t;
  if (r)
    return r[e] || r.other;
}
var P2 = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function R2(e) {
  var t = e.prefixCls, r = e.visible, n = e.children, a = e.popup, o = e.popupStyle, i = e.popupClassName, s = e.popupOffset, u = e.disabled, l = e.mode, c = e.onVisibleChange, d = v.useContext(Jr), g = d.getPopupContainer, p = d.rtl, h = d.subMenuOpenDelay, f = d.subMenuCloseDelay, m = d.builtinPlacements, b = d.triggerSubMenuAction, E = d.forceSubMenuRender, y = d.rootClassName, w = d.motion, S = d.defaultMotions, D = v.useState(!1), x = ae(D, 2), B = x[0], O = x[1], A = G(p ? G({}, F2) : G({}, $2), m), _ = P2[l], P = m0(l, w, S), $ = v.useRef(P);
  l !== "inline" && ($.current = P);
  var N = G(G({}, $.current), {}, {
    leavedClassName: "".concat(t, "-hidden"),
    removeOnLeave: !1,
    motionAppear: !0
  }), R = v.useRef();
  return v.useEffect(function() {
    return R.current = Gt(function() {
      O(r);
    }), function() {
      Gt.cancel(R.current);
    };
  }, [r]), /* @__PURE__ */ v.createElement(vf, {
    prefixCls: t,
    popupClassName: ie("".concat(t, "-popup"), W({}, "".concat(t, "-rtl"), p), i, y),
    stretch: l === "horizontal" ? "minWidth" : null,
    getPopupContainer: g,
    builtinPlacements: A,
    popupPlacement: _,
    popupVisible: B,
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
    popupMotion: N,
    fresh: !0
  }, n);
}
function T2(e) {
  var t = e.id, r = e.open, n = e.keyPath, a = e.children, o = "inline", i = v.useContext(Jr), s = i.prefixCls, u = i.forceSubMenuRender, l = i.motion, c = i.defaultMotions, d = i.mode, g = v.useRef(!1);
  g.current = d === o;
  var p = v.useState(!g.current), h = ae(p, 2), f = h[0], m = h[1], b = g.current ? r : !1;
  v.useEffect(function() {
    g.current && m(!1);
  }, [d]);
  var E = G({}, m0(o, l, c));
  n.length > 1 && (E.motionAppear = !1);
  var y = E.onVisibleChanged;
  return E.onVisibleChanged = function(w) {
    return !g.current && !w && m(!0), y == null ? void 0 : y(w);
  }, f ? null : /* @__PURE__ */ v.createElement(gi, {
    mode: o,
    locked: !g.current
  }, /* @__PURE__ */ v.createElement(Eo, We({
    visible: b
  }, E, {
    forceRender: u,
    removeOnLeave: !1,
    leavedClassName: "".concat(s, "-hidden")
  }), function(w) {
    var S = w.className, D = w.style;
    return /* @__PURE__ */ v.createElement(yf, {
      id: t,
      className: S,
      style: D
    }, a);
  }));
}
var N2 = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "popupStyle", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"], I2 = ["active"], M2 = function(t) {
  var r, n = t.style, a = t.className, o = t.title, i = t.eventKey, s = t.warnKey, u = t.disabled, l = t.internalPopupClose, c = t.children, d = t.itemIcon, g = t.expandIcon, p = t.popupClassName, h = t.popupOffset, f = t.popupStyle, m = t.onClick, b = t.onMouseEnter, E = t.onMouseLeave, y = t.onTitleClick, w = t.onTitleMouseEnter, S = t.onTitleMouseLeave, D = ct(t, N2), x = s0(i), B = v.useContext(Jr), O = B.prefixCls, A = B.mode, _ = B.openKeys, P = B.disabled, $ = B.overflowDisabled, N = B.activeKey, R = B.selectedKeys, M = B.itemIcon, F = B.expandIcon, T = B.onItemClick, k = B.onOpenChange, H = B.onActive, K = v.useContext(hf), X = K._internalRenderSubMenuItem, Q = v.useContext(c0), I = Q.isSubPathKey, z = wo(), V = "".concat(O, "-submenu"), q = P || u, te = v.useRef(), re = v.useRef();
  process.env.NODE_ENV !== "production" && s && pt(!1, "SubMenu should not leave undefined `key`.");
  var le = d ?? M, oe = g ?? F, ge = _.includes(i), ce = !$ && ge, Y = I(R, i), pe = d0(i, q, w, S), Se = pe.active, ye = ct(pe, I2), we = v.useState(!1), de = ae(we, 2), Ee = de[0], he = de[1], me = function(ot) {
    q || he(ot);
  }, be = function(ot) {
    me(!0), b == null || b({
      key: i,
      domEvent: ot
    });
  }, Ie = function(ot) {
    me(!1), E == null || E({
      key: i,
      domEvent: ot
    });
  }, Re = v.useMemo(function() {
    return Se || (A !== "inline" ? Ee || I([N], i) : !1);
  }, [A, Se, N, Ee, i, I]), je = v0(z.length), bt = function(ot) {
    q || (y == null || y({
      key: i,
      domEvent: ot
    }), A === "inline" && k(i, !ge));
  }, _e = zo(function(Ze) {
    m == null || m(Ns(Ze)), T(Ze);
  }), Ce = function(ot) {
    A !== "inline" && k(i, ot);
  }, ke = function() {
    H(i);
  }, ze = x && "".concat(x, "-popup"), _t = /* @__PURE__ */ v.createElement("div", We({
    role: "menuitem",
    style: je,
    className: "".concat(V, "-title"),
    tabIndex: q ? null : -1,
    ref: te,
    title: typeof o == "string" ? o : null,
    "data-menu-id": $ && x ? null : x,
    "aria-expanded": ce,
    "aria-haspopup": !0,
    "aria-controls": ze,
    "aria-disabled": q,
    onClick: bt,
    onFocus: ke
  }, ye), o, /* @__PURE__ */ v.createElement(g0, {
    icon: A !== "horizontal" ? oe : void 0,
    props: G(G({}, t), {}, {
      isOpen: ce,
      // [Legacy] Not sure why need this mark
      isSubMenu: !0
    })
  }, /* @__PURE__ */ v.createElement("i", {
    className: "".concat(V, "-arrow")
  }))), et = v.useRef(A);
  if (A !== "inline" && z.length > 1 ? et.current = "vertical" : et.current = A, !$) {
    var xt = et.current;
    _t = /* @__PURE__ */ v.createElement(R2, {
      mode: xt,
      prefixCls: V,
      visible: !l && ce && A !== "inline",
      popupClassName: p,
      popupOffset: h,
      popupStyle: f,
      popup: /* @__PURE__ */ v.createElement(
        gi,
        {
          mode: xt === "horizontal" ? "vertical" : xt
        },
        /* @__PURE__ */ v.createElement(yf, {
          id: ze,
          ref: re
        }, c)
      ),
      disabled: q,
      onVisibleChange: Ce
    }, _t);
  }
  var mt = /* @__PURE__ */ v.createElement(An.Item, We({
    role: "none"
  }, D, {
    component: "li",
    style: n,
    className: ie(V, "".concat(V, "-").concat(A), a, (r = {}, W(r, "".concat(V, "-open"), ce), W(r, "".concat(V, "-active"), Re), W(r, "".concat(V, "-selected"), Y), W(r, "".concat(V, "-disabled"), q), r)),
    onMouseEnter: be,
    onMouseLeave: Ie
  }), _t, !$ && /* @__PURE__ */ v.createElement(T2, {
    id: ze,
    open: ce,
    keyPath: z
  }, c));
  return X && (mt = X(mt, t, {
    selected: Y,
    active: Re,
    open: ce,
    disabled: q
  })), /* @__PURE__ */ v.createElement(gi, {
    onItemClick: _e,
    mode: A === "horizontal" ? "vertical" : A,
    itemIcon: le,
    expandIcon: oe
  }, mt);
};
function su(e) {
  var t = e.eventKey, r = e.children, n = wo(t), a = Cf(r, n), o = ou();
  v.useEffect(function() {
    if (o)
      return o.registerPath(t, n), function() {
        o.unregisterPath(t, n);
      };
  }, [n]);
  var i;
  return o ? i = a : i = /* @__PURE__ */ v.createElement(M2, e, a), /* @__PURE__ */ v.createElement(l0.Provider, {
    value: n
  }, i);
}
var j2 = ["className", "title", "eventKey", "children"], _2 = ["children"], L2 = function(t) {
  var r = t.className, n = t.title;
  t.eventKey;
  var a = t.children, o = ct(t, j2), i = v.useContext(Jr), s = i.prefixCls, u = "".concat(s, "-item-group");
  return /* @__PURE__ */ v.createElement("li", We({
    role: "presentation"
  }, o, {
    onClick: function(c) {
      return c.stopPropagation();
    },
    className: ie(u, r)
  }), /* @__PURE__ */ v.createElement("div", {
    role: "presentation",
    className: "".concat(u, "-title"),
    title: typeof n == "string" ? n : void 0
  }, n), /* @__PURE__ */ v.createElement("ul", {
    role: "group",
    className: "".concat(u, "-list")
  }, a));
};
function uu(e) {
  var t = e.children, r = ct(e, _2), n = wo(r.eventKey), a = Cf(t, n), o = ou();
  return o ? a : /* @__PURE__ */ v.createElement(L2, en(r, ["warnKey"]), a);
}
function Ef(e) {
  var t = e.className, r = e.style, n = v.useContext(Jr), a = n.prefixCls, o = ou();
  return o ? null : /* @__PURE__ */ v.createElement("li", {
    role: "separator",
    className: ie("".concat(a, "-item-divider"), t),
    style: r
  });
}
var k2 = ["label", "children", "key", "type"];
function bc(e) {
  return (e || []).map(function(t, r) {
    if (t && st(t) === "object") {
      var n = t, a = n.label, o = n.children, i = n.key, s = n.type, u = ct(n, k2), l = i ?? "tmp-".concat(r);
      return o || s === "group" ? s === "group" ? /* @__PURE__ */ v.createElement(uu, We({
        key: l
      }, u, {
        title: a
      }), bc(o)) : /* @__PURE__ */ v.createElement(su, We({
        key: l
      }, u, {
        title: a
      }), bc(o)) : s === "divider" ? /* @__PURE__ */ v.createElement(Ef, We({
        key: l
      }, u)) : /* @__PURE__ */ v.createElement(iu, We({
        key: l
      }, u), a);
    }
    return null;
  }).filter(function(t) {
    return t;
  });
}
function z2(e, t, r) {
  var n = e;
  return t && (n = bc(t)), Cf(n, r);
}
var V2 = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem"], Ua = [], H2 = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r, n, a = e, o = a.prefixCls, i = o === void 0 ? "rc-menu" : o, s = a.rootClassName, u = a.style, l = a.className, c = a.tabIndex, d = c === void 0 ? 0 : c, g = a.items, p = a.children, h = a.direction, f = a.id, m = a.mode, b = m === void 0 ? "vertical" : m, E = a.inlineCollapsed, y = a.disabled, w = a.disabledOverflow, S = a.subMenuOpenDelay, D = S === void 0 ? 0.1 : S, x = a.subMenuCloseDelay, B = x === void 0 ? 0.1 : x, O = a.forceSubMenuRender, A = a.defaultOpenKeys, _ = a.openKeys, P = a.activeKey, $ = a.defaultActiveFirst, N = a.selectable, R = N === void 0 ? !0 : N, M = a.multiple, F = M === void 0 ? !1 : M, T = a.defaultSelectedKeys, k = a.selectedKeys, H = a.onSelect, K = a.onDeselect, X = a.inlineIndent, Q = X === void 0 ? 24 : X, I = a.motion, z = a.defaultMotions, V = a.triggerSubMenuAction, q = V === void 0 ? "hover" : V, te = a.builtinPlacements, re = a.itemIcon, le = a.expandIcon, oe = a.overflowedIndicator, ge = oe === void 0 ? "..." : oe, ce = a.overflowedIndicatorPopupClassName, Y = a.getPopupContainer, pe = a.onClick, Se = a.onOpenChange, ye = a.onKeyDown, we = a.openAnimation, de = a.openTransitionName, Ee = a._internalRenderMenuItem, he = a._internalRenderSubMenuItem, me = ct(a, V2), be = v.useMemo(function() {
    return z2(p, g, Ua);
  }, [p, g]), Ie = v.useState(!1), Re = ae(Ie, 2), je = Re[0], bt = Re[1], _e = v.useRef(), Ce = y2(f), ke = h === "rtl";
  process.env.NODE_ENV !== "production" && pt(!we && !de, "`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.");
  var ze = Qr(A, {
    value: _,
    postState: function(ft) {
      return ft || Ua;
    }
  }), _t = ae(ze, 2), et = _t[0], xt = _t[1], mt = function(ft) {
    var ht = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    function Zt() {
      xt(ft), Se == null || Se(ft);
    }
    ht ? ob(Zt) : Zt();
  }, Ze = v.useState(et), ot = ae(Ze, 2), Wt = ot[0], Et = ot[1], se = v.useRef(!1), Ae = v.useMemo(function() {
    return (b === "inline" || b === "vertical") && E ? ["vertical", E] : [b, !1];
  }, [b, E]), Le = ae(Ae, 2), tt = Le[0], Qe = Le[1], $e = tt === "inline", Ye = v.useState(tt), xe = ae(Ye, 2), Pe = xe[0], it = xe[1], Nt = v.useState(Qe), Kt = ae(Nt, 2), $t = Kt[0], tn = Kt[1];
  v.useEffect(function() {
    it(tt), tn(Qe), se.current && ($e ? xt(Wt) : mt(Ua));
  }, [tt, Qe]);
  var rn = v.useState(0), Dr = ae(rn, 2), hr = Dr[0], j = Dr[1], ne = hr >= be.length - 1 || Pe !== "horizontal" || w;
  v.useEffect(function() {
    $e && Et(et);
  }, [et]), v.useEffect(function() {
    return se.current = !0, function() {
      se.current = !1;
    };
  }, []);
  var ue = p2(), Te = ue.registerPath, Ue = ue.unregisterPath, at = ue.refreshOverflowKeys, qe = ue.isSubPathKey, Ve = ue.getKeyPath, Dt = ue.getKeys, wt = ue.getSubPathKeys, Xe = v.useMemo(function() {
    return {
      registerPath: Te,
      unregisterPath: Ue
    };
  }, [Te, Ue]), qt = v.useMemo(function() {
    return {
      isSubPathKey: qe
    };
  }, [qe]);
  v.useEffect(function() {
    at(ne ? Ua : be.slice(hr + 1).map(function(St) {
      return St.key;
    }));
  }, [hr, ne]);
  var Tr = Qr(P || $ && ((r = be[0]) === null || r === void 0 ? void 0 : r.key), {
    value: P
  }), nn = ae(Tr, 2), Vt = nn[0], Vr = nn[1], Fa = zo(function(St) {
    Vr(St);
  }), So = zo(function() {
    Vr(void 0);
  });
  bo(t, function() {
    return {
      list: _e.current,
      focus: function(ft) {
        var ht, Zt = Dt(), Qt = hc(Zt, Ce), In = Qt.elements, Mn = Qt.key2element, xo = Qt.element2key, Ta = pf(_e.current, In), aa = Vt ?? (Ta[0] ? xo.get(Ta[0]) : (ht = be.find(function(Na) {
          return !Na.props.disabled;
        })) === null || ht === void 0 ? void 0 : ht.key), pn = Mn.get(aa);
        if (aa && pn) {
          var ar;
          pn == null || (ar = pn.focus) === null || ar === void 0 || ar.call(pn, ft);
        }
      }
    };
  });
  var vn = Qr(T || [], {
    value: k,
    // Legacy convert key to array
    postState: function(ft) {
      return Array.isArray(ft) ? ft : ft == null ? Ua : [ft];
    }
  }), na = ae(vn, 2), Hr = na[0], Wr = na[1], gn = function(ft) {
    if (R) {
      var ht = ft.key, Zt = Hr.includes(ht), Qt;
      F ? Zt ? Qt = Hr.filter(function(Mn) {
        return Mn !== ht;
      }) : Qt = [].concat(Ne(Hr), [ht]) : Qt = [ht], Wr(Qt);
      var In = G(G({}, ft), {}, {
        selectedKeys: Qt
      });
      Zt ? K == null || K(In) : H == null || H(In);
    }
    !F && et.length && Pe !== "inline" && mt(Ua);
  }, Nn = zo(function(St) {
    pe == null || pe(Ns(St)), gn(St);
  }), mn = zo(function(St, ft) {
    var ht = et.filter(function(Qt) {
      return Qt !== St;
    });
    if (ft)
      ht.push(St);
    else if (Pe !== "inline") {
      var Zt = wt(St);
      ht = ht.filter(function(Qt) {
        return !Zt.has(Qt);
      });
    }
    co(et, ht, !0) || mt(ht, !0);
  }), Kr = function(ft, ht) {
    var Zt = ht ?? !et.includes(ft);
    mn(ft, Zt);
  }, Pa = g2(Pe, Vt, ke, Ce, _e, Dt, Ve, Vr, Kr, ye);
  v.useEffect(function() {
    bt(!0);
  }, []);
  var hn = v.useMemo(function() {
    return {
      _internalRenderMenuItem: Ee,
      _internalRenderSubMenuItem: he
    };
  }, [Ee, he]), an = Pe !== "horizontal" || w ? be : (
    // Need wrap for overflow dropdown that do not response for open
    be.map(function(St, ft) {
      return (
        // Always wrap provider to avoid sub node re-mount
        /* @__PURE__ */ v.createElement(gi, {
          key: St.key,
          overflowDisabled: ft > hr
        }, St)
      );
    })
  ), Ra = /* @__PURE__ */ v.createElement(An, We({
    id: f,
    ref: _e,
    prefixCls: "".concat(i, "-overflow"),
    component: "ul",
    itemComponent: iu,
    className: ie(i, "".concat(i, "-root"), "".concat(i, "-").concat(Pe), l, (n = {}, W(n, "".concat(i, "-inline-collapsed"), $t), W(n, "".concat(i, "-rtl"), ke), n), s),
    dir: h,
    style: u,
    role: "menu",
    tabIndex: d,
    data: an,
    renderRawItem: function(ft) {
      return ft;
    },
    renderRawRest: function(ft) {
      var ht = ft.length, Zt = ht ? be.slice(-ht) : null;
      return /* @__PURE__ */ v.createElement(su, {
        eventKey: pc,
        title: ge,
        disabled: ne,
        internalPopupClose: ht === 0,
        popupClassName: ce
      }, Zt);
    },
    maxCount: Pe !== "horizontal" || w ? An.INVALIDATE : An.RESPONSIVE,
    ssr: "full",
    "data-menu-list": !0,
    onVisibleChange: function(ft) {
      j(ft);
    },
    onKeyDown: Pa
  }, me));
  return /* @__PURE__ */ v.createElement(hf.Provider, {
    value: hn
  }, /* @__PURE__ */ v.createElement(o0.Provider, {
    value: Ce
  }, /* @__PURE__ */ v.createElement(gi, {
    prefixCls: i,
    rootClassName: s,
    mode: Pe,
    openKeys: et,
    rtl: ke,
    disabled: y,
    motion: je ? I : null,
    defaultMotions: je ? z : null,
    activeKey: Vt,
    onActive: Fa,
    onInactive: So,
    selectedKeys: Hr,
    inlineIndent: Q,
    subMenuOpenDelay: D,
    subMenuCloseDelay: B,
    forceSubMenuRender: O,
    builtinPlacements: te,
    triggerSubMenuAction: q,
    getPopupContainer: Y,
    itemIcon: re,
    expandIcon: le,
    onItemClick: Nn,
    onOpenChange: mn
  }, /* @__PURE__ */ v.createElement(c0.Provider, {
    value: qt
  }, Ra), /* @__PURE__ */ v.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": !0
  }, /* @__PURE__ */ v.createElement(u0.Provider, {
    value: Xe
  }, be)))));
}), xi = H2;
xi.Item = iu;
xi.SubMenu = su;
xi.ItemGroup = uu;
xi.Divider = Ef;
var W2 = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "bars", theme: "outlined" };
const K2 = W2;
var q2 = function(t, r) {
  return /* @__PURE__ */ v.createElement(dn, We({}, t, {
    ref: r,
    icon: K2
  }));
}, h0 = /* @__PURE__ */ v.forwardRef(q2);
process.env.NODE_ENV !== "production" && (h0.displayName = "BarsOutlined");
const U2 = h0;
var G2 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" };
const X2 = G2;
var Y2 = function(t, r) {
  return /* @__PURE__ */ v.createElement(dn, We({}, t, {
    ref: r,
    icon: X2
  }));
}, p0 = /* @__PURE__ */ v.forwardRef(Y2);
process.env.NODE_ENV !== "production" && (p0.displayName = "LeftOutlined");
const pg = p0, Z2 = (e) => !isNaN(parseFloat(e)) && isFinite(e), Q2 = /* @__PURE__ */ v.createContext({
  siderHook: {
    addSider: () => null,
    removeSider: () => null
  }
});
var J2 = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const bg = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px"
}, wf = /* @__PURE__ */ v.createContext({}), eP = /* @__PURE__ */ (() => {
  let e = 0;
  return function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return e += 1, `${t}${e}`;
  };
})(), tP = /* @__PURE__ */ v.forwardRef((e, t) => {
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
    collapsedWidth: g = 80,
    zeroWidthTriggerStyle: p,
    breakpoint: h,
    onCollapse: f,
    onBreakpoint: m
  } = e, b = J2(e, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]), {
    siderHook: E
  } = Rt(Q2), [y, w] = ir("collapsed" in e ? e.collapsed : i), [S, D] = ir(!1);
  zt(() => {
    "collapsed" in e && w(e.collapsed);
  }, [e.collapsed]);
  const x = ($, N) => {
    "collapsed" in e || w($), f == null || f($, N);
  }, B = Je();
  B.current = ($) => {
    D($.matches), m == null || m($.matches), y !== $.matches && x($.matches, "responsive");
  }, zt(() => {
    function $(R) {
      return B.current(R);
    }
    let N;
    if (typeof window < "u") {
      const {
        matchMedia: R
      } = window;
      if (R && h && h in bg) {
        N = R(`screen and (max-width: ${bg[h]})`);
        try {
          N.addEventListener("change", $);
        } catch {
          N.addListener($);
        }
        $(N);
      }
    }
    return () => {
      try {
        N == null || N.removeEventListener("change", $);
      } catch {
        N == null || N.removeListener($);
      }
    };
  }, [h]), zt(() => {
    const $ = eP("ant-sider-");
    return E.addSider($), () => E.removeSider($);
  }, []);
  const O = () => {
    x(!y, "clickTrigger");
  }, {
    getPrefixCls: A
  } = Rt(Tt), _ = () => {
    const $ = A("layout-sider", r), N = en(b, ["collapsed"]), R = y ? g : d, M = Z2(R) ? `${R}px` : String(R), F = parseFloat(String(g || 0)) === 0 ? /* @__PURE__ */ v.createElement("span", {
      onClick: O,
      className: ie(`${$}-zero-width-trigger`, `${$}-zero-width-trigger-${c ? "right" : "left"}`),
      style: p
    }, a || /* @__PURE__ */ v.createElement(U2, null)) : null, H = {
      expanded: c ? /* @__PURE__ */ v.createElement(dc, null) : /* @__PURE__ */ v.createElement(pg, null),
      collapsed: c ? /* @__PURE__ */ v.createElement(pg, null) : /* @__PURE__ */ v.createElement(dc, null)
    }[y ? "collapsed" : "expanded"], K = a !== null ? F || /* @__PURE__ */ v.createElement("div", {
      className: `${$}-trigger`,
      onClick: O,
      style: {
        width: M
      }
    }, a || H) : null, X = Object.assign(Object.assign({}, u), {
      flex: `0 0 ${M}`,
      maxWidth: M,
      minWidth: M,
      width: M
    }), Q = ie($, `${$}-${s}`, {
      [`${$}-collapsed`]: !!y,
      [`${$}-has-trigger`]: l && a !== null && !F,
      [`${$}-below`]: !!S,
      [`${$}-zero-width`]: parseFloat(M) === 0
    }, n);
    return /* @__PURE__ */ v.createElement("aside", Object.assign({
      className: Q
    }, N, {
      style: X,
      ref: t
    }), /* @__PURE__ */ v.createElement("div", {
      className: `${$}-children`
    }, o), l || S && F ? K : null);
  }, P = v.useMemo(() => ({
    siderCollapsed: y
  }), [y]);
  return /* @__PURE__ */ v.createElement(wf.Provider, {
    value: P
  }, _());
});
process.env.NODE_ENV !== "production" && (tP.displayName = "Sider");
var rP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "ellipsis", theme: "outlined" };
const nP = rP;
var aP = function(t, r) {
  return /* @__PURE__ */ v.createElement(dn, We({}, t, {
    ref: r,
    icon: nP
  }));
}, b0 = /* @__PURE__ */ v.forwardRef(aP);
process.env.NODE_ENV !== "production" && (b0.displayName = "EllipsisOutlined");
const y0 = b0;
var oP = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const iP = (e) => {
  const {
    prefixCls: t,
    className: r,
    dashed: n
  } = e, a = oP(e, ["prefixCls", "className", "dashed"]), {
    getPrefixCls: o
  } = v.useContext(Tt), i = o("menu", t), s = ie({
    [`${i}-item-divider-dashed`]: !!n
  }, r);
  return /* @__PURE__ */ v.createElement(Ef, Object.assign({
    className: s
  }, a));
}, C0 = iP, sP = /* @__PURE__ */ zr({
  prefixCls: "",
  firstLevel: !0,
  inlineCollapsed: !1
}), Is = sP, uP = (e) => {
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
  } = v.useContext(Is), g = (E) => {
    const y = /* @__PURE__ */ v.createElement("span", {
      className: `${s}-title-content`
    }, n);
    return (!a || Zn(n) && n.type === "span") && n && E && u && typeof n == "string" ? /* @__PURE__ */ v.createElement("div", {
      className: `${s}-inline-collapsed-noicon`
    }, n.charAt(0)) : y;
  }, {
    siderCollapsed: p
  } = v.useContext(wf);
  let h = o;
  typeof o > "u" ? h = u ? n : "" : o === !1 && (h = "");
  const f = {
    title: h
  };
  !p && !d && (f.title = null, f.open = !1);
  const m = fn(n).length;
  let b = /* @__PURE__ */ v.createElement(iu, Object.assign({}, en(e, ["title", "icon", "danger"]), {
    className: ie({
      [`${s}-item-danger`]: i,
      [`${s}-item-only-child`]: (a ? m + 1 : m) === 1
    }, r),
    title: typeof o == "string" ? o : void 0
  }), ra(a, {
    className: ie(Zn(a) ? (t = a.props) === null || t === void 0 ? void 0 : t.className : "", `${s}-item-icon`)
  }), g(d));
  return c || (b = /* @__PURE__ */ v.createElement(Ts, Object.assign({}, f, {
    placement: l === "rtl" ? "left" : "right",
    overlayClassName: `${s}-inline-collapsed-tooltip`
  }), b)), b;
}, E0 = uP, lP = (e) => {
  var t;
  const {
    popupClassName: r,
    icon: n,
    title: a,
    theme: o
  } = e, i = v.useContext(Is), {
    prefixCls: s,
    inlineCollapsed: u,
    theme: l
  } = i, c = wo();
  let d;
  if (!n)
    d = u && !c.length && a && typeof a == "string" ? /* @__PURE__ */ v.createElement("div", {
      className: `${s}-inline-collapsed-noicon`
    }, a.charAt(0)) : /* @__PURE__ */ v.createElement("span", {
      className: `${s}-title-content`
    }, a);
  else {
    const h = Zn(a) && a.type === "span";
    d = /* @__PURE__ */ v.createElement(v.Fragment, null, ra(n, {
      className: ie(Zn(n) ? (t = n.props) === null || t === void 0 ? void 0 : t.className : "", `${s}-item-icon`)
    }), h ? a : /* @__PURE__ */ v.createElement("span", {
      className: `${s}-title-content`
    }, a));
  }
  const g = v.useMemo(() => Object.assign(Object.assign({}, i), {
    firstLevel: !1
  }), [i]), [p] = tf("Menu");
  return /* @__PURE__ */ v.createElement(Is.Provider, {
    value: g
  }, /* @__PURE__ */ v.createElement(su, Object.assign({}, en(e, ["icon"]), {
    title: d,
    popupClassName: ie(s, r, `${s}-${o || l}`),
    popupStyle: {
      zIndex: p
    }
  })));
}, w0 = lP;
var cP = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function yc(e) {
  return (e || []).map((t, r) => {
    if (t && typeof t == "object") {
      const n = t, {
        label: a,
        children: o,
        key: i,
        type: s
      } = n, u = cP(n, ["label", "children", "key", "type"]), l = i ?? `tmp-${r}`;
      return o || s === "group" ? s === "group" ? /* @__PURE__ */ v.createElement(uu, Object.assign({
        key: l
      }, u, {
        title: a
      }), yc(o)) : /* @__PURE__ */ v.createElement(w0, Object.assign({
        key: l
      }, u, {
        title: a
      }), yc(o)) : s === "divider" ? /* @__PURE__ */ v.createElement(C0, Object.assign({
        key: l
      }, u)) : /* @__PURE__ */ v.createElement(E0, Object.assign({
        key: l
      }, u), a);
    }
    return null;
  }).filter((t) => t);
}
function fP(e) {
  return v.useMemo(() => e && yc(e), [e]);
}
var dP = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Ms = /* @__PURE__ */ v.createContext(null), vP = /* @__PURE__ */ v.forwardRef((e, t) => {
  const {
    children: r
  } = e, n = dP(e, ["children"]), a = v.useContext(Ms), o = v.useMemo(() => Object.assign(Object.assign({}, a), n), [
    a,
    n.prefixCls,
    // restProps.expandIcon, Not mark as deps since this is a ReactNode
    n.mode,
    n.selectable,
    n.rootClassName
    // restProps.validator, Not mark as deps since this is a function
  ]), i = ED(r), s = pi(t, i ? r.ref : null);
  return /* @__PURE__ */ v.createElement(Ms.Provider, {
    value: o
  }, /* @__PURE__ */ v.createElement(Dp, null, i ? /* @__PURE__ */ v.cloneElement(r, {
    ref: s
  }) : r));
}), gP = (e) => {
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
      borderBottom: `${De(o)} ${i} ${a}`,
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
}, mP = (e) => {
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
          transform: `rotate(-45deg) translateY(${De(n(r).mul(-1).equal())})`
        },
        "&::after": {
          transform: `rotate(45deg) translateY(${De(r)})`
        }
      }
    }
  };
}, yg = (e) => Object.assign({}, Zc(e)), Cg = (e, t) => {
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
    motionDurationSlow: g,
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
    dangerItemActiveBg: B,
    dangerItemSelectedBg: O,
    // Bg
    popupBg: A,
    itemHoverBg: _,
    itemActiveBg: P,
    menuSubMenuBg: $,
    // Horizontal
    horizontalItemSelectedColor: N,
    horizontalItemSelectedBg: R,
    horizontalItemBorderRadius: M,
    horizontalItemHoverBg: F
  } = e;
  return {
    [`${r}-${t}, ${r}-${t} > ${r}`]: {
      color: n,
      background: i,
      [`&${r}-root:focus-visible`]: Object.assign({}, yg(e)),
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
            backgroundColor: _
          },
          "&:active": {
            backgroundColor: P
          }
        },
        [`${r}-submenu-title`]: {
          "&:hover": {
            backgroundColor: _
          },
          "&:active": {
            backgroundColor: P
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
          background: B
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
        [`&:not(${r}-item-disabled):focus-visible`]: Object.assign({}, yg(e))
      },
      [`&${r}-submenu > ${r}`]: {
        backgroundColor: $
      },
      // ===== 设置浮层的颜色 =======
      // ！dark 模式会被popupBg 会被rest 为 darkPopupBg
      [`&${r}-popup > ${r}`]: {
        backgroundColor: A
      },
      [`&${r}-submenu-popup > ${r}`]: {
        backgroundColor: A
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
            borderBottom: `${De(l)} solid transparent`,
            transition: `border-color ${g} ${p}`,
            content: '""'
          },
          "&:hover, &-active, &-open": {
            background: F,
            "&::after": {
              borderBottomWidth: l,
              borderBottomColor: N
            }
          },
          "&-selected": {
            color: N,
            backgroundColor: R,
            "&:hover": {
              backgroundColor: R
            },
            "&::after": {
              borderBottomWidth: l,
              borderBottomColor: N
            }
          }
        }
      }),
      // ================== Inline & Vertical ===================
      //
      [`&${r}-root`]: {
        [`&${r}-inline, &${r}-vertical`]: {
          borderInlineEnd: `${De(d)} ${E} ${y}`
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
            borderInlineEnd: `${De(c)} solid ${a}`,
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
}, Eg = (e) => {
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
      lineHeight: De(r),
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
      lineHeight: De(r)
    },
    [`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]: {
      paddingInlineEnd: l
    }
  };
}, hP = (e) => {
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
    motionDurationSlow: g,
    paddingXS: p,
    boxShadowSecondary: h,
    collapsedWidth: f,
    collapsedIconSize: m
  } = e, b = {
    height: n,
    lineHeight: De(n),
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
        }, Eg(e))
      },
      [`${t}-submenu-popup`]: {
        [`${t}-vertical`]: Object.assign(Object.assign({}, Eg(e)), {
          boxShadow: h
        })
      }
    },
    // Vertical only
    {
      [`${t}-submenu-popup ${t}-vertical${t}-sub`]: {
        minWidth: o,
        maxHeight: `calc(100vh - ${De(e.calc(i).mul(2.5).equal())})`,
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
            transition: [`border-color ${g}`, `background ${g}`, `padding ${s} ${u}`].join(","),
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
          paddingInline: `calc(50% - ${De(e.calc(d).div(2).equal())} - ${De(c)})`,
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
            lineHeight: De(n),
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
        [`${t}-item-group-title`]: Object.assign(Object.assign({}, Qx), {
          paddingInline: p
        })
      }
    }
  ];
}, wg = (e) => {
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
      [`${t}-item-icon`]: Object.assign({}, Wh()),
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
}, Dg = (e) => {
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
          transform: `rotate(45deg) translateY(${De(e.calc(i).mul(-1).equal())})`
        },
        "&::after": {
          transform: `rotate(-45deg) translateY(${De(i)})`
        }
      }
    }
  };
}, pP = (e) => {
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
    borderRadiusLG: g,
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
        [`${r}`]: Object.assign(Object.assign({}, Vl()), {
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
      [r]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Gn(e)), Vl()), {
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
          padding: `${De(s)} ${De(u)}`,
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
      }), wg(e)), {
        [`${r}-item-group`]: {
          [`${r}-item-group-list`]: {
            margin: 0,
            padding: 0,
            [`${r}-item, ${r}-submenu-title`]: {
              paddingInline: `${De(e.calc(n).mul(2).equal())} ${De(u)}`
            }
          }
        },
        // ======================= Sub Menu =======================
        "&-submenu": {
          "&-popup": {
            position: "absolute",
            zIndex: d,
            borderRadius: g,
            boxShadow: "none",
            transformOrigin: "0 0",
            [`&${r}-submenu`]: {
              background: "transparent"
            },
            // https://github.com/ant-design/ant-design/issues/13955
            "&::before": {
              position: "absolute",
              inset: `${De(b)} 0 0`,
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
            borderRadius: g
          }, wg(e)), Dg(e)), {
            [`${r}-item, ${r}-submenu > ${r}-submenu-title`]: {
              borderRadius: p
            },
            [`${r}-submenu-title::after`]: {
              transition: `transform ${a} ${i}`
            }
          })
        }
      }), Dg(e)), {
        [`&-inline-collapsed ${r}-submenu-arrow,
        &-inline ${r}-submenu-arrow`]: {
          // ↓
          "&::before": {
            transform: `rotate(-45deg) translateX(${De(f)})`
          },
          "&::after": {
            transform: `rotate(45deg) translateX(${De(e.calc(f).mul(-1).equal())})`
          }
        },
        [`${r}-submenu-open${r}-submenu-inline > ${r}-submenu-title > ${r}-submenu-arrow`]: {
          // ↑
          transform: `translateY(${De(e.calc(h).mul(0.2).mul(-1).equal())})`,
          "&::after": {
            transform: `rotate(-45deg) translateX(${De(e.calc(f).mul(-1).equal())})`
          },
          "&::before": {
            transform: `rotate(45deg) translateX(${De(f)})`
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
}, bP = (e) => {
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
    colorFillContent: g,
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
    fontSizeLG: B,
    colorTextLightSolid: O,
    colorErrorHover: A
  } = e, _ = (t = e.activeBarWidth) !== null && t !== void 0 ? t : 0, P = (r = e.activeBarBorderWidth) !== null && r !== void 0 ? r : p, $ = (n = e.itemMarginInline) !== null && n !== void 0 ? n : e.marginXXS, N = new rr(O).setAlpha(0.65).toRgbString();
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
    colorItemBgActive: g,
    itemActiveBg: f,
    colorSubItemBg: d,
    subMenuItemBg: d,
    colorItemBgSelected: f,
    itemSelectedBg: f,
    colorItemBgSelectedHorizontal: "transparent",
    horizontalItemSelectedBg: "transparent",
    colorActiveBarWidth: 0,
    activeBarWidth: _,
    colorActiveBarHeight: h,
    activeBarHeight: h,
    colorActiveBarBorderSize: p,
    activeBarBorderWidth: P,
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
    collapsedIconSize: B,
    groupTitleFontSize: D,
    // Disabled
    darkItemDisabledColor: new rr(O).setAlpha(0.25).toRgbString(),
    // Dark
    darkItemColor: N,
    darkDangerItemColor: o,
    darkItemBg: "#001529",
    darkPopupBg: "#001529",
    darkSubMenuItemBg: "#000c17",
    darkItemSelectedColor: O,
    darkItemSelectedBg: a,
    darkDangerItemSelectedBg: o,
    darkItemHoverBg: "transparent",
    darkGroupTitleColor: N,
    darkItemHoverColor: O,
    darkDangerItemHoverColor: A,
    darkDangerItemSelectedColor: O,
    darkDangerItemActiveBg: o,
    // internal
    itemWidth: _ ? `calc(100% + ${P}px)` : `calc(100% - ${$ * 2}px)`
  };
}, yP = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  return ta("Menu", (a) => {
    const {
      colorBgElevated: o,
      colorPrimary: i,
      colorTextLightSolid: s,
      controlHeightLG: u,
      fontSize: l,
      darkItemColor: c,
      darkDangerItemColor: d,
      darkItemBg: g,
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
      popupBg: B,
      darkPopupBg: O
    } = a, A = a.calc(l).div(7).mul(5).equal(), _ = ur(a, {
      menuArrowSize: A,
      menuHorizontalHeight: a.calc(u).mul(1.15).equal(),
      menuArrowOffset: a.calc(A).mul(0.25).equal(),
      menuPanelMaskInset: -7,
      // Still a hardcode here since it's offset by rc-align
      menuSubMenuBg: o,
      calc: a.calc,
      popupBg: B
    }), P = ur(_, {
      itemColor: c,
      itemHoverColor: y,
      groupTitleColor: E,
      itemSelectedColor: h,
      itemBg: g,
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
      pP(_),
      // Horizontal
      gP(_),
      // Hard code for some light style
      // Vertical
      hP(_),
      // Hard code for some light style
      // Theme
      Cg(_, "light"),
      Cg(P, "dark"),
      // RTL
      mP(_),
      // Motion
      rF(_),
      Ps(_, "slide-up"),
      Ps(_, "slide-down"),
      df(_, "zoom-big")
    ];
  }, bP, {
    deprecatedTokens: [["colorGroupTitle", "groupTitleColor"], ["radiusItem", "itemBorderRadius"], ["radiusSubMenuItem", "subMenuItemBorderRadius"], ["colorItemText", "itemColor"], ["colorItemTextHover", "itemHoverColor"], ["colorItemTextHoverHorizontal", "horizontalItemHoverColor"], ["colorItemTextSelected", "itemSelectedColor"], ["colorItemTextSelectedHorizontal", "horizontalItemSelectedColor"], ["colorItemTextDisabled", "itemDisabledColor"], ["colorDangerItemText", "dangerItemColor"], ["colorDangerItemTextHover", "dangerItemHoverColor"], ["colorDangerItemTextSelected", "dangerItemSelectedColor"], ["colorDangerItemBgActive", "dangerItemActiveBg"], ["colorDangerItemBgSelected", "dangerItemSelectedBg"], ["colorItemBg", "itemBg"], ["colorItemBgHover", "itemHoverBg"], ["colorSubItemBg", "subMenuItemBg"], ["colorItemBgActive", "itemActiveBg"], ["colorItemBgSelectedHorizontal", "horizontalItemSelectedBg"], ["colorActiveBarWidth", "activeBarWidth"], ["colorActiveBarHeight", "activeBarHeight"], ["colorActiveBarBorderSize", "activeBarBorderWidth"], ["colorItemBgSelected", "itemSelectedBg"]],
    // Dropdown will handle menu style self. We do not need to handle this.
    injectStyle: r,
    unitless: {
      groupTitleLineHeight: !0
    }
  })(e, t);
};
var CP = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const EP = /* @__PURE__ */ Rr((e, t) => {
  var r, n;
  const a = v.useContext(Ms), o = a || {}, {
    getPrefixCls: i,
    getPopupContainer: s,
    direction: u,
    menu: l
  } = v.useContext(Tt), c = i(), {
    prefixCls: d,
    className: g,
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
    onClick: B,
    overflowedIndicatorPopupClassName: O
  } = e, A = CP(e, ["prefixCls", "className", "style", "theme", "expandIcon", "_internalDisableMenuItemTitleTooltip", "inlineCollapsed", "siderCollapsed", "items", "children", "rootClassName", "mode", "selectable", "onClick", "overflowedIndicatorPopupClassName"]), _ = en(A, ["collapsedWidth"]), P = fP(y) || w;
  if (process.env.NODE_ENV !== "production") {
    const V = wr("Menu");
    process.env.NODE_ENV !== "production" && V(!("inlineCollapsed" in e && D !== "inline"), "usage", "`inlineCollapsed` should only be used when `mode` is inline."), process.env.NODE_ENV !== "production" && V(!(e.siderCollapsed !== void 0 && "inlineCollapsed" in e), "usage", "`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead."), V.deprecated("items" in e && !w, "children", "items");
  }
  (r = o.validator) === null || r === void 0 || r.call(o, {
    mode: D
  });
  const $ = Br(function() {
    var V;
    B == null || B.apply(void 0, arguments), (V = o.onClick) === null || V === void 0 || V.call(o);
  }), N = o.mode || D, R = x ?? o.selectable, M = v.useMemo(() => E !== void 0 ? E : b, [b, E]), F = {
    horizontal: {
      motionName: `${c}-slide-up`
    },
    inline: $B(c),
    other: {
      motionName: `${c}-zoom-big`
    }
  }, T = i("menu", d || o.prefixCls), k = Ci(T), [H, K, X] = yP(T, k, !a), Q = ie(`${T}-${h}`, l == null ? void 0 : l.className, g);
  let I;
  if (typeof f == "function")
    I = f;
  else if (f === null || f === !1)
    I = null;
  else if (o.expandIcon === null || o.expandIcon === !1)
    I = null;
  else {
    const V = f ?? o.expandIcon;
    I = ra(V, {
      className: ie(`${T}-submenu-expand-icon`, Zn(V) ? (n = V.props) === null || n === void 0 ? void 0 : n.className : "")
    });
  }
  const z = v.useMemo(() => ({
    prefixCls: T,
    inlineCollapsed: M || !1,
    direction: u,
    firstLevel: !0,
    theme: h,
    mode: N,
    disableMenuItemTitleTooltip: m
  }), [T, M, u, m, h]);
  return H(/* @__PURE__ */ v.createElement(Ms.Provider, {
    value: null
  }, /* @__PURE__ */ v.createElement(Is.Provider, {
    value: z
  }, /* @__PURE__ */ v.createElement(xi, Object.assign({
    getPopupContainer: s,
    overflowedIndicator: /* @__PURE__ */ v.createElement(y0, null),
    overflowedIndicatorPopupClassName: ie(T, `${T}-${h}`, O),
    mode: N,
    selectable: R,
    onClick: $
  }, _, {
    inlineCollapsed: M,
    style: Object.assign(Object.assign({}, l == null ? void 0 : l.style), p),
    className: Q,
    prefixCls: T,
    direction: u,
    defaultMotions: F,
    expandIcon: I,
    ref: t,
    rootClassName: ie(S, K, o.rootClassName, X, k)
  }), P))));
}), wP = EP, Do = /* @__PURE__ */ Rr((e, t) => {
  const r = Je(null), n = v.useContext(wf);
  return bo(t, () => ({
    menu: r.current,
    focus: (a) => {
      var o;
      (o = r.current) === null || o === void 0 || o.focus(a);
    }
  })), /* @__PURE__ */ v.createElement(wP, Object.assign({
    ref: r
  }, e, n));
});
Do.Item = E0;
Do.SubMenu = w0;
Do.Divider = C0;
Do.ItemGroup = uu;
process.env.NODE_ENV !== "production" && (Do.displayName = "Menu");
const DP = Do, SP = (e) => {
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
}, xP = (e) => {
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
    colorTextDisabled: g,
    fontSizeIcon: p,
    controlPaddingHorizontal: h,
    colorBgElevated: f
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign({}, Gn(e)), {
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
          animationName: kp
        },
        [`&${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-topLeft,
          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-topLeft,
          &${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-top,
          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-top,
          &${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-topRight,
          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-topRight`]: {
          animationName: Vp
        },
        [`&${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottomLeft,
          &${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottom,
          &${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottomRight`]: {
          animationName: zp
        },
        [`&${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-topLeft,
          &${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-top,
          &${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-topRight`]: {
          animationName: Hp
        }
      })
    },
    // =============================================================
    // ==                        Arrow style                      ==
    // =============================================================
    e0(e, f, {
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
        }, Hl(e)), {
          [`${r}-item-group-title`]: {
            padding: `${De(l)} ${De(h)}`,
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
            padding: `${De(l)} ${De(h)}`,
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
          }, Hl(e)), {
            "&-selected": {
              color: e.colorPrimary,
              backgroundColor: e.controlItemBgActive,
              "&:hover, &-active": {
                backgroundColor: e.controlItemBgActiveHover
              }
            },
            "&-disabled": {
              color: g,
              cursor: "not-allowed",
              "&:hover": {
                color: g,
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
              margin: `${De(e.marginXXS)} 0`,
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
            margin: `0 ${De(e.marginXS)}`,
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
              color: g,
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
    [Ps(e, "slide-up"), Ps(e, "slide-down"), tg(e, "move-up"), tg(e, "move-down"), df(e, "zoom-big")]
  ];
}, OP = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 50,
  paddingBlock: (e.controlHeight - e.fontSize * e.lineHeight) / 2
}, gf({
  contentRadius: e.borderRadiusLG,
  limitVerticalRadius: !0
})), Qp(e)), BP = ta("Dropdown", (e) => {
  const {
    marginXXS: t,
    sizePopupArrow: r,
    paddingXXS: n,
    componentCls: a
  } = e, o = ur(e, {
    menuCls: `${a}-menu`,
    dropdownArrowDistance: e.calc(r).div(2).add(t).equal(),
    dropdownEdgeChildPadding: n
  });
  return [xP(o), SP(o)];
}, OP), lu = (e) => {
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
    open: g,
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
    direction: B,
    dropdown: O
  } = v.useContext(Tt), A = wr("Dropdown");
  process.env.NODE_ENV !== "production" && ([["visible", "open"], ["onVisibleChange", "onOpenChange"]].forEach((ce) => {
    let [Y, pe] = ce;
    A.deprecated(!(Y in e), Y, pe);
  }), A.deprecated(!("overlay" in e), "overlay", "menu"));
  const _ = v.useMemo(() => {
    const ce = x();
    return S !== void 0 ? S : y.includes("top") ? `${ce}-slide-down` : `${ce}-slide-up`;
  }, [x, y, S]), P = v.useMemo(() => y ? y.includes("Center") ? y.slice(0, y.indexOf("Center")) : y : B === "rtl" ? "bottomRight" : "bottomLeft", [y, B]);
  if (process.env.NODE_ENV !== "production") {
    if (y.includes("Center")) {
      const ce = y.slice(0, y.indexOf("Center"));
      process.env.NODE_ENV !== "production" && A(!y.includes("Center"), "deprecated", `You are using '${y}' placement in Dropdown, which is deprecated. Try to use '${ce}' instead.`);
    }
    [["visible", "open"], ["onVisibleChange", "onOpenChange"]].forEach((ce) => {
      let [Y, pe] = ce;
      A.deprecated(!(Y in e), Y, pe);
    });
  }
  const $ = x("dropdown", n), N = Ci($), [R, M, F] = BP($, N), [, T] = kr(), k = v.Children.only(a), H = ra(k, {
    className: ie(`${$}-trigger`, {
      [`${$}-rtl`]: B === "rtl"
    }, k.props.className),
    disabled: i
  }), K = i ? [] : o;
  let X;
  K && K.includes("contextMenu") && (X = !0);
  const [Q, I] = Qr(!1, {
    value: g ?? h
  }), z = Br((ce) => {
    p == null || p(ce, {
      source: "trigger"
    }), f == null || f(ce), I(ce);
  }), V = ie(l, c, M, F, N, O == null ? void 0 : O.className, {
    [`${$}-rtl`]: B === "rtl"
  }), q = t0({
    arrowPointAtCenter: typeof r == "object" && r.pointAtCenter,
    autoAdjustOverflow: E,
    offset: T.marginXXS,
    arrowWidth: r ? T.sizePopupArrow : 0,
    borderRadius: T.borderRadius
  }), te = v.useCallback(() => {
    t != null && t.selectable && (t != null && t.multiple) || (p == null || p(!1, {
      source: "menu"
    }), I(!1));
  }, [t == null ? void 0 : t.selectable, t == null ? void 0 : t.multiple]), re = () => {
    let ce;
    return t != null && t.items ? ce = /* @__PURE__ */ v.createElement(DP, Object.assign({}, t)) : typeof w == "function" ? ce = w() : ce = w, s && (ce = s(ce)), ce = v.Children.only(typeof ce == "string" ? /* @__PURE__ */ v.createElement("span", null, ce) : ce), /* @__PURE__ */ v.createElement(vP, {
      prefixCls: `${$}-menu`,
      rootClassName: ie(F, N),
      expandIcon: /* @__PURE__ */ v.createElement("span", {
        className: `${$}-menu-submenu-arrow`
      }, /* @__PURE__ */ v.createElement(dc, {
        className: `${$}-menu-submenu-arrow-icon`
      })),
      mode: "vertical",
      selectable: !1,
      onClick: te,
      validator: (Y) => {
        let {
          mode: pe
        } = Y;
        process.env.NODE_ENV !== "production" && A(!pe || pe === "vertical", "usage", `mode="${pe}" is not supported for Dropdown's Menu.`);
      }
    }, ce);
  }, [le, oe] = tf("Dropdown", d == null ? void 0 : d.zIndex);
  let ge = /* @__PURE__ */ v.createElement(i2, Object.assign({
    alignPoint: X
  }, en(e, ["rootClassName"]), {
    mouseEnterDelay: m,
    mouseLeaveDelay: b,
    visible: Q,
    builtinPlacements: q,
    arrow: !!r,
    overlayClassName: V,
    prefixCls: $,
    getPopupContainer: u || D,
    transitionName: _,
    trigger: K,
    overlay: re,
    placement: P,
    onVisibleChange: z,
    overlayStyle: Object.assign(Object.assign(Object.assign({}, O == null ? void 0 : O.style), d), {
      zIndex: le
    })
  }), H);
  return le && (ge = /* @__PURE__ */ v.createElement(tu.Provider, {
    value: oe
  }, ge)), R(ge);
};
function AP(e) {
  return Object.assign(Object.assign({}, e), {
    align: {
      overflow: {
        adjustX: !1,
        adjustY: !1
      }
    }
  });
}
const $P = aF(lu, "dropdown", (e) => e, AP), FP = (e) => /* @__PURE__ */ v.createElement($P, Object.assign({}, e), /* @__PURE__ */ v.createElement("span", null));
lu._InternalPanelDoNotUseOrYouWillBeFired = FP;
process.env.NODE_ENV !== "production" && (lu.displayName = "Dropdown");
const D0 = lu;
var PP = ["prefixCls", "className", "style", "checked", "disabled", "defaultChecked", "type", "title", "onChange"], RP = /* @__PURE__ */ Rr(function(e, t) {
  var r, n = e.prefixCls, a = n === void 0 ? "rc-checkbox" : n, o = e.className, i = e.style, s = e.checked, u = e.disabled, l = e.defaultChecked, c = l === void 0 ? !1 : l, d = e.type, g = d === void 0 ? "checkbox" : d, p = e.title, h = e.onChange, f = ct(e, PP), m = Je(null), b = Qr(c, {
    value: s
  }), E = ae(b, 2), y = E[0], w = E[1];
  bo(t, function() {
    return {
      focus: function() {
        var B;
        (B = m.current) === null || B === void 0 || B.focus();
      },
      blur: function() {
        var B;
        (B = m.current) === null || B === void 0 || B.blur();
      },
      input: m.current
    };
  });
  var S = ie(a, o, (r = {}, W(r, "".concat(a, "-checked"), y), W(r, "".concat(a, "-disabled"), u), r)), D = function(B) {
    u || ("checked" in e || w(B.target.checked), h == null || h({
      target: G(G({}, e), {}, {
        type: g,
        checked: B.target.checked
      }),
      stopPropagation: function() {
        B.stopPropagation();
      },
      preventDefault: function() {
        B.preventDefault();
      },
      nativeEvent: B.nativeEvent
    }));
  };
  return /* @__PURE__ */ v.createElement("span", {
    className: S,
    title: p,
    style: i
  }, /* @__PURE__ */ v.createElement("input", We({}, f, {
    className: "".concat(a, "-input"),
    ref: m,
    onChange: D,
    disabled: u,
    checked: !!y,
    type: g
  })), /* @__PURE__ */ v.createElement("span", {
    className: "".concat(a, "-inner")
  }));
});
function TP(e) {
  return ur(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const NP = (e) => {
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
    colorFillAlter: g,
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
    addonBg: g,
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
}, IP = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), Df = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "&:hover:not([disabled])": Object.assign({}, IP(ur(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), S0 = (e, t) => ({
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
}), Sg = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, S0(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), MP = (e, t) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, S0(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.colorPrimaryHover,
    activeBorderColor: e.colorPrimary,
    activeShadow: e.activeShadow
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, Df(e))
  }), Sg(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), Sg(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), xg = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      borderColor: t.addonBorderColor,
      color: t.addonColor
    }
  }
}), jP = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.addonBg,
        border: `${De(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    }
  }, xg(e, {
    status: "error",
    addonBorderColor: e.colorError,
    addonColor: e.colorErrorText
  })), xg(e, {
    status: "warning",
    addonBorderColor: e.colorWarning,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group-addon`]: Object.assign({}, Df(e))
    }
  })
}), _P = (e, t) => ({
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
}), x0 = (e, t) => ({
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
}), Og = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, x0(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), LP = (e, t) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, x0(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.colorPrimary
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, Df(e))
  }), Og(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    inputColor: e.colorErrorText,
    affixColor: e.colorError
  })), Og(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    inputColor: e.colorWarningText,
    affixColor: e.colorWarning
  })), t)
}), Bg = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      background: t.addonBg,
      color: t.addonColor
    }
  }
}), kP = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.colorFillTertiary
      },
      [`${e.componentCls}-filled:not(:focus):not(:focus-within)`]: {
        "&:not(:first-child)": {
          borderInlineStart: `${De(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        },
        "&:not(:last-child)": {
          borderInlineEnd: `${De(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        }
      }
    }
  }, Bg(e, {
    status: "error",
    addonBg: e.colorErrorBg,
    addonColor: e.colorErrorText
  })), Bg(e, {
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
          borderInlineStart: `${De(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${De(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${De(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${De(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${De(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${De(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        }
      }
    }
  })
}), zP = (e) => ({
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
}), O0 = (e) => {
  const {
    paddingBlockLG: t,
    lineHeightLG: r,
    borderRadiusLG: n,
    paddingInlineLG: a
  } = e;
  return {
    padding: `${De(t)} ${De(a)}`,
    fontSize: e.inputFontSizeLG,
    lineHeight: r,
    borderRadius: n
  };
}, B0 = (e) => ({
  padding: `${De(e.paddingBlockSM)} ${De(e.paddingInlineSM)}`,
  fontSize: e.inputFontSizeSM,
  borderRadius: e.borderRadiusSM
}), A0 = (e) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${De(e.paddingBlock)} ${De(e.paddingInline)}`,
  color: e.colorText,
  fontSize: e.inputFontSize,
  lineHeight: e.lineHeight,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, zP(e.colorTextPlaceholder)), {
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
  "&-lg": Object.assign({}, O0(e)),
  "&-sm": Object.assign({}, B0(e)),
  // RTL
  "&-rtl": {
    direction: "rtl"
  },
  "&-textarea-rtl": {
    direction: "rtl"
  }
}), VP = (e) => {
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
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, O0(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, B0(e)),
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
        padding: `0 ${De(e.paddingInline)}`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.inputFontSize,
        textAlign: "center",
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${r}-select`]: {
          margin: `${De(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${De(e.calc(e.paddingInline).mul(-1).equal())}`,
          [`&${r}-select-single:not(${r}-select-customize-input):not(${r}-pagination-size-changer)`]: {
            [`${r}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${De(e.lineWidth)} ${e.lineType} transparent`,
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
          margin: `-9px ${De(e.calc(e.paddingInline).mul(-1).equal())}`,
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
    }, Vl()), {
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
}, HP = (e) => {
  const {
    componentCls: t,
    controlHeightSM: r,
    lineWidth: n,
    calc: a
  } = e, i = a(r).sub(a(n).mul(2)).sub(16).div(2).equal();
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Gn(e)), A0(e)), MP(e)), LP(e)), _P(e)), {
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
}, WP = (e) => {
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
        margin: `0 ${De(e.inputAffixPadding)}`
      }
    }
  };
}, KP = (e) => {
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
    [`${t}-affix-wrapper`]: Object.assign(Object.assign(Object.assign(Object.assign({}, A0(e)), {
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
    }), WP(e)), {
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
}, qP = (e) => {
  const {
    componentCls: t,
    borderRadiusLG: r,
    borderRadiusSM: n
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, Gn(e)), VP(e)), {
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
      }, jP(e)), kP(e)), {
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
}, UP = (e) => {
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
}, GP = (e) => {
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
}, XP = (e) => {
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
}, YP = ta("Input", (e) => {
  const t = ur(e, TP(e));
  return [
    HP(t),
    GP(t),
    KP(t),
    qP(t),
    UP(t),
    XP(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Fp(t)
  ];
}, NP), ZP = (e) => {
  const {
    checkboxCls: t
  } = e, r = `${t}-wrapper`;
  return [
    // ===================== Basic =====================
    {
      // Group
      [`${t}-group`]: Object.assign(Object.assign({}, Gn(e)), {
        display: "inline-flex",
        flexWrap: "wrap",
        columnGap: e.marginXS,
        // Group > Grid
        [`> ${e.antCls}-row`]: {
          flex: 1
        }
      }),
      // Wrapper
      [r]: Object.assign(Object.assign({}, Gn(e)), {
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
      [t]: Object.assign(Object.assign({}, Gn(e)), {
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
          [`&:focus-visible + ${t}-inner`]: Object.assign({}, Zc(e))
        },
        // Wrapper > Checkbox > inner
        [`${t}-inner`]: {
          boxSizing: "border-box",
          display: "block",
          width: e.checkboxSize,
          height: e.checkboxSize,
          direction: "ltr",
          backgroundColor: e.colorBgContainer,
          border: `${De(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
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
            border: `${De(e.lineWidthBold)} solid ${e.colorWhite}`,
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
function QP(e, t) {
  const r = ur(t, {
    checkboxCls: `.${e}`,
    checkboxSize: t.controlInteractiveSize
  });
  return [ZP(r)];
}
const $0 = ta("Checkbox", (e, t) => {
  let {
    prefixCls: r
  } = t;
  return [QP(r, e)];
}), JP = /* @__PURE__ */ ee.createContext(null), F0 = JP;
var eR = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const tR = (e, t) => {
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
    disabled: g
  } = e, p = eR(e, ["prefixCls", "className", "rootClassName", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave", "skipGroup", "disabled"]), {
    getPrefixCls: h,
    direction: f,
    checkbox: m
  } = v.useContext(Tt), b = v.useContext(F0), {
    isFormItemInput: E
  } = v.useContext(cf), y = v.useContext(Zs), w = (r = (b == null ? void 0 : b.disabled) || g) !== null && r !== void 0 ? r : y, S = v.useRef(p.value);
  if (process.env.NODE_ENV !== "production") {
    const R = wr("Checkbox");
    process.env.NODE_ENV !== "production" && R("checked" in p || !!b || !("value" in p), "usage", "`value` is not a valid prop, do you mean `checked`?");
  }
  v.useEffect(() => {
    b == null || b.registerValue(p.value);
  }, []), v.useEffect(() => {
    if (!d)
      return p.value !== S.current && (b == null || b.cancelValue(S.current), b == null || b.registerValue(p.value), S.current = p.value), () => b == null ? void 0 : b.cancelValue(p.value);
  }, [p.value]);
  const D = h("checkbox", n), x = Ci(D), [B, O, A] = $0(D, x), _ = Object.assign({}, p);
  b && !d && (_.onChange = function() {
    p.onChange && p.onChange.apply(p, arguments), b.toggleOption && b.toggleOption({
      label: i,
      value: p.value
    });
  }, _.name = b.name, _.checked = b.value.includes(p.value));
  const P = ie(`${D}-wrapper`, {
    [`${D}-rtl`]: f === "rtl",
    [`${D}-wrapper-checked`]: _.checked,
    [`${D}-wrapper-disabled`]: w,
    [`${D}-wrapper-in-form-item`]: E
  }, m == null ? void 0 : m.className, a, o, A, x, O), $ = ie({
    [`${D}-indeterminate`]: s
  }, nf, O), N = s ? "mixed" : void 0;
  return B(/* @__PURE__ */ v.createElement(yp, {
    component: "Checkbox",
    disabled: w
  }, /* @__PURE__ */ v.createElement("label", {
    className: P,
    style: Object.assign(Object.assign({}, m == null ? void 0 : m.style), u),
    onMouseEnter: l,
    onMouseLeave: c
  }, /* @__PURE__ */ v.createElement(RP, Object.assign({
    "aria-checked": N
  }, _, {
    prefixCls: D,
    className: $,
    disabled: w,
    ref: t
  })), i !== void 0 && /* @__PURE__ */ v.createElement("span", null, i))));
}, P0 = /* @__PURE__ */ v.forwardRef(tR);
process.env.NODE_ENV !== "production" && (P0.displayName = "Checkbox");
const R0 = P0;
var rR = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const nR = /* @__PURE__ */ v.forwardRef((e, t) => {
  const {
    defaultValue: r,
    children: n,
    options: a = [],
    prefixCls: o,
    className: i,
    rootClassName: s,
    style: u,
    onChange: l
  } = e, c = rR(e, ["defaultValue", "children", "options", "prefixCls", "className", "rootClassName", "style", "onChange"]), {
    getPrefixCls: d,
    direction: g
  } = v.useContext(Tt), [p, h] = v.useState(c.value || r || []), [f, m] = v.useState([]);
  v.useEffect(() => {
    "value" in c && h(c.value || []);
  }, [c.value]);
  const b = v.useMemo(() => a.map((R) => typeof R == "string" || typeof R == "number" ? {
    label: R,
    value: R
  } : R), [a]), E = (R) => {
    m((M) => M.filter((F) => F !== R));
  }, y = (R) => {
    m((M) => [].concat(Ne(M), [R]));
  }, w = (R) => {
    const M = p.indexOf(R.value), F = Ne(p);
    M === -1 ? F.push(R.value) : F.splice(M, 1), "value" in c || h(F), l == null || l(F.filter((T) => f.includes(T)).sort((T, k) => {
      const H = b.findIndex((X) => X.value === T), K = b.findIndex((X) => X.value === k);
      return H - K;
    }));
  }, S = d("checkbox", o), D = `${S}-group`, x = Ci(S), [B, O, A] = $0(S, x), _ = en(c, ["value", "disabled"]), P = a.length ? b.map((R) => /* @__PURE__ */ v.createElement(R0, {
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
  }, N = ie(D, {
    [`${D}-rtl`]: g === "rtl"
  }, i, s, A, x, O);
  return B(/* @__PURE__ */ v.createElement("div", Object.assign({
    className: N,
    style: u
  }, _, {
    ref: t
  }), /* @__PURE__ */ v.createElement(F0.Provider, {
    value: $
  }, P)));
}), aR = nR, cu = R0;
cu.Group = aR;
cu.__ANT_CHECKBOX = !0;
process.env.NODE_ENV !== "production" && (cu.displayName = "Checkbox");
const oR = cu;
function iR(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function sR(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function Ag(e, t, r) {
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
function $g(e, t, r, n) {
  if (r) {
    var a = t;
    if (t.type === "click") {
      a = Ag(t, e, ""), r(a);
      return;
    }
    if (e.type !== "file" && n !== void 0) {
      a = Ag(t, e, n), r(a);
      return;
    }
    r(a);
  }
}
var uR = function(t) {
  var r, n, a = t.inputElement, o = t.children, i = t.prefixCls, s = t.prefix, u = t.suffix, l = t.addonBefore, c = t.addonAfter, d = t.className, g = t.style, p = t.disabled, h = t.readOnly, f = t.focused, m = t.triggerFocus, b = t.allowClear, E = t.value, y = t.handleReset, w = t.hidden, S = t.classes, D = t.classNames, x = t.dataAttrs, B = t.styles, O = t.components, A = o ?? a, _ = (O == null ? void 0 : O.affixWrapper) || "span", P = (O == null ? void 0 : O.groupWrapper) || "span", $ = (O == null ? void 0 : O.wrapper) || "span", N = (O == null ? void 0 : O.groupAddon) || "span", R = Je(null), M = function(Y) {
    var pe;
    (pe = R.current) !== null && pe !== void 0 && pe.contains(Y.target) && (m == null || m());
  }, F = sR(t), T = /* @__PURE__ */ tb(A, {
    value: E,
    className: ie(A.props.className, !F && (D == null ? void 0 : D.variant)) || null
  });
  if (F) {
    var k, H = null;
    if (b) {
      var K, X = !p && !h && E, Q = "".concat(i, "-clear-icon"), I = st(b) === "object" && b !== null && b !== void 0 && b.clearIcon ? b.clearIcon : "✖";
      H = /* @__PURE__ */ ee.createElement("span", {
        onClick: y,
        onMouseDown: function(Y) {
          return Y.preventDefault();
        },
        className: ie(Q, (K = {}, W(K, "".concat(Q, "-hidden"), !X), W(K, "".concat(Q, "-has-suffix"), !!u), K)),
        role: "button",
        tabIndex: -1
      }, I);
    }
    var z = "".concat(i, "-affix-wrapper"), V = ie(z, (k = {}, W(k, "".concat(i, "-disabled"), p), W(k, "".concat(z, "-disabled"), p), W(k, "".concat(z, "-focused"), f), W(k, "".concat(z, "-readonly"), h), W(k, "".concat(z, "-input-with-clear-btn"), u && b && E), k), S == null ? void 0 : S.affixWrapper, D == null ? void 0 : D.affixWrapper, D == null ? void 0 : D.variant), q = (u || b) && /* @__PURE__ */ ee.createElement("span", {
      className: ie("".concat(i, "-suffix"), D == null ? void 0 : D.suffix),
      style: B == null ? void 0 : B.suffix
    }, H, u);
    T = /* @__PURE__ */ ee.createElement(_, We({
      className: V,
      style: B == null ? void 0 : B.affixWrapper,
      onClick: M
    }, x == null ? void 0 : x.affixWrapper, {
      ref: R
    }), s && /* @__PURE__ */ ee.createElement("span", {
      className: ie("".concat(i, "-prefix"), D == null ? void 0 : D.prefix),
      style: B == null ? void 0 : B.prefix
    }, s), T, q);
  }
  if (iR(t)) {
    var te = "".concat(i, "-group"), re = "".concat(te, "-addon"), le = "".concat(te, "-wrapper"), oe = ie("".concat(i, "-wrapper"), te, S == null ? void 0 : S.wrapper, D == null ? void 0 : D.wrapper), ge = ie(le, W({}, "".concat(le, "-disabled"), p), S == null ? void 0 : S.group, D == null ? void 0 : D.groupWrapper);
    T = /* @__PURE__ */ ee.createElement(P, {
      className: ge
    }, /* @__PURE__ */ ee.createElement($, {
      className: oe
    }, l && /* @__PURE__ */ ee.createElement(N, {
      className: re
    }, l), T, c && /* @__PURE__ */ ee.createElement(N, {
      className: re
    }, c)));
  }
  return /* @__PURE__ */ ee.cloneElement(T, {
    className: ie((r = T.props) === null || r === void 0 ? void 0 : r.className, d) || null,
    style: G(G({}, (n = T.props) === null || n === void 0 ? void 0 : n.style), g),
    hidden: w
  });
}, lR = ["show"];
function cR(e, t) {
  return v.useMemo(function() {
    var r = {};
    t && (r.show = st(t) === "object" && t.formatter ? t.formatter : !!t), r = G(G({}, r), e);
    var n = r, a = n.show, o = ct(n, lR);
    return G(G({}, o), {}, {
      show: !!a,
      showFormatter: typeof a == "function" ? a : void 0,
      strategy: o.strategy || function(i) {
        return i.length;
      }
    });
  }, [e, t]);
}
function fR(e, t) {
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
var dR = `
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
`, vR = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], Xu = {}, Mr;
function gR(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && Xu[r])
    return Xu[r];
  var n = window.getComputedStyle(e), a = n.getPropertyValue("box-sizing") || n.getPropertyValue("-moz-box-sizing") || n.getPropertyValue("-webkit-box-sizing"), o = parseFloat(n.getPropertyValue("padding-bottom")) + parseFloat(n.getPropertyValue("padding-top")), i = parseFloat(n.getPropertyValue("border-bottom-width")) + parseFloat(n.getPropertyValue("border-top-width")), s = vR.map(function(l) {
    return "".concat(l, ":").concat(n.getPropertyValue(l));
  }).join(";"), u = {
    sizingStyle: s,
    paddingSize: o,
    borderSize: i,
    boxSizing: a
  };
  return t && r && (Xu[r] = u), u;
}
function mR(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  Mr || (Mr = document.createElement("textarea"), Mr.setAttribute("tab-index", "-1"), Mr.setAttribute("aria-hidden", "true"), document.body.appendChild(Mr)), e.getAttribute("wrap") ? Mr.setAttribute("wrap", e.getAttribute("wrap")) : Mr.removeAttribute("wrap");
  var a = gR(e, t), o = a.paddingSize, i = a.borderSize, s = a.boxSizing, u = a.sizingStyle;
  Mr.setAttribute("style", "".concat(u, ";").concat(dR)), Mr.value = e.value || e.placeholder || "";
  var l = void 0, c = void 0, d, g = Mr.scrollHeight;
  if (s === "border-box" ? g += i : s === "content-box" && (g -= o), r !== null || n !== null) {
    Mr.value = " ";
    var p = Mr.scrollHeight - o;
    r !== null && (l = p * r, s === "border-box" && (l = l + o + i), g = Math.max(l, g)), n !== null && (c = p * n, s === "border-box" && (c = c + o + i), d = g > c ? "" : "hidden", g = Math.min(c, g));
  }
  var h = {
    height: g,
    overflowY: d,
    resize: "none"
  };
  return l && (h.minHeight = l), c && (h.maxHeight = c), h;
}
var hR = ["prefixCls", "onPressEnter", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"], Yu = 0, Zu = 1, Qu = 2, pR = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e, n = r.prefixCls;
  r.onPressEnter;
  var a = r.defaultValue, o = r.value, i = r.autoSize, s = r.onResize, u = r.className, l = r.style, c = r.disabled, d = r.onChange, g = r.onInternalAutoSize, p = ct(r, hR), h = Qr(a, {
    value: o,
    postState: function(z) {
      return z ?? "";
    }
  }), f = ae(h, 2), m = f[0], b = f[1], E = function(z) {
    b(z.target.value), d == null || d(z);
  }, y = v.useRef();
  v.useImperativeHandle(t, function() {
    return {
      textArea: y.current
    };
  });
  var w = v.useMemo(function() {
    return i && st(i) === "object" ? [i.minRows, i.maxRows] : [];
  }, [i]), S = ae(w, 2), D = S[0], x = S[1], B = !!i, O = function() {
    try {
      if (document.activeElement === y.current) {
        var z = y.current, V = z.selectionStart, q = z.selectionEnd, te = z.scrollTop;
        y.current.setSelectionRange(V, q), y.current.scrollTop = te;
      }
    } catch {
    }
  }, A = v.useState(Qu), _ = ae(A, 2), P = _[0], $ = _[1], N = v.useState(), R = ae(N, 2), M = R[0], F = R[1], T = function() {
    $(Yu), process.env.NODE_ENV === "test" && (g == null || g());
  };
  jt(function() {
    B && T();
  }, [o, D, x, B]), jt(function() {
    if (P === Yu)
      $(Zu);
    else if (P === Zu) {
      var I = mR(y.current, !1, D, x);
      $(Qu), F(I);
    } else
      O();
  }, [P]);
  var k = v.useRef(), H = function() {
    Gt.cancel(k.current);
  }, K = function(z) {
    P === Qu && (s == null || s(z), i && (H(), k.current = Gt(function() {
      T();
    })));
  };
  v.useEffect(function() {
    return H;
  }, []);
  var X = B ? M : null, Q = G(G({}, l), X);
  return (P === Yu || P === Zu) && (Q.overflowY = "hidden", Q.overflowX = "hidden"), /* @__PURE__ */ v.createElement(ea, {
    onResize: K,
    disabled: !(i || s)
  }, /* @__PURE__ */ v.createElement("textarea", We({}, p, {
    ref: y,
    style: Q,
    className: ie(n, u, W({}, "".concat(n, "-disabled"), c)),
    disabled: c,
    value: m,
    onChange: E
  })));
}), bR = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize"], yR = /* @__PURE__ */ ee.forwardRef(function(e, t) {
  var r, n, a = e.defaultValue, o = e.value, i = e.onFocus, s = e.onBlur, u = e.onChange, l = e.allowClear, c = e.maxLength, d = e.onCompositionStart, g = e.onCompositionEnd, p = e.suffix, h = e.prefixCls, f = h === void 0 ? "rc-textarea" : h, m = e.showCount, b = e.count, E = e.className, y = e.style, w = e.disabled, S = e.hidden, D = e.classNames, x = e.styles, B = e.onResize, O = ct(e, bR), A = Qr(a, {
    value: o,
    defaultValue: a
  }), _ = ae(A, 2), P = _[0], $ = _[1], N = P == null ? "" : String(P), R = ee.useState(!1), M = ae(R, 2), F = M[0], T = M[1], k = ee.useRef(!1), H = ee.useState(null), K = ae(H, 2), X = K[0], Q = K[1], I = Je(null), z = function() {
    var Ce;
    return (Ce = I.current) === null || Ce === void 0 ? void 0 : Ce.textArea;
  }, V = function() {
    z().focus();
  };
  bo(t, function() {
    return {
      resizableTextArea: I.current,
      focus: V,
      blur: function() {
        z().blur();
      }
    };
  }), zt(function() {
    T(function(_e) {
      return !w && _e;
    });
  }, [w]);
  var q = ee.useState(null), te = ae(q, 2), re = te[0], le = te[1];
  ee.useEffect(function() {
    if (re) {
      var _e;
      (_e = z()).setSelectionRange.apply(_e, Ne(re));
    }
  }, [re]);
  var oe = cR(b, m), ge = (r = oe.max) !== null && r !== void 0 ? r : c, ce = Number(ge) > 0, Y = oe.strategy(N), pe = !!ge && Y > ge, Se = function(Ce, ke) {
    var ze = ke;
    !k.current && oe.exceedFormatter && oe.max && oe.strategy(ke) > oe.max && (ze = oe.exceedFormatter(ke, {
      max: oe.max
    }), ke !== ze && le([z().selectionStart || 0, z().selectionEnd || 0])), $(ze), $g(Ce.currentTarget, Ce, u, ze);
  }, ye = function(Ce) {
    k.current = !0, d == null || d(Ce);
  }, we = function(Ce) {
    k.current = !1, Se(Ce, Ce.currentTarget.value), g == null || g(Ce);
  }, de = function(Ce) {
    Se(Ce, Ce.target.value);
  }, Ee = function(Ce) {
    var ke = O.onPressEnter, ze = O.onKeyDown;
    Ce.key === "Enter" && ke && ke(Ce), ze == null || ze(Ce);
  }, he = function(Ce) {
    T(!0), i == null || i(Ce);
  }, me = function(Ce) {
    T(!1), s == null || s(Ce);
  }, be = function(Ce) {
    $(""), V(), $g(z(), Ce, u);
  }, Ie = p, Re;
  oe.show && (oe.showFormatter ? Re = oe.showFormatter({
    value: N,
    count: Y,
    maxLength: ge
  }) : Re = "".concat(Y).concat(ce ? " / ".concat(ge) : ""), Ie = /* @__PURE__ */ ee.createElement(ee.Fragment, null, Ie, /* @__PURE__ */ ee.createElement("span", {
    className: ie("".concat(f, "-data-count"), D == null ? void 0 : D.count),
    style: x == null ? void 0 : x.count
  }, Re)));
  var je = function(Ce) {
    var ke;
    B == null || B(Ce), (ke = z()) !== null && ke !== void 0 && ke.style.height && Q(!0);
  }, bt = !O.autoSize && !m && !l;
  return /* @__PURE__ */ ee.createElement(uR, {
    value: N,
    allowClear: l,
    handleReset: be,
    suffix: Ie,
    prefixCls: f,
    classNames: G(G({}, D), {}, {
      affixWrapper: ie(D == null ? void 0 : D.affixWrapper, (n = {}, W(n, "".concat(f, "-show-count"), m), W(n, "".concat(f, "-textarea-allow-clear"), l), n))
    }),
    disabled: w,
    focused: F,
    className: ie(E, pe && "".concat(f, "-out-of-range")),
    style: G(G({}, y), X && !bt ? {
      height: "auto"
    } : {}),
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof Re == "string" ? Re : void 0
      }
    },
    hidden: S
  }, /* @__PURE__ */ ee.createElement(pR, We({}, O, {
    maxLength: c,
    onKeyDown: Ee,
    onChange: de,
    onFocus: he,
    onBlur: me,
    onCompositionStart: ye,
    onCompositionEnd: we,
    className: ie(D == null ? void 0 : D.textarea),
    style: G(G({}, x == null ? void 0 : x.textarea), {}, {
      resize: y == null ? void 0 : y.resize
    }),
    disabled: w,
    prefixCls: f,
    onResize: je,
    ref: I
  })));
}), CR = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const ER = /* @__PURE__ */ Rr((e, t) => {
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
    variant: g
  } = e, p = CR(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className", "variant"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: M
    } = wr("TextArea");
    M(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: h,
    direction: f
  } = v.useContext(Tt), m = af(o), b = v.useContext(Zs), E = i ?? b, {
    status: y,
    hasFeedback: w,
    feedbackIcon: S
  } = v.useContext(cf), D = AF(y, s), x = v.useRef(null);
  v.useImperativeHandle(t, () => {
    var M;
    return {
      resizableTextArea: (M = x.current) === null || M === void 0 ? void 0 : M.resizableTextArea,
      focus: (F) => {
        var T, k;
        fR((k = (T = x.current) === null || T === void 0 ? void 0 : T.resizableTextArea) === null || k === void 0 ? void 0 : k.textArea, F);
      },
      blur: () => {
        var F;
        return (F = x.current) === null || F === void 0 ? void 0 : F.blur();
      }
    };
  });
  const B = h("input", n);
  let O;
  typeof u == "object" && (u != null && u.clearIcon) ? O = u : u && (O = {
    clearIcon: /* @__PURE__ */ v.createElement(iB, null)
  });
  const A = Ci(B), [_, P, $] = YP(B, A), [N, R] = FF(g, a);
  return _(/* @__PURE__ */ v.createElement(yR, Object.assign({}, p, {
    disabled: E,
    allowClear: O,
    className: ie($, A, d, c),
    classNames: Object.assign(Object.assign({}, l), {
      textarea: ie({
        [`${B}-sm`]: m === "small",
        [`${B}-lg`]: m === "large"
      }, P, l == null ? void 0 : l.textarea),
      variant: ie({
        [`${B}-${N}`]: R
      }, BF(B, D)),
      affixWrapper: ie(`${B}-textarea-affix-wrapper`, {
        [`${B}-affix-wrapper-rtl`]: f === "rtl",
        [`${B}-affix-wrapper-sm`]: m === "small",
        [`${B}-affix-wrapper-lg`]: m === "large",
        [`${B}-textarea-show-count`]: e.showCount || ((r = e.count) === null || r === void 0 ? void 0 : r.show)
      }, P)
    }),
    prefixCls: B,
    suffix: w && /* @__PURE__ */ v.createElement("span", {
      className: `${B}-textarea-suffix`
    }, S),
    ref: x
  })));
}), wR = ER;
function Fg(e) {
  return ["small", "middle", "large"].includes(e);
}
function Pg(e) {
  return e ? typeof e == "number" && !Number.isNaN(e) : !1;
}
const T0 = /* @__PURE__ */ ee.createContext({
  latestIndex: 0
}), DR = T0.Provider, SR = (e) => {
  let {
    className: t,
    index: r,
    children: n,
    split: a,
    style: o
  } = e;
  const {
    latestIndex: i
  } = v.useContext(T0);
  return n == null ? null : /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("div", {
    className: t,
    style: o
  }, n), r < i && a && /* @__PURE__ */ v.createElement("span", {
    className: `${t}-split`
  }, a));
}, xR = SR;
var OR = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const N0 = /* @__PURE__ */ v.forwardRef((e, t) => {
  var r, n;
  const {
    getPrefixCls: a,
    space: o,
    direction: i
  } = v.useContext(Tt), {
    size: s = (o == null ? void 0 : o.size) || "small",
    align: u,
    className: l,
    rootClassName: c,
    children: d,
    direction: g = "horizontal",
    prefixCls: p,
    split: h,
    style: f,
    wrap: m = !1,
    classNames: b,
    styles: E
  } = e, y = OR(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]), [w, S] = Array.isArray(s) ? s : [s, s], D = Fg(S), x = Fg(w), B = Pg(S), O = Pg(w), A = fn(d, {
    keepEmpty: !0
  }), _ = u === void 0 && g === "horizontal" ? "center" : u, P = a("space", p), [$, N, R] = Cp(P), M = ie(P, o == null ? void 0 : o.className, N, `${P}-${g}`, {
    [`${P}-rtl`]: i === "rtl",
    [`${P}-align-${_}`]: _,
    [`${P}-gap-row-${S}`]: D,
    [`${P}-gap-col-${w}`]: x
  }, l, c, R), F = ie(`${P}-item`, (r = b == null ? void 0 : b.item) !== null && r !== void 0 ? r : (n = o == null ? void 0 : o.classNames) === null || n === void 0 ? void 0 : n.item);
  let T = 0;
  const k = A.map((X, Q) => {
    var I, z;
    X != null && (T = Q);
    const V = X && X.key || `${F}-${Q}`;
    return /* @__PURE__ */ v.createElement(xR, {
      className: F,
      key: V,
      index: Q,
      split: h,
      style: (I = E == null ? void 0 : E.item) !== null && I !== void 0 ? I : (z = o == null ? void 0 : o.styles) === null || z === void 0 ? void 0 : z.item
    }, X);
  }), H = v.useMemo(() => ({
    latestIndex: T
  }), [T]);
  if (A.length === 0)
    return null;
  const K = {};
  return m && (K.flexWrap = "wrap"), !x && O && (K.columnGap = w), !D && B && (K.rowGap = S), $(/* @__PURE__ */ v.createElement("div", Object.assign({
    ref: t,
    className: M,
    style: Object.assign(Object.assign(Object.assign({}, K), o == null ? void 0 : o.style), f)
  }, y), /* @__PURE__ */ v.createElement(DR, {
    value: H
  }, k)));
});
process.env.NODE_ENV !== "production" && (N0.displayName = "Space");
const I0 = N0;
I0.Compact = HB;
const M0 = I0;
var BR = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const j0 = (e) => {
  const {
    getPopupContainer: t,
    getPrefixCls: r,
    direction: n
  } = v.useContext(Tt), {
    prefixCls: a,
    type: o = "default",
    danger: i,
    disabled: s,
    loading: u,
    onClick: l,
    htmlType: c,
    children: d,
    className: g,
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
    icon: B = /* @__PURE__ */ v.createElement(y0, null),
    title: O,
    buttonsRender: A = (te) => te,
    mouseEnterDelay: _,
    mouseLeaveDelay: P,
    overlayClassName: $,
    overlayStyle: N,
    destroyPopupOnHide: R,
    dropdownRender: M
  } = e, F = BR(e, ["prefixCls", "type", "danger", "disabled", "loading", "onClick", "htmlType", "children", "className", "menu", "arrow", "autoFocus", "overlay", "trigger", "align", "open", "onOpenChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide", "dropdownRender"]), T = r("dropdown", a), k = `${T}-button`, H = {
    menu: p,
    arrow: h,
    autoFocus: f,
    align: E,
    disabled: s,
    trigger: s ? [] : b,
    onOpenChange: w,
    getPopupContainer: D || t,
    mouseEnterDelay: _,
    mouseLeaveDelay: P,
    overlayClassName: $,
    overlayStyle: N,
    destroyPopupOnHide: R,
    dropdownRender: M
  }, {
    compactSize: K,
    compactItemClassnames: X
  } = wp(T, n), Q = ie(k, X, g);
  "overlay" in e && (H.overlay = m), "open" in e && (H.open = y), "placement" in e ? H.placement = S : H.placement = n === "rtl" ? "bottomLeft" : "bottomRight";
  const I = /* @__PURE__ */ v.createElement(Rn, {
    type: o,
    danger: i,
    disabled: s,
    loading: u,
    onClick: l,
    htmlType: c,
    href: x,
    title: O
  }, d), z = /* @__PURE__ */ v.createElement(Rn, {
    type: o,
    danger: i,
    icon: B
  }), [V, q] = A([I, z]);
  return /* @__PURE__ */ v.createElement(M0.Compact, Object.assign({
    className: Q,
    size: K,
    block: !0
  }, F), V, /* @__PURE__ */ v.createElement(D0, Object.assign({}, H), q));
};
j0.__ANT_BUTTON = !0;
const AR = j0, _0 = D0;
_0.Button = AR;
const L0 = _0, $R = (e) => {
  const t = e != null && e.algorithm ? ui(e.algorithm) : ui(yi), r = Object.assign(Object.assign({}, ho), e == null ? void 0 : e.token);
  return lh(r, {
    override: e == null ? void 0 : e.token
  }, t, Yc);
}, FR = $R;
function PR(e) {
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
const RR = (e, t) => {
  const r = t ?? yi(e), n = r.fontSizeSM, a = r.controlHeight - 4;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, r), PR(t ?? e)), Mh(n)), {
    // controlHeight
    controlHeight: a
  }), Nh(Object.assign(Object.assign({}, r), {
    controlHeight: a
  })));
}, TR = RR, wn = (e, t) => new rr(e).setAlpha(t).toRgbString(), Ga = (e, t) => new rr(e).lighten(t).toHexString(), NR = (e) => {
  const t = Fn(e, {
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
}, IR = (e, t) => {
  const r = e || "#000", n = t || "#fff";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: wn(n, 0.85),
    colorTextSecondary: wn(n, 0.65),
    colorTextTertiary: wn(n, 0.45),
    colorTextQuaternary: wn(n, 0.25),
    colorFill: wn(n, 0.18),
    colorFillSecondary: wn(n, 0.12),
    colorFillTertiary: wn(n, 0.08),
    colorFillQuaternary: wn(n, 0.04),
    colorBgElevated: Ga(r, 12),
    colorBgContainer: Ga(r, 8),
    colorBgLayout: Ga(r, 0),
    colorBgSpotlight: Ga(r, 26),
    colorBgBlur: wn(n, 0.04),
    colorBorder: Ga(r, 26),
    colorBorderSecondary: Ga(r, 19)
  };
}, MR = (e, t) => {
  const r = Object.keys(Xc).map((a) => {
    const o = Fn(e[a], {
      theme: "dark"
    });
    return new Array(10).fill(1).reduce((i, s, u) => (i[`${a}-${u + 1}`] = o[u], i[`${a}${u + 1}`] = o[u], i), {});
  }).reduce((a, o) => (a = Object.assign(Object.assign({}, a), o), a), {}), n = t ?? yi(e);
  return Object.assign(Object.assign(Object.assign({}, n), r), Ih(e, {
    generateColorPalettes: NR,
    generateNeutralColorPalettes: IR
  }));
}, jR = MR;
function _R() {
  const [e, t, r] = kr();
  return {
    theme: e,
    token: t,
    hashId: r
  };
}
const LR = {
  /** @private Test Usage. Do not use in production. */
  defaultConfig: xs,
  /** Default seedToken */
  defaultSeed: xs.token,
  useToken: _R,
  defaultAlgorithm: yi,
  darkAlgorithm: jR,
  compactAlgorithm: TR,
  getDesignToken: FR
};
var kR = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const zR = {
  border: 0,
  background: "transparent",
  padding: 0,
  lineHeight: "inherit",
  display: "inline-block"
}, VR = /* @__PURE__ */ v.forwardRef((e, t) => {
  const r = (l) => {
    const {
      keyCode: c
    } = l;
    c === Be.ENTER && l.preventDefault();
  }, n = (l) => {
    const {
      keyCode: c
    } = l, {
      onClick: d
    } = e;
    c === Be.ENTER && d && d();
  }, {
    style: a,
    noStyle: o,
    disabled: i
  } = e, s = kR(e, ["style", "noStyle", "disabled"]);
  let u = {};
  return o || (u = Object.assign({}, zR)), i && (u.pointerEvents = "none"), u = Object.assign(Object.assign({}, u), a), /* @__PURE__ */ v.createElement("div", Object.assign({
    role: "button",
    tabIndex: 0,
    ref: t
  }, s, {
    onKeyDown: r,
    onKeyUp: n,
    style: u
  }));
}), Rg = VR;
var HR = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, name: "copy", theme: "outlined" };
const WR = HR;
var KR = function(t, r) {
  return /* @__PURE__ */ v.createElement(dn, We({}, t, {
    ref: r,
    icon: WR
  }));
}, k0 = /* @__PURE__ */ v.forwardRef(KR);
process.env.NODE_ENV !== "production" && (k0.displayName = "CopyOutlined");
const qR = k0;
var UR = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, name: "edit", theme: "outlined" };
const GR = UR;
var XR = function(t, r) {
  return /* @__PURE__ */ v.createElement(dn, We({}, t, {
    ref: r,
    icon: GR
  }));
}, z0 = /* @__PURE__ */ v.forwardRef(XR);
process.env.NODE_ENV !== "production" && (z0.displayName = "EditOutlined");
const YR = z0;
var ZR = function() {
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
}, QR = ZR, Tg = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, JR = "Copy to clipboard: #{key}, Enter";
function eT(e) {
  var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return e.replace(/#{\s*key\s*}/g, t);
}
function tT(e, t) {
  var r, n, a, o, i, s, u = !1;
  t || (t = {}), r = t.debug || !1;
  try {
    a = QR(), o = document.createRange(), i = document.getSelection(), s = document.createElement("span"), s.textContent = e, s.ariaHidden = "true", s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", function(c) {
      if (c.stopPropagation(), t.format)
        if (c.preventDefault(), typeof c.clipboardData > "u") {
          r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var d = Tg[t.format] || Tg.default;
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
      r && console.error("unable to copy using clipboardData: ", d), r && console.error("falling back to prompt"), n = eT("message" in t ? t.message : JR), window.prompt(n, e);
    }
  } finally {
    i && (typeof i.removeRange == "function" ? i.removeRange(o) : i.removeAllRanges()), s && document.body.removeChild(s), a();
  }
  return u;
}
var rT = tT;
const nT = /* @__PURE__ */ mi(rT);
var aT = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z" } }] }, name: "enter", theme: "outlined" };
const oT = aT;
var iT = function(t, r) {
  return /* @__PURE__ */ v.createElement(dn, We({}, t, {
    ref: r,
    icon: oT
  }));
}, V0 = /* @__PURE__ */ v.forwardRef(iT);
process.env.NODE_ENV !== "production" && (V0.displayName = "EnterOutlined");
const sT = V0, uT = (e, t, r, n) => {
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
}, lT = (e) => {
  const t = [1, 2, 3, 4, 5], r = {};
  return t.forEach((n) => {
    r[`
      h${n}&,
      div&-h${n},
      div&-h${n} > textarea,
      h${n}
    `] = uT(e[`fontSizeHeading${n}`], e[`lineHeightHeading${n}`], e.colorTextHeading, e);
  }), r;
}, cT = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    "a&, a": Object.assign(Object.assign({}, Hh(e)), {
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
}, fT = (e) => ({
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
    backgroundColor: Nx[2]
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
}), dT = (e) => {
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
        marginBottom: `calc(1em - ${De(n)})`
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
}, vT = (e) => ({
  [`${e.componentCls}-copy-success`]: {
    "\n    &,\n    &:hover,\n    &:focus": {
      color: e.colorSuccess
    }
  },
  [`${e.componentCls}-copy-icon-only`]: {
    marginInlineStart: 0
  }
}), gT = () => ({
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
}), mT = (e) => {
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
    }, lT(e)), {
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
    }), fT(e)), cT(e)), {
      // Operation
      [`
        ${t}-expand,
        ${t}-edit,
        ${t}-copy
      `]: Object.assign(Object.assign({}, Hh(e)), {
        marginInlineStart: e.marginXXS
      })
    }), dT(e)), vT(e)), gT()), {
      "&-rtl": {
        direction: "rtl"
      }
    })
  };
}, hT = () => ({
  titleMarginTop: "1.2em",
  titleMarginBottom: "0.5em"
}), H0 = ta("Typography", (e) => [mT(e)], hT), pT = (e) => {
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
    component: g,
    enterIcon: p = /* @__PURE__ */ v.createElement(sT, null)
  } = e, h = v.useRef(null), f = v.useRef(!1), m = v.useRef(), [b, E] = v.useState(u);
  v.useEffect(() => {
    E(u);
  }, [u]), v.useEffect(() => {
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
  }, B = (R) => {
    let {
      keyCode: M,
      ctrlKey: F,
      altKey: T,
      metaKey: k,
      shiftKey: H
    } = R;
    m.current === M && !f.current && !F && !T && !k && !H && (M === Be.ENTER ? (x(), d == null || d()) : M === Be.ESC && c());
  }, O = () => {
    x();
  }, A = g ? `${t}-${g}` : "", [_, P, $] = H0(t), N = ie(t, `${t}-edit-content`, {
    [`${t}-rtl`]: o === "rtl"
  }, n, A, P, $);
  return _(/* @__PURE__ */ v.createElement("div", {
    className: N,
    style: a
  }, /* @__PURE__ */ v.createElement(wR, {
    ref: h,
    maxLength: i,
    value: b,
    onChange: y,
    onKeyDown: D,
    onKeyUp: B,
    onCompositionStart: w,
    onCompositionEnd: S,
    onBlur: O,
    "aria-label": r,
    rows: 1,
    autoSize: s
  }), p !== null ? ra(p, {
    className: `${t}-edit-content-confirm`
  }) : null));
}, bT = pT;
function Ju(e, t) {
  return v.useMemo(() => {
    const r = !!e;
    return [r, Object.assign(Object.assign({}, t), r && typeof e == "object" ? e : null)];
  }, [e]);
}
const yT = (e, t) => {
  const r = v.useRef(!1);
  v.useEffect(() => {
    r.current ? e() : r.current = !0;
  }, t);
};
var CT = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const W0 = /* @__PURE__ */ v.forwardRef((e, t) => {
  const {
    prefixCls: r,
    component: n = "article",
    className: a,
    rootClassName: o,
    setContentRef: i,
    children: s,
    direction: u,
    style: l
  } = e, c = CT(e, ["prefixCls", "component", "className", "rootClassName", "setContentRef", "children", "direction", "style"]), {
    getPrefixCls: d,
    direction: g,
    typography: p
  } = v.useContext(Tt), h = u ?? g;
  let f = t;
  i && (f = Qn(t, i)), process.env.NODE_ENV !== "production" && wr("Typography").deprecated(!i, "setContentRef", "ref");
  const m = d("typography", r), [b, E, y] = H0(m), w = ie(m, p == null ? void 0 : p.className, {
    [`${m}-rtl`]: h === "rtl"
  }, a, o, E, y), S = Object.assign(Object.assign({}, p == null ? void 0 : p.style), l);
  return b(
    // @ts-expect-error: Expression produces a union type that is too complex to represent.
    /* @__PURE__ */ v.createElement(n, Object.assign({
      className: w,
      style: S,
      ref: f
    }, c), s)
  );
});
process.env.NODE_ENV !== "production" && (W0.displayName = "Typography");
const K0 = W0;
function q0(e) {
  const t = typeof e;
  return t === "string" || t === "number";
}
function ET(e) {
  let t = 0;
  return e.forEach((r) => {
    q0(r) ? t += String(r).length : t += 1;
  }), t;
}
function el(e, t) {
  let r = 0;
  const n = [];
  for (let a = 0; a < e.length; a += 1) {
    if (r === t)
      return n;
    const o = e[a], s = q0(o) ? String(o).length : 1, u = r + s;
    if (u > t) {
      const l = t - r;
      return n.push(String(o).slice(0, l)), n;
    }
    n.push(o), r = u;
  }
  return e;
}
const wT = 0, Zi = 1, Ng = 2, tl = 3, rl = 4, U0 = (e) => {
  let {
    enabledMeasure: t,
    children: r,
    text: n,
    width: a,
    fontSize: o,
    rows: i,
    onEllipsis: s
  } = e;
  const [[u, l, c], d] = v.useState([0, 0, 0]), [g, p] = v.useState(0), [h, f] = v.useState(wT), [m, b] = v.useState(0), E = v.useRef(null), y = v.useRef(null), w = v.useMemo(() => fn(n), [n]), S = v.useMemo(() => ET(w), [w]), D = v.useMemo(() => !t || h !== tl ? g && h !== rl && t ? r(el(w, g), g < S) : r(w, !1) : r(el(w, l), l < S), [t, h, r, w, l, S]);
  jt(() => {
    t && a && o && S && (f(Zi), d([0, Math.ceil(S / 2), S]));
  }, [t, a, o, n, S, i]), jt(() => {
    var A;
    h === Zi && b(((A = E.current) === null || A === void 0 ? void 0 : A.offsetHeight) || 0);
  }, [h]), jt(() => {
    var A, _;
    if (m) {
      if (h === Zi) {
        const P = ((A = y.current) === null || A === void 0 ? void 0 : A.offsetHeight) || 0, $ = i * m;
        P <= $ ? (f(rl), s(!1)) : f(Ng);
      } else if (h === Ng)
        if (u !== c) {
          const P = ((_ = y.current) === null || _ === void 0 ? void 0 : _.offsetHeight) || 0, $ = i * m;
          let N = u, R = c;
          u === c - 1 ? R = u : P <= $ ? N = l : R = l;
          const M = Math.ceil((N + R) / 2);
          d([N, M, R]);
        } else
          f(tl), p(l), s(!0);
    }
  }, [h, u, c, i, m]);
  const x = {
    width: a,
    whiteSpace: "normal",
    margin: 0,
    padding: 0
  }, B = (A, _, P) => /* @__PURE__ */ v.createElement("span", {
    "aria-hidden": !0,
    ref: _,
    style: Object.assign({
      position: "fixed",
      display: "block",
      left: 0,
      top: 0,
      zIndex: -9999,
      visibility: "hidden",
      pointerEvents: "none",
      fontSize: Math.ceil(o / 2) * 2
    }, P)
  }, A), O = (A, _) => {
    const P = el(w, A);
    return B(r(P, !0), _, x);
  };
  return /* @__PURE__ */ v.createElement(v.Fragment, null, D, t && h !== tl && h !== rl && /* @__PURE__ */ v.createElement(v.Fragment, null, B("lg", E, {
    wordBreak: "keep-all",
    whiteSpace: "nowrap"
  }), h === Zi ? B(r(w, !1), y, x) : O(l, y)));
};
process.env.NODE_ENV !== "production" && (U0.displayName = "Ellipsis");
const DT = U0, G0 = (e) => {
  let {
    enabledEllipsis: t,
    isEllipsis: r,
    children: n,
    tooltipProps: a
  } = e;
  return !(a != null && a.title) || !t ? n : /* @__PURE__ */ v.createElement(Ts, Object.assign({
    open: r ? void 0 : !1
  }, a), n);
};
process.env.NODE_ENV !== "production" && (G0.displayName = "EllipsisTooltip");
const ST = G0;
var xT = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function OT(e, t) {
  let {
    mark: r,
    code: n,
    underline: a,
    delete: o,
    strong: i,
    keyboard: s,
    italic: u
  } = e, l = t;
  function c(d, g) {
    g && (l = /* @__PURE__ */ v.createElement(d, {}, l));
  }
  return c("strong", i), c("u", a), c("del", o), c("code", n), c("mark", r), c("kbd", s), c("i", u), l;
}
function Qi(e, t, r) {
  return e === !0 || e === void 0 ? t : e || r && t;
}
function Ig(e) {
  return e === !1 ? [!1, !1] : Array.isArray(e) ? e : [e];
}
const BT = "...", AT = /* @__PURE__ */ v.forwardRef((e, t) => {
  var r, n, a;
  const {
    prefixCls: o,
    className: i,
    style: s,
    type: u,
    disabled: l,
    children: c,
    ellipsis: d,
    editable: g,
    copyable: p,
    component: h,
    title: f
  } = e, m = xT(e, ["prefixCls", "className", "style", "type", "disabled", "children", "ellipsis", "editable", "copyable", "component", "title"]), {
    getPrefixCls: b,
    direction: E
  } = v.useContext(Tt), [y] = hx("Text"), w = v.useRef(null), S = v.useRef(null), D = b("typography", o), x = en(m, ["mark", "code", "delete", "underline", "strong", "keyboard", "italic"]), [B, O] = Ju(g), [A, _] = Qr(!1, {
    value: O.editing
  }), {
    triggerType: P = ["icon"]
  } = O, $ = (se) => {
    var Ae;
    se && ((Ae = O.onStart) === null || Ae === void 0 || Ae.call(O)), _(se);
  };
  yT(() => {
    var se;
    A || (se = S.current) === null || se === void 0 || se.focus();
  }, [A]);
  const N = (se) => {
    se == null || se.preventDefault(), $(!0);
  }, R = (se) => {
    var Ae;
    (Ae = O.onChange) === null || Ae === void 0 || Ae.call(O, se), $(!1);
  }, M = () => {
    var se;
    (se = O.onCancel) === null || se === void 0 || se.call(O), $(!1);
  }, [F, T] = Ju(p), [k, H] = v.useState(!1), K = v.useRef(null), X = {};
  T.format && (X.format = T.format);
  const Q = () => {
    K.current && clearTimeout(K.current);
  }, I = (se) => {
    var Ae;
    se == null || se.preventDefault(), se == null || se.stopPropagation(), nT(T.text || String(c) || "", X), H(!0), Q(), K.current = setTimeout(() => {
      H(!1);
    }, 3e3), (Ae = T.onCopy) === null || Ae === void 0 || Ae.call(T, se);
  };
  v.useEffect(() => Q, []);
  const [z, V] = v.useState(!1), [q, te] = v.useState(!1), [re, le] = v.useState(!1), [oe, ge] = v.useState(!1), [ce, Y] = v.useState(!1), [pe, Se] = v.useState(!0), [ye, we] = Ju(d, {
    expandable: !1
  }), de = ye && !re, {
    rows: Ee = 1
  } = we, he = v.useMemo(() => (
    // Disable ellipsis
    !de || // Provide suffix
    we.suffix !== void 0 || we.onEllipsis || // Can't use css ellipsis since we need to provide the place for button
    we.expandable || B || F
  ), [de, we, B, F]);
  jt(() => {
    ye && !he && (V(Hv("webkitLineClamp")), te(Hv("textOverflow")));
  }, [he, ye]);
  const me = v.useMemo(() => he ? !1 : Ee === 1 ? q : z, [he, q, z]), be = de && (me ? ce : oe), Ie = de && Ee === 1 && me, Re = de && Ee > 1 && me, je = (se) => {
    var Ae;
    le(!0), (Ae = we.onExpand) === null || Ae === void 0 || Ae.call(we, se);
  }, [bt, _e] = v.useState(0), [Ce, ke] = v.useState(0), ze = (se, Ae) => {
    let {
      offsetWidth: Le
    } = se;
    var tt;
    _e(Le), ke(parseInt((tt = window.getComputedStyle) === null || tt === void 0 ? void 0 : tt.call(window, Ae).fontSize, 10) || 0);
  }, _t = (se) => {
    var Ae;
    ge(se), oe !== se && ((Ae = we.onEllipsis) === null || Ae === void 0 || Ae.call(we, se));
  };
  v.useEffect(() => {
    const se = w.current;
    if (ye && me && se) {
      const Ae = Re ? se.offsetHeight < se.scrollHeight : se.offsetWidth < se.scrollWidth;
      ce !== Ae && Y(Ae);
    }
  }, [ye, me, c, Re, pe, bt]), v.useEffect(() => {
    const se = w.current;
    if (typeof IntersectionObserver > "u" || !se || !me || !de)
      return;
    const Ae = new IntersectionObserver(() => {
      Se(!!se.offsetParent);
    });
    return Ae.observe(se), () => {
      Ae.disconnect();
    };
  }, [me, de]);
  let et = {};
  we.tooltip === !0 ? et = {
    title: (r = O.text) !== null && r !== void 0 ? r : c
  } : /* @__PURE__ */ v.isValidElement(we.tooltip) ? et = {
    title: we.tooltip
  } : typeof we.tooltip == "object" ? et = Object.assign({
    title: (n = O.text) !== null && n !== void 0 ? n : c
  }, we.tooltip) : et = {
    title: we.tooltip
  };
  const xt = v.useMemo(() => {
    const se = (Ae) => ["string", "number"].includes(typeof Ae);
    if (!(!ye || me)) {
      if (se(O.text))
        return O.text;
      if (se(c))
        return c;
      if (se(f))
        return f;
      if (se(et.title))
        return et.title;
    }
  }, [ye, me, f, et.title, be]);
  if (A)
    return /* @__PURE__ */ v.createElement(bT, {
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
  const mt = () => {
    const {
      expandable: se,
      symbol: Ae
    } = we;
    if (!se)
      return null;
    let Le;
    return Ae ? Le = Ae : Le = y == null ? void 0 : y.expand, /* @__PURE__ */ v.createElement("a", {
      key: "expand",
      className: `${D}-expand`,
      onClick: je,
      "aria-label": y == null ? void 0 : y.expand
    }, Le);
  }, Ze = () => {
    if (!B)
      return;
    const {
      icon: se,
      tooltip: Ae
    } = O, Le = fn(Ae)[0] || (y == null ? void 0 : y.edit), tt = typeof Le == "string" ? Le : "";
    return P.includes("icon") ? /* @__PURE__ */ v.createElement(Ts, {
      key: "edit",
      title: Ae === !1 ? "" : Le
    }, /* @__PURE__ */ v.createElement(Rg, {
      ref: S,
      className: `${D}-edit`,
      onClick: N,
      "aria-label": tt
    }, se || /* @__PURE__ */ v.createElement(YR, {
      role: "button"
    }))) : null;
  }, ot = () => {
    if (!F)
      return null;
    const {
      tooltips: se,
      icon: Ae
    } = T, Le = Ig(se), tt = Ig(Ae), Qe = k ? Qi(Le[1], y == null ? void 0 : y.copied) : Qi(Le[0], y == null ? void 0 : y.copy), $e = k ? y == null ? void 0 : y.copied : y == null ? void 0 : y.copy, Ye = typeof Qe == "string" ? Qe : $e;
    return /* @__PURE__ */ v.createElement(Ts, {
      key: "copy",
      title: Qe
    }, /* @__PURE__ */ v.createElement(Rg, {
      className: ie(`${D}-copy`, {
        [`${D}-copy-success`]: k,
        [`${D}-copy-icon-only`]: c == null
      }),
      onClick: I,
      "aria-label": Ye
    }, k ? Qi(tt[1], /* @__PURE__ */ v.createElement(NF, null), !0) : Qi(tt[0], /* @__PURE__ */ v.createElement(qR, null), !0)));
  }, Wt = (se) => [se && mt(), Ze(), ot()], Et = (se) => [se && /* @__PURE__ */ v.createElement("span", {
    "aria-hidden": !0,
    key: "ellipsis"
  }, BT), we.suffix, Wt(se)];
  return /* @__PURE__ */ v.createElement(ea, {
    onResize: ze,
    disabled: !de
  }, (se) => /* @__PURE__ */ v.createElement(ST, {
    tooltipProps: et,
    enabledEllipsis: de,
    isEllipsis: be
  }, /* @__PURE__ */ v.createElement(K0, Object.assign({
    className: ie({
      [`${D}-${u}`]: u,
      [`${D}-disabled`]: l,
      [`${D}-ellipsis`]: ye,
      [`${D}-single-line`]: de && Ee === 1,
      [`${D}-ellipsis-single-line`]: Ie,
      [`${D}-ellipsis-multiple-line`]: Re
    }, i),
    prefixCls: o,
    style: Object.assign(Object.assign({}, s), {
      WebkitLineClamp: Re ? Ee : void 0
    }),
    component: h,
    ref: Qn(se, w, t),
    direction: E,
    onClick: P.includes("text") ? N : void 0,
    "aria-label": xt == null ? void 0 : xt.toString(),
    title: f
  }, x), /* @__PURE__ */ v.createElement(DT, {
    enabledMeasure: de && !me,
    text: c,
    rows: Ee,
    width: bt,
    fontSize: Ce,
    onEllipsis: _t
  }, (Ae, Le) => {
    let tt = Ae;
    return Ae.length && Le && xt && (tt = /* @__PURE__ */ v.createElement("span", {
      key: "show-content",
      "aria-hidden": !0
    }, tt)), OT(e, /* @__PURE__ */ v.createElement(v.Fragment, null, tt, Et(Le)));
  }))));
}), fu = AT;
var $T = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const FT = /* @__PURE__ */ v.forwardRef((e, t) => {
  var {
    ellipsis: r,
    rel: n
  } = e, a = $T(e, ["ellipsis", "rel"]);
  if (process.env.NODE_ENV !== "production") {
    const i = wr("Typography.Link");
    process.env.NODE_ENV !== "production" && i(typeof r != "object", "usage", "`ellipsis` only supports boolean value.");
  }
  const o = Object.assign(Object.assign({}, a), {
    rel: n === void 0 && a.target === "_blank" ? "noopener noreferrer" : n
  });
  return delete o.navigate, /* @__PURE__ */ v.createElement(fu, Object.assign({}, o, {
    ref: t,
    ellipsis: !!r,
    component: "a"
  }));
}), PT = FT, RT = /* @__PURE__ */ v.forwardRef((e, t) => /* @__PURE__ */ v.createElement(fu, Object.assign({
  ref: t
}, e, {
  component: "div"
}))), TT = RT;
var NT = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const IT = (e, t) => {
  var {
    ellipsis: r
  } = e, n = NT(e, ["ellipsis"]);
  const a = v.useMemo(() => r && typeof r == "object" ? en(r, ["expandable", "rows"]) : r, [r]);
  if (process.env.NODE_ENV !== "production") {
    const o = wr("Typography.Text");
    process.env.NODE_ENV !== "production" && o(typeof r != "object" || !r || !("expandable" in r) && !("rows" in r), "usage", "`ellipsis` do not support `expandable` or `rows` props.");
  }
  return /* @__PURE__ */ v.createElement(fu, Object.assign({
    ref: t
  }, n, {
    ellipsis: a,
    component: "span"
  }));
}, MT = /* @__PURE__ */ v.forwardRef(IT);
var jT = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Mg = [1, 2, 3, 4, 5], _T = /* @__PURE__ */ v.forwardRef((e, t) => {
  const {
    level: r = 1
  } = e, n = jT(e, ["level"]);
  let a;
  if (process.env.NODE_ENV !== "production") {
    const o = wr("Typography.Title");
    process.env.NODE_ENV !== "production" && o(Mg.includes(r), "usage", "Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version.");
  }
  return Mg.includes(r) ? a = `h${r}` : a = "h1", /* @__PURE__ */ v.createElement(fu, Object.assign({
    ref: t
  }, n, {
    component: a
  }));
}), LT = _T, Oi = K0;
Oi.Text = MT;
Oi.Link = PT;
Oi.Title = LT;
Oi.Paragraph = TT;
const kT = Oi, zT = (e) => {
  const { attributes: t, children: r, element: n } = e, { disabled: a, checked: o, textAlign: i } = n, s = lr(), u = Pm(), l = u || a, c = ie("wu_check_list"), d = {
    justifyContent: i ? i === Un.Center ? "center" : `flex-${i}` : void 0
  };
  return /* @__PURE__ */ Me.jsxs(
    "div",
    {
      className: c,
      style: d,
      ...t,
      onClick: () => {
        Zw(s, n);
      },
      children: [
        /* @__PURE__ */ Me.jsx("span", { contentEditable: !1, className: "wu_check_list_box", children: /* @__PURE__ */ Me.jsx(
          oR,
          {
            disabled: l,
            checked: o,
            onChange: (g) => {
              const p = Z.findPath(s, n), h = {
                checked: g.target.checked
              };
              J.setNodes(s, h, { at: p });
            }
          }
        ) }),
        /* @__PURE__ */ Me.jsx(
          "span",
          {
            className: ie("wu_check_list_label", {
              wu_check_list_checked: o
            }),
            onClick: (g) => g.stopPropagation(),
            suppressContentEditableWarning: !0,
            contentEditable: !u,
            children: r
          }
        )
      ]
    }
  );
}, VT = (e) => {
  const { attributes: t, children: r } = e;
  return /* @__PURE__ */ Me.jsx("span", { ...t, children: r });
}, HT = (e) => {
  const { attributes: t, element: r, children: n } = e, { textAlign: a, heading: o } = r, i = {
    textAlign: a
  };
  return o ? /* @__PURE__ */ Me.jsx(kT.Title, { level: o, style: i, ...t, children: n }) : /* @__PURE__ */ Me.jsx("p", { style: i, ...t, children: n });
}, WT = (e) => {
  const { attributes: t, children: r } = e;
  return /* @__PURE__ */ Me.jsx("pre", { ...t, children: /* @__PURE__ */ Me.jsx("code", { children: r }) });
}, KT = (e) => {
  const { attributes: t, leaf: r, children: n } = e, a = ie({
    "wu-font-bold": r.bold,
    "wu-underline": r.underline,
    "wu-italic": r.italic
  });
  return /* @__PURE__ */ Me.jsx("span", { className: a, ...t, children: n });
}, qT = () => {
  const e = rt((n) => {
    const { children: a, ...o } = n, i = n.element.type;
    return Pt(i).with(kt.Bold, () => /* @__PURE__ */ Me.jsx(WT, { ...o, children: a })).with(kt.Code, () => /* @__PURE__ */ Me.jsx(VT, { ...o, children: a })).with(kt.CheckList, () => /* @__PURE__ */ Me.jsx(zT, { ...o, children: a })).otherwise(() => /* @__PURE__ */ Me.jsx(HT, { ...o, children: a }));
  }, []), t = rt((n) => {
    const { children: a, ...o } = n;
    return /* @__PURE__ */ Me.jsx(KT, { ...o, children: a });
  }, []), r = rt((n) => {
    const { children: a, attributes: o } = n;
    return /* @__PURE__ */ Me.jsx(
      "span",
      {
        ...o,
        style: { fontStyle: "italic", color: "gray", position: "absolute", left: 3, zIndex: -1 },
        children: a
      }
    );
  }, []);
  return { renderElement: e, renderLeaf: t, renderPlaceholder: r };
}, UT = (e) => {
  const t = Je(!1);
  return [(n) => {
    const a = n.ctrlKey || n.metaKey;
    Pt(a).with(!0, () => {
      Pt(n).with({ shiftKey: !0 }, (o) => {
        Pt(o).with({ key: "T" }, () => {
          console.info("切换CheckList"), n.preventDefault(), dt.toggleCheckListNode(e);
        }), Pt(o).with({ key: "L" }, () => {
          console.info("切换align-left"), n.preventDefault(), dt.toggleTextAlignMark(e, Un.Start);
        }), Pt(o).with({ key: "C" }, () => {
          console.info("切换align-center"), n.preventDefault(), dt.toggleTextAlignMark(e, Un.Center);
        }), Pt(o).with({ key: "R" }, () => {
          console.info("切换align-right"), n.preventDefault(), dt.toggleTextAlignMark(e, Un.End);
        });
      }).with({ altKey: !0 }, (o) => {
        Pt(o).with({ key: "R" }, () => {
          console.info("还原"), o.preventDefault(), dt.restoreNormal(e);
        });
      }).with({ key: "a" }, () => {
        t.current ? (console.info("编辑器全选"), t.current = !1) : (console.info("模块内全选"), t.current = !0, dt.selectAllInModule(e) && n.preventDefault(), setTimeout(() => {
          t.current = !1;
        }, 400));
      }).with({ key: Lo.Bold }, () => {
        console.info("切换加粗"), n.preventDefault(), dt.toggleBoldMark(e);
      }).with({ key: Lo.Italic }, () => {
        console.info("切换斜体"), n.preventDefault(), dt.toggleItalicMark(e);
      }).with({ key: Lo.Underline }, () => {
        console.info("切换下划线"), n.preventDefault(), dt.toggleUnderlineMark(e);
      });
    }).otherwise(() => {
      const { altKey: o, shiftKey: i } = n;
      Pt(!o && !i).with(!0, () => {
        Pt(n.key).with(Lo.Tab, () => {
          console.info("缩进"), n.preventDefault(), va.withoutMerging(e, () => {
            dt.indent(e);
          });
        });
      });
    });
  }];
}, { darkAlgorithm: GT, compactAlgorithm: jg } = LR, XT = (e) => {
  const { theme: t, children: r } = e;
  return /* @__PURE__ */ Me.jsx(oS, { hashPriority: "high", children: /* @__PURE__ */ Me.jsx(
    lp,
    {
      theme: {
        algorithm: t === "dark" ? [GT, jg] : [jg]
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
const YT = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), X0 = (...e) => e.filter((t, r, n) => !!t && n.indexOf(t) === r).join(" ");
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ZT = {
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
const QT = Rr(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: a = "",
    children: o,
    iconNode: i,
    ...s
  }, u) => nl(
    "svg",
    {
      ref: u,
      ...ZT,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: X0("lucide", a),
      ...s
    },
    [
      ...i.map(([l, c]) => nl(l, c)),
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
const mr = (e, t) => {
  const r = Rr(
    ({ className: n, ...a }, o) => nl(QT, {
      ref: o,
      iconNode: t,
      className: X0(`lucide-${YT(e)}`, n),
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
const JT = mr("AlignCenter", [
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
const eN = mr("AlignJustify", [
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
const tN = mr("AlignLeft", [
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
const rN = mr("AlignRight", [
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
const nN = mr("Bold", [
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
const aN = mr("Eraser", [
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
const oN = mr("Heading1", [
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
const iN = mr("Heading2", [
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
const sN = mr("Heading3", [
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
const uN = mr("Heading4", [
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
const lN = mr("Heading5", [
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
const cN = mr("Heading", [
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
const fN = mr("Italic", [
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
const dN = mr("ListTodo", [
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
const vN = mr("Underline", [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
]), gN = () => {
  const e = Oa((n) => dt.isBoldMarkActive(n)), t = lr(), r = sr(() => e ? "primary" : "text", [e]);
  return /* @__PURE__ */ Me.jsx(
    Rn,
    {
      type: r,
      onClick: () => {
        Z.focus(t), dt.toggleBoldMark(t);
      },
      className: ie("wu_toolbar_icon_btn"),
      icon: /* @__PURE__ */ Me.jsx(nN, { className: ie("wu_toolbar_icon_btn_icon") })
    }
  );
}, mN = () => {
  const e = Oa((n) => dt.isItalicMarkActive(n)), t = lr(), r = sr(() => e ? "primary" : "text", [e]);
  return /* @__PURE__ */ Me.jsx(
    Rn,
    {
      type: r,
      onClick: () => {
        Z.focus(t), dt.toggleItalicMark(t);
      },
      className: ie("wu_toolbar_icon_btn"),
      icon: /* @__PURE__ */ Me.jsx(fN, { className: ie("wu_toolbar_icon_btn_icon") })
    }
  );
}, hN = () => {
  const e = Oa(
    (n) => dt.isUnderlineMarkActive(n)
  ), t = lr(), r = sr(() => e ? "primary" : "text", [e]);
  return /* @__PURE__ */ Me.jsx(
    Rn,
    {
      type: r,
      onClick: () => {
        Z.focus(t), dt.toggleUnderlineMark(t);
      },
      className: ie("wu_toolbar_icon_btn"),
      icon: /* @__PURE__ */ Me.jsx(vN, { className: ie("wu_toolbar_icon_btn_icon") })
    }
  );
}, pN = () => {
  const e = lr();
  return /* @__PURE__ */ Me.jsx(
    Rn,
    {
      type: "text",
      onClick: () => {
        Z.focus(e), dt.restoreNormal(e);
      },
      className: ie("wu_toolbar_icon_btn"),
      icon: /* @__PURE__ */ Me.jsx(aN, { className: ie("wu_toolbar_icon_btn_icon") })
    }
  );
}, bN = () => {
  const e = Oa((i) => dt.isTextAlignMarkActive(i)), t = lr(), r = sr(() => e ? "primary" : "text", [e]), n = (i) => {
    Z.focus(t), Pt(e === i.key).with(!0, () => {
      dt.toggleTextAlignMark(t);
    }).otherwise(() => {
      dt.toggleTextAlignMark(t, i.key);
    });
  }, a = ie("wu_toolbar_icon_btn_icon"), o = [
    {
      label: "左对齐",
      key: Un.Start,
      icon: /* @__PURE__ */ Me.jsx(tN, { className: a })
    },
    {
      label: "居中对齐",
      key: Un.Center,
      icon: /* @__PURE__ */ Me.jsx(JT, { className: a })
    },
    {
      label: "右对齐",
      key: Un.End,
      icon: /* @__PURE__ */ Me.jsx(rN, { className: a })
    }
  ];
  return /* @__PURE__ */ Me.jsx(
    L0,
    {
      menu: {
        items: o,
        selectable: !0,
        selectedKeys: e ? [e] : [],
        onClick: n
      },
      children: /* @__PURE__ */ Me.jsx(
        Rn,
        {
          type: r,
          className: ie("wu_toolbar_icon_btn"),
          icon: /* @__PURE__ */ Me.jsx(eN, { className: a })
        }
      )
    }
  );
}, yN = () => {
  const e = Oa((n) => dt.isCheckListNode(n)), t = lr(), r = sr(() => e ? "primary" : "text", [e]);
  return /* @__PURE__ */ Me.jsx(
    Rn,
    {
      type: r,
      className: ie("wu_toolbar_icon_btn"),
      onClick: () => {
        Z.focus(t), dt.toggleCheckListNode(t);
      },
      icon: /* @__PURE__ */ Me.jsx(dN, { className: ie("wu_toolbar_icon_btn_icon") })
    }
  );
}, CN = () => {
  const e = Oa(
    (i) => dt.isTextHeadingMarkActive(i)
  ), t = lr(), r = sr(() => e ? "primary" : "text", [e]), n = (i) => {
    Z.focus(t), Pt((e == null ? void 0 : e.toString()) === i.key).with(!0, () => {
      dt.toggleTextHeadingMark(t);
    }).otherwise(() => {
      dt.toggleTextHeadingMark(t, Number(i.key));
    });
  }, a = ie("wu_toolbar_icon_btn_icon"), o = [
    {
      label: "一级标题",
      key: Xa.H1.toString(),
      icon: /* @__PURE__ */ Me.jsx(oN, { className: a })
    },
    {
      label: "二级标题",
      key: Xa.H2.toString(),
      icon: /* @__PURE__ */ Me.jsx(iN, { className: a })
    },
    {
      label: "三级标题",
      key: Xa.H3.toString(),
      icon: /* @__PURE__ */ Me.jsx(sN, { className: a })
    },
    {
      label: "四级标题",
      key: Xa.H4.toString(),
      icon: /* @__PURE__ */ Me.jsx(uN, { className: a })
    },
    {
      label: "五级标题",
      key: Xa.H5.toString(),
      icon: /* @__PURE__ */ Me.jsx(lN, { className: a })
    }
  ];
  return /* @__PURE__ */ Me.jsx(
    L0,
    {
      menu: {
        items: o,
        selectable: !0,
        selectedKeys: e ? [e.toString()] : [],
        onClick: n
      },
      children: /* @__PURE__ */ Me.jsx(
        Rn,
        {
          type: r,
          className: ie("wu_toolbar_icon_btn"),
          icon: /* @__PURE__ */ Me.jsx(cN, { className: a })
        }
      )
    }
  );
}, EN = (e) => {
  const { className: t } = e;
  return /* @__PURE__ */ Me.jsxs(M0, { className: ie("wu_toolbar", t), children: [
    /* @__PURE__ */ Me.jsx(CN, {}),
    /* @__PURE__ */ Me.jsx(yN, {}),
    /* @__PURE__ */ Me.jsx(gN, {}),
    /* @__PURE__ */ Me.jsx(mN, {}),
    /* @__PURE__ */ Me.jsx(hN, {}),
    /* @__PURE__ */ Me.jsx(pN, {}),
    /* @__PURE__ */ Me.jsx(bN, {})
  ] });
}, FN = Rr((e, t) => {
  const { theme: r, placeholder: n, classes: a, initialValue: o = yl() } = e, [i, { showPlaceholder: s, handlePlaceholder: u }] = vD();
  bo(t, () => ({
    editor: i
  }));
  const { renderElement: l, renderLeaf: c, renderPlaceholder: d } = qT(), [g] = UT(i);
  return /* @__PURE__ */ Me.jsx(XT, { theme: r, children: /* @__PURE__ */ Me.jsxs(
    zw,
    {
      editor: i,
      onValueChange: (p) => {
        console.log("val", p), u(p);
      },
      onSelectionChange: (p) => {
        console.log("selection:", p);
      },
      initialValue: o,
      children: [
        /* @__PURE__ */ Me.jsx(EN, { className: ie(a == null ? void 0 : a.toolbar) }),
        /* @__PURE__ */ Me.jsx(
          Rw,
          {
            className: ie("wu_editable", a == null ? void 0 : a.editor),
            renderElement: l,
            renderLeaf: c,
            renderPlaceholder: d,
            spellCheck: !0,
            placeholder: s ? n : void 0,
            onKeyDown: g
          }
        )
      ]
    }
  ) });
});
export {
  bw as DefaultElement,
  gw as DefaultLeaf,
  Tw as DefaultPlaceholder,
  Rw as Editable,
  C as Editor,
  ve as Element,
  SN as Location,
  fe as Node,
  Hn as Operation,
  L as Path,
  pb as PathRef,
  Ge as Point,
  bb as PointRef,
  U as Range,
  yb as RangeRef,
  Z as ReactEditor,
  Yt as Scrubber,
  zw as Slate,
  Rb as Span,
  Oe as Text,
  J as Transforms,
  FN as WuEditor,
  dy as above,
  vy as addMark,
  gy as after,
  sy as apply,
  my as before,
  pC as collapse,
  MC as createEditor,
  hy as deleteBackward,
  py as deleteForward,
  by as deleteFragment,
  mC as deleteText,
  bC as deselect,
  yy as edges,
  Cy as elementReadOnly,
  Ey as end,
  wy as first,
  Dy as fragment,
  uy as getDirtyPaths,
  ly as getFragment,
  Sy as getVoid,
  xy as hasBlocks,
  Oy as hasInlines,
  By as hasPath,
  Ay as hasTexts,
  $y as insertBreak,
  hC as insertFragment,
  Fy as insertNode,
  DC as insertNodes,
  Py as insertSoftBreak,
  Ty as insertText,
  Ny as isBlock,
  Iy as isEdge,
  Pb as isEditor,
  My as isEmpty,
  jy as isEnd,
  _y as isNormalizing,
  Ly as isStart,
  ky as last,
  zy as leaf,
  Vy as levels,
  SC as liftNodes,
  Ky as marks,
  BC as mergeNodes,
  yC as move,
  AC as moveNodes,
  qy as next,
  Uy as node,
  Gy as nodes,
  Xy as normalize,
  cy as normalizeNode,
  Yy as parent,
  Jy as path,
  Zy as pathRef,
  Qy as pathRefs,
  rC as point,
  eC as pointRef,
  tC as pointRefs,
  nC as positions,
  aC as previous,
  sC as range,
  oC as rangeRef,
  iC as rangeRefs,
  lC as removeMark,
  $C as removeNodes,
  CC as select,
  FC as setNodes,
  cC as setNormalizing,
  EC as setPoint,
  wC as setSelection,
  fy as shouldNormalize,
  RC as splitNodes,
  fC as start,
  dC as string,
  vC as unhangRange,
  TC as unsetNodes,
  NC as unwrapNodes,
  AN as useEditor,
  BN as useFocused,
  Pm as useReadOnly,
  xN as useSelected,
  Cw as useSlate,
  $N as useSlateSelection,
  Oa as useSlateSelector,
  lr as useSlateStatic,
  ON as useSlateWithV,
  Ww as withReact,
  gC as withoutNormalizing,
  IC as wrapNodes
};
