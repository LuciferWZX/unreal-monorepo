import * as g from "react";
import ne, { useCallback as Ke, useState as ir, useRef as Ge, useReducer as og, useMemo as lr, useEffect as jt, createContext as Gr, useLayoutEffect as ig, useContext as Ut, Component as Jp, memo as e0, forwardRef as Xr, isValidElement as t0, Children as r0, createRef as n0, useImperativeHandle as As, createElement as Lu } from "react";
import * as a0 from "react-dom";
import sg, { createPortal as o0, unstable_batchedUpdates as i0, flushSync as s0 } from "react-dom";
var Ei = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var zu = { exports: {} }, Do = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nf;
function u0() {
  if (nf)
    return Do;
  nf = 1;
  var e = ne, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return Do.Fragment = r, Do.jsx = i, Do.jsxs = i, Do;
}
var wo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var af;
function l0() {
  return af || (af = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ne, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h = Symbol.iterator, f = "@@iterator";
    function m($) {
      if ($ === null || typeof $ != "object")
        return null;
      var ee = h && $[h] || $[f];
      return typeof ee == "function" ? ee : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C($) {
      {
        for (var ee = arguments.length, oe = new Array(ee > 1 ? ee - 1 : 0), xe = 1; xe < ee; xe++)
          oe[xe - 1] = arguments[xe];
        E("error", $, oe);
      }
    }
    function E($, ee, oe) {
      {
        var xe = b.ReactDebugCurrentFrame, _e = xe.getStackAddendum();
        _e !== "" && (ee += "%s", oe = oe.concat([_e]));
        var Ye = oe.map(function(ke) {
          return String(ke);
        });
        Ye.unshift("Warning: " + ee), Function.prototype.apply.call(console[$], console, Ye);
      }
    }
    var D = !1, w = !1, S = !1, O = !1, B = !1, x;
    x = Symbol.for("react.module.reference");
    function F($) {
      return !!(typeof $ == "string" || typeof $ == "function" || $ === n || $ === o || B || $ === a || $ === l || $ === c || O || $ === p || D || w || S || typeof $ == "object" && $ !== null && ($.$$typeof === v || $.$$typeof === d || $.$$typeof === i || $.$$typeof === s || $.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      $.$$typeof === x || $.getModuleId !== void 0));
    }
    function _($, ee, oe) {
      var xe = $.displayName;
      if (xe)
        return xe;
      var _e = ee.displayName || ee.name || "";
      return _e !== "" ? oe + "(" + _e + ")" : oe;
    }
    function N($) {
      return $.displayName || "Context";
    }
    function P($) {
      if ($ == null)
        return null;
      if (typeof $.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof $ == "function")
        return $.displayName || $.name || null;
      if (typeof $ == "string")
        return $;
      switch ($) {
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
      if (typeof $ == "object")
        switch ($.$$typeof) {
          case s:
            var ee = $;
            return N(ee) + ".Consumer";
          case i:
            var oe = $;
            return N(oe._context) + ".Provider";
          case u:
            return _($, $.render, "ForwardRef");
          case d:
            var xe = $.displayName || null;
            return xe !== null ? xe : P($.type) || "Memo";
          case v: {
            var _e = $, Ye = _e._payload, ke = _e._init;
            try {
              return P(ke(Ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, T = 0, k, A, M, V, z, U, G;
    function Q() {
    }
    Q.__reactDisabledLog = !0;
    function R() {
      {
        if (T === 0) {
          k = console.log, A = console.info, M = console.warn, V = console.error, z = console.group, U = console.groupCollapsed, G = console.groupEnd;
          var $ = {
            configurable: !0,
            enumerable: !0,
            value: Q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: $,
            log: $,
            warn: $,
            error: $,
            group: $,
            groupCollapsed: $,
            groupEnd: $
          });
        }
        T++;
      }
    }
    function H() {
      {
        if (T--, T === 0) {
          var $ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, $, {
              value: k
            }),
            info: I({}, $, {
              value: A
            }),
            warn: I({}, $, {
              value: M
            }),
            error: I({}, $, {
              value: V
            }),
            group: I({}, $, {
              value: z
            }),
            groupCollapsed: I({}, $, {
              value: U
            }),
            groupEnd: I({}, $, {
              value: G
            })
          });
        }
        T < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var L = b.ReactCurrentDispatcher, q;
    function re($, ee, oe) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (_e) {
            var xe = _e.stack.trim().match(/\n( *(at )?)/);
            q = xe && xe[1] || "";
          }
        return `
` + q + $;
      }
    }
    var te = !1, ue;
    {
      var se = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new se();
    }
    function ve($, ee) {
      if (!$ || te)
        return "";
      {
        var oe = ue.get($);
        if (oe !== void 0)
          return oe;
      }
      var xe;
      te = !0;
      var _e = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ye;
      Ye = L.current, L.current = null, R();
      try {
        if (ee) {
          var ke = function() {
            throw Error();
          };
          if (Object.defineProperty(ke.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ke, []);
            } catch (It) {
              xe = It;
            }
            Reflect.construct($, [], ke);
          } else {
            try {
              ke.call();
            } catch (It) {
              xe = It;
            }
            $.call(ke.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (It) {
            xe = It;
          }
          $();
        }
      } catch (It) {
        if (It && xe && typeof It.stack == "string") {
          for (var Te = It.stack.split(`
`), bt = xe.stack.split(`
`), pt = Te.length - 1, Le = bt.length - 1; pt >= 1 && Le >= 0 && Te[pt] !== bt[Le]; )
            Le--;
          for (; pt >= 1 && Le >= 0; pt--, Le--)
            if (Te[pt] !== bt[Le]) {
              if (pt !== 1 || Le !== 1)
                do
                  if (pt--, Le--, Le < 0 || Te[pt] !== bt[Le]) {
                    var zt = `
` + Te[pt].replace(" at new ", " at ");
                    return $.displayName && zt.includes("<anonymous>") && (zt = zt.replace("<anonymous>", $.displayName)), typeof $ == "function" && ue.set($, zt), zt;
                  }
                while (pt >= 1 && Le >= 0);
              break;
            }
        }
      } finally {
        te = !1, L.current = Ye, H(), Error.prepareStackTrace = _e;
      }
      var Pr = $ ? $.displayName || $.name : "", Qr = Pr ? re(Pr) : "";
      return typeof $ == "function" && ue.set($, Qr), Qr;
    }
    function le($, ee, oe) {
      return ve($, !1);
    }
    function Y($) {
      var ee = $.prototype;
      return !!(ee && ee.isReactComponent);
    }
    function me($, ee, oe) {
      if ($ == null)
        return "";
      if (typeof $ == "function")
        return ve($, Y($));
      if (typeof $ == "string")
        return re($);
      switch ($) {
        case l:
          return re("Suspense");
        case c:
          return re("SuspenseList");
      }
      if (typeof $ == "object")
        switch ($.$$typeof) {
          case u:
            return le($.render);
          case d:
            return me($.type, ee, oe);
          case v: {
            var xe = $, _e = xe._payload, Ye = xe._init;
            try {
              return me(Ye(_e), ee, oe);
            } catch {
            }
          }
        }
      return "";
    }
    var Ee = Object.prototype.hasOwnProperty, Ae = {}, $e = b.ReactDebugCurrentFrame;
    function fe($) {
      if ($) {
        var ee = $._owner, oe = me($.type, $._source, ee ? ee.type : null);
        $e.setExtraStackFrame(oe);
      } else
        $e.setExtraStackFrame(null);
    }
    function Oe($, ee, oe, xe, _e) {
      {
        var Ye = Function.call.bind(Ee);
        for (var ke in $)
          if (Ye($, ke)) {
            var Te = void 0;
            try {
              if (typeof $[ke] != "function") {
                var bt = Error((xe || "React class") + ": " + oe + " type `" + ke + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof $[ke] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw bt.name = "Invariant Violation", bt;
              }
              Te = $[ke](ee, ke, xe, oe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pt) {
              Te = pt;
            }
            Te && !(Te instanceof Error) && (fe(_e), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", xe || "React class", oe, ke, typeof Te), fe(null)), Te instanceof Error && !(Te.message in Ae) && (Ae[Te.message] = !0, fe(_e), C("Failed %s type: %s", oe, Te.message), fe(null));
          }
      }
    }
    var ge = Array.isArray;
    function pe($) {
      return ge($);
    }
    function he($) {
      {
        var ee = typeof Symbol == "function" && Symbol.toStringTag, oe = ee && $[Symbol.toStringTag] || $.constructor.name || "Object";
        return oe;
      }
    }
    function Fe($) {
      try {
        return Pe($), !1;
      } catch {
        return !0;
      }
    }
    function Pe($) {
      return "" + $;
    }
    function Re($) {
      if (Fe($))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", he($)), Pe($);
    }
    var xt = b.ReactCurrentOwner, ct = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ve, tt, Xe;
    Xe = {};
    function _t($) {
      if (Ee.call($, "ref")) {
        var ee = Object.getOwnPropertyDescriptor($, "ref").get;
        if (ee && ee.isReactWarning)
          return !1;
      }
      return $.ref !== void 0;
    }
    function vt($) {
      if (Ee.call($, "key")) {
        var ee = Object.getOwnPropertyDescriptor($, "key").get;
        if (ee && ee.isReactWarning)
          return !1;
      }
      return $.key !== void 0;
    }
    function Nt($, ee) {
      if (typeof $.ref == "string" && xt.current && ee && xt.current.stateNode !== ee) {
        var oe = P(xt.current.type);
        Xe[oe] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(xt.current.type), $.ref), Xe[oe] = !0);
      }
    }
    function ht($, ee) {
      {
        var oe = function() {
          Ve || (Ve = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ee));
        };
        oe.isReactWarning = !0, Object.defineProperty($, "key", {
          get: oe,
          configurable: !0
        });
      }
    }
    function Ue($, ee) {
      {
        var oe = function() {
          tt || (tt = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ee));
        };
        oe.isReactWarning = !0, Object.defineProperty($, "ref", {
          get: oe,
          configurable: !0
        });
      }
    }
    var rt = function($, ee, oe, xe, _e, Ye, ke) {
      var Te = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: $,
        key: ee,
        ref: oe,
        props: ke,
        // Record the component responsible for creating this element.
        _owner: Ye
      };
      return Te._store = {}, Object.defineProperty(Te._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Te, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: xe
      }), Object.defineProperty(Te, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _e
      }), Object.freeze && (Object.freeze(Te.props), Object.freeze(Te)), Te;
    };
    function qt($, ee, oe, xe, _e) {
      {
        var Ye, ke = {}, Te = null, bt = null;
        oe !== void 0 && (Re(oe), Te = "" + oe), vt(ee) && (Re(ee.key), Te = "" + ee.key), _t(ee) && (bt = ee.ref, Nt(ee, _e));
        for (Ye in ee)
          Ee.call(ee, Ye) && !ct.hasOwnProperty(Ye) && (ke[Ye] = ee[Ye]);
        if ($ && $.defaultProps) {
          var pt = $.defaultProps;
          for (Ye in pt)
            ke[Ye] === void 0 && (ke[Ye] = pt[Ye]);
        }
        if (Te || bt) {
          var Le = typeof $ == "function" ? $.displayName || $.name || "Unknown" : $;
          Te && ht(ke, Le), bt && Ue(ke, Le);
        }
        return rt($, Te, bt, _e, xe, xt.current, ke);
      }
    }
    var Ct = b.ReactCurrentOwner, nt = b.ReactDebugCurrentFrame;
    function Rt($) {
      if ($) {
        var ee = $._owner, oe = me($.type, $._source, ee ? ee.type : null);
        nt.setExtraStackFrame(oe);
      } else
        nt.setExtraStackFrame(null);
    }
    var at;
    at = !1;
    function Dt($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function Qe() {
      {
        if (Ct.current) {
          var $ = P(Ct.current.type);
          if ($)
            return `

Check the render method of \`` + $ + "`.";
        }
        return "";
      }
    }
    function De($) {
      {
        if ($ !== void 0) {
          var ee = $.fileName.replace(/^.*[\\\/]/, ""), oe = $.lineNumber;
          return `

Check your code at ` + ee + ":" + oe + ".";
        }
        return "";
      }
    }
    var We = {};
    function be($) {
      {
        var ee = Qe();
        if (!ee) {
          var oe = typeof $ == "string" ? $ : $.displayName || $.name;
          oe && (ee = `

Check the top-level render call using <` + oe + ">.");
        }
        return ee;
      }
    }
    function we($, ee) {
      {
        if (!$._store || $._store.validated || $.key != null)
          return;
        $._store.validated = !0;
        var oe = be(ee);
        if (We[oe])
          return;
        We[oe] = !0;
        var xe = "";
        $ && $._owner && $._owner !== Ct.current && (xe = " It was passed a child from " + P($._owner.type) + "."), Rt($), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', oe, xe), Rt(null);
      }
    }
    function Ze($, ee) {
      {
        if (typeof $ != "object")
          return;
        if (pe($))
          for (var oe = 0; oe < $.length; oe++) {
            var xe = $[oe];
            Dt(xe) && we(xe, ee);
          }
        else if (Dt($))
          $._store && ($._store.validated = !0);
        else if ($) {
          var _e = m($);
          if (typeof _e == "function" && _e !== $.entries)
            for (var Ye = _e.call($), ke; !(ke = Ye.next()).done; )
              Dt(ke.value) && we(ke.value, ee);
        }
      }
    }
    function Ft($) {
      {
        var ee = $.type;
        if (ee == null || typeof ee == "string")
          return;
        var oe;
        if (typeof ee == "function")
          oe = ee.propTypes;
        else if (typeof ee == "object" && (ee.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ee.$$typeof === d))
          oe = ee.propTypes;
        else
          return;
        if (oe) {
          var xe = P(ee);
          Oe(oe, $.props, "prop", xe, $);
        } else if (ee.PropTypes !== void 0 && !at) {
          at = !0;
          var _e = P(ee);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _e || "Unknown");
        }
        typeof ee.getDefaultProps == "function" && !ee.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Lt($) {
      {
        for (var ee = Object.keys($.props), oe = 0; oe < ee.length; oe++) {
          var xe = ee[oe];
          if (xe !== "children" && xe !== "key") {
            Rt($), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", xe), Rt(null);
            break;
          }
        }
        $.ref !== null && (Rt($), C("Invalid attribute `ref` supplied to `React.Fragment`."), Rt(null));
      }
    }
    function At($, ee, oe, xe, _e, Ye) {
      {
        var ke = F($);
        if (!ke) {
          var Te = "";
          ($ === void 0 || typeof $ == "object" && $ !== null && Object.keys($).length === 0) && (Te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var bt = De(_e);
          bt ? Te += bt : Te += Qe();
          var pt;
          $ === null ? pt = "null" : pe($) ? pt = "array" : $ !== void 0 && $.$$typeof === t ? (pt = "<" + (P($.type) || "Unknown") + " />", Te = " Did you accidentally export a JSX literal instead of a component?") : pt = typeof $, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pt, Te);
        }
        var Le = qt($, ee, oe, _e, Ye);
        if (Le == null)
          return Le;
        if (ke) {
          var zt = ee.children;
          if (zt !== void 0)
            if (xe)
              if (pe(zt)) {
                for (var Pr = 0; Pr < zt.length; Pr++)
                  Ze(zt[Pr], $);
                Object.freeze && Object.freeze(zt);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ze(zt, $);
        }
        return $ === n ? Lt(Le) : Ft(Le), Le;
      }
    }
    function Yr($, ee, oe) {
      return At($, ee, oe, !0);
    }
    function Zr($, ee, oe) {
      return At($, ee, oe, !1);
    }
    var Cr = Zr, vr = Yr;
    wo.Fragment = n, wo.jsx = Cr, wo.jsxs = vr;
  }()), wo;
}
process.env.NODE_ENV === "production" ? zu.exports = u0() : zu.exports = l0();
var je = zu.exports, c0 = v0, ug = "֑-߿יִ-﷽ﹰ-ﻼ", lg = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿", f0 = new RegExp("^[^" + lg + "]*[" + ug + "]"), d0 = new RegExp("^[^" + ug + "]*[" + lg + "]");
function v0(e) {
  return e = String(e || ""), f0.test(e) ? "rtl" : d0.test(e) ? "ltr" : "neutral";
}
const cg = /* @__PURE__ */ Bs(c0);
function g0(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var rc = g0, m0 = typeof Ei == "object" && Ei && Ei.Object === Object && Ei, h0 = m0, p0 = h0, b0 = typeof self == "object" && self && self.Object === Object && self, y0 = p0 || b0 || Function("return this")(), fg = y0, C0 = fg, E0 = function() {
  return C0.Date.now();
}, D0 = E0, w0 = /\s/;
function S0(e) {
  for (var t = e.length; t-- && w0.test(e.charAt(t)); )
    ;
  return t;
}
var O0 = S0, x0 = O0, A0 = /^\s+/;
function B0(e) {
  return e && e.slice(0, x0(e) + 1).replace(A0, "");
}
var F0 = B0, P0 = fg, $0 = P0.Symbol, dg = $0, of = dg, vg = Object.prototype, R0 = vg.hasOwnProperty, T0 = vg.toString, So = of ? of.toStringTag : void 0;
function N0(e) {
  var t = R0.call(e, So), r = e[So];
  try {
    e[So] = void 0;
    var n = !0;
  } catch {
  }
  var a = T0.call(e);
  return n && (t ? e[So] = r : delete e[So]), a;
}
var I0 = N0, M0 = Object.prototype, j0 = M0.toString;
function k0(e) {
  return j0.call(e);
}
var _0 = k0, sf = dg, L0 = I0, z0 = _0, V0 = "[object Null]", H0 = "[object Undefined]", uf = sf ? sf.toStringTag : void 0;
function W0(e) {
  return e == null ? e === void 0 ? H0 : V0 : uf && uf in Object(e) ? L0(e) : z0(e);
}
var K0 = W0;
function U0(e) {
  return e != null && typeof e == "object";
}
var q0 = U0, G0 = K0, X0 = q0, Y0 = "[object Symbol]";
function Z0(e) {
  return typeof e == "symbol" || X0(e) && G0(e) == Y0;
}
var Q0 = Z0, J0 = F0, lf = rc, eb = Q0, cf = NaN, tb = /^[-+]0x[0-9a-f]+$/i, rb = /^0b[01]+$/i, nb = /^0o[0-7]+$/i, ab = parseInt;
function ob(e) {
  if (typeof e == "number")
    return e;
  if (eb(e))
    return cf;
  if (lf(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = lf(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = J0(e);
  var r = rb.test(e);
  return r || nb.test(e) ? ab(e.slice(2), r ? 2 : 8) : tb.test(e) ? cf : +e;
}
var ib = ob, sb = rc, uu = D0, ff = ib, ub = "Expected a function", lb = Math.max, cb = Math.min;
function fb(e, t, r) {
  var n, a, o, i, s, u, l = 0, c = !1, d = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(ub);
  t = ff(t) || 0, sb(r) && (c = !!r.leading, d = "maxWait" in r, o = d ? lb(ff(r.maxWait) || 0, t) : o, v = "trailing" in r ? !!r.trailing : v);
  function p(S) {
    var O = n, B = a;
    return n = a = void 0, l = S, i = e.apply(B, O), i;
  }
  function h(S) {
    return l = S, s = setTimeout(b, t), c ? p(S) : i;
  }
  function f(S) {
    var O = S - u, B = S - l, x = t - O;
    return d ? cb(x, o - B) : x;
  }
  function m(S) {
    var O = S - u, B = S - l;
    return u === void 0 || O >= t || O < 0 || d && B >= o;
  }
  function b() {
    var S = uu();
    if (m(S))
      return C(S);
    s = setTimeout(b, f(S));
  }
  function C(S) {
    return s = void 0, v && n ? p(S) : (n = a = void 0, i);
  }
  function E() {
    s !== void 0 && clearTimeout(s), l = 0, n = u = a = s = void 0;
  }
  function D() {
    return s === void 0 ? i : C(uu());
  }
  function w() {
    var S = uu(), O = m(S);
    if (n = arguments, a = this, u = S, O) {
      if (s === void 0)
        return h(u);
      if (d)
        return clearTimeout(s), s = setTimeout(b, t), p(u);
    }
    return s === void 0 && (s = setTimeout(b, t)), i;
  }
  return w.cancel = E, w.flush = D, w;
}
var gg = fb;
const db = /* @__PURE__ */ Bs(gg);
var vb = gg, gb = rc, mb = "Expected a function";
function hb(e, t, r) {
  var n = !0, a = !0;
  if (typeof e != "function")
    throw new TypeError(mb);
  return gb(r) && (n = "leading" in r ? !!r.leading : n, a = "trailing" in r ? !!r.trailing : a), vb(e, t, {
    leading: n,
    maxWait: t,
    trailing: a
  });
}
var pb = hb;
const bb = /* @__PURE__ */ Bs(pb), df = (e) => typeof e == "object" && e != null && e.nodeType === 1, vf = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", lu = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const r = getComputedStyle(e, null);
    return vf(r.overflowY, t) || vf(r.overflowX, t) || ((n) => {
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
}, Di = (e, t, r, n, a, o, i, s) => o < e && i > t || o > e && i < t ? 0 : o <= e && s <= r || i >= t && s >= r ? o - e - n : i > t && s < r || o < e && s > r ? i - t + a : 0, yb = (e) => {
  const t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, gf = (e, t) => {
  var r, n, a, o;
  if (typeof document > "u")
    return [];
  const { scrollMode: i, block: s, inline: u, boundary: l, skipOverflowHiddenElements: c } = t, d = typeof l == "function" ? l : (k) => k !== l;
  if (!df(e))
    throw new TypeError("Invalid target");
  const v = document.scrollingElement || document.documentElement, p = [];
  let h = e;
  for (; df(h) && d(h); ) {
    if (h = yb(h), h === v) {
      p.push(h);
      break;
    }
    h != null && h === document.body && lu(h) && !lu(document.documentElement) || h != null && lu(h, c) && p.push(h);
  }
  const f = (n = (r = window.visualViewport) == null ? void 0 : r.width) != null ? n : innerWidth, m = (o = (a = window.visualViewport) == null ? void 0 : a.height) != null ? o : innerHeight, { scrollX: b, scrollY: C } = window, { height: E, width: D, top: w, right: S, bottom: O, left: B } = e.getBoundingClientRect(), { top: x, right: F, bottom: _, left: N } = ((k) => {
    const A = window.getComputedStyle(k);
    return { top: parseFloat(A.scrollMarginTop) || 0, right: parseFloat(A.scrollMarginRight) || 0, bottom: parseFloat(A.scrollMarginBottom) || 0, left: parseFloat(A.scrollMarginLeft) || 0 };
  })(e);
  let P = s === "start" || s === "nearest" ? w - x : s === "end" ? O + _ : w + E / 2 - x + _, I = u === "center" ? B + D / 2 - N + F : u === "end" ? S + F : B - N;
  const T = [];
  for (let k = 0; k < p.length; k++) {
    const A = p[k], { height: M, width: V, top: z, right: U, bottom: G, left: Q } = A.getBoundingClientRect();
    if (i === "if-needed" && w >= 0 && B >= 0 && O <= m && S <= f && w >= z && O <= G && B >= Q && S <= U)
      return T;
    const R = getComputedStyle(A), H = parseInt(R.borderLeftWidth, 10), L = parseInt(R.borderTopWidth, 10), q = parseInt(R.borderRightWidth, 10), re = parseInt(R.borderBottomWidth, 10);
    let te = 0, ue = 0;
    const se = "offsetWidth" in A ? A.offsetWidth - A.clientWidth - H - q : 0, ve = "offsetHeight" in A ? A.offsetHeight - A.clientHeight - L - re : 0, le = "offsetWidth" in A ? A.offsetWidth === 0 ? 0 : V / A.offsetWidth : 0, Y = "offsetHeight" in A ? A.offsetHeight === 0 ? 0 : M / A.offsetHeight : 0;
    if (v === A)
      te = s === "start" ? P : s === "end" ? P - m : s === "nearest" ? Di(C, C + m, m, L, re, C + P, C + P + E, E) : P - m / 2, ue = u === "start" ? I : u === "center" ? I - f / 2 : u === "end" ? I - f : Di(b, b + f, f, H, q, b + I, b + I + D, D), te = Math.max(0, te + C), ue = Math.max(0, ue + b);
    else {
      te = s === "start" ? P - z - L : s === "end" ? P - G + re + ve : s === "nearest" ? Di(z, G, M, L, re + ve, P, P + E, E) : P - (z + M / 2) + ve / 2, ue = u === "start" ? I - Q - H : u === "center" ? I - (Q + V / 2) + se / 2 : u === "end" ? I - U + q + se : Di(Q, U, V, H, q + se, I, I + D, D);
      const { scrollLeft: me, scrollTop: Ee } = A;
      te = Y === 0 ? 0 : Math.max(0, Math.min(Ee + te / Y, A.scrollHeight - M / Y + ve)), ue = le === 0 ? 0 : Math.max(0, Math.min(me + ue / le, A.scrollWidth - V / le + se)), P += Ee - te, I += me - ue;
    }
    T.push({ el: A, top: te, left: ue });
  }
  return T;
}, Cb = (e) => e === !1 ? { block: "end", inline: "nearest" } : ((t) => t === Object(t) && Object.keys(t).length !== 0)(e) ? e : { block: "start", inline: "nearest" };
function Eb(e, t) {
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
    return t.behavior(gf(e, t));
  const n = typeof t == "boolean" || t == null ? void 0 : t.behavior;
  for (const { el: a, top: o, left: i } of gf(e, Cb(t))) {
    const s = o - r.top + r.bottom, u = i - r.left + r.right;
    a.scroll({ top: s, left: u, behavior: n });
  }
}
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function mf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Zt(e) {
  var t, r;
  return mf(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (r = t.prototype, !(mf(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
var mg = Symbol.for("immer-nothing"), hf = Symbol.for("immer-draftable"), Ar = Symbol.for("immer-state"), Db = process.env.NODE_ENV !== "production" ? [
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
function mr(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = Db[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Qa = Object.getPrototypeOf;
function ga(e) {
  return !!e && !!e[Ar];
}
function ma(e) {
  var t;
  return e ? hg(e) || Array.isArray(e) || !!e[hf] || !!((t = e.constructor) != null && t[hf]) || Ps(e) || $s(e) : !1;
}
var wb = Object.prototype.constructor.toString();
function hg(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Qa(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === wb;
}
function Ho(e, t) {
  Fs(e) === 0 ? Object.entries(e).forEach(([r, n]) => {
    t(r, n, e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function Fs(e) {
  const t = e[Ar];
  return t ? t.type_ : Array.isArray(e) ? 1 : Ps(e) ? 2 : $s(e) ? 3 : 0;
}
function Vu(e, t) {
  return Fs(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function pg(e, t, r) {
  const n = Fs(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function Sb(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ps(e) {
  return e instanceof Map;
}
function $s(e) {
  return e instanceof Set;
}
function Qn(e) {
  return e.copy_ || e.base_;
}
function Hu(e, t) {
  if (Ps(e))
    return new Map(e);
  if ($s(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && hg(e))
    return Qa(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const r = Object.getOwnPropertyDescriptors(e);
  delete r[Ar];
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
  return Object.create(Qa(e), r);
}
function nc(e, t = !1) {
  return Rs(e) || ga(e) || !ma(e) || (Fs(e) > 1 && (e.set = e.add = e.clear = e.delete = Ob), Object.freeze(e), t && Ho(e, (r, n) => nc(n, !0))), e;
}
function Ob() {
  mr(2);
}
function Rs(e) {
  return Object.isFrozen(e);
}
var xb = {};
function ha(e) {
  const t = xb[e];
  return t || mr(0, e), t;
}
var Wo;
function bg() {
  return Wo;
}
function Ab(e, t) {
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
function pf(e, t) {
  t && (ha("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Wu(e) {
  Ku(e), e.drafts_.forEach(Bb), e.drafts_ = null;
}
function Ku(e) {
  e === Wo && (Wo = e.parent_);
}
function bf(e) {
  return Wo = Ab(Wo, e);
}
function Bb(e) {
  const t = e[Ar];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function yf(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[Ar].modified_ && (Wu(t), mr(4)), ma(e) && (e = os(t, e), t.parent_ || is(t, e)), t.patches_ && ha("Patches").generateReplacementPatches_(
    r[Ar].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = os(t, r, []), Wu(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== mg ? e : void 0;
}
function os(e, t, r) {
  if (Rs(t))
    return t;
  const n = t[Ar];
  if (!n)
    return Ho(
      t,
      (a, o) => Cf(e, n, t, a, o, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return is(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const a = n.copy_;
    let o = a, i = !1;
    n.type_ === 3 && (o = new Set(a), a.clear(), i = !0), Ho(
      o,
      (s, u) => Cf(e, n, a, s, u, r, i)
    ), is(e, a, !1), r && e.patches_ && ha("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function Cf(e, t, r, n, a, o, i) {
  if (process.env.NODE_ENV !== "production" && a === r && mr(5), ga(a)) {
    const s = o && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Vu(t.assigned_, n) ? o.concat(n) : void 0, u = os(e, a, s);
    if (pg(r, n, u), ga(u))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    i && r.add(a);
  if (ma(a) && !Rs(a)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    os(e, a), (!t || !t.scope_.parent_) && is(e, a);
  }
}
function is(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && nc(t, r);
}
function Fb(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : bg(),
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
  let a = n, o = ac;
  r && (a = [n], o = Ko);
  const { revoke: i, proxy: s } = Proxy.revocable(a, o);
  return n.draft_ = s, n.revoke_ = i, s;
}
var ac = {
  get(e, t) {
    if (t === Ar)
      return e;
    const r = Qn(e);
    if (!Vu(r, t))
      return Pb(e, r, t);
    const n = r[t];
    return e.finalized_ || !ma(n) ? n : n === cu(e.base_, t) ? (fu(e), e.copy_[t] = qu(n, e)) : n;
  },
  has(e, t) {
    return t in Qn(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Qn(e));
  },
  set(e, t, r) {
    const n = yg(Qn(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const a = cu(Qn(e), t), o = a == null ? void 0 : a[Ar];
      if (o && o.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (Sb(r, a) && (r !== void 0 || Vu(e.base_, t)))
        return !0;
      fu(e), Uu(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return cu(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, fu(e), Uu(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = Qn(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    mr(11);
  },
  getPrototypeOf(e) {
    return Qa(e.base_);
  },
  setPrototypeOf() {
    mr(12);
  }
}, Ko = {};
Ho(ac, (e, t) => {
  Ko[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Ko.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && mr(13), Ko.set.call(this, e, t, void 0);
};
Ko.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && mr(14), ac.set.call(this, e[0], t, r, e[0]);
};
function cu(e, t) {
  const r = e[Ar];
  return (r ? Qn(r) : e)[t];
}
function Pb(e, t, r) {
  var a;
  const n = yg(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (a = n.get) == null ? void 0 : a.call(e.draft_)
  ) : void 0;
}
function yg(e, t) {
  if (!(t in e))
    return;
  let r = Qa(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Qa(r);
  }
}
function Uu(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Uu(e.parent_));
}
function fu(e) {
  e.copy_ || (e.copy_ = Hu(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var $b = class {
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
      typeof r != "function" && mr(6), n !== void 0 && typeof n != "function" && mr(7);
      let a;
      if (ma(t)) {
        const o = bf(this), i = qu(t, void 0);
        let s = !0;
        try {
          a = r(i), s = !1;
        } finally {
          s ? Wu(o) : Ku(o);
        }
        return pf(o, n), yf(a, o);
      } else if (!t || typeof t != "object") {
        if (a = r(t), a === void 0 && (a = t), a === mg && (a = void 0), this.autoFreeze_ && nc(a, !0), n) {
          const o = [], i = [];
          ha("Patches").generateReplacementPatches_(t, a, o, i), n(o, i);
        }
        return a;
      } else
        mr(1, t);
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
    ma(e) || mr(8), ga(e) && (e = Rb(e));
    const t = bf(this), r = qu(e, void 0);
    return r[Ar].isManual_ = !0, Ku(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[Ar];
    (!r || !r.isManual_) && mr(9);
    const { scope_: n } = r;
    return pf(n, t), yf(void 0, n);
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
    const n = ha("Patches").applyPatches_;
    return ga(e) ? n(e, t) : this.produce(
      e,
      (a) => n(a, t)
    );
  }
};
function qu(e, t) {
  const r = Ps(e) ? ha("MapSet").proxyMap_(e, t) : $s(e) ? ha("MapSet").proxySet_(e, t) : Fb(e, t);
  return (t ? t.scope_ : bg()).drafts_.push(r), r;
}
function Rb(e) {
  return ga(e) || mr(10, e), Cg(e);
}
function Cg(e) {
  if (!ma(e) || Rs(e))
    return e;
  const t = e[Ar];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Hu(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = Hu(e, !0);
  return Ho(r, (n, a) => {
    pg(r, n, Cg(a));
  }), t && (t.finalized_ = !1), r;
}
var Br = new $b(), oc = Br.produce;
Br.produceWithPatches.bind(
  Br
);
Br.setAutoFreeze.bind(Br);
Br.setUseStrictShallowCopy.bind(Br);
Br.applyPatches.bind(Br);
var Ef = Br.createDraft.bind(Br), Df = Br.finishDraft.bind(Br), Tb = {
  transform(e, t) {
    var {
      current: r,
      affinity: n
    } = e;
    if (r != null) {
      var a = j.transform(r, t, {
        affinity: n
      });
      e.current = a, a == null && e.unref();
    }
  }
}, Nb = {
  transform(e, t) {
    var {
      current: r,
      affinity: n
    } = e;
    if (r != null) {
      var a = ze.transform(r, t, {
        affinity: n
      });
      e.current = a, a == null && e.unref();
    }
  }
}, Ib = {
  transform(e, t) {
    var {
      current: r,
      affinity: n
    } = e;
    if (r != null) {
      var a = K.transform(r, t, {
        affinity: n
      });
      e.current = a, a == null && e.unref();
    }
  }
}, ss = /* @__PURE__ */ new WeakMap(), us = /* @__PURE__ */ new WeakMap(), Io = /* @__PURE__ */ new WeakMap(), Eg = /* @__PURE__ */ new WeakMap(), wf = /* @__PURE__ */ new WeakMap(), Sf = /* @__PURE__ */ new WeakMap(), Of = /* @__PURE__ */ new WeakMap(), j = {
  ancestors(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: r = !1
    } = t, n = j.levels(e, t);
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
    return j.equals(n, a) && o > i;
  },
  endsAt(e, t) {
    var r = e.length, n = e.slice(0, r), a = t.slice(0, r);
    return j.equals(n, a);
  },
  endsBefore(e, t) {
    var r = e.length - 1, n = e.slice(0, r), a = t.slice(0, r), o = e[r], i = t[r];
    return j.equals(n, a) && o < i;
  },
  equals(e, t) {
    return e.length === t.length && e.every((r, n) => r === t[n]);
  },
  hasPrevious(e) {
    return e[e.length - 1] > 0;
  },
  isAfter(e, t) {
    return j.compare(e, t) === 1;
  },
  isAncestor(e, t) {
    return e.length < t.length && j.compare(e, t) === 0;
  },
  isBefore(e, t) {
    return j.compare(e, t) === -1;
  },
  isChild(e, t) {
    return e.length === t.length + 1 && j.compare(e, t) === 0;
  },
  isCommon(e, t) {
    return e.length <= t.length && j.compare(e, t) === 0;
  },
  isDescendant(e, t) {
    return e.length > t.length && j.compare(e, t) === 0;
  },
  isParent(e, t) {
    return e.length + 1 === t.length && j.compare(e, t) === 0;
  },
  isPath(e) {
    return Array.isArray(e) && (e.length === 0 || typeof e[0] == "number");
  },
  isSibling(e, t) {
    if (e.length !== t.length)
      return !1;
    var r = e.slice(0, -1), n = t.slice(0, -1), a = e[e.length - 1], o = t[t.length - 1];
    return a !== o && j.equals(r, n);
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
    if (!j.isAncestor(t, e) && !j.equals(e, t))
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
        (j.equals(o, n) || j.endsBefore(o, n) || j.isAncestor(o, n)) && (n[o.length - 1] += 1);
        break;
      }
      case "remove_node": {
        var {
          path: i
        } = t;
        if (j.equals(i, n) || j.isAncestor(i, n))
          return null;
        j.endsBefore(i, n) && (n[i.length - 1] -= 1);
        break;
      }
      case "merge_node": {
        var {
          path: s,
          position: u
        } = t;
        j.equals(s, n) || j.endsBefore(s, n) ? n[s.length - 1] -= 1 : j.isAncestor(s, n) && (n[s.length - 1] -= 1, n[s.length] += u);
        break;
      }
      case "split_node": {
        var {
          path: l,
          position: c
        } = t;
        if (j.equals(l, n)) {
          if (a === "forward")
            n[n.length - 1] += 1;
          else if (a !== "backward")
            return null;
        } else
          j.endsBefore(l, n) ? n[l.length - 1] += 1 : j.isAncestor(l, n) && e[l.length] >= c && (n[l.length - 1] += 1, n[l.length] -= c);
        break;
      }
      case "move_node": {
        var {
          path: d,
          newPath: v
        } = t;
        if (j.equals(d, v))
          return n;
        if (j.isAncestor(d, n) || j.equals(d, n)) {
          var p = v.slice();
          return j.endsBefore(d, v) && d.length < v.length && (p[d.length - 1] -= 1), p.concat(n.slice(d.length));
        } else
          j.isSibling(d, v) && (j.isAncestor(v, n) || j.equals(v, n)) ? j.endsBefore(d, n) ? n[d.length - 1] -= 1 : n[d.length - 1] += 1 : j.endsBefore(v, n) || j.equals(v, n) || j.isAncestor(v, n) ? (j.endsBefore(d, n) && (n[d.length - 1] -= 1), n[v.length - 1] += 1) : j.endsBefore(d, n) && (j.equals(v, n) && (n[v.length - 1] += 1), n[d.length - 1] -= 1);
        break;
      }
    }
    return n;
  }
};
function Uo(e) {
  "@babel/helpers - typeof";
  return Uo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Uo(e);
}
function Mb(e, t) {
  if (Uo(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Uo(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jb(e) {
  var t = Mb(e, "string");
  return Uo(t) === "symbol" ? t : String(t);
}
function fr(e, t, r) {
  return t = jb(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function xf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Oo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xf(Object(r), !0).forEach(function(n) {
      fr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var kb = (e, t, r) => {
  switch (r.type) {
    case "insert_node": {
      var {
        path: n,
        node: a
      } = r, o = ie.parent(e, n), i = n[n.length - 1];
      if (i > o.children.length)
        throw new Error('Cannot apply an "insert_node" operation at path ['.concat(n, "] because the destination is past the end of the node."));
      if (o.children.splice(i, 0, a), t)
        for (var [s, u] of K.points(t))
          t[u] = ze.transform(s, r);
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
      var v = ie.leaf(e, l), p = v.text.slice(0, c), h = v.text.slice(c);
      if (v.text = p + d + h, t)
        for (var [f, m] of K.points(t))
          t[m] = ze.transform(f, r);
      break;
    }
    case "merge_node": {
      var {
        path: b
      } = r, C = ie.get(e, b), E = j.previous(b), D = ie.get(e, E), w = ie.parent(e, b), S = b[b.length - 1];
      if (ye.isText(C) && ye.isText(D))
        D.text += C.text;
      else if (!ye.isText(C) && !ye.isText(D))
        D.children.push(...C.children);
      else
        throw new Error('Cannot apply a "merge_node" operation at path ['.concat(b, "] to nodes of different interfaces: ").concat(Wt.stringify(C), " ").concat(Wt.stringify(D)));
      if (w.children.splice(S, 1), t)
        for (var [O, B] of K.points(t))
          t[B] = ze.transform(O, r);
      break;
    }
    case "move_node": {
      var {
        path: x,
        newPath: F
      } = r;
      if (j.isAncestor(x, F))
        throw new Error("Cannot move a path [".concat(x, "] to new path [").concat(F, "] because the destination is inside itself."));
      var _ = ie.get(e, x), N = ie.parent(e, x), P = x[x.length - 1];
      N.children.splice(P, 1);
      var I = j.transform(x, r), T = ie.get(e, j.parent(I)), k = I[I.length - 1];
      if (T.children.splice(k, 0, _), t)
        for (var [A, M] of K.points(t))
          t[M] = ze.transform(A, r);
      break;
    }
    case "remove_node": {
      var {
        path: V
      } = r, z = V[V.length - 1], U = ie.parent(e, V);
      if (U.children.splice(z, 1), t)
        for (var [G, Q] of K.points(t)) {
          var R = ze.transform(G, r);
          if (t != null && R != null)
            t[Q] = R;
          else {
            var H = void 0, L = void 0;
            for (var [q, re] of ie.texts(e))
              if (j.compare(re, V) === -1)
                H = [q, re];
              else {
                L = [q, re];
                break;
              }
            var te = !1;
            H && L && (j.equals(L[1], V) ? te = !j.hasPrevious(L[1]) : te = j.common(H[1], V).length < j.common(L[1], V).length), H && !te ? (G.path = H[1], G.offset = H[0].text.length) : L ? (G.path = L[1], G.offset = 0) : t = null;
          }
        }
      break;
    }
    case "remove_text": {
      var {
        path: ue,
        offset: se,
        text: ve
      } = r;
      if (ve.length === 0)
        break;
      var le = ie.leaf(e, ue), Y = le.text.slice(0, se), me = le.text.slice(se + ve.length);
      if (le.text = Y + me, t)
        for (var [Ee, Ae] of K.points(t))
          t[Ae] = ze.transform(Ee, r);
      break;
    }
    case "set_node": {
      var {
        path: $e,
        properties: fe,
        newProperties: Oe
      } = r;
      if ($e.length === 0)
        throw new Error("Cannot set properties on the root node!");
      var ge = ie.get(e, $e);
      for (var pe in Oe) {
        if (pe === "children" || pe === "text")
          throw new Error('Cannot set the "'.concat(pe, '" property of nodes!'));
        var he = Oe[pe];
        he == null ? delete ge[pe] : ge[pe] = he;
      }
      for (var Fe in fe)
        Oe.hasOwnProperty(Fe) || delete ge[Fe];
      break;
    }
    case "set_selection": {
      var {
        newProperties: Pe
      } = r;
      if (Pe == null)
        t = Pe;
      else {
        if (t == null) {
          if (!K.isRange(Pe))
            throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(Wt.stringify(Pe), " when there is no current selection."));
          t = Oo({}, Pe);
        }
        for (var Re in Pe) {
          var xt = Pe[Re];
          if (xt == null) {
            if (Re === "anchor" || Re === "focus")
              throw new Error('Cannot remove the "'.concat(Re, '" selection property'));
            delete t[Re];
          } else
            t[Re] = xt;
        }
      }
      break;
    }
    case "split_node": {
      var {
        path: ct,
        position: Ve,
        properties: tt
      } = r;
      if (ct.length === 0)
        throw new Error('Cannot apply a "split_node" operation at path ['.concat(ct, "] because the root node cannot be split."));
      var Xe = ie.get(e, ct), _t = ie.parent(e, ct), vt = ct[ct.length - 1], Nt;
      if (ye.isText(Xe)) {
        var ht = Xe.text.slice(0, Ve), Ue = Xe.text.slice(Ve);
        Xe.text = ht, Nt = Oo(Oo({}, tt), {}, {
          text: Ue
        });
      } else {
        var rt = Xe.children.slice(0, Ve), qt = Xe.children.slice(Ve);
        Xe.children = rt, Nt = Oo(Oo({}, tt), {}, {
          children: qt
        });
      }
      if (_t.children.splice(vt + 1, 0, Nt), t)
        for (var [Ct, nt] of K.points(t))
          t[nt] = ze.transform(Ct, r);
      break;
    }
  }
  return t;
}, _b = {
  transform(e, t) {
    e.children = Ef(e.children);
    var r = e.selection && Ef(e.selection);
    try {
      r = kb(e, r, t);
    } finally {
      e.children = Df(e.children), r ? e.selection = ga(r) ? Df(r) : r : e.selection = null;
    }
  }
}, Lb = {
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
}, zb = {
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
}, Dg = (e, t) => {
  for (var r in e) {
    var n = e[r], a = t[r];
    if (Zt(n) && Zt(a)) {
      if (!Dg(n, a))
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
function Vb(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Dn(e, t) {
  if (e == null)
    return {};
  var r = Vb(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
var Hb = ["anchor", "focus"];
function Af(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Af(Object(r), !0).forEach(function(n) {
      fr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Af(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var K = {
  edges(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: r = !1
    } = t, {
      anchor: n,
      focus: a
    } = e;
    return K.isBackward(e) === r ? [n, a] : [a, n];
  },
  end(e) {
    var [, t] = K.edges(e);
    return t;
  },
  equals(e, t) {
    return ze.equals(e.anchor, t.anchor) && ze.equals(e.focus, t.focus);
  },
  includes(e, t) {
    if (K.isRange(t)) {
      if (K.includes(e, t.anchor) || K.includes(e, t.focus))
        return !0;
      var [r, n] = K.edges(e), [a, o] = K.edges(t);
      return ze.isBefore(r, a) && ze.isAfter(n, o);
    }
    var [i, s] = K.edges(e), u = !1, l = !1;
    return ze.isPoint(t) ? (u = ze.compare(t, i) >= 0, l = ze.compare(t, s) <= 0) : (u = j.compare(t, i.path) >= 0, l = j.compare(t, s.path) <= 0), u && l;
  },
  intersection(e, t) {
    var r = Dn(e, Hb), [n, a] = K.edges(e), [o, i] = K.edges(t), s = ze.isBefore(n, o) ? o : n, u = ze.isBefore(a, i) ? a : i;
    return ze.isBefore(u, s) ? null : Wb({
      anchor: s,
      focus: u
    }, r);
  },
  isBackward(e) {
    var {
      anchor: t,
      focus: r
    } = e;
    return ze.isAfter(t, r);
  },
  isCollapsed(e) {
    var {
      anchor: t,
      focus: r
    } = e;
    return ze.equals(t, r);
  },
  isExpanded(e) {
    return !K.isCollapsed(e);
  },
  isForward(e) {
    return !K.isBackward(e);
  },
  isRange(e) {
    return Zt(e) && ze.isPoint(e.anchor) && ze.isPoint(e.focus);
  },
  *points(e) {
    yield [e.anchor, "anchor"], yield [e.focus, "focus"];
  },
  start(e) {
    var [t] = K.edges(e);
    return t;
  },
  transform(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return oc(e, (n) => {
      if (n === null)
        return null;
      var {
        affinity: a = "inward"
      } = r, o, i;
      if (a === "inward") {
        var s = K.isCollapsed(n);
        K.isForward(n) ? (o = "forward", i = s ? o : "backward") : (o = "backward", i = s ? o : "forward");
      } else
        a === "outward" ? K.isForward(n) ? (o = "backward", i = "forward") : (o = "forward", i = "backward") : (o = a, i = a);
      var u = ze.transform(n.anchor, t, {
        affinity: o
      }), l = ze.transform(n.focus, t, {
        affinity: i
      });
      if (!u || !l)
        return null;
      n.anchor = u, n.focus = l;
    });
  }
}, Bf = (e) => Zt(e) && ie.isNodeList(e.children) && !y.isEditor(e), ce = {
  isAncestor(e) {
    return Zt(e) && ie.isNodeList(e.children);
  },
  isElement: Bf,
  isElementList(e) {
    return Array.isArray(e) && e.every((t) => ce.isElement(t));
  },
  isElementProps(e) {
    return e.children !== void 0;
  },
  isElementType: function(t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
    return Bf(t) && t[n] === r;
  },
  matches(e, t) {
    for (var r in t)
      if (r !== "children" && e[r] !== t[r])
        return !1;
    return !0;
  }
}, Kb = ["children"], Ub = ["text"], Ff = /* @__PURE__ */ new WeakMap(), ie = {
  ancestor(e, t) {
    var r = ie.get(e, t);
    if (ye.isText(r))
      throw new Error("Cannot get the ancestor node at path [".concat(t, "] because it refers to a text node instead: ").concat(Wt.stringify(r)));
    return r;
  },
  ancestors(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var n of j.ancestors(t, r)) {
        var a = ie.ancestor(e, n), o = [a, n];
        yield o;
      }
    }();
  },
  child(e, t) {
    if (ye.isText(e))
      throw new Error("Cannot get the child of a text node: ".concat(Wt.stringify(e)));
    var r = e.children[t];
    if (r == null)
      throw new Error("Cannot get child at index `".concat(t, "` in node: ").concat(Wt.stringify(e)));
    return r;
  },
  children(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var {
        reverse: n = !1
      } = r, a = ie.ancestor(e, t), {
        children: o
      } = a, i = n ? o.length - 1 : 0; n ? i >= 0 : i < o.length; ) {
        var s = ie.child(a, i), u = t.concat(i);
        yield [s, u], i = n ? i - 1 : i + 1;
      }
    }();
  },
  common(e, t, r) {
    var n = j.common(t, r), a = ie.get(e, n);
    return [a, n];
  },
  descendant(e, t) {
    var r = ie.get(e, t);
    if (y.isEditor(r))
      throw new Error("Cannot get the descendant node at path [".concat(t, "] because it refers to the root editor node instead: ").concat(Wt.stringify(r)));
    return r;
  },
  descendants(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of ie.nodes(e, t))
        n.length !== 0 && (yield [r, n]);
    }();
  },
  elements(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of ie.nodes(e, t))
        ce.isElement(r) && (yield [r, n]);
    }();
  },
  extractProps(e) {
    if (ce.isAncestor(e)) {
      var t = Dn(e, Kb);
      return t;
    } else {
      var t = Dn(e, Ub);
      return t;
    }
  },
  first(e, t) {
    for (var r = t.slice(), n = ie.get(e, r); n && !(ye.isText(n) || n.children.length === 0); )
      n = n.children[0], r.push(0);
    return [n, r];
  },
  fragment(e, t) {
    if (ye.isText(e))
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(Wt.stringify(e)));
    var r = oc({
      children: e.children
    }, (n) => {
      var [a, o] = K.edges(t), i = ie.nodes(n, {
        reverse: !0,
        pass: (v) => {
          var [, p] = v;
          return !K.includes(t, p);
        }
      });
      for (var [, s] of i) {
        if (!K.includes(t, s)) {
          var u = ie.parent(n, s), l = s[s.length - 1];
          u.children.splice(l, 1);
        }
        if (j.equals(s, o.path)) {
          var c = ie.leaf(n, s);
          c.text = c.text.slice(0, o.offset);
        }
        if (j.equals(s, a.path)) {
          var d = ie.leaf(n, s);
          d.text = d.text.slice(a.offset);
        }
      }
      y.isEditor(n) && (n.selection = null);
    });
    return r.children;
  },
  get(e, t) {
    for (var r = e, n = 0; n < t.length; n++) {
      var a = t[n];
      if (ye.isText(r) || !r.children[a])
        throw new Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(Wt.stringify(e)));
      r = r.children[a];
    }
    return r;
  },
  has(e, t) {
    for (var r = e, n = 0; n < t.length; n++) {
      var a = t[n];
      if (ye.isText(r) || !r.children[a])
        return !1;
      r = r.children[a];
    }
    return !0;
  },
  isNode(e) {
    return ye.isText(e) || ce.isElement(e) || y.isEditor(e);
  },
  isNodeList(e) {
    if (!Array.isArray(e))
      return !1;
    var t = Ff.get(e);
    if (t !== void 0)
      return t;
    var r = e.every((n) => ie.isNode(n));
    return Ff.set(e, r), r;
  },
  last(e, t) {
    for (var r = t.slice(), n = ie.get(e, r); n && !(ye.isText(n) || n.children.length === 0); ) {
      var a = n.children.length - 1;
      n = n.children[a], r.push(a);
    }
    return [n, r];
  },
  leaf(e, t) {
    var r = ie.get(e, t);
    if (!ye.isText(r))
      throw new Error("Cannot get the leaf node at path [".concat(t, "] because it refers to a non-leaf node: ").concat(Wt.stringify(r)));
    return r;
  },
  levels(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var n of j.levels(t, r)) {
        var a = ie.get(e, n);
        yield [a, n];
      }
    }();
  },
  matches(e, t) {
    return ce.isElement(e) && ce.isElementProps(t) && ce.matches(e, t) || ye.isText(e) && ye.isTextProps(t) && ye.matches(e, t);
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
      } = t, i = /* @__PURE__ */ new Set(), s = [], u = e; !(o && (n ? j.isBefore(s, o) : j.isAfter(s, o))); ) {
        if (i.has(u) || (yield [u, s]), !i.has(u) && !ye.isText(u) && u.children.length !== 0 && (r == null || r([u, s]) === !1)) {
          i.add(u);
          var l = n ? u.children.length - 1 : 0;
          j.isAncestor(s, a) && (l = a[s.length]), s = s.concat(l), u = ie.get(e, s);
          continue;
        }
        if (s.length === 0)
          break;
        if (!n) {
          var c = j.next(s);
          if (ie.has(e, c)) {
            s = c, u = ie.get(e, s);
            continue;
          }
        }
        if (n && s[s.length - 1] !== 0) {
          var d = j.previous(s);
          s = d, u = ie.get(e, s);
          continue;
        }
        s = j.parent(s), u = ie.get(e, s), i.add(u);
      }
    }();
  },
  parent(e, t) {
    var r = j.parent(t), n = ie.get(e, r);
    if (ye.isText(n))
      throw new Error("Cannot get the parent of path [".concat(t, "] because it does not exist in the root."));
    return n;
  },
  string(e) {
    return ye.isText(e) ? e.text : e.children.map(ie.string).join("");
  },
  texts(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of ie.nodes(e, t))
        ye.isText(r) && (yield [r, n]);
    }();
  }
};
function Pf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pf(Object(r), !0).forEach(function(n) {
      fr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var kn = {
  isNodeOperation(e) {
    return kn.isOperation(e) && e.type.endsWith("_node");
  },
  isOperation(e) {
    if (!Zt(e))
      return !1;
    switch (e.type) {
      case "insert_node":
        return j.isPath(e.path) && ie.isNode(e.node);
      case "insert_text":
        return typeof e.offset == "number" && typeof e.text == "string" && j.isPath(e.path);
      case "merge_node":
        return typeof e.position == "number" && j.isPath(e.path) && Zt(e.properties);
      case "move_node":
        return j.isPath(e.path) && j.isPath(e.newPath);
      case "remove_node":
        return j.isPath(e.path) && ie.isNode(e.node);
      case "remove_text":
        return typeof e.offset == "number" && typeof e.text == "string" && j.isPath(e.path);
      case "set_node":
        return j.isPath(e.path) && Zt(e.properties) && Zt(e.newProperties);
      case "set_selection":
        return e.properties === null && K.isRange(e.newProperties) || e.newProperties === null && K.isRange(e.properties) || Zt(e.properties) && Zt(e.newProperties);
      case "split_node":
        return j.isPath(e.path) && typeof e.position == "number" && Zt(e.properties);
      default:
        return !1;
    }
  },
  isOperationList(e) {
    return Array.isArray(e) && e.every((t) => kn.isOperation(t));
  },
  isSelectionOperation(e) {
    return kn.isOperation(e) && e.type.endsWith("_selection");
  },
  isTextOperation(e) {
    return kn.isOperation(e) && e.type.endsWith("_text");
  },
  inverse(e) {
    switch (e.type) {
      case "insert_node":
        return wt(wt({}, e), {}, {
          type: "remove_node"
        });
      case "insert_text":
        return wt(wt({}, e), {}, {
          type: "remove_text"
        });
      case "merge_node":
        return wt(wt({}, e), {}, {
          type: "split_node",
          path: j.previous(e.path)
        });
      case "move_node": {
        var {
          newPath: t,
          path: r
        } = e;
        if (j.equals(t, r))
          return e;
        if (j.isSibling(r, t))
          return wt(wt({}, e), {}, {
            path: t,
            newPath: r
          });
        var n = j.transform(r, e), a = j.transform(j.next(r), e);
        return wt(wt({}, e), {}, {
          path: n,
          newPath: a
        });
      }
      case "remove_node":
        return wt(wt({}, e), {}, {
          type: "insert_node"
        });
      case "remove_text":
        return wt(wt({}, e), {}, {
          type: "insert_text"
        });
      case "set_node": {
        var {
          properties: o,
          newProperties: i
        } = e;
        return wt(wt({}, e), {}, {
          properties: i,
          newProperties: o
        });
      }
      case "set_selection": {
        var {
          properties: s,
          newProperties: u
        } = e;
        return s == null ? wt(wt({}, e), {}, {
          properties: u,
          newProperties: null
        }) : u == null ? wt(wt({}, e), {}, {
          properties: null,
          newProperties: s
        }) : wt(wt({}, e), {}, {
          properties: u,
          newProperties: s
        });
      }
      case "split_node":
        return wt(wt({}, e), {}, {
          type: "merge_node",
          path: j.next(e.path)
        });
    }
  }
}, $f = /* @__PURE__ */ new WeakMap(), qb = (e) => {
  var t = $f.get(e);
  if (t !== void 0)
    return t;
  if (!Zt(e))
    return !1;
  var r = typeof e.addMark == "function" && typeof e.apply == "function" && typeof e.deleteFragment == "function" && typeof e.insertBreak == "function" && typeof e.insertSoftBreak == "function" && typeof e.insertFragment == "function" && typeof e.insertNode == "function" && typeof e.insertText == "function" && typeof e.isElementReadOnly == "function" && typeof e.isInline == "function" && typeof e.isSelectable == "function" && typeof e.isVoid == "function" && typeof e.normalizeNode == "function" && typeof e.onChange == "function" && typeof e.removeMark == "function" && typeof e.getDirtyPaths == "function" && (e.marks === null || Zt(e.marks)) && (e.selection === null || K.isRange(e.selection)) && ie.isNodeList(e.children) && kn.isOperationList(e.operations);
  return $f.set(e, r), r;
}, y = {
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
    return qb(e);
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
}, Gb = {
  isSpan(e) {
    return Array.isArray(e) && e.length === 2 && e.every(j.isPath);
  }
};
function Rf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Tf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rf(Object(r), !0).forEach(function(n) {
      fr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var ze = {
  compare(e, t) {
    var r = j.compare(e.path, t.path);
    return r === 0 ? e.offset < t.offset ? -1 : e.offset > t.offset ? 1 : 0 : r;
  },
  isAfter(e, t) {
    return ze.compare(e, t) === 1;
  },
  isBefore(e, t) {
    return ze.compare(e, t) === -1;
  },
  equals(e, t) {
    return e.offset === t.offset && j.equals(e.path, t.path);
  },
  isPoint(e) {
    return Zt(e) && typeof e.offset == "number" && j.isPath(e.path);
  },
  transform(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return oc(e, (n) => {
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
          n.path = j.transform(o, t, r);
          break;
        }
        case "insert_text": {
          j.equals(t.path, o) && (t.offset < i || t.offset === i && a === "forward") && (n.offset += t.text.length);
          break;
        }
        case "merge_node": {
          j.equals(t.path, o) && (n.offset += t.position), n.path = j.transform(o, t, r);
          break;
        }
        case "remove_text": {
          j.equals(t.path, o) && t.offset <= i && (n.offset -= Math.min(i - t.offset, t.text.length));
          break;
        }
        case "remove_node": {
          if (j.equals(t.path, o) || j.isAncestor(t.path, o))
            return null;
          n.path = j.transform(o, t, r);
          break;
        }
        case "split_node": {
          if (j.equals(t.path, o)) {
            if (t.position === i && a == null)
              return null;
            (t.position < i || t.position === i && a === "forward") && (n.offset -= t.position, n.path = j.transform(o, t, Tf(Tf({}, r), {}, {
              affinity: "forward"
            })));
          } else
            n.path = j.transform(o, t, r);
          break;
        }
      }
    });
  }
}, Nf = void 0, Wt = {
  setScrubber(e) {
    Nf = e;
  },
  stringify(e) {
    return JSON.stringify(e, Nf);
  }
}, Xb = ["text"], Yb = ["anchor", "focus"];
function If(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? If(Object(r), !0).forEach(function(n) {
      fr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : If(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var ye = {
  equals(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      loose: n = !1
    } = r;
    function a(o) {
      var i = Dn(o, Xb);
      return i;
    }
    return Dg(n ? a(e) : e, n ? a(t) : t);
  },
  isText(e) {
    return Zt(e) && typeof e.text == "string";
  },
  isTextList(e) {
    return Array.isArray(e) && e.every((t) => ye.isText(t));
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
    var r = [dn({}, e)];
    for (var n of t) {
      var a = Dn(n, Yb), [o, i] = K.edges(n), s = [], u = 0, l = o.offset, c = i.offset;
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
          m = dn(dn({}, h), {}, {
            text: h.text.slice(b)
          }), h = dn(dn({}, h), {}, {
            text: h.text.slice(0, b)
          });
        }
        if (l > p) {
          var C = l - p;
          f = dn(dn({}, h), {}, {
            text: h.text.slice(0, C)
          }), h = dn(dn({}, h), {}, {
            text: h.text.slice(C)
          });
        }
        Object.assign(h, a), f && s.push(f), s.push(h), m && s.push(m);
      }
      r = s;
    }
    return r;
  }
}, ic = (e) => e.selection ? e.selection : e.children.length > 0 ? y.end(e, []) : [0], lo = (e, t) => {
  var [r] = y.node(e, t);
  return (n) => n === r;
}, sc = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = !r, a = r ? ry(t) : t, o = Ie.None, i = Ie.None, s = 0, u = null, l = null;
  for (var c of a) {
    var d = c.codePointAt(0);
    if (!d)
      break;
    var v = gy(c, d);
    if ([o, i] = n ? [i, v] : [v, o], Va(o, Ie.ZWJ) && Va(i, Ie.ExtPict) && (n ? u = Mf(t.substring(0, s)) : u = Mf(t.substring(0, t.length - s)), !u) || Va(o, Ie.RI) && Va(i, Ie.RI) && (l !== null ? l = !l : n ? l = !0 : l = yy(t.substring(0, t.length - s)), !l) || o !== Ie.None && i !== Ie.None && hy(o, i))
      break;
    s += c.length;
  }
  return s || 1;
}, Zb = /\s/, Qb = /[\u002B\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, Jb = /['\u2018\u2019]/, ey = function(t) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = 0, a = !1; t.length > 0; ) {
    var o = sc(t, r), [i, s] = uc(t, o, r);
    if (ty(i, s, r))
      a = !0, n += o;
    else if (!a)
      n += o;
    else
      break;
    t = s;
  }
  return n;
}, uc = (e, t, r) => {
  if (r) {
    var n = e.length - t;
    return [e.slice(n, e.length), e.slice(0, n)];
  }
  return [e.slice(0, t), e.slice(t)];
}, ty = function e(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  if (Zb.test(t))
    return !1;
  if (Jb.test(t)) {
    var a = sc(r, n), [o, i] = uc(r, a, n);
    if (e(o, i, n))
      return !0;
  }
  return !Qb.test(t);
}, ry = function* (t) {
  for (var r = t.length - 1, n = 0; n < t.length; n++) {
    var a = t.charAt(r - n);
    if (ay(a.charCodeAt(0))) {
      var o = t.charAt(r - n - 1);
      if (ny(o.charCodeAt(0))) {
        yield o + a, n++;
        continue;
      }
    }
    yield a;
  }
}, ny = (e) => e >= 55296 && e <= 56319, ay = (e) => e >= 56320 && e <= 57343, Ie;
(function(e) {
  e[e.None = 0] = "None", e[e.Extend = 1] = "Extend", e[e.ZWJ = 2] = "ZWJ", e[e.RI = 4] = "RI", e[e.Prepend = 8] = "Prepend", e[e.SpacingMark = 16] = "SpacingMark", e[e.L = 32] = "L", e[e.V = 64] = "V", e[e.T = 128] = "T", e[e.LV = 256] = "LV", e[e.LVT = 512] = "LVT", e[e.ExtPict = 1024] = "ExtPict", e[e.Any = 2048] = "Any";
})(Ie || (Ie = {}));
var oy = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/, iy = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/, sy = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/, uy = /^[\u1100-\u115F\uA960-\uA97C]$/, ly = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/, cy = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/, fy = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/, dy = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/, vy = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/, gy = (e, t) => {
  var r = Ie.Any;
  return e.search(oy) !== -1 && (r |= Ie.Extend), t === 8205 && (r |= Ie.ZWJ), t >= 127462 && t <= 127487 && (r |= Ie.RI), e.search(iy) !== -1 && (r |= Ie.Prepend), e.search(sy) !== -1 && (r |= Ie.SpacingMark), e.search(uy) !== -1 && (r |= Ie.L), e.search(ly) !== -1 && (r |= Ie.V), e.search(cy) !== -1 && (r |= Ie.T), e.search(fy) !== -1 && (r |= Ie.LV), e.search(dy) !== -1 && (r |= Ie.LVT), e.search(vy) !== -1 && (r |= Ie.ExtPict), r;
};
function Va(e, t) {
  return (e & t) !== 0;
}
var my = [
  // GB6
  [Ie.L, Ie.L | Ie.V | Ie.LV | Ie.LVT],
  // GB7
  [Ie.LV | Ie.V, Ie.V | Ie.T],
  // GB8
  [Ie.LVT | Ie.T, Ie.T],
  // GB9
  [Ie.Any, Ie.Extend | Ie.ZWJ],
  // GB9a
  [Ie.Any, Ie.SpacingMark],
  // GB9b
  [Ie.Prepend, Ie.Any],
  // GB11
  [Ie.ZWJ, Ie.ExtPict],
  // GB12 and GB13
  [Ie.RI, Ie.RI]
];
function hy(e, t) {
  return my.findIndex((r) => Va(e, r[0]) && Va(t, r[1])) === -1;
}
var py = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/, Mf = (e) => e.search(py) !== -1, by = /(?:\uD83C[\uDDE6-\uDDFF])+$/g, yy = (e) => {
  var t = e.match(by);
  if (t === null)
    return !1;
  var r = t[0].length / 2;
  return r % 2 === 1;
}, Cy = {
  delete(e, t) {
    e.delete(t);
  },
  insertFragment(e, t, r) {
    e.insertFragment(t, r);
  },
  insertText(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    y.withoutNormalizing(e, () => {
      var {
        voids: n = !1
      } = r, {
        at: a = ic(e)
      } = r;
      if (j.isPath(a) && (a = y.range(e, a)), K.isRange(a))
        if (K.isCollapsed(a))
          a = a.anchor;
        else {
          var o = K.end(a);
          if (!n && y.void(e, {
            at: o
          }))
            return;
          var i = K.start(a), s = y.pointRef(e, i), u = y.pointRef(e, o);
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
      if (!(!n && y.void(e, {
        at: a
      }) || y.elementReadOnly(e, {
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
function wi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jf(Object(r), !0).forEach(function(n) {
      fr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var J = wi(wi(wi(wi({}, _b), Lb), zb), Cy), Vi = /* @__PURE__ */ new WeakMap(), Ey = (e) => Vi.get(e) || !1, Dy = (e, t, r) => {
  var n = Vi.get(e) || !1;
  Vi.set(e, !0);
  try {
    t(), r();
  } finally {
    Vi.set(e, n);
  }
};
function wg(e, t, r) {
  var n = ss.get(e) || [], a = us.get(e) || /* @__PURE__ */ new Set(), o, i, s = (d) => {
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
  ss.set(e, o), us.set(e, i);
}
var wy = (e, t) => {
  for (var r of y.pathRefs(e))
    Tb.transform(r, t);
  for (var n of y.pointRefs(e))
    Nb.transform(n, t);
  for (var a of y.rangeRefs(e))
    Ib.transform(a, t);
  if (!Ey(e)) {
    var o = j.operationCanTransformPath(t) ? (i) => j.transform(i, t) : void 0;
    wg(e, e.getDirtyPaths(t), o);
  }
  J.transform(e, t), e.operations.push(t), y.normalize(e, {
    operation: t
  }), t.type === "set_selection" && (e.marks = null), Io.get(e) || (Io.set(e, !0), Promise.resolve().then(() => {
    Io.set(e, !1), e.onChange({
      operation: t
    }), e.operations = [];
  }));
}, Sy = (e, t) => {
  switch (t.type) {
    case "insert_text":
    case "remove_text":
    case "set_node": {
      var {
        path: r
      } = t;
      return j.levels(r);
    }
    case "insert_node": {
      var {
        node: n,
        path: a
      } = t, o = j.levels(a), i = ye.isText(n) ? [] : Array.from(ie.nodes(n), (F) => {
        var [, _] = F;
        return a.concat(_);
      });
      return [...o, ...i];
    }
    case "merge_node": {
      var {
        path: s
      } = t, u = j.ancestors(s), l = j.previous(s);
      return [...u, l];
    }
    case "move_node": {
      var {
        path: c,
        newPath: d
      } = t;
      if (j.equals(c, d))
        return [];
      var v = [], p = [];
      for (var h of j.ancestors(c)) {
        var f = j.transform(h, t);
        v.push(f);
      }
      for (var m of j.ancestors(d)) {
        var b = j.transform(m, t);
        p.push(b);
      }
      var C = p[p.length - 1], E = d[d.length - 1], D = C.concat(E);
      return [...v, ...p, D];
    }
    case "remove_node": {
      var {
        path: w
      } = t, S = j.ancestors(w);
      return [...S];
    }
    case "split_node": {
      var {
        path: O
      } = t, B = j.levels(O), x = j.next(O);
      return [...B, x];
    }
    default:
      return [];
  }
}, Oy = (e) => {
  var {
    selection: t
  } = e;
  return t ? ie.fragment(e, t) : [];
}, xy = (e, t) => {
  var [r, n] = t;
  if (!ye.isText(r)) {
    if (ce.isElement(r) && r.children.length === 0) {
      var a = {
        text: ""
      };
      J.insertNodes(e, a, {
        at: n.concat(0),
        voids: !0
      });
      return;
    }
    for (var o = y.isEditor(r) ? !1 : ce.isElement(r) && (e.isInline(r) || r.children.length === 0 || ye.isText(r.children[0]) || e.isInline(r.children[0])), i = 0, s = 0; s < r.children.length; s++, i++) {
      var u = ie.get(e, n);
      if (!ye.isText(u)) {
        var l = u.children[i], c = u.children[i - 1], d = s === r.children.length - 1, v = ye.isText(l) || ce.isElement(l) && e.isInline(l);
        if (v !== o)
          J.removeNodes(e, {
            at: n.concat(i),
            voids: !0
          }), i--;
        else if (ce.isElement(l)) {
          if (e.isInline(l)) {
            if (c == null || !ye.isText(c)) {
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
          c != null && ye.isText(c) && (ye.equals(l, c, {
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
}, Ay = (e, t) => {
  var {
    iteration: r,
    initialDirtyPathsLength: n
  } = t, a = n * 42;
  if (r > a)
    throw new Error("Could not completely normalize the editor after ".concat(a, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state."));
  return !0;
}, By = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    voids: n = !1,
    mode: a = "lowest",
    at: o = t.selection,
    match: i
  } = r;
  if (o) {
    var s = y.path(t, o), u = a === "lowest";
    for (var [l, c] of y.levels(t, {
      at: s,
      voids: n,
      match: i,
      reverse: u
    }))
      if (!ye.isText(l)) {
        if (K.isRange(o)) {
          if (j.isAncestor(c, o.anchor.path) && j.isAncestor(c, o.focus.path))
            return [l, c];
        } else if (!j.equals(s, c))
          return [l, c];
      }
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
function _f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kf(Object(r), !0).forEach(function(n) {
      fr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Fy = (e, t, r) => {
  var {
    selection: n
  } = e;
  if (n) {
    var a = (d, v) => {
      if (!ye.isText(d))
        return !1;
      var [p, h] = y.parent(e, v);
      return !e.isVoid(p) || e.markableVoid(p);
    }, o = K.isExpanded(n), i = !1;
    if (!o) {
      var [s, u] = y.node(e, n);
      if (s && a(s, u)) {
        var [l] = y.parent(e, u);
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
      var c = _f(_f({}, y.marks(e) || {}), {}, {
        [t]: r
      });
      e.marks = c, Io.get(e) || e.onChange();
    }
  }
};
function Lf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lf(Object(r), !0).forEach(function(n) {
      fr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Py = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = y.point(t, r, {
    edge: "end"
  }), o = y.end(t, []), i = {
    anchor: a,
    focus: o
  }, {
    distance: s = 1
  } = n, u = 0, l;
  for (var c of y.positions(t, zf(zf({}, n), {}, {
    at: i
  }))) {
    if (u > s)
      break;
    u !== 0 && (l = c), u++;
  }
  return l;
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
      fr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var $y = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = y.start(t, []), o = y.point(t, r, {
    edge: "start"
  }), i = {
    anchor: a,
    focus: o
  }, {
    distance: s = 1
  } = n, u = 0, l;
  for (var c of y.positions(t, Hf(Hf({}, n), {}, {
    at: i,
    reverse: !0
  }))) {
    if (u > s)
      break;
    u !== 0 && (l = c), u++;
  }
  return l;
}, Ry = (e, t) => {
  var {
    selection: r
  } = e;
  r && K.isCollapsed(r) && J.delete(e, {
    unit: t,
    reverse: !0
  });
}, Ty = (e, t) => {
  var {
    selection: r
  } = e;
  r && K.isCollapsed(r) && J.delete(e, {
    unit: t
  });
}, Ny = function(t) {
  var {
    direction: r = "forward"
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    selection: n
  } = t;
  n && K.isExpanded(n) && J.delete(t, {
    reverse: r === "backward"
  });
}, Iy = (e, t) => [y.start(e, t), y.end(e, t)];
function Wf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Kf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wf(Object(r), !0).forEach(function(n) {
      fr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var My = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return y.above(t, Kf(Kf({}, r), {}, {
    match: (n) => ce.isElement(n) && y.isElementReadOnly(t, n)
  }));
}, jy = (e, t) => y.point(e, t, {
  edge: "end"
}), ky = (e, t) => {
  var r = y.path(e, t, {
    edge: "start"
  });
  return y.node(e, r);
}, _y = (e, t) => {
  var r = y.range(e, t);
  return ie.fragment(e, r);
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
function qf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uf(Object(r), !0).forEach(function(n) {
      fr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Ly = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return y.above(t, qf(qf({}, r), {}, {
    match: (n) => ce.isElement(n) && y.isVoid(t, n)
  }));
}, zy = (e, t) => t.children.some((r) => ce.isElement(r) && y.isBlock(e, r)), Vy = (e, t) => t.children.some((r) => ye.isText(r) || y.isInline(e, r)), Hy = (e, t) => ie.has(e, t), Wy = (e, t) => t.children.every((r) => ye.isText(r)), Ky = (e) => {
  J.splitNodes(e, {
    always: !0
  });
}, Uy = (e, t, r) => {
  J.insertNodes(e, t, r);
}, qy = (e) => {
  J.splitNodes(e, {
    always: !0
  });
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
function Gy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gf(Object(r), !0).forEach(function(n) {
      fr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Xy = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    selection: a,
    marks: o
  } = t;
  if (a) {
    if (o) {
      var i = Gy({
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
}, Yy = (e, t) => !e.isInline(t), Zy = (e, t, r) => y.isStart(e, t, r) || y.isEnd(e, t, r), Qy = (e, t) => {
  var {
    children: r
  } = t, [n] = r;
  return r.length === 0 || r.length === 1 && ye.isText(n) && n.text === "" && !e.isVoid(t);
}, Jy = (e, t, r) => {
  var n = y.end(e, r);
  return ze.equals(t, n);
}, eC = (e) => {
  var t = Eg.get(e);
  return t === void 0 ? !0 : t;
}, tC = (e, t, r) => {
  if (t.offset !== 0)
    return !1;
  var n = y.start(e, r);
  return ze.equals(t, n);
}, rC = (e, t) => {
  var r = y.path(e, t, {
    edge: "end"
  });
  return y.node(e, r);
}, nC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = y.path(t, r, n), o = ie.leaf(t, a);
  return [o, a];
};
function aC(e) {
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
      var i = [], s = y.path(e, r);
      for (var [u, l] of ie.levels(e, s))
        if (o(u, l) && (i.push([u, l]), !a && ce.isElement(u) && y.isVoid(e, u)))
          break;
      n && i.reverse(), yield* i;
    }
  }();
}
var oC = ["text"], iC = ["text"], sC = function(t) {
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
  if (K.isExpanded(n)) {
    var i = y.isEnd(t, a, a.path);
    if (i) {
      var s = y.after(t, a);
      s && (a = s);
    }
    var [u] = y.nodes(t, {
      match: ye.isText,
      at: {
        anchor: a,
        focus: o
      }
    });
    if (u) {
      var [l] = u, c = Dn(l, oC);
      return c;
    } else
      return {};
  }
  var {
    path: d
  } = a, [v] = y.leaf(t, d);
  if (a.offset === 0) {
    var p = y.previous(t, {
      at: d,
      match: ye.isText
    }), h = y.above(t, {
      match: (D) => ce.isElement(D) && y.isVoid(t, D) && t.markableVoid(D)
    });
    if (!h) {
      var f = y.above(t, {
        match: (D) => ce.isElement(D) && y.isBlock(t, D)
      });
      if (p && f) {
        var [m, b] = p, [, C] = f;
        j.isAncestor(C, b) && (v = m);
      }
    }
  }
  var E = Dn(v, iC);
  return E;
}, uC = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    mode: n = "lowest",
    voids: a = !1
  } = r, {
    match: o,
    at: i = t.selection
  } = r;
  if (i) {
    var s = y.after(t, i, {
      voids: a
    });
    if (s) {
      var [, u] = y.last(t, []), l = [s.path, u];
      if (j.isPath(i) && i.length === 0)
        throw new Error("Cannot get the next node from the root node!");
      if (o == null)
        if (j.isPath(i)) {
          var [c] = y.parent(t, i);
          o = (v) => c.children.includes(v);
        } else
          o = () => !0;
      var [d] = y.nodes(t, {
        at: l,
        match: o,
        mode: n,
        voids: a
      });
      return d;
    }
  }
}, lC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = y.path(t, r, n), o = ie.get(t, a);
  return [o, a];
};
function cC(e) {
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
      if (Gb.isSpan(r))
        l = r[0], c = r[1];
      else {
        var d = y.path(e, r, {
          edge: "start"
        }), v = y.path(e, r, {
          edge: "end"
        });
        l = o ? v : d, c = o ? d : v;
      }
      var p = ie.nodes(e, {
        reverse: o,
        from: l,
        to: c,
        pass: (D) => {
          var [w] = D;
          return ce.isElement(w) ? !!(!i && (y.isVoid(e, w) || y.isElementReadOnly(e, w)) || s && !y.isSelectable(e, w)) : !1;
        }
      }), h = [], f;
      for (var [m, b] of p)
        if (!(s && ce.isElement(m) && !y.isSelectable(e, m))) {
          var C = f && j.compare(b, f[1]) === 0;
          if (!(n === "highest" && C)) {
            if (!u(m, b)) {
              if (a && !C && ye.isText(m))
                return;
              continue;
            }
            if (n === "lowest" && C) {
              f = [m, b];
              continue;
            }
            var E = n === "lowest" ? f : [m, b];
            E && (a ? h.push(E) : yield E), f = [m, b];
          }
        }
      n === "lowest" && f && (a ? h.push(f) : yield f), a && (yield* h);
    }
  }();
}
var fC = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    force: n = !1,
    operation: a
  } = r, o = (c) => ss.get(c) || [], i = (c) => us.get(c) || /* @__PURE__ */ new Set(), s = (c) => {
    var d = o(c).pop(), v = d.join(",");
    return i(c).delete(v), d;
  };
  if (y.isNormalizing(t)) {
    if (n) {
      var u = Array.from(ie.nodes(t), (c) => {
        var [, d] = c;
        return d;
      }), l = new Set(u.map((c) => c.join(",")));
      ss.set(t, u), us.set(t, l);
    }
    o(t).length !== 0 && y.withoutNormalizing(t, () => {
      for (var c of o(t))
        if (ie.has(t, c)) {
          var d = y.node(t, c), [v, p] = d;
          ce.isElement(v) && v.children.length === 0 && t.normalizeNode(d, {
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
        if (ie.has(t, b)) {
          var C = y.node(t, b);
          t.normalizeNode(C, {
            operation: a
          });
        }
        m++, h = o(t);
      }
    });
  }
}, dC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = y.path(t, r, n), o = j.parent(a), i = y.node(t, o);
  return i;
}, vC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, o = {
    current: r,
    affinity: a,
    unref() {
      var {
        current: s
      } = o, u = y.pathRefs(t);
      return u.delete(o), o.current = null, s;
    }
  }, i = y.pathRefs(t);
  return i.add(o), o;
}, gC = (e) => {
  var t = wf.get(e);
  return t || (t = /* @__PURE__ */ new Set(), wf.set(e, t)), t;
}, mC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    depth: a,
    edge: o
  } = n;
  if (j.isPath(r)) {
    if (o === "start") {
      var [, i] = ie.first(t, r);
      r = i;
    } else if (o === "end") {
      var [, s] = ie.last(t, r);
      r = s;
    }
  }
  return K.isRange(r) && (o === "start" ? r = K.start(r) : o === "end" ? r = K.end(r) : r = j.common(r.anchor.path, r.focus.path)), ze.isPoint(r) && (r = r.path), a != null && (r = r.slice(0, a)), r;
}, hC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, o = {
    current: r,
    affinity: a,
    unref() {
      var {
        current: s
      } = o, u = y.pointRefs(t);
      return u.delete(o), o.current = null, s;
    }
  }, i = y.pointRefs(t);
  return i.add(o), o;
}, pC = (e) => {
  var t = Sf.get(e);
  return t || (t = /* @__PURE__ */ new Set(), Sf.set(e, t)), t;
}, bC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    edge: a = "start"
  } = n;
  if (j.isPath(r)) {
    var o;
    if (a === "end") {
      var [, i] = ie.last(t, r);
      o = i;
    } else {
      var [, s] = ie.first(t, r);
      o = s;
    }
    var u = ie.get(t, o);
    if (!ye.isText(u))
      throw new Error("Cannot get the ".concat(a, " point in the node at path [").concat(r, "] because it has no ").concat(a, " text node."));
    return {
      path: o,
      offset: a === "end" ? u.text.length : 0
    };
  }
  if (K.isRange(r)) {
    var [l, c] = K.edges(r);
    return a === "start" ? l : c;
  }
  return r;
};
function yC(e) {
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
    var s = y.range(e, r), [u, l] = K.edges(s), c = a ? l : u, d = !1, v = "", p = 0, h = 0, f = 0;
    for (var [m, b] of y.nodes(e, {
      at: r,
      reverse: a,
      voids: o,
      ignoreNonSelectable: i
    })) {
      if (ce.isElement(m)) {
        if (!o && (e.isVoid(m) || e.isElementReadOnly(m))) {
          yield y.start(e, b);
          continue;
        }
        if (e.isInline(m))
          continue;
        if (y.hasInlines(e, m)) {
          var C = j.isAncestor(b, l.path) ? l : y.end(e, b), E = j.isAncestor(b, u.path) ? u : y.start(e, b);
          v = y.string(e, {
            anchor: E,
            focus: C
          }, {
            voids: o
          }), d = !0;
        }
      }
      if (ye.isText(m)) {
        var D = j.equals(b, c.path);
        for (D ? (h = a ? c.offset : m.text.length - c.offset, f = c.offset) : (h = m.text.length, f = a ? h : 0), (D || d || n === "offset") && (yield {
          path: b,
          offset: f
        }, d = !1); ; ) {
          if (p === 0) {
            if (v === "")
              break;
            p = w(v, n, a), v = uc(v, p, a)[1];
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
    function w(S, O, B) {
      return O === "character" ? sc(S, B) : O === "word" ? ey(S, B) : O === "line" || O === "block" ? S.length : 1;
    }
  }();
}
var CC = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    mode: n = "lowest",
    voids: a = !1
  } = r, {
    match: o,
    at: i = t.selection
  } = r;
  if (i) {
    var s = y.before(t, i, {
      voids: a
    });
    if (s) {
      var [, u] = y.first(t, []), l = [s.path, u];
      if (j.isPath(i) && i.length === 0)
        throw new Error("Cannot get the previous node from the root node!");
      if (o == null)
        if (j.isPath(i)) {
          var [c] = y.parent(t, i);
          o = (v) => c.children.includes(v);
        } else
          o = () => !0;
      var [d] = y.nodes(t, {
        reverse: !0,
        at: l,
        match: o,
        mode: n,
        voids: a
      });
      return d;
    }
  }
}, EC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, o = {
    current: r,
    affinity: a,
    unref() {
      var {
        current: s
      } = o, u = y.rangeRefs(t);
      return u.delete(o), o.current = null, s;
    }
  }, i = y.rangeRefs(t);
  return i.add(o), o;
}, DC = (e) => {
  var t = Of.get(e);
  return t || (t = /* @__PURE__ */ new Set(), Of.set(e, t)), t;
}, wC = (e, t, r) => {
  if (K.isRange(t) && !r)
    return t;
  var n = y.start(e, t), a = y.end(e, r || t);
  return {
    anchor: n,
    focus: a
  };
};
function Xf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function SC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xf(Object(r), !0).forEach(function(n) {
      fr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var OC = (e, t) => {
  var {
    selection: r
  } = e;
  if (r) {
    var n = (c, d) => {
      if (!ye.isText(c))
        return !1;
      var [v, p] = y.parent(e, d);
      return !e.isVoid(v) || e.markableVoid(v);
    }, a = K.isExpanded(r), o = !1;
    if (!a) {
      var [i, s] = y.node(e, r);
      if (i && n(i, s)) {
        var [u] = y.parent(e, s);
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
      var l = SC({}, y.marks(e) || {});
      delete l[t], e.marks = l, Io.get(e) || e.onChange();
    }
  }
}, xC = (e, t) => {
  Eg.set(e, t);
}, AC = (e, t) => y.point(e, t, {
  edge: "start"
}), BC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: a = !1
  } = n, o = y.range(t, r), [i, s] = K.edges(o), u = "";
  for (var [l, c] of y.nodes(t, {
    at: o,
    match: ye.isText,
    voids: a
  })) {
    var d = l.text;
    j.equals(c, s.path) && (d = d.slice(0, s.offset)), j.equals(c, i.path) && (d = d.slice(i.offset)), u += d;
  }
  return u;
}, FC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: a = !1
  } = n, [o, i] = K.edges(r);
  if (o.offset !== 0 || i.offset !== 0 || K.isCollapsed(r) || j.hasPrevious(i.path))
    return r;
  var s = y.above(t, {
    at: i,
    match: (h) => ce.isElement(h) && y.isBlock(t, h),
    voids: a
  }), u = s ? s[1] : [], l = y.start(t, o), c = {
    anchor: l,
    focus: i
  }, d = !0;
  for (var [v, p] of y.nodes(t, {
    at: c,
    match: ye.isText,
    reverse: !0,
    voids: a
  })) {
    if (d) {
      d = !1;
      continue;
    }
    if (v.text !== "" || j.isBefore(p, u)) {
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
}, PC = (e, t) => {
  var r = y.isNormalizing(e);
  y.setNormalizing(e, !1);
  try {
    t();
  } finally {
    y.setNormalizing(e, r);
  }
  y.normalize(e);
}, $C = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  y.withoutNormalizing(t, () => {
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
      if (K.isRange(l) && K.isCollapsed(l) && (d = !0, l = l.anchor), ze.isPoint(l)) {
        var v = y.void(t, {
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
          }, f = o ? y.before(t, l, h) || y.start(t, []) : y.after(t, l, h) || y.end(t, []);
          l = {
            anchor: l,
            focus: f
          }, c = !0;
        }
      }
      if (j.isPath(l)) {
        J.removeNodes(t, {
          at: l,
          voids: u
        });
        return;
      }
      if (!K.isCollapsed(l)) {
        if (!c) {
          var [, m] = K.edges(l), b = y.end(t, []);
          ze.equals(m, b) || (l = y.unhangRange(t, l, {
            voids: u
          }));
        }
        var [C, E] = K.edges(l), D = y.above(t, {
          match: (Y) => ce.isElement(Y) && y.isBlock(t, Y),
          at: C,
          voids: u
        }), w = y.above(t, {
          match: (Y) => ce.isElement(Y) && y.isBlock(t, Y),
          at: E,
          voids: u
        }), S = D && w && !j.equals(D[1], w[1]), O = j.equals(C.path, E.path), B = u ? null : (n = y.void(t, {
          at: C,
          mode: "highest"
        })) !== null && n !== void 0 ? n : y.elementReadOnly(t, {
          at: C,
          mode: "highest"
        }), x = u ? null : (a = y.void(t, {
          at: E,
          mode: "highest"
        })) !== null && a !== void 0 ? a : y.elementReadOnly(t, {
          at: E,
          mode: "highest"
        });
        if (B) {
          var F = y.before(t, C);
          F && D && j.isAncestor(D[1], F.path) && (C = F);
        }
        if (x) {
          var _ = y.after(t, E);
          _ && w && j.isAncestor(w[1], _.path) && (E = _);
        }
        var N = [], P;
        for (var I of y.nodes(t, {
          at: l,
          voids: u
        })) {
          var [T, k] = I;
          P && j.compare(k, P) === 0 || (!u && ce.isElement(T) && (y.isVoid(t, T) || y.isElementReadOnly(t, T)) || !j.isCommon(k, C.path) && !j.isCommon(k, E.path)) && (N.push(I), P = k);
        }
        var A = Array.from(N, (Y) => {
          var [, me] = Y;
          return y.pathRef(t, me);
        }), M = y.pointRef(t, C), V = y.pointRef(t, E), z = "";
        if (!O && !B) {
          var U = M.current, [G] = y.leaf(t, U), {
            path: Q
          } = U, {
            offset: R
          } = C, H = G.text.slice(R);
          H.length > 0 && (t.apply({
            type: "remove_text",
            path: Q,
            offset: R,
            text: H
          }), z = H);
        }
        if (A.reverse().map((Y) => Y.unref()).filter((Y) => Y !== null).forEach((Y) => J.removeNodes(t, {
          at: Y,
          voids: u
        })), !x) {
          var L = V.current, [q] = y.leaf(t, L), {
            path: re
          } = L, te = O ? C.offset : 0, ue = q.text.slice(te, E.offset);
          ue.length > 0 && (t.apply({
            type: "remove_text",
            path: re,
            offset: te,
            text: ue
          }), z = ue);
        }
        !O && S && V.current && M.current && J.mergeNodes(t, {
          at: V.current,
          hanging: !0,
          voids: u
        }), d && o && i === "character" && z.length > 1 && z.match(/[\u0E00-\u0E7F]+/) && J.insertText(t, z.slice(0, z.length - s));
        var se = M.unref(), ve = V.unref(), le = o ? se || ve : ve || se;
        r.at == null && le && J.select(t, le);
      }
    }
  });
}, RC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  y.withoutNormalizing(t, () => {
    var {
      hanging: a = !1,
      voids: o = !1
    } = n, {
      at: i = ic(t),
      batchDirty: s = !0
    } = n;
    if (r.length) {
      if (K.isRange(i))
        if (a || (i = y.unhangRange(t, i, {
          voids: o
        })), K.isCollapsed(i))
          i = i.anchor;
        else {
          var [, u] = K.edges(i);
          if (!o && y.void(t, {
            at: u
          }))
            return;
          var l = y.pointRef(t, u);
          J.delete(t, {
            at: i
          }), i = l.unref();
        }
      else
        j.isPath(i) && (i = y.start(t, i));
      if (!(!o && y.void(t, {
        at: i
      }))) {
        var c = y.above(t, {
          at: i,
          match: (H) => ce.isElement(H) && y.isInline(t, H),
          mode: "highest",
          voids: o
        });
        if (c) {
          var [, d] = c;
          if (y.isEnd(t, i, d)) {
            var v = y.after(t, d);
            i = v;
          } else if (y.isStart(t, i, d)) {
            var p = y.before(t, d);
            i = p;
          }
        }
        var h = y.above(t, {
          match: (H) => ce.isElement(H) && y.isBlock(t, H),
          at: i,
          voids: o
        }), [, f] = h, m = y.isStart(t, i, f), b = y.isEnd(t, i, f), C = m && b, E = !m || m && b, D = !b, [, w] = ie.first({
          children: r
        }, []), [, S] = ie.last({
          children: r
        }, []), O = [], B = (H) => {
          var [L, q] = H, re = q.length === 0;
          return re ? !1 : C ? !0 : !(E && j.isAncestor(q, w) && ce.isElement(L) && !t.isVoid(L) && !t.isInline(L) || D && j.isAncestor(q, S) && ce.isElement(L) && !t.isVoid(L) && !t.isInline(L));
        };
        for (var x of ie.nodes({
          children: r
        }, {
          pass: B
        }))
          B(x) && O.push(x);
        var F = [], _ = [], N = [], P = !0, I = !1;
        for (var [T] of O)
          ce.isElement(T) && !t.isInline(T) ? (P = !1, I = !0, _.push(T)) : P ? F.push(T) : N.push(T);
        var [k] = y.nodes(t, {
          at: i,
          match: (H) => ye.isText(H) || y.isInline(t, H),
          mode: "highest",
          voids: o
        }), [, A] = k, M = y.isStart(t, i, A), V = y.isEnd(t, i, A), z = y.pathRef(t, b && !N.length ? j.next(f) : f), U = y.pathRef(t, V ? j.next(A) : A);
        J.splitNodes(t, {
          at: i,
          match: (H) => I ? ce.isElement(H) && y.isBlock(t, H) : ye.isText(H) || y.isInline(t, H),
          mode: I ? "lowest" : "highest",
          always: I && (!m || F.length > 0) && (!b || N.length > 0),
          voids: o
        });
        var G = y.pathRef(t, !M || M && V ? j.next(A) : A);
        if (J.insertNodes(t, F, {
          at: G.current,
          match: (H) => ye.isText(H) || y.isInline(t, H),
          mode: "highest",
          voids: o,
          batchDirty: s
        }), C && !F.length && _.length && !N.length && J.delete(t, {
          at: f,
          voids: o
        }), J.insertNodes(t, _, {
          at: z.current,
          match: (H) => ce.isElement(H) && y.isBlock(t, H),
          mode: "lowest",
          voids: o,
          batchDirty: s
        }), J.insertNodes(t, N, {
          at: U.current,
          match: (H) => ye.isText(H) || y.isInline(t, H),
          mode: "highest",
          voids: o,
          batchDirty: s
        }), !n.at) {
          var Q;
          if (N.length > 0 && U.current ? Q = j.previous(U.current) : _.length > 0 && z.current ? Q = j.previous(z.current) : G.current && (Q = j.previous(G.current)), Q) {
            var R = y.end(t, Q);
            J.select(t, R);
          }
        }
        G.unref(), z.unref(), U.unref();
      }
    }
  });
}, TC = function(t) {
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
      var [o] = K.edges(a);
      J.select(t, o);
    } else if (n === "end") {
      var [, i] = K.edges(a);
      J.select(t, i);
    }
  } else
    return;
}, NC = (e) => {
  var {
    selection: t
  } = e;
  t && e.apply({
    type: "set_selection",
    properties: t,
    newProperties: null
  });
}, IC = function(t) {
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
    s === "start" && (s = K.isBackward(n) ? "focus" : "anchor"), s === "end" && (s = K.isBackward(n) ? "anchor" : "focus");
    var {
      anchor: u,
      focus: l
    } = n, c = {
      distance: a,
      unit: o,
      ignoreNonSelectable: !0
    }, d = {};
    if (s == null || s === "anchor") {
      var v = i ? y.before(t, u, c) : y.after(t, u, c);
      v && (d.anchor = v);
    }
    if (s == null || s === "focus") {
      var p = i ? y.before(t, l, c) : y.after(t, l, c);
      p && (d.focus = p);
    }
    J.setSelection(t, d);
  }
}, MC = (e, t) => {
  var {
    selection: r
  } = e;
  if (t = y.range(e, t), r) {
    J.setSelection(e, t);
    return;
  }
  if (!K.isRange(t))
    throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(Wt.stringify(t)));
  e.apply({
    type: "set_selection",
    properties: r,
    newProperties: t
  });
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
      fr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var jC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    selection: a
  } = t, {
    edge: o = "both"
  } = n;
  if (a) {
    o === "start" && (o = K.isBackward(a) ? "focus" : "anchor"), o === "end" && (o = K.isBackward(a) ? "anchor" : "focus");
    var {
      anchor: i,
      focus: s
    } = a, u = o === "anchor" ? i : s;
    J.setSelection(t, {
      [o === "anchor" ? "anchor" : "focus"]: Zf(Zf({}, u), r)
    });
  }
}, kC = (e, t) => {
  var {
    selection: r
  } = e, n = {}, a = {};
  if (r) {
    for (var o in t)
      (o === "anchor" && t.anchor != null && !ze.equals(t.anchor, r.anchor) || o === "focus" && t.focus != null && !ze.equals(t.focus, r.focus) || o !== "anchor" && o !== "focus" && t[o] !== r[o]) && (n[o] = r[o], a[o] = t[o]);
    Object.keys(n).length > 0 && e.apply({
      type: "set_selection",
      properties: n,
      newProperties: a
    });
  }
}, _C = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  y.withoutNormalizing(t, () => {
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
    if (ie.isNode(r) && (r = [r]), r.length !== 0) {
      var [d] = r;
      if (u || (u = ic(t), c !== !1 && (c = !0)), c == null && (c = !1), K.isRange(u))
        if (a || (u = y.unhangRange(t, u, {
          voids: o
        })), K.isCollapsed(u))
          u = u.anchor;
        else {
          var [, v] = K.edges(u), p = y.pointRef(t, v);
          J.delete(t, {
            at: u
          }), u = p.unref();
        }
      if (ze.isPoint(u)) {
        l == null && (ye.isText(d) ? l = (F) => ye.isText(F) : t.isInline(d) ? l = (F) => ye.isText(F) || y.isInline(t, F) : l = (F) => ce.isElement(F) && y.isBlock(t, F));
        var [h] = y.nodes(t, {
          at: u.path,
          match: l,
          mode: i,
          voids: o
        });
        if (h) {
          var [, f] = h, m = y.pathRef(t, f), b = y.isEnd(t, u, f);
          J.splitNodes(t, {
            at: u,
            match: l,
            mode: i,
            voids: o
          });
          var C = m.unref();
          u = b ? j.next(C) : C;
        } else
          return;
      }
      var E = j.parent(u), D = u[u.length - 1];
      if (!(!o && y.void(t, {
        at: E
      }))) {
        if (s) {
          var w = [], S = j.levels(E);
          Dy(t, () => {
            var F = function() {
              var P = E.concat(D);
              D++;
              var I = {
                type: "insert_node",
                path: P,
                node: _
              };
              t.apply(I), u = j.next(u), w.push(I), ye.isText ? S.push(...Array.from(ie.nodes(_), (T) => {
                var [, k] = T;
                return P.concat(k);
              })) : S.push(P);
            };
            for (var _ of r)
              F();
          }, () => {
            wg(t, S, (F) => {
              var _ = F;
              for (var N of w)
                if (j.operationCanTransformPath(N) && (_ = j.transform(_, N), !_))
                  return null;
              return _;
            });
          });
        } else
          for (var O of r) {
            var B = E.concat(D);
            D++, t.apply({
              type: "insert_node",
              path: B,
              node: O
            }), u = j.next(u);
          }
        if (u = j.previous(u), c) {
          var x = y.end(t, u);
          x && J.select(t, x);
        }
      }
    }
  });
}, LC = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  y.withoutNormalizing(t, () => {
    var {
      at: n = t.selection,
      mode: a = "lowest",
      voids: o = !1
    } = r, {
      match: i
    } = r;
    if (i == null && (i = j.isPath(n) ? lo(t, n) : (D) => ce.isElement(D) && y.isBlock(t, D)), !!n) {
      var s = y.nodes(t, {
        at: n,
        match: i,
        mode: a,
        voids: o
      }), u = Array.from(s, (D) => {
        var [, w] = D;
        return y.pathRef(t, w);
      });
      for (var l of u) {
        var c = l.unref();
        if (c.length < 2)
          throw new Error("Cannot lift node at a path [".concat(c, "] because it has a depth of less than `2`."));
        var d = y.node(t, j.parent(c)), [v, p] = d, h = c[c.length - 1], {
          length: f
        } = v.children;
        if (f === 1) {
          var m = j.next(p);
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
          var b = j.next(p);
          J.moveNodes(t, {
            at: c,
            to: b,
            voids: o
          });
        } else {
          var C = j.next(c), E = j.next(p);
          J.splitNodes(t, {
            at: C,
            voids: o
          }), J.moveNodes(t, {
            at: c,
            to: E,
            voids: o
          });
        }
      }
    }
  });
}, zC = ["text"], VC = ["children"], Sg = (e, t) => {
  if (ce.isElement(t)) {
    var r = t;
    return y.isVoid(e, t) ? !0 : r.children.length === 1 ? Sg(e, r.children[0]) : !1;
  } else
    return !y.isEditor(t);
}, HC = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  y.withoutNormalizing(t, () => {
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
        if (j.isPath(a)) {
          var [u] = y.parent(t, a);
          n = (F) => u.children.includes(F);
        } else
          n = (F) => ce.isElement(F) && y.isBlock(t, F);
      if (!o && K.isRange(a) && (a = y.unhangRange(t, a, {
        voids: i
      })), K.isRange(a))
        if (K.isCollapsed(a))
          a = a.anchor;
        else {
          var [, l] = K.edges(a), c = y.pointRef(t, l);
          J.delete(t, {
            at: a
          }), a = c.unref(), r.at == null && J.select(t, a);
        }
      var [d] = y.nodes(t, {
        at: a,
        match: n,
        voids: i,
        mode: s
      }), v = y.previous(t, {
        at: a,
        match: n,
        voids: i,
        mode: s
      });
      if (!(!d || !v)) {
        var [p, h] = d, [f, m] = v;
        if (!(h.length === 0 || m.length === 0)) {
          var b = j.next(m), C = j.common(h, m), E = j.isSibling(h, m), D = Array.from(y.levels(t, {
            at: h
          }), (F) => {
            var [_] = F;
            return _;
          }).slice(C.length).slice(0, -1), w = y.above(t, {
            at: h,
            mode: "highest",
            match: (F) => D.includes(F) && Sg(t, F)
          }), S = w && y.pathRef(t, w[1]), O, B;
          if (ye.isText(p) && ye.isText(f)) {
            var x = Dn(p, zC);
            B = f.text.length, O = x;
          } else if (ce.isElement(p) && ce.isElement(f)) {
            var x = Dn(p, VC);
            B = f.children.length, O = x;
          } else
            throw new Error("Cannot merge the node at path [".concat(h, "] with the previous sibling because it is not the same kind: ").concat(Wt.stringify(p), " ").concat(Wt.stringify(f)));
          E || J.moveNodes(t, {
            at: h,
            to: b,
            voids: i
          }), S && J.removeNodes(t, {
            at: S.current,
            voids: i
          }), ce.isElement(f) && y.isEmpty(t, f) || ye.isText(f) && f.text === "" && m[m.length - 1] !== 0 ? J.removeNodes(t, {
            at: m,
            voids: i
          }) : t.apply({
            type: "merge_node",
            path: b,
            position: B,
            properties: O
          }), S && S.unref();
        }
      }
    }
  });
}, WC = (e, t) => {
  y.withoutNormalizing(e, () => {
    var {
      to: r,
      at: n = e.selection,
      mode: a = "lowest",
      voids: o = !1
    } = t, {
      match: i
    } = t;
    if (n) {
      i == null && (i = j.isPath(n) ? lo(e, n) : (p) => ce.isElement(p) && y.isBlock(e, p));
      var s = y.pathRef(e, r), u = y.nodes(e, {
        at: n,
        match: i,
        mode: a,
        voids: o
      }), l = Array.from(u, (p) => {
        var [, h] = p;
        return y.pathRef(e, h);
      });
      for (var c of l) {
        var d = c.unref(), v = s.current;
        d.length !== 0 && e.apply({
          type: "move_node",
          path: d,
          newPath: v
        }), s.current && j.isSibling(v, d) && j.isAfter(v, d) && (s.current = j.next(s.current));
      }
      s.unref();
    }
  });
}, KC = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  y.withoutNormalizing(t, () => {
    var {
      hanging: n = !1,
      voids: a = !1,
      mode: o = "lowest"
    } = r, {
      at: i = t.selection,
      match: s
    } = r;
    if (i) {
      s == null && (s = j.isPath(i) ? lo(t, i) : (p) => ce.isElement(p) && y.isBlock(t, p)), !n && K.isRange(i) && (i = y.unhangRange(t, i, {
        voids: a
      }));
      var u = y.nodes(t, {
        at: i,
        match: s,
        mode: o,
        voids: a
      }), l = Array.from(u, (p) => {
        var [, h] = p;
        return y.pathRef(t, h);
      });
      for (var c of l) {
        var d = c.unref();
        if (d) {
          var [v] = y.node(t, d);
          t.apply({
            type: "remove_node",
            path: d,
            node: v
          });
        }
      }
    }
  });
}, UC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  y.withoutNormalizing(t, () => {
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
      if (a == null && (a = j.isPath(o) ? lo(t, o) : (B) => ce.isElement(B) && y.isBlock(t, B)), !u && K.isRange(o) && (o = y.unhangRange(t, o, {
        voids: d
      })), c && K.isRange(o)) {
        if (K.isCollapsed(o) && y.leaf(t, o.anchor)[0].text.length > 0)
          return;
        var v = y.rangeRef(t, o, {
          affinity: "inward"
        }), [p, h] = K.edges(o), f = l === "lowest" ? "lowest" : "highest", m = y.isEnd(t, h, h.path);
        J.splitNodes(t, {
          at: h,
          match: a,
          mode: f,
          voids: d,
          always: !m
        });
        var b = y.isStart(t, p, p.path);
        J.splitNodes(t, {
          at: p,
          match: a,
          mode: f,
          voids: d,
          always: !b
        }), o = v.unref(), n.at == null && J.select(t, o);
      }
      i || (i = (B, x) => B !== x);
      for (var [C, E] of y.nodes(t, {
        at: o,
        match: a,
        mode: l,
        voids: d
      })) {
        var D = {}, w = {};
        if (E.length !== 0) {
          var S = !1;
          for (var O in r)
            O === "children" || O === "text" || i(r[O], C[O]) && (S = !0, C.hasOwnProperty(O) && (D[O] = C[O]), s ? r[O] != null && (w[O] = s(C[O], r[O])) : r[O] != null && (w[O] = r[O]));
          S && t.apply({
            type: "set_node",
            path: E,
            properties: D,
            newProperties: w
          });
        }
      }
    }
  });
}, qC = (e, t) => {
  if (K.isCollapsed(t))
    return t.anchor;
  var [, r] = K.edges(t), n = y.pointRef(e, r);
  return J.delete(e, {
    at: t
  }), n.unref();
}, GC = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  y.withoutNormalizing(t, () => {
    var {
      mode: n = "lowest",
      voids: a = !1
    } = r, {
      match: o,
      at: i = t.selection,
      height: s = 0,
      always: u = !1
    } = r;
    if (o == null && (o = (V) => ce.isElement(V) && y.isBlock(t, V)), K.isRange(i) && (i = qC(t, i)), j.isPath(i)) {
      var l = i, c = y.point(t, l), [d] = y.parent(t, l);
      o = (V) => V === d, s = c.path.length - l.length + 1, i = c, u = !0;
    }
    if (i) {
      var v = y.pointRef(t, i, {
        affinity: "backward"
      }), p;
      try {
        var [h] = y.nodes(t, {
          at: i,
          match: o,
          mode: n,
          voids: a
        });
        if (!h)
          return;
        var f = y.void(t, {
          at: i,
          mode: "highest"
        }), m = 0;
        if (!a && f) {
          var [b, C] = f;
          if (ce.isElement(b) && t.isInline(b)) {
            var E = y.after(t, C);
            if (!E) {
              var D = {
                text: ""
              }, w = j.next(C);
              J.insertNodes(t, D, {
                at: w,
                voids: a
              }), E = y.point(t, w);
            }
            i = E, u = !0;
          }
          var S = i.path.length - C.length;
          s = S + 1, u = !0;
        }
        p = y.pointRef(t, i);
        var O = i.path.length - s, [, B] = h, x = i.path.slice(0, O), F = s === 0 ? i.offset : i.path[O] + m;
        for (var [_, N] of y.levels(t, {
          at: x,
          reverse: !0,
          voids: a
        })) {
          var P = !1;
          if (N.length < B.length || N.length === 0 || !a && ce.isElement(_) && y.isVoid(t, _))
            break;
          var I = v.current, T = y.isEnd(t, I, N);
          if (u || !v || !y.isEdge(t, I, N)) {
            P = !0;
            var k = ie.extractProps(_);
            t.apply({
              type: "split_node",
              path: N,
              position: F,
              properties: k
            });
          }
          F = N[N.length - 1] + (P || T ? 1 : 0);
        }
        if (r.at == null) {
          var A = p.current || y.end(t, []);
          J.select(t, A);
        }
      } finally {
        var M;
        v.unref(), (M = p) === null || M === void 0 || M.unref();
      }
    }
  });
}, XC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  Array.isArray(r) || (r = [r]);
  var a = {};
  for (var o of r)
    a[o] = null;
  J.setNodes(t, a, n);
}, YC = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  y.withoutNormalizing(t, () => {
    var {
      mode: n = "lowest",
      split: a = !1,
      voids: o = !1
    } = r, {
      at: i = t.selection,
      match: s
    } = r;
    if (i) {
      s == null && (s = j.isPath(i) ? lo(t, i) : (p) => ce.isElement(p) && y.isBlock(t, p)), j.isPath(i) && (i = y.range(t, i));
      var u = K.isRange(i) ? y.rangeRef(t, i) : null, l = y.nodes(t, {
        at: i,
        match: s,
        mode: n,
        voids: o
      }), c = Array.from(
        l,
        (p) => {
          var [, h] = p;
          return y.pathRef(t, h);
        }
        // unwrapNode will call liftNode which does not support splitting the node when nested.
        // If we do not reverse the order and call it from top to the bottom, it will remove all blocks
        // that wrap target node. So we reverse the order.
      ).reverse(), d = function() {
        var h = v.unref(), [f] = y.node(t, h), m = y.range(t, h);
        a && u && (m = K.intersection(u.current, m)), J.liftNodes(t, {
          at: m,
          match: (b) => ce.isAncestor(f) && f.children.includes(b),
          voids: o
        });
      };
      for (var v of c)
        d();
      u && u.unref();
    }
  });
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
      fr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var ZC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  y.withoutNormalizing(t, () => {
    var {
      mode: a = "lowest",
      split: o = !1,
      voids: i = !1
    } = n, {
      match: s,
      at: u = t.selection
    } = n;
    if (u) {
      if (s == null && (j.isPath(u) ? s = lo(t, u) : t.isInline(r) ? s = (m) => ce.isElement(m) && y.isInline(t, m) || ye.isText(m) : s = (m) => ce.isElement(m) && y.isBlock(t, m)), o && K.isRange(u)) {
        var [l, c] = K.edges(u), d = y.rangeRef(t, u, {
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
      var v = Array.from(y.nodes(t, {
        at: u,
        match: t.isInline(r) ? (m) => ce.isElement(m) && y.isBlock(t, m) : (m) => y.isEditor(m),
        mode: "lowest",
        voids: i
      })), p = function() {
        var b = K.isRange(u) ? K.intersection(u, y.range(t, f)) : u;
        if (!b)
          return 0;
        var C = Array.from(y.nodes(t, {
          at: b,
          match: s,
          mode: a,
          voids: i
        }));
        if (C.length > 0) {
          var [E] = C, D = C[C.length - 1], [, w] = E, [, S] = D;
          if (w.length === 0 && S.length === 0)
            return 0;
          var O = j.equals(w, S) ? j.parent(w) : j.common(w, S), B = y.range(t, w, S), x = y.node(t, O), [F] = x, _ = O.length + 1, N = j.next(S.slice(0, _)), P = Jf(Jf({}, r), {}, {
            children: []
          });
          J.insertNodes(t, P, {
            at: N,
            voids: i
          }), J.moveNodes(t, {
            at: B,
            match: (I) => ce.isAncestor(F) && F.children.includes(I),
            to: N.concat(0),
            voids: i
          });
        }
      }, h;
      for (var [, f] of v)
        h = p();
    }
  });
}, QC = () => {
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
      return wy(e, ...n);
    },
    // Editor
    addMark: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Fy(e, ...n);
    },
    deleteBackward: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Ry(e, ...n);
    },
    deleteForward: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Ty(e, ...n);
    },
    deleteFragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Ny(e, ...n);
    },
    getFragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Oy(e, ...n);
    },
    insertBreak: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Ky(e, ...n);
    },
    insertSoftBreak: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return qy(e, ...n);
    },
    insertFragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return RC(e, ...n);
    },
    insertNode: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Uy(e, ...n);
    },
    insertText: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Xy(e, ...n);
    },
    normalizeNode: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return xy(e, ...n);
    },
    removeMark: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return OC(e, ...n);
    },
    getDirtyPaths: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Sy(e, ...n);
    },
    shouldNormalize: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Ay(e, ...n);
    },
    // Editor interface
    above: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return By(e, ...n);
    },
    after: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Py(e, ...n);
    },
    before: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return $y(e, ...n);
    },
    collapse: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return TC(e, ...n);
    },
    delete: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return $C(e, ...n);
    },
    deselect: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return NC(e, ...n);
    },
    edges: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Iy(e, ...n);
    },
    elementReadOnly: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return My(e, ...n);
    },
    end: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return jy(e, ...n);
    },
    first: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return ky(e, ...n);
    },
    fragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return _y(e, ...n);
    },
    getMarks: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return sC(e, ...n);
    },
    hasBlocks: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return zy(e, ...n);
    },
    hasInlines: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Vy(e, ...n);
    },
    hasPath: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Hy(e, ...n);
    },
    hasTexts: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Wy(e, ...n);
    },
    insertNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return _C(e, ...n);
    },
    isBlock: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Yy(e, ...n);
    },
    isEdge: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Zy(e, ...n);
    },
    isEmpty: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Qy(e, ...n);
    },
    isEnd: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Jy(e, ...n);
    },
    isNormalizing: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return eC(e, ...n);
    },
    isStart: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return tC(e, ...n);
    },
    last: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return rC(e, ...n);
    },
    leaf: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return nC(e, ...n);
    },
    levels: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return aC(e, ...n);
    },
    liftNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return LC(e, ...n);
    },
    mergeNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return HC(e, ...n);
    },
    move: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return IC(e, ...n);
    },
    moveNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return WC(e, ...n);
    },
    next: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return uC(e, ...n);
    },
    node: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return lC(e, ...n);
    },
    nodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return cC(e, ...n);
    },
    normalize: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return fC(e, ...n);
    },
    parent: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return dC(e, ...n);
    },
    path: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return mC(e, ...n);
    },
    pathRef: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return vC(e, ...n);
    },
    pathRefs: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return gC(e, ...n);
    },
    point: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return bC(e, ...n);
    },
    pointRef: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return hC(e, ...n);
    },
    pointRefs: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return pC(e, ...n);
    },
    positions: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return yC(e, ...n);
    },
    previous: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return CC(e, ...n);
    },
    range: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return wC(e, ...n);
    },
    rangeRef: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return EC(e, ...n);
    },
    rangeRefs: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return DC(e, ...n);
    },
    removeNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return KC(e, ...n);
    },
    select: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return MC(e, ...n);
    },
    setNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return UC(e, ...n);
    },
    setNormalizing: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return xC(e, ...n);
    },
    setPoint: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return jC(e, ...n);
    },
    setSelection: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return kC(e, ...n);
    },
    splitNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return GC(e, ...n);
    },
    start: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return AC(e, ...n);
    },
    string: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return BC(e, ...n);
    },
    unhangRange: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return FC(e, ...n);
    },
    unsetNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return XC(e, ...n);
    },
    unwrapNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return YC(e, ...n);
    },
    void: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Ly(e, ...n);
    },
    withoutNormalizing: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return PC(e, ...n);
    },
    wrapNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return ZC(e, ...n);
    }
  };
  return e;
}, ua = [], JC = function() {
  return ua.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, e1 = function() {
  return ua.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, ed = "ResizeObserver loop completed with undelivered notifications.", t1 = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: ed
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = ed), window.dispatchEvent(e);
}, qo;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(qo || (qo = {}));
var la = function(e) {
  return Object.freeze(e);
}, r1 = /* @__PURE__ */ function() {
  function e(t, r) {
    this.inlineSize = t, this.blockSize = r, la(this);
  }
  return e;
}(), Og = function() {
  function e(t, r, n, a) {
    return this.x = t, this.y = r, this.width = n, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, la(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, r = t.x, n = t.y, a = t.top, o = t.right, i = t.bottom, s = t.left, u = t.width, l = t.height;
    return { x: r, y: n, top: a, right: o, bottom: i, left: s, width: u, height: l };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), lc = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, xg = function(e) {
  if (lc(e)) {
    var t = e.getBBox(), r = t.width, n = t.height;
    return !r && !n;
  }
  var a = e, o = a.offsetWidth, i = a.offsetHeight;
  return !(o || i || e.getClientRects().length);
}, td = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var r = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(r && e instanceof r.Element);
}, n1 = function(e) {
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
}, Mo = typeof window < "u" ? window : {}, Si = /* @__PURE__ */ new WeakMap(), rd = /auto|scroll/, a1 = /^tb|vertical/, o1 = /msie|trident/i.test(Mo.navigator && Mo.navigator.userAgent), en = function(e) {
  return parseFloat(e || "0");
}, Ga = function(e, t, r) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = !1), new r1((r ? t : e) || 0, (r ? e : t) || 0);
}, nd = la({
  devicePixelContentBoxSize: Ga(),
  borderBoxSize: Ga(),
  contentBoxSize: Ga(),
  contentRect: new Og(0, 0, 0, 0)
}), Ag = function(e, t) {
  if (t === void 0 && (t = !1), Si.has(e) && !t)
    return Si.get(e);
  if (xg(e))
    return Si.set(e, nd), nd;
  var r = getComputedStyle(e), n = lc(e) && e.ownerSVGElement && e.getBBox(), a = !o1 && r.boxSizing === "border-box", o = a1.test(r.writingMode || ""), i = !n && rd.test(r.overflowY || ""), s = !n && rd.test(r.overflowX || ""), u = n ? 0 : en(r.paddingTop), l = n ? 0 : en(r.paddingRight), c = n ? 0 : en(r.paddingBottom), d = n ? 0 : en(r.paddingLeft), v = n ? 0 : en(r.borderTopWidth), p = n ? 0 : en(r.borderRightWidth), h = n ? 0 : en(r.borderBottomWidth), f = n ? 0 : en(r.borderLeftWidth), m = d + l, b = u + c, C = f + p, E = v + h, D = s ? e.offsetHeight - E - e.clientHeight : 0, w = i ? e.offsetWidth - C - e.clientWidth : 0, S = a ? m + C : 0, O = a ? b + E : 0, B = n ? n.width : en(r.width) - S - w, x = n ? n.height : en(r.height) - O - D, F = B + m + w + C, _ = x + b + D + E, N = la({
    devicePixelContentBoxSize: Ga(Math.round(B * devicePixelRatio), Math.round(x * devicePixelRatio), o),
    borderBoxSize: Ga(F, _, o),
    contentBoxSize: Ga(B, x, o),
    contentRect: new Og(d, u, B, x)
  });
  return Si.set(e, N), N;
}, Bg = function(e, t, r) {
  var n = Ag(e, r), a = n.borderBoxSize, o = n.contentBoxSize, i = n.devicePixelContentBoxSize;
  switch (t) {
    case qo.DEVICE_PIXEL_CONTENT_BOX:
      return i;
    case qo.BORDER_BOX:
      return a;
    default:
      return o;
  }
}, i1 = /* @__PURE__ */ function() {
  function e(t) {
    var r = Ag(t);
    this.target = t, this.contentRect = r.contentRect, this.borderBoxSize = la([r.borderBoxSize]), this.contentBoxSize = la([r.contentBoxSize]), this.devicePixelContentBoxSize = la([r.devicePixelContentBoxSize]);
  }
  return e;
}(), Fg = function(e) {
  if (xg(e))
    return 1 / 0;
  for (var t = 0, r = e.parentNode; r; )
    t += 1, r = r.parentNode;
  return t;
}, s1 = function() {
  var e = 1 / 0, t = [];
  ua.forEach(function(i) {
    if (i.activeTargets.length !== 0) {
      var s = [];
      i.activeTargets.forEach(function(l) {
        var c = new i1(l.target), d = Fg(l.target);
        s.push(c), l.lastReportedSize = Bg(l.target, l.observedBox), d < e && (e = d);
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
}, ad = function(e) {
  ua.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(a) {
      a.isActive() && (Fg(a.target) > e ? r.activeTargets.push(a) : r.skippedTargets.push(a));
    });
  });
}, u1 = function() {
  var e = 0;
  for (ad(e); JC(); )
    e = s1(), ad(e);
  return e1() && t1(), e > 0;
}, du, Pg = [], l1 = function() {
  return Pg.splice(0).forEach(function(e) {
    return e();
  });
}, c1 = function(e) {
  if (!du) {
    var t = 0, r = document.createTextNode(""), n = { characterData: !0 };
    new MutationObserver(function() {
      return l1();
    }).observe(r, n), du = function() {
      r.textContent = "".concat(t ? t-- : t++);
    };
  }
  Pg.push(e), du();
}, f1 = function(e) {
  c1(function() {
    requestAnimationFrame(e);
  });
}, Hi = 0, d1 = function() {
  return !!Hi;
}, v1 = 250, g1 = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, od = [
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
], id = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, vu = !1, m1 = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var r = this;
    if (t === void 0 && (t = v1), !vu) {
      vu = !0;
      var n = id(t);
      f1(function() {
        var a = !1;
        try {
          a = u1();
        } finally {
          if (vu = !1, t = n - id(), !d1())
            return;
          a ? r.run(1e3) : t > 0 ? r.run(t) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, r = function() {
      return t.observer && t.observer.observe(document.body, g1);
    };
    document.body ? r() : Mo.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), od.forEach(function(r) {
      return Mo.addEventListener(r, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), od.forEach(function(r) {
      return Mo.removeEventListener(r, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), Gu = new m1(), sd = function(e) {
  !Hi && e > 0 && Gu.start(), Hi += e, !Hi && Gu.stop();
}, h1 = function(e) {
  return !lc(e) && !n1(e) && getComputedStyle(e).display === "inline";
}, p1 = function() {
  function e(t, r) {
    this.target = t, this.observedBox = r || qo.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = Bg(this.target, this.observedBox, !0);
    return h1(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), b1 = /* @__PURE__ */ function() {
  function e(t, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = r;
  }
  return e;
}(), Oi = /* @__PURE__ */ new WeakMap(), ud = function(e, t) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === t)
      return r;
  return -1;
}, xi = function() {
  function e() {
  }
  return e.connect = function(t, r) {
    var n = new b1(t, r);
    Oi.set(t, n);
  }, e.observe = function(t, r, n) {
    var a = Oi.get(t), o = a.observationTargets.length === 0;
    ud(a.observationTargets, r) < 0 && (o && ua.push(a), a.observationTargets.push(new p1(r, n && n.box)), sd(1), Gu.schedule());
  }, e.unobserve = function(t, r) {
    var n = Oi.get(t), a = ud(n.observationTargets, r), o = n.observationTargets.length === 1;
    a >= 0 && (o && ua.splice(ua.indexOf(n), 1), n.observationTargets.splice(a, 1), sd(-1));
  }, e.disconnect = function(t) {
    var r = this, n = Oi.get(t);
    n.observationTargets.slice().forEach(function(a) {
      return r.unobserve(t, a.target);
    }), n.activeTargets.splice(0, n.activeTargets.length);
  }, e;
}(), y1 = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    xi.connect(this, t);
  }
  return e.prototype.observe = function(t, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!td(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    xi.observe(this, t, r);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!td(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    xi.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    xi.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}(), On = {};
Object.defineProperty(On, "__esModule", {
  value: !0
});
var C1 = typeof window < "u" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), gu = {
  alt: "altKey",
  control: "ctrlKey",
  meta: "metaKey",
  shift: "shiftKey"
}, $g = {
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
  mod: C1 ? "meta" : "control",
  opt: "alt",
  option: "alt",
  return: "enter",
  right: "arrowright",
  space: " ",
  spacebar: " ",
  up: "arrowup",
  win: "meta",
  windows: "meta"
}, cc = {
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
for (var Ai = 1; Ai < 20; Ai++)
  cc["f" + Ai] = 111 + Ai;
function Ts(e, t, r) {
  t && !("byKey" in t) && (r = t, t = null), Array.isArray(e) || (e = [e]);
  var n = e.map(function(i) {
    return Rg(i, t);
  }), a = function(s) {
    return n.some(function(u) {
      return Tg(u, s);
    });
  }, o = r == null ? a : a(r);
  return o;
}
function E1(e, t) {
  return Ts(e, t);
}
function D1(e, t) {
  return Ts(e, { byKey: !0 }, t);
}
function Rg(e, t) {
  var r = t && t.byKey, n = {};
  e = e.replace("++", "+add");
  var a = e.split("+"), o = a.length;
  for (var i in gu)
    n[gu[i]] = !1;
  var s = !0, u = !1, l = void 0;
  try {
    for (var c = a[Symbol.iterator](), d; !(s = (d = c.next()).done); s = !0) {
      var v = d.value, p = v.endsWith("?") && v.length > 1;
      p && (v = v.slice(0, -1));
      var h = fc(v), f = gu[h];
      if (v.length > 1 && !f && !$g[v] && !cc[h])
        throw new TypeError('Unknown modifier: "' + v + '"');
      (o === 1 || !f) && (r ? n.key = h : n.which = Ng(v)), f && (n[f] = p ? null : !0);
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
function Tg(e, t) {
  for (var r in e) {
    var n = e[r], a = void 0;
    if (n != null && (r === "key" && t.key != null ? a = t.key.toLowerCase() : r === "which" ? a = n === 91 && t.which === 93 ? 91 : t.which : a = t[r], !(a == null && n === !1) && a !== n))
      return !1;
  }
  return !0;
}
function Ng(e) {
  e = fc(e);
  var t = cc[e] || e.toUpperCase().charCodeAt(0);
  return t;
}
function fc(e) {
  return e = e.toLowerCase(), e = $g[e] || e, e;
}
On.default = Ts;
var mu = On.isHotkey = Ts;
On.isCodeHotkey = E1;
On.isKeyHotkey = D1;
On.parseHotkey = Rg;
On.compareHotkey = Tg;
On.toKeyCode = Ng;
On.toKeyName = fc;
function w1(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Ja(e, t) {
  if (e == null)
    return {};
  var r = w1(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Go(e) {
  "@babel/helpers - typeof";
  return Go = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Go(e);
}
function S1(e, t) {
  if (Go(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Go(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function O1(e) {
  var t = S1(e, "string");
  return Go(t) === "symbol" ? t : String(t);
}
function Nr(e, t, r) {
  return t = O1(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var dc = /* @__PURE__ */ Gr(null), dr = () => {
  var e = Ut(dc);
  if (!e)
    throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
  return e;
}, Ig = parseInt(ne.version.split(".")[0], 10), x1 = typeof navigator < "u" && typeof window < "u" && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, ld = typeof navigator < "u" && /Mac OS X/.test(navigator.userAgent), ur = typeof navigator < "u" && /Android/.test(navigator.userAgent), Ha = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), Ro = typeof navigator < "u" && /AppleWebKit(?!.*Chrome)/i.test(navigator.userAgent), A1 = typeof navigator < "u" && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent), Mg = typeof navigator < "u" && /Chrome/i.test(navigator.userAgent), B1 = typeof navigator < "u" && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent), F1 = ur && typeof navigator < "u" && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent), P1 = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent), $1 = typeof navigator < "u" && /.*UCBrowser/.test(navigator.userAgent), R1 = typeof navigator < "u" && /.*Wechat/.test(navigator.userAgent) && !/.*MacWechat/.test(navigator.userAgent), Wi = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Rn = (!B1 || !F1) && !A1 && // globalThis is undefined in older browsers
typeof globalThis < "u" && globalThis.InputEvent && // @ts-ignore The `getTargetRanges` property isn't recognized.
typeof globalThis.InputEvent.prototype.getTargetRanges == "function", vc = /* @__PURE__ */ new WeakMap(), gc = /* @__PURE__ */ new WeakMap(), jg = /* @__PURE__ */ new WeakMap(), Ki = /* @__PURE__ */ new WeakMap(), Xu = /* @__PURE__ */ new WeakMap(), Xo = /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ new WeakMap(), ls = /* @__PURE__ */ new WeakMap(), Ns = /* @__PURE__ */ new WeakMap(), Yu = /* @__PURE__ */ new WeakMap(), _n = /* @__PURE__ */ new WeakMap(), aa = /* @__PURE__ */ new WeakMap(), jo = /* @__PURE__ */ new WeakMap(), Zu = /* @__PURE__ */ new WeakMap(), mc = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakMap(), Mn = /* @__PURE__ */ new WeakMap(), jn = /* @__PURE__ */ new WeakMap(), kg = /* @__PURE__ */ new WeakMap(), eo = Symbol("placeholder"), _g = Symbol("mark-placeholder"), T1 = globalThis.Text, hc = (e) => e && e.ownerDocument && e.ownerDocument.defaultView || null, N1 = (e) => Hn(e) && e.nodeType === 8, Tr = (e) => Hn(e) && e.nodeType === 1, Hn = (e) => {
  var t = hc(e);
  return !!t && e instanceof t.Node;
}, Qu = (e) => {
  var t = e && e.anchorNode && hc(e.anchorNode);
  return !!t && e instanceof t.Selection;
}, Lg = (e) => Hn(e) && e.nodeType === 3, I1 = (e) => e.clipboardData && e.clipboardData.getData("text/plain") !== "" && e.clipboardData.types.length === 1, M1 = (e) => {
  var [t, r] = e;
  if (Tr(t) && t.childNodes.length) {
    var n = r === t.childNodes.length, a = n ? r - 1 : r;
    for ([t, a] = zg(t, a, n ? "backward" : "forward"), n = a < r; Tr(t) && t.childNodes.length; ) {
      var o = n ? t.childNodes.length - 1 : 0;
      t = k1(t, o, n ? "backward" : "forward");
    }
    r = n && t.textContent != null ? t.textContent.length : 0;
  }
  return [t, r];
}, j1 = (e) => {
  for (var t = e && e.parentNode; t; ) {
    if (t.toString() === "[object ShadowRoot]")
      return !0;
    t = t.parentNode;
  }
  return !1;
}, zg = (e, t, r) => {
  for (var {
    childNodes: n
  } = e, a = n[t], o = t, i = !1, s = !1; (N1(a) || Tr(a) && a.childNodes.length === 0 || Tr(a) && a.getAttribute("contenteditable") === "false") && !(i && s); ) {
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
}, k1 = (e, t, r) => {
  var [n] = zg(e, t, r);
  return n;
}, Vg = (e) => {
  var t = "";
  if (Lg(e) && e.nodeValue)
    return e.nodeValue;
  if (Tr(e)) {
    for (var r of Array.from(e.childNodes))
      t += Vg(r);
    var n = getComputedStyle(e).getPropertyValue("display");
    (n === "block" || n === "list" || e.tagName === "BR") && (t += `
`);
  }
  return t;
}, _1 = /data-slate-fragment="(.+?)"/m, L1 = (e) => {
  var t = e.getData("text/html"), [, r] = t.match(_1) || [];
  return r;
}, pc = (e, t, r) => {
  var {
    target: n
  } = t;
  if (Tr(n) && n.matches('[contentEditable="false"]'))
    return !1;
  var {
    document: a
  } = X.getWindow(e);
  if (a.contains(n))
    return X.hasDOMNode(e, n, {
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
  return !o || o === t ? !1 : pc(e, o, r);
}, z1 = 0;
class V1 {
  constructor() {
    Nr(this, "id", void 0), this.id = "".concat(z1++);
  }
}
var X = {
  androidPendingDiffs: (e) => gr.get(e),
  androidScheduleFlush: (e) => {
    var t;
    (t = mc.get(e)) === null || t === void 0 || t();
  },
  blur: (e) => {
    var t = X.toDOMNode(e, e), r = X.findDocumentOrShadowRoot(e);
    _n.set(e, !1), r.activeElement === t && t.blur();
  },
  deselect: (e) => {
    var {
      selection: t
    } = e, r = X.findDocumentOrShadowRoot(e), n = r.getSelection();
    n && n.rangeCount > 0 && n.removeAllRanges(), t && J.deselect(e);
  },
  findDocumentOrShadowRoot: (e) => {
    var t = X.toDOMNode(e, e), r = t.getRootNode();
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
    var o = X.toSlateNode(e, t.target), i = X.findPath(e, o);
    if (ce.isElement(o) && y.isVoid(e, o)) {
      var s = a.getBoundingClientRect(), u = e.isInline(o) ? r - s.left < s.left + s.width - r : n - s.top < s.top + s.height - n, l = y.point(e, i, {
        edge: u ? "start" : "end"
      }), c = u ? y.before(e, l) : y.after(e, l);
      if (c) {
        var d = y.range(e, c);
        return d;
      }
    }
    var v, {
      document: p
    } = X.getWindow(e);
    if (p.caretRangeFromPoint)
      v = p.caretRangeFromPoint(r, n);
    else {
      var h = p.caretPositionFromPoint(r, n);
      h && (v = p.createRange(), v.setStart(h.offsetNode, h.offset), v.setEnd(h.offsetNode, h.offset));
    }
    if (!v)
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
    var f = X.toSlateRange(e, v, {
      exactMatch: !1,
      suppressThrow: !1
    });
    return f;
  },
  findKey: (e, t) => {
    var r = ls.get(t);
    return r || (r = new V1(), ls.set(t, r)), r;
  },
  findPath: (e, t) => {
    for (var r = [], n = t; ; ) {
      var a = gc.get(n);
      if (a == null) {
        if (y.isEditor(n))
          return r;
        break;
      }
      var o = vc.get(n);
      if (o == null)
        break;
      r.unshift(o), n = a;
    }
    throw new Error("Unable to find the path for Slate node: ".concat(Wt.stringify(t)));
  },
  focus: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      retries: 5
    };
    if (!_n.get(t)) {
      if (r.retries <= 0)
        throw new Error("Could not set focus, editor seems stuck with pending operations");
      if (t.operations.length > 0) {
        setTimeout(() => {
          X.focus(t, {
            retries: r.retries - 1
          });
        }, 10);
        return;
      }
      var n = X.toDOMNode(t, t), a = X.findDocumentOrShadowRoot(t);
      if (a.activeElement !== n) {
        if (t.selection && a instanceof Document) {
          var o = a.getSelection(), i = X.toDOMRange(t, t.selection);
          o == null || o.removeAllRanges(), o == null || o.addRange(i);
        }
        t.selection || (J.select(t, y.start(t, [])), t.onChange()), _n.set(t, !0), n.focus({
          preventScroll: !0
        });
      }
    }
  },
  getWindow: (e) => {
    var t = jg.get(e);
    if (!t)
      throw new Error("Unable to find a host window element for this editor");
    return t;
  },
  hasDOMNode: function(t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      editable: a = !1
    } = n, o = X.toDOMNode(t, t), i;
    try {
      i = Tr(r) ? r : r.parentElement;
    } catch (s) {
      if (s instanceof Error && !s.message.includes('Permission denied to access property "nodeType"'))
        throw s;
    }
    return i ? i.closest("[data-slate-editor]") === o && (!a || i.isContentEditable ? !0 : typeof i.isContentEditable == "boolean" && // isContentEditable exists only on HTMLElement, and on other nodes it will be undefined
    // this is the core logic that lets you know you got the right editor.selection instead of null when editor is contenteditable="false"(readOnly)
    i.closest('[contenteditable="false"]') === o || !!i.getAttribute("data-slate-zero-width")) : !1;
  },
  hasEditableTarget: (e, t) => Hn(t) && X.hasDOMNode(e, t, {
    editable: !0
  }),
  hasRange: (e, t) => {
    var {
      anchor: r,
      focus: n
    } = t;
    return y.hasPath(e, r.path) && y.hasPath(e, n.path);
  },
  hasSelectableTarget: (e, t) => X.hasEditableTarget(e, t) || X.isTargetInsideNonReadonlyVoid(e, t),
  hasTarget: (e, t) => Hn(t) && X.hasDOMNode(e, t),
  insertData: (e, t) => {
    e.insertData(t);
  },
  insertFragmentData: (e, t) => e.insertFragmentData(t),
  insertTextData: (e, t) => e.insertTextData(t),
  isComposing: (e) => !!aa.get(e),
  isFocused: (e) => !!_n.get(e),
  isReadOnly: (e) => !!Yu.get(e),
  isTargetInsideNonReadonlyVoid: (e, t) => {
    if (Yu.get(e))
      return !1;
    var r = X.hasTarget(e, t) && X.toSlateNode(e, t);
    return ce.isElement(r) && y.isVoid(e, r);
  },
  setFragmentData: (e, t, r) => e.setFragmentData(t, r),
  toDOMNode: (e, t) => {
    var r = Ns.get(e), n = y.isEditor(t) ? Ki.get(e) : r == null ? void 0 : r.get(X.findKey(e, t));
    if (!n)
      throw new Error("Cannot resolve a DOM node from Slate node: ".concat(Wt.stringify(t)));
    return n;
  },
  toDOMPoint: (e, t) => {
    var [r] = y.node(e, t.path), n = X.toDOMNode(e, r), a;
    y.void(e, {
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
            b instanceof T1 ? b : f,
            (m = f.textContent) !== null && m !== void 0 && m.startsWith("\uFEFF") ? 1 : 0
          ];
          break;
        }
        if (t.offset <= h) {
          var C = Math.min(d, Math.max(0, t.offset - s));
          a = [c, C];
          break;
        }
        s = h;
      }
    }
    if (!a)
      throw new Error("Cannot resolve a DOM point from Slate point: ".concat(Wt.stringify(t)));
    return a;
  },
  toDOMRange: (e, t) => {
    var {
      anchor: r,
      focus: n
    } = t, a = K.isBackward(t), o = X.toDOMPoint(e, r), i = K.isCollapsed(t) ? o : X.toDOMPoint(e, n), s = X.getWindow(e), u = s.document.createRange(), [l, c] = a ? i : o, [d, v] = a ? o : i, p = Tr(l) ? l : l.parentElement, h = !!p.getAttribute("data-slate-zero-width"), f = Tr(d) ? d : d.parentElement, m = !!f.getAttribute("data-slate-zero-width");
    return u.setStart(l, h ? 1 : c), u.setEnd(d, m ? 1 : v), u;
  },
  toSlateNode: (e, t) => {
    var r = Tr(t) ? t : t.parentElement;
    r && !r.hasAttribute("data-slate-node") && (r = r.closest("[data-slate-node]"));
    var n = r ? Xo.get(r) : null;
    if (!n)
      throw new Error("Cannot resolve a Slate node from DOM node: ".concat(r));
    return n;
  },
  toSlatePoint: (e, t, r) => {
    var {
      exactMatch: n,
      suppressThrow: a
    } = r, [o, i] = n ? t : M1(t), s = o.parentNode, u = null, l = 0;
    if (s) {
      var c, d, v = X.toDOMNode(e, e), p = s.closest('[data-slate-void="true"]'), h = p && v.contains(p) ? p : null, f = s.closest("[data-slate-leaf]"), m = null;
      if (f) {
        if (u = f.closest('[data-slate-node="text"]'), u) {
          var b = X.getWindow(e), C = b.document.createRange();
          C.setStart(u, 0), C.setEnd(o, i);
          var E = C.cloneContents(), D = [...Array.prototype.slice.call(E.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(E.querySelectorAll("[contenteditable=false]"))];
          D.forEach((I) => {
            if (ur && !n && I.hasAttribute("data-slate-zero-width") && I.textContent.length > 0 && I.textContext !== "\uFEFF") {
              I.textContent.startsWith("\uFEFF") && (I.textContent = I.textContent.slice(1));
              return;
            }
            I.parentNode.removeChild(I);
          }), l = E.textContent.length, m = u;
        }
      } else if (h) {
        for (var w = h.querySelectorAll("[data-slate-leaf]"), S = 0; S < w.length; S++) {
          var O = w[S];
          if (X.hasDOMNode(e, O)) {
            f = O;
            break;
          }
        }
        f ? (u = f.closest('[data-slate-node="text"]'), m = f, l = m.textContent.length, m.querySelectorAll("[data-slate-zero-width]").forEach((I) => {
          l -= I.textContent.length;
        })) : l = 1;
      }
      m && l === m.textContent.length && // COMPAT: Android IMEs might remove the zero width space while composing,
      // and we don't add it for line-breaks.
      ur && m.getAttribute("data-slate-zero-width") === "z" && (c = m.textContent) !== null && c !== void 0 && c.startsWith("\uFEFF") && // COMPAT: If the parent node is a Slate zero-width space, editor is
      // because the text node should have no characters. However, during IME
      // composition the ASCII characters will be prepended to the zero-width
      // space, so subtract 1 from the offset to account for the zero-width
      // space character.
      (s.hasAttribute("data-slate-zero-width") || // COMPAT: In Firefox, `range.cloneContents()` returns an extra trailing '\n'
      // when the document ends with a new-line character. This results in the offset
      // length being off by one, so we need to subtract one to account for this.
      Ha && (d = m.textContent) !== null && d !== void 0 && d.endsWith(`

`)) && l--;
    }
    if (ur && !u && !n) {
      var B = s.hasAttribute("data-slate-node") ? s : s.closest("[data-slate-node]");
      if (B && X.hasDOMNode(e, B, {
        editable: !0
      })) {
        var x = X.toSlateNode(e, B), {
          path: F,
          offset: _
        } = y.start(e, X.findPath(e, x));
        return B.querySelector("[data-slate-leaf]") || (_ = i), {
          path: F,
          offset: _
        };
      }
    }
    if (!u) {
      if (a)
        return null;
      throw new Error("Cannot resolve a Slate point from DOM point: ".concat(t));
    }
    var N = X.toSlateNode(e, u), P = X.findPath(e, N);
    return {
      path: P,
      offset: l
    };
  },
  toSlateRange: (e, t, r) => {
    var n, {
      exactMatch: a,
      suppressThrow: o
    } = r, i = Qu(t) ? t.anchorNode : t.startContainer, s, u, l, c, d;
    if (i)
      if (Qu(t)) {
        if (Ha && t.rangeCount > 1) {
          l = t.focusNode;
          var v = t.getRangeAt(0), p = t.getRangeAt(t.rangeCount - 1);
          if (l instanceof HTMLTableRowElement && v.startContainer instanceof HTMLTableRowElement && p.startContainer instanceof HTMLTableRowElement) {
            let S = function(O) {
              return O.childElementCount > 0 ? S(O.children[0]) : O;
            };
            var h = v.startContainer, f = p.startContainer, m = S(h.children[v.startOffset]), b = S(f.children[p.startOffset]);
            c = 0, b.childNodes.length > 0 ? s = b.childNodes[0] : s = b, m.childNodes.length > 0 ? l = m.childNodes[0] : l = m, b instanceof HTMLElement ? u = b.innerHTML.length : u = 0;
          } else
            v.startContainer === l ? (s = p.endContainer, u = p.endOffset, c = v.startOffset) : (s = v.startContainer, u = v.endOffset, c = p.startOffset);
        } else
          s = t.anchorNode, u = t.anchorOffset, l = t.focusNode, c = t.focusOffset;
        Mg && j1(s) || Ha ? d = t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : d = t.isCollapsed;
      } else
        s = t.startContainer, u = t.startOffset, l = t.endContainer, c = t.endOffset, d = t.collapsed;
    if (s == null || l == null || u == null || c == null)
      throw new Error("Cannot resolve a Slate range from DOM range: ".concat(t));
    if (Ha && (n = l.textContent) !== null && n !== void 0 && n.endsWith(`

`) && c === l.textContent.length && c--, "getAttribute" in l && l.getAttribute("contenteditable") === "false" && l.getAttribute("data-slate-void") !== "true") {
      var C;
      l = s, c = ((C = s.textContent) === null || C === void 0 ? void 0 : C.length) || 0;
    }
    var E = X.toSlatePoint(e, [s, u], {
      exactMatch: a,
      suppressThrow: o
    });
    if (!E)
      return null;
    var D = d ? E : X.toSlatePoint(e, [l, c], {
      exactMatch: a,
      suppressThrow: o
    });
    if (!D)
      return null;
    var w = {
      anchor: E,
      focus: D
    };
    return K.isExpanded(w) && K.isForward(w) && Tr(l) && y.void(e, {
      at: w.focus,
      mode: "highest"
    }) && (w = y.unhangRange(e, w, {
      voids: !0
    })), w;
  }
};
function H1(e, t) {
  var {
    path: r,
    diff: n
  } = t;
  if (!y.hasPath(e, r))
    return !1;
  var a = ie.get(e, r);
  if (!ye.isText(a))
    return !1;
  if (n.start !== a.text.length || n.text.length === 0)
    return a.text.slice(n.start, n.start + n.text.length) === n.text;
  var o = j.next(r);
  if (!y.hasPath(e, o))
    return !1;
  var i = ie.get(e, o);
  return ye.isText(i) && i.text.startsWith(n.text);
}
function Hg(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return r.reduce((a, o) => a.slice(0, o.start) + o.text + a.slice(o.end), e);
}
function W1(e, t) {
  for (var r = Math.min(e.length, t.length), n = 0; n < r; n++)
    if (e.charAt(n) !== t.charAt(n))
      return n;
  return r;
}
function K1(e, t, r) {
  for (var n = Math.min(e.length, t.length, r), a = 0; a < n; a++)
    if (e.charAt(e.length - a - 1) !== t.charAt(t.length - a - 1))
      return a;
  return n;
}
function Wg(e, t) {
  var {
    start: r,
    end: n,
    text: a
  } = t, o = e.slice(r, n), i = W1(o, a), s = Math.min(o.length - i, a.length - i), u = K1(o, a, s), l = {
    start: r + i,
    end: n - u,
    text: a.slice(i, a.length - u)
  };
  return l.start === l.end && l.text.length === 0 ? null : l;
}
function U1(e, t, r) {
  var n = Math.min(t.start, r.start), a = Math.max(0, Math.min(t.start + t.text.length, r.end) - r.start), o = Hg(e, t, r), i = Math.max(r.start + r.text.length, t.start + t.text.length + (t.start + t.text.length > r.start ? r.text.length : 0) - a), s = o.slice(n, i), u = Math.max(t.end, r.end - t.text.length + (t.end - t.start));
  return Wg(e, {
    start: n,
    end: u,
    text: s
  });
}
function q1(e) {
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
function Ju(e, t) {
  var {
    path: r,
    offset: n
  } = t;
  if (!y.hasPath(e, r))
    return null;
  var a = ie.get(e, r);
  if (!ye.isText(a))
    return null;
  var o = y.above(e, {
    match: (s) => ce.isElement(s) && y.isBlock(e, s),
    at: r
  });
  if (!o)
    return null;
  for (; n > a.text.length; ) {
    var i = y.next(e, {
      at: r,
      match: ye.isText
    });
    if (!i || !j.isDescendant(i[1], o[1]))
      return null;
    n -= a.text.length, a = i[0], r = i[1];
  }
  return {
    path: r,
    offset: n
  };
}
function cd(e, t) {
  var r = Ju(e, t.anchor);
  if (!r)
    return null;
  if (K.isCollapsed(t))
    return {
      anchor: r,
      focus: r
    };
  var n = Ju(e, t.focus);
  return n ? {
    anchor: r,
    focus: n
  } : null;
}
function el(e, t, r) {
  var n = gr.get(e), a = n == null ? void 0 : n.find((c) => {
    var {
      path: d
    } = c;
    return j.equals(d, t.path);
  });
  if (!a || t.offset <= a.diff.start)
    return ze.transform(t, r, {
      affinity: "backward"
    });
  var {
    diff: o
  } = a;
  if (t.offset <= o.start + o.text.length) {
    var i = {
      path: t.path,
      offset: o.start
    }, s = ze.transform(i, r, {
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
  }, l = ze.transform(u, r, {
    affinity: "backward"
  });
  return l ? r.type === "split_node" && j.equals(r.path, t.path) && u.offset < r.position && o.start < r.position ? l : {
    path: l.path,
    offset: l.offset + o.text.length - o.end + o.start
  } : null;
}
function fd(e, t, r) {
  var n = el(e, t.anchor, r);
  if (!n)
    return null;
  if (K.isCollapsed(t))
    return {
      anchor: n,
      focus: n
    };
  var a = el(e, t.focus, r);
  return a ? {
    anchor: n,
    focus: a
  } : null;
}
function G1(e, t) {
  var {
    path: r,
    diff: n,
    id: a
  } = e;
  switch (t.type) {
    case "insert_text":
      return !j.equals(t.path, r) || t.offset >= n.end ? e : t.offset <= n.start ? {
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
      return !j.equals(t.path, r) || t.offset >= n.end ? e : t.offset + t.text.length <= n.start ? {
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
      return !j.equals(t.path, r) || t.position >= n.end ? {
        diff: n,
        id: a,
        path: j.transform(r, t, {
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
        path: j.transform(r, t, {
          affinity: "forward"
        })
      };
    case "merge_node":
      return j.equals(t.path, r) ? {
        diff: {
          start: n.start + t.position,
          end: n.end + t.position,
          text: n.text
        },
        id: a,
        path: j.transform(r, t)
      } : {
        diff: n,
        id: a,
        path: j.transform(r, t)
      };
  }
  var o = j.transform(r, t);
  return o ? {
    diff: n,
    path: o,
    id: a
  } : null;
}
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
function Bi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dd(Object(r), !0).forEach(function(n) {
      Nr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var X1 = 25, Y1 = 200, Z1 = function() {
}, Q1 = (e) => (e == null ? void 0 : e.constructor.name) === "DataTransfer";
function J1(e) {
  var {
    editor: t,
    scheduleOnDOMSelectionChange: r,
    onDOMSelectionChange: n
  } = e, a = !1, o = null, i = null, s = null, u = 0, l = !1, c = () => {
    var N = jn.get(t);
    if (jn.delete(t), N) {
      var {
        selection: P
      } = t, I = cd(t, N);
      I && (!P || !K.equals(I, P)) && J.select(t, I);
    }
  }, d = () => {
    var N = Mn.get(t);
    if (Mn.delete(t), !!N) {
      if (N.at) {
        var P = ze.isPoint(N.at) ? Ju(t, N.at) : cd(t, N.at);
        if (!P)
          return;
        var I = y.range(t, P);
        (!t.selection || !K.equals(t.selection, I)) && J.select(t, P);
      }
      N.run();
    }
  }, v = () => {
    if (i && (clearTimeout(i), i = null), s && (clearTimeout(s), s = null), !D() && !E()) {
      c();
      return;
    }
    a || (a = !0, setTimeout(() => a = !1)), E() && (a = "action");
    var N = t.selection && y.rangeRef(t, t.selection, {
      affinity: "forward"
    });
    bn.set(t, t.marks), Z1("flush", Mn.get(t), gr.get(t));
    for (var P = D(), I; I = (T = gr.get(t)) === null || T === void 0 ? void 0 : T[0]; ) {
      var T, k, A = Wr.get(t);
      A !== void 0 && (Wr.delete(t), t.marks = A), A && l === !1 && (l = null);
      var M = q1(I);
      (!t.selection || !K.equals(t.selection, M)) && J.select(t, M), I.diff.text ? y.insertText(t, I.diff.text) : y.deleteFragment(t), gr.set(t, (k = gr.get(t)) === null || k === void 0 ? void 0 : k.filter((U) => {
        var {
          id: G
        } = U;
        return G !== I.id;
      })), H1(t, I) || (P = !1, Mn.delete(t), bn.delete(t), a = "action", jn.delete(t), r.cancel(), n.cancel(), N == null || N.unref());
    }
    var V = N == null ? void 0 : N.unref();
    if (V && !jn.get(t) && (!t.selection || !K.equals(V, t.selection)) && J.select(t, V), E()) {
      d();
      return;
    }
    P && r(), r.flush(), n.flush(), c();
    var z = bn.get(t);
    bn.delete(t), z !== void 0 && (t.marks = z, t.onChange());
  }, p = (N) => {
    o && clearTimeout(o), o = setTimeout(() => {
      aa.set(t, !1), v();
    }, X1);
  }, h = (N) => {
    aa.set(t, !0), o && (clearTimeout(o), o = null);
  }, f = function() {
    var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, I = Xu.get(t);
    if (I) {
      if (D() || P) {
        I.style.display = "none";
        return;
      }
      I.style.removeProperty("display");
    }
  }, m = (N, P) => {
    var I, T = (I = gr.get(t)) !== null && I !== void 0 ? I : [];
    gr.set(t, T);
    var k = ie.leaf(t, N), A = T.findIndex((z) => j.equals(z.path, N));
    if (A < 0) {
      var M = Wg(k.text, P);
      M && T.push({
        path: N,
        diff: P,
        id: u++
      }), f();
      return;
    }
    var V = U1(k.text, T[A].diff, P);
    if (!V) {
      T.splice(A, 1), f();
      return;
    }
    T[A] = Bi(Bi({}, T[A]), {}, {
      diff: V
    });
  }, b = function(P) {
    var {
      at: I
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    l = !1, jn.delete(t), r.cancel(), n.cancel(), E() && v(), Mn.set(t, {
      at: I,
      run: P
    }), s = setTimeout(v);
  }, C = (N) => {
    var P;
    i && (clearTimeout(i), i = null);
    var {
      inputType: I
    } = N, T = null, k = N.dataTransfer || N.data || void 0;
    l !== !1 && I !== "insertText" && I !== "insertCompositionText" && (l = !1);
    var [A] = N.getTargetRanges();
    A && (T = X.toSlateRange(t, A, {
      exactMatch: !1,
      suppressThrow: !0
    }));
    var M = X.getWindow(t), V = M.getSelection();
    if (!T && V && (A = V, T = X.toSlateRange(t, V, {
      exactMatch: !1,
      suppressThrow: !0
    })), T = (P = T) !== null && P !== void 0 ? P : t.selection, !!T) {
      var z = !0;
      if (I.startsWith("delete")) {
        if (K.isExpanded(T)) {
          var [U, G] = K.edges(T), Q = ie.leaf(t, U.path);
          if (Q.text.length === U.offset && G.offset === 0) {
            var R = y.next(t, {
              at: U.path,
              match: ye.isText
            });
            R && j.equals(R[1], G.path) && (T = {
              anchor: G,
              focus: G
            });
          }
        }
        var H = I.endsWith("Backward") ? "backward" : "forward", [L, q] = K.edges(T), [re, te] = y.leaf(t, L.path), ue = {
          text: "",
          start: L.offset,
          end: q.offset
        }, se = gr.get(t), ve = se == null ? void 0 : se.find((ct) => j.equals(ct.path, te)), le = ve ? [ve.diff, ue] : [ue], Y = Hg(re.text, ...le);
        if (Y.length === 0 && (z = !1), K.isExpanded(T)) {
          if (z && j.equals(T.anchor.path, T.focus.path)) {
            var me = {
              path: T.anchor.path,
              offset: L.offset
            }, Ee = y.range(t, me, me);
            return O(Ee), m(T.anchor.path, {
              text: "",
              end: q.offset,
              start: L.offset
            });
          }
          return b(() => y.deleteFragment(t, {
            direction: H
          }), {
            at: T
          });
        }
      }
      switch (I) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag":
          return b(() => y.deleteFragment(t), {
            at: T
          });
        case "deleteContent":
        case "deleteContentForward": {
          var {
            anchor: Ae
          } = T;
          if (z && K.isCollapsed(T)) {
            var $e = ie.leaf(t, Ae.path);
            if (Ae.offset < $e.text.length)
              return m(Ae.path, {
                text: "",
                start: Ae.offset,
                end: Ae.offset + 1
              });
          }
          return b(() => y.deleteForward(t), {
            at: T
          });
        }
        case "deleteContentBackward": {
          var fe, {
            anchor: Oe
          } = T, ge = Qu(A) ? A.isCollapsed : !!((fe = A) !== null && fe !== void 0 && fe.collapsed);
          return z && ge && K.isCollapsed(T) && Oe.offset > 0 ? m(Oe.path, {
            text: "",
            start: Oe.offset - 1,
            end: Oe.offset
          }) : b(() => y.deleteBackward(t), {
            at: T
          });
        }
        case "deleteEntireSoftLine":
          return b(() => {
            y.deleteBackward(t, {
              unit: "line"
            }), y.deleteForward(t, {
              unit: "line"
            });
          }, {
            at: T
          });
        case "deleteHardLineBackward":
          return b(() => y.deleteBackward(t, {
            unit: "block"
          }), {
            at: T
          });
        case "deleteSoftLineBackward":
          return b(() => y.deleteBackward(t, {
            unit: "line"
          }), {
            at: T
          });
        case "deleteHardLineForward":
          return b(() => y.deleteForward(t, {
            unit: "block"
          }), {
            at: T
          });
        case "deleteSoftLineForward":
          return b(() => y.deleteForward(t, {
            unit: "line"
          }), {
            at: T
          });
        case "deleteWordBackward":
          return b(() => y.deleteBackward(t, {
            unit: "word"
          }), {
            at: T
          });
        case "deleteWordForward":
          return b(() => y.deleteForward(t, {
            unit: "word"
          }), {
            at: T
          });
        case "insertLineBreak":
          return b(() => y.insertSoftBreak(t), {
            at: T
          });
        case "insertParagraph":
          return b(() => y.insertBreak(t), {
            at: T
          });
        case "insertCompositionText":
        case "deleteCompositionText":
        case "insertFromComposition":
        case "insertFromDrop":
        case "insertFromPaste":
        case "insertFromYank":
        case "insertReplacementText":
        case "insertText": {
          if (Q1(k))
            return b(() => X.insertData(t, k), {
              at: T
            });
          var pe = k ?? "";
          if (Wr.get(t) && (pe = pe.replace("\uFEFF", "")), I === "insertText" && /.*\n.*\n$/.test(pe) && (pe = pe.slice(0, -1)), pe.includes(`
`))
            return b(() => {
              var ct = pe.split(`
`);
              ct.forEach((Ve, tt) => {
                Ve && y.insertText(t, Ve), tt !== ct.length - 1 && y.insertSoftBreak(t);
              });
            }, {
              at: T
            });
          if (j.equals(T.anchor.path, T.focus.path)) {
            var [he, Fe] = K.edges(T), Pe = {
              start: he.offset,
              end: Fe.offset,
              text: pe
            };
            if (pe && l && I === "insertCompositionText") {
              var Re = l.start + l.text.search(/\S|$/), xt = Pe.start + Pe.text.search(/\S|$/);
              xt === Re + 1 && Pe.end === l.start + l.text.length ? (Pe.start -= 1, l = null, F()) : l = !1;
            } else
              I === "insertText" ? l === null ? l = Pe : l && K.isCollapsed(T) && l.end + l.text.length === he.offset ? l = Bi(Bi({}, l), {}, {
                text: l.text + pe
              }) : l = !1 : l = !1;
            if (z) {
              m(he.path, Pe);
              return;
            }
          }
          return b(() => y.insertText(t, pe), {
            at: T
          });
        }
      }
    }
  }, E = () => !!Mn.get(t), D = () => {
    var N;
    return !!((N = gr.get(t)) !== null && N !== void 0 && N.length);
  }, w = () => E() || D(), S = () => a, O = (N) => {
    jn.set(t, N), i && (clearTimeout(i), i = null);
    var {
      selection: P
    } = t;
    if (N) {
      var I = !P || !j.equals(P.anchor.path, N.anchor.path), T = !P || !j.equals(P.anchor.path.slice(0, -1), N.anchor.path.slice(0, -1));
      (I && l || T) && (l = !1), (I || D()) && (i = setTimeout(v, Y1));
    }
  }, B = () => {
    (E() || !D()) && v();
  }, x = (N) => {
    D() || (f(!0), setTimeout(f));
  }, F = () => {
    E() || (s = setTimeout(v));
  }, _ = (N) => {
    if (!(D() || E()) && N.some((I) => pc(t, I, N))) {
      var P;
      (P = kg.get(t)) === null || P === void 0 || P();
    }
  };
  return {
    flush: v,
    scheduleFlush: F,
    hasPendingDiffs: D,
    hasPendingAction: E,
    hasPendingChanges: w,
    isFlushing: S,
    handleUserSelect: O,
    handleCompositionEnd: p,
    handleCompositionStart: h,
    handleDOMBeforeInput: C,
    handleKeyDown: x,
    handleDomMutations: _,
    handleInput: B
  };
}
function eE() {
  var e = Ge(!1);
  return jt(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e.current;
}
var pa = Wi ? ig : jt;
function tE(e, t, r) {
  var [n] = ir(() => new MutationObserver(t));
  pa(() => {
    n.takeRecords();
  }), jt(() => {
    if (!e.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    return n.observe(e.current, r), () => n.disconnect();
  }, [n, e, r]);
}
var rE = ["node"];
function vd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vd(Object(r), !0).forEach(function(n) {
      Nr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var aE = {
  subtree: !0,
  childList: !0,
  characterData: !0
}, oE = ur ? (e) => {
  var {
    node: t
  } = e, r = Ja(e, rE);
  if (!ur)
    return null;
  var n = dr(), a = eE(), [o] = ir(() => J1(nE({
    editor: n
  }, r)));
  return tE(t, o.handleDomMutations, aE), mc.set(n, o.scheduleFlush), a && o.flush(), o;
} : () => null, iE = ["anchor", "focus"], sE = ["anchor", "focus"], uE = (e, t) => Object.keys(e).length === Object.keys(t).length && Object.keys(e).every((r) => t.hasOwnProperty(r) && e[r] === t[r]), Kg = (e, t) => {
  var r = Ja(e, iE), n = Ja(t, sE);
  return e[eo] === t[eo] && uE(r, n);
}, lE = (e, t) => {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++) {
    var n = e[r], a = t[r];
    if (!K.equals(n, a) || !Kg(n, a))
      return !1;
  }
  return !0;
}, cE = (e, t) => {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++) {
    var n = e[r], a = t[r];
    if (n.anchor.offset !== a.anchor.offset || n.focus.offset !== a.focus.offset || !Kg(n, a))
      return !1;
  }
  return !0;
};
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
function fE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gd(Object(r), !0).forEach(function(n) {
      Nr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var dE = (e) => {
  var {
    isLast: t,
    leaf: r,
    parent: n,
    text: a
  } = e, o = dr(), i = X.findPath(o, a), s = j.parent(i), u = !!r[_g];
  return o.isVoid(n) ? /* @__PURE__ */ ne.createElement(hu, {
    length: ie.string(n).length
  }) : r.text === "" && n.children[n.children.length - 1] === a && !o.isInline(n) && y.string(o, s) === "" ? /* @__PURE__ */ ne.createElement(hu, {
    isLineBreak: !0,
    isMarkPlaceholder: u
  }) : r.text === "" ? /* @__PURE__ */ ne.createElement(hu, {
    isMarkPlaceholder: u
  }) : t && r.text.slice(-1) === `
` ? /* @__PURE__ */ ne.createElement(md, {
    isTrailing: !0,
    text: r.text
  }) : /* @__PURE__ */ ne.createElement(md, {
    text: r.text
  });
}, md = (e) => {
  var {
    text: t,
    isTrailing: r = !1
  } = e, n = Ge(null), a = () => "".concat(t ?? "").concat(r ? `
` : ""), [o] = ir(a);
  return pa(() => {
    var i = a();
    n.current && n.current.textContent !== i && (n.current.textContent = i);
  }), /* @__PURE__ */ ne.createElement(vE, {
    ref: n
  }, o);
}, vE = /* @__PURE__ */ e0(/* @__PURE__ */ Xr((e, t) => /* @__PURE__ */ ne.createElement("span", {
  "data-slate-string": !0,
  ref: t
}, e.children))), hu = (e) => {
  var {
    length: t = 0,
    isLineBreak: r = !1,
    isMarkPlaceholder: n = !1
  } = e, a = {
    "data-slate-zero-width": r ? "n" : "z",
    "data-slate-length": t
  };
  return n && (a["data-slate-mark-placeholder"] = !0), /* @__PURE__ */ ne.createElement("span", fE({}, a), !ur || !r ? "\uFEFF" : null, r ? /* @__PURE__ */ ne.createElement("br", null) : null);
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
function Ug(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hd(Object(r), !0).forEach(function(n) {
      Nr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var gE = ur ? 300 : 0;
function mE(e, t) {
  e.current && (e.current.disconnect(), t && (e.current = null));
}
function pd(e) {
  e.current && (clearTimeout(e.current), e.current = null);
}
var hE = (e) => {
  var {
    leaf: t,
    isLast: r,
    text: n,
    parent: a,
    renderPlaceholder: o,
    renderLeaf: i = (C) => /* @__PURE__ */ ne.createElement(bE, Ug({}, C))
  } = e, s = dr(), u = Ge(null), l = Ge(null), [c, d] = ir(!1), v = Ge(null), p = Ke((C) => {
    if (mE(u, C == null), C == null) {
      var E;
      Xu.delete(s), (E = t.onPlaceholderResize) === null || E === void 0 || E.call(t, null);
    } else {
      if (Xu.set(s, C), !u.current) {
        var D = window.ResizeObserver || y1;
        u.current = new D(() => {
          var w;
          (w = t.onPlaceholderResize) === null || w === void 0 || w.call(t, C);
        });
      }
      u.current.observe(C), l.current = C;
    }
  }, [l, t, s]), h = /* @__PURE__ */ ne.createElement(dE, {
    isLast: r,
    leaf: t,
    parent: a,
    text: n
  }), f = !!t[eo];
  if (jt(() => (f ? v.current || (v.current = setTimeout(() => {
    d(!0), v.current = null;
  }, gE)) : (pd(v), d(!1)), () => pd(v)), [f, d]), f && c) {
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
          WebkitUserModify: Ro ? "inherit" : void 0
        },
        contentEditable: !1,
        ref: p
      }
    };
    h = /* @__PURE__ */ ne.createElement(ne.Fragment, null, o(m), h);
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
}, pE = /* @__PURE__ */ ne.memo(hE, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && ye.equals(t.leaf, e.leaf) && t.leaf[eo] === e.leaf[eo]), bE = (e) => {
  var {
    attributes: t,
    children: r
  } = e;
  return /* @__PURE__ */ ne.createElement("span", Ug({}, t), r);
}, yE = (e) => {
  for (var {
    decorations: t,
    isLast: r,
    parent: n,
    renderPlaceholder: a,
    renderLeaf: o,
    text: i
  } = e, s = dr(), u = Ge(null), l = ye.decorations(i, t), c = X.findKey(s, i), d = [], v = 0; v < l.length; v++) {
    var p = l[v];
    d.push(/* @__PURE__ */ ne.createElement(pE, {
      isLast: r && v === l.length - 1,
      key: "".concat(c.id, "-").concat(v),
      renderPlaceholder: a,
      leaf: p,
      text: i,
      parent: n,
      renderLeaf: o
    }));
  }
  var h = Ke((f) => {
    var m = Ns.get(s);
    f ? (m == null || m.set(c, f), ca.set(i, f), Xo.set(f, i)) : (m == null || m.delete(c), ca.delete(i), u.current && Xo.delete(u.current)), u.current = f;
  }, [u, s, c, i]);
  return /* @__PURE__ */ ne.createElement("span", {
    "data-slate-node": "text",
    ref: h
  }, d);
}, qg = /* @__PURE__ */ ne.memo(yE, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && cE(t.decorations, e.decorations));
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
function tl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bd(Object(r), !0).forEach(function(n) {
      Nr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var CE = (e) => {
  var {
    decorations: t,
    element: r,
    renderElement: n = (C) => /* @__PURE__ */ ne.createElement(DE, tl({}, C)),
    renderPlaceholder: a,
    renderLeaf: o,
    selection: i
  } = e, s = dr(), u = Zg(), l = s.isInline(r), c = X.findKey(s, r), d = Ke((C) => {
    var E = Ns.get(s);
    C ? (E == null || E.set(c, C), ca.set(r, C), Xo.set(C, r)) : (E == null || E.delete(c), ca.delete(r));
  }, [s, c, r]), v = Xg({
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
  if (l && (p["data-slate-inline"] = !0), !l && y.hasInlines(s, r)) {
    var h = ie.string(r), f = cg(h);
    f === "rtl" && (p.dir = f);
  }
  if (y.isVoid(s, r)) {
    p["data-slate-void"] = !0, !u && l && (p.contentEditable = !1);
    var m = l ? "span" : "div", [[b]] = ie.texts(r);
    v = /* @__PURE__ */ ne.createElement(m, {
      "data-slate-spacer": !0,
      style: {
        height: "0",
        color: "transparent",
        outline: "none",
        position: "absolute"
      }
    }, /* @__PURE__ */ ne.createElement(qg, {
      renderPlaceholder: a,
      decorations: [],
      isLast: !1,
      parent: r,
      text: b
    })), vc.set(b, 0), gc.set(b, r);
  }
  return n({
    attributes: p,
    children: v,
    element: r
  });
}, EE = /* @__PURE__ */ ne.memo(CE, (e, t) => e.element === t.element && e.renderElement === t.renderElement && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && lE(e.decorations, t.decorations) && (e.selection === t.selection || !!e.selection && !!t.selection && K.equals(e.selection, t.selection))), DE = (e) => {
  var {
    attributes: t,
    children: r,
    element: n
  } = e, a = dr(), o = a.isInline(n) ? "span" : "div";
  return /* @__PURE__ */ ne.createElement(o, tl(tl({}, t), {}, {
    style: {
      position: "relative"
    }
  }), r);
}, Gg = /* @__PURE__ */ Gr(() => []), wE = () => Ut(Gg), SE = /* @__PURE__ */ Gr(!1), Xg = (e) => {
  for (var {
    decorations: t,
    node: r,
    renderElement: n,
    renderPlaceholder: a,
    renderLeaf: o,
    selection: i
  } = e, s = wE(), u = dr(), l = X.findPath(u, r), c = [], d = ce.isElement(r) && !u.isInline(r) && y.hasInlines(u, r), v = 0; v < r.children.length; v++) {
    var p = l.concat(v), h = r.children[v], f = X.findKey(u, h), m = y.range(u, p), b = i && K.intersection(m, i), C = s([h, p]);
    for (var E of t) {
      var D = K.intersection(E, m);
      D && C.push(D);
    }
    ce.isElement(h) ? c.push(/* @__PURE__ */ ne.createElement(SE.Provider, {
      key: "provider-".concat(f.id),
      value: !!b
    }, /* @__PURE__ */ ne.createElement(EE, {
      decorations: C,
      element: h,
      key: f.id,
      renderElement: n,
      renderPlaceholder: a,
      renderLeaf: o,
      selection: b
    }))) : c.push(/* @__PURE__ */ ne.createElement(qg, {
      decorations: C,
      key: f.id,
      isLast: d && v === r.children.length - 1,
      parent: r,
      renderPlaceholder: a,
      renderLeaf: o,
      text: h
    })), vc.set(h, v), gc.set(h, r);
  }
  return c;
}, Yg = /* @__PURE__ */ Gr(!1), Zg = () => Ut(Yg), Qg = /* @__PURE__ */ Gr(null), OE = () => {
  var e = Ut(Qg);
  if (!e)
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  var {
    editor: t
  } = e;
  return t;
};
function xE() {
  var e = dr(), t = Ge(!1), r = Ge(0), n = Ke(() => {
    if (!t.current) {
      t.current = !0;
      var a = X.getWindow(e);
      a.cancelAnimationFrame(r.current), r.current = a.requestAnimationFrame(() => {
        t.current = !1;
      });
    }
  }, [e]);
  return jt(() => () => cancelAnimationFrame(r.current), []), {
    receivedUserInput: t,
    onUserInput: n
  };
}
var AE = 3, BE = {
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
}, FE = {
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
}, PE = {
  deleteWordBackward: "ctrl+shift?+backspace",
  deleteWordForward: "ctrl+shift?+delete",
  redo: ["ctrl+y", "ctrl+shift+z"]
}, St = (e) => {
  var t = BE[e], r = FE[e], n = PE[e], a = t && mu(t), o = r && mu(r), i = n && mu(n);
  return (s) => !!(a && a(s) || ld && o && o(s) || !ld && i && i(s));
}, Bt = {
  isBold: St("bold"),
  isCompose: St("compose"),
  isMoveBackward: St("moveBackward"),
  isMoveForward: St("moveForward"),
  isDeleteBackward: St("deleteBackward"),
  isDeleteForward: St("deleteForward"),
  isDeleteLineBackward: St("deleteLineBackward"),
  isDeleteLineForward: St("deleteLineForward"),
  isDeleteWordBackward: St("deleteWordBackward"),
  isDeleteWordForward: St("deleteWordForward"),
  isExtendBackward: St("extendBackward"),
  isExtendForward: St("extendForward"),
  isExtendLineBackward: St("extendLineBackward"),
  isExtendLineForward: St("extendLineForward"),
  isItalic: St("italic"),
  isMoveLineBackward: St("moveLineBackward"),
  isMoveLineForward: St("moveLineForward"),
  isMoveWordBackward: St("moveWordBackward"),
  isMoveWordForward: St("moveWordForward"),
  isRedo: St("redo"),
  isSoftBreak: St("insertSoftBreak"),
  isSplitBlock: St("splitBlock"),
  isTransposeCharacter: St("transposeCharacter"),
  isUndo: St("undo")
}, $E = (e, t) => {
  var r = [], n = () => {
    r = [];
  }, a = (i) => {
    if (t.current) {
      var s = i.filter((u) => pc(e, u, i));
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
}, RE = {
  subtree: !0,
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0
};
class Jg extends Jp {
  constructor() {
    super(...arguments), Nr(this, "context", null), Nr(this, "manager", null), Nr(this, "mutationObserver", null);
  }
  observe() {
    var t, {
      node: r
    } = this.props;
    if (!r.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    (t = this.mutationObserver) === null || t === void 0 || t.observe(r.current, RE);
  }
  componentDidMount() {
    var {
      receivedUserInput: t
    } = this.props, r = this.context;
    this.manager = $E(r, t), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe();
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
Nr(Jg, "contextType", dc);
var TE = ur ? Jg : (e) => {
  var {
    children: t
  } = e;
  return /* @__PURE__ */ ne.createElement(ne.Fragment, null, t);
}, NE = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"], IE = ["text"];
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
function tn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yd(Object(r), !0).forEach(function(n) {
      Nr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var ME = (e) => /* @__PURE__ */ ne.createElement(ne.Fragment, null, Xg(e)), jE = (e) => {
  var t = Ke((R) => /* @__PURE__ */ ne.createElement(kE, tn({}, R)), []), {
    autoFocus: r,
    decorate: n = _E,
    onDOMBeforeInput: a,
    placeholder: o,
    readOnly: i = !1,
    renderElement: s,
    renderLeaf: u,
    renderPlaceholder: l = t,
    scrollSelectionIntoView: c = LE,
    style: d = {},
    as: v = "div",
    disableDefaultStyles: p = !1
  } = e, h = Ja(e, NE), f = OE(), [m, b] = ir(!1), C = Ge(null), E = Ge([]), [D, w] = ir(), {
    onUserInput: S,
    receivedUserInput: O
  } = xE(), [, B] = og((R) => R + 1, 0);
  kg.set(f, B), Yu.set(f, i);
  var x = lr(() => ({
    isDraggingInternally: !1,
    isUpdatingSelection: !1,
    latestElement: null,
    hasMarkPlaceholder: !1
  }), []);
  jt(() => {
    C.current && r && C.current.focus();
  }, [r]);
  var F = Ge(), _ = lr(() => bb(() => {
    var R = F.current;
    if ((ur || !X.isComposing(f)) && (!x.isUpdatingSelection || R != null && R.isFlushing()) && !x.isDraggingInternally) {
      var H = X.findDocumentOrShadowRoot(f), {
        activeElement: L
      } = H, q = X.toDOMNode(f, f), re = H.getSelection();
      if (L === q ? (x.latestElement = L, _n.set(f, !0)) : _n.delete(f), !re)
        return J.deselect(f);
      var {
        anchorNode: te,
        focusNode: ue
      } = re, se = X.hasEditableTarget(f, te) || X.isTargetInsideNonReadonlyVoid(f, te), ve = X.hasEditableTarget(f, ue) || X.isTargetInsideNonReadonlyVoid(f, ue);
      if (se && ve) {
        var le = X.toSlateRange(f, re, {
          exactMatch: !1,
          suppressThrow: !0
        });
        le && (!X.isComposing(f) && !(R != null && R.hasPendingChanges()) && !(R != null && R.isFlushing()) ? J.select(f, le) : R == null || R.handleUserSelect(le));
      }
      i && (!se || !ve) && J.deselect(f);
    }
  }, 100), [f, i, x]), N = lr(() => db(_, 0), [_]);
  F.current = oE({
    node: C,
    onDOMSelectionChange: _,
    scheduleOnDOMSelectionChange: N
  }), pa(() => {
    var R, H, L;
    C.current && (L = hc(C.current)) ? (jg.set(f, L), Ki.set(f, C.current), ca.set(f, C.current), Xo.set(C.current, f)) : ca.delete(f);
    var {
      selection: q
    } = f, re = X.findDocumentOrShadowRoot(f), te = re.getSelection();
    if (!(!te || !X.isFocused(f) || (R = F.current) !== null && R !== void 0 && R.hasPendingAction())) {
      var ue = (Y) => {
        var me = te.type !== "None";
        if (!(!q && !me)) {
          var Ee = te.focusNode, Ae;
          if (Ha && te.rangeCount > 1) {
            var $e = te.getRangeAt(0), fe = te.getRangeAt(te.rangeCount - 1);
            $e.startContainer === Ee ? Ae = fe.endContainer : Ae = $e.startContainer;
          } else
            Ae = te.anchorNode;
          var Oe = Ki.get(f), ge = !1;
          if (Oe.contains(Ae) && Oe.contains(Ee) && (ge = !0), me && ge && q && !Y) {
            var pe = X.toSlateRange(f, te, {
              exactMatch: !0,
              // domSelection is not necessarily a valid Slate range
              // (e.g. when clicking on contentEditable:false element)
              suppressThrow: !0
            });
            if (pe && K.equals(pe, q)) {
              var he;
              if (!x.hasMarkPlaceholder || (he = Ae) !== null && he !== void 0 && (he = he.parentElement) !== null && he !== void 0 && he.hasAttribute("data-slate-mark-placeholder"))
                return;
            }
          }
          if (q && !X.hasRange(f, q)) {
            f.selection = X.toSlateRange(f, te, {
              exactMatch: !1,
              suppressThrow: !0
            });
            return;
          }
          x.isUpdatingSelection = !0;
          var Fe = q && X.toDOMRange(f, q);
          return Fe ? (X.isComposing(f) && !ur ? te.collapseToEnd() : K.isBackward(q) ? te.setBaseAndExtent(Fe.endContainer, Fe.endOffset, Fe.startContainer, Fe.startOffset) : te.setBaseAndExtent(Fe.startContainer, Fe.startOffset, Fe.endContainer, Fe.endOffset), c(f, Fe)) : te.removeAllRanges(), Fe;
        }
      };
      te.rangeCount <= 1 && ue();
      var se = ((H = F.current) === null || H === void 0 ? void 0 : H.isFlushing()) === "action";
      if (!ur || !se) {
        setTimeout(() => {
          x.isUpdatingSelection = !1;
        });
        return;
      }
      var ve = null, le = requestAnimationFrame(() => {
        if (se) {
          var Y = (me) => {
            try {
              var Ee = X.toDOMNode(f, f);
              Ee.focus(), ue(me);
            } catch {
            }
          };
          Y(), ve = setTimeout(() => {
            Y(!0), x.isUpdatingSelection = !1;
          });
        }
      });
      return () => {
        cancelAnimationFrame(le), ve && clearTimeout(ve);
      };
    }
  });
  var P = Ke((R) => {
    if (S(), !i && X.hasEditableTarget(f, R.target) && !zE(R, a)) {
      var H;
      if (F.current)
        return F.current.handleDOMBeforeInput(R);
      N.flush(), _.flush();
      var {
        selection: L
      } = f, {
        inputType: q
      } = R, re = R.dataTransfer || R.data || void 0, te = q === "insertCompositionText" || q === "deleteCompositionText";
      if (te && X.isComposing(f))
        return;
      var ue = !1;
      if (q === "insertText" && L && K.isCollapsed(L) && // Only use native character insertion for single characters a-z or space for now.
      // Long-press events (hold a + press 4 = ä) to choose a special character otherwise
      // causes duplicate inserts.
      R.data && R.data.length === 1 && /[a-z ]/i.test(R.data) && // Chrome has issues correctly editing the start of nodes: https://bugs.chromium.org/p/chromium/issues/detail?id=1249405
      // When there is an inline element, e.g. a link, and you select
      // right after it (the start of the next node).
      L.anchor.offset !== 0) {
        var se, ve;
        ue = !0, f.marks && (ue = !1);
        var {
          anchor: le
        } = L, [Y, me] = X.toDOMPoint(f, le), Ee = (se = Y.parentElement) === null || se === void 0 ? void 0 : se.closest("a"), Ae = X.getWindow(f);
        if (ue && Ee && X.hasDOMNode(f, Ee)) {
          var $e, fe = Ae == null ? void 0 : Ae.document.createTreeWalker(Ee, NodeFilter.SHOW_TEXT).lastChild();
          fe === Y && (($e = fe.textContent) === null || $e === void 0 ? void 0 : $e.length) === me && (ue = !1);
        }
        if (ue && Y.parentElement && (Ae == null || (ve = Ae.getComputedStyle(Y.parentElement)) === null || ve === void 0 ? void 0 : ve.whiteSpace) === "pre") {
          var Oe = y.above(f, {
            at: le.path,
            match: (Re) => ce.isElement(Re) && y.isBlock(f, Re)
          });
          Oe && ie.string(Oe[0]).includes("	") && (ue = !1);
        }
      }
      if (!q.startsWith("delete") || q.startsWith("deleteBy")) {
        var [ge] = R.getTargetRanges();
        if (ge) {
          var pe = X.toSlateRange(f, ge, {
            exactMatch: !1,
            suppressThrow: !1
          });
          if (!L || !K.equals(L, pe)) {
            ue = !1;
            var he = !te && f.selection && y.rangeRef(f, f.selection);
            J.select(f, pe), he && jo.set(f, he);
          }
        }
      }
      if (te)
        return;
      if (ue || R.preventDefault(), L && K.isExpanded(L) && q.startsWith("delete")) {
        var Fe = q.endsWith("Backward") ? "backward" : "forward";
        y.deleteFragment(f, {
          direction: Fe
        });
        return;
      }
      switch (q) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag": {
          y.deleteFragment(f);
          break;
        }
        case "deleteContent":
        case "deleteContentForward": {
          y.deleteForward(f);
          break;
        }
        case "deleteContentBackward": {
          y.deleteBackward(f);
          break;
        }
        case "deleteEntireSoftLine": {
          y.deleteBackward(f, {
            unit: "line"
          }), y.deleteForward(f, {
            unit: "line"
          });
          break;
        }
        case "deleteHardLineBackward": {
          y.deleteBackward(f, {
            unit: "block"
          });
          break;
        }
        case "deleteSoftLineBackward": {
          y.deleteBackward(f, {
            unit: "line"
          });
          break;
        }
        case "deleteHardLineForward": {
          y.deleteForward(f, {
            unit: "block"
          });
          break;
        }
        case "deleteSoftLineForward": {
          y.deleteForward(f, {
            unit: "line"
          });
          break;
        }
        case "deleteWordBackward": {
          y.deleteBackward(f, {
            unit: "word"
          });
          break;
        }
        case "deleteWordForward": {
          y.deleteForward(f, {
            unit: "word"
          });
          break;
        }
        case "insertLineBreak":
          y.insertSoftBreak(f);
          break;
        case "insertParagraph": {
          y.insertBreak(f);
          break;
        }
        case "insertFromComposition":
        case "insertFromDrop":
        case "insertFromPaste":
        case "insertFromYank":
        case "insertReplacementText":
        case "insertText": {
          q === "insertFromComposition" && X.isComposing(f) && (b(!1), aa.set(f, !1)), (re == null ? void 0 : re.constructor.name) === "DataTransfer" ? X.insertData(f, re) : typeof re == "string" && (ue ? E.current.push(() => y.insertText(f, re)) : y.insertText(f, re));
          break;
        }
      }
      var Pe = (H = jo.get(f)) === null || H === void 0 ? void 0 : H.unref();
      jo.delete(f), Pe && (!f.selection || !K.equals(f.selection, Pe)) && J.select(f, Pe);
    }
  }, [f, _, S, a, i, N]), I = Ke((R) => {
    R == null ? (_.cancel(), N.cancel(), Ki.delete(f), ca.delete(f), C.current && Rn && C.current.removeEventListener("beforeinput", P)) : Rn && R.addEventListener("beforeinput", P), C.current = R;
  }, [_, N, f, P]);
  pa(() => {
    var R = X.getWindow(f);
    return R.document.addEventListener("selectionchange", N), () => {
      R.document.removeEventListener("selectionchange", N);
    };
  }, [N]);
  var T = n([f, []]), k = o && f.children.length === 1 && Array.from(ie.texts(f)).length === 1 && ie.string(f) === "" && !m, A = Ke((R) => {
    if (R && k) {
      var H;
      w((H = R.getBoundingClientRect()) === null || H === void 0 ? void 0 : H.height);
    } else
      w(void 0);
  }, [k]);
  if (k) {
    var M = y.start(f, []);
    T.push({
      [eo]: !0,
      placeholder: o,
      onPlaceholderResize: A,
      anchor: M,
      focus: M
    });
  }
  var {
    marks: V
  } = f;
  if (x.hasMarkPlaceholder = !1, f.selection && K.isCollapsed(f.selection) && V) {
    var {
      anchor: z
    } = f.selection, U = ie.leaf(f, z.path), G = Ja(U, IE);
    if (!ye.equals(U, V, {
      loose: !0
    })) {
      x.hasMarkPlaceholder = !0;
      var Q = Object.fromEntries(Object.keys(G).map((R) => [R, null]));
      T.push(tn(tn(tn({
        [_g]: !0
      }, Q), V), {}, {
        anchor: z,
        focus: z
      }));
    }
  }
  return jt(() => {
    setTimeout(() => {
      var {
        selection: R
      } = f;
      if (R) {
        var {
          anchor: H
        } = R, L = ie.leaf(f, H.path);
        if (V && !ye.equals(L, V, {
          loose: !0
        })) {
          Wr.set(f, V);
          return;
        }
      }
      Wr.delete(f);
    });
  }), /* @__PURE__ */ ne.createElement(Yg.Provider, {
    value: i
  }, /* @__PURE__ */ ne.createElement(Gg.Provider, {
    value: n
  }, /* @__PURE__ */ ne.createElement(TE, {
    node: C,
    receivedUserInput: O
  }, /* @__PURE__ */ ne.createElement(v, tn(tn({
    role: i ? void 0 : "textbox",
    "aria-multiline": i ? void 0 : !0
  }, h), {}, {
    // COMPAT: Certain browsers don't support the `beforeinput` event, so we'd
    // have to use hacks to make these replacement-based features work.
    // For SSR situations HAS_BEFORE_INPUT_SUPPORT is false and results in prop
    // mismatch warning app moves to browser. Pass-through consumer props when
    // not CAN_USE_DOM (SSR) and default to falsy value
    spellCheck: Rn || !Wi ? h.spellCheck : !1,
    autoCorrect: Rn || !Wi ? h.autoCorrect : "false",
    autoCapitalize: Rn || !Wi ? h.autoCapitalize : "false",
    "data-slate-editor": !0,
    "data-slate-node": "value",
    // explicitly set this
    contentEditable: !i,
    // in some cases, a decoration needs access to the range / selection to decorate a text node,
    // then you will select the whole text node when you select part the of text
    // this magic zIndex="-1" will fix it
    zindex: -1,
    suppressContentEditableWarning: !0,
    ref: I,
    style: tn(tn({}, p ? {} : tn({
      // Allow positioning relative to the editable element.
      position: "relative",
      // Preserve adjacent whitespace and new lines.
      whiteSpace: "pre-wrap",
      // Allow words to break if they are too long.
      wordWrap: "break-word"
    }, D ? {
      minHeight: D
    } : {})), d),
    onBeforeInput: Ke((R) => {
      if (!Rn && !i && !sr(R, h.onBeforeInput) && X.hasSelectableTarget(f, R.target) && (R.preventDefault(), !X.isComposing(f))) {
        var H = R.data;
        y.insertText(f, H);
      }
    }, [h.onBeforeInput, f, i]),
    onInput: Ke((R) => {
      if (!sr(R, h.onInput)) {
        if (F.current) {
          F.current.handleInput();
          return;
        }
        for (var H of E.current)
          H();
        E.current = [];
      }
    }, [h.onInput]),
    onBlur: Ke((R) => {
      if (!(i || x.isUpdatingSelection || !X.hasSelectableTarget(f, R.target) || sr(R, h.onBlur))) {
        var H = X.findDocumentOrShadowRoot(f);
        if (x.latestElement !== H.activeElement) {
          var {
            relatedTarget: L
          } = R, q = X.toDOMNode(f, f);
          if (L !== q && !(Tr(L) && L.hasAttribute("data-slate-spacer"))) {
            if (L != null && Hn(L) && X.hasDOMNode(f, L)) {
              var re = X.toSlateNode(f, L);
              if (ce.isElement(re) && !f.isVoid(re))
                return;
            }
            if (Ro) {
              var te = H.getSelection();
              te == null || te.removeAllRanges();
            }
            _n.delete(f);
          }
        }
      }
    }, [i, x.isUpdatingSelection, x.latestElement, f, h.onBlur]),
    onClick: Ke((R) => {
      if (X.hasTarget(f, R.target) && !sr(R, h.onClick) && Hn(R.target)) {
        var H = X.toSlateNode(f, R.target), L = X.findPath(f, H);
        if (!y.hasPath(f, L) || ie.get(f, L) !== H)
          return;
        if (R.detail === AE && L.length >= 1) {
          var q = L;
          if (!(ce.isElement(H) && y.isBlock(f, H))) {
            var re, te = y.above(f, {
              match: (Ee) => ce.isElement(Ee) && y.isBlock(f, Ee),
              at: L
            });
            q = (re = te == null ? void 0 : te[1]) !== null && re !== void 0 ? re : L.slice(0, 1);
          }
          var ue = y.range(f, q);
          J.select(f, ue);
          return;
        }
        if (i)
          return;
        var se = y.start(f, L), ve = y.end(f, L), le = y.void(f, {
          at: se
        }), Y = y.void(f, {
          at: ve
        });
        if (le && Y && j.equals(le[1], Y[1])) {
          var me = y.range(f, se);
          J.select(f, me);
        }
      }
    }, [f, h.onClick, i]),
    onCompositionEnd: Ke((R) => {
      if (X.hasSelectableTarget(f, R.target)) {
        var H;
        if (X.isComposing(f) && Promise.resolve().then(() => {
          b(!1), aa.set(f, !1);
        }), (H = F.current) === null || H === void 0 || H.handleCompositionEnd(R), sr(R, h.onCompositionEnd) || ur)
          return;
        if (!Ro && !P1 && !x1 && !R1 && !$1 && R.data) {
          var L = Wr.get(f);
          Wr.delete(f), L !== void 0 && (bn.set(f, f.marks), f.marks = L), y.insertText(f, R.data);
          var q = bn.get(f);
          bn.delete(f), q !== void 0 && (f.marks = q);
        }
      }
    }, [h.onCompositionEnd, f]),
    onCompositionUpdate: Ke((R) => {
      X.hasSelectableTarget(f, R.target) && !sr(R, h.onCompositionUpdate) && (X.isComposing(f) || (b(!0), aa.set(f, !0)));
    }, [h.onCompositionUpdate, f]),
    onCompositionStart: Ke((R) => {
      if (X.hasSelectableTarget(f, R.target)) {
        var H;
        if ((H = F.current) === null || H === void 0 || H.handleCompositionStart(R), sr(R, h.onCompositionStart) || ur)
          return;
        b(!0);
        var {
          selection: L
        } = f;
        if (L && K.isExpanded(L)) {
          y.deleteFragment(f);
          return;
        }
      }
    }, [h.onCompositionStart, f]),
    onCopy: Ke((R) => {
      X.hasSelectableTarget(f, R.target) && !sr(R, h.onCopy) && !Cd(R) && (R.preventDefault(), X.setFragmentData(f, R.clipboardData, "copy"));
    }, [h.onCopy, f]),
    onCut: Ke((R) => {
      if (!i && X.hasSelectableTarget(f, R.target) && !sr(R, h.onCut) && !Cd(R)) {
        R.preventDefault(), X.setFragmentData(f, R.clipboardData, "cut");
        var {
          selection: H
        } = f;
        if (H)
          if (K.isExpanded(H))
            y.deleteFragment(f);
          else {
            var L = ie.parent(f, H.anchor.path);
            y.isVoid(f, L) && J.delete(f);
          }
      }
    }, [i, f, h.onCut]),
    onDragOver: Ke((R) => {
      if (X.hasTarget(f, R.target) && !sr(R, h.onDragOver)) {
        var H = X.toSlateNode(f, R.target);
        ce.isElement(H) && y.isVoid(f, H) && R.preventDefault();
      }
    }, [h.onDragOver, f]),
    onDragStart: Ke((R) => {
      if (!i && X.hasTarget(f, R.target) && !sr(R, h.onDragStart)) {
        var H = X.toSlateNode(f, R.target), L = X.findPath(f, H), q = ce.isElement(H) && y.isVoid(f, H) || y.void(f, {
          at: L,
          voids: !0
        });
        if (q) {
          var re = y.range(f, L);
          J.select(f, re);
        }
        x.isDraggingInternally = !0, X.setFragmentData(f, R.dataTransfer, "drag");
      }
    }, [i, f, h.onDragStart, x]),
    onDrop: Ke((R) => {
      if (!i && X.hasTarget(f, R.target) && !sr(R, h.onDrop)) {
        R.preventDefault();
        var H = f.selection, L = X.findEventRange(f, R), q = R.dataTransfer;
        J.select(f, L), x.isDraggingInternally && H && !K.equals(H, L) && !y.void(f, {
          at: L,
          voids: !0
        }) && J.delete(f, {
          at: H
        }), X.insertData(f, q), X.isFocused(f) || X.focus(f);
      }
      x.isDraggingInternally = !1;
    }, [i, f, h.onDrop, x]),
    onDragEnd: Ke((R) => {
      !i && x.isDraggingInternally && h.onDragEnd && X.hasTarget(f, R.target) && h.onDragEnd(R), x.isDraggingInternally = !1;
    }, [i, x, h, f]),
    onFocus: Ke((R) => {
      if (!i && !x.isUpdatingSelection && X.hasEditableTarget(f, R.target) && !sr(R, h.onFocus)) {
        var H = X.toDOMNode(f, f), L = X.findDocumentOrShadowRoot(f);
        if (x.latestElement = L.activeElement, Ha && R.target !== H) {
          H.focus();
          return;
        }
        _n.set(f, !0);
      }
    }, [i, x, f, h.onFocus]),
    onKeyDown: Ke((R) => {
      if (!i && X.hasEditableTarget(f, R.target)) {
        var H;
        (H = F.current) === null || H === void 0 || H.handleKeyDown(R);
        var {
          nativeEvent: L
        } = R;
        if (X.isComposing(f) && L.isComposing === !1 && (aa.set(f, !1), b(!1)), sr(R, h.onKeyDown) || X.isComposing(f))
          return;
        var {
          selection: q
        } = f, re = f.children[q !== null ? q.focus.path[0] : 0], te = cg(ie.string(re)) === "rtl";
        if (Bt.isRedo(L)) {
          R.preventDefault();
          var ue = f;
          typeof ue.redo == "function" && ue.redo();
          return;
        }
        if (Bt.isUndo(L)) {
          R.preventDefault();
          var se = f;
          typeof se.undo == "function" && se.undo();
          return;
        }
        if (Bt.isMoveLineBackward(L)) {
          R.preventDefault(), J.move(f, {
            unit: "line",
            reverse: !0
          });
          return;
        }
        if (Bt.isMoveLineForward(L)) {
          R.preventDefault(), J.move(f, {
            unit: "line"
          });
          return;
        }
        if (Bt.isExtendLineBackward(L)) {
          R.preventDefault(), J.move(f, {
            unit: "line",
            edge: "focus",
            reverse: !0
          });
          return;
        }
        if (Bt.isExtendLineForward(L)) {
          R.preventDefault(), J.move(f, {
            unit: "line",
            edge: "focus"
          });
          return;
        }
        if (Bt.isMoveBackward(L)) {
          R.preventDefault(), q && K.isCollapsed(q) ? J.move(f, {
            reverse: !te
          }) : J.collapse(f, {
            edge: te ? "end" : "start"
          });
          return;
        }
        if (Bt.isMoveForward(L)) {
          R.preventDefault(), q && K.isCollapsed(q) ? J.move(f, {
            reverse: te
          }) : J.collapse(f, {
            edge: te ? "start" : "end"
          });
          return;
        }
        if (Bt.isMoveWordBackward(L)) {
          R.preventDefault(), q && K.isExpanded(q) && J.collapse(f, {
            edge: "focus"
          }), J.move(f, {
            unit: "word",
            reverse: !te
          });
          return;
        }
        if (Bt.isMoveWordForward(L)) {
          R.preventDefault(), q && K.isExpanded(q) && J.collapse(f, {
            edge: "focus"
          }), J.move(f, {
            unit: "word",
            reverse: te
          });
          return;
        }
        if (Rn) {
          if ((Mg || Ro) && q && (Bt.isDeleteBackward(L) || Bt.isDeleteForward(L)) && K.isCollapsed(q)) {
            var ve = ie.parent(f, q.anchor.path);
            if (ce.isElement(ve) && y.isVoid(f, ve) && (y.isInline(f, ve) || y.isBlock(f, ve))) {
              R.preventDefault(), y.deleteBackward(f, {
                unit: "block"
              });
              return;
            }
          }
        } else {
          if (Bt.isBold(L) || Bt.isItalic(L) || Bt.isTransposeCharacter(L)) {
            R.preventDefault();
            return;
          }
          if (Bt.isSoftBreak(L)) {
            R.preventDefault(), y.insertSoftBreak(f);
            return;
          }
          if (Bt.isSplitBlock(L)) {
            R.preventDefault(), y.insertBreak(f);
            return;
          }
          if (Bt.isDeleteBackward(L)) {
            R.preventDefault(), q && K.isExpanded(q) ? y.deleteFragment(f, {
              direction: "backward"
            }) : y.deleteBackward(f);
            return;
          }
          if (Bt.isDeleteForward(L)) {
            R.preventDefault(), q && K.isExpanded(q) ? y.deleteFragment(f, {
              direction: "forward"
            }) : y.deleteForward(f);
            return;
          }
          if (Bt.isDeleteLineBackward(L)) {
            R.preventDefault(), q && K.isExpanded(q) ? y.deleteFragment(f, {
              direction: "backward"
            }) : y.deleteBackward(f, {
              unit: "line"
            });
            return;
          }
          if (Bt.isDeleteLineForward(L)) {
            R.preventDefault(), q && K.isExpanded(q) ? y.deleteFragment(f, {
              direction: "forward"
            }) : y.deleteForward(f, {
              unit: "line"
            });
            return;
          }
          if (Bt.isDeleteWordBackward(L)) {
            R.preventDefault(), q && K.isExpanded(q) ? y.deleteFragment(f, {
              direction: "backward"
            }) : y.deleteBackward(f, {
              unit: "word"
            });
            return;
          }
          if (Bt.isDeleteWordForward(L)) {
            R.preventDefault(), q && K.isExpanded(q) ? y.deleteFragment(f, {
              direction: "forward"
            }) : y.deleteForward(f, {
              unit: "word"
            });
            return;
          }
        }
      }
    }, [i, f, h.onKeyDown]),
    onPaste: Ke((R) => {
      !i && X.hasEditableTarget(f, R.target) && !sr(R, h.onPaste) && (!Rn || I1(R.nativeEvent) || Ro) && (R.preventDefault(), X.insertData(f, R.clipboardData));
    }, [i, f, h.onPaste])
  }), /* @__PURE__ */ ne.createElement(ME, {
    decorations: T,
    node: f,
    renderElement: s,
    renderPlaceholder: l,
    renderLeaf: u,
    selection: f.selection
  })))));
}, kE = (e) => {
  var {
    attributes: t,
    children: r
  } = e;
  return (
    // COMPAT: Artificially add a line-break to the end on the placeholder element
    // to prevent Android IMEs to pick up its content in autocorrect and to auto-capitalize the first letter
    /* @__PURE__ */ ne.createElement("span", tn({}, t), r, ur && /* @__PURE__ */ ne.createElement("br", null))
  );
}, _E = () => [], LE = (e, t) => {
  if (t.getBoundingClientRect && (!e.selection || e.selection && K.isCollapsed(e.selection))) {
    var r = t.startContainer.parentElement;
    r.getBoundingClientRect = t.getBoundingClientRect.bind(t), Eb(r, {
      scrollMode: "if-needed"
    }), delete r.getBoundingClientRect;
  }
}, sr = (e, t) => {
  if (!t)
    return !1;
  var r = t(e);
  return r ?? (e.isDefaultPrevented() || e.isPropagationStopped());
}, Cd = (e) => Hn(e.target) && (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement), zE = (e, t) => {
  if (!t)
    return !1;
  var r = t(e);
  return r ?? e.defaultPrevented;
}, VE = /* @__PURE__ */ Gr(!1);
function HE(e) {
  return e instanceof Error;
}
var em = /* @__PURE__ */ Gr({}), WE = (e, t) => e === t;
function si(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : WE, [, r] = og((c) => c + 1, 0), n = Ut(em);
  if (!n)
    throw new Error("The `useSlateSelector` hook must be used inside the <Slate> component's context.");
  var {
    getSlate: a,
    addEventListener: o
  } = n, i = Ge(), s = Ge(() => null), u = Ge(null), l;
  try {
    e !== s.current || i.current ? l = e(a()) : l = u.current;
  } catch (c) {
    throw i.current && HE(c) && (c.message += `
The error may be correlated with this previous error:
`.concat(i.current.stack, `

`)), c;
  }
  return pa(() => {
    s.current = e, u.current = l, i.current = void 0;
  }), pa(
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
function KE(e) {
  var t = Ge([]).current, r = Ge({
    editor: e
  }).current, n = Ke((o) => {
    r.editor = o, t.forEach((i) => i(o));
  }, [t, r]), a = lr(() => ({
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
var UE = ["editor", "children", "onChange", "onSelectionChange", "onValueChange", "initialValue"], qE = (e) => {
  var {
    editor: t,
    children: r,
    onChange: n,
    onSelectionChange: a,
    onValueChange: o,
    initialValue: i
  } = e, s = Ja(e, UE), [u, l] = ne.useState(() => {
    if (!ie.isNodeList(i))
      throw new Error("[Slate] initialValue is invalid! Expected a list of elements but got: ".concat(Wt.stringify(i)));
    if (!y.isEditor(t))
      throw new Error("[Slate] editor is invalid! You passed: ".concat(Wt.stringify(t)));
    return t.children = i, Object.assign(t, s), {
      v: 0,
      editor: t
    };
  }), {
    selectorContext: c,
    onChange: d
  } = KE(t), v = Ke((f) => {
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
  jt(() => (Zu.set(t, v), () => {
    Zu.set(t, () => {
    });
  }), [t, v]);
  var [p, h] = ir(X.isFocused(t));
  return jt(() => {
    h(X.isFocused(t));
  }, [t]), pa(() => {
    var f = () => h(X.isFocused(t));
    return Ig >= 17 ? (document.addEventListener("focusin", f), document.addEventListener("focusout", f), () => {
      document.removeEventListener("focusin", f), document.removeEventListener("focusout", f);
    }) : (document.addEventListener("focus", f, !0), document.addEventListener("blur", f, !0), () => {
      document.removeEventListener("focus", f, !0), document.removeEventListener("blur", f, !0);
    });
  }, []), /* @__PURE__ */ ne.createElement(em.Provider, {
    value: c
  }, /* @__PURE__ */ ne.createElement(Qg.Provider, {
    value: u
  }, /* @__PURE__ */ ne.createElement(dc.Provider, {
    value: u.editor
  }, /* @__PURE__ */ ne.createElement(VE.Provider, {
    value: p
  }, r))));
}, Ed = (e, t) => {
  var r = (t.top + t.bottom) / 2;
  return e.top <= r && e.bottom >= r;
}, Dd = (e, t, r) => {
  var n = X.toDOMRange(e, t).getBoundingClientRect(), a = X.toDOMRange(e, r).getBoundingClientRect();
  return Ed(n, a) && Ed(a, n);
}, GE = (e, t) => {
  var r = y.range(e, K.end(t)), n = Array.from(y.positions(e, {
    at: t
  })), a = 0, o = n.length, i = Math.floor(o / 2);
  if (Dd(e, y.range(e, n[a]), r))
    return y.range(e, n[a], r);
  if (n.length < 2)
    return y.range(e, n[n.length - 1], r);
  for (; i !== n.length && i !== a; )
    Dd(e, y.range(e, n[i]), r) ? o = i : a = i, i = Math.floor((a + o) / 2);
  return y.range(e, n[o], r);
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
function Sd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wd(Object(r), !0).forEach(function(n) {
      Nr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var XE = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x-slate-fragment", n = t, {
    apply: a,
    onChange: o,
    deleteBackward: i,
    addMark: s,
    removeMark: u
  } = n;
  return Ns.set(n, /* @__PURE__ */ new WeakMap()), n.addMark = (l, c) => {
    var d, v;
    (d = mc.get(n)) === null || d === void 0 || d(), !Wr.get(n) && (v = gr.get(n)) !== null && v !== void 0 && v.length && Wr.set(n, null), bn.delete(n), s(l, c);
  }, n.removeMark = (l) => {
    var c;
    !Wr.get(n) && (c = gr.get(n)) !== null && c !== void 0 && c.length && Wr.set(n, null), bn.delete(n), u(l);
  }, n.deleteBackward = (l) => {
    if (l !== "line")
      return i(l);
    if (n.selection && K.isCollapsed(n.selection)) {
      var c = y.above(n, {
        match: (h) => ce.isElement(h) && y.isBlock(n, h),
        at: n.selection
      });
      if (c) {
        var [, d] = c, v = y.range(n, d, n.selection.anchor), p = GE(n, v);
        K.isCollapsed(p) || J.delete(n, {
          at: p
        });
      }
    }
  }, n.apply = (l) => {
    var c = [], d = [], v = gr.get(n);
    if (v != null && v.length) {
      var p = v.map((I) => G1(I, l)).filter(Boolean);
      gr.set(n, p);
    }
    var h = jn.get(n);
    h && jn.set(n, fd(n, h, l));
    var f = Mn.get(n);
    if (f != null && f.at) {
      var m = ze.isPoint(f == null ? void 0 : f.at) ? el(n, f.at, l) : fd(n, f.at, l);
      Mn.set(n, m ? Sd(Sd({}, f), {}, {
        at: m
      }) : null);
    }
    switch (l.type) {
      case "insert_text":
      case "remove_text":
      case "set_node":
      case "split_node": {
        c.push(...Fa(n, l.path));
        break;
      }
      case "set_selection": {
        var b;
        (b = jo.get(n)) === null || b === void 0 || b.unref(), jo.delete(n);
        break;
      }
      case "insert_node":
      case "remove_node": {
        c.push(...Fa(n, j.parent(l.path)));
        break;
      }
      case "merge_node": {
        var C = j.previous(l.path);
        c.push(...Fa(n, C));
        break;
      }
      case "move_node": {
        var E = j.common(j.parent(l.path), j.parent(l.newPath));
        c.push(...Fa(n, E));
        var D;
        j.isBefore(l.path, l.newPath) ? (c.push(...Fa(n, j.parent(l.path))), D = l.newPath) : (c.push(...Fa(n, j.parent(l.newPath))), D = l.path);
        var w = ie.get(t, j.parent(D)), S = X.findKey(n, w), O = y.pathRef(n, j.parent(D));
        d.push([O, S]);
        break;
      }
    }
    a(l);
    for (var [B, x] of c) {
      var [F] = y.node(n, B);
      ls.set(F, x);
    }
    for (var [_, N] of d)
      if (_.current) {
        var [P] = y.node(n, _.current);
        ls.set(P, N);
      }
  }, n.setFragmentData = (l) => {
    var {
      selection: c
    } = n;
    if (c) {
      var [d, v] = K.edges(c), p = y.void(n, {
        at: d.path
      }), h = y.void(n, {
        at: v.path
      });
      if (!(K.isCollapsed(c) && !p)) {
        var f = X.toDOMRange(n, c), m = f.cloneContents(), b = m.childNodes[0];
        if (m.childNodes.forEach((F) => {
          F.textContent && F.textContent.trim() !== "" && (b = F);
        }), h) {
          var [C] = h, E = f.cloneRange(), D = X.toDOMNode(n, C);
          E.setEndAfter(D), m = E.cloneContents();
        }
        if (p && (b = m.querySelector("[data-slate-spacer]")), Array.from(m.querySelectorAll("[data-slate-zero-width]")).forEach((F) => {
          var _ = F.getAttribute("data-slate-zero-width") === "n";
          F.textContent = _ ? `
` : "";
        }), Lg(b)) {
          var w = b.ownerDocument.createElement("span");
          w.style.whiteSpace = "pre", w.appendChild(b), m.appendChild(w), b = w;
        }
        var S = n.getFragment(), O = JSON.stringify(S), B = window.btoa(encodeURIComponent(O));
        b.setAttribute("data-slate-fragment", B), l.setData("application/".concat(r), B);
        var x = m.ownerDocument.createElement("div");
        return x.appendChild(m), x.setAttribute("hidden", "true"), m.ownerDocument.body.appendChild(x), l.setData("text/html", x.innerHTML), l.setData("text/plain", Vg(x)), m.ownerDocument.body.removeChild(x), l;
      }
    }
  }, n.insertData = (l) => {
    n.insertFragmentData(l) || n.insertTextData(l);
  }, n.insertFragmentData = (l) => {
    var c = l.getData("application/".concat(r)) || L1(l);
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
        v && J.splitNodes(n, {
          always: !0
        }), n.insertText(p), v = !0;
      return !0;
    }
    return !1;
  }, n.onChange = (l) => {
    var c = Ig < 18 ? sg.unstable_batchedUpdates : (d) => d();
    c(() => {
      var d = Zu.get(n);
      d && d(l), o(l);
    });
  }, n;
}, Fa = (e, t) => {
  var r = [];
  for (var [n, a] of y.levels(e, {
    at: t
  })) {
    var o = X.findKey(e, n);
    r.push([a, o]);
  }
  return r;
}, YE = {
  /**
   * Check if a value is a `History` object.
   */
  isHistory(e) {
    return Zt(e) && Array.isArray(e.redos) && Array.isArray(e.undos) && (e.redos.length === 0 || kn.isOperationList(e.redos[0].operations)) && (e.undos.length === 0 || kn.isOperationList(e.undos[0].operations));
  }
}, pu = /* @__PURE__ */ new WeakMap(), bu = /* @__PURE__ */ new WeakMap(), Wa = {
  /**
   * Check if a value is a `HistoryEditor` object.
   */
  isHistoryEditor(e) {
    return YE.isHistory(e.history) && y.isEditor(e);
  },
  /**
   * Get the merge flag's current value.
   */
  isMerging(e) {
    return bu.get(e);
  },
  /**
   * Get the saving flag's current value.
   */
  isSaving(e) {
    return pu.get(e);
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
    var r = Wa.isMerging(e);
    bu.set(e, !1), t(), bu.set(e, r);
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, without saving any of
   * their operations into the history.
   */
  withoutSaving(e, t) {
    var r = Wa.isSaving(e);
    pu.set(e, !1), t(), pu.set(e, r);
  }
}, ZE = (e) => {
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
      o.selectionBefore && J.setSelection(t, o.selectionBefore), Wa.withoutSaving(t, () => {
        y.withoutNormalizing(t, () => {
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
      Wa.withoutSaving(t, () => {
        y.withoutNormalizing(t, () => {
          var i = o.operations.map(kn.inverse).reverse();
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
    } = o, s = i[i.length - 1], u = s && s.operations[s.operations.length - 1], l = Wa.isSaving(t), c = Wa.isMerging(t);
    if (l == null && (l = JE(n)), l) {
      if (c == null && (s == null ? c = !1 : a.length !== 0 ? c = !0 : c = QE(n, u)), s && c)
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
}, QE = (e, t) => !!(t && e.type === "insert_text" && t.type === "insert_text" && e.offset === t.offset + t.text.length && j.equals(e.path, t.path) || t && e.type === "remove_text" && t.type === "remove_text" && e.offset + e.text.length === t.offset && j.equals(e.path, t.path)), JE = (e, t) => e.type !== "set_selection", Kt = /* @__PURE__ */ ((e) => (e.Paragraph = "paragraph", e.Heading = "heading", e.Bold = "bold", e.Code = "code", e.CheckList = "check-list", e.OrderedList = "ordered-list", e))(Kt || {}), fa = /* @__PURE__ */ ((e) => (e.Start = "start", e.Center = "center", e.End = "end", e))(fa || {});
function rl() {
  return [
    {
      type: Kt.Paragraph,
      children: [{ text: "" }]
    }
  ];
}
function eD(e) {
  const { selection: t } = e;
  return !!(t && K.isCollapsed(t));
}
const hr = Symbol.for("@ts-pattern/matcher"), tm = Symbol.for("@ts-pattern/isVariadic"), cs = "@ts-pattern/anonymous-select-key", nl = (e) => !!(e && typeof e == "object"), Ui = (e) => e && !!e[hr], Qt = (e, t, r) => {
  if (Ui(e)) {
    const n = e[hr](), { matched: a, selections: o } = n.match(t);
    return a && o && Object.keys(o).forEach((i) => r(i, o[i])), a;
  }
  if (nl(e)) {
    if (!nl(t))
      return !1;
    if (Array.isArray(e)) {
      if (!Array.isArray(t))
        return !1;
      let n = [], a = [], o = [];
      for (const i of e.keys()) {
        const s = e[i];
        Ui(s) && s[tm] ? o.push(s) : o.length ? a.push(s) : n.push(s);
      }
      if (o.length) {
        if (o.length > 1)
          throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
        if (t.length < n.length + a.length)
          return !1;
        const i = t.slice(0, n.length), s = a.length === 0 ? [] : t.slice(-a.length), u = t.slice(n.length, a.length === 0 ? 1 / 0 : -a.length);
        return n.every((l, c) => Qt(l, i[c], r)) && a.every((l, c) => Qt(l, s[c], r)) && (o.length === 0 || Qt(o[0], u, r));
      }
      return e.length === t.length && e.every((i, s) => Qt(i, t[s], r));
    }
    return Object.keys(e).every((n) => {
      const a = e[n];
      return (n in t || Ui(o = a) && o[hr]().matcherType === "optional") && Qt(a, t[n], r);
      var o;
    });
  }
  return Object.is(t, e);
}, Or = (e) => {
  var t, r, n;
  return nl(e) ? Ui(e) ? (t = (r = (n = e[hr]()).getSelectionKeys) == null ? void 0 : r.call(n)) != null ? t : [] : Array.isArray(e) ? Yo(e, Or) : Yo(Object.values(e), Or) : [];
}, Yo = (e, t) => e.reduce((r, n) => r.concat(t(n)), []);
function tD(...e) {
  if (e.length === 1) {
    const [t] = e;
    return (r) => Qt(t, r, () => {
    });
  }
  if (e.length === 2) {
    const [t, r] = e;
    return Qt(t, r, () => {
    });
  }
  throw new Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${e.length}.`);
}
function Jt(e) {
  return Object.assign(e, { optional: () => bc(e), and: (t) => Ot(e, t), or: (t) => rm(e, t), select: (t) => t === void 0 ? Zo(e) : Zo(t, e) });
}
function al(e) {
  return Object.assign(((t) => Object.assign(t, { [Symbol.iterator]() {
    let r = 0;
    const n = [{ value: Object.assign(t, { [tm]: !0 }), done: !1 }, { done: !0, value: void 0 }];
    return { next: () => {
      var a;
      return (a = n[r++]) != null ? a : n.at(-1);
    } };
  } }))(e), { optional: () => al(bc(e)), select: (t) => al(t === void 0 ? Zo(e) : Zo(t, e)) });
}
function bc(e) {
  return Jt({ [hr]: () => ({ match: (t) => {
    let r = {};
    const n = (a, o) => {
      r[a] = o;
    };
    return t === void 0 ? (Or(e).forEach((a) => n(a, void 0)), { matched: !0, selections: r }) : { matched: Qt(e, t, n), selections: r };
  }, getSelectionKeys: () => Or(e), matcherType: "optional" }) });
}
const rD = (e, t) => {
  for (const r of e)
    if (!t(r))
      return !1;
  return !0;
}, nD = (e, t) => {
  for (const [r, n] of e.entries())
    if (!t(n, r))
      return !1;
  return !0;
};
function Ot(...e) {
  return Jt({ [hr]: () => ({ match: (t) => {
    let r = {};
    const n = (a, o) => {
      r[a] = o;
    };
    return { matched: e.every((a) => Qt(a, t, n)), selections: r };
  }, getSelectionKeys: () => Yo(e, Or), matcherType: "and" }) });
}
function rm(...e) {
  return Jt({ [hr]: () => ({ match: (t) => {
    let r = {};
    const n = (a, o) => {
      r[a] = o;
    };
    return Yo(e, Or).forEach((a) => n(a, void 0)), { matched: e.some((a) => Qt(a, t, n)), selections: r };
  }, getSelectionKeys: () => Yo(e, Or), matcherType: "or" }) });
}
function et(e) {
  return { [hr]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function Zo(...e) {
  const t = typeof e[0] == "string" ? e[0] : void 0, r = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
  return Jt({ [hr]: () => ({ match: (n) => {
    let a = { [t ?? cs]: n };
    return { matched: r === void 0 || Qt(r, n, (o, i) => {
      a[o] = i;
    }), selections: a };
  }, getSelectionKeys: () => [t ?? cs].concat(r === void 0 ? [] : Or(r)) }) });
}
function rn(e) {
  return typeof e == "number";
}
function Jn(e) {
  return typeof e == "string";
}
function Nn(e) {
  return typeof e == "bigint";
}
const nm = Jt(et(function(e) {
  return !0;
})), aD = nm, ea = (e) => Object.assign(Jt(e), { startsWith: (t) => {
  return ea(Ot(e, (r = t, et((n) => Jn(n) && n.startsWith(r)))));
  var r;
}, endsWith: (t) => {
  return ea(Ot(e, (r = t, et((n) => Jn(n) && n.endsWith(r)))));
  var r;
}, minLength: (t) => ea(Ot(e, ((r) => et((n) => Jn(n) && n.length >= r))(t))), maxLength: (t) => ea(Ot(e, ((r) => et((n) => Jn(n) && n.length <= r))(t))), includes: (t) => {
  return ea(Ot(e, (r = t, et((n) => Jn(n) && n.includes(r)))));
  var r;
}, regex: (t) => {
  return ea(Ot(e, (r = t, et((n) => Jn(n) && !!n.match(r)))));
  var r;
} }), oD = ea(et(Jn)), nn = (e) => Object.assign(Jt(e), { between: (t, r) => nn(Ot(e, ((n, a) => et((o) => rn(o) && n <= o && a >= o))(t, r))), lt: (t) => nn(Ot(e, ((r) => et((n) => rn(n) && n < r))(t))), gt: (t) => nn(Ot(e, ((r) => et((n) => rn(n) && n > r))(t))), lte: (t) => nn(Ot(e, ((r) => et((n) => rn(n) && n <= r))(t))), gte: (t) => nn(Ot(e, ((r) => et((n) => rn(n) && n >= r))(t))), int: () => nn(Ot(e, et((t) => rn(t) && Number.isInteger(t)))), finite: () => nn(Ot(e, et((t) => rn(t) && Number.isFinite(t)))), positive: () => nn(Ot(e, et((t) => rn(t) && t > 0))), negative: () => nn(Ot(e, et((t) => rn(t) && t < 0))) }), iD = nn(et(rn)), In = (e) => Object.assign(Jt(e), { between: (t, r) => In(Ot(e, ((n, a) => et((o) => Nn(o) && n <= o && a >= o))(t, r))), lt: (t) => In(Ot(e, ((r) => et((n) => Nn(n) && n < r))(t))), gt: (t) => In(Ot(e, ((r) => et((n) => Nn(n) && n > r))(t))), lte: (t) => In(Ot(e, ((r) => et((n) => Nn(n) && n <= r))(t))), gte: (t) => In(Ot(e, ((r) => et((n) => Nn(n) && n >= r))(t))), positive: () => In(Ot(e, et((t) => Nn(t) && t > 0))), negative: () => In(Ot(e, et((t) => Nn(t) && t < 0))) }), sD = In(et(Nn)), uD = Jt(et(function(e) {
  return typeof e == "boolean";
})), lD = Jt(et(function(e) {
  return typeof e == "symbol";
})), cD = Jt(et(function(e) {
  return e == null;
})), fD = Jt(et(function(e) {
  return e != null;
}));
var dD = { __proto__: null, matcher: hr, optional: bc, array: function(...e) {
  return al({ [hr]: () => ({ match: (t) => {
    if (!Array.isArray(t))
      return { matched: !1 };
    if (e.length === 0)
      return { matched: !0 };
    const r = e[0];
    let n = {};
    if (t.length === 0)
      return Or(r).forEach((o) => {
        n[o] = [];
      }), { matched: !0, selections: n };
    const a = (o, i) => {
      n[o] = (n[o] || []).concat([i]);
    };
    return { matched: t.every((o) => Qt(r, o, a)), selections: n };
  }, getSelectionKeys: () => e.length === 0 ? [] : Or(e[0]) }) });
}, set: function(...e) {
  return Jt({ [hr]: () => ({ match: (t) => {
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
    return { matched: rD(t, (o) => Qt(a, o, n)), selections: r };
  }, getSelectionKeys: () => e.length === 0 ? [] : Or(e[0]) }) });
}, map: function(...e) {
  return Jt({ [hr]: () => ({ match: (t) => {
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
    return { matched: nD(t, (s, u) => {
      const l = Qt(o, u, n), c = Qt(i, s, n);
      return l && c;
    }), selections: r };
  }, getSelectionKeys: () => e.length === 0 ? [] : [...Or(e[0]), ...Or(e[1])] }) });
}, intersection: Ot, union: rm, not: function(e) {
  return Jt({ [hr]: () => ({ match: (t) => ({ matched: !Qt(e, t, () => {
  }) }), getSelectionKeys: () => [], matcherType: "not" }) });
}, when: et, select: Zo, any: nm, _: aD, string: oD, number: iD, bigint: sD, boolean: uD, symbol: lD, nullish: cD, nonNullable: fD, instanceOf: function(e) {
  return Jt(et(/* @__PURE__ */ function(t) {
    return (r) => r instanceof t;
  }(e)));
}, shape: function(e) {
  return Jt(et(tD(e)));
} };
const ol = { matched: !1, value: void 0 };
function Yt(e) {
  return new fs(e, ol);
}
class fs {
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
    }, u = !n.some((l) => Qt(l, this.input, s)) || a && !a(this.input) ? ol : { matched: !0, value: r(o ? cs in i ? i[cs] : i : this.input, this.input) };
    return new fs(this.input, u);
  }
  when(t, r) {
    if (this.state.matched)
      return this;
    const n = !!t(this.input);
    return new fs(this.input, n ? { matched: !0, value: r(this.input, this.input) } : ol);
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
const Et = {
  selectAllInModule(e) {
    const { selection: t } = e;
    if (!t)
      throw Error("selection is undefined");
    const [r, n] = y.edges(e, t);
    if (r.path[0] === n.path[0]) {
      const [a] = y.nodes(e, {
        match: (o) => ce.isElement(o)
      });
      return J.select(e, {
        anchor: y.start(e, a[1]),
        focus: y.end(e, a[1])
      }), !0;
    }
  },
  //加粗
  isBoldMarkActive(e) {
    const t = y.marks(e);
    return Yt(t).with({ bold: !0 }, () => !0).otherwise(() => !1);
  },
  toggleBoldMark(e) {
    const t = Et.isBoldMarkActive(e);
    Yt(t).with(!0, () => {
      y.removeMark(e, "bold");
    }).otherwise(() => {
      y.addMark(e, "bold", !0);
    });
  },
  //斜体
  isItalicMarkActive(e) {
    const t = y.marks(e);
    return Yt(t).with({ italic: !0 }, () => !0).otherwise(() => !1);
  },
  toggleItalicMark(e) {
    const t = Et.isItalicMarkActive(e);
    Yt(t).with(!0, () => {
      y.removeMark(e, "italic");
    }).otherwise(() => {
      y.addMark(e, "italic", !0);
    });
  },
  //下划线
  isUnderlineMarkActive(e) {
    const t = y.marks(e);
    return Yt(t).with({ underline: !0 }, () => !0).otherwise(() => !1);
  },
  toggleUnderlineMark(e) {
    const t = Et.isUnderlineMarkActive(e);
    Yt(t).with(!0, () => {
      y.removeMark(e, "underline");
    }).otherwise(() => {
      y.addMark(e, "underline", !0);
    });
  },
  //文本位置
  isTextAlignMarkActive(e) {
    const { selection: t } = e;
    if (!t)
      return !1;
    const [r] = y.nodes(e, {
      at: t,
      match: (n) => ce.isElement(n) && y.isBlock(e, n)
    });
    return Yt(r[0]).with({ textAlign: dD.not(void 0) }, (n) => n.textAlign).otherwise(() => !1);
  },
  toggleTextAlignMark(e, t) {
    Yt(t).with(void 0, () => {
      Et.isTextAlignMarkActive(e) && J.setNodes(
        e,
        { textAlign: void 0 },
        { match: (n) => ce.isElement(n) && y.isBlock(e, n) }
      );
    }).otherwise((r) => {
      J.setNodes(
        e,
        { textAlign: r },
        { match: (n) => ce.isElement(n) && y.isBlock(e, n) }
      );
    });
  },
  //任务
  isCheckListNode(e) {
    const [t] = y.nodes(e, {
      match: (r) => r.type === Kt.CheckList
    });
    return !!t;
  },
  toggleCheckListNode(e) {
    const t = Et.isCheckListNode(e);
    let r = !1, n = !1;
    Yt(t).with(!0, () => {
      J.setNodes(
        e,
        { type: Kt.Paragraph },
        { match: (a) => ce.isElement(a) && y.isBlock(e, a) }
      );
    }).with(!1, () => {
      const { selection: a } = e;
      if (!a)
        throw Error("selection is undefined");
      const o = y.start(e, a), [, i] = y.node(e, o), s = y.end(e, a), [, u] = y.node(e, s), l = y.previous(e, {
        at: i,
        match: (d) => ce.isElement(d)
      });
      if ((!l || l && l[1][0] === 0) && i[0] === 0 && (r = !0), y.next(e, {
        at: u,
        match: (d) => ce.isElement(d)
      }) || (n = !0), !n && !r)
        J.setNodes(
          e,
          { type: Kt.CheckList },
          { match: (d) => ce.isElement(d) && y.isBlock(e, d) }
        );
      else if (J.setNodes(
        e,
        { type: Kt.CheckList },
        { match: (d) => ce.isElement(d) && y.isBlock(e, d) }
      ), r && J.insertNodes(e, rl(), {
        at: [i[0]]
      }), n) {
        let d = 1;
        r && (d = 2), J.insertNodes(e, rl(), {
          at: [u[0] + d]
        });
      }
    });
  },
  restoreNormal(e) {
    const t = ["bold", "italic", "underline"];
    for (let r = 0; r < t.length; r++)
      y.removeMark(e, t[r]);
  },
  isParagraphNode(e) {
    const [t] = y.nodes(e, {
      match: (r) => r.type === Kt.Paragraph
    });
    return !!t;
  },
  isOrderedNode(e) {
    const [t] = y.nodes(e, {
      match: (r) => r.type === Kt.OrderedList
    });
    return !!t;
  },
  toggleOrderedNode(e) {
    const [t] = y.nodes(e, {
      match: (r) => r.type === Kt.OrderedList
    });
    return !!t;
  }
};
var qi = /* @__PURE__ */ ((e) => (e.Bold = "b", e.Italic = "i", e.Underline = "u", e.Restore = "r", e))(qi || {});
const vD = (e) => {
  const { deleteBackward: t, insertBreak: r } = e;
  return e.deleteBackward = (...n) => {
    const { selection: a } = e;
    if (a && eD(e)) {
      const [o] = y.nodes(e, {
        match: (i) => !y.isEditor(i) && ce.isElement(i) && i.type === Kt.CheckList
      });
      if (o) {
        const [, i] = o, s = y.start(e, i);
        if (ze.equals(a.anchor, s)) {
          const u = {
            type: Kt.Paragraph
          };
          J.setNodes(e, u, {
            match: (l) => !y.isEditor(l) && ce.isElement(l) && l.type === Kt.CheckList
          });
          return;
        }
      }
    }
    t(...n);
  }, e.insertBreak = () => {
    const [n] = y.nodes(e, {
      match: (a) => !y.isEditor(a) && ce.isElement(a) && a.type === Kt.CheckList
    });
    if (n) {
      const [, a] = n;
      if (!y.string(e, a)) {
        const i = {
          type: Kt.Paragraph
        };
        J.setNodes(e, i, {
          match: (s) => !y.isEditor(s) && ce.isElement(s) && s.type === Kt.CheckList
        });
        return;
      }
    }
    r();
  }, e;
}, gD = (e) => {
  const { deleteBackward: t, insertBreak: r } = e;
  return e.deleteBackward = (...n) => {
    t(...n);
  }, e.insertBreak = () => {
    r();
  }, e;
}, mD = () => {
  const [e, t] = ir(!0);
  return [lr(
    () => gD(vD(XE(ZE(QC())))),
    []
  ), { showPlaceholder: e, handlePlaceholder: (a) => {
  } }];
};
var am = { exports: {} };
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
})(am);
var hD = am.exports;
const de = /* @__PURE__ */ Bs(hD);
function He() {
  return He = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, He.apply(this, arguments);
}
var il = { exports: {} }, st = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Od;
function pD() {
  if (Od)
    return st;
  Od = 1;
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
  return st.ContextConsumer = i, st.ContextProvider = o, st.Element = e, st.ForwardRef = u, st.Fragment = r, st.Lazy = v, st.Memo = d, st.Portal = t, st.Profiler = a, st.StrictMode = n, st.Suspense = l, st.SuspenseList = c, st.isAsyncMode = function() {
    return !1;
  }, st.isConcurrentMode = function() {
    return !1;
  }, st.isContextConsumer = function(m) {
    return f(m) === i;
  }, st.isContextProvider = function(m) {
    return f(m) === o;
  }, st.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, st.isForwardRef = function(m) {
    return f(m) === u;
  }, st.isFragment = function(m) {
    return f(m) === r;
  }, st.isLazy = function(m) {
    return f(m) === v;
  }, st.isMemo = function(m) {
    return f(m) === d;
  }, st.isPortal = function(m) {
    return f(m) === t;
  }, st.isProfiler = function(m) {
    return f(m) === a;
  }, st.isStrictMode = function(m) {
    return f(m) === n;
  }, st.isSuspense = function(m) {
    return f(m) === l;
  }, st.isSuspenseList = function(m) {
    return f(m) === c;
  }, st.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === a || m === n || m === l || m === c || m === p || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === d || m.$$typeof === o || m.$$typeof === i || m.$$typeof === u || m.$$typeof === h || m.getModuleId !== void 0);
  }, st.typeOf = f, st;
}
var ut = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xd;
function bD() {
  return xd || (xd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h = !1, f = !1, m = !1, b = !1, C = !1, E;
    E = Symbol.for("react.module.reference");
    function D(Y) {
      return !!(typeof Y == "string" || typeof Y == "function" || Y === r || Y === a || C || Y === n || Y === l || Y === c || b || Y === p || h || f || m || typeof Y == "object" && Y !== null && (Y.$$typeof === v || Y.$$typeof === d || Y.$$typeof === o || Y.$$typeof === i || Y.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Y.$$typeof === E || Y.getModuleId !== void 0));
    }
    function w(Y) {
      if (typeof Y == "object" && Y !== null) {
        var me = Y.$$typeof;
        switch (me) {
          case e:
            var Ee = Y.type;
            switch (Ee) {
              case r:
              case a:
              case n:
              case l:
              case c:
                return Ee;
              default:
                var Ae = Ee && Ee.$$typeof;
                switch (Ae) {
                  case s:
                  case i:
                  case u:
                  case v:
                  case d:
                  case o:
                    return Ae;
                  default:
                    return me;
                }
            }
          case t:
            return me;
        }
      }
    }
    var S = i, O = o, B = e, x = u, F = r, _ = v, N = d, P = t, I = a, T = n, k = l, A = c, M = !1, V = !1;
    function z(Y) {
      return M || (M = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(Y) {
      return V || (V = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function G(Y) {
      return w(Y) === i;
    }
    function Q(Y) {
      return w(Y) === o;
    }
    function R(Y) {
      return typeof Y == "object" && Y !== null && Y.$$typeof === e;
    }
    function H(Y) {
      return w(Y) === u;
    }
    function L(Y) {
      return w(Y) === r;
    }
    function q(Y) {
      return w(Y) === v;
    }
    function re(Y) {
      return w(Y) === d;
    }
    function te(Y) {
      return w(Y) === t;
    }
    function ue(Y) {
      return w(Y) === a;
    }
    function se(Y) {
      return w(Y) === n;
    }
    function ve(Y) {
      return w(Y) === l;
    }
    function le(Y) {
      return w(Y) === c;
    }
    ut.ContextConsumer = S, ut.ContextProvider = O, ut.Element = B, ut.ForwardRef = x, ut.Fragment = F, ut.Lazy = _, ut.Memo = N, ut.Portal = P, ut.Profiler = I, ut.StrictMode = T, ut.Suspense = k, ut.SuspenseList = A, ut.isAsyncMode = z, ut.isConcurrentMode = U, ut.isContextConsumer = G, ut.isContextProvider = Q, ut.isElement = R, ut.isForwardRef = H, ut.isFragment = L, ut.isLazy = q, ut.isMemo = re, ut.isPortal = te, ut.isProfiler = ue, ut.isStrictMode = se, ut.isSuspense = ve, ut.isSuspenseList = le, ut.isValidElementType = D, ut.typeOf = w;
  }()), ut;
}
process.env.NODE_ENV === "production" ? il.exports = pD() : il.exports = bD();
var ko = il.exports;
function Wn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return ne.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(Wn(n)) : ko.isFragment(n) && n.props ? r = r.concat(Wn(n.props.children, t)) : r.push(n));
  }), r;
}
var sl = {}, yc = [], yD = function(t) {
  yc.push(t);
};
function to(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = yc.reduce(function(n, a) {
      return a(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function CD(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = yc.reduce(function(n, a) {
      return a(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function om() {
  sl = {};
}
function im(e, t, r) {
  !t && !sl[r] && (e(!1, r), sl[r] = !0);
}
function dt(e, t) {
  im(to, e, t);
}
function ED(e, t) {
  im(CD, e, t);
}
dt.preMessage = yD;
dt.resetWarned = om;
dt.noteOnce = ED;
function it(e) {
  "@babel/helpers - typeof";
  return it = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, it(e);
}
function DD(e, t) {
  if (it(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (it(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function sm(e) {
  var t = DD(e, "string");
  return it(t) == "symbol" ? t : String(t);
}
function W(e, t, r) {
  return t = sm(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
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
function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ad(Object(r), !0).forEach(function(n) {
      W(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ad(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ds(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Gi(e) {
  return ds(e) ? e : e instanceof ne.Component ? sg.findDOMNode(e) : null;
}
function ui(e, t, r) {
  var n = g.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
function Cc(e, t) {
  typeof e == "function" ? e(t) : it(e) === "object" && e && "current" in e && (e.current = t);
}
function co() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t.filter(function(a) {
    return a;
  });
  return n.length <= 1 ? n[0] : function(a) {
    t.forEach(function(o) {
      Cc(o, a);
    });
  };
}
function li() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return ui(function() {
    return co.apply(void 0, t);
  }, t, function(n, a) {
    return n.length !== a.length || n.every(function(o, i) {
      return o !== a[i];
    });
  });
}
function Gn(e) {
  var t, r, n = ko.isMemo(e) ? e.type.type : e.type;
  return !(typeof n == "function" && !((t = n.prototype) !== null && t !== void 0 && t.render) && n.$$typeof !== ko.ForwardRef || typeof e == "function" && !((r = e.prototype) !== null && r !== void 0 && r.render) && e.$$typeof !== ko.ForwardRef);
}
function wD(e) {
  return !/* @__PURE__ */ t0(e) || ko.isFragment(e) ? !1 : Gn(e);
}
var ul = /* @__PURE__ */ g.createContext(null);
function SD(e) {
  var t = e.children, r = e.onBatchResize, n = g.useRef(0), a = g.useRef([]), o = g.useContext(ul), i = g.useCallback(function(s, u, l) {
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
  return /* @__PURE__ */ g.createElement(ul.Provider, {
    value: i
  }, t);
}
var um = function() {
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
}(), ll = typeof window < "u" && typeof document < "u" && window.document === document, vs = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), OD = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(vs) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), xD = 2;
function AD(e, t) {
  var r = !1, n = !1, a = 0;
  function o() {
    r && (r = !1, e()), n && s();
  }
  function i() {
    OD(o);
  }
  function s() {
    var u = Date.now();
    if (r) {
      if (u - a < xD)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(i, t);
    a = u;
  }
  return s;
}
var BD = 20, FD = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], PD = typeof MutationObserver < "u", $D = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = AD(this.refresh.bind(this), BD);
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
      !ll || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), PD ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !ll || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, a = FD.some(function(o) {
        return !!~n.indexOf(o);
      });
      a && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), lm = function(e, t) {
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
}, ro = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || vs;
}, cm = Is(0, 0, 0, 0);
function gs(e) {
  return parseFloat(e) || 0;
}
function Bd(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, a) {
    var o = e["border-" + a + "-width"];
    return n + gs(o);
  }, 0);
}
function RD(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, a = t; n < a.length; n++) {
    var o = a[n], i = e["padding-" + o];
    r[o] = gs(i);
  }
  return r;
}
function TD(e) {
  var t = e.getBBox();
  return Is(0, 0, t.width, t.height);
}
function ND(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return cm;
  var n = ro(e).getComputedStyle(e), a = RD(n), o = a.left + a.right, i = a.top + a.bottom, s = gs(n.width), u = gs(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + o) !== t && (s -= Bd(n, "left", "right") + o), Math.round(u + i) !== r && (u -= Bd(n, "top", "bottom") + i)), !MD(e)) {
    var l = Math.round(s + o) - t, c = Math.round(u + i) - r;
    Math.abs(l) !== 1 && (s -= l), Math.abs(c) !== 1 && (u -= c);
  }
  return Is(a.left, a.top, s, u);
}
var ID = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof ro(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof ro(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function MD(e) {
  return e === ro(e).document.documentElement;
}
function jD(e) {
  return ll ? ID(e) ? TD(e) : ND(e) : cm;
}
function kD(e) {
  var t = e.x, r = e.y, n = e.width, a = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(o.prototype);
  return lm(i, {
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
function Is(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var _D = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Is(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = jD(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), LD = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, r) {
      var n = kD(r);
      lm(this, { target: t, contentRect: n });
    }
    return e;
  }()
), zD = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new um(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof ro(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new _D(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof ro(t).Element))
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
          return new LD(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), fm = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new um(), dm = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = $D.getInstance(), n = new zD(t, r, this);
      fm.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  dm.prototype[e] = function() {
    var t;
    return (t = fm.get(this))[e].apply(t, arguments);
  };
});
var VD = function() {
  return typeof vs.ResizeObserver < "u" ? vs.ResizeObserver : dm;
}(), yn = /* @__PURE__ */ new Map();
function vm(e) {
  e.forEach(function(t) {
    var r, n = t.target;
    (r = yn.get(n)) === null || r === void 0 || r.forEach(function(a) {
      return a(n);
    });
  });
}
var gm = new VD(vm);
process.env.NODE_ENV;
process.env.NODE_ENV;
function HD(e, t) {
  yn.has(e) || (yn.set(e, /* @__PURE__ */ new Set()), gm.observe(e)), yn.get(e).add(t);
}
function WD(e, t) {
  yn.has(e) && (yn.get(e).delete(t), yn.get(e).size || (gm.unobserve(e), yn.delete(e)));
}
function br(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, sm(n.key), n);
  }
}
function yr(e, t, r) {
  return t && Fd(e.prototype, t), r && Fd(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function cl(e, t) {
  return cl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, cl(e, t);
}
function ba(e, t) {
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
  }), t && cl(e, t);
}
function Kn(e) {
  return Kn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Kn(e);
}
function Ms() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ms = function() {
    return !!e;
  })();
}
function Je(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ec(e, t) {
  if (t && (it(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Je(e);
}
function ci(e) {
  var t = Ms();
  return function() {
    var n = Kn(e), a;
    if (t) {
      var o = Kn(this).constructor;
      a = Reflect.construct(n, arguments, o);
    } else
      a = n.apply(this, arguments);
    return Ec(this, a);
  };
}
var KD = /* @__PURE__ */ function(e) {
  ba(r, e);
  var t = ci(r);
  function r() {
    return br(this, r), t.apply(this, arguments);
  }
  return yr(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(g.Component);
function UD(e, t) {
  var r = e.children, n = e.disabled, a = g.useRef(null), o = g.useRef(null), i = g.useContext(ul), s = typeof r == "function", u = s ? r(a) : r, l = g.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), c = !s && /* @__PURE__ */ g.isValidElement(u) && Gn(u), d = c ? u.ref : null, v = li(d, a), p = function() {
    var b;
    return Gi(a.current) || // Support `nativeElement` format
    (a.current && it(a.current) === "object" ? Gi((b = a.current) === null || b === void 0 ? void 0 : b.nativeElement) : null) || Gi(o.current);
  };
  g.useImperativeHandle(t, function() {
    return p();
  });
  var h = g.useRef(e);
  h.current = e;
  var f = g.useCallback(function(m) {
    var b = h.current, C = b.onResize, E = b.data, D = m.getBoundingClientRect(), w = D.width, S = D.height, O = m.offsetWidth, B = m.offsetHeight, x = Math.floor(w), F = Math.floor(S);
    if (l.current.width !== x || l.current.height !== F || l.current.offsetWidth !== O || l.current.offsetHeight !== B) {
      var _ = {
        width: x,
        height: F,
        offsetWidth: O,
        offsetHeight: B
      };
      l.current = _;
      var N = O === Math.round(w) ? w : O, P = B === Math.round(S) ? S : B, I = Z(Z({}, _), {}, {
        offsetWidth: N,
        offsetHeight: P
      });
      i == null || i(I, m, E), C && Promise.resolve().then(function() {
        C(I, m);
      });
    }
  }, []);
  return g.useEffect(function() {
    var m = p();
    return m && !n && HD(m, f), function() {
      return WD(m, f);
    };
  }, [a.current, n]), /* @__PURE__ */ g.createElement(KD, {
    ref: o
  }, c ? /* @__PURE__ */ g.cloneElement(u, {
    ref: v
  }) : u);
}
var mm = /* @__PURE__ */ g.forwardRef(UD);
process.env.NODE_ENV !== "production" && (mm.displayName = "SingleObserver");
var qD = "rc-observer-key";
function GD(e, t) {
  var r = e.children, n = typeof r == "function" ? [r] : Wn(r);
  return process.env.NODE_ENV !== "production" && (n.length > 1 ? to(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && to(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(a, o) {
    var i = (a == null ? void 0 : a.key) || "".concat(qD, "-").concat(o);
    return /* @__PURE__ */ g.createElement(mm, He({}, e, {
      key: i,
      ref: o === 0 ? t : void 0
    }), a);
  });
}
var fo = /* @__PURE__ */ g.forwardRef(GD);
process.env.NODE_ENV !== "production" && (fo.displayName = "ResizeObserver");
fo.Collection = SD;
function xn(e, t) {
  var r = Z({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
function fl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function XD(e) {
  if (Array.isArray(e))
    return fl(e);
}
function hm(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Dc(e, t) {
  if (e) {
    if (typeof e == "string")
      return fl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return fl(e, t);
  }
}
function YD() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Be(e) {
  return XD(e) || hm(e) || Dc(e) || YD();
}
var pm = function(t) {
  return +setTimeout(t, 16);
}, bm = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (pm = function(t) {
  return window.requestAnimationFrame(t);
}, bm = function(t) {
  return window.cancelAnimationFrame(t);
});
var Pd = 0, js = /* @__PURE__ */ new Map();
function ym(e) {
  js.delete(e);
}
var tr = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Pd += 1;
  var n = Pd;
  function a(o) {
    if (o === 0)
      ym(n), t();
    else {
      var i = pm(function() {
        a(o - 1);
      });
      js.set(n, i);
    }
  }
  return a(r), n;
};
tr.cancel = function(e) {
  var t = js.get(e);
  return ym(e), bm(t);
};
process.env.NODE_ENV !== "production" && (tr.ids = function() {
  return js;
});
function Cm(e) {
  if (Array.isArray(e))
    return e;
}
function ZD(e, t) {
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
function Em() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ae(e, t) {
  return Cm(e) || ZD(e, t) || Dc(e, t) || Em();
}
function Qo(e) {
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
function QD(e, t) {
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
var $d = "data-rc-order", Rd = "data-rc-priority", JD = "rc-util-key", dl = /* @__PURE__ */ new Map();
function Dm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : JD;
}
function ks(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function ew(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function wc(e) {
  return Array.from((dl.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function wm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!pr())
    return null;
  var r = t.csp, n = t.prepend, a = t.priority, o = a === void 0 ? 0 : a, i = ew(n), s = i === "prependQueue", u = document.createElement("style");
  u.setAttribute($d, i), s && o && u.setAttribute(Rd, "".concat(o)), r != null && r.nonce && (u.nonce = r == null ? void 0 : r.nonce), u.innerHTML = e;
  var l = ks(t), c = l.firstChild;
  if (n) {
    if (s) {
      var d = (t.styles || wc(l)).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute($d)))
          return !1;
        var p = Number(v.getAttribute(Rd) || 0);
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
function Sm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = ks(t);
  return (t.styles || wc(r)).find(function(n) {
    return n.getAttribute(Dm(t)) === e;
  });
}
function Jo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Sm(e, t);
  if (r) {
    var n = ks(t);
    n.removeChild(r);
  }
}
function tw(e, t) {
  var r = dl.get(e);
  if (!r || !QD(document, r)) {
    var n = wm("", t), a = n.parentNode;
    dl.set(e, a), e.removeChild(n);
  }
}
function Cn(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = ks(r), a = wc(n), o = Z(Z({}, r), {}, {
    styles: a
  });
  tw(n, o);
  var i = Sm(t, o);
  if (i) {
    var s, u;
    if ((s = o.csp) !== null && s !== void 0 && s.nonce && i.nonce !== ((u = o.csp) === null || u === void 0 ? void 0 : u.nonce)) {
      var l;
      i.nonce = (l = o.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var c = wm(e, o);
  return c.setAttribute(Dm(o), t), c;
}
function rw(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function lt(e, t) {
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
function no(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function a(o, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, u = n.has(o);
    if (dt(!u, "Warning: There may be circular references"), u)
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
    if (o && i && it(o) === "object" && it(i) === "object") {
      var d = Object.keys(o);
      return d.length !== Object.keys(i).length ? !1 : d.every(function(v) {
        return a(o[v], i[v], l);
      });
    }
    return !1;
  }
  return a(e, t);
}
var nw = "%";
function vl(e) {
  return e.join(nw);
}
var aw = /* @__PURE__ */ function() {
  function e(t) {
    br(this, e), W(this, "instanceId", void 0), W(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return yr(e, [{
    key: "get",
    value: function(r) {
      return this.opGet(vl(r));
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
      return this.opUpdate(vl(r), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(r, n) {
      var a = this.cache.get(r), o = n(a);
      o === null ? this.cache.delete(r) : this.cache.set(r, o);
    }
  }]), e;
}(), ow = ["children"], ao = "data-token-hash", Kr = "data-css-hash", iw = "data-cache-path", Ln = "__cssinjs_instance__";
function Om() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(Kr, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(a) {
      a[Ln] = a[Ln] || e, a[Ln] === e && document.head.insertBefore(a, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(Kr, "]"))).forEach(function(a) {
      var o = a.getAttribute(Kr);
      if (n[o]) {
        if (a[Ln] === e) {
          var i;
          (i = a.parentNode) === null || i === void 0 || i.removeChild(a);
        }
      } else
        n[o] = !0;
    });
  }
  return new aw(e);
}
var oo = /* @__PURE__ */ g.createContext({
  hashPriority: "low",
  cache: Om(),
  defaultCache: !0
}), sw = function(t) {
  var r = t.children, n = lt(t, ow), a = g.useContext(oo), o = ui(function() {
    var i = Z({}, a);
    Object.keys(n).forEach(function(u) {
      var l = n[u];
      n[u] !== void 0 && (i[u] = l);
    });
    var s = n.cache;
    return i.cache = i.cache || Om(), i.defaultCache = !s && a.defaultCache, i;
  }, [a, n], function(i, s) {
    return !no(i[0], s[0], !0) || !no(i[1], s[1], !0);
  });
  return /* @__PURE__ */ g.createElement(oo.Provider, {
    value: o
  }, r);
};
function uw(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var Sc = /* @__PURE__ */ function() {
  function e() {
    br(this, e), W(this, "cache", void 0), W(this, "keys", void 0), W(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return yr(e, [{
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
            var d = ae(l, 2), v = d[1];
            return a.internalGet(c)[1] < v ? [c, a.internalGet(c)[1]] : l;
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
          return !uw(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
W(Sc, "MAX_CACHE_SIZE", 20);
W(Sc, "MAX_CACHE_OFFSET", 5);
var Td = 0, xm = /* @__PURE__ */ function() {
  function e(t) {
    br(this, e), W(this, "derivatives", void 0), W(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Td, t.length === 0 && to(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Td += 1;
  }
  return yr(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, a) {
        return a(r, n);
      }, void 0);
    }
  }]), e;
}(), yu = new Sc();
function ei(e) {
  var t = Array.isArray(e) ? e : [e];
  return yu.has(t) || yu.set(t, new xm(t)), yu.get(t);
}
var lw = /* @__PURE__ */ new WeakMap(), Cu = {};
function cw(e, t) {
  for (var r = lw, n = 0; n < t.length; n += 1) {
    var a = t[n];
    r.has(a) || r.set(a, /* @__PURE__ */ new WeakMap()), r = r.get(a);
  }
  return r.has(Cu) || r.set(Cu, e()), r.get(Cu);
}
var Nd = /* @__PURE__ */ new WeakMap();
function _o(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = Nd.get(e) || "";
  return r || (Object.keys(e).forEach(function(n) {
    var a = e[n];
    r += n, a instanceof xm ? r += a.id : a && it(a) === "object" ? r += _o(a, t) : r += a;
  }), t && (r = Qo(r)), Nd.set(e, r)), r;
}
function Id(e, t) {
  return Qo("".concat(t, "_").concat(_o(e, !0)));
}
var gl = pr();
function Me(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function ms(e, t, r) {
  var n, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (o)
    return e;
  var i = Z(Z({}, a), {}, (n = {}, W(n, ao, t), W(n, Kr, r), n)), s = Object.keys(i).map(function(u) {
    var l = i[u];
    return l ? "".concat(u, '="').concat(l, '"') : null;
  }).filter(function(u) {
    return u;
  }).join(" ");
  return "<style ".concat(s, ">").concat(e, "</style>");
}
var Am = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(r ? "".concat(r, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, fw = function(t, r, n) {
  return Object.keys(t).length ? ".".concat(r).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(a) {
    var o = ae(a, 2), i = o[0], s = o[1];
    return "".concat(i, ":").concat(s, ";");
  }).join(""), "}") : "";
}, Bm = function(t, r, n) {
  var a = {}, o = {};
  return Object.entries(t).forEach(function(i) {
    var s, u, l = ae(i, 2), c = l[0], d = l[1];
    if (n != null && (s = n.preserve) !== null && s !== void 0 && s[c])
      o[c] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(n != null && (u = n.ignore) !== null && u !== void 0 && u[c])) {
      var v, p = Am(c, n == null ? void 0 : n.prefix);
      a[p] = typeof d == "number" && !(n != null && (v = n.unitless) !== null && v !== void 0 && v[c]) ? "".concat(d, "px") : String(d), o[c] = "var(".concat(p, ")");
    }
  }), [o, fw(a, r, {
    scope: n == null ? void 0 : n.scope
  })];
}, Md = process.env.NODE_ENV !== "test" && pr() ? g.useLayoutEffect : g.useEffect, or = function(t, r) {
  var n = g.useRef(!0);
  Md(function() {
    return t(n.current);
  }, r), Md(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, jd = function(t, r) {
  or(function(n) {
    if (!n)
      return t();
  }, r);
}, dw = Z({}, g), kd = dw.useInsertionEffect, vw = function(t, r, n) {
  g.useMemo(t, n), or(function() {
    return r(!0);
  }, n);
}, gw = kd ? function(e, t, r) {
  return kd(function() {
    return e(), t();
  }, r);
} : vw, mw = Z({}, g), hw = mw.useInsertionEffect, pw = function(t) {
  var r = [], n = !1;
  function a(o) {
    if (n) {
      process.env.NODE_ENV !== "production" && to(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
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
}, bw = function() {
  return function(t) {
    t();
  };
}, yw = typeof hw < "u" ? pw : bw;
function Cw() {
  return !1;
}
var ml = !1;
function Ew() {
  return ml;
}
const Dw = process.env.NODE_ENV === "production" ? Cw : Ew;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Eu = window;
  if (typeof Eu.webpackHotUpdate == "function") {
    var ww = Eu.webpackHotUpdate;
    Eu.webpackHotUpdate = function() {
      return ml = !0, setTimeout(function() {
        ml = !1;
      }, 0), ww.apply(void 0, arguments);
    };
  }
}
function Oc(e, t, r, n, a) {
  var o = g.useContext(oo), i = o.cache, s = [e].concat(Be(t)), u = vl(s), l = yw([u]), c = Dw(), d = function(f) {
    i.opUpdate(u, function(m) {
      var b = m || [void 0, void 0], C = ae(b, 2), E = C[0], D = E === void 0 ? 0 : E, w = C[1], S = w;
      process.env.NODE_ENV !== "production" && w && c && (n == null || n(S, c), S = null);
      var O = S || r(), B = [D, O];
      return f ? f(B) : B;
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
  return gw(function() {
    a == null || a(p);
  }, function(h) {
    return d(function(f) {
      var m = ae(f, 2), b = m[0], C = m[1];
      return h && b === 0 && (a == null || a(p)), [b + 1, C];
    }), function() {
      i.opUpdate(u, function(f) {
        var m = f || [], b = ae(m, 2), C = b[0], E = C === void 0 ? 0 : C, D = b[1], w = E - 1;
        return w === 0 ? (l(function() {
          (h || !i.opGet(u)) && (n == null || n(D, !1));
        }), null) : [E - 1, D];
      });
    };
  }, [u]), p;
}
var Sw = {}, Ow = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", na = /* @__PURE__ */ new Map();
function xw(e) {
  na.set(e, (na.get(e) || 0) + 1);
}
function Aw(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(ao, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[Ln] === t) {
        var a;
        (a = n.parentNode) === null || a === void 0 || a.removeChild(n);
      }
    });
  }
}
var Bw = 0;
function Fw(e, t) {
  na.set(e, (na.get(e) || 0) - 1);
  var r = Array.from(na.keys()), n = r.filter(function(a) {
    var o = na.get(a) || 0;
    return o <= 0;
  });
  r.length - n.length > Bw && n.forEach(function(a) {
    Aw(a, t), na.delete(a);
  });
}
var Fm = function(t, r, n, a) {
  var o = n.getDerivativeToken(t), i = Z(Z({}, o), r);
  return a && (i = a(i)), i;
}, Pm = "token";
function Pw(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Ut(oo), a = n.cache.instanceId, o = n.container, i = r.salt, s = i === void 0 ? "" : i, u = r.override, l = u === void 0 ? Sw : u, c = r.formatToken, d = r.getComputedToken, v = r.cssVar, p = cw(function() {
    return Object.assign.apply(Object, [{}].concat(Be(t)));
  }, t), h = _o(p), f = _o(l), m = v ? _o(v) : "", b = Oc(Pm, [s, e.id, h, f, m], function() {
    var C, E = d ? d(p, l, e) : Fm(p, l, e, c), D = Z({}, E), w = "";
    if (v) {
      var S = Bm(E, v.key, {
        prefix: v.prefix,
        ignore: v.ignore,
        unitless: v.unitless,
        preserve: v.preserve
      }), O = ae(S, 2);
      E = O[0], w = O[1];
    }
    var B = Id(E, s);
    E._tokenKey = B, D._tokenKey = Id(D, s);
    var x = (C = v == null ? void 0 : v.key) !== null && C !== void 0 ? C : B;
    E._themeKey = x, xw(x);
    var F = "".concat(Ow, "-").concat(Qo(B));
    return E._hashId = F, [E, F, D, w, (v == null ? void 0 : v.key) || ""];
  }, function(C) {
    Fw(C[0]._themeKey, a);
  }, function(C) {
    var E = ae(C, 4), D = E[0], w = E[3];
    if (v && w) {
      var S = Cn(w, Qo("css-variables-".concat(D._themeKey)), {
        mark: Kr,
        prepend: "queue",
        attachTo: o,
        priority: -999
      });
      S[Ln] = a, S.setAttribute(ao, D._themeKey);
    }
  });
  return b;
}
var $w = function(t, r, n) {
  var a = ae(t, 5), o = a[2], i = a[3], s = a[4], u = n || {}, l = u.plain;
  if (!i)
    return null;
  var c = o._tokenKey, d = -999, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, p = ms(i, s, c, v, l);
  return [d, c, p];
}, Rw = {
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
}, $m = "comm", Rm = "rule", Tm = "decl", Tw = "@import", Nw = "@keyframes", Iw = "@layer", Nm = Math.abs, xc = String.fromCharCode;
function Im(e) {
  return e.trim();
}
function Xi(e, t, r) {
  return e.replace(t, r);
}
function Mw(e, t, r) {
  return e.indexOf(t, r);
}
function ti(e, t) {
  return e.charCodeAt(t) | 0;
}
function ri(e, t, r) {
  return e.slice(t, r);
}
function pn(e) {
  return e.length;
}
function jw(e) {
  return e.length;
}
function Fi(e, t) {
  return t.push(e), e;
}
var _s = 1, io = 1, Mm = 0, Ir = 0, Mt = 0, vo = "";
function Ac(e, t, r, n, a, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: a, children: o, line: _s, column: io, length: i, return: "", siblings: s };
}
function kw() {
  return Mt;
}
function _w() {
  return Mt = Ir > 0 ? ti(vo, --Ir) : 0, io--, Mt === 10 && (io = 1, _s--), Mt;
}
function Ur() {
  return Mt = Ir < Mm ? ti(vo, Ir++) : 0, io++, Mt === 10 && (io = 1, _s++), Mt;
}
function da() {
  return ti(vo, Ir);
}
function Yi() {
  return Ir;
}
function Ls(e, t) {
  return ri(vo, e, t);
}
function hl(e) {
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
function Lw(e) {
  return _s = io = 1, Mm = pn(vo = e), Ir = 0, [];
}
function zw(e) {
  return vo = "", e;
}
function Du(e) {
  return Im(Ls(Ir - 1, pl(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Vw(e) {
  for (; (Mt = da()) && Mt < 33; )
    Ur();
  return hl(e) > 2 || hl(Mt) > 3 ? "" : " ";
}
function Hw(e, t) {
  for (; --t && Ur() && !(Mt < 48 || Mt > 102 || Mt > 57 && Mt < 65 || Mt > 70 && Mt < 97); )
    ;
  return Ls(e, Yi() + (t < 6 && da() == 32 && Ur() == 32));
}
function pl(e) {
  for (; Ur(); )
    switch (Mt) {
      case e:
        return Ir;
      case 34:
      case 39:
        e !== 34 && e !== 39 && pl(Mt);
        break;
      case 40:
        e === 41 && pl(e);
        break;
      case 92:
        Ur();
        break;
    }
  return Ir;
}
function Ww(e, t) {
  for (; Ur() && e + Mt !== 57; )
    if (e + Mt === 84 && da() === 47)
      break;
  return "/*" + Ls(t, Ir - 1) + "*" + xc(e === 47 ? e : Ur());
}
function Kw(e) {
  for (; !hl(da()); )
    Ur();
  return Ls(e, Ir);
}
function Uw(e) {
  return zw(Zi("", null, null, null, [""], e = Lw(e), 0, [0], e));
}
function Zi(e, t, r, n, a, o, i, s, u) {
  for (var l = 0, c = 0, d = i, v = 0, p = 0, h = 0, f = 1, m = 1, b = 1, C = 0, E = "", D = a, w = o, S = n, O = E; m; )
    switch (h = C, C = Ur()) {
      case 40:
        if (h != 108 && ti(O, d - 1) == 58) {
          Mw(O += Xi(Du(C), "&", "&\f"), "&\f", Nm(l ? s[l - 1] : 0)) != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += Du(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += Vw(h);
        break;
      case 92:
        O += Hw(Yi() - 1, 7);
        continue;
      case 47:
        switch (da()) {
          case 42:
          case 47:
            Fi(qw(Ww(Ur(), Yi()), t, r, u), u);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * f:
        s[l++] = pn(O) * b;
      case 125 * f:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            m = 0;
          case 59 + c:
            b == -1 && (O = Xi(O, /\f/g, "")), p > 0 && pn(O) - d && Fi(p > 32 ? Ld(O + ";", n, r, d - 1, u) : Ld(Xi(O, " ", "") + ";", n, r, d - 2, u), u);
            break;
          case 59:
            O += ";";
          default:
            if (Fi(S = _d(O, t, r, l, c, a, s, E, D = [], w = [], d, o), o), C === 123)
              if (c === 0)
                Zi(O, t, S, S, D, o, d, s, w);
              else
                switch (v === 99 && ti(O, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Zi(e, S, S, n && Fi(_d(e, S, S, 0, 0, a, s, E, a, D = [], d, w), w), a, w, d, s, n ? D : w);
                    break;
                  default:
                    Zi(O, S, S, S, [""], w, 0, s, w);
                }
        }
        l = c = p = 0, f = b = 1, E = O = "", d = i;
        break;
      case 58:
        d = 1 + pn(O), p = h;
      default:
        if (f < 1) {
          if (C == 123)
            --f;
          else if (C == 125 && f++ == 0 && _w() == 125)
            continue;
        }
        switch (O += xc(C), C * f) {
          case 38:
            b = c > 0 ? 1 : (O += "\f", -1);
            break;
          case 44:
            s[l++] = (pn(O) - 1) * b, b = 1;
            break;
          case 64:
            da() === 45 && (O += Du(Ur())), v = da(), c = d = pn(E = O += Kw(Yi())), C++;
            break;
          case 45:
            h === 45 && pn(O) == 2 && (f = 0);
        }
    }
  return o;
}
function _d(e, t, r, n, a, o, i, s, u, l, c, d) {
  for (var v = a - 1, p = a === 0 ? o : [""], h = jw(p), f = 0, m = 0, b = 0; f < n; ++f)
    for (var C = 0, E = ri(e, v + 1, v = Nm(m = i[f])), D = e; C < h; ++C)
      (D = Im(m > 0 ? p[C] + " " + E : Xi(E, /&\f/g, p[C]))) && (u[b++] = D);
  return Ac(e, t, r, a === 0 ? Rm : s, u, l, c, d);
}
function qw(e, t, r, n) {
  return Ac(e, t, r, $m, xc(kw()), ri(e, 2, -2), 0, n);
}
function Ld(e, t, r, n, a) {
  return Ac(e, t, r, Tm, ri(e, 0, n), ri(e, n + 1, -1), n, a);
}
function bl(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Gw(e, t, r, n) {
  switch (e.type) {
    case Iw:
      if (e.children.length)
        break;
    case Tw:
    case Tm:
      return e.return = e.return || e.value;
    case $m:
      return "";
    case Nw:
      return e.return = e.value + "{" + bl(e.children, n) + "}";
    case Rm:
      if (!pn(e.value = e.props.join(",")))
        return "";
  }
  return pn(r = bl(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function jm(e, t) {
  var r = t.path, n = t.parentSelectors;
  dt(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var Xw = function(t, r, n) {
  if (t === "content") {
    var a = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, o = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || o.indexOf(r) === -1 && !a.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && jm("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, Yw = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && jm("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, zd = "data-ant-cssinjs-cache-path", km = "_FILE_STYLE__", va, _m = !0;
function Zw() {
  if (!va && (va = {}, pr())) {
    var e = document.createElement("div");
    e.className = zd, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(a) {
      var o = a.split(":"), i = ae(o, 2), s = i[0], u = i[1];
      va[s] = u;
    });
    var r = document.querySelector("style[".concat(zd, "]"));
    if (r) {
      var n;
      _m = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function Qw(e) {
  return Zw(), !!va[e];
}
function Jw(e) {
  var t = va[e], r = null;
  if (t && pr())
    if (_m)
      r = km;
    else {
      var n = document.querySelector("style[".concat(Kr, '="').concat(va[e], '"]'));
      n ? r = n.innerHTML : delete va[e];
    }
  return [r, t];
}
var Lm = "_skip_check_", zm = "_multi_value_";
function Qi(e) {
  var t = bl(Uw(e), Gw);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function eS(e) {
  return it(e) === "object" && e && (Lm in e || zm in e);
}
function tS(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), a = r === "low" ? ":where(".concat(n, ")") : n, o = e.split(",").map(function(i) {
    var s, u = i.trim().split(/\s+/), l = u[0] || "", c = ((s = l.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return l = "".concat(c).concat(a).concat(l.slice(c.length)), [l].concat(Be(u.slice(1))).join(" ");
  });
  return o.join(",");
}
var rS = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = n.root, o = n.injectHash, i = n.parentSelectors, s = r.hashId, u = r.layer, l = r.path, c = r.hashPriority, d = r.transformers, v = d === void 0 ? [] : d, p = r.linters, h = p === void 0 ? [] : p, f = "", m = {};
  function b(D) {
    var w = D.getName(s);
    if (!m[w]) {
      var S = e(D.style, r, {
        root: !1,
        parentSelectors: i
      }), O = ae(S, 1), B = O[0];
      m[w] = "@keyframes ".concat(D.getName(s)).concat(B);
    }
  }
  function C(D) {
    var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return D.forEach(function(S) {
      Array.isArray(S) ? C(S, w) : S && w.push(S);
    }), w;
  }
  var E = C(Array.isArray(t) ? t : [t]);
  return E.forEach(function(D) {
    var w = typeof D == "string" && !a ? {} : D;
    if (typeof w == "string")
      f += "".concat(w, `
`);
    else if (w._keyframe)
      b(w);
    else {
      var S = v.reduce(function(O, B) {
        var x;
        return (B == null || (x = B.visit) === null || x === void 0 ? void 0 : x.call(B, O)) || O;
      }, w);
      Object.keys(S).forEach(function(O) {
        var B = S[O];
        if (it(B) === "object" && B && (O !== "animationName" || !B._keyframe) && !eS(B)) {
          var x = !1, F = O.trim(), _ = !1;
          (a || o) && s ? F.startsWith("@") ? x = !0 : F = tS(O, s, c) : a && !s && (F === "&" || F === "") && (F = "", _ = !0);
          var N = e(B, r, {
            root: _,
            injectHash: x,
            parentSelectors: [].concat(Be(i), [F])
          }), P = ae(N, 2), I = P[0], T = P[1];
          m = Z(Z({}, m), T), f += "".concat(F).concat(I);
        } else {
          let M = function(V, z) {
            process.env.NODE_ENV !== "production" && (it(B) !== "object" || !(B != null && B[Lm])) && [Xw, Yw].concat(Be(h)).forEach(function(Q) {
              return Q(V, z, {
                path: l,
                hashId: s,
                parentSelectors: i
              });
            });
            var U = V.replace(/[A-Z]/g, function(Q) {
              return "-".concat(Q.toLowerCase());
            }), G = z;
            !Rw[V] && typeof G == "number" && G !== 0 && (G = "".concat(G, "px")), V === "animationName" && z !== null && z !== void 0 && z._keyframe && (b(z), G = z.getName(s)), f += "".concat(U, ":").concat(G, ";");
          };
          var k, A = (k = B == null ? void 0 : B.value) !== null && k !== void 0 ? k : B;
          it(B) === "object" && B !== null && B !== void 0 && B[zm] && Array.isArray(A) ? A.forEach(function(V) {
            M(O, V);
          }) : M(O, A);
        }
      });
    }
  }), a ? u && (f = "@layer ".concat(u.name, " {").concat(f, "}"), u.dependencies && (m["@layer ".concat(u.name)] = u.dependencies.map(function(D) {
    return "@layer ".concat(D, ", ").concat(u.name, ";");
  }).join(`
`))) : f = "{".concat(f, "}"), [f, m];
};
function Vm(e, t) {
  return Qo("".concat(e.join("%")).concat(t));
}
function nS() {
  return null;
}
var Hm = "style";
function yl(e, t) {
  var r = e.token, n = e.path, a = e.hashId, o = e.layer, i = e.nonce, s = e.clientOnly, u = e.order, l = u === void 0 ? 0 : u, c = g.useContext(oo), d = c.autoClear, v = c.mock, p = c.defaultCache, h = c.hashPriority, f = c.container, m = c.ssrInline, b = c.transformers, C = c.linters, E = c.cache, D = c.layer, w = r._tokenKey, S = [w];
  D && S.push("layer"), S.push.apply(S, Be(n));
  var O = gl;
  process.env.NODE_ENV !== "production" && v !== void 0 && (O = v === "client");
  var B = Oc(
    Hm,
    S,
    // Create cache if needed
    function() {
      var P = S.join("|");
      if (Qw(P)) {
        var I = Jw(P), T = ae(I, 2), k = T[0], A = T[1];
        if (k)
          return [k, w, A, {}, s, l];
      }
      var M = t(), V = rS(M, {
        hashId: a,
        hashPriority: h,
        layer: D ? o : void 0,
        path: n.join("-"),
        transformers: b,
        linters: C
      }), z = ae(V, 2), U = z[0], G = z[1], Q = Qi(U), R = Vm(S, Q);
      return [Q, w, R, G, s, l];
    },
    // Remove cache if no need
    function(P, I) {
      var T = ae(P, 3), k = T[2];
      (I || d) && gl && Jo(k, {
        mark: Kr
      });
    },
    // Effect: Inject style here
    function(P) {
      var I = ae(P, 4), T = I[0];
      I[1];
      var k = I[2], A = I[3];
      if (O && T !== km) {
        var M = {
          mark: Kr,
          prepend: D ? !1 : "queue",
          attachTo: f,
          priority: l
        }, V = typeof i == "function" ? i() : i;
        V && (M.csp = {
          nonce: V
        });
        var z = [], U = [];
        Object.keys(A).forEach(function(Q) {
          Q.startsWith("@layer") ? z.push(Q) : U.push(Q);
        }), z.forEach(function(Q) {
          Cn(Qi(A[Q]), "_layer-".concat(Q), Z(Z({}, M), {}, {
            prepend: !0
          }));
        });
        var G = Cn(T, k, M);
        G[Ln] = E.instanceId, G.setAttribute(ao, w), process.env.NODE_ENV !== "production" && G.setAttribute(iw, S.join("|")), U.forEach(function(Q) {
          Cn(Qi(A[Q]), "_effect-".concat(Q), M);
        });
      }
    }
  ), x = ae(B, 3), F = x[0], _ = x[1], N = x[2];
  return function(P) {
    var I;
    if (!m || O || !p)
      I = /* @__PURE__ */ g.createElement(nS, null);
    else {
      var T;
      I = /* @__PURE__ */ g.createElement("style", He({}, (T = {}, W(T, ao, _), W(T, Kr, N), T), {
        dangerouslySetInnerHTML: {
          __html: F
        }
      }));
    }
    return /* @__PURE__ */ g.createElement(g.Fragment, null, I, P);
  };
}
var aS = function(t, r, n) {
  var a = ae(t, 6), o = a[0], i = a[1], s = a[2], u = a[3], l = a[4], c = a[5], d = n || {}, v = d.plain;
  if (l)
    return null;
  var p = o, h = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(c)
  };
  return p = ms(o, i, s, h, v), u && Object.keys(u).forEach(function(f) {
    if (!r[f]) {
      r[f] = !0;
      var m = Qi(u[f]), b = ms(m, i, "_effect-".concat(f), h, v);
      f.startsWith("@layer") ? p = b + p : p += b;
    }
  }), [c, s, p];
}, Wm = "cssVar", oS = function(t, r) {
  var n = t.key, a = t.prefix, o = t.unitless, i = t.ignore, s = t.token, u = t.scope, l = u === void 0 ? "" : u, c = Ut(oo), d = c.cache.instanceId, v = c.container, p = s._tokenKey, h = [].concat(Be(t.path), [n, l, p]), f = Oc(Wm, h, function() {
    var m = r(), b = Bm(m, n, {
      prefix: a,
      unitless: o,
      ignore: i,
      scope: l
    }), C = ae(b, 2), E = C[0], D = C[1], w = Vm(h, D);
    return [E, D, w, n];
  }, function(m) {
    var b = ae(m, 3), C = b[2];
    gl && Jo(C, {
      mark: Kr
    });
  }, function(m) {
    var b = ae(m, 3), C = b[1], E = b[2];
    if (C) {
      var D = Cn(C, E, {
        mark: Kr,
        prepend: "queue",
        attachTo: v,
        priority: -999
      });
      D[Ln] = d, D.setAttribute(ao, n);
    }
  });
  return f;
}, iS = function(t, r, n) {
  var a = ae(t, 4), o = a[1], i = a[2], s = a[3], u = n || {}, l = u.plain;
  if (!o)
    return null;
  var c = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(c)
  }, v = ms(o, s, i, d, l);
  return [c, i, v];
}, xo;
xo = {}, W(xo, Hm, aS), W(xo, Pm, $w), W(xo, Wm, iS);
var mt = /* @__PURE__ */ function() {
  function e(t, r) {
    br(this, e), W(this, "name", void 0), W(this, "style", void 0), W(this, "_keyframe", !0), this.name = t, this.style = r;
  }
  return yr(e, [{
    key: "getName",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return r ? "".concat(r, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function Pa(e) {
  return e.notSplit = !0, e;
}
Pa(["borderTop", "borderBottom"]), Pa(["borderTop"]), Pa(["borderBottom"]), Pa(["borderLeft", "borderRight"]), Pa(["borderLeft"]), Pa(["borderRight"]);
var Bc = /* @__PURE__ */ Gr({});
function sS(e) {
  return Cm(e) || hm(e) || Dc(e) || Em();
}
function an(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function Km(e, t, r, n) {
  if (!t.length)
    return r;
  var a = sS(t), o = a[0], i = a.slice(1), s;
  return !e && typeof o == "number" ? s = [] : Array.isArray(e) ? s = Be(e) : s = Z({}, e), n && r === void 0 && i.length === 1 ? delete s[o][i[0]] : s[o] = Km(s[o], i, r, n), s;
}
function Vr(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !an(e, t.slice(0, -1)) ? e : Km(e, t, r, n);
}
function uS(e) {
  return it(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Vd(e) {
  return Array.isArray(e) ? [] : {};
}
var lS = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Ka() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = Vd(t[0]);
  return t.forEach(function(a) {
    function o(i, s) {
      var u = new Set(s), l = an(a, i), c = Array.isArray(l);
      if (c || uS(l)) {
        if (!u.has(l)) {
          u.add(l);
          var d = an(n, i);
          c ? n = Vr(n, i, []) : (!d || it(d) !== "object") && (n = Vr(n, i, Vd(l))), lS(l).forEach(function(v) {
            o([].concat(Be(i), [v]), u);
          });
        }
      } else
        n = Vr(n, i, l);
    }
    o([]);
  }), n;
}
function Um() {
}
let hn = null;
function cS() {
  hn = null, om();
}
let Fc = Um;
process.env.NODE_ENV !== "production" && (Fc = (e, t, r) => {
  dt(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && cS();
});
const qm = /* @__PURE__ */ g.createContext({}), An = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = g.useContext(qm), r = (n, a, o) => {
    if (!n)
      if (t === !1 && a === "deprecated") {
        const i = hn;
        hn || (hn = {}), hn[e] = hn[e] || [], hn[e].includes(o || "") || hn[e].push(o || ""), i || console.warn("[antd] There exists deprecated usage in your code:", hn);
      } else
        process.env.NODE_ENV !== "production" && Fc(n, e, o);
  };
  return r.deprecated = (n, a, o, i) => {
    r(n, "deprecated", `\`${a}\` is deprecated. Please use \`${o}\` instead.${i ? ` ${i}` : ""}`);
  }, r;
} : () => {
  const e = () => {
  };
  return e.deprecated = Um, e;
}, zs = Fc, fS = /* @__PURE__ */ Gr(void 0);
var dS = {
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
}, vS = {
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
const gS = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Gm = gS, mS = {
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
  }, vS),
  timePickerLocale: Object.assign({}, Gm)
}, Hd = mS, Er = "${label} is not a valid ${type}", Vs = {
  locale: "en",
  Pagination: dS,
  DatePicker: Hd,
  TimePicker: Gm,
  Calendar: Hd,
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
        string: Er,
        method: Er,
        array: Er,
        object: Er,
        number: Er,
        date: Er,
        boolean: Er,
        integer: Er,
        float: Er,
        regexp: Er,
        email: Er,
        url: Er,
        hex: Er
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
Object.assign({}, Vs.Modal);
let Ji = [];
const Wd = () => Ji.reduce((e, t) => Object.assign(Object.assign({}, e), t), Vs.Modal);
function hS(e) {
  if (e) {
    const t = Object.assign({}, e);
    return Ji.push(t), Wd(), () => {
      Ji = Ji.filter((r) => r !== t), Wd();
    };
  }
  Object.assign({}, Vs.Modal);
}
const pS = /* @__PURE__ */ Gr(void 0), Xm = pS, Ym = "internalMark", Zm = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const o = An("LocaleProvider");
    process.env.NODE_ENV !== "production" && o(n === Ym, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  g.useEffect(() => hS(t && t.Modal), [t]);
  const a = g.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ g.createElement(Xm.Provider, {
    value: a
  }, r);
};
process.env.NODE_ENV !== "production" && (Zm.displayName = "LocaleProvider");
const bS = Zm;
function rr(e, t) {
  yS(e) && (e = "100%");
  var r = CS(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Pi(e) {
  return Math.min(1, Math.max(0, e));
}
function yS(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function CS(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Qm(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function $i(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function oa(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function ES(e, t, r) {
  return {
    r: rr(e, 255) * 255,
    g: rr(t, 255) * 255,
    b: rr(r, 255) * 255
  };
}
function Kd(e, t, r) {
  e = rr(e, 255), t = rr(t, 255), r = rr(r, 255);
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
function wu(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function DS(e, t, r) {
  var n, a, o;
  if (e = rr(e, 360), t = rr(t, 100), r = rr(r, 100), t === 0)
    a = r, o = r, n = r;
  else {
    var i = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - i;
    n = wu(s, i, e + 1 / 3), a = wu(s, i, e), o = wu(s, i, e - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: o * 255 };
}
function Cl(e, t, r) {
  e = rr(e, 255), t = rr(t, 255), r = rr(r, 255);
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
function wS(e, t, r) {
  e = rr(e, 360) * 6, t = rr(t, 100), r = rr(r, 100);
  var n = Math.floor(e), a = e - n, o = r * (1 - t), i = r * (1 - a * t), s = r * (1 - (1 - a) * t), u = n % 6, l = [r, i, o, o, s, r][u], c = [s, r, r, i, o, o][u], d = [o, o, s, r, r, i][u];
  return { r: l * 255, g: c * 255, b: d * 255 };
}
function El(e, t, r, n) {
  var a = [
    oa(Math.round(e).toString(16)),
    oa(Math.round(t).toString(16)),
    oa(Math.round(r).toString(16))
  ];
  return n && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function SS(e, t, r, n, a) {
  var o = [
    oa(Math.round(e).toString(16)),
    oa(Math.round(t).toString(16)),
    oa(Math.round(r).toString(16)),
    oa(OS(n))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function OS(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Ud(e) {
  return wr(e) / 255;
}
function wr(e) {
  return parseInt(e, 16);
}
function xS(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Dl = {
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
function za(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, a = null, o = null, i = !1, s = !1;
  return typeof e == "string" && (e = FS(e)), typeof e == "object" && (vn(e.r) && vn(e.g) && vn(e.b) ? (t = ES(e.r, e.g, e.b), i = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : vn(e.h) && vn(e.s) && vn(e.v) ? (n = $i(e.s), a = $i(e.v), t = wS(e.h, n, a), i = !0, s = "hsv") : vn(e.h) && vn(e.s) && vn(e.l) && (n = $i(e.s), o = $i(e.l), t = DS(e.h, n, o), i = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = Qm(r), {
    ok: i,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var AS = "[-\\+]?\\d+%?", BS = "[-\\+]?\\d*\\.\\d+%?", zn = "(?:".concat(BS, ")|(?:").concat(AS, ")"), Su = "[\\s|\\(]+(".concat(zn, ")[,|\\s]+(").concat(zn, ")[,|\\s]+(").concat(zn, ")\\s*\\)?"), Ou = "[\\s|\\(]+(".concat(zn, ")[,|\\s]+(").concat(zn, ")[,|\\s]+(").concat(zn, ")[,|\\s]+(").concat(zn, ")\\s*\\)?"), zr = {
  CSS_UNIT: new RegExp(zn),
  rgb: new RegExp("rgb" + Su),
  rgba: new RegExp("rgba" + Ou),
  hsl: new RegExp("hsl" + Su),
  hsla: new RegExp("hsla" + Ou),
  hsv: new RegExp("hsv" + Su),
  hsva: new RegExp("hsva" + Ou),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function FS(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Dl[e])
    e = Dl[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = zr.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = zr.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = zr.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = zr.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = zr.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = zr.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = zr.hex8.exec(e), r ? {
    r: wr(r[1]),
    g: wr(r[2]),
    b: wr(r[3]),
    a: Ud(r[4]),
    format: t ? "name" : "hex8"
  } : (r = zr.hex6.exec(e), r ? {
    r: wr(r[1]),
    g: wr(r[2]),
    b: wr(r[3]),
    format: t ? "name" : "hex"
  } : (r = zr.hex4.exec(e), r ? {
    r: wr(r[1] + r[1]),
    g: wr(r[2] + r[2]),
    b: wr(r[3] + r[3]),
    a: Ud(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = zr.hex3.exec(e), r ? {
    r: wr(r[1] + r[1]),
    g: wr(r[2] + r[2]),
    b: wr(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function vn(e) {
  return !!zr.CSS_UNIT.exec(String(e));
}
var er = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = ""), r === void 0 && (r = {});
      var n;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = xS(t)), this.originalInput = t;
      var a = za(t);
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
      return this.a = Qm(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Cl(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Cl(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Kd(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Kd(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), El(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), SS(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(rr(r, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(r) {
        return Math.round(rr(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + El(this.r, this.g, this.b, !1), r = 0, n = Object.entries(Dl); r < n.length; r++) {
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
      return r.l += t / 100, r.l = Pi(r.l), new e(r);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l -= t / 100, r.l = Pi(r.l), new e(r);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s -= t / 100, r.s = Pi(r.s), new e(r);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s += t / 100, r.s = Pi(r.s), new e(r);
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
), Ri = 2, qd = 0.16, PS = 0.05, $S = 0.05, RS = 0.15, Jm = 5, eh = 4, TS = [{
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
function Gd(e) {
  var t = e.r, r = e.g, n = e.b, a = Cl(t, r, n);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function Ti(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(El(t, r, n, !1));
}
function NS(e, t, r) {
  var n = r / 100, a = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return a;
}
function Xd(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - Ri * t : Math.round(e.h) + Ri * t : n = r ? Math.round(e.h) + Ri * t : Math.round(e.h) - Ri * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Yd(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - qd * t : t === eh ? n = e.s + qd : n = e.s + PS * t, n > 1 && (n = 1), r && t === Jm && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Zd(e, t, r) {
  var n;
  return r ? n = e.v + $S * t : n = e.v - RS * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function wn(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = za(e), a = Jm; a > 0; a -= 1) {
    var o = Gd(n), i = Ti(za({
      h: Xd(o, a, !0),
      s: Yd(o, a, !0),
      v: Zd(o, a, !0)
    }));
    r.push(i);
  }
  r.push(Ti(n));
  for (var s = 1; s <= eh; s += 1) {
    var u = Gd(n), l = Ti(za({
      h: Xd(u, s),
      s: Yd(u, s),
      v: Zd(u, s)
    }));
    r.push(l);
  }
  return t.theme === "dark" ? TS.map(function(c) {
    var d = c.index, v = c.opacity, p = Ti(NS(za(t.backgroundColor || "#141414"), za(r[d]), v * 100));
    return p;
  }) : r;
}
var xu = {
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
}, es = {}, Au = {};
Object.keys(xu).forEach(function(e) {
  es[e] = wn(xu[e]), es[e].primary = es[e][5], Au[e] = wn(xu[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Au[e].primary = Au[e][5];
});
var IS = es.blue;
const th = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function MS(e) {
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
const Pc = {
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
}, so = Object.assign(Object.assign({}, Pc), {
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
function rh(e, t) {
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
  } = e, d = r(u), v = r(a), p = r(o), h = r(i), f = r(s), m = n(l, c), b = e.colorLink || e.colorInfo, C = r(b);
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
    colorLinkHover: C[4],
    colorLink: C[6],
    colorLinkActive: C[7],
    colorBgMask: new er("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const jS = (e) => {
  let t = e, r = e, n = e, a = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? a = 4 : e >= 8 && (a = 6), {
    borderRadius: e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: a
  };
};
function kS(e) {
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
  }, jS(n));
}
const gn = (e, t) => new er(e).setAlpha(t).toRgbString(), Ao = (e, t) => new er(e).darken(t).toHexString(), _S = (e) => {
  const t = wn(e);
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
}, LS = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: gn(n, 0.88),
    colorTextSecondary: gn(n, 0.65),
    colorTextTertiary: gn(n, 0.45),
    colorTextQuaternary: gn(n, 0.25),
    colorFill: gn(n, 0.15),
    colorFillSecondary: gn(n, 0.06),
    colorFillTertiary: gn(n, 0.04),
    colorFillQuaternary: gn(n, 0.02),
    colorBgLayout: Ao(r, 4),
    colorBgContainer: Ao(r, 0),
    colorBgElevated: Ao(r, 0),
    colorBgSpotlight: gn(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Ao(r, 15),
    colorBorderSecondary: Ao(r, 6)
  };
};
function ts(e) {
  return (e + 8) / e;
}
function zS(e) {
  const t = new Array(10).fill(null).map((r, n) => {
    const a = n - 1, o = e * Math.pow(2.71828, a / 5), i = n > 1 ? Math.floor(o) : Math.ceil(o);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((r) => ({
    size: r,
    lineHeight: ts(r)
  }));
}
const nh = (e) => {
  const t = zS(e), r = t.map((c) => c.size), n = t.map((c) => c.lineHeight), a = r[1], o = r[0], i = r[2], s = n[1], u = n[0], l = n[2];
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
function fi(e) {
  const t = Object.keys(Pc).map((r) => {
    const n = wn(e[r]);
    return new Array(10).fill(1).reduce((a, o, i) => (a[`${r}-${i + 1}`] = n[i], a[`${r}${i + 1}`] = n[i], a), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), rh(e, {
    generateColorPalettes: _S,
    generateNeutralColorPalettes: LS
  })), nh(e.fontSize)), MS(e)), th(e)), kS(e));
}
const ah = ei(fi), hs = {
  token: so,
  override: {
    override: so
  },
  hashed: !0
}, oh = /* @__PURE__ */ ne.createContext(hs), ih = "anticon", VS = (e, t) => t || (e ? `ant-${e}` : "ant"), kt = /* @__PURE__ */ g.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: VS,
  iconPrefixCls: ih
}), HS = `-ant-${Date.now()}-${Math.random()}`;
function WS(e, t) {
  const r = {}, n = (i, s) => {
    let u = i.clone();
    return u = (s == null ? void 0 : s(u)) || u, u.toRgbString();
  }, a = (i, s) => {
    const u = new er(i), l = wn(u.toRgbString());
    r[`${s}-color`] = n(u), r[`${s}-color-disabled`] = l[1], r[`${s}-color-hover`] = l[4], r[`${s}-color-active`] = l[6], r[`${s}-color-outline`] = u.clone().setAlpha(0.2).toRgbString(), r[`${s}-color-deprecated-bg`] = l[0], r[`${s}-color-deprecated-border`] = l[2];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    const i = new er(t.primaryColor), s = wn(i.toRgbString());
    s.forEach((l, c) => {
      r[`primary-${c + 1}`] = l;
    }), r["primary-color-deprecated-l-35"] = n(i, (l) => l.lighten(35)), r["primary-color-deprecated-l-20"] = n(i, (l) => l.lighten(20)), r["primary-color-deprecated-t-20"] = n(i, (l) => l.tint(20)), r["primary-color-deprecated-t-50"] = n(i, (l) => l.tint(50)), r["primary-color-deprecated-f-12"] = n(i, (l) => l.setAlpha(l.getAlpha() * 0.12));
    const u = new er(s[0]);
    r["primary-color-active-deprecated-f-30"] = n(u, (l) => l.setAlpha(l.getAlpha() * 0.3)), r["primary-color-active-deprecated-d-02"] = n(u, (l) => l.darken(2));
  }
  return t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((i) => `--${e}-${i}: ${r[i]};`).join(`
`)}
  }
  `.trim();
}
function KS(e, t) {
  const r = WS(e, t);
  pr() ? Cn(r, `${HS}-dynamic-theme`) : process.env.NODE_ENV !== "production" && zs(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const wl = /* @__PURE__ */ g.createContext(!1), US = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = g.useContext(wl);
  return /* @__PURE__ */ g.createElement(wl.Provider, {
    value: r ?? n
  }, t);
}, $c = wl, Sl = /* @__PURE__ */ g.createContext(void 0), qS = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = g.useContext(Sl);
  return /* @__PURE__ */ g.createElement(Sl.Provider, {
    value: r || n
  }, t);
}, Hs = Sl;
function GS() {
  const e = Ut($c), t = Ut(Hs);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
const ps = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], XS = "5.13.3";
function Bu(e) {
  return e >= 0 && e <= 255;
}
function Ni(e, t) {
  const {
    r,
    g: n,
    b: a,
    a: o
  } = new er(e).toRgb();
  if (o < 1)
    return e;
  const {
    r: i,
    g: s,
    b: u
  } = new er(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const c = Math.round((r - i * (1 - l)) / l), d = Math.round((n - s * (1 - l)) / l), v = Math.round((a - u * (1 - l)) / l);
    if (Bu(c) && Bu(d) && Bu(v))
      return new er({
        r: c,
        g: d,
        b: v,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new er({
    r,
    g: n,
    b: a,
    a: 1
  }).toRgbString();
}
var YS = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function Rc(e) {
  const {
    override: t
  } = e, r = YS(e, ["override"]), n = Object.assign({}, t);
  Object.keys(so).forEach((v) => {
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
    colorSplit: Ni(a.colorBorderSecondary, a.colorBgContainer),
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
    colorErrorOutline: Ni(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: Ni(a.colorWarningBg, a.colorBgContainer),
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
    controlOutline: Ni(a.colorPrimaryBg, a.colorBgContainer),
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
      0 1px 2px -2px ${new er("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new er("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new er("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var Qd = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const sh = {
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
}, uh = {
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
}, ZS = {
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
}, lh = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: a
  } = t, o = Qd(t, ["override"]);
  let i = Object.assign(Object.assign({}, n), {
    override: a
  });
  return i = Rc(i), o && Object.entries(o).forEach((s) => {
    let [u, l] = s;
    const {
      theme: c
    } = l, d = Qd(l, ["theme"]);
    let v = d;
    c && (v = lh(Object.assign(Object.assign({}, i), d), {
      override: d
    }, c)), i[u] = v;
  }), i;
};
function Mr() {
  const {
    token: e,
    hashed: t,
    theme: r,
    override: n,
    cssVar: a
  } = ne.useContext(oh), o = `${XS}-${t || ""}`, i = r || ah, [s, u, l] = Pw(i, [so, e], {
    salt: o,
    override: n,
    getComputedToken: lh,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Rc,
    cssVar: a && {
      prefix: a.prefix,
      key: a.key,
      unitless: sh,
      ignore: uh,
      preserve: ZS
    }
  });
  return [i, l, t ? u : "", s, a];
}
function Sr(e) {
  var t = g.useRef();
  t.current = e;
  var r = g.useCallback(function() {
    for (var n, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(o));
  }, []);
  return r;
}
function Xa(e) {
  var t = g.useRef(!1), r = g.useState(e), n = ae(r, 2), a = n[0], o = n[1];
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
function Fu(e) {
  return e !== void 0;
}
function Vn(e, t) {
  var r = t || {}, n = r.defaultValue, a = r.value, o = r.onChange, i = r.postState, s = Xa(function() {
    return Fu(a) ? a : Fu(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), u = ae(s, 2), l = u[0], c = u[1], d = a !== void 0 ? a : l, v = i ? i(d) : d, p = Sr(o), h = Xa([d]), f = ae(h, 2), m = f[0], b = f[1];
  jd(function() {
    var E = m[0];
    l !== E && p(l, E);
  }, [m]), jd(function() {
    Fu(a) || c(a);
  }, [a]);
  var C = Sr(function(E, D) {
    c(E, D), b([d], D);
  });
  return [v, C];
}
const QS = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, Ya = function(e) {
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
}, ch = () => ({
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
}), Jd = () => ({
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
}), JS = (e) => ({
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
}, Tc = (e) => ({
  outline: `${Me(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), Ol = (e) => ({
  "&:focus-visible": Object.assign({}, Tc(e))
});
let tO = /* @__PURE__ */ yr(function e() {
  br(this, e);
});
const fh = tO;
function rO(e, t, r) {
  return t = Kn(t), Ec(e, Ms() ? Reflect.construct(t, r || [], Kn(e).constructor) : t.apply(e, r));
}
let nO = /* @__PURE__ */ function(e) {
  ba(t, e);
  function t(r) {
    var n;
    return br(this, t), n = rO(this, t), n.result = 0, r instanceof t ? n.result = r.result : typeof r == "number" && (n.result = r), n;
  }
  return yr(t, [{
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
}(fh);
function aO(e, t, r) {
  return t = Kn(t), Ec(e, Ms() ? Reflect.construct(t, r || [], Kn(e).constructor) : t.apply(e, r));
}
const dh = "CALC_UNIT";
function Pu(e) {
  return typeof e == "number" ? `${e}${dh}` : e;
}
let oO = /* @__PURE__ */ function(e) {
  ba(t, e);
  function t(r) {
    var n;
    return br(this, t), n = aO(this, t), n.result = "", r instanceof t ? n.result = `(${r.result})` : typeof r == "number" ? n.result = Pu(r) : typeof r == "string" && (n.result = r), n;
  }
  return yr(t, [{
    key: "add",
    value: function(n) {
      return n instanceof t ? this.result = `${this.result} + ${n.getResult()}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} + ${Pu(n)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(n) {
      return n instanceof t ? this.result = `${this.result} - ${n.getResult()}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} - ${Pu(n)}`), this.lowPriority = !0, this;
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
      } = n || {}, o = new RegExp(`${dh}`, "g");
      return this.result = this.result.replace(o, a ? "px" : ""), typeof this.lowPriority < "u" ? `calc(${this.result})` : this.result;
    }
  }]), t;
}(fh);
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
      return `max(${r.map((a) => Me(a)).join(",")})`;
    },
    min: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return `min(${r.map((a) => Me(a)).join(",")})`;
    }
  };
}
const vh = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let xl = !0;
function Fr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!vh)
    return Object.assign.apply(Object, [{}].concat(t));
  xl = !1;
  const n = {};
  return t.forEach((a) => {
    Object.keys(a).forEach((i) => {
      Object.defineProperty(n, i, {
        configurable: !0,
        enumerable: !0,
        get: () => a[i]
      });
    });
  }), xl = !0, n;
}
const ev = {};
function uO() {
}
const lO = (e) => {
  let t, r = e, n = uO;
  return vh && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), r = new Proxy(e, {
    get(a, o) {
      return xl && t.add(o), a[o];
    }
  }), n = (a, o) => {
    var i;
    ev[a] = {
      global: Array.from(t),
      component: Object.assign(Object.assign({}, (i = ev[a]) === null || i === void 0 ? void 0 : i.component), o)
    };
  }), {
    token: r,
    keys: t,
    flush: n
  };
}, gh = (e, t) => {
  const [r, n] = Mr();
  return yl({
    theme: r,
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, ch()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, mh = (e, t, r) => {
  var n;
  return typeof r == "function" ? r(Fr(t, (n = t[e]) !== null && n !== void 0 ? n : {})) : r ?? {};
}, hh = (e, t, r, n) => {
  const a = Object.assign({}, t[e]);
  if (n != null && n.deprecatedTokens) {
    const {
      deprecatedTokens: i
    } = n;
    i.forEach((s) => {
      let [u, l] = s;
      var c;
      process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && dt(!(a != null && a[u]), `Component Token \`${String(u)}\` of ${e} is deprecated. Please use \`${String(l)}\` instead.`), (a != null && a[u] || a != null && a[l]) && ((c = a[l]) !== null && c !== void 0 || (a[l] = a == null ? void 0 : a[u]));
    });
  }
  const o = Object.assign(Object.assign({}, r), a);
  return Object.keys(o).forEach((i) => {
    o[i] === t[i] && delete o[i];
  }), o;
}, cO = (e, t) => `${[t, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
function Nc(e, t, r) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const a = Array.isArray(e) ? e : [e, e], [o] = a, i = a.join("-");
  return (s) => {
    const [u, l, c, d, v] = Mr(), {
      getPrefixCls: p,
      iconPrefixCls: h,
      csp: f
    } = Ut(kt), m = p(), b = v ? "css" : "js", C = iO(b), {
      max: E,
      min: D
    } = sO(b), w = {
      theme: u,
      token: d,
      hashId: c,
      nonce: () => f == null ? void 0 : f.nonce,
      clientOnly: n.clientOnly,
      // antd is always at top of styles
      order: n.order || -999
    };
    return yl(Object.assign(Object.assign({}, w), {
      clientOnly: !1,
      path: ["Shared", m]
    }), () => [{
      // Link
      "&": JS(d)
    }]), gh(h, f), [yl(Object.assign(Object.assign({}, w), {
      path: [i, s, h]
    }), () => {
      if (n.injectStyle === !1)
        return [];
      const {
        token: O,
        flush: B
      } = lO(d), x = mh(o, l, r), F = `.${s}`, _ = hh(o, l, x, {
        deprecatedTokens: n.deprecatedTokens
      });
      v && Object.keys(x).forEach((I) => {
        x[I] = `var(${Am(I, cO(o, v.prefix))})`;
      });
      const N = Fr(O, {
        componentCls: F,
        prefixCls: s,
        iconCls: `.${h}`,
        antCls: `.${m}`,
        calc: C,
        max: E,
        min: D
      }, v ? x : _), P = t(N, {
        hashId: c,
        prefixCls: s,
        rootPrefixCls: m,
        iconPrefixCls: h
      });
      return B(o, _), [n.resetStyle === !1 ? null : eO(N, s), P];
    }), c];
  };
}
const fO = (e, t, r, n) => {
  const a = Nc(e, t, r, Object.assign({
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
    const [, v] = Mr();
    return oS({
      path: [e],
      prefix: d.prefix,
      key: d == null ? void 0 : d.key,
      unitless: Object.assign(Object.assign({}, sh), i),
      ignore: uh,
      token: v,
      scope: c
    }, () => {
      const p = mh(e, v, t), h = hh(e, v, p, {
        deprecatedTokens: r == null ? void 0 : r.deprecatedTokens
      });
      return Object.keys(p).forEach((f) => {
        h[n(f)] = h[f], delete h[f];
      }), h;
    }), null;
  };
  return (l) => {
    const [, , , , c] = Mr();
    return [(d) => o && c ? /* @__PURE__ */ ne.createElement(ne.Fragment, null, /* @__PURE__ */ ne.createElement(s, {
      rootCls: l,
      cssVar: c,
      component: e
    }), d) : d, c == null ? void 0 : c.key];
  };
}, go = (e, t, r, n) => {
  const a = Nc(e, t, r, n), o = dO(Array.isArray(e) ? e[0] : e, r, n);
  return function(i) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i;
    const [, u] = a(i), [l, c] = o(s);
    return [l, u, c];
  };
};
function vO(e, t) {
  return ps.reduce((r, n) => {
    const a = e[`${n}1`], o = e[`${n}3`], i = e[`${n}6`], s = e[`${n}7`];
    return Object.assign(Object.assign({}, r), t(n, {
      lightColor: a,
      lightBorderColor: o,
      darkColor: i,
      textColor: s
    }));
  }, {});
}
const gO = Object.assign({}, g), {
  useId: tv
} = gO, mO = () => "", hO = typeof tv > "u" ? mO : tv;
function pO(e, t) {
  var r;
  const n = An("ConfigProvider"), a = e || {}, o = a.inherit === !1 || !t ? hs : t, i = hO();
  if (process.env.NODE_ENV !== "production") {
    const s = a.cssVar || o.cssVar, u = !!(typeof a.cssVar == "object" && (!((r = a.cssVar) === null || r === void 0) && r.key) || i);
    process.env.NODE_ENV !== "production" && n(!s || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return ui(() => {
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
    return !no(l, d, !0);
  }));
}
var bO = ["children"], ph = /* @__PURE__ */ g.createContext({});
function yO(e) {
  var t = e.children, r = lt(e, bO);
  return /* @__PURE__ */ g.createElement(ph.Provider, {
    value: r
  }, t);
}
var CO = /* @__PURE__ */ function(e) {
  ba(r, e);
  var t = ci(r);
  function r() {
    return br(this, r), t.apply(this, arguments);
  }
  return yr(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(g.Component), ta = "none", Ii = "appear", Mi = "enter", ji = "leave", rv = "none", Hr = "prepare", Ua = "start", qa = "active", Ic = "end", bh = "prepared";
function nv(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function EO(e, t) {
  var r = {
    animationend: nv("Animation", "AnimationEnd"),
    transitionend: nv("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var DO = EO(pr(), typeof window < "u" ? window : {}), yh = {};
if (pr()) {
  var wO = document.createElement("div");
  yh = wO.style;
}
var ki = {};
function Ch(e) {
  if (ki[e])
    return ki[e];
  var t = DO[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, a = 0; a < n; a += 1) {
      var o = r[a];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in yh)
        return ki[e] = t[o], ki[e];
    }
  return "";
}
var Eh = Ch("animationend"), Dh = Ch("transitionend"), wh = !!(Eh && Dh), av = Eh || "animationend", ov = Dh || "transitionend";
function iv(e, t) {
  if (!e)
    return null;
  if (it(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const SO = function(e) {
  var t = Ge(), r = Ge(e);
  r.current = e;
  var n = g.useCallback(function(i) {
    r.current(i);
  }, []);
  function a(i) {
    i && (i.removeEventListener(ov, n), i.removeEventListener(av, n));
  }
  function o(i) {
    t.current && t.current !== i && a(t.current), i && i !== t.current && (i.addEventListener(ov, n), i.addEventListener(av, n), t.current = i);
  }
  return g.useEffect(function() {
    return function() {
      a(t.current);
    };
  }, []), [o, a];
};
var Sh = pr() ? ig : jt;
const OO = function() {
  var e = g.useRef(null);
  function t() {
    tr.cancel(e.current);
  }
  function r(n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var o = tr(function() {
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
var xO = [Hr, Ua, qa, Ic], AO = [Hr, bh], Oh = !1, BO = !0;
function xh(e) {
  return e === qa || e === Ic;
}
const FO = function(e, t, r) {
  var n = Xa(rv), a = ae(n, 2), o = a[0], i = a[1], s = OO(), u = ae(s, 2), l = u[0], c = u[1];
  function d() {
    i(Hr, !0);
  }
  var v = t ? AO : xO;
  return Sh(function() {
    if (o !== rv && o !== Ic) {
      var p = v.indexOf(o), h = v[p + 1], f = r(o);
      f === Oh ? i(h, !0) : h && l(function(m) {
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
function PO(e, t, r, n) {
  var a = n.motionEnter, o = a === void 0 ? !0 : a, i = n.motionAppear, s = i === void 0 ? !0 : i, u = n.motionLeave, l = u === void 0 ? !0 : u, c = n.motionDeadline, d = n.motionLeaveImmediately, v = n.onAppearPrepare, p = n.onEnterPrepare, h = n.onLeavePrepare, f = n.onAppearStart, m = n.onEnterStart, b = n.onLeaveStart, C = n.onAppearActive, E = n.onEnterActive, D = n.onLeaveActive, w = n.onAppearEnd, S = n.onEnterEnd, O = n.onLeaveEnd, B = n.onVisibleChanged, x = Xa(), F = ae(x, 2), _ = F[0], N = F[1], P = Xa(ta), I = ae(P, 2), T = I[0], k = I[1], A = Xa(null), M = ae(A, 2), V = M[0], z = M[1], U = Ge(!1), G = Ge(null);
  function Q() {
    return r();
  }
  var R = Ge(!1);
  function H() {
    k(ta, !0), z(null, !0);
  }
  function L(fe) {
    var Oe = Q();
    if (!(fe && !fe.deadline && fe.target !== Oe)) {
      var ge = R.current, pe;
      T === Ii && ge ? pe = w == null ? void 0 : w(Oe, fe) : T === Mi && ge ? pe = S == null ? void 0 : S(Oe, fe) : T === ji && ge && (pe = O == null ? void 0 : O(Oe, fe)), T !== ta && ge && pe !== !1 && H();
    }
  }
  var q = SO(L), re = ae(q, 1), te = re[0], ue = function(Oe) {
    var ge, pe, he;
    switch (Oe) {
      case Ii:
        return ge = {}, W(ge, Hr, v), W(ge, Ua, f), W(ge, qa, C), ge;
      case Mi:
        return pe = {}, W(pe, Hr, p), W(pe, Ua, m), W(pe, qa, E), pe;
      case ji:
        return he = {}, W(he, Hr, h), W(he, Ua, b), W(he, qa, D), he;
      default:
        return {};
    }
  }, se = g.useMemo(function() {
    return ue(T);
  }, [T]), ve = FO(T, !e, function(fe) {
    if (fe === Hr) {
      var Oe = se[Hr];
      return Oe ? Oe(Q()) : Oh;
    }
    if (me in se) {
      var ge;
      z(((ge = se[me]) === null || ge === void 0 ? void 0 : ge.call(se, Q(), null)) || null);
    }
    return me === qa && (te(Q()), c > 0 && (clearTimeout(G.current), G.current = setTimeout(function() {
      L({
        deadline: !0
      });
    }, c))), me === bh && H(), BO;
  }), le = ae(ve, 2), Y = le[0], me = le[1], Ee = xh(me);
  R.current = Ee, Sh(function() {
    N(t);
    var fe = U.current;
    U.current = !0;
    var Oe;
    !fe && t && s && (Oe = Ii), fe && t && o && (Oe = Mi), (fe && !t && l || !fe && d && !t && l) && (Oe = ji);
    var ge = ue(Oe);
    Oe && (e || ge[Hr]) ? (k(Oe), Y()) : k(ta);
  }, [t]), jt(function() {
    // Cancel appear
    (T === Ii && !s || // Cancel enter
    T === Mi && !o || // Cancel leave
    T === ji && !l) && k(ta);
  }, [s, o, l]), jt(function() {
    return function() {
      U.current = !1, clearTimeout(G.current);
    };
  }, []);
  var Ae = g.useRef(!1);
  jt(function() {
    _ && (Ae.current = !0), _ !== void 0 && T === ta && ((Ae.current || _) && (B == null || B(_)), Ae.current = !0);
  }, [_, T]);
  var $e = V;
  return se[Hr] && me === Ua && ($e = Z({
    transition: "none"
  }, $e)), [T, me, $e, _ ?? t];
}
function $O(e) {
  var t = e;
  it(e) === "object" && (t = e.transitionSupport);
  function r(a, o) {
    return !!(a.motionName && t && o !== !1);
  }
  var n = /* @__PURE__ */ g.forwardRef(function(a, o) {
    var i = a.visible, s = i === void 0 ? !0 : i, u = a.removeOnLeave, l = u === void 0 ? !0 : u, c = a.forceRender, d = a.children, v = a.motionName, p = a.leavedClassName, h = a.eventProps, f = g.useContext(ph), m = f.motion, b = r(a, m), C = Ge(), E = Ge();
    function D() {
      try {
        return C.current instanceof HTMLElement ? C.current : Gi(E.current);
      } catch {
        return null;
      }
    }
    var w = PO(b, s, D, a), S = ae(w, 4), O = S[0], B = S[1], x = S[2], F = S[3], _ = g.useRef(F);
    F && (_.current = !0);
    var N = g.useCallback(function(z) {
      C.current = z, Cc(o, z);
    }, [o]), P, I = Z(Z({}, h), {}, {
      visible: s
    });
    if (!d)
      P = null;
    else if (O === ta)
      F ? P = d(Z({}, I), N) : !l && _.current && p ? P = d(Z(Z({}, I), {}, {
        className: p
      }), N) : c || !l && !p ? P = d(Z(Z({}, I), {}, {
        style: {
          display: "none"
        }
      }), N) : P = null;
    else {
      var T, k;
      B === Hr ? k = "prepare" : xh(B) ? k = "active" : B === Ua && (k = "start");
      var A = iv(v, "".concat(O, "-").concat(k));
      P = d(Z(Z({}, I), {}, {
        className: de(iv(v, O), (T = {}, W(T, A, A && k), W(T, v, typeof v == "string"), T)),
        style: x
      }), N);
    }
    if (/* @__PURE__ */ g.isValidElement(P) && Gn(P)) {
      var M = P, V = M.ref;
      V || (P = /* @__PURE__ */ g.cloneElement(P, {
        ref: N
      }));
    }
    return /* @__PURE__ */ g.createElement(CO, {
      ref: E
    }, P);
  });
  return n.displayName = "CSSMotion", n;
}
const mo = $O(wh);
var Al = "add", Bl = "keep", Fl = "remove", $u = "removed";
function RO(e) {
  var t;
  return e && it(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, Z(Z({}, t), {}, {
    key: String(t.key)
  });
}
function Pl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(RO);
}
function TO() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, a = t.length, o = Pl(e), i = Pl(t);
  o.forEach(function(l) {
    for (var c = !1, d = n; d < a; d += 1) {
      var v = i[d];
      if (v.key === l.key) {
        n < d && (r = r.concat(i.slice(n, d).map(function(p) {
          return Z(Z({}, p), {}, {
            status: Al
          });
        })), n = d), r.push(Z(Z({}, v), {}, {
          status: Bl
        })), n += 1, c = !0;
        break;
      }
    }
    c || r.push(Z(Z({}, l), {}, {
      status: Fl
    }));
  }), n < a && (r = r.concat(i.slice(n).map(function(l) {
    return Z(Z({}, l), {}, {
      status: Al
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
      return d !== l || v !== Fl;
    }), r.forEach(function(c) {
      c.key === l && (c.status = Bl);
    });
  }), r;
}
var NO = ["component", "children", "onVisibleChanged", "onAllRemoved"], IO = ["status"], MO = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function jO(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : mo, r = /* @__PURE__ */ function(n) {
    ba(o, n);
    var a = ci(o);
    function o() {
      var i;
      br(this, o);
      for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++)
        u[l] = arguments[l];
      return i = a.call.apply(a, [this].concat(u)), W(Je(i), "state", {
        keyEntities: []
      }), W(Je(i), "removeKey", function(c) {
        var d = i.state.keyEntities, v = d.map(function(p) {
          return p.key !== c ? p : Z(Z({}, p), {}, {
            status: $u
          });
        });
        return i.setState({
          keyEntities: v
        }), v.filter(function(p) {
          var h = p.status;
          return h !== $u;
        }).length;
      }), i;
    }
    return yr(o, [{
      key: "render",
      value: function() {
        var s = this, u = this.state.keyEntities, l = this.props, c = l.component, d = l.children, v = l.onVisibleChanged, p = l.onAllRemoved, h = lt(l, NO), f = c || g.Fragment, m = {};
        return MO.forEach(function(b) {
          m[b] = h[b], delete h[b];
        }), delete h.keys, /* @__PURE__ */ g.createElement(f, h, u.map(function(b, C) {
          var E = b.status, D = lt(b, IO), w = E === Al || E === Bl;
          return /* @__PURE__ */ g.createElement(t, He({}, m, {
            key: D.key,
            visible: w,
            eventProps: D,
            onVisibleChanged: function(O) {
              if (v == null || v(O, {
                key: D.key
              }), !O) {
                var B = s.removeKey(D.key);
                B === 0 && p && p();
              }
            }
          }), function(S, O) {
            return d(Z(Z({}, S), {}, {
              index: C
            }), O);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, u) {
        var l = s.keys, c = u.keyEntities, d = Pl(l), v = TO(c, d);
        return {
          keyEntities: v.filter(function(p) {
            var h = c.find(function(f) {
              var m = f.key;
              return p.key === m;
            });
            return !(h && h.status === $u && p.status === Fl);
          })
        };
      }
    }]), o;
  }(g.Component);
  return W(r, "defaultProps", {
    component: "div"
  }), r;
}
jO(wh);
function kO(e) {
  const {
    children: t
  } = e, [, r] = Mr(), {
    motion: n
  } = r, a = g.useRef(!1);
  return a.current = a.current || n === !1, a.current ? /* @__PURE__ */ g.createElement(yO, {
    motion: n
  }, t) : t;
}
const Ah = /* @__PURE__ */ g.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return An("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (Ah.displayName = "PropWarning");
const _O = process.env.NODE_ENV !== "production" ? Ah : () => null;
var LO = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
let $l = !1;
process.env.NODE_ENV;
const zO = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"], VO = "ant";
let Bh;
function HO() {
  return Bh || VO;
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
  t !== void 0 && (Bh = t), n && WO(n) && (process.env.NODE_ENV !== "production" && zs(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), KS(HO(), n));
}, UO = (e) => {
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
    theme: C,
    componentDisabled: E,
    segmented: D,
    statistic: w,
    spin: S,
    calendar: O,
    carousel: B,
    cascader: x,
    collapse: F,
    typography: _,
    checkbox: N,
    descriptions: P,
    divider: I,
    drawer: T,
    skeleton: k,
    steps: A,
    image: M,
    layout: V,
    list: z,
    mentions: U,
    modal: G,
    progress: Q,
    result: R,
    slider: H,
    breadcrumb: L,
    menu: q,
    pagination: re,
    input: te,
    empty: ue,
    badge: se,
    radio: ve,
    rate: le,
    switch: Y,
    transfer: me,
    avatar: Ee,
    message: Ae,
    tag: $e,
    table: fe,
    card: Oe,
    tabs: ge,
    timeline: pe,
    timePicker: he,
    upload: Fe,
    notification: Pe,
    tree: Re,
    colorPicker: xt,
    datePicker: ct,
    rangePicker: Ve,
    flex: tt,
    wave: Xe,
    dropdown: _t,
    warning: vt
  } = e, Nt = g.useCallback((De, We) => {
    const {
      prefixCls: be
    } = e;
    if (We)
      return We;
    const we = be || m.getPrefixCls("");
    return De ? `${we}-${De}` : we;
  }, [m.getPrefixCls, e.prefixCls]), ht = b || m.iconPrefixCls || ih, Ue = r || m.csp;
  gh(ht, Ue);
  const rt = pO(C, m.theme);
  process.env.NODE_ENV !== "production" && ($l = $l || !!rt);
  const qt = {
    csp: Ue,
    autoInsertSpaceInButton: n,
    alert: a,
    anchor: o,
    locale: s || f,
    direction: l,
    space: c,
    virtual: d,
    popupMatchSelectWidth: p ?? v,
    popupOverflow: h,
    getPrefixCls: Nt,
    iconPrefixCls: ht,
    theme: rt,
    segmented: D,
    statistic: w,
    spin: S,
    calendar: O,
    carousel: B,
    cascader: x,
    collapse: F,
    typography: _,
    checkbox: N,
    descriptions: P,
    divider: I,
    drawer: T,
    skeleton: k,
    steps: A,
    image: M,
    input: te,
    layout: V,
    list: z,
    mentions: U,
    modal: G,
    progress: Q,
    result: R,
    slider: H,
    breadcrumb: L,
    menu: q,
    pagination: re,
    empty: ue,
    badge: se,
    radio: ve,
    rate: le,
    switch: Y,
    transfer: me,
    avatar: Ee,
    message: Ae,
    tag: $e,
    table: fe,
    card: Oe,
    tabs: ge,
    timeline: pe,
    timePicker: he,
    upload: Fe,
    notification: Pe,
    tree: Re,
    colorPicker: xt,
    datePicker: ct,
    rangePicker: Ve,
    flex: tt,
    wave: Xe,
    dropdown: _t,
    warning: vt
  }, Ct = Object.assign({}, m);
  Object.keys(qt).forEach((De) => {
    qt[De] !== void 0 && (Ct[De] = qt[De]);
  }), zO.forEach((De) => {
    const We = e[De];
    We && (Ct[De] = We);
  });
  const nt = ui(() => Ct, Ct, (De, We) => {
    const be = Object.keys(De), we = Object.keys(We);
    return be.length !== we.length || be.some((Ze) => De[Ze] !== We[Ze]);
  }), Rt = g.useMemo(() => ({
    prefixCls: ht,
    csp: Ue
  }), [ht, Ue]);
  let at = /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(_O, {
    dropdownMatchSelectWidth: v
  }), t);
  const Dt = g.useMemo(() => {
    var De, We, be, we;
    return Ka(((De = Vs.Form) === null || De === void 0 ? void 0 : De.defaultValidateMessages) || {}, ((be = (We = nt.locale) === null || We === void 0 ? void 0 : We.Form) === null || be === void 0 ? void 0 : be.defaultValidateMessages) || {}, ((we = nt.form) === null || we === void 0 ? void 0 : we.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [nt, i == null ? void 0 : i.validateMessages]);
  Object.keys(Dt).length > 0 && (at = /* @__PURE__ */ g.createElement(fS.Provider, {
    value: Dt
  }, at)), s && (at = /* @__PURE__ */ g.createElement(bS, {
    locale: s,
    _ANT_MARK__: Ym
  }, at)), (ht || Ue) && (at = /* @__PURE__ */ g.createElement(Bc.Provider, {
    value: Rt
  }, at)), u && (at = /* @__PURE__ */ g.createElement(qS, {
    size: u
  }, at)), at = /* @__PURE__ */ g.createElement(kO, null, at);
  const Qe = g.useMemo(() => {
    const De = rt || {}, {
      algorithm: We,
      token: be,
      components: we,
      cssVar: Ze
    } = De, Ft = LO(De, ["algorithm", "token", "components", "cssVar"]), Lt = We && (!Array.isArray(We) || We.length > 0) ? ei(We) : ah, At = {};
    Object.entries(we || {}).forEach((Zr) => {
      let [Cr, vr] = Zr;
      const $ = Object.assign({}, vr);
      "algorithm" in $ && ($.algorithm === !0 ? $.theme = Lt : (Array.isArray($.algorithm) || typeof $.algorithm == "function") && ($.theme = ei($.algorithm)), delete $.algorithm), At[Cr] = $;
    });
    const Yr = Object.assign(Object.assign({}, so), be);
    return Object.assign(Object.assign({}, Ft), {
      theme: Lt,
      token: Yr,
      components: At,
      override: Object.assign({
        override: Yr
      }, At),
      cssVar: Ze
    });
  }, [rt]);
  return C && (at = /* @__PURE__ */ g.createElement(oh.Provider, {
    value: Qe
  }, at)), nt.warning && (at = /* @__PURE__ */ g.createElement(qm.Provider, {
    value: nt.warning
  }, at)), E !== void 0 && (at = /* @__PURE__ */ g.createElement(US, {
    disabled: E
  }, at)), /* @__PURE__ */ g.createElement(kt.Provider, {
    value: nt
  }, at);
}, ya = (e) => {
  const t = g.useContext(kt), r = g.useContext(Xm);
  return /* @__PURE__ */ g.createElement(UO, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
ya.ConfigContext = kt;
ya.SizeContext = Hs;
ya.config = KO;
ya.useConfig = GS;
Object.defineProperty(ya, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && zs(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Hs)
});
process.env.NODE_ENV !== "production" && (ya.displayName = "ConfigProvider");
const Fh = ya;
function Ph(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function qO(e) {
  return Ph(e) instanceof ShadowRoot;
}
function bs(e) {
  return qO(e) ? Ph(e) : null;
}
function GO(e) {
  return e.replace(/-(.)/g, function(t, r) {
    return r.toUpperCase();
  });
}
function XO(e, t) {
  dt(e, "[@ant-design/icons] ".concat(t));
}
function sv(e) {
  return it(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (it(e.icon) === "object" || typeof e.icon == "function");
}
function uv() {
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
function Rl(e, t, r) {
  return r ? /* @__PURE__ */ ne.createElement(e.tag, Z(Z({
    key: t
  }, uv(e.attrs)), r), (e.children || []).map(function(n, a) {
    return Rl(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ ne.createElement(e.tag, Z({
    key: t
  }, uv(e.attrs)), (e.children || []).map(function(n, a) {
    return Rl(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function $h(e) {
  return wn(e)[0];
}
function Rh(e) {
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
  var r = Ut(Bc), n = r.csp, a = r.prefixCls, o = YO;
  a && (o = o.replace(/anticon/g, a)), jt(function() {
    var i = t.current, s = bs(i);
    Cn(o, "@ant-design-icons", {
      prepend: !0,
      csp: n,
      attachTo: s
    });
  }, []);
}, QO = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Lo = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function JO(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  Lo.primaryColor = t, Lo.secondaryColor = r || $h(t), Lo.calculated = !!r;
}
function ex() {
  return Z({}, Lo);
}
var Ws = function(t) {
  var r = t.icon, n = t.className, a = t.onClick, o = t.style, i = t.primaryColor, s = t.secondaryColor, u = lt(t, QO), l = g.useRef(), c = Lo;
  if (i && (c = {
    primaryColor: i,
    secondaryColor: s || $h(i)
  }), ZO(l), XO(sv(r), "icon should be icon definiton, but got ".concat(r)), !sv(r))
    return null;
  var d = r;
  return d && typeof d.icon == "function" && (d = Z(Z({}, d), {}, {
    icon: d.icon(c.primaryColor, c.secondaryColor)
  })), Rl(d.icon, "svg-".concat(d.name), Z(Z({
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
Ws.displayName = "IconReact";
Ws.getTwoToneColors = ex;
Ws.setTwoToneColors = JO;
const Mc = Ws;
function Th(e) {
  var t = Rh(e), r = ae(t, 2), n = r[0], a = r[1];
  return Mc.setTwoToneColors({
    primaryColor: n,
    secondaryColor: a
  });
}
function tx() {
  var e = Mc.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var rx = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Th(IS.primary);
var Ks = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var r = e.className, n = e.icon, a = e.spin, o = e.rotate, i = e.tabIndex, s = e.onClick, u = e.twoToneColor, l = lt(e, rx), c = g.useContext(Bc), d = c.prefixCls, v = d === void 0 ? "anticon" : d, p = c.rootClassName, h = de(p, v, W(W({}, "".concat(v, "-").concat(n.name), !!n.name), "".concat(v, "-spin"), !!a || n.name === "loading"), r), f = i;
  f === void 0 && s && (f = -1);
  var m = o ? {
    msTransform: "rotate(".concat(o, "deg)"),
    transform: "rotate(".concat(o, "deg)")
  } : void 0, b = Rh(u), C = ae(b, 2), E = C[0], D = C[1];
  return /* @__PURE__ */ g.createElement("span", He({
    role: "img",
    "aria-label": n.name
  }, l, {
    ref: t,
    tabIndex: f,
    onClick: s,
    className: h
  }), /* @__PURE__ */ g.createElement(Mc, {
    icon: n,
    primaryColor: E,
    secondaryColor: D,
    style: m
  }));
});
Ks.displayName = "AntdIcon";
Ks.getTwoToneColor = tx;
Ks.setTwoToneColor = Th;
const di = Ks, {
  isValidElement: Un
} = g;
function Nh(e) {
  return e && Un(e) && e.type === g.Fragment;
}
function nx(e, t, r) {
  return Un(e) ? /* @__PURE__ */ g.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
}
function Ca(e, t) {
  return nx(e, e, t);
}
const Us = (e) => {
  const [, , , , t] = Mr();
  return t ? `${e}-css-var` : "";
};
var Se = {
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
    r >= Se.F1 && r <= Se.F12)
      return !1;
    switch (r) {
      case Se.ALT:
      case Se.CAPS_LOCK:
      case Se.CONTEXT_MENU:
      case Se.CTRL:
      case Se.DOWN:
      case Se.END:
      case Se.ESC:
      case Se.HOME:
      case Se.INSERT:
      case Se.LEFT:
      case Se.MAC_FF_META:
      case Se.META:
      case Se.NUMLOCK:
      case Se.NUM_CENTER:
      case Se.PAGE_DOWN:
      case Se.PAGE_UP:
      case Se.PAUSE:
      case Se.PRINT_SCREEN:
      case Se.RIGHT:
      case Se.SHIFT:
      case Se.UP:
      case Se.WIN_KEY:
      case Se.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= Se.ZERO && t <= Se.NINE || t >= Se.NUM_ZERO && t <= Se.NUM_MULTIPLY || t >= Se.A && t <= Se.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case Se.SPACE:
      case Se.QUESTION_MARK:
      case Se.NUM_PLUS:
      case Se.NUM_MINUS:
      case Se.NUM_PERIOD:
      case Se.NUM_DIVISION:
      case Se.SEMICOLON:
      case Se.DASH:
      case Se.EQUALS:
      case Se.COMMA:
      case Se.PERIOD:
      case Se.SLASH:
      case Se.APOSTROPHE:
      case Se.SINGLE_QUOTE:
      case Se.OPEN_SQUARE_BRACKET:
      case Se.BACKSLASH:
      case Se.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, ax = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const ox = ax;
var ix = function(t, r) {
  return /* @__PURE__ */ g.createElement(di, He({}, t, {
    ref: r,
    icon: ox
  }));
}, Ih = /* @__PURE__ */ g.forwardRef(ix);
process.env.NODE_ENV !== "production" && (Ih.displayName = "LoadingOutlined");
const sx = Ih, qs = /* @__PURE__ */ ne.createContext(void 0);
process.env.NODE_ENV !== "production" && (qs.displayName = "zIndexContext");
const ra = 100, ux = 10, lx = ra * ux, Mh = {
  Modal: ra,
  Drawer: ra,
  Popover: ra,
  Popconfirm: ra,
  Tooltip: ra,
  Tour: ra
}, cx = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function fx(e) {
  return e in Mh;
}
function jc(e, t) {
  const [, r] = Mr(), n = ne.useContext(qs), a = fx(e);
  if (t !== void 0)
    return [t, t];
  let o = n ?? 0;
  return a ? (o += // Use preset token zIndex by default but not stack when has parent container
  (n ? 0 : r.zIndexPopupBase) + // Container offset
  Mh[e], o = Math.min(o, r.zIndexPopupBase + lx)) : o += cx[e], [n === void 0 ? t : o, o];
}
function cr() {
  cr = function() {
    return t;
  };
  var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, a = Object.defineProperty || function(k, A, M) {
    k[A] = M.value;
  }, o = typeof Symbol == "function" ? Symbol : {}, i = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag";
  function l(k, A, M) {
    return Object.defineProperty(k, A, {
      value: M,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), k[A];
  }
  try {
    l({}, "");
  } catch {
    l = function(M, V, z) {
      return M[V] = z;
    };
  }
  function c(k, A, M, V) {
    var z = A && A.prototype instanceof b ? A : b, U = Object.create(z.prototype), G = new I(V || []);
    return a(U, "_invoke", {
      value: F(k, M, G)
    }), U;
  }
  function d(k, A, M) {
    try {
      return {
        type: "normal",
        arg: k.call(A, M)
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
  function C() {
  }
  function E() {
  }
  var D = {};
  l(D, i, function() {
    return this;
  });
  var w = Object.getPrototypeOf, S = w && w(w(T([])));
  S && S !== r && n.call(S, i) && (D = S);
  var O = E.prototype = b.prototype = Object.create(D);
  function B(k) {
    ["next", "throw", "return"].forEach(function(A) {
      l(k, A, function(M) {
        return this._invoke(A, M);
      });
    });
  }
  function x(k, A) {
    function M(z, U, G, Q) {
      var R = d(k[z], k, U);
      if (R.type !== "throw") {
        var H = R.arg, L = H.value;
        return L && it(L) == "object" && n.call(L, "__await") ? A.resolve(L.__await).then(function(q) {
          M("next", q, G, Q);
        }, function(q) {
          M("throw", q, G, Q);
        }) : A.resolve(L).then(function(q) {
          H.value = q, G(H);
        }, function(q) {
          return M("throw", q, G, Q);
        });
      }
      Q(R.arg);
    }
    var V;
    a(this, "_invoke", {
      value: function(U, G) {
        function Q() {
          return new A(function(R, H) {
            M(U, G, R, H);
          });
        }
        return V = V ? V.then(Q, Q) : Q();
      }
    });
  }
  function F(k, A, M) {
    var V = v;
    return function(z, U) {
      if (V === h)
        throw new Error("Generator is already running");
      if (V === f) {
        if (z === "throw")
          throw U;
        return {
          value: e,
          done: !0
        };
      }
      for (M.method = z, M.arg = U; ; ) {
        var G = M.delegate;
        if (G) {
          var Q = _(G, M);
          if (Q) {
            if (Q === m)
              continue;
            return Q;
          }
        }
        if (M.method === "next")
          M.sent = M._sent = M.arg;
        else if (M.method === "throw") {
          if (V === v)
            throw V = f, M.arg;
          M.dispatchException(M.arg);
        } else
          M.method === "return" && M.abrupt("return", M.arg);
        V = h;
        var R = d(k, A, M);
        if (R.type === "normal") {
          if (V = M.done ? f : p, R.arg === m)
            continue;
          return {
            value: R.arg,
            done: M.done
          };
        }
        R.type === "throw" && (V = f, M.method = "throw", M.arg = R.arg);
      }
    };
  }
  function _(k, A) {
    var M = A.method, V = k.iterator[M];
    if (V === e)
      return A.delegate = null, M === "throw" && k.iterator.return && (A.method = "return", A.arg = e, _(k, A), A.method === "throw") || M !== "return" && (A.method = "throw", A.arg = new TypeError("The iterator does not provide a '" + M + "' method")), m;
    var z = d(V, k.iterator, A.arg);
    if (z.type === "throw")
      return A.method = "throw", A.arg = z.arg, A.delegate = null, m;
    var U = z.arg;
    return U ? U.done ? (A[k.resultName] = U.value, A.next = k.nextLoc, A.method !== "return" && (A.method = "next", A.arg = e), A.delegate = null, m) : U : (A.method = "throw", A.arg = new TypeError("iterator result is not an object"), A.delegate = null, m);
  }
  function N(k) {
    var A = {
      tryLoc: k[0]
    };
    1 in k && (A.catchLoc = k[1]), 2 in k && (A.finallyLoc = k[2], A.afterLoc = k[3]), this.tryEntries.push(A);
  }
  function P(k) {
    var A = k.completion || {};
    A.type = "normal", delete A.arg, k.completion = A;
  }
  function I(k) {
    this.tryEntries = [{
      tryLoc: "root"
    }], k.forEach(N, this), this.reset(!0);
  }
  function T(k) {
    if (k || k === "") {
      var A = k[i];
      if (A)
        return A.call(k);
      if (typeof k.next == "function")
        return k;
      if (!isNaN(k.length)) {
        var M = -1, V = function z() {
          for (; ++M < k.length; )
            if (n.call(k, M))
              return z.value = k[M], z.done = !1, z;
          return z.value = e, z.done = !0, z;
        };
        return V.next = V;
      }
    }
    throw new TypeError(it(k) + " is not iterable");
  }
  return C.prototype = E, a(O, "constructor", {
    value: E,
    configurable: !0
  }), a(E, "constructor", {
    value: C,
    configurable: !0
  }), C.displayName = l(E, u, "GeneratorFunction"), t.isGeneratorFunction = function(k) {
    var A = typeof k == "function" && k.constructor;
    return !!A && (A === C || (A.displayName || A.name) === "GeneratorFunction");
  }, t.mark = function(k) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(k, E) : (k.__proto__ = E, l(k, u, "GeneratorFunction")), k.prototype = Object.create(O), k;
  }, t.awrap = function(k) {
    return {
      __await: k
    };
  }, B(x.prototype), l(x.prototype, s, function() {
    return this;
  }), t.AsyncIterator = x, t.async = function(k, A, M, V, z) {
    z === void 0 && (z = Promise);
    var U = new x(c(k, A, M, V), z);
    return t.isGeneratorFunction(A) ? U : U.next().then(function(G) {
      return G.done ? G.value : U.next();
    });
  }, B(O), l(O, u, "Generator"), l(O, i, function() {
    return this;
  }), l(O, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(k) {
    var A = Object(k), M = [];
    for (var V in A)
      M.push(V);
    return M.reverse(), function z() {
      for (; M.length; ) {
        var U = M.pop();
        if (U in A)
          return z.value = U, z.done = !1, z;
      }
      return z.done = !0, z;
    };
  }, t.values = T, I.prototype = {
    constructor: I,
    reset: function(A) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(P), !A)
        for (var M in this)
          M.charAt(0) === "t" && n.call(this, M) && !isNaN(+M.slice(1)) && (this[M] = e);
    },
    stop: function() {
      this.done = !0;
      var A = this.tryEntries[0].completion;
      if (A.type === "throw")
        throw A.arg;
      return this.rval;
    },
    dispatchException: function(A) {
      if (this.done)
        throw A;
      var M = this;
      function V(H, L) {
        return G.type = "throw", G.arg = A, M.next = H, L && (M.method = "next", M.arg = e), !!L;
      }
      for (var z = this.tryEntries.length - 1; z >= 0; --z) {
        var U = this.tryEntries[z], G = U.completion;
        if (U.tryLoc === "root")
          return V("end");
        if (U.tryLoc <= this.prev) {
          var Q = n.call(U, "catchLoc"), R = n.call(U, "finallyLoc");
          if (Q && R) {
            if (this.prev < U.catchLoc)
              return V(U.catchLoc, !0);
            if (this.prev < U.finallyLoc)
              return V(U.finallyLoc);
          } else if (Q) {
            if (this.prev < U.catchLoc)
              return V(U.catchLoc, !0);
          } else {
            if (!R)
              throw new Error("try statement without catch or finally");
            if (this.prev < U.finallyLoc)
              return V(U.finallyLoc);
          }
        }
      }
    },
    abrupt: function(A, M) {
      for (var V = this.tryEntries.length - 1; V >= 0; --V) {
        var z = this.tryEntries[V];
        if (z.tryLoc <= this.prev && n.call(z, "finallyLoc") && this.prev < z.finallyLoc) {
          var U = z;
          break;
        }
      }
      U && (A === "break" || A === "continue") && U.tryLoc <= M && M <= U.finallyLoc && (U = null);
      var G = U ? U.completion : {};
      return G.type = A, G.arg = M, U ? (this.method = "next", this.next = U.finallyLoc, m) : this.complete(G);
    },
    complete: function(A, M) {
      if (A.type === "throw")
        throw A.arg;
      return A.type === "break" || A.type === "continue" ? this.next = A.arg : A.type === "return" ? (this.rval = this.arg = A.arg, this.method = "return", this.next = "end") : A.type === "normal" && M && (this.next = M), m;
    },
    finish: function(A) {
      for (var M = this.tryEntries.length - 1; M >= 0; --M) {
        var V = this.tryEntries[M];
        if (V.finallyLoc === A)
          return this.complete(V.completion, V.afterLoc), P(V), m;
      }
    },
    catch: function(A) {
      for (var M = this.tryEntries.length - 1; M >= 0; --M) {
        var V = this.tryEntries[M];
        if (V.tryLoc === A) {
          var z = V.completion;
          if (z.type === "throw") {
            var U = z.arg;
            P(V);
          }
          return U;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(A, M, V) {
      return this.delegate = {
        iterator: T(A),
        resultName: M,
        nextLoc: V
      }, this.method === "next" && (this.arg = e), m;
    }
  }, t;
}
function lv(e, t, r, n, a, o, i) {
  try {
    var s = e[o](i), u = s.value;
  } catch (l) {
    r(l);
    return;
  }
  s.done ? t(u) : Promise.resolve(u).then(n, a);
}
function Ea(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, a) {
      var o = e.apply(t, r);
      function i(u) {
        lv(o, n, a, i, s, "next", u);
      }
      function s(u) {
        lv(o, n, a, i, s, "throw", u);
      }
      i(void 0);
    });
  };
}
var vi = Z({}, a0), dx = vi.version, vx = vi.render, gx = vi.unmountComponentAtNode, Gs;
try {
  var mx = Number((dx || "").split(".")[0]);
  mx >= 18 && (Gs = vi.createRoot);
} catch {
}
function cv(e) {
  var t = vi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && it(t) === "object" && (t.usingClientEntryPoint = e);
}
var ys = "__rc_react_root__";
function hx(e, t) {
  cv(!0);
  var r = t[ys] || Gs(t);
  cv(!1), r.render(e), t[ys] = r;
}
function px(e, t) {
  vx(e, t);
}
function bx(e, t) {
  if (Gs) {
    hx(e, t);
    return;
  }
  px(e, t);
}
function yx(e) {
  return Tl.apply(this, arguments);
}
function Tl() {
  return Tl = Ea(/* @__PURE__ */ cr().mark(function e(t) {
    return cr().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.resolve().then(function() {
              var a;
              (a = t[ys]) === null || a === void 0 || a.unmount(), delete t[ys];
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), Tl.apply(this, arguments);
}
function Cx(e) {
  gx(e);
}
function Ex(e) {
  return Nl.apply(this, arguments);
}
function Nl() {
  return Nl = Ea(/* @__PURE__ */ cr().mark(function e(t) {
    return cr().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            if (Gs === void 0) {
              n.next = 2;
              break;
            }
            return n.abrupt("return", yx(t));
          case 2:
            Cx(t);
          case 3:
          case "end":
            return n.stop();
        }
    }, e);
  })), Nl.apply(this, arguments);
}
const Ru = () => ({
  height: 0,
  opacity: 0
}), fv = (e) => {
  const {
    scrollHeight: t
  } = e;
  return {
    height: t,
    opacity: 1
  };
}, Dx = (e) => ({
  height: e ? e.offsetHeight : 0
}), Tu = (e, t) => (t == null ? void 0 : t.deadline) === !0 || t.propertyName === "height", wx = function() {
  return {
    motionName: `${arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant"}-motion-collapse`,
    onAppearStart: Ru,
    onEnterStart: Ru,
    onAppearActive: fv,
    onEnterActive: fv,
    onLeaveStart: Dx,
    onLeaveActive: Ru,
    onAppearEnd: Tu,
    onEnterEnd: Tu,
    onLeaveEnd: Tu,
    motionDeadline: 500
  };
}, Sx = (e, t, r) => r !== void 0 ? r : `${e}-${t}`, kc = function(e) {
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
}, Ox = (e) => {
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
}, xx = Nc("Wave", (e) => [Ox(e)]);
function Ax(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function Nu(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && Ax(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function Bx(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(e);
  return Nu(t) ? t : Nu(r) ? r : Nu(n) ? n : null;
}
const _c = "ant-wave-target";
function Iu(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Fx = (e) => {
  const {
    className: t,
    target: r,
    component: n
  } = e, a = g.useRef(null), [o, i] = g.useState(null), [s, u] = g.useState([]), [l, c] = g.useState(0), [d, v] = g.useState(0), [p, h] = g.useState(0), [f, m] = g.useState(0), [b, C] = g.useState(!1), E = {
    left: l,
    top: d,
    width: p,
    height: f,
    borderRadius: s.map((S) => `${S}px`).join(" ")
  };
  o && (E["--wave-color"] = o);
  function D() {
    const S = getComputedStyle(r);
    i(Bx(r));
    const O = S.position === "static", {
      borderLeftWidth: B,
      borderTopWidth: x
    } = S;
    c(O ? r.offsetLeft : Iu(-parseFloat(B))), v(O ? r.offsetTop : Iu(-parseFloat(x))), h(r.offsetWidth), m(r.offsetHeight);
    const {
      borderTopLeftRadius: F,
      borderTopRightRadius: _,
      borderBottomLeftRadius: N,
      borderBottomRightRadius: P
    } = S;
    u([F, _, P, N].map((I) => Iu(parseFloat(I))));
  }
  if (g.useEffect(() => {
    if (r) {
      const S = tr(() => {
        D(), C(!0);
      });
      let O;
      return typeof ResizeObserver < "u" && (O = new ResizeObserver(D), O.observe(r)), () => {
        tr.cancel(S), O == null || O.disconnect();
      };
    }
  }, []), !b)
    return null;
  const w = (n === "Checkbox" || n === "Radio") && (r == null ? void 0 : r.classList.contains(_c));
  return /* @__PURE__ */ g.createElement(mo, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (S, O) => {
      var B;
      if (O.deadline || O.propertyName === "opacity") {
        const x = (B = a.current) === null || B === void 0 ? void 0 : B.parentElement;
        Ex(x).then(() => {
          x == null || x.remove();
        });
      }
      return !1;
    }
  }, (S) => {
    let {
      className: O
    } = S;
    return /* @__PURE__ */ g.createElement("div", {
      ref: a,
      className: de(t, {
        "wave-quick": w
      }, O),
      style: E
    });
  });
}, Px = (e, t) => {
  var r;
  const {
    component: n
  } = t;
  if (n === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked))
    return;
  const a = document.createElement("div");
  a.style.position = "absolute", a.style.left = "0px", a.style.top = "0px", e == null || e.insertBefore(a, e == null ? void 0 : e.firstChild), bx(/* @__PURE__ */ g.createElement(Fx, Object.assign({}, t, {
    target: e
  })), a);
}, $x = Px;
function Rx(e, t, r) {
  const {
    wave: n
  } = g.useContext(kt), [, a, o] = Mr(), i = Sr((l) => {
    const c = e.current;
    if (n != null && n.disabled || !c)
      return;
    const d = c.querySelector(`.${_c}`) || c, {
      showEffect: v
    } = n || {};
    (v || $x)(d, {
      className: t,
      token: a,
      component: r,
      event: l,
      hashId: o
    });
  }), s = g.useRef();
  return (l) => {
    tr.cancel(s.current), s.current = tr(() => {
      i(l);
    });
  };
}
const jh = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: a
  } = Ut(kt), o = Ge(null), i = a("wave"), [, s] = xx(i), u = Rx(o, de(i, s), n);
  if (ne.useEffect(() => {
    const c = o.current;
    if (!c || c.nodeType !== 1 || r)
      return;
    const d = (v) => {
      !kc(v.target) || // No need wave
      !c.getAttribute || c.getAttribute("disabled") || c.disabled || c.className.includes("disabled") || c.className.includes("-leave") || u(v);
    };
    return c.addEventListener("click", d, !0), () => {
      c.removeEventListener("click", d, !0);
    };
  }, [r]), !/* @__PURE__ */ ne.isValidElement(t))
    return t ?? null;
  const l = Gn(t) ? co(t.ref, o) : o;
  return Ca(t, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (jh.displayName = "Wave");
const kh = jh, _h = (e) => {
  const t = ne.useContext(Hs);
  return ne.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, Tx = (e) => {
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
}, Nx = (e) => {
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
}, Ix = (e) => {
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
}, Lh = go("Space", (e) => {
  const t = Fr(e, {
    spaceGapSmallSize: e.paddingXS,
    spaceGapMiddleSize: e.padding,
    spaceGapLargeSize: e.paddingLG
  });
  return [Nx(t), Ix(t), Tx(t)];
}, () => ({}), {
  // Space component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/40315
  resetStyle: !1
});
var zh = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Xs = /* @__PURE__ */ g.createContext(null), Vh = (e, t) => {
  const r = g.useContext(Xs), n = g.useMemo(() => {
    if (!r)
      return "";
    const {
      compactDirection: a,
      isFirstItem: o,
      isLastItem: i
    } = r, s = a === "vertical" ? "-vertical-" : "-";
    return de(`${e}-compact${s}item`, {
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
}, Hh = (e) => {
  let {
    children: t
  } = e;
  return /* @__PURE__ */ g.createElement(Xs.Provider, {
    value: null
  }, t);
}, Mx = (e) => {
  var {
    children: t
  } = e, r = zh(e, ["children"]);
  return /* @__PURE__ */ g.createElement(Xs.Provider, {
    value: r
  }, t);
}, jx = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = g.useContext(kt), {
    size: n,
    direction: a,
    block: o,
    prefixCls: i,
    className: s,
    rootClassName: u,
    children: l
  } = e, c = zh(e, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]), d = _h((E) => n ?? E), v = t("space-compact", i), [p, h] = Lh(v), f = de(v, h, {
    [`${v}-rtl`]: r === "rtl",
    [`${v}-block`]: o,
    [`${v}-vertical`]: a === "vertical"
  }, s, u), m = g.useContext(Xs), b = Wn(l), C = g.useMemo(() => b.map((E, D) => {
    const w = E && E.key || `${v}-item-${D}`;
    return /* @__PURE__ */ g.createElement(Mx, {
      key: w,
      compactSize: d,
      compactDirection: a,
      isFirstItem: D === 0 && (!m || (m == null ? void 0 : m.isFirstItem)),
      isLastItem: D === b.length - 1 && (!m || (m == null ? void 0 : m.isLastItem))
    }, E);
  }), [n, b, m]);
  return b.length === 0 ? null : p(/* @__PURE__ */ g.createElement("div", Object.assign({
    className: f
  }, c), C));
}, kx = jx;
var _x = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Wh = /* @__PURE__ */ g.createContext(void 0), Lx = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = g.useContext(kt), {
    prefixCls: n,
    size: a,
    className: o
  } = e, i = _x(e, ["prefixCls", "size", "className"]), s = t("btn-group", n), [, , u] = Mr();
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
    const d = An("Button.Group");
    process.env.NODE_ENV !== "production" && d(!a || ["large", "small", "middle"].includes(a), "usage", "Invalid prop `size`.");
  }
  const c = de(s, {
    [`${s}-${l}`]: l,
    [`${s}-rtl`]: r === "rtl"
  }, o, u);
  return /* @__PURE__ */ g.createElement(Wh.Provider, {
    value: a
  }, /* @__PURE__ */ g.createElement("div", Object.assign({}, i, {
    className: c
  })));
}, zx = Lx, dv = /^[\u4e00-\u9fa5]{2}$/, Il = dv.test.bind(dv);
function vv(e) {
  return typeof e == "string";
}
function _i(e) {
  return e === "text" || e === "link";
}
function Vx(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && vv(e.type) && Il(e.props.children) ? Ca(e, {
    children: e.props.children.split("").join(r)
  }) : vv(e) ? Il(e) ? /* @__PURE__ */ ne.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ ne.createElement("span", null, e) : Nh(e) ? /* @__PURE__ */ ne.createElement("span", null, e) : e;
}
function Hx(e, t) {
  let r = !1;
  const n = [];
  return ne.Children.forEach(e, (a) => {
    const o = typeof a, i = o === "string" || o === "number";
    if (r && i) {
      const s = n.length - 1, u = n[s];
      n[s] = `${u}${a}`;
    } else
      n.push(a);
    r = i;
  }), ne.Children.map(n, (a) => Vx(a, t));
}
const Wx = /* @__PURE__ */ Xr((e, t) => {
  const {
    className: r,
    style: n,
    children: a,
    prefixCls: o
  } = e, i = de(`${o}-icon`, r);
  return /* @__PURE__ */ ne.createElement("span", {
    ref: t,
    className: i,
    style: n
  }, a);
}), Kh = Wx, gv = /* @__PURE__ */ Xr((e, t) => {
  let {
    prefixCls: r,
    className: n,
    style: a,
    iconClassName: o
  } = e;
  const i = de(`${r}-loading-icon`, n);
  return /* @__PURE__ */ ne.createElement(Kh, {
    prefixCls: r,
    className: i,
    style: a,
    ref: t
  }, /* @__PURE__ */ ne.createElement(sx, {
    className: o
  }));
}), Mu = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), ju = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), Kx = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: a,
    style: o
  } = e, i = !!r;
  return n ? /* @__PURE__ */ ne.createElement(gv, {
    prefixCls: t,
    className: a,
    style: o
  }) : /* @__PURE__ */ ne.createElement(mo, {
    visible: i,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    motionLeave: i,
    removeOnLeave: !0,
    onAppearStart: Mu,
    onAppearActive: ju,
    onEnterStart: Mu,
    onEnterActive: ju,
    onLeaveStart: ju,
    onLeaveActive: Mu
  }, (s, u) => {
    let {
      className: l,
      style: c
    } = s;
    return /* @__PURE__ */ ne.createElement(gv, {
      prefixCls: t,
      className: a,
      style: Object.assign(Object.assign({}, o), c),
      ref: u,
      iconClassName: l
    });
  });
}, Ux = Kx, mv = (e, t) => ({
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
}), qx = (e) => {
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
      mv(`${t}-primary`, a),
      mv(`${t}-danger`, o)
    ]
  };
}, Uh = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: r,
    paddingBlock: n
  } = e;
  return Fr(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: n,
    buttonIconOnlyFontSize: r
  });
}, qh = (e) => {
  var t, r, n, a, o, i;
  const s = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, u = (r = e.contentFontSizeSM) !== null && r !== void 0 ? r : e.fontSize, l = (n = e.contentFontSizeLG) !== null && n !== void 0 ? n : e.fontSizeLG, c = (a = e.contentLineHeight) !== null && a !== void 0 ? a : ts(s), d = (o = e.contentLineHeightSM) !== null && o !== void 0 ? o : ts(u), v = (i = e.contentLineHeightLG) !== null && i !== void 0 ? i : ts(l);
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
}, Gx = (e) => {
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
      border: `${Me(e.lineWidth)} ${e.lineType} transparent`,
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
      "&:not(:disabled)": Object.assign({}, Ol(e)),
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
}, Sn = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), Xx = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), Yx = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), Zx = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), ni = (e, t, r, n, a, o, i, s) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: r || void 0,
    background: t,
    borderColor: n || void 0,
    boxShadow: "none"
  }, Sn(e, Object.assign({
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
}), Lc = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, Zx(e))
}), Gh = (e) => Object.assign({}, Lc(e)), Cs = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), Xh = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Gh(e)), {
  background: e.defaultBg,
  borderColor: e.defaultBorderColor,
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}), Sn(e.componentCls, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), ni(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: e.colorError,
    borderColor: e.colorError
  }, Sn(e.componentCls, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), ni(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), Lc(e))
}), Qx = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Gh(e)), {
  color: e.primaryColor,
  background: e.colorPrimary,
  boxShadow: e.primaryShadow
}), Sn(e.componentCls, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryActive
})), ni(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
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
  }, Sn(e.componentCls, {
    background: e.colorErrorHover
  }, {
    background: e.colorErrorActive
  })), ni(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Lc(e))
}), Jx = (e) => Object.assign(Object.assign({}, Xh(e)), {
  borderStyle: "dashed"
}), eA = (e) => Object.assign(Object.assign(Object.assign({
  color: e.colorLink
}, Sn(e.componentCls, {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Cs(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, Sn(e.componentCls, {
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), Cs(e))
}), tA = (e) => Object.assign(Object.assign(Object.assign({}, Sn(e.componentCls, {
  color: e.colorText,
  background: e.textHoverBg
}, {
  color: e.colorText,
  background: e.colorBgTextActive
})), Cs(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, Cs(e)), Sn(e.componentCls, {
    color: e.colorErrorHover,
    background: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    background: e.colorErrorBg
  }))
}), rA = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: Xh(e),
    [`${t}-primary`]: Qx(e),
    [`${t}-dashed`]: Jx(e),
    [`${t}-link`]: eA(e),
    [`${t}-text`]: tA(e),
    [`${t}-ghost`]: ni(e.componentCls, e.ghostBg, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
  };
}, zc = function(e) {
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
        padding: `${Me(l)} ${Me(s)}`,
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
      [`${r}${r}-circle${t}`]: Xx(e)
    },
    {
      [`${r}${r}-round${t}`]: Yx(e)
    }
  ];
}, nA = (e) => {
  const t = Fr(e, {
    fontSize: e.contentFontSize,
    lineHeight: e.contentLineHeight
  });
  return zc(t, e.componentCls);
}, aA = (e) => {
  const t = Fr(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    lineHeight: e.contentLineHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: e.paddingBlockSM,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return zc(t, `${e.componentCls}-sm`);
}, oA = (e) => {
  const t = Fr(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    lineHeight: e.contentLineHeightLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: e.paddingBlockLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return zc(t, `${e.componentCls}-lg`);
}, iA = (e) => {
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
}, sA = go("Button", (e) => {
  const t = Uh(e);
  return [
    // Shared
    Gx(t),
    // Size
    nA(t),
    aA(t),
    oA(t),
    // Block
    iA(t),
    // Group (type, ghost, danger, loading)
    rA(t),
    // Button Group
    qx(t)
  ];
}, qh, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function uA(e, t, r) {
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
function lA(e, t, r) {
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
function cA(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, uA(e, n, t)), lA(r, n, t))
  };
}
function fA(e, t) {
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
function dA(e, t) {
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
function vA(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, fA(e, t)), dA(e.componentCls, t))
  };
}
const gA = (e) => {
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
            height: `calc(100% + ${Me(e.lineWidth)} * 2)`,
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
              width: `calc(100% + ${Me(e.lineWidth)} * 2)`,
              height: e.lineWidth,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, mA = fO(["Button", "compact"], (e) => {
  const t = Uh(e);
  return [
    // Space Compact
    cA(t),
    vA(t),
    gA(t)
  ];
}, qh);
var hA = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function pA(e) {
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
const bA = (e, t) => {
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
    htmlType: C = "button",
    classNames: E,
    style: D = {}
  } = e, w = hA(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]), {
    getPrefixCls: S,
    autoInsertSpaceInButton: O,
    direction: B,
    button: x
  } = Ut(kt), F = S("btn", o), [_, N, P] = sA(F), I = Ut($c), T = d ?? I, k = Ut(Wh), A = lr(() => pA(a), [a]), [M, V] = ir(A.loading), [z, U] = ir(!1), Q = co(t, /* @__PURE__ */ n0()), R = r0.count(h) === 1 && !f && !_i(i);
  jt(() => {
    let ge = null;
    A.delay > 0 ? ge = setTimeout(() => {
      ge = null, V(!0);
    }, A.delay) : V(A.loading);
    function pe() {
      ge && (clearTimeout(ge), ge = null);
    }
    return pe;
  }, [A]), jt(() => {
    if (!Q || !Q.current || O === !1)
      return;
    const ge = Q.current.textContent;
    R && Il(ge) ? z || U(!0) : z && U(!1);
  }, [Q]);
  const H = (ge) => {
    const {
      onClick: pe
    } = e;
    if (M || T) {
      ge.preventDefault();
      return;
    }
    pe == null || pe(ge);
  };
  if (process.env.NODE_ENV !== "production") {
    const ge = An("Button");
    process.env.NODE_ENV !== "production" && ge(!(typeof f == "string" && f.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${f}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && ge(!(m && _i(i)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const L = O !== !1, {
    compactSize: q,
    compactItemClassnames: re
  } = Vh(F, B), te = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, ue = _h((ge) => {
    var pe, he;
    return (he = (pe = l ?? q) !== null && pe !== void 0 ? pe : k) !== null && he !== void 0 ? he : ge;
  }), se = ue && te[ue] || "", ve = M ? "loading" : f, le = xn(w, ["navigate"]), Y = de(F, N, P, {
    [`${F}-${u}`]: u !== "default" && u,
    [`${F}-${i}`]: i,
    [`${F}-${se}`]: se,
    [`${F}-icon-only`]: !h && h !== 0 && !!ve,
    [`${F}-background-ghost`]: m && !_i(i),
    [`${F}-loading`]: M,
    [`${F}-two-chinese-chars`]: z && L && !M,
    [`${F}-block`]: b,
    [`${F}-dangerous`]: !!s,
    [`${F}-rtl`]: B === "rtl"
  }, re, v, p, x == null ? void 0 : x.className), me = Object.assign(Object.assign({}, x == null ? void 0 : x.style), D), Ee = de(E == null ? void 0 : E.icon, (r = x == null ? void 0 : x.classNames) === null || r === void 0 ? void 0 : r.icon), Ae = Object.assign(Object.assign({}, (c == null ? void 0 : c.icon) || {}), ((n = x == null ? void 0 : x.styles) === null || n === void 0 ? void 0 : n.icon) || {}), $e = f && !M ? /* @__PURE__ */ ne.createElement(Kh, {
    prefixCls: F,
    className: Ee,
    style: Ae
  }, f) : /* @__PURE__ */ ne.createElement(Ux, {
    existIcon: !!f,
    prefixCls: F,
    loading: !!M
  }), fe = h || h === 0 ? Hx(h, R && L) : null;
  if (le.href !== void 0)
    return _(/* @__PURE__ */ ne.createElement("a", Object.assign({}, le, {
      className: de(Y, {
        [`${F}-disabled`]: T
      }),
      href: T ? void 0 : le.href,
      style: me,
      onClick: H,
      ref: Q,
      tabIndex: T ? -1 : 0
    }), $e, fe));
  let Oe = /* @__PURE__ */ ne.createElement("button", Object.assign({}, w, {
    type: C,
    className: Y,
    style: me,
    onClick: H,
    disabled: T,
    ref: Q
  }), $e, fe, !!re && /* @__PURE__ */ ne.createElement(mA, {
    key: "compact",
    prefixCls: F
  }));
  return _i(i) || (Oe = /* @__PURE__ */ ne.createElement(kh, {
    component: "Button",
    disabled: !!M
  }, Oe)), _(Oe);
}, Ys = /* @__PURE__ */ Xr(bA);
process.env.NODE_ENV !== "production" && (Ys.displayName = "Button");
Ys.Group = zx;
Ys.__ANT_BUTTON = !0;
const qn = Ys;
var Yh = /* @__PURE__ */ g.createContext(null), hv = [];
function yA(e, t) {
  var r = g.useState(function() {
    if (!pr())
      return null;
    var h = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && h.setAttribute("data-debug", t), h;
  }), n = ae(r, 1), a = n[0], o = g.useRef(!1), i = g.useContext(Yh), s = g.useState(hv), u = ae(s, 2), l = u[0], c = u[1], d = i || (o.current ? void 0 : function(h) {
    c(function(f) {
      var m = [h].concat(Be(f));
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
  return or(function() {
    return e ? i ? i(v) : v() : p(), p;
  }, [e]), or(function() {
    l.length && (l.forEach(function(h) {
      return h();
    }), c(hv));
  }, [l]), [a, d];
}
function CA(e) {
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
      Cn(`
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
  return document.body.removeChild(r), Jo(t), {
    width: v,
    height: p
  };
}
function EA(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : CA(e);
}
function DA() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var wA = "rc-util-locker-".concat(Date.now()), pv = 0;
function SA(e) {
  var t = !!e, r = g.useState(function() {
    return pv += 1, "".concat(wA, "_").concat(pv);
  }), n = ae(r, 1), a = n[0];
  or(function() {
    if (t) {
      var o = EA(document.body).width, i = DA();
      Cn(`
html body {
  overflow-y: hidden;
  `.concat(i ? "width: calc(100% - ".concat(o, "px);") : "", `
}`), a);
    } else
      Jo(a);
    return function() {
      Jo(a);
    };
  }, [t, a]);
}
var bv = !1;
function OA(e) {
  return typeof e == "boolean" && (bv = e), bv;
}
var yv = function(t) {
  return t === !1 ? !1 : !pr() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, Vc = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var r = e.open, n = e.autoLock, a = e.getContainer, o = e.debug, i = e.autoDestroy, s = i === void 0 ? !0 : i, u = e.children, l = g.useState(r), c = ae(l, 2), d = c[0], v = c[1], p = d || r;
  process.env.NODE_ENV !== "production" && dt(pr() || !r, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), g.useEffect(function() {
    (s || r) && v(r);
  }, [r, s]);
  var h = g.useState(function() {
    return yv(a);
  }), f = ae(h, 2), m = f[0], b = f[1];
  g.useEffect(function() {
    var N = yv(a);
    b(N ?? null);
  });
  var C = yA(p && !m, o), E = ae(C, 2), D = E[0], w = E[1], S = m ?? D;
  SA(n && r && pr() && (S === D || S === document.body));
  var O = null;
  if (u && Gn(u) && t) {
    var B = u;
    O = B.ref;
  }
  var x = li(O, t);
  if (!p || !pr() || m === void 0)
    return null;
  var F = S === !1 || OA(), _ = u;
  return t && (_ = /* @__PURE__ */ g.cloneElement(u, {
    ref: x
  })), /* @__PURE__ */ g.createElement(Yh.Provider, {
    value: w
  }, F ? _ : /* @__PURE__ */ o0(_, S));
});
process.env.NODE_ENV !== "production" && (Vc.displayName = "Portal");
function xA() {
  var e = Z({}, g);
  return e.useId;
}
var Cv = 0, Ev = xA();
const AA = Ev ? (
  // Use React `useId`
  function(t) {
    var r = Ev();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : r);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var r = g.useState("ssr-id"), n = ae(r, 2), a = n[0], o = n[1];
    return g.useEffect(function() {
      var i = Cv;
      Cv += 1, o("rc_unique_".concat(i));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : a);
  }
);
var ia = "RC_FORM_INTERNAL_HOOKS", gt = function() {
  dt(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, uo = /* @__PURE__ */ g.createContext({
  getFieldValue: gt,
  getFieldsValue: gt,
  getFieldError: gt,
  getFieldWarning: gt,
  getFieldsError: gt,
  isFieldsTouched: gt,
  isFieldTouched: gt,
  isFieldValidating: gt,
  isFieldsValidating: gt,
  resetFields: gt,
  setFields: gt,
  setFieldValue: gt,
  setFieldsValue: gt,
  validateFields: gt,
  submit: gt,
  getInternalHooks: function() {
    return gt(), {
      dispatch: gt,
      initEntityValue: gt,
      registerField: gt,
      useSubscribe: gt,
      setInitialValues: gt,
      destroyForm: gt,
      setCallbacks: gt,
      registerWatch: gt,
      getFields: gt,
      setValidateMessages: gt,
      setPreserve: gt,
      getInitialValue: gt
    };
  }
}), Es = /* @__PURE__ */ g.createContext(null);
function Ml(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function BA(e) {
  return e && !!e._init;
}
function sa() {
  return sa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, sa.apply(this, arguments);
}
function FA(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ai(e, t);
}
function jl(e) {
  return jl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, jl(e);
}
function ai(e, t) {
  return ai = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, ai(e, t);
}
function PA() {
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
function rs(e, t, r) {
  return PA() ? rs = Reflect.construct.bind() : rs = function(a, o, i) {
    var s = [null];
    s.push.apply(s, o);
    var u = Function.bind.apply(a, s), l = new u();
    return i && ai(l, i.prototype), l;
  }, rs.apply(null, arguments);
}
function $A(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function kl(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return kl = function(n) {
    if (n === null || !$A(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(n))
        return t.get(n);
      t.set(n, a);
    }
    function a() {
      return rs(n, arguments, jl(this).constructor);
    }
    return a.prototype = Object.create(n.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ai(a, n);
  }, kl(e);
}
var RA = /%[sdj%]/g, Zh = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Zh = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, r);
});
function _l(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(r) {
    var n = r.field;
    t[n] = t[n] || [], t[n].push(r);
  }), t;
}
function xr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var a = 0, o = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var i = e.replace(RA, function(s) {
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
function TA(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Ht(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || TA(t) && typeof e == "string" && !e);
}
function NA(e, t, r) {
  var n = [], a = 0, o = e.length;
  function i(s) {
    n.push.apply(n, s || []), a++, a === o && r(n);
  }
  e.forEach(function(s) {
    t(s, i);
  });
}
function Dv(e, t, r) {
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
function IA(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, e[r] || []);
  }), t;
}
var wv = /* @__PURE__ */ function(e) {
  FA(t, e);
  function t(r, n) {
    var a;
    return a = e.call(this, "Async Validation Error") || this, a.errors = r, a.fields = n, a;
  }
  return t;
}(/* @__PURE__ */ kl(Error));
function MA(e, t, r, n, a) {
  if (t.first) {
    var o = new Promise(function(v, p) {
      var h = function(b) {
        return n(b), b.length ? p(new wv(b, _l(b))) : v(a);
      }, f = IA(e);
      Dv(f, r, h);
    });
    return o.catch(function(v) {
      return v;
    }), o;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), u = s.length, l = 0, c = [], d = new Promise(function(v, p) {
    var h = function(m) {
      if (c.push.apply(c, m), l++, l === u)
        return n(c), c.length ? p(new wv(c, _l(c))) : v(a);
    };
    s.length || (n(c), v(a)), s.forEach(function(f) {
      var m = e[f];
      i.indexOf(f) !== -1 ? Dv(m, r, h) : NA(m, r, h);
    });
  });
  return d.catch(function(v) {
    return v;
  }), d;
}
function jA(e) {
  return !!(e && e.message !== void 0);
}
function kA(e, t) {
  for (var r = e, n = 0; n < t.length; n++) {
    if (r == null)
      return r;
    r = r[t[n]];
  }
  return r;
}
function Sv(e, t) {
  return function(r) {
    var n;
    return e.fullFields ? n = kA(t, e.fullFields) : n = t[r.field || e.fullField], jA(r) ? (r.field = r.field || e.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || e.fullField
    };
  };
}
function Ov(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = t[r];
        typeof n == "object" && typeof e[r] == "object" ? e[r] = sa({}, e[r], n) : e[r] = n;
      }
  }
  return e;
}
var Qh = function(t, r, n, a, o, i) {
  t.required && (!n.hasOwnProperty(t.field) || Ht(r, i || t.type)) && a.push(xr(o.messages.required, t.fullField));
}, _A = function(t, r, n, a, o) {
  (/^\s+$/.test(r) || r === "") && a.push(xr(o.messages.whitespace, t.fullField));
}, Li, LA = function() {
  if (Li)
    return Li;
  var e = "[a-fA-F\\d:]", t = function(D) {
    return D && D.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
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
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), o = new RegExp("(?:^" + r + "$)|(?:^" + a + "$)"), i = new RegExp("^" + r + "$"), s = new RegExp("^" + a + "$"), u = function(D) {
    return D && D.exact ? o : new RegExp("(?:" + t(D) + r + t(D) + ")|(?:" + t(D) + a + t(D) + ")", "g");
  };
  u.v4 = function(E) {
    return E && E.exact ? i : new RegExp("" + t(E) + r + t(E), "g");
  }, u.v6 = function(E) {
    return E && E.exact ? s : new RegExp("" + t(E) + a + t(E), "g");
  };
  var l = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", d = u.v4().source, v = u.v6().source, p = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", h = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", f = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", m = "(?::\\d{2,5})?", b = '(?:[/?#][^\\s"]*)?', C = "(?:" + l + "|www\\.)" + c + "(?:localhost|" + d + "|" + v + "|" + p + h + f + ")" + m + b;
  return Li = new RegExp("(?:^" + C + "$)", "i"), Li;
}, xv = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, To = {
  integer: function(t) {
    return To.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return To.number(t) && !To.integer(t);
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
    return typeof t == "object" && !To.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(xv.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(LA());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(xv.hex);
  }
}, zA = function(t, r, n, a, o) {
  if (t.required && r === void 0) {
    Qh(t, r, n, a, o);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? To[s](r) || a.push(xr(o.messages.types[s], t.fullField, t.type)) : s && typeof r !== t.type && a.push(xr(o.messages.types[s], t.fullField, t.type));
}, VA = function(t, r, n, a, o) {
  var i = typeof t.len == "number", s = typeof t.min == "number", u = typeof t.max == "number", l = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = r, d = null, v = typeof r == "number", p = typeof r == "string", h = Array.isArray(r);
  if (v ? d = "number" : p ? d = "string" : h && (d = "array"), !d)
    return !1;
  h && (c = r.length), p && (c = r.replace(l, "_").length), i ? c !== t.len && a.push(xr(o.messages[d].len, t.fullField, t.len)) : s && !u && c < t.min ? a.push(xr(o.messages[d].min, t.fullField, t.min)) : u && !s && c > t.max ? a.push(xr(o.messages[d].max, t.fullField, t.max)) : s && u && (c < t.min || c > t.max) && a.push(xr(o.messages[d].range, t.fullField, t.min, t.max));
}, $a = "enum", HA = function(t, r, n, a, o) {
  t[$a] = Array.isArray(t[$a]) ? t[$a] : [], t[$a].indexOf(r) === -1 && a.push(xr(o.messages[$a], t.fullField, t[$a].join(", ")));
}, WA = function(t, r, n, a, o) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || a.push(xr(o.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(r) || a.push(xr(o.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, qe = {
  required: Qh,
  whitespace: _A,
  type: zA,
  range: VA,
  enum: HA,
  pattern: WA
}, KA = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ht(r, "string") && !t.required)
      return n();
    qe.required(t, r, a, i, o, "string"), Ht(r, "string") || (qe.type(t, r, a, i, o), qe.range(t, r, a, i, o), qe.pattern(t, r, a, i, o), t.whitespace === !0 && qe.whitespace(t, r, a, i, o));
  }
  n(i);
}, UA = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ht(r) && !t.required)
      return n();
    qe.required(t, r, a, i, o), r !== void 0 && qe.type(t, r, a, i, o);
  }
  n(i);
}, qA = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (r === "" && (r = void 0), Ht(r) && !t.required)
      return n();
    qe.required(t, r, a, i, o), r !== void 0 && (qe.type(t, r, a, i, o), qe.range(t, r, a, i, o));
  }
  n(i);
}, GA = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ht(r) && !t.required)
      return n();
    qe.required(t, r, a, i, o), r !== void 0 && qe.type(t, r, a, i, o);
  }
  n(i);
}, XA = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ht(r) && !t.required)
      return n();
    qe.required(t, r, a, i, o), Ht(r) || qe.type(t, r, a, i, o);
  }
  n(i);
}, YA = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ht(r) && !t.required)
      return n();
    qe.required(t, r, a, i, o), r !== void 0 && (qe.type(t, r, a, i, o), qe.range(t, r, a, i, o));
  }
  n(i);
}, ZA = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ht(r) && !t.required)
      return n();
    qe.required(t, r, a, i, o), r !== void 0 && (qe.type(t, r, a, i, o), qe.range(t, r, a, i, o));
  }
  n(i);
}, QA = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (r == null && !t.required)
      return n();
    qe.required(t, r, a, i, o, "array"), r != null && (qe.type(t, r, a, i, o), qe.range(t, r, a, i, o));
  }
  n(i);
}, JA = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ht(r) && !t.required)
      return n();
    qe.required(t, r, a, i, o), r !== void 0 && qe.type(t, r, a, i, o);
  }
  n(i);
}, eB = "enum", tB = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ht(r) && !t.required)
      return n();
    qe.required(t, r, a, i, o), r !== void 0 && qe[eB](t, r, a, i, o);
  }
  n(i);
}, rB = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ht(r, "string") && !t.required)
      return n();
    qe.required(t, r, a, i, o), Ht(r, "string") || qe.pattern(t, r, a, i, o);
  }
  n(i);
}, nB = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ht(r, "date") && !t.required)
      return n();
    if (qe.required(t, r, a, i, o), !Ht(r, "date")) {
      var u;
      r instanceof Date ? u = r : u = new Date(r), qe.type(t, u, a, i, o), u && qe.range(t, u.getTime(), a, i, o);
    }
  }
  n(i);
}, aB = function(t, r, n, a, o) {
  var i = [], s = Array.isArray(r) ? "array" : typeof r;
  qe.required(t, r, a, i, o, s), n(i);
}, ku = function(t, r, n, a, o) {
  var i = t.type, s = [], u = t.required || !t.required && a.hasOwnProperty(t.field);
  if (u) {
    if (Ht(r, i) && !t.required)
      return n();
    qe.required(t, r, a, s, o, i), Ht(r, i) || qe.type(t, r, a, s, o);
  }
  n(s);
}, oB = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ht(r) && !t.required)
      return n();
    qe.required(t, r, a, i, o);
  }
  n(i);
}, zo = {
  string: KA,
  method: UA,
  number: qA,
  boolean: GA,
  regexp: XA,
  integer: YA,
  float: ZA,
  array: QA,
  object: JA,
  enum: tB,
  pattern: rB,
  date: nB,
  url: ku,
  hex: ku,
  email: ku,
  required: aB,
  any: oB
};
function Ll() {
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
var zl = Ll(), gi = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = zl, this.define(r);
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
    return n && (this._messages = Ov(Ll(), n)), this._messages;
  }, t.validate = function(n, a, o) {
    var i = this;
    a === void 0 && (a = {}), o === void 0 && (o = function() {
    });
    var s = n, u = a, l = o;
    if (typeof u == "function" && (l = u, u = {}), !this.rules || Object.keys(this.rules).length === 0)
      return l && l(null, s), Promise.resolve(s);
    function c(f) {
      var m = [], b = {};
      function C(D) {
        if (Array.isArray(D)) {
          var w;
          m = (w = m).concat.apply(w, D);
        } else
          m.push(D);
      }
      for (var E = 0; E < f.length; E++)
        C(f[E]);
      m.length ? (b = _l(m), l(m, b)) : l(null, s);
    }
    if (u.messages) {
      var d = this.messages();
      d === zl && (d = Ll()), Ov(d, u.messages), u.messages = d;
    } else
      u.messages = this.messages();
    var v = {}, p = u.keys || Object.keys(this.rules);
    p.forEach(function(f) {
      var m = i.rules[f], b = s[f];
      m.forEach(function(C) {
        var E = C;
        typeof E.transform == "function" && (s === n && (s = sa({}, s)), b = s[f] = E.transform(b)), typeof E == "function" ? E = {
          validator: E
        } : E = sa({}, E), E.validator = i.getValidationMethod(E), E.validator && (E.field = f, E.fullField = E.fullField || f, E.type = i.getType(E), v[f] = v[f] || [], v[f].push({
          rule: E,
          value: b,
          source: s,
          field: f
        }));
      });
    });
    var h = {};
    return MA(v, u, function(f, m) {
      var b = f.rule, C = (b.type === "object" || b.type === "array") && (typeof b.fields == "object" || typeof b.defaultField == "object");
      C = C && (b.required || !b.required && f.value), b.field = f.field;
      function E(S, O) {
        return sa({}, O, {
          fullField: b.fullField + "." + S,
          fullFields: b.fullFields ? [].concat(b.fullFields, [S]) : [S]
        });
      }
      function D(S) {
        S === void 0 && (S = []);
        var O = Array.isArray(S) ? S : [S];
        !u.suppressWarning && O.length && e.warning("async-validator:", O), O.length && b.message !== void 0 && (O = [].concat(b.message));
        var B = O.map(Sv(b, s));
        if (u.first && B.length)
          return h[b.field] = 1, m(B);
        if (!C)
          m(B);
        else {
          if (b.required && !f.value)
            return b.message !== void 0 ? B = [].concat(b.message).map(Sv(b, s)) : u.error && (B = [u.error(b, xr(u.messages.required, b.field))]), m(B);
          var x = {};
          b.defaultField && Object.keys(f.value).map(function(N) {
            x[N] = b.defaultField;
          }), x = sa({}, x, f.rule.fields);
          var F = {};
          Object.keys(x).forEach(function(N) {
            var P = x[N], I = Array.isArray(P) ? P : [P];
            F[N] = I.map(E.bind(null, N));
          });
          var _ = new e(F);
          _.messages(u.messages), f.rule.options && (f.rule.options.messages = u.messages, f.rule.options.error = u.error), _.validate(f.value, f.rule.options || u, function(N) {
            var P = [];
            B && B.length && P.push.apply(P, B), N && N.length && P.push.apply(P, N), m(P.length ? P : null);
          });
        }
      }
      var w;
      if (b.asyncValidator)
        w = b.asyncValidator(b, f.value, D, f.source, u);
      else if (b.validator) {
        try {
          w = b.validator(b, f.value, D, f.source, u);
        } catch (S) {
          console.error == null || console.error(S), u.suppressValidatorError || setTimeout(function() {
            throw S;
          }, 0), D(S.message);
        }
        w === !0 ? D() : w === !1 ? D(typeof b.message == "function" ? b.message(b.fullField || b.field) : b.message || (b.fullField || b.field) + " fails") : w instanceof Array ? D(w) : w instanceof Error && D(w.message);
      }
      w && w.then && w.then(function() {
        return D();
      }, function(S) {
        return D(S);
      });
    }, function(f) {
      c(f);
    }, s);
  }, t.getType = function(n) {
    if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !zo.hasOwnProperty(n.type))
      throw new Error(xr("Unknown rule type %s", n.type));
    return n.type || "string";
  }, t.getValidationMethod = function(n) {
    if (typeof n.validator == "function")
      return n.validator;
    var a = Object.keys(n), o = a.indexOf("message");
    return o !== -1 && a.splice(o, 1), a.length === 1 && a[0] === "required" ? zo.required : zo[this.getType(n)] || void 0;
  }, e;
}();
gi.register = function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  zo[t] = r;
};
gi.warning = Zh;
gi.messages = zl;
gi.validators = zo;
var Dr = "'${name}' is not a valid ${type}", Jh = {
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
    string: Dr,
    method: Dr,
    array: Dr,
    object: Dr,
    number: Dr,
    date: Dr,
    boolean: Dr,
    integer: Dr,
    float: Dr,
    regexp: Dr,
    email: Dr,
    url: Dr,
    hex: Dr
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
}, Av = gi;
function iB(e, t) {
  return e.replace(/\$\{\w+\}/g, function(r) {
    var n = r.slice(2, -1);
    return t[n];
  });
}
var Bv = "CODE_LOGIC_ERROR";
function Vl(e, t, r, n, a) {
  return Hl.apply(this, arguments);
}
function Hl() {
  return Hl = Ea(/* @__PURE__ */ cr().mark(function e(t, r, n, a, o) {
    var i, s, u, l, c, d, v, p, h;
    return cr().wrap(function(m) {
      for (; ; )
        switch (m.prev = m.next) {
          case 0:
            return i = Z({}, n), delete i.ruleIndex, Av.warning = function() {
            }, i.validator && (s = i.validator, i.validator = function() {
              try {
                return s.apply(void 0, arguments);
              } catch (b) {
                return console.error(b), Promise.reject(Bv);
              }
            }), u = null, i && i.type === "array" && i.defaultField && (u = i.defaultField, delete i.defaultField), l = new Av(W({}, t, [i])), c = Ka(Jh, a.validateMessages), l.messages(c), d = [], m.prev = 10, m.next = 13, Promise.resolve(l.validate(W({}, t, r), Z({}, a)));
          case 13:
            m.next = 18;
            break;
          case 15:
            m.prev = 15, m.t0 = m.catch(10), m.t0.errors && (d = m.t0.errors.map(function(b, C) {
              var E = b.message, D = E === Bv ? c.default : E;
              return /* @__PURE__ */ g.isValidElement(D) ? (
                // Wrap ReactNode with `key`
                /* @__PURE__ */ g.cloneElement(D, {
                  key: "error_".concat(C)
                })
              ) : D;
            }));
          case 18:
            if (!(!d.length && u)) {
              m.next = 23;
              break;
            }
            return m.next = 21, Promise.all(r.map(function(b, C) {
              return Vl("".concat(t, ".").concat(C), b, u, a, o);
            }));
          case 21:
            return v = m.sent, m.abrupt("return", v.reduce(function(b, C) {
              return [].concat(Be(b), Be(C));
            }, []));
          case 23:
            return p = Z(Z({}, n), {}, {
              name: t,
              enum: (n.enum || []).join(", ")
            }, o), h = d.map(function(b) {
              return typeof b == "string" ? iB(b, p) : b;
            }), m.abrupt("return", h);
          case 26:
          case "end":
            return m.stop();
        }
    }, e, null, [[10, 15]]);
  })), Hl.apply(this, arguments);
}
function sB(e, t, r, n, a, o) {
  var i = e.join("."), s = r.map(function(c, d) {
    var v = c.validator, p = Z(Z({}, c), {}, {
      ruleIndex: d
    });
    return v && (p.validator = function(h, f, m) {
      var b = !1, C = function() {
        for (var w = arguments.length, S = new Array(w), O = 0; O < w; O++)
          S[O] = arguments[O];
        Promise.resolve().then(function() {
          dt(!b, "Your validator function has already return a promise. `callback` will be ignored."), b || m.apply(void 0, S);
        });
      }, E = v(h, f, C);
      b = E && typeof E.then == "function" && typeof E.catch == "function", dt(b, "`callback` is deprecated. Please return a promise instead."), b && E.then(function() {
        m();
      }).catch(function(D) {
        m(D || " ");
      });
    }), p;
  }).sort(function(c, d) {
    var v = c.warningOnly, p = c.ruleIndex, h = d.warningOnly, f = d.ruleIndex;
    return !!v == !!h ? p - f : v ? 1 : -1;
  }), u;
  if (a === !0)
    u = new Promise(/* @__PURE__ */ function() {
      var c = Ea(/* @__PURE__ */ cr().mark(function d(v, p) {
        var h, f, m;
        return cr().wrap(function(C) {
          for (; ; )
            switch (C.prev = C.next) {
              case 0:
                h = 0;
              case 1:
                if (!(h < s.length)) {
                  C.next = 12;
                  break;
                }
                return f = s[h], C.next = 5, Vl(i, t, f, n, o);
              case 5:
                if (m = C.sent, !m.length) {
                  C.next = 9;
                  break;
                }
                return p([{
                  errors: m,
                  rule: f
                }]), C.abrupt("return");
              case 9:
                h += 1, C.next = 1;
                break;
              case 12:
                v([]);
              case 13:
              case "end":
                return C.stop();
            }
        }, d);
      }));
      return function(d, v) {
        return c.apply(this, arguments);
      };
    }());
  else {
    var l = s.map(function(c) {
      return Vl(i, t, c, n, o).then(function(d) {
        return {
          errors: d,
          rule: c
        };
      });
    });
    u = (a ? lB(l) : uB(l)).then(function(c) {
      return Promise.reject(c);
    });
  }
  return u.catch(function(c) {
    return c;
  }), u;
}
function uB(e) {
  return Wl.apply(this, arguments);
}
function Wl() {
  return Wl = Ea(/* @__PURE__ */ cr().mark(function e(t) {
    return cr().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.all(t).then(function(a) {
              var o, i = (o = []).concat.apply(o, Be(a));
              return i;
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), Wl.apply(this, arguments);
}
function lB(e) {
  return Kl.apply(this, arguments);
}
function Kl() {
  return Kl = Ea(/* @__PURE__ */ cr().mark(function e(t) {
    var r;
    return cr().wrap(function(a) {
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
  })), Kl.apply(this, arguments);
}
function Tt(e) {
  return Ml(e);
}
function Fv(e, t) {
  var r = {};
  return t.forEach(function(n) {
    var a = an(e, n);
    r = Vr(r, n, a);
  }), r;
}
function Za(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(n) {
    return ep(t, n, r);
  });
}
function ep(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !r && e.length !== t.length ? !1 : t.every(function(n, a) {
    return e[a] === n;
  });
}
function cB(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || it(e) !== "object" || it(t) !== "object")
    return !1;
  var r = Object.keys(e), n = Object.keys(t), a = new Set([].concat(r, n));
  return Be(a).every(function(o) {
    var i = e[o], s = t[o];
    return typeof i == "function" && typeof s == "function" ? !0 : i === s;
  });
}
function fB(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && it(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function Pv(e, t, r) {
  var n = e.length;
  if (t < 0 || t >= n || r < 0 || r >= n)
    return e;
  var a = e[t], o = t - r;
  return o > 0 ? [].concat(Be(e.slice(0, r)), [a], Be(e.slice(r, t)), Be(e.slice(t + 1, n))) : o < 0 ? [].concat(Be(e.slice(0, t)), Be(e.slice(t + 1, r + 1)), [a], Be(e.slice(r + 1, n))) : e;
}
var dB = ["name"], $r = [];
function $v(e, t, r, n, a, o) {
  return typeof e == "function" ? e(t, r, "source" in o ? {
    source: o.source
  } : {}) : n !== a;
}
var Hc = /* @__PURE__ */ function(e) {
  ba(r, e);
  var t = ci(r);
  function r(n) {
    var a;
    if (br(this, r), a = t.call(this, n), W(Je(a), "state", {
      resetCount: 0
    }), W(Je(a), "cancelRegisterFunc", null), W(Je(a), "mounted", !1), W(Je(a), "touched", !1), W(Je(a), "dirty", !1), W(Je(a), "validatePromise", void 0), W(Je(a), "prevValidating", void 0), W(Je(a), "errors", $r), W(Je(a), "warnings", $r), W(Je(a), "cancelRegister", function() {
      var u = a.props, l = u.preserve, c = u.isListField, d = u.name;
      a.cancelRegisterFunc && a.cancelRegisterFunc(c, l, Tt(d)), a.cancelRegisterFunc = null;
    }), W(Je(a), "getNamePath", function() {
      var u = a.props, l = u.name, c = u.fieldContext, d = c.prefixName, v = d === void 0 ? [] : d;
      return l !== void 0 ? [].concat(Be(v), Be(l)) : [];
    }), W(Je(a), "getRules", function() {
      var u = a.props, l = u.rules, c = l === void 0 ? [] : l, d = u.fieldContext;
      return c.map(function(v) {
        return typeof v == "function" ? v(d) : v;
      });
    }), W(Je(a), "refresh", function() {
      a.mounted && a.setState(function(u) {
        var l = u.resetCount;
        return {
          resetCount: l + 1
        };
      });
    }), W(Je(a), "metaCache", null), W(Je(a), "triggerMetaEvent", function(u) {
      var l = a.props.onMetaChange;
      if (l) {
        var c = Z(Z({}, a.getMeta()), {}, {
          destroy: u
        });
        no(a.metaCache, c) || l(c), a.metaCache = c;
      } else
        a.metaCache = null;
    }), W(Je(a), "onStoreChange", function(u, l, c) {
      var d = a.props, v = d.shouldUpdate, p = d.dependencies, h = p === void 0 ? [] : p, f = d.onReset, m = c.store, b = a.getNamePath(), C = a.getValue(u), E = a.getValue(m), D = l && Za(l, b);
      switch (c.type === "valueUpdate" && c.source === "external" && C !== E && (a.touched = !0, a.dirty = !0, a.validatePromise = null, a.errors = $r, a.warnings = $r, a.triggerMetaEvent()), c.type) {
        case "reset":
          if (!l || D) {
            a.touched = !1, a.dirty = !1, a.validatePromise = void 0, a.errors = $r, a.warnings = $r, a.triggerMetaEvent(), f == null || f(), a.refresh();
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
          var w = c.data;
          if (D) {
            "touched" in w && (a.touched = w.touched), "validating" in w && !("originRCField" in w) && (a.validatePromise = w.validating ? Promise.resolve([]) : null), "errors" in w && (a.errors = w.errors || $r), "warnings" in w && (a.warnings = w.warnings || $r), a.dirty = !0, a.triggerMetaEvent(), a.reRender();
            return;
          } else if ("value" in w && Za(l, b, !0)) {
            a.reRender();
            return;
          }
          if (v && !b.length && $v(v, u, m, C, E, c)) {
            a.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var S = h.map(Tt);
          if (S.some(function(O) {
            return Za(c.relatedFields, O);
          })) {
            a.reRender();
            return;
          }
          break;
        }
        default:
          if (D || (!h.length || b.length || v) && $v(v, u, m, C, E, c)) {
            a.reRender();
            return;
          }
          break;
      }
      v === !0 && a.reRender();
    }), W(Je(a), "validateRules", function(u) {
      var l = a.getNamePath(), c = a.getValue(), d = u || {}, v = d.triggerName, p = d.validateOnly, h = p === void 0 ? !1 : p, f = Promise.resolve().then(/* @__PURE__ */ Ea(/* @__PURE__ */ cr().mark(function m() {
        var b, C, E, D, w, S, O;
        return cr().wrap(function(x) {
          for (; ; )
            switch (x.prev = x.next) {
              case 0:
                if (a.mounted) {
                  x.next = 2;
                  break;
                }
                return x.abrupt("return", []);
              case 2:
                if (b = a.props, C = b.validateFirst, E = C === void 0 ? !1 : C, D = b.messageVariables, w = b.validateDebounce, S = a.getRules(), v && (S = S.filter(function(F) {
                  return F;
                }).filter(function(F) {
                  var _ = F.validateTrigger;
                  if (!_)
                    return !0;
                  var N = Ml(_);
                  return N.includes(v);
                })), !(w && v)) {
                  x.next = 10;
                  break;
                }
                return x.next = 8, new Promise(function(F) {
                  setTimeout(F, w);
                });
              case 8:
                if (a.validatePromise === f) {
                  x.next = 10;
                  break;
                }
                return x.abrupt("return", []);
              case 10:
                return O = sB(l, c, S, u, E, D), O.catch(function(F) {
                  return F;
                }).then(function() {
                  var F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $r;
                  if (a.validatePromise === f) {
                    var _;
                    a.validatePromise = null;
                    var N = [], P = [];
                    (_ = F.forEach) === null || _ === void 0 || _.call(F, function(I) {
                      var T = I.rule.warningOnly, k = I.errors, A = k === void 0 ? $r : k;
                      T ? P.push.apply(P, Be(A)) : N.push.apply(N, Be(A));
                    }), a.errors = N, a.warnings = P, a.triggerMetaEvent(), a.reRender();
                  }
                }), x.abrupt("return", O);
              case 13:
              case "end":
                return x.stop();
            }
        }, m);
      })));
      return h || (a.validatePromise = f, a.dirty = !0, a.errors = $r, a.warnings = $r, a.triggerMetaEvent(), a.reRender()), f;
    }), W(Je(a), "isFieldValidating", function() {
      return !!a.validatePromise;
    }), W(Je(a), "isFieldTouched", function() {
      return a.touched;
    }), W(Je(a), "isFieldDirty", function() {
      if (a.dirty || a.props.initialValue !== void 0)
        return !0;
      var u = a.props.fieldContext, l = u.getInternalHooks(ia), c = l.getInitialValue;
      return c(a.getNamePath()) !== void 0;
    }), W(Je(a), "getErrors", function() {
      return a.errors;
    }), W(Je(a), "getWarnings", function() {
      return a.warnings;
    }), W(Je(a), "isListField", function() {
      return a.props.isListField;
    }), W(Je(a), "isList", function() {
      return a.props.isList;
    }), W(Je(a), "isPreserve", function() {
      return a.props.preserve;
    }), W(Je(a), "getMeta", function() {
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
    }), W(Je(a), "getOnlyChild", function(u) {
      if (typeof u == "function") {
        var l = a.getMeta();
        return Z(Z({}, a.getOnlyChild(u(a.getControlled(), l, a.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var c = Wn(u);
      return c.length !== 1 || !/* @__PURE__ */ g.isValidElement(c[0]) ? {
        child: c,
        isFunction: !1
      } : {
        child: c[0],
        isFunction: !1
      };
    }), W(Je(a), "getValue", function(u) {
      var l = a.props.fieldContext.getFieldsValue, c = a.getNamePath();
      return an(u || l(!0), c);
    }), W(Je(a), "getControlled", function() {
      var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = a.props, c = l.trigger, d = l.validateTrigger, v = l.getValueFromEvent, p = l.normalize, h = l.valuePropName, f = l.getValueProps, m = l.fieldContext, b = d !== void 0 ? d : m.validateTrigger, C = a.getNamePath(), E = m.getInternalHooks, D = m.getFieldsValue, w = E(ia), S = w.dispatch, O = a.getValue(), B = f || function(N) {
        return W({}, h, N);
      }, x = u[c], F = Z(Z({}, u), B(O));
      F[c] = function() {
        a.touched = !0, a.dirty = !0, a.triggerMetaEvent();
        for (var N, P = arguments.length, I = new Array(P), T = 0; T < P; T++)
          I[T] = arguments[T];
        v ? N = v.apply(void 0, I) : N = fB.apply(void 0, [h].concat(I)), p && (N = p(N, O, D(!0))), S({
          type: "updateValue",
          namePath: C,
          value: N
        }), x && x.apply(void 0, I);
      };
      var _ = Ml(b || []);
      return _.forEach(function(N) {
        var P = F[N];
        F[N] = function() {
          P && P.apply(void 0, arguments);
          var I = a.props.rules;
          I && I.length && S({
            type: "validateField",
            namePath: C,
            triggerName: N
          });
        };
      }), F;
    }), n.fieldContext) {
      var o = n.fieldContext.getInternalHooks, i = o(ia), s = i.initEntityValue;
      s(Je(a));
    }
    return a;
  }
  return yr(r, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, o = a.shouldUpdate, i = a.fieldContext;
      if (this.mounted = !0, i) {
        var s = i.getInternalHooks, u = s(ia), l = u.registerField;
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
      return u ? l = s : /* @__PURE__ */ g.isValidElement(s) ? l = /* @__PURE__ */ g.cloneElement(s, this.getControlled(s.props)) : (dt(!s, "`children` of Field is not validate ReactElement."), l = s), /* @__PURE__ */ g.createElement(g.Fragment, {
        key: a
      }, l);
    }
  }]), r;
}(g.Component);
W(Hc, "contextType", uo);
W(Hc, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function tp(e) {
  var t = e.name, r = lt(e, dB), n = g.useContext(uo), a = g.useContext(Es), o = t !== void 0 ? Tt(t) : void 0, i = "keep";
  return r.isListField || (i = "_".concat((o || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && r.isListField && o.length <= 1 && dt(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ g.createElement(Hc, He({
    key: i,
    name: o,
    isListField: !!a
  }, r, {
    fieldContext: n
  }));
}
function vB(e) {
  var t = e.name, r = e.initialValue, n = e.children, a = e.rules, o = e.validateTrigger, i = e.isListField, s = g.useContext(uo), u = g.useContext(Es), l = g.useRef({
    keys: [],
    id: 0
  }), c = l.current, d = g.useMemo(function() {
    var f = Tt(s.prefixName) || [];
    return [].concat(Be(f), Be(Tt(t)));
  }, [s.prefixName, t]), v = g.useMemo(function() {
    return Z(Z({}, s), {}, {
      prefixName: d
    });
  }, [s, d]), p = g.useMemo(function() {
    return {
      getKey: function(m) {
        var b = d.length, C = m[b];
        return [c.keys[C], m.slice(b + 1)];
      }
    };
  }, [d]);
  if (typeof n != "function")
    return dt(!1, "Form.List only accepts function as children."), null;
  var h = function(m, b, C) {
    var E = C.source;
    return E === "internal" ? !1 : m !== b;
  };
  return /* @__PURE__ */ g.createElement(Es.Provider, {
    value: p
  }, /* @__PURE__ */ g.createElement(uo.Provider, {
    value: v
  }, /* @__PURE__ */ g.createElement(tp, {
    name: [],
    shouldUpdate: h,
    rules: a,
    validateTrigger: o,
    initialValue: r,
    isList: !0,
    isListField: i ?? !!u
  }, function(f, m) {
    var b = f.value, C = b === void 0 ? [] : b, E = f.onChange, D = s.getFieldValue, w = function() {
      var x = D(d || []);
      return x || [];
    }, S = {
      add: function(x, F) {
        var _ = w();
        F >= 0 && F <= _.length ? (c.keys = [].concat(Be(c.keys.slice(0, F)), [c.id], Be(c.keys.slice(F))), E([].concat(Be(_.slice(0, F)), [x], Be(_.slice(F))))) : (process.env.NODE_ENV !== "production" && (F < 0 || F > _.length) && dt(!1, "The second parameter of the add function should be a valid positive number."), c.keys = [].concat(Be(c.keys), [c.id]), E([].concat(Be(_), [x]))), c.id += 1;
      },
      remove: function(x) {
        var F = w(), _ = new Set(Array.isArray(x) ? x : [x]);
        _.size <= 0 || (c.keys = c.keys.filter(function(N, P) {
          return !_.has(P);
        }), E(F.filter(function(N, P) {
          return !_.has(P);
        })));
      },
      move: function(x, F) {
        if (x !== F) {
          var _ = w();
          x < 0 || x >= _.length || F < 0 || F >= _.length || (c.keys = Pv(c.keys, x, F), E(Pv(_, x, F)));
        }
      }
    }, O = C || [];
    return Array.isArray(O) || (O = [], process.env.NODE_ENV !== "production" && dt(!1, "Current value of '".concat(d.join(" > "), "' is not an array type."))), n(O.map(function(B, x) {
      var F = c.keys[x];
      return F === void 0 && (c.keys[x] = c.id, F = c.keys[x], c.id += 1), {
        name: x,
        key: F,
        isListField: !0
      };
    }), S, m);
  })));
}
function gB(e) {
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
var rp = "__@field_split__";
function _u(e) {
  return e.map(function(t) {
    return "".concat(it(t), ":").concat(t);
  }).join(rp);
}
var Ra = /* @__PURE__ */ function() {
  function e() {
    br(this, e), W(this, "kvs", /* @__PURE__ */ new Map());
  }
  return yr(e, [{
    key: "set",
    value: function(r, n) {
      this.kvs.set(_u(r), n);
    }
  }, {
    key: "get",
    value: function(r) {
      return this.kvs.get(_u(r));
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
      this.kvs.delete(_u(r));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(r) {
      return Be(this.kvs.entries()).map(function(n) {
        var a = ae(n, 2), o = a[0], i = a[1], s = o.split(rp);
        return r({
          key: s.map(function(u) {
            var l = u.match(/^([^:]*):(.*)$/), c = ae(l, 3), d = c[1], v = c[2];
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
}(), mB = ["name"], hB = /* @__PURE__ */ yr(function e(t) {
  var r = this;
  br(this, e), W(this, "formHooked", !1), W(this, "forceRootUpdate", void 0), W(this, "subscribable", !0), W(this, "store", {}), W(this, "fieldEntities", []), W(this, "initialValues", {}), W(this, "callbacks", {}), W(this, "validateMessages", null), W(this, "preserve", null), W(this, "lastValidatePromise", null), W(this, "getForm", function() {
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
    return n === ia ? (r.formHooked = !0, {
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
    }) : (dt(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), W(this, "useSubscribe", function(n) {
    r.subscribable = n;
  }), W(this, "prevWithoutPreserves", null), W(this, "setInitialValues", function(n, a) {
    if (r.initialValues = n || {}, a) {
      var o, i = Ka(n, r.store);
      (o = r.prevWithoutPreserves) === null || o === void 0 || o.map(function(s) {
        var u = s.key;
        i = Vr(i, u, an(n, u));
      }), r.prevWithoutPreserves = null, r.updateStore(i);
    }
  }), W(this, "destroyForm", function() {
    var n = new Ra();
    r.getFieldEntities(!0).forEach(function(a) {
      r.isMergedPreserve(a.isPreserve()) || n.set(a.getNamePath(), !0);
    }), r.prevWithoutPreserves = n;
  }), W(this, "getInitialValue", function(n) {
    var a = an(r.initialValues, n);
    return n.length ? Ka(a) : a;
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
      r.timeoutId = null, r.formHooked || dt(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), W(this, "updateStore", function(n) {
    r.store = n;
  }), W(this, "getFieldEntities", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? r.fieldEntities.filter(function(a) {
      return a.getNamePath().length;
    }) : r.fieldEntities;
  }), W(this, "getFieldsMap", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, a = new Ra();
    return r.getFieldEntities(n).forEach(function(o) {
      var i = o.getNamePath();
      a.set(i, o);
    }), a;
  }), W(this, "getFieldEntitiesForNamePathList", function(n) {
    if (!n)
      return r.getFieldEntities(!0);
    var a = r.getFieldsMap(!0);
    return n.map(function(o) {
      var i = Tt(o);
      return a.get(i) || {
        INVALIDATE_NAME_PATH: Tt(o)
      };
    });
  }), W(this, "getFieldsValue", function(n, a) {
    r.warningUnhooked();
    var o, i, s;
    if (n === !0 || Array.isArray(n) ? (o = n, i = a) : n && it(n) === "object" && (s = n.strict, i = n.filter), o === !0 && !i)
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
    }), Fv(r.store, l.map(Tt));
  }), W(this, "getFieldValue", function(n) {
    r.warningUnhooked();
    var a = Tt(n);
    return an(r.store, a);
  }), W(this, "getFieldsError", function(n) {
    r.warningUnhooked();
    var a = r.getFieldEntitiesForNamePathList(n);
    return a.map(function(o, i) {
      return o && !("INVALIDATE_NAME_PATH" in o) ? {
        name: o.getNamePath(),
        errors: o.getErrors(),
        warnings: o.getWarnings()
      } : {
        name: Tt(n[i]),
        errors: [],
        warnings: []
      };
    });
  }), W(this, "getFieldError", function(n) {
    r.warningUnhooked();
    var a = Tt(n), o = r.getFieldsError([a])[0];
    return o.errors;
  }), W(this, "getFieldWarning", function(n) {
    r.warningUnhooked();
    var a = Tt(n), o = r.getFieldsError([a])[0];
    return o.warnings;
  }), W(this, "isFieldsTouched", function() {
    r.warningUnhooked();
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
      a[o] = arguments[o];
    var i = a[0], s = a[1], u, l = !1;
    a.length === 0 ? u = null : a.length === 1 ? Array.isArray(i) ? (u = i.map(Tt), l = !1) : (u = null, l = i) : (u = i.map(Tt), l = s);
    var c = r.getFieldEntities(!0), d = function(m) {
      return m.isFieldTouched();
    };
    if (!u)
      return l ? c.every(d) : c.some(d);
    var v = new Ra();
    u.forEach(function(f) {
      v.set(f, []);
    }), c.forEach(function(f) {
      var m = f.getNamePath();
      u.forEach(function(b) {
        b.every(function(C, E) {
          return m[E] === C;
        }) && v.update(b, function(C) {
          return [].concat(Be(C), [f]);
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
  }), W(this, "isFieldTouched", function(n) {
    return r.warningUnhooked(), r.isFieldsTouched([n]);
  }), W(this, "isFieldsValidating", function(n) {
    r.warningUnhooked();
    var a = r.getFieldEntities();
    if (!n)
      return a.some(function(i) {
        return i.isFieldValidating();
      });
    var o = n.map(Tt);
    return a.some(function(i) {
      var s = i.getNamePath();
      return Za(o, s) && i.isFieldValidating();
    });
  }), W(this, "isFieldValidating", function(n) {
    return r.warningUnhooked(), r.isFieldsValidating([n]);
  }), W(this, "resetWithFieldInitialValue", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = new Ra(), o = r.getFieldEntities(!0);
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
            dt(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var h = a.get(v);
            if (h && h.size > 1)
              dt(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (h) {
              var f = r.getFieldValue(v), m = c.isListField();
              !m && (!n.skipExist || f === void 0) && r.updateStore(Vr(r.store, v, Be(h)[0].value));
            }
          }
        }
      });
    }, s;
    n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(u) {
      var l = a.get(u);
      if (l) {
        var c;
        (c = s).push.apply(c, Be(Be(l).map(function(d) {
          return d.entity;
        })));
      }
    })) : s = o, i(s);
  }), W(this, "resetFields", function(n) {
    r.warningUnhooked();
    var a = r.store;
    if (!n) {
      r.updateStore(Ka(r.initialValues)), r.resetWithFieldInitialValue(), r.notifyObservers(a, null, {
        type: "reset"
      }), r.notifyWatch();
      return;
    }
    var o = n.map(Tt);
    o.forEach(function(i) {
      var s = r.getInitialValue(i);
      r.updateStore(Vr(r.store, i, s));
    }), r.resetWithFieldInitialValue({
      namePathList: o
    }), r.notifyObservers(a, o, {
      type: "reset"
    }), r.notifyWatch(o);
  }), W(this, "setFields", function(n) {
    r.warningUnhooked();
    var a = r.store, o = [];
    n.forEach(function(i) {
      var s = i.name, u = lt(i, mB), l = Tt(s);
      o.push(l), "value" in u && r.updateStore(Vr(r.store, l, u.value)), r.notifyObservers(a, [l], {
        type: "setField",
        data: i
      });
    }), r.notifyWatch(o);
  }), W(this, "getFields", function() {
    var n = r.getFieldEntities(!0), a = n.map(function(o) {
      var i = o.getNamePath(), s = o.getMeta(), u = Z(Z({}, s), {}, {
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
      var o = n.getNamePath(), i = an(r.store, o);
      i === void 0 && r.updateStore(Vr(r.store, o, a));
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
            !ep(d.getNamePath(), a)
          );
        })) {
          var c = r.store;
          r.updateStore(Vr(c, a, l, !0)), r.notifyObservers(c, [a], {
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
      var i = Z(Z({}, o), {}, {
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
      relatedFields: [a].concat(Be(o))
    }), o;
  }), W(this, "updateValue", function(n, a) {
    var o = Tt(n), i = r.store;
    r.updateStore(Vr(r.store, o, a)), r.notifyObservers(i, [o], {
      type: "valueUpdate",
      source: "internal"
    }), r.notifyWatch([o]);
    var s = r.triggerDependenciesUpdate(i, o), u = r.callbacks.onValuesChange;
    if (u) {
      var l = Fv(r.store, [o]);
      u(l, r.getFieldsValue());
    }
    r.triggerOnFieldsChange([o].concat(Be(s)));
  }), W(this, "setFieldsValue", function(n) {
    r.warningUnhooked();
    var a = r.store;
    if (n) {
      var o = Ka(r.store, n);
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
    var a = /* @__PURE__ */ new Set(), o = [], i = new Ra();
    r.getFieldEntities().forEach(function(u) {
      var l = u.props.dependencies;
      (l || []).forEach(function(c) {
        var d = Tt(c);
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
  }), W(this, "triggerOnFieldsChange", function(n, a) {
    var o = r.callbacks.onFieldsChange;
    if (o) {
      var i = r.getFields();
      if (a) {
        var s = new Ra();
        a.forEach(function(l) {
          var c = l.name, d = l.errors;
          s.set(c, d);
        }), i.forEach(function(l) {
          l.errors = s.get(l.name) || l.errors;
        });
      }
      var u = i.filter(function(l) {
        var c = l.name;
        return Za(n, c);
      });
      u.length && o(u, i);
    }
  }), W(this, "validateFields", function(n, a) {
    r.warningUnhooked();
    var o, i;
    Array.isArray(n) || typeof n == "string" || typeof a == "string" ? (o = n, i = a) : i = n;
    var s = !!o, u = s ? o.map(Tt) : [], l = [], c = String(Date.now()), d = /* @__PURE__ */ new Set(), v = i || {}, p = v.recursive, h = v.dirty;
    r.getFieldEntities(!0).forEach(function(C) {
      if (s || u.push(C.getNamePath()), !(!C.props.rules || !C.props.rules.length) && !(h && !C.isFieldDirty())) {
        var E = C.getNamePath();
        if (d.add(E.join(c)), !s || Za(u, E, p)) {
          var D = C.validateRules(Z({
            validateMessages: Z(Z({}, Jh), r.validateMessages)
          }, i));
          l.push(D.then(function() {
            return {
              name: E,
              errors: [],
              warnings: []
            };
          }).catch(function(w) {
            var S, O = [], B = [];
            return (S = w.forEach) === null || S === void 0 || S.call(w, function(x) {
              var F = x.rule.warningOnly, _ = x.errors;
              F ? B.push.apply(B, Be(_)) : O.push.apply(O, Be(_));
            }), O.length ? Promise.reject({
              name: E,
              errors: O,
              warnings: B
            }) : {
              name: E,
              errors: O,
              warnings: B
            };
          }));
        }
      }
    });
    var f = gB(l);
    r.lastValidatePromise = f, f.catch(function(C) {
      return C;
    }).then(function(C) {
      var E = C.map(function(D) {
        var w = D.name;
        return w;
      });
      r.notifyObservers(r.store, E, {
        type: "validateFinish"
      }), r.triggerOnFieldsChange(E, C);
    });
    var m = f.then(function() {
      return r.lastValidatePromise === f ? Promise.resolve(r.getFieldsValue(u)) : Promise.reject([]);
    }).catch(function(C) {
      var E = C.filter(function(D) {
        return D && D.errors.length;
      });
      return Promise.reject({
        values: r.getFieldsValue(u),
        errorFields: E,
        outOfDate: r.lastValidatePromise !== f
      });
    });
    m.catch(function(C) {
      return C;
    });
    var b = u.filter(function(C) {
      return d.has(C.join(c));
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
function np(e) {
  var t = g.useRef(), r = g.useState({}), n = ae(r, 2), a = n[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var o = function() {
        a({});
      }, i = new hB(o);
      t.current = i.getForm();
    }
  return [t.current];
}
var Ul = /* @__PURE__ */ g.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), pB = function(t) {
  var r = t.validateMessages, n = t.onFormChange, a = t.onFormFinish, o = t.children, i = g.useContext(Ul), s = g.useRef({});
  return /* @__PURE__ */ g.createElement(Ul.Provider, {
    value: Z(Z({}, i), {}, {
      validateMessages: Z(Z({}, i.validateMessages), r),
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
        l && (s.current = Z(Z({}, s.current), {}, W({}, l, c))), i.registerForm(l, c);
      },
      unregisterForm: function(l) {
        var c = Z({}, s.current);
        delete c[l], s.current = c, i.unregisterForm(l);
      }
    })
  }, o);
}, bB = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"], yB = function(t, r) {
  var n = t.name, a = t.initialValues, o = t.fields, i = t.form, s = t.preserve, u = t.children, l = t.component, c = l === void 0 ? "form" : l, d = t.validateMessages, v = t.validateTrigger, p = v === void 0 ? "onChange" : v, h = t.onValuesChange, f = t.onFieldsChange, m = t.onFinish, b = t.onFinishFailed, C = lt(t, bB), E = g.useContext(Ul), D = np(i), w = ae(D, 1), S = w[0], O = S.getInternalHooks(ia), B = O.useSubscribe, x = O.setInitialValues, F = O.setCallbacks, _ = O.setValidateMessages, N = O.setPreserve, P = O.destroyForm;
  g.useImperativeHandle(r, function() {
    return S;
  }), g.useEffect(function() {
    return E.registerForm(n, S), function() {
      E.unregisterForm(n);
    };
  }, [E, S, n]), _(Z(Z({}, E.validateMessages), d)), F({
    onValuesChange: h,
    onFieldsChange: function(G) {
      if (E.triggerFormChange(n, G), f) {
        for (var Q = arguments.length, R = new Array(Q > 1 ? Q - 1 : 0), H = 1; H < Q; H++)
          R[H - 1] = arguments[H];
        f.apply(void 0, [G].concat(R));
      }
    },
    onFinish: function(G) {
      E.triggerFormFinish(n, G), m && m(G);
    },
    onFinishFailed: b
  }), N(s);
  var I = g.useRef(null);
  x(a, !I.current), I.current || (I.current = !0), g.useEffect(
    function() {
      return P;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var T, k = typeof u == "function";
  if (k) {
    var A = S.getFieldsValue(!0);
    T = u(A, S);
  } else
    T = u;
  B(!k);
  var M = g.useRef();
  g.useEffect(function() {
    cB(M.current || [], o || []) || S.setFields(o || []), M.current = o;
  }, [o, S]);
  var V = g.useMemo(function() {
    return Z(Z({}, S), {}, {
      validateTrigger: p
    });
  }, [S, p]), z = /* @__PURE__ */ g.createElement(Es.Provider, {
    value: null
  }, /* @__PURE__ */ g.createElement(uo.Provider, {
    value: V
  }, T));
  return c === !1 ? z : /* @__PURE__ */ g.createElement(c, He({}, C, {
    onSubmit: function(G) {
      G.preventDefault(), G.stopPropagation(), S.submit();
    },
    onReset: function(G) {
      var Q;
      G.preventDefault(), S.resetFields(), (Q = C.onReset) === null || Q === void 0 || Q.call(C, G);
    }
  }), z);
};
function Rv(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var CB = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), r = Ge(t);
  dt(r.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function EB() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], a = t[1], o = a === void 0 ? {} : a, i = BA(o) ? {
    form: o
  } : o, s = i.form, u = ir(), l = ae(u, 2), c = l[0], d = l[1], v = lr(function() {
    return Rv(c);
  }, [c]), p = Ge(v);
  p.current = v;
  var h = Ut(uo), f = s || h, m = f && f._init;
  process.env.NODE_ENV !== "production" && dt(t.length === 2 ? s ? m : !0 : m, "useWatch requires a form instance since it can not auto detect from context.");
  var b = Tt(n), C = Ge(b);
  return C.current = b, CB(b), jt(
    function() {
      if (m) {
        var E = f.getFieldsValue, D = f.getInternalHooks, w = D(ia), S = w.registerWatch, O = function(_, N) {
          var P = i.preserve ? N : _;
          return typeof n == "function" ? n(P) : an(P, C.current);
        }, B = S(function(F, _) {
          var N = O(F, _), P = Rv(N);
          p.current !== P && (p.current = P, d(N));
        }), x = O(E(), E(!0));
        return c !== x && d(x), B;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [m]
  ), c;
}
var DB = /* @__PURE__ */ g.forwardRef(yB), mi = DB;
mi.FormProvider = pB;
mi.Field = tp;
mi.List = vB;
mi.useForm = np;
mi.useWatch = EB;
const ap = /* @__PURE__ */ g.createContext({});
process.env.NODE_ENV !== "production" && (ap.displayName = "FormItemInputContext");
const wB = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), SB = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Wc = function(e, t, r, n) {
  const o = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]: Object.assign(Object.assign({}, wB(n)), {
      animationPlayState: "paused"
    }),
    [`${o}${e}-leave`]: Object.assign(Object.assign({}, SB(n)), {
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
}, OB = new mt("antMoveDownIn", {
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
}), xB = new mt("antMoveDownOut", {
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
}), AB = new mt("antMoveLeftIn", {
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
}), BB = new mt("antMoveLeftOut", {
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
}), FB = new mt("antMoveRightIn", {
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
}), PB = new mt("antMoveRightOut", {
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
}), $B = new mt("antMoveUpIn", {
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
}), RB = new mt("antMoveUpOut", {
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
}), TB = {
  "move-up": {
    inKeyframes: $B,
    outKeyframes: RB
  },
  "move-down": {
    inKeyframes: OB,
    outKeyframes: xB
  },
  "move-left": {
    inKeyframes: AB,
    outKeyframes: BB
  },
  "move-right": {
    inKeyframes: FB,
    outKeyframes: PB
  }
}, Tv = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = TB[t];
  return [Wc(n, a, o, e.motionDurationMid), {
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
}, op = new mt("antSlideUpIn", {
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
}), ip = new mt("antSlideUpOut", {
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
}), sp = new mt("antSlideDownIn", {
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
}), up = new mt("antSlideDownOut", {
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
}), NB = new mt("antSlideLeftIn", {
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
}), IB = new mt("antSlideLeftOut", {
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
}), MB = new mt("antSlideRightIn", {
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
}), jB = new mt("antSlideRightOut", {
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
}), kB = {
  "slide-up": {
    inKeyframes: op,
    outKeyframes: ip
  },
  "slide-down": {
    inKeyframes: sp,
    outKeyframes: up
  },
  "slide-left": {
    inKeyframes: NB,
    outKeyframes: IB
  },
  "slide-right": {
    inKeyframes: MB,
    outKeyframes: jB
  }
}, Ds = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = kB[t];
  return [Wc(n, a, o, e.motionDurationMid), {
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
}, _B = new mt("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), LB = new mt("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), Nv = new mt("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Iv = new mt("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), zB = new mt("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), VB = new mt("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), HB = new mt("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), WB = new mt("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), KB = new mt("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), UB = new mt("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), qB = new mt("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), GB = new mt("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), XB = {
  zoom: {
    inKeyframes: _B,
    outKeyframes: LB
  },
  "zoom-big": {
    inKeyframes: Nv,
    outKeyframes: Iv
  },
  "zoom-big-fast": {
    inKeyframes: Nv,
    outKeyframes: Iv
  },
  "zoom-left": {
    inKeyframes: HB,
    outKeyframes: WB
  },
  "zoom-right": {
    inKeyframes: KB,
    outKeyframes: UB
  },
  "zoom-up": {
    inKeyframes: zB,
    outKeyframes: VB
  },
  "zoom-down": {
    inKeyframes: qB,
    outKeyframes: GB
  }
}, Kc = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = XB[t];
  return [Wc(n, a, o, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
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
}, YB = (e) => ({
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
function ZB(e) {
  return (t) => /* @__PURE__ */ g.createElement(Fh, {
    theme: {
      token: {
        motion: !1,
        zIndexPopupBase: 0
      }
    }
  }, /* @__PURE__ */ g.createElement(e, Object.assign({}, t)));
}
const QB = (e, t, r, n) => ZB((o) => {
  const {
    prefixCls: i,
    style: s
  } = o, u = g.useRef(null), [l, c] = g.useState(0), [d, v] = g.useState(0), [p, h] = Vn(!1, {
    value: o.open
  }), {
    getPrefixCls: f
  } = g.useContext(kt), m = f(t || "select", i);
  g.useEffect(() => {
    if (h(!0), typeof ResizeObserver < "u") {
      const E = new ResizeObserver((w) => {
        const S = w[0].target;
        c(S.offsetHeight + 8), v(S.offsetWidth);
      }), D = setInterval(() => {
        var w;
        const S = r ? `.${r(m)}` : `.${m}-dropdown`, O = (w = u.current) === null || w === void 0 ? void 0 : w.querySelector(S);
        O && (clearInterval(D), E.observe(O));
      }, 10);
      return () => {
        clearInterval(D), E.disconnect();
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
  const C = {
    paddingBottom: l,
    position: "relative",
    minWidth: d
  };
  return /* @__PURE__ */ g.createElement("div", {
    ref: u,
    style: C
  }, /* @__PURE__ */ g.createElement(e, Object.assign({}, b)));
}), JB = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
};
var eF = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Ta = void 0;
function tF(e, t) {
  var r = e.prefixCls, n = e.invalidate, a = e.item, o = e.renderItem, i = e.responsive, s = e.responsiveDisabled, u = e.registerSize, l = e.itemKey, c = e.className, d = e.style, v = e.children, p = e.display, h = e.order, f = e.component, m = f === void 0 ? "div" : f, b = lt(e, eF), C = i && !p;
  function E(B) {
    u(l, B);
  }
  g.useEffect(function() {
    return function() {
      E(null);
    };
  }, []);
  var D = o && a !== Ta ? o(a) : v, w;
  n || (w = {
    opacity: C ? 0 : 1,
    height: C ? 0 : Ta,
    overflowY: C ? "hidden" : Ta,
    order: i ? h : Ta,
    pointerEvents: C ? "none" : Ta,
    position: C ? "absolute" : Ta
  });
  var S = {};
  C && (S["aria-hidden"] = !0);
  var O = /* @__PURE__ */ g.createElement(m, He({
    className: de(!n && r, c),
    style: Z(Z({}, w), d)
  }, S, b, {
    ref: t
  }), D);
  return i && (O = /* @__PURE__ */ g.createElement(fo, {
    onResize: function(x) {
      var F = x.offsetWidth;
      E(F);
    },
    disabled: s
  }, O)), O;
}
var Vo = /* @__PURE__ */ g.forwardRef(tF);
Vo.displayName = "Item";
function rF(e) {
  if (typeof MessageChannel > "u")
    tr(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function nF() {
  var e = g.useRef(null), t = function(n) {
    e.current || (e.current = [], rF(function() {
      i0(function() {
        e.current.forEach(function(a) {
          a();
        }), e.current = null;
      });
    })), e.current.push(n);
  };
  return t;
}
function Bo(e, t) {
  var r = g.useState(t), n = ae(r, 2), a = n[0], o = n[1], i = Sr(function(s) {
    e(function() {
      o(s);
    });
  });
  return [a, i];
}
var ws = /* @__PURE__ */ ne.createContext(null), aF = ["component"], oF = ["className"], iF = ["className"], sF = function(t, r) {
  var n = g.useContext(ws);
  if (!n) {
    var a = t.component, o = a === void 0 ? "div" : a, i = lt(t, aF);
    return /* @__PURE__ */ g.createElement(o, He({}, i, {
      ref: r
    }));
  }
  var s = n.className, u = lt(n, oF), l = t.className, c = lt(t, iF);
  return /* @__PURE__ */ g.createElement(ws.Provider, {
    value: null
  }, /* @__PURE__ */ g.createElement(Vo, He({
    ref: r,
    className: de(s, l)
  }, u, c)));
}, lp = /* @__PURE__ */ g.forwardRef(sF);
lp.displayName = "RawItem";
var uF = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], cp = "responsive", fp = "invalidate";
function lF(e) {
  return "+ ".concat(e.length, " ...");
}
function cF(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-overflow" : r, a = e.data, o = a === void 0 ? [] : a, i = e.renderItem, s = e.renderRawItem, u = e.itemKey, l = e.itemWidth, c = l === void 0 ? 10 : l, d = e.ssr, v = e.style, p = e.className, h = e.maxCount, f = e.renderRest, m = e.renderRawRest, b = e.suffix, C = e.component, E = C === void 0 ? "div" : C, D = e.itemComponent, w = e.onVisibleChange, S = lt(e, uF), O = d === "full", B = nF(), x = Bo(B, null), F = ae(x, 2), _ = F[0], N = F[1], P = _ || 0, I = Bo(B, /* @__PURE__ */ new Map()), T = ae(I, 2), k = T[0], A = T[1], M = Bo(B, 0), V = ae(M, 2), z = V[0], U = V[1], G = Bo(B, 0), Q = ae(G, 2), R = Q[0], H = Q[1], L = Bo(B, 0), q = ae(L, 2), re = q[0], te = q[1], ue = ir(null), se = ae(ue, 2), ve = se[0], le = se[1], Y = ir(null), me = ae(Y, 2), Ee = me[0], Ae = me[1], $e = g.useMemo(function() {
    return Ee === null && O ? Number.MAX_SAFE_INTEGER : Ee || 0;
  }, [Ee, _]), fe = ir(!1), Oe = ae(fe, 2), ge = Oe[0], pe = Oe[1], he = "".concat(n, "-item"), Fe = Math.max(z, R), Pe = h === cp, Re = o.length && Pe, xt = h === fp, ct = Re || typeof h == "number" && o.length > h, Ve = lr(function() {
    var be = o;
    return Re ? _ === null && O ? be = o : be = o.slice(0, Math.min(o.length, P / c)) : typeof h == "number" && (be = o.slice(0, h)), be;
  }, [o, c, _, h, Re]), tt = lr(function() {
    return Re ? o.slice($e + 1) : o.slice(Ve.length);
  }, [o, Ve, Re, $e]), Xe = Ke(function(be, we) {
    var Ze;
    return typeof u == "function" ? u(be) : (Ze = u && (be == null ? void 0 : be[u])) !== null && Ze !== void 0 ? Ze : we;
  }, [u]), _t = Ke(i || function(be) {
    return be;
  }, [i]);
  function vt(be, we, Ze) {
    Ee === be && (we === void 0 || we === ve) || (Ae(be), Ze || (pe(be < o.length - 1), w == null || w(be)), we !== void 0 && le(we));
  }
  function Nt(be, we) {
    N(we.clientWidth);
  }
  function ht(be, we) {
    A(function(Ze) {
      var Ft = new Map(Ze);
      return we === null ? Ft.delete(be) : Ft.set(be, we), Ft;
    });
  }
  function Ue(be, we) {
    H(we), U(R);
  }
  function rt(be, we) {
    te(we);
  }
  function qt(be) {
    return k.get(Xe(Ve[be], be));
  }
  or(function() {
    if (P && typeof Fe == "number" && Ve) {
      var be = re, we = Ve.length, Ze = we - 1;
      if (!we) {
        vt(0, null);
        return;
      }
      for (var Ft = 0; Ft < we; Ft += 1) {
        var Lt = qt(Ft);
        if (O && (Lt = Lt || 0), Lt === void 0) {
          vt(Ft - 1, void 0, !0);
          break;
        }
        if (be += Lt, // Only one means `totalWidth` is the final width
        Ze === 0 && be <= P || // Last two width will be the final width
        Ft === Ze - 1 && be + qt(Ze) <= P) {
          vt(Ze, null);
          break;
        } else if (be + Fe > P) {
          vt(Ft - 1, be - Lt - re + R);
          break;
        }
      }
      b && qt(0) + re > P && le(null);
    }
  }, [P, k, R, re, Xe, Ve]);
  var Ct = ge && !!tt.length, nt = {};
  ve !== null && Re && (nt = {
    position: "absolute",
    left: ve,
    top: 0
  });
  var Rt = {
    prefixCls: he,
    responsive: Re,
    component: D,
    invalidate: xt
  }, at = s ? function(be, we) {
    var Ze = Xe(be, we);
    return /* @__PURE__ */ g.createElement(ws.Provider, {
      key: Ze,
      value: Z(Z({}, Rt), {}, {
        order: we,
        item: be,
        itemKey: Ze,
        registerSize: ht,
        display: we <= $e
      })
    }, s(be, we));
  } : function(be, we) {
    var Ze = Xe(be, we);
    return /* @__PURE__ */ g.createElement(Vo, He({}, Rt, {
      order: we,
      key: Ze,
      item: be,
      renderItem: _t,
      itemKey: Ze,
      registerSize: ht,
      display: we <= $e
    }));
  }, Dt, Qe = {
    order: Ct ? $e : Number.MAX_SAFE_INTEGER,
    className: "".concat(he, "-rest"),
    registerSize: Ue,
    display: Ct
  };
  if (m)
    m && (Dt = /* @__PURE__ */ g.createElement(ws.Provider, {
      value: Z(Z({}, Rt), Qe)
    }, m(tt)));
  else {
    var De = f || lF;
    Dt = /* @__PURE__ */ g.createElement(Vo, He({}, Rt, Qe), typeof De == "function" ? De(tt) : De);
  }
  var We = /* @__PURE__ */ g.createElement(E, He({
    className: de(!xt && n, p),
    style: v,
    ref: t
  }, S), Ve.map(at), ct ? Dt : null, b && /* @__PURE__ */ g.createElement(Vo, He({}, Rt, {
    responsive: Pe,
    responsiveDisabled: !Re,
    order: $e,
    className: "".concat(he, "-suffix"),
    registerSize: rt,
    display: !0,
    style: nt
  }), b));
  return Pe && (We = /* @__PURE__ */ g.createElement(fo, {
    onResize: Nt,
    disabled: !Re
  }, We)), We;
}
var En = /* @__PURE__ */ g.forwardRef(cF);
En.displayName = "Overflow";
En.Item = lp;
En.RESPONSIVE = cp;
En.INVALIDATE = fp;
function fF(e) {
  var t = e.prefixCls, r = e.align, n = e.arrow, a = e.arrowPos, o = n || {}, i = o.className, s = o.content, u = a.x, l = u === void 0 ? 0 : u, c = a.y, d = c === void 0 ? 0 : c, v = g.useRef();
  if (!r || !r.points)
    return null;
  var p = {
    position: "absolute"
  };
  if (r.autoArrow !== !1) {
    var h = r.points[0], f = r.points[1], m = h[0], b = h[1], C = f[0], E = f[1];
    m === C || !["t", "b"].includes(m) ? p.top = d : m === "t" ? p.top = 0 : p.bottom = 0, b === E || !["l", "r"].includes(b) ? p.left = l : b === "l" ? p.left = 0 : p.right = 0;
  }
  return /* @__PURE__ */ g.createElement("div", {
    ref: v,
    className: de("".concat(t, "-arrow"), i),
    style: p
  }, s);
}
function dF(e) {
  var t = e.prefixCls, r = e.open, n = e.zIndex, a = e.mask, o = e.motion;
  return a ? /* @__PURE__ */ g.createElement(mo, He({}, o, {
    motionAppear: !0,
    visible: r,
    removeOnLeave: !0
  }), function(i) {
    var s = i.className;
    return /* @__PURE__ */ g.createElement("div", {
      style: {
        zIndex: n
      },
      className: de("".concat(t, "-mask"), s)
    });
  }) : null;
}
var dp = /* @__PURE__ */ g.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (dp.displayName = "PopupContent");
var vp = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var r = e.popup, n = e.className, a = e.prefixCls, o = e.style, i = e.target, s = e.onVisibleChanged, u = e.open, l = e.keepDom, c = e.fresh, d = e.onClick, v = e.mask, p = e.arrow, h = e.arrowPos, f = e.align, m = e.motion, b = e.maskMotion, C = e.forceRender, E = e.getPopupContainer, D = e.autoDestroy, w = e.portal, S = e.zIndex, O = e.onMouseEnter, B = e.onMouseLeave, x = e.onPointerEnter, F = e.ready, _ = e.offsetX, N = e.offsetY, P = e.offsetR, I = e.offsetB, T = e.onAlign, k = e.onPrepare, A = e.stretch, M = e.targetWidth, V = e.targetHeight, z = typeof r == "function" ? r() : r, U = u || l, G = (E == null ? void 0 : E.length) > 0, Q = g.useState(!E || !G), R = ae(Q, 2), H = R[0], L = R[1];
  if (or(function() {
    !H && G && i && L(!0);
  }, [H, G, i]), !H)
    return null;
  var q = "auto", re = {
    left: "-1000vw",
    top: "-1000vh",
    right: q,
    bottom: q
  };
  if (F || !u) {
    var te, ue = f.points, se = f.dynamicInset || ((te = f._experimental) === null || te === void 0 ? void 0 : te.dynamicInset), ve = se && ue[0][1] === "r", le = se && ue[0][0] === "b";
    ve ? (re.right = P, re.left = q) : (re.left = _, re.right = q), le ? (re.bottom = I, re.top = q) : (re.top = N, re.bottom = q);
  }
  var Y = {};
  return A && (A.includes("height") && V ? Y.height = V : A.includes("minHeight") && V && (Y.minHeight = V), A.includes("width") && M ? Y.width = M : A.includes("minWidth") && M && (Y.minWidth = M)), u || (Y.pointerEvents = "none"), /* @__PURE__ */ g.createElement(w, {
    open: C || U,
    getContainer: E && function() {
      return E(i);
    },
    autoDestroy: D
  }, /* @__PURE__ */ g.createElement(dF, {
    prefixCls: a,
    open: u,
    zIndex: S,
    mask: v,
    motion: b
  }), /* @__PURE__ */ g.createElement(fo, {
    onResize: T,
    disabled: !u
  }, function(me) {
    return /* @__PURE__ */ g.createElement(mo, He({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: C,
      leavedClassName: "".concat(a, "-hidden")
    }, m, {
      onAppearPrepare: k,
      onEnterPrepare: k,
      visible: u,
      onVisibleChanged: function(Ae) {
        var $e;
        m == null || ($e = m.onVisibleChanged) === null || $e === void 0 || $e.call(m, Ae), s(Ae);
      }
    }), function(Ee, Ae) {
      var $e = Ee.className, fe = Ee.style, Oe = de(a, $e, n);
      return /* @__PURE__ */ g.createElement("div", {
        ref: co(me, t, Ae),
        className: Oe,
        style: Z(Z(Z(Z({
          "--arrow-x": "".concat(h.x || 0, "px"),
          "--arrow-y": "".concat(h.y || 0, "px")
        }, re), Y), fe), {}, {
          boxSizing: "border-box",
          zIndex: S
        }, o),
        onMouseEnter: O,
        onMouseLeave: B,
        onPointerEnter: x,
        onClick: d
      }, p && /* @__PURE__ */ g.createElement(fF, {
        prefixCls: a,
        arrow: p,
        arrowPos: h,
        align: f
      }), /* @__PURE__ */ g.createElement(dp, {
        cache: !u && !c
      }, z));
    });
  }));
});
process.env.NODE_ENV !== "production" && (vp.displayName = "Popup");
var gp = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var r = e.children, n = e.getTriggerDOMNode, a = Gn(r), o = g.useCallback(function(s) {
    Cc(t, n ? n(s) : s);
  }, [n]), i = li(o, r.ref);
  return a ? /* @__PURE__ */ g.cloneElement(r, {
    ref: i
  }) : r;
});
process.env.NODE_ENV !== "production" && (gp.displayName = "TriggerWrapper");
var Mv = /* @__PURE__ */ g.createContext(null);
function jv(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function vF(e, t, r, n) {
  return g.useMemo(function() {
    var a = jv(r ?? t), o = jv(n ?? t), i = new Set(a), s = new Set(o);
    return e && (i.has("hover") && (i.delete("hover"), i.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [i, s];
  }, [e, t, r, n]);
}
function gF() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
  return r ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function mF(e, t, r, n) {
  for (var a = r.points, o = Object.keys(e), i = 0; i < o.length; i += 1) {
    var s, u = o[i];
    if (gF((s = e[u]) === null || s === void 0 ? void 0 : s.points, a, n))
      return "".concat(t, "-placement-").concat(u);
  }
  return "";
}
function kv(e, t, r, n) {
  return t || (r ? {
    motionName: "".concat(e, "-").concat(r)
  } : n ? {
    motionName: n
  } : null);
}
function hi(e) {
  return e.ownerDocument.defaultView;
}
function ql(e) {
  for (var t = [], r = e == null ? void 0 : e.parentElement, n = ["hidden", "scroll", "clip", "auto"]; r; ) {
    var a = hi(r).getComputedStyle(r), o = a.overflowX, i = a.overflowY, s = a.overflow;
    [o, i, s].some(function(u) {
      return n.includes(u);
    }) && t.push(r), r = r.parentElement;
  }
  return t;
}
function oi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function Fo(e) {
  return oi(parseFloat(e), 0);
}
function _v(e, t) {
  var r = Z({}, e);
  return (t || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement || n instanceof HTMLHtmlElement)) {
      var a = hi(n).getComputedStyle(n), o = a.overflow, i = a.overflowClipMargin, s = a.borderTopWidth, u = a.borderBottomWidth, l = a.borderLeftWidth, c = a.borderRightWidth, d = n.getBoundingClientRect(), v = n.offsetHeight, p = n.clientHeight, h = n.offsetWidth, f = n.clientWidth, m = Fo(s), b = Fo(u), C = Fo(l), E = Fo(c), D = oi(Math.round(d.width / h * 1e3) / 1e3), w = oi(Math.round(d.height / v * 1e3) / 1e3), S = (h - f - C - E) * D, O = (v - p - m - b) * w, B = m * w, x = b * w, F = C * D, _ = E * D, N = 0, P = 0;
      if (o === "clip") {
        var I = Fo(i);
        N = I * D, P = I * w;
      }
      var T = d.x + F - N, k = d.y + B - P, A = T + d.width + 2 * N - F - _ - S, M = k + d.height + 2 * P - B - x - O;
      r.left = Math.max(r.left, T), r.top = Math.max(r.top, k), r.right = Math.min(r.right, A), r.bottom = Math.min(r.bottom, M);
    }
  }), r;
}
function Lv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = "".concat(t), n = r.match(/^(.*)\%$/);
  return n ? e * (parseFloat(n[1]) / 100) : parseFloat(r);
}
function zv(e, t) {
  var r = t || [], n = ae(r, 2), a = n[0], o = n[1];
  return [Lv(e.width, a), Lv(e.height, o)];
}
function Vv() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function Na(e, t) {
  var r = t[0], n = t[1], a, o;
  return r === "t" ? o = e.y : r === "b" ? o = e.y + e.height : o = e.y + e.height / 2, n === "l" ? a = e.x : n === "r" ? a = e.x + e.width : a = e.x + e.width / 2, {
    x: a,
    y: o
  };
}
function Tn(e, t) {
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
function hF(e, t, r, n, a, o, i) {
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
  }), u = ae(s, 2), l = u[0], c = u[1], d = g.useRef(0), v = g.useMemo(function() {
    return t ? ql(t) : [];
  }, [t]), p = g.useRef({}), h = function() {
    p.current = {};
  };
  e || h();
  var f = Sr(function() {
    if (t && r && e) {
      let nr = function(fn, Zn) {
        var Aa = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Oe, Ba = z.x + fn, Co = z.y + Zn, Eo = Ba + te, bi = Co + re, nu = Math.max(Ba, Aa.left), au = Math.max(Co, Aa.top), ou = Math.min(Eo, Aa.right), iu = Math.min(bi, Aa.bottom);
        return Math.max(0, (ou - nu) * (iu - au));
      }, xa = function() {
        ee = z.y + De, oe = ee + re, xe = z.x + Qe, _e = xe + te;
      };
      var C, E, D = t, w = D.ownerDocument, S = hi(D), O = S.getComputedStyle(D), B = O.width, x = O.height, F = O.position, _ = D.style.left, N = D.style.top, P = D.style.right, I = D.style.bottom, T = D.style.overflow, k = Z(Z({}, a[n]), o), A = w.createElement("div");
      (C = D.parentElement) === null || C === void 0 || C.appendChild(A), A.style.left = "".concat(D.offsetLeft, "px"), A.style.top = "".concat(D.offsetTop, "px"), A.style.position = F, A.style.height = "".concat(D.offsetHeight, "px"), A.style.width = "".concat(D.offsetWidth, "px"), D.style.left = "0", D.style.top = "0", D.style.right = "auto", D.style.bottom = "auto", D.style.overflow = "hidden";
      var M;
      if (Array.isArray(r))
        M = {
          x: r[0],
          y: r[1],
          width: 0,
          height: 0
        };
      else {
        var V = r.getBoundingClientRect();
        M = {
          x: V.x,
          y: V.y,
          width: V.width,
          height: V.height
        };
      }
      var z = D.getBoundingClientRect(), U = w.documentElement, G = U.clientWidth, Q = U.clientHeight, R = U.scrollWidth, H = U.scrollHeight, L = U.scrollTop, q = U.scrollLeft, re = z.height, te = z.width, ue = M.height, se = M.width, ve = {
        left: 0,
        top: 0,
        right: G,
        bottom: Q
      }, le = {
        left: -q,
        top: -L,
        right: R - q,
        bottom: H - L
      }, Y = k.htmlRegion, me = "visible", Ee = "visibleFirst";
      Y !== "scroll" && Y !== Ee && (Y = me);
      var Ae = Y === Ee, $e = _v(le, v), fe = _v(ve, v), Oe = Y === me ? fe : $e, ge = Ae ? fe : Oe;
      D.style.left = "auto", D.style.top = "auto", D.style.right = "0", D.style.bottom = "0";
      var pe = D.getBoundingClientRect();
      D.style.left = _, D.style.top = N, D.style.right = P, D.style.bottom = I, D.style.overflow = T, (E = D.parentElement) === null || E === void 0 || E.removeChild(A);
      var he = oi(Math.round(te / parseFloat(B) * 1e3) / 1e3), Fe = oi(Math.round(re / parseFloat(x) * 1e3) / 1e3);
      if (he === 0 || Fe === 0 || ds(r) && !kc(r))
        return;
      var Pe = k.offset, Re = k.targetOffset, xt = zv(z, Pe), ct = ae(xt, 2), Ve = ct[0], tt = ct[1], Xe = zv(M, Re), _t = ae(Xe, 2), vt = _t[0], Nt = _t[1];
      M.x -= vt, M.y -= Nt;
      var ht = k.points || [], Ue = ae(ht, 2), rt = Ue[0], qt = Ue[1], Ct = Vv(qt), nt = Vv(rt), Rt = Na(M, Ct), at = Na(z, nt), Dt = Z({}, k), Qe = Rt.x - at.x + Ve, De = Rt.y - at.y + tt, We = nr(Qe, De), be = nr(Qe, De, fe), we = Na(M, ["t", "l"]), Ze = Na(z, ["t", "l"]), Ft = Na(M, ["b", "r"]), Lt = Na(z, ["b", "r"]), At = k.overflow || {}, Yr = At.adjustX, Zr = At.adjustY, Cr = At.shiftX, vr = At.shiftY, $ = function(Zn) {
        return typeof Zn == "boolean" ? Zn : Zn >= 0;
      }, ee, oe, xe, _e;
      xa();
      var Ye = $(Zr), ke = nt[0] === Ct[0];
      if (Ye && nt[0] === "t" && (oe > ge.bottom || p.current.bt)) {
        var Te = De;
        ke ? Te -= re - ue : Te = we.y - Lt.y - tt;
        var bt = nr(Qe, Te), pt = nr(Qe, Te, fe);
        // Of course use larger one
        bt > We || bt === We && (!Ae || // Choose recommend one
        pt >= be) ? (p.current.bt = !0, De = Te, tt = -tt, Dt.points = [Tn(nt, 0), Tn(Ct, 0)]) : p.current.bt = !1;
      }
      if (Ye && nt[0] === "b" && (ee < ge.top || p.current.tb)) {
        var Le = De;
        ke ? Le += re - ue : Le = Ft.y - Ze.y - tt;
        var zt = nr(Qe, Le), Pr = nr(Qe, Le, fe);
        // Of course use larger one
        zt > We || zt === We && (!Ae || // Choose recommend one
        Pr >= be) ? (p.current.tb = !0, De = Le, tt = -tt, Dt.points = [Tn(nt, 0), Tn(Ct, 0)]) : p.current.tb = !1;
      }
      var Qr = $(Yr), It = nt[1] === Ct[1];
      if (Qr && nt[1] === "l" && (_e > ge.right || p.current.rl)) {
        var jr = Qe;
        It ? jr -= te - se : jr = we.x - Lt.x - Ve;
        var Da = nr(jr, De), bo = nr(jr, De, fe);
        // Of course use larger one
        Da > We || Da === We && (!Ae || // Choose recommend one
        bo >= be) ? (p.current.rl = !0, Qe = jr, Ve = -Ve, Dt.points = [Tn(nt, 1), Tn(Ct, 1)]) : p.current.rl = !1;
      }
      if (Qr && nt[1] === "r" && (xe < ge.left || p.current.lr)) {
        var on = Qe;
        It ? on += te - se : on = Ft.x - Ze.x - Ve;
        var Xn = nr(on, De), kr = nr(on, De, fe);
        // Of course use larger one
        Xn > We || Xn === We && (!Ae || // Choose recommend one
        kr >= be) ? (p.current.lr = !0, Qe = on, Ve = -Ve, Dt.points = [Tn(nt, 1), Tn(Ct, 1)]) : p.current.lr = !1;
      }
      xa();
      var _r = Cr === !0 ? 0 : Cr;
      typeof _r == "number" && (xe < fe.left && (Qe -= xe - fe.left - Ve, M.x + se < fe.left + _r && (Qe += M.x - fe.left + se - _r)), _e > fe.right && (Qe -= _e - fe.right - Ve, M.x > fe.right - _r && (Qe += M.x - fe.right + _r)));
      var sn = vr === !0 ? 0 : vr;
      typeof sn == "number" && (ee < fe.top && (De -= ee - fe.top - tt, M.y + ue < fe.top + sn && (De += M.y - fe.top + ue - sn)), oe > fe.bottom && (De -= oe - fe.bottom - tt, M.y > fe.bottom - sn && (De += M.y - fe.bottom + sn)));
      var Fn = z.x + Qe, un = Fn + te, Lr = z.y + De, wa = Lr + re, ln = M.x, Jr = ln + se, Sa = M.y, yt = Sa + ue, ot = Math.max(Fn, ln), ft = Math.min(un, Jr), Gt = (ot + ft) / 2, Xt = Gt - Fn, Pn = Math.max(Lr, Sa), $n = Math.min(wa, yt), yo = (Pn + $n) / 2, Oa = yo - Lr;
      i == null || i(t, Dt);
      var Yn = pe.right - z.x - (Qe + z.width), cn = pe.bottom - z.y - (De + z.height);
      c({
        ready: !0,
        offsetX: Qe / he,
        offsetY: De / Fe,
        offsetR: Yn / he,
        offsetB: cn / Fe,
        arrowX: Xt / he,
        arrowY: Oa / Fe,
        scaleX: he,
        scaleY: Fe,
        align: Dt
      });
    }
  }), m = function() {
    d.current += 1;
    var E = d.current;
    Promise.resolve().then(function() {
      d.current === E && f();
    });
  }, b = function() {
    c(function(E) {
      return Z(Z({}, E), {}, {
        ready: !1
      });
    });
  };
  return or(b, [n]), or(function() {
    e || b();
  }, [e]), [l.ready, l.offsetX, l.offsetY, l.offsetR, l.offsetB, l.arrowX, l.arrowY, l.scaleX, l.scaleY, l.align, m];
}
function pF(e, t, r, n, a) {
  or(function() {
    if (e && t && r) {
      let d = function() {
        n(), a();
      };
      var o = t, i = r, s = ql(o), u = ql(i), l = hi(i), c = new Set([l].concat(Be(s), Be(u)));
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
function bF(e, t, r, n, a, o, i, s) {
  var u = g.useRef(e), l = g.useRef(!1);
  u.current !== e && (l.current = !0, u.current = e), g.useEffect(function() {
    var c = tr(function() {
      l.current = !1;
    });
    return function() {
      tr.cancel(c);
    };
  }, [e]), g.useEffect(function() {
    if (t && n && (!a || o)) {
      var c = function() {
        var F = !1, _ = function(I) {
          var T = I.target;
          F = i(T);
        }, N = function(I) {
          var T = I.target;
          !l.current && u.current && !F && !i(T) && s(!1);
        };
        return [_, N];
      }, d = c(), v = ae(d, 2), p = v[0], h = v[1], f = c(), m = ae(f, 2), b = m[0], C = m[1], E = hi(n);
      E.addEventListener("mousedown", p, !0), E.addEventListener("click", h, !0), E.addEventListener("contextmenu", h, !0);
      var D = bs(r);
      if (D && (D.addEventListener("mousedown", b, !0), D.addEventListener("click", C, !0), D.addEventListener("contextmenu", C, !0)), process.env.NODE_ENV !== "production") {
        var w, S, O = r == null || (w = r.getRootNode) === null || w === void 0 ? void 0 : w.call(r), B = (S = n.getRootNode) === null || S === void 0 ? void 0 : S.call(n);
        to(O === B, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        E.removeEventListener("mousedown", p, !0), E.removeEventListener("click", h, !0), E.removeEventListener("contextmenu", h, !0), D && (D.removeEventListener("mousedown", b, !0), D.removeEventListener("click", C, !0), D.removeEventListener("contextmenu", C, !0));
      };
    }
  }, [t, r, n, a, o]);
}
var yF = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function CF() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Vc, t = /* @__PURE__ */ g.forwardRef(function(r, n) {
    var a = r.prefixCls, o = a === void 0 ? "rc-trigger-popup" : a, i = r.children, s = r.action, u = s === void 0 ? "hover" : s, l = r.showAction, c = r.hideAction, d = r.popupVisible, v = r.defaultPopupVisible, p = r.onPopupVisibleChange, h = r.afterPopupVisibleChange, f = r.mouseEnterDelay, m = r.mouseLeaveDelay, b = m === void 0 ? 0.1 : m, C = r.focusDelay, E = r.blurDelay, D = r.mask, w = r.maskClosable, S = w === void 0 ? !0 : w, O = r.getPopupContainer, B = r.forceRender, x = r.autoDestroy, F = r.destroyPopupOnHide, _ = r.popup, N = r.popupClassName, P = r.popupStyle, I = r.popupPlacement, T = r.builtinPlacements, k = T === void 0 ? {} : T, A = r.popupAlign, M = r.zIndex, V = r.stretch, z = r.getPopupClassNameFromAlign, U = r.fresh, G = r.alignPoint, Q = r.onPopupClick, R = r.onPopupAlign, H = r.arrow, L = r.popupMotion, q = r.maskMotion, re = r.popupTransitionName, te = r.popupAnimation, ue = r.maskTransitionName, se = r.maskAnimation, ve = r.className, le = r.getTriggerDOMNode, Y = lt(r, yF), me = x || F || !1, Ee = g.useState(!1), Ae = ae(Ee, 2), $e = Ae[0], fe = Ae[1];
    or(function() {
      fe(JB());
    }, []);
    var Oe = g.useRef({}), ge = g.useContext(Mv), pe = g.useMemo(function() {
      return {
        registerSubPopup: function(Ne, Pt) {
          Oe.current[Ne] = Pt, ge == null || ge.registerSubPopup(Ne, Pt);
        }
      };
    }, [ge]), he = AA(), Fe = g.useState(null), Pe = ae(Fe, 2), Re = Pe[0], xt = Pe[1], ct = Sr(function(Ce) {
      ds(Ce) && Re !== Ce && xt(Ce), ge == null || ge.registerSubPopup(he, Ce);
    }), Ve = g.useState(null), tt = ae(Ve, 2), Xe = tt[0], _t = tt[1], vt = g.useRef(null), Nt = Sr(function(Ce) {
      ds(Ce) && Xe !== Ce && (_t(Ce), vt.current = Ce);
    }), ht = g.Children.only(i), Ue = (ht == null ? void 0 : ht.props) || {}, rt = {}, qt = Sr(function(Ce) {
      var Ne, Pt, Vt = Xe;
      return (Vt == null ? void 0 : Vt.contains(Ce)) || ((Ne = bs(Vt)) === null || Ne === void 0 ? void 0 : Ne.host) === Ce || Ce === Vt || (Re == null ? void 0 : Re.contains(Ce)) || ((Pt = bs(Re)) === null || Pt === void 0 ? void 0 : Pt.host) === Ce || Ce === Re || Object.values(Oe.current).some(function($t) {
        return ($t == null ? void 0 : $t.contains(Ce)) || Ce === $t;
      });
    }), Ct = kv(o, L, te, re), nt = kv(o, q, se, ue), Rt = g.useState(v || !1), at = ae(Rt, 2), Dt = at[0], Qe = at[1], De = d ?? Dt, We = Sr(function(Ce) {
      d === void 0 && Qe(Ce);
    });
    or(function() {
      Qe(d || !1);
    }, [d]);
    var be = g.useRef(De);
    be.current = De;
    var we = g.useRef([]);
    we.current = [];
    var Ze = Sr(function(Ce) {
      var Ne;
      We(Ce), ((Ne = we.current[we.current.length - 1]) !== null && Ne !== void 0 ? Ne : De) !== Ce && (we.current.push(Ce), p == null || p(Ce));
    }), Ft = g.useRef(), Lt = function() {
      clearTimeout(Ft.current);
    }, At = function(Ne) {
      var Pt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      Lt(), Pt === 0 ? Ze(Ne) : Ft.current = setTimeout(function() {
        Ze(Ne);
      }, Pt * 1e3);
    };
    g.useEffect(function() {
      return Lt;
    }, []);
    var Yr = g.useState(!1), Zr = ae(Yr, 2), Cr = Zr[0], vr = Zr[1];
    or(function(Ce) {
      (!Ce || De) && vr(!0);
    }, [De]);
    var $ = g.useState(null), ee = ae($, 2), oe = ee[0], xe = ee[1], _e = g.useState([0, 0]), Ye = ae(_e, 2), ke = Ye[0], Te = Ye[1], bt = function(Ne) {
      Te([Ne.clientX, Ne.clientY]);
    }, pt = hF(De, Re, G ? ke : Xe, I, k, A, R), Le = ae(pt, 11), zt = Le[0], Pr = Le[1], Qr = Le[2], It = Le[3], jr = Le[4], Da = Le[5], bo = Le[6], on = Le[7], Xn = Le[8], kr = Le[9], _r = Le[10], sn = vF($e, u, l, c), Fn = ae(sn, 2), un = Fn[0], Lr = Fn[1], wa = un.has("click"), ln = Lr.has("click") || Lr.has("contextMenu"), Jr = Sr(function() {
      Cr || _r();
    }), Sa = function() {
      be.current && G && ln && At(!1);
    };
    pF(De, Xe, Re, Jr, Sa), or(function() {
      Jr();
    }, [ke, I]), or(function() {
      De && !(k != null && k[I]) && Jr();
    }, [JSON.stringify(A)]);
    var yt = g.useMemo(function() {
      var Ce = mF(k, o, kr, G);
      return de(Ce, z == null ? void 0 : z(kr));
    }, [kr, z, k, o, G]);
    g.useImperativeHandle(n, function() {
      return {
        nativeElement: vt.current,
        forceAlign: Jr
      };
    });
    var ot = g.useState(0), ft = ae(ot, 2), Gt = ft[0], Xt = ft[1], Pn = g.useState(0), $n = ae(Pn, 2), yo = $n[0], Oa = $n[1], Yn = function() {
      if (V && Xe) {
        var Ne = Xe.getBoundingClientRect();
        Xt(Ne.width), Oa(Ne.height);
      }
    }, cn = function() {
      Yn(), Jr();
    }, nr = function(Ne) {
      vr(!1), _r(), h == null || h(Ne);
    }, xa = function() {
      return new Promise(function(Ne) {
        Yn(), xe(function() {
          return Ne;
        });
      });
    };
    or(function() {
      oe && (_r(), oe(), xe(null));
    }, [oe]);
    function fn(Ce, Ne, Pt, Vt) {
      rt[Ce] = function($t) {
        var yi;
        Vt == null || Vt($t), At(Ne, Pt);
        for (var su = arguments.length, rf = new Array(su > 1 ? su - 1 : 0), Ci = 1; Ci < su; Ci++)
          rf[Ci - 1] = arguments[Ci];
        (yi = Ue[Ce]) === null || yi === void 0 || yi.call.apply(yi, [Ue, $t].concat(rf));
      };
    }
    (wa || ln) && (rt.onClick = function(Ce) {
      var Ne;
      be.current && ln ? At(!1) : !be.current && wa && (bt(Ce), At(!0));
      for (var Pt = arguments.length, Vt = new Array(Pt > 1 ? Pt - 1 : 0), $t = 1; $t < Pt; $t++)
        Vt[$t - 1] = arguments[$t];
      (Ne = Ue.onClick) === null || Ne === void 0 || Ne.call.apply(Ne, [Ue, Ce].concat(Vt));
    }), bF(De, ln, Xe, Re, D, S, qt, At);
    var Zn = un.has("hover"), Aa = Lr.has("hover"), Ba, Co;
    Zn && (fn("onMouseEnter", !0, f, function(Ce) {
      bt(Ce);
    }), fn("onPointerEnter", !0, f, function(Ce) {
      bt(Ce);
    }), Ba = function(Ne) {
      (De || Cr) && Re !== null && Re !== void 0 && Re.contains(Ne.target) && At(!0, f);
    }, G && (rt.onMouseMove = function(Ce) {
      var Ne;
      (Ne = Ue.onMouseMove) === null || Ne === void 0 || Ne.call(Ue, Ce);
    })), Aa && (fn("onMouseLeave", !1, b), fn("onPointerLeave", !1, b), Co = function() {
      At(!1, b);
    }), un.has("focus") && fn("onFocus", !0, C), Lr.has("focus") && fn("onBlur", !1, E), un.has("contextMenu") && (rt.onContextMenu = function(Ce) {
      var Ne;
      be.current && Lr.has("contextMenu") ? At(!1) : (bt(Ce), At(!0)), Ce.preventDefault();
      for (var Pt = arguments.length, Vt = new Array(Pt > 1 ? Pt - 1 : 0), $t = 1; $t < Pt; $t++)
        Vt[$t - 1] = arguments[$t];
      (Ne = Ue.onContextMenu) === null || Ne === void 0 || Ne.call.apply(Ne, [Ue, Ce].concat(Vt));
    }), ve && (rt.className = de(Ue.className, ve));
    var Eo = Z(Z({}, Ue), rt), bi = {}, nu = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    nu.forEach(function(Ce) {
      Y[Ce] && (bi[Ce] = function() {
        for (var Ne, Pt = arguments.length, Vt = new Array(Pt), $t = 0; $t < Pt; $t++)
          Vt[$t] = arguments[$t];
        (Ne = Eo[Ce]) === null || Ne === void 0 || Ne.call.apply(Ne, [Eo].concat(Vt)), Y[Ce].apply(Y, Vt);
      });
    });
    var au = /* @__PURE__ */ g.cloneElement(ht, Z(Z({}, Eo), bi)), ou = {
      x: Da,
      y: bo
    }, iu = H ? Z({}, H !== !0 ? H : {}) : null;
    return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(fo, {
      disabled: !De,
      ref: Nt,
      onResize: cn
    }, /* @__PURE__ */ g.createElement(gp, {
      getTriggerDOMNode: le
    }, au)), /* @__PURE__ */ g.createElement(Mv.Provider, {
      value: pe
    }, /* @__PURE__ */ g.createElement(vp, {
      portal: e,
      ref: ct,
      prefixCls: o,
      popup: _,
      className: de(N, yt),
      style: P,
      target: Xe,
      onMouseEnter: Ba,
      onMouseLeave: Co,
      onPointerEnter: Ba,
      zIndex: M,
      open: De,
      keepDom: Cr,
      fresh: U,
      onClick: Q,
      mask: D,
      motion: Ct,
      maskMotion: nt,
      onVisibleChanged: nr,
      onPrepare: xa,
      forceRender: B,
      autoDestroy: me,
      getPopupContainer: O,
      align: kr,
      arrow: iu,
      arrowPos: ou,
      ready: zt,
      offsetX: Pr,
      offsetY: Qr,
      offsetR: It,
      offsetB: jr,
      onAlign: Jr,
      stretch: V,
      targetWidth: Gt / on,
      targetHeight: yo / Xn
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const Uc = CF(Vc);
function mp(e) {
  var t = e.children, r = e.prefixCls, n = e.id, a = e.overlayInnerStyle, o = e.className, i = e.style;
  return /* @__PURE__ */ g.createElement("div", {
    className: de("".concat(r, "-content"), o),
    style: i
  }, /* @__PURE__ */ g.createElement("div", {
    className: "".concat(r, "-inner"),
    id: n,
    role: "tooltip",
    style: a
  }, typeof t == "function" ? t() : t));
}
var Ia = {
  shiftX: 64,
  adjustY: 1
}, Ma = {
  adjustX: 1,
  shiftY: !0
}, Rr = [0, 0], EF = {
  left: {
    points: ["cr", "cl"],
    overflow: Ma,
    offset: [-4, 0],
    targetOffset: Rr
  },
  right: {
    points: ["cl", "cr"],
    overflow: Ma,
    offset: [4, 0],
    targetOffset: Rr
  },
  top: {
    points: ["bc", "tc"],
    overflow: Ia,
    offset: [0, -4],
    targetOffset: Rr
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Ia,
    offset: [0, 4],
    targetOffset: Rr
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: Ia,
    offset: [0, -4],
    targetOffset: Rr
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Ma,
    offset: [-4, 0],
    targetOffset: Rr
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Ia,
    offset: [0, -4],
    targetOffset: Rr
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Ma,
    offset: [4, 0],
    targetOffset: Rr
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Ia,
    offset: [0, 4],
    targetOffset: Rr
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Ma,
    offset: [4, 0],
    targetOffset: Rr
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Ia,
    offset: [0, 4],
    targetOffset: Rr
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Ma,
    offset: [-4, 0],
    targetOffset: Rr
  }
}, DF = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"], wF = function(t, r) {
  var n = t.overlayClassName, a = t.trigger, o = a === void 0 ? ["hover"] : a, i = t.mouseEnterDelay, s = i === void 0 ? 0 : i, u = t.mouseLeaveDelay, l = u === void 0 ? 0.1 : u, c = t.overlayStyle, d = t.prefixCls, v = d === void 0 ? "rc-tooltip" : d, p = t.children, h = t.onVisibleChange, f = t.afterVisibleChange, m = t.transitionName, b = t.animation, C = t.motion, E = t.placement, D = E === void 0 ? "right" : E, w = t.align, S = w === void 0 ? {} : w, O = t.destroyTooltipOnHide, B = O === void 0 ? !1 : O, x = t.defaultVisible, F = t.getTooltipContainer, _ = t.overlayInnerStyle;
  t.arrowContent;
  var N = t.overlay, P = t.id, I = t.showArrow, T = I === void 0 ? !0 : I, k = lt(t, DF), A = Ge(null);
  As(r, function() {
    return A.current;
  });
  var M = Z({}, k);
  "visible" in t && (M.popupVisible = t.visible);
  var V = function() {
    return /* @__PURE__ */ g.createElement(mp, {
      key: "content",
      prefixCls: v,
      id: P,
      overlayInnerStyle: _
    }, N);
  };
  return /* @__PURE__ */ g.createElement(Uc, He({
    popupClassName: n,
    prefixCls: v,
    popup: V,
    action: o,
    builtinPlacements: EF,
    popupPlacement: D,
    ref: A,
    popupAlign: S,
    getPopupContainer: F,
    onPopupVisibleChange: h,
    afterPopupVisibleChange: f,
    popupTransitionName: m,
    popupAnimation: b,
    popupMotion: C,
    defaultPopupVisible: x,
    autoDestroy: B,
    mouseLeaveDelay: l,
    popupStyle: c,
    mouseEnterDelay: s,
    arrow: T
  }, M), p);
};
const SF = /* @__PURE__ */ Xr(wF);
function hp(e) {
  const {
    sizePopupArrow: t,
    borderRadiusXS: r,
    borderRadiusOuter: n
  } = e, a = t / 2, o = 0, i = a, s = n * 1 / Math.sqrt(2), u = a - n * (1 - 1 / Math.sqrt(2)), l = a - r * (1 / Math.sqrt(2)), c = n * (Math.sqrt(2) - 1) + r * (1 / Math.sqrt(2)), d = 2 * a - l, v = c, p = 2 * a - s, h = u, f = 2 * a - o, m = i, b = a * Math.sqrt(2) + n * (Math.sqrt(2) - 2), C = n * (Math.sqrt(2) - 1), E = `polygon(${C}px 100%, 50% ${C}px, ${2 * a - C}px 100%, ${C}px 100%)`, D = `path('M ${o} ${i} A ${n} ${n} 0 0 0 ${s} ${u} L ${l} ${c} A ${r} ${r} 0 0 1 ${d} ${v} L ${p} ${h} A ${n} ${n} 0 0 0 ${f} ${m} Z')`;
  return {
    arrowShadowWidth: b,
    arrowPath: D,
    arrowPolygon: E
  };
}
const OF = (e, t, r) => {
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
        value: `0 0 ${Me(s)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: r,
      zIndex: 0,
      background: "transparent"
    }
  };
}, pp = 8;
function qc(e) {
  const {
    contentRadius: t,
    limitVerticalRadius: r
  } = e, n = t > 12 ? t + 2 : 12;
  return {
    arrowOffsetHorizontal: n,
    arrowOffsetVertical: r ? pp : n
  };
}
function zi(e, t) {
  return e ? t : {};
}
function bp(e, t, r) {
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
      }, OF(e, t, a)), {
        "&:before": {
          background: t
        }
      })]
    }, zi(!!u.top, {
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
    })), zi(!!u.bottom, {
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
    })), zi(!!u.left, {
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
    })), zi(!!u.right, {
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
function xF(e, t, r, n) {
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
const Hv = {
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
}, AF = {
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
}, BF = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function yp(e) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: r,
    arrowPointAtCenter: n,
    offset: a,
    borderRadius: o,
    visibleFirst: i
  } = e, s = t / 2, u = {};
  return Object.keys(Hv).forEach((l) => {
    const c = n && AF[l] || Hv[l], d = Object.assign(Object.assign({}, c), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (u[l] = d, BF.has(l) && (d.autoArrow = !1), l) {
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
    const v = qc({
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
    d.overflow = xF(l, v, t, r), i && (d.htmlRegion = "visibleFirst");
  }), u;
}
const FF = (e) => {
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
      [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, Ya(e)), {
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
          padding: `${Me(e.calc(l).div(2).equal())} ${Me(c)}`,
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
            borderRadius: e.min(o, pp)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), vO(e, (d, v) => {
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
    bp(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow
      }
    }
  ];
}, PF = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 70
}, qc({
  contentRadius: e.borderRadius,
  limitVerticalRadius: !0
})), hp(Fr(e, {
  borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
}))), Cp = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return go("Tooltip", (n) => {
    const {
      borderRadius: a,
      colorTextLightSolid: o,
      colorBgSpotlight: i
    } = n, s = Fr(n, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: o,
      tooltipBorderRadius: a,
      tooltipBg: i
    });
    return [FF(s), Kc(n, "zoom-big-fast")];
  }, PF, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: t
  })(e);
}, $F = ps.map((e) => `${e}-inverse`);
function RF(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(Be($F), Be(ps)).includes(e) : ps.includes(e);
}
function Ep(e, t) {
  const r = RF(t), n = de({
    [`${e}-${t}`]: t && r
  }), a = {}, o = {};
  return t && !r && (a.background = t, o["--antd-arrow-background-color"] = t), {
    className: n,
    overlayStyle: a,
    arrowStyle: o
  };
}
const TF = (e) => {
  const {
    prefixCls: t,
    className: r,
    placement: n = "top",
    title: a,
    color: o,
    overlayInnerStyle: i
  } = e, {
    getPrefixCls: s
  } = g.useContext(kt), u = s("tooltip", t), [l, c, d] = Cp(u), v = Ep(u, o), p = v.arrowStyle, h = Object.assign(Object.assign({}, i), v.overlayStyle), f = de(c, d, u, `${u}-pure`, `${u}-placement-${n}`, r, v.className);
  return l(/* @__PURE__ */ g.createElement("div", {
    className: f,
    style: p
  }, /* @__PURE__ */ g.createElement("div", {
    className: `${u}-arrow`
  }), /* @__PURE__ */ g.createElement(mp, Object.assign({}, e, {
    className: c,
    prefixCls: u,
    overlayInnerStyle: h
  }), a)));
}, NF = TF;
var IF = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Gc = /* @__PURE__ */ g.forwardRef((e, t) => {
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
    arrowPointAtCenter: C = !1,
    autoAdjustOverflow: E = !0
  } = e, D = !!h, [, w] = Mr(), {
    getPopupContainer: S,
    getPrefixCls: O,
    direction: B
  } = g.useContext(kt), x = An("Tooltip"), F = g.useRef(null), _ = () => {
    var he;
    (he = F.current) === null || he === void 0 || he.forceAlign();
  };
  g.useImperativeHandle(t, () => ({
    forceAlign: _,
    forcePopupAlign: () => {
      x.deprecated(!1, "forcePopupAlign", "forceAlign"), _();
    }
  })), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"]].forEach((he) => {
    let [Fe, Pe] = he;
    x.deprecated(!(Fe in e), Fe, Pe);
  }), process.env.NODE_ENV !== "production" && x(!p || typeof p == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && x(!h || typeof h == "boolean" || !("arrowPointAtCenter" in h), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [N, P] = Vn(!1, {
    value: (r = e.open) !== null && r !== void 0 ? r : e.visible,
    defaultValue: (n = e.defaultOpen) !== null && n !== void 0 ? n : e.defaultVisible
  }), I = !f && !m && f !== 0, T = (he) => {
    var Fe, Pe;
    P(I ? !1 : he), I || ((Fe = e.onOpenChange) === null || Fe === void 0 || Fe.call(e, he), (Pe = e.onVisibleChange) === null || Pe === void 0 || Pe.call(e, he));
  }, k = g.useMemo(() => {
    var he, Fe;
    let Pe = C;
    return typeof h == "object" && (Pe = (Fe = (he = h.pointAtCenter) !== null && he !== void 0 ? he : h.arrowPointAtCenter) !== null && Fe !== void 0 ? Fe : C), b || yp({
      arrowPointAtCenter: Pe,
      autoAdjustOverflow: E,
      arrowWidth: D ? w.sizePopupArrow : 0,
      borderRadius: w.borderRadius,
      offset: w.marginXXS,
      visibleFirst: !0
    });
  }, [C, h, b, w]), A = g.useMemo(() => f === 0 ? f : m || f || "", [m, f]), M = /* @__PURE__ */ g.createElement(Hh, null, typeof A == "function" ? A() : A), {
    getPopupContainer: V,
    placement: z = "top",
    mouseEnterDelay: U = 0.1,
    mouseLeaveDelay: G = 0.1,
    overlayStyle: Q,
    rootClassName: R
  } = e, H = IF(e, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), L = O("tooltip", a), q = O(), re = e["data-popover-inject"];
  let te = N;
  !("open" in e) && !("visible" in e) && I && (te = !1);
  const ue = Un(c) && !Nh(c) ? c : /* @__PURE__ */ g.createElement("span", null, c), se = ue.props, ve = !se.className || typeof se.className == "string" ? de(se.className, o || `${L}-open`) : se.className, [le, Y, me] = Cp(L, !re), Ee = Ep(L, u), Ae = Ee.arrowStyle, $e = Object.assign(Object.assign({}, l), Ee.overlayStyle), fe = de(s, {
    [`${L}-rtl`]: B === "rtl"
  }, Ee.className, R, Y, me), [Oe, ge] = jc("Tooltip", H.zIndex), pe = /* @__PURE__ */ g.createElement(SF, Object.assign({}, H, {
    zIndex: Oe,
    showArrow: D,
    placement: z,
    mouseEnterDelay: U,
    mouseLeaveDelay: G,
    prefixCls: L,
    overlayClassName: fe,
    overlayStyle: Object.assign(Object.assign({}, Ae), Q),
    getTooltipContainer: V || i || S,
    ref: F,
    builtinPlacements: k,
    overlay: M,
    visible: te,
    onVisibleChange: T,
    afterVisibleChange: d ?? v,
    overlayInnerStyle: $e,
    arrowContent: /* @__PURE__ */ g.createElement("span", {
      className: `${L}-arrow-content`
    }),
    motion: {
      motionName: Sx(q, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!p
  }), te ? Ca(ue, {
    className: ve
  }) : ue);
  return le(/* @__PURE__ */ g.createElement(qs.Provider, {
    value: ge
  }, pe));
});
process.env.NODE_ENV !== "production" && (Gc.displayName = "Tooltip");
Gc._InternalPanelDoNotUseOrYouWillBeFired = NF;
const MF = Gc;
var jF = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" };
const kF = jF;
var _F = function(t, r) {
  return /* @__PURE__ */ g.createElement(di, He({}, t, {
    ref: r,
    icon: kF
  }));
}, Dp = /* @__PURE__ */ g.forwardRef(_F);
process.env.NODE_ENV !== "production" && (Dp.displayName = "RightOutlined");
const Gl = Dp;
var LF = Se.ESC, zF = Se.TAB;
function VF(e) {
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
      case LF:
        s();
        break;
      case zF: {
        var v = !1;
        i.current || (v = u()), v ? d.preventDefault() : s();
        break;
      }
    }
  };
  g.useEffect(function() {
    return t ? (window.addEventListener("keydown", l), a && tr(u, 3), function() {
      window.removeEventListener("keydown", l), i.current = !1;
    }) : function() {
      i.current = !1;
    };
  }, [t]);
}
var HF = /* @__PURE__ */ Xr(function(e, t) {
  var r = e.overlay, n = e.arrow, a = e.prefixCls, o = lr(function() {
    var s;
    return typeof r == "function" ? s = r() : s = r, s;
  }, [r]), i = co(t, o == null ? void 0 : o.ref);
  return /* @__PURE__ */ ne.createElement(ne.Fragment, null, n && /* @__PURE__ */ ne.createElement("div", {
    className: "".concat(a, "-arrow")
  }), /* @__PURE__ */ ne.cloneElement(o, {
    ref: Gn(o) ? i : void 0
  }));
}), ja = {
  adjustX: 1,
  adjustY: 1
}, ka = [0, 0], WF = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: ja,
    offset: [0, -4],
    targetOffset: ka
  },
  top: {
    points: ["bc", "tc"],
    overflow: ja,
    offset: [0, -4],
    targetOffset: ka
  },
  topRight: {
    points: ["br", "tr"],
    overflow: ja,
    offset: [0, -4],
    targetOffset: ka
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: ja,
    offset: [0, 4],
    targetOffset: ka
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: ja,
    offset: [0, 4],
    targetOffset: ka
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: ja,
    offset: [0, 4],
    targetOffset: ka
  }
}, KF = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus", "overlay", "children", "onVisibleChange"];
function UF(e, t) {
  var r, n = e.arrow, a = n === void 0 ? !1 : n, o = e.prefixCls, i = o === void 0 ? "rc-dropdown" : o, s = e.transitionName, u = e.animation, l = e.align, c = e.placement, d = c === void 0 ? "bottomLeft" : c, v = e.placements, p = v === void 0 ? WF : v, h = e.getPopupContainer, f = e.showAction, m = e.hideAction, b = e.overlayClassName, C = e.overlayStyle, E = e.visible, D = e.trigger, w = D === void 0 ? ["hover"] : D, S = e.autoFocus, O = e.overlay, B = e.children, x = e.onVisibleChange, F = lt(e, KF), _ = ne.useState(), N = ae(_, 2), P = N[0], I = N[1], T = "visible" in e ? E : P, k = ne.useRef(null), A = ne.useRef(null), M = ne.useRef(null);
  ne.useImperativeHandle(t, function() {
    return k.current;
  });
  var V = function(re) {
    I(re), x == null || x(re);
  };
  VF({
    visible: T,
    triggerRef: M,
    onVisibleChange: V,
    autoFocus: S,
    overlayRef: A
  });
  var z = function(re) {
    var te = e.onOverlayClick;
    I(!1), te && te(re);
  }, U = function() {
    return /* @__PURE__ */ ne.createElement(HF, {
      ref: A,
      overlay: O,
      prefixCls: i,
      arrow: a
    });
  }, G = function() {
    return typeof O == "function" ? U : U();
  }, Q = function() {
    var re = e.minOverlayWidthMatchTrigger, te = e.alignPoint;
    return "minOverlayWidthMatchTrigger" in e ? re : !te;
  }, R = function() {
    var re = e.openClassName;
    return re !== void 0 ? re : "".concat(i, "-open");
  }, H = /* @__PURE__ */ ne.cloneElement(B, {
    className: de((r = B.props) === null || r === void 0 ? void 0 : r.className, T && R()),
    ref: Gn(B) ? co(M, B.ref) : void 0
  }), L = m;
  return !L && w.indexOf("contextMenu") !== -1 && (L = ["click"]), /* @__PURE__ */ ne.createElement(Uc, He({
    builtinPlacements: p
  }, F, {
    prefixCls: i,
    ref: k,
    popupClassName: de(b, W({}, "".concat(i, "-show-arrow"), a)),
    popupStyle: C,
    action: w,
    showAction: f,
    hideAction: L,
    popupPlacement: d,
    popupAlign: l,
    popupTransitionName: s,
    popupAnimation: u,
    popupVisible: T,
    stretch: Q() ? "minWidth" : "",
    popup: G(),
    onPopupVisibleChange: V,
    onPopupClick: z,
    getPopupContainer: h
  }), H);
}
const qF = /* @__PURE__ */ ne.forwardRef(UF);
var wp = /* @__PURE__ */ g.createContext(null);
function Sp(e, t) {
  return e === void 0 ? null : "".concat(e, "-").concat(t);
}
function Op(e) {
  var t = g.useContext(wp);
  return Sp(t, e);
}
var GF = ["children", "locked"], qr = /* @__PURE__ */ g.createContext(null);
function XF(e, t) {
  var r = Z({}, e);
  return Object.keys(t).forEach(function(n) {
    var a = t[n];
    a !== void 0 && (r[n] = a);
  }), r;
}
function ii(e) {
  var t = e.children, r = e.locked, n = lt(e, GF), a = g.useContext(qr), o = ui(function() {
    return XF(a, n);
  }, [a, n], function(i, s) {
    return !r && (i[0] !== s[0] || !no(i[1], s[1], !0));
  });
  return /* @__PURE__ */ g.createElement(qr.Provider, {
    value: o
  }, t);
}
var YF = [], xp = /* @__PURE__ */ g.createContext(null);
function Zs() {
  return g.useContext(xp);
}
var Ap = /* @__PURE__ */ g.createContext(YF);
function ho(e) {
  var t = g.useContext(Ap);
  return g.useMemo(function() {
    return e !== void 0 ? [].concat(Be(t), [e]) : t;
  }, [t, e]);
}
var Bp = /* @__PURE__ */ g.createContext(null), Xc = /* @__PURE__ */ g.createContext({});
function Wv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (kc(e)) {
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
function ZF(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = Be(e.querySelectorAll("*")).filter(function(n) {
    return Wv(n, t);
  });
  return Wv(e, t) && r.unshift(e), r;
}
var Xl = Se.LEFT, Yl = Se.RIGHT, Zl = Se.UP, ns = Se.DOWN, as = Se.ENTER, Fp = Se.ESC, Po = Se.HOME, $o = Se.END, Kv = [Zl, ns, Xl, Yl];
function QF(e, t, r, n) {
  var a, o, i, s, u = "prev", l = "next", c = "children", d = "parent";
  if (e === "inline" && n === as)
    return {
      inlineTrigger: !0
    };
  var v = (a = {}, W(a, Zl, u), W(a, ns, l), a), p = (o = {}, W(o, Xl, r ? l : u), W(o, Yl, r ? u : l), W(o, ns, c), W(o, as, c), o), h = (i = {}, W(i, Zl, u), W(i, ns, l), W(i, as, c), W(i, Fp, d), W(i, Xl, r ? c : d), W(i, Yl, r ? d : c), i), f = {
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
function JF(e) {
  for (var t = e; t; ) {
    if (t.getAttribute("data-menu-list"))
      return t;
    t = t.parentElement;
  }
  return null;
}
function eP(e, t) {
  for (var r = e || document.activeElement; r; ) {
    if (t.has(r))
      return r;
    r = r.parentElement;
  }
  return null;
}
function Yc(e, t) {
  var r = ZF(e, !0);
  return r.filter(function(n) {
    return t.has(n);
  });
}
function Uv(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!e)
    return null;
  var a = Yc(e, t), o = a.length, i = a.findIndex(function(s) {
    return r === s;
  });
  return n < 0 ? i === -1 ? i = o - 1 : i -= 1 : n > 0 && (i += 1), i = (i + o) % o, a[i];
}
var Ql = function(t, r) {
  var n = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  return t.forEach(function(i) {
    var s = document.querySelector("[data-menu-id='".concat(Sp(r, i), "']"));
    s && (n.add(s), o.set(s, i), a.set(i, s));
  }), {
    elements: n,
    key2element: a,
    element2key: o
  };
};
function tP(e, t, r, n, a, o, i, s, u, l) {
  var c = g.useRef(), d = g.useRef();
  d.current = t;
  var v = function() {
    tr.cancel(c.current);
  };
  return g.useEffect(function() {
    return function() {
      v();
    };
  }, []), function(p) {
    var h = p.which;
    if ([].concat(Kv, [as, Fp, Po, $o]).includes(h)) {
      var f = o(), m = Ql(f, n), b = m, C = b.elements, E = b.key2element, D = b.element2key, w = E.get(t), S = eP(w, C), O = D.get(S), B = QF(e, i(O, !0).length === 1, r, h);
      if (!B && h !== Po && h !== $o)
        return;
      (Kv.includes(h) || [Po, $o].includes(h)) && p.preventDefault();
      var x = function(A) {
        if (A) {
          var M = A, V = A.querySelector("a");
          V != null && V.getAttribute("href") && (M = V);
          var z = D.get(A);
          s(z), v(), c.current = tr(function() {
            d.current === z && M.focus();
          });
        }
      };
      if ([Po, $o].includes(h) || B.sibling || !S) {
        var F;
        !S || e === "inline" ? F = a.current : F = JF(S);
        var _, N = Yc(F, C);
        h === Po ? _ = N[0] : h === $o ? _ = N[N.length - 1] : _ = Uv(F, C, S, B.offset), x(_);
      } else if (B.inlineTrigger)
        u(O);
      else if (B.offset > 0)
        u(O, !0), v(), c.current = tr(function() {
          m = Ql(f, n);
          var k = S.getAttribute("aria-controls"), A = document.getElementById(k), M = Uv(A, m.elements);
          x(M);
        }, 5);
      else if (B.offset < 0) {
        var P = i(O, !0), I = P[P.length - 2], T = E.get(I);
        u(I, !1), x(T);
      }
    }
    l == null || l(p);
  };
}
function rP(e) {
  Promise.resolve().then(e);
}
var Zc = "__RC_UTIL_PATH_SPLIT__", qv = function(t) {
  return t.join(Zc);
}, nP = function(t) {
  return t.split(Zc);
}, Jl = "rc-menu-more";
function aP() {
  var e = g.useState({}), t = ae(e, 2), r = t[1], n = Ge(/* @__PURE__ */ new Map()), a = Ge(/* @__PURE__ */ new Map()), o = g.useState([]), i = ae(o, 2), s = i[0], u = i[1], l = Ge(0), c = Ge(!1), d = function() {
    c.current || r({});
  }, v = Ke(function(E, D) {
    process.env.NODE_ENV !== "production" && dt(!n.current.has(E), "Duplicated key '".concat(E, "' used in Menu by path [").concat(D.join(" > "), "]"));
    var w = qv(D);
    a.current.set(w, E), n.current.set(E, w), l.current += 1;
    var S = l.current;
    rP(function() {
      S === l.current && d();
    });
  }, []), p = Ke(function(E, D) {
    var w = qv(D);
    a.current.delete(w), n.current.delete(E);
  }, []), h = Ke(function(E) {
    u(E);
  }, []), f = Ke(function(E, D) {
    var w = n.current.get(E) || "", S = nP(w);
    return D && s.includes(S[0]) && S.unshift(Jl), S;
  }, [s]), m = Ke(function(E, D) {
    return E.some(function(w) {
      var S = f(w, !0);
      return S.includes(D);
    });
  }, [f]), b = function() {
    var D = Be(n.current.keys());
    return s.length && D.push(Jl), D;
  }, C = Ke(function(E) {
    var D = "".concat(n.current.get(E)).concat(Zc), w = /* @__PURE__ */ new Set();
    return Be(a.current.keys()).forEach(function(S) {
      S.startsWith(D) && w.add(a.current.get(S));
    }), w;
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
    getSubPathKeys: C
  };
}
function No(e) {
  var t = g.useRef(e);
  t.current = e;
  var r = g.useCallback(function() {
    for (var n, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(o));
  }, []);
  return e ? r : void 0;
}
var oP = Math.random().toFixed(5).toString().slice(2), Gv = 0;
function iP(e) {
  var t = Vn(e, {
    value: e
  }), r = ae(t, 2), n = r[0], a = r[1];
  return g.useEffect(function() {
    Gv += 1;
    var o = process.env.NODE_ENV === "test" ? "test" : "".concat(oP, "-").concat(Gv);
    a("rc-menu-uuid-".concat(o));
  }, []), n;
}
function Pp(e, t, r, n) {
  var a = g.useContext(qr), o = a.activeKey, i = a.onActive, s = a.onInactive, u = {
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
function $p(e) {
  var t = g.useContext(qr), r = t.mode, n = t.rtl, a = t.inlineIndent;
  if (r !== "inline")
    return null;
  var o = e;
  return n ? {
    paddingRight: o * a
  } : {
    paddingLeft: o * a
  };
}
function Rp(e) {
  var t = e.icon, r = e.props, n = e.children, a;
  return t === null || t === !1 ? null : (typeof t == "function" ? a = /* @__PURE__ */ g.createElement(t, Z({}, r)) : typeof t != "boolean" && (a = t), a || n || null);
}
var sP = ["item"];
function Ss(e) {
  var t = e.item, r = lt(e, sP);
  return Object.defineProperty(r, "item", {
    get: function() {
      return dt(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), t;
    }
  }), r;
}
var uP = ["title", "attribute", "elementRef"], lP = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"], cP = ["active"], fP = /* @__PURE__ */ function(e) {
  ba(r, e);
  var t = ci(r);
  function r() {
    return br(this, r), t.apply(this, arguments);
  }
  return yr(r, [{
    key: "render",
    value: function() {
      var a = this.props, o = a.title, i = a.attribute, s = a.elementRef, u = lt(a, uP), l = xn(u, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
      return dt(!i, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), /* @__PURE__ */ g.createElement(En.Item, He({}, i, {
        title: typeof o == "string" ? o : void 0
      }, l, {
        ref: s
      }));
    }
  }]), r;
}(g.Component), dP = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var r, n = e.style, a = e.className, o = e.eventKey, i = e.warnKey, s = e.disabled, u = e.itemIcon, l = e.children, c = e.role, d = e.onMouseEnter, v = e.onMouseLeave, p = e.onClick, h = e.onKeyDown, f = e.onFocus, m = lt(e, lP), b = Op(o), C = g.useContext(qr), E = C.prefixCls, D = C.onItemClick, w = C.disabled, S = C.overflowDisabled, O = C.itemIcon, B = C.selectedKeys, x = C.onActive, F = g.useContext(Xc), _ = F._internalRenderMenuItem, N = "".concat(E, "-item"), P = g.useRef(), I = g.useRef(), T = w || s, k = li(t, I), A = ho(o);
  process.env.NODE_ENV !== "production" && i && dt(!1, "MenuItem should not leave undefined `key`.");
  var M = function(se) {
    return {
      key: o,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: Be(A).reverse(),
      item: P.current,
      domEvent: se
    };
  }, V = u || O, z = Pp(o, T, d, v), U = z.active, G = lt(z, cP), Q = B.includes(o), R = $p(A.length), H = function(se) {
    if (!T) {
      var ve = M(se);
      p == null || p(Ss(ve)), D(ve);
    }
  }, L = function(se) {
    if (h == null || h(se), se.which === Se.ENTER) {
      var ve = M(se);
      p == null || p(Ss(ve)), D(ve);
    }
  }, q = function(se) {
    x(o), f == null || f(se);
  }, re = {};
  e.role === "option" && (re["aria-selected"] = Q);
  var te = /* @__PURE__ */ g.createElement(fP, He({
    ref: P,
    elementRef: k,
    role: c === null ? "none" : c || "menuitem",
    tabIndex: s ? null : -1,
    "data-menu-id": S && b ? null : b
  }, m, G, re, {
    component: "li",
    "aria-disabled": s,
    style: Z(Z({}, R), n),
    className: de(N, (r = {}, W(r, "".concat(N, "-active"), U), W(r, "".concat(N, "-selected"), Q), W(r, "".concat(N, "-disabled"), T), r), a),
    onClick: H,
    onKeyDown: L,
    onFocus: q
  }), l, /* @__PURE__ */ g.createElement(Rp, {
    props: Z(Z({}, e), {}, {
      isSelected: Q
    }),
    icon: V
  }));
  return _ && (te = _(te, e, {
    selected: Q
  })), te;
});
function vP(e, t) {
  var r = e.eventKey, n = Zs(), a = ho(r);
  return g.useEffect(function() {
    if (n)
      return n.registerPath(r, a), function() {
        n.unregisterPath(r, a);
      };
  }, [a]), n ? null : /* @__PURE__ */ g.createElement(dP, He({}, e, {
    ref: t
  }));
}
const Qs = /* @__PURE__ */ g.forwardRef(vP);
var gP = ["className", "children"], mP = function(t, r) {
  var n = t.className, a = t.children, o = lt(t, gP), i = g.useContext(qr), s = i.prefixCls, u = i.mode, l = i.rtl;
  return /* @__PURE__ */ g.createElement("ul", He({
    className: de(s, l && "".concat(s, "-rtl"), "".concat(s, "-sub"), "".concat(s, "-").concat(u === "inline" ? "inline" : "vertical"), n),
    role: "menu"
  }, o, {
    "data-menu-list": !0,
    ref: r
  }), a);
}, Qc = /* @__PURE__ */ g.forwardRef(mP);
Qc.displayName = "SubMenuList";
function Jc(e, t) {
  return Wn(e).map(function(r, n) {
    if (/* @__PURE__ */ g.isValidElement(r)) {
      var a, o, i = r.key, s = (a = (o = r.props) === null || o === void 0 ? void 0 : o.eventKey) !== null && a !== void 0 ? a : i, u = s == null;
      u && (s = "tmp_key-".concat([].concat(Be(t), [n]).join("-")));
      var l = {
        key: s,
        eventKey: s
      };
      return process.env.NODE_ENV !== "production" && u && (l.warnKey = !0), /* @__PURE__ */ g.cloneElement(r, l);
    }
    return r;
  });
}
var ar = {
  adjustX: 1,
  adjustY: 1
}, hP = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: ar
  },
  topRight: {
    points: ["br", "tr"],
    overflow: ar
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: ar
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: ar
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: ar
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: ar
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: ar
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: ar
  }
}, pP = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: ar
  },
  topRight: {
    points: ["br", "tr"],
    overflow: ar
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: ar
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: ar
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: ar
  },
  rightBottom: {
    points: ["br", "bl"],
    overflow: ar
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: ar
  },
  leftBottom: {
    points: ["bl", "br"],
    overflow: ar
  }
};
function Tp(e, t, r) {
  if (t)
    return t;
  if (r)
    return r[e] || r.other;
}
var bP = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function yP(e) {
  var t = e.prefixCls, r = e.visible, n = e.children, a = e.popup, o = e.popupStyle, i = e.popupClassName, s = e.popupOffset, u = e.disabled, l = e.mode, c = e.onVisibleChange, d = g.useContext(qr), v = d.getPopupContainer, p = d.rtl, h = d.subMenuOpenDelay, f = d.subMenuCloseDelay, m = d.builtinPlacements, b = d.triggerSubMenuAction, C = d.forceSubMenuRender, E = d.rootClassName, D = d.motion, w = d.defaultMotions, S = g.useState(!1), O = ae(S, 2), B = O[0], x = O[1], F = Z(p ? Z({}, pP) : Z({}, hP), m), _ = bP[l], N = Tp(l, D, w), P = g.useRef(N);
  l !== "inline" && (P.current = N);
  var I = Z(Z({}, P.current), {}, {
    leavedClassName: "".concat(t, "-hidden"),
    removeOnLeave: !1,
    motionAppear: !0
  }), T = g.useRef();
  return g.useEffect(function() {
    return T.current = tr(function() {
      x(r);
    }), function() {
      tr.cancel(T.current);
    };
  }, [r]), /* @__PURE__ */ g.createElement(Uc, {
    prefixCls: t,
    popupClassName: de("".concat(t, "-popup"), W({}, "".concat(t, "-rtl"), p), i, E),
    stretch: l === "horizontal" ? "minWidth" : null,
    getPopupContainer: v,
    builtinPlacements: F,
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
    forceRender: C,
    popupMotion: I,
    fresh: !0
  }, n);
}
function CP(e) {
  var t = e.id, r = e.open, n = e.keyPath, a = e.children, o = "inline", i = g.useContext(qr), s = i.prefixCls, u = i.forceSubMenuRender, l = i.motion, c = i.defaultMotions, d = i.mode, v = g.useRef(!1);
  v.current = d === o;
  var p = g.useState(!v.current), h = ae(p, 2), f = h[0], m = h[1], b = v.current ? r : !1;
  g.useEffect(function() {
    v.current && m(!1);
  }, [d]);
  var C = Z({}, Tp(o, l, c));
  n.length > 1 && (C.motionAppear = !1);
  var E = C.onVisibleChanged;
  return C.onVisibleChanged = function(D) {
    return !v.current && !D && m(!0), E == null ? void 0 : E(D);
  }, f ? null : /* @__PURE__ */ g.createElement(ii, {
    mode: o,
    locked: !v.current
  }, /* @__PURE__ */ g.createElement(mo, He({
    visible: b
  }, C, {
    forceRender: u,
    removeOnLeave: !1,
    leavedClassName: "".concat(s, "-hidden")
  }), function(D) {
    var w = D.className, S = D.style;
    return /* @__PURE__ */ g.createElement(Qc, {
      id: t,
      className: w,
      style: S
    }, a);
  }));
}
var EP = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "popupStyle", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"], DP = ["active"], wP = function(t) {
  var r, n = t.style, a = t.className, o = t.title, i = t.eventKey, s = t.warnKey, u = t.disabled, l = t.internalPopupClose, c = t.children, d = t.itemIcon, v = t.expandIcon, p = t.popupClassName, h = t.popupOffset, f = t.popupStyle, m = t.onClick, b = t.onMouseEnter, C = t.onMouseLeave, E = t.onTitleClick, D = t.onTitleMouseEnter, w = t.onTitleMouseLeave, S = lt(t, EP), O = Op(i), B = g.useContext(qr), x = B.prefixCls, F = B.mode, _ = B.openKeys, N = B.disabled, P = B.overflowDisabled, I = B.activeKey, T = B.selectedKeys, k = B.itemIcon, A = B.expandIcon, M = B.onItemClick, V = B.onOpenChange, z = B.onActive, U = g.useContext(Xc), G = U._internalRenderSubMenuItem, Q = g.useContext(Bp), R = Q.isSubPathKey, H = ho(), L = "".concat(x, "-submenu"), q = N || u, re = g.useRef(), te = g.useRef();
  process.env.NODE_ENV !== "production" && s && dt(!1, "SubMenu should not leave undefined `key`.");
  var ue = d ?? k, se = v ?? A, ve = _.includes(i), le = !P && ve, Y = R(T, i), me = Pp(i, q, D, w), Ee = me.active, Ae = lt(me, DP), $e = g.useState(!1), fe = ae($e, 2), Oe = fe[0], ge = fe[1], pe = function(rt) {
    q || ge(rt);
  }, he = function(rt) {
    pe(!0), b == null || b({
      key: i,
      domEvent: rt
    });
  }, Fe = function(rt) {
    pe(!1), C == null || C({
      key: i,
      domEvent: rt
    });
  }, Pe = g.useMemo(function() {
    return Ee || (F !== "inline" ? Oe || R([I], i) : !1);
  }, [F, Ee, I, Oe, i, R]), Re = $p(H.length), xt = function(rt) {
    q || (E == null || E({
      key: i,
      domEvent: rt
    }), F === "inline" && V(i, !ve));
  }, ct = No(function(Ue) {
    m == null || m(Ss(Ue)), M(Ue);
  }), Ve = function(rt) {
    F !== "inline" && V(i, rt);
  }, tt = function() {
    z(i);
  }, Xe = O && "".concat(O, "-popup"), _t = /* @__PURE__ */ g.createElement("div", He({
    role: "menuitem",
    style: Re,
    className: "".concat(L, "-title"),
    tabIndex: q ? null : -1,
    ref: re,
    title: typeof o == "string" ? o : null,
    "data-menu-id": P && O ? null : O,
    "aria-expanded": le,
    "aria-haspopup": !0,
    "aria-controls": Xe,
    "aria-disabled": q,
    onClick: xt,
    onFocus: tt
  }, Ae), o, /* @__PURE__ */ g.createElement(Rp, {
    icon: F !== "horizontal" ? se : void 0,
    props: Z(Z({}, t), {}, {
      isOpen: le,
      // [Legacy] Not sure why need this mark
      isSubMenu: !0
    })
  }, /* @__PURE__ */ g.createElement("i", {
    className: "".concat(L, "-arrow")
  }))), vt = g.useRef(F);
  if (F !== "inline" && H.length > 1 ? vt.current = "vertical" : vt.current = F, !P) {
    var Nt = vt.current;
    _t = /* @__PURE__ */ g.createElement(yP, {
      mode: Nt,
      prefixCls: L,
      visible: !l && le && F !== "inline",
      popupClassName: p,
      popupOffset: h,
      popupStyle: f,
      popup: /* @__PURE__ */ g.createElement(
        ii,
        {
          mode: Nt === "horizontal" ? "vertical" : Nt
        },
        /* @__PURE__ */ g.createElement(Qc, {
          id: Xe,
          ref: te
        }, c)
      ),
      disabled: q,
      onVisibleChange: Ve
    }, _t);
  }
  var ht = /* @__PURE__ */ g.createElement(En.Item, He({
    role: "none"
  }, S, {
    component: "li",
    style: n,
    className: de(L, "".concat(L, "-").concat(F), a, (r = {}, W(r, "".concat(L, "-open"), le), W(r, "".concat(L, "-active"), Pe), W(r, "".concat(L, "-selected"), Y), W(r, "".concat(L, "-disabled"), q), r)),
    onMouseEnter: he,
    onMouseLeave: Fe
  }), _t, !P && /* @__PURE__ */ g.createElement(CP, {
    id: Xe,
    open: le,
    keyPath: H
  }, c));
  return G && (ht = G(ht, t, {
    selected: Y,
    active: Pe,
    open: le,
    disabled: q
  })), /* @__PURE__ */ g.createElement(ii, {
    onItemClick: ct,
    mode: F === "horizontal" ? "vertical" : F,
    itemIcon: ue,
    expandIcon: se
  }, ht);
};
function Js(e) {
  var t = e.eventKey, r = e.children, n = ho(t), a = Jc(r, n), o = Zs();
  g.useEffect(function() {
    if (o)
      return o.registerPath(t, n), function() {
        o.unregisterPath(t, n);
      };
  }, [n]);
  var i;
  return o ? i = a : i = /* @__PURE__ */ g.createElement(wP, e, a), /* @__PURE__ */ g.createElement(Ap.Provider, {
    value: n
  }, i);
}
var SP = ["className", "title", "eventKey", "children"], OP = ["children"], xP = function(t) {
  var r = t.className, n = t.title;
  t.eventKey;
  var a = t.children, o = lt(t, SP), i = g.useContext(qr), s = i.prefixCls, u = "".concat(s, "-item-group");
  return /* @__PURE__ */ g.createElement("li", He({
    role: "presentation"
  }, o, {
    onClick: function(c) {
      return c.stopPropagation();
    },
    className: de(u, r)
  }), /* @__PURE__ */ g.createElement("div", {
    role: "presentation",
    className: "".concat(u, "-title"),
    title: typeof n == "string" ? n : void 0
  }, n), /* @__PURE__ */ g.createElement("ul", {
    role: "group",
    className: "".concat(u, "-list")
  }, a));
};
function eu(e) {
  var t = e.children, r = lt(e, OP), n = ho(r.eventKey), a = Jc(t, n), o = Zs();
  return o ? a : /* @__PURE__ */ g.createElement(xP, xn(r, ["warnKey"]), a);
}
function ef(e) {
  var t = e.className, r = e.style, n = g.useContext(qr), a = n.prefixCls, o = Zs();
  return o ? null : /* @__PURE__ */ g.createElement("li", {
    role: "separator",
    className: de("".concat(a, "-item-divider"), t),
    style: r
  });
}
var AP = ["label", "children", "key", "type"];
function ec(e) {
  return (e || []).map(function(t, r) {
    if (t && it(t) === "object") {
      var n = t, a = n.label, o = n.children, i = n.key, s = n.type, u = lt(n, AP), l = i ?? "tmp-".concat(r);
      return o || s === "group" ? s === "group" ? /* @__PURE__ */ g.createElement(eu, He({
        key: l
      }, u, {
        title: a
      }), ec(o)) : /* @__PURE__ */ g.createElement(Js, He({
        key: l
      }, u, {
        title: a
      }), ec(o)) : s === "divider" ? /* @__PURE__ */ g.createElement(ef, He({
        key: l
      }, u)) : /* @__PURE__ */ g.createElement(Qs, He({
        key: l
      }, u), a);
    }
    return null;
  }).filter(function(t) {
    return t;
  });
}
function BP(e, t, r) {
  var n = e;
  return t && (n = ec(t)), Jc(n, r);
}
var FP = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem"], _a = [], PP = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var r, n, a = e, o = a.prefixCls, i = o === void 0 ? "rc-menu" : o, s = a.rootClassName, u = a.style, l = a.className, c = a.tabIndex, d = c === void 0 ? 0 : c, v = a.items, p = a.children, h = a.direction, f = a.id, m = a.mode, b = m === void 0 ? "vertical" : m, C = a.inlineCollapsed, E = a.disabled, D = a.disabledOverflow, w = a.subMenuOpenDelay, S = w === void 0 ? 0.1 : w, O = a.subMenuCloseDelay, B = O === void 0 ? 0.1 : O, x = a.forceSubMenuRender, F = a.defaultOpenKeys, _ = a.openKeys, N = a.activeKey, P = a.defaultActiveFirst, I = a.selectable, T = I === void 0 ? !0 : I, k = a.multiple, A = k === void 0 ? !1 : k, M = a.defaultSelectedKeys, V = a.selectedKeys, z = a.onSelect, U = a.onDeselect, G = a.inlineIndent, Q = G === void 0 ? 24 : G, R = a.motion, H = a.defaultMotions, L = a.triggerSubMenuAction, q = L === void 0 ? "hover" : L, re = a.builtinPlacements, te = a.itemIcon, ue = a.expandIcon, se = a.overflowedIndicator, ve = se === void 0 ? "..." : se, le = a.overflowedIndicatorPopupClassName, Y = a.getPopupContainer, me = a.onClick, Ee = a.onOpenChange, Ae = a.onKeyDown, $e = a.openAnimation, fe = a.openTransitionName, Oe = a._internalRenderMenuItem, ge = a._internalRenderSubMenuItem, pe = lt(a, FP), he = g.useMemo(function() {
    return BP(p, v, _a);
  }, [p, v]), Fe = g.useState(!1), Pe = ae(Fe, 2), Re = Pe[0], xt = Pe[1], ct = g.useRef(), Ve = iP(f), tt = h === "rtl";
  process.env.NODE_ENV !== "production" && dt(!$e && !fe, "`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.");
  var Xe = Vn(F, {
    value: _,
    postState: function(ot) {
      return ot || _a;
    }
  }), _t = ae(Xe, 2), vt = _t[0], Nt = _t[1], ht = function(ot) {
    var ft = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    function Gt() {
      Nt(ot), Ee == null || Ee(ot);
    }
    ft ? s0(Gt) : Gt();
  }, Ue = g.useState(vt), rt = ae(Ue, 2), qt = rt[0], Ct = rt[1], nt = g.useRef(!1), Rt = g.useMemo(function() {
    return (b === "inline" || b === "vertical") && C ? ["vertical", C] : [b, !1];
  }, [b, C]), at = ae(Rt, 2), Dt = at[0], Qe = at[1], De = Dt === "inline", We = g.useState(Dt), be = ae(We, 2), we = be[0], Ze = be[1], Ft = g.useState(Qe), Lt = ae(Ft, 2), At = Lt[0], Yr = Lt[1];
  g.useEffect(function() {
    Ze(Dt), Yr(Qe), nt.current && (De ? Nt(qt) : ht(_a));
  }, [Dt, Qe]);
  var Zr = g.useState(0), Cr = ae(Zr, 2), vr = Cr[0], $ = Cr[1], ee = vr >= he.length - 1 || we !== "horizontal" || D;
  g.useEffect(function() {
    De && Ct(vt);
  }, [vt]), g.useEffect(function() {
    return nt.current = !0, function() {
      nt.current = !1;
    };
  }, []);
  var oe = aP(), xe = oe.registerPath, _e = oe.unregisterPath, Ye = oe.refreshOverflowKeys, ke = oe.isSubPathKey, Te = oe.getKeyPath, bt = oe.getKeys, pt = oe.getSubPathKeys, Le = g.useMemo(function() {
    return {
      registerPath: xe,
      unregisterPath: _e
    };
  }, [xe, _e]), zt = g.useMemo(function() {
    return {
      isSubPathKey: ke
    };
  }, [ke]);
  g.useEffect(function() {
    Ye(ee ? _a : he.slice(vr + 1).map(function(yt) {
      return yt.key;
    }));
  }, [vr, ee]);
  var Pr = Vn(N || P && ((r = he[0]) === null || r === void 0 ? void 0 : r.key), {
    value: N
  }), Qr = ae(Pr, 2), It = Qr[0], jr = Qr[1], Da = No(function(yt) {
    jr(yt);
  }), bo = No(function() {
    jr(void 0);
  });
  As(t, function() {
    return {
      list: ct.current,
      focus: function(ot) {
        var ft, Gt = bt(), Xt = Ql(Gt, Ve), Pn = Xt.elements, $n = Xt.key2element, yo = Xt.element2key, Oa = Yc(ct.current, Pn), Yn = It ?? (Oa[0] ? yo.get(Oa[0]) : (ft = he.find(function(xa) {
          return !xa.props.disabled;
        })) === null || ft === void 0 ? void 0 : ft.key), cn = $n.get(Yn);
        if (Yn && cn) {
          var nr;
          cn == null || (nr = cn.focus) === null || nr === void 0 || nr.call(cn, ot);
        }
      }
    };
  });
  var on = Vn(M || [], {
    value: V,
    // Legacy convert key to array
    postState: function(ot) {
      return Array.isArray(ot) ? ot : ot == null ? _a : [ot];
    }
  }), Xn = ae(on, 2), kr = Xn[0], _r = Xn[1], sn = function(ot) {
    if (T) {
      var ft = ot.key, Gt = kr.includes(ft), Xt;
      A ? Gt ? Xt = kr.filter(function($n) {
        return $n !== ft;
      }) : Xt = [].concat(Be(kr), [ft]) : Xt = [ft], _r(Xt);
      var Pn = Z(Z({}, ot), {}, {
        selectedKeys: Xt
      });
      Gt ? U == null || U(Pn) : z == null || z(Pn);
    }
    !A && vt.length && we !== "inline" && ht(_a);
  }, Fn = No(function(yt) {
    me == null || me(Ss(yt)), sn(yt);
  }), un = No(function(yt, ot) {
    var ft = vt.filter(function(Xt) {
      return Xt !== yt;
    });
    if (ot)
      ft.push(yt);
    else if (we !== "inline") {
      var Gt = pt(yt);
      ft = ft.filter(function(Xt) {
        return !Gt.has(Xt);
      });
    }
    no(vt, ft, !0) || ht(ft, !0);
  }), Lr = function(ot, ft) {
    var Gt = ft ?? !vt.includes(ot);
    un(ot, Gt);
  }, wa = tP(we, It, tt, Ve, ct, bt, Te, jr, Lr, Ae);
  g.useEffect(function() {
    xt(!0);
  }, []);
  var ln = g.useMemo(function() {
    return {
      _internalRenderMenuItem: Oe,
      _internalRenderSubMenuItem: ge
    };
  }, [Oe, ge]), Jr = we !== "horizontal" || D ? he : (
    // Need wrap for overflow dropdown that do not response for open
    he.map(function(yt, ot) {
      return (
        // Always wrap provider to avoid sub node re-mount
        /* @__PURE__ */ g.createElement(ii, {
          key: yt.key,
          overflowDisabled: ot > vr
        }, yt)
      );
    })
  ), Sa = /* @__PURE__ */ g.createElement(En, He({
    id: f,
    ref: ct,
    prefixCls: "".concat(i, "-overflow"),
    component: "ul",
    itemComponent: Qs,
    className: de(i, "".concat(i, "-root"), "".concat(i, "-").concat(we), l, (n = {}, W(n, "".concat(i, "-inline-collapsed"), At), W(n, "".concat(i, "-rtl"), tt), n), s),
    dir: h,
    style: u,
    role: "menu",
    tabIndex: d,
    data: Jr,
    renderRawItem: function(ot) {
      return ot;
    },
    renderRawRest: function(ot) {
      var ft = ot.length, Gt = ft ? he.slice(-ft) : null;
      return /* @__PURE__ */ g.createElement(Js, {
        eventKey: Jl,
        title: ve,
        disabled: ee,
        internalPopupClose: ft === 0,
        popupClassName: le
      }, Gt);
    },
    maxCount: we !== "horizontal" || D ? En.INVALIDATE : En.RESPONSIVE,
    ssr: "full",
    "data-menu-list": !0,
    onVisibleChange: function(ot) {
      $(ot);
    },
    onKeyDown: wa
  }, pe));
  return /* @__PURE__ */ g.createElement(Xc.Provider, {
    value: ln
  }, /* @__PURE__ */ g.createElement(wp.Provider, {
    value: Ve
  }, /* @__PURE__ */ g.createElement(ii, {
    prefixCls: i,
    rootClassName: s,
    mode: we,
    openKeys: vt,
    rtl: tt,
    disabled: E,
    motion: Re ? R : null,
    defaultMotions: Re ? H : null,
    activeKey: It,
    onActive: Da,
    onInactive: bo,
    selectedKeys: kr,
    inlineIndent: Q,
    subMenuOpenDelay: S,
    subMenuCloseDelay: B,
    forceSubMenuRender: x,
    builtinPlacements: re,
    triggerSubMenuAction: q,
    getPopupContainer: Y,
    itemIcon: te,
    expandIcon: ue,
    onItemClick: Fn,
    onOpenChange: un
  }, /* @__PURE__ */ g.createElement(Bp.Provider, {
    value: zt
  }, Sa), /* @__PURE__ */ g.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": !0
  }, /* @__PURE__ */ g.createElement(xp.Provider, {
    value: Le
  }, he)))));
}), pi = PP;
pi.Item = Qs;
pi.SubMenu = Js;
pi.ItemGroup = eu;
pi.Divider = ef;
var $P = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "bars", theme: "outlined" };
const RP = $P;
var TP = function(t, r) {
  return /* @__PURE__ */ g.createElement(di, He({}, t, {
    ref: r,
    icon: RP
  }));
}, Np = /* @__PURE__ */ g.forwardRef(TP);
process.env.NODE_ENV !== "production" && (Np.displayName = "BarsOutlined");
const NP = Np;
var IP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" };
const MP = IP;
var jP = function(t, r) {
  return /* @__PURE__ */ g.createElement(di, He({}, t, {
    ref: r,
    icon: MP
  }));
}, Ip = /* @__PURE__ */ g.forwardRef(jP);
process.env.NODE_ENV !== "production" && (Ip.displayName = "LeftOutlined");
const Xv = Ip, kP = (e) => !isNaN(parseFloat(e)) && isFinite(e), _P = /* @__PURE__ */ g.createContext({
  siderHook: {
    addSider: () => null,
    removeSider: () => null
  }
});
var LP = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Yv = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px"
}, tf = /* @__PURE__ */ g.createContext({}), zP = /* @__PURE__ */ (() => {
  let e = 0;
  return function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return e += 1, `${t}${e}`;
  };
})(), VP = /* @__PURE__ */ g.forwardRef((e, t) => {
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
  } = e, b = LP(e, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]), {
    siderHook: C
  } = Ut(_P), [E, D] = ir("collapsed" in e ? e.collapsed : i), [w, S] = ir(!1);
  jt(() => {
    "collapsed" in e && D(e.collapsed);
  }, [e.collapsed]);
  const O = (P, I) => {
    "collapsed" in e || D(P), f == null || f(P, I);
  }, B = Ge();
  B.current = (P) => {
    S(P.matches), m == null || m(P.matches), E !== P.matches && O(P.matches, "responsive");
  }, jt(() => {
    function P(T) {
      return B.current(T);
    }
    let I;
    if (typeof window < "u") {
      const {
        matchMedia: T
      } = window;
      if (T && h && h in Yv) {
        I = T(`screen and (max-width: ${Yv[h]})`);
        try {
          I.addEventListener("change", P);
        } catch {
          I.addListener(P);
        }
        P(I);
      }
    }
    return () => {
      try {
        I == null || I.removeEventListener("change", P);
      } catch {
        I == null || I.removeListener(P);
      }
    };
  }, [h]), jt(() => {
    const P = zP("ant-sider-");
    return C.addSider(P), () => C.removeSider(P);
  }, []);
  const x = () => {
    O(!E, "clickTrigger");
  }, {
    getPrefixCls: F
  } = Ut(kt), _ = () => {
    const P = F("layout-sider", r), I = xn(b, ["collapsed"]), T = E ? v : d, k = kP(T) ? `${T}px` : String(T), A = parseFloat(String(v || 0)) === 0 ? /* @__PURE__ */ g.createElement("span", {
      onClick: x,
      className: de(`${P}-zero-width-trigger`, `${P}-zero-width-trigger-${c ? "right" : "left"}`),
      style: p
    }, a || /* @__PURE__ */ g.createElement(NP, null)) : null, z = {
      expanded: c ? /* @__PURE__ */ g.createElement(Gl, null) : /* @__PURE__ */ g.createElement(Xv, null),
      collapsed: c ? /* @__PURE__ */ g.createElement(Xv, null) : /* @__PURE__ */ g.createElement(Gl, null)
    }[E ? "collapsed" : "expanded"], U = a !== null ? A || /* @__PURE__ */ g.createElement("div", {
      className: `${P}-trigger`,
      onClick: x,
      style: {
        width: k
      }
    }, a || z) : null, G = Object.assign(Object.assign({}, u), {
      flex: `0 0 ${k}`,
      maxWidth: k,
      minWidth: k,
      width: k
    }), Q = de(P, `${P}-${s}`, {
      [`${P}-collapsed`]: !!E,
      [`${P}-has-trigger`]: l && a !== null && !A,
      [`${P}-below`]: !!w,
      [`${P}-zero-width`]: parseFloat(k) === 0
    }, n);
    return /* @__PURE__ */ g.createElement("aside", Object.assign({
      className: Q
    }, I, {
      style: G,
      ref: t
    }), /* @__PURE__ */ g.createElement("div", {
      className: `${P}-children`
    }, o), l || w && A ? U : null);
  }, N = g.useMemo(() => ({
    siderCollapsed: E
  }), [E]);
  return /* @__PURE__ */ g.createElement(tf.Provider, {
    value: N
  }, _());
});
process.env.NODE_ENV !== "production" && (VP.displayName = "Sider");
var HP = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "ellipsis", theme: "outlined" };
const WP = HP;
var KP = function(t, r) {
  return /* @__PURE__ */ g.createElement(di, He({}, t, {
    ref: r,
    icon: WP
  }));
}, Mp = /* @__PURE__ */ g.forwardRef(KP);
process.env.NODE_ENV !== "production" && (Mp.displayName = "EllipsisOutlined");
const jp = Mp;
var UP = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const qP = (e) => {
  const {
    prefixCls: t,
    className: r,
    dashed: n
  } = e, a = UP(e, ["prefixCls", "className", "dashed"]), {
    getPrefixCls: o
  } = g.useContext(kt), i = o("menu", t), s = de({
    [`${i}-item-divider-dashed`]: !!n
  }, r);
  return /* @__PURE__ */ g.createElement(ef, Object.assign({
    className: s
  }, a));
}, kp = qP, GP = /* @__PURE__ */ Gr({
  prefixCls: "",
  firstLevel: !0,
  inlineCollapsed: !1
}), Os = GP, XP = (e) => {
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
  } = g.useContext(Os), v = (C) => {
    const E = /* @__PURE__ */ g.createElement("span", {
      className: `${s}-title-content`
    }, n);
    return (!a || Un(n) && n.type === "span") && n && C && u && typeof n == "string" ? /* @__PURE__ */ g.createElement("div", {
      className: `${s}-inline-collapsed-noicon`
    }, n.charAt(0)) : E;
  }, {
    siderCollapsed: p
  } = g.useContext(tf);
  let h = o;
  typeof o > "u" ? h = u ? n : "" : o === !1 && (h = "");
  const f = {
    title: h
  };
  !p && !d && (f.title = null, f.open = !1);
  const m = Wn(n).length;
  let b = /* @__PURE__ */ g.createElement(Qs, Object.assign({}, xn(e, ["title", "icon", "danger"]), {
    className: de({
      [`${s}-item-danger`]: i,
      [`${s}-item-only-child`]: (a ? m + 1 : m) === 1
    }, r),
    title: typeof o == "string" ? o : void 0
  }), Ca(a, {
    className: de(Un(a) ? (t = a.props) === null || t === void 0 ? void 0 : t.className : "", `${s}-item-icon`)
  }), v(d));
  return c || (b = /* @__PURE__ */ g.createElement(MF, Object.assign({}, f, {
    placement: l === "rtl" ? "left" : "right",
    overlayClassName: `${s}-inline-collapsed-tooltip`
  }), b)), b;
}, _p = XP, YP = (e) => {
  var t;
  const {
    popupClassName: r,
    icon: n,
    title: a,
    theme: o
  } = e, i = g.useContext(Os), {
    prefixCls: s,
    inlineCollapsed: u,
    theme: l
  } = i, c = ho();
  let d;
  if (!n)
    d = u && !c.length && a && typeof a == "string" ? /* @__PURE__ */ g.createElement("div", {
      className: `${s}-inline-collapsed-noicon`
    }, a.charAt(0)) : /* @__PURE__ */ g.createElement("span", {
      className: `${s}-title-content`
    }, a);
  else {
    const h = Un(a) && a.type === "span";
    d = /* @__PURE__ */ g.createElement(g.Fragment, null, Ca(n, {
      className: de(Un(n) ? (t = n.props) === null || t === void 0 ? void 0 : t.className : "", `${s}-item-icon`)
    }), h ? a : /* @__PURE__ */ g.createElement("span", {
      className: `${s}-title-content`
    }, a));
  }
  const v = g.useMemo(() => Object.assign(Object.assign({}, i), {
    firstLevel: !1
  }), [i]), [p] = jc("Menu");
  return /* @__PURE__ */ g.createElement(Os.Provider, {
    value: v
  }, /* @__PURE__ */ g.createElement(Js, Object.assign({}, xn(e, ["icon"]), {
    title: d,
    popupClassName: de(s, r, `${s}-${o || l}`),
    popupStyle: {
      zIndex: p
    }
  })));
}, Lp = YP;
var ZP = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function tc(e) {
  return (e || []).map((t, r) => {
    if (t && typeof t == "object") {
      const n = t, {
        label: a,
        children: o,
        key: i,
        type: s
      } = n, u = ZP(n, ["label", "children", "key", "type"]), l = i ?? `tmp-${r}`;
      return o || s === "group" ? s === "group" ? /* @__PURE__ */ g.createElement(eu, Object.assign({
        key: l
      }, u, {
        title: a
      }), tc(o)) : /* @__PURE__ */ g.createElement(Lp, Object.assign({
        key: l
      }, u, {
        title: a
      }), tc(o)) : s === "divider" ? /* @__PURE__ */ g.createElement(kp, Object.assign({
        key: l
      }, u)) : /* @__PURE__ */ g.createElement(_p, Object.assign({
        key: l
      }, u), a);
    }
    return null;
  }).filter((t) => t);
}
function QP(e) {
  return g.useMemo(() => e && tc(e), [e]);
}
var JP = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const xs = /* @__PURE__ */ g.createContext(null), e$ = /* @__PURE__ */ g.forwardRef((e, t) => {
  const {
    children: r
  } = e, n = JP(e, ["children"]), a = g.useContext(xs), o = g.useMemo(() => Object.assign(Object.assign({}, a), n), [
    a,
    n.prefixCls,
    // restProps.expandIcon, Not mark as deps since this is a ReactNode
    n.mode,
    n.selectable,
    n.rootClassName
    // restProps.validator, Not mark as deps since this is a function
  ]), i = wD(r), s = li(t, i ? r.ref : null);
  return /* @__PURE__ */ g.createElement(xs.Provider, {
    value: o
  }, /* @__PURE__ */ g.createElement(Hh, null, i ? /* @__PURE__ */ g.cloneElement(r, {
    ref: s
  }) : r));
}), t$ = (e) => {
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
      borderBottom: `${Me(o)} ${i} ${a}`,
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
}, r$ = (e) => {
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
          transform: `rotate(-45deg) translateY(${Me(n(r).mul(-1).equal())})`
        },
        "&::after": {
          transform: `rotate(45deg) translateY(${Me(r)})`
        }
      }
    }
  };
}, Zv = (e) => Object.assign({}, Tc(e)), Qv = (e, t) => {
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
    lineType: C,
    colorSplit: E,
    // Disabled
    itemDisabledColor: D,
    // Danger
    dangerItemColor: w,
    dangerItemHoverColor: S,
    dangerItemSelectedColor: O,
    dangerItemActiveBg: B,
    dangerItemSelectedBg: x,
    // Bg
    popupBg: F,
    itemHoverBg: _,
    itemActiveBg: N,
    menuSubMenuBg: P,
    // Horizontal
    horizontalItemSelectedColor: I,
    horizontalItemSelectedBg: T,
    horizontalItemBorderRadius: k,
    horizontalItemHoverBg: A
  } = e;
  return {
    [`${r}-${t}, ${r}-${t} > ${r}`]: {
      color: n,
      background: i,
      [`&${r}-root:focus-visible`]: Object.assign({}, Zv(e)),
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
        color: `${D} !important`
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
            backgroundColor: N
          }
        },
        [`${r}-submenu-title`]: {
          "&:hover": {
            backgroundColor: _
          },
          "&:active": {
            backgroundColor: N
          }
        }
      },
      // Danger - only Item has
      [`${r}-item-danger`]: {
        color: w,
        [`&${r}-item:hover`]: {
          [`&:not(${r}-item-selected):not(${r}-submenu-selected)`]: {
            color: S
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
          color: O
        },
        "a, a:hover": {
          color: "inherit"
        }
      },
      [`& ${r}-item-selected`]: {
        backgroundColor: u,
        // Danger
        [`&${r}-item-danger`]: {
          backgroundColor: x
        }
      },
      [`${r}-item, ${r}-submenu-title`]: {
        [`&:not(${r}-item-disabled):focus-visible`]: Object.assign({}, Zv(e))
      },
      [`&${r}-submenu > ${r}`]: {
        backgroundColor: P
      },
      // ===== 设置浮层的颜色 =======
      // ！dark 模式会被popupBg 会被rest 为 darkPopupBg
      [`&${r}-popup > ${r}`]: {
        backgroundColor: F
      },
      [`&${r}-submenu-popup > ${r}`]: {
        backgroundColor: F
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
          borderRadius: k,
          "&::after": {
            position: "absolute",
            insetInline: f,
            bottom: 0,
            borderBottom: `${Me(l)} solid transparent`,
            transition: `border-color ${v} ${p}`,
            content: '""'
          },
          "&:hover, &-active, &-open": {
            background: A,
            "&::after": {
              borderBottomWidth: l,
              borderBottomColor: I
            }
          },
          "&-selected": {
            color: I,
            backgroundColor: T,
            "&:hover": {
              backgroundColor: T
            },
            "&::after": {
              borderBottomWidth: l,
              borderBottomColor: I
            }
          }
        }
      }),
      // ================== Inline & Vertical ===================
      //
      [`&${r}-root`]: {
        [`&${r}-inline, &${r}-vertical`]: {
          borderInlineEnd: `${Me(d)} ${C} ${E}`
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
            borderInlineEnd: `${Me(c)} solid ${a}`,
            transform: "scaleY(0.0001)",
            opacity: 0,
            transition: [`transform ${m} ${h}`, `opacity ${m} ${h}`].join(","),
            content: '""'
          },
          // Danger
          [`&${r}-item-danger`]: {
            "&::after": {
              borderInlineEndColor: O
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
}, Jv = (e) => {
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
      lineHeight: Me(r),
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
      lineHeight: Me(r)
    },
    [`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]: {
      paddingInlineEnd: l
    }
  };
}, n$ = (e) => {
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
    lineHeight: Me(n),
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
        }, Jv(e))
      },
      [`${t}-submenu-popup`]: {
        [`${t}-vertical`]: Object.assign(Object.assign({}, Jv(e)), {
          boxShadow: h
        })
      }
    },
    // Vertical only
    {
      [`${t}-submenu-popup ${t}-vertical${t}-sub`]: {
        minWidth: o,
        maxHeight: `calc(100vh - ${Me(e.calc(i).mul(2.5).equal())})`,
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
          paddingInline: `calc(50% - ${Me(e.calc(d).div(2).equal())} - ${Me(c)})`,
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
            lineHeight: Me(n),
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
        [`${t}-item-group-title`]: Object.assign(Object.assign({}, QS), {
          paddingInline: p
        })
      }
    }
  ];
}, eg = (e) => {
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
      [`${t}-item-icon`]: Object.assign({}, ch()),
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
}, tg = (e) => {
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
          transform: `rotate(45deg) translateY(${Me(e.calc(i).mul(-1).equal())})`
        },
        "&::after": {
          transform: `rotate(-45deg) translateY(${Me(i)})`
        }
      }
    }
  };
}, a$ = (e) => {
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
    groupTitleLineHeight: C,
    groupTitleFontSize: E
  } = e;
  return [
    // Misc
    {
      "": {
        [`${r}`]: Object.assign(Object.assign({}, Jd()), {
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
      [r]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ya(e)), Jd()), {
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
          padding: `${Me(s)} ${Me(u)}`,
          fontSize: E,
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
      }), eg(e)), {
        [`${r}-item-group`]: {
          [`${r}-item-group-list`]: {
            margin: 0,
            padding: 0,
            [`${r}-item, ${r}-submenu-title`]: {
              paddingInline: `${Me(e.calc(n).mul(2).equal())} ${Me(u)}`
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
              inset: `${Me(b)} 0 0`,
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
          }, eg(e)), tg(e)), {
            [`${r}-item, ${r}-submenu > ${r}-submenu-title`]: {
              borderRadius: p
            },
            [`${r}-submenu-title::after`]: {
              transition: `transform ${a} ${i}`
            }
          })
        }
      }), tg(e)), {
        [`&-inline-collapsed ${r}-submenu-arrow,
        &-inline ${r}-submenu-arrow`]: {
          // ↓
          "&::before": {
            transform: `rotate(-45deg) translateX(${Me(f)})`
          },
          "&::after": {
            transform: `rotate(45deg) translateX(${Me(e.calc(f).mul(-1).equal())})`
          }
        },
        [`${r}-submenu-open${r}-submenu-inline > ${r}-submenu-title > ${r}-submenu-arrow`]: {
          // ↑
          transform: `translateY(${Me(e.calc(h).mul(0.2).mul(-1).equal())})`,
          "&::after": {
            transform: `rotate(-45deg) translateX(${Me(e.calc(f).mul(-1).equal())})`
          },
          "&::before": {
            transform: `rotate(45deg) translateX(${Me(f)})`
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
}, o$ = (e) => {
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
    lineHeight: C,
    colorBgElevated: E,
    marginXXS: D,
    padding: w,
    fontSize: S,
    controlHeightSM: O,
    fontSizeLG: B,
    colorTextLightSolid: x,
    colorErrorHover: F
  } = e, _ = (t = e.activeBarWidth) !== null && t !== void 0 ? t : 0, N = (r = e.activeBarBorderWidth) !== null && r !== void 0 ? r : p, P = (n = e.itemMarginInline) !== null && n !== void 0 ? n : e.marginXXS, I = new er(x).setAlpha(0.65).toRgbString();
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
    activeBarWidth: _,
    colorActiveBarHeight: h,
    activeBarHeight: h,
    colorActiveBarBorderSize: p,
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
    itemMarginInline: P,
    horizontalItemBorderRadius: 0,
    horizontalItemHoverBg: "transparent",
    itemHeight: b,
    groupTitleLineHeight: C,
    collapsedWidth: b * 2,
    popupBg: E,
    itemMarginBlock: D,
    itemPaddingInline: w,
    horizontalLineHeight: `${b * 1.15}px`,
    iconSize: S,
    iconMarginInlineEnd: O - S,
    collapsedIconSize: B,
    groupTitleFontSize: S,
    // Disabled
    darkItemDisabledColor: new er(x).setAlpha(0.25).toRgbString(),
    // Dark
    darkItemColor: I,
    darkDangerItemColor: o,
    darkItemBg: "#001529",
    darkPopupBg: "#001529",
    darkSubMenuItemBg: "#000c17",
    darkItemSelectedColor: x,
    darkItemSelectedBg: a,
    darkDangerItemSelectedBg: o,
    darkItemHoverBg: "transparent",
    darkGroupTitleColor: I,
    darkItemHoverColor: x,
    darkDangerItemHoverColor: F,
    darkDangerItemSelectedColor: x,
    darkDangerItemActiveBg: o,
    // internal
    itemWidth: _ ? `calc(100% + ${N}px)` : `calc(100% - ${P * 2}px)`
  };
}, i$ = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  return go("Menu", (a) => {
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
      darkGroupTitleColor: C,
      darkItemHoverColor: E,
      darkItemDisabledColor: D,
      darkDangerItemHoverColor: w,
      darkDangerItemSelectedColor: S,
      darkDangerItemActiveBg: O,
      popupBg: B,
      darkPopupBg: x
    } = a, F = a.calc(l).div(7).mul(5).equal(), _ = Fr(a, {
      menuArrowSize: F,
      menuHorizontalHeight: a.calc(u).mul(1.15).equal(),
      menuArrowOffset: a.calc(F).mul(0.25).equal(),
      menuPanelMaskInset: -7,
      // Still a hardcode here since it's offset by rc-align
      menuSubMenuBg: o,
      calc: a.calc,
      popupBg: B
    }), N = Fr(_, {
      itemColor: c,
      itemHoverColor: E,
      groupTitleColor: C,
      itemSelectedColor: h,
      itemBg: v,
      popupBg: x,
      subMenuItemBg: p,
      itemActiveBg: "transparent",
      itemSelectedBg: f,
      activeBarHeight: 0,
      activeBarBorderWidth: 0,
      itemHoverBg: b,
      // Disabled
      itemDisabledColor: D,
      // Danger
      dangerItemColor: d,
      dangerItemHoverColor: w,
      dangerItemSelectedColor: S,
      dangerItemActiveBg: O,
      dangerItemSelectedBg: m,
      menuSubMenuBg: p,
      // Horizontal
      horizontalItemSelectedColor: s,
      horizontalItemSelectedBg: i
    });
    return [
      // Basic
      a$(_),
      // Horizontal
      t$(_),
      // Hard code for some light style
      // Vertical
      n$(_),
      // Hard code for some light style
      // Theme
      Qv(_, "light"),
      Qv(N, "dark"),
      // RTL
      r$(_),
      // Motion
      YB(_),
      Ds(_, "slide-up"),
      Ds(_, "slide-down"),
      Kc(_, "zoom-big")
    ];
  }, o$, {
    deprecatedTokens: [["colorGroupTitle", "groupTitleColor"], ["radiusItem", "itemBorderRadius"], ["radiusSubMenuItem", "subMenuItemBorderRadius"], ["colorItemText", "itemColor"], ["colorItemTextHover", "itemHoverColor"], ["colorItemTextHoverHorizontal", "horizontalItemHoverColor"], ["colorItemTextSelected", "itemSelectedColor"], ["colorItemTextSelectedHorizontal", "horizontalItemSelectedColor"], ["colorItemTextDisabled", "itemDisabledColor"], ["colorDangerItemText", "dangerItemColor"], ["colorDangerItemTextHover", "dangerItemHoverColor"], ["colorDangerItemTextSelected", "dangerItemSelectedColor"], ["colorDangerItemBgActive", "dangerItemActiveBg"], ["colorDangerItemBgSelected", "dangerItemSelectedBg"], ["colorItemBg", "itemBg"], ["colorItemBgHover", "itemHoverBg"], ["colorSubItemBg", "subMenuItemBg"], ["colorItemBgActive", "itemActiveBg"], ["colorItemBgSelectedHorizontal", "horizontalItemSelectedBg"], ["colorActiveBarWidth", "activeBarWidth"], ["colorActiveBarHeight", "activeBarHeight"], ["colorActiveBarBorderSize", "activeBarBorderWidth"], ["colorItemBgSelected", "itemSelectedBg"]],
    // Dropdown will handle menu style self. We do not need to handle this.
    injectStyle: r,
    unitless: {
      groupTitleLineHeight: !0
    }
  })(e, t);
};
var s$ = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const u$ = /* @__PURE__ */ Xr((e, t) => {
  var r, n;
  const a = g.useContext(xs), o = a || {}, {
    getPrefixCls: i,
    getPopupContainer: s,
    direction: u,
    menu: l
  } = g.useContext(kt), c = i(), {
    prefixCls: d,
    className: v,
    style: p,
    theme: h = "light",
    expandIcon: f,
    _internalDisableMenuItemTitleTooltip: m,
    inlineCollapsed: b,
    siderCollapsed: C,
    items: E,
    children: D,
    rootClassName: w,
    mode: S,
    selectable: O,
    onClick: B,
    overflowedIndicatorPopupClassName: x
  } = e, F = s$(e, ["prefixCls", "className", "style", "theme", "expandIcon", "_internalDisableMenuItemTitleTooltip", "inlineCollapsed", "siderCollapsed", "items", "children", "rootClassName", "mode", "selectable", "onClick", "overflowedIndicatorPopupClassName"]), _ = xn(F, ["collapsedWidth"]), N = QP(E) || D;
  if (process.env.NODE_ENV !== "production") {
    const L = An("Menu");
    process.env.NODE_ENV !== "production" && L(!("inlineCollapsed" in e && S !== "inline"), "usage", "`inlineCollapsed` should only be used when `mode` is inline."), process.env.NODE_ENV !== "production" && L(!(e.siderCollapsed !== void 0 && "inlineCollapsed" in e), "usage", "`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead."), L.deprecated("items" in e && !D, "children", "items");
  }
  (r = o.validator) === null || r === void 0 || r.call(o, {
    mode: S
  });
  const P = Sr(function() {
    var L;
    B == null || B.apply(void 0, arguments), (L = o.onClick) === null || L === void 0 || L.call(o);
  }), I = o.mode || S, T = O ?? o.selectable, k = g.useMemo(() => C !== void 0 ? C : b, [b, C]), A = {
    horizontal: {
      motionName: `${c}-slide-up`
    },
    inline: wx(c),
    other: {
      motionName: `${c}-zoom-big`
    }
  }, M = i("menu", d || o.prefixCls), V = Us(M), [z, U, G] = i$(M, V, !a), Q = de(`${M}-${h}`, l == null ? void 0 : l.className, v);
  let R;
  if (typeof f == "function")
    R = f;
  else if (f === null || f === !1)
    R = null;
  else if (o.expandIcon === null || o.expandIcon === !1)
    R = null;
  else {
    const L = f ?? o.expandIcon;
    R = Ca(L, {
      className: de(`${M}-submenu-expand-icon`, Un(L) ? (n = L.props) === null || n === void 0 ? void 0 : n.className : "")
    });
  }
  const H = g.useMemo(() => ({
    prefixCls: M,
    inlineCollapsed: k || !1,
    direction: u,
    firstLevel: !0,
    theme: h,
    mode: I,
    disableMenuItemTitleTooltip: m
  }), [M, k, u, m, h]);
  return z(/* @__PURE__ */ g.createElement(xs.Provider, {
    value: null
  }, /* @__PURE__ */ g.createElement(Os.Provider, {
    value: H
  }, /* @__PURE__ */ g.createElement(pi, Object.assign({
    getPopupContainer: s,
    overflowedIndicator: /* @__PURE__ */ g.createElement(jp, null),
    overflowedIndicatorPopupClassName: de(M, `${M}-${h}`, x),
    mode: I,
    selectable: T,
    onClick: P
  }, _, {
    inlineCollapsed: k,
    style: Object.assign(Object.assign({}, l == null ? void 0 : l.style), p),
    className: Q,
    prefixCls: M,
    direction: u,
    defaultMotions: A,
    expandIcon: R,
    ref: t,
    rootClassName: de(w, U, o.rootClassName, G, V)
  }), N))));
}), l$ = u$, po = /* @__PURE__ */ Xr((e, t) => {
  const r = Ge(null), n = g.useContext(tf);
  return As(t, () => ({
    menu: r.current,
    focus: (a) => {
      var o;
      (o = r.current) === null || o === void 0 || o.focus(a);
    }
  })), /* @__PURE__ */ g.createElement(l$, Object.assign({
    ref: r
  }, e, n));
});
po.Item = _p;
po.SubMenu = Lp;
po.Divider = kp;
po.ItemGroup = eu;
process.env.NODE_ENV !== "production" && (po.displayName = "Menu");
const c$ = po, f$ = (e) => {
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
}, d$ = (e) => {
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
      [t]: Object.assign(Object.assign({}, Ya(e)), {
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
          animationName: op
        },
        [`&${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-topLeft,
          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-topLeft,
          &${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-top,
          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-top,
          &${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-topRight,
          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-topRight`]: {
          animationName: sp
        },
        [`&${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottomLeft,
          &${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottom,
          &${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottomRight`]: {
          animationName: ip
        },
        [`&${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-topLeft,
          &${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-top,
          &${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-topRight`]: {
          animationName: up
        }
      })
    },
    // =============================================================
    // ==                        Arrow style                      ==
    // =============================================================
    bp(e, f, {
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
        }, Ol(e)), {
          [`${r}-item-group-title`]: {
            padding: `${Me(l)} ${Me(h)}`,
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
            padding: `${Me(l)} ${Me(h)}`,
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
          }, Ol(e)), {
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
              margin: `${Me(e.marginXXS)} 0`,
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
            margin: `0 ${Me(e.marginXS)}`,
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
    [Ds(e, "slide-up"), Ds(e, "slide-down"), Tv(e, "move-up"), Tv(e, "move-down"), Kc(e, "zoom-big")]
  ];
}, v$ = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 50,
  paddingBlock: (e.controlHeight - e.fontSize * e.lineHeight) / 2
}, qc({
  contentRadius: e.borderRadiusLG,
  limitVerticalRadius: !0
})), hp(e)), g$ = go("Dropdown", (e) => {
  const {
    marginXXS: t,
    sizePopupArrow: r,
    paddingXXS: n,
    componentCls: a
  } = e, o = Fr(e, {
    menuCls: `${a}-menu`,
    dropdownArrowDistance: e.calc(r).div(2).add(t).equal(),
    dropdownEdgeChildPadding: n
  });
  return [d$(o), f$(o)];
}, v$), tu = (e) => {
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
    autoAdjustOverflow: C = !0,
    placement: E = "",
    overlay: D,
    transitionName: w
  } = e, {
    getPopupContainer: S,
    getPrefixCls: O,
    direction: B,
    dropdown: x
  } = g.useContext(kt), F = An("Dropdown");
  process.env.NODE_ENV !== "production" && ([["visible", "open"], ["onVisibleChange", "onOpenChange"]].forEach((le) => {
    let [Y, me] = le;
    F.deprecated(!(Y in e), Y, me);
  }), F.deprecated(!("overlay" in e), "overlay", "menu"));
  const _ = g.useMemo(() => {
    const le = O();
    return w !== void 0 ? w : E.includes("top") ? `${le}-slide-down` : `${le}-slide-up`;
  }, [O, E, w]), N = g.useMemo(() => E ? E.includes("Center") ? E.slice(0, E.indexOf("Center")) : E : B === "rtl" ? "bottomRight" : "bottomLeft", [E, B]);
  if (process.env.NODE_ENV !== "production") {
    if (E.includes("Center")) {
      const le = E.slice(0, E.indexOf("Center"));
      process.env.NODE_ENV !== "production" && F(!E.includes("Center"), "deprecated", `You are using '${E}' placement in Dropdown, which is deprecated. Try to use '${le}' instead.`);
    }
    [["visible", "open"], ["onVisibleChange", "onOpenChange"]].forEach((le) => {
      let [Y, me] = le;
      F.deprecated(!(Y in e), Y, me);
    });
  }
  const P = O("dropdown", n), I = Us(P), [T, k, A] = g$(P, I), [, M] = Mr(), V = g.Children.only(a), z = Ca(V, {
    className: de(`${P}-trigger`, {
      [`${P}-rtl`]: B === "rtl"
    }, V.props.className),
    disabled: i
  }), U = i ? [] : o;
  let G;
  U && U.includes("contextMenu") && (G = !0);
  const [Q, R] = Vn(!1, {
    value: v ?? h
  }), H = Sr((le) => {
    p == null || p(le, {
      source: "trigger"
    }), f == null || f(le), R(le);
  }), L = de(l, c, k, A, I, x == null ? void 0 : x.className, {
    [`${P}-rtl`]: B === "rtl"
  }), q = yp({
    arrowPointAtCenter: typeof r == "object" && r.pointAtCenter,
    autoAdjustOverflow: C,
    offset: M.marginXXS,
    arrowWidth: r ? M.sizePopupArrow : 0,
    borderRadius: M.borderRadius
  }), re = g.useCallback(() => {
    t != null && t.selectable && (t != null && t.multiple) || (p == null || p(!1, {
      source: "menu"
    }), R(!1));
  }, [t == null ? void 0 : t.selectable, t == null ? void 0 : t.multiple]), te = () => {
    let le;
    return t != null && t.items ? le = /* @__PURE__ */ g.createElement(c$, Object.assign({}, t)) : typeof D == "function" ? le = D() : le = D, s && (le = s(le)), le = g.Children.only(typeof le == "string" ? /* @__PURE__ */ g.createElement("span", null, le) : le), /* @__PURE__ */ g.createElement(e$, {
      prefixCls: `${P}-menu`,
      rootClassName: de(A, I),
      expandIcon: /* @__PURE__ */ g.createElement("span", {
        className: `${P}-menu-submenu-arrow`
      }, /* @__PURE__ */ g.createElement(Gl, {
        className: `${P}-menu-submenu-arrow-icon`
      })),
      mode: "vertical",
      selectable: !1,
      onClick: re,
      validator: (Y) => {
        let {
          mode: me
        } = Y;
        process.env.NODE_ENV !== "production" && F(!me || me === "vertical", "usage", `mode="${me}" is not supported for Dropdown's Menu.`);
      }
    }, le);
  }, [ue, se] = jc("Dropdown", d == null ? void 0 : d.zIndex);
  let ve = /* @__PURE__ */ g.createElement(qF, Object.assign({
    alignPoint: G
  }, xn(e, ["rootClassName"]), {
    mouseEnterDelay: m,
    mouseLeaveDelay: b,
    visible: Q,
    builtinPlacements: q,
    arrow: !!r,
    overlayClassName: L,
    prefixCls: P,
    getPopupContainer: u || S,
    transitionName: _,
    trigger: U,
    overlay: te,
    placement: N,
    onVisibleChange: H,
    overlayStyle: Object.assign(Object.assign(Object.assign({}, x == null ? void 0 : x.style), d), {
      zIndex: ue
    })
  }), z);
  return ue && (ve = /* @__PURE__ */ g.createElement(qs.Provider, {
    value: se
  }, ve)), T(ve);
};
function m$(e) {
  return Object.assign(Object.assign({}, e), {
    align: {
      overflow: {
        adjustX: !1,
        adjustY: !1
      }
    }
  });
}
const h$ = QB(tu, "dropdown", (e) => e, m$), p$ = (e) => /* @__PURE__ */ g.createElement(h$, Object.assign({}, e), /* @__PURE__ */ g.createElement("span", null));
tu._InternalPanelDoNotUseOrYouWillBeFired = p$;
process.env.NODE_ENV !== "production" && (tu.displayName = "Dropdown");
const zp = tu;
var b$ = ["prefixCls", "className", "style", "checked", "disabled", "defaultChecked", "type", "title", "onChange"], y$ = /* @__PURE__ */ Xr(function(e, t) {
  var r, n = e.prefixCls, a = n === void 0 ? "rc-checkbox" : n, o = e.className, i = e.style, s = e.checked, u = e.disabled, l = e.defaultChecked, c = l === void 0 ? !1 : l, d = e.type, v = d === void 0 ? "checkbox" : d, p = e.title, h = e.onChange, f = lt(e, b$), m = Ge(null), b = Vn(c, {
    value: s
  }), C = ae(b, 2), E = C[0], D = C[1];
  As(t, function() {
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
  var w = de(a, o, (r = {}, W(r, "".concat(a, "-checked"), E), W(r, "".concat(a, "-disabled"), u), r)), S = function(B) {
    u || ("checked" in e || D(B.target.checked), h == null || h({
      target: Z(Z({}, e), {}, {
        type: v,
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
  return /* @__PURE__ */ g.createElement("span", {
    className: w,
    title: p,
    style: i
  }, /* @__PURE__ */ g.createElement("input", He({}, f, {
    className: "".concat(a, "-input"),
    ref: m,
    onChange: S,
    disabled: u,
    checked: !!E,
    type: v
  })), /* @__PURE__ */ g.createElement("span", {
    className: "".concat(a, "-inner")
  }));
});
const C$ = (e) => {
  const {
    checkboxCls: t
  } = e, r = `${t}-wrapper`;
  return [
    // ===================== Basic =====================
    {
      // Group
      [`${t}-group`]: Object.assign(Object.assign({}, Ya(e)), {
        display: "inline-flex",
        flexWrap: "wrap",
        columnGap: e.marginXS,
        // Group > Grid
        [`> ${e.antCls}-row`]: {
          flex: 1
        }
      }),
      // Wrapper
      [r]: Object.assign(Object.assign({}, Ya(e)), {
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
      [t]: Object.assign(Object.assign({}, Ya(e)), {
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
          [`&:focus-visible + ${t}-inner`]: Object.assign({}, Tc(e))
        },
        // Wrapper > Checkbox > inner
        [`${t}-inner`]: {
          boxSizing: "border-box",
          display: "block",
          width: e.checkboxSize,
          height: e.checkboxSize,
          direction: "ltr",
          backgroundColor: e.colorBgContainer,
          border: `${Me(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
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
            border: `${Me(e.lineWidthBold)} solid ${e.colorWhite}`,
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
function E$(e, t) {
  const r = Fr(t, {
    checkboxCls: `.${e}`,
    checkboxSize: t.controlInteractiveSize
  });
  return [C$(r)];
}
const Vp = go("Checkbox", (e, t) => {
  let {
    prefixCls: r
  } = t;
  return [E$(r, e)];
}), D$ = /* @__PURE__ */ ne.createContext(null), Hp = D$;
var w$ = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const S$ = (e, t) => {
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
  } = e, p = w$(e, ["prefixCls", "className", "rootClassName", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave", "skipGroup", "disabled"]), {
    getPrefixCls: h,
    direction: f,
    checkbox: m
  } = g.useContext(kt), b = g.useContext(Hp), {
    isFormItemInput: C
  } = g.useContext(ap), E = g.useContext($c), D = (r = (b == null ? void 0 : b.disabled) || v) !== null && r !== void 0 ? r : E, w = g.useRef(p.value);
  if (process.env.NODE_ENV !== "production") {
    const T = An("Checkbox");
    process.env.NODE_ENV !== "production" && T("checked" in p || !!b || !("value" in p), "usage", "`value` is not a valid prop, do you mean `checked`?");
  }
  g.useEffect(() => {
    b == null || b.registerValue(p.value);
  }, []), g.useEffect(() => {
    if (!d)
      return p.value !== w.current && (b == null || b.cancelValue(w.current), b == null || b.registerValue(p.value), w.current = p.value), () => b == null ? void 0 : b.cancelValue(p.value);
  }, [p.value]);
  const S = h("checkbox", n), O = Us(S), [B, x, F] = Vp(S, O), _ = Object.assign({}, p);
  b && !d && (_.onChange = function() {
    p.onChange && p.onChange.apply(p, arguments), b.toggleOption && b.toggleOption({
      label: i,
      value: p.value
    });
  }, _.name = b.name, _.checked = b.value.includes(p.value));
  const N = de(`${S}-wrapper`, {
    [`${S}-rtl`]: f === "rtl",
    [`${S}-wrapper-checked`]: _.checked,
    [`${S}-wrapper-disabled`]: D,
    [`${S}-wrapper-in-form-item`]: C
  }, m == null ? void 0 : m.className, a, o, F, O, x), P = de({
    [`${S}-indeterminate`]: s
  }, _c, x), I = s ? "mixed" : void 0;
  return B(/* @__PURE__ */ g.createElement(kh, {
    component: "Checkbox",
    disabled: D
  }, /* @__PURE__ */ g.createElement("label", {
    className: N,
    style: Object.assign(Object.assign({}, m == null ? void 0 : m.style), u),
    onMouseEnter: l,
    onMouseLeave: c
  }, /* @__PURE__ */ g.createElement(y$, Object.assign({
    "aria-checked": I
  }, _, {
    prefixCls: S,
    className: P,
    disabled: D,
    ref: t
  })), i !== void 0 && /* @__PURE__ */ g.createElement("span", null, i))));
}, Wp = /* @__PURE__ */ g.forwardRef(S$);
process.env.NODE_ENV !== "production" && (Wp.displayName = "Checkbox");
const Kp = Wp;
var O$ = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const x$ = /* @__PURE__ */ g.forwardRef((e, t) => {
  const {
    defaultValue: r,
    children: n,
    options: a = [],
    prefixCls: o,
    className: i,
    rootClassName: s,
    style: u,
    onChange: l
  } = e, c = O$(e, ["defaultValue", "children", "options", "prefixCls", "className", "rootClassName", "style", "onChange"]), {
    getPrefixCls: d,
    direction: v
  } = g.useContext(kt), [p, h] = g.useState(c.value || r || []), [f, m] = g.useState([]);
  g.useEffect(() => {
    "value" in c && h(c.value || []);
  }, [c.value]);
  const b = g.useMemo(() => a.map((T) => typeof T == "string" || typeof T == "number" ? {
    label: T,
    value: T
  } : T), [a]), C = (T) => {
    m((k) => k.filter((A) => A !== T));
  }, E = (T) => {
    m((k) => [].concat(Be(k), [T]));
  }, D = (T) => {
    const k = p.indexOf(T.value), A = Be(p);
    k === -1 ? A.push(T.value) : A.splice(k, 1), "value" in c || h(A), l == null || l(A.filter((M) => f.includes(M)).sort((M, V) => {
      const z = b.findIndex((G) => G.value === M), U = b.findIndex((G) => G.value === V);
      return z - U;
    }));
  }, w = d("checkbox", o), S = `${w}-group`, O = Us(w), [B, x, F] = Vp(w, O), _ = xn(c, ["value", "disabled"]), N = a.length ? b.map((T) => /* @__PURE__ */ g.createElement(Kp, {
    prefixCls: w,
    key: T.value.toString(),
    disabled: "disabled" in T ? T.disabled : c.disabled,
    value: T.value,
    checked: p.includes(T.value),
    onChange: T.onChange,
    className: `${S}-item`,
    style: T.style,
    title: T.title,
    id: T.id,
    required: T.required
  }, T.label)) : n, P = {
    toggleOption: D,
    value: p,
    disabled: c.disabled,
    name: c.name,
    // https://github.com/ant-design/ant-design/issues/16376
    registerValue: E,
    cancelValue: C
  }, I = de(S, {
    [`${S}-rtl`]: v === "rtl"
  }, i, s, F, O, x);
  return B(/* @__PURE__ */ g.createElement("div", Object.assign({
    className: I,
    style: u
  }, _, {
    ref: t
  }), /* @__PURE__ */ g.createElement(Hp.Provider, {
    value: P
  }, N)));
}), A$ = x$, ru = Kp;
ru.Group = A$;
ru.__ANT_CHECKBOX = !0;
process.env.NODE_ENV !== "production" && (ru.displayName = "Checkbox");
const B$ = ru;
function rg(e) {
  return ["small", "middle", "large"].includes(e);
}
function ng(e) {
  return e ? typeof e == "number" && !Number.isNaN(e) : !1;
}
const Up = /* @__PURE__ */ ne.createContext({
  latestIndex: 0
}), F$ = Up.Provider, P$ = (e) => {
  let {
    className: t,
    index: r,
    children: n,
    split: a,
    style: o
  } = e;
  const {
    latestIndex: i
  } = g.useContext(Up);
  return n == null ? null : /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("div", {
    className: t,
    style: o
  }, n), r < i && a && /* @__PURE__ */ g.createElement("span", {
    className: `${t}-split`
  }, a));
}, $$ = P$;
var R$ = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const qp = /* @__PURE__ */ g.forwardRef((e, t) => {
  var r, n;
  const {
    getPrefixCls: a,
    space: o,
    direction: i
  } = g.useContext(kt), {
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
    styles: C
  } = e, E = R$(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]), [D, w] = Array.isArray(s) ? s : [s, s], S = rg(w), O = rg(D), B = ng(w), x = ng(D), F = Wn(d, {
    keepEmpty: !0
  }), _ = u === void 0 && v === "horizontal" ? "center" : u, N = a("space", p), [P, I, T] = Lh(N), k = de(N, o == null ? void 0 : o.className, I, `${N}-${v}`, {
    [`${N}-rtl`]: i === "rtl",
    [`${N}-align-${_}`]: _,
    [`${N}-gap-row-${w}`]: S,
    [`${N}-gap-col-${D}`]: O
  }, l, c, T), A = de(`${N}-item`, (r = b == null ? void 0 : b.item) !== null && r !== void 0 ? r : (n = o == null ? void 0 : o.classNames) === null || n === void 0 ? void 0 : n.item);
  let M = 0;
  const V = F.map((G, Q) => {
    var R, H;
    G != null && (M = Q);
    const L = G && G.key || `${A}-${Q}`;
    return /* @__PURE__ */ g.createElement($$, {
      className: A,
      key: L,
      index: Q,
      split: h,
      style: (R = C == null ? void 0 : C.item) !== null && R !== void 0 ? R : (H = o == null ? void 0 : o.styles) === null || H === void 0 ? void 0 : H.item
    }, G);
  }), z = g.useMemo(() => ({
    latestIndex: M
  }), [M]);
  if (F.length === 0)
    return null;
  const U = {};
  return m && (U.flexWrap = "wrap"), !O && x && (U.columnGap = D), !S && B && (U.rowGap = w), P(/* @__PURE__ */ g.createElement("div", Object.assign({
    ref: t,
    className: k,
    style: Object.assign(Object.assign(Object.assign({}, U), o == null ? void 0 : o.style), f)
  }, E), /* @__PURE__ */ g.createElement(F$, {
    value: z
  }, V)));
});
process.env.NODE_ENV !== "production" && (qp.displayName = "Space");
const Gp = qp;
Gp.Compact = kx;
const Xp = Gp;
var T$ = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Yp = (e) => {
  const {
    getPopupContainer: t,
    getPrefixCls: r,
    direction: n
  } = g.useContext(kt), {
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
    align: C,
    open: E,
    onOpenChange: D,
    placement: w,
    getPopupContainer: S,
    href: O,
    icon: B = /* @__PURE__ */ g.createElement(jp, null),
    title: x,
    buttonsRender: F = (re) => re,
    mouseEnterDelay: _,
    mouseLeaveDelay: N,
    overlayClassName: P,
    overlayStyle: I,
    destroyPopupOnHide: T,
    dropdownRender: k
  } = e, A = T$(e, ["prefixCls", "type", "danger", "disabled", "loading", "onClick", "htmlType", "children", "className", "menu", "arrow", "autoFocus", "overlay", "trigger", "align", "open", "onOpenChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide", "dropdownRender"]), M = r("dropdown", a), V = `${M}-button`, z = {
    menu: p,
    arrow: h,
    autoFocus: f,
    align: C,
    disabled: s,
    trigger: s ? [] : b,
    onOpenChange: D,
    getPopupContainer: S || t,
    mouseEnterDelay: _,
    mouseLeaveDelay: N,
    overlayClassName: P,
    overlayStyle: I,
    destroyPopupOnHide: T,
    dropdownRender: k
  }, {
    compactSize: U,
    compactItemClassnames: G
  } = Vh(M, n), Q = de(V, G, v);
  "overlay" in e && (z.overlay = m), "open" in e && (z.open = E), "placement" in e ? z.placement = w : z.placement = n === "rtl" ? "bottomLeft" : "bottomRight";
  const R = /* @__PURE__ */ g.createElement(qn, {
    type: o,
    danger: i,
    disabled: s,
    loading: u,
    onClick: l,
    htmlType: c,
    href: O,
    title: x
  }, d), H = /* @__PURE__ */ g.createElement(qn, {
    type: o,
    danger: i,
    icon: B
  }), [L, q] = F([R, H]);
  return /* @__PURE__ */ g.createElement(Xp.Compact, Object.assign({
    className: Q,
    size: U,
    block: !0
  }, A), L, /* @__PURE__ */ g.createElement(zp, Object.assign({}, z), q));
};
Yp.__ANT_BUTTON = !0;
const N$ = Yp, Zp = zp;
Zp.Button = N$;
const I$ = Zp, M$ = (e) => {
  const t = e != null && e.algorithm ? ei(e.algorithm) : ei(fi), r = Object.assign(Object.assign({}, so), e == null ? void 0 : e.token);
  return Fm(r, {
    override: e == null ? void 0 : e.token
  }, t, Rc);
}, j$ = M$;
function k$(e) {
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
const _$ = (e, t) => {
  const r = t ?? fi(e), n = r.fontSizeSM, a = r.controlHeight - 4;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, r), k$(t ?? e)), nh(n)), {
    // controlHeight
    controlHeight: a
  }), th(Object.assign(Object.assign({}, r), {
    controlHeight: a
  })));
}, L$ = _$, mn = (e, t) => new er(e).setAlpha(t).toRgbString(), La = (e, t) => new er(e).lighten(t).toHexString(), z$ = (e) => {
  const t = wn(e, {
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
}, V$ = (e, t) => {
  const r = e || "#000", n = t || "#fff";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: mn(n, 0.85),
    colorTextSecondary: mn(n, 0.65),
    colorTextTertiary: mn(n, 0.45),
    colorTextQuaternary: mn(n, 0.25),
    colorFill: mn(n, 0.18),
    colorFillSecondary: mn(n, 0.12),
    colorFillTertiary: mn(n, 0.08),
    colorFillQuaternary: mn(n, 0.04),
    colorBgElevated: La(r, 12),
    colorBgContainer: La(r, 8),
    colorBgLayout: La(r, 0),
    colorBgSpotlight: La(r, 26),
    colorBgBlur: mn(n, 0.04),
    colorBorder: La(r, 26),
    colorBorderSecondary: La(r, 19)
  };
}, H$ = (e, t) => {
  const r = Object.keys(Pc).map((a) => {
    const o = wn(e[a], {
      theme: "dark"
    });
    return new Array(10).fill(1).reduce((i, s, u) => (i[`${a}-${u + 1}`] = o[u], i[`${a}${u + 1}`] = o[u], i), {});
  }).reduce((a, o) => (a = Object.assign(Object.assign({}, a), o), a), {}), n = t ?? fi(e);
  return Object.assign(Object.assign(Object.assign({}, n), r), rh(e, {
    generateColorPalettes: z$,
    generateNeutralColorPalettes: V$
  }));
}, W$ = H$;
function K$() {
  const [e, t, r] = Mr();
  return {
    theme: e,
    token: t,
    hashId: r
  };
}
const U$ = {
  /** @private Test Usage. Do not use in production. */
  defaultConfig: hs,
  /** Default seedToken */
  defaultSeed: hs.token,
  useToken: K$,
  defaultAlgorithm: fi,
  darkAlgorithm: W$,
  compactAlgorithm: L$,
  getDesignToken: j$
}, q$ = (e) => {
  const { attributes: t, children: r, element: n } = e, { disabled: a, checked: o, textAlign: i } = n, s = dr(), u = Zg(), l = u || a, c = de("wu_check_list"), d = {
    justifyContent: i === fa.Center ? "center" : `flex-${i}`
  };
  return /* @__PURE__ */ je.jsxs(
    "div",
    {
      className: c,
      style: d,
      ...t,
      onClick: () => {
        X.blur(s), X.focus(s);
      },
      children: [
        /* @__PURE__ */ je.jsx("span", { contentEditable: !1, className: "wu_check_list_box", children: /* @__PURE__ */ je.jsx(
          B$,
          {
            disabled: l,
            checked: o,
            onChange: (v) => {
              const p = X.findPath(s, n), h = {
                checked: v.target.checked
              };
              J.setNodes(s, h, { at: p });
            }
          }
        ) }),
        /* @__PURE__ */ je.jsx(
          "span",
          {
            className: de("wu_check_list_label", {
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
}, G$ = (e) => {
  const { attributes: t, children: r } = e;
  return /* @__PURE__ */ je.jsx("span", { ...t, children: r });
}, X$ = (e) => {
  const { attributes: t, element: r, children: n } = e, { textAlign: a } = r, o = {
    textAlign: a
  };
  return /* @__PURE__ */ je.jsx("p", { style: o, ...t, children: n });
}, Y$ = (e) => {
  const { attributes: t, children: r } = e;
  return /* @__PURE__ */ je.jsx("pre", { ...t, children: /* @__PURE__ */ je.jsx("code", { children: r }) });
}, Z$ = (e) => {
  const { attributes: t, leaf: r, children: n } = e, a = de({
    "wu-font-bold": r.bold,
    "wu-underline": r.underline,
    "wu-italic": r.italic
  });
  return /* @__PURE__ */ je.jsx("span", { className: a, ...t, children: n });
}, Q$ = () => {
  const e = Ke((n) => {
    const { children: a, ...o } = n, i = n.element.type;
    return Yt(i).with(Kt.Bold, () => /* @__PURE__ */ je.jsx(Y$, { ...o, children: a })).with(Kt.Code, () => /* @__PURE__ */ je.jsx(G$, { ...o, children: a })).with(Kt.CheckList, () => /* @__PURE__ */ je.jsx(q$, { ...o, children: a })).otherwise(() => /* @__PURE__ */ je.jsx(X$, { ...o, children: a }));
  }, []), t = Ke((n) => {
    const { children: a, ...o } = n;
    return /* @__PURE__ */ je.jsx(Z$, { ...o, children: a });
  }, []), r = Ke((n) => {
    const { children: a, attributes: o } = n;
    return /* @__PURE__ */ je.jsx(
      "span",
      {
        ...o,
        style: { fontStyle: "italic", color: "gray", position: "absolute", left: 3, zIndex: -1 },
        children: a
      }
    );
  }, []);
  return { renderElement: e, renderLeaf: t, renderPlaceholder: r };
}, J$ = (e) => {
  const t = Ge(!1);
  return [(n) => {
    const a = n.ctrlKey || n.metaKey;
    Yt(a).with(!0, () => {
      Yt(n).with({ shiftKey: !0 }, (o) => {
        Yt(o).with({ key: "C" }, () => {
          console.info("切换CheckList"), n.preventDefault(), Et.toggleCheckListNode(e);
        }), Yt(o).with({ key: "L" }, () => {
          console.info("切换align-left"), n.preventDefault(), Et.toggleTextAlignMark(e, fa.Start);
        }), Yt(o).with({ key: "R" }, () => {
          console.info("切换align-right"), n.preventDefault(), Et.toggleTextAlignMark(e, fa.End);
        });
      }).with({ altKey: !0 }, (o) => {
        Yt(o).with({ key: "r" }, () => {
          console.info("还原"), o.preventDefault(), Et.restoreNormal(e);
        });
      }).with({ key: "a" }, () => {
        t.current ? (console.info("编辑器全选"), t.current = !1) : (console.info("模块内全选"), t.current = !0, Et.selectAllInModule(e) && n.preventDefault(), setTimeout(() => {
          t.current = !1;
        }, 400));
      }).with({ key: qi.Bold }, () => {
        console.info("切换加粗"), n.preventDefault(), Et.toggleBoldMark(e);
      }).with({ key: qi.Italic }, () => {
        console.info("切换斜体"), n.preventDefault(), Et.toggleItalicMark(e);
      }).with({ key: qi.Underline }, () => {
        console.info("切换下划线"), n.preventDefault(), Et.toggleUnderlineMark(e);
      });
    });
  }];
}, { darkAlgorithm: e2, compactAlgorithm: ag } = U$, t2 = (e) => {
  const { theme: t, children: r } = e;
  return /* @__PURE__ */ je.jsx(sw, { hashPriority: "high", children: /* @__PURE__ */ je.jsx(
    Fh,
    {
      theme: {
        algorithm: t === "dark" ? [e2, ag] : [ag]
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
const r2 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Qp = (...e) => e.filter((t, r, n) => !!t && n.indexOf(t) === r).join(" ");
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var n2 = {
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
const a2 = Xr(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: a = "",
    children: o,
    iconNode: i,
    ...s
  }, u) => Lu(
    "svg",
    {
      ref: u,
      ...n2,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Qp("lucide", a),
      ...s
    },
    [
      ...i.map(([l, c]) => Lu(l, c)),
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
const Bn = (e, t) => {
  const r = Xr(
    ({ className: n, ...a }, o) => Lu(a2, {
      ref: o,
      iconNode: t,
      className: Qp(`lucide-${r2(e)}`, n),
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
const o2 = Bn("AlignCenter", [
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
const i2 = Bn("AlignJustify", [
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
const s2 = Bn("AlignLeft", [
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
const u2 = Bn("AlignRight", [
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
const l2 = Bn("Bold", [
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
const c2 = Bn("Eraser", [
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
const f2 = Bn("Italic", [
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
const d2 = Bn("ListTodo", [
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
const v2 = Bn("Underline", [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
]), g2 = () => {
  const e = si((n) => Et.isBoldMarkActive(n)), t = dr(), r = lr(() => e ? "primary" : "text", [e]);
  return /* @__PURE__ */ je.jsx(
    qn,
    {
      type: r,
      onClick: () => {
        X.focus(t), Et.toggleBoldMark(t);
      },
      className: de("wu_toolbar_icon_btn"),
      icon: /* @__PURE__ */ je.jsx(l2, { className: de("wu_toolbar_icon_btn_icon") })
    }
  );
}, m2 = () => {
  const e = si((n) => Et.isItalicMarkActive(n)), t = dr(), r = lr(() => e ? "primary" : "text", [e]);
  return /* @__PURE__ */ je.jsx(
    qn,
    {
      type: r,
      onClick: () => {
        X.focus(t), Et.toggleItalicMark(t);
      },
      className: de("wu_toolbar_icon_btn"),
      icon: /* @__PURE__ */ je.jsx(f2, { className: de("wu_toolbar_icon_btn_icon") })
    }
  );
}, h2 = () => {
  const e = si(
    (n) => Et.isUnderlineMarkActive(n)
  ), t = dr(), r = lr(() => e ? "primary" : "text", [e]);
  return /* @__PURE__ */ je.jsx(
    qn,
    {
      type: r,
      onClick: () => {
        X.focus(t), Et.toggleUnderlineMark(t);
      },
      className: de("wu_toolbar_icon_btn"),
      icon: /* @__PURE__ */ je.jsx(v2, { className: de("wu_toolbar_icon_btn_icon") })
    }
  );
}, p2 = () => {
  const e = dr();
  return /* @__PURE__ */ je.jsx(
    qn,
    {
      type: "text",
      onClick: () => {
        X.focus(e), Et.restoreNormal(e);
      },
      className: de("wu_toolbar_icon_btn"),
      icon: /* @__PURE__ */ je.jsx(c2, { className: de("wu_toolbar_icon_btn_icon") })
    }
  );
}, b2 = () => {
  const e = si((i) => Et.isTextAlignMarkActive(i)), t = dr(), r = lr(() => e ? "primary" : "text", [e]), n = (i) => {
    X.focus(t), Yt(e === i.key).with(!0, () => {
      Et.toggleTextAlignMark(t);
    }).otherwise(() => {
      Et.toggleTextAlignMark(t, i.key);
    });
  }, a = de("wu_toolbar_icon_btn_icon"), o = [
    {
      label: "左对齐",
      key: fa.Start,
      icon: /* @__PURE__ */ je.jsx(s2, { className: a })
    },
    {
      label: "居中对齐",
      key: fa.Center,
      icon: /* @__PURE__ */ je.jsx(o2, { className: a })
    },
    {
      label: "右对齐",
      key: fa.End,
      icon: /* @__PURE__ */ je.jsx(u2, { className: a })
    }
  ];
  return /* @__PURE__ */ je.jsx(
    I$,
    {
      menu: {
        items: o,
        selectable: !0,
        selectedKeys: e ? [e] : [],
        onClick: n
      },
      children: /* @__PURE__ */ je.jsx(
        qn,
        {
          type: r,
          className: de("wu_toolbar_icon_btn"),
          icon: /* @__PURE__ */ je.jsx(i2, { className: a })
        }
      )
    }
  );
}, y2 = () => {
  const e = si((n) => Et.isCheckListNode(n)), t = dr(), r = lr(() => e ? "primary" : "text", [e]);
  return /* @__PURE__ */ je.jsx(
    qn,
    {
      type: r,
      className: de("wu_toolbar_icon_btn"),
      onClick: () => {
        X.focus(t), Et.toggleCheckListNode(t);
      },
      icon: /* @__PURE__ */ je.jsx(d2, { className: de("wu_toolbar_icon_btn_icon") })
    }
  );
}, C2 = () => /* @__PURE__ */ je.jsxs(Xp, { className: de("wu_toolbar"), children: [
  /* @__PURE__ */ je.jsx(y2, {}),
  /* @__PURE__ */ je.jsx(g2, {}),
  /* @__PURE__ */ je.jsx(m2, {}),
  /* @__PURE__ */ je.jsx(h2, {}),
  /* @__PURE__ */ je.jsx(p2, {}),
  /* @__PURE__ */ je.jsx(b2, {})
] }), w2 = (e) => {
  const { theme: t, placeholder: r, initialValue: n = rl() } = e, [a, { showPlaceholder: o, handlePlaceholder: i }] = mD(), { renderElement: s, renderLeaf: u, renderPlaceholder: l } = Q$(), [c] = J$(a);
  return /* @__PURE__ */ je.jsx(t2, { theme: t, children: /* @__PURE__ */ je.jsxs(
    qE,
    {
      editor: a,
      onValueChange: (d) => {
        console.log("val", d), i(d);
      },
      onSelectionChange: (d) => {
        console.log("selection:", d);
      },
      initialValue: n,
      children: [
        /* @__PURE__ */ je.jsx(C2, {}),
        /* @__PURE__ */ je.jsx(
          jE,
          {
            className: "wu_editable",
            renderElement: s,
            renderLeaf: u,
            renderPlaceholder: l,
            spellCheck: !0,
            placeholder: o ? r : void 0,
            onKeyDown: c
          }
        )
      ]
    }
  ) });
};
export {
  w2 as WuEditor
};
