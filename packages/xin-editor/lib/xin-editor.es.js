import * as v from "react";
import Q, { useContext as Ct, useCallback as et, useState as Qt, useRef as ze, useReducer as Ig, useMemo as Pt, useEffect as At, createContext as _r, useLayoutEffect as Tg, Component as Py, memo as Ry, forwardRef as br, isValidElement as Ny, Children as Iy, createRef as Ty, useImperativeHandle as Ia, cloneElement as My, createElement as Du } from "react";
import * as jy from "react-dom";
import Mg, { createPortal as _y, unstable_batchedUpdates as Ly, flushSync as ky } from "react-dom";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function ld(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ar(e) {
  var t, r;
  return ld(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (r = t.prototype, !(ld(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
var jg = Symbol.for("immer-nothing"), ud = Symbol.for("immer-draftable"), Tr = Symbol.for("immer-state"), zy = process.env.NODE_ENV !== "production" ? [
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
function Sr(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = zy[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var po = Object.getPrototypeOf;
function Aa(e) {
  return !!e && !!e[Tr];
}
function Ba(e) {
  var t;
  return e ? _g(e) || Array.isArray(e) || !!e[ud] || !!((t = e.constructor) != null && t[ud]) || rl(e) || nl(e) : !1;
}
var Vy = Object.prototype.constructor.toString();
function _g(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = po(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === Vy;
}
function ci(e, t) {
  tl(e) === 0 ? Object.entries(e).forEach(([r, n]) => {
    t(r, n, e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function tl(e) {
  const t = e[Tr];
  return t ? t.type_ : Array.isArray(e) ? 1 : rl(e) ? 2 : nl(e) ? 3 : 0;
}
function xu(e, t) {
  return tl(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Lg(e, t, r) {
  const n = tl(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function Hy(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function rl(e) {
  return e instanceof Map;
}
function nl(e) {
  return e instanceof Set;
}
function fa(e) {
  return e.copy_ || e.base_;
}
function Ou(e, t) {
  if (rl(e))
    return new Map(e);
  if (nl(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && _g(e))
    return po(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const r = Object.getOwnPropertyDescriptors(e);
  delete r[Tr];
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
  return Object.create(po(e), r);
}
function Kc(e, t = !1) {
  return al(e) || Aa(e) || !Ba(e) || (tl(e) > 1 && (e.set = e.add = e.clear = e.delete = Wy), Object.freeze(e), t && ci(e, (r, n) => Kc(n, !0))), e;
}
function Wy() {
  Sr(2);
}
function al(e) {
  return Object.isFrozen(e);
}
var qy = {};
function Fa(e) {
  const t = qy[e];
  return t || Sr(0, e), t;
}
var fi;
function kg() {
  return fi;
}
function Ky(e, t) {
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
function cd(e, t) {
  t && (Fa("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function $u(e) {
  Au(e), e.drafts_.forEach(Uy), e.drafts_ = null;
}
function Au(e) {
  e === fi && (fi = e.parent_);
}
function fd(e) {
  return fi = Ky(fi, e);
}
function Uy(e) {
  const t = e[Tr];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function dd(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[Tr].modified_ && ($u(t), Sr(4)), Ba(e) && (e = Ps(t, e), t.parent_ || Rs(t, e)), t.patches_ && Fa("Patches").generateReplacementPatches_(
    r[Tr].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Ps(t, r, []), $u(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== jg ? e : void 0;
}
function Ps(e, t, r) {
  if (al(t))
    return t;
  const n = t[Tr];
  if (!n)
    return ci(
      t,
      (a, o) => vd(e, n, t, a, o, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return Rs(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const a = n.copy_;
    let o = a, i = !1;
    n.type_ === 3 && (o = new Set(a), a.clear(), i = !0), ci(
      o,
      (s, l) => vd(e, n, a, s, l, r, i)
    ), Rs(e, a, !1), r && e.patches_ && Fa("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function vd(e, t, r, n, a, o, i) {
  if (process.env.NODE_ENV !== "production" && a === r && Sr(5), Aa(a)) {
    const s = o && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !xu(t.assigned_, n) ? o.concat(n) : void 0, l = Ps(e, a, s);
    if (Lg(r, n, l), Aa(l))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    i && r.add(a);
  if (Ba(a) && !al(a)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Ps(e, a), (!t || !t.scope_.parent_) && Rs(e, a);
  }
}
function Rs(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Kc(t, r);
}
function Gy(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : kg(),
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
  let a = n, o = Uc;
  r && (a = [n], o = di);
  const { revoke: i, proxy: s } = Proxy.revocable(a, o);
  return n.draft_ = s, n.revoke_ = i, s;
}
var Uc = {
  get(e, t) {
    if (t === Tr)
      return e;
    const r = fa(e);
    if (!xu(r, t))
      return Xy(e, r, t);
    const n = r[t];
    return e.finalized_ || !Ba(n) ? n : n === Nl(e.base_, t) ? (Il(e), e.copy_[t] = Fu(n, e)) : n;
  },
  has(e, t) {
    return t in fa(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(fa(e));
  },
  set(e, t, r) {
    const n = zg(fa(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const a = Nl(fa(e), t), o = a == null ? void 0 : a[Tr];
      if (o && o.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (Hy(r, a) && (r !== void 0 || xu(e.base_, t)))
        return !0;
      Il(e), Bu(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Nl(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Il(e), Bu(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = fa(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    Sr(11);
  },
  getPrototypeOf(e) {
    return po(e.base_);
  },
  setPrototypeOf() {
    Sr(12);
  }
}, di = {};
ci(Uc, (e, t) => {
  di[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
di.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Sr(13), di.set.call(this, e, t, void 0);
};
di.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Sr(14), Uc.set.call(this, e[0], t, r, e[0]);
};
function Nl(e, t) {
  const r = e[Tr];
  return (r ? fa(r) : e)[t];
}
function Xy(e, t, r) {
  var a;
  const n = zg(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (a = n.get) == null ? void 0 : a.call(e.draft_)
  ) : void 0;
}
function zg(e, t) {
  if (!(t in e))
    return;
  let r = po(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = po(r);
  }
}
function Bu(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Bu(e.parent_));
}
function Il(e) {
  e.copy_ || (e.copy_ = Ou(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Yy = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const o = r;
        r = t;
        const i = this;
        return function(l = o, ...u) {
          return i.produce(l, (c) => r.call(this, c, ...u));
        };
      }
      typeof r != "function" && Sr(6), n !== void 0 && typeof n != "function" && Sr(7);
      let a;
      if (Ba(t)) {
        const o = fd(this), i = Fu(t, void 0);
        let s = !0;
        try {
          a = r(i), s = !1;
        } finally {
          s ? $u(o) : Au(o);
        }
        return cd(o, n), dd(a, o);
      } else if (!t || typeof t != "object") {
        if (a = r(t), a === void 0 && (a = t), a === jg && (a = void 0), this.autoFreeze_ && Kc(a, !0), n) {
          const o = [], i = [];
          Fa("Patches").generateReplacementPatches_(t, a, o, i), n(o, i);
        }
        return a;
      } else
        Sr(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (i, ...s) => this.produceWithPatches(i, (l) => t(l, ...s));
      let n, a;
      return [this.produce(t, r, (i, s) => {
        n = i, a = s;
      }), n, a];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Ba(e) || Sr(8), Aa(e) && (e = Zy(e));
    const t = fd(this), r = Fu(e, void 0);
    return r[Tr].isManual_ = !0, Au(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[Tr];
    (!r || !r.isManual_) && Sr(9);
    const { scope_: n } = r;
    return cd(n, t), dd(void 0, n);
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
    const n = Fa("Patches").applyPatches_;
    return Aa(e) ? n(e, t) : this.produce(
      e,
      (a) => n(a, t)
    );
  }
};
function Fu(e, t) {
  const r = rl(e) ? Fa("MapSet").proxyMap_(e, t) : nl(e) ? Fa("MapSet").proxySet_(e, t) : Gy(e, t);
  return (t ? t.scope_ : kg()).drafts_.push(r), r;
}
function Zy(e) {
  return Aa(e) || Sr(10, e), Vg(e);
}
function Vg(e) {
  if (!Ba(e) || al(e))
    return e;
  const t = e[Tr];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Ou(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = Ou(e, !0);
  return ci(r, (n, a) => {
    Lg(r, n, Vg(a));
  }), t && (t.finalized_ = !1), r;
}
var Mr = new Yy(), Gc = Mr.produce;
Mr.produceWithPatches.bind(
  Mr
);
Mr.setAutoFreeze.bind(Mr);
Mr.setUseStrictShallowCopy.bind(Mr);
Mr.applyPatches.bind(Mr);
var md = Mr.createDraft.bind(Mr), gd = Mr.finishDraft.bind(Mr), Qy = {
  transform(e, t) {
    var {
      current: r,
      affinity: n
    } = e;
    if (r != null) {
      var a = z.transform(r, t, {
        affinity: n
      });
      e.current = a, a == null && e.unref();
    }
  }
}, Jy = {
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
}, eC = {
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
}, Ns = /* @__PURE__ */ new WeakMap(), Is = /* @__PURE__ */ new WeakMap(), ei = /* @__PURE__ */ new WeakMap(), Hg = /* @__PURE__ */ new WeakMap(), pd = /* @__PURE__ */ new WeakMap(), hd = /* @__PURE__ */ new WeakMap(), bd = /* @__PURE__ */ new WeakMap(), z = {
  ancestors(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: r = !1
    } = t, n = z.levels(e, t);
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
    return z.equals(n, a) && o > i;
  },
  endsAt(e, t) {
    var r = e.length, n = e.slice(0, r), a = t.slice(0, r);
    return z.equals(n, a);
  },
  endsBefore(e, t) {
    var r = e.length - 1, n = e.slice(0, r), a = t.slice(0, r), o = e[r], i = t[r];
    return z.equals(n, a) && o < i;
  },
  equals(e, t) {
    return e.length === t.length && e.every((r, n) => r === t[n]);
  },
  hasPrevious(e) {
    return e[e.length - 1] > 0;
  },
  isAfter(e, t) {
    return z.compare(e, t) === 1;
  },
  isAncestor(e, t) {
    return e.length < t.length && z.compare(e, t) === 0;
  },
  isBefore(e, t) {
    return z.compare(e, t) === -1;
  },
  isChild(e, t) {
    return e.length === t.length + 1 && z.compare(e, t) === 0;
  },
  isCommon(e, t) {
    return e.length <= t.length && z.compare(e, t) === 0;
  },
  isDescendant(e, t) {
    return e.length > t.length && z.compare(e, t) === 0;
  },
  isParent(e, t) {
    return e.length + 1 === t.length && z.compare(e, t) === 0;
  },
  isPath(e) {
    return Array.isArray(e) && (e.length === 0 || typeof e[0] == "number");
  },
  isSibling(e, t) {
    if (e.length !== t.length)
      return !1;
    var r = e.slice(0, -1), n = t.slice(0, -1), a = e[e.length - 1], o = t[t.length - 1];
    return a !== o && z.equals(r, n);
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
    if (!z.isAncestor(t, e) && !z.equals(e, t))
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
        (z.equals(o, n) || z.endsBefore(o, n) || z.isAncestor(o, n)) && (n[o.length - 1] += 1);
        break;
      }
      case "remove_node": {
        var {
          path: i
        } = t;
        if (z.equals(i, n) || z.isAncestor(i, n))
          return null;
        z.endsBefore(i, n) && (n[i.length - 1] -= 1);
        break;
      }
      case "merge_node": {
        var {
          path: s,
          position: l
        } = t;
        z.equals(s, n) || z.endsBefore(s, n) ? n[s.length - 1] -= 1 : z.isAncestor(s, n) && (n[s.length - 1] -= 1, n[s.length] += l);
        break;
      }
      case "split_node": {
        var {
          path: u,
          position: c
        } = t;
        if (z.equals(u, n)) {
          if (a === "forward")
            n[n.length - 1] += 1;
          else if (a !== "backward")
            return null;
        } else
          z.endsBefore(u, n) ? n[u.length - 1] += 1 : z.isAncestor(u, n) && e[u.length] >= c && (n[u.length - 1] += 1, n[u.length] -= c);
        break;
      }
      case "move_node": {
        var {
          path: d,
          newPath: m
        } = t;
        if (z.equals(d, m))
          return n;
        if (z.isAncestor(d, n) || z.equals(d, n)) {
          var h = m.slice();
          return z.endsBefore(d, m) && d.length < m.length && (h[d.length - 1] -= 1), h.concat(n.slice(d.length));
        } else
          z.isSibling(d, m) && (z.isAncestor(m, n) || z.equals(m, n)) ? z.endsBefore(d, n) ? n[d.length - 1] -= 1 : n[d.length - 1] += 1 : z.endsBefore(m, n) || z.equals(m, n) || z.isAncestor(m, n) ? (z.endsBefore(d, n) && (n[d.length - 1] -= 1), n[m.length - 1] += 1) : z.endsBefore(d, n) && (z.equals(m, n) && (n[m.length - 1] += 1), n[d.length - 1] -= 1);
        break;
      }
    }
    return n;
  }
};
function vi(e) {
  "@babel/helpers - typeof";
  return vi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vi(e);
}
function tC(e, t) {
  if (vi(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (vi(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rC(e) {
  var t = tC(e, "string");
  return vi(t) === "symbol" ? t : String(t);
}
function yr(e, t, r) {
  return t = rC(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
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
function ko(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yd(Object(r), !0).forEach(function(n) {
      yr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var nC = (e, t, r) => {
  switch (r.type) {
    case "insert_node": {
      var {
        path: n,
        node: a
      } = r, o = be.parent(e, n), i = n[n.length - 1];
      if (i > o.children.length)
        throw new Error('Cannot apply an "insert_node" operation at path ['.concat(n, "] because the destination is past the end of the node."));
      if (o.children.splice(i, 0, a), t)
        for (var [s, l] of X.points(t))
          t[l] = Ge.transform(s, r);
      break;
    }
    case "insert_text": {
      var {
        path: u,
        offset: c,
        text: d
      } = r;
      if (d.length === 0)
        break;
      var m = be.leaf(e, u), h = m.text.slice(0, c), p = m.text.slice(c);
      if (m.text = h + d + p, t)
        for (var [f, g] of X.points(t))
          t[g] = Ge.transform(f, r);
      break;
    }
    case "merge_node": {
      var {
        path: b
      } = r, C = be.get(e, b), y = z.previous(b), E = be.get(e, y), D = be.parent(e, b), S = b[b.length - 1];
      if (Be.isText(C) && Be.isText(E))
        E.text += C.text;
      else if (!Be.isText(C) && !Be.isText(E))
        E.children.push(...C.children);
      else
        throw new Error('Cannot apply a "merge_node" operation at path ['.concat(b, "] to nodes of different interfaces: ").concat(er.stringify(C), " ").concat(er.stringify(E)));
      if (D.children.splice(S, 1), t)
        for (var [x, $] of X.points(t))
          t[$] = Ge.transform(x, r);
      break;
    }
    case "move_node": {
      var {
        path: O,
        newPath: A
      } = r;
      if (z.isAncestor(O, A))
        throw new Error("Cannot move a path [".concat(O, "] to new path [").concat(A, "] because the destination is inside itself."));
      var j = be.get(e, O), N = be.parent(e, O), B = O[O.length - 1];
      N.children.splice(B, 1);
      var P = z.transform(O, r), R = be.get(e, z.parent(P)), T = P[P.length - 1];
      if (R.children.splice(T, 0, j), t)
        for (var [F, I] of X.points(t))
          t[I] = Ge.transform(F, r);
      break;
    }
    case "remove_node": {
      var {
        path: k
      } = r, L = k[k.length - 1], W = be.parent(e, k);
      if (W.children.splice(L, 1), t)
        for (var [U, Z] of X.points(t)) {
          var M = Ge.transform(U, r);
          if (t != null && M != null)
            t[Z] = M;
          else {
            var V = void 0, H = void 0;
            for (var [q, J] of be.texts(e))
              if (z.compare(J, k) === -1)
                V = [q, J];
              else {
                H = [q, J];
                break;
              }
            var ee = !1;
            V && H && (z.equals(H[1], k) ? ee = !z.hasPrevious(H[1]) : ee = z.common(V[1], k).length < z.common(H[1], k).length), V && !ee ? (U.path = V[1], U.offset = V[0].text.length) : H ? (U.path = H[1], U.offset = 0) : t = null;
          }
        }
      break;
    }
    case "remove_text": {
      var {
        path: ce,
        offset: ae,
        text: me
      } = r;
      if (me.length === 0)
        break;
      var fe = be.leaf(e, ce), G = fe.text.slice(0, ae), le = fe.text.slice(ae + me.length);
      if (fe.text = G + le, t)
        for (var [Se, De] of X.points(t))
          t[De] = Ge.transform(Se, r);
      break;
    }
    case "set_node": {
      var {
        path: Ee,
        properties: oe,
        newProperties: se
      } = r;
      if (Ee.length === 0)
        throw new Error("Cannot set properties on the root node!");
      var ge = be.get(e, Ee);
      for (var he in se) {
        if (he === "children" || he === "text")
          throw new Error('Cannot set the "'.concat(he, '" property of nodes!'));
        var ye = se[he];
        ye == null ? delete ge[he] : ge[he] = ye;
      }
      for (var Ne in oe)
        se.hasOwnProperty(Ne) || delete ge[Ne];
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
            throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(er.stringify($e), " when there is no current selection."));
          t = ko({}, $e);
        }
        for (var je in $e) {
          var Et = $e[je];
          if (Et == null) {
            if (je === "anchor" || je === "focus")
              throw new Error('Cannot remove the "'.concat(je, '" selection property'));
            delete t[je];
          } else
            t[je] = Et;
        }
      }
      break;
    }
    case "split_node": {
      var {
        path: Le,
        position: xe,
        properties: Ve
      } = r;
      if (Le.length === 0)
        throw new Error('Cannot apply a "split_node" operation at path ['.concat(Le, "] because the root node cannot be split."));
      var He = be.get(e, Le), zt = be.parent(e, Le), rt = Le[Le.length - 1], Bt;
      if (Be.isText(He)) {
        var ht = He.text.slice(0, xe), Qe = He.text.slice(xe);
        He.text = ht, Bt = ko(ko({}, Ve), {}, {
          text: Qe
        });
      } else {
        var st = He.children.slice(0, xe), Gt = He.children.slice(xe);
        He.children = st, Bt = ko(ko({}, Ve), {}, {
          children: Gt
        });
      }
      if (zt.children.splice(rt + 1, 0, Bt), t)
        for (var [Dt, ve] of X.points(t))
          t[ve] = Ge.transform(Dt, r);
      break;
    }
  }
  return t;
}, aC = {
  transform(e, t) {
    e.children = md(e.children);
    var r = e.selection && md(e.selection);
    try {
      r = nC(e, r, t);
    } finally {
      e.children = gd(e.children), r ? e.selection = Aa(r) ? gd(r) : r : e.selection = null;
    }
  }
}, oC = {
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
}, iC = {
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
}, Wg = (e, t) => {
  for (var r in e) {
    var n = e[r], a = t[r];
    if (ar(n) && ar(a)) {
      if (!Wg(n, a))
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
function sC(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function jn(e, t) {
  if (e == null)
    return {};
  var r = sC(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
var lC = ["anchor", "focus"];
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
function uC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cd(Object(r), !0).forEach(function(n) {
      yr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cd(Object(r)).forEach(function(n) {
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
    var [i, s] = X.edges(e), l = !1, u = !1;
    return Ge.isPoint(t) ? (l = Ge.compare(t, i) >= 0, u = Ge.compare(t, s) <= 0) : (l = z.compare(t, i.path) >= 0, u = z.compare(t, s.path) <= 0), l && u;
  },
  intersection(e, t) {
    var r = jn(e, lC), [n, a] = X.edges(e), [o, i] = X.edges(t), s = Ge.isBefore(n, o) ? o : n, l = Ge.isBefore(a, i) ? a : i;
    return Ge.isBefore(l, s) ? null : uC({
      anchor: s,
      focus: l
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
    return ar(e) && Ge.isPoint(e.anchor) && Ge.isPoint(e.focus);
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
    return Gc(e, (n) => {
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
      var l = Ge.transform(n.anchor, t, {
        affinity: o
      }), u = Ge.transform(n.focus, t, {
        affinity: i
      });
      if (!l || !u)
        return null;
      n.anchor = l, n.focus = u;
    });
  }
}, Ed = (e) => ar(e) && be.isNodeList(e.children) && !w.isEditor(e), de = {
  isAncestor(e) {
    return ar(e) && be.isNodeList(e.children);
  },
  isElement: Ed,
  isElementList(e) {
    return Array.isArray(e) && e.every((t) => de.isElement(t));
  },
  isElementProps(e) {
    return e.children !== void 0;
  },
  isElementType: function(t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
    return Ed(t) && t[n] === r;
  },
  matches(e, t) {
    for (var r in t)
      if (r !== "children" && e[r] !== t[r])
        return !1;
    return !0;
  }
}, cC = ["children"], fC = ["text"], wd = /* @__PURE__ */ new WeakMap(), be = {
  ancestor(e, t) {
    var r = be.get(e, t);
    if (Be.isText(r))
      throw new Error("Cannot get the ancestor node at path [".concat(t, "] because it refers to a text node instead: ").concat(er.stringify(r)));
    return r;
  },
  ancestors(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var n of z.ancestors(t, r)) {
        var a = be.ancestor(e, n), o = [a, n];
        yield o;
      }
    }();
  },
  child(e, t) {
    if (Be.isText(e))
      throw new Error("Cannot get the child of a text node: ".concat(er.stringify(e)));
    var r = e.children[t];
    if (r == null)
      throw new Error("Cannot get child at index `".concat(t, "` in node: ").concat(er.stringify(e)));
    return r;
  },
  children(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var {
        reverse: n = !1
      } = r, a = be.ancestor(e, t), {
        children: o
      } = a, i = n ? o.length - 1 : 0; n ? i >= 0 : i < o.length; ) {
        var s = be.child(a, i), l = t.concat(i);
        yield [s, l], i = n ? i - 1 : i + 1;
      }
    }();
  },
  common(e, t, r) {
    var n = z.common(t, r), a = be.get(e, n);
    return [a, n];
  },
  descendant(e, t) {
    var r = be.get(e, t);
    if (w.isEditor(r))
      throw new Error("Cannot get the descendant node at path [".concat(t, "] because it refers to the root editor node instead: ").concat(er.stringify(r)));
    return r;
  },
  descendants(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of be.nodes(e, t))
        n.length !== 0 && (yield [r, n]);
    }();
  },
  elements(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of be.nodes(e, t))
        de.isElement(r) && (yield [r, n]);
    }();
  },
  extractProps(e) {
    if (de.isAncestor(e)) {
      var t = jn(e, cC);
      return t;
    } else {
      var t = jn(e, fC);
      return t;
    }
  },
  first(e, t) {
    for (var r = t.slice(), n = be.get(e, r); n && !(Be.isText(n) || n.children.length === 0); )
      n = n.children[0], r.push(0);
    return [n, r];
  },
  fragment(e, t) {
    if (Be.isText(e))
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(er.stringify(e)));
    var r = Gc({
      children: e.children
    }, (n) => {
      var [a, o] = X.edges(t), i = be.nodes(n, {
        reverse: !0,
        pass: (m) => {
          var [, h] = m;
          return !X.includes(t, h);
        }
      });
      for (var [, s] of i) {
        if (!X.includes(t, s)) {
          var l = be.parent(n, s), u = s[s.length - 1];
          l.children.splice(u, 1);
        }
        if (z.equals(s, o.path)) {
          var c = be.leaf(n, s);
          c.text = c.text.slice(0, o.offset);
        }
        if (z.equals(s, a.path)) {
          var d = be.leaf(n, s);
          d.text = d.text.slice(a.offset);
        }
      }
      w.isEditor(n) && (n.selection = null);
    });
    return r.children;
  },
  get(e, t) {
    for (var r = e, n = 0; n < t.length; n++) {
      var a = t[n];
      if (Be.isText(r) || !r.children[a])
        throw new Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(er.stringify(e)));
      r = r.children[a];
    }
    return r;
  },
  has(e, t) {
    for (var r = e, n = 0; n < t.length; n++) {
      var a = t[n];
      if (Be.isText(r) || !r.children[a])
        return !1;
      r = r.children[a];
    }
    return !0;
  },
  isNode(e) {
    return Be.isText(e) || de.isElement(e) || w.isEditor(e);
  },
  isNodeList(e) {
    if (!Array.isArray(e))
      return !1;
    var t = wd.get(e);
    if (t !== void 0)
      return t;
    var r = e.every((n) => be.isNode(n));
    return wd.set(e, r), r;
  },
  last(e, t) {
    for (var r = t.slice(), n = be.get(e, r); n && !(Be.isText(n) || n.children.length === 0); ) {
      var a = n.children.length - 1;
      n = n.children[a], r.push(a);
    }
    return [n, r];
  },
  leaf(e, t) {
    var r = be.get(e, t);
    if (!Be.isText(r))
      throw new Error("Cannot get the leaf node at path [".concat(t, "] because it refers to a non-leaf node: ").concat(er.stringify(r)));
    return r;
  },
  levels(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var n of z.levels(t, r)) {
        var a = be.get(e, n);
        yield [a, n];
      }
    }();
  },
  matches(e, t) {
    return de.isElement(e) && de.isElementProps(t) && de.matches(e, t) || Be.isText(e) && Be.isTextProps(t) && Be.matches(e, t);
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
      } = t, i = /* @__PURE__ */ new Set(), s = [], l = e; !(o && (n ? z.isBefore(s, o) : z.isAfter(s, o))); ) {
        if (i.has(l) || (yield [l, s]), !i.has(l) && !Be.isText(l) && l.children.length !== 0 && (r == null || r([l, s]) === !1)) {
          i.add(l);
          var u = n ? l.children.length - 1 : 0;
          z.isAncestor(s, a) && (u = a[s.length]), s = s.concat(u), l = be.get(e, s);
          continue;
        }
        if (s.length === 0)
          break;
        if (!n) {
          var c = z.next(s);
          if (be.has(e, c)) {
            s = c, l = be.get(e, s);
            continue;
          }
        }
        if (n && s[s.length - 1] !== 0) {
          var d = z.previous(s);
          s = d, l = be.get(e, s);
          continue;
        }
        s = z.parent(s), l = be.get(e, s), i.add(l);
      }
    }();
  },
  parent(e, t) {
    var r = z.parent(t), n = be.get(e, r);
    if (Be.isText(n))
      throw new Error("Cannot get the parent of path [".concat(t, "] because it does not exist in the root."));
    return n;
  },
  string(e) {
    return Be.isText(e) ? e.text : e.children.map(be.string).join("");
  },
  texts(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of be.nodes(e, t))
        Be.isText(r) && (yield [r, n]);
    }();
  }
};
function Sd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sd(Object(r), !0).forEach(function(n) {
      yr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var ta = {
  isNodeOperation(e) {
    return ta.isOperation(e) && e.type.endsWith("_node");
  },
  isOperation(e) {
    if (!ar(e))
      return !1;
    switch (e.type) {
      case "insert_node":
        return z.isPath(e.path) && be.isNode(e.node);
      case "insert_text":
        return typeof e.offset == "number" && typeof e.text == "string" && z.isPath(e.path);
      case "merge_node":
        return typeof e.position == "number" && z.isPath(e.path) && ar(e.properties);
      case "move_node":
        return z.isPath(e.path) && z.isPath(e.newPath);
      case "remove_node":
        return z.isPath(e.path) && be.isNode(e.node);
      case "remove_text":
        return typeof e.offset == "number" && typeof e.text == "string" && z.isPath(e.path);
      case "set_node":
        return z.isPath(e.path) && ar(e.properties) && ar(e.newProperties);
      case "set_selection":
        return e.properties === null && X.isRange(e.newProperties) || e.newProperties === null && X.isRange(e.properties) || ar(e.properties) && ar(e.newProperties);
      case "split_node":
        return z.isPath(e.path) && typeof e.position == "number" && ar(e.properties);
      default:
        return !1;
    }
  },
  isOperationList(e) {
    return Array.isArray(e) && e.every((t) => ta.isOperation(t));
  },
  isSelectionOperation(e) {
    return ta.isOperation(e) && e.type.endsWith("_selection");
  },
  isTextOperation(e) {
    return ta.isOperation(e) && e.type.endsWith("_text");
  },
  inverse(e) {
    switch (e.type) {
      case "insert_node":
        return Rt(Rt({}, e), {}, {
          type: "remove_node"
        });
      case "insert_text":
        return Rt(Rt({}, e), {}, {
          type: "remove_text"
        });
      case "merge_node":
        return Rt(Rt({}, e), {}, {
          type: "split_node",
          path: z.previous(e.path)
        });
      case "move_node": {
        var {
          newPath: t,
          path: r
        } = e;
        if (z.equals(t, r))
          return e;
        if (z.isSibling(r, t))
          return Rt(Rt({}, e), {}, {
            path: t,
            newPath: r
          });
        var n = z.transform(r, e), a = z.transform(z.next(r), e);
        return Rt(Rt({}, e), {}, {
          path: n,
          newPath: a
        });
      }
      case "remove_node":
        return Rt(Rt({}, e), {}, {
          type: "insert_node"
        });
      case "remove_text":
        return Rt(Rt({}, e), {}, {
          type: "insert_text"
        });
      case "set_node": {
        var {
          properties: o,
          newProperties: i
        } = e;
        return Rt(Rt({}, e), {}, {
          properties: i,
          newProperties: o
        });
      }
      case "set_selection": {
        var {
          properties: s,
          newProperties: l
        } = e;
        return s == null ? Rt(Rt({}, e), {}, {
          properties: l,
          newProperties: null
        }) : l == null ? Rt(Rt({}, e), {}, {
          properties: null,
          newProperties: s
        }) : Rt(Rt({}, e), {}, {
          properties: l,
          newProperties: s
        });
      }
      case "split_node":
        return Rt(Rt({}, e), {}, {
          type: "merge_node",
          path: z.next(e.path)
        });
    }
  }
}, Dd = /* @__PURE__ */ new WeakMap(), dC = (e) => {
  var t = Dd.get(e);
  if (t !== void 0)
    return t;
  if (!ar(e))
    return !1;
  var r = typeof e.addMark == "function" && typeof e.apply == "function" && typeof e.deleteFragment == "function" && typeof e.insertBreak == "function" && typeof e.insertSoftBreak == "function" && typeof e.insertFragment == "function" && typeof e.insertNode == "function" && typeof e.insertText == "function" && typeof e.isElementReadOnly == "function" && typeof e.isInline == "function" && typeof e.isSelectable == "function" && typeof e.isVoid == "function" && typeof e.normalizeNode == "function" && typeof e.onChange == "function" && typeof e.removeMark == "function" && typeof e.getDirtyPaths == "function" && (e.marks === null || ar(e.marks)) && (e.selection === null || X.isRange(e.selection)) && be.isNodeList(e.children) && ta.isOperationList(e.operations);
  return Dd.set(e, r), r;
}, w = {
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
    return dC(e);
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
}, ej = {
  isLocation(e) {
    return z.isPath(e) || Ge.isPoint(e) || X.isRange(e);
  }
}, vC = {
  isSpan(e) {
    return Array.isArray(e) && e.length === 2 && e.every(z.isPath);
  }
};
function xd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Od(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xd(Object(r), !0).forEach(function(n) {
      yr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Ge = {
  compare(e, t) {
    var r = z.compare(e.path, t.path);
    return r === 0 ? e.offset < t.offset ? -1 : e.offset > t.offset ? 1 : 0 : r;
  },
  isAfter(e, t) {
    return Ge.compare(e, t) === 1;
  },
  isBefore(e, t) {
    return Ge.compare(e, t) === -1;
  },
  equals(e, t) {
    return e.offset === t.offset && z.equals(e.path, t.path);
  },
  isPoint(e) {
    return ar(e) && typeof e.offset == "number" && z.isPath(e.path);
  },
  transform(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return Gc(e, (n) => {
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
          n.path = z.transform(o, t, r);
          break;
        }
        case "insert_text": {
          z.equals(t.path, o) && (t.offset < i || t.offset === i && a === "forward") && (n.offset += t.text.length);
          break;
        }
        case "merge_node": {
          z.equals(t.path, o) && (n.offset += t.position), n.path = z.transform(o, t, r);
          break;
        }
        case "remove_text": {
          z.equals(t.path, o) && t.offset <= i && (n.offset -= Math.min(i - t.offset, t.text.length));
          break;
        }
        case "remove_node": {
          if (z.equals(t.path, o) || z.isAncestor(t.path, o))
            return null;
          n.path = z.transform(o, t, r);
          break;
        }
        case "split_node": {
          if (z.equals(t.path, o)) {
            if (t.position === i && a == null)
              return null;
            (t.position < i || t.position === i && a === "forward") && (n.offset -= t.position, n.path = z.transform(o, t, Od(Od({}, r), {}, {
              affinity: "forward"
            })));
          } else
            n.path = z.transform(o, t, r);
          break;
        }
      }
    });
  }
}, $d = void 0, er = {
  setScrubber(e) {
    $d = e;
  },
  stringify(e) {
    return JSON.stringify(e, $d);
  }
}, mC = ["text"], gC = ["anchor", "focus"];
function Ad(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function On(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ad(Object(r), !0).forEach(function(n) {
      yr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ad(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Be = {
  equals(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      loose: n = !1
    } = r;
    function a(o) {
      var i = jn(o, mC);
      return i;
    }
    return Wg(n ? a(e) : e, n ? a(t) : t);
  },
  isText(e) {
    return ar(e) && typeof e.text == "string";
  },
  isTextList(e) {
    return Array.isArray(e) && e.every((t) => Be.isText(t));
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
    var r = [On({}, e)];
    for (var n of t) {
      var a = jn(n, gC), [o, i] = X.edges(n), s = [], l = 0, u = o.offset, c = i.offset;
      for (var d of r) {
        var {
          length: m
        } = d.text, h = l;
        if (l += m, u <= h && l <= c) {
          Object.assign(d, a), s.push(d);
          continue;
        }
        if (u !== c && (u === l || c === h) || u > l || c < h || c === h && h !== 0) {
          s.push(d);
          continue;
        }
        var p = d, f = void 0, g = void 0;
        if (c < l) {
          var b = c - h;
          g = On(On({}, p), {}, {
            text: p.text.slice(b)
          }), p = On(On({}, p), {}, {
            text: p.text.slice(0, b)
          });
        }
        if (u > h) {
          var C = u - h;
          f = On(On({}, p), {}, {
            text: p.text.slice(0, C)
          }), p = On(On({}, p), {}, {
            text: p.text.slice(C)
          });
        }
        Object.assign(p, a), f && s.push(f), s.push(p), g && s.push(g);
      }
      r = s;
    }
    return r;
  }
}, Xc = (e) => e.selection ? e.selection : e.children.length > 0 ? w.end(e, []) : [0], $o = (e, t) => {
  var [r] = w.node(e, t);
  return (n) => n === r;
}, Yc = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = !r, a = r ? EC(t) : t, o = Ke.None, i = Ke.None, s = 0, l = null, u = null;
  for (var c of a) {
    var d = c.codePointAt(0);
    if (!d)
      break;
    var m = NC(c, d);
    if ([o, i] = n ? [i, m] : [m, o], so(o, Ke.ZWJ) && so(i, Ke.ExtPict) && (n ? l = Bd(t.substring(0, s)) : l = Bd(t.substring(0, t.length - s)), !l) || so(o, Ke.RI) && so(i, Ke.RI) && (u !== null ? u = !u : n ? u = !0 : u = _C(t.substring(0, t.length - s)), !u) || o !== Ke.None && i !== Ke.None && TC(o, i))
      break;
    s += c.length;
  }
  return s || 1;
}, pC = /\s/, hC = /[\u002B\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, bC = /['\u2018\u2019]/, yC = function(t) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = 0, a = !1; t.length > 0; ) {
    var o = Yc(t, r), [i, s] = Zc(t, o, r);
    if (CC(i, s, r))
      a = !0, n += o;
    else if (!a)
      n += o;
    else
      break;
    t = s;
  }
  return n;
}, Zc = (e, t, r) => {
  if (r) {
    var n = e.length - t;
    return [e.slice(n, e.length), e.slice(0, n)];
  }
  return [e.slice(0, t), e.slice(t)];
}, CC = function e(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  if (pC.test(t))
    return !1;
  if (bC.test(t)) {
    var a = Yc(r, n), [o, i] = Zc(r, a, n);
    if (e(o, i, n))
      return !0;
  }
  return !hC.test(t);
}, EC = function* (t) {
  for (var r = t.length - 1, n = 0; n < t.length; n++) {
    var a = t.charAt(r - n);
    if (SC(a.charCodeAt(0))) {
      var o = t.charAt(r - n - 1);
      if (wC(o.charCodeAt(0))) {
        yield o + a, n++;
        continue;
      }
    }
    yield a;
  }
}, wC = (e) => e >= 55296 && e <= 56319, SC = (e) => e >= 56320 && e <= 57343, Ke;
(function(e) {
  e[e.None = 0] = "None", e[e.Extend = 1] = "Extend", e[e.ZWJ = 2] = "ZWJ", e[e.RI = 4] = "RI", e[e.Prepend = 8] = "Prepend", e[e.SpacingMark = 16] = "SpacingMark", e[e.L = 32] = "L", e[e.V = 64] = "V", e[e.T = 128] = "T", e[e.LV = 256] = "LV", e[e.LVT = 512] = "LVT", e[e.ExtPict = 1024] = "ExtPict", e[e.Any = 2048] = "Any";
})(Ke || (Ke = {}));
var DC = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/, xC = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/, OC = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/, $C = /^[\u1100-\u115F\uA960-\uA97C]$/, AC = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/, BC = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/, FC = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/, PC = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/, RC = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/, NC = (e, t) => {
  var r = Ke.Any;
  return e.search(DC) !== -1 && (r |= Ke.Extend), t === 8205 && (r |= Ke.ZWJ), t >= 127462 && t <= 127487 && (r |= Ke.RI), e.search(xC) !== -1 && (r |= Ke.Prepend), e.search(OC) !== -1 && (r |= Ke.SpacingMark), e.search($C) !== -1 && (r |= Ke.L), e.search(AC) !== -1 && (r |= Ke.V), e.search(BC) !== -1 && (r |= Ke.T), e.search(FC) !== -1 && (r |= Ke.LV), e.search(PC) !== -1 && (r |= Ke.LVT), e.search(RC) !== -1 && (r |= Ke.ExtPict), r;
};
function so(e, t) {
  return (e & t) !== 0;
}
var IC = [
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
function TC(e, t) {
  return IC.findIndex((r) => so(e, r[0]) && so(t, r[1])) === -1;
}
var MC = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/, Bd = (e) => e.search(MC) !== -1, jC = /(?:\uD83C[\uDDE6-\uDDFF])+$/g, _C = (e) => {
  var t = e.match(jC);
  if (t === null)
    return !1;
  var r = t[0].length / 2;
  return r % 2 === 1;
}, LC = {
  delete(e, t) {
    e.delete(t);
  },
  insertFragment(e, t, r) {
    e.insertFragment(t, r);
  },
  insertText(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    w.withoutNormalizing(e, () => {
      var {
        voids: n = !1
      } = r, {
        at: a = Xc(e)
      } = r;
      if (z.isPath(a) && (a = w.range(e, a)), X.isRange(a))
        if (X.isCollapsed(a))
          a = a.anchor;
        else {
          var o = X.end(a);
          if (!n && w.void(e, {
            at: o
          }))
            return;
          var i = X.start(a), s = w.pointRef(e, i), l = w.pointRef(e, o);
          re.delete(e, {
            at: a,
            voids: n
          });
          var u = s.unref(), c = l.unref();
          a = u || c, re.setSelection(e, {
            anchor: a,
            focus: a
          });
        }
      if (!(!n && w.void(e, {
        at: a
      }) || w.elementReadOnly(e, {
        at: a
      }))) {
        var {
          path: d,
          offset: m
        } = a;
        t.length > 0 && e.apply({
          type: "insert_text",
          path: d,
          offset: m,
          text: t
        });
      }
    });
  }
};
function Fd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fd(Object(r), !0).forEach(function(n) {
      yr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var re = Wi(Wi(Wi(Wi({}, aC), oC), iC), LC), gs = /* @__PURE__ */ new WeakMap(), kC = (e) => gs.get(e) || !1, zC = (e, t, r) => {
  var n = gs.get(e) || !1;
  gs.set(e, !0);
  try {
    t(), r();
  } finally {
    gs.set(e, n);
  }
};
function qg(e, t, r) {
  var n = Ns.get(e) || [], a = Is.get(e) || /* @__PURE__ */ new Set(), o, i, s = (d) => {
    if (d) {
      var m = d.join(",");
      i.has(m) || (i.add(m), o.push(d));
    }
  };
  if (r) {
    o = [], i = /* @__PURE__ */ new Set();
    for (var l of n) {
      var u = r(l);
      s(u);
    }
  } else
    o = n, i = a;
  for (var c of t)
    s(c);
  Ns.set(e, o), Is.set(e, i);
}
var VC = (e, t) => {
  for (var r of w.pathRefs(e))
    Qy.transform(r, t);
  for (var n of w.pointRefs(e))
    Jy.transform(n, t);
  for (var a of w.rangeRefs(e))
    eC.transform(a, t);
  if (!kC(e)) {
    var o = z.operationCanTransformPath(t) ? (i) => z.transform(i, t) : void 0;
    qg(e, e.getDirtyPaths(t), o);
  }
  re.transform(e, t), e.operations.push(t), w.normalize(e, {
    operation: t
  }), t.type === "set_selection" && (e.marks = null), ei.get(e) || (ei.set(e, !0), Promise.resolve().then(() => {
    ei.set(e, !1), e.onChange({
      operation: t
    }), e.operations = [];
  }));
}, HC = (e, t) => {
  switch (t.type) {
    case "insert_text":
    case "remove_text":
    case "set_node": {
      var {
        path: r
      } = t;
      return z.levels(r);
    }
    case "insert_node": {
      var {
        node: n,
        path: a
      } = t, o = z.levels(a), i = Be.isText(n) ? [] : Array.from(be.nodes(n), (A) => {
        var [, j] = A;
        return a.concat(j);
      });
      return [...o, ...i];
    }
    case "merge_node": {
      var {
        path: s
      } = t, l = z.ancestors(s), u = z.previous(s);
      return [...l, u];
    }
    case "move_node": {
      var {
        path: c,
        newPath: d
      } = t;
      if (z.equals(c, d))
        return [];
      var m = [], h = [];
      for (var p of z.ancestors(c)) {
        var f = z.transform(p, t);
        m.push(f);
      }
      for (var g of z.ancestors(d)) {
        var b = z.transform(g, t);
        h.push(b);
      }
      var C = h[h.length - 1], y = d[d.length - 1], E = C.concat(y);
      return [...m, ...h, E];
    }
    case "remove_node": {
      var {
        path: D
      } = t, S = z.ancestors(D);
      return [...S];
    }
    case "split_node": {
      var {
        path: x
      } = t, $ = z.levels(x), O = z.next(x);
      return [...$, O];
    }
    default:
      return [];
  }
}, WC = (e) => {
  var {
    selection: t
  } = e;
  return t ? be.fragment(e, t) : [];
}, qC = (e, t) => {
  var [r, n] = t;
  if (!Be.isText(r)) {
    if (de.isElement(r) && r.children.length === 0) {
      var a = {
        text: ""
      };
      re.insertNodes(e, a, {
        at: n.concat(0),
        voids: !0
      });
      return;
    }
    for (var o = w.isEditor(r) ? !1 : de.isElement(r) && (e.isInline(r) || r.children.length === 0 || Be.isText(r.children[0]) || e.isInline(r.children[0])), i = 0, s = 0; s < r.children.length; s++, i++) {
      var l = be.get(e, n);
      if (!Be.isText(l)) {
        var u = l.children[i], c = l.children[i - 1], d = s === r.children.length - 1, m = Be.isText(u) || de.isElement(u) && e.isInline(u);
        if (m !== o)
          re.removeNodes(e, {
            at: n.concat(i),
            voids: !0
          }), i--;
        else if (de.isElement(u)) {
          if (e.isInline(u)) {
            if (c == null || !Be.isText(c)) {
              var h = {
                text: ""
              };
              re.insertNodes(e, h, {
                at: n.concat(i),
                voids: !0
              }), i++;
            } else if (d) {
              var p = {
                text: ""
              };
              re.insertNodes(e, p, {
                at: n.concat(i + 1),
                voids: !0
              }), i++;
            }
          }
        } else
          c != null && Be.isText(c) && (Be.equals(u, c, {
            loose: !0
          }) ? (re.mergeNodes(e, {
            at: n.concat(i),
            voids: !0
          }), i--) : c.text === "" ? (re.removeNodes(e, {
            at: n.concat(i - 1),
            voids: !0
          }), i--) : u.text === "" && (re.removeNodes(e, {
            at: n.concat(i),
            voids: !0
          }), i--));
      }
    }
  }
}, KC = (e, t) => {
  var {
    iteration: r,
    initialDirtyPathsLength: n
  } = t, a = n * 42;
  if (r > a)
    throw new Error("Could not completely normalize the editor after ".concat(a, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state."));
  return !0;
}, UC = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    voids: n = !1,
    mode: a = "lowest",
    at: o = t.selection,
    match: i
  } = r;
  if (o) {
    var s = w.path(t, o), l = a === "lowest";
    for (var [u, c] of w.levels(t, {
      at: s,
      voids: n,
      match: i,
      reverse: l
    }))
      if (!Be.isText(u)) {
        if (X.isRange(o)) {
          if (z.isAncestor(c, o.anchor.path) && z.isAncestor(c, o.focus.path))
            return [u, c];
        } else if (!z.equals(s, c))
          return [u, c];
      }
  }
};
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
function Rd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pd(Object(r), !0).forEach(function(n) {
      yr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var GC = (e, t, r) => {
  var {
    selection: n
  } = e;
  if (n) {
    var a = (d, m) => {
      if (!Be.isText(d))
        return !1;
      var [h, p] = w.parent(e, m);
      return !e.isVoid(h) || e.markableVoid(h);
    }, o = X.isExpanded(n), i = !1;
    if (!o) {
      var [s, l] = w.node(e, n);
      if (s && a(s, l)) {
        var [u] = w.parent(e, l);
        i = u && e.markableVoid(u);
      }
    }
    if (o || i)
      re.setNodes(e, {
        [t]: r
      }, {
        match: a,
        split: !0,
        voids: !0
      });
    else {
      var c = Rd(Rd({}, w.marks(e) || {}), {}, {
        [t]: r
      });
      e.marks = c, ei.get(e) || e.onChange();
    }
  }
};
function Nd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Id(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nd(Object(r), !0).forEach(function(n) {
      yr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var XC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = w.point(t, r, {
    edge: "end"
  }), o = w.end(t, []), i = {
    anchor: a,
    focus: o
  }, {
    distance: s = 1
  } = n, l = 0, u;
  for (var c of w.positions(t, Id(Id({}, n), {}, {
    at: i
  }))) {
    if (l > s)
      break;
    l !== 0 && (u = c), l++;
  }
  return u;
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
function Md(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Td(Object(r), !0).forEach(function(n) {
      yr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Td(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var YC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = w.start(t, []), o = w.point(t, r, {
    edge: "start"
  }), i = {
    anchor: a,
    focus: o
  }, {
    distance: s = 1
  } = n, l = 0, u;
  for (var c of w.positions(t, Md(Md({}, n), {}, {
    at: i,
    reverse: !0
  }))) {
    if (l > s)
      break;
    l !== 0 && (u = c), l++;
  }
  return u;
}, ZC = (e, t) => {
  var {
    selection: r
  } = e;
  r && X.isCollapsed(r) && re.delete(e, {
    unit: t,
    reverse: !0
  });
}, QC = (e, t) => {
  var {
    selection: r
  } = e;
  r && X.isCollapsed(r) && re.delete(e, {
    unit: t
  });
}, JC = function(t) {
  var {
    direction: r = "forward"
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    selection: n
  } = t;
  n && X.isExpanded(n) && re.delete(t, {
    reverse: r === "backward"
  });
}, e1 = (e, t) => [w.start(e, t), w.end(e, t)];
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
function _d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jd(Object(r), !0).forEach(function(n) {
      yr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var t1 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return w.above(t, _d(_d({}, r), {}, {
    match: (n) => de.isElement(n) && w.isElementReadOnly(t, n)
  }));
}, r1 = (e, t) => w.point(e, t, {
  edge: "end"
}), n1 = (e, t) => {
  var r = w.path(e, t, {
    edge: "start"
  });
  return w.node(e, r);
}, a1 = (e, t) => {
  var r = w.range(e, t);
  return be.fragment(e, r);
};
function Ld(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ld(Object(r), !0).forEach(function(n) {
      yr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ld(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var o1 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return w.above(t, kd(kd({}, r), {}, {
    match: (n) => de.isElement(n) && w.isVoid(t, n)
  }));
}, i1 = (e, t) => t.children.some((r) => de.isElement(r) && w.isBlock(e, r)), s1 = (e, t) => t.children.some((r) => Be.isText(r) || w.isInline(e, r)), l1 = (e, t) => be.has(e, t), u1 = (e, t) => t.children.every((r) => Be.isText(r)), c1 = (e) => {
  re.splitNodes(e, {
    always: !0
  });
}, f1 = (e, t, r) => {
  re.insertNodes(e, t, r);
}, d1 = (e) => {
  re.splitNodes(e, {
    always: !0
  });
};
function zd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function v1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zd(Object(r), !0).forEach(function(n) {
      yr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var m1 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    selection: a,
    marks: o
  } = t;
  if (a) {
    if (o) {
      var i = v1({
        text: r
      }, o);
      re.insertNodes(t, i, {
        at: n.at,
        voids: n.voids
      });
    } else
      re.insertText(t, r, n);
    t.marks = null;
  }
}, g1 = (e, t) => !e.isInline(t), p1 = (e, t, r) => w.isStart(e, t, r) || w.isEnd(e, t, r), h1 = (e, t) => {
  var {
    children: r
  } = t, [n] = r;
  return r.length === 0 || r.length === 1 && Be.isText(n) && n.text === "" && !e.isVoid(t);
}, b1 = (e, t, r) => {
  var n = w.end(e, r);
  return Ge.equals(t, n);
}, y1 = (e) => {
  var t = Hg.get(e);
  return t === void 0 ? !0 : t;
}, C1 = (e, t, r) => {
  if (t.offset !== 0)
    return !1;
  var n = w.start(e, r);
  return Ge.equals(t, n);
}, E1 = (e, t) => {
  var r = w.path(e, t, {
    edge: "end"
  });
  return w.node(e, r);
}, w1 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = w.path(t, r, n), o = be.leaf(t, a);
  return [o, a];
};
function S1(e) {
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
      var i = [], s = w.path(e, r);
      for (var [l, u] of be.levels(e, s))
        if (o(l, u) && (i.push([l, u]), !a && de.isElement(l) && w.isVoid(e, l)))
          break;
      n && i.reverse(), yield* i;
    }
  }();
}
var D1 = ["text"], x1 = ["text"], O1 = function(t) {
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
    var i = w.isEnd(t, a, a.path);
    if (i) {
      var s = w.after(t, a);
      s && (a = s);
    }
    var [l] = w.nodes(t, {
      match: Be.isText,
      at: {
        anchor: a,
        focus: o
      }
    });
    if (l) {
      var [u] = l, c = jn(u, D1);
      return c;
    } else
      return {};
  }
  var {
    path: d
  } = a, [m] = w.leaf(t, d);
  if (a.offset === 0) {
    var h = w.previous(t, {
      at: d,
      match: Be.isText
    }), p = w.above(t, {
      match: (E) => de.isElement(E) && w.isVoid(t, E) && t.markableVoid(E)
    });
    if (!p) {
      var f = w.above(t, {
        match: (E) => de.isElement(E) && w.isBlock(t, E)
      });
      if (h && f) {
        var [g, b] = h, [, C] = f;
        z.isAncestor(C, b) && (m = g);
      }
    }
  }
  var y = jn(m, x1);
  return y;
}, $1 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    mode: n = "lowest",
    voids: a = !1
  } = r, {
    match: o,
    at: i = t.selection
  } = r;
  if (i) {
    var s = w.after(t, i, {
      voids: a
    });
    if (s) {
      var [, l] = w.last(t, []), u = [s.path, l];
      if (z.isPath(i) && i.length === 0)
        throw new Error("Cannot get the next node from the root node!");
      if (o == null)
        if (z.isPath(i)) {
          var [c] = w.parent(t, i);
          o = (m) => c.children.includes(m);
        } else
          o = () => !0;
      var [d] = w.nodes(t, {
        at: u,
        match: o,
        mode: n,
        voids: a
      });
      return d;
    }
  }
}, A1 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = w.path(t, r, n), o = be.get(t, a);
  return [o, a];
};
function B1(e) {
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
      match: l
    } = t;
    if (l || (l = () => !0), !!r) {
      var u, c;
      if (vC.isSpan(r))
        u = r[0], c = r[1];
      else {
        var d = w.path(e, r, {
          edge: "start"
        }), m = w.path(e, r, {
          edge: "end"
        });
        u = o ? m : d, c = o ? d : m;
      }
      var h = be.nodes(e, {
        reverse: o,
        from: u,
        to: c,
        pass: (E) => {
          var [D] = E;
          return de.isElement(D) ? !!(!i && (w.isVoid(e, D) || w.isElementReadOnly(e, D)) || s && !w.isSelectable(e, D)) : !1;
        }
      }), p = [], f;
      for (var [g, b] of h)
        if (!(s && de.isElement(g) && !w.isSelectable(e, g))) {
          var C = f && z.compare(b, f[1]) === 0;
          if (!(n === "highest" && C)) {
            if (!l(g, b)) {
              if (a && !C && Be.isText(g))
                return;
              continue;
            }
            if (n === "lowest" && C) {
              f = [g, b];
              continue;
            }
            var y = n === "lowest" ? f : [g, b];
            y && (a ? p.push(y) : yield y), f = [g, b];
          }
        }
      n === "lowest" && f && (a ? p.push(f) : yield f), a && (yield* p);
    }
  }();
}
var F1 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    force: n = !1,
    operation: a
  } = r, o = (c) => Ns.get(c) || [], i = (c) => Is.get(c) || /* @__PURE__ */ new Set(), s = (c) => {
    var d = o(c).pop(), m = d.join(",");
    return i(c).delete(m), d;
  };
  if (w.isNormalizing(t)) {
    if (n) {
      var l = Array.from(be.nodes(t), (c) => {
        var [, d] = c;
        return d;
      }), u = new Set(l.map((c) => c.join(",")));
      Ns.set(t, l), Is.set(t, u);
    }
    o(t).length !== 0 && w.withoutNormalizing(t, () => {
      for (var c of o(t))
        if (be.has(t, c)) {
          var d = w.node(t, c), [m, h] = d;
          de.isElement(m) && m.children.length === 0 && t.normalizeNode(d, {
            operation: a
          });
        }
      for (var p = o(t), f = p.length, g = 0; p.length !== 0; ) {
        if (!t.shouldNormalize({
          dirtyPaths: p,
          iteration: g,
          initialDirtyPathsLength: f,
          operation: a
        }))
          return;
        var b = s(t);
        if (be.has(t, b)) {
          var C = w.node(t, b);
          t.normalizeNode(C, {
            operation: a
          });
        }
        g++, p = o(t);
      }
    });
  }
}, P1 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = w.path(t, r, n), o = z.parent(a), i = w.node(t, o);
  return i;
}, R1 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, o = {
    current: r,
    affinity: a,
    unref() {
      var {
        current: s
      } = o, l = w.pathRefs(t);
      return l.delete(o), o.current = null, s;
    }
  }, i = w.pathRefs(t);
  return i.add(o), o;
}, N1 = (e) => {
  var t = pd.get(e);
  return t || (t = /* @__PURE__ */ new Set(), pd.set(e, t)), t;
}, I1 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    depth: a,
    edge: o
  } = n;
  if (z.isPath(r)) {
    if (o === "start") {
      var [, i] = be.first(t, r);
      r = i;
    } else if (o === "end") {
      var [, s] = be.last(t, r);
      r = s;
    }
  }
  return X.isRange(r) && (o === "start" ? r = X.start(r) : o === "end" ? r = X.end(r) : r = z.common(r.anchor.path, r.focus.path)), Ge.isPoint(r) && (r = r.path), a != null && (r = r.slice(0, a)), r;
}, T1 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, o = {
    current: r,
    affinity: a,
    unref() {
      var {
        current: s
      } = o, l = w.pointRefs(t);
      return l.delete(o), o.current = null, s;
    }
  }, i = w.pointRefs(t);
  return i.add(o), o;
}, M1 = (e) => {
  var t = hd.get(e);
  return t || (t = /* @__PURE__ */ new Set(), hd.set(e, t)), t;
}, j1 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    edge: a = "start"
  } = n;
  if (z.isPath(r)) {
    var o;
    if (a === "end") {
      var [, i] = be.last(t, r);
      o = i;
    } else {
      var [, s] = be.first(t, r);
      o = s;
    }
    var l = be.get(t, o);
    if (!Be.isText(l))
      throw new Error("Cannot get the ".concat(a, " point in the node at path [").concat(r, "] because it has no ").concat(a, " text node."));
    return {
      path: o,
      offset: a === "end" ? l.text.length : 0
    };
  }
  if (X.isRange(r)) {
    var [u, c] = X.edges(r);
    return a === "start" ? u : c;
  }
  return r;
};
function _1(e) {
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
    var s = w.range(e, r), [l, u] = X.edges(s), c = a ? u : l, d = !1, m = "", h = 0, p = 0, f = 0;
    for (var [g, b] of w.nodes(e, {
      at: r,
      reverse: a,
      voids: o,
      ignoreNonSelectable: i
    })) {
      if (de.isElement(g)) {
        if (!o && (e.isVoid(g) || e.isElementReadOnly(g))) {
          yield w.start(e, b);
          continue;
        }
        if (e.isInline(g))
          continue;
        if (w.hasInlines(e, g)) {
          var C = z.isAncestor(b, u.path) ? u : w.end(e, b), y = z.isAncestor(b, l.path) ? l : w.start(e, b);
          m = w.string(e, {
            anchor: y,
            focus: C
          }, {
            voids: o
          }), d = !0;
        }
      }
      if (Be.isText(g)) {
        var E = z.equals(b, c.path);
        for (E ? (p = a ? c.offset : g.text.length - c.offset, f = c.offset) : (p = g.text.length, f = a ? p : 0), (E || d || n === "offset") && (yield {
          path: b,
          offset: f
        }, d = !1); ; ) {
          if (h === 0) {
            if (m === "")
              break;
            h = D(m, n, a), m = Zc(m, h, a)[1];
          }
          if (f = a ? f - h : f + h, p = p - h, p < 0) {
            h = -p;
            break;
          }
          h = 0, yield {
            path: b,
            offset: f
          };
        }
      }
    }
    function D(S, x, $) {
      return x === "character" ? Yc(S, $) : x === "word" ? yC(S, $) : x === "line" || x === "block" ? S.length : 1;
    }
  }();
}
var L1 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    mode: n = "lowest",
    voids: a = !1
  } = r, {
    match: o,
    at: i = t.selection
  } = r;
  if (i) {
    var s = w.before(t, i, {
      voids: a
    });
    if (s) {
      var [, l] = w.first(t, []), u = [s.path, l];
      if (z.isPath(i) && i.length === 0)
        throw new Error("Cannot get the previous node from the root node!");
      if (o == null)
        if (z.isPath(i)) {
          var [c] = w.parent(t, i);
          o = (m) => c.children.includes(m);
        } else
          o = () => !0;
      var [d] = w.nodes(t, {
        reverse: !0,
        at: u,
        match: o,
        mode: n,
        voids: a
      });
      return d;
    }
  }
}, k1 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, o = {
    current: r,
    affinity: a,
    unref() {
      var {
        current: s
      } = o, l = w.rangeRefs(t);
      return l.delete(o), o.current = null, s;
    }
  }, i = w.rangeRefs(t);
  return i.add(o), o;
}, z1 = (e) => {
  var t = bd.get(e);
  return t || (t = /* @__PURE__ */ new Set(), bd.set(e, t)), t;
}, V1 = (e, t, r) => {
  if (X.isRange(t) && !r)
    return t;
  var n = w.start(e, t), a = w.end(e, r || t);
  return {
    anchor: n,
    focus: a
  };
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
function H1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vd(Object(r), !0).forEach(function(n) {
      yr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var W1 = (e, t) => {
  var {
    selection: r
  } = e;
  if (r) {
    var n = (c, d) => {
      if (!Be.isText(c))
        return !1;
      var [m, h] = w.parent(e, d);
      return !e.isVoid(m) || e.markableVoid(m);
    }, a = X.isExpanded(r), o = !1;
    if (!a) {
      var [i, s] = w.node(e, r);
      if (i && n(i, s)) {
        var [l] = w.parent(e, s);
        o = l && e.markableVoid(l);
      }
    }
    if (a || o)
      re.unsetNodes(e, t, {
        match: n,
        split: !0,
        voids: !0
      });
    else {
      var u = H1({}, w.marks(e) || {});
      delete u[t], e.marks = u, ei.get(e) || e.onChange();
    }
  }
}, q1 = (e, t) => {
  Hg.set(e, t);
}, K1 = (e, t) => w.point(e, t, {
  edge: "start"
}), U1 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: a = !1
  } = n, o = w.range(t, r), [i, s] = X.edges(o), l = "";
  for (var [u, c] of w.nodes(t, {
    at: o,
    match: Be.isText,
    voids: a
  })) {
    var d = u.text;
    z.equals(c, s.path) && (d = d.slice(0, s.offset)), z.equals(c, i.path) && (d = d.slice(i.offset)), l += d;
  }
  return l;
}, G1 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: a = !1
  } = n, [o, i] = X.edges(r);
  if (o.offset !== 0 || i.offset !== 0 || X.isCollapsed(r) || z.hasPrevious(i.path))
    return r;
  var s = w.above(t, {
    at: i,
    match: (p) => de.isElement(p) && w.isBlock(t, p),
    voids: a
  }), l = s ? s[1] : [], u = w.start(t, o), c = {
    anchor: u,
    focus: i
  }, d = !0;
  for (var [m, h] of w.nodes(t, {
    at: c,
    match: Be.isText,
    reverse: !0,
    voids: a
  })) {
    if (d) {
      d = !1;
      continue;
    }
    if (m.text !== "" || z.isBefore(h, l)) {
      i = {
        path: h,
        offset: m.text.length
      };
      break;
    }
  }
  return {
    anchor: o,
    focus: i
  };
}, X1 = (e, t) => {
  var r = w.isNormalizing(e);
  w.setNormalizing(e, !1);
  try {
    t();
  } finally {
    w.setNormalizing(e, r);
  }
  w.normalize(e);
}, Y1 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  w.withoutNormalizing(t, () => {
    var n, a, {
      reverse: o = !1,
      unit: i = "character",
      distance: s = 1,
      voids: l = !1
    } = r, {
      at: u = t.selection,
      hanging: c = !1
    } = r;
    if (u) {
      var d = !1;
      if (X.isRange(u) && X.isCollapsed(u) && (d = !0, u = u.anchor), Ge.isPoint(u)) {
        var m = w.void(t, {
          at: u,
          mode: "highest"
        });
        if (!l && m) {
          var [, h] = m;
          u = h;
        } else {
          var p = {
            unit: i,
            distance: s
          }, f = o ? w.before(t, u, p) || w.start(t, []) : w.after(t, u, p) || w.end(t, []);
          u = {
            anchor: u,
            focus: f
          }, c = !0;
        }
      }
      if (z.isPath(u)) {
        re.removeNodes(t, {
          at: u,
          voids: l
        });
        return;
      }
      if (!X.isCollapsed(u)) {
        if (!c) {
          var [, g] = X.edges(u), b = w.end(t, []);
          Ge.equals(g, b) || (u = w.unhangRange(t, u, {
            voids: l
          }));
        }
        var [C, y] = X.edges(u), E = w.above(t, {
          match: (G) => de.isElement(G) && w.isBlock(t, G),
          at: C,
          voids: l
        }), D = w.above(t, {
          match: (G) => de.isElement(G) && w.isBlock(t, G),
          at: y,
          voids: l
        }), S = E && D && !z.equals(E[1], D[1]), x = z.equals(C.path, y.path), $ = l ? null : (n = w.void(t, {
          at: C,
          mode: "highest"
        })) !== null && n !== void 0 ? n : w.elementReadOnly(t, {
          at: C,
          mode: "highest"
        }), O = l ? null : (a = w.void(t, {
          at: y,
          mode: "highest"
        })) !== null && a !== void 0 ? a : w.elementReadOnly(t, {
          at: y,
          mode: "highest"
        });
        if ($) {
          var A = w.before(t, C);
          A && E && z.isAncestor(E[1], A.path) && (C = A);
        }
        if (O) {
          var j = w.after(t, y);
          j && D && z.isAncestor(D[1], j.path) && (y = j);
        }
        var N = [], B;
        for (var P of w.nodes(t, {
          at: u,
          voids: l
        })) {
          var [R, T] = P;
          B && z.compare(T, B) === 0 || (!l && de.isElement(R) && (w.isVoid(t, R) || w.isElementReadOnly(t, R)) || !z.isCommon(T, C.path) && !z.isCommon(T, y.path)) && (N.push(P), B = T);
        }
        var F = Array.from(N, (G) => {
          var [, le] = G;
          return w.pathRef(t, le);
        }), I = w.pointRef(t, C), k = w.pointRef(t, y), L = "";
        if (!x && !$) {
          var W = I.current, [U] = w.leaf(t, W), {
            path: Z
          } = W, {
            offset: M
          } = C, V = U.text.slice(M);
          V.length > 0 && (t.apply({
            type: "remove_text",
            path: Z,
            offset: M,
            text: V
          }), L = V);
        }
        if (F.reverse().map((G) => G.unref()).filter((G) => G !== null).forEach((G) => re.removeNodes(t, {
          at: G,
          voids: l
        })), !O) {
          var H = k.current, [q] = w.leaf(t, H), {
            path: J
          } = H, ee = x ? C.offset : 0, ce = q.text.slice(ee, y.offset);
          ce.length > 0 && (t.apply({
            type: "remove_text",
            path: J,
            offset: ee,
            text: ce
          }), L = ce);
        }
        !x && S && k.current && I.current && re.mergeNodes(t, {
          at: k.current,
          hanging: !0,
          voids: l
        }), d && o && i === "character" && L.length > 1 && L.match(/[\u0E00-\u0E7F]+/) && re.insertText(t, L.slice(0, L.length - s));
        var ae = I.unref(), me = k.unref(), fe = o ? ae || me : me || ae;
        r.at == null && fe && re.select(t, fe);
      }
    }
  });
}, Z1 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  w.withoutNormalizing(t, () => {
    var {
      hanging: a = !1,
      voids: o = !1
    } = n, {
      at: i = Xc(t),
      batchDirty: s = !0
    } = n;
    if (r.length) {
      if (X.isRange(i))
        if (a || (i = w.unhangRange(t, i, {
          voids: o
        })), X.isCollapsed(i))
          i = i.anchor;
        else {
          var [, l] = X.edges(i);
          if (!o && w.void(t, {
            at: l
          }))
            return;
          var u = w.pointRef(t, l);
          re.delete(t, {
            at: i
          }), i = u.unref();
        }
      else
        z.isPath(i) && (i = w.start(t, i));
      if (!(!o && w.void(t, {
        at: i
      }))) {
        var c = w.above(t, {
          at: i,
          match: (V) => de.isElement(V) && w.isInline(t, V),
          mode: "highest",
          voids: o
        });
        if (c) {
          var [, d] = c;
          if (w.isEnd(t, i, d)) {
            var m = w.after(t, d);
            i = m;
          } else if (w.isStart(t, i, d)) {
            var h = w.before(t, d);
            i = h;
          }
        }
        var p = w.above(t, {
          match: (V) => de.isElement(V) && w.isBlock(t, V),
          at: i,
          voids: o
        }), [, f] = p, g = w.isStart(t, i, f), b = w.isEnd(t, i, f), C = g && b, y = !g || g && b, E = !b, [, D] = be.first({
          children: r
        }, []), [, S] = be.last({
          children: r
        }, []), x = [], $ = (V) => {
          var [H, q] = V, J = q.length === 0;
          return J ? !1 : C ? !0 : !(y && z.isAncestor(q, D) && de.isElement(H) && !t.isVoid(H) && !t.isInline(H) || E && z.isAncestor(q, S) && de.isElement(H) && !t.isVoid(H) && !t.isInline(H));
        };
        for (var O of be.nodes({
          children: r
        }, {
          pass: $
        }))
          $(O) && x.push(O);
        var A = [], j = [], N = [], B = !0, P = !1;
        for (var [R] of x)
          de.isElement(R) && !t.isInline(R) ? (B = !1, P = !0, j.push(R)) : B ? A.push(R) : N.push(R);
        var [T] = w.nodes(t, {
          at: i,
          match: (V) => Be.isText(V) || w.isInline(t, V),
          mode: "highest",
          voids: o
        }), [, F] = T, I = w.isStart(t, i, F), k = w.isEnd(t, i, F), L = w.pathRef(t, b && !N.length ? z.next(f) : f), W = w.pathRef(t, k ? z.next(F) : F);
        re.splitNodes(t, {
          at: i,
          match: (V) => P ? de.isElement(V) && w.isBlock(t, V) : Be.isText(V) || w.isInline(t, V),
          mode: P ? "lowest" : "highest",
          always: P && (!g || A.length > 0) && (!b || N.length > 0),
          voids: o
        });
        var U = w.pathRef(t, !I || I && k ? z.next(F) : F);
        if (re.insertNodes(t, A, {
          at: U.current,
          match: (V) => Be.isText(V) || w.isInline(t, V),
          mode: "highest",
          voids: o,
          batchDirty: s
        }), C && !A.length && j.length && !N.length && re.delete(t, {
          at: f,
          voids: o
        }), re.insertNodes(t, j, {
          at: L.current,
          match: (V) => de.isElement(V) && w.isBlock(t, V),
          mode: "lowest",
          voids: o,
          batchDirty: s
        }), re.insertNodes(t, N, {
          at: W.current,
          match: (V) => Be.isText(V) || w.isInline(t, V),
          mode: "highest",
          voids: o,
          batchDirty: s
        }), !n.at) {
          var Z;
          if (N.length > 0 && W.current ? Z = z.previous(W.current) : j.length > 0 && L.current ? Z = z.previous(L.current) : U.current && (Z = z.previous(U.current)), Z) {
            var M = w.end(t, Z);
            re.select(t, M);
          }
        }
        U.unref(), L.unref(), W.unref();
      }
    }
  });
}, Q1 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    edge: n = "anchor"
  } = r, {
    selection: a
  } = t;
  if (a) {
    if (n === "anchor")
      re.select(t, a.anchor);
    else if (n === "focus")
      re.select(t, a.focus);
    else if (n === "start") {
      var [o] = X.edges(a);
      re.select(t, o);
    } else if (n === "end") {
      var [, i] = X.edges(a);
      re.select(t, i);
    }
  } else
    return;
}, J1 = (e) => {
  var {
    selection: t
  } = e;
  t && e.apply({
    type: "set_selection",
    properties: t,
    newProperties: null
  });
}, eE = function(t) {
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
      anchor: l,
      focus: u
    } = n, c = {
      distance: a,
      unit: o,
      ignoreNonSelectable: !0
    }, d = {};
    if (s == null || s === "anchor") {
      var m = i ? w.before(t, l, c) : w.after(t, l, c);
      m && (d.anchor = m);
    }
    if (s == null || s === "focus") {
      var h = i ? w.before(t, u, c) : w.after(t, u, c);
      h && (d.focus = h);
    }
    re.setSelection(t, d);
  }
}, tE = (e, t) => {
  var {
    selection: r
  } = e;
  if (t = w.range(e, t), r) {
    re.setSelection(e, t);
    return;
  }
  if (!X.isRange(t))
    throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(er.stringify(t)));
  e.apply({
    type: "set_selection",
    properties: r,
    newProperties: t
  });
};
function Hd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hd(Object(r), !0).forEach(function(n) {
      yr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var rE = function(t, r) {
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
    } = a, l = o === "anchor" ? i : s;
    re.setSelection(t, {
      [o === "anchor" ? "anchor" : "focus"]: Wd(Wd({}, l), r)
    });
  }
}, nE = (e, t) => {
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
}, aE = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  w.withoutNormalizing(t, () => {
    var {
      hanging: a = !1,
      voids: o = !1,
      mode: i = "lowest",
      batchDirty: s = !0
    } = n, {
      at: l,
      match: u,
      select: c
    } = n;
    if (be.isNode(r) && (r = [r]), r.length !== 0) {
      var [d] = r;
      if (l || (l = Xc(t), c !== !1 && (c = !0)), c == null && (c = !1), X.isRange(l))
        if (a || (l = w.unhangRange(t, l, {
          voids: o
        })), X.isCollapsed(l))
          l = l.anchor;
        else {
          var [, m] = X.edges(l), h = w.pointRef(t, m);
          re.delete(t, {
            at: l
          }), l = h.unref();
        }
      if (Ge.isPoint(l)) {
        u == null && (Be.isText(d) ? u = (A) => Be.isText(A) : t.isInline(d) ? u = (A) => Be.isText(A) || w.isInline(t, A) : u = (A) => de.isElement(A) && w.isBlock(t, A));
        var [p] = w.nodes(t, {
          at: l.path,
          match: u,
          mode: i,
          voids: o
        });
        if (p) {
          var [, f] = p, g = w.pathRef(t, f), b = w.isEnd(t, l, f);
          re.splitNodes(t, {
            at: l,
            match: u,
            mode: i,
            voids: o
          });
          var C = g.unref();
          l = b ? z.next(C) : C;
        } else
          return;
      }
      var y = z.parent(l), E = l[l.length - 1];
      if (!(!o && w.void(t, {
        at: y
      }))) {
        if (s) {
          var D = [], S = z.levels(y);
          zC(t, () => {
            var A = function() {
              var B = y.concat(E);
              E++;
              var P = {
                type: "insert_node",
                path: B,
                node: j
              };
              t.apply(P), l = z.next(l), D.push(P), Be.isText ? S.push(...Array.from(be.nodes(j), (R) => {
                var [, T] = R;
                return B.concat(T);
              })) : S.push(B);
            };
            for (var j of r)
              A();
          }, () => {
            qg(t, S, (A) => {
              var j = A;
              for (var N of D)
                if (z.operationCanTransformPath(N) && (j = z.transform(j, N), !j))
                  return null;
              return j;
            });
          });
        } else
          for (var x of r) {
            var $ = y.concat(E);
            E++, t.apply({
              type: "insert_node",
              path: $,
              node: x
            }), l = z.next(l);
          }
        if (l = z.previous(l), c) {
          var O = w.end(t, l);
          O && re.select(t, O);
        }
      }
    }
  });
}, oE = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  w.withoutNormalizing(t, () => {
    var {
      at: n = t.selection,
      mode: a = "lowest",
      voids: o = !1
    } = r, {
      match: i
    } = r;
    if (i == null && (i = z.isPath(n) ? $o(t, n) : (E) => de.isElement(E) && w.isBlock(t, E)), !!n) {
      var s = w.nodes(t, {
        at: n,
        match: i,
        mode: a,
        voids: o
      }), l = Array.from(s, (E) => {
        var [, D] = E;
        return w.pathRef(t, D);
      });
      for (var u of l) {
        var c = u.unref();
        if (c.length < 2)
          throw new Error("Cannot lift node at a path [".concat(c, "] because it has a depth of less than `2`."));
        var d = w.node(t, z.parent(c)), [m, h] = d, p = c[c.length - 1], {
          length: f
        } = m.children;
        if (f === 1) {
          var g = z.next(h);
          re.moveNodes(t, {
            at: c,
            to: g,
            voids: o
          }), re.removeNodes(t, {
            at: h,
            voids: o
          });
        } else if (p === 0)
          re.moveNodes(t, {
            at: c,
            to: h,
            voids: o
          });
        else if (p === f - 1) {
          var b = z.next(h);
          re.moveNodes(t, {
            at: c,
            to: b,
            voids: o
          });
        } else {
          var C = z.next(c), y = z.next(h);
          re.splitNodes(t, {
            at: C,
            voids: o
          }), re.moveNodes(t, {
            at: c,
            to: y,
            voids: o
          });
        }
      }
    }
  });
}, iE = ["text"], sE = ["children"], Kg = (e, t) => {
  if (de.isElement(t)) {
    var r = t;
    return w.isVoid(e, t) ? !0 : r.children.length === 1 ? Kg(e, r.children[0]) : !1;
  } else
    return !w.isEditor(t);
}, lE = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  w.withoutNormalizing(t, () => {
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
        if (z.isPath(a)) {
          var [l] = w.parent(t, a);
          n = (A) => l.children.includes(A);
        } else
          n = (A) => de.isElement(A) && w.isBlock(t, A);
      if (!o && X.isRange(a) && (a = w.unhangRange(t, a, {
        voids: i
      })), X.isRange(a))
        if (X.isCollapsed(a))
          a = a.anchor;
        else {
          var [, u] = X.edges(a), c = w.pointRef(t, u);
          re.delete(t, {
            at: a
          }), a = c.unref(), r.at == null && re.select(t, a);
        }
      var [d] = w.nodes(t, {
        at: a,
        match: n,
        voids: i,
        mode: s
      }), m = w.previous(t, {
        at: a,
        match: n,
        voids: i,
        mode: s
      });
      if (!(!d || !m)) {
        var [h, p] = d, [f, g] = m;
        if (!(p.length === 0 || g.length === 0)) {
          var b = z.next(g), C = z.common(p, g), y = z.isSibling(p, g), E = Array.from(w.levels(t, {
            at: p
          }), (A) => {
            var [j] = A;
            return j;
          }).slice(C.length).slice(0, -1), D = w.above(t, {
            at: p,
            mode: "highest",
            match: (A) => E.includes(A) && Kg(t, A)
          }), S = D && w.pathRef(t, D[1]), x, $;
          if (Be.isText(h) && Be.isText(f)) {
            var O = jn(h, iE);
            $ = f.text.length, x = O;
          } else if (de.isElement(h) && de.isElement(f)) {
            var O = jn(h, sE);
            $ = f.children.length, x = O;
          } else
            throw new Error("Cannot merge the node at path [".concat(p, "] with the previous sibling because it is not the same kind: ").concat(er.stringify(h), " ").concat(er.stringify(f)));
          y || re.moveNodes(t, {
            at: p,
            to: b,
            voids: i
          }), S && re.removeNodes(t, {
            at: S.current,
            voids: i
          }), de.isElement(f) && w.isEmpty(t, f) || Be.isText(f) && f.text === "" && g[g.length - 1] !== 0 ? re.removeNodes(t, {
            at: g,
            voids: i
          }) : t.apply({
            type: "merge_node",
            path: b,
            position: $,
            properties: x
          }), S && S.unref();
        }
      }
    }
  });
}, uE = (e, t) => {
  w.withoutNormalizing(e, () => {
    var {
      to: r,
      at: n = e.selection,
      mode: a = "lowest",
      voids: o = !1
    } = t, {
      match: i
    } = t;
    if (n) {
      i == null && (i = z.isPath(n) ? $o(e, n) : (h) => de.isElement(h) && w.isBlock(e, h));
      var s = w.pathRef(e, r), l = w.nodes(e, {
        at: n,
        match: i,
        mode: a,
        voids: o
      }), u = Array.from(l, (h) => {
        var [, p] = h;
        return w.pathRef(e, p);
      });
      for (var c of u) {
        var d = c.unref(), m = s.current;
        d.length !== 0 && e.apply({
          type: "move_node",
          path: d,
          newPath: m
        }), s.current && z.isSibling(m, d) && z.isAfter(m, d) && (s.current = z.next(s.current));
      }
      s.unref();
    }
  });
}, cE = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  w.withoutNormalizing(t, () => {
    var {
      hanging: n = !1,
      voids: a = !1,
      mode: o = "lowest"
    } = r, {
      at: i = t.selection,
      match: s
    } = r;
    if (i) {
      s == null && (s = z.isPath(i) ? $o(t, i) : (h) => de.isElement(h) && w.isBlock(t, h)), !n && X.isRange(i) && (i = w.unhangRange(t, i, {
        voids: a
      }));
      var l = w.nodes(t, {
        at: i,
        match: s,
        mode: o,
        voids: a
      }), u = Array.from(l, (h) => {
        var [, p] = h;
        return w.pathRef(t, p);
      });
      for (var c of u) {
        var d = c.unref();
        if (d) {
          var [m] = w.node(t, d);
          t.apply({
            type: "remove_node",
            path: d,
            node: m
          });
        }
      }
    }
  });
}, fE = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  w.withoutNormalizing(t, () => {
    var {
      match: a,
      at: o = t.selection,
      compare: i,
      merge: s
    } = n, {
      hanging: l = !1,
      mode: u = "lowest",
      split: c = !1,
      voids: d = !1
    } = n;
    if (o) {
      if (a == null && (a = z.isPath(o) ? $o(t, o) : ($) => de.isElement($) && w.isBlock(t, $)), !l && X.isRange(o) && (o = w.unhangRange(t, o, {
        voids: d
      })), c && X.isRange(o)) {
        if (X.isCollapsed(o) && w.leaf(t, o.anchor)[0].text.length > 0)
          return;
        var m = w.rangeRef(t, o, {
          affinity: "inward"
        }), [h, p] = X.edges(o), f = u === "lowest" ? "lowest" : "highest", g = w.isEnd(t, p, p.path);
        re.splitNodes(t, {
          at: p,
          match: a,
          mode: f,
          voids: d,
          always: !g
        });
        var b = w.isStart(t, h, h.path);
        re.splitNodes(t, {
          at: h,
          match: a,
          mode: f,
          voids: d,
          always: !b
        }), o = m.unref(), n.at == null && re.select(t, o);
      }
      i || (i = ($, O) => $ !== O);
      for (var [C, y] of w.nodes(t, {
        at: o,
        match: a,
        mode: u,
        voids: d
      })) {
        var E = {}, D = {};
        if (y.length !== 0) {
          var S = !1;
          for (var x in r)
            x === "children" || x === "text" || i(r[x], C[x]) && (S = !0, C.hasOwnProperty(x) && (E[x] = C[x]), s ? r[x] != null && (D[x] = s(C[x], r[x])) : r[x] != null && (D[x] = r[x]));
          S && t.apply({
            type: "set_node",
            path: y,
            properties: E,
            newProperties: D
          });
        }
      }
    }
  });
}, dE = (e, t) => {
  if (X.isCollapsed(t))
    return t.anchor;
  var [, r] = X.edges(t), n = w.pointRef(e, r);
  return re.delete(e, {
    at: t
  }), n.unref();
}, vE = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  w.withoutNormalizing(t, () => {
    var {
      mode: n = "lowest",
      voids: a = !1
    } = r, {
      match: o,
      at: i = t.selection,
      height: s = 0,
      always: l = !1
    } = r;
    if (o == null && (o = (k) => de.isElement(k) && w.isBlock(t, k)), X.isRange(i) && (i = dE(t, i)), z.isPath(i)) {
      var u = i, c = w.point(t, u), [d] = w.parent(t, u);
      o = (k) => k === d, s = c.path.length - u.length + 1, i = c, l = !0;
    }
    if (i) {
      var m = w.pointRef(t, i, {
        affinity: "backward"
      }), h;
      try {
        var [p] = w.nodes(t, {
          at: i,
          match: o,
          mode: n,
          voids: a
        });
        if (!p)
          return;
        var f = w.void(t, {
          at: i,
          mode: "highest"
        }), g = 0;
        if (!a && f) {
          var [b, C] = f;
          if (de.isElement(b) && t.isInline(b)) {
            var y = w.after(t, C);
            if (!y) {
              var E = {
                text: ""
              }, D = z.next(C);
              re.insertNodes(t, E, {
                at: D,
                voids: a
              }), y = w.point(t, D);
            }
            i = y, l = !0;
          }
          var S = i.path.length - C.length;
          s = S + 1, l = !0;
        }
        h = w.pointRef(t, i);
        var x = i.path.length - s, [, $] = p, O = i.path.slice(0, x), A = s === 0 ? i.offset : i.path[x] + g;
        for (var [j, N] of w.levels(t, {
          at: O,
          reverse: !0,
          voids: a
        })) {
          var B = !1;
          if (N.length < $.length || N.length === 0 || !a && de.isElement(j) && w.isVoid(t, j))
            break;
          var P = m.current, R = w.isEnd(t, P, N);
          if (l || !m || !w.isEdge(t, P, N)) {
            B = !0;
            var T = be.extractProps(j);
            t.apply({
              type: "split_node",
              path: N,
              position: A,
              properties: T
            });
          }
          A = N[N.length - 1] + (B || R ? 1 : 0);
        }
        if (r.at == null) {
          var F = h.current || w.end(t, []);
          re.select(t, F);
        }
      } finally {
        var I;
        m.unref(), (I = h) === null || I === void 0 || I.unref();
      }
    }
  });
}, mE = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  Array.isArray(r) || (r = [r]);
  var a = {};
  for (var o of r)
    a[o] = null;
  re.setNodes(t, a, n);
}, gE = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  w.withoutNormalizing(t, () => {
    var {
      mode: n = "lowest",
      split: a = !1,
      voids: o = !1
    } = r, {
      at: i = t.selection,
      match: s
    } = r;
    if (i) {
      s == null && (s = z.isPath(i) ? $o(t, i) : (h) => de.isElement(h) && w.isBlock(t, h)), z.isPath(i) && (i = w.range(t, i));
      var l = X.isRange(i) ? w.rangeRef(t, i) : null, u = w.nodes(t, {
        at: i,
        match: s,
        mode: n,
        voids: o
      }), c = Array.from(
        u,
        (h) => {
          var [, p] = h;
          return w.pathRef(t, p);
        }
        // unwrapNode will call liftNode which does not support splitting the node when nested.
        // If we do not reverse the order and call it from top to the bottom, it will remove all blocks
        // that wrap target node. So we reverse the order.
      ).reverse(), d = function() {
        var p = m.unref(), [f] = w.node(t, p), g = w.range(t, p);
        a && l && (g = X.intersection(l.current, g)), re.liftNodes(t, {
          at: g,
          match: (b) => de.isAncestor(f) && f.children.includes(b),
          voids: o
        });
      };
      for (var m of c)
        d();
      l && l.unref();
    }
  });
};
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
function Kd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qd(Object(r), !0).forEach(function(n) {
      yr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var pE = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  w.withoutNormalizing(t, () => {
    var {
      mode: a = "lowest",
      split: o = !1,
      voids: i = !1
    } = n, {
      match: s,
      at: l = t.selection
    } = n;
    if (l) {
      if (s == null && (z.isPath(l) ? s = $o(t, l) : t.isInline(r) ? s = (g) => de.isElement(g) && w.isInline(t, g) || Be.isText(g) : s = (g) => de.isElement(g) && w.isBlock(t, g)), o && X.isRange(l)) {
        var [u, c] = X.edges(l), d = w.rangeRef(t, l, {
          affinity: "inward"
        });
        re.splitNodes(t, {
          at: c,
          match: s,
          voids: i
        }), re.splitNodes(t, {
          at: u,
          match: s,
          voids: i
        }), l = d.unref(), n.at == null && re.select(t, l);
      }
      var m = Array.from(w.nodes(t, {
        at: l,
        match: t.isInline(r) ? (g) => de.isElement(g) && w.isBlock(t, g) : (g) => w.isEditor(g),
        mode: "lowest",
        voids: i
      })), h = function() {
        var b = X.isRange(l) ? X.intersection(l, w.range(t, f)) : l;
        if (!b)
          return 0;
        var C = Array.from(w.nodes(t, {
          at: b,
          match: s,
          mode: a,
          voids: i
        }));
        if (C.length > 0) {
          var [y] = C, E = C[C.length - 1], [, D] = y, [, S] = E;
          if (D.length === 0 && S.length === 0)
            return 0;
          var x = z.equals(D, S) ? z.parent(D) : z.common(D, S), $ = w.range(t, D, S), O = w.node(t, x), [A] = O, j = x.length + 1, N = z.next(S.slice(0, j)), B = Kd(Kd({}, r), {}, {
            children: []
          });
          re.insertNodes(t, B, {
            at: N,
            voids: i
          }), re.moveNodes(t, {
            at: $,
            match: (P) => de.isAncestor(A) && A.children.includes(P),
            to: N.concat(0),
            voids: i
          });
        }
      }, p;
      for (var [, f] of m)
        p = h();
    }
  });
}, hE = () => {
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
      return VC(e, ...n);
    },
    // Editor
    addMark: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return GC(e, ...n);
    },
    deleteBackward: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return ZC(e, ...n);
    },
    deleteForward: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return QC(e, ...n);
    },
    deleteFragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return JC(e, ...n);
    },
    getFragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return WC(e, ...n);
    },
    insertBreak: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return c1(e, ...n);
    },
    insertSoftBreak: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return d1(e, ...n);
    },
    insertFragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Z1(e, ...n);
    },
    insertNode: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return f1(e, ...n);
    },
    insertText: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return m1(e, ...n);
    },
    normalizeNode: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return qC(e, ...n);
    },
    removeMark: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return W1(e, ...n);
    },
    getDirtyPaths: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return HC(e, ...n);
    },
    shouldNormalize: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return KC(e, ...n);
    },
    // Editor interface
    above: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return UC(e, ...n);
    },
    after: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return XC(e, ...n);
    },
    before: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return YC(e, ...n);
    },
    collapse: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Q1(e, ...n);
    },
    delete: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Y1(e, ...n);
    },
    deselect: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return J1(e, ...n);
    },
    edges: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return e1(e, ...n);
    },
    elementReadOnly: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return t1(e, ...n);
    },
    end: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return r1(e, ...n);
    },
    first: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return n1(e, ...n);
    },
    fragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return a1(e, ...n);
    },
    getMarks: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return O1(e, ...n);
    },
    hasBlocks: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return i1(e, ...n);
    },
    hasInlines: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return s1(e, ...n);
    },
    hasPath: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return l1(e, ...n);
    },
    hasTexts: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return u1(e, ...n);
    },
    insertNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return aE(e, ...n);
    },
    isBlock: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return g1(e, ...n);
    },
    isEdge: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return p1(e, ...n);
    },
    isEmpty: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return h1(e, ...n);
    },
    isEnd: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return b1(e, ...n);
    },
    isNormalizing: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return y1(e, ...n);
    },
    isStart: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return C1(e, ...n);
    },
    last: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return E1(e, ...n);
    },
    leaf: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return w1(e, ...n);
    },
    levels: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return S1(e, ...n);
    },
    liftNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return oE(e, ...n);
    },
    mergeNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return lE(e, ...n);
    },
    move: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return eE(e, ...n);
    },
    moveNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return uE(e, ...n);
    },
    next: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return $1(e, ...n);
    },
    node: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return A1(e, ...n);
    },
    nodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return B1(e, ...n);
    },
    normalize: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return F1(e, ...n);
    },
    parent: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return P1(e, ...n);
    },
    path: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return I1(e, ...n);
    },
    pathRef: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return R1(e, ...n);
    },
    pathRefs: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return N1(e, ...n);
    },
    point: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return j1(e, ...n);
    },
    pointRef: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return T1(e, ...n);
    },
    pointRefs: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return M1(e, ...n);
    },
    positions: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return _1(e, ...n);
    },
    previous: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return L1(e, ...n);
    },
    range: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return V1(e, ...n);
    },
    rangeRef: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return k1(e, ...n);
    },
    rangeRefs: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return z1(e, ...n);
    },
    removeNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return cE(e, ...n);
    },
    select: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return tE(e, ...n);
    },
    setNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return fE(e, ...n);
    },
    setNormalizing: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return q1(e, ...n);
    },
    setPoint: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return rE(e, ...n);
    },
    setSelection: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return nE(e, ...n);
    },
    splitNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return vE(e, ...n);
    },
    start: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return K1(e, ...n);
    },
    string: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return U1(e, ...n);
    },
    unhangRange: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return G1(e, ...n);
    },
    unsetNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return mE(e, ...n);
    },
    unwrapNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return gE(e, ...n);
    },
    void: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return o1(e, ...n);
    },
    withoutNormalizing: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return X1(e, ...n);
    },
    wrapNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return pE(e, ...n);
    }
  };
  return e;
}, qi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ao(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bE = EE, Ug = "֑-߿יִ-﷽ﹰ-ﻼ", Gg = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿", yE = new RegExp("^[^" + Gg + "]*[" + Ug + "]"), CE = new RegExp("^[^" + Ug + "]*[" + Gg + "]");
function EE(e) {
  return e = String(e || ""), yE.test(e) ? "rtl" : CE.test(e) ? "ltr" : "neutral";
}
const Xg = /* @__PURE__ */ Ao(bE);
function wE(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Qc = wE, SE = typeof qi == "object" && qi && qi.Object === Object && qi, DE = SE, xE = DE, OE = typeof self == "object" && self && self.Object === Object && self, $E = xE || OE || Function("return this")(), Yg = $E, AE = Yg, BE = function() {
  return AE.Date.now();
}, FE = BE, PE = /\s/;
function RE(e) {
  for (var t = e.length; t-- && PE.test(e.charAt(t)); )
    ;
  return t;
}
var NE = RE, IE = NE, TE = /^\s+/;
function ME(e) {
  return e && e.slice(0, IE(e) + 1).replace(TE, "");
}
var jE = ME, _E = Yg, LE = _E.Symbol, Zg = LE, Ud = Zg, Qg = Object.prototype, kE = Qg.hasOwnProperty, zE = Qg.toString, zo = Ud ? Ud.toStringTag : void 0;
function VE(e) {
  var t = kE.call(e, zo), r = e[zo];
  try {
    e[zo] = void 0;
    var n = !0;
  } catch {
  }
  var a = zE.call(e);
  return n && (t ? e[zo] = r : delete e[zo]), a;
}
var HE = VE, WE = Object.prototype, qE = WE.toString;
function KE(e) {
  return qE.call(e);
}
var UE = KE, Gd = Zg, GE = HE, XE = UE, YE = "[object Null]", ZE = "[object Undefined]", Xd = Gd ? Gd.toStringTag : void 0;
function QE(e) {
  return e == null ? e === void 0 ? ZE : YE : Xd && Xd in Object(e) ? GE(e) : XE(e);
}
var JE = QE;
function ew(e) {
  return e != null && typeof e == "object";
}
var tw = ew, rw = JE, nw = tw, aw = "[object Symbol]";
function ow(e) {
  return typeof e == "symbol" || nw(e) && rw(e) == aw;
}
var iw = ow, sw = jE, Yd = Qc, lw = iw, Zd = NaN, uw = /^[-+]0x[0-9a-f]+$/i, cw = /^0b[01]+$/i, fw = /^0o[0-7]+$/i, dw = parseInt;
function vw(e) {
  if (typeof e == "number")
    return e;
  if (lw(e))
    return Zd;
  if (Yd(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Yd(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = sw(e);
  var r = cw.test(e);
  return r || fw.test(e) ? dw(e.slice(2), r ? 2 : 8) : uw.test(e) ? Zd : +e;
}
var mw = vw, gw = Qc, Tl = FE, Qd = mw, pw = "Expected a function", hw = Math.max, bw = Math.min;
function yw(e, t, r) {
  var n, a, o, i, s, l, u = 0, c = !1, d = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(pw);
  t = Qd(t) || 0, gw(r) && (c = !!r.leading, d = "maxWait" in r, o = d ? hw(Qd(r.maxWait) || 0, t) : o, m = "trailing" in r ? !!r.trailing : m);
  function h(S) {
    var x = n, $ = a;
    return n = a = void 0, u = S, i = e.apply($, x), i;
  }
  function p(S) {
    return u = S, s = setTimeout(b, t), c ? h(S) : i;
  }
  function f(S) {
    var x = S - l, $ = S - u, O = t - x;
    return d ? bw(O, o - $) : O;
  }
  function g(S) {
    var x = S - l, $ = S - u;
    return l === void 0 || x >= t || x < 0 || d && $ >= o;
  }
  function b() {
    var S = Tl();
    if (g(S))
      return C(S);
    s = setTimeout(b, f(S));
  }
  function C(S) {
    return s = void 0, m && n ? h(S) : (n = a = void 0, i);
  }
  function y() {
    s !== void 0 && clearTimeout(s), u = 0, n = l = a = s = void 0;
  }
  function E() {
    return s === void 0 ? i : C(Tl());
  }
  function D() {
    var S = Tl(), x = g(S);
    if (n = arguments, a = this, l = S, x) {
      if (s === void 0)
        return p(l);
      if (d)
        return clearTimeout(s), s = setTimeout(b, t), h(l);
    }
    return s === void 0 && (s = setTimeout(b, t)), i;
  }
  return D.cancel = y, D.flush = E, D;
}
var Jg = yw;
const Cw = /* @__PURE__ */ Ao(Jg);
var Ew = Jg, ww = Qc, Sw = "Expected a function";
function Dw(e, t, r) {
  var n = !0, a = !0;
  if (typeof e != "function")
    throw new TypeError(Sw);
  return ww(r) && (n = "leading" in r ? !!r.leading : n, a = "trailing" in r ? !!r.trailing : a), Ew(e, t, {
    leading: n,
    maxWait: t,
    trailing: a
  });
}
var xw = Dw;
const Ow = /* @__PURE__ */ Ao(xw), Jd = (e) => typeof e == "object" && e != null && e.nodeType === 1, ev = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", Ml = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const r = getComputedStyle(e, null);
    return ev(r.overflowY, t) || ev(r.overflowX, t) || ((n) => {
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
}, Ki = (e, t, r, n, a, o, i, s) => o < e && i > t || o > e && i < t ? 0 : o <= e && s <= r || i >= t && s >= r ? o - e - n : i > t && s < r || o < e && s > r ? i - t + a : 0, $w = (e) => {
  const t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, tv = (e, t) => {
  var r, n, a, o;
  if (typeof document > "u")
    return [];
  const { scrollMode: i, block: s, inline: l, boundary: u, skipOverflowHiddenElements: c } = t, d = typeof u == "function" ? u : (T) => T !== u;
  if (!Jd(e))
    throw new TypeError("Invalid target");
  const m = document.scrollingElement || document.documentElement, h = [];
  let p = e;
  for (; Jd(p) && d(p); ) {
    if (p = $w(p), p === m) {
      h.push(p);
      break;
    }
    p != null && p === document.body && Ml(p) && !Ml(document.documentElement) || p != null && Ml(p, c) && h.push(p);
  }
  const f = (n = (r = window.visualViewport) == null ? void 0 : r.width) != null ? n : innerWidth, g = (o = (a = window.visualViewport) == null ? void 0 : a.height) != null ? o : innerHeight, { scrollX: b, scrollY: C } = window, { height: y, width: E, top: D, right: S, bottom: x, left: $ } = e.getBoundingClientRect(), { top: O, right: A, bottom: j, left: N } = ((T) => {
    const F = window.getComputedStyle(T);
    return { top: parseFloat(F.scrollMarginTop) || 0, right: parseFloat(F.scrollMarginRight) || 0, bottom: parseFloat(F.scrollMarginBottom) || 0, left: parseFloat(F.scrollMarginLeft) || 0 };
  })(e);
  let B = s === "start" || s === "nearest" ? D - O : s === "end" ? x + j : D + y / 2 - O + j, P = l === "center" ? $ + E / 2 - N + A : l === "end" ? S + A : $ - N;
  const R = [];
  for (let T = 0; T < h.length; T++) {
    const F = h[T], { height: I, width: k, top: L, right: W, bottom: U, left: Z } = F.getBoundingClientRect();
    if (i === "if-needed" && D >= 0 && $ >= 0 && x <= g && S <= f && D >= L && x <= U && $ >= Z && S <= W)
      return R;
    const M = getComputedStyle(F), V = parseInt(M.borderLeftWidth, 10), H = parseInt(M.borderTopWidth, 10), q = parseInt(M.borderRightWidth, 10), J = parseInt(M.borderBottomWidth, 10);
    let ee = 0, ce = 0;
    const ae = "offsetWidth" in F ? F.offsetWidth - F.clientWidth - V - q : 0, me = "offsetHeight" in F ? F.offsetHeight - F.clientHeight - H - J : 0, fe = "offsetWidth" in F ? F.offsetWidth === 0 ? 0 : k / F.offsetWidth : 0, G = "offsetHeight" in F ? F.offsetHeight === 0 ? 0 : I / F.offsetHeight : 0;
    if (m === F)
      ee = s === "start" ? B : s === "end" ? B - g : s === "nearest" ? Ki(C, C + g, g, H, J, C + B, C + B + y, y) : B - g / 2, ce = l === "start" ? P : l === "center" ? P - f / 2 : l === "end" ? P - f : Ki(b, b + f, f, V, q, b + P, b + P + E, E), ee = Math.max(0, ee + C), ce = Math.max(0, ce + b);
    else {
      ee = s === "start" ? B - L - H : s === "end" ? B - U + J + me : s === "nearest" ? Ki(L, U, I, H, J + me, B, B + y, y) : B - (L + I / 2) + me / 2, ce = l === "start" ? P - Z - V : l === "center" ? P - (Z + k / 2) + ae / 2 : l === "end" ? P - W + q + ae : Ki(Z, W, k, V, q + ae, P, P + E, E);
      const { scrollLeft: le, scrollTop: Se } = F;
      ee = G === 0 ? 0 : Math.max(0, Math.min(Se + ee / G, F.scrollHeight - I / G + me)), ce = fe === 0 ? 0 : Math.max(0, Math.min(le + ce / fe, F.scrollWidth - k / fe + ae)), B += Se - ee, P += le - ce;
    }
    R.push({ el: F, top: ee, left: ce });
  }
  return R;
}, Aw = (e) => e === !1 ? { block: "end", inline: "nearest" } : ((t) => t === Object(t) && Object.keys(t).length !== 0)(e) ? e : { block: "start", inline: "nearest" };
function ep(e, t) {
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
    return t.behavior(tv(e, t));
  const n = typeof t == "boolean" || t == null ? void 0 : t.behavior;
  for (const { el: a, top: o, left: i } of tv(e, Aw(t))) {
    const s = o - r.top + r.bottom, l = i - r.left + r.right;
    a.scroll({ top: s, left: l, behavior: n });
  }
}
var wa = [], Bw = function() {
  return wa.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Fw = function() {
  return wa.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, rv = "ResizeObserver loop completed with undelivered notifications.", Pw = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: rv
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = rv), window.dispatchEvent(e);
}, mi;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(mi || (mi = {}));
var Sa = function(e) {
  return Object.freeze(e);
}, Rw = /* @__PURE__ */ function() {
  function e(t, r) {
    this.inlineSize = t, this.blockSize = r, Sa(this);
  }
  return e;
}(), tp = function() {
  function e(t, r, n, a) {
    return this.x = t, this.y = r, this.width = n, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Sa(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, r = t.x, n = t.y, a = t.top, o = t.right, i = t.bottom, s = t.left, l = t.width, u = t.height;
    return { x: r, y: n, top: a, right: o, bottom: i, left: s, width: l, height: u };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Jc = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, rp = function(e) {
  if (Jc(e)) {
    var t = e.getBBox(), r = t.width, n = t.height;
    return !r && !n;
  }
  var a = e, o = a.offsetWidth, i = a.offsetHeight;
  return !(o || i || e.getClientRects().length);
}, nv = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var r = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(r && e instanceof r.Element);
}, Nw = function(e) {
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
}, ti = typeof window < "u" ? window : {}, Ui = /* @__PURE__ */ new WeakMap(), av = /auto|scroll/, Iw = /^tb|vertical/, Tw = /msie|trident/i.test(ti.navigator && ti.navigator.userAgent), mn = function(e) {
  return parseFloat(e || "0");
}, mo = function(e, t, r) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = !1), new Rw((r ? t : e) || 0, (r ? e : t) || 0);
}, ov = Sa({
  devicePixelContentBoxSize: mo(),
  borderBoxSize: mo(),
  contentBoxSize: mo(),
  contentRect: new tp(0, 0, 0, 0)
}), np = function(e, t) {
  if (t === void 0 && (t = !1), Ui.has(e) && !t)
    return Ui.get(e);
  if (rp(e))
    return Ui.set(e, ov), ov;
  var r = getComputedStyle(e), n = Jc(e) && e.ownerSVGElement && e.getBBox(), a = !Tw && r.boxSizing === "border-box", o = Iw.test(r.writingMode || ""), i = !n && av.test(r.overflowY || ""), s = !n && av.test(r.overflowX || ""), l = n ? 0 : mn(r.paddingTop), u = n ? 0 : mn(r.paddingRight), c = n ? 0 : mn(r.paddingBottom), d = n ? 0 : mn(r.paddingLeft), m = n ? 0 : mn(r.borderTopWidth), h = n ? 0 : mn(r.borderRightWidth), p = n ? 0 : mn(r.borderBottomWidth), f = n ? 0 : mn(r.borderLeftWidth), g = d + u, b = l + c, C = f + h, y = m + p, E = s ? e.offsetHeight - y - e.clientHeight : 0, D = i ? e.offsetWidth - C - e.clientWidth : 0, S = a ? g + C : 0, x = a ? b + y : 0, $ = n ? n.width : mn(r.width) - S - D, O = n ? n.height : mn(r.height) - x - E, A = $ + g + D + C, j = O + b + E + y, N = Sa({
    devicePixelContentBoxSize: mo(Math.round($ * devicePixelRatio), Math.round(O * devicePixelRatio), o),
    borderBoxSize: mo(A, j, o),
    contentBoxSize: mo($, O, o),
    contentRect: new tp(d, l, $, O)
  });
  return Ui.set(e, N), N;
}, ap = function(e, t, r) {
  var n = np(e, r), a = n.borderBoxSize, o = n.contentBoxSize, i = n.devicePixelContentBoxSize;
  switch (t) {
    case mi.DEVICE_PIXEL_CONTENT_BOX:
      return i;
    case mi.BORDER_BOX:
      return a;
    default:
      return o;
  }
}, Mw = /* @__PURE__ */ function() {
  function e(t) {
    var r = np(t);
    this.target = t, this.contentRect = r.contentRect, this.borderBoxSize = Sa([r.borderBoxSize]), this.contentBoxSize = Sa([r.contentBoxSize]), this.devicePixelContentBoxSize = Sa([r.devicePixelContentBoxSize]);
  }
  return e;
}(), op = function(e) {
  if (rp(e))
    return 1 / 0;
  for (var t = 0, r = e.parentNode; r; )
    t += 1, r = r.parentNode;
  return t;
}, jw = function() {
  var e = 1 / 0, t = [];
  wa.forEach(function(i) {
    if (i.activeTargets.length !== 0) {
      var s = [];
      i.activeTargets.forEach(function(u) {
        var c = new Mw(u.target), d = op(u.target);
        s.push(c), u.lastReportedSize = ap(u.target, u.observedBox), d < e && (e = d);
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
}, iv = function(e) {
  wa.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(a) {
      a.isActive() && (op(a.target) > e ? r.activeTargets.push(a) : r.skippedTargets.push(a));
    });
  });
}, _w = function() {
  var e = 0;
  for (iv(e); Bw(); )
    e = jw(), iv(e);
  return Fw() && Pw(), e > 0;
}, jl, ip = [], Lw = function() {
  return ip.splice(0).forEach(function(e) {
    return e();
  });
}, kw = function(e) {
  if (!jl) {
    var t = 0, r = document.createTextNode(""), n = { characterData: !0 };
    new MutationObserver(function() {
      return Lw();
    }).observe(r, n), jl = function() {
      r.textContent = "".concat(t ? t-- : t++);
    };
  }
  ip.push(e), jl();
}, zw = function(e) {
  kw(function() {
    requestAnimationFrame(e);
  });
}, ps = 0, Vw = function() {
  return !!ps;
}, Hw = 250, Ww = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, sv = [
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
], lv = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, _l = !1, qw = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var r = this;
    if (t === void 0 && (t = Hw), !_l) {
      _l = !0;
      var n = lv(t);
      zw(function() {
        var a = !1;
        try {
          a = _w();
        } finally {
          if (_l = !1, t = n - lv(), !Vw())
            return;
          a ? r.run(1e3) : t > 0 ? r.run(t) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, r = function() {
      return t.observer && t.observer.observe(document.body, Ww);
    };
    document.body ? r() : ti.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), sv.forEach(function(r) {
      return ti.addEventListener(r, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), sv.forEach(function(r) {
      return ti.removeEventListener(r, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), Pu = new qw(), uv = function(e) {
  !ps && e > 0 && Pu.start(), ps += e, !ps && Pu.stop();
}, Kw = function(e) {
  return !Jc(e) && !Nw(e) && getComputedStyle(e).display === "inline";
}, Uw = function() {
  function e(t, r) {
    this.target = t, this.observedBox = r || mi.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = ap(this.target, this.observedBox, !0);
    return Kw(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), Gw = /* @__PURE__ */ function() {
  function e(t, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = r;
  }
  return e;
}(), Gi = /* @__PURE__ */ new WeakMap(), cv = function(e, t) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === t)
      return r;
  return -1;
}, Xi = function() {
  function e() {
  }
  return e.connect = function(t, r) {
    var n = new Gw(t, r);
    Gi.set(t, n);
  }, e.observe = function(t, r, n) {
    var a = Gi.get(t), o = a.observationTargets.length === 0;
    cv(a.observationTargets, r) < 0 && (o && wa.push(a), a.observationTargets.push(new Uw(r, n && n.box)), uv(1), Pu.schedule());
  }, e.unobserve = function(t, r) {
    var n = Gi.get(t), a = cv(n.observationTargets, r), o = n.observationTargets.length === 1;
    a >= 0 && (o && wa.splice(wa.indexOf(n), 1), n.observationTargets.splice(a, 1), uv(-1));
  }, e.disconnect = function(t) {
    var r = this, n = Gi.get(t);
    n.observationTargets.slice().forEach(function(a) {
      return r.unobserve(t, a.target);
    }), n.activeTargets.splice(0, n.activeTargets.length);
  }, e;
}(), Xw = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Xi.connect(this, t);
  }
  return e.prototype.observe = function(t, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!nv(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Xi.observe(this, t, r);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!nv(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Xi.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    Xi.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}(), Vn = {};
Object.defineProperty(Vn, "__esModule", {
  value: !0
});
var Yw = typeof window < "u" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), Ll = {
  alt: "altKey",
  control: "ctrlKey",
  meta: "metaKey",
  shift: "shiftKey"
}, sp = {
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
  mod: Yw ? "meta" : "control",
  opt: "alt",
  option: "alt",
  return: "enter",
  right: "arrowright",
  space: " ",
  spacebar: " ",
  up: "arrowup",
  win: "meta",
  windows: "meta"
}, ef = {
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
for (var Yi = 1; Yi < 20; Yi++)
  ef["f" + Yi] = 111 + Yi;
function ol(e, t, r) {
  t && !("byKey" in t) && (r = t, t = null), Array.isArray(e) || (e = [e]);
  var n = e.map(function(i) {
    return lp(i, t);
  }), a = function(s) {
    return n.some(function(l) {
      return up(l, s);
    });
  }, o = r == null ? a : a(r);
  return o;
}
function Zw(e, t) {
  return ol(e, t);
}
function Qw(e, t) {
  return ol(e, { byKey: !0 }, t);
}
function lp(e, t) {
  var r = t && t.byKey, n = {};
  e = e.replace("++", "+add");
  var a = e.split("+"), o = a.length;
  for (var i in Ll)
    n[Ll[i]] = !1;
  var s = !0, l = !1, u = void 0;
  try {
    for (var c = a[Symbol.iterator](), d; !(s = (d = c.next()).done); s = !0) {
      var m = d.value, h = m.endsWith("?") && m.length > 1;
      h && (m = m.slice(0, -1));
      var p = tf(m), f = Ll[p];
      if (m.length > 1 && !f && !sp[m] && !ef[p])
        throw new TypeError('Unknown modifier: "' + m + '"');
      (o === 1 || !f) && (r ? n.key = p : n.which = cp(m)), f && (n[f] = h ? null : !0);
    }
  } catch (g) {
    l = !0, u = g;
  } finally {
    try {
      !s && c.return && c.return();
    } finally {
      if (l)
        throw u;
    }
  }
  return n;
}
function up(e, t) {
  for (var r in e) {
    var n = e[r], a = void 0;
    if (n != null && (r === "key" && t.key != null ? a = t.key.toLowerCase() : r === "which" ? a = n === 91 && t.which === 93 ? 91 : t.which : a = t[r], !(a == null && n === !1) && a !== n))
      return !1;
  }
  return !0;
}
function cp(e) {
  e = tf(e);
  var t = ef[e] || e.toUpperCase().charCodeAt(0);
  return t;
}
function tf(e) {
  return e = e.toLowerCase(), e = sp[e] || e, e;
}
Vn.default = ol;
var kl = Vn.isHotkey = ol;
Vn.isCodeHotkey = Zw;
Vn.isKeyHotkey = Qw;
Vn.parseHotkey = lp;
Vn.compareHotkey = up;
Vn.toKeyCode = cp;
Vn.toKeyName = tf;
function Jw(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function ho(e, t) {
  if (e == null)
    return {};
  var r = Jw(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function gi(e) {
  "@babel/helpers - typeof";
  return gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gi(e);
}
function eS(e, t) {
  if (gi(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (gi(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function tS(e) {
  var t = eS(e, "string");
  return gi(t) === "symbol" ? t : String(t);
}
function Wr(e, t, r) {
  return t = tS(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var il = /* @__PURE__ */ _r(null), Ut = () => {
  var e = Ct(il);
  if (!e)
    throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
  return e;
}, fp = parseInt(Q.version.split(".")[0], 10), rS = typeof navigator < "u" && typeof window < "u" && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, fv = typeof navigator < "u" && /Mac OS X/.test(navigator.userAgent), gr = typeof navigator < "u" && /Android/.test(navigator.userAgent), lo = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), Yo = typeof navigator < "u" && /AppleWebKit(?!.*Chrome)/i.test(navigator.userAgent), nS = typeof navigator < "u" && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent), dp = typeof navigator < "u" && /Chrome/i.test(navigator.userAgent), aS = typeof navigator < "u" && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent), oS = gr && typeof navigator < "u" && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent), iS = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent), sS = typeof navigator < "u" && /.*UCBrowser/.test(navigator.userAgent), lS = typeof navigator < "u" && /.*Wechat/.test(navigator.userAgent) && !/.*MacWechat/.test(navigator.userAgent), hs = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Xn = (!aS || !oS) && !nS && // globalThis is undefined in older browsers
typeof globalThis < "u" && globalThis.InputEvent && // @ts-ignore The `getTargetRanges` property isn't recognized.
typeof globalThis.InputEvent.prototype.getTargetRanges == "function", rf = /* @__PURE__ */ new WeakMap(), nf = /* @__PURE__ */ new WeakMap(), vp = /* @__PURE__ */ new WeakMap(), bs = /* @__PURE__ */ new WeakMap(), Ru = /* @__PURE__ */ new WeakMap(), pi = /* @__PURE__ */ new WeakMap(), Da = /* @__PURE__ */ new WeakMap(), Ts = /* @__PURE__ */ new WeakMap(), sl = /* @__PURE__ */ new WeakMap(), Nu = /* @__PURE__ */ new WeakMap(), ra = /* @__PURE__ */ new WeakMap(), ha = /* @__PURE__ */ new WeakMap(), ri = /* @__PURE__ */ new WeakMap(), Iu = /* @__PURE__ */ new WeakMap(), af = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap(), Rn = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), Jn = /* @__PURE__ */ new WeakMap(), ea = /* @__PURE__ */ new WeakMap(), mp = /* @__PURE__ */ new WeakMap(), bo = Symbol("placeholder"), gp = Symbol("mark-placeholder"), uS = globalThis.Text, of = (e) => e && e.ownerDocument && e.ownerDocument.defaultView || null, cS = (e) => oa(e) && e.nodeType === 8, Hr = (e) => oa(e) && e.nodeType === 1, oa = (e) => {
  var t = of(e);
  return !!t && e instanceof t.Node;
}, Tu = (e) => {
  var t = e && e.anchorNode && of(e.anchorNode);
  return !!t && e instanceof t.Selection;
}, pp = (e) => oa(e) && e.nodeType === 3, fS = (e) => e.clipboardData && e.clipboardData.getData("text/plain") !== "" && e.clipboardData.types.length === 1, dS = (e) => {
  var [t, r] = e;
  if (Hr(t) && t.childNodes.length) {
    var n = r === t.childNodes.length, a = n ? r - 1 : r;
    for ([t, a] = hp(t, a, n ? "backward" : "forward"), n = a < r; Hr(t) && t.childNodes.length; ) {
      var o = n ? t.childNodes.length - 1 : 0;
      t = mS(t, o, n ? "backward" : "forward");
    }
    r = n && t.textContent != null ? t.textContent.length : 0;
  }
  return [t, r];
}, vS = (e) => {
  for (var t = e && e.parentNode; t; ) {
    if (t.toString() === "[object ShadowRoot]")
      return !0;
    t = t.parentNode;
  }
  return !1;
}, hp = (e, t, r) => {
  for (var {
    childNodes: n
  } = e, a = n[t], o = t, i = !1, s = !1; (cS(a) || Hr(a) && a.childNodes.length === 0 || Hr(a) && a.getAttribute("contenteditable") === "false") && !(i && s); ) {
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
}, mS = (e, t, r) => {
  var [n] = hp(e, t, r);
  return n;
}, bp = (e) => {
  var t = "";
  if (pp(e) && e.nodeValue)
    return e.nodeValue;
  if (Hr(e)) {
    for (var r of Array.from(e.childNodes))
      t += bp(r);
    var n = getComputedStyle(e).getPropertyValue("display");
    (n === "block" || n === "list" || e.tagName === "BR") && (t += `
`);
  }
  return t;
}, gS = /data-slate-fragment="(.+?)"/m, pS = (e) => {
  var t = e.getData("text/html"), [, r] = t.match(gS) || [];
  return r;
}, sf = (e, t, r) => {
  var {
    target: n
  } = t;
  if (Hr(n) && n.matches('[contentEditable="false"]'))
    return !1;
  var {
    document: a
  } = te.getWindow(e);
  if (a.contains(n))
    return te.hasDOMNode(e, n, {
      editable: !0
    });
  var o = r.find((i) => {
    var {
      addedNodes: s,
      removedNodes: l
    } = i;
    for (var u of s)
      if (u === n || u.contains(n))
        return !0;
    for (var c of l)
      if (c === n || c.contains(n))
        return !0;
  });
  return !o || o === t ? !1 : sf(e, o, r);
}, hS = 0;
class bS {
  constructor() {
    Wr(this, "id", void 0), this.id = "".concat(hS++);
  }
}
var te = {
  androidPendingDiffs: (e) => wr.get(e),
  androidScheduleFlush: (e) => {
    var t;
    (t = af.get(e)) === null || t === void 0 || t();
  },
  blur: (e) => {
    var t = te.toDOMNode(e, e), r = te.findDocumentOrShadowRoot(e);
    ra.set(e, !1), r.activeElement === t && t.blur();
  },
  deselect: (e) => {
    var {
      selection: t
    } = e, r = te.findDocumentOrShadowRoot(e), n = r.getSelection();
    n && n.rangeCount > 0 && n.removeAllRanges(), t && re.deselect(e);
  },
  findDocumentOrShadowRoot: (e) => {
    var t = te.toDOMNode(e, e), r = t.getRootNode();
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
    var o = te.toSlateNode(e, t.target), i = te.findPath(e, o);
    if (de.isElement(o) && w.isVoid(e, o)) {
      var s = a.getBoundingClientRect(), l = e.isInline(o) ? r - s.left < s.left + s.width - r : n - s.top < s.top + s.height - n, u = w.point(e, i, {
        edge: l ? "start" : "end"
      }), c = l ? w.before(e, u) : w.after(e, u);
      if (c) {
        var d = w.range(e, c);
        return d;
      }
    }
    var m, {
      document: h
    } = te.getWindow(e);
    if (h.caretRangeFromPoint)
      m = h.caretRangeFromPoint(r, n);
    else {
      var p = h.caretPositionFromPoint(r, n);
      p && (m = h.createRange(), m.setStart(p.offsetNode, p.offset), m.setEnd(p.offsetNode, p.offset));
    }
    if (!m)
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
    var f = te.toSlateRange(e, m, {
      exactMatch: !1,
      suppressThrow: !1
    });
    return f;
  },
  findKey: (e, t) => {
    var r = Ts.get(t);
    return r || (r = new bS(), Ts.set(t, r)), r;
  },
  findPath: (e, t) => {
    for (var r = [], n = t; ; ) {
      var a = nf.get(n);
      if (a == null) {
        if (w.isEditor(n))
          return r;
        break;
      }
      var o = rf.get(n);
      if (o == null)
        break;
      r.unshift(o), n = a;
    }
    throw new Error("Unable to find the path for Slate node: ".concat(er.stringify(t)));
  },
  focus: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      retries: 5
    };
    if (!ra.get(t)) {
      if (r.retries <= 0)
        throw new Error("Could not set focus, editor seems stuck with pending operations");
      if (t.operations.length > 0) {
        setTimeout(() => {
          te.focus(t, {
            retries: r.retries - 1
          });
        }, 10);
        return;
      }
      var n = te.toDOMNode(t, t), a = te.findDocumentOrShadowRoot(t);
      if (a.activeElement !== n) {
        if (t.selection && a instanceof Document) {
          var o = a.getSelection(), i = te.toDOMRange(t, t.selection);
          o == null || o.removeAllRanges(), o == null || o.addRange(i);
        }
        t.selection || (re.select(t, w.start(t, [])), t.onChange()), ra.set(t, !0), n.focus({
          preventScroll: !0
        });
      }
    }
  },
  getWindow: (e) => {
    var t = vp.get(e);
    if (!t)
      throw new Error("Unable to find a host window element for this editor");
    return t;
  },
  hasDOMNode: function(t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      editable: a = !1
    } = n, o = te.toDOMNode(t, t), i;
    try {
      i = Hr(r) ? r : r.parentElement;
    } catch (s) {
      if (s instanceof Error && !s.message.includes('Permission denied to access property "nodeType"'))
        throw s;
    }
    return i ? i.closest("[data-slate-editor]") === o && (!a || i.isContentEditable ? !0 : typeof i.isContentEditable == "boolean" && // isContentEditable exists only on HTMLElement, and on other nodes it will be undefined
    // this is the core logic that lets you know you got the right editor.selection instead of null when editor is contenteditable="false"(readOnly)
    i.closest('[contenteditable="false"]') === o || !!i.getAttribute("data-slate-zero-width")) : !1;
  },
  hasEditableTarget: (e, t) => oa(t) && te.hasDOMNode(e, t, {
    editable: !0
  }),
  hasRange: (e, t) => {
    var {
      anchor: r,
      focus: n
    } = t;
    return w.hasPath(e, r.path) && w.hasPath(e, n.path);
  },
  hasSelectableTarget: (e, t) => te.hasEditableTarget(e, t) || te.isTargetInsideNonReadonlyVoid(e, t),
  hasTarget: (e, t) => oa(t) && te.hasDOMNode(e, t),
  insertData: (e, t) => {
    e.insertData(t);
  },
  insertFragmentData: (e, t) => e.insertFragmentData(t),
  insertTextData: (e, t) => e.insertTextData(t),
  isComposing: (e) => !!ha.get(e),
  isFocused: (e) => !!ra.get(e),
  isReadOnly: (e) => !!Nu.get(e),
  isTargetInsideNonReadonlyVoid: (e, t) => {
    if (Nu.get(e))
      return !1;
    var r = te.hasTarget(e, t) && te.toSlateNode(e, t);
    return de.isElement(r) && w.isVoid(e, r);
  },
  setFragmentData: (e, t, r) => e.setFragmentData(t, r),
  toDOMNode: (e, t) => {
    var r = sl.get(e), n = w.isEditor(t) ? bs.get(e) : r == null ? void 0 : r.get(te.findKey(e, t));
    if (!n)
      throw new Error("Cannot resolve a DOM node from Slate node: ".concat(er.stringify(t)));
    return n;
  },
  toDOMPoint: (e, t) => {
    var [r] = w.node(e, t.path), n = te.toDOMNode(e, r), a;
    w.void(e, {
      at: t
    }) && (t = {
      path: t.path,
      offset: 0
    });
    for (var o = "[data-slate-string], [data-slate-zero-width]", i = Array.from(n.querySelectorAll(o)), s = 0, l = 0; l < i.length; l++) {
      var u = i[l], c = u.childNodes[0];
      if (!(c == null || c.textContent == null)) {
        var {
          length: d
        } = c.textContent, m = u.getAttribute("data-slate-length"), h = m == null ? d : parseInt(m, 10), p = s + h, f = i[l + 1];
        if (t.offset === p && f !== null && f !== void 0 && f.hasAttribute("data-slate-mark-placeholder")) {
          var g, b = f.childNodes[0];
          a = [
            // COMPAT: If we don't explicity set the dom point to be on the actual
            // dom text element, chrome will put the selection behind the actual dom
            // text element, causing domRange.getBoundingClientRect() calls on a collapsed
            // selection to return incorrect zero values (https://bugs.chromium.org/p/chromium/issues/detail?id=435438)
            // which will cause issues when scrolling to it.
            b instanceof uS ? b : f,
            (g = f.textContent) !== null && g !== void 0 && g.startsWith("\uFEFF") ? 1 : 0
          ];
          break;
        }
        if (t.offset <= p) {
          var C = Math.min(d, Math.max(0, t.offset - s));
          a = [c, C];
          break;
        }
        s = p;
      }
    }
    if (!a)
      throw new Error("Cannot resolve a DOM point from Slate point: ".concat(er.stringify(t)));
    return a;
  },
  toDOMRange: (e, t) => {
    var {
      anchor: r,
      focus: n
    } = t, a = X.isBackward(t), o = te.toDOMPoint(e, r), i = X.isCollapsed(t) ? o : te.toDOMPoint(e, n), s = te.getWindow(e), l = s.document.createRange(), [u, c] = a ? i : o, [d, m] = a ? o : i, h = Hr(u) ? u : u.parentElement, p = !!h.getAttribute("data-slate-zero-width"), f = Hr(d) ? d : d.parentElement, g = !!f.getAttribute("data-slate-zero-width");
    return l.setStart(u, p ? 1 : c), l.setEnd(d, g ? 1 : m), l;
  },
  toSlateNode: (e, t) => {
    var r = Hr(t) ? t : t.parentElement;
    r && !r.hasAttribute("data-slate-node") && (r = r.closest("[data-slate-node]"));
    var n = r ? pi.get(r) : null;
    if (!n)
      throw new Error("Cannot resolve a Slate node from DOM node: ".concat(r));
    return n;
  },
  toSlatePoint: (e, t, r) => {
    var {
      exactMatch: n,
      suppressThrow: a
    } = r, [o, i] = n ? t : dS(t), s = o.parentNode, l = null, u = 0;
    if (s) {
      var c, d, m = te.toDOMNode(e, e), h = s.closest('[data-slate-void="true"]'), p = h && m.contains(h) ? h : null, f = s.closest("[data-slate-leaf]"), g = null;
      if (f) {
        if (l = f.closest('[data-slate-node="text"]'), l) {
          var b = te.getWindow(e), C = b.document.createRange();
          C.setStart(l, 0), C.setEnd(o, i);
          var y = C.cloneContents(), E = [...Array.prototype.slice.call(y.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(y.querySelectorAll("[contenteditable=false]"))];
          E.forEach((P) => {
            if (gr && !n && P.hasAttribute("data-slate-zero-width") && P.textContent.length > 0 && P.textContext !== "\uFEFF") {
              P.textContent.startsWith("\uFEFF") && (P.textContent = P.textContent.slice(1));
              return;
            }
            P.parentNode.removeChild(P);
          }), u = y.textContent.length, g = l;
        }
      } else if (p) {
        for (var D = p.querySelectorAll("[data-slate-leaf]"), S = 0; S < D.length; S++) {
          var x = D[S];
          if (te.hasDOMNode(e, x)) {
            f = x;
            break;
          }
        }
        f ? (l = f.closest('[data-slate-node="text"]'), g = f, u = g.textContent.length, g.querySelectorAll("[data-slate-zero-width]").forEach((P) => {
          u -= P.textContent.length;
        })) : u = 1;
      }
      g && u === g.textContent.length && // COMPAT: Android IMEs might remove the zero width space while composing,
      // and we don't add it for line-breaks.
      gr && g.getAttribute("data-slate-zero-width") === "z" && (c = g.textContent) !== null && c !== void 0 && c.startsWith("\uFEFF") && // COMPAT: If the parent node is a Slate zero-width space, editor is
      // because the text node should have no characters. However, during IME
      // composition the ASCII characters will be prepended to the zero-width
      // space, so subtract 1 from the offset to account for the zero-width
      // space character.
      (s.hasAttribute("data-slate-zero-width") || // COMPAT: In Firefox, `range.cloneContents()` returns an extra trailing '\n'
      // when the document ends with a new-line character. This results in the offset
      // length being off by one, so we need to subtract one to account for this.
      lo && (d = g.textContent) !== null && d !== void 0 && d.endsWith(`

`)) && u--;
    }
    if (gr && !l && !n) {
      var $ = s.hasAttribute("data-slate-node") ? s : s.closest("[data-slate-node]");
      if ($ && te.hasDOMNode(e, $, {
        editable: !0
      })) {
        var O = te.toSlateNode(e, $), {
          path: A,
          offset: j
        } = w.start(e, te.findPath(e, O));
        return $.querySelector("[data-slate-leaf]") || (j = i), {
          path: A,
          offset: j
        };
      }
    }
    if (!l) {
      if (a)
        return null;
      throw new Error("Cannot resolve a Slate point from DOM point: ".concat(t));
    }
    var N = te.toSlateNode(e, l), B = te.findPath(e, N);
    return {
      path: B,
      offset: u
    };
  },
  toSlateRange: (e, t, r) => {
    var n, {
      exactMatch: a,
      suppressThrow: o
    } = r, i = Tu(t) ? t.anchorNode : t.startContainer, s, l, u, c, d;
    if (i)
      if (Tu(t)) {
        if (lo && t.rangeCount > 1) {
          u = t.focusNode;
          var m = t.getRangeAt(0), h = t.getRangeAt(t.rangeCount - 1);
          if (u instanceof HTMLTableRowElement && m.startContainer instanceof HTMLTableRowElement && h.startContainer instanceof HTMLTableRowElement) {
            let S = function(x) {
              return x.childElementCount > 0 ? S(x.children[0]) : x;
            };
            var p = m.startContainer, f = h.startContainer, g = S(p.children[m.startOffset]), b = S(f.children[h.startOffset]);
            c = 0, b.childNodes.length > 0 ? s = b.childNodes[0] : s = b, g.childNodes.length > 0 ? u = g.childNodes[0] : u = g, b instanceof HTMLElement ? l = b.innerHTML.length : l = 0;
          } else
            m.startContainer === u ? (s = h.endContainer, l = h.endOffset, c = m.startOffset) : (s = m.startContainer, l = m.endOffset, c = h.startOffset);
        } else
          s = t.anchorNode, l = t.anchorOffset, u = t.focusNode, c = t.focusOffset;
        dp && vS(s) || lo ? d = t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : d = t.isCollapsed;
      } else
        s = t.startContainer, l = t.startOffset, u = t.endContainer, c = t.endOffset, d = t.collapsed;
    if (s == null || u == null || l == null || c == null)
      throw new Error("Cannot resolve a Slate range from DOM range: ".concat(t));
    if (lo && (n = u.textContent) !== null && n !== void 0 && n.endsWith(`

`) && c === u.textContent.length && c--, "getAttribute" in u && u.getAttribute("contenteditable") === "false" && u.getAttribute("data-slate-void") !== "true") {
      var C;
      u = s, c = ((C = s.textContent) === null || C === void 0 ? void 0 : C.length) || 0;
    }
    var y = te.toSlatePoint(e, [s, l], {
      exactMatch: a,
      suppressThrow: o
    });
    if (!y)
      return null;
    var E = d ? y : te.toSlatePoint(e, [u, c], {
      exactMatch: a,
      suppressThrow: o
    });
    if (!E)
      return null;
    var D = {
      anchor: y,
      focus: E
    };
    return X.isExpanded(D) && X.isForward(D) && Hr(u) && w.void(e, {
      at: D.focus,
      mode: "highest"
    }) && (D = w.unhangRange(e, D, {
      voids: !0
    })), D;
  }
};
function yS(e, t) {
  var {
    path: r,
    diff: n
  } = t;
  if (!w.hasPath(e, r))
    return !1;
  var a = be.get(e, r);
  if (!Be.isText(a))
    return !1;
  if (n.start !== a.text.length || n.text.length === 0)
    return a.text.slice(n.start, n.start + n.text.length) === n.text;
  var o = z.next(r);
  if (!w.hasPath(e, o))
    return !1;
  var i = be.get(e, o);
  return Be.isText(i) && i.text.startsWith(n.text);
}
function yp(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return r.reduce((a, o) => a.slice(0, o.start) + o.text + a.slice(o.end), e);
}
function CS(e, t) {
  for (var r = Math.min(e.length, t.length), n = 0; n < r; n++)
    if (e.charAt(n) !== t.charAt(n))
      return n;
  return r;
}
function ES(e, t, r) {
  for (var n = Math.min(e.length, t.length, r), a = 0; a < n; a++)
    if (e.charAt(e.length - a - 1) !== t.charAt(t.length - a - 1))
      return a;
  return n;
}
function Cp(e, t) {
  var {
    start: r,
    end: n,
    text: a
  } = t, o = e.slice(r, n), i = CS(o, a), s = Math.min(o.length - i, a.length - i), l = ES(o, a, s), u = {
    start: r + i,
    end: n - l,
    text: a.slice(i, a.length - l)
  };
  return u.start === u.end && u.text.length === 0 ? null : u;
}
function wS(e, t, r) {
  var n = Math.min(t.start, r.start), a = Math.max(0, Math.min(t.start + t.text.length, r.end) - r.start), o = yp(e, t, r), i = Math.max(r.start + r.text.length, t.start + t.text.length + (t.start + t.text.length > r.start ? r.text.length : 0) - a), s = o.slice(n, i), l = Math.max(t.end, r.end - t.text.length + (t.end - t.start));
  return Cp(e, {
    start: n,
    end: l,
    text: s
  });
}
function SS(e) {
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
function Mu(e, t) {
  var {
    path: r,
    offset: n
  } = t;
  if (!w.hasPath(e, r))
    return null;
  var a = be.get(e, r);
  if (!Be.isText(a))
    return null;
  var o = w.above(e, {
    match: (s) => de.isElement(s) && w.isBlock(e, s),
    at: r
  });
  if (!o)
    return null;
  for (; n > a.text.length; ) {
    var i = w.next(e, {
      at: r,
      match: Be.isText
    });
    if (!i || !z.isDescendant(i[1], o[1]))
      return null;
    n -= a.text.length, a = i[0], r = i[1];
  }
  return {
    path: r,
    offset: n
  };
}
function dv(e, t) {
  var r = Mu(e, t.anchor);
  if (!r)
    return null;
  if (X.isCollapsed(t))
    return {
      anchor: r,
      focus: r
    };
  var n = Mu(e, t.focus);
  return n ? {
    anchor: r,
    focus: n
  } : null;
}
function ju(e, t, r) {
  var n = wr.get(e), a = n == null ? void 0 : n.find((c) => {
    var {
      path: d
    } = c;
    return z.equals(d, t.path);
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
  var l = {
    path: t.path,
    offset: t.offset - o.text.length + o.end - o.start
  }, u = Ge.transform(l, r, {
    affinity: "backward"
  });
  return u ? r.type === "split_node" && z.equals(r.path, t.path) && l.offset < r.position && o.start < r.position ? u : {
    path: u.path,
    offset: u.offset + o.text.length - o.end + o.start
  } : null;
}
function vv(e, t, r) {
  var n = ju(e, t.anchor, r);
  if (!n)
    return null;
  if (X.isCollapsed(t))
    return {
      anchor: n,
      focus: n
    };
  var a = ju(e, t.focus, r);
  return a ? {
    anchor: n,
    focus: a
  } : null;
}
function DS(e, t) {
  var {
    path: r,
    diff: n,
    id: a
  } = e;
  switch (t.type) {
    case "insert_text":
      return !z.equals(t.path, r) || t.offset >= n.end ? e : t.offset <= n.start ? {
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
      return !z.equals(t.path, r) || t.offset >= n.end ? e : t.offset + t.text.length <= n.start ? {
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
      return !z.equals(t.path, r) || t.position >= n.end ? {
        diff: n,
        id: a,
        path: z.transform(r, t, {
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
        path: z.transform(r, t, {
          affinity: "forward"
        })
      };
    case "merge_node":
      return z.equals(t.path, r) ? {
        diff: {
          start: n.start + t.position,
          end: n.end + t.position,
          text: n.text
        },
        id: a,
        path: z.transform(r, t)
      } : {
        diff: n,
        id: a,
        path: z.transform(r, t)
      };
  }
  var o = z.transform(r, t);
  return o ? {
    diff: n,
    path: o,
    id: a
  } : null;
}
function mv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mv(Object(r), !0).forEach(function(n) {
      Wr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var xS = 25, OS = 200, $S = function() {
}, AS = (e) => (e == null ? void 0 : e.constructor.name) === "DataTransfer";
function BS(e) {
  var {
    editor: t,
    scheduleOnDOMSelectionChange: r,
    onDOMSelectionChange: n
  } = e, a = !1, o = null, i = null, s = null, l = 0, u = !1, c = () => {
    var N = ea.get(t);
    if (ea.delete(t), N) {
      var {
        selection: B
      } = t, P = dv(t, N);
      P && (!B || !X.equals(P, B)) && re.select(t, P);
    }
  }, d = () => {
    var N = Jn.get(t);
    if (Jn.delete(t), !!N) {
      if (N.at) {
        var B = Ge.isPoint(N.at) ? Mu(t, N.at) : dv(t, N.at);
        if (!B)
          return;
        var P = w.range(t, B);
        (!t.selection || !X.equals(t.selection, P)) && re.select(t, B);
      }
      N.run();
    }
  }, m = () => {
    if (i && (clearTimeout(i), i = null), s && (clearTimeout(s), s = null), !E() && !y()) {
      c();
      return;
    }
    a || (a = !0, setTimeout(() => a = !1)), y() && (a = "action");
    var N = t.selection && w.rangeRef(t, t.selection, {
      affinity: "forward"
    });
    Rn.set(t, t.marks), $S("flush", Jn.get(t), wr.get(t));
    for (var B = E(), P; P = (R = wr.get(t)) === null || R === void 0 ? void 0 : R[0]; ) {
      var R, T, F = rn.get(t);
      F !== void 0 && (rn.delete(t), t.marks = F), F && u === !1 && (u = null);
      var I = SS(P);
      (!t.selection || !X.equals(t.selection, I)) && re.select(t, I), P.diff.text ? w.insertText(t, P.diff.text) : w.deleteFragment(t), wr.set(t, (T = wr.get(t)) === null || T === void 0 ? void 0 : T.filter((W) => {
        var {
          id: U
        } = W;
        return U !== P.id;
      })), yS(t, P) || (B = !1, Jn.delete(t), Rn.delete(t), a = "action", ea.delete(t), r.cancel(), n.cancel(), N == null || N.unref());
    }
    var k = N == null ? void 0 : N.unref();
    if (k && !ea.get(t) && (!t.selection || !X.equals(k, t.selection)) && re.select(t, k), y()) {
      d();
      return;
    }
    B && r(), r.flush(), n.flush(), c();
    var L = Rn.get(t);
    Rn.delete(t), L !== void 0 && (t.marks = L, t.onChange());
  }, h = (N) => {
    o && clearTimeout(o), o = setTimeout(() => {
      ha.set(t, !1), m();
    }, xS);
  }, p = (N) => {
    ha.set(t, !0), o && (clearTimeout(o), o = null);
  }, f = function() {
    var B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, P = Ru.get(t);
    if (P) {
      if (E() || B) {
        P.style.display = "none";
        return;
      }
      P.style.removeProperty("display");
    }
  }, g = (N, B) => {
    var P, R = (P = wr.get(t)) !== null && P !== void 0 ? P : [];
    wr.set(t, R);
    var T = be.leaf(t, N), F = R.findIndex((L) => z.equals(L.path, N));
    if (F < 0) {
      var I = Cp(T.text, B);
      I && R.push({
        path: N,
        diff: B,
        id: l++
      }), f();
      return;
    }
    var k = wS(T.text, R[F].diff, B);
    if (!k) {
      R.splice(F, 1), f();
      return;
    }
    R[F] = Zi(Zi({}, R[F]), {}, {
      diff: k
    });
  }, b = function(B) {
    var {
      at: P
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    u = !1, ea.delete(t), r.cancel(), n.cancel(), y() && m(), Jn.set(t, {
      at: P,
      run: B
    }), s = setTimeout(m);
  }, C = (N) => {
    var B;
    i && (clearTimeout(i), i = null);
    var {
      inputType: P
    } = N, R = null, T = N.dataTransfer || N.data || void 0;
    u !== !1 && P !== "insertText" && P !== "insertCompositionText" && (u = !1);
    var [F] = N.getTargetRanges();
    F && (R = te.toSlateRange(t, F, {
      exactMatch: !1,
      suppressThrow: !0
    }));
    var I = te.getWindow(t), k = I.getSelection();
    if (!R && k && (F = k, R = te.toSlateRange(t, k, {
      exactMatch: !1,
      suppressThrow: !0
    })), R = (B = R) !== null && B !== void 0 ? B : t.selection, !!R) {
      var L = !0;
      if (P.startsWith("delete")) {
        if (X.isExpanded(R)) {
          var [W, U] = X.edges(R), Z = be.leaf(t, W.path);
          if (Z.text.length === W.offset && U.offset === 0) {
            var M = w.next(t, {
              at: W.path,
              match: Be.isText
            });
            M && z.equals(M[1], U.path) && (R = {
              anchor: U,
              focus: U
            });
          }
        }
        var V = P.endsWith("Backward") ? "backward" : "forward", [H, q] = X.edges(R), [J, ee] = w.leaf(t, H.path), ce = {
          text: "",
          start: H.offset,
          end: q.offset
        }, ae = wr.get(t), me = ae == null ? void 0 : ae.find((Le) => z.equals(Le.path, ee)), fe = me ? [me.diff, ce] : [ce], G = yp(J.text, ...fe);
        if (G.length === 0 && (L = !1), X.isExpanded(R)) {
          if (L && z.equals(R.anchor.path, R.focus.path)) {
            var le = {
              path: R.anchor.path,
              offset: H.offset
            }, Se = w.range(t, le, le);
            return x(Se), g(R.anchor.path, {
              text: "",
              end: q.offset,
              start: H.offset
            });
          }
          return b(() => w.deleteFragment(t, {
            direction: V
          }), {
            at: R
          });
        }
      }
      switch (P) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag":
          return b(() => w.deleteFragment(t), {
            at: R
          });
        case "deleteContent":
        case "deleteContentForward": {
          var {
            anchor: De
          } = R;
          if (L && X.isCollapsed(R)) {
            var Ee = be.leaf(t, De.path);
            if (De.offset < Ee.text.length)
              return g(De.path, {
                text: "",
                start: De.offset,
                end: De.offset + 1
              });
          }
          return b(() => w.deleteForward(t), {
            at: R
          });
        }
        case "deleteContentBackward": {
          var oe, {
            anchor: se
          } = R, ge = Tu(F) ? F.isCollapsed : !!((oe = F) !== null && oe !== void 0 && oe.collapsed);
          return L && ge && X.isCollapsed(R) && se.offset > 0 ? g(se.path, {
            text: "",
            start: se.offset - 1,
            end: se.offset
          }) : b(() => w.deleteBackward(t), {
            at: R
          });
        }
        case "deleteEntireSoftLine":
          return b(() => {
            w.deleteBackward(t, {
              unit: "line"
            }), w.deleteForward(t, {
              unit: "line"
            });
          }, {
            at: R
          });
        case "deleteHardLineBackward":
          return b(() => w.deleteBackward(t, {
            unit: "block"
          }), {
            at: R
          });
        case "deleteSoftLineBackward":
          return b(() => w.deleteBackward(t, {
            unit: "line"
          }), {
            at: R
          });
        case "deleteHardLineForward":
          return b(() => w.deleteForward(t, {
            unit: "block"
          }), {
            at: R
          });
        case "deleteSoftLineForward":
          return b(() => w.deleteForward(t, {
            unit: "line"
          }), {
            at: R
          });
        case "deleteWordBackward":
          return b(() => w.deleteBackward(t, {
            unit: "word"
          }), {
            at: R
          });
        case "deleteWordForward":
          return b(() => w.deleteForward(t, {
            unit: "word"
          }), {
            at: R
          });
        case "insertLineBreak":
          return b(() => w.insertSoftBreak(t), {
            at: R
          });
        case "insertParagraph":
          return b(() => w.insertBreak(t), {
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
          if (AS(T))
            return b(() => te.insertData(t, T), {
              at: R
            });
          var he = T ?? "";
          if (rn.get(t) && (he = he.replace("\uFEFF", "")), P === "insertText" && /.*\n.*\n$/.test(he) && (he = he.slice(0, -1)), he.includes(`
`))
            return b(() => {
              var Le = he.split(`
`);
              Le.forEach((xe, Ve) => {
                xe && w.insertText(t, xe), Ve !== Le.length - 1 && w.insertSoftBreak(t);
              });
            }, {
              at: R
            });
          if (z.equals(R.anchor.path, R.focus.path)) {
            var [ye, Ne] = X.edges(R), $e = {
              start: ye.offset,
              end: Ne.offset,
              text: he
            };
            if (he && u && P === "insertCompositionText") {
              var je = u.start + u.text.search(/\S|$/), Et = $e.start + $e.text.search(/\S|$/);
              Et === je + 1 && $e.end === u.start + u.text.length ? ($e.start -= 1, u = null, A()) : u = !1;
            } else
              P === "insertText" ? u === null ? u = $e : u && X.isCollapsed(R) && u.end + u.text.length === ye.offset ? u = Zi(Zi({}, u), {}, {
                text: u.text + he
              }) : u = !1 : u = !1;
            if (L) {
              g(ye.path, $e);
              return;
            }
          }
          return b(() => w.insertText(t, he), {
            at: R
          });
        }
      }
    }
  }, y = () => !!Jn.get(t), E = () => {
    var N;
    return !!((N = wr.get(t)) !== null && N !== void 0 && N.length);
  }, D = () => y() || E(), S = () => a, x = (N) => {
    ea.set(t, N), i && (clearTimeout(i), i = null);
    var {
      selection: B
    } = t;
    if (N) {
      var P = !B || !z.equals(B.anchor.path, N.anchor.path), R = !B || !z.equals(B.anchor.path.slice(0, -1), N.anchor.path.slice(0, -1));
      (P && u || R) && (u = !1), (P || E()) && (i = setTimeout(m, OS));
    }
  }, $ = () => {
    (y() || !E()) && m();
  }, O = (N) => {
    E() || (f(!0), setTimeout(f));
  }, A = () => {
    y() || (s = setTimeout(m));
  }, j = (N) => {
    if (!(E() || y()) && N.some((P) => sf(t, P, N))) {
      var B;
      (B = mp.get(t)) === null || B === void 0 || B();
    }
  };
  return {
    flush: m,
    scheduleFlush: A,
    hasPendingDiffs: E,
    hasPendingAction: y,
    hasPendingChanges: D,
    isFlushing: S,
    handleUserSelect: x,
    handleCompositionEnd: h,
    handleCompositionStart: p,
    handleDOMBeforeInput: C,
    handleKeyDown: O,
    handleDomMutations: j,
    handleInput: $
  };
}
function FS() {
  var e = ze(!1);
  return At(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e.current;
}
var Pa = hs ? Tg : At;
function PS(e, t, r) {
  var [n] = Qt(() => new MutationObserver(t));
  Pa(() => {
    n.takeRecords();
  }), At(() => {
    if (!e.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    return n.observe(e.current, r), () => n.disconnect();
  }, [n, e, r]);
}
var RS = ["node"];
function gv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function NS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gv(Object(r), !0).forEach(function(n) {
      Wr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var IS = {
  subtree: !0,
  childList: !0,
  characterData: !0
}, TS = gr ? (e) => {
  var {
    node: t
  } = e, r = ho(e, RS);
  if (!gr)
    return null;
  var n = Ut(), a = FS(), [o] = Qt(() => BS(NS({
    editor: n
  }, r)));
  return PS(t, o.handleDomMutations, IS), af.set(n, o.scheduleFlush), a && o.flush(), o;
} : () => null, MS = ["anchor", "focus"], jS = ["anchor", "focus"], _S = (e, t) => Object.keys(e).length === Object.keys(t).length && Object.keys(e).every((r) => t.hasOwnProperty(r) && e[r] === t[r]), Ep = (e, t) => {
  var r = ho(e, MS), n = ho(t, jS);
  return e[bo] === t[bo] && _S(r, n);
}, LS = (e, t) => {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++) {
    var n = e[r], a = t[r];
    if (!X.equals(n, a) || !Ep(n, a))
      return !1;
  }
  return !0;
}, kS = (e, t) => {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++) {
    var n = e[r], a = t[r];
    if (n.anchor.offset !== a.anchor.offset || n.focus.offset !== a.focus.offset || !Ep(n, a))
      return !1;
  }
  return !0;
};
function pv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pv(Object(r), !0).forEach(function(n) {
      Wr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var VS = (e) => {
  var {
    isLast: t,
    leaf: r,
    parent: n,
    text: a
  } = e, o = Ut(), i = te.findPath(o, a), s = z.parent(i), l = !!r[gp];
  return o.isVoid(n) ? /* @__PURE__ */ Q.createElement(zl, {
    length: be.string(n).length
  }) : r.text === "" && n.children[n.children.length - 1] === a && !o.isInline(n) && w.string(o, s) === "" ? /* @__PURE__ */ Q.createElement(zl, {
    isLineBreak: !0,
    isMarkPlaceholder: l
  }) : r.text === "" ? /* @__PURE__ */ Q.createElement(zl, {
    isMarkPlaceholder: l
  }) : t && r.text.slice(-1) === `
` ? /* @__PURE__ */ Q.createElement(hv, {
    isTrailing: !0,
    text: r.text
  }) : /* @__PURE__ */ Q.createElement(hv, {
    text: r.text
  });
}, hv = (e) => {
  var {
    text: t,
    isTrailing: r = !1
  } = e, n = ze(null), a = () => "".concat(t ?? "").concat(r ? `
` : ""), [o] = Qt(a);
  return Pa(() => {
    var i = a();
    n.current && n.current.textContent !== i && (n.current.textContent = i);
  }), /* @__PURE__ */ Q.createElement(HS, {
    ref: n
  }, o);
}, HS = /* @__PURE__ */ Ry(/* @__PURE__ */ br((e, t) => /* @__PURE__ */ Q.createElement("span", {
  "data-slate-string": !0,
  ref: t
}, e.children))), zl = (e) => {
  var {
    length: t = 0,
    isLineBreak: r = !1,
    isMarkPlaceholder: n = !1
  } = e, a = {
    "data-slate-zero-width": r ? "n" : "z",
    "data-slate-length": t
  };
  return n && (a["data-slate-mark-placeholder"] = !0), /* @__PURE__ */ Q.createElement("span", zS({}, a), !gr || !r ? "\uFEFF" : null, r ? /* @__PURE__ */ Q.createElement("br", null) : null);
};
function bv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bv(Object(r), !0).forEach(function(n) {
      Wr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var WS = gr ? 300 : 0;
function qS(e, t) {
  e.current && (e.current.disconnect(), t && (e.current = null));
}
function yv(e) {
  e.current && (clearTimeout(e.current), e.current = null);
}
var KS = (e) => {
  var {
    leaf: t,
    isLast: r,
    text: n,
    parent: a,
    renderPlaceholder: o,
    renderLeaf: i = (C) => /* @__PURE__ */ Q.createElement(GS, wp({}, C))
  } = e, s = Ut(), l = ze(null), u = ze(null), [c, d] = Qt(!1), m = ze(null), h = et((C) => {
    if (qS(l, C == null), C == null) {
      var y;
      Ru.delete(s), (y = t.onPlaceholderResize) === null || y === void 0 || y.call(t, null);
    } else {
      if (Ru.set(s, C), !l.current) {
        var E = window.ResizeObserver || Xw;
        l.current = new E(() => {
          var D;
          (D = t.onPlaceholderResize) === null || D === void 0 || D.call(t, C);
        });
      }
      l.current.observe(C), u.current = C;
    }
  }, [u, t, s]), p = /* @__PURE__ */ Q.createElement(VS, {
    isLast: r,
    leaf: t,
    parent: a,
    text: n
  }), f = !!t[bo];
  if (At(() => (f ? m.current || (m.current = setTimeout(() => {
    d(!0), m.current = null;
  }, WS)) : (yv(m), d(!1)), () => yv(m)), [f, d]), f && c) {
    var g = {
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
          WebkitUserModify: Yo ? "inherit" : void 0
        },
        contentEditable: !1,
        ref: h
      }
    };
    p = /* @__PURE__ */ Q.createElement(Q.Fragment, null, o(g), p);
  }
  var b = {
    "data-slate-leaf": !0
  };
  return i({
    attributes: b,
    children: p,
    leaf: t,
    text: n
  });
}, US = /* @__PURE__ */ Q.memo(KS, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && Be.equals(t.leaf, e.leaf) && t.leaf[bo] === e.leaf[bo]), GS = (e) => {
  var {
    attributes: t,
    children: r
  } = e;
  return /* @__PURE__ */ Q.createElement("span", wp({}, t), r);
}, XS = (e) => {
  for (var {
    decorations: t,
    isLast: r,
    parent: n,
    renderPlaceholder: a,
    renderLeaf: o,
    text: i
  } = e, s = Ut(), l = ze(null), u = Be.decorations(i, t), c = te.findKey(s, i), d = [], m = 0; m < u.length; m++) {
    var h = u[m];
    d.push(/* @__PURE__ */ Q.createElement(US, {
      isLast: r && m === u.length - 1,
      key: "".concat(c.id, "-").concat(m),
      renderPlaceholder: a,
      leaf: h,
      text: i,
      parent: n,
      renderLeaf: o
    }));
  }
  var p = et((f) => {
    var g = sl.get(s);
    f ? (g == null || g.set(c, f), Da.set(i, f), pi.set(f, i)) : (g == null || g.delete(c), Da.delete(i), l.current && pi.delete(l.current)), l.current = f;
  }, [l, s, c, i]);
  return /* @__PURE__ */ Q.createElement("span", {
    "data-slate-node": "text",
    ref: p
  }, d);
}, Sp = /* @__PURE__ */ Q.memo(XS, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && kS(t.decorations, e.decorations));
function Cv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cv(Object(r), !0).forEach(function(n) {
      Wr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var YS = (e) => {
  var {
    decorations: t,
    element: r,
    renderElement: n = (C) => /* @__PURE__ */ Q.createElement(QS, _u({}, C)),
    renderPlaceholder: a,
    renderLeaf: o,
    selection: i
  } = e, s = Ut(), l = lf(), u = s.isInline(r), c = te.findKey(s, r), d = et((C) => {
    var y = sl.get(s);
    C ? (y == null || y.set(c, C), Da.set(r, C), pi.set(C, r)) : (y == null || y.delete(c), Da.delete(r));
  }, [s, c, r]), m = Op({
    decorations: t,
    node: r,
    renderElement: n,
    renderPlaceholder: a,
    renderLeaf: o,
    selection: i
  }), h = {
    "data-slate-node": "element",
    ref: d
  };
  if (u && (h["data-slate-inline"] = !0), !u && w.hasInlines(s, r)) {
    var p = be.string(r), f = Xg(p);
    f === "rtl" && (h.dir = f);
  }
  if (w.isVoid(s, r)) {
    h["data-slate-void"] = !0, !l && u && (h.contentEditable = !1);
    var g = u ? "span" : "div", [[b]] = be.texts(r);
    m = /* @__PURE__ */ Q.createElement(g, {
      "data-slate-spacer": !0,
      style: {
        height: "0",
        color: "transparent",
        outline: "none",
        position: "absolute"
      }
    }, /* @__PURE__ */ Q.createElement(Sp, {
      renderPlaceholder: a,
      decorations: [],
      isLast: !1,
      parent: r,
      text: b
    })), rf.set(b, 0), nf.set(b, r);
  }
  return n({
    attributes: h,
    children: m,
    element: r
  });
}, ZS = /* @__PURE__ */ Q.memo(YS, (e, t) => e.element === t.element && e.renderElement === t.renderElement && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && LS(e.decorations, t.decorations) && (e.selection === t.selection || !!e.selection && !!t.selection && X.equals(e.selection, t.selection))), QS = (e) => {
  var {
    attributes: t,
    children: r,
    element: n
  } = e, a = Ut(), o = a.isInline(n) ? "span" : "div";
  return /* @__PURE__ */ Q.createElement(o, _u(_u({}, t), {}, {
    style: {
      position: "relative"
    }
  }), r);
}, Dp = /* @__PURE__ */ _r(() => []), JS = () => Ct(Dp), xp = /* @__PURE__ */ _r(!1), tj = () => Ct(xp), Op = (e) => {
  for (var {
    decorations: t,
    node: r,
    renderElement: n,
    renderPlaceholder: a,
    renderLeaf: o,
    selection: i
  } = e, s = JS(), l = Ut(), u = te.findPath(l, r), c = [], d = de.isElement(r) && !l.isInline(r) && w.hasInlines(l, r), m = 0; m < r.children.length; m++) {
    var h = u.concat(m), p = r.children[m], f = te.findKey(l, p), g = w.range(l, h), b = i && X.intersection(g, i), C = s([p, h]);
    for (var y of t) {
      var E = X.intersection(y, g);
      E && C.push(E);
    }
    de.isElement(p) ? c.push(/* @__PURE__ */ Q.createElement(xp.Provider, {
      key: "provider-".concat(f.id),
      value: !!b
    }, /* @__PURE__ */ Q.createElement(ZS, {
      decorations: C,
      element: p,
      key: f.id,
      renderElement: n,
      renderPlaceholder: a,
      renderLeaf: o,
      selection: b
    }))) : c.push(/* @__PURE__ */ Q.createElement(Sp, {
      decorations: C,
      key: f.id,
      isLast: d && m === r.children.length - 1,
      parent: r,
      renderPlaceholder: a,
      renderLeaf: o,
      text: p
    })), rf.set(p, m), nf.set(p, r);
  }
  return c;
}, $p = /* @__PURE__ */ _r(!1), lf = () => Ct($p), uf = /* @__PURE__ */ _r(null), eD = () => {
  var e = Ct(uf);
  if (!e)
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  var {
    editor: t
  } = e;
  return t;
}, rj = () => {
  var e = Ct(uf);
  if (!e)
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  return e;
};
function tD() {
  var e = Ut(), t = ze(!1), r = ze(0), n = et(() => {
    if (!t.current) {
      t.current = !0;
      var a = te.getWindow(e);
      a.cancelAnimationFrame(r.current), r.current = a.requestAnimationFrame(() => {
        t.current = !1;
      });
    }
  }, [e]);
  return At(() => () => cancelAnimationFrame(r.current), []), {
    receivedUserInput: t,
    onUserInput: n
  };
}
var rD = 3, nD = {
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
}, aD = {
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
}, oD = {
  deleteWordBackward: "ctrl+shift?+backspace",
  deleteWordForward: "ctrl+shift?+delete",
  redo: ["ctrl+y", "ctrl+shift+z"]
}, Nt = (e) => {
  var t = nD[e], r = aD[e], n = oD[e], a = t && kl(t), o = r && kl(r), i = n && kl(n);
  return (s) => !!(a && a(s) || fv && o && o(s) || !fv && i && i(s));
}, Mt = {
  isBold: Nt("bold"),
  isCompose: Nt("compose"),
  isMoveBackward: Nt("moveBackward"),
  isMoveForward: Nt("moveForward"),
  isDeleteBackward: Nt("deleteBackward"),
  isDeleteForward: Nt("deleteForward"),
  isDeleteLineBackward: Nt("deleteLineBackward"),
  isDeleteLineForward: Nt("deleteLineForward"),
  isDeleteWordBackward: Nt("deleteWordBackward"),
  isDeleteWordForward: Nt("deleteWordForward"),
  isExtendBackward: Nt("extendBackward"),
  isExtendForward: Nt("extendForward"),
  isExtendLineBackward: Nt("extendLineBackward"),
  isExtendLineForward: Nt("extendLineForward"),
  isItalic: Nt("italic"),
  isMoveLineBackward: Nt("moveLineBackward"),
  isMoveLineForward: Nt("moveLineForward"),
  isMoveWordBackward: Nt("moveWordBackward"),
  isMoveWordForward: Nt("moveWordForward"),
  isRedo: Nt("redo"),
  isSoftBreak: Nt("insertSoftBreak"),
  isSplitBlock: Nt("splitBlock"),
  isTransposeCharacter: Nt("transposeCharacter"),
  isUndo: Nt("undo")
}, iD = (e, t) => {
  var r = [], n = () => {
    r = [];
  }, a = (i) => {
    if (t.current) {
      var s = i.filter((l) => sf(e, l, i));
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
}, sD = {
  subtree: !0,
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0
};
class Ap extends Py {
  constructor() {
    super(...arguments), Wr(this, "context", null), Wr(this, "manager", null), Wr(this, "mutationObserver", null);
  }
  observe() {
    var t, {
      node: r
    } = this.props;
    if (!r.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    (t = this.mutationObserver) === null || t === void 0 || t.observe(r.current, sD);
  }
  componentDidMount() {
    var {
      receivedUserInput: t
    } = this.props, r = this.context;
    this.manager = iD(r, t), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe();
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
Wr(Ap, "contextType", il);
var lD = gr ? Ap : (e) => {
  var {
    children: t
  } = e;
  return /* @__PURE__ */ Q.createElement(Q.Fragment, null, t);
}, uD = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"], cD = ["text"];
function Ev(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ev(Object(r), !0).forEach(function(n) {
      Wr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ev(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var fD = (e) => /* @__PURE__ */ Q.createElement(Q.Fragment, null, Op(e)), dD = (e) => {
  var t = et((M) => /* @__PURE__ */ Q.createElement(vD, gn({}, M)), []), {
    autoFocus: r,
    decorate: n = mD,
    onDOMBeforeInput: a,
    placeholder: o,
    readOnly: i = !1,
    renderElement: s,
    renderLeaf: l,
    renderPlaceholder: u = t,
    scrollSelectionIntoView: c = gD,
    style: d = {},
    as: m = "div",
    disableDefaultStyles: h = !1
  } = e, p = ho(e, uD), f = eD(), [g, b] = Qt(!1), C = ze(null), y = ze([]), [E, D] = Qt(), {
    onUserInput: S,
    receivedUserInput: x
  } = tD(), [, $] = Ig((M) => M + 1, 0);
  mp.set(f, $), Nu.set(f, i);
  var O = Pt(() => ({
    isDraggingInternally: !1,
    isUpdatingSelection: !1,
    latestElement: null,
    hasMarkPlaceholder: !1
  }), []);
  At(() => {
    C.current && r && C.current.focus();
  }, [r]);
  var A = ze(), j = Pt(() => Ow(() => {
    var M = A.current;
    if ((gr || !te.isComposing(f)) && (!O.isUpdatingSelection || M != null && M.isFlushing()) && !O.isDraggingInternally) {
      var V = te.findDocumentOrShadowRoot(f), {
        activeElement: H
      } = V, q = te.toDOMNode(f, f), J = V.getSelection();
      if (H === q ? (O.latestElement = H, ra.set(f, !0)) : ra.delete(f), !J)
        return re.deselect(f);
      var {
        anchorNode: ee,
        focusNode: ce
      } = J, ae = te.hasEditableTarget(f, ee) || te.isTargetInsideNonReadonlyVoid(f, ee), me = te.hasEditableTarget(f, ce) || te.isTargetInsideNonReadonlyVoid(f, ce);
      if (ae && me) {
        var fe = te.toSlateRange(f, J, {
          exactMatch: !1,
          suppressThrow: !0
        });
        fe && (!te.isComposing(f) && !(M != null && M.hasPendingChanges()) && !(M != null && M.isFlushing()) ? re.select(f, fe) : M == null || M.handleUserSelect(fe));
      }
      i && (!ae || !me) && re.deselect(f);
    }
  }, 100), [f, i, O]), N = Pt(() => Cw(j, 0), [j]);
  A.current = TS({
    node: C,
    onDOMSelectionChange: j,
    scheduleOnDOMSelectionChange: N
  }), Pa(() => {
    var M, V, H;
    C.current && (H = of(C.current)) ? (vp.set(f, H), bs.set(f, C.current), Da.set(f, C.current), pi.set(C.current, f)) : Da.delete(f);
    var {
      selection: q
    } = f, J = te.findDocumentOrShadowRoot(f), ee = J.getSelection();
    if (!(!ee || !te.isFocused(f) || (M = A.current) !== null && M !== void 0 && M.hasPendingAction())) {
      var ce = (G) => {
        var le = ee.type !== "None";
        if (!(!q && !le)) {
          var Se = ee.focusNode, De;
          if (lo && ee.rangeCount > 1) {
            var Ee = ee.getRangeAt(0), oe = ee.getRangeAt(ee.rangeCount - 1);
            Ee.startContainer === Se ? De = oe.endContainer : De = Ee.startContainer;
          } else
            De = ee.anchorNode;
          var se = bs.get(f), ge = !1;
          if (se.contains(De) && se.contains(Se) && (ge = !0), le && ge && q && !G) {
            var he = te.toSlateRange(f, ee, {
              exactMatch: !0,
              // domSelection is not necessarily a valid Slate range
              // (e.g. when clicking on contentEditable:false element)
              suppressThrow: !0
            });
            if (he && X.equals(he, q)) {
              var ye;
              if (!O.hasMarkPlaceholder || (ye = De) !== null && ye !== void 0 && (ye = ye.parentElement) !== null && ye !== void 0 && ye.hasAttribute("data-slate-mark-placeholder"))
                return;
            }
          }
          if (q && !te.hasRange(f, q)) {
            f.selection = te.toSlateRange(f, ee, {
              exactMatch: !1,
              suppressThrow: !0
            });
            return;
          }
          O.isUpdatingSelection = !0;
          var Ne = q && te.toDOMRange(f, q);
          return Ne ? (te.isComposing(f) && !gr ? ee.collapseToEnd() : X.isBackward(q) ? ee.setBaseAndExtent(Ne.endContainer, Ne.endOffset, Ne.startContainer, Ne.startOffset) : ee.setBaseAndExtent(Ne.startContainer, Ne.startOffset, Ne.endContainer, Ne.endOffset), c(f, Ne)) : ee.removeAllRanges(), Ne;
        }
      };
      ee.rangeCount <= 1 && ce();
      var ae = ((V = A.current) === null || V === void 0 ? void 0 : V.isFlushing()) === "action";
      if (!gr || !ae) {
        setTimeout(() => {
          O.isUpdatingSelection = !1;
        });
        return;
      }
      var me = null, fe = requestAnimationFrame(() => {
        if (ae) {
          var G = (le) => {
            try {
              var Se = te.toDOMNode(f, f);
              Se.focus(), ce(le);
            } catch {
            }
          };
          G(), me = setTimeout(() => {
            G(!0), O.isUpdatingSelection = !1;
          });
        }
      });
      return () => {
        cancelAnimationFrame(fe), me && clearTimeout(me);
      };
    }
  });
  var B = et((M) => {
    if (S(), !i && te.hasEditableTarget(f, M.target) && !pD(M, a)) {
      var V;
      if (A.current)
        return A.current.handleDOMBeforeInput(M);
      N.flush(), j.flush();
      var {
        selection: H
      } = f, {
        inputType: q
      } = M, J = M.dataTransfer || M.data || void 0, ee = q === "insertCompositionText" || q === "deleteCompositionText";
      if (ee && te.isComposing(f))
        return;
      var ce = !1;
      if (q === "insertText" && H && X.isCollapsed(H) && // Only use native character insertion for single characters a-z or space for now.
      // Long-press events (hold a + press 4 = ä) to choose a special character otherwise
      // causes duplicate inserts.
      M.data && M.data.length === 1 && /[a-z ]/i.test(M.data) && // Chrome has issues correctly editing the start of nodes: https://bugs.chromium.org/p/chromium/issues/detail?id=1249405
      // When there is an inline element, e.g. a link, and you select
      // right after it (the start of the next node).
      H.anchor.offset !== 0) {
        var ae, me;
        ce = !0, f.marks && (ce = !1);
        var {
          anchor: fe
        } = H, [G, le] = te.toDOMPoint(f, fe), Se = (ae = G.parentElement) === null || ae === void 0 ? void 0 : ae.closest("a"), De = te.getWindow(f);
        if (ce && Se && te.hasDOMNode(f, Se)) {
          var Ee, oe = De == null ? void 0 : De.document.createTreeWalker(Se, NodeFilter.SHOW_TEXT).lastChild();
          oe === G && ((Ee = oe.textContent) === null || Ee === void 0 ? void 0 : Ee.length) === le && (ce = !1);
        }
        if (ce && G.parentElement && (De == null || (me = De.getComputedStyle(G.parentElement)) === null || me === void 0 ? void 0 : me.whiteSpace) === "pre") {
          var se = w.above(f, {
            at: fe.path,
            match: (je) => de.isElement(je) && w.isBlock(f, je)
          });
          se && be.string(se[0]).includes("	") && (ce = !1);
        }
      }
      if (!q.startsWith("delete") || q.startsWith("deleteBy")) {
        var [ge] = M.getTargetRanges();
        if (ge) {
          var he = te.toSlateRange(f, ge, {
            exactMatch: !1,
            suppressThrow: !1
          });
          if (!H || !X.equals(H, he)) {
            ce = !1;
            var ye = !ee && f.selection && w.rangeRef(f, f.selection);
            re.select(f, he), ye && ri.set(f, ye);
          }
        }
      }
      if (ee)
        return;
      if (ce || M.preventDefault(), H && X.isExpanded(H) && q.startsWith("delete")) {
        var Ne = q.endsWith("Backward") ? "backward" : "forward";
        w.deleteFragment(f, {
          direction: Ne
        });
        return;
      }
      switch (q) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag": {
          w.deleteFragment(f);
          break;
        }
        case "deleteContent":
        case "deleteContentForward": {
          w.deleteForward(f);
          break;
        }
        case "deleteContentBackward": {
          w.deleteBackward(f);
          break;
        }
        case "deleteEntireSoftLine": {
          w.deleteBackward(f, {
            unit: "line"
          }), w.deleteForward(f, {
            unit: "line"
          });
          break;
        }
        case "deleteHardLineBackward": {
          w.deleteBackward(f, {
            unit: "block"
          });
          break;
        }
        case "deleteSoftLineBackward": {
          w.deleteBackward(f, {
            unit: "line"
          });
          break;
        }
        case "deleteHardLineForward": {
          w.deleteForward(f, {
            unit: "block"
          });
          break;
        }
        case "deleteSoftLineForward": {
          w.deleteForward(f, {
            unit: "line"
          });
          break;
        }
        case "deleteWordBackward": {
          w.deleteBackward(f, {
            unit: "word"
          });
          break;
        }
        case "deleteWordForward": {
          w.deleteForward(f, {
            unit: "word"
          });
          break;
        }
        case "insertLineBreak":
          w.insertSoftBreak(f);
          break;
        case "insertParagraph": {
          w.insertBreak(f);
          break;
        }
        case "insertFromComposition":
        case "insertFromDrop":
        case "insertFromPaste":
        case "insertFromYank":
        case "insertReplacementText":
        case "insertText": {
          q === "insertFromComposition" && te.isComposing(f) && (b(!1), ha.set(f, !1)), (J == null ? void 0 : J.constructor.name) === "DataTransfer" ? te.insertData(f, J) : typeof J == "string" && (ce ? y.current.push(() => w.insertText(f, J)) : w.insertText(f, J));
          break;
        }
      }
      var $e = (V = ri.get(f)) === null || V === void 0 ? void 0 : V.unref();
      ri.delete(f), $e && (!f.selection || !X.equals(f.selection, $e)) && re.select(f, $e);
    }
  }, [f, j, S, a, i, N]), P = et((M) => {
    M == null ? (j.cancel(), N.cancel(), bs.delete(f), Da.delete(f), C.current && Xn && C.current.removeEventListener("beforeinput", B)) : Xn && M.addEventListener("beforeinput", B), C.current = M;
  }, [j, N, f, B]);
  Pa(() => {
    var M = te.getWindow(f);
    return M.document.addEventListener("selectionchange", N), () => {
      M.document.removeEventListener("selectionchange", N);
    };
  }, [N]);
  var R = n([f, []]), T = o && f.children.length === 1 && Array.from(be.texts(f)).length === 1 && be.string(f) === "" && !g, F = et((M) => {
    if (M && T) {
      var V;
      D((V = M.getBoundingClientRect()) === null || V === void 0 ? void 0 : V.height);
    } else
      D(void 0);
  }, [T]);
  if (T) {
    var I = w.start(f, []);
    R.push({
      [bo]: !0,
      placeholder: o,
      onPlaceholderResize: F,
      anchor: I,
      focus: I
    });
  }
  var {
    marks: k
  } = f;
  if (O.hasMarkPlaceholder = !1, f.selection && X.isCollapsed(f.selection) && k) {
    var {
      anchor: L
    } = f.selection, W = be.leaf(f, L.path), U = ho(W, cD);
    if (!Be.equals(W, k, {
      loose: !0
    })) {
      O.hasMarkPlaceholder = !0;
      var Z = Object.fromEntries(Object.keys(U).map((M) => [M, null]));
      R.push(gn(gn(gn({
        [gp]: !0
      }, Z), k), {}, {
        anchor: L,
        focus: L
      }));
    }
  }
  return At(() => {
    setTimeout(() => {
      var {
        selection: M
      } = f;
      if (M) {
        var {
          anchor: V
        } = M, H = be.leaf(f, V.path);
        if (k && !Be.equals(H, k, {
          loose: !0
        })) {
          rn.set(f, k);
          return;
        }
      }
      rn.delete(f);
    });
  }), /* @__PURE__ */ Q.createElement($p.Provider, {
    value: i
  }, /* @__PURE__ */ Q.createElement(Dp.Provider, {
    value: n
  }, /* @__PURE__ */ Q.createElement(lD, {
    node: C,
    receivedUserInput: x
  }, /* @__PURE__ */ Q.createElement(m, gn(gn({
    role: i ? void 0 : "textbox",
    "aria-multiline": i ? void 0 : !0
  }, p), {}, {
    // COMPAT: Certain browsers don't support the `beforeinput` event, so we'd
    // have to use hacks to make these replacement-based features work.
    // For SSR situations HAS_BEFORE_INPUT_SUPPORT is false and results in prop
    // mismatch warning app moves to browser. Pass-through consumer props when
    // not CAN_USE_DOM (SSR) and default to falsy value
    spellCheck: Xn || !hs ? p.spellCheck : !1,
    autoCorrect: Xn || !hs ? p.autoCorrect : "false",
    autoCapitalize: Xn || !hs ? p.autoCapitalize : "false",
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
    style: gn(gn({}, h ? {} : gn({
      // Allow positioning relative to the editable element.
      position: "relative",
      // Preserve adjacent whitespace and new lines.
      whiteSpace: "pre-wrap",
      // Allow words to break if they are too long.
      wordWrap: "break-word"
    }, E ? {
      minHeight: E
    } : {})), d),
    onBeforeInput: et((M) => {
      if (!Xn && !i && !mr(M, p.onBeforeInput) && te.hasSelectableTarget(f, M.target) && (M.preventDefault(), !te.isComposing(f))) {
        var V = M.data;
        w.insertText(f, V);
      }
    }, [p.onBeforeInput, f, i]),
    onInput: et((M) => {
      if (!mr(M, p.onInput)) {
        if (A.current) {
          A.current.handleInput();
          return;
        }
        for (var V of y.current)
          V();
        y.current = [];
      }
    }, [p.onInput]),
    onBlur: et((M) => {
      if (!(i || O.isUpdatingSelection || !te.hasSelectableTarget(f, M.target) || mr(M, p.onBlur))) {
        var V = te.findDocumentOrShadowRoot(f);
        if (O.latestElement !== V.activeElement) {
          var {
            relatedTarget: H
          } = M, q = te.toDOMNode(f, f);
          if (H !== q && !(Hr(H) && H.hasAttribute("data-slate-spacer"))) {
            if (H != null && oa(H) && te.hasDOMNode(f, H)) {
              var J = te.toSlateNode(f, H);
              if (de.isElement(J) && !f.isVoid(J))
                return;
            }
            if (Yo) {
              var ee = V.getSelection();
              ee == null || ee.removeAllRanges();
            }
            ra.delete(f);
          }
        }
      }
    }, [i, O.isUpdatingSelection, O.latestElement, f, p.onBlur]),
    onClick: et((M) => {
      if (te.hasTarget(f, M.target) && !mr(M, p.onClick) && oa(M.target)) {
        var V = te.toSlateNode(f, M.target), H = te.findPath(f, V);
        if (!w.hasPath(f, H) || be.get(f, H) !== V)
          return;
        if (M.detail === rD && H.length >= 1) {
          var q = H;
          if (!(de.isElement(V) && w.isBlock(f, V))) {
            var J, ee = w.above(f, {
              match: (Se) => de.isElement(Se) && w.isBlock(f, Se),
              at: H
            });
            q = (J = ee == null ? void 0 : ee[1]) !== null && J !== void 0 ? J : H.slice(0, 1);
          }
          var ce = w.range(f, q);
          re.select(f, ce);
          return;
        }
        if (i)
          return;
        var ae = w.start(f, H), me = w.end(f, H), fe = w.void(f, {
          at: ae
        }), G = w.void(f, {
          at: me
        });
        if (fe && G && z.equals(fe[1], G[1])) {
          var le = w.range(f, ae);
          re.select(f, le);
        }
      }
    }, [f, p.onClick, i]),
    onCompositionEnd: et((M) => {
      if (te.hasSelectableTarget(f, M.target)) {
        var V;
        if (te.isComposing(f) && Promise.resolve().then(() => {
          b(!1), ha.set(f, !1);
        }), (V = A.current) === null || V === void 0 || V.handleCompositionEnd(M), mr(M, p.onCompositionEnd) || gr)
          return;
        if (!Yo && !iS && !rS && !lS && !sS && M.data) {
          var H = rn.get(f);
          rn.delete(f), H !== void 0 && (Rn.set(f, f.marks), f.marks = H), w.insertText(f, M.data);
          var q = Rn.get(f);
          Rn.delete(f), q !== void 0 && (f.marks = q);
        }
      }
    }, [p.onCompositionEnd, f]),
    onCompositionUpdate: et((M) => {
      te.hasSelectableTarget(f, M.target) && !mr(M, p.onCompositionUpdate) && (te.isComposing(f) || (b(!0), ha.set(f, !0)));
    }, [p.onCompositionUpdate, f]),
    onCompositionStart: et((M) => {
      if (te.hasSelectableTarget(f, M.target)) {
        var V;
        if ((V = A.current) === null || V === void 0 || V.handleCompositionStart(M), mr(M, p.onCompositionStart) || gr)
          return;
        b(!0);
        var {
          selection: H
        } = f;
        if (H && X.isExpanded(H)) {
          w.deleteFragment(f);
          return;
        }
      }
    }, [p.onCompositionStart, f]),
    onCopy: et((M) => {
      te.hasSelectableTarget(f, M.target) && !mr(M, p.onCopy) && !wv(M) && (M.preventDefault(), te.setFragmentData(f, M.clipboardData, "copy"));
    }, [p.onCopy, f]),
    onCut: et((M) => {
      if (!i && te.hasSelectableTarget(f, M.target) && !mr(M, p.onCut) && !wv(M)) {
        M.preventDefault(), te.setFragmentData(f, M.clipboardData, "cut");
        var {
          selection: V
        } = f;
        if (V)
          if (X.isExpanded(V))
            w.deleteFragment(f);
          else {
            var H = be.parent(f, V.anchor.path);
            w.isVoid(f, H) && re.delete(f);
          }
      }
    }, [i, f, p.onCut]),
    onDragOver: et((M) => {
      if (te.hasTarget(f, M.target) && !mr(M, p.onDragOver)) {
        var V = te.toSlateNode(f, M.target);
        de.isElement(V) && w.isVoid(f, V) && M.preventDefault();
      }
    }, [p.onDragOver, f]),
    onDragStart: et((M) => {
      if (!i && te.hasTarget(f, M.target) && !mr(M, p.onDragStart)) {
        var V = te.toSlateNode(f, M.target), H = te.findPath(f, V), q = de.isElement(V) && w.isVoid(f, V) || w.void(f, {
          at: H,
          voids: !0
        });
        if (q) {
          var J = w.range(f, H);
          re.select(f, J);
        }
        O.isDraggingInternally = !0, te.setFragmentData(f, M.dataTransfer, "drag");
      }
    }, [i, f, p.onDragStart, O]),
    onDrop: et((M) => {
      if (!i && te.hasTarget(f, M.target) && !mr(M, p.onDrop)) {
        M.preventDefault();
        var V = f.selection, H = te.findEventRange(f, M), q = M.dataTransfer;
        re.select(f, H), O.isDraggingInternally && V && !X.equals(V, H) && !w.void(f, {
          at: H,
          voids: !0
        }) && re.delete(f, {
          at: V
        }), te.insertData(f, q), te.isFocused(f) || te.focus(f);
      }
      O.isDraggingInternally = !1;
    }, [i, f, p.onDrop, O]),
    onDragEnd: et((M) => {
      !i && O.isDraggingInternally && p.onDragEnd && te.hasTarget(f, M.target) && p.onDragEnd(M), O.isDraggingInternally = !1;
    }, [i, O, p, f]),
    onFocus: et((M) => {
      if (!i && !O.isUpdatingSelection && te.hasEditableTarget(f, M.target) && !mr(M, p.onFocus)) {
        var V = te.toDOMNode(f, f), H = te.findDocumentOrShadowRoot(f);
        if (O.latestElement = H.activeElement, lo && M.target !== V) {
          V.focus();
          return;
        }
        ra.set(f, !0);
      }
    }, [i, O, f, p.onFocus]),
    onKeyDown: et((M) => {
      if (!i && te.hasEditableTarget(f, M.target)) {
        var V;
        (V = A.current) === null || V === void 0 || V.handleKeyDown(M);
        var {
          nativeEvent: H
        } = M;
        if (te.isComposing(f) && H.isComposing === !1 && (ha.set(f, !1), b(!1)), mr(M, p.onKeyDown) || te.isComposing(f))
          return;
        var {
          selection: q
        } = f, J = f.children[q !== null ? q.focus.path[0] : 0], ee = Xg(be.string(J)) === "rtl";
        if (Mt.isRedo(H)) {
          M.preventDefault();
          var ce = f;
          typeof ce.redo == "function" && ce.redo();
          return;
        }
        if (Mt.isUndo(H)) {
          M.preventDefault();
          var ae = f;
          typeof ae.undo == "function" && ae.undo();
          return;
        }
        if (Mt.isMoveLineBackward(H)) {
          M.preventDefault(), re.move(f, {
            unit: "line",
            reverse: !0
          });
          return;
        }
        if (Mt.isMoveLineForward(H)) {
          M.preventDefault(), re.move(f, {
            unit: "line"
          });
          return;
        }
        if (Mt.isExtendLineBackward(H)) {
          M.preventDefault(), re.move(f, {
            unit: "line",
            edge: "focus",
            reverse: !0
          });
          return;
        }
        if (Mt.isExtendLineForward(H)) {
          M.preventDefault(), re.move(f, {
            unit: "line",
            edge: "focus"
          });
          return;
        }
        if (Mt.isMoveBackward(H)) {
          M.preventDefault(), q && X.isCollapsed(q) ? re.move(f, {
            reverse: !ee
          }) : re.collapse(f, {
            edge: ee ? "end" : "start"
          });
          return;
        }
        if (Mt.isMoveForward(H)) {
          M.preventDefault(), q && X.isCollapsed(q) ? re.move(f, {
            reverse: ee
          }) : re.collapse(f, {
            edge: ee ? "start" : "end"
          });
          return;
        }
        if (Mt.isMoveWordBackward(H)) {
          M.preventDefault(), q && X.isExpanded(q) && re.collapse(f, {
            edge: "focus"
          }), re.move(f, {
            unit: "word",
            reverse: !ee
          });
          return;
        }
        if (Mt.isMoveWordForward(H)) {
          M.preventDefault(), q && X.isExpanded(q) && re.collapse(f, {
            edge: "focus"
          }), re.move(f, {
            unit: "word",
            reverse: ee
          });
          return;
        }
        if (Xn) {
          if ((dp || Yo) && q && (Mt.isDeleteBackward(H) || Mt.isDeleteForward(H)) && X.isCollapsed(q)) {
            var me = be.parent(f, q.anchor.path);
            if (de.isElement(me) && w.isVoid(f, me) && (w.isInline(f, me) || w.isBlock(f, me))) {
              M.preventDefault(), w.deleteBackward(f, {
                unit: "block"
              });
              return;
            }
          }
        } else {
          if (Mt.isBold(H) || Mt.isItalic(H) || Mt.isTransposeCharacter(H)) {
            M.preventDefault();
            return;
          }
          if (Mt.isSoftBreak(H)) {
            M.preventDefault(), w.insertSoftBreak(f);
            return;
          }
          if (Mt.isSplitBlock(H)) {
            M.preventDefault(), w.insertBreak(f);
            return;
          }
          if (Mt.isDeleteBackward(H)) {
            M.preventDefault(), q && X.isExpanded(q) ? w.deleteFragment(f, {
              direction: "backward"
            }) : w.deleteBackward(f);
            return;
          }
          if (Mt.isDeleteForward(H)) {
            M.preventDefault(), q && X.isExpanded(q) ? w.deleteFragment(f, {
              direction: "forward"
            }) : w.deleteForward(f);
            return;
          }
          if (Mt.isDeleteLineBackward(H)) {
            M.preventDefault(), q && X.isExpanded(q) ? w.deleteFragment(f, {
              direction: "backward"
            }) : w.deleteBackward(f, {
              unit: "line"
            });
            return;
          }
          if (Mt.isDeleteLineForward(H)) {
            M.preventDefault(), q && X.isExpanded(q) ? w.deleteFragment(f, {
              direction: "forward"
            }) : w.deleteForward(f, {
              unit: "line"
            });
            return;
          }
          if (Mt.isDeleteWordBackward(H)) {
            M.preventDefault(), q && X.isExpanded(q) ? w.deleteFragment(f, {
              direction: "backward"
            }) : w.deleteBackward(f, {
              unit: "word"
            });
            return;
          }
          if (Mt.isDeleteWordForward(H)) {
            M.preventDefault(), q && X.isExpanded(q) ? w.deleteFragment(f, {
              direction: "forward"
            }) : w.deleteForward(f, {
              unit: "word"
            });
            return;
          }
        }
      }
    }, [i, f, p.onKeyDown]),
    onPaste: et((M) => {
      !i && te.hasEditableTarget(f, M.target) && !mr(M, p.onPaste) && (!Xn || fS(M.nativeEvent) || Yo) && (M.preventDefault(), te.insertData(f, M.clipboardData));
    }, [i, f, p.onPaste])
  }), /* @__PURE__ */ Q.createElement(fD, {
    decorations: R,
    node: f,
    renderElement: s,
    renderPlaceholder: u,
    renderLeaf: l,
    selection: f.selection
  })))));
}, vD = (e) => {
  var {
    attributes: t,
    children: r
  } = e;
  return (
    // COMPAT: Artificially add a line-break to the end on the placeholder element
    // to prevent Android IMEs to pick up its content in autocorrect and to auto-capitalize the first letter
    /* @__PURE__ */ Q.createElement("span", gn({}, t), r, gr && /* @__PURE__ */ Q.createElement("br", null))
  );
}, mD = () => [], gD = (e, t) => {
  if (t.getBoundingClientRect && (!e.selection || e.selection && X.isCollapsed(e.selection))) {
    var r = t.startContainer.parentElement;
    r.getBoundingClientRect = t.getBoundingClientRect.bind(t), ep(r, {
      scrollMode: "if-needed"
    }), delete r.getBoundingClientRect;
  }
}, mr = (e, t) => {
  if (!t)
    return !1;
  var r = t(e);
  return r ?? (e.isDefaultPrevented() || e.isPropagationStopped());
}, wv = (e) => oa(e.target) && (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement), pD = (e, t) => {
  if (!t)
    return !1;
  var r = t(e);
  return r ?? e.defaultPrevented;
}, Bp = /* @__PURE__ */ _r(!1), nj = () => Ct(Bp);
function hD(e) {
  return e instanceof Error;
}
var Fp = /* @__PURE__ */ _r({}), bD = (e, t) => e === t;
function Hn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : bD, [, r] = Ig((c) => c + 1, 0), n = Ct(Fp);
  if (!n)
    throw new Error("The `useSlateSelector` hook must be used inside the <Slate> component's context.");
  var {
    getSlate: a,
    addEventListener: o
  } = n, i = ze(), s = ze(() => null), l = ze(null), u;
  try {
    e !== s.current || i.current ? u = e(a()) : u = l.current;
  } catch (c) {
    throw i.current && hD(c) && (c.message += `
The error may be correlated with this previous error:
`.concat(i.current.stack, `

`)), c;
  }
  return Pa(() => {
    s.current = e, l.current = u, i.current = void 0;
  }), Pa(
    () => {
      function c() {
        try {
          var m = s.current(a());
          if (t(m, l.current))
            return;
          l.current = m;
        } catch (h) {
          h instanceof Error ? i.current = h : i.current = new Error(String(h));
        }
        r();
      }
      var d = o(c);
      return c(), () => d();
    },
    // don't rerender on equalityFn change since we want to be able to define it inline
    [o, a]
  ), u;
}
function yD(e) {
  var t = ze([]).current, r = ze({
    editor: e
  }).current, n = et((o) => {
    r.editor = o, t.forEach((i) => i(o));
  }, [t, r]), a = Pt(() => ({
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
var CD = ["editor", "children", "onChange", "onSelectionChange", "onValueChange", "initialValue"], ED = (e) => {
  var {
    editor: t,
    children: r,
    onChange: n,
    onSelectionChange: a,
    onValueChange: o,
    initialValue: i
  } = e, s = ho(e, CD), [l, u] = Q.useState(() => {
    if (!be.isNodeList(i))
      throw new Error("[Slate] initialValue is invalid! Expected a list of elements but got: ".concat(er.stringify(i)));
    if (!w.isEditor(t))
      throw new Error("[Slate] editor is invalid! You passed: ".concat(er.stringify(t)));
    return t.children = i, Object.assign(t, s), {
      v: 0,
      editor: t
    };
  }), {
    selectorContext: c,
    onChange: d
  } = yD(t), m = et((f) => {
    var g;
    switch (n && n(t.children), f == null || (g = f.operation) === null || g === void 0 ? void 0 : g.type) {
      case "set_selection":
        a == null || a(t.selection);
        break;
      default:
        o == null || o(t.children);
    }
    u((b) => ({
      v: b.v + 1,
      editor: t
    })), d(t);
  }, [t, d, n, a, o]);
  At(() => (Iu.set(t, m), () => {
    Iu.set(t, () => {
    });
  }), [t, m]);
  var [h, p] = Qt(te.isFocused(t));
  return At(() => {
    p(te.isFocused(t));
  }, [t]), Pa(() => {
    var f = () => p(te.isFocused(t));
    return fp >= 17 ? (document.addEventListener("focusin", f), document.addEventListener("focusout", f), () => {
      document.removeEventListener("focusin", f), document.removeEventListener("focusout", f);
    }) : (document.addEventListener("focus", f, !0), document.addEventListener("blur", f, !0), () => {
      document.removeEventListener("focus", f, !0), document.removeEventListener("blur", f, !0);
    });
  }, []), /* @__PURE__ */ Q.createElement(Fp.Provider, {
    value: c
  }, /* @__PURE__ */ Q.createElement(uf.Provider, {
    value: l
  }, /* @__PURE__ */ Q.createElement(il.Provider, {
    value: l.editor
  }, /* @__PURE__ */ Q.createElement(Bp.Provider, {
    value: h
  }, r))));
}, aj = () => {
  var e = Ct(il);
  if (!e)
    throw new Error("The `useEditor` hook must be used inside the <Slate> component's context.");
  return e;
}, oj = () => Hn((e) => e.selection, wD), wD = (e, t) => !e && !t ? !0 : !e || !t ? !1 : X.equals(e, t), Sv = (e, t) => {
  var r = (t.top + t.bottom) / 2;
  return e.top <= r && e.bottom >= r;
}, Dv = (e, t, r) => {
  var n = te.toDOMRange(e, t).getBoundingClientRect(), a = te.toDOMRange(e, r).getBoundingClientRect();
  return Sv(n, a) && Sv(a, n);
}, SD = (e, t) => {
  var r = w.range(e, X.end(t)), n = Array.from(w.positions(e, {
    at: t
  })), a = 0, o = n.length, i = Math.floor(o / 2);
  if (Dv(e, w.range(e, n[a]), r))
    return w.range(e, n[a], r);
  if (n.length < 2)
    return w.range(e, n[n.length - 1], r);
  for (; i !== n.length && i !== a; )
    Dv(e, w.range(e, n[i]), r) ? o = i : a = i, i = Math.floor((a + o) / 2);
  return w.range(e, n[o], r);
};
function xv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ov(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xv(Object(r), !0).forEach(function(n) {
      Wr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var DD = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x-slate-fragment", n = t, {
    apply: a,
    onChange: o,
    deleteBackward: i,
    addMark: s,
    removeMark: l
  } = n;
  return sl.set(n, /* @__PURE__ */ new WeakMap()), n.addMark = (u, c) => {
    var d, m;
    (d = af.get(n)) === null || d === void 0 || d(), !rn.get(n) && (m = wr.get(n)) !== null && m !== void 0 && m.length && rn.set(n, null), Rn.delete(n), s(u, c);
  }, n.removeMark = (u) => {
    var c;
    !rn.get(n) && (c = wr.get(n)) !== null && c !== void 0 && c.length && rn.set(n, null), Rn.delete(n), l(u);
  }, n.deleteBackward = (u) => {
    if (u !== "line")
      return i(u);
    if (n.selection && X.isCollapsed(n.selection)) {
      var c = w.above(n, {
        match: (p) => de.isElement(p) && w.isBlock(n, p),
        at: n.selection
      });
      if (c) {
        var [, d] = c, m = w.range(n, d, n.selection.anchor), h = SD(n, m);
        X.isCollapsed(h) || re.delete(n, {
          at: h
        });
      }
    }
  }, n.apply = (u) => {
    var c = [], d = [], m = wr.get(n);
    if (m != null && m.length) {
      var h = m.map((P) => DS(P, u)).filter(Boolean);
      wr.set(n, h);
    }
    var p = ea.get(n);
    p && ea.set(n, vv(n, p, u));
    var f = Jn.get(n);
    if (f != null && f.at) {
      var g = Ge.isPoint(f == null ? void 0 : f.at) ? ju(n, f.at, u) : vv(n, f.at, u);
      Jn.set(n, g ? Ov(Ov({}, f), {}, {
        at: g
      }) : null);
    }
    switch (u.type) {
      case "insert_text":
      case "remove_text":
      case "set_node":
      case "split_node": {
        c.push(...Ka(n, u.path));
        break;
      }
      case "set_selection": {
        var b;
        (b = ri.get(n)) === null || b === void 0 || b.unref(), ri.delete(n);
        break;
      }
      case "insert_node":
      case "remove_node": {
        c.push(...Ka(n, z.parent(u.path)));
        break;
      }
      case "merge_node": {
        var C = z.previous(u.path);
        c.push(...Ka(n, C));
        break;
      }
      case "move_node": {
        var y = z.common(z.parent(u.path), z.parent(u.newPath));
        c.push(...Ka(n, y));
        var E;
        z.isBefore(u.path, u.newPath) ? (c.push(...Ka(n, z.parent(u.path))), E = u.newPath) : (c.push(...Ka(n, z.parent(u.newPath))), E = u.path);
        var D = be.get(t, z.parent(E)), S = te.findKey(n, D), x = w.pathRef(n, z.parent(E));
        d.push([x, S]);
        break;
      }
    }
    a(u);
    for (var [$, O] of c) {
      var [A] = w.node(n, $);
      Ts.set(A, O);
    }
    for (var [j, N] of d)
      if (j.current) {
        var [B] = w.node(n, j.current);
        Ts.set(B, N);
      }
  }, n.setFragmentData = (u) => {
    var {
      selection: c
    } = n;
    if (c) {
      var [d, m] = X.edges(c), h = w.void(n, {
        at: d.path
      }), p = w.void(n, {
        at: m.path
      });
      if (!(X.isCollapsed(c) && !h)) {
        var f = te.toDOMRange(n, c), g = f.cloneContents(), b = g.childNodes[0];
        if (g.childNodes.forEach((A) => {
          A.textContent && A.textContent.trim() !== "" && (b = A);
        }), p) {
          var [C] = p, y = f.cloneRange(), E = te.toDOMNode(n, C);
          y.setEndAfter(E), g = y.cloneContents();
        }
        if (h && (b = g.querySelector("[data-slate-spacer]")), Array.from(g.querySelectorAll("[data-slate-zero-width]")).forEach((A) => {
          var j = A.getAttribute("data-slate-zero-width") === "n";
          A.textContent = j ? `
` : "";
        }), pp(b)) {
          var D = b.ownerDocument.createElement("span");
          D.style.whiteSpace = "pre", D.appendChild(b), g.appendChild(D), b = D;
        }
        var S = n.getFragment(), x = JSON.stringify(S), $ = window.btoa(encodeURIComponent(x));
        b.setAttribute("data-slate-fragment", $), u.setData("application/".concat(r), $);
        var O = g.ownerDocument.createElement("div");
        return O.appendChild(g), O.setAttribute("hidden", "true"), g.ownerDocument.body.appendChild(O), u.setData("text/html", O.innerHTML), u.setData("text/plain", bp(O)), g.ownerDocument.body.removeChild(O), u;
      }
    }
  }, n.insertData = (u) => {
    n.insertFragmentData(u) || n.insertTextData(u);
  }, n.insertFragmentData = (u) => {
    var c = u.getData("application/".concat(r)) || pS(u);
    if (c) {
      var d = decodeURIComponent(window.atob(c)), m = JSON.parse(d);
      return n.insertFragment(m), !0;
    }
    return !1;
  }, n.insertTextData = (u) => {
    var c = u.getData("text/plain");
    if (c) {
      var d = c.split(/\r\n|\r|\n/), m = !1;
      for (var h of d)
        m && re.splitNodes(n, {
          always: !0
        }), n.insertText(h), m = !0;
      return !0;
    }
    return !1;
  }, n.onChange = (u) => {
    var c = fp < 18 ? Mg.unstable_batchedUpdates : (d) => d();
    c(() => {
      var d = Iu.get(n);
      d && d(u), o(u);
    });
  }, n;
}, Ka = (e, t) => {
  var r = [];
  for (var [n, a] of w.levels(e, {
    at: t
  })) {
    var o = te.findKey(e, n);
    r.push([a, o]);
  }
  return r;
}, Lu = { exports: {} }, Vo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $v;
function xD() {
  if ($v)
    return Vo;
  $v = 1;
  var e = Q, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, l, u) {
    var c, d = {}, m = null, h = null;
    u !== void 0 && (m = "" + u), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (c in l)
      n.call(l, c) && !o.hasOwnProperty(c) && (d[c] = l[c]);
    if (s && s.defaultProps)
      for (c in l = s.defaultProps, l)
        d[c] === void 0 && (d[c] = l[c]);
    return { $$typeof: t, type: s, key: m, ref: h, props: d, _owner: a.current };
  }
  return Vo.Fragment = r, Vo.jsx = i, Vo.jsxs = i, Vo;
}
var Ho = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Av;
function OD() {
  return Av || (Av = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Q, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), p = Symbol.iterator, f = "@@iterator";
    function g(_) {
      if (_ === null || typeof _ != "object")
        return null;
      var ie = p && _[p] || _[f];
      return typeof ie == "function" ? ie : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(_) {
      {
        for (var ie = arguments.length, pe = new Array(ie > 1 ? ie - 1 : 0), Me = 1; Me < ie; Me++)
          pe[Me - 1] = arguments[Me];
        y("error", _, pe);
      }
    }
    function y(_, ie, pe) {
      {
        var Me = b.ReactDebugCurrentFrame, Xe = Me.getStackAddendum();
        Xe !== "" && (ie += "%s", pe = pe.concat([Xe]));
        var it = pe.map(function(Ue) {
          return String(Ue);
        });
        it.unshift("Warning: " + ie), Function.prototype.apply.call(console[_], console, it);
      }
    }
    var E = !1, D = !1, S = !1, x = !1, $ = !1, O;
    O = Symbol.for("react.module.reference");
    function A(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === n || _ === o || $ || _ === a || _ === u || _ === c || x || _ === h || E || D || S || typeof _ == "object" && _ !== null && (_.$$typeof === m || _.$$typeof === d || _.$$typeof === i || _.$$typeof === s || _.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === O || _.getModuleId !== void 0));
    }
    function j(_, ie, pe) {
      var Me = _.displayName;
      if (Me)
        return Me;
      var Xe = ie.displayName || ie.name || "";
      return Xe !== "" ? pe + "(" + Xe + ")" : pe;
    }
    function N(_) {
      return _.displayName || "Context";
    }
    function B(_) {
      if (_ == null)
        return null;
      if (typeof _.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof _ == "function")
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
        case u:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case s:
            var ie = _;
            return N(ie) + ".Consumer";
          case i:
            var pe = _;
            return N(pe._context) + ".Provider";
          case l:
            return j(_, _.render, "ForwardRef");
          case d:
            var Me = _.displayName || null;
            return Me !== null ? Me : B(_.type) || "Memo";
          case m: {
            var Xe = _, it = Xe._payload, Ue = Xe._init;
            try {
              return B(Ue(it));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, R = 0, T, F, I, k, L, W, U;
    function Z() {
    }
    Z.__reactDisabledLog = !0;
    function M() {
      {
        if (R === 0) {
          T = console.log, F = console.info, I = console.warn, k = console.error, L = console.group, W = console.groupCollapsed, U = console.groupEnd;
          var _ = {
            configurable: !0,
            enumerable: !0,
            value: Z,
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
    function V() {
      {
        if (R--, R === 0) {
          var _ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, _, {
              value: T
            }),
            info: P({}, _, {
              value: F
            }),
            warn: P({}, _, {
              value: I
            }),
            error: P({}, _, {
              value: k
            }),
            group: P({}, _, {
              value: L
            }),
            groupCollapsed: P({}, _, {
              value: W
            }),
            groupEnd: P({}, _, {
              value: U
            })
          });
        }
        R < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = b.ReactCurrentDispatcher, q;
    function J(_, ie, pe) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (Xe) {
            var Me = Xe.stack.trim().match(/\n( *(at )?)/);
            q = Me && Me[1] || "";
          }
        return `
` + q + _;
      }
    }
    var ee = !1, ce;
    {
      var ae = typeof WeakMap == "function" ? WeakMap : Map;
      ce = new ae();
    }
    function me(_, ie) {
      if (!_ || ee)
        return "";
      {
        var pe = ce.get(_);
        if (pe !== void 0)
          return pe;
      }
      var Me;
      ee = !0;
      var Xe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var it;
      it = H.current, H.current = null, M();
      try {
        if (ie) {
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
            } catch (qt) {
              Me = qt;
            }
            Reflect.construct(_, [], Ue);
          } else {
            try {
              Ue.call();
            } catch (qt) {
              Me = qt;
            }
            _.call(Ue.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (qt) {
            Me = qt;
          }
          _();
        }
      } catch (qt) {
        if (qt && Me && typeof qt.stack == "string") {
          for (var We = qt.stack.split(`
`), Ot = Me.stack.split(`
`), xt = We.length - 1, Ye = Ot.length - 1; xt >= 1 && Ye >= 0 && We[xt] !== Ot[Ye]; )
            Ye--;
          for (; xt >= 1 && Ye >= 0; xt--, Ye--)
            if (We[xt] !== Ot[Ye]) {
              if (xt !== 1 || Ye !== 1)
                do
                  if (xt--, Ye--, Ye < 0 || We[xt] !== Ot[Ye]) {
                    var Yt = `
` + We[xt].replace(" at new ", " at ");
                    return _.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", _.displayName)), typeof _ == "function" && ce.set(_, Yt), Yt;
                  }
                while (xt >= 1 && Ye >= 0);
              break;
            }
        }
      } finally {
        ee = !1, H.current = it, V(), Error.prepareStackTrace = Xe;
      }
      var Lr = _ ? _.displayName || _.name : "", dn = Lr ? J(Lr) : "";
      return typeof _ == "function" && ce.set(_, dn), dn;
    }
    function fe(_, ie, pe) {
      return me(_, !1);
    }
    function G(_) {
      var ie = _.prototype;
      return !!(ie && ie.isReactComponent);
    }
    function le(_, ie, pe) {
      if (_ == null)
        return "";
      if (typeof _ == "function")
        return me(_, G(_));
      if (typeof _ == "string")
        return J(_);
      switch (_) {
        case u:
          return J("Suspense");
        case c:
          return J("SuspenseList");
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case l:
            return fe(_.render);
          case d:
            return le(_.type, ie, pe);
          case m: {
            var Me = _, Xe = Me._payload, it = Me._init;
            try {
              return le(it(Xe), ie, pe);
            } catch {
            }
          }
        }
      return "";
    }
    var Se = Object.prototype.hasOwnProperty, De = {}, Ee = b.ReactDebugCurrentFrame;
    function oe(_) {
      if (_) {
        var ie = _._owner, pe = le(_.type, _._source, ie ? ie.type : null);
        Ee.setExtraStackFrame(pe);
      } else
        Ee.setExtraStackFrame(null);
    }
    function se(_, ie, pe, Me, Xe) {
      {
        var it = Function.call.bind(Se);
        for (var Ue in _)
          if (it(_, Ue)) {
            var We = void 0;
            try {
              if (typeof _[Ue] != "function") {
                var Ot = Error((Me || "React class") + ": " + pe + " type `" + Ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[Ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ot.name = "Invariant Violation", Ot;
              }
              We = _[Ue](ie, Ue, Me, pe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (xt) {
              We = xt;
            }
            We && !(We instanceof Error) && (oe(Xe), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Me || "React class", pe, Ue, typeof We), oe(null)), We instanceof Error && !(We.message in De) && (De[We.message] = !0, oe(Xe), C("Failed %s type: %s", pe, We.message), oe(null));
          }
      }
    }
    var ge = Array.isArray;
    function he(_) {
      return ge(_);
    }
    function ye(_) {
      {
        var ie = typeof Symbol == "function" && Symbol.toStringTag, pe = ie && _[Symbol.toStringTag] || _.constructor.name || "Object";
        return pe;
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
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ye(_)), $e(_);
    }
    var Et = b.ReactCurrentOwner, Le = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xe, Ve, He;
    He = {};
    function zt(_) {
      if (Se.call(_, "ref")) {
        var ie = Object.getOwnPropertyDescriptor(_, "ref").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return _.ref !== void 0;
    }
    function rt(_) {
      if (Se.call(_, "key")) {
        var ie = Object.getOwnPropertyDescriptor(_, "key").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return _.key !== void 0;
    }
    function Bt(_, ie) {
      if (typeof _.ref == "string" && Et.current && ie && Et.current.stateNode !== ie) {
        var pe = B(Et.current.type);
        He[pe] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(Et.current.type), _.ref), He[pe] = !0);
      }
    }
    function ht(_, ie) {
      {
        var pe = function() {
          xe || (xe = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        pe.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: pe,
          configurable: !0
        });
      }
    }
    function Qe(_, ie) {
      {
        var pe = function() {
          Ve || (Ve = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        pe.isReactWarning = !0, Object.defineProperty(_, "ref", {
          get: pe,
          configurable: !0
        });
      }
    }
    var st = function(_, ie, pe, Me, Xe, it, Ue) {
      var We = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: _,
        key: ie,
        ref: pe,
        props: Ue,
        // Record the component responsible for creating this element.
        _owner: it
      };
      return We._store = {}, Object.defineProperty(We._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(We, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Me
      }), Object.defineProperty(We, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Xe
      }), Object.freeze && (Object.freeze(We.props), Object.freeze(We)), We;
    };
    function Gt(_, ie, pe, Me, Xe) {
      {
        var it, Ue = {}, We = null, Ot = null;
        pe !== void 0 && (je(pe), We = "" + pe), rt(ie) && (je(ie.key), We = "" + ie.key), zt(ie) && (Ot = ie.ref, Bt(ie, Xe));
        for (it in ie)
          Se.call(ie, it) && !Le.hasOwnProperty(it) && (Ue[it] = ie[it]);
        if (_ && _.defaultProps) {
          var xt = _.defaultProps;
          for (it in xt)
            Ue[it] === void 0 && (Ue[it] = xt[it]);
        }
        if (We || Ot) {
          var Ye = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          We && ht(Ue, Ye), Ot && Qe(Ue, Ye);
        }
        return st(_, We, Ot, Xe, Me, Et.current, Ue);
      }
    }
    var Dt = b.ReactCurrentOwner, ve = b.ReactDebugCurrentFrame;
    function Pe(_) {
      if (_) {
        var ie = _._owner, pe = le(_.type, _._source, ie ? ie.type : null);
        ve.setExtraStackFrame(pe);
      } else
        ve.setExtraStackFrame(null);
    }
    var ke;
    ke = !1;
    function nt(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function Je() {
      {
        if (Dt.current) {
          var _ = B(Dt.current.type);
          if (_)
            return `

Check the render method of \`` + _ + "`.";
        }
        return "";
      }
    }
    function Re(_) {
      {
        if (_ !== void 0) {
          var ie = _.fileName.replace(/^.*[\\\/]/, ""), pe = _.lineNumber;
          return `

Check your code at ` + ie + ":" + pe + ".";
        }
        return "";
      }
    }
    var Ze = {};
    function Ae(_) {
      {
        var ie = Je();
        if (!ie) {
          var pe = typeof _ == "string" ? _ : _.displayName || _.name;
          pe && (ie = `

Check the top-level render call using <` + pe + ">.");
        }
        return ie;
      }
    }
    function Te(_, ie) {
      {
        if (!_._store || _._store.validated || _.key != null)
          return;
        _._store.validated = !0;
        var pe = Ae(ie);
        if (Ze[pe])
          return;
        Ze[pe] = !0;
        var Me = "";
        _ && _._owner && _._owner !== Dt.current && (Me = " It was passed a child from " + B(_._owner.type) + "."), Pe(_), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', pe, Me), Pe(null);
      }
    }
    function lt(_, ie) {
      {
        if (typeof _ != "object")
          return;
        if (he(_))
          for (var pe = 0; pe < _.length; pe++) {
            var Me = _[pe];
            nt(Me) && Te(Me, ie);
          }
        else if (nt(_))
          _._store && (_._store.validated = !0);
        else if (_) {
          var Xe = g(_);
          if (typeof Xe == "function" && Xe !== _.entries)
            for (var it = Xe.call(_), Ue; !(Ue = it.next()).done; )
              nt(Ue.value) && Te(Ue.value, ie);
        }
      }
    }
    function _t(_) {
      {
        var ie = _.type;
        if (ie == null || typeof ie == "string")
          return;
        var pe;
        if (typeof ie == "function")
          pe = ie.propTypes;
        else if (typeof ie == "object" && (ie.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ie.$$typeof === d))
          pe = ie.propTypes;
        else
          return;
        if (pe) {
          var Me = B(ie);
          se(pe, _.props, "prop", Me, _);
        } else if (ie.PropTypes !== void 0 && !ke) {
          ke = !0;
          var Xe = B(ie);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Xe || "Unknown");
        }
        typeof ie.getDefaultProps == "function" && !ie.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xt(_) {
      {
        for (var ie = Object.keys(_.props), pe = 0; pe < ie.length; pe++) {
          var Me = ie[pe];
          if (Me !== "children" && Me !== "key") {
            Pe(_), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Me), Pe(null);
            break;
          }
        }
        _.ref !== null && (Pe(_), C("Invalid attribute `ref` supplied to `React.Fragment`."), Pe(null));
      }
    }
    function Tt(_, ie, pe, Me, Xe, it) {
      {
        var Ue = A(_);
        if (!Ue) {
          var We = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (We += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ot = Re(Xe);
          Ot ? We += Ot : We += Je();
          var xt;
          _ === null ? xt = "null" : he(_) ? xt = "array" : _ !== void 0 && _.$$typeof === t ? (xt = "<" + (B(_.type) || "Unknown") + " />", We = " Did you accidentally export a JSX literal instead of a component?") : xt = typeof _, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", xt, We);
        }
        var Ye = Gt(_, ie, pe, Xe, it);
        if (Ye == null)
          return Ye;
        if (Ue) {
          var Yt = ie.children;
          if (Yt !== void 0)
            if (Me)
              if (he(Yt)) {
                for (var Lr = 0; Lr < Yt.length; Lr++)
                  lt(Yt[Lr], _);
                Object.freeze && Object.freeze(Yt);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              lt(Yt, _);
        }
        return _ === n ? Xt(Ye) : _t(Ye), Ye;
      }
    }
    function cn(_, ie, pe) {
      return Tt(_, ie, pe, !0);
    }
    function fn(_, ie, pe) {
      return Tt(_, ie, pe, !1);
    }
    var Ar = fn, Er = cn;
    Ho.Fragment = n, Ho.jsx = Ar, Ho.jsxs = Er;
  }()), Ho;
}
process.env.NODE_ENV === "production" ? Lu.exports = xD() : Lu.exports = OD();
var Ce = Lu.exports, $D = {
  /**
   * Check if a value is a `History` object.
   */
  isHistory(e) {
    return ar(e) && Array.isArray(e.redos) && Array.isArray(e.undos) && (e.redos.length === 0 || ta.isOperationList(e.redos[0].operations)) && (e.undos.length === 0 || ta.isOperationList(e.undos[0].operations));
  }
}, Vl = /* @__PURE__ */ new WeakMap(), Hl = /* @__PURE__ */ new WeakMap(), ba = {
  /**
   * Check if a value is a `HistoryEditor` object.
   */
  isHistoryEditor(e) {
    return $D.isHistory(e.history) && w.isEditor(e);
  },
  /**
   * Get the merge flag's current value.
   */
  isMerging(e) {
    return Hl.get(e);
  },
  /**
   * Get the saving flag's current value.
   */
  isSaving(e) {
    return Vl.get(e);
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
    var r = ba.isMerging(e);
    Hl.set(e, !1), t(), Hl.set(e, r);
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, without saving any of
   * their operations into the history.
   */
  withoutSaving(e, t) {
    var r = ba.isSaving(e);
    Vl.set(e, !1), t(), Vl.set(e, r);
  }
}, AD = (e) => {
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
      o.selectionBefore && re.setSelection(t, o.selectionBefore), ba.withoutSaving(t, () => {
        w.withoutNormalizing(t, () => {
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
      ba.withoutSaving(t, () => {
        w.withoutNormalizing(t, () => {
          var i = o.operations.map(ta.inverse).reverse();
          for (var s of i)
            t.apply(s);
          o.selectionBefore && re.setSelection(t, o.selectionBefore);
        });
      }), t.writeHistory("redos", o), n.undos.pop();
    }
  }, t.apply = (n) => {
    var {
      operations: a,
      history: o
    } = t, {
      undos: i
    } = o, s = i[i.length - 1], l = s && s.operations[s.operations.length - 1], u = ba.isSaving(t), c = ba.isMerging(t);
    if (u == null && (u = FD(n)), u) {
      if (c == null && (s == null ? c = !1 : a.length !== 0 ? c = !0 : c = BD(n, l)), s && c)
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
}, BD = (e, t) => !!(t && e.type === "insert_text" && t.type === "insert_text" && e.offset === t.offset + t.text.length && z.equals(e.path, t.path) || t && e.type === "remove_text" && t.type === "remove_text" && e.offset + e.text.length === t.offset && z.equals(e.path, t.path)), FD = (e, t) => e.type !== "set_selection", at = /* @__PURE__ */ ((e) => (e.Paragraph = "paragraph", e.Heading = "heading", e.Link = "link", e.Bold = "bold", e.Code = "code", e.CheckList = "check-list", e.OrderedList = "ordered-list", e))(at || {}), In = /* @__PURE__ */ ((e) => (e.Start = "start", e.Center = "center", e.End = "end", e))(In || {}), ao = /* @__PURE__ */ ((e) => (e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e))(ao || {});
function uo() {
  return [
    {
      type: at.Paragraph,
      children: [{ text: "" }]
    }
  ];
}
function PD(e, t) {
  const { selection: r } = e, [n] = te.findPath(e, t), [a] = w.nodes(e, {
    match: (o) => de.isElement(o) && w.isBlock(e, o)
  });
  if (a[0] !== t) {
    const o = r ? r.focus.offset : 0;
    re.select(e, {
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
  te.blur(e), te.focus(e);
}
function Pp(e) {
  return {
    ...e,
    ...{
      textAlign: void 0,
      heading: void 0
    }
  };
}
const cf = (e, t, r) => {
  const n = w.node(e, r), a = w.next(e, {
    at: n[1],
    match: (o) => de.isElement(o) && o.type === at.OrderedList
  });
  if (a) {
    const o = t + 1;
    re.setNodes(
      e,
      {
        index: o
      },
      {
        at: a[1]
      }
    ), cf(e, o, a[1]);
  }
};
function ff(e) {
  const { selection: t } = e;
  return !!(t && X.isCollapsed(t));
}
function RD(e, t, r) {
  const n = {
    type: at.Link,
    href: t,
    children: [{ text: t }]
  };
  ff(e) ? re.insertNodes(e, n) : (re.wrapNodes(e, n, { split: !0, at: r }), re.collapse(e, { edge: "end" }));
}
const Dr = Symbol.for("@ts-pattern/matcher"), Rp = Symbol.for("@ts-pattern/isVariadic"), Ms = "@ts-pattern/anonymous-select-key", ku = (e) => !!(e && typeof e == "object"), ys = (e) => e && !!e[Dr], or = (e, t, r) => {
  if (ys(e)) {
    const n = e[Dr](), { matched: a, selections: o } = n.match(t);
    return a && o && Object.keys(o).forEach((i) => r(i, o[i])), a;
  }
  if (ku(e)) {
    if (!ku(t))
      return !1;
    if (Array.isArray(e)) {
      if (!Array.isArray(t))
        return !1;
      let n = [], a = [], o = [];
      for (const i of e.keys()) {
        const s = e[i];
        ys(s) && s[Rp] ? o.push(s) : o.length ? a.push(s) : n.push(s);
      }
      if (o.length) {
        if (o.length > 1)
          throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
        if (t.length < n.length + a.length)
          return !1;
        const i = t.slice(0, n.length), s = a.length === 0 ? [] : t.slice(-a.length), l = t.slice(n.length, a.length === 0 ? 1 / 0 : -a.length);
        return n.every((u, c) => or(u, i[c], r)) && a.every((u, c) => or(u, s[c], r)) && (o.length === 0 || or(o[0], l, r));
      }
      return e.length === t.length && e.every((i, s) => or(i, t[s], r));
    }
    return Object.keys(e).every((n) => {
      const a = e[n];
      return (n in t || ys(o = a) && o[Dr]().matcherType === "optional") && or(a, t[n], r);
      var o;
    });
  }
  return Object.is(t, e);
}, Nr = (e) => {
  var t, r, n;
  return ku(e) ? ys(e) ? (t = (r = (n = e[Dr]()).getSelectionKeys) == null ? void 0 : r.call(n)) != null ? t : [] : Array.isArray(e) ? hi(e, Nr) : hi(Object.values(e), Nr) : [];
}, hi = (e, t) => e.reduce((r, n) => r.concat(t(n)), []);
function ND(...e) {
  if (e.length === 1) {
    const [t] = e;
    return (r) => or(t, r, () => {
    });
  }
  if (e.length === 2) {
    const [t, r] = e;
    return or(t, r, () => {
    });
  }
  throw new Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${e.length}.`);
}
function ir(e) {
  return Object.assign(e, { optional: () => df(e), and: (t) => It(e, t), or: (t) => Np(e, t), select: (t) => t === void 0 ? bi(e) : bi(t, e) });
}
function zu(e) {
  return Object.assign(((t) => Object.assign(t, { [Symbol.iterator]() {
    let r = 0;
    const n = [{ value: Object.assign(t, { [Rp]: !0 }), done: !1 }, { done: !0, value: void 0 }];
    return { next: () => {
      var a;
      return (a = n[r++]) != null ? a : n.at(-1);
    } };
  } }))(e), { optional: () => zu(df(e)), select: (t) => zu(t === void 0 ? bi(e) : bi(t, e)) });
}
function df(e) {
  return ir({ [Dr]: () => ({ match: (t) => {
    let r = {};
    const n = (a, o) => {
      r[a] = o;
    };
    return t === void 0 ? (Nr(e).forEach((a) => n(a, void 0)), { matched: !0, selections: r }) : { matched: or(e, t, n), selections: r };
  }, getSelectionKeys: () => Nr(e), matcherType: "optional" }) });
}
const ID = (e, t) => {
  for (const r of e)
    if (!t(r))
      return !1;
  return !0;
}, TD = (e, t) => {
  for (const [r, n] of e.entries())
    if (!t(n, r))
      return !1;
  return !0;
};
function It(...e) {
  return ir({ [Dr]: () => ({ match: (t) => {
    let r = {};
    const n = (a, o) => {
      r[a] = o;
    };
    return { matched: e.every((a) => or(a, t, n)), selections: r };
  }, getSelectionKeys: () => hi(e, Nr), matcherType: "and" }) });
}
function Np(...e) {
  return ir({ [Dr]: () => ({ match: (t) => {
    let r = {};
    const n = (a, o) => {
      r[a] = o;
    };
    return hi(e, Nr).forEach((a) => n(a, void 0)), { matched: e.some((a) => or(a, t, n)), selections: r };
  }, getSelectionKeys: () => hi(e, Nr), matcherType: "or" }) });
}
function dt(e) {
  return { [Dr]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function bi(...e) {
  const t = typeof e[0] == "string" ? e[0] : void 0, r = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
  return ir({ [Dr]: () => ({ match: (n) => {
    let a = { [t ?? Ms]: n };
    return { matched: r === void 0 || or(r, n, (o, i) => {
      a[o] = i;
    }), selections: a };
  }, getSelectionKeys: () => [t ?? Ms].concat(r === void 0 ? [] : Nr(r)) }) });
}
function pn(e) {
  return typeof e == "number";
}
function da(e) {
  return typeof e == "string";
}
function Zn(e) {
  return typeof e == "bigint";
}
const Ip = ir(dt(function(e) {
  return !0;
})), MD = Ip, va = (e) => Object.assign(ir(e), { startsWith: (t) => {
  return va(It(e, (r = t, dt((n) => da(n) && n.startsWith(r)))));
  var r;
}, endsWith: (t) => {
  return va(It(e, (r = t, dt((n) => da(n) && n.endsWith(r)))));
  var r;
}, minLength: (t) => va(It(e, ((r) => dt((n) => da(n) && n.length >= r))(t))), maxLength: (t) => va(It(e, ((r) => dt((n) => da(n) && n.length <= r))(t))), includes: (t) => {
  return va(It(e, (r = t, dt((n) => da(n) && n.includes(r)))));
  var r;
}, regex: (t) => {
  return va(It(e, (r = t, dt((n) => da(n) && !!n.match(r)))));
  var r;
} }), jD = va(dt(da)), hn = (e) => Object.assign(ir(e), { between: (t, r) => hn(It(e, ((n, a) => dt((o) => pn(o) && n <= o && a >= o))(t, r))), lt: (t) => hn(It(e, ((r) => dt((n) => pn(n) && n < r))(t))), gt: (t) => hn(It(e, ((r) => dt((n) => pn(n) && n > r))(t))), lte: (t) => hn(It(e, ((r) => dt((n) => pn(n) && n <= r))(t))), gte: (t) => hn(It(e, ((r) => dt((n) => pn(n) && n >= r))(t))), int: () => hn(It(e, dt((t) => pn(t) && Number.isInteger(t)))), finite: () => hn(It(e, dt((t) => pn(t) && Number.isFinite(t)))), positive: () => hn(It(e, dt((t) => pn(t) && t > 0))), negative: () => hn(It(e, dt((t) => pn(t) && t < 0))) }), _D = hn(dt(pn)), Qn = (e) => Object.assign(ir(e), { between: (t, r) => Qn(It(e, ((n, a) => dt((o) => Zn(o) && n <= o && a >= o))(t, r))), lt: (t) => Qn(It(e, ((r) => dt((n) => Zn(n) && n < r))(t))), gt: (t) => Qn(It(e, ((r) => dt((n) => Zn(n) && n > r))(t))), lte: (t) => Qn(It(e, ((r) => dt((n) => Zn(n) && n <= r))(t))), gte: (t) => Qn(It(e, ((r) => dt((n) => Zn(n) && n >= r))(t))), positive: () => Qn(It(e, dt((t) => Zn(t) && t > 0))), negative: () => Qn(It(e, dt((t) => Zn(t) && t < 0))) }), LD = Qn(dt(Zn)), kD = ir(dt(function(e) {
  return typeof e == "boolean";
})), zD = ir(dt(function(e) {
  return typeof e == "symbol";
})), VD = ir(dt(function(e) {
  return e == null;
})), HD = ir(dt(function(e) {
  return e != null;
}));
var Bv = { __proto__: null, matcher: Dr, optional: df, array: function(...e) {
  return zu({ [Dr]: () => ({ match: (t) => {
    if (!Array.isArray(t))
      return { matched: !1 };
    if (e.length === 0)
      return { matched: !0 };
    const r = e[0];
    let n = {};
    if (t.length === 0)
      return Nr(r).forEach((o) => {
        n[o] = [];
      }), { matched: !0, selections: n };
    const a = (o, i) => {
      n[o] = (n[o] || []).concat([i]);
    };
    return { matched: t.every((o) => or(r, o, a)), selections: n };
  }, getSelectionKeys: () => e.length === 0 ? [] : Nr(e[0]) }) });
}, set: function(...e) {
  return ir({ [Dr]: () => ({ match: (t) => {
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
    return { matched: ID(t, (o) => or(a, o, n)), selections: r };
  }, getSelectionKeys: () => e.length === 0 ? [] : Nr(e[0]) }) });
}, map: function(...e) {
  return ir({ [Dr]: () => ({ match: (t) => {
    if (!(t instanceof Map))
      return { matched: !1 };
    let r = {};
    if (t.size === 0)
      return { matched: !0, selections: r };
    const n = (s, l) => {
      r[s] = (r[s] || []).concat([l]);
    };
    if (e.length === 0)
      return { matched: !0 };
    var a;
    if (e.length === 1)
      throw new Error(`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${(a = e[0]) == null ? void 0 : a.toString()}`);
    const [o, i] = e;
    return { matched: TD(t, (s, l) => {
      const u = or(o, l, n), c = or(i, s, n);
      return u && c;
    }), selections: r };
  }, getSelectionKeys: () => e.length === 0 ? [] : [...Nr(e[0]), ...Nr(e[1])] }) });
}, intersection: It, union: Np, not: function(e) {
  return ir({ [Dr]: () => ({ match: (t) => ({ matched: !or(e, t, () => {
  }) }), getSelectionKeys: () => [], matcherType: "not" }) });
}, when: dt, select: bi, any: Ip, _: MD, string: jD, number: _D, bigint: LD, boolean: kD, symbol: zD, nullish: VD, nonNullable: HD, instanceOf: function(e) {
  return ir(dt(/* @__PURE__ */ function(t) {
    return (r) => r instanceof t;
  }(e)));
}, shape: function(e) {
  return ir(dt(ND(e)));
} };
const Vu = { matched: !1, value: void 0 };
function Ft(e) {
  return new js(e, Vu);
}
class js {
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
    const s = (u, c) => {
      o = !0, i[u] = c;
    }, l = !n.some((u) => or(u, this.input, s)) || a && !a(this.input) ? Vu : { matched: !0, value: r(o ? Ms in i ? i[Ms] : i : this.input, this.input) };
    return new js(this.input, l);
  }
  when(t, r) {
    if (this.state.matched)
      return this;
    const n = !!t(this.input);
    return new js(this.input, n ? { matched: !0, value: r(this.input, this.input) } : Vu);
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
const tt = {
  selectAllInModule(e) {
    const { selection: t } = e;
    if (!t)
      throw Error("selection is undefined");
    const [r, n] = w.edges(e, t);
    if (r.path[0] === n.path[0]) {
      const [a] = w.nodes(e, {
        match: (o) => de.isElement(o)
      });
      return re.select(e, {
        anchor: w.start(e, a[1]),
        focus: w.end(e, a[1])
      }), !0;
    }
  },
  //加粗
  isBoldMarkActive(e) {
    const t = w.marks(e);
    return Ft(t).with({ bold: !0 }, () => !0).otherwise(() => !1);
  },
  toggleBoldMark(e) {
    const t = tt.isBoldMarkActive(e);
    Ft(t).with(!0, () => {
      w.removeMark(e, "bold");
    }).otherwise(() => {
      w.addMark(e, "bold", !0);
    });
  },
  //斜体
  isItalicMarkActive(e) {
    const t = w.marks(e);
    return Ft(t).with({ italic: !0 }, () => !0).otherwise(() => !1);
  },
  toggleItalicMark(e) {
    const t = tt.isItalicMarkActive(e);
    Ft(t).with(!0, () => {
      w.removeMark(e, "italic");
    }).otherwise(() => {
      w.addMark(e, "italic", !0);
    });
  },
  //下划线
  isUnderlineMarkActive(e) {
    const t = w.marks(e);
    return Ft(t).with({ underline: !0 }, () => !0).otherwise(() => !1);
  },
  toggleUnderlineMark(e) {
    const t = tt.isUnderlineMarkActive(e);
    Ft(t).with(!0, () => {
      w.removeMark(e, "underline");
    }).otherwise(() => {
      w.addMark(e, "underline", !0);
    });
  },
  //文本位置
  isTextAlignMarkActive(e) {
    const { selection: t } = e;
    if (!t)
      return !1;
    const [r] = w.nodes(e, {
      at: t,
      match: (n) => de.isElement(n) && w.isBlock(e, n)
    });
    return Ft(r[0]).with({ textAlign: Bv.not(void 0) }, (n) => n.textAlign).otherwise(() => !1);
  },
  toggleTextAlignMark(e, t) {
    Ft(t).with(void 0, () => {
      tt.isTextAlignMarkActive(e) && re.setNodes(
        e,
        { textAlign: void 0 },
        { match: (n) => de.isElement(n) && w.isBlock(e, n) }
      );
    }).otherwise((r) => {
      re.setNodes(
        e,
        { textAlign: r },
        { match: (n) => de.isElement(n) && w.isBlock(e, n) }
      );
    });
  },
  //文本的heading
  isTextHeadingMarkActive(e) {
    const { selection: t } = e;
    if (!t)
      return !1;
    const [r] = w.nodes(e, {
      at: t,
      match: (n) => de.isElement(n) && w.isBlock(e, n)
    });
    return Ft(r[0]).with({ heading: Bv.not(void 0) }, (n) => n.heading).otherwise(() => !1);
  },
  toggleTextHeadingMark(e, t) {
    Ft(t).with(void 0, () => {
      tt.isTextHeadingMarkActive(e) && re.setNodes(
        e,
        { heading: void 0 },
        { match: (n) => de.isElement(n) && w.isBlock(e, n) }
      );
    }).otherwise((r) => {
      re.setNodes(
        e,
        { heading: t },
        { match: (n) => de.isElement(n) && w.isBlock(e, n) }
      );
    });
  },
  //任务
  isCheckListNode(e) {
    const [t] = w.nodes(e, {
      match: (r) => r.type === at.CheckList
    });
    return !!t;
  },
  toggleCheckListNode(e) {
    const t = tt.isCheckListNode(e);
    let r = !1, n = !1;
    Ft(t).with(!0, () => {
      re.setNodes(
        e,
        { type: at.Paragraph },
        { match: (a) => de.isElement(a) && w.isBlock(e, a) }
      );
    }).with(!1, () => {
      const { selection: a } = e;
      if (!a)
        throw Error("selection is undefined");
      const o = w.start(e, a), [, i] = w.node(e, o), s = w.end(e, a), [, l] = w.node(e, s), u = w.previous(e, {
        at: i,
        match: (d) => de.isElement(d)
      });
      if ((!u || u && u[1][0] === 0) && i[0] === 0 && (r = !0), w.next(e, {
        at: l,
        match: (d) => de.isElement(d)
      }) || (n = !0), !n && !r)
        re.setNodes(
          e,
          { type: at.CheckList },
          { match: (d) => de.isElement(d) && w.isBlock(e, d) }
        );
      else if (re.setNodes(
        e,
        { type: at.CheckList },
        { match: (d) => de.isElement(d) && w.isBlock(e, d) }
      ), r && re.insertNodes(e, uo(), {
        at: [i[0]]
      }), n) {
        let d = 1;
        r && (d = 2), re.insertNodes(e, uo(), {
          at: [l[0] + d]
        });
      }
    });
  },
  //有序列表
  isOrderedListNode(e) {
    const [t] = w.nodes(e, {
      match: (r) => r.type === at.OrderedList
    });
    return !!t;
  },
  toggleOrderedListNode(e) {
    const t = tt.isOrderedListNode(e);
    Ft(t).with(!0, () => {
      re.setNodes(
        e,
        { type: at.Paragraph },
        { match: (r) => de.isElement(r) && w.isBlock(e, r) }
      );
    }).with(!1, () => {
      const { selection: r } = e;
      if (!r)
        throw Error("selection is undefined");
      let n = !1, a = !1;
      const o = w.nodes(e, {
        at: r,
        match: (m) => de.isElement(m)
      }), i = [];
      for (const m of o)
        i.push(m);
      const s = i[0], l = i[i.length - 1], u = w.previous(e, {
        at: s[1],
        match: (m) => de.isElement(m)
      }), c = w.next(e, {
        at: l[1],
        match: (m) => de.isElement(m)
      });
      let d = 1;
      u ? u[0].type === at.OrderedList && (d = u[0].index + 1) : n = !0, c || (a = !0);
      for (let m = 0; m < i.length; m++) {
        const h = i[m];
        re.setNodes(
          e,
          { type: at.OrderedList, index: d + m },
          {
            at: h[1],
            match: (p) => de.isElement(p) && w.isBlock(e, p)
          }
        );
      }
      d = d + i.length - 1, n && re.insertNodes(e, uo(), {
        at: s[1]
      }), a ? re.insertNodes(e, uo(), {
        at: [l[1][0] + (n ? 2 : 1)]
      }) : cf(e, d, l[1]);
    });
  },
  //缩进
  indent(e) {
    re.insertText(e, " ".repeat(8));
  },
  restoreNormal(e) {
    const t = ["bold", "italic", "underline"];
    for (let r = 0; r < t.length; r++)
      w.removeMark(e, t[r]);
  },
  isParagraphNode(e) {
    const [t] = w.nodes(e, {
      match: (r) => r.type === at.Paragraph
    });
    return !!t;
  },
  isOrderedNode(e) {
    const [t] = w.nodes(e, {
      match: (r) => r.type === at.OrderedList
    });
    return !!t;
  },
  toggleOrderedNode(e) {
    const [t] = w.nodes(e, {
      match: (r) => r.type === at.OrderedList
    });
    return !!t;
  },
  toggleLinkNode(e, t) {
    const { selection: r } = e;
    if (!r)
      throw Error("selection is undefined");
    RD(e, t.link);
  }
};
var Zo = /* @__PURE__ */ ((e) => (e.Bold = "b", e.Italic = "i", e.Underline = "u", e.Restore = "r", e.Tab = "Tab", e))(Zo || {});
const WD = (e) => {
  const { deleteBackward: t, insertBreak: r } = e;
  return e.deleteBackward = (...n) => {
    const { selection: a } = e;
    if (a && ff(e)) {
      const [o] = w.nodes(e, {
        match: (i) => !w.isEditor(i) && de.isElement(i) && i.type === at.CheckList
      });
      if (o) {
        const [, i] = o, s = w.start(e, i);
        if (Ge.equals(a.anchor, s)) {
          const l = {
            type: at.Paragraph
          };
          re.setNodes(e, l, {
            match: (u) => !w.isEditor(u) && de.isElement(u) && u.type === at.CheckList
          });
          return;
        }
      }
    }
    t(...n);
  }, e.insertBreak = () => {
    const [n] = w.nodes(e, {
      match: (a) => !w.isEditor(a) && de.isElement(a) && a.type === at.CheckList
    });
    if (n) {
      const [, a] = n;
      if (!w.string(e, a)) {
        const i = Pp({
          type: at.Paragraph
        });
        tt.restoreNormal(e), re.setNodes(e, i, {
          match: (s) => !w.isEditor(s) && de.isElement(s) && s.type === at.CheckList
        });
        return;
      }
    }
    r();
  }, e;
}, qD = (e) => {
  const { deleteBackward: t, insertBreak: r } = e;
  return e.deleteBackward = (...n) => {
    const { selection: a } = e;
    if (a && ff(e)) {
      const [o] = w.nodes(e, {
        match: (i) => !w.isEditor(i) && de.isElement(i) && i.type === at.OrderedList
      });
      if (o) {
        const [, i] = o, s = w.start(e, i);
        if (Ge.equals(a.anchor, s)) {
          const l = {
            type: at.Paragraph
          };
          re.setNodes(e, l, {
            match: (u) => !w.isEditor(u) && de.isElement(u) && u.type === at.OrderedList
          });
          return;
        }
      }
    }
    t(...n);
  }, e.insertBreak = () => {
    const [n] = w.nodes(e, {
      match: (a) => !w.isEditor(a) && de.isElement(a) && a.type === at.OrderedList
    });
    if (n) {
      const [, a] = n, o = w.string(e, a);
      return Ft(o).with("", () => {
        const i = Pp({
          type: at.Paragraph
        });
        tt.restoreNormal(e), re.setNodes(e, i, {
          match: (s) => !w.isEditor(s) && de.isElement(s) && s.type === at.OrderedList
        });
      }).otherwise(() => {
        r();
        let i = 1;
        const { selection: s } = e;
        if (!s)
          throw Error("selection is undefined");
        const l = w.node(e, s), u = w.previous(e, {
          at: l[1],
          match: (m) => de.isElement(m) && m.type === at.OrderedList
        });
        u && (i = u[0].index + 1), re.setNodes(
          e,
          {
            index: i
          },
          {
            match: (m) => !w.isEditor(m) && de.isElement(m) && m.type === at.OrderedList
          }
        );
        const { selection: c } = e;
        if (!c)
          throw Error("selection is undefined");
        const d = w.node(e, c);
        cf(e, i, d[1]);
      });
    }
    r();
  }, e;
}, KD = (e) => {
  const { insertBreak: t } = e;
  return e.insertBreak = () => {
    const [r] = w.nodes(e, {
      match: (n) => !w.isEditor(n) && de.isElement(n) && n.heading !== void 0 && n.type === at.Paragraph
    });
    if (r) {
      const n = {
        type: at.Paragraph,
        children: [{ text: "" }]
      };
      re.insertNodes(e, n);
      return;
    }
    t();
  }, e;
}, UD = (e) => {
  const { isInline: t } = e;
  return e.isInline = (r) => r.type === at.Link ? !0 : t(r), e;
};
function GD(e, t) {
  const [r, n] = t, { type: a, children: o } = r;
  if (de.isElement(r) && a === at.Link) {
    const i = o.find((u) => typeof u.text == "string"), s = i && ["", "%EF%BB%BF"].includes(encodeURIComponent(i.text));
    if (s)
      return s && o.find((c) => typeof c.type < "u") ? (re.unwrapNodes(e, { at: n }), !0) : (re.delete(e, { at: [...n] }), !0);
    const l = [void 0];
    if (!Hu(o, [l]))
      return XD(e, o, l, n), !0;
  }
  return !1;
}
function Hu(e, t, r) {
  return t ? Array.isArray(e) && e.length && e.every((n) => {
    if (typeof t == "string")
      return n.type === t;
    if (Array.isArray(t)) {
      const a = r || 0;
      if (typeof t[a] == "string" || t[a] === void 0) {
        const o = t[a] === n.type;
        return o && t.length === a + 1 ? !0 : o && t.length < a + 1 ? Hu(n.children, t, a + 1) : !1;
      } else if (Array.isArray(t[a])) {
        const o = t[a].includes(n.type);
        return o && t.length === a + 1 ? !0 : o && t.length < a + 1 ? Hu(n.children, t, a + 1) : !1;
      } else
        return console.error("isNodeChildrenIsTargetType err", e, t, r), !1;
    }
  }) : Array.isArray(e) && e.length;
}
function XD(e, t, r, n, a) {
  let o = t.length;
  for (let i = t.length - 1; i >= 0; i--) {
    const s = t[i];
    if (!r.includes(s == null ? void 0 : s.type)) {
      const l = n.concat([i]);
      if (console.log("delChildrenNotAllowComponent", s, t, l), w.hasPath(e, l)) {
        if (o === 1) {
          const u = a || { text: Wu(t) };
          re.insertNodes(e, u, { at: YD(l) });
        }
        re.delete(e, { at: l }), o--;
      }
    }
  }
}
function YD(e) {
  return [...e.slice(0, -1), e[e.length - 1] + 1];
}
function Wu(e) {
  var t;
  return (e == null ? void 0 : e.type) === "text" ? typeof e.value == "string" ? e.value : "" : Array.isArray(e) ? e.map(Wu).join("") : Array.isArray(e == null ? void 0 : e.children) ? (t = e.children) == null ? void 0 : t.map(Wu).join("") : "";
}
const ZD = (e) => {
  const { normalizeNode: t, insertData: r } = e;
  return e.normalizeNode = (n) => {
    const [a, o] = n, i = a;
    if (typeof i.text == "string" && Array.isArray(i.children)) {
      i.children;
      const s = i.text;
      re.insertNodes(e, [{ text: s }], { at: o });
      const l = [...o.slice(0, -1), o[o.length - 1] + 1];
      re.removeNodes(e, { at: l });
    }
    de.isElement(i) && GD(e, n) || t(n);
  }, e;
}, QD = () => {
  const [e, t] = Qt(!0);
  return [Pt(
    () => KD(
      ZD(
        UD(qD(WD(DD(AD(hE())))))
      )
    ),
    []
  ), { showPlaceholder: e, handlePlaceholder: (a) => {
    a.length === 1 && JSON.stringify(a) === JSON.stringify(uo()) ? t(!0) : t(!1);
  } }];
};
var Tp = { exports: {} };
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
})(Tp);
var JD = Tp.exports;
const ne = /* @__PURE__ */ Ao(JD);
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
var qu = { exports: {} }, gt = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fv;
function ex() {
  if (Fv)
    return gt;
  Fv = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), p;
  p = Symbol.for("react.module.reference");
  function f(g) {
    if (typeof g == "object" && g !== null) {
      var b = g.$$typeof;
      switch (b) {
        case e:
          switch (g = g.type, g) {
            case r:
            case a:
            case n:
            case u:
            case c:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case i:
                case l:
                case m:
                case d:
                case o:
                  return g;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return gt.ContextConsumer = i, gt.ContextProvider = o, gt.Element = e, gt.ForwardRef = l, gt.Fragment = r, gt.Lazy = m, gt.Memo = d, gt.Portal = t, gt.Profiler = a, gt.StrictMode = n, gt.Suspense = u, gt.SuspenseList = c, gt.isAsyncMode = function() {
    return !1;
  }, gt.isConcurrentMode = function() {
    return !1;
  }, gt.isContextConsumer = function(g) {
    return f(g) === i;
  }, gt.isContextProvider = function(g) {
    return f(g) === o;
  }, gt.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, gt.isForwardRef = function(g) {
    return f(g) === l;
  }, gt.isFragment = function(g) {
    return f(g) === r;
  }, gt.isLazy = function(g) {
    return f(g) === m;
  }, gt.isMemo = function(g) {
    return f(g) === d;
  }, gt.isPortal = function(g) {
    return f(g) === t;
  }, gt.isProfiler = function(g) {
    return f(g) === a;
  }, gt.isStrictMode = function(g) {
    return f(g) === n;
  }, gt.isSuspense = function(g) {
    return f(g) === u;
  }, gt.isSuspenseList = function(g) {
    return f(g) === c;
  }, gt.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === a || g === n || g === u || g === c || g === h || typeof g == "object" && g !== null && (g.$$typeof === m || g.$$typeof === d || g.$$typeof === o || g.$$typeof === i || g.$$typeof === l || g.$$typeof === p || g.getModuleId !== void 0);
  }, gt.typeOf = f, gt;
}
var pt = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pv;
function tx() {
  return Pv || (Pv = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), p = !1, f = !1, g = !1, b = !1, C = !1, y;
    y = Symbol.for("react.module.reference");
    function E(G) {
      return !!(typeof G == "string" || typeof G == "function" || G === r || G === a || C || G === n || G === u || G === c || b || G === h || p || f || g || typeof G == "object" && G !== null && (G.$$typeof === m || G.$$typeof === d || G.$$typeof === o || G.$$typeof === i || G.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      G.$$typeof === y || G.getModuleId !== void 0));
    }
    function D(G) {
      if (typeof G == "object" && G !== null) {
        var le = G.$$typeof;
        switch (le) {
          case e:
            var Se = G.type;
            switch (Se) {
              case r:
              case a:
              case n:
              case u:
              case c:
                return Se;
              default:
                var De = Se && Se.$$typeof;
                switch (De) {
                  case s:
                  case i:
                  case l:
                  case m:
                  case d:
                  case o:
                    return De;
                  default:
                    return le;
                }
            }
          case t:
            return le;
        }
      }
    }
    var S = i, x = o, $ = e, O = l, A = r, j = m, N = d, B = t, P = a, R = n, T = u, F = c, I = !1, k = !1;
    function L(G) {
      return I || (I = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(G) {
      return k || (k = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(G) {
      return D(G) === i;
    }
    function Z(G) {
      return D(G) === o;
    }
    function M(G) {
      return typeof G == "object" && G !== null && G.$$typeof === e;
    }
    function V(G) {
      return D(G) === l;
    }
    function H(G) {
      return D(G) === r;
    }
    function q(G) {
      return D(G) === m;
    }
    function J(G) {
      return D(G) === d;
    }
    function ee(G) {
      return D(G) === t;
    }
    function ce(G) {
      return D(G) === a;
    }
    function ae(G) {
      return D(G) === n;
    }
    function me(G) {
      return D(G) === u;
    }
    function fe(G) {
      return D(G) === c;
    }
    pt.ContextConsumer = S, pt.ContextProvider = x, pt.Element = $, pt.ForwardRef = O, pt.Fragment = A, pt.Lazy = j, pt.Memo = N, pt.Portal = B, pt.Profiler = P, pt.StrictMode = R, pt.Suspense = T, pt.SuspenseList = F, pt.isAsyncMode = L, pt.isConcurrentMode = W, pt.isContextConsumer = U, pt.isContextProvider = Z, pt.isElement = M, pt.isForwardRef = V, pt.isFragment = H, pt.isLazy = q, pt.isMemo = J, pt.isPortal = ee, pt.isProfiler = ce, pt.isStrictMode = ae, pt.isSuspense = me, pt.isSuspenseList = fe, pt.isValidElementType = E, pt.typeOf = D;
  }()), pt;
}
process.env.NODE_ENV === "production" ? qu.exports = ex() : qu.exports = tx();
var ni = qu.exports;
function on(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return Q.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(on(n)) : ni.isFragment(n) && n.props ? r = r.concat(on(n.props.children, t)) : r.push(n));
  }), r;
}
var Ku = {}, vf = [], rx = function(t) {
  vf.push(t);
};
function yo(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = vf.reduce(function(n, a) {
      return a(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function nx(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = vf.reduce(function(n, a) {
      return a(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function Mp() {
  Ku = {};
}
function jp(e, t, r) {
  !t && !Ku[r] && (e(!1, r), Ku[r] = !0);
}
function yt(e, t) {
  jp(yo, e, t);
}
function ax(e, t) {
  jp(nx, e, t);
}
yt.preMessage = rx;
yt.resetWarned = Mp;
yt.noteOnce = ax;
function ut(e) {
  "@babel/helpers - typeof";
  return ut = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ut(e);
}
function ox(e, t) {
  if (ut(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ut(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _p(e) {
  var t = ox(e, "string");
  return ut(t) == "symbol" ? t : String(t);
}
function K(e, t, r) {
  return t = _p(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Rv(e, t) {
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
    t % 2 ? Rv(Object(r), !0).forEach(function(n) {
      K(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _s(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Cs(e) {
  return _s(e) ? e : e instanceof Q.Component ? Mg.findDOMNode(e) : null;
}
function Fi(e, t, r) {
  var n = v.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
function mf(e, t) {
  typeof e == "function" ? e(t) : ut(e) === "object" && e && "current" in e && (e.current = t);
}
function Gr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t.filter(function(a) {
    return a;
  });
  return n.length <= 1 ? n[0] : function(a) {
    t.forEach(function(o) {
      mf(o, a);
    });
  };
}
function Pi() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Fi(function() {
    return Gr.apply(void 0, t);
  }, t, function(n, a) {
    return n.length !== a.length || n.every(function(o, i) {
      return o !== a[i];
    });
  });
}
function Wn(e) {
  var t, r, n = ni.isMemo(e) ? e.type.type : e.type;
  return !(typeof n == "function" && !((t = n.prototype) !== null && t !== void 0 && t.render) && n.$$typeof !== ni.ForwardRef || typeof e == "function" && !((r = e.prototype) !== null && r !== void 0 && r.render) && e.$$typeof !== ni.ForwardRef);
}
function ix(e) {
  return !/* @__PURE__ */ Ny(e) || ni.isFragment(e) ? !1 : Wn(e);
}
var Uu = /* @__PURE__ */ v.createContext(null);
function sx(e) {
  var t = e.children, r = e.onBatchResize, n = v.useRef(0), a = v.useRef([]), o = v.useContext(Uu), i = v.useCallback(function(s, l, u) {
    n.current += 1;
    var c = n.current;
    a.current.push({
      size: s,
      element: l,
      data: u
    }), Promise.resolve().then(function() {
      c === n.current && (r == null || r(a.current), a.current = []);
    }), o == null || o(s, l, u);
  }, [r, o]);
  return /* @__PURE__ */ v.createElement(Uu.Provider, {
    value: i
  }, t);
}
var Lp = function() {
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
}(), Gu = typeof window < "u" && typeof document < "u" && window.document === document, Ls = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), lx = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Ls) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), ux = 2;
function cx(e, t) {
  var r = !1, n = !1, a = 0;
  function o() {
    r && (r = !1, e()), n && s();
  }
  function i() {
    lx(o);
  }
  function s() {
    var l = Date.now();
    if (r) {
      if (l - a < ux)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(i, t);
    a = l;
  }
  return s;
}
var fx = 20, dx = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], vx = typeof MutationObserver < "u", mx = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = cx(this.refresh.bind(this), fx);
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
      !Gu || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), vx ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Gu || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, a = dx.some(function(o) {
        return !!~n.indexOf(o);
      });
      a && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), kp = function(e, t) {
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
}, Co = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Ls;
}, zp = ll(0, 0, 0, 0);
function ks(e) {
  return parseFloat(e) || 0;
}
function Nv(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, a) {
    var o = e["border-" + a + "-width"];
    return n + ks(o);
  }, 0);
}
function gx(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, a = t; n < a.length; n++) {
    var o = a[n], i = e["padding-" + o];
    r[o] = ks(i);
  }
  return r;
}
function px(e) {
  var t = e.getBBox();
  return ll(0, 0, t.width, t.height);
}
function hx(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return zp;
  var n = Co(e).getComputedStyle(e), a = gx(n), o = a.left + a.right, i = a.top + a.bottom, s = ks(n.width), l = ks(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + o) !== t && (s -= Nv(n, "left", "right") + o), Math.round(l + i) !== r && (l -= Nv(n, "top", "bottom") + i)), !yx(e)) {
    var u = Math.round(s + o) - t, c = Math.round(l + i) - r;
    Math.abs(u) !== 1 && (s -= u), Math.abs(c) !== 1 && (l -= c);
  }
  return ll(a.left, a.top, s, l);
}
var bx = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Co(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Co(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function yx(e) {
  return e === Co(e).document.documentElement;
}
function Cx(e) {
  return Gu ? bx(e) ? px(e) : hx(e) : zp;
}
function Ex(e) {
  var t = e.x, r = e.y, n = e.width, a = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(o.prototype);
  return kp(i, {
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
function ll(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var wx = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ll(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Cx(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Sx = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, r) {
      var n = Ex(r);
      kp(this, { target: t, contentRect: n });
    }
    return e;
  }()
), Dx = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new Lp(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Co(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new wx(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Co(t).Element))
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
          return new Sx(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Vp = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Lp(), Hp = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = mx.getInstance(), n = new Dx(t, r, this);
      Vp.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Hp.prototype[e] = function() {
    var t;
    return (t = Vp.get(this))[e].apply(t, arguments);
  };
});
var xx = function() {
  return typeof Ls.ResizeObserver < "u" ? Ls.ResizeObserver : Hp;
}(), Nn = /* @__PURE__ */ new Map();
function Wp(e) {
  e.forEach(function(t) {
    var r, n = t.target;
    (r = Nn.get(n)) === null || r === void 0 || r.forEach(function(a) {
      return a(n);
    });
  });
}
var qp = new xx(Wp);
process.env.NODE_ENV;
process.env.NODE_ENV;
function Ox(e, t) {
  Nn.has(e) || (Nn.set(e, /* @__PURE__ */ new Set()), qp.observe(e)), Nn.get(e).add(t);
}
function $x(e, t) {
  Nn.has(e) && (Nn.get(e).delete(t), Nn.get(e).size || (qp.unobserve(e), Nn.delete(e)));
}
function Or(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Iv(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, _p(n.key), n);
  }
}
function $r(e, t, r) {
  return t && Iv(e.prototype, t), r && Iv(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Xu(e, t) {
  return Xu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Xu(e, t);
}
function Ta(e, t) {
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
  }), t && Xu(e, t);
}
function ia(e) {
  return ia = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ia(e);
}
function ul() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ul = function() {
    return !!e;
  })();
}
function ft(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gf(e, t) {
  if (t && (ut(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ft(e);
}
function Ri(e) {
  var t = ul();
  return function() {
    var n = ia(e), a;
    if (t) {
      var o = ia(this).constructor;
      a = Reflect.construct(n, arguments, o);
    } else
      a = n.apply(this, arguments);
    return gf(this, a);
  };
}
var Ax = /* @__PURE__ */ function(e) {
  Ta(r, e);
  var t = Ri(r);
  function r() {
    return Or(this, r), t.apply(this, arguments);
  }
  return $r(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(v.Component);
function Bx(e, t) {
  var r = e.children, n = e.disabled, a = v.useRef(null), o = v.useRef(null), i = v.useContext(Uu), s = typeof r == "function", l = s ? r(a) : r, u = v.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), c = !s && /* @__PURE__ */ v.isValidElement(l) && Wn(l), d = c ? l.ref : null, m = Pi(d, a), h = function() {
    var b;
    return Cs(a.current) || // Support `nativeElement` format
    (a.current && ut(a.current) === "object" ? Cs((b = a.current) === null || b === void 0 ? void 0 : b.nativeElement) : null) || Cs(o.current);
  };
  v.useImperativeHandle(t, function() {
    return h();
  });
  var p = v.useRef(e);
  p.current = e;
  var f = v.useCallback(function(g) {
    var b = p.current, C = b.onResize, y = b.data, E = g.getBoundingClientRect(), D = E.width, S = E.height, x = g.offsetWidth, $ = g.offsetHeight, O = Math.floor(D), A = Math.floor(S);
    if (u.current.width !== O || u.current.height !== A || u.current.offsetWidth !== x || u.current.offsetHeight !== $) {
      var j = {
        width: O,
        height: A,
        offsetWidth: x,
        offsetHeight: $
      };
      u.current = j;
      var N = x === Math.round(D) ? D : x, B = $ === Math.round(S) ? S : $, P = Y(Y({}, j), {}, {
        offsetWidth: N,
        offsetHeight: B
      });
      i == null || i(P, g, y), C && Promise.resolve().then(function() {
        C(P, g);
      });
    }
  }, []);
  return v.useEffect(function() {
    var g = h();
    return g && !n && Ox(g, f), function() {
      return $x(g, f);
    };
  }, [a.current, n]), /* @__PURE__ */ v.createElement(Ax, {
    ref: o
  }, c ? /* @__PURE__ */ v.cloneElement(l, {
    ref: m
  }) : l);
}
var Kp = /* @__PURE__ */ v.forwardRef(Bx);
process.env.NODE_ENV !== "production" && (Kp.displayName = "SingleObserver");
var Fx = "rc-observer-key";
function Px(e, t) {
  var r = e.children, n = typeof r == "function" ? [r] : on(r);
  return process.env.NODE_ENV !== "production" && (n.length > 1 ? yo(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && yo(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(a, o) {
    var i = (a == null ? void 0 : a.key) || "".concat(Fx, "-").concat(o);
    return /* @__PURE__ */ v.createElement(Kp, _e({}, e, {
      key: i,
      ref: o === 0 ? t : void 0
    }), a);
  });
}
var sa = /* @__PURE__ */ v.forwardRef(Px);
process.env.NODE_ENV !== "production" && (sa.displayName = "ResizeObserver");
sa.Collection = sx;
function Cr(e, t) {
  var r = Y({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
function Yu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Rx(e) {
  if (Array.isArray(e))
    return Yu(e);
}
function Up(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function pf(e, t) {
  if (e) {
    if (typeof e == "string")
      return Yu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Yu(e, t);
  }
}
function Nx() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Oe(e) {
  return Rx(e) || Up(e) || pf(e) || Nx();
}
var Gp = function(t) {
  return +setTimeout(t, 16);
}, Xp = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Gp = function(t) {
  return window.requestAnimationFrame(t);
}, Xp = function(t) {
  return window.cancelAnimationFrame(t);
});
var Tv = 0, cl = /* @__PURE__ */ new Map();
function Yp(e) {
  cl.delete(e);
}
var Ht = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Tv += 1;
  var n = Tv;
  function a(o) {
    if (o === 0)
      Yp(n), t();
    else {
      var i = Gp(function() {
        a(o - 1);
      });
      cl.set(n, i);
    }
  }
  return a(r), n;
};
Ht.cancel = function(e) {
  var t = cl.get(e);
  return Yp(e), Xp(t);
};
process.env.NODE_ENV !== "production" && (Ht.ids = function() {
  return cl;
});
function Zp(e) {
  if (Array.isArray(e))
    return e;
}
function Ix(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, o, i, s = [], l = !0, u = !1;
    try {
      if (o = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        l = !1;
      } else
        for (; !(l = (n = o.call(r)).done) && (s.push(n.value), s.length !== t); l = !0)
          ;
    } catch (c) {
      u = !0, a = c;
    } finally {
      try {
        if (!l && r.return != null && (i = r.return(), Object(i) !== i))
          return;
      } finally {
        if (u)
          throw a;
      }
    }
    return s;
  }
}
function Qp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ue(e, t) {
  return Zp(e) || Ix(e, t) || pf(e, t) || Qp();
}
function yi(e) {
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
function pr() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Tx(e, t) {
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
var Mv = "data-rc-order", jv = "data-rc-priority", Mx = "rc-util-key", Zu = /* @__PURE__ */ new Map();
function Jp() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Mx;
}
function fl(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function jx(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function hf(e) {
  return Array.from((Zu.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function eh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!pr())
    return null;
  var r = t.csp, n = t.prepend, a = t.priority, o = a === void 0 ? 0 : a, i = jx(n), s = i === "prependQueue", l = document.createElement("style");
  l.setAttribute(Mv, i), s && o && l.setAttribute(jv, "".concat(o)), r != null && r.nonce && (l.nonce = r == null ? void 0 : r.nonce), l.innerHTML = e;
  var u = fl(t), c = u.firstChild;
  if (n) {
    if (s) {
      var d = (t.styles || hf(u)).filter(function(m) {
        if (!["prepend", "prependQueue"].includes(m.getAttribute(Mv)))
          return !1;
        var h = Number(m.getAttribute(jv) || 0);
        return o >= h;
      });
      if (d.length)
        return u.insertBefore(l, d[d.length - 1].nextSibling), l;
    }
    u.insertBefore(l, c);
  } else
    u.appendChild(l);
  return l;
}
function th(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = fl(t);
  return (t.styles || hf(r)).find(function(n) {
    return n.getAttribute(Jp(t)) === e;
  });
}
function Ci(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = th(e, t);
  if (r) {
    var n = fl(t);
    n.removeChild(r);
  }
}
function _x(e, t) {
  var r = Zu.get(e);
  if (!r || !Tx(document, r)) {
    var n = eh("", t), a = n.parentNode;
    Zu.set(e, a), e.removeChild(n);
  }
}
function Tn(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = fl(r), a = hf(n), o = Y(Y({}, r), {}, {
    styles: a
  });
  _x(n, o);
  var i = th(t, o);
  if (i) {
    var s, l;
    if ((s = o.csp) !== null && s !== void 0 && s.nonce && i.nonce !== ((l = o.csp) === null || l === void 0 ? void 0 : l.nonce)) {
      var u;
      i.nonce = (u = o.csp) === null || u === void 0 ? void 0 : u.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var c = eh(e, o);
  return c.setAttribute(Jp(o), t), c;
}
function Lx(e, t) {
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
  var r = Lx(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Eo(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function a(o, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, l = n.has(o);
    if (yt(!l, "Warning: There may be circular references"), l)
      return !1;
    if (o === i)
      return !0;
    if (r && s > 1)
      return !1;
    n.add(o);
    var u = s + 1;
    if (Array.isArray(o)) {
      if (!Array.isArray(i) || o.length !== i.length)
        return !1;
      for (var c = 0; c < o.length; c++)
        if (!a(o[c], i[c], u))
          return !1;
      return !0;
    }
    if (o && i && ut(o) === "object" && ut(i) === "object") {
      var d = Object.keys(o);
      return d.length !== Object.keys(i).length ? !1 : d.every(function(m) {
        return a(o[m], i[m], u);
      });
    }
    return !1;
  }
  return a(e, t);
}
var kx = "%";
function Qu(e) {
  return e.join(kx);
}
var zx = /* @__PURE__ */ function() {
  function e(t) {
    Or(this, e), K(this, "instanceId", void 0), K(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return $r(e, [{
    key: "get",
    value: function(r) {
      return this.opGet(Qu(r));
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
      return this.opUpdate(Qu(r), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(r, n) {
      var a = this.cache.get(r), o = n(a);
      o === null ? this.cache.delete(r) : this.cache.set(r, o);
    }
  }]), e;
}(), Vx = ["children"], wo = "data-token-hash", nn = "data-css-hash", Hx = "data-cache-path", na = "__cssinjs_instance__";
function rh() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(nn, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(a) {
      a[na] = a[na] || e, a[na] === e && document.head.insertBefore(a, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(nn, "]"))).forEach(function(a) {
      var o = a.getAttribute(nn);
      if (n[o]) {
        if (a[na] === e) {
          var i;
          (i = a.parentNode) === null || i === void 0 || i.removeChild(a);
        }
      } else
        n[o] = !0;
    });
  }
  return new zx(e);
}
var So = /* @__PURE__ */ v.createContext({
  hashPriority: "low",
  cache: rh(),
  defaultCache: !0
}), Wx = function(t) {
  var r = t.children, n = ct(t, Vx), a = v.useContext(So), o = Fi(function() {
    var i = Y({}, a);
    Object.keys(n).forEach(function(l) {
      var u = n[l];
      n[l] !== void 0 && (i[l] = u);
    });
    var s = n.cache;
    return i.cache = i.cache || rh(), i.defaultCache = !s && a.defaultCache, i;
  }, [a, n], function(i, s) {
    return !Eo(i[0], s[0], !0) || !Eo(i[1], s[1], !0);
  });
  return /* @__PURE__ */ v.createElement(So.Provider, {
    value: o
  }, r);
};
function qx(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var bf = /* @__PURE__ */ function() {
  function e() {
    Or(this, e), K(this, "cache", void 0), K(this, "keys", void 0), K(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return $r(e, [{
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
          var l;
          i = (l = i) === null || l === void 0 || (l = l.map) === null || l === void 0 ? void 0 : l.get(s);
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
          var o = this.keys.reduce(function(u, c) {
            var d = ue(u, 2), m = d[1];
            return a.internalGet(c)[1] < m ? [c, a.internalGet(c)[1]] : u;
          }, [this.keys[0], this.cacheCallTimes]), i = ue(o, 1), s = i[0];
          this.delete(s);
        }
        this.keys.push(r);
      }
      var l = this.cache;
      r.forEach(function(u, c) {
        if (c === r.length - 1)
          l.set(u, {
            value: [n, a.cacheCallTimes++]
          });
        else {
          var d = l.get(u);
          d ? d.map || (d.map = /* @__PURE__ */ new Map()) : l.set(u, {
            map: /* @__PURE__ */ new Map()
          }), l = l.get(u).map;
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
          return !qx(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
K(bf, "MAX_CACHE_SIZE", 20);
K(bf, "MAX_CACHE_OFFSET", 5);
var _v = 0, nh = /* @__PURE__ */ function() {
  function e(t) {
    Or(this, e), K(this, "derivatives", void 0), K(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = _v, t.length === 0 && yo(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), _v += 1;
  }
  return $r(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, a) {
        return a(r, n);
      }, void 0);
    }
  }]), e;
}(), Wl = new bf();
function Ei(e) {
  var t = Array.isArray(e) ? e : [e];
  return Wl.has(t) || Wl.set(t, new nh(t)), Wl.get(t);
}
var Kx = /* @__PURE__ */ new WeakMap(), ql = {};
function Ux(e, t) {
  for (var r = Kx, n = 0; n < t.length; n += 1) {
    var a = t[n];
    r.has(a) || r.set(a, /* @__PURE__ */ new WeakMap()), r = r.get(a);
  }
  return r.has(ql) || r.set(ql, e()), r.get(ql);
}
var Lv = /* @__PURE__ */ new WeakMap();
function ai(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = Lv.get(e) || "";
  return r || (Object.keys(e).forEach(function(n) {
    var a = e[n];
    r += n, a instanceof nh ? r += a.id : a && ut(a) === "object" ? r += ai(a, t) : r += a;
  }), t && (r = yi(r)), Lv.set(e, r)), r;
}
function kv(e, t) {
  return yi("".concat(t, "_").concat(ai(e, !0)));
}
var Ju = pr();
function we(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function zs(e, t, r) {
  var n, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (o)
    return e;
  var i = Y(Y({}, a), {}, (n = {}, K(n, wo, t), K(n, nn, r), n)), s = Object.keys(i).map(function(l) {
    var u = i[l];
    return u ? "".concat(l, '="').concat(u, '"') : null;
  }).filter(function(l) {
    return l;
  }).join(" ");
  return "<style ".concat(s, ">").concat(e, "</style>");
}
var ah = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(r ? "".concat(r, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Gx = function(t, r, n) {
  return Object.keys(t).length ? ".".concat(r).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(a) {
    var o = ue(a, 2), i = o[0], s = o[1];
    return "".concat(i, ":").concat(s, ";");
  }).join(""), "}") : "";
}, oh = function(t, r, n) {
  var a = {}, o = {};
  return Object.entries(t).forEach(function(i) {
    var s, l, u = ue(i, 2), c = u[0], d = u[1];
    if (n != null && (s = n.preserve) !== null && s !== void 0 && s[c])
      o[c] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(n != null && (l = n.ignore) !== null && l !== void 0 && l[c])) {
      var m, h = ah(c, n == null ? void 0 : n.prefix);
      a[h] = typeof d == "number" && !(n != null && (m = n.unitless) !== null && m !== void 0 && m[c]) ? "".concat(d, "px") : String(d), o[c] = "var(".concat(h, ")");
    }
  }), [o, Gx(a, r, {
    scope: n == null ? void 0 : n.scope
  })];
}, zv = process.env.NODE_ENV !== "test" && pr() ? v.useLayoutEffect : v.useEffect, jt = function(t, r) {
  var n = v.useRef(!0);
  zv(function() {
    return t(n.current);
  }, r), zv(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, Vv = function(t, r) {
  jt(function(n) {
    if (!n)
      return t();
  }, r);
}, Xx = Y({}, v), Hv = Xx.useInsertionEffect, Yx = function(t, r, n) {
  v.useMemo(t, n), jt(function() {
    return r(!0);
  }, n);
}, Zx = Hv ? function(e, t, r) {
  return Hv(function() {
    return e(), t();
  }, r);
} : Yx, Qx = Y({}, v), Jx = Qx.useInsertionEffect, eO = function(t) {
  var r = [], n = !1;
  function a(o) {
    if (n) {
      process.env.NODE_ENV !== "production" && yo(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
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
}, tO = function() {
  return function(t) {
    t();
  };
}, rO = typeof Jx < "u" ? eO : tO;
function nO() {
  return !1;
}
var ec = !1;
function aO() {
  return ec;
}
const oO = process.env.NODE_ENV === "production" ? nO : aO;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Kl = window;
  if (typeof Kl.webpackHotUpdate == "function") {
    var iO = Kl.webpackHotUpdate;
    Kl.webpackHotUpdate = function() {
      return ec = !0, setTimeout(function() {
        ec = !1;
      }, 0), iO.apply(void 0, arguments);
    };
  }
}
function yf(e, t, r, n, a) {
  var o = v.useContext(So), i = o.cache, s = [e].concat(Oe(t)), l = Qu(s), u = rO([l]), c = oO(), d = function(f) {
    i.opUpdate(l, function(g) {
      var b = g || [void 0, void 0], C = ue(b, 2), y = C[0], E = y === void 0 ? 0 : y, D = C[1], S = D;
      process.env.NODE_ENV !== "production" && D && c && (n == null || n(S, c), S = null);
      var x = S || r(), $ = [E, x];
      return f ? f($) : $;
    });
  };
  v.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [l]
    /* eslint-enable */
  );
  var m = i.opGet(l);
  process.env.NODE_ENV !== "production" && !m && (d(), m = i.opGet(l));
  var h = m[1];
  return Zx(function() {
    a == null || a(h);
  }, function(p) {
    return d(function(f) {
      var g = ue(f, 2), b = g[0], C = g[1];
      return p && b === 0 && (a == null || a(h)), [b + 1, C];
    }), function() {
      i.opUpdate(l, function(f) {
        var g = f || [], b = ue(g, 2), C = b[0], y = C === void 0 ? 0 : C, E = b[1], D = y - 1;
        return D === 0 ? (u(function() {
          (p || !i.opGet(l)) && (n == null || n(E, !1));
        }), null) : [y - 1, E];
      });
    };
  }, [l]), h;
}
var sO = {}, lO = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", pa = /* @__PURE__ */ new Map();
function uO(e) {
  pa.set(e, (pa.get(e) || 0) + 1);
}
function cO(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(wo, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[na] === t) {
        var a;
        (a = n.parentNode) === null || a === void 0 || a.removeChild(n);
      }
    });
  }
}
var fO = 0;
function dO(e, t) {
  pa.set(e, (pa.get(e) || 0) - 1);
  var r = Array.from(pa.keys()), n = r.filter(function(a) {
    var o = pa.get(a) || 0;
    return o <= 0;
  });
  r.length - n.length > fO && n.forEach(function(a) {
    cO(a, t), pa.delete(a);
  });
}
var ih = function(t, r, n, a) {
  var o = n.getDerivativeToken(t), i = Y(Y({}, o), r);
  return a && (i = a(i)), i;
}, sh = "token";
function vO(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Ct(So), a = n.cache.instanceId, o = n.container, i = r.salt, s = i === void 0 ? "" : i, l = r.override, u = l === void 0 ? sO : l, c = r.formatToken, d = r.getComputedToken, m = r.cssVar, h = Ux(function() {
    return Object.assign.apply(Object, [{}].concat(Oe(t)));
  }, t), p = ai(h), f = ai(u), g = m ? ai(m) : "", b = yf(sh, [s, e.id, p, f, g], function() {
    var C, y = d ? d(h, u, e) : ih(h, u, e, c), E = Y({}, y), D = "";
    if (m) {
      var S = oh(y, m.key, {
        prefix: m.prefix,
        ignore: m.ignore,
        unitless: m.unitless,
        preserve: m.preserve
      }), x = ue(S, 2);
      y = x[0], D = x[1];
    }
    var $ = kv(y, s);
    y._tokenKey = $, E._tokenKey = kv(E, s);
    var O = (C = m == null ? void 0 : m.key) !== null && C !== void 0 ? C : $;
    y._themeKey = O, uO(O);
    var A = "".concat(lO, "-").concat(yi($));
    return y._hashId = A, [y, A, E, D, (m == null ? void 0 : m.key) || ""];
  }, function(C) {
    dO(C[0]._themeKey, a);
  }, function(C) {
    var y = ue(C, 4), E = y[0], D = y[3];
    if (m && D) {
      var S = Tn(D, yi("css-variables-".concat(E._themeKey)), {
        mark: nn,
        prepend: "queue",
        attachTo: o,
        priority: -999
      });
      S[na] = a, S.setAttribute(wo, E._themeKey);
    }
  });
  return b;
}
var mO = function(t, r, n) {
  var a = ue(t, 5), o = a[2], i = a[3], s = a[4], l = n || {}, u = l.plain;
  if (!i)
    return null;
  var c = o._tokenKey, d = -999, m = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, h = zs(i, s, c, m, u);
  return [d, c, h];
}, gO = {
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
}, lh = "comm", uh = "rule", ch = "decl", pO = "@import", hO = "@keyframes", bO = "@layer", fh = Math.abs, Cf = String.fromCharCode;
function dh(e) {
  return e.trim();
}
function Es(e, t, r) {
  return e.replace(t, r);
}
function yO(e, t, r) {
  return e.indexOf(t, r);
}
function wi(e, t) {
  return e.charCodeAt(t) | 0;
}
function Si(e, t, r) {
  return e.slice(t, r);
}
function Pn(e) {
  return e.length;
}
function CO(e) {
  return e.length;
}
function Qi(e, t) {
  return t.push(e), e;
}
var dl = 1, Do = 1, vh = 0, Kr = 0, Kt = 0, Bo = "";
function Ef(e, t, r, n, a, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: a, children: o, line: dl, column: Do, length: i, return: "", siblings: s };
}
function EO() {
  return Kt;
}
function wO() {
  return Kt = Kr > 0 ? wi(Bo, --Kr) : 0, Do--, Kt === 10 && (Do = 1, dl--), Kt;
}
function an() {
  return Kt = Kr < vh ? wi(Bo, Kr++) : 0, Do++, Kt === 10 && (Do = 1, dl++), Kt;
}
function xa() {
  return wi(Bo, Kr);
}
function ws() {
  return Kr;
}
function vl(e, t) {
  return Si(Bo, e, t);
}
function tc(e) {
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
function SO(e) {
  return dl = Do = 1, vh = Pn(Bo = e), Kr = 0, [];
}
function DO(e) {
  return Bo = "", e;
}
function Ul(e) {
  return dh(vl(Kr - 1, rc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function xO(e) {
  for (; (Kt = xa()) && Kt < 33; )
    an();
  return tc(e) > 2 || tc(Kt) > 3 ? "" : " ";
}
function OO(e, t) {
  for (; --t && an() && !(Kt < 48 || Kt > 102 || Kt > 57 && Kt < 65 || Kt > 70 && Kt < 97); )
    ;
  return vl(e, ws() + (t < 6 && xa() == 32 && an() == 32));
}
function rc(e) {
  for (; an(); )
    switch (Kt) {
      case e:
        return Kr;
      case 34:
      case 39:
        e !== 34 && e !== 39 && rc(Kt);
        break;
      case 40:
        e === 41 && rc(e);
        break;
      case 92:
        an();
        break;
    }
  return Kr;
}
function $O(e, t) {
  for (; an() && e + Kt !== 57; )
    if (e + Kt === 84 && xa() === 47)
      break;
  return "/*" + vl(t, Kr - 1) + "*" + Cf(e === 47 ? e : an());
}
function AO(e) {
  for (; !tc(xa()); )
    an();
  return vl(e, Kr);
}
function BO(e) {
  return DO(Ss("", null, null, null, [""], e = SO(e), 0, [0], e));
}
function Ss(e, t, r, n, a, o, i, s, l) {
  for (var u = 0, c = 0, d = i, m = 0, h = 0, p = 0, f = 1, g = 1, b = 1, C = 0, y = "", E = a, D = o, S = n, x = y; g; )
    switch (p = C, C = an()) {
      case 40:
        if (p != 108 && wi(x, d - 1) == 58) {
          yO(x += Es(Ul(C), "&", "&\f"), "&\f", fh(u ? s[u - 1] : 0)) != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Ul(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += xO(p);
        break;
      case 92:
        x += OO(ws() - 1, 7);
        continue;
      case 47:
        switch (xa()) {
          case 42:
          case 47:
            Qi(FO($O(an(), ws()), t, r, l), l);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * f:
        s[u++] = Pn(x) * b;
      case 125 * f:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            g = 0;
          case 59 + c:
            b == -1 && (x = Es(x, /\f/g, "")), h > 0 && Pn(x) - d && Qi(h > 32 ? qv(x + ";", n, r, d - 1, l) : qv(Es(x, " ", "") + ";", n, r, d - 2, l), l);
            break;
          case 59:
            x += ";";
          default:
            if (Qi(S = Wv(x, t, r, u, c, a, s, y, E = [], D = [], d, o), o), C === 123)
              if (c === 0)
                Ss(x, t, S, S, E, o, d, s, D);
              else
                switch (m === 99 && wi(x, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ss(e, S, S, n && Qi(Wv(e, S, S, 0, 0, a, s, y, a, E = [], d, D), D), a, D, d, s, n ? E : D);
                    break;
                  default:
                    Ss(x, S, S, S, [""], D, 0, s, D);
                }
        }
        u = c = h = 0, f = b = 1, y = x = "", d = i;
        break;
      case 58:
        d = 1 + Pn(x), h = p;
      default:
        if (f < 1) {
          if (C == 123)
            --f;
          else if (C == 125 && f++ == 0 && wO() == 125)
            continue;
        }
        switch (x += Cf(C), C * f) {
          case 38:
            b = c > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            s[u++] = (Pn(x) - 1) * b, b = 1;
            break;
          case 64:
            xa() === 45 && (x += Ul(an())), m = xa(), c = d = Pn(y = x += AO(ws())), C++;
            break;
          case 45:
            p === 45 && Pn(x) == 2 && (f = 0);
        }
    }
  return o;
}
function Wv(e, t, r, n, a, o, i, s, l, u, c, d) {
  for (var m = a - 1, h = a === 0 ? o : [""], p = CO(h), f = 0, g = 0, b = 0; f < n; ++f)
    for (var C = 0, y = Si(e, m + 1, m = fh(g = i[f])), E = e; C < p; ++C)
      (E = dh(g > 0 ? h[C] + " " + y : Es(y, /&\f/g, h[C]))) && (l[b++] = E);
  return Ef(e, t, r, a === 0 ? uh : s, l, u, c, d);
}
function FO(e, t, r, n) {
  return Ef(e, t, r, lh, Cf(EO()), Si(e, 2, -2), 0, n);
}
function qv(e, t, r, n, a) {
  return Ef(e, t, r, ch, Si(e, 0, n), Si(e, n + 1, -1), n, a);
}
function nc(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function PO(e, t, r, n) {
  switch (e.type) {
    case bO:
      if (e.children.length)
        break;
    case pO:
    case ch:
      return e.return = e.return || e.value;
    case lh:
      return "";
    case hO:
      return e.return = e.value + "{" + nc(e.children, n) + "}";
    case uh:
      if (!Pn(e.value = e.props.join(",")))
        return "";
  }
  return Pn(r = nc(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function mh(e, t) {
  var r = t.path, n = t.parentSelectors;
  yt(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var RO = function(t, r, n) {
  if (t === "content") {
    var a = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, o = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || o.indexOf(r) === -1 && !a.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && mh("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, NO = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && mh("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, Kv = "data-ant-cssinjs-cache-path", gh = "_FILE_STYLE__", Oa, ph = !0;
function IO() {
  if (!Oa && (Oa = {}, pr())) {
    var e = document.createElement("div");
    e.className = Kv, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(a) {
      var o = a.split(":"), i = ue(o, 2), s = i[0], l = i[1];
      Oa[s] = l;
    });
    var r = document.querySelector("style[".concat(Kv, "]"));
    if (r) {
      var n;
      ph = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function TO(e) {
  return IO(), !!Oa[e];
}
function MO(e) {
  var t = Oa[e], r = null;
  if (t && pr())
    if (ph)
      r = gh;
    else {
      var n = document.querySelector("style[".concat(nn, '="').concat(Oa[e], '"]'));
      n ? r = n.innerHTML : delete Oa[e];
    }
  return [r, t];
}
var hh = "_skip_check_", bh = "_multi_value_";
function Ds(e) {
  var t = nc(BO(e), PO);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function jO(e) {
  return ut(e) === "object" && e && (hh in e || bh in e);
}
function _O(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), a = r === "low" ? ":where(".concat(n, ")") : n, o = e.split(",").map(function(i) {
    var s, l = i.trim().split(/\s+/), u = l[0] || "", c = ((s = u.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return u = "".concat(c).concat(a).concat(u.slice(c.length)), [u].concat(Oe(l.slice(1))).join(" ");
  });
  return o.join(",");
}
var LO = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = n.root, o = n.injectHash, i = n.parentSelectors, s = r.hashId, l = r.layer, u = r.path, c = r.hashPriority, d = r.transformers, m = d === void 0 ? [] : d, h = r.linters, p = h === void 0 ? [] : h, f = "", g = {};
  function b(E) {
    var D = E.getName(s);
    if (!g[D]) {
      var S = e(E.style, r, {
        root: !1,
        parentSelectors: i
      }), x = ue(S, 1), $ = x[0];
      g[D] = "@keyframes ".concat(E.getName(s)).concat($);
    }
  }
  function C(E) {
    var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return E.forEach(function(S) {
      Array.isArray(S) ? C(S, D) : S && D.push(S);
    }), D;
  }
  var y = C(Array.isArray(t) ? t : [t]);
  return y.forEach(function(E) {
    var D = typeof E == "string" && !a ? {} : E;
    if (typeof D == "string")
      f += "".concat(D, `
`);
    else if (D._keyframe)
      b(D);
    else {
      var S = m.reduce(function(x, $) {
        var O;
        return ($ == null || (O = $.visit) === null || O === void 0 ? void 0 : O.call($, x)) || x;
      }, D);
      Object.keys(S).forEach(function(x) {
        var $ = S[x];
        if (ut($) === "object" && $ && (x !== "animationName" || !$._keyframe) && !jO($)) {
          var O = !1, A = x.trim(), j = !1;
          (a || o) && s ? A.startsWith("@") ? O = !0 : A = _O(x, s, c) : a && !s && (A === "&" || A === "") && (A = "", j = !0);
          var N = e($, r, {
            root: j,
            injectHash: O,
            parentSelectors: [].concat(Oe(i), [A])
          }), B = ue(N, 2), P = B[0], R = B[1];
          g = Y(Y({}, g), R), f += "".concat(A).concat(P);
        } else {
          let I = function(k, L) {
            process.env.NODE_ENV !== "production" && (ut($) !== "object" || !($ != null && $[hh])) && [RO, NO].concat(Oe(p)).forEach(function(Z) {
              return Z(k, L, {
                path: u,
                hashId: s,
                parentSelectors: i
              });
            });
            var W = k.replace(/[A-Z]/g, function(Z) {
              return "-".concat(Z.toLowerCase());
            }), U = L;
            !gO[k] && typeof U == "number" && U !== 0 && (U = "".concat(U, "px")), k === "animationName" && L !== null && L !== void 0 && L._keyframe && (b(L), U = L.getName(s)), f += "".concat(W, ":").concat(U, ";");
          };
          var T, F = (T = $ == null ? void 0 : $.value) !== null && T !== void 0 ? T : $;
          ut($) === "object" && $ !== null && $ !== void 0 && $[bh] && Array.isArray(F) ? F.forEach(function(k) {
            I(x, k);
          }) : I(x, F);
        }
      });
    }
  }), a ? l && (f = "@layer ".concat(l.name, " {").concat(f, "}"), l.dependencies && (g["@layer ".concat(l.name)] = l.dependencies.map(function(E) {
    return "@layer ".concat(E, ", ").concat(l.name, ";");
  }).join(`
`))) : f = "{".concat(f, "}"), [f, g];
};
function yh(e, t) {
  return yi("".concat(e.join("%")).concat(t));
}
function kO() {
  return null;
}
var Ch = "style";
function ac(e, t) {
  var r = e.token, n = e.path, a = e.hashId, o = e.layer, i = e.nonce, s = e.clientOnly, l = e.order, u = l === void 0 ? 0 : l, c = v.useContext(So), d = c.autoClear, m = c.mock, h = c.defaultCache, p = c.hashPriority, f = c.container, g = c.ssrInline, b = c.transformers, C = c.linters, y = c.cache, E = c.layer, D = r._tokenKey, S = [D];
  E && S.push("layer"), S.push.apply(S, Oe(n));
  var x = Ju;
  process.env.NODE_ENV !== "production" && m !== void 0 && (x = m === "client");
  var $ = yf(
    Ch,
    S,
    // Create cache if needed
    function() {
      var B = S.join("|");
      if (TO(B)) {
        var P = MO(B), R = ue(P, 2), T = R[0], F = R[1];
        if (T)
          return [T, D, F, {}, s, u];
      }
      var I = t(), k = LO(I, {
        hashId: a,
        hashPriority: p,
        layer: E ? o : void 0,
        path: n.join("-"),
        transformers: b,
        linters: C
      }), L = ue(k, 2), W = L[0], U = L[1], Z = Ds(W), M = yh(S, Z);
      return [Z, D, M, U, s, u];
    },
    // Remove cache if no need
    function(B, P) {
      var R = ue(B, 3), T = R[2];
      (P || d) && Ju && Ci(T, {
        mark: nn
      });
    },
    // Effect: Inject style here
    function(B) {
      var P = ue(B, 4), R = P[0];
      P[1];
      var T = P[2], F = P[3];
      if (x && R !== gh) {
        var I = {
          mark: nn,
          prepend: E ? !1 : "queue",
          attachTo: f,
          priority: u
        }, k = typeof i == "function" ? i() : i;
        k && (I.csp = {
          nonce: k
        });
        var L = [], W = [];
        Object.keys(F).forEach(function(Z) {
          Z.startsWith("@layer") ? L.push(Z) : W.push(Z);
        }), L.forEach(function(Z) {
          Tn(Ds(F[Z]), "_layer-".concat(Z), Y(Y({}, I), {}, {
            prepend: !0
          }));
        });
        var U = Tn(R, T, I);
        U[na] = y.instanceId, U.setAttribute(wo, D), process.env.NODE_ENV !== "production" && U.setAttribute(Hx, S.join("|")), W.forEach(function(Z) {
          Tn(Ds(F[Z]), "_effect-".concat(Z), I);
        });
      }
    }
  ), O = ue($, 3), A = O[0], j = O[1], N = O[2];
  return function(B) {
    var P;
    if (!g || x || !h)
      P = /* @__PURE__ */ v.createElement(kO, null);
    else {
      var R;
      P = /* @__PURE__ */ v.createElement("style", _e({}, (R = {}, K(R, wo, j), K(R, nn, N), R), {
        dangerouslySetInnerHTML: {
          __html: A
        }
      }));
    }
    return /* @__PURE__ */ v.createElement(v.Fragment, null, P, B);
  };
}
var zO = function(t, r, n) {
  var a = ue(t, 6), o = a[0], i = a[1], s = a[2], l = a[3], u = a[4], c = a[5], d = n || {}, m = d.plain;
  if (u)
    return null;
  var h = o, p = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(c)
  };
  return h = zs(o, i, s, p, m), l && Object.keys(l).forEach(function(f) {
    if (!r[f]) {
      r[f] = !0;
      var g = Ds(l[f]), b = zs(g, i, "_effect-".concat(f), p, m);
      f.startsWith("@layer") ? h = b + h : h += b;
    }
  }), [c, s, h];
}, Eh = "cssVar", VO = function(t, r) {
  var n = t.key, a = t.prefix, o = t.unitless, i = t.ignore, s = t.token, l = t.scope, u = l === void 0 ? "" : l, c = Ct(So), d = c.cache.instanceId, m = c.container, h = s._tokenKey, p = [].concat(Oe(t.path), [n, u, h]), f = yf(Eh, p, function() {
    var g = r(), b = oh(g, n, {
      prefix: a,
      unitless: o,
      ignore: i,
      scope: u
    }), C = ue(b, 2), y = C[0], E = C[1], D = yh(p, E);
    return [y, E, D, n];
  }, function(g) {
    var b = ue(g, 3), C = b[2];
    Ju && Ci(C, {
      mark: nn
    });
  }, function(g) {
    var b = ue(g, 3), C = b[1], y = b[2];
    if (C) {
      var E = Tn(C, y, {
        mark: nn,
        prepend: "queue",
        attachTo: m,
        priority: -999
      });
      E[na] = d, E.setAttribute(wo, n);
    }
  });
  return f;
}, HO = function(t, r, n) {
  var a = ue(t, 4), o = a[1], i = a[2], s = a[3], l = n || {}, u = l.plain;
  if (!o)
    return null;
  var c = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(c)
  }, m = zs(o, s, i, d, u);
  return [c, i, m];
}, Wo;
Wo = {}, K(Wo, Ch, zO), K(Wo, sh, mO), K(Wo, Eh, HO);
var St = /* @__PURE__ */ function() {
  function e(t, r) {
    Or(this, e), K(this, "name", void 0), K(this, "style", void 0), K(this, "_keyframe", !0), this.name = t, this.style = r;
  }
  return $r(e, [{
    key: "getName",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return r ? "".concat(r, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function Ua(e) {
  return e.notSplit = !0, e;
}
Ua(["borderTop", "borderBottom"]), Ua(["borderTop"]), Ua(["borderBottom"]), Ua(["borderLeft", "borderRight"]), Ua(["borderLeft"]), Ua(["borderRight"]);
var wf = /* @__PURE__ */ _r({});
function WO(e) {
  return Zp(e) || Up(e) || pf(e) || Qp();
}
function bn(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function wh(e, t, r, n) {
  if (!t.length)
    return r;
  var a = WO(t), o = a[0], i = a.slice(1), s;
  return !e && typeof o == "number" ? s = [] : Array.isArray(e) ? s = Oe(e) : s = Y({}, e), n && r === void 0 && i.length === 1 ? delete s[o][i[0]] : s[o] = wh(s[o], i, r, n), s;
}
function en(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !bn(e, t.slice(0, -1)) ? e : wh(e, t, r, n);
}
function qO(e) {
  return ut(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Uv(e) {
  return Array.isArray(e) ? [] : {};
}
var KO = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function co() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = Uv(t[0]);
  return t.forEach(function(a) {
    function o(i, s) {
      var l = new Set(s), u = bn(a, i), c = Array.isArray(u);
      if (c || qO(u)) {
        if (!l.has(u)) {
          l.add(u);
          var d = bn(n, i);
          c ? n = en(n, i, []) : (!d || ut(d) !== "object") && (n = en(n, i, Uv(u))), KO(u).forEach(function(m) {
            o([].concat(Oe(i), [m]), l);
          });
        }
      } else
        n = en(n, i, u);
    }
    o([]);
  }), n;
}
function Sh() {
}
let Fn = null;
function UO() {
  Fn = null, Mp();
}
let Sf = Sh;
process.env.NODE_ENV !== "production" && (Sf = (e, t, r) => {
  yt(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && UO();
});
const Dh = /* @__PURE__ */ v.createContext({}), Wt = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = v.useContext(Dh), r = (n, a, o) => {
    if (!n)
      if (t === !1 && a === "deprecated") {
        const i = Fn;
        Fn || (Fn = {}), Fn[e] = Fn[e] || [], Fn[e].includes(o || "") || Fn[e].push(o || ""), i || console.warn("[antd] There exists deprecated usage in your code:", Fn);
      } else
        process.env.NODE_ENV !== "production" && Sf(n, e, o);
  };
  return r.deprecated = (n, a, o, i) => {
    r(n, "deprecated", `\`${a}\` is deprecated. Please use \`${o}\` instead.${i ? ` ${i}` : ""}`);
  }, r;
} : () => {
  const e = () => {
  };
  return e.deprecated = Sh, e;
}, Ni = Sf, xh = /* @__PURE__ */ _r(void 0);
var GO = {
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
}, XO = {
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
const YO = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Oh = YO, ZO = {
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
  }, XO),
  timePickerLocale: Object.assign({}, Oh)
}, Gv = ZO, Br = "${label} is not a valid ${type}", Ra = {
  locale: "en",
  Pagination: GO,
  DatePicker: Gv,
  TimePicker: Oh,
  Calendar: Gv,
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
        string: Br,
        method: Br,
        array: Br,
        object: Br,
        number: Br,
        date: Br,
        boolean: Br,
        integer: Br,
        float: Br,
        regexp: Br,
        email: Br,
        url: Br,
        hex: Br
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
Object.assign({}, Ra.Modal);
let xs = [];
const Xv = () => xs.reduce((e, t) => Object.assign(Object.assign({}, e), t), Ra.Modal);
function QO(e) {
  if (e) {
    const t = Object.assign({}, e);
    return xs.push(t), Xv(), () => {
      xs = xs.filter((r) => r !== t), Xv();
    };
  }
  Object.assign({}, Ra.Modal);
}
const JO = /* @__PURE__ */ _r(void 0), Df = JO, $h = (e, t) => {
  const r = v.useContext(Df), n = v.useMemo(() => {
    var o;
    const i = t || Ra[e], s = (o = r == null ? void 0 : r[e]) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, typeof i == "function" ? i() : i), s || {});
  }, [e, t, r]), a = v.useMemo(() => {
    const o = r == null ? void 0 : r.locale;
    return r != null && r.exist && !o ? Ra.locale : o;
  }, [r]);
  return [n, a];
}, Ah = "internalMark", Bh = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const o = Wt("LocaleProvider");
    process.env.NODE_ENV !== "production" && o(n === Ah, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  v.useEffect(() => QO(t && t.Modal), [t]);
  const a = v.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ v.createElement(Df.Provider, {
    value: a
  }, r);
};
process.env.NODE_ENV !== "production" && (Bh.displayName = "LocaleProvider");
const e$ = Bh;
function lr(e, t) {
  t$(e) && (e = "100%");
  var r = r$(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Ji(e) {
  return Math.min(1, Math.max(0, e));
}
function t$(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function r$(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Fh(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function es(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function ya(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function n$(e, t, r) {
  return {
    r: lr(e, 255) * 255,
    g: lr(t, 255) * 255,
    b: lr(r, 255) * 255
  };
}
function Yv(e, t, r) {
  e = lr(e, 255), t = lr(t, 255), r = lr(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), o = 0, i = 0, s = (n + a) / 2;
  if (n === a)
    i = 0, o = 0;
  else {
    var l = n - a;
    switch (i = s > 0.5 ? l / (2 - n - a) : l / (n + a), n) {
      case e:
        o = (t - r) / l + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / l + 2;
        break;
      case r:
        o = (e - t) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: i, l: s };
}
function Gl(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function a$(e, t, r) {
  var n, a, o;
  if (e = lr(e, 360), t = lr(t, 100), r = lr(r, 100), t === 0)
    a = r, o = r, n = r;
  else {
    var i = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - i;
    n = Gl(s, i, e + 1 / 3), a = Gl(s, i, e), o = Gl(s, i, e - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: o * 255 };
}
function oc(e, t, r) {
  e = lr(e, 255), t = lr(t, 255), r = lr(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), o = 0, i = n, s = n - a, l = n === 0 ? 0 : s / n;
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
  return { h: o, s: l, v: i };
}
function o$(e, t, r) {
  e = lr(e, 360) * 6, t = lr(t, 100), r = lr(r, 100);
  var n = Math.floor(e), a = e - n, o = r * (1 - t), i = r * (1 - a * t), s = r * (1 - (1 - a) * t), l = n % 6, u = [r, i, o, o, s, r][l], c = [s, r, r, i, o, o][l], d = [o, o, s, r, r, i][l];
  return { r: u * 255, g: c * 255, b: d * 255 };
}
function ic(e, t, r, n) {
  var a = [
    ya(Math.round(e).toString(16)),
    ya(Math.round(t).toString(16)),
    ya(Math.round(r).toString(16))
  ];
  return n && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function i$(e, t, r, n, a) {
  var o = [
    ya(Math.round(e).toString(16)),
    ya(Math.round(t).toString(16)),
    ya(Math.round(r).toString(16)),
    ya(s$(n))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function s$(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Zv(e) {
  return Pr(e) / 255;
}
function Pr(e) {
  return parseInt(e, 16);
}
function l$(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var sc = {
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
function oo(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, a = null, o = null, i = !1, s = !1;
  return typeof e == "string" && (e = f$(e)), typeof e == "object" && ($n(e.r) && $n(e.g) && $n(e.b) ? (t = n$(e.r, e.g, e.b), i = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : $n(e.h) && $n(e.s) && $n(e.v) ? (n = es(e.s), a = es(e.v), t = o$(e.h, n, a), i = !0, s = "hsv") : $n(e.h) && $n(e.s) && $n(e.l) && (n = es(e.s), o = es(e.l), t = a$(e.h, n, o), i = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = Fh(r), {
    ok: i,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var u$ = "[-\\+]?\\d+%?", c$ = "[-\\+]?\\d*\\.\\d+%?", aa = "(?:".concat(c$, ")|(?:").concat(u$, ")"), Xl = "[\\s|\\(]+(".concat(aa, ")[,|\\s]+(").concat(aa, ")[,|\\s]+(").concat(aa, ")\\s*\\)?"), Yl = "[\\s|\\(]+(".concat(aa, ")[,|\\s]+(").concat(aa, ")[,|\\s]+(").concat(aa, ")[,|\\s]+(").concat(aa, ")\\s*\\)?"), Jr = {
  CSS_UNIT: new RegExp(aa),
  rgb: new RegExp("rgb" + Xl),
  rgba: new RegExp("rgba" + Yl),
  hsl: new RegExp("hsl" + Xl),
  hsla: new RegExp("hsla" + Yl),
  hsv: new RegExp("hsv" + Xl),
  hsva: new RegExp("hsva" + Yl),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function f$(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (sc[e])
    e = sc[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = Jr.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = Jr.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = Jr.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = Jr.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = Jr.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = Jr.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = Jr.hex8.exec(e), r ? {
    r: Pr(r[1]),
    g: Pr(r[2]),
    b: Pr(r[3]),
    a: Zv(r[4]),
    format: t ? "name" : "hex8"
  } : (r = Jr.hex6.exec(e), r ? {
    r: Pr(r[1]),
    g: Pr(r[2]),
    b: Pr(r[3]),
    format: t ? "name" : "hex"
  } : (r = Jr.hex4.exec(e), r ? {
    r: Pr(r[1] + r[1]),
    g: Pr(r[2] + r[2]),
    b: Pr(r[3] + r[3]),
    a: Zv(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = Jr.hex3.exec(e), r ? {
    r: Pr(r[1] + r[1]),
    g: Pr(r[2] + r[2]),
    b: Pr(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function $n(e) {
  return !!Jr.CSS_UNIT.exec(String(e));
}
var sr = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = ""), r === void 0 && (r = {});
      var n;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = l$(t)), this.originalInput = t;
      var a = oo(t);
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
      return this.a = Fh(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = oc(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = oc(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Yv(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Yv(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), ic(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), i$(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(lr(r, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(r) {
        return Math.round(lr(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + ic(this.r, this.g, this.b, !1), r = 0, n = Object.entries(sc); r < n.length; r++) {
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
      return r.l += t / 100, r.l = Ji(r.l), new e(r);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l -= t / 100, r.l = Ji(r.l), new e(r);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s -= t / 100, r.s = Ji(r.s), new e(r);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s += t / 100, r.s = Ji(r.s), new e(r);
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
), ts = 2, Qv = 0.16, d$ = 0.05, v$ = 0.05, m$ = 0.15, Ph = 5, Rh = 4, g$ = [{
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
function Jv(e) {
  var t = e.r, r = e.g, n = e.b, a = oc(t, r, n);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function rs(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(ic(t, r, n, !1));
}
function p$(e, t, r) {
  var n = r / 100, a = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return a;
}
function em(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - ts * t : Math.round(e.h) + ts * t : n = r ? Math.round(e.h) + ts * t : Math.round(e.h) - ts * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function tm(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - Qv * t : t === Rh ? n = e.s + Qv : n = e.s + d$ * t, n > 1 && (n = 1), r && t === Ph && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function rm(e, t, r) {
  var n;
  return r ? n = e.v + v$ * t : n = e.v - m$ * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function _n(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = oo(e), a = Ph; a > 0; a -= 1) {
    var o = Jv(n), i = rs(oo({
      h: em(o, a, !0),
      s: tm(o, a, !0),
      v: rm(o, a, !0)
    }));
    r.push(i);
  }
  r.push(rs(n));
  for (var s = 1; s <= Rh; s += 1) {
    var l = Jv(n), u = rs(oo({
      h: em(l, s),
      s: tm(l, s),
      v: rm(l, s)
    }));
    r.push(u);
  }
  return t.theme === "dark" ? g$.map(function(c) {
    var d = c.index, m = c.opacity, h = rs(p$(oo(t.backgroundColor || "#141414"), oo(r[d]), m * 100));
    return h;
  }) : r;
}
var Zl = {
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
}, oi = {}, Ql = {};
Object.keys(Zl).forEach(function(e) {
  oi[e] = _n(Zl[e]), oi[e].primary = oi[e][5], Ql[e] = _n(Zl[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Ql[e].primary = Ql[e][5];
});
var h$ = oi.gold, b$ = oi.blue;
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
function y$(e) {
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
const xf = {
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
}, xo = Object.assign(Object.assign({}, xf), {
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
    colorPrimary: l,
    colorBgBase: u,
    colorTextBase: c
  } = e, d = r(l), m = r(a), h = r(o), p = r(i), f = r(s), g = n(u, c), b = e.colorLink || e.colorInfo, C = r(b);
  return Object.assign(Object.assign({}, g), {
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
    colorSuccessBg: m[1],
    colorSuccessBgHover: m[2],
    colorSuccessBorder: m[3],
    colorSuccessBorderHover: m[4],
    colorSuccessHover: m[4],
    colorSuccess: m[6],
    colorSuccessActive: m[7],
    colorSuccessTextHover: m[8],
    colorSuccessText: m[9],
    colorSuccessTextActive: m[10],
    colorErrorBg: p[1],
    colorErrorBgHover: p[2],
    colorErrorBorder: p[3],
    colorErrorBorderHover: p[4],
    colorErrorHover: p[5],
    colorError: p[6],
    colorErrorActive: p[7],
    colorErrorTextHover: p[8],
    colorErrorText: p[9],
    colorErrorTextActive: p[10],
    colorWarningBg: h[1],
    colorWarningBgHover: h[2],
    colorWarningBorder: h[3],
    colorWarningBorderHover: h[4],
    colorWarningHover: h[4],
    colorWarning: h[6],
    colorWarningActive: h[7],
    colorWarningTextHover: h[8],
    colorWarningText: h[9],
    colorWarningTextActive: h[10],
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
    colorLinkHover: C[4],
    colorLink: C[6],
    colorLinkActive: C[7],
    colorBgMask: new sr("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const C$ = (e) => {
  let t = e, r = e, n = e, a = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? a = 4 : e >= 8 && (a = 6), {
    borderRadius: e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: a
  };
};
function E$(e) {
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
  }, C$(n));
}
const An = (e, t) => new sr(e).setAlpha(t).toRgbString(), qo = (e, t) => new sr(e).darken(t).toHexString(), w$ = (e) => {
  const t = _n(e);
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
}, S$ = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: An(n, 0.88),
    colorTextSecondary: An(n, 0.65),
    colorTextTertiary: An(n, 0.45),
    colorTextQuaternary: An(n, 0.25),
    colorFill: An(n, 0.15),
    colorFillSecondary: An(n, 0.06),
    colorFillTertiary: An(n, 0.04),
    colorFillQuaternary: An(n, 0.02),
    colorBgLayout: qo(r, 4),
    colorBgContainer: qo(r, 0),
    colorBgElevated: qo(r, 0),
    colorBgSpotlight: An(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: qo(r, 15),
    colorBorderSecondary: qo(r, 6)
  };
};
function Os(e) {
  return (e + 8) / e;
}
function D$(e) {
  const t = new Array(10).fill(null).map((r, n) => {
    const a = n - 1, o = e * Math.pow(2.71828, a / 5), i = n > 1 ? Math.floor(o) : Math.ceil(o);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((r) => ({
    size: r,
    lineHeight: Os(r)
  }));
}
const Th = (e) => {
  const t = D$(e), r = t.map((c) => c.size), n = t.map((c) => c.lineHeight), a = r[1], o = r[0], i = r[2], s = n[1], l = n[0], u = n[2];
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
    lineHeightLG: u,
    lineHeightSM: l,
    fontHeight: Math.round(s * a),
    fontHeightLG: Math.round(u * i),
    fontHeightSM: Math.round(l * o),
    lineHeightHeading1: n[6],
    lineHeightHeading2: n[5],
    lineHeightHeading3: n[4],
    lineHeightHeading4: n[3],
    lineHeightHeading5: n[2]
  };
};
function Ii(e) {
  const t = Object.keys(xf).map((r) => {
    const n = _n(e[r]);
    return new Array(10).fill(1).reduce((a, o, i) => (a[`${r}-${i + 1}`] = n[i], a[`${r}${i + 1}`] = n[i], a), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Ih(e, {
    generateColorPalettes: w$,
    generateNeutralColorPalettes: S$
  })), Th(e.fontSize)), y$(e)), Nh(e)), E$(e));
}
const Mh = Ei(Ii), Vs = {
  token: xo,
  override: {
    override: xo
  },
  hashed: !0
}, jh = /* @__PURE__ */ Q.createContext(Vs), _h = "anticon", x$ = (e, t) => t || (e ? `ant-${e}` : "ant"), mt = /* @__PURE__ */ v.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: x$,
  iconPrefixCls: _h
}), O$ = `-ant-${Date.now()}-${Math.random()}`;
function $$(e, t) {
  const r = {}, n = (i, s) => {
    let l = i.clone();
    return l = (s == null ? void 0 : s(l)) || l, l.toRgbString();
  }, a = (i, s) => {
    const l = new sr(i), u = _n(l.toRgbString());
    r[`${s}-color`] = n(l), r[`${s}-color-disabled`] = u[1], r[`${s}-color-hover`] = u[4], r[`${s}-color-active`] = u[6], r[`${s}-color-outline`] = l.clone().setAlpha(0.2).toRgbString(), r[`${s}-color-deprecated-bg`] = u[0], r[`${s}-color-deprecated-border`] = u[2];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    const i = new sr(t.primaryColor), s = _n(i.toRgbString());
    s.forEach((u, c) => {
      r[`primary-${c + 1}`] = u;
    }), r["primary-color-deprecated-l-35"] = n(i, (u) => u.lighten(35)), r["primary-color-deprecated-l-20"] = n(i, (u) => u.lighten(20)), r["primary-color-deprecated-t-20"] = n(i, (u) => u.tint(20)), r["primary-color-deprecated-t-50"] = n(i, (u) => u.tint(50)), r["primary-color-deprecated-f-12"] = n(i, (u) => u.setAlpha(u.getAlpha() * 0.12));
    const l = new sr(s[0]);
    r["primary-color-active-deprecated-f-30"] = n(l, (u) => u.setAlpha(u.getAlpha() * 0.3)), r["primary-color-active-deprecated-d-02"] = n(l, (u) => u.darken(2));
  }
  return t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((i) => `--${e}-${i}: ${r[i]};`).join(`
`)}
  }
  `.trim();
}
function A$(e, t) {
  const r = $$(e, t);
  pr() ? Tn(r, `${O$}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Ni(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const lc = /* @__PURE__ */ v.createContext(!1), Lh = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = v.useContext(lc);
  return /* @__PURE__ */ v.createElement(lc.Provider, {
    value: r ?? n
  }, t);
}, Fo = lc, uc = /* @__PURE__ */ v.createContext(void 0), B$ = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = v.useContext(uc);
  return /* @__PURE__ */ v.createElement(uc.Provider, {
    value: r || n
  }, t);
}, Ti = uc;
function F$() {
  const e = Ct(Fo), t = Ct(Ti);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
const Hs = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], P$ = "5.13.3";
function Jl(e) {
  return e >= 0 && e <= 255;
}
function ns(e, t) {
  const {
    r,
    g: n,
    b: a,
    a: o
  } = new sr(e).toRgb();
  if (o < 1)
    return e;
  const {
    r: i,
    g: s,
    b: l
  } = new sr(t).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const c = Math.round((r - i * (1 - u)) / u), d = Math.round((n - s * (1 - u)) / u), m = Math.round((a - l * (1 - u)) / u);
    if (Jl(c) && Jl(d) && Jl(m))
      return new sr({
        r: c,
        g: d,
        b: m,
        a: Math.round(u * 100) / 100
      }).toRgbString();
  }
  return new sr({
    r,
    g: n,
    b: a,
    a: 1
  }).toRgbString();
}
var R$ = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function Of(e) {
  const {
    override: t
  } = e, r = R$(e, ["override"]), n = Object.assign({}, t);
  Object.keys(xo).forEach((m) => {
    delete n[m];
  });
  const a = Object.assign(Object.assign({}, r), n), o = 480, i = 576, s = 768, l = 992, u = 1200, c = 1600;
  if (a.motion === !1) {
    const m = "0s";
    a.motionDurationFast = m, a.motionDurationMid = m, a.motionDurationSlow = m;
  }
  return Object.assign(Object.assign(Object.assign({}, a), {
    // ============== Background ============== //
    colorFillContent: a.colorFillSecondary,
    colorFillContentHover: a.colorFill,
    colorFillAlter: a.colorFillQuaternary,
    colorBgContainerDisabled: a.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: a.colorBgContainer,
    colorSplit: ns(a.colorBorderSecondary, a.colorBgContainer),
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
    colorErrorOutline: ns(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: ns(a.colorWarningBg, a.colorBgContainer),
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
    controlOutline: ns(a.colorPrimaryBg, a.colorBgContainer),
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
    screenMDMax: l - 1,
    screenLG: l,
    screenLGMin: l,
    screenLGMax: u - 1,
    screenXL: u,
    screenXLMin: u,
    screenXLMax: c - 1,
    screenXXL: c,
    screenXXLMin: c,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new sr("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new sr("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new sr("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var nm = function(e, t) {
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
}, N$ = {
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
  } = t, o = nm(t, ["override"]);
  let i = Object.assign(Object.assign({}, n), {
    override: a
  });
  return i = Of(i), o && Object.entries(o).forEach((s) => {
    let [l, u] = s;
    const {
      theme: c
    } = u, d = nm(u, ["theme"]);
    let m = d;
    c && (m = Vh(Object.assign(Object.assign({}, i), d), {
      override: d
    }, c)), i[l] = m;
  }), i;
};
function jr() {
  const {
    token: e,
    hashed: t,
    theme: r,
    override: n,
    cssVar: a
  } = Q.useContext(jh), o = `${P$}-${t || ""}`, i = r || Mh, [s, l, u] = vO(i, [xo, e], {
    salt: o,
    override: n,
    getComputedToken: Vh,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Of,
    cssVar: a && {
      prefix: a.prefix,
      key: a.key,
      unitless: kh,
      ignore: zh,
      preserve: N$
    }
  });
  return [i, u, t ? l : "", s, a];
}
function Rr(e) {
  var t = v.useRef();
  t.current = e;
  var r = v.useCallback(function() {
    for (var n, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(o));
  }, []);
  return r;
}
function $a(e) {
  var t = v.useRef(!1), r = v.useState(e), n = ue(r, 2), a = n[0], o = n[1];
  v.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function i(s, l) {
    l && t.current || o(s);
  }
  return [a, i];
}
function eu(e) {
  return e !== void 0;
}
function qr(e, t) {
  var r = t || {}, n = r.defaultValue, a = r.value, o = r.onChange, i = r.postState, s = $a(function() {
    return eu(a) ? a : eu(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), l = ue(s, 2), u = l[0], c = l[1], d = a !== void 0 ? a : u, m = i ? i(d) : d, h = Rr(o), p = $a([d]), f = ue(p, 2), g = f[0], b = f[1];
  Vv(function() {
    var y = g[0];
    u !== y && h(u, y);
  }, [g]), Vv(function() {
    eu(a) || c(a);
  }, [a]);
  var C = Rr(function(y, E) {
    c(y, E), b([d], E);
  });
  return [m, C];
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
}), I$ = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, yn = function(e) {
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
}), cc = () => ({
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
}), T$ = (e) => ({
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
}), M$ = (e, t) => {
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
}, $f = (e) => ({
  outline: `${we(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), fc = (e) => ({
  "&:focus-visible": Object.assign({}, $f(e))
});
let j$ = /* @__PURE__ */ $r(function e() {
  Or(this, e);
});
const qh = j$;
function _$(e, t, r) {
  return t = ia(t), gf(e, ul() ? Reflect.construct(t, r || [], ia(e).constructor) : t.apply(e, r));
}
let L$ = /* @__PURE__ */ function(e) {
  Ta(t, e);
  function t(r) {
    var n;
    return Or(this, t), n = _$(this, t), n.result = 0, r instanceof t ? n.result = r.result : typeof r == "number" && (n.result = r), n;
  }
  return $r(t, [{
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
}(qh);
function k$(e, t, r) {
  return t = ia(t), gf(e, ul() ? Reflect.construct(t, r || [], ia(e).constructor) : t.apply(e, r));
}
const Kh = "CALC_UNIT";
function tu(e) {
  return typeof e == "number" ? `${e}${Kh}` : e;
}
let z$ = /* @__PURE__ */ function(e) {
  Ta(t, e);
  function t(r) {
    var n;
    return Or(this, t), n = k$(this, t), n.result = "", r instanceof t ? n.result = `(${r.result})` : typeof r == "number" ? n.result = tu(r) : typeof r == "string" && (n.result = r), n;
  }
  return $r(t, [{
    key: "add",
    value: function(n) {
      return n instanceof t ? this.result = `${this.result} + ${n.getResult()}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} + ${tu(n)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(n) {
      return n instanceof t ? this.result = `${this.result} - ${n.getResult()}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} - ${tu(n)}`), this.lowPriority = !0, this;
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
      } = n || {}, o = new RegExp(`${Kh}`, "g");
      return this.result = this.result.replace(o, a ? "px" : ""), typeof this.lowPriority < "u" ? `calc(${this.result})` : this.result;
    }
  }]), t;
}(qh);
const V$ = (e) => {
  const t = e === "css" ? z$ : L$;
  return (r) => new t(r);
};
function H$(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return `max(${r.map((a) => we(a)).join(",")})`;
    },
    min: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return `min(${r.map((a) => we(a)).join(",")})`;
    }
  };
}
const Uh = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let dc = !0;
function tr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!Uh)
    return Object.assign.apply(Object, [{}].concat(t));
  dc = !1;
  const n = {};
  return t.forEach((a) => {
    Object.keys(a).forEach((i) => {
      Object.defineProperty(n, i, {
        configurable: !0,
        enumerable: !0,
        get: () => a[i]
      });
    });
  }), dc = !0, n;
}
const am = {};
function W$() {
}
const q$ = (e) => {
  let t, r = e, n = W$;
  return Uh && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), r = new Proxy(e, {
    get(a, o) {
      return dc && t.add(o), a[o];
    }
  }), n = (a, o) => {
    var i;
    am[a] = {
      global: Array.from(t),
      component: Object.assign(Object.assign({}, (i = am[a]) === null || i === void 0 ? void 0 : i.component), o)
    };
  }), {
    token: r,
    keys: t,
    flush: n
  };
}, Gh = (e, t) => {
  const [r, n] = jr();
  return ac({
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
  return typeof r == "function" ? r(tr(t, (n = t[e]) !== null && n !== void 0 ? n : {})) : r ?? {};
}, Yh = (e, t, r, n) => {
  const a = Object.assign({}, t[e]);
  if (n != null && n.deprecatedTokens) {
    const {
      deprecatedTokens: i
    } = n;
    i.forEach((s) => {
      let [l, u] = s;
      var c;
      process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && yt(!(a != null && a[l]), `Component Token \`${String(l)}\` of ${e} is deprecated. Please use \`${String(u)}\` instead.`), (a != null && a[l] || a != null && a[u]) && ((c = a[u]) !== null && c !== void 0 || (a[u] = a == null ? void 0 : a[l]));
    });
  }
  const o = Object.assign(Object.assign({}, r), a);
  return Object.keys(o).forEach((i) => {
    o[i] === t[i] && delete o[i];
  }), o;
}, K$ = (e, t) => `${[t, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
function Af(e, t, r) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const a = Array.isArray(e) ? e : [e, e], [o] = a, i = a.join("-");
  return (s) => {
    const [l, u, c, d, m] = jr(), {
      getPrefixCls: h,
      iconPrefixCls: p,
      csp: f
    } = Ct(mt), g = h(), b = m ? "css" : "js", C = V$(b), {
      max: y,
      min: E
    } = H$(b), D = {
      theme: l,
      token: d,
      hashId: c,
      nonce: () => f == null ? void 0 : f.nonce,
      clientOnly: n.clientOnly,
      // antd is always at top of styles
      order: n.order || -999
    };
    return ac(Object.assign(Object.assign({}, D), {
      clientOnly: !1,
      path: ["Shared", g]
    }), () => [{
      // Link
      "&": T$(d)
    }]), Gh(p, f), [ac(Object.assign(Object.assign({}, D), {
      path: [i, s, p]
    }), () => {
      if (n.injectStyle === !1)
        return [];
      const {
        token: x,
        flush: $
      } = q$(d), O = Xh(o, u, r), A = `.${s}`, j = Yh(o, u, O, {
        deprecatedTokens: n.deprecatedTokens
      });
      m && Object.keys(O).forEach((P) => {
        O[P] = `var(${ah(P, K$(o, m.prefix))})`;
      });
      const N = tr(x, {
        componentCls: A,
        prefixCls: s,
        iconCls: `.${p}`,
        antCls: `.${g}`,
        calc: C,
        max: y,
        min: E
      }, m ? O : j), B = t(N, {
        hashId: c,
        prefixCls: s,
        rootPrefixCls: g,
        iconPrefixCls: p
      });
      return $(o, j), [n.resetStyle === !1 ? null : M$(N, s), B];
    }), c];
  };
}
const Zh = (e, t, r, n) => {
  const a = Af(e, t, r, Object.assign({
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
}, U$ = (e, t, r) => {
  function n(u) {
    return `${e}${u.slice(0, 1).toUpperCase()}${u.slice(1)}`;
  }
  const {
    unitless: a = {},
    injectStyle: o = !0
  } = r ?? {}, i = {
    [n("zIndexPopup")]: !0
  };
  Object.keys(a).forEach((u) => {
    i[n(u)] = a[u];
  });
  const s = (u) => {
    let {
      rootCls: c,
      cssVar: d
    } = u;
    const [, m] = jr();
    return VO({
      path: [e],
      prefix: d.prefix,
      key: d == null ? void 0 : d.key,
      unitless: Object.assign(Object.assign({}, kh), i),
      ignore: zh,
      token: m,
      scope: c
    }, () => {
      const h = Xh(e, m, t), p = Yh(e, m, h, {
        deprecatedTokens: r == null ? void 0 : r.deprecatedTokens
      });
      return Object.keys(h).forEach((f) => {
        p[n(f)] = p[f], delete p[f];
      }), p;
    }), null;
  };
  return (u) => {
    const [, , , , c] = jr();
    return [(d) => o && c ? /* @__PURE__ */ Q.createElement(Q.Fragment, null, /* @__PURE__ */ Q.createElement(s, {
      rootCls: u,
      cssVar: c,
      component: e
    }), d) : d, c == null ? void 0 : c.key];
  };
}, un = (e, t, r, n) => {
  const a = Af(e, t, r, n), o = U$(Array.isArray(e) ? e[0] : e, r, n);
  return function(i) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i;
    const [, l] = a(i), [u, c] = o(s);
    return [u, l, c];
  };
};
function G$(e, t) {
  return Hs.reduce((r, n) => {
    const a = e[`${n}1`], o = e[`${n}3`], i = e[`${n}6`], s = e[`${n}7`];
    return Object.assign(Object.assign({}, r), t(n, {
      lightColor: a,
      lightBorderColor: o,
      darkColor: i,
      textColor: s
    }));
  }, {});
}
const X$ = Object.assign({}, v), {
  useId: om
} = X$, Y$ = () => "", Z$ = typeof om > "u" ? Y$ : om;
function Q$(e, t) {
  var r;
  const n = Wt("ConfigProvider"), a = e || {}, o = a.inherit === !1 || !t ? Vs : t, i = Z$();
  if (process.env.NODE_ENV !== "production") {
    const s = a.cssVar || o.cssVar, l = !!(typeof a.cssVar == "object" && (!((r = a.cssVar) === null || r === void 0) && r.key) || i);
    process.env.NODE_ENV !== "production" && n(!s || l, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Fi(() => {
    var s, l;
    if (!e)
      return t;
    const u = Object.assign({}, o.components);
    Object.keys(e.components || {}).forEach((m) => {
      u[m] = Object.assign(Object.assign({}, u[m]), e.components[m]);
    });
    const c = `css-var-${i.replace(/:/g, "")}`, d = ((s = a.cssVar) !== null && s !== void 0 ? s : o.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: "ant"
    }, typeof o.cssVar == "object" ? o.cssVar : {}), typeof a.cssVar == "object" ? a.cssVar : {}), {
      key: typeof a.cssVar == "object" && ((l = a.cssVar) === null || l === void 0 ? void 0 : l.key) || c
    });
    return Object.assign(Object.assign(Object.assign({}, o), a), {
      token: Object.assign(Object.assign({}, o.token), a.token),
      components: u,
      cssVar: d
    });
  }, [a, o], (s, l) => s.some((u, c) => {
    const d = l[c];
    return !Eo(u, d, !0);
  }));
}
var J$ = ["children"], Qh = /* @__PURE__ */ v.createContext({});
function eA(e) {
  var t = e.children, r = ct(e, J$);
  return /* @__PURE__ */ v.createElement(Qh.Provider, {
    value: r
  }, t);
}
var tA = /* @__PURE__ */ function(e) {
  Ta(r, e);
  var t = Ri(r);
  function r() {
    return Or(this, r), t.apply(this, arguments);
  }
  return $r(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(v.Component), ma = "none", as = "appear", os = "enter", is = "leave", im = "none", tn = "prepare", fo = "start", vo = "active", Bf = "end", Jh = "prepared";
function sm(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function rA(e, t) {
  var r = {
    animationend: sm("Animation", "AnimationEnd"),
    transitionend: sm("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var nA = rA(pr(), typeof window < "u" ? window : {}), e0 = {};
if (pr()) {
  var aA = document.createElement("div");
  e0 = aA.style;
}
var ss = {};
function t0(e) {
  if (ss[e])
    return ss[e];
  var t = nA[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, a = 0; a < n; a += 1) {
      var o = r[a];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in e0)
        return ss[e] = t[o], ss[e];
    }
  return "";
}
var r0 = t0("animationend"), n0 = t0("transitionend"), a0 = !!(r0 && n0), lm = r0 || "animationend", um = n0 || "transitionend";
function cm(e, t) {
  if (!e)
    return null;
  if (ut(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const oA = function(e) {
  var t = ze(), r = ze(e);
  r.current = e;
  var n = v.useCallback(function(i) {
    r.current(i);
  }, []);
  function a(i) {
    i && (i.removeEventListener(um, n), i.removeEventListener(lm, n));
  }
  function o(i) {
    t.current && t.current !== i && a(t.current), i && i !== t.current && (i.addEventListener(um, n), i.addEventListener(lm, n), t.current = i);
  }
  return v.useEffect(function() {
    return function() {
      a(t.current);
    };
  }, []), [o, a];
};
var o0 = pr() ? Tg : At;
const iA = function() {
  var e = v.useRef(null);
  function t() {
    Ht.cancel(e.current);
  }
  function r(n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var o = Ht(function() {
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
var sA = [tn, fo, vo, Bf], lA = [tn, Jh], i0 = !1, uA = !0;
function s0(e) {
  return e === vo || e === Bf;
}
const cA = function(e, t, r) {
  var n = $a(im), a = ue(n, 2), o = a[0], i = a[1], s = iA(), l = ue(s, 2), u = l[0], c = l[1];
  function d() {
    i(tn, !0);
  }
  var m = t ? lA : sA;
  return o0(function() {
    if (o !== im && o !== Bf) {
      var h = m.indexOf(o), p = m[h + 1], f = r(o);
      f === i0 ? i(p, !0) : p && u(function(g) {
        function b() {
          g.isCanceled() || i(p, !0);
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
function fA(e, t, r, n) {
  var a = n.motionEnter, o = a === void 0 ? !0 : a, i = n.motionAppear, s = i === void 0 ? !0 : i, l = n.motionLeave, u = l === void 0 ? !0 : l, c = n.motionDeadline, d = n.motionLeaveImmediately, m = n.onAppearPrepare, h = n.onEnterPrepare, p = n.onLeavePrepare, f = n.onAppearStart, g = n.onEnterStart, b = n.onLeaveStart, C = n.onAppearActive, y = n.onEnterActive, E = n.onLeaveActive, D = n.onAppearEnd, S = n.onEnterEnd, x = n.onLeaveEnd, $ = n.onVisibleChanged, O = $a(), A = ue(O, 2), j = A[0], N = A[1], B = $a(ma), P = ue(B, 2), R = P[0], T = P[1], F = $a(null), I = ue(F, 2), k = I[0], L = I[1], W = ze(!1), U = ze(null);
  function Z() {
    return r();
  }
  var M = ze(!1);
  function V() {
    T(ma, !0), L(null, !0);
  }
  function H(oe) {
    var se = Z();
    if (!(oe && !oe.deadline && oe.target !== se)) {
      var ge = M.current, he;
      R === as && ge ? he = D == null ? void 0 : D(se, oe) : R === os && ge ? he = S == null ? void 0 : S(se, oe) : R === is && ge && (he = x == null ? void 0 : x(se, oe)), R !== ma && ge && he !== !1 && V();
    }
  }
  var q = oA(H), J = ue(q, 1), ee = J[0], ce = function(se) {
    var ge, he, ye;
    switch (se) {
      case as:
        return ge = {}, K(ge, tn, m), K(ge, fo, f), K(ge, vo, C), ge;
      case os:
        return he = {}, K(he, tn, h), K(he, fo, g), K(he, vo, y), he;
      case is:
        return ye = {}, K(ye, tn, p), K(ye, fo, b), K(ye, vo, E), ye;
      default:
        return {};
    }
  }, ae = v.useMemo(function() {
    return ce(R);
  }, [R]), me = cA(R, !e, function(oe) {
    if (oe === tn) {
      var se = ae[tn];
      return se ? se(Z()) : i0;
    }
    if (le in ae) {
      var ge;
      L(((ge = ae[le]) === null || ge === void 0 ? void 0 : ge.call(ae, Z(), null)) || null);
    }
    return le === vo && (ee(Z()), c > 0 && (clearTimeout(U.current), U.current = setTimeout(function() {
      H({
        deadline: !0
      });
    }, c))), le === Jh && V(), uA;
  }), fe = ue(me, 2), G = fe[0], le = fe[1], Se = s0(le);
  M.current = Se, o0(function() {
    N(t);
    var oe = W.current;
    W.current = !0;
    var se;
    !oe && t && s && (se = as), oe && t && o && (se = os), (oe && !t && u || !oe && d && !t && u) && (se = is);
    var ge = ce(se);
    se && (e || ge[tn]) ? (T(se), G()) : T(ma);
  }, [t]), At(function() {
    // Cancel appear
    (R === as && !s || // Cancel enter
    R === os && !o || // Cancel leave
    R === is && !u) && T(ma);
  }, [s, o, u]), At(function() {
    return function() {
      W.current = !1, clearTimeout(U.current);
    };
  }, []);
  var De = v.useRef(!1);
  At(function() {
    j && (De.current = !0), j !== void 0 && R === ma && ((De.current || j) && ($ == null || $(j)), De.current = !0);
  }, [j, R]);
  var Ee = k;
  return ae[tn] && le === fo && (Ee = Y({
    transition: "none"
  }, Ee)), [R, le, Ee, j ?? t];
}
function dA(e) {
  var t = e;
  ut(e) === "object" && (t = e.transitionSupport);
  function r(a, o) {
    return !!(a.motionName && t && o !== !1);
  }
  var n = /* @__PURE__ */ v.forwardRef(function(a, o) {
    var i = a.visible, s = i === void 0 ? !0 : i, l = a.removeOnLeave, u = l === void 0 ? !0 : l, c = a.forceRender, d = a.children, m = a.motionName, h = a.leavedClassName, p = a.eventProps, f = v.useContext(Qh), g = f.motion, b = r(a, g), C = ze(), y = ze();
    function E() {
      try {
        return C.current instanceof HTMLElement ? C.current : Cs(y.current);
      } catch {
        return null;
      }
    }
    var D = fA(b, s, E, a), S = ue(D, 4), x = S[0], $ = S[1], O = S[2], A = S[3], j = v.useRef(A);
    A && (j.current = !0);
    var N = v.useCallback(function(L) {
      C.current = L, mf(o, L);
    }, [o]), B, P = Y(Y({}, p), {}, {
      visible: s
    });
    if (!d)
      B = null;
    else if (x === ma)
      A ? B = d(Y({}, P), N) : !u && j.current && h ? B = d(Y(Y({}, P), {}, {
        className: h
      }), N) : c || !u && !h ? B = d(Y(Y({}, P), {}, {
        style: {
          display: "none"
        }
      }), N) : B = null;
    else {
      var R, T;
      $ === tn ? T = "prepare" : s0($) ? T = "active" : $ === fo && (T = "start");
      var F = cm(m, "".concat(x, "-").concat(T));
      B = d(Y(Y({}, P), {}, {
        className: ne(cm(m, x), (R = {}, K(R, F, F && T), K(R, m, typeof m == "string"), R)),
        style: O
      }), N);
    }
    if (/* @__PURE__ */ v.isValidElement(B) && Wn(B)) {
      var I = B, k = I.ref;
      k || (B = /* @__PURE__ */ v.cloneElement(B, {
        ref: N
      }));
    }
    return /* @__PURE__ */ v.createElement(tA, {
      ref: y
    }, B);
  });
  return n.displayName = "CSSMotion", n;
}
const Ma = dA(a0);
var vc = "add", mc = "keep", gc = "remove", ru = "removed";
function vA(e) {
  var t;
  return e && ut(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, Y(Y({}, t), {}, {
    key: String(t.key)
  });
}
function pc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(vA);
}
function mA() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, a = t.length, o = pc(e), i = pc(t);
  o.forEach(function(u) {
    for (var c = !1, d = n; d < a; d += 1) {
      var m = i[d];
      if (m.key === u.key) {
        n < d && (r = r.concat(i.slice(n, d).map(function(h) {
          return Y(Y({}, h), {}, {
            status: vc
          });
        })), n = d), r.push(Y(Y({}, m), {}, {
          status: mc
        })), n += 1, c = !0;
        break;
      }
    }
    c || r.push(Y(Y({}, u), {}, {
      status: gc
    }));
  }), n < a && (r = r.concat(i.slice(n).map(function(u) {
    return Y(Y({}, u), {}, {
      status: vc
    });
  })));
  var s = {};
  r.forEach(function(u) {
    var c = u.key;
    s[c] = (s[c] || 0) + 1;
  });
  var l = Object.keys(s).filter(function(u) {
    return s[u] > 1;
  });
  return l.forEach(function(u) {
    r = r.filter(function(c) {
      var d = c.key, m = c.status;
      return d !== u || m !== gc;
    }), r.forEach(function(c) {
      c.key === u && (c.status = mc);
    });
  }), r;
}
var gA = ["component", "children", "onVisibleChanged", "onAllRemoved"], pA = ["status"], hA = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function bA(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ma, r = /* @__PURE__ */ function(n) {
    Ta(o, n);
    var a = Ri(o);
    function o() {
      var i;
      Or(this, o);
      for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
        l[u] = arguments[u];
      return i = a.call.apply(a, [this].concat(l)), K(ft(i), "state", {
        keyEntities: []
      }), K(ft(i), "removeKey", function(c) {
        var d = i.state.keyEntities, m = d.map(function(h) {
          return h.key !== c ? h : Y(Y({}, h), {}, {
            status: ru
          });
        });
        return i.setState({
          keyEntities: m
        }), m.filter(function(h) {
          var p = h.status;
          return p !== ru;
        }).length;
      }), i;
    }
    return $r(o, [{
      key: "render",
      value: function() {
        var s = this, l = this.state.keyEntities, u = this.props, c = u.component, d = u.children, m = u.onVisibleChanged, h = u.onAllRemoved, p = ct(u, gA), f = c || v.Fragment, g = {};
        return hA.forEach(function(b) {
          g[b] = p[b], delete p[b];
        }), delete p.keys, /* @__PURE__ */ v.createElement(f, p, l.map(function(b, C) {
          var y = b.status, E = ct(b, pA), D = y === vc || y === mc;
          return /* @__PURE__ */ v.createElement(t, _e({}, g, {
            key: E.key,
            visible: D,
            eventProps: E,
            onVisibleChanged: function(x) {
              if (m == null || m(x, {
                key: E.key
              }), !x) {
                var $ = s.removeKey(E.key);
                $ === 0 && h && h();
              }
            }
          }), function(S, x) {
            return d(Y(Y({}, S), {}, {
              index: C
            }), x);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, l) {
        var u = s.keys, c = l.keyEntities, d = pc(u), m = mA(c, d);
        return {
          keyEntities: m.filter(function(h) {
            var p = c.find(function(f) {
              var g = f.key;
              return h.key === g;
            });
            return !(p && p.status === ru && h.status === gc);
          })
        };
      }
    }]), o;
  }(v.Component);
  return K(r, "defaultProps", {
    component: "div"
  }), r;
}
const yA = bA(a0);
function CA(e) {
  const {
    children: t
  } = e, [, r] = jr(), {
    motion: n
  } = r, a = v.useRef(!1);
  return a.current = a.current || n === !1, a.current ? /* @__PURE__ */ v.createElement(eA, {
    motion: n
  }, t) : t;
}
const l0 = /* @__PURE__ */ v.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return Wt("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (l0.displayName = "PropWarning");
const EA = process.env.NODE_ENV !== "production" ? l0 : () => null;
var wA = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
let hc = !1;
process.env.NODE_ENV;
const SA = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"], DA = "ant";
let u0;
function xA() {
  return u0 || DA;
}
function OA(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const $A = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n,
    holderRender: a
  } = e;
  t !== void 0 && (u0 = t), n && OA(n) && (process.env.NODE_ENV !== "production" && Ni(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), A$(xA(), n));
}, AA = (e) => {
  const {
    children: t,
    csp: r,
    autoInsertSpaceInButton: n,
    alert: a,
    anchor: o,
    form: i,
    locale: s,
    componentSize: l,
    direction: u,
    space: c,
    virtual: d,
    dropdownMatchSelectWidth: m,
    popupMatchSelectWidth: h,
    popupOverflow: p,
    legacyLocale: f,
    parentContext: g,
    iconPrefixCls: b,
    theme: C,
    componentDisabled: y,
    segmented: E,
    statistic: D,
    spin: S,
    calendar: x,
    carousel: $,
    cascader: O,
    collapse: A,
    typography: j,
    checkbox: N,
    descriptions: B,
    divider: P,
    drawer: R,
    skeleton: T,
    steps: F,
    image: I,
    layout: k,
    list: L,
    mentions: W,
    modal: U,
    progress: Z,
    result: M,
    slider: V,
    breadcrumb: H,
    menu: q,
    pagination: J,
    input: ee,
    empty: ce,
    badge: ae,
    radio: me,
    rate: fe,
    switch: G,
    transfer: le,
    avatar: Se,
    message: De,
    tag: Ee,
    table: oe,
    card: se,
    tabs: ge,
    timeline: he,
    timePicker: ye,
    upload: Ne,
    notification: $e,
    tree: je,
    colorPicker: Et,
    datePicker: Le,
    rangePicker: xe,
    flex: Ve,
    wave: He,
    dropdown: zt,
    warning: rt
  } = e, Bt = v.useCallback((Re, Ze) => {
    const {
      prefixCls: Ae
    } = e;
    if (Ze)
      return Ze;
    const Te = Ae || g.getPrefixCls("");
    return Re ? `${Te}-${Re}` : Te;
  }, [g.getPrefixCls, e.prefixCls]), ht = b || g.iconPrefixCls || _h, Qe = r || g.csp;
  Gh(ht, Qe);
  const st = Q$(C, g.theme);
  process.env.NODE_ENV !== "production" && (hc = hc || !!st);
  const Gt = {
    csp: Qe,
    autoInsertSpaceInButton: n,
    alert: a,
    anchor: o,
    locale: s || f,
    direction: u,
    space: c,
    virtual: d,
    popupMatchSelectWidth: h ?? m,
    popupOverflow: p,
    getPrefixCls: Bt,
    iconPrefixCls: ht,
    theme: st,
    segmented: E,
    statistic: D,
    spin: S,
    calendar: x,
    carousel: $,
    cascader: O,
    collapse: A,
    typography: j,
    checkbox: N,
    descriptions: B,
    divider: P,
    drawer: R,
    skeleton: T,
    steps: F,
    image: I,
    input: ee,
    layout: k,
    list: L,
    mentions: W,
    modal: U,
    progress: Z,
    result: M,
    slider: V,
    breadcrumb: H,
    menu: q,
    pagination: J,
    empty: ce,
    badge: ae,
    radio: me,
    rate: fe,
    switch: G,
    transfer: le,
    avatar: Se,
    message: De,
    tag: Ee,
    table: oe,
    card: se,
    tabs: ge,
    timeline: he,
    timePicker: ye,
    upload: Ne,
    notification: $e,
    tree: je,
    colorPicker: Et,
    datePicker: Le,
    rangePicker: xe,
    flex: Ve,
    wave: He,
    dropdown: zt,
    warning: rt
  }, Dt = Object.assign({}, g);
  Object.keys(Gt).forEach((Re) => {
    Gt[Re] !== void 0 && (Dt[Re] = Gt[Re]);
  }), SA.forEach((Re) => {
    const Ze = e[Re];
    Ze && (Dt[Re] = Ze);
  });
  const ve = Fi(() => Dt, Dt, (Re, Ze) => {
    const Ae = Object.keys(Re), Te = Object.keys(Ze);
    return Ae.length !== Te.length || Ae.some((lt) => Re[lt] !== Ze[lt]);
  }), Pe = v.useMemo(() => ({
    prefixCls: ht,
    csp: Qe
  }), [ht, Qe]);
  let ke = /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(EA, {
    dropdownMatchSelectWidth: m
  }), t);
  const nt = v.useMemo(() => {
    var Re, Ze, Ae, Te;
    return co(((Re = Ra.Form) === null || Re === void 0 ? void 0 : Re.defaultValidateMessages) || {}, ((Ae = (Ze = ve.locale) === null || Ze === void 0 ? void 0 : Ze.Form) === null || Ae === void 0 ? void 0 : Ae.defaultValidateMessages) || {}, ((Te = ve.form) === null || Te === void 0 ? void 0 : Te.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [ve, i == null ? void 0 : i.validateMessages]);
  Object.keys(nt).length > 0 && (ke = /* @__PURE__ */ v.createElement(xh.Provider, {
    value: nt
  }, ke)), s && (ke = /* @__PURE__ */ v.createElement(e$, {
    locale: s,
    _ANT_MARK__: Ah
  }, ke)), (ht || Qe) && (ke = /* @__PURE__ */ v.createElement(wf.Provider, {
    value: Pe
  }, ke)), l && (ke = /* @__PURE__ */ v.createElement(B$, {
    size: l
  }, ke)), ke = /* @__PURE__ */ v.createElement(CA, null, ke);
  const Je = v.useMemo(() => {
    const Re = st || {}, {
      algorithm: Ze,
      token: Ae,
      components: Te,
      cssVar: lt
    } = Re, _t = wA(Re, ["algorithm", "token", "components", "cssVar"]), Xt = Ze && (!Array.isArray(Ze) || Ze.length > 0) ? Ei(Ze) : Mh, Tt = {};
    Object.entries(Te || {}).forEach((fn) => {
      let [Ar, Er] = fn;
      const _ = Object.assign({}, Er);
      "algorithm" in _ && (_.algorithm === !0 ? _.theme = Xt : (Array.isArray(_.algorithm) || typeof _.algorithm == "function") && (_.theme = Ei(_.algorithm)), delete _.algorithm), Tt[Ar] = _;
    });
    const cn = Object.assign(Object.assign({}, xo), Ae);
    return Object.assign(Object.assign({}, _t), {
      theme: Xt,
      token: cn,
      components: Tt,
      override: Object.assign({
        override: cn
      }, Tt),
      cssVar: lt
    });
  }, [st]);
  return C && (ke = /* @__PURE__ */ v.createElement(jh.Provider, {
    value: Je
  }, ke)), ve.warning && (ke = /* @__PURE__ */ v.createElement(Dh.Provider, {
    value: ve.warning
  }, ke)), y !== void 0 && (ke = /* @__PURE__ */ v.createElement(Lh, {
    disabled: y
  }, ke)), /* @__PURE__ */ v.createElement(mt.Provider, {
    value: ve
  }, ke);
}, ja = (e) => {
  const t = v.useContext(mt), r = v.useContext(Df);
  return /* @__PURE__ */ v.createElement(AA, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
ja.ConfigContext = mt;
ja.SizeContext = Ti;
ja.config = $A;
ja.useConfig = F$;
Object.defineProperty(ja, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Ni(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Ti)
});
process.env.NODE_ENV !== "production" && (ja.displayName = "ConfigProvider");
const c0 = ja;
var BA = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
const FA = BA;
function f0(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function PA(e) {
  return f0(e) instanceof ShadowRoot;
}
function Ws(e) {
  return PA(e) ? f0(e) : null;
}
function RA(e) {
  return e.replace(/-(.)/g, function(t, r) {
    return r.toUpperCase();
  });
}
function NA(e, t) {
  yt(e, "[@ant-design/icons] ".concat(t));
}
function fm(e) {
  return ut(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (ut(e.icon) === "object" || typeof e.icon == "function");
}
function dm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        delete t[r], t[RA(r)] = n;
    }
    return t;
  }, {});
}
function bc(e, t, r) {
  return r ? /* @__PURE__ */ Q.createElement(e.tag, Y(Y({
    key: t
  }, dm(e.attrs)), r), (e.children || []).map(function(n, a) {
    return bc(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ Q.createElement(e.tag, Y({
    key: t
  }, dm(e.attrs)), (e.children || []).map(function(n, a) {
    return bc(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function d0(e) {
  return _n(e)[0];
}
function v0(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var IA = `
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
  var r = Ct(wf), n = r.csp, a = r.prefixCls, o = IA;
  a && (o = o.replace(/anticon/g, a)), At(function() {
    var i = t.current, s = Ws(i);
    Tn(o, "@ant-design-icons", {
      prepend: !0,
      csp: n,
      attachTo: s
    });
  }, []);
}, MA = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], ii = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function jA(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  ii.primaryColor = t, ii.secondaryColor = r || d0(t), ii.calculated = !!r;
}
function _A() {
  return Y({}, ii);
}
var ml = function(t) {
  var r = t.icon, n = t.className, a = t.onClick, o = t.style, i = t.primaryColor, s = t.secondaryColor, l = ct(t, MA), u = v.useRef(), c = ii;
  if (i && (c = {
    primaryColor: i,
    secondaryColor: s || d0(i)
  }), TA(u), NA(fm(r), "icon should be icon definiton, but got ".concat(r)), !fm(r))
    return null;
  var d = r;
  return d && typeof d.icon == "function" && (d = Y(Y({}, d), {}, {
    icon: d.icon(c.primaryColor, c.secondaryColor)
  })), bc(d.icon, "svg-".concat(d.name), Y(Y({
    className: n,
    onClick: a,
    style: o,
    "data-icon": d.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, l), {}, {
    ref: u
  }));
};
ml.displayName = "IconReact";
ml.getTwoToneColors = _A;
ml.setTwoToneColors = jA;
const Ff = ml;
function m0(e) {
  var t = v0(e), r = ue(t, 2), n = r[0], a = r[1];
  return Ff.setTwoToneColors({
    primaryColor: n,
    secondaryColor: a
  });
}
function LA() {
  var e = Ff.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var kA = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
m0(b$.primary);
var gl = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.className, n = e.icon, a = e.spin, o = e.rotate, i = e.tabIndex, s = e.onClick, l = e.twoToneColor, u = ct(e, kA), c = v.useContext(wf), d = c.prefixCls, m = d === void 0 ? "anticon" : d, h = c.rootClassName, p = ne(h, m, K(K({}, "".concat(m, "-").concat(n.name), !!n.name), "".concat(m, "-spin"), !!a || n.name === "loading"), r), f = i;
  f === void 0 && s && (f = -1);
  var g = o ? {
    msTransform: "rotate(".concat(o, "deg)"),
    transform: "rotate(".concat(o, "deg)")
  } : void 0, b = v0(l), C = ue(b, 2), y = C[0], E = C[1];
  return /* @__PURE__ */ v.createElement("span", _e({
    role: "img",
    "aria-label": n.name
  }, u, {
    ref: t,
    tabIndex: f,
    onClick: s,
    className: p
  }), /* @__PURE__ */ v.createElement(Ff, {
    icon: n,
    primaryColor: y,
    secondaryColor: E,
    style: g
  }));
});
gl.displayName = "AntdIcon";
gl.getTwoToneColor = LA;
gl.setTwoToneColor = m0;
const vr = gl;
var zA = function(t, r) {
  return /* @__PURE__ */ v.createElement(vr, _e({}, t, {
    ref: r,
    icon: FA
  }));
}, g0 = /* @__PURE__ */ v.forwardRef(zA);
process.env.NODE_ENV !== "production" && (g0.displayName = "CheckCircleFilled");
const VA = g0;
var HA = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
const WA = HA;
var qA = function(t, r) {
  return /* @__PURE__ */ v.createElement(vr, _e({}, t, {
    ref: r,
    icon: WA
  }));
}, p0 = /* @__PURE__ */ v.forwardRef(qA);
process.env.NODE_ENV !== "production" && (p0.displayName = "CloseCircleFilled");
const Pf = p0;
var KA = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
const UA = KA;
var GA = function(t, r) {
  return /* @__PURE__ */ v.createElement(vr, _e({}, t, {
    ref: r,
    icon: UA
  }));
}, h0 = /* @__PURE__ */ v.forwardRef(GA);
process.env.NODE_ENV !== "production" && (h0.displayName = "ExclamationCircleFilled");
const XA = h0, {
  isValidElement: Ln
} = v;
function b0(e) {
  return e && Ln(e) && e.type === v.Fragment;
}
function YA(e, t, r) {
  return Ln(e) ? /* @__PURE__ */ v.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
}
function sn(e, t) {
  return YA(e, e, t);
}
const qn = (e) => {
  const [, , , , t] = jr();
  return t ? `${e}-css-var` : "";
};
var Fe = {
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
    r >= Fe.F1 && r <= Fe.F12)
      return !1;
    switch (r) {
      case Fe.ALT:
      case Fe.CAPS_LOCK:
      case Fe.CONTEXT_MENU:
      case Fe.CTRL:
      case Fe.DOWN:
      case Fe.END:
      case Fe.ESC:
      case Fe.HOME:
      case Fe.INSERT:
      case Fe.LEFT:
      case Fe.MAC_FF_META:
      case Fe.META:
      case Fe.NUMLOCK:
      case Fe.NUM_CENTER:
      case Fe.PAGE_DOWN:
      case Fe.PAGE_UP:
      case Fe.PAUSE:
      case Fe.PRINT_SCREEN:
      case Fe.RIGHT:
      case Fe.SHIFT:
      case Fe.UP:
      case Fe.WIN_KEY:
      case Fe.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= Fe.ZERO && t <= Fe.NINE || t >= Fe.NUM_ZERO && t <= Fe.NUM_MULTIPLY || t >= Fe.A && t <= Fe.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case Fe.SPACE:
      case Fe.QUESTION_MARK:
      case Fe.NUM_PLUS:
      case Fe.NUM_MINUS:
      case Fe.NUM_PERIOD:
      case Fe.NUM_DIVISION:
      case Fe.SEMICOLON:
      case Fe.DASH:
      case Fe.EQUALS:
      case Fe.COMMA:
      case Fe.PERIOD:
      case Fe.SLASH:
      case Fe.APOSTROPHE:
      case Fe.SINGLE_QUOTE:
      case Fe.OPEN_SQUARE_BRACKET:
      case Fe.BACKSLASH:
      case Fe.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, ZA = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const QA = ZA;
var JA = function(t, r) {
  return /* @__PURE__ */ v.createElement(vr, _e({}, t, {
    ref: r,
    icon: QA
  }));
}, y0 = /* @__PURE__ */ v.forwardRef(JA);
process.env.NODE_ENV !== "production" && (y0.displayName = "LoadingOutlined");
const C0 = y0, E0 = /* @__PURE__ */ Q.createContext(void 0);
process.env.NODE_ENV !== "production" && (E0.displayName = "zIndexContext");
const Rf = E0, ga = 100, eB = 10, tB = ga * eB, w0 = {
  Modal: ga,
  Drawer: ga,
  Popover: ga,
  Popconfirm: ga,
  Tooltip: ga,
  Tour: ga
}, rB = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function nB(e) {
  return e in w0;
}
function Nf(e, t) {
  const [, r] = jr(), n = Q.useContext(Rf), a = nB(e);
  if (t !== void 0)
    return [t, t];
  let o = n ?? 0;
  return a ? (o += // Use preset token zIndex by default but not stack when has parent container
  (n ? 0 : r.zIndexPopupBase) + // Container offset
  w0[e], o = Math.min(o, r.zIndexPopupBase + tB)) : o += rB[e], [n === void 0 ? t : o, o];
}
function hr() {
  hr = function() {
    return t;
  };
  var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, a = Object.defineProperty || function(T, F, I) {
    T[F] = I.value;
  }, o = typeof Symbol == "function" ? Symbol : {}, i = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", l = o.toStringTag || "@@toStringTag";
  function u(T, F, I) {
    return Object.defineProperty(T, F, {
      value: I,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), T[F];
  }
  try {
    u({}, "");
  } catch {
    u = function(I, k, L) {
      return I[k] = L;
    };
  }
  function c(T, F, I, k) {
    var L = F && F.prototype instanceof b ? F : b, W = Object.create(L.prototype), U = new P(k || []);
    return a(W, "_invoke", {
      value: A(T, I, U)
    }), W;
  }
  function d(T, F, I) {
    try {
      return {
        type: "normal",
        arg: T.call(F, I)
      };
    } catch (k) {
      return {
        type: "throw",
        arg: k
      };
    }
  }
  t.wrap = c;
  var m = "suspendedStart", h = "suspendedYield", p = "executing", f = "completed", g = {};
  function b() {
  }
  function C() {
  }
  function y() {
  }
  var E = {};
  u(E, i, function() {
    return this;
  });
  var D = Object.getPrototypeOf, S = D && D(D(R([])));
  S && S !== r && n.call(S, i) && (E = S);
  var x = y.prototype = b.prototype = Object.create(E);
  function $(T) {
    ["next", "throw", "return"].forEach(function(F) {
      u(T, F, function(I) {
        return this._invoke(F, I);
      });
    });
  }
  function O(T, F) {
    function I(L, W, U, Z) {
      var M = d(T[L], T, W);
      if (M.type !== "throw") {
        var V = M.arg, H = V.value;
        return H && ut(H) == "object" && n.call(H, "__await") ? F.resolve(H.__await).then(function(q) {
          I("next", q, U, Z);
        }, function(q) {
          I("throw", q, U, Z);
        }) : F.resolve(H).then(function(q) {
          V.value = q, U(V);
        }, function(q) {
          return I("throw", q, U, Z);
        });
      }
      Z(M.arg);
    }
    var k;
    a(this, "_invoke", {
      value: function(W, U) {
        function Z() {
          return new F(function(M, V) {
            I(W, U, M, V);
          });
        }
        return k = k ? k.then(Z, Z) : Z();
      }
    });
  }
  function A(T, F, I) {
    var k = m;
    return function(L, W) {
      if (k === p)
        throw new Error("Generator is already running");
      if (k === f) {
        if (L === "throw")
          throw W;
        return {
          value: e,
          done: !0
        };
      }
      for (I.method = L, I.arg = W; ; ) {
        var U = I.delegate;
        if (U) {
          var Z = j(U, I);
          if (Z) {
            if (Z === g)
              continue;
            return Z;
          }
        }
        if (I.method === "next")
          I.sent = I._sent = I.arg;
        else if (I.method === "throw") {
          if (k === m)
            throw k = f, I.arg;
          I.dispatchException(I.arg);
        } else
          I.method === "return" && I.abrupt("return", I.arg);
        k = p;
        var M = d(T, F, I);
        if (M.type === "normal") {
          if (k = I.done ? f : h, M.arg === g)
            continue;
          return {
            value: M.arg,
            done: I.done
          };
        }
        M.type === "throw" && (k = f, I.method = "throw", I.arg = M.arg);
      }
    };
  }
  function j(T, F) {
    var I = F.method, k = T.iterator[I];
    if (k === e)
      return F.delegate = null, I === "throw" && T.iterator.return && (F.method = "return", F.arg = e, j(T, F), F.method === "throw") || I !== "return" && (F.method = "throw", F.arg = new TypeError("The iterator does not provide a '" + I + "' method")), g;
    var L = d(k, T.iterator, F.arg);
    if (L.type === "throw")
      return F.method = "throw", F.arg = L.arg, F.delegate = null, g;
    var W = L.arg;
    return W ? W.done ? (F[T.resultName] = W.value, F.next = T.nextLoc, F.method !== "return" && (F.method = "next", F.arg = e), F.delegate = null, g) : W : (F.method = "throw", F.arg = new TypeError("iterator result is not an object"), F.delegate = null, g);
  }
  function N(T) {
    var F = {
      tryLoc: T[0]
    };
    1 in T && (F.catchLoc = T[1]), 2 in T && (F.finallyLoc = T[2], F.afterLoc = T[3]), this.tryEntries.push(F);
  }
  function B(T) {
    var F = T.completion || {};
    F.type = "normal", delete F.arg, T.completion = F;
  }
  function P(T) {
    this.tryEntries = [{
      tryLoc: "root"
    }], T.forEach(N, this), this.reset(!0);
  }
  function R(T) {
    if (T || T === "") {
      var F = T[i];
      if (F)
        return F.call(T);
      if (typeof T.next == "function")
        return T;
      if (!isNaN(T.length)) {
        var I = -1, k = function L() {
          for (; ++I < T.length; )
            if (n.call(T, I))
              return L.value = T[I], L.done = !1, L;
          return L.value = e, L.done = !0, L;
        };
        return k.next = k;
      }
    }
    throw new TypeError(ut(T) + " is not iterable");
  }
  return C.prototype = y, a(x, "constructor", {
    value: y,
    configurable: !0
  }), a(y, "constructor", {
    value: C,
    configurable: !0
  }), C.displayName = u(y, l, "GeneratorFunction"), t.isGeneratorFunction = function(T) {
    var F = typeof T == "function" && T.constructor;
    return !!F && (F === C || (F.displayName || F.name) === "GeneratorFunction");
  }, t.mark = function(T) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(T, y) : (T.__proto__ = y, u(T, l, "GeneratorFunction")), T.prototype = Object.create(x), T;
  }, t.awrap = function(T) {
    return {
      __await: T
    };
  }, $(O.prototype), u(O.prototype, s, function() {
    return this;
  }), t.AsyncIterator = O, t.async = function(T, F, I, k, L) {
    L === void 0 && (L = Promise);
    var W = new O(c(T, F, I, k), L);
    return t.isGeneratorFunction(F) ? W : W.next().then(function(U) {
      return U.done ? U.value : W.next();
    });
  }, $(x), u(x, l, "Generator"), u(x, i, function() {
    return this;
  }), u(x, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(T) {
    var F = Object(T), I = [];
    for (var k in F)
      I.push(k);
    return I.reverse(), function L() {
      for (; I.length; ) {
        var W = I.pop();
        if (W in F)
          return L.value = W, L.done = !1, L;
      }
      return L.done = !0, L;
    };
  }, t.values = R, P.prototype = {
    constructor: P,
    reset: function(F) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(B), !F)
        for (var I in this)
          I.charAt(0) === "t" && n.call(this, I) && !isNaN(+I.slice(1)) && (this[I] = e);
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
      var I = this;
      function k(V, H) {
        return U.type = "throw", U.arg = F, I.next = V, H && (I.method = "next", I.arg = e), !!H;
      }
      for (var L = this.tryEntries.length - 1; L >= 0; --L) {
        var W = this.tryEntries[L], U = W.completion;
        if (W.tryLoc === "root")
          return k("end");
        if (W.tryLoc <= this.prev) {
          var Z = n.call(W, "catchLoc"), M = n.call(W, "finallyLoc");
          if (Z && M) {
            if (this.prev < W.catchLoc)
              return k(W.catchLoc, !0);
            if (this.prev < W.finallyLoc)
              return k(W.finallyLoc);
          } else if (Z) {
            if (this.prev < W.catchLoc)
              return k(W.catchLoc, !0);
          } else {
            if (!M)
              throw new Error("try statement without catch or finally");
            if (this.prev < W.finallyLoc)
              return k(W.finallyLoc);
          }
        }
      }
    },
    abrupt: function(F, I) {
      for (var k = this.tryEntries.length - 1; k >= 0; --k) {
        var L = this.tryEntries[k];
        if (L.tryLoc <= this.prev && n.call(L, "finallyLoc") && this.prev < L.finallyLoc) {
          var W = L;
          break;
        }
      }
      W && (F === "break" || F === "continue") && W.tryLoc <= I && I <= W.finallyLoc && (W = null);
      var U = W ? W.completion : {};
      return U.type = F, U.arg = I, W ? (this.method = "next", this.next = W.finallyLoc, g) : this.complete(U);
    },
    complete: function(F, I) {
      if (F.type === "throw")
        throw F.arg;
      return F.type === "break" || F.type === "continue" ? this.next = F.arg : F.type === "return" ? (this.rval = this.arg = F.arg, this.method = "return", this.next = "end") : F.type === "normal" && I && (this.next = I), g;
    },
    finish: function(F) {
      for (var I = this.tryEntries.length - 1; I >= 0; --I) {
        var k = this.tryEntries[I];
        if (k.finallyLoc === F)
          return this.complete(k.completion, k.afterLoc), B(k), g;
      }
    },
    catch: function(F) {
      for (var I = this.tryEntries.length - 1; I >= 0; --I) {
        var k = this.tryEntries[I];
        if (k.tryLoc === F) {
          var L = k.completion;
          if (L.type === "throw") {
            var W = L.arg;
            B(k);
          }
          return W;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(F, I, k) {
      return this.delegate = {
        iterator: R(F),
        resultName: I,
        nextLoc: k
      }, this.method === "next" && (this.arg = e), g;
    }
  }, t;
}
function vm(e, t, r, n, a, o, i) {
  try {
    var s = e[o](i), l = s.value;
  } catch (u) {
    r(u);
    return;
  }
  s.done ? t(l) : Promise.resolve(l).then(n, a);
}
function _a(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, a) {
      var o = e.apply(t, r);
      function i(l) {
        vm(o, n, a, i, s, "next", l);
      }
      function s(l) {
        vm(o, n, a, i, s, "throw", l);
      }
      i(void 0);
    });
  };
}
var Mi = Y({}, jy), aB = Mi.version, oB = Mi.render, iB = Mi.unmountComponentAtNode, pl;
try {
  var sB = Number((aB || "").split(".")[0]);
  sB >= 18 && (pl = Mi.createRoot);
} catch {
}
function mm(e) {
  var t = Mi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && ut(t) === "object" && (t.usingClientEntryPoint = e);
}
var qs = "__rc_react_root__";
function lB(e, t) {
  mm(!0);
  var r = t[qs] || pl(t);
  mm(!1), r.render(e), t[qs] = r;
}
function uB(e, t) {
  oB(e, t);
}
function cB(e, t) {
  if (pl) {
    lB(e, t);
    return;
  }
  uB(e, t);
}
function fB(e) {
  return yc.apply(this, arguments);
}
function yc() {
  return yc = _a(/* @__PURE__ */ hr().mark(function e(t) {
    return hr().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.resolve().then(function() {
              var a;
              (a = t[qs]) === null || a === void 0 || a.unmount(), delete t[qs];
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), yc.apply(this, arguments);
}
function dB(e) {
  iB(e);
}
function vB(e) {
  return Cc.apply(this, arguments);
}
function Cc() {
  return Cc = _a(/* @__PURE__ */ hr().mark(function e(t) {
    return hr().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            if (pl === void 0) {
              n.next = 2;
              break;
            }
            return n.abrupt("return", fB(t));
          case 2:
            dB(t);
          case 3:
          case "end":
            return n.stop();
        }
    }, e);
  })), Cc.apply(this, arguments);
}
const nu = () => ({
  height: 0,
  opacity: 0
}), gm = (e) => {
  const {
    scrollHeight: t
  } = e;
  return {
    height: t,
    opacity: 1
  };
}, mB = (e) => ({
  height: e ? e.offsetHeight : 0
}), au = (e, t) => (t == null ? void 0 : t.deadline) === !0 || t.propertyName === "height", Ec = function() {
  return {
    motionName: `${arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant"}-motion-collapse`,
    onAppearStart: nu,
    onEnterStart: nu,
    onAppearActive: gm,
    onEnterActive: gm,
    onLeaveStart: mB,
    onLeaveActive: nu,
    onAppearEnd: au,
    onEnterEnd: au,
    onLeaveEnd: au,
    motionDeadline: 500
  };
}, gB = (e, t, r) => r !== void 0 ? r : `${e}-${t}`, hl = function(e) {
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
}, pB = (e) => {
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
}, hB = Af("Wave", (e) => [pB(e)]);
function bB(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function ou(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && bB(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function yB(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(e);
  return ou(t) ? t : ou(r) ? r : ou(n) ? n : null;
}
const If = "ant-wave-target";
function iu(e) {
  return Number.isNaN(e) ? 0 : e;
}
const CB = (e) => {
  const {
    className: t,
    target: r,
    component: n
  } = e, a = v.useRef(null), [o, i] = v.useState(null), [s, l] = v.useState([]), [u, c] = v.useState(0), [d, m] = v.useState(0), [h, p] = v.useState(0), [f, g] = v.useState(0), [b, C] = v.useState(!1), y = {
    left: u,
    top: d,
    width: h,
    height: f,
    borderRadius: s.map((S) => `${S}px`).join(" ")
  };
  o && (y["--wave-color"] = o);
  function E() {
    const S = getComputedStyle(r);
    i(yB(r));
    const x = S.position === "static", {
      borderLeftWidth: $,
      borderTopWidth: O
    } = S;
    c(x ? r.offsetLeft : iu(-parseFloat($))), m(x ? r.offsetTop : iu(-parseFloat(O))), p(r.offsetWidth), g(r.offsetHeight);
    const {
      borderTopLeftRadius: A,
      borderTopRightRadius: j,
      borderBottomLeftRadius: N,
      borderBottomRightRadius: B
    } = S;
    l([A, j, B, N].map((P) => iu(parseFloat(P))));
  }
  if (v.useEffect(() => {
    if (r) {
      const S = Ht(() => {
        E(), C(!0);
      });
      let x;
      return typeof ResizeObserver < "u" && (x = new ResizeObserver(E), x.observe(r)), () => {
        Ht.cancel(S), x == null || x.disconnect();
      };
    }
  }, []), !b)
    return null;
  const D = (n === "Checkbox" || n === "Radio") && (r == null ? void 0 : r.classList.contains(If));
  return /* @__PURE__ */ v.createElement(Ma, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (S, x) => {
      var $;
      if (x.deadline || x.propertyName === "opacity") {
        const O = ($ = a.current) === null || $ === void 0 ? void 0 : $.parentElement;
        vB(O).then(() => {
          O == null || O.remove();
        });
      }
      return !1;
    }
  }, (S) => {
    let {
      className: x
    } = S;
    return /* @__PURE__ */ v.createElement("div", {
      ref: a,
      className: ne(t, {
        "wave-quick": D
      }, x),
      style: y
    });
  });
}, EB = (e, t) => {
  var r;
  const {
    component: n
  } = t;
  if (n === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked))
    return;
  const a = document.createElement("div");
  a.style.position = "absolute", a.style.left = "0px", a.style.top = "0px", e == null || e.insertBefore(a, e == null ? void 0 : e.firstChild), cB(/* @__PURE__ */ v.createElement(CB, Object.assign({}, t, {
    target: e
  })), a);
}, wB = EB;
function SB(e, t, r) {
  const {
    wave: n
  } = v.useContext(mt), [, a, o] = jr(), i = Rr((u) => {
    const c = e.current;
    if (n != null && n.disabled || !c)
      return;
    const d = c.querySelector(`.${If}`) || c, {
      showEffect: m
    } = n || {};
    (m || wB)(d, {
      className: t,
      token: a,
      component: r,
      event: u,
      hashId: o
    });
  }), s = v.useRef();
  return (u) => {
    Ht.cancel(s.current), s.current = Ht(() => {
      i(u);
    });
  };
}
const S0 = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: a
  } = Ct(mt), o = ze(null), i = a("wave"), [, s] = hB(i), l = SB(o, ne(i, s), n);
  if (Q.useEffect(() => {
    const c = o.current;
    if (!c || c.nodeType !== 1 || r)
      return;
    const d = (m) => {
      !hl(m.target) || // No need wave
      !c.getAttribute || c.getAttribute("disabled") || c.disabled || c.className.includes("disabled") || c.className.includes("-leave") || l(m);
    };
    return c.addEventListener("click", d, !0), () => {
      c.removeEventListener("click", d, !0);
    };
  }, [r]), !/* @__PURE__ */ Q.isValidElement(t))
    return t ?? null;
  const u = Wn(t) ? Gr(t.ref, o) : o;
  return sn(t, {
    ref: u
  });
};
process.env.NODE_ENV !== "production" && (S0.displayName = "Wave");
const D0 = S0, Po = (e) => {
  const t = Q.useContext(Ti);
  return Q.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, DB = (e) => {
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
}, xB = (e) => {
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
}, OB = (e) => {
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
}, x0 = un("Space", (e) => {
  const t = tr(e, {
    spaceGapSmallSize: e.paddingXS,
    spaceGapMiddleSize: e.padding,
    spaceGapLargeSize: e.paddingLG
  });
  return [xB(t), OB(t), DB(t)];
}, () => ({}), {
  // Space component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/40315
  resetStyle: !1
});
var O0 = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const bl = /* @__PURE__ */ v.createContext(null), yl = (e, t) => {
  const r = v.useContext(bl), n = v.useMemo(() => {
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
}, Ks = (e) => {
  let {
    children: t
  } = e;
  return /* @__PURE__ */ v.createElement(bl.Provider, {
    value: null
  }, t);
}, $B = (e) => {
  var {
    children: t
  } = e, r = O0(e, ["children"]);
  return /* @__PURE__ */ v.createElement(bl.Provider, {
    value: r
  }, t);
}, AB = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = v.useContext(mt), {
    size: n,
    direction: a,
    block: o,
    prefixCls: i,
    className: s,
    rootClassName: l,
    children: u
  } = e, c = O0(e, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]), d = Po((y) => n ?? y), m = t("space-compact", i), [h, p] = x0(m), f = ne(m, p, {
    [`${m}-rtl`]: r === "rtl",
    [`${m}-block`]: o,
    [`${m}-vertical`]: a === "vertical"
  }, s, l), g = v.useContext(bl), b = on(u), C = v.useMemo(() => b.map((y, E) => {
    const D = y && y.key || `${m}-item-${E}`;
    return /* @__PURE__ */ v.createElement($B, {
      key: D,
      compactSize: d,
      compactDirection: a,
      isFirstItem: E === 0 && (!g || (g == null ? void 0 : g.isFirstItem)),
      isLastItem: E === b.length - 1 && (!g || (g == null ? void 0 : g.isLastItem))
    }, y);
  }), [n, b, g]);
  return b.length === 0 ? null : h(/* @__PURE__ */ v.createElement("div", Object.assign({
    className: f
  }, c), C));
}, BB = AB;
var FB = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const $0 = /* @__PURE__ */ v.createContext(void 0), PB = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = v.useContext(mt), {
    prefixCls: n,
    size: a,
    className: o
  } = e, i = FB(e, ["prefixCls", "size", "className"]), s = t("btn-group", n), [, , l] = jr();
  let u = "";
  switch (a) {
    case "large":
      u = "lg";
      break;
    case "small":
      u = "sm";
      break;
  }
  if (process.env.NODE_ENV !== "production") {
    const d = Wt("Button.Group");
    process.env.NODE_ENV !== "production" && d(!a || ["large", "small", "middle"].includes(a), "usage", "Invalid prop `size`.");
  }
  const c = ne(s, {
    [`${s}-${u}`]: u,
    [`${s}-rtl`]: r === "rtl"
  }, o, l);
  return /* @__PURE__ */ v.createElement($0.Provider, {
    value: a
  }, /* @__PURE__ */ v.createElement("div", Object.assign({}, i, {
    className: c
  })));
}, RB = PB, pm = /^[\u4e00-\u9fa5]{2}$/, wc = pm.test.bind(pm);
function hm(e) {
  return typeof e == "string";
}
function ls(e) {
  return e === "text" || e === "link";
}
function NB(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && hm(e.type) && wc(e.props.children) ? sn(e, {
    children: e.props.children.split("").join(r)
  }) : hm(e) ? wc(e) ? /* @__PURE__ */ Q.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ Q.createElement("span", null, e) : b0(e) ? /* @__PURE__ */ Q.createElement("span", null, e) : e;
}
function IB(e, t) {
  let r = !1;
  const n = [];
  return Q.Children.forEach(e, (a) => {
    const o = typeof a, i = o === "string" || o === "number";
    if (r && i) {
      const s = n.length - 1, l = n[s];
      n[s] = `${l}${a}`;
    } else
      n.push(a);
    r = i;
  }), Q.Children.map(n, (a) => NB(a, t));
}
const TB = /* @__PURE__ */ br((e, t) => {
  const {
    className: r,
    style: n,
    children: a,
    prefixCls: o
  } = e, i = ne(`${o}-icon`, r);
  return /* @__PURE__ */ Q.createElement("span", {
    ref: t,
    className: i,
    style: n
  }, a);
}), A0 = TB, bm = /* @__PURE__ */ br((e, t) => {
  let {
    prefixCls: r,
    className: n,
    style: a,
    iconClassName: o
  } = e;
  const i = ne(`${r}-loading-icon`, n);
  return /* @__PURE__ */ Q.createElement(A0, {
    prefixCls: r,
    className: i,
    style: a,
    ref: t
  }, /* @__PURE__ */ Q.createElement(C0, {
    className: o
  }));
}), su = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), lu = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), MB = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: a,
    style: o
  } = e, i = !!r;
  return n ? /* @__PURE__ */ Q.createElement(bm, {
    prefixCls: t,
    className: a,
    style: o
  }) : /* @__PURE__ */ Q.createElement(Ma, {
    visible: i,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    motionLeave: i,
    removeOnLeave: !0,
    onAppearStart: su,
    onAppearActive: lu,
    onEnterStart: su,
    onEnterActive: lu,
    onLeaveStart: lu,
    onLeaveActive: su
  }, (s, l) => {
    let {
      className: u,
      style: c
    } = s;
    return /* @__PURE__ */ Q.createElement(bm, {
      prefixCls: t,
      className: a,
      style: Object.assign(Object.assign({}, o), c),
      ref: l,
      iconClassName: u
    });
  });
}, jB = MB, ym = (e, t) => ({
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
}), _B = (e) => {
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
      ym(`${t}-primary`, a),
      ym(`${t}-danger`, o)
    ]
  };
}, B0 = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: r,
    paddingBlock: n
  } = e;
  return tr(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: n,
    buttonIconOnlyFontSize: r
  });
}, F0 = (e) => {
  var t, r, n, a, o, i;
  const s = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, l = (r = e.contentFontSizeSM) !== null && r !== void 0 ? r : e.fontSize, u = (n = e.contentFontSizeLG) !== null && n !== void 0 ? n : e.fontSizeLG, c = (a = e.contentLineHeight) !== null && a !== void 0 ? a : Os(s), d = (o = e.contentLineHeightSM) !== null && o !== void 0 ? o : Os(l), m = (i = e.contentLineHeightLG) !== null && i !== void 0 ? i : Os(u);
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
    contentFontSizeSM: l,
    contentFontSizeLG: u,
    contentLineHeight: c,
    contentLineHeightSM: d,
    contentLineHeightLG: m,
    paddingBlock: Math.max((e.controlHeight - s * c) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - l * d) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - u * m) / 2 - e.lineWidth, 0)
  };
}, LB = (e) => {
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
      border: `${we(e.lineWidth)} ${e.lineType} transparent`,
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
      "&:not(:disabled)": Object.assign({}, fc(e)),
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
}, kn = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), kB = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), zB = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), VB = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), Di = (e, t, r, n, a, o, i, s) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: r || void 0,
    background: t,
    borderColor: n || void 0,
    boxShadow: "none"
  }, kn(e, Object.assign({
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
}), Tf = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, VB(e))
}), P0 = (e) => Object.assign({}, Tf(e)), Us = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), R0 = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, P0(e)), {
  background: e.defaultBg,
  borderColor: e.defaultBorderColor,
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}), kn(e.componentCls, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), Di(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: e.colorError,
    borderColor: e.colorError
  }, kn(e.componentCls, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Di(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), Tf(e))
}), HB = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, P0(e)), {
  color: e.primaryColor,
  background: e.colorPrimary,
  boxShadow: e.primaryShadow
}), kn(e.componentCls, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryActive
})), Di(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
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
  }, kn(e.componentCls, {
    background: e.colorErrorHover
  }, {
    background: e.colorErrorActive
  })), Di(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Tf(e))
}), WB = (e) => Object.assign(Object.assign({}, R0(e)), {
  borderStyle: "dashed"
}), qB = (e) => Object.assign(Object.assign(Object.assign({
  color: e.colorLink
}, kn(e.componentCls, {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Us(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, kn(e.componentCls, {
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), Us(e))
}), KB = (e) => Object.assign(Object.assign(Object.assign({}, kn(e.componentCls, {
  color: e.colorText,
  background: e.textHoverBg
}, {
  color: e.colorText,
  background: e.colorBgTextActive
})), Us(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, Us(e)), kn(e.componentCls, {
    color: e.colorErrorHover,
    background: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    background: e.colorErrorBg
  }))
}), UB = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: R0(e),
    [`${t}-primary`]: HB(e),
    [`${t}-dashed`]: WB(e),
    [`${t}-link`]: qB(e),
    [`${t}-text`]: KB(e),
    [`${t}-ghost`]: Di(e.componentCls, e.ghostBg, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
  };
}, Mf = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: r,
    controlHeight: n,
    fontSize: a,
    lineHeight: o,
    borderRadius: i,
    buttonPaddingHorizontal: s,
    iconCls: l,
    buttonPaddingVertical: u
  } = e, c = `${r}-icon-only`;
  return [
    {
      [`${t}`]: {
        fontSize: a,
        lineHeight: o,
        height: n,
        padding: `${we(u)} ${we(s)}`,
        borderRadius: i,
        [`&${c}`]: {
          width: n,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${r}-round`]: {
            width: "auto"
          },
          [l]: {
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
      [`${r}${r}-circle${t}`]: kB(e)
    },
    {
      [`${r}${r}-round${t}`]: zB(e)
    }
  ];
}, GB = (e) => {
  const t = tr(e, {
    fontSize: e.contentFontSize,
    lineHeight: e.contentLineHeight
  });
  return Mf(t, e.componentCls);
}, XB = (e) => {
  const t = tr(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    lineHeight: e.contentLineHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: e.paddingBlockSM,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return Mf(t, `${e.componentCls}-sm`);
}, YB = (e) => {
  const t = tr(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    lineHeight: e.contentLineHeightLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: e.paddingBlockLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return Mf(t, `${e.componentCls}-lg`);
}, ZB = (e) => {
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
}, QB = un("Button", (e) => {
  const t = B0(e);
  return [
    // Shared
    LB(t),
    // Size
    GB(t),
    XB(t),
    YB(t),
    // Block
    ZB(t),
    // Group (type, ghost, danger, loading)
    UB(t),
    // Button Group
    _B(t)
  ];
}, F0, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function JB(e, t, r) {
  const {
    focusElCls: n,
    focus: a,
    borderElCls: o
  } = r, i = o ? "> *" : "", s = ["hover", a ? "focus" : null, "active"].filter(Boolean).map((l) => `&:${l} ${i}`).join(",");
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
function e2(e, t, r) {
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
function N0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, JB(e, n, t)), e2(r, n, t))
  };
}
function t2(e, t) {
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
function r2(e, t) {
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
function n2(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, t2(e, t)), r2(e.componentCls, t))
  };
}
const a2 = (e) => {
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
            height: `calc(100% + ${we(e.lineWidth)} * 2)`,
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
              width: `calc(100% + ${we(e.lineWidth)} * 2)`,
              height: e.lineWidth,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, o2 = Zh(["Button", "compact"], (e) => {
  const t = B0(e);
  return [
    // Space Compact
    N0(t),
    n2(t),
    a2(t)
  ];
}, F0);
var i2 = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function s2(e) {
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
const l2 = (e, t) => {
  var r, n;
  const {
    loading: a = !1,
    prefixCls: o,
    type: i = "default",
    danger: s,
    shape: l = "default",
    size: u,
    styles: c,
    disabled: d,
    className: m,
    rootClassName: h,
    children: p,
    icon: f,
    ghost: g = !1,
    block: b = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: C = "button",
    classNames: y,
    style: E = {}
  } = e, D = i2(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]), {
    getPrefixCls: S,
    autoInsertSpaceInButton: x,
    direction: $,
    button: O
  } = Ct(mt), A = S("btn", o), [j, N, B] = QB(A), P = Ct(Fo), R = d ?? P, T = Ct($0), F = Pt(() => s2(a), [a]), [I, k] = Qt(F.loading), [L, W] = Qt(!1), Z = Gr(t, /* @__PURE__ */ Ty()), M = Iy.count(p) === 1 && !f && !ls(i);
  At(() => {
    let ge = null;
    F.delay > 0 ? ge = setTimeout(() => {
      ge = null, k(!0);
    }, F.delay) : k(F.loading);
    function he() {
      ge && (clearTimeout(ge), ge = null);
    }
    return he;
  }, [F]), At(() => {
    if (!Z || !Z.current || x === !1)
      return;
    const ge = Z.current.textContent;
    M && wc(ge) ? L || W(!0) : L && W(!1);
  }, [Z]);
  const V = (ge) => {
    const {
      onClick: he
    } = e;
    if (I || R) {
      ge.preventDefault();
      return;
    }
    he == null || he(ge);
  };
  if (process.env.NODE_ENV !== "production") {
    const ge = Wt("Button");
    process.env.NODE_ENV !== "production" && ge(!(typeof f == "string" && f.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${f}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && ge(!(g && ls(i)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const H = x !== !1, {
    compactSize: q,
    compactItemClassnames: J
  } = yl(A, $), ee = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, ce = Po((ge) => {
    var he, ye;
    return (ye = (he = u ?? q) !== null && he !== void 0 ? he : T) !== null && ye !== void 0 ? ye : ge;
  }), ae = ce && ee[ce] || "", me = I ? "loading" : f, fe = Cr(D, ["navigate"]), G = ne(A, N, B, {
    [`${A}-${l}`]: l !== "default" && l,
    [`${A}-${i}`]: i,
    [`${A}-${ae}`]: ae,
    [`${A}-icon-only`]: !p && p !== 0 && !!me,
    [`${A}-background-ghost`]: g && !ls(i),
    [`${A}-loading`]: I,
    [`${A}-two-chinese-chars`]: L && H && !I,
    [`${A}-block`]: b,
    [`${A}-dangerous`]: !!s,
    [`${A}-rtl`]: $ === "rtl"
  }, J, m, h, O == null ? void 0 : O.className), le = Object.assign(Object.assign({}, O == null ? void 0 : O.style), E), Se = ne(y == null ? void 0 : y.icon, (r = O == null ? void 0 : O.classNames) === null || r === void 0 ? void 0 : r.icon), De = Object.assign(Object.assign({}, (c == null ? void 0 : c.icon) || {}), ((n = O == null ? void 0 : O.styles) === null || n === void 0 ? void 0 : n.icon) || {}), Ee = f && !I ? /* @__PURE__ */ Q.createElement(A0, {
    prefixCls: A,
    className: Se,
    style: De
  }, f) : /* @__PURE__ */ Q.createElement(jB, {
    existIcon: !!f,
    prefixCls: A,
    loading: !!I
  }), oe = p || p === 0 ? IB(p, M && H) : null;
  if (fe.href !== void 0)
    return j(/* @__PURE__ */ Q.createElement("a", Object.assign({}, fe, {
      className: ne(G, {
        [`${A}-disabled`]: R
      }),
      href: R ? void 0 : fe.href,
      style: le,
      onClick: V,
      ref: Z,
      tabIndex: R ? -1 : 0
    }), Ee, oe));
  let se = /* @__PURE__ */ Q.createElement("button", Object.assign({}, D, {
    type: C,
    className: G,
    style: le,
    onClick: V,
    disabled: R,
    ref: Z
  }), Ee, oe, !!J && /* @__PURE__ */ Q.createElement(o2, {
    key: "compact",
    prefixCls: A
  }));
  return ls(i) || (se = /* @__PURE__ */ Q.createElement(D0, {
    component: "Button",
    disabled: !!I
  }, se)), j(se);
}, Cl = /* @__PURE__ */ br(l2);
process.env.NODE_ENV !== "production" && (Cl.displayName = "Button");
Cl.Group = RB;
Cl.__ANT_BUTTON = !0;
const xr = Cl;
var I0 = /* @__PURE__ */ v.createContext(null), Cm = [];
function u2(e, t) {
  var r = v.useState(function() {
    if (!pr())
      return null;
    var p = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && p.setAttribute("data-debug", t), p;
  }), n = ue(r, 1), a = n[0], o = v.useRef(!1), i = v.useContext(I0), s = v.useState(Cm), l = ue(s, 2), u = l[0], c = l[1], d = i || (o.current ? void 0 : function(p) {
    c(function(f) {
      var g = [p].concat(Oe(f));
      return g;
    });
  });
  function m() {
    a.parentElement || document.body.appendChild(a), o.current = !0;
  }
  function h() {
    var p;
    (p = a.parentElement) === null || p === void 0 || p.removeChild(a), o.current = !1;
  }
  return jt(function() {
    return e ? i ? i(m) : m() : h(), h;
  }, [e]), jt(function() {
    u.length && (u.forEach(function(p) {
      return p();
    }), c(Cm));
  }, [u]), [a, d];
}
function c2(e) {
  var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), r = document.createElement("div");
  r.id = t;
  var n = r.style;
  n.position = "absolute", n.left = "0", n.top = "0", n.width = "100px", n.height = "100px", n.overflow = "scroll";
  var a, o;
  if (e) {
    var i = getComputedStyle(e);
    n.scrollbarColor = i.scrollbarColor, n.scrollbarWidth = i.scrollbarWidth;
    var s = getComputedStyle(e, "::-webkit-scrollbar"), l = parseInt(s.width, 10), u = parseInt(s.height, 10);
    try {
      var c = l ? "width: ".concat(s.width, ";") : "", d = u ? "height: ".concat(s.height, ";") : "";
      Tn(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(c, `
`).concat(d, `
}`), t);
    } catch (p) {
      console.error(p), a = l, o = u;
    }
  }
  document.body.appendChild(r);
  var m = e && a && !isNaN(a) ? a : r.offsetWidth - r.clientWidth, h = e && o && !isNaN(o) ? o : r.offsetHeight - r.clientHeight;
  return document.body.removeChild(r), Ci(t), {
    width: m,
    height: h
  };
}
function f2(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : c2(e);
}
function d2() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var v2 = "rc-util-locker-".concat(Date.now()), Em = 0;
function m2(e) {
  var t = !!e, r = v.useState(function() {
    return Em += 1, "".concat(v2, "_").concat(Em);
  }), n = ue(r, 1), a = n[0];
  jt(function() {
    if (t) {
      var o = f2(document.body).width, i = d2();
      Tn(`
html body {
  overflow-y: hidden;
  `.concat(i ? "width: calc(100% - ".concat(o, "px);") : "", `
}`), a);
    } else
      Ci(a);
    return function() {
      Ci(a);
    };
  }, [t, a]);
}
var wm = !1;
function g2(e) {
  return typeof e == "boolean" && (wm = e), wm;
}
var Sm = function(t) {
  return t === !1 ? !1 : !pr() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, jf = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.open, n = e.autoLock, a = e.getContainer, o = e.debug, i = e.autoDestroy, s = i === void 0 ? !0 : i, l = e.children, u = v.useState(r), c = ue(u, 2), d = c[0], m = c[1], h = d || r;
  process.env.NODE_ENV !== "production" && yt(pr() || !r, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), v.useEffect(function() {
    (s || r) && m(r);
  }, [r, s]);
  var p = v.useState(function() {
    return Sm(a);
  }), f = ue(p, 2), g = f[0], b = f[1];
  v.useEffect(function() {
    var N = Sm(a);
    b(N ?? null);
  });
  var C = u2(h && !g, o), y = ue(C, 2), E = y[0], D = y[1], S = g ?? E;
  m2(n && r && pr() && (S === E || S === document.body));
  var x = null;
  if (l && Wn(l) && t) {
    var $ = l;
    x = $.ref;
  }
  var O = Pi(x, t);
  if (!h || !pr() || g === void 0)
    return null;
  var A = S === !1 || g2(), j = l;
  return t && (j = /* @__PURE__ */ v.cloneElement(l, {
    ref: O
  })), /* @__PURE__ */ v.createElement(I0.Provider, {
    value: D
  }, A ? j : /* @__PURE__ */ _y(j, S));
});
process.env.NODE_ENV !== "production" && (jf.displayName = "Portal");
function p2() {
  var e = Y({}, v);
  return e.useId;
}
var Dm = 0, xm = p2();
const h2 = xm ? (
  // Use React `useId`
  function(t) {
    var r = xm();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : r);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var r = v.useState("ssr-id"), n = ue(r, 2), a = n[0], o = n[1];
    return v.useEffect(function() {
      var i = Dm;
      Dm += 1, o("rc_unique_".concat(i));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : a);
  }
);
var T0 = function(t) {
  if (pr() && window.document.documentElement) {
    var r = Array.isArray(t) ? t : [t], n = window.document.documentElement;
    return r.some(function(a) {
      return a in n.style;
    });
  }
  return !1;
}, b2 = function(t, r) {
  if (!T0(t))
    return !1;
  var n = document.createElement("div"), a = n.style[t];
  return n.style[t] = r, n.style[t] !== a;
};
function Om(e, t) {
  return !Array.isArray(e) && t !== void 0 ? b2(e, t) : T0(e);
}
var Ca = "RC_FORM_INTERNAL_HOOKS", wt = function() {
  yt(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, Na = /* @__PURE__ */ v.createContext({
  getFieldValue: wt,
  getFieldsValue: wt,
  getFieldError: wt,
  getFieldWarning: wt,
  getFieldsError: wt,
  isFieldsTouched: wt,
  isFieldTouched: wt,
  isFieldValidating: wt,
  isFieldsValidating: wt,
  resetFields: wt,
  setFields: wt,
  setFieldValue: wt,
  setFieldsValue: wt,
  validateFields: wt,
  submit: wt,
  getInternalHooks: function() {
    return wt(), {
      dispatch: wt,
      initEntityValue: wt,
      registerField: wt,
      useSubscribe: wt,
      setInitialValues: wt,
      destroyForm: wt,
      setCallbacks: wt,
      registerWatch: wt,
      getFields: wt,
      setValidateMessages: wt,
      setPreserve: wt,
      getInitialValue: wt
    };
  }
}), xi = /* @__PURE__ */ v.createContext(null);
function Sc(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function y2(e) {
  return e && !!e._init;
}
function Ea() {
  return Ea = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ea.apply(this, arguments);
}
function C2(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Oi(e, t);
}
function Dc(e) {
  return Dc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Dc(e);
}
function Oi(e, t) {
  return Oi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Oi(e, t);
}
function E2() {
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
function $s(e, t, r) {
  return E2() ? $s = Reflect.construct.bind() : $s = function(a, o, i) {
    var s = [null];
    s.push.apply(s, o);
    var l = Function.bind.apply(a, s), u = new l();
    return i && Oi(u, i.prototype), u;
  }, $s.apply(null, arguments);
}
function w2(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function xc(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return xc = function(n) {
    if (n === null || !w2(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(n))
        return t.get(n);
      t.set(n, a);
    }
    function a() {
      return $s(n, arguments, Dc(this).constructor);
    }
    return a.prototype = Object.create(n.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Oi(a, n);
  }, xc(e);
}
var S2 = /%[sdj%]/g, M0 = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (M0 = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, r);
});
function Oc(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(r) {
    var n = r.field;
    t[n] = t[n] || [], t[n].push(r);
  }), t;
}
function Ir(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var a = 0, o = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var i = e.replace(S2, function(s) {
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
function D2(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Jt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || D2(t) && typeof e == "string" && !e);
}
function x2(e, t, r) {
  var n = [], a = 0, o = e.length;
  function i(s) {
    n.push.apply(n, s || []), a++, a === o && r(n);
  }
  e.forEach(function(s) {
    t(s, i);
  });
}
function $m(e, t, r) {
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
function O2(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, e[r] || []);
  }), t;
}
var Am = /* @__PURE__ */ function(e) {
  C2(t, e);
  function t(r, n) {
    var a;
    return a = e.call(this, "Async Validation Error") || this, a.errors = r, a.fields = n, a;
  }
  return t;
}(/* @__PURE__ */ xc(Error));
function $2(e, t, r, n, a) {
  if (t.first) {
    var o = new Promise(function(m, h) {
      var p = function(b) {
        return n(b), b.length ? h(new Am(b, Oc(b))) : m(a);
      }, f = O2(e);
      $m(f, r, p);
    });
    return o.catch(function(m) {
      return m;
    }), o;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), l = s.length, u = 0, c = [], d = new Promise(function(m, h) {
    var p = function(g) {
      if (c.push.apply(c, g), u++, u === l)
        return n(c), c.length ? h(new Am(c, Oc(c))) : m(a);
    };
    s.length || (n(c), m(a)), s.forEach(function(f) {
      var g = e[f];
      i.indexOf(f) !== -1 ? $m(g, r, p) : x2(g, r, p);
    });
  });
  return d.catch(function(m) {
    return m;
  }), d;
}
function A2(e) {
  return !!(e && e.message !== void 0);
}
function B2(e, t) {
  for (var r = e, n = 0; n < t.length; n++) {
    if (r == null)
      return r;
    r = r[t[n]];
  }
  return r;
}
function Bm(e, t) {
  return function(r) {
    var n;
    return e.fullFields ? n = B2(t, e.fullFields) : n = t[r.field || e.fullField], A2(r) ? (r.field = r.field || e.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || e.fullField
    };
  };
}
function Fm(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = t[r];
        typeof n == "object" && typeof e[r] == "object" ? e[r] = Ea({}, e[r], n) : e[r] = n;
      }
  }
  return e;
}
var j0 = function(t, r, n, a, o, i) {
  t.required && (!n.hasOwnProperty(t.field) || Jt(r, i || t.type)) && a.push(Ir(o.messages.required, t.fullField));
}, F2 = function(t, r, n, a, o) {
  (/^\s+$/.test(r) || r === "") && a.push(Ir(o.messages.whitespace, t.fullField));
}, us, P2 = function() {
  if (us)
    return us;
  var e = "[a-fA-F\\d:]", t = function(E) {
    return E && E.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
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
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), o = new RegExp("(?:^" + r + "$)|(?:^" + a + "$)"), i = new RegExp("^" + r + "$"), s = new RegExp("^" + a + "$"), l = function(E) {
    return E && E.exact ? o : new RegExp("(?:" + t(E) + r + t(E) + ")|(?:" + t(E) + a + t(E) + ")", "g");
  };
  l.v4 = function(y) {
    return y && y.exact ? i : new RegExp("" + t(y) + r + t(y), "g");
  }, l.v6 = function(y) {
    return y && y.exact ? s : new RegExp("" + t(y) + a + t(y), "g");
  };
  var u = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", d = l.v4().source, m = l.v6().source, h = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", p = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", f = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", g = "(?::\\d{2,5})?", b = '(?:[/?#][^\\s"]*)?', C = "(?:" + u + "|www\\.)" + c + "(?:localhost|" + d + "|" + m + "|" + h + p + f + ")" + g + b;
  return us = new RegExp("(?:^" + C + "$)", "i"), us;
}, Pm = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Qo = {
  integer: function(t) {
    return Qo.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Qo.number(t) && !Qo.integer(t);
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
    return typeof t == "object" && !Qo.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Pm.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(P2());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Pm.hex);
  }
}, R2 = function(t, r, n, a, o) {
  if (t.required && r === void 0) {
    j0(t, r, n, a, o);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? Qo[s](r) || a.push(Ir(o.messages.types[s], t.fullField, t.type)) : s && typeof r !== t.type && a.push(Ir(o.messages.types[s], t.fullField, t.type));
}, N2 = function(t, r, n, a, o) {
  var i = typeof t.len == "number", s = typeof t.min == "number", l = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = r, d = null, m = typeof r == "number", h = typeof r == "string", p = Array.isArray(r);
  if (m ? d = "number" : h ? d = "string" : p && (d = "array"), !d)
    return !1;
  p && (c = r.length), h && (c = r.replace(u, "_").length), i ? c !== t.len && a.push(Ir(o.messages[d].len, t.fullField, t.len)) : s && !l && c < t.min ? a.push(Ir(o.messages[d].min, t.fullField, t.min)) : l && !s && c > t.max ? a.push(Ir(o.messages[d].max, t.fullField, t.max)) : s && l && (c < t.min || c > t.max) && a.push(Ir(o.messages[d].range, t.fullField, t.min, t.max));
}, Ga = "enum", I2 = function(t, r, n, a, o) {
  t[Ga] = Array.isArray(t[Ga]) ? t[Ga] : [], t[Ga].indexOf(r) === -1 && a.push(Ir(o.messages[Ga], t.fullField, t[Ga].join(", ")));
}, T2 = function(t, r, n, a, o) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || a.push(Ir(o.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(r) || a.push(Ir(o.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, ot = {
  required: j0,
  whitespace: F2,
  type: R2,
  range: N2,
  enum: I2,
  pattern: T2
}, M2 = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Jt(r, "string") && !t.required)
      return n();
    ot.required(t, r, a, i, o, "string"), Jt(r, "string") || (ot.type(t, r, a, i, o), ot.range(t, r, a, i, o), ot.pattern(t, r, a, i, o), t.whitespace === !0 && ot.whitespace(t, r, a, i, o));
  }
  n(i);
}, j2 = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Jt(r) && !t.required)
      return n();
    ot.required(t, r, a, i, o), r !== void 0 && ot.type(t, r, a, i, o);
  }
  n(i);
}, _2 = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (r === "" && (r = void 0), Jt(r) && !t.required)
      return n();
    ot.required(t, r, a, i, o), r !== void 0 && (ot.type(t, r, a, i, o), ot.range(t, r, a, i, o));
  }
  n(i);
}, L2 = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Jt(r) && !t.required)
      return n();
    ot.required(t, r, a, i, o), r !== void 0 && ot.type(t, r, a, i, o);
  }
  n(i);
}, k2 = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Jt(r) && !t.required)
      return n();
    ot.required(t, r, a, i, o), Jt(r) || ot.type(t, r, a, i, o);
  }
  n(i);
}, z2 = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Jt(r) && !t.required)
      return n();
    ot.required(t, r, a, i, o), r !== void 0 && (ot.type(t, r, a, i, o), ot.range(t, r, a, i, o));
  }
  n(i);
}, V2 = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Jt(r) && !t.required)
      return n();
    ot.required(t, r, a, i, o), r !== void 0 && (ot.type(t, r, a, i, o), ot.range(t, r, a, i, o));
  }
  n(i);
}, H2 = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (r == null && !t.required)
      return n();
    ot.required(t, r, a, i, o, "array"), r != null && (ot.type(t, r, a, i, o), ot.range(t, r, a, i, o));
  }
  n(i);
}, W2 = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Jt(r) && !t.required)
      return n();
    ot.required(t, r, a, i, o), r !== void 0 && ot.type(t, r, a, i, o);
  }
  n(i);
}, q2 = "enum", K2 = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Jt(r) && !t.required)
      return n();
    ot.required(t, r, a, i, o), r !== void 0 && ot[q2](t, r, a, i, o);
  }
  n(i);
}, U2 = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Jt(r, "string") && !t.required)
      return n();
    ot.required(t, r, a, i, o), Jt(r, "string") || ot.pattern(t, r, a, i, o);
  }
  n(i);
}, G2 = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Jt(r, "date") && !t.required)
      return n();
    if (ot.required(t, r, a, i, o), !Jt(r, "date")) {
      var l;
      r instanceof Date ? l = r : l = new Date(r), ot.type(t, l, a, i, o), l && ot.range(t, l.getTime(), a, i, o);
    }
  }
  n(i);
}, X2 = function(t, r, n, a, o) {
  var i = [], s = Array.isArray(r) ? "array" : typeof r;
  ot.required(t, r, a, i, o, s), n(i);
}, uu = function(t, r, n, a, o) {
  var i = t.type, s = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Jt(r, i) && !t.required)
      return n();
    ot.required(t, r, a, s, o, i), Jt(r, i) || ot.type(t, r, a, s, o);
  }
  n(s);
}, Y2 = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Jt(r) && !t.required)
      return n();
    ot.required(t, r, a, i, o);
  }
  n(i);
}, si = {
  string: M2,
  method: j2,
  number: _2,
  boolean: L2,
  regexp: k2,
  integer: z2,
  float: V2,
  array: H2,
  object: W2,
  enum: K2,
  pattern: U2,
  date: G2,
  url: uu,
  hex: uu,
  email: uu,
  required: X2,
  any: Y2
};
function $c() {
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
var Ac = $c(), ji = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = Ac, this.define(r);
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
    return n && (this._messages = Fm($c(), n)), this._messages;
  }, t.validate = function(n, a, o) {
    var i = this;
    a === void 0 && (a = {}), o === void 0 && (o = function() {
    });
    var s = n, l = a, u = o;
    if (typeof l == "function" && (u = l, l = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, s), Promise.resolve(s);
    function c(f) {
      var g = [], b = {};
      function C(E) {
        if (Array.isArray(E)) {
          var D;
          g = (D = g).concat.apply(D, E);
        } else
          g.push(E);
      }
      for (var y = 0; y < f.length; y++)
        C(f[y]);
      g.length ? (b = Oc(g), u(g, b)) : u(null, s);
    }
    if (l.messages) {
      var d = this.messages();
      d === Ac && (d = $c()), Fm(d, l.messages), l.messages = d;
    } else
      l.messages = this.messages();
    var m = {}, h = l.keys || Object.keys(this.rules);
    h.forEach(function(f) {
      var g = i.rules[f], b = s[f];
      g.forEach(function(C) {
        var y = C;
        typeof y.transform == "function" && (s === n && (s = Ea({}, s)), b = s[f] = y.transform(b)), typeof y == "function" ? y = {
          validator: y
        } : y = Ea({}, y), y.validator = i.getValidationMethod(y), y.validator && (y.field = f, y.fullField = y.fullField || f, y.type = i.getType(y), m[f] = m[f] || [], m[f].push({
          rule: y,
          value: b,
          source: s,
          field: f
        }));
      });
    });
    var p = {};
    return $2(m, l, function(f, g) {
      var b = f.rule, C = (b.type === "object" || b.type === "array") && (typeof b.fields == "object" || typeof b.defaultField == "object");
      C = C && (b.required || !b.required && f.value), b.field = f.field;
      function y(S, x) {
        return Ea({}, x, {
          fullField: b.fullField + "." + S,
          fullFields: b.fullFields ? [].concat(b.fullFields, [S]) : [S]
        });
      }
      function E(S) {
        S === void 0 && (S = []);
        var x = Array.isArray(S) ? S : [S];
        !l.suppressWarning && x.length && e.warning("async-validator:", x), x.length && b.message !== void 0 && (x = [].concat(b.message));
        var $ = x.map(Bm(b, s));
        if (l.first && $.length)
          return p[b.field] = 1, g($);
        if (!C)
          g($);
        else {
          if (b.required && !f.value)
            return b.message !== void 0 ? $ = [].concat(b.message).map(Bm(b, s)) : l.error && ($ = [l.error(b, Ir(l.messages.required, b.field))]), g($);
          var O = {};
          b.defaultField && Object.keys(f.value).map(function(N) {
            O[N] = b.defaultField;
          }), O = Ea({}, O, f.rule.fields);
          var A = {};
          Object.keys(O).forEach(function(N) {
            var B = O[N], P = Array.isArray(B) ? B : [B];
            A[N] = P.map(y.bind(null, N));
          });
          var j = new e(A);
          j.messages(l.messages), f.rule.options && (f.rule.options.messages = l.messages, f.rule.options.error = l.error), j.validate(f.value, f.rule.options || l, function(N) {
            var B = [];
            $ && $.length && B.push.apply(B, $), N && N.length && B.push.apply(B, N), g(B.length ? B : null);
          });
        }
      }
      var D;
      if (b.asyncValidator)
        D = b.asyncValidator(b, f.value, E, f.source, l);
      else if (b.validator) {
        try {
          D = b.validator(b, f.value, E, f.source, l);
        } catch (S) {
          console.error == null || console.error(S), l.suppressValidatorError || setTimeout(function() {
            throw S;
          }, 0), E(S.message);
        }
        D === !0 ? E() : D === !1 ? E(typeof b.message == "function" ? b.message(b.fullField || b.field) : b.message || (b.fullField || b.field) + " fails") : D instanceof Array ? E(D) : D instanceof Error && E(D.message);
      }
      D && D.then && D.then(function() {
        return E();
      }, function(S) {
        return E(S);
      });
    }, function(f) {
      c(f);
    }, s);
  }, t.getType = function(n) {
    if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !si.hasOwnProperty(n.type))
      throw new Error(Ir("Unknown rule type %s", n.type));
    return n.type || "string";
  }, t.getValidationMethod = function(n) {
    if (typeof n.validator == "function")
      return n.validator;
    var a = Object.keys(n), o = a.indexOf("message");
    return o !== -1 && a.splice(o, 1), a.length === 1 && a[0] === "required" ? si.required : si[this.getType(n)] || void 0;
  }, e;
}();
ji.register = function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  si[t] = r;
};
ji.warning = M0;
ji.messages = Ac;
ji.validators = si;
var Fr = "'${name}' is not a valid ${type}", _0 = {
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
    string: Fr,
    method: Fr,
    array: Fr,
    object: Fr,
    number: Fr,
    date: Fr,
    boolean: Fr,
    integer: Fr,
    float: Fr,
    regexp: Fr,
    email: Fr,
    url: Fr,
    hex: Fr
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
}, Rm = ji;
function Z2(e, t) {
  return e.replace(/\$\{\w+\}/g, function(r) {
    var n = r.slice(2, -1);
    return t[n];
  });
}
var Nm = "CODE_LOGIC_ERROR";
function Bc(e, t, r, n, a) {
  return Fc.apply(this, arguments);
}
function Fc() {
  return Fc = _a(/* @__PURE__ */ hr().mark(function e(t, r, n, a, o) {
    var i, s, l, u, c, d, m, h, p;
    return hr().wrap(function(g) {
      for (; ; )
        switch (g.prev = g.next) {
          case 0:
            return i = Y({}, n), delete i.ruleIndex, Rm.warning = function() {
            }, i.validator && (s = i.validator, i.validator = function() {
              try {
                return s.apply(void 0, arguments);
              } catch (b) {
                return console.error(b), Promise.reject(Nm);
              }
            }), l = null, i && i.type === "array" && i.defaultField && (l = i.defaultField, delete i.defaultField), u = new Rm(K({}, t, [i])), c = co(_0, a.validateMessages), u.messages(c), d = [], g.prev = 10, g.next = 13, Promise.resolve(u.validate(K({}, t, r), Y({}, a)));
          case 13:
            g.next = 18;
            break;
          case 15:
            g.prev = 15, g.t0 = g.catch(10), g.t0.errors && (d = g.t0.errors.map(function(b, C) {
              var y = b.message, E = y === Nm ? c.default : y;
              return /* @__PURE__ */ v.isValidElement(E) ? (
                // Wrap ReactNode with `key`
                /* @__PURE__ */ v.cloneElement(E, {
                  key: "error_".concat(C)
                })
              ) : E;
            }));
          case 18:
            if (!(!d.length && l)) {
              g.next = 23;
              break;
            }
            return g.next = 21, Promise.all(r.map(function(b, C) {
              return Bc("".concat(t, ".").concat(C), b, l, a, o);
            }));
          case 21:
            return m = g.sent, g.abrupt("return", m.reduce(function(b, C) {
              return [].concat(Oe(b), Oe(C));
            }, []));
          case 23:
            return h = Y(Y({}, n), {}, {
              name: t,
              enum: (n.enum || []).join(", ")
            }, o), p = d.map(function(b) {
              return typeof b == "string" ? Z2(b, h) : b;
            }), g.abrupt("return", p);
          case 26:
          case "end":
            return g.stop();
        }
    }, e, null, [[10, 15]]);
  })), Fc.apply(this, arguments);
}
function Q2(e, t, r, n, a, o) {
  var i = e.join("."), s = r.map(function(c, d) {
    var m = c.validator, h = Y(Y({}, c), {}, {
      ruleIndex: d
    });
    return m && (h.validator = function(p, f, g) {
      var b = !1, C = function() {
        for (var D = arguments.length, S = new Array(D), x = 0; x < D; x++)
          S[x] = arguments[x];
        Promise.resolve().then(function() {
          yt(!b, "Your validator function has already return a promise. `callback` will be ignored."), b || g.apply(void 0, S);
        });
      }, y = m(p, f, C);
      b = y && typeof y.then == "function" && typeof y.catch == "function", yt(b, "`callback` is deprecated. Please return a promise instead."), b && y.then(function() {
        g();
      }).catch(function(E) {
        g(E || " ");
      });
    }), h;
  }).sort(function(c, d) {
    var m = c.warningOnly, h = c.ruleIndex, p = d.warningOnly, f = d.ruleIndex;
    return !!m == !!p ? h - f : m ? 1 : -1;
  }), l;
  if (a === !0)
    l = new Promise(/* @__PURE__ */ function() {
      var c = _a(/* @__PURE__ */ hr().mark(function d(m, h) {
        var p, f, g;
        return hr().wrap(function(C) {
          for (; ; )
            switch (C.prev = C.next) {
              case 0:
                p = 0;
              case 1:
                if (!(p < s.length)) {
                  C.next = 12;
                  break;
                }
                return f = s[p], C.next = 5, Bc(i, t, f, n, o);
              case 5:
                if (g = C.sent, !g.length) {
                  C.next = 9;
                  break;
                }
                return h([{
                  errors: g,
                  rule: f
                }]), C.abrupt("return");
              case 9:
                p += 1, C.next = 1;
                break;
              case 12:
                m([]);
              case 13:
              case "end":
                return C.stop();
            }
        }, d);
      }));
      return function(d, m) {
        return c.apply(this, arguments);
      };
    }());
  else {
    var u = s.map(function(c) {
      return Bc(i, t, c, n, o).then(function(d) {
        return {
          errors: d,
          rule: c
        };
      });
    });
    l = (a ? eF(u) : J2(u)).then(function(c) {
      return Promise.reject(c);
    });
  }
  return l.catch(function(c) {
    return c;
  }), l;
}
function J2(e) {
  return Pc.apply(this, arguments);
}
function Pc() {
  return Pc = _a(/* @__PURE__ */ hr().mark(function e(t) {
    return hr().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.all(t).then(function(a) {
              var o, i = (o = []).concat.apply(o, Oe(a));
              return i;
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), Pc.apply(this, arguments);
}
function eF(e) {
  return Rc.apply(this, arguments);
}
function Rc() {
  return Rc = _a(/* @__PURE__ */ hr().mark(function e(t) {
    var r;
    return hr().wrap(function(a) {
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
  })), Rc.apply(this, arguments);
}
function Vt(e) {
  return Sc(e);
}
function Im(e, t) {
  var r = {};
  return t.forEach(function(n) {
    var a = bn(e, n);
    r = en(r, n, a);
  }), r;
}
function go(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(n) {
    return L0(t, n, r);
  });
}
function L0(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !r && e.length !== t.length ? !1 : t.every(function(n, a) {
    return e[a] === n;
  });
}
function tF(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || ut(e) !== "object" || ut(t) !== "object")
    return !1;
  var r = Object.keys(e), n = Object.keys(t), a = new Set([].concat(r, n));
  return Oe(a).every(function(o) {
    var i = e[o], s = t[o];
    return typeof i == "function" && typeof s == "function" ? !0 : i === s;
  });
}
function rF(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && ut(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function Tm(e, t, r) {
  var n = e.length;
  if (t < 0 || t >= n || r < 0 || r >= n)
    return e;
  var a = e[t], o = t - r;
  return o > 0 ? [].concat(Oe(e.slice(0, r)), [a], Oe(e.slice(r, t)), Oe(e.slice(t + 1, n))) : o < 0 ? [].concat(Oe(e.slice(0, t)), Oe(e.slice(t + 1, r + 1)), [a], Oe(e.slice(r + 1, n))) : e;
}
var nF = ["name"], kr = [];
function Mm(e, t, r, n, a, o) {
  return typeof e == "function" ? e(t, r, "source" in o ? {
    source: o.source
  } : {}) : n !== a;
}
var _f = /* @__PURE__ */ function(e) {
  Ta(r, e);
  var t = Ri(r);
  function r(n) {
    var a;
    if (Or(this, r), a = t.call(this, n), K(ft(a), "state", {
      resetCount: 0
    }), K(ft(a), "cancelRegisterFunc", null), K(ft(a), "mounted", !1), K(ft(a), "touched", !1), K(ft(a), "dirty", !1), K(ft(a), "validatePromise", void 0), K(ft(a), "prevValidating", void 0), K(ft(a), "errors", kr), K(ft(a), "warnings", kr), K(ft(a), "cancelRegister", function() {
      var l = a.props, u = l.preserve, c = l.isListField, d = l.name;
      a.cancelRegisterFunc && a.cancelRegisterFunc(c, u, Vt(d)), a.cancelRegisterFunc = null;
    }), K(ft(a), "getNamePath", function() {
      var l = a.props, u = l.name, c = l.fieldContext, d = c.prefixName, m = d === void 0 ? [] : d;
      return u !== void 0 ? [].concat(Oe(m), Oe(u)) : [];
    }), K(ft(a), "getRules", function() {
      var l = a.props, u = l.rules, c = u === void 0 ? [] : u, d = l.fieldContext;
      return c.map(function(m) {
        return typeof m == "function" ? m(d) : m;
      });
    }), K(ft(a), "refresh", function() {
      a.mounted && a.setState(function(l) {
        var u = l.resetCount;
        return {
          resetCount: u + 1
        };
      });
    }), K(ft(a), "metaCache", null), K(ft(a), "triggerMetaEvent", function(l) {
      var u = a.props.onMetaChange;
      if (u) {
        var c = Y(Y({}, a.getMeta()), {}, {
          destroy: l
        });
        Eo(a.metaCache, c) || u(c), a.metaCache = c;
      } else
        a.metaCache = null;
    }), K(ft(a), "onStoreChange", function(l, u, c) {
      var d = a.props, m = d.shouldUpdate, h = d.dependencies, p = h === void 0 ? [] : h, f = d.onReset, g = c.store, b = a.getNamePath(), C = a.getValue(l), y = a.getValue(g), E = u && go(u, b);
      switch (c.type === "valueUpdate" && c.source === "external" && C !== y && (a.touched = !0, a.dirty = !0, a.validatePromise = null, a.errors = kr, a.warnings = kr, a.triggerMetaEvent()), c.type) {
        case "reset":
          if (!u || E) {
            a.touched = !1, a.dirty = !1, a.validatePromise = void 0, a.errors = kr, a.warnings = kr, a.triggerMetaEvent(), f == null || f(), a.refresh();
            return;
          }
          break;
        case "remove": {
          if (m) {
            a.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var D = c.data;
          if (E) {
            "touched" in D && (a.touched = D.touched), "validating" in D && !("originRCField" in D) && (a.validatePromise = D.validating ? Promise.resolve([]) : null), "errors" in D && (a.errors = D.errors || kr), "warnings" in D && (a.warnings = D.warnings || kr), a.dirty = !0, a.triggerMetaEvent(), a.reRender();
            return;
          } else if ("value" in D && go(u, b, !0)) {
            a.reRender();
            return;
          }
          if (m && !b.length && Mm(m, l, g, C, y, c)) {
            a.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var S = p.map(Vt);
          if (S.some(function(x) {
            return go(c.relatedFields, x);
          })) {
            a.reRender();
            return;
          }
          break;
        }
        default:
          if (E || (!p.length || b.length || m) && Mm(m, l, g, C, y, c)) {
            a.reRender();
            return;
          }
          break;
      }
      m === !0 && a.reRender();
    }), K(ft(a), "validateRules", function(l) {
      var u = a.getNamePath(), c = a.getValue(), d = l || {}, m = d.triggerName, h = d.validateOnly, p = h === void 0 ? !1 : h, f = Promise.resolve().then(/* @__PURE__ */ _a(/* @__PURE__ */ hr().mark(function g() {
        var b, C, y, E, D, S, x;
        return hr().wrap(function(O) {
          for (; ; )
            switch (O.prev = O.next) {
              case 0:
                if (a.mounted) {
                  O.next = 2;
                  break;
                }
                return O.abrupt("return", []);
              case 2:
                if (b = a.props, C = b.validateFirst, y = C === void 0 ? !1 : C, E = b.messageVariables, D = b.validateDebounce, S = a.getRules(), m && (S = S.filter(function(A) {
                  return A;
                }).filter(function(A) {
                  var j = A.validateTrigger;
                  if (!j)
                    return !0;
                  var N = Sc(j);
                  return N.includes(m);
                })), !(D && m)) {
                  O.next = 10;
                  break;
                }
                return O.next = 8, new Promise(function(A) {
                  setTimeout(A, D);
                });
              case 8:
                if (a.validatePromise === f) {
                  O.next = 10;
                  break;
                }
                return O.abrupt("return", []);
              case 10:
                return x = Q2(u, c, S, l, y, E), x.catch(function(A) {
                  return A;
                }).then(function() {
                  var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : kr;
                  if (a.validatePromise === f) {
                    var j;
                    a.validatePromise = null;
                    var N = [], B = [];
                    (j = A.forEach) === null || j === void 0 || j.call(A, function(P) {
                      var R = P.rule.warningOnly, T = P.errors, F = T === void 0 ? kr : T;
                      R ? B.push.apply(B, Oe(F)) : N.push.apply(N, Oe(F));
                    }), a.errors = N, a.warnings = B, a.triggerMetaEvent(), a.reRender();
                  }
                }), O.abrupt("return", x);
              case 13:
              case "end":
                return O.stop();
            }
        }, g);
      })));
      return p || (a.validatePromise = f, a.dirty = !0, a.errors = kr, a.warnings = kr, a.triggerMetaEvent(), a.reRender()), f;
    }), K(ft(a), "isFieldValidating", function() {
      return !!a.validatePromise;
    }), K(ft(a), "isFieldTouched", function() {
      return a.touched;
    }), K(ft(a), "isFieldDirty", function() {
      if (a.dirty || a.props.initialValue !== void 0)
        return !0;
      var l = a.props.fieldContext, u = l.getInternalHooks(Ca), c = u.getInitialValue;
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
      var l = {
        touched: a.isFieldTouched(),
        validating: a.prevValidating,
        errors: a.errors,
        warnings: a.warnings,
        name: a.getNamePath(),
        validated: a.validatePromise === null
      };
      return l;
    }), K(ft(a), "getOnlyChild", function(l) {
      if (typeof l == "function") {
        var u = a.getMeta();
        return Y(Y({}, a.getOnlyChild(l(a.getControlled(), u, a.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var c = on(l);
      return c.length !== 1 || !/* @__PURE__ */ v.isValidElement(c[0]) ? {
        child: c,
        isFunction: !1
      } : {
        child: c[0],
        isFunction: !1
      };
    }), K(ft(a), "getValue", function(l) {
      var u = a.props.fieldContext.getFieldsValue, c = a.getNamePath();
      return bn(l || u(!0), c);
    }), K(ft(a), "getControlled", function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = a.props, c = u.trigger, d = u.validateTrigger, m = u.getValueFromEvent, h = u.normalize, p = u.valuePropName, f = u.getValueProps, g = u.fieldContext, b = d !== void 0 ? d : g.validateTrigger, C = a.getNamePath(), y = g.getInternalHooks, E = g.getFieldsValue, D = y(Ca), S = D.dispatch, x = a.getValue(), $ = f || function(N) {
        return K({}, p, N);
      }, O = l[c], A = Y(Y({}, l), $(x));
      A[c] = function() {
        a.touched = !0, a.dirty = !0, a.triggerMetaEvent();
        for (var N, B = arguments.length, P = new Array(B), R = 0; R < B; R++)
          P[R] = arguments[R];
        m ? N = m.apply(void 0, P) : N = rF.apply(void 0, [p].concat(P)), h && (N = h(N, x, E(!0))), S({
          type: "updateValue",
          namePath: C,
          value: N
        }), O && O.apply(void 0, P);
      };
      var j = Sc(b || []);
      return j.forEach(function(N) {
        var B = A[N];
        A[N] = function() {
          B && B.apply(void 0, arguments);
          var P = a.props.rules;
          P && P.length && S({
            type: "validateField",
            namePath: C,
            triggerName: N
          });
        };
      }), A;
    }), n.fieldContext) {
      var o = n.fieldContext.getInternalHooks, i = o(Ca), s = i.initEntityValue;
      s(ft(a));
    }
    return a;
  }
  return $r(r, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, o = a.shouldUpdate, i = a.fieldContext;
      if (this.mounted = !0, i) {
        var s = i.getInternalHooks, l = s(Ca), u = l.registerField;
        this.cancelRegisterFunc = u(this);
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
      var a = this.state.resetCount, o = this.props.children, i = this.getOnlyChild(o), s = i.child, l = i.isFunction, u;
      return l ? u = s : /* @__PURE__ */ v.isValidElement(s) ? u = /* @__PURE__ */ v.cloneElement(s, this.getControlled(s.props)) : (yt(!s, "`children` of Field is not validate ReactElement."), u = s), /* @__PURE__ */ v.createElement(v.Fragment, {
        key: a
      }, u);
    }
  }]), r;
}(v.Component);
K(_f, "contextType", Na);
K(_f, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function Lf(e) {
  var t = e.name, r = ct(e, nF), n = v.useContext(Na), a = v.useContext(xi), o = t !== void 0 ? Vt(t) : void 0, i = "keep";
  return r.isListField || (i = "_".concat((o || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && r.isListField && o.length <= 1 && yt(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ v.createElement(_f, _e({
    key: i,
    name: o,
    isListField: !!a
  }, r, {
    fieldContext: n
  }));
}
function k0(e) {
  var t = e.name, r = e.initialValue, n = e.children, a = e.rules, o = e.validateTrigger, i = e.isListField, s = v.useContext(Na), l = v.useContext(xi), u = v.useRef({
    keys: [],
    id: 0
  }), c = u.current, d = v.useMemo(function() {
    var f = Vt(s.prefixName) || [];
    return [].concat(Oe(f), Oe(Vt(t)));
  }, [s.prefixName, t]), m = v.useMemo(function() {
    return Y(Y({}, s), {}, {
      prefixName: d
    });
  }, [s, d]), h = v.useMemo(function() {
    return {
      getKey: function(g) {
        var b = d.length, C = g[b];
        return [c.keys[C], g.slice(b + 1)];
      }
    };
  }, [d]);
  if (typeof n != "function")
    return yt(!1, "Form.List only accepts function as children."), null;
  var p = function(g, b, C) {
    var y = C.source;
    return y === "internal" ? !1 : g !== b;
  };
  return /* @__PURE__ */ v.createElement(xi.Provider, {
    value: h
  }, /* @__PURE__ */ v.createElement(Na.Provider, {
    value: m
  }, /* @__PURE__ */ v.createElement(Lf, {
    name: [],
    shouldUpdate: p,
    rules: a,
    validateTrigger: o,
    initialValue: r,
    isList: !0,
    isListField: i ?? !!l
  }, function(f, g) {
    var b = f.value, C = b === void 0 ? [] : b, y = f.onChange, E = s.getFieldValue, D = function() {
      var O = E(d || []);
      return O || [];
    }, S = {
      add: function(O, A) {
        var j = D();
        A >= 0 && A <= j.length ? (c.keys = [].concat(Oe(c.keys.slice(0, A)), [c.id], Oe(c.keys.slice(A))), y([].concat(Oe(j.slice(0, A)), [O], Oe(j.slice(A))))) : (process.env.NODE_ENV !== "production" && (A < 0 || A > j.length) && yt(!1, "The second parameter of the add function should be a valid positive number."), c.keys = [].concat(Oe(c.keys), [c.id]), y([].concat(Oe(j), [O]))), c.id += 1;
      },
      remove: function(O) {
        var A = D(), j = new Set(Array.isArray(O) ? O : [O]);
        j.size <= 0 || (c.keys = c.keys.filter(function(N, B) {
          return !j.has(B);
        }), y(A.filter(function(N, B) {
          return !j.has(B);
        })));
      },
      move: function(O, A) {
        if (O !== A) {
          var j = D();
          O < 0 || O >= j.length || A < 0 || A >= j.length || (c.keys = Tm(c.keys, O, A), y(Tm(j, O, A)));
        }
      }
    }, x = C || [];
    return Array.isArray(x) || (x = [], process.env.NODE_ENV !== "production" && yt(!1, "Current value of '".concat(d.join(" > "), "' is not an array type."))), n(x.map(function($, O) {
      var A = c.keys[O];
      return A === void 0 && (c.keys[O] = c.id, A = c.keys[O], c.id += 1), {
        name: O,
        key: A,
        isListField: !0
      };
    }), S, g);
  })));
}
function aF(e) {
  var t = !1, r = e.length, n = [];
  return e.length ? new Promise(function(a, o) {
    e.forEach(function(i, s) {
      i.catch(function(l) {
        return t = !0, l;
      }).then(function(l) {
        r -= 1, n[s] = l, !(r > 0) && (t && o(n), a(n));
      });
    });
  }) : Promise.resolve([]);
}
var z0 = "__@field_split__";
function cu(e) {
  return e.map(function(t) {
    return "".concat(ut(t), ":").concat(t);
  }).join(z0);
}
var Xa = /* @__PURE__ */ function() {
  function e() {
    Or(this, e), K(this, "kvs", /* @__PURE__ */ new Map());
  }
  return $r(e, [{
    key: "set",
    value: function(r, n) {
      this.kvs.set(cu(r), n);
    }
  }, {
    key: "get",
    value: function(r) {
      return this.kvs.get(cu(r));
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
      this.kvs.delete(cu(r));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(r) {
      return Oe(this.kvs.entries()).map(function(n) {
        var a = ue(n, 2), o = a[0], i = a[1], s = o.split(z0);
        return r({
          key: s.map(function(l) {
            var u = l.match(/^([^:]*):(.*)$/), c = ue(u, 3), d = c[1], m = c[2];
            return d === "number" ? Number(m) : m;
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
}(), oF = ["name"], iF = /* @__PURE__ */ $r(function e(t) {
  var r = this;
  Or(this, e), K(this, "formHooked", !1), K(this, "forceRootUpdate", void 0), K(this, "subscribable", !0), K(this, "store", {}), K(this, "fieldEntities", []), K(this, "initialValues", {}), K(this, "callbacks", {}), K(this, "validateMessages", null), K(this, "preserve", null), K(this, "lastValidatePromise", null), K(this, "getForm", function() {
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
    return n === Ca ? (r.formHooked = !0, {
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
    }) : (yt(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), K(this, "useSubscribe", function(n) {
    r.subscribable = n;
  }), K(this, "prevWithoutPreserves", null), K(this, "setInitialValues", function(n, a) {
    if (r.initialValues = n || {}, a) {
      var o, i = co(n, r.store);
      (o = r.prevWithoutPreserves) === null || o === void 0 || o.map(function(s) {
        var l = s.key;
        i = en(i, l, bn(n, l));
      }), r.prevWithoutPreserves = null, r.updateStore(i);
    }
  }), K(this, "destroyForm", function() {
    var n = new Xa();
    r.getFieldEntities(!0).forEach(function(a) {
      r.isMergedPreserve(a.isPreserve()) || n.set(a.getNamePath(), !0);
    }), r.prevWithoutPreserves = n;
  }), K(this, "getInitialValue", function(n) {
    var a = bn(r.initialValues, n);
    return n.length ? co(a) : a;
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
      r.timeoutId = null, r.formHooked || yt(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), K(this, "updateStore", function(n) {
    r.store = n;
  }), K(this, "getFieldEntities", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? r.fieldEntities.filter(function(a) {
      return a.getNamePath().length;
    }) : r.fieldEntities;
  }), K(this, "getFieldsMap", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, a = new Xa();
    return r.getFieldEntities(n).forEach(function(o) {
      var i = o.getNamePath();
      a.set(i, o);
    }), a;
  }), K(this, "getFieldEntitiesForNamePathList", function(n) {
    if (!n)
      return r.getFieldEntities(!0);
    var a = r.getFieldsMap(!0);
    return n.map(function(o) {
      var i = Vt(o);
      return a.get(i) || {
        INVALIDATE_NAME_PATH: Vt(o)
      };
    });
  }), K(this, "getFieldsValue", function(n, a) {
    r.warningUnhooked();
    var o, i, s;
    if (n === !0 || Array.isArray(n) ? (o = n, i = a) : n && ut(n) === "object" && (s = n.strict, i = n.filter), o === !0 && !i)
      return r.store;
    var l = r.getFieldEntitiesForNamePathList(Array.isArray(o) ? o : null), u = [];
    return l.forEach(function(c) {
      var d, m, h = "INVALIDATE_NAME_PATH" in c ? c.INVALIDATE_NAME_PATH : c.getNamePath();
      if (s) {
        var p, f;
        if ((p = (f = c).isList) !== null && p !== void 0 && p.call(f))
          return;
      } else if (!o && (d = (m = c).isListField) !== null && d !== void 0 && d.call(m))
        return;
      if (!i)
        u.push(h);
      else {
        var g = "getMeta" in c ? c.getMeta() : null;
        i(g) && u.push(h);
      }
    }), Im(r.store, u.map(Vt));
  }), K(this, "getFieldValue", function(n) {
    r.warningUnhooked();
    var a = Vt(n);
    return bn(r.store, a);
  }), K(this, "getFieldsError", function(n) {
    r.warningUnhooked();
    var a = r.getFieldEntitiesForNamePathList(n);
    return a.map(function(o, i) {
      return o && !("INVALIDATE_NAME_PATH" in o) ? {
        name: o.getNamePath(),
        errors: o.getErrors(),
        warnings: o.getWarnings()
      } : {
        name: Vt(n[i]),
        errors: [],
        warnings: []
      };
    });
  }), K(this, "getFieldError", function(n) {
    r.warningUnhooked();
    var a = Vt(n), o = r.getFieldsError([a])[0];
    return o.errors;
  }), K(this, "getFieldWarning", function(n) {
    r.warningUnhooked();
    var a = Vt(n), o = r.getFieldsError([a])[0];
    return o.warnings;
  }), K(this, "isFieldsTouched", function() {
    r.warningUnhooked();
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
      a[o] = arguments[o];
    var i = a[0], s = a[1], l, u = !1;
    a.length === 0 ? l = null : a.length === 1 ? Array.isArray(i) ? (l = i.map(Vt), u = !1) : (l = null, u = i) : (l = i.map(Vt), u = s);
    var c = r.getFieldEntities(!0), d = function(g) {
      return g.isFieldTouched();
    };
    if (!l)
      return u ? c.every(d) : c.some(d);
    var m = new Xa();
    l.forEach(function(f) {
      m.set(f, []);
    }), c.forEach(function(f) {
      var g = f.getNamePath();
      l.forEach(function(b) {
        b.every(function(C, y) {
          return g[y] === C;
        }) && m.update(b, function(C) {
          return [].concat(Oe(C), [f]);
        });
      });
    });
    var h = function(g) {
      return g.some(d);
    }, p = m.map(function(f) {
      var g = f.value;
      return g;
    });
    return u ? p.every(h) : p.some(h);
  }), K(this, "isFieldTouched", function(n) {
    return r.warningUnhooked(), r.isFieldsTouched([n]);
  }), K(this, "isFieldsValidating", function(n) {
    r.warningUnhooked();
    var a = r.getFieldEntities();
    if (!n)
      return a.some(function(i) {
        return i.isFieldValidating();
      });
    var o = n.map(Vt);
    return a.some(function(i) {
      var s = i.getNamePath();
      return go(o, s) && i.isFieldValidating();
    });
  }), K(this, "isFieldValidating", function(n) {
    return r.warningUnhooked(), r.isFieldsValidating([n]);
  }), K(this, "resetWithFieldInitialValue", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = new Xa(), o = r.getFieldEntities(!0);
    o.forEach(function(l) {
      var u = l.props.initialValue, c = l.getNamePath();
      if (u !== void 0) {
        var d = a.get(c) || /* @__PURE__ */ new Set();
        d.add({
          entity: l,
          value: u
        }), a.set(c, d);
      }
    });
    var i = function(u) {
      u.forEach(function(c) {
        var d = c.props.initialValue;
        if (d !== void 0) {
          var m = c.getNamePath(), h = r.getInitialValue(m);
          if (h !== void 0)
            yt(!1, "Form already set 'initialValues' with path '".concat(m.join("."), "'. Field can not overwrite it."));
          else {
            var p = a.get(m);
            if (p && p.size > 1)
              yt(!1, "Multiple Field with path '".concat(m.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (p) {
              var f = r.getFieldValue(m), g = c.isListField();
              !g && (!n.skipExist || f === void 0) && r.updateStore(en(r.store, m, Oe(p)[0].value));
            }
          }
        }
      });
    }, s;
    n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(l) {
      var u = a.get(l);
      if (u) {
        var c;
        (c = s).push.apply(c, Oe(Oe(u).map(function(d) {
          return d.entity;
        })));
      }
    })) : s = o, i(s);
  }), K(this, "resetFields", function(n) {
    r.warningUnhooked();
    var a = r.store;
    if (!n) {
      r.updateStore(co(r.initialValues)), r.resetWithFieldInitialValue(), r.notifyObservers(a, null, {
        type: "reset"
      }), r.notifyWatch();
      return;
    }
    var o = n.map(Vt);
    o.forEach(function(i) {
      var s = r.getInitialValue(i);
      r.updateStore(en(r.store, i, s));
    }), r.resetWithFieldInitialValue({
      namePathList: o
    }), r.notifyObservers(a, o, {
      type: "reset"
    }), r.notifyWatch(o);
  }), K(this, "setFields", function(n) {
    r.warningUnhooked();
    var a = r.store, o = [];
    n.forEach(function(i) {
      var s = i.name, l = ct(i, oF), u = Vt(s);
      o.push(u), "value" in l && r.updateStore(en(r.store, u, l.value)), r.notifyObservers(a, [u], {
        type: "setField",
        data: i
      });
    }), r.notifyWatch(o);
  }), K(this, "getFields", function() {
    var n = r.getFieldEntities(!0), a = n.map(function(o) {
      var i = o.getNamePath(), s = o.getMeta(), l = Y(Y({}, s), {}, {
        name: i,
        value: r.getFieldValue(i)
      });
      return Object.defineProperty(l, "originRCField", {
        value: !0
      }), l;
    });
    return a;
  }), K(this, "initEntityValue", function(n) {
    var a = n.props.initialValue;
    if (a !== void 0) {
      var o = n.getNamePath(), i = bn(r.store, o);
      i === void 0 && r.updateStore(en(r.store, o, a));
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
      var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (r.fieldEntities = r.fieldEntities.filter(function(d) {
        return d !== n;
      }), !r.isMergedPreserve(s) && (!i || l.length > 1)) {
        var u = i ? void 0 : r.getInitialValue(a);
        if (a.length && r.getFieldValue(a) !== u && r.fieldEntities.every(function(d) {
          return (
            // Only reset when no namePath exist
            !L0(d.getNamePath(), a)
          );
        })) {
          var c = r.store;
          r.updateStore(en(c, a, u, !0)), r.notifyObservers(c, [a], {
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
        var l = s.onStoreChange;
        l(n, a, i);
      });
    } else
      r.forceRootUpdate();
  }), K(this, "triggerDependenciesUpdate", function(n, a) {
    var o = r.getDependencyChildrenFields(a);
    return o.length && r.validateFields(o), r.notifyObservers(n, o, {
      type: "dependenciesUpdate",
      relatedFields: [a].concat(Oe(o))
    }), o;
  }), K(this, "updateValue", function(n, a) {
    var o = Vt(n), i = r.store;
    r.updateStore(en(r.store, o, a)), r.notifyObservers(i, [o], {
      type: "valueUpdate",
      source: "internal"
    }), r.notifyWatch([o]);
    var s = r.triggerDependenciesUpdate(i, o), l = r.callbacks.onValuesChange;
    if (l) {
      var u = Im(r.store, [o]);
      l(u, r.getFieldsValue());
    }
    r.triggerOnFieldsChange([o].concat(Oe(s)));
  }), K(this, "setFieldsValue", function(n) {
    r.warningUnhooked();
    var a = r.store;
    if (n) {
      var o = co(r.store, n);
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
    var a = /* @__PURE__ */ new Set(), o = [], i = new Xa();
    r.getFieldEntities().forEach(function(l) {
      var u = l.props.dependencies;
      (u || []).forEach(function(c) {
        var d = Vt(c);
        i.update(d, function() {
          var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return m.add(l), m;
        });
      });
    });
    var s = function l(u) {
      var c = i.get(u) || /* @__PURE__ */ new Set();
      c.forEach(function(d) {
        if (!a.has(d)) {
          a.add(d);
          var m = d.getNamePath();
          d.isFieldDirty() && m.length && (o.push(m), l(m));
        }
      });
    };
    return s(n), o;
  }), K(this, "triggerOnFieldsChange", function(n, a) {
    var o = r.callbacks.onFieldsChange;
    if (o) {
      var i = r.getFields();
      if (a) {
        var s = new Xa();
        a.forEach(function(u) {
          var c = u.name, d = u.errors;
          s.set(c, d);
        }), i.forEach(function(u) {
          u.errors = s.get(u.name) || u.errors;
        });
      }
      var l = i.filter(function(u) {
        var c = u.name;
        return go(n, c);
      });
      l.length && o(l, i);
    }
  }), K(this, "validateFields", function(n, a) {
    r.warningUnhooked();
    var o, i;
    Array.isArray(n) || typeof n == "string" || typeof a == "string" ? (o = n, i = a) : i = n;
    var s = !!o, l = s ? o.map(Vt) : [], u = [], c = String(Date.now()), d = /* @__PURE__ */ new Set(), m = i || {}, h = m.recursive, p = m.dirty;
    r.getFieldEntities(!0).forEach(function(C) {
      if (s || l.push(C.getNamePath()), !(!C.props.rules || !C.props.rules.length) && !(p && !C.isFieldDirty())) {
        var y = C.getNamePath();
        if (d.add(y.join(c)), !s || go(l, y, h)) {
          var E = C.validateRules(Y({
            validateMessages: Y(Y({}, _0), r.validateMessages)
          }, i));
          u.push(E.then(function() {
            return {
              name: y,
              errors: [],
              warnings: []
            };
          }).catch(function(D) {
            var S, x = [], $ = [];
            return (S = D.forEach) === null || S === void 0 || S.call(D, function(O) {
              var A = O.rule.warningOnly, j = O.errors;
              A ? $.push.apply($, Oe(j)) : x.push.apply(x, Oe(j));
            }), x.length ? Promise.reject({
              name: y,
              errors: x,
              warnings: $
            }) : {
              name: y,
              errors: x,
              warnings: $
            };
          }));
        }
      }
    });
    var f = aF(u);
    r.lastValidatePromise = f, f.catch(function(C) {
      return C;
    }).then(function(C) {
      var y = C.map(function(E) {
        var D = E.name;
        return D;
      });
      r.notifyObservers(r.store, y, {
        type: "validateFinish"
      }), r.triggerOnFieldsChange(y, C);
    });
    var g = f.then(function() {
      return r.lastValidatePromise === f ? Promise.resolve(r.getFieldsValue(l)) : Promise.reject([]);
    }).catch(function(C) {
      var y = C.filter(function(E) {
        return E && E.errors.length;
      });
      return Promise.reject({
        values: r.getFieldsValue(l),
        errorFields: y,
        outOfDate: r.lastValidatePromise !== f
      });
    });
    g.catch(function(C) {
      return C;
    });
    var b = l.filter(function(C) {
      return d.has(C.join(c));
    });
    return r.triggerOnFieldsChange(b), g;
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
function kf(e) {
  var t = v.useRef(), r = v.useState({}), n = ue(r, 2), a = n[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var o = function() {
        a({});
      }, i = new iF(o);
      t.current = i.getForm();
    }
  return [t.current];
}
var Nc = /* @__PURE__ */ v.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), V0 = function(t) {
  var r = t.validateMessages, n = t.onFormChange, a = t.onFormFinish, o = t.children, i = v.useContext(Nc), s = v.useRef({});
  return /* @__PURE__ */ v.createElement(Nc.Provider, {
    value: Y(Y({}, i), {}, {
      validateMessages: Y(Y({}, i.validateMessages), r),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(u, c) {
        n && n(u, {
          changedFields: c,
          forms: s.current
        }), i.triggerFormChange(u, c);
      },
      triggerFormFinish: function(u, c) {
        a && a(u, {
          values: c,
          forms: s.current
        }), i.triggerFormFinish(u, c);
      },
      registerForm: function(u, c) {
        u && (s.current = Y(Y({}, s.current), {}, K({}, u, c))), i.registerForm(u, c);
      },
      unregisterForm: function(u) {
        var c = Y({}, s.current);
        delete c[u], s.current = c, i.unregisterForm(u);
      }
    })
  }, o);
}, sF = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"], lF = function(t, r) {
  var n = t.name, a = t.initialValues, o = t.fields, i = t.form, s = t.preserve, l = t.children, u = t.component, c = u === void 0 ? "form" : u, d = t.validateMessages, m = t.validateTrigger, h = m === void 0 ? "onChange" : m, p = t.onValuesChange, f = t.onFieldsChange, g = t.onFinish, b = t.onFinishFailed, C = ct(t, sF), y = v.useContext(Nc), E = kf(i), D = ue(E, 1), S = D[0], x = S.getInternalHooks(Ca), $ = x.useSubscribe, O = x.setInitialValues, A = x.setCallbacks, j = x.setValidateMessages, N = x.setPreserve, B = x.destroyForm;
  v.useImperativeHandle(r, function() {
    return S;
  }), v.useEffect(function() {
    return y.registerForm(n, S), function() {
      y.unregisterForm(n);
    };
  }, [y, S, n]), j(Y(Y({}, y.validateMessages), d)), A({
    onValuesChange: p,
    onFieldsChange: function(U) {
      if (y.triggerFormChange(n, U), f) {
        for (var Z = arguments.length, M = new Array(Z > 1 ? Z - 1 : 0), V = 1; V < Z; V++)
          M[V - 1] = arguments[V];
        f.apply(void 0, [U].concat(M));
      }
    },
    onFinish: function(U) {
      y.triggerFormFinish(n, U), g && g(U);
    },
    onFinishFailed: b
  }), N(s);
  var P = v.useRef(null);
  O(a, !P.current), P.current || (P.current = !0), v.useEffect(
    function() {
      return B;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var R, T = typeof l == "function";
  if (T) {
    var F = S.getFieldsValue(!0);
    R = l(F, S);
  } else
    R = l;
  $(!T);
  var I = v.useRef();
  v.useEffect(function() {
    tF(I.current || [], o || []) || S.setFields(o || []), I.current = o;
  }, [o, S]);
  var k = v.useMemo(function() {
    return Y(Y({}, S), {}, {
      validateTrigger: h
    });
  }, [S, h]), L = /* @__PURE__ */ v.createElement(xi.Provider, {
    value: null
  }, /* @__PURE__ */ v.createElement(Na.Provider, {
    value: k
  }, R));
  return c === !1 ? L : /* @__PURE__ */ v.createElement(c, _e({}, C, {
    onSubmit: function(U) {
      U.preventDefault(), U.stopPropagation(), S.submit();
    },
    onReset: function(U) {
      var Z;
      U.preventDefault(), S.resetFields(), (Z = C.onReset) === null || Z === void 0 || Z.call(C, U);
    }
  }), L);
};
function jm(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var uF = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), r = ze(t);
  yt(r.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function H0() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], a = t[1], o = a === void 0 ? {} : a, i = y2(o) ? {
    form: o
  } : o, s = i.form, l = Qt(), u = ue(l, 2), c = u[0], d = u[1], m = Pt(function() {
    return jm(c);
  }, [c]), h = ze(m);
  h.current = m;
  var p = Ct(Na), f = s || p, g = f && f._init;
  process.env.NODE_ENV !== "production" && yt(t.length === 2 ? s ? g : !0 : g, "useWatch requires a form instance since it can not auto detect from context.");
  var b = Vt(n), C = ze(b);
  return C.current = b, uF(b), At(
    function() {
      if (g) {
        var y = f.getFieldsValue, E = f.getInternalHooks, D = E(Ca), S = D.registerWatch, x = function(j, N) {
          var B = i.preserve ? N : j;
          return typeof n == "function" ? n(B) : bn(B, C.current);
        }, $ = S(function(A, j) {
          var N = x(A, j), B = jm(N);
          h.current !== B && (h.current = B, d(N));
        }), O = x(y(), y(!0));
        return c !== O && d(O), $;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [g]
  ), c;
}
var cF = /* @__PURE__ */ v.forwardRef(lF), Ro = cF;
Ro.FormProvider = V0;
Ro.Field = Lf;
Ro.List = k0;
Ro.useForm = kf;
Ro.useWatch = H0;
const zn = /* @__PURE__ */ v.createContext({
  labelAlign: "right",
  vertical: !1,
  itemRef: () => {
  }
}), W0 = /* @__PURE__ */ v.createContext(null), q0 = (e) => {
  const t = Cr(e, ["prefixCls"]);
  return /* @__PURE__ */ v.createElement(V0, Object.assign({}, t));
}, zf = /* @__PURE__ */ v.createContext({
  prefixCls: ""
}), Ur = /* @__PURE__ */ v.createContext({});
process.env.NODE_ENV !== "production" && (Ur.displayName = "FormItemInputContext");
const _m = (e) => {
  let {
    children: t,
    status: r,
    override: n
  } = e;
  const a = Ct(Ur), o = Pt(() => {
    const i = Object.assign({}, a);
    return n && delete i.isFormItemInput, r && (delete i.status, delete i.hasFeedback, delete i.feedbackIcon), i;
  }, [r, n, a]);
  return /* @__PURE__ */ v.createElement(Ur.Provider, {
    value: o
  }, t);
}, K0 = /* @__PURE__ */ _r(void 0), fF = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), dF = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Vf = function(e, t, r, n) {
  const o = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]: Object.assign(Object.assign({}, fF(n)), {
      animationPlayState: "paused"
    }),
    [`${o}${e}-leave`]: Object.assign(Object.assign({}, dF(n)), {
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
}, vF = new St("antMoveDownIn", {
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
}), mF = new St("antMoveDownOut", {
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
}), gF = new St("antMoveLeftIn", {
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
}), pF = new St("antMoveLeftOut", {
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
}), hF = new St("antMoveRightIn", {
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
}), bF = new St("antMoveRightOut", {
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
}), yF = new St("antMoveUpIn", {
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
}), CF = new St("antMoveUpOut", {
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
}), EF = {
  "move-up": {
    inKeyframes: yF,
    outKeyframes: CF
  },
  "move-down": {
    inKeyframes: vF,
    outKeyframes: mF
  },
  "move-left": {
    inKeyframes: gF,
    outKeyframes: pF
  },
  "move-right": {
    inKeyframes: hF,
    outKeyframes: bF
  }
}, Lm = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = EF[t];
  return [Vf(n, a, o, e.motionDurationMid), {
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
}, U0 = new St("antSlideUpIn", {
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
}), G0 = new St("antSlideUpOut", {
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
}), X0 = new St("antSlideDownIn", {
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
}), Y0 = new St("antSlideDownOut", {
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
}), wF = new St("antSlideLeftIn", {
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
}), SF = new St("antSlideLeftOut", {
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
}), DF = new St("antSlideRightIn", {
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
}), xF = new St("antSlideRightOut", {
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
}), OF = {
  "slide-up": {
    inKeyframes: U0,
    outKeyframes: G0
  },
  "slide-down": {
    inKeyframes: X0,
    outKeyframes: Y0
  },
  "slide-left": {
    inKeyframes: wF,
    outKeyframes: SF
  },
  "slide-right": {
    inKeyframes: DF,
    outKeyframes: xF
  }
}, Gs = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = OF[t];
  return [Vf(n, a, o, e.motionDurationMid), {
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
}, Hf = new St("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), $F = new St("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), km = new St("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), zm = new St("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), AF = new St("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), BF = new St("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), FF = new St("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), PF = new St("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), RF = new St("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), NF = new St("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), IF = new St("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), TF = new St("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), MF = {
  zoom: {
    inKeyframes: Hf,
    outKeyframes: $F
  },
  "zoom-big": {
    inKeyframes: km,
    outKeyframes: zm
  },
  "zoom-big-fast": {
    inKeyframes: km,
    outKeyframes: zm
  },
  "zoom-left": {
    inKeyframes: FF,
    outKeyframes: PF
  },
  "zoom-right": {
    inKeyframes: RF,
    outKeyframes: NF
  },
  "zoom-up": {
    inKeyframes: AF,
    outKeyframes: BF
  },
  "zoom-down": {
    inKeyframes: IF,
    outKeyframes: TF
  }
}, Wf = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = MF[t];
  return [Vf(n, a, o, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
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
}, Z0 = (e) => ({
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
function jF(e) {
  return (t) => /* @__PURE__ */ v.createElement(c0, {
    theme: {
      token: {
        motion: !1,
        zIndexPopupBase: 0
      }
    }
  }, /* @__PURE__ */ v.createElement(e, Object.assign({}, t)));
}
const _F = (e, t, r, n) => jF((o) => {
  const {
    prefixCls: i,
    style: s
  } = o, l = v.useRef(null), [u, c] = v.useState(0), [d, m] = v.useState(0), [h, p] = qr(!1, {
    value: o.open
  }), {
    getPrefixCls: f
  } = v.useContext(mt), g = f(t || "select", i);
  v.useEffect(() => {
    if (p(!0), typeof ResizeObserver < "u") {
      const y = new ResizeObserver((D) => {
        const S = D[0].target;
        c(S.offsetHeight + 8), m(S.offsetWidth);
      }), E = setInterval(() => {
        var D;
        const S = r ? `.${r(g)}` : `.${g}-dropdown`, x = (D = l.current) === null || D === void 0 ? void 0 : D.querySelector(S);
        x && (clearInterval(E), y.observe(x));
      }, 10);
      return () => {
        clearInterval(E), y.disconnect();
      };
    }
  }, []);
  let b = Object.assign(Object.assign({}, o), {
    style: Object.assign(Object.assign({}, s), {
      margin: 0
    }),
    open: h,
    visible: h,
    getPopupContainer: () => l.current
  });
  n && (b = n(b));
  const C = {
    paddingBottom: u,
    position: "relative",
    minWidth: d
  };
  return /* @__PURE__ */ v.createElement("div", {
    ref: l,
    style: C
  }, /* @__PURE__ */ v.createElement(e, Object.assign({}, b)));
}), LF = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
};
var kF = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Ya = void 0;
function zF(e, t) {
  var r = e.prefixCls, n = e.invalidate, a = e.item, o = e.renderItem, i = e.responsive, s = e.responsiveDisabled, l = e.registerSize, u = e.itemKey, c = e.className, d = e.style, m = e.children, h = e.display, p = e.order, f = e.component, g = f === void 0 ? "div" : f, b = ct(e, kF), C = i && !h;
  function y($) {
    l(u, $);
  }
  v.useEffect(function() {
    return function() {
      y(null);
    };
  }, []);
  var E = o && a !== Ya ? o(a) : m, D;
  n || (D = {
    opacity: C ? 0 : 1,
    height: C ? 0 : Ya,
    overflowY: C ? "hidden" : Ya,
    order: i ? p : Ya,
    pointerEvents: C ? "none" : Ya,
    position: C ? "absolute" : Ya
  });
  var S = {};
  C && (S["aria-hidden"] = !0);
  var x = /* @__PURE__ */ v.createElement(g, _e({
    className: ne(!n && r, c),
    style: Y(Y({}, D), d)
  }, S, b, {
    ref: t
  }), E);
  return i && (x = /* @__PURE__ */ v.createElement(sa, {
    onResize: function(O) {
      var A = O.offsetWidth;
      y(A);
    },
    disabled: s
  }, x)), x;
}
var li = /* @__PURE__ */ v.forwardRef(zF);
li.displayName = "Item";
function VF(e) {
  if (typeof MessageChannel > "u")
    Ht(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function HF() {
  var e = v.useRef(null), t = function(n) {
    e.current || (e.current = [], VF(function() {
      Ly(function() {
        e.current.forEach(function(a) {
          a();
        }), e.current = null;
      });
    })), e.current.push(n);
  };
  return t;
}
function Ko(e, t) {
  var r = v.useState(t), n = ue(r, 2), a = n[0], o = n[1], i = Rr(function(s) {
    e(function() {
      o(s);
    });
  });
  return [a, i];
}
var Xs = /* @__PURE__ */ Q.createContext(null), WF = ["component"], qF = ["className"], KF = ["className"], UF = function(t, r) {
  var n = v.useContext(Xs);
  if (!n) {
    var a = t.component, o = a === void 0 ? "div" : a, i = ct(t, WF);
    return /* @__PURE__ */ v.createElement(o, _e({}, i, {
      ref: r
    }));
  }
  var s = n.className, l = ct(n, qF), u = t.className, c = ct(t, KF);
  return /* @__PURE__ */ v.createElement(Xs.Provider, {
    value: null
  }, /* @__PURE__ */ v.createElement(li, _e({
    ref: r,
    className: ne(s, u)
  }, l, c)));
}, Q0 = /* @__PURE__ */ v.forwardRef(UF);
Q0.displayName = "RawItem";
var GF = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], J0 = "responsive", eb = "invalidate";
function XF(e) {
  return "+ ".concat(e.length, " ...");
}
function YF(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-overflow" : r, a = e.data, o = a === void 0 ? [] : a, i = e.renderItem, s = e.renderRawItem, l = e.itemKey, u = e.itemWidth, c = u === void 0 ? 10 : u, d = e.ssr, m = e.style, h = e.className, p = e.maxCount, f = e.renderRest, g = e.renderRawRest, b = e.suffix, C = e.component, y = C === void 0 ? "div" : C, E = e.itemComponent, D = e.onVisibleChange, S = ct(e, GF), x = d === "full", $ = HF(), O = Ko($, null), A = ue(O, 2), j = A[0], N = A[1], B = j || 0, P = Ko($, /* @__PURE__ */ new Map()), R = ue(P, 2), T = R[0], F = R[1], I = Ko($, 0), k = ue(I, 2), L = k[0], W = k[1], U = Ko($, 0), Z = ue(U, 2), M = Z[0], V = Z[1], H = Ko($, 0), q = ue(H, 2), J = q[0], ee = q[1], ce = Qt(null), ae = ue(ce, 2), me = ae[0], fe = ae[1], G = Qt(null), le = ue(G, 2), Se = le[0], De = le[1], Ee = v.useMemo(function() {
    return Se === null && x ? Number.MAX_SAFE_INTEGER : Se || 0;
  }, [Se, j]), oe = Qt(!1), se = ue(oe, 2), ge = se[0], he = se[1], ye = "".concat(n, "-item"), Ne = Math.max(L, M), $e = p === J0, je = o.length && $e, Et = p === eb, Le = je || typeof p == "number" && o.length > p, xe = Pt(function() {
    var Ae = o;
    return je ? j === null && x ? Ae = o : Ae = o.slice(0, Math.min(o.length, B / c)) : typeof p == "number" && (Ae = o.slice(0, p)), Ae;
  }, [o, c, j, p, je]), Ve = Pt(function() {
    return je ? o.slice(Ee + 1) : o.slice(xe.length);
  }, [o, xe, je, Ee]), He = et(function(Ae, Te) {
    var lt;
    return typeof l == "function" ? l(Ae) : (lt = l && (Ae == null ? void 0 : Ae[l])) !== null && lt !== void 0 ? lt : Te;
  }, [l]), zt = et(i || function(Ae) {
    return Ae;
  }, [i]);
  function rt(Ae, Te, lt) {
    Se === Ae && (Te === void 0 || Te === me) || (De(Ae), lt || (he(Ae < o.length - 1), D == null || D(Ae)), Te !== void 0 && fe(Te));
  }
  function Bt(Ae, Te) {
    N(Te.clientWidth);
  }
  function ht(Ae, Te) {
    F(function(lt) {
      var _t = new Map(lt);
      return Te === null ? _t.delete(Ae) : _t.set(Ae, Te), _t;
    });
  }
  function Qe(Ae, Te) {
    V(Te), W(M);
  }
  function st(Ae, Te) {
    ee(Te);
  }
  function Gt(Ae) {
    return T.get(He(xe[Ae], Ae));
  }
  jt(function() {
    if (B && typeof Ne == "number" && xe) {
      var Ae = J, Te = xe.length, lt = Te - 1;
      if (!Te) {
        rt(0, null);
        return;
      }
      for (var _t = 0; _t < Te; _t += 1) {
        var Xt = Gt(_t);
        if (x && (Xt = Xt || 0), Xt === void 0) {
          rt(_t - 1, void 0, !0);
          break;
        }
        if (Ae += Xt, // Only one means `totalWidth` is the final width
        lt === 0 && Ae <= B || // Last two width will be the final width
        _t === lt - 1 && Ae + Gt(lt) <= B) {
          rt(lt, null);
          break;
        } else if (Ae + Ne > B) {
          rt(_t - 1, Ae - Xt - J + M);
          break;
        }
      }
      b && Gt(0) + J > B && fe(null);
    }
  }, [B, T, M, J, He, xe]);
  var Dt = ge && !!Ve.length, ve = {};
  me !== null && je && (ve = {
    position: "absolute",
    left: me,
    top: 0
  });
  var Pe = {
    prefixCls: ye,
    responsive: je,
    component: E,
    invalidate: Et
  }, ke = s ? function(Ae, Te) {
    var lt = He(Ae, Te);
    return /* @__PURE__ */ v.createElement(Xs.Provider, {
      key: lt,
      value: Y(Y({}, Pe), {}, {
        order: Te,
        item: Ae,
        itemKey: lt,
        registerSize: ht,
        display: Te <= Ee
      })
    }, s(Ae, Te));
  } : function(Ae, Te) {
    var lt = He(Ae, Te);
    return /* @__PURE__ */ v.createElement(li, _e({}, Pe, {
      order: Te,
      key: lt,
      item: Ae,
      renderItem: zt,
      itemKey: lt,
      registerSize: ht,
      display: Te <= Ee
    }));
  }, nt, Je = {
    order: Dt ? Ee : Number.MAX_SAFE_INTEGER,
    className: "".concat(ye, "-rest"),
    registerSize: Qe,
    display: Dt
  };
  if (g)
    g && (nt = /* @__PURE__ */ v.createElement(Xs.Provider, {
      value: Y(Y({}, Pe), Je)
    }, g(Ve)));
  else {
    var Re = f || XF;
    nt = /* @__PURE__ */ v.createElement(li, _e({}, Pe, Je), typeof Re == "function" ? Re(Ve) : Re);
  }
  var Ze = /* @__PURE__ */ v.createElement(y, _e({
    className: ne(!Et && n, h),
    style: m,
    ref: t
  }, S), xe.map(ke), Le ? nt : null, b && /* @__PURE__ */ v.createElement(li, _e({}, Pe, {
    responsive: $e,
    responsiveDisabled: !je,
    order: Ee,
    className: "".concat(ye, "-suffix"),
    registerSize: st,
    display: !0,
    style: ve
  }), b));
  return $e && (Ze = /* @__PURE__ */ v.createElement(sa, {
    onResize: Bt,
    disabled: !je
  }, Ze)), Ze;
}
var Mn = /* @__PURE__ */ v.forwardRef(YF);
Mn.displayName = "Overflow";
Mn.Item = Q0;
Mn.RESPONSIVE = J0;
Mn.INVALIDATE = eb;
function ZF(e) {
  var t = e.prefixCls, r = e.align, n = e.arrow, a = e.arrowPos, o = n || {}, i = o.className, s = o.content, l = a.x, u = l === void 0 ? 0 : l, c = a.y, d = c === void 0 ? 0 : c, m = v.useRef();
  if (!r || !r.points)
    return null;
  var h = {
    position: "absolute"
  };
  if (r.autoArrow !== !1) {
    var p = r.points[0], f = r.points[1], g = p[0], b = p[1], C = f[0], y = f[1];
    g === C || !["t", "b"].includes(g) ? h.top = d : g === "t" ? h.top = 0 : h.bottom = 0, b === y || !["l", "r"].includes(b) ? h.left = u : b === "l" ? h.left = 0 : h.right = 0;
  }
  return /* @__PURE__ */ v.createElement("div", {
    ref: m,
    className: ne("".concat(t, "-arrow"), i),
    style: h
  }, s);
}
function QF(e) {
  var t = e.prefixCls, r = e.open, n = e.zIndex, a = e.mask, o = e.motion;
  return a ? /* @__PURE__ */ v.createElement(Ma, _e({}, o, {
    motionAppear: !0,
    visible: r,
    removeOnLeave: !0
  }), function(i) {
    var s = i.className;
    return /* @__PURE__ */ v.createElement("div", {
      style: {
        zIndex: n
      },
      className: ne("".concat(t, "-mask"), s)
    });
  }) : null;
}
var tb = /* @__PURE__ */ v.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (tb.displayName = "PopupContent");
var rb = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.popup, n = e.className, a = e.prefixCls, o = e.style, i = e.target, s = e.onVisibleChanged, l = e.open, u = e.keepDom, c = e.fresh, d = e.onClick, m = e.mask, h = e.arrow, p = e.arrowPos, f = e.align, g = e.motion, b = e.maskMotion, C = e.forceRender, y = e.getPopupContainer, E = e.autoDestroy, D = e.portal, S = e.zIndex, x = e.onMouseEnter, $ = e.onMouseLeave, O = e.onPointerEnter, A = e.ready, j = e.offsetX, N = e.offsetY, B = e.offsetR, P = e.offsetB, R = e.onAlign, T = e.onPrepare, F = e.stretch, I = e.targetWidth, k = e.targetHeight, L = typeof r == "function" ? r() : r, W = l || u, U = (y == null ? void 0 : y.length) > 0, Z = v.useState(!y || !U), M = ue(Z, 2), V = M[0], H = M[1];
  if (jt(function() {
    !V && U && i && H(!0);
  }, [V, U, i]), !V)
    return null;
  var q = "auto", J = {
    left: "-1000vw",
    top: "-1000vh",
    right: q,
    bottom: q
  };
  if (A || !l) {
    var ee, ce = f.points, ae = f.dynamicInset || ((ee = f._experimental) === null || ee === void 0 ? void 0 : ee.dynamicInset), me = ae && ce[0][1] === "r", fe = ae && ce[0][0] === "b";
    me ? (J.right = B, J.left = q) : (J.left = j, J.right = q), fe ? (J.bottom = P, J.top = q) : (J.top = N, J.bottom = q);
  }
  var G = {};
  return F && (F.includes("height") && k ? G.height = k : F.includes("minHeight") && k && (G.minHeight = k), F.includes("width") && I ? G.width = I : F.includes("minWidth") && I && (G.minWidth = I)), l || (G.pointerEvents = "none"), /* @__PURE__ */ v.createElement(D, {
    open: C || W,
    getContainer: y && function() {
      return y(i);
    },
    autoDestroy: E
  }, /* @__PURE__ */ v.createElement(QF, {
    prefixCls: a,
    open: l,
    zIndex: S,
    mask: m,
    motion: b
  }), /* @__PURE__ */ v.createElement(sa, {
    onResize: R,
    disabled: !l
  }, function(le) {
    return /* @__PURE__ */ v.createElement(Ma, _e({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: C,
      leavedClassName: "".concat(a, "-hidden")
    }, g, {
      onAppearPrepare: T,
      onEnterPrepare: T,
      visible: l,
      onVisibleChanged: function(De) {
        var Ee;
        g == null || (Ee = g.onVisibleChanged) === null || Ee === void 0 || Ee.call(g, De), s(De);
      }
    }), function(Se, De) {
      var Ee = Se.className, oe = Se.style, se = ne(a, Ee, n);
      return /* @__PURE__ */ v.createElement("div", {
        ref: Gr(le, t, De),
        className: se,
        style: Y(Y(Y(Y({
          "--arrow-x": "".concat(p.x || 0, "px"),
          "--arrow-y": "".concat(p.y || 0, "px")
        }, J), G), oe), {}, {
          boxSizing: "border-box",
          zIndex: S
        }, o),
        onMouseEnter: x,
        onMouseLeave: $,
        onPointerEnter: O,
        onClick: d
      }, h && /* @__PURE__ */ v.createElement(ZF, {
        prefixCls: a,
        arrow: h,
        arrowPos: p,
        align: f
      }), /* @__PURE__ */ v.createElement(tb, {
        cache: !l && !c
      }, L));
    });
  }));
});
process.env.NODE_ENV !== "production" && (rb.displayName = "Popup");
var nb = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.children, n = e.getTriggerDOMNode, a = Wn(r), o = v.useCallback(function(s) {
    mf(t, n ? n(s) : s);
  }, [n]), i = Pi(o, r.ref);
  return a ? /* @__PURE__ */ v.cloneElement(r, {
    ref: i
  }) : r;
});
process.env.NODE_ENV !== "production" && (nb.displayName = "TriggerWrapper");
var Vm = /* @__PURE__ */ v.createContext(null);
function Hm(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function JF(e, t, r, n) {
  return v.useMemo(function() {
    var a = Hm(r ?? t), o = Hm(n ?? t), i = new Set(a), s = new Set(o);
    return e && (i.has("hover") && (i.delete("hover"), i.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [i, s];
  }, [e, t, r, n]);
}
function eP() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
  return r ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function tP(e, t, r, n) {
  for (var a = r.points, o = Object.keys(e), i = 0; i < o.length; i += 1) {
    var s, l = o[i];
    if (eP((s = e[l]) === null || s === void 0 ? void 0 : s.points, a, n))
      return "".concat(t, "-placement-").concat(l);
  }
  return "";
}
function Wm(e, t, r, n) {
  return t || (r ? {
    motionName: "".concat(e, "-").concat(r)
  } : n ? {
    motionName: n
  } : null);
}
function _i(e) {
  return e.ownerDocument.defaultView;
}
function Ic(e) {
  for (var t = [], r = e == null ? void 0 : e.parentElement, n = ["hidden", "scroll", "clip", "auto"]; r; ) {
    var a = _i(r).getComputedStyle(r), o = a.overflowX, i = a.overflowY, s = a.overflow;
    [o, i, s].some(function(l) {
      return n.includes(l);
    }) && t.push(r), r = r.parentElement;
  }
  return t;
}
function $i(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function Uo(e) {
  return $i(parseFloat(e), 0);
}
function qm(e, t) {
  var r = Y({}, e);
  return (t || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement || n instanceof HTMLHtmlElement)) {
      var a = _i(n).getComputedStyle(n), o = a.overflow, i = a.overflowClipMargin, s = a.borderTopWidth, l = a.borderBottomWidth, u = a.borderLeftWidth, c = a.borderRightWidth, d = n.getBoundingClientRect(), m = n.offsetHeight, h = n.clientHeight, p = n.offsetWidth, f = n.clientWidth, g = Uo(s), b = Uo(l), C = Uo(u), y = Uo(c), E = $i(Math.round(d.width / p * 1e3) / 1e3), D = $i(Math.round(d.height / m * 1e3) / 1e3), S = (p - f - C - y) * E, x = (m - h - g - b) * D, $ = g * D, O = b * D, A = C * E, j = y * E, N = 0, B = 0;
      if (o === "clip") {
        var P = Uo(i);
        N = P * E, B = P * D;
      }
      var R = d.x + A - N, T = d.y + $ - B, F = R + d.width + 2 * N - A - j - S, I = T + d.height + 2 * B - $ - O - x;
      r.left = Math.max(r.left, R), r.top = Math.max(r.top, T), r.right = Math.min(r.right, F), r.bottom = Math.min(r.bottom, I);
    }
  }), r;
}
function Km(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = "".concat(t), n = r.match(/^(.*)\%$/);
  return n ? e * (parseFloat(n[1]) / 100) : parseFloat(r);
}
function Um(e, t) {
  var r = t || [], n = ue(r, 2), a = n[0], o = n[1];
  return [Km(e.width, a), Km(e.height, o)];
}
function Gm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function Za(e, t) {
  var r = t[0], n = t[1], a, o;
  return r === "t" ? o = e.y : r === "b" ? o = e.y + e.height : o = e.y + e.height / 2, n === "l" ? a = e.x : n === "r" ? a = e.x + e.width : a = e.x + e.width / 2, {
    x: a,
    y: o
  };
}
function Yn(e, t) {
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
function rP(e, t, r, n, a, o, i) {
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
  }), l = ue(s, 2), u = l[0], c = l[1], d = v.useRef(0), m = v.useMemo(function() {
    return t ? Ic(t) : [];
  }, [t]), h = v.useRef({}), p = function() {
    h.current = {};
  };
  e || p();
  var f = Rr(function() {
    if (t && r && e) {
      let cr = function(xn, ca) {
        var Wa = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : se, qa = L.x + xn, _o = L.y + ca, Lo = qa + ee, zi = _o + J, Al = Math.max(qa, Wa.left), Bl = Math.max(_o, Wa.top), Fl = Math.min(Lo, Wa.right), Pl = Math.min(zi, Wa.bottom);
        return Math.max(0, (Fl - Al) * (Pl - Bl));
      }, Ha = function() {
        ie = L.y + Re, pe = ie + J, Me = L.x + Je, Xe = Me + ee;
      };
      var C, y, E = t, D = E.ownerDocument, S = _i(E), x = S.getComputedStyle(E), $ = x.width, O = x.height, A = x.position, j = E.style.left, N = E.style.top, B = E.style.right, P = E.style.bottom, R = E.style.overflow, T = Y(Y({}, a[n]), o), F = D.createElement("div");
      (C = E.parentElement) === null || C === void 0 || C.appendChild(F), F.style.left = "".concat(E.offsetLeft, "px"), F.style.top = "".concat(E.offsetTop, "px"), F.style.position = A, F.style.height = "".concat(E.offsetHeight, "px"), F.style.width = "".concat(E.offsetWidth, "px"), E.style.left = "0", E.style.top = "0", E.style.right = "auto", E.style.bottom = "auto", E.style.overflow = "hidden";
      var I;
      if (Array.isArray(r))
        I = {
          x: r[0],
          y: r[1],
          width: 0,
          height: 0
        };
      else {
        var k = r.getBoundingClientRect();
        I = {
          x: k.x,
          y: k.y,
          width: k.width,
          height: k.height
        };
      }
      var L = E.getBoundingClientRect(), W = D.documentElement, U = W.clientWidth, Z = W.clientHeight, M = W.scrollWidth, V = W.scrollHeight, H = W.scrollTop, q = W.scrollLeft, J = L.height, ee = L.width, ce = I.height, ae = I.width, me = {
        left: 0,
        top: 0,
        right: U,
        bottom: Z
      }, fe = {
        left: -q,
        top: -H,
        right: M - q,
        bottom: V - H
      }, G = T.htmlRegion, le = "visible", Se = "visibleFirst";
      G !== "scroll" && G !== Se && (G = le);
      var De = G === Se, Ee = qm(fe, m), oe = qm(me, m), se = G === le ? oe : Ee, ge = De ? oe : se;
      E.style.left = "auto", E.style.top = "auto", E.style.right = "0", E.style.bottom = "0";
      var he = E.getBoundingClientRect();
      E.style.left = j, E.style.top = N, E.style.right = B, E.style.bottom = P, E.style.overflow = R, (y = E.parentElement) === null || y === void 0 || y.removeChild(F);
      var ye = $i(Math.round(ee / parseFloat($) * 1e3) / 1e3), Ne = $i(Math.round(J / parseFloat(O) * 1e3) / 1e3);
      if (ye === 0 || Ne === 0 || _s(r) && !hl(r))
        return;
      var $e = T.offset, je = T.targetOffset, Et = Um(L, $e), Le = ue(Et, 2), xe = Le[0], Ve = Le[1], He = Um(I, je), zt = ue(He, 2), rt = zt[0], Bt = zt[1];
      I.x -= rt, I.y -= Bt;
      var ht = T.points || [], Qe = ue(ht, 2), st = Qe[0], Gt = Qe[1], Dt = Gm(Gt), ve = Gm(st), Pe = Za(I, Dt), ke = Za(L, ve), nt = Y({}, T), Je = Pe.x - ke.x + xe, Re = Pe.y - ke.y + Ve, Ze = cr(Je, Re), Ae = cr(Je, Re, oe), Te = Za(I, ["t", "l"]), lt = Za(L, ["t", "l"]), _t = Za(I, ["b", "r"]), Xt = Za(L, ["b", "r"]), Tt = T.overflow || {}, cn = Tt.adjustX, fn = Tt.adjustY, Ar = Tt.shiftX, Er = Tt.shiftY, _ = function(ca) {
        return typeof ca == "boolean" ? ca : ca >= 0;
      }, ie, pe, Me, Xe;
      Ha();
      var it = _(fn), Ue = ve[0] === Dt[0];
      if (it && ve[0] === "t" && (pe > ge.bottom || h.current.bt)) {
        var We = Re;
        Ue ? We -= J - ce : We = Te.y - Xt.y - Ve;
        var Ot = cr(Je, We), xt = cr(Je, We, oe);
        // Of course use larger one
        Ot > Ze || Ot === Ze && (!De || // Choose recommend one
        xt >= Ae) ? (h.current.bt = !0, Re = We, Ve = -Ve, nt.points = [Yn(ve, 0), Yn(Dt, 0)]) : h.current.bt = !1;
      }
      if (it && ve[0] === "b" && (ie < ge.top || h.current.tb)) {
        var Ye = Re;
        Ue ? Ye += J - ce : Ye = _t.y - lt.y - Ve;
        var Yt = cr(Je, Ye), Lr = cr(Je, Ye, oe);
        // Of course use larger one
        Yt > Ze || Yt === Ze && (!De || // Choose recommend one
        Lr >= Ae) ? (h.current.tb = !0, Re = Ye, Ve = -Ve, nt.points = [Yn(ve, 0), Yn(Dt, 0)]) : h.current.tb = !1;
      }
      var dn = _(cn), qt = ve[1] === Dt[1];
      if (dn && ve[1] === "l" && (Xe > ge.right || h.current.rl)) {
        var Xr = Je;
        qt ? Xr -= ee - ae : Xr = Te.x - Xt.x - xe;
        var La = cr(Xr, Re), Mo = cr(Xr, Re, oe);
        // Of course use larger one
        La > Ze || La === Ze && (!De || // Choose recommend one
        Mo >= Ae) ? (h.current.rl = !0, Je = Xr, xe = -xe, nt.points = [Yn(ve, 1), Yn(Dt, 1)]) : h.current.rl = !1;
      }
      if (dn && ve[1] === "r" && (Me < ge.left || h.current.lr)) {
        var Cn = Je;
        qt ? Cn += ee - ae : Cn = _t.x - lt.x - xe;
        var la = cr(Cn, Re), Yr = cr(Cn, Re, oe);
        // Of course use larger one
        la > Ze || la === Ze && (!De || // Choose recommend one
        Yr >= Ae) ? (h.current.lr = !0, Je = Cn, xe = -xe, nt.points = [Yn(ve, 1), Yn(Dt, 1)]) : h.current.lr = !1;
      }
      Ha();
      var Zr = Ar === !0 ? 0 : Ar;
      typeof Zr == "number" && (Me < oe.left && (Je -= Me - oe.left - xe, I.x + ae < oe.left + Zr && (Je += I.x - oe.left + ae - Zr)), Xe > oe.right && (Je -= Xe - oe.right - xe, I.x > oe.right - Zr && (Je += I.x - oe.right + Zr)));
      var En = Er === !0 ? 0 : Er;
      typeof En == "number" && (ie < oe.top && (Re -= ie - oe.top - Ve, I.y + ce < oe.top + En && (Re += I.y - oe.top + ce - En)), pe > oe.bottom && (Re -= pe - oe.bottom - Ve, I.y > oe.bottom - En && (Re += I.y - oe.bottom + En)));
      var Kn = L.x + Je, wn = Kn + ee, Qr = L.y + Re, ka = Qr + J, Sn = I.x, vn = Sn + ae, za = I.y, $t = za + ce, vt = Math.max(Kn, Sn), bt = Math.min(wn, vn), rr = (vt + bt) / 2, nr = rr - Kn, Un = Math.max(Qr, za), Gn = Math.min(ka, $t), jo = (Un + Gn) / 2, Va = jo - Qr;
      i == null || i(t, nt);
      var ua = he.right - L.x - (Je + L.width), Dn = he.bottom - L.y - (Re + L.height);
      c({
        ready: !0,
        offsetX: Je / ye,
        offsetY: Re / Ne,
        offsetR: ua / ye,
        offsetB: Dn / Ne,
        arrowX: nr / ye,
        arrowY: Va / Ne,
        scaleX: ye,
        scaleY: Ne,
        align: nt
      });
    }
  }), g = function() {
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
  return jt(b, [n]), jt(function() {
    e || b();
  }, [e]), [u.ready, u.offsetX, u.offsetY, u.offsetR, u.offsetB, u.arrowX, u.arrowY, u.scaleX, u.scaleY, u.align, g];
}
function nP(e, t, r, n, a) {
  jt(function() {
    if (e && t && r) {
      let d = function() {
        n(), a();
      };
      var o = t, i = r, s = Ic(o), l = Ic(i), u = _i(i), c = new Set([u].concat(Oe(s), Oe(l)));
      return c.forEach(function(m) {
        m.addEventListener("scroll", d, {
          passive: !0
        });
      }), u.addEventListener("resize", d, {
        passive: !0
      }), n(), function() {
        c.forEach(function(m) {
          m.removeEventListener("scroll", d), u.removeEventListener("resize", d);
        });
      };
    }
  }, [e, t, r]);
}
function aP(e, t, r, n, a, o, i, s) {
  var l = v.useRef(e), u = v.useRef(!1);
  l.current !== e && (u.current = !0, l.current = e), v.useEffect(function() {
    var c = Ht(function() {
      u.current = !1;
    });
    return function() {
      Ht.cancel(c);
    };
  }, [e]), v.useEffect(function() {
    if (t && n && (!a || o)) {
      var c = function() {
        var A = !1, j = function(P) {
          var R = P.target;
          A = i(R);
        }, N = function(P) {
          var R = P.target;
          !u.current && l.current && !A && !i(R) && s(!1);
        };
        return [j, N];
      }, d = c(), m = ue(d, 2), h = m[0], p = m[1], f = c(), g = ue(f, 2), b = g[0], C = g[1], y = _i(n);
      y.addEventListener("mousedown", h, !0), y.addEventListener("click", p, !0), y.addEventListener("contextmenu", p, !0);
      var E = Ws(r);
      if (E && (E.addEventListener("mousedown", b, !0), E.addEventListener("click", C, !0), E.addEventListener("contextmenu", C, !0)), process.env.NODE_ENV !== "production") {
        var D, S, x = r == null || (D = r.getRootNode) === null || D === void 0 ? void 0 : D.call(r), $ = (S = n.getRootNode) === null || S === void 0 ? void 0 : S.call(n);
        yo(x === $, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        y.removeEventListener("mousedown", h, !0), y.removeEventListener("click", p, !0), y.removeEventListener("contextmenu", p, !0), E && (E.removeEventListener("mousedown", b, !0), E.removeEventListener("click", C, !0), E.removeEventListener("contextmenu", C, !0));
      };
    }
  }, [t, r, n, a, o]);
}
var oP = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function iP() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : jf, t = /* @__PURE__ */ v.forwardRef(function(r, n) {
    var a = r.prefixCls, o = a === void 0 ? "rc-trigger-popup" : a, i = r.children, s = r.action, l = s === void 0 ? "hover" : s, u = r.showAction, c = r.hideAction, d = r.popupVisible, m = r.defaultPopupVisible, h = r.onPopupVisibleChange, p = r.afterPopupVisibleChange, f = r.mouseEnterDelay, g = r.mouseLeaveDelay, b = g === void 0 ? 0.1 : g, C = r.focusDelay, y = r.blurDelay, E = r.mask, D = r.maskClosable, S = D === void 0 ? !0 : D, x = r.getPopupContainer, $ = r.forceRender, O = r.autoDestroy, A = r.destroyPopupOnHide, j = r.popup, N = r.popupClassName, B = r.popupStyle, P = r.popupPlacement, R = r.builtinPlacements, T = R === void 0 ? {} : R, F = r.popupAlign, I = r.zIndex, k = r.stretch, L = r.getPopupClassNameFromAlign, W = r.fresh, U = r.alignPoint, Z = r.onPopupClick, M = r.onPopupAlign, V = r.arrow, H = r.popupMotion, q = r.maskMotion, J = r.popupTransitionName, ee = r.popupAnimation, ce = r.maskTransitionName, ae = r.maskAnimation, me = r.className, fe = r.getTriggerDOMNode, G = ct(r, oP), le = O || A || !1, Se = v.useState(!1), De = ue(Se, 2), Ee = De[0], oe = De[1];
    jt(function() {
      oe(LF());
    }, []);
    var se = v.useRef({}), ge = v.useContext(Vm), he = v.useMemo(function() {
      return {
        registerSubPopup: function(qe, Lt) {
          se.current[qe] = Lt, ge == null || ge.registerSubPopup(qe, Lt);
        }
      };
    }, [ge]), ye = h2(), Ne = v.useState(null), $e = ue(Ne, 2), je = $e[0], Et = $e[1], Le = Rr(function(Ie) {
      _s(Ie) && je !== Ie && Et(Ie), ge == null || ge.registerSubPopup(ye, Ie);
    }), xe = v.useState(null), Ve = ue(xe, 2), He = Ve[0], zt = Ve[1], rt = v.useRef(null), Bt = Rr(function(Ie) {
      _s(Ie) && He !== Ie && (zt(Ie), rt.current = Ie);
    }), ht = v.Children.only(i), Qe = (ht == null ? void 0 : ht.props) || {}, st = {}, Gt = Rr(function(Ie) {
      var qe, Lt, Zt = He;
      return (Zt == null ? void 0 : Zt.contains(Ie)) || ((qe = Ws(Zt)) === null || qe === void 0 ? void 0 : qe.host) === Ie || Ie === Zt || (je == null ? void 0 : je.contains(Ie)) || ((Lt = Ws(je)) === null || Lt === void 0 ? void 0 : Lt.host) === Ie || Ie === je || Object.values(se.current).some(function(kt) {
        return (kt == null ? void 0 : kt.contains(Ie)) || Ie === kt;
      });
    }), Dt = Wm(o, H, ee, J), ve = Wm(o, q, ae, ce), Pe = v.useState(m || !1), ke = ue(Pe, 2), nt = ke[0], Je = ke[1], Re = d ?? nt, Ze = Rr(function(Ie) {
      d === void 0 && Je(Ie);
    });
    jt(function() {
      Je(d || !1);
    }, [d]);
    var Ae = v.useRef(Re);
    Ae.current = Re;
    var Te = v.useRef([]);
    Te.current = [];
    var lt = Rr(function(Ie) {
      var qe;
      Ze(Ie), ((qe = Te.current[Te.current.length - 1]) !== null && qe !== void 0 ? qe : Re) !== Ie && (Te.current.push(Ie), h == null || h(Ie));
    }), _t = v.useRef(), Xt = function() {
      clearTimeout(_t.current);
    }, Tt = function(qe) {
      var Lt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      Xt(), Lt === 0 ? lt(qe) : _t.current = setTimeout(function() {
        lt(qe);
      }, Lt * 1e3);
    };
    v.useEffect(function() {
      return Xt;
    }, []);
    var cn = v.useState(!1), fn = ue(cn, 2), Ar = fn[0], Er = fn[1];
    jt(function(Ie) {
      (!Ie || Re) && Er(!0);
    }, [Re]);
    var _ = v.useState(null), ie = ue(_, 2), pe = ie[0], Me = ie[1], Xe = v.useState([0, 0]), it = ue(Xe, 2), Ue = it[0], We = it[1], Ot = function(qe) {
      We([qe.clientX, qe.clientY]);
    }, xt = rP(Re, je, U ? Ue : He, P, T, F, M), Ye = ue(xt, 11), Yt = Ye[0], Lr = Ye[1], dn = Ye[2], qt = Ye[3], Xr = Ye[4], La = Ye[5], Mo = Ye[6], Cn = Ye[7], la = Ye[8], Yr = Ye[9], Zr = Ye[10], En = JF(Ee, l, u, c), Kn = ue(En, 2), wn = Kn[0], Qr = Kn[1], ka = wn.has("click"), Sn = Qr.has("click") || Qr.has("contextMenu"), vn = Rr(function() {
      Ar || Zr();
    }), za = function() {
      Ae.current && U && Sn && Tt(!1);
    };
    nP(Re, He, je, vn, za), jt(function() {
      vn();
    }, [Ue, P]), jt(function() {
      Re && !(T != null && T[P]) && vn();
    }, [JSON.stringify(F)]);
    var $t = v.useMemo(function() {
      var Ie = tP(T, o, Yr, U);
      return ne(Ie, L == null ? void 0 : L(Yr));
    }, [Yr, L, T, o, U]);
    v.useImperativeHandle(n, function() {
      return {
        nativeElement: rt.current,
        forceAlign: vn
      };
    });
    var vt = v.useState(0), bt = ue(vt, 2), rr = bt[0], nr = bt[1], Un = v.useState(0), Gn = ue(Un, 2), jo = Gn[0], Va = Gn[1], ua = function() {
      if (k && He) {
        var qe = He.getBoundingClientRect();
        nr(qe.width), Va(qe.height);
      }
    }, Dn = function() {
      ua(), vn();
    }, cr = function(qe) {
      Er(!1), Zr(), p == null || p(qe);
    }, Ha = function() {
      return new Promise(function(qe) {
        ua(), Me(function() {
          return qe;
        });
      });
    };
    jt(function() {
      pe && (Zr(), pe(), Me(null));
    }, [pe]);
    function xn(Ie, qe, Lt, Zt) {
      st[Ie] = function(kt) {
        var Vi;
        Zt == null || Zt(kt), Tt(qe, Lt);
        for (var Rl = arguments.length, sd = new Array(Rl > 1 ? Rl - 1 : 0), Hi = 1; Hi < Rl; Hi++)
          sd[Hi - 1] = arguments[Hi];
        (Vi = Qe[Ie]) === null || Vi === void 0 || Vi.call.apply(Vi, [Qe, kt].concat(sd));
      };
    }
    (ka || Sn) && (st.onClick = function(Ie) {
      var qe;
      Ae.current && Sn ? Tt(!1) : !Ae.current && ka && (Ot(Ie), Tt(!0));
      for (var Lt = arguments.length, Zt = new Array(Lt > 1 ? Lt - 1 : 0), kt = 1; kt < Lt; kt++)
        Zt[kt - 1] = arguments[kt];
      (qe = Qe.onClick) === null || qe === void 0 || qe.call.apply(qe, [Qe, Ie].concat(Zt));
    }), aP(Re, Sn, He, je, E, S, Gt, Tt);
    var ca = wn.has("hover"), Wa = Qr.has("hover"), qa, _o;
    ca && (xn("onMouseEnter", !0, f, function(Ie) {
      Ot(Ie);
    }), xn("onPointerEnter", !0, f, function(Ie) {
      Ot(Ie);
    }), qa = function(qe) {
      (Re || Ar) && je !== null && je !== void 0 && je.contains(qe.target) && Tt(!0, f);
    }, U && (st.onMouseMove = function(Ie) {
      var qe;
      (qe = Qe.onMouseMove) === null || qe === void 0 || qe.call(Qe, Ie);
    })), Wa && (xn("onMouseLeave", !1, b), xn("onPointerLeave", !1, b), _o = function() {
      Tt(!1, b);
    }), wn.has("focus") && xn("onFocus", !0, C), Qr.has("focus") && xn("onBlur", !1, y), wn.has("contextMenu") && (st.onContextMenu = function(Ie) {
      var qe;
      Ae.current && Qr.has("contextMenu") ? Tt(!1) : (Ot(Ie), Tt(!0)), Ie.preventDefault();
      for (var Lt = arguments.length, Zt = new Array(Lt > 1 ? Lt - 1 : 0), kt = 1; kt < Lt; kt++)
        Zt[kt - 1] = arguments[kt];
      (qe = Qe.onContextMenu) === null || qe === void 0 || qe.call.apply(qe, [Qe, Ie].concat(Zt));
    }), me && (st.className = ne(Qe.className, me));
    var Lo = Y(Y({}, Qe), st), zi = {}, Al = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Al.forEach(function(Ie) {
      G[Ie] && (zi[Ie] = function() {
        for (var qe, Lt = arguments.length, Zt = new Array(Lt), kt = 0; kt < Lt; kt++)
          Zt[kt] = arguments[kt];
        (qe = Lo[Ie]) === null || qe === void 0 || qe.call.apply(qe, [Lo].concat(Zt)), G[Ie].apply(G, Zt);
      });
    });
    var Bl = /* @__PURE__ */ v.cloneElement(ht, Y(Y({}, Lo), zi)), Fl = {
      x: La,
      y: Mo
    }, Pl = V ? Y({}, V !== !0 ? V : {}) : null;
    return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(sa, {
      disabled: !Re,
      ref: Bt,
      onResize: Dn
    }, /* @__PURE__ */ v.createElement(nb, {
      getTriggerDOMNode: fe
    }, Bl)), /* @__PURE__ */ v.createElement(Vm.Provider, {
      value: he
    }, /* @__PURE__ */ v.createElement(rb, {
      portal: e,
      ref: Le,
      prefixCls: o,
      popup: j,
      className: ne(N, $t),
      style: B,
      target: He,
      onMouseEnter: qa,
      onMouseLeave: _o,
      onPointerEnter: qa,
      zIndex: I,
      open: Re,
      keepDom: Ar,
      fresh: W,
      onClick: Z,
      mask: E,
      motion: Dt,
      maskMotion: ve,
      onVisibleChanged: cr,
      onPrepare: Ha,
      forceRender: $,
      autoDestroy: le,
      getPopupContainer: x,
      align: Yr,
      arrow: Pl,
      arrowPos: Fl,
      ready: Yt,
      offsetX: Lr,
      offsetY: dn,
      offsetR: qt,
      offsetB: Xr,
      onAlign: vn,
      stretch: k,
      targetWidth: rr / Cn,
      targetHeight: jo / la
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const qf = iP(jf);
function Tc(e, t, r) {
  return ne({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: r
  });
}
const ab = (e, t) => t || e, sP = ["outlined", "borderless", "filled"], ob = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
  const r = Ct(K0);
  let n;
  typeof e < "u" ? n = e : t === !1 ? n = "borderless" : n = r ?? "outlined";
  const a = sP.includes(n);
  return [n, a];
};
var lP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" };
const uP = lP;
var cP = function(t, r) {
  return /* @__PURE__ */ v.createElement(vr, _e({}, t, {
    ref: r,
    icon: uP
  }));
}, ib = /* @__PURE__ */ v.forwardRef(cP);
process.env.NODE_ENV !== "production" && (ib.displayName = "CheckOutlined");
const fP = ib;
var dP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" };
const vP = dP;
var mP = function(t, r) {
  return /* @__PURE__ */ v.createElement(vr, _e({}, t, {
    ref: r,
    icon: vP
  }));
}, sb = /* @__PURE__ */ v.forwardRef(mP);
process.env.NODE_ENV !== "production" && (sb.displayName = "SearchOutlined");
const gP = sb, Ai = ["xxl", "xl", "lg", "md", "sm", "xs"], pP = (e) => ({
  xs: `(max-width: ${e.screenXSMax}px)`,
  sm: `(min-width: ${e.screenSM}px)`,
  md: `(min-width: ${e.screenMD}px)`,
  lg: `(min-width: ${e.screenLG}px)`,
  xl: `(min-width: ${e.screenXL}px)`,
  xxl: `(min-width: ${e.screenXXL}px)`
}), hP = (e) => {
  const t = e, r = [].concat(Ai).reverse();
  return r.forEach((n, a) => {
    const o = n.toUpperCase(), i = `screen${o}Min`, s = `screen${o}`;
    if (!(t[i] <= t[s]))
      throw new Error(`${i}<=${s} fails : !(${t[i]}<=${t[s]})`);
    if (a < r.length - 1) {
      const l = `screen${o}Max`;
      if (!(t[s] <= t[l]))
        throw new Error(`${s}<=${l} fails : !(${t[s]}<=${t[l]})`);
      const c = `screen${r[a + 1].toUpperCase()}Min`;
      if (!(t[l] <= t[c]))
        throw new Error(`${l}<=${c} fails : !(${t[l]}<=${t[c]})`);
    }
  }), e;
};
function bP() {
  const [, e] = jr(), t = pP(hP(e));
  return Q.useMemo(() => {
    const r = /* @__PURE__ */ new Map();
    let n = -1, a = {};
    return {
      matchHandlers: {},
      dispatch(o) {
        return a = o, r.forEach((i) => i(a)), r.size >= 1;
      },
      subscribe(o) {
        return r.size || this.register(), n += 1, r.set(n, o), o(a), n;
      },
      unsubscribe(o) {
        r.delete(o), r.size || this.unregister();
      },
      unregister() {
        Object.keys(t).forEach((o) => {
          const i = t[o], s = this.matchHandlers[i];
          s == null || s.mql.removeListener(s == null ? void 0 : s.listener);
        }), r.clear();
      },
      register() {
        Object.keys(t).forEach((o) => {
          const i = t[o], s = (u) => {
            let {
              matches: c
            } = u;
            this.dispatch(Object.assign(Object.assign({}, a), {
              [o]: c
            }));
          }, l = window.matchMedia(i);
          l.addListener(s), this.matchHandlers[i] = {
            mql: l,
            listener: s
          }, s(l);
        });
      },
      responsiveMap: t
    };
  }, [e]);
}
function lb(e) {
  var t = e.children, r = e.prefixCls, n = e.id, a = e.overlayInnerStyle, o = e.className, i = e.style;
  return /* @__PURE__ */ v.createElement("div", {
    className: ne("".concat(r, "-content"), o),
    style: i
  }, /* @__PURE__ */ v.createElement("div", {
    className: "".concat(r, "-inner"),
    id: n,
    role: "tooltip",
    style: a
  }, typeof t == "function" ? t() : t));
}
var Qa = {
  shiftX: 64,
  adjustY: 1
}, Ja = {
  adjustX: 1,
  shiftY: !0
}, zr = [0, 0], yP = {
  left: {
    points: ["cr", "cl"],
    overflow: Ja,
    offset: [-4, 0],
    targetOffset: zr
  },
  right: {
    points: ["cl", "cr"],
    overflow: Ja,
    offset: [4, 0],
    targetOffset: zr
  },
  top: {
    points: ["bc", "tc"],
    overflow: Qa,
    offset: [0, -4],
    targetOffset: zr
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Qa,
    offset: [0, 4],
    targetOffset: zr
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: Qa,
    offset: [0, -4],
    targetOffset: zr
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Ja,
    offset: [-4, 0],
    targetOffset: zr
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Qa,
    offset: [0, -4],
    targetOffset: zr
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Ja,
    offset: [4, 0],
    targetOffset: zr
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Qa,
    offset: [0, 4],
    targetOffset: zr
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Ja,
    offset: [4, 0],
    targetOffset: zr
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Qa,
    offset: [0, 4],
    targetOffset: zr
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Ja,
    offset: [-4, 0],
    targetOffset: zr
  }
}, CP = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"], EP = function(t, r) {
  var n = t.overlayClassName, a = t.trigger, o = a === void 0 ? ["hover"] : a, i = t.mouseEnterDelay, s = i === void 0 ? 0 : i, l = t.mouseLeaveDelay, u = l === void 0 ? 0.1 : l, c = t.overlayStyle, d = t.prefixCls, m = d === void 0 ? "rc-tooltip" : d, h = t.children, p = t.onVisibleChange, f = t.afterVisibleChange, g = t.transitionName, b = t.animation, C = t.motion, y = t.placement, E = y === void 0 ? "right" : y, D = t.align, S = D === void 0 ? {} : D, x = t.destroyTooltipOnHide, $ = x === void 0 ? !1 : x, O = t.defaultVisible, A = t.getTooltipContainer, j = t.overlayInnerStyle;
  t.arrowContent;
  var N = t.overlay, B = t.id, P = t.showArrow, R = P === void 0 ? !0 : P, T = ct(t, CP), F = ze(null);
  Ia(r, function() {
    return F.current;
  });
  var I = Y({}, T);
  "visible" in t && (I.popupVisible = t.visible);
  var k = function() {
    return /* @__PURE__ */ v.createElement(lb, {
      key: "content",
      prefixCls: m,
      id: B,
      overlayInnerStyle: j
    }, N);
  };
  return /* @__PURE__ */ v.createElement(qf, _e({
    popupClassName: n,
    prefixCls: m,
    popup: k,
    action: o,
    builtinPlacements: yP,
    popupPlacement: E,
    ref: F,
    popupAlign: S,
    getPopupContainer: A,
    onPopupVisibleChange: p,
    afterPopupVisibleChange: f,
    popupTransitionName: g,
    popupAnimation: b,
    popupMotion: C,
    defaultPopupVisible: O,
    autoDestroy: $,
    mouseLeaveDelay: u,
    popupStyle: c,
    mouseEnterDelay: s,
    arrow: R
  }, I), h);
};
const wP = /* @__PURE__ */ br(EP);
function ub(e) {
  const {
    sizePopupArrow: t,
    borderRadiusXS: r,
    borderRadiusOuter: n
  } = e, a = t / 2, o = 0, i = a, s = n * 1 / Math.sqrt(2), l = a - n * (1 - 1 / Math.sqrt(2)), u = a - r * (1 / Math.sqrt(2)), c = n * (Math.sqrt(2) - 1) + r * (1 / Math.sqrt(2)), d = 2 * a - u, m = c, h = 2 * a - s, p = l, f = 2 * a - o, g = i, b = a * Math.sqrt(2) + n * (Math.sqrt(2) - 2), C = n * (Math.sqrt(2) - 1), y = `polygon(${C}px 100%, 50% ${C}px, ${2 * a - C}px 100%, ${C}px 100%)`, E = `path('M ${o} ${i} A ${n} ${n} 0 0 0 ${s} ${l} L ${u} ${c} A ${r} ${r} 0 0 1 ${d} ${m} L ${h} ${p} A ${n} ${n} 0 0 0 ${f} ${g} Z')`;
  return {
    arrowShadowWidth: b,
    arrowPath: E,
    arrowPolygon: y
  };
}
const SP = (e, t, r) => {
  const {
    sizePopupArrow: n,
    arrowPolygon: a,
    arrowPath: o,
    arrowShadowWidth: i,
    borderRadiusXS: s,
    calc: l
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
      height: l(n).div(2).equal(),
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
        value: `0 0 ${we(s)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: r,
      zIndex: 0,
      background: "transparent"
    }
  };
}, cb = 8;
function Kf(e) {
  const {
    contentRadius: t,
    limitVerticalRadius: r
  } = e, n = t > 12 ? t + 2 : 12;
  return {
    arrowOffsetHorizontal: n,
    arrowOffsetVertical: r ? cb : n
  };
}
function cs(e, t) {
  return e ? t : {};
}
function fb(e, t, r) {
  const {
    componentCls: n,
    boxShadowPopoverArrow: a,
    arrowOffsetVertical: o,
    arrowOffsetHorizontal: i
  } = e, {
    arrowDistance: s = 0,
    arrowPlacement: l = {
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
      }, SP(e, t, a)), {
        "&:before": {
          background: t
        }
      })]
    }, cs(!!l.top, {
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
    })), cs(!!l.bottom, {
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
    })), cs(!!l.left, {
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
    })), cs(!!l.right, {
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
function DP(e, t, r, n) {
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
const Xm = {
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
}, xP = {
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
}, OP = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function db(e) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: r,
    arrowPointAtCenter: n,
    offset: a,
    borderRadius: o,
    visibleFirst: i
  } = e, s = t / 2, l = {};
  return Object.keys(Xm).forEach((u) => {
    const c = n && xP[u] || Xm[u], d = Object.assign(Object.assign({}, c), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (l[u] = d, OP.has(u) && (d.autoArrow = !1), u) {
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
    const m = Kf({
      contentRadius: o,
      limitVerticalRadius: !0
    });
    if (n)
      switch (u) {
        case "topLeft":
        case "bottomLeft":
          d.offset[0] = -m.arrowOffsetHorizontal - s;
          break;
        case "topRight":
        case "bottomRight":
          d.offset[0] = m.arrowOffsetHorizontal + s;
          break;
        case "leftTop":
        case "rightTop":
          d.offset[1] = -m.arrowOffsetHorizontal - s;
          break;
        case "leftBottom":
        case "rightBottom":
          d.offset[1] = m.arrowOffsetHorizontal + s;
          break;
      }
    d.overflow = DP(u, m, t, r), i && (d.htmlRegion = "visibleFirst");
  }), l;
}
const $P = (e) => {
  const {
    componentCls: t,
    // ant-tooltip
    tooltipMaxWidth: r,
    tooltipColor: n,
    tooltipBg: a,
    tooltipBorderRadius: o,
    zIndexPopup: i,
    controlHeight: s,
    boxShadowSecondary: l,
    paddingSM: u,
    paddingXS: c
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, yn(e)), {
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
          padding: `${we(e.calc(u).div(2).equal())} ${we(c)}`,
          color: n,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: a,
          borderRadius: o,
          boxShadow: l,
          boxSizing: "border-box"
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${t}-inner`]: {
            borderRadius: e.min(o, cb)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), G$(e, (d, m) => {
        let {
          darkColor: h
        } = m;
        return {
          [`&${t}-${d}`]: {
            [`${t}-inner`]: {
              backgroundColor: h
            },
            [`${t}-arrow`]: {
              "--antd-arrow-background-color": h
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
    fb(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow
      }
    }
  ];
}, AP = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 70
}, Kf({
  contentRadius: e.borderRadius,
  limitVerticalRadius: !0
})), ub(tr(e, {
  borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
}))), vb = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return un("Tooltip", (n) => {
    const {
      borderRadius: a,
      colorTextLightSolid: o,
      colorBgSpotlight: i
    } = n, s = tr(n, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: o,
      tooltipBorderRadius: a,
      tooltipBg: i
    });
    return [$P(s), Wf(n, "zoom-big-fast")];
  }, AP, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: t
  })(e);
}, BP = Hs.map((e) => `${e}-inverse`);
function FP(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(Oe(BP), Oe(Hs)).includes(e) : Hs.includes(e);
}
function mb(e, t) {
  const r = FP(t), n = ne({
    [`${e}-${t}`]: t && r
  }), a = {}, o = {};
  return t && !r && (a.background = t, o["--antd-arrow-background-color"] = t), {
    className: n,
    overlayStyle: a,
    arrowStyle: o
  };
}
const PP = (e) => {
  const {
    prefixCls: t,
    className: r,
    placement: n = "top",
    title: a,
    color: o,
    overlayInnerStyle: i
  } = e, {
    getPrefixCls: s
  } = v.useContext(mt), l = s("tooltip", t), [u, c, d] = vb(l), m = mb(l, o), h = m.arrowStyle, p = Object.assign(Object.assign({}, i), m.overlayStyle), f = ne(c, d, l, `${l}-pure`, `${l}-placement-${n}`, r, m.className);
  return u(/* @__PURE__ */ v.createElement("div", {
    className: f,
    style: h
  }, /* @__PURE__ */ v.createElement("div", {
    className: `${l}-arrow`
  }), /* @__PURE__ */ v.createElement(lb, Object.assign({}, e, {
    className: c,
    prefixCls: l,
    overlayInnerStyle: p
  }), a)));
}, RP = PP;
var NP = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Uf = /* @__PURE__ */ v.forwardRef((e, t) => {
  var r, n;
  const {
    prefixCls: a,
    openClassName: o,
    getTooltipContainer: i,
    overlayClassName: s,
    color: l,
    overlayInnerStyle: u,
    children: c,
    afterOpenChange: d,
    afterVisibleChange: m,
    destroyTooltipOnHide: h,
    arrow: p = !0,
    title: f,
    overlay: g,
    builtinPlacements: b,
    arrowPointAtCenter: C = !1,
    autoAdjustOverflow: y = !0
  } = e, E = !!p, [, D] = jr(), {
    getPopupContainer: S,
    getPrefixCls: x,
    direction: $
  } = v.useContext(mt), O = Wt("Tooltip"), A = v.useRef(null), j = () => {
    var ye;
    (ye = A.current) === null || ye === void 0 || ye.forceAlign();
  };
  v.useImperativeHandle(t, () => ({
    forceAlign: j,
    forcePopupAlign: () => {
      O.deprecated(!1, "forcePopupAlign", "forceAlign"), j();
    }
  })), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"]].forEach((ye) => {
    let [Ne, $e] = ye;
    O.deprecated(!(Ne in e), Ne, $e);
  }), process.env.NODE_ENV !== "production" && O(!h || typeof h == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && O(!p || typeof p == "boolean" || !("arrowPointAtCenter" in p), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [N, B] = qr(!1, {
    value: (r = e.open) !== null && r !== void 0 ? r : e.visible,
    defaultValue: (n = e.defaultOpen) !== null && n !== void 0 ? n : e.defaultVisible
  }), P = !f && !g && f !== 0, R = (ye) => {
    var Ne, $e;
    B(P ? !1 : ye), P || ((Ne = e.onOpenChange) === null || Ne === void 0 || Ne.call(e, ye), ($e = e.onVisibleChange) === null || $e === void 0 || $e.call(e, ye));
  }, T = v.useMemo(() => {
    var ye, Ne;
    let $e = C;
    return typeof p == "object" && ($e = (Ne = (ye = p.pointAtCenter) !== null && ye !== void 0 ? ye : p.arrowPointAtCenter) !== null && Ne !== void 0 ? Ne : C), b || db({
      arrowPointAtCenter: $e,
      autoAdjustOverflow: y,
      arrowWidth: E ? D.sizePopupArrow : 0,
      borderRadius: D.borderRadius,
      offset: D.marginXXS,
      visibleFirst: !0
    });
  }, [C, p, b, D]), F = v.useMemo(() => f === 0 ? f : g || f || "", [g, f]), I = /* @__PURE__ */ v.createElement(Ks, null, typeof F == "function" ? F() : F), {
    getPopupContainer: k,
    placement: L = "top",
    mouseEnterDelay: W = 0.1,
    mouseLeaveDelay: U = 0.1,
    overlayStyle: Z,
    rootClassName: M
  } = e, V = NP(e, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), H = x("tooltip", a), q = x(), J = e["data-popover-inject"];
  let ee = N;
  !("open" in e) && !("visible" in e) && P && (ee = !1);
  const ce = Ln(c) && !b0(c) ? c : /* @__PURE__ */ v.createElement("span", null, c), ae = ce.props, me = !ae.className || typeof ae.className == "string" ? ne(ae.className, o || `${H}-open`) : ae.className, [fe, G, le] = vb(H, !J), Se = mb(H, l), De = Se.arrowStyle, Ee = Object.assign(Object.assign({}, u), Se.overlayStyle), oe = ne(s, {
    [`${H}-rtl`]: $ === "rtl"
  }, Se.className, M, G, le), [se, ge] = Nf("Tooltip", V.zIndex), he = /* @__PURE__ */ v.createElement(wP, Object.assign({}, V, {
    zIndex: se,
    showArrow: E,
    placement: L,
    mouseEnterDelay: W,
    mouseLeaveDelay: U,
    prefixCls: H,
    overlayClassName: oe,
    overlayStyle: Object.assign(Object.assign({}, De), Z),
    getTooltipContainer: k || i || S,
    ref: A,
    builtinPlacements: T,
    overlay: I,
    visible: ee,
    onVisibleChange: R,
    afterVisibleChange: d ?? m,
    overlayInnerStyle: Ee,
    arrowContent: /* @__PURE__ */ v.createElement("span", {
      className: `${H}-arrow-content`
    }),
    motion: {
      motionName: gB(q, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!h
  }), ee ? sn(ce, {
    className: me
  }) : ce);
  return fe(/* @__PURE__ */ v.createElement(Rf.Provider, {
    value: ge
  }, he));
});
process.env.NODE_ENV !== "production" && (Uf.displayName = "Tooltip");
Uf._InternalPanelDoNotUseOrYouWillBeFired = RP;
const Oo = Uf;
var IP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" };
const TP = IP;
var MP = function(t, r) {
  return /* @__PURE__ */ v.createElement(vr, _e({}, t, {
    ref: r,
    icon: TP
  }));
}, gb = /* @__PURE__ */ v.forwardRef(MP);
process.env.NODE_ENV !== "production" && (gb.displayName = "RightOutlined");
const Mc = gb;
var jP = Fe.ESC, _P = Fe.TAB;
function LP(e) {
  var t = e.visible, r = e.triggerRef, n = e.onVisibleChange, a = e.autoFocus, o = e.overlayRef, i = v.useRef(!1), s = function() {
    if (t) {
      var d, m;
      (d = r.current) === null || d === void 0 || (m = d.focus) === null || m === void 0 || m.call(d), n == null || n(!1);
    }
  }, l = function() {
    var d;
    return (d = o.current) !== null && d !== void 0 && d.focus ? (o.current.focus(), i.current = !0, !0) : !1;
  }, u = function(d) {
    switch (d.keyCode) {
      case jP:
        s();
        break;
      case _P: {
        var m = !1;
        i.current || (m = l()), m ? d.preventDefault() : s();
        break;
      }
    }
  };
  v.useEffect(function() {
    return t ? (window.addEventListener("keydown", u), a && Ht(l, 3), function() {
      window.removeEventListener("keydown", u), i.current = !1;
    }) : function() {
      i.current = !1;
    };
  }, [t]);
}
var kP = /* @__PURE__ */ br(function(e, t) {
  var r = e.overlay, n = e.arrow, a = e.prefixCls, o = Pt(function() {
    var s;
    return typeof r == "function" ? s = r() : s = r, s;
  }, [r]), i = Gr(t, o == null ? void 0 : o.ref);
  return /* @__PURE__ */ Q.createElement(Q.Fragment, null, n && /* @__PURE__ */ Q.createElement("div", {
    className: "".concat(a, "-arrow")
  }), /* @__PURE__ */ Q.cloneElement(o, {
    ref: Wn(o) ? i : void 0
  }));
}), eo = {
  adjustX: 1,
  adjustY: 1
}, to = [0, 0], zP = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: eo,
    offset: [0, -4],
    targetOffset: to
  },
  top: {
    points: ["bc", "tc"],
    overflow: eo,
    offset: [0, -4],
    targetOffset: to
  },
  topRight: {
    points: ["br", "tr"],
    overflow: eo,
    offset: [0, -4],
    targetOffset: to
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: eo,
    offset: [0, 4],
    targetOffset: to
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: eo,
    offset: [0, 4],
    targetOffset: to
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: eo,
    offset: [0, 4],
    targetOffset: to
  }
}, VP = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus", "overlay", "children", "onVisibleChange"];
function HP(e, t) {
  var r, n = e.arrow, a = n === void 0 ? !1 : n, o = e.prefixCls, i = o === void 0 ? "rc-dropdown" : o, s = e.transitionName, l = e.animation, u = e.align, c = e.placement, d = c === void 0 ? "bottomLeft" : c, m = e.placements, h = m === void 0 ? zP : m, p = e.getPopupContainer, f = e.showAction, g = e.hideAction, b = e.overlayClassName, C = e.overlayStyle, y = e.visible, E = e.trigger, D = E === void 0 ? ["hover"] : E, S = e.autoFocus, x = e.overlay, $ = e.children, O = e.onVisibleChange, A = ct(e, VP), j = Q.useState(), N = ue(j, 2), B = N[0], P = N[1], R = "visible" in e ? y : B, T = Q.useRef(null), F = Q.useRef(null), I = Q.useRef(null);
  Q.useImperativeHandle(t, function() {
    return T.current;
  });
  var k = function(J) {
    P(J), O == null || O(J);
  };
  LP({
    visible: R,
    triggerRef: I,
    onVisibleChange: k,
    autoFocus: S,
    overlayRef: F
  });
  var L = function(J) {
    var ee = e.onOverlayClick;
    P(!1), ee && ee(J);
  }, W = function() {
    return /* @__PURE__ */ Q.createElement(kP, {
      ref: F,
      overlay: x,
      prefixCls: i,
      arrow: a
    });
  }, U = function() {
    return typeof x == "function" ? W : W();
  }, Z = function() {
    var J = e.minOverlayWidthMatchTrigger, ee = e.alignPoint;
    return "minOverlayWidthMatchTrigger" in e ? J : !ee;
  }, M = function() {
    var J = e.openClassName;
    return J !== void 0 ? J : "".concat(i, "-open");
  }, V = /* @__PURE__ */ Q.cloneElement($, {
    className: ne((r = $.props) === null || r === void 0 ? void 0 : r.className, R && M()),
    ref: Wn($) ? Gr(I, $.ref) : void 0
  }), H = g;
  return !H && D.indexOf("contextMenu") !== -1 && (H = ["click"]), /* @__PURE__ */ Q.createElement(qf, _e({
    builtinPlacements: h
  }, A, {
    prefixCls: i,
    ref: T,
    popupClassName: ne(b, K({}, "".concat(i, "-show-arrow"), a)),
    popupStyle: C,
    action: D,
    showAction: f,
    hideAction: H,
    popupPlacement: d,
    popupAlign: u,
    popupTransitionName: s,
    popupAnimation: l,
    popupVisible: R,
    stretch: Z() ? "minWidth" : "",
    popup: U(),
    onPopupVisibleChange: k,
    onPopupClick: L,
    getPopupContainer: p
  }), V);
}
const WP = /* @__PURE__ */ Q.forwardRef(HP);
var pb = /* @__PURE__ */ v.createContext(null);
function hb(e, t) {
  return e === void 0 ? null : "".concat(e, "-").concat(t);
}
function bb(e) {
  var t = v.useContext(pb);
  return hb(t, e);
}
var qP = ["children", "locked"], ln = /* @__PURE__ */ v.createContext(null);
function KP(e, t) {
  var r = Y({}, e);
  return Object.keys(t).forEach(function(n) {
    var a = t[n];
    a !== void 0 && (r[n] = a);
  }), r;
}
function Bi(e) {
  var t = e.children, r = e.locked, n = ct(e, qP), a = v.useContext(ln), o = Fi(function() {
    return KP(a, n);
  }, [a, n], function(i, s) {
    return !r && (i[0] !== s[0] || !Eo(i[1], s[1], !0));
  });
  return /* @__PURE__ */ v.createElement(ln.Provider, {
    value: o
  }, t);
}
var UP = [], yb = /* @__PURE__ */ v.createContext(null);
function El() {
  return v.useContext(yb);
}
var Cb = /* @__PURE__ */ v.createContext(UP);
function No(e) {
  var t = v.useContext(Cb);
  return v.useMemo(function() {
    return e !== void 0 ? [].concat(Oe(t), [e]) : t;
  }, [t, e]);
}
var Eb = /* @__PURE__ */ v.createContext(null), Gf = /* @__PURE__ */ v.createContext({});
function Ym(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (hl(e)) {
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
function GP(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = Oe(e.querySelectorAll("*")).filter(function(n) {
    return Ym(n, t);
  });
  return Ym(e, t) && r.unshift(e), r;
}
var jc = Fe.LEFT, _c = Fe.RIGHT, Lc = Fe.UP, As = Fe.DOWN, Bs = Fe.ENTER, wb = Fe.ESC, Go = Fe.HOME, Xo = Fe.END, Zm = [Lc, As, jc, _c];
function XP(e, t, r, n) {
  var a, o, i, s, l = "prev", u = "next", c = "children", d = "parent";
  if (e === "inline" && n === Bs)
    return {
      inlineTrigger: !0
    };
  var m = (a = {}, K(a, Lc, l), K(a, As, u), a), h = (o = {}, K(o, jc, r ? u : l), K(o, _c, r ? l : u), K(o, As, c), K(o, Bs, c), o), p = (i = {}, K(i, Lc, l), K(i, As, u), K(i, Bs, c), K(i, wb, d), K(i, jc, r ? c : d), K(i, _c, r ? d : c), i), f = {
    inline: m,
    horizontal: h,
    vertical: p,
    inlineSub: m,
    horizontalSub: p,
    verticalSub: p
  }, g = (s = f["".concat(e).concat(t ? "" : "Sub")]) === null || s === void 0 ? void 0 : s[n];
  switch (g) {
    case l:
      return {
        offset: -1,
        sibling: !0
      };
    case u:
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
function YP(e) {
  for (var t = e; t; ) {
    if (t.getAttribute("data-menu-list"))
      return t;
    t = t.parentElement;
  }
  return null;
}
function ZP(e, t) {
  for (var r = e || document.activeElement; r; ) {
    if (t.has(r))
      return r;
    r = r.parentElement;
  }
  return null;
}
function Xf(e, t) {
  var r = GP(e, !0);
  return r.filter(function(n) {
    return t.has(n);
  });
}
function Qm(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!e)
    return null;
  var a = Xf(e, t), o = a.length, i = a.findIndex(function(s) {
    return r === s;
  });
  return n < 0 ? i === -1 ? i = o - 1 : i -= 1 : n > 0 && (i += 1), i = (i + o) % o, a[i];
}
var kc = function(t, r) {
  var n = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  return t.forEach(function(i) {
    var s = document.querySelector("[data-menu-id='".concat(hb(r, i), "']"));
    s && (n.add(s), o.set(s, i), a.set(i, s));
  }), {
    elements: n,
    key2element: a,
    element2key: o
  };
};
function QP(e, t, r, n, a, o, i, s, l, u) {
  var c = v.useRef(), d = v.useRef();
  d.current = t;
  var m = function() {
    Ht.cancel(c.current);
  };
  return v.useEffect(function() {
    return function() {
      m();
    };
  }, []), function(h) {
    var p = h.which;
    if ([].concat(Zm, [Bs, wb, Go, Xo]).includes(p)) {
      var f = o(), g = kc(f, n), b = g, C = b.elements, y = b.key2element, E = b.element2key, D = y.get(t), S = ZP(D, C), x = E.get(S), $ = XP(e, i(x, !0).length === 1, r, p);
      if (!$ && p !== Go && p !== Xo)
        return;
      (Zm.includes(p) || [Go, Xo].includes(p)) && h.preventDefault();
      var O = function(F) {
        if (F) {
          var I = F, k = F.querySelector("a");
          k != null && k.getAttribute("href") && (I = k);
          var L = E.get(F);
          s(L), m(), c.current = Ht(function() {
            d.current === L && I.focus();
          });
        }
      };
      if ([Go, Xo].includes(p) || $.sibling || !S) {
        var A;
        !S || e === "inline" ? A = a.current : A = YP(S);
        var j, N = Xf(A, C);
        p === Go ? j = N[0] : p === Xo ? j = N[N.length - 1] : j = Qm(A, C, S, $.offset), O(j);
      } else if ($.inlineTrigger)
        l(x);
      else if ($.offset > 0)
        l(x, !0), m(), c.current = Ht(function() {
          g = kc(f, n);
          var T = S.getAttribute("aria-controls"), F = document.getElementById(T), I = Qm(F, g.elements);
          O(I);
        }, 5);
      else if ($.offset < 0) {
        var B = i(x, !0), P = B[B.length - 2], R = y.get(P);
        l(P, !1), O(R);
      }
    }
    u == null || u(h);
  };
}
function JP(e) {
  Promise.resolve().then(e);
}
var Yf = "__RC_UTIL_PATH_SPLIT__", Jm = function(t) {
  return t.join(Yf);
}, eR = function(t) {
  return t.split(Yf);
}, zc = "rc-menu-more";
function tR() {
  var e = v.useState({}), t = ue(e, 2), r = t[1], n = ze(/* @__PURE__ */ new Map()), a = ze(/* @__PURE__ */ new Map()), o = v.useState([]), i = ue(o, 2), s = i[0], l = i[1], u = ze(0), c = ze(!1), d = function() {
    c.current || r({});
  }, m = et(function(y, E) {
    process.env.NODE_ENV !== "production" && yt(!n.current.has(y), "Duplicated key '".concat(y, "' used in Menu by path [").concat(E.join(" > "), "]"));
    var D = Jm(E);
    a.current.set(D, y), n.current.set(y, D), u.current += 1;
    var S = u.current;
    JP(function() {
      S === u.current && d();
    });
  }, []), h = et(function(y, E) {
    var D = Jm(E);
    a.current.delete(D), n.current.delete(y);
  }, []), p = et(function(y) {
    l(y);
  }, []), f = et(function(y, E) {
    var D = n.current.get(y) || "", S = eR(D);
    return E && s.includes(S[0]) && S.unshift(zc), S;
  }, [s]), g = et(function(y, E) {
    return y.some(function(D) {
      var S = f(D, !0);
      return S.includes(E);
    });
  }, [f]), b = function() {
    var E = Oe(n.current.keys());
    return s.length && E.push(zc), E;
  }, C = et(function(y) {
    var E = "".concat(n.current.get(y)).concat(Yf), D = /* @__PURE__ */ new Set();
    return Oe(a.current.keys()).forEach(function(S) {
      S.startsWith(E) && D.add(a.current.get(S));
    }), D;
  }, []);
  return v.useEffect(function() {
    return function() {
      c.current = !0;
    };
  }, []), {
    // Register
    registerPath: m,
    unregisterPath: h,
    refreshOverflowKeys: p,
    // Util
    isSubPathKey: g,
    getKeyPath: f,
    getKeys: b,
    getSubPathKeys: C
  };
}
function Jo(e) {
  var t = v.useRef(e);
  t.current = e;
  var r = v.useCallback(function() {
    for (var n, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(o));
  }, []);
  return e ? r : void 0;
}
var rR = Math.random().toFixed(5).toString().slice(2), eg = 0;
function nR(e) {
  var t = qr(e, {
    value: e
  }), r = ue(t, 2), n = r[0], a = r[1];
  return v.useEffect(function() {
    eg += 1;
    var o = process.env.NODE_ENV === "test" ? "test" : "".concat(rR, "-").concat(eg);
    a("rc-menu-uuid-".concat(o));
  }, []), n;
}
function Sb(e, t, r, n) {
  var a = v.useContext(ln), o = a.activeKey, i = a.onActive, s = a.onInactive, l = {
    active: o === e
  };
  return t || (l.onMouseEnter = function(u) {
    r == null || r({
      key: e,
      domEvent: u
    }), i(e);
  }, l.onMouseLeave = function(u) {
    n == null || n({
      key: e,
      domEvent: u
    }), s(e);
  }), l;
}
function Db(e) {
  var t = v.useContext(ln), r = t.mode, n = t.rtl, a = t.inlineIndent;
  if (r !== "inline")
    return null;
  var o = e;
  return n ? {
    paddingRight: o * a
  } : {
    paddingLeft: o * a
  };
}
function xb(e) {
  var t = e.icon, r = e.props, n = e.children, a;
  return t === null || t === !1 ? null : (typeof t == "function" ? a = /* @__PURE__ */ v.createElement(t, Y({}, r)) : typeof t != "boolean" && (a = t), a || n || null);
}
var aR = ["item"];
function Ys(e) {
  var t = e.item, r = ct(e, aR);
  return Object.defineProperty(r, "item", {
    get: function() {
      return yt(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), t;
    }
  }), r;
}
var oR = ["title", "attribute", "elementRef"], iR = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"], sR = ["active"], lR = /* @__PURE__ */ function(e) {
  Ta(r, e);
  var t = Ri(r);
  function r() {
    return Or(this, r), t.apply(this, arguments);
  }
  return $r(r, [{
    key: "render",
    value: function() {
      var a = this.props, o = a.title, i = a.attribute, s = a.elementRef, l = ct(a, oR), u = Cr(l, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
      return yt(!i, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), /* @__PURE__ */ v.createElement(Mn.Item, _e({}, i, {
        title: typeof o == "string" ? o : void 0
      }, u, {
        ref: s
      }));
    }
  }]), r;
}(v.Component), uR = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r, n = e.style, a = e.className, o = e.eventKey, i = e.warnKey, s = e.disabled, l = e.itemIcon, u = e.children, c = e.role, d = e.onMouseEnter, m = e.onMouseLeave, h = e.onClick, p = e.onKeyDown, f = e.onFocus, g = ct(e, iR), b = bb(o), C = v.useContext(ln), y = C.prefixCls, E = C.onItemClick, D = C.disabled, S = C.overflowDisabled, x = C.itemIcon, $ = C.selectedKeys, O = C.onActive, A = v.useContext(Gf), j = A._internalRenderMenuItem, N = "".concat(y, "-item"), B = v.useRef(), P = v.useRef(), R = D || s, T = Pi(t, P), F = No(o);
  process.env.NODE_ENV !== "production" && i && yt(!1, "MenuItem should not leave undefined `key`.");
  var I = function(ae) {
    return {
      key: o,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: Oe(F).reverse(),
      item: B.current,
      domEvent: ae
    };
  }, k = l || x, L = Sb(o, R, d, m), W = L.active, U = ct(L, sR), Z = $.includes(o), M = Db(F.length), V = function(ae) {
    if (!R) {
      var me = I(ae);
      h == null || h(Ys(me)), E(me);
    }
  }, H = function(ae) {
    if (p == null || p(ae), ae.which === Fe.ENTER) {
      var me = I(ae);
      h == null || h(Ys(me)), E(me);
    }
  }, q = function(ae) {
    O(o), f == null || f(ae);
  }, J = {};
  e.role === "option" && (J["aria-selected"] = Z);
  var ee = /* @__PURE__ */ v.createElement(lR, _e({
    ref: B,
    elementRef: T,
    role: c === null ? "none" : c || "menuitem",
    tabIndex: s ? null : -1,
    "data-menu-id": S && b ? null : b
  }, g, U, J, {
    component: "li",
    "aria-disabled": s,
    style: Y(Y({}, M), n),
    className: ne(N, (r = {}, K(r, "".concat(N, "-active"), W), K(r, "".concat(N, "-selected"), Z), K(r, "".concat(N, "-disabled"), R), r), a),
    onClick: V,
    onKeyDown: H,
    onFocus: q
  }), u, /* @__PURE__ */ v.createElement(xb, {
    props: Y(Y({}, e), {}, {
      isSelected: Z
    }),
    icon: k
  }));
  return j && (ee = j(ee, e, {
    selected: Z
  })), ee;
});
function cR(e, t) {
  var r = e.eventKey, n = El(), a = No(r);
  return v.useEffect(function() {
    if (n)
      return n.registerPath(r, a), function() {
        n.unregisterPath(r, a);
      };
  }, [a]), n ? null : /* @__PURE__ */ v.createElement(uR, _e({}, e, {
    ref: t
  }));
}
const wl = /* @__PURE__ */ v.forwardRef(cR);
var fR = ["className", "children"], dR = function(t, r) {
  var n = t.className, a = t.children, o = ct(t, fR), i = v.useContext(ln), s = i.prefixCls, l = i.mode, u = i.rtl;
  return /* @__PURE__ */ v.createElement("ul", _e({
    className: ne(s, u && "".concat(s, "-rtl"), "".concat(s, "-sub"), "".concat(s, "-").concat(l === "inline" ? "inline" : "vertical"), n),
    role: "menu"
  }, o, {
    "data-menu-list": !0,
    ref: r
  }), a);
}, Zf = /* @__PURE__ */ v.forwardRef(dR);
Zf.displayName = "SubMenuList";
function Qf(e, t) {
  return on(e).map(function(r, n) {
    if (/* @__PURE__ */ v.isValidElement(r)) {
      var a, o, i = r.key, s = (a = (o = r.props) === null || o === void 0 ? void 0 : o.eventKey) !== null && a !== void 0 ? a : i, l = s == null;
      l && (s = "tmp_key-".concat([].concat(Oe(t), [n]).join("-")));
      var u = {
        key: s,
        eventKey: s
      };
      return process.env.NODE_ENV !== "production" && l && (u.warnKey = !0), /* @__PURE__ */ v.cloneElement(r, u);
    }
    return r;
  });
}
var fr = {
  adjustX: 1,
  adjustY: 1
}, vR = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: fr
  },
  topRight: {
    points: ["br", "tr"],
    overflow: fr
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: fr
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: fr
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: fr
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: fr
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: fr
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: fr
  }
}, mR = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: fr
  },
  topRight: {
    points: ["br", "tr"],
    overflow: fr
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: fr
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: fr
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: fr
  },
  rightBottom: {
    points: ["br", "bl"],
    overflow: fr
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: fr
  },
  leftBottom: {
    points: ["bl", "br"],
    overflow: fr
  }
};
function Ob(e, t, r) {
  if (t)
    return t;
  if (r)
    return r[e] || r.other;
}
var gR = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function pR(e) {
  var t = e.prefixCls, r = e.visible, n = e.children, a = e.popup, o = e.popupStyle, i = e.popupClassName, s = e.popupOffset, l = e.disabled, u = e.mode, c = e.onVisibleChange, d = v.useContext(ln), m = d.getPopupContainer, h = d.rtl, p = d.subMenuOpenDelay, f = d.subMenuCloseDelay, g = d.builtinPlacements, b = d.triggerSubMenuAction, C = d.forceSubMenuRender, y = d.rootClassName, E = d.motion, D = d.defaultMotions, S = v.useState(!1), x = ue(S, 2), $ = x[0], O = x[1], A = Y(h ? Y({}, mR) : Y({}, vR), g), j = gR[u], N = Ob(u, E, D), B = v.useRef(N);
  u !== "inline" && (B.current = N);
  var P = Y(Y({}, B.current), {}, {
    leavedClassName: "".concat(t, "-hidden"),
    removeOnLeave: !1,
    motionAppear: !0
  }), R = v.useRef();
  return v.useEffect(function() {
    return R.current = Ht(function() {
      O(r);
    }), function() {
      Ht.cancel(R.current);
    };
  }, [r]), /* @__PURE__ */ v.createElement(qf, {
    prefixCls: t,
    popupClassName: ne("".concat(t, "-popup"), K({}, "".concat(t, "-rtl"), h), i, y),
    stretch: u === "horizontal" ? "minWidth" : null,
    getPopupContainer: m,
    builtinPlacements: A,
    popupPlacement: j,
    popupVisible: $,
    popup: a,
    popupStyle: o,
    popupAlign: s && {
      offset: s
    },
    action: l ? [] : [b],
    mouseEnterDelay: p,
    mouseLeaveDelay: f,
    onPopupVisibleChange: c,
    forceRender: C,
    popupMotion: P,
    fresh: !0
  }, n);
}
function hR(e) {
  var t = e.id, r = e.open, n = e.keyPath, a = e.children, o = "inline", i = v.useContext(ln), s = i.prefixCls, l = i.forceSubMenuRender, u = i.motion, c = i.defaultMotions, d = i.mode, m = v.useRef(!1);
  m.current = d === o;
  var h = v.useState(!m.current), p = ue(h, 2), f = p[0], g = p[1], b = m.current ? r : !1;
  v.useEffect(function() {
    m.current && g(!1);
  }, [d]);
  var C = Y({}, Ob(o, u, c));
  n.length > 1 && (C.motionAppear = !1);
  var y = C.onVisibleChanged;
  return C.onVisibleChanged = function(E) {
    return !m.current && !E && g(!0), y == null ? void 0 : y(E);
  }, f ? null : /* @__PURE__ */ v.createElement(Bi, {
    mode: o,
    locked: !m.current
  }, /* @__PURE__ */ v.createElement(Ma, _e({
    visible: b
  }, C, {
    forceRender: l,
    removeOnLeave: !1,
    leavedClassName: "".concat(s, "-hidden")
  }), function(E) {
    var D = E.className, S = E.style;
    return /* @__PURE__ */ v.createElement(Zf, {
      id: t,
      className: D,
      style: S
    }, a);
  }));
}
var bR = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "popupStyle", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"], yR = ["active"], CR = function(t) {
  var r, n = t.style, a = t.className, o = t.title, i = t.eventKey, s = t.warnKey, l = t.disabled, u = t.internalPopupClose, c = t.children, d = t.itemIcon, m = t.expandIcon, h = t.popupClassName, p = t.popupOffset, f = t.popupStyle, g = t.onClick, b = t.onMouseEnter, C = t.onMouseLeave, y = t.onTitleClick, E = t.onTitleMouseEnter, D = t.onTitleMouseLeave, S = ct(t, bR), x = bb(i), $ = v.useContext(ln), O = $.prefixCls, A = $.mode, j = $.openKeys, N = $.disabled, B = $.overflowDisabled, P = $.activeKey, R = $.selectedKeys, T = $.itemIcon, F = $.expandIcon, I = $.onItemClick, k = $.onOpenChange, L = $.onActive, W = v.useContext(Gf), U = W._internalRenderSubMenuItem, Z = v.useContext(Eb), M = Z.isSubPathKey, V = No(), H = "".concat(O, "-submenu"), q = N || l, J = v.useRef(), ee = v.useRef();
  process.env.NODE_ENV !== "production" && s && yt(!1, "SubMenu should not leave undefined `key`.");
  var ce = d ?? T, ae = m ?? F, me = j.includes(i), fe = !B && me, G = M(R, i), le = Sb(i, q, E, D), Se = le.active, De = ct(le, yR), Ee = v.useState(!1), oe = ue(Ee, 2), se = oe[0], ge = oe[1], he = function(st) {
    q || ge(st);
  }, ye = function(st) {
    he(!0), b == null || b({
      key: i,
      domEvent: st
    });
  }, Ne = function(st) {
    he(!1), C == null || C({
      key: i,
      domEvent: st
    });
  }, $e = v.useMemo(function() {
    return Se || (A !== "inline" ? se || M([P], i) : !1);
  }, [A, Se, P, se, i, M]), je = Db(V.length), Et = function(st) {
    q || (y == null || y({
      key: i,
      domEvent: st
    }), A === "inline" && k(i, !me));
  }, Le = Jo(function(Qe) {
    g == null || g(Ys(Qe)), I(Qe);
  }), xe = function(st) {
    A !== "inline" && k(i, st);
  }, Ve = function() {
    L(i);
  }, He = x && "".concat(x, "-popup"), zt = /* @__PURE__ */ v.createElement("div", _e({
    role: "menuitem",
    style: je,
    className: "".concat(H, "-title"),
    tabIndex: q ? null : -1,
    ref: J,
    title: typeof o == "string" ? o : null,
    "data-menu-id": B && x ? null : x,
    "aria-expanded": fe,
    "aria-haspopup": !0,
    "aria-controls": He,
    "aria-disabled": q,
    onClick: Et,
    onFocus: Ve
  }, De), o, /* @__PURE__ */ v.createElement(xb, {
    icon: A !== "horizontal" ? ae : void 0,
    props: Y(Y({}, t), {}, {
      isOpen: fe,
      // [Legacy] Not sure why need this mark
      isSubMenu: !0
    })
  }, /* @__PURE__ */ v.createElement("i", {
    className: "".concat(H, "-arrow")
  }))), rt = v.useRef(A);
  if (A !== "inline" && V.length > 1 ? rt.current = "vertical" : rt.current = A, !B) {
    var Bt = rt.current;
    zt = /* @__PURE__ */ v.createElement(pR, {
      mode: Bt,
      prefixCls: H,
      visible: !u && fe && A !== "inline",
      popupClassName: h,
      popupOffset: p,
      popupStyle: f,
      popup: /* @__PURE__ */ v.createElement(
        Bi,
        {
          mode: Bt === "horizontal" ? "vertical" : Bt
        },
        /* @__PURE__ */ v.createElement(Zf, {
          id: He,
          ref: ee
        }, c)
      ),
      disabled: q,
      onVisibleChange: xe
    }, zt);
  }
  var ht = /* @__PURE__ */ v.createElement(Mn.Item, _e({
    role: "none"
  }, S, {
    component: "li",
    style: n,
    className: ne(H, "".concat(H, "-").concat(A), a, (r = {}, K(r, "".concat(H, "-open"), fe), K(r, "".concat(H, "-active"), $e), K(r, "".concat(H, "-selected"), G), K(r, "".concat(H, "-disabled"), q), r)),
    onMouseEnter: ye,
    onMouseLeave: Ne
  }), zt, !B && /* @__PURE__ */ v.createElement(hR, {
    id: He,
    open: fe,
    keyPath: V
  }, c));
  return U && (ht = U(ht, t, {
    selected: G,
    active: $e,
    open: fe,
    disabled: q
  })), /* @__PURE__ */ v.createElement(Bi, {
    onItemClick: Le,
    mode: A === "horizontal" ? "vertical" : A,
    itemIcon: ce,
    expandIcon: ae
  }, ht);
};
function Sl(e) {
  var t = e.eventKey, r = e.children, n = No(t), a = Qf(r, n), o = El();
  v.useEffect(function() {
    if (o)
      return o.registerPath(t, n), function() {
        o.unregisterPath(t, n);
      };
  }, [n]);
  var i;
  return o ? i = a : i = /* @__PURE__ */ v.createElement(CR, e, a), /* @__PURE__ */ v.createElement(Cb.Provider, {
    value: n
  }, i);
}
var ER = ["className", "title", "eventKey", "children"], wR = ["children"], SR = function(t) {
  var r = t.className, n = t.title;
  t.eventKey;
  var a = t.children, o = ct(t, ER), i = v.useContext(ln), s = i.prefixCls, l = "".concat(s, "-item-group");
  return /* @__PURE__ */ v.createElement("li", _e({
    role: "presentation"
  }, o, {
    onClick: function(c) {
      return c.stopPropagation();
    },
    className: ne(l, r)
  }), /* @__PURE__ */ v.createElement("div", {
    role: "presentation",
    className: "".concat(l, "-title"),
    title: typeof n == "string" ? n : void 0
  }, n), /* @__PURE__ */ v.createElement("ul", {
    role: "group",
    className: "".concat(l, "-list")
  }, a));
};
function Dl(e) {
  var t = e.children, r = ct(e, wR), n = No(r.eventKey), a = Qf(t, n), o = El();
  return o ? a : /* @__PURE__ */ v.createElement(SR, Cr(r, ["warnKey"]), a);
}
function Jf(e) {
  var t = e.className, r = e.style, n = v.useContext(ln), a = n.prefixCls, o = El();
  return o ? null : /* @__PURE__ */ v.createElement("li", {
    role: "separator",
    className: ne("".concat(a, "-item-divider"), t),
    style: r
  });
}
var DR = ["label", "children", "key", "type"];
function Vc(e) {
  return (e || []).map(function(t, r) {
    if (t && ut(t) === "object") {
      var n = t, a = n.label, o = n.children, i = n.key, s = n.type, l = ct(n, DR), u = i ?? "tmp-".concat(r);
      return o || s === "group" ? s === "group" ? /* @__PURE__ */ v.createElement(Dl, _e({
        key: u
      }, l, {
        title: a
      }), Vc(o)) : /* @__PURE__ */ v.createElement(Sl, _e({
        key: u
      }, l, {
        title: a
      }), Vc(o)) : s === "divider" ? /* @__PURE__ */ v.createElement(Jf, _e({
        key: u
      }, l)) : /* @__PURE__ */ v.createElement(wl, _e({
        key: u
      }, l), a);
    }
    return null;
  }).filter(function(t) {
    return t;
  });
}
function xR(e, t, r) {
  var n = e;
  return t && (n = Vc(t)), Qf(n, r);
}
var OR = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem"], ro = [], $R = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r, n, a = e, o = a.prefixCls, i = o === void 0 ? "rc-menu" : o, s = a.rootClassName, l = a.style, u = a.className, c = a.tabIndex, d = c === void 0 ? 0 : c, m = a.items, h = a.children, p = a.direction, f = a.id, g = a.mode, b = g === void 0 ? "vertical" : g, C = a.inlineCollapsed, y = a.disabled, E = a.disabledOverflow, D = a.subMenuOpenDelay, S = D === void 0 ? 0.1 : D, x = a.subMenuCloseDelay, $ = x === void 0 ? 0.1 : x, O = a.forceSubMenuRender, A = a.defaultOpenKeys, j = a.openKeys, N = a.activeKey, B = a.defaultActiveFirst, P = a.selectable, R = P === void 0 ? !0 : P, T = a.multiple, F = T === void 0 ? !1 : T, I = a.defaultSelectedKeys, k = a.selectedKeys, L = a.onSelect, W = a.onDeselect, U = a.inlineIndent, Z = U === void 0 ? 24 : U, M = a.motion, V = a.defaultMotions, H = a.triggerSubMenuAction, q = H === void 0 ? "hover" : H, J = a.builtinPlacements, ee = a.itemIcon, ce = a.expandIcon, ae = a.overflowedIndicator, me = ae === void 0 ? "..." : ae, fe = a.overflowedIndicatorPopupClassName, G = a.getPopupContainer, le = a.onClick, Se = a.onOpenChange, De = a.onKeyDown, Ee = a.openAnimation, oe = a.openTransitionName, se = a._internalRenderMenuItem, ge = a._internalRenderSubMenuItem, he = ct(a, OR), ye = v.useMemo(function() {
    return xR(h, m, ro);
  }, [h, m]), Ne = v.useState(!1), $e = ue(Ne, 2), je = $e[0], Et = $e[1], Le = v.useRef(), xe = nR(f), Ve = p === "rtl";
  process.env.NODE_ENV !== "production" && yt(!Ee && !oe, "`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.");
  var He = qr(A, {
    value: j,
    postState: function(vt) {
      return vt || ro;
    }
  }), zt = ue(He, 2), rt = zt[0], Bt = zt[1], ht = function(vt) {
    var bt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    function rr() {
      Bt(vt), Se == null || Se(vt);
    }
    bt ? ky(rr) : rr();
  }, Qe = v.useState(rt), st = ue(Qe, 2), Gt = st[0], Dt = st[1], ve = v.useRef(!1), Pe = v.useMemo(function() {
    return (b === "inline" || b === "vertical") && C ? ["vertical", C] : [b, !1];
  }, [b, C]), ke = ue(Pe, 2), nt = ke[0], Je = ke[1], Re = nt === "inline", Ze = v.useState(nt), Ae = ue(Ze, 2), Te = Ae[0], lt = Ae[1], _t = v.useState(Je), Xt = ue(_t, 2), Tt = Xt[0], cn = Xt[1];
  v.useEffect(function() {
    lt(nt), cn(Je), ve.current && (Re ? Bt(Gt) : ht(ro));
  }, [nt, Je]);
  var fn = v.useState(0), Ar = ue(fn, 2), Er = Ar[0], _ = Ar[1], ie = Er >= ye.length - 1 || Te !== "horizontal" || E;
  v.useEffect(function() {
    Re && Dt(rt);
  }, [rt]), v.useEffect(function() {
    return ve.current = !0, function() {
      ve.current = !1;
    };
  }, []);
  var pe = tR(), Me = pe.registerPath, Xe = pe.unregisterPath, it = pe.refreshOverflowKeys, Ue = pe.isSubPathKey, We = pe.getKeyPath, Ot = pe.getKeys, xt = pe.getSubPathKeys, Ye = v.useMemo(function() {
    return {
      registerPath: Me,
      unregisterPath: Xe
    };
  }, [Me, Xe]), Yt = v.useMemo(function() {
    return {
      isSubPathKey: Ue
    };
  }, [Ue]);
  v.useEffect(function() {
    it(ie ? ro : ye.slice(Er + 1).map(function($t) {
      return $t.key;
    }));
  }, [Er, ie]);
  var Lr = qr(N || B && ((r = ye[0]) === null || r === void 0 ? void 0 : r.key), {
    value: N
  }), dn = ue(Lr, 2), qt = dn[0], Xr = dn[1], La = Jo(function($t) {
    Xr($t);
  }), Mo = Jo(function() {
    Xr(void 0);
  });
  Ia(t, function() {
    return {
      list: Le.current,
      focus: function(vt) {
        var bt, rr = Ot(), nr = kc(rr, xe), Un = nr.elements, Gn = nr.key2element, jo = nr.element2key, Va = Xf(Le.current, Un), ua = qt ?? (Va[0] ? jo.get(Va[0]) : (bt = ye.find(function(Ha) {
          return !Ha.props.disabled;
        })) === null || bt === void 0 ? void 0 : bt.key), Dn = Gn.get(ua);
        if (ua && Dn) {
          var cr;
          Dn == null || (cr = Dn.focus) === null || cr === void 0 || cr.call(Dn, vt);
        }
      }
    };
  });
  var Cn = qr(I || [], {
    value: k,
    // Legacy convert key to array
    postState: function(vt) {
      return Array.isArray(vt) ? vt : vt == null ? ro : [vt];
    }
  }), la = ue(Cn, 2), Yr = la[0], Zr = la[1], En = function(vt) {
    if (R) {
      var bt = vt.key, rr = Yr.includes(bt), nr;
      F ? rr ? nr = Yr.filter(function(Gn) {
        return Gn !== bt;
      }) : nr = [].concat(Oe(Yr), [bt]) : nr = [bt], Zr(nr);
      var Un = Y(Y({}, vt), {}, {
        selectedKeys: nr
      });
      rr ? W == null || W(Un) : L == null || L(Un);
    }
    !F && rt.length && Te !== "inline" && ht(ro);
  }, Kn = Jo(function($t) {
    le == null || le(Ys($t)), En($t);
  }), wn = Jo(function($t, vt) {
    var bt = rt.filter(function(nr) {
      return nr !== $t;
    });
    if (vt)
      bt.push($t);
    else if (Te !== "inline") {
      var rr = xt($t);
      bt = bt.filter(function(nr) {
        return !rr.has(nr);
      });
    }
    Eo(rt, bt, !0) || ht(bt, !0);
  }), Qr = function(vt, bt) {
    var rr = bt ?? !rt.includes(vt);
    wn(vt, rr);
  }, ka = QP(Te, qt, Ve, xe, Le, Ot, We, Xr, Qr, De);
  v.useEffect(function() {
    Et(!0);
  }, []);
  var Sn = v.useMemo(function() {
    return {
      _internalRenderMenuItem: se,
      _internalRenderSubMenuItem: ge
    };
  }, [se, ge]), vn = Te !== "horizontal" || E ? ye : (
    // Need wrap for overflow dropdown that do not response for open
    ye.map(function($t, vt) {
      return (
        // Always wrap provider to avoid sub node re-mount
        /* @__PURE__ */ v.createElement(Bi, {
          key: $t.key,
          overflowDisabled: vt > Er
        }, $t)
      );
    })
  ), za = /* @__PURE__ */ v.createElement(Mn, _e({
    id: f,
    ref: Le,
    prefixCls: "".concat(i, "-overflow"),
    component: "ul",
    itemComponent: wl,
    className: ne(i, "".concat(i, "-root"), "".concat(i, "-").concat(Te), u, (n = {}, K(n, "".concat(i, "-inline-collapsed"), Tt), K(n, "".concat(i, "-rtl"), Ve), n), s),
    dir: p,
    style: l,
    role: "menu",
    tabIndex: d,
    data: vn,
    renderRawItem: function(vt) {
      return vt;
    },
    renderRawRest: function(vt) {
      var bt = vt.length, rr = bt ? ye.slice(-bt) : null;
      return /* @__PURE__ */ v.createElement(Sl, {
        eventKey: zc,
        title: me,
        disabled: ie,
        internalPopupClose: bt === 0,
        popupClassName: fe
      }, rr);
    },
    maxCount: Te !== "horizontal" || E ? Mn.INVALIDATE : Mn.RESPONSIVE,
    ssr: "full",
    "data-menu-list": !0,
    onVisibleChange: function(vt) {
      _(vt);
    },
    onKeyDown: ka
  }, he));
  return /* @__PURE__ */ v.createElement(Gf.Provider, {
    value: Sn
  }, /* @__PURE__ */ v.createElement(pb.Provider, {
    value: xe
  }, /* @__PURE__ */ v.createElement(Bi, {
    prefixCls: i,
    rootClassName: s,
    mode: Te,
    openKeys: rt,
    rtl: Ve,
    disabled: y,
    motion: je ? M : null,
    defaultMotions: je ? V : null,
    activeKey: qt,
    onActive: La,
    onInactive: Mo,
    selectedKeys: Yr,
    inlineIndent: Z,
    subMenuOpenDelay: S,
    subMenuCloseDelay: $,
    forceSubMenuRender: O,
    builtinPlacements: J,
    triggerSubMenuAction: q,
    getPopupContainer: G,
    itemIcon: ee,
    expandIcon: ce,
    onItemClick: Kn,
    onOpenChange: wn
  }, /* @__PURE__ */ v.createElement(Eb.Provider, {
    value: Yt
  }, za), /* @__PURE__ */ v.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": !0
  }, /* @__PURE__ */ v.createElement(yb.Provider, {
    value: Ye
  }, ye)))));
}), Li = $R;
Li.Item = wl;
Li.SubMenu = Sl;
Li.ItemGroup = Dl;
Li.Divider = Jf;
var AR = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "bars", theme: "outlined" };
const BR = AR;
var FR = function(t, r) {
  return /* @__PURE__ */ v.createElement(vr, _e({}, t, {
    ref: r,
    icon: BR
  }));
}, $b = /* @__PURE__ */ v.forwardRef(FR);
process.env.NODE_ENV !== "production" && ($b.displayName = "BarsOutlined");
const PR = $b;
var RR = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" };
const NR = RR;
var IR = function(t, r) {
  return /* @__PURE__ */ v.createElement(vr, _e({}, t, {
    ref: r,
    icon: NR
  }));
}, Ab = /* @__PURE__ */ v.forwardRef(IR);
process.env.NODE_ENV !== "production" && (Ab.displayName = "LeftOutlined");
const tg = Ab, TR = (e) => !isNaN(parseFloat(e)) && isFinite(e), MR = /* @__PURE__ */ v.createContext({
  siderHook: {
    addSider: () => null,
    removeSider: () => null
  }
});
var jR = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const rg = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px"
}, ed = /* @__PURE__ */ v.createContext({}), _R = /* @__PURE__ */ (() => {
  let e = 0;
  return function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return e += 1, `${t}${e}`;
  };
})(), LR = /* @__PURE__ */ v.forwardRef((e, t) => {
  const {
    prefixCls: r,
    className: n,
    trigger: a,
    children: o,
    defaultCollapsed: i = !1,
    theme: s = "dark",
    style: l = {},
    collapsible: u = !1,
    reverseArrow: c = !1,
    width: d = 200,
    collapsedWidth: m = 80,
    zeroWidthTriggerStyle: h,
    breakpoint: p,
    onCollapse: f,
    onBreakpoint: g
  } = e, b = jR(e, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]), {
    siderHook: C
  } = Ct(MR), [y, E] = Qt("collapsed" in e ? e.collapsed : i), [D, S] = Qt(!1);
  At(() => {
    "collapsed" in e && E(e.collapsed);
  }, [e.collapsed]);
  const x = (B, P) => {
    "collapsed" in e || E(B), f == null || f(B, P);
  }, $ = ze();
  $.current = (B) => {
    S(B.matches), g == null || g(B.matches), y !== B.matches && x(B.matches, "responsive");
  }, At(() => {
    function B(R) {
      return $.current(R);
    }
    let P;
    if (typeof window < "u") {
      const {
        matchMedia: R
      } = window;
      if (R && p && p in rg) {
        P = R(`screen and (max-width: ${rg[p]})`);
        try {
          P.addEventListener("change", B);
        } catch {
          P.addListener(B);
        }
        B(P);
      }
    }
    return () => {
      try {
        P == null || P.removeEventListener("change", B);
      } catch {
        P == null || P.removeListener(B);
      }
    };
  }, [p]), At(() => {
    const B = _R("ant-sider-");
    return C.addSider(B), () => C.removeSider(B);
  }, []);
  const O = () => {
    x(!y, "clickTrigger");
  }, {
    getPrefixCls: A
  } = Ct(mt), j = () => {
    const B = A("layout-sider", r), P = Cr(b, ["collapsed"]), R = y ? m : d, T = TR(R) ? `${R}px` : String(R), F = parseFloat(String(m || 0)) === 0 ? /* @__PURE__ */ v.createElement("span", {
      onClick: O,
      className: ne(`${B}-zero-width-trigger`, `${B}-zero-width-trigger-${c ? "right" : "left"}`),
      style: h
    }, a || /* @__PURE__ */ v.createElement(PR, null)) : null, L = {
      expanded: c ? /* @__PURE__ */ v.createElement(Mc, null) : /* @__PURE__ */ v.createElement(tg, null),
      collapsed: c ? /* @__PURE__ */ v.createElement(tg, null) : /* @__PURE__ */ v.createElement(Mc, null)
    }[y ? "collapsed" : "expanded"], W = a !== null ? F || /* @__PURE__ */ v.createElement("div", {
      className: `${B}-trigger`,
      onClick: O,
      style: {
        width: T
      }
    }, a || L) : null, U = Object.assign(Object.assign({}, l), {
      flex: `0 0 ${T}`,
      maxWidth: T,
      minWidth: T,
      width: T
    }), Z = ne(B, `${B}-${s}`, {
      [`${B}-collapsed`]: !!y,
      [`${B}-has-trigger`]: u && a !== null && !F,
      [`${B}-below`]: !!D,
      [`${B}-zero-width`]: parseFloat(T) === 0
    }, n);
    return /* @__PURE__ */ v.createElement("aside", Object.assign({
      className: Z
    }, P, {
      style: U,
      ref: t
    }), /* @__PURE__ */ v.createElement("div", {
      className: `${B}-children`
    }, o), u || D && F ? W : null);
  }, N = v.useMemo(() => ({
    siderCollapsed: y
  }), [y]);
  return /* @__PURE__ */ v.createElement(ed.Provider, {
    value: N
  }, j());
});
process.env.NODE_ENV !== "production" && (LR.displayName = "Sider");
var kR = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "ellipsis", theme: "outlined" };
const zR = kR;
var VR = function(t, r) {
  return /* @__PURE__ */ v.createElement(vr, _e({}, t, {
    ref: r,
    icon: zR
  }));
}, Bb = /* @__PURE__ */ v.forwardRef(VR);
process.env.NODE_ENV !== "production" && (Bb.displayName = "EllipsisOutlined");
const Fb = Bb;
var HR = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const WR = (e) => {
  const {
    prefixCls: t,
    className: r,
    dashed: n
  } = e, a = HR(e, ["prefixCls", "className", "dashed"]), {
    getPrefixCls: o
  } = v.useContext(mt), i = o("menu", t), s = ne({
    [`${i}-item-divider-dashed`]: !!n
  }, r);
  return /* @__PURE__ */ v.createElement(Jf, Object.assign({
    className: s
  }, a));
}, Pb = WR, qR = /* @__PURE__ */ _r({
  prefixCls: "",
  firstLevel: !0,
  inlineCollapsed: !1
}), Zs = qR, KR = (e) => {
  var t;
  const {
    className: r,
    children: n,
    icon: a,
    title: o,
    danger: i
  } = e, {
    prefixCls: s,
    firstLevel: l,
    direction: u,
    disableMenuItemTitleTooltip: c,
    inlineCollapsed: d
  } = v.useContext(Zs), m = (C) => {
    const y = /* @__PURE__ */ v.createElement("span", {
      className: `${s}-title-content`
    }, n);
    return (!a || Ln(n) && n.type === "span") && n && C && l && typeof n == "string" ? /* @__PURE__ */ v.createElement("div", {
      className: `${s}-inline-collapsed-noicon`
    }, n.charAt(0)) : y;
  }, {
    siderCollapsed: h
  } = v.useContext(ed);
  let p = o;
  typeof o > "u" ? p = l ? n : "" : o === !1 && (p = "");
  const f = {
    title: p
  };
  !h && !d && (f.title = null, f.open = !1);
  const g = on(n).length;
  let b = /* @__PURE__ */ v.createElement(wl, Object.assign({}, Cr(e, ["title", "icon", "danger"]), {
    className: ne({
      [`${s}-item-danger`]: i,
      [`${s}-item-only-child`]: (a ? g + 1 : g) === 1
    }, r),
    title: typeof o == "string" ? o : void 0
  }), sn(a, {
    className: ne(Ln(a) ? (t = a.props) === null || t === void 0 ? void 0 : t.className : "", `${s}-item-icon`)
  }), m(d));
  return c || (b = /* @__PURE__ */ v.createElement(Oo, Object.assign({}, f, {
    placement: u === "rtl" ? "left" : "right",
    overlayClassName: `${s}-inline-collapsed-tooltip`
  }), b)), b;
}, Rb = KR, UR = (e) => {
  var t;
  const {
    popupClassName: r,
    icon: n,
    title: a,
    theme: o
  } = e, i = v.useContext(Zs), {
    prefixCls: s,
    inlineCollapsed: l,
    theme: u
  } = i, c = No();
  let d;
  if (!n)
    d = l && !c.length && a && typeof a == "string" ? /* @__PURE__ */ v.createElement("div", {
      className: `${s}-inline-collapsed-noicon`
    }, a.charAt(0)) : /* @__PURE__ */ v.createElement("span", {
      className: `${s}-title-content`
    }, a);
  else {
    const p = Ln(a) && a.type === "span";
    d = /* @__PURE__ */ v.createElement(v.Fragment, null, sn(n, {
      className: ne(Ln(n) ? (t = n.props) === null || t === void 0 ? void 0 : t.className : "", `${s}-item-icon`)
    }), p ? a : /* @__PURE__ */ v.createElement("span", {
      className: `${s}-title-content`
    }, a));
  }
  const m = v.useMemo(() => Object.assign(Object.assign({}, i), {
    firstLevel: !1
  }), [i]), [h] = Nf("Menu");
  return /* @__PURE__ */ v.createElement(Zs.Provider, {
    value: m
  }, /* @__PURE__ */ v.createElement(Sl, Object.assign({}, Cr(e, ["icon"]), {
    title: d,
    popupClassName: ne(s, r, `${s}-${o || u}`),
    popupStyle: {
      zIndex: h
    }
  })));
}, Nb = UR;
var GR = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function Hc(e) {
  return (e || []).map((t, r) => {
    if (t && typeof t == "object") {
      const n = t, {
        label: a,
        children: o,
        key: i,
        type: s
      } = n, l = GR(n, ["label", "children", "key", "type"]), u = i ?? `tmp-${r}`;
      return o || s === "group" ? s === "group" ? /* @__PURE__ */ v.createElement(Dl, Object.assign({
        key: u
      }, l, {
        title: a
      }), Hc(o)) : /* @__PURE__ */ v.createElement(Nb, Object.assign({
        key: u
      }, l, {
        title: a
      }), Hc(o)) : s === "divider" ? /* @__PURE__ */ v.createElement(Pb, Object.assign({
        key: u
      }, l)) : /* @__PURE__ */ v.createElement(Rb, Object.assign({
        key: u
      }, l), a);
    }
    return null;
  }).filter((t) => t);
}
function XR(e) {
  return v.useMemo(() => e && Hc(e), [e]);
}
var YR = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Qs = /* @__PURE__ */ v.createContext(null), ZR = /* @__PURE__ */ v.forwardRef((e, t) => {
  const {
    children: r
  } = e, n = YR(e, ["children"]), a = v.useContext(Qs), o = v.useMemo(() => Object.assign(Object.assign({}, a), n), [
    a,
    n.prefixCls,
    // restProps.expandIcon, Not mark as deps since this is a ReactNode
    n.mode,
    n.selectable,
    n.rootClassName
    // restProps.validator, Not mark as deps since this is a function
  ]), i = ix(r), s = Pi(t, i ? r.ref : null);
  return /* @__PURE__ */ v.createElement(Qs.Provider, {
    value: o
  }, /* @__PURE__ */ v.createElement(Ks, null, i ? /* @__PURE__ */ v.cloneElement(r, {
    ref: s
  }) : r));
}), QR = (e) => {
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
      borderBottom: `${we(o)} ${i} ${a}`,
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
}, JR = (e) => {
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
          transform: `rotate(-45deg) translateY(${we(n(r).mul(-1).equal())})`
        },
        "&::after": {
          transform: `rotate(45deg) translateY(${we(r)})`
        }
      }
    }
  };
}, ng = (e) => Object.assign({}, $f(e)), ag = (e, t) => {
  const {
    componentCls: r,
    itemColor: n,
    itemSelectedColor: a,
    groupTitleColor: o,
    itemBg: i,
    subMenuItemBg: s,
    itemSelectedBg: l,
    activeBarHeight: u,
    activeBarWidth: c,
    activeBarBorderWidth: d,
    motionDurationSlow: m,
    motionEaseInOut: h,
    motionEaseOut: p,
    itemPaddingInline: f,
    motionDurationMid: g,
    itemHoverColor: b,
    lineType: C,
    colorSplit: y,
    // Disabled
    itemDisabledColor: E,
    // Danger
    dangerItemColor: D,
    dangerItemHoverColor: S,
    dangerItemSelectedColor: x,
    dangerItemActiveBg: $,
    dangerItemSelectedBg: O,
    // Bg
    popupBg: A,
    itemHoverBg: j,
    itemActiveBg: N,
    menuSubMenuBg: B,
    // Horizontal
    horizontalItemSelectedColor: P,
    horizontalItemSelectedBg: R,
    horizontalItemBorderRadius: T,
    horizontalItemHoverBg: F
  } = e;
  return {
    [`${r}-${t}, ${r}-${t} > ${r}`]: {
      color: n,
      background: i,
      [`&${r}-root:focus-visible`]: Object.assign({}, ng(e)),
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
        color: `${E} !important`
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
            backgroundColor: N
          }
        },
        [`${r}-submenu-title`]: {
          "&:hover": {
            backgroundColor: j
          },
          "&:active": {
            backgroundColor: N
          }
        }
      },
      // Danger - only Item has
      [`${r}-item-danger`]: {
        color: D,
        [`&${r}-item:hover`]: {
          [`&:not(${r}-item-selected):not(${r}-submenu-selected)`]: {
            color: S
          }
        },
        [`&${r}-item:active`]: {
          background: $
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
        backgroundColor: l,
        // Danger
        [`&${r}-item-danger`]: {
          backgroundColor: O
        }
      },
      [`${r}-item, ${r}-submenu-title`]: {
        [`&:not(${r}-item-disabled):focus-visible`]: Object.assign({}, ng(e))
      },
      [`&${r}-submenu > ${r}`]: {
        backgroundColor: B
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
          borderRadius: T,
          "&::after": {
            position: "absolute",
            insetInline: f,
            bottom: 0,
            borderBottom: `${we(u)} solid transparent`,
            transition: `border-color ${m} ${h}`,
            content: '""'
          },
          "&:hover, &-active, &-open": {
            background: F,
            "&::after": {
              borderBottomWidth: u,
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
              borderBottomWidth: u,
              borderBottomColor: P
            }
          }
        }
      }),
      // ================== Inline & Vertical ===================
      //
      [`&${r}-root`]: {
        [`&${r}-inline, &${r}-vertical`]: {
          borderInlineEnd: `${we(d)} ${C} ${y}`
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
            borderInlineEnd: `${we(c)} solid ${a}`,
            transform: "scaleY(0.0001)",
            opacity: 0,
            transition: [`transform ${g} ${p}`, `opacity ${g} ${p}`].join(","),
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
            transition: [`transform ${g} ${h}`, `opacity ${g} ${h}`].join(",")
          }
        }
      }
    }
  };
}, og = (e) => {
  const {
    componentCls: t,
    itemHeight: r,
    itemMarginInline: n,
    padding: a,
    menuArrowSize: o,
    marginXS: i,
    itemMarginBlock: s,
    itemWidth: l
  } = e, u = e.calc(o).add(a).add(i).equal();
  return {
    [`${t}-item`]: {
      position: "relative",
      overflow: "hidden"
    },
    [`${t}-item, ${t}-submenu-title`]: {
      height: r,
      lineHeight: we(r),
      paddingInline: a,
      overflow: "hidden",
      textOverflow: "ellipsis",
      marginInline: n,
      marginBlock: s,
      width: l
    },
    [`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]: {
      height: r,
      lineHeight: we(r)
    },
    [`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]: {
      paddingInlineEnd: u
    }
  };
}, eN = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    itemHeight: n,
    colorTextLightSolid: a,
    dropdownWidth: o,
    controlHeightLG: i,
    motionDurationMid: s,
    motionEaseOut: l,
    paddingXL: u,
    itemMarginInline: c,
    fontSizeLG: d,
    motionDurationSlow: m,
    paddingXS: h,
    boxShadowSecondary: p,
    collapsedWidth: f,
    collapsedIconSize: g
  } = e, b = {
    height: n,
    lineHeight: we(n),
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
        }, og(e))
      },
      [`${t}-submenu-popup`]: {
        [`${t}-vertical`]: Object.assign(Object.assign({}, og(e)), {
          boxShadow: p
        })
      }
    },
    // Vertical only
    {
      [`${t}-submenu-popup ${t}-vertical${t}-sub`]: {
        minWidth: o,
        maxHeight: `calc(100vh - ${we(e.calc(i).mul(2.5).equal())})`,
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
            transition: [`border-color ${m}`, `background ${m}`, `padding ${s} ${l}`].join(","),
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
            paddingInlineStart: u
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
          paddingInline: `calc(50% - ${we(e.calc(d).div(2).equal())} - ${we(c)})`,
          textOverflow: "clip",
          [`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]: {
            opacity: 0
          },
          [`${t}-item-icon, ${r}`]: {
            margin: 0,
            fontSize: g,
            lineHeight: we(n),
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
        [`${t}-item-group-title`]: Object.assign(Object.assign({}, I$), {
          paddingInline: h
        })
      }
    }
  ];
}, ig = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: r,
    motionDurationMid: n,
    motionEaseInOut: a,
    motionEaseOut: o,
    iconCls: i,
    iconSize: s,
    iconMarginInlineEnd: l
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
          marginInlineStart: l,
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
}, sg = (e) => {
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
          transform: `rotate(45deg) translateY(${we(e.calc(i).mul(-1).equal())})`
        },
        "&::after": {
          transform: `rotate(-45deg) translateY(${we(i)})`
        }
      }
    }
  };
}, tN = (e) => {
  const {
    antCls: t,
    componentCls: r,
    fontSize: n,
    motionDurationSlow: a,
    motionDurationMid: o,
    motionEaseInOut: i,
    paddingXS: s,
    padding: l,
    colorSplit: u,
    lineWidth: c,
    zIndexPopup: d,
    borderRadiusLG: m,
    subMenuItemBorderRadius: h,
    menuArrowSize: p,
    menuArrowOffset: f,
    lineType: g,
    menuPanelMaskInset: b,
    groupTitleLineHeight: C,
    groupTitleFontSize: y
  } = e;
  return [
    // Misc
    {
      "": {
        [`${r}`]: Object.assign(Object.assign({}, cc()), {
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
      [r]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, yn(e)), cc()), {
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
          padding: `${we(s)} ${we(l)}`,
          fontSize: y,
          lineHeight: C,
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
          borderColor: u,
          borderStyle: g,
          borderWidth: 0,
          borderTopWidth: c,
          marginBlock: c,
          padding: 0,
          "&-dashed": {
            borderStyle: "dashed"
          }
        }
      }), ig(e)), {
        [`${r}-item-group`]: {
          [`${r}-item-group-list`]: {
            margin: 0,
            padding: 0,
            [`${r}-item, ${r}-submenu-title`]: {
              paddingInline: `${we(e.calc(n).mul(2).equal())} ${we(l)}`
            }
          }
        },
        // ======================= Sub Menu =======================
        "&-submenu": {
          "&-popup": {
            position: "absolute",
            zIndex: d,
            borderRadius: m,
            boxShadow: "none",
            transformOrigin: "0 0",
            [`&${r}-submenu`]: {
              background: "transparent"
            },
            // https://github.com/ant-design/ant-design/issues/13955
            "&::before": {
              position: "absolute",
              inset: `${we(b)} 0 0`,
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
            borderRadius: m
          }, ig(e)), sg(e)), {
            [`${r}-item, ${r}-submenu > ${r}-submenu-title`]: {
              borderRadius: h
            },
            [`${r}-submenu-title::after`]: {
              transition: `transform ${a} ${i}`
            }
          })
        }
      }), sg(e)), {
        [`&-inline-collapsed ${r}-submenu-arrow,
        &-inline ${r}-submenu-arrow`]: {
          // ↓
          "&::before": {
            transform: `rotate(-45deg) translateX(${we(f)})`
          },
          "&::after": {
            transform: `rotate(45deg) translateX(${we(e.calc(f).mul(-1).equal())})`
          }
        },
        [`${r}-submenu-open${r}-submenu-inline > ${r}-submenu-title > ${r}-submenu-arrow`]: {
          // ↑
          transform: `translateY(${we(e.calc(p).mul(0.2).mul(-1).equal())})`,
          "&::after": {
            transform: `rotate(-45deg) translateX(${we(e.calc(f).mul(-1).equal())})`
          },
          "&::before": {
            transform: `rotate(45deg) translateX(${we(f)})`
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
}, rN = (e) => {
  var t, r, n;
  const {
    colorPrimary: a,
    colorError: o,
    colorTextDisabled: i,
    colorErrorBg: s,
    colorText: l,
    colorTextDescription: u,
    colorBgContainer: c,
    colorFillAlter: d,
    colorFillContent: m,
    lineWidth: h,
    lineWidthBold: p,
    controlItemBgActive: f,
    colorBgTextHover: g,
    controlHeightLG: b,
    lineHeight: C,
    colorBgElevated: y,
    marginXXS: E,
    padding: D,
    fontSize: S,
    controlHeightSM: x,
    fontSizeLG: $,
    colorTextLightSolid: O,
    colorErrorHover: A
  } = e, j = (t = e.activeBarWidth) !== null && t !== void 0 ? t : 0, N = (r = e.activeBarBorderWidth) !== null && r !== void 0 ? r : h, B = (n = e.itemMarginInline) !== null && n !== void 0 ? n : e.marginXXS, P = new sr(O).setAlpha(0.65).toRgbString();
  return {
    dropdownWidth: 160,
    zIndexPopup: e.zIndexPopupBase + 50,
    radiusItem: e.borderRadiusLG,
    itemBorderRadius: e.borderRadiusLG,
    radiusSubMenuItem: e.borderRadiusSM,
    subMenuItemBorderRadius: e.borderRadiusSM,
    colorItemText: l,
    itemColor: l,
    colorItemTextHover: l,
    itemHoverColor: l,
    colorItemTextHoverHorizontal: a,
    horizontalItemHoverColor: a,
    colorGroupTitle: u,
    groupTitleColor: u,
    colorItemTextSelected: a,
    itemSelectedColor: a,
    colorItemTextSelectedHorizontal: a,
    horizontalItemSelectedColor: a,
    colorItemBg: c,
    itemBg: c,
    colorItemBgHover: g,
    itemHoverBg: g,
    colorItemBgActive: m,
    itemActiveBg: f,
    colorSubItemBg: d,
    subMenuItemBg: d,
    colorItemBgSelected: f,
    itemSelectedBg: f,
    colorItemBgSelectedHorizontal: "transparent",
    horizontalItemSelectedBg: "transparent",
    colorActiveBarWidth: 0,
    activeBarWidth: j,
    colorActiveBarHeight: p,
    activeBarHeight: p,
    colorActiveBarBorderSize: h,
    activeBarBorderWidth: N,
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
    itemMarginInline: B,
    horizontalItemBorderRadius: 0,
    horizontalItemHoverBg: "transparent",
    itemHeight: b,
    groupTitleLineHeight: C,
    collapsedWidth: b * 2,
    popupBg: y,
    itemMarginBlock: E,
    itemPaddingInline: D,
    horizontalLineHeight: `${b * 1.15}px`,
    iconSize: S,
    iconMarginInlineEnd: x - S,
    collapsedIconSize: $,
    groupTitleFontSize: S,
    // Disabled
    darkItemDisabledColor: new sr(O).setAlpha(0.25).toRgbString(),
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
    darkDangerItemHoverColor: A,
    darkDangerItemSelectedColor: O,
    darkDangerItemActiveBg: o,
    // internal
    itemWidth: j ? `calc(100% + ${N}px)` : `calc(100% - ${B * 2}px)`
  };
}, nN = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  return un("Menu", (a) => {
    const {
      colorBgElevated: o,
      colorPrimary: i,
      colorTextLightSolid: s,
      controlHeightLG: l,
      fontSize: u,
      darkItemColor: c,
      darkDangerItemColor: d,
      darkItemBg: m,
      darkSubMenuItemBg: h,
      darkItemSelectedColor: p,
      darkItemSelectedBg: f,
      darkDangerItemSelectedBg: g,
      darkItemHoverBg: b,
      darkGroupTitleColor: C,
      darkItemHoverColor: y,
      darkItemDisabledColor: E,
      darkDangerItemHoverColor: D,
      darkDangerItemSelectedColor: S,
      darkDangerItemActiveBg: x,
      popupBg: $,
      darkPopupBg: O
    } = a, A = a.calc(u).div(7).mul(5).equal(), j = tr(a, {
      menuArrowSize: A,
      menuHorizontalHeight: a.calc(l).mul(1.15).equal(),
      menuArrowOffset: a.calc(A).mul(0.25).equal(),
      menuPanelMaskInset: -7,
      // Still a hardcode here since it's offset by rc-align
      menuSubMenuBg: o,
      calc: a.calc,
      popupBg: $
    }), N = tr(j, {
      itemColor: c,
      itemHoverColor: y,
      groupTitleColor: C,
      itemSelectedColor: p,
      itemBg: m,
      popupBg: O,
      subMenuItemBg: h,
      itemActiveBg: "transparent",
      itemSelectedBg: f,
      activeBarHeight: 0,
      activeBarBorderWidth: 0,
      itemHoverBg: b,
      // Disabled
      itemDisabledColor: E,
      // Danger
      dangerItemColor: d,
      dangerItemHoverColor: D,
      dangerItemSelectedColor: S,
      dangerItemActiveBg: x,
      dangerItemSelectedBg: g,
      menuSubMenuBg: h,
      // Horizontal
      horizontalItemSelectedColor: s,
      horizontalItemSelectedBg: i
    });
    return [
      // Basic
      tN(j),
      // Horizontal
      QR(j),
      // Hard code for some light style
      // Vertical
      eN(j),
      // Hard code for some light style
      // Theme
      ag(j, "light"),
      ag(N, "dark"),
      // RTL
      JR(j),
      // Motion
      Z0(j),
      Gs(j, "slide-up"),
      Gs(j, "slide-down"),
      Wf(j, "zoom-big")
    ];
  }, rN, {
    deprecatedTokens: [["colorGroupTitle", "groupTitleColor"], ["radiusItem", "itemBorderRadius"], ["radiusSubMenuItem", "subMenuItemBorderRadius"], ["colorItemText", "itemColor"], ["colorItemTextHover", "itemHoverColor"], ["colorItemTextHoverHorizontal", "horizontalItemHoverColor"], ["colorItemTextSelected", "itemSelectedColor"], ["colorItemTextSelectedHorizontal", "horizontalItemSelectedColor"], ["colorItemTextDisabled", "itemDisabledColor"], ["colorDangerItemText", "dangerItemColor"], ["colorDangerItemTextHover", "dangerItemHoverColor"], ["colorDangerItemTextSelected", "dangerItemSelectedColor"], ["colorDangerItemBgActive", "dangerItemActiveBg"], ["colorDangerItemBgSelected", "dangerItemSelectedBg"], ["colorItemBg", "itemBg"], ["colorItemBgHover", "itemHoverBg"], ["colorSubItemBg", "subMenuItemBg"], ["colorItemBgActive", "itemActiveBg"], ["colorItemBgSelectedHorizontal", "horizontalItemSelectedBg"], ["colorActiveBarWidth", "activeBarWidth"], ["colorActiveBarHeight", "activeBarHeight"], ["colorActiveBarBorderSize", "activeBarBorderWidth"], ["colorItemBgSelected", "itemSelectedBg"]],
    // Dropdown will handle menu style self. We do not need to handle this.
    injectStyle: r,
    unitless: {
      groupTitleLineHeight: !0
    }
  })(e, t);
};
var aN = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const oN = /* @__PURE__ */ br((e, t) => {
  var r, n;
  const a = v.useContext(Qs), o = a || {}, {
    getPrefixCls: i,
    getPopupContainer: s,
    direction: l,
    menu: u
  } = v.useContext(mt), c = i(), {
    prefixCls: d,
    className: m,
    style: h,
    theme: p = "light",
    expandIcon: f,
    _internalDisableMenuItemTitleTooltip: g,
    inlineCollapsed: b,
    siderCollapsed: C,
    items: y,
    children: E,
    rootClassName: D,
    mode: S,
    selectable: x,
    onClick: $,
    overflowedIndicatorPopupClassName: O
  } = e, A = aN(e, ["prefixCls", "className", "style", "theme", "expandIcon", "_internalDisableMenuItemTitleTooltip", "inlineCollapsed", "siderCollapsed", "items", "children", "rootClassName", "mode", "selectable", "onClick", "overflowedIndicatorPopupClassName"]), j = Cr(A, ["collapsedWidth"]), N = XR(y) || E;
  if (process.env.NODE_ENV !== "production") {
    const H = Wt("Menu");
    process.env.NODE_ENV !== "production" && H(!("inlineCollapsed" in e && S !== "inline"), "usage", "`inlineCollapsed` should only be used when `mode` is inline."), process.env.NODE_ENV !== "production" && H(!(e.siderCollapsed !== void 0 && "inlineCollapsed" in e), "usage", "`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead."), H.deprecated("items" in e && !E, "children", "items");
  }
  (r = o.validator) === null || r === void 0 || r.call(o, {
    mode: S
  });
  const B = Rr(function() {
    var H;
    $ == null || $.apply(void 0, arguments), (H = o.onClick) === null || H === void 0 || H.call(o);
  }), P = o.mode || S, R = x ?? o.selectable, T = v.useMemo(() => C !== void 0 ? C : b, [b, C]), F = {
    horizontal: {
      motionName: `${c}-slide-up`
    },
    inline: Ec(c),
    other: {
      motionName: `${c}-zoom-big`
    }
  }, I = i("menu", d || o.prefixCls), k = qn(I), [L, W, U] = nN(I, k, !a), Z = ne(`${I}-${p}`, u == null ? void 0 : u.className, m);
  let M;
  if (typeof f == "function")
    M = f;
  else if (f === null || f === !1)
    M = null;
  else if (o.expandIcon === null || o.expandIcon === !1)
    M = null;
  else {
    const H = f ?? o.expandIcon;
    M = sn(H, {
      className: ne(`${I}-submenu-expand-icon`, Ln(H) ? (n = H.props) === null || n === void 0 ? void 0 : n.className : "")
    });
  }
  const V = v.useMemo(() => ({
    prefixCls: I,
    inlineCollapsed: T || !1,
    direction: l,
    firstLevel: !0,
    theme: p,
    mode: P,
    disableMenuItemTitleTooltip: g
  }), [I, T, l, g, p]);
  return L(/* @__PURE__ */ v.createElement(Qs.Provider, {
    value: null
  }, /* @__PURE__ */ v.createElement(Zs.Provider, {
    value: V
  }, /* @__PURE__ */ v.createElement(Li, Object.assign({
    getPopupContainer: s,
    overflowedIndicator: /* @__PURE__ */ v.createElement(Fb, null),
    overflowedIndicatorPopupClassName: ne(I, `${I}-${p}`, O),
    mode: P,
    selectable: R,
    onClick: B
  }, j, {
    inlineCollapsed: T,
    style: Object.assign(Object.assign({}, u == null ? void 0 : u.style), h),
    className: Z,
    prefixCls: I,
    direction: l,
    defaultMotions: F,
    expandIcon: M,
    ref: t,
    rootClassName: ne(D, W, o.rootClassName, U, k)
  }), N))));
}), iN = oN, Io = /* @__PURE__ */ br((e, t) => {
  const r = ze(null), n = v.useContext(ed);
  return Ia(t, () => ({
    menu: r.current,
    focus: (a) => {
      var o;
      (o = r.current) === null || o === void 0 || o.focus(a);
    }
  })), /* @__PURE__ */ v.createElement(iN, Object.assign({
    ref: r
  }, e, n));
});
Io.Item = Rb;
Io.SubMenu = Nb;
Io.Divider = Pb;
Io.ItemGroup = Dl;
process.env.NODE_ENV !== "production" && (Io.displayName = "Menu");
const sN = Io, lN = (e) => {
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
}, uN = (e) => {
  const {
    componentCls: t,
    menuCls: r,
    zIndexPopup: n,
    dropdownArrowDistance: a,
    sizePopupArrow: o,
    antCls: i,
    iconCls: s,
    motionDurationMid: l,
    paddingBlock: u,
    fontSize: c,
    dropdownEdgeChildPadding: d,
    colorTextDisabled: m,
    fontSizeIcon: h,
    controlPaddingHorizontal: p,
    colorBgElevated: f
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign({}, yn(e)), {
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
            fontSize: h
          }
        },
        [`${t}-wrap`]: {
          position: "relative",
          [`${i}-btn > ${s}-down`]: {
            fontSize: h
          },
          [`${s}-down::before`]: {
            transition: `transform ${l}`
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
          animationName: U0
        },
        [`&${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-topLeft,
          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-topLeft,
          &${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-top,
          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-top,
          &${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-topRight,
          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-topRight`]: {
          animationName: X0
        },
        [`&${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottomLeft,
          &${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottom,
          &${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottomRight`]: {
          animationName: G0
        },
        [`&${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-topLeft,
          &${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-top,
          &${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-topRight`]: {
          animationName: Y0
        }
      })
    },
    // =============================================================
    // ==                        Arrow style                      ==
    // =============================================================
    fb(e, f, {
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
        }, fc(e)), {
          [`${r}-item-group-title`]: {
            padding: `${we(u)} ${we(p)}`,
            color: e.colorTextDescription,
            transition: `all ${l}`
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
              transition: `all ${l}`,
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
            padding: `${we(u)} ${we(p)}`,
            color: e.colorText,
            fontWeight: "normal",
            fontSize: c,
            lineHeight: e.lineHeight,
            cursor: "pointer",
            transition: `all ${l}`,
            borderRadius: e.borderRadiusSM,
            "&:hover, &-active": {
              backgroundColor: e.controlItemBgHover
            }
          }, fc(e)), {
            "&-selected": {
              color: e.colorPrimary,
              backgroundColor: e.controlItemBgActive,
              "&:hover, &-active": {
                backgroundColor: e.controlItemBgActiveHover
              }
            },
            "&-disabled": {
              color: m,
              cursor: "not-allowed",
              "&:hover": {
                color: m,
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
              margin: `${we(e.marginXXS)} 0`,
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
                fontSize: h,
                fontStyle: "normal"
              }
            }
          }),
          [`${r}-item-group-list`]: {
            margin: `0 ${we(e.marginXS)}`,
            padding: 0,
            listStyle: "none"
          },
          [`${r}-submenu-title`]: {
            paddingInlineEnd: e.calc(p).add(e.fontSizeSM).equal()
          },
          [`${r}-submenu-vertical`]: {
            position: "relative"
          },
          [`${r}-submenu${r}-submenu-disabled ${t}-menu-submenu-title`]: {
            [`&, ${t}-menu-submenu-arrow-icon`]: {
              color: m,
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
    [Gs(e, "slide-up"), Gs(e, "slide-down"), Lm(e, "move-up"), Lm(e, "move-down"), Wf(e, "zoom-big")]
  ];
}, cN = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 50,
  paddingBlock: (e.controlHeight - e.fontSize * e.lineHeight) / 2
}, Kf({
  contentRadius: e.borderRadiusLG,
  limitVerticalRadius: !0
})), ub(e)), fN = un("Dropdown", (e) => {
  const {
    marginXXS: t,
    sizePopupArrow: r,
    paddingXXS: n,
    componentCls: a
  } = e, o = tr(e, {
    menuCls: `${a}-menu`,
    dropdownArrowDistance: e.calc(r).div(2).add(t).equal(),
    dropdownEdgeChildPadding: n
  });
  return [uN(o), lN(o)];
}, cN), xl = (e) => {
  const {
    menu: t,
    arrow: r,
    prefixCls: n,
    children: a,
    trigger: o,
    disabled: i,
    dropdownRender: s,
    getPopupContainer: l,
    overlayClassName: u,
    rootClassName: c,
    overlayStyle: d,
    open: m,
    onOpenChange: h,
    // Deprecated
    visible: p,
    onVisibleChange: f,
    mouseEnterDelay: g = 0.15,
    mouseLeaveDelay: b = 0.1,
    autoAdjustOverflow: C = !0,
    placement: y = "",
    overlay: E,
    transitionName: D
  } = e, {
    getPopupContainer: S,
    getPrefixCls: x,
    direction: $,
    dropdown: O
  } = v.useContext(mt), A = Wt("Dropdown");
  process.env.NODE_ENV !== "production" && ([["visible", "open"], ["onVisibleChange", "onOpenChange"]].forEach((fe) => {
    let [G, le] = fe;
    A.deprecated(!(G in e), G, le);
  }), A.deprecated(!("overlay" in e), "overlay", "menu"));
  const j = v.useMemo(() => {
    const fe = x();
    return D !== void 0 ? D : y.includes("top") ? `${fe}-slide-down` : `${fe}-slide-up`;
  }, [x, y, D]), N = v.useMemo(() => y ? y.includes("Center") ? y.slice(0, y.indexOf("Center")) : y : $ === "rtl" ? "bottomRight" : "bottomLeft", [y, $]);
  if (process.env.NODE_ENV !== "production") {
    if (y.includes("Center")) {
      const fe = y.slice(0, y.indexOf("Center"));
      process.env.NODE_ENV !== "production" && A(!y.includes("Center"), "deprecated", `You are using '${y}' placement in Dropdown, which is deprecated. Try to use '${fe}' instead.`);
    }
    [["visible", "open"], ["onVisibleChange", "onOpenChange"]].forEach((fe) => {
      let [G, le] = fe;
      A.deprecated(!(G in e), G, le);
    });
  }
  const B = x("dropdown", n), P = qn(B), [R, T, F] = fN(B, P), [, I] = jr(), k = v.Children.only(a), L = sn(k, {
    className: ne(`${B}-trigger`, {
      [`${B}-rtl`]: $ === "rtl"
    }, k.props.className),
    disabled: i
  }), W = i ? [] : o;
  let U;
  W && W.includes("contextMenu") && (U = !0);
  const [Z, M] = qr(!1, {
    value: m ?? p
  }), V = Rr((fe) => {
    h == null || h(fe, {
      source: "trigger"
    }), f == null || f(fe), M(fe);
  }), H = ne(u, c, T, F, P, O == null ? void 0 : O.className, {
    [`${B}-rtl`]: $ === "rtl"
  }), q = db({
    arrowPointAtCenter: typeof r == "object" && r.pointAtCenter,
    autoAdjustOverflow: C,
    offset: I.marginXXS,
    arrowWidth: r ? I.sizePopupArrow : 0,
    borderRadius: I.borderRadius
  }), J = v.useCallback(() => {
    t != null && t.selectable && (t != null && t.multiple) || (h == null || h(!1, {
      source: "menu"
    }), M(!1));
  }, [t == null ? void 0 : t.selectable, t == null ? void 0 : t.multiple]), ee = () => {
    let fe;
    return t != null && t.items ? fe = /* @__PURE__ */ v.createElement(sN, Object.assign({}, t)) : typeof E == "function" ? fe = E() : fe = E, s && (fe = s(fe)), fe = v.Children.only(typeof fe == "string" ? /* @__PURE__ */ v.createElement("span", null, fe) : fe), /* @__PURE__ */ v.createElement(ZR, {
      prefixCls: `${B}-menu`,
      rootClassName: ne(F, P),
      expandIcon: /* @__PURE__ */ v.createElement("span", {
        className: `${B}-menu-submenu-arrow`
      }, /* @__PURE__ */ v.createElement(Mc, {
        className: `${B}-menu-submenu-arrow-icon`
      })),
      mode: "vertical",
      selectable: !1,
      onClick: J,
      validator: (G) => {
        let {
          mode: le
        } = G;
        process.env.NODE_ENV !== "production" && A(!le || le === "vertical", "usage", `mode="${le}" is not supported for Dropdown's Menu.`);
      }
    }, fe);
  }, [ce, ae] = Nf("Dropdown", d == null ? void 0 : d.zIndex);
  let me = /* @__PURE__ */ v.createElement(WP, Object.assign({
    alignPoint: U
  }, Cr(e, ["rootClassName"]), {
    mouseEnterDelay: g,
    mouseLeaveDelay: b,
    visible: Z,
    builtinPlacements: q,
    arrow: !!r,
    overlayClassName: H,
    prefixCls: B,
    getPopupContainer: l || S,
    transitionName: j,
    trigger: W,
    overlay: ee,
    placement: N,
    onVisibleChange: V,
    overlayStyle: Object.assign(Object.assign(Object.assign({}, O == null ? void 0 : O.style), d), {
      zIndex: ce
    })
  }), L);
  return ce && (me = /* @__PURE__ */ v.createElement(Rf.Provider, {
    value: ae
  }, me)), R(me);
};
function dN(e) {
  return Object.assign(Object.assign({}, e), {
    align: {
      overflow: {
        adjustX: !1,
        adjustY: !1
      }
    }
  });
}
const vN = _F(xl, "dropdown", (e) => e, dN), mN = (e) => /* @__PURE__ */ v.createElement(vN, Object.assign({}, e), /* @__PURE__ */ v.createElement("span", null));
xl._InternalPanelDoNotUseOrYouWillBeFired = mN;
process.env.NODE_ENV !== "production" && (xl.displayName = "Dropdown");
const Ib = xl;
var gN = ["prefixCls", "className", "style", "checked", "disabled", "defaultChecked", "type", "title", "onChange"], pN = /* @__PURE__ */ br(function(e, t) {
  var r, n = e.prefixCls, a = n === void 0 ? "rc-checkbox" : n, o = e.className, i = e.style, s = e.checked, l = e.disabled, u = e.defaultChecked, c = u === void 0 ? !1 : u, d = e.type, m = d === void 0 ? "checkbox" : d, h = e.title, p = e.onChange, f = ct(e, gN), g = ze(null), b = qr(c, {
    value: s
  }), C = ue(b, 2), y = C[0], E = C[1];
  Ia(t, function() {
    return {
      focus: function() {
        var $;
        ($ = g.current) === null || $ === void 0 || $.focus();
      },
      blur: function() {
        var $;
        ($ = g.current) === null || $ === void 0 || $.blur();
      },
      input: g.current
    };
  });
  var D = ne(a, o, (r = {}, K(r, "".concat(a, "-checked"), y), K(r, "".concat(a, "-disabled"), l), r)), S = function($) {
    l || ("checked" in e || E($.target.checked), p == null || p({
      target: Y(Y({}, e), {}, {
        type: m,
        checked: $.target.checked
      }),
      stopPropagation: function() {
        $.stopPropagation();
      },
      preventDefault: function() {
        $.preventDefault();
      },
      nativeEvent: $.nativeEvent
    }));
  };
  return /* @__PURE__ */ v.createElement("span", {
    className: D,
    title: h,
    style: i
  }, /* @__PURE__ */ v.createElement("input", _e({}, f, {
    className: "".concat(a, "-input"),
    ref: g,
    onChange: S,
    disabled: l,
    checked: !!y,
    type: m
  })), /* @__PURE__ */ v.createElement("span", {
    className: "".concat(a, "-inner")
  }));
});
function hN(e) {
  return tr(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const bN = (e) => {
  const {
    controlHeight: t,
    fontSize: r,
    lineHeight: n,
    lineWidth: a,
    controlHeightSM: o,
    controlHeightLG: i,
    fontSizeLG: s,
    lineHeightLG: l,
    paddingSM: u,
    controlPaddingHorizontalSM: c,
    controlPaddingHorizontal: d,
    colorFillAlter: m,
    colorPrimaryHover: h,
    colorPrimary: p,
    controlOutlineWidth: f,
    controlOutline: g,
    colorErrorOutline: b,
    colorWarningOutline: C,
    colorBgContainer: y
  } = e;
  return {
    paddingBlock: Math.max(Math.round((t - r * n) / 2 * 10) / 10 - a, 0),
    paddingBlockSM: Math.max(Math.round((o - r * n) / 2 * 10) / 10 - a, 0),
    paddingBlockLG: Math.ceil((i - s * l) / 2 * 10) / 10 - a,
    paddingInline: u - a,
    paddingInlineSM: c - a,
    paddingInlineLG: d - a,
    addonBg: m,
    activeBorderColor: p,
    hoverBorderColor: h,
    activeShadow: `0 0 0 ${f}px ${g}`,
    errorActiveShadow: `0 0 0 ${f}px ${b}`,
    warningActiveShadow: `0 0 0 ${f}px ${C}`,
    hoverBg: y,
    activeBg: y,
    inputFontSize: r,
    inputFontSizeLG: s,
    inputFontSizeSM: r
  };
}, yN = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), td = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "&:hover:not([disabled])": Object.assign({}, yN(tr(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), Tb = (e, t) => ({
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
}), lg = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Tb(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), CN = (e, t) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Tb(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.colorPrimaryHover,
    activeBorderColor: e.colorPrimary,
    activeShadow: e.activeShadow
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, td(e))
  }), lg(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), lg(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), ug = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      borderColor: t.addonBorderColor,
      color: t.addonColor
    }
  }
}), EN = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.addonBg,
        border: `${we(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    }
  }, ug(e, {
    status: "error",
    addonBorderColor: e.colorError,
    addonColor: e.colorErrorText
  })), ug(e, {
    status: "warning",
    addonBorderColor: e.colorWarning,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group-addon`]: Object.assign({}, td(e))
    }
  })
}), wN = (e, t) => ({
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
}), Mb = (e, t) => ({
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
}), cg = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Mb(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), SN = (e, t) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Mb(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.colorPrimary
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, td(e))
  }), cg(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    inputColor: e.colorErrorText,
    affixColor: e.colorError
  })), cg(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    inputColor: e.colorWarningText,
    affixColor: e.colorWarning
  })), t)
}), fg = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      background: t.addonBg,
      color: t.addonColor
    }
  }
}), DN = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.colorFillTertiary
      },
      [`${e.componentCls}-filled:not(:focus):not(:focus-within)`]: {
        "&:not(:first-child)": {
          borderInlineStart: `${we(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        },
        "&:not(:last-child)": {
          borderInlineEnd: `${we(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        }
      }
    }
  }, fg(e, {
    status: "error",
    addonBg: e.colorErrorBg,
    addonColor: e.colorErrorText
  })), fg(e, {
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
          borderInlineStart: `${we(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${we(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${we(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${we(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${we(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${we(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        }
      }
    }
  })
}), xN = (e) => ({
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
}), jb = (e) => {
  const {
    paddingBlockLG: t,
    lineHeightLG: r,
    borderRadiusLG: n,
    paddingInlineLG: a
  } = e;
  return {
    padding: `${we(t)} ${we(a)}`,
    fontSize: e.inputFontSizeLG,
    lineHeight: r,
    borderRadius: n
  };
}, _b = (e) => ({
  padding: `${we(e.paddingBlockSM)} ${we(e.paddingInlineSM)}`,
  fontSize: e.inputFontSizeSM,
  borderRadius: e.borderRadiusSM
}), Lb = (e) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${we(e.paddingBlock)} ${we(e.paddingInline)}`,
  color: e.colorText,
  fontSize: e.inputFontSize,
  lineHeight: e.lineHeight,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, xN(e.colorTextPlaceholder)), {
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
  "&-lg": Object.assign({}, jb(e)),
  "&-sm": Object.assign({}, _b(e)),
  // RTL
  "&-rtl": {
    direction: "rtl"
  },
  "&-textarea-rtl": {
    direction: "rtl"
  }
}), ON = (e) => {
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
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, jb(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, _b(e)),
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
        padding: `0 ${we(e.paddingInline)}`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.inputFontSize,
        textAlign: "center",
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${r}-select`]: {
          margin: `${we(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${we(e.calc(e.paddingInline).mul(-1).equal())}`,
          [`&${r}-select-single:not(${r}-select-customize-input):not(${r}-pagination-size-changer)`]: {
            [`${r}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${we(e.lineWidth)} ${e.lineType} transparent`,
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
          margin: `-9px ${we(e.calc(e.paddingInline).mul(-1).equal())}`,
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
    }, cc()), {
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
}, $N = (e) => {
  const {
    componentCls: t,
    controlHeightSM: r,
    lineWidth: n,
    calc: a
  } = e, i = a(r).sub(a(n).mul(2)).sub(16).div(2).equal();
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, yn(e)), Lb(e)), CN(e)), SN(e)), wN(e)), {
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
}, AN = (e) => {
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
        margin: `0 ${we(e.inputAffixPadding)}`
      }
    }
  };
}, BN = (e) => {
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
    [`${t}-affix-wrapper`]: Object.assign(Object.assign(Object.assign(Object.assign({}, Lb(e)), {
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
    }), AN(e)), {
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
}, FN = (e) => {
  const {
    componentCls: t,
    borderRadiusLG: r,
    borderRadiusSM: n
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, yn(e)), ON(e)), {
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
      }, EN(e)), DN(e)), {
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
}, PN = (e) => {
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
}, RN = (e) => {
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
}, NN = (e) => {
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
}, rd = un("Input", (e) => {
  const t = tr(e, hN(e));
  return [
    $N(t),
    RN(t),
    BN(t),
    FN(t),
    PN(t),
    NN(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    N0(t)
  ];
}, bN), IN = (e) => {
  const {
    checkboxCls: t
  } = e, r = `${t}-wrapper`;
  return [
    // ===================== Basic =====================
    {
      // Group
      [`${t}-group`]: Object.assign(Object.assign({}, yn(e)), {
        display: "inline-flex",
        flexWrap: "wrap",
        columnGap: e.marginXS,
        // Group > Grid
        [`> ${e.antCls}-row`]: {
          flex: 1
        }
      }),
      // Wrapper
      [r]: Object.assign(Object.assign({}, yn(e)), {
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
      [t]: Object.assign(Object.assign({}, yn(e)), {
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
          [`&:focus-visible + ${t}-inner`]: Object.assign({}, $f(e))
        },
        // Wrapper > Checkbox > inner
        [`${t}-inner`]: {
          boxSizing: "border-box",
          display: "block",
          width: e.checkboxSize,
          height: e.checkboxSize,
          direction: "ltr",
          backgroundColor: e.colorBgContainer,
          border: `${we(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
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
            border: `${we(e.lineWidthBold)} solid ${e.colorWhite}`,
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
function TN(e, t) {
  const r = tr(t, {
    checkboxCls: `.${e}`,
    checkboxSize: t.controlInteractiveSize
  });
  return [IN(r)];
}
const kb = un("Checkbox", (e, t) => {
  let {
    prefixCls: r
  } = t;
  return [TN(r, e)];
}), MN = /* @__PURE__ */ Q.createContext(null), zb = MN;
var jN = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const _N = (e, t) => {
  var r;
  const {
    prefixCls: n,
    className: a,
    rootClassName: o,
    children: i,
    indeterminate: s = !1,
    style: l,
    onMouseEnter: u,
    onMouseLeave: c,
    skipGroup: d = !1,
    disabled: m
  } = e, h = jN(e, ["prefixCls", "className", "rootClassName", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave", "skipGroup", "disabled"]), {
    getPrefixCls: p,
    direction: f,
    checkbox: g
  } = v.useContext(mt), b = v.useContext(zb), {
    isFormItemInput: C
  } = v.useContext(Ur), y = v.useContext(Fo), E = (r = (b == null ? void 0 : b.disabled) || m) !== null && r !== void 0 ? r : y, D = v.useRef(h.value);
  if (process.env.NODE_ENV !== "production") {
    const R = Wt("Checkbox");
    process.env.NODE_ENV !== "production" && R("checked" in h || !!b || !("value" in h), "usage", "`value` is not a valid prop, do you mean `checked`?");
  }
  v.useEffect(() => {
    b == null || b.registerValue(h.value);
  }, []), v.useEffect(() => {
    if (!d)
      return h.value !== D.current && (b == null || b.cancelValue(D.current), b == null || b.registerValue(h.value), D.current = h.value), () => b == null ? void 0 : b.cancelValue(h.value);
  }, [h.value]);
  const S = p("checkbox", n), x = qn(S), [$, O, A] = kb(S, x), j = Object.assign({}, h);
  b && !d && (j.onChange = function() {
    h.onChange && h.onChange.apply(h, arguments), b.toggleOption && b.toggleOption({
      label: i,
      value: h.value
    });
  }, j.name = b.name, j.checked = b.value.includes(h.value));
  const N = ne(`${S}-wrapper`, {
    [`${S}-rtl`]: f === "rtl",
    [`${S}-wrapper-checked`]: j.checked,
    [`${S}-wrapper-disabled`]: E,
    [`${S}-wrapper-in-form-item`]: C
  }, g == null ? void 0 : g.className, a, o, A, x, O), B = ne({
    [`${S}-indeterminate`]: s
  }, If, O), P = s ? "mixed" : void 0;
  return $(/* @__PURE__ */ v.createElement(D0, {
    component: "Checkbox",
    disabled: E
  }, /* @__PURE__ */ v.createElement("label", {
    className: N,
    style: Object.assign(Object.assign({}, g == null ? void 0 : g.style), l),
    onMouseEnter: u,
    onMouseLeave: c
  }, /* @__PURE__ */ v.createElement(pN, Object.assign({
    "aria-checked": P
  }, j, {
    prefixCls: S,
    className: B,
    disabled: E,
    ref: t
  })), i !== void 0 && /* @__PURE__ */ v.createElement("span", null, i))));
}, Vb = /* @__PURE__ */ v.forwardRef(_N);
process.env.NODE_ENV !== "production" && (Vb.displayName = "Checkbox");
const Hb = Vb;
var LN = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const kN = /* @__PURE__ */ v.forwardRef((e, t) => {
  const {
    defaultValue: r,
    children: n,
    options: a = [],
    prefixCls: o,
    className: i,
    rootClassName: s,
    style: l,
    onChange: u
  } = e, c = LN(e, ["defaultValue", "children", "options", "prefixCls", "className", "rootClassName", "style", "onChange"]), {
    getPrefixCls: d,
    direction: m
  } = v.useContext(mt), [h, p] = v.useState(c.value || r || []), [f, g] = v.useState([]);
  v.useEffect(() => {
    "value" in c && p(c.value || []);
  }, [c.value]);
  const b = v.useMemo(() => a.map((R) => typeof R == "string" || typeof R == "number" ? {
    label: R,
    value: R
  } : R), [a]), C = (R) => {
    g((T) => T.filter((F) => F !== R));
  }, y = (R) => {
    g((T) => [].concat(Oe(T), [R]));
  }, E = (R) => {
    const T = h.indexOf(R.value), F = Oe(h);
    T === -1 ? F.push(R.value) : F.splice(T, 1), "value" in c || p(F), u == null || u(F.filter((I) => f.includes(I)).sort((I, k) => {
      const L = b.findIndex((U) => U.value === I), W = b.findIndex((U) => U.value === k);
      return L - W;
    }));
  }, D = d("checkbox", o), S = `${D}-group`, x = qn(D), [$, O, A] = kb(D, x), j = Cr(c, ["value", "disabled"]), N = a.length ? b.map((R) => /* @__PURE__ */ v.createElement(Hb, {
    prefixCls: D,
    key: R.value.toString(),
    disabled: "disabled" in R ? R.disabled : c.disabled,
    value: R.value,
    checked: h.includes(R.value),
    onChange: R.onChange,
    className: `${S}-item`,
    style: R.style,
    title: R.title,
    id: R.id,
    required: R.required
  }, R.label)) : n, B = {
    toggleOption: E,
    value: h,
    disabled: c.disabled,
    name: c.name,
    // https://github.com/ant-design/ant-design/issues/16376
    registerValue: y,
    cancelValue: C
  }, P = ne(S, {
    [`${S}-rtl`]: m === "rtl"
  }, i, s, A, x, O);
  return $(/* @__PURE__ */ v.createElement("div", Object.assign({
    className: P,
    style: l
  }, j, {
    ref: t
  }), /* @__PURE__ */ v.createElement(zb.Provider, {
    value: B
  }, N)));
}), zN = kN, Ol = Hb;
Ol.Group = zN;
Ol.__ANT_CHECKBOX = !0;
process.env.NODE_ENV !== "production" && (Ol.displayName = "Checkbox");
const VN = Ol, HN = /* @__PURE__ */ _r({}), Wb = HN, WN = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // Grid system
    [t]: {
      display: "flex",
      flexFlow: "row wrap",
      minWidth: 0,
      "&::before, &::after": {
        display: "flex"
      },
      "&-no-wrap": {
        flexWrap: "nowrap"
      },
      // The origin of the X-axis
      "&-start": {
        justifyContent: "flex-start"
      },
      // The center of the X-axis
      "&-center": {
        justifyContent: "center"
      },
      // The opposite of the X-axis
      "&-end": {
        justifyContent: "flex-end"
      },
      "&-space-between": {
        justifyContent: "space-between"
      },
      "&-space-around": {
        justifyContent: "space-around"
      },
      "&-space-evenly": {
        justifyContent: "space-evenly"
      },
      // Align at the top
      "&-top": {
        alignItems: "flex-start"
      },
      // Align at the center
      "&-middle": {
        alignItems: "center"
      },
      "&-bottom": {
        alignItems: "flex-end"
      }
    }
  };
}, qN = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // Grid system
    [t]: {
      position: "relative",
      maxWidth: "100%",
      // Prevent columns from collapsing when empty
      minHeight: 1
    }
  };
}, KN = (e, t) => {
  const {
    componentCls: r,
    gridColumns: n
  } = e, a = {};
  for (let o = n; o >= 0; o--)
    o === 0 ? (a[`${r}${t}-${o}`] = {
      display: "none"
    }, a[`${r}-push-${o}`] = {
      insetInlineStart: "auto"
    }, a[`${r}-pull-${o}`] = {
      insetInlineEnd: "auto"
    }, a[`${r}${t}-push-${o}`] = {
      insetInlineStart: "auto"
    }, a[`${r}${t}-pull-${o}`] = {
      insetInlineEnd: "auto"
    }, a[`${r}${t}-offset-${o}`] = {
      marginInlineStart: 0
    }, a[`${r}${t}-order-${o}`] = {
      order: 0
    }) : (a[`${r}${t}-${o}`] = [
      // https://github.com/ant-design/ant-design/issues/44456
      // Form set `display: flex` on Col which will override `display: block`.
      // Let's get it from css variable to support override.
      {
        "--ant-display": "block",
        // Fallback to display if variable not support
        display: "block"
      },
      {
        display: "var(--ant-display)",
        flex: `0 0 ${o / n * 100}%`,
        maxWidth: `${o / n * 100}%`
      }
    ], a[`${r}${t}-push-${o}`] = {
      insetInlineStart: `${o / n * 100}%`
    }, a[`${r}${t}-pull-${o}`] = {
      insetInlineEnd: `${o / n * 100}%`
    }, a[`${r}${t}-offset-${o}`] = {
      marginInlineStart: `${o / n * 100}%`
    }, a[`${r}${t}-order-${o}`] = {
      order: o
    });
  return a;
}, Wc = (e, t) => KN(e, t), UN = (e, t, r) => ({
  [`@media (min-width: ${we(t)})`]: Object.assign({}, Wc(e, r))
}), GN = () => ({}), XN = () => ({}), YN = un("Grid", WN, GN), ZN = un("Grid", (e) => {
  const t = tr(e, {
    gridColumns: 24
    // Row is divided into 24 parts in Grid
  }), r = {
    "-sm": t.screenSMMin,
    "-md": t.screenMDMin,
    "-lg": t.screenLGMin,
    "-xl": t.screenXLMin,
    "-xxl": t.screenXXLMin
  };
  return [qN(t), Wc(t, ""), Wc(t, "-xs"), Object.keys(r).map((n) => UN(t, r[n], n)).reduce((n, a) => Object.assign(Object.assign({}, n), a), {})];
}, XN);
var QN = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function JN(e) {
  return typeof e == "number" ? `${e} ${e} auto` : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? `0 0 ${e}` : e;
}
const eI = ["xs", "sm", "md", "lg", "xl", "xxl"], qb = /* @__PURE__ */ v.forwardRef((e, t) => {
  const {
    getPrefixCls: r,
    direction: n
  } = v.useContext(mt), {
    gutter: a,
    wrap: o
  } = v.useContext(Wb), {
    prefixCls: i,
    span: s,
    order: l,
    offset: u,
    push: c,
    pull: d,
    className: m,
    children: h,
    flex: p,
    style: f
  } = e, g = QN(e, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]), b = r("col", i), [C, y, E] = ZN(b);
  let D = {};
  eI.forEach(($) => {
    let O = {};
    const A = e[$];
    typeof A == "number" ? O.span = A : typeof A == "object" && (O = A || {}), delete g[$], D = Object.assign(Object.assign({}, D), {
      [`${b}-${$}-${O.span}`]: O.span !== void 0,
      [`${b}-${$}-order-${O.order}`]: O.order || O.order === 0,
      [`${b}-${$}-offset-${O.offset}`]: O.offset || O.offset === 0,
      [`${b}-${$}-push-${O.push}`]: O.push || O.push === 0,
      [`${b}-${$}-pull-${O.pull}`]: O.pull || O.pull === 0,
      [`${b}-${$}-flex-${O.flex}`]: O.flex || O.flex === "auto",
      [`${b}-rtl`]: n === "rtl"
    });
  });
  const S = ne(b, {
    [`${b}-${s}`]: s !== void 0,
    [`${b}-order-${l}`]: l,
    [`${b}-offset-${u}`]: u,
    [`${b}-push-${c}`]: c,
    [`${b}-pull-${d}`]: d
  }, m, D, y, E), x = {};
  if (a && a[0] > 0) {
    const $ = a[0] / 2;
    x.paddingLeft = $, x.paddingRight = $;
  }
  return p && (x.flex = JN(p), o === !1 && !x.minWidth && (x.minWidth = 0)), C(/* @__PURE__ */ v.createElement("div", Object.assign({}, g, {
    style: Object.assign(Object.assign({}, x), f),
    className: S,
    ref: t
  }), h));
});
process.env.NODE_ENV !== "production" && (qb.displayName = "Col");
const Kb = qb;
var tI = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function dg(e, t) {
  const [r, n] = v.useState(typeof e == "string" ? e : ""), a = () => {
    if (typeof e == "string" && n(e), typeof e == "object")
      for (let o = 0; o < Ai.length; o++) {
        const i = Ai[o];
        if (!t[i])
          continue;
        const s = e[i];
        if (s !== void 0) {
          n(s);
          return;
        }
      }
  };
  return v.useEffect(() => {
    a();
  }, [JSON.stringify(e), t]), r;
}
const Ub = /* @__PURE__ */ v.forwardRef((e, t) => {
  const {
    prefixCls: r,
    justify: n,
    align: a,
    className: o,
    style: i,
    children: s,
    gutter: l = 0,
    wrap: u
  } = e, c = tI(e, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]), {
    getPrefixCls: d,
    direction: m
  } = v.useContext(mt), [h, p] = v.useState({
    xs: !0,
    sm: !0,
    md: !0,
    lg: !0,
    xl: !0,
    xxl: !0
  }), [f, g] = v.useState({
    xs: !1,
    sm: !1,
    md: !1,
    lg: !1,
    xl: !1,
    xxl: !1
  }), b = dg(a, f), C = dg(n, f), y = v.useRef(l), E = bP();
  v.useEffect(() => {
    const F = E.subscribe((I) => {
      g(I);
      const k = y.current || 0;
      (!Array.isArray(k) && typeof k == "object" || Array.isArray(k) && (typeof k[0] == "object" || typeof k[1] == "object")) && p(I);
    });
    return () => E.unsubscribe(F);
  }, []);
  const D = () => {
    const F = [void 0, void 0];
    return (Array.isArray(l) ? l : [l, void 0]).forEach((k, L) => {
      if (typeof k == "object")
        for (let W = 0; W < Ai.length; W++) {
          const U = Ai[W];
          if (h[U] && k[U] !== void 0) {
            F[L] = k[U];
            break;
          }
        }
      else
        F[L] = k;
    }), F;
  }, S = d("row", r), [x, $, O] = YN(S), A = D(), j = ne(S, {
    [`${S}-no-wrap`]: u === !1,
    [`${S}-${C}`]: C,
    [`${S}-${b}`]: b,
    [`${S}-rtl`]: m === "rtl"
  }, o, $, O), N = {}, B = A[0] != null && A[0] > 0 ? A[0] / -2 : void 0;
  B && (N.marginLeft = B, N.marginRight = B), [, N.rowGap] = A;
  const [P, R] = A, T = v.useMemo(() => ({
    gutter: [P, R],
    wrap: u
  }), [P, R, u]);
  return x(/* @__PURE__ */ v.createElement(Wb.Provider, {
    value: T
  }, /* @__PURE__ */ v.createElement("div", Object.assign({}, c, {
    className: j,
    style: Object.assign(Object.assign({}, N), i),
    ref: t
  }), s)));
});
process.env.NODE_ENV !== "production" && (Ub.displayName = "Row");
const rI = Ub;
function nI(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function aI(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function vg(e, t, r) {
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
function Js(e, t, r, n) {
  if (r) {
    var a = t;
    if (t.type === "click") {
      a = vg(t, e, ""), r(a);
      return;
    }
    if (e.type !== "file" && n !== void 0) {
      a = vg(t, e, n), r(a);
      return;
    }
    r(a);
  }
}
function oI(e, t) {
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
var Gb = function(t) {
  var r, n, a = t.inputElement, o = t.children, i = t.prefixCls, s = t.prefix, l = t.suffix, u = t.addonBefore, c = t.addonAfter, d = t.className, m = t.style, h = t.disabled, p = t.readOnly, f = t.focused, g = t.triggerFocus, b = t.allowClear, C = t.value, y = t.handleReset, E = t.hidden, D = t.classes, S = t.classNames, x = t.dataAttrs, $ = t.styles, O = t.components, A = o ?? a, j = (O == null ? void 0 : O.affixWrapper) || "span", N = (O == null ? void 0 : O.groupWrapper) || "span", B = (O == null ? void 0 : O.wrapper) || "span", P = (O == null ? void 0 : O.groupAddon) || "span", R = ze(null), T = function(G) {
    var le;
    (le = R.current) !== null && le !== void 0 && le.contains(G.target) && (g == null || g());
  }, F = aI(t), I = /* @__PURE__ */ My(A, {
    value: C,
    className: ne(A.props.className, !F && (S == null ? void 0 : S.variant)) || null
  });
  if (F) {
    var k, L = null;
    if (b) {
      var W, U = !h && !p && C, Z = "".concat(i, "-clear-icon"), M = ut(b) === "object" && b !== null && b !== void 0 && b.clearIcon ? b.clearIcon : "✖";
      L = /* @__PURE__ */ Q.createElement("span", {
        onClick: y,
        onMouseDown: function(G) {
          return G.preventDefault();
        },
        className: ne(Z, (W = {}, K(W, "".concat(Z, "-hidden"), !U), K(W, "".concat(Z, "-has-suffix"), !!l), W)),
        role: "button",
        tabIndex: -1
      }, M);
    }
    var V = "".concat(i, "-affix-wrapper"), H = ne(V, (k = {}, K(k, "".concat(i, "-disabled"), h), K(k, "".concat(V, "-disabled"), h), K(k, "".concat(V, "-focused"), f), K(k, "".concat(V, "-readonly"), p), K(k, "".concat(V, "-input-with-clear-btn"), l && b && C), k), D == null ? void 0 : D.affixWrapper, S == null ? void 0 : S.affixWrapper, S == null ? void 0 : S.variant), q = (l || b) && /* @__PURE__ */ Q.createElement("span", {
      className: ne("".concat(i, "-suffix"), S == null ? void 0 : S.suffix),
      style: $ == null ? void 0 : $.suffix
    }, L, l);
    I = /* @__PURE__ */ Q.createElement(j, _e({
      className: H,
      style: $ == null ? void 0 : $.affixWrapper,
      onClick: T
    }, x == null ? void 0 : x.affixWrapper, {
      ref: R
    }), s && /* @__PURE__ */ Q.createElement("span", {
      className: ne("".concat(i, "-prefix"), S == null ? void 0 : S.prefix),
      style: $ == null ? void 0 : $.prefix
    }, s), I, q);
  }
  if (nI(t)) {
    var J = "".concat(i, "-group"), ee = "".concat(J, "-addon"), ce = "".concat(J, "-wrapper"), ae = ne("".concat(i, "-wrapper"), J, D == null ? void 0 : D.wrapper, S == null ? void 0 : S.wrapper), me = ne(ce, K({}, "".concat(ce, "-disabled"), h), D == null ? void 0 : D.group, S == null ? void 0 : S.groupWrapper);
    I = /* @__PURE__ */ Q.createElement(N, {
      className: me
    }, /* @__PURE__ */ Q.createElement(B, {
      className: ae
    }, u && /* @__PURE__ */ Q.createElement(P, {
      className: ee
    }, u), I, c && /* @__PURE__ */ Q.createElement(P, {
      className: ee
    }, c)));
  }
  return /* @__PURE__ */ Q.cloneElement(I, {
    className: ne((r = I.props) === null || r === void 0 ? void 0 : r.className, d) || null,
    style: Y(Y({}, (n = I.props) === null || n === void 0 ? void 0 : n.style), m),
    hidden: E
  });
}, iI = ["show"];
function Xb(e, t) {
  return v.useMemo(function() {
    var r = {};
    t && (r.show = ut(t) === "object" && t.formatter ? t.formatter : !!t), r = Y(Y({}, r), e);
    var n = r, a = n.show, o = ct(n, iI);
    return Y(Y({}, o), {}, {
      show: !!a,
      showFormatter: typeof a == "function" ? a : void 0,
      strategy: o.strategy || function(i) {
        return i.length;
      }
    });
  }, [e, t]);
}
var sI = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"], lI = /* @__PURE__ */ br(function(e, t) {
  var r = e.autoComplete, n = e.onChange, a = e.onFocus, o = e.onBlur, i = e.onPressEnter, s = e.onKeyDown, l = e.prefixCls, u = l === void 0 ? "rc-input" : l, c = e.disabled, d = e.htmlSize, m = e.className, h = e.maxLength, p = e.suffix, f = e.showCount, g = e.count, b = e.type, C = b === void 0 ? "text" : b, y = e.classes, E = e.classNames, D = e.styles, S = e.onCompositionStart, x = e.onCompositionEnd, $ = ct(e, sI), O = Qt(!1), A = ue(O, 2), j = A[0], N = A[1], B = ze(!1), P = ze(null), R = function(se) {
    P.current && oI(P.current, se);
  }, T = qr(e.defaultValue, {
    value: e.value
  }), F = ue(T, 2), I = F[0], k = F[1], L = I == null ? "" : String(I), W = Qt(null), U = ue(W, 2), Z = U[0], M = U[1], V = Xb(g, f), H = V.max || h, q = V.strategy(L), J = !!H && q > H;
  Ia(t, function() {
    return {
      focus: R,
      blur: function() {
        var se;
        (se = P.current) === null || se === void 0 || se.blur();
      },
      setSelectionRange: function(se, ge, he) {
        var ye;
        (ye = P.current) === null || ye === void 0 || ye.setSelectionRange(se, ge, he);
      },
      select: function() {
        var se;
        (se = P.current) === null || se === void 0 || se.select();
      },
      input: P.current
    };
  }), At(function() {
    N(function(oe) {
      return oe && c ? !1 : oe;
    });
  }, [c]);
  var ee = function(se, ge, he) {
    var ye = ge;
    if (!B.current && V.exceedFormatter && V.max && V.strategy(ge) > V.max) {
      if (ye = V.exceedFormatter(ge, {
        max: V.max
      }), ge !== ye) {
        var Ne, $e;
        M([((Ne = P.current) === null || Ne === void 0 ? void 0 : Ne.selectionStart) || 0, (($e = P.current) === null || $e === void 0 ? void 0 : $e.selectionEnd) || 0]);
      }
    } else if (he.source === "compositionEnd")
      return;
    k(ye), P.current && Js(P.current, se, n, ye);
  };
  At(function() {
    if (Z) {
      var oe;
      (oe = P.current) === null || oe === void 0 || oe.setSelectionRange.apply(oe, Oe(Z));
    }
  }, [Z]);
  var ce = function(se) {
    ee(se, se.target.value, {
      source: "change"
    });
  }, ae = function(se) {
    B.current = !1, ee(se, se.currentTarget.value, {
      source: "compositionEnd"
    }), x == null || x(se);
  }, me = function(se) {
    i && se.key === "Enter" && i(se), s == null || s(se);
  }, fe = function(se) {
    N(!0), a == null || a(se);
  }, G = function(se) {
    N(!1), o == null || o(se);
  }, le = function(se) {
    k(""), R(), P.current && Js(P.current, se, n);
  }, Se = J && "".concat(u, "-out-of-range"), De = function() {
    var se = Cr(e, [
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
    return /* @__PURE__ */ Q.createElement("input", _e({
      autoComplete: r
    }, se, {
      onChange: ce,
      onFocus: fe,
      onBlur: G,
      onKeyDown: me,
      className: ne(u, K({}, "".concat(u, "-disabled"), c), E == null ? void 0 : E.input),
      style: D == null ? void 0 : D.input,
      ref: P,
      size: d,
      type: C,
      onCompositionStart: function(he) {
        B.current = !0, S == null || S(he);
      },
      onCompositionEnd: ae
    }));
  }, Ee = function() {
    var se = Number(H) > 0;
    if (p || V.show) {
      var ge = V.showFormatter ? V.showFormatter({
        value: L,
        count: q,
        maxLength: H
      }) : "".concat(q).concat(se ? " / ".concat(H) : "");
      return /* @__PURE__ */ Q.createElement(Q.Fragment, null, V.show && /* @__PURE__ */ Q.createElement("span", {
        className: ne("".concat(u, "-show-count-suffix"), K({}, "".concat(u, "-show-count-has-suffix"), !!p), E == null ? void 0 : E.count),
        style: Y({}, D == null ? void 0 : D.count)
      }, ge), p);
    }
    return null;
  };
  return /* @__PURE__ */ Q.createElement(Gb, _e({}, $, {
    prefixCls: u,
    className: ne(m, Se),
    handleReset: le,
    value: L,
    focused: j,
    triggerFocus: R,
    suffix: Ee(),
    disabled: c,
    classes: y,
    classNames: E,
    styles: D
  }), De());
});
const uI = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = Ct(mt), {
    prefixCls: n,
    className: a
  } = e, o = t("input-group", n), i = t("input"), [s, l] = rd(i), u = ne(o, {
    [`${o}-lg`]: e.size === "large",
    [`${o}-sm`]: e.size === "small",
    [`${o}-compact`]: e.compact,
    [`${o}-rtl`]: r === "rtl"
  }, l, a), c = Ct(Ur), d = Pt(() => Object.assign(Object.assign({}, c), {
    isFormItemInput: !1
  }), [c]);
  return process.env.NODE_ENV !== "production" && Wt("Input.Group").deprecated(!1, "Input.Group", "Space.Compact"), s(/* @__PURE__ */ v.createElement("span", {
    className: u,
    style: e.style,
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave,
    onFocus: e.onFocus,
    onBlur: e.onBlur
  }, /* @__PURE__ */ v.createElement(Ur.Provider, {
    value: d
  }, e.children)));
}, cI = uI;
function Yb(e, t) {
  const r = ze([]), n = () => {
    r.current.push(setTimeout(() => {
      var a, o, i, s;
      !((a = e.current) === null || a === void 0) && a.input && ((o = e.current) === null || o === void 0 ? void 0 : o.input.getAttribute("type")) === "password" && (!((i = e.current) === null || i === void 0) && i.input.hasAttribute("value")) && ((s = e.current) === null || s === void 0 || s.input.removeAttribute("value"));
    }));
  };
  return At(() => (t && n(), () => r.current.forEach((a) => {
    a && clearTimeout(a);
  })), []), n;
}
function fI(e) {
  return !!(e.prefix || e.suffix || e.allowClear || e.showCount);
}
const dI = (e) => {
  let t;
  return typeof e == "object" && (e != null && e.clearIcon) ? t = e : e && (t = {
    clearIcon: /* @__PURE__ */ Q.createElement(Pf, null)
  }), t;
};
var vI = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function mI(e, t) {
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
const gI = /* @__PURE__ */ br((e, t) => {
  var r;
  const {
    prefixCls: n,
    bordered: a = !0,
    status: o,
    size: i,
    disabled: s,
    onBlur: l,
    onFocus: u,
    suffix: c,
    allowClear: d,
    addonAfter: m,
    addonBefore: h,
    className: p,
    style: f,
    styles: g,
    rootClassName: b,
    onChange: C,
    classNames: y,
    variant: E
  } = e, D = vI(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames", "variant"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: G
    } = Wt("Input");
    G(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: S,
    direction: x,
    input: $
  } = Q.useContext(mt), O = S("input", n), A = ze(null), j = qn(O), [N, B, P] = rd(O, j), {
    compactSize: R,
    compactItemClassnames: T
  } = yl(O, x), F = Po((G) => {
    var le;
    return (le = i ?? R) !== null && le !== void 0 ? le : G;
  }), I = Q.useContext(Fo), k = s ?? I, {
    status: L,
    hasFeedback: W,
    feedbackIcon: U
  } = Ct(Ur), Z = ab(L, o), M = fI(e) || !!W, V = ze(M);
  if (process.env.NODE_ENV !== "production") {
    const G = Wt("Input");
    At(() => {
      var le;
      M && !V.current && process.env.NODE_ENV !== "production" && G(document.activeElement === ((le = A.current) === null || le === void 0 ? void 0 : le.input), "usage", "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"), V.current = M;
    }, [M]);
  }
  const H = Yb(A, !0), q = (G) => {
    H(), l == null || l(G);
  }, J = (G) => {
    H(), u == null || u(G);
  }, ee = (G) => {
    H(), C == null || C(G);
  }, ce = (W || c) && /* @__PURE__ */ Q.createElement(Q.Fragment, null, c, W && U), ae = dI(d), [me, fe] = ob(E, a);
  return N(/* @__PURE__ */ Q.createElement(lI, Object.assign({
    ref: Gr(t, A),
    prefixCls: O,
    autoComplete: $ == null ? void 0 : $.autoComplete
  }, D, {
    disabled: k,
    onBlur: q,
    onFocus: J,
    style: Object.assign(Object.assign({}, $ == null ? void 0 : $.style), f),
    styles: Object.assign(Object.assign({}, $ == null ? void 0 : $.styles), g),
    suffix: ce,
    allowClear: ae,
    className: ne(p, b, P, j, T, $ == null ? void 0 : $.className),
    onChange: ee,
    addonAfter: m && /* @__PURE__ */ Q.createElement(Ks, null, /* @__PURE__ */ Q.createElement(_m, {
      override: !0,
      status: !0
    }, m)),
    addonBefore: h && /* @__PURE__ */ Q.createElement(Ks, null, /* @__PURE__ */ Q.createElement(_m, {
      override: !0,
      status: !0
    }, h)),
    classNames: Object.assign(Object.assign(Object.assign({}, y), $ == null ? void 0 : $.classNames), {
      input: ne({
        [`${O}-sm`]: F === "small",
        [`${O}-lg`]: F === "large",
        [`${O}-rtl`]: x === "rtl"
      }, y == null ? void 0 : y.input, (r = $ == null ? void 0 : $.classNames) === null || r === void 0 ? void 0 : r.input, B),
      variant: ne({
        [`${O}-${me}`]: fe
      }, Tc(O, Z)),
      affixWrapper: ne({
        [`${O}-affix-wrapper-sm`]: F === "small",
        [`${O}-affix-wrapper-lg`]: F === "large",
        [`${O}-affix-wrapper-rtl`]: x === "rtl"
      }, B),
      wrapper: ne({
        [`${O}-group-rtl`]: x === "rtl"
      }, B),
      groupWrapper: ne({
        [`${O}-group-wrapper-sm`]: F === "small",
        [`${O}-group-wrapper-lg`]: F === "large",
        [`${O}-group-wrapper-rtl`]: x === "rtl",
        [`${O}-group-wrapper-${me}`]: fe
      }, Tc(`${O}-group-wrapper`, Z, W), B)
    })
  })));
}), nd = gI;
var pI = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { tag: "path", attrs: { d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, name: "eye-invisible", theme: "outlined" };
const hI = pI;
var bI = function(t, r) {
  return /* @__PURE__ */ v.createElement(vr, _e({}, t, {
    ref: r,
    icon: hI
  }));
}, Zb = /* @__PURE__ */ v.forwardRef(bI);
process.env.NODE_ENV !== "production" && (Zb.displayName = "EyeInvisibleOutlined");
const yI = Zb;
var CI = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, name: "eye", theme: "outlined" };
const EI = CI;
var wI = function(t, r) {
  return /* @__PURE__ */ v.createElement(vr, _e({}, t, {
    ref: r,
    icon: EI
  }));
}, Qb = /* @__PURE__ */ v.forwardRef(wI);
process.env.NODE_ENV !== "production" && (Qb.displayName = "EyeOutlined");
const SI = Qb;
var DI = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const xI = (e) => e ? /* @__PURE__ */ v.createElement(SI, null) : /* @__PURE__ */ v.createElement(yI, null), OI = {
  click: "onClick",
  hover: "onMouseOver"
}, Jb = /* @__PURE__ */ v.forwardRef((e, t) => {
  const {
    visibilityToggle: r = !0
  } = e, n = typeof r == "object" && r.visible !== void 0, [a, o] = Qt(() => n ? r.visible : !1), i = ze(null);
  v.useEffect(() => {
    n && o(r.visible);
  }, [n, r]);
  const s = Yb(i), l = () => {
    const {
      disabled: D
    } = e;
    D || (a && s(), o((S) => {
      var x;
      const $ = !S;
      return typeof r == "object" && ((x = r.onVisibleChange) === null || x === void 0 || x.call(r, $)), $;
    }));
  }, u = (D) => {
    const {
      action: S = "click",
      iconRender: x = xI
    } = e, $ = OI[S] || "", O = x(a), A = {
      [$]: l,
      className: `${D}-icon`,
      key: "passwordIcon",
      onMouseDown: (j) => {
        j.preventDefault();
      },
      onMouseUp: (j) => {
        j.preventDefault();
      }
    };
    return /* @__PURE__ */ v.cloneElement(/* @__PURE__ */ v.isValidElement(O) ? O : /* @__PURE__ */ v.createElement("span", null, O), A);
  }, {
    className: c,
    prefixCls: d,
    inputPrefixCls: m,
    size: h
  } = e, p = DI(e, ["className", "prefixCls", "inputPrefixCls", "size"]), {
    getPrefixCls: f
  } = v.useContext(mt), g = f("input", m), b = f("input-password", d), C = r && u(b), y = ne(b, c, {
    [`${b}-${h}`]: !!h
  }), E = Object.assign(Object.assign({}, Cr(p, ["suffix", "iconRender", "visibilityToggle"])), {
    type: a ? "text" : "password",
    className: y,
    prefixCls: g,
    suffix: C
  });
  return h && (E.size = h), /* @__PURE__ */ v.createElement(nd, Object.assign({
    ref: Gr(t, i)
  }, E));
});
process.env.NODE_ENV !== "production" && (Jb.displayName = "Input.Password");
const $I = Jb;
var AI = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const ey = /* @__PURE__ */ v.forwardRef((e, t) => {
  const {
    prefixCls: r,
    inputPrefixCls: n,
    className: a,
    size: o,
    suffix: i,
    enterButton: s = !1,
    addonAfter: l,
    loading: u,
    disabled: c,
    onSearch: d,
    onChange: m,
    onCompositionStart: h,
    onCompositionEnd: p
  } = e, f = AI(e, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd"]), {
    getPrefixCls: g,
    direction: b
  } = v.useContext(mt), C = v.useRef(!1), y = g("input-search", r), E = g("input", n), {
    compactSize: D
  } = yl(y, b), S = Po((L) => {
    var W;
    return (W = o ?? D) !== null && W !== void 0 ? W : L;
  }), x = v.useRef(null), $ = (L) => {
    L && L.target && L.type === "click" && d && d(L.target.value, L, {
      source: "clear"
    }), m && m(L);
  }, O = (L) => {
    var W;
    document.activeElement === ((W = x.current) === null || W === void 0 ? void 0 : W.input) && L.preventDefault();
  }, A = (L) => {
    var W, U;
    d && d((U = (W = x.current) === null || W === void 0 ? void 0 : W.input) === null || U === void 0 ? void 0 : U.value, L, {
      source: "input"
    });
  }, j = (L) => {
    C.current || u || A(L);
  }, N = typeof s == "boolean" ? /* @__PURE__ */ v.createElement(gP, null) : null, B = `${y}-button`;
  let P;
  const R = s || {}, T = R.type && R.type.__ANT_BUTTON === !0;
  T || R.type === "button" ? P = sn(R, Object.assign({
    onMouseDown: O,
    onClick: (L) => {
      var W, U;
      (U = (W = R == null ? void 0 : R.props) === null || W === void 0 ? void 0 : W.onClick) === null || U === void 0 || U.call(W, L), A(L);
    },
    key: "enterButton"
  }, T ? {
    className: B,
    size: S
  } : {})) : P = /* @__PURE__ */ v.createElement(xr, {
    className: B,
    type: s ? "primary" : void 0,
    size: S,
    disabled: c,
    key: "enterButton",
    onMouseDown: O,
    onClick: A,
    loading: u,
    icon: N
  }, s), l && (P = [P, sn(l, {
    key: "addonAfter"
  })]);
  const F = ne(y, {
    [`${y}-rtl`]: b === "rtl",
    [`${y}-${S}`]: !!S,
    [`${y}-with-button`]: !!s
  }, a), I = (L) => {
    C.current = !0, h == null || h(L);
  }, k = (L) => {
    C.current = !1, p == null || p(L);
  };
  return /* @__PURE__ */ v.createElement(nd, Object.assign({
    ref: Gr(x, t),
    onPressEnter: j
  }, f, {
    size: S,
    onCompositionStart: I,
    onCompositionEnd: k,
    prefixCls: E,
    addonAfter: P,
    suffix: i,
    onChange: $,
    className: F,
    disabled: c
  }));
});
process.env.NODE_ENV !== "production" && (ey.displayName = "Search");
const BI = ey;
var FI = `
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
`, PI = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], fu = {}, Vr;
function RI(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && fu[r])
    return fu[r];
  var n = window.getComputedStyle(e), a = n.getPropertyValue("box-sizing") || n.getPropertyValue("-moz-box-sizing") || n.getPropertyValue("-webkit-box-sizing"), o = parseFloat(n.getPropertyValue("padding-bottom")) + parseFloat(n.getPropertyValue("padding-top")), i = parseFloat(n.getPropertyValue("border-bottom-width")) + parseFloat(n.getPropertyValue("border-top-width")), s = PI.map(function(u) {
    return "".concat(u, ":").concat(n.getPropertyValue(u));
  }).join(";"), l = {
    sizingStyle: s,
    paddingSize: o,
    borderSize: i,
    boxSizing: a
  };
  return t && r && (fu[r] = l), l;
}
function NI(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  Vr || (Vr = document.createElement("textarea"), Vr.setAttribute("tab-index", "-1"), Vr.setAttribute("aria-hidden", "true"), document.body.appendChild(Vr)), e.getAttribute("wrap") ? Vr.setAttribute("wrap", e.getAttribute("wrap")) : Vr.removeAttribute("wrap");
  var a = RI(e, t), o = a.paddingSize, i = a.borderSize, s = a.boxSizing, l = a.sizingStyle;
  Vr.setAttribute("style", "".concat(l, ";").concat(FI)), Vr.value = e.value || e.placeholder || "";
  var u = void 0, c = void 0, d, m = Vr.scrollHeight;
  if (s === "border-box" ? m += i : s === "content-box" && (m -= o), r !== null || n !== null) {
    Vr.value = " ";
    var h = Vr.scrollHeight - o;
    r !== null && (u = h * r, s === "border-box" && (u = u + o + i), m = Math.max(u, m)), n !== null && (c = h * n, s === "border-box" && (c = c + o + i), d = m > c ? "" : "hidden", m = Math.min(c, m));
  }
  var p = {
    height: m,
    overflowY: d,
    resize: "none"
  };
  return u && (p.minHeight = u), c && (p.maxHeight = c), p;
}
var II = ["prefixCls", "onPressEnter", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"], du = 0, vu = 1, mu = 2, TI = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e, n = r.prefixCls;
  r.onPressEnter;
  var a = r.defaultValue, o = r.value, i = r.autoSize, s = r.onResize, l = r.className, u = r.style, c = r.disabled, d = r.onChange, m = r.onInternalAutoSize, h = ct(r, II), p = qr(a, {
    value: o,
    postState: function(V) {
      return V ?? "";
    }
  }), f = ue(p, 2), g = f[0], b = f[1], C = function(V) {
    b(V.target.value), d == null || d(V);
  }, y = v.useRef();
  v.useImperativeHandle(t, function() {
    return {
      textArea: y.current
    };
  });
  var E = v.useMemo(function() {
    return i && ut(i) === "object" ? [i.minRows, i.maxRows] : [];
  }, [i]), D = ue(E, 2), S = D[0], x = D[1], $ = !!i, O = function() {
    try {
      if (document.activeElement === y.current) {
        var V = y.current, H = V.selectionStart, q = V.selectionEnd, J = V.scrollTop;
        y.current.setSelectionRange(H, q), y.current.scrollTop = J;
      }
    } catch {
    }
  }, A = v.useState(mu), j = ue(A, 2), N = j[0], B = j[1], P = v.useState(), R = ue(P, 2), T = R[0], F = R[1], I = function() {
    B(du), process.env.NODE_ENV === "test" && (m == null || m());
  };
  jt(function() {
    $ && I();
  }, [o, S, x, $]), jt(function() {
    if (N === du)
      B(vu);
    else if (N === vu) {
      var M = NI(y.current, !1, S, x);
      B(mu), F(M);
    } else
      O();
  }, [N]);
  var k = v.useRef(), L = function() {
    Ht.cancel(k.current);
  }, W = function(V) {
    N === mu && (s == null || s(V), i && (L(), k.current = Ht(function() {
      I();
    })));
  };
  v.useEffect(function() {
    return L;
  }, []);
  var U = $ ? T : null, Z = Y(Y({}, u), U);
  return (N === du || N === vu) && (Z.overflowY = "hidden", Z.overflowX = "hidden"), /* @__PURE__ */ v.createElement(sa, {
    onResize: W,
    disabled: !(i || s)
  }, /* @__PURE__ */ v.createElement("textarea", _e({}, h, {
    ref: y,
    style: Z,
    className: ne(n, l, K({}, "".concat(n, "-disabled"), c)),
    disabled: c,
    value: g,
    onChange: C
  })));
}), MI = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize"], jI = /* @__PURE__ */ Q.forwardRef(function(e, t) {
  var r, n, a = e.defaultValue, o = e.value, i = e.onFocus, s = e.onBlur, l = e.onChange, u = e.allowClear, c = e.maxLength, d = e.onCompositionStart, m = e.onCompositionEnd, h = e.suffix, p = e.prefixCls, f = p === void 0 ? "rc-textarea" : p, g = e.showCount, b = e.count, C = e.className, y = e.style, E = e.disabled, D = e.hidden, S = e.classNames, x = e.styles, $ = e.onResize, O = ct(e, MI), A = qr(a, {
    value: o,
    defaultValue: a
  }), j = ue(A, 2), N = j[0], B = j[1], P = N == null ? "" : String(N), R = Q.useState(!1), T = ue(R, 2), F = T[0], I = T[1], k = Q.useRef(!1), L = Q.useState(null), W = ue(L, 2), U = W[0], Z = W[1], M = ze(null), V = function() {
    var xe;
    return (xe = M.current) === null || xe === void 0 ? void 0 : xe.textArea;
  }, H = function() {
    V().focus();
  };
  Ia(t, function() {
    return {
      resizableTextArea: M.current,
      focus: H,
      blur: function() {
        V().blur();
      }
    };
  }), At(function() {
    I(function(Le) {
      return !E && Le;
    });
  }, [E]);
  var q = Q.useState(null), J = ue(q, 2), ee = J[0], ce = J[1];
  Q.useEffect(function() {
    if (ee) {
      var Le;
      (Le = V()).setSelectionRange.apply(Le, Oe(ee));
    }
  }, [ee]);
  var ae = Xb(b, g), me = (r = ae.max) !== null && r !== void 0 ? r : c, fe = Number(me) > 0, G = ae.strategy(P), le = !!me && G > me, Se = function(xe, Ve) {
    var He = Ve;
    !k.current && ae.exceedFormatter && ae.max && ae.strategy(Ve) > ae.max && (He = ae.exceedFormatter(Ve, {
      max: ae.max
    }), Ve !== He && ce([V().selectionStart || 0, V().selectionEnd || 0])), B(He), Js(xe.currentTarget, xe, l, He);
  }, De = function(xe) {
    k.current = !0, d == null || d(xe);
  }, Ee = function(xe) {
    k.current = !1, Se(xe, xe.currentTarget.value), m == null || m(xe);
  }, oe = function(xe) {
    Se(xe, xe.target.value);
  }, se = function(xe) {
    var Ve = O.onPressEnter, He = O.onKeyDown;
    xe.key === "Enter" && Ve && Ve(xe), He == null || He(xe);
  }, ge = function(xe) {
    I(!0), i == null || i(xe);
  }, he = function(xe) {
    I(!1), s == null || s(xe);
  }, ye = function(xe) {
    B(""), H(), Js(V(), xe, l);
  }, Ne = h, $e;
  ae.show && (ae.showFormatter ? $e = ae.showFormatter({
    value: P,
    count: G,
    maxLength: me
  }) : $e = "".concat(G).concat(fe ? " / ".concat(me) : ""), Ne = /* @__PURE__ */ Q.createElement(Q.Fragment, null, Ne, /* @__PURE__ */ Q.createElement("span", {
    className: ne("".concat(f, "-data-count"), S == null ? void 0 : S.count),
    style: x == null ? void 0 : x.count
  }, $e)));
  var je = function(xe) {
    var Ve;
    $ == null || $(xe), (Ve = V()) !== null && Ve !== void 0 && Ve.style.height && Z(!0);
  }, Et = !O.autoSize && !g && !u;
  return /* @__PURE__ */ Q.createElement(Gb, {
    value: P,
    allowClear: u,
    handleReset: ye,
    suffix: Ne,
    prefixCls: f,
    classNames: Y(Y({}, S), {}, {
      affixWrapper: ne(S == null ? void 0 : S.affixWrapper, (n = {}, K(n, "".concat(f, "-show-count"), g), K(n, "".concat(f, "-textarea-allow-clear"), u), n))
    }),
    disabled: E,
    focused: F,
    className: ne(C, le && "".concat(f, "-out-of-range")),
    style: Y(Y({}, y), U && !Et ? {
      height: "auto"
    } : {}),
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof $e == "string" ? $e : void 0
      }
    },
    hidden: D
  }, /* @__PURE__ */ Q.createElement(TI, _e({}, O, {
    maxLength: c,
    onKeyDown: se,
    onChange: oe,
    onFocus: ge,
    onBlur: he,
    onCompositionStart: De,
    onCompositionEnd: Ee,
    className: ne(S == null ? void 0 : S.textarea),
    style: Y(Y({}, x == null ? void 0 : x.textarea), {}, {
      resize: y == null ? void 0 : y.resize
    }),
    disabled: E,
    prefixCls: f,
    onResize: je,
    ref: M
  })));
}), _I = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const LI = /* @__PURE__ */ br((e, t) => {
  var r;
  const {
    prefixCls: n,
    bordered: a = !0,
    size: o,
    disabled: i,
    status: s,
    allowClear: l,
    classNames: u,
    rootClassName: c,
    className: d,
    variant: m
  } = e, h = _I(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className", "variant"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: T
    } = Wt("TextArea");
    T(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: p,
    direction: f
  } = v.useContext(mt), g = Po(o), b = v.useContext(Fo), C = i ?? b, {
    status: y,
    hasFeedback: E,
    feedbackIcon: D
  } = v.useContext(Ur), S = ab(y, s), x = v.useRef(null);
  v.useImperativeHandle(t, () => {
    var T;
    return {
      resizableTextArea: (T = x.current) === null || T === void 0 ? void 0 : T.resizableTextArea,
      focus: (F) => {
        var I, k;
        mI((k = (I = x.current) === null || I === void 0 ? void 0 : I.resizableTextArea) === null || k === void 0 ? void 0 : k.textArea, F);
      },
      blur: () => {
        var F;
        return (F = x.current) === null || F === void 0 ? void 0 : F.blur();
      }
    };
  });
  const $ = p("input", n);
  let O;
  typeof l == "object" && (l != null && l.clearIcon) ? O = l : l && (O = {
    clearIcon: /* @__PURE__ */ v.createElement(Pf, null)
  });
  const A = qn($), [j, N, B] = rd($, A), [P, R] = ob(m, a);
  return j(/* @__PURE__ */ v.createElement(jI, Object.assign({}, h, {
    disabled: C,
    allowClear: O,
    className: ne(B, A, d, c),
    classNames: Object.assign(Object.assign({}, u), {
      textarea: ne({
        [`${$}-sm`]: g === "small",
        [`${$}-lg`]: g === "large"
      }, N, u == null ? void 0 : u.textarea),
      variant: ne({
        [`${$}-${P}`]: R
      }, Tc($, S)),
      affixWrapper: ne(`${$}-textarea-affix-wrapper`, {
        [`${$}-affix-wrapper-rtl`]: f === "rtl",
        [`${$}-affix-wrapper-sm`]: g === "small",
        [`${$}-affix-wrapper-lg`]: g === "large",
        [`${$}-textarea-show-count`]: e.showCount || ((r = e.count) === null || r === void 0 ? void 0 : r.show)
      }, N)
    }),
    prefixCls: $,
    suffix: E && /* @__PURE__ */ v.createElement("span", {
      className: `${$}-textarea-suffix`
    }, D),
    ref: x
  })));
}), ty = LI, To = nd;
process.env.NODE_ENV !== "production" && (To.displayName = "Input");
To.Group = cI;
To.Search = BI;
To.TextArea = ty;
To.Password = $I;
const Fs = To;
function mg(e) {
  return ["small", "middle", "large"].includes(e);
}
function gg(e) {
  return e ? typeof e == "number" && !Number.isNaN(e) : !1;
}
const ry = /* @__PURE__ */ Q.createContext({
  latestIndex: 0
}), kI = ry.Provider, zI = (e) => {
  let {
    className: t,
    index: r,
    children: n,
    split: a,
    style: o
  } = e;
  const {
    latestIndex: i
  } = v.useContext(ry);
  return n == null ? null : /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("div", {
    className: t,
    style: o
  }, n), r < i && a && /* @__PURE__ */ v.createElement("span", {
    className: `${t}-split`
  }, a));
}, VI = zI;
var HI = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const ny = /* @__PURE__ */ v.forwardRef((e, t) => {
  var r, n;
  const {
    getPrefixCls: a,
    space: o,
    direction: i
  } = v.useContext(mt), {
    size: s = (o == null ? void 0 : o.size) || "small",
    align: l,
    className: u,
    rootClassName: c,
    children: d,
    direction: m = "horizontal",
    prefixCls: h,
    split: p,
    style: f,
    wrap: g = !1,
    classNames: b,
    styles: C
  } = e, y = HI(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]), [E, D] = Array.isArray(s) ? s : [s, s], S = mg(D), x = mg(E), $ = gg(D), O = gg(E), A = on(d, {
    keepEmpty: !0
  }), j = l === void 0 && m === "horizontal" ? "center" : l, N = a("space", h), [B, P, R] = x0(N), T = ne(N, o == null ? void 0 : o.className, P, `${N}-${m}`, {
    [`${N}-rtl`]: i === "rtl",
    [`${N}-align-${j}`]: j,
    [`${N}-gap-row-${D}`]: S,
    [`${N}-gap-col-${E}`]: x
  }, u, c, R), F = ne(`${N}-item`, (r = b == null ? void 0 : b.item) !== null && r !== void 0 ? r : (n = o == null ? void 0 : o.classNames) === null || n === void 0 ? void 0 : n.item);
  let I = 0;
  const k = A.map((U, Z) => {
    var M, V;
    U != null && (I = Z);
    const H = U && U.key || `${F}-${Z}`;
    return /* @__PURE__ */ v.createElement(VI, {
      className: F,
      key: H,
      index: Z,
      split: p,
      style: (M = C == null ? void 0 : C.item) !== null && M !== void 0 ? M : (V = o == null ? void 0 : o.styles) === null || V === void 0 ? void 0 : V.item
    }, U);
  }), L = v.useMemo(() => ({
    latestIndex: I
  }), [I]);
  if (A.length === 0)
    return null;
  const W = {};
  return g && (W.flexWrap = "wrap"), !x && O && (W.columnGap = E), !S && $ && (W.rowGap = D), B(/* @__PURE__ */ v.createElement("div", Object.assign({
    ref: t,
    className: T,
    style: Object.assign(Object.assign(Object.assign({}, W), o == null ? void 0 : o.style), f)
  }, y), /* @__PURE__ */ v.createElement(kI, {
    value: L
  }, k)));
});
process.env.NODE_ENV !== "production" && (ny.displayName = "Space");
const ay = ny;
ay.Compact = BB;
const ad = ay;
var WI = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const oy = (e) => {
  const {
    getPopupContainer: t,
    getPrefixCls: r,
    direction: n
  } = v.useContext(mt), {
    prefixCls: a,
    type: o = "default",
    danger: i,
    disabled: s,
    loading: l,
    onClick: u,
    htmlType: c,
    children: d,
    className: m,
    menu: h,
    arrow: p,
    autoFocus: f,
    overlay: g,
    trigger: b,
    align: C,
    open: y,
    onOpenChange: E,
    placement: D,
    getPopupContainer: S,
    href: x,
    icon: $ = /* @__PURE__ */ v.createElement(Fb, null),
    title: O,
    buttonsRender: A = (J) => J,
    mouseEnterDelay: j,
    mouseLeaveDelay: N,
    overlayClassName: B,
    overlayStyle: P,
    destroyPopupOnHide: R,
    dropdownRender: T
  } = e, F = WI(e, ["prefixCls", "type", "danger", "disabled", "loading", "onClick", "htmlType", "children", "className", "menu", "arrow", "autoFocus", "overlay", "trigger", "align", "open", "onOpenChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide", "dropdownRender"]), I = r("dropdown", a), k = `${I}-button`, L = {
    menu: h,
    arrow: p,
    autoFocus: f,
    align: C,
    disabled: s,
    trigger: s ? [] : b,
    onOpenChange: E,
    getPopupContainer: S || t,
    mouseEnterDelay: j,
    mouseLeaveDelay: N,
    overlayClassName: B,
    overlayStyle: P,
    destroyPopupOnHide: R,
    dropdownRender: T
  }, {
    compactSize: W,
    compactItemClassnames: U
  } = yl(I, n), Z = ne(k, U, m);
  "overlay" in e && (L.overlay = g), "open" in e && (L.open = y), "placement" in e ? L.placement = D : L.placement = n === "rtl" ? "bottomLeft" : "bottomRight";
  const M = /* @__PURE__ */ v.createElement(xr, {
    type: o,
    danger: i,
    disabled: s,
    loading: l,
    onClick: u,
    htmlType: c,
    href: x,
    title: O
  }, d), V = /* @__PURE__ */ v.createElement(xr, {
    type: o,
    danger: i,
    icon: $
  }), [H, q] = A([M, V]);
  return /* @__PURE__ */ v.createElement(ad.Compact, Object.assign({
    className: Z,
    size: W,
    block: !0
  }, F), H, /* @__PURE__ */ v.createElement(Ib, Object.assign({}, L), q));
};
oy.__ANT_BUTTON = !0;
const qI = oy, iy = Ib;
iy.Button = qI;
const sy = iy;
function el(e) {
  const [t, r] = v.useState(e);
  return v.useEffect(() => {
    const n = setTimeout(() => {
      r(e);
    }, e.length ? 0 : 10);
    return () => {
      clearTimeout(n);
    };
  }, [e]), t;
}
const KI = (e) => {
  const {
    componentCls: t
  } = e, r = `${t}-show-help`, n = `${t}-show-help-item`;
  return {
    [r]: {
      // Explain holder
      transition: `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
      "&-appear, &-enter": {
        opacity: 0,
        "&-active": {
          opacity: 1
        }
      },
      "&-leave": {
        opacity: 1,
        "&-active": {
          opacity: 0
        }
      },
      // Explain
      [n]: {
        overflow: "hidden",
        transition: `height ${e.motionDurationSlow} ${e.motionEaseInOut},
                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},
                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,
        [`&${n}-appear, &${n}-enter`]: {
          transform: "translateY(-5px)",
          opacity: 0,
          "&-active": {
            transform: "translateY(0)",
            opacity: 1
          }
        },
        [`&${n}-leave-active`]: {
          transform: "translateY(-5px)"
        }
      }
    }
  };
}, UI = (e) => ({
  legend: {
    display: "block",
    width: "100%",
    marginBottom: e.marginLG,
    padding: 0,
    color: e.colorTextDescription,
    fontSize: e.fontSizeLG,
    lineHeight: "inherit",
    border: 0,
    borderBottom: `${we(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
  },
  'input[type="search"]': {
    boxSizing: "border-box"
  },
  // Position radios and checkboxes better
  'input[type="radio"], input[type="checkbox"]': {
    lineHeight: "normal"
  },
  'input[type="file"]': {
    display: "block"
  },
  // Make range inputs behave like textual form controls
  'input[type="range"]': {
    display: "block",
    width: "100%"
  },
  // Make multiple select elements height not fixed
  "select[multiple], select[size]": {
    height: "auto"
  },
  // Focus for file, radio, and checkbox
  "input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus": {
    outline: 0,
    boxShadow: `0 0 0 ${we(e.controlOutlineWidth)} ${e.controlOutline}`
  },
  // Adjust output element
  output: {
    display: "block",
    paddingTop: 15,
    color: e.colorText,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight
  }
}), pg = (e, t) => {
  const {
    formItemCls: r
  } = e;
  return {
    [r]: {
      [`${r}-label > label`]: {
        height: t
      },
      [`${r}-control-input`]: {
        minHeight: t
      }
    }
  };
}, GI = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [e.componentCls]: Object.assign(Object.assign(Object.assign({}, yn(e)), UI(e)), {
      [`${t}-text`]: {
        display: "inline-block",
        paddingInlineEnd: e.paddingSM
      },
      // ================================================================
      // =                             Size                             =
      // ================================================================
      "&-small": Object.assign({}, pg(e, e.controlHeightSM)),
      "&-large": Object.assign({}, pg(e, e.controlHeightLG))
    })
  };
}, XI = (e) => {
  const {
    formItemCls: t,
    iconCls: r,
    componentCls: n,
    rootPrefixCls: a,
    labelRequiredMarkColor: o,
    labelColor: i,
    labelFontSize: s,
    labelHeight: l,
    labelColonMarginInlineStart: u,
    labelColonMarginInlineEnd: c,
    itemMarginBottom: d
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, yn(e)), {
      marginBottom: d,
      verticalAlign: "top",
      "&-with-help": {
        transition: "none"
      },
      [`&-hidden,
        &-hidden.${a}-row`]: {
        // https://github.com/ant-design/ant-design/issues/26141
        display: "none"
      },
      "&-has-warning": {
        [`${t}-split`]: {
          color: e.colorError
        }
      },
      "&-has-error": {
        [`${t}-split`]: {
          color: e.colorWarning
        }
      },
      // ==============================================================
      // =                            Label                           =
      // ==============================================================
      [`${t}-label`]: {
        flexGrow: 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textAlign: "end",
        verticalAlign: "middle",
        "&-left": {
          textAlign: "start"
        },
        "&-wrap": {
          overflow: "unset",
          lineHeight: e.lineHeight,
          whiteSpace: "unset"
        },
        "> label": {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          maxWidth: "100%",
          height: l,
          color: i,
          fontSize: s,
          [`> ${r}`]: {
            fontSize: e.fontSize,
            verticalAlign: "top"
          },
          // Required mark
          [`&${t}-required:not(${t}-required-mark-optional)::before`]: {
            display: "inline-block",
            marginInlineEnd: e.marginXXS,
            color: o,
            fontSize: e.fontSize,
            fontFamily: "SimSun, sans-serif",
            lineHeight: 1,
            content: '"*"',
            [`${n}-hide-required-mark &`]: {
              display: "none"
            }
          },
          // Optional mark
          [`${t}-optional`]: {
            display: "inline-block",
            marginInlineStart: e.marginXXS,
            color: e.colorTextDescription,
            [`${n}-hide-required-mark &`]: {
              display: "none"
            }
          },
          // Optional mark
          [`${t}-tooltip`]: {
            color: e.colorTextDescription,
            cursor: "help",
            writingMode: "horizontal-tb",
            marginInlineStart: e.marginXXS
          },
          "&::after": {
            content: '":"',
            position: "relative",
            marginBlock: 0,
            marginInlineStart: u,
            marginInlineEnd: c
          },
          [`&${t}-no-colon::after`]: {
            content: '"\\a0"'
          }
        }
      },
      // ==============================================================
      // =                            Input                           =
      // ==============================================================
      [`${t}-control`]: {
        "--ant-display": "flex",
        flexDirection: "column",
        flexGrow: 1,
        [`&:first-child:not([class^="'${a}-col-'"]):not([class*="' ${a}-col-'"])`]: {
          width: "100%"
        },
        "&-input": {
          position: "relative",
          display: "flex",
          alignItems: "center",
          minHeight: e.controlHeight,
          "&-content": {
            flex: "auto",
            maxWidth: "100%"
          }
        }
      },
      // ==============================================================
      // =                           Explain                          =
      // ==============================================================
      [t]: {
        "&-explain, &-extra": {
          clear: "both",
          color: e.colorTextDescription,
          fontSize: e.fontSize,
          lineHeight: e.lineHeight
        },
        "&-explain-connected": {
          width: "100%"
        },
        "&-extra": {
          minHeight: e.controlHeightSM,
          transition: `color ${e.motionDurationMid} ${e.motionEaseOut}`
          // sync input color transition
        },
        "&-explain": {
          "&-error": {
            color: e.colorError
          },
          "&-warning": {
            color: e.colorWarning
          }
        }
      },
      [`&-with-help ${t}-explain`]: {
        height: "auto",
        opacity: 1
      },
      // ==============================================================
      // =                        Feedback Icon                       =
      // ==============================================================
      [`${t}-feedback-icon`]: {
        fontSize: e.fontSize,
        textAlign: "center",
        visibility: "visible",
        animationName: Hf,
        animationDuration: e.motionDurationMid,
        animationTimingFunction: e.motionEaseOutBack,
        pointerEvents: "none",
        "&-success": {
          color: e.colorSuccess
        },
        "&-error": {
          color: e.colorError
        },
        "&-warning": {
          color: e.colorWarning
        },
        "&-validating": {
          color: e.colorPrimary
        }
      }
    })
  };
}, YI = (e) => {
  const {
    componentCls: t,
    formItemCls: r
  } = e;
  return {
    [`${t}-horizontal`]: {
      [`${r}-label`]: {
        flexGrow: 0
      },
      [`${r}-control`]: {
        flex: "1 1 0",
        // https://github.com/ant-design/ant-design/issues/32777
        // https://github.com/ant-design/ant-design/issues/33773
        minWidth: 0
      },
      // Do not change this to `ant-col-24`! `-24` match all the responsive rules
      // https://github.com/ant-design/ant-design/issues/32980
      // https://github.com/ant-design/ant-design/issues/34903
      // https://github.com/ant-design/ant-design/issues/44538
      [`${r}-label[class$='-24'], ${r}-label[class*='-24 ']`]: {
        [`& + ${r}-control`]: {
          minWidth: "unset"
        }
      }
    }
  };
}, ZI = (e) => {
  const {
    componentCls: t,
    formItemCls: r
  } = e;
  return {
    [`${t}-inline`]: {
      display: "flex",
      flexWrap: "wrap",
      [r]: {
        flex: "none",
        marginInlineEnd: e.margin,
        marginBottom: 0,
        "&-row": {
          flexWrap: "nowrap"
        },
        [`> ${r}-label,
        > ${r}-control`]: {
          display: "inline-block",
          verticalAlign: "top"
        },
        [`> ${r}-label`]: {
          flex: "none"
        },
        [`${t}-text`]: {
          display: "inline-block"
        },
        [`${r}-has-feedback`]: {
          display: "inline-block"
        }
      }
    }
  };
}, io = (e) => ({
  padding: e.verticalLabelPadding,
  margin: e.verticalLabelMargin,
  whiteSpace: "initial",
  textAlign: "start",
  "> label": {
    margin: 0,
    "&::after": {
      // https://github.com/ant-design/ant-design/issues/43538
      visibility: "hidden"
    }
  }
}), QI = (e) => {
  const {
    componentCls: t,
    formItemCls: r,
    rootPrefixCls: n
  } = e;
  return {
    [`${r} ${r}-label`]: io(e),
    // ref: https://github.com/ant-design/ant-design/issues/45122
    [`${t}:not(${t}-inline)`]: {
      [r]: {
        flexWrap: "wrap",
        [`${r}-label, ${r}-control`]: {
          // When developer pass `xs: { span }`,
          // It should follow the `xs` screen config
          // ref: https://github.com/ant-design/ant-design/issues/44386
          [`&:not([class*=" ${n}-col-xs"])`]: {
            flex: "0 0 100%",
            maxWidth: "100%"
          }
        }
      }
    }
  };
}, JI = (e) => {
  const {
    componentCls: t,
    formItemCls: r,
    rootPrefixCls: n
  } = e;
  return {
    [`${t}-vertical`]: {
      [r]: {
        "&-row": {
          flexDirection: "column"
        },
        "&-label > label": {
          height: "auto"
        },
        [`${t}-item-control`]: {
          width: "100%"
        }
      }
    },
    [`${t}-vertical ${r}-label,
      .${n}-col-24${r}-label,
      .${n}-col-xl-24${r}-label`]: io(e),
    [`@media (max-width: ${we(e.screenXSMax)})`]: [QI(e), {
      [t]: {
        [`.${n}-col-xs-24${r}-label`]: io(e)
      }
    }],
    [`@media (max-width: ${we(e.screenSMMax)})`]: {
      [t]: {
        [`.${n}-col-sm-24${r}-label`]: io(e)
      }
    },
    [`@media (max-width: ${we(e.screenMDMax)})`]: {
      [t]: {
        [`.${n}-col-md-24${r}-label`]: io(e)
      }
    },
    [`@media (max-width: ${we(e.screenLGMax)})`]: {
      [t]: {
        [`.${n}-col-lg-24${r}-label`]: io(e)
      }
    }
  };
}, eT = (e) => ({
  labelRequiredMarkColor: e.colorError,
  labelColor: e.colorTextHeading,
  labelFontSize: e.fontSize,
  labelHeight: e.controlHeight,
  labelColonMarginInlineStart: e.marginXXS / 2,
  labelColonMarginInlineEnd: e.marginXS,
  itemMarginBottom: e.marginLG,
  verticalLabelPadding: `0 0 ${e.paddingXS}px`,
  verticalLabelMargin: 0
}), ly = (e, t) => tr(e, {
  formItemCls: `${e.componentCls}-item`,
  rootPrefixCls: t
}), od = un("Form", (e, t) => {
  let {
    rootPrefixCls: r
  } = t;
  const n = ly(e, r);
  return [GI(n), XI(n), KI(n), YI(n), ZI(n), JI(n), Z0(n), Hf];
}, eT, {
  // Let From style before the Grid
  // ref https://github.com/ant-design/ant-design/issues/44386
  order: -1e3
}), hg = [];
function gu(e, t, r) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  return {
    key: typeof e == "string" ? e : `${t}-${n}`,
    error: e,
    errorStatus: r
  };
}
const tT = (e) => {
  let {
    help: t,
    helpStatus: r,
    errors: n = hg,
    warnings: a = hg,
    className: o,
    fieldId: i,
    onVisibleChanged: s
  } = e;
  const {
    prefixCls: l
  } = v.useContext(zf), u = `${l}-item-explain`, c = qn(l), [d, m, h] = od(l, c), p = Pt(() => Ec(l), [l]), f = el(n), g = el(a), b = v.useMemo(() => t != null ? [gu(t, "help", r)] : [].concat(Oe(f.map((y, E) => gu(y, "error", "error", E))), Oe(g.map((y, E) => gu(y, "warning", "warning", E)))), [t, r, f, g]), C = {};
  return i && (C.id = `${i}_help`), d(/* @__PURE__ */ v.createElement(Ma, {
    motionDeadline: p.motionDeadline,
    motionName: `${l}-show-help`,
    visible: !!b.length,
    onVisibleChanged: s
  }, (y) => {
    const {
      className: E,
      style: D
    } = y;
    return /* @__PURE__ */ v.createElement("div", Object.assign({}, C, {
      className: ne(u, E, h, c, o, m),
      style: D,
      role: "alert"
    }), /* @__PURE__ */ v.createElement(yA, Object.assign({
      keys: b
    }, Ec(l), {
      motionName: `${l}-show-help-item`,
      component: !1
    }), (S) => {
      const {
        key: x,
        error: $,
        errorStatus: O,
        className: A,
        style: j
      } = S;
      return /* @__PURE__ */ v.createElement("div", {
        key: x,
        className: ne(A, {
          [`${u}-${O}`]: O
        }),
        style: j
      }, $);
    }));
  }));
}, uy = tT, rT = ["parentNode"], nT = "form_item";
function ui(e) {
  return e === void 0 || e === !1 ? [] : Array.isArray(e) ? e : [e];
}
function cy(e, t) {
  if (!e.length)
    return;
  const r = e.join("_");
  return t ? `${t}_${r}` : rT.includes(r) ? `${nT}_${r}` : r;
}
function fy(e, t, r, n, a, o) {
  let i = n;
  return o !== void 0 ? i = o : r.validating ? i = "validating" : e.length ? i = "error" : t.length ? i = "warning" : (r.touched || a && r.validated) && (i = "success"), i;
}
function bg(e) {
  return ui(e).join("_");
}
function dy(e) {
  const [t] = kf(), r = v.useRef({}), n = v.useMemo(() => e ?? Object.assign(Object.assign({}, t), {
    __INTERNAL__: {
      itemRef: (a) => (o) => {
        const i = bg(a);
        o ? r.current[i] = o : delete r.current[i];
      }
    },
    scrollToField: function(a) {
      let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const i = ui(a), s = cy(i, n.__INTERNAL__.name), l = s ? document.getElementById(s) : null;
      l && ep(l, Object.assign({
        scrollMode: "if-needed",
        block: "nearest"
      }, o));
    },
    getFieldInstance: (a) => {
      const o = bg(a);
      return r.current[o];
    }
  }), [e, t]);
  return [n];
}
const fs = {};
function aT(e) {
  let {
    name: t
  } = e;
  const r = Wt("Form");
  At(() => {
    if (t)
      return fs[t] = (fs[t] || 0) + 1, process.env.NODE_ENV !== "production" && r(fs[t] <= 1, "usage", "There exist multiple Form with same `name`."), () => {
        fs[t] -= 1;
      };
  }, [t]);
}
var oT = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const iT = (e, t) => {
  const r = v.useContext(Fo), {
    getPrefixCls: n,
    direction: a,
    form: o
  } = v.useContext(mt), {
    prefixCls: i,
    className: s,
    rootClassName: l,
    size: u,
    disabled: c = r,
    form: d,
    colon: m,
    labelAlign: h,
    labelWrap: p,
    labelCol: f,
    wrapperCol: g,
    hideRequiredMark: b,
    layout: C = "horizontal",
    scrollToFirstError: y,
    requiredMark: E,
    onFinishFailed: D,
    name: S,
    style: x,
    feedbackIcons: $,
    variant: O
  } = e, A = oT(e, ["prefixCls", "className", "rootClassName", "size", "disabled", "form", "colon", "labelAlign", "labelWrap", "labelCol", "wrapperCol", "hideRequiredMark", "layout", "scrollToFirstError", "requiredMark", "onFinishFailed", "name", "style", "feedbackIcons", "variant"]), j = Po(u), N = v.useContext(xh);
  process.env.NODE_ENV !== "production" && aT(e);
  const B = Pt(() => E !== void 0 ? E : b ? !1 : o && o.requiredMark !== void 0 ? o.requiredMark : !0, [b, E, o]), P = m ?? (o == null ? void 0 : o.colon), R = n("form", i), T = qn(R), [F, I, k] = od(R, T), L = ne(R, `${R}-${C}`, {
    [`${R}-hide-required-mark`]: B === !1,
    [`${R}-rtl`]: a === "rtl",
    [`${R}-${j}`]: j
  }, k, T, I, o == null ? void 0 : o.className, s, l), [W] = dy(d), {
    __INTERNAL__: U
  } = W;
  U.name = S;
  const Z = Pt(() => ({
    name: S,
    labelAlign: h,
    labelCol: f,
    labelWrap: p,
    wrapperCol: g,
    vertical: C === "vertical",
    colon: P,
    requiredMark: B,
    itemRef: U.itemRef,
    form: W,
    feedbackIcons: $
  }), [S, h, f, g, C, P, B, W, $]);
  v.useImperativeHandle(t, () => W);
  const M = (H, q) => {
    if (H) {
      let J = {
        block: "nearest"
      };
      typeof H == "object" && (J = H), W.scrollToField(q, J);
    }
  }, V = (H) => {
    if (D == null || D(H), H.errorFields.length) {
      const q = H.errorFields[0].name;
      if (y !== void 0) {
        M(y, q);
        return;
      }
      o && o.scrollToFirstError !== void 0 && M(o.scrollToFirstError, q);
    }
  };
  return F(/* @__PURE__ */ v.createElement(K0.Provider, {
    value: O
  }, /* @__PURE__ */ v.createElement(Lh, {
    disabled: c
  }, /* @__PURE__ */ v.createElement(Ti.Provider, {
    value: j
  }, /* @__PURE__ */ v.createElement(q0, {
    // This is not list in API, we pass with spread
    validateMessages: N
  }, /* @__PURE__ */ v.createElement(zn.Provider, {
    value: Z
  }, /* @__PURE__ */ v.createElement(Ro, Object.assign({
    id: S
  }, A, {
    name: S,
    onFinishFailed: V,
    form: W,
    style: Object.assign(Object.assign({}, o == null ? void 0 : o.style), x),
    className: L
  }))))))));
}, vy = /* @__PURE__ */ v.forwardRef(iT);
process.env.NODE_ENV !== "production" && (vy.displayName = "Form");
function sT(e) {
  if (typeof e == "function")
    return e;
  const t = on(e);
  return t.length <= 1 ? t[0] : t;
}
const my = () => {
  const {
    status: e,
    errors: t = [],
    warnings: r = []
  } = Ct(Ur);
  if (process.env.NODE_ENV !== "production") {
    const n = Wt("Form.Item");
    process.env.NODE_ENV !== "production" && n(e !== void 0, "usage", "Form.Item.useStatus should be used under Form.Item component. For more information: https://u.ant.design/form-item-usestatus");
  }
  return {
    status: e,
    errors: t,
    warnings: r
  };
};
my.Context = Ur;
const lT = my;
function uT(e) {
  const [t, r] = v.useState(e), n = ze(null), a = ze([]), o = ze(!1);
  v.useEffect(() => (o.current = !1, () => {
    o.current = !0, Ht.cancel(n.current), n.current = null;
  }), []);
  function i(s) {
    o.current || (n.current === null && (a.current = [], n.current = Ht(() => {
      n.current = null, r((l) => {
        let u = l;
        return a.current.forEach((c) => {
          u = c(u);
        }), u;
      });
    })), a.current.push(s));
  }
  return [t, i];
}
function cT() {
  const {
    itemRef: e
  } = v.useContext(zn), t = v.useRef({});
  function r(n, a) {
    const o = a && typeof a == "object" && a.ref, i = n.join("_");
    return (t.current.name !== i || t.current.originRef !== o) && (t.current.name = i, t.current.originRef = o, t.current.ref = Gr(e(n), o)), t.current.ref;
  }
  return r;
}
const fT = (e) => {
  const {
    formItemCls: t
  } = e;
  return {
    "@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)": {
      // Fallback for IE, safe to remove we not support it anymore
      [`${t}-control`]: {
        display: "flex"
      }
    }
  };
}, dT = Zh(["Form", "item-item"], (e, t) => {
  let {
    rootPrefixCls: r
  } = t;
  const n = ly(e, r);
  return [fT(n)];
}), vT = (e) => {
  const {
    prefixCls: t,
    status: r,
    wrapperCol: n,
    children: a,
    errors: o,
    warnings: i,
    _internalItemRender: s,
    extra: l,
    help: u,
    fieldId: c,
    marginBottom: d,
    onErrorVisibleChanged: m
  } = e, h = `${t}-item`, p = v.useContext(zn), f = n || p.wrapperCol || {}, g = ne(`${h}-control`, f.className), b = v.useMemo(() => Object.assign({}, p), [p]);
  delete b.labelCol, delete b.wrapperCol;
  const C = /* @__PURE__ */ v.createElement("div", {
    className: `${h}-control-input`
  }, /* @__PURE__ */ v.createElement("div", {
    className: `${h}-control-input-content`
  }, a)), y = v.useMemo(() => ({
    prefixCls: t,
    status: r
  }), [t, r]), E = d !== null || o.length || i.length ? /* @__PURE__ */ v.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "nowrap"
    }
  }, /* @__PURE__ */ v.createElement(zf.Provider, {
    value: y
  }, /* @__PURE__ */ v.createElement(uy, {
    fieldId: c,
    errors: o,
    warnings: i,
    help: u,
    helpStatus: r,
    className: `${h}-explain-connected`,
    onVisibleChanged: m
  })), !!d && /* @__PURE__ */ v.createElement("div", {
    style: {
      width: 0,
      height: d
    }
  })) : null, D = {};
  c && (D.id = `${c}_extra`);
  const S = l ? /* @__PURE__ */ v.createElement("div", Object.assign({}, D, {
    className: `${h}-extra`
  }), l) : null, x = s && s.mark === "pro_table_render" && s.render ? s.render(e, {
    input: C,
    errorList: E,
    extra: S
  }) : /* @__PURE__ */ v.createElement(v.Fragment, null, C, E, S);
  return /* @__PURE__ */ v.createElement(zn.Provider, {
    value: b
  }, /* @__PURE__ */ v.createElement(Kb, Object.assign({}, f, {
    className: g
  }), x), /* @__PURE__ */ v.createElement(dT, {
    prefixCls: t
  }));
}, mT = vT;
var gT = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" } }] }, name: "question-circle", theme: "outlined" };
const pT = gT;
var hT = function(t, r) {
  return /* @__PURE__ */ v.createElement(vr, _e({}, t, {
    ref: r,
    icon: pT
  }));
}, gy = /* @__PURE__ */ v.forwardRef(hT);
process.env.NODE_ENV !== "production" && (gy.displayName = "QuestionCircleOutlined");
const bT = gy;
var yT = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function CT(e) {
  return e ? typeof e == "object" && !/* @__PURE__ */ v.isValidElement(e) ? e : {
    title: e
  } : null;
}
const ET = (e) => {
  let {
    prefixCls: t,
    label: r,
    htmlFor: n,
    labelCol: a,
    labelAlign: o,
    colon: i,
    required: s,
    requiredMark: l,
    tooltip: u
  } = e;
  var c;
  const [d] = $h("Form"), {
    vertical: m,
    labelAlign: h,
    labelCol: p,
    labelWrap: f,
    colon: g
  } = v.useContext(zn);
  if (!r)
    return null;
  const b = a || p || {}, C = o || h, y = `${t}-item-label`, E = ne(y, C === "left" && `${y}-left`, b.className, {
    [`${y}-wrap`]: !!f
  });
  let D = r;
  const S = i === !0 || g !== !1 && i !== !1;
  S && !m && typeof r == "string" && r.trim() !== "" && (D = r.replace(/[:|：]\s*$/, ""));
  const $ = CT(u);
  if ($) {
    const {
      icon: N = /* @__PURE__ */ v.createElement(bT, null)
    } = $, B = yT($, ["icon"]), P = /* @__PURE__ */ v.createElement(Oo, Object.assign({}, B), /* @__PURE__ */ v.cloneElement(N, {
      className: `${t}-item-tooltip`,
      title: "",
      onClick: (R) => {
        R.preventDefault();
      },
      tabIndex: null
    }));
    D = /* @__PURE__ */ v.createElement(v.Fragment, null, D, P);
  }
  const O = l === "optional", A = typeof l == "function";
  A ? D = l(D, {
    required: !!s
  }) : O && !s && (D = /* @__PURE__ */ v.createElement(v.Fragment, null, D, /* @__PURE__ */ v.createElement("span", {
    className: `${t}-item-optional`,
    title: ""
  }, (d == null ? void 0 : d.optional) || ((c = Ra.Form) === null || c === void 0 ? void 0 : c.optional))));
  const j = ne({
    [`${t}-item-required`]: s,
    [`${t}-item-required-mark-optional`]: O || A,
    [`${t}-item-no-colon`]: !S
  });
  return /* @__PURE__ */ v.createElement(Kb, Object.assign({}, b, {
    className: E
  }), /* @__PURE__ */ v.createElement("label", {
    htmlFor: n,
    className: j,
    title: typeof r == "string" ? r : ""
  }, D));
}, wT = ET, ST = {
  success: VA,
  warning: XA,
  error: Pf,
  validating: C0
};
function py(e) {
  let {
    children: t,
    errors: r,
    warnings: n,
    hasFeedback: a,
    validateStatus: o,
    prefixCls: i,
    meta: s,
    noStyle: l
  } = e;
  const u = `${i}-item`, {
    feedbackIcons: c
  } = v.useContext(zn), d = fy(r, n, s, null, !!a, o), {
    isFormItemInput: m,
    status: h,
    hasFeedback: p,
    feedbackIcon: f
  } = v.useContext(Ur), g = v.useMemo(() => {
    var b;
    let C;
    if (a) {
      const E = a !== !0 && a.icons || c, D = d && ((b = E == null ? void 0 : E({
        status: d,
        errors: r,
        warnings: n
      })) === null || b === void 0 ? void 0 : b[d]), S = d && ST[d];
      C = D !== !1 && S ? /* @__PURE__ */ v.createElement("span", {
        className: ne(`${u}-feedback-icon`, `${u}-feedback-icon-${d}`)
      }, D || /* @__PURE__ */ v.createElement(S, null)) : null;
    }
    const y = {
      status: d || "",
      errors: r,
      warnings: n,
      hasFeedback: !!a,
      feedbackIcon: C,
      isFormItemInput: !0
    };
    return l && (y.status = (d ?? h) || "", y.isFormItemInput = m, y.hasFeedback = !!(a ?? p), y.feedbackIcon = a !== void 0 ? y.feedbackIcon : f), y;
  }, [d, a, l, m, h]);
  return /* @__PURE__ */ v.createElement(Ur.Provider, {
    value: g
  }, t);
}
var DT = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function xT(e) {
  const {
    prefixCls: t,
    className: r,
    rootClassName: n,
    style: a,
    help: o,
    errors: i,
    warnings: s,
    validateStatus: l,
    meta: u,
    hasFeedback: c,
    hidden: d,
    children: m,
    fieldId: h,
    required: p,
    isRequired: f,
    onSubItemMetaChange: g
  } = e, b = DT(e, ["prefixCls", "className", "rootClassName", "style", "help", "errors", "warnings", "validateStatus", "meta", "hasFeedback", "hidden", "children", "fieldId", "required", "isRequired", "onSubItemMetaChange"]), C = `${t}-item`, {
    requiredMark: y
  } = v.useContext(zn), E = v.useRef(null), D = el(i), S = el(s), x = o != null, $ = !!(x || i.length || s.length), O = !!E.current && hl(E.current), [A, j] = v.useState(null);
  jt(() => {
    if ($ && E.current) {
      const T = getComputedStyle(E.current);
      j(parseInt(T.marginBottom, 10));
    }
  }, [$, O]);
  const N = (T) => {
    T || j(null);
  }, P = function() {
    let T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const F = T ? D : u.errors, I = T ? S : u.warnings;
    return fy(F, I, u, "", !!c, l);
  }(), R = ne(C, r, n, {
    [`${C}-with-help`]: x || D.length || S.length,
    // Status
    [`${C}-has-feedback`]: P && c,
    [`${C}-has-success`]: P === "success",
    [`${C}-has-warning`]: P === "warning",
    [`${C}-has-error`]: P === "error",
    [`${C}-is-validating`]: P === "validating",
    [`${C}-hidden`]: d
  });
  return /* @__PURE__ */ v.createElement("div", {
    className: R,
    style: a,
    ref: E
  }, /* @__PURE__ */ v.createElement(rI, Object.assign({
    className: `${C}-row`
  }, Cr(b, [
    "_internalItemRender",
    "colon",
    "dependencies",
    "extra",
    "fieldKey",
    "getValueFromEvent",
    "getValueProps",
    "htmlFor",
    "id",
    // It is deprecated because `htmlFor` is its replacement.
    "initialValue",
    "isListField",
    "label",
    "labelAlign",
    "labelCol",
    "labelWrap",
    "messageVariables",
    "name",
    "normalize",
    "noStyle",
    "preserve",
    "requiredMark",
    "rules",
    "shouldUpdate",
    "trigger",
    "tooltip",
    "validateFirst",
    "validateTrigger",
    "valuePropName",
    "wrapperCol",
    "validateDebounce"
  ])), /* @__PURE__ */ v.createElement(wT, Object.assign({
    htmlFor: h
  }, e, {
    requiredMark: y,
    required: p ?? f,
    prefixCls: t
  })), /* @__PURE__ */ v.createElement(mT, Object.assign({}, e, u, {
    errors: D,
    warnings: S,
    prefixCls: t,
    status: P,
    help: o,
    marginBottom: A,
    onErrorVisibleChanged: N
  }), /* @__PURE__ */ v.createElement(W0.Provider, {
    value: g
  }, /* @__PURE__ */ v.createElement(py, {
    prefixCls: t,
    meta: u,
    errors: u.errors,
    warnings: u.warnings,
    hasFeedback: c,
    // Already calculated
    validateStatus: P
  }, m)))), !!A && /* @__PURE__ */ v.createElement("div", {
    className: `${C}-margin-offset`,
    style: {
      marginBottom: -A
    }
  }));
}
const OT = "__SPLIT__";
function $T(e, t) {
  const r = Object.keys(e), n = Object.keys(t);
  return r.length === n.length && r.every((a) => {
    const o = e[a], i = t[a];
    return o === i || typeof o == "function" || typeof i == "function";
  });
}
const AT = /* @__PURE__ */ v.memo((e) => {
  let {
    children: t
  } = e;
  return t;
}, (e, t) => $T(e.control, t.control) && e.update === t.update && e.childProps.length === t.childProps.length && e.childProps.every((r, n) => r === t.childProps[n]));
function yg() {
  return {
    errors: [],
    warnings: [],
    touched: !1,
    validating: !1,
    name: [],
    validated: !1
  };
}
function BT(e) {
  const {
    name: t,
    noStyle: r,
    className: n,
    dependencies: a,
    prefixCls: o,
    shouldUpdate: i,
    rules: s,
    children: l,
    required: u,
    label: c,
    messageVariables: d,
    trigger: m = "onChange",
    validateTrigger: h,
    hidden: p,
    help: f
  } = e, {
    getPrefixCls: g
  } = v.useContext(mt), {
    name: b
  } = v.useContext(zn), C = sT(l), y = typeof C == "function", E = v.useContext(W0), {
    validateTrigger: D
  } = v.useContext(Na), S = h !== void 0 ? h : D, x = t != null, $ = g("form", o), O = qn($), [A, j, N] = od($, O), B = Wt("Form.Item");
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && B(t !== null, "usage", "`null` is passed as `name` property");
  const P = v.useContext(xi), R = v.useRef(), [T, F] = uT({}), [I, k] = $a(() => yg()), L = (q) => {
    const J = P == null ? void 0 : P.getKey(q.name);
    if (k(q.destroy ? yg() : q, !0), r && f !== !1 && E) {
      let ee = q.name;
      if (q.destroy)
        ee = R.current || ee;
      else if (J !== void 0) {
        const [ce, ae] = J;
        ee = [ce].concat(Oe(ae)), R.current = ee;
      }
      E(q, ee);
    }
  }, W = (q, J) => {
    F((ee) => {
      const ce = Object.assign({}, ee), me = [].concat(Oe(q.name.slice(0, -1)), Oe(J)).join(OT);
      return q.destroy ? delete ce[me] : ce[me] = q, ce;
    });
  }, [U, Z] = v.useMemo(() => {
    const q = Oe(I.errors), J = Oe(I.warnings);
    return Object.values(T).forEach((ee) => {
      q.push.apply(q, Oe(ee.errors || [])), J.push.apply(J, Oe(ee.warnings || []));
    }), [q, J];
  }, [T, I.errors, I.warnings]), M = cT();
  function V(q, J, ee) {
    return r && !p ? /* @__PURE__ */ v.createElement(py, {
      prefixCls: $,
      hasFeedback: e.hasFeedback,
      validateStatus: e.validateStatus,
      meta: I,
      errors: U,
      warnings: Z,
      noStyle: !0
    }, q) : /* @__PURE__ */ v.createElement(xT, Object.assign({
      key: "row"
    }, e, {
      className: ne(n, N, O, j),
      prefixCls: $,
      fieldId: J,
      isRequired: ee,
      errors: U,
      warnings: Z,
      meta: I,
      onSubItemMetaChange: W
    }), q);
  }
  if (!x && !y && !a)
    return A(V(C));
  let H = {};
  return typeof c == "string" ? H.label = c : t && (H.label = String(t)), d && (H = Object.assign(Object.assign({}, H), d)), A(/* @__PURE__ */ v.createElement(Lf, Object.assign({}, e, {
    messageVariables: H,
    trigger: m,
    validateTrigger: S,
    onMetaChange: L
  }), (q, J, ee) => {
    const ce = ui(t).length && J ? J.name : [], ae = cy(ce, b), me = u !== void 0 ? u : !!(s && s.some((le) => {
      if (le && typeof le == "object" && le.required && !le.warningOnly)
        return !0;
      if (typeof le == "function") {
        const Se = le(ee);
        return Se && Se.required && !Se.warningOnly;
      }
      return !1;
    })), fe = Object.assign({}, q);
    let G = null;
    if (process.env.NODE_ENV !== "production" && B(!(i && a), "usage", "`shouldUpdate` and `dependencies` shouldn't be used together. See https://u.ant.design/form-deps."), Array.isArray(C) && x)
      process.env.NODE_ENV !== "production" && B(!1, "usage", "A `Form.Item` with a `name` prop must have a single child element. For information on how to render more complex form items, see https://u.ant.design/complex-form-item."), G = C;
    else if (y && (!(i || a) || x))
      process.env.NODE_ENV !== "production" && B(!!(i || a), "usage", "A `Form.Item` with a render function must have either `shouldUpdate` or `dependencies`."), process.env.NODE_ENV !== "production" && B(!x, "usage", "A `Form.Item` with a render function cannot be a field, and thus cannot have a `name` prop.");
    else if (a && !y && !x)
      process.env.NODE_ENV !== "production" && B(!1, "usage", "Must set `name` or use a render function when `dependencies` is set.");
    else if (Ln(C)) {
      process.env.NODE_ENV !== "production" && B(C.props.defaultValue === void 0, "usage", "`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.");
      const le = Object.assign(Object.assign({}, C.props), fe);
      if (le.id || (le.id = ae), f || U.length > 0 || Z.length > 0 || e.extra) {
        const Ee = [];
        (f || U.length > 0) && Ee.push(`${ae}_help`), e.extra && Ee.push(`${ae}_extra`), le["aria-describedby"] = Ee.join(" ");
      }
      U.length > 0 && (le["aria-invalid"] = "true"), me && (le["aria-required"] = "true"), Wn(C) && (le.ref = M(ce, C)), new Set([].concat(Oe(ui(m)), Oe(ui(S)))).forEach((Ee) => {
        le[Ee] = function() {
          for (var oe, se, ge, he, ye, Ne = arguments.length, $e = new Array(Ne), je = 0; je < Ne; je++)
            $e[je] = arguments[je];
          (ge = fe[Ee]) === null || ge === void 0 || (oe = ge).call.apply(oe, [fe].concat($e)), (ye = (he = C.props)[Ee]) === null || ye === void 0 || (se = ye).call.apply(se, [he].concat($e));
        };
      });
      const De = [le["aria-required"], le["aria-invalid"], le["aria-describedby"]];
      G = /* @__PURE__ */ v.createElement(AT, {
        control: fe,
        update: C,
        childProps: De
      }, sn(C, le));
    } else
      y && (i || a) && !x ? G = C(ee) : (process.env.NODE_ENV !== "production" && B(!ce.length, "usage", "`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead."), G = C);
    return V(G, ae, me);
  }));
}
const hy = BT;
hy.useStatus = lT;
const FT = hy;
var PT = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const RT = (e) => {
  var {
    prefixCls: t,
    children: r
  } = e, n = PT(e, ["prefixCls", "children"]);
  if (process.env.NODE_ENV !== "production") {
    const s = Wt("Form.List");
    process.env.NODE_ENV !== "production" && s(typeof n.name == "number" || (Array.isArray(n.name) ? !!n.name.length : !!n.name), "usage", "Miss `name` prop.");
  }
  const {
    getPrefixCls: a
  } = v.useContext(mt), o = a("form", t), i = v.useMemo(() => ({
    prefixCls: o,
    status: "error"
  }), [o]);
  return /* @__PURE__ */ v.createElement(k0, Object.assign({}, n), (s, l, u) => /* @__PURE__ */ v.createElement(zf.Provider, {
    value: i
  }, r(s.map((c) => Object.assign(Object.assign({}, c), {
    fieldKey: c.key
  })), l, {
    errors: u.errors,
    warnings: u.warnings
  })));
}, NT = RT;
function IT() {
  const {
    form: e
  } = Ct(zn);
  return e;
}
const dr = vy;
dr.Item = FT;
dr.List = NT;
dr.ErrorList = uy;
dr.useForm = dy;
dr.useFormInstance = IT;
dr.useWatch = H0;
dr.Provider = q0;
dr.create = () => {
  process.env.NODE_ENV !== "production" && Ni(!1, "Form", "antd v4 removed `Form.create`. Please remove or use `@ant-design/compatible` instead.");
};
const TT = (e) => {
  const t = e != null && e.algorithm ? Ei(e.algorithm) : Ei(Ii), r = Object.assign(Object.assign({}, xo), e == null ? void 0 : e.token);
  return ih(r, {
    override: e == null ? void 0 : e.token
  }, t, Of);
}, MT = TT;
function jT(e) {
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
const _T = (e, t) => {
  const r = t ?? Ii(e), n = r.fontSizeSM, a = r.controlHeight - 4;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, r), jT(t ?? e)), Th(n)), {
    // controlHeight
    controlHeight: a
  }), Nh(Object.assign(Object.assign({}, r), {
    controlHeight: a
  })));
}, LT = _T, Bn = (e, t) => new sr(e).setAlpha(t).toRgbString(), no = (e, t) => new sr(e).lighten(t).toHexString(), kT = (e) => {
  const t = _n(e, {
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
}, zT = (e, t) => {
  const r = e || "#000", n = t || "#fff";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: Bn(n, 0.85),
    colorTextSecondary: Bn(n, 0.65),
    colorTextTertiary: Bn(n, 0.45),
    colorTextQuaternary: Bn(n, 0.25),
    colorFill: Bn(n, 0.18),
    colorFillSecondary: Bn(n, 0.12),
    colorFillTertiary: Bn(n, 0.08),
    colorFillQuaternary: Bn(n, 0.04),
    colorBgElevated: no(r, 12),
    colorBgContainer: no(r, 8),
    colorBgLayout: no(r, 0),
    colorBgSpotlight: no(r, 26),
    colorBgBlur: Bn(n, 0.04),
    colorBorder: no(r, 26),
    colorBorderSecondary: no(r, 19)
  };
}, VT = (e, t) => {
  const r = Object.keys(xf).map((a) => {
    const o = _n(e[a], {
      theme: "dark"
    });
    return new Array(10).fill(1).reduce((i, s, l) => (i[`${a}-${l + 1}`] = o[l], i[`${a}${l + 1}`] = o[l], i), {});
  }).reduce((a, o) => (a = Object.assign(Object.assign({}, a), o), a), {}), n = t ?? Ii(e);
  return Object.assign(Object.assign(Object.assign({}, n), r), Ih(e, {
    generateColorPalettes: kT,
    generateNeutralColorPalettes: zT
  }));
}, HT = VT;
function WT() {
  const [e, t, r] = jr();
  return {
    theme: e,
    token: t,
    hashId: r
  };
}
const id = {
  /** @private Test Usage. Do not use in production. */
  defaultConfig: Vs,
  /** Default seedToken */
  defaultSeed: Vs.token,
  useToken: WT,
  defaultAlgorithm: Ii,
  darkAlgorithm: HT,
  compactAlgorithm: LT,
  getDesignToken: MT
};
var qT = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const KT = {
  border: 0,
  background: "transparent",
  padding: 0,
  lineHeight: "inherit",
  display: "inline-block"
}, UT = /* @__PURE__ */ v.forwardRef((e, t) => {
  const r = (u) => {
    const {
      keyCode: c
    } = u;
    c === Fe.ENTER && u.preventDefault();
  }, n = (u) => {
    const {
      keyCode: c
    } = u, {
      onClick: d
    } = e;
    c === Fe.ENTER && d && d();
  }, {
    style: a,
    noStyle: o,
    disabled: i
  } = e, s = qT(e, ["style", "noStyle", "disabled"]);
  let l = {};
  return o || (l = Object.assign({}, KT)), i && (l.pointerEvents = "none"), l = Object.assign(Object.assign({}, l), a), /* @__PURE__ */ v.createElement("div", Object.assign({
    role: "button",
    tabIndex: 0,
    ref: t
  }, s, {
    onKeyDown: r,
    onKeyUp: n,
    style: l
  }));
}), Cg = UT;
var GT = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, name: "copy", theme: "outlined" };
const XT = GT;
var YT = function(t, r) {
  return /* @__PURE__ */ v.createElement(vr, _e({}, t, {
    ref: r,
    icon: XT
  }));
}, by = /* @__PURE__ */ v.forwardRef(YT);
process.env.NODE_ENV !== "production" && (by.displayName = "CopyOutlined");
const ZT = by;
var QT = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, name: "edit", theme: "outlined" };
const JT = QT;
var eM = function(t, r) {
  return /* @__PURE__ */ v.createElement(vr, _e({}, t, {
    ref: r,
    icon: JT
  }));
}, yy = /* @__PURE__ */ v.forwardRef(eM);
process.env.NODE_ENV !== "production" && (yy.displayName = "EditOutlined");
const tM = yy;
var rM = function() {
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
}, nM = rM, Eg = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, aM = "Copy to clipboard: #{key}, Enter";
function oM(e) {
  var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return e.replace(/#{\s*key\s*}/g, t);
}
function iM(e, t) {
  var r, n, a, o, i, s, l = !1;
  t || (t = {}), r = t.debug || !1;
  try {
    a = nM(), o = document.createRange(), i = document.getSelection(), s = document.createElement("span"), s.textContent = e, s.ariaHidden = "true", s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", function(c) {
      if (c.stopPropagation(), t.format)
        if (c.preventDefault(), typeof c.clipboardData > "u") {
          r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var d = Eg[t.format] || Eg.default;
          window.clipboardData.setData(d, e);
        } else
          c.clipboardData.clearData(), c.clipboardData.setData(t.format, e);
      t.onCopy && (c.preventDefault(), t.onCopy(c.clipboardData));
    }), document.body.appendChild(s), o.selectNodeContents(s), i.addRange(o);
    var u = document.execCommand("copy");
    if (!u)
      throw new Error("copy command was unsuccessful");
    l = !0;
  } catch (c) {
    r && console.error("unable to copy using execCommand: ", c), r && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), l = !0;
    } catch (d) {
      r && console.error("unable to copy using clipboardData: ", d), r && console.error("falling back to prompt"), n = oM("message" in t ? t.message : aM), window.prompt(n, e);
    }
  } finally {
    i && (typeof i.removeRange == "function" ? i.removeRange(o) : i.removeAllRanges()), s && document.body.removeChild(s), a();
  }
  return l;
}
var sM = iM;
const lM = /* @__PURE__ */ Ao(sM);
var uM = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z" } }] }, name: "enter", theme: "outlined" };
const cM = uM;
var fM = function(t, r) {
  return /* @__PURE__ */ v.createElement(vr, _e({}, t, {
    ref: r,
    icon: cM
  }));
}, Cy = /* @__PURE__ */ v.forwardRef(fM);
process.env.NODE_ENV !== "production" && (Cy.displayName = "EnterOutlined");
const dM = Cy, vM = (e, t, r, n) => {
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
}, mM = (e) => {
  const t = [1, 2, 3, 4, 5], r = {};
  return t.forEach((n) => {
    r[`
      h${n}&,
      div&-h${n},
      div&-h${n} > textarea,
      h${n}
    `] = vM(e[`fontSizeHeading${n}`], e[`lineHeightHeading${n}`], e.colorTextHeading, e);
  }), r;
}, gM = (e) => {
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
}, pM = (e) => ({
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
    backgroundColor: h$[2]
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
}), hM = (e) => {
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
        marginBottom: `calc(1em - ${we(n)})`
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
}, bM = (e) => ({
  [`${e.componentCls}-copy-success`]: {
    "\n    &,\n    &:hover,\n    &:focus": {
      color: e.colorSuccess
    }
  },
  [`${e.componentCls}-copy-icon-only`]: {
    marginInlineStart: 0
  }
}), yM = () => ({
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
}), CM = (e) => {
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
    }, mM(e)), {
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
    }), pM(e)), gM(e)), {
      // Operation
      [`
        ${t}-expand,
        ${t}-edit,
        ${t}-copy
      `]: Object.assign(Object.assign({}, Hh(e)), {
        marginInlineStart: e.marginXXS
      })
    }), hM(e)), bM(e)), yM()), {
      "&-rtl": {
        direction: "rtl"
      }
    })
  };
}, EM = () => ({
  titleMarginTop: "1.2em",
  titleMarginBottom: "0.5em"
}), Ey = un("Typography", (e) => [CM(e)], EM), wM = (e) => {
  const {
    prefixCls: t,
    "aria-label": r,
    className: n,
    style: a,
    direction: o,
    maxLength: i,
    autoSize: s = !0,
    value: l,
    onSave: u,
    onCancel: c,
    onEnd: d,
    component: m,
    enterIcon: h = /* @__PURE__ */ v.createElement(dM, null)
  } = e, p = v.useRef(null), f = v.useRef(!1), g = v.useRef(), [b, C] = v.useState(l);
  v.useEffect(() => {
    C(l);
  }, [l]), v.useEffect(() => {
    if (p.current && p.current.resizableTextArea) {
      const {
        textArea: R
      } = p.current.resizableTextArea;
      R.focus();
      const {
        length: T
      } = R.value;
      R.setSelectionRange(T, T);
    }
  }, []);
  const y = (R) => {
    let {
      target: T
    } = R;
    C(T.value.replace(/[\n\r]/g, ""));
  }, E = () => {
    f.current = !0;
  }, D = () => {
    f.current = !1;
  }, S = (R) => {
    let {
      keyCode: T
    } = R;
    f.current || (g.current = T);
  }, x = () => {
    u(b.trim());
  }, $ = (R) => {
    let {
      keyCode: T,
      ctrlKey: F,
      altKey: I,
      metaKey: k,
      shiftKey: L
    } = R;
    g.current === T && !f.current && !F && !I && !k && !L && (T === Fe.ENTER ? (x(), d == null || d()) : T === Fe.ESC && c());
  }, O = () => {
    x();
  }, A = m ? `${t}-${m}` : "", [j, N, B] = Ey(t), P = ne(t, `${t}-edit-content`, {
    [`${t}-rtl`]: o === "rtl"
  }, n, A, N, B);
  return j(/* @__PURE__ */ v.createElement("div", {
    className: P,
    style: a
  }, /* @__PURE__ */ v.createElement(ty, {
    ref: p,
    maxLength: i,
    value: b,
    onChange: y,
    onKeyDown: S,
    onKeyUp: $,
    onCompositionStart: E,
    onCompositionEnd: D,
    onBlur: O,
    "aria-label": r,
    rows: 1,
    autoSize: s
  }), h !== null ? sn(h, {
    className: `${t}-edit-content-confirm`
  }) : null));
}, SM = wM;
function pu(e, t) {
  return v.useMemo(() => {
    const r = !!e;
    return [r, Object.assign(Object.assign({}, t), r && typeof e == "object" ? e : null)];
  }, [e]);
}
const DM = (e, t) => {
  const r = v.useRef(!1);
  v.useEffect(() => {
    r.current ? e() : r.current = !0;
  }, t);
};
var xM = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const wy = /* @__PURE__ */ v.forwardRef((e, t) => {
  const {
    prefixCls: r,
    component: n = "article",
    className: a,
    rootClassName: o,
    setContentRef: i,
    children: s,
    direction: l,
    style: u
  } = e, c = xM(e, ["prefixCls", "component", "className", "rootClassName", "setContentRef", "children", "direction", "style"]), {
    getPrefixCls: d,
    direction: m,
    typography: h
  } = v.useContext(mt), p = l ?? m;
  let f = t;
  i && (f = Gr(t, i)), process.env.NODE_ENV !== "production" && Wt("Typography").deprecated(!i, "setContentRef", "ref");
  const g = d("typography", r), [b, C, y] = Ey(g), E = ne(g, h == null ? void 0 : h.className, {
    [`${g}-rtl`]: p === "rtl"
  }, a, o, C, y), D = Object.assign(Object.assign({}, h == null ? void 0 : h.style), u);
  return b(
    // @ts-expect-error: Expression produces a union type that is too complex to represent.
    /* @__PURE__ */ v.createElement(n, Object.assign({
      className: E,
      style: D,
      ref: f
    }, c), s)
  );
});
process.env.NODE_ENV !== "production" && (wy.displayName = "Typography");
const Sy = wy;
function Dy(e) {
  const t = typeof e;
  return t === "string" || t === "number";
}
function OM(e) {
  let t = 0;
  return e.forEach((r) => {
    Dy(r) ? t += String(r).length : t += 1;
  }), t;
}
function hu(e, t) {
  let r = 0;
  const n = [];
  for (let a = 0; a < e.length; a += 1) {
    if (r === t)
      return n;
    const o = e[a], s = Dy(o) ? String(o).length : 1, l = r + s;
    if (l > t) {
      const u = t - r;
      return n.push(String(o).slice(0, u)), n;
    }
    n.push(o), r = l;
  }
  return e;
}
const $M = 0, ds = 1, wg = 2, bu = 3, yu = 4, xy = (e) => {
  let {
    enabledMeasure: t,
    children: r,
    text: n,
    width: a,
    fontSize: o,
    rows: i,
    onEllipsis: s
  } = e;
  const [[l, u, c], d] = v.useState([0, 0, 0]), [m, h] = v.useState(0), [p, f] = v.useState($M), [g, b] = v.useState(0), C = v.useRef(null), y = v.useRef(null), E = v.useMemo(() => on(n), [n]), D = v.useMemo(() => OM(E), [E]), S = v.useMemo(() => !t || p !== bu ? m && p !== yu && t ? r(hu(E, m), m < D) : r(E, !1) : r(hu(E, u), u < D), [t, p, r, E, u, D]);
  jt(() => {
    t && a && o && D && (f(ds), d([0, Math.ceil(D / 2), D]));
  }, [t, a, o, n, D, i]), jt(() => {
    var A;
    p === ds && b(((A = C.current) === null || A === void 0 ? void 0 : A.offsetHeight) || 0);
  }, [p]), jt(() => {
    var A, j;
    if (g) {
      if (p === ds) {
        const N = ((A = y.current) === null || A === void 0 ? void 0 : A.offsetHeight) || 0, B = i * g;
        N <= B ? (f(yu), s(!1)) : f(wg);
      } else if (p === wg)
        if (l !== c) {
          const N = ((j = y.current) === null || j === void 0 ? void 0 : j.offsetHeight) || 0, B = i * g;
          let P = l, R = c;
          l === c - 1 ? R = l : N <= B ? P = u : R = u;
          const T = Math.ceil((P + R) / 2);
          d([P, T, R]);
        } else
          f(bu), h(u), s(!0);
    }
  }, [p, l, c, i, g]);
  const x = {
    width: a,
    whiteSpace: "normal",
    margin: 0,
    padding: 0
  }, $ = (A, j, N) => /* @__PURE__ */ v.createElement("span", {
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
    }, N)
  }, A), O = (A, j) => {
    const N = hu(E, A);
    return $(r(N, !0), j, x);
  };
  return /* @__PURE__ */ v.createElement(v.Fragment, null, S, t && p !== bu && p !== yu && /* @__PURE__ */ v.createElement(v.Fragment, null, $("lg", C, {
    wordBreak: "keep-all",
    whiteSpace: "nowrap"
  }), p === ds ? $(r(E, !1), y, x) : O(u, y)));
};
process.env.NODE_ENV !== "production" && (xy.displayName = "Ellipsis");
const AM = xy, Oy = (e) => {
  let {
    enabledEllipsis: t,
    isEllipsis: r,
    children: n,
    tooltipProps: a
  } = e;
  return !(a != null && a.title) || !t ? n : /* @__PURE__ */ v.createElement(Oo, Object.assign({
    open: r ? void 0 : !1
  }, a), n);
};
process.env.NODE_ENV !== "production" && (Oy.displayName = "EllipsisTooltip");
const BM = Oy;
var FM = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function PM(e, t) {
  let {
    mark: r,
    code: n,
    underline: a,
    delete: o,
    strong: i,
    keyboard: s,
    italic: l
  } = e, u = t;
  function c(d, m) {
    m && (u = /* @__PURE__ */ v.createElement(d, {}, u));
  }
  return c("strong", i), c("u", a), c("del", o), c("code", n), c("mark", r), c("kbd", s), c("i", l), u;
}
function vs(e, t, r) {
  return e === !0 || e === void 0 ? t : e || r && t;
}
function Sg(e) {
  return e === !1 ? [!1, !1] : Array.isArray(e) ? e : [e];
}
const RM = "...", NM = /* @__PURE__ */ v.forwardRef((e, t) => {
  var r, n, a;
  const {
    prefixCls: o,
    className: i,
    style: s,
    type: l,
    disabled: u,
    children: c,
    ellipsis: d,
    editable: m,
    copyable: h,
    component: p,
    title: f
  } = e, g = FM(e, ["prefixCls", "className", "style", "type", "disabled", "children", "ellipsis", "editable", "copyable", "component", "title"]), {
    getPrefixCls: b,
    direction: C
  } = v.useContext(mt), [y] = $h("Text"), E = v.useRef(null), D = v.useRef(null), S = b("typography", o), x = Cr(g, ["mark", "code", "delete", "underline", "strong", "keyboard", "italic"]), [$, O] = pu(m), [A, j] = qr(!1, {
    value: O.editing
  }), {
    triggerType: N = ["icon"]
  } = O, B = (ve) => {
    var Pe;
    ve && ((Pe = O.onStart) === null || Pe === void 0 || Pe.call(O)), j(ve);
  };
  DM(() => {
    var ve;
    A || (ve = D.current) === null || ve === void 0 || ve.focus();
  }, [A]);
  const P = (ve) => {
    ve == null || ve.preventDefault(), B(!0);
  }, R = (ve) => {
    var Pe;
    (Pe = O.onChange) === null || Pe === void 0 || Pe.call(O, ve), B(!1);
  }, T = () => {
    var ve;
    (ve = O.onCancel) === null || ve === void 0 || ve.call(O), B(!1);
  }, [F, I] = pu(h), [k, L] = v.useState(!1), W = v.useRef(null), U = {};
  I.format && (U.format = I.format);
  const Z = () => {
    W.current && clearTimeout(W.current);
  }, M = (ve) => {
    var Pe;
    ve == null || ve.preventDefault(), ve == null || ve.stopPropagation(), lM(I.text || String(c) || "", U), L(!0), Z(), W.current = setTimeout(() => {
      L(!1);
    }, 3e3), (Pe = I.onCopy) === null || Pe === void 0 || Pe.call(I, ve);
  };
  v.useEffect(() => Z, []);
  const [V, H] = v.useState(!1), [q, J] = v.useState(!1), [ee, ce] = v.useState(!1), [ae, me] = v.useState(!1), [fe, G] = v.useState(!1), [le, Se] = v.useState(!0), [De, Ee] = pu(d, {
    expandable: !1
  }), oe = De && !ee, {
    rows: se = 1
  } = Ee, ge = v.useMemo(() => (
    // Disable ellipsis
    !oe || // Provide suffix
    Ee.suffix !== void 0 || Ee.onEllipsis || // Can't use css ellipsis since we need to provide the place for button
    Ee.expandable || $ || F
  ), [oe, Ee, $, F]);
  jt(() => {
    De && !ge && (H(Om("webkitLineClamp")), J(Om("textOverflow")));
  }, [ge, De]);
  const he = v.useMemo(() => ge ? !1 : se === 1 ? q : V, [ge, q, V]), ye = oe && (he ? fe : ae), Ne = oe && se === 1 && he, $e = oe && se > 1 && he, je = (ve) => {
    var Pe;
    ce(!0), (Pe = Ee.onExpand) === null || Pe === void 0 || Pe.call(Ee, ve);
  }, [Et, Le] = v.useState(0), [xe, Ve] = v.useState(0), He = (ve, Pe) => {
    let {
      offsetWidth: ke
    } = ve;
    var nt;
    Le(ke), Ve(parseInt((nt = window.getComputedStyle) === null || nt === void 0 ? void 0 : nt.call(window, Pe).fontSize, 10) || 0);
  }, zt = (ve) => {
    var Pe;
    me(ve), ae !== ve && ((Pe = Ee.onEllipsis) === null || Pe === void 0 || Pe.call(Ee, ve));
  };
  v.useEffect(() => {
    const ve = E.current;
    if (De && he && ve) {
      const Pe = $e ? ve.offsetHeight < ve.scrollHeight : ve.offsetWidth < ve.scrollWidth;
      fe !== Pe && G(Pe);
    }
  }, [De, he, c, $e, le, Et]), v.useEffect(() => {
    const ve = E.current;
    if (typeof IntersectionObserver > "u" || !ve || !he || !oe)
      return;
    const Pe = new IntersectionObserver(() => {
      Se(!!ve.offsetParent);
    });
    return Pe.observe(ve), () => {
      Pe.disconnect();
    };
  }, [he, oe]);
  let rt = {};
  Ee.tooltip === !0 ? rt = {
    title: (r = O.text) !== null && r !== void 0 ? r : c
  } : /* @__PURE__ */ v.isValidElement(Ee.tooltip) ? rt = {
    title: Ee.tooltip
  } : typeof Ee.tooltip == "object" ? rt = Object.assign({
    title: (n = O.text) !== null && n !== void 0 ? n : c
  }, Ee.tooltip) : rt = {
    title: Ee.tooltip
  };
  const Bt = v.useMemo(() => {
    const ve = (Pe) => ["string", "number"].includes(typeof Pe);
    if (!(!De || he)) {
      if (ve(O.text))
        return O.text;
      if (ve(c))
        return c;
      if (ve(f))
        return f;
      if (ve(rt.title))
        return rt.title;
    }
  }, [De, he, f, rt.title, ye]);
  if (A)
    return /* @__PURE__ */ v.createElement(SM, {
      value: (a = O.text) !== null && a !== void 0 ? a : typeof c == "string" ? c : "",
      onSave: R,
      onCancel: T,
      onEnd: O.onEnd,
      prefixCls: S,
      className: i,
      style: s,
      direction: C,
      component: p,
      maxLength: O.maxLength,
      autoSize: O.autoSize,
      enterIcon: O.enterIcon
    });
  const ht = () => {
    const {
      expandable: ve,
      symbol: Pe
    } = Ee;
    if (!ve)
      return null;
    let ke;
    return Pe ? ke = Pe : ke = y == null ? void 0 : y.expand, /* @__PURE__ */ v.createElement("a", {
      key: "expand",
      className: `${S}-expand`,
      onClick: je,
      "aria-label": y == null ? void 0 : y.expand
    }, ke);
  }, Qe = () => {
    if (!$)
      return;
    const {
      icon: ve,
      tooltip: Pe
    } = O, ke = on(Pe)[0] || (y == null ? void 0 : y.edit), nt = typeof ke == "string" ? ke : "";
    return N.includes("icon") ? /* @__PURE__ */ v.createElement(Oo, {
      key: "edit",
      title: Pe === !1 ? "" : ke
    }, /* @__PURE__ */ v.createElement(Cg, {
      ref: D,
      className: `${S}-edit`,
      onClick: P,
      "aria-label": nt
    }, ve || /* @__PURE__ */ v.createElement(tM, {
      role: "button"
    }))) : null;
  }, st = () => {
    if (!F)
      return null;
    const {
      tooltips: ve,
      icon: Pe
    } = I, ke = Sg(ve), nt = Sg(Pe), Je = k ? vs(ke[1], y == null ? void 0 : y.copied) : vs(ke[0], y == null ? void 0 : y.copy), Re = k ? y == null ? void 0 : y.copied : y == null ? void 0 : y.copy, Ze = typeof Je == "string" ? Je : Re;
    return /* @__PURE__ */ v.createElement(Oo, {
      key: "copy",
      title: Je
    }, /* @__PURE__ */ v.createElement(Cg, {
      className: ne(`${S}-copy`, {
        [`${S}-copy-success`]: k,
        [`${S}-copy-icon-only`]: c == null
      }),
      onClick: M,
      "aria-label": Ze
    }, k ? vs(nt[1], /* @__PURE__ */ v.createElement(fP, null), !0) : vs(nt[0], /* @__PURE__ */ v.createElement(ZT, null), !0)));
  }, Gt = (ve) => [ve && ht(), Qe(), st()], Dt = (ve) => [ve && /* @__PURE__ */ v.createElement("span", {
    "aria-hidden": !0,
    key: "ellipsis"
  }, RM), Ee.suffix, Gt(ve)];
  return /* @__PURE__ */ v.createElement(sa, {
    onResize: He,
    disabled: !oe
  }, (ve) => /* @__PURE__ */ v.createElement(BM, {
    tooltipProps: rt,
    enabledEllipsis: oe,
    isEllipsis: ye
  }, /* @__PURE__ */ v.createElement(Sy, Object.assign({
    className: ne({
      [`${S}-${l}`]: l,
      [`${S}-disabled`]: u,
      [`${S}-ellipsis`]: De,
      [`${S}-single-line`]: oe && se === 1,
      [`${S}-ellipsis-single-line`]: Ne,
      [`${S}-ellipsis-multiple-line`]: $e
    }, i),
    prefixCls: o,
    style: Object.assign(Object.assign({}, s), {
      WebkitLineClamp: $e ? se : void 0
    }),
    component: p,
    ref: Gr(ve, E, t),
    direction: C,
    onClick: N.includes("text") ? P : void 0,
    "aria-label": Bt == null ? void 0 : Bt.toString(),
    title: f
  }, x), /* @__PURE__ */ v.createElement(AM, {
    enabledMeasure: oe && !he,
    text: c,
    rows: se,
    width: Et,
    fontSize: xe,
    onEllipsis: zt
  }, (Pe, ke) => {
    let nt = Pe;
    return Pe.length && ke && Bt && (nt = /* @__PURE__ */ v.createElement("span", {
      key: "show-content",
      "aria-hidden": !0
    }, nt)), PM(e, /* @__PURE__ */ v.createElement(v.Fragment, null, nt, Dt(ke)));
  }))));
}), $l = NM;
var IM = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const TM = /* @__PURE__ */ v.forwardRef((e, t) => {
  var {
    ellipsis: r,
    rel: n
  } = e, a = IM(e, ["ellipsis", "rel"]);
  if (process.env.NODE_ENV !== "production") {
    const i = Wt("Typography.Link");
    process.env.NODE_ENV !== "production" && i(typeof r != "object", "usage", "`ellipsis` only supports boolean value.");
  }
  const o = Object.assign(Object.assign({}, a), {
    rel: n === void 0 && a.target === "_blank" ? "noopener noreferrer" : n
  });
  return delete o.navigate, /* @__PURE__ */ v.createElement($l, Object.assign({}, o, {
    ref: t,
    ellipsis: !!r,
    component: "a"
  }));
}), MM = TM, jM = /* @__PURE__ */ v.forwardRef((e, t) => /* @__PURE__ */ v.createElement($l, Object.assign({
  ref: t
}, e, {
  component: "div"
}))), _M = jM;
var LM = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const kM = (e, t) => {
  var {
    ellipsis: r
  } = e, n = LM(e, ["ellipsis"]);
  const a = v.useMemo(() => r && typeof r == "object" ? Cr(r, ["expandable", "rows"]) : r, [r]);
  if (process.env.NODE_ENV !== "production") {
    const o = Wt("Typography.Text");
    process.env.NODE_ENV !== "production" && o(typeof r != "object" || !r || !("expandable" in r) && !("rows" in r), "usage", "`ellipsis` do not support `expandable` or `rows` props.");
  }
  return /* @__PURE__ */ v.createElement($l, Object.assign({
    ref: t
  }, n, {
    ellipsis: a,
    component: "span"
  }));
}, zM = /* @__PURE__ */ v.forwardRef(kM);
var VM = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Dg = [1, 2, 3, 4, 5], HM = /* @__PURE__ */ v.forwardRef((e, t) => {
  const {
    level: r = 1
  } = e, n = VM(e, ["level"]);
  let a;
  if (process.env.NODE_ENV !== "production") {
    const o = Wt("Typography.Title");
    process.env.NODE_ENV !== "production" && o(Dg.includes(r), "usage", "Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version.");
  }
  return Dg.includes(r) ? a = `h${r}` : a = "h1", /* @__PURE__ */ v.createElement($l, Object.assign({
    ref: t
  }, n, {
    component: a
  }));
}), WM = HM, ki = Sy;
ki.Text = zM;
ki.Link = MM;
ki.Title = WM;
ki.Paragraph = _M;
const qM = ki, KM = (e) => {
  const { attributes: t, children: r, element: n } = e, { disabled: a, checked: o, textAlign: i } = n, s = Ut(), l = lf(), u = l || a, c = ne("wu_check_list"), d = {
    justifyContent: i ? i === In.Center ? "center" : `flex-${i}` : void 0
  };
  return /* @__PURE__ */ Ce.jsxs(
    "div",
    {
      className: c,
      style: d,
      ...t,
      onClick: () => {
        PD(s, n);
      },
      children: [
        /* @__PURE__ */ Ce.jsx("span", { contentEditable: !1, className: "wu_check_list_box", children: /* @__PURE__ */ Ce.jsx(
          VN,
          {
            disabled: u,
            checked: o,
            onChange: (m) => {
              const h = te.findPath(s, n), p = {
                checked: m.target.checked
              };
              re.setNodes(s, p, { at: h });
            }
          }
        ) }),
        /* @__PURE__ */ Ce.jsx(
          "span",
          {
            className: ne("wu_check_list_label", {
              wu_check_list_checked: o
            }),
            onClick: (m) => m.stopPropagation(),
            suppressContentEditableWarning: !0,
            contentEditable: !l,
            children: r
          }
        )
      ]
    }
  );
}, UM = (e) => {
  const { attributes: t, children: r, element: n } = e, { index: a, textAlign: o } = n;
  Ut();
  const i = lf(), {
    token: { colorPrimary: s }
  } = id.useToken(), l = {
    justifyContent: o ? o === In.Center ? "center" : `flex-${o}` : void 0
  };
  return /* @__PURE__ */ Ce.jsxs("div", { style: l, className: "wu_ordered_list", ...t, children: [
    /* @__PURE__ */ Ce.jsx(
      xr,
      {
        type: "text",
        size: "small",
        icon: /* @__PURE__ */ Ce.jsxs("span", { contentEditable: !1, style: { color: s }, children: [
          a,
          "."
        ] }),
        className: "wu_ordered_index"
      }
    ),
    /* @__PURE__ */ Ce.jsx(
      "span",
      {
        className: ne("wu_ordered_label"),
        suppressContentEditableWarning: !0,
        contentEditable: !i,
        children: r
      }
    )
  ] });
}, GM = (e) => {
  const { attributes: t, children: r } = e;
  return /* @__PURE__ */ Ce.jsx("span", { ...t, children: r });
}, XM = (e) => {
  const { attributes: t, element: r, children: n } = e, { textAlign: a, heading: o } = r, i = {
    textAlign: a
  };
  return o ? /* @__PURE__ */ Ce.jsx(qM.Title, { level: o, style: i, ...t, children: n }) : /* @__PURE__ */ Ce.jsx("p", { style: i, ...t, children: n });
}, YM = (e) => {
  const { attributes: t, leaf: r, children: n } = e, a = ne("wu-leaf-node", {
    "wu-font-bold": r.bold,
    "wu-underline": r.underline,
    "wu-italic": r.italic,
    "wu-keyword-highlight": r.highlight
  });
  return /* @__PURE__ */ Ce.jsx("span", { className: a, ...t, children: n });
}, ZM = (e) => {
  const { attributes: t, element: r, children: n } = e, {
    token: { colorPrimaryText: a }
  } = id.useToken(), { href: o, view: i, disabled: s } = r;
  return /* @__PURE__ */ Ce.jsx(
    "a",
    {
      "data-link": !0,
      "data-href": o,
      "data-slate-node": "element",
      title: o,
      style: {
        color: a,
        fontStyle: "normal",
        wordBreak: "break-all",
        wordWrap: "break-word",
        whiteSpace: "pre-wrap",
        borderBottom: " 1px solid #d1e9ff",
        textDecoration: "none",
        margin: "0 2px"
      },
      href: o,
      children: /* @__PURE__ */ Ce.jsxs("span", { ...t, children: [
        n,
        /* @__PURE__ */ Ce.jsx(
          "span",
          {
            className: "ignore-toggle-readonly",
            "data-ignore-slate": !0,
            contentEditable: !1,
            style: { userSelect: "none" },
            children: "\uFEFF"
          }
        )
      ] })
    }
  );
}, QM = () => {
  const e = et((n) => {
    const { children: a, ...o } = n, i = n.element.type;
    return Ft(i).with(at.Code, () => /* @__PURE__ */ Ce.jsx(GM, { ...o, children: a })).with(at.CheckList, () => /* @__PURE__ */ Ce.jsx(KM, { ...o, children: a })).with(at.OrderedList, () => /* @__PURE__ */ Ce.jsx(UM, { ...o, children: a })).with(at.Link, () => /* @__PURE__ */ Ce.jsx(ZM, { ...o, children: a })).otherwise(() => /* @__PURE__ */ Ce.jsx(XM, { ...o, children: a }));
  }, []), t = et((n) => {
    const { children: a, ...o } = n;
    return /* @__PURE__ */ Ce.jsx(YM, { ...o, children: a });
  }, []), r = et((n) => {
    const { children: a, attributes: o } = n;
    return /* @__PURE__ */ Ce.jsx(
      "span",
      {
        ...o,
        style: {
          color: "gray",
          position: "absolute",
          left: 3,
          userSelect: "none",
          fontStyle: "normal",
          fontWeight: "normal",
          textDecoration: "none"
        },
        children: a
      }
    );
  }, []);
  return { renderElement: e, renderLeaf: t, renderPlaceholder: r };
}, JM = (e) => {
  const t = ze(!1);
  return [(n) => {
    const a = n.ctrlKey || n.metaKey;
    Ft(a).with(!0, () => {
      Ft(n).with({ shiftKey: !0 }, (o) => {
        Ft(o).with({ key: "T" }, () => {
          console.info("切换CheckList"), n.preventDefault(), tt.toggleCheckListNode(e);
        }), Ft(o).with({ key: "L" }, () => {
          console.info("切换align-left"), n.preventDefault(), tt.toggleTextAlignMark(e, In.Start);
        }), Ft(o).with({ key: "C" }, () => {
          console.info("切换align-center"), n.preventDefault(), tt.toggleTextAlignMark(e, In.Center);
        }), Ft(o).with({ key: "R" }, () => {
          console.info("切换align-right"), n.preventDefault(), tt.toggleTextAlignMark(e, In.End);
        });
      }).with({ altKey: !0 }, (o) => {
        Ft(o).with({ key: "R" }, () => {
          console.info("还原"), o.preventDefault(), tt.restoreNormal(e);
        });
      }).with({ key: "a" }, () => {
        t.current ? (console.info("编辑器全选"), t.current = !1) : (console.info("模块内全选"), t.current = !0, tt.selectAllInModule(e) && n.preventDefault(), setTimeout(() => {
          t.current = !1;
        }, 400));
      }).with({ key: Zo.Bold }, () => {
        console.info("切换加粗"), n.preventDefault(), tt.toggleBoldMark(e);
      }).with({ key: Zo.Italic }, () => {
        console.info("切换斜体"), n.preventDefault(), tt.toggleItalicMark(e);
      }).with({ key: Zo.Underline }, () => {
        console.info("切换下划线"), n.preventDefault(), tt.toggleUnderlineMark(e);
      });
    }).otherwise(() => {
      const { altKey: o, shiftKey: i } = n;
      Ft(!o && !i).with(!0, () => {
        Ft(n.key).with(Zo.Tab, () => {
          console.info("缩进"), n.preventDefault(), ba.withoutMerging(e, () => {
            tt.indent(e);
          });
        });
      });
    });
  }];
}, { darkAlgorithm: e3, compactAlgorithm: xg } = id, t3 = (e) => {
  const { theme: t, children: r } = e;
  return /* @__PURE__ */ Ce.jsx(Wx, { hashPriority: "high", children: /* @__PURE__ */ Ce.jsx(
    c0,
    {
      theme: {
        algorithm: t === "dark" ? [e3, xg] : [xg]
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
const r3 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), $y = (...e) => e.filter((t, r, n) => !!t && n.indexOf(t) === r).join(" ");
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var n3 = {
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
const a3 = br(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: a = "",
    children: o,
    iconNode: i,
    ...s
  }, l) => Du(
    "svg",
    {
      ref: l,
      ...n3,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: $y("lucide", a),
      ...s
    },
    [
      ...i.map(([u, c]) => Du(u, c)),
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
const ur = (e, t) => {
  const r = br(
    ({ className: n, ...a }, o) => Du(a3, {
      ref: o,
      iconNode: t,
      className: $y(`lucide-${r3(e)}`, n),
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
const o3 = ur("AlignCenter", [
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
const i3 = ur("AlignJustify", [
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
const s3 = ur("AlignLeft", [
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
const l3 = ur("AlignRight", [
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
const u3 = ur("Bold", [
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
const c3 = ur("Eraser", [
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
const f3 = ur("Heading1", [
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
const d3 = ur("Heading2", [
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
const v3 = ur("Heading3", [
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
const m3 = ur("Heading4", [
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
const g3 = ur("Heading5", [
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
const p3 = ur("Heading", [
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
const h3 = ur("Italic", [
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
const b3 = ur("Link2", [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
]);
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y3 = ur("ListOrdered", [
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
const C3 = ur("ListTodo", [
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
const E3 = ur("Underline", [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
]), w3 = () => {
  const e = Hn((n) => tt.isBoldMarkActive(n)), t = Ut(), r = Pt(() => e ? "primary" : "text", [e]);
  return /* @__PURE__ */ Ce.jsx(
    xr,
    {
      type: r,
      onClick: () => {
        te.focus(t), tt.toggleBoldMark(t);
      },
      className: ne("wu_toolbar_icon_btn"),
      icon: /* @__PURE__ */ Ce.jsx(u3, { className: ne("wu_toolbar_icon_btn_icon") })
    }
  );
}, S3 = () => {
  const e = Hn((n) => tt.isItalicMarkActive(n)), t = Ut(), r = Pt(() => e ? "primary" : "text", [e]);
  return /* @__PURE__ */ Ce.jsx(
    xr,
    {
      type: r,
      onClick: () => {
        te.focus(t), tt.toggleItalicMark(t);
      },
      className: ne("wu_toolbar_icon_btn"),
      icon: /* @__PURE__ */ Ce.jsx(h3, { className: ne("wu_toolbar_icon_btn_icon") })
    }
  );
}, D3 = () => {
  const e = Hn(
    (n) => tt.isUnderlineMarkActive(n)
  ), t = Ut(), r = Pt(() => e ? "primary" : "text", [e]);
  return /* @__PURE__ */ Ce.jsx(
    xr,
    {
      type: r,
      onClick: () => {
        te.focus(t), tt.toggleUnderlineMark(t);
      },
      className: ne("wu_toolbar_icon_btn"),
      icon: /* @__PURE__ */ Ce.jsx(E3, { className: ne("wu_toolbar_icon_btn_icon") })
    }
  );
}, x3 = () => {
  const e = Ut();
  return /* @__PURE__ */ Ce.jsx(
    xr,
    {
      type: "text",
      onClick: () => {
        te.focus(e), tt.restoreNormal(e);
      },
      className: ne("wu_toolbar_icon_btn"),
      icon: /* @__PURE__ */ Ce.jsx(c3, { className: ne("wu_toolbar_icon_btn_icon") })
    }
  );
}, O3 = () => {
  const e = Hn((i) => tt.isTextAlignMarkActive(i)), t = Ut(), r = Pt(() => e ? "primary" : "text", [e]), n = (i) => {
    te.focus(t), Ft(e === i.key).with(!0, () => {
      tt.toggleTextAlignMark(t);
    }).otherwise(() => {
      tt.toggleTextAlignMark(t, i.key);
    });
  }, a = ne("wu_toolbar_icon_btn_icon"), o = [
    {
      label: "左对齐",
      key: In.Start,
      icon: /* @__PURE__ */ Ce.jsx(s3, { className: a })
    },
    {
      label: "居中对齐",
      key: In.Center,
      icon: /* @__PURE__ */ Ce.jsx(o3, { className: a })
    },
    {
      label: "右对齐",
      key: In.End,
      icon: /* @__PURE__ */ Ce.jsx(l3, { className: a })
    }
  ];
  return /* @__PURE__ */ Ce.jsx(
    sy,
    {
      menu: {
        items: o,
        selectable: !0,
        selectedKeys: e ? [e] : [],
        onClick: n
      },
      children: /* @__PURE__ */ Ce.jsx(
        xr,
        {
          type: r,
          className: ne("wu_toolbar_icon_btn"),
          icon: /* @__PURE__ */ Ce.jsx(i3, { className: a })
        }
      )
    }
  );
}, $3 = () => {
  const e = Hn((n) => tt.isCheckListNode(n)), t = Ut(), r = Pt(() => e ? "primary" : "text", [e]);
  return /* @__PURE__ */ Ce.jsx(
    xr,
    {
      type: r,
      className: ne("wu_toolbar_icon_btn"),
      onClick: () => {
        te.focus(t), tt.toggleCheckListNode(t);
      },
      icon: /* @__PURE__ */ Ce.jsx(C3, { className: ne("wu_toolbar_icon_btn_icon") })
    }
  );
}, A3 = () => {
  const e = Hn(
    (i) => tt.isTextHeadingMarkActive(i)
  ), t = Ut(), r = Pt(() => e ? "primary" : "text", [e]), n = (i) => {
    te.focus(t), Ft((e == null ? void 0 : e.toString()) === i.key).with(!0, () => {
      tt.toggleTextHeadingMark(t);
    }).otherwise(() => {
      tt.toggleTextHeadingMark(t, Number(i.key));
    });
  }, a = ne("wu_toolbar_icon_btn_icon"), o = [
    {
      label: "一级标题",
      key: ao.H1.toString(),
      icon: /* @__PURE__ */ Ce.jsx(f3, { className: a })
    },
    {
      label: "二级标题",
      key: ao.H2.toString(),
      icon: /* @__PURE__ */ Ce.jsx(d3, { className: a })
    },
    {
      label: "三级标题",
      key: ao.H3.toString(),
      icon: /* @__PURE__ */ Ce.jsx(v3, { className: a })
    },
    {
      label: "四级标题",
      key: ao.H4.toString(),
      icon: /* @__PURE__ */ Ce.jsx(m3, { className: a })
    },
    {
      label: "五级标题",
      key: ao.H5.toString(),
      icon: /* @__PURE__ */ Ce.jsx(g3, { className: a })
    }
  ];
  return /* @__PURE__ */ Ce.jsx(
    sy,
    {
      menu: {
        items: o,
        selectable: !0,
        selectedKeys: e ? [e.toString()] : [],
        onClick: n
      },
      children: /* @__PURE__ */ Ce.jsx(
        xr,
        {
          type: r,
          className: ne("wu_toolbar_icon_btn"),
          icon: /* @__PURE__ */ Ce.jsx(p3, { className: a })
        }
      )
    }
  );
}, B3 = () => {
  const e = Hn((n) => tt.isOrderedListNode(n)), t = Ut(), r = Pt(() => e ? "primary" : "text", [e]);
  return /* @__PURE__ */ Ce.jsx(
    xr,
    {
      type: r,
      className: ne("wu_toolbar_icon_btn"),
      onClick: () => {
        te.focus(t), tt.toggleOrderedListNode(t);
      },
      icon: /* @__PURE__ */ Ce.jsx(y3, { className: ne("wu_toolbar_icon_btn_icon") })
    }
  );
};
var F3 = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Og = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (c, d) => {
    const m = typeof c == "function" ? c(t) : c;
    if (!Object.is(m, t)) {
      const h = t;
      t = d ?? (typeof m != "object" || m === null) ? m : Object.assign({}, t, m), r.forEach((p) => p(t, h));
    }
  }, a = () => t, l = { setState: n, getState: a, getInitialState: () => u, subscribe: (c) => (r.add(c), () => r.delete(c)), destroy: () => {
    (F3 ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } }, u = t = e(n, a, l);
  return l;
}, P3 = (e) => e ? Og(e) : Og;
var qc = { exports: {} }, Cu = {}, ms = { exports: {} }, Eu = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $g;
function R3() {
  if ($g)
    return Eu;
  $g = 1;
  var e = Q;
  function t(d, m) {
    return d === m && (d !== 0 || 1 / d === 1 / m) || d !== d && m !== m;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, a = e.useEffect, o = e.useLayoutEffect, i = e.useDebugValue;
  function s(d, m) {
    var h = m(), p = n({ inst: { value: h, getSnapshot: m } }), f = p[0].inst, g = p[1];
    return o(function() {
      f.value = h, f.getSnapshot = m, l(f) && g({ inst: f });
    }, [d, h, m]), a(function() {
      return l(f) && g({ inst: f }), d(function() {
        l(f) && g({ inst: f });
      });
    }, [d]), i(h), h;
  }
  function l(d) {
    var m = d.getSnapshot;
    d = d.value;
    try {
      var h = m();
      return !r(d, h);
    } catch {
      return !0;
    }
  }
  function u(d, m) {
    return m();
  }
  var c = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Eu.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : c, Eu;
}
var wu = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ag;
function N3() {
  return Ag || (Ag = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Q, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(y) {
      {
        for (var E = arguments.length, D = new Array(E > 1 ? E - 1 : 0), S = 1; S < E; S++)
          D[S - 1] = arguments[S];
        n("error", y, D);
      }
    }
    function n(y, E, D) {
      {
        var S = t.ReactDebugCurrentFrame, x = S.getStackAddendum();
        x !== "" && (E += "%s", D = D.concat([x]));
        var $ = D.map(function(O) {
          return String(O);
        });
        $.unshift("Warning: " + E), Function.prototype.apply.call(console[y], console, $);
      }
    }
    function a(y, E) {
      return y === E && (y !== 0 || 1 / y === 1 / E) || y !== y && E !== E;
    }
    var o = typeof Object.is == "function" ? Object.is : a, i = e.useState, s = e.useEffect, l = e.useLayoutEffect, u = e.useDebugValue, c = !1, d = !1;
    function m(y, E, D) {
      c || e.startTransition !== void 0 && (c = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var S = E();
      if (!d) {
        var x = E();
        o(S, x) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var $ = i({
        inst: {
          value: S,
          getSnapshot: E
        }
      }), O = $[0].inst, A = $[1];
      return l(function() {
        O.value = S, O.getSnapshot = E, h(O) && A({
          inst: O
        });
      }, [y, S, E]), s(function() {
        h(O) && A({
          inst: O
        });
        var j = function() {
          h(O) && A({
            inst: O
          });
        };
        return y(j);
      }, [y]), u(S), S;
    }
    function h(y) {
      var E = y.getSnapshot, D = y.value;
      try {
        var S = E();
        return !o(D, S);
      } catch {
        return !0;
      }
    }
    function p(y, E, D) {
      return E();
    }
    var f = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !f, b = g ? p : m, C = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : b;
    wu.useSyncExternalStore = C, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), wu;
}
var Bg;
function Ay() {
  return Bg || (Bg = 1, process.env.NODE_ENV === "production" ? ms.exports = R3() : ms.exports = N3()), ms.exports;
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
var Fg;
function I3() {
  if (Fg)
    return Cu;
  Fg = 1;
  var e = Q, t = Ay();
  function r(u, c) {
    return u === c && (u !== 0 || 1 / u === 1 / c) || u !== u && c !== c;
  }
  var n = typeof Object.is == "function" ? Object.is : r, a = t.useSyncExternalStore, o = e.useRef, i = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return Cu.useSyncExternalStoreWithSelector = function(u, c, d, m, h) {
    var p = o(null);
    if (p.current === null) {
      var f = { hasValue: !1, value: null };
      p.current = f;
    } else
      f = p.current;
    p = s(function() {
      function b(S) {
        if (!C) {
          if (C = !0, y = S, S = m(S), h !== void 0 && f.hasValue) {
            var x = f.value;
            if (h(x, S))
              return E = x;
          }
          return E = S;
        }
        if (x = E, n(y, S))
          return x;
        var $ = m(S);
        return h !== void 0 && h(x, $) ? x : (y = S, E = $);
      }
      var C = !1, y, E, D = d === void 0 ? null : d;
      return [function() {
        return b(c());
      }, D === null ? void 0 : function() {
        return b(D());
      }];
    }, [c, d, m, h]);
    var g = a(u, p[0], p[1]);
    return i(function() {
      f.hasValue = !0, f.value = g;
    }, [g]), l(g), g;
  }, Cu;
}
var Su = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pg;
function T3() {
  return Pg || (Pg = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Q, t = Ay();
    function r(c, d) {
      return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
    }
    var n = typeof Object.is == "function" ? Object.is : r, a = t.useSyncExternalStore, o = e.useRef, i = e.useEffect, s = e.useMemo, l = e.useDebugValue;
    function u(c, d, m, h, p) {
      var f = o(null), g;
      f.current === null ? (g = {
        hasValue: !1,
        value: null
      }, f.current = g) : g = f.current;
      var b = s(function() {
        var D = !1, S, x, $ = function(N) {
          if (!D) {
            D = !0, S = N;
            var B = h(N);
            if (p !== void 0 && g.hasValue) {
              var P = g.value;
              if (p(P, B))
                return x = P, P;
            }
            return x = B, B;
          }
          var R = S, T = x;
          if (n(R, N))
            return T;
          var F = h(N);
          return p !== void 0 && p(T, F) ? T : (S = N, x = F, F);
        }, O = m === void 0 ? null : m, A = function() {
          return $(d());
        }, j = O === null ? void 0 : function() {
          return $(O());
        };
        return [A, j];
      }, [d, m, h, p]), C = b[0], y = b[1], E = a(c, C, y);
      return i(function() {
        g.hasValue = !0, g.value = E;
      }, [E]), l(E), E;
    }
    Su.useSyncExternalStoreWithSelector = u, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Su;
}
process.env.NODE_ENV === "production" ? qc.exports = I3() : qc.exports = T3();
var M3 = qc.exports;
const j3 = /* @__PURE__ */ Ao(M3);
var By = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: _3 } = Q, { useSyncExternalStoreWithSelector: L3 } = j3;
let Rg = !1;
const k3 = (e) => e;
function z3(e, t = k3, r) {
  (By ? "production" : void 0) !== "production" && r && !Rg && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Rg = !0);
  const n = L3(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    r
  );
  return _3(n), n;
}
const Ng = (e) => {
  (By ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? P3(e) : e, r = (n, a) => z3(t, n, a);
  return Object.assign(r, t), r;
}, V3 = (e) => e ? Ng(e) : Ng, H3 = {
  keyword: ""
}, Fy = V3((e) => ({
  ...H3
})), W3 = () => /* @__PURE__ */ Ce.jsx(
  Fs,
  {
    onChange: (e) => {
      const t = e.target.value;
      Fy.setState({ keyword: t ?? "" });
    },
    allowClear: !0,
    placeholder: "请输入"
  }
), q3 = (e) => {
  const { children: t, defaultValue: r } = e, n = Ut(), [a] = dr.useForm(), o = (l) => {
    console.log(l), tt.toggleLinkNode(n, { link: l.link });
  }, i = Pt(() => /* @__PURE__ */ Ce.jsxs(dr, { onFinish: o, form: a, labelCol: { span: 4 }, wrapperCol: { span: 20 }, children: [
    /* @__PURE__ */ Ce.jsx(dr.Item, { label: "文本", name: "title", children: /* @__PURE__ */ Ce.jsx(Fs, { placeholder: "输入文本" }) }),
    /* @__PURE__ */ Ce.jsx(dr.Item, { label: "链接", style: { marginBottom: 0 }, children: /* @__PURE__ */ Ce.jsxs(ad, { children: [
      /* @__PURE__ */ Ce.jsx(dr.Item, { name: "link", noStyle: !0, children: /* @__PURE__ */ Ce.jsx(Fs, { placeholder: "粘贴或者输入链接" }) }),
      /* @__PURE__ */ Ce.jsx(dr.Item, { dependencies: ["link"], noStyle: !0, children: ({ getFieldValue: l }) => {
        const u = l("link");
        let c = !0;
        return u && (c = !1), /* @__PURE__ */ Ce.jsx(xr, { disabled: c, htmlType: "submit", type: "primary", children: "确认" });
      } })
    ] }) })
  ] }), [a]), s = Pt(() => /* @__PURE__ */ Ce.jsx(dr, { form: a, labelCol: { span: 8 }, wrapperCol: { span: 16 }, children: /* @__PURE__ */ Ce.jsx(dr.Item, { children: /* @__PURE__ */ Ce.jsx(Fs, { placeholder: "粘贴或者输入链接" }) }) }), []);
  return /* @__PURE__ */ Ce.jsx(Oo, { title: r ? s : i, trigger: ["click"], arrow: !1, children: t });
}, K3 = () => {
  const e = Hn((r) => tt.isBoldMarkActive(r));
  Ut();
  const t = Pt(() => e ? "primary" : "text", [e]);
  return /* @__PURE__ */ Ce.jsx(q3, { children: /* @__PURE__ */ Ce.jsx(
    xr,
    {
      type: t,
      className: ne("wu_toolbar_icon_btn"),
      icon: /* @__PURE__ */ Ce.jsx(b3, { className: ne("wu_toolbar_icon_btn_icon") })
    }
  ) });
}, U3 = (e) => {
  const { className: t } = e;
  return /* @__PURE__ */ Ce.jsxs(ad, { className: ne("wu_toolbar", t), children: [
    /* @__PURE__ */ Ce.jsx(W3, {}),
    /* @__PURE__ */ Ce.jsx(A3, {}),
    /* @__PURE__ */ Ce.jsx($3, {}),
    /* @__PURE__ */ Ce.jsx(K3, {}),
    /* @__PURE__ */ Ce.jsx(w3, {}),
    /* @__PURE__ */ Ce.jsx(S3, {}),
    /* @__PURE__ */ Ce.jsx(D3, {}),
    /* @__PURE__ */ Ce.jsx(x3, {}),
    /* @__PURE__ */ Ce.jsx(O3, {}),
    /* @__PURE__ */ Ce.jsx(B3, {})
  ] });
};
function G3(e, t) {
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
const { useRef: X3 } = Q;
function Y3(e) {
  const t = X3();
  return (r) => {
    const n = e(r);
    return G3(t.current, n) ? t.current : t.current = n;
  };
}
const Z3 = () => {
  const e = Fy(Y3((r) => r.keyword));
  return {
    decorate: et(
      (r) => {
        const n = e, [a, o] = r, i = [];
        if (n && Be.isText(a)) {
          console.time("[关键字查询]");
          const { text: s } = a, l = s.split(n);
          let u = 0;
          l.forEach((c, d) => {
            d !== 0 && i.push({
              anchor: { path: o, offset: u - n.length },
              focus: {
                path: o,
                offset: u
              },
              highlight: !0
            }), u = u + c.length + n.length;
          }), console.timeEnd("[关键字查询]");
        }
        return i;
      },
      [e]
    )
  };
}, ij = br((e, t) => {
  const { theme: r, placeholder: n, classes: a, initialValue: o = uo() } = e, [i, { showPlaceholder: s, handlePlaceholder: l }] = QD();
  Ia(t, () => ({
    editor: i
  }));
  const { renderElement: u, renderLeaf: c, renderPlaceholder: d } = QM(), [m] = JM(i), { decorate: h } = Z3();
  return /* @__PURE__ */ Ce.jsx(t3, { theme: r, children: /* @__PURE__ */ Ce.jsxs(
    ED,
    {
      editor: i,
      onValueChange: (p) => {
        console.log("val", p), l(p);
      },
      onSelectionChange: (p) => {
        console.log("selection:", p);
      },
      initialValue: o,
      children: [
        /* @__PURE__ */ Ce.jsx(U3, { className: ne(a == null ? void 0 : a.toolbar) }),
        /* @__PURE__ */ Ce.jsx(
          dD,
          {
            decorate: h,
            className: ne("wu_editable", a == null ? void 0 : a.editor),
            renderElement: u,
            renderLeaf: c,
            renderPlaceholder: d,
            spellCheck: !0,
            placeholder: s ? n : void 0,
            onKeyDown: m
          }
        )
      ]
    }
  ) });
});
export {
  QS as DefaultElement,
  GS as DefaultLeaf,
  vD as DefaultPlaceholder,
  dD as Editable,
  w as Editor,
  de as Element,
  ej as Location,
  be as Node,
  ta as Operation,
  z as Path,
  Qy as PathRef,
  Ge as Point,
  Jy as PointRef,
  X as Range,
  eC as RangeRef,
  te as ReactEditor,
  er as Scrubber,
  ED as Slate,
  vC as Span,
  Be as Text,
  re as Transforms,
  ij as WuEditor,
  UC as above,
  GC as addMark,
  XC as after,
  VC as apply,
  YC as before,
  Q1 as collapse,
  hE as createEditor,
  ZC as deleteBackward,
  QC as deleteForward,
  JC as deleteFragment,
  Y1 as deleteText,
  J1 as deselect,
  e1 as edges,
  t1 as elementReadOnly,
  r1 as end,
  n1 as first,
  a1 as fragment,
  HC as getDirtyPaths,
  WC as getFragment,
  o1 as getVoid,
  i1 as hasBlocks,
  s1 as hasInlines,
  l1 as hasPath,
  u1 as hasTexts,
  c1 as insertBreak,
  Z1 as insertFragment,
  f1 as insertNode,
  aE as insertNodes,
  d1 as insertSoftBreak,
  m1 as insertText,
  g1 as isBlock,
  p1 as isEdge,
  dC as isEditor,
  h1 as isEmpty,
  b1 as isEnd,
  y1 as isNormalizing,
  C1 as isStart,
  E1 as last,
  w1 as leaf,
  S1 as levels,
  oE as liftNodes,
  O1 as marks,
  lE as mergeNodes,
  eE as move,
  uE as moveNodes,
  $1 as next,
  A1 as node,
  B1 as nodes,
  F1 as normalize,
  qC as normalizeNode,
  P1 as parent,
  I1 as path,
  R1 as pathRef,
  N1 as pathRefs,
  j1 as point,
  T1 as pointRef,
  M1 as pointRefs,
  _1 as positions,
  L1 as previous,
  V1 as range,
  k1 as rangeRef,
  z1 as rangeRefs,
  W1 as removeMark,
  cE as removeNodes,
  tE as select,
  fE as setNodes,
  q1 as setNormalizing,
  rE as setPoint,
  nE as setSelection,
  KC as shouldNormalize,
  vE as splitNodes,
  K1 as start,
  U1 as string,
  G1 as unhangRange,
  mE as unsetNodes,
  gE as unwrapNodes,
  aj as useEditor,
  nj as useFocused,
  lf as useReadOnly,
  tj as useSelected,
  eD as useSlate,
  oj as useSlateSelection,
  Hn as useSlateSelector,
  Ut as useSlateStatic,
  rj as useSlateWithV,
  DD as withReact,
  X1 as withoutNormalizing,
  pE as wrapNodes
};
